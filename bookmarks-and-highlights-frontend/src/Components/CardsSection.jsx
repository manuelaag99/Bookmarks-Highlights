import React, { useEffect, useState } from "react";

import BandHsPhotoCard from "./BandHsPhotoCard";
import Card from "./Card";
import { useHttpHook } from "../custom-hooks";

export default function CardsSection (props) {
    console.log(props)

    // const { loading, error, sendHttpRequest, clearError } = useHttpHook();
    // const { userid } = useParams();

    // const [selectedUserEntries, setSelectedUserEntries] = useState();

    // useEffect(() => {
    //     const fetchUserEntries = async () => {
    //         try {
    //             const userEntriesData = await sendHttpRequest("http://localhost:3000/api/entries/user/" + userid + "/all");
    //             setSelectedUserEntries(userEntriesData.userEntries);
    //         } catch (err) {}
    //     };
    //     fetchUserEntries();
    // }, [sendHttpRequest]);


    return (
        <div className="md:w-10/12 w-full flex flex-wrap mt-4 mb-20 md:flex-row xl:grid xl:grid-cols-3 xl:gap-[4.5%] sm:justify-around justify-center">
            {props.isNotBandHsPage ? (props.cardsInfo.map((bookOrArticleCard, index) => {
                return <Card key={index} specificUserId={props.userid} specificBookId={bookOrArticleCard.labelId} title={bookOrArticleCard.title} numberOfPhotos={bookOrArticleCard.collection.length} photos={bookOrArticleCard.collection}/>
                })) : (props.entries.map((note, index) => {
                    return <BandHsPhotoCard key={index} showBookTitles={props.showBookTitles} userid={props.userid} bookid={props.bookid} title={props.title} entries={props.entries} bookTitle={note.bookTitle} itemid={note.itemId} taglist={note.tags} photosrc={note.photoUrl} page={note.pageNumber} date={note.date}/>
                }))}
        </div>
    )
}