import React from "react";
import { createPortal } from "react-dom"
import ClearIcon from '@mui/icons-material/Clear';

const PhotoWindow = (props, onClose, open) => {
    const photoWindow = (
        <>
            <div className="bg-var-5 opacity-50 fixed top-0 bottom-0 w-screen h-screen"></div>
            <div className="fixed z-50 top-[5%] left-[5%] w-9/10 h-9/10 bg-var-4 shadow-addbtn flex">
                <div className="absolute w-full h-1/10 bg-var-1 flex items-center">
                    <button onClick={onClose} className="w-16 h-16 float-right absolute right-0 text-dsk-card-button hover:bg-var-3 duration-500">
                        <ClearIcon />
                    </button>
                </div>
                <div className="absolute top-[10%] w-full h-9/10 ">
                    <img className="w-full h-full" src={props.image} alt="" />
                </div>
            </div>
        </>
    )

    if (open) {
        return createPortal(photoWindow, document.body)
    } else {
        null
    }
}

export default PhotoWindow;