'use strict';

  // Modules
  var webpack = require('webpack');
  var autoprefixer = require('autoprefixer');
  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');


  /**
   * Env
   * Get npm lifecycle event to identify the environment
   */
  var ENV = process.env.npm_lifecycle_event;
  var appPaths = __dirname + '/src';


  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  config.entry = {
    app: appPaths + '/entry/index.jsx',
    vendors: [
      'react',
      'react-dom',
      'react-router'
    ]
  };

  config.resolve = {
    // 后缀名
    extensions: ['', '.js', '.jsx'],
    // 别名
    alias: {
      'COMMON': appPaths + '/common',
      'COMPONENT': appPaths + '/component',
      'ACTION': appPaths + '/actions',
      'REDUCER': appPaths + '/reducers'
    }
  }

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */


  // Initialize module
  config.module = {
    preLoaders: [],
    loaders: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js|jsx$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      // ASSET LOADER
      // Reference: https://github.com/webpack/url-loader
      // Copy png, jpg, jpeg, gif files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file?limit=10000&name=images/[name].[hash:8].[ext]'
    }, {
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(svg|woff|woff2|ttf|eot)$/,
      loader: 'file?&name=fonts/[name].[hash:8].[ext]'
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw'
    }]
  };


  // CSS LOADER
  // Reference: https://github.com/webpack/css-loader
  // Allow loading css through js
  //
  // Reference: https://github.com/postcss/postcss-loader
  // Postprocess your css with PostCSS plugins
  var cssLoader = {
    test: /\.css$/,
    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files in production builds
    //
    // Reference: https://github.com/webpack/style-loader
    // Use style-loader in development for hot-loading
    loader: ExtractTextPlugin.extract('style', 'css?module&localIdentName=[name]-[local]-[hash:8]&-url?sourceMap!postcss')
  };


  var sassLoader = {
    test: /\.s(a|c)ss$/,
    loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass?sourceMap')
  };

  // Add cssLoader to the loader list
  config.module.loaders.push(cssLoader, sassLoader);
  config.sassLoader = {includePaths: appPaths + '/static'};


  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ];

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [];

  // Reference: https://github.com/ampedandwired/html-webpack-plugin
  // Render index.html
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../index.html',
      inject: 'body'
    })
  )

module.exports = config;
