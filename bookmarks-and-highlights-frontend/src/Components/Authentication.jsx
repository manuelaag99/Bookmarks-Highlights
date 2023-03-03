import React from "react";

import Breaker from "./Breaker";
import InputsAndButtonFormForAuthentication from "./InputsAndButtonFormForAuthentication";
import OAuthAndGoBack from "./OAuthAndGoBack";

export default function Authentication ({ authBtnText, confirmPasswordPlaceholder, emailPlaceholder, facebookBtnText, googleBtnText, initialInputsForForm, passwordPlaceholder, upperText, usernamePlaceholder }) {
    return (
        <div className="md:w-1/2 w:full my-12 h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-wrap xl:w-1/2 w-7/10 mx-auto justify-center">
                    <Breaker breakerText={upperText} />
                    <InputsAndButtonFormForAuthentication buttonInput={authBtnText} initialInputs={initialInputsForForm} usernamePlaceholder={usernamePlaceholder} emailPlaceholder={emailPlaceholder} passwordPlaceholder={passwordPlaceholder} confirmPasswordPlaceholder={confirmPasswordPlaceholder} type={upperText}/>
                    <Breaker breakerText="or" classnames="w-full" />
                    <OAuthAndGoBack googleOAuthText={googleBtnText} facebookOAuthText={facebookBtnText}/>
                </div>
            </div>                        
        </div>
    )
}