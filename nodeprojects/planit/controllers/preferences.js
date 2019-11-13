const express = require('express');
var router = express.Router();
var { User } = require('../models/User');

// => localhost:3000/users/addPreference/:name
router.put('/addPreference/:name', function(req, res) {
    // Get the user from the database
    User.findById(req.params.name, function(err, doc) {
        if (err){console.log('Error in finding user : ' + JSON.stringify(err, undefined, 2)); return}
        doc.preferences.push(req.body.preferences);
        doc.save(function(err, doc) {
            if (!err) {res.send(doc);}
            else { console.log('Error in updating user : ' + JSON.stringify(err, undefined, 2));}
        })
    })
})

// => localhost:3000/users/addHistory/:name
router.put('/addHistory/:name', function(req, res) {
    // Get the user from the database
    User.findById(req.params.name, function(err, doc) {
        if (err){console.log('Error in finding user : ' + JSON.stringify(err, undefined, 2)); return}
        doc.history.push(req.body.history);
        doc.save(function(err, doc) {
            if (!err) {res.send(doc);}
            else { console.log('Error in updating user : ' + JSON.stringify(err, undefined, 2));}
        })
    })
})


module.exports = router;
