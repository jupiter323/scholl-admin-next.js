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

/***/ "./components/ClickOffComponentWrapper/index.js":
/*!******************************************************!*\
  !*** ./components/ClickOffComponentWrapper/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClickOffComponentWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var ClickOffComponentWrapper =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ClickOffComponentWrapper, _Component);

  function ClickOffComponentWrapper(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClickOffComponentWrapper);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ClickOffComponentWrapper).call(this, props));
    _this.setWrapperRef = _this.setWrapperRef.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClickOffComponentWrapper, [{
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


ClickOffComponentWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  onOuterClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  nestedModals: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

/***/ }),

/***/ "./components/FormComponents/Dropdown/index.js":
/*!*****************************************************!*\
  !*** ./components/FormComponents/Dropdown/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ControlComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ControlComponent */ "./components/FormComponents/Dropdown/styles/ControlComponent.js");
/* harmony import */ var _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/dropdownStyles */ "./components/FormComponents/Dropdown/styles/dropdownStyles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/FormComponents/Dropdown/styles/index.js");







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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className,
    valid: valid || !valid && value === {},
    padRight: padRight
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: options,
    onChange: function onChange(event) {
      return _onChange(event.value, dropdownKey, stateKey);
    },
    components: {
      Control: _styles_ControlComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    name: "categoryOptions",
    classNamePrefix: dropdownKey === 'difficulty' ? 'expanded-select' : 'select',
    placeholder: label,
    styles: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_4__["DropdownStyles"],
    isClearable: false,
    isSearchable: false,
    value: value,
    instanceId: "dropdown-select"
  }));
};

Dropdown.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  padRight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  stateKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  dropdownKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./components/FormComponents/Dropdown/styles/ControlComponent.js":
/*!***********************************************************************!*\
  !*** ./components/FormComponents/Dropdown/styles/ControlComponent.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./components/FormComponents/Dropdown/styles/index.js");
/* harmony import */ var _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/dropdownStyles */ "./components/FormComponents/Dropdown/styles/dropdownStyles.js");






var ControlComponent = function ControlComponent(props) {
  var _props$selectProps = props.selectProps,
      placeholder = _props$selectProps.placeholder,
      label = _props$selectProps.label,
      className = _props$selectProps.className;
  var categoryCheck = label === 'Categories';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["ControlWrapper"], {
    invalid: className,
    categoryCheck: categoryCheck
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_4__["DropdownStyles"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, categoryCheck ? 'Categories' : placeholder), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["components"].Control, props)));
};

ControlComponent.propTypes = {
  selectProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ControlComponent);

/***/ }),

/***/ "./components/FormComponents/Dropdown/styles/dropdownStyles.js":
/*!*********************************************************************!*\
  !*** ./components/FormComponents/Dropdown/styles/dropdownStyles.js ***!
  \*********************************************************************/
/*! exports provided: default, DropdownStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStyles", function() { return DropdownStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

// Keeping unused styling for now so I know what element they target
/* harmony default export */ __webpack_exports__["default"] = ({
  multiValueLabel: function multiValueLabel(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
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
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles);
  },
  dropdownIndicator: function dropdownIndicator(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
      display: 'none'
    });
  },
  multiValue: function multiValue(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
      background: 'none'
    });
  },
  valueContainer: function valueContainer(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles);
  },
  input: function input(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
      paddingTop: '9px'
    });
  },
  groupHeading: function groupHeading(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles);
  },
  control: function control(styles, _ref) {
    var isFocused = _ref.isFocused;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
      boxShadow: 'none',
      borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important'
    });
  }
});
var DropdownStyles = {
  container: function container(base, state) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
      opacity: state.isDisabled ? ".5" : "1",
      backgroundColor: "transparent",
      zIndex: "999"
    });
  },
  option: function option(styles, _ref2) {
    var isFocused = _ref2.isFocused;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
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
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
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

/***/ "./components/FormComponents/Dropdown/styles/index.js":
/*!************************************************************!*\
  !*** ./components/FormComponents/Dropdown/styles/index.js ***!
  \************************************************************/
/*! exports provided: ControlWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlWrapper", function() { return ControlWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
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
/* harmony default export */ __webpack_exports__["default"] = (DropdownWrapper);

/***/ }),

/***/ "./components/Instructor/ListPage/components/FilterSection/index.js":
/*!**************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/FilterSection/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_locationOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utils/locationOptions */ "./components/utils/locationOptions.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utils/sortOptions */ "./components/utils/sortOptions.js");















var FilterSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FilterSection, _React$Component);

  function FilterSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FilterSection).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilterChange", function (event, name) {
      var _this$props = _this.props,
          onSetFilteredLocationState = _this$props.onSetFilteredLocationState,
          onUnsetFilteredLocationState = _this$props.onUnsetFilteredLocationState,
          onSetSort = _this$props.onSetSort;
      var value = event.target ? event.target.value : event;
      var updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(_this.state, {
        $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value)
      });

      _this.setState(updatedState);

      if (name === 'location') {
        if (event === '') {
          return onUnsetFilteredLocationState();
        }

        return onSetFilteredLocationState(event);
      } else if (name === 'sort') {
        return onSetSort(event);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitNameFilter", function () {
      var _this$props2 = _this.props,
          onSetFilteredState = _this$props2.onSetFilteredState,
          onUnsetFilteredState = _this$props2.onUnsetFilteredState;
      var name = _this.state.name;

      if (name === '') {
        onUnsetFilteredState();
      }

      var transformedName = name.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    _this.state = {
      name: '',
      location: {},
      sort: {}
    };
    return _this;
  } // This function does two things - first, it changes the filter state regardless of the field it's coming from
  // If either location or sort filters are changed, we dispatch the appropriate action in ListPage to ensure the rendered instructors are filtered/sorted appropriately
  // eslint-disable-next-line consistent-return


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // eslint-disable-next-line no-unused-vars
      var _this$state = this.state,
          name = _this$state.name,
          location = _this$state.location,
          sort = _this$state.sort;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-inputs-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m4 l3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        id: "name_search",
        className: "input-control validate",
        name: "name",
        value: name,
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'name');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "search-button",
        onClick: this.submitNameFilter
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: name.length ? 'label active' : 'label',
        htmlFor: "name_search"
      }, "Search"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m4 l3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__["default"])(location, _utils_locationOptions__WEBPACK_IMPORTED_MODULE_12__["default"]),
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'location');
        },
        options: _utils_locationOptions__WEBPACK_IMPORTED_MODULE_12__["default"],
        label: "Location",
        stateKey: "location",
        dropdownKey: "location"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m4 l3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__["default"])(sort, _utils_sortOptions__WEBPACK_IMPORTED_MODULE_13__["default"]),
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'sort');
        },
        options: _utils_sortOptions__WEBPACK_IMPORTED_MODULE_13__["default"],
        label: "Sort",
        stateKey: "sort",
        dropdownKey: "sort"
      })))));
    }
  }]);

  return FilterSection;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

FilterSection.propTypes = {
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetFilteredLocationState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onUnsetFilteredLocationState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Instructor/ListPage/components/InstructorCard/index.js":
/*!***************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/InstructorCard/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _InstructorDetailsModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InstructorDetailsModal */ "./components/Instructor/ListPage/components/InstructorDetailsModal/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Modal */ "./components/Modal/index.js");












var InstructorCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InstructorCard, _React$Component);

  function InstructorCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InstructorCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InstructorCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenInstructorDetailsModal", function () {
      _this.props.onCloseDropdown();

      _this.setState({
        instructorDetailsModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseInstructorDetailsModal", function () {
      return _this.setState({
        instructorDetailsModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloneInstructor", function () {
      return _this.props.onCloneInstructor(_this.props.instructor);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenDeleteModal", function () {
      return _this.setState({
        deleteModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseDeleteModal", function () {
      return _this.setState({
        deleteModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onConfirmDeleteInstructor", function () {
      var _this$props = _this.props,
          onDeleteInstructor = _this$props.onDeleteInstructor,
          instructor = _this$props.instructor,
          onCloseDropdown = _this$props.onCloseDropdown;
      onDeleteInstructor(instructor);
      onCloseDropdown();

      _this.onCloseDeleteModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDropdownClick", function (event) {
      var _this$props2 = _this.props,
          onSetDropdown = _this$props2.onSetDropdown,
          onCloseDropdown = _this$props2.onCloseDropdown,
          dropdownIsOpen = _this$props2.dropdownIsOpen,
          index = _this$props2.index;
      event.preventDefault();

      if (dropdownIsOpen) {
        return onCloseDropdown();
      }

      return onSetDropdown(index);
    });

    _this.state = {
      instructorDetailsModalOpen: false,
      deleteModalOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InstructorCard, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          deleteModalOpen = _this$state.deleteModalOpen,
          instructorDetailsModalOpen = _this$state.instructorDetailsModalOpen;
      var _this$props3 = this.props,
          dropdownIsOpen = _this$props3.dropdownIsOpen,
          dropdownIndex = _this$props3.dropdownIndex,
          index = _this$props3.index,
          instructor = _this$props3.instructor,
          onSaveInstructorChanges = _this$props3.onSaveInstructorChanges;
      var _instructor$accountIn = instructor.accountInfo;
      _instructor$accountIn = _instructor$accountIn === void 0 ? {} : _instructor$accountIn;
      var lastName = _instructor$accountIn.lastName,
          firstName = _instructor$accountIn.firstName,
          email = _instructor$accountIn.email,
          _instructor$basicInfo = instructor.basicInfo;
      _instructor$basicInfo = _instructor$basicInfo === void 0 ? {} : _instructor$basicInfo;
      var activeStudents = _instructor$basicInfo.activeStudents,
          pastStudents = _instructor$basicInfo.pastStudents,
          unactivatedStudents = _instructor$basicInfo.unactivatedStudents,
          averageImprovement = _instructor$basicInfo.averageImprovement,
          averageInitialScore = _instructor$basicInfo.averageInitialScore,
          averageFinalScore = _instructor$basicInfo.averageFinalScore;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_InstructorDetailsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        instructor: instructor,
        open: instructorDetailsModalOpen,
        onClose: this.onCloseInstructorDetailsModal,
        onSaveInstructorChanges: onSaveInstructorChanges,
        onOpenDeleteModal: this.onOpenDeleteModal,
        deleteModalOpen: deleteModalOpen
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: deleteModalOpen,
        onConfirm: this.onConfirmDeleteInstructor,
        onClose: this.onCloseDeleteModal,
        header: "Are You Sure?",
        body: "Deleting this instructor will be permanent"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main card-location card card-large"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "owner-box card-panel",
        style: {
          backgroundColor: '#31837a',
          color: '#fff'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "user-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "user-circle",
        style: {
          backgroundColor: '#18b5e9',
          color: '#fff'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "initials"
      }, "NT")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "user-text",
        style: {
          color: '#fff'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "h3"
      }, lastName, ", ", firstName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "mailto:".concat(email)
      }, email)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s3 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-user"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-icon"
      }, "Instructor"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.handleDropdownClick,
        className: "dropdown-trigger btn",
        "data-target": "dropdown05"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown05",
        className: "dropdown-content dropdown-wide",
        style: {
          display: 'block',
          width: '103.991px',
          left: '116.974px',
          top: '7.99716px',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.onOpenInstructorDetailsModal,
        className: "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloneInstructor
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!"
      }, "Impersonate")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.onOpenDeleteModal
      }, "Delete"))) : null))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex align-items-center mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "svg-curved-bar",
        "data-values": "{\"from\": 0, \"to\": 100, \"current\": 71}",
        "data-duration": "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        width: "110px",
        height: "110px",
        viewBox: " 0 0 110 110"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        fill: "none",
        style: {
          strokeWidth: '22',
          stroke: '#eaeaea'
        },
        d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        "data-dinamic": true,
        fill: "none",
        style: {
          strokeWidth: '22',
          stroke: '#31837a'
        },
        d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "chart-value",
        style: {
          backgroundColor: '#31837a'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        "data-count-up": true,
        "data-start-val": "0",
        "data-end-val": "71",
        "data-duration": "1"
      }), "%")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-description",
        style: {
          color: '#31837a'
        }
      }, "Students Who Achieved Target Score"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m7"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "points-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-red-darken"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, activeStudents), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "active students")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-pink-darken"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, pastStudents), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "past students")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, unactivatedStudents), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "unactivated students")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-blue-light"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, "+", averageImprovement), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "average improvement")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-blue"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, averageInitialScore), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "average initial score")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-blue-dark"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, averageFinalScore), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "average final score"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-footer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "meta-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "truncate"
      }, "First Location,  Second Location, Possible Additional Truncated More Locatioa...")))))));
    }
  }]);

  return InstructorCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

InstructorCard.propTypes = {
  instructor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  onSaveInstructorChanges: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onDeleteInstructor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onCloneInstructor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (InstructorCard);

/***/ }),

/***/ "./components/Instructor/ListPage/components/InstructorDetailsModal/index.js":
/*!***********************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/InstructorDetailsModal/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../SharedModalComponents/AccountInfo */ "./components/Instructor/ListPage/components/SharedModalComponents/AccountInfo/index.js");
/* harmony import */ var _SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../SharedModalComponents/ContactInfo */ "./components/Instructor/ListPage/components/SharedModalComponents/ContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../SharedModalComponents/Locations */ "./components/Instructor/ListPage/components/SharedModalComponents/Locations/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");











/* eslint-disable no-unused-vars */










var InstructorDetailsModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(InstructorDetailsModal, _React$Component);

  function InstructorDetailsModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, InstructorDetailsModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(InstructorDetailsModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentWillReceiveProps", function (nextProps) {
      if (!_this.state.originalInstructor || nextProps.instructor.id !== _this.state.originalInstructor.id) {
        var _nextProps$instructor = nextProps.instructor;
        _nextProps$instructor = _nextProps$instructor === void 0 ? {} : _nextProps$instructor;
        var id = _nextProps$instructor.id,
            basicInfo = _nextProps$instructor.basicInfo,
            accountInfo = _nextProps$instructor.accountInfo,
            contactInfo = _nextProps$instructor.contactInfo,
            locations = _nextProps$instructor.locations;
        var updatedInstructor = {
          id: id,
          basicInfo: basicInfo,
          accountInfo: accountInfo,
          contactInfo: contactInfo,
          locations: locations
        };
        var originalInstructorState = _this.state.originalInstructor;
        var originalInstructor = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(originalInstructorState, {
          $merge: nextProps.instructor
        });

        _this.setState({
          originalInstructor: originalInstructor,
          updatedInstructor: updatedInstructor
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetDropdown", function (dropdownIndex) {
      return _this.setState({
        dropdownIndex: dropdownIndex,
        dropdownIsOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenDeleteLocationModal", function (pendingLocationDelete) {
      return _this.setState({
        deleteLocationModalOpen: true,
        pendingLocationDelete: pendingLocationDelete
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseDeleteLocationModal", function () {
      return _this.setState({
        deleteLocationModalOpen: false,
        pendingLocationDelete: {}
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenNewLocationModal", function () {
      return _this.setState({
        newLocationModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseNewLocationModal", function () {
      return _this.setState({
        newLocationModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenEditLocationModal", function (activeLocation) {
      return _this.setState({
        editLocationModalOpen: true,
        activeLocation: activeLocation
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseEditLocationModal", function () {
      return _this.setState({
        editLocationModalOpen: false,
        dropdownIsOpen: false,
        activeLocation: {}
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCancelChanges", function () {
      var onClose = _this.props.onClose;
      var _this$state = _this.state,
          updatedInstructor = _this$state.updatedInstructor,
          originalInstructor = _this$state.originalInstructor;

      _this.setState({
        updatedInstructor: originalInstructor
      }, onClose());
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetValidation", function (validation, cb) {
      return _this.setState({
        validation: validation
      }, cb);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var _this$state$updatedIn, id, basicInfo, accountInfo, contactInfo, locations, _this$props, onSaveLocationError, onSaveInstructorChanges, onClose, valid, postBody;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state$updatedIn = _this.state.updatedInstructor, id = _this$state$updatedIn.id, basicInfo = _this$state$updatedIn.basicInfo, accountInfo = _this$state$updatedIn.accountInfo, contactInfo = _this$state$updatedIn.contactInfo, locations = _this$state$updatedIn.locations;
                _this$props = _this.props, onSaveLocationError = _this$props.onSaveLocationError, onSaveInstructorChanges = _this$props.onSaveInstructorChanges, onClose = _this$props.onClose; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
                // const valid = true;

                _context.next = 5;
                return Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_18__["nestedEditFieldValidation"])(_this.state, _this.state.updatedInstructor, _this.onSetValidation, function (validation) {
                  return console.warn('validation', validation);
                });

              case 5:
                valid = _context.sent;

                if (!valid) {
                  // return onSaveLocationError();
                  console.warn('not valid');
                }

                postBody = {
                  id: id,
                  basicInfo: basicInfo,
                  accountInfo: accountInfo,
                  contactInfo: contactInfo,
                  locations: locations
                };
                onSaveInstructorChanges(postBody);
                console.warn('stubbed out save function');
                onClose();

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "initialInstructorMount", function () {
      return _this.state.originalInstructor.id !== _this.props.instructor.id;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDetailsChange", function (event, name, section) {
      var previousInstructorState = _this.state.updatedInstructor;
      var value = event.target ? event.target.value : event;
      var updatedInstructor = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(previousInstructorState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, section, {
        $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value)
      }));

      _this.setState({
        updatedInstructor: updatedInstructor
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderModalHeader", function () {
      var _this$props$instructo = _this.props.instructor.accountInfo,
          initialLastName = _this$props$instructo.lastName,
          initialFIrstName = _this$props$instructo.firstName,
          initialEmail = _this$props$instructo.email;
      var _this$state$updatedIn2 = _this.state.updatedInstructor.accountInfo,
          updatedLastName = _this$state$updatedIn2.lastName,
          updatedFirstName = _this$state$updatedIn2.firstName,
          updatedEmail = _this$state$updatedIn2.email;
      var lastName;
      var firstName;
      var email;

      if (_this.initialInstructorMount()) {
        lastName = initialLastName;
        firstName = initialFIrstName;
        email = initialEmail;
      } else {
        lastName = updatedLastName;
        firstName = updatedFirstName;
        email = updatedEmail;
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: "h3"
      }, lastName, ", ", firstName), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "mailto:".concat(email)
      }, email));
    });

    _this.state = {
      deleteLocationModalOpen: false,
      newLocationModalOpen: false,
      editLocationModalOpen: false,
      pendingLocationDelete: {},
      activeLocation: {},
      dropdownIsOpen: false,
      dropdownIndex: null,
      originalInstructor: {
        accountInfo: {
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
        locations: []
      },
      updatedInstructor: {
        accountInfo: {
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
        locations: []
      },
      validation: {
        accountInfo: {
          firstName: true,
          lastName: true,
          email: true,
          gender: true
        }
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(InstructorDetailsModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$instructo2 = this.props.instructor;
      _this$props$instructo2 = _this$props$instructo2 === void 0 ? {} : _this$props$instructo2;
      var id = _this$props$instructo2.id,
          basicInfo = _this$props$instructo2.basicInfo,
          accountInfo = _this$props$instructo2.accountInfo,
          contactInfo = _this$props$instructo2.contactInfo,
          locations = _this$props$instructo2.locations;
      var updatedInstructor = {
        id: id,
        basicInfo: basicInfo,
        accountInfo: accountInfo,
        contactInfo: contactInfo,
        locations: locations
      };
      var originalInstructorState = this.state.originalInstructor;
      var originalInstructor = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(originalInstructorState, {
        $merge: updatedInstructor
      });
      this.setState({
        originalInstructor: originalInstructor,
        updatedInstructor: updatedInstructor
      }); // eslint-disable-line
    } // This resets the component state to reflect the details of the next instructor the user clicks on

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          open = _this$props2.open,
          _this$props2$instruct = _this$props2.instructor,
          accountInfo = _this$props2$instruct.accountInfo,
          contactInfo = _this$props2$instruct.contactInfo,
          locations = _this$props2$instruct.locations,
          onOpenDeleteModal = _this$props2.onOpenDeleteModal,
          deleteModalOpen = _this$props2.deleteModalOpen;
      var _this$state2 = this.state,
          dropdownIsOpen = _this$state2.dropdownIsOpen,
          dropdownIndex = _this$state2.dropdownIndex,
          activeLocation = _this$state2.activeLocation,
          deleteLocationModalOpen = _this$state2.deleteLocationModalOpen,
          pendingLocationDelete = _this$state2.pendingLocationDelete,
          newLocationModalOpen = _this$state2.newLocationModalOpen,
          editLocationModalOpen = _this$state2.editLocationModalOpen,
          _this$state2$updatedI = _this$state2.updatedInstructor,
          updatedAccountInfo = _this$state2$updatedI.accountInfo,
          updatedContactInfo = _this$state2$updatedI.contactInfo,
          updatedLocations = _this$state2$updatedI.locations;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onOuterClick: this.onCancelChanges,
        nestedModals: deleteModalOpen || deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "modal_user_edit",
        className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          backgroundColor: '#31837a',
          color: '#fff'
        },
        className: "jsx-2557376288" + " " + "owner-box card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "user-block"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          backgroundColor: '#0085ce',
          color: '#fff'
        },
        className: "jsx-2557376288" + " " + "user-circle"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "images/img-owner01.jpg",
        alt: "",
        className: "jsx-2557376288"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          color: '#fff'
        },
        className: "jsx-2557376288" + " " + "user-text"
      }, this.renderModalHeader()))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          textAlign: 'right'
        },
        className: "jsx-2557376288" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2557376288" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-2557376288" + " " + "icon-owner"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2557376288" + " " + "text-icon"
      }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_15__["default"], {
        state: this.initialInstructorMount() ? accountInfo : updatedAccountInfo,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_16__["default"], {
        state: this.initialInstructorMount() ? contactInfo : updatedContactInfo,
        handleDetailsChange: this.handleDetailsChange
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_17__["default"], {
        state: this.initialInstructorMount() ? locations : updatedLocations,
        handleDetailsChange: this.handleDetailsChange,
        dropdownIsOpen: dropdownIsOpen,
        dropdownIndex: dropdownIndex,
        activeLocation: activeLocation,
        deleteLocationModalOpen: deleteLocationModalOpen,
        pendingLocationDelete: pendingLocationDelete,
        newLocationModalOpen: newLocationModalOpen,
        editLocationModalOpen: editLocationModalOpen,
        onSetDropdown: this.onSetDropdown,
        onCloseDropdown: this.onCloseDropdown,
        onOpenNewLocationModal: this.onOpenNewLocationModal,
        onOpenEditLocationModal: this.onOpenEditLocationModal,
        onCloseNewLocationModal: this.onCloseNewLocationModal,
        onCloseEditLocationModal: this.onCloseEditLocationModal,
        onOpenDeleteLocationModal: this.onOpenDeleteLocationModal,
        onCloseDeleteLocationModal: this.onCloseDeleteLocationModal
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: onOpenDeleteModal,
        className: "jsx-2557376288" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Delete"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.onCancelChanges,
        className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.onSubmit,
        className: "jsx-2557376288" + " " + "btn"
      }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2557376288"
      }, ".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-2557376288{margin:0;border-radius:6px;}.modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2557376288{opacity:1;visibility:visible;}.modal-footer.jsx-2557376288{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0luc3RydWN0b3IvTGlzdFBhZ2UvY29tcG9uZW50cy9JbnN0cnVjdG9yRGV0YWlsc01vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJRVyxBQUdnQyxBQVNOLEFBSUssQUFTSixBQUlhLFNBaEJMLENBYUMsSUFUSSxDQWJhLFFBMEJ0QyxJQWhCQSxFQWFBLFFBVG9CLFdBYlosTUFDRSxDQWFBLE9BWkMsQ0FhQyxRQVpILEVBYUUsS0FaSSxJQWEyRyxTQVoxSCxvR0FhQSIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9JbnN0cnVjdG9yL0xpc3RQYWdlL2NvbXBvbmVudHMvSW5zdHJ1Y3RvckRldGFpbHNNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnaW1tdXRhYmlsaXR5LWhlbHBlcic7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IEFjY291bnRJbmZvIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9BY2NvdW50SW5mbyc7XG5pbXBvcnQgQ29udGFjdEluZm8gZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0NvbnRhY3RJbmZvJztcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9ucyc7XG5cbmltcG9ydCB7IG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuXG5jbGFzcyBJbnN0cnVjdG9yRGV0YWlsc01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIG5ld0xvY2F0aW9uTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIGVkaXRMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsXG4gICAgICBwZW5kaW5nTG9jYXRpb25EZWxldGU6IHt9LFxuICAgICAgYWN0aXZlTG9jYXRpb246IHt9LFxuICAgICAgZHJvcGRvd25Jc09wZW46IGZhbHNlLFxuICAgICAgZHJvcGRvd25JbmRleDogbnVsbCxcbiAgICAgIG9yaWdpbmFsSW5zdHJ1Y3Rvcjoge1xuICAgICAgICBhY2NvdW50SW5mbzoge1xuICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0SW5mbzoge1xuICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICBzdHJlZXRBZGRyZXNzOiAnJyxcbiAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgemlwOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGVkSW5zdHJ1Y3Rvcjoge1xuICAgICAgICBhY2NvdW50SW5mbzoge1xuICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0SW5mbzoge1xuICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICBzdHJlZXRBZGRyZXNzOiAnJyxcbiAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgemlwOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIGFjY291bnRJbmZvOiB7XG4gICAgICAgICAgZmlyc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGxhc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaW5zdHJ1Y3RvcjogeyBpZCwgYmFzaWNJbmZvLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyB9ID0ge30gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXBkYXRlZEluc3RydWN0b3IgPSB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zIH07XG4gICAgY29uc3QgeyBvcmlnaW5hbEluc3RydWN0b3I6IG9yaWdpbmFsSW5zdHJ1Y3RvclN0YXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG9yaWdpbmFsSW5zdHJ1Y3RvciA9IHVwZGF0ZShvcmlnaW5hbEluc3RydWN0b3JTdGF0ZSwge1xuICAgICAgJG1lcmdlOiB1cGRhdGVkSW5zdHJ1Y3RvcixcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3JpZ2luYWxJbnN0cnVjdG9yLCB1cGRhdGVkSW5zdHJ1Y3RvciB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgLy8gVGhpcyByZXNldHMgdGhlIGNvbXBvbmVudCBzdGF0ZSB0byByZWZsZWN0IHRoZSBkZXRhaWxzIG9mIHRoZSBuZXh0IGluc3RydWN0b3IgdGhlIHVzZXIgY2xpY2tzIG9uXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKCghdGhpcy5zdGF0ZS5vcmlnaW5hbEluc3RydWN0b3IgfHwgbmV4dFByb3BzLmluc3RydWN0b3IuaWQgIT09IHRoaXMuc3RhdGUub3JpZ2luYWxJbnN0cnVjdG9yLmlkKSkge1xuICAgICAgY29uc3QgeyBpbnN0cnVjdG9yOiB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zIH0gPSB7fSB9ID0gbmV4dFByb3BzO1xuICAgICAgY29uc3QgdXBkYXRlZEluc3RydWN0b3IgPSB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zIH07XG4gICAgICBjb25zdCB7IG9yaWdpbmFsSW5zdHJ1Y3Rvcjogb3JpZ2luYWxJbnN0cnVjdG9yU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBvcmlnaW5hbEluc3RydWN0b3IgPSB1cGRhdGUob3JpZ2luYWxJbnN0cnVjdG9yU3RhdGUsIHtcbiAgICAgICAgJG1lcmdlOiBuZXh0UHJvcHMuaW5zdHJ1Y3RvcixcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yaWdpbmFsSW5zdHJ1Y3RvciwgdXBkYXRlZEluc3RydWN0b3IgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TZXREcm9wZG93biA9IChkcm9wZG93bkluZGV4KSA9PiB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25JbmRleCwgZHJvcGRvd25Jc09wZW46IHRydWUgfSk7XG4gIG9uQ2xvc2VEcm9wZG93biA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bklzT3BlbjogZmFsc2UgfSk7XG5cbiAgb25PcGVuRGVsZXRlTG9jYXRpb25Nb2RhbCA9IChwZW5kaW5nTG9jYXRpb25EZWxldGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogdHJ1ZSwgcGVuZGluZ0xvY2F0aW9uRGVsZXRlIH0pO1xuICBvbkNsb3NlRGVsZXRlTG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZToge30gfSk7XG5cbiAgb25PcGVuTmV3TG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBuZXdMb2NhdGlvbk1vZGFsT3BlbjogdHJ1ZSB9KTtcbiAgb25DbG9zZU5ld0xvY2F0aW9uTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbmV3TG9jYXRpb25Nb2RhbE9wZW46IGZhbHNlIH0pO1xuXG4gIG9uT3BlbkVkaXRMb2NhdGlvbk1vZGFsID0gKGFjdGl2ZUxvY2F0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgZWRpdExvY2F0aW9uTW9kYWxPcGVuOiB0cnVlLCBhY3RpdmVMb2NhdGlvbiB9KTtcbiAgb25DbG9zZUVkaXRMb2NhdGlvbk1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVkaXRMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsIGRyb3Bkb3duSXNPcGVuOiBmYWxzZSwgYWN0aXZlTG9jYXRpb246IHt9IH0pO1xuXG4gIG9uQ2FuY2VsQ2hhbmdlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1cGRhdGVkSW5zdHJ1Y3Rvciwgb3JpZ2luYWxJbnN0cnVjdG9yIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGVkSW5zdHJ1Y3Rvcjogb3JpZ2luYWxJbnN0cnVjdG9yIH0sIG9uQ2xvc2UoKSk7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbnRvIG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZU5ld0xvY2F0aW9uIHBhc3NlZCBkb3duIGZyb20gdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB1cGRhdGVkSW5zdHJ1Y3RvcjogeyBpZCwgYmFzaWNJbmZvLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyB9IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTG9jYXRpb25FcnJvciwgb25TYXZlSW5zdHJ1Y3RvckNoYW5nZXMsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gTk9URTogU3dhcCBvdXQgd2hhdCBpbnN0YW5jZSBvZiB2YWxpZCBpcyBhY3RpdmUgaWYgeW91IHdhbnQgdG8gdGVzdCBzYXZpbmcgYSBuZXcgbG9jYXRpb24gd2l0aG91dCB3b3JyeWluZyBhYm91dCB2YWxpZGF0aW9uXG4gICAgLy8gY29uc3QgdmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgbmVzdGVkRWRpdEZpZWxkVmFsaWRhdGlvbih0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLnVwZGF0ZWRJbnN0cnVjdG9yLCB0aGlzLm9uU2V0VmFsaWRhdGlvbiwgKHZhbGlkYXRpb24pID0+IGNvbnNvbGUud2FybigndmFsaWRhdGlvbicsIHZhbGlkYXRpb24pKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgICAgY29uc29sZS53YXJuKCdub3QgdmFsaWQnKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdEJvZHkgPSB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zIH07XG4gICAgb25TYXZlSW5zdHJ1Y3RvckNoYW5nZXMocG9zdEJvZHkpO1xuICAgIGNvbnNvbGUud2Fybignc3R1YmJlZCBvdXQgc2F2ZSBmdW5jdGlvbicpO1xuICAgIG9uQ2xvc2UoKTtcbiAgfVxuXG4gIGluaXRpYWxJbnN0cnVjdG9yTW91bnQgPSAoKSA9PiB0aGlzLnN0YXRlLm9yaWdpbmFsSW5zdHJ1Y3Rvci5pZCAhPT0gdGhpcy5wcm9wcy5pbnN0cnVjdG9yLmlkO1xuXG4gIC8vIFdlIHB1bGwgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBmaWVsZCB0eXBlIHRoZW4gbWVyZ2UgdGhhdCB1cGRhdGVkIGtleS92YWx1ZSBwYWlyIHdpdGggdGhlIGxhc3QgdmVyc2lvbiBvZiBjb21wb25lbnQgc3RhdGVcbiAgaGFuZGxlRGV0YWlsc0NoYW5nZSA9IChldmVudCwgbmFtZSwgc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgdXBkYXRlZEluc3RydWN0b3I6IHByZXZpb3VzSW5zdHJ1Y3RvclN0YXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogZXZlbnQ7XG4gICAgY29uc3QgdXBkYXRlZEluc3RydWN0b3IgPSB1cGRhdGUocHJldmlvdXNJbnN0cnVjdG9yU3RhdGUsIHtcbiAgICAgIFtzZWN0aW9uXTogeyAkbWVyZ2U6IHsgW25hbWVdOiB2YWx1ZSB9IH0sXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0ZWRJbnN0cnVjdG9yIH0pO1xuICB9XG5cbiAgcmVuZGVyTW9kYWxIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbnN0cnVjdG9yOiB7IGFjY291bnRJbmZvOiB7IGxhc3ROYW1lOiBpbml0aWFsTGFzdE5hbWUsIGZpcnN0TmFtZTogaW5pdGlhbEZJcnN0TmFtZSwgZW1haWw6IGluaXRpYWxFbWFpbCB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1cGRhdGVkSW5zdHJ1Y3RvcjogeyBhY2NvdW50SW5mbzogeyBsYXN0TmFtZTogdXBkYXRlZExhc3ROYW1lLCBmaXJzdE5hbWU6IHVwZGF0ZWRGaXJzdE5hbWUsIGVtYWlsOiB1cGRhdGVkRW1haWwgfSB9IH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBsYXN0TmFtZTtcbiAgICBsZXQgZmlyc3ROYW1lO1xuICAgIGxldCBlbWFpbDtcbiAgICBpZiAodGhpcy5pbml0aWFsSW5zdHJ1Y3Rvck1vdW50KCkpIHtcbiAgICAgIGxhc3ROYW1lID0gaW5pdGlhbExhc3ROYW1lO1xuICAgICAgZmlyc3ROYW1lID0gaW5pdGlhbEZJcnN0TmFtZTtcbiAgICAgIGVtYWlsID0gaW5pdGlhbEVtYWlsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0TmFtZSA9IHVwZGF0ZWRMYXN0TmFtZTtcbiAgICAgIGZpcnN0TmFtZSA9IHVwZGF0ZWRGaXJzdE5hbWU7XG4gICAgICBlbWFpbCA9IHVwZGF0ZWRFbWFpbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImgzXCI+e2xhc3ROYW1lfSwge2ZpcnN0TmFtZX08L2g0PlxuICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+e2VtYWlsfTwvYT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4sIGluc3RydWN0b3I6IHsgYWNjb3VudEluZm8sIGNvbnRhY3RJbmZvLCBsb2NhdGlvbnMgfSwgb25PcGVuRGVsZXRlTW9kYWwsIGRlbGV0ZU1vZGFsT3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRyb3Bkb3duSXNPcGVuLCBkcm9wZG93bkluZGV4LCBhY3RpdmVMb2NhdGlvbiwgZGVsZXRlTG9jYXRpb25Nb2RhbE9wZW4sIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZSwgbmV3TG9jYXRpb25Nb2RhbE9wZW4sIGVkaXRMb2NhdGlvbk1vZGFsT3BlbixcbiAgICAgIHVwZGF0ZWRJbnN0cnVjdG9yOiB7XG4gICAgICAgIGFjY291bnRJbmZvOiB1cGRhdGVkQWNjb3VudEluZm8sIGNvbnRhY3RJbmZvOiB1cGRhdGVkQ29udGFjdEluZm8sIGxvY2F0aW9uczogdXBkYXRlZExvY2F0aW9ucyxcbiAgICAgIH0sXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DYW5jZWxDaGFuZ2VzfSBuZXN0ZWRNb2RhbHM9e2RlbGV0ZU1vZGFsT3BlbiB8fCBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbiB8fCBlZGl0TG9jYXRpb25Nb2RhbE9wZW4gfHwgbmV3TG9jYXRpb25Nb2RhbE9wZW59PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfdXNlcl9lZGl0XCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWN1c3RvbS1sYXJnZSBtb2RhbC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmQtbWFpbiBjYXJkIGdyZXkgbGlnaHRlbi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVyLWJveCBjYXJkLXBhbmVsIGNhcmQtcGFuZWwtdGl0bGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzE4MzdhJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jaXJjbGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA4NWNlJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pbWctb3duZXIwMS5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRleHRcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1vZGFsSGVhZGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tb3duZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPk93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuaW5pdGlhbEluc3RydWN0b3JNb3VudCgpID8gYWNjb3VudEluZm8gOiB1cGRhdGVkQWNjb3VudEluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5pbml0aWFsSW5zdHJ1Y3Rvck1vdW50KCkgPyBjb250YWN0SW5mbyA6IHVwZGF0ZWRDb250YWN0SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuaW5pdGlhbEluc3RydWN0b3JNb3VudCgpID8gbG9jYXRpb25zIDogdXBkYXRlZExvY2F0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bklzT3Blbj17ZHJvcGRvd25Jc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JbmRleD17ZHJvcGRvd25JbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVMb2NhdGlvbj17YWN0aXZlTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTG9jYXRpb25Nb2RhbE9wZW49e2RlbGV0ZUxvY2F0aW9uTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZT17cGVuZGluZ0xvY2F0aW9uRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0xvY2F0aW9uTW9kYWxPcGVuPXtuZXdMb2NhdGlvbk1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0TG9jYXRpb25Nb2RhbE9wZW49e2VkaXRMb2NhdGlvbk1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldERyb3Bkb3duPXt0aGlzLm9uU2V0RHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZURyb3Bkb3duPXt0aGlzLm9uQ2xvc2VEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5OZXdMb2NhdGlvbk1vZGFsPXt0aGlzLm9uT3Blbk5ld0xvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuRWRpdExvY2F0aW9uTW9kYWw9e3RoaXMub25PcGVuRWRpdExvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZU5ld0xvY2F0aW9uTW9kYWw9e3RoaXMub25DbG9zZU5ld0xvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZUVkaXRMb2NhdGlvbk1vZGFsPXt0aGlzLm9uQ2xvc2VFZGl0TG9jYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5EZWxldGVMb2NhdGlvbk1vZGFsPXt0aGlzLm9uT3BlbkRlbGV0ZUxvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZURlbGV0ZUxvY2F0aW9uTW9kYWw9e3RoaXMub25DbG9zZURlbGV0ZUxvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkRlbGV0ZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNhbmNlbENoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBncmV5LXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jYXJkLW1vZGFsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkluc3RydWN0b3JEZXRhaWxzTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBkZWxldGVNb2RhbE9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uT3BlbkRlbGV0ZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbnN0cnVjdG9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdG9yRGV0YWlsc01vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Instructor/ListPage/components/InstructorDetailsModal/index.js */"));
    }
  }]);

  return InstructorDetailsModal;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

InstructorDetailsModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool.isRequired,
  deleteModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  onOpenDeleteModal: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  instructor: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InstructorDetailsModal);

/***/ }),

