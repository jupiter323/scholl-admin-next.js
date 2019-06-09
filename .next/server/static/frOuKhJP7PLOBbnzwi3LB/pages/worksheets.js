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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ab7+");


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

/***/ "PFiW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return firstNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return firstNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return lastNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return lastNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dueDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assignDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return problems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return completed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return flags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return timeEstimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return subjectAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return subjectDescending; });
var firstNameAscending = function firstNameAscending(_ref, _ref2) {
  var firstNameA = _ref.accountInfo.firstName;
  var firstNameB = _ref2.accountInfo.firstName;

  if (firstNameA < firstNameB) {
    return -1;
  }

  return 0;
};
var firstNameDescending = function firstNameDescending(_ref3, _ref4) {
  var firstNameA = _ref3.accountInfo.firstName;
  var firstNameB = _ref4.accountInfo.firstName;

  if (firstNameA > firstNameB) {
    return -1;
  }

  return 0;
};
var lastNameAscending = function lastNameAscending(_ref5, _ref6) {
  var lastNameA = _ref5.accountInfo.lastName;
  var lastNameB = _ref6.accountInfo.lastName;

  if (lastNameA < lastNameB) {
    return -1;
  }

  return 0;
};
var lastNameDescending = function lastNameDescending(_ref7, _ref8) {
  var lastNameA = _ref7.accountInfo.lastName;
  var lastNameB = _ref8.accountInfo.lastName;

  if (lastNameA > lastNameB) {
    return -1;
  }

  return 0;
};
var dueDate = function dueDate(_ref9, _ref10) {
  var dueDateA = _ref9.dueDate;
  var dueDateB = _ref10.dueDate;

  if (dueDateA > dueDateB) {
    return -1;
  }

  return 0;
};
var assignDate = function assignDate(_ref11, _ref12) {
  var assignDateA = _ref11.assignDate;
  var assignDateB = _ref12.assignDate;

  if (assignDateA > assignDateB) {
    return -1;
  }

  return 0;
};
var problems = function problems(_ref13, _ref14) {
  var problemsA = _ref13.problems;
  var problemsB = _ref14.problems;

  if (problemsA > problemsB) {
    return -1;
  }

  return 0;
};
var completed = function completed(_ref15, _ref16) {
  var completedA = _ref15.completed,
      problemsA = _ref15.problems;
  var completedB = _ref16.completed,
      problemsB = _ref16.problems;

  if (completedA / problemsA > completedB / problemsB) {
    return -1;
  }

  return 0;
};
var flags = function flags(_ref17, _ref18) {
  var flagsA = _ref17.flags;
  var flagsB = _ref18.flags;

  if (flagsA > flagsB) {
    return -1;
  }

  return 0;
};
var score = function score(_ref19, _ref20) {
  var scoreA = _ref19.score;
  var scoreB = _ref20.score;

  if (scoreA > scoreB) {
    return -1;
  }

  return 0;
};
var timeEstimate = function timeEstimate(_ref21, _ref22) {
  var timeEstimateA = _ref21.timeEstimate;
  var timeEstimateB = _ref22.timeEstimate;

  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
var subjectAscending = function subjectAscending(_ref23, _ref24) {
  var subjectA = _ref23.subject;
  var subjectB = _ref24.subject;

  if (subjectA < subjectB) {
    return -1;
  }

  return 0;
};
var subjectDescending = function subjectDescending(_ref25, _ref26) {
  var subjectA = _ref25.subject;
  var subjectB = _ref26.subject;

  if (subjectA > subjectB) {
    return -1;
  }

  return 0;
};

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

/***/ "WoyS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  label: 'Right Triangles',
  value: 'rightTriangles'
}, {
  label: 'Trigonometry',
  value: 'trigonometry'
}, {
  label: 'Topic 3',
  value: 'topic3'
}, {
  label: 'Topic 4',
  value: 'topic4'
}, {
  label: 'Topic 5',
  value: 'topic5'
}]);

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

/***/ "ab7+":
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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/styles/dropdownStyles.js
var dropdownStyles = __webpack_require__("uhPQ");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/styles/ControlComponent.js
var ControlComponent = __webpack_require__("4vSA");

// CONCATENATED MODULE: ./components/FormComponents/Dropdown/styles/MultiValueLabel.js


/* harmony default export */ var MultiValueLabel = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "chip"
  }, external_react_default.a.createElement(external_react_select_["components"].MultiValueLabel, props));
});
// CONCATENATED MODULE: ./components/Worksheet/utils/worksheetDetailsOptions.js
var subjectOptions = [{
  label: 'Reading',
  value: 'reading'
}, {
  label: 'Writing',
  value: 'writing'
}, {
  label: 'Math',
  value: 'math'
}];
var typeOptions = [{
  label: 'SAT Practice',
  value: 'satPractice'
}, {
  label: 'Skill Builder',
  value: 'skillBuilder'
}];
var difficultyOptions = [{
  label: 'Easy',
  value: 'easy'
}, {
  label: 'Medium',
  value: 'medium'
}, {
  label: 'Hard',
  value: 'hard'
}];
var tagOptions = [{
  label: '',
  value: ''
}];
// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/WorksheetDetails/index.js

















