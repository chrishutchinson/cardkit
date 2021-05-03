/**
 * CardKit example: Browser bundle using Webpack
 *
 * This bundle shows how to use CardKit as part of a bundle built by Webpack.
 * This `cardkit.js` file will be run through Webpack and create a bundle file, that can be included into `index.html`
 * You can test this file by running `npm start`
 */

// Load dependencies
const CardKit = require('./cardkit');
const CardKitDOM = require('./renderers/dom/dom');

// Import configuration
const { configuration, templates, themes, layouts } = require('../examples/configurations/sample');

// Initialise
const cardkit = new CardKit(configuration, {
  templates: templates,
  themes: themes,
  layouts: layouts
});

// Start the renderer
const renderer = new CardKitDOM(cardkit);

// Render the UI
renderer.renderUI('ui');
