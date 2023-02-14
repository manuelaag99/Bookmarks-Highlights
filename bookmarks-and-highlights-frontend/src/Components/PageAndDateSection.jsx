import React from "react";

const PageAndDateSection = props => {
    return (
        <div className="flex flex-row flex-wrap h-1/10 w-full justify-between font-bold">
            <div className="">page #{props.page}</div>
            <div>{props.date}</div>
        </div>
    )
}

export default PageAndDateSection;