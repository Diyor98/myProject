const express = require('express')
const router = new express.Router()
const userController = require('../controllers/userController')

router.post('/register', userController.register('USER'))
router.post('/login', userController.login)
router.post('/registerAdmin', userController.register('ADMIN'))

module.exports = router
