const express = require("express");
const { check } = require("express-validator");

const booksControllers = require("../controllers/books-controllers");
const router = express.Router();

router.post(
    "/user/:userid/createBook",
    check("bookTitle").isLength({ min: 5 }),
    booksControllers.createBook);

router.get("/books", booksControllers.getAllBooks);

router.delete("/books/:bookid", booksControllers.deleteBook);

module.exports = router;