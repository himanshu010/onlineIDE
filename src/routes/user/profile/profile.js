const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const renderApp = require("../../../utils/renderApp");

const User = require("../../../../db/models/User");

router.get("/", async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies["logToken"], process.env.JWTSECRET);
    const user = await User.findById(decoded.user.id).select("-password");
    if (!user) {
      return res.redirect("/user/signup");
    }
    return renderApp(req, res, "profile", {}, { user });
  } catch (err) {
    return res.redirect("/user/signup");
  }
});

module.exports = router;
