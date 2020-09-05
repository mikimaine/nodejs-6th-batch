var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var responseTime = require('response-time')
var upload = require('express-fileupload')

var indexRouter = require('./routes/index');
var articlesRouter = require('./routes/articles');
var uploadsRouter = require('./routes/uploads');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(upload({
  createParentPath: true,

}))

app.use(responseTime());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// For Auth
// app.use(function(req,res, next) {
//   if(req.headers && req.headers.authorization) {
//     next()
//   } else {
//     next(new Error(" No Authorization token found "))
//   }
// })

app.use('/', indexRouter);
app.use('/articles', articlesRouter);  
app.use('/uploads', uploadsRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // log the error to db
  // render the error page
  res.status(err.status || 500);
  // res.render('error');//
  res.json({
    error: true,
    err:err.message
  })

});

module.exports = app;
