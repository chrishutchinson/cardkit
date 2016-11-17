/**
 * CardKit example: Server using Node.js
 * 
 * This bundle shows how to use CardKit on a Node server.
 * This `server.js` file will be run via Node (`$ node server.js`)
 */

// Import CardKit
const CardKit = require('../../cardkit');
const CardKitServer = require('../../server');

// Load our configuration
const { configuration } = require('../configurations/sample');

// Initialise with our configuration
const cardkit = new CardKit(configuration);

// Initialise renderer
const renderer = new CardKitServer(cardkit);

// Render to an image
renderer.renderToImage(2)
        .then((image) => {
          // Output the image in the console with a `<img />` tag wrapped around it
          console.log('<img src="data:image/png;base64,' + image + '" />');
          process.exit();
        })
        .catch((e) => {
          console.log('[ERR]', e);
          process.exit();
        });
