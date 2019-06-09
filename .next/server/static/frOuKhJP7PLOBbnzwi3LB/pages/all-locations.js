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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QYtH");


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

/***/ "4jX/":
/***/ (function(module, exports) {

module.exports = require("react-color");

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

/***/ "Hl4h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  id: 1,
  // owner: {
  //   lastName: 'Bezos',
  //   firstName: 'Jeff',
  //   email: 'jeff-bezos@gmail.com',
  // },
  locationContactInfo: {
    locationName: 'Amazon',
    locationNickname: 'Amazon - Online Marketplace',
    locationEmail: 'amazon@gmail.com',
    locationPhoneNumber: '123-456-7889',
    website: '',
    locationStreetAddress: '',
    locationCity: 'AustinAustin',
    locationState: '',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 15,
    pastStudents: 24,
    unactivatedStudents: 29,
    averageImprovement: 185,
    averageInitialScore: 1037,
    averageFinalScore: 1218,
    studentsAchievingTargetScore: 12
  }
}, {
  id: 2,
  // owner: {
  //   lastName: 'Chavarro',
  //   firstName: 'Christian',
  //   email: 'christian-chavarro@gmail.com',
  // },
  locationContactInfo: {
    locationName: 'ChavarroLand',
    locationNickname: 'ChavarroLand - Austin, TX',
    locationEmail: 'chavarro@gmail.com',
    locationPhoneNumber: '535-432-2564',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: '',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 12,
    pastStudents: 73,
    unactivatedStudents: 12,
    averageImprovement: 200,
    averageInitialScore: 1000,
    averageFinalScore: 1213,
    studentsAchievingTargetScore: 14
  }
}, {
  id: 3,
  // owner: {
  //   lastName: 'Chavis',
  //   firstName: 'Cellena',
  //   email: 'cellena-chavis@gmail.com',
  // },
  locationContactInfo: {
    locationName: 'Tutor Zone',
    locationNickname: 'Tutor Zone - Orlando, FL',
    locationEmail: 'tutor-zone@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: '',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 44,
    pastStudents: 32,
    unactivatedStudents: 5,
    averageImprovement: 221,
    averageInitialScore: 1200,
    averageFinalScore: 1400,
    studentsAchievingTargetScore: 23
  }
}, {
  id: 4,
  // owner: {
  //   lastName: 'Smith',
  //   firstName: 'Will',
  //   email: 'will-smithgmail.com',
  // },
  locationContactInfo: {
    locationName: 'Fresh Prince',
    locationNickname: 'Fresh Prince - Philladelphia',
    locationEmail: 'fresh-prince@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: '',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 22,
    pastStudents: 10,
    unactivatedStudents: 12,
    averageImprovement: 261,
    averageInitialScore: 1100,
    averageFinalScore: 1233,
    studentsAchievingTargetScore: 13
  }
}, {
  id: 5,
  // owner: {
  //   lastName: 'Lumberjack',
  //   firstName: 'Arnold',
  //   email: 'arnold-lumberjack@gmail.com',
  // },
  locationContactInfo: {
    locationName: 'Lumberjack Tutoring',
    locationNickname: 'Lumberjack Tutoring - Canada',
    locationEmail: 'lumberjack-tutoring@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Miami',
    locationState: '',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 11,
    pastStudents: 24,
    unactivatedStudents: 62,
    averageImprovement: 123,
    averageInitialScore: 1269,
    averageFinalScore: 1459,
    studentsAchievingTargetScore: 9
  }
}, {
  id: 6,
  // owner: {
  //   lastName: 'Duck',
  //   firstName: 'Donald',
  //   email: 'donald-duck@gmail.com',
  // },
  locationContactInfo: {
    locationName: 'Disney Learning',
    locationNickname: 'Disney Learning - San Francisco, CA',
    locationEmail: 'disney-learning@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Miami',
    locationState: '',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 45,
    pastStudents: 14,
    unactivatedStudents: 31,
    averageImprovement: 205,
    averageInitialScore: 1129,
    averageFinalScore: 1367,
    studentsAchievingTargetScore: 44
  }
}]);

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

