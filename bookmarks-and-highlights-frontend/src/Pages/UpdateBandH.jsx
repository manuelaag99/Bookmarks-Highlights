import React from "react";
import { useLocation } from "react-router-dom";

import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

export default function UpdateBandH () {
    const location = useLocation();
    const { userid, bookid, title, entries, itemid } = location.state;

    const [ formValidity, setformValidity ] = React.useState(false)
    const checkFormValidity = (stateOfForm) => {
        setformValidity(() => stateOfForm.isValid)
    }

    const selectedItem = entries.find(entry => entry.itemId === itemid)

    if (!selectedItem) {
        return <p>Sorry, no matching item was found!</p>
    }

    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate type="submit" form="add-or-update-form" userid={userid} isAddOrUpdateBtnAbled={formValidity} classnames=" w-1/3 " isUpdating={true} isAddButton={false} route={"/" + userid + "/bandhs/labelid/" + bookid} stateToSend={{ userid: userid, bookid: bookid, title: title, entries: entries }}/>
            <BodyForAddOrUpdate isFormValid={checkFormValidity} initialFormValidity={true} isAdd={false} itemValues={selectedItem} userid={userid} bookid={bookid} title={title} entries={entries} itemid={itemid} />
        </div>
    )
}