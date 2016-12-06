const path = require('path');
const express = require('express');
const debug = require('debug')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// var browserSync = require('browser-sync');

const webpackConfig = require('../build/webpack.dev.config')
const config = require('../config')

debug.enable('app:*');

const app = express()
const compiler = webpack(webpackConfig)
const log = debug('app:server');

const PORT = config.server_port;

log(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  lazy: false,
  noInfo: true,
  quiet: false,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  }
}))
app.use(webpackHotMiddleware(compiler));

// for(let i in webpackConfig.plugins) {
//   let obj = webpackConfig.plugins[i];
//
//   if(obj instanceof HtmlWebpackPlugin) {
//
//   }
// }

app.get('*', function (req, res) {
    // res.render('index');
  res.sendFile(config.path_src + '/views/index.html');
  // res.sendFile(config.path_base + '/index.html');
});

app.use('/static', express.static(config.path_src + '/static'))

app.listen(PORT, '127.0.0.1', (err) => {
  if (err) {
    log(err);
    return
  }

  log(`Listening at http://127.0.0.1:${PORT}`);
})

// // 设置views路径和模板
// app.set('views', config.path_src + '/views')
// app.set('view engine', 'ejs')
