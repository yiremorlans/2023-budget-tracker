const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");

// MIDDLEWARE
app.set("view engine", "ejs");
app.set(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT || process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
