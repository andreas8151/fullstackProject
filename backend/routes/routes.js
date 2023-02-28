const express = require("express");
const routes = express.Router();

const { login } = require("../controllers/login");
const { register } = require("../controllers/register");

routes.post("/login", login);
routes.post("/register", register);

module.exports = { routes };
