// Load some dependencies
const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');

var fs = require('fs'), node_modules = fs.readdirSync('node_modules');


// Get the base config
const base = require('./base.config');


// Merge with base
let config = _.merge(base, {
  entry: './src/renderers/server/server.js',
  output: {
    path: './',
    filename: 'server.js',
    libraryTarget: 'umd',
    library: 'CardKitServer',
  },
  externals: _.merge(node_modules, {
    react: {
      amd: 'react',
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react'
    },
    'react-dom/server': {
      amd: 'react-dom/server',
      root: 'ReactDOMServer',
      commonjs: 'react-dom/server',
      commonjs2: 'react-dom/server'
    }
  })
});


// Set process.env.NODE_ENV to production
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
}));


// Export config
module.exports = config;