const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: 'postgres',
		port: process.env.DB_PORT,
	}
)

const connectDB = async () => {
	try {
		sequelize.authenticate()
		sequelize.sync()
	} catch (error) {
		console.log(error)
	}
}

module.exports = { connectDB, sequelize }
