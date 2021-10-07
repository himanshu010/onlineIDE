const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../../../../db/models/User");

router.get("/", async (req, res) => {
  let pic;
  try {
    const logToken = req.cookies["logToken"];
    const decoded = jwt.verify(logToken, process.env.JWTSECRET);
    const user = await User.findById(decoded.user.id).select("-password");
    if (!user) {
      return res.redirect("/user/signup");
    }
    if (user) {
      isLogin = true;
    }

    if (user.photo.data)
      pic = new Buffer.from(user.photo.data).toString("base64");
    res.render("profile", {
      isLogin,
      user,
      pic,
    });
  } catch (err) {
    return res.redirect("/user/signup");
  }
});

module.exports = router;
