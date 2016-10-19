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
  publicPath: '/lrw/static/',

  // Filename for entry points
  // Only adds hash in build mode
  filename: '[name].[hash].js',

  // Filename for non-entry points
  // Only adds hash in build mode
  chunkFilename: '[name].[hash].js'
};


/**
 * Devtool
 * Reference: http://webpack.github.io/docs/configuration.html#devtool
 * Type of sourcemap to use per build type
 */
config.devtool = 'source-map';


// Add build specific plugins
config.plugins.push(
  // Reference: https://github.com/webpack/extract-text-webpack-plugin
  // Extract css files
  // Disabled when in test mode or not in build mode
  new ExtractTextPlugin(('[name].[hash].css'))

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  // Only emit files when there are no errors
  new webpack.NoErrorsPlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  // Dedupe modules in the output
  new webpack.optimize.DedupePlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // Minify all javascript, switch loaders to minimizing mode
  new webpack.optimize.UglifyJsPlugin({
    mangle:   true,
    compress: {
        warnings: false // Suppress uglification warnings
    }
  }),

  // Copy assets from the public folder
  // Reference: https://github.com/kevlened/copy-webpack-plugin
  new CopyWebpackPlugin(
    [{
      from: appPaths + '/static'
    }],
    {
      ignore: [
        { glob: 'sass/**/*', dot: true }
      ]
    }   
  )
)

module.exports = config;
