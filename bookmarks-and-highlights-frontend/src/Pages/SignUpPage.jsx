import React from "react";

import Authentication from "../Components/Authentication";
import LogoForAuth from "../Components/LogoForAuth";

const SignUpPage = props => {
    const signUpInitialInputs = {username: { value: "", isValid: false }, email: { value: "", isValid: false }, password: { value: "", isValid: false }, confirmPassword: { value: "", isValid: false }}
    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <Authentication 
                upperText="Sign up" 
                initialInputsForForm={signUpInitialInputs}
                usernamePlaceholder="Enter your username" 
                emailPlaceholder="Enter your e-mail"
                passwordPlaceholder="Enter your password" 
                confirmPasswordPlaceholder="Confirm your password"
                authBtn="Sign up to B&H!"
                googleBtn="Sign up with Google" 
                facebookBtn="Sign up with Facebook"/>
                <LogoForAuth/>
            </div>
        </div>
    )
}

export default SignUpPage;