import React from "react";

import AuthAndButtons from "./AuthAndButtons";

const Authentication = props => {
    return (
        <div className="md:w-1/2 w:full my-12 h-screen">
            <AuthAndButtons 
            textForBreaker={props.upperText} 
            authUpperInput={props.usernameInput} 
            authLowerInput={props.passwordInput} 
            authButtonText={props.authBtn}
            googleButtonText={props.googleBtn} 
            facebookButtonText={props.facebookBtn}
            />                        
        </div>
    )
}

export default Authentication;