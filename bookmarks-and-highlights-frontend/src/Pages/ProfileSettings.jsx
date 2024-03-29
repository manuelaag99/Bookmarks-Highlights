import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import BackBtnForAddOrUpdate from "../Components/BackBtnForAddOrUpdate";
import Button from "../Components/Button";
import ErrorMessage from "../Components/Portals/ErrorMessage";
import FormForAddOrUpdate from "../Components/FormForAddOrUpdate";
import ImageUpload from "../Components/ImageUpload";
import Loading from "../Components/Portals/Loading";
import { useForm, useHttpHook } from "../custom-hooks";

export default function ProfileSettings () {
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const { loading, error, sendHttpRequest, clearError } = useHttpHook();

    const [userInfo, setUserInfo] = useState();
    const [formData, setFormData] = useState({
        profilePhotoUrl: { value: "", isValid: true },
        username: { value: "", isValid: false },
        displayName: { value: "", isValid: false },
        shortBio: { value: "", isValid: false }
    }, false);
    const [stateOfForm, inputHandler] = useForm(formData);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const responseData = await sendHttpRequest("http://localhost:3000/api/users/" + auth.userId + "/info");
                setUserInfo(responseData.user)
                setFormData({
                    profilePhotoUrl: { value: responseData.user.profilePhotoUrl, isValid: true },
                    username: { value: responseData.user.username, isValid: true },
                    displayName: { value: responseData.user.displayName, isValid: true },
                    shortBio: { value: responseData.user.shortBio, isValid: true }
                }, true)
                setUpdateButtonValidity(stateOfForm.isValid);
            } catch (err) {}
        }
        fetchUserInfo();
    }, [sendHttpRequest, auth.userId]);

    const [updateButtonValidity, setUpdateButtonValidity] = useState(false);
    const formChangeHandler = () => {
        setUpdateButtonValidity(stateOfForm.isValid)
    };

    const updateHandle = async e => {
        e.preventDefault();
        try {
            const formData = new FormData();
                    formData.append("profilePhotoUrl", stateOfForm.inputs.profilePhotoUrl.value);
                    formData.append("username", stateOfForm.inputs.username.value);
                    formData.append("displayName", stateOfForm.inputs.displayName.value);
                    formData.append("shortBio", stateOfForm.inputs.shortBio.value);
            await sendHttpRequest("http://localhost:3000/api/users/" + auth.userId + "/updateProfile", "PATCH", formData);
            navigate("/" + auth.userId + "/myprofile");
        } catch (err) {
            console.log(err)
        }
    };

    const deleteHandle = () => {
        console.log("delete")
    }

    const logOutHandle = () => {
        auth.logout();
        navigate("/");
    }

    if (!userInfo) {
        <Loading open={loading} />
    } else {
        return (
            <div onKeyUp={formChangeHandler} className="flex flex-wrap justify-center w-full h-full mx-auto bg-var-2 shadow-card relative">
                <ErrorMessage open={error} error={error} onClose={clearError} />
                <div className="fixed top-0 w-full h-16">
                    <Link className="md:w-1/12 w-2/10 h-full absolute left-0" to={"/" + auth.userId + "/myprofile"}>
                        <BackBtnForAddOrUpdate />
                    </Link>
                </div>

                <div className="mt-16 h-4/5 w-8/10 flex flex-col sm:flex-row mb-5">
                    <div className="flex flex-col justify-center items-start sm:w-3/5 w-full h-fit">
                        <div className="w-full mt-0 px-4 mb-2">
                            <label className="w-full sm:text-add-or-update-p text-add-or-update-mob font-bold mt-0 ">Profile Picture:</label>
                        </div>
                        <div className="w-full mt-0 px-4">
                            <ImageUpload field="profilePhotoUrl" initialValue={userInfo.profilePhotoUrl} initialValidity={true} onInput={inputHandler} />
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:h-full h-3/5 px-4 ">
                        <FormForAddOrUpdate classnames=" w-full sm:mt-0 mt-3" field="username" onInput={inputHandler} initialValue={userInfo.username} initialValidity={true} labelText="Username:" placeholderText="Write a username..." />
                        <FormForAddOrUpdate classnames=" w-full mt-3" field="displayName" onInput={inputHandler} initialValue={userInfo.displayName} initialValidity={true} labelText="Display name:" placeholderText="Write a name to display..." />
                        <FormForAddOrUpdate classnames=" w-full mt-3" field="shortBio" onInput={inputHandler} initialValue={userInfo.shortBio} initialValidity={true} labelText="Short bio:" placeholderText="Write less than 100 words..." />
                    </div>
                </div>

                <div className="sm:h-1/3 flex flex-wrap flex-row justify-around w-full my-6">
                    <Button buttonClick={updateHandle} buttonText="Update" classnames=" w-8/10 text-var-2 bg-var-4 hover:bg-var-4-hovered my-2 " isAbled={updateButtonValidity} type="submit" />
                    <Button buttonClick={logOutHandle} buttonText="Log out" classnames=" w-8/10 text-var-2 bg-var-4 hover:bg-var-4-hovered my-2 " isAbled={true} />
                    <Button buttonClick={deleteHandle} buttonText="Delete my account" classnames=" w-8/10 text-var-2 bg-red-btn hover:bg-red-hvr my-2 " isAbled={true} />
                </div>
                <Loading open={loading} />
            </div>
        )
    }
}