const express = require("express");
const router = express.Router();
const sendMail = require("../../utils/sendMail");
const randomize = require("randomatic");

const Unverified = require("../../../db/models/Unverified");
const User = require("../../../db/models/User");

router.post("/resend", async (req, res) => {
  const { email, msg } = req.body;
  let signup = false;
  if (req.body.signup) {
    signup = true;
  }
  try {
    let unVerUser = await Unverified.findOne({ email });
    const otp = randomize("0", 4);
    unVerUser.otp = otp;
    await unVerUser.save();
    if (signup) {
      const subject = "[OnlineIde] Otp for registration is : " + otp;
      const text = "Your OTP for registeration is " + otp;
      sendMail(email, subject, text);
      return res.render("verify", { email, msg, type: "signup" });
    } else {
      let user = await User.findOne({ email });
      if (!user) {
        return res.redirect("/user/signup");
      }
      const subject =
        "[OnlineIde] Your otp to change your password is : " + unVerUser.otp;
      const text =
        'A "forgot password" request has been initiated by your account. Your OTP  is ' +
        unVerUser.otp;

      sendMail(email, subject, text);
      return res.render("verify", {
        email,
        msg,
        type: "forgot-password",
      });
    }
  } catch (err) {
    return res.redirect("/user/signup");
  }
});

module.exports = router;
