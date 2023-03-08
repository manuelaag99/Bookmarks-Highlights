const express = require("express");

const entriesControllers = require("../controllers/entries-controllers");
const router = express.Router();

router.get("/user/:userid", entriesControllers.getUserEntriesByUserId);

router.get("/:itemId", entriesControllers.getEntryByItemId);

router.post("/", entriesControllers.createEntry)

router.patch("/:itemId", entriesControllers.updateEntry);

router.delete("/:itemId", entriesControllers.deleteEntry);

module.exports = router