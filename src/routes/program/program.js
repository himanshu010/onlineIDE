const express = require("express");
const router = express.Router();
const output = require("../../utils/output");
const jwt = require("jsonwebtoken");

const User = require("../../../db/models/User");
const Program = require("../../../db/models/Program");

router.get("/:id", async (req, res) => {
  let isLogin = false;
  let pic;
  const result = await output(
    req.body.description,
    req.body["select-language"],
    req.body.input
  );
  if (result.body.memory == null && result.body.cpuTime == null) {
    isError = true;
  }
  try {
    const program = await Program.findById(req.params.id);
    const showRunButtons = true;
    try {
      const logToken = req.cookies["logToken"];
      const decoded = jwt.verify(logToken, process.env.JWTSECRET);
      const user = await User.findById(decoded.user.id).select("-password");

      if (user.photo.data)
        pic = new Buffer.from(user.photo.data).toString("base64");
      if (user) {
        isLogin = true;
      }

      res.render("index", {
        description: program.description,
        theme: req.body["select-theme"],
        lang: program.language,
        stdin: program.input,
        isLogin,
        pic,
        showRunButtons,
        user,
        // stdout: result.body.output,
        // msg: "Compiled",
        // time: result.body.cpuTime,
        // memory: result.body.memory,
        // isError,
        // parentURL: parentURL,
      });
    } catch (err) {
      res.render("index", {
        description: program.description,
        theme: req.body["select-theme"],
        lang: program.language,
        stdin: program.input,
        showRunButtons,
        // stdout: result.body.output,
        // msg: "Compiled",
        // time: result.body.cpuTime,
        // memory: result.body.memory,
        // isError,
        // parentURL: parentURL,
      });
    }
  } catch (err) {
    res.redirect("/");
  }
});

module.exports = router;
