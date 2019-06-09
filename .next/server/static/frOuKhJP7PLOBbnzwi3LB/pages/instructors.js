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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+JeY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AverageImprovement = function AverageImprovement(_ref) {
  var _ref$state = _ref.state,
      totalPoints = _ref$state.totalPoints,
      readingAndWriting = _ref$state.readingAndWriting,
      math = _ref$state.math;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item card-width-366"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Average Improvement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "points-list-custom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "point-custom-large style-aqua"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, totalPoints, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-green-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, "+", readingAndWriting, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Reading & Writing"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-blue-lightdark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, math, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Math"))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (AverageImprovement);

/***/ }),

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

/***/ "1v6+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Pipeline = function Pipeline(_ref) {
  var _ref$state = _ref.state,
      unactivated = _ref$state.unactivated,
      current = _ref$state.current,
      complete = _ref$state.complete,
      waitingForFinalScore = _ref$state.waitingForFinalScore;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item card-width-556"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Pipeline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "points-list-bordered-large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-unactive"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle badge-circle-bordered"
  }, unactivated, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Unactivated"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-current"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle badge-circle-bordered"
  }, current, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Current"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-complete"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle badge-circle-bordered"
  }, complete, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Complete"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-waiting"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle badge-circle-bordered"
  }, waitingForFinalScore, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Waiting for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Final Score"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Pipeline);

/***/ }),

/***/ "2Gwb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LcoationCard = function LcoationCard(_ref) {
  var _ref$location = _ref.location,
      locationNickname = _ref$location.locationNickname,
      locationName = _ref$location.locationName,
      onRemoveLocation = _ref.onRemoveLocation;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel card-panel-panel card-panel-large",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "close-link icon-close-thin",
    onClick: onRemoveLocation
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h4 truncate"
  }, locationNickname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "sub-title"
  }, locationName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-location"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Location")))));
};

/* harmony default export */ __webpack_exports__["a"] = (LcoationCard);

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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZKJo");


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

