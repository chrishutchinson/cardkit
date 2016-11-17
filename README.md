# CardKit 2

A simple, powerful and fully configurable image editor for web browers and servers. Optional UI included.

CardKit 2 has three main parts:

- [`CardKit`](#cardkit): The core library, that manages and maintains the configuration object which defines the structure and options of a card
- [`CardKitDOM`](#cardkitdom): A DOM renderer, that takes an instance of CardKit and renders either a standalone image, or a pre-packaged UI for editing the image
- [`CardKitServer`](#cardkitserver): A server renderer, that allows you to take an instance of CardKit and render it into an image on a Node.js server

Additionally, a base class allows you to create your own renderers. See more in the [Custom Renderers](#custom-renderers) section.

**For version 1, see the [`v1-master`](https://github.com/times/cardkit/tree/v1-master) branch**

## Installation

`$ npm install cardkit --save`


## Running locally

To run a sample UI locally, run: `$ npm start`

You can optionally pass a port like so: `$ npm start -- --port=8080`


## Configuring

See the Wiki for all the available options for your configuration.


## Usage

#### Browser with Webpack / Browserify usage
  
    // Load CardKit and CardKit DOM
    const CardKit = require('cardkit');
    const CardKitDOM = require('cardkit/dom');
    
    // Base configuration object - see `./examples/configurations` for examples
    var configuration = {};

    // Optional themes object - see `./examples/configurations` for examples
    var themes = {};

    // Optional layouts object - see `./examples/configurations` for examples
    var layouts = {};

    // Initialise CardKit
    var cardkit = new CardKit(configuration, {
      themes: themes,
      layouts: layouts
    });

    // Initialise Renderer
    var renderer = new CardKitDOM(cardkit);

    // To render the card only (with optional theme / layout overrides)
    renderer.renderCard('card', {
      theme: 'Alt',
      layout: 'Square'
    });

    // OR To render the editing UI
    renderer.renderUI('card');


#### Browser with `<script>` tag usage
  
    <!-- Load in React from a CDN (or similar) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.min.js"></script>

    <!-- Load in the CardKit and CardKitDOM Libraries -->
    <script type="text/javascript" src="url/to/cardkit.js"></script>
    <script type="text/javascript" src="url/to/cardkit-dom.js"></script>

    <!-- Your container element to render into -->
    <div id="card"></div>

    <script type="text/javascript">
      // Base configuration object - see `./examples/configurations` for examples
      var configuration = {};

      // Optional themes object - see `./examples/configurations` for examples
      var themes = {};

      // Optional layouts object - see `./examples/configurations` for examples
      var layouts = {};

      // Initialise CardKit
      var cardkit = new CardKit(configuration, {
        themes: themes,
        layouts: layouts
      });

      // Initialise Renderer
      var renderer = new CardKitDOM(cardkit);

      // To render the card only (with optional theme / layout overrides)
      renderer.renderCard('card', {
        theme: 'Alt',
        layout: 'Square'
      });

      // OR To render the editing UI
      renderer.renderUI('card');
    </script>


#### Server usage

    // Require CardKit and CardKitServer
    const CardKit = require('cardkit');
    const CardKitServer = require('cardkit/server');

    // Base configuration object - see `./examples/configurations` for examples
    const configuration = {};

    // Initialise CardKit
    const cardkit = new CardKit(configuration);

    // Initialise Renderer
    var renderer = new CardKitServer(cardkit);

    // Render to image
    renderer.renderToImage(2)
           .then((image) => {
              // Do what you want with the image here...
              console.log('<img src="data:image/png;base64,' + image + '" />');
              process.exit();
           })
           .catch((e) => {
              console.log('[ERR]', e);
              process.exit();
           });


## APIs

### CardKit

#### `new CardKit(configuration, options)`

> Initialisation. Pass in a required configuration object, and optional themes, templates and layouts

#### `cardkit.updateConfiguration(configuration, options, rerender)`

> Updates the configuration in your instance of CardKit. Can optionally rerender with a flag if previously rendered (supported in CardKitDOM).

#### `cardkit.computeConfiguration(options)`

> Computes a configuaration object, optionally accepting a named template, theme and layout. These get merged into the base configuration and returned.


### CardKitDOM

#### `new CardKitDOM(cardkit)`

> Accepts an instance of CardKit and initialises the renderer

#### `cardkit.renderUI(id, overrides)`

> Renders the include user interface to the specified DOM element

#### `cardkit.renderCard(id)`

> Renders just the card in it's SVG form to the specified DOM element

#### `cardkit.rerender()`

> Will re-render the existing UI or card

#### `cardkit.download(scale, element)`

> Downloads the image to your local machine. Accepts a scale (default=2), and an element to grab from. If not provided it will fall back to the existing card being rendererd (if `renderCard()` was used).


### CardKitServer

#### `new CardKitDOM(cardkit)`

> Accepts an instance of CardKit and initialises the renderer

#### `cardkit.renderToString()`

> Renders the card to a HTML string (e.g. `<svg...></svg>`)

#### `cardkit.renderToImage(scale)`

> Renders the card to an image returning a Promise containing the image as a base64 string


## Custom Renderers

A base class `CardKitRenderer` allows you to create your own renderer for CardKit. For example, CardKitDOM currently uses SVG to create the card, and React to render the UI. You may, however, wish to render your card using HTML canvas, or build a UI using Vue.js. Creating a custom renderer is a good way to achieve this. Below is a brief example of how you might achieve this:

    class CardKitCanvas extends CardKitRenderer {

      renderCard () {
        // Canvas-specific code here
      }

      rerender () { // A method that `CardKit` calls if the base configuration object is updated
        // Handle an update to the base configuration, e.g. you may want to re-render the canvas element here
      }

      yourCustomMethod () {
        // You can implement any custom methods here, for example you may wish to expose or manipulate the <canvas> element for other users to take advantage of
      }

    }

    const cardkit = new CardKit(configuration);

    const renderer = new CardKitCanvas(cardkit);

    renderer.yourCustomMethod();


## Custom Fonts

CardKit allows you to load in custom fonts for use on your cards, see the Wiki for details. These need to be encoded into base64 format. If you wish to use a Google font, you can use the [googlefontcss64](https://www.npmjs.com/package/googlefontcss64) library to generate a base64 version of any Google font.


## Upgrading from v1.x

Upgrading from v1.x to v2 should be a fairly straightforward process if you haven't made any major modifications to the v1.x user interface. Your configuration object from v1.x should be compatible with v2 with a few minor tweaks. Specific variations are available in the Wiki.


## Tests

To trigger the test suite, run `$ npm run test`