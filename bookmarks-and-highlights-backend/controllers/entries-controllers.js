const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');
let { entries } = require("../MOCKDATA");
const { validationResult } = require("express-validator");
const Entry = require("../models/entry");

const createBook = function (req, res) {
  const { bookTitle } = req.body;
  const selectedUserId = req.params.userid;
  const newBook = {
    bookTitle,
    bookId: uuidv4()
  };
  res.json(newBook);
};

const createEntry = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {throw new HttpError("Invalid inputs, please check your data", 422);}
  const { bookTitle, bookId, photoUrl, tags, date, pageNumber } = req.body;
  const selectedUserId = req.params.userid;
  const newEntry = new Entry({
    userId: selectedUserId,
    bookTitle,
    bookId,
    photoUrl,
    tags,
    date,
    pageNumber
  });
  try {
    await newEntry.save();
  } catch {
    const error = new HttpError("Could not add entry to database!", 500);
    return next(error);
  }
  res.status(201).json({entry: newEntry});
};

const deleteEntry = function (req, res) {
  const selectedItemId = req.params.itemId;
  entries = entries.filter(entry => entry.itemId !== selectedItemId);
  res.status(200).json({message: "Successfully deleted this item."});
};

const getEntryByItemId = function (req, res) {
  const itemId = req.params.itemId;
  const selectedItem = entries.find(entry => entry.itemId == itemId);
  if (!selectedItem) throw new HttpError("Sorry, we could not find an entry with that information", 404);
  res.json(itemId);
};

const getUserBooks = function (req, res) {
  const userid = req.params.userid;
  const userEntries = entries.filter(entry => entry.userId === userid);
  const userBooks = userEntries.map(({bookTitle, bookId}) => ({bookTitle, bookId}));
  const unique = []
  const userBooksNoDuplicates = userBooks.filter(book => {
    const isDuplicate = unique.includes(book.bookTitle);
    if (!isDuplicate) {
      unique.push(book.bookTitle);
      return true
    };
    return false;
  });
  res.json(userBooksNoDuplicates);
};

const getUserEntriesByUserId = function (req, res) {
  const userid = req.params.userid;
  const userEntries = entries.filter(entry => entry.userId === userid);
  if (!userEntries || userEntries.length === 0) throw new HttpError("Sorry, we could not find a user with that information", 404);
  res.json(userEntries);
};

const updateEntry = function (req, res) {
  const { bookTitle, photoUrl, tags, date, pageNumber } = req.body
  const selectedItemId = req.params.itemId;
  const indexOfEntryToUpdate = entries.findIndex(entry => entry.itemId === selectedItemId);
  const updatedEntry = {...entries.find(entry => entry.itemId === selectedItemId)};
  updatedEntry.bookTitle = bookTitle;
  updatedEntry.photoUrl = photoUrl;
  updatedEntry.tags = tags;
  updatedEntry.date = date;
  updatedEntry.pageNumber = pageNumber;
  entries[indexOfEntryToUpdate] = updatedEntry;


  res.status(200).json({entry: updatedEntry});
};

exports.createBook = createBook;
exports.createEntry = createEntry;
exports.deleteEntry = deleteEntry;
exports.getEntryByItemId = getEntryByItemId;
exports.getUserBooks = getUserBooks;
exports.getUserEntriesByUserId = getUserEntriesByUserId;
exports.updateEntry = updateEntry;