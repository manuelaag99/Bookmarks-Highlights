const mongoose = require("mongoose");
const Schema = mongoose.Schema
// const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    displayName: { type: "String", required: false },
    email: { type: "String", required: true },
    username: { type: "String", required: true, minLength: 5 },
    password: { type: "String", required: true },
    profilePhotoUrl: { type: "String", required: false },
    shortBio: { type: "String", required: false },
    entries: [{ type: mongoose.Types.ObjectId, required: true, ref: "Entry"}],
    books: [{ type: mongoose.Types.ObjectId, required: true, ref: "Book" }]
});
const User = new mongoose.model("User", userSchema);

// userSchema.plugin(uniqueValidator);

module.exports = User;