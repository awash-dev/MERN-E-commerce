const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/usersignup");
router.post("/signup", userSignUpController);

module.exports = router;
