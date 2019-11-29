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

router.post("/updateMode", function(req,res) {
    console.log("updating mode of user " + req.body.username + "to " + req.body.mode + "mode");
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

router.post("/updateItin", function(req,res) {
    console.log("updating itinerary of user " + req.body.username);
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

router.post("/getHistory", function(req, res) {
    User.findOne({name: req.body.name}, (err, doc) => {
        if (!err){
            console.log("Getting history of user: " + req.body.name);
            console.log(doc.history);
            res.send(doc.history);
        }
    })
})


router.post("/updateHistory", function(req,res) {

    User.findOne({name: req.body.name}, (err, doc) => {
        let toAdd = req.body.history;
        let name = req.body.name;
        
        // Error in finding user
        if (err){
            console.log('Error in finding username: ' + JSON.stringify(err, undefined,2));
        }

        // Place with given id already stored in history
        else if (doc.history.indexOf(toAdd) != -1){
            console.log('Place with id: ' + toAdd + ' already stored in user: ' + name);
        }

        // Add id to history stack
        else{
            doc.history = doc.history.concat([toAdd]);
            doc.markModified('history');

            console.log('Adding place with id: ' + toAdd + ' to history of user: ' + name);
            console.log(doc);

            doc.save();

            res.send(doc);
        }
    });
})

module.exports = router;