/***/ "QLkJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LocationEmailSettings = function LocationEmailSettings(_ref) {
  var _ref$state = _ref.state,
      automatedEmailOriginAddress = _ref$state.automatedEmailOriginAddress,
      automatedEmailSalutation = _ref$state.automatedEmailSalutation,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Location Email Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "automated-email-origin-address",
    name: "automatedEmailOriginAddress",
    value: automatedEmailOriginAddress,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'automatedEmailOriginAddress', 'locationEmailSettings');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "automated-email-origin-address"
  }, "Automated Emails Come From (email)*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "materialize-textarea",
    id: "automated-email-salutation",
    name: "automatedEmailSalutation",
    value: automatedEmailSalutation,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'automatedEmailSalutation', 'locationEmailSettings');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "automated-email-salutation"
  }, "Automated Email Salutation*")))))));
};

/* harmony default export */ __webpack_exports__["a"] = (LocationEmailSettings);

/***/ }),

/***/ "QYtH":
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

// CONCATENATED MODULE: ./components/Location/ListPage/components/LocationCard/index.js


var LocationCard_LocationCard = function LocationCard(_ref) {
  var _ref$location = _ref.location;
  _ref$location = _ref$location === void 0 ? {} : _ref$location;
  var _ref$location$locatio = _ref$location.locationBasicInfo;
  _ref$location$locatio = _ref$location$locatio === void 0 ? {} : _ref$location$locatio;
  var activeStudents = _ref$location$locatio.activeStudents,
      pastStudents = _ref$location$locatio.pastStudents,
      unactivatedStudents = _ref$location$locatio.unactivatedStudents,
      averageImprovement = _ref$location$locatio.averageImprovement,
      averageInitialScore = _ref$location$locatio.averageInitialScore,
      averageFinalScore = _ref$location$locatio.averageFinalScore,
      _ref$location$locatio2 = _ref$location.locationContactInfo;
  _ref$location$locatio2 = _ref$location$locatio2 === void 0 ? {} : _ref$location$locatio2;
  var locationName = _ref$location$locatio2.locationName,
      locationNickname = _ref$location$locatio2.locationNickname;
  return external_react_default.a.createElement("div", {
    className: "card-main-col col s12 m8 l7 xl5"
  }, external_react_default.a.createElement("div", {
    className: "card-main card-location card card-large"
  }, external_react_default.a.createElement("div", {
    className: "card-panel",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, external_react_default.a.createElement("div", {
    className: "card-panel-row row"
  }, external_react_default.a.createElement("div", {
    className: "col s10"
  }, external_react_default.a.createElement("div", {
    className: "user-block"
  }, external_react_default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, external_react_default.a.createElement("h4", {
    className: "h3"
  }, locationName), external_react_default.a.createElement("span", {
    className: "sub-title"
  }, locationNickname)))), external_react_default.a.createElement("div", {
    className: "col s2 right-align"
  }, external_react_default.a.createElement("div", {
    className: "row icons-row"
  }, external_react_default.a.createElement("div", {
    className: "col right-align"
  }, external_react_default.a.createElement("span", {
    className: "block-icon"
  }, external_react_default.a.createElement("i", {
    className: "icon-location"
  }), external_react_default.a.createElement("span", {
    className: "text-icon"
  }, "Location"))))))), external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row d-flex align-items-center mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s12 m5"
  }, external_react_default.a.createElement("div", {
    className: "chart-container"
  }, external_react_default.a.createElement("div", {
    className: "chart-holder"
  }, external_react_default.a.createElement("span", {
    className: "svg-curved-bar",
    "data-values": "{\"from\": 0, \"to\": 100, \"current\": 71}",
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
      stroke: '#62b771'
    },
    d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
  }))), external_react_default.a.createElement("span", {
    className: "chart-value",
    style: {
      backgroundColor: '#62b771'
    }
  }, external_react_default.a.createElement("span", {
    "data-count-up": true,
    "data-start-val": "0",
    "data-end-val": "91",
    "data-duration": "1"
  }), "%")), external_react_default.a.createElement("div", {
    className: "chart-description",
    style: {
      color: '#31837a'
    }
  }, "Students Who Achieved Target Score"))), external_react_default.a.createElement("div", {
    className: "col s12 m7"
  }, external_react_default.a.createElement("ul", {
    className: "points-list"
  }, external_react_default.a.createElement("li", {
    className: "style-red-darken"
  }, external_react_default.a.createElement("span", {
    className: "badge-circle"
  }, activeStudents), external_react_default.a.createElement("span", {
    className: "point-text"
  }, "active students")), external_react_default.a.createElement("li", {
    className: "style-pink-darken"
  }, external_react_default.a.createElement("span", {
    className: "badge-circle"
  }, pastStudents), external_react_default.a.createElement("span", {
    className: "point-text"
  }, "past students")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", {
    className: "badge-circle"
  }, unactivatedStudents), external_react_default.a.createElement("span", {
    className: "point-text"
  }, "unactivated students")), external_react_default.a.createElement("li", {
    className: "style-blue-light"
  }, external_react_default.a.createElement("span", {
    className: "badge-circle"
  }, "+", averageImprovement), external_react_default.a.createElement("span", {
    className: "point-text"
  }, "average improvement")), external_react_default.a.createElement("li", {
    className: "style-blue"
  }, external_react_default.a.createElement("span", {
    className: "badge-circle"
  }, averageInitialScore), external_react_default.a.createElement("span", {
    className: "point-text"
  }, "average initial score")), external_react_default.a.createElement("li", {
    className: "style-blue-dark"
  }, external_react_default.a.createElement("span", {
    className: "badge-circle"
  }, averageFinalScore), external_react_default.a.createElement("span", {
    className: "point-text"
  }, "average final score"))))))));
};

