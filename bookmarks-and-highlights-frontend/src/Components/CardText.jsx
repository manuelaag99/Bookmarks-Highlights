import React from "react";

export default function CardText ({ textOfCard }) {
    return (
        <div className="card-txt h-fit w-9/10 my-2 mx-auto text-center">
            {(textOfCard === 1 ? <p className="text-dsk-card-text">{textOfCard} photo in this collection</p> : <p className="text-dsk-card-text">{textOfCard} photos in this collection</p>)}
        </div>
    )
}