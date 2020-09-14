var express = require('express');

const authController = require('../controllers/auth')


var router = express.Router();

/* Auth routes. */
router.post('/login', authController.loginAction);
router.post('/signup', authController.signupAction);
router.post('/forget-password', authController.forgetPasswordAction);

module.exports = router;
