const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.clearCookie("logToken");
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

module.exports = router;
