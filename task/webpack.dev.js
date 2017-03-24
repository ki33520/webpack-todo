var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./config');
var baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
	// cheap-module-eval-source-map is faster for development
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
})
