import React from "react";

import ProfilePicture from "./ProfilePic";
import CardTopInfo from "./CardTopInfo";

const Profiletop = props => {
    return (
        <div className={"profile-top pt-14 flex justify-center md:w-10/12 w-7/12 " + (props.isProfilePage ? "md:h-52 h-72" : "h-44")}>
            <div className="card bg-var-2 w-full flex md:flex-row flex-col md:justify-start justify-center md:p-6 md:pl-7 md:h-36" style={{maxHeight: props.isProfilePage ? "260px" : "110px"}}>
                {props.needsphoto && <ProfilePicture />}
                <CardTopInfo isProfilePage={props.isProfilePage} boldText={props.name} regularText={props.bio} />
            </div>
        </div>
    )
}

export default Profiletop;