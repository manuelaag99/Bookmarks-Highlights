import React from "react";
import { Link } from "react-router-dom";

import CardTopInfo from "./CardTopInfo";
import ProfilePicture from "./ProfilePic";
import ProfileSettings from "../Pages/ProfileSettings";
import SettingsCommand from "./SettingsCommand";

export default function Profiletop ({ bio, isProfilePage, name, needsPhoto, photoUrl, stateToSend, userid}) {
    return (
        <div className={"profile-top pt-14 flex justify-center md:w-10/12 w-full " + (isProfilePage ? "md:h-52 h-76" : "min-h-44 max-h-104")}>
            <div className="relative rounded-tag shadow-card bg-var-2 w-full flex md:flex-row flex-col md:justify-start justify-center md:p-6 md:pl-7 md:h-36">
                {needsPhoto && <ProfilePicture photoSource={photoUrl} />}
                <CardTopInfo isProfilePage={isProfilePage} boldText={name} regularText={bio} />
                {isProfilePage ? 
                <div>
                    <Link to={"/" + userid + "/myprofile/settings"} element={<ProfileSettings />} state={stateToSend}>
                        <SettingsCommand isProfilePage={true}/>
                    </Link>
                </div> : 
                null}                
            </div>
        </div>
    )
}