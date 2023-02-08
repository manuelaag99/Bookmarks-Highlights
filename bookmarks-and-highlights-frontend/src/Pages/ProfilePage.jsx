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

    const [ cardsToDisplay, setCardsToDisplay ] = React.useState(selectedUser.listOfEntries)
    console.log(cardsToDisplay)

    const [ searchQuery, setSearchQuery ] = React.useState("")
    
    const searchButtonHandle = (searchText) => {
        setSearchQuery((searchText) => {
            return searchText
        })
        const lowerCaseSearchText = searchText.toLowerCase()
        if (searchText === "") {
            setCardsToDisplay(() => {
                return selectedUser.listOfEntries
            })
        } else {
            setCardsToDisplay(() => {
                const filteredlist = cardsToDisplay.filter((card) => {
                    return card.title.toLowerCase().includes(lowerCaseSearchText);
                    });
                return filteredlist
            })
        }
    }

    return (
        <div className="flex flex-wrap justify-center md:w-full w-8/10 mx-auto">
            <ProfileTop isProfilePage={true} needsphoto={true} userid={selectedUser.id} name={selectedUser.displayName} bio={selectedUser.shortBio} photoUrl={selectedUser.profilePhotoUrl} stateToSend={{ userid: selectedUser.id }} />
            <EmptyLine />
            <Breaker breakerText="MY BOOKMARKS & HIGHLIGHTS" />
            <Options searchButton={searchButtonHandle} isProfilePage={true} rightText="group by: " />
            <CardsSection userInfo={selectedUser} cardsInfo={cardsToDisplay} isProfilePage={true} userid={selectedUser.id} />
            <Link to={"/" + selectedUser.id + "/add"} state={{ userid: selectedUser.id, userinfo: selectedUser }}>
                <AddCommand userId={selectedUser.id} />
            </Link>
        </div>
    )
}

export default ProfilePage;