/***/ "Bci1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var StudentImprovement = function StudentImprovement(_ref) {
  var _ref$state = _ref.state,
      noGain = _ref$state.noGain,
      from0To50 = _ref$state.from0To50,
      from50To99 = _ref$state.from50To99,
      from100To149 = _ref$state.from100To149,
      from150To199 = _ref$state.from150To199,
      from200Plus = _ref$state.from200Plus;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item card-width-556 order-sm-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Student Improvement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "vertical-graphs-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, noGain, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box red darken-1",
    style: {
      height: "".concat(noGain, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "no gain"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from0To50, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box pink darken-3",
    style: {
      height: "".concat(from0To50, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "0 to 50 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from50To99, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box purple accent-4",
    style: {
      height: "".concat(from50To99, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "50 to 99 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from100To149, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box purple darken-3",
    style: {
      height: "".concat(from100To149, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "100-149 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from150To199, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box  deep-purple accent-4",
    style: {
      height: "".concat(from150To199, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "150-199 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from200Plus, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box  indigo accent-4",
    style: {
      height: "".concat(from200Plus, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "200+ ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (StudentImprovement);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Bvo1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nestedEditFieldValidation; });
/* unused harmony export shallowEditFieldValidation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nestedCreateFieldValidation; });
/* unused harmony export shallowCreateFieldValidation */
/* unused harmony export parseInvalidFieldsToString */
/* unused harmony export shallowParseInvalidFieldsToString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return saveNewSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveChangesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveNewError; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable array-callback-return */
// HOW THESE FUNCTIONS WORK
// Each nested validation function takes these three props - component state, a validation state setter, and a set validation function
// Component state is self-explanatory - it's a copy of the entire component state
// The validation state setter refers to a function in the component that sets updated validation state and dispatches the set validation function as a callback
// nestedEditFieldValidation takes updatedInstance as an additional prop - this is the state instance the user has been updating in edit mode
// We set an initial validation boolean that will be switched to false if an invalid field is found
// We also create a shallow copy of the component's validation map
// With the nested functions, we map through the validation state and each object contained within for that component's nested state: for example, ownerContactInfo, locationContactInfo, and locationBranding
// Both functions check if the component state has valid input, referred to by field, and whether that key/field is required - the edit variation checks the user-updated state
// If an invalid input is found, that boolean in the validation map is set to false, along with validForm
// The validation state setter is dispatched with the updated validation map
// The set validation function is passed down from the container level and provides the component with the toast displaying all invalid fields

var nestedEditFieldValidation = function nestedEditFieldValidation(componentState, updatedInstance, validationStateSetter, setValidationFunc) {
  var validForm = true;
  var validation = componentState.validation;

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(function (fieldSection) {
    if (!updatedInstance[fieldSection] && initialValidation[fieldSection]) {
      initialValidation[fieldSection] = false;
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation[fieldSection]).map(function (field) {
      if (!updatedInstance[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
var shallowEditFieldValidation = function shallowEditFieldValidation(componentState, updatedInstance, validationStateSetter, setValidationFunc) {
  var validForm = true;
  var validation = componentState.validation;

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(function (field) {
    if (!updatedInstance[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
var nestedCreateFieldValidation = function nestedCreateFieldValidation(componentState, validationStateSetter, setValidationFunc) {
  var validForm = true;
  var validation = componentState.validation;

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(function (fieldSection) {
    if (!componentState[fieldSection] && initialValidation[fieldSection]) {
      initialValidation[fieldSection] = false;
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation[fieldSection]).map(function (field) {
      if (!componentState[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
var shallowCreateFieldValidation = function shallowCreateFieldValidation(componentState, validationStateSetter, setValidationFunc) {
  var validForm = true;
  var validation = componentState.validation;

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(function (field) {
    if (!componentState[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
}; // validationState is set in state from the root create or edit when an invalid section is found
// This function maps through the validation object, checks for invalid fields, and converts them to regular english based on validationFieldMap

var parseInvalidFieldsToString = function parseInvalidFieldsToString(validationState, validationFieldMap) {
  var invalidFields = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState).map(function (fieldSection) {
    if (validationState[fieldSection] === false) {
      invalidFields.push(validationFieldMap[fieldSection]);
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState[fieldSection]).map(function (field) {
      if (validationState[fieldSection][field] === false) {
        invalidFields.push(validationFieldMap[field]);
      }
    });
  });

  return invalidFields.join(', ');
};
var shallowParseInvalidFieldsToString = function shallowParseInvalidFieldsToString(validationState, validationFieldMap) {
  var invalidFields = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState).map(function (field) {
    if (validationState[field] === false) {
      invalidFields.push(validationFieldMap[field]);
    }
  });

  return invalidFields.join(', ');
};
var saveNewSuccess = function saveNewSuccess(name) {
  return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Your ".concat(name, " has been successfully saved!"), {
    className: 'update-success',
    progressClassName: 'progress-bar-success'
  });
};
var saveChangesSuccess = function saveChangesSuccess() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Your changes have been successfully saved!", {
    className: 'update-success',
    progressClassName: 'progress-bar-success'
  });
};
var saveNewError = function saveNewError(validationState, validationFieldMap) {
  var shallowValidation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Please fill out the following required fields: ".concat(shallowValidation ? shallowParseInvalidFieldsToString(validationState, validationFieldMap) : parseInvalidFieldsToString(validationState, validationFieldMap)), {
    className: 'update-error',
    progressClassName: 'progress-bar-error'
  });
};

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

/***/ "EKwD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AveragePerCourse = function AveragePerCourse(_ref) {
  var _ref$state = _ref.state,
      hoursOfInstruction = _ref$state.hoursOfInstruction,
      lessons = _ref$state.lessons,
      worksheets = _ref$state.worksheets,
      practiceTests = _ref$state.practiceTests;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-width-750 order-sm-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Average (per course)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "alerts-list list-in-columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box icon-box green darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-clock"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text green-text text-darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Hours of Instruction")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, hoursOfInstruction)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box purple accent-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-books"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text purple-text text-accent-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Lessons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, lessons)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box light-blue darken-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-note"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text light-blue-text text-darken-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Worksheets")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, worksheets)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box pink darken-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-clock"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text pink-text text-darken-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Pactice Tests")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, practiceTests)))))));
};

/* harmony default export */ __webpack_exports__["a"] = (AveragePerCourse);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JyJo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/ClickOffComponentWrapper/index.js
var ClickOffComponentWrapper = __webpack_require__("x4x+");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Instructor/components/InstructorModal/components/InstructorToggleCard/index.js
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


var InstructorToggleCard_InstructorToggleCard = function InstructorToggleCard(_ref) {
  var instructor = _ref.instructor,
      onToggleInstructorSelect = _ref.onToggleInstructorSelect;
  return external_react_default.a.createElement("li", {
    onClick: function onClick() {
      return onToggleInstructorSelect(instructor);
    }
  }, external_react_default.a.createElement("input", {
    type: "checkbox"
  }), external_react_default.a.createElement("div", {
    className: "card-location card"
  }, external_react_default.a.createElement("div", {
    className: "owner-box card-panel card-panel-location",
    style: {
      backgroundColor: '#31837a',
      color: '#fff'
    }
  }, external_react_default.a.createElement("span", {
    className: "check-link icon-check"
  }), external_react_default.a.createElement("div", {
    className: "card-panel-row row"
  }, external_react_default.a.createElement("div", {
    className: "col s10"
  }, external_react_default.a.createElement("div", {
    className: "user-block"
  }, external_react_default.a.createElement("div", {
    className: "user-circle",
    style: {
      backgroundColor: '#0085ce',
      color: '#fff'
    }
  }, external_react_default.a.createElement("img", {
    src: "#",
    alt: ""
  })), external_react_default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, external_react_default.a.createElement("h4", {
    className: "h3"
  }, instructor.lastName, ", ", instructor.firstName), external_react_default.a.createElement("a", {
    href: "mailto:".concat(instructor.email)
  }, instructor.email)))), external_react_default.a.createElement("div", {
    className: "col s2 right-align"
  }, external_react_default.a.createElement("span", {
    className: "block-icon"
  }, external_react_default.a.createElement("i", {
    className: "icon-user"
  }), external_react_default.a.createElement("span", {
    className: "text-icon"
  }, "Instructor")))))));
};

/* harmony default export */ var components_InstructorToggleCard = (InstructorToggleCard_InstructorToggleCard);
// CONCATENATED MODULE: ./components/utils/sampleInstructors.js
/* harmony default export */ var sampleInstructors = ([{
  firstName: 'Bob',
  lastName: 'Smith',
  email: 'bob@smith.com'
}, {
  firstName: 'Jeff',
  lastName: 'Bezos',
  email: 'jeff-bezos@email.com'
}, {
  firstName: 'Roger',
  lastName: 'Rabbit',
  email: 'roger-rabbit@email.com'
}, {
  firstName: 'Jack',
  lastName: 'InTheBox',
  email: 'jackinbox@email.com'
}, {
  firstName: 'John',
  lastName: 'Jackson',
  email: 'john-jackson@email.com'
}, {
  firstName: 'Jennifer',
  lastName: 'Ownerson',
  email: 'jennifern@ownerson.com'
}]);
// CONCATENATED MODULE: ./components/Instructor/components/InstructorModal/index.js










/* eslint-disable jsx-a11y/img-redundant-alt */








var locationOptions = [{
  label: 'Any',
  value: 'all'
}, {
  label: 'Location 2',
  value: 'location2'
}, {
  label: 'Location 3',
  value: 'location3'
}];

var InstructorModal_InstructorModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(InstructorModal, _React$Component);

  function InstructorModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, InstructorModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InstructorModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      return _this.setState({
        selectedInstructors: []
      }, _this.props.onClose);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleInstructorSelect", function (instructor) {
      var selectedInstructors = _this.state.selectedInstructors;

      if (selectedInstructors.indexOf(instructor) === -1) {
        _this.setState({
          selectedInstructors: [].concat(Object(toConsumableArray["a" /* default */])(selectedInstructors), [instructor])
        });
      } else {
        var updatedInstructors = external_immutability_helper_default()(selectedInstructors, {
          $splice: [[selectedInstructors.indexOf(instructor), 1]]
        });

        _this.setState({
          selectedInstructors: updatedInstructors
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetLocation", function (location) {
      return _this.setState({
        location: location
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSaveInstructorChanges", function () {
      var selectedInstructors = _this.state.selectedInstructors;
      var handleInstructorsChange = _this.props.handleInstructorsChange;
      handleInstructorsChange(selectedInstructors);

      _this.onCloseModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearchChange", function (_ref) {
      var searchTerm = _ref.target.value;
      return _this.setState({
        searchTerm: searchTerm
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderInstructors", function () {
      var _this$state = _this.state,
          location = _this$state.location,
          allInstructors = _this$state.instructors,
          searchTerm = _this$state.searchTerm;
      var instructors;

      if (searchTerm) {
        instructors = allInstructors.reduce(function (finalArr, currentInstructor) {
          var instructorName = "".concat(currentInstructor.firstName).concat(currentInstructor.lastName).toLowerCase();

          if (instructorName.indexOf(searchTerm) !== -1) {
            finalArr.push(currentInstructor);
          }

          return finalArr;
        }, []);
      } else if (location === 'all') {
        instructors = allInstructors;
      } else {
        instructors = allInstructors.filter(function (instructor) {
          return instructor.location === location;
        });
      }

      return instructors.map(function (instructor) {
        return external_react_default.a.createElement(components_InstructorToggleCard, {
          key: instructor.email,
          instructor: instructor,
          onToggleInstructorSelect: _this.onToggleInstructorSelect
        });
      });
    });

    _this.state = {
      open: false,
      instructors: sampleInstructors,
      location: 'all',
      searchTerm: '',
      selectedInstructors: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(InstructorModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var _this$state2 = this.state,
          location = _this$state2.location,
          searchTerm = _this$state2.searchTerm;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_Instructor1",
        className: "jsx-2013376804" + " " + "modal modal-custom modal-location"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#00456b',
          color: '#fff'
        },
        className: "jsx-2013376804" + " " + "owner-box card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Select Instructor(s)")))), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-body"
      }, external_react_default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "hint"
      }, "Click to select or deselect."), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row-holder"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "name_search",
        name: "nameSearch",
        value: searchTerm,
        onChange: this.handleSearchChange,
        className: "jsx-2013376804" + " " + "input-control validate"
      }), external_react_default.a.createElement("button", {
        type: "submit",
        className: "jsx-2013376804" + " " + "search-button"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-search"
      })), external_react_default.a.createElement("label", {
        htmlFor: "name_search",
        className: "jsx-2013376804" + " " + ((searchTerm.length ? 'label active' : 'label') || "")
      }, "Search")), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(location, locationOptions),
        onChange: this.onSetLocation,
        options: locationOptions,
        label: "State",
        stateKey: "state",
        dropdownKey: "state"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "box-scrollable"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "height-40 jcf-scrollable"
      }, external_react_default.a.createElement("div", {
        style: {
          height: '100%',
          overflowY: 'scroll'
        },
        className: "jsx-2013376804" + " " + "card-location-holder"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-2013376804" + " " + "checkbox-list"
      }, this.renderInstructors()))))), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "modal-footer"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-2013376804" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveInstructorChanges,
        className: "jsx-2013376804" + " " + "btn"
      }, "Add"))))))), external_react_default.a.createElement(style_default.a, {
        id: "2013376804"
      }, [".overlay.jsx-2013376804{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-2013376804{margin:0;border-radius:6px;}", "#modal_Location1.jsx-2013376804{border-radius:6px;}", ".modal.jsx-2013376804{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-2013376804{opacity:1;visibility:visible;}", ".modal-footer.jsx-2013376804{background-color:white;}"]));
    }
  }]);

  return InstructorModal;
}(external_react_default.a.Component);

