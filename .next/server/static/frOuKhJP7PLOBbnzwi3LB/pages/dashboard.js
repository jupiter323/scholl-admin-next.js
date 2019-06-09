module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/NWr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This function pulls the matching value objects from state for each Dropdown component if an existing value exists - otherwise, returns empty object
var getValueFromState = function getValueFromState(valueKey, state) {
  var obj = {}; // eslint-disable-next-line array-callback-return

  state.map(function (option) {
    if (option.value === valueKey) {
      obj = option;
    }
  });
  return obj;
};

/* harmony default export */ __webpack_exports__["a"] = (getValueFromState);

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "2Iwh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Portal */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);







var Portal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Portal, _React$Component);

  function Portal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Portal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Portal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.element = document.querySelector(this.props.selector);
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.element === undefined) {
        return null;
      }

      return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.createPortal(this.props.children, this.element);
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4vSA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Rgyi");
/* harmony import */ var _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhPQ");





var ControlComponent = function ControlComponent(props) {
  var _props$selectProps = props.selectProps,
      placeholder = _props$selectProps.placeholder,
      label = _props$selectProps.label,
      className = _props$selectProps.className;
  var categoryCheck = label === 'Categories';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__[/* ControlWrapper */ "a"], {
    invalid: className,
    categoryCheck: categoryCheck
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__[/* DropdownStyles */ "a"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, categoryCheck ? 'Categories' : placeholder), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["components"].Control, props)));
};

/* harmony default export */ __webpack_exports__["a"] = (ControlComponent);

/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u9iw");


/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EABn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ControlComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4vSA");
/* harmony import */ var _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhPQ");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Rgyi");






var Dropdown = function Dropdown(_ref) {
  var value = _ref.value,
      label = _ref.label,
      dropdownKey = _ref.dropdownKey,
      _ref$stateKey = _ref.stateKey,
      stateKey = _ref$stateKey === void 0 ? null : _ref$stateKey,
      _onChange = _ref.onChange,
      options = _ref.options,
      _ref$valid = _ref.valid,
      valid = _ref$valid === void 0 ? true : _ref$valid,
      padRight = _ref.padRight,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    className: className,
    valid: valid || !valid && value === {},
    padRight: padRight
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    onChange: function onChange(event) {
      return _onChange(event.value, dropdownKey, stateKey);
    },
    components: {
      Control: _styles_ControlComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
    },
    name: "categoryOptions",
    classNamePrefix: dropdownKey === 'difficulty' ? 'expanded-select' : 'select',
    placeholder: label,
    styles: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__[/* DropdownStyles */ "a"],
    isClearable: false,
    isSearchable: false,
    value: value,
    instanceId: "dropdown-select"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "Rgyi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DropdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__DropdownWrapper",
  componentId: "s47nns-0"
})(["padding:5px 0;padding-right:", ";", ";&.flex-50{flex-basis:50%!important;}"], function (_ref) {
  var padRight = _ref.padRight;
  return padRight ? '20px' : '';
}, function (_ref2) {
  var valid = _ref2.valid;
  return !valid ? "div.select__control, div.expanded-select__control, div.multi-select__control { \n        border-color: #F44336!important; \n        &:focus {\n          border-color: inherit;\n      }\n    }" : '';
});
var ControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ControlWrapper",
  componentId: "s47nns-1"
})(["p{padding-left:", ";margin-bottom:5px;color:#959595;margin-top:", ";}", ";"], function (_ref3) {
  var categoryCheck = _ref3.categoryCheck;
  return categoryCheck ? '10px' : '';
}, function (_ref4) {
  var categoryCheck = _ref4.categoryCheck;
  return categoryCheck ? '20px' : '';
}, function (_ref5) {
  var invalid = _ref5.invalid;
  return invalid ? "div.multi-select__control {\n      border-color: #F44336!important;\n    }" : '';
});
/* harmony default export */ __webpack_exports__["b"] = (DropdownWrapper);

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YckE":
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "u9iw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// CONCATENATED MODULE: ./components/Dashboard/components/FilterSection/index.js








/* eslint-disable jsx-a11y/no-static-element-interactions */


var FilterSection_FilterSection =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(FilterSection, _React$Component);

  function FilterSection(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FilterSection);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FilterSection).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleShowFilters", function () {
      return _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FilterSection, [{
    key: "render",
    value: function render() {
      var open = this.state.open;
      var _this$props = this.props,
          filters = _this$props.filters,
          eventFilters = _this$props.eventFilters,
          onClearFilters = _this$props.onClearFilters,
          handleFilterClick = _this$props.handleFilterClick;
      return external_react_default.a.createElement("div", {
        className: "calendar-filter filter-form-holder"
      }, external_react_default.a.createElement("ul", {
        className: "collapsible expandable",
        style: {
          minHeight: '0'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "collapsible-body",
        style: open ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, external_react_default.a.createElement("div", {
        className: "filter-form_checkbox-list-holder justify-center"
      }, external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "className",
        name: "className",
        checked: filters.indexOf('className') !== -1,
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "className"
      }, "Some Class Name")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "tutoring",
        name: "tutoring",
        checked: filters.indexOf('tutoring') !== -1,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "tutoring"
      }, "Tutoring"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "sessions",
        name: "sessions",
        checked: eventFilters.indexOf('sessions') !== -1,
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          return handleFilterClick(target.name, true);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "sessions"
      }, "Sessions")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "lessons",
        name: "lessons",
        checked: eventFilters.indexOf('lessons') !== -1,
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          return handleFilterClick(target.name, true);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "lessons"
      }, "Lessons"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "worksheets",
        name: "worksheets",
        checked: eventFilters.indexOf('worksheets') !== -1,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return handleFilterClick(target.name, true);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "worksheets"
      }, "Worksheets")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "testSections",
        name: "testSections",
        checked: eventFilters.indexOf('testSections') !== -1,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return handleFilterClick(target.name, true);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "testSections"
      }, "Test Sections")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "simulatedSats",
        name: "simulatedSats",
        checked: eventFilters.indexOf('simulatedSats') !== -1,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return handleFilterClick(target.name, true);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "simulatedSats"
      }, "Simulated SATs")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "targetTests",
        name: "targetTests",
        checked: eventFilters.indexOf('targetTests') !== -1,
        onChange: function onChange(_ref9) {
          var target = _ref9.target;
          return handleFilterClick(target.name, true);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "targetTests"
      }, "Target Tests"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueToday",
        name: "dueToday",
        checked: filters.indexOf('dueToday') !== -1,
        onChange: function onChange(_ref10) {
          var target = _ref10.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueToday"
      }, "Due Today")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueNextSession",
        name: "dueNextSession",
        checked: filters.indexOf('dueNextSession') !== -1,
        onChange: function onChange(_ref11) {
          var target = _ref11.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueNextSession"
      }, "Due By Next Session")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueThisWeek",
        name: "dueThisWeek",
        checked: filters.indexOf('dueThisWeek') !== -1,
        onChange: function onChange(_ref12) {
          var target = _ref12.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueThisWeek"
      }, "Due this Week")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "overdue",
        name: "overdue",
        checked: filters.indexOf('overdue') !== -1,
        onChange: function onChange(_ref13) {
          var target = _ref13.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "overdue"
      }, "Overdue"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "complete",
        name: "complete",
        checked: filters.indexOf('complete') !== -1,
        onChange: function onChange(_ref14) {
          var target = _ref14.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "complete"
      }, "Complete")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "incomplete",
        name: "incomplete",
        checked: filters.indexOf('incomplete') !== -1,
        onChange: function onChange(_ref15) {
          var target = _ref15.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "incomplete"
      }, "Incomplete")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "future",
        name: "future",
        checked: filters.indexOf('future') !== -1,
        onChange: function onChange(_ref16) {
          var target = _ref16.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "future"
      }, "Future"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "reading",
        name: "reading",
        checked: filters.indexOf('reading') !== -1,
        onChange: function onChange(_ref17) {
          var target = _ref17.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "reading"
      }, "Reading")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "writing",
        name: "writing",
        checked: filters.indexOf('writing') !== -1,
        onChange: function onChange(_ref18) {
          var target = _ref18.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "writing"
      }, "Writing")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "math",
        name: "math",
        checked: filters.indexOf('math') !== -1,
        onChange: function onChange(_ref19) {
          var target = _ref19.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "math"
      }, "Math"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "beginning",
        name: "beginning",
        checked: filters.indexOf('beginning') !== -1,
        onChange: function onChange(_ref20) {
          var target = _ref20.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "beginning"
      }, "Beginning")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "developing",
        name: "developing",
        checked: filters.indexOf('developing') !== -1,
        onChange: function onChange(_ref21) {
          var target = _ref21.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "developing"
      }, "Developing")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "accomplished",
        name: "accomplished",
        checked: filters.indexOf('accomplished') !== -1,
        onChange: function onChange(_ref22) {
          var target = _ref22.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "accomplished"
      }, "Accomplished")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "exemplary",
        name: "exemplary",
        checked: filters.indexOf('exemplary') !== -1,
        onChange: function onChange(_ref23) {
          var target = _ref23.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "exemplary"
      }, "Exemplary"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "hasReviewFlags",
        name: "hasReviewFlags",
        checked: filters.indexOf('hasReviewFlags') !== -1,
        onChange: function onChange(_ref24) {
          var target = _ref24.target;
          return handleFilterClick(target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "hasReviewFlags"
      }, "Has Review Flags"))))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-flex-end"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l8"
      }), external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "option-filters"
      }, external_react_default.a.createElement("div", {
        className: "option-item clear"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: onClearFilters
      }, "Clear Filters")), external_react_default.a.createElement("div", {
        className: "option-item"
      }, external_react_default.a.createElement("span", {
        className: "collapsible-header",
        onClick: this.onToggleShowFilters
      }, external_react_default.a.createElement("span", {
        className: "open-text"
      }, open ? 'Hide Filters' : 'Open Filters')))))))));
    }
  }]);

  return FilterSection;
}(external_react_default.a.Component);

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/Dashboard/utils/dateAndCalendarUtils.js

var getCalendarCellClassName = function getCalendarCellClassName(hasEvents, inActiveColumn) {
  var classNames = 'cal-cell1 cal-cell ';

  if (!hasEvents) {
    classNames += 'day-no-events ';
  } else {
    classNames += 'day-has-events ';
  }

  if (inActiveColumn) {
    classNames += 'active-cell';
  }

  return classNames;
};
var dateAndCalendarUtils_getCalendarDayClassName = function getCalendarDayClassName(date, inMonth, activeDateKey) {
  var className = 'cal-month-day ';

  if (activeDateKey.includes('column-7') || activeDateKey.includes('column-1')) {
    className += 'cal-day-weekend ';
  }

  if (date === external_moment_default()().format('MM/DD/YY')) {
    className += 'cal-day-today ';
  }

  if (inMonth === true) {
    className += 'cal-day-inmonth ';
  } else if (inMonth === false) {
    className += 'cal-day-outmonth ';
  }

  return className;
};
var calendarMap = {
  '0': 'December',
  '1': 'January',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
  '13': 'January'
};
var currentMonthIndex = Number(external_moment_default()().format('M')) - 1;
var currentYear = new Date().getFullYear().toString().substr(-2);
var dateAndCalendarUtils_getDayDate = function getDayDate(date) {
  return external_moment_default()(date).format('ddd, MMM Do');
};
var getFirstDay = function getFirstDay(activeMonthIndex) {
  return new Date(2019, activeMonthIndex).getDay();
};
var getDaysInActiveMonth = function getDaysInActiveMonth(activeMonthIndex) {
  return 32 - new Date(2019, activeMonthIndex, 32).getDate();
};
var getDaysInPreviousMonth = function getDaysInPreviousMonth(activeMonthIndex) {
  return 32 - new Date(2019, activeMonthIndex - 1, 32).getDate();
};
var getNextMonthAsCurrentMonth = function getNextMonthAsCurrentMonth(activeMonthIndex) {
  return activeMonthIndex > 9 ? activeMonthIndex + 1 : "0".concat(activeMonthIndex + 1);
};
// CONCATENATED MODULE: ./components/Dashboard/components/CalendarHeader/index.js







 // eslint-disable-next-line react/prefer-stateless-function

var CalendarHeader_CalendarHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(CalendarHeader, _React$Component);

  function CalendarHeader() {
    Object(classCallCheck["a" /* default */])(this, CalendarHeader);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CalendarHeader).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(CalendarHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeMonth = _this$props.activeMonth,
          onSetActiveMonth = _this$props.onSetActiveMonth;
      return external_react_default.a.createElement("div", {
        className: "calendar-header",
        style: {
          zIndex: '9'
        }
      }, external_react_default.a.createElement("div", {
        className: "calendar-view-switcher"
      }, external_react_default.a.createElement("ul", {
        className: "switcher"
      }, external_react_default.a.createElement("li", {
        className: "active col",
        "data-view": "view-month"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "Month View")), external_react_default.a.createElement("li", {
        className: "col",
        "data-view": "view-day"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "Day View")))), external_react_default.a.createElement("div", {
        className: "nav-slick-calendar",
        style: {
          opacity: '1'
        }
      }, external_react_default.a.createElement(external_react_slick_default.a, {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: currentMonthIndex,
        onInit: function onInit() {
          return onSetActiveMonth(currentMonthIndex);
        },
        afterChange: onSetActiveMonth,
        nextArrow: external_react_default.a.createElement("div", null, calendarMap[activeMonth + 2]),
        prevArrow: external_react_default.a.createElement("div", null, calendarMap[activeMonth])
      }, external_react_default.a.createElement("div", {
        className: "slide"
      }, "January"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "February"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "March"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "April"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "May"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "June"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "July"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "August"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "September"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "October"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "November"), external_react_default.a.createElement("div", {
        className: "slide"
      }, "December"))));
    }
  }]);

  return CalendarHeader;
}(external_react_default.a.Component);

/* harmony default export */ var components_CalendarHeader = (CalendarHeader_CalendarHeader);
// CONCATENATED MODULE: ./components/Dashboard/components/CalendarRow/index.js








/* eslint-disable react/no-array-index-key */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */



