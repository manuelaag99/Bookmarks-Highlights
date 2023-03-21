import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import ErrorMessage from "../Components/Portals/ErrorMessage";
import Loading from "../Components/Portals/Loading";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";
import { useHttpHook } from "../custom-hooks";

export default function UpdateBandH () {
    const { loading, error, sendHttpRequest, clearError } = useHttpHook();
    const location = useLocation();
    const { userid, bookid, title, entries, itemid } = location.state;

    const [ formValidity, setformValidity ] = useState(false)
    const checkFormValidity = (stateOfForm) => setformValidity(() => stateOfForm.isValid)

    const [userEntry, setUserEntry] = useState();
    useEffect(() => {
        const fetchUserEntries = async () => {
            try {
                const responseData = await sendHttpRequest("http://localhost:3000/api/entries/user/" + userid + "/" + itemid);
                setUserEntry(responseData.selectedEntry);
            } catch (err) {}
        };
        fetchUserEntries();
    }, [sendHttpRequest, userid, itemid]);

    if (loading) {
        return <Loading open={loading} />
    } else if (!loading && !userEntry) {
        return (
            <div className="my-10 text-var-6 opacity-40">
                <p>Sorry, there are no entries yet for this user!</p>
            </div>) 
    } else if (!loading && userEntry) {
        return (
            <div className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
                <ErrorMessage open={error} error={error} onClose={clearError} />
                <TopForAddOrUpdate typeForSubmitButton="submit" formForSubmitButtonform="add-or-update-form" itemid={itemid} userid={userid} isAddOrUpdateBtnAbled={formValidity} classnames=" w-1/3 " isUpdating={true} route={"/" + userid + "/bandhs/labelid/" + bookid} stateToSend={{ userid: userid, bookid: bookid, title: title, entries: entries }}/>
                <BodyForAddOrUpdate isFormValid={checkFormValidity} initialValues={userEntry} initialFormValidity={true} isAdd={false} userid={userid} bookid={bookid} title={title} entries={entries} itemid={itemid} />
                <Loading open={loading} />
            </div>
        )
    }
}