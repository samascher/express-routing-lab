const express = require('express');
const bodyParser = require('body-parser');
router = express.Router();
const candies;

//What would need to go into candies
//in order to pass our first test?

//INDEX
router.get('/', function(req,res) {
	res.send('You made a GET request to the / path AKA the INDEX motherfucker');
});

//NEW
router.get('/new', function(req,res) {
	res.send('You made a GET request to the /new path...aka NEW');
});

//EDIT
router.get('/:id/edit', function(req,res) {
	res.send('You made a GET resquest to the /:id/edit path aka the EDIT');
});

//SHOW
router.get('/:id', function(req, res) {
	res.send('You made a GET request to the /:id path aka SHOW');
});

//CREATE
router.post('/', function(req, rest){
	res.send('You made a POST reuqest to the / path aka CREATE');
});

//UPDATE
router.put('/:id', function(req, res){
	res.send('You made teh PUT request in the /:id path ... aka UPDATE motherfucker!!');
});

//DESTROY
router.delete('/:id', function(req, res) {
	res.send('You made a delete request to the /:id path AKA destroy!!!!');
});

module.exports = router;