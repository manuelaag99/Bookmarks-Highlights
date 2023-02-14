import React from "react";
import { Link } from "react-router-dom";

import PageAndDateSection from "./PageAndDateSection";
import PhotoWindow from "./Portals/PhotoWindow";
import SettingsCommand from "./SettingsCommand";
import TagsSection from "./TagsSection";

const BandHsPhotoCard = props => {

    const [ photoWindow, setPhotoWindow ] = React.useState(false)

    return (
        <div className={"rounded-tag shadow-card xl:w-9/10 md:w-88 w-full h-96 bg-var-2 p-4 box-border flex flex-col flex-wrap hover:h-102 duration-500 justify-center mb-14 sm:mx-5 xl:mx-auto " + (photoWindow && "overflow-y-hidden")}>
            <PageAndDateSection page={props.page} date={props.date} />
            <div className="h-7/10 w-full bg-var-7">
                <img onClick={() => setPhotoWindow(() => true)}
                className="h-full justify-center cursor-pointer" src={props.photosrc} alt="" />
                <PhotoWindow open={photoWindow} image={props.photosrc} onClose={() => setPhotoWindow(() => false)} />
            </div>
            <div className="h-2/10 w-full pt-2.5 relative">
                <p className="inline pr-2">tags: </p>
                <TagsSection tagsArray={props.taglist} />
                <Link to={"/" + props.userid + "/bandhs/labelid/" + props.bookid + "/update/itemid/" + props.itemid} state={{ userid: props.userid, bookid: props.bookid, title: props.title, entries: props.entries, itemid: props.itemid}}>
                    <SettingsCommand isProfilePage={false} isBandHsPhotoCard={true} />
                </Link>
            </div>
        </div>
    )
}

export default BandHsPhotoCard;