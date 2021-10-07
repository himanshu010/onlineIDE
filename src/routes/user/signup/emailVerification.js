const express = require("express");
const router = express.Router();

const sendMail = require("../../../utils/sendMail");
const bcrypt = require("bcryptjs");
const randomize = require("randomatic");

const User = require("../../../../db/models/User");
const Unverified = require("../../../../db/models/Unverified");

router.post("/verify", async (req, res) => {
  const otp = randomize("0", 4);
  let { firstName, lastName, email, password } = req.body;

  const isSignUp = req.body.isSignUp;
  const isForgotPassword = req.body.isForgotPassword;
  try {
    if (isSignUp) {
      try {
        let user = await User.findOne({ email }).select("-password");
        let unVerUser = await Unverified.findOne({ email }).select("-password");
        if (user) {
          res.status(400);
          res.redirect("/user/signup/?msg=User already exists");
        }
        if (!unVerUser) {
          unVerUser = new Unverified({
            firstName,
            lastName,
            email,
            password,
            otp,
          });
          const salt = await bcrypt.genSalt(10);
          unVerUser.password = await bcrypt.hash(password, salt);
          unVerUser.save();
        } else {
          const salt = await bcrypt.genSalt(10);
          password = await bcrypt.hash(password, salt);
          let newUnVerUser = await Unverified.findOneAndUpdate(
            { email },
            { firstName, lastName, password, otp },
            {
              new: true,
            }
          );
        }
        const subject =
          "[OnlineIde] Otp for registration is : " + unVerUser.otp;
        const text = "Your OTP for registeration is " + unVerUser.otp;
        sendMail(unVerUser.email, subject, text);
        res.render("verify", {
          email: unVerUser.email,
          msg: "OTP sent to your mail",
        });
      } catch (err) {}
    } else if (isForgotPassword) {
    }
  } catch (err) {
    if (isSignUp) {
      res.redirect("/user/signup");
    } else if (isForgotPassword) {
      res.redirect("/user/login");
    }
  }
});

module.exports = router;
