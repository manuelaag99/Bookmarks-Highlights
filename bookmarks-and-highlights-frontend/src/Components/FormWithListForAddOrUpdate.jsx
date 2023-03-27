import React, { useEffect, useRef, useState } from "react";

import { useInput } from "../custom-hooks";

export default function FormWithListForAddOrUpdate({ classnames, errorText, field, initialValidity, initialValue, inputType, isBookListOpen, labelText, listOfBooks, onInput, placeholderText, selectTitle, shouldBookListClose, shouldBookListOpen, valueFromList }) {
    const DUMMYOPTIONS = [{ bookTitle: "The History of Europe", bookId: "85jt95rh4897h5948rj3i" },
    { bookTitle: "The History of Europe", bookId: "903ekj24d2f6f42a0l000" }];

    // console.log(valueFromList)
    const [inputState, inputChangeHandler, inputBlurHandler, chooseFromListHandler] = useInput({ value: initialValue, isValid: initialValidity });
    const { value, isValid } = inputState;

    useEffect(() => onInput(field, value, isValid), [onInput, field, value, isValid])

    const [listQuery, setListQuery] = useState([]);
    useEffect(() => { setListQuery(DUMMYOPTIONS) }, []);

    

    const focusInHandler = () => shouldBookListOpen();
    const focusOutHandler = () => shouldBookListClose();
    const clickHandle = e => {
        const listValue = e.target.innerText;+
        selectTitle(listValue);
        focusOutHandler();
    };

    const [dynamicValue, setDynamicValue] = useState("");
    useEffect(() => {
        chooseFromListHandler(valueFromList);
        setDynamicValue(valueFromList);
    }, [valueFromList]);
    useEffect(() => {
        setDynamicValue(value);
    }, [value]);



    return (
        <div className={"h-16 mt-3 " + classnames}>
            <label className={"inline text-add-or-update-p font-bold " + ((!inputState.isValid && inputState.isTouched) ? "text-red-btn" : null)}>{labelText}</label>
            <i className={"ml-3 text-red-btn " + ((!inputState.isValid && inputState.isTouched) ? "inline" : "hidden")}>{errorText}</i>
            <input className="block outline-none mt-1 pl-2 h-8 w-95 pr-2" type={inputType} placeholder={placeholderText} value={dynamicValue} onChange={inputChangeHandler} onFocus={focusInHandler} onBlur={inputBlurHandler} />
            {isBookListOpen && <div className="absolute bg-var-1 text-var-5 w-95 h-fit cursor-pointer shadow-card">
                {listQuery && DUMMYOPTIONS.map((book, index) => <p key={index} onClick={clickHandle} className="hover:bg-var-4 hover:text-var-1 duration-100 w-full px-3 py-2 h-fit place-self-center">{book.bookTitle}</p>)}
                <p onClick={clickHandle} className="hover:bg-var-4 hover:text-var-1 duration-100 px-3 py-2 h-fit items-center">Add... </p>
            </div>}
        </div>
    )
};