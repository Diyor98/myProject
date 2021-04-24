const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('test1234'),
    role: 'USER',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('test1234'),
    role: 'USER',
  },
  {
    name: 'Frank Miller',
    email: 'frank@example.com',
    password: bcrypt.hashSync('test1234'),
    role: 'USER',
  },
  {
    name: 'Diyor',
    email: 'diyor@example.com',
    password: bcrypt.hashSync('test1234'),
    role: 'ADMIN',
  },
]

module.exports = users
