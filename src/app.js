const axios = require("axios");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const express = require("express");
const dotenv = require("dotenv");
const hbs = require("hbs");
const output = require("./utils/output");
const getRepo = require("./utils/getRepo");
const getCode = require("./utils/getCode");
const getLang = require("./utils/getLang");
const sendMail = require("./utils/sendMail");
const multer = require("multer");
// const getUserName = require("./utils/getUserName");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { type } = require("os");
const auth = require("../middleware/auth");
const randomize = require("randomatic");
let authPop = "noPop";

//Connect Database
const connectDB = require("../db/db");
const User = require("../db/models/User");
const Program = require("../db/models/Program");
const Unverified = require("../db/models/Unverified");
connectDB();

dotenv.config({ path: "./config/dev.env" });

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
app.use(multer({ dest: "./uploads/" }).single("photo"));

let token = null;
let parent_url = "/";
const clientId = process.env.CLIENT_G_ID;
const clientSecret = process.env.CLIENT_G_SECRET;

app.get("/user/login", async (req, res) => {
  const msg = req.query.msg;
  res.render("login", { msg });
});

app.post("/profile/update", async (req, res) => {
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
          path.join(__dirname + "/../uploads/" + req.file.filename)
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
    let user = await User.findByIdAndUpdate(decoded.user.id, newUser, {
      new: true,
    }).select("-password");
    if (req.file) {
      await promisify(fs.unlink)(req.file.path);
    }
    res.redirect("/user/profile");
  } catch (err) {
    res.render("login");
  }
});

app.post("/user/login/verify", async (req, res) => {
  const { email, password } = req.body;
  try {
    //See if user exists
    let user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      return res.redirect("/user/login/?msg=Invalid Credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400);
      return res.redirect("/user/login/?msg=Invalid Credentials");
    }

    //return jwt token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.cookie("logToken", token);
        res.redirect("/user/profile");
      }
    );
  } catch (err) {
    res.status(500).send("server error");
  }
});

app.get("/user/profile", async (req, res) => {
  let pic;
  try {
    const logToken = req.cookies["logToken"];
    const decoded = jwt.verify(logToken, process.env.JWTSECRET);
    const user = await User.findById(decoded.user.id).select("-password");
    if (!user) {
      return res.render(signUp);
    }
    if (user) {
      isLogin = true;
    }

    if (user.photo.data)
      pic = new Buffer.from(user.photo.data).toString("base64");
    res.render("profile", {
      isLogin,
      user,
      pic,
    });
  } catch (err) {
    res.render("signUp");
  }
});

app.get("/user/edit", async (req, res) => {
  let pic;
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
    res.render("editProfile", {
      isLogin,
      user,
      pic,
    });
  } catch (err) {
    console.error(err);
    return res.render("index");
  }
});

