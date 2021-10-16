const express = require("express");
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

router.use("/forgot-password", require("./forgotPassword/forgotPassword"));
router.use("/change-password", require("./forgotPassword/changePassword"));
router.use("/new-password", require("./forgotPassword/newPassword"));

module.exports = router;
