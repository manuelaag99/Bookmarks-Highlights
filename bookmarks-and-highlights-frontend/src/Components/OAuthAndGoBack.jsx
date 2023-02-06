import React from "react";

import Button from "./Button";
import GoBackButton from "./GoBackButton";

const OAuthAndGoBack = props => {
    return (
        <div className="flex flex-wrap w-full">
            <div className="my-4 w-full">
                <Button buttonText={props.googleOAuthText} isDefaultButton={false} isFacebookButton={false} isGoogleButton={true}/>
            </div>
            <div className="my-4 w-full">
                <Button buttonText={props.facebookOAuthText} isDefaultButton={false} isFacebookButton={true} isGoogleButton={false}/>
            </div>
            <GoBackButton/>
        </div>
    )
}

export default OAuthAndGoBack;