import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

// this one is very similar to /UpdateBandH so I might simplify this code or put them together once I've worked out the API 
export default function AddBandH () {
    const auth = useContext(AuthContext);
    const location = useLocation();
    const { userid, userinfo } = location.state;

    const [ formValidity, setformValidity ] = useState(false);
    const checkFormValidity = (stateOfForm) => setformValidity(() => stateOfForm.isValid);

    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen h- mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate typeForSubmitButton="submit" formForSubmitButtonform="add-or-update-form" userid={userid} isAddOrUpdateBtnAbled={formValidity} classnames=" w-8/10 " isUpdating={false} route={"/" + userid + "/myprofile"}/>
            <BodyForAddOrUpdate userid={userid} isFormValid={checkFormValidity} initialFormValidity={false} isAdd={true} />
        </div>
    )
};