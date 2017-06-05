const path = require('path');

const sourcePath = path.resolve(__dirname, '../wwwroot');
const publicPath = `${sourcePath}/dist/`;

module.exports  = {
	devtool: 'source-map',
	entry: {
		'app': [
			'babel-polyfill',
			'react-hot-loader/patch',
			`${sourcePath}/js/app.js`
		]
	},
	output: {
		filename: 'bundle.js',
		path: `${publicPath}/js/`
	},
	context: __dirname,
	devServer: {
		contentBase: publicPath,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{ loader: 'babel-loader' }],
				exclude: /node_modules/
			}
		]
	}
};