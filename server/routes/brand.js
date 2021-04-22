const express = require('express')
const router = new express.Router()
const brandController = require('../controllers/brandContoller')
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware')

router.use(authMiddleware)
router.use(isAdmin)

router.post('/', brandController.create)
router.get('/', brandController.list)

module.exports = router
