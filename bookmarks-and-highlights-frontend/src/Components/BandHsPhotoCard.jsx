import React from "react";
import { Link } from "react-router-dom";

import PageAndDateSection from "./PageAndDateSection";
import PhotoWindow from "./Portals/PhotoWindow";
import PopUpWithTags from "./Portals/PopUpWithTags";
import SettingsCommand from "./SettingsCommand";
import TagsSection from "./TagsSection";

const BandHsPhotoCard = props => {
    const [ photoWindow, setPhotoWindow ] = React.useState(false)
    const [ tagsPopUp, setTagsPopUp ] = React.useState(false)

    const shortenedTags = props.taglist.filter((photo, index) => index < 4)

    return (
        <div className={"rounded-tag shadow-card xl:w-9/10 md:w-88 w-full h-96 bg-var-2 p-4 box-border flex flex-col flex-wrap md:hover:h-102 duration-500 justify-center mb-14 sm:mx-5 xl:mx-auto  " + (photoWindow && " ")}>
            <PageAndDateSection hideBookTitle={props.areTheCardsGroupedByBookTitle} bookTitle={props.bookTitle} page={props.page} date={props.date} />
            <div className={"w-full bg-var-7 " + (props.areTheCardsGroupedByBookTitle ? "h-7/10" : "h-6/10 mt-4 mb-1")}>
                <img onClick={() => setPhotoWindow(() => true)}
                className="h-full mx-auto cursor-pointer" src={props.photosrc} alt="" />
                <PhotoWindow open={photoWindow} image={props.photosrc} onClose={() => setPhotoWindow(() => false)} />
            </div>
            <div className="h-2/10 w-full pt-2.5 relative">
                <p className="inline pr-2">tags: </p>
                <TagsSection tagsArray={shortenedTags} />
                {(props.taglist.length > 4) && <p onClick={() => setTagsPopUp(() => true)} className="inline w-fit py-1.5 h-12 px-2.5 rounded-tag cursor-pointer mr-1 mb-2 bg-var-7 hover:bg-var-6 duration-300">...</p>}
                <PopUpWithTags open={tagsPopUp} content={props.taglist} onClose={() => setTagsPopUp(() => false)} />
                <Link to={"/" + props.userid + "/bandhs/labelid/" + props.bookid + "/update/itemid/" + props.itemid} state={{ userid: props.userid, bookid: props.bookid, title: props.title, entries: props.entries, itemid: props.itemid}}>
                    <SettingsCommand isProfilePage={false} isBandHsPhotoCard={true} />
                </Link>
            </div>
        </div>
    )
}

export default BandHsPhotoCard;