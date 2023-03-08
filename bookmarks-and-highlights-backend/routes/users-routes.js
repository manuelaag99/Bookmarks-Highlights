const express = require("express");

const usersControllers = require("../controllers/users-controllers");
const router = express.Router();

router.get("/", usersControllers.getAllUsers);

router.post("/login", usersControllers.loginToExistingUser);

router.post("/signup", usersControllers.createAndLogInToUser);

module.exports = router;