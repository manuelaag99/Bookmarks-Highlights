import React, { useEffect } from "react";

import { useInput } from "../custom-hooks";

export default function FormForAddOrUpdate({ classnames, errorText, field, initialValidity, initialValue, inputType, labelText, onInput, placeholderText }) {
    const [inputState, inputChangeHandler, inputBlurHandler] = useInput({ value: initialValue, isValid: initialValidity });
    const { value, isValid } = inputState;

    console.log(initialValue)
    useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    return (
        <div className={"h-16 " + classnames}>
            <label className={"inline sm:text-add-or-update-p text-add-or-update-mob font-bold " + ((!inputState.isValid && inputState.isTouched) ? "text-red-btn" : null)}>{labelText}</label>
            <i className={"ml-3 text-red-btn " + ((!inputState.isValid && inputState.isTouched) ? "inline" : "hidden")}>{errorText}</i>
            <input className="block outline-none sm:text-add-or-update-p text-add-or-update-mob mt-1 pl-2 h-8 w-95 pr-2" type={inputType} placeholder={placeholderText} value={value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
        </div>
    )
};