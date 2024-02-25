import React, { useEffect } from "react";

import Button from "./Button";
import { Link } from "react-router-dom";

export default function OAuthAndGoBack ({ googleOAuthText, facebookOAuthText }) {
    function googleAuth () {
        window.open(
            "http://localhost:3000/auth/google/callback", "_self"
        )
    };

    function emptyfunction() {
        console.log("function")
    }

    // useEffect(() => {
    //     Load the Google Sign-In API
    //     gapi.load('auth2', () => {
    //       gapi.auth2.init({
    //         client_id: '230970145394-q1441jq5jpqqi7msttt85g1cquvq9st6.apps.googleusercontent.com',
    //       });
    //     });
    //   }, []);
    
    // const onSignIn = () => {
    // Sign in with Google when the button is clicked
    //     const auth2 = gapi.auth2.getAuthInstance();
        
    //     auth2.signIn().then((googleUser) => {
    //     const idToken = googleUser.getAuthResponse().id_token;
    //         Send 'idToken' to your backend for verification
    //         console.log(idToken);
    //     });
    // };

    return (
        <div className="flex flex-wrap w-full">
            {/* <div className="my-4 w-full">
                <Button isAbled={true} classnames=" text-var-5 bg-var-1 hover:bg-var-1-hovered " buttonClick={googleAuth} buttonText={googleOAuthText} />
            </div>
            <div className="my-4 w-full">
                <Button isAbled={true} classnames=" bg-facebook hover:bg-facebook-hovered text-var-1 " buttonClick={emptyfunction} buttonText={facebookOAuthText} />
            </div> */}
            <Link className="my-4 w-full" to="/home">
                <Button isAbled={true} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " buttonText="< Go back" />
            </Link>
        </div>
    )
}