import React from "react";

import Authentication from "../Components/Authentication";
import LogoForAuth from "../Components/LogoForAuth";

export default function SignInPage () {
    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <Authentication 
                upperText="Sign in" 
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