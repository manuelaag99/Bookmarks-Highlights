import React from "react";
import { addOrUpdateFormReducer } from "./Reducers";

const useForm = (initialInputs, initialValidity) => {
    // this function establishes the inputs and their validity status
    const [stateOfForm, dispatch] = React.useReducer(addOrUpdateFormReducer, {
        inputs: initialInputs,
        isValid: initialValidity
    })

    // this hook makes sure that this function is only re-rendered given the state of the specified dependencies
    const inputHandler = React.useCallback((field, value, isValid) => {
        dispatch({type: "change", field: field, value: value, isValid: isValid})
    }, [dispatch])

    return [stateOfForm, inputHandler]
}

export { useForm }