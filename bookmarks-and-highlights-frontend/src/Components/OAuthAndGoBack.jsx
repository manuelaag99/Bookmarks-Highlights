import React from "react";

import Button from "./Button";
import { Link } from "react-router-dom";

export default function OAuthAndGoBack ({ googleOAuthText, facebookOAuthText }) {
    return (
        <div className="flex flex-wrap w-full">
            <div className="my-4 w-full">
                <Button isAbled={true} classnames=" text-var-5 bg-var-1 hover:bg-var-1-hovered " buttonText={googleOAuthText} />
            </div>
            <div className="my-4 w-full">
                <Button isAbled={true} classnames=" bg-facebook hover:bg-facebook-hovered text-var-1 " buttonText={facebookOAuthText} />
            </div>
            <Link className="my-4 w-full" to="/home">
                <Button isAbled={true} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " buttonText="< Go back" />
            </Link>
        </div>
    )
}