const mongoose = require("mongoose");
const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookTitle: {type: "String", required: true},
    bookId: { type: "String", required: true },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: "User"}
});
const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;