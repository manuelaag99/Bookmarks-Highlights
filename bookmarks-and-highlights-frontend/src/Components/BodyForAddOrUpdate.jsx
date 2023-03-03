import React from "react";

import FormForAddOrUpdate from "./FormForAddOrUpdate";
import PhotoForAddOrUpdate from "./PhotoForAddOrUpdate";
import TagsSection from "./TagsSection";
import { useForm } from "../custom-hooks";

export default function BodyForAddOrUpdate ({ bookid, entries, itemid, initialFormValidity, isAdd, isFormValid, itemValues, title, userid }) {
    const [stateOfForm, inputHandler] = useForm({
            title: { value: "", isValid: false},
            date: { value: "", isValid: false },
            page: { value: "", isValid: false },
            tags: { value: "", isValid: false }
        }, false)
    
    const initialTagsState = isAdd ? [] : itemValues.tags
    const [ tagsState, setTagsState ] = React.useState(initialTagsState)

    const keyHandle = () => {
        if (tagsState !== stateOfForm.inputs.tags.value) setTagsState(() => stateOfForm.inputs.tags.value)
        isFormValid(stateOfForm)
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(stateOfForm)
    }
    
    return (
        <form id="add-or-update-form" onKeyUp={() => {keyHandle()}} onSubmit={submitHandler} className="w-85 md:h-6/10 h-8/10 md:mt-32 mt-16 flex flex-wrap flex-row">
            <PhotoForAddOrUpdate photo="" />
            <div className="w-3/5 md:h-7/10 h-3/10 pl-6 block md:hidden">
                <FormForAddOrUpdate onInput={inputHandler} field="title" initialValue={isAdd ? null : itemValues.bookTitle} initialValidity={initialFormValidity} errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
            </div>
            <div className="h-7/10 w-full md:w-2/3 pl-3">
                <div className="md:w-full hidden md:block mb-3">
                    <FormForAddOrUpdate onInput={inputHandler} field="title" initialValue={isAdd ? null : itemValues.bookTitle || null} initialValidity={initialFormValidity} errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
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
        </form>
    )
}