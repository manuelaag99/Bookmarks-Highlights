import React, { useEffect, useRef, useState } from "react";

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
        <div className="flex flex-wrap justify-center text-center items-center cursor-pointer h-full max-h-[200px] bg-var-8 relative z-0" onClick={previewUrl ? null : selectFileHandler} >
            {previewUrl && <div className="absolute top-0 right-0 flex flex-row text-var-1 z-20">
                <button className="rounded-tag bg-var-5 px-2 m-2" onClick={selectFileHandler} type="button">change</button>
                <button className="rounded-tag bg-var-5 px-2 m-2" onClick={cancelFileUpload} type="button">X</button>
            </div>}
            <input accept=".jpg,.png,.jpeg" className="w-full h-full " id={field} onChange={uploadFileHandler} ref={fileSelectorRef} style={{display: "none"}} type="file" />
            <div className="w-full h-full flex flex-col justify-center items-center relative">
                {!previewUrl && <p className="w-full h-fit cursor-pointer">Select an image</p>}
                {previewUrl && <img alt="Preview" className="h-full object-contain z-10" src={previewUrl} />}
            </div>
        </div>
    )
};