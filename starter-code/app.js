//Did you use npm install to
//add all these packages
//to our project?
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
// How do we 'require' the candyRouter file?
const candyRouter = require('./candyRouter.js');

app.use(bodyParser.json());
app.use('/candies',candyRouter);
//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use

app.listen(port);