var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index.router');
var usersRouter = require('./routes/users.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname)));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use((req,res) => {
    res.status.json({message: 'route not found'});
})

module.exports = app;