var CalendarRow_CalendarRow =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(CalendarRow, _React$Component);

  function CalendarRow() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, CalendarRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(CalendarRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleAssignSessionModal", function (event, date) {
      event.preventDefault();
      var _this$props = _this.props,
          onToggleAssignSessionModal = _this$props.onToggleAssignSessionModal,
          onToggleAddDropdown = _this$props.onToggleAddDropdown;
      onToggleAssignSessionModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleAssignLessonsModal", function (event, date) {
      event.preventDefault();
      var _this$props2 = _this.props,
          onToggleAssignLessonsModal = _this$props2.onToggleAssignLessonsModal,
          onToggleAddDropdown = _this$props2.onToggleAddDropdown;
      onToggleAssignLessonsModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleAssignWorksheetsModal", function (event, date) {
      event.preventDefault();
      var _this$props3 = _this.props,
          onToggleAssignWorksheetsModal = _this$props3.onToggleAssignWorksheetsModal,
          onToggleAddDropdown = _this$props3.onToggleAddDropdown;
      onToggleAssignWorksheetsModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleAssignTestSectionModal", function (event, date) {
      event.preventDefault();
      var _this$props4 = _this.props,
          onToggleAssignTestSectionModal = _this$props4.onToggleAssignTestSectionModal,
          onToggleAddDropdown = _this$props4.onToggleAddDropdown;
      onToggleAssignTestSectionModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleAssignSimulatedSatModal", function (event, date) {
      event.preventDefault();
      var _this$props5 = _this.props,
          onToggleAssignSimulatedSatModal = _this$props5.onToggleAssignSimulatedSatModal,
          onToggleAddDropdown = _this$props5.onToggleAddDropdown;
      onToggleAssignSimulatedSatModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapDateLessons", function (shouldMapLessons, lessons) {
      if (shouldMapLessons) {
        return lessons.map(function (lesson, index) {
          return external_react_default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, lesson.completed && external_react_default.a.createElement("span", {
            className: "event-check lesson-check"
          }, external_react_default.a.createElement("i", {
            className: "icon-check02"
          })), external_react_default.a.createElement("span", {
            className: "event event-lesson-box"
          }, lesson.title));
        });
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapDateWorksheets", function (shouldMapWorksheets, worksheets) {
      if (shouldMapWorksheets) {
        return worksheets.map(function (worksheet, index) {
          return external_react_default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, worksheet.completed && external_react_default.a.createElement("span", {
            className: "event-check worksheet-check"
          }, external_react_default.a.createElement("i", {
            className: "icon-check02"
          })), external_react_default.a.createElement("span", {
            className: "event event-worksheet-box"
          }, worksheet.title));
        });
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapTestSections", function (shouldMapTestSections, testSections) {
      if (shouldMapTestSections) {
        return testSections.map(function (testSection, index) {
          return external_react_default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, external_react_default.a.createElement("span", {
            className: "event event-test-box"
          }, "Test Section: ", testSection.version));
        });
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapSimulatedSats", function (shouldMapSimulatedSats, simulatedSat) {
      if (shouldMapSimulatedSats) {
        return simulatedSat.map(function (sat, index) {
          return external_react_default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, external_react_default.a.createElement("span", {
            className: "event event-sat-box"
          }, sat.version));
        });
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapRowDates", function () {
      return _this.props.rows && _this.props.rows.map(function (rowDate) {
        var _this$props6 = _this.props,
            eventFilters = _this$props6.eventFilters,
            activeDate = _this$props6.activeDate,
            addDropdownOpen = _this$props6.addDropdownOpen,
            deleteDropdownOpen = _this$props6.deleteDropdownOpen,
            onSetActiveDate = _this$props6.onSetActiveDate,
            onToggleAddDropdown = _this$props6.onToggleAddDropdown,
            onToggleDeleteDropdown = _this$props6.onToggleDeleteDropdown,
            activeColumn = _this$props6.activeColumn;
        var date = rowDate.date,
            dayDate = rowDate.dayDate,
            calDate = rowDate.calDate,
            activeDateKey = rowDate.activeDateKey,
            inMonth = rowDate.inMonth,
            _rowDate$sessions = rowDate.sessions,
            sessions = _rowDate$sessions === void 0 ? [] : _rowDate$sessions,
            _rowDate$lessons = rowDate.lessons,
            lessons = _rowDate$lessons === void 0 ? [] : _rowDate$lessons,
            _rowDate$worksheets = rowDate.worksheets,
            worksheets = _rowDate$worksheets === void 0 ? [] : _rowDate$worksheets,
            _rowDate$testSections = rowDate.testSections,
            testSections = _rowDate$testSections === void 0 ? [] : _rowDate$testSections,
            _rowDate$simulatedSat = rowDate.simulatedSat,
            simulatedSat = _rowDate$simulatedSat === void 0 ? [] : _rowDate$simulatedSat;
        var hasEvents = sessions.length > 0 || lessons.length > 0 || worksheets.length > 0 || testSections.length > 0 || simulatedSat.length > 0;
        var inActiveColumn = activeDateKey && activeDateKey[13] === activeColumn;
        var isActiveDate = activeDate === activeDateKey;
        var hasEventFilters = eventFilters.length > 0;
        var shouldMapSessions = !hasEventFilters && sessions.length || hasEventFilters && eventFilters.indexOf('sessions') !== -1;
        var shouldMapLessons = !hasEventFilters && lessons.length || lessons.length && hasEventFilters && eventFilters.indexOf('lessons') !== -1;
        var shouldMapWorksheets = !hasEventFilters && worksheets.length || worksheets.length && hasEventFilters && eventFilters.indexOf('worksheets') !== -1;
        var shouldMapTestSections = !hasEventFilters && testSections.length || testSections.length && hasEventFilters && eventFilters.indexOf('testSections') !== -1;
        var shouldMapSimulatedSats = !hasEventFilters && simulatedSat.length || simulatedSat.length && hasEventFilters && eventFilters.indexOf('simulatedSats') !== -1;

        if (!inMonth) {
          return external_react_default.a.createElement("td", {
            className: "cal-cell1 cal-cell cal-day-outmonth",
            key: dayDate
          }, external_react_default.a.createElement("div", {
            className: dateAndCalendarUtils_getCalendarDayClassName(date, inMonth, activeDateKey)
          }, external_react_default.a.createElement("span", {
            className: "day-date"
          }, dayDate), external_react_default.a.createElement("span", {
            className: "cal-date"
          }, calDate)));
        }

        return external_react_default.a.createElement("td", {
          key: activeDateKey,
          className: getCalendarCellClassName(hasEvents, inActiveColumn),
          onClick: function onClick() {
            return onSetActiveDate(activeDateKey);
          }
        }, external_react_default.a.createElement("div", {
          className: dateAndCalendarUtils_getCalendarDayClassName(date, inMonth, activeDateKey)
        }, external_react_default.a.createElement("span", {
          className: "day-date"
        }, dayDate), external_react_default.a.createElement("span", {
          className: "cal-date"
        }, calDate), external_react_default.a.createElement("ul", {
          className: "day-collapsible collapsible"
        }, external_react_default.a.createElement("li", {
          className: isActiveDate ? 'collapsible-holder active' : 'collapsible-holder',
          style: {
            transform: 'none'
          }
        }, external_react_default.a.createElement("div", {
          className: "collapsible-header",
          style: {
            display: inActiveColumn && isActiveDate ? 'none' : 'block'
          }
        }, external_react_default.a.createElement("span", {
          className: "fake-close"
        }, external_react_default.a.createElement("span", {
          className: "icon-close-thin"
        })), hasEvents ? external_react_default.a.createElement("ul", {
          className: "events-list events-list-short"
        }, shouldMapSessions ? external_react_default.a.createElement("li", {
          className: "event-frame event-title"
        }, external_react_default.a.createElement("span", {
          className: "event-title-box"
        }, "Session ", sessions.length)) : null, shouldMapLessons ? external_react_default.a.createElement("li", {
          className: "event-frame"
        }, external_react_default.a.createElement("span", {
          className: "event event-lesson-box"
        }, " ", lessons.length, " ", external_react_default.a.createElement("span", {
          className: "event-text"
        }, "Lesson", lessons.length > 1 && 's'))) : null, shouldMapWorksheets ? external_react_default.a.createElement("li", {
          className: "event-frame"
        }, external_react_default.a.createElement("span", {
          className: "event event-worksheet-box"
        }, worksheets.length, " ", external_react_default.a.createElement("span", {
          className: "event-text"
        }, "Worksheet", worksheets.length > 1 && 's'))) : null, shouldMapTestSections ? external_react_default.a.createElement("li", {
          className: "event-frame"
        }, external_react_default.a.createElement("span", {
          className: "event event-test-box"
        }, testSections.length, " ", external_react_default.a.createElement("span", {
          className: "event-text"
        }, "Test Section", testSections.length > 1 && 's'))) : null, shouldMapSimulatedSats ? external_react_default.a.createElement("li", {
          className: "event-frame"
        }, external_react_default.a.createElement("span", {
          className: "event event-sat-box"
        }, simulatedSat.length, " ", external_react_default.a.createElement("span", {
          className: "event-text"
        }, "Simulated SAT"))) : null) : null), external_react_default.a.createElement("div", {
          className: "collapsible-body",
          style: {
            opacity: inActiveColumn && isActiveDate ? '1' : '0',
            visibility: inActiveColumn ? 'visible' : 'hidden'
          }
        }, hasEvents ? external_react_default.a.createElement("ul", {
          className: "events-list"
        }, shouldMapSessions && sessions.map(function (session, index) {
          return external_react_default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, external_react_default.a.createElement("span", {
            className: "event-title-box"
          }, session.title));
        }), _this.mapDateLessons(shouldMapLessons, lessons), _this.mapDateWorksheets(shouldMapWorksheets, worksheets), _this.mapTestSections(shouldMapTestSections, testSections), _this.mapSimulatedSats(shouldMapSimulatedSats, simulatedSat)) : null, external_react_default.a.createElement("div", {
          className: "day-footer"
        }, external_react_default.a.createElement("ul", {
          className: "links-list"
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#",
          "data-target": "dropdown_day_240119_add",
          onClick: onToggleAddDropdown,
          className: "link-add dropdown-trigger waves-effect waves-teal"
        }, "Add"), external_react_default.a.createElement("ul", {
          id: "dropdown_day_240119_add",
          className: "dropdown-content",
          style: {
            display: addDropdownOpen ? 'block' : 'none',
            opacity: addDropdownOpen ? '100' : '0'
          }
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignSessionModal(event, date);
          },
          className: "modal-trigger"
        }, "Session")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignLessonsModal(event, date);
          },
          className: "modal-trigger"
        }, "Lesson")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignWorksheetsModal(event, date);
          },
          className: "modal-trigger"
        }, "Worksheet")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignTestSectionModal(event, date);
          },
          className: "modal-trigger"
        }, "Test Section")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignSimulatedSatModal(event, date);
          },
          className: "modal-trigger"
        }, "Simulated SAT")))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#",
          "data-target": "dropdown_day_240119_delete",
          onClick: onToggleDeleteDropdown,
          className: "link-delete dropdown-trigger waves-effect waves-teal"
        }, "Delete"), external_react_default.a.createElement("ul", {
          id: "dropdown_day_240119_delete",
          className: "dropdown-content",
          style: {
            display: deleteDropdownOpen ? 'block' : 'none',
            opacity: deleteDropdownOpen ? '100' : '0'
          }
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#modal_edit_delete_section",
          className: "modal-trigger"
        }, "Session")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#modal_edit_delete_lesson",
          className: "modal-trigger"
        }, "Lesson")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#modal_edit_delete_worksheet",
          className: "modal-trigger"
        }, "Worksheet")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#modal_edit_delete_test_section",
          className: "modal-trigger"
        }, "Test Section")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!",
          className: "disabled"
        }, "Simulated SAT")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!",
          className: "disabled"
        }, "Target Test")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!"
        }, "All")))))))))));
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(CalendarRow, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("tr", {
        className: "cal-row-fluid"
      }, this.mapRowDates());
    }
  }]);

  return CalendarRow;
}(external_react_default.a.Component);

/* harmony default export */ var components_CalendarRow = (CalendarRow_CalendarRow);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("5Buo");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css
var react_datepicker_cssmodules = __webpack_require__("xA6B");

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/ClickOffComponentWrapper/index.js
var ClickOffComponentWrapper = __webpack_require__("x4x+");

// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignSessionModal/index.js
















var AssignSessionModal_AssignSessionModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AssignSessionModal, _React$Component);

  function AssignSessionModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AssignSessionModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AssignSessionModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onResetModal", function () {
      return _this.setState({
        date: '',
        startTime: '',
        endTime: '',
        notes: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "assignSession", function () {
      var onAssignSession = _this.props.onAssignSession;
      var _this$state = _this.state,
          unformattedDate = _this$state.date,
          unformattedStartTime = _this$state.startTime,
          unformattedEndTime = _this$state.endTime,
          notes = _this$state.notes;
      var date = external_moment_default()(unformattedDate).format('MM/DD/YY');
      var startTime = external_moment_default()(unformattedStartTime).format('hh:mm');
      var endTime = external_moment_default()(unformattedEndTime).format('hh:mm');
      onAssignSession({
        date: date,
        startTime: startTime,
        endTime: endTime,
        notes: notes,
        title: 'Session'
      });

      _this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDetailsChange", function (_ref) {
      var target = _ref.target;
      return _this.setState(Object(defineProperty["a" /* default */])({}, target.name, target.value));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDatePickerChange", function (field, value) {
      return _this.setState(Object(defineProperty["a" /* default */])({}, field, value));
    });

    _this.state = {
      date: '',
      startTime: '',
      endTime: '',
      notes: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AssignSessionModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var modalDate = this.props.modalDate;

      if (prevState.date === '' && modalDate) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          date: new Date(modalDate)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var _this$state2 = this.state,
          date = _this$state2.date,
          startTime = _this$state2.startTime,
          endTime = _this$state2.endTime,
          notes = _this$state2.notes;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_assign_session",
        className: "jsx-1216404812" + " " + "modal modal-custom modal-calendar"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#14b04b',
          color: '#fff'
        },
        className: "jsx-1216404812" + " " + "card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-1216404812"
      }, external_react_default.a.createElement("span", {
        className: "jsx-1216404812" + " " + "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-clock2"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1216404812" + " " + "heading-block"
      }, " New Session")))), external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col right-align"
      }, external_react_default.a.createElement("a", {
        href: "#!",
        className: "jsx-1216404812" + " " + "panel-link close modal-close"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-close-thin"
      }))))), external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "card-body"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col s12"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-calendar"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: date,
        className: "full-width",
        dateFormat: "MM/dd/yy",
        id: "date",
        name: "date",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('date', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "date",
        className: "jsx-1216404812" + " " + ((date ? 'label active' : 'label') || "")
      }, "Date")))), external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-clock2"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: startTime,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        dateFormat: "h:mm aa",
        timeCaption: "Time",
        id: "startTime",
        name: "startTime",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('startTime', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "startTime",
        className: "jsx-1216404812" + " " + ((startTime ? 'label active' : 'label') || "")
      }, "Start Time"))), external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-clock2"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: endTime,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        dateFormat: "h:mm aa",
        timeCaption: "Time",
        id: "endTime",
        name: "endTime",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('endTime', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "endTime",
        className: "jsx-1216404812" + " " + ((endTime ? 'label active' : 'label') || "")
      }, "End Time")))), external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col s12"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "input-field input-field-textarea"
      }, external_react_default.a.createElement("textarea", {
        id: "notes",
        name: "notes",
        cols: "40",
        rows: "7",
        value: notes,
        onChange: this.handleDetailsChange,
        className: "jsx-1216404812" + " " + "textarea-scroll"
      }), external_react_default.a.createElement("label", {
        htmlFor: "notes",
        className: "jsx-1216404812" + " " + ((notes ? 'label active' : 'label') || "")
      }, "Session Notes:"))))), external_react_default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "modal-footer modal-footer-width"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-1216404812" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.assignSession,
        className: "jsx-1216404812" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Add Session"))))))), external_react_default.a.createElement(style_default.a, {
        id: "1216404812"
      }, [".overlay.jsx-1216404812{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-1216404812{margin:0;border-radius:6px;}", ".modal.jsx-1216404812{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-1216404812{opacity:1;visibility:visible;}"]));
    }
  }]);

  return AssignSessionModal;
}(external_react_default.a.Component);

