const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../../../../db/models/User");
const Program = require("../../../../db/models/Program");

router.get("/", async (req, res) => {
  let pic;
  isLogin = false;
  try {
    const logToken = req.cookies["logToken"];
    const decoded = jwt.verify(logToken, process.env.JWTSECRET);
    const user = await User.findById(decoded.user.id).select("-password");
    if (!user) {
      return res.redirect("/user/signup");
    }
    isLogin = true;

    if (user.photo.data)
      pic = new Buffer.from(user.photo.data).toString("base64");
    const programs = await Program.find({ user: decoded.user.id });
    let data = programs;
    for (let i = 0; i < data.length; i++) {
      data[i].url = "/program/" + data[i]._id;
    }
    res.render("savedPrograms", {
      isLogin,
      pic,
      data,
      structure: "Programs",
      user,
      // curDir: decodeURI(curDir),
      username: user.firstName + " " + user.lastName,
      // repo,
      // profilePic: "https://github.com/" + username + ".png",
      userLink: "/user/profile",
      // repoLink: "https://github.com/" + username + "/" + repo,
    });
  } catch (err) {
    return res.redirect("/user/signup");
  }
});

module.exports = router;
