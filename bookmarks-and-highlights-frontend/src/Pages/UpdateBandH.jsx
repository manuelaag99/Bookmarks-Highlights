import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { addOrUpdateFormReducer } from "../Reducers";
import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

import { users, entries } from "../MOCKDATA"

const UpdateBandH = () => {
    const location = useLocation();
    const { userid, bookid, title, entries, itemid } = location.state;

    const [ formValidity, setformValidity ] = React.useState(false)
    const checkFormValidity = (stateOfForm) => {
        setformValidity(() => stateOfForm.isValid)
    }

    // this function establishes the inputs and their validity status
    const [stateOfForm, dispatch] = React.useReducer(addOrUpdateFormReducer, {
        inputs: {
            title: { value: "", isValid: false },
            date: { value: "", isValid: false },
            page: { value: "", isValid: false },
            tags: { value: "", isValid: false }
        },
        isValid: false
    })

    const selectedItem = entries.find(entry => entry.itemId === itemid)

    if (!selectedItem) {
        return <p>Sorry, no matching item was found!</p>
    }
    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate type="submit" form="add-or-update-form" userid={userid} isAddOrUpdateBtnAbled={formValidity} isUpdating={true} isAddButton={false} route={"/" + userid + "/bandhs/labelid/" + bookid} stateToSend={{ userid: userid, bookid: bookid, title: title, entries: entries }}/>
            <BodyForAddOrUpdate isFormValid={checkFormValidity} initialFormValidity={true} isAdd={false} itemValues={selectedItem} userid={userid} bookid={bookid} title={title} entries={entries} itemid={itemid} />
        </div>
    )
}

export default UpdateBandH;