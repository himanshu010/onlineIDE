const express = require("express");
const router = express.Router();
const sendMail = require("../../utils/sendMail");
const randomize = require("randomatic");

const Unverified = require("../../../db/models/Unverified");
const User = require("../../../db/models/User");
const renderApp = require("../../utils/renderApp");

router.post("/resend", async (req, res) => {
  const { email, msg } = req.body;
  const type = req.body.signup ? "signup" : "forgot-password";
  const start = type === "signup" ? "/user/signup" : "/user/forgot-password";
  try {
    const unVerUser = await Unverified.findOne({ email });
    if (!unVerUser) return res.redirect(start);
    if (type === "forgot-password" && !(await User.findOne({ email }))) return res.redirect("/user/signup");

    const otp = randomize("0", 4);
    unVerUser.otp = otp;
    await unVerUser.save();
    if (!(await sendMail.code(email, otp, type))) {
      return renderApp(req, res, "verify", { email, msg: sendMail.failedMessage, type });
    }
    return renderApp(req, res, "verify", { email, msg, type });
  } catch (err) {
    return res.redirect(start);
  }
});

module.exports = router;
