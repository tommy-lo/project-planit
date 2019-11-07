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
    if(!ObjectId.isValid(req.params.id))
        return res.status(400);

    var usr = {
        name: req.body.name,
        password: req.body.password,
        history: req.body.history,
        preferences: req.body.preferences,
        meals: req.body,meals
    }

    User.findByIdAndUpdate(req.params.id, { $set: usr}, {new: true}, (err, doc) => {
        if (!err) {res.send(doc);}
        else {console.log('Error in updating user : ' + JSON.stringify(err, undefined, 2));}
    });
})
module.exports = router;