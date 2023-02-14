import React from "react";

const TagsSection = props => {
    return (
        <>
        {props.tagsArray.map((tag, index) => {
            return <div key={index} className="inline-block w-fit py-0.5 px-2.5 rounded-tag cursor-pointer mr-1 mb-2 bg-var-7 hover:bg-var-6 duration-300">
                <p>{tag}</p>
            </div>
        })}
        </>
    )
}

export default TagsSection;