const { chai, server } = require('./testConfig')
const PhotoModel = require('../models/PhotoModel')

/**
 * Test cases to test all the photos APIs
 * Covered Routes:
 * (1) Get all photos
 */

describe('Photo', () => {
	/*
	 * Test the /GET route
	 */
	describe('/GET All photos', () => {
		it('it should GET all the photos', (done) => {
			chai
				.request(server)
				.get('/api/photos/?page=1&per_page=2')
				.end((err, res) => {
					res.should.have.status(200)
					done()
				})
		})
	})
})
