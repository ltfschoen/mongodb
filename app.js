
/**
 * Module dependencies.
 */

// tie variables to packages, dependencies, node functionalities, and routes
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

// instantiates Express engine and assigns app variables to it
var app = express();

// all environments
// sets port
app.set('port', process.env.PORT || 3000);
// defines locations of views
app.set('views', path.join(__dirname, 'views'));
// defines Jade engine to render views
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
// allows error-checking during development
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// defines routes for URI's hit
app.get('/', routes.index);
// map to /routes/user.js and call 'list' function
app.get('/users', user.list);

// create http server and launch
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
