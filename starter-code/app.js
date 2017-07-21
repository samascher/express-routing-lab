//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

// How do we 'require' the candyRouter file?

var require = require('/candyRouter');

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./controllers'));

app.listen(3000);