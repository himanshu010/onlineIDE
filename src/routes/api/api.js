const express = require("express");
const jwt = require("jsonwebtoken");

const output = require("../../utils/output");
const Program = require("../../../db/models/Program");

const router = express.Router();

// JDoodle language ids the IDE offers (client/src/lib/languages.ts).
const LANGUAGES = new Set(["cpp17", "cpp14", "cpp", "c", "python3", "python2", "java", "php", "ruby"]);
const MAX_SCRIPT = 64 * 1024;
const MAX_STDIN = 32 * 1024;

// Each run spends a JDoodle credit, so one visitor gets at most 30 runs in 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const RUNS_PER_WINDOW = 30;
const runs = new Map();
function allowRun(ip) {
  const now = Date.now();
  const recent = (runs.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= RUNS_PER_WINDOW) {
    runs.set(ip, recent);
    return false;
  }
  recent.push(now);
  runs.set(ip, recent);
  if (runs.size > 5000) runs.delete(runs.keys().next().value);
  return true;
}

const text = (value) => (typeof value === "string" ? value : "");

router.post("/run", async (req, res) => {
  const language = text(req.body.language);
  const script = text(req.body.script);
  const stdin = text(req.body.stdin);
  if (!LANGUAGES.has(language)) return res.status(400).json({ error: "Pick one of the languages in the list." });
  if (!script.trim()) return res.status(400).json({ error: "There is no code to run." });
  if (script.length > MAX_SCRIPT || stdin.length > MAX_STDIN) return res.status(413).json({ error: "The code or the input is too long (64 KB of code and 32 KB of input at most)." });
  if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) return res.status(503).json({ error: "The code runner is not set up on this server." });
  if (!allowRun(req.ip)) return res.status(429).json({ error: "That’s a lot of runs. Wait a few minutes and try again." });

  try {
    const result = await output(script, language, stdin);
    const body = result.body || {};
    if (result.statusCode === 429) return res.status(503).json({ error: "The code runner is busy or out of runs right now. Please try again later." });
    if (result.statusCode && result.statusCode >= 400) return res.status(502).json({ error: body.error || "The code runner refused the request." });
    res.json({
      output: typeof body.output === "string" ? body.output : "",
      cpuTime: body.cpuTime == null ? null : String(body.cpuTime),
      memory: body.memory == null ? null : String(body.memory),
      // Matches the old page: JDoodle reports no time and memory when the program did not run.
      isError: body.memory == null && body.cpuTime == null,
    });
  } catch (err) {
    res.status(502).json({ error: "The code runner could not be reached. Please try again." });
  }
});

router.post("/programs", async (req, res) => {
  let userId;
  try {
    userId = jwt.verify(req.cookies.logToken, process.env.JWTSECRET).user.id;
  } catch (err) {
    return res.status(401).json({ error: "Log in to save programs." });
  }
  const name = text(req.body.name).trim().slice(0, 120);
  const language = text(req.body.language);
  const script = text(req.body.script);
  const stdin = text(req.body.stdin);
  if (!name) return res.status(400).json({ error: "Give the program a name." });
  if (!LANGUAGES.has(language)) return res.status(400).json({ error: "Pick one of the languages in the list." });
  if (!script.trim()) return res.status(400).json({ error: "There is no code to save." });
  if (script.length > MAX_SCRIPT || stdin.length > MAX_STDIN) return res.status(413).json({ error: "The code or the input is too long to save." });
  try {
    const program = await new Program({ name, language, description: script, input: stdin, user: userId, date: new Date() }).save();
    res.status(201).json({ id: program.id, url: `/program/${program.id}` });
  } catch (err) {
    res.status(500).json({ error: "The program could not be saved. Please try again." });
  }
});

module.exports = router;