app.get("/user/programs", async (req, res) => {
  let pic;
  isLogin = false;
  try {
    const logToken = req.cookies["logToken"];
    const decoded = jwt.verify(logToken, process.env.JWTSECRET);
    const user = await User.findById(decoded.user.id).select("-password");
    if (!user) {
      return res.render(signUp);
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
    res.render("signUp");
  }
});

// app.post("/program/:id", async (req, res) => {
//   // try {
//   //   const result = await output(
//   //     req.body.description,
//   //     req.body["select-language"],
//   //     req.body.input
//   //   );
//   //   var isError = false;
//   //   if (result.body.memory == null && result.body.cpuTime == null) {
//   //     isError = true;
//   //   }
//   //   const program = await Program.findById(req.params.id);
//   //   res.render("index", {
//   //     description: program.description,
//   //     theme: req.body["select-theme"],
//   //     lang: program["select-language"],
//   //     stdin: program.input,
//   //     postUrl: "/program/" + "req.params.id",
//   //     // stdout: result.body.output,
//   //     // msg: "Compiled",
//   //     // time: result.body.cpuTime,
//   //     // memory: result.body.memory,
//   //     // isError,
//   //     // parentURL: parentURL,
//   //   });
//   // } catch (err) {
//   //   res.send("Server Error");
//   // }
//   res.send("got");
// });

app.get("/program/:id", async (req, res) => {
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

// app.post("/save/program", async (req, res) => {
//   try {
//     const logToken = req.cookies["logToken"];
//     const decoded = jwt.verify(logToken, process.env.JWTSECRET);
//     const user = await User.findById(decoded.user.id);
//     if (!user) {
//       return res.render(signUp);
//     }
//     const newProgram = new Program({
//       description: req.body.description,
//       name: req.body.name,
//       input: req.body.input,
//       user: decoded.user.id,
//       lang: req.body["select-language"],
//     });
//     await newProgram.save();
//     res.send(newProgram);
//   } catch (err) {
//     res.redirect("/user/login");
//   }
// });

app.get("", async (req, res) => {
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

app.post("", async (req, res) => {
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

app.get("/user/signup", async (req, res) => {
  const msg = req.query.msg;
  res.render("signUp", { msg });
});

app.get("/user/logout", async (req, res) => {
  try {
    res.clearCookie("logToken");
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

app.post("/user/email/verify", async (req, res) => {
  const otp = randomize("0", 4);
  let { firstName, lastName, email, password } = req.body;

  const isSignUp = req.body.isSignUp;
  const isForgotPassword = req.body.isForgotPassword;
  try {
    if (isSignUp) {
      try {
        let user = await User.findOne({ email }).select("-password");
        let unVerUser = await Unverified.findOne({ email }).select("-password");
        if (user) {
          res.status(400);
          res.redirect("/user/signup/?msg=User already exists");
        }
        if (!unVerUser) {
          unVerUser = new Unverified({
            firstName,
            lastName,
            email,
            password,
            otp,
          });
          const salt = await bcrypt.genSalt(10);
          unVerUser.password = await bcrypt.hash(password, salt);
          unVerUser.save();
        } else {
          const salt = await bcrypt.genSalt(10);
          password = await bcrypt.hash(password, salt);
          let newUnVerUser = await Unverified.findOneAndUpdate(
            { email },
            { firstName, lastName, password, otp },
            {
              new: true,
            }
          );
        }
        const subject =
          "[OnlineIde] Otp for registration is : " + unVerUser.otp;
        const text = "Your OTP for registeration is " + unVerUser.otp;
        sendMail(unVerUser.email, subject, text);
        res.render("verify", {
          email: unVerUser.email,
          msg: "OTP sent to your mail",
        });
      } catch (err) {}
    } else if (isForgotPassword) {
    }
  } catch (err) {
    if (isSignUp) {
      res.redirect("/user/signup");
    } else if (isForgotPassword) {
      res.redirect("/user/login");
    }
  }
});

app.post("/user/signup/check", async (req, res) => {
  try {
    const { digit1, digit2, digit3, digit4, email } = req.body;
    const filled = digit1 + digit2 + digit3 + digit4;
    const unVerUser = await Unverified.findOne({ email });
    if (filled == unVerUser.otp) {
      res.render("afterOtp", { email, isCorrect: true });
    } else {
      res.render("afterOtp", { email, isCorrect: false });
    }
  } catch (err) {
    res.redirect("/user/signup");
  }
});

app.post("/otp/resend", async (req, res) => {
  const { email, msg } = req.body;
  try {
    let unVerUser = await Unverified.findOne({ email });
    if (!unVerUser) {
      res.redirect("/user/signup");
    }
    const otp = randomize("0", 4);
    unVerUser.otp = otp;
    await unVerUser.save();
    const subject = "[OnlineIde] Otp for registration is : " + otp;
    const text = "Your OTP for registeration is " + otp;
    sendMail(email, subject, text);
    res.render("verify", { email, msg });
  } catch (err) {
    res.redirect("/user/signup");
  }
});

app.post("/user/register", async (req, res) => {
  const { email } = req.body;
  try {
    //See if user exists
    let unVerUser = await User.findOne({ email }).select("-password");
    if (unVerUser) {
      res.status(400);
      res.redirect("/user/signup/?msg=User already exists");
    }
    unVerUser = await Unverified.findOne({ email });
    let user = new User({
      firstName: unVerUser.firstName,
      lastName: unVerUser.lastName,
      email,
      password: unVerUser.password,
    });
    await user.save();

    //return jwt token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.cookie("logToken", token);
        res.redirect("/user/profile");
      }
    );
  } catch (err) {
    res.status(500).send("server error");
  }
});

app.get("/github", async (req, res) => {
  var info = await getCode(token);
  res.render("githubRepoCode", { authPop });
  if (authPop === "authPop") {
    authPop = "noPop";
  }
});

function eventSorter(a, b) {
  return a.isDir > b.isDir ? -1 : 1;
}

app.get("/github/*", async (req, res) => {
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
      const showRunButtons = true;
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
        isLogin,
        pic,
        showRunButtons,
        user,
      });
    }
    if (authPop === "authPop") {
      authPop = "noPop";
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
      });
    }
    if (authPop === "authPop") {
      authPop = "noPop";
    }
  } catch (error) {
    res.render("error", { error });
  }
});

app.get("/auth", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?&client_id=${clientId}`
  );

  parent_url = req.query.parent_url;
});

app.post("/auth", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?&client_id=${clientId}`
  );
  parent_url = req.query.parent_url;
});

app.get("/auth/oauth-callback", (req, res) => {
  console.log("xxxx");
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
      authPop = "authPop";
      token = _token;
      res.cookie("auth", token);
      console.log(parent_url);
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
