const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var preferences = new Schema({
	parks: Boolean,
	museums: Boolean,
	restaurants: Boolean,
	movies: Boolean,
	breakfast: Number,
	lunch: Number,
	dinner: Number
});

var UserSchema = new Schema({
	name: { 		type: String, 		default: "", unique : true},
    password: { 	type: String, 		default: ""},
	history: {		type: [String], 	default: []},
	preferences: {	type: preferences, 	default: {
		parks: True, museums: True, restaurants: True, movies: True, breakfast: 24, lunch: 24, dinner: 24}}
});

var User = mongoose.model('User', UserSchema);

// Export User schema
module.exports = { User };
