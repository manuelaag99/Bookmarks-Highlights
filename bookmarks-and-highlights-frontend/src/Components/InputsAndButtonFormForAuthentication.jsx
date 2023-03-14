import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import ErrorMessage from "./Portals/ErrorMessage";
import IndividualInputForAuthentication from "./IndividualInputForAuthentication";
import Loading from "./Portals/Loading";
import { useForm } from "../custom-hooks";

import { users, entries } from "../MOCKDATA";

export default function InputsAndButtonFormForAuthentication ({ buttonInput, confirmPasswordPlaceholder, emailPlaceholder, initialInputsForForm, passwordPlaceholder, type, usernamePlaceholder }) {
    const [stateOfAuthInputForm, authInputHandler] = useForm(initialInputsForForm, false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [inputButtonValidity, setInputButtonValidity] = useState(false)
    const changeHandler = () => {
        setInputButtonValidity(() => stateOfAuthInputForm.isValid)
    };

    let selectedUser; // TO-DO 

    const submitHandler = async e => {
        e.preventDefault();
        setLoading(true);
        if (type === "Sign up") {
            try {
                const response = await fetch("http://localhost:3000/api/users/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        email: stateOfAuthInputForm.inputs.email.value,
                        username: stateOfAuthInputForm.inputs.username.value,
                        password: stateOfAuthInputForm.inputs.password.value
                    })
                });
                const responseData = await response.json();
                setLoading(false);
                if (!response.ok) {
                    setError(true);
                    throw new Error(responseData.message);
                };
            } catch (err) {
                console.log(err);
                setError(err.message || "Something went wrong, please try again!");
            }
        } else if (type === "Sign in") {
            try {
                const response = await fetch("http://localhost:3000/api/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        email: stateOfAuthInputForm.inputs.email.value,
                        password: stateOfAuthInputForm.inputs.password.value
                    })
                });
                const responseData = await response.json();
                console.log(responseData)
                setLoading(false);
                if (!response.ok) {
                    setError(true);
                    throw new Error(responseData.message);
                };
            } catch (err) {
                console.log(err);
                setError(err.message || "Something went wrong, please try again!");
            }
        }
        console.log(stateOfAuthInputForm)
        // selectedUser = users.find(user => user.username === stateOfAuthInputForm.inputs.username.value) || users.find(user => user.email === stateOfAuthInputForm.inputs.username.value)
    }

    const closeErrorWindow = () => setError(null);

    return (
        <div>
            <ErrorMessage open={error} error={error} onClose={closeErrorWindow} />
            <form onKeyUp={changeHandler} className="flex flex-wrap justify-center rounded-tag bg-var-2 w-full shadow-card my-5" id="sign-in-or-sign-up-form" onSubmit={submitHandler} >
                <div className="my-5 w-full flex flex-wrap justify-center">
                    {type === "Sign up" && <IndividualInputForAuthentication errorText="Please write a valid username" inputType="text" field="username" formState={stateOfAuthInputForm.inputs} onInput={authInputHandler} placeholderText={usernamePlaceholder} />}
                    <IndividualInputForAuthentication errorText="Please write a valid e-mail" inputType="email" field="email" formState={stateOfAuthInputForm.inputs} onInput={authInputHandler} placeholderText={emailPlaceholder} />
                    <IndividualInputForAuthentication errorText="Please write a valid password" inputType="password" field="password" formState={stateOfAuthInputForm.inputs} onInput={authInputHandler} placeholderText={passwordPlaceholder} />
                    {type === "Sign up" && <IndividualInputForAuthentication errorText="The passwords do not match" inputType="password" field="confirmPassword" formState={stateOfAuthInputForm.inputs} onInput={authInputHandler} placeholderText={confirmPasswordPlaceholder} />}
                </div>
                {/* <Link className="w-9/10 mt-[-20px] mb-5" to={"/" + (selectedUser ? selectedUser.id : null) + "/myprofile"}> */}
                    <Button buttonText={buttonInput} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered " form="sign-in-or-sign-up-form" isAbled={inputButtonValidity} isSignInOrSignUpButton={true} type="submit"  />
                {/* </Link> */}
            </form>
            <Loading open={loading} />
        </div>
    )
}