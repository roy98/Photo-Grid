const { chai, server } = require('./testConfig')
const PhotoModel = require('../models/PhotoModel')

/**
 * Test cases to test all the photos APIs
 * Covered Routes:
 * (1) Get all photos
 */

describe('Book', () => {
	/*
	 * Test the /GET route
	 */
	describe('/GET All photos', () => {
		it('it should GET all the photos', (done) => {
			chai
				.request(server)
				.get('/api/photos')
				.end((err, res) => {
					res.should.have.status(200)
					res.body.should.have.property('message').eql('Operation success')
					testData._id = res.body.data[0]._id
					done()
				})
		})
	})
})
