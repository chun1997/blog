const express = require("express");

const admin = express.Router();

admin.get("/login", (req, res) => {
  res.send("ok");
});

module.exports = admin;