/* harmony default export */ var components_InstructorModal = __webpack_exports__["a"] = (InstructorModal_InstructorModal);

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

/***/ "Nbej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);



var _data = function data(percentage) {
  return {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: ['#00bbf7', '#eaeaea']
    }]
  };
};

var TargetScores = function TargetScores(_ref) {
  var percentageHitTargetScore = _ref.state.percentageHitTargetScore;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item card-width-366 order-sm-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Target Scores"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-container chart-container-xllarge"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
    data: function data() {
      return _data(percentageHitTargetScore);
    },
    options: {
      circumference: 1 * Math.PI,
      rotation: 1 * Math.PI,
      cutoutPercentage: 60,
      tooltips: false
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "chart-value",
    style: {
      backgroundColor: '#00bbf7'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-count-up": true,
    "data-start-val": "0",
    "data-end-val": "".concat(percentageHitTargetScore),
    "data-duration": "1"
  }, percentageHitTargetScore), "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-col chart-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "amount-text"
  }, "Total Students")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-col chart-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "amount-text"
  }, "Hit Target Score"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (TargetScores);

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "QvYC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var genderOptions = [{
  label: 'Male',
  value: 'Male'
}, {
  label: 'Female',
  value: 'Female'
}];
/* harmony default export */ __webpack_exports__["a"] = (genderOptions);

/***/ }),

/***/ "R12m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/ClickOffComponentWrapper/index.js
var ClickOffComponentWrapper = __webpack_require__("x4x+");

// CONCATENATED MODULE: ./components/Location/components/LocationModal/components/LocationToggleCard/index.js
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


var LocationToggleCard_LocationToggleCard = function LocationToggleCard(_ref) {
  var location = _ref.location,
      onToggleLocationSelect = _ref.onToggleLocationSelect;
  return external_react_default.a.createElement("li", {
    onClick: function onClick() {
      return onToggleLocationSelect(location);
    }
  }, external_react_default.a.createElement("input", {
    type: "checkbox"
  }), external_react_default.a.createElement("div", {
    className: "card-location card card-large"
  }, external_react_default.a.createElement("div", {
    className: "card-panel card-panel-location",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, external_react_default.a.createElement("span", {
    className: "check-link icon-check"
  }), external_react_default.a.createElement("div", {
    className: "card-panel-row row"
  }, external_react_default.a.createElement("div", {
    className: "col s10"
  }, external_react_default.a.createElement("h3", {
    className: "h4 truncate"
  }, location.locationNickname), external_react_default.a.createElement("h4", {
    className: "sub-title"
  }, location.locationName)), external_react_default.a.createElement("div", {
    className: "col s2 right-align"
  }, external_react_default.a.createElement("span", {
    className: "block-icon"
  }, external_react_default.a.createElement("i", {
    className: "icon-location"
  }), external_react_default.a.createElement("span", {
    className: "text-icon"
  }, "Location")))))));
};

/* harmony default export */ var components_LocationToggleCard = (LocationToggleCard_LocationToggleCard);
// CONCATENATED MODULE: ./components/utils/sampleLocations.js
/* harmony default export */ var sampleLocations = ([{
  locationNickname: 'Disneyworld  Tutoring',
  locationName: 'House Of Mouse'
}, {
  locationNickname: 'TutorZone Austin',
  locationName: 'We Teach Real Good'
}, {
  locationNickname: 'TutorZone Miami',
  locationName: 'We Teach Even Better'
}, {
  locationNickname: 'Disneyworld  Tutoring2',
  locationName: 'House Of Mouse'
}, {
  locationNickname: 'TutorZone Austin2',
  locationName: 'We Teach Real Good'
}, {
  locationNickname: 'TutorZone Miami2',
  locationName: 'We Teach Even Better'
}]);
// CONCATENATED MODULE: ./components/Location/components/LocationModal/index.js
















var LocationModal_LocationModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LocationModal, _React$Component);

  function LocationModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LocationModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LocationModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      return _this.setState({
        selectedLocations: []
      }, _this.props.onClose);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleLocationSelect", function (location) {
      var selectedLocations = _this.state.selectedLocations;

      if (selectedLocations.indexOf(location) === -1) {
        _this.setState({
          selectedLocations: [].concat(Object(toConsumableArray["a" /* default */])(selectedLocations), [location])
        });
      } else {
        var updatedLocations = external_immutability_helper_default()(selectedLocations, {
          $splice: [[selectedLocations.indexOf(location), 1]]
        });

        _this.setState({
          selectedLocations: updatedLocations
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSaveLocationChanges", function () {
      var selectedLocations = _this.state.selectedLocations;
      var handleLocationsChange = _this.props.handleLocationsChange;
      handleLocationsChange(selectedLocations);

      _this.onCloseModal();
    });

    _this.state = {
      open: false,
      locations: sampleLocations,
      selectedLocations: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(LocationModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var locations = this.state.locations;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_Location1",
        className: "jsx-431526058" + " " + "modal modal-custom modal-location"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#00456b',
          color: '#fff'
        },
        className: "jsx-431526058" + " " + "owner-box card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "col"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-431526058"
      }, "Select Locations(s)")))), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-body"
      }, external_react_default.a.createElement("span", {
        className: "jsx-431526058" + " " + "hint"
      }, "Click to select or deselect."), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "box-scrollable"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "height-40 jcf-scrollable"
      }, external_react_default.a.createElement("div", {
        style: {
          height: '100%',
          overflowY: 'scroll'
        },
        className: "jsx-431526058" + " " + "card-location-holder"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-431526058" + " " + "checkbox-list"
      }, locations.map(function (location) {
        return external_react_default.a.createElement(components_LocationToggleCard, {
          key: location.locationName,
          location: location,
          onToggleLocationSelect: _this2.onToggleLocationSelect
        });
      })))))), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "modal-footer"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-431526058" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveLocationChanges,
        className: "jsx-431526058" + " " + "btn"
      }, "Add"))))))), external_react_default.a.createElement(style_default.a, {
        id: "431526058"
      }, ["h4.jsx-431526058{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", ".overlay.jsx-431526058{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-431526058{margin:0;border-radius:6px;}", "#modal_Location1.jsx-431526058{border-radius:6px;}", ".modal.jsx-431526058{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-431526058{opacity:1;visibility:visible;}", ".modal-footer.jsx-431526058{background-color:white;}"]));
    }
  }]);

  return LocationModal;
}(external_react_default.a.Component);

