const {
  getHomePage,
  getABC,
  getNamTrung,
  postCreatUser,
} = require("../controllers/homeController");

const express = require("express");
const router = express.Router();

// router.Method("./route", handler);

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/namtrung", getNamTrung);

router.post("/creat-user", postCreatUser);

module.exports = router;
