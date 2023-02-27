import React from "react";

import { addOrUpdateIndividualInputReducer } from "../Reducers";

const InputForAuth = props => {
    const [inputState, dispatch] = React.useReducer(addOrUpdateIndividualInputReducer, { value: (props.initialValue) || "", isValid: false })
    const inputChangeHandler = e => dispatch({ type: "change", val: e.target.value })
    const inputBlurHandler = () => dispatch({ type: "blur" })

    // this destructuring is made so as not to call the entire inputState or props, since this could lead to infinite looping
    const { value, isValid } = inputState
    const { onInput, field } = props

    // useEffect here makes sure that the function being called from the parent re-runs every time the values are updated 
    React.useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    const keyHandler = () => {
        console.log(inputState)
    }

    return <input onChange={inputChangeHandler} onKeyUp={keyHandler} onBlur={inputBlurHandler} className="border-solid border-2 outline-none rounded-tag block mb-0 pb-0 mt-4 h-12 w-9/10 text-center" type="text" placeholder={props.placeholderText} autoComplete="off"/>
}

export default InputForAuth;