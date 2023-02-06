import React from "react";

import Authentication from "../Components/Authentication";
import LogoForAuth from "../Components/LogoForAuth";

const SignUpPage = props => {
    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <Authentication 
                upperText="Sign up" 
                usernameInput="Create a username" 
                passwordInput="Create a password" 
                authBtn="Sign up to B&H!"
                googleBtn="Sign up with Google" 
                facebookBtn="Sign up with Facebook"/>
                <LogoForAuth/>
            </div>
        </div>
    )
}

export default SignUpPage;