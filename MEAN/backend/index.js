const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./router");
const connectDB = require("./config/db");
const app = express();

app.use(cors());
app.use("/api", router);
const PORT =  process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server running");
  });
});
