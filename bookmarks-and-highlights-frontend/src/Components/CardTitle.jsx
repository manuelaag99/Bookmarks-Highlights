import React from "react";

const CardTitle = props => {
    return (
        <div className="card-title h-7 m-auto text-left font-bold">
            <p className="text-dsk-card-title">{props.titleOfCard}</p>
        </div>
    )
}

export default CardTitle;