var WorksheetDetails_WorksheetDetails =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(WorksheetDetails, _React$Component);

  function WorksheetDetails(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, WorksheetDetails);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(WorksheetDetails).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getSectionDropdownOptions", function () {
      var categoryOptions = _this.state.categoryOptions;
      var _this$props$worksheet = _this.props.worksheet;
      _this$props$worksheet = _this$props$worksheet === void 0 ? {} : _this$props$worksheet;
      var subject = _this$props$worksheet.subject;

      if (!subject) {
        return categoryOptions;
      }

      var categoryLabels = categoryOptions.map(function (categoryOption) {
        return categoryOption.label;
      });
      var subjectIndex = categoryLabels.indexOf(subject.charAt(0).toUpperCase() + subject.slice(1));
      return [categoryOptions[subjectIndex]];
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "updateCategoryState", function (categories) {
      var updatedWorksheet = external_immutability_helper_default()(_this.state.updatedWorksheet, {
        $merge: {
          categories: categories
        }
      });

      _this.setState({
        updatedWorksheet: updatedWorksheet
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCategoryChange", function (categories) {
      var updatedCategories = categories.reduce(function (finalArr, category) {
        finalArr.push(category.value);
        return finalArr;
      }, []);

      _this.updateCategoryState(updatedCategories);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDetailsChange", function (event, name) {
      var previousWorksheetState = _this.state.updatedWorksheet;
      var value = event.target ? event.target.value : event;
      var updatedWorksheet = external_immutability_helper_default()(previousWorksheetState, {
        $merge: Object(defineProperty["a" /* default */])({}, name, value)
      });

      _this.setState({
        updatedWorksheet: updatedWorksheet
      });
    });

    _this.state = {
      originalWorksheet: {
        worksheetName: '',
        subject: {},
        type: '',
        difficulty: '',
        estimatedTime: '',
        categories: [],
        description: ''
      },
      updatedWorksheet: {
        worksheetName: '',
        subject: {},
        type: '',
        difficulty: '',
        estimatedTime: '',
        categories: [],
        description: ''
      },
      validation: {
        worksheetName: true,
        subject: true,
        type: true,
        difficulty: true,
        estimatedTime: true,
        categories: true
      },
      categoryOptions: [{
        label: 'Math',
        options: [{
          value: 'special-right-triangles',
          label: 'Special Right Triangles'
        }, {
          value: 'volumes',
          label: 'Volumes'
        }, {
          value: 'trig-functions',
          label: 'Trig Functions'
        }]
      }, {
        label: 'Science',
        options: [{
          value: 'astrology',
          label: 'Astrology'
        }, {
          value: 'algebra',
          label: 'Algebra'
        }]
      }, {
        label: 'English',
        options: [{
          value: 'geometry',
          label: 'Geometry'
        }, {
          value: 'pythagorean-theorem',
          label: 'Pythagorean Theorem'
        }]
      }]
    };
    return _this;
  }

  Object(createClass["a" /* default */])(WorksheetDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          categoriesValid = _this$state.validation.categories,
          _this$state$updatedWo = _this$state.updatedWorksheet,
          worksheetName = _this$state$updatedWo.worksheetName,
          estimatedTime = _this$state$updatedWo.estimatedTime,
          subject = _this$state$updatedWo.subject,
          type = _this$state$updatedWo.type,
          difficulty = _this$state$updatedWo.difficulty,
          description = _this$state$updatedWo.description,
          categories = _this$state$updatedWo.categories;
      return external_react_default.a.createElement("div", {
        className: "col s12 l6"
      }, external_react_default.a.createElement("div", {
        className: "card-block"
      }, external_react_default.a.createElement("h2", null, "Details"), external_react_default.a.createElement("div", {
        className: "card"
      }, external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("div", {
        className: "card-body"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        type: "text",
        id: "details_name",
        value: worksheetName,
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'worksheetName');
        }
      }), external_react_default.a.createElement("label", {
        className: worksheetName.length ? 'label active' : 'label',
        htmlFor: "details_name"
      }, "Name")))), external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s6"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(subject, subjectOptions),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'subject');
        },
        options: subjectOptions,
        label: "Subject",
        stateKey: "subject",
        dropdownKey: "subject"
      }))), external_react_default.a.createElement("div", {
        className: "col s6"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(type, typeOptions),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'type');
        },
        options: typeOptions,
        label: "Type",
        stateKey: "type",
        dropdownKey: "type"
      })))), external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s6"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(difficulty, difficultyOptions),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'difficulty');
        },
        options: difficultyOptions,
        label: "Difficulty",
        stateKey: "difficulty",
        dropdownKey: "difficulty"
      }))), external_react_default.a.createElement("div", {
        className: "col s6"
      }, external_react_default.a.createElement("div", {
        className: "datepicker-field input-field"
      }, external_react_default.a.createElement("i", {
        className: "icon-clock2"
      }), external_react_default.a.createElement("input", {
        type: "text",
        className: "timepicker",
        id: "detail_estimated_time",
        value: estimatedTime,
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'estimatedTime');
        }
      }), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "detail_estimated_time"
      }, "Estimated Time")))), external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12"
      }, external_react_default.a.createElement(external_react_select_default.a, {
        options: this.getSectionDropdownOptions(),
        isMulti: true,
        instanceId: "categories-select",
        onChange: this.handleCategoryChange,
        components: {
          Control: ControlComponent["a" /* default */],
          MultiValueLabel: MultiValueLabel
        },
        name: "categoryOptions",
        className: categoriesValid || !categoriesValid && categories.length ? '' : 'invalid',
        classNamePrefix: "multi-select",
        placeholder: 'Select one or more categories',
        styles: dropdownStyles["b" /* default */],
        isClearable: false,
        label: "Categories"
      }))), external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("textarea", {
        id: "detail_description",
        className: "materialize-textarea",
        style: {
          height: '70px'
        },
        value: description,
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'description');
        }
      }), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "detail_description"
      }, "Description (optional)")))))))));
    }
  }]);

  return WorksheetDetails;
}(external_react_default.a.Component);

/* harmony default export */ var components_WorksheetDetails = (WorksheetDetails_WorksheetDetails);
// CONCATENATED MODULE: ./components/Worksheet/utils/worksheetFilterMap.js
var topicMap = {
  rightTriangles: 'Right Triangles',
  trigonometry: 'Trigonometry'
};
var workbookMap = {
  false: 'notInWorkbook',
  true: 'inWorkbook'
};
var subjectMap = {
  reading: 'Reading',
  writing: 'Writing',
  math: 'Math'
};
var difficultyMap = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard'
};
var typeMap = {
  satPractice: 'SAT Practice',
  skillBuilder: 'Skill Builder'
};
// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/WorksheetProblems/index.js











