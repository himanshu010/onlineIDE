const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  headline: {
    type: String,
  },
  college: {
    type: String,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
