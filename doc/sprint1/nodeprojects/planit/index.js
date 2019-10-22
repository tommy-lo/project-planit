// Import what requires we need.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Below imports our db.js file.
const { mongoose } = require('./db.js');
var distanceController = require('./controllers/distancecontroller.js');
var userController = require('./controllers/userrouter.js');
// Call express function.
var app = express();
app.use(bodyParser.json());
// For connecting angular to nodejs
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(3000, () => console.log('Server started on port 3000'));

app.use(express.static('public'))

app.use('/distances',  distanceController);
app.use('/users',  userController);