var WorksheetProblems_WorksheetProblems =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(WorksheetProblems, _React$Component);

  function WorksheetProblems(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, WorksheetProblems);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(WorksheetProblems).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapProblemsAndPassages", function () {
      var _this$props = _this.props,
          problems = _this$props.problems,
          passages = _this$props.passages;
      var mappableArray = [].concat(Object(toConsumableArray["a" /* default */])(problems), Object(toConsumableArray["a" /* default */])(passages));
      return mappableArray.map(function (problemOrPassage) {
        if (problemOrPassage.difficulty) {
          return external_react_default.a.createElement("li", {
            className: "collection-item",
            key: problemOrPassage.id
          }, external_react_default.a.createElement("div", {
            className: "list-row"
          }, external_react_default.a.createElement("div", {
            className: "cell handle cell_01"
          }, external_react_default.a.createElement("i", {
            className: "custom-icon-burger"
          })), external_react_default.a.createElement("div", {
            className: "cell cell_02"
          }, external_react_default.a.createElement("span", {
            className: "list-num"
          })), external_react_default.a.createElement("div", {
            className: "cell cell_03"
          }, external_react_default.a.createElement("span", null, subjectMap[problemOrPassage.subject])), external_react_default.a.createElement("div", {
            className: "cell cell_04"
          }, external_react_default.a.createElement("span", null, typeMap[problemOrPassage.type])), external_react_default.a.createElement("div", {
            className: "cell cell_05"
          }, external_react_default.a.createElement("span", null, problemOrPassage.inWorkbook ? 'Yes' : 'No')), external_react_default.a.createElement("div", {
            className: "cell cell_06"
          }, external_react_default.a.createElement("span", null, difficultyMap[problemOrPassage.difficulty].charAt(0))), external_react_default.a.createElement("div", {
            className: "cell right-align cell_07"
          }, external_react_default.a.createElement("span", {
            className: "icon-frame"
          }, external_react_default.a.createElement("a", {
            href: "#"
          }, external_react_default.a.createElement("i", {
            className: "icon-eye"
          }))), external_react_default.a.createElement("a", {
            href: "#",
            className: "close"
          }, external_react_default.a.createElement("i", {
            className: "icon-close"
          })))));
        }

        return external_react_default.a.createElement("li", {
          className: "collection-item combined-rows",
          key: problemOrPassage.id
        }, external_react_default.a.createElement("div", {
          className: "combined-holder"
        }, external_react_default.a.createElement("div", {
          className: "combined-header"
        }, external_react_default.a.createElement("div", {
          className: "burger-block handle"
        }, external_react_default.a.createElement("i", {
          className: "custom-icon-burger"
        })), external_react_default.a.createElement("div", {
          className: "combined-title"
        }, problemOrPassage.title), external_react_default.a.createElement("a", {
          href: "#",
          className: "close"
        }, external_react_default.a.createElement("i", {
          className: "icon-close"
        }))), external_react_default.a.createElement("ol", {
          className: "problems-list-number problems-list collection"
        }, problemOrPassage.problems.map(function (problem) {
          return external_react_default.a.createElement("li", {
            className: "collection-item",
            key: problem.id
          }, external_react_default.a.createElement("div", {
            className: "list-row"
          }, external_react_default.a.createElement("div", {
            className: "cell handle cell_01"
          }, "\xA0"), external_react_default.a.createElement("div", {
            className: "cell cell_02"
          }, external_react_default.a.createElement("span", {
            className: "list-num"
          })), external_react_default.a.createElement("div", {
            className: "cell cell_03"
          }, external_react_default.a.createElement("span", null, subjectMap[problem.subject])), external_react_default.a.createElement("div", {
            className: "cell cell_04"
          }, external_react_default.a.createElement("span", null, typeMap[problem.type])), external_react_default.a.createElement("div", {
            className: "cell cell_05"
          }, external_react_default.a.createElement("span", null, problem.inWorkbook ? 'Yes' : 'No')), external_react_default.a.createElement("div", {
            className: "cell cell_06"
          }, external_react_default.a.createElement("span", null, difficultyMap[problem.difficulty].charAt(0))), external_react_default.a.createElement("div", {
            className: "cell right-align cell_07"
          }, external_react_default.a.createElement("span", {
            className: "icon-frame"
          }, external_react_default.a.createElement("a", {
            href: "#"
          }, external_react_default.a.createElement("i", {
            className: "icon-eye"
          }))), external_react_default.a.createElement("a", {
            href: "#",
            className: "close invisible"
          }, external_react_default.a.createElement("i", {
            className: "icon-close"
          })))));
        }))));
      });
    });

    _this.state = {
      true: true
    };
    return _this;
  }

  Object(createClass["a" /* default */])(WorksheetProblems, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onOpenProblemBankModal = _this$props2.onOpenProblemBankModal,
          onRemoveAllProblems = _this$props2.onRemoveAllProblems;
      return external_react_default.a.createElement("div", {
        className: "col s12 l6"
      }, external_react_default.a.createElement("div", {
        className: "card-block card-block-problems"
      }, external_react_default.a.createElement("h2", null, "Worksheet Problems"), external_react_default.a.createElement("div", {
        className: "card-main-full card"
      }, external_react_default.a.createElement("div", {
        className: "body-inner"
      }, external_react_default.a.createElement("ol", {
        className: "problems-list-number problems-list collection js-sortable-list",
        "data-sortable-group": "{ \"name\": \"put-list\", \"put\": \"list\"}"
      }, external_react_default.a.createElement("li", {
        className: "collection-item list-header"
      }, external_react_default.a.createElement("div", {
        className: "header-row"
      }, external_react_default.a.createElement("div", {
        className: "cell cell_01"
      }, "\xA0"), external_react_default.a.createElement("div", {
        className: "cell cell_02"
      }, "\xA0"), external_react_default.a.createElement("div", {
        className: "cell cell_03"
      }, "Subject"), external_react_default.a.createElement("div", {
        className: "cell cell_04"
      }, "Type"), external_react_default.a.createElement("div", {
        className: "cell cell_05"
      }, "In Book"), external_react_default.a.createElement("div", {
        className: "cell cell_06"
      }, "Di\uFB00"), external_react_default.a.createElement("div", {
        className: "cell cell_07"
      }, "\xA0"))), this.mapProblemsAndPassages())), external_react_default.a.createElement("div", {
        className: "card-footer right-align"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn-flat pink-text text-darken-1",
        onClick: onRemoveAllProblems
      }, "Remove All"), external_react_default.a.createElement("a", {
        href: "#",
        className: "modal-trigger link-btn waves-effect waves-teal btn-flat",
        onClick: onOpenProblemBankModal
      }, "Add Problems")))));
    }
  }]);

  return WorksheetProblems;
}(external_react_default.a.Component);

/* harmony default export */ var components_WorksheetProblems = (WorksheetProblems_WorksheetProblems);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/utils/sampleTopics.js
var sampleTopics = __webpack_require__("WoyS");

// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/ProblemBank/components/FilterSection/index.js








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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        topic: ''
      }, _this.props.onClearFilters);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleTopicFilterChange", function (event) {
      var onSetFilteredTopicState = _this.props.onSetFilteredTopicState;
      var value = event.target ? event.target.value : event;
      var updatedState = external_immutability_helper_default()(_this.state, {
        $merge: {
          topic: value
        }
      });

      _this.setState(updatedState);

      return onSetFilteredTopicState(event);
    });

    _this.state = {
      open: true,
      topic: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          topic = _this$state.topic;
      var _this$props = this.props,
          sortBySubject = _this$props.sortBySubject,
          toggleSelectAllProblemsOrPassages = _this$props.toggleSelectAllProblemsOrPassages,
          handleFilterClick = _this$props.handleFilterClick,
          subjectFilters = _this$props.subjectFilters,
          difficultyFilters = _this$props.difficultyFilters,
          typeFilters = _this$props.typeFilters,
          workbookFilters = _this$props.workbookFilters;
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
        id: "reading_problems",
        checked: subjectFilters.indexOf('reading') !== -1,
        onChange: function onChange() {
          return handleFilterClick('subject', 'reading');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "reading_problems"
      }, "Reading")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "writing",
        checked: subjectFilters.indexOf('writing') !== -1,
        onChange: function onChange() {
          return handleFilterClick('subject', 'writing');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "writing"
      }, "Writing")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "math",
        checked: subjectFilters.indexOf('math') !== -1,
        onChange: function onChange() {
          return handleFilterClick('subject', 'math');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "math"
      }, "Math"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "easy",
        checked: difficultyFilters.indexOf('easy') !== -1,
        onChange: function onChange() {
          return handleFilterClick('difficulty', 'easy');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "easy"
      }, "Easy")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "medium",
        checked: difficultyFilters.indexOf('medium') !== -1,
        onChange: function onChange() {
          return handleFilterClick('difficulty', 'medium');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "medium"
      }, "Medium")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "hard",
        checked: difficultyFilters.indexOf('hard') !== -1,
        onChange: function onChange() {
          return handleFilterClick('difficulty', 'hard');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "hard"
      }, "Hard"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "satPractice",
        checked: typeFilters.indexOf('satPractice') !== -1,
        onChange: function onChange() {
          return handleFilterClick('type', 'satPractice');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "satPractice"
      }, "SAT Practice")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "skillBuilder",
        checked: typeFilters.indexOf('skillBuilder') !== -1,
        onChange: function onChange() {
          return handleFilterClick('type', 'skillBuilder');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "skillBuilder"
      }, "Skill Builder"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "inWorkbook",
        checked: workbookFilters.indexOf('inWorkbook') !== -1,
        onChange: function onChange() {
          return handleFilterClick('workbook', 'inWorkbook');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "inWorkbook"
      }, "In Workbook")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "notInWorkbook",
        checked: workbookFilters.indexOf('notInWorkbook') !== -1,
        onChange: function onChange() {
          return handleFilterClick('workbook', 'notInWorkbook');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "notInWorkbook"
      }, "Not in Workbook")))), external_react_default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "input-field",
        style: {
          marginBottom: '0',
          marginTop: '0'
        }
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(topic, sampleTopics["a" /* default */]),
        onChange: this.handleTopicFilterChange,
        options: sampleTopics["a" /* default */],
        label: "Topic",
        stateKey: "topic",
        dropdownKey: "topic"
      }))))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l4 hide-on-med-and-down show-on-large"
      }, "\xA0"), external_react_default.a.createElement("div", {
        className: "col s12 l4 hide-on-med-and-down show-on-large"
      }, "\xA0"), external_react_default.a.createElement("div", {
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
      }, open ? 'Hide Filters' : 'Open Filters')))))))), external_react_default.a.createElement("div", {
        className: "table-header white hide-on-med-and-down"
      }, external_react_default.a.createElement("div", {
        className: "container-lg"
      }, external_react_default.a.createElement("div", {
        className: "list-table detail-table"
      }, external_react_default.a.createElement("div", {
        className: "list-table-header table-header-box"
      }, external_react_default.a.createElement("div", {
        className: "list-table-row"
      }, external_react_default.a.createElement("div", {
        className: "list-table-cell checkbox-cell"
      }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        className: "filled-in",
        "data-check-pattern": "[name^='check_']",
        onChange: toggleSelectAllProblemsOrPassages
      }), external_react_default.a.createElement("span", null, "\xA0"))), external_react_default.a.createElement("div", {
        className: "list-table-cell subject-cell"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: sortBySubject
      }, external_react_default.a.createElement("span", {
        className: "sort-holder"
      }, "Subject ", external_react_default.a.createElement("i", {
        className: "sort-icon custom-icon-traingle-down"
      })))), external_react_default.a.createElement("div", {
        className: "list-table-cell info-cell"
      }, external_react_default.a.createElement("b", null, "Di\uFB03culty")), external_react_default.a.createElement("div", {
        className: "list-table-cell type-cell"
      }, external_react_default.a.createElement("b", null, "Type")), external_react_default.a.createElement("div", {
        className: "list-table-cell in-cell"
      }, external_react_default.a.createElement("b", null, "In Workbook")), external_react_default.a.createElement("div", {
        className: "list-table-cell topic-cell"
      }, external_react_default.a.createElement("b", null, "Topic(s)")), external_react_default.a.createElement("div", {
        className: "list-table-cell view-cell"
      }, external_react_default.a.createElement("b", null, "\xA0")), external_react_default.a.createElement("div", {
        className: "list-table-cell drop-cell"
      }, "\xA0")))))));
    }
  }]);

  return FilterSection;
}(external_react_default.a.Component);

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/ProblemBank/components/TableHeader/index.js


