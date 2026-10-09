const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const renderApp = require("../../utils/renderApp");

const Program = require("../../../db/models/Program");

// A saved program opens in the IDE for anyone with its link (sharing is the point of the link).
router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return renderApp(req, res, "notFound", {}, { status: 404 });
  }
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return renderApp(req, res, "notFound", {}, { status: 404 });
    return renderApp(req, res, "ide", {
      code: program.description,
      language: program.language,
      stdin: program.input,
      program: { id: program.id, name: program.name },
    }, { title: `${program.name} · OnlineIDE` });
  } catch (err) {
    res.redirect("/");
  }
});

module.exports = router;
