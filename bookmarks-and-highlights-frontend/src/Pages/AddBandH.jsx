import React, { useContext, useState } from "react";

import { AuthContext } from "../context/auth-context";
import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

// this one is very similar to /UpdateBandH so I might simplify this code or put them together once I've worked out the API 
export default function AddBandH () {
    const auth = useContext(AuthContext);

    const [ formValidity, setformValidity ] = useState(false);
    const checkFormValidity = (stateOfForm) => setformValidity(() => stateOfForm.isValid);

    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate typeForSubmitButton="submit" formForSubmitButtonform="add-or-update-form" userid={auth.userId} isAddOrUpdateBtnAbled={formValidity} classnames=" w-8/10 " isUpdating={false} route={"/" + auth.userId + "/myprofile"}/>
            <BodyForAddOrUpdate userid={auth.userId} isFormValid={checkFormValidity} initialFormValidity={false} isAdd={true} />
        </div>
    )
};