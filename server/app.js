require('dotenv').config()
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const models = require('./models/models')
const { connectDB } = require('./db')
const { pageNotFound, errorHandler } = require('./middleware')
const router = require('./routes')
connectDB()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

__dirname = path.resolve()
app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/api', router)

app.use(pageNotFound)
app.use(errorHandler)

app.get('/', (req, res) => {
  res.json({ msg: 'Hello' })
})

module.exports = app
