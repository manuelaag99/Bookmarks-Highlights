import React, { useEffect, useParams, useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorMessage from "./Portals/ErrorMessage";
import FormForAddOrUpdate from "./FormForAddOrUpdate";
import FormWithListForAddOrUpdate from "./FormWithListForAddOrUpdate";
import ImageUpload from "./ImageUpload";
import Loading from "./Portals/Loading";
import TagsSection from "./TagsSection";
import { useForm, useHttpHook } from "../custom-hooks";

export default function BodyForAddOrUpdate ({ bookid, entries, itemid, initialFormValidity, initialValues, isAdd, isFormValid, itemValues, title, userid }) {
    const navigate = useNavigate();
    const { loading, error, sendHttpRequest, clearError } = useHttpHook();
    const [formData, setFormData] = useState({
        title: { value: "", isValid: false },
        date: { value: "", isValid: false },
        page: { value: "", isValid: false },
        tags: { value: "", isValid: false },
        photoUrl: { value: "", isValid: false }
    }, false);
    const [stateOfForm, inputHandler] = useForm(formData);

    const [existingBooks, setExistingBooks] = useState();

    useEffect(() => {
        !isAdd && setFormData(initialValues);
        !isAdd && setTitleValue(initialValues.bookTitle);
        const fetchAllBooks = async () => {
            try {
                const responseData = await sendHttpRequest("http://localhost:3000/api/books/getAllBooks");
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
        console.log(stateOfForm);
    };

    const submitHandler = async e => {
        e.preventDefault()
        if (isAdd) {
            try {
                const formData = new FormData();
                    formData.append("bookTitle", stateOfForm.inputs.title.value);
                    formData.append("date", stateOfForm.inputs.date.value);
                    formData.append("pageNumber", stateOfForm.inputs.page.value);
                    formData.append("tags", stateOfForm.inputs.tags.value);
                    formData.append("creator", userid)
                    formData.append("photoUrl", stateOfForm.inputs.photoUrl.value);
                await sendHttpRequest(
                    "http://localhost:3000/api/entries/user/" + userid + "/add",
                    "POST",
                    formData
                    // JSON.stringify({
                    //     bookTitle: stateOfForm.inputs.title.value,
                    //     date: stateOfForm.inputs.date.value,
                    //     pageNumber: stateOfForm.inputs.page.value,
                    //     tags: stateOfForm.inputs.tags.value,
                    //     creator: userid
                    // }),
                    // { "Content-Type": "Application/json" }
                    )
                    navigate("/" + userid + "/myprofile");
            } catch (err) {}
        } else {
            try {
                const formData = new FormData();
                    formData.append("bookTitle", stateOfForm.inputs.title.value);
                    formData.append("date", stateOfForm.inputs.date.value);
                    formData.append("pageNumber", stateOfForm.inputs.page.value);
                    formData.append("tags", stateOfForm.inputs.tags.value);
                    formData.append("creator", userid)
                    formData.append("photoUrl", stateOfForm.inputs.photoUrl.value);
                await sendHttpRequest(
                    "http://localhost:3000/api/entries/user/" + userid + "/update/" + itemid ,
                    "PATCH",
                    formData
                    // JSON.stringify({
                    //     bookTitle: stateOfForm.inputs.title.value,
                    //     date: stateOfForm.inputs.date.value,
                    //     pageNumber: stateOfForm.inputs.page.value,
                    //     tags: stateOfForm.inputs.tags.value,
                    //     creator: userid
                    // }),
                    // { "Content-Type": "Application/json" }
                    );
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

    console.log(initialValues)

    return (
        <form id="add-or-update-form" onKeyUp={keyHandle} onSubmit={submitHandler} className="w-85 md:h-6/10 h-8/10 md:mt-32 mt-16 flex flex-wrap flex-row z-0">
            <ErrorMessage open={error} error={error} onClose={clearError} />
            <div onClick={clickHandle} className="w-2/5 md:w-3/10 items-center">
                <ImageUpload field="photoUrl" initialValue={isAdd ? null : initialValues.photoUrl || null} initialValidity={initialFormValidity} onInput={inputHandler} />
            </div>
            <div className="w-3/5 md:w-7/10 h-3/10 pl-6 block ">
                <FormWithListForAddOrUpdate valueFromList={titleValue} existingBooks={existingBooks} isBookListOpen={openBookList} shouldBookListClose={shouldBookListClose} shouldBookListOpen={shouldBookListOpen} selectTitle={selectListItem} classnames=" w-full relative z-2" onInput={inputHandler} field="title" initialValue={isAdd ? "" : initialValues.title} initialValidity={initialFormValidity} errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
            </div>
            <div onClick={clickHandle} className="h-7/10 w-full pl-3">
                <div className="flex flex-wrap flex-row justify-start">
                    <FormForAddOrUpdate onInput={inputHandler} field="date" initialValue={isAdd ? "" : initialValues.date || null} initialValidity={initialFormValidity} errorText="error!" labelText="date:" placeholderText="DD/MM/YYYY" classnames="w-2/3 " inputType="date" />
                    <FormForAddOrUpdate onInput={inputHandler} field="page" initialValue={isAdd ? "" : initialValues.pageNumber || null} initialValidity={initialFormValidity} errorText="error!" labelText="page #:" placeholderText="e.g. 31, 105" classnames="w-3/10 " inputType="number" />
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