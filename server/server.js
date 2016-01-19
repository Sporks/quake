var express = require('express');
//var bodyParser = require('body-parser')
var request = require('request');
var apicache = require('apicache').options({ debug: true }).middleware;


var app = express();

// /////////////////////////////////////////////
// custom middlewear
// /////////////////////////////////////////////
var usgsController = require('./controllers/usgsController.js');

// /////////////////////////////////////////////
// global app tools
// /////////////////////////////////////////////
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());


// /////////////////////////////////////////////
// Routes
// /////////////////////////////////////////////a
app.get('/', apicache('5 minutes'), usgsController.getData, function (req, res) {

   res.send('Hello World!');
});



// /////////////////////////////////////////////
// get data from USGA
// /////////////////////////////////////////////



// /////////////////////////////////////////////
// Start server
// /////////////////////////////////////////////
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


module.exports = app;
