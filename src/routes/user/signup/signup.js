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

    let signup = false;
    let forgotPassword = false;
    if (req.body.signup) {
      signup = true;
    } else {
      forgotPassword = true;
    }

    if (filled == unVerUser.otp) {
      res.render("afterOtp", {
        email,
        isCorrect: true,
        forgotPassword,
        signup,
      });
    } else {
      res.render("afterOtp", {
        email,
        isCorrect: false,
        forgotPassword,
        signup,
      });
    }
  } catch (err) {
    res.redirect("/user/signup");
  }
});

module.exports = router;
