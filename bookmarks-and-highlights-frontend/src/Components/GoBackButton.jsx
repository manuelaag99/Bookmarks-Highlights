import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

const GoBackButton = props => {
    return (
        <Link className="w-full" to="/home">
            <div className="my-4 w-full">
                <Button buttonText="< Go back" isDefaultButton={true} isFacebookButton={false} isGoogleButton={false}/>
            </div>
        </Link>
    )
}

export default GoBackButton;