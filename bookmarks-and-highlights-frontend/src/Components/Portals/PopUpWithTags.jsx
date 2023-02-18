import React from "react";
import { createPortal } from "react-dom";

const PopUpWithTags = props => {
    const popUp = (
        <div className="bg-red-btn w-28 h-28 relative">

        </div>
    )

    if (props.open) {
        return createPortal(popUp, document.body)
    } else {
        null
    }
}

export default PopUpWithTags;