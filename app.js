var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

function yeniBirIstekGeldi (req,res,next){
  console.log("Yeni bir istek geldi.\n");
  next();
};



app.use(yeniBirIstekGeldi);

app.get('/hello', function(req, res, next) {
  res.send('Merhaba, GET isteği attınız');

});

app.delete('/hello', function(req, res, next) {
  res.send('Merhaba, DELETE isteği attınız');
});

app.put('/hello', function(req, res, next) {
  res.send('Merhaba, PUT isteği attınız');
  
app.post('/hello', function(req, res, next) {
  res.send('Merhaba, POST isteği attınız');
});
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
