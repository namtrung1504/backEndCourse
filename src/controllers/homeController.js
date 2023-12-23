const getHomePage = (req, res) => {
  //process data
  //call model
  res.send("Express hihi");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getNamTrung = (req, res) => {
  // res.send("<h1> Namtrungdzai </h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getNamTrung,
};