/***/ "./components/Instructor/ListPage/components/NewInstructorModal/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/NewInstructorModal/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../SharedModalComponents/AccountInfo */ "./components/Instructor/ListPage/components/SharedModalComponents/AccountInfo/index.js");
/* harmony import */ var _SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../SharedModalComponents/ContactInfo */ "./components/Instructor/ListPage/components/SharedModalComponents/ContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../SharedModalComponents/Locations */ "./components/Instructor/ListPage/components/SharedModalComponents/Locations/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");
/* harmony import */ var _utils_initialState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/initialState */ "./components/Instructor/ListPage/components/NewInstructorModal/utils/initialState.js");











/* eslint-disable no-unused-vars */











var idGenerator = function idGenerator() {
  return Math.floor(Math.random() * 100 + 1);
};

var NewInstructorModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(NewInstructorModal, _React$Component);

  function NewInstructorModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NewInstructorModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(NewInstructorModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetDropdown", function (dropdownIndex) {
      return _this.setState({
        dropdownIndex: dropdownIndex,
        dropdownIsOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenDeleteLocationModal", function (pendingLocationDelete) {
      return _this.setState({
        deleteLocationModalOpen: true,
        pendingLocationDelete: pendingLocationDelete
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseDeleteLocationModal", function () {
      return _this.setState({
        deleteLocationModalOpen: false,
        pendingLocationDelete: {}
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenNewLocationModal", function () {
      return _this.setState({
        newLocationModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseNewLocationModal", function () {
      return _this.setState({
        newLocationModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenEditLocationModal", function (activeLocation) {
      return _this.setState({
        editLocationModalOpen: true,
        activeLocation: activeLocation
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseEditLocationModal", function () {
      return _this.setState({
        editLocationModalOpen: false,
        dropdownIsOpen: false,
        activeLocation: {}
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onResetInstructor", function () {
      return _this.setState(_utils_initialState__WEBPACK_IMPORTED_MODULE_19__["default"]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetInstructor();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetValidation", function (validation, cb) {
      return _this.setState({
        validation: validation
      }, cb);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var _this$state, accountInfo, contactInfo, locations, _this$props, onAddNewInstructor, onClose, valid, id, postBody;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, accountInfo = _this$state.accountInfo, contactInfo = _this$state.contactInfo, locations = _this$state.locations;
                _this$props = _this.props, onAddNewInstructor = _this$props.onAddNewInstructor, onClose = _this$props.onClose; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
                // const valid = true;

                _context.next = 5;
                return Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_18__["nestedCreateFieldValidation"])(_this.state, _this.onSetValidation, function (validation) {
                  return console.warn('validation', validation);
                });

              case 5:
                valid = _context.sent;

                if (!valid) {
                  // return onSaveLocationError();
                  console.warn('not valid');
                }

                id = idGenerator();
                postBody = {
                  id: id,
                  accountInfo: accountInfo,
                  contactInfo: contactInfo,
                  locations: locations
                };
                onAddNewInstructor(postBody);
                console.warn('stubbed out save function');
                onClose();

              case 12:
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDetailsChange", function (event, name, section) {
      var value = event.target ? event.target.value : event;
      var updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(_this.state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, section, {
        $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value)
      }));

      _this.setState(updatedState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderModalHeader", function () {
      var _this$state$accountIn = _this.state.accountInfo,
          lastName = _this$state$accountIn.lastName,
          firstName = _this$state$accountIn.firstName,
          email = _this$state$accountIn.email;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: "h3"
      }, lastName, ", ", firstName), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "mailto:".concat(email)
      }, email));
    });

    _this.state = {
      deleteLocationModalOpen: false,
      newLocationModalOpen: false,
      editLocationModalOpen: false,
      pendingLocationDelete: {},
      activeLocation: {},
      dropdownIsOpen: false,
      dropdownIndex: null,
      accountInfo: {
        firstName: '',
        lastName: '',
        email: '',
        gender: {}
      },
      contactInfo: {
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
      },
      locations: [],
      validation: {
        accountInfo: {
          firstName: true,
          lastName: true,
          email: true,
          gender: true
        }
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NewInstructorModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var _this$state2 = this.state,
          dropdownIsOpen = _this$state2.dropdownIsOpen,
          dropdownIndex = _this$state2.dropdownIndex,
          activeLocation = _this$state2.activeLocation,
          deleteLocationModalOpen = _this$state2.deleteLocationModalOpen,
          pendingLocationDelete = _this$state2.pendingLocationDelete,
          newLocationModalOpen = _this$state2.newLocationModalOpen,
          editLocationModalOpen = _this$state2.editLocationModalOpen,
          accountInfo = _this$state2.accountInfo,
          contactInfo = _this$state2.contactInfo,
          locations = _this$state2.locations;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onOuterClick: this.onCloseModal,
        nestedModals: deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "modal_user_edit",
        className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          backgroundColor: '#31837a',
          color: '#fff'
        },
        className: "jsx-2557376288" + " " + "owner-box card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "user-block"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          backgroundColor: '#0085ce',
          color: '#fff'
        },
        className: "jsx-2557376288" + " " + "user-circle"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "images/img-owner01.jpg",
        alt: "",
        className: "jsx-2557376288"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          color: '#fff'
        },
        className: "jsx-2557376288" + " " + "user-text"
      }, this.renderModalHeader()))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          textAlign: 'right'
        },
        className: "jsx-2557376288" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2557376288" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-2557376288" + " " + "icon-owner"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2557376288" + " " + "text-icon"
      }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_15__["default"], {
        state: accountInfo,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_16__["default"], {
        state: contactInfo,
        handleDetailsChange: this.handleDetailsChange
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_17__["default"], {
        state: locations,
        handleDetailsChange: this.handleDetailsChange,
        dropdownIsOpen: dropdownIsOpen,
        dropdownIndex: dropdownIndex,
        activeLocation: activeLocation,
        deleteLocationModalOpen: deleteLocationModalOpen,
        pendingLocationDelete: pendingLocationDelete,
        newLocationModalOpen: newLocationModalOpen,
        editLocationModalOpen: editLocationModalOpen,
        onSetDropdown: this.onSetDropdown,
        onCloseDropdown: this.onCloseDropdown,
        onOpenNewLocationModal: this.onOpenNewLocationModal,
        onOpenEditLocationModal: this.onOpenEditLocationModal,
        onCloseNewLocationModal: this.onCloseNewLocationModal,
        onCloseEditLocationModal: this.onCloseEditLocationModal,
        onOpenDeleteLocationModal: this.onOpenDeleteLocationModal,
        onCloseDeleteLocationModal: this.onCloseDeleteLocationModal
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.onSubmit,
        className: "jsx-2557376288" + " " + "btn"
      }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2557376288"
      }, ".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-2557376288{margin:0;border-radius:6px;}.modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2557376288{opacity:1;visibility:visible;}.modal-footer.jsx-2557376288{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0luc3RydWN0b3IvTGlzdFBhZ2UvY29tcG9uZW50cy9OZXdJbnN0cnVjdG9yTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOE1XLEFBR2dDLEFBU04sQUFJSyxBQVNKLEFBSWEsU0FoQkwsQ0FhQyxJQVRJLENBYmEsUUEwQnRDLElBaEJBLEVBYUEsUUFUb0IsV0FiWixNQUNFLENBYUEsT0FaQyxDQWFDLFFBWkgsRUFhRSxLQVpJLElBYTJHLFNBWjFILG9HQWFBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0luc3RydWN0b3IvTGlzdFBhZ2UvY29tcG9uZW50cy9OZXdJbnN0cnVjdG9yTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ2ltbXV0YWJpbGl0eS1oZWxwZXInO1xuXG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uLy4uLy4uLy4uL1BvcnRhbCc7XG5pbXBvcnQgQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIGZyb20gJy4uLy4uLy4uLy4uL0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcic7XG5cbmltcG9ydCBBY2NvdW50SW5mbyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvQWNjb3VudEluZm8nO1xuaW1wb3J0IENvbnRhY3RJbmZvIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Db250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25zIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbnMnO1xuXG5pbXBvcnQgeyBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3V0aWxzL2luaXRpYWxTdGF0ZSc7XG5cbmNvbnN0IGlkR2VuZXJhdG9yID0gKCkgPT4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxKTtcblxuY2xhc3MgTmV3SW5zdHJ1Y3Rvck1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIG5ld0xvY2F0aW9uTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIGVkaXRMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsXG4gICAgICBwZW5kaW5nTG9jYXRpb25EZWxldGU6IHt9LFxuICAgICAgYWN0aXZlTG9jYXRpb246IHt9LFxuICAgICAgZHJvcGRvd25Jc09wZW46IGZhbHNlLFxuICAgICAgZHJvcGRvd25JbmRleDogbnVsbCxcbiAgICAgIGFjY291bnRJbmZvOiB7XG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBnZW5kZXI6IHt9LFxuICAgICAgfSxcbiAgICAgIGNvbnRhY3RJbmZvOiB7XG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIHppcDogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgYWNjb3VudEluZm86IHtcbiAgICAgICAgICBmaXJzdE5hbWU6IHRydWUsXG4gICAgICAgICAgbGFzdE5hbWU6IHRydWUsXG4gICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgZ2VuZGVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgb25TZXREcm9wZG93biA9IChkcm9wZG93bkluZGV4KSA9PiB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25JbmRleCwgZHJvcGRvd25Jc09wZW46IHRydWUgfSk7XG4gIG9uQ2xvc2VEcm9wZG93biA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bklzT3BlbjogZmFsc2UgfSk7XG5cbiAgb25PcGVuRGVsZXRlTG9jYXRpb25Nb2RhbCA9IChwZW5kaW5nTG9jYXRpb25EZWxldGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogdHJ1ZSwgcGVuZGluZ0xvY2F0aW9uRGVsZXRlIH0pO1xuICBvbkNsb3NlRGVsZXRlTG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZToge30gfSk7XG5cbiAgb25PcGVuTmV3TG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBuZXdMb2NhdGlvbk1vZGFsT3BlbjogdHJ1ZSB9KTtcbiAgb25DbG9zZU5ld0xvY2F0aW9uTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbmV3TG9jYXRpb25Nb2RhbE9wZW46IGZhbHNlIH0pO1xuXG4gIG9uT3BlbkVkaXRMb2NhdGlvbk1vZGFsID0gKGFjdGl2ZUxvY2F0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgZWRpdExvY2F0aW9uTW9kYWxPcGVuOiB0cnVlLCBhY3RpdmVMb2NhdGlvbiB9KTtcbiAgb25DbG9zZUVkaXRMb2NhdGlvbk1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVkaXRMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsIGRyb3Bkb3duSXNPcGVuOiBmYWxzZSwgYWN0aXZlTG9jYXRpb246IHt9IH0pO1xuXG4gIG9uUmVzZXRJbnN0cnVjdG9yID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldEluc3RydWN0b3IoKTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIGludG8gbmVzdGVkQ3JlYXRlRmllbGRWYWxpZGF0aW9uLCBpdCB0YWtlcyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uIGNoZWNrIGFuZCBhIGNhbGxiYWNrIGZ1bmN0aW9uXG4gIC8vIFRoZSB1cGRhdGVkIGNvbXBvbmVudCB2YWxpZGF0aW9uIHN0YXRlIGlzIHNldCBhbmQgdGhlbiB0aGUgY2FsbGJhY2sgaXMgZGlzcGF0Y2hlZCAtIGluIHRoaXMgY2FzZSwgdGhlIGNhbGxiYWNrIGhhbmRsZXMgdGhlIHRvYXN0IHdhcm5pbmcgYXQgdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblNldFZhbGlkYXRpb24gPSAodmFsaWRhdGlvbiwgY2IpID0+IHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uIH0sIGNiKTtcblxuICAvLyBJZiBhbGwgdGhlIGZpZWxkcyBhcmUgdmFsaWQsIHdlIGNvbnN0cnVjdCBhIHBvc3QgYm9keSBhbmQgY2FsbCBvblNhdmVOZXdMb2NhdGlvbiBwYXNzZWQgZG93biBmcm9tIHRoZSBjb250YWluZXIgbGV2ZWxcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWNjb3VudEluZm8sIGNvbnRhY3RJbmZvLCBsb2NhdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBvbkFkZE5ld0luc3RydWN0b3IsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gTk9URTogU3dhcCBvdXQgd2hhdCBpbnN0YW5jZSBvZiB2YWxpZCBpcyBhY3RpdmUgaWYgeW91IHdhbnQgdG8gdGVzdCBzYXZpbmcgYSBuZXcgbG9jYXRpb24gd2l0aG91dCB3b3JyeWluZyBhYm91dCB2YWxpZGF0aW9uXG4gICAgLy8gY29uc3QgdmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgbmVzdGVkQ3JlYXRlRmllbGRWYWxpZGF0aW9uKHRoaXMuc3RhdGUsIHRoaXMub25TZXRWYWxpZGF0aW9uLCAodmFsaWRhdGlvbikgPT4gY29uc29sZS53YXJuKCd2YWxpZGF0aW9uJywgdmFsaWRhdGlvbikpO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIC8vIHJldHVybiBvblNhdmVMb2NhdGlvbkVycm9yKCk7XG4gICAgICBjb25zb2xlLndhcm4oJ25vdCB2YWxpZCcpO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IGlkR2VuZXJhdG9yKCk7XG4gICAgY29uc3QgcG9zdEJvZHkgPSB7IGlkLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyB9O1xuICAgIG9uQWRkTmV3SW5zdHJ1Y3Rvcihwb3N0Qm9keSk7XG4gICAgY29uc29sZS53YXJuKCdzdHViYmVkIG91dCBzYXZlIGZ1bmN0aW9uJyk7XG4gICAgb25DbG9zZSgpO1xuICB9XG5cbiAgLy8gV2UgcHVsbCB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGZpZWxkIHR5cGUgdGhlbiBtZXJnZSB0aGF0IHVwZGF0ZWQga2V5L3ZhbHVlIHBhaXIgd2l0aCB0aGUgbGFzdCB2ZXJzaW9uIG9mIGNvbXBvbmVudCBzdGF0ZVxuICBoYW5kbGVEZXRhaWxzQ2hhbmdlID0gKGV2ZW50LCBuYW1lLCBzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiBldmVudDtcbiAgICBjb25zdCB1cGRhdGVkU3RhdGUgPSB1cGRhdGUodGhpcy5zdGF0ZSwge1xuICAgICAgW3NlY3Rpb25dOiB7ICRtZXJnZTogeyBbbmFtZV06IHZhbHVlIH0gfSxcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZWRTdGF0ZSk7XG4gIH1cblxuICByZW5kZXJNb2RhbEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFjY291bnRJbmZvOiB7IGxhc3ROYW1lLCBmaXJzdE5hbWUsIGVtYWlsIH0gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImgzXCI+e2xhc3ROYW1lfSwge2ZpcnN0TmFtZX08L2g0PlxuICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+e2VtYWlsfTwvYT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkcm9wZG93bklzT3BlbiwgZHJvcGRvd25JbmRleCwgYWN0aXZlTG9jYXRpb24sIGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuLCBwZW5kaW5nTG9jYXRpb25EZWxldGUsXG4gICAgICBuZXdMb2NhdGlvbk1vZGFsT3BlbiwgZWRpdExvY2F0aW9uTW9kYWxPcGVuLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9IG5lc3RlZE1vZGFscz17ZGVsZXRlTG9jYXRpb25Nb2RhbE9wZW4gfHwgZWRpdExvY2F0aW9uTW9kYWxPcGVuIHx8IG5ld0xvY2F0aW9uTW9kYWxPcGVufT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3VzZXJfZWRpdFwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1jdXN0b20tbGFyZ2UgbW9kYWwtZ3JheVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBncmV5IGxpZ2h0ZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lci1ib3ggY2FyZC1wYW5lbCBjYXJkLXBhbmVsLXRpdGxlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMxODM3YScsIGNvbG9yOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2lyY2xlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwODVjZScsIGNvbG9yOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaW1nLW93bmVyMDEuanBnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci10ZXh0XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNb2RhbEhlYWRlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLW93bmVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWljb25cIj5Pd25lcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGw2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXthY2NvdW50SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtjb250YWN0SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2xvY2F0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Jc09wZW49e2Ryb3Bkb3duSXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSW5kZXg9e2Ryb3Bkb3duSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTG9jYXRpb249e2FjdGl2ZUxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuPXtkZWxldGVMb2NhdGlvbk1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nTG9jYXRpb25EZWxldGU9e3BlbmRpbmdMb2NhdGlvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdMb2NhdGlvbk1vZGFsT3Blbj17bmV3TG9jYXRpb25Nb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdExvY2F0aW9uTW9kYWxPcGVuPXtlZGl0TG9jYXRpb25Nb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXREcm9wZG93bj17dGhpcy5vblNldERyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VEcm9wZG93bj17dGhpcy5vbkNsb3NlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTmV3TG9jYXRpb25Nb2RhbD17dGhpcy5vbk9wZW5OZXdMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkVkaXRMb2NhdGlvbk1vZGFsPXt0aGlzLm9uT3BlbkVkaXRMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VOZXdMb2NhdGlvbk1vZGFsPXt0aGlzLm9uQ2xvc2VOZXdMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VFZGl0TG9jYXRpb25Nb2RhbD17dGhpcy5vbkNsb3NlRWRpdExvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuRGVsZXRlTG9jYXRpb25Nb2RhbD17dGhpcy5vbk9wZW5EZWxldGVMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VEZWxldGVMb2NhdGlvbk1vZGFsPXt0aGlzLm9uQ2xvc2VEZWxldGVMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGdyZXktdGV4dCB0ZXh0LWRhcmtlbi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE5OTk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuTmV3SW5zdHJ1Y3Rvck1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0luc3RydWN0b3JNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Instructor/ListPage/components/NewInstructorModal/index.js */"));
    }
  }]);

  return NewInstructorModal;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

NewInstructorModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NewInstructorModal);

/***/ }),

