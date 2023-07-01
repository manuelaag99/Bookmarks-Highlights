const fs = require("fs");
const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require("express-validator");
const Entry = require("../models/entry");
const mongoose = require("mongoose");
const User = require("../models/user");

const createEntry = async (req, res, next) => {
    const selectedUserId = req.params.userid;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {throw new HttpError("Invalid inputs, please check your data", 422);}
    const { bookTitle, tags, date, pageNumber, creator } = req.body;
    const photoUrl = "http://localhost:3000/" + req.file.path
    console.log(req.file.path)
    let newEntry;
    try {
        newEntry = await Entry({
            userId: selectedUserId,
            bookTitle,
            tags,
            date,
            pageNumber,
            creator,
            photoUrl
        });
    } catch (err) {
        console.log(err)
        return next(new HttpError("Invalid inputs, please check your data!", 500));
    };

    let user;
    try {
        user = await User.findById(creator);
    } catch (err) {
        return next (new HttpError("Sorry, could not create new entry!", 500));
    };

    if (!user) {
        return next (new HttpError("Could not find a user for the provided ID.", 404));
    };

    try {
        const currentSession = await mongoose.startSession();
        currentSession.startTransaction();
        await newEntry.save({ session: currentSession });
        user.entries.push(newEntry);
        await user.save({ session: currentSession });
        await currentSession.commitTransaction();
    } catch (err) {
        console.log(err);
        return next(new HttpError("Could not add entry to database!", 500));
    };

    res.status(201).json({ entry: newEntry.toObject({ getters: true }) });
};

const deleteEntry = async (req, res, next) => {
    const selectedItemId = req.params.itemId;

    let selectedEntry;
    try {
        selectedEntry = await Entry.findById(selectedItemId).populate("creator");
    } catch (err) {
        return next (new HttpError("Sorry, could not find the specified entry!", 500));
    };

    const imagePath = selectedEntry.photoUrl;

    try {
        const currentSession = await mongoose.startSession();
        currentSession.startTransaction();
        await selectedEntry.deleteOne({ session: currentSession });
        selectedEntry.creator.entries.pull(selectedEntry);
        await selectedEntry.creator.save({ session: currentSession });
        await currentSession.commitTransaction();
    } catch (err) {
        console.log(err)
        return next (new HttpError("Sorry, could not delete this entry!", 500));
    }

    fs.unlink(imagePath, err => console.log(err));

    res.status(200).json({message: "Successfully deleted this item."});
};

const getEntryByItemId = async (req, res, next) => {
    const itemId = req.params.itemId;

    let selectedEntry;
    try {
        selectedEntry = await Entry.findById(itemId);
    } catch (err) {
        return next(new HttpError("Could not find specified entry!", 500));
    }
  
    if (!selectedEntry) {
        return next(new HttpError("Sorry, we could not find an entry with that information", 404));
    }

    res.json({ selectedEntry: selectedEntry.toObject({ getters: true }) });
};

const getUserEntriesByUserId = async (req, res, next) => {
    const userid = req.params.userid;

    let userEntries;
    try {
        userEntries = await Entry.find({ userId: userid });
    } catch (err) {
        return next(new HttpError("Sorry, we could not find the entries!", 500));
    }
  
    if (!userEntries || userEntries.length === 0) {
        return next(new HttpError("Sorry, there are no entries corresponding to this user!", 404));
    }

    res.json({ userEntries: userEntries.map(userEntry => userEntry.toObject({ getters: true })) });
};

const updateEntry = async (req, res, next) => {
    const selectedItemId = req.params.itemId;
    const { bookTitle, tags, date, pageNumber } = req.body;
    
    let selectedEntry;
    try {
        selectedEntry = await Entry.findById(selectedItemId)
    } catch (err) {
        return next (new HttpError("Sorry, could not find the specified entry!", 500))
    }

    selectedEntry.bookTitle = bookTitle;
    selectedEntry.tags = tags;
    selectedEntry.date = date;
    selectedEntry.pageNumber = pageNumber;

    try {
        await selectedEntry.save()
    } catch(err) {
        return next (new HttpError("Sorry, could not update this entry!", 500));
    }

    res.status(200).json({entry: selectedEntry.toObject({ getters: true })});
};

exports.createEntry = createEntry;
exports.deleteEntry = deleteEntry;
exports.getEntryByItemId = getEntryByItemId;
exports.getUserEntriesByUserId = getUserEntriesByUserId;
exports.updateEntry = updateEntry;