var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongo = require('mongoose');
const config = require('./config/index');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');

var app = express();


mongo.connect( `${config.db.protocol}://${config.db.url}:${config.db.port}/${config.db.database}`,
 { useNewUrlParser: true, useUnifiedTopology: true})

mongo.connection.on('error', function errHandler() {
    console.error('MongoDB connection error.');
    process.exit(1);
});

  
mongo.connection.on('connected', 
    function conListener(){
        console.log('successfully connected to mongodb');
    });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: true,
    message: err.message || 'Internal Error'
  });
});

module.exports = app;
