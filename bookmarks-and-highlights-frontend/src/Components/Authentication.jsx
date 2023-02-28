import React from "react";

import Breaker from "./Breaker";
import Button from "./Button";
import InputsAuthAndButton from "./InputsAuthAndButton";
import OAuthAndGoBack from "./OAuthAndGoBack";

const Authentication = props => {
    const [ formValidity, setformValidity ] = React.useState(false)
    const checkFormValidity = (stateOfForm) => {
        setformValidity(() => stateOfForm.isValid)
    }

    return (
        <div className="md:w-1/2 w:full my-12 h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-wrap xl:w-1/2 w-7/10 mx-auto justify-center">
                    <Breaker breakerText={props.upperText} isSignInPage={true}/>
                    <InputsAuthAndButton buttonInput={props.authBtn} isFormValid={checkFormValidity} initialInputs={props.initialInputsForForm} usernamePlaceholder={props.usernamePlaceholder} emailPlaceholder={props.emailPlaceholder} passwordPlaceholder={props.passwordPlaceholder} confirmPasswordPlaceholder={props.confirmPasswordPlaceholder} type={props.upperText}/>
                    
                    <Button buttonText={props.authBtn} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered " form="sign-in-or-sign-up-form" isAbled={formValidity} isSignInOrSignUpButton={true} type="submit"  />
                    
                    <Breaker breakerText="or" isSignInPage={true}/>
                    <OAuthAndGoBack googleOAuthText={props.googleBtn} facebookOAuthText={props.facebookBtn}/>
                </div>
            </div>                        
        </div>
    )
}

export default Authentication;