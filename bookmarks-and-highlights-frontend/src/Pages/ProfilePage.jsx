import React from "react";
import { Link, useParams } from "react-router-dom";

import AddCommand from "../Components/Portals/AddCommand"
import Breaker from "../Components/Breaker";
import CardsSection from "../Components/CardsSection";
import EmptyLine from "../Components/EmptyLine";
import Options from "../Components/Options";
import ProfileTop from "../Components/ProfileTop";

import usersData from "../DUMMYDATA";

import { addTitleAndBookIdToEachEntry } from "../operations";

// const [user1, user2] = usersData;
const allUsersData = usersData

const ProfilePage = props => {
    const { userid } = useParams();
    const selectedUser = allUsersData.find(user => {
        return user.id === userid
    })

    const [ cardsToDisplay, setCardsToDisplay ] = React.useState(selectedUser.listOfEntries)

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



    // const [ cardGrouping, setCardGrouping]

    const groupButtonHandle = (groupText) => {
        // setCardGrouping((groupText) => {

        // })
        console.log(event.target.value)
        const lowerCaseGroupValue = event.target.value.toLowerCase()
        
        // this calls a function that loops through each entry in each book and adds the title to each of them, and then maps this new array to leave out the upper level, leaving arrays of arrays; finally, these are merged using the flat function, into one large array of arrays
        const flatListOfAllEntries = addTitleAndBookIdToEachEntry(selectedUser.listOfEntries).map(({collection}) => collection).flat(1)
        
        // this separates the "tags" arrays from the whole list, then flats them into one array, and finally filters them out to eliminate duplicate values 
        const listOfAllTags = flatListOfAllEntries.map(({tags}) => tags).flat(1)
        const listOfAllTagsNoDuplicates = listOfAllTags.filter((item, index) => listOfAllTags.indexOf(item) === index)
        
        const listOfTagObjects = []
        listOfAllTagsNoDuplicates.map((tag) => {
            var tag = {
                tagName: tag,
                collection: []
            }
            listOfTagObjects.push(tag)
        })
        listOfTagObjects.map((tag) => {
            flatListOfAllEntries.map((entry) => {
                if (entry.tags.includes(tag.tagName)) {
                    console.log("includes " + tag.tagName)
                    tag.collection.push(entry)
                }
                else {
                    console.log("no")
                }
            })
        })
        console.log(listOfTagObjects)

    }

    return (
        <div className="flex flex-wrap justify-center md:w-full w-8/10 mx-auto">
            <ProfileTop isProfilePage={true} needsphoto={true} userid={selectedUser.id} name={selectedUser.displayName} bio={selectedUser.shortBio} photoUrl={selectedUser.profilePhotoUrl} stateToSend={{ userid: selectedUser.id }} />
            <EmptyLine />
            <Breaker breakerText="MY BOOKMARKS & HIGHLIGHTS" />
            <Options searchButton={searchButtonHandle} groupButton={groupButtonHandle} isProfilePage={true} rightText="group by: " />
            <CardsSection userInfo={selectedUser} cardsInfo={cardsToDisplay} isProfilePage={true} userid={selectedUser.id} />
            <Link to={"/" + selectedUser.id + "/add"} state={{ userid: selectedUser.id, userinfo: selectedUser }}>
                <AddCommand userId={selectedUser.id} />
            </Link>
        </div>
    )
}

export default ProfilePage;