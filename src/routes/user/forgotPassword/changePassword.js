const express = require("express");
const router = express.Router();

const { verifyOtpToken } = require("../../../utils/otpToken");

router.post("/", async (req, res) => {
  const { email, token } = req.body;
  if (!verifyOtpToken(token, email, "forgot-password")) {
    return res.redirect("/user/forgot-password");
  }
  return res.render("changePassword", { email, token });
});

module.exports = router;
