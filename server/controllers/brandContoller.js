const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
  async create(req, res, next) {
    const { name } = req.body
    if (!name) {
      return next(ApiError.badRequest('Brand name was not provided'))
    }

    const brand = await Brand.create({ name })

    res.status(201).json(brand)
  }

  async list(req, res, next) {
    const brands = await Brand.findAll()
    res.json(brands)
  }
}

module.exports = new BrandController()
