// import express from "express"; //es modules khong dung trong course này
require("dotenv").config();
const express = require("express"); //commonjs
const { render } = require("express/lib/response");

const app = express(); // app express
const port = process.env.PORT || 3002; // port --> hardcode key word:UAT
const hostname = process.env.HOST_NAME;

const webRoutes = require("./routes/web");
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/database");

// config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);

//test connection || creat connection to database

// simple query
// connection.query("SELECT * FROM Users", function (err, results, fields) {
//   console.log("----- results -----", results); // results contains rows returned by server
//   // console.log("----- fields -----", fields); // fields contains extra meta data about results, if available
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
