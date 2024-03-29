import React, { useEffect, useRef, useState } from "react";

import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useInput } from "../custom-hooks";

export default function ImageUpload ({ field, initialValidity, initialValue, onInput }) {
    const fileSelectorRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [validity, setValidity] = useState(initialValue ? true : false);
    const [inputState, inputChangeHandler, inputBlurHandler] = useInput({ value: initialValue, isValid: initialValidity });
    const { value, isValid } = inputState;

    useEffect(() => {
        if (!file) return;
        const fileReader = new FileReader();
        fileReader.onload = () => setPreviewUrl(fileReader.result);
        fileReader.readAsDataURL(file);
    }, [file]);

    const selectFileHandler = () => fileSelectorRef.current.click();

    const cancelFileUpload = () => {
        if (file) {
            setFile(null);
            setPreviewUrl(null);
        } else if (initialValue) {
            setPreviewUrl(null);
        }
    };

    const uploadFileHandler = e => {
        e.preventDefault();
        let selectedFile;
        let fileIsValid = validity;
        if (e.target.files && e.target.files.length === 1) {
            selectedFile = e.target.files[0];
            setFile(selectedFile);
            setValidity(true);
            fileIsValid = true
        } else {
            setValidity(false);
            fileIsValid = false
        }
    };
    
    useEffect(() => {
        onInput(field, file, validity)
    }, [onInput, field, file, isValid])

    return (
        <div className={"flex flex-wrap justify-center text-center items-center cursor-pointer h-fit mx-auto aspect-square sm:w-8/10 relative z-0 w-full " + (!initialValue && "bg-var-8" )} onClick={previewUrl ? null : selectFileHandler} >
            {(previewUrl || initialValue) && <div className="absolute top-0 right-0 w-fit flex flex-row justify-center text-var-1 z-20">
                <button className="rounded-tag bg-var-5 px-2 m-1.5" onClick={selectFileHandler} type="button">change</button>
                {(field !== "photoUrl") && <button className="rounded-tag bg-var-5 px-2 m-1.5" onClick={cancelFileUpload} type="button"><XMarkIcon className="h-5 w-5" /></button>}
            </div>}
            <input accept=".jpg,.png,.jpeg" className="w-full h-full " id={field} onChange={uploadFileHandler} ref={fileSelectorRef} style={{ display: "none" }} type="file" />
            <div className="w-full h-full flex flex-col justify-center items-center aspect-square relative">
                {!previewUrl && initialValue && <img className={"z-0 mx-auto h-full w-full object-contain " + ((field !== "photoUrl") && " hover:opacity-30 duration-200 ")} src={"http://localhost:3000/" + initialValue} alt="upload" />}
                {!initialValue && <div className="z-1 cursor-pointer opacity-30 w-full px-2 absolute">
                    <p className="w-full h-fit"><PhotoIcon className="z-1 h-5 w-5 inline mx-2" />Select an image</p>
                </div>}
                {previewUrl && <img alt="Preview" className="mx-auto h-full object-contain z-10" src={previewUrl} />}
            </div>
        </div>
    )
};