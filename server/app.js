var Sequelize = require('sequelize'),
	epilogue = require('epilogue'),
	http = require('http');
var models =  require('../models');

// Define your models

// Initialize server
var server, app;
var restify = require('restify');

app = server = restify.createServer()
app.use(restify.plugins.queryParser());
app.use(restify.plugins.bodyParser());

// Initialize epilogue
epilogue.initialize({
	app: app,
	sequelize: models.sequelize
});

// Create REST resource
var roomResource = epilogue.resource({
	model: models.Room,
	endpoints: ['/rooms', '/rooms/:id']
});

var userResource = epilogue.resource({
	model: models.User,
	endpoints: ['/users', '/users/:id']
});


// Create database and listen
models.sequelize
	.sync({ force: true })
	.then(function() {
		server.listen(51967, function() {
			var host = server.address().address,
				port = server.address().port;

			console.log('listening at http://%s:%s', host, port);
		});
	});
