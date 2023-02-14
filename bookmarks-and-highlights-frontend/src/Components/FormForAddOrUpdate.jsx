import React from "react";

const checkValidity = (value) => {
    if (value === "") {
        return false
    } else {
        return true
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                value: action.val,
                isValid: checkValidity(action.val)
            }
        case "blur":
            return {
                ...state,
                value: action.val,
                isValid: checkValidity(action.val)
            }
        default:
            return state
    }
}

const FormForAddOrUpdate = props => {
    const [inputState, dispatch] = React.useReducer(reducer, { value: "", isValid: true })

    const inputChangeHandler = e => dispatch({ type: "change", val: e.target.value })

    const inputBlurHandler = e => dispatch({ type: "blur", val: e.target.value })

    return (
        <form  className={"h-16 mt-3 " + props.classnames}>
            <label className={"inline text-add-or-update-p font-bold " + (inputState.isValid ? null : "text-red-btn")}>{props.labelText}</label>
            <i className={"ml-3 text-red-btn " + (inputState.isValid ? "hidden" : "inline")}>{props.errorText}</i>
            <input onChange={inputChangeHandler} onBlur={inputBlurHandler} className="block outline-none mt-1 pl-2 h-8 w-95" type={props.inputType} placeholder={props.placeholderText} />
        </form>
    )
}

export default FormForAddOrUpdate;