/* harmony default export */ var components_LocationModal = __webpack_exports__["a"] = (LocationModal_LocationModal);

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

/***/ "ZKJo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// CONCATENATED MODULE: ./components/Instructor/components/InstructorNavBar/index.js


var InstructorNavBar_InstructorNavBar = function InstructorNavBar(_ref) {
  var active = _ref.active,
      onSetActivePage = _ref.onSetActivePage;
  return external_react_default.a.createElement("div", {
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
    href: "#!",
    className: "breadcrumb"
  }, "<  Instructors"))), external_react_default.a.createElement("h2", {
    className: "h1 white-text"
  }, external_react_default.a.createElement("span", {
    className: "heading-holder"
  }, external_react_default.a.createElement("i", {
    className: "icon-instructors"
  }), external_react_default.a.createElement("span", {
    className: "heading-block"
  }, "George Tutorly"))), external_react_default.a.createElement("nav", {
    className: "nav-additional"
  }, external_react_default.a.createElement("ul", {
    className: "menu-additional"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('summary');
    },
    className: active === 'summary' ? 'active' : ''
  }, "Summary")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('account');
    },
    className: active === 'account' ? 'active' : ''
  }, "Account")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('managementSettings');
    },
    className: active === 'managementSettings' ? 'active' : ''
  }, "Management Settings")))));
};

/* harmony default export */ var components_InstructorNavBar = (InstructorNavBar_InstructorNavBar);
// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./components/Location/components/LocationCard/index.js
var LocationCard = __webpack_require__("2Gwb");

// CONCATENATED MODULE: ./components/Instructor/DetailManagementPage/components/LocationsToManage/index.js
/* eslint-disable react/no-array-index-key */



var LocationsToManage_LocationsToManage = function LocationsToManage(_ref) {
  var locations = _ref.state.locations,
      onOpenLocationModal = _ref.onOpenLocationModal,
      _onRemoveLocation = _ref.onRemoveLocation;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Locations to Manage"), external_react_default.a.createElement("div", {
    className: "card-main card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "text-block"
  }, external_react_default.a.createElement("p", null, "If this user manages one or more locations/branches, add them below. This user will be able to view and edit the accounts for all instructors and students at selected locations. ")), external_react_default.a.createElement("div", {
    className: "box-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "height-360 jcf-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "card-location-holder",
    style: {
      height: '100%',
      overflowY: 'scroll'
    }
  }, !locations.length && external_react_default.a.createElement("div", {
    className: "add-class-box"
  }), locations.map(function (location, index) {
    return external_react_default.a.createElement(LocationCard["a" /* default */], {
      key: index,
      location: location,
      onRemoveLocation: function onRemoveLocation() {
        return _onRemoveLocation(index, 'locationsToManage', 'locations');
      }
    });
  })))), external_react_default.a.createElement("div", {
    className: "card-footer right-align"
  }, external_react_default.a.createElement("a", {
    href: "#",
    onClick: onOpenLocationModal,
    className: "modal-trigger link-block"
  }, "Add Location"))))));
};

/* harmony default export */ var components_LocationsToManage = (LocationsToManage_LocationsToManage);
// EXTERNAL MODULE: ./components/Instructor/components/InstructorCard/index.js
var InstructorCard = __webpack_require__("i1q9");

// CONCATENATED MODULE: ./components/Instructor/DetailManagementPage/components/InstructorsToManage/index.js
/* eslint-disable react/no-array-index-key */



var InstructorsToManage_InstructorsToManage = function InstructorsToManage(_ref) {
  var instructors = _ref.state.instructors,
      onOpenInstructorModal = _ref.onOpenInstructorModal,
      _onRemoveInstructor = _ref.onRemoveInstructor;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Instructors to Manage"), external_react_default.a.createElement("div", {
    className: "card-main card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "text-block"
  }, external_react_default.a.createElement("p", null, "Add each instructor that you\u2019d like to allow this user to manage. For each instructor you add, this user will be able to view and edit the selected instructor\u2019s account, as well as the accounts of each of the instructor\u2019s students.")), external_react_default.a.createElement("div", {
    className: "box-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "height-360 jcf-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "card-location-holder",
    style: {
      height: '100%',
      overflowY: 'scroll'
    }
  }, !instructors.length && external_react_default.a.createElement("div", {
    className: "add-class-box"
  }), instructors.map(function (instructor, index) {
    return external_react_default.a.createElement(InstructorCard["a" /* default */], {
      key: index,
      instructor: instructor,
      onRemoveInstructor: function onRemoveInstructor() {
        return _onRemoveInstructor(index, 'instructorsToManage', 'instructors');
      }
    });
  })))), external_react_default.a.createElement("div", {
    className: "card-footer right-align"
  }, external_react_default.a.createElement("a", {
    href: "#",
    onClick: onOpenInstructorModal,
    className: "modal-trigger link-block"
  }, "Add Instructor"))))));
};

