import React from "react";

import BandHLogo from "./BandHLogo";
import Tagline from "./Tagline";

export default function LogoAndTagline () {
    return (
        <div className="flex flex-wrap justify-center">
            <BandHLogo />
            <Tagline />
        </div>
    )
}