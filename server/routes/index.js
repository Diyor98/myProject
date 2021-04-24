const express = require('express')
const router = new express.Router()
const userRouter = require('./user')
const categoryRouter = require('./category')
const brandRouter = require('./brand')
const productRouter = require('./product')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)

module.exports = router
