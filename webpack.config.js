var SOURCE_FOLDER	= __dirname + '/src/';
var DIST_FOLDER		= __dirname + '/dist/';
var BUNDLE_NAME		= 'visible.min.js';
var webpack = require('webpack');

module.exports = {
	entry: SOURCE_FOLDER + '/visible.js',
	target: 'web',
	output: {
		library: 'visible',
		path: DIST_FOLDER,
		filename: BUNDLE_NAME,
		publicPath: '/'
	},
	externals: [
		{
			visible: "visible"
		}
	],

	plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
        semicolons: true
      }
    })
  ],

	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/, loader: 'babel-loader' }
		]
	},
	devServer: {
		port: 8080,
		host: '0.0.0.0',
		lazy: true,
		contentBase: SOURCE_FOLDER,
		stats: { colors: true }
	}
};
