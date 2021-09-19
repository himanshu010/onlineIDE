const dotenv = require("dotenv");
dotenv.config({ path: "./config/dev.env" });

const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);
const sendMail = (email, subject, text) => {
  sgMail.send({
    to: email,
    from: process.env.SENDERMAIL,
    subject: subject,
    text: text,
  });
};

module.exports = sendMail;
