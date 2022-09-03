const express = require("express");
const routes = express.Router();
const ApiController = require("../controllers/apiController");

routes.get("/", ApiController.get);
routes.get("/:id", ApiController.getById);

module.exports = routes;
