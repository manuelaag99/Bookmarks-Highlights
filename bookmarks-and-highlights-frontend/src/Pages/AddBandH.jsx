import React from "react";
import { useLocation } from "react-router-dom";

import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

// this one is very similar to /UpdateBandH so I might simplify this code or put them together once I've worked out the API 
const AddBandH = () => {
    const location = useLocation();
    const { userid, userinfo } = location.state

    const [ formSubmission, setFormSubmission ] = React.useState(false)
    const addOrUpdate = props => {
        setFormSubmission(() => "submit")
        console.log(formSubmission)
    }

    const [ formValidity, setformValidity ] = React.useState(false)
    const checkFormValidity = (stateOfForm) => {
        setformValidity(() => stateOfForm.isValid)
    }

    const submitHandle = (e) => {
        e.preventDefault()
        console.log()
    }

    return (
        <div onSubmit={submitHandle} className="flex flex-wrap items-center justify-center w-full h-screen h- mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate userid={userid} addUpdateBtn={addOrUpdate} isAddOrUpdateBtnAbled={formValidity} isUpdating={false} isAddButton={true} route={"/" + userid + "/myprofile"}/>
            <BodyForAddOrUpdate userid={userid} submitForm={formSubmission} isFormValid={checkFormValidity} isAdd={true} />
        </div>
    )
}

export default AddBandH;