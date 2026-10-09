const express = require("express");
const renderApp = require("../../../utils/renderApp");
const router = express.Router();

router.get("/", async (req, res) => {
  return renderApp(req, res, "forgotPassword", { msg: req.query.msg });
});

module.exports = router;