/* harmony default export */ var Modals_AssignSessionModal = (AssignSessionModal_AssignSessionModal);
// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js








/* eslint-disable jsx-a11y/no-static-element-interactions */



var sortByOptions = [{
  label: 'Page Number',
  value: 'pageNumber'
}, {
  label: 'Problems',
  value: 'problems'
}, {
  label: 'Time Estimate',
  value: 'timeEstimate'
}, {
  label: 'Subject',
  value: 'subject'
}];

var components_FilterSection_FilterSection =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(FilterSection, _React$Component);

  function FilterSection(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FilterSection);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FilterSection).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleShowFilters", function () {
      return _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        titleFilter: '',
        unitFilter: ''
      }, _this.props.onClearFilters);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearchChange", function (_ref2) {
      var target = _ref2.target;
      return _this.setState(Object(defineProperty["a" /* default */])({}, target.name, target.value));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "submitSearchFilter", function (searchType) {
      var _this$props = _this.props,
          onSetFilteredState = _this$props.onSetFilteredState,
          onUnsetFilteredState = _this$props.onUnsetFilteredState;

      if (_this.state[searchType] === '') {
        onUnsetFilteredState(searchType);
      }

      var transformedTitle = _this.state[searchType].replace(/\s/g, "").toLowerCase();

      onSetFilteredState(searchType, transformedTitle);
    });

    _this.state = {
      open: true,
      titleFilter: '',
      unitFilter: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          handleFilterClick = _this$props2.handleFilterClick,
          subjectFilters = _this$props2.subjectFilters,
          typeFilters = _this$props2.typeFilters,
          sort = _this$props2.sort,
          onSetSort = _this$props2.onSetSort;
      var _this$state = this.state,
          open = _this$state.open,
          titleFilter = _this$state.titleFilter,
          unitFilter = _this$state.unitFilter;
      return external_react_default.a.createElement("div", {
        className: "filter-form-holder"
      }, external_react_default.a.createElement("ul", {
        className: "collapsible expandable",
        style: {
          minHeight: '0'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "collapsible-body",
        style: open ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, external_react_default.a.createElement("div", {
        className: "filter-form_checkbox-list-holder justify-center"
      }, external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "Reading",
        name: "Reading",
        checked: subjectFilters.indexOf('Reading') !== -1,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "Reading"
      }, "Reading")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "Writing",
        name: "Writing",
        checked: subjectFilters.indexOf('Writing') !== -1,
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "Writing"
      }, "Writing")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "Math",
        name: "Math",
        checked: subjectFilters.indexOf('Math') !== -1,
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "Math"
      }, "Math"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "challenge",
        name: "challenge",
        checked: typeFilters.indexOf('challenge') !== -1,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return handleFilterClick('type', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "challenge"
      }, "Challenge + Practice")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "homework",
        name: "homework",
        checked: typeFilters.indexOf('homework') !== -1,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return handleFilterClick('type', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "homework"
      }, "Homework Drill")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "readingFromWorkbook",
        name: "readingFromWorkbook",
        checked: typeFilters.indexOf('readingFromWorkbook') !== -1,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return handleFilterClick('type', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "readingFromWorkbook"
      }, "Reading from Workbook")))), external_react_default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "titleFilter",
        name: "titleFilter",
        className: "input-control validate",
        value: titleFilter,
        onChange: this.handleSearchChange
      }), external_react_default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.submitSearchFilter('titleFilter');
        },
        className: "search-button"
      }, external_react_default.a.createElement("i", {
        className: "icon-search"
      })), external_react_default.a.createElement("label", {
        className: titleFilter.length ? 'label active' : 'label',
        htmlFor: "titleFilter"
      }, "Search By Title"))), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "unitFilter",
        name: "unitFilter",
        className: "input-control validate",
        value: unitFilter,
        onChange: this.handleSearchChange
      }), external_react_default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.submitSearchFilter('unitFilter');
        },
        className: "search-button"
      }, external_react_default.a.createElement("i", {
        className: "icon-search"
      })), external_react_default.a.createElement("label", {
        className: unitFilter.length ? 'label active' : 'label',
        htmlFor: "unitFilter"
      }, "Search By Unit"))))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m6"
      }, external_react_default.a.createElement("div", {
        className: "input-field",
        style: {
          marginBottom: '0',
          marginTop: '0'
        }
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(sort, sortByOptions),
        onChange: onSetSort,
        options: sortByOptions,
        label: "Sort By",
        stateKey: "sort",
        dropdownKey: "sort"
      }))))), external_react_default.a.createElement("div", {
        className: "switcher-block col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "view-switcher"
      }, external_react_default.a.createElement("ul", {
        className: "switcher center-align"
      }, external_react_default.a.createElement("li", {
        className: "active",
        "data-view": "view-full"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "Month View")), external_react_default.a.createElement("li", {
        "data-view": "view-list"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "Day View"))))), external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "option-filters"
      }, external_react_default.a.createElement("div", {
        className: "option-item clear"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onClearFilters
      }, "Clear Filters")), external_react_default.a.createElement("div", {
        className: "option-item"
      }, external_react_default.a.createElement("span", {
        className: "collapsible-header",
        onClick: this.onToggleShowFilters
      }, external_react_default.a.createElement("span", {
        className: "open-text"
      }, open ? 'Hide Filters' : 'Open Filters')))))))));
    }
  }]);

  return FilterSection;
}(external_react_default.a.Component);

/* harmony default export */ var AssignLessonModal_components_FilterSection = (components_FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js









var LessonCard_LessonCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LessonCard, _React$Component);

  function LessonCard() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, LessonCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(LessonCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDropdownClick", function (event) {
      var _this$props = _this.props,
          onSetDropdown = _this$props.onSetDropdown,
          onCloseDropdown = _this$props.onCloseDropdown,
          dropdownIsOpen = _this$props.dropdownIsOpen,
          index = _this$props.index;
      event.preventDefault();

      if (dropdownIsOpen) {
        return onCloseDropdown();
      }

      return onSetDropdown(index);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "editLesson", function () {
      return console.warn('Pending implementation of edit modal/functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "cloneLesson", function () {
      return console.warn('Pending implementation of clone lesson functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showOwner", function () {
      return console.warn('Pending implementation of show owner functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "deleteLesson", function () {
      return console.warn('Pending implementation of delete lesson functionality');
    });

    return _this;
  }

  Object(createClass["a" /* default */])(LessonCard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          lesson = _this$props2.lesson,
          selectedLessons = _this$props2.selectedLessons,
          handleLessonClick = _this$props2.handleLessonClick,
          index = _this$props2.index,
          dropdownIndex = _this$props2.dropdownIndex,
          dropdownIsOpen = _this$props2.dropdownIsOpen;
      var unit = lesson.unit,
          title = lesson.title,
          subject = lesson.subject,
          timeEstimate = lesson.timeEstimate,
          problems = lesson.problems,
          pageNumber = lesson.pageNumber,
          type = lesson.type;
      return external_react_default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, external_react_default.a.createElement("div", {
        className: "card-checkbox"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        checked: selectedLessons.indexOf(lesson) !== -1,
        onChange: function onChange() {
          return handleLessonClick(lesson);
        }
      }), external_react_default.a.createElement("div", {
        className: "checkbox-card card-main card-lesson-detail card-assigned card"
      }, external_react_default.a.createElement("div", {
        className: "card-panel",
        style: {
          backgroundColor: '#666',
          color: '#fff'
        }
      }, external_react_default.a.createElement("div", {
        className: "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "icon-col col s2"
      }, external_react_default.a.createElement("span", {
        className: "block-icon"
      }, external_react_default.a.createElement("i", {
        className: "icon-books-l"
      }), external_react_default.a.createElement("span", {
        className: "text-icon"
      }, "Lesson"))), external_react_default.a.createElement("div", {
        className: "col s9"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-text"
      }, external_react_default.a.createElement("div", {
        className: "text-small"
      }, unit), external_react_default.a.createElement("div", {
        className: "text-large"
      }, title), external_react_default.a.createElement("div", {
        className: "text-small"
      }, "Subject: ", subject))), external_react_default.a.createElement("div", {
        className: "align-top col s1 right-align"
      }, external_react_default.a.createElement("div", {
        className: "row icons-row"
      }, external_react_default.a.createElement("div", {
        className: "dropdown-block col"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger btn",
        "data-target": "dropdown_lesson_01",
        onClick: this.handleDropdownClick
      }, external_react_default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? external_react_default.a.createElement("ul", {
        id: "dropdown_lesson_01",
        className: "dropdown-content dropdown-wide",
        style: {
          display: 'block',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.editLesson,
        className: "modal-trigger link-block"
      }, "Edit")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.cloneLesson
      }, "Clone")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.showOwner
      }, "Show Owner")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.deleteLesson
      }, "Delete"))) : null))))), external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("div", {
        className: "chart-container"
      }, external_react_default.a.createElement("div", {
        className: "chart-holder"
      }, external_react_default.a.createElement("span", {
        className: "svg-curved-bar",
        "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
        "data-duration": "1"
      }, external_react_default.a.createElement("svg", {
        width: "110px",
        height: "110px",
        viewBox: " 0 0 110 110"
      }, external_react_default.a.createElement("path", {
        fill: "none",
        style: {
          strokeWidth: '22',
          stroke: '#d6d6d6'
        },
        d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
      }), external_react_default.a.createElement("path", {
        "data-dinamic": true,
        fill: "none",
        style: {
          strokeWidth: '22',
          stroke: '#62b771'
        },
        d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
      }))), external_react_default.a.createElement("span", {
        className: "chart-value",
        style: {
          backgroundColor: '#4d4d4d'
        }
      })), external_react_default.a.createElement("div", {
        className: "chart-description"
      }, external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Time Est:"), external_react_default.a.createElement("dd", null, timeEstimate, " min")), external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Problems:"), external_react_default.a.createElement("dd", null, problems)))), external_react_default.a.createElement("div", {
        className: "card-footer-row center-align"
      }, external_react_default.a.createElement("div", {
        className: "card-footer-holder"
      }, external_react_default.a.createElement("p", null, "p.", pageNumber, "  (", type, ")")))))));
    }
  }]);

  return LessonCard;
}(external_react_default.a.Component);

