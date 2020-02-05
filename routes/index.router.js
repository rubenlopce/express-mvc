var express = require('express');
var router = express.Router();
const usersRouter = require('./users.router.js');
const authRouter = require('./auth.router.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('F en el navegador');
});

router.use('/users',usersRouter);
router.use('/auth',authRouter);

module.exports = router;
