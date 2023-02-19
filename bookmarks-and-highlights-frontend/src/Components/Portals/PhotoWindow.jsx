import React from "react";
import { createPortal } from "react-dom"
import ClearIcon from '@mui/icons-material/Clear';

const PhotoWindow = (props) => {
    const photoWindow = (
        <div>
            <div onClick={props.onClose} className="bg-var-5 opacity-50 fixed top-0 bottom-0 w-screen h-screen"></div>
            <div className="fixed z-50 top-[10%] left-[5%] w-9/10 h-8/10 bg-var-4 shadow-addbtn flex">
                <div className="absolute w-full h-1/9 bg-var-1 flex items-center">
                    <button onClick={props.onClose} className="w-14 h-14 float-right absolute right-0 text-dsk-card-button hover:bg-var-3 duration-500">
                        <ClearIcon />
                    </button>
                </div>
                <div className="absolute top-[11.5%] w-full h-8/9 flex justify-center">
                    <img className="h-full aspect-square" src={props.image} alt="" />
                </div>
            </div>
        </div>
    )

    if (props.open) {
        return createPortal(photoWindow, document.body)
    } else {
        null
    }
}

export default PhotoWindow;