;
/* harmony default export */ var components_LessonCard = (LessonCard_LessonCard);
// CONCATENATED MODULE: ./components/Dashboard/utils/sampleLessons.js
/* harmony default export */ var sampleLessons = ([{
  id: 1,
  subject: 'Reading',
  timeEstimate: '14',
  unit: 'Reading Unit #2',
  title: 'Reading Something 1',
  type: 'Challenge + Practice',
  problems: '20',
  pageNumber: '128'
}, {
  id: 2,
  subject: 'Math',
  timeEstimate: '30',
  unit: 'Math Unit #4',
  title: 'Pythagorean Theorem',
  type: 'Challenge + Practice',
  problems: '16',
  pageNumber: '132'
}, {
  id: 3,
  subject: 'Reading',
  timeEstimate: '23',
  unit: 'Reading Unit #3',
  title: 'More Reading Stuff',
  type: 'Reading from Workbook',
  problems: '20',
  pageNumber: '141'
}, {
  id: 4,
  subject: 'Reading',
  timeEstimate: '31',
  unit: 'Reading Unit #6',
  title: 'Reading Someing 7',
  type: 'Challenge + Practice',
  problems: '17',
  pageNumber: '127'
}, {
  id: 5,
  subject: 'Reading',
  timeEstimate: '65',
  unit: 'Reading Unit #4',
  title: 'Reading Someing 4',
  type: 'Homework Drill',
  problems: '19',
  pageNumber: '120'
}, {
  id: 6,
  subject: 'Reading',
  timeEstimate: '50',
  unit: 'Reading Unit #9',
  title: 'Reading Someing 9',
  type: 'Challenge + Practice',
  problems: '22',
  pageNumber: '141'
}, {
  id: 7,
  subject: 'Reading',
  timeEstimate: '31',
  unit: 'Reading Unit #1',
  title: 'Reading Someing 1',
  type: 'Homework Drill',
  problems: '29',
  pageNumber: '136'
}, {
  id: 8,
  subject: 'Writing',
  timeEstimate: '48',
  unit: 'Writing Unit #5',
  title: 'Writing Lesson 5',
  type: 'Homework Drill',
  problems: '14',
  pageNumber: '117'
}, {
  id: 9,
  subject: 'Writing',
  timeEstimate: '48',
  unit: 'Writing Unit #5',
  title: 'Writing Lesson 5',
  type: 'Reading from Workbook',
  problems: '14',
  pageNumber: '117'
}]);
// CONCATENATED MODULE: ./components/Dashboard/utils/sortOptions.js
var difficultySort = function difficultySort(_ref, _ref2) {
  var difficultyA = _ref.difficulty;
  var difficultyB = _ref2.difficulty;

  if (difficultyA > difficultyB) {
    return -1;
  }

  return 0;
};
var pageNumberSort = function pageNumberSort(_ref3, _ref4) {
  var pageNumberA = _ref3.pageNumber;
  var pageNumberB = _ref4.pageNumber;

  if (pageNumberA > pageNumberB) {
    return -1;
  }

  return 0;
};
var problemSort = function problemSort(_ref5, _ref6) {
  var problemCountA = _ref5.problems;
  var problemCountB = _ref6.problems;

  if (problemCountA > problemCountB) {
    return -1;
  }

  return 0;
};
var timeEstimateSort = function timeEstimateSort(_ref7, _ref8) {
  var timeEstimateA = _ref7.timeEstimate;
  var timeEstimateB = _ref8.timeEstimate;

  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
var subjectSort = function subjectSort(_ref9, _ref10) {
  var subjectA = _ref9.subject;
  var subjectB = _ref10.subject;

  if (subjectA > subjectB) {
    return -1;
  }

  return 0;
};
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/index.js
















var lessonTypeMap = {
  'Challenge + Practice': 'challenge',
  'Homework Drill': 'homework',
  'Reading from Workbook': 'readingFromWorkbook'
};

var AssignLessonModal_AssignLessonModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AssignLessonModal, _React$Component);

  function AssignLessonModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AssignLessonModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AssignLessonModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignSelectedDropdown", function () {
      return _this.setState(function (_ref) {
        var assignSelectedDropdownOpen = _ref.assignSelectedDropdownOpen;
        return {
          assignSelectedDropdownOpen: !assignSelectedDropdownOpen
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetDropdown", function (dropdownIndex) {
      return _this.setState({
        dropdownIndex: dropdownIndex,
        dropdownIsOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onResetModal", function () {
      return _this.setState({
        subjectFilters: [],
        typeFilters: [],
        sort: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetFilteredState", function (titleFilter, value) {
      return _this.setState(Object(defineProperty["a" /* default */])({}, titleFilter, value));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onUnsetFilteredState", function (titleFilter) {
      return _this.setState(Object(defineProperty["a" /* default */])({}, titleFilter, ''));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSortLessons", function (lessons) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'pageNumber':
          return lessons.sort(pageNumberSort);

        case 'problems':
          return lessons.sort(problemSort);

        case 'timeEstimate':
          return lessons.sort(timeEstimateSort);

        case 'subject':
          return lessons.sort(subjectSort);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByTitle", function () {
      var _this$state = _this.state,
          lessons = _this$state.lessons,
          titleFilter = _this$state.titleFilter;
      return lessons.reduce(function (finalArr, currentLesson) {
        var title = currentLesson.title;
        var lessonString = title.replace(/\s/g, "").toLowerCase();

        if (lessonString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
          finalArr.push(currentLesson);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByUnit", function () {
      var _this$state2 = _this.state,
          lessons = _this$state2.lessons,
          unitFilter = _this$state2.unitFilter;
      return lessons.reduce(function (finalArr, currentLesson) {
        var unit = currentLesson.unit;
        var lessonString = unit.replace(/\s/g, "").toLowerCase();

        if (lessonString.indexOf(unitFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
          finalArr.push(currentLesson);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterLessons", function () {
      var _this$state3 = _this.state,
          subjectFilters = _this$state3.subjectFilters,
          typeFilters = _this$state3.typeFilters,
          allLessons = _this$state3.lessons;
      var lessons = allLessons;

      if (subjectFilters.length) {
        lessons = lessons.filter(function (lesson) {
          return subjectFilters.indexOf(lesson.subject) !== -1;
        });
      }

      if (typeFilters.length) {
        lessons = lessons.filter(function (lesson) {
          return typeFilters.indexOf(lessonTypeMap[lesson.type]) !== -1;
        });
      }

      return lessons;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getMappableLessons", function () {
      var _this$state4 = _this.state,
          subjectFilters = _this$state4.subjectFilters,
          typeFilters = _this$state4.typeFilters,
          sort = _this$state4.sort,
          unitFilter = _this$state4.unitFilter,
          titleFilter = _this$state4.titleFilter,
          lessons = _this$state4.lessons;
      var mappableLessons = lessons;

      if (titleFilter.length) {
        mappableLessons = _this.onFilterByTitle();
      }

      if (unitFilter.length) {
        mappableLessons = _this.onFilterByUnit();
      }

      if (subjectFilters.length || typeFilters.length) {
        mappableLessons = _this.onFilterLessons();
      }

      if (sort) {
        return _this.onSortLessons(mappableLessons);
      }

      return mappableLessons;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFilterClick", function (filterType, filter) {
      var _this$state5 = _this.state,
          currentSubjectFilters = _this$state5.subjectFilters,
          currentTypeFilters = _this$state5.typeFilters;
      var modifiedFilterCurrentState;
      var modifiedFilterName;
      var modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'type':
          modifiedFilterCurrentState = currentTypeFilters;
          modifiedFilterName = 'typeFilters';
          break;

        default:
          break;
      }

      if (modifiedFilterCurrentState.indexOf(filter) === -1) {
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        var filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState(Object(defineProperty["a" /* default */])({}, modifiedFilterName, modifiedFilterUpdatedState));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleLessonClick", function (lesson) {
      var selectedLessons = _this.state.selectedLessons;
      var modifiedLessons;

      if (selectedLessons.indexOf(lesson) === -1) {
        modifiedLessons = external_immutability_helper_default()(selectedLessons, {
          $push: [lesson]
        });
      } else {
        var lessonIndex = selectedLessons.indexOf(lesson);
        modifiedLessons = external_immutability_helper_default()(selectedLessons, {
          $splice: [[lessonIndex, 1]]
        });
      }

      _this.setState({
        selectedLessons: modifiedLessons
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "assignLessons", function (date) {
      var onAssignLessons = _this.props.onAssignLessons;
      var selectedLessons = _this.state.selectedLessons;
      var assignDate;

      switch (date) {
        case 'today':
          assignDate = external_moment_default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = external_moment_default()().add(1, 'days').format('MM/DD/YY');
          break;

        case 'nextSession':
          break;

        case 'customDate':
          assignDate = '01/05/19';
          break;

        default:
          break;
      }

      _this.onToggleAssignSelectedDropdown();

      _this.onResetModal();

      onAssignLessons(selectedLessons, assignDate);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapLessons", function () {
      return _this.getMappableLessons().map(function (lesson, index) {
        return external_react_default.a.createElement(components_LessonCard, {
          lesson: lesson,
          index: index,
          key: lesson.id,
          onSetDropdown: _this.onSetDropdown,
          onCloseDropdown: _this.onCloseDropdown,
          dropdownIndex: _this.state.dropdownIndex,
          dropdownIsOpen: _this.state.dropdownIsOpen,
          handleLessonClick: _this.handleLessonClick,
          selectedLessons: _this.state.selectedLessons
        });
      });
    });

    _this.state = {
      sort: '',
      unitFilter: '',
      titleFilter: '',
      typeFilters: [],
      subjectFilters: [],
      selectedLessons: [],
      lessons: sampleLessons,
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AssignLessonModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var _this$state6 = this.state,
          assignSelectedDropdownOpen = _this$state6.assignSelectedDropdownOpen,
          subjectFilters = _this$state6.subjectFilters,
          typeFilters = _this$state6.typeFilters,
          sort = _this$state6.sort;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "wrapper"
      }, external_react_default.a.createElement("div", {
        id: "modal_assign_lesson",
        style: {
          zIndex: '1003'
        },
        className: "jsx-2666520574" + " " + "modal-page modal modal-custom"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-modal card-main card switcher-section grey lighten-3"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "header-row card-panel light-blue lighten-1 white-text"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "col s11"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "d-flex"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "icon-col"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "icon-books-l"
      })), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-panel-text"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "text-large"
      }, "Assign Lessons")))), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "col s1 right-align"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "row icons-row"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-2666520574" + " " + "modal-close close"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "icon-close-thin"
      })))))), external_react_default.a.createElement(AssignLessonModal_components_FilterSection, {
        sort: sort,
        typeFilters: typeFilters,
        subjectFilters: subjectFilters,
        onSetSort: this.onSetSort,
        onClearFilters: this.onResetModal,
        handleFilterClick: this.handleFilterClick,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState
      }), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-body"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "result-row center-align"
      }, external_react_default.a.createElement("b", {
        className: "jsx-2666520574" + " " + "result"
      }, " - ", this.getMappableLessons().length, " results -")), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "checkboxes-section row d-flex-content card-width-322"
      }, this.mapLessons())))), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "add-btn-block"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignSelectedDropdown,
        "data-target": "dropdown_assign_selected_lessons",
        className: "jsx-2666520574" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "material-icons"
      }, "add"), " Assign Selected"), external_react_default.a.createElement("ul", {
        id: "dropdown_assign_selected_lessons",
        style: {
          display: assignSelectedDropdownOpen ? 'block' : '0',
          opacity: assignSelectedDropdownOpen ? '1' : '0'
        },
        className: "jsx-2666520574" + " " + 'dropdown-content'
      }, external_react_default.a.createElement("li", {
        className: "jsx-2666520574"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignLessons('today');
        },
        className: "jsx-2666520574"
      }, "For Today")), external_react_default.a.createElement("li", {
        className: "jsx-2666520574"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignLessons('tomorrow');
        },
        className: "jsx-2666520574"
      }, "For Tomorrow")), external_react_default.a.createElement("li", {
        className: "jsx-2666520574"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignLessons('nextSession');
        },
        className: "jsx-2666520574"
      }, "For Next Session")), external_react_default.a.createElement("li", {
        className: "jsx-2666520574"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignLessons('customDate');
        },
        className: "jsx-2666520574"
      }, "For Date...")))))), external_react_default.a.createElement(style_default.a, {
        id: "2666520574"
      }, [".card-modal.jsx-2666520574{margin:0;border-radius:6px;}", ".wrapper.jsx-2666520574{min-height:0px;}", ".modal-custom.jsx-2666520574{opacity:1;visibility:visible;}", ".modal-footer.jsx-2666520574{background-color:white;}"]));
    }
  }]);

  return AssignLessonModal;
}(external_react_default.a.Component);

/* harmony default export */ var Modals_AssignLessonModal = (AssignLessonModal_AssignLessonModal);
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js








/* eslint-disable jsx-a11y/no-static-element-interactions */



var FilterSection_sortByOptions = [{
  label: 'Difficulty',
  value: 'difficulty'
}, {
  label: 'Problems',
  value: 'problems'
}, {
  label: 'Time Estimate',
  value: 'timeEstimate'
}, {
  label: 'Subject',
  value: 'subject'
}];

var AssignWorksheetModal_components_FilterSection_FilterSection =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(FilterSection, _React$Component);

  function FilterSection(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FilterSection);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FilterSection).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleShowFilters", function () {
      return _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        titleFilter: '',
        unitFilter: ''
      }, _this.props.onClearFilters);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearchChange", function (_ref2) {
      var target = _ref2.target;
      return _this.setState(Object(defineProperty["a" /* default */])({}, target.name, target.value));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "submitSearchFilter", function (searchType) {
      var _this$props = _this.props,
          onSetFilteredState = _this$props.onSetFilteredState,
          onUnsetFilteredState = _this$props.onUnsetFilteredState;

      if (_this.state[searchType] === '') {
        onUnsetFilteredState(searchType);
      }

      var transformedTitle = _this.state[searchType].replace(/\s/g, "").toLowerCase();

      onSetFilteredState(searchType, transformedTitle);
    });

    _this.state = {
      open: false,
      titleFilter: '',
      unitFilter: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          handleFilterClick = _this$props2.handleFilterClick,
          subjectFilters = _this$props2.subjectFilters,
          typeFilters = _this$props2.typeFilters,
          sourceFilters = _this$props2.sourceFilters,
          difficultyFilters = _this$props2.difficultyFilters,
          sort = _this$props2.sort,
          onSetSort = _this$props2.onSetSort;
      var _this$state = this.state,
          open = _this$state.open,
          titleFilter = _this$state.titleFilter,
          unitFilter = _this$state.unitFilter;
      return external_react_default.a.createElement("div", {
        className: "filter-form-holder"
      }, external_react_default.a.createElement("ul", {
        className: "collapsible expandable",
        style: {
          minHeight: '0'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "collapsible-body",
        style: open ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, external_react_default.a.createElement("div", {
        className: "filter-form_checkbox-list-holder justify-center"
      }, external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "readingSubject",
        name: "readingSubject",
        checked: subjectFilters.indexOf('readingSubject') !== -1,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "readingSubject"
      }, "Reading")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "writingSubject",
        name: "writingSubject",
        checked: subjectFilters.indexOf('writingSubject') !== -1,
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "writingSubject"
      }, "Writing")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "mathSubject",
        name: "mathSubject",
        checked: subjectFilters.indexOf('mathSubject') !== -1,
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "mathSubject"
      }, "Math")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "mixedDifficulty",
        name: "mixedDifficulty",
        checked: subjectFilters.indexOf('mixedDifficulty') !== -1,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "mixedDifficulty"
      }, "Mixed"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "satPractice",
        name: "satPractice",
        checked: typeFilters.indexOf('satPractice') !== -1,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return handleFilterClick('type', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "satPractice"
      }, "SAT Practice")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "skillBuilders",
        name: "skillBuilders",
        checked: typeFilters.indexOf('skillBuilders') !== -1,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return handleFilterClick('type', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "skillBuilders"
      }, "Skill Builders")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "mixedType",
        name: "mixedType",
        checked: typeFilters.indexOf('mixedType') !== -1,
        onChange: function onChange(_ref9) {
          var target = _ref9.target;
          return handleFilterClick('type', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "mixedType"
      }, "Mixed"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "builtIn",
        name: "builtIn",
        checked: sourceFilters.indexOf('builtIn') !== -1,
        onChange: function onChange(_ref10) {
          var target = _ref10.target;
          return handleFilterClick('source', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "builtIn"
      }, "Built-In")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "userCreated",
        name: "userCreated",
        checked: sourceFilters.indexOf('userCreated') !== -1,
        onChange: function onChange(_ref11) {
          var target = _ref11.target;
          return handleFilterClick('source', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "userCreated"
      }, "User Created"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "easy",
        name: "easy",
        checked: difficultyFilters.indexOf('easy') !== -1,
        onChange: function onChange(_ref12) {
          var target = _ref12.target;
          return handleFilterClick('difficulty', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "easy"
      }, "Easy")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "medium",
        name: "medium",
        checked: difficultyFilters.indexOf('medium') !== -1,
        onChange: function onChange(_ref13) {
          var target = _ref13.target;
          return handleFilterClick('difficulty', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "medium"
      }, "Medium")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "difficult",
        name: "difficult",
        checked: difficultyFilters.indexOf('difficult') !== -1,
        onChange: function onChange(_ref14) {
          var target = _ref14.target;
          return handleFilterClick('difficulty', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "difficult"
      }, "Di\uFB03cult")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "mixedDifficulty",
        name: "mixedDifficulty",
        checked: difficultyFilters.indexOf('mixedDifficulty') !== -1,
        onChange: function onChange(_ref15) {
          var target = _ref15.target;
          return handleFilterClick('difficulty', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "mixedDifficulty"
      }, "Mixed")))), external_react_default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "titleFilter",
        name: "titleFilter",
        className: "input-control validate",
        value: titleFilter,
        onChange: this.handleSearchChange
      }), external_react_default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.submitSearchFilter('titleFilter');
        },
        className: "search-button"
      }, external_react_default.a.createElement("i", {
        className: "icon-search"
      })), external_react_default.a.createElement("label", {
        className: titleFilter.length ? 'label active' : 'label',
        htmlFor: "titleFilter"
      }, "Search By Title"))), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "unitFilter",
        name: "unitFilter",
        className: "input-control validate",
        value: unitFilter,
        onChange: this.handleSearchChange
      }), external_react_default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.submitSearchFilter('unitFilter');
        },
        className: "search-button"
      }, external_react_default.a.createElement("i", {
        className: "icon-search"
      })), external_react_default.a.createElement("label", {
        className: unitFilter.length ? 'label active' : 'label',
        htmlFor: "unitFilter"
      }, "Search By Unit"))))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m6"
      }, external_react_default.a.createElement("div", {
        className: "input-field",
        style: {
          marginBottom: '0',
          marginTop: '0'
        }
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(sort, FilterSection_sortByOptions),
        onChange: onSetSort,
        options: FilterSection_sortByOptions,
        label: "Sort By",
        stateKey: "sort",
        dropdownKey: "sort"
      }))))), external_react_default.a.createElement("div", {
        className: "switcher-block col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "view-switcher"
      }, external_react_default.a.createElement("ul", {
        className: "switcher center-align"
      }, external_react_default.a.createElement("li", {
        className: "active",
        "data-view": "view-full"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "Month View")), external_react_default.a.createElement("li", {
        "data-view": "view-list"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "Day View"))))), external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "option-filters"
      }, external_react_default.a.createElement("div", {
        className: "option-item clear"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onClearFilters
      }, "Clear Filters")), external_react_default.a.createElement("div", {
        className: "option-item"
      }, external_react_default.a.createElement("span", {
        className: "collapsible-header",
        onClick: this.onToggleShowFilters
      }, external_react_default.a.createElement("span", {
        className: "open-text"
      }, open ? 'Hide Filters' : 'Open Filters')))))))));
    }
  }]);

  return FilterSection;
}(external_react_default.a.Component);

