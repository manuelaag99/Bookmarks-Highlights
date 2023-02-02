import React from "react";

const Profiletop = props => {
    return (
        <div className="profile-top pt-14 flex justify-center md:h-52 h-64 md:w-10/12 w-7/12">
            <div className="card bg-var-2 w-full flex md:flex-row flex-col md:h-36 h-56 md:justify-start justify-center md:p-6 md:pl-7">
                <div className="h-24 w-24 rounded-circle bg-var-5 md:m-0 mx-auto">
                    <img src="" alt="" />
                </div>
                <div className="block items-center md:ml-7">
                    <div className="pt-3">
                        <p className="font-bold md:text-dsk-profile-name md:text-left text-center">{props.name}</p>
                    </div>
                    <div className="pt-3">
                        <p className="md:text-dsk-profile-bio md:text-left text-center">{props.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiletop;