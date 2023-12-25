const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getNamTrung = (req, res) => {
  // res.send("<h1> Namtrungdzai </h1>");
  res.render("sample.ejs");
};

const postCreatUser = (req, res) => {
  console.log("=== req.body ===", req.body);
  res.send("created");
};

module.exports = {
  getHomePage,
  getABC,
  getNamTrung,
  postCreatUser,
};
