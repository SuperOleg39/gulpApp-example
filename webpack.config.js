'use strict';

const webpack = require('webpack');
const path    = require('path');

module.exports = {
  context: require('path').join(__dirname, '/js'),

  // entry: "./big-calendar",

  output: {
    path:     __dirname + '/js',
    filename: "bundle.js"
  },

  // watch: true,

  // watchOptions: {
  //   aggregateTimeout: 100
  // },

  devtool: "cheap-inline-module-source-map",

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates:    ['*-loader', '*'],
    extensions:         ['', '.js']
  },

  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
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