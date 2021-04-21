const jwt = require('jsonwebtoken')

const generateToken = (id) => {
	const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '24h' })
	return token
}

module.exports = generateToken
