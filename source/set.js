var mongoose = require('mongoose');
var cardSchema = require('./card').schema;

var set = {
	name: String,
	code: String,
	gathererCode: String,
	oldCode: String,
	magicCardsInfoCode: String,
	releaseDate: String,
	border: String,
	type: String,
	block: String,
	onlineOnly: Boolean,
	booster: [String],
	cards: [cardSchema]
}

var setSchema = new mongoose.Schema(set);

module.exports = {
	object: set,
	schema: setSchema,
	model: mongoose.model('Set', setSchema)
}
