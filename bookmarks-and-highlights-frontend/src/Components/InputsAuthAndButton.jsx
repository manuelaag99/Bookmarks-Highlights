import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button"; 
import InputForAuth from "./InputForAuth";
import { useForm } from "../use-form-hook";

const InputsAuthAndButton = props => {
    const [stateOfAuthInputForm, authInputHandler] = useForm({
        username: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        }
    }, false)

    const [inputButtonValidity, setInputButtonValidity] = React.useState(false)

    const submitHandler = e => {
        e.preventDefault()
        console.log(stateOfAuthInputForm)
    }

    const changeHandler = () => {
        console.log(stateOfAuthInputForm)
        setInputButtonValidity(() => stateOfAuthInputForm.isValid)
    }

    return (
        <div className="flex flex-wrap justify-center items-center rounded-tag bg-var-2 h-60 hover:h-64 duration-300 w-full my-4 shadow-card">
            <form onSubmit={submitHandler} onChange={changeHandler} className="my-0 h-24 w-full flex flex-wrap justify-center">
                <InputForAuth field="username" onInput={authInputHandler} placeholderText={props.upperInput} />
                <InputForAuth field="password" onInput={authInputHandler} placeholderText={props.lowerInput} />
            </form>
            <Link className="w-9/10" to="/:userid/myprofile">
                <Button isAbled={inputButtonValidity} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " buttonText={props.buttonInput} isDefaultButton={true} isFacebookButton={false} isGoogleButton={false} />
            </Link>
        </div>
    )
}

export default InputsAuthAndButton;