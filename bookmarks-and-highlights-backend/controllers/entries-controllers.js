const HttpError = require("../models/http-error");

const entries = [
    {
      userId: "0001",
      bookTitle: "The History of Latin America (Wilson, 2008)",
      bookId: "684087503948",
      photoUrl: "http://static.everypixel.com/ep-pixabay/1694/0943/3745/51620/16940943374551620074-book.jpg",
      tags: [
        "history", "latin america", "colonization"
      ],
      date: "11/05/2022",
      pageNumber: "30",
      itemId: "7585749430"
    },
    {
      userId: "0001",
      bookTitle: "The History of Latin America (Wilson, 2008)",
      bookId: "684087503948",
      photoUrl: "https://media.istockphoto.com/id/470986879/photo/book-page-love.jpg?s=612x612&w=0&k=20&c=i1500WHaaoSu250PoQI9jJnf_xtMy_g7Q_qT7nHfbns=",
      tags: [
        "history", "latin america", "colonization", "slavery"
      ],
      date: "11/05/2022",
      pageNumber: "35",
      itemId: "3548354536"
    },
    {
      userId: "0001",
      bookTitle: "The History of Latin America (Wilson, 2008)",
      bookId: "684087503948",
      photoUrl: "https://preview.redd.it/5p1njt4sjdx11.jpg?auto=webp&s=e915268a22edc7d8fda95ca143d8543f0cbe498c",
      tags: [
        "history", "latin america", "colonization", "labor", "population", "family", "violence", "racism", "political economy", "segregation", "colonialism", "mexico", "indigenous people"
      ],
      date: "11/30/2022",
      pageNumber: "65",
      itemId: "119742953112"
    },
    {
      userId: "0001",
      bookTitle: "The History of Latin America (Wilson, 2008)",
      bookId: "684087503948",
      photoUrl: "https://preview.redd.it/5p1njt4sjdx11.jpg?auto=webp&s=e915268a22edc7d8fda95ca143d8543f0cbe498c",
      tags: [
        "history", "latin america", "colonization", "population", "family"
      ],
      date: "11/30/2022",
      pageNumber: "67",
      itemId: "6132514241311"
    },
    {
      userId: "0001",
      bookTitle: "The History of Europe (Jones, 2020)",
      bookId: "23434343243543",
      photoUrl: "https://preview.redd.it/d9766td2pnzy.jpg?auto=webp&s=4c68eb76c689f8b1db0c7a8d816ae3eb22959822",
      tags: [
        "history", "europe", "liberalism", "colonization"
      ],
      date: "10/10/2021",
      pageNumber: "100",
      itemId: "07896957632"
    },
    {
      userId: "0001",
      bookTitle: "The History of Europe (Jones, 2020)",
      bookId: "23434343243543",
      photoUrl: "https://preview.redd.it/d9766td2pnzy.jpg?auto=webp&s=4c68eb76c689f8b1db0c7a8d816ae3eb22959822",
      tags: [
        "history", "discrimination", "conspiracy", "antisemitism"
      ],
      date: "10/20/2022",
      pageNumber: "205",
      itemId: "578336284721"
    },
    {
      userId: "0001",
      bookTitle: "Origins of Antisemitism (Kyle, 2000)",
      bookId: "898392847787",
      photoUrl: "https://preview.redd.it/d9766td2pnzy.jpg?auto=webp&s=4c68eb76c689f8b1db0c7a8d816ae3eb22959822",
      tags: [
        "history", "europe", "liberalism", "colonization"
      ],
      date: "10/10/2021",
      pageNumber: "100",
      itemId: "434652343635"
    },
    {
      userId: "0001",
      bookTitle: "Origins of Antisemitism (Kyle, 2000)",
      bookId: "898392847787",
      photoUrl: "https://preview.redd.it/d9766td2pnzy.jpg?auto=webp&s=4c68eb76c689f8b1db0c7a8d816ae3eb22959822",
      tags: [
        "history", "discrimination", "conspiracy", "antisemitism"
      ],
      date: "10/20/2022",
      pageNumber: "205",
      itemId: "797121325352"
    },
    {
      userId: "0002",
      bookTitle: "The History of Europe (Jones, 2020)",
      bookId: "684087503948",
      photoUrl: "https://preview.redd.it/d9766td2pnzy.jpg?auto=webp&s=4c68eb76c689f8b1db0c7a8d816ae3eb22959822",
      tags: [
        "history", "discrimination", "conspiracy", "antisemitism"
      ],
      date: "10/20/2022",
      pageNumber: "205",
      itemId: "233452343523"
    },
    {
      userId: "0002",
      bookTitle: "The History of Europe (Jones, 2020)",
      bookId: "684087503948",
      photoUrl: "https://preview.redd.it/d9766td2pnzy.jpg?auto=webp&s=4c68eb76c689f8b1db0c7a8d816ae3eb22959822",
      tags: [
        "history", "europe", "liberalism", "colonization"
      ],
      date: "10/10/2021",
      pageNumber: "100",
      itemId: "95847758485321"
    }

]

const getUserEntriesById = function (req, res) {
    const userid = req.params.userid
    const userEntries = entries.filter(entry => {
        return entry.userId === userid
    })

    if (!userEntries) {
        throw new HttpError("Sorry, we could not find a user with that information", 404)
    }

    res.json(userEntries)
}

const getEntryByItemId = function (req, res) {
    const itemid = req.params.itemId
    const selectedItem = entries.find(entry => {
        return entry.itemId == itemid
    })

    if (!selectedItem) {
        throw new HttpError("Sorry, we could not find an entry with that information", 404)
    }
    
    res.json(itemid)
}

exports.getUserEntriesById = getUserEntriesById;
exports.getEntryByItemId = getEntryByItemId;