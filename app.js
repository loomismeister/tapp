var express       = require('express');
var http          = require('http');
var path          = require('path');
var config        = require('./config')();
var app           = express();

var engine        = require('tingodb');
var tungus        = require('tungus');
var mongoose      = require('mongoose');

var favicon       = require('serve-favicon');
var logger        = require('morgan');
var session       = require('express-session');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var debug         = require('debug')('app4');
var errorHandler  = require('errorhandler');


var routes        = require('./controllers/index');
var users         = require('./controllers/users');



// All environments

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'dragon.ico')));
app.use(logger('dev'));
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(errorHandler());
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

mongoose.connect('tingodb://' + __dirname + '/data', function(err, db) {
  if(err) {
    console.log('Cannot connect to database');
  } else {
    var attachDB = function(req, res, next) {
        req.db = db;
        next();
    };
    debug('Successfully connected to tingodb://' + __dirname + '/data');
  }
});

var server = http.createServer(app).listen(config.port, function(){
    debug('Tapp Express server listening on port ' + server.address().port)
});

module.exports = server
