const express = require("express");

const entriesControllers = require("../controllers/entries-controllers");
const router = express.Router();

router.get("/user/:userid", entriesControllers.getUserEntriesById);

router.get("/:itemId", entriesControllers.getEntryByItemId);

module.exports = router