/* harmony default export */ var components_LocationCard = (LocationCard_LocationCard);
// EXTERNAL MODULE: ./components/Location/components/NewLocationModal/index.js + 2 modules
var NewLocationModal = __webpack_require__("gBDQ");

// EXTERNAL MODULE: ./components/Location/utils/sampleLocationList.js
var sampleLocationList = __webpack_require__("Hl4h");

// CONCATENATED MODULE: ./components/Location/ListPage/index.js








 // import PropTypes from 'prop-types';





var ListPage_LocationListPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LocationListPage, _React$Component);

  function LocationListPage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LocationListPage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LocationListPage).call(this, props));

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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAddNewLocation", function (newLocation) {
      return _this.setState(function (_ref) {
        var locations = _ref.locations;
        return {
          locations: [].concat(Object(toConsumableArray["a" /* default */])(locations), [newLocation])
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapLocations", function () {
      return _this.state.locations.map(function (location) {
        return external_react_default.a.createElement(components_LocationCard, {
          location: location
        });
      });
    });

    _this.state = {
      locationModalOpen: false,
      locations: sampleLocationList["a" /* default */]
    };
    return _this;
  }

  Object(createClass["a" /* default */])(LocationListPage, [{
    key: "render",
    value: function render() {
      var locationModalOpen = this.state.locationModalOpen;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(NewLocationModal["a" /* default */], {
        open: locationModalOpen,
        onClose: this.onCloseLocationModal,
        onAddNewLocation: this.onAddNewLocation
      }), external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-5"
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
        className: "icon-location"
      }), external_react_default.a.createElement("span", {
        className: "heading-block"
      }, "Locations")))), external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "row d-flex-content"
      }, this.mapLocations()))), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onOpenLocationModal,
        className: "waves-effect waves-teal btn add-btn"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Location"));
    }
  }]);

  return LocationListPage;
}(external_react_default.a.Component);

/* harmony default export */ var ListPage = (ListPage_LocationListPage);
// CONCATENATED MODULE: ./pages/all-locations.js






 // eslint-disable-next-line react/prefer-stateless-function

