import React from "react";

import BandHsPhotoCard from "./BandHsPhotoCard";
import Card from "./Card";

const CardsSection = props => {
    const userCards = props.cardsInfo

    return (
        <div className="md:w-10/12 w-full flex flex-wrap mt-4 mb-20 md:flex-row xl:justify-start sm:justify-around justify-center">
            {props.isProfilePage ? (userCards.map((entry, index) => {
                return <Card key={index} id={entry.bookId} title={entry.title} numberOfPhotos={entry.collection.length} photos={entry.collection}/>
                })) : <BandHsPhotoCard />}
        </div>
    )
}

export default CardsSection;