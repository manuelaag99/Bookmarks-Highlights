import React from "react";

export default function PageAndDateSection (props) {
    let bookTitle
    if (props.bookTitle.length > 50) {
        bookTitle = props.bookTitle
    } else {
        bookTitle = props.bookTitle.substring(0, 50) + "..."
    }

    return (
        <div className={"flex flex-row flex-wrap w-full justify-between font-bold " + (props.hideBookTitle ? "h-1/10" : "h-[13%]")}>
            <div className="w-7/10">{props.hideBookTitle ? null : bookTitle + ", "} page #{props.page}</div>
            <div className="w-3/10 text-right">{props.date}</div>
        </div>
    )
}