const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users-controllers");
const router = express.Router();

router.get("/", usersControllers.getAllUsers);

router.get("/:userid/info", usersControllers.getUserInfo);

router.post("/login", usersControllers.loginToExistingUser);

router.post(
    "/signup",
    check("username").isLength({ min: 5 }),
    check("email").isEmail(),
    check("password").isLength({ min: 10 }).isStrongPassword(),
    usersControllers.createAndLogInToUser);

router.patch(
    "/:userid/updateProfile",
    check("displayName").not().isEmpty(),
    check("email").isEmail(),
    check("username").isLength({ min: 5 }),
    usersControllers.updateProfile);

module.exports = router;