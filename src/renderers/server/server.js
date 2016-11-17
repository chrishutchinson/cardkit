// Dependencies
const btoa = require('btoa');
const svg2png = require('svg2png');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Card = require('../shared/Card');
const CardKitRenderer = require('../shared/base');
const helpers = require('../../helpers');

/**
 * @name CardKitServer
 * @class Additional CardKit class used for rendering on the server
 */
class CardKitServer extends CardKitRenderer {

  /**
   * Constructor takes in an instance of CardKit and stores it for later user
   *
   * @param {CardKit} cardkit - An instance of CardKit
   */
  constructor (cardkit) {
    // Ensure we're operating in a server environment
    if (typeof document !== 'undefined') {
      throw new Error('CardKitServer can only be used in a server environment');
    }

    super(cardkit);
  }

  /**
   * Renders the card as an SVG string <svg ..></svg>
   *
   * @return {string} The SVG string representation of the image
   */
  renderToString () {
    const string = ReactDOMServer.renderToString(
                      React.createFactory(Card)({
                        configuration: this.computeConfiguration()
                      }),
                      {}
                    );

    return string;
  }

  /**
   * Renders the current configuration to an image
   *
   * @param {number} scale - The scale to output at
   */
  renderToImage (scale = 2) {
    // Get the SVG in string-form
    const string = this.renderToString();

    // Encode the string into a data URI
    const uri = helpers.svgToBase64(string, btoa);

    // Convert to png and fulfill promise
    return svg2png(uri, {
      width: this.computeConfiguration().card.width * scale,
      height: this.computeConfiguration().card.height * scale
    })
    .then((buffer) => {
      return buffer.toString('base64');
    });
  }

}

module.exports = CardKitServer;
