import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button"; 
import InputForAuth from "./InputForAuth";
import { useForm } from "../use-form-hook";

const InputsAuthAndButton = props => {
    const [stateOfAuthInputForm, authInputHandler] = useForm(props.initialInputs, false)
  
    const [inputButtonValidity, setInputButtonValidity] = React.useState(false)
    const buttonValidity = React.useRef(false)
    const changeHandler = () => {
        console.log(stateOfAuthInputForm)
        buttonValidity.current = stateOfAuthInputForm.isValid
        // setInputButtonValidity(() => stateOfAuthInputForm.isValid)
    }
    console.log(buttonValidity.current)
    const submitHandler = e => {
        e.preventDefault()
        console.log(stateOfAuthInputForm)
    }

    return (
        <form onChange={changeHandler} className="flex flex-wrap justify-center rounded-tag bg-var-2 w-full shadow-card my-5" id="sign-in-or-sign-up-form" onSubmit={submitHandler} >
            <div className="my-5 w-full flex flex-wrap justify-center">
                <InputForAuth inputType="text" field="username" onInput={authInputHandler} placeholderText={props.usernamePlaceholder} />
                {props.type === "Sign up" && <InputForAuth inputType="email" field="email" onInput={authInputHandler} placeholderText={props.emailPlaceholder} />}
                <InputForAuth inputType="password" field="password" onInput={authInputHandler} placeholderText={props.passwordPlaceholder} />
                {props.type === "Sign up" && <InputForAuth inputType="password" field="confirmPassword" onInput={authInputHandler} placeholderText={props.confirmPasswordPlaceholder} />}
            </div>
            <Link className="w-9/10 mt-[-20px] mb-5" to={"/" + "0001" + "/myprofile"}>
                <Button buttonText={props.buttonInput} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered " form="sign-in-or-sign-up-form" isAbled={buttonValidity.current} isSignInOrSignUpButton={true} type="submit"  />
            </Link>
        </form>
    )
}

export default InputsAuthAndButton;