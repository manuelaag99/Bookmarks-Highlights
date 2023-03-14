import React from "react";

import { useInput } from "../custom-hooks";

export default function IndividualInputForAuthentication ({ errorText, field, formState, inputType, onInput, placeholderText }) {
    const [inputState, inputChangeHandler, inputBlurHandler] = useInput({ value: "" , isValid: false }, formState);
    const { value, isValid } = inputState;

    // useEffect here makes sure that the function being called from the parent re-runs every time the values are updated 
    React.useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    return (
        <>
            <input autoComplete="off" className={"mb-5 px-2 border-solid border-2 outline-none rounded-tag block h-12 w-9/10 text-center " + ((!inputState.isValid && inputState.isTouched) && "border-red-btn" )} onBlur={inputBlurHandler} onChange={inputChangeHandler} placeholder={placeholderText} type={inputType} />
            <p className={"mt-[-18px] text-red-btn " + ((!inputState.isValid && inputState.isTouched) ? "inline" : "hidden")}>{errorText}</p>
        </>
    )
}