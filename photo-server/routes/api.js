var express = require('express')
var photoRouter = require('./photo')

var app = express()

app.use('/photos/', photoRouter)

module.exports = app
