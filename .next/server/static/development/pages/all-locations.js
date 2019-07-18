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

/***/ "./components/Location/ListPage/components/LocationCard/index.js":
/*!***********************************************************************!*\
  !*** ./components/Location/ListPage/components/LocationCard/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LocationCard = function LocationCard(_ref) {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-col col s12 m8 l7 xl5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card-location card card-large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "h3"
  }, locationName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sub-title"
  }, locationNickname)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row icons-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-location"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Location"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-flex align-items-center mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "svg-curved-bar",
    "data-values": "{\"from\": 0, \"to\": 100, \"current\": 71}",
    "data-duration": "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "110px",
    height: "110px",
    viewBox: " 0 0 110 110"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    style: {
      strokeWidth: '22',
      stroke: '#eaeaea'
    },
    d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    "data-dinamic": true,
    fill: "none",
    style: {
      strokeWidth: '22',
      stroke: '#62b771'
    },
    d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "chart-value",
    style: {
      backgroundColor: '#62b771'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-count-up": true,
    "data-start-val": "0",
    "data-end-val": "91",
    "data-duration": "1"
  }), "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-description",
    style: {
      color: '#31837a'
    }
  }, "Students Who Achieved Target Score"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "points-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-red-darken"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, activeStudents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "point-text"
  }, "active students")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-pink-darken"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, pastStudents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "point-text"
  }, "past students")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, unactivatedStudents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "point-text"
  }, "unactivated students")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-blue-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, "+", averageImprovement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "point-text"
  }, "average improvement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, averageInitialScore), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "point-text"
  }, "average initial score")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-blue-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, averageFinalScore), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "point-text"
  }, "average final score"))))))));
};

LocationCard.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationCard);

/***/ }),

/***/ "./components/Location/ListPage/index.js":
/*!***********************************************!*\
  !*** ./components/Location/ListPage/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_LocationCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/LocationCard */ "./components/Location/ListPage/components/LocationCard/index.js");
/* harmony import */ var _components_NewLocationModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/NewLocationModal */ "./components/Location/components/NewLocationModal/index.js");
/* harmony import */ var _utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/sampleLocationList */ "./components/Location/utils/sampleLocationList.js");








 // import PropTypes from 'prop-types';





var LocationListPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LocationListPage, _React$Component);

  function LocationListPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LocationListPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LocationListPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onOpenLocationModal", function () {
      return _this.setState({
        locationModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onCloseLocationModal", function () {
      return _this.setState({
        locationModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAddNewLocation", function (newLocation) {
      return _this.setState(function (_ref) {
        var locations = _ref.locations;
        return {
          locations: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(locations), [newLocation])
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "mapLocations", function () {
      return _this.state.locations.map(function (location) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_LocationCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          location: location
        });
      });
    });

    _this.state = {
      locationModalOpen: false,
      locations: _utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_11__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LocationListPage, [{
    key: "render",
    value: function render() {
      var locationModalOpen = this.state.locationModalOpen;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_NewLocationModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: locationModalOpen,
        onClose: this.onCloseLocationModal,
        onAddNewLocation: this.onAddNewLocation
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "title-row card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "mobile-header"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons"
      }, "menu"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "h1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-location"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "heading-block"
      }, "Locations")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row d-flex-content"
      }, this.mapLocations()))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onOpenLocationModal,
        className: "waves-effect waves-teal btn add-btn"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Location"));
    }
  }]);

  return LocationListPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LocationListPage);

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
        className: "jsx-2979935167" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "modal_user_create",
        className: "jsx-2979935167" + " " + "modal modal-custom modal-custom-large modal-gray"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "card-modal card-main card grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          backgroundColor: '#31837a',
          color: '#fff'
        },
        className: "jsx-2979935167" + " " + "card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: 'block'
        },
        className: "jsx-2979935167" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-2979935167" + " " + "h2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2979935167" + " " + "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2979935167" + " " + "heading-block"
      }, "Create New Owner")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2979935167" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-2979935167" + " " + "icon-owner"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2979935167" + " " + "text-icon"
      }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_OwnerContactInfo__WEBPACK_IMPORTED_MODULE_15__["default"], {
        state: ownerContactInfo,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_16__["default"], {
        state: locationContactInfo,
        handleDetailsChange: this.handleDetailsChange
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_17__["default"], {
        state: locationEmailSettings,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_18__["default"], {
        state: locationBranding,
        handleDetailsChange: this.handleDetailsChange
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2979935167" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#!",
        onClick: this.onCloseModal,
        className: "jsx-2979935167" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.onSubmit,
        className: "jsx-2979935167" + " " + "btn"
      }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2979935167"
      }, ".overlay.jsx-2979935167{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-2979935167{margin:0;border-radius:6px;}.modal.jsx-2979935167{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2979935167{opacity:1;visibility:visible;}.modal-footer.jsx-2979935167{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTmV3TG9jYXRpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTlcsQUFHZ0MsQUFTTixBQUlLLEFBU0osQUFJYSxTQWhCTCxDQWFDLElBVEksQ0FiYSxRQTBCdEMsSUFoQkEsRUFhQSxRQVRvQixXQWJaLE1BQ0UsQ0FhQSxPQVpDLENBYUMsUUFaSCxFQWFFLEtBWkcsSUFhNEcsUUFaMUgscUdBYUEiLCJmaWxlIjoiL1ZvbHVtZXMvSEREL1NpdGVzL2NsZWFyY2hvaWNldGVzdHByZXAvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvTG9jYXRpb24vY29tcG9uZW50cy9OZXdMb2NhdGlvbk1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuXG5pbXBvcnQgT3duZXJDb250YWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvT3duZXJDb250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25Db250YWN0SW5mbyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvTG9jYXRpb25Db250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25FbWFpbFNldHRpbmdzIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbkVtYWlsU2V0dGluZ3MnO1xuaW1wb3J0IExvY2F0aW9uQnJhbmRpbmcgZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9uQnJhbmRpbmcnO1xuXG5pbXBvcnQgeyBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuLi8uLi91dGlscy9pbml0aWFsU3RhdGUnO1xuXG5jbGFzcyBOZXdMb2NhdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG93bmVyQ29udGFjdEluZm86IHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIHppcDogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgIGF1dG9tYXRlZEVtYWlsT3JpZ2luQWRkcmVzczogJycsXG4gICAgICAgIGF1dG9tYXRlZEVtYWlsU2FsdXRhdGlvbjogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25Db250YWN0SW5mbzoge1xuICAgICAgICBsb2NhdGlvbk5hbWU6ICcnLFxuICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiAnJyxcbiAgICAgICAgbG9jYXRpb25FbWFpbDogJycsXG4gICAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgICAgbG9jYXRpb25TdHJlZXRBZGRyZXNzOiAnJyxcbiAgICAgICAgbG9jYXRpb25DaXR5OiAnJyxcbiAgICAgICAgbG9jYXRpb25TdGF0ZTogJycsXG4gICAgICAgIGxvY2F0aW9uWmlwOiAnJyxcbiAgICAgIH0sXG4gICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgIGxvY2F0aW9uVXJsOiAnJyxcbiAgICAgICAgaGVhZGVyQ29sb3IxOiAnJyxcbiAgICAgICAgaGVhZGVyQ29sb3IyOiAnJyxcbiAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRDb2xvcjogJycsXG4gICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQWxwaGE6ICcnLFxuICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgIHNxdWFyZUxvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxuICAgICAgICBiYWNrZ3JvdW5kQmx1cjogJycsXG4gICAgICAgIGJhY2tncm91bmRPdmVybGF5QWxwaGE6ICcnLFxuICAgICAgICBzdHVkZW50V2VsY29tZVZpZGVvOiAnJyxcbiAgICAgICAgaW5zdHJ1Y3RvcldlbGNvbWVWaWRlbzogJycsXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBvd25lckNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgZmlyc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGxhc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgICAgYXV0b21hdGVkRW1haWxPcmlnaW5BZGRyZXNzOiB0cnVlLFxuICAgICAgICAgIGF1dG9tYXRlZEVtYWlsU2FsdXRhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25Db250YWN0SW5mbzoge1xuICAgICAgICAgIGxvY2F0aW9uTmFtZTogdHJ1ZSxcbiAgICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uRW1haWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uQnJhbmRpbmc6IHtcbiAgICAgICAgICBsb2NhdGlvblVybDogdHJ1ZSxcbiAgICAgICAgICBoZWFkZXJDb2xvcjE6IHRydWUsXG4gICAgICAgICAgaGVhZGVyQ29sb3IyOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQ29sb3I6IHRydWUsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRBbHBoYTogdHJ1ZSxcbiAgICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBzcXVhcmVMb2dvVmFyaWF0aW9uOiB0cnVlLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQmx1cjogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kT3ZlcmxheUFscGhhOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgaW50byBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZU5ld0xvY2F0aW9uIHBhc3NlZCBkb3duIGZyb20gdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBvd25lciwgbG9jYXRpb25Db250YWN0SW5mbywgbG9jYXRpb25FbWFpbFNldHRpbmdzLCBsb2NhdGlvbkJyYW5kaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTmV3TG9jYXRpb24sIG9uU2F2ZUxvY2F0aW9uRXJyb3IsIG9uQWRkTmV3TG9jYXRpb24sIGZyb21JbnN0cnVjdG9yUGFnZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIE5PVEU6IFN3YXAgb3V0IHdoYXQgaW5zdGFuY2Ugb2YgdmFsaWQgaXMgYWN0aXZlIGlmIHlvdSB3YW50IHRvIHRlc3Qgc2F2aW5nIGEgbmV3IGxvY2F0aW9uIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgdmFsaWRhdGlvblxuICAgIC8vIGNvbnN0IHZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZCA9IGF3YWl0IG5lc3RlZENyZWF0ZUZpZWxkVmFsaWRhdGlvbih0aGlzLnN0YXRlLCB0aGlzLm9uU2V0VmFsaWRhdGlvbiwgKHZhbGlkYXRpb24pID0+IGNvbnNvbGUud2FybigndmFsaWRhdGlvbicsIHZhbGlkYXRpb24pKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgICAgY29uc29sZS53YXJuKCdub3QgdmFsaWQnKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdEJvZHkgPSB7IGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uRW1haWxTZXR0aW5ncywgbG9jYXRpb25CcmFuZGluZywgb3duZXIgfTtcbiAgICBpZiAoZnJvbUluc3RydWN0b3JQYWdlKSB7XG4gICAgICBvblNhdmVOZXdMb2NhdGlvbihwb3N0Qm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQWRkTmV3TG9jYXRpb24ocG9zdEJvZHkpO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oJ3N0dWJiZWQgb3V0IHNhdmUgZnVuY3Rpb24nKTtcbiAgICB0aGlzLm9uQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgb25SZXNldExvY2F0aW9uID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldExvY2F0aW9uKCk7XG4gIH1cblxuICAvLyBXZSBwdWxsIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgZmllbGQgdHlwZSB0aGVuIG1lcmdlIHRoYXQgdXBkYXRlZCBrZXkvdmFsdWUgcGFpciB3aXRoIHRoZSBsYXN0IHZlcnNpb24gb2YgY29tcG9uZW50IHN0YXRlXG4gIGhhbmRsZURldGFpbHNDaGFuZ2UgPSAoZXZlbnQsIG5hbWUsIHNlY3Rpb24pID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGV2ZW50LmhleCkge1xuICAgICAgdmFsdWUgPSBldmVudC5oZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogZXZlbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZSh0aGlzLnN0YXRlLCB7XG4gICAgICBbc2VjdGlvbl06IHsgJG1lcmdlOiB7IFtuYW1lXTogdmFsdWUgfSB9LFxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlZFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBvd25lckNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3VzZXJfY3JlYXRlXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWN1c3RvbS1sYXJnZSBtb2RhbC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmQtbWFpbiBjYXJkIGdyZXkgbGlnaHRlbi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMzMTgzN2EnLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYmxvY2tcIj5DcmVhdGUgTmV3IE93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tb3duZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPk93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8T3duZXJDb250YWN0SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17b3duZXJDb250YWN0SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkNvbnRhY3RJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtsb2NhdGlvbkNvbnRhY3RJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVtYWlsU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2xvY2F0aW9uRW1haWxTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkJyYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtsb2NhdGlvbkJyYW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jYXJkLW1vZGFsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbk5ld0xvY2F0aW9uTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3TG9jYXRpb25Nb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/NewLocationModal/index.js */"));
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

/***/ "./pages/all-locations.js":
/*!********************************!*\
  !*** ./pages/all-locations.js ***!
  \********************************/
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
/* harmony import */ var _components_Location_ListPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Location/ListPage */ "./components/Location/ListPage/index.js");






 // eslint-disable-next-line react/prefer-stateless-function

var LocationList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LocationList, _React$Component);

  function LocationList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocationList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LocationList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LocationList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Location_ListPage__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    }
  }]);

  return LocationList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LocationList);

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/all-locations.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/pages/all-locations.js */"./pages/all-locations.js");


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
//# sourceMappingURL=all-locations.js.map