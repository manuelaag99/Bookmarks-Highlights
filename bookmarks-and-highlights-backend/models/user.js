const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: { type: "String", required: true },
    displayName: { type: "String", required: true },
    email: { type: "String", required: true },
    username: { type: "String", required: true },
    password: { type: "String", required: true },
    profilePhotoUrl: { type: "String", required: false },
    shortBio: { type: "String", required: false }
});
const User = new mongoose.model("User", userSchema);

module.exports = User;