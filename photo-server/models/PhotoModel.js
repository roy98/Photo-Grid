var mongoose = require('mongoose')

var Schema = mongoose.Schema

var PhotoSchema = new Schema({}, { timestamps: true })

module.exports = mongoose.model('Photo', PhotoSchema)
