import React from "react";

import BreakerLine from "./BreakerLine";

const Breaker = props => {
    return (
        <div className="profile-breaker h-16 w-10/12 flex items-end opacity-40 md:m-0 m-12">
            <div className="w-full h-8 flex justify-between items-center">
                <BreakerLine />
                <div className="w-1/4 text-center text-var-6">
                    <p className="md:text-dsk-breaker">{props.breakerText}</p>
                </div>
                <BreakerLine />
            </div>
        </div>
    )
}

export default Breaker;