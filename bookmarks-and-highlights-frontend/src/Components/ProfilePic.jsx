import React from "react";

export default function ProfilePicture ({ photoSource }) {
    return (
        <div className="h-24 w-24 md:m-0 mt-6 mx-auto">
            <img className="h-full w-full object-cover rounded-circle " src={photoSource} alt="profile-photo" />
        </div>
    )
}