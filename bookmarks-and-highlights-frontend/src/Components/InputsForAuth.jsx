import React from "react";

const authenticationReducer = () => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                value: action.val,
                isValid: nonEmptyText(action.val)
            }
        case "blur":
            return {
                ...state,
                isTouched: true
            }
        default:
            return state
    }
}

const InputForAuth = props => {
    const [authInputState, dispatch] = React.useReducer(authenticationReducer, { value: "", isValid: false })

    return (
            <input className="border-solid border-2 outline-none rounded-tag block mb-0 pb-0 mt-4 h-12 w-9/10 text-center" type="text" placeholder={props.placeholderText} autoComplete="off"/>
    )
}

export default InputForAuth;