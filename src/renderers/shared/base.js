// Dependencies
const CardKit = require('../../cardkit');

/**
 * @name CardKitRenderer
 * @class
 */
class CardKitRenderer {

  /**
   * Constructor takes in an instance of CardKit and stores it for later user
   *
   * @param {CardKit} cardkit - An instance of CardKit
   */
  constructor (cardkit) {
    // Ensure we recieve a CardKit object
    if (!cardkit) {
      throw new Error('An instance of CardKit was not provided');
    }

    // Validate the instance of CardKit supplied is good
    if (
      !(cardkit instanceof CardKit) &&
      (cardkit.constructor.name !== 'CardKit')
    ) {
      throw new Error('Invalid CardKit object provided');
    }

    this.cardkit = cardkit;

    this.cardkit.addRenderer(this);
  }

  /**
   * Re-render
   */
  rerender () { return; }

  /**
   * Compute the configuration of the supplied CardKit object
   *
   * @param {object} options - The options to compute the configuration with
   *
   * @return {object} The configuration object
   */
  computeConfiguration (options = false) {
    return this.cardkit.computeConfiguration(options);
  }

}

module.exports = CardKitRenderer;
