import React, { useEffect, useState } from "react";

import { useInput } from "../custom-hooks";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import WindowForInputInfo from "./WindowForInputInfo";

export default function IndividualInputForAuthentication ({ errorText, field, formState, inputType, onInput, placeholderText, showError, windowInfoText }) {
    const [inputState, inputChangeHandler, inputBlurHandler, inputFocusHandler, chooseFromListHandler] = useInput({ value: "" , isValid: false, isTouched: false }, formState);
    const { value, isValid } = inputState;

    // useEffect here makes sure that the function being called from the parent re-runs every time the values are updated 
    useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [inputTypeForPassword, setInputTypeForPassword] = useState();
    useEffect(() => {
        if (field === "password" || field === "confirmPassword") {
            if (isPasswordVisible) {
                setInputTypeForPassword("text");
            } else if (!isPasswordVisible) {
                setInputTypeForPassword();
            }
        }
    }, [isPasswordVisible])
    
    return (
        <>
            <div className={"flex flex-row mb-7 px-2 border-solid bg-var-1 border-2 rounded-tag h-12 w-9/10 relative " + ((!inputState.isValid && inputState.isTouched) && "border-red-btn" )}>
                <input autoComplete="off" className="w-full h-full outline-none text-center" onBlur={inputBlurHandler} onFocus={inputFocusHandler} onChange={inputChangeHandler} placeholder={placeholderText} type={inputTypeForPassword || inputType} />
                {(field === "password" || field === "confirmPassword") && !isPasswordVisible && <button className="absolute right-2 top-2 w-1/10 my-auto" onClick={() => setIsPasswordVisible(true)} >
                    <VisibilityIcon className="w-full"/>
                </button>}
                {(field === "password" || field === "confirmPassword") && isPasswordVisible && <button className="absolute right-2 top-2 w-1/10 my-auto" onClick={() => setIsPasswordVisible(false)} >
                    <VisibilityOffIcon className="w-full"/>
                </button>}
            </div>
            <p className={"mt-[-26px] text-red-btn text-center px-4 " + ((!inputState.isValid && inputState.isTouched && field !== "confirmPassword") ? "inline" : "hidden")}>{errorText}</p>
            {(field === "confirmPassword") && showError && <p className={"mt-[-24px] text-red-btn text-center px-4 " + ((inputState.isTouched) ? "inline" : "hidden")}>{errorText}</p>}
            {inputState.isActive && !inputState.isTouched && windowInfoText && <WindowForInputInfo windowInfoText={windowInfoText}/>}
        </>
    )
}