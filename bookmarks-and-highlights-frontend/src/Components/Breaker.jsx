import React from "react";

import BreakerLine from "./BreakerLine";

const Breaker = props => {
    return (
        <div className="profile-breaker h-16 flex items-end opacity-40 md:m-0 m-12 md:w-10/12 w-9/12">
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

export default Breaker;