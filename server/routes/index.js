const express = require('express')
const router = new express.Router()
const userRouter = require('./user')
const categoryRouter = require('./category')

router.use('/user', userRouter)
router.use('/category', categoryRouter)

module.exports = router