/* harmony default export */ var AssignWorksheetModal_components_FilterSection = (AssignWorksheetModal_components_FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js









var WorksheetCard_WorksheetCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(WorksheetCard, _React$Component);

  function WorksheetCard() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, WorksheetCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(WorksheetCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDropdownClick", function (event) {
      var _this$props = _this.props,
          onSetDropdown = _this$props.onSetDropdown,
          onCloseDropdown = _this$props.onCloseDropdown,
          dropdownIsOpen = _this$props.dropdownIsOpen,
          index = _this$props.index;
      event.preventDefault();

      if (dropdownIsOpen) {
        return onCloseDropdown();
      }

      return onSetDropdown(index);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "editWorksheet", function () {
      return console.warn('Pending implementation of edit modal/functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "cloneWorksheet", function () {
      return console.warn('Pending implementation of clone worksheet functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showOwner", function () {
      return console.warn('Pending implementation of show owner functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "deleteWorksheet", function () {
      return console.warn('Pending implementation of delete worksheet functionality');
    });

    return _this;
  }

  Object(createClass["a" /* default */])(WorksheetCard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          worksheet = _this$props2.worksheet,
          selectedWorksheets = _this$props2.selectedWorksheets,
          handleWorksheetClick = _this$props2.handleWorksheetClick,
          index = _this$props2.index,
          dropdownIndex = _this$props2.dropdownIndex,
          dropdownIsOpen = _this$props2.dropdownIsOpen;
      var title = worksheet.title,
          subject = worksheet.subject,
          problems = worksheet.problems,
          type = worksheet.type,
          difficulty = worksheet.difficulty,
          timeEstimate = worksheet.timeEstimate,
          source = worksheet.source,
          classifications = worksheet.classifications;
      return external_react_default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, external_react_default.a.createElement("div", {
        className: "card-checkbox"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        checked: selectedWorksheets.indexOf(worksheet) !== -1,
        onChange: function onChange() {
          return handleWorksheetClick(worksheet);
        }
      }), external_react_default.a.createElement("div", {
        className: "checkbox-card card-main card-lesson-detail card-assigned card"
      }, external_react_default.a.createElement("div", {
        className: "card-panel",
        style: {
          backgroundColor: '#666',
          color: '#fff'
        }
      }, external_react_default.a.createElement("div", {
        className: "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "icon-col col s2"
      }, external_react_default.a.createElement("span", {
        className: "block-icon"
      }, external_react_default.a.createElement("i", {
        className: "icon-sheets-w"
      }))), external_react_default.a.createElement("div", {
        className: "col s9"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-text"
      }, external_react_default.a.createElement("div", {
        className: "text-small"
      }, "Worksheet (", subject, ")"), external_react_default.a.createElement("div", {
        className: "text-large"
      }, title))), external_react_default.a.createElement("div", {
        className: "align-top col s1 right-align"
      }, external_react_default.a.createElement("div", {
        className: "row icons-row"
      }, external_react_default.a.createElement("div", {
        className: "dropdown-block col"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger btn",
        "data-target": "dropdown_worksheet_01",
        onClick: this.handleDropdownClick
      }, external_react_default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? external_react_default.a.createElement("ul", {
        id: "dropdown_worksheet_01",
        className: "dropdown-content dropdown-wide",
        style: {
          display: 'block',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.editWorksheet,
        className: "modal-trigger link-block"
      }, "Edit")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.cloneWorksheet
      }, "Clone")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.showOwner
      }, "Show Owner")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.deleteWorksheet
      }, "Delete"))) : null)))), external_react_default.a.createElement("div", {
        className: "card-top-block"
      }, external_react_default.a.createElement("div", {
        className: "d-flex row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "left-col col s6"
      }, external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Problem Type:"), external_react_default.a.createElement("dd", null, type))), external_react_default.a.createElement("div", {
        className: "right-col col s6 right-align"
      }, external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Di\uFB03culty:"), external_react_default.a.createElement("dd", null, difficulty)))))), external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("div", {
        className: "chart-container"
      }, external_react_default.a.createElement("div", {
        className: "chart-holder"
      }, external_react_default.a.createElement("span", {
        className: "svg-curved-bar",
        "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
        "data-duration": "1"
      }, external_react_default.a.createElement("svg", {
        width: "110px",
        height: "110px",
        viewBox: " 0 0 110 110"
      }, external_react_default.a.createElement("path", {
        fill: "none",
        style: {
          strokeWidth: '22',
          stroke: '#eaeaea'
        },
        d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
      }), external_react_default.a.createElement("path", {
        "data-dinamic": true,
        fill: "none",
        style: {
          strokeWidth: '22',
          stroke: '#31837a'
        },
        d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
      }))), external_react_default.a.createElement("span", {
        className: "chart-value",
        style: {
          backgroundColor: '#4d4d4d'
        }
      })), external_react_default.a.createElement("div", {
        className: "chart-description"
      }, external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Time Est:"), external_react_default.a.createElement("dd", null, timeEstimate, " min")), external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Problems:"), external_react_default.a.createElement("dd", null, problems)))), external_react_default.a.createElement("div", {
        className: "card-text"
      }, external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Worksheet Source:"), external_react_default.a.createElement("dd", null, source))), external_react_default.a.createElement("div", {
        className: "card-inner-row"
      }, external_react_default.a.createElement("div", {
        className: "row-holder"
      }, external_react_default.a.createElement("ul", {
        className: "classification-list"
      }, classifications.length ? classifications.map(function (classification) {
        return external_react_default.a.createElement("li", {
          key: classification,
          className: "class-box"
        }, classification);
      }) : external_react_default.a.createElement("li", {
        className: "empty-box"
      }, "no classi\uFB01cation"))))))));
    }
  }]);

  return WorksheetCard;
}(external_react_default.a.Component);

/* harmony default export */ var components_WorksheetCard = (WorksheetCard_WorksheetCard);
// CONCATENATED MODULE: ./components/Dashboard/utils/sampleWorksheets.js
/* harmony default export */ var sampleWorksheets = ([{
  id: 1,
  title: 'Some SAT Problems about Triangles',
  subject: 'Math',
  problems: 15,
  type: 'Skill Builders',
  unit: 'Math Unit #2',
  difficulty: 'Easy',
  timeEstimate: '14',
  source: 'Built-In',
  classifications: ['Right Triangles', 'More Math', "Lots Of Math"]
}, {
  id: 2,
  title: 'Worksheet 2',
  subject: 'Reading',
  problems: 18,
  type: 'Skill Builders',
  unit: 'Reading Unit #3',
  difficulty: 'Easy',
  timeEstimate: '30',
  source: 'User Created',
  classifications: []
}, {
  id: 3,
  title: 'Worksheet 3',
  subject: 'Writing',
  problems: 16,
  type: 'SAT Practice',
  unit: 'Writing Unit #1',
  difficulty: 'Difficult',
  timeEstimate: '62',
  source: 'Built-In',
  classifications: ['Right Triangles', 'Math', "Lots Of Math"]
}, {
  id: 4,
  title: 'Worksheet 4',
  subject: 'Writing',
  problems: 14,
  type: 'SAT Practice',
  unit: 'Mixed Unit #6',
  difficulty: 'Mixed',
  timeEstimate: '31',
  source: 'User Created',
  classifications: ['Trigonometry', 'More Math', "Lots Of Math"]
}, {
  id: 5,
  title: 'Worksheet 5',
  subject: 'Reading',
  problems: 21,
  type: 'Mixed',
  unit: 'Reading Unit #2',
  difficulty: 'Medium',
  timeEstimate: '23',
  source: 'Built-In',
  classifications: ['Trigonometry', 'Math', "Lots Of Math"]
}, {
  id: 6,
  title: 'Worksheet 6',
  subject: 'Math',
  problems: 30,
  type: 'Mixed',
  unit: 'Math Unit #4',
  difficulty: 'Difficult',
  timeEstimate: '58',
  source: 'User Created',
  classifications: ['Right Triangles', 'Trigonometry', 'More Math']
}]);
// CONCATENATED MODULE: ./components/Dashboard/utils/worksheetModalMaps.js
var worksheetTypeMap = {
  'SAT Practice': 'satPractice',
  'Skill Builders': 'skillBuilders',
  'Mixed': 'mixedType'
};
var worksheetSourceMap = {
  'Built-In': 'builtIn',
  'User Created': 'userCreated'
};
var worksheetDifficultyMap = {
  'Easy': 'easy',
  'Medium': 'medium',
  'Difficult': 'difficult',
  'Mixed': 'mixedDifficulty'
};
var worksheetSubjectMap = {
  'Reading': 'readingSubject',
  'Writing': 'writingSubject',
  'Math': 'mathSubject',
  'Mixed': 'mixedSubject'
};
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/index.js


















var AssignWorksheetModal_AssignWorksheetModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AssignWorksheetModal, _React$Component);

  function AssignWorksheetModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AssignWorksheetModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AssignWorksheetModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignSelectedDropdown", function () {
      return _this.setState(function (_ref) {
        var assignSelectedDropdownOpen = _ref.assignSelectedDropdownOpen;
        return {
          assignSelectedDropdownOpen: !assignSelectedDropdownOpen
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetDropdown", function (dropdownIndex) {
      return _this.setState({
        dropdownIndex: dropdownIndex,
        dropdownIsOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onResetModal", function () {
      return _this.setState({
        sourceFilters: [],
        difficultyFilters: [],
        subjectFilters: [],
        typeFilters: [],
        sort: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetFilteredState", function (titleFilter, value) {
      return _this.setState(Object(defineProperty["a" /* default */])({}, titleFilter, value));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onUnsetFilteredState", function (titleFilter) {
      return _this.setState(Object(defineProperty["a" /* default */])({}, titleFilter, ''));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSortWorksheets", function (worksheets) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'difficulty':
          return worksheets.sort(difficultySort);

        case 'problems':
          return worksheets.sort(problemSort);

        case 'timeEstimate':
          return worksheets.sort(timeEstimateSort);

        case 'subject':
          return worksheets.sort(subjectSort);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByTitle", function () {
      var _this$state = _this.state,
          worksheets = _this$state.worksheets,
          titleFilter = _this$state.titleFilter;
      return worksheets.reduce(function (finalArr, currentWorksheet) {
        var title = currentWorksheet.title;
        var worksheetString = title.replace(/\s/g, "").toLowerCase();

        if (worksheetString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByUnit", function () {
      var _this$state2 = _this.state,
          worksheets = _this$state2.worksheets,
          unitFilter = _this$state2.unitFilter;
      return worksheets.reduce(function (finalArr, currentWorksheet) {
        var unit = currentWorksheet.unit;
        var worksheetString = unit.replace(/\s/g, "").toLowerCase();

        if (worksheetString.indexOf(unitFilter) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterWorksheets", function () {
      var _this$state3 = _this.state,
          subjectFilters = _this$state3.subjectFilters,
          typeFilters = _this$state3.typeFilters,
          sourceFilters = _this$state3.sourceFilters,
          difficultyFilters = _this$state3.difficultyFilters,
          allWorksheets = _this$state3.worksheets;
      var worksheets = allWorksheets;

      if (subjectFilters.length) {
        worksheets = worksheets.filter(function (worksheet) {
          return subjectFilters.indexOf(worksheetSubjectMap[worksheet.subject]) !== -1;
        });
      }

      if (typeFilters.length) {
        worksheets = worksheets.filter(function (worksheet) {
          return typeFilters.indexOf(worksheetTypeMap[worksheet.type]) !== -1;
        });
      }

      if (sourceFilters.length) {
        worksheets = worksheets.filter(function (worksheet) {
          return sourceFilters.indexOf(worksheetSourceMap[worksheet.source]) !== -1;
        });
      }

      if (difficultyFilters.length) {
        worksheets = worksheets.filter(function (worksheet) {
          return difficultyFilters.indexOf(worksheetDifficultyMap[worksheet.difficulty]) !== -1;
        });
      }

      return worksheets;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getMappableWorksheets", function () {
      var _this$state4 = _this.state,
          subjectFilters = _this$state4.subjectFilters,
          typeFilters = _this$state4.typeFilters,
          difficultyFilters = _this$state4.difficultyFilters,
          sourceFilters = _this$state4.sourceFilters,
          sort = _this$state4.sort,
          unitFilter = _this$state4.unitFilter,
          titleFilter = _this$state4.titleFilter,
          worksheets = _this$state4.worksheets;
      var mappableWorksheets = worksheets;

      if (titleFilter.length) {
        mappableWorksheets = _this.onFilterByTitle();
      }

      if (unitFilter.length) {
        mappableWorksheets = _this.onFilterByUnit();
      }

      if (subjectFilters.length || typeFilters.length || difficultyFilters.length || sourceFilters.length) {
        mappableWorksheets = _this.onFilterWorksheets();
      }

      if (sort) {
        return _this.onSortWorksheets(mappableWorksheets);
      }

      return mappableWorksheets;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFilterClick", function (filterType, filter) {
      var _this$state5 = _this.state,
          currentSourceFilters = _this$state5.sourceFilters,
          currentDifficultyFilters = _this$state5.difficultyFilters,
          currentSubjectFilters = _this$state5.subjectFilters,
          currentTypeFilters = _this$state5.typeFilters;
      var modifiedFilterCurrentState;
      var modifiedFilterName;
      var modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'type':
          modifiedFilterCurrentState = currentTypeFilters;
          modifiedFilterName = 'typeFilters';
          break;

        case 'source':
          modifiedFilterCurrentState = currentSourceFilters;
          modifiedFilterName = 'sourceFilters';
          break;

        case 'difficulty':
          modifiedFilterCurrentState = currentDifficultyFilters;
          modifiedFilterName = 'difficultyFilters';
          break;

        default:
          break;
      }

      if (modifiedFilterCurrentState.indexOf(filter) === -1) {
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        var filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState(Object(defineProperty["a" /* default */])({}, modifiedFilterName, modifiedFilterUpdatedState));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleWorksheetClick", function (worksheet) {
      var selectedWorksheets = _this.state.selectedWorksheets;
      var modifiedWorksheets;

      if (selectedWorksheets.indexOf(worksheet) === -1) {
        modifiedWorksheets = external_immutability_helper_default()(selectedWorksheets, {
          $push: [worksheet]
        });
      } else {
        var worksheetIndex = selectedWorksheets.indexOf(worksheet);
        modifiedWorksheets = external_immutability_helper_default()(selectedWorksheets, {
          $splice: [[worksheetIndex, 1]]
        });
      }

      _this.setState({
        selectedWorksheets: modifiedWorksheets
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "assignWorksheets", function (date) {
      var onAssignWorksheets = _this.props.onAssignWorksheets;
      var selectedWorksheets = _this.state.selectedWorksheets;
      var assignDate;

      switch (date) {
        case 'today':
          assignDate = external_moment_default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = external_moment_default()().add(1, 'days').format('MM/DD/YY');
          break;

        case 'nextSession':
          break;

        case 'customDate':
          assignDate = '01/05/19';
          break;

        default:
          break;
      }

      _this.onToggleAssignSelectedDropdown();

      onAssignWorksheets(selectedWorksheets, assignDate);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapWorksheets", function () {
      return _this.getMappableWorksheets().map(function (worksheet, index) {
        return external_react_default.a.createElement(components_WorksheetCard, {
          worksheet: worksheet,
          index: index,
          key: worksheet.id,
          onSetDropdown: _this.onSetDropdown,
          onCloseDropdown: _this.onCloseDropdown,
          dropdownIndex: _this.state.dropdownIndex,
          dropdownIsOpen: _this.state.dropdownIsOpen,
          handleWorksheetClick: _this.handleWorksheetClick,
          selectedWorksheets: _this.state.selectedWorksheets
        });
      });
    });

    _this.state = {
      sort: '',
      unitFilter: '',
      titleFilter: '',
      typeFilters: [],
      sourceFilters: [],
      subjectFilters: [],
      selectedWorksheets: [],
      difficultyFilters: [],
      worksheets: sampleWorksheets,
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AssignWorksheetModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var _this$state6 = this.state,
          assignSelectedDropdownOpen = _this$state6.assignSelectedDropdownOpen,
          typeFilters = _this$state6.typeFilters,
          sourceFilters = _this$state6.sourceFilters,
          subjectFilters = _this$state6.subjectFilters,
          difficultyFilters = _this$state6.difficultyFilters,
          sort = _this$state6.sort;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "wrapper"
      }, external_react_default.a.createElement("div", {
        id: "modal_assign_worksheet",
        style: {
          zIndex: '1003'
        },
        className: "jsx-2666520574" + " " + "modal-page modal modal-custom"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-modal card-main card switcher-section grey lighten-3"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "header-row card-panel light-blue lighten-1 white-text"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "col s11"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "d-flex"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "icon-col"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "icon-sheets-w"
      })), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-panel-text"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "text-large"
      }, "Assign Worksheets")))), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "col s1 right-align"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "row icons-row"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-2666520574" + " " + "modal-close close"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "icon-close-thin"
      })))))), external_react_default.a.createElement(AssignWorksheetModal_components_FilterSection, {
        sort: sort,
        typeFilters: typeFilters,
        sourceFilters: sourceFilters,
        subjectFilters: subjectFilters,
        difficultyFilters: difficultyFilters,
        onSetSort: this.onSetSort,
        onClearFilters: this.onResetModal,
        handleFilterClick: this.handleFilterClick,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState
      }), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-body"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "result-row center-align"
      }, external_react_default.a.createElement("b", {
        className: "jsx-2666520574" + " " + "result"
      }, " - ", this.getMappableWorksheets().length, " results -")), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "checkboxes-section row d-flex-content card-width-322"
      }, this.mapWorksheets())))), external_react_default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "add-btn-block"
      }, external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_assign_selected",
        onClick: this.onToggleAssignSelectedDropdown,
        className: "jsx-2666520574" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "material-icons"
      }, "add"), " Assign Selected"), external_react_default.a.createElement("ul", {
        id: "dropdown_assign_selected",
        style: {
          display: assignSelectedDropdownOpen ? 'block' : '0',
          opacity: assignSelectedDropdownOpen ? '1' : '0'
        },
        className: "jsx-2666520574" + " " + 'dropdown-content'
      }, external_react_default.a.createElement("li", {
        className: "jsx-2666520574"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignWorksheets('today');
        },
        className: "jsx-2666520574"
      }, "For Today")), external_react_default.a.createElement("li", {
        className: "jsx-2666520574"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignWorksheets('tomorrow');
        },
        className: "jsx-2666520574"
      }, "For Tomorrow")), external_react_default.a.createElement("li", {
        className: "jsx-2666520574"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignWorksheets('nextSession');
        },
        className: "jsx-2666520574"
      }, "For Next Session")), external_react_default.a.createElement("li", {
        className: "jsx-2666520574"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignWorksheets('customDate');
        },
        className: "jsx-2666520574"
      }, "For Date...")))))), external_react_default.a.createElement(style_default.a, {
        id: "2666520574"
      }, [".card-modal.jsx-2666520574{margin:0;border-radius:6px;}", ".wrapper.jsx-2666520574{min-height:0px;}", ".modal-custom.jsx-2666520574{opacity:1;visibility:visible;}", ".modal-footer.jsx-2666520574{background-color:white;}"]));
    }
  }]);

  return AssignWorksheetModal;
}(external_react_default.a.Component);

