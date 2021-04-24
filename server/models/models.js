const { sequelize } = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'USER', allowNull: false },
})

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DOUBLE, allowNull: false },
  rating: { type: DataTypes.FLOAT, defaultValue: 0, allowNull: false },
  numOfReviews: { type: DataTypes.FLOAT, defaultValue: 0, allowNull: false },
  countInStock: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  img: { type: DataTypes.STRING, defaultValue: '' },
})

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
})

const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
})

Product.belongsTo(Brand)
Brand.hasMany(Product)

Product.belongsTo(Category)
Category.hasMany(Product)

module.exports = {
  User,
  Product,
  Brand,
  Category,
}