/* harmony default export */ var components_InstructorsToManage = (InstructorsToManage_InstructorsToManage);
// CONCATENATED MODULE: ./components/Instructor/DetailManagementPage/components/FullAccess/index.js


var FullAccess_FullAccess = function FullAccess(_ref) {
  var fullAccess = _ref.fullAccess,
      toggleFullAccess = _ref.toggleFullAccess;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Full Access (be careful!)"), external_react_default.a.createElement("div", {
    className: "card-main card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s12"
  }, external_react_default.a.createElement("div", {
    className: "large"
  }, external_react_default.a.createElement("p", null, "To give this instructor full access to all students and instructors, select \u201CFull Access.\" Caution: this option will give this user access to your whole organization."), external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    value: fullAccess,
    onChange: toggleFullAccess
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "Full Access")))))))));
};

/* harmony default export */ var components_FullAccess = (FullAccess_FullAccess);
// EXTERNAL MODULE: ./components/Location/components/LocationModal/index.js + 2 modules
var LocationModal = __webpack_require__("R12m");

// EXTERNAL MODULE: ./components/Instructor/components/InstructorModal/index.js + 2 modules
var InstructorModal = __webpack_require__("JyJo");

// CONCATENATED MODULE: ./components/Instructor/DetailManagementPage/index.js















var DetailManagementPage_DetailManagementPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DetailManagementPage, _React$Component);

  function DetailManagementPage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DetailManagementPage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DetailManagementPage).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "componentWillReceiveProps", function (nextProps) {
      if (!_this.state.originalUser || nextProps.user.id !== _this.state.originalUser.id) {
        var _nextProps$user = nextProps.user;
        _nextProps$user = _nextProps$user === void 0 ? {} : _nextProps$user;
        var id = _nextProps$user.id,
            locationsToManage = _nextProps$user.locationsToManage,
            instructorsToManage = _nextProps$user.instructorsToManage,
            fullAccess = _nextProps$user.fullAccess;
        var updatedUser = {
          id: id,
          locationsToManage: locationsToManage,
          instructorsToManage: instructorsToManage,
          fullAccess: fullAccess
        };
        var originalUserState = _this.state.originalUser;
        var originalUser = external_immutability_helper_default()(originalUserState, {
          $merge: nextProps.user
        });

        _this.setState({
          originalUser: originalUser,
          updatedUser: updatedUser
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onOpenLocationModal", function () {
      return _this.setState({
        locationModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseLocationModal", function () {
      return _this.setState({
        locationModalOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onOpenInstructorModal", function () {
      return _this.setState({
        instructorModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseInstructorModal", function () {
      return _this.setState({
        instructorModalOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSaveChanges", function (event) {
      event.preventDefault();
      var updatedUser = _this.state.updatedUser;

      _this.setState({
        originalUser: updatedUser
      });

      console.warn('stubbed out success toast');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onRemoveOption", function (optionIndex, section, array) {
      var updatedUser = external_immutability_helper_default()(_this.state.updatedUser, Object(defineProperty["a" /* default */])({}, section, Object(defineProperty["a" /* default */])({}, array, {
        $splice: [[optionIndex, 1]]
      })));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleFullAccess", function () {
      return _this.setState(function (_ref) {
        var fullAccess = _ref.fullAccess;
        return {
          fullAccess: !fullAccess
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleOptionsChange", function (selectedOptions, section, array) {
      var updatedUser = external_immutability_helper_default()(_this.state.updatedUser, Object(defineProperty["a" /* default */])({}, section, Object(defineProperty["a" /* default */])({}, array, {
        $set: selectedOptions
      })));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "initialUserMount", function () {
      return _this.state.originalUser.id !== _this.props.user.id;
    });

    _this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
      originalUser: {
        locationsToManage: {
          locations: []
        },
        instructorsToManage: {
          instructors: []
        },
        fullAccess: false
      },
      updatedUser: {
        locationsToManage: {
          locations: []
        },
        instructorsToManage: {
          instructors: []
        },
        fullAccess: false
      }
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DetailManagementPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$user = this.props.user;
      _this$props$user = _this$props$user === void 0 ? {} : _this$props$user;
      var id = _this$props$user.id,
          locationsToManage = _this$props$user.locationsToManage,
          instructorsToManage = _this$props$user.instructorsToManage,
          fullAccess = _this$props$user.fullAccess;
      var updatedUser = {
        id: id,
        locationsToManage: locationsToManage,
        instructorsToManage: instructorsToManage,
        fullAccess: fullAccess
      };
      var originalUserState = this.state.originalUser;
      var originalUser = external_immutability_helper_default()(originalUserState, {
        $merge: updatedUser
      });
      this.setState({
        originalUser: originalUser,
        updatedUser: updatedUser
      }); // eslint-disable-line
    } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
    // This resets the component state to reflect the details of the next user the user clicks on

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          locationModalOpen = _this$state.locationModalOpen,
          instructorModalOpen = _this$state.instructorModalOpen,
          _this$state$updatedUs = _this$state.updatedUser,
          updatedLocations = _this$state$updatedUs.locationsToManage,
          updatedInstructors = _this$state$updatedUs.instructorsToManage,
          updatedFullAccess = _this$state$updatedUs.fullAccess;
      var _this$props$user2 = this.props.user,
          instructorsToManage = _this$props$user2.instructorsToManage,
          locationsToManage = _this$props$user2.locationsToManage,
          fullAccess = _this$props$user2.fullAccess;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(LocationModal["a" /* default */], {
        open: locationModalOpen,
        onClose: this.onCloseLocationModal,
        handleLocationsChange: function handleLocationsChange(selectedLocations) {
          return _this2.handleOptionsChange(selectedLocations, 'locationsToManage', 'locations');
        }
      }), external_react_default.a.createElement(InstructorModal["a" /* default */], {
        open: instructorModalOpen,
        onClose: this.onCloseInstructorModal,
        handleInstructorsChange: function handleInstructorsChange(selectedInstructors) {
          return _this2.handleOptionsChange(selectedInstructors, 'instructorsToManage', 'instructors');
        }
      }), external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "content-section-holder"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex-content large"
      }, external_react_default.a.createElement(components_LocationsToManage, {
        state: this.initialUserMount() ? locationsToManage : updatedLocations,
        onOpenLocationModal: this.onOpenLocationModal,
        onRemoveLocation: this.onRemoveOption
      }), external_react_default.a.createElement(components_InstructorsToManage, {
        state: this.initialUserMount() ? instructorsToManage : updatedInstructors,
        onOpenInstructorModal: this.onOpenInstructorModal,
        onRemoveInstructor: this.onRemoveOption
      }), external_react_default.a.createElement(components_FullAccess, {
        fullAccess: this.initialUserMount() ? fullAccess : updatedFullAccess,
        toggleFullAccess: this.toggleFullAccess
      })), external_react_default.a.createElement("div", {
        className: "btn-holder align-right-sm"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "btn",
        onClick: this.onSaveChanges
      }, "Save")))));
    }
  }]);

  return DetailManagementPage;
}(external_react_default.a.Component);

/* harmony default export */ var Instructor_DetailManagementPage = (DetailManagementPage_DetailManagementPage);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// EXTERNAL MODULE: ./components/utils/genderOptions.js
var genderOptions = __webpack_require__("QvYC");

// CONCATENATED MODULE: ./components/Instructor/DetailAccountPage/components/UserInfo/index.js





var UserInfo_UserInfo = function UserInfo(_ref) {
  var _ref$state = _ref.state,
      firstName = _ref$state.firstName,
      lastName = _ref$state.lastName,
      email = _ref$state.email,
      gender = _ref$state.gender,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "User Info"), external_react_default.a.createElement("div", {
    className: "card-main card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "first-name",
    name: "firstName",
    value: firstName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'firstName', 'userInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: firstName.length ? 'label active' : 'label',
    htmlFor: "first-name"
  }, "First Name*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "last-name",
    name: "lastName",
    value: lastName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'lastName', 'userInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: lastName.length ? 'label active' : 'label',
    htmlFor: "last-name"
  }, "Last Name*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "email",
    name: email,
    value: email,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'email', 'userInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: email.length ? 'label active' : 'label',
    htmlFor: "email"
  }, "Email Address*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: ""
  }, external_react_default.a.createElement("div", {
    className: "input-field col s6 l7"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(gender, genderOptions["a" /* default */]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'gender', 'userInfo');
    },
    options: genderOptions["a" /* default */],
    label: "Gender*",
    stateKey: "gender",
    dropdownKey: "gender"
  })))))));
};

