const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../../../../db/models/User");

router.get("/", async (req, res) => {
  const msg = req.query.msg;
  res.render("login", { msg });
});

router.post("/verify", async (req, res) => {
  const { email, password } = req.body;
  try {
    //See if user exists
    let user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      return res.redirect("/user/login/?msg=Invalid Credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400);
      return res.redirect("/user/login/?msg=Invalid Credentials");
    }

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
