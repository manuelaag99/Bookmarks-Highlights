const express = require("express");
const { check } = require("express-validator");

const entriesControllers = require("../controllers/entries-controllers");
const router = express.Router();

router.post(
    "/user/:userid/createBook",
    check("bookTitle").isLength({ min: 5 }),
    entriesControllers.createBook);

router.get("/books", entriesControllers.getAllBooks);

router.get("/user/:userid/all", entriesControllers.getUserEntriesByUserId);

router.get("/user/:userid/:itemId", entriesControllers.getEntryByItemId);

router.post(
    "/user/:userid/add",
    check("bookTitle").isLength({ min: 5 }),
    entriesControllers.createEntry);

router.patch(
    "/user/:userid/update/:itemId",
    [check("bookTitle").isLength({ min: 5 }),
    check("photoUrl").not().isEmpty(),
    check("pageNumber").isNumeric(),
    check("date").isDate()],
    entriesControllers.updateEntry);

router.delete("/user/:userid/delete/:itemId", entriesControllers.deleteEntry);

module.exports = router;