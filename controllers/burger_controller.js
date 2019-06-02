//Set npm packages
var express = require("express");

// Import the model (cat.js) to use its database functions.
var cat = require("../models/burger.js");

//Set router to handle url trhough server
var router = express.Router();


// Export routes for server.js to use.
module.exports = router;
