
// this function adds the title of the book to each individual entry 
const addTitleToEachEntry = (userdata) => {
    userdata.listOfEntries.forEach((book) => {
        book.collection.map((collectionItemId) => {
            collectionItemId.title = book.title
        })
    })
    console.log(userdata)
}

const newArrayWithTitleOnEachEntry = (userdata) => {
    const entriesWithTitle = userdata.map((book) => {
        book.collection.forEach((collectionItemId) => {
            collectionItemId.title = book.title
        })
    })
    console.log(entriesWithTitle)
}

