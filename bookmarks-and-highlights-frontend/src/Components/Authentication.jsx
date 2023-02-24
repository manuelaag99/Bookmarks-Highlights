import React from "react";

import Breaker from "./Breaker";
import InputsAuthAndButton from "./InputsAuthAndButton";
import OAuthAndGoBack from "./OAuthAndGoBack";

const Authentication = props => {
    return (
        <div className="md:w-1/2 w:full my-12 h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-wrap xl:w-1/2 w-7/10 mx-auto justify-center">
                    <Breaker breakerText={props.upperText} isSignInPage={true}/>
                    <InputsAuthAndButton upperInput={props.usernameInput} lowerInput={props.passwordInput} buttonInput={props.authBtn}/>
                    <Breaker breakerText="or" isSignInPage={true}/>
                    <OAuthAndGoBack googleOAuthText={props.googleBtn} facebookOAuthText={props.facebookBtn}/>
                </div>
            </div>                        
        </div>
    )
}

export default Authentication;