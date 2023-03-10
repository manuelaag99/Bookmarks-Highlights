import React from "react";

export default function PageAndDateSection ({ bookTitle, date, showBookTitle, page }) {
    let bookTitleToShow
    if (bookTitle.length > 50) {
        bookTitleToShow = bookTitle
    } else {
        bookTitleToShow = bookTitle.substring(0, 50) + "..."
    }

    return (
        <div className={"flex flex-row flex-wrap w-full justify-between font-bold " + (showBookTitle ? "h-[13%]": "h-1/10")}>
            <div className="w-7/10">{showBookTitle && bookTitleToShow + ", "} page #{page}</div>
            <div className="w-3/10 text-right">{date}</div>
        </div>
    )
}