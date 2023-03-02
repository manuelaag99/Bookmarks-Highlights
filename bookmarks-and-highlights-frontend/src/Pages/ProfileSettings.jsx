import React from "react";
import { Link, useLocation } from "react-router-dom";

import BackBtnForAddOrUpdate from "../Components/BackBtnForAddOrUpdate";
import Button from "../Components/Button";
import FormForAddOrUpdate from "../Components/FormForAddOrUpdate";

export default function ProfileSettings () {
    const location = useLocation();
    const { userid } = location.state;

    const inputHandler = React.useCallback((field, value, isValid) => {
        const thing = field + value + isValid
    }, [])

    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
            <div className="fixed top-0 w-full h-1/10 z-20">
                <Link className="w-15 h-full absolute left-0" to={"/" + userid + "/myprofile"}>
                    <BackBtnForAddOrUpdate/>
                </Link>
            </div>
            <div className="h-2/5 w-8/10">
                <FormForAddOrUpdate onInput={inputHandler} pText="Display name:" placeholderText="Your name..." />
                <FormForAddOrUpdate onInput={inputHandler} pText="Short bio:" placeholderText="Write less than 100 words" />

            </div>
            <div className="h-1/6 flex flex-wrap flex-row justify-around w-full">
                <Button buttonText="Log out" linkRoute="/home" />
                <Button buttonText="Delete my account" linkRoute="/home" />
            </div>
        </div>
    )
}