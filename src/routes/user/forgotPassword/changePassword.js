const express = require("express");
const router = express.Router();

const { verifyOtpToken } = require("../../../utils/otpToken");
const renderApp = require("../../../utils/renderApp");

router.post("/", async (req, res) => {
  const { email, token } = req.body;
  if (!verifyOtpToken(token, email, "forgot-password")) {
    return res.redirect("/user/forgot-password");
  }
  return renderApp(req, res, "changePassword", { email, token });
});

module.exports = router;
