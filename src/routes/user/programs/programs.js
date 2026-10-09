const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const renderApp = require("../../../utils/renderApp");

const User = require("../../../../db/models/User");
const Program = require("../../../../db/models/Program");

router.get("/", async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies["logToken"], process.env.JWTSECRET);
    const user = await User.findById(decoded.user.id).select("-password");
    if (!user) {
      return res.redirect("/user/signup");
    }
    const programs = await Program.find({ user: decoded.user.id }).select("name language date");
    return renderApp(
      req,
      res,
      "savedPrograms",
      { programs: programs.map((program) => ({ id: program.id, name: program.name, language: program.language, date: program.date })) },
      { user }
    );
  } catch (err) {
    return res.redirect("/user/signup");
  }
});

module.exports = router;
