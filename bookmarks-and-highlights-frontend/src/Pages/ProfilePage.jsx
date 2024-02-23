import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AddCommand from "../Components/Portals/AddCommand"
import { arrangeCardGroups } from "../ArrangeCardGroups";
import { AuthContext } from "../context/auth-context";
import Breaker from "../Components/Breaker";
import CardsSection from "../Components/CardsSection";
import EmptyLine from "../Components/EmptyLine";
import ErrorMessage from "../Components/Portals/ErrorMessage";
import Loading from "../Components/Portals/Loading";
import NavigateMessage from "../Components/Portals/NavigateMessage";
import Options from "../Components/Options";
import ProfileTop from "../Components/ProfileTop";
import { useHttpHook } from "../custom-hooks";

export default function ProfilePage () {
    const auth = useContext(AuthContext);
    const { loading, error, sendHttpRequest, clearError, setError } = useHttpHook();

    const [selectedUser, setSelectedUser] = useState();
    const [selectedUserEntries, setSelectedUserEntries] = useState();
    const [cards, setCards] = useState()
    const [cardsToDisplay, setCardsToDisplay] = useState(cards)
    const [groupingOfCards, setgroupingOfCards] = useState("bookTitle");
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfoData = await sendHttpRequest("http://localhost:3000/api/users/" + auth.userId + "/info");
                setSelectedUser(userInfoData.user);
            } catch (err) {}
        };
        fetchData();
        const fetchEntriesData = async () => {
            try {
                const userEntriesData = await sendHttpRequest("http://localhost:3000/api/entries/user/" + auth.userId + "/all", "GET", null, { Authorization: "Bearer " + auth.token });
                setSelectedUserEntries(userEntriesData.userEntries);
            } catch (err) {}
        };
        fetchEntriesData();
    }, [sendHttpRequest, auth.userId]);

    let defaultCards;
    useEffect(() => {
        if (selectedUserEntries) {
            defaultCards = arrangeCardGroups("bookTitle", selectedUserEntries);
            setCards(defaultCards)
            setCardsToDisplay(defaultCards);
        }
    }, [selectedUserEntries]);

    const searchButtonHandle = (searchText) => {
        const lowerCaseSearchText = searchText.toLowerCase();
        setSearchQuery(lowerCaseSearchText);
        if (lowerCaseSearchText) {
            if (lowerCaseSearchText === "") {
                setCards(defaultCards);
                setCardsToDisplay(defaultCards);
            } else {
                setCardsToDisplay(cards.filter((card) => {
                    return card.title.toLowerCase().includes(lowerCaseSearchText);
                }))
            }
        } else {
            setCardsToDisplay(cards);
        }
    };

    const groupButtonHandle = event => {
        const selectedLabel = event.toLowerCase();
        setgroupingOfCards(selectedLabel);
        if (selectedUserEntries.length === 0) {
            return "empty"
        } else {
            const newGroups = arrangeCardGroups(event, selectedUserEntries);
            setCards(() => newGroups);
            setCardsToDisplay(newGroups);
        }
    };

    const [userHasMissingInfo, setUserHasMissingInfo] = useState(false);
    useEffect(() => {
        if (selectedUser) {
            if (!selectedUser.displayName) {
                setUserHasMissingInfo(true);
            }
        }
    }, [selectedUser])

    if (!selectedUser) {
        return <Loading open={loading} />
    } else {
        return (
            <div className="flex flex-wrap justify-center md:w-full w-8/10 mx-auto">
                <NavigateMessage message="Your account lacks info. You will be redirected to where you can update it." open={userHasMissingInfo} userid={auth.userId} />
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
};