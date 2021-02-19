const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const { protect, admin } = require("../middleware/authMiddleware");
const inputValidator = require("../middleware/userValidator");



router.route("/register").post(inputValidator, userController.new);

router.route("/login").post(inputValidator, userController.login);

module.exports = router;
