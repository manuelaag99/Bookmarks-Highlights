import React from "react";

import Authentication from "../Components/Authentication";
import LogoForAuth from "../Components/LogoForAuth";

export default function SignUpPage () {
    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <Authentication 
                upperText="Sign up" 
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