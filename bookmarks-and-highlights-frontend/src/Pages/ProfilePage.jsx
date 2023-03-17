import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import AddCommand from "../Components/Portals/AddCommand"
import { arrangeCardGroups, arrangeCardGroupsWhenLabelIsArray } from "../ArrangeCardGroups";
import { AuthContext } from "../context/auth-context";
import Breaker from "../Components/Breaker";
import CardsSection from "../Components/CardsSection";
import EmptyLine from "../Components/EmptyLine";
import ErrorMessage from "../Components/Portals/ErrorMessage";
import Loading from "../Components/Portals/Loading";
import Options from "../Components/Options";
import ProfileTop from "../Components/ProfileTop";
import { useHttpHook } from "../custom-hooks";

import { users, entries } from "../MOCKDATA";

export default function ProfilePage () {
    const auth = useContext(AuthContext);
    console.log(auth.isLoggedIn);

    const [selectedUser, setSelectedUser] = useState(null);
    const { loading, error, sendHttpRequest, clearError } = useHttpHook();

    const { userid } = useParams();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const responseData = await sendHttpRequest("http://localhost:3000/api/users/" + userid + "/info");
                setSelectedUser(responseData.user)
            } catch (err) {}
        };
        fetchUserInfo();
    }, [sendHttpRequest]);

    let userEntries;
    if (selectedUser) {
        userEntries = entries.filter(entry => entry.userId === selectedUser.id);
    }

    const defaultCards = arrangeCardGroups("bookTitle", userEntries)

    const [ cards, setCards ] = useState(defaultCards)
    const [ groupingOfCards, setgroupingOfCards ] = useState("bookTitle");
    const [ cardsToDisplay, setCardsToDisplay ] = useState(cards)
    const [ searchQuery, setSearchQuery ] = useState("")

    
    const searchButtonHandle = (searchText) => {
        setSearchQuery((searchText) => searchText);
        const lowerCaseSearchText = searchText.toLowerCase();
        if (searchText === "") {
            setCardsToDisplay(() => cards);
        } else {
            setCardsToDisplay(() => cards.filter((card) => card.title.toLowerCase().includes(lowerCaseSearchText)));
        }
    }

    const groupButtonHandle = event => {
        const selectedLabel = event.toLowerCase();
        setgroupingOfCards(() => selectedLabel);
        if (userEntries.length === 0) {
            return "empty"
        } else {
            if (event !== "tags") {
                const newGroups = arrangeCardGroups(event, userEntries);
                setCards(() => newGroups);
                setCardsToDisplay(() => newGroups);
            } else {
                const newGroups = arrangeCardGroupsWhenLabelIsArray(event, userEntries);
                setCards(() => newGroups);
                setCardsToDisplay(() => newGroups);
            }
        }
    }

    if (!selectedUser) {
        <Loading open={loading} />
    } else {

        return (
            <div className="flex flex-wrap justify-center md:w-full w-8/10 mx-auto">
                <ErrorMessage open={error} error={error} onClose={clearError} />
                <ProfileTop isProfilePage={true} needsPhoto={true} userid={selectedUser.id} name={selectedUser.displayName} bio={selectedUser.shortBio} photoUrl={selectedUser.profilePhotoUrl} stateToSend={{ userid: selectedUser.id }} />
                <EmptyLine />
                <Breaker breakerText="MY BOOKMARKS & HIGHLIGHTS" />
                <Options searchButton={searchButtonHandle} groupButton={groupButtonHandle} rightText="group by: " />
                {/* <CardsSection isNotBandHsPage={true} isBandHsPage={false} isGroupedByTags={false} userInfo={selectedUser} cardsInfo={cardsToDisplay} userid={selectedUser.id} /> */}
                <Link to={"/" + selectedUser.id + "/add"} state={{ userid: selectedUser.id, userinfo: selectedUser }}>
                    <AddCommand userId={selectedUser.id} />
                </Link>
                <Loading open={loading} />
            </div>
        )
    }
}