/***/ "./components/Instructor/ListPage/components/NewInstructorModal/utils/initialState.js":
/*!********************************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/NewInstructorModal/utils/initialState.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  accountInfo: {
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
  locations: []
});

/***/ }),

/***/ "./components/Instructor/ListPage/components/SharedModalComponents/AccountInfo/index.js":
/*!**********************************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/SharedModalComponents/AccountInfo/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/genderOptions */ "./components/utils/genderOptions.js");






var AccountInfo = function AccountInfo(_ref) {
  var _ref$state = _ref.state,
      firstName = _ref$state.firstName,
      lastName = _ref$state.lastName,
      email = _ref$state.email,
      gender = _ref$state.gender,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Account Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "first-name",
    name: "firstName",
    value: firstName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'firstName', 'accountInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: firstName.length ? 'label active' : 'label',
    htmlFor: "first-name"
  }, "First Name*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "last-name",
    name: "lastName",
    value: lastName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'lastName', 'accountInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: lastName.length ? 'label active' : 'label',
    htmlFor: "last-name"
  }, "Last Name*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "account_email_edit",
    name: "email",
    value: email,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'email', 'accountInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: email.length ? 'label active' : 'label',
    htmlFor: "account_email_edit"
  }, "Email Address*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 l7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(gender, _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'gender', 'accountInfo');
    },
    options: _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: "Gender*",
    stateKey: "gender",
    dropdownKey: "gender"
  })))))));
};

AccountInfo.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AccountInfo);

/***/ }),

/***/ "./components/Instructor/ListPage/components/SharedModalComponents/ContactInfo/index.js":
/*!**********************************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/SharedModalComponents/ContactInfo/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/stateOptions */ "./components/utils/stateOptions.js");






var ContactInfo = function ContactInfo(_ref) {
  var _ref$state = _ref.state,
      phone = _ref$state.phone,
      streetAddress = _ref$state.streetAddress,
      city = _ref$state.city,
      state = _ref$state.state,
      zip = _ref$state.zip,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Contact Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "tel",
    id: "contact_phone_edit",
    name: "phone",
    value: phone,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'phone', 'contactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: phone.length ? 'label active' : 'label',
    htmlFor: "contact_phone_edit"
  }, "Phone (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "contact_address_edit",
    name: "streetAddress",
    value: streetAddress,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'streetAddress', 'contactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: streetAddress.length ? 'label active' : 'label',
    htmlFor: "contact_address_edit"
  }, "Street Address (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "contact_city_edit",
    name: "city",
    value: city,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'city', 'contactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: city.length ? 'label active' : 'label',
    htmlFor: "contact_city_edit"
  }, "City (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m6 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(state, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'state', 'contactInfo');
    },
    options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: "State (optional)",
    stateKey: "state",
    dropdownKey: "state"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m6 l7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "tel",
    id: "contact_zip_edit",
    name: "zip",
    value: zip,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'zip', 'contactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: zip.length ? 'label active' : 'label',
    htmlFor: "contact_zip_edit"
  }, "Zip (optional)")))))));
};

ContactInfo.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ContactInfo);

/***/ }),

/***/ "./components/Instructor/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js":
/*!*******************************************************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LocationRow = function LocationRow(_ref) {
  var _ref$location$locatio = _ref.location.locationContactInfo,
      locationName = _ref$location$locatio.locationName,
      locationNickname = _ref$location$locatio.locationNickname,
      index = _ref.index,
      dropdownIndex = _ref.dropdownIndex,
      dropdownIsOpen = _ref.dropdownIsOpen,
      handleDropdownClick = _ref.handleDropdownClick,
      onOpenEditLocationModal = _ref.onOpenEditLocationModal,
      onOpenDeleteModal = _ref.onOpenDeleteModal;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card-location card card-large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel card-panel-location",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s9"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h4 truncate"
  }, locationName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "sub-title"
  }, locationNickname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row icons-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-location"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Location"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-block col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick(event) {
      return handleDropdownClick(event, index);
    },
    className: "dropdown-trigger btn",
    "data-target": "dropdown105"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons dots-icon"
  }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "dropdown105",
    className: "dropdown-content dropdown-wide",
    style: {
      display: 'block',
      width: '103.991px',
      left: '116.974px',
      top: '7.99716px',
      height: '80.3409px',
      transformOrigin: '0px 0px 0px',
      opacity: '1',
      transform: 'scaleX(1) scaleY(1)'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: onOpenEditLocationModal,
    className: "modal-trigger link-block"
  }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Clone")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: onOpenDeleteModal
  }, "Delete"))) : null))))));
};

LocationRow.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  handleDropdownClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenDeleteModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenEditLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationRow);

/***/ }),

/***/ "./components/Instructor/ListPage/components/SharedModalComponents/Locations/index.js":
/*!********************************************************************************************!*\
  !*** ./components/Instructor/ListPage/components/SharedModalComponents/Locations/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../Modal */ "./components/Modal/index.js");
/* harmony import */ var _Location_components_NewLocationModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../Location/components/NewLocationModal */ "./components/Location/components/NewLocationModal/index.js");
/* harmony import */ var _Location_components_LocationDetailsModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../Location/components/LocationDetailsModal */ "./components/Location/components/LocationDetailsModal/index.js");
/* harmony import */ var _components_LocationRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/LocationRow */ "./components/Instructor/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");
/* harmony import */ var _Location_utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../Location/utils/sampleLocationList */ "./components/Location/utils/sampleLocationList.js");








/* eslint-disable array-callback-return */

/* eslint-disable react/no-array-index-key */










var idGenerator = function idGenerator() {
  return Math.floor(Math.random() * 100 + 1);
};

var validationFieldMap = {
  locationName: 'Location Name',
  locationNickname: 'Location Nickname',
  locationEmail: 'Location Email',
  automatedEmailOrigin: 'Automated Email Origin',
  automatedEmailSalutation: 'Automated Email Salutation',
  locationUrl: 'Location Url',
  headerColor1: 'Header Color 1',
  headerColor2: 'Header Color 2',
  headerLogoBackgroundColor: 'Header Logo Background Color',
  headerLogoBackgroundAlpha: 'Header Logo Background Alpha',
  horizontalLogoVariation: 'Horizonal Logo Variation',
  squareLogoVariation: 'Square Logo Variation',
  backgroundImage: 'Background Image',
  backgroundBlur: 'Background Blur',
  backgroundOverlayAlpha: 'Background Overlay  Alpha'
}; // TODO: mock out update/delete action to backend
// TODO: Will this delete just remove the location from the owner or delete the location altogethe?

var Locations =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Locations, _React$Component);

  function Locations(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Locations);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Locations).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetLocationValidation", function (locationValidation) {
      return _this.setState({
        locationValidation: locationValidation
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSaveNewLocation", function (_ref) {
      var locationContactInfo = _ref.locationContactInfo,
          locationEmailSettings = _ref.locationEmailSettings,
          locationBranding = _ref.locationBranding,
          owner = _ref.owner;

      _this.onCloseNewLocationModal();

      var newLocation = {
        id: idGenerator(),
        owner: owner,
        locationContactInfo: locationContactInfo,
        locationEmailSettings: locationEmailSettings,
        locationBranding: locationBranding,
        locationBasicInfo: {
          activeStudents: 0,
          pastStudents: 0,
          unactivatedStudents: 0,
          averageImprovement: 0,
          averageInitialScore: 0,
          averageFinalScore: 0,
          studentsAchievingTargetScore: 0
        }
      };
      var locations = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(_this.state.locations, {
        $push: [newLocation]
      });

      _this.setState({
        locations: locations
      });

      Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_14__["saveNewSuccess"])('location');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSaveLocationChanges", function (_ref2) {
      var id = _ref2.id,
          locationContactInfo = _ref2.locationContactInfo,
          locationEmailSettings = _ref2.locationEmailSettings,
          locationBranding = _ref2.locationBranding;
      var originalLocations = _this.state.locations;
      var onCloseDropdown = _this.props.onCloseDropdown;
      var locationToUpdate = originalLocations.filter(function (location) {
        return location.id === id;
      })[0];
      var updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(locationToUpdate, {
        locationContactInfo: {
          $set: locationContactInfo
        },
        locationEmailSettings: {
          $set: locationEmailSettings
        },
        locationBranding: {
          $set: locationBranding
        }
      });
      var updatedLocationIndex = originalLocations.indexOf(locationToUpdate);
      var locations = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(originalLocations, {
        $splice: [[updatedLocationIndex, 1, updatedLocation]]
      });
      Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_14__["saveChangesSuccess"])();

      _this.setState({
        locations: locations
      });

      onCloseDropdown();
      return _this.onCloseEditLocationModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onConfirmDeleteLocation", function () {
      var _this$props = _this.props,
          pendingLocationDelete = _this$props.pendingLocationDelete,
          onCloseDeleteLocationModal = _this$props.onCloseDeleteLocationModal;

      _this.onDeleteLocation(pendingLocationDelete);

      onCloseDeleteLocationModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDeleteLocation", function (deletedLocation) {
      var updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(_this.state, {
        locations: function locations(unfilteredLocations) {
          return unfilteredLocations.filter(function (location) {
            return location.id !== deletedLocation.id;
          });
        }
      });

      _this.setState({
        locations: updatedState.locations
      });

      _this.props.onCloseDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDropdownClick", function (event, index) {
      var _this$props2 = _this.props,
          dropdownIsOpen = _this$props2.dropdownIsOpen,
          onCloseDropdown = _this$props2.onCloseDropdown,
          onSetDropdown = _this$props2.onSetDropdown;
      event.preventDefault();

      if (dropdownIsOpen) {
        return onCloseDropdown();
      }

      return onSetDropdown(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapUserLocations", function () {
      return _this.state.locations.map(function (location, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_LocationRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: index,
          index: index,
          location: location,
          dropdownIndex: _this.props.dropdownIndex,
          dropdownIsOpen: _this.props.dropdownIsOpen,
          handleDropdownClick: _this.handleDropdownClick,
          onOpenEditLocationModal: function onOpenEditLocationModal() {
            return _this.props.onOpenEditLocationModal(location);
          },
          onOpenDeleteModal: function onOpenDeleteModal() {
            return _this.props.onOpenDeleteLocationModal(location);
          }
        });
      });
    });

    _this.state = {
      locations: _Location_utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_15__["default"],
      dropdownIndex: null,
      pendingLocationDelete: {},
      locationValidation: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Locations, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          deleteLocationModalOpen = _this$props3.deleteLocationModalOpen,
          activeLocation = _this$props3.activeLocation,
          newLocationModalOpen = _this$props3.newLocationModalOpen,
          editLocationModalOpen = _this$props3.editLocationModalOpen,
          onOpenNewLocationModal = _this$props3.onOpenNewLocationModal,
          onCloseNewLocationModal = _this$props3.onCloseNewLocationModal,
          onCloseEditLocationModal = _this$props3.onCloseEditLocationModal,
          onCloseDeleteLocationModal = _this$props3.onCloseDeleteLocationModal;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: deleteLocationModalOpen,
        onConfirm: this.onConfirmDeleteLocation,
        onClose: onCloseDeleteLocationModal,
        header: "Are You Sure?",
        body: "Deleting this location will be permanent"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Location_components_NewLocationModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        fromInstructorPage: true,
        open: newLocationModalOpen,
        onClose: onCloseNewLocationModal,
        onSaveNewLocation: this.onSaveNewLocation,
        onSaveLocationError: function onSaveLocationError() {
          return Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_14__["saveNewError"])(_this2.state.locationValidation, validationFieldMap);
        },
        onSetLocationValidation: this.onSetLocationValidation
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Location_components_LocationDetailsModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        location: activeLocation,
        open: editLocationModalOpen,
        onClose: onCloseEditLocationModal,
        onSaveLocationError: function onSaveLocationError() {
          return Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_14__["saveNewError"])(_this2.state.locationValidation, validationFieldMap);
        },
        onSetLocationValidation: this.onSetLocationValidation,
        onSaveLocationChanges: this.onSaveLocationChanges
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Location(s)"), this.mapUserLocations(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "add-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "add-box-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: onOpenNewLocationModal,
        className: "btn-floating waves-effect waves-light green lighten-1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "add"))))));
    }
  }]);

  return Locations;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Locations.propTypes = {
  activeLocation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  newLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  editLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  pendingLocationDelete: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  deleteLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onOpenNewLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onCloseNewLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onOpenEditLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onCloseEditLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onOpenDeleteLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onCloseDeleteLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Locations);

/***/ }),

/***/ "./components/Instructor/ListPage/index.js":
/*!*************************************************!*\
  !*** ./components/Instructor/ListPage/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-sticky */ "react-sticky");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_InstructorCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/InstructorCard */ "./components/Instructor/ListPage/components/InstructorCard/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Instructor/ListPage/components/FilterSection/index.js");
/* harmony import */ var _components_NewInstructorModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/NewInstructorModal */ "./components/Instructor/ListPage/components/NewInstructorModal/index.js");
/* harmony import */ var _utils_sampleInstructorList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/sampleInstructorList */ "./components/Instructor/utils/sampleInstructorList.js");
/* harmony import */ var _utils_sortFunctions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/sortFunctions */ "./components/utils/sortFunctions.js");









 // import PropTypes from 'prop-types';






 // import { saveNewSuccess as savePracticeTestSuccess, saveChangesSuccess, saveNewError as savePracticeTestError } from '../../utils/fieldValidation';



var InstructorListPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(InstructorListPage, _React$Component);

  function InstructorListPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, InstructorListPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(InstructorListPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetDropdown", function (dropdownIndex) {
      return _this.setState({
        dropdownIsOpen: true,
        dropdownIndex: dropdownIndex
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false,
        dropdownIndex: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenInstructorModal", function () {
      return _this.setState({
        instructorModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseInstructorModal", function () {
      return _this.setState({
        instructorModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onAddNewInstructor", function (newInstructor) {
      return _this.setState(function (_ref) {
        var instructors = _ref.instructors;
        return {
          instructors: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(instructors), [newInstructor])
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onDeleteInstructor", function (deletedInstructor) {
      var updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(_this.state, {
        instructors: function instructors(unfilteredInstructors) {
          return unfilteredInstructors.filter(function (instructor) {
            return instructor.id !== deletedInstructor.id;
          });
        }
      });

      _this.setState({
        instructors: updatedState.instructors
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloneInstructor", function (instructor) {
      var cloneIndex = _this.state.instructors.indexOf(instructor);

      var instructors = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(_this.state.instructors, {
        $splice: [[cloneIndex, 0, instructor]]
      });

      _this.setState({
        instructors: instructors
      }, _this.onCloseDropdown);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSaveInstructorChanges", function (updatedInstructor) {
      var originalInstructors = _this.state.instructors;
      var instructorToUpdate = originalInstructors.filter(function (instructor) {
        return instructor.id === updatedInstructor.id;
      })[0];
      var updatedInstructorIndex = originalInstructors.indexOf(instructorToUpdate);
      var instructors = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(originalInstructors, {
        $splice: [[updatedInstructorIndex, 1, updatedInstructor]]
      }); // saveChangesSuccess();

      _this.setState({
        instructors: instructors
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetFilteredState", function (filterName) {
      return _this.setState({
        instructorsAreFiltered: true,
        filterName: filterName
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        instructorsAreFiltered: false,
        filterName: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetFilteredLocationState", function (filterLocation) {
      return _this.setState({
        instructorsAreFiltered: true,
        filterLocation: filterLocation
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onUnsetFilteredLocationState", function () {
      return _this.setState({
        filterLocation: ''
      }, _this.checkForFilteredState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onFilterByName", function () {
      var _this$state = _this.state,
          instructors = _this$state.instructors,
          filterName = _this$state.filterName;
      return instructors.reduce(function (finalArr, currentInstructor) {
        var _currentInstructor$ac = currentInstructor.accountInfo,
            lastName = _currentInstructor$ac.lastName,
            firstName = _currentInstructor$ac.firstName;
        var instructorString = "".concat(firstName.toLowerCase()).concat(lastName.toLowerCase());

        if (instructorString.indexOf(filterName) !== -1 && finalArr.indexOf(currentInstructor) === -1) {
          finalArr.push(currentInstructor);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onFilterByLocation", function () {
      var preFilteredInstructors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this$state2 = _this.state,
          allInstructors = _this$state2.instructors,
          filterLocation = _this$state2.filterLocation;
      var instructors;

      if (preFilteredInstructors.length) {
        instructors = preFilteredInstructors;
      } else {
        instructors = allInstructors;
      }

      return instructors.reduce(function (finalArr, currentInstructor) {
        var city = currentInstructor.contactInfo.city;

        if (city === filterLocation && finalArr.indexOf(currentInstructor) === -1) {
          finalArr.push(currentInstructor);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSortInstructors", function (instructors) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'firstNameAscending':
          return instructors.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_16__["firstNameAscending"]);

        case 'firstNameDescending':
          return instructors.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_16__["firstNameDescending"]);

        case 'lastNameAscending':
          return instructors.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_16__["lastNameAscending"]);

        case 'lastNameDescending':
          return instructors.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_16__["lastNameDescending"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getMappableInstructors", function () {
      var _this$state3 = _this.state,
          filterName = _this$state3.filterName,
          filterLocation = _this$state3.filterLocation,
          allInstructors = _this$state3.instructors,
          sort = _this$state3.sort;
      var instructors;

      if (filterName.length && !filterLocation.length) {
        instructors = _this.onFilterByName();
      } else if (!filterName.length && filterLocation.length) {
        instructors = _this.onFilterByLocation();
      } else if (filterName.length && filterLocation.length) {
        var filteredByName = _this.onFilterByName();

        instructors = _this.onFilterByLocation(filteredByName);
      } else {
        instructors = allInstructors;
      }

      if (sort) {
        return _this.onSortInstructors(instructors);
      }

      return instructors;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "checkForFilteredState", function () {
      var _this$state4 = _this.state,
          filterName = _this$state4.filterName,
          filterLocation = _this$state4.filterLocation;

      if (!filterName.length && !filterLocation.length) {
        _this.setState({
          instructorsAreFiltered: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "mapInstructors", function () {
      var instructors = _this.getMappableInstructors();

      return instructors.map(function (instructor, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_InstructorCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
          index: index,
          key: instructor.id,
          instructor: instructor,
          dropdownIsOpen: _this.state.dropdownIsOpen,
          onSetDropdown: _this.onSetDropdown,
          onCloseDropdown: _this.onCloseDropdown,
          dropdownIndex: _this.state.dropdownIndex,
          onDeleteInstructor: _this.onDeleteInstructor,
          onCloneInstructor: _this.onCloneInstructor,
          onSaveInstructorChanges: _this.onSaveInstructorChanges
        });
      });
    });

    _this.state = {
      instructorModalOpen: false,
      instructors: _utils_sampleInstructorList__WEBPACK_IMPORTED_MODULE_15__["default"],
      dropdownIndex: null,
      dropdownIsOpen: false,
      instructorsAreFiltered: false,
      filterName: '',
      filterLocation: '',
      sort: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(InstructorListPage, [{
    key: "render",
    value: function render() {
      var instructorModalOpen = this.state.instructorModalOpen;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_NewInstructorModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        open: instructorModalOpen,
        onClose: this.onCloseInstructorModal,
        onAddNewInstructor: this.onAddNewInstructor
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_11__["StickyContainer"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_11__["Sticky"], null, function (_ref2) {
        var style = _ref2.style;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "title-row card-panel",
          style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
            zIndex: 1999
          })
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "mobile-header"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "#",
          "data-target": "slide-out",
          className: "sidenav-trigger"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          className: "material-icons"
        }, "menu"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
          className: "h1 white-text"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "heading-holder"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          className: "icon-instructors"
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "heading-block"
        }, "Instructors"))));
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FilterSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSetSort: this.onSetSort,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState,
        onSetFilteredLocationState: this.onSetFilteredLocationState,
        onUnsetFilteredLocationState: this.onUnsetFilteredLocationState
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row d-flex-content"
      }, this.mapInstructors())))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.onOpenInstructorModal,
        className: "waves-effect waves-teal btn add-btn"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Location"));
    }
  }]);

  return InstructorListPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (InstructorListPage);

/***/ }),

/***/ "./components/Instructor/utils/sampleInstructorList.js":
/*!*************************************************************!*\
  !*** ./components/Instructor/utils/sampleInstructorList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  accountInfo: {
    lastName: 'Bezos',
    firstName: 'Jeff',
    email: 'jeff-bezos@gmail.com',
    gender: 'Male'
  },
  contactInfo: {
    phone: '1234567890',
    streetAddress: '1234 Test Road',
    city: 'Austin',
    state: 'TX',
    zip: '78751'
  },
  basicInfo: {
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
  accountInfo: {
    lastName: 'Chavarro',
    firstName: 'Christian',
    email: 'christian-chavarro@gmail.com',
    gender: 'Male'
  },
  contactInfo: {
    phone: '1234567890',
    streetAddress: '1234 Test Road',
    city: 'Miami',
    state: 'TX',
    zip: '78751'
  },
  basicInfo: {
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
  accountInfo: {
    lastName: 'Chavis',
    firstName: 'Cellena',
    email: 'cellena-chavis@gmail.com',
    gender: 'Male'
  },
  contactInfo: {
    phone: '1234567890',
    streetAddress: '1234 Test Road',
    city: 'Miami',
    state: 'TX',
    zip: '78751'
  },
  basicInfo: {
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
  accountInfo: {
    lastName: 'Smith',
    firstName: 'Will',
    email: 'will-smithgmail.com',
    gender: 'Male'
  },
  contactInfo: {
    phone: '1234567890',
    streetAddress: '1234 Test Road',
    city: 'Austin',
    state: 'TX',
    zip: '78751'
  },
  basicInfo: {
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
  accountInfo: {
    lastName: 'Lumberjack',
    firstName: 'Arnold',
    email: 'arnold-lumberjack@gmail.com',
    gender: 'Male'
  },
  contactInfo: {
    phone: '1234567890',
    streetAddress: '1234 Test Road',
    city: 'Austin',
    state: 'TX',
    zip: '78751'
  },
  basicInfo: {
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
  accountInfo: {
    lastName: 'Duck',
    firstName: 'Donald',
    email: 'donald-duck@gmail.com',
    gender: 'Male'
  },
  contactInfo: {
    phone: '1234567890',
    streetAddress: '1234 Test Road',
    city: 'Austin',
    state: 'TX',
    zip: '78751'
  },
  basicInfo: {
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

/***/ "./components/Location/components/LocationDetailsModal/index.js":
/*!**********************************************************************!*\
  !*** ./components/Location/components/LocationDetailsModal/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _SharedModalComponents_OwnerSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../SharedModalComponents/OwnerSection */ "./components/Location/components/SharedModalComponents/OwnerSection/index.js");
/* harmony import */ var _SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../SharedModalComponents/LocationContactInfo */ "./components/Location/components/SharedModalComponents/LocationContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../SharedModalComponents/LocationEmailSettings */ "./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js");
/* harmony import */ var _SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../SharedModalComponents/LocationBranding */ "./components/Location/components/SharedModalComponents/LocationBranding/index.js");
/* harmony import */ var _NewLocationModal_utils_sampleOwners__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../NewLocationModal/utils/sampleOwners */ "./components/Location/components/NewLocationModal/utils/sampleOwners.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");











/* eslint-disable array-callback-return */










 // TODO: Render only one instance of this modal

var LocationDetailsModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(LocationDetailsModal, _React$Component);

  function LocationDetailsModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LocationDetailsModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(LocationDetailsModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentWillReceiveProps", function (nextProps) {
      if (!_this.state.originalLocation || nextProps.location.id !== _this.state.originalLocation.id) {
        var _nextProps$location = nextProps.location;
        _nextProps$location = _nextProps$location === void 0 ? {} : _nextProps$location;
        var owner = _nextProps$location.owner,
            id = _nextProps$location.id,
            locationContactInfo = _nextProps$location.locationContactInfo,
            locationEmailSettings = _nextProps$location.locationEmailSettings,
            locationBranding = _nextProps$location.locationBranding;
        var updatedLocation = {
          owner: owner,
          id: id,
          locationContactInfo: locationContactInfo,
          locationEmailSettings: locationEmailSettings,
          locationBranding: locationBranding
        };
        var originalLocationState = _this.state.originalLocation;
        var originalLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(originalLocationState, {
          $merge: nextProps.location
        });

        _this.setState({
          originalLocation: originalLocation,
          updatedLocation: updatedLocation
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenUserListModal", function () {
      return _this.setState({
        userListModalOpen: true,
        changeModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseUserListModal", function () {
      return _this.setState({
        userListModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenChangeModal", function () {
      return _this.setState({
        changeModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseChangeModal", function () {
      return _this.setState({
        changeModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetValidation", function (validation, cb) {
      return _this.setState({
        validation: validation
      }, cb);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var updatedLocation, _this$props, onSaveLocationChanges, onSaveLocationError, onClose, valid;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                updatedLocation = _this.state.updatedLocation;
                _this$props = _this.props, onSaveLocationChanges = _this$props.onSaveLocationChanges, onSaveLocationError = _this$props.onSaveLocationError, onClose = _this$props.onClose; // const valid = true;

                _context.next = 5;
                return Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_20__["nestedEditFieldValidation"])(_this.state, _this.state.updatedLocation, _this.onSetValidation, _this.props.onSetLocationValidation);

              case 5:
                valid = _context.sent;

                if (valid) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", onSaveLocationError());

              case 8:
                onSaveLocationChanges(updatedLocation);
                return _context.abrupt("return", onClose());

              case 10:
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "initialLocationMount", function () {
      return _this.state.originalLocation.id !== _this.props.location.id;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDetailsChange", function (event, name, stateKey) {
      var previousLocationState = _this.state.updatedLocation;
      var value;

      if (event.hex) {
        value = event.hex;
      } else if (event.target) {
        value = event.target.value;
      } else {
        value = event;
      }

      var updatedLocation;

      if (name === 'owner') {
        updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(previousLocationState, {
          owner: {
            $set: event
          }
        });
      } else {
        updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(previousLocationState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, stateKey, {
          $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value)
        }));
      }

      _this.setState({
        updatedLocation: updatedLocation
      });
    });

    _this.state = {
      owner: null,
      userListModalOpen: false,
      changeModalOpen: false,
      originalLocation: {
        id: '',
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
      },
      updatedLocation: {
        id: '',
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
      },
      validation: {
        locationContactInfo: {
          locationName: true,
          locationNickname: true,
          locationEmail: true
        },
        locationEmailSettings: {
          automatedEmailOrigin: true,
          automatedEmailSalutation: true
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
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LocationDetailsModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$location = this.props.location;
      _this$props$location = _this$props$location === void 0 ? {} : _this$props$location;
      var owner = _this$props$location.owner,
          id = _this$props$location.id,
          locationContactInfo = _this$props$location.locationContactInfo,
          locationEmailSettings = _this$props$location.locationEmailSettings,
          locationBranding = _this$props$location.locationBranding;
      var updatedLocation = {
        owner: owner,
        id: id,
        locationContactInfo: locationContactInfo,
        locationEmailSettings: locationEmailSettings,
        locationBranding: locationBranding
      };
      var originalLocationState = this.state.originalLocation;
      var originalLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(originalLocationState, {
        $merge: updatedLocation
      });
      this.setState({
        originalLocation: originalLocation,
        updatedLocation: updatedLocation
      }); // eslint-disable-line
    } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
    // This resets the component state to reflect the details of the next user the user clicks on

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          open = _this$props2.open,
          onClose = _this$props2.onClose,
          location = _this$props2.location;
      var owner = location.owner,
          locationContactInfo = location.locationContactInfo,
          locationEmailSettings = location.locationEmailSettings,
          locationBranding = location.locationBranding;
      var _this$state = this.state,
          _this$state$updatedLo = _this$state.updatedLocation,
          updatedOwner = _this$state$updatedLo.owner,
          updatedLocationContactInfo = _this$state$updatedLo.locationContactInfo,
          updatedLocationEmailSettings = _this$state$updatedLo.locationEmailSettings,
          updatedLocationBranding = _this$state$updatedLo.locationBranding,
          _this$state$validatio = _this$state.validation,
          locationContactInfoValidation = _this$state$validatio.locationContactInfo,
          locationEmailSettingsValidation = _this$state$validatio.locationEmailSettings,
          locationBrandingValidation = _this$state$validatio.locationBranding,
          userListModalOpen = _this$state.userListModalOpen,
          changeModalOpen = _this$state.changeModalOpen;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        className: "jsx-3756323712"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
        nestedModals: userListModalOpen || changeModalOpen,
        onOuterClick: onClose
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "modal_location_create",
        className: "jsx-3756323712" + " " + "modal modal-custom modal-custom-large modal-gray"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "card-modal card-main card grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "card-panel card-panel-title green lighten-1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-3756323712" + " " + "h2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3756323712" + " " + "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3756323712" + " " + "heading-block"
      }, "Edit Location")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          textAlign: 'right'
        },
        className: "jsx-3756323712" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3756323712" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-3756323712" + " " + "icon-location"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3756323712" + " " + "text-icon"
      }, "Location"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_OwnerSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
        owner: this.initialLocationMount() ? owner : updatedOwner,
        userList: _NewLocationModal_utils_sampleOwners__WEBPACK_IMPORTED_MODULE_19__["default"],
        handleDetailsChange: this.handleDetailsChange,
        userListModalOpen: userListModalOpen,
        changeModalOpen: changeModalOpen,
        onOpenUserListModal: this.onOpenUserListModal,
        onCloseUserListModal: this.onCloseUserListModal,
        onOpenChangeModal: this.onOpenChangeModal,
        onCloseChangeModal: this.onCloseChangeModal
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_16__["default"], {
        state: this.initialLocationMount() ? locationContactInfo : updatedLocationContactInfo,
        handleDetailsChange: this.handleDetailsChange,
        validation: locationContactInfoValidation,
        noColumn: true
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_17__["default"], {
        state: this.initialLocationMount() ? locationEmailSettings : updatedLocationEmailSettings,
        handleDetailsChange: this.handleDetailsChange,
        validation: locationEmailSettingsValidation,
        noColumn: true
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_18__["default"], {
        state: this.initialLocationMount() ? locationBranding : updatedLocationBranding,
        handleDetailsChange: this.handleDetailsChange,
        validation: locationBrandingValidation
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3756323712" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#!",
        onClick: onClose,
        className: "jsx-3756323712" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        style: {
          color: 'white'
        },
        onClick: this.onSubmit,
        className: "jsx-3756323712" + " " + "btn"
      }, "Save")))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3756323712"
      }, "h4.jsx-3756323712{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-3756323712{font-size:16px;color:#343434;}p.passage.jsx-3756323712{font-size:14px;}a.jsx-3756323712{color:#343434;}.overlay.jsx-3756323712{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.modal.jsx-3756323712{display:block;background-color:transparent;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-footer.jsx-3756323712{background-color:white;}.modal-custom.jsx-3756323712{opacity:1;visibility:visible;}.modal-full-size.jsx-3756323712{z-index:999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25EZXRhaWxzTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1JXLEFBR21DLEFBTUgsQUFJQSxBQUdELEFBR0MsQUFTRCxBQVNTLEFBR2IsQUFJRSxVQUhPLEVBSVIsRUE1QmIsQUFZK0IsQ0FuQmYsQUFJaEIsQUFNc0MsR0FoQm5CLEtBa0NuQixBQVFTLE1BbkNULEFBK0JBLENBS1EsS0ExQ3FCLENBMkNuQixPQWxCVSxDQW1CVCxJQTVCSCxLQTZCUixDQTVCVSxPQVNBLENBekJLLEFBaUJKLE9BU0MsRUFSSCxJQWpCVCxHQWtCZSxDQVFKLFNBQytHLEdBUjFILDBHQVNBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25EZXRhaWxzTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuXG5pbXBvcnQgT3duZXJTZWN0aW9uIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Pd25lclNlY3Rpb24nO1xuaW1wb3J0IExvY2F0aW9uQ29udGFjdEluZm8gZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9uQ29udGFjdEluZm8nO1xuaW1wb3J0IExvY2F0aW9uRW1haWxTZXR0aW5ncyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvTG9jYXRpb25FbWFpbFNldHRpbmdzJztcbmltcG9ydCBMb2NhdGlvbkJyYW5kaW5nIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbkJyYW5kaW5nJztcblxuaW1wb3J0IHNhbXBsZU93bmVycyBmcm9tICcuLi9OZXdMb2NhdGlvbk1vZGFsL3V0aWxzL3NhbXBsZU93bmVycyc7XG5pbXBvcnQgeyBuZXN0ZWRFZGl0RmllbGRWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmllbGRWYWxpZGF0aW9uJztcblxuLy8gVE9ETzogUmVuZGVyIG9ubHkgb25lIGluc3RhbmNlIG9mIHRoaXMgbW9kYWxcbmNsYXNzIExvY2F0aW9uRGV0YWlsc01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG93bmVyOiBudWxsLFxuICAgICAgdXNlckxpc3RNb2RhbE9wZW46IGZhbHNlLFxuICAgICAgY2hhbmdlTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIG9yaWdpbmFsTG9jYXRpb246IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBsb2NhdGlvbkNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgbG9jYXRpb25OYW1lOiAnJyxcbiAgICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiAnJyxcbiAgICAgICAgICBsb2NhdGlvbkVtYWlsOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblBob25lTnVtYmVyOiAnJyxcbiAgICAgICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblN0cmVldEFkZHJlc3M6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uQ2l0eTogJycsXG4gICAgICAgICAgbG9jYXRpb25TdGF0ZTogJycsXG4gICAgICAgICAgbG9jYXRpb25aaXA6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IHtcbiAgICAgICAgICBhdXRvbWF0ZWRFbWFpbE9yaWdpbjogJycsXG4gICAgICAgICAgYXV0b21hdGVkRW1haWxTYWx1dGF0aW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25CcmFuZGluZzoge1xuICAgICAgICAgIGxvY2F0aW9uVXJsOiAnJyxcbiAgICAgICAgICBoZWFkZXJDb2xvcjE6ICcnLFxuICAgICAgICAgIGhlYWRlckNvbG9yMjogJycsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRDb2xvcjogJycsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRBbHBoYTogJycsXG4gICAgICAgICAgaG9yaXpvbnRhbExvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICAgIHNxdWFyZUxvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJycsXG4gICAgICAgICAgYmFja2dyb3VuZEJsdXI6ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRPdmVybGF5QWxwaGE6ICcnLFxuICAgICAgICAgIHN0dWRlbnRXZWxjb21lVmlkZW86ICcnLFxuICAgICAgICAgIGluc3RydWN0b3JXZWxjb21lVmlkZW86ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZWRMb2NhdGlvbjoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGxvY2F0aW9uQ29udGFjdEluZm86IHtcbiAgICAgICAgICBsb2NhdGlvbk5hbWU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uTmlja25hbWU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uRW1haWw6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgIHdlYnNpdGU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uU3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgICAgbG9jYXRpb25DaXR5OiAnJyxcbiAgICAgICAgICBsb2NhdGlvblN0YXRlOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblppcDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uRW1haWxTZXR0aW5nczoge1xuICAgICAgICAgIGF1dG9tYXRlZEVtYWlsT3JpZ2luOiAnJyxcbiAgICAgICAgICBhdXRvbWF0ZWRFbWFpbFNhbHV0YXRpb246ICcnLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgICAgbG9jYXRpb25Vcmw6ICcnLFxuICAgICAgICAgIGhlYWRlckNvbG9yMTogJycsXG4gICAgICAgICAgaGVhZGVyQ29sb3IyOiAnJyxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZEFscGhhOiAnJyxcbiAgICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgICAgc3F1YXJlTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQmx1cjogJycsXG4gICAgICAgICAgYmFja2dyb3VuZE92ZXJsYXlBbHBoYTogJycsXG4gICAgICAgICAgc3R1ZGVudFdlbGNvbWVWaWRlbzogJycsXG4gICAgICAgICAgaW5zdHJ1Y3RvcldlbGNvbWVWaWRlbzogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBsb2NhdGlvbkNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgbG9jYXRpb25OYW1lOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uTmlja25hbWU6IHRydWUsXG4gICAgICAgICAgbG9jYXRpb25FbWFpbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgICAgYXV0b21hdGVkRW1haWxPcmlnaW46IHRydWUsXG4gICAgICAgICAgYXV0b21hdGVkRW1haWxTYWx1dGF0aW9uOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgICAgbG9jYXRpb25Vcmw6IHRydWUsXG4gICAgICAgICAgaGVhZGVyQ29sb3IxOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckNvbG9yMjogdHJ1ZSxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZENvbG9yOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQWxwaGE6IHRydWUsXG4gICAgICAgICAgaG9yaXpvbnRhbExvZ29WYXJpYXRpb246IHRydWUsXG4gICAgICAgICAgc3F1YXJlTG9nb1ZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gICAgICAgICAgYmFja2dyb3VuZEJsdXI6IHRydWUsXG4gICAgICAgICAgYmFja2dyb3VuZE92ZXJsYXlBbHBoYTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbG9jYXRpb246IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHt9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVwZGF0ZWRMb2NhdGlvbiA9IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfTtcbiAgICBjb25zdCB7IG9yaWdpbmFsTG9jYXRpb246IG9yaWdpbmFsTG9jYXRpb25TdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBvcmlnaW5hbExvY2F0aW9uID0gdXBkYXRlKG9yaWdpbmFsTG9jYXRpb25TdGF0ZSwge1xuICAgICAgJG1lcmdlOiB1cGRhdGVkTG9jYXRpb24sXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9yaWdpbmFsTG9jYXRpb24sIHVwZGF0ZWRMb2NhdGlvbiB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgLy8gVE9ETzogVGhpcyBzZWVtcyB0byBiZSB3b3JraW5nIHdlbGwgLSBjb25maXJtIHRoYXQgb25seSBvbmUgaXNudGFuY2Ugb2YgdGhpcyBlZGl0IG1vZGFsIGlzIG9wZW5pbmcgb24gdGhlIHVzZXIgZWRpdCBwYWdlXG4gIC8vIFRoaXMgcmVzZXRzIHRoZSBjb21wb25lbnQgc3RhdGUgdG8gcmVmbGVjdCB0aGUgZGV0YWlscyBvZiB0aGUgbmV4dCB1c2VyIHRoZSB1c2VyIGNsaWNrcyBvblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIGlmICgoIXRoaXMuc3RhdGUub3JpZ2luYWxMb2NhdGlvbiB8fCBuZXh0UHJvcHMubG9jYXRpb24uaWQgIT09IHRoaXMuc3RhdGUub3JpZ2luYWxMb2NhdGlvbi5pZCkpIHtcbiAgICAgIGNvbnN0IHsgbG9jYXRpb246IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHt9IH0gPSBuZXh0UHJvcHM7XG4gICAgICBjb25zdCB1cGRhdGVkTG9jYXRpb24gPSB7IG93bmVyLCBpZCwgbG9jYXRpb25Db250YWN0SW5mbywgbG9jYXRpb25FbWFpbFNldHRpbmdzLCBsb2NhdGlvbkJyYW5kaW5nIH07XG4gICAgICBjb25zdCB7IG9yaWdpbmFsTG9jYXRpb246IG9yaWdpbmFsTG9jYXRpb25TdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTG9jYXRpb24gPSB1cGRhdGUob3JpZ2luYWxMb2NhdGlvblN0YXRlLCB7XG4gICAgICAgICRtZXJnZTogbmV4dFByb3BzLmxvY2F0aW9uLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JpZ2luYWxMb2NhdGlvbiwgdXBkYXRlZExvY2F0aW9uIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVzZXJMaXN0TW9kYWwgaXMgdXNlZCB0byBhc3NpZ24gYW5kIHJlYXNzaWduIHVzZXJzIHRvIGEgbmV3IGxvY2F0aW9uXG4gIG9uT3BlblVzZXJMaXN0TW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlckxpc3RNb2RhbE9wZW46IHRydWUsIGNoYW5nZU1vZGFsT3BlbjogZmFsc2UgfSk7XG4gIG9uQ2xvc2VVc2VyTGlzdE1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJMaXN0TW9kYWxPcGVuOiBmYWxzZSB9KTtcblxuICAvLyBDaGFuZ2VNb2RhbCBwb3BzIHVwIHdoZW4gdXNlciBjbGlja3Mgb24gc2V0IG93bmVyIGFuZCBhc2tzIGZvciBjb25maXJtYXRpb24gdGhhdCB0aGV5IHdpc2ggdG8gYXNzaWduIGEgbmV3IG93bmVyIHRvIHRoZSBuZXcgbG9jYXRpb25cbiAgb25PcGVuQ2hhbmdlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2hhbmdlTW9kYWxPcGVuOiB0cnVlIH0pO1xuICBvbkNsb3NlQ2hhbmdlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2hhbmdlTW9kYWxPcGVuOiBmYWxzZSB9KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbnRvIG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZUxvY2F0aW9uQ2hhbmdlcyBwYXNzZWQgZG93biBmcm9tIHRoZSBjb250YWluZXIgbGV2ZWxcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgdXBkYXRlZExvY2F0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTG9jYXRpb25DaGFuZ2VzLCBvblNhdmVMb2NhdGlvbkVycm9yLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNvbnN0IHZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZCA9IGF3YWl0IG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZS51cGRhdGVkTG9jYXRpb24sIHRoaXMub25TZXRWYWxpZGF0aW9uLCB0aGlzLnByb3BzLm9uU2V0TG9jYXRpb25WYWxpZGF0aW9uKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgIH1cbiAgICBvblNhdmVMb2NhdGlvbkNoYW5nZXModXBkYXRlZExvY2F0aW9uKTtcbiAgICByZXR1cm4gb25DbG9zZSgpO1xuICB9XG5cbiAgaW5pdGlhbExvY2F0aW9uTW91bnQgPSAoKSA9PiB0aGlzLnN0YXRlLm9yaWdpbmFsTG9jYXRpb24uaWQgIT09IHRoaXMucHJvcHMubG9jYXRpb24uaWQ7XG5cbiAgLy8gV2UgcHVsbCB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGZpZWxkIHR5cGUgdGhlbiBtZXJnZSB0aGF0IHVwZGF0ZWQga2V5L3ZhbHVlIHBhaXIgd2l0aCB0aGUgbGFzdCB2ZXJzaW9uIG9mIGNvbXBvbmVudCBzdGF0ZVxuICBoYW5kbGVEZXRhaWxzQ2hhbmdlID0gKGV2ZW50LCBuYW1lLCBzdGF0ZUtleSkgPT4ge1xuICAgIGNvbnN0IHsgdXBkYXRlZExvY2F0aW9uOiBwcmV2aW91c0xvY2F0aW9uU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChldmVudC5oZXgpIHtcbiAgICAgIHZhbHVlID0gZXZlbnQuaGV4O1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudDtcbiAgICB9XG4gICAgbGV0IHVwZGF0ZWRMb2NhdGlvbjtcbiAgICBpZiAobmFtZSA9PT0gJ293bmVyJykge1xuICAgICAgdXBkYXRlZExvY2F0aW9uID0gdXBkYXRlKHByZXZpb3VzTG9jYXRpb25TdGF0ZSwge1xuICAgICAgICBvd25lcjoge1xuICAgICAgICAgICRzZXQ6IGV2ZW50LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZWRMb2NhdGlvbiA9IHVwZGF0ZShwcmV2aW91c0xvY2F0aW9uU3RhdGUsIHtcbiAgICAgICAgW3N0YXRlS2V5XToge1xuICAgICAgICAgICRtZXJnZTogeyBbbmFtZV06IHZhbHVlIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0ZWRMb2NhdGlvbiB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4sIG9uQ2xvc2UsIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3duZXIsIGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uRW1haWxTZXR0aW5ncywgbG9jYXRpb25CcmFuZGluZyB9ID0gbG9jYXRpb247XG4gICAgY29uc3Qge1xuICAgICAgdXBkYXRlZExvY2F0aW9uOiB7IG93bmVyOiB1cGRhdGVkT3duZXIsIGxvY2F0aW9uQ29udGFjdEluZm86IHVwZGF0ZWRMb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IHVwZGF0ZWRMb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmc6IHVwZGF0ZWRMb2NhdGlvbkJyYW5kaW5nIH0sXG4gICAgICB2YWxpZGF0aW9uOiB7IGxvY2F0aW9uQ29udGFjdEluZm86IGxvY2F0aW9uQ29udGFjdEluZm9WYWxpZGF0aW9uLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IGxvY2F0aW9uRW1haWxTZXR0aW5nc1ZhbGlkYXRpb24sIGxvY2F0aW9uQnJhbmRpbmc6IGxvY2F0aW9uQnJhbmRpbmdWYWxpZGF0aW9uIH0sXG4gICAgICB1c2VyTGlzdE1vZGFsT3BlbiwgY2hhbmdlTW9kYWxPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG5lc3RlZE1vZGFscz17dXNlckxpc3RNb2RhbE9wZW4gfHwgY2hhbmdlTW9kYWxPcGVufSBvbk91dGVyQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9sb2NhdGlvbl9jcmVhdGVcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1jdXN0b20gbW9kYWwtY3VzdG9tLWxhcmdlIG1vZGFsLWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBncmV5IGxpZ2h0ZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZSBncmVlbiBsaWdodGVuLTEgd2hpdGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ibG9ja1wiPkVkaXQgTG9jYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9jYXRpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pY29uXCI+TG9jYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3duZXJTZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gb3duZXIgOiB1cGRhdGVkT3duZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdD17c2FtcGxlT3duZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RNb2RhbE9wZW49e3VzZXJMaXN0TW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9kYWxPcGVuPXtjaGFuZ2VNb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Vc2VyTGlzdE1vZGFsPXt0aGlzLm9uT3BlblVzZXJMaXN0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlVXNlckxpc3RNb2RhbD17dGhpcy5vbkNsb3NlVXNlckxpc3RNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkNoYW5nZU1vZGFsPXt0aGlzLm9uT3BlbkNoYW5nZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZUNoYW5nZU1vZGFsPXt0aGlzLm9uQ2xvc2VDaGFuZ2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkNvbnRhY3RJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gbG9jYXRpb25Db250YWN0SW5mbyA6IHVwZGF0ZWRMb2NhdGlvbkNvbnRhY3RJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbj17bG9jYXRpb25Db250YWN0SW5mb1ZhbGlkYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRW1haWxTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuaW5pdGlhbExvY2F0aW9uTW91bnQoKSA/IGxvY2F0aW9uRW1haWxTZXR0aW5ncyA6IHVwZGF0ZWRMb2NhdGlvbkVtYWlsU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPXtsb2NhdGlvbkVtYWlsU2V0dGluZ3NWYWxpZGF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Db2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uQnJhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gbG9jYXRpb25CcmFuZGluZyA6IHVwZGF0ZWRMb2NhdGlvbkJyYW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURldGFpbHNDaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPXtsb2NhdGlvbkJyYW5kaW5nVmFsaWRhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gb25DbGljaz17dGhpcy5vblN1Ym1pdH0+U2F2ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjI4cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMS41MnJlbSAwIC45MTJyZW0gMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0MzQzNDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwLnBhc3NhZ2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0MzQzNDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1mdWxsLXNpemUge1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkxvY2F0aW9uRGV0YWlsc01vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TZXRMb2NhdGlvblZhbGlkYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkRldGFpbHNNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/LocationDetailsModal/index.js */"));
    }
  }]);

  return LocationDetailsModal;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

LocationDetailsModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  onSetLocationValidation: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationDetailsModal);

/***/ }),

/***/ "./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js":
/*!**********************************************************************************************!*\
  !*** ./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/stateOptions */ "./components/utils/stateOptions.js");
/* harmony import */ var _utils_genderOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/genderOptions */ "./components/utils/genderOptions.js");







var OwnerContactInfo = function OwnerContactInfo(_ref) {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Owner Contact Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "first-name",
    name: "firstName",
    value: firstName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'firstName', 'ownerContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "first-name"
  }, "First Name*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "last-name",
    name: "lastName",
    value: lastName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'lastName', 'ownerContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "last-name"
  }, "Last Name*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "email",
    name: "email",
    value: email,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'email', 'ownerContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "email"
  }, "Email Address*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 l7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(gender, _utils_genderOptions__WEBPACK_IMPORTED_MODULE_5__["default"]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'gender', 'ownerContactInfo');
    },
    options: _utils_genderOptions__WEBPACK_IMPORTED_MODULE_5__["default"],
    label: "Gender*",
    stateKey: "gender",
    dropdownKey: "gender"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "tel",
    id: "phone",
    name: "phone",
    value: phone,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'phone', 'ownerContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "phone"
  }, "Phone (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "street-address",
    name: "streetAddress",
    value: streetAddress,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'streetAddress', 'ownerContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "street-address"
  }, "Street Address (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "city",
    name: "city",
    value: city,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'city', 'ownerContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "city"
  }, "City (optional)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m6 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(state, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'state', 'ownerContactInfo');
    },
    options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: "State (optional)",
    stateKey: "state",
    dropdownKey: "state"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m6 l7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "tel",
    id: "zip",
    name: "zip",
    value: zip,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'zip', 'ownerContactInfo');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    htmlFor: "zip"
  }, "Zip (optional)"))))))));
};

