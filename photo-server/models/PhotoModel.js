var mongoose = require('mongoose')

var Schema = mongoose.Schema

var PhotoSchema = new Schema(
	{
		id: { type: String, required: true },
		description: { type: String, required: false },
		urls: { type: String, required: true },
		downloads: { type: Number, required: false },
		likes: { type: Number, required: false },
		user: { type: String, required: true }
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Photo', PhotoSchema)
