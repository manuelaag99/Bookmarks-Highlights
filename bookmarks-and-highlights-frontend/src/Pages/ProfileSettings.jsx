import React from "react";
import { Link, useLocation } from "react-router-dom";

import BackBtnForAddOrUpdate from "../Components/BackBtnForAddOrUpdate";
import Button from "../Components/Button";
import FormForAddOrUpdate from "../Components/FormForAddOrUpdate";
import { useForm } from "../custom-hooks";

export default function ProfileSettings () {
    const location = useLocation();
    const { userid } = location.state;

    const inputHandler = React.useCallback((field, value, isValid) => {
        const thing = field + value + isValid
    }, [])

    return (
        <div className="flex flex-wrap justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
            <div className="fixed top-0 w-full h-16">
                <Link className="md:w-1/12 w-1/10 h-full absolute left-0" to={"/" + userid + "/myprofile"}>
                    <BackBtnForAddOrUpdate/>
                </Link>
            </div>
            <div className="mt-16 h-2/5 w-8/10">
                <FormForAddOrUpdate onInput={inputHandler} labelText="Username:" placeholderText="Write less than 100 words" />
                <FormForAddOrUpdate onInput={inputHandler} labelText="Display name:" placeholderText="Your name..." />
                <FormForAddOrUpdate onInput={inputHandler} labelText="Short bio:" placeholderText="Write less than 100 words" />
            </div>
            <div className="h-1/3 flex flex-wrap flex-row justify-around w-full">
                <Button buttonText="Update" classnames=" w-8/10 text-var-2 bg-var-4 hover:bg-var-4-hovered " isAbled={true} linkRoute="/home" />
                <Button buttonText="Log out" classnames=" w-8/10 text-var-2 bg-var-4 hover:bg-var-4-hovered " isAbled={true} linkRoute="/home" />
                <Button buttonText="Delete my account" classnames=" w-8/10 text-var-2 bg-red-btn hover:bg-red-hvr " isAbled={true} linkRoute="/home" />
            </div>
        </div>
    )
}