var all_locations_LocationList =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LocationList, _React$Component);

  function LocationList() {
    Object(classCallCheck["a" /* default */])(this, LocationList);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LocationList).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(LocationList, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("main", {
        id: "main",
        role: "main"
      }, external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, external_react_default.a.createElement(ListPage, null)));
    }
  }]);

  return LocationList;
}(external_react_default.a.Component);

/* harmony default export */ var all_locations = __webpack_exports__["default"] = (all_locations_LocationList);

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

/***/ "fSO3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4jX/");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("x4x+");








/* eslint-disable react/jsx-indent */




var LocationBranding =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(LocationBranding, _React$Component);

  function LocationBranding(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LocationBranding);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(LocationBranding).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onSetColorPicker", function (colorPickerField) {
      return _this.setState({
        colorPickerOpen: true,
        colorPickerField: colorPickerField
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onCloseColorPicker", function () {
      return _this.setState({
        colorPickerOpen: false,
        colorPickerField: ''
      });
    });

    _this.state = {
      colorPickerOpen: false,
      colorPickerField: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LocationBranding, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$state = _this$props.state,
          locationUrl = _this$props$state.locationUrl,
          headerColor1 = _this$props$state.headerColor1,
          headerColor2 = _this$props$state.headerColor2,
          headerLogoBackgroundColor = _this$props$state.headerLogoBackgroundColor,
          headerLogoBackgroundAlpha = _this$props$state.headerLogoBackgroundAlpha,
          horizontalLogoVariation = _this$props$state.horizontalLogoVariation,
          squareLogoVariation = _this$props$state.squareLogoVariation,
          backgroundImage = _this$props$state.backgroundImage,
          backgroundBlur = _this$props$state.backgroundBlur,
          backgroundOverlayAlpha = _this$props$state.backgroundOverlayAlpha,
          studentWelcomeVideo = _this$props$state.studentWelcomeVideo,
          instructorWelcomeVideo = _this$props$state.instructorWelcomeVideo,
          handleDetailsChange = _this$props.handleDetailsChange;
      var _this$state = this.state,
          colorPickerField = _this$state.colorPickerField,
          colorPickerOpen = _this$state.colorPickerOpen;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Location Branding"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        id: "location-url",
        name: "locationUrl",
        value: locationUrl,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'locationUrl', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: locationUrl.length ? 'label active' : 'label',
        htmlFor: "location-url"
      }, "Location Url*"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field js-spectrum custom-colorpicker col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        className: "js-spectrum-input",
        id: "header-color-1",
        name: "headerColor1",
        value: headerColor1,
        onClick: function onClick() {
          return _this2.onSetColorPicker('headerColor1');
        },
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'headerColor1', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: headerColor1.length ? 'label active' : 'label',
        htmlFor: "header-color-1"
      }, "Header Color 1*"), colorPickerOpen && colorPickerField === 'headerColor1' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onOuterClick: this.onCloseColorPicker
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_8__["ChromePicker"], {
        color: headerColor1,
        onChange: function onChange(color) {
          return handleDetailsChange(color, 'headerColor1', 'locationBranding');
        }
      })) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field js-spectrum custom-colorpicker col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        className: "js-spectrum-input",
        id: "header-color-2",
        name: "headerColor2",
        value: headerColor2,
        onClick: function onClick() {
          return _this2.onSetColorPicker('headerColor2');
        },
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'headerColor2', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: headerColor2.length ? 'label active' : 'label',
        htmlFor: "header-color-2"
      }, "Header Color 2*"), colorPickerOpen && colorPickerField === 'headerColor2' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onOuterClick: this.onCloseColorPicker
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_8__["ChromePicker"], {
        color: headerColor2,
        onChange: function onChange(color) {
          return handleDetailsChange(color, 'headerColor2', 'locationBranding');
        }
      })) : null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field js-spectrum custom-colorpicker col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        className: "js-spectrum-input",
        id: "header-logo-background-color",
        name: "headerLogoBackgroundColor",
        value: headerLogoBackgroundColor,
        onClick: function onClick() {
          return _this2.onSetColorPicker('headerLogoBackgroundColor');
        },
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'headerLogoBackgroundColor', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: headerLogoBackgroundColor.length ? 'label active' : 'label',
        htmlFor: "header-logo-background-color"
      }, "Header Logo Background Color*"), colorPickerOpen && colorPickerField === 'headerLogoBackgroundColor' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onOuterClick: this.onCloseColorPicker
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_8__["ChromePicker"], {
        color: headerLogoBackgroundColor,
        onChange: function onChange(color) {
          return handleDetailsChange(color, 'headerLogoBackgroundColor', 'locationBranding');
        }
      })) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        id: "header-logo-background-alpha",
        name: "headerLogoBackgroundAlpha",
        value: headerLogoBackgroundAlpha,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'headerLogoBackgroundAlpha', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: headerLogoBackgroundAlpha.length ? 'label active' : 'label',
        htmlFor: "header-logo-background-alpha"
      }, "Header Logo Background Alpha*"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-input-custom file-field input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-path-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "file-path",
        type: "text",
        id: "horizontal-logo-variation",
        name: "horizontalLogoVariation",
        value: horizontalLogoVariation,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'horizontalLogoVariation', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: horizontalLogoVariation.length ? 'label active' : 'label',
        htmlFor: "horizontal-logo-variation"
      }, "Horizontal Logo Variation*")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "btn-upload"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "holder-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-upload-file"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-input-custom file-field input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-path-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "file-path",
        type: "text",
        id: "square-logo-variation",
        name: "squareLogoVariation",
        value: squareLogoVariation,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'squareLogoVariation', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: squareLogoVariation.length ? 'label active' : 'label',
        htmlFor: "square-logo-variation"
      }, "Square Logo Variation*")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "btn-upload"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "holder-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-upload-file"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-input-custom file-field input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-path-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "file-path",
        type: "text",
        id: "background-image",
        name: "backgroundImage",
        value: backgroundImage,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'backgroundImage', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: backgroundImage.length ? 'label active' : 'label',
        htmlFor: "background-image"
      }, "Background Image*")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "btn-upload"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "holder-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-upload-file"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        id: "background-blur",
        name: "backgroundBlur",
        value: backgroundBlur,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'backgroundBlur', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: backgroundBlur.length ? 'label active' : 'label',
        htmlFor: "background-blur"
      }, "Background Blur*"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        id: "background-overlay-alpha",
        name: "backgroundOverlayAlpha",
        value: backgroundOverlayAlpha,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'backgroundOverlayAlpha', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: backgroundOverlayAlpha.length ? 'label active' : 'label',
        htmlFor: "background-overlay-alpha"
      }, "Background Overlay Alpha*")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-input-custom file-field input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-path-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "file-path",
        type: "text",
        id: "student-welcome-video",
        name: "studentWelcomeVideo",
        value: studentWelcomeVideo,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'studentWelcomeVideo', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: studentWelcomeVideo.length ? 'label active' : 'label',
        htmlFor: "student-welcome-video"
      }, "Student Welcome Video (optional)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "btn-upload"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "holder-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-upload-file"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-input-custom file-field input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "file-path-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "file-path",
        type: "text",
        id: "instructor-welcome-video",
        name: "instructorWelcomeVideo",
        value: instructorWelcomeVideo,
        onChange: function onChange(event) {
          return handleDetailsChange(event, 'instructorWelcomeVideo', 'locationBranding');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: instructorWelcomeVideo.length ? 'label active' : 'label',
        htmlFor: "instructor-welcome-video"
      }, "Instructor Welcome Video (optional)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "btn-upload"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "holder-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-upload-file"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "file"
      }))))))));
    }
  }]);

  return LocationBranding;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LocationBranding);

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gBDQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

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

// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// EXTERNAL MODULE: ./components/utils/genderOptions.js
var genderOptions = __webpack_require__("QvYC");

// CONCATENATED MODULE: ./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js






var OwnerContactInfo_OwnerContactInfo = function OwnerContactInfo(_ref) {
  var _ref$state = _ref.state,
      firstName = _ref$state.firstName,
      lastName = _ref$state.lastName,
      email = _ref$state.email,
      gender = _ref$state.gender,
      phone = _ref$state.phone,
      streetAddress = _ref$state.streetAddress,
      city = _ref$state.city,
      state = _ref$state.state,
      zip = _ref$state.zip,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "col s12 l6"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Owner Contact Info"), external_react_default.a.createElement("div", {
    className: "card-main card"
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
      return handleDetailsChange(event, 'firstName', 'ownerContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: "label",
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
      return handleDetailsChange(event, 'lastName', 'ownerContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: "label",
    htmlFor: "last-name"
  }, "Last Name*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "email",
    name: "email",
    value: email,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'email', 'ownerContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: "label",
    htmlFor: "email"
  }, "Email Address*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 l7"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(gender, genderOptions["a" /* default */]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'gender', 'ownerContactInfo');
    },
    options: genderOptions["a" /* default */],
    label: "Gender*",
    stateKey: "gender",
    dropdownKey: "gender"
  }))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "phone",
    name: "phone",
    value: phone,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'phone', 'ownerContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: "label",
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
      return handleDetailsChange(event, 'streetAddress', 'ownerContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: "label",
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
      return handleDetailsChange(event, 'city', 'ownerContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: "label",
    htmlFor: "city"
  }, "City (optional)"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s12 m6 l5"
  }, external_react_default.a.createElement("div", {
    className: "input-field"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(state, stateOptions["a" /* default */]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'state', 'ownerContactInfo');
    },
    options: stateOptions["a" /* default */],
    label: "State (optional)",
    stateKey: "state",
    dropdownKey: "state"
  }))), external_react_default.a.createElement("div", {
    className: "col s12 m6 l7"
  }, external_react_default.a.createElement("div", {
    className: "input-field"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "zip",
    name: "zip",
    value: zip,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'zip', 'ownerContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: "label",
    htmlFor: "zip"
  }, "Zip (optional)"))))))));
};

