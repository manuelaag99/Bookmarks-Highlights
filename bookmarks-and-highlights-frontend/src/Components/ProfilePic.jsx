import React from "react";

export default function ProfilePicture (props) {
    return (
        <div className="h-24 w-24 md:m-0 mt-6 mx-auto">
            <img className="h-full object-cover rounded-circle" src={props.photoSource} alt="profile-photo" />
        </div>
    )
}