/**
 * CardKit example: Browser bundle using Webpack
 * 
 * This bundle shows how to use CardKit as part of a bundle built by Webpack.
 * This `cardkit.js` file will be run through Webpack and create a bundle file, that can be included into `index.html`
 */

// Load dependencies
var CardKit = require('../cardkit');
var CardKitDOM = require('../dom');

// Import configuration
var data = require('../examples/configurations/sample');

// Initialise
var cardkit = new CardKit(data.configuration, {
  templates: data.templates,
  themes: data.themes, 
  layouts: data.layouts
});

// Start the renderer
var renderer = new CardKitDOM(cardkit);

// Render the UI
renderer.renderUI('ui');