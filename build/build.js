// https://github.com/shelljs/shelljs
process.env.NODE_ENV = 'production'
let path = require('path')
let shell = require('shelljs')
let webpack = require('webpack')
let config = require('../config')
let webpackConfig = require('./webpack.prod.conf')

var assetsPath = path.join(config.build.assetsRoot, '')
shell.rm('-rf', assetsPath)

webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
})
