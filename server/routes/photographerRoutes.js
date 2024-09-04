const express = require('express')
const router = express.Router()
const photographerController = require('../controller/photographerController')

router.post('/signup', photographerController.createPhotographer)

module.exports = router
