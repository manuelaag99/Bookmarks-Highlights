import React from "react";
import { Link } from "react-router-dom";

import CardTopInfo from "./CardTopInfo";
import ProfilePicture from "./ProfilePic";
import ProfileSettings from "../Pages/ProfileSettings";
import SettingsCommand from "./SettingsCommand";

const Profiletop = props => {

    return (
        <div className={"profile-top pt-14 flex justify-center md:w-10/12 w-full " + (props.isProfilePage ? "md:h-52 h-76" : "min-h-44 max-h-104")}>
            <div className="relative rounded-tag shadow-card bg-var-2 w-full flex md:flex-row flex-col md:justify-start justify-center md:p-6 md:pl-7 md:h-36">
                {props.needsphoto && <ProfilePicture photoSource={props.photoUrl} />}
                <CardTopInfo isProfilePage={props.isProfilePage} boldText={props.name} regularText={props.bio} />
                {props.isProfilePage ? 
                <div>
                    <Link to={"/" + props.userid + "/myprofile/settings"} element={<ProfileSettings />} state={props.stateToSend}>
                        <SettingsCommand isProfilePage={true}/>
                    </Link>
                </div> : 
                null}                
            </div>
        </div>
    )
}

export default Profiletop;