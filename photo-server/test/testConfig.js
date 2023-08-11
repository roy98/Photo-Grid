//During the automated test the env variable, We will set it to "test"
process.env.NODE_ENV = 'test'
process.env.MONGODB_URL =
	'mongodb+srv://falcon:KYDaAcBNDyaDRI8z@cluster0.fw2ek.mongodb.net/?retryWrites=true&w=majority'

//Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let should = chai.should()
chai.use(chaiHttp)

//Export this to use in multiple files
module.exports = {
	chai: chai,
	server: server,
	should: should
}
