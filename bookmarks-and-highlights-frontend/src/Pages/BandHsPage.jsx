import React from "react";
import { Link, useLocation } from "react-router-dom"

import BackBtnForAddOrUpdate from "../Components/BackBtnForAddOrUpdate"
import CardsSection from "../Components/CardsSection";
import Options from "../Components/Options";
import PhotoWindow from "../Components/Portals/PhotoWindow";
import ProfileTop from "../Components/ProfileTop";

const CARDTITLE = "Title of the book/article"
const NUMBOFPHOTOS = "10"

const BandHsPage = props => {
    const location = useLocation();
    const { userid, bookid, title, listofphotos } = location.state    

    return (
        <div className="flex flex-wrap justify-center mx-auto md:w-full w-8/10">
            <div className="fixed w-full h-1/10 z-20">
                <Link className="w-1/12 h-full absolute left-0 top-0" to={"/" + userid + "/myprofile"}>
                    <BackBtnForAddOrUpdate/>
                </Link>
            </div>
            <ProfileTop 
                isProfilePage={false} 
                needsPhoto={false} 
                name={title} 
                bio={(listofphotos.length > 1) ? listofphotos.length + " photos in this collection" : 
                (listofphotos.length === 1) ? "1 photo in this collection" :
                "There are no photos in this collection yet"} />
            <Options isProfilePage={false} margins={true} rightText="order by: " />
            <CardsSection 
                isProfilePage={false} />
            <PhotoWindow />
        </div>
    )
}

export default BandHsPage;