import React from "react";
import { Link, useParams } from "react-router-dom";

import AddCommand from "../Components/Portals/AddCommand"
import Breaker from "../Components/Breaker";
import CardsSection from "../Components/CardsSection";
import EmptyLine from "../Components/EmptyLine";
import Options from "../Components/Options";
import ProfileTop from "../Components/ProfileTop";

import usersData from "../DUMMYDATA";

// const [user1, user2] = usersData;
const allUsersData = usersData

const ProfilePage = props => {

    const { userid } = useParams();
    const selectedUser = allUsersData.find(user => {
        return user.id === userid
    })

    return (
        <div className="flex flex-wrap justify-center md:w-full w-8/10 mx-auto">
            <ProfileTop isProfilePage={true} needsphoto={true} name={selectedUser.displayName} bio={selectedUser.shortBio} photoUrl={selectedUser.profilePhotoUrl} />
            <EmptyLine />
            <Breaker breakerText="MY BOOKMARKS & HIGHLIGHTS" />
            <Options isProfilePage={true} rightText="group by: " />
            <CardsSection cardsInfo={selectedUser.listOfEntries} isProfilePage={true} userid={selectedUser.id} />
            <Link to={"/" + selectedUser.id + "/add"} state={{ userid: selectedUser.id }}>
                <AddCommand userId={selectedUser.id} />
            </Link>
        </div>
    )
}

export default ProfilePage;