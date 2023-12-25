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
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  // let { email, name, city } = req.body;

  console.log(
    "==== check ====",
    "email=",
    email,
    "name = ",
    name,
    "city=",
    city
  );

  connection.query(
    ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("created new user succeed !");
    }
  );
};

module.exports = {
  getHomePage,
  getABC,
  getNamTrung,
  postCreatUser,
};
