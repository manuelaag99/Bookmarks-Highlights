import React from "react";

export default function Button ({ isAbled, buttonClick, buttonText, classnames, form, linkRoute, isSignInOrSignUpButton, type }) {
    return (
        <button className={"disabled:bg-var-7 font-bold md:text-dsk-card-button shadow-card w-full mx-auto cursor-pointer flex justify-center items-center rounded-tag duration-300 h-12 " + classnames} disabled={isAbled ? false : true} form={form} onClick={isSignInOrSignUpButton ? null : buttonClick} type={type} >
            {buttonText}
        </button>
    )
}