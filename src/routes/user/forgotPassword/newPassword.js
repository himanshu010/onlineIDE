const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../../../db/models/User");
const Unverified = require("../../../../db/models/Unverified");

router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let user = await User.findOne({ email }).select("-password");
  let unVerUser = await Unverified.findOne({ email }).select("-password");

  const salt = await bcrypt.genSalt(10);
  unVerUser.password = await bcrypt.hash(password, salt);
  unVerUser.save();

  user.password = await bcrypt.hash(password, salt);
  user.save();

  return res.redirect("/user/login/?msg=Password Changed");
});

module.exports = router;
