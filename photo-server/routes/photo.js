var express = require('express')
const PhotoController = require('../controllers/PhotosController')

var router = express.Router()

router.get('/', PhotoController.photos)
router.get('/load', PhotoController.randomPhoto)

module.exports = router
