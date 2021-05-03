// Dependencies
const React = require('react');
const ReactDOM = require('react-dom');
const Card = require('../shared/Card');
const CardKitRenderer = require('../shared/base');
const UI = require('./ui/ui');
const SVGToImage = require('./svgToImage');
const { slugify } = require('../../helpers');

/**
 * @name CardKitDOM
 * @class Additional CardKit class used for rendering in the DOM
 */
class CardKitDOM extends CardKitRenderer {

  /**
   * Constructor takes in an instance of CardKit and stores it for later use
   *
   * @param {CardKit} cardkit - An instance of CardKit
   */
  constructor (cardkit) {
    // Ensure we're operating in a browser environment
    if (typeof document === 'undefined') {
      throw new Error('CardKitDOM can only be used in a browser environment');
    }

    super(cardkit);

    // Store render IDs
    this.renderedCardID = null;
    this.renderedUIID = null;
  }

  /**
   * Renders the built-in UI to the supplied element
   *
   * @param {string} id - The ID of the element to render the UI into
   */
  renderUI (id) {
    if (!this._isValidElement(id)) {
      throw new Error('Invalid element ID provided');
    }

    const element = document.getElementById(id);

    const template = ((this.cardkit.templates) ? Object.keys(this.cardkit.templates)[0] : false);
    const theme = ((this.cardkit.themes) ? Object.keys(this.cardkit.themes)[0] : false);
    const layout = ((this.cardkit.layouts) ? Object.keys(this.cardkit.layouts)[0] : false);

    this.renderedUIID = id;
    ReactDOM.render(
      React.createElement(UI, {
        configuration: this.computeConfiguration({
          template: template,
          theme: theme,
          layout: layout
        }),
        templates: this.cardkit.templates,
        themes: this.cardkit.themes,
        layouts: this.cardkit.layouts,
        cardKit: this
      }),
      element
    );
  }

  /**
   * Renders just the Card as a React component to the supplied element
   *
   * @param {string} id - The ID of the element to render the card into
   * @param {object} options - Any override data (e.g. theme, layout) to use when rendering the card
   */
  renderCard (id, options) {
    if (!this._isValidElement(id)) {
      throw new Error('Invalid element ID provided');
    }

    const element = document.getElementById(id);

    this.renderedCardID = id;

    ReactDOM.render(
      React.createElement(Card, {configuration: this.computeConfiguration(options)}),
      element
    );
  }

  /**
   * Checks if the ID provided is valid
   *
   * @param {string} id - The ID to validate
   * @return {boolean} If the ID was valid
   */
  _isValidElement (id) {
    if (!id) {
      return false;
    }

    const element = document.getElementById(id);
    if (!element) {
      return false;
    }

    return true;
  }

  /**
   * Re-renders the Card or UI
   */
  rerender () {
    if (this.renderedUIID) {
      this.renderUI(this.renderedUIID);
    }

    if (this.renderedCardID) {
      this.renderCard(this.renderedCardID);
    }
  }

  /**
   * Downloads the card as an image in the browser
   *
   * @param {number} scale - The scale to output at
   * @param {object} element - The element to use to generate the image
   */
  download (scale = 2, element) {
    element = element.childNodes[0] || document.getElementById(this.renderedCardID).childNodes[0];

    const svgToImage = new SVGToImage(element);

    // Setup default filename
    let filename = 'cardkit-default.jpg';

    // Get the configuration
    const configuration = this.computeConfiguration();

    // If there's a layer that has the useAsFilename property, find it
    const filenameLayerKey = Object.keys(configuration.layers)
                                   .find((key) => {
                                     const layer = configuration.layers[key];

                                     return (layer.useAsFilename === true) && // Has the useAsFilename property
                                            (layer.hidden !== true) && // Is not hidden
                                            (layer.type === 'text'); // Is of type text
                                   });

    // Get the layer that has the filename on it
    const filenameLayer = configuration.layers[filenameLayerKey];

    // Update the filename
    if (filenameLayer) {
      filename = slugify(filenameLayer.text) + '.jpg';
    }

    // Trigger the download
    svgToImage.download(filename, {
      format: 'image/jpeg',
      scale: scale
    });
  }
}

module.exports = CardKitDOM
