const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const msg = req.query.msg;
  res.render("signUp", { msg });
});

router.post("/check", async (req, res) => {
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

module.exports = router;
