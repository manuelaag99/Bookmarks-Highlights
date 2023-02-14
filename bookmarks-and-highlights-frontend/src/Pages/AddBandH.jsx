import React from "react";
import { useLocation } from "react-router-dom";

import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

// this one is very similar to /UpdateBandH so I might simplify this code or put them together once I've worked out the API 
const AddBandH = props => {
    const location = useLocation();
    const { userid, userinfo } = location.state

    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen h- mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate isUpdating={false} isAddButton={true} route={"/" + userid + "/myprofile"}/>
            <BodyForAddOrUpdate isAdd={true} />
        </div>
    )
}

export default AddBandH;