/* harmony default export */ var components_UserInfo = (UserInfo_UserInfo);
// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// CONCATENATED MODULE: ./components/Instructor/DetailAccountPage/components/ContactInfo/index.js





var ContactInfo_ContactInfo = function ContactInfo(_ref) {
  var _ref$state = _ref.state,
      phone = _ref$state.phone,
      streetAddress = _ref$state.streetAddress,
      city = _ref$state.city,
      state = _ref$state.state,
      zip = _ref$state.zip,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Contact Info"), external_react_default.a.createElement("div", {
    className: "card-main card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "phone",
    name: "phone",
    value: phone,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'phone', 'contactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: phone.length ? 'label active' : 'label',
    htmlFor: "phone"
  }, "Phone (optional)"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "street-address",
    name: "streetAddress",
    value: streetAddress,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'streetAddress', 'contactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: streetAddress.length ? 'label active' : 'label',
    htmlFor: "street-address"
  }, "Street Address (optional)"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "city",
    name: "city",
    value: city,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'city', 'contactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: city.length ? 'label active' : 'label',
    htmlFor: "city"
  }, "City (optional)"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s6 l5"
  }, external_react_default.a.createElement("div", {
    className: "input-field"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(state, stateOptions["a" /* default */]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'state', 'contactInfo');
    },
    options: stateOptions["a" /* default */],
    label: "State (optional)",
    stateKey: "state",
    dropdownKey: "state"
  }))), external_react_default.a.createElement("div", {
    className: "col s6 l7"
  }, external_react_default.a.createElement("div", {
    className: "input-field"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "zip",
    name: "zip",
    value: zip,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'zip', 'contactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: zip.length ? 'label active' : 'label',
    htmlFor: "zip"
  }, "Zip (optional)")))))));
};

/* harmony default export */ var components_ContactInfo = (ContactInfo_ContactInfo);
// CONCATENATED MODULE: ./components/Instructor/DetailAccountPage/components/UserLocation/index.js
/* eslint-disable react/no-array-index-key */



var UserLocation_UserLocation = function UserLocation(_ref) {
  var locations = _ref.state.locations,
      onOpenLocationModal = _ref.onOpenLocationModal,
      _onRemoveLocation = _ref.onRemoveLocation;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "User\u2019s Location"), external_react_default.a.createElement("div", {
    className: "card-main card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "text-block"
  }, external_react_default.a.createElement("p", null, "Select the location/branch where this instructor works. Depending on your settings, you may have more than one location. If this instructor works at multiple locations, select all that apply."), external_react_default.a.createElement("p", null, "Note: Unless you speci\uFB01cally grant additional access, this instructor will only be able to access his or her own students.")), external_react_default.a.createElement("div", {
    className: "box-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "height-275 jcf-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "card-location-holder"
  }, !locations.length && external_react_default.a.createElement("div", {
    className: "add-class-box"
  }), locations.map(function (location, index) {
    return external_react_default.a.createElement(LocationCard["a" /* default */], {
      key: index,
      location: location,
      onRemoveLocation: function onRemoveLocation() {
        return _onRemoveLocation(index, 'userLocation', 'locations');
      }
    });
  })))), external_react_default.a.createElement("div", {
    className: "card-footer right-align"
  }, external_react_default.a.createElement("a", {
    href: "#",
    className: "modal-trigger link-block",
    onClick: onOpenLocationModal
  }, "Add Location"))))));
};

/* harmony default export */ var components_UserLocation = (UserLocation_UserLocation);
// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Instructor/DetailAccountPage/index.js










/* eslint-disable no-unused-vars */








