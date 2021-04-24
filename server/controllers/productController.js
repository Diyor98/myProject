const { Product } = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
  async create(req, res, next) {
    const {
      name,
      description,
      price,
      countInStock,
      brandId,
      categoryId,
    } = req.body
    const img = req.file.path

    if (
      !name ||
      !description ||
      !price ||
      !countInStock ||
      !brandId ||
      !categoryId
    ) {
      return next(ApiError('Invalid data received'))
    }
    const product = await Product.create({
      name,
      description,
      price,
      countInStock,
      brandId,
      categoryId,
      img,
    })
    console.log(product.img)

    res.json(product)
  }

  async list(req, res, next) {
    let { page, limit, brandId, categoryId } = req.query
    page = page || 1
    limit = limit || 10
    const offset = limit * (page - 1)
    let products
    if (!brandId && !categoryId) {
      products = await Product.findAndCountAll({
        limit,
        offset,
      })
    }
    if (brandId && categoryId) {
      products = await Product.findAndCountAll({
        where: { brandId, categoryId },
        limit,
        offset,
      })
    }
    if (!brandId && categoryId) {
      products = await Product.findAndCountAll({
        where: { categoryId },
        limit,
        offset,
      })
    }
    if (brandId && !categoryId) {
      products = await Product.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      })
    }

    res.json(products)
  }
}

module.exports = new ProductController()
