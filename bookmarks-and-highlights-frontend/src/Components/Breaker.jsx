import React from "react";

import BreakerLine from "./BreakerLine";

export default function Breaker (props) {
    return (
        <div className={"profile-breaker flex items-end opacity-40 md:w-10/12 w-full mx-auto h-8 " + props.classnames}>
            <div className="w-full h-8 flex items-center justify-between">
                <BreakerLine />
                <div className="text-center text-var-6 md:w-1/4 w-2/3">
                    <p className="md:text-dsk-breaker text-mob-breaker">{props.breakerText}</p>
                </div>
                <BreakerLine />
            </div>
        </div>
    )
}