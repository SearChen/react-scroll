let path = require('path'),
	config = require('../config'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	srcPath = path.resolve(__dirname, '../', 'app')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	entry: {
		app: path.resolve(srcPath, 'index'),
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: isProduction
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
		extensions: ['.js', '.vue', '.json'],
		modules: [
			resolve('app'),
			resolve('node_modules')
		],
		//模块别名定义，方便后续直接引用别名，无须多写长长的地址
		alias: {
			'Components': resolve('app/components')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				include: [resolve('app')],
				query: {compact: false}     // do not use in product env!
			}, {
				test: /\.css$/,
				// loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							// enable CSS Modules
							modules: true,
							importLoaders: 1,
							// customize generated class names
							localIdentName: '[local]_[hash:base64:8]'
						}
					},
					'postcss-loader'
				]
			}, {
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[name]__[local]___[hash:base64:5]'
							}
						}, {
							loader: 'less-loader',
							options: {
								strictMath: true,
								noIeCompat: true
							}
						}
					]
				})
			}
		]
	}

}
