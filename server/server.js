const path = require('path');
const express = require('express');
const debug = require('debug')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
  hot: true,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  }
}))

app.use(webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
    // res.render('index');
  res.sendFile(config.path_src + '/views/index.html');
  // console.log('get===' + config.path_base);
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
