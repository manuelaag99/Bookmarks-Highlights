const express = require("express");
const { check } = require("express-validator");

const checkAuth = require("../middleware/check-auth");
const booksControllers = require("../controllers/books-controllers");
const router = express.Router();

router.use(checkAuth);

router.post(
    "/createBook",
    check("bookTitle").isLength({ min: 5 }),
    booksControllers.createBook);

router.get("/getAllBooks", booksControllers.getAllBooks);

// router.delete("/books/:bookid", booksControllers.deleteBook);

module.exports = router;