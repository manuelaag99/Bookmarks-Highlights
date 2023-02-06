import React from "react";

const FormForAddOrUpdate = props => {
    return (
        <div>
            <p className="mt-3 text-add-or-update-p font-bold">{props.pText}</p>
            <input className="mt-1 pl-2 h-8 w-95 outline-none" type="text" placeholder={props.placeholderText} />
        </div>
    )
}

export default FormForAddOrUpdate;