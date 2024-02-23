import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import ErrorMessage from "./Portals/ErrorMessage";
import FormForAddOrUpdate from "./FormForAddOrUpdate";
import FormWithListForAddOrUpdate from "./FormWithListForAddOrUpdate";
import ImageUpload from "./ImageUpload";
import Loading from "./Portals/Loading";
import TagsSection from "./TagsSection";
import { useForm, useHttpHook } from "../custom-hooks";

export default function BodyForAddOrUpdate ({ bookid, entries, itemid, initialFormValidity, initialValues, isAdd, isFormValid, itemValues, title, userid }) {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const { loading, error, sendHttpRequest, clearError } = useHttpHook();
    const [formData, setFormData] = useState({
        title: { value: isAdd ? "" : initialValues.bookTitle, isValid: isAdd ? false : true },
        date: { value: isAdd ? "" : initialValues.date, isValid: isAdd ? false : true },
        page: { value: isAdd ? "" : initialValues.pageNumber, isValid: isAdd ? false : true },
        tags: { value: isAdd ? [] : initialValues.tags, isValid: isAdd ? false : true },
        photoUrl: { value: isAdd ? "" : initialValues.photoUrl, isValid: isAdd ? false : true }
    }, false);
    const [stateOfForm, inputHandler] = useForm(formData);

    const [existingBooks, setExistingBooks] = useState();
    useEffect(() => {
        !isAdd && setFormData(initialValues);
        !isAdd && setTitleValue(initialValues.bookTitle);
        const fetchAllBooks = async () => {
            try {
                const responseData = await sendHttpRequest("http://localhost:3000/api/books/getAllBooks", "GET", null, { Authorization: "Bearer " + auth.token });
                setExistingBooks(responseData.allBooks);
            } catch (err) {}
        };
        fetchAllBooks()
    }, [initialValues]);

    const initialTagsState = isAdd ? [] : initialValues.tags;
    const [tagsState, setTagsState] = useState(initialTagsState);
    const keyHandle = () => {
        if (tagsState !== stateOfForm.inputs.tags.value) setTagsState(() => stateOfForm.inputs.tags.value);
        isFormValid(stateOfForm);
    };

    const submitHandler = async e => {
        e.preventDefault()
        if (isAdd) {
            try {
                const formData = new FormData();
                    formData.append("bookTitle", stateOfForm.inputs.title.value);
                    formData.append("date", stateOfForm.inputs.date.value);
                    formData.append("pageNumber", stateOfForm.inputs.page.value);
                    stateOfForm.inputs.tags.value.forEach(tag => formData.append("tags[]", tag));
                    formData.append("creator", auth.userId);
                    formData.append("photoUrl", stateOfForm.inputs.photoUrl.value);
                await sendHttpRequest("http://localhost:3000/api/entries/user/" + userid + "/add", "POST", formData, { Authorization: "Bearer " + auth.token });
                    navigate("/" + userid + "/myprofile");
            } catch (err) {}
        } else {
            try {
                const formData = new FormData();
                    formData.append("bookTitle", stateOfForm.inputs.title.value);
                    formData.append("date", stateOfForm.inputs.date.value);
                    formData.append("pageNumber", stateOfForm.inputs.page.value);
                    stateOfForm.inputs.tags.value.forEach(tag => formData.append("tags[]", tag));
                    formData.append("creator", auth.userId);
                    formData.append("photoUrl", stateOfForm.inputs.photoUrl.value);
                await sendHttpRequest("http://localhost:3000/api/entries/user/" + userid + "/update/" + itemid, "PATCH", formData, { Authorization: "Bearer " + auth.token });
                    navigate("/" + userid + "/myprofile");
            } catch (err) {}
        }
    };

    const [openBookList, setOpenBookList] = useState(false);
    const shouldBookListOpen = () => setOpenBookList(true);
    const shouldBookListClose = () => setOpenBookList(false);
    const clickHandle = () => setOpenBookList(false);

    const [titleValue, setTitleValue] = useState();
    const selectListItem = (book) => {
        stateOfForm.inputs.title.value = book.bookTitle;
        stateOfForm.inputs.title.isValid = true;
        setTitleValue(book.bookTitle);
    };

    return (
        <form id="add-or-update-form" onKeyUp={keyHandle} onSubmit={submitHandler} className="w-85 sm:h-6/10 h-8/10 mt-10 mb-12 flex flex-wrap z-0">
            <ErrorMessage open={error} error={error} onClose={clearError} />
            <div className="flex flex-col justify-center sm:flex-row w-full">
                <div onClick={clickHandle} className="flex mx-auto w-8/10 sm:w-3/10 justify-center items-center mb-4 sm:mb-0">
                    <ImageUpload field="photoUrl" initialValue={isAdd ? null : initialValues.photoUrl || null} initialValidity={initialFormValidity} onInput={inputHandler} />
                </div>
                <div className="w-full sm:w-7/10 h-3/10">      
                    <FormWithListForAddOrUpdate userid={userid} valueFromList={titleValue} existingBooks={existingBooks} isAdd={isAdd}isBookListOpen={openBookList} shouldBookListClose={shouldBookListClose} shouldBookListOpen={shouldBookListOpen} selectTitle={selectListItem} classnames=" w-full relative z-2" onInput={inputHandler} field="title" initialValue={isAdd ? "" : initialValues.bookTitle} initialValidity={initialFormValidity} errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
                </div>
            </div>

            <div onClick={clickHandle} className="h-4/10 w-full mt-2 mb-10 sm:pl-3">
                <div className="flex flex-wrap flex-row justify-start">
                    <FormForAddOrUpdate onInput={inputHandler} field="date" initialValue={isAdd ? "" : initialValues.date.split("T")[0] || null} initialValidity={initialFormValidity} errorText="error!" labelText="date:" placeholderText="DD/MM/YYYY" classnames="w-2/3 mt-3" inputType="date" />
                    <FormForAddOrUpdate onInput={inputHandler} field="page" initialValue={isAdd ? "" : initialValues.pageNumber || null} initialValidity={initialFormValidity} errorText="error!" labelText="page #:" placeholderText="e.g. 31, 105" classnames="w-3/10 mt-3" inputType="number" />
                </div>
                <FormForAddOrUpdate onInput={inputHandler} field="tags" initialValue={isAdd ? "" : initialTagsState.toString().replaceAll(",", ", ") || null} initialValidity={initialFormValidity} errorText="error!" labelText="tags:" placeholderText="e.g. geography..." inputType="text" classnames=" w-full mt-6 relative " />
                <div className="mt-6">
                    <TagsSection tagsArray={tagsState} />
                </div>
            </div>
            <Loading open={loading} />
        </form>
    );
};