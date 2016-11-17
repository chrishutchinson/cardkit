const deepExtend = require('deep-extend');

/**
 * @name CardKit
 * @class Core CardKit class used for managing a single card instance
 */
class CardKit {

  /**
   * Constructor takes in the configuration and stores it for later user
   *
   * @param {object} configuration - The configuration object to initialise the CardKit image with.
   * @param {object} options - The additional options for use
   */
  constructor (configuration, options = false) {
    if (!configuration) {
      throw new Error('A configuration object was not provided')
    }

    if (!this._isValidConfiguration(configuration)) {
      throw new Error('Invalid configuration object provided')
    }

    // Store the configuration
    this.configuration = configuration;

    // Configure the options
    this._configureOptions(options);

    // Setup an empty array of renderers
    this.renderers = [];
  }

  /**
   * Configures the supplied options on this instance of CardKit
   *
   * @param {object} options - The options to configure
   */
  _configureOptions (options) {
    if (options) {
      if (options.templates) {
        if (!this._isValidTemplatesConfiguration(options.templates)) {
          throw new Error('Invalid templates configuration object provided');
        }

        this.templates = options.templates
      } else {
        this.templates = null;
      }

      if (options.themes) {
        if (!this._isValidThemesConfiguration(options.themes)) {
          throw new Error('Invalid themes configuration object provided');
        }

        this.themes = options.themes
      } else {
        this.themes = null;
      }

      if (options.layouts) {
        if (!this._isValidLayoutsConfiguration(options.layouts)) {
          throw new Error('Invalid layouts configuration object provided');
        }

        this.layouts = options.layouts
      } else {
        this.layouts = null;
      }
    }
  }

  /**
   * Validates the provided configuration object
   *
   * @param {object} configuration - The configuration object to validate
   *
   * @return {boolean} Is the configuration object valid
   */
  _isValidConfiguration (configuration) {
    return (typeof configuration === 'object') && // Should be an object
           (typeof configuration.card !== 'undefined') && // Should have a card property
           (typeof configuration.card === 'object') && // Card property should be an object
           (typeof configuration.card.height !== 'undefined') && // Should have a height
           (typeof configuration.card.width !== 'undefined'); // Should have a width
  }

  /**
   * Validates the provided templates configuration object
   *
   * @param {object} configuration - The templates configuration object to validate
   *
   * @return {boolean} Is the templates configuration object valid
   */
  _isValidTemplatesConfiguration (templates) {
    return (typeof templates === 'object'); // Should be an object
  }

  /**
   * Validates the provided themes configuration object
   *
   * @param {object} configuration - The themes configuration object to validate
   *
   * @return {boolean} Is the themes configuration object valid
   */
  _isValidThemesConfiguration (themes) {
    return (typeof themes === 'object'); // Should be an object
  }

  /**
   * Validates the provided layouts configuration object
   *
   * @param {object} configuration - The layouts configuration object to validate
   *
   * @return {boolean} Is the layouts configuration object valid
   */
  _isValidLayoutsConfiguration (layouts) {
    return (typeof layouts === 'object'); // Should be an object
  }

  /**
   * Validates the supplied renderer
   *
   * @param {object} renderer - The renderer to validate
   *
   * @return {boolean} If the renderer is valid
   */
  _isValidRenderer (renderer) {
    return (renderer.cardkit === this);
  }

  /**
   * Compute the configuration
   *
   * @param {object} options - Any options (e.g. a specific theme and / or layout) to use when computing the configuration
   *
   * @return {object} The computed configuration
   */
  computeConfiguration (options = null) {
    // Get the base configuration
    let configuration = Object.assign({}, this.configuration);

    // If we got options supplied
    if (options) {
      if (options.template && typeof this.templates[options.template] !== 'undefined') {
        // Get the template based on the name and merge it onto the base configuration
        configuration = deepExtend(configuration, this.templates[options.template]);
      }

      if (options.theme && typeof this.themes[options.theme] !== 'undefined') {
        // Get the theme based on the name and merge it onto the base configuration
        configuration = deepExtend(configuration, this.themes[options.theme]);
      }

      if (options.layout && typeof this.layouts[options.layout] !== 'undefined') {
        // Get the layout based on the name and merge it onto the base configuration
        configuration = deepExtend(configuration, this.layouts[options.layout]);
      }
    }

    // Return the computed configuration
    return configuration;
  }

  /**
   * Updates the configuration, and optionally rerenders the image (if previously rendered)
   *
   * @param {object} configuration - The configuration object to update to
   * @param {object} options - Any options to supply (templates, themes, layouts)
   * @param {boolean} rerender - Whether or not to attempt to rerender the image
   */
  updateConfiguration (configuration, options = { layouts: null, templates: null, themes: null }, rerender = true) {
    this.configuration = configuration;

    this._configureOptions(options);

    if (rerender) {
      const renderers = this.getRenderers();

      renderers.forEach((renderer) => {
        switch (renderer.constructor.name) {
          case 'CardKitDOM':
            renderer.rerender();
            break;
        }
      });
    }
  }

  /**
   * Get the renderers
   *
   * @return {array} The configured renderers
   */
  getRenderers () {
    return this.renderers;
  }

  /**
   * Add a renderer
   *
   * @param {object} renderer - A renderer to add
   */
  addRenderer (renderer) {
    if (!this._isValidRenderer(renderer)) {
      throw new Error('Invalid renderer object provided')
    }

    this.renderers.push(renderer);
  }
}

// Export it
module.exports = CardKit

// Add it to the window object if we have one
if (typeof window !== 'undefined') {
  window.CardKit = CardKit
}
