const bcrypt = require('bcryptjs')
const ApiError = require('../error/ApiError')
const { User } = require('../models/models')
const generateToken = require('../utils/generateToken')

class UserController {
  async login(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Invalid information was provided'))
    }
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return next(ApiError.notFound('Invalid email or password'))
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return next(ApiError.notFound('Invalid email or password'))
    }
    const token = generateToken(user.id)

    res.json({ token })
  }

  register(role) {
    return async function (req, res, next) {
      let { name, email, password } = req.body
      if (!name || !email || !password) {
        return next(ApiError.badRequest('Invalid information was provided'))
      }
      let user = await User.findOne({ where: { email } })
      if (user) {
        return next(
          ApiError.badRequest('User with the given email already exists')
        )
      }

      password = await bcrypt.hash(password, 7)
      user = await User.create({ name, email, password, role })
      const token = generateToken(user.id)

      res.status(201).json({ token })
    }
  }
}

module.exports = new UserController()
