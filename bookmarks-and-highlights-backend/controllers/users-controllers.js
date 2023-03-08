const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');

let users = [
    {
        id: "0001",
        displayName: "Manuel Alanis",
        email: "manuelaag99@gmail.com",
        username: "manuelaag98",
        password: "dhfj893dj9843nd934",
        profilePhotoUrl: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        shortBio: "I love reading about history"
    },
    {
        id: "0002",
        displayName: "Max López",
        email: "maxlopez@mail.com",
        username: "soytanmax",
        password: "8934jr084rj0vk4",
        profilePhotoUrl: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        shortBio: "I love books about self improvement"
    },
    {
        id: "0003",
        displayName: "Abi Mejía",
        email: "abimejia@mail.com",
        username: "abimejia",
        password: "89rj0io3hr497rh",
        profilePhotoUrl: "https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg",
        shortBio: "I love books about self improvement"
    }
];

const createAndLogInToUser = function (req, res) {
    const { displayName, email, username, password, profilePhotoUrl, shortBio } = req.body;
    if (users.find(user => user.email === email)) {
        throw new HttpError("Sorry, there is already an account registered with this e-mail!", 422);
    };
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

const loginToExistingUser = function (req, res) {
    const { username, email, password } = req.body
    const selectedUser = users.find(user => user.username === username);
    if (selectedUser) {
        if (selectedUser.password === password) {
            res.json({ selectedUser })
        } else throw new HttpError("The password and the user credential do not match", 401);
    } else throw new HttpError("Could not find a user corresponding to the provided credentials", 401);
};

exports.createAndLogInToUser = createAndLogInToUser;
exports.getAllUsers = getAllUsers;
exports.loginToExistingUser = loginToExistingUser;