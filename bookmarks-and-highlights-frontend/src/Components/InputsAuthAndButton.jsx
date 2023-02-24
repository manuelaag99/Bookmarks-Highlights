import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import InputsForAuth from "./InputsForAuth";

const InputsAuthAndButton = props => {
    return (
        <div className="flex flex-wrap justify-center items-center rounded-tag bg-var-2 h-60 hover:h-64 duration-300 w-full my-4 shadow-card">
            <InputsForAuth textForUpperInput={props.upperInput} textForLowerInput={props.lowerInput} />
            <Link className="w-9/10" to="/:userid/myprofile">
                <Button classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " buttonText={props.buttonInput} isDefaultButton={true} isFacebookButton={false} isGoogleButton={false} />
            </Link>
        </div>
    )
}

export default InputsAuthAndButton;