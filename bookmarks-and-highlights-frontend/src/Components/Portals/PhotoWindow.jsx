import React from "react";
import { createPortal } from "react-dom"
import ClearIcon from '@mui/icons-material/Clear';

const PhotoWindow = props => {
    const [windowClose, setWindowClose] = React.useState(false)

    const closePhotoWindow = () => {
        setWindowClose(() => {
            return true;
        })
    }
    
    const openPhotoWindow = () => {
        setWindowClose(() => {
            return false;
        })
    }

    const photoWindow = (
        <div className="fixed z-50 top-[5%] left-[5%] w-9/10 h-9/10 bg-var-4 shadow-addbtn flex">
            <div className="absolute w-full h-1/10 bg-var-1 flex items-center">
                <button onClick={closePhotoWindow} className="w-1/10 float-right absolute right-0 text-dsk-card-button">
                    <ClearIcon />
                </button>
            </div>
            <div className="absolute top-[10%] w-full h-9/10 bg-var-5">
                <img src="" alt="" />
            </div>
        </div>
    )

    // return createPortal(photoWindow, document.body)

    if (windowClose) {
        return createPortal(photoWindow, document.body)
    } else {
        null
    }
}

export default PhotoWindow;