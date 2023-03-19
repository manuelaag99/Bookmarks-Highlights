import React from "react";

import BandHsPhotoCard from "./BandHsPhotoCard";
import Card from "./Card";

export default function CardsSection ({ bookid, cardsInfo, entries, isProfilePage, showBookTitles, title, userid }) {
    return (
        <div className="md:w-10/12 w-full flex flex-wrap mt-4 mb-20 md:flex-row xl:grid xl:grid-cols-3 xl:gap-[4.5%] sm:justify-around justify-center">
            {isProfilePage ? (cardsInfo.map((bookOrArticleCard, index) => {
                return <Card key={index} specificUserId={userid} specificBookId={bookOrArticleCard.labelId} title={bookOrArticleCard.title} numberOfPhotos={bookOrArticleCard.collection.length} photos={bookOrArticleCard.collection}/>
                })) : (entries.map((note, index) => {
                    return <BandHsPhotoCard key={index} showBookTitles={showBookTitles} userid={userid} bookid={bookid} title={title} entries={entries} bookTitle={note.bookTitle} itemid={note.itemId} taglist={note.tags} photosrc={note.photoUrl} page={note.pageNumber} date={note.date}/>
                }))}
        </div>
    )
}