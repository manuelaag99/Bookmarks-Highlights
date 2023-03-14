import React from "react";
import { createPortal } from "react-dom";
import ClearIcon from '@mui/icons-material/Clear';

import Button from "../Button";

export default function PopUpWithTags ({ onClose, open, error }) {
    const errorWindow = (
        <div>
            <div className="w-full h-full fixed top-0 bottom-0 bg-var-5 opacity-20"></div>
            <div className="bg-red-btn shadow-card w-7/10 h-32 min-h-[8rem] block fixed top-[30%] left-[15%] self-center">
                <div className="h-3/10 w-full bg-var-1">
                    <button onClick={onClose} className="w-10 h-10 float-right absolute right-0 text-dsk-card-button hover:bg-var-3 duration-500">
                        <ClearIcon />
                    </button>
                </div>
                <div className="min-h-7/10 w-full bg-var-2 p-4 justify-center">
                    <p className="text-center mb-4">{error}</p>
                    <Button buttonClick={onClose} buttonText="Ok!" classnames=" w-9/10 sm:w-3/10 text-var-1 bg-var-4 hover:bg-var-4-hovered " isAbled={true} />
                </div>
            </div>
        </div>
    )

    if (open) {
        return createPortal(errorWindow, document.body)
    } else {
        null
    }
}