const mongoose = require("mongoose");
const Schema = mongoose.Schema

const entrySchema = new Schema({
    userId: { type: "String", required: true },
    bookTitle: { type: "String", required: true },
    bookId: { type: "String", required: true },
    photoUrl: { type: "String", required: false }, //i will change this
    tags: { type: ["String"], required: false },
    date: { type: "Date", required: true },
    pageNumber: { type: "String", required: true },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: "User"}
});
const Entry = new mongoose.model("Entry", entrySchema);

module.exports = Entry;