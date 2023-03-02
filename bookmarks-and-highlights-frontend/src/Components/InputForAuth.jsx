import React from "react";

import { addOrUpdateIndividualInputReducer } from "../Reducers";

export default function InputForAuth ({ field, inputType, onInput, placeholderText }) {
    
    const [inputState, dispatch] = React.useReducer(addOrUpdateIndividualInputReducer, { value: "", isValid: false })
    const inputChangeHandler = e => dispatch({ type: "change", val: e.target.value })
    const inputBlurHandler = () => dispatch({ type: "blur" })

    // this destructuring is made so as not to call the entire inputState or props, since this could lead to infinite looping
    const { value, isValid } = inputState

    // useEffect here makes sure that the function being called from the parent re-runs every time the values are updated 
    React.useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    return (
        <>
            <input autoComplete="off" className="mb-5 px-2 border-solid border-2 outline-none rounded-tag block h-12 w-9/10 text-center" onBlur={inputBlurHandler} onChange={inputChangeHandler} placeholder={placeholderText} type={inputType} />
            <p className={"mt-[-18px] text-red-btn " + ((!inputState.isValid && inputState.isTouched) ? "inline" : "hidden")}>wrong</p>
        </>
        )
}