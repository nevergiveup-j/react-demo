'use strict';

// Modules
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.config.base.js');

/**
 * Output
 * Reference: http://webpack.github.io/docs/configuration.html#output
 * Should be an empty object if it's generating a test build
 * Karma will handle setting it up for you when it's a test build
 */
config.output = {
  // Absolute output directory
  path: __dirname + '/dist/lrw/static',

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


/**
 * Devtool
 * Reference: http://webpack.github.io/docs/configuration.html#devtool
 * Type of sourcemap to use per build type
 */

config.devtool = 'eval-source-map';



config.plugins.push(
  // Reference: https://github.com/webpack/extract-text-webpack-plugin
  // Extract css files
  // Disabled when in test mode or not in build mode
  new ExtractTextPlugin(('[name].bundle.css'))
)


module.exports = config;