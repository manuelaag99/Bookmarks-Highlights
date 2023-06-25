import React, { useState } from "react";
import { Link } from "react-router-dom";

import PageAndDateSection from "./PageAndDateSection";
import PhotoWindow from "./Portals/PhotoWindow";
import PopUpWithTags from "./Portals/PopUpWithTags";
import SettingsCommand from "./SettingsCommand";
import TagsSection from "./TagsSection";

export default function BandHsPhotoCard ({ bookTitle, bookid, date, entries, itemid, page, photosrc, showBookTitles, taglist, title, userid }) {
    const [photoWindow, setPhotoWindow] = useState(false)
    const [tagsPopUp, setTagsPopUp] = useState(false)

    let shortenedTags;
    if (taglist) {
        shortenedTags = taglist.filter((photo, index) => index < 4)
    }

    return (
        <div className={"rounded-tag shadow-card xl:w-9/10 md:w-88 w-full h-96 bg-var-2 p-4 box-border flex flex-col flex-wrap md:hover:h-102 duration-500 justify-center mb-14 sm:mx-5 xl:mx-auto  " + (photoWindow && " ")}>
            <PageAndDateSection showBookTitle={showBookTitles} bookTitle={bookTitle} page={page} date={date} />
            <div className={"w-full bg-var-7 " + (showBookTitles ? "h-6/10 mt-4 mb-1" : "h-7/10")}>
                <img onClick={() => setPhotoWindow(() => true)}
                    className="h-full mx-auto cursor-pointer" src={photosrc} alt="" />
                <PhotoWindow open={photoWindow} image={photosrc} onClose={() => setPhotoWindow(() => false)} />
            </div>
            <div className="h-2/10 w-full pt-2.5 relative">
                <p className="inline pr-2">tags: </p>
                <TagsSection tagsArray={shortenedTags} />
                {(taglist.length > 4) && <p onClick={() => setTagsPopUp(() => true)} className="inline w-fit py-1.5 h-12 px-2.5 rounded-tag cursor-pointer mr-1 mb-2 bg-var-7 hover:bg-var-6 duration-300">...</p>}
                <PopUpWithTags open={tagsPopUp} contentForTagsPopUp={taglist} onClose={() => setTagsPopUp(() => false)} />
                <Link to={"/" + userid + "/bandhs/labelid/" + bookid + "/update/itemid/" + itemid} state={{ userid: userid, bookid: bookid, title: title, entries: entries, itemid: itemid}}>
                    <SettingsCommand isProfilePage={false} isBandHsPhotoCard={true} />
                </Link>
            </div>
        </div>
    )
}