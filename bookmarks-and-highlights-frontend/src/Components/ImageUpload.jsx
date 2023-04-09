import React, { useEffect, useRef, useState } from "react";

import Button from "./Button";

export default function ImageUpload ({ id }) {
    const fileSelectorRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (!file) return;
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }, [file]);

    const selectImageHandler = () => {
        fileSelectorRef.current.click();
    };

    const cancelFileUpload = () => {
        setFile();
        setPreviewUrl();
    };

    const uploadPhotoHandler = e => {
        e.preventDefault();
        if (e.target.files && e.target.files.length === 1) {
            setFile(e.target.files[0]);
            setIsValid(true);
        };
    };

    return (
        <div className="flex flex-wrap justify-center text-center items-center">
            <input accept=".jpg,.png,.jpeg" className="w-full h-full " id={id} onChange={uploadPhotoHandler} ref={fileSelectorRef} style={{display: "none"}} type="file" />
            <div className="w-full">
                {previewUrl && <div onClick={selectImageHandler}>
                    <img alt="Preview" className="w-full" src={previewUrl} />
                </div>}
                {!previewUrl && <button className="w-full h-full" onClick={selectImageHandler} type="button" >Select an image</button>}
                {previewUrl && <button onClick={cancelFileUpload} type="button">CANCEL</button>}
            </div>
        </div>
    )
};