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
        else { console.log('Error in adding user : ' + JSON.stringify(err, undefined, 2));}
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

router.put("/updateUser", function(req,res) {
    console.log("updating user " + req.body.username);
    User.find({name: req.body.username}, function (err, doc) {
        if (!err) {
            console.log(doc);
            // Add location history
           // doc.history.push(req.body.history);
            // Modify preferences
           // doc.ypreferences = req.body.preferences;
            // Save the document

            if (set == 1){
                set = 0;
                doc[0].mode = "dark";
                console.log(doc[0].mode); 
                doc[0].save();
            }
            else{
                set = 1;
                doc[0].mode = "light";
                console.log(doc[0].mode); 
                doc[0].save();
            } 

            //doc.save();
        }
        else { console.log('Error in updating user : ' + JSON.stringify(err, undefined, 2));}
    });
})

router.put("/updateItin", function(req,res) {
    console.log("updating user " + req.body.username);
    User.find({name: req.body.username}, function (err, doc) {
        if (!err) {
            console.log(doc);
            // Add location history
           // doc.history.push(req.body.history);
            // Modify preferences
           // doc.ypreferences = req.body.preferences;
            // Save the document


                doc[0].display = req.body.display;
                doc[0].save();


            //doc.save();
        }
        else { console.log('Error in updating user : ' + JSON.stringify(err, undefined, 2));}
    });
})

module.exports = router;