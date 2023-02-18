import React from "react";


const Button = props => {
    return (
        <button className={"font-bold md:text-dsk-card-button " + (props.isDefaultButton ? "text-var-1" : props.isFacebookButton ? "text-var-1" : "text-var-5") + " shadow-card w-full mx-auto cursor-pointer flex justify-center rounded-tag duration-300 h-12 md:pt-2 pt-3 md:hover:h-14 md:hover:pt-3.5 " + (props.isDefaultButton ? "bg-var-4 hover:bg-var-4-hovered" : props.isFacebookButton ? "bg-facebook hover:bg-facebook-hovered " : "bg-var-1 hover:bg-var-1-hovered ") + (props.isDefaultButton ? " mt-0" : null)}>
        {props.buttonText}
        </button>
    )
}

export default Button;