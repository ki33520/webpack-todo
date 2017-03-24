var path = require('path');
var webpack = require('webpack');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
	entry: {
		index: ['./shared/index.js',hotMiddlewareScript],
		user: ['./shared/user.js',hotMiddlewareScript]
	},
	output: {
		filename: './[name]/bundle.js',
		path: path.resolve(__dirname,'../dist/bundle'),
		publicPath: publicPath
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]'
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader?sourceMap',
					'resolve-url-loader',
					'sass-loader?sourceMap'
				]
			}
		]
	}
}