const mongoose = require("mongoose");

async function connectDB() {
  try {
    mongoose.connect(process.env.MOGODB_URI);
    console.log("connect to mongo db")
  } catch (error) {
    console.log(error);
  }
}


module.exports = connectDB