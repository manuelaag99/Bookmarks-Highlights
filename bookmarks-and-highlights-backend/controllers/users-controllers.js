const fs = require("fs");
const HttpError = require("../models/http-error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/user");

const createAndLogInToUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return next (new HttpError("Invalid inputs, please check your data", 422));
    const { email, username, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return next (new HttpError("Sorry, signup failed!", 422));
    };

    if (existingUser) return next (new HttpError("Sorry, there is already an account registered with this e-mail!", 422));

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        return next (new HttpError("Sorry, could not save the new user!", 500));
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

    let token;
    try {
        token = jwt.sign({ userId: newUser.id, email: newUser.email }, "secret_key", { expiresIn: "1h" });
    } catch (err) {
        return next (new HttpError("Signing up failed, please try again!", 500));
    }

    res.status(201).json({ userId: newUser.id, email: newUser.email, token: token });
};

// const deleteUser = async (req, res, next) => {
//     const userid = req.params.userid;

//     let selectedUser;
//     try {
//         selectedUser = await User.findById(userid);
//     } catch (err) {
//         return next (new HttpError("Sorry, could not delete this user!", 422))
//     }

//     res.json({ user: selectedUser.toObject({ getters: true }) });
// }

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

    res.json({ user: selectedUser.toObject({ getters: true }) });
};

const loginToExistingUser = async (req, res, next) => {
    const { email, password } = req.body;
    let selectedUser;
    try {
        selectedUser = await User.findOne({ email: email });
    } catch {
        return next (new HttpError("Sorry, could not find a user corresponding to the provided credentials!", 422));
    };

    console.log(selectedUser)
    let isPasswordValid;
    try {
        console.log(password)
        console.log(selectedUser.password);
        isPasswordValid = await bcrypt.compare(password, selectedUser.password);
    } catch (err) {
        return next (new HttpError("Sorry, could not check your data!", 500));
    }

    console.log(isPasswordValid);
    if (!isPasswordValid) return next (new HttpError("The password and the user credential do not match", 401));
    
    let token;
    try {
        token = jwt.sign({ userId: selectedUser.id, email: selectedUser.email }, "secret_key", { expiresIn: "1h" });
    } catch (err) {
        return next (new HttpError("Logging in failed, please try again!", 500));
    }

    res.json({ userId: newUser.id, email: newUser.email, token: token });
};

const updateProfile = async (req, res, next) => {
    const userid = req.params.userid;
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError("Invalid inputs, please check your data", 422);
    const { displayName, shortBio, username } = req.body;
    const profilePhotoUrl = req.file.path
    let selectedUser;
    try {
        selectedUser = await User.findById(userid);
    } catch (err) {
        return next (new HttpError("Sorry, could not find the selected user's data!", 401));
    };

    if (!selectedUser) return next (new HttpError("Sorry, could not find a matching user!", 401));

    selectedUser.displayName = displayName;    
    selectedUser.profilePhotoUrl = "http://localhost:3000/" + profilePhotoUrl;
    selectedUser.shortBio = shortBio;
    selectedUser.username = username;

    try {
        await selectedUser.save()
    } catch (err) {
        return next (new HttpError("Sorry, could not update the user's data!", 401));
    };

    res.json({ user: selectedUser.toObject({ getters: true }) });
};

exports.createAndLogInToUser = createAndLogInToUser;
exports.getAllUsers = getAllUsers;
exports.getUserInfo = getUserInfo;
exports.loginToExistingUser = loginToExistingUser;
exports.updateProfile = updateProfile;