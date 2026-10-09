const express = require("express");
const router = express.Router();

const sendMail = require("../../../utils/sendMail");
const bcrypt = require("bcryptjs");
const randomize = require("randomatic");

const User = require("../../../../db/models/User");
const Unverified = require("../../../../db/models/Unverified");
const renderApp = require("../../../utils/renderApp");

const withMsg = (path, msg) => `${path}/?msg=${encodeURIComponent(msg)}`;

// Starts sign-up or a password reset: stores a new code for the email and sends it.
router.post("/verify", async (req, res) => {
  const otp = randomize("0", 4);
  const { firstName, lastName, email, password } = req.body;

  if (req.body.isSignUp) {
    try {
      if (!email || !firstName || !lastName || typeof password !== "string" || password.length < 6) {
        return res.redirect(withMsg("/user/signup", "Fill in every field; the password needs at least 6 characters."));
      }
      if (await User.findOne({ email })) {
        return res.redirect(withMsg("/user/signup", "User already exists"));
      }
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      await Unverified.findOneAndUpdate({ email }, { firstName, lastName, password: hashed, otp }, { upsert: true, setDefaultsOnInsert: true });
      if (!(await sendMail.code(email, otp, "signup"))) {
        return res.redirect(withMsg("/user/signup", sendMail.failedMessage));
      }
      return renderApp(req, res, "verify", { email, msg: "OTP sent to your mail", type: "signup" });
    } catch (err) {
      return res.redirect("/user/signup");
    }
  }

  if (req.body.isForgotPassword) {
    try {
      if (!email) return res.redirect("/user/forgot-password");
      const user = await User.findOne({ email });
      if (!user) {
        return res.redirect(withMsg("/user/forgot-password", "There's no account with that email."));
      }
      // The code lives on the pending record from sign-up; accounts without one get it recreated.
      await Unverified.findOneAndUpdate(
        { email },
        { otp, $setOnInsert: { firstName: user.firstName, lastName: user.lastName, password: user.password } },
        { upsert: true, setDefaultsOnInsert: true }
      );
      if (!(await sendMail.code(email, otp, "forgot-password"))) {
        return res.redirect(withMsg("/user/forgot-password", sendMail.failedMessage));
      }
      return renderApp(req, res, "verify", { email, msg: "OTP sent to your mail", type: "forgot-password" });
    } catch (err) {
      return res.redirect("/user/forgot-password");
    }
  }

  return res.redirect("/user/signup");
});

module.exports = router;
