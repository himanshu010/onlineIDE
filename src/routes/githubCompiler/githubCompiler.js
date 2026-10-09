const express = require("express");
const getRepo = require("../../utils/getRepo");
const getCode = require("../../utils/getCode");
const getLang = require("../../utils/getLang");
const renderApp = require("../../utils/renderApp");

const router = express.Router();

router.get("/", (req, res) => renderApp(req, res, "github", { githubSignedIn: Boolean(req.cookies.auth) }));

const decode = (segment) => {
  try {
    return decodeURIComponent(segment);
  } catch (err) {
    return segment;
  }
};

// GitHub's error body ({ message, documentation_url }) when a raw file request fails.
const githubError = (body) => {
  if (typeof body !== "string" || !body.startsWith("{")) return null;
  try {
    const parsed = JSON.parse(body);
    return parsed && parsed.message && parsed.documentation_url ? parsed.message : null;
  } catch (err) {
    return null;
  }
};

function renderGithubError(req, res, message) {
  const rateExceeded = message.startsWith("API rate limit exceeded");
  if (rateExceeded) return renderApp(req, res, "error", { error: message, rateExceeded }, { status: 429 });
  if (message === "Not Found") {
    return renderApp(req, res, "error", { error: "There’s no public repository, folder or file at this address on GitHub." }, { status: 404 });
  }
  return renderApp(req, res, "error", { error: message }, { status: 502 });
}

// /github/<user>/<repo>/<path…>: a folder lists its contents, a file opens in the IDE.
async function browse(req, res) {
  const token = req.cookies.auth;
  const [username, repo, ...rest] = req.path.split("/").filter(Boolean);
  if (!username || !repo) return res.redirect("/github");
  // The parts go into a GitHub API URL, so they must stay a repository and a path inside it.
  if (!/^[A-Za-z0-9-]+$/.test(username) || !/^[A-Za-z0-9._-]+$/.test(repo) || rest.some((segment) => segment === "." || segment === "..")) {
    return renderApp(req, res, "notFound", {}, { status: 404 });
  }
  const structure = rest.map((segment) => `${segment}/`).join("");
  const path = rest.map(decode).join("/");
  const base = `/github/${username}/${repo}`;
  const avatar = `https://github.com/${encodeURIComponent(username)}.png`;
  try {
    const listing = await getRepo(username, repo, structure, token);
    if (Array.isArray(listing)) {
      const entries = listing
        .map((item) => ({
          name: item.name,
          type: item.type === "dir" ? "dir" : "file",
          href: `${base}/${item.path.split("/").map(encodeURIComponent).join("/")}`,
        }))
        .sort((a, b) => (a.type === b.type ? 0 : a.type === "dir" ? -1 : 1));
      return renderApp(
        req,
        res,
        "directory",
        { username: decode(username), repo: decode(repo), path, avatar, entries, githubSignedIn: Boolean(token) },
        { title: `${decode(repo)}${path ? `/${path}` : ""} · GitHub’s Compiler` }
      );
    }
    if (listing && listing.message) return renderGithubError(req, res, listing.message);

    const ext = listing.name.split(".").pop();
    const code = await getCode(username, repo, structure, token);
    const codeError = githubError(code);
    if (codeError) return renderGithubError(req, res, codeError);
    return renderApp(
      req,
      res,
      "ide",
      {
        code,
        language: getLang(ext),
        github: { username: decode(username), repo: decode(repo), path, avatar },
        isJava: ext === "java",
        runnable: Boolean(getLang(ext)),
        githubSignedIn: Boolean(token),
      },
      { title: `${listing.name} · OnlineIDE` }
    );
  } catch (error) {
    return renderApp(req, res, "error", { error: error.message || "GitHub could not be reached." }, { status: 502 });
  }
}

router.get("/*", browse);
router.post("/*", browse);

module.exports = router;
