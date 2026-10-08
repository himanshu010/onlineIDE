const jwt = require("jsonwebtoken");

// Proof that an email's OTP was entered correctly, carried from the OTP check to the step it
// unlocks (creating the account, or setting a new password). Without it those steps would trust
// whatever email the request names.
const AUDIENCE = "otp";

function signOtpToken(email, purpose) {
  return jwt.sign({ email, purpose }, process.env.JWTSECRET, { audience: AUDIENCE, expiresIn: "15m" });
}

function verifyOtpToken(token, email, purpose) {
  if (!token || !email) return false;
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET, { audience: AUDIENCE });
    return decoded.email === email && decoded.purpose === purpose;
  } catch (err) {
    return false;
  }
}

module.exports = { signOtpToken, verifyOtpToken };
