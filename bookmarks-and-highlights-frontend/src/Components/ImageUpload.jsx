import React, { useEffect, useRef, useState } from "react";

import { useInput } from "../custom-hooks";

export default function ImageUpload ({ field, initialValidity, initialValue, onInput }) {

    const fileSelectorRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [validity, setValidity] = useState(false);

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

    return (
        <div className="flex flex-wrap justify-center text-center items-center">
            <input accept=".jpg,.png,.jpeg" className="w-full h-full " id={field} onChange={uploadFileHandler} ref={fileSelectorRef} style={{display: "none"}} type="file" />
            <div className="w-full py-auto">
                {previewUrl && <div onClick={selectFileHandler}>
                    <img alt="Preview" className="w-full" src={previewUrl} />
                </div>}
                {!previewUrl && <button className="w-full h-full self-center" onClick={selectFileHandler} type="button">Select an image</button>}
                {previewUrl && <button onClick={cancelFileUpload} type="button">CANCEL</button>}
            </div>
        </div>
    )
};