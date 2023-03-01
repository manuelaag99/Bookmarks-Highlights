import React from "react";

const Button = props => {
    return (
        <button className={"disabled:bg-var-7 font-bold md:text-dsk-card-button shadow-card w-full mx-auto cursor-pointer flex justify-center items-center rounded-tag duration-300 h-12 " + props.classnames} disabled={props.isAbled ? false : true} form={props.form} onClick={props.isSignInOrSignUpButton ? null : props.buttonClick} type={props.type} >
            {props.buttonText}
        </button>
    )
}

export default Button;