/* harmony default export */ var components_OwnerContactInfo = (OwnerContactInfo_OwnerContactInfo);
// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationContactInfo/index.js
var LocationContactInfo = __webpack_require__("z6T/");

// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js
var LocationEmailSettings = __webpack_require__("QLkJ");

// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationBranding/index.js
var LocationBranding = __webpack_require__("fSO3");

// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Location/utils/initialState.js
var initialState = {
  owner: null,
  locationContactInfo: {
    locationName: '',
    locationNickname: '',
    locationEmail: '',
    locationPhoneNumber: '',
    website: '',
    locationStreetAddress: '',
    locationCity: '',
    locationState: '',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  }
};
/* harmony default export */ var utils_initialState = (initialState);
// CONCATENATED MODULE: ./components/Location/components/NewLocationModal/index.js











/* eslint-disable no-unused-vars */











var NewLocationModal_NewLocationModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NewLocationModal, _React$Component);

  function NewLocationModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NewLocationModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NewLocationModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetValidation", function (validation, cb) {
      return _this.setState({
        validation: validation
      }, cb);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(event) {
        var _this$state, owner, locationContactInfo, locationEmailSettings, locationBranding, _this$props, onSaveNewLocation, onSaveLocationError, onAddNewLocation, _this$props$fromInstr, fromInstructorPage, valid, postBody;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, owner = _this$state.owner, locationContactInfo = _this$state.locationContactInfo, locationEmailSettings = _this$state.locationEmailSettings, locationBranding = _this$state.locationBranding;
                _this$props = _this.props, onSaveNewLocation = _this$props.onSaveNewLocation, onSaveLocationError = _this$props.onSaveLocationError, onAddNewLocation = _this$props.onAddNewLocation, _this$props$fromInstr = _this$props.fromInstructorPage, fromInstructorPage = _this$props$fromInstr === void 0 ? false : _this$props$fromInstr; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
                // const valid = true;

                _context.next = 5;
                return Object(fieldValidation["a" /* nestedCreateFieldValidation */])(_this.state, _this.onSetValidation, function (validation) {
                  return console.warn('validation', validation);
                });

              case 5:
                valid = _context.sent;

                if (!valid) {
                  // return onSaveLocationError();
                  console.warn('not valid');
                }

                postBody = {
                  locationContactInfo: locationContactInfo,
                  locationEmailSettings: locationEmailSettings,
                  locationBranding: locationBranding,
                  owner: owner
                };

                if (fromInstructorPage) {
                  onSaveNewLocation(postBody);
                } else {
                  onAddNewLocation(postBody);
                }

                console.warn('stubbed out save function');

                _this.onCloseModal();

              case 11:
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onResetLocation", function () {
      return _this.setState(utils_initialState);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetLocation();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDetailsChange", function (event, name, section) {
      var value;

      if (event.hex) {
        value = event.hex;
      } else {
        value = event.target ? event.target.value : event;
      }

      var updatedState = external_immutability_helper_default()(_this.state, Object(defineProperty["a" /* default */])({}, section, {
        $merge: Object(defineProperty["a" /* default */])({}, name, value)
      }));

      _this.setState(updatedState);
    });

    _this.state = {
      ownerContactInfo: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
      },
      locationEmailSettings: {
        automatedEmailOriginAddress: '',
        automatedEmailSalutation: ''
      },
      locationContactInfo: {
        locationName: '',
        locationNickname: '',
        locationEmail: '',
        locationPhoneNumber: '',
        website: '',
        locationStreetAddress: '',
        locationCity: '',
        locationState: '',
        locationZip: ''
      },
      locationBranding: {
        locationUrl: '',
        headerColor1: '',
        headerColor2: '',
        headerLogoBackgroundColor: '',
        headerLogoBackgroundAlpha: '',
        horizontalLogoVariation: '',
        squareLogoVariation: '',
        backgroundImage: '',
        backgroundBlur: '',
        backgroundOverlayAlpha: '',
        studentWelcomeVideo: '',
        instructorWelcomeVideo: ''
      },
      validation: {
        ownerContactInfo: {
          firstName: true,
          lastName: true,
          email: true,
          gender: true
        },
        locationEmailSettings: {
          automatedEmailOriginAddress: true,
          automatedEmailSalutation: true
        },
        locationContactInfo: {
          locationName: true,
          locationNickname: true,
          locationEmail: true
        },
        locationBranding: {
          locationUrl: true,
          headerColor1: true,
          headerColor2: true,
          headerLogoBackgroundColor: true,
          headerLogoBackgroundAlpha: true,
          horizontalLogoVariation: true,
          squareLogoVariation: true,
          backgroundImage: true,
          backgroundBlur: true,
          backgroundOverlayAlpha: true
        }
      }
    };
    return _this;
  } // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level


  Object(createClass["a" /* default */])(NewLocationModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var _this$state2 = this.state,
          ownerContactInfo = _this$state2.ownerContactInfo,
          locationEmailSettings = _this$state2.locationEmailSettings,
          locationContactInfo = _this$state2.locationContactInfo,
          locationBranding = _this$state2.locationBranding;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_user_create",
        className: "jsx-2979935167" + " " + "modal modal-custom modal-custom-large modal-gray"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "card-modal card-main card grey lighten-3"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#31837a',
          color: '#fff'
        },
        className: "jsx-2979935167" + " " + "card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        style: {
          display: 'block'
        },
        className: "jsx-2979935167" + " " + "col"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-2979935167" + " " + "h2"
      }, external_react_default.a.createElement("span", {
        className: "jsx-2979935167" + " " + "heading-holder"
      }, external_react_default.a.createElement("span", {
        className: "jsx-2979935167" + " " + "heading-block"
      }, "Create New Owner")))), external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "col"
      }, external_react_default.a.createElement("span", {
        className: "jsx-2979935167" + " " + "block-icon"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2979935167" + " " + "icon-owner"
      }), external_react_default.a.createElement("span", {
        className: "jsx-2979935167" + " " + "text-icon"
      }, "Owner"))))), external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "card-body"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "row mb-0"
      }, external_react_default.a.createElement(components_OwnerContactInfo, {
        state: ownerContactInfo,
        handleDetailsChange: this.handleDetailsChange
      }), external_react_default.a.createElement(LocationContactInfo["a" /* default */], {
        state: locationContactInfo,
        handleDetailsChange: this.handleDetailsChange
      })), external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "row mb-0"
      }, external_react_default.a.createElement(LocationEmailSettings["a" /* default */], {
        state: locationEmailSettings,
        handleDetailsChange: this.handleDetailsChange
      }), external_react_default.a.createElement(LocationBranding["a" /* default */], {
        state: locationBranding,
        handleDetailsChange: this.handleDetailsChange
      }))), external_react_default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "modal-footer"
      }, external_react_default.a.createElement("a", {
        href: "#!",
        onClick: this.onCloseModal,
        className: "jsx-2979935167" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onSubmit,
        className: "jsx-2979935167" + " " + "btn"
      }, "Save"))))))), external_react_default.a.createElement(style_default.a, {
        id: "2979935167"
      }, [".overlay.jsx-2979935167{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-2979935167{margin:0;border-radius:6px;}", ".modal.jsx-2979935167{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-2979935167{opacity:1;visibility:visible;}", ".modal-footer.jsx-2979935167{background-color:white;}"]));
    }
  }]);

  return NewLocationModal;
}(external_react_default.a.Component);

