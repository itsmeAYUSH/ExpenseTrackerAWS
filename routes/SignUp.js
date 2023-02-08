const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");

router.get("/", signUpController.getSignUpData);

router.post("/signUp", signUpController.postSignUpData);

module.exports = router;
