const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require("express-validator");
const Book = require("../models/book");
const mongoose = require("mongoose");
const User = require("../models/user");

const createBook = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {throw new HttpError("Invalid input, please check your data", 422);}
    const { bookTitle, creator } = req.body;

    try {
        newBook = await Book({
            bookTitle,
            bookId: uuidv4(),
            creator
        });
    } catch (err) {
        console.log(err)
        return next(new HttpError("Invalid inputs, please check your data!", 500));
    };

    let user;
    try {
        user = await User.findById(creator);
    } catch (err) {
        return next (new HttpError("Sorry, could not create new entry!", 500));
    };

    if (!user) return next (new HttpError("Could not find a user for the provided ID.", 404));

    try {
        const currentSession = await mongoose.startSession();
        currentSession.startTransaction();
        await newBook.save({ session: currentSession });
        user.entries.push(newBook);
        await user.save({ session: currentSession });
        await currentSession.commitTransaction();
    } catch (err) {
        console.log(err);
        return next(new HttpError("Could not add entry to database!", 500));
    };

    res.status(201).json({ newBook: newBook.toObject({ getters: true }) });
};

const getAllBooks = async (req, res, next) => {
    let allBooks;
    try {
        allBooks = await Book.find({});
    } catch (err) {
        console.log(err)
        return next(new HttpError("There was a problem retrieving the books", 500));
    };

    if (!allBooks || allBooks.length === 0) {
        return next(new HttpError("There are no books yet", 404));
    }

    res.json({ allBooks: allBooks.map(book => book.toObject({ getters: true })) });
}

exports.createBook = createBook;
exports.getAllBooks = getAllBooks;