const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const renderApp = require("./utils/renderApp");

//Connect Database
const connectDB = require("../db/db");
connectDB();

const app = express();
const port = process.env.PORT || 3000;
// Render terminates HTTPS in front of the app; this lets req.secure and req.protocol see it.
app.set("trust proxy", 1);

const publicDirectoryPath = path.join(__dirname, "../public");

// One Handlebars view, the shell every React page is rendered into (src/utils/renderApp.js).
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));

app.use(compression());
// The client build's files have content hashes in their names, so they can be cached for good.
app.use("/build", express.static(path.join(publicDirectoryPath, "build"), { immutable: true, maxAge: "1y" }));
app.use(express.static(publicDirectoryPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "200kb" }));
app.use(cookieParser());
app.use(multer({ dest: "./uploads/" }).single("photo"));

app.use("/api", require("./routes/api/api"));
app.use("/", require("./routes/ide/ide"));
app.use("/github", require("./routes/githubCompiler/githubCompiler"));
app.use("/auth", require("./routes/githubAuth/auth"));
app.use("/user", require("./routes/user/user"));
app.use("/otp", require("./routes/otp/otp"));
app.use("/profile", require("./routes/profile/profile"));
app.use("/program", require("./routes/program/program"));

app.get("*", (req, res) => renderApp(req, res, "notFound", {}, { status: 404 }));

// HOST is unset on Render (listen on every interface); local runs set 127.0.0.1.
app.listen(port, process.env.HOST, () => {
  console.log("server is up on port " + port);
});