var TableHeader_TableHeader = function TableHeader(_ref) {
  var sortBySubject = _ref.sortBySubject;
  return external_react_default.a.createElement("div", {
    className: "list-table-header show-on-medium-and-down hide-on-large-only"
  }, external_react_default.a.createElement("div", {
    className: "list-table-row"
  }, external_react_default.a.createElement("div", {
    className: "list-table-cell checkbox-cell"
  }, external_react_default.a.createElement("span", null, "\xA0")), external_react_default.a.createElement("div", {
    className: "list-table-cell subject-cell"
  }, external_react_default.a.createElement("a", {
    href: "#",
    onClick: sortBySubject
  }, external_react_default.a.createElement("span", {
    className: "sort-holder"
  }, "Subject ", external_react_default.a.createElement("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), external_react_default.a.createElement("div", {
    className: "list-table-cell info-cell"
  }, external_react_default.a.createElement("b", null, "Di\uFB03culty")), external_react_default.a.createElement("div", {
    className: "list-table-cell type-cell"
  }, external_react_default.a.createElement("b", null, "Type")), external_react_default.a.createElement("div", {
    className: "list-table-cell in-cell"
  }, external_react_default.a.createElement("b", null, "In Workbook")), external_react_default.a.createElement("div", {
    className: "list-table-cell topic-cell"
  }, external_react_default.a.createElement("b", null, "Topic(s)")), external_react_default.a.createElement("div", {
    className: "list-table-cell view-cell"
  }, external_react_default.a.createElement("b", null, "\xA0")), external_react_default.a.createElement("div", {
    className: "list-table-cell drop-cell"
  }, "\xA0")));
};

/* harmony default export */ var components_TableHeader = (TableHeader_TableHeader);
// CONCATENATED MODULE: ./components/Worksheet/utils/sampleProblems.js
/* harmony default export */ var sampleProblems = ([{
  id: 1,
  subject: 'math',
  difficulty: 'easy',
  type: 'skillBuilder',
  inWorkbook: false,
  topics: ['rightTriangles', 'trigonometry']
}, {
  id: 2,
  subject: 'reading',
  difficulty: 'easy',
  type: 'satPractice',
  inWorkbook: false,
  topics: ['rightTriangles', 'trigonometry']
}, {
  id: 3,
  subject: 'reading',
  difficulty: 'hard',
  type: 'satPractice',
  inWorkbook: false,
  disabled: true,
  topics: ['rightTriangles', 'trigonometry']
}, {
  id: 4,
  subject: 'writing',
  difficulty: 'medium',
  type: 'skillBuilder',
  inWorkbook: false,
  topics: ['trigonometry']
}, {
  id: 5,
  subject: 'writing',
  difficulty: 'hard',
  type: 'skillBuilder',
  inWorkbook: false,
  disabled: true,
  topics: ['rightTriangles']
}, {
  id: 6,
  subject: 'math',
  difficulty: 'medium',
  type: 'satPractice',
  inWorkbook: false,
  topics: ['rightTriangles', 'trigonometry']
}]);
// CONCATENATED MODULE: ./components/Worksheet/utils/samplePassages.js
/* harmony default export */ var samplePassages = ([{
  id: 1,
  subject: 'reading',
  title: 'Passage Title 1',
  problems: [{
    id: 1,
    subject: 'math',
    difficulty: 'easy',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 3,
    subject: 'reading',
    difficulty: 'hard',
    type: 'satPractice',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles', 'trigonometry']
  }]
}, {
  id: 2,
  subject: 'writing',
  title: 'Passage Title 2',
  problems: [{
    id: 2,
    subject: 'reading',
    difficulty: 'easy',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 4,
    subject: 'writing',
    difficulty: 'medium',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['trigonometry']
  }]
}, {
  id: 3,
  subject: 'math',
  title: 'Passage Title 3',
  problems: [{
    id: 5,
    subject: 'writing',
    difficulty: 'hard',
    type: 'skillBuilder',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles']
  }, {
    id: 6,
    subject: 'math',
    difficulty: 'medium',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }]
}]);
// EXTERNAL MODULE: ./components/utils/sortFunctions.js
var sortFunctions = __webpack_require__("PFiW");

// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/ProblemBank/index.js









/* eslint-disable array-callback-return */

/* eslint-disable consistent-return */










var ProblemBank_ProblemBank =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ProblemBank, _React$Component);

  function ProblemBank(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ProblemBank);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ProblemBank).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAddProblemDropdown", function () {
      return _this.setState(function (_ref) {
        var addProblemsDropdownOpen = _ref.addProblemsDropdownOpen;
        return {
          addProblemsDropdownOpen: !addProblemsDropdownOpen
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChangeOpenSection", function (openSection) {
      return _this.setState({
        openSection: openSection
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetFilteredTopicState", function (topicFilter) {
      return _this.setState({
        topicFilter: topicFilter
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        subjectFilters: [],
        difficultyFilters: [],
        typeFilters: [],
        workbookFilters: [],
        topicFilter: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetAscendingSort", function () {
      return _this.setState({
        sort: 'ascending'
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetDescendingSort", function () {
      return _this.setState({
        sort: 'descending'
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSortBySubject", function (problemsOrPassages) {
      var sort = _this.state.sort;

      if (sort === 'ascending') {
        return problemsOrPassages.sort(sortFunctions["k" /* subjectAscending */]);
      }

      return problemsOrPassages.sort(sortFunctions["l" /* subjectDescending */]);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterPassages", function (passages, filterType, filter) {
      switch (filterType) {
        case 'difficulty':
        case 'type':
          return passages.reduce(function (finalArr, passage) {
            passage.problems.map(function (problem) {
              if (filter.indexOf(problem[filterType]) !== -1 && finalArr.indexOf(passage) === -1) {
                finalArr.push(passage);
              }
            });
            return finalArr;
          }, []);

        case 'topic':
          return passages.reduce(function (finalArr, passage) {
            passage.problems.map(function (problem) {
              if (problem.topics.indexOf(filter) !== -1 && finalArr.indexOf(passage) === -1) {
                finalArr.push(passage);
              }
            });
            return finalArr;
          }, []);

        case 'workbook':
          return passages.reduce(function (finalArr, passage) {
            passage.problems.map(function (problem) {
              if (filter.indexOf(workbookMap[problem.inWorkbook]) !== -1 && finalArr.indexOf(passage) === -1) {
                finalArr.push(passage);
              }
            });
            return finalArr;
          }, []);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterProblemsOrPassages", function (type) {
      var _this$state = _this.state,
          subjectFilters = _this$state.subjectFilters,
          difficultyFilters = _this$state.difficultyFilters,
          typeFilters = _this$state.typeFilters,
          workbookFilters = _this$state.workbookFilters,
          topicFilter = _this$state.topicFilter,
          allProblems = _this$state.problems,
          allPassages = _this$state.passages;
      var problemsOrPassages;

      if (type === 'problems') {
        problemsOrPassages = allProblems;
      } else {
        problemsOrPassages = allPassages;
      }

      if (subjectFilters.length) {
        problemsOrPassages = problemsOrPassages.filter(function (problemOrPassage) {
          return subjectFilters.indexOf(problemOrPassage.subject) !== -1;
        });
      }

      if (difficultyFilters.length) {
        if (type === 'problems') {
          problemsOrPassages = problemsOrPassages.filter(function (problem) {
            return difficultyFilters.indexOf(problem.difficulty) !== -1;
          });
        } else {
          problemsOrPassages = _this.onFilterPassages(problemsOrPassages, 'difficulty', difficultyFilters);
        }
      }

      if (typeFilters.length) {
        if (type === 'problems') {
          problemsOrPassages = problemsOrPassages.filter(function (problem) {
            return typeFilters.indexOf(problem.type) !== -1;
          });
        } else {
          problemsOrPassages = _this.onFilterPassages(problemsOrPassages, 'type', typeFilters);
        }
      }

      if (workbookFilters.length) {
        if (type === 'problems') {
          problemsOrPassages = problemsOrPassages.filter(function (problem) {
            return workbookFilters.indexOf(workbookMap[problem.inWorkbook]) !== -1;
          });
        } else {
          problemsOrPassages = _this.onFilterPassages(problemsOrPassages, 'workbook', workbookFilters);
        }
      }

      if (topicFilter.length) {
        if (type === 'problems') {
          problemsOrPassages = problemsOrPassages.filter(function (problem) {
            return problem.topics.indexOf(topicFilter) !== -1;
          });
        } else {
          problemsOrPassages = _this.onFilterPassages(problemsOrPassages, 'topic', topicFilter);
        }
      }

      return problemsOrPassages;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAddSelectedProblems", function (addTime) {
      var _this$state2 = _this.state,
          selectedProblems = _this$state2.selectedProblems,
          selectedPassages = _this$state2.selectedPassages;
      var addSelectedProblems = _this.props.addSelectedProblems;
      addSelectedProblems(selectedProblems, selectedPassages, addTime);

      _this.setState({
        selectedPassages: [],
        selectedProblems: [],
        addProblemsDropdownOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getMappableProblemsOrPassages", function (type) {
      var _this$state3 = _this.state,
          subjectFilters = _this$state3.subjectFilters,
          difficultyFilters = _this$state3.difficultyFilters,
          typeFilters = _this$state3.typeFilters,
          workbookFilters = _this$state3.workbookFilters,
          topicFilter = _this$state3.topicFilter,
          sort = _this$state3.sort,
          allProblems = _this$state3.problems,
          allPassages = _this$state3.passages;
      var problemsOrPassages;

      if (type === 'problems') {
        problemsOrPassages = allProblems;
      } else {
        problemsOrPassages = allPassages;
      }

      if (topicFilter.length || subjectFilters.length || difficultyFilters.length || typeFilters.length || workbookFilters.length) {
        problemsOrPassages = _this.onFilterProblemsOrPassages(type);
      }

      if (sort) {
        return _this.onSortBySubject(problemsOrPassages);
      }

      return problemsOrPassages;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "determineSort", function () {
      var sort = _this.state.sort;

      if (sort === '' || sort === 'descending') {
        return _this.onSetAscendingSort();
      }

      return _this.onSetDescendingSort();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFilterClick", function (filterType, filter) {
      var _this$state4 = _this.state,
          currentSubjectFilters = _this$state4.subjectFilters,
          currentDifficultyFilters = _this$state4.difficultyFilters,
          currentTypeFilters = _this$state4.typeFilters,
          currentWorkbookFilters = _this$state4.workbookFilters;
      var modifiedFilterCurrentState;
      var modifiedFilterName;
      var modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'difficulty':
          modifiedFilterCurrentState = currentDifficultyFilters;
          modifiedFilterName = 'difficultyFilters';
          break;

        case 'type':
          modifiedFilterCurrentState = currentTypeFilters;
          modifiedFilterName = 'typeFilters';
          break;

        case 'workbook':
          modifiedFilterCurrentState = currentWorkbookFilters;
          modifiedFilterName = 'workbookFilters';
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleSelectAllProblemsOrPassages", function () {
      var _this$state5 = _this.state,
          type = _this$state5.openSection,
          problems = _this$state5.problems,
          passages = _this$state5.passages,
          currentSelectedProblems = _this$state5.selectedProblems,
          currentSelectedPassages = _this$state5.selectedPassages;
      var clickedTypeCurrentState;
      var clickedTypeName;
      var clickedAllOfType;

      if (type === 'problems') {
        clickedTypeCurrentState = currentSelectedProblems;
        clickedTypeName = 'selectedProblems';
        clickedAllOfType = problems;
      } else {
        clickedTypeCurrentState = currentSelectedPassages;
        clickedTypeName = 'selectedPassages';
        clickedAllOfType = passages;
      }

      if (clickedTypeCurrentState.length === 0) {
        _this.setState(Object(defineProperty["a" /* default */])({}, clickedTypeName, clickedAllOfType));
      } else {
        _this.setState(Object(defineProperty["a" /* default */])({}, clickedTypeName, []));
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleProblemOrPassageClick", function (type, value) {
      var _this$state6 = _this.state,
          currentSelectedProblems = _this$state6.selectedProblems,
          currentSelectedPassages = _this$state6.selectedPassages;
      var clickedTypeCurrentState;
      var clickedTypeName;

      if (type === 'problem') {
        clickedTypeCurrentState = currentSelectedProblems;
        clickedTypeName = 'selectedProblems';
      } else {
        clickedTypeCurrentState = currentSelectedPassages;
        clickedTypeName = 'selectedPassages';
      }

      var clickedTypeUpdatedState;

      if (clickedTypeCurrentState.map(function (selectedElement) {
        return selectedElement.id;
      }).indexOf(value.id) === -1) {
        clickedTypeUpdatedState = external_immutability_helper_default()(clickedTypeCurrentState, {
          $push: [value]
        });
      } else {
        var selectedIndex = clickedTypeCurrentState.map(function (selectedElement) {
          return selectedElement.id;
        }).indexOf(value.id);
        clickedTypeUpdatedState = external_immutability_helper_default()(clickedTypeCurrentState, {
          $splice: [[selectedIndex, 1]]
        });
      }

      _this.setState(Object(defineProperty["a" /* default */])({}, clickedTypeName, clickedTypeUpdatedState));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapProblems", function () {
      return _this.getMappableProblemsOrPassages('problems').map(function (problem) {
        var selectedProblems = _this.state.selectedProblems;
        var selected = selectedProblems.map(function (selectedProblem) {
          return selectedProblem.id;
        }).indexOf(problem.id) !== -1;
        return external_react_default.a.createElement("div", {
          className: selected ? "card list-table-row list-row-added" : "card list-table-row"
        }, external_react_default.a.createElement("div", {
          className: "list-table-cell checkbox-cell"
        }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "checkbox",
          className: "filled-in",
          name: "check_01",
          checked: selectedProblems.map(function (selectedProblem) {
            return selectedProblem.id;
          }).indexOf(problem.id) !== -1,
          onChange: function onChange() {
            return _this.handleProblemOrPassageClick('problem', problem);
          }
        }), external_react_default.a.createElement("span", null, "\xA0"))), external_react_default.a.createElement("div", {
          className: "list-table-cell subject-cell"
        }, external_react_default.a.createElement("span", null, subjectMap[problem.subject])), external_react_default.a.createElement("div", {
          className: "list-table-cell info-cell"
        }, external_react_default.a.createElement("span", null, difficultyMap[problem.difficulty])), external_react_default.a.createElement("div", {
          className: "list-table-cell type-cell"
        }, external_react_default.a.createElement("span", null, typeMap[problem.type])), external_react_default.a.createElement("div", {
          className: "list-table-cell in-cell"
        }, problem.inWorkbook ? 'Yes' : 'No'), external_react_default.a.createElement("div", {
          className: "list-table-cell topic-cell"
        }, problem.topics.map(function (topic) {
          return external_react_default.a.createElement("span", {
            className: "chip",
            id: topic
          }, topicMap[topic]);
        })), external_react_default.a.createElement("div", {
          className: "list-table-cell view-cell"
        }, external_react_default.a.createElement("a", {
          href: "#"
        }, external_react_default.a.createElement("i", {
          className: "icon-eye"
        }))), external_react_default.a.createElement("div", {
          className: "list-table-cell drop-cell"
        }, external_react_default.a.createElement("a", {
          href: "#"
        }, external_react_default.a.createElement("i", {
          className: "icon-plus-circle"
        }))));
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapPassages", function () {
      return _this.getMappableProblemsOrPassages('passages').map(function (passage) {
        var selectedPassages = _this.state.selectedPassages;
        var selected = selectedPassages.map(function (selectedPassage) {
          return selectedPassage.id;
        }).indexOf(passage.id) !== -1;
        return external_react_default.a.createElement("div", {
          className: "list-view-section"
        }, external_react_default.a.createElement("div", {
          className: selected ? "list-table detail-table list-table-added" : "list-table detail-table"
        }, external_react_default.a.createElement(components_TableHeader, {
          sortBySubject: _this.determineSort
        }), external_react_default.a.createElement("div", {
          className: "list-table-body"
        }, external_react_default.a.createElement("div", {
          className: "combined-holder"
        }, external_react_default.a.createElement("div", {
          className: "combined-header"
        }, external_react_default.a.createElement("div", {
          className: "list-table-row"
        }, external_react_default.a.createElement("div", {
          className: "list-table-cell checkbox-cell"
        }, external_react_default.a.createElement("div", {
          className: "checkbox-block"
        }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "checkbox",
          className: "filled-in",
          checked: selectedPassages.map(function (selectedPassage) {
            return selectedPassage.id;
          }).indexOf(passage.id) !== -1,
          onChange: function onChange() {
            return _this.handleProblemOrPassageClick('passage', passage);
          }
        }), external_react_default.a.createElement("span", null, "\xA0")))), external_react_default.a.createElement("div", {
          className: "list-table-cell subject-cell"
        }, external_react_default.a.createElement("div", {
          className: "filter-name"
        }, subjectMap[passage.subject])), external_react_default.a.createElement("div", {
          className: "list-table-cell combined-title-cell"
        }, external_react_default.a.createElement("div", {
          className: "combined-title"
        }, passage.title)), external_react_default.a.createElement("div", {
          className: "list-table-cell view-cell"
        }, external_react_default.a.createElement("a", {
          href: "#"
        }, external_react_default.a.createElement("i", {
          className: "custom-icon-triangle-right"
        }))), external_react_default.a.createElement("div", {
          className: "list-table-cell drop-cell"
        }, external_react_default.a.createElement("a", {
          href: "#"
        }, external_react_default.a.createElement("i", {
          className: "icon-plus-circle"
        }))))), external_react_default.a.createElement("div", {
          className: "collection"
        }, passage.problems.map(function (problem) {
          return external_react_default.a.createElement("div", {
            className: "collection-item list-table-row",
            id: problem.id
          }, external_react_default.a.createElement("div", {
            className: "list-table-cell checkbox-cell"
          }, external_react_default.a.createElement("span", null, "\xA0")), external_react_default.a.createElement("div", {
            className: "list-table-cell subject-cell"
          }, external_react_default.a.createElement("span", null, subjectMap[problem.subject])), external_react_default.a.createElement("div", {
            className: "list-table-cell info-cell"
          }, external_react_default.a.createElement("span", null, difficultyMap[problem.difficulty])), external_react_default.a.createElement("div", {
            className: "list-table-cell type-cell"
          }, external_react_default.a.createElement("span", null, typeMap[problem.type])), external_react_default.a.createElement("div", {
            className: "list-table-cell in-cell"
          }, problem.inWorkbook ? 'Yes' : 'No'), external_react_default.a.createElement("div", {
            className: "list-table-cell topic-cell"
          }, problem.topics.map(function (topic) {
            return external_react_default.a.createElement("span", {
              className: "chip",
              id: topic
            }, topicMap[topic]);
          })), external_react_default.a.createElement("div", {
            className: "list-table-cell view-cell"
          }, external_react_default.a.createElement("a", {
            href: "#"
          }, external_react_default.a.createElement("i", {
            className: "icon-eye"
          }))), external_react_default.a.createElement("div", {
            className: "list-table-cell drop-cell"
          }, external_react_default.a.createElement("span", null, "\xA0")));
        }))))));
      });
    });

    _this.state = {
      addProblemsDropdownOpen: false,
      openSection: 'problems',
      topicFilter: '',
      subjectFilters: [],
      difficultyFilters: [],
      typeFilters: [],
      workbookFilters: [],
      sort: '',
      selectedProblems: [],
      selectedPassages: [],
      problems: sampleProblems,
      passages: samplePassages
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ProblemBank, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          open = _this$props.open,
          onClose = _this$props.onClose;
      var _this$state7 = this.state,
          openSection = _this$state7.openSection,
          subjectFilters = _this$state7.subjectFilters,
          difficultyFilters = _this$state7.difficultyFilters,
          typeFilters = _this$state7.typeFilters,
          workbookFilters = _this$state7.workbookFilters,
          addProblemsDropdownOpen = _this$state7.addProblemsDropdownOpen;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "wrapper"
      }, external_react_default.a.createElement("div", {
        id: "modal_add_problem",
        style: {
          zIndex: '1003'
        },
        className: "jsx-837324748" + " " + "modal-page modal modal-custom"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "card-modal grey lighten-3"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "header-modal-box card-panel light-blue lighten-1 white-text"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "header-flex-row row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "col s12 m4 l5"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "header-holder"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "header-col"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "icon-col"
      }, external_react_default.a.createElement("i", {
        className: "jsx-837324748" + " " + "icon-search"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "header-col"
      }, external_react_default.a.createElement("nav", {
        className: "jsx-837324748" + " " + "breadcrumb-header"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "nav-wrapper "
      }, external_react_default.a.createElement("a", {
        href: "#!",
        className: "jsx-837324748" + " " + "breadcrumb modal-close"
      }, "< Custom Worksheet"))), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "card-panel-text"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-837324748" + " " + "text-large"
      }, "Problem Bank"))))), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "card-panel-description col s8 m3 l2"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "card-panel-text"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "col-row"
      }, external_react_default.a.createElement("span", {
        className: "jsx-837324748" + " " + "value"
      }, "24"), external_react_default.a.createElement("span", {
        className: "jsx-837324748" + " " + "value-text"
      }, "worksheet ", external_react_default.a.createElement("br", {
        className: "jsx-837324748"
      }), "problems")))), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "col s2 m1 right-align position-mobile-right"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "close-block"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: onClose,
        className: "jsx-837324748" + " " + "modal-close close"
      }, external_react_default.a.createElement("i", {
        className: "jsx-837324748" + " " + "icon-close-thin"
      }))))), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "tabs-switcher-holder card-panel-row"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-837324748" + " " + "tabs"
      }, external_react_default.a.createElement("li", {
        style: {
          borderBottom: openSection === 'problems' ? '2px solid white' : ''
        },
        className: "jsx-837324748" + " " + "tab col s3"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onChangeOpenSection('problems');
        },
        className: "jsx-837324748" + " " + ((openSection === 'problems' ? 'active' : '') || "")
      }, external_react_default.a.createElement("b", {
        className: "jsx-837324748"
      }, "Problems"))), external_react_default.a.createElement("li", {
        style: {
          borderBottom: openSection === 'passages' ? '2px solid white' : ''
        },
        className: "jsx-837324748" + " " + "tab col s3"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onChangeOpenSection('passages');
        },
        className: "jsx-837324748" + " " + ((openSection === 'passages' ? 'active' : '') || "")
      }, external_react_default.a.createElement("b", {
        className: "jsx-837324748"
      }, "Passages")))))), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "tabs-content"
      }, external_react_default.a.createElement(components_FilterSection, {
        onSetFilteredTopicState: this.onSetFilteredTopicState,
        onClearFilters: this.onClearFilters,
        sortBySubject: this.determineSort,
        toggleSelectAllProblemsOrPassages: this.toggleSelectAllProblemsOrPassages,
        handleFilterClick: this.handleFilterClick,
        subjectFilters: subjectFilters,
        difficultyFilters: difficultyFilters,
        typeFilters: typeFilters,
        workbookFilters: workbookFilters
      }), openSection === 'problems' ? external_react_default.a.createElement("div", {
        id: "tab_problems",
        className: "jsx-837324748" + " " + "tab-content active"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "content-section content-section-80"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "container-lg"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "result-row center-align"
      }, external_react_default.a.createElement("b", {
        className: "jsx-837324748" + " " + "result"
      }, "- ", this.getMappableProblemsOrPassages('problems').length, " matches -")), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "list-view-section"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "list-table detail-table"
      }, external_react_default.a.createElement(components_TableHeader, {
        sortBySubject: this.determineSort
      }), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "list-table-body"
      }, this.mapProblems())))))) : external_react_default.a.createElement("div", {
        id: "tab_passages",
        className: "jsx-837324748" + " " + "tab-content active"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "content-section content-section-80"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "container-lg"
      }, external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "result-row center-align"
      }, external_react_default.a.createElement("b", {
        className: "jsx-837324748" + " " + "result"
      }, "- ", this.getMappableProblemsOrPassages('passages').length, " matches -")), this.mapPassages()))), external_react_default.a.createElement("div", {
        className: "jsx-837324748" + " " + "add-btn-block"
      }, external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_assign_selected_passeges",
        onClick: this.onToggleAddProblemDropdown,
        className: "jsx-837324748" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, external_react_default.a.createElement("i", {
        className: "jsx-837324748" + " " + "material-icons"
      }, "add"), "Add Selected Problems"), external_react_default.a.createElement("ul", {
        id: "dropdown_assign_selected_passeges",
        style: {
          display: addProblemsDropdownOpen ? 'block' : '0',
          opacity: addProblemsDropdownOpen ? '1' : '0'
        },
        className: "jsx-837324748" + " " + 'dropdown-content'
      }, external_react_default.a.createElement("li", {
        className: "jsx-837324748"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onAddSelectedProblems('today');
        },
        className: "jsx-837324748"
      }, "For Today")), external_react_default.a.createElement("li", {
        className: "jsx-837324748"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onAddSelectedProblems('tomorrow');
        },
        className: "jsx-837324748"
      }, "For Tomorrow")), external_react_default.a.createElement("li", {
        className: "jsx-837324748"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onAddSelectedProblems('nextSession');
        },
        className: "jsx-837324748"
      }, "For Next Session")), external_react_default.a.createElement("li", {
        className: "jsx-837324748"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onAddSelectedProblems('date');
        },
        className: "jsx-837324748"
      }, "For Date...")))))))), external_react_default.a.createElement(style_default.a, {
        id: "837324748"
      }, [".card-modal.jsx-837324748{margin:0;border-radius:6px;}", ".wrapper.jsx-837324748{min-height:0px;}", ".modal-custom.jsx-837324748{opacity:1;visibility:visible;}", ".modal-footer.jsx-837324748{background-color:white;}"]));
    }
  }]);

  return ProblemBank;
}(external_react_default.a.Component);

