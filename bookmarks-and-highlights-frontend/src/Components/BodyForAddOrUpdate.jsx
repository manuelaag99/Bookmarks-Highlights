import React, { useEffect, useParams, useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorMessage from "./Portals/ErrorMessage";
import FormForAddOrUpdate from "./FormForAddOrUpdate";
import Loading from "./Portals/Loading";
import PhotoForAddOrUpdate from "./PhotoForAddOrUpdate";
import TagsSection from "./TagsSection";
import { useForm, useHttpHook } from "../custom-hooks";
import { v4 as uuidv4 } from 'uuid';

export default function BodyForAddOrUpdate ({ bookid, entries, itemid, initialFormValidity, isAdd, isFormValid, itemValues, title, userid }) {
    const navigate = useNavigate();
    const { loading, error, sendHttpRequest, clearError } = useHttpHook();
    const [stateOfForm, inputHandler] = useForm({
            title: { value: "", isValid: false },
            date: { value: "", isValid: false },
            page: { value: "", isValid: false },
            tags: { value: "", isValid: false }
        }, false)
    
    const initialTagsState = isAdd ? [] : itemValues.tags;
    const [tagsState, setTagsState] = useState(initialTagsState);
    const keyHandle = () => {
        if (tagsState !== stateOfForm.inputs.tags.value) setTagsState(() => stateOfForm.inputs.tags.value);
        isFormValid(stateOfForm);
    };

    const [userEntries, setUserEntries] = useState();
    const [listOfBooks, setListOfBooks] = useState();
    // useEffect(() => {
    //     const fetchUserEntries = async () => {
    //         try {
    //             const responseData = await sendHttpRequest("http://localhost:3000/api/entries/user/" + userid + "/all");
    //             setUserEntries(responseData);
    //         } catch (err) {}
    //     };
    //     fetchUserEntries();
    //     const fetchBooks = async () => {
    //         try {
    //             const responseData = await sendHttpRequest("http://localhost:3000/api/entries/books");
    //             setListOfBooks(responseData);
    //         } catch (err) {}
    //     };
    //     fetchBooks();
    // }, [sendHttpRequest]);

    const submitHandler = async e => {
        e.preventDefault()
        console.log(stateOfForm)
        try {
            const responseData = await sendHttpRequest(
                "http://localhost:3000/api/entries/user/" + userid + "/add",
                "POST",
                JSON.stringify({
                    bookTitle: stateOfForm.inputs.title.value,
                    bookId: uuidv4(), //this is temporary
                    date: stateOfForm.inputs.date.value,
                    pageNumber: stateOfForm.inputs.page.value,
                    tags: stateOfForm.inputs.tags.value,
                    creator: userid
                }),
                { "Content-Type": "Application/json" })
        } catch (err) {}
        navigate("/" + userid + "/myprofile");
    };
    
    return (
        <form id="add-or-update-form" onKeyUp={() => {keyHandle()}} onSubmit={submitHandler} className="w-85 md:h-6/10 h-8/10 md:mt-32 mt-16 flex flex-wrap flex-row">
            <ErrorMessage open={error} error={error} onClose={clearError} />
            <PhotoForAddOrUpdate photo="" />
            <div className="w-3/5 md:h-7/10 h-3/10 pl-6 block md:hidden">
                <FormForAddOrUpdate onInput={inputHandler} listOfBooks={listOfBooks} field="title" initialValue={isAdd ? null : itemValues.bookTitle} initialValidity={initialFormValidity} errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
            </div>
            <div className="h-7/10 w-full md:w-2/3 pl-3">
                <div className="md:w-full hidden md:block mb-3">
                    <FormForAddOrUpdate onInput={inputHandler} listOfBooks={listOfBooks} field="title" initialValue={isAdd ? null : itemValues.bookTitle || null} initialValidity={initialFormValidity} errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
                </div>
                <div className="flex flex-wrap flex-row justify-start">
                    <FormForAddOrUpdate onInput={inputHandler} field="date" initialValue={isAdd ? null : itemValues.date || null} initialValidity={initialFormValidity} errorText="error!" labelText="date:" placeholderText="DD/MM/YYYY" classnames="w-2/3 " inputType="date" />
                    <FormForAddOrUpdate onInput={inputHandler} field="page" initialValue={isAdd ? null : itemValues.pageNumber || null} initialValidity={initialFormValidity} errorText="error!" labelText="page #:" placeholderText="e.g. 31, 105" classnames="w-3/10 " inputType="number" />
                </div>
                <FormForAddOrUpdate onInput={inputHandler} field="tags" initialValue={isAdd ? null : initialTagsState.toString().replaceAll(",", ", ") || null} initialValidity={initialFormValidity} errorText="error!" labelText="tags:" placeholderText="e.g. geography..." classnames="w-full mt-6 " />
                <div className="mt-6">
                    <TagsSection tagsArray={tagsState} />
                </div>
            </div>
            <Loading open={loading} />
        </form>
    )
}