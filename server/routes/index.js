const express = require('express')
const router = new express.Router()
const userRouter = require('./user')
const categoryRouter = require('./category')
const brandRouter = require('./brand')
const imageUpload = require('./imageUpload')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/brand', brandRouter)
router.use('/image-upload', imageUpload)

module.exports = router
