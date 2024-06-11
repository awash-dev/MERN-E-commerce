const userModel = require("../models/userModel");

const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;
    if (!email) {
      throw new Error("Email not found");
    }
    if (!password) {
      throw new Error("password not found");
    }
    if (!name) {
      throw new Error("name not found");
    }

    // =====password to hash====
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = await bcrypt.hashSync(password, salt);
    if (!hashpassword) {
      throw new Error("something is wrong!");
    }
    const payload = {
      ...req.body,
      password: hashpassword,
    };

    const userData = new userModel(payload);
    // ({
    //   email,
    //   password,
    //   name,
    // });
    // ==========user signup success=====
    const saveUser = userData.save();
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "user created successfully",
    });
  } catch (error) {
    res.json({
      message: error,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
