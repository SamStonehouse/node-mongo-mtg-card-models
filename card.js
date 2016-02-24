var mongoose = require('mongoose');

var card = {
	name: String,
	manaCost: String,
	cmc: Number,
	colors: [String],
	type: {
		type: String
	},
	supertypes: [String],
	types: [String],
	subtypes: [String],
	rarity: String,
	text: String,
	flavour: String,
	artist: String,
	number: String,
	power: String,
	toughness: String,
	layout: String,
	multiverseid: Number,
	imageName: String,
	id: String,
	rulings: [{
		date: String,
		text: String
	}],
	foreignNames: [{
		language: String,
		name: String,
		multiverseid: Number
	}],
	printings: [String],
	originalText: String,
	originalType: String,
	legalities: [{
		format: String,
		legality: String
	}],
	source: String,
	setShortcode: String,
	setName: String
}

var cardSchema = new mongoose.Schema(card);

module.exports = mongoose.model('Card', cardSchema);
