var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router); 

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use('/api', appRoutes);

app.listen(3000);
console.log("Server running on port 3000");