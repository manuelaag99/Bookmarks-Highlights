import React from "react";

import BandHLogo from "./BandHLogo";
import Tagline from "./Tagline";


const LogoAndTagline = props => {
    return (
        <div className="flex flex-wrap justify-center">
            <BandHLogo />
            <Tagline />
        </div>
    )
}

export default LogoAndTagline;