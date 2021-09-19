const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  description: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  input: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = Program = mongoose.model("program", ProgramSchema);
