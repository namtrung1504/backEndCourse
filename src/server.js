// import express from "express"; //es modules khong dung trong course này
require("dotenv").config();
const express = require("express"); //commonjs
const { render } = require("express/lib/response");

const app = express(); // app express
const port = process.env.PORT || 3002; // port --> hardcode key word:UAT
const hostname = process.env.HOST_NAME;

const webRoutes = require("./routes/web");
const configViewEngine = require("./config/viewEngine");

// config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
