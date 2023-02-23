import { nonEmptyText } from "./CheckValidity";

const addOrUpdateIndividualInputReducer = (state, action) => {
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

export { addOrUpdateIndividualInputReducer }

const addOrUpdateFormReducer = (state, action) => {
    switch (action.type) {
        case "change":
            let formIsValid = true
            for (const specificInput in state.inputs) {
                if (specificInput === action.field) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    // this means that, if the gathered info is not the matching field, we should just take the stored value
                    formIsValid = formIsValid && state.inputs[specificInput].isValid
                }
            }
            let value
            for (const specificInput in state.inputs) {
                if (specificInput === action.field) {
                    if (specificInput === "tags") {
                        value = action.value.replaceAll(", ", ",").split(",")
                    } else {
                        value = action.value
                    }
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.field]: { value: value, isValid: action.isValid }
                },
                isValid: formIsValid
            }
        default:
            return state
    }
}

export { addOrUpdateFormReducer };