OwnerContactInfo.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OwnerContactInfo);

/***/ }),

/***/ "./components/Location/components/NewLocationModal/index.js":
/*!******************************************************************!*\
  !*** ./components/Location/components/NewLocationModal/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _components_OwnerContactInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/OwnerContactInfo */ "./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../SharedModalComponents/LocationContactInfo */ "./components/Location/components/SharedModalComponents/LocationContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../SharedModalComponents/LocationEmailSettings */ "./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js");
/* harmony import */ var _SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../SharedModalComponents/LocationBranding */ "./components/Location/components/SharedModalComponents/LocationBranding/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");
/* harmony import */ var _utils_initialState__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/initialState */ "./components/Location/utils/initialState.js");











/* eslint-disable no-unused-vars */












var NewLocationModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(NewLocationModal, _React$Component);

  function NewLocationModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NewLocationModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(NewLocationModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetValidation", function (validation, cb) {
      return _this.setState({
        validation: validation
      }, cb);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var _this$state, owner, locationContactInfo, locationEmailSettings, locationBranding, _this$props, onSaveNewLocation, onSaveLocationError, onAddNewLocation, _this$props$fromInstr, fromInstructorPage, valid, postBody;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, owner = _this$state.owner, locationContactInfo = _this$state.locationContactInfo, locationEmailSettings = _this$state.locationEmailSettings, locationBranding = _this$state.locationBranding;
                _this$props = _this.props, onSaveNewLocation = _this$props.onSaveNewLocation, onSaveLocationError = _this$props.onSaveLocationError, onAddNewLocation = _this$props.onAddNewLocation, _this$props$fromInstr = _this$props.fromInstructorPage, fromInstructorPage = _this$props$fromInstr === void 0 ? false : _this$props$fromInstr; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
                // const valid = true;

                _context.next = 5;
                return Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_19__["nestedCreateFieldValidation"])(_this.state, _this.onSetValidation, function (validation) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onResetLocation", function () {
      return _this.setState(_utils_initialState__WEBPACK_IMPORTED_MODULE_20__["default"]);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetLocation();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDetailsChange", function (event, name, section) {
      var value;

      if (event.hex) {
        value = event.hex;
      } else {
        value = event.target ? event.target.value : event;
      }

      var updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_12___default()(_this.state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, section, {
        $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value)
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


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NewLocationModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var _this$state2 = this.state,
          ownerContactInfo = _this$state2.ownerContactInfo,
          locationEmailSettings = _this$state2.locationEmailSettings,
          locationContactInfo = _this$state2.locationContactInfo,
          locationBranding = _this$state2.locationBranding;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "modal_user_create",
        className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          backgroundColor: '#31837a',
          color: '#fff'
        },
        className: "jsx-2557376288" + " " + "card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: 'block'
        },
        className: "jsx-2557376288" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-2557376288" + " " + "h2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2557376288" + " " + "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2557376288" + " " + "heading-block"
      }, "Create New Owner")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2557376288" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-2557376288" + " " + "icon-owner"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2557376288" + " " + "text-icon"
      }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_OwnerContactInfo__WEBPACK_IMPORTED_MODULE_15__["default"], {
        state: ownerContactInfo,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_16__["default"], {
        state: locationContactInfo,
        handleDetailsChange: this.handleDetailsChange
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_17__["default"], {
        state: locationEmailSettings,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_18__["default"], {
        state: locationBranding,
        handleDetailsChange: this.handleDetailsChange
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2557376288" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#!",
        onClick: this.onCloseModal,
        className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.onSubmit,
        className: "jsx-2557376288" + " " + "btn"
      }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2557376288"
      }, ".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-2557376288{margin:0;border-radius:6px;}.modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2557376288{opacity:1;visibility:visible;}.modal-footer.jsx-2557376288{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTmV3TG9jYXRpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTlcsQUFHZ0MsQUFTTixBQUlLLEFBU0osQUFJYSxTQWhCTCxDQWFDLElBVEksQ0FiYSxRQTBCdEMsSUFoQkEsRUFhQSxRQVRvQixXQWJaLE1BQ0UsQ0FhQSxPQVpDLENBYUMsUUFaSCxFQWFFLEtBWkksSUFhMkcsU0FaMUgsb0dBYUEiLCJmaWxlIjoiL1ZvbHVtZXMvSEREL1NpdGVzL2NsZWFyY2hvaWNldGVzdHByZXAvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvTG9jYXRpb24vY29tcG9uZW50cy9OZXdMb2NhdGlvbk1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuXG5pbXBvcnQgT3duZXJDb250YWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvT3duZXJDb250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25Db250YWN0SW5mbyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvTG9jYXRpb25Db250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25FbWFpbFNldHRpbmdzIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbkVtYWlsU2V0dGluZ3MnO1xuaW1wb3J0IExvY2F0aW9uQnJhbmRpbmcgZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9uQnJhbmRpbmcnO1xuXG5pbXBvcnQgeyBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuLi8uLi91dGlscy9pbml0aWFsU3RhdGUnO1xuXG5jbGFzcyBOZXdMb2NhdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG93bmVyQ29udGFjdEluZm86IHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIHppcDogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgIGF1dG9tYXRlZEVtYWlsT3JpZ2luQWRkcmVzczogJycsXG4gICAgICAgIGF1dG9tYXRlZEVtYWlsU2FsdXRhdGlvbjogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25Db250YWN0SW5mbzoge1xuICAgICAgICBsb2NhdGlvbk5hbWU6ICcnLFxuICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiAnJyxcbiAgICAgICAgbG9jYXRpb25FbWFpbDogJycsXG4gICAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgICAgbG9jYXRpb25TdHJlZXRBZGRyZXNzOiAnJyxcbiAgICAgICAgbG9jYXRpb25DaXR5OiAnJyxcbiAgICAgICAgbG9jYXRpb25TdGF0ZTogJycsXG4gICAgICAgIGxvY2F0aW9uWmlwOiAnJyxcbiAgICAgIH0sXG4gICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgIGxvY2F0aW9uVXJsOiAnJyxcbiAgICAgICAgaGVhZGVyQ29sb3IxOiAnJyxcbiAgICAgICAgaGVhZGVyQ29sb3IyOiAnJyxcbiAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRDb2xvcjogJycsXG4gICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQWxwaGE6ICcnLFxuICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgIHNxdWFyZUxvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxuICAgICAgICBiYWNrZ3JvdW5kQmx1cjogJycsXG4gICAgICAgIGJhY2tncm91bmRPdmVybGF5QWxwaGE6ICcnLFxuICAgICAgICBzdHVkZW50V2VsY29tZVZpZGVvOiAnJyxcbiAgICAgICAgaW5zdHJ1Y3RvcldlbGNvbWVWaWRlbzogJycsXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBvd25lckNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgZmlyc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGxhc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgICAgYXV0b21hdGVkRW1haWxPcmlnaW5BZGRyZXNzOiB0cnVlLFxuICAgICAgICAgIGF1dG9tYXRlZEVtYWlsU2FsdXRhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25Db250YWN0SW5mbzoge1xuICAgICAgICAgIGxvY2F0aW9uTmFtZTogdHJ1ZSxcbiAgICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uRW1haWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uQnJhbmRpbmc6IHtcbiAgICAgICAgICBsb2NhdGlvblVybDogdHJ1ZSxcbiAgICAgICAgICBoZWFkZXJDb2xvcjE6IHRydWUsXG4gICAgICAgICAgaGVhZGVyQ29sb3IyOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQ29sb3I6IHRydWUsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRBbHBoYTogdHJ1ZSxcbiAgICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBzcXVhcmVMb2dvVmFyaWF0aW9uOiB0cnVlLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQmx1cjogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kT3ZlcmxheUFscGhhOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgaW50byBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZU5ld0xvY2F0aW9uIHBhc3NlZCBkb3duIGZyb20gdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBvd25lciwgbG9jYXRpb25Db250YWN0SW5mbywgbG9jYXRpb25FbWFpbFNldHRpbmdzLCBsb2NhdGlvbkJyYW5kaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTmV3TG9jYXRpb24sIG9uU2F2ZUxvY2F0aW9uRXJyb3IsIG9uQWRkTmV3TG9jYXRpb24sIGZyb21JbnN0cnVjdG9yUGFnZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIE5PVEU6IFN3YXAgb3V0IHdoYXQgaW5zdGFuY2Ugb2YgdmFsaWQgaXMgYWN0aXZlIGlmIHlvdSB3YW50IHRvIHRlc3Qgc2F2aW5nIGEgbmV3IGxvY2F0aW9uIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgdmFsaWRhdGlvblxuICAgIC8vIGNvbnN0IHZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZCA9IGF3YWl0IG5lc3RlZENyZWF0ZUZpZWxkVmFsaWRhdGlvbih0aGlzLnN0YXRlLCB0aGlzLm9uU2V0VmFsaWRhdGlvbiwgKHZhbGlkYXRpb24pID0+IGNvbnNvbGUud2FybigndmFsaWRhdGlvbicsIHZhbGlkYXRpb24pKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgICAgY29uc29sZS53YXJuKCdub3QgdmFsaWQnKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdEJvZHkgPSB7IGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uRW1haWxTZXR0aW5ncywgbG9jYXRpb25CcmFuZGluZywgb3duZXIgfTtcbiAgICBpZiAoZnJvbUluc3RydWN0b3JQYWdlKSB7XG4gICAgICBvblNhdmVOZXdMb2NhdGlvbihwb3N0Qm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQWRkTmV3TG9jYXRpb24ocG9zdEJvZHkpO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oJ3N0dWJiZWQgb3V0IHNhdmUgZnVuY3Rpb24nKTtcbiAgICB0aGlzLm9uQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgb25SZXNldExvY2F0aW9uID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldExvY2F0aW9uKCk7XG4gIH1cblxuICAvLyBXZSBwdWxsIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgZmllbGQgdHlwZSB0aGVuIG1lcmdlIHRoYXQgdXBkYXRlZCBrZXkvdmFsdWUgcGFpciB3aXRoIHRoZSBsYXN0IHZlcnNpb24gb2YgY29tcG9uZW50IHN0YXRlXG4gIGhhbmRsZURldGFpbHNDaGFuZ2UgPSAoZXZlbnQsIG5hbWUsIHNlY3Rpb24pID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGV2ZW50LmhleCkge1xuICAgICAgdmFsdWUgPSBldmVudC5oZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogZXZlbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZSh0aGlzLnN0YXRlLCB7XG4gICAgICBbc2VjdGlvbl06IHsgJG1lcmdlOiB7IFtuYW1lXTogdmFsdWUgfSB9LFxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlZFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBvd25lckNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3VzZXJfY3JlYXRlXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWN1c3RvbS1sYXJnZSBtb2RhbC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmQtbWFpbiBjYXJkIGdyZXkgbGlnaHRlbi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMzMTgzN2EnLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYmxvY2tcIj5DcmVhdGUgTmV3IE93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tb3duZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPk93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8T3duZXJDb250YWN0SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17b3duZXJDb250YWN0SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkNvbnRhY3RJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtsb2NhdGlvbkNvbnRhY3RJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVtYWlsU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2xvY2F0aW9uRW1haWxTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkJyYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtsb2NhdGlvbkJyYW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5OZXdMb2NhdGlvbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0xvY2F0aW9uTW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/NewLocationModal/index.js */"));
    }
  }]);

  return NewLocationModal;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

NewLocationModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NewLocationModal);

/***/ }),

/***/ "./components/Location/components/NewLocationModal/utils/sampleOwners.js":
/*!*******************************************************************************!*\
  !*** ./components/Location/components/NewLocationModal/utils/sampleOwners.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sampleOwners = [{
  id: 1,
  firstName: 'Ben',
  lastName: 'Smith',
  email: 'ben-smith@gmail.com'
}, {
  id: 2,
  firstName: 'Christian',
  lastName: 'Chavarro',
  email: 'chavarro-christian@gmail.com'
}, {
  id: 3,
  firstName: 'John',
  lastName: 'Cena',
  email: 'john-cena@gmail.com'
}, {
  id: 4,
  firstName: 'Will',
  lastName: 'Smith',
  email: 'will.smith@gmail.com'
}, {
  id: 5,
  firstName: 'Arnold',
  lastName: 'Lumberjack',
  email: 'arnold-lumberjack@gmail.com'
}, {
  id: 6,
  firstName: 'Goofy',
  lastName: 'Dog',
  email: 'goofy.dog@gmail.com'
}];
/* harmony default export */ __webpack_exports__["default"] = (sampleOwners);

/***/ }),

/***/ "./components/Location/components/SelectedUserRow/index.js":
/*!*****************************************************************!*\
  !*** ./components/Location/components/SelectedUserRow/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getUserInitials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/getUserInitials */ "./components/utils/getUserInitials.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Location/components/SelectedUserRow/styles/index.js");





var SelectedUserRow = function SelectedUserRow(_ref) {
  var user = _ref.user,
      onOpenChangeModal = _ref.onOpenChangeModal;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onOpenChangeModal,
    className: "owner-box card-panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-circle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "initials"
  }, Object(_utils_getUserInitials__WEBPACK_IMPORTED_MODULE_2__["getTutorInitials"])(user))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "h3"
  }, user.lastName, ", ", user.firstName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(user.email)
  }, user.email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-owner"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Owner")))));
};

SelectedUserRow.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onOpenChangeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SelectedUserRow);

/***/ }),

/***/ "./components/Location/components/SelectedUserRow/styles/index.js":
/*!************************************************************************!*\
  !*** ./components/Location/components/SelectedUserRow/styles/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SelectedUserRowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SelectedUserRowWrapper",
  componentId: "sc-12bjge9-0"
})(["background-color:#31837a;color:#fff;.user-circle{background-color:#31837a;color:#fff;}:hover{cursor:pointer;background-color:#24645c!important;.user-circle{background-color:#24645c!important;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (SelectedUserRowWrapper);

/***/ }),

/***/ "./components/Location/components/SharedModalComponents/LocationBranding/index.js":
/*!****************************************************************************************!*\
  !*** ./components/Location/components/SharedModalComponents/LocationBranding/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");








/* eslint-disable react/jsx-indent */





var LocationBranding =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LocationBranding, _React$Component);

  function LocationBranding(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocationBranding);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LocationBranding).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetColorPicker", function (colorPickerField) {
      return _this.setState({
        colorPickerOpen: true,
        colorPickerField: colorPickerField
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseColorPicker", function () {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LocationBranding, [{
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
      }, "Header Color 1*"), colorPickerOpen && colorPickerField === 'headerColor1' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onOuterClick: this.onCloseColorPicker
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["ChromePicker"], {
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
      }, "Header Color 2*"), colorPickerOpen && colorPickerField === 'headerColor2' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onOuterClick: this.onCloseColorPicker
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["ChromePicker"], {
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
      }, "Header Logo Background Color*"), colorPickerOpen && colorPickerField === 'headerLogoBackgroundColor' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onOuterClick: this.onCloseColorPicker
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_9__["ChromePicker"], {
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

LocationBranding.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationBranding);

/***/ }),

/***/ "./components/Location/components/SharedModalComponents/LocationContactInfo/index.js":
/*!*******************************************************************************************!*\
  !*** ./components/Location/components/SharedModalComponents/LocationContactInfo/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/stateOptions */ "./components/utils/stateOptions.js");






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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(locationState, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationState', 'locationContactInfo');
    },
    options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
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

LocationContactInfo.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationContactInfo);

/***/ }),

/***/ "./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js":
/*!*********************************************************************************************!*\
  !*** ./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



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

LocationEmailSettings.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationEmailSettings);

/***/ }),

/***/ "./components/Location/components/SharedModalComponents/OwnerSection/index.js":
/*!************************************************************************************!*\
  !*** ./components/Location/components/SharedModalComponents/OwnerSection/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Modal */ "./components/Modal/index.js");
/* harmony import */ var _UserListModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserListModal */ "./components/Location/components/UserListModal/index.js");
/* harmony import */ var _SelectedUserRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SelectedUserRow */ "./components/Location/components/SelectedUserRow/index.js");






var OwnerSection = function OwnerSection(_ref) {
  var owner = _ref.owner,
      userList = _ref.userList,
      handleDetailsChange = _ref.handleDetailsChange,
      userListModalOpen = _ref.userListModalOpen,
      changeModalOpen = _ref.changeModalOpen,
      onOpenChangeModal = _ref.onOpenChangeModal,
      onCloseChangeModal = _ref.onCloseChangeModal,
      onOpenUserListModal = _ref.onOpenUserListModal,
      onCloseUserListModal = _ref.onCloseUserListModal;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: changeModalOpen,
    onClose: onCloseChangeModal,
    onConfirm: onOpenUserListModal,
    header: "Are You Sure?",
    body: "Do you want to change the owner for this location?"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserListModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: userListModalOpen,
    onClose: onCloseUserListModal,
    userList: userList,
    onSubmit: handleDetailsChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Owner"), owner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectedUserRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user: owner,
    onOpenChangeModal: onOpenChangeModal
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-box-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: onOpenUserListModal,
    className: "btn-floating waves-effect waves-light green lighten-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "add"))))));
};

OwnerSection.propTypes = {
  owner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  userList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  changeModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  userListModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenChangeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onCloseChangeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenUserListModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onCloseUserListModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OwnerSection);

/***/ }),

/***/ "./components/Location/components/UserListModal/index.js":
/*!***************************************************************!*\
  !*** ./components/Location/components/UserListModal/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _UserRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../UserRow */ "./components/Location/components/UserRow/index.js");









/* eslint-disable react/no-array-index-key */






var UserListModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UserListModal, _React$Component);

  function UserListModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserListModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserListModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSelectUser", function (selectedUser) {
      return _this.setState({
        selectedUser: selectedUser
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetUser", function () {
      var selectedUser = _this.state.selectedUser;
      var _this$props = _this.props,
          onSubmit = _this$props.onSubmit,
          onClose = _this$props.onClose;
      onSubmit(selectedUser, 'owner', null);

      _this.setState({
        selectedUser: null
      }, onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        selectedUser: null
      }, onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapUsers", function () {
      return _this.props.userList.map(function (user, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_UserRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
          user: user,
          key: index,
          index: index,
          onSelectUser: function onSelectUser() {
            return _this.onSelectUser(user);
          },
          selectedUser: _this.state.selectedUser
        });
      });
    });

    _this.state = {
      selectedUser: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserListModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_Practice1",
        className: "jsx-318393204" + " " + "modal modal-custom modal-practice"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "card-modal card-course card-main card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "card-panel green lighten-1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          flex: '1 0 83.333333%'
        },
        className: "jsx-318393204" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-318393204" + " " + "h1"
      }, "Assign Owner")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textAlign: 'right'
        },
        className: "jsx-318393204" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-318393204" + " " + "panel-link close modal-close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-318393204" + " " + "icon-close"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "card-body"
      }, this.mapUsers()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "meta-info"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318393204" + " " + "col s6 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-318393204" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onSetUser,
        style: {
          color: 'white'
        },
        className: "jsx-318393204" + " " + "btn"
      }, "Save"))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "318393204"
      }, "h4.jsx-318393204{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-318393204{font-size:16px;color:#343434;}p.passage.jsx-318393204{font-size:14px;}a.jsx-318393204{color:#343434;}.overlay.jsx-318393204{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.modal.jsx-318393204{display:block;background-color:transparent;position:absolute;top:10%;right:10%;left:10%;}.modal-custom.jsx-318393204{opacity:1;visibility:visible;}.modal-footer.jsx-318393204{background-color:white;}.modal-full-size.jsx-318393204{z-index:1999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvVXNlckxpc3RNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR2EsQUFHNkIsQUFNSCxBQUlBLEFBR0QsQUFHQyxBQVNELEFBUUosQUFJYSxBQUdWLFVBTk0sR0FPUixDQTNCYixBQVkrQixDQW5CZixBQUloQixBQU1zQyxHQWhCbkIsS0FxQ25CLENBSVMsS0FsQ1QsQUEyQkEsRUFRUSxJQXpDcUIsRUEwQ25CLE1BakJVLEVBa0JULEdBM0JILE1BQ0UsQUEyQlYsT0FsQlUsQ0F6QkssQUFpQkosT0FTQyxFQVJILElBakJULEdBa0JlLENBUUosU0FDWCxHQVJBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvVXNlckxpc3RNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IFVzZXJSb3cgZnJvbSAnLi4vVXNlclJvdyc7XG5cbmNsYXNzIFVzZXJMaXN0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRVc2VyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblNlbGVjdFVzZXIgPSAoc2VsZWN0ZWRVc2VyKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyIH0pO1xuXG4gIG9uU2V0VXNlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkVXNlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9uU3VibWl0LCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU3VibWl0KHNlbGVjdGVkVXNlciwgJ293bmVyJywgbnVsbCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcjogbnVsbCB9LCBvbkNsb3NlKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcjogbnVsbCB9LCBvbkNsb3NlKTtcbiAgfVxuXG4gIG1hcFVzZXJzID0gKCkgPT4gdGhpcy5wcm9wcy51c2VyTGlzdC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgPFVzZXJSb3dcbiAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgb25TZWxlY3RVc2VyPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcih1c2VyKX1cbiAgICAgIHNlbGVjdGVkVXNlcj17dGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJ9XG4gICAgLz5cbiAgKSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfUHJhY3RpY2UxXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLXByYWN0aWNlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZC1jb3Vyc2UgY2FyZC1tYWluIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsIGdyZWVuIGxpZ2h0ZW4tMSB3aGl0ZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgZmxleDogJzEgMCA4My4zMzMzMzMlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+QXNzaWduIE93bmVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cInBhbmVsLWxpbmsgY2xvc2UgbW9kYWwtY2xvc2VcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubWFwVXNlcnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2V0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4yOHJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICBtYXJnaW46IDEuNTJyZW0gMCAuOTEycmVtIDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgIH1cbiAgICAgICAgcC5wYXNzYWdlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE5OTk7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5tb2RhbC1mdWxsLXNpemUge1xuICAgICAgICAgIHotaW5kZXg6IDE5OTk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cblVzZXJMaXN0TW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXNlckxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3RNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/UserListModal/index.js */")));
    }
  }]);

  return UserListModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

UserListModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  userList: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserListModal);

/***/ }),

/***/ "./components/Location/components/UserRow/index.js":
/*!*********************************************************!*\
  !*** ./components/Location/components/UserRow/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getUserInitials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/getUserInitials */ "./components/utils/getUserInitials.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Location/components/UserRow/styles/index.js");





var UserRow = function UserRow(_ref) {
  var user = _ref.user,
      onSelectUser = _ref.onSelectUser,
      selectedUser = _ref.selectedUser;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onSelectUser,
    className: "owner-box card-panel",
    selected: selectedUser && selectedUser.id === user.id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-circle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "initials"
  }, Object(_utils_getUserInitials__WEBPACK_IMPORTED_MODULE_2__["getTutorInitials"])(user))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "h3"
  }, user.lastName, ", ", user.firstName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(user.email)
  }, user.email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-owner"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Owner")))));
};

UserRow.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectedUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onSelectUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserRow);

/***/ }),

/***/ "./components/Location/components/UserRow/styles/index.js":
/*!****************************************************************!*\
  !*** ./components/Location/components/UserRow/styles/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var UserRowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__UserRowWrapper",
  componentId: "mop4qd-0"
})(["background-color:", ";color:#fff;.user-circle{background-color:", ";color:#fff;}:hover{cursor:pointer;background-color:", ";.user-circle{background-color:", ";}}"], function (_ref) {
  var selected = _ref.selected;
  return selected ? '#24645c' : '#31837a';
}, function (_ref2) {
  var selected = _ref2.selected;
  return selected ? '#24645c' : '#31837a';
}, function (_ref3) {
  var selected = _ref3.selected;
  return selected ? '#004a40!important' : '#24645c!important';
}, function (_ref4) {
  var selected = _ref4.selected;
  return selected ? '#004a40!important' : '#24645c!important';
});
/* harmony default export */ __webpack_exports__["default"] = (UserRowWrapper);

/***/ }),

/***/ "./components/Location/utils/initialState.js":
/*!***************************************************!*\
  !*** ./components/Location/utils/initialState.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (initialState);

/***/ }),

/***/ "./components/Location/utils/sampleLocationList.js":
/*!*********************************************************!*\
  !*** ./components/Location/utils/sampleLocationList.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  owner: {
    lastName: 'Bezos',
    firstName: 'Jeff',
    email: 'jeff-bezos@gmail.com'
  },
  locationContactInfo: {
    locationName: 'Amazon',
    locationNickname: 'Amazon - Online Marketplace',
    locationEmail: 'amazon@gmail.com',
    locationPhoneNumber: '123-456-7889',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: 'TX',
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
  },
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
}, {
  id: 2,
  owner: {
    lastName: 'Chavarro',
    firstName: 'Christian',
    email: 'christian-chavarro@gmail.com'
  },
  locationContactInfo: {
    locationName: 'ChavarroLand',
    locationNickname: 'ChavarroLand - Austin, TX',
    locationEmail: 'chavarro@gmail.com',
    locationPhoneNumber: '535-432-2564',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: 'TX',
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
  },
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
}, {
  id: 3,
  owner: {
    lastName: 'Chavis',
    firstName: 'Cellena',
    email: 'cellena-chavis@gmail.com'
  },
  locationContactInfo: {
    locationName: 'Tutor Zone',
    locationNickname: 'Tutor Zone - Orlando, FL',
    locationEmail: 'tutor-zone@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: 'TX',
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
  },
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
}, {
  id: 4,
  owner: {
    lastName: 'Smith',
    firstName: 'Will',
    email: 'will-smithgmail.com'
  },
  locationContactInfo: {
    locationName: 'Fresh Prince',
    locationNickname: 'Fresh Prince - Philladelphia',
    locationEmail: 'fresh-prince@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: 'TX',
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
    pastStudents: 13,
    unactivatedStudents: 12,
    averageImprovement: 261,
    averageInitialScore: 1100,
    averageFinalScore: 1233,
    studentsAchievingTargetScore: 10
  },
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
}, {
  id: 5,
  owner: {
    lastName: 'Lumberjack',
    firstName: 'Arnold',
    email: 'arnold-lumberjack@gmail.com'
  },
  locationContactInfo: {
    locationName: 'Lumberjack Tutoring',
    locationNickname: 'Lumberjack Tutoring - Canada',
    locationEmail: 'lumberjack-tutoring@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Miami',
    locationState: 'FL',
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
  },
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
}, {
  id: 6,
  owner: {
    lastName: 'Duck',
    firstName: 'Donald',
    email: 'donald-duck@gmail.com'
  },
  locationContactInfo: {
    locationName: 'Disney Learning',
    locationNickname: 'Disney Learning - San Francisco, CA',
    locationEmail: 'disney-learning@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Miami',
    locationState: 'FL',
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
    pastStudents: 54,
    unactivatedStudents: 31,
    averageImprovement: 205,
    averageInitialScore: 1129,
    averageFinalScore: 1367,
    studentsAchievingTargetScore: 44
  },
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
}]);

/***/ }),

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: Modal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");










var Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, _React$Component);

  function Modal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
    key: "render",
    // eslint-disable-line
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          onClose = _this$props.onClose,
          onConfirm = _this$props.onConfirm,
          header = _this$props.header,
          body = _this$props.body,
          fullScreen = _this$props.fullScreen,
          problem = _this$props.problem,
          passage = _this$props.passage;
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selector: "#modal"
      }, fullScreen ? open && react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "modal-full-size modal modal-custom open"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "card-modal card-main card"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("p", {
        className: "jsx-3014652839" + " " + "passage"
      }, problem ? problem.problemText : passage.passageText), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("p", {
        className: "jsx-3014652839" + " " + "passage"
      }, body)), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
        href: "#!",
        onClick: onClose,
        className: "jsx-3014652839" + " " + "modal-close close"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
        className: "jsx-3014652839" + " " + "icon-close"
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "file-field-block"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "info-block"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("dl", {
        className: "jsx-3014652839"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("dt", {
        className: "jsx-3014652839"
      }, "Problem:"), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("dd", {
        className: "jsx-3014652839"
      }, problem ? problem.id : passage.id)), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("dl", {
        className: "jsx-3014652839"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("dt", {
        className: "jsx-3014652839"
      }, "Passage:"), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("dd", {
        className: "jsx-3014652839"
      }, problem ? problem.pass : passage.id))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "file-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "file-path-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("input", {
        type: "text",
        value: "Video:  some_video.mpg",
        readOnly: "",
        className: "jsx-3014652839" + " " + "file-path"
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
        className: "jsx-3014652839" + " " + "waves-effect waves-teal btn-flat blue-text text-darken-3"
      }, "Watch"), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
        className: "jsx-3014652839" + " " + "waves-effect waves-teal btn-flat blue-text text-darken-3"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
        className: "jsx-3014652839"
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("input", {
        type: "file",
        className: "jsx-3014652839"
      }))))))) : open && react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onOuterClick: onClose
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "modal"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("h4", {
        className: "jsx-3014652839"
      }, header), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("p", {
        className: "jsx-3014652839"
      }, body)), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "jsx-3014652839" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
        href: "#!",
        onClick: onClose,
        className: "jsx-3014652839" + " " + "modal-close waves-effect waves-green btn-flat"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
        href: "#!",
        onClick: onConfirm,
        className: "jsx-3014652839" + " " + "modal-close waves-effect waves-green btn-flat"
      }, "Confirm"))))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3014652839"
      }, "h4.jsx-3014652839{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-3014652839{font-size:16px;color:#343434;}p.passage.jsx-3014652839{font-size:14px;}a.jsx-3014652839{color:#343434;}.overlay.jsx-3014652839{position:fixed!important;background-color:rgba(0,0,0,0.7)!important;top:0!important;right:0!important;bottom:0!important;left:0!important;z-index:9999!important;}.modal.jsx-3014652839{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-footer.jsx-3014652839{background-color:white;}.modal-full-size.jsx-3014652839{z-index:1999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGYSxBQUdtQyxBQU1ILEFBSUEsQUFHRCxBQUdXLEFBU1gsQUFTUyxBQUdWLGFBQ0YsQ0F4QmIsQUFZeUIsQ0FuQlQsQUFJaEIsR0FWbUIsS0FrQ25CLENBSVMsQ0F0QnVDLElBVGhELEVBZ0NRLElBdENxQixFQXlCVCxBQWNWLFFBQ0MsU0FDWCxDQWZVLE9BekJLLENBMEJILEtBWE0sS0FZUCxFQTFCWCxPQTJCMEgsRUFadEcsa0JBQ0MsbUJBQ0YsaUJBQ00sdUJBQ3pCLDhCQVNBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuZXhwb3J0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuLCBvbkNsb3NlLCBvbkNvbmZpcm0sIGhlYWRlciwgYm9keSwgZnVsbFNjcmVlbiwgcHJvYmxlbSwgcGFzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICAgIDxDaG9vc2U+XG4gICAgICAgICAgICA8V2hlbiBjb25kaXRpb249e2Z1bGxTY3JlZW59PlxuICAgICAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mdWxsLXNpemUgbW9kYWwgbW9kYWwtY3VzdG9tIG9wZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhc3NhZ2VcIj57cHJvYmxlbSA/IHByb2JsZW0ucHJvYmxlbVRleHQgOiBwYXNzYWdlLnBhc3NhZ2VUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXNzYWdlXCI+e2JvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyFcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2UgY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9zZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWZpZWxkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD5Qcm9ibGVtOjwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD57cHJvYmxlbSA/IHByb2JsZW0uaWQgOiBwYXNzYWdlLmlkfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+UGFzc2FnZTo8L2R0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Byb2JsZW0gPyBwcm9ibGVtLnBhc3MgOiBwYXNzYWdlLmlkfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXBhdGgtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZmlsZS1wYXRoXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlZpZGVvOiAgc29tZV92aWRlby5tcGdcIiByZWFkT25seT1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYmx1ZS10ZXh0IHRleHQtZGFya2VuLTNcIj5XYXRjaDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYmx1ZS10ZXh0IHRleHQtZGFya2VuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VcGxvYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1doZW4+XG4gICAgICAgICAgICA8T3RoZXJ3aXNlPlxuICAgICAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aGVhZGVyfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy1ncmVlbiBidG4tZmxhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtZ3JlZW4gYnRuLWZsYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L090aGVyd2lzZT5cbiAgICAgICAgICA8L0Nob29zZT5cbiAgICAgICAgICB7IC8qIElubGluZSBzdHlsaW5nIGlzIHJlcXVpcmVkIGZvciB0aGUgTW9kYWwgY29tcG9uZW50IGR1ZSB0byB0aGUgUG9ydGFsICovIH1cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yOHJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEuNTJyZW0gMCAuOTEycmVtIDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcC5wYXNzYWdlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3R0b206IDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTkhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtZnVsbC1zaXplIHtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZnVsbFNjcmVlbjogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJvYmxlbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFzc2FnZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Modal/index.js */")));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
Modal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  fullScreen: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  body: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  header: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  problem: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  passage: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/Portal/index.js":
/*!************************************!*\
  !*** ./components/Portal/index.js ***!
  \************************************/
/*! exports provided: Portal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);








var Portal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Portal, _React$Component);

  function Portal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Portal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Portal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Portal, [{
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
Portal.propTypes = {
  selector: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./components/utils/fieldValidation.js":
/*!*********************************************!*\
  !*** ./components/utils/fieldValidation.js ***!
  \*********************************************/
/*! exports provided: nestedEditFieldValidation, shallowEditFieldValidation, nestedCreateFieldValidation, shallowCreateFieldValidation, parseInvalidFieldsToString, shallowParseInvalidFieldsToString, saveNewSuccess, saveChangesSuccess, saveNewError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedEditFieldValidation", function() { return nestedEditFieldValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEditFieldValidation", function() { return shallowEditFieldValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedCreateFieldValidation", function() { return nestedCreateFieldValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCreateFieldValidation", function() { return shallowCreateFieldValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseInvalidFieldsToString", function() { return parseInvalidFieldsToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowParseInvalidFieldsToString", function() { return shallowParseInvalidFieldsToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveNewSuccess", function() { return saveNewSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveChangesSuccess", function() { return saveChangesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveNewError", function() { return saveNewError; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
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

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

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

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

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

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

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

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

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

/***/ "./components/utils/genderOptions.js":
/*!*******************************************!*\
  !*** ./components/utils/genderOptions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var genderOptions = [{
  label: 'Male',
  value: 'Male'
}, {
  label: 'Female',
  value: 'Female'
}];
/* harmony default export */ __webpack_exports__["default"] = (genderOptions);

/***/ }),

/***/ "./components/utils/getUserInitials.js":
/*!*********************************************!*\
  !*** ./components/utils/getUserInitials.js ***!
  \*********************************************/
/*! exports provided: getUserInitials, getTutorInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInitials", function() { return getUserInitials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTutorInitials", function() { return getTutorInitials; });
var getUserInitials = function getUserInitials(user) {
  return "".concat(user.accountInfo.firstName[0]).concat(user.accountInfo.lastName[0]);
};
var getTutorInitials = function getTutorInitials(user) {
  return "".concat(user.firstName[0]).concat(user.lastName[0]);
};

/***/ }),

/***/ "./components/utils/getValueFromState.js":
/*!***********************************************!*\
  !*** ./components/utils/getValueFromState.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (getValueFromState);

/***/ }),

/***/ "./components/utils/locationOptions.js":
/*!*********************************************!*\
  !*** ./components/utils/locationOptions.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  value: '',
  label: 'Any'
}, {
  value: 'Miami',
  label: 'Miami'
}, {
  value: 'Austin',
  label: 'Austin'
}, {
  value: 'option1',
  label: 'Option 1'
}, {
  value: 'option2',
  label: 'Option 2'
}]);

/***/ }),

/***/ "./components/utils/sortFunctions.js":
/*!*******************************************!*\
  !*** ./components/utils/sortFunctions.js ***!
  \*******************************************/
/*! exports provided: firstNameAscending, firstNameDescending, lastNameAscending, lastNameDescending, dueDate, assignDate, problems, completed, flags, score, timeEstimate, subjectAscending, subjectDescending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstNameAscending", function() { return firstNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstNameDescending", function() { return firstNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastNameAscending", function() { return lastNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastNameDescending", function() { return lastNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dueDate", function() { return dueDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignDate", function() { return assignDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problems", function() { return problems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completed", function() { return completed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flags", function() { return flags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "score", function() { return score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEstimate", function() { return timeEstimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectAscending", function() { return subjectAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectDescending", function() { return subjectDescending; });
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

/***/ "./components/utils/sortOptions.js":
/*!*****************************************!*\
  !*** ./components/utils/sortOptions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  value: 'lastNameDescending',
  label: 'Last Name (Descending)'
}, {
  value: 'lastNameAscending',
  label: 'Last Name (Ascending)'
}, {
  value: 'firstNameDescending',
  label: 'First Name (Descending)'
}, {
  value: 'firstNameAscending',
  label: 'First Name (Ascending)'
}]);

/***/ }),

/***/ "./components/utils/stateOptions.js":
/*!******************************************!*\
  !*** ./components/utils/stateOptions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (stateOptions);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
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

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
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
var isProd = process.env && "development" === 'production';

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

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

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

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

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

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/all-instructors.js":
/*!**********************************!*\
  !*** ./pages/all-instructors.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Instructor_ListPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Instructor/ListPage */ "./components/Instructor/ListPage/index.js");






 // eslint-disable-next-line react/prefer-stateless-function

var InstructorList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InstructorList, _React$Component);

  function InstructorList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InstructorList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InstructorList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InstructorList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main-holder grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Instructor_ListPage__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    }
  }]);

  return InstructorList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (InstructorList); // TODO: Figure out what we're going to do with this code
// {/* <!-- Modal structure CREATE --> */}
// <div id="modal_user_create" class="modal modal-custom modal-custom-large modal-gray">
// <div class="card-modal card-main card grey lighten-3">
//   <div class="card-panel card-panel-title" style={{ backgroundColor: '#31837a', color: '#fff' }}>
//     <div class="card-panel-row row">
//       <div class="col">
//         <h3 class="h2">
//           <span class="heading-holder">
//             <span class="heading-block">Create New Owner</span>
//           </span>
//         </h3>
//       </div>
//       <div class="col">
//         <span class="block-icon">
//           <i class="icon-owner"></i>
//           <span class="text-icon">Owner</span>
//         </span>
//       </div>
//     </div>
//   </div>
//   <div class="card-content">
//     <div class="card-body">
//       <div class="row mb-0">
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Owner Contact Info</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="first_name_create" />
//                     <label class="label" for="first_name_create">First Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="last_name_create" />
//                     <label class="label" for="last_name_create">Last Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_email_create" />
//                     <label class="label" for="contact_email_create">Email Address*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12 l7">
//                     <select id="state_edit">
//                       <option>Other</option>
//                       <option>Other</option>
//                       <option>Other</option>
//                     </select>
//                     <label class="label" for="state_edit">Gender*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="tel" id="contact_phone_create" />
//                     <label class="label" for="contact_phone_create">Phone (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_address_create" />
//                     <label class="label" for="contact_address_create">Street Address (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_city_create" />
//                     <label class="label" for="contact_city_create">City (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="col s12 m6 l5">
//                     <div class="input-field">
//                       <select id="contact_state_create">
//                         <option>State (optional)</option>
//                         <option>State</option>
//                         <option>State</option>
//                       </select>
//                       <label class="label" for="contact_state_create">Test</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6 l7">
//                     <div class="input-field">
//                       <input type="tel" id="zip_create" />
//                       <label class="label" for="zip_create">Zip (optional)</label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Contact Info</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_name_create" value="Tutor Doctor" />
//                     <label class="label" for="location_name_create">Location Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_nickname_create" value="Tutor Doctor - Newport Beach, CA" />
//                     <label class="label" for="location_nickname_create">Location Nickname*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_email_create" value="info@clearchoiceprep.com" />
//                     <label class="label" for="location_email_create">Location Email*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="tel" id="location_phone_create" />
//                     <label class="label" for="location_phone_create">Location Phone Number (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="url" id="location_website_create" />
//                     <label class="label" for="location_website_create">Website (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_address_create" />
//                     <label class="label" for="location_address_create">Street Address (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_city_create" />
//                     <label class="label" for="location_city_create">City (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="col s12 m6 l5">
//                     <div class="input-field">
//                       <select id="location_state_create">
//                         <option>State (optional)</option>
//                         <option>State</option>
//                         <option>State</option>
//                       </select>
//                       <label class="label" for="location_state_create">Test</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6 l7">
//                     <div class="input-field">
//                       <input type="tel" id="location_zip_create" />
//                       <label class="label" for="location_zip_create">Zip (optional)</label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="row mb-0">
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Email Settings</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="auto_email_create" value="Clear Choice Prep <messages@clearchoiceprep.com>" />
//                     <label class="label" for="auto_email_create">Automated Emails Come From (email)*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <textarea id="email_salutation_create" class="materialize-textarea">All the best,The Clear Choice Team</textarea>
//                     <label class="label" for="email_salutation_create">Automated Email Salutation*</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Branding</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_url_create" value="newport-beach.tutordoctor.mysatcourse.com" />
//                     <label class="label" for="location_url_create">Location Url*</label>
//                   </div>
//                 </div>
//                 {/* <!-- colorpicker row --> */}
//                 <div class="row mb-0">
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_color_1_create" readonly />
//                     <label class="label" for="header_color_1_create">Header Color 1*</label>
//                   </div>
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_color_2_create" readonly />
//                     <label class="label" for="header_color_2_create">Header Color 2*</label>
//                   </div>
//                 </div>
//                 {/* <!-- colorpicker row --> */}
//                 <div class="row mb-0">
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_logo_bgcolor_create" readonly />
//                     <label class="label" for="header_logo_bgcolor_create">Header Logo Background Color*</label>
//                   </div>
//                   <div class="input-field col s12 m6">
//                     <input type="text" value="100%" id="header_logo_bg_alpha_create" />
//                     <label class="label" for="header_logo_bg_alpha_create">Header Logo Background Alpha*</label>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="horiz_logo.png" id="horizontal_logo_create" />
//                       <label class="label" for="horizontal_logo_create">Horizontal Logo Variation*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="square_logo.jpg" id="square_logo_create" />
//                       <label class="label" for="square_logo_create">Square Logo Variation*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="background.jpg" id="background_image_create" />
//                       <label class="label" for="background_image_create">Background Image*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- twocolumns row background here --> */}
//                 <div class="row mb-0">
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <input type="text" value="24" id="background_blur_create" />
//                       <label class="label" for="background_blur_create">Background Blur*</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <input type="text" value="70%" id="background_overlay_alpha_create" />
//                       <label class="label" for="background_blur_create">Background Overlay Alpha*</label>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="student_welcome_video.mp4" id="student_video_create" />
//                       <label class="label" for="student_video_create">Student Welcome Video (optional)</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" id="instructor_video_create" />
//                       <label class="label" for="instructor_video_create">Instructor Welcome Video (optional)</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer">
//       <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//       <a href="#" class="btn">Save</a>
//     </div>
//   </div>
// </div>
// </div>
// {/* <!-- Modal structure filters users --> */}
// <div id="modalFiltersUsers" class="modal-filter modal modal-custom">
// <div class="card-modal card-main card">
//   <div class="card-panel">
//     <div class="card-panel-row row">
//       <div class="col">
//         <h3>
//           <i class="icon-filter"></i>
//           <span class="heading-block"> Filter Users</span>
//         </h3>
//       </div>
//     </div>
//   </div>
//   <div class="card-content">
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="search-field input-field">
//           <input type="search" class="input-control validate" id="owned_user_filter" />
//           <label class="label" for="owned_user_filter">Owned by</label>
//           <button type="submit" class="search-button"><i class="icon-search"></i></button>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="search-field input-field">
//           <input type="search" class="input-control validate" value="Tutor Doctor - Newport Beach, CA" id="location_user_filter" />
//           <label class="label" for="location_user_filter">Location</label>
//           <button type="submit" class="search-button"><i class="icon-search"></i></button>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="input-field">
//           <select id="role_user">
//             <option>Owner</option>
//             <option>Instructor</option>
//             <option>Student</option>
//           </select>
//           <label class="label" for="role_user">Role</label>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12 l8">
//         <div class="modal-filter-row row">
//           <div class="col s6">
//             <div class="datepicker-field input-field">
//               <i class="icon-calendar-dark"></i>
//               <input type="text"  class="datepicker" id="date_created_after" />
//               <label class="label" for="date_created_after">Created After</label>
//             </div>
//           </div>
//           <div class="col s6">
//             <div class="datepicker-field input-field">
//               <i class="icon-calendar-dark"></i>
//               <input type="text" class="datepicker" id="date_created_before" />
//               <label class="label" for="date_created_before">Created Before</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer">
//       <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//       <a href="#!" class="waves-effect waves-teal btn-flat blue-text text-darken-4">Clear Filter</a>
//       <a href="#" class="btn blue darken-5">Apply Filter</a>
//     </div>
//   </div>
// </div>
// </div>

/***/ }),

/***/ 6:
/*!****************************************!*\
  !*** multi ./pages/all-instructors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/pages/all-instructors.js */"./pages/all-instructors.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "immutability-helper":
/*!**************************************!*\
  !*** external "immutability-helper" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-sticky":
/*!*******************************!*\
  !*** external "react-sticky" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=all-instructors.js.map