import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import Button from "./Button";
import ErrorMessage from "./Portals/ErrorMessage";
import IndividualInputForAuthentication from "./IndividualInputForAuthentication";
import Loading from "./Portals/Loading";
import { useForm, useHttpHook } from "../custom-hooks";

export default function InputsAndButtonFormForAuthentication ({ buttonInput, confirmPasswordPlaceholder, emailPlaceholder, initialInputsForForm, passwordPlaceholder, type, usernamePlaceholder }) {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const { loading, error, sendHttpRequest, clearError } = useHttpHook();
    const [stateOfAuthInputForm, authInputHandler] = useForm(initialInputsForForm, false);
    
    const [inputButtonValidity, setInputButtonValidity] = useState(false)
    const changeHandler = () => setInputButtonValidity(() => stateOfAuthInputForm.isValid);

    useEffect(() => {
        if (stateOfAuthInputForm.inputs.password.value === stateOfAuthInputForm.inputs.confirmPassword.value) {
            console.log("they match")
        } else {
            console.log("They dont match")
        }
    }, [stateOfAuthInputForm.inputs.confirmPassword.value]);

    let responseData;
    const submitHandler = async e => {
        e.preventDefault();
        if (type === "Sign up") {
            if (stateOfAuthInputForm.inputs.password.value === stateOfAuthInputForm.inputs.confirmPassword.value) {
                console.log("they match");
                
                try {
                    responseData = await sendHttpRequest(
                        "http://localhost:3000/api/users/signup",
                        "POST",
                        JSON.stringify({
                            email: stateOfAuthInputForm.inputs.email.value,
                            username: stateOfAuthInputForm.inputs.username.value,
                            password: stateOfAuthInputForm.inputs.password.value
                        }),
                        { "Content-Type": "Application/json" })
                    auth.login();
                } catch (err) {};
            } else {
                console.log("they don't match")
            }
        } else if (type === "Sign in") {
            try {
                responseData = await sendHttpRequest(
                    "http://localhost:3000/api/users/login",
                    "POST",
                    JSON.stringify({
                        email: stateOfAuthInputForm.inputs.email.value,
                        password: stateOfAuthInputForm.inputs.password.value
                    }),
                    { "Content-Type": "Application/json" })
                    auth.login();
            } catch (err) {};
        };
        navigate("/" + responseData.user.id + "/myprofile");
    };

    return (
        <div>
            <ErrorMessage open={error} error={error} onClose={clearError} />
            <form onKeyUp={changeHandler} className="flex flex-wrap justify-center rounded-tag bg-var-2 w-full shadow-card my-5" id="sign-in-or-sign-up-form" onSubmit={submitHandler} >
                <div className="my-5 w-full flex flex-wrap justify-center relative">
                    {type === "Sign up" && <IndividualInputForAuthentication windowInfoText="Write at least 6 characters" errorText="Please write a valid username" inputType="text" field="username" formState={stateOfAuthInputForm.inputs} onInput={authInputHandler} placeholderText={usernamePlaceholder} />}
                    <IndividualInputForAuthentication windowInfoText="" errorText="Please write a valid e-mail" inputType="email" field="email" formState={stateOfAuthInputForm.inputs} onInput={authInputHandler} placeholderText={emailPlaceholder} />
                    <IndividualInputForAuthentication windowInfoText="Use special characters, capital letters, and numbers" errorText="Please write a valid password" inputType="password" field="password" formState={stateOfAuthInputForm.inputs} onInput={authInputHandler} placeholderText={passwordPlaceholder} />
                    {type === "Sign up" && <IndividualInputForAuthentication windowInfoText="Make sure this matches your password" errorText="The passwords do not match" inputType="password" field="confirmPassword" formState={stateOfAuthInputForm.inputs} onInput={authInputHandler} placeholderText={confirmPasswordPlaceholder} />}
                </div>
                <Button buttonText={buttonInput} classnames="w-9/10 mt-[-20px] mb-5 text-var-1 bg-var-4 hover:bg-var-4-hovered " form="sign-in-or-sign-up-form" isAbled={inputButtonValidity} isSignInOrSignUpButton={true} type="submit"  />
            </form>
            <Loading open={loading} />
        </div>
    )
}