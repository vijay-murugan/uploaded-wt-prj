const express = require('express')
const router = express.Router()

/*const {
    registerController 
} = require('../controllers/auth.controller.js')*/

const AuthController = require('../controllers/auth.controller')


router.post('/register',AuthController.register)
router.post('/login',AuthController.login)

module.exports = router