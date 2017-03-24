'use strict';
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var myConfig = Object.create(require('./webpack.config.js'));


var compiler = webpack(myConfig);

var server = new webpackDevServer(compiler, {
    publicPath: myConfig.output.path,
    historyApiFallback: true,
    inline: true
});
server.listen(8080, 'localhost', function(err) {
    console.log('app listen success.');
});