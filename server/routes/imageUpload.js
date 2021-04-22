const path = require('path')
const multer = require('multer')
const express = require('express')
const router = new express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static')
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function fileFilter(req, file, cb) {
  const fileTypes = /(jpg|jpeg|png)/
  const fileExtension = fileTypes.test(
    path.extname(file.originalname).toLowerCase()
  )
  const mimetype = fileTypes.test(file.mimetype)
  if (fileExtension && mimetype) {
    cb(null, true)
  } else {
    cb(new Error('Only images are allowed'))
  }
}

const limits = {
  fileSize: 1000000,
}

const upload = multer({ storage, fileFilter, limits })

router.post('/', upload.single('image'), async (req, res, next) => {
  res.send(`/${req.file.path}`)
})

module.exports = router
