const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mailController");
// const { protect, admin } = require("../middleware/authMiddleware");


router
  .route("/")
  .get( mailController.getMails)
  .post( mailController.new);

module.exports = router;
