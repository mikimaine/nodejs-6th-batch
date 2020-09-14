var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// auth
  // login  -> POST -> username/password/email/phone
  // login with facebook -> POST -> token, fbid
  // signup -> POST -> username, first_name, last_name
  // forgetPassword --> POST -> // phone, email, username
  // resetPassword --> POST -> // token, username

// user
  // add user --> POST -> 
  // get all users --> GET
  // get single user --> GET
  // update user --> PUT/PATCH
  // update password --> PATCH
  // delete user --> DELETE

// profile
 // CRUD

// Project
  // CRUD

module.exports = router;
