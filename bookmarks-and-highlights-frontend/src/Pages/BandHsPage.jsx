import React from "react";
import { Link, useParams, useLocation } from "react-router-dom"

import BackBtnForAddOrUpdate from "../Components/BackBtnForAddOrUpdate"
import CardsSection from "../Components/CardsSection";
import Options from "../Components/Options";
import PhotoWindow from "../Components/Portals/PhotoWindow";
import ProfileTop from "../Components/ProfileTop";

export default function BandHsPage () {
    const location = useLocation();
    const { userid, bookid, title, entries } = location.state

    let areCardsArrangedByBookTitle
    if (title === title.toLowerCase()) {
        areCardsArrangedByBookTitle = false
    } else {
        areCardsArrangedByBookTitle = true
    }

    return (
        <div className="flex flex-wrap justify-center mx-auto md:w-full w-8/10">
            <div className="md:absolute fixed w-full h-16 z-20">
                <Link className="md:w-1/12 w-1/10 h-full absolute left-0 top-0" to={"/" + userid + "/myprofile"}>
                    <BackBtnForAddOrUpdate/>
                </Link>
            </div>
            <ProfileTop isProfilePage={false} needsPhoto={false} name={title} 
                bio={(entries.length > 1) ? entries.length + " photos in this collection" : 
                (entries.length === 1) ? "1 photo in this collection" :
                "There are no photos in this collection yet"} />
            <Options classnames="md:mb-3 mb-1.5 md:mt-12 mt-6" rightText="order by: " />
            <CardsSection showBookTitles={!areCardsArrangedByBookTitle} isNotBandHsPage={false} isBandHsPage={true} userid={userid} bookid={bookid} title={title} entries={entries} />
            <PhotoWindow />
        </div>
    )
}