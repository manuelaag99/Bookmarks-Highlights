import React from "react";

import Authentication from "../Components/Authentication";
import LogoForAuth from "../Components/LogoForAuth";

export default function SignUpPage () {
    const initialInputsForSignUp = { username: { value: "", isValid: false }, email: { value: "", isValid: false }, password: { value: "", isValid: false }, confirmPassword: { value: "", isValid: false } }
    
    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <Authentication authBtnText="Sign up to B&H!" confirmPasswordPlaceholder="Confirm your password" emailPlaceholder="Enter your e-mail" facebookBtnText="Sign up with Facebook" googleBtnText="Sign up with Google" initialInputsForForm={initialInputsForSignUp} passwordPlaceholder="Enter your password" upperText="Sign up" usernamePlaceholder="Enter your username" />
                <LogoForAuth/>
            </div>
        </div>
    )
}