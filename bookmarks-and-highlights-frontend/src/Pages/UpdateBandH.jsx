import React from "react";
import { useLocation } from "react-router-dom";

import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

const UpdateBandH = () => {
    const location = useLocation();
    const { userid, bookid, title, entries, itemid } = location.state;

    const [ formValidity, setformValidity ] = React.useState(false)
    const checkFormValidity = (stateOfForm) => {
        console.log(stateOfForm)
        setformValidity(() => stateOfForm.isValid)
    }

    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate userid={userid} isAddOrUpdateBtnAbled={formValidity}  isUpdating={true} isAddButton={false} route={"/" + userid + "/bandhs/labelid/" + bookid} stateToSend={{ userid: userid, bookid: bookid, title: title, entries: entries }}/>
            <BodyForAddOrUpdate isFormValid={checkFormValidity} isAdd={false} userid={userid} bookid={bookid} title={title} entries={entries} itemid={itemid} />
        </div>
    )
}

export default UpdateBandH;