const axios = require('axios')
const apiResponse = require('../helpers/apiResponse')
var mongoose = require('mongoose')
const PhotoModel = require('../models/PhotoModel')
mongoose.set('useFindAndModify', false)

/**
 * Get Photo
 * @description This method return photos with pagination
 * @returns {Object}
 */
exports.photos = [
	async function (req, res) {
		const page = (req.query.page && req.query.page > 0 ? req.query.page - 1 : 0) || 0
		const per_page = Number(req.query.per_page) || 10

		PhotoModel.find()
			.skip(page * per_page)
			.limit(per_page)
			.then((data) => {
				res.status(200).json(data)
			})
			.catch(() => {
				apiResponse.ErrorResponse(res, { error: 'could not fetch data' })
			})
	}
]

/**
 * Load Random images to mongoose database
 * @returns {Object}
 */
exports.randomPhoto = [
	async function (req, res) {
		try {
			await axios
				.get(`https://api.unsplash.com/photos/random?client_id=${process.env.CLIENT_ID}&count=10`)
				.then((response) => {
					bulkSaveRandomPhoto(response?.data, res)
				})
				.catch((err) => {
					res.json({ error: err })
				})
		} catch (error) {
			res.send({ error })
		}
	}
]

const bulkSaveRandomPhoto = async (data, res) => {
	let photo
	let hasError = false

	for (let i = 0; i < data.length; i++) {
		photo = new PhotoModel({
			id: data[i].id,
			description: data[i].description,
			urls: JSON.stringify(data[i].urls),
			downloads: data[i].downloads,
			likes: data[i].likes,
			user: JSON.stringify({ name: data[i].user.name, portfolio_url: data[i].user.portfolio_url })
		})

		try {
			await photo.save(function (err) {
				if (err) hasError = true
			})
		} catch (err) {
			res.status(500).send({
				message: err.errors
			})
		}
	}

	if (!hasError) {
		res.status(201).send('Photo saved succussfully!')
	}
}
