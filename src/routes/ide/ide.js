const express = require("express");
const output = require("../../utils/output");
const jwt = require("jsonwebtoken");

const User = require("../../../db/models/User");
const Program = require("../../../db/models/Program");

const router = express.Router();
const port = process.env.PORT || 3000;

router.get("/", async (req, res) => {
  let pic;
  const showRunButtons = true;
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
    res.render("index", { isLogin, pic, showRunButtons, user });
  } catch (err) {
    console.error(err);
    return res.render("index", { showRunButtons });
  }
});

router.post("/", async (req, res) => {
  let pic;
  let decoded;
  let isLogin = false;

  var parentURL =
    req.protocol + "://" + req.hostname + (port != 3000 ? "" : ":" + port);
  try {
    const logToken = req.cookies["logToken"];
    let user;
    if (logToken) {
      decoded = jwt.verify(logToken, process.env.JWTSECRET);
      user = await User.findById(decoded.user.id).select("-password");

      if (user.photo.data)
        pic = new Buffer.from(user.photo.data).toString("base64");
    }
    if (user) {
      isLogin = true;
    }
    const isSave = req.body.isSave;
    if (isSave) {
      if (!user) {
        return res.redirect("/user/signup");
      }
      const newProgram = new Program({
        description: req.body.description,
        name: req.body.name,
        input: req.body.input,
        user: decoded.user.id,
        language: req.body["select-language"],
      });
      await newProgram.save();
    }
    const result = await output(
      req.body.description,
      req.body["select-language"],
      req.body.input
    );
    var isError = false;
    if (result.body.memory == null && result.body.cpuTime == null) {
      isError = true;
    }
    const showRunButtons = true;
    res.render("index", {
      description: req.body.description,
      theme: req.body["select-theme"],
      lang: req.body["select-language"],
      stdin: req.body.input,
      stdout: result.body.output,
      msg: "Compiled",
      isSave,
      time: result.body.cpuTime,
      memory: result.body.memory,
      isError,
      parentURL: parentURL,
      postUrl: "/",
      isLogin,
      pic,
      showRunButtons,
      user,
    });
  } catch (error) {
    return res.render("error", {
      error: error.code,
      errno: error.errno,
    });
  }
});

module.exports = router;
