const express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var { User } = require('../models/User');
var set = 1;

// => localhost:3000/users/addUser
router.post("/addUser", function (req, res) {
	console.log("adding user " + req.body.username);
	var newuser = new User({ name: req.body.username, password: req.body.password });
	newuser.save(function (err, doc) {
        if (!err) {res.send(doc);}
        else {
            res.send(doc); 
            console.log('Error in adding user : ' + JSON.stringify(err, undefined, 2));}
    })
})

router.post("/getUser", function (req, res) {
    console.log("getting user " + req.body.username);
    User.find({name: req.body.username, password: req.body.password}, function (err, doc) {
        if (!err) {
            res.send(doc);
            console.log(doc)
        }
        else { console.log('Error in getting user : ' + JSON.stringify(err, undefined, 2));}
    });
})

router.put("/updateMode", function(req,res) {
    console.log("updating user " + req.body.username + "to " + req.body.mode + "mode");
    User.find({name: req.body.username}, function (err, doc) {
        if (!err) {
            console.log(doc);
            doc[0].mode = req.body.mode;
            doc[0].save();
        }
        else {
            
             console.log('Error in updating user : ' + JSON.stringify(err, undefined, 2));}
    });
})

router.put("/updateItin", function(req,res) {
    console.log("updating user " + req.body.username);
    User.find({name: req.body.username}, function (err, doc) {
        console.log(doc);
        if (err) {
            console.log('Error in updating user : ' + JSON.stringify(err, undefined, 2));
        }
        if (doc.length){
            
            console.log("working on it");
            doc[0].display = req.body.display;
            doc[0].save();
            res.send(doc);
        } 
        else {
            res.send(doc);
         console.log('Error in updating user : ' + JSON.stringify(err, undefined, 2));}
    });
})

module.exports = router;