import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import BackBtnForAddOrUpdate from "../Components/BackBtnForAddOrUpdate";
import Button from "../Components/Button";
import ErrorMessage from "../Components/Portals/ErrorMessage";
import FormForAddOrUpdate from "../Components/FormForAddOrUpdate";
import ImageUpload from "../Components/ImageUpload";
import Loading from "../Components/Portals/Loading";
import { useForm, useHttpHook } from "../custom-hooks";

export default function ProfileSettings () {
    const navigate = useNavigate();
    const { userid } = useParams();

    const { loading, error, sendHttpRequest, clearError } = useHttpHook();

    const [userInfo, setUserInfo] = useState();
    const [formData, setFormData] = useState({
        profilePhotoUrl: { value: "", isValid: false },
        username: { value: "", isValid: false },
        displayName: { value: "", isValid: false },
        shortBio: { value: "", isValid: false }
    }, false);
    const [stateOfForm, inputHandler] = useForm(formData);

    console.log(userInfo);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const responseData = await sendHttpRequest("http://localhost:3000/api/users/" + userid + "/info");
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
    }, [sendHttpRequest, userid]);

    const [updateButtonValidity, setUpdateButtonValidity] = useState(false);
    const formChangeHandler = () => {
        setUpdateButtonValidity(stateOfForm.isValid)
        console.log(stateOfForm)
    };

    const submitHandler = async e => {
        e.preventDefault();
        console.log(stateOfForm)
        try {
            const formData = new FormData();
                    formData.append("profilePhotoUrl", stateOfForm.inputs.profilePhotoUrl.value);
                    formData.append("username", stateOfForm.inputs.username.value);
                    formData.append("displayName", stateOfForm.inputs.displayName.value);
                    formData.append("shortBio", stateOfForm.inputs.shortBio.value);
            await sendHttpRequest("http://localhost:3000/api/users/" + userid + "/updateProfile", "PATCH", formData);
            navigate("/" + userid + "/myprofile");
        } catch (err) {
            console.log(err)
        }
    };

    if (!userInfo) {
        <Loading open={loading} />
    } else {
        return (
            <form id="update-profile-form" onKeyUp={formChangeHandler} onSubmit={submitHandler} className="flex flex-wrap justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
                <ErrorMessage open={error} error={error} onClose={clearError} />
                <div className="fixed top-0 w-full h-16">
                    <Link className="md:w-1/12 w-1/10 h-full absolute left-0" to={"/" + userid + "/myprofile"}>
                        <BackBtnForAddOrUpdate />
                    </Link>
                </div>
                <div className="mt-16 h-3/5 w-8/10 flex sm:flex-col flex-row flex-wrap">
                    <div className="flex justify-center items-start sm:w-3/10 sm:h-full w-full h-1/3">
                        <ImageUpload field="profilePhotoUrl" initialValue={userInfo.profilePhotoUrl} initialValidity={true} isProfileSettings={true} onInput={inputHandler} />
                    </div>
                    <div className="flex flex-col sm:w-7/10 sm:h-full h-2/3 w-9/10 px-4 items-center">
                        <FormForAddOrUpdate classnames=" w-full sm:mt-0 mt-3" field="username" onInput={inputHandler} initialValue={userInfo.username} initialValidity={true} labelText="Username:" placeholderText="Write a username..." />
                        <FormForAddOrUpdate classnames=" w-full mt-3" field="displayName" onInput={inputHandler} initialValue={userInfo.displayName} initialValidity={true} labelText="Display name:" placeholderText="Write a name to display..." />
                        <FormForAddOrUpdate classnames=" w-full mt-3" field="shortBio" onInput={inputHandler} initialValue={userInfo.shortBio} initialValidity={true} labelText="Short bio:" placeholderText="Write less than 100 words..." />
                    </div>
                </div>
                <div className="sm:h-1/3 flex flex-wrap flex-row justify-around w-full">
                    <Button buttonText="Update" classnames=" w-8/10 text-var-2 bg-var-4 hover:bg-var-4-hovered " form="update-profile-form" isAbled={updateButtonValidity} linkRoute="/home" type="submit" />
                    <Button buttonClick={clickButtonHandle} buttonText="Log out" classnames=" w-8/10 text-var-2 bg-var-4 hover:bg-var-4-hovered " isAbled={true} linkRoute="/home" />
                    <Button buttonText="Delete my account" classnames=" w-8/10 text-var-2 bg-red-btn hover:bg-red-hvr " isAbled={true} linkRoute="/home" />
                </div>
                <Loading open={loading} />
            </form>
        )
    }
}