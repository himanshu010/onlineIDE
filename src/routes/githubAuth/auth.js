const express = require("express");
const axios = require("axios");

const router = express.Router();

let token = null;
let parent_url = "/";
const clientId = process.env.CLIENT_G_ID;
const clientSecret = process.env.CLIENT_G_SECRET;

router.get("/", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?&client_id=${clientId}`
  );

  parent_url = req.query.parent_url;
});

router.post("/", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?&client_id=${clientId}`
  );
  parent_url = req.query.parent_url;
});

router.get("/oauth-callback", (req, res) => {
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
      res.cookie("authPop", "authPop");
      token = _token;
      res.cookie("auth", token);
      if (parent_url) {
        return res.redirect(parent_url);
      }
      return res.redirect("/github");
    })
    .catch((err) => res.render("error", { error: err.message }));
});

module.exports = router;
