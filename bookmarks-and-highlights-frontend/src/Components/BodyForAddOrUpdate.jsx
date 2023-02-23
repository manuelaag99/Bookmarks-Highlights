import React from "react";

import { addOrUpdateFormReducer } from "../Reducers";
import FormForAddOrUpdate from "./FormForAddOrUpdate";
import { nonEmptyText } from "../CheckValidity";
import PhotoForAddOrUpdate from "./PhotoForAddOrUpdate";
import TagsSection from "./TagsSection";

const BodyForAddOrUpdate = props => {
    console.log(props ? "yeah" : "no")
    // this function establishes the inputs and their validity status
    const [stateOfForm, dispatch] = React.useReducer(addOrUpdateFormReducer, {
        inputs: {
            title: { value: "", isValid: props.isAdd ? false : true},
            date: { value: "", isValid: false },
            page: { value: "", isValid: false },
            tags: { value: "", isValid: false }
        },
        isValid: false
    })

    // this hook makes sure that this function is only re-rendered given the state of the specified dependencies
    const inputHandler = React.useCallback((field, value, isValid) => {
        dispatch({type: "change", field: field, value: value, isValid: isValid})
    }, [dispatch])

    // this function checks, with each change to the form, whether it's valid or not, and sends it to the parent component
    const sendValidity = props => {
        props.isFormValid(stateOfForm)
        console.log(stateOfForm)
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(stateOfForm)
    }

    const initialTagsState = props.isAdd ? null : props.itemValues.tags
    
    return (
        <form id="add-or-update-form" onChange={() => {sendValidity(props)}} onSubmit={submitHandler} className="w-85 md:h-6/10 h-8/10 md:mt-32 mt-16 flex flex-wrap flex-row">
            <PhotoForAddOrUpdate photo="" />
            <div className="w-3/5 md:h-7/10 h-3/10 pl-6 block md:hidden">
                <FormForAddOrUpdate isAddPage={props.isAdd} onInput={inputHandler} field="title" initialValue={props.isAdd ? null : props.itemValues.bookTitle} errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
            </div>
            <div className="h-7/10 w-full md:w-2/3 pl-3">
                <div className="md:w-full hidden md:block mb-3">
                    <FormForAddOrUpdate isAddPage={props.isAdd} onInput={inputHandler} field="title" initialValue={props.isAdd ? null : props.itemValues.bookTitle || null} errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
                </div>
                <div className="flex flex-wrap flex-row justify-start">
                    <FormForAddOrUpdate isAddPage={props.isAdd} onInput={inputHandler} field="date" initialValue={props.isAdd ? null : props.itemValues.date || null} errorText="error!" labelText="date:" placeholderText="DD/MM/YYYY" classnames="w-2/3 " inputType="date" value="30/09/2020" />
                    <FormForAddOrUpdate isAddPage={props.isAdd} onInput={inputHandler} field="page" initialValue={props.isAdd ? null : props.itemValues.pageNumber || null} errorText="error!" labelText="page #:" placeholderText="e.g. 31, 105" classnames="w-3/10 " inputType="number" />
                </div>
                <FormForAddOrUpdate isAddPage={props.isAdd} onInput={inputHandler} field="tags" initialValue={props.isAdd ? null : initialTagsState.toString().replaceAll(",", ", ") || null} errorText="error!" labelText="tags:" placeholderText="e.g. geography..." classnames="w-full mt-6 " />
                
                <div className="mt-6">
                    {props.isAdd ? null : <TagsSection tagsArray={initialTagsState} />}
                </div>
            </div>
        </form>
    )
}

export default BodyForAddOrUpdate;