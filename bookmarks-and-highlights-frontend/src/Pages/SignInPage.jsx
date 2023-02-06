import React from "react";

import Authentication from "../Components/Authentication";
import LogoForAuth from "../Components/LogoForAuth";

const SignInPage = props => {
    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <Authentication 
                upperText="Sign in" 
                usernameInput="Enter your username" 
                passwordInput="Enter your password" 
                authBtn="Sign in to B&H!"
                googleBtn="Sign in with Google" 
                facebookBtn="Sign in with Facebook"/>
                <LogoForAuth/>
            </div>
        </div>
    )
}

export default SignInPage;