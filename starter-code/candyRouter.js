const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var candies = [
{id: 1, name: "Chewing Gum", color: "Red"},
{id: 2, name: "Pez", color: "Green"},
{id: 3, name: "Marshmallow", color: "Pink"},
{id: 4, name: "Candy Stick", color: "Blue"}
];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	res.json(candies);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

// Fill out the rest of the routes here

router.get('/:id', function(req,res) {
	//show
	res.send(candies[req.params.id - 1 ]);
});

router.get('/new', function(req, res) {
	//new
});

router.post('/', function(req,res) {
	//create
	candies.push(req.body);
	res.send(req.body);
});

router.get('/:id/edit', function(req,res) {
	//edit
});

router.put('/:id', function(req,res) {
	//updates
	candies[req.params.id - 1 ] = req.body;
	res.send(req.body);

});

router.delete('/:id', function(req,res) {
	//delete
	candies.splice(req.params.id-1,1);
	res.send({"message":"deleted"});

});

module.exports = router;