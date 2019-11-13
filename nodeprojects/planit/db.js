const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Planitapp', (err) => {
    if (!err)
    console.log('Mongodb connection success');
    
    else
    console.log('Error in connection.: ' + JSON.stringify(err, undefined, 2))

});
console.log('hello there');
module.exports = mongoose;
//C:\Users\Brandon\Documents
//C:\nodeprojects\planit