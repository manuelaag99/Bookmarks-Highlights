const HttpError = require("../models/http-error");
let { users } = require("../MOCKDATA");
const { validationResult } = require("express-validator");
const User = require("../models/user");

const createAndLogInToUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError("Invalid inputs, please check your data", 422);
    const { email, username, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return next (new HttpError("Sorry, signup failed!", 422));
    };

    if (existingUser) {
        return next (new HttpError("Sorry, there is already an account registered with this e-mail!", 422));
    }

    let newUser;
    try {
        newUser = await User({
            email,
            username,
            password,
            entries: []
        });
    } catch (err) {
        return next (new HttpError("Sorry, could not create the new user!", 422));
    };

    try {
        await newUser.save();
    } catch (err) {
        console.log(err)
        return next (new HttpError("Sorry, could not save the new user!", 422));
    };

    res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

const getAllUsers = async (req, res, next) => {
    let allUsers;
    try {
        allUsers = await User.find({}, "-password");
    } catch {
        return next (new HttpError("Sorry, could not retrieve the users!", 422));
    }
    
    res.json({ users: allUsers.map(user => user.toObject({ getters: true })) });
};

const getUserInfo = async (req, res, next) => {
    const userid = req.params.userid;

    let selectedUser;
    try {
        selectedUser = await User.findById(userid);
    } catch (err) {
        return next (new HttpError("Sorry, could not retrieve this user's info!", 422))
    }

    res.json({ selectedUser });
};

const loginToExistingUser = async (req, res, next) => {
    const { email, password } = req.body;

    let selectedUser;
    try {
        selectedUser = await User.findOne({ email: email });
    } catch {
        return next (new HttpError("Sorry, could not find a user corresponding to the provided credentials!", 422));
    };
    
    if (selectedUser) {
        if (selectedUser.password === password) {
            res.json({ user: selectedUser.toObject({ getters: true }) });
        } else return next (new HttpError("The password and the user credential do not match", 401));
    } else return next (new HttpError("Could not find a user corresponding to the provided credentials", 401));
};

const updateProfile = async (req, res, next) => {
    const userid = req.params.userid;
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError("Invalid inputs, please check your data", 422);
    const { displayName, email, username, profilePhotoUrl, shortBio } = req.body;

    let selectedUser;
    try {
        selectedUser = await User.findById(userid);
    } catch (err) {
        return next (new HttpError("Sorry, could not find the selected user's data!", 401));
    };

    if (!selectedUser) {
        return next (new HttpError("Sorry, could not find a matching user!", 401));
    };

    selectedUser.displayName = displayName;
    selectedUser.email = email;
    selectedUser.username = username;
    selectedUser.profilePhotoUrl = profilePhotoUrl;
    selectedUser.shortBio = shortBio;

    try {
        await selectedUser.save()
    } catch (err) {
        return next (new HttpError("Sorry, could not update the user's data!", 401));
    };

    res.json({ user: selectedUser });
};

exports.createAndLogInToUser = createAndLogInToUser;
exports.getAllUsers = getAllUsers;
exports.getUserInfo = getUserInfo;
exports.loginToExistingUser = loginToExistingUser;
exports.updateProfile = updateProfile;