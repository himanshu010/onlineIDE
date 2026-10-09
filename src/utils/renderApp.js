const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const User = require("../../db/models/User");

// Every page is the React client (client/, built to public/build): this renders the HTML shell with
// the built files from Vite's manifest and the page's props as JSON.
const manifestPath = path.join(__dirname, "../../public/build/.vite/manifest.json");
let cachedAssets;

// Each page's chunk in the client build (client/src/main.tsx loads them lazily). Preloading them saves
// the round trips the browser would otherwise wait for.
const pageModules = {
  ide: ["src/pages/Ide.tsx"],
  github: ["src/pages/Github.tsx"],
  directory: ["src/pages/Directory.tsx"],
  login: ["src/pages/auth/Login.tsx"],
  signup: ["src/pages/auth/Signup.tsx"],
  forgotPassword: ["src/pages/auth/ForgotPassword.tsx"],
  verify: ["src/pages/auth/Verify.tsx"],
  afterOtp: ["src/pages/auth/AfterOtp.tsx"],
  changePassword: ["src/pages/auth/ChangePassword.tsx"],
  profile: ["src/pages/account/Profile.tsx"],
  editProfile: ["src/pages/account/EditProfile.tsx"],
  savedPrograms: ["src/pages/account/SavedPrograms.tsx"],
  error: ["src/pages/Error.tsx"],
  notFound: ["src/pages/NotFound.tsx"],
};

function chunkFiles(manifest, keys, seen = new Set()) {
  for (const key of keys) {
    if (seen.has(key) || !manifest[key]) continue;
    seen.add(key);
    chunkFiles(manifest, manifest[key].imports || [], seen);
  }
  return seen;
}

function assets() {
  if (cachedAssets && process.env.NODE_ENV === "production") return cachedAssets;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const entry = manifest["src/main.tsx"];
  const shared = chunkFiles(manifest, ["src/main.tsx"]);
  const pages = {};
  for (const [page, keys] of Object.entries(pageModules)) {
    pages[page] = [...chunkFiles(manifest, keys)].filter((key) => !shared.has(key)).map((key) => `/build/${manifest[key].file}`);
  }
  cachedAssets = {
    js: `/build/${entry.file}`,
    css: (entry.css || []).map((file) => `/build/${file}`),
    preload: [...shared].filter((key) => key !== "src/main.tsx").map((key) => `/build/${manifest[key].file}`),
    pages,
    // The UI and code fonts, so text is set in them on first paint instead of reflowing later.
    fonts: (entry.assets || []).filter((file) => /(ibm-plex-sans-latin-(400|500|600)|jetbrains-mono-latin-wght)-normal-.*\.woff2$/.test(file)).map((file) => `/build/${file}`),
  };
  return cachedAssets;
}

// JSON inside <script> must not be able to close the tag or break the line.
const safeJson = (value) =>
  JSON.stringify(value).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");

const toSession = (user) => {
  if (!user) return null;
  const photo =
    user.photo && user.photo.data && user.photo.data.length
      ? `data:${user.photo.contentType || "image/png"};base64,${Buffer.from(user.photo.data).toString("base64")}`
      : null;
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    headline: user.headline || "",
    college: user.college || "",
    photo,
  };
};

async function sessionFor(req, user) {
  if (user) return toSession(user);
  const token = req.cookies && req.cookies.logToken;
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    return toSession(await User.findById(decoded.user.id).select("-password"));
  } catch (err) {
    return null;
  }
}

const titles = {
  ide: "OnlineIDE",
  github: "GitHub’s Compiler · OnlineIDE",
  directory: "GitHub’s Compiler · OnlineIDE",
  login: "Log in · OnlineIDE",
  signup: "Sign up · OnlineIDE",
  forgotPassword: "Reset your password · OnlineIDE",
  verify: "Check your email · OnlineIDE",
  afterOtp: "Checking your code · OnlineIDE",
  changePassword: "Choose a new password · OnlineIDE",
  profile: "Profile · OnlineIDE",
  editProfile: "Edit profile · OnlineIDE",
  savedPrograms: "Saved programs · OnlineIDE",
  error: "Something went wrong · OnlineIDE",
  notFound: "Page not found · OnlineIDE",
};

const description =
  "Write, run and share C, C++, Python, Java, PHP and Ruby in the browser, or open any file from a GitHub repository and run it.";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {keyof typeof titles} page
 * @param {object} props what the page's React component receives
 * @param {{ status?: number, title?: string, user?: object }} options `user`: a user document the route already loaded
 */
async function renderApp(req, res, page, props = {}, options = {}) {
  const session = await sessionFor(req, options.user);
  let flash;
  if (req.cookies && req.cookies.authPop === "authPop") {
    flash = "github-signed-in";
    res.cookie("authPop", "noPop");
  }
  const { js, css, preload: shared, pages, fonts } = assets();
  const preload = [...shared, ...(pages[page] || [])];
  res.status(options.status || 200).render("app", {
    title: options.title || titles[page] || "OnlineIDE",
    description,
    js,
    css,
    preload,
    fonts,
    data: safeJson({ page, props, session, flash }),
  });
}

module.exports = renderApp;
