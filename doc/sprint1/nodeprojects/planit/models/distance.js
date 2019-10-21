const mongoose = require('mongoose');

var Distance = mongoose.model('Distance', {
    name: { type: String},
    distance: { type : Number},
    start: { type: Number},
    end: { type: Number}
});

// Export distance libary.
module.exports = { Distance };
    // or {
    //Distance:Distance
    //};