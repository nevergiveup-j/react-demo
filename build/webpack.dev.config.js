'use strict';

  // Modules
  var path = require('path');
  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
  var config = require('./webpack.base.config.js');
  var PAGES = require('../config/pages');

  var rootPaths = path.resolve('.');

    // add hot-reload related code to entry chunk
    config.entry = PAGES.reduce(
      function (memo, page) {
        memo[page] = [
          'eventsource-polyfill', //兼容ie
          'webpack-hot-middleware/client',
          config.entry[page]
        ]
        return memo;
      },
      {}
    );

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  config.output = {
    // Absolute output directory
    path: rootPaths + '/dist/static',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: '/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: '[name].bundle.js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: '[name].bundle.js'
  };

  // config.target = 'node';

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */

  config.devtool = 'eval-source-map';

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),

    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files
    // Disabled when in test mode or not in build mode
    new ExtractTextPlugin(('[name].bundle.css')),

    // Reference: https://github.com/Va1/browser-sync-webpack-plugin
    new BrowserSyncPlugin(
      {
        host: '127.0.0.1',
        port: 9090,
        proxy: 'http://127.0.0.1:9091/',
        logConnections: false,
        notify: false
      },
      // plugin options
      {
        // determines if browserSync should take care
        // of reload (defaults to true). switching it off
        // might be useful if you combine this plugin
        // with webpack-dev-server to reach
        // Hot Loader/Hot Module Replacement tricks
        reload: true
      }
    )
  )

module.exports = config;
