const express = require('express'),
	proxyMiddleware = require('http-proxy-middleware'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpack = require('webpack'),
	webpackConfig = require('./webpack.config');
webpackConfig.entry.app = ['webpack-hot-middleware/client', webpackConfig.entry.app];  //hot 热配置
const chalk = require('chalk');
let app = express(),
	compiler = webpack(webpackConfig);
/**
 * 设置代理
 */

let proxyOptions = {
	target: 'http://192.168.1.79:8001',     // 代理目标地址
	changeOrigin: true,                     // needed for virtual hosted sites
	ws: true,                               // proxy websockets 实时错误提示
	pathRewrite: {
		// '^/api': '/',                    // rewrite path
	},
	router: {}
};
app.use('/api', proxyMiddleware(proxyOptions));

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath, // Same as `output.publicPath` in most cases.
	stats: {
		colors: true,
		modules: false,
		chunks: false,
		chunkModules: false,
		children: false
	},
	inline: false,
	hot: true,
	noInfo: true,
	// display no info to console (only warnings and errors)
	quiet: false
	// display nothing to the console
}));
app.use(webpackHotMiddleware(compiler, {
	overlay: true,
	report: true
}));
let hostPost = 8181;
app.listen(hostPost, '0.0.0.0', function () {
	console.log(chalk.red(`-------------------【当前DEV 端口为: ${hostPost}】-------------------`));
});