/* harmony default export */ var Modals_AssignWorksheetModal = (AssignWorksheetModal_AssignWorksheetModal);
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignTestSectionModal/index.js

















var sampleVersions = [{
  label: 'SAT Practice Test #1',
  value: 'SAT Practice Test #1'
}, {
  label: 'SAT Practice Test #2',
  value: 'SAT Practice Test #2'
}, {
  label: 'SAT Practice Test #3',
  value: 'SAT Practice Test #3'
}];
var sampleSections = [{
  label: 'Math (no calc)',
  value: 'Math (no calc)'
}, {
  label: 'Reading',
  value: 'Reading'
}, {
  label: 'Writing',
  value: 'Writing'
}, {
  label: 'Math (calculator)',
  value: 'Math (calculator)'
}];

var AssignTestSectionModal_AssignTestSectionModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AssignTestSectionModal, _React$Component);

  function AssignTestSectionModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AssignTestSectionModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AssignTestSectionModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onResetModal", function () {
      return _this.setState({
        version: '',
        section: '',
        assignDate: '',
        assignTime: '',
        dueDate: '',
        dueTime: '',
        timed: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "assignTestSection", function () {
      var onAssignTestSection = _this.props.onAssignTestSection;
      var _this$state = _this.state,
          version = _this$state.version,
          section = _this$state.section,
          unformattedAssignDate = _this$state.assignDate,
          unformattedAssignTime = _this$state.assignTime,
          unformattedDueDate = _this$state.dueDate,
          unformattedDueTime = _this$state.dueTime,
          timed = _this$state.timed;
      var assignDate = external_moment_default()(unformattedAssignDate).format('MM/DD/YY');
      var assignTime = external_moment_default()(unformattedAssignTime).format('hh:mm');
      var dueDate = external_moment_default()(unformattedDueDate).format('MM/DD/YY');
      var dueTime = external_moment_default()(unformattedDueTime).format('hh:mm');
      onAssignTestSection({
        version: version,
        section: section,
        assignDate: assignDate,
        assignTime: assignTime,
        dueDate: dueDate,
        dueTime: dueTime,
        timed: timed
      });

      _this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDetailsChange", function (event) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event.target) {
        _this.setState(function (_ref) {
          var timed = _ref.timed;
          return {
            timed: !timed
          };
        });
      } else {
        _this.setState(Object(defineProperty["a" /* default */])({}, name, event));
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDatePickerChange", function (field, value) {
      return _this.setState(Object(defineProperty["a" /* default */])({}, field, value));
    });

    _this.state = {
      version: '',
      section: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      timed: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AssignTestSectionModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var modalDate = this.props.modalDate;

      if (prevState.assignDate === '' && modalDate) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          assignDate: new Date(modalDate)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var _this$state2 = this.state,
          version = _this$state2.version,
          section = _this$state2.section,
          assignDate = _this$state2.assignDate,
          assignTime = _this$state2.assignTime,
          dueDate = _this$state2.dueDate,
          dueTime = _this$state2.dueTime,
          timed = _this$state2.timed;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_assign_test_section",
        className: "jsx-1100509129" + " " + "modal modal-custom modal-calendar"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#00638e',
          color: '#fff'
        },
        className: "jsx-1100509129" + " " + "card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-1100509129" + " " + "h3"
      }, external_react_default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-assign-section"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "heading-block"
      }, " Assign Test Section (as coursework)")))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col right-align"
      }, external_react_default.a.createElement("a", {
        href: "#!",
        onClick: this.onCloseModal,
        className: "jsx-1100509129" + " " + "panel-link close modal-close"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-close-thin"
      }))))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-body"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, external_react_default.a.createElement("div", {
        style: {
          marginBottom: '0',
          marginTop: '0'
        },
        className: "jsx-1100509129" + " " + "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(version, sampleVersions),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'version');
        },
        options: sampleVersions,
        name: "version",
        label: "Version",
        stateKey: "version",
        dropdownKey: "version"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, external_react_default.a.createElement("div", {
        style: {
          marginBottom: '0',
          marginTop: '0'
        },
        className: "jsx-1100509129" + " " + "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(section, sampleSections),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'section');
        },
        options: sampleSections,
        name: "section",
        label: "Section",
        stateKey: "section",
        dropdownKey: "section"
      })))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-calendar"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: assignDate,
        dateFormat: "MM/dd/yy",
        id: "assignDate",
        name: "assignDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('assignDate', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "new_test_section_assign_date",
        className: "jsx-1100509129" + " " + ((assignDate ? 'label active' : 'label') || "")
      }, "Assign For"))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-clock2"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: assignTime,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        dateFormat: "h:mm aa",
        timeCaption: "Time",
        id: "assignTime",
        name: "assignTime",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('assignTime', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "assignTime",
        className: "jsx-1100509129" + " " + ((assignTime ? 'label active' : 'label') || "")
      }, "Time")))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-calendar"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: dueDate,
        dateFormat: "MM/dd/yy",
        id: "dueDate",
        name: "dueDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('dueDate', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueDate",
        className: "jsx-1100509129" + " " + ((dueDate ? 'label active' : 'label') || "")
      }, "Due (optional)"))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-clock2"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: dueTime,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        dateFormat: "h:mm aa",
        timeCaption: "Time",
        id: "dueTime",
        name: "dueTime",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('dueTime', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueTime",
        className: "jsx-1100509129" + " " + ((dueTime ? 'label active' : 'label') || "")
      }, "Time")))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("label", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        name: "timed",
        id: "timed",
        checked: timed,
        onChange: this.handleDetailsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Timed")))))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-footer modal-footer-width"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-1100509129" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.assignTestSection,
        className: "jsx-1100509129" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Save"))))))), external_react_default.a.createElement(style_default.a, {
        id: "1100509129"
      }, [".overlay.jsx-1100509129{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-1100509129{margin:0;border-radius:6px;}", ".modal.jsx-1100509129{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-1100509129{opacity:1;visibility:visible;}"]));
    }
  }]);

  return AssignTestSectionModal;
}(external_react_default.a.Component);

/* harmony default export */ var Modals_AssignTestSectionModal = (AssignTestSectionModal_AssignTestSectionModal);
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignSimulatedSatModal/index.js


















var AssignSimulatedSatModal_sampleVersions = [{
  label: 'SAT Practice Test #1',
  value: 'SAT Practice Test #1'
}, {
  label: 'SAT Practice Test #2',
  value: 'SAT Practice Test #2'
}, {
  label: 'SAT Practice Test #3',
  value: 'SAT Practice Test #3'
}];

var AssignSimulatedSatModal_AssignSimulatedSatModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AssignSimulatedSatModal, _React$Component);

  function AssignSimulatedSatModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AssignSimulatedSatModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AssignSimulatedSatModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onResetModal", function () {
      return _this.setState({
        version: '',
        assignDate: '',
        assignTime: '',
        dueDate: '',
        dueTime: '',
        sections: [],
        allowStudentToEnterAnswers: false,
        includeScoreInImprovementMetrics: false,
        timed: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "assignSimulatedSat", function () {
      var onAssignSimulatedSat = _this.props.onAssignSimulatedSat;
      var _this$state = _this.state,
          version = _this$state.version,
          unformattedAssignDate = _this$state.assignDate,
          unformattedAssignTime = _this$state.assignTime,
          unformattedDueDate = _this$state.dueDate,
          unformattedDueTime = _this$state.dueTime,
          sections = _this$state.sections,
          allowStudentToEnterAnswers = _this$state.allowStudentToEnterAnswers,
          includeScoreInImprovementMetrics = _this$state.includeScoreInImprovementMetrics,
          timed = _this$state.timed;
      var assignDate = external_moment_default()(unformattedAssignDate).format('MM/DD/YY');
      var assignTime = external_moment_default()(unformattedAssignTime).format('hh:mm');
      var dueDate = external_moment_default()(unformattedDueDate).format('MM/DD/YY');
      var dueTime = external_moment_default()(unformattedDueTime).format('hh:mm');
      onAssignSimulatedSat({
        version: version,
        assignDate: assignDate,
        assignTime: assignTime,
        dueDate: dueDate,
        dueTime: dueTime,
        sections: sections,
        allowStudentToEnterAnswers: allowStudentToEnterAnswers,
        includeScoreInImprovementMetrics: includeScoreInImprovementMetrics,
        timed: timed
      });

      _this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDetailsChange", function (event) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event.target) {
        var checkboxName = event.target.name;
        var prevState = _this.state[checkboxName];

        _this.setState(Object(defineProperty["a" /* default */])({}, checkboxName, !prevState));
      } else {
        _this.setState(Object(defineProperty["a" /* default */])({}, name, event));
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSectionsChange", function (event) {
      var sections = _this.state.sections;

      if (sections.indexOf(event.target.name) === -1) {
        var updatedSections = external_immutability_helper_default()(sections, {
          $push: [event.target.name]
        });

        _this.setState({
          sections: updatedSections
        });
      } else {
        var sectionIndex = sections.indexOf(event.target.name);

        var _updatedSections = external_immutability_helper_default()(sections, {
          $splice: [[sectionIndex, 1]]
        });

        _this.setState({
          sections: _updatedSections
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDatePickerChange", function (field, value) {
      return _this.setState(Object(defineProperty["a" /* default */])({}, field, value));
    });

    _this.state = {
      version: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      sections: [],
      allowStudentToEnterAnswers: false,
      includeScoreInImprovementMetrics: false,
      timed: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AssignSimulatedSatModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var modalDate = this.props.modalDate;

      if (prevState.assignDate === '' && modalDate) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          assignDate: new Date(modalDate)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var _this$state2 = this.state,
          version = _this$state2.version,
          assignDate = _this$state2.assignDate,
          assignTime = _this$state2.assignTime,
          dueDate = _this$state2.dueDate,
          dueTime = _this$state2.dueTime,
          sections = _this$state2.sections,
          allowStudentToEnterAnswers = _this$state2.allowStudentToEnterAnswers,
          includeScoreInImprovementMetrics = _this$state2.includeScoreInImprovementMetrics,
          timed = _this$state2.timed;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_assign_simulated_sat",
        className: "jsx-1100509129" + " " + "modal modal-custom modal-calendar"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#ec3330',
          color: '#fff'
        },
        className: "jsx-1100509129" + " " + "card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-circles"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "heading-block"
      }, " New Scored SAT Test")))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col right-align"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-1100509129" + " " + "panel-link close modal-close"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-close-thin"
      }))))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-body"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, external_react_default.a.createElement("div", {
        style: {
          marginBottom: '0',
          marginTop: '0'
        },
        className: "jsx-1100509129" + " " + "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(version, AssignSimulatedSatModal_sampleVersions),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'version');
        },
        options: AssignSimulatedSatModal_sampleVersions,
        name: "version",
        label: "Version",
        stateKey: "version",
        dropdownKey: "version"
      })))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-calendar"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: assignDate,
        dateFormat: "MM/dd/yy",
        id: "assignDate",
        name: "assignDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('assignDate', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "new_test_section_assign_date",
        className: "jsx-1100509129" + " " + ((assignDate ? 'label active' : 'label') || "")
      }, "Assign For"))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-clock2"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: assignTime,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        dateFormat: "h:mm aa",
        timeCaption: "Time",
        id: "assignTime",
        name: "assignTime",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('assignTime', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "assignTime",
        className: "jsx-1100509129" + " " + ((assignTime ? 'label active' : 'label') || "")
      }, "Time")))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-calendar"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: dueDate,
        dateFormat: "MM/dd/yy",
        id: "dueDate",
        name: "dueDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('dueDate', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueDate",
        className: "jsx-1100509129" + " " + ((dueDate ? 'label active' : 'label') || "")
      }, "Due (optional)"))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-clock2"
      }), external_react_default.a.createElement(external_react_datepicker_default.a, {
        selected: dueTime,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 15,
        dateFormat: "h:mm aa",
        timeCaption: "Time",
        id: "dueTime",
        name: "dueTime",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('dueTime', event);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueTime",
        className: "jsx-1100509129" + " " + ((dueTime ? 'label active' : 'label') || "")
      }, "Time")))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, external_react_default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "card-subtitle"
      }, "Sections:"), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "check-holder"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("label", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        name: "Reading",
        id: "reading",
        checked: sections.indexOf('Reading') !== -1,
        onChange: this.handleSectionsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Reading"))), external_react_default.a.createElement("p", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("label", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        name: "Math (no calc)",
        id: "mathNoCalc",
        checked: sections.indexOf('Math (no calc)') !== -1,
        onChange: this.handleSectionsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Math (no calc)")))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("label", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        name: "Writing",
        id: "writing",
        checked: sections.indexOf('Writing') !== -1,
        onChange: this.handleSectionsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Writing"))), external_react_default.a.createElement("p", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("label", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        name: "Math (calculator)",
        id: "Math (calculator)",
        checked: sections.indexOf('Math (calculator)') !== -1,
        onChange: this.handleSectionsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Math (calculator)"))))), external_react_default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "card-note"
      }, "Note: scaled test scores may require combinations of sections")), external_react_default.a.createElement("p", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("label", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        name: "allowStudentToEnterAnswers",
        id: "allowStudentToEnterAnswers",
        checked: allowStudentToEnterAnswers,
        onChange: this.handleDetailsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Allow Student to Enter Answers"))), external_react_default.a.createElement("p", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("label", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        name: "includeScoreInImprovementMetrics",
        id: "includeScoreInImprovementMetrics",
        checked: includeScoreInImprovementMetrics,
        onChange: this.handleDetailsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Include Score in Improvement Metrics"))), external_react_default.a.createElement("p", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("label", {
        className: "jsx-1100509129"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        name: "timed",
        id: "timed",
        checked: timed,
        onChange: this.handleDetailsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Timed")))))), external_react_default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-footer modal-footer-width"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-1100509129" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.assignSimulatedSat,
        className: "jsx-1100509129" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Save"))))))), external_react_default.a.createElement(style_default.a, {
        id: "1100509129"
      }, [".overlay.jsx-1100509129{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-1100509129{margin:0;border-radius:6px;}", ".modal.jsx-1100509129{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-1100509129{opacity:1;visibility:visible;}"]));
    }
  }]);

  return AssignSimulatedSatModal;
}(external_react_default.a.Component);

