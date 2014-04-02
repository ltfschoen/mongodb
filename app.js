/**
 * Module dependencies.
 */

// tie variables to packages, dependencies, node functionalities, and routes
// link to Mongo Labs database

// module.exports = function (flights) {
	var express = require('express');

	// var routes = require('./routes')(flights);
	var routes = require('./routes')
	var user = require('./routes/user');
	var http = require('http');
	var path = require('path');
	// userbin to hide secret keys
	var userbin = require('userbin');

	// instantiates Express engine and assigns app variables to it
	var app = express();

	userbin.config({
  		secret_key: 'YOUR_APP_ID'
	});

	// all environments
	// sets port
	app.set('port', process.env.PORT || 3000);
	// defines locations of views
	app.set('views', path.join(__dirname, '/views'));
	// defines engine to render views
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(userbin.authenticate());
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

	// map to dashboard URI /routes/dashboard.js
	app.get('/dashboard', routes.dashboard);

	// create http server and launch
	http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});

// 	return app;
// }
