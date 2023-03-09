const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');
let { users } = require("../MOCKDATA");
const { validationResult } = require("express-validator");

const createAndLogInToUser = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError("Invalid inputs, please check your data", 422);
    const { displayName, email, username, password, profilePhotoUrl, shortBio } = req.body;
    if (users.find(user => user.email === email)) throw new HttpError("Sorry, there is already an account registered with this e-mail!", 422);
    const newUser = {
        id: uuidv4(),
        displayName,
        email,
        username,
        password,
        profilePhotoUrl,
        shortBio
    };
    users.push(newUser);
    res.status(201).json({ newUser });
};

const getAllUsers = function (req, res) {
    res.json({ users });
};

const getUserInfo = function (req, res) {
    const userid = req.params.userid;
    const selectedUser = users.find(user => user.id === userid);
    res.json(selectedUser);
  }

const loginToExistingUser = function (req, res) {
    const { username, email, password } = req.body;
    const selectedUser = users.find(user => user.username === username);
    if (selectedUser) {
        if (selectedUser.password === password) {
            res.json({ selectedUser })
        } else throw new HttpError("The password and the user credential do not match", 401);
    } else throw new HttpError("Could not find a user corresponding to the provided credentials", 401);
};

const updateProfile = function (req, res) {
    const userid = req.params.userid;
    const selectedUserIndex = users.findIndex(user => user.id === userid);
    const selectedUser = users.find(user => user.id === userid);
    const { displayName, email, username, password, profilePhotoUrl, shortBio } = req.body;
    const updatedUserInfo = {...users.find(user => user.id === userid)};
    updatedUserInfo.id = selectedUser.id;
    updatedUserInfo.displayName = displayName;
    updatedUserInfo.email = email;
    updatedUserInfo.username = username;
    updatedUserInfo.password = password;
    updatedUserInfo.profilePhotoUrl = profilePhotoUrl;
    updatedUserInfo.shortBio = shortBio;
    users[selectedUserIndex] = updatedUserInfo;
    res.json(users);
}

exports.createAndLogInToUser = createAndLogInToUser;
exports.getAllUsers = getAllUsers;
exports.getUserInfo = getUserInfo;
exports.loginToExistingUser = loginToExistingUser;
exports.updateProfile = updateProfile;