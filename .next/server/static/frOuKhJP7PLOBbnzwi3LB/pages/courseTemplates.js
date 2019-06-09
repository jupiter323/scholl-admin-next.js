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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zlhV");


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "zlhV":
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

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/CourseTemplate/utils/sortOptions.js
/* harmony default export */ var sortOptions = ([{
  value: 'sessions',
  label: 'Number Of Sessions'
}, {
  value: 'estimatedTotalCourseWork',
  label: 'Estimated Total Course Work'
}, {
  value: 'lessons',
  label: 'Number Of Lessons'
}]);
var sessionSort = function sessionSort(_ref, _ref2) {
  var sessionCountA = _ref.sessions;
  var sessionCountB = _ref2.sessions;

  if (sessionCountA > sessionCountB) {
    return -1;
  }

  return 0;
};
var lessonSort = function lessonSort(_ref3, _ref4) {
  var lessonCountA = _ref3.lessons;
  var lessonCountB = _ref4.lessons;

  if (lessonCountA > lessonCountB) {
    return -1;
  }

  return 0;
};
var estimatedTotalCourseWorkSort = function estimatedTotalCourseWorkSort(_ref5, _ref6) {
  var courseworkA = _ref5.estimatedTotalCourseWork;
  var courseworkB = _ref6.estimatedTotalCourseWork;

  if (courseworkA > courseworkB) {
    return -1;
  }

  return 0;
};
// CONCATENATED MODULE: ./components/CourseTemplate/components/FilterSection/index.js








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
        title: '',
        sort: ''
      }, _this.props.onClearFilters);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChangeTitleSearch", function (_ref2) {
      var title = _ref2.target.value;
      return _this.setState({
        title: title
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSortChange", function (sort) {
      var onSetSort = _this.props.onSetSort;

      _this.setState({
        sort: sort
      });

      return onSetSort(sort);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "submitNameFilter", function () {
      var _this$props = _this.props,
          onSetFilteredState = _this$props.onSetFilteredState,
          onUnsetFilteredState = _this$props.onUnsetFilteredState;
      var title = _this.state.title;

      if (title === '') {
        onUnsetFilteredState();
      }

      var transformedTitle = title.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedTitle);
    });

    _this.state = {
      open: true,
      title: '',
      sort: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          sort = _this$state.sort,
          open = _this$state.open,
          title = _this$state.title;
      var _this$props2 = this.props,
          onClearFilters = _this$props2.onClearFilters,
          subjectFilters = _this$props2.subjectFilters,
          sourceFilters = _this$props2.sourceFilters,
          handleFilterClick = _this$props2.handleFilterClick;
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
        id: "reading",
        checked: subjectFilters.indexOf('reading') !== -1,
        onChange: function onChange() {
          return handleFilterClick('subject', 'reading');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "reading"
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
      }, "Math")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "all",
        checked: subjectFilters.indexOf('all') !== -1,
        onChange: function onChange() {
          return handleFilterClick('subject', 'all');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "all"
      }, "All"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "builtIn",
        checked: sourceFilters.indexOf('builtIn') !== -1,
        onChange: function onChange() {
          return handleFilterClick('source', 'builtIn');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "builtIn"
      }, "Built-In")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "userCreated",
        checked: sourceFilters.indexOf('userCreated') !== -1,
        onChange: function onChange() {
          return handleFilterClick('source', 'userCreated');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "userCreated"
      }, "User Created")))), external_react_default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "course_search",
        className: "input-control validate",
        value: title,
        onChange: this.onChangeTitleSearch
      }), external_react_default.a.createElement("button", {
        type: "submit",
        className: "search-button",
        onClick: this.submitNameFilter
      }, external_react_default.a.createElement("i", {
        className: "icon-search"
      })), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "course_search"
      }, "Search"))))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12 xl7"
      }, external_react_default.a.createElement("div", {
        className: "input-field",
        style: {
          marginBottom: '0',
          marginTop: '0'
        }
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(sort, sortOptions),
        onChange: this.handleSortChange,
        options: sortOptions,
        label: "Sort By",
        stateKey: "topic",
        dropdownKey: "topic"
      }))))), external_react_default.a.createElement("div", {
        className: "col s12 l4 hide-on-med-and-down show-on-large"
      }, "\xA0"), external_react_default.a.createElement("div", {
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
// CONCATENATED MODULE: ./components/CourseTemplate/components/TemplateCard/index.js








/* eslint-disable jsx-a11y/no-static-element-interactions */


var formatEstimatedTotalCourseWork = function formatEstimatedTotalCourseWork(minutes) {
  return Math.floor(minutes / 60);
};

var sourceMap = {
  builtIn: 'Built-In',
  userCreated: 'User Created'
};

var TemplateCard_TemplateCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(TemplateCard, _React$Component);

  function TemplateCard(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TemplateCard);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TemplateCard).call(this, props));

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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleEditModal", function (event) {
      var onToggleEditModal = _this.props.onToggleEditModal;
      event.preventDefault();
      onToggleEditModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleExpandedState", function () {
      return _this.setState(function (_ref) {
        var expanded = _ref.expanded;
        return {
          expanded: !expanded
        };
      });
    });

    _this.state = {
      expanded: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(TemplateCard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          template = _this$props2.template,
          dropdownIndex = _this$props2.dropdownIndex,
          dropdownIsOpen = _this$props2.dropdownIsOpen,
          index = _this$props2.index;
      var title = template.title,
          source = template.source,
          sessions = template.sessions,
          estimatedTotalCourseWork = template.estimatedTotalCourseWork,
          lessons = template.lessons,
          description = template.description,
          instructions = template.instructions;
      var expanded = this.state.expanded;
      return external_react_default.a.createElement("div", {
        className: "card-main-col col s12 l6"
      }, external_react_default.a.createElement("div", {
        className: "card-template card"
      }, external_react_default.a.createElement("i", {
        className: "icon-module icon-position-left"
      }), external_react_default.a.createElement("ul", {
        className: "collapsible expandable"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "collapsible-card card-panel"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-row align-items-start row"
      }, external_react_default.a.createElement("div", {
        className: "col s10"
      }, external_react_default.a.createElement("div", {
        className: "card-header-block"
      }, external_react_default.a.createElement("h3", {
        className: "h4 collapsible-title"
      }, title), external_react_default.a.createElement("div", {
        className: "meta-info"
      }, external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Source:"), external_react_default.a.createElement("dd", null, sourceMap[source]))))), external_react_default.a.createElement("div", {
        className: "col s2 right-align"
      }, external_react_default.a.createElement("div", {
        className: "row icons-row"
      }, external_react_default.a.createElement("div", {
        className: "dropdown-block col"
      }, external_react_default.a.createElement("a", {
        className: "dropdown-trigger btn",
        href: "#",
        "data-target": "dropdown02",
        onClick: this.handleDropdownClick
      }, external_react_default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? external_react_default.a.createElement("ul", {
        id: "dropdown02",
        className: "dropdown-content dropdown-wide",
        style: {
          display: 'block',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        className: "modal-trigger link-block",
        onClick: this.toggleEditModal
      }, "Edit")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#!",
        className: "link-delete"
      }, "Delete"))) : null), external_react_default.a.createElement("div", {
        className: "col right-align"
      }, external_react_default.a.createElement("span", {
        onClick: this.toggleExpandedState,
        className: "collapsible-header collapsible-opener"
      }, external_react_default.a.createElement("i", {
        className: "custom-icon-triangle-right color-black"
      })))))), external_react_default.a.createElement("div", {
        className: "d-flex justify-content-center align-items-center row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col m6"
      }, external_react_default.a.createElement("ul", {
        className: "points-list list-two-cols badge-circle-78"
      }, external_react_default.a.createElement("li", {
        className: "style-purple-dark"
      }, external_react_default.a.createElement("span", {
        className: "badge-circle"
      }, sessions), external_react_default.a.createElement("span", {
        className: "point-text"
      }, "Sessions")), external_react_default.a.createElement("li", {
        className: "style-pink"
      }, external_react_default.a.createElement("span", {
        className: "badge-circle"
      }, formatEstimatedTotalCourseWork(estimatedTotalCourseWork), " ", external_react_default.a.createElement("span", {
        className: "badge-text"
      }, "hrs")), external_react_default.a.createElement("span", {
        className: "point-text"
      }, "Estimated Total Course Work")))), external_react_default.a.createElement("div", {
        className: "col"
      }, external_react_default.a.createElement("div", {
        className: "chart-block chart-block-140"
      }, external_react_default.a.createElement("div", {
        className: "js-donut-chart",
        "data-stroke-width": "42",
        "data-source": "./inc/score-data-multiline.json"
      }), external_react_default.a.createElement("div", {
        className: "chart-text"
      }, external_react_default.a.createElement("span", {
        className: "value"
      }, lessons), external_react_default.a.createElement("span", {
        className: "description"
      }, "Lessons")))))), external_react_default.a.createElement("div", {
        className: "card-content collapsible-body",
        style: {
          display: expanded ? 'block' : 'none'
        }
      }, external_react_default.a.createElement("dl", null, external_react_default.a.createElement("dt", null, external_react_default.a.createElement("strong", {
        className: "dl-title"
      }, "Description:")), external_react_default.a.createElement("dd", null, external_react_default.a.createElement("p", null, description))), external_react_default.a.createElement("dl", null, external_react_default.a.createElement("dt", null, external_react_default.a.createElement("strong", {
        className: "dl-title"
      }, "Instructions:")), external_react_default.a.createElement("dd", null, external_react_default.a.createElement("p", null, instructions))))))));
    }
  }]);

  return TemplateCard;
}(external_react_default.a.Component);

