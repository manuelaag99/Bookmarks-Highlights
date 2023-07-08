import React from "react";

export default function PageAndDateSection ({ bookTitle, date, showBookTitle, page }) {
    let bookTitleToShow
    if (bookTitle.length > 50) {
        bookTitleToShow = bookTitle
    } else {
        bookTitleToShow = bookTitle.substring(0, 50) + "..."
    }

    const shortDate = date.split("T")[0];

    return (
        <div className={"flex flex-row flex-wrap w-full justify-between font-bold " + (showBookTitle ? "h-[13%]": "h-1/10")}>
            <div className="w-1/2">{showBookTitle && bookTitleToShow + ", "} page #{page}</div>
            <div className="w-1/2 text-right">{shortDate}</div>
        </div>
    )
}