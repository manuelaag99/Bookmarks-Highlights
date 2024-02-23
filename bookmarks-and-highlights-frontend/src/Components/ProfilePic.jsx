import React from "react";
import GenericProfilePicture from "../images/Generic-Profile.png"

export default function ProfilePicture ({ photoSource }) {
    return (
        <div className="h-24 w-24 md:m-0 mt-6 mx-auto">
            {photoSource && <img className="h-full w-full object-cover rounded-circle " src={"http://localhost:3000/" + photoSource} alt="profile-photo" />}
            {!photoSource && <img className="h-full w-full object-cover rounded-circle " src={GenericProfilePicture} alt="profile-photo" />}
        </div>
    )
}