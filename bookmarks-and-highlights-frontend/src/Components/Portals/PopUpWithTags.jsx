import React from "react";
import { createPortal } from "react-dom";
import ClearIcon from '@mui/icons-material/Clear';

export default function PopUpWithTags ({ contentForTagsPopUp, onClose, open }) {
    const popUp = (
        <div>
            <div onClick={onClose} className="w-full h-full fixed top-0 bottom-0 bg-var-5 opacity-20"></div>
            <div className="bg-red-btn shadow-card w-7/10 h-32 min-h-[8rem] block fixed top-[30%] left-[15%] self-center">
                <div className="h-3/10 w-full bg-var-1">
                    <button onClick={onClose} className="w-10 h-10 float-right absolute right-0 text-dsk-card-button hover:bg-var-3 duration-500">
                        <ClearIcon />
                    </button>
                </div>
                <div className="flex flex-row flex-wrap min-h-7/10 w-full bg-var-2 p-4">
                    <p className="inline-block h-fit mr-4">Tags: </p>
                    {contentForTagsPopUp.map((tag, index) => {
                        return <p key={index} className="inline-block w-fit h-7 py-0.5 px-2.5 shadow-card rounded-tag cursor-pointer mr-2 mb-2 bg-var-7 hover:bg-var-6 duration-300">{tag}</p>
                    })}
                </div>
            </div>
        </div>
    )

    if (open) {
        return createPortal(popUp, document.body)
    } else {
        null
    }
}