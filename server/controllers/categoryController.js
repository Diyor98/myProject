const { Category } = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController {
	async create(req, res, next) {
		const { name } = req.body
		if (!name) {
			return next(ApiError.badRequest('Category name was not provided'))
		}
		const category = await Category.create({ name })

		res.status(201).json(category)
	}

	async list(req, res, next) {
		const categories = await Category.findAll({})
		res.json(categories)
	}
}

module.exports = new CategoryController()
