const express = require('express');
const { loginController, registerController } = require('../controllers/userController');




//router object
const router  = express.Router()

//routers
//Post Login User
router.post('/login', loginController)

//Post Register User
router.post('/register', registerController)

module.exports = router;
