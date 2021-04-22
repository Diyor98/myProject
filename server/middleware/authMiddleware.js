const jwt = require('jsonwebtoken')
const { User } = require('../models/models')
const ApiError = require('../error/ApiError')

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return next(ApiError.unauthorized('Unathorized'))
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const user = await User.findOne({ id: decoded.id })
    if (!user) {
      return next(ApiError.unauthorized('Unathorized'))
    }
    req.user = user
    next()
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN') return next(ApiError.forbidden('Admin only'))
  next()
}

module.exports = { authMiddleware, isAdmin }
