const express = require("express");
const getRepo = require("../../utils/getRepo");
const getCode = require("../../utils/getCode");
const getLang = require("../../utils/getLang");
const jwt = require("jsonwebtoken");
let authPop = "noPop";
let noPop = false;

const User = require("../../../db/models/User");
const router = express.Router();

const port = process.env.PORT || 3000;

function eventSorter(a, b) {
  return a.isDir > b.isDir ? -1 : 1;
}

router.get("/", async (req, res) => {
  var token = req.cookies.auth;
  authPop = req.cookies.authPop;
  var info = await getCode(token);
  res.render("githubRepoCode", { authPop });
  if (authPop === "authPop") {
    res.cookie("authPop", "noPop");
  }
});

router.get("/*", async (req, res) => {
  let pic;
  let decoded;
  let isLogin = false;
  var token = req.cookies.auth;
  var structure = req.originalUrl.substring(7);
  var arr = structure.split("/");
  const username = arr[1];
  const repo = arr[2];
  structure = "";
  for (var i = 3; i < arr.length; i++) {
    structure = structure + arr[i] + "/";
  }
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
    var output = await getRepo(username, repo, structure, token);
    var parentURL =
      req.protocol + "://" + req.hostname + (port != 3000 ? "" : ":" + port);
    var link =
      req.protocol +
      "://" +
      req.hostname +
      (port != 3000 ? "" : ":" + port) +
      "/github" +
      req.path;

    if (link[link.length - 1] != "/") {
      link = link + "/";
    }
    for (var i = 0; i < output.length; i++) {
      var splitArr = output[i].url.split("/");
      var name = splitArr[splitArr.length - 1].split("?")[0];
      output[i].url = link + name;
    }
    for (var i = 0; i < output.length; i++) {
      if (output[i].type === "dir") {
        output[i].isDir = 1;
      } else {
        output[i].isDir = 0;
      }
    }

    var curDir;
    if (structure.length === 0) {
      curDir = repo;
    } else {
      curDir = arr[arr.length - 1];
    }
    if (Object.prototype.toString.call(output) === "[object Array]") {
      output.sort(eventSorter);
      if (req.cookies.authPop == "noPop") {
        noPop = true;
      }
      res.render("directory", {
        data: output,
        structure: decodeURI("./" + repo + "/" + structure),
        curDir: decodeURI(curDir),
        username,
        repo,
        profilePic: "https://github.com/" + username + ".png",
        userLink: "https://github.com/" + username,
        repoLink: "https://github.com/" + username + "/" + repo,
        authPop,
        noPop,
      });
      if (authPop === "authPop") {
        res.cookie("authPop", "noPop");
      }
    } else if (output.message) {
      let rateExd = 0;
      if (output.message.length >= 23) {
        if (output.message.substring(0, 23) === "API rate limit exceeded") {
          rateExd = 1;
        }
      }
      res.render("error", { error: output.message, rateExd });
    } else {
      var ext = output.name.split(".").pop();
      var code = await getCode(username, repo, structure, token);
      if (code.message) {
        return res.render("error", { error: code.message });
      }
      var isJava = 0;
      if (ext == "java") {
        isJava = 1;
      }
      const showRunButtons = true;
      if (req.cookies.authPop == "noPop") {
        noPop = true;
      }
      res.render("index", {
        theme: "solarized_dark",
        description: code,
        lang: getLang(ext),
        profilePic: "https://github.com/" + username + ".png",
        userLink: "https://github.com/" + username,
        repoLink: "https://github.com/" + username + "/" + repo,
        postUrl: "/",
        name: decodeURI("./" + repo + "/" + structure),
        username,
        parentURL: parentURL,
        repo,
        isJava,
        authPop,
        noPop,
        isLogin,
        pic,
        showRunButtons,
        user,
      });
    }
    if (authPop === "authPop") {
      res.cookie("authPop", "noPop");
    }
  } catch (error) {
    res.render("error", { error });
  }
});

router.post("/*", async (req, res) => {
  var token = req.cookies.auth;
  var structure = req.originalUrl.substring(7);
  var arr = structure.split("/");
  const username = arr[1];
  const repo = arr[2];
  structure = "";
  for (var i = 3; i < arr.length; i++) {
    structure = structure + arr[i] + "/";
  }
  try {
    var output = await getRepo(username, repo, structure, token);
    var parentURL =
      req.protocol + "://" + req.hostname + (port != 3000 ? "" : ":" + port);
    var link =
      req.protocol +
      "://" +
      req.hostname +
      (port != 3000 ? "" : ":" + port) +
      "/github" +
      req.path;

    if (link[link.length - 1] != "/") {
      link = link + "/";
    }

    for (var i = 0; i < output.length; i++) {
      var splitArr = output[i].url.split("/");
      var name = splitArr[splitArr.length - 1].split("?")[0];
      output[i].url = link + name;
    }
    for (var i = 0; i < output.length; i++) {
      if (output[i].type === "dir") {
        output[i].isDir = 1;
      } else {
        output[i].isDir = 0;
      }
    }

    var curDir;
    if (structure.length === 0) {
      curDir = repo;
    } else {
      curDir = arr[arr.length - 1];
    }
    if (Object.prototype.toString.call(output) === "[object Array]") {
      output.sort(eventSorter);
      if (req.cookies.authPop == "noPop") {
        noPop = true;
      }
      console;
      res.render("directory", {
        data: output,
        structure: decodeURI("./" + repo + "/" + structure),
        curDir: decodeURI(curDir),
        username,
        repo,
        profilePic: "https://github.com/" + username + ".png",
        userLink: "https://github.com/" + username,
        repoLink: "https://github.com/" + username + "/" + repo,
        authPop,
        noPop,
      });
    } else if (output.message) {
      let rateExd = 0;
      if (output.message.length >= 23) {
        if (output.message.substring(0, 23) === "API rate limit exceeded") {
          rateExd = 1;
        }
      }
      res.render("error", { error: output.message, rateExd });
    } else {
      var ext = output.name.split(".").pop();
      var code = await getCode(username, repo, structure, token);
      if (code.message) {
        return res.render("error", { error: code.message });
      }
      var isJava = 0;
      if (ext == "java") {
        isJava = 1;
      }
      if (req.cookies.authPop == "noPop") {
        noPop = true;
      }
      res.render("index", {
        theme: "solarized_dark",
        description: code,
        lang: getLang(ext),
        profilePic: "https://github.com/" + username + ".png",
        userLink: "https://github.com/" + username,
        repoLink: "https://github.com/" + username + "/" + repo,
        postUrl: "/",
        name: decodeURI("./" + repo + "/" + structure),
        username,
        parentURL: parentURL,
        repo,
        isJava,
        authPop,
        noPop,
      });
    }
    if (authPop === "authPop") {
      res.cookie("authPop", "noPop");
    }
  } catch (error) {
    res.render("error", { error });
  }
});

module.exports = router;
