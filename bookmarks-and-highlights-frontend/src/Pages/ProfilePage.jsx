import React from "react";
import { Link, useParams } from "react-router-dom";

import AddCommand from "../Components/Portals/AddCommand"
import Breaker from "../Components/Breaker";
import CardsSection from "../Components/CardsSection";
import EmptyLine from "../Components/EmptyLine";
import Options from "../Components/Options";
import ProfileTop from "../Components/ProfileTop";
import { addTitleAndBookIdToEachEntry } from "../operations";

import usersData from "../DUMMYDATA";
const allUsersData = usersData

const ProfilePage = props => {
    const { userid } = useParams();
    const selectedUser = allUsersData.find(user => user.id === userid)

    const [ cards, setCards ] = React.useState(selectedUser.listOfEntries)
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

    const [ groupingByTags, setGroupingByTags] = React.useState(false)
    const groupButtonHandle = e => {
        const lowerCaseGroupValue = e.target.value.toLowerCase()
        if (lowerCaseGroupValue === "tags") {
            // this calls a function that loops through each entry in each book and adds the title to each of them, and then maps this new array to leave out the upper level, leaving arrays of arrays; finally, these are merged using the flat function, into one large array of arrays
            const flatListOfAllEntries = addTitleAndBookIdToEachEntry(selectedUser.listOfEntries).map(({collection}) => collection).flat(1)
            // this separates the "tags" arrays from the whole list, then flats them into one array, and finally filters them out to eliminate duplicate values 
            const listOfAllTags = flatListOfAllEntries.map(({tags}) => tags).flat(1)
            const listOfAllTagsNoDuplicates = listOfAllTags.filter((item, index) => listOfAllTags.indexOf(item) === index)
            const listOfTagObjects = []
            listOfAllTagsNoDuplicates.map((tag) => {
                let tag = {title: tag, labelId: "tagName=" + tag , collection: []}
                listOfTagObjects.push(tag)
            })
            listOfTagObjects.map((tag) => {
                flatListOfAllEntries.map((entry) => {
                    if (entry.tags.includes(tag.title)) {
                        tag.collection.push(entry)
                    }
                })
            })
            setGroupingByTags(() => true)
            setCards(() => listOfTagObjects)
            setCardsToDisplay(() => listOfTagObjects)
        } else {
            setCards(() => selectedUser.listOfEntries)
            setCardsToDisplay(() => selectedUser.listOfEntries)
        }
    }

    return (
        <div className="flex flex-wrap justify-center md:w-full w-8/10 mx-auto">
            <ProfileTop isProfilePage={true} needsphoto={true} userid={selectedUser.id} name={selectedUser.displayName} bio={selectedUser.shortBio} photoUrl={selectedUser.profilePhotoUrl} stateToSend={{ userid: selectedUser.id }} />
            <EmptyLine />
            <Breaker breakerText="MY BOOKMARKS & HIGHLIGHTS" />
            <Options searchButton={searchButtonHandle} groupButton={groupButtonHandle} isProfilePage={true} rightText="group by: " />
            <CardsSection isNotBandHsPage={true} isBandHsPage={false} isGroupedByTags={false} userInfo={selectedUser} cardsInfo={cardsToDisplay} userid={selectedUser.id} />
            <Link to={"/" + selectedUser.id + "/add"} state={{ userid: selectedUser.id, userinfo: selectedUser }}>
                <AddCommand userId={selectedUser.id} />
            </Link>
        </div>
    )
}

export default ProfilePage;