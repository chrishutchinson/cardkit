(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("deep-extend"));
	else if(typeof define === 'function' && define.amd)
		define("CardKit", ["deep-extend"], factory);
	else if(typeof exports === 'object')
		exports["CardKit"] = factory(require("deep-extend"));
	else
		root["CardKit"] = factory(root["deep-extend"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var deepExtend = __webpack_require__(1);
/**
 * @name CardKit
 * @class Core CardKit class used for managing a single card instance
 */


var CardKit = /*#__PURE__*/function () {
  /**
   * Constructor takes in the configuration and stores it for later user
   *
   * @param {object} configuration - The configuration object to initialise the CardKit image with.
   * @param {object} options - The additional options for use
   */
  function CardKit(configuration) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, CardKit);

    if (!configuration) {
      throw new Error("A configuration object was not provided");
    }

    if (!this._isValidConfiguration(configuration)) {
      throw new Error("Invalid configuration object provided");
    } // Store the configuration


    this.configuration = configuration; // Configure the options

    this._configureOptions(options); // Setup an empty array of renderers


    this.renderers = [];
  }
  /**
   * Configures the supplied options on this instance of CardKit
   *
   * @param {object} options - The options to configure
   */


  _createClass(CardKit, [{
    key: "_configureOptions",
    value: function _configureOptions(options) {
      if (options) {
        if (options.templates) {
          if (!this._isValidTemplatesConfiguration(options.templates)) {
            throw new Error("Invalid templates configuration object provided");
          }

          this.templates = options.templates;
        } else {
          this.templates = null;
        }

        if (options.themes) {
          if (!this._isValidThemesConfiguration(options.themes)) {
            throw new Error("Invalid themes configuration object provided");
          }

          this.themes = options.themes;
        } else {
          this.themes = null;
        }

        if (options.layouts) {
          if (!this._isValidLayoutsConfiguration(options.layouts)) {
            throw new Error("Invalid layouts configuration object provided");
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
    key: "_isValidConfiguration",
    value: function _isValidConfiguration(configuration) {
      return _typeof(configuration) === "object" && // Should be an object
      typeof configuration.card !== "undefined" && // Should have a card property
      _typeof(configuration.card) === "object" && // Card property should be an object
      typeof configuration.card.height !== "undefined" && // Should have a height
      typeof configuration.card.width !== "undefined"; // Should have a width
    }
    /**
     * Validates the provided templates configuration object
     *
     * @param {object} configuration - The templates configuration object to validate
     *
     * @return {boolean} Is the templates configuration object valid
     */

  }, {
    key: "_isValidTemplatesConfiguration",
    value: function _isValidTemplatesConfiguration(templates) {
      return _typeof(templates) === "object"; // Should be an object
    }
    /**
     * Validates the provided themes configuration object
     *
     * @param {object} configuration - The themes configuration object to validate
     *
     * @return {boolean} Is the themes configuration object valid
     */

  }, {
    key: "_isValidThemesConfiguration",
    value: function _isValidThemesConfiguration(themes) {
      return _typeof(themes) === "object"; // Should be an object
    }
    /**
     * Validates the provided layouts configuration object
     *
     * @param {object} configuration - The layouts configuration object to validate
     *
     * @return {boolean} Is the layouts configuration object valid
     */

  }, {
    key: "_isValidLayoutsConfiguration",
    value: function _isValidLayoutsConfiguration(layouts) {
      return _typeof(layouts) === "object"; // Should be an object
    }
    /**
     * Validates the supplied renderer
     *
     * @param {object} renderer - The renderer to validate
     *
     * @return {boolean} If the renderer is valid
     */

  }, {
    key: "_isValidRenderer",
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
    key: "computeConfiguration",
    value: function computeConfiguration() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      // Get the base configuration
      var configuration = Object.assign({}, this.configuration); // If we got options supplied

      if (options) {
        if (options.template && typeof this.templates[options.template] !== "undefined") {
          // Get the template based on the name and merge it onto the base configuration
          configuration = deepExtend(configuration, this.templates[options.template]);
        }

        if (options.theme && typeof this.themes[options.theme] !== "undefined") {
          // Get the theme based on the name and merge it onto the base configuration
          configuration = deepExtend(configuration, this.themes[options.theme]);
        }

        if (options.layout && typeof this.layouts[options.layout] !== "undefined") {
          // Get the layout based on the name and merge it onto the base configuration
          configuration = deepExtend(configuration, this.layouts[options.layout]);
        }
      } // Return the computed configuration


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
    key: "updateConfiguration",
    value: function updateConfiguration(configuration) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        layouts: null,
        templates: null,
        themes: null
      };
      var rerender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.configuration = configuration;

      this._configureOptions(options);

      if (rerender) {
        var renderers = this.getRenderers();
        renderers.forEach(function (renderer) {
          switch (renderer.constructor.name) {
            case "CardKitDOM":
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
    key: "getRenderers",
    value: function getRenderers() {
      return this.renderers;
    }
    /**
     * Add a renderer
     *
     * @param {object} renderer - A renderer to add
     */

  }, {
    key: "addRenderer",
    value: function addRenderer(renderer) {
      if (!this._isValidRenderer(renderer)) {
        throw new Error("Invalid renderer object provided");
      }

      this.renderers.push(renderer);
    }
  }]);

  return CardKit;
}(); // Export it


module.exports = CardKit; // Add it to the window object if we have one

if (typeof window !== "undefined") {
  window.CardKit = CardKit;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ })
/******/ ]);
});