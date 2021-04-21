const ApiError = require('../error/ApiError')

module.exports = function (req, res, next) {
	const error = ApiError.notFound(`Unknown URL - ${req.originalUrl}`)
	next(error)
}
