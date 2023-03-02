import React from "react";

import { addOrUpdateIndividualInputReducer } from "../Reducers";

export default function FormForAddOrUpdate ({ classnames, errorText, field, initialValidity, initialValue, inputType, labelText, onInput, placeholderText }) {
    const [inputState, dispatch] = React.useReducer(addOrUpdateIndividualInputReducer, { value: (initialValue) || "", isValid: (initialValidity) })
    const inputChangeHandler = e => dispatch({ type: "change", val: e.target.value })
    const inputBlurHandler = () => dispatch({ type: "blur" })

    // this destructuring is made so as not to call the entire inputState or props, since this could lead to infinite looping
    const { value, isValid } = inputState

    // useEffect here makes sure that the function being called from the parent re-runs every time the values are updated 
    React.useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    return (
        <div className={"h-16 mt-3 " + classnames}>
            <label className={"inline text-add-or-update-p font-bold " + ((!inputState.isValid && inputState.isTouched) ? "text-red-btn" : null)}>{labelText}</label>
            <i className={"ml-3 text-red-btn " + ((!inputState.isValid && inputState.isTouched) ? "inline" : "hidden")}>{errorText}</i>
            <input onChange={inputChangeHandler} onBlur={inputBlurHandler} className="block outline-none mt-1 pl-2 h-8 w-95 pr-2" type={inputType} placeholder={placeholderText} value={inputState.value} />
        </div>
    )
}