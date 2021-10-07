const express = require("express");
const router = express.Router();
const sendMail = require("../../utils/sendMail");
const randomize = require("randomatic");

const Unverified = require("../../../db/models/Unverified");

router.post("/resend", async (req, res) => {
  const { email, msg } = req.body;
  try {
    let unVerUser = await Unverified.findOne({ email });
    if (!unVerUser) {
      res.redirect("/user/signup");
    }
    const otp = randomize("0", 4);
    unVerUser.otp = otp;
    await unVerUser.save();
    const subject = "[OnlineIde] Otp for registration is : " + otp;
    const text = "Your OTP for registeration is " + otp;
    sendMail(email, subject, text);
    res.render("verify", { email, msg });
  } catch (err) {
    res.redirect("/user/signup");
  }
});

module.exports = router;
