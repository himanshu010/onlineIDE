const axios = require("axios");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const hbs = require("hbs");
const output = require("./utils/output");
const getRepo = require("./utils/getRepo");
const getCode = require("./utils/getCode");
const getLang = require("./utils/getLang");
const cookieParser = require("cookie-parser");
const { type } = require("os");

dotenv.config({ path: "./config/dev.env" });

console.log(__dirname);
console.log(path.join(__dirname, ".."));

const app = express();
const port = process.env.PORT || 3000;

//defining paths for handlebars
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

//seting up static npfiles. So that
//we don't have to give location
//of whole file present in public folder
app.use(express.static(publicDirectoryPath));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

let token = null;
let parent_url = "/";
const clientId = process.env.CLIENT_G_ID;
const clientSecret = process.env.CLIENT_G_SECRET;

app.get("", (req, res) => {
  res.render("index");
});

app.post("", (req, res) => {
  console.log(req.body);
  var parentURL =
    req.protocol + "://" + req.hostname + (port != 3000 ? "" : ":" + port);
  console.log(parentURL);
  output(
    req.body.description,
    req.body["select-language"],
    req.body.input,
    (error, result) => {
      if (error) {
        return res.render("error", {
          error: error.code,
          errno: error.errno,
        });
      }
      var isError = false;
      if (result.body.memory == null && result.body.cpuTime == null) {
        isError = true;
      }
      console.log(result);
      console.log(req.body.description);
      res.render("index", {
        description: req.body.description,
        theme: req.body["select-theme"],
        lang: req.body["select-language"],
        stdin: req.body.input,
        stdout: result.body.output,
        msg: "Compiled",
        time: result.body.cpuTime,
        memory: result.body.memory,
        isError,
        parentURL: parentURL,
      });
    }
  );
});

app.get("/github", (req, res) => {
  res.render("githubRepoCode");
});

function eventSorter(a, b) {
  return a.isDir > b.isDir ? -1 : 1;
}

app.get("/github/*", async (req, res) => {
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
      return res.render("directory", {
        data: output,
        structure: decodeURI("./" + repo + "/" + structure),
        curDir: decodeURI(curDir),
        username,
        repo,
        profilePic: "https://github.com/" + username + ".png",
        userLink: "https://github.com/" + username,
        repoLink: "https://github.com/" + username + "/" + repo,
      });
    } else if (output.message) {
      let rateExd = 0;
      if (output.message.length >= 23) {
        if (output.message.substring(0, 23) === "API rate limit exceeded") {
          rateExd = 1;
        }
      }
      return res.render("error", { error: output.message, rateExd });
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
      res.render("index", {
        theme: "solarized_dark",
        description: code,
        lang: getLang(ext),
        profilePic: "https://github.com/" + username + ".png",
        userLink: "https://github.com/" + username,
        repoLink: "https://github.com/" + username + "/" + repo,
        name: decodeURI("./" + repo + "/" + structure),
        username,
        parentURL: parentURL,
        repo,
        isJava,
      });
    }
  } catch (error) {
    res.render("error", { error });
  }
});

app.post("/github/*", async (req, res) => {
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
      return res.render("directory", {
        data: output,
        structure: decodeURI("./" + repo + "/" + structure),
        curDir: decodeURI(curDir),
        username,
        repo,
        profilePic: "https://github.com/" + username + ".png",
        userLink: "https://github.com/" + username,
        repoLink: "https://github.com/" + username + "/" + repo,
      });
    } else if (output.message) {
      let rateExd = 0;
      if (output.message.length >= 23) {
        if (output.message.substring(0, 23) === "API rate limit exceeded") {
          rateExd = 1;
        }
      }
      return res.render("error", { error: output.message, rateExd });
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
      res.render("index", {
        theme: "solarized_dark",
        description: code,
        lang: getLang(ext),
        profilePic: "https://github.com/" + username + ".png",
        userLink: "https://github.com/" + username,
        repoLink: "https://github.com/" + username + "/" + repo,
        name: decodeURI("./" + repo + "/" + structure),
        username,
        parentURL: parentURL,
        repo,
        isJava,
      });
    }
  } catch (error) {
    res.render("error", { error });
  }
});

app.get("/auth", (req, res) => {
  console.log(req.query.parent_url);
  res.redirect(
    `https://github.com/login/oauth/authorize?&client_id=${clientId}`
  );

  parent_url = req.query.parent_url;
});

app.post("/auth", (req, res) => {
  console.log(req.query.parent_url);
  res.redirect(
    `https://github.com/login/oauth/authorize?&client_id=${clientId}`
  );
  parent_url = req.query.parent_url;
});

app.get("/auth/oauth-callback", (req, res) => {
  const body = {
    client_id: clientId,
    client_secret: clientSecret,
    code: req.query.code,
  };
  const opts = { headers: { accept: "application/json" } };
  axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((res) => res.data["access_token"])
    .then((_token) => {
      console.log("My token:", token);
      token = _token;
      res.cookie("auth", token);
      if (parent_url) {
        return res.redirect(parent_url);
      }
      return res.redirect("/github");
    })
    .catch((err) => res.render("error", { error: err.message }));
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("server is up on port " + port);
});
