import React from "react";

const Button = props => {
    return (
        <button onClick={props.buttonClick} className={"font-bold md:text-dsk-card-button shadow-card w-full mx-auto cursor-pointer flex justify-center rounded-tag duration-300 h-12 md:pt-2 pt-3 " + props.classnames}>
            {props.buttonText}
        </button>
    )
}

export default Button;