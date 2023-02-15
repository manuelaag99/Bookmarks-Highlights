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