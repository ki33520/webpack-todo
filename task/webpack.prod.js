var path = require('path');

module.exports = {
	entry: './shared/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'dist')
	}
}