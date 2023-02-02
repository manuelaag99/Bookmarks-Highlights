import React from "react";

const AddCommand = () => {
    return (
    <button className="bg-var-4 w-14 h-14 md rounded-circle flex items-center justify-center text-mob-add-command text-var-1 relative hover:bg-var-4-hovered duration-200">
        <p className="absolute top-[-13px] m-0 p-0">+</p>
    </button>
    )
}

export default AddCommand;