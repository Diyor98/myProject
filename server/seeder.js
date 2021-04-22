require('dotenv').config()
const { users, brands, categories } = require('./data')
const { connectDB } = require('./db')
const models = require('./models/models')

connectDB()

async function importData() {
  await models.User.destroy({ truncate: { cascade: true } })
  await models.Brand.destroy({ truncate: { cascade: true } })
  await models.Category.destroy({ truncate: { cascade: true } })

  users.forEach(async (user) => {
    await models.User.create(user)
  })
  brands.forEach(async (brand) => {
    await models.Brand.create(brand)
  })
  categories.forEach(async (category) => {
    await models.Category.create(category)
  })
}

async function destroyData() {
  await models.User.destroy({ force: true, truncate: { cascade: true } })
  await models.Category.destroy({ force: true, truncate: { cascade: true } })
  await models.Brand.destroy({ force: true, truncate: { cascade: true } })
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
