const crypto = require("crypto");
const express = require("express");
const axios = require("axios");

const { authCookie, safeReturnPath } = require("../../utils/cookies");

const router = express.Router();

const clientId = process.env.CLIENT_G_ID;
const clientSecret = process.env.CLIENT_G_SECRET;
const TEN_MINUTES = 10 * 60 * 1000;

// The return path and the OAuth `state` live in short cookies of this visitor, not in module
// variables shared by everyone using the site at the same moment.
const startSignIn = (req, res) => {
  const state = crypto.randomBytes(16).toString("hex");
  res.cookie("oauthState", state, authCookie(req, TEN_MINUTES));
  res.cookie("oauthReturn", safeReturnPath(req.query.parent_url), authCookie(req, TEN_MINUTES));
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(clientId)}&state=${state}`
  );
};

router.get("/", startSignIn);
router.post("/", startSignIn);

router.get("/oauth-callback", (req, res) => {
  const returnTo = safeReturnPath(req.cookies.oauthReturn);
  const expectedState = req.cookies.oauthState;
  res.clearCookie("oauthState");
  res.clearCookie("oauthReturn");
  if (!expectedState || req.query.state !== expectedState) {
    return res.render("error", { error: "GitHub sign-in expired. Please try again." });
  }
  const body = {
    client_id: clientId,
    client_secret: clientSecret,
    code: req.query.code,
  };
  const opts = { headers: { accept: "application/json" } };
  axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((response) => response.data["access_token"])
    .then((token) => {
      if (!token) throw new Error("GitHub did not return a token");
      res.cookie("authPop", "authPop");
      res.cookie("auth", token, authCookie(req));
      return res.redirect(returnTo);
    })
    .catch((err) => res.render("error", { error: err.message }));
});

module.exports = router;
