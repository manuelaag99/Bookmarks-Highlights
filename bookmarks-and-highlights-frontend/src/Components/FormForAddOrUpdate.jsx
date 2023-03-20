import React, { useEffect } from "react";

import { useInput } from "../custom-hooks";

export default function FormForAddOrUpdate ({ classnames, errorText, field, initialValidity, initialValue, inputType, labelText, listOfBooks, onInput, placeholderText }) {
    const [inputState, inputChangeHandler, inputBlurHandler] = useInput({ value: initialValue, isValid: initialValidity });
    const { value, isValid } = inputState;

    // useEffect here makes sure that the function being called from the parent re-runs every time the values are updated 
    useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    
    // if (listOfBooks) {
    //     console.log(listOfBooks);
    // } else {
    //     console.log("There are no books in the database.")
    // }

    return (
        <div className={"h-16 mt-3 " + classnames}>
            <label className={"inline text-add-or-update-p font-bold " + ((!inputState.isValid && inputState.isTouched) ? "text-red-btn" : null)}>{labelText}</label>
            <i className={"ml-3 text-red-btn " + ((!inputState.isValid && inputState.isTouched) ? "inline" : "hidden")}>{errorText}</i>
            <input onChange={inputChangeHandler} onBlur={inputBlurHandler} className="block outline-none mt-1 pl-2 h-8 w-95 pr-2" type={inputType} placeholder={placeholderText} value={value} />
        </div>
    )
}