// import express from "express"; //es modules khong dung trong course này

const express = require("express"); //commonjs
const { render } = require("express/lib/response");
const path = require("path");
require("dotenv").config();

const app = express(); // app express
const port = process.env.PORT || 3002; // port --> hardcode key word:UAT
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//khai báo route
app.get("/", (req, res) => {
  res.send("Express hihi");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/namtrung", (req, res) => {
  // res.send("<h1> Namtrungdzai </h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
