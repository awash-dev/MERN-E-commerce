const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      Type: String,
      unique: true,
      required: true,
    },
    password: String,
    profile: String,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