/* harmony default export */ var components_TemplateCard = (TemplateCard_TemplateCard);
// CONCATENATED MODULE: ./components/CourseTemplate/utils/sampleTemplate.js
/* harmony default export */ var sampleTemplate = ([{
  title: 'Template name 1',
  source: 'userCreated',
  sessions: 31,
  estimatedTotalCourseWork: 3660,
  lessons: 98,
  subject: 'reading',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 2',
  source: 'builtIn',
  sessions: 19,
  estimatedTotalCourseWork: 2198,
  lessons: 102,
  subject: 'writing',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 3',
  source: 'userCreated',
  sessions: 19,
  estimatedTotalCourseWork: 4102,
  lessons: 125,
  subject: 'math',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 4',
  source: 'builtIn',
  sessions: 22,
  estimatedTotalCourseWork: 4000,
  lessons: 131,
  subject: 'reading',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 5',
  source: 'userCreated',
  sessions: 12,
  estimatedTotalCourseWork: 2981,
  lessons: 91,
  subject: 'writing',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 6',
  source: 'builtIn',
  sessions: 35,
  estimatedTotalCourseWork: 1249,
  lessons: 88,
  subject: 'math',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}]);
// CONCATENATED MODULE: ./pages/courseTemplates.js














var courseTemplates_CourseTemplates =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(CourseTemplates, _React$Component);

  function CourseTemplates(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CourseTemplates);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CourseTemplates).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        subjectFilters: [],
        sourceFilters: [],
        titleFilter: '',
        sort: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetFilteredState", function (titleFilter) {
      return _this.setState({
        templatesAreFiltered: true,
        titleFilter: titleFilter
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        templatesAreFiltered: false,
        titleFilter: ''
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleEditModal", function () {
      return _this.setState(function (_ref) {
        var editModalOpen = _ref.editModalOpen;
        return {
          editModalOpen: !editModalOpen
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSortTemplates", function (templates) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'sessions':
          return templates.sort(sessionSort);

        case 'estimatedTotalCourseWork':
          return templates.sort(estimatedTotalCourseWorkSort);

        case 'lessons':
          return templates.sort(lessonSort);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByTitle", function () {
      var _this$state = _this.state,
          templates = _this$state.templates,
          titleFilter = _this$state.titleFilter;
      return templates.reduce(function (finalArr, currentTemplate) {
        var title = currentTemplate.title;
        var templateString = title.replace(/\s/g, "").toLowerCase();

        if (templateString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentTemplate) === -1) {
          finalArr.push(currentTemplate);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterTemplates", function () {
      var _this$state2 = _this.state,
          subjectFilters = _this$state2.subjectFilters,
          sourceFilters = _this$state2.sourceFilters,
          allTemplates = _this$state2.templates;
      var templates = allTemplates;

      if (subjectFilters.length && subjectFilters.indexOf('all') === -1) {
        templates = templates.filter(function (template) {
          return subjectFilters.indexOf(template.subject) !== -1;
        });
      }

      if (sourceFilters.length) {
        templates = templates.filter(function (template) {
          return sourceFilters.indexOf(template.source) !== -1;
        });
      }

      return templates;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getMappableTemplates", function () {
      var _this$state3 = _this.state,
          subjectFilters = _this$state3.subjectFilters,
          sourceFilters = _this$state3.sourceFilters,
          titleFilter = _this$state3.titleFilter,
          sort = _this$state3.sort,
          templates = _this$state3.templates;
      var mappableTemplates = templates;

      if (titleFilter.length) {
        mappableTemplates = _this.onFilterByTitle();
      }

      if (subjectFilters.length || sourceFilters.length) {
        mappableTemplates = _this.onFilterTemplates();
      }

      if (sort) {
        return _this.onSortTemplates(mappableTemplates);
      }

      return mappableTemplates;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "importTemplateFromFile", function () {
      console.warn('stubbed out import function');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFilterClick", function (filterType, filter) {
      var _this$state4 = _this.state,
          currentSubjectFilters = _this$state4.subjectFilters,
          currentSourceFilters = _this$state4.sourceFilters;
      var modifiedFilterCurrentState;
      var modifiedFilterName;
      var modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'source':
          modifiedFilterCurrentState = currentSourceFilters;
          modifiedFilterName = 'sourceFilters';
          break;

        default:
          break;
      } // Decide whether we're adding or removing the selected filter


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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapTemplateCards", function () {
      return _this.getMappableTemplates().map(function (template, index) {
        return external_react_default.a.createElement(components_TemplateCard, {
          template: template,
          index: index,
          dropdownIndex: _this.state.dropdownIndex,
          dropdownIsOpen: _this.state.dropdownIsOpen,
          onCloseDropdown: _this.onCloseDropdown,
          onSetDropdown: _this.onSetDropdown,
          onToggleEditModal: _this.onToggleEditModal
        });
      });
    });

    _this.state = {
      templates: sampleTemplate,
      dropdownIsOpen: false,
      dropdownIndex: null,
      editModalOpen: false,
      subjectFilters: [],
      sourceFilters: [],
      titleFilter: '',
      sort: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(CourseTemplates, [{
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          subjectFilters = _this$state5.subjectFilters,
          sourceFilters = _this$state5.sourceFilters;
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
      }, "menu"))), external_react_default.a.createElement("h2", {
        className: "h1 white-text"
      }, external_react_default.a.createElement("span", {
        className: "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "icon-module"
      }), external_react_default.a.createElement("span", {
        className: "heading-block"
      }, "Course Template Library")))), external_react_default.a.createElement(components_FilterSection, {
        subjectFilters: subjectFilters,
        sourceFilters: sourceFilters,
        onSetSort: this.onSetSort,
        onClearFilters: this.onClearFilters,
        handleFilterClick: this.handleFilterClick,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState
      }), external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "container-middle"
      }, external_react_default.a.createElement("div", {
        className: "result-row center-align"
      }, external_react_default.a.createElement("b", {
        className: "result"
      }, "- ", this.getMappableTemplates().length, " matches -")), external_react_default.a.createElement("div", {
        className: "d-flex-content row card-width-470"
      }, this.mapTemplateCards())))), external_react_default.a.createElement("div", {
        className: "add-btn-block"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.importTemplateFromFile,
        className: "waves-effect waves-teal btn add-btn"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "add"), " Import Template from File")));
    }
  }]);

  return CourseTemplates;
}(external_react_default.a.Component);

/* harmony default export */ var courseTemplates = __webpack_exports__["default"] = (courseTemplates_CourseTemplates);

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