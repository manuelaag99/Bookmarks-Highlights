import React from "react";
import { Link } from "react-router-dom";

import Breaker from "../Components/Breaker";
import Button from "../Components/Button";
import LogoForAuth from "../Components/LogoForAuth";

export default function SignInOrSignUpPage () {
    return (
        <div>
            <div className="flex flex-wrap md:flex-row flex-col">
                <div className="md:w-1/2 w-full flex flex-wrap md:h-screen h-[50vh] justify-center items-center">
                    <div className="md:w-1/2 w-7/10 flex flex-wrap h-1/4">
                        <Link className="w-full" to="/signin">
                            <Button buttonText="Sign in" classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " isAbled={true} />
                        </Link>
                        <Breaker breakerText="or" classnames="my-3" />
                        <Link className="w-full" to="/signup">
                            <Button buttonText="Sign up" classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " isAbled={true} />
                        </Link>
                    </div>
                </div>
                <LogoForAuth/>
            </div>
        </div>
    )
}