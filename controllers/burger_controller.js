//Set npm packages
var express = require("express");



// Import the model (burger.js) to use its database functions.
var model = require("../models/burger.js");

//Set router to handle url trhough server
var router = express.Router();

// All the routes and set up logic within those routes where required.
//Get all de burgers
router.get("/", function (req, res) {
    model.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
//Create a new burger
router.post("/api/burgers", function (req, res) {
	console.log(req.body)
	model.create([
		"burger_name",
	], [
			req.body.burger_name,
		], function (result) {
			// Send back the ID of the new quote
			res.json({ id: result.insertId });
		});
});
//Change burger status, devoured or not.
router.put("/api/burgers/:id", function (req, res) {
	console.log(req.params.id)
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

   model.update({
        devoured: req.body.devoured
    },
        condition, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});


// Export routes for server.js to use.
module.exports = router;
