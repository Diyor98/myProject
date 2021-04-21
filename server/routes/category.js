const express = require('express')
const router = new express.Router()
const categoryController = require('../controllers/categoryController')
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware')

router.use(authMiddleware)
router.use(isAdmin)

router.post('/', categoryController.create)
router.get('/', categoryController.list)

module.exports = router
