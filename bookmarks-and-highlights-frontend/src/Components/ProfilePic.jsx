import React from "react";

export default function ProfilePicture ({ photoSource }) {
    return (
        <div className="h-24 w-24 md:m-0 mt-6 mx-auto">
            <img className="h-full w-full object-cover rounded-circle " src={("http://localhost:3000/" + photoSource) || "images/Generic-Profile.png"} alt="profile-photo" />
        </div>
    )
}