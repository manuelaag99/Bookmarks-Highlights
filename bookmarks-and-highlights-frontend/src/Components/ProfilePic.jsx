import React from "react";

const ProfilePicture = props => {
    return (
        <div className="h-24 w-24 md:m-0 mx-auto">
            <img className="h-full object-cover rounded-circle" src={props.photoSource} alt="profile-photo" />
        </div>
    )
}

export default ProfilePicture;