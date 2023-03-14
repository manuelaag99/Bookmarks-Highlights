import React from "react";
import { addOrUpdateFormReducer } from "./Reducers";
import { addOrUpdateIndividualInputReducer } from "./Reducers";

const useInput = (initialInput, formState) => {
    const [inputState, dispatch] = React.useReducer(addOrUpdateIndividualInputReducer , initialInput)
    const inputChangeHandler = e => {
        dispatch({ type: "change", val: e.target.value, placeholder: e.target.placeholder, formState: formState });
    }
    const inputBlurHandler = () => dispatch({ type: "blur" })
    return [inputState, inputChangeHandler, inputBlurHandler]
}
export { useInput }

const useForm = (initialFormInputs, initialFormValidity) => {
    // this function establishes the inputs and their validity status
    const [stateOfForm, dispatch] = React.useReducer(addOrUpdateFormReducer, {
        inputs: initialFormInputs,
        isValid: initialFormValidity
    })

    // this hook makes sure that this function is only re-rendered given the state of the specified dependencies
    const inputHandler = React.useCallback((field, value, isValid) => {
        dispatch({type: "change", field: field, value: value, isValid: isValid})
    }, [dispatch])

    return [stateOfForm, inputHandler]
}
export { useForm }