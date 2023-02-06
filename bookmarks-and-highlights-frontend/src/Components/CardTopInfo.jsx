import React from "react";

const CardTopInfo = props => {
    return (
        <div className="block items-center md:ml-7">
            <div className={"block " + (props.isProfilePage ? "md:pt-3 pt-3" : "md:pt-2")}>
                <p className="font-bold text-dsk-profile-name md:text-left text-center">{props.boldText}</p>
            </div>
            <div className={"block " + (props.isProfilePage ? "md:pt-3 pt-3" : "md:pt-2")}>
                <p className="text-dsk-profile-bio md:text-left text-center">{props.regularText}</p>
            </div>
        </div>
    )
}

export default CardTopInfo;