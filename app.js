var express = require('express');
var app = express();
var path = require('path');
var consolidate = require('consolidate');
var reload = require('reload');
var http = require('http');
var config = require('./task/config');


var isDev = process.env.NODE_ENV !== 'production';
var port = config.dev.port;

var server = http.createServer(app);
reload(server, app);
server.listen(port, function(){
	console.log('App (dev) is now running on port '+ port);
});