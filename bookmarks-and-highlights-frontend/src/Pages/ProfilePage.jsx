import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import AddCommand from "../Components/Portals/AddCommand"
import { arrangeCardGroups, arrangeCardGroupsWhenLabelIsArray } from "../ArrangeCardGroups";
import { AuthContext } from "../context/auth-context";
import Breaker from "../Components/Breaker";
import CardsSection from "../Components/CardsSection";
import EmptyLine from "../Components/EmptyLine";
import Options from "../Components/Options";
import ProfileTop from "../Components/ProfileTop";

import { users, entries } from "../MOCKDATA";

export default function ProfilePage () {
    const auth = useContext(AuthContext)
    console.log(auth.isLoggedIn)
    const { userid } = useParams();
    const selectedUser = users.find(user => user.id === userid)
    const userEntries = entries.filter(entry => entry.userId === selectedUser.id)
    
    const defaultCards = arrangeCardGroups("bookTitle", userEntries)

    const [ cards, setCards ] = React.useState(defaultCards)
    const [ cardsToDisplay, setCardsToDisplay ] = React.useState(cards)
    
    const [ searchQuery, setSearchQuery ] = React.useState("")
    const searchButtonHandle = (searchText) => {
        setSearchQuery((searchText) => searchText)
        const lowerCaseSearchText = searchText.toLowerCase()
        if (searchText === "") {
            setCardsToDisplay(() => cards)
        } else {
            setCardsToDisplay(() => cards.filter((card) => card.title.toLowerCase().includes(lowerCaseSearchText)))
        }
    }

    const [ groupingOfCards, setgroupingOfCards ] = React.useState("bookTitle")
    const groupButtonHandle = event => {
        const selectedLabel = event.toLowerCase()
        setgroupingOfCards(() => selectedLabel)
        if (userEntries.length === 0) {
            return "empty"
        } else {
            if (event !== "tags") {
                const newGroups = arrangeCardGroups(event, userEntries)
                setCards(() => newGroups)
                setCardsToDisplay(() => newGroups)
            } else {
                const newGroups = arrangeCardGroupsWhenLabelIsArray(event, userEntries)
                setCards(() => newGroups)
                setCardsToDisplay(() => newGroups)
            }
        }
    }

    return (
        <div className="flex flex-wrap justify-center md:w-full w-8/10 mx-auto">
            <ProfileTop isProfilePage={true} needsPhoto={true} userid={selectedUser.id} name={selectedUser.displayName} bio={selectedUser.shortBio} photoUrl={selectedUser.profilePhotoUrl} stateToSend={{ userid: selectedUser.id }} />
            <EmptyLine />
            <Breaker breakerText="MY BOOKMARKS & HIGHLIGHTS" />
            <Options searchButton={searchButtonHandle} groupButton={groupButtonHandle} rightText="group by: " />
            <CardsSection isNotBandHsPage={true} isBandHsPage={false} isGroupedByTags={false} userInfo={selectedUser} cardsInfo={cardsToDisplay} userid={selectedUser.id} />
            <Link to={"/" + selectedUser.id + "/add"} state={{ userid: selectedUser.id, userinfo: selectedUser }}>
                <AddCommand userId={selectedUser.id} />
            </Link>
        </div>
    )
}