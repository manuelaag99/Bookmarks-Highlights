import React from "react";

export default function CardTitle ({ titleOfCard }) {
    const shortenedTitle = titleOfCard.substring(0, 50)

    return (
        <div className="card-title min-h-7 max-h-96 w-9/10 m-auto text-center font-bold overflow-hidden">
            <p className="md:text-dsk-card-title text-mob-card-title">{titleOfCard.length > 50 ? shortenedTitle + "..." : shortenedTitle}</p>
        </div>
    )
}