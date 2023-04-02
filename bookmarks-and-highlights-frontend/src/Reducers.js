import { areBothTextsTheSame, minLengthText, nonEmptyText } from "./CheckValidity";

export function addOrUpdateIndividualInputReducer (state, action) {
    switch (action.type) {
        case "change":
            let checkValidity;
            if (action.placeholder === "Confirm your password") {
                checkValidity = nonEmptyText(action.val);
                // TO-DO checkValidity = areBothTextsTheSame(action.formState.password.value, action.formState.confirmPassword.value); 
            } else {
                checkValidity = nonEmptyText(action.val);
            }
            return {
                ...state,
                value: action.val,
                isValid: checkValidity
            }
        case "blur":
            return {
                ...state,
                isTouched: true
            }
        case "focus":
            return {
                ...state,
                isTouched: false,
                isActive: true
            }
        case "list option":
            return {
                ...state,
                value: action.val,
                isValid: true //CHECK
            }
        default:
            return state
    }
}

export function addOrUpdateFormReducer (state, action) {
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
                        if (action.value) {
                            value = action.value.trim().split(",").filter((possibleTag) => {
                                const trimmedTag = possibleTag.trim()
                                if (trimmedTag !== "") return trimmedTag.trim()
                            })
                        }
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