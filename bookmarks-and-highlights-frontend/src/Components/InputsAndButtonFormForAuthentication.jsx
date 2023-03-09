import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import IndividualInputForAuthentication from "./IndividualInputForAuthentication";
import { useForm } from "../custom-hooks";

import { users, entries } from "../../../MOCKDATA";

export default function InputsAndButtonFormForAuthentication ({ buttonInput, confirmPasswordPlaceholder, emailPlaceholder, initialInputs, passwordPlaceholder, type, usernamePlaceholder }) {
    const [stateOfAuthInputForm, authInputHandler] = useForm(initialInputs, false)

    const [inputButtonValidity, setInputButtonValidity] = React.useState(false)
    const changeHandler = () => {
        setInputButtonValidity(() => stateOfAuthInputForm.isValid)
    }

    let selectedUser

    const submitHandler = e => {
        e.preventDefault()
        console.log(stateOfAuthInputForm)
        selectedUser = users.find(user => user.username === stateOfAuthInputForm.inputs.username.value) || users.find(user => user.email === stateOfAuthInputForm.inputs.username.value)
    }

    return (
        <form onKeyUp={changeHandler} className="flex flex-wrap justify-center rounded-tag bg-var-2 w-full shadow-card my-5" id="sign-in-or-sign-up-form" onSubmit={submitHandler} >
            <div className="my-5 w-full flex flex-wrap justify-center">
                <IndividualInputForAuthentication errorText="Please write a valid username" inputType="text" field="username" onInput={authInputHandler} placeholderText={usernamePlaceholder} />
                {type === "Sign up" && <IndividualInputForAuthentication errorText="Please write a valid e-mail" inputType="email" field="email" onInput={authInputHandler} placeholderText={emailPlaceholder} />}
                <IndividualInputForAuthentication errorText="Please write a valid password" inputType="password" field="password" onInput={authInputHandler} placeholderText={passwordPlaceholder} />
                {type === "Sign up" && <IndividualInputForAuthentication errorText="The passwords do not match" inputType="password" field="confirmPassword" onInput={authInputHandler} placeholderText={confirmPasswordPlaceholder} />}
            </div>
            <Link className="w-9/10 mt-[-20px] mb-5" to={"/" + (selectedUser ? selectedUser.id : null) + "/myprofile"}>
                <Button buttonText={buttonInput} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered " form="sign-in-or-sign-up-form" isAbled={inputButtonValidity} isSignInOrSignUpButton={true} type="submit"  />
            </Link>
        </form>
    )
}