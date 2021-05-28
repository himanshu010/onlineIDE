const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const hbs = require("hbs");
const output = require("./utils/output");
const getRepo = require("./utils/getRepo");
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

app.get("", (req, res) => {
  res.render("index");
});

app.post("", (req, res) => {
  console.log(req.body);
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
      });
    }
  );
});

app.get("/github", (req, res) => {
  res.render("githubRepoCode");
});
app.get(/^\/github\/(.*)/, (req, res) => {
  var structure = req.originalUrl.substring(7);
  var arr = structure.split("/");
  const username = arr[1];
  const repo = arr[2];
  structure = "";
  for (var i = 3; i < arr.length; i++) {
    structure = structure + arr[i] + "/";
  }
  console.log(username);
  console.log("repo", repo);
  console.log(structure);
  console.log("https://api.github.com/repos" + structure);
  getRepo(username, repo, structure, (error, result) => {
    if (error) {
      // return res.render("error", {
      //   error: error.code,
      //   errno: error.errno,
      // });
      // console.log
      res.send(error);
    }
    // var content = JSON.parse(result.body);
    var content = result.body;
    content = JSON.parse(content);
    if (content[0] !== undefined && typeof content === "object") {
      // content = JSON.parse(content);

      res.render("directory");
    } else {
      res.send(typeof content);
    }
  });
});
app.post("/github/*", (req, res) => {
  var structure = req.originalUrl.substring(7);
  console.log(structure);
  console.log("https://api.github.com/repos" + structure);
  getRepo(structure, (error, result) => {
    if (error) {
      // return res.render("error", {
      //   error: error.code,
      //   errno: error.errno,
      // });
      // console.log
      res.send(error);
    }
    res.send(result);
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("server is up on port " + port);
});
