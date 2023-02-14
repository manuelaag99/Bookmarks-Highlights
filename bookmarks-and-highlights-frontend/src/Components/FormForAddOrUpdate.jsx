import React from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                value: action.val,
                isValid: true
            }
            break;
    
        default:
            return state
            break;
    }
}

const FormForAddOrUpdate = props => {
    const [inputState, dispatch] = React.useReducer(reducer, { value: "", isValid: false })

    const inputChangeHandler = e => {
        dispatch({ type: "change", val: e.target.value })
    }

    const inputBlurHandler = e => {

    }

    console.log(inputState)

    return (
        <div className={"h-16 mt-3 " + props.classnames + (inputState.isValid ? " text-red-btn" : null)}>
            <label className="text-add-or-update-p font-bold block">{props.labelText}</label>
            <input onChange={inputChangeHandler} onBlur={inputBlurHandler} className="outline-none mt-1 pl-2 h-8 w-95" type={props.inputType} placeholder={props.placeholderText} />
        </div>
    )
}

export default FormForAddOrUpdate;