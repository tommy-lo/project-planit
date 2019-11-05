const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: { 		type: String, 		default: "", unique : true},
    password: { 	type: String, 		default: ""},
	history: {		type: [String], 	default: []},
	preferences: {	type: [String], 	default: []}
});

var User = mongoose.model('User', UserSchema);

// Export User schema
module.exports = { User };
