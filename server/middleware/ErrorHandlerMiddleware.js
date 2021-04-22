const ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ error: err.message })
  } else {
    console.log(err)
    res.status(500).json({ error: 'Unexpected error' })
  }
}
