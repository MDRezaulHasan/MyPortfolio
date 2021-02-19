const { check } = require("express-validator");

const projectValidation = [
  check("title", "Title is required!").not().isEmpty().bail(),
  check("descriptions", "descriptions is rreequired").not().isEmpty().bail(),
  check("image", "image is required!").not().isEmpty().bail(),
];

module.exports = projectValidation;
