const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const User = require("../../../db/models/User");

router.post("/update", async (req, res) => {
  try {
    const logToken = req.cookies["logToken"];
    const decoded = jwt.verify(logToken, process.env.JWTSECRET);
    const prevData = await User.findById(decoded.user.id).select("-password");
    let { firstName, lastName, headline, college } = req.body;
    if (firstName === "") {
      firstName = prevData.firstName;
    }
    if (lastName === "") {
      lastName = prevData.lastName;
    }
    if (headline === "") {
      headline = prevData.headline;
    }
    if (college === "") {
      college = prevData.college;
    }

    let photo = prevData.photo;
    if (req.file) {
      photo = {
        data: fs.readFileSync(
          path.join(__dirname + "/../../../uploads/" + req.file.filename)
        ),
        contentType: req.file.mimetype,
      };
    }
    let newUser = {};
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.headline = headline;
    newUser.college = college;
    newUser.photo = photo;
    await User.findByIdAndUpdate(decoded.user.id, newUser, {
      new: true,
    }).select("-password");
    if (req.file) {
      await promisify(fs.unlink)(req.file.path);
    }
    res.redirect("/user/profile");
  } catch (err) {
    return res.redirect("/user/login");
  }
});

module.exports = router;