/* harmony default export */ var Modals_AssignSimulatedSatModal = (AssignSimulatedSatModal_AssignSimulatedSatModal);
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignTargetTestModal/index.js













var testDateOptions = [{
  label: 'January SAT (01/15/2019)',
  value: '01/15/19'
}, {
  label: 'January SAT (01/02/2019)',
  value: '01/02/19'
}, {
  label: 'January SAT (01/21/2019)',
  value: '01/21/19'
}];

var AssignTargetTestModal_AssignTargetTestModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AssignTargetTestModal, _React$Component);

  function AssignTargetTestModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AssignTargetTestModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AssignTargetTestModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetTestDate", function (testDate) {
      return _this.setState({
        testDate: testDate
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      return _this.setState({
        testDate: ''
      }, _this.props.onClose);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "assignTargetTest", function () {
      var onAssignTargetTest = _this.props.onAssignTargetTest;
      var testDate = _this.state.testDate;
      onAssignTargetTest(testDate);

      _this.onCloseModal();
    });

    _this.state = {
      testDate: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AssignTargetTestModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var testDate = this.state.testDate;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_assign_target_test",
        style: {
          zIndex: '1003',
          top: '10%'
        },
        className: "jsx-139132964" + " " + "modal modal-custom modal-calendar"
      }, external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#ec3330',
          color: '#fff'
        },
        className: "jsx-139132964" + " " + "card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "col"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-139132964"
      }, external_react_default.a.createElement("span", {
        className: "jsx-139132964" + " " + "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "jsx-139132964" + " " + "icon-cup"
      }), external_react_default.a.createElement("span", {
        className: "jsx-139132964" + " " + "heading-block"
      }, " Set Target Test Date")))), external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "col right-align"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-139132964" + " " + "panel-link close modal-close"
      }, external_react_default.a.createElement("i", {
        className: "jsx-139132964" + " " + "icon-close-thin"
      }))))), external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "card-body"
      }, external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "col s12"
      }, external_react_default.a.createElement("div", {
        style: {
          marginBottom: '0',
          marginTop: '0'
        },
        className: "jsx-139132964" + " " + "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(testDate, testDateOptions),
        onChange: this.onSetTestDate,
        options: testDateOptions,
        label: "Test Date",
        stateKey: "testDate",
        dropdownKey: "testDate"
      })))), external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "modal-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "col s12"
      }, external_react_default.a.createElement("span", {
        className: "jsx-139132964" + " " + "note"
      }, "Note:"), external_react_default.a.createElement("p", {
        className: "jsx-139132964"
      }, "If the student plans to take the SAT multiple times, you may schedule multiple \u201CTarget Test Dates.\u201D Test score and improvement metrics will be based on the student\u2019s score on the \uFB01nal target test date.")))), external_react_default.a.createElement("div", {
        className: "jsx-139132964" + " " + "modal-footer modal-footer-width"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-139132964" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.assignTargetTest,
        className: "jsx-139132964" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Set Target Test Date"))))))), external_react_default.a.createElement(style_default.a, {
        id: "139132964"
      }, [".overlay.jsx-139132964{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-139132964{margin:0;border-radius:6px;}", ".modal-custom.jsx-139132964{opacity:1;visibility:visible;}", ".modal-footer.jsx-139132964{background-color:white;}"]));
    }
  }]);

  return AssignTargetTestModal;
}(external_react_default.a.Component);

/* harmony default export */ var Modals_AssignTargetTestModal = (AssignTargetTestModal_AssignTargetTestModal);
// CONCATENATED MODULE: ./pages/dashboard.js





















