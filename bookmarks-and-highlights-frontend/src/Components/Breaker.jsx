import React from "react";

import BreakerLine from "./BreakerLine";

export default function Breaker (props) {
    return (
        <div className={"profile-breaker flex items-end opacity-40 md:w-10/12 mx-auto h-8 " + (props.isSignInPage ? "w-full " : "w-full ") + (props.isSignInOrSignUpPage ? " my-3" : null)}>
            <div className="w-full h-8 flex items-center justify-between">
                <BreakerLine />
                <div className="text-center text-var-6 md:w-1/4 w-1/3">
                    <p className="md:text-dsk-breaker">{props.breakerText}</p>
                </div>
                <BreakerLine />
            </div>
        </div>
    )
}