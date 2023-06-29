const express = require("express");
const { check } = require("express-validator");

const checkAuth = require("../middleware/check-auth");
const entriesControllers = require("../controllers/entries-controllers");
const fileUpload = require("../middleware/file-upload");
const router = express.Router();

router.use(checkAuth);

router.get("/user/:userid/all", entriesControllers.getUserEntriesByUserId);

router.get("/user/:userid/:itemId", entriesControllers.getEntryByItemId);

router.post(
    "/user/:userid/add",
    fileUpload.single("photoUrl"),
    check("bookTitle").isLength({ min: 5 }),
    entriesControllers.createEntry);

router.patch(
    "/user/:userid/update/:itemId",
    fileUpload.single("photoUrl"),
    [check("bookTitle").isLength({ min: 5 }),
    check("photoUrl").not().isEmpty(),
    check("pageNumber").isNumeric(),
    check("date").isDate()],
    entriesControllers.updateEntry);

router.delete("/user/:userid/delete/:itemId", entriesControllers.deleteEntry);

module.exports = router;