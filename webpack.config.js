// Use minimist to help us with argument parsing
const args = require('minimist')(process.argv.slice(2));


// Load the base configuration file
const base = require('./webpack/base.config');


// Set a dev env by default
let env = 'dev';

// Iterate over the supplied env argument and map it to a Webpack configuration file found in ./webpack
if(args.env) {
  switch(args.env) {
    case 'dist-dom': // Generates the DOM version for use via require('cardkit/dom');
      env = 'dist-dom';
      break;
    case 'dist-server': // Generates the server version for use via require('cardkit/server');
      env = 'dist-server';
      break;
    case 'dist-core': // Generates the core version for use via require('cardkit');
      env = 'dist-core';
      break;
    case 'dist-dom-script': // Generates the DOM version for use via <script> tag
      env = 'dist-dom-script';
      break;
    case 'dist-core-script': // Generates the core version for use via <script> tag
      env = 'dist-core-script';
      break;
    case 'dist-docs': // Generates the demo version that goes on GitHub Pages
      env = 'dist-docs';
      break;
  }
}


// Helper function to get the configuration file
const getConfig = (env) => {
  return require('./webpack/' + env + '.config.js');
}


// Export the configuration file
module.exports = getConfig(env);