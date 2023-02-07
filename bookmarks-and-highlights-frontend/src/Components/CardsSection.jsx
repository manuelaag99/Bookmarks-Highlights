import React from "react";

import BandHsPhotoCard from "./BandHsPhotoCard";
import Card from "./Card";

const CardsSection = props => {
    return (
        <div className="md:w-10/12 w-full flex flex-wrap mt-4 mb-20 md:flex-row xl:grid xl:grid-cols-3 xl:gap-[4.5%] sm:justify-around justify-center">
            {props.isProfilePage ? (props.cardsInfo.map((bookOrArticleCard, index) => {
                return <Card key={index} specificUserId={props.userid} specificBookId={bookOrArticleCard.bookId} title={bookOrArticleCard.title} numberOfPhotos={bookOrArticleCard.collection.length} photos={bookOrArticleCard.collection}/>
                })) : (props.entries.map((note, index) => {
                    return <BandHsPhotoCard key={index} userid={props.userid} bookid={props.bookid} title={props.title} entries={props.entries} itemid={note.collectionItemId} taglist={note.tags} photosrc={note.photoUrl} page={note.pageNumber} date={note.date}/>
                }))}
        </div>
    )
}

export default CardsSection;