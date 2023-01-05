const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");

const connectDB = require("./config/database");
require("dotenv").config();

connectDB();
// MIDDLEWARE
app.set("view engine", "ejs");
app.set(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
