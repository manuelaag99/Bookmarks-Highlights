import React from "react";

export default function CardTopInfo ({ boldText, isProfilePage, regularText }) {
    return (
        <div className="flex flex-wrap flex-row md:justify-start justify-center items-center md:ml-7 w-9/10 mx-auto md:my-0 my-5">
            <div className="w-full block min-h-[1rem] max-h-56">
                <p className="font-bold text-dsk-profile-name md:text-left text-center">{boldText}</p>
            </div>
            <div className={"w-full block " + (isProfilePage ? "md:mt-[-10px] mt-3" : "pt-3")}>
                <p className="text-dsk-profile-bio md:text-left text-center">{regularText}</p>
            </div>
        </div>
    )
}