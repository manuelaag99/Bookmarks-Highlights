import React from "react";
import { useNavigate } from "react-router-dom";

import BandHsPhotoCard from "./BandHsPhotoCard";
import Card from "./Card";

export default function CardsSection ({ bookid, cardsInfo, entries, isProfilePage, showBookTitles, title, userid }) {
    const navigate = useNavigate();
    const addHandle = () => navigate("/" + userid + "/add");

    console.log(cardsInfo)

    if (isProfilePage && !cardsInfo) {
        return (
            <div className="my-20 text-var-6 opacity-40 cursor-pointer" onClick={addHandle}>
                <p>Sorry, you do not have any bookmark or hightlight! Add one by clicking here or the "+" button</p>
            </div>)
    // } else if (isProfilePage && !cardsInfo.collection) {
    //     return (
    //         <div className="my-20 text-var-6 opacity-40 cursor-pointer" onClick={addHandle}>
    //             <p>Sorry, you have no entries that match your search! Add one by clicking here or the "+" button</p>
    //         </div>)
    } else if (!isProfilePage && !entries) {
        return (
            <div className="my-20 text-var-6 opacity-40 cursor-pointer" onClick={addHandle}>
                <p>Sorry, you have no entries for this book! Add one by clicking here or the "+" button</p>
            </div>)
    } else {
        return (
            <div className={"md:w-10/12 w-full flex flex-wrap mb-20 md:flex-row xl:grid xl:grid-cols-3 xl:gap-[4.5%] sm:justify-around justify-center " + (!isProfilePage ? " mt-14" : " mt-4") }>
                {isProfilePage && (cardsInfo.map((bookOrArticleCard, index) => {
                    return <Card key={index} specificUserId={userid} specificBookId={bookOrArticleCard.labelId} title={bookOrArticleCard.title} numberOfPhotos={bookOrArticleCard ? bookOrArticleCard.collection.length : null} photos={bookOrArticleCard.collection}/>
                    }))}
                {!isProfilePage && (entries.map((note, index) => {
                        return <BandHsPhotoCard key={index} showBookTitles={showBookTitles} userid={userid} bookid={bookid} title={title} entries={entries} bookTitle={note.bookTitle} itemid={note.id} taglist={note.tags} photosrc={note.photoUrl} page={note.pageNumber} date={note.date}/>
                    }))}
            </div>
        )
    }
};