import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import BackBtnForAddOrUpdate from "./BackBtnForAddOrUpdate";
import Button from "./Button";
import ConfirmDelete from "./Portals/ConfirmDelete";
import ErrorMessage from "./Portals/ErrorMessage";
import Loading from "./Portals/Loading";
import { useHttpHook } from "../custom-hooks";

export default function TopForAddOrUpdate ({ classnames, formForSubmitButtonform, isAddOrUpdateBtnAbled, isUpdating, itemid, route, stateToSend, typeForSubmitButton, userid }) {   
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [ showDeleteWindow, setShowDeleteWindow ] = useState(false)
    const closeDeleteWindow = () => setShowDeleteWindow(() => false)
    const openDeleteWindow = () => setShowDeleteWindow(() => true)

    const { loading, error, sendHttpRequest, clearError } = useHttpHook();

    const deleteButtonHandle = async () => {
        console.log("deleted!")
        closeDeleteWindow()
        try {
            await sendHttpRequest("http://localhost:3000/api/entries/user/" + userid + "/delete/" + itemid, "DELETE", null, { Authorization: "Bearer " + auth.token });
            navigate("/" + userid + "/myprofile");
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <div className="flex flex-wrap md:flex-col flex-row w-full absolute top-0 md:h-1/4 h-16 justify-between">
        <ErrorMessage open={error} error={error} onClose={clearError} />
        <Link className="md:w-1/12 w-2/10 md:h-16 h-full" to={route} state={stateToSend}>
            <BackBtnForAddOrUpdate/>
        </Link>
        <div className="md:h-6/10 h-full flex flex-wrap flex-row justify-around md:w-full w-8/10">
            {isUpdating && <Button classnames={" bg-red-btn hover:bg-red-hvr text-var-1 md:text-dsk-addBandHbtns text-mob-addBandHbtns min-h-2/3 my-auto  " + classnames} buttonClick={openDeleteWindow} isAbled={true} linkRoute={isUpdating ?  "/" + userid + "/bandhs" : "/" + userid + "/myprofile"} buttonText={"delete"} />}
            <Button classnames={" bg-var-4 hover:bg-var-4-hovered text-var-1 md:text-dsk-addBandHbtns text-mob-addBandHbtns min-h-2/3 my-auto " + classnames} type={typeForSubmitButton} form={formForSubmitButtonform} isAbled={isAddOrUpdateBtnAbled} linkRoute={isUpdating ?  "/" + userid + "/bandhs" : "/" + userid + "/myprofile"} buttonText={isUpdating ? "update" : "add"} />
            <ConfirmDelete open={showDeleteWindow} onDelete={deleteButtonHandle} onClose={closeDeleteWindow} />
        </div>
        <Loading open={loading} />
    </div>
    )
}