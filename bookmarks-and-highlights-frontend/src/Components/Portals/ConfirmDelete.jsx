import React from "react";
import { createPortal } from "react-dom";
import Button from "../../Components/Button"
import ClearIcon from '@mui/icons-material/Clear';

export default function ConfirmDelete ({ onClose, onDelete, open }) {
    const confirmDelete = (
        <div>
            <div onClick={onClose} className="w-full h-full fixed top-0 bottom-0 bg-var-5 opacity-20"></div>
            <div className="flex flex-col bg-var-2 shadow-card md:w-6/10 w-8/10 min-h-[20%] fixed top-[30%] left-[10%] md:left-[20%]">
                <div className="h-8 w-full bg-var-1">
                    <button onClick={onClose} className="w-8 h-8 float-right absolute right-0 text-dsk-card-button items-center">
                        <ClearIcon />
                    </button>
                </div>
                <div className="md:min-h-[30%] h-4/10 w-8/10 mx-auto mt-5 text-center">Are you sure you want to delete this entry? This action can't be undone.</div>
                <div className="h-4/10 w-full bg-var-2 p-4 my-3 flex flex-row">
                    <Button isAbled={true} buttonClick={onDelete} classnames=" w-1/3 bg-red-btn hover:bg-red-hvr duration-300 text-var-1 " buttonText="delete" ></Button>
                    <Button isAbled={true} buttonClick={onClose} classnames=" w-1/3 bg-var-4 hover:bg-var-4-hovered duration-300 text-var-1 " buttonText="cancel" ></Button>
                </div>
            </div>
        </div>
    )

    if (open) {
        return createPortal(confirmDelete, document.body)
    } else {
        null
    }
}