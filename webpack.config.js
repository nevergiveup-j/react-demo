var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + '/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    //resolve: {
    //    modulesDirectories: ['node_modules', './src'],
    //    extensions: ['', '.js', '.jsx']
    //},
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader'},
            { test: /\.js$/, loader: 'jsx-loader' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'sass?sourceMap'
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css", {allChunks: true})
    ]
};