import React from "react";

import Button from "./Button";
import { Link } from "react-router-dom";

const OAuthAndGoBack = props => {
    return (
        <div className="flex flex-wrap w-full">
            <div className="my-4 w-full">
                <Button isAbled={true} classnames=" text-var-5 bg-var-1 hover:bg-var-1-hovered " buttonText={props.googleOAuthText} isDefaultButton={false} isFacebookButton={false} isGoogleButton={true}/>
            </div>
            <div className="my-4 w-full">
                <Button isAbled={true} classnames=" bg-facebook hover:bg-facebook-hovered text-var-1 " buttonText={props.facebookOAuthText} isDefaultButton={false} isFacebookButton={true} isGoogleButton={false}/>
            </div>
            <Link className="my-4 w-full" to="/home">
                <Button isAbled={true} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " buttonText="< Go back" isDefaultButton={false} isFacebookButton={true} isGoogleButton={false}/>
            </Link>
        </div>
    )
}

export default OAuthAndGoBack;