const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../../../../db/models/User");

router.get("/", async (req, res) => {
  let pic;
  let isLogin = false;
  try {
    const logToken = req.cookies["logToken"];
    const decoded = jwt.verify(logToken, process.env.JWTSECRET);
    const user = await User.findById(decoded.user.id).select("-password");

    if (user.photo.data)
      pic = new Buffer.from(user.photo.data).toString("base64");
    if (user) {
      isLogin = true;
    }
    res.render("editProfile", {
      isLogin,
      user,
      pic,
    });
  } catch (err) {
    console.error(err);
    return res.redirect("/");
  }
});

module.exports = router;
