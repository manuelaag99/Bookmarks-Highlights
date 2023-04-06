const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require("express-validator");
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

    res.status(201).json({ newBook: newBook.toObject({ getters: true }) });
};

const getAllBooks = async (req, res, next) => {
    let allBooks;
    try {
        allBooks = await Book.findMany();
    } catch (err) {
        return next(new HttpError("There was a problem retrieving the books", 500));
    };

    res.json({ allBooks: allBooks.map(book => book.toObject({ getters: true })) });
}

exports.createBook = createBook;
exports.getAllBooks = getAllBooks;