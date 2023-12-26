const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

const getUserByID = async (userID) => {
  let [results, fields] = await connection.query(
    ` select * from Users where id = ? `,
    [userID]
  );
  // console.log("----check", results);
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

module.exports = {
  getAllUsers,
  getUserByID,
};
