const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'bundle.js'), // Our source file
  output: {
    path: path.join(__dirname, 'dist', 'assets', 'js'), // Our path final transpiled and minified bundle
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // Do not transpile node_modules.
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'], // Load presets for es2015 and react
          plugins: ['transform-decorators-legacy', 'transform-class-properties'] // Plugins for MobX
        }
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })
  ]
};
