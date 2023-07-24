import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { addOrUpdateFormReducer } from "./Reducers";
import { addOrUpdateIndividualInputReducer } from "./Reducers";

const useInput = (initialInput) => {
    const [inputState, dispatch] = useReducer(addOrUpdateIndividualInputReducer, initialInput)
    const inputChangeHandler = e => dispatch({ type: "change", val: e.target.value, placeholder: e.target.placeholder });
    const inputBlurHandler = () => dispatch({ type: "blur" });
    const inputFocusHandler = () => dispatch({ type: "focus" });
    const chooseFromListHandler = (valueFromList) => dispatch({ type: "list option", val: valueFromList });
    
    return [inputState, inputChangeHandler, inputBlurHandler, inputFocusHandler, chooseFromListHandler];
}
export { useInput };

const useForm = (initialFormInputs, initialFormValidity) => {
    const [stateOfForm, dispatch] = useReducer(addOrUpdateFormReducer, {
        inputs: initialFormInputs,
        isValid: initialFormValidity
    })

    // this hook makes sure that this function is only re-rendered given the state of the specified dependencies
    const inputHandler = useCallback((field, value, isValid) => {
        dispatch({type: "change", field: field, value: value, isValid: isValid})
    }, [dispatch])

    return [stateOfForm, inputHandler]
}
export { useForm };

const useHttpHook = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const activeHttpRequest = useRef([]);

    const sendHttpRequest = useCallback(async (url, method = "GET", body = null, headers = {} ) => {
        setLoading(true)
        try {
            const httpAbortCtrl = new AbortController();
            activeHttpRequest.current.push(httpAbortCtrl);
            const response = await fetch(url, {
                method,
                headers,
                body,
                signal: httpAbortCtrl.signal
            });
            const responseData = await response.json();
            // console.log(responseData);
            activeHttpRequest.current = activeHttpRequest.current.filter(reqCtrl => reqCtrl !== httpAbortCtrl);

            if (!response.ok) {
                throw new Error(responseData.message);
            };
            setLoading(false);
            return responseData;
        } catch (err) {
            // console.log(err);
            setError(err.message || "Something went wrong, please try again!");
            setLoading(false);
            throw err;
        }
    }, []);

    const clearError = () => setError(null);

    useEffect(() => {
        return () => activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abort());
    }, []);

    return { loading, error, sendHttpRequest, clearError, setError };
};

export { useHttpHook };