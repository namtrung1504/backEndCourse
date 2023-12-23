const {
  getHomePage,
  getABC,
  getNamTrung,
} = require("../controllers/homeController");

const express = require("express");
const router = express.Router();

// router.Method("./route", handler);

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/namtrung", getNamTrung);

module.exports = router;
