import React from "react";
import { useLocation } from "react-router-dom";

import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

const UpdateBandH = props => {
    const location = useLocation();
    const { userid, bookid, title, entries, itemid } = location.state;

    return (
        <div className="flex flex-wrap items-center justify-center w-full min-h-screen mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate isUpdating={true} isAddButton={false} route={"/" + userid + "/bandhs/idofbook/" + bookid} stateToSend={{ userid: userid, bookid: bookid, title: title, entries: entries }}/>
            <BodyForAddOrUpdate />
        </div>
    )
}

export default UpdateBandH;