const mongoose = require("mongoose");
const UnverifiedSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Unverified = mongoose.model("unverified", UnverifiedSchema);
