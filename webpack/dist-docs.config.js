// Load some dependencies
const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');

var fs = require('fs'), node_modules = fs.readdirSync('node_modules');


// Get the base config
const base = require('./base.config');


// Merge with base
let config = _.merge(base, {
  entry: './docs/cardkit.js',
  output: {
    path: './docs',
    filename: 'bundle.js'
  },
  eslint: null
});


// Set process.env.NODE_ENV to production
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
}));


// Export config
module.exports = config;