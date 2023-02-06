import React from "react";
import { Link } from "react-router-dom";

import SettingsCommand from "./SettingsCommand";

const TAGLIST = ["history", "germany", "world war two"]

const BandHsPhotoCard = props => {
    return (
        <div className="rounded-tag shadow-card md:w-88 w-full h-96 bg-var-2 p-4 box-border flex flex-col flex-wrap hover:h-102 duration-500 justify-center mb-14">
            <div className="flex flex-row flex-wrap h-1/10 w-full justify-between font-bold">
                <div className="">Page #</div>
                <div>DD/MM/YYYY</div>
            </div>
            <div className="h-7/10 w-full bg-var-7">
                <img src="" alt="" />
            </div>
            <div className="h-2/10 w-full pt-2.5 relative">
                <p className="inline pr-2">tags: </p>
                {TAGLIST.map((tag, index) => {
                    return <div key={index} className="inline-block w-fit py-0.5 px-2.5 rounded-tag cursor-pointer mr-1 mb-2 bg-var-7 hover:bg-var-6 duration-300">
                        <p>{tag}</p>
                    </div>
                })}
                <Link to="/:userid/update">
                    <SettingsCommand isProfilePage={false} isBandHsPhotoCard={true} />
                </Link>
            </div>
        </div>
    )
}

export default BandHsPhotoCard;