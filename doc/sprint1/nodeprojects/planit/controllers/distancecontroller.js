const express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var { Distance } = require('../models/distance');

// => localhost:3000/distance/
router.get('/', (req, res) => {

    Distance.find((err, docs) =>{
        if (!err) {res.send(docs);}
        else { console.log('Error in getting distance : ' + JSON.stringify(err, undefined, 2));}
    });

});
// Get id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No such record of that id:  ${req.params.id}`);
    console.log(req.params.id)
     Distance.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retriving distance : ' + JSON.stringify(err, undefined, 2));}
    });
});

// Install json formatter to view properly, use postman to send request.
router.post('/', (req, res) => {
    var dis = new Distance({
        name: req.body.name,
        distance: req.body.distance,
        start: req.body.start,
        end: req.body.end

    });
    dis.save((err, doc) => {
        if (!err) {res.send(doc);}
        else { console.log('Error in saving distance : ' + JSON.stringify(err, undefined, 2));}
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No such record of that id:  ${req.params.id}`);
    
    Distance.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in delete : ' + JSON.stringify(err, undefined, 2));}
    });
});
module.exports = router;