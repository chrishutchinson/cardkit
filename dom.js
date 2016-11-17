(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("rvg.js"), require("deep-extend"), require("react-color"));
	else if(typeof define === 'function' && define.amd)
		define("CardKitDOM", ["react", "react-dom", "rvg.js", "deep-extend", "react-color"], factory);
	else if(typeof exports === 'object')
		exports["CardKitDOM"] = factory(require("react"), require("react-dom"), require("rvg.js"), require("deep-extend"), require("react-color"));
	else
		root["CardKitDOM"] = factory(root["react"], root["react-dom"], root["rvg.js"], root["deep-extend"], root["react-color"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_30__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Dependencies
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Card = __webpack_require__(3);
	var CardKitRenderer = __webpack_require__(5);
	var UI = __webpack_require__(8);
	var SVGToImage = __webpack_require__(49);

	var _require = __webpack_require__(28);

	var slugify = _require.slugify;

	/**
	 * @name CardKitDOM
	 * @class Additional CardKit class used for rendering in the DOM
	 */

	var CardKitDOM = function (_CardKitRenderer) {
	  _inherits(CardKitDOM, _CardKitRenderer);

	  /**
	   * Constructor takes in an instance of CardKit and stores it for later use
	   *
	   * @param {CardKit} cardkit - An instance of CardKit
	   */
	  function CardKitDOM(cardkit) {
	    _classCallCheck(this, CardKitDOM);

	    // Ensure we're operating in a browser environment
	    if (typeof document === 'undefined') {
	      throw new Error('CardKitDOM can only be used in a browser environment');
	    }

	    // Store render IDs
	    var _this = _possibleConstructorReturn(this, (CardKitDOM.__proto__ || Object.getPrototypeOf(CardKitDOM)).call(this, cardkit));

	    _this.renderedCardID = null;
	    _this.renderedUIID = null;
	    return _this;
	  }

	  /**
	   * Renders the built-in UI to the supplied element
	   *
	   * @param {string} id - The ID of the element to render the UI into
	   */


	  _createClass(CardKitDOM, [{
	    key: 'renderUI',
	    value: function renderUI(id) {
	      if (!this._isValidElement(id)) {
	        throw new Error('Invalid element ID provided');
	      }

	      var element = document.getElementById(id);

	      var template = this.cardkit.templates ? Object.keys(this.cardkit.templates)[0] : false;
	      var theme = this.cardkit.themes ? Object.keys(this.cardkit.themes)[0] : false;
	      var layout = this.cardkit.layouts ? Object.keys(this.cardkit.layouts)[0] : false;

	      this.renderedUIID = id;
	      ReactDOM.render(React.createElement(UI, {
	        configuration: this.computeConfiguration({
	          template: template,
	          theme: theme,
	          layout: layout
	        }),
	        templates: this.cardkit.templates,
	        themes: this.cardkit.themes,
	        layouts: this.cardkit.layouts,
	        cardKit: this
	      }), element);
	    }

	    /**
	     * Renders just the Card as a React component to the supplied element
	     *
	     * @param {string} id - The ID of the element to render the card into
	     * @param {object} options - Any override data (e.g. theme, layout) to use when rendering the card
	     */

	  }, {
	    key: 'renderCard',
	    value: function renderCard(id, options) {
	      if (!this._isValidElement(id)) {
	        throw new Error('Invalid element ID provided');
	      }

	      var element = document.getElementById(id);

	      this.renderedCardID = id;

	      ReactDOM.render(React.createElement(Card, { configuration: this.computeConfiguration(options) }), element);
	    }

	    /**
	     * Checks if the ID provided is valid
	     *
	     * @param {string} id - The ID to validate
	     * @return {boolean} If the ID was valid
	     */

	  }, {
	    key: '_isValidElement',
	    value: function _isValidElement(id) {
	      if (!id) {
	        return false;
	      }

	      var element = document.getElementById(id);
	      if (!element) {
	        return false;
	      }

	      return true;
	    }

	    /**
	     * Re-renders the Card or UI
	     */

	  }, {
	    key: 'rerender',
	    value: function rerender() {
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

	  }, {
	    key: 'download',
	    value: function download() {
	      var scale = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];
	      var element = arguments[1];

	      element = element.childNodes[0] || document.getElementById(this.renderedCardID).childNodes[0];

	      var svgToImage = new SVGToImage(element);

	      // Setup default filename
	      var filename = 'cardkit-default.jpg';

	      // Get the configuration
	      var configuration = this.computeConfiguration();

	      // If there's a layer that has the useAsFilename property, find it
	      var filenameLayerKey = Object.keys(configuration.layers).find(function (key) {
	        var layer = configuration.layers[key];

	        return layer.useAsFilename === true && // Has the useAsFilename property
	        layer.hidden !== true && // Is not hidden
	        layer.type === 'text'; // Is of type text
	      });

	      // Get the layer that has the filename on it
	      var filenameLayer = configuration.layers[filenameLayerKey];

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
	  }]);

	  return CardKitDOM;
	}(CardKitRenderer);

	module.exports = CardKitDOM;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// RVG Elements

	var _require = __webpack_require__(4);

	var SVG = _require.SVG;
	var Text = _require.Text;
	var Rectangle = _require.Rectangle;
	var Circle = _require.Circle;
	var Ellipse = _require.Ellipse;
	var Line = _require.Line;
	var Image = _require.Image;
	var Path = _require.Path;
	var LinearGradient = _require.LinearGradient;

	/**
	 * @name Card
	 * @class The Card React element
	 */

	var Card = function (_React$Component) {
	  _inherits(Card, _React$Component);

	  function Card() {
	    _classCallCheck(this, Card);

	    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	  }

	  _createClass(Card, [{
	    key: 'calculateYPosition',


	    /**
	     * Calculates the Y position of an element based on any attachments etc.
	     *
	     * @param {object} layers - The object of all layers
	     * @param {object} layer - The layer to calculate the Y position for
	     *
	     * @return {integer} The Y position
	     */
	    value: function calculateYPosition(layers, layer) {
	      // Get the layer's currently configured Y position
	      var attachYLayerPosition = this.getLayerValue(layers, layer, 'y');

	      // If this is an object and has the attach property
	      if ((typeof attachYLayerPosition === 'undefined' ? 'undefined' : _typeof(attachYLayerPosition)) === 'object' && attachYLayerPosition.attach !== 'undefined') {
	        // Get the layer to attach to
	        var attachYLayer = layers[layer.y.attach];

	        // Calculate the Y offset
	        var attachYLayerHeight = 0;
	        switch (attachYLayer.type) {
	          case 'text':
	            var attachYLayerText = attachYLayer.text.split('\n');
	            if (attachYLayer.text !== '') {
	              attachYLayerHeight = attachYLayerText.length * (this.getLayerValue(layers, attachYLayer, 'lineHeight') || this.getLayerValue(layers, attachYLayer, 'fontSize'));
	            }
	            break;
	          default:
	            if (typeof this.getLayerValue(layers, attachYLayer, 'height') !== 'undefined') {
	              attachYLayerHeight = this.getLayerValue(layers, attachYLayer, 'height');
	            }
	            break;
	        }

	        // Add any additionally configured offset value
	        var attachYLayerOffset = layer.y.offset || 0;

	        // Add them together and recursively call this function if the next layer has an attachment
	        attachYLayerPosition = attachYLayerHeight + this.calculateYPosition(layers, attachYLayer) + attachYLayerOffset;
	      }

	      // Return the value
	      return attachYLayerPosition;
	    }

	    /**
	     * Returns the value for a given layer property
	     *
	     * @param {object} layers - The object of all layers
	     * @param {object} layer - The layer to get the value for
	     * @param {object} key - The key of the value to get from the layer
	     *
	     * @return {mixed} The value of the property on the layer
	     */

	  }, {
	    key: 'getLayerValue',
	    value: function getLayerValue(layers, layer, key) {
	      if (typeof layer[key] === 'function') {
	        return layer[key](layers, this.refs.svg);
	      }

	      return layer[key];
	    }

	    /**
	     * Compute the gradient elements to render to the <defs> element
	     *
	     * @param {object} layers - The configuration object representing the layers that may require gradients
	     *
	     * @return {array} An array of React elements to render to the <defs> element
	     */

	  }, {
	    key: 'computeGradients',
	    value: function computeGradients(layers) {
	      var _this2 = this;

	      var array = [];
	      var layer = void 0,
	          gradient = void 0;

	      Object.keys(layers).forEach(function (key) {
	        layer = layers[key];

	        if (_this2.getLayerValue(layers, layer, 'gradient')) {
	          gradient = _this2.getLayerValue(layers, layer, 'gradient');

	          array.push(React.createElement(LinearGradient, { key: key,
	            name: key,
	            x1: 0, x2: 0,
	            y1: 0, y2: 1,
	            stops: gradient }));
	        }
	      });

	      return array;
	    }

	    /**
	     * Compute the layers to render on the Card
	     *
	     * @param {object} layers - The configuration object representing the layers to render
	     *
	     * @return {array} An array of React elements to render on the card
	     */

	  }, {
	    key: 'computeLayers',
	    value: function computeLayers(layers) {
	      var _this3 = this;

	      var array = [];
	      var layer = void 0;

	      // Iterate over the layers
	      Object.keys(layers).forEach(function (key) {
	        layer = layers[key];

	        // If the layer is hidden, ignore it
	        if (_this3.getLayerValue(layers, layer, 'hidden') === true) {
	          return;
	        };

	        // Setup an object to contain our layer data
	        var layerData = {};

	        // Iterate over the properties of the layer, and compute the value (handles getters, functions, and object implementations such as `y`)
	        Object.keys(layer).forEach(function (k) {
	          layerData[k] = _this3.getLayerValue(layers, layer, k);
	        });

	        // Make the fill value map to a gradient name, if a gradient has been configured
	        // See computeGradients() for the creation of gradient definitions
	        if (_this3.getLayerValue(layer, 'gradient', layers)) {
	          layerData.fill = 'url(#' + key + ')';
	        }

	        // Switch over the layer type to ensure we create the card correctly
	        switch (layer.type) {
	          case 'text':
	            // Split by newline
	            var text = layerData.text.split('\n');

	            array.push(React.createElement(
	              Text,
	              { x: layerData.x,
	                y: _this3.calculateYPosition(layers, layerData),
	                fontFamily: layerData.fontFamily,
	                fontSize: layerData.fontSize,
	                lineHeight: layerData.lineHeight,
	                textAnchor: layerData.textAnchor,
	                fill: layerData.fill,
	                draggable: layerData.draggable,
	                transform: layerData.transform,
	                opacity: layerData.opacity,
	                smartQuotes: layerData.smartQuotes,
	                key: key },
	              text
	            ));
	            break;
	          case 'image':
	            array.push(React.createElement(Image, { x: layerData.x,
	              y: _this3.calculateYPosition(layers, layerData),
	              href: layerData.src,
	              height: layerData.height,
	              width: layerData.width,
	              draggable: layerData.draggable,
	              transform: layerData.transform,
	              opacity: layerData.opacity,
	              key: key }));
	            break;
	          case 'rectangle':
	            array.push(React.createElement(Rectangle, { x: layerData.x,
	              y: _this3.calculateYPosition(layers, layerData),
	              fill: layerData.fill,
	              height: layerData.height,
	              width: layerData.width,
	              draggable: layerData.draggable,
	              transform: layerData.transform,
	              key: key }));
	            break;
	          case 'circle':
	            array.push(React.createElement(Circle, { x: layerData.x,
	              y: _this3.calculateYPosition(layers, layerData),
	              fill: layerData.fill,
	              radius: layerData.radius,
	              draggable: layerData.draggable,
	              transform: layerData.transform,
	              key: key }));
	            break;
	          case 'ellipse':
	            array.push(React.createElement(Ellipse, { x: layerData.x,
	              y: _this3.calculateYPosition(layers, layerData),
	              fill: layerData.fill,
	              radiusX: layerData.radiusX,
	              radiusY: layerData.radiusY,
	              draggable: layerData.draggable,
	              transform: layerData.transform,
	              key: key }));
	            break;
	          case 'line':
	            array.push(React.createElement(Line, { x: [layerData.x1, layerData.x2],
	              y: [layerData.y1, layerData.y2],
	              stroke: layerData.stroke || layerData.fill,
	              draggable: layerData.draggable,
	              transform: layerData.transform,
	              key: key }));
	            break;
	          case 'path':
	            array.push(React.createElement(Path, { d: layerData.path || layerData.d,
	              fill: layerData.fill,
	              draggable: layerData.draggable,
	              transform: layerData.transform,
	              key: key }));
	            break;
	        }
	      });

	      return array;
	    }

	    /**
	     * Compute the fonts needed for the card
	     *
	     * @param {object} fonts - The fonts to use when rendering this card
	     *
	     * @return {array} An array of React elements to render in the <defs /> element of the SVG
	     */

	  }, {
	    key: 'computeFonts',
	    value: function computeFonts() {
	      var fonts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var array = [];
	      var font = void 0;

	      Object.keys(fonts).forEach(function (key, index) {
	        font = fonts[key];
	        array.push(React.createElement(
	          'style',
	          { key: index },
	          '@font-face {\n              font-family: "' + key + '";\n              src: url(' + font + ') format("woff");\n              font-weight: normal;\n              font-style: normal;\n          }'
	        ));
	      });

	      return array;
	    }

	    /**
	     * Renders the card
	     *
	     * @return {object} JSX for the React Component
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      // Grab our configuration
	      var _props$configuration = this.props.configuration;
	      var card = _props$configuration.card;
	      var fonts = _props$configuration.fonts;
	      var layers = _props$configuration.layers;

	      // Compute layers, gradients and fonts

	      var layerArray = this.computeLayers(layers);
	      var gradientsArray = this.computeGradients(layers);
	      var fontsArray = this.computeFonts(fonts);

	      // Return
	      return React.createElement(
	        'div',
	        { className: 'card', ref: 'svg', style: { maxWidth: card.width, maxHeight: card.height } },
	        React.createElement(
	          SVG,
	          { height: card.height, width: card.width, fill: card.fill },
	          React.createElement(
	            'defs',
	            null,
	            fontsArray,
	            gradientsArray
	          ),
	          layerArray
	        )
	      );
	    }
	  }]);

	  return Card;
	}(React.Component);

	Card.propTypes = {
	  configuration: React.PropTypes.shape({
	    card: React.PropTypes.object,
	    fonts: React.PropTypes.object,
	    layers: React.PropTypes.object
	  })
	};

	// Export
	module.exports = Card;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Dependencies
	var CardKit = __webpack_require__(6);

	/**
	 * @name CardKitRenderer
	 * @class
	 */

	var CardKitRenderer = function () {

	  /**
	   * Constructor takes in an instance of CardKit and stores it for later user
	   *
	   * @param {CardKit} cardkit - An instance of CardKit
	   */
	  function CardKitRenderer(cardkit) {
	    _classCallCheck(this, CardKitRenderer);

	    // Ensure we recieve a CardKit object
	    if (!cardkit) {
	      throw new Error('An instance of CardKit was not provided');
	    }

	    // Validate the instance of CardKit supplied is good
	    if (!(cardkit instanceof CardKit) && cardkit.constructor.name !== 'CardKit') {
	      throw new Error('Invalid CardKit object provided');
	    }

	    this.cardkit = cardkit;

	    this.cardkit.addRenderer(this);
	  }

	  /**
	   * Re-render
	   */


	  _createClass(CardKitRenderer, [{
	    key: 'rerender',
	    value: function rerender() {
	      return;
	    }

	    /**
	     * Compute the configuration of the supplied CardKit object
	     *
	     * @param {object} options - The options to compute the configuration with
	     *
	     * @return {object} The configuration object
	     */

	  }, {
	    key: 'computeConfiguration',
	    value: function computeConfiguration() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	      return this.cardkit.computeConfiguration(options);
	    }
	  }]);

	  return CardKitRenderer;
	}();

	module.exports = CardKitRenderer;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var deepExtend = __webpack_require__(7);

	/**
	 * @name CardKit
	 * @class Core CardKit class used for managing a single card instance
	 */

	var CardKit = function () {

	  /**
	   * Constructor takes in the configuration and stores it for later user
	   *
	   * @param {object} configuration - The configuration object to initialise the CardKit image with.
	   * @param {object} options - The additional options for use
	   */
	  function CardKit(configuration) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    _classCallCheck(this, CardKit);

	    if (!configuration) {
	      throw new Error('A configuration object was not provided');
	    }

	    if (!this._isValidConfiguration(configuration)) {
	      throw new Error('Invalid configuration object provided');
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


	  _createClass(CardKit, [{
	    key: '_configureOptions',
	    value: function _configureOptions(options) {
	      if (options) {
	        if (options.templates) {
	          if (!this._isValidTemplatesConfiguration(options.templates)) {
	            throw new Error('Invalid templates configuration object provided');
	          }

	          this.templates = options.templates;
	        } else {
	          this.templates = null;
	        }

	        if (options.themes) {
	          if (!this._isValidThemesConfiguration(options.themes)) {
	            throw new Error('Invalid themes configuration object provided');
	          }

	          this.themes = options.themes;
	        } else {
	          this.themes = null;
	        }

	        if (options.layouts) {
	          if (!this._isValidLayoutsConfiguration(options.layouts)) {
	            throw new Error('Invalid layouts configuration object provided');
	          }

	          this.layouts = options.layouts;
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

	  }, {
	    key: '_isValidConfiguration',
	    value: function _isValidConfiguration(configuration) {
	      return (typeof configuration === 'undefined' ? 'undefined' : _typeof(configuration)) === 'object' && // Should be an object
	      typeof configuration.card !== 'undefined' && // Should have a card property
	      _typeof(configuration.card) === 'object' && // Card property should be an object
	      typeof configuration.card.height !== 'undefined' && // Should have a height
	      typeof configuration.card.width !== 'undefined'; // Should have a width
	    }

	    /**
	     * Validates the provided templates configuration object
	     *
	     * @param {object} configuration - The templates configuration object to validate
	     *
	     * @return {boolean} Is the templates configuration object valid
	     */

	  }, {
	    key: '_isValidTemplatesConfiguration',
	    value: function _isValidTemplatesConfiguration(templates) {
	      return (typeof templates === 'undefined' ? 'undefined' : _typeof(templates)) === 'object'; // Should be an object
	    }

	    /**
	     * Validates the provided themes configuration object
	     *
	     * @param {object} configuration - The themes configuration object to validate
	     *
	     * @return {boolean} Is the themes configuration object valid
	     */

	  }, {
	    key: '_isValidThemesConfiguration',
	    value: function _isValidThemesConfiguration(themes) {
	      return (typeof themes === 'undefined' ? 'undefined' : _typeof(themes)) === 'object'; // Should be an object
	    }

	    /**
	     * Validates the provided layouts configuration object
	     *
	     * @param {object} configuration - The layouts configuration object to validate
	     *
	     * @return {boolean} Is the layouts configuration object valid
	     */

	  }, {
	    key: '_isValidLayoutsConfiguration',
	    value: function _isValidLayoutsConfiguration(layouts) {
	      return (typeof layouts === 'undefined' ? 'undefined' : _typeof(layouts)) === 'object'; // Should be an object
	    }

	    /**
	     * Validates the supplied renderer
	     *
	     * @param {object} renderer - The renderer to validate
	     *
	     * @return {boolean} If the renderer is valid
	     */

	  }, {
	    key: '_isValidRenderer',
	    value: function _isValidRenderer(renderer) {
	      return renderer.cardkit === this;
	    }

	    /**
	     * Compute the configuration
	     *
	     * @param {object} options - Any options (e.g. a specific theme and / or layout) to use when computing the configuration
	     *
	     * @return {object} The computed configuration
	     */

	  }, {
	    key: 'computeConfiguration',
	    value: function computeConfiguration() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	      // Get the base configuration
	      var configuration = Object.assign({}, this.configuration);

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

	  }, {
	    key: 'updateConfiguration',
	    value: function updateConfiguration(configuration) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? { layouts: null, templates: null, themes: null } : arguments[1];
	      var rerender = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	      this.configuration = configuration;

	      this._configureOptions(options);

	      if (rerender) {
	        var renderers = this.getRenderers();

	        renderers.forEach(function (renderer) {
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

	  }, {
	    key: 'getRenderers',
	    value: function getRenderers() {
	      return this.renderers;
	    }

	    /**
	     * Add a renderer
	     *
	     * @param {object} renderer - A renderer to add
	     */

	  }, {
	    key: 'addRenderer',
	    value: function addRenderer(renderer) {
	      if (!this._isValidRenderer(renderer)) {
	        throw new Error('Invalid renderer object provided');
	      }

	      this.renderers.push(renderer);
	    }
	  }]);

	  return CardKit;
	}();

	// Export it


	module.exports = CardKit;

	// Add it to the window object if we have one
	if (typeof window !== 'undefined') {
	  window.CardKit = CardKit;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// Styles
	__webpack_require__(9);

	// Elements

	var _require = __webpack_require__(13);

	var Header = _require.Header;
	var Sidebar = _require.Sidebar;
	var Canvas = _require.Canvas;

	// UI class

	var UI = function (_React$Component) {
	  _inherits(UI, _React$Component);

	  function UI(props) {
	    _classCallCheck(this, UI);

	    var _this = _possibleConstructorReturn(this, (UI.__proto__ || Object.getPrototypeOf(UI)).call(this, props));

	    _this.state = {
	      configuration: _this.props.configuration,
	      template: _this.props.templates ? Object.keys(_this.props.templates)[0] : false,
	      theme: _this.props.themes ? Object.keys(_this.props.themes)[0] : false,
	      layout: _this.props.layouts ? Object.keys(_this.props.layouts)[0] : false,
	      sidebarOpen: true
	    };

	    _this.updateConfiguration = _this.updateConfiguration.bind(_this);
	    _this.updateTemplate = _this.updateTemplate.bind(_this);
	    _this.updateTheme = _this.updateTheme.bind(_this);
	    _this.updateLayout = _this.updateLayout.bind(_this);
	    _this.downloadCard = _this.downloadCard.bind(_this);
	    _this.handleSidebarChange = _this.handleSidebarChange.bind(_this);
	    return _this;
	  }

	  _createClass(UI, [{
	    key: 'updateConfiguration',
	    value: function updateConfiguration(configuration) {
	      this.setState({
	        configuration: configuration
	      });
	    }
	  }, {
	    key: 'updateTemplate',
	    value: function updateTemplate(template) {
	      var configuration = this.props.cardKit.computeConfiguration({
	        template: template,
	        theme: this.state.theme,
	        layout: this.state.layout
	      });

	      this.setState({
	        configuration: configuration,
	        template: template
	      });
	    }
	  }, {
	    key: 'updateLayout',
	    value: function updateLayout(layout) {
	      var configuration = this.props.cardKit.computeConfiguration({
	        template: this.state.template,
	        theme: this.state.theme,
	        layout: layout
	      });

	      this.setState({
	        configuration: configuration,
	        layout: layout
	      });
	    }
	  }, {
	    key: 'updateTheme',
	    value: function updateTheme(theme) {
	      var configuration = this.props.cardKit.computeConfiguration({
	        template: this.state.template,
	        theme: theme,
	        layout: this.state.layout
	      });

	      this.setState({
	        configuration: configuration,
	        theme: theme
	      });
	    }
	  }, {
	    key: 'downloadCard',
	    value: function downloadCard() {
	      // This is dumb, but allows us to get at the SVG element on the DOM, which we can then send off for download
	      this.props.cardKit.download(2, this.refs.canvas.refs.card.refs.svg);
	    }
	  }, {
	    key: 'handleSidebarChange',
	    value: function handleSidebarChange(state) {
	      this.setState({
	        sidebarOpen: state
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.updateConfiguration(nextProps.configuration);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(Header, null),
	        React.createElement(
	          'main',
	          { className: 'main' },
	          React.createElement(Sidebar, { configuration: this.state.configuration,

	            template: this.state.template,
	            templates: this.props.templates,

	            theme: this.state.theme,
	            themes: this.props.themes,

	            layout: this.state.layout,
	            layouts: this.props.layouts,

	            onConfigurationChange: this.updateConfiguration,
	            onTemplateChange: this.updateTemplate,
	            onThemeChange: this.updateTheme,
	            onLayoutChange: this.updateLayout,

	            onRequestDownload: this.downloadCard,
	            onSidebarChange: this.handleSidebarChange }),
	          React.createElement(Canvas, { ref: 'canvas',
	            sidebarOpen: this.state.sidebarOpen,
	            configuration: this.state.configuration })
	        )
	      );
	    }
	  }]);

	  return UI;
	}(React.Component);

	UI.propTypes = {
	  templates: React.PropTypes.object,
	  layouts: React.PropTypes.object,
	  themes: React.PropTypes.object,
	  cardKit: React.PropTypes.object.isRequired,
	  configuration: React.PropTypes.object.isRequired
	};

	// Export
	module.exports = UI;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./base.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./base.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "html {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.4rem;\n  margin: 0;\n  font-family: \"Open Sans\", Helvetica, sans-serif;\n  font-weight: 400; }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\nmain.main {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 5.7rem); }\n  @media screen and (min-width: 768px) {\n    main.main {\n      flex-direction: row; } }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 800;\n  margin: 0 0 0.67rem;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase; }\n\nhr {\n  border: 0;\n  border-bottom: 1px solid #bababa;\n  margin-bottom: 1.5rem; }\n\n.pull-bottom {\n  margin-left: auto; }\n  @media screen and (min-width: 768px) {\n    .pull-bottom {\n      margin-top: auto; } }\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"range\"],\ninput[type=\"file\"],\nselect,\ntextarea {\n  width: 100%;\n  border: 1px solid #eaeaea;\n  background: #FFF;\n  font-family: \"Open Sans\", Helvetica, sans-serif;\n  font-size: 1.4rem;\n  padding: 0.8rem;\n  margin: 0.2rem 0 1.5rem; }\n\ninput[type=\"range\"],\ninput[type=\"file\"] {\n  padding: 0rem;\n  border: 0; }\n\ninput[type=\"file\"] {\n  background: transparent; }\n\ntextarea {\n  min-height: 12rem; }\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  Header: __webpack_require__(14),
	  Sidebar: __webpack_require__(18),
	  Canvas: __webpack_require__(46)
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// Styles
	__webpack_require__(15);

	// Images
	var images = {
	  logo: __webpack_require__(17)
	};

	// Header class

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'header',
	        { className: 'header' },
	        React.createElement('img', { src: images.logo }),
	        React.createElement(
	          'a',
	          { href: 'http://github.com/times/cardkit', target: '_blank' },
	          'About CardKit'
	        )
	      );
	    }
	  }]);

	  return Header;
	}(React.Component);

	Header.propTypes = {};

	// Export
	module.exports = Header;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".header {\n  background: #4da5bd;\n  height: 5.7rem;\n  display: flex;\n  position: relative;\n  z-index: 10; }\n  .header img {\n    padding: 1rem;\n    margin: 0;\n    display: block;\n    width: 16.2rem;\n    height: 5.7rem; }\n  .header a {\n    margin-right: 0;\n    margin-left: auto;\n    padding: 0 2rem;\n    color: #FFFFFF;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    text-decoration: none;\n    height: 5.7rem;\n    line-height: 5.7rem; }\n    .header a:hover {\n      background: rgba(0, 0, 0, 0.4); }\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// Styles
	__webpack_require__(19);

	var _require = __webpack_require__(21);

	var Content = _require.Content;
	var Template = _require.Template;
	var Theme = _require.Theme;
	var Layout = _require.Layout;

	var PanelButton = __webpack_require__(45);

	// Sidebar class

	var Sidebar = function (_React$Component) {
	  _inherits(Sidebar, _React$Component);

	  function Sidebar(props) {
	    _classCallCheck(this, Sidebar);

	    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

	    var defaultPanel = void 0;
	    if (_this.props.templates) {
	      defaultPanel = 'template';
	    } else if (_this.props.layouts) {
	      defaultPanel = 'layout';
	    } else if (_this.props.themes) {
	      defaultPanel = 'theme';
	    } else {
	      defaultPanel = 'content';
	    }

	    _this.state = {
	      panel: defaultPanel
	    };

	    _this.handleConfigurationChange = _this.handleConfigurationChange.bind(_this);
	    _this.handleTemplateChange = _this.handleTemplateChange.bind(_this);
	    _this.handleThemeChange = _this.handleThemeChange.bind(_this);
	    _this.handleLayoutChange = _this.handleLayoutChange.bind(_this);
	    _this.updateConfiguration = _this.updateConfiguration.bind(_this);
	    _this.openPanel = _this.openPanel.bind(_this);
	    _this.isPanel = _this.isPanel.bind(_this);
	    _this.renderButton = _this.renderButton.bind(_this);
	    return _this;
	  }

	  _createClass(Sidebar, [{
	    key: 'updateConfiguration',
	    value: function updateConfiguration(e) {
	      var configuration = this.props.configuration;

	      this.props.onConfigurationChange(configuration);
	    }
	  }, {
	    key: 'openPanel',
	    value: function openPanel(panel) {
	      if (panel === this.state.panel) {
	        this.props.onSidebarChange(false);
	      } else {
	        this.props.onSidebarChange(true);
	      }

	      this.setState({
	        panel: panel === this.state.panel ? false : panel
	      });
	    }
	  }, {
	    key: 'isPanel',
	    value: function isPanel(panel) {
	      return this.state.panel === panel;
	    }
	  }, {
	    key: 'handleConfigurationChange',
	    value: function handleConfigurationChange(configuration) {
	      this.props.onConfigurationChange(configuration);
	    }
	  }, {
	    key: 'handleTemplateChange',
	    value: function handleTemplateChange(template) {
	      this.props.onTemplateChange(template);
	    }
	  }, {
	    key: 'handleThemeChange',
	    value: function handleThemeChange(theme) {
	      this.props.onThemeChange(theme);
	    }
	  }, {
	    key: 'handleLayoutChange',
	    value: function handleLayoutChange(layout) {
	      this.props.onLayoutChange(layout);
	    }
	  }, {
	    key: 'renderButton',
	    value: function renderButton(panelName, panelTitle, options) {
	      if (!options) return null;

	      return React.createElement(PanelButton, { name: panelName,
	        title: panelTitle,
	        onClick: this.openPanel,
	        active: this.isPanel(panelName) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return React.createElement(
	        'aside',
	        { className: 'sidebar' + (this.state.panel ? ' sidebar--open' : '') },
	        React.createElement(
	          'main',
	          { className: 'panels' },
	          function () {
	            if (_this2.props.templates) {
	              return React.createElement(Template, { templates: _this2.props.templates,
	                template: _this2.props.template,
	                active: _this2.isPanel('template'),
	                onTemplateChange: _this2.handleTemplateChange });
	            }
	          }(),
	          function () {
	            if (_this2.props.layouts) {
	              return React.createElement(Layout, { layouts: _this2.props.layouts,
	                layout: _this2.props.layout,
	                active: _this2.isPanel('layout'),
	                onLayoutChange: _this2.handleLayoutChange });
	            }
	          }(),
	          function () {
	            if (_this2.props.themes) {
	              return React.createElement(Theme, { themes: _this2.props.themes,
	                theme: _this2.props.theme,
	                configuration: _this2.props.configuration,
	                active: _this2.isPanel('theme'),
	                onThemeChange: _this2.handleThemeChange });
	            }
	          }(),
	          function () {
	            if (_this2.props.configuration) {
	              return React.createElement(Content, { configuration: _this2.props.configuration,
	                active: _this2.isPanel('content'),
	                onConfigurationChange: _this2.handleConfigurationChange });
	            }
	          }()
	        ),
	        React.createElement(
	          'ul',
	          { className: 'buttons' },
	          this.renderButton('template', 'Template', this.props.templates),
	          this.renderButton('layout', 'Layouts', this.props.layouts),
	          this.renderButton('theme', 'Themes', this.props.themes),
	          this.renderButton('content', 'Content', this.props.configuration),
	          React.createElement(
	            'li',
	            { className: 'pull-bottom' },
	            React.createElement(
	              'button',
	              { onClick: this.props.onRequestDownload },
	              'Save'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Sidebar;
	}(React.Component);

	Sidebar.propTypes = {
	  onRequestDownload: React.PropTypes.func.isRequired,
	  onConfigurationChange: React.PropTypes.func.isRequired,
	  onSidebarChange: React.PropTypes.func.isRequired,
	  onThemeChange: React.PropTypes.func.isRequired,
	  onTemplateChange: React.PropTypes.func.isRequired,
	  onLayoutChange: React.PropTypes.func.isRequired,
	  configuration: React.PropTypes.object.isRequired,
	  theme: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	  themes: React.PropTypes.object,
	  template: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	  templates: React.PropTypes.object,
	  layout: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	  layouts: React.PropTypes.object
	};

	// Export
	module.exports = Sidebar;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "aside.sidebar {\n  background: #eee;\n  color: #FFF;\n  display: flex;\n  flex-direction: column;\n  transform: translateY(-40vh);\n  transition: transform 0.2s ease; }\n  @media screen and (min-width: 768px) {\n    aside.sidebar {\n      flex-direction: row;\n      transform: translateX(-30rem);\n      min-width: 30rem; } }\n  aside.sidebar.sidebar--open {\n    transform: translateX(0); }\n  aside.sidebar .panels {\n    width: 100%;\n    box-sizing: border-box;\n    height: 40vh;\n    overflow: auto; }\n    @media screen and (min-width: 768px) {\n      aside.sidebar .panels {\n        height: initial;\n        width: 30rem; } }\n  aside.sidebar .buttons {\n    margin: 0;\n    padding: 0;\n    background: #333;\n    list-style-type: none;\n    display: flex;\n    width: 100%; }\n    @media screen and (min-width: 768px) {\n      aside.sidebar .buttons {\n        width: 7rem;\n        flex-direction: column; } }\n    aside.sidebar .buttons button {\n      width: 7rem;\n      height: 7rem;\n      appearance: none;\n      -webkit-appearance: none;\n      border: 0;\n      border-radius: 0;\n      background: #333;\n      color: #FFF;\n      text-transform: uppercase;\n      font-size: 1rem;\n      letter-spacing: 0.1rem;\n      outline: none;\n      cursor: pointer; }\n      aside.sidebar .buttons button:hover, aside.sidebar .buttons button.button--active {\n        background: #111; }\n  aside.sidebar .panel {\n    width: 100%;\n    display: none;\n    padding: 1.5rem;\n    color: #000;\n    height: 100%;\n    overflow: auto; }\n    @media screen and (min-width: 768px) {\n      aside.sidebar .panel {\n        width: 30rem; } }\n    aside.sidebar .panel.panel--show {\n      display: block; }\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  Content: __webpack_require__(22),
	  Template: __webpack_require__(34),
	  Theme: __webpack_require__(38),
	  Layout: __webpack_require__(41)
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	var LayerConfig = __webpack_require__(23);

	// Styles
	__webpack_require__(32);

	// Content class

	var ContentPanel = function (_React$Component) {
	  _inherits(ContentPanel, _React$Component);

	  function ContentPanel(props) {
	    _classCallCheck(this, ContentPanel);

	    var _this = _possibleConstructorReturn(this, (ContentPanel.__proto__ || Object.getPrototypeOf(ContentPanel)).call(this, props));

	    _this.handleUpdate = _this.handleUpdate.bind(_this);
	    return _this;
	  }

	  _createClass(ContentPanel, [{
	    key: 'handleUpdate',
	    value: function handleUpdate(name, element) {
	      var configuration = this.props.configuration;
	      configuration.layers[name] = element;

	      this.props.onConfigurationChange(configuration);
	    }
	  }, {
	    key: 'getLayerValue',
	    value: function getLayerValue(layer, key, layers) {
	      if (typeof layer[key] === 'function') {
	        return layer[key](layers);
	      }

	      return layer[key];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var elements = [];

	      var layers = this.props.configuration.layers;


	      Object.keys(layers).forEach(function (key) {
	        var layer = layers[key];

	        if (_this2.getLayerValue(layer, 'hidden', layers) === true) return;

	        if (_this2.getLayerValue(layer, 'editable', layers)) {
	          elements.push(React.createElement(LayerConfig, { key: key, layerKey: key, onUpdate: _this2.handleUpdate, layer: layer }));
	        }
	      });

	      return React.createElement(
	        'div',
	        { className: 'panel panel--content' + (this.props.active ? ' panel--show' : '') },
	        React.createElement(
	          'h3',
	          null,
	          'Layers'
	        ),
	        elements
	      );
	    }
	  }]);

	  return ContentPanel;
	}(React.Component);

	ContentPanel.propTypes = {
	  onConfigurationChange: React.PropTypes.func.isRequired,
	  configuration: React.PropTypes.object.isRequired,
	  active: React.PropTypes.bool
	};

	// Export
	module.exports = ContentPanel;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// Styles
	__webpack_require__(24);

	// Require in our controls
	var TextControl = __webpack_require__(26);
	var SizeControl = __webpack_require__(27);
	var ColorControl = __webpack_require__(29);
	var SourceControl = __webpack_require__(31);

	// LayerConfig class

	var LayerConfig = function (_React$Component) {
	  _inherits(LayerConfig, _React$Component);

	  function LayerConfig(props) {
	    _classCallCheck(this, LayerConfig);

	    var _this = _possibleConstructorReturn(this, (LayerConfig.__proto__ || Object.getPrototypeOf(LayerConfig)).call(this, props));

	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }

	  _createClass(LayerConfig, [{
	    key: 'handleChange',
	    value: function handleChange(property, value) {
	      var layer = this.props.layer;
	      layer[property] = value;

	      this.props.onUpdate(this.props.layerKey, layer);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'layer-config' },
	        React.createElement(
	          'h3',
	          null,
	          this.props.layer.name
	        ),
	        React.createElement(
	          'div',
	          { className: 'element-config' },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(TextControl, { layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'fontSize',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'height',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'width',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'radius',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'radiusX',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'radiusY',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'x',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'y',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'x1',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'x2',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'y1',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'y2',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(ColorControl, { name: 'fill',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(ColorControl, { name: 'stroke',
	              layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SourceControl, { layer: this.props.layer,
	              onNewValue: this.handleChange }),
	            React.createElement(SizeControl, { name: 'opacity',
	              min: 0,
	              max: 1,
	              step: 0.1,
	              layer: this.props.layer,
	              onNewValue: this.handleChange })
	          )
	        )
	      );
	    }
	  }]);

	  return LayerConfig;
	}(React.Component);

	LayerConfig.propTypes = {
	  onUpdate: React.PropTypes.func.isRequired,
	  layer: React.PropTypes.object.isRequired,
	  layerKey: React.PropTypes.string.isRequired
	};

	// Export
	module.exports = LayerConfig;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".layer-config {\n  background: #FFF;\n  margin: 0 0 2rem;\n  box-shadow: 0 2px 5px 0px #bbb; }\n  .layer-config h3 {\n    background: #f9f9f9;\n    padding: 0.4rem 1rem;\n    font-size: 1rem; }\n  .layer-config .element-config {\n    padding: 1rem; }\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// TextControl class

	var TextControl = function (_React$Component) {
	  _inherits(TextControl, _React$Component);

	  function TextControl(props) {
	    _classCallCheck(this, TextControl);

	    var _this = _possibleConstructorReturn(this, (TextControl.__proto__ || Object.getPrototypeOf(TextControl)).call(this, props));

	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }

	  _createClass(TextControl, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var element = e.target;
	      this.props.onNewValue('text', element.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.layer.editable.text) return null;

	      if (_typeof(this.props.layer.editable.text) === 'object') {
	        if (this.props.layer.editable.text.options) {
	          // We have a select instead of a free-input
	          return React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'strong',
	              null,
	              'Text'
	            ),
	            React.createElement(
	              'select',
	              { defaultValue: this.props.layer.text,
	                onChange: this.handleChange },
	              this.props.layer.editable.text.options.map(function (option, index) {
	                return React.createElement(
	                  'option',
	                  { key: index, value: option },
	                  option
	                );
	              })
	            )
	          );
	        }

	        // We have some config
	        var config = {
	          maxLength: this.props.layer.editable.text.max || null
	        };

	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Text'
	          ),
	          React.createElement('textarea', _extends({}, config, {
	            value: this.props.layer.text,
	            onChange: this.handleChange }))
	        );
	      }

	      if (this.props.layer.editable.text === true) {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Text'
	          ),
	          React.createElement('textarea', { value: this.props.layer.text,
	            onChange: this.handleChange })
	        );
	      }
	    }
	  }]);

	  return TextControl;
	}(React.Component);

	TextControl.propTypes = {
	  onNewValue: React.PropTypes.func.isRequired,
	  layer: React.PropTypes.object.isRequired
	};

	// Export
	module.exports = TextControl;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);
	var helpers = __webpack_require__(28);

	// SizeControl class

	var SizeControl = function (_React$Component) {
	  _inherits(SizeControl, _React$Component);

	  function SizeControl(props) {
	    _classCallCheck(this, SizeControl);

	    var _this = _possibleConstructorReturn(this, (SizeControl.__proto__ || Object.getPrototypeOf(SizeControl)).call(this, props));

	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }

	  _createClass(SizeControl, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var element = e.target;
	      this.props.onNewValue(this.props.name, element.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.layer.editable[this.props.name]) return null;

	      if (_typeof(this.props.layer.editable[this.props.name]) === 'object' || this.props.min || this.props.max || this.props.step) {
	        // We have some config

	        var config = {
	          min: this.props.layer.editable[this.props.name].min || this.props.min || 0,
	          max: this.props.layer.editable[this.props.name].max || this.props.max || null,
	          step: this.props.layer.editable[this.props.name].step || this.props.step || 1
	        };

	        config.type = config.max ? 'range' : 'number';

	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            helpers.capitaliseFirstLetter(this.props.name),
	            ' ',
	            React.createElement(
	              'code',
	              null,
	              this.props.layer[this.props.name]
	            )
	          ),
	          React.createElement('input', _extends({}, config, {
	            value: this.props.layer[this.props.name],
	            onChange: this.handleChange }))
	        );
	      }

	      if (this.props.layer.editable[this.props.name] === true) {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            helpers.capitaliseFirstLetter(this.props.name),
	            ' ',
	            React.createElement(
	              'code',
	              null,
	              this.props.layer[this.props.name]
	            )
	          ),
	          React.createElement('input', { type: 'number',
	            min: '0',
	            step: '1',
	            value: this.props.layer[this.props.name],
	            onChange: this.handleChange })
	        );
	      }
	    }
	  }]);

	  return SizeControl;
	}(React.Component);

	SizeControl.propTypes = {
	  name: React.PropTypes.string.isRequired,
	  onNewValue: React.PropTypes.func.isRequired,
	  layer: React.PropTypes.object.isRequired,
	  min: React.PropTypes.number,
	  max: React.PropTypes.number,
	  step: React.PropTypes.number,
	  type: React.PropTypes.string
	};

	// Export
	module.exports = SizeControl;

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  /**
	   * Converts the supplied string into a slug and returns it
	   *
	   * @param {string} string - The string to slugify
	   * @return {string} The slugified string
	   */
	  slugify: function slugify(string) {
	    return string.toString() // Convert to a string
	    .toLowerCase() // Convert to lowercase
	    .replace(/\s+/g, '-') // Replace spaces with -
	    .replace(/[^\w-]+/g, '') // Remove all non-word chars
	    .replace(/--+/g, '-') // Replace multiple - with single -
	    .replace(/^-+/, '') // Trim - from start of text
	    .replace(/-+$/, ''); // Trim - from end of text
	  },

	  /**
	   * Converts an SVG string into its base64 encoded equivalent
	   *
	   * @param {string} svg - The SVG to convert
	   * @param {object} btoa - The btoa method to use (either pass in a node-compatible version, or window.btoa)
	   *
	   * @return {string} The SVG in base64
	   */
	  svgToBase64: function svgToBase64(svg, btoa) {
	    return btoa(unescape(encodeURIComponent(svg)));
	  },

	  /**
	   * Capitalises the first letter of a string
	   *
	   * @param {string} string - Capitalise the first string
	   *
	   * @return {string} The string with its first letter capitalised
	   */
	  capitaliseFirstLetter: function capitaliseFirstLetter(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	var _require = __webpack_require__(30);

	var ChromePicker = _require.ChromePicker;
	var CirclePicker = _require.CirclePicker;

	var helpers = __webpack_require__(28);

	// ColorControl class

	var ColorControl = function (_React$Component) {
	  _inherits(ColorControl, _React$Component);

	  function ColorControl(props) {
	    _classCallCheck(this, ColorControl);

	    var _this = _possibleConstructorReturn(this, (ColorControl.__proto__ || Object.getPrototypeOf(ColorControl)).call(this, props));

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleColorChange = _this.handleColorChange.bind(_this);
	    return _this;
	  }

	  _createClass(ColorControl, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var element = e.target;
	      this.props.onNewValue(this.props.name, element.value);
	    }
	  }, {
	    key: 'handleColorChange',
	    value: function handleColorChange(color) {
	      this.props.onNewValue(this.props.name, color.hex);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.layer.editable[this.props.name]) return null;

	      if (_typeof(this.props.layer.editable[this.props.name]) === 'object' && this.props.layer.editable[this.props.name].options) {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Fill'
	          ),
	          React.createElement(CirclePicker, { color: this.props.layer[this.props.name],
	            colors: this.props.layer.editable[this.props.name].options,
	            onChange: this.handleColorChange })
	        );
	      }

	      if (this.props.layer.editable[this.props.name] === 'picker') {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            helpers.capitaliseFirstLetter(this.props.name)
	          ),
	          React.createElement(ChromePicker, { color: this.props.layer[this.props.name],
	            onChange: this.handleColorChange })
	        );
	      }

	      if (this.props.layer.editable[this.props.name] === true) {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            helpers.capitaliseFirstLetter(this.props.name)
	          ),
	          React.createElement('input', { type: 'text',
	            value: this.props.layer[this.props.name],
	            onChange: this.handleChange })
	        );
	      }

	      return null;
	    }
	  }]);

	  return ColorControl;
	}(React.Component);

	ColorControl.propTypes = {
	  name: React.PropTypes.string.isRequired,
	  onNewValue: React.PropTypes.func.isRequired,
	  layer: React.PropTypes.object.isRequired
	};

	// Export
	module.exports = ColorControl;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// SizeControl class

	var SizeControl = function (_React$Component) {
	  _inherits(SizeControl, _React$Component);

	  function SizeControl(props) {
	    _classCallCheck(this, SizeControl);

	    var _this = _possibleConstructorReturn(this, (SizeControl.__proto__ || Object.getPrototypeOf(SizeControl)).call(this, props));

	    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
	    _this.handleFileChange = _this.handleFileChange.bind(_this);
	    _this._processFile = _this._processFile.bind(_this);
	    return _this;
	  }

	  _createClass(SizeControl, [{
	    key: 'handleSelectChange',
	    value: function handleSelectChange(e) {
	      var value = e.target.value;
	      this.props.onNewValue('src', value);
	    }
	  }, {
	    key: 'handleFileChange',
	    value: function handleFileChange(e) {
	      e.stopPropagation();
	      e.preventDefault();
	      var file = e.target.files[0];
	      this._processFile(file);
	    }
	  }, {
	    key: '_processFile',
	    value: function _processFile(file) {
	      var _this2 = this;

	      var reader = new window.FileReader();

	      reader.onload = function () {
	        var layer = _this2.props.layer;
	        layer['src'] = reader.result;

	        _this2.props.onNewValue('src', reader.result);
	      };

	      reader.readAsDataURL(file);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      if (!this.props.layer.editable.src) return null;

	      // If an object of options is given, create a dropdown
	      if (_typeof(this.props.layer.editable.src) === 'object') {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Source'
	          ),
	          React.createElement(
	            'select',
	            { onChange: this.handleSelectChange },
	            Object.keys(this.props.layer.editable.src).map(function (index, key) {
	              return React.createElement(
	                'option',
	                { key: key,
	                  value: _this3.props.layer.editable.src[index] },
	                index
	              );
	            })
	          )
	        );
	      }

	      // Default behaviour is to show a file upload
	      if (this.props.layer.editable.src) {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Source'
	          ),
	          React.createElement('input', { type: 'file',
	            onChange: this.handleFileChange })
	        );
	      }
	    }
	  }]);

	  return SizeControl;
	}(React.Component);

	SizeControl.propTypes = {
	  onNewValue: React.PropTypes.func.isRequired,
	  layer: React.PropTypes.object.isRequired
	};

	// Export
	module.exports = SizeControl;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".panel.panel--content .chrome-picker,\n.panel.panel--content .circle-picker {\n  width: 100% !important;\n  margin: 0.3rem 0 1.5rem; }\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);
	var CardTemplate = __webpack_require__(35);

	// Styles
	__webpack_require__(36);

	// TemplatePanel class

	var TemplatePanel = function (_React$Component) {
	  _inherits(TemplatePanel, _React$Component);

	  function TemplatePanel(props) {
	    _classCallCheck(this, TemplatePanel);

	    var _this = _possibleConstructorReturn(this, (TemplatePanel.__proto__ || Object.getPrototypeOf(TemplatePanel)).call(this, props));

	    _this.handleUpdate = _this.handleUpdate.bind(_this);
	    _this.handleUpdateFromImage = _this.handleUpdateFromImage.bind(_this);
	    return _this;
	  }

	  _createClass(TemplatePanel, [{
	    key: 'handleUpdate',
	    value: function handleUpdate(e) {
	      var element = e.target;

	      this.props.onTemplateChange(element.value);
	    }
	  }, {
	    key: 'handleUpdateFromImage',
	    value: function handleUpdateFromImage(name, e) {
	      this.props.onTemplateChange(name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (!this.props.templates) return null;

	      var allHavePreviewImages = true;
	      Object.keys(this.props.templates).forEach(function (name, index) {
	        if (!_this2.props.templates[name].previewImage) {
	          allHavePreviewImages = false;
	        }
	      });

	      if (allHavePreviewImages) {
	        return React.createElement(
	          'div',
	          { className: 'panel panel--template' + (this.props.active ? ' panel--show' : '') },
	          React.createElement(
	            'h3',
	            null,
	            'Template'
	          ),
	          React.createElement(
	            'ul',
	            null,
	            Object.keys(this.props.templates).map(function (name, index) {
	              return React.createElement(
	                CardTemplate,
	                { key: index,
	                  name: name,
	                  template: _this2.props.template,
	                  onClick: _this2.handleUpdateFromImage },
	                React.createElement('img', { src: _this2.props.templates[name].previewImage }),
	                React.createElement(
	                  'h5',
	                  null,
	                  name
	                )
	              );
	            })
	          )
	        );
	      }

	      return React.createElement(
	        'div',
	        { className: 'panel panel--template' + (this.props.active ? ' panel--show' : '') },
	        React.createElement(
	          'h3',
	          null,
	          'Template'
	        ),
	        React.createElement(
	          'select',
	          { defaultValue: this.props.template, onChange: this.handleUpdate },
	          Object.keys(this.props.templates).map(function (name, index) {
	            return React.createElement(
	              'option',
	              { key: index, value: name },
	              name
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return TemplatePanel;
	}(React.Component);

	TemplatePanel.propTypes = {
	  template: React.PropTypes.string.isRequired,
	  onTemplateChange: React.PropTypes.func.isRequired,
	  templates: React.PropTypes.object.isRequired,
	  active: React.PropTypes.bool
	};

	// Export
	module.exports = TemplatePanel;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// CardTemplate class

	var CardTemplate = function (_React$Component) {
	  _inherits(CardTemplate, _React$Component);

	  function CardTemplate(props) {
	    _classCallCheck(this, CardTemplate);

	    var _this = _possibleConstructorReturn(this, (CardTemplate.__proto__ || Object.getPrototypeOf(CardTemplate)).call(this, props));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(CardTemplate, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onClick(this.props.name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var template = _props.template;
	      var children = _props.children;


	      return React.createElement(
	        'li',
	        { onClick: this.handleClick,
	          className: 'template-image' + (name === template ? ' template-image--selected' : '') },
	        children
	      );
	    }
	  }]);

	  return CardTemplate;
	}(React.Component);

	CardTemplate.propTypes = {
	  name: React.PropTypes.string.isRequired,
	  template: React.PropTypes.string.isRequired,
	  children: React.PropTypes.array.isRequired,
	  onClick: React.PropTypes.func.isRequired
	};

	// Export
	module.exports = CardTemplate;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".panel.panel--template ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n  .panel.panel--template ul li.template-image {\n    margin: 0 0 2rem;\n    cursor: pointer; }\n    .panel.panel--template ul li.template-image.template-image--selected img {\n      opacity: 1; }\n\n.panel.panel--template img {\n  max-width: 100%;\n  height: auto;\n  opacity: 0.6; }\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// Styles
	__webpack_require__(39);

	// ThemePanel class

	var ThemePanel = function (_React$Component) {
	  _inherits(ThemePanel, _React$Component);

	  function ThemePanel(props) {
	    _classCallCheck(this, ThemePanel);

	    var _this = _possibleConstructorReturn(this, (ThemePanel.__proto__ || Object.getPrototypeOf(ThemePanel)).call(this, props));

	    _this.handleUpdate = _this.handleUpdate.bind(_this);
	    return _this;
	  }

	  _createClass(ThemePanel, [{
	    key: 'handleUpdate',
	    value: function handleUpdate(e) {
	      var element = e.target;

	      this.props.onThemeChange(element.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.themes) return null;

	      return React.createElement(
	        'div',
	        { className: 'panel panel--theme' + (this.props.active ? ' panel--show' : '') },
	        React.createElement(
	          'h3',
	          null,
	          'Theme'
	        ),
	        React.createElement(
	          'select',
	          { defaultValue: this.props.theme, onChange: this.handleUpdate },
	          Object.keys(this.props.themes).map(function (name, index) {
	            return React.createElement(
	              'option',
	              { key: index, value: name },
	              name
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return ThemePanel;
	}(React.Component);

	ThemePanel.propTypes = {
	  onThemeChange: React.PropTypes.func.isRequired,
	  themes: React.PropTypes.object.isRequired,
	  theme: React.PropTypes.string.isRequired,
	  active: React.PropTypes.bool
	};

	// Export
	module.exports = ThemePanel;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);
	var CardLayout = __webpack_require__(42);

	// Styles
	__webpack_require__(43);

	// LayoutPanel class

	var LayoutPanel = function (_React$Component) {
	  _inherits(LayoutPanel, _React$Component);

	  function LayoutPanel(props) {
	    _classCallCheck(this, LayoutPanel);

	    var _this = _possibleConstructorReturn(this, (LayoutPanel.__proto__ || Object.getPrototypeOf(LayoutPanel)).call(this, props));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(LayoutPanel, [{
	    key: 'handleClick',
	    value: function handleClick(name) {
	      this.props.onLayoutChange(name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (!this.props.layouts) return null;

	      return React.createElement(
	        'div',
	        { className: 'panel panel--layout' + (this.props.active ? ' panel--show' : '') },
	        React.createElement(
	          'h3',
	          null,
	          'Layout'
	        ),
	        Object.keys(this.props.layouts).map(function (name, index) {
	          var _props$layouts$name$c = _this2.props.layouts[name].card;
	          var width = _props$layouts$name$c.width;
	          var height = _props$layouts$name$c.height;


	          var ratioHeight = height / width * 270;

	          return React.createElement(
	            CardLayout,
	            { key: index,
	              onClick: _this2.handleClick,
	              layout: _this2.props.layout,
	              name: name,
	              ratioHeight: ratioHeight },
	            React.createElement(
	              'h4',
	              null,
	              name
	            ),
	            width,
	            ' \xD7 ',
	            height
	          );
	        })
	      );
	    }
	  }]);

	  return LayoutPanel;
	}(React.Component);

	LayoutPanel.propTypes = {
	  onLayoutChange: React.PropTypes.func.isRequired,
	  layouts: React.PropTypes.object.isRequired,
	  layout: React.PropTypes.string.isRequired,
	  active: React.PropTypes.bool
	};

	// Export
	module.exports = LayoutPanel;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// CardLayout class

	var CardLayout = function (_React$Component) {
	  _inherits(CardLayout, _React$Component);

	  function CardLayout(props) {
	    _classCallCheck(this, CardLayout);

	    var _this = _possibleConstructorReturn(this, (CardLayout.__proto__ || Object.getPrototypeOf(CardLayout)).call(this, props));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(CardLayout, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onClick(this.props.name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var layout = _props.layout;
	      var ratioHeight = _props.ratioHeight;

	      return React.createElement(
	        'div',
	        { role: 'button',
	          onClick: this.handleClick,
	          className: 'layout' + (layout === name ? ' layout--selected' : ''),
	          style: { height: ratioHeight + 'px', width: '270px' } },
	        React.createElement(
	          'div',
	          null,
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return CardLayout;
	}(React.Component);

	CardLayout.propTypes = {
	  onClick: React.PropTypes.func.isRequired,
	  layout: React.PropTypes.string.isRequired,
	  name: React.PropTypes.string.isRequired,
	  ratioHeight: React.PropTypes.number.isRequired,
	  children: React.PropTypes.array
	};

	// Export
	module.exports = CardLayout;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".panel.panel--layout .layout {\n  background: #333;\n  text-align: center;\n  padding: 2rem;\n  color: #FFF;\n  margin: 0 0 2rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .panel.panel--layout .layout:hover, .panel.panel--layout .layout.layout--selected {\n    background: #111; }\n", ""]);

	// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// PanelButton class

	var PanelButton = function (_React$Component) {
	  _inherits(PanelButton, _React$Component);

	  function PanelButton(props) {
	    _classCallCheck(this, PanelButton);

	    var _this = _possibleConstructorReturn(this, (PanelButton.__proto__ || Object.getPrototypeOf(PanelButton)).call(this, props));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(PanelButton, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onClick(this.props.name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var active = _props.active;


	      return React.createElement(
	        'li',
	        null,
	        React.createElement(
	          'button',
	          { onClick: this.handleClick,
	            className: 'button' + (active ? ' button--active' : '') },
	          title
	        )
	      );
	    }
	  }]);

	  return PanelButton;
	}(React.Component);

	PanelButton.propTypes = {
	  name: React.PropTypes.string.isRequired,
	  title: React.PropTypes.string.isRequired,
	  active: React.PropTypes.bool,
	  onClick: React.PropTypes.func.isRequired
	};

	// Export
	module.exports = PanelButton;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Libraries
	var React = __webpack_require__(1);

	// Styles
	__webpack_require__(47);

	// Card
	var Card = __webpack_require__(3);

	// Canvas class

	var Canvas = function (_React$Component) {
	  _inherits(Canvas, _React$Component);

	  function Canvas() {
	    _classCallCheck(this, Canvas);

	    return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).apply(this, arguments));
	  }

	  _createClass(Canvas, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'canvas' + (this.props.sidebarOpen ? ' canvas--with-sidebar' : '') },
	        React.createElement(Card, { ref: 'card', configuration: this.props.configuration })
	      );
	    }
	  }]);

	  return Canvas;
	}(React.Component);

	Canvas.propTypes = {
	  sidebarOpen: React.PropTypes.bool,
	  configuration: React.PropTypes.object.isRequired
	};

	// Export
	module.exports = Canvas;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".canvas {\n  transition: transform 0.2s ease;\n  width: 100%;\n  padding: 2rem 0;\n  transform: translateY(-40vh); }\n  @media screen and (min-width: 768px) {\n    .canvas {\n      width: calc(100% - 37rem);\n      transform: translateX(-15rem); } }\n  .canvas.canvas--with-sidebar {\n    transform: translateX(0rem); }\n  .canvas div.card {\n    width: 100%;\n    padding: 0 1rem;\n    display: block;\n    height: 100%;\n    margin: 0 auto; }\n    .canvas div.card svg:not(:root) {\n      overflow: hidden; }\n    .canvas div.card svg text {\n      cursor: default;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n    .canvas div.card svg text::selection {\n      background: none; }\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var helpers = __webpack_require__(28);

	/**
	 * @name SVGToImage
	 * @class Used for downloading an SVG DOM element in your browser
	 */

	var SVGToImage = function () {

	  /**
	   * Constructor takes in the element for later use
	   *
	   * @param {object} element - The SVG element to convert to an image
	   */
	  function SVGToImage(element) {
	    _classCallCheck(this, SVGToImage);

	    // Ensure we got an element
	    if (typeof element === 'undefined') {
	      throw new Error('No element provided');
	    }

	    // Validate that the provided element is an HTML element
	    if (!this._isValidElement(element)) {
	      throw new Error('Provided element is not a valid element');
	    }

	    // Check the provided element is an SVG element
	    if (element.tagName.toLowerCase() !== 'svg') {
	      throw new Error('Invalid element provided');
	    }

	    // Store the element
	    this.element = element;
	  }

	  /**
	   * Validates the provided element is an HTMLElement
	   * Source: http://stackoverflow.com/a/384380/3886818
	   *
	   * @param {mixed} element - The element to validate
	   *
	   * @return {boolean} True if the provided element is valid
	   */


	  _createClass(SVGToImage, [{
	    key: '_isValidElement',
	    value: function _isValidElement(element) {
	      return typeof element !== 'undefined' && element !== null && (typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element.nodeType === 1 && typeof element.nodeName === 'string';
	    }

	    /**
	     * Downloads the SVG as an image
	     *
	     * @param {string} name - The name to download the image with
	     * @param {object} options - The configurable options
	     */

	  }, {
	    key: 'download',
	    value: function download(name) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      // Setup default options
	      options.format = options.format || 'image/jpeg';

	      // Convert it to a data URI
	      this._toDataURI(options, function (uri) {
	        // We have our data URI

	        // Create an image
	        var image = new window.Image();
	        image.src = uri;

	        // Confiugre the image onload callback
	        image.onload = function () {
	          // Create a canvas element sized to fit the image
	          var canvas = document.createElement('canvas');
	          canvas.width = image.width;
	          canvas.height = image.height;

	          // Get the canvas context and draw the image onto it
	          var context = canvas.getContext('2d');
	          context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);

	          // Create a link to dynamically click and trigger the download
	          var a = document.createElement('a');
	          a.download = name;
	          a.href = canvas.toDataURL(options.format || 'image/jpeg');
	          document.body.appendChild(a);

	          // I'm aware that `a.click()` below may not work reliably on all browsers. This is something to explore at a later date.

	          // Click and download
	          a.click();
	        };
	      });
	    }

	    /**
	     * Verifies if the supplied URL is external or local
	     *
	     * @param {string} url - The URL to check
	     *
	     * @return {boolean} True if the supplied URL is external
	     */

	  }, {
	    key: '_isExternal',
	    value: function _isExternal(url) {
	      return url && // We have a URL
	      url.lastIndexOf('http', 0) === 0 && // It starts with http
	      url.lastIndexOf(window.location.host) === -1; // It doesn't contain the current hostname
	    }

	    /**
	     * Inlines all images
	     *
	     * @param {function} callback - The callback to run after images have been loaded and inlined
	     */

	  }, {
	    key: '_inlineImages',
	    value: function _inlineImages(callback) {
	      var _this = this;

	      // Get any images
	      var images = this.element.querySelectorAll('image');

	      // If there are no images, immediately call the callback
	      if (images.length === 0) {
	        callback();
	        return;
	      }

	      var promises = [];

	      // Iterate over the images
	      images.forEach(function (image) {
	        // Get the href for the image
	        var href = image.getAttribute('xlink:href') || image.getAttribute('href');

	        // If no href for this image, skip this image
	        if (href === null) return;

	        // If we had a href, check if it's external
	        if (href && _this._isExternal(href)) {
	          throw new Error('Cannot render embedded images linking to external hosts: ' + href);
	        }

	        // Create a canvas and image
	        var canvas = document.createElement('canvas');
	        var ctx = canvas.getContext('2d');
	        var img = new window.Image();

	        // Create a promise and push it to the promises array
	        promises.push(new Promise(function (resolve, reject) {
	          // Set the image source
	          img.src = href;

	          // Image load callback
	          img.onload = function () {
	            // Set the canvases size
	            canvas.width = img.width;
	            canvas.height = img.height;

	            // Draw it onto the canvas
	            ctx.drawImage(img, 0, 0);

	            // Update the href attribute of the image element
	            image.setAttribute('xlink:href', canvas.toDataURL('image/png'));
	            image.setAttribute('href', canvas.toDataURL('image/png'));

	            // Resolve the promise
	            resolve();
	          };

	          // Image error callback
	          img.onerror = function () {
	            // Image couldn't be loaded, reject the promise
	            reject('Could not load image: ' + href);
	          };
	        }));
	      });

	      // Wait for promises to resolve and call the callback
	      Promise.all(promises).then(callback).catch(function (e) {
	        throw new Error(e);
	      });
	    }

	    /**
	     * Converts the element to a data URI
	     *
	     * @param {object} options - Configuration options
	     * @param {function} callback - The callback to run after the element has been converted
	     */

	  }, {
	    key: '_toDataURI',
	    value: function _toDataURI() {
	      var _this2 = this;

	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var callback = arguments[1];

	      // Setup default options
	      options.scale = options.scale || 1;

	      // Setup some SVG data
	      var xmlns = 'http://www.w3.org/2000/xmlns/';

	      // Inline images first
	      this._inlineImages(function () {
	        // Setup a container <div>
	        var outer = document.createElement('div');

	        // Clone the element
	        var clone = _this2.element.cloneNode(true);

	        // Setup some vars
	        var width = void 0,
	            height = void 0,
	            svg = void 0;

	        // If the element is an SVG we work out the size of the SVG using a variety of methods,
	        //  depending on how the user has defined the size of their SVG
	        if (_this2.element.tagName !== 'svg') {
	          throw new Error('Invalid element provided, must be SVG');
	        }

	        // Get the width and height
	        width = parseInt(_this2.element.viewBox.baseVal.width || clone.getAttribute('data-width') || clone.style.width);
	        height = parseInt(_this2.element.viewBox.baseVal.height || clone.getAttribute('data-height') || clone.style.height);

	        // Configure the clone's wrapper attributes
	        clone.setAttribute('version', '1.1');
	        clone.setAttributeNS(xmlns, 'xmlns', 'http://www.w3.org/2000/svg');
	        clone.setAttributeNS(xmlns, 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
	        clone.setAttribute('width', width * options.scale);
	        clone.setAttribute('height', height * options.scale);
	        clone.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
	        outer.appendChild(clone);

	        // Setup the SVG by adding the XML doctype
	        var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

	        // Combine the doctype and the innerHTML of the cloned SVG to get the final product
	        svg = doctype + outer.innerHTML;

	        // Create the URI
	        var uri = 'data:image/svg+xml;base64,' + helpers.svgToBase64(svg, window.btoa);

	        // Run the callback
	        callback(uri);
	      });
	    }
	  }]);

	  return SVGToImage;
	}();

	module.exports = SVGToImage;

/***/ }
/******/ ])
});
;