import React, { useEffect, useRef, useState } from "react";

import { useInput } from "../custom-hooks";

export default function ImageUpload ({ field, initialValidity, initialValue, onInput }) {

    const fileSelectorRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [validity, setValidity] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!file) return;
        const fileReader = new FileReader();
        fileReader.onload = () => setPreviewUrl(fileReader.result);
        fileReader.readAsDataURL(file);
    }, [file]);

    const selectFileHandler = () => fileSelectorRef.current.click();

    const cancelFileUpload = () => {
        setFile();
        setPreviewUrl();
    };

    const uploadFileHandler = e => {
        e.preventDefault();
        let selectedFile;
        let fileIsValid = validity
        if (e.target.files && e.target.files.length === 1) {
            selectedFile = e.target.files[0];
            setFile(selectedFile);
            setValidity(true);
            fileIsValid = true
        } else {
            setValidity(false);
            fileIsValid = false
        }
        onInput(field, selectedFile, fileIsValid);
    };

    const onMouseOverHandler = () => {
        console.log("hover");
    };

    const onMouseLeaveHandler = () => {
        console.log("left");
    };
    
    return (
        <div className="flex flex-wrap justify-center text-center items-center cursor-pointer h-full max-h-[200px] bg-var-8" onClick={selectFileHandler} >
            <input accept=".jpg,.png,.jpeg" className="w-full h-full " id={field} onChange={uploadFileHandler} ref={fileSelectorRef} style={{display: "none"}} type="file" />
            <div className="w-full h-full flex flex-col justify-center items-center">
                {!previewUrl && <p className="w-full h-fit cursor-pointer">Select an image</p>}
                {previewUrl && <img alt="Preview" className="h-full object-contain" onClick={selectFileHandler} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler} src={previewUrl} />}
                {previewUrl && <button onClick={cancelFileUpload} type="button">CANCEL</button>}
            </div>
        </div>
    )
};