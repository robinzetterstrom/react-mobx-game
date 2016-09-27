const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: "eval",
  entry: path.join(__dirname, 'bundle.js'),
  output: {
    path: path.join(__dirname, 'dist', 'assets', 'js'),
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      }
    ]
  },
  plugins:[
    // new webpack.DefinePlugin({
    //   'process.env':{
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })
  ]
};
