const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
// const { protect, admin } = require("../middleware/authMiddleware");
const projectValidation = require("../middleware/projectValidator");

router
  .route("/")
  .get(projectValidation, projectController.getProjects)
  .post(projectValidation, projectController.new);

router
  .route("/:project_id")
  .get(projectController.view)
  .put(projectController.update)
  .delete(projectController.delete);

module.exports = router;
