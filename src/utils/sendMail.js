const dotenv = require("dotenv");
dotenv.config({ path: "./config/dev.env" });

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Test stand-in for SendGrid's API; unset in production. Set after setApiKey, which resets it.
if (process.env.SENDGRID_API_URL) sgMail.client.setDefaultRequest("baseUrl", process.env.SENDGRID_API_URL);

// Checked once at start, so the server log says whether the code emails can go out before anyone
// signs up.
const missing = ["SENDGRID_API_KEY", "SENDERMAIL"].filter((name) => !process.env[name]);
if (missing.length) {
  console.error(`Email: ${missing.join(" and ")} not set; sign-up and password-reset emails will fail.`);
} else {
  sgMail.client.request({ method: "GET", url: "/v3/scopes" }).then(
    ([, body]) =>
      console.log(
        (body.scopes || []).includes("mail.send")
          ? `Email: SendGrid accepted the API key; sending as ${process.env.SENDERMAIL}.`
          : "Email: SendGrid accepted the API key, but it lacks the Mail Send permission."
      ),
    (error) => console.error("Email: SendGrid refused the API key:", error.response ? JSON.stringify(error.response.body) : error.message)
  );
}

// Resolves to whether SendGrid accepted the email, so callers can tell the visitor when it didn't.
const sendMail = async (email, subject, text) => {
  try {
    await sgMail.send({
      to: email,
      from: process.env.SENDERMAIL,
      subject: subject,
      text: text,
    });
    return true;
  } catch (error) {
    console.error("Email not sent:", error.response ? JSON.stringify(error.response.body) : error.message);
    return false;
  }
};

// The 4-digit code emails, for sign-up ("signup") and password reset ("forgot-password").
sendMail.code = (email, otp, purpose) =>
  purpose === "signup"
    ? sendMail(email, `[OnlineIde] Your sign-up code is ${otp}`, `Your OnlineIde sign-up code is ${otp}.`)
    : sendMail(
        email,
        `[OnlineIde] Your password reset code is ${otp}`,
        `Someone asked to reset the password of your OnlineIde account. Your code is ${otp}. If that wasn't you, ignore this email.`
      );

sendMail.failedMessage = "We couldn't send the email. Check the address and try again in a minute.";

module.exports = sendMail;