var DetailAccountPage_DetailAccountPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DetailAccountPage, _React$Component);

  function DetailAccountPage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DetailAccountPage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DetailAccountPage).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "componentWillReceiveProps", function (nextProps) {
      if (!_this.state.originalUser || nextProps.user.id !== _this.state.originalUser.id) {
        var _nextProps$user = nextProps.user;
        _nextProps$user = _nextProps$user === void 0 ? {} : _nextProps$user;
        var id = _nextProps$user.id,
            userInfo = _nextProps$user.userInfo,
            contactInfo = _nextProps$user.contactInfo,
            userLocation = _nextProps$user.userLocation;
        var updatedUser = {
          id: id,
          userInfo: userInfo,
          contactInfo: contactInfo,
          userLocation: userLocation
        };
        var originalUserState = _this.state.originalUser;
        var originalUser = external_immutability_helper_default()(originalUserState, {
          $merge: nextProps.user
        });

        _this.setState({
          originalUser: originalUser,
          updatedUser: updatedUser
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onOpenLocationModal", function () {
      return _this.setState({
        locationModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseLocationModal", function () {
      return _this.setState({
        locationModalOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetValidation", function (validation, cb) {
      return _this.setState({
        validation: validation
      }, cb);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSaveChanges",
    /*#__PURE__*/
    function () {
      var _ref = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(event) {
        var updatedUser, valid;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault(); // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;

                updatedUser = _this.state.updatedUser;
                _context.next = 4;
                return Object(fieldValidation["b" /* nestedEditFieldValidation */])(_this.state, _this.state.updatedUser, _this.onSetValidation, function (validation) {
                  return console.warn('validation', validation);
                });

              case 4:
                valid = _context.sent;

                if (!valid) {
                  // return onSaveChangesError();
                  console.warn('not valid');
                }

                _this.setState({
                  originalUser: _this.state.updatedUser
                }); // return onSavePassageChanges(updatedUser);


              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onRemoveOption", function (optionIndex, section, array) {
      var updatedUser = external_immutability_helper_default()(_this.state.updatedUser, Object(defineProperty["a" /* default */])({}, section, Object(defineProperty["a" /* default */])({}, array, {
        $splice: [[optionIndex, 1]]
      })));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "initialUserMount", function () {
      return _this.state.originalUser.id !== _this.props.user.id;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDetailsChange", function (event, name, section) {
      var previousUserState = _this.state.updatedUser;
      var value = event.target ? event.target.value : event;
      var updatedUser = external_immutability_helper_default()(previousUserState, Object(defineProperty["a" /* default */])({}, section, {
        $merge: Object(defineProperty["a" /* default */])({}, name, value)
      }));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleOptionsChange", function (selectedOptions, section, array) {
      var updatedUser = external_immutability_helper_default()(_this.state.updatedUser, Object(defineProperty["a" /* default */])({}, section, Object(defineProperty["a" /* default */])({}, array, {
        $set: selectedOptions
      })));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    _this.state = {
      locationModalOpen: false,
      originalUser: {
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: ''
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: ''
        },
        userLocation: {
          locations: []
        }
      },
      updatedUser: {
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: ''
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: ''
        },
        userLocation: {
          locations: []
        }
      },
      validation: {
        userInfo: {
          firstName: true,
          lastName: true,
          email: true,
          gender: true
        }
      }
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DetailAccountPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$user = this.props.user;
      _this$props$user = _this$props$user === void 0 ? {} : _this$props$user;
      var id = _this$props$user.id,
          userInfo = _this$props$user.userInfo,
          contactInfo = _this$props$user.contactInfo,
          userLocation = _this$props$user.userLocation;
      var updatedUser = {
        id: id,
        userInfo: userInfo,
        contactInfo: contactInfo,
        userLocation: userLocation
      };
      var originalUserState = this.state.originalUser;
      var originalUser = external_immutability_helper_default()(originalUserState, {
        $merge: updatedUser
      });
      this.setState({
        originalUser: originalUser,
        updatedUser: updatedUser
      }); // eslint-disable-line
    } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
    // This resets the component state to reflect the details of the next user the user clicks on

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          locationModalOpen = _this$state.locationModalOpen,
          _this$state$updatedUs = _this$state.updatedUser,
          updatedUserInfo = _this$state$updatedUs.userInfo,
          updatedContactInfo = _this$state$updatedUs.contactInfo,
          updatedUserLocation = _this$state$updatedUs.userLocation;
      var _this$props$user2 = this.props.user,
          userInfo = _this$props$user2.userInfo,
          contactInfo = _this$props$user2.contactInfo,
          userLocation = _this$props$user2.userLocation;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(LocationModal["a" /* default */], {
        open: locationModalOpen,
        onClose: this.onCloseLocationModal,
        handleLocationsChange: function handleLocationsChange(selectedLocations) {
          return _this2.handleOptionsChange(selectedLocations, 'userLocation', 'locations');
        }
      }), external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "content-section-holder"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex-content large"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l5"
      }, external_react_default.a.createElement(components_UserInfo, {
        state: this.initialUserMount() ? userInfo : updatedUserInfo,
        handleDetailsChange: this.handleDetailsChange
      }), external_react_default.a.createElement(components_ContactInfo, {
        state: this.initialUserMount() ? contactInfo : updatedContactInfo,
        handleDetailsChange: this.handleDetailsChange
      })), external_react_default.a.createElement(components_UserLocation, {
        state: this.initialUserMount() ? userLocation : updatedUserLocation,
        onOpenLocationModal: this.onOpenLocationModal,
        onRemoveLocation: this.onRemoveOption
      })), external_react_default.a.createElement("div", {
        className: "btn-holder align-right-sm"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "btn",
        onClick: this.onSaveChanges
      }, "Save")))));
    }
  }]);

  return DetailAccountPage;
}(external_react_default.a.Component);

/* harmony default export */ var Instructor_DetailAccountPage = (DetailAccountPage_DetailAccountPage);
// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/AverageImprovement/index.js
var AverageImprovement = __webpack_require__("+JeY");

// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/Pipeline/index.js
var Pipeline = __webpack_require__("1v6+");

// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/StudentImprovement/index.js
var StudentImprovement = __webpack_require__("Bci1");

// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/TargetScores/index.js
var TargetScores = __webpack_require__("Nbej");

// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/AveragePerCourse/index.js
var AveragePerCourse = __webpack_require__("EKwD");

// CONCATENATED MODULE: ./components/Instructor/DetailSummaryPage/index.js










 // eslint-disable-next-line react/prefer-stateless-function

var DetailSummaryPage_InstructorDetailSummaryPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(InstructorDetailSummaryPage, _React$Component);

  function InstructorDetailSummaryPage() {
    Object(classCallCheck["a" /* default */])(this, InstructorDetailSummaryPage);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InstructorDetailSummaryPage).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(InstructorDetailSummaryPage, [{
    key: "render",
    value: function render() {
      var _this$props$user = this.props.user,
          averageImprovement = _this$props$user.averageImprovement,
          pipeline = _this$props$user.pipeline,
          targetScores = _this$props$user.targetScores,
          studentImprovement = _this$props$user.studentImprovement,
          averagePerCourse = _this$props$user.averagePerCourse;
      return external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "content-section-holder"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "cards-section"
      }, external_react_default.a.createElement("div", {
        className: "dashboard-section"
      }, external_react_default.a.createElement("div", {
        className: "dashboard-row js-sortable js-masonry row",
        "data-masonry-options": "{\"columnWidth\": 1, \"itemSelector\": \".grid-item\", \"gutter\": 31}"
      }, external_react_default.a.createElement(AverageImprovement["a" /* default */], {
        state: averageImprovement
      }), external_react_default.a.createElement(Pipeline["a" /* default */], {
        state: pipeline
      }), external_react_default.a.createElement(StudentImprovement["a" /* default */], {
        state: studentImprovement
      }), external_react_default.a.createElement(TargetScores["a" /* default */], {
        state: targetScores
      })), external_react_default.a.createElement(AveragePerCourse["a" /* default */], {
        state: averagePerCourse
      }))))));
    }
  }]);

  return InstructorDetailSummaryPage;
}(external_react_default.a.Component);

