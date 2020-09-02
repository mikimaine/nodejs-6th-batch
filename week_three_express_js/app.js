var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var responseTime = require('response-time')

var indexRouter = require('./routes/index');
var articlesRouter = require('./routes/articles');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(responseTime());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res, next) {
  // check for header 
  // if
  // response or next()
  if(req.headers && req.headers.authorization) {
    // check if the token is valid from the Database
    // check date validity
    next()
  } else {
    res.status(401).json({
      error: true,
      message: 'No Authorization token found'
    })
  }
  
  
})

app.use('/', indexRouter);
app.use('/articles', articlesRouter);  // /users/single

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
  res.render('error');
});

module.exports = app;
