import React from "react";

import Authentication from "../Components/Authentication";
import LogoForAuth from "../Components/LogoForAuth";

export default function SignInPage () {
    const initialInputsForSignIn = { email: { value: "", isValid: false }, password: { value: "", isValid: false } }

    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <Authentication authBtnText="Sign in to B&H!" facebookBtnText="Sign in with Facebook" googleBtnText="Sign in with Google" initialInputsForForm={initialInputsForSignIn} passwordPlaceholder="Enter your password"  upperText="Sign in" emailPlaceholder="Enter your username or e-mail" />
                <LogoForAuth/>
            </div>
        </div>
    )
}