/* harmony default export */ var components_ProblemBank = (ProblemBank_ProblemBank);
// CONCATENATED MODULE: ./components/Worksheet/DetailPage/index.js
















var DetailPage_DetailPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DetailPage, _React$Component);

  function DetailPage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DetailPage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DetailPage).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleProblemBankModal", function () {
      return _this.setState(function (_ref) {
        var problemBankOpen = _ref.problemBankOpen;
        return {
          problemBankOpen: !problemBankOpen
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onRemoveAllProblems", function () {
      return _this.setState({
        problems: [],
        passages: []
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "addSelectedProblems", function (incomingProblems, incomingPassages, addTime) {
      var problems = external_immutability_helper_default()(_this.state.problems, {
        $push: Object(toConsumableArray["a" /* default */])(incomingProblems)
      });
      var passages = external_immutability_helper_default()(_this.state.passages, {
        $push: Object(toConsumableArray["a" /* default */])(incomingPassages)
      });
      console.warn('What are we doing with addTime?', addTime);

      _this.setState({
        problems: problems,
        passages: passages
      }, _this.onToggleProblemBankModal);
    });

    _this.state = {
      problemBankOpen: false,
      problems: sampleProblems,
      passages: samplePassages
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DetailPage, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          problemBankOpen = _this$state.problemBankOpen,
          problems = _this$state.problems,
          passages = _this$state.passages;
      return external_react_default.a.createElement("div", {
        className: "main-container"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "main-row row"
      }, external_react_default.a.createElement(components_ProblemBank, {
        open: problemBankOpen,
        onClose: this.onToggleProblemBankModal,
        addSelectedProblems: this.addSelectedProblems
      }), external_react_default.a.createElement(components_WorksheetProblems, {
        onOpenProblemBankModal: this.onToggleProblemBankModal,
        onRemoveAllProblems: this.onRemoveAllProblems,
        problems: problems,
        passages: passages
      }), external_react_default.a.createElement(components_WorksheetDetails, {
        worksheet: {}
      })), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col s12"
      }, external_react_default.a.createElement("div", {
        className: "btn-holder right-align"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        className: "btn waves-effect waves-light bg-blue"
      }, "Save Worksheet"))))));
    }
  }]);

  return DetailPage;
}(external_react_default.a.Component);

/* harmony default export */ var Worksheet_DetailPage = (DetailPage_DetailPage);
// CONCATENATED MODULE: ./pages/worksheets.js






 // eslint-disable-next-line react/prefer-stateless-function

var worksheets_Worksheets =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Worksheets, _Component);

  function Worksheets() {
    Object(classCallCheck["a" /* default */])(this, Worksheets);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Worksheets).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Worksheets, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("main", {
        id: "main",
        role: "main"
      }, external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-5 switcher-section"
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
        href: "#!",
        className: "breadcrumb"
      }, "< Custom Worksheet Library"))), external_react_default.a.createElement("h2", {
        className: "h1 white-text"
      }, external_react_default.a.createElement("span", {
        className: "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "icon-sheets-w"
      }), external_react_default.a.createElement("span", {
        className: "heading-block"
      }, "Some Custom Worksheet")))), external_react_default.a.createElement(Worksheet_DetailPage, null)));
    }
  }]);

  return Worksheets;
}(external_react_["Component"]);

/* harmony default export */ var worksheets = __webpack_exports__["default"] = (worksheets_Worksheets);

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