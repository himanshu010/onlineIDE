const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../../../../db/models/User");
const Unverified = require("../../../../db/models/Unverified");
const { authCookie } = require("../../../utils/cookies");
const { verifyOtpToken } = require("../../../utils/otpToken");

router.post("/", async (req, res) => {
  const { email, token } = req.body;
  try {
    if (!verifyOtpToken(token, email, "signup")) {
      return res.redirect("/user/signup/?msg=Please verify your email first");
    }
    //See if user exists
    const existing = await User.findOne({ email }).select("-password");
    if (existing) {
      return res.redirect("/user/signup/?msg=User already exists");
    }
    const unVerUser = await Unverified.findOne({ email });
    if (!unVerUser) {
      return res.redirect("/user/signup");
    }
    let user = new User({
      firstName: unVerUser.firstName,
      lastName: unVerUser.lastName,
      email,
      password: unVerUser.password,
    });
    await user.save();

    //return jwt token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: 360000 },
      (err, loginToken) => {
        if (err) {
          return res.status(500).send("server error");
        }
        res.cookie("logToken", loginToken, authCookie(req));
        res.redirect("/user/profile");
      }
    );
  } catch (err) {
    res.status(500).send("server error");
  }
});

module.exports = router;
