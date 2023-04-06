const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require("express-validator");
const Book = require("../models/book");
const mongoose = require("mongoose");

const createBook = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {throw new HttpError("Invalid input, please check your data", 422);}
    const { bookTitle } = req.body;

    try {
        newBook = await Book({
            bookTitle,
            bookId: uuidv4()
        });
    } catch (err) {
        console.log(err)
        return next(new HttpError("Invalid inputs, please check your data!", 500));
    };

    try {
        await newBook.save();
    } catch (err) {
        console.log(err)
        return next (new HttpError("Sorry, could not save the new book!", 422));
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