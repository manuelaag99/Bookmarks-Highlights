import React from "react";

import FormForAddOrUpdate from "./FormForAddOrUpdate";
import PhotoForAddOrUpdate from "./PhotoForAddOrUpdate";
import TagsSection from "./TagsSection";

const BodyForAddOrUpdate = props => {
    return (
            <div className="w-85 md:h-6/10 h-8/10 md:mt-32 mt-16 flex flex-wrap flex-row">
                <PhotoForAddOrUpdate photo="" />
                <div className="md:w-2/3 w-3/5 md:h-7/10 h-3/10 pl-6 block md:hidden">
                    <FormForAddOrUpdate field="title" errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
                </div>
                <div className="h-7/10 w-full md:w-2/3 pl-3">
                    <div className="md:w-2/3 w-3/5 hidden md:block mb-3">
                        <FormForAddOrUpdate field="title" errorText="error!" labelText="Title of the book/article:" placeholderText="i.e. Title (author, year)" inputType="text" />
                    </div>
                    <div className="flex flex-wrap flex-row justify-evenly">
                        <FormForAddOrUpdate field="date" errorText="error!" labelText="date:" placeholderText="DD/MM/YYYY" classnames="w-2/3 " inputType="date" value="30/09/2020" />
                        <FormForAddOrUpdate field="title" errorText="error!" labelText="page #:" placeholderText="e.g. 31, 105" classnames="w-1/3 " inputType="number" />
                    </div>
                    <FormForAddOrUpdate field="tags" errorText="error!" labelText="tags:" placeholderText="e.g. geography..." classnames="w-full mt-6 " />
                    <div className="mt-6">
                        {props.isAdd ? null : <TagsSection tagsArray={props.entries[0].tags} />}
                    </div>
                </div>
            </div>
    )
}

export default BodyForAddOrUpdate;