/* harmony default export */ var components_NewLocationModal = __webpack_exports__["a"] = (NewLocationModal_NewLocationModal);

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

/***/ "z6T/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EABn");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/NWr");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rKn1");





var LocationContactInfo = function LocationContactInfo(_ref) {
  var _ref$state = _ref.state,
      locationName = _ref$state.locationName,
      locationNickname = _ref$state.locationNickname,
      locationEmail = _ref$state.locationEmail,
      locationPhoneNumber = _ref$state.locationPhoneNumber,
      website = _ref$state.website,
      locationStreetAddress = _ref$state.locationStreetAddress,
      locationCity = _ref$state.locationCity,
      locationState = _ref$state.locationState,
      locationZip = _ref$state.locationZip,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Location Contact Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "location-name",
    name: "locationName",
    value: locationName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationName', 'locationContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: locationName.length ? 'label active' : 'label',
    htmlFor: "location-name"
  }, "Location Name*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "location-nickname",
    name: "locationNickname",
    value: locationNickname,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationNickname', 'locationContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: locationNickname.length ? 'label active' : 'label',
    htmlFor: "location-nickname"
  }, "Location Nickname*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "location-email",
    name: "locationEmail",
    value: locationEmail,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationEmail', 'locationContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: locationEmail.length ? 'label active' : 'label',
    htmlFor: "location-email"
  }, "Location Email*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "tel",
    id: "location-phone-number",
    name: "locationPhoneNumber",
    value: locationPhoneNumber,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationPhoneNumber', 'locationContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: locationPhoneNumber.length ? 'label active' : 'label',
    htmlFor: "location-phone-number"
  }, "Location Phone Number (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "url",
    id: "website",
    name: "website",
    value: website,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'website', 'locationContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: website.length ? 'label active' : 'label',
    htmlFor: "website"
  }, "Website (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "location-street-address",
    name: "locationStreetAddress",
    value: locationStreetAddress,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationStreetAddress', 'locationContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: locationStreetAddress.length ? 'label active' : 'label',
    htmlFor: "location-street-address"
  }, "Street Address (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "location-city",
    name: "locationCity",
    value: locationCity,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationCity', 'locationContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: locationCity.length ? 'label active' : 'label',
    htmlFor: "city"
  }, "City (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m6 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(locationState, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationState', 'locationContactInfo');
    },
    options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    label: "State (optional)",
    stateKey: "locationState",
    dropdownKey: "locationState"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m6 l7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "tel",
    id: "location-zip",
    name: "locationZip",
    value: locationZip,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationZip', 'locationContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: locationZip.length ? 'label active' : 'label',
    htmlFor: "location-zip"
  }, "Zip (optional)"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (LocationContactInfo);

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