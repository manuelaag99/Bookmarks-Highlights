
// this function adds the title of the book to each individual entry 
const addTitleAndBookIdToEachEntry = (userdata) => {
    userdata.forEach((book) => {
        book.collection.map((collectionItemId) => {
            collectionItemId.title = book.title
            collectionItemId.bookid = book.bookId
        })
    })
    return userdata
    // console.log(userdata)
}

export { addTitleAndBookIdToEachEntry };

const addTitleToEachEntrydd = (userdata) => {
    userdata.listOfEntries.map((book) => {
        book.collection.map((collectionItemId) => {
            collectionItemId.title = book.title
            collectionItemId.bookid = book.id
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

