import React from "react";

export default function TagsSection ({ tagsArray }) {
    return (
        <div className="inline">
            {tagsArray.map((tag, index) => {
                return <p key={index} className="inline-block w-fit h-7 py-0.5 px-2.5 rounded-tag cursor-pointer mr-2 mb-2 bg-var-7 hover:bg-var-6 duration-300">{tag}</p>            
            })}
        </div>
    )
}