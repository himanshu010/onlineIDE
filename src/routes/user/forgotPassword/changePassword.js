const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const email = req.body.email;
  return res.render("changePassword", { email });
});

module.exports = router;
