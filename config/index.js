let path = require('path')
let LOCAL_DEV_PORT = 8282

let base = {
        VERSION_APP: '1.0',
        srcPath: path.resolve(__dirname, './../', 'app'),
        CDN_TARGET: {
            STATIC: 'http://s1.cdn.imeijian.cn/',
            SUBDIRECTORY: 'article/'
        }
    },
    agentUrl = 'http://192.168.1.83:9478/', //代理地址
	apiPath = 'share',
	rewrite = 'api';   // 代转参数

module.exports = {
    build: {
        env: {
            NODE_ENV: JSON.stringify('production')
        },
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: base.CDN_TARGET.SUBDIRECTORY,
        assetsPublicPath: base.CDN_TARGET.STATIC,
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report,
        srcPath: base.srcPath,
        compile: {
            apiVersion: base.VERSION_APP,
        }
    },
    dev: {
        env: {
            NODE_ENV: JSON.stringify('development')
        },
        port: LOCAL_DEV_PORT,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        srcPath: base.srcPath,
        proxyTable: {
            [`/${rewrite}`]: {
                target: agentUrl + apiPath + '/',
                changeOrigin: true,
                pathRewrite: {
                    [`^/${rewrite}`]: ''
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    },
    cdn: {
        styleFreeImages: {
            item: 'http://mt1.cdn.imeijian.cn',
            board: 'http://mt3.cdn.imeijian.cn',
            other: 'http://mt4.cdn.imeijian.cn'
        }
    }
}