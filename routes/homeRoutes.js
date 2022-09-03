const express = require("express");
const routes = express.Router();
const controller = require("../controllers/homeController");

routes.get("/", controller.home);

module.exports = routes;
