import React from "react";
import { createPortal } from "react-dom"

const AddCommand = props => {
    const addButton = (
    <button className="sticky bottom-12 right-12 float-right bg-var-4 w-14 h-14 rounded-circle flex items-center justify-center text-mob-add-command text-var-1 hover:bg-var-4-hovered duration-200 shadow-addbtn">
        <p className="absolute top-[-13px] m-0 p-0">+</p>
    </button>
    )

    return (
        createPortal(addButton, document.body)
    )
}

export default AddCommand;