var dashboard_Dashboard =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Dashboard, _Component);

  function Dashboard(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Dashboard);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Dashboard).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetActiveMonth", function (activeMonthIndex) {
      // daysInPreviousMonth is used to handle cases where the calendar for the month starts with dates from the preceding month
      // firstDay indicates the day the first day of the month falls on in a zero-based index manner, meaning Sunday is 0, Monday is 1, etc
      var daysInPreviousMonth = getDaysInPreviousMonth(activeMonthIndex);
      var daysInActiveMonth = getDaysInActiveMonth(activeMonthIndex);
      var firstDay = getFirstDay(activeMonthIndex);
      var rows = []; // We increment calDate and change inMonth in the case where dates from the next month appear in row 1 or row 6
      // Since activeMonthIndex is zero-based, currentMonth adds 1 so the cells are accurate as actual calendar dates
      // getNextMonthAsCurrentMonth is used to derive the current month to ensure it matches the format of incoming dates - 01/15/19 vs 1/15/19, otherwise new events wouldn't find the date to be assigned to

      var inMonth = true;
      var calDate = 1;
      var currentMonth = getNextMonthAsCurrentMonth(activeMonthIndex);

      if (firstDay !== 0) {
        currentMonth = currentMonth > 9 ? currentMonth -= 1 : "0".concat(currentMonth - 1);
        calDate = daysInPreviousMonth - firstDay + 1;
        inMonth = false;
      } // First for loop handles the 6 calendar rows, second for loop handles the 7 days of the week


      for (var i = 0; i < 6; i++) {
        var rowArr = [];

        for (var j = 0; j < 7; j++) {
          var date = "".concat(currentMonth, "/").concat(calDate > 9 ? calDate : "0".concat(calDate), "/").concat(currentYear);
          var dayDate = dateAndCalendarUtils_getDayDate(date);
          var activeDateKey = "row-".concat(i + 1, "-column-").concat(j + 1); // This if statement handles the easiest calendar month scenario, where the 1st of the month falls on a Sunday

          if (firstDay === 0) {
            var dateCell = {
              date: date,
              dayDate: dayDate,
              calDate: calDate,
              activeDateKey: activeDateKey,
              inMonth: inMonth,
              sessions: [],
              lessons: [],
              worksheets: [],
              testSections: [],
              simulatedSat: []
            }; // This if statement handles the case where the date spills over into the next month

            if (calDate === daysInActiveMonth) {
              calDate = 1;
              currentMonth = activeMonthIndex > 9 ? activeMonthIndex + 2 : "0".concat(activeMonthIndex + 2);
              inMonth = false;
            } else {
              calDate += 1;
            }

            rowArr.push(dateCell);
          } // This else statement handles the more likely scenario, where the first row contains several days from the preceding month
          else {
              var _dateCell = {
                date: date,
                dayDate: dayDate,
                calDate: calDate,
                activeDateKey: activeDateKey,
                inMonth: inMonth,
                sessions: [],
                lessons: [],
                worksheets: [],
                testSections: [],
                simulatedSat: []
              }; // This if statement handles the case where the date spills over into the next month

              if (inMonth === false && calDate === daysInPreviousMonth) {
                calDate = 1;
                currentMonth = getNextMonthAsCurrentMonth(activeMonthIndex);
                inMonth = true;
              } else if (inMonth === true && calDate === daysInActiveMonth) {
                currentMonth = activeMonthIndex > 9 ? activeMonthIndex + 2 : "0".concat(activeMonthIndex + 2);
                calDate = 1;
                inMonth = false;
              } else {
                calDate += 1;
              }

              rowArr.push(_dateCell);
            }
        }

        ;
        rows.push.apply(rows, rowArr);
      }

      ;

      _this.setState({
        activeMonth: activeMonthIndex,
        rows: rows
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetActiveDate", function (incomingDate) {
      _this.setState({
        activeDate: incomingDate,
        activeColumn: incomingDate[13]
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAssignSession", function (session) {
      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === session.date;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.sessions.push(session);
      var updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignSessionModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAssignLessons", function (lessons, date) {
      var _updatedDate$lessons;

      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === date;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);

      (_updatedDate$lessons = updatedDate.lessons).push.apply(_updatedDate$lessons, Object(toConsumableArray["a" /* default */])(lessons));

      var updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignLessonsModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAssignWorksheets", function (worksheets, date) {
      var _updatedDate$workshee;

      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === date;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);

      (_updatedDate$workshee = updatedDate.worksheets).push.apply(_updatedDate$workshee, Object(toConsumableArray["a" /* default */])(worksheets));

      var updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignWorksheetsModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAssignTestSection", function (testSection) {
      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === testSection.assignDate;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.testSections.push(testSection);
      var updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignTestSectionModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAssignSimulatedSat", function (simulatedSat) {
      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === simulatedSat.assignDate;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.simulatedSat.push(simulatedSat);
      var updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignSimulatedSatModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAssignTargetTest", function (targetTestDate) {
      console.warn('pending decision of what test date assign ui looks like', targetTestDate);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignSessionModal", function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var modalDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event) {
        event.preventDefault();
      }

      _this.setState(function (_ref) {
        var assignSessionModalOpen = _ref.assignSessionModalOpen;
        return {
          assignSessionModalOpen: !assignSessionModalOpen,
          modalDate: modalDate,
          assignDropdownIsOpen: false
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignLessonsModal", function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var modalDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event) {
        event.preventDefault();
      }

      _this.setState(function (_ref2) {
        var assignLessonsModalOpen = _ref2.assignLessonsModalOpen;
        return {
          assignLessonsModalOpen: !assignLessonsModalOpen,
          modalDate: modalDate,
          assignDropdownIsOpen: false
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignWorksheetsModal", function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var modalDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event) {
        event.preventDefault();
      }

      _this.setState(function (_ref3) {
        var assignWorksheetsModalOpen = _ref3.assignWorksheetsModalOpen;
        return {
          assignWorksheetsModalOpen: !assignWorksheetsModalOpen,
          modalDate: modalDate,
          assignDropdownIsOpen: false
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignTestSectionModal", function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var modalDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event) {
        event.preventDefault();
      }

      _this.setState(function (_ref4) {
        var assignTestSectionModalOpen = _ref4.assignTestSectionModalOpen;
        return {
          assignTestSectionModalOpen: !assignTestSectionModalOpen,
          modalDate: modalDate,
          assignDropdownIsOpen: false
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignSimulatedSatModal", function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var modalDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event) {
        event.preventDefault();
      }

      _this.setState(function (_ref5) {
        var assignSimulatedSatModalOpen = _ref5.assignSimulatedSatModalOpen;
        return {
          assignSimulatedSatModalOpen: !assignSimulatedSatModalOpen,
          modalDate: modalDate,
          assignDropdownIsOpen: false
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignTargetTestModal", function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (event) {
        event.preventDefault();
      }

      _this.setState(function (_ref6) {
        var assignTargetTestDateModalOpen = _ref6.assignTargetTestDateModalOpen;
        return {
          assignTargetTestDateModalOpen: !assignTargetTestDateModalOpen,
          assignDropdownIsOpen: false
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAddDropdown", function () {
      return _this.setState(function (_ref7) {
        var addDropdownOpen = _ref7.addDropdownOpen;
        return {
          addDropdownOpen: !addDropdownOpen,
          deleteDropdownOpen: false
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleDeleteDropdown", function () {
      return _this.setState(function (_ref8) {
        var deleteDropdownOpen = _ref8.deleteDropdownOpen;
        return {
          deleteDropdownOpen: !deleteDropdownOpen,
          addDropdownOpen: false
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignDropdown", function () {
      return _this.setState(function (_ref9) {
        var assignDropdownIsOpen = _ref9.assignDropdownIsOpen;
        return {
          assignDropdownIsOpen: !assignDropdownIsOpen
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleHandleFilteredItemsDropdown", function () {
      return _this.setState(function (_ref10) {
        var onToggleHandleFilteredItemsDropdown = _ref10.onToggleHandleFilteredItemsDropdown;
        return {
          onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        filters: [],
        eventFilters: []
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFilterClick", function (filter) {
      var eventFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // TODO: Only the following filters are active: sessions, lessons, worksheets, test sections, simulated sats, target tests
      // The other filters dont seem to have corresponding data in this page
      var _this$state = _this.state,
          allFilters = _this$state.filters,
          eventFilters = _this$state.eventFilters;
      var filters;
      var filterName;

      if (eventFilter) {
        filters = eventFilters;
        filterName = 'eventFilters';
      } else {
        filters = allFilters;
        filterName = 'filters';
      }

      var updatedFilters;

      if (filters.indexOf(filter) === -1) {
        updatedFilters = external_immutability_helper_default()(filters, {
          $push: [filter]
        });
      } else {
        var filterIndex = filters.indexOf(filter);
        updatedFilters = external_immutability_helper_default()(filters, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState(Object(defineProperty["a" /* default */])({}, filterName, updatedFilters));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapRows", function () {
      var _this$state2 = _this.state,
          rows = _this$state2.rows,
          filters = _this$state2.filters,
          eventFilters = _this$state2.eventFilters,
          activeDate = _this$state2.activeDate,
          activeColumn = _this$state2.activeColumn,
          addDropdownOpen = _this$state2.addDropdownOpen,
          deleteDropdownOpen = _this$state2.deleteDropdownOpen;
      var startIndex = -7;
      var endIndex = 0;
      var rowArray = [];

      for (var i = 0; i < 6; i++) {
        startIndex += 7;
        endIndex += 7;
        rowArray.push(external_react_default.a.createElement(components_CalendarRow, {
          key: i,
          rows: rows.slice(startIndex, endIndex),
          filters: filters,
          eventFilters: eventFilters,
          activeDate: activeDate,
          activeColumn: activeColumn,
          addDropdownOpen: addDropdownOpen,
          deleteDropdownOpen: deleteDropdownOpen,
          onSetActiveDate: _this.onSetActiveDate,
          onToggleAddDropdown: _this.onToggleAddDropdown,
          onToggleDeleteDropdown: _this.onToggleDeleteDropdown,
          onToggleAssignLessonsModal: _this.onToggleAssignLessonsModal,
          onToggleAssignSessionModal: _this.onToggleAssignSessionModal,
          onToggleAssignWorksheetsModal: _this.onToggleAssignWorksheetsModal,
          onToggleAssignTestSectionModal: _this.onToggleAssignTestSectionModal,
          onToggleAssignSimulatedSatModal: _this.onToggleAssignSimulatedSatModal
        }));
      }

      return rowArray;
    });

    _this.state = {
      activeMonth: '',
      filters: [],
      eventFilters: [],
      rows: [],
      activeDate: null,
      activeColumn: null,
      addDropdownOpen: false,
      deleteDropdownOpen: false,
      assignDropdownIsOpen: false,
      onToggleHandleFilteredItemsDropdown: false,
      assignSessionModalOpen: false,
      assignLessonsModalOpen: false,
      assignWorksheetsModalOpen: false,
      assignTestSectionModalOpen: false,
      assignSimulatedSatModalOpen: false,
      assignTargetTestDateModalOpen: false,
      modalDate: null
    };
    return _this;
  } // This is called onMount in CalendarHeader component to set the current month calendar rows, and every time the month changes afterward
  // IMPORTANT: activeMonthIndex is zero-based, meaning January is 0, February is 1, etc.


  Object(createClass["a" /* default */])(Dashboard, [{
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          assignSessionModalOpen = _this$state3.assignSessionModalOpen,
          assignLessonsModalOpen = _this$state3.assignLessonsModalOpen,
          assignWorksheetsModalOpen = _this$state3.assignWorksheetsModalOpen,
          activeMonth = _this$state3.activeMonth,
          assignTestSectionModalOpen = _this$state3.assignTestSectionModalOpen,
          assignSimulatedSatModalOpen = _this$state3.assignSimulatedSatModalOpen,
          assignTargetTestDateModalOpen = _this$state3.assignTargetTestDateModalOpen,
          modalDate = _this$state3.modalDate,
          assignDropdownIsOpen = _this$state3.assignDropdownIsOpen,
          onToggleHandleFilteredItemsDropdown = _this$state3.onToggleHandleFilteredItemsDropdown,
          filters = _this$state3.filters,
          eventFilters = _this$state3.eventFilters;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Modals_AssignSessionModal, {
        modalDate: modalDate,
        open: assignSessionModalOpen,
        onClose: this.onToggleAssignSessionModal,
        onAssignSession: this.onAssignSession
      }), external_react_default.a.createElement(Modals_AssignLessonModal, {
        modalDate: modalDate,
        open: assignLessonsModalOpen,
        onClose: this.onToggleAssignLessonsModal,
        onAssignLessons: this.onAssignLessons
      }), external_react_default.a.createElement(Modals_AssignWorksheetModal, {
        modalDate: modalDate,
        open: assignWorksheetsModalOpen,
        onClose: this.onToggleAssignWorksheetsModal,
        onAssignWorksheets: this.onAssignWorksheets
      }), external_react_default.a.createElement(Modals_AssignTestSectionModal, {
        modalDate: modalDate,
        open: assignTestSectionModalOpen,
        onClose: this.onToggleAssignTestSectionModal,
        onAssignTestSection: this.onAssignTestSection
      }), external_react_default.a.createElement(Modals_AssignSimulatedSatModal, {
        modalDate: modalDate,
        open: assignSimulatedSatModalOpen,
        onClose: this.onToggleAssignSimulatedSatModal,
        onAssignSimulatedSat: this.onAssignSimulatedSat
      }), external_react_default.a.createElement(Modals_AssignTargetTestModal, {
        open: assignTargetTestDateModalOpen,
        onClose: this.onToggleAssignTargetTestModal,
        onAssignTargetTest: this.onAssignTargetTest
      }), external_react_default.a.createElement("main", {
        id: "main",
        role: "main"
      }, external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-3"
      }, external_react_default.a.createElement("div", {
        className: "title-row card-panel"
      }, external_react_default.a.createElement("div", {
        className: "mobile-header"
      }, external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "menu"))), external_react_default.a.createElement("nav", {
        className: "breadcrumb-holder"
      }, external_react_default.a.createElement("div", {
        className: "nav-wrapper "
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "breadcrumb"
      }, "< Classes"))), external_react_default.a.createElement("h2", {
        className: "h1 white-text"
      }, external_react_default.a.createElement("span", {
        className: "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "icon-members"
      }), external_react_default.a.createElement("span", {
        className: "heading-block"
      }, "Some Class in June"))), external_react_default.a.createElement("nav", {
        className: "nav-additional"
      }, external_react_default.a.createElement("ul", {
        className: "menu-additional"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "Summary")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "active",
        href: "#"
      }, "Calendar")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "Lessons")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "Tests")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "Account")))), external_react_default.a.createElement("div", {
        className: "activate-block"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"
      }, external_react_default.a.createElement("b", {
        className: "btn-text visible-lg"
      }, "Account Activated"), " ", external_react_default.a.createElement("i", {
        className: "icon-unlock"
      })), external_react_default.a.createElement("a", {
        href: "#",
        className: "waves-effect btn btn-orange btn-account_inactive dropdown-trigger",
        "data-target": "dropdown_activate"
      }, external_react_default.a.createElement("b", {
        className: "btn-text visible-lg"
      }, "Activate Account"), " ", external_react_default.a.createElement("i", {
        className: "icon-key"
      })), external_react_default.a.createElement("div", {
        id: "dropdown_activate",
        className: "dropdown-content"
      }, external_react_default.a.createElement("div", {
        className: "card-panel"
      }, external_react_default.a.createElement("div", {
        className: "title-block"
      }, external_react_default.a.createElement("div", {
        className: "h3"
      }, "Ready to begin your course?"), external_react_default.a.createElement("div", {
        className: "subtitle"
      }, "Please enter a valid license code below.")), external_react_default.a.createElement("form", {
        action: "#",
        className: "activate-form"
      }, external_react_default.a.createElement("fieldset", null, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        type: "text",
        value: "4BF86266-A2A4-C9FB-387D07ABB5471305",
        id: "license_code"
      }), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "license_code"
      }, "License Code")), external_react_default.a.createElement("div", {
        className: "btn-holder center-align"
      }, external_react_default.a.createElement("button", {
        className: "btn btn-blue",
        type: "submit"
      }, "Activate ")))), external_react_default.a.createElement("div", {
        className: "text-block center-align"
      }, external_react_default.a.createElement("p", null, "If you need license codes, you can get them here: ", external_react_default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-light btn-small btn-blue"
      }, "Purchase Licenses"))), external_react_default.a.createElement("div", {
        className: "text-block"
      }, external_react_default.a.createElement("p", null, "*Note: "), external_react_default.a.createElement("p", null, "We o\uFB00er discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students.")))))), external_react_default.a.createElement(components_FilterSection, {
        filters: filters,
        eventFilters: eventFilters,
        onClearFilters: this.onClearFilters,
        handleFilterClick: this.handleFilterClick
      }), external_react_default.a.createElement("div", {
        className: "calendar-section view-month"
      }, external_react_default.a.createElement("div", {
        className: "calendar-slider"
      }, external_react_default.a.createElement(components_CalendarHeader, {
        activeMonth: Number(activeMonth),
        onSetActiveMonth: this.onSetActiveMonth
      }), external_react_default.a.createElement("div", {
        id: "calendar",
        className: "main-slick-calendar cal-context",
        style: {
          width: '100%'
        }
      }, external_react_default.a.createElement("div", {
        className: "slide"
      }, external_react_default.a.createElement("table", {
        className: "calendar-table cal-month-box"
      }, external_react_default.a.createElement("thead", null, external_react_default.a.createElement("tr", {
        className: "month-title"
      }, external_react_default.a.createElement("td", {
        colSpan: "7"
      }, external_react_default.a.createElement("div", {
        className: "cal-month-day"
      }, "January"))), external_react_default.a.createElement("tr", {
        className: "calendar-head-row"
      }, external_react_default.a.createElement("th", null, "Su"), external_react_default.a.createElement("th", null, "M"), external_react_default.a.createElement("th", null, "Tu"), external_react_default.a.createElement("th", null, "W"), external_react_default.a.createElement("th", null, "Th"), external_react_default.a.createElement("th", null, "F"), external_react_default.a.createElement("th", null, "Sa"))), external_react_default.a.createElement("tbody", null, this.mapRows()))), external_react_default.a.createElement("div", {
        className: "slide"
      }), external_react_default.a.createElement("div", {
        className: "slide"
      })), external_react_default.a.createElement("div", {
        className: "add-btn-block"
      }, external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_assign",
        onClick: this.onToggleAssignDropdown,
        className: "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, "Assign..."), external_react_default.a.createElement("ul", {
        id: "dropdown_assign",
        className: "dropdown-content",
        style: {
          display: assignDropdownIsOpen ? 'block' : 'none',
          opacity: assignDropdownIsOpen ? '100' : '0'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignSessionModal,
        className: "modal-trigger"
      }, "Session")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignLessonsModal,
        className: "modal-trigger"
      }, "Lesson")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignWorksheetsModal,
        className: "modal-trigger"
      }, "Worksheet")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignTestSectionModal,
        className: "modal-trigger"
      }, "Test Section")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignSimulatedSatModal,
        className: "modal-trigger"
      }, "Simulated SAT")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignTargetTestModal,
        className: "modal-trigger"
      }, "Target Test")), external_react_default.a.createElement("li", {
        className: "divider",
        tabIndex: "-1"
      }), external_react_default.a.createElement("li", {
        className: "dropdown-footer"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "modal-trigger"
      }, "Apply Course Template")))), external_react_default.a.createElement("div", {
        className: "add-btn-block btn-block-right"
      }, external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_other",
        onClick: this.onToggleHandleFilteredItemsDropdown,
        className: "dropdown-trigger waves-effect waves-teal btn add-btn-circle"
      }, external_react_default.a.createElement("i", {
        className: "icon-dots"
      })), external_react_default.a.createElement("ul", {
        id: "dropdown_other",
        className: "dropdown-content",
        style: {
          display: onToggleHandleFilteredItemsDropdown ? 'block' : 'none',
          opacity: onToggleHandleFilteredItemsDropdown ? '100' : '0'
        }
      }, external_react_default.a.createElement("li", {
        className: "dropdown-header"
      }, external_react_default.a.createElement("b", null, "With Filtered Items... "), external_react_default.a.createElement("b", {
        className: "small"
      }, "(items currently visible on calendar)")), external_react_default.a.createElement("li", {
        className: "divider"
      }), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        className: "modal-trigger"
      }, "Save Course as Template")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "Reset All")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "Delete All")))))))));
    }
  }]);

  return Dashboard;
}(external_react_["Component"]);

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (dashboard_Dashboard);
/* <!-- Modal structure view Lesson --> */
// <div id="modal_view_lesson" className="modal modal-custom"></div>

/* <!-- Modal structure view Session --> */
// <div id="modal_view_session" className="modal modal-custom"></div>

/* <!-- Modal structure view Practice Test --> */
// <div id="modal_view_practice_test" className="modal modal-custom"></div>

/* <!-- Modal structure view Worksheet --> */
// <div id="modal_view_worksheet" className="modal modal-custom"></div>

/***/ }),

/***/ "uhPQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");

// Keeping unused styling for now so I know what element they target
/* harmony default export */ __webpack_exports__["b"] = ({
  multiValueLabel: function multiValueLabel(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      color: 'white',
      borderRadius: 'inherit',
      fontSize: 'inherit',
      overflow: 'inherit',
      padding: 'inherit',
      paddingLeft: 'inherit',
      textOverflow: 'inherit',
      whiteSpace: 'inherit',
      boxSizing: 'inherit' // backgroundColor: 'red!important',

    });
  },
  menuList: function menuList(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles);
  },
  dropdownIndicator: function dropdownIndicator(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      display: 'none'
    });
  },
  multiValue: function multiValue(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      background: 'none'
    });
  },
  valueContainer: function valueContainer(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles);
  },
  input: function input(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      paddingTop: '9px'
    });
  },
  groupHeading: function groupHeading(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles);
  },
  control: function control(styles, _ref) {
    var isFocused = _ref.isFocused;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      boxShadow: 'none',
      borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important'
    });
  }
});
var DropdownStyles = {
  container: function container(base, state) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, base, {
      opacity: state.isDisabled ? ".5" : "1",
      backgroundColor: "transparent",
      zIndex: "999"
    });
  },
  option: function option(styles, _ref2) {
    var isFocused = _ref2.isFocused;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      backgroundColor: isFocused ? '#dad8d8' : 'white',
      color: isFocused ? '#a80303' : '#333',
      clear: 'both',
      lineHeight: '22px',
      width: '100%',
      textAlign: 'left',
      fontWeight: '500',
      padding: '3px 10px 3px 19px',
      fontSize: '15px'
    });
  },
  control: function control(styles, _ref3) {
    var isFocused = _ref3.isFocused;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      border: 'none',
      borderBottom: '1px solid',
      borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important',
      backgroundColor: 'transparent',
      borderRadius: '0',
      outline: 'none',
      boxShadow: 'none'
    });
  }
};

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x4x+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOffComponentWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var ClickOffComponentWrapper =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ClickOffComponentWrapper, _Component);

  function ClickOffComponentWrapper(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ClickOffComponentWrapper);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClickOffComponentWrapper).call(this, props));
    _this.setWrapperRef = _this.setWrapperRef.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ClickOffComponentWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        if (this.props.nestedModals) {
          return;
        }

        this.props.onOuterClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.props.className,
        ref: this.setWrapperRef
      }, this.props.children);
    }
  }]);

  return ClickOffComponentWrapper;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "xA6B":
/***/ (function(module, exports) {



/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });