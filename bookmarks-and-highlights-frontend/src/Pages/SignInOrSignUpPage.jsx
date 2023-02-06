import React from "react";
import { Link } from "react-router-dom";

import Breaker from "../Components/Breaker";
import Button from "../Components/Button";
import LogoForAuth from "../Components/LogoForAuth";

const SignInOrSignUpPage = props => {
    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <div className="md:w-1/2 w-full flex flex-wrap md:h-screen h-[50vh] justify-center items-center">
                    <div className="md:w-1/2 w-7/10 flex flex-wrap h-1/4">
                        <Link className="w-full" to="/signin">
                            <Button buttonText="Sign in" isDefaultButton={true} isFacebookButton={false} isGoogleButton={false} />
                        </Link>
                        <Breaker breakerText="or" isSignInPage={false} isSignInOrSignUpPage={true}/>
                        <Link className="w-full" to="/signup">
                            <Button buttonText="Sign up" isDefaultButton={true} isFacebookButton={false} isGoogleButton={false} />
                        </Link>
                    </div>
                </div>
                <LogoForAuth/>
            </div>
        </div>
    )
}

export default SignInOrSignUpPage;