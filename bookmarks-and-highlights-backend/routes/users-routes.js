const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users-controllers");
const fileUpload = require("../middleware/file-upload");
const router = express.Router();

router.get("/", usersControllers.getAllUsers);

router.get("/:userid/info", usersControllers.getUserInfo);

router.post("/login", usersControllers.loginToExistingUser);

router.post(
    "/signup",
    check("username").isLength({ min: 5 }),
    check("email").isEmail(),
    usersControllers.createAndLogInToUser);

router.patch(
    "/:userid/updateProfile",
    fileUpload.single("profilePhotoUrl"), 
    check("displayName").not().isEmpty(),
    check("username").isLength({ min: 5 }),
    usersControllers.updateProfile);

module.exports = router;