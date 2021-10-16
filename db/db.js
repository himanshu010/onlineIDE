const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/dev.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    // process.exit(1);
  }
};

module.exports = connectDB;
