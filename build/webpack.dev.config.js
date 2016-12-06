'use strict';

  // Modules
  var path = require('path');
  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var config = require('./webpack.base.config.js');

  var rootPaths = path.resolve('.');
  var appPaths = path.resolve('.', 'src');

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  // config.devServer = {
  //   contentBase: appPaths,
  //   host: '127.0.0.1',
  //   port: 9091, //默认8080
  //   stats: 'minimal'
  // };

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

    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  )


  // console.log(config);

module.exports = config;
