const express = require('express')
const router = new express.Router()
const productController = require('../controllers/productController')
const upload = require('../controllers/imageUploadController')

router.post('/', upload.single('image'), productController.create)
router.get('/', productController.list)

module.exports = router
