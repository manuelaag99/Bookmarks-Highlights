import React from "react";

import Breaker from "./Breaker";
import InputsAuthAndButton from "./InputsAuthAndButton";
import OAuthAndGoBack from "./OAuthAndGoBack";

const AuthAndButtons = props => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-wrap xl:w-1/2 w-7/10 mx-auto justify-center">
                <Breaker breakerText={props.textForBreaker} isSignInPage={true}/>
                <InputsAuthAndButton upperInput={props.authUpperInput} lowerInput={props.authLowerInput} buttonInput={props.authButtonText}/>
                <Breaker breakerText="or" isSignInPage={true}/>
                <OAuthAndGoBack googleOAuthText={props.googleButtonText} facebookOAuthText={props.facebookButtonText}/>
            </div>
        </div>
    )
}

export default AuthAndButtons;