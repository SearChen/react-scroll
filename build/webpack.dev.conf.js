let path = require('path')
let webpack = require('webpack')
let config = require('../config')
let merge = require('webpack-merge')
let baseWebpackConfig = require('./webpack.base.conf')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
	// cheap-module-eval-source-map is faster for development
	devtool: 'cheap-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': config.dev.env
		}),
		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			title: '滚动',
			filename: 'index.html',
			template: path.resolve(config.dev.srcPath, 'index.html'),
			inject: true
		}),
		new webpack.ProvidePlugin({
			"React": "react",
		}),
		new FriendlyErrorsPlugin(),
		new ExtractTextPlugin("[name].css", {allChunks: true}),
	]
})
