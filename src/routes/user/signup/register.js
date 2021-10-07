const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../../../../db/models/User");

router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    //See if user exists
    let unVerUser = await User.findOne({ email }).select("-password");
    if (unVerUser) {
      res.status(400);
      res.redirect("/user/signup/?msg=User already exists");
    }
    unVerUser = await Unverified.findOne({ email });
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
      (err, token) => {
        if (err) {
          throw err;
        }
        res.cookie("logToken", token);
        res.redirect("/user/profile");
      }
    );
  } catch (err) {
    res.status(500).send("server error");
  }
});

module.exports = router;
