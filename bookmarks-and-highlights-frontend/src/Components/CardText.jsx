import React from "react";

export default function CardText (props) {
    return (
        <div className="card-txt h-7 m-auto text-left">
            {(props.textOfCard === 1 ? <p className="text-dsk-card-text">{props.textOfCard} photo in this collection</p> : <p className="text-dsk-card-text">{props.textOfCard} photos in this collection</p>)}
             
        </div>
    )
}