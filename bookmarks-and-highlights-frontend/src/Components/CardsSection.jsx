import React from "react";

import BandHsPhotoCard from "./BandHsPhotoCard";
import Card from "./Card";

const CardsSection = props => {
    return (
        <div className="profile-cards w-10/12 flex flex-wrap mt-4 mb-20 md:justify-between justify-center">
            {props.isProfilePage ? 
            (<Card title={props.CARDTITLE} numberOfPhotos={props.NUMBOFPHOTOS} photos={props.DUMPPHOTOS}/>) : 
            <BandHsPhotoCard />}
        </div>
    )
}

export default CardsSection;