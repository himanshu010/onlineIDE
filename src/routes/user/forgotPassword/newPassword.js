const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../../../db/models/User");
const Unverified = require("../../../../db/models/Unverified");
const { verifyOtpToken } = require("../../../utils/otpToken");

router.post("/", async (req, res) => {
  const { email, password, token } = req.body;
  try {
    if (!verifyOtpToken(token, email, "forgot-password")) {
      return res.redirect("/user/forgot-password");
    }
    if (typeof password !== "string" || password.length < 6) {
      return res.redirect("/user/forgot-password");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.redirect("/user/login/?msg=User doesn't exist");
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const unVerUser = await Unverified.findOne({ email });
    if (unVerUser) {
      unVerUser.password = user.password;
      await unVerUser.save();
    }

    return res.redirect("/user/login/?msg=Password Changed");
  } catch (err) {
    return res.redirect("/user/forgot-password");
  }
});

module.exports = router;
