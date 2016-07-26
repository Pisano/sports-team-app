var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('app'),
    ],
  }
}
