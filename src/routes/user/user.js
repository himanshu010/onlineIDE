const express = require("express");
const sendMail = require("../../utils/sendMail");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randomize = require("randomatic");

const User = require("../../../db/models/User");
const Program = require("../../../db/models/Program");
const Unverified = require("../../../db/models/Unverified");

const router = express.Router();

router.use("/signup", require("./signup/signup"));
router.use("/register", require("./signup/register"));
router.use("/email", require("./signup/emailVerification"));
router.use("/register", require("./signup/register"));

router.use("/login", require("./login/login"));
router.use("/logout", require("./logout/logout"));

router.use("/profile", require("./profile/profile"));
router.use("/edit", require("./profile/editProfile"));

router.use("/programs", require("./programs/programs"));

router.use("/logout", require("./logout/logout"));

module.exports = router;
