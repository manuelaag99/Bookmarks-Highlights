import React from "react";
import { createPortal } from "react-dom"
import ClearIcon from '@mui/icons-material/Clear';

export default function PhotoWindow ({ open, image, onClose }) {
    const photoWindow = (
        <div>
            <div onClick={onClose} className="bg-var-5 opacity-50 fixed top-0 bottom-0 w-screen h-screen"></div>
            <div className="fixed z-50 top-[10%] left-[5%] w-9/10 h-8/10 bg-var-4 shadow-addbtn flex">
                <div className="absolute w-full h-1/9 bg-var-1 flex items-center">
                    <button onClick={onClose} className="w-14 h-14 float-right absolute right-0 text-dsk-card-button hover:bg-var-3 duration-500">
                        <ClearIcon />
                    </button>
                </div>
                <div className="absolute top-[11.5%] w-full h-8/9 aspect-square flex justify-center">
                    <img className="h-full object-contain" src={"http://localhost:3000/" + image} alt="" />
                </div>
            </div>
        </div>
    )

    if (open) {
        return createPortal(photoWindow, document.body)
    } else {
        null
    }
}