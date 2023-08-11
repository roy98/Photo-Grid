var express = require('express')
const PhotoController = require('../controllers/PhotosController')

var router = express.Router()

router.get('/', PhotoController.photos)

module.exports = router
