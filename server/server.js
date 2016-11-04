const express = require('express');
const debug = require('debug')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
// var browserSync = require('browser-sync');

const webpackConfig = require('../build/webpack.dev.config')
const config = require('../config')

debug.enable('app:*');

const app = express()
const compiler = webpack(webpackConfig)
const log = debug('app:server');

const PORT = config.server_port;

// const server = webpackDevMiddleware(compiler, {
//   publicPath: webpackConfig.output.publicPath,
//   lazy: false,
//   noInfo: true,
//   quiet: false,
//   stats: {
//     chunks: false,
//     chunkModules: false,
//     colors: true,
//   }
// })

// server.listen(PORT);
// console.log(server);

//
// log('Enabling webpack dev middleware.')
//
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

log('Enabling Webpack Hot Module Replacement (HMR).')
app.use(webpackHotMiddleware(compiler))

//
log(config.path_base)
log(config.path_src)

// // 设置views路径和模板
app.set('views', config.path_src + '/views')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index.html');
});

// app.use(express.static(paths.client('static')))

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    log(err);
    return
  }

  log(`Listening at http://127.0.0.1:${PORT}`);
})
