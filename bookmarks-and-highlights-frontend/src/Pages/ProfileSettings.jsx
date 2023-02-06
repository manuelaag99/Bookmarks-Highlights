import React from "react";
import { Link } from "react-router-dom";

import AddUpdateDeleteBtn from "../Components/AddUpdateDeleteBtn";
import BackBtnForAddOrUpdate from "../Components/BackBtnForAddOrUpdate";
import FormForAddOrUpdate from "../Components/FormForAddOrUpdate";

const ProfileSettings = props => {
    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
            <div className="fixed top-0 w-full h-1/10 z-20">
                <Link className="w-15 h-full absolute left-0" to="/myprofile">
                    <BackBtnForAddOrUpdate/>
                </Link>
            </div>
            <div className="h-2/5 w-8/10">
                <FormForAddOrUpdate pText="Display name:" placeholderText="Your name..." />
                <FormForAddOrUpdate pText="Short bio:" placeholderText="Write less than 100 words" />

            </div>
            <div className="h-1/6 flex flex-wrap flex-row justify-around w-full">
                <AddUpdateDeleteBtn isDeleteBtn={false} isAddBtn={false} buttonText="Log out" linkRoute="/home" />
                <AddUpdateDeleteBtn isDeleteBtn={true} isAddBtn={false} buttonText="Delete my account" linkRoute="/home" />
            </div>
        </div>
    )
}

export default ProfileSettings;