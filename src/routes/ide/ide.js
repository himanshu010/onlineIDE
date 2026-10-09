const express = require("express");
const output = require("../../utils/output");
const jwt = require("jsonwebtoken");
const renderApp = require("../../utils/renderApp");

const User = require("../../../db/models/User");
const Program = require("../../../db/models/Program");

const router = express.Router();

async function currentUser(req) {
  const logToken = req.cookies["logToken"];
  if (!logToken) return null;
  try {
    const decoded = jwt.verify(logToken, process.env.JWTSECRET);
    return { id: decoded.user.id, doc: await User.findById(decoded.user.id).select("-password") };
  } catch (err) {
    return null;
  }
}

router.get("/", async (req, res) => {
  const user = await currentUser(req);
  return renderApp(req, res, "ide", {}, { user: user && user.doc });
});

// The page posts here only without JavaScript (the client runs code through /api/run); kept so old
// links and form posts still work.
router.post("/", async (req, res) => {
  try {
    const user = await currentUser(req);
    const isSave = req.body.isSave;
    if (isSave) {
      if (!user) {
        return res.redirect("/user/signup");
      }
      await new Program({
        description: req.body.description,
        name: req.body.name,
        input: req.body.input,
        user: user.id,
        language: req.body["select-language"],
      }).save();
    }
    const result = await output(req.body.description, req.body["select-language"], req.body.input);
    const body = result.body || {};
    return renderApp(
      req,
      res,
      "ide",
      {
        code: req.body.description,
        language: req.body["select-language"],
        stdin: req.body.input,
        stdout: body.output,
        cpuTime: body.cpuTime == null ? null : String(body.cpuTime),
        memory: body.memory == null ? null : String(body.memory),
        isError: body.memory == null && body.cpuTime == null,
        saved: Boolean(isSave),
      },
      { user: user && user.doc }
    );
  } catch (error) {
    return renderApp(req, res, "error", { error: error.code, errno: error.errno });
  }
});

module.exports = router;
