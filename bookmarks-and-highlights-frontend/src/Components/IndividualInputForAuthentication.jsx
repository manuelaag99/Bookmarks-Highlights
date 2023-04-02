import React from "react";

import { useInput } from "../custom-hooks";
import WindowForInputInfo from "./WindowForInputInfo";

export default function IndividualInputForAuthentication ({ errorText, field, formState, inputType, onInput, placeholderText, windowInfoText }) {
    const [inputState, inputChangeHandler, inputBlurHandler, inputFocusHandler, chooseFromListHandler] = useInput({ value: "" , isValid: false, isTouched: false }, formState);
    const { value, isValid } = inputState;

    // useEffect here makes sure that the function being called from the parent re-runs every time the values are updated 
    React.useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    return (
        <>
            <input autoComplete="off" className={"mb-5 px-2 border-solid border-2 outline-none rounded-tag block h-12 w-9/10 text-center " + ((!inputState.isValid && inputState.isTouched) && "border-red-btn" )} onBlur={inputBlurHandler} onFocus={inputFocusHandler} onChange={inputChangeHandler} placeholder={placeholderText} type={inputType} />
            <p className={"mt-[-18px] text-red-btn text-center px-4 " + ((!inputState.isValid && inputState.isTouched) ? "inline" : "hidden")}>{errorText}</p>
            {inputState.isActive && !inputState.isTouched && windowInfoText && <WindowForInputInfo windowInfoText={windowInfoText}/>}
        </>
    )
}