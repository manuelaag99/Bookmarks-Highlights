import React, { useRef, useState } from "react";

import Button from "./Button";

export default function ImageUpload ({ id }) {
    const fileSelectorRef = useRef();
    const [previewUrl, setPreviewUrl] = useState();

    const selectImageHandler = () => {
        fileSelectorRef.current.click();
    };

    const uploadPhotoHandler = e => {
        e.preventDefault();
        setPreviewUrl("");
    };

    return (
        <div className="flex flex-wrap justify-center">
            <input accept=".jpg,.png,.jpeg" className="w-full h-fit" id={id} onChange={uploadPhotoHandler} ref={fileSelectorRef} style={{display: "none"}} type="file" />
            <div className="w-full">
                <div>
                    <img src={previewUrl} alt="Preview" />
                </div>
                <button onClick={selectImageHandler} type="button" >Select an image</button>
            </div>
        </div>
    )
};