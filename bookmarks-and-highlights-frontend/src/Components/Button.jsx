import React from "react";

const Button = props => {
    return (
        <div className="card w-76 h-12 bg-var-4 m-auto cursor-pointer flex justify-center hover:h-14 hover:bg-var-4-hovered duration-300">
            <button className="m-auto text-var-1 font-bold md:text-dsk-card-button">{props.buttonText}</button>
        </div>
    )
}

export default Button;