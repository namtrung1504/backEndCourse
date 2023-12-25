const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  // console.log('====> check results :',results)
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getNamTrung = (req, res) => {
  // res.send("<h1> Namtrungdzai </h1>");
  res.render("sample.ejs");
};

const postCreatUser = async (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;

  let { email, name, city } = req.body;

  console.log(
    "==== check ====",
    "email=",
    email,
    "name = ",
    name,
    "city=",
    city
  );

  let [results, fields] = await connection.query(
    ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  console.log("------- check results:", results);
  res.send("Created user succeed !!!");

  // ------ simple query to test ---------
  // connection.query("SELECT * FROM Users", function (err, results, fields) {
  //   console.log("----- results -----", results); // results contains rows returned by server
  //   // console.log("----- fields -----", fields); // fields contains extra meta data about results, if available
  // });

  // ------- async await function -----------
  // const [results, fields] = await connection.query("SELECT * FROM Users");
};

const getCreatPage = (req, res) => {
  res.render("creatUser.ejs");
};

const getUpdatePage = (req, res) => {
  res.render("editUser.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getNamTrung,
  postCreatUser,
  getCreatPage,
  getUpdatePage,
};
