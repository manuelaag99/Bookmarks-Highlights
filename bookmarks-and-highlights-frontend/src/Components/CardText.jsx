import React from "react";

const CardText = props => {
    return (
        <div className="card-txt h-7 m-auto text-left">
            <p className="md:text-dsk-card-text">{props.textOfCard} photos in this collection</p> 
        </div>
    )
}

export default CardText;