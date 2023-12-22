const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Express hihi");
});

router.get("/abc", (req, res) => {
  res.send("check ABC");
});

router.get("/namtrung", (req, res) => {
  // res.send("<h1> Namtrungdzai </h1>");
  res.render("sample.ejs");
});

module.exports = router;
