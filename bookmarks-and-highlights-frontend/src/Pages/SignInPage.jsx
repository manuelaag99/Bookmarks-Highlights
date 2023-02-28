import React from "react";

import Authentication from "../Components/Authentication";
import LogoForAuth from "../Components/LogoForAuth";

const SignInPage = props => {
    const signInInitialInputs = {username: { value: "", isValid: false }, password: { value: "", isValid: false }}

    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <Authentication 
                upperText="Sign in" 
                initialInputsForForm={signInInitialInputs}
                usernamePlaceholder="Enter your username or e-mail"
                passwordPlaceholder="Enter your password"
                authBtn="Sign in to B&H!"
                googleBtn="Sign in with Google" 
                facebookBtn="Sign in with Facebook"/>
                <LogoForAuth/>
            </div>
        </div>
    )
}

export default SignInPage;