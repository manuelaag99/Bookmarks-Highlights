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

export default function ProfilePage () {
    const auth = useContext(AuthContext);
    console.log(auth);
    const { loading, error, sendHttpRequest, clearError } = useHttpHook();
    const { userid } = useParams();

    const [selectedUser, setSelectedUser] = useState();
    const [selectedUserEntries, setSelectedUserEntries] = useState();
    const [cards, setCards] = useState()
    const [cardsToDisplay, setCardsToDisplay] = useState(cards)
    const [groupingOfCards, setgroupingOfCards] = useState("bookTitle");
    const [searchQuery, setSearchQuery] = useState("")

    let defaultCards;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfoData = await sendHttpRequest("http://localhost:3000/api/users/" + userid + "/info");
                setSelectedUser(userInfoData.user);
            } catch (err) {}
        };
        fetchData();
        const fetchEntriesData = async () => {
            try {
                const userEntriesData = await sendHttpRequest("http://localhost:3000/api/entries/user/" + userid + "/all");
                setSelectedUserEntries(userEntriesData.userEntries);
            } catch (err) {}
        };
        fetchEntriesData();
    }, [sendHttpRequest, userid]);

    useEffect(() => {
        if (selectedUserEntries) {
            setCards(selectedUserEntries);
            defaultCards = arrangeCardGroups("bookTitle", selectedUserEntries);
            setCardsToDisplay(defaultCards);
        }
    }, [selectedUserEntries]);

    const searchButtonHandle = (searchText) => {
        setSearchQuery((searchText) => searchText);
        const lowerCaseSearchText = searchText.toLowerCase();
        if (searchText === "") {
            setCardsToDisplay(() => cards);
        } else {
            setCardsToDisplay(() => cards.filter((card) => card.title.toLowerCase().includes(lowerCaseSearchText)));
        }
    };

    const groupButtonHandle = event => {
        const selectedLabel = event.toLowerCase();
        setgroupingOfCards(() => selectedLabel);
        if (selectedUserEntries.length === 0) {
            return "empty"
        } else {
            if (event !== "tags") {
                const newGroups = arrangeCardGroups(event, selectedUserEntries);
                setCards(() => newGroups);
                setCardsToDisplay(() => newGroups);
            } else {
                const newGroups = arrangeCardGroupsWhenLabelIsArray(event, selectedUserEntries);
                setCards(() => newGroups);
                setCardsToDisplay(() => newGroups);
            }
        }
    };

    if (!selectedUser) {
        return (
            <Loading open={loading} />
        )
    } else {
        return (
            <div className="flex flex-wrap justify-center md:w-full w-8/10 mx-auto">
                <ErrorMessage open={error} error={error} onClose={clearError} />
                <ProfileTop isProfilePage={true} needsPhoto={true} userid={selectedUser.id} name={selectedUser.displayName} bio={selectedUser.shortBio} photoUrl={selectedUser.profilePhotoUrl} stateToSend={{ userid: selectedUser.id }} />
                <EmptyLine />
                <Breaker breakerText="MY BOOKMARKS & HIGHLIGHTS" />
                {selectedUserEntries && <Options searchButton={searchButtonHandle} groupButton={groupButtonHandle} rightText="group by: " />}
                <CardsSection isProfilePage={true} cardsInfo={cardsToDisplay} userid={selectedUser.id} />
                <Link to={"/" + selectedUser.id + "/add"} state={{ userid: selectedUser.id, userinfo: selectedUser }}>
                    <AddCommand userId={selectedUser.id} />
                </Link>
                <Loading open={loading} />
            </div>
        )
    }
}