(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("btoa"), require("svg2png"), require("object-assign"), require("prop-types"), require("rvg.js"), require("deep-extend"));
	else if(typeof define === 'function' && define.amd)
		define("CardKitServer", ["react", "btoa", "svg2png", "object-assign", "prop-types", "rvg.js", "deep-extend"], factory);
	else if(typeof exports === 'object')
		exports["CardKitServer"] = factory(require("react"), require("btoa"), require("svg2png"), require("object-assign"), require("prop-types"), require("rvg.js"), require("deep-extend"));
	else
		root["CardKitServer"] = factory(root["react"], root["btoa"], root["svg2png"], root["object-assign"], root["prop-types"], root["rvg.js"], root["deep-extend"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Dependencies
var btoa = __webpack_require__(2);

var svg2png = __webpack_require__(3);

var React = __webpack_require__(0);

var ReactDOMServer = __webpack_require__(4);

var Card = __webpack_require__(7);

var CardKitRenderer = __webpack_require__(10);

var helpers = __webpack_require__(13);
/**
 * @name CardKitServer
 * @class Additional CardKit class used for rendering on the server
 */


var CardKitServer = /*#__PURE__*/function (_CardKitRenderer) {
  _inherits(CardKitServer, _CardKitRenderer);

  var _super = _createSuper(CardKitServer);

  /**
   * Constructor takes in an instance of CardKit and stores it for later user
   *
   * @param {CardKit} cardkit - An instance of CardKit
   */
  function CardKitServer(cardkit) {
    _classCallCheck(this, CardKitServer);

    // Ensure we're operating in a server environment
    if (typeof document !== "undefined") {
      throw new Error("CardKitServer can only be used in a server environment");
    }

    return _super.call(this, cardkit);
  }
  /**
   * Renders the card as an SVG string <svg ..></svg>
   *
   * @return {string} The SVG string representation of the image
   */


  _createClass(CardKitServer, [{
    key: "renderToString",
    value: function renderToString() {
      var string = ReactDOMServer.renderToString(React.createFactory(Card)({
        configuration: this.computeConfiguration()
      }), {});
      return string;
    }
    /**
     * Renders the current configuration to an image
     *
     * @param {number} scale - The scale to output at
     */

  }, {
    key: "renderToImage",
    value: function renderToImage() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      // Get the SVG in string-form
      var string = this.renderToString(); // Encode the string into a data URI

      var uri = helpers.svgToBase64(string, btoa); // Convert to png and fulfill promise

      return svg2png(uri, {
        width: this.computeConfiguration().card.width * scale,
        height: this.computeConfiguration().card.height * scale
      }).then(function (buffer) {
        return buffer.toString("base64");
      });
    }
  }]);

  return CardKitServer;
}(CardKitRenderer);

module.exports = CardKitServer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(5);
} else {}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(6),m=__webpack_require__(0);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var q=60106,r=60107,u=60108,z=60114,B=60109,aa=60110,ba=60112,D=60113,ca=60120,da=60115,ea=60116,fa=60121,ha=60117,ia=60119,ja=60129,ka=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;q=E("react.portal");r=E("react.fragment");u=E("react.strict_mode");z=E("react.profiler");B=E("react.provider");aa=E("react.context");ba=E("react.forward_ref");D=E("react.suspense");ca=E("react.suspense_list");da=E("react.memo");ea=E("react.lazy");fa=E("react.block");ha=E("react.fundamental");ia=E("react.scope");ja=E("react.debug_trace_mode");ka=E("react.legacy_hidden")}
function F(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case r:return"Fragment";case q:return"Portal";case z:return"Profiler";case u:return"StrictMode";case D:return"Suspense";case ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case aa:return(a.displayName||"Context")+".Consumer";case B:return(a._context.displayName||"Context")+".Provider";case ba:var b=a.render;b=b.displayName||b.name||"";return a.displayName||
(""!==b?"ForwardRef("+b+")":"ForwardRef");case da:return F(a.type);case fa:return F(a._render);case ea:b=a._payload;a=a._init;try{return F(a(b))}catch(c){}}return null}var la=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma={};function I(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}function na(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return I(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=ma;return b}
for(var J=new Uint16Array(16),K=0;15>K;K++)J[K]=K+1;J[15]=0;var oa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pa=Object.prototype.hasOwnProperty,qa={},ra={};
function sa(a){if(pa.call(ra,a))return!0;if(pa.call(qa,a))return!1;if(oa.test(a))return ra[a]=!0;qa[a]=!0;return!1}function ta(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function ua(a,b,c,d){if(null===b||"undefined"===typeof b||ta(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function M(a,b,c,d,f,h,t){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=h;this.removeEmptyString=t}var N={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){N[a]=new M(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];N[b]=new M(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){N[a]=new M(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){N[a]=new M(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){N[a]=new M(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){N[a]=new M(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){N[a]=new M(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){N[a]=new M(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){N[a]=new M(a,5,!1,a.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function wa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(va,
wa);N[b]=new M(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(va,wa);N[b]=new M(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(va,wa);N[b]=new M(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){N[a]=new M(a,1,!1,a.toLowerCase(),null,!1,!1)});
N.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){N[a]=new M(a,1,!1,a.toLowerCase(),null,!0,!0)});var xa=/["'&<>]/;
function O(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=xa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function ya(a,b){var c=N.hasOwnProperty(a)?N[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||ua(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(O(b)+'"')}return sa(a)?a+'="'+(O(b)+'"'):""}function za(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Aa="function"===typeof Object.is?Object.is:za,P=null,Q=null,R=null,S=!1,T=!1,U=null,V=0;function W(){if(null===P)throw Error(p(321));return P}function Ba(){if(0<V)throw Error(p(312));return{memoizedState:null,queue:null,next:null}}function Ca(){null===R?null===Q?(S=!1,Q=R=Ba()):(S=!0,R=Q):null===R.next?(S=!1,R=R.next=Ba()):(S=!0,R=R.next);return R}function Da(a,b,c,d){for(;T;)T=!1,V+=1,R=null,c=a(b,d);Ea();return c}function Ea(){P=null;T=!1;Q=null;V=0;R=U=null}
function Fa(a,b){return"function"===typeof b?b(a):b}function Ga(a,b,c){P=W();R=Ca();if(S){var d=R.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=R.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);R.memoizedState=d;return[d,b]}return[R.memoizedState,b]}a=a===Fa?"function"===typeof b?b():b:void 0!==c?c(b):b;R.memoizedState=a;a=R.queue={last:null,dispatch:null};a=a.dispatch=Ha.bind(null,P,a);return[R.memoizedState,a]}
function Ia(a,b){P=W();R=Ca();b=void 0===b?null:b;if(null!==R){var c=R.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!Aa(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();R.memoizedState=[a,b];return a}function Ha(a,b,c){if(!(25>V))throw Error(p(301));if(a===P)if(T=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ja(){}
var X=null,Ka={readContext:function(a){var b=X.threadID;I(a,b);return a[b]},useContext:function(a){W();var b=X.threadID;I(a,b);return a[b]},useMemo:Ia,useReducer:Ga,useRef:function(a){P=W();R=Ca();var b=R.memoizedState;return null===b?(a={current:a},R.memoizedState=a):b},useState:function(a){return Ga(Fa,a)},useLayoutEffect:function(){},useCallback:function(a,b){return Ia(function(){return a},b)},useImperativeHandle:Ja,useEffect:Ja,useDebugValue:Ja,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return[function(a){a()},!1]},useOpaqueIdentifier:function(){return(X.identifierPrefix||"")+"R:"+(X.uniqueID++).toString(36)},useMutableSource:function(a,b){W();return b(a._source)}},La={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ma(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var Na={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Oa=l({menuitem:!0},Na),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pa=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Pa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Qa=/([A-Z])/g,Ra=/^ms-/,Z=m.Children.toArray,Sa=la.ReactCurrentDispatcher,Ta={listing:!0,pre:!0,textarea:!0},Ua=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Va={},Wa={};function Xa(a){if(void 0===a||null===a)return a;var b="";m.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Ya=Object.prototype.hasOwnProperty,Za={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function $a(a,b){if(void 0===a)throw Error(p(152,F(b)||"Component"));}
function ab(a,b,c){function d(d,h){var e=h.prototype&&h.prototype.isReactComponent,f=na(h,b,c,e),t=[],g=!1,n={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===t)return null},enqueueReplaceState:function(a,c){g=!0;t=[c]},enqueueSetState:function(a,c){if(null===t)return null;t.push(c)}};if(e){if(e=new h(d.props,f,n),"function"===typeof h.getDerivedStateFromProps){var k=h.getDerivedStateFromProps.call(null,d.props,e.state);null!=k&&(e.state=l({},e.state,k))}}else if(P={},e=h(d.props,
f,n),e=Da(h,d.props,e,f),null==e||null==e.render){a=e;$a(a,h);return}e.props=d.props;e.context=f;e.updater=n;n=e.state;void 0===n&&(e.state=n=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),t.length){n=t;var v=
g;t=null;g=!1;if(v&&1===n.length)e.state=n[0];else{k=v?n[0]:e.state;var H=!0;for(v=v?1:0;v<n.length;v++){var x=n[v];x="function"===typeof x?x.call(e,k,d.props,f):x;null!=x&&(H?(H=!1,k=l({},k,x)):l(k,x))}e.state=k}}else t=null;a=e.render();$a(a,h);if("function"===typeof e.getChildContext&&(d=h.childContextTypes,"object"===typeof d)){var y=e.getChildContext();for(var A in y)if(!(A in d))throw Error(p(108,F(h)||"Unknown",A));}y&&(b=l({},b,y))}for(;m.isValidElement(a);){var f=a,h=f.type;if("function"!==
typeof h)break;d(f,h)}return{child:a,context:b}}
var bb=function(){function a(a,b,f){m.isValidElement(a)?a.type!==r?a=[a]:(a=a.props.children,a=m.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:La.html,children:a,childIndex:0,context:ma,footer:""};var c=J[0];if(0===c){var d=J;c=d.length;var g=2*c;if(!(65536>=g))throw Error(p(304));var e=new Uint16Array(g);e.set(d);J=e;J[0]=c+1;for(d=c;d<g-1;d++)J[d]=d+1;J[g-1]=0}else J[0]=J[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;
this.makeStaticMarkup=b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[];this.uniqueID=0;this.identifierPrefix=f&&f.identifierPrefix||""}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;J[a]=J[0];J[0]=a}};b.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,h=this.threadID;I(c,h);var t=c[h];this.contextStack[b]=c;this.contextValueStack[b]=t;c[h]=a.props.value};b.popProvider=
function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this;var c=Sa.current;Sa.current=Ka;try{for(var h=[""],t=!1;h[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var g=this.threadID;
J[g]=J[0];J[0]=g;break}var e=this.stack[this.stack.length-1];if(t||e.childIndex>=e.children.length){var L=e.footer;""!==L&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===B)this.popProvider(e.type);else if(e.type===D){this.suspenseDepth--;var G=h.pop();if(t){t=!1;var C=e.fallbackFrame;if(!C)throw Error(p(303));this.stack.push(C);h[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else h[this.suspenseDepth]+=
G}h[this.suspenseDepth]+=L}else{var n=e.children[e.childIndex++],k="";try{k+=this.render(n,e.context,e.domNamespace)}catch(v){if(null!=v&&"function"===typeof v.then)throw Error(p(294));throw v;}finally{}h.length<=this.suspenseDepth&&h.push("");h[this.suspenseDepth]+=k}}return h[0]}finally{Sa.current=c,X=b,Ea()}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return O(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+O(f);
this.previousWasTextNode=!0;return O(f)}b=ab(a,b,this.threadID);a=b.child;b=b.context;if(null===a||!1===a)return"";if(!m.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===q)throw Error(p(257));throw Error(p(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ka:case ja:case u:case z:case ca:case r:return a=Z(a.props.children),this.stack.push({type:null,
domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case D:throw Error(p(294));case ia:throw Error(p(343));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case ba:P={};var d=c.render(a.props,a.ref);d=Da(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case da:return a=[m.createElement(c.type,l({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case aa:c=a.type;d=a.props;var g=this.threadID;I(c,g);c=Z(d.children(c[g]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case ha:throw Error(p(338));case ea:return c=a.type,d=c._init,c=d(c._payload),a=[m.createElement(c,l({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,
context:b,footer:""}),""}throw Error(p(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===La.html&&Ma(c);if(!Va.hasOwnProperty(c)){if(!Ua.test(c))throw Error(p(65,c));Va[c]=!0}var d=a.props;if("input"===c)d=l({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var g=d.value;if(null==g){g=d.defaultValue;var e=d.children;if(null!=e){if(null!=
g)throw Error(p(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(p(93));e=e[0]}g=""+e}null==g&&(g="")}d=l({},d,{value:void 0,children:""+g})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=l({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var L=Xa(d.children);if(null!=e){var G=null!=d.value?d.value+"":L;g=!1;if(Array.isArray(e))for(var C=0;C<e.length;C++){if(""+e[C]===G){g=!0;break}}else g=""+e===G;d=l({selected:void 0,children:void 0},
d,{selected:g,children:L})}}if(g=d){if(Oa[c]&&(null!=g.children||null!=g.dangerouslySetInnerHTML))throw Error(p(137,c));if(null!=g.dangerouslySetInnerHTML){if(null!=g.children)throw Error(p(60));if(!("object"===typeof g.dangerouslySetInnerHTML&&"__html"in g.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=g.style&&"object"!==typeof g.style)throw Error(p(62));}g=d;e=this.makeStaticMarkup;L=1===this.stack.length;G="<"+a.type;b:if(-1===c.indexOf("-"))C="string"===typeof g.is;else switch(c){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":C=
!1;break b;default:C=!0}for(w in g)if(Ya.call(g,w)){var n=g[w];if(null!=n){if("style"===w){var k=void 0,v="",H="";for(k in n)if(n.hasOwnProperty(k)){var x=0===k.indexOf("--"),y=n[k];if(null!=y){if(x)var A=k;else if(A=k,Wa.hasOwnProperty(A))A=Wa[A];else{var cb=A.replace(Qa,"-$1").toLowerCase().replace(Ra,"-ms-");A=Wa[A]=cb}v+=H+A+":";H=k;x=null==y||"boolean"===typeof y||""===y?"":x||"number"!==typeof y||0===y||Y.hasOwnProperty(H)&&Y[H]?(""+y).trim():y+"px";v+=x;H=";"}}n=v||null}k=null;C?Za.hasOwnProperty(w)||
(k=w,k=sa(k)&&null!=n?k+'="'+(O(n)+'"'):""):k=ya(w,n);k&&(G+=" "+k)}}e||L&&(G+=' data-reactroot=""');var w=G;g="";Na.hasOwnProperty(c)?w+="/>":(w+=">",g="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=O(e);break a}e=null}null!=e?(d=[],Ta.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(w+="\n"),w+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===f?Ma(a):"http://www.w3.org/2000/svg"===
f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:g});this.previousWasTextNode=!1;return w};return a}();exports.renderToNodeStream=function(){throw Error(p(207));};exports.renderToStaticMarkup=function(a,b){a=new bb(a,!0,b);try{return a.read(Infinity)}finally{a.destroy()}};exports.renderToStaticNodeStream=function(){throw Error(p(208));};exports.renderToString=function(a,b){a=new bb(a,!1,b);try{return a.read(Infinity)}finally{a.destroy()}};
exports.version="17.0.2";


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Libraries
var React = __webpack_require__(0);

var PropTypes = __webpack_require__(8); // RVG Elements


var _require = __webpack_require__(9),
    SVG = _require.SVG,
    Text = _require.Text,
    Rectangle = _require.Rectangle,
    Circle = _require.Circle,
    Ellipse = _require.Ellipse,
    Line = _require.Line,
    Image = _require.Image,
    Path = _require.Path,
    LinearGradient = _require.LinearGradient;
/**
 * @name Card
 * @class The Card React element
 */


var Card = /*#__PURE__*/function (_React$Component) {
  _inherits(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card(props) {
    var _this;

    _classCallCheck(this, Card);

    _this = _super.call(this, props);
    _this.svgRef = React.createRef();
    return _this;
  }

  _createClass(Card, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount(this.svgRef);
    }
    /**
     * Calculates the Y position of an element based on any attachments etc.
     *
     * @param {object} layers - The object of all layers
     * @param {object} layer - The layer to calculate the Y position for
     *
     * @return {integer} The Y position
     */

  }, {
    key: "calculateYPosition",
    value: function calculateYPosition(layers, layer) {
      // Get the layer's currently configured Y position
      var attachYLayerPosition = this.getLayerValue(layers, layer, "y"); // If this is an object and has the attach property

      if (_typeof(attachYLayerPosition) === "object" && attachYLayerPosition.attach !== "undefined") {
        // Get the layer to attach to
        var attachYLayer = layers[layer.y.attach]; // Calculate the Y offset

        var attachYLayerHeight = 0;

        switch (attachYLayer.type) {
          case "text":
            // eslint-disable-next-line
            var attachYLayerText = attachYLayer.text.split("\n");

            if (attachYLayer.text !== "") {
              attachYLayerHeight = attachYLayerText.length * (this.getLayerValue(layers, attachYLayer, "lineHeight") || this.getLayerValue(layers, attachYLayer, "fontSize"));
            }

            break;

          default:
            if (typeof this.getLayerValue(layers, attachYLayer, "height") !== "undefined") {
              attachYLayerHeight = this.getLayerValue(layers, attachYLayer, "height");
            }

            break;
        } // Add any additionally configured offset value


        var attachYLayerOffset = layer.y.offset || 0; // Add them together and recursively call this function if the next layer has an attachment

        attachYLayerPosition = attachYLayerHeight + this.calculateYPosition(layers, attachYLayer) + attachYLayerOffset;
      } // Return the value


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
    key: "getLayerValue",
    value: function getLayerValue(layers, layer, key) {
      if (typeof layer[key] === "function") {
        return layer[key](layers, this.svgRef);
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
    key: "computeGradients",
    value: function computeGradients(layers) {
      var _this2 = this;

      var array = [];
      var layer, gradient;
      Object.keys(layers).forEach(function (key) {
        layer = layers[key];

        if (_this2.getLayerValue(layers, layer, "gradient")) {
          gradient = _this2.getLayerValue(layers, layer, "gradient");
          array.push( /*#__PURE__*/React.createElement(LinearGradient, {
            key: key,
            name: key,
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1,
            stops: gradient
          }));
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
    key: "computeLayers",
    value: function computeLayers(layers) {
      var _this3 = this;

      var array = [];
      var layer; // Iterate over the layers

      Object.keys(layers).forEach(function (key) {
        layer = layers[key]; // If the layer is hidden, ignore it

        if (_this3.getLayerValue(layers, layer, "hidden") === true) {
          return;
        } // Setup an object to contain our layer data


        var layerData = {}; // Iterate over the properties of the layer, and compute the value (handles getters, functions, and object implementations such as `y`)

        Object.keys(layer).forEach(function (k) {
          layerData[k] = _this3.getLayerValue(layers, layer, k);
        }); // Make the fill value map to a gradient name, if a gradient has been configured
        // See computeGradients() for the creation of gradient definitions

        if (_this3.getLayerValue(layers, layer, "gradient")) {
          layerData.fill = "url(#".concat(key, ")");
        } // Switch over the layer type to ensure we create the card correctly


        switch (layer.type) {
          case "text":
            // Split by newline
            // eslint-disable-next-line
            var text = layerData.text.split("\n");
            array.push( /*#__PURE__*/React.createElement(Text, {
              x: layerData.x,
              y: _this3.calculateYPosition(layers, layerData),
              fontFamily: layerData.fontFamily,
              fontSize: layerData.fontSize,
              fontWeight: layerData.fontWeight,
              lineHeight: layerData.lineHeight,
              textAnchor: layerData.textAnchor,
              fill: layerData.fill,
              draggable: layerData.draggable,
              transform: layerData.transform,
              opacity: layerData.opacity,
              smartQuotes: layerData.smartQuotes,
              key: key
            }, text));
            break;

          case "image":
            array.push( /*#__PURE__*/React.createElement(Image, {
              x: layerData.x,
              y: _this3.calculateYPosition(layers, layerData),
              href: layerData.src,
              height: layerData.height,
              width: layerData.width,
              draggable: layerData.draggable,
              transform: layerData.transform,
              opacity: layerData.opacity,
              key: key
            }));
            break;

          case "rectangle":
            array.push( /*#__PURE__*/React.createElement(Rectangle, {
              x: layerData.x,
              y: _this3.calculateYPosition(layers, layerData),
              fill: layerData.fill,
              height: layerData.height,
              width: layerData.width,
              draggable: layerData.draggable,
              transform: layerData.transform,
              key: key
            }));
            break;

          case "circle":
            array.push( /*#__PURE__*/React.createElement(Circle, {
              x: layerData.x,
              y: _this3.calculateYPosition(layers, layerData),
              fill: layerData.fill,
              radius: layerData.radius,
              draggable: layerData.draggable,
              transform: layerData.transform,
              key: key
            }));
            break;

          case "ellipse":
            array.push( /*#__PURE__*/React.createElement(Ellipse, {
              x: layerData.x,
              y: _this3.calculateYPosition(layers, layerData),
              fill: layerData.fill,
              radiusX: layerData.radiusX,
              radiusY: layerData.radiusY,
              draggable: layerData.draggable,
              transform: layerData.transform,
              key: key
            }));
            break;

          case "line":
            array.push( /*#__PURE__*/React.createElement(Line, {
              x: [layerData.x1, layerData.x2],
              y: [layerData.y1, layerData.y2],
              stroke: layerData.stroke || layerData.fill,
              draggable: layerData.draggable,
              transform: layerData.transform,
              key: key
            }));
            break;

          case "path":
            array.push( /*#__PURE__*/React.createElement(Path, {
              d: layerData.path || layerData.d,
              fill: layerData.fill,
              draggable: layerData.draggable,
              transform: layerData.transform,
              key: key
            }));
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
    key: "computeFonts",
    value: function computeFonts() {
      var fonts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.keys(fonts).map(function (key, index) {
        var src = fonts[key];
        var format = "svg";

        if (_typeof(fonts[key]) === "object") {
          src = fonts[key].src;
          format = fonts[key].format || "svg";
        }

        return /*#__PURE__*/React.createElement("style", {
          key: index
        }, "@font-face {\n              font-family: '".concat(key, "';\n              src: url(\"").concat(src, "\") format(\"").concat(format, "\");\n              font-weight: normal;\n              font-style: normal;\n          }"));
      });
    }
    /**
     * Renders the card
     *
     * @return {object} JSX for the React Component
     */

  }, {
    key: "render",
    value: function render() {
      // Grab our configuration
      var _this$props$configura = this.props.configuration,
          card = _this$props$configura.card,
          fonts = _this$props$configura.fonts,
          layers = _this$props$configura.layers; // Compute layers, gradients and fonts

      var layerArray = this.computeLayers(layers);
      var gradientsArray = this.computeGradients(layers);
      var fontsArray = this.computeFonts(fonts); // Return

      return /*#__PURE__*/React.createElement("div", {
        className: "card",
        ref: this.svgRef,
        style: {
          maxWidth: card.width,
          maxHeight: card.height
        }
      }, /*#__PURE__*/React.createElement(SVG, {
        height: card.height,
        width: card.width,
        fill: card.fill
      }, /*#__PURE__*/React.createElement("defs", null, fontsArray, gradientsArray), layerArray));
    }
  }]);

  return Card;
}(React.Component);

Card.propTypes = {
  configuration: PropTypes.shape({
    card: PropTypes.object,
    fonts: PropTypes.object,
    layers: PropTypes.object
  }),
  onMount: PropTypes.func
}; // Export

module.exports = Card;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Dependencies
var CardKit = __webpack_require__(11);
/**
 * @name CardKitRenderer
 * @class
 */


var CardKitRenderer = /*#__PURE__*/function () {
  /**
   * Constructor takes in an instance of CardKit and stores it for later user
   *
   * @param {CardKit} cardkit - An instance of CardKit
   */
  function CardKitRenderer(cardkit) {
    _classCallCheck(this, CardKitRenderer);

    // Ensure we recieve a CardKit object
    if (!cardkit) {
      throw new Error("An instance of CardKit was not provided");
    } // Validate the instance of CardKit supplied is good


    if (!(cardkit instanceof CardKit) && cardkit.constructor.name !== "CardKit") {
      throw new Error("Invalid CardKit object provided");
    }

    this.cardkit = cardkit;
    this.cardkit.addRenderer(this);
  }
  /**
   * Re-render
   */


  _createClass(CardKitRenderer, [{
    key: "rerender",
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
    key: "computeConfiguration",
    value: function computeConfiguration() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.cardkit.computeConfiguration(options);
    }
  }]);

  return CardKitRenderer;
}();

module.exports = CardKitRenderer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var deepExtend = __webpack_require__(12);
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
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

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
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
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

/***/ })
/******/ ]);
});