var express = require('express');
var router = express.Router();
const {registerUser, loginUser} = require('../controllers/auth.controller.js');

/* GET users listing. */
router.use('/register', registerUser);
router.use('/login', loginUser);

module.exports = router;