const path = require('path');
const express = require('express');
const debug = require('debug')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const history = require('connect-history-api-fallback');

const webpackConfig = require('../build/webpack.dev.config')
const config = require('../config')

console.log(webpackConfig);

debug.enable('app:*');

const app = express()
const compiler = webpack(webpackConfig)
const log = debug('app:server');

const PORT = config.server_port;

app.use('/static', express.static(config.path_src + '/static'));
app.use(history());

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

app.listen(PORT, '127.0.0.1', (err) => {
  if (err) {
    log(err);
    return
  }

  log(`Listening at http://127.0.0.1:${PORT}`);
})
