const express = require("express");
const router = express.Router();

const Unverified = require("../../../../db/models/Unverified");
const { signOtpToken } = require("../../../utils/otpToken");

router.get("/", async (req, res) => {
  const msg = req.query.msg;
  res.render("signUp", { msg });
});

router.post("/check", async (req, res) => {
  try {
    const { digit1, digit2, digit3, digit4, email } = req.body;
    const filled = [digit1, digit2, digit3, digit4].join("");
    const unVerUser = await Unverified.findOne({ email });
    if (!unVerUser) return res.redirect("/user/signup");

    let signup = false;
    let forgotPassword = false;
    if (req.body.signup) {
      signup = true;
    } else {
      forgotPassword = true;
    }

    const isCorrect = Boolean(unVerUser.otp) && filled === unVerUser.otp;
    // Every check uses up the code, right or wrong, so it cannot be guessed by retrying.
    unVerUser.otp = undefined;
    await unVerUser.save();
    res.render("afterOtp", {
      email,
      isCorrect,
      forgotPassword,
      signup,
      token: isCorrect ? signOtpToken(email, signup ? "signup" : "forgot-password") : undefined,
    });
  } catch (err) {
    res.redirect("/user/signup");
  }
});

module.exports = router;
