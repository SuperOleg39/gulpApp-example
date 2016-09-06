'use strict';

const webpack = require('webpack');
const path    = require('path');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

let options = {

  output: {
    path:     __dirname + '/build/js',
    filename: '[name].bundle.js'
  },

  watch:   isDevelopment,

  devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['common'],
        minChunks: 2
    })
  ],

  module: {

    loaders: [{
      test:   /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]

  }
};

if (!isDevelopment) {
  options.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }));

}

module.exports = options;