/* harmony default export */ var DetailSummaryPage = (DetailSummaryPage_InstructorDetailSummaryPage);
// CONCATENATED MODULE: ./components/Instructor/utils/sampleUser.js
var sampleUser_updatedUser = {
  id: '1232',
  userInfo: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    email: 'christian-chavarro@email.com',
    gender: 'Male'
  },
  contactInfo: {
    phone: '123-456-7890',
    streetAddress: '1234 Test Lane',
    city: 'Austin',
    state: 'TX',
    zip: '78751'
  },
  locationsToManage: {
    locations: [{
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  userLocation: {
    locations: [{
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructorsToManage: {
    instructors: [{
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  fullAccess: false,
  averageImprovement: {
    totalPoints: '290',
    readingAndWriting: '47',
    math: '146'
  },
  pipeline: {
    unactivated: '31',
    current: '9',
    complete: '12',
    waitingForFinalScore: '27'
  },
  targetScores: {
    percentageHitTargetScore: '81'
  },
  studentImprovement: {
    noGain: '32',
    from0To50: '19',
    from50To99: '60',
    from100To149: '77',
    from150To199: '62',
    from200Plus: '91'
  },
  averagePerCourse: {
    hoursOfInstruction: '31.9',
    lessons: '74.2',
    worksheets: '6.5',
    practiceTests: '1.7'
  }
};
/* harmony default export */ var sampleUser = (sampleUser_updatedUser);
// CONCATENATED MODULE: ./pages/instructors.js














var instructors_Instructors =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Instructors, _Component);

  function Instructors(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Instructors);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Instructors).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetActivePage", function (active) {
      return _this.setState({
        active: active
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderCurrentPage", function () {
      var active = _this.state.active;

      if (active === 'summary') {
        return external_react_default.a.createElement(DetailSummaryPage, {
          user: sampleUser
        });
      }

      if (active === 'account') {
        return external_react_default.a.createElement(Instructor_DetailAccountPage, {
          user: sampleUser
        });
      }

      if (active === 'managementSettings') {
        return external_react_default.a.createElement(Instructor_DetailManagementPage, {
          user: sampleUser
        });
      }

      return null;
    });

    _this.state = {
      active: 'account'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Instructors, [{
    key: "render",
    value: function render() {
      var active = this.state.active;
      return external_react_default.a.createElement("main", {
        id: "main",
        role: "main"
      }, external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-3"
      }, external_react_default.a.createElement(components_InstructorNavBar, {
        active: active,
        onSetActivePage: this.onSetActivePage
      }), this.renderCurrentPage()));
    }
  }]);

  return Instructors;
}(external_react_["Component"]);

/* harmony default export */ var pages_instructors = __webpack_exports__["default"] = (instructors_Instructors);

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

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

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

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

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

/***/ "i1q9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var InstructorCard = function InstructorCard(_ref) {
  var _ref$instructor = _ref.instructor,
      firstName = _ref$instructor.firstName,
      lastName = _ref$instructor.lastName,
      email = _ref$instructor.email,
      onRemoveInstructor = _ref.onRemoveInstructor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "owner-box card-panel card-panel-panel card-panel-large",
    style: {
      backgroundColor: '#31837a',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "close-link icon-close-thin",
    onClick: onRemoveInstructor
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-circle",
    style: {
      backgroundColor: '#0085ce',
      color: '#fff',
      height: '45px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "#",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "h3"
  }, lastName, ", ", firstName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(email)
  }, email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-user"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Instructor")))));
};

/* harmony default export */ __webpack_exports__["a"] = (InstructorCard);

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

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

/***/ "rKn1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var stateOptions = [{
  label: "Alabama",
  value: "AL"
}, {
  label: "Alaska",
  value: "AK"
}, {
  label: "American Samoa",
  value: "AS"
}, {
  label: "Arizona",
  value: "AZ"
}, {
  label: "Arkansas",
  value: "AR"
}, {
  label: "California",
  value: "CA"
}, {
  label: "Colorado",
  value: "CO"
}, {
  label: "Connecticut",
  value: "CT"
}, {
  label: "Delaware",
  value: "DE"
}, {
  label: "District Of Columbia",
  value: "DC"
}, {
  label: "Federated States Of Micronesia",
  value: "FM"
}, {
  label: "Florida",
  value: "FL"
}, {
  label: "Georgia",
  value: "GA"
}, {
  label: "Guam",
  value: "GU"
}, {
  label: "Hawaii",
  value: "HI"
}, {
  label: "Idaho",
  value: "ID"
}, {
  label: "Illinois",
  value: "IL"
}, {
  label: "Indiana",
  value: "IN"
}, {
  label: "Iowa",
  value: "IA"
}, {
  label: "Kansas",
  value: "KS"
}, {
  label: "Kentucky",
  value: "KY"
}, {
  label: "Louisiana",
  value: "LA"
}, {
  label: "Maine",
  value: "ME"
}, {
  label: "Marshall Islands",
  value: "MH"
}, {
  label: "Maryland",
  value: "MD"
}, {
  label: "Massachusetts",
  value: "MA"
}, {
  label: "Michigan",
  value: "MI"
}, {
  label: "Minnesota",
  value: "MN"
}, {
  label: "Mississippi",
  value: "MS"
}, {
  label: "Missouri",
  value: "MO"
}, {
  label: "Montana",
  value: "MT"
}, {
  label: "Nebraska",
  value: "NE"
}, {
  label: "Nevada",
  value: "NV"
}, {
  label: "New Hampshire",
  value: "NH"
}, {
  label: "New Jersey",
  value: "NJ"
}, {
  label: "New Mexico",
  value: "NM"
}, {
  label: "New York",
  value: "NY"
}, {
  label: "North Carolina",
  value: "NC"
}, {
  label: "North Dakota",
  value: "ND"
}, {
  label: "Northern Mariana Islands",
  value: "MP"
}, {
  label: "Ohio",
  value: "OH"
}, {
  label: "Oklahoma",
  value: "OK"
}, {
  label: "Oregon",
  value: "OR"
}, {
  label: "Palau",
  value: "PW"
}, {
  label: "Pennsylvania",
  value: "PA"
}, {
  label: "Puerto Rico",
  value: "PR"
}, {
  label: "Rhode Island",
  value: "RI"
}, {
  label: "South Carolina",
  value: "SC"
}, {
  label: "South Dakota",
  value: "SD"
}, {
  label: "Tennessee",
  value: "TN"
}, {
  label: "Texas",
  value: "TX"
}, {
  label: "Utah",
  value: "UT"
}, {
  label: "Vermont",
  value: "VT"
}, {
  label: "Virgin Islands",
  value: "VI"
}, {
  label: "Virginia",
  value: "VA"
}, {
  label: "Washington",
  value: "WA"
}, {
  label: "West Virginia",
  value: "WV"
}, {
  label: "Wisconsin",
  value: "WI"
}, {
  label: "Wyoming",
  value: "WY"
}];
/* harmony default export */ __webpack_exports__["a"] = (stateOptions);

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

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

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