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

app.use("/", require("./routes/ide/ide"));
app.use("/github", require("./routes/githubCompiler/githubCompiler"));
app.use("/auth", require("./routes/githubAuth/auth"));
app.use("/user", require("./routes/user/user"));
app.use("/otp", require("./routes/otp/otp"));
app.use("/profile", require("./routes/profile/profile"));
app.use("/program", require("./routes/program/program"));

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("server is up on port " + port);
});
