// Cookies the browser never needs to read from script. `secure` follows the request, so it is set on
// Render (HTTPS behind its proxy, with `trust proxy` on) and not on a local http run.
const authCookie = (req, maxAge) => ({
  httpOnly: true,
  sameSite: "lax",
  secure: req.secure,
  ...(maxAge ? { maxAge } : {}),
});

// A same-site path to return to after GitHub sign-in; anything else falls back to /github.
const safeReturnPath = (value) =>
  typeof value === "string" && value.startsWith("/") && !value.startsWith("//") && !value.includes("\\")
    ? value
    : "/github";

module.exports = { authCookie, safeReturnPath };
