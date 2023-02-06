import React from "react";
import { Link, useParams } from "react-router-dom"

import BackBtnForAddOrUpdate from "../Components/BackBtnForAddOrUpdate"
import CardsSection from "../Components/CardsSection";
import Options from "../Components/Options";
import PhotoWindow from "../Components/Portals/PhotoWindow";
import ProfileTop from "../Components/ProfileTop";

const CARDTITLE = "Title of the book/article"
const DUMPPHOTOS = [
    "https://olddesignshop.com/wp-content/uploads/2017/10/Alice-In-Wonderland-Book-Page-3-Old-Design-Shop.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/Creatures_of_Impulse_-_book.jpg",
    "https://thumbs.dreamstime.com/b/english-words-shown-two-open-book-pages-black-text-type-selective-depth-field-131933544.jpg",
    "https://external-preview.redd.it/Ok0dKdDYoEwy3lEqv4sfHKDHux9kfsWVyzlQ93o9pf0.jpg?auto=webp&s=fc66ed656ab94e9e61be8c04fbf43520d6e18549"
]

const BANDHTITLE = "Title of the book/article"
const NUMBOFPHOTOS = "10"

const BandHsPage = props => {

    const { userid, bookid } = useParams();

    return (
        <div className="flex flex-wrap justify-center mx-auto md:w-full w-8/10">
            <div className="fixed w-full h-1/10 z-20">
                <Link className="w-1/12 h-full absolute left-0 top-0" to="/:userid/myprofile">
                    <BackBtnForAddOrUpdate/>
                </Link>
            </div>
            <ProfileTop isProfilePage={false} needsPhoto={false} name={BANDHTITLE} bio={NUMBOFPHOTOS + " photos in this collection."} />
            <Options isProfilePage={false} margins={true} rightText="order by: " />
            <CardsSection isProfilePage={false} CARDTITLE={CARDTITLE} NUMBOFPHOTOS={NUMBOFPHOTOS} DUMPPHOTOS={DUMPPHOTOS}/>
            <PhotoWindow />
        </div>
    )
}

export default BandHsPage;