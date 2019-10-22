const express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var { User } = require('../models/User');

// => localhost:3000/users/addUser
router.post("/addUser", function (req, res) {
	console.log("adding user " + req.body.username);
	var newuser = new User({ name: req.body.username, password: req.body.password });
	newuser.save(function (err, doc) {
        if (!err) {res.send(doc);}
        else { console.log('Error in adding user : ' + JSON.stringify(err, undefined, 2));}
    })
})
module.exports = router;