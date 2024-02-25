import React from "react";

export default function TagsSection ({ tagsArray }) {
    
        return (
            <div className="inline">
                <p className="inline pr-2">tags: </p>
                {tagsArray && tagsArray.map((tag, index) => {
                    return <p key={index} className="inline-block w-fit h-fit  py-0.5 px-2.5 rounded-tag cursor-pointer mr-2 mb-2 bg-var-7 hover:bg-var-6 duration-300">{tag}</p>            
                })}
            </div>
        )
    
};