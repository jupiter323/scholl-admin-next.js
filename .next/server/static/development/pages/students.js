module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/students.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/Instructor/components/InstructorCard/index.js":
/*!******************************************************************!*\
  !*** ./components/Instructor/components/InstructorCard/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



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

InstructorCard.propTypes = {
  instructor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onRemoveInstructor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InstructorCard);

/***/ }),

/***/ "./components/Instructor/components/InstructorModal/components/InstructorToggleCard/index.js":
/*!***************************************************************************************************!*\
  !*** ./components/Instructor/components/InstructorModal/components/InstructorToggleCard/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */



var InstructorToggleCard = function InstructorToggleCard(_ref) {
  var instructor = _ref.instructor,
      onToggleInstructorSelect = _ref.onToggleInstructorSelect;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return onToggleInstructorSelect(instructor);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-location card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "owner-box card-panel card-panel-location",
    style: {
      backgroundColor: '#31837a',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "check-link icon-check"
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
      color: '#fff'
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
  }, instructor.lastName, ", ", instructor.firstName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(instructor.email)
  }, instructor.email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-user"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Instructor")))))));
};

InstructorToggleCard.propTypes = {
  instructor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onToggleInstructorSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InstructorToggleCard);

/***/ }),

/***/ "./components/Instructor/components/InstructorModal/index.js":
/*!*******************************************************************!*\
  !*** ./components/Instructor/components/InstructorModal/index.js ***!
  \*******************************************************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _components_InstructorToggleCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/InstructorToggleCard */ "./components/Instructor/components/InstructorModal/components/InstructorToggleCard/index.js");
/* harmony import */ var _utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../utils/sampleInstructors */ "./components/utils/sampleInstructors.js");










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

var InstructorModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(InstructorModal, _React$Component);

  function InstructorModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InstructorModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(InstructorModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onCloseModal", function () {
      return _this.setState({
        selectedInstructors: []
      }, _this.props.onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleInstructorSelect", function (instructor) {
      var selectedInstructors = _this.state.selectedInstructors;

      if (selectedInstructors.indexOf(instructor) === -1) {
        _this.setState({
          selectedInstructors: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedInstructors), [instructor])
        });
      } else {
        var updatedInstructors = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(selectedInstructors, {
          $splice: [[selectedInstructors.indexOf(instructor), 1]]
        });

        _this.setState({
          selectedInstructors: updatedInstructors
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSetLocation", function (location) {
      return _this.setState({
        location: location
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSaveInstructorChanges", function () {
      var selectedInstructors = _this.state.selectedInstructors;
      var handleInstructorsChange = _this.props.handleInstructorsChange;
      handleInstructorsChange(selectedInstructors);

      _this.onCloseModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSearchChange", function (_ref) {
      var searchTerm = _ref.target.value;
      return _this.setState({
        searchTerm: searchTerm
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderInstructors", function () {
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
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_InstructorToggleCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: instructor.email,
          instructor: instructor,
          onToggleInstructorSelect: _this.onToggleInstructorSelect
        });
      });
    });

    _this.state = {
      open: false,
      instructors: _utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_17__["default"],
      location: 'all',
      searchTerm: '',
      selectedInstructors: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InstructorModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var _this$state2 = this.state,
          location = _this$state2.location,
          searchTerm = _this$state2.searchTerm;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "modal_Instructor1",
        className: "jsx-2013376804" + " " + "modal modal-custom modal-location"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-modal card"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          backgroundColor: '#00456b',
          color: '#fff'
        },
        className: "jsx-2013376804" + " " + "owner-box card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Select Instructor(s)")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "hint"
      }, "Click to select or deselect."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "search",
        id: "name_search",
        name: "nameSearch",
        value: searchTerm,
        onChange: this.handleSearchChange,
        className: "jsx-2013376804" + " " + "input-control validate"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "submit",
        className: "jsx-2013376804" + " " + "search-button"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "name_search",
        className: "jsx-2013376804" + " " + ((searchTerm.length ? 'label active' : 'label') || "")
      }, "Search")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_14__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_15__["default"])(location, locationOptions),
        onChange: this.onSetLocation,
        options: locationOptions,
        label: "State",
        stateKey: "state",
        dropdownKey: "state"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "box-scrollable"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "height-40 jcf-scrollable"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: '100%',
          overflowY: 'scroll'
        },
        className: "jsx-2013376804" + " " + "card-location-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-2013376804" + " " + "checkbox-list"
      }, this.renderInstructors()))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-2013376804" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveInstructorChanges,
        className: "jsx-2013376804" + " " + "btn"
      }, "Add"))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2013376804"
      }, ".overlay.jsx-2013376804{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-2013376804{margin:0;border-radius:6px;}#modal_Location1.jsx-2013376804{border-radius:6px;}.modal.jsx-2013376804{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2013376804{opacity:1;visibility:visible;}.modal-footer.jsx-2013376804{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc2NoYXZhcnJvL2NsZWFyLWNob2ljZS9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9JbnN0cnVjdG9yL2NvbXBvbmVudHMvSW5zdHJ1Y3Rvck1vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVLVyxBQUc4QixBQVNOLEFBSVMsQUFHSixBQVNKLEFBSWEsU0FuQkwsQ0FnQkMsSUFUSSxDQWhCYSxHQWF0QyxLQWdCQSxJQW5CQSxFQWdCQSxRQVRvQixXQWhCWixNQUNFLENBZ0JBLE9BZkMsQ0FnQkMsUUFmSCxFQWdCRSxLQWZHLElBZ0I0RyxRQWYxSCxxR0FnQkEiLCJmaWxlIjoiL1VzZXJzL2NocmlzY2hhdmFycm8vY2xlYXItY2hvaWNlL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0luc3RydWN0b3IvY29tcG9uZW50cy9JbnN0cnVjdG9yTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9pbWctcmVkdW5kYW50LWFsdCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ2ltbXV0YWJpbGl0eS1oZWxwZXInO1xuXG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uLy4uLy4uL1BvcnRhbCc7XG5pbXBvcnQgQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIGZyb20gJy4uLy4uLy4uL0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vLi4vLi4vRm9ybUNvbXBvbmVudHMvRHJvcGRvd24nO1xuaW1wb3J0IGdldFZhbHVlRnJvbVN0YXRlIGZyb20gJy4uLy4uLy4uL3V0aWxzL2dldFZhbHVlRnJvbVN0YXRlJztcblxuaW1wb3J0IEluc3RydWN0b3JUb2dnbGVDYXJkIGZyb20gJy4vY29tcG9uZW50cy9JbnN0cnVjdG9yVG9nZ2xlQ2FyZCc7XG5pbXBvcnQgc2FtcGxlSW5zdHJ1Y3RvcnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvc2FtcGxlSW5zdHJ1Y3RvcnMnO1xuXG5jb25zdCBsb2NhdGlvbk9wdGlvbnMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0FueScsXG4gICAgdmFsdWU6ICdhbGwnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMb2NhdGlvbiAyJyxcbiAgICB2YWx1ZTogJ2xvY2F0aW9uMicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xvY2F0aW9uIDMnLFxuICAgIHZhbHVlOiAnbG9jYXRpb24zJyxcbiAgfSxcbl07XG5cbmNsYXNzIEluc3RydWN0b3JNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGluc3RydWN0b3JzOiBzYW1wbGVJbnN0cnVjdG9ycyxcbiAgICAgIGxvY2F0aW9uOiAnYWxsJyxcbiAgICAgIHNlYXJjaFRlcm06ICcnLFxuICAgICAgc2VsZWN0ZWRJbnN0cnVjdG9yczogW10sXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEluc3RydWN0b3JzOiBbXSB9LCB0aGlzLnByb3BzLm9uQ2xvc2UpXG5cbiAgb25Ub2dnbGVJbnN0cnVjdG9yU2VsZWN0ID0gKGluc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkSW5zdHJ1Y3RvcnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNlbGVjdGVkSW5zdHJ1Y3RvcnMuaW5kZXhPZihpbnN0cnVjdG9yKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEluc3RydWN0b3JzOiBbLi4uc2VsZWN0ZWRJbnN0cnVjdG9ycywgaW5zdHJ1Y3Rvcl0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRJbnN0cnVjdG9ycyA9IHVwZGF0ZShzZWxlY3RlZEluc3RydWN0b3JzLCB7XG4gICAgICAgICRzcGxpY2U6IFtbc2VsZWN0ZWRJbnN0cnVjdG9ycy5pbmRleE9mKGluc3RydWN0b3IpLCAxXV0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEluc3RydWN0b3JzOiB1cGRhdGVkSW5zdHJ1Y3RvcnMgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TZXRMb2NhdGlvbiA9IChsb2NhdGlvbikgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uIH0pXG5cbiAgb25TYXZlSW5zdHJ1Y3RvckNoYW5nZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEluc3RydWN0b3JzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaGFuZGxlSW5zdHJ1Y3RvcnNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaGFuZGxlSW5zdHJ1Y3RvcnNDaGFuZ2Uoc2VsZWN0ZWRJbnN0cnVjdG9ycyk7XG4gICAgdGhpcy5vbkNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaENoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZTogc2VhcmNoVGVybSB9IH0pID0+IHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXJtIH0pXG5cbiAgcmVuZGVySW5zdHJ1Y3RvcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2NhdGlvbiwgaW5zdHJ1Y3RvcnM6IGFsbEluc3RydWN0b3JzLCBzZWFyY2hUZXJtIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBpbnN0cnVjdG9ycztcbiAgICBpZiAoc2VhcmNoVGVybSkge1xuICAgICAgaW5zdHJ1Y3RvcnMgPSBhbGxJbnN0cnVjdG9ycy5yZWR1Y2UoKGZpbmFsQXJyLCBjdXJyZW50SW5zdHJ1Y3RvcikgPT4ge1xuICAgICAgICBjb25zdCBpbnN0cnVjdG9yTmFtZSA9IGAke2N1cnJlbnRJbnN0cnVjdG9yLmZpcnN0TmFtZX0ke2N1cnJlbnRJbnN0cnVjdG9yLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGluc3RydWN0b3JOYW1lLmluZGV4T2Yoc2VhcmNoVGVybSkgIT09IC0xKSB7XG4gICAgICAgICAgZmluYWxBcnIucHVzaChjdXJyZW50SW5zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsQXJyO1xuICAgICAgfSwgW10pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24gPT09ICdhbGwnKSB7XG4gICAgICBpbnN0cnVjdG9ycyA9IGFsbEluc3RydWN0b3JzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0cnVjdG9ycyA9IGFsbEluc3RydWN0b3JzLmZpbHRlcihpbnN0cnVjdG9yID0+IGluc3RydWN0b3IubG9jYXRpb24gPT09IGxvY2F0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RydWN0b3JzLm1hcChpbnN0cnVjdG9yID0+IChcbiAgICAgIDxJbnN0cnVjdG9yVG9nZ2xlQ2FyZFxuICAgICAgICBrZXk9e2luc3RydWN0b3IuZW1haWx9XG4gICAgICAgIGluc3RydWN0b3I9e2luc3RydWN0b3J9XG4gICAgICAgIG9uVG9nZ2xlSW5zdHJ1Y3RvclNlbGVjdD17dGhpcy5vblRvZ2dsZUluc3RydWN0b3JTZWxlY3R9XG4gICAgICAvPlxuICAgICkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxvY2F0aW9uLCBzZWFyY2hUZXJtIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgb25PdXRlckNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9JbnN0cnVjdG9yMVwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1sb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVyLWJveCBjYXJkLXBhbmVsIGNhcmQtcGFuZWwtdGl0bGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA0NTZiJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNlbGVjdCBJbnN0cnVjdG9yKHMpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGludFwiPkNsaWNrIHRvIHNlbGVjdCBvciBkZXNlbGVjdC48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVfc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1jb250cm9sIHZhbGlkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1zZWFyY2hcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3NlYXJjaFRlcm0ubGVuZ3RoID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwibmFtZV9zZWFyY2hcIj5TZWFyY2g8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZXRWYWx1ZUZyb21TdGF0ZShsb2NhdGlvbiwgbG9jYXRpb25PcHRpb25zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldExvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xvY2F0aW9uT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUtleT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bktleT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXNjcm9sbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVpZ2h0LTQwIGpjZi1zY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1sb2NhdGlvbi1ob2xkZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5zdHJ1Y3RvcnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNhdmVJbnN0cnVjdG9yQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtb2RhbF9Mb2NhdGlvbjEge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuSW5zdHJ1Y3Rvck1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlSW5zdHJ1Y3RvcnNDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdG9yTW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Users/chrischavarro/clear-choice/clear-choice-admin/components/Instructor/components/InstructorModal/index.js */"));
    }
  }]);

  return InstructorModal;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

InstructorModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  handleInstructorsChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InstructorModal);

/***/ }),

/***/ "./components/Location/components/LocationCard/index.js":
/*!**************************************************************!*\
  !*** ./components/Location/components/LocationCard/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



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

LcoationCard.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onRemoveLocation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LcoationCard);

/***/ }),

/***/ "./components/Location/components/LocationModal/components/LocationToggleCard/index.js":
/*!*********************************************************************************************!*\
  !*** ./components/Location/components/LocationModal/components/LocationToggleCard/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */



var LocationToggleCard = function LocationToggleCard(_ref) {
  var location = _ref.location,
      onToggleLocationSelect = _ref.onToggleLocationSelect;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return onToggleLocationSelect(location);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-location card card-large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel card-panel-location",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "check-link icon-check"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h4 truncate"
  }, location.locationNickname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "sub-title"
  }, location.locationName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-location"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Location")))))));
};

LocationToggleCard.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onToggleLocationSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationToggleCard);

/***/ }),

/***/ "./components/Location/components/LocationModal/index.js":
/*!***************************************************************!*\
  !*** ./components/Location/components/LocationModal/index.js ***!
  \***************************************************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _components_LocationToggleCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/LocationToggleCard */ "./components/Location/components/LocationModal/components/LocationToggleCard/index.js");
/* harmony import */ var _utils_sampleLocations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/sampleLocations */ "./components/utils/sampleLocations.js");

















var LocationModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LocationModal, _React$Component);

  function LocationModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LocationModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LocationModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onCloseModal", function () {
      return _this.setState({
        selectedLocations: []
      }, _this.props.onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleLocationSelect", function (location) {
      var selectedLocations = _this.state.selectedLocations;

      if (selectedLocations.indexOf(location) === -1) {
        _this.setState({
          selectedLocations: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedLocations), [location])
        });
      } else {
        var updatedLocations = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(selectedLocations, {
          $splice: [[selectedLocations.indexOf(location), 1]]
        });

        _this.setState({
          selectedLocations: updatedLocations
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSaveLocationChanges", function () {
      var selectedLocations = _this.state.selectedLocations;
      var handleLocationsChange = _this.props.handleLocationsChange;
      handleLocationsChange(selectedLocations);

      _this.onCloseModal();
    });

    _this.state = {
      open: false,
      locations: _utils_sampleLocations__WEBPACK_IMPORTED_MODULE_15__["default"],
      selectedLocations: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LocationModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var locations = this.state.locations;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "modal_Location1",
        className: "jsx-431526058" + " " + "modal modal-custom modal-location"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-modal card"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          backgroundColor: '#00456b',
          color: '#fff'
        },
        className: "jsx-431526058" + " " + "owner-box card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "jsx-431526058"
      }, "Select Locations(s)")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-431526058" + " " + "hint"
      }, "Click to select or deselect."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "box-scrollable"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "height-40 jcf-scrollable"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: '100%',
          overflowY: 'scroll'
        },
        className: "jsx-431526058" + " " + "card-location-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-431526058" + " " + "checkbox-list"
      }, locations.map(function (location) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_LocationToggleCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: location.locationName,
          location: location,
          onToggleLocationSelect: _this2.onToggleLocationSelect
        });
      })))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-431526058" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveLocationChanges,
        className: "jsx-431526058" + " " + "btn"
      }, "Add"))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "431526058"
      }, "h4.jsx-431526058{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}.overlay.jsx-431526058{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-431526058{margin:0;border-radius:6px;}#modal_Location1.jsx-431526058{border-radius:6px;}.modal.jsx-431526058{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-431526058{opacity:1;visibility:visible;}.modal-footer.jsx-431526058{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc2NoYXZhcnJvL2NsZWFyLWNob2ljZS9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9Mb2NhdGlvbi9jb21wb25lbnRzL0xvY2F0aW9uTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0dXLEFBR21DLEFBTUgsQUFTTixBQUlTLEFBR0osQUFTSixBQUlhLFNBbkJMLENBZ0JDLElBVEksQ0FoQmEsR0FObkIsQUFtQm5CLEtBZ0JBLElBbkJBLEVBZ0JBLE1BL0I2QixFQXNCVCxXQWhCWixNQUNFLENBZ0JBLE9BdEJLLEFBT0osQ0FnQkMsUUFmSCxFQWdCRSxFQXZCWCxHQVFjLElBZ0I0RyxRQWYxSCxxR0FnQkEiLCJmaWxlIjoiL1VzZXJzL2NocmlzY2hhdmFycm8vY2xlYXItY2hvaWNlL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25Nb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuaW1wb3J0IExvY2F0aW9uVG9nZ2xlQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvTG9jYXRpb25Ub2dnbGVDYXJkJztcblxuaW1wb3J0IHNhbXBsZUxvY2F0aW9ucyBmcm9tICcuLi8uLi8uLi91dGlscy9zYW1wbGVMb2NhdGlvbnMnO1xuXG5jbGFzcyBMb2NhdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgbG9jYXRpb25zOiBzYW1wbGVMb2NhdGlvbnMsXG4gICAgICBzZWxlY3RlZExvY2F0aW9uczogW10sXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZExvY2F0aW9uczogW10gfSwgdGhpcy5wcm9wcy5vbkNsb3NlKVxuXG4gIG9uVG9nZ2xlTG9jYXRpb25TZWxlY3QgPSAobG9jYXRpb24pID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkTG9jYXRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzZWxlY3RlZExvY2F0aW9ucy5pbmRleE9mKGxvY2F0aW9uKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZExvY2F0aW9uczogWy4uLnNlbGVjdGVkTG9jYXRpb25zLCBsb2NhdGlvbl0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRMb2NhdGlvbnMgPSB1cGRhdGUoc2VsZWN0ZWRMb2NhdGlvbnMsIHtcbiAgICAgICAgJHNwbGljZTogW1tzZWxlY3RlZExvY2F0aW9ucy5pbmRleE9mKGxvY2F0aW9uKSwgMV1dLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRMb2NhdGlvbnM6IHVwZGF0ZWRMb2NhdGlvbnMgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TYXZlTG9jYXRpb25DaGFuZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRMb2NhdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBoYW5kbGVMb2NhdGlvbnNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaGFuZGxlTG9jYXRpb25zQ2hhbmdlKHNlbGVjdGVkTG9jYXRpb25zKTtcbiAgICB0aGlzLm9uQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxvY2F0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfTG9jYXRpb24xXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZXItYm94IGNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMDQ1NmInLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VsZWN0IExvY2F0aW9ucyhzKTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpbnRcIj5DbGljayB0byBzZWxlY3Qgb3IgZGVzZWxlY3QuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXNjcm9sbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVpZ2h0LTQwIGpjZi1zY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1sb2NhdGlvbi1ob2xkZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2F0aW9ucy5tYXAobG9jYXRpb24gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25Ub2dnbGVDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsb2NhdGlvbi5sb2NhdGlvbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlTG9jYXRpb25TZWxlY3Q9e3RoaXMub25Ub2dnbGVMb2NhdGlvblNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IHBpbmstdGV4dCB0ZXh0LWRhcmtlbi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2F2ZUxvY2F0aW9uQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yOHJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEuNTJyZW0gMCAuOTEycmVtIDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jYXJkLW1vZGFsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNtb2RhbF9Mb2NhdGlvbjEge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5Mb2NhdGlvbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlTG9jYXRpb25zQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25Nb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Users/chrischavarro/clear-choice/clear-choice-admin/components/Location/components/LocationModal/index.js */"));
    }
  }]);

  return LocationModal;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

LocationModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  handleLocationsChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationModal);

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

/***/ "./components/Student/AccountPage/components/AccountSettings/index.js":
/*!****************************************************************************!*\
  !*** ./components/Student/AccountPage/components/AccountSettings/index.js ***!
  \****************************************************************************/
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




var sessionDurationOptions = [{
  label: 'Use organization default',
  value: 'organizationDefault'
}, {
  label: 'Option 2',
  value: 'Option 2'
}, {
  label: 'Option 3',
  value: 'Option 3'
}];

var AccountSettings = function AccountSettings(_ref) {
  var _ref$state = _ref.state,
      loginBeforeActivation = _ref$state.loginBeforeActivation,
      unstructuredCourseMode = _ref$state.unstructuredCourseMode,
      defaultSessionDuration = _ref$state.defaultSessionDuration,
      videoSolutionsRequired = _ref$state.videoSolutionsRequired,
      preventLogin = _ref$state.preventLogin,
      inactive = _ref$state.inactive,
      excludeFromStatistics = _ref$state.excludeFromStatistics,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0 one-large-col d-flex-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Account Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-context_two-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "loginBeforeActivation",
    id: "",
    value: loginBeforeActivation,
    onChange: function onChange() {
      return handleDetailsChange({}, 'loginBeforeActivation', 'accountSettings', true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "large-label"
  }, "Allow Student Login Prior to Activation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "To enter initial practice test answers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "By default, a student may not log in until you activate the student's account. If, prior to signing up for the course, this student needs to enter his or her own answers for an initial practice test, choose this option to allow the student access. When the student completes the test, we will not reveal the score or score report, which will retain your opportunity to setup a consultation with student/parent to review the results.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "unstructuredCourseMode",
    id: "unstructuredCourseMode",
    value: unstructuredCourseMode,
    onChange: function onChange() {
      return handleDetailsChange({}, 'unstructuredCourseMode', 'accountSettings', true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "large-label"
  }, "Unstructured Course Mode")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "O\uFB00 by default")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "With this option selected, the student can access any lesson at any time, whether or not you've explicitly assigned it. If a student begins a lesson that you have not yet assigned, the lesson will appear on the student's planner for the day that the student begins the lesson, and no due date will be assigned.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultSessionDuration, sessionDurationOptions),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'defaultSessionDuration', 'accountSettings');
    },
    options: sessionDurationOptions,
    label: "Default Session Duration",
    stateKey: "defaultSessionDuration",
    dropdownKey: "defaultSessionDuration"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "videoSolutionsRequired",
    id: "videoSolutionsRequired",
    value: videoSolutionsRequired,
    onChange: function onChange() {
      return handleDetailsChange({}, 'videoSolutionsRequired', 'accountSettings', true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "large-label"
  }, "Require Students to Watch Video Solutions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "Not recommended")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "With this option is selected, the student must watch video solutions for each of the problems that he or she misses or skips before the lesson or quiz is marked complete.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "preventLogin",
    id: "preventLogin",
    value: preventLogin,
    onChange: preventLogin
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "large-label"
  }, "Prevent Login"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Check this box to temporarily prevent this student from logging in. If this account has not yet been activated, selecting this option is unnecessary because an unactivated student cannot login anyway.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "inactive",
    id: "inactive",
    value: inactive,
    onChange: function onChange() {
      return handleDetailsChange({}, 'inactive', 'accountSettings', true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "large-label"
  }, "Inactive"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Select this option when you no longer want this student to appear on your list of current students. All student data is retained and, by default, included in instructor and global statistics. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "excludeFromStatistics",
    id: "excludeFromStatistics",
    value: excludeFromStatistics,
    onChange: function onChange() {
      return handleDetailsChange({}, 'excludeFromStatistics', 'accountSettings', true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "large-label"
  }, "Exclude from Statistics"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Use this option to exclude this student\u2019s data from all instructor and global statistics.")))))))));
};

AccountSettings.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AccountSettings);

/***/ }),

/***/ "./components/Student/AccountPage/components/AccountStatus/index.js":
/*!**************************************************************************!*\
  !*** ./components/Student/AccountPage/components/AccountStatus/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var AccountStatus = function AccountStatus(_ref) {
  var _ref$state = _ref.state,
      licenseCode = _ref$state.licenseCode,
      status = _ref$state.status,
      activationDate = _ref$state.activationDate,
      expirationDate = _ref$state.expirationDate;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Account Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field account-status_input col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "license-code",
    name: "licenseCode",
    value: licenseCode,
    readOnly: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label active",
    htmlFor: "code"
  }, "License Code"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field account-status_input col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "status",
    name: "status",
    value: status,
    readOnly: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label active",
    htmlFor: "status"
  }, "Status"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field account-status_input col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "activation-date",
    name: "activationDate",
    value: activationDate,
    readOnly: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label active",
    htmlFor: "activation-date"
  }, "Activation Date"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field account-status_input col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "expiration-date",
    name: "expirationDate",
    value: expirationDate,
    readOnly: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label active",
    htmlFor: "expiration-date"
  }, "Expiration Date")))))));
};

AccountStatus.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AccountStatus);

/***/ }),

/***/ "./components/Student/AccountPage/components/AccountType/index.js":
/*!************************************************************************!*\
  !*** ./components/Student/AccountPage/components/AccountType/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_licenseTypeOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/licenseTypeOptions */ "./components/utils/licenseTypeOptions.js");
/* eslint-disable jsx-a11y/img-redundant-alt */




var AccountType = function AccountType(_ref) {
  var licenseType = _ref.state.licenseType;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Account Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-type-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-type-block_holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "License Type"), " ", _utils_licenseTypeOptions__WEBPACK_IMPORTED_MODULE_2__["default"][licenseType].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/img-01.png",
    alt: "image description"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _utils_licenseTypeOptions__WEBPACK_IMPORTED_MODULE_2__["default"][licenseType].description)))))));
};

AccountType.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AccountType);

/***/ }),

/***/ "./components/Student/AccountPage/components/Actions/index.js":
/*!********************************************************************!*\
  !*** ./components/Student/AccountPage/components/Actions/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Actions = function Actions(_ref) {
  var _ref$state = _ref.state,
      ccAdmin = _ref$state.ccAdmin,
      requireUserToChange = _ref$state.requireUserToChange,
      password = _ref$state.password,
      confirmPassword = _ref$state.confirmPassword,
      handleActionsChange = _ref.handleActionsChange,
      onResetPassword = _ref.onResetPassword,
      onSendWelcomeEmail = _ref.onSendWelcomeEmail,
      onSendPasswordResetEmail = _ref.onSendPasswordResetEmail;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Actions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0 d-flex-content large sameheight"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Welcome Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Use this feature to send (or resend) a welcome email to the student. The welcome email contains login instruction and a temporary password that the student can use to login for the \uFB01rst time. Keep in mind that sending this email will automatically set a new, randomly generated password which may be confusing to the student if he or she has already received a welcome email or has already set a permanent password."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn waves-effect waves-light bg-blue",
    name: "action",
    onClick: onSendWelcomeEmail
  }, "(Re)send Welcome Email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "ccAdmin",
    id: "cc-admin",
    value: ccAdmin,
    onChange: function onChange() {
      return handleActionsChange({}, 'ccAdmin', true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "large-label"
  }, "cc me at:  this_is_me@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Password Reset Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid.."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn waves-effect waves-light bg-blue",
    name: "action",
    onClick: onSendPasswordResetEmail
  }, "Send Password Reset Email")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Reset Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    onChange: function onChange(event) {
      return handleActionsChange(event, 'password');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: password.length ? 'label active' : 'label',
    htmlFor: "password"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "6 to 20 characters"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    id: "confirm-password",
    name: "confirmPassword",
    value: confirmPassword,
    onChange: function onChange(event) {
      return handleActionsChange(event, 'confirmPassword');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: confirmPassword.length ? 'label active' : 'label',
    htmlFor: "confirm-password"
  }, "Confirm Password"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    id: "require-user-to-change",
    name: "requireUserToChange",
    value: requireUserToChange,
    onChange: function onChange() {
      return handleActionsChange({}, 'ccAdmin', true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "large-label"
  }, "Require user to change"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn waves-effect waves-light bg-blue",
    name: "action",
    onClick: onResetPassword
  }, "Set Password"))))))));
};

Actions.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onResetPassword: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleActionsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSendWelcomeEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSendPasswordResetEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./components/Student/AccountPage/components/Class/components/ClassCard/index.js":
/*!***************************************************************************************!*\
  !*** ./components/Student/AccountPage/components/Class/components/ClassCard/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var ClassCard = function ClassCard(_ref) {
  var _ref$course = _ref.course,
      className = _ref$course.className,
      classLocation = _ref$course.classLocation,
      index = _ref.index,
      onRemoveClass = _ref.onRemoveClass;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel card-panel-panel card-panel-large",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "close-link icon-close-thin",
    onClick: function onClick() {
      return onRemoveClass(index, 'location', 'locations');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h4 truncate"
  }, className), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "sub-title"
  }, classLocation)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-location"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Class")))));
};

ClassCard.propTypes = {
  course: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onRemoveClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassCard);

/***/ }),

/***/ "./components/Student/AccountPage/components/Class/index.js":
/*!******************************************************************!*\
  !*** ./components/Student/AccountPage/components/Class/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ClassCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ClassCard */ "./components/Student/AccountPage/components/Class/components/ClassCard/index.js");
/* eslint-disable jsx-a11y/img-redundant-alt */




var Class = function Class(_ref) {
  var classes = _ref.state.classes,
      onOpenClassModal = _ref.onOpenClassModal,
      onRemoveClass = _ref.onRemoveClass;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Class"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card card-instructor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If this student is in a class, add it here. When a student is a member of a class, he or she will automatically be assigned all the classwork. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-scrollable"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "height-20 jcf-scrollable"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-location-holder"
  }, !classes.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-class-box"
  }), classes.map(function (course, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ClassCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      course: course,
      key: course.className,
      index: index,
      onRemoveClass: onRemoveClass
    });
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-footer right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: onOpenClassModal,
    className: "modal-trigger link-block"
  }, "Add Class")))));
};

Class.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onRemoveClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenClassModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Class);

/***/ }),

/***/ "./components/Student/AccountPage/components/ContactInformation/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Student/AccountPage/components/ContactInformation/index.js ***!
  \*******************************************************************************/
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






var ContactInformation = function ContactInformation(_ref) {
  var _ref$state = _ref.state,
      phone = _ref$state.phone,
      addressLine1 = _ref$state.addressLine1,
      addressLine2 = _ref$state.addressLine2,
      city = _ref$state.city,
      state = _ref$state.state,
      zipCode = _ref$state.zipCode,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contact Information (optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "tel",
    id: "phone",
    name: "phone",
    value: phone,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'phone', 'contactInformation');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: phone.length ? 'label active' : 'label',
    htmlFor: "phone"
  }, "Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "address_line_1",
    name: "addressLine1",
    value: addressLine1,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'addressLine1', 'contactInformation');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: addressLine1.length ? 'label active' : 'label',
    htmlFor: "address_line_1"
  }, "Address Line 1*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "address_line_2",
    name: "addressLine2",
    value: addressLine2,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'addressLine2', 'contactInformation');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: addressLine2.length ? 'label active' : 'label',
    htmlFor: "address_line_2"
  }, "Address Line 2*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "city",
    name: "city",
    value: city,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'city', 'contactInformation');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: city.length ? 'label active' : 'label',
    htmlFor: "city"
  }, "City"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s6 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(state, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'state', 'contactInformation');
    },
    options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: "State",
    stateKey: "state",
    dropdownKey: "state"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s6 l7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "zip_code",
    name: "zipCode",
    value: zipCode,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'zipCode', 'contactInformation');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: zipCode.length ? 'label active' : 'label',
    htmlFor: "zip_code"
  }, "Zip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional")))))));
};

ContactInformation.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ContactInformation);

/***/ }),

/***/ "./components/Student/AccountPage/components/CourseContext/index.js":
/*!**************************************************************************!*\
  !*** ./components/Student/AccountPage/components/CourseContext/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/dynamic */ "next-server/dynamic");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");





var DatePicker = next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../FormComponents/DatePicker */ "./components/FormComponents/DatePicker/index.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../../../FormComponents/DatePicker */ "./components/FormComponents/DatePicker/index.js")];
    },
    modules: ['../../../../FormComponents/DatePicker']
  }
});
var startDateOptions = [{
  label: 'First Assignment Date (Default)',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];
var endDateOptions = [{
  label: 'First Assignment Date (Default)',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];
var targetTestDateOptions = [{
  label: 'October 6, 2018',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];

var CourseContext = function CourseContext(_ref) {
  var _ref$state = _ref.state,
      courseStartDateOption = _ref$state.courseStartDateOption,
      courseStartDate = _ref$state.courseStartDate,
      courseEndDateOption = _ref$state.courseEndDateOption,
      courseEndDate = _ref$state.courseEndDate,
      targetTestDate = _ref$state.targetTestDate,
      targetScore = _ref$state.targetScore,
      highSchool = _ref$state.highSchool,
      graduationYear = _ref$state.graduationYear,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0 one-large-col d-flex-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Course Context"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-context_two-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__["default"])(courseStartDateOption, startDateOptions),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'courseStartDateOption', 'courseContext');
    },
    options: startDateOptions,
    label: "Course Start Date",
    stateKey: "courseStartDateOption",
    dropdownKey: "courseStartDateOption"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "datepicker-field input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-calendar-dark"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DatePicker, {
    selected: courseStartDate,
    id: "course_start_date",
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'courseStartDate', 'courseContext');
    }
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__["default"])(courseEndDateOption, endDateOptions),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'courseEndDateOption', 'courseContext');
    },
    options: endDateOptions,
    label: "Course End Date",
    stateKey: "courseEndDateOption",
    dropdownKey: "courseEndDateOption"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "datepicker-field input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-calendar-dark"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DatePicker, {
    selected: courseEndDate,
    id: "course_end_date",
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'courseEndDate', 'courseContext');
    }
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m6 l8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__["default"])(targetTestDate, targetTestDateOptions),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'targetTestDate', 'courseContext');
    },
    options: targetTestDateOptions,
    label: "Target Test Date*",
    stateKey: "targetTestDate",
    dropdownKey: "targetTestDate"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m6 l4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "target_score",
    name: "targetScore",
    value: targetScore,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'targetScore', 'courseContext');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: targetScore.length ? 'label active' : 'label',
    htmlFor: "target_score"
  }, "Target Score*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "high_school",
    name: "highSchool",
    value: highSchool,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'highSchool', 'courseContext');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: highSchool.length ? 'label active' : 'label',
    htmlFor: "high_school"
  }, "High School*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "graduation_year",
    name: "graduationYear",
    value: graduationYear,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'graduationYear', 'courseContext');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: graduationYear.length ? 'label active' : 'label',
    htmlFor: "graduation_year"
  }, "Graduation Year*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional")))))))))));
};

CourseContext.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CourseContext);

/***/ }),

/***/ "./components/Student/AccountPage/components/DeleteAccount/index.js":
/*!**************************************************************************!*\
  !*** ./components/Student/AccountPage/components/DeleteAccount/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var DeleteAccount = function DeleteAccount(_ref) {
  var activeButton = _ref.activeButton,
      onDeleteAccount = _ref.onDeleteAccount;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0 d-flex-content large sameheight"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Delete Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This option will only be available until the student account is activated.  Once activated, if you need to delete a student's account, please contact your system administrator."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn waves-effect waves-light bg-blue ".concat(activeButton ? '' : 'disabled'),
    type: "submit",
    name: "action",
    onClick: onDeleteAccount
  }, "Delete Account"))))))));
};

DeleteAccount.propTypes = {
  activeButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onDeleteAccount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteAccount);

/***/ }),

/***/ "./components/Student/AccountPage/components/EmailAddress/index.js":
/*!*************************************************************************!*\
  !*** ./components/Student/AccountPage/components/EmailAddress/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var EmailAddress = function EmailAddress(_ref) {
  var email = _ref.state.email,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'email', 'emailAddress');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: email.length ? 'label active' : 'label',
    htmlFor: "email"
  }, "Email*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "A valid student email address is required for most student functions. You may create an account without an email address, but until a valid email address is entered, the student will not receive the requisite welcome email and cannot login to the system."))));
};

EmailAddress.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EmailAddress);

/***/ }),

/***/ "./components/Student/AccountPage/components/Instructor/index.js":
/*!***********************************************************************!*\
  !*** ./components/Student/AccountPage/components/Instructor/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Instructor_components_InstructorCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Instructor/components/InstructorCard */ "./components/Instructor/components/InstructorCard/index.js");
/* eslint-disable jsx-a11y/img-redundant-alt */




var Instructor = function Instructor(_ref) {
  var instructors = _ref.state.instructors,
      onOpenInstructorModal = _ref.onOpenInstructorModal,
      _onRemoveInstructor = _ref.onRemoveInstructor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Instructor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card card-instructor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Add one or more instructors to the list below. Each instructor can manage the student\u2019s course.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-scrollable"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "height-15 jcf-scrollable"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-location-holder",
    style: {
      height: '100%',
      overflowY: 'scroll'
    }
  }, !instructors.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-class-box"
  }), instructors.map(function (instructor, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructor_components_InstructorCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      instructor: instructor,
      onRemoveInstructor: function onRemoveInstructor() {
        return _onRemoveInstructor(index, 'instructor', 'instructors');
      }
    });
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-footer right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: onOpenInstructorModal,
    className: "modal-trigger link-block"
  }, "Add Instructor")))));
};

Instructor.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onOpenInstructorModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onRemoveInstructor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Instructor);

/***/ }),

/***/ "./components/Student/AccountPage/components/Location/index.js":
/*!*********************************************************************!*\
  !*** ./components/Student/AccountPage/components/Location/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Location_components_LocationCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Location/components/LocationCard */ "./components/Location/components/LocationCard/index.js");




var Location = function Location(_ref) {
  var locations = _ref.state.locations,
      onOpenLocationModal = _ref.onOpenLocationModal,
      _onRemoveLocation = _ref.onRemoveLocation;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card card-instructor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Depending on your settings, you may have more than one location/branch. The student\u2019s location a\uFB00ects which managers have access to this student. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-scrollable"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "height-15 jcf-scrollable"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-location-holder",
    style: {
      height: '100%',
      overflowY: 'scroll'
    }
  }, !locations.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-class-box"
  }), locations.map(function (location, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Location_components_LocationCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location,
      onRemoveLocation: function onRemoveLocation() {
        return _onRemoveLocation(index, 'location', 'locations');
      }
    });
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-footer right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: onOpenLocationModal,
    className: "modal-trigger link-block"
  }, "Add Location")))));
};

Location.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onRemoveLocation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ }),

/***/ "./components/Student/AccountPage/components/StudentInformation/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Student/AccountPage/components/StudentInformation/index.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/genderOptions */ "./components/utils/genderOptions.js");






var StudentInformation = function StudentInformation(_ref) {
  var _ref$state = _ref.state,
      firstName = _ref$state.firstName,
      lastName = _ref$state.lastName,
      gender = _ref$state.gender,
      handleDetailsChange = _ref.handleDetailsChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Student Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "first_name",
    name: "firstName",
    value: firstName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'firstName', 'studentInformation');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: firstName.length ? 'label active' : 'label',
    htmlFor: "first_name"
  }, "First Name"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "last_name",
    name: "lastName",
    value: lastName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'lastName', 'studentInformation');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: lastName.length ? 'label active' : 'label',
    htmlFor: "last_name"
  }, "Last Name"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-field col s6 l5 focus-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(gender, _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'gender', 'studentInformation');
    },
    options: _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: "Gender",
    stateKey: "gender",
    dropdownKey: "gender"
  }))))));
};

StudentInformation.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StudentInformation);

/***/ }),

/***/ "./components/Student/AccountPage/index.js":
/*!*************************************************!*\
  !*** ./components/Student/AccountPage/index.js ***!
  \*************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Toast */ "./components/Toast/index.js");
/* harmony import */ var _components_StudentInformation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/StudentInformation */ "./components/Student/AccountPage/components/StudentInformation/index.js");
/* harmony import */ var _components_ContactInformation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ContactInformation */ "./components/Student/AccountPage/components/ContactInformation/index.js");
/* harmony import */ var _components_EmailAddress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/EmailAddress */ "./components/Student/AccountPage/components/EmailAddress/index.js");
/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Location */ "./components/Student/AccountPage/components/Location/index.js");
/* harmony import */ var _components_Instructor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Instructor */ "./components/Student/AccountPage/components/Instructor/index.js");
/* harmony import */ var _components_Class__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Class */ "./components/Student/AccountPage/components/Class/index.js");
/* harmony import */ var _components_AccountStatus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/AccountStatus */ "./components/Student/AccountPage/components/AccountStatus/index.js");
/* harmony import */ var _components_AccountType__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/AccountType */ "./components/Student/AccountPage/components/AccountType/index.js");
/* harmony import */ var _components_CourseContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/CourseContext */ "./components/Student/AccountPage/components/CourseContext/index.js");
/* harmony import */ var _components_AccountSettings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/AccountSettings */ "./components/Student/AccountPage/components/AccountSettings/index.js");
/* harmony import */ var _components_Actions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/Actions */ "./components/Student/AccountPage/components/Actions/index.js");
/* harmony import */ var _components_DeleteAccount__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/DeleteAccount */ "./components/Student/AccountPage/components/DeleteAccount/index.js");
/* harmony import */ var _ClassModal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../ClassModal */ "./components/Student/ClassModal/index.js");
/* harmony import */ var _Location_components_LocationModal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../Location/components/LocationModal */ "./components/Location/components/LocationModal/index.js");
/* harmony import */ var _Instructor_components_InstructorModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../Instructor/components/InstructorModal */ "./components/Instructor/components/InstructorModal/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../utils/fieldValidation */ "./components/utils/fieldValidation.js");










/* eslint-disable no-unused-vars */

/* eslint-disable jsx-a11y/img-redundant-alt */






















var AccountPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AccountPage, _React$Component);

  function AccountPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AccountPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AccountPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentWillReceiveProps", function (nextProps) {
      if (!_this.state.originalUser || nextProps.user.id !== _this.state.originalUser.id) {
        var _nextProps$user = nextProps.user;
        _nextProps$user = _nextProps$user === void 0 ? {} : _nextProps$user;
        var id = _nextProps$user.id,
            studentInformation = _nextProps$user.studentInformation,
            contactInformation = _nextProps$user.contactInformation,
            emailAddress = _nextProps$user.emailAddress,
            location = _nextProps$user.location,
            instructor = _nextProps$user.instructor,
            course = _nextProps$user.course,
            courseContext = _nextProps$user.courseContext,
            accountSettings = _nextProps$user.accountSettings;
        var updatedUser = {
          id: id,
          studentInformation: studentInformation,
          contactInformation: contactInformation,
          emailAddress: emailAddress,
          location: location,
          instructor: instructor,
          course: course,
          courseContext: courseContext,
          accountSettings: accountSettings
        };
        var originalUserState = _this.state.originalUser;
        var originalUser = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(originalUserState, {
          $merge: nextProps.user
        });

        _this.setState({
          originalUser: originalUser,
          updatedUser: updatedUser
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenLocationModal", function () {
      return _this.setState({
        locationModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseLocationModal", function () {
      return _this.setState({
        locationModalOpen: false
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOpenClassModal", function () {
      return _this.setState({
        classModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCloseClassModal", function () {
      return _this.setState({
        classModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetValidation", function (validation, cb) {
      return _this.setState({
        validation: validation
      }, cb);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSaveChanges",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var updatedUser, valid;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault(); // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;

                updatedUser = _this.state.updatedUser;
                _context.next = 4;
                return Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_29__["nestedEditFieldValidation"])(_this.state, _this.state.updatedUser, _this.onSetValidation, function (validation) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onDeleteAccount", function () {
      console.warn('Stubbed out delete user');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSendWelcomeEmail", function (event) {
      event.preventDefault();
      console.warn('Stubbed out send email');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSendPasswordResetEmail", function (event) {
      event.preventDefault();
      console.warn('Stubbed out password reset email');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onResetPassword", function (event) {
      event.preventDefault();
      var _this$state$actions = _this.state.actions,
          password = _this$state$actions.password,
          confirmPassword = _this$state$actions.confirmPassword;

      if (password !== confirmPassword) {
        console.warn('Toast is broken, have a console log'); // return this.notify
      }

      if (!confirmPassword.length) {
        console.warn('Toast is broken, have a console log'); // return this.notify()
      }

      return console.warn('stubbed out password reset');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onRemoveOption", function (optionIndex, section, array) {
      var updatedUser = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(_this.state.updatedUser, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, section, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, array, {
        $splice: [[optionIndex, 1]]
      })));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "initialUserMount", function () {
      return _this.state.originalUser.id !== _this.props.user.id;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleActionsChange", function (event, name) {
      var checkBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var previousActions = _this.state.actions;
      var value;

      if (checkBox) {
        value = !previousActions.ccAdmin;
      } else {
        value = event.target.value;
      }

      var updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(_this.state, {
        actions: {
          $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value)
        }
      });

      _this.setState(updatedState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleOptionsChange", function (selectedOptions, section, array) {
      var updatedUser = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(_this.state.updatedUser, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, section, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, array, {
        $set: selectedOptions
      })));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDetailsChange", function (event, name, section) {
      var checkBox = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var previousUserState = _this.state.updatedUser;
      var value;

      if (checkBox) {
        value = !previousUserState[section][name];
      } else {
        value = event.target ? event.target.value : event;
      }

      var updatedUser = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(previousUserState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, section, {
        $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value)
      }));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    _this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
      classModalOpen: false,
      originalUser: {
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: ''
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: ''
        },
        emailAddress: {
          email: ''
        },
        location: {
          locations: []
        },
        instructor: {
          instructors: []
        },
        course: {
          classes: []
        },
        courseContext: {
          courseStartDateOption: '',
          courseStartDate: '',
          courseEndDateOption: '',
          courseEndDate: '',
          targetTestDate: '',
          targetScore: '',
          highSchool: '',
          graduationYear: ''
        },
        accountSettings: {
          loginBeforeActivation: false,
          unstructuredCourseMode: false,
          defaultSessionDuration: '',
          videoSolutionsRequired: false,
          preventLogin: false,
          inactive: false,
          excludeFromStatistics: false
        }
      },
      updatedUser: {
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: ''
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: ''
        },
        emailAddress: {
          email: ''
        },
        location: {
          locations: []
        },
        instructor: {
          instructors: []
        },
        course: {
          classes: []
        },
        courseContext: {
          courseStartDateOption: '',
          courseStartDate: '',
          courseEndDateOption: '',
          courseEndDate: '',
          targetTestDate: '',
          targetScore: '',
          highSchool: '',
          graduationYear: ''
        },
        accountSettings: {
          loginBeforeActivation: false,
          unstructuredCourseMode: false,
          defaultSessionDuration: '',
          videoSolutionsRequired: false,
          preventLogin: false,
          inactive: false,
          excludeFromStatistics: false
        }
      },
      actions: {
        ccAdmin: false,
        requireUserToChange: false,
        password: '',
        confirmPassword: ''
      },
      validation: {
        studentInformation: {
          firstName: true,
          lastName: true,
          gender: true
        },
        emailAddress: {
          email: true
        }
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AccountPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$user = this.props.user;
      _this$props$user = _this$props$user === void 0 ? {} : _this$props$user;
      var id = _this$props$user.id,
          studentInformation = _this$props$user.studentInformation,
          contactInformation = _this$props$user.contactInformation,
          emailAddress = _this$props$user.emailAddress,
          location = _this$props$user.location,
          instructor = _this$props$user.instructor,
          course = _this$props$user.course,
          courseContext = _this$props$user.courseContext,
          accountSettings = _this$props$user.accountSettings;
      var updatedUser = {
        id: id,
        studentInformation: studentInformation,
        contactInformation: contactInformation,
        emailAddress: emailAddress,
        location: location,
        instructor: instructor,
        course: course,
        courseContext: courseContext,
        accountSettings: accountSettings
      };
      var originalUserState = this.state.originalUser;
      var originalUser = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(originalUserState, {
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
          classModalOpen = _this$state.classModalOpen,
          actions = _this$state.actions,
          _this$state$updatedUs = _this$state.updatedUser,
          updatedStudentInformation = _this$state$updatedUs.studentInformation,
          updatedContactInformation = _this$state$updatedUs.contactInformation,
          updatedEmailAddress = _this$state$updatedUs.emailAddress,
          updatedLocation = _this$state$updatedUs.location,
          updatedInstructor = _this$state$updatedUs.instructor,
          updatedClasses = _this$state$updatedUs.course,
          updatedCourseContext = _this$state$updatedUs.courseContext,
          updatedAccountSettings = _this$state$updatedUs.accountSettings;
      var _this$props$user2 = this.props.user;
      _this$props$user2 = _this$props$user2 === void 0 ? {} : _this$props$user2;
      var studentInformation = _this$props$user2.studentInformation,
          contactInformation = _this$props$user2.contactInformation,
          emailAddress = _this$props$user2.emailAddress,
          location = _this$props$user2.location,
          instructor = _this$props$user2.instructor,
          course = _this$props$user2.course,
          courseContext = _this$props$user2.courseContext,
          accountSettings = _this$props$user2.accountSettings,
          accountStatus = _this$props$user2.accountStatus,
          accountType = _this$props$user2.accountType;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Toast__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ClassModal__WEBPACK_IMPORTED_MODULE_26__["default"], {
        open: classModalOpen,
        onClose: this.onCloseClassModal,
        handleClassChange: this.handleOptionsChange
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Location_components_LocationModal__WEBPACK_IMPORTED_MODULE_27__["default"], {
        open: locationModalOpen,
        onClose: this.onCloseLocationModal,
        handleLocationsChange: function handleLocationsChange(selectedLocations) {
          return _this2.handleOptionsChange(selectedLocations, 'location', 'locations');
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Instructor_components_InstructorModal__WEBPACK_IMPORTED_MODULE_28__["default"], {
        open: instructorModalOpen,
        onClose: this.onCloseInstructorModal,
        handleInstructorsChange: function handleInstructorsChange(selectedInstructors) {
          return _this2.handleOptionsChange(selectedInstructors, 'instructor', 'instructors');
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-section-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row mb-0 d-flex-content large"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col s12 l5"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_StudentInformation__WEBPACK_IMPORTED_MODULE_14__["default"], {
        state: this.initialUserMount() ? studentInformation : updatedStudentInformation,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ContactInformation__WEBPACK_IMPORTED_MODULE_15__["default"], {
        state: this.initialUserMount() ? contactInformation : updatedContactInformation,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_EmailAddress__WEBPACK_IMPORTED_MODULE_16__["default"], {
        state: this.initialUserMount() ? emailAddress : updatedEmailAddress,
        handleDetailsChange: this.handleDetailsChange
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col s12 l5"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_17__["default"], {
        state: this.initialUserMount() ? location : updatedLocation,
        onOpenLocationModal: this.onOpenLocationModal,
        onRemoveLocation: this.onRemoveOption
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Instructor__WEBPACK_IMPORTED_MODULE_18__["default"], {
        state: this.initialUserMount() ? instructor : updatedInstructor,
        onOpenInstructorModal: this.onOpenInstructorModal,
        onRemoveInstructor: this.onRemoveOption
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Class__WEBPACK_IMPORTED_MODULE_19__["default"], {
        state: this.initialUserMount() ? course : updatedClasses,
        onOpenClassModal: this.onOpenClassModal,
        onRemoveInstructor: this.onRemoveOption
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row mb-0 d-flex-content large sameheight"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AccountStatus__WEBPACK_IMPORTED_MODULE_20__["default"], {
        state: accountStatus
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AccountType__WEBPACK_IMPORTED_MODULE_21__["default"], {
        state: accountType
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_CourseContext__WEBPACK_IMPORTED_MODULE_22__["default"], {
        state: this.initialUserMount() ? courseContext : updatedCourseContext,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AccountSettings__WEBPACK_IMPORTED_MODULE_23__["default"], {
        state: this.initialUserMount() ? accountSettings : updatedAccountSettings,
        handleDetailsChange: this.handleDetailsChange
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Actions__WEBPACK_IMPORTED_MODULE_24__["default"], {
        state: actions,
        handleActionsChange: this.handleActionsChange,
        onResetPassword: this.onResetPassword,
        onSendWelcomeEmail: this.onSendWelcomeEmail,
        onSendPasswordResetEmail: this.onSendPasswordResetEmail
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_DeleteAccount__WEBPACK_IMPORTED_MODULE_25__["default"], {
        activeButton: accountStatus.status !== 'Activated',
        onDeleteAccount: this.onDeleteAccount
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveChanges,
        className: "btn"
      }, "Save"))));
    }
  }]);

  return AccountPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

AccountPage.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (AccountPage);

/***/ }),

/***/ "./components/Student/ClassModal/components/ClassToggleCard/index.js":
/*!***************************************************************************!*\
  !*** ./components/Student/ClassModal/components/ClassToggleCard/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */



var ClassToggleCard = function ClassToggleCard(_ref) {
  var course = _ref.course,
      onToggleClassSelect = _ref.onToggleClassSelect;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return onToggleClassSelect(course);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-location card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "owner-box card-panel card-panel-location",
    style: {
      backgroundColor: '#31837a',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "check-link icon-check"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h4 truncate"
  }, course.className), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "sub-title"
  }, course.classLocation)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-user"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Instructor")))))));
};

ClassToggleCard.propTypes = {
  course: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onToggleClassSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassToggleCard);

/***/ }),

/***/ "./components/Student/ClassModal/index.js":
/*!************************************************!*\
  !*** ./components/Student/ClassModal/index.js ***!
  \************************************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _components_ClassToggleCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ClassToggleCard */ "./components/Student/ClassModal/components/ClassToggleCard/index.js");
/* harmony import */ var _utils_sampleClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/sampleClasses */ "./components/utils/sampleClasses.js");

















var ClassModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ClassModal, _React$Component);

  function ClassModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClassModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ClassModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onCloseModal", function () {
      return _this.setState({
        selectedClasses: []
      }, _this.props.onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleClassSelect", function (course) {
      var selectedClasses = _this.state.selectedClasses;

      if (selectedClasses.indexOf(course) === -1) {
        _this.setState({
          selectedClasses: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedClasses), [course])
        });
      } else {
        var updatedClasses = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(selectedClasses, {
          $splice: [[selectedClasses.indexOf(course), 1]]
        });

        _this.setState({
          selectedClasses: updatedClasses
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSaveClassChanges", function () {
      var selectedClasses = _this.state.selectedClasses;
      var handleClassChange = _this.props.handleClassChange;
      handleClassChange(selectedClasses, 'course', 'classes');

      _this.onCloseModal();
    });

    _this.state = {
      open: false,
      classes: _utils_sampleClasses__WEBPACK_IMPORTED_MODULE_15__["default"],
      selectedClasses: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ClassModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var classes = this.state.classes;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "modal_Location1",
        className: "jsx-431526058" + " " + "modal modal-custom modal-location"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-modal card"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          backgroundColor: '#00456b',
          color: '#fff'
        },
        className: "jsx-431526058" + " " + "owner-box card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "jsx-431526058"
      }, "Select Class(es)")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-431526058" + " " + "hint"
      }, "Click to select or deselect."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "box-scrollable"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "height-40 jcf-scrollable"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: '100%',
          overflowY: 'scroll'
        },
        className: "jsx-431526058" + " " + "card-location-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-431526058" + " " + "checkbox-list"
      }, classes.map(function (course) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ClassToggleCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: course.className,
          course: course,
          onToggleClassSelect: _this2.onToggleClassSelect
        });
      })))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-431526058" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-431526058" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveClassChanges,
        className: "jsx-431526058" + " " + "btn"
      }, "Add"))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "431526058"
      }, "h4.jsx-431526058{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}.overlay.jsx-431526058{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-431526058{margin:0;border-radius:6px;}#modal_Location1.jsx-431526058{border-radius:6px;}.modal.jsx-431526058{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-431526058{opacity:1;visibility:visible;}.modal-footer.jsx-431526058{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc2NoYXZhcnJvL2NsZWFyLWNob2ljZS9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9TdHVkZW50L0NsYXNzTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0dXLEFBR21DLEFBTUgsQUFTTixBQUlTLEFBR0osQUFTSixBQUlhLFNBbkJMLENBZ0JDLElBVEksQ0FoQmEsR0FObkIsQUFtQm5CLEtBZ0JBLElBbkJBLEVBZ0JBLE1BL0I2QixFQXNCVCxXQWhCWixNQUNFLENBZ0JBLE9BdEJLLEFBT0osQ0FnQkMsUUFmSCxFQWdCRSxFQXZCWCxHQVFjLElBZ0I0RyxRQWYxSCxxR0FnQkEiLCJmaWxlIjoiL1VzZXJzL2NocmlzY2hhdmFycm8vY2xlYXItY2hvaWNlL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL1N0dWRlbnQvQ2xhc3NNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuaW1wb3J0IENsYXNzVG9nZ2xlQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQ2xhc3NUb2dnbGVDYXJkJztcblxuaW1wb3J0IHNhbXBsZUNsYXNzZXMgZnJvbSAnLi4vLi4vdXRpbHMvc2FtcGxlQ2xhc3Nlcyc7XG5cbmNsYXNzIENsYXNzTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBjbGFzc2VzOiBzYW1wbGVDbGFzc2VzLFxuICAgICAgc2VsZWN0ZWRDbGFzc2VzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgb25DbG9zZU1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ2xhc3NlczogW10gfSwgdGhpcy5wcm9wcy5vbkNsb3NlKVxuXG4gIG9uVG9nZ2xlQ2xhc3NTZWxlY3QgPSAoY291cnNlKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZENsYXNzZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNlbGVjdGVkQ2xhc3Nlcy5pbmRleE9mKGNvdXJzZSkgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDbGFzc2VzOiBbLi4uc2VsZWN0ZWRDbGFzc2VzLCBjb3Vyc2VdIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1cGRhdGVkQ2xhc3NlcyA9IHVwZGF0ZShzZWxlY3RlZENsYXNzZXMsIHtcbiAgICAgICAgJHNwbGljZTogW1tzZWxlY3RlZENsYXNzZXMuaW5kZXhPZihjb3Vyc2UpLCAxXV0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENsYXNzZXM6IHVwZGF0ZWRDbGFzc2VzIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2F2ZUNsYXNzQ2hhbmdlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkQ2xhc3NlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGhhbmRsZUNsYXNzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGhhbmRsZUNsYXNzQ2hhbmdlKHNlbGVjdGVkQ2xhc3NlcywgJ2NvdXJzZScsICdjbGFzc2VzJyk7XG4gICAgdGhpcy5vbkNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgb25PdXRlckNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9Mb2NhdGlvbjFcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1jdXN0b20gbW9kYWwtbG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lci1ib3ggY2FyZC1wYW5lbCBjYXJkLXBhbmVsLXRpdGxlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwNDU2YicsIGNvbG9yOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TZWxlY3QgQ2xhc3MoZXMpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGludFwiPkNsaWNrIHRvIHNlbGVjdCBvciBkZXNlbGVjdC48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtc2Nyb2xsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWlnaHQtNDAgamNmLXNjcm9sbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWxvY2F0aW9uLWhvbGRlclwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGVja2JveC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xhc3Nlcy5tYXAoY291cnNlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsYXNzVG9nZ2xlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y291cnNlLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vyc2U9e2NvdXJzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUNsYXNzU2VsZWN0PXt0aGlzLm9uVG9nZ2xlQ2xhc3NTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNhdmVDbGFzc0NoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMjhyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxLjUycmVtIDAgLjkxMnJlbSAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAjbW9kYWxfTG9jYXRpb24xIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuQ2xhc3NNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUNsYXNzQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Users/chrischavarro/clear-choice/clear-choice-admin/components/Student/ClassModal/index.js */"));
    }
  }]);

  return ClassModal;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

ClassModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  handleClassChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassModal);

/***/ }),

/***/ "./components/Student/DetailLessonList/components/FilterSection/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Student/DetailLessonList/components/FilterSection/index.js ***!
  \*******************************************************************************/
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
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_8__);








/* eslint-disable jsx-a11y/no-static-element-interactions */



var FilterSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FilterSection, _React$Component);

  function FilterSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FilterSection).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleShowFilters", function () {
      return _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onHandleFilterClick", function (filter) {
      var currentActiveFilters = _this.state.activeFilters;
      var activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        var filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState({
        activeFilters: activeFilters
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClearFilters", function () {
      return _this.setState({
        activeFilters: []
      });
    });

    _this.state = {
      open: true,
      activeFilters: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          open = _this$state.open,
          activeFilters = _this$state.activeFilters;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-form-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "collapsible expandable"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "collapsible-body",
        style: open ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-form_checkbox-list-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "activated",
        checked: activeFilters.indexOf("activated") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('activated');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "activated"
      }, "Activated")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "unactivated",
        checked: activeFilters.indexOf("unactivated") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('unactivated');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "unactivated"
      }, "Unactivated")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "expired",
        checked: activeFilters.indexOf("expired") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('expired');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "expired"
      }, "Expired"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "current",
        checked: activeFilters.indexOf("current") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('current');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "current"
      }, "Current")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "archived",
        checked: activeFilters.indexOf("archived") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('archived');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "archived"
      }, "Archived"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "no-gain",
        checked: activeFilters.indexOf("no-gain") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-gain');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "no-gain"
      }, "No Gain")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "some-gain",
        checked: activeFilters.indexOf("some-gain") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('some-gain');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "some-gain"
      }, "Some Gain")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "gain-100+",
        checked: activeFilters.indexOf("gain-100+") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('gain-100+');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "gain-100+"
      }, "Gain of 100+")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "gain-200+",
        checked: activeFilters.indexOf("gain-200+") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('gain-200+');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "gain-200+"
      }, "Gain of 200+"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "hit-target-score",
        checked: activeFilters.indexOf("hit-target-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('hit-target-score');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "hit-target-score"
      }, "Hit Target Score")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "hasnt-hit-target-score",
        checked: activeFilters.indexOf("hasnt-hit-target-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('hasnt-hit-target-score');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "hasnt-hit-target-score"
      }, "Hasn\u2019t Hit Target Score"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "no-tests",
        checked: activeFilters.indexOf("no-tests") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('tests');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "no-tests"
      }, "No Tests")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "1-test",
        checked: activeFilters.indexOf("1-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('1-test');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "1-test"
      }, "1 Test")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "2-test",
        checked: activeFilters.indexOf("2-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('2-test');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "2-test"
      }, "2 Tests")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "3-test",
        checked: activeFilters.indexOf("3-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('3-test');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "3-test"
      }, "3+ Tests"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "has-overdue-work",
        checked: activeFilters.indexOf("has-overdue-work") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('has-overdue-work');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "has-overdue-work"
      }, "Has Overdue Work")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "unreviewed-flags",
        checked: activeFilters.indexOf("unreviewed-flags") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('unreviewed-flags');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "unreviewed-flags"
      }, "Unreviewed Flags"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "sessions-this-week",
        checked: activeFilters.indexOf("sessions-this-week") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('sessions-this-week');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "sessions-this-week"
      }, "Sessions This Week")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "session-today",
        checked: activeFilters.indexOf("session-today") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('session-today');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "session-today"
      }, "Session Today")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "no-sessions",
        checked: activeFilters.indexOf("no-sessions") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-sessions');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "no-sessions"
      }, "No Sessions Scheduled"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "entered-actual-score",
        checked: activeFilters.indexOf("entered-actual-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('entered-actual-score');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "entered-actual-score"
      }, "Entered Actual Score")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "no-actual-score",
        checked: activeFilters.indexOf("no-actual-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-actual-score');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "no-actual-score"
      }, "No Actual Score"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-flex-end"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l8"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        id: "name_search",
        className: "input-control  validate",
        placeholder: "Edwar"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "search-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        htmlFor: "name_search"
      }, "Search"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        id: "location_search"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", null, "Any"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", null, "Option"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", null, "Option")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        htmlFor: "location_search"
      }, "Location"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        id: "sort_search"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", null, "Last Name (ascending)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", null, "Option"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", null, "Option")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        htmlFor: "sort_search"
      }, "Sort"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-filters"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-item clear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.onClearFilters
      }, "Clear Filters")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "collapsible-header",
        onClick: this.onToggleShowFilters
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "open-text"
      }, open ? 'Hide Filters' : 'Open Filters')))))))));
    }
  }]);

  return FilterSection;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Student/DetailLessonList/components/LessonCard/index.js":
/*!****************************************************************************!*\
  !*** ./components/Student/DetailLessonList/components/LessonCard/index.js ***!
  \****************************************************************************/
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










var getProblemCompletionStatusColor = function getProblemCompletionStatusColor(solvedProblems, totalProblems) {
  if (solvedProblems / totalProblems <= .25) {
    return {
      backgroundColor: '#ed1c25'
    };
  } else if (solvedProblems / totalProblems <= .5) {
    return {
      backgroundColor: '#a005a5'
    };
  }

  return {
    backgroundColor: '#0200fd'
  };
}; // assigned ? 'card-main card-lesson-detail card-assigned card' : 'card-main card-lesson-detail card'}


var getLessonActivityStatus = function getLessonActivityStatus(assigned, dueDate) {
  if (assigned && dueDate) {
    return 'card-main card-lesson-detail card-assigned card';
  }

  if (!assigned && !dueDate) {
    return 'card-main card-lesson-detail card-not-assigned card';
  }

  return 'card-main card-lesson-detail card';
};

var LessonCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LessonCard, _React$Component);

  function LessonCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LessonCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderLessonIcon", function (subject) {
      switch (subject) {
        case 'Reading':
          return 'icon-books';

        case 'Writing':
          return 'icon-hands';

        case 'Math':
          return 'icon-calculator';

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderProblemCount", function (assigned, totalProblems, solvedProblems) {
      if (assigned) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "chart-value chart-value-column",
          style: getProblemCompletionStatusColor(solvedProblems, totalProblems)
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "chart-count",
          "data-count-up": true,
          "data-start-val": "0",
          "data-end-val": "4",
          "data-duration": "1"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-large"
        }, solvedProblems)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-small"
        }, "out of"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-large"
        }, totalProblems));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "chart-value chart-value-column",
        style: {
          backgroundColor: '#666'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        "data-count-up": true,
        "data-start-val": "0",
        "data-end-val": "0",
        "data-duration": "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, totalProblems), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "problems")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderProblemCompletionStatus", function (dueTime, completed, completionDate, completionTime, completedLate, availableDate, dueDate, overdue, assigned) {
      if (completed) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Completed ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
          dateTime: "2018-11-18T20:43"
        }, completionDate, " at ", completionTime), completedLate && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "status status-late"
        }, " (late)")));
      }

      if (availableDate) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Available ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
          dateTime: "2018-12-13"
        }, availableDate)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
          dateTime: "2018-12-17"
        }, "(due ", dueDate, ")")));
      }

      if (overdue) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          className: "text-large",
          style: {
            color: '#c1272d'
          }
        }, "Overdue"));
      }

      if (!availableDate && dueDate) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Due ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
          dateTime: "2018-12-15"
        }, dueDate)));
      }

      if (!assigned && !dueDate) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Not Assigned"));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large",
        style: {
          color: '#006837'
        }
      }, "Due Today at ", dueTime));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderAlerts", function (alerts) {
      if (alerts.length) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "right-col col s3"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "badge-rounded badge red darken-2 white-text"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
          className: "badge-text"
        }, alerts.length), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icon-flag"
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "right-col col s3"
      }, "\xA0");
    });

    _this.state = {
      test: true
    };
    return _this;
  } // eslint-disable-next-line consistent-return


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessonCard, [{
    key: "render",
    value: function render() {
      var _this$props$lesson = this.props.lesson,
          subject = _this$props$lesson.subject,
          unitNumber = _this$props$lesson.unitNumber,
          lessonName = _this$props$lesson.lessonName,
          assigned = _this$props$lesson.assigned,
          alerts = _this$props$lesson.alerts,
          lessonType = _this$props$lesson.lessonType,
          totalProblems = _this$props$lesson.totalProblems,
          _this$props$lesson$so = _this$props$lesson.solvedProblems,
          solvedProblems = _this$props$lesson$so === void 0 ? '' : _this$props$lesson$so,
          passage = _this$props$lesson.passage,
          dueDate = _this$props$lesson.dueDate,
          dueTime = _this$props$lesson.dueTime,
          completed = _this$props$lesson.completed,
          availableDate = _this$props$lesson.availableDate,
          completionDate = _this$props$lesson.completionDate,
          completionTime = _this$props$lesson.completionTime,
          completedLate = _this$props$lesson.completedLate,
          overdue = _this$props$lesson.overdue;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: getLessonActivityStatus(assigned, dueDate)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel",
        style: {
          backgroundColor: '#666',
          color: '#fff'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon-col col s1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: this.renderLessonIcon(subject)
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-text center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-small"
      }, subject, " Unit ", unitNumber), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-large"
      }, lessonName))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s1 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "dropdown-trigger btn",
        href: "#",
        "data-target": "dropdown01"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown01",
        className: "dropdown-content dropdown-wide"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#modal_user_edit",
        className: "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!"
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!"
      }, "Show Owner")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!"
      }, "Delete")))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-top-row row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "left-col col s3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "meta-num"
      }, "p.", passage)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "center-col col s6 center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "meta-name"
      }, "(", lessonType, ")")), this.renderAlerts(alerts)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-container chart-container-xlarge"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "svg-curved-bar",
        "data-values": "{\"from\": 0, \"to\": 0, \"current\": 0}",
        "data-duration": "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        width: "207px",
        height: "207px",
        viewBox: "0 0 207 207",
        preserveAspectRatio: "xMidYMid meet"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        fill: "none",
        style: {
          strokeWidth: '42',
          stroke: '#eaeaea'
        },
        d: "M 26.909645526174018 134.16215259197702 A 82.5 82.5 0 1 1 180.09035447382598 134.16215259197702"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        "data-dinamic": true,
        fill: "none",
        style: {
          strokeWidth: '42',
          stroke: '#62b771'
        },
        d: "M 26.909645526174018 134.16215259197702 A 82.5 82.5 0 0 1 26.909645526174018 134.16215259197702"
      }))), this.renderProblemCount(assigned, totalProblems, solvedProblems))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-footer-row center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-footer-holder"
      }, this.renderProblemCompletionStatus(dueTime, completed, completionDate, completionTime, completedLate, availableDate, dueDate, overdue, assigned))))));
    }
  }]);

  return LessonCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

LessonCard.propTypes = {
  lesson: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LessonCard);

/***/ }),

/***/ "./components/Student/DetailLessonList/index.js":
/*!******************************************************!*\
  !*** ./components/Student/DetailLessonList/index.js ***!
  \******************************************************/
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
/* harmony import */ var _components_LessonCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/LessonCard */ "./components/Student/DetailLessonList/components/LessonCard/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Student/DetailLessonList/components/FilterSection/index.js");








/* eslint-disable react/no-array-index-key */





var DetailLessonList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DetailLessonList, _React$Component);

  function DetailLessonList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DetailLessonList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DetailLessonList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapLessons", function () {
      return _this.props.user.lessons.map(function (lesson, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_LessonCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: index,
          lesson: lesson
        });
      });
    });

    _this.state = {
      test: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DetailLessonList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FilterSection__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex-content card-width-272"
      }, this.mapLessons())), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn add-btn"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Lesson"));
    }
  }]);

  return DetailLessonList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

DetailLessonList.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DetailLessonList);

/***/ }),

/***/ "./components/Student/DetailSummaryPage/components/CourseProgress/index.js":
/*!*********************************************************************************!*\
  !*** ./components/Student/DetailSummaryPage/components/CourseProgress/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);



var areaColorMap = {
  maroon: '#ce237a',
  blue: '#1aa3ef',
  purple: '#752189',
  green: '#3a8745',
  orange: '#e28100'
};

var _data = function data(percentage, color) {
  return {
    datasets: [{
      data: [100, 100 - percentage],
      backgroundColor: [areaColorMap[color], 'rgb(234, 234, 234)']
    }]
  };
}; // TODO: Implement doughnut charts


var CourseProgress = function CourseProgress(_ref) {
  var _ref$state = _ref.state,
      startDate = _ref$state.startDate,
      testDate = _ref$state.testDate,
      progress = _ref$state.progress,
      improvement = _ref$state.improvement,
      lessons = _ref$state.lessons,
      instruction = _ref$state.instruction,
      practiceTests = _ref$state.practiceTests,
      active = _ref.active;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l7 card-width-747"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card card-chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Course Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-legend"
  }, active ? [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "legend-block",
    key: "0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-text"
  }, "Start Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
    dateTime: "2018-06-13",
    className: "large-text"
  }, startDate)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "legend-block",
    key: "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-text"
  }, "Test Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
    dateTime: "2018-10-06",
    className: "large-text"
  }, "Oct SAT (", testDate, ")"))] : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-frame"
  }, "Once the course begins, check here to be sure the student is on track.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "determinate",
    style: {
      width: active ? "".concat(progress, "%") : '0%'
    }
  }, active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "progress-label"
  }, progress, "%")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "charts-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-block"
  }, active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: function data() {
      return _data(improvement, 'maroon');
    },
    width: 156,
    height: 156,
    options: {
      cutoutPercentage: 75
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "js-donut-chart js-donut-middle",
    "data-stroke-width": "20",
    "data-source": "./inc/score-data-improvement.json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title"
  }, "Improvement"), active ? [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "value",
    key: "0"
  }, improvement, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "description",
    key: "1"
  }, "vs target score")] : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inactive-text"
  }, "None Yet")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-block"
  }, active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: function data() {
      return _data(lessons, 'purple');
    },
    width: 156,
    height: 156,
    options: {
      cutoutPercentage: 75
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "js-donut-chart js-donut-middle",
    "data-stroke-width": "20",
    "data-source": "./inc/score-data-improvement.json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title"
  }, "Lessons"), active ? [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "value",
    key: "0"
  }, lessons, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "description",
    key: "1"
  }, "vs scheduled lessons")] : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inactive-text"
  }, "None Scheduled")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-block"
  }, active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: function data() {
      return _data(instruction, 'orange');
    },
    width: 156,
    height: 156,
    options: {
      cutoutPercentage: 75
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "js-donut-chart js-donut-middle",
    "data-stroke-width": "20",
    "data-source": "./inc/score-data-improvement.json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title"
  }, "Instruction"), active ? [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "value",
    key: "0"
  }, instruction, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "description",
    key: "1"
  }, "vs scheduled instruction")] : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inactive-text"
  }, "None Scheduled")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-block"
  }, active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: function data() {
      return _data(practiceTests, 'blue');
    },
    width: 156,
    height: 156,
    options: {
      cutoutPercentage: 75
    }
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "js-donut-chart js-donut-middle",
    "data-stroke-width": "20",
    "data-source": "./inc/score-data-improvement.json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title"
  }, "Practice Tests"), active ? [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "value",
    key: "0"
  }, practiceTests, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "description",
    key: "1"
  }, "vs scheduled tests")] : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inactive-text"
  }, "None Scheduled"))))), active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-legend"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col legend-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "box complete"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text"
  }, "Complete")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col legend-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "box behind"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text"
  }, "Behind Schedule")))) : null))));
};

CourseProgress.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CourseProgress);

/***/ }),

/***/ "./components/Student/DetailSummaryPage/components/OverdueWork/index.js":
/*!******************************************************************************!*\
  !*** ./components/Student/DetailSummaryPage/components/OverdueWork/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var OverdueWork = function OverdueWork(_ref) {
  var _ref$state = _ref.state,
      lessons = _ref$state.lessons,
      worksheets = _ref$state.worksheets,
      quizzes = _ref$state.quizzes,
      practiceTests = _ref$state.practiceTests,
      active = _ref.active;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l5 card-width-366"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main card card-chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Overdue Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "points-list-large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: active ? 'style-red-darken' : ''
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, lessons, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Lessons"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: active ? 'style-pink-darken' : ''
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle",
    style: {
      paddingTop: '0'
    }
  }, worksheets, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Worksheets"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, quizzes, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Quizzes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: active ? 'style-blue-light' : ''
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle",
    style: {
      paddingTop: '0'
    }
  }, practiceTests, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Practice Tests")))))));
};

OverdueWork.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OverdueWork);

/***/ }),

/***/ "./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js":
/*!*****************************************************************************************!*\
  !*** ./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__);










 // TODO: Figure out how the client wants this data visualized and what these bar graphs actually mean

var StrengthsAndWeaknesses =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StrengthsAndWeaknesses, _React$Component);

  function StrengthsAndWeaknesses(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StrengthsAndWeaknesses);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StrengthsAndWeaknesses).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetOpenSection", function (event, openSection) {
      event.preventDefault();

      _this.setState({
        openSection: openSection
      });
    });

    _this.state = {
      openSection: 'reading'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StrengthsAndWeaknesses, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var openSection = this.state.openSection; // eslint-disable-next-line no-unused-vars

      var _this$props = this.props,
          _this$props$state = _this$props.state,
          reading = _this$props$state.reading,
          writing = _this$props$state.writing,
          math = _this$props$state.math,
          active = _this$props.active;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "h1"
      }, "Strengths & Weaknesses"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main-full card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs-container"
      }, active ? [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel light-blue accent-2 white-text",
        key: "0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "tabs"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tab col s4 l3",
        style: {
          margin: '0',
          paddingRight: '20px',
          paddingLeft: '20px',
          height: '24px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        style: {
          fontSize: '17px'
        },
        className: openSection === 'reading' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'reading');
        }
      }, "Reading")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tab col s4 l3",
        style: {
          margin: '0',
          paddingRight: '20px',
          paddingLeft: '20px',
          height: '24px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        style: {
          fontSize: '17px'
        },
        className: openSection === 'writing' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'writing');
        }
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tab col s4 l3",
        style: {
          margin: '0',
          paddingRight: '20px',
          paddingLeft: '20px',
          height: '24px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        style: {
          fontSize: '17px'
        },
        className: openSection === 'math' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'math');
        }
      }, "Math")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "indicator",
        style: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getIndicatorStatus"])(openSection)
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content tabs-content",
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tabs_tab01",
        className: openSection === 'reading' ? '' : 'tab-content'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l5 xl4 chart-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-block chart-block-large"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Doughnut"], {
        data: function data() {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["data"])(reading.correctAnswers, reading.totalAnswers);
        },
        width: 250,
        height: 250,
        options: {
          cutoutPercentage: 80
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "title"
      }, "Reading"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "value"
      }, reading.correctAnswers), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "description"
      }, "out of ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, reading.totalAnswers))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l7 xl8"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "collapsible expandable collapsible-explain"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "collapsible-header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "Explain This Graph")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "collapsible-body"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col l6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "legend-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "legend-frame"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "box red darken-2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text h3"
      }, "Focus Here!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Most people with your score would get these correct, but you got them wrong. Work on these and you can pick up some easy points!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "legend-frame"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "box red lighten-5"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text h3"
      }, "Tough Gains")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "You missed these, but so did most others with a similar score. You\u2019ll likely \uFB01nd easier gains elsewhere.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col l6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "legend-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "legend-frame"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "box light-green darken-2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text h3"
      }, "Well Done!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "You\u2019re overachiving in this category compared to other with your score. Keep up the good work!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "legend-frame"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "box  light-green lighten-4"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text h3"
      }, "Piece o\u2019 Cake")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "You answered these correctly like others with a similar score.")))))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graphs-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graphs-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "graph-title"
      }, "Passage Type")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '80%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '80%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Science")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '85%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '70%'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Informational Graphic Passage")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '75%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '70%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '70%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "History/Social Science")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '85%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '5%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '15%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "US & World Literature")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '45%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '85%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Paired Passages")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '35%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '60%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '10%'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graphs-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "graph-title"
      }, "Question Type")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '85%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '12%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '95%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-subtitle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Citing Textual Evidence")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '55%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '70%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '12%'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Cite Text as Evidence")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '20%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '85%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '70%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Author\u2019s Intention and Method")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '55%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '7%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '15%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Support / Refute a Claim")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '47%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '12%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-subtitle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Reading Closely")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '12%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '55%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '10%'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Detail Question")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '8%'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '95%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col text-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Support / Refute a Claim")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-linear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '75%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '70%'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "graph-col graph-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-small"
      }, "out of"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-large"
      }, "18"))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tabs_tab02",
        className: openSection === 'writing' ? '' : 'tab-content'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Tab 02 content"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quasi inventore expedita maxime, vero magnam architecto eius laudantium corrupti! Ut fuga sit corrupti, vitae cum temporibus sed dolore labore! Fugit."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorem nihil minus, quasi, dicta cupiditate aut magni ea veniam natus provident eveniet tempore iure minima placeat distinctio ducimus quo cum.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tabs_tab03",
        className: openSection === 'math' ? '' : 'tab-content'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Tab 03 content"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Expedita quibusdam sed, temporibus quasi dolorem iure non inventore quaerat sit mollitia dolores minima illo perspiciatis omnis delectus, recusandae quos, incidunt ratione."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, enim? Itaque reprehenderit, id eos quasi optio est. Soluta alias, minima consequuntur obcaecati odio maiores, molestiae, vel ipsum modi delectus enim!")))] : [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel white-text",
        style: {
          backgroundColor: '#b2b2b2'
        },
        key: "0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Areas for Improvement")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content",
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-note-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "title"
      }, "Nothing to see here yet."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-frame"
      }, "As the this student takes practice tests and completes course work, we\u2019ll track the student\u2019s strengths and weaknesess. Check back here once the course begins.")))])));
    }
  }]);

  return StrengthsAndWeaknesses;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

StrengthsAndWeaknesses.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StrengthsAndWeaknesses);

/***/ }),

/***/ "./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js":
/*!***********************************************************************************************!*\
  !*** ./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js ***!
  \***********************************************************************************************/
/*! exports provided: getIndicatorStatus, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndicatorStatus", function() { return getIndicatorStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var getIndicatorStatus = function getIndicatorStatus(activeSection) {
  switch (activeSection) {
    case 'reading':
      return {
        left: '1.5%',
        right: '92%',
        height: '2px'
      };

    case 'writing':
      return {
        left: '11%',
        right: '83%',
        height: '2px'
      };

    case 'math':
      return {
        left: '20%',
        right: '75%',
        height: '2px'
      };

    default:
      return null;
  }
};
var data = function data(totalScore, totalPossible) {
  return {
    datasets: [{
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ['#ce237a', 'rgb(234, 234, 234)']
    }]
  };
};

/***/ }),

/***/ "./components/Student/DetailSummaryPage/components/SummaryCards/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Student/DetailSummaryPage/components/SummaryCards/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./components/Student/DetailSummaryPage/components/SummaryCards/utils/index.js");




var SummaryCards = function SummaryCards(_ref) {
  var _ref$state = _ref.state,
      questionsAnswered = _ref$state.questionsAnswered,
      videoWatched = _ref$state.videoWatched,
      notesTaken = _ref$state.notesTaken,
      totalTimeLoggedIn = _ref$state.totalTimeLoggedIn,
      lastLogIn = _ref$state.lastLogIn,
      loginTimeCode = _ref$state.loginTimeCode,
      onTimePercentage = _ref$state.onTimePercentage,
      active = _ref.active;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l5 card-width-366"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "alerts-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: active ? 'icon-box purple darken-3' : 'icon-box'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-pencil2"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active ? 'alert-text purple-text text-darken-3' : 'alert-text'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Questions Answered")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, active ? questionsAnswered : '0')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert alert-blue-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: active ? 'icon-box cyan darken-2' : 'icon-box'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-videocam"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active ? 'alert-text cyan-text text-darken-2' : 'alert-text'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Video Watched")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, active ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatVideoWatched"])(videoWatched) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, "0")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: active ? 'icon-box pink darken-2' : 'icon-box'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-note"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active ? 'alert-text pink-text text-darken-2' : 'alert-text'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Notes Taken")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, active ? notesTaken : '0')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: active ? 'icon-box green darken-3' : 'icon-box'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-clock"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active ? 'alert-text green-text text-darken-3' : 'alert-text'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Total Time Logged In")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, active ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatTimeLoggedIn"])(totalTimeLoggedIn) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, "0")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: active ? 'icon-box orange darken-2' : 'icon-box'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-arrow-right"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active ? 'alert-text orange-text text-darken-2' : 'alert-text'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Last Log In")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-large"
  }, lastLogIn), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-small"
  }, loginTimeCode)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-large"
  }, "none")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: active ? 'icon-box red' : 'icon-box'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-bell"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: active ? 'alert-text red-text' : 'alert-text'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "On-Time Percentage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, onTimePercentage, "%") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, "not available"))))));
};

SummaryCards.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SummaryCards);

/***/ }),

/***/ "./components/Student/DetailSummaryPage/components/SummaryCards/utils/index.js":
/*!*************************************************************************************!*\
  !*** ./components/Student/DetailSummaryPage/components/SummaryCards/utils/index.js ***!
  \*************************************************************************************/
/*! exports provided: formatTimeLoggedIn, formatVideoWatched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeLoggedIn", function() { return formatTimeLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatVideoWatched", function() { return formatVideoWatched; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var formatTimeLoggedIn = function formatTimeLoggedIn(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hours !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, hours), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-small"
  }, "hrs ")), minutes !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, minutes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-small"
  }, "min")));
};
var formatVideoWatched = function formatVideoWatched(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hours !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, hours), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-small"
  }, "hrs ")), minutes !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, minutes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-small"
  }, "min")));
};

/***/ }),

/***/ "./components/Student/DetailSummaryPage/components/TestScores/index.js":
/*!*****************************************************************************!*\
  !*** ./components/Student/DetailSummaryPage/components/TestScores/index.js ***!
  \*****************************************************************************/
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
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__);










var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

var getIndicatorStatus = function getIndicatorStatus(activeSection, active) {
  return {
    left: activeSection === 'subjectScores' ? '50%' : '0',
    right: activeSection === 'subjectScores' ? '0' : '50%',
    backgroundColor: active ? '#00bbf7' : '#b2b2b2'
  };
}; // TODO: Implement final line chart data implementation later


var TestScores =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TestScores, _React$Component);

  function TestScores(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TestScores);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TestScores).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetOpenSection", function (event, openSection) {
      event.preventDefault();

      _this.setState({
        openSection: openSection
      });
    });

    _this.state = {
      openSection: 'compositeScore'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TestScores, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var openSection = this.state.openSection;
      var _this$props = this.props,
          _this$props$state = _this$props.state,
          compositeScore = _this$props$state.compositeScore,
          subjectScores = _this$props$state.subjectScores,
          active = _this$props.active;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l7 card-width-747"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main card card-chart"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Test Scores"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs-container tabs-charts-container"
      }, !active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-note-box",
        style: {
          display: 'block'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "title"
      }, "Nothing to see here yet."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-frame"
      }, "Once this student has taken multiple tests, you can track the progress here. ")) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "tabs",
        style: {
          filter: !active ? 'blur(3px)' : ""
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tab col s6 l6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'compositeScore');
        },
        className: openSection === 'compositeScore' ? 'active' : ''
      }, "Composite Score")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tab col s6 l6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'subjectScores');
        },
        className: openSection === 'subjectScores' ? 'active' : ''
      }, "Subject Scores")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "indicator",
        style: getIndicatorStatus(openSection, active)
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "scores_tab01",
        className: openSection === 'compositeScore' ? '' : 'tab-content',
        style: active ? {} : {
          filter: 'blur(3px)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: active ? 'card-panel panel-scores light-blue accent-2 white-text' : 'card-panel panel-scores white-text'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "panel-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-small"
      }, "Reading"), active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large"
      }, "+", compositeScore.reading) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-small"
      }, "Writing"), active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large"
      }, "+", compositeScore.writing) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-small"
      }, "Math"), active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large"
      }, "+", compositeScore.math) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-small"
      }, "Composite"), active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large"
      }, "+", compositeScore.composite) : null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-line-container js-scrollable-chart"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__["Line"], {
        data: data
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "scores_tab02",
        className: openSection === 'subjectScores' ? '' : 'tab-content',
        style: active ? {} : {
          filter: 'blur(3px)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: active ? 'card-panel panel-scores light-blue accent-2 white-text' : 'card-panel panel-scores white-text'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "panel-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-small"
      }, "Reading"), active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large"
      }, "+", subjectScores.reading) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-small"
      }, "Writing"), active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large"
      }, "+", subjectScores.writing) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-small"
      }, "Math"), active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large"
      }, "+", subjectScores.math) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-small"
      }, "Composite"), active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-large"
      }, "+", subjectScores.composite) : null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-line-container js-scrollable-chart"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__["Line"], {
        data: data
      })))))));
    }
  }]);

  return TestScores;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
TestScores.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TestScores);

/***/ }),

/***/ "./components/Student/DetailSummaryPage/index.js":
/*!*******************************************************!*\
  !*** ./components/Student/DetailSummaryPage/index.js ***!
  \*******************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CourseProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CourseProgress */ "./components/Student/DetailSummaryPage/components/CourseProgress/index.js");
/* harmony import */ var _components_OverdueWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/OverdueWork */ "./components/Student/DetailSummaryPage/components/OverdueWork/index.js");
/* harmony import */ var _components_SummaryCards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SummaryCards */ "./components/Student/DetailSummaryPage/components/SummaryCards/index.js");
/* harmony import */ var _components_TestScores__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/TestScores */ "./components/Student/DetailSummaryPage/components/TestScores/index.js");
/* harmony import */ var _components_StrengthsAndWeaknesses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/StrengthsAndWeaknesses */ "./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js");











 // eslint-disable-next-line react/prefer-stateless-function

var DetailSummaryPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DetailSummaryPage, _React$Component);

  function DetailSummaryPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DetailSummaryPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DetailSummaryPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DetailSummaryPage, [{
    key: "render",
    value: function render() {
      var _this$props$user = this.props.user,
          active = _this$props$user.active,
          courseProgress = _this$props$user.courseProgress,
          overdueWork = _this$props$user.overdueWork,
          summary = _this$props$user.summary,
          testScores = _this$props$user.testScores,
          strengthsAndWeaknesses = _this$props$user.strengthsAndWeaknesses;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cards-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row d-flex justify-content-center mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CourseProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
        active: active,
        state: courseProgress
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_OverdueWork__WEBPACK_IMPORTED_MODULE_8__["default"], {
        active: active,
        state: overdueWork
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row d-flex justify-content-center mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SummaryCards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        active: active,
        state: summary
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TestScores__WEBPACK_IMPORTED_MODULE_10__["default"], {
        active: active,
        state: testScores
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_StrengthsAndWeaknesses__WEBPACK_IMPORTED_MODULE_11__["default"], {
        active: active,
        state: strengthsAndWeaknesses
      })));
    }
  }]);

  return DetailSummaryPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

DetailSummaryPage.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DetailSummaryPage);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/components/FilterSection/index.js":
/*!**********************************************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/components/FilterSection/index.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _utils_sampleTopics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utils/sampleTopics */ "./components/utils/sampleTopics.js");
/* harmony import */ var _utils_worksheetSortOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/worksheetSortOptions */ "./components/Student/DetailWorksheetPage/utils/worksheetSortOptions.js");








/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/no-static-element-interactions */








var FilterSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FilterSection, _React$Component);

  function FilterSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FilterSection).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleShowFilters", function () {
      return _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClearFilters", function () {
      return _this.setState({
        activeFilters: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilterClick", function (filter) {
      var currentActiveFilters = _this.state.activeFilters;
      var activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        var filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState({
        activeFilters: activeFilters
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilterChange", function (event, name) {
      var _this$props = _this.props,
          onSetFilteredTopicState = _this$props.onSetFilteredTopicState,
          onUnsetFilteredTopicState = _this$props.onUnsetFilteredTopicState,
          onSetSort = _this$props.onSetSort;
      var value = event.target ? event.target.value : event;
      var updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(_this.state, {
        $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value)
      });

      _this.setState(updatedState);

      if (name === 'topic') {
        if (event === '') {
          return onUnsetFilteredTopicState();
        }

        return onSetFilteredTopicState(event);
      } else if (name === 'sort') {
        return onSetSort(event);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitNameFilter", function () {
      var _this$props2 = _this.props,
          onSetFilteredState = _this$props2.onSetFilteredState,
          onUnsetFilteredState = _this$props2.onUnsetFilteredState;
      var worksheetName = _this.state.worksheetName;

      if (worksheetName === '') {
        onUnsetFilteredState();
      }

      var transformedName = worksheetName.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    _this.state = {
      open: false,
      worksheetName: '',
      topic: {},
      sort: {},
      activeFilters: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          open = _this$state.open,
          activeFilters = _this$state.activeFilters,
          worksheetName = _this$state.worksheetName,
          topic = _this$state.topic,
          sort = _this$state.sort;
      var _this$props3 = this.props,
          currentView = _this$props3.currentView,
          onChangeView = _this$props3.onChangeView;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-form-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "collapsible expandable"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "collapsible-body",
        style: open ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-form_checkbox-list-holder justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "reading",
        checked: activeFilters.indexOf('reading') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('reading');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "reading"
      }, "Reading")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "writing",
        checked: activeFilters.indexOf('writing') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('writing');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "writing"
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "math",
        checked: activeFilters.indexOf('math') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('math');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "math"
      }, "Math"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "beginning",
        checked: activeFilters.indexOf('beginning') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('beginning');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "beginning"
      }, "Beginning")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "developing",
        checked: activeFilters.indexOf('developing') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('developing');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "developing"
      }, "Developing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "accomplished",
        checked: activeFilters.indexOf('accomplished') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('accomplished');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "accomplished"
      }, "Accomplished")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "exemplary",
        checked: activeFilters.indexOf('exemplary') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('exemplary');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "exemplary"
      }, "Exemplary"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "unassigned",
        checked: activeFilters.indexOf('unassigned') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('unassigned');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "unassigned"
      }, "Unassigned")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "complete",
        checked: activeFilters.indexOf('complete') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('complete');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "complete"
      }, "Complete")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "incomplete",
        checked: activeFilters.indexOf('incomplete') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('incomplete');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "incomplete"
      }, "Incomplete"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "hasReviewFlags",
        checked: activeFilters.indexOf('hasReviewFlags') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('hasReviewFlags');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "hasReviewFlags"
      }, "Has Review Flags"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueToday",
        checked: activeFilters.indexOf('dueToday') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('dueToday');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueToday"
      }, "Due Today")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueNextSession",
        checked: activeFilters.indexOf('dueNextSession') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('dueNextSession');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueNextSession"
      }, "Due By Next Session")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueThisWeek",
        checked: activeFilters.indexOf('dueThisWeek') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('dueThisWeek');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueThisWeek"
      }, "Due this Week")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "overdue",
        checked: activeFilters.indexOf('overdue') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('overdue');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "overdue"
      }, "Overdue"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "some-class",
        checked: activeFilters.indexOf('class') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('class');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "some-class"
      }, "Some Class")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "tutoring",
        checked: activeFilters.indexOf('tutoring') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('tutoring');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "tutoring"
      }, "Tutoring")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        id: "name_search",
        value: worksheetName,
        className: "input-control validate",
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'worksheetName');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "search-button",
        onClick: this.submitNameFilter
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: worksheetName.length ? 'label active' : 'label',
        htmlFor: "name_search"
      }, "Search"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__["default"])(topic, _utils_sampleTopics__WEBPACK_IMPORTED_MODULE_12__["default"]),
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'topic');
        },
        options: _utils_sampleTopics__WEBPACK_IMPORTED_MODULE_12__["default"],
        label: "Topic",
        stateKey: "topic",
        dropdownKey: "topic"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 xl7"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__["default"])(sort, _utils_worksheetSortOptions__WEBPACK_IMPORTED_MODULE_13__["default"]),
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'sort');
        },
        options: _utils_worksheetSortOptions__WEBPACK_IMPORTED_MODULE_13__["default"],
        label: "Sort By",
        stateKey: "sort",
        dropdownKey: "sort"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "switcher-block col s12 l4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "view-switcher"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "switcher center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        "data-view": "view-full",
        className: currentView === 'full' ? 'active' : '',
        onClick: function onClick() {
          return onChangeView('full');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Full View")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        "data-view": "view-list",
        className: currentView === 'list' ? 'active' : '',
        onClick: function onClick() {
          return onChangeView('list');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "List View"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-filters"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-item clear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.onClearFilters
      }, "Clear Filters")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "collapsible-header",
        onClick: this.onToggleShowFilters
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "open-text"
      }, open ? 'Hide Filters' : 'Open Filters')))))))));
    }
  }]);

  return FilterSection;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

FilterSection.propTypes = {
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  onChangeView: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetFilteredTopicState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onUnsetFilteredTopicState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/components/FullView/index.js":
/*!*****************************************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/components/FullView/index.js ***!
  \*****************************************************************************/
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
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/formatTimeEstimate */ "./components/Student/DetailWorksheetPage/utils/formatTimeEstimate.js");
/* harmony import */ var _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/statusColorMap */ "./components/Student/DetailWorksheetPage/utils/statusColorMap.js");













var _data = function data(percentage, status) {
  return {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: [_utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__["chartColorMap"][status], '#eaeaea']
    }]
  };
};

var FullView =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FullView, _React$Component);

  function FullView(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullView);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FullView).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetDropdown", function (dropdownIndex) {
      return _this.setState({
        dropdownIndex: dropdownIndex,
        dropdownIsOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDropdownClick", function (event, index) {
      var dropdownIsOpen = _this.state.dropdownIsOpen;
      event.preventDefault();

      if (dropdownIsOpen) {
        return _this.onCloseDropdown();
      }

      return _this.onSetDropdown(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapWorksheetCards", function () {
      var _this$props = _this.props,
          worksheets = _this$props.worksheets,
          onToggleDetailModalOpen = _this$props.onToggleDetailModalOpen;
      var _this$state = _this.state,
          dropdownIndex = _this$state.dropdownIndex,
          dropdownIsOpen = _this$state.dropdownIsOpen;
      return worksheets.map(function (worksheet, index) {
        var disabled = worksheet.disabled,
            worksheetName = worksheet.worksheetName,
            worksheetSource = worksheet.worksheetSource,
            subject = worksheet.subject,
            problemType = worksheet.problemType,
            difficulty = worksheet.difficulty,
            score = worksheet.score,
            status = worksheet.status,
            problems = worksheet.problems,
            timeEstimate = worksheet.timeEstimate,
            availableDate = worksheet.availableDate,
            dueDate = worksheet.dueDate,
            classifications = worksheet.classifications,
            flags = worksheet.flags,
            late = worksheet.late;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-main-col col s12 m8 l7 xl5",
          key: worksheet.id
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: disabled ? 'card-main work-card card-disabled card' : 'card-main work-card card'
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-panel panel-border"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-panel-row row"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "icon-col col s2"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "block-icon"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icon-sheets-w"
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col s8"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-panel-text"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "text-small truncate"
        }, "Worksheet (", subject, ")"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "text-large truncate"
        }, worksheetName))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "position-top right-align"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "icons-row"
        }, flags.length > 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
          className: "badge-text"
        }, flags.length), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icon-flag"
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "dropdown-block col"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          "data-target": "dropdown01",
          className: "dropdown-trigger btn",
          onClick: function onClick(event) {
            return _this.handleDropdownClick(event, index);
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "material-icons dots-icon"
        }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          id: "dropdown01",
          className: "dropdown-content dropdown-wide",
          style: {
            display: 'block',
            opacity: '1',
            transform: 'scaleX(1) scaleY(1)'
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          className: "modal-trigger link-block",
          onClick: function onClick() {
            return onToggleDetailModalOpen(index);
          }
        }, "View Details")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!"
        }, "Dismiss Flags")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!"
        }, "Reset")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!",
          className: "link-delete"
        }, "Delete"))) : null)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-top-block"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-flex row mb-0"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "left-col col s7"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
          className: "dl-horizontal"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Problem Type:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, problemType))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "right-col col s5 right-align"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
          className: "dl-horizontal"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Di\uFB03culty:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, difficulty)))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-content"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-flex sameheight-all row mb-0"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col s6"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "chart-container"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "chart-holder"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__["Doughnut"], {
          data: function data() {
            return _data(score, status);
          },
          options: {
            circumference: 1 * Math.PI,
            rotation: 1 * Math.PI,
            cutoutPercentage: 60,
            tooltips: false
          }
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "chart-value",
          style: {
            backgroundColor: _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__["chartColorMap"][status]
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          "data-count-up": true,
          "data-start-val": "0",
          "data-end-val": "96",
          "data-duration": "1"
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "percentage"
        }, score && "".concat(score, "%")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "chart-row"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "chart-col chart-start"
        }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "chart-col chart-end"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "amount",
          style: {
            color: _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__["chartColorMap"][status]
          }
        }, problems))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "chart-description"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
          className: "dl-horizontal"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Time Est:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, Object(_utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_10__["default"])(timeEstimate))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
          className: "dl-horizontal"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Problems:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, problems))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col s6 right-align justify-end"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "chart-description"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
          className: "dl-horizontal"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Available:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
          dateTime: availableDate
        }, availableDate))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
          className: late ? 'dl-horizontal red-text text-darken-3' : 'dl-horizontal'
        }, disabled ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "No Due Date") : [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", {
          key: "0"
        }, "Due:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", {
          key: "1"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
          dateTime: dueDate
        }, dueDate))])), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "align-self-end"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "badge badge-rounded-md ".concat(_utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__["default"][status], " white-text")
        }, status)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-text"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
          className: "dl-horizontal"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Worksheet Source:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, worksheetSource))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-inner-row"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row-holder"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "classification-list"
        }, classifications.map(function (classification) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "class-box",
            key: classification
          }, classification);
        })))))));
      });
    });

    _this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FullView, [{
    key: "render",
    value: function render() {
      var worksheets = this.props.worksheets;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "result-row center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "result"
      }, " - ", worksheets.length, " results -")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex-content card-width-272"
      }, this.mapWorksheetCards()));
    }
  }]);

  return FullView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

FullView.propTypes = {
  worksheets: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  onToggleDetailModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FullView);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/components/ListView/components/TableHeader/index.js":
/*!****************************************************************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/components/ListView/components/TableHeader/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TableHeader = function TableHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell icon-cell"
  }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell name-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Worksheet")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell graph-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Score")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell description-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Problems")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell time-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Time Est")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell date-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Assign")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell date-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Due")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell completed-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Completed")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell flags-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Flags")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell status-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Status")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-table-cell drop-cell"
  }, "\xA0")));
};

/* harmony default export */ __webpack_exports__["default"] = (TableHeader);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/components/ListView/index.js":
/*!*****************************************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/components/ListView/index.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TableHeader */ "./components/Student/DetailWorksheetPage/components/ListView/components/TableHeader/index.js");
/* harmony import */ var _utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/formatTimeEstimate */ "./components/Student/DetailWorksheetPage/utils/formatTimeEstimate.js");
/* harmony import */ var _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/statusColorMap */ "./components/Student/DetailWorksheetPage/utils/statusColorMap.js");













var ListView =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ListView, _React$Component);

  function ListView(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListView);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ListView).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetDropdown", function (dropdownIndex) {
      return _this.setState({
        dropdownIndex: dropdownIndex,
        dropdownIsOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDropdownClick", function (event, index) {
      var dropdownIsOpen = _this.state.dropdownIsOpen;
      event.preventDefault();

      if (dropdownIsOpen) {
        return _this.onCloseDropdown();
      }

      return _this.onSetDropdown(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapWorksheetRows", function () {
      var _this$props = _this.props,
          worksheets = _this$props.worksheets,
          onToggleDetailModalOpen = _this$props.onToggleDetailModalOpen;
      var _this$state = _this.state,
          dropdownIndex = _this$state.dropdownIndex,
          dropdownIsOpen = _this$state.dropdownIsOpen;
      return worksheets.map(function (worksheet, index) {
        var disabled = worksheet.disabled,
            worksheetName = worksheet.worksheetName,
            score = worksheet.score,
            status = worksheet.status,
            problems = worksheet.problems,
            timeEstimate = worksheet.timeEstimate,
            assignDate = worksheet.assignDate,
            dueDate = worksheet.dueDate,
            completed = worksheet.completed,
            flags = worksheet.flags;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: disabled ? 'card card-disabled list-table-row' : 'card list-table-row',
          key: worksheet.id
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell icon-cell"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "block-icon"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icon-sheets-w"
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell name-cell"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-panel-text truncate"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "text-large truncate"
        }, worksheetName))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell graph-cell"
        }, score && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "chart-bar ".concat(_utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__["default"][status], " white-text")
        }, score, "%")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell description-cell"
        }, problems), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell time-cell"
        }, Object(_utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_10__["default"])(timeEstimate)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell date-cell"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
          dateTime: "2019-01-27"
        }, assignDate)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell date-cell"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
          dateTime: "2019-01-27"
        }, dueDate)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell completed-cell"
        }, completed && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, completed, " of ", problems)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell flags-cell"
        }, flags.length > 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
          className: "badge-text"
        }, flags.length), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icon-flag"
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell status-cell"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "badge badge-rounded-md ".concat(_utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__["default"][status], " white-text")
        }, status)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "list-table-cell drop-cell"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "dropdown-block"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          "data-target": "dropdown01",
          className: "dropdown-trigger btn",
          onClick: function onClick(event) {
            return _this.handleDropdownClick(event, index);
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "material-icons dots-icon"
        }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          id: "dropdown01",
          className: "dropdown-content dropdown-wide",
          style: {
            display: 'block',
            opacity: '1',
            transform: 'scaleX(1) scaleY(1)'
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          className: "modal-trigger link-block",
          onClick: function onClick() {
            return onToggleDetailModalOpen(index);
          }
        }, "View Details")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!"
        }, "Dismiss Flags")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!"
        }, "Reset")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!",
          className: "link-delete"
        }, "Delete"))) : null)));
      });
    });

    _this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListView, [{
    key: "render",
    value: function render() {
      var worksheets = this.props.worksheets;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-md"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "result-row center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "result"
      }, " - ", worksheets.length, " results -")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "list-view-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "list-table"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "list-table-body"
      }, this.mapWorksheetRows()))))));
    }
  }]);

  return ListView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

ListView.propTypes = {
  worksheets: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  onToggleDetailModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ListView);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/index.js":
/*!*********************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/index.js ***!
  \*********************************************************/
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
/* harmony import */ var _components_FullView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/FullView */ "./components/Student/DetailWorksheetPage/components/FullView/index.js");
/* harmony import */ var _components_ListView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ListView */ "./components/Student/DetailWorksheetPage/components/ListView/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Student/DetailWorksheetPage/components/FilterSection/index.js");
/* harmony import */ var _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/sampleWorksheets */ "./components/Student/DetailWorksheetPage/utils/sampleWorksheets.js");
/* harmony import */ var _utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/sortFunctions */ "./components/utils/sortFunctions.js");
/* harmony import */ var _LessonWorksheetTestSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../LessonWorksheetTestSection */ "./components/Student/LessonWorksheetTestSection/index.js");
















var DetailWorksheetPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DetailWorksheetPage, _React$Component);

  function DetailWorksheetPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DetailWorksheetPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DetailWorksheetPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleAssignWorksheetDropdown", function (event) {
      event.preventDefault();

      _this.setState(function (_ref) {
        var assignWorksheetDropdownOpen = _ref.assignWorksheetDropdownOpen;
        return {
          assignWorksheetDropdownOpen: !assignWorksheetDropdownOpen
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleDetailModalOpen", function (worksheetIndex) {
      return _this.setState(function (_ref2) {
        var detailModalOpen = _ref2.detailModalOpen,
            worksheets = _ref2.worksheets;
        return {
          detailModalOpen: !detailModalOpen,
          activeWorksheet: worksheets[worksheetIndex]
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeView", function (view) {
      return _this.setState({
        currentView: view
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredState", function (filterName) {
      return _this.setState({
        worksheetsAreFiltered: true,
        filterName: filterName
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        worksheetsAreFiltered: false,
        filterName: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredTopicState", function (filterTopic) {
      return _this.setState({
        worksheetsAreFiltered: true,
        filterTopic: filterTopic
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredTopicState", function () {
      return _this.setState({
        filterTopic: ''
      }, _this.checkForFilteredState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onAssignWorksheet", function (assignType) {
      console.warn('Stubbed out assign worksheet click', assignType);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByName", function () {
      var _this$state = _this.state,
          worksheets = _this$state.worksheets,
          filterName = _this$state.filterName;
      return worksheets.reduce(function (finalArr, currentWorksheet) {
        var _currentWorksheet$acc = currentWorksheet.accountInfo,
            lastName = _currentWorksheet$acc.lastName,
            firstName = _currentWorksheet$acc.firstName;
        var worksheetString = "".concat(firstName.toLowerCase()).concat(lastName.toLowerCase());

        if (worksheetString.indexOf(filterName) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByTopic", function () {
      var preFilteredWorksheets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this$state2 = _this.state,
          allWorksheets = _this$state2.worksheets,
          filterTopic = _this$state2.filterTopic;
      var worksheets;

      if (preFilteredWorksheets.length) {
        worksheets = preFilteredWorksheets;
      } else {
        worksheets = allWorksheets;
      }

      return worksheets.reduce(function (finalArr, currentWorksheet) {
        var topic = currentWorksheet.topic;

        if (topic === filterTopic && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSortWorksheets", function (worksheets) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'dueDate':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__["dueDate"]);

        case 'assignDate':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__["assignDate"]);

        case 'problems':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__["problems"]);

        case 'completed':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__["completed"]);

        case 'flags':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__["flags"]);

        case 'score':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__["score"]);

        case 'timeEstimate':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__["timeEstimate"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMappableWorksheets", function () {
      var _this$state3 = _this.state,
          filterName = _this$state3.filterName,
          filterTopic = _this$state3.filterTopic,
          allWorksheets = _this$state3.worksheets,
          sort = _this$state3.sort;
      var worksheets;

      if (filterName.length && !filterTopic.length) {
        worksheets = _this.onFilterByName();
      } else if (!filterName.length && filterTopic.length) {
        worksheets = _this.onFilterByTopic();
      } else if (filterName.length && filterTopic.length) {
        var filteredByName = _this.onFilterByName();

        worksheets = _this.onFilterByTopic(filteredByName);
      } else {
        worksheets = allWorksheets;
      }

      if (sort) {
        return _this.onSortWorksheets(worksheets);
      }

      return worksheets;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "checkForFilteredState", function () {
      var _this$state4 = _this.state,
          filterName = _this$state4.filterName,
          filterTopic = _this$state4.filterTopic;

      if (!filterName.length && !filterTopic.length) {
        _this.setState({
          worksheetsAreFiltered: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWorksheetView", function () {
      var currentView = _this.state.currentView;

      switch (currentView) {
        case 'list':
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ListView__WEBPACK_IMPORTED_MODULE_10__["default"], {
            onToggleDetailModalOpen: _this.onToggleDetailModalOpen,
            worksheets: _this.getMappableWorksheets()
          });

        case 'full':
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FullView__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onToggleDetailModalOpen: _this.onToggleDetailModalOpen,
            worksheets: _this.getMappableWorksheets()
          });

        default:
          break;
      }
    });

    _this.state = {
      sort: '',
      filterName: '',
      filterTopic: '',
      currentView: 'full',
      assignWorksheetDropdownOpen: false,
      worksheets: _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_12__["default"],
      detailModalOpen: false,
      activeWorksheet: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DetailWorksheetPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state5 = this.state,
          currentView = _this$state5.currentView,
          assignWorksheetDropdownOpen = _this$state5.assignWorksheetDropdownOpen,
          detailModalOpen = _this$state5.detailModalOpen,
          activeWorksheet = _this$state5.activeWorksheet;
      var user = this.props.user;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, detailModalOpen ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_LessonWorksheetTestSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onClose: this.onToggleDetailModalOpen,
        worksheet: activeWorksheet,
        user: user
      }) : [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-holder grey lighten-5 switcher-section",
        key: "0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FilterSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        currentView: currentView,
        onChangeView: this.onChangeView,
        onSetSort: this.onSetSort,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState,
        onSetFilteredTopicState: this.onSetFilteredTopicState,
        onUnsetFilteredTopicState: this.onUnsetFilteredTopicState
      }), this.renderWorksheetView()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "add-btn-block",
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_assign_selected",
        onClick: this.onToggleAssignWorksheetDropdown,
        className: "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), " Assign Worksheet"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown_assign_selected",
        className: "dropdown-content dropdown-small",
        style: {
          display: assignWorksheetDropdownOpen ? 'block' : '0',
          opacity: assignWorksheetDropdownOpen ? '1' : '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onAssignWorksheet('fromSaved');
        }
      }, "From Saved")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onAssignWorksheet('createNew');
        }
      }, "Create New"))))]);
    }
  }]);

  return DetailWorksheetPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

DetailWorksheetPage.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DetailWorksheetPage);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/utils/formatTimeEstimate.js":
/*!****************************************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/utils/formatTimeEstimate.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formatTimeEstimate = function formatTimeEstimate(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  var hourString = hours !== 0 ? "".concat(hours, " hrs") : '';
  var minuteString = minutes !== 0 ? "".concat(minutes, " mins") : '';
  return "".concat(hourString, " ").concat(minuteString);
};

/* harmony default export */ __webpack_exports__["default"] = (formatTimeEstimate);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/utils/sampleWorksheets.js":
/*!**************************************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/utils/sampleWorksheets.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LessonWorksheetTestSection/utils/sampleQuestions */ "./components/Student/LessonWorksheetTestSection/utils/sampleQuestions.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  worksheetName: 'Some SAT Problems about Triangles',
  subject: 'Math',
  score: '',
  problems: 15,
  problemType: 'Skill Builder',
  difficulty: 'Beginner',
  timeEstimate: '14',
  assignDate: '1/27/19',
  assignTime: '3:01 PM',
  availableDate: '1/27/19',
  dueDate: '2/10/19',
  dueTime: '9:32 AM',
  completedDate: '3/12/19',
  completedTime: '2:53 PM',
  completed: '',
  completionLevel: 'Complete',
  unit: 'Reading Unit #4',
  passage: '214',
  type: 'challenge + practice',
  flags: [],
  status: 'Assigned',
  disabled: true,
  late: false,
  topic: 'specialRightTriangles',
  worksheetSource: 'Admin Created',
  classifications: ['Right Triangles', 'More Math', "Lots Of Math"],
  totalVideoMinutesWatched: '77',
  totalVideoMinutesAllMissedProblems: '214',
  questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  id: 2,
  worksheetName: 'Worksheet 2',
  subject: 'Reading',
  score: '',
  problems: 18,
  problemType: 'Skill Builder',
  difficulty: 'Beginner',
  timeEstimate: '30',
  assignDate: '1/19/19',
  assignTime: '3:01 PM',
  availableDate: '1/19/19',
  dueDate: '2/02/19',
  dueTime: '9:32 AM',
  completedDate: '',
  completedTime: '',
  completed: 0,
  completionLevel: 'Not Started',
  unit: 'Reading Unit #4',
  passage: '51',
  type: 'challenge + practice',
  flags: [{
    title: 'one',
    status: 'reviewed'
  }, {
    title: 'two',
    status: 'reviewed'
  }, {
    title: 'three',
    status: 'toReview'
  }],
  status: 'Assigned',
  disabled: false,
  late: true,
  topic: 'topic2',
  worksheetSource: 'User Created',
  classifications: ['Math', 'More Math', "Lots Of Math"],
  totalVideoMinutesWatched: '77',
  totalVideoMinutesAllMissedProblems: '214',
  questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  id: 3,
  worksheetName: 'Worksheet 3',
  subject: 'Science',
  score: '81',
  problems: 16,
  problemType: 'SAT Style',
  difficulty: 'Advanced',
  timeEstimate: '24',
  assignDate: '1/11/19',
  assignTime: '3:01 PM',
  availableDate: '1/11/19',
  dueDate: '2/12/19',
  dueTime: '9:32 AM',
  completedDate: '3/12/19',
  completedTime: '2:53 PM',
  completed: 10,
  completionLevel: 'Complete',
  unit: 'Reading Unit #4',
  passage: '121',
  type: 'challenge + practice',
  flags: [],
  status: 'Accomplished',
  disabled: false,
  late: false,
  topic: 'topic2',
  worksheetSource: 'Admin Created',
  classifications: ['Right Triangles', 'Math', "Lots Of Math"],
  totalVideoMinutesWatched: '124',
  totalVideoMinutesAllMissedProblems: '312',
  questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  id: 4,
  worksheetName: 'Worksheet 4',
  subject: 'Science',
  score: '32',
  problems: 14,
  problemType: 'SAT Style',
  difficulty: 'Mixed',
  timeEstimate: '31',
  assignDate: '1/24/19',
  assignTime: '3:01 PM',
  availableDate: '1/24/19',
  dueDate: '2/27/19',
  dueTime: '9:32 AM',
  completedDate: '',
  completedTime: '',
  completed: 4,
  completionLevel: 'Started',
  unit: 'Reading Unit #4',
  passage: '128',
  type: 'challenge + practice',
  flags: [{
    title: 'one',
    status: 'reviewed'
  }, {
    title: 'two',
    status: 'reviewed'
  }, {
    title: 'three',
    status: 'toReview'
  }, {
    title: 'four',
    status: 'toReview'
  }],
  status: 'Beginning',
  disabled: false,
  late: true,
  topic: 'topic3',
  worksheetSource: 'User Created',
  classifications: ['Trigonometry', 'More Math', "Lots Of Math"],
  totalVideoMinutesWatched: '311',
  totalVideoMinutesAllMissedProblems: '401',
  questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  id: 5,
  worksheetName: 'Worksheet 5',
  subject: 'Reading',
  score: '93',
  problems: 21,
  problemType: 'Mixed',
  difficulty: 'Mixed',
  timeEstimate: '23',
  assignDate: '1/12/19',
  assignTime: '3:01 PM',
  availableDate: '1/12/19',
  dueDate: '2/03/19',
  dueTime: '9:32 AM',
  completedDate: '3/12/19',
  completedTime: '2:53 PM',
  completed: 6,
  completionLevel: 'Instructor Editing',
  unit: 'Reading Unit #4',
  passage: '73',
  type: 'challenge + practice',
  flags: [{
    title: 'one',
    status: 'toReview'
  }, {
    title: 'two',
    status: 'toReview'
  }],
  status: 'Developing',
  disabled: false,
  late: false,
  topic: 'topic3',
  worksheetSource: 'Admin Created',
  classifications: ['Trigonometry', 'Math', "Lots Of Math"],
  totalVideoMinutesWatched: '51',
  totalVideoMinutesAllMissedProblems: '200',
  questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  id: 6,
  worksheetName: 'Worksheet 6',
  subject: 'Math',
  score: '64',
  problems: 30,
  problemType: 'Mixed',
  difficulty: 'Advanced',
  timeEstimate: '65',
  assignDate: '1/09/19',
  assignTime: '3:01 PM',
  availableDate: '1/09/19',
  dueDate: '2/12/19',
  dueTime: '9:32 AM',
  completedDate: '',
  completedTime: '',
  completed: 5,
  completionLevel: 'Not Started',
  unit: 'Reading Unit #4',
  passage: '153',
  type: 'challenge + practice',
  flags: [],
  status: 'Developing',
  disabled: false,
  late: false,
  topic: 'topic4',
  worksheetSource: 'User Created',
  classifications: ['Right Triangles', 'Trigonometry', 'More Math'],
  totalVideoMinutesWatched: '83',
  totalVideoMinutesAllMissedProblems: '305',
  questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
}]);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/utils/statusColorMap.js":
/*!************************************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/utils/statusColorMap.js ***!
  \************************************************************************/
/*! exports provided: chartColorMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartColorMap", function() { return chartColorMap; });
var statusColorMap = {
  Assigned: 'grey darken-4',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple'
};
var chartColorMap = {
  Assigned: '#333',
  Accomplished: '#7327cc',
  Beginning: '#ed1c24',
  Exemplary: 'rgb(0, 100, 244)',
  Developing: '#c10078'
};
/* harmony default export */ __webpack_exports__["default"] = (statusColorMap);

/***/ }),

/***/ "./components/Student/DetailWorksheetPage/utils/worksheetSortOptions.js":
/*!******************************************************************************!*\
  !*** ./components/Student/DetailWorksheetPage/utils/worksheetSortOptions.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  label: 'Due Date',
  value: 'dueDate'
}, {
  label: 'Assign Date',
  value: 'assignDate'
}, {
  label: 'Problems',
  value: 'problems'
}, {
  label: 'Completed',
  value: 'completed'
}, {
  label: 'Flags',
  value: 'flags'
}, {
  label: 'Score',
  value: 'score'
}, {
  label: 'Time Estimate',
  value: 'timeEstimate'
}]);

/***/ }),

/***/ "./components/Student/IndividualStudentPage/index.js":
/*!***********************************************************!*\
  !*** ./components/Student/IndividualStudentPage/index.js ***!
  \***********************************************************/
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
/* harmony import */ var _AccountPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../AccountPage */ "./components/Student/AccountPage/index.js");
/* harmony import */ var _DetailSummaryPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DetailSummaryPage */ "./components/Student/DetailSummaryPage/index.js");
/* harmony import */ var _DetailWorksheetPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DetailWorksheetPage */ "./components/Student/DetailWorksheetPage/index.js");
/* harmony import */ var _DetailLessonList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../DetailLessonList */ "./components/Student/DetailLessonList/index.js");
/* harmony import */ var _components_StudentNavBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/StudentNavBar */ "./components/Student/components/StudentNavBar/index.js");















var IndividualStudentPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IndividualStudentPage, _React$Component);

  function IndividualStudentPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndividualStudentPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndividualStudentPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleActivationDropdown", function () {
      return _this.setState(function (_ref) {
        var activationDropdownOpen = _ref.activationDropdownOpen;
        return {
          activationDropdownOpen: !activationDropdownOpen
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetActivePage", function (activePage) {
      return _this.setState({
        activePage: activePage
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onHandleDetailsChange", function (name, event) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, event.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderCurrentPage", function () {
      var activePage = _this.state.activePage;
      var student = _this.props.student;

      if (activePage === 'summary') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DetailSummaryPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
          user: student
        });
      }

      if (activePage === 'account') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_AccountPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
          user: student
        });
      }

      if (activePage === 'lessons') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DetailLessonList__WEBPACK_IMPORTED_MODULE_12__["default"], {
          user: student
        });
      }

      if (activePage === 'worksheets') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DetailWorksheetPage__WEBPACK_IMPORTED_MODULE_11__["default"], {
          user: student
        });
      }

      return null;
    });

    _this.state = {
      activePage: 'summary',
      activationDropdownOpen: false,
      licenseCode: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndividualStudentPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onRedirectToStudentPage = _this$props.onRedirectToStudentPage,
          _this$props$student = _this$props.student,
          active = _this$props$student.active,
          _this$props$student$s = _this$props$student.studentInformation,
          firstName = _this$props$student$s.firstName,
          lastName = _this$props$student$s.lastName;
      var _this$state = this.state,
          activePage = _this$state.activePage,
          activationDropdownOpen = _this$state.activationDropdownOpen,
          licenseCode = _this$state.licenseCode;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title-row card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "menu"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "breadcrumb-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-wrapper "
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!",
        className: "breadcrumb",
        onClick: onRedirectToStudentPage
      }, "<  Students"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "h1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-student"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-block"
      }, firstName, " ", lastName))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_StudentNavBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        activePage: activePage,
        onSetActivePage: this.onSetActivePage
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "activate-block"
      }, active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "btn-text visible-lg"
      }, "Account Activated"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-unlock"
      })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleActivationDropdown,
        className: "waves-effect btn btn-orange btn-account_inactive dropdown-trigger",
        "data-target": "dropdown_activate"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "btn-text visible-lg"
      }, "Activate Account"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-key"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "dropdown_activate",
        className: "dropdown-content",
        style: activationDropdownOpen ? {
          display: 'block',
          opacity: '1'
        } : {}
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "h3"
      }, "Ready to begin your course?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subtitle"
      }, "Please enter a valid license code below.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: licenseCode,
        id: "license-code",
        onChange: function onChange(event) {
          return _this2.onHandleDetailsChange('licenseCode', event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        htmlFor: "license_code"
      }, "License Code")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "btn-holder center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-blue",
        type: "submit"
      }, "Activate")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-block center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "If you need license codes, you can get them here: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-light btn-small btn-blue"
      }, "Purchase Licenses"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "*Note: "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "We o\uFB00er discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students.")))))), this.renderCurrentPage());
    }
  }]);

  return IndividualStudentPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

IndividualStudentPage.propTypes = {
  student: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  onRedirectToStudentPage: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (IndividualStudentPage);

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/components/CardSection/index.js":
/*!***************************************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/components/CardSection/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index */ "./components/Student/LessonWorksheetTestSection/utils/index.js");





var CardSection = function CardSection(_ref) {
  var completionLevel = _ref.completionLevel,
      problems = _ref.problems,
      completedProblems = _ref.completedProblems,
      status = _ref.status,
      flags = _ref.flags,
      totalVideoMinutesWatched = _ref.totalVideoMinutesWatched,
      totalVideoMinutesAllMissedProblems = _ref.totalVideoMinutesAllMissedProblems;
  var percentageComplete = Number(completedProblems / problems * 100).toFixed(0);
  var videoWatchedPercentage = Number(totalVideoMinutesWatched / totalVideoMinutesAllMissedProblems * 100).toFixed(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cards-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex same-height justify-center row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l5 col-435"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Performance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-student-detail card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex sameheight-all row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-container chart-container-195"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: function data() {
      return Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["data"])(percentageComplete, status);
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
      backgroundColor: _utils_index__WEBPACK_IMPORTED_MODULE_3__["chartColorMap"][status]
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-count-up": true,
    "data-start-val": "0",
    "data-end-val": "75",
    "data-duration": "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "percentage"
  }, completionLevel === 'Complete' ? percentageComplete : '', completionLevel !== 'Started' ? '%' : ''))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-col chart-start"
  }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-col chart-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "amount",
    style: {
      color: _utils_index__WEBPACK_IMPORTED_MODULE_3__["chartColorMap"][status]
    }
  }, problems))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
    className: "dl-horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
    className: "text-large"
  }, "Status:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "text-large"
  }, completionLevel)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-small"
  }, completedProblems, " out of ", problems, " ", completionLevel === 'Started' ? 'completed' : 'correct')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-description"
  }, completionLevel === 'Completed' || completionLevel === 'Instructor Editing' ? [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
    className: "dl-horizontal",
    key: "0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
    className: "text-large"
  }, "Score:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "text-large"
  }, percentageComplete, "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-small",
    key: "1"
  }, completedProblems, " out of ", problems, " correct")] : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-large gray-text"
  }, "Score: Incomplete")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "align-self-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-rounded-lg ".concat(_utils_index__WEBPACK_IMPORTED_MODULE_3__["statusColorMap"][status], " white-text")
  }, status)))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l3 col-320"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Video"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-student-detail card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex sameheight-all row mb-0 align-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s6",
    style: {
      marginBottom: '12px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-container chart-container-195"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-holder",
    style: {
      width: '130px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      position: 'absolute',
      top: '30px',
      left: '42px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '23px',
      fontWeight: '700',
      color: '#02baf7'
    }
  }, Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["formatTimeEstimate"])(totalVideoMinutesWatched)), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '16px',
      color: '#bbbbbb'
    }
  }, "out of"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '23px',
      fontWeight: '700',
      color: '#838383'
    }
  }, Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["formatTimeEstimate"])(totalVideoMinutesAllMissedProblems))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: function data() {
      return Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["data"])(videoWatchedPercentage, status, '#02baf7');
    },
    height: 300,
    width: 300,
    options: {
      circumference: 2 * Math.PI,
      rotation: 1 * Math.PI,
      cutoutPercentage: 70,
      tooltips: false
    }
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "blue-text"
  }, "total minutes of video watched")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "grey-text"
  }, "total minutes of video for all missed problems")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 l3 col-320"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Flagged for Review"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-student-detail card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex sameheight-all row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badges-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge-block red-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-rounded-md badge red darken-2 white-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "badge-text"
  }, flags.filter(function (flag) {
    return flag.status === 'toReview';
  }).length), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-flag"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-block-text"
  }, "To Review")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-rounded-md badge grey darken-2 white-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "badge-text"
  }, flags.filter(function (flag) {
    return flag.status === 'reviewed';
  }).length), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-flag"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-block-text"
  }, "Reviewed")))))))))));
};

CardSection.propTypes = {
  flags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  problems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  completionLevel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  completedProblems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  totalVideoMinutesWatched: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  totalVideoMinutesAllMissedProblems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardSection);

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/components/ChallengeQuestions/index.js":
/*!**********************************************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/components/ChallengeQuestions/index.js ***!
  \**********************************************************************************************/
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
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Question */ "./components/Student/LessonWorksheetTestSection/components/Question/index.js");











var ChallengeQuestions =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ChallengeQuestions, _React$Component);

  function ChallengeQuestions() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChallengeQuestions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChallengeQuestions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapQuestions", function () {
      return _this.props.questions.map(function (question) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Question__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: question.id,
          question: question,
          questionDropdownIndex: _this.props.questionDropdownIndex,
          questionDropdownOpen: _this.props.questionDropdownOpen,
          answerSheetComplete: _this.props.answerSheetComplete,
          onOpenQuestionModal: _this.props.onOpenQuestionModal,
          handleQuestionDropdownClick: _this.props.handleQuestionDropdownClick
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChallengeQuestions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Challenge"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-answer card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ol", {
        className: "answers-list"
      }, this.mapQuestions())))));
    }
  }]);

  return ChallengeQuestions;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

ChallengeQuestions.propTypes = {
  questions: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  questionDropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  answerSheetComplete: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onOpenQuestionModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  questionDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  handleQuestionDropdownClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ChallengeQuestions);

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/components/PracticeQuestions/index.js":
/*!*********************************************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/components/PracticeQuestions/index.js ***!
  \*********************************************************************************************/
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
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Question */ "./components/Student/LessonWorksheetTestSection/components/Question/index.js");











var PracticeQuestions =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PracticeQuestions, _React$Component);

  function PracticeQuestions() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PracticeQuestions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PracticeQuestions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapQuestions", function () {
      return _this.props.questions.map(function (question) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Question__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: question.id,
          question: question,
          questionDropdownIndex: _this.props.questionDropdownIndex,
          questionDropdownOpen: _this.props.questionDropdownOpen,
          answerSheetComplete: _this.props.answerSheetComplete,
          onOpenQuestionModal: _this.props.onOpenQuestionModal,
          handleQuestionDropdownClick: _this.props.handleQuestionDropdownClick
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PracticeQuestions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Practice"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ol", {
        className: "answers-list"
      }, this.mapQuestions())))));
    }
  }]);

  return PracticeQuestions;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

PracticeQuestions.propTypes = {
  questions: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  questionDropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  answerSheetComplete: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onOpenQuestionModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  questionDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  handleQuestionDropdownClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PracticeQuestions);

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/components/Question/index.js":
/*!************************************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/components/Question/index.js ***!
  \************************************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./components/Student/LessonWorksheetTestSection/utils/index.js");











var Question =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Question, _React$Component);

  function Question() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Question);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Question)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapAnswerChoices", function () {
      var _this$props = _this.props,
          _this$props$question = _this$props.question,
          answerType = _this$props$question.answerType,
          answerChoices = _this$props$question.answerChoices,
          studentAnswer = _this$props$question.studentAnswer,
          answerSheetComplete = _this$props.answerSheetComplete;

      if (answerSheetComplete) {
        if (answerType === 'letter') {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
            className: "answer-list"
          }, answerChoices.map(function (answer) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
              key: answer.answerLetter
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
              className: "badge-circle badge-circle-bordered",
              style: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getCompleteAnswerColor"])('letter', answer, studentAnswer)
            }, answer.answerLetter));
          }));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "answer-list"
        }, answerChoices.map(function (answer) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            key: answer.answerValue
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "badge badge-rounded badge-rounded-bordered",
            style: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getCompleteAnswerColor"])('value', answer, studentAnswer)
          }, answer.answerValue));
        }));
      }

      if (answerType === 'letter') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "answer-list"
        }, answerChoices.map(function (answer) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            key: answer.answerLetter
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "badge-circle badge-circle-bordered",
            style: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getAnswerColor"])(answer)
          }, answer.answerLetter));
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "answer-list"
      }, answerChoices.map(function (answer) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: answer.answerValue
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "badge badge-rounded badge-rounded-bordered",
          style: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getAnswerColor"])(answer)
        }, answer.answerValue));
      }));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Question, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onOpenQuestionModal = _this$props2.onOpenQuestionModal,
          question = _this$props2.question,
          answerSheetComplete = _this$props2.answerSheetComplete,
          handleQuestionDropdownClick = _this$props2.handleQuestionDropdownClick,
          questionDropdownOpen = _this$props2.questionDropdownOpen,
          questionDropdownIndex = _this$props2.questionDropdownIndex;
      var difficulty = question.difficulty,
          hasVideo = question.hasVideo,
          flagged = question.flagged,
          studentNotes = question.studentNotes;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "answers-list-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "answer-row row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col col-120"
      }, this.mapAnswerChoices()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col col-30"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "status-info"
      }, _utils__WEBPACK_IMPORTED_MODULE_9__["difficultyMap"][difficulty])), hasVideo && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col col-43"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "play-progress",
        "data-video-id": "video001"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "play"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        viewBox: "0 0 50 50",
        width: "50",
        height: "50",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        className: "circle-static",
        cx: "25.8",
        cy: "24.3",
        r: "22.8",
        style: {
          strokeWidth: '3',
          fill: 'rgba(0,0,0,0)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        className: "circle-progress",
        cx: "25.8",
        cy: "24.3",
        r: "22.8",
        style: {
          stroke: 'none',
          strokeWidth: '3',
          fill: 'rgba(0,0,0,0)'
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col col-auto"
      }, answerSheetComplete && flagged ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "status-answer",
        style: {
          color: '#c0272d'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-flag"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "status-text"
      }, "Review")) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-block col col-35"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger",
        "data-target": "dropdown_answer01-3",
        onClick: function onClick(event) {
          return handleQuestionDropdownClick(event, question);
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), questionDropdownOpen && question.id === questionDropdownIndex ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown_answer01-3",
        className: "dropdown-content dropdown-exwide",
        style: {
          display: 'block',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "modal-trigger",
        href: "#",
        onClick: function onClick() {
          return onOpenQuestionModal(question);
        }
      }, "View Problem")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!"
      }, "Dismiss Flag")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!"
      }, "Edit Response"))) : null)), answerSheetComplete && studentNotes ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "comment-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?")) : null);
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
Question.propTypes = {
  question: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  questionDropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  onOpenQuestionModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  answerSheetComplete: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  questionDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  handleQuestionDropdownClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/components/QuestionModal/index.js":
/*!*****************************************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/components/QuestionModal/index.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./components/Student/LessonWorksheetTestSection/utils/index.js");









/* eslint-disable jsx-a11y/media-has-caption */






var QuestionModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(QuestionModal, _React$Component);

  function QuestionModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuestionModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleReviewedStatus", function () {
      return _this.setState(function (_ref) {
        var reviewedWithStudent = _ref.reviewedWithStudent;
        return {
          reviewedWithStudent: !reviewedWithStudent
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapAnswerChoices", function () {
      var _this$props$question = _this.props.question,
          answerChoices = _this$props$question.answerChoices,
          studentAnswer = _this$props$question.studentAnswer;

      if (answerChoices[0].answerLetter) {
        return answerChoices.map(function (answer) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
            className: "answer-block",
            key: answer.answerLetter
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "answer-box",
            style: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAnswerChoiceColors"])(answer.answerLetter, answer.correctAnswer, studentAnswer)
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
            className: "answer-circle"
          }, answer.answerLetter, "."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "answer-text"
          }, answer.answerText)));
        });
      }

      return answerChoices.map(function (answer) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          className: "answer-block",
          key: answer.answerValue
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "answer-box",
          style: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAnswerChoiceColors"])(answer.answerValue, answer.correctAnswer, studentAnswer)
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "answer-text",
          style: {
            marginLeft: '30px'
          }
        }, answer.answerValue)));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderAnswerPercentageBreakdown", function () {
      var _this$props$question2 = _this.props.question,
          answerChoices = _this$props$question2.answerChoices,
          studentAnswer = _this$props$question2.studentAnswer;

      if (answerChoices[0].answerLetter) {
        return answerChoices.map(function (answer) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
            className: "informer-block",
            key: answer.answerLetter
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "informer-box",
            style: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAnswerPercentageBreakdownColors"])('half', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
            className: "informer-circle",
            style: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAnswerPercentageBreakdownColors"])('full', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)
          }, answer.answerLetter)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
            className: "informer-value"
          }, answer.answerPercentage, "%"));
        });
      }

      return answerChoices.map(function (answer) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          className: "informer-block",
          key: answer.answerValue
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "informer-box",
          style: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAnswerPercentageBreakdownColors"])('half', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
          className: "informer-circle",
          style: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAnswerPercentageBreakdownColors"])('full', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)
        }, answer.answerValue)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
          className: "informer-value"
        }, answer.answerPercentage, "%"));
      });
    });

    _this.state = {
      reviewedWithStudent: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          onCloseModal = _this$props.onCloseModal,
          _this$props$question3 = _this$props.question,
          question = _this$props$question3 === void 0 ? {} : _this$props$question3;
      var reviewedWithStudent = this.state.reviewedWithStudent;
      var topic = question.topic,
          questionType = question.questionType,
          questionText = question.question,
          hasVideo = question.hasVideo,
          flagged = question.flagged,
          questionNumber = question.questionNumber,
          videoSource = question.videoSource,
          studentNotes = question.studentNotes,
          passage = question.passage,
          videoThumbnail = question.videoThumbnail;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onOuterClick: onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_video001",
        className: "jsx-4127667448" + " " + "modal modal-answer"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "modal-header row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col s10"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-4127667448" + " " + "subtitle"
      }, topic), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-4127667448" + " " + "title"
      }, questionType, " Problem #", questionNumber)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col s2 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: onCloseModal,
        className: "jsx-4127667448" + " " + "close modal-close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-4127667448" + " " + "icon-close-thin"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "d-flex row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col s12 l6 order-lg-2"
      }, hasVideo && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "video-frame"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "embed-responsive embed-responsive-16by9"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("video", {
        id: "video001",
        "data-current-time": "0",
        poster: videoThumbnail,
        preload: "metadata",
        controls: true,
        playsinline: true,
        className: "jsx-4127667448" + " " + "in-modal embed-responsive-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        type: "video/mp4",
        src: videoSource,
        className: "jsx-4127667448"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "d-flex align-items-center row mb-0"
      }, flagged && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: '#c0272d'
        },
        className: "jsx-4127667448" + " " + "status-answer"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-4127667448" + " " + "icon-flag"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-4127667448" + " " + "status-text"
      }, "Flagged"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-4127667448"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        checked: reviewedWithStudent,
        onChange: this.toggleReviewedStatus,
        className: "jsx-4127667448" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-4127667448"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-4127667448"
      }, "Reviewed with Student")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "jsx-4127667448" + " " + "informers-list"
      }, this.renderAnswerPercentageBreakdown())), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "panel-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-4127667448" + " " + "subtitle"
      }, "Student\u2019s Notes:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "text-content custom-form"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "jcf-scrollable height-22"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "text-holder"
      }, studentNotes)))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col s12 l6 order-lg-1"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "text-content custom-form"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "jcf-scrollable height-45"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "text-holder"
      }, passage)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-4127667448" + " " + "h3 subtitle"
      }, questionText), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "jsx-4127667448" + " " + "answer-full-list"
      }, this.mapAnswerChoices())))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4127667448"
      }, ".overlay.jsx-4127667448{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:9999;}.modal-answer.jsx-4127667448{opacity:1;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc2NoYXZhcnJvL2NsZWFyLWNob2ljZS9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9TdHVkZW50L0xlc3NvbldvcmtzaGVldFRlc3RTZWN0aW9uL2NvbXBvbmVudHMvUXVlc3Rpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSlcsQUFHOEIsQUFTTCxVQUNTLEtBVGlCLGNBVXRDLG1CQVRRLE1BQ0UsUUFDQyxTQUNGLE9BQ00sYUFDZiIsImZpbGUiOiIvVXNlcnMvY2hyaXNjaGF2YXJyby9jbGVhci1jaG9pY2UvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvU3R1ZGVudC9MZXNzb25Xb3Jrc2hlZXRUZXN0U2VjdGlvbi9jb21wb25lbnRzL1F1ZXN0aW9uTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9tZWRpYS1oYXMtY2FwdGlvbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IHsgZ2V0QW5zd2VyQ2hvaWNlQ29sb3JzLCBnZXRBbnN3ZXJQZXJjZW50YWdlQnJlYWtkb3duQ29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jbGFzcyBRdWVzdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJldmlld2VkV2l0aFN0dWRlbnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVJldmlld2VkU3RhdHVzID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSgoeyByZXZpZXdlZFdpdGhTdHVkZW50IH0pID0+ICh7IHJldmlld2VkV2l0aFN0dWRlbnQ6ICFyZXZpZXdlZFdpdGhTdHVkZW50IH0pKVxuXG4gIG1hcEFuc3dlckNob2ljZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBxdWVzdGlvbjogeyBhbnN3ZXJDaG9pY2VzLCBzdHVkZW50QW5zd2VyIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGFuc3dlckNob2ljZXNbMF0uYW5zd2VyTGV0dGVyKSB7XG4gICAgICByZXR1cm4gYW5zd2VyQ2hvaWNlcy5tYXAoYW5zd2VyID0+IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFuc3dlci1ibG9ja1wiIGtleT17YW5zd2VyLmFuc3dlckxldHRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItYm94XCIgc3R5bGU9e2dldEFuc3dlckNob2ljZUNvbG9ycyhhbnN3ZXIuYW5zd2VyTGV0dGVyLCBhbnN3ZXIuY29ycmVjdEFuc3dlciwgc3R1ZGVudEFuc3dlcil9PlxuICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiYW5zd2VyLWNpcmNsZVwiPnthbnN3ZXIuYW5zd2VyTGV0dGVyfS48L2I+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbnN3ZXItdGV4dFwiPnthbnN3ZXIuYW5zd2VyVGV4dH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApKVxuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyQ2hvaWNlcy5tYXAoYW5zd2VyID0+IChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJhbnN3ZXItYmxvY2tcIiBrZXk9e2Fuc3dlci5hbnN3ZXJWYWx1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWJveFwiIHN0eWxlPXtnZXRBbnN3ZXJDaG9pY2VDb2xvcnMoYW5zd2VyLmFuc3dlclZhbHVlLCBhbnN3ZXIuY29ycmVjdEFuc3dlciwgc3R1ZGVudEFuc3dlcil9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuc3dlci10ZXh0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzMwcHgnIH19PnthbnN3ZXIuYW5zd2VyVmFsdWV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgKSlcbiAgfVxuXG4gIHJlbmRlckFuc3dlclBlcmNlbnRhZ2VCcmVha2Rvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBxdWVzdGlvbjogeyBhbnN3ZXJDaG9pY2VzLCBzdHVkZW50QW5zd2VyIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGFuc3dlckNob2ljZXNbMF0uYW5zd2VyTGV0dGVyKSB7XG4gICAgICByZXR1cm4gYW5zd2VyQ2hvaWNlcy5tYXAoYW5zd2VyID0+IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImluZm9ybWVyLWJsb2NrXCIga2V5PXthbnN3ZXIuYW5zd2VyTGV0dGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9ybWVyLWJveFwiIHN0eWxlPXtnZXRBbnN3ZXJQZXJjZW50YWdlQnJlYWtkb3duQ29sb3JzKCdoYWxmJywgYW5zd2VyLmFuc3dlckxldHRlciwgYW5zd2VyLmFuc3dlclBlcmNlbnRhZ2UsIGFuc3dlci5jb3JyZWN0QW5zd2VyLCBzdHVkZW50QW5zd2VyKX0+XG4gICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJpbmZvcm1lci1jaXJjbGVcIiBzdHlsZT17Z2V0QW5zd2VyUGVyY2VudGFnZUJyZWFrZG93bkNvbG9ycygnZnVsbCcsIGFuc3dlci5hbnN3ZXJMZXR0ZXIsIGFuc3dlci5hbnN3ZXJQZXJjZW50YWdlLCBhbnN3ZXIuY29ycmVjdEFuc3dlciwgc3R1ZGVudEFuc3dlcil9PnthbnN3ZXIuYW5zd2VyTGV0dGVyfTwvYj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YiBjbGFzc05hbWU9XCJpbmZvcm1lci12YWx1ZVwiPnthbnN3ZXIuYW5zd2VyUGVyY2VudGFnZX0lPC9iPlxuICAgICAgICA8L2xpPlxuICAgICAgKSlcbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlckNob2ljZXMubWFwKGFuc3dlciA9PiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwiaW5mb3JtZXItYmxvY2tcIiBrZXk9e2Fuc3dlci5hbnN3ZXJWYWx1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb3JtZXItYm94XCIgc3R5bGU9e2dldEFuc3dlclBlcmNlbnRhZ2VCcmVha2Rvd25Db2xvcnMoJ2hhbGYnLCBhbnN3ZXIuYW5zd2VyVmFsdWUsIGFuc3dlci5hbnN3ZXJQZXJjZW50YWdlLCBhbnN3ZXIuY29ycmVjdEFuc3dlciwgc3R1ZGVudEFuc3dlcil9PlxuICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImluZm9ybWVyLWNpcmNsZVwiIHN0eWxlPXtnZXRBbnN3ZXJQZXJjZW50YWdlQnJlYWtkb3duQ29sb3JzKCdmdWxsJywgYW5zd2VyLmFuc3dlclZhbHVlLCBhbnN3ZXIuYW5zd2VyUGVyY2VudGFnZSwgYW5zd2VyLmNvcnJlY3RBbnN3ZXIsIHN0dWRlbnRBbnN3ZXIpfT57YW5zd2VyLmFuc3dlclZhbHVlfTwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiIGNsYXNzTmFtZT1cImluZm9ybWVyLXZhbHVlXCI+e2Fuc3dlci5hbnN3ZXJQZXJjZW50YWdlfSU8L2I+XG4gICAgICA8L2xpPlxuICAgICkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuLCBvbkNsb3NlTW9kYWwsIHF1ZXN0aW9uID0ge30gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyByZXZpZXdlZFdpdGhTdHVkZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdG9waWMsIHF1ZXN0aW9uVHlwZSwgcXVlc3Rpb246IHF1ZXN0aW9uVGV4dCwgaGFzVmlkZW8sIGZsYWdnZWQsIHF1ZXN0aW9uTnVtYmVyLCB2aWRlb1NvdXJjZSwgc3R1ZGVudE5vdGVzLCBwYXNzYWdlLCB2aWRlb1RodW1ibmFpbCB9ID0gcXVlc3Rpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e29uQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF92aWRlbzAwMVwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWFuc3dlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyIHJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidGl0bGVcIj57dG9waWN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPntxdWVzdGlvblR5cGV9IFByb2JsZW0gI3txdWVzdGlvbk51bWJlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMyIHJpZ2h0LWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2xvc2UgbW9kYWwtY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2UtdGhpblwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsNiBvcmRlci1sZy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2hhc1ZpZGVvICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWZyYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cInZpZGVvMDAxXCIgY2xhc3NOYW1lPVwiaW4tbW9kYWwgZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCIgZGF0YS1jdXJyZW50LXRpbWU9XCIwXCIgcG9zdGVyPXt2aWRlb1RodW1ibmFpbH0gcHJlbG9hZD1cIm1ldGFkYXRhXCIgY29udHJvbHMgcGxheXNpbmxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHR5cGU9XCJ2aWRlby9tcDRcIiBzcmM9e3ZpZGVvU291cmNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmxhZ2dlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0dXMtYW5zd2VyXCIgc3R5bGU9e3sgY29sb3I6ICcjYzAyNzJkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZsYWdcIj48L2k+PGIgY2xhc3NOYW1lPVwic3RhdHVzLXRleHRcIj5GbGFnZ2VkPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbGVkLWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtyZXZpZXdlZFdpdGhTdHVkZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVJldmlld2VkU3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj5SZXZpZXdlZCB3aXRoIFN0dWRlbnQ8L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImluZm9ybWVycy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQW5zd2VyUGVyY2VudGFnZUJyZWFrZG93bigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5TdHVkZW504oCZcyBOb3Rlczo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRlbnQgY3VzdG9tLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpjZi1zY3JvbGxhYmxlIGhlaWdodC0yMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3R1ZGVudE5vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDYgb3JkZXItbGctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRlbnQgY3VzdG9tLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqY2Ytc2Nyb2xsYWJsZSBoZWlnaHQtNDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiaDMgc3VidGl0bGVcIj57cXVlc3Rpb25UZXh0fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFuc3dlci1mdWxsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubWFwQW5zd2VyQ2hvaWNlcygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWFuc3dlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuUXVlc3Rpb25Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHF1ZXN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2VNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25Nb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Users/chrischavarro/clear-choice/clear-choice-admin/components/Student/LessonWorksheetTestSection/components/QuestionModal/index.js */"));
    }
  }]);

  return QuestionModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

QuestionModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  question: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  onCloseModal: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (QuestionModal);

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/components/ReassignModal/index.js":
/*!*****************************************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/components/ReassignModal/index.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker-cssmodules.css */ "./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");

















var ReassignModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ReassignModal, _React$Component);

  function ReassignModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReassignModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ReassignModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onResetModal", function () {
      return _this.setState({
        assignDate: '',
        assignTime: '',
        dueDate: '',
        dueTime: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "reassignDate", function () {
      var onReassignDate = _this.props.onReassignDate;
      var _this$state = _this.state,
          unformattedAssignDate = _this$state.assignDate,
          unformattedAssignTime = _this$state.assignTime,
          unformattedDueDate = _this$state.dueDate,
          unformattedDueTime = _this$state.dueTime;
      var assignDate = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedAssignDate).format('MM/DD/YY');
      var assignTime = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedAssignTime).format('hh:mm');
      var dueDate = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedDueDate).format('MM/DD/YY');
      var dueTime = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedDueTime).format('hh:mm');
      onReassignDate({
        assignDate: assignDate,
        assignTime: assignTime,
        dueDate: dueDate,
        dueTime: dueTime
      });

      _this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDatePickerChange", function (field, value) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
    });

    _this.state = {
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReassignModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var _this$state2 = this.state,
          assignDate = _this$state2.assignDate,
          assignTime = _this$state2.assignTime,
          dueDate = _this$state2.dueDate,
          dueTime = _this$state2.dueTime;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_reschedule",
        className: "jsx-1282990627" + " " + "modal modal-custom modal-calendar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "card-modal card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: '#25bbf7',
          color: '#fff'
        },
        className: "jsx-1282990627" + " " + "card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1282990627"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1282990627" + " " + "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1282990627" + " " + "heading-block"
      }, "Reschedule")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "col right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "jsx-1282990627" + " " + "panel-link close modal-close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1282990627" + " " + "icon-close-thin"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          height: '410px'
        },
        className: "jsx-1282990627" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          height: '335px'
        },
        className: "jsx-1282990627" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1282990627" + " " + "icon-calendar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        selected: assignDate,
        withPortal: true,
        dateFormat: "MM/dd/yy",
        id: "assignDate",
        name: "assignDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('assignDate', event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "new_test_section_assign_date",
        className: "jsx-1282990627" + " " + ((assignDate ? 'label active' : 'label') || "")
      }, "Assign For"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1282990627" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        selected: assignTime,
        withPortal: true,
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "assignTime",
        className: "jsx-1282990627" + " " + ((assignTime ? 'label active' : 'label') || "")
      }, "Time")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1282990627" + " " + "icon-calendar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        selected: dueDate,
        withPortal: true,
        dateFormat: "MM/dd/yy",
        id: "dueDate",
        name: "dueDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('dueDate', event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "dueDate",
        className: "jsx-1282990627" + " " + ((dueDate ? 'label active' : 'label') || "")
      }, "Due (optional)"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1282990627" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        selected: dueTime,
        withPortal: true,
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "dueTime",
        className: "jsx-1282990627" + " " + ((dueTime ? 'label active' : 'label') || "")
      }, "Time")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1282990627"
      }, "\xA0"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1282990627" + " " + "modal-footer modal-footer-width"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "jsx-1282990627" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "jsx-1282990627" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Save Changes"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1282990627"
      }, ".card-modal.jsx-1282990627{margin:0;border-radius:6px;}.overlay.jsx-1282990627{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1003;}.modal-custom.jsx-1282990627{opacity:1;visibility:visible;}.modal-footer.jsx-1282990627{background-color:white;}#modal_reschedule.jsx-1282990627{top:10%;}div.react-datepicker__portal.jsx-1282990627{height:100%!important;width:100%!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc2NoYXZhcnJvL2NsZWFyLWNob2ljZS9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9TdHVkZW50L0xlc3NvbldvcmtzaGVldFRlc3RTZWN0aW9uL2NvbXBvbmVudHMvUmVhc3NpZ25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SlcsQUFHd0IsQUFJTSxBQVNMLEFBSWEsQUFHZixBQUdjLFFBRnhCLENBcEJvQixDQWFDLEtBVGlCLE9BbUJmLENBTnZCLElBaEJBLEVBYUEsY0FVQSxLQW5CUSxNQUNFLFFBQ0MsU0FDRixPQUNNLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2NocmlzY2hhdmFycm8vY2xlYXItY2hvaWNlL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL1N0dWRlbnQvTGVzc29uV29ya3NoZWV0VGVzdFNlY3Rpb24vY29tcG9uZW50cy9SZWFzc2lnbk1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci1jc3Ntb2R1bGVzLmNzcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuY2xhc3MgUmVhc3NpZ25Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhc3NpZ25EYXRlOiAnJyxcbiAgICAgIGFzc2lnblRpbWU6ICcnLFxuICAgICAgZHVlRGF0ZTogJycsXG4gICAgICBkdWVUaW1lOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgb25SZXNldE1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFzc2lnbkRhdGU6ICcnLCBhc3NpZ25UaW1lOiAnJywgZHVlRGF0ZTogJycsIGR1ZVRpbWU6ICcnIH0pXG5cbiAgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DbG9zZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNsb3NlKCk7XG4gICAgdGhpcy5vblJlc2V0TW9kYWwoKTtcbiAgfVxuXG4gIHJlYXNzaWduRGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uUmVhc3NpZ25EYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYXNzaWduRGF0ZTogdW5mb3JtYXR0ZWRBc3NpZ25EYXRlLCBhc3NpZ25UaW1lOiB1bmZvcm1hdHRlZEFzc2lnblRpbWUsIGR1ZURhdGU6IHVuZm9ybWF0dGVkRHVlRGF0ZSwgZHVlVGltZTogdW5mb3JtYXR0ZWREdWVUaW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFzc2lnbkRhdGUgPSBtb21lbnQodW5mb3JtYXR0ZWRBc3NpZ25EYXRlKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgY29uc3QgYXNzaWduVGltZSA9IG1vbWVudCh1bmZvcm1hdHRlZEFzc2lnblRpbWUpLmZvcm1hdCgnaGg6bW0nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gbW9tZW50KHVuZm9ybWF0dGVkRHVlRGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWScpO1xuICAgIGNvbnN0IGR1ZVRpbWUgPSBtb21lbnQodW5mb3JtYXR0ZWREdWVUaW1lKS5mb3JtYXQoJ2hoOm1tJyk7XG4gICAgb25SZWFzc2lnbkRhdGUoeyBhc3NpZ25EYXRlLCBhc3NpZ25UaW1lLCBkdWVEYXRlLCBkdWVUaW1lIH0pO1xuICAgIHRoaXMub25SZXNldE1vZGFsKCk7XG4gIH1cblxuICBoYW5kbGVEYXRlUGlja2VyQ2hhbmdlID0gKGZpZWxkLCB2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFzc2lnbkRhdGUsIGFzc2lnblRpbWUsIGR1ZURhdGUsIGR1ZVRpbWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3Jlc2NoZWR1bGVcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1jdXN0b20gbW9kYWwtY2FsZW5kYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsIGNhcmQtcGFuZWwtdGl0bGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjViYmY3JywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYmxvY2tcIj5SZXNjaGVkdWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHJpZ2h0LWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInBhbmVsLWxpbmsgY2xvc2UgbW9kYWwtY2xvc2VcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlLXRoaW5cIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIiBzdHlsZT17eyBoZWlnaHQ6ICc0MTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMzM1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLWZpZWxkIGlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2Fzc2lnbkRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU0vZGQveXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhc3NpZ25EYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhc3NpZ25EYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSgnYXNzaWduRGF0ZScsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Fzc2lnbkRhdGUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJuZXdfdGVzdF9zZWN0aW9uX2Fzc2lnbl9kYXRlXCI+QXNzaWduIEZvcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNsb2NrMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2Fzc2lnblRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXsxNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJoOm1tIGFhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPVwiVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFzc2lnblRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFzc2lnblRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdhc3NpZ25UaW1lJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YXNzaWduVGltZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImFzc2lnblRpbWVcIj5UaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtkdWVEYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFBvcnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL2RkL3l5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHVlRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHVlRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURhdGVQaWNrZXJDaGFuZ2UoJ2R1ZURhdGUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtkdWVEYXRlID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwiZHVlRGF0ZVwiPkR1ZSAob3B0aW9uYWwpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2xvY2syXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZHVlVGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhQb3J0YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVJbnRlcnZhbHM9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImg6bW0gYWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNhcHRpb249XCJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHVlVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHVlVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURhdGVQaWNrZXJDaGFuZ2UoJ2R1ZVRpbWUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtkdWVUaW1lID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwiZHVlVGltZVwiPlRpbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXIgbW9kYWwtZm9vdGVyLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiPkNhbmNlbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmstYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0XCI+U2F2ZSBDaGFuZ2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbW9kYWxfcmVzY2hlZHVsZSB7XG4gICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2LnJlYWN0LWRhdGVwaWNrZXJfX3BvcnRhbCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFzc2lnbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25SZWFzc2lnbkRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYXNzaWduTW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Users/chrischavarro/clear-choice/clear-choice-admin/components/Student/LessonWorksheetTestSection/components/ReassignModal/index.js */"));
    }
  }]);

  return ReassignModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

ReassignModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onReassignDate: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ReassignModal);

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/index.js":
/*!****************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/index.js ***!
  \****************************************************************/
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
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _components_PracticeQuestions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PracticeQuestions */ "./components/Student/LessonWorksheetTestSection/components/PracticeQuestions/index.js");
/* harmony import */ var _components_ChallengeQuestions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ChallengeQuestions */ "./components/Student/LessonWorksheetTestSection/components/ChallengeQuestions/index.js");
/* harmony import */ var _components_QuestionModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/QuestionModal */ "./components/Student/LessonWorksheetTestSection/components/QuestionModal/index.js");
/* harmony import */ var _utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/sampleQuestions */ "./components/Student/LessonWorksheetTestSection/utils/sampleQuestions.js");
/* harmony import */ var _components_CardSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/CardSection */ "./components/Student/LessonWorksheetTestSection/components/CardSection/index.js");
/* harmony import */ var _components_ReassignModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ReassignModal */ "./components/Student/LessonWorksheetTestSection/components/ReassignModal/index.js");








/* eslint-disable react/no-did-mount-set-state */

/* eslint-disable react/no-did-update-set-state */

/* eslint-disable jsx-a11y/no-static-element-interactions */










var LessonWorksheetTestSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LessonWorksheetTestSection, _React$Component);

  function LessonWorksheetTestSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonWorksheetTestSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LessonWorksheetTestSection).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleReassignModal", function () {
      return _this.setState(function (_ref) {
        var reassigNModalOpen = _ref.reassigNModalOpen;
        return {
          reassigNModalOpen: !reassigNModalOpen,
          dropdownIsOpen: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleQuestionModal", function () {
      var selectedQuestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _this.setState(function (_ref2) {
        var questionModalOpen = _ref2.questionModalOpen;
        return {
          questionModalOpen: !questionModalOpen,
          selectedQuestion: selectedQuestion,
          questionDropdownOpen: false,
          questionDropdownIndex: null
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenDropdown", function () {
      return _this.setState({
        dropdownIsOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onReassignDate", function (assignDate, assignTime, dueDate, dueTime) {
      console.warn('Stubbed out date functionality', assignDate, assignTime, dueDate, dueTime);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleQuestionDropdownClick", function (event, question) {
      var _this$state = _this.state,
          questionDropdownOpen = _this$state.questionDropdownOpen,
          questionDropdownIndex = _this$state.questionDropdownIndex;
      event.preventDefault();

      if (questionDropdownOpen && question.id === questionDropdownIndex) {
        _this.setState({
          questionDropdownOpen: false,
          questionDropdownIndex: null
        });
      } else if (questionDropdownOpen && question !== questionDropdownIndex) {
        _this.setState({
          questionDropdownIndex: question.id
        });
      } else if (questionDropdownOpen && question.id === questionDropdownIndex) {
        _this.setState({
          questionDropdownOpen: false,
          questionDropdownIndex: null
        });
      } else {
        _this.setState({
          questionDropdownOpen: true,
          questionDropdownIndex: question.id
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDropdownClick", function (event) {
      var dropdownIsOpen = _this.state.dropdownIsOpen;
      event.preventDefault();

      if (dropdownIsOpen) {
        return _this.onCloseDropdown();
      }

      return _this.onOpenDropdown();
    });

    _this.state = {
      selectedQuestion: {},
      questionModalOpen: false,
      answerSheetComplete: false,
      questions: _utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_13__["default"],
      dropdownIsOpen: false,
      questionDropdownOpen: false,
      questionDropdownIndex: null,
      reassigNModalOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessonWorksheetTestSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.worksheet.completionLevel !== 'Not Started') {
        this.setState({
          answerSheetComplete: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var worksheet = this.props.worksheet;

      if (prevProps.worksheet.id !== worksheet.id) {
        if (worksheet.completionLevel === 'Not Started') {
          this.setState({
            answerSheetComplete: false
          });
        } else {
          this.setState({
            answerSheetComplete: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          questionModalOpen = _this$state2.questionModalOpen,
          selectedQuestion = _this$state2.selectedQuestion,
          questions = _this$state2.questions,
          answerSheetComplete = _this$state2.answerSheetComplete,
          dropdownIsOpen = _this$state2.dropdownIsOpen,
          questionDropdownOpen = _this$state2.questionDropdownOpen,
          questionDropdownIndex = _this$state2.questionDropdownIndex,
          reassigNModalOpen = _this$state2.reassigNModalOpen;
      var _this$props = this.props,
          onClose = _this$props.onClose,
          worksheet = _this$props.worksheet,
          _this$props$user = _this$props.user,
          user = _this$props$user === void 0 ? {} : _this$props$user;
      var _user$studentInformat = user.studentInformation,
          firstName = _user$studentInformat.firstName,
          lastName = _user$studentInformat.lastName;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_QuestionModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        open: questionModalOpen,
        question: selectedQuestion,
        onCloseModal: this.onToggleQuestionModal
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ReassignModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        open: reassigNModalOpen,
        onClose: this.onToggleReassignModal,
        onReassignDate: this.onReassignDate
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        selector: "#modal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "wrapper modal",
        style: {
          zIndex: '1003',
          display: 'block',
          position: 'absolute',
          top: '0',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-box card-panel light-blue lighten-1 white-text",
        style: {
          zIndex: '9'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-flex-row row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m7 xl8"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon-col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-books-l"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-icon"
      }, "Lesson"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-small"
      }, worksheet.unit), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "text-large"
      }, worksheet.worksheetName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-small"
      }, "p.", worksheet.passage, "  (", worksheet.type, ")"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s9 m4 xl3 position-mobile-left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "text-large"
      }, firstName, " ", lastName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "text-small dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Assigned:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
        dateTime: "2019-01-06T08:00"
      }, worksheet.assignDate, " at ", worksheet.assignTime))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "text-small dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Due:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
        dateTime: "2019-01-06T16:00"
      }, worksheet.dueDate, " at ", worksheet.dueTime))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "text-small dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Completed:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
        dateTime: "2019-09-01T06:59"
      }, "1/9/19 at 6:59 PM"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s2 m1 right-align position-mobile-right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_top",
        className: "dropdown-trigger btn",
        onClick: this.handleDropdownClick
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown_top",
        className: "dropdown-content dropdown-exwide",
        style: {
          display: 'block',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "modal-trigger",
        onClick: this.onToggleReassignModal
      }, "Change Date")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "modal-trigger",
        onClick: this.onToggleReassignModal
      }, "Change Due Date")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "modal-trigger",
        onClick: this.onToggleReassignModal
      }, "Remove Due Date")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Excuse Latness")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Reset")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "link-delete"
      }, "Delete"))) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "close-block",
        onClick: onClose
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "modal-close close"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-close-thin"
      })))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-section content-section-85"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-sm"
      }, worksheet.completionLevel !== 'Not Started' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CardSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
        flags: worksheet.flags,
        status: worksheet.status,
        problems: worksheet.problems,
        completedProblems: worksheet.completed,
        completionLevel: worksheet.completionLevel,
        totalVideoMinutesWatched: worksheet.totalVideoMinutesWatched,
        totalVideoMinutesAllMissedProblems: worksheet.totalVideoMinutesAllMissedProblems
      }) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-row row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ChallengeQuestions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        answerSheetComplete: answerSheetComplete,
        questionDropdownIndex: questionDropdownIndex,
        questionDropdownOpen: questionDropdownOpen,
        onOpenQuestionModal: this.onToggleQuestionModal,
        handleQuestionDropdownClick: this.handleQuestionDropdownClick,
        questions: questions.filter(function (question) {
          return question.questionType === 'Challenge';
        })
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_PracticeQuestions__WEBPACK_IMPORTED_MODULE_10__["default"], {
        answerSheetComplete: answerSheetComplete,
        questionDropdownIndex: questionDropdownIndex,
        questionDropdownOpen: questionDropdownOpen,
        onOpenQuestionModal: this.onToggleQuestionModal,
        handleQuestionDropdownClick: this.handleQuestionDropdownClick,
        questions: questions.filter(function (question) {
          return question.questionType === 'Practice';
        })
      })))))));
    }
  }]);

  return LessonWorksheetTestSection;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

LessonWorksheetTestSection.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  worksheet: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LessonWorksheetTestSection);

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/utils/index.js":
/*!**********************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/utils/index.js ***!
  \**********************************************************************/
/*! exports provided: getAnswerChoiceColors, getAnswerPercentageBreakdownColors, getAnswerColor, difficultyMap, getCompleteAnswerColor, statusColorMap, chartColorMap, data, formatTimeEstimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnswerChoiceColors", function() { return getAnswerChoiceColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnswerPercentageBreakdownColors", function() { return getAnswerPercentageBreakdownColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnswerColor", function() { return getAnswerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difficultyMap", function() { return difficultyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompleteAnswerColor", function() { return getCompleteAnswerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusColorMap", function() { return statusColorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartColorMap", function() { return chartColorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeEstimate", function() { return formatTimeEstimate; });
var getAnswerChoiceColors = function getAnswerChoiceColors(answerLetter, correctAnswer, studentAnswer) {
  if (correctAnswer) {
    return {
      backgroundColor: '#32955e'
    };
  } else if (answerLetter === studentAnswer && studentAnswer !== correctAnswer) {
    return {
      backgroundColor: '#db1d41'
    };
  }

  return null;
};
var getAnswerPercentageBreakdownColors = function getAnswerPercentageBreakdownColors(colorType, answerLetter, answerPercentage, correctAnswer, studentAnswer) {
  if (correctAnswer) {
    if (colorType === 'full') {
      return {
        backgroundColor: '#32955c',
        color: '#fff'
      };
    }

    return {
      width: "".concat(answerPercentage, "%"),
      backgroundColor: '#d3efde'
    };
  } else if (answerLetter === studentAnswer && studentAnswer !== correctAnswer) {
    if (colorType === 'full') {
      return {
        backgroundColor: '#db1d41',
        color: '#fff'
      };
    }

    return {
      width: "".concat(answerPercentage, "%"),
      backgroundColor: '#db1d41'
    };
  }

  if (colorType === 'full') {
    return {
      backgroundColor: '#e5e5e5'
    };
  }

  return {
    width: "".concat(answerPercentage, "%"),
    backgroundColor: '#e5e5e5'
  };
};
var getAnswerColor = function getAnswerColor(answer) {
  if (answer.correctAnswer) {
    return {
      color: '#3eb777',
      borderColor: '#32955c'
    };
  }

  return null;
};
var difficultyMap = {
  'Easy': 'E',
  'Medium': 'M',
  'Difficult': 'D'
};
var getCompleteAnswerColor = function getCompleteAnswerColor(answerType, answer, studentAnswer) {
  if (answerType === 'letter') {
    if (answer.answerLetter !== studentAnswer && answer.correctAnswer) {
      return {
        color: '#32955c',
        borderColor: '#32955c',
        backgroundColor: '#fff'
      };
    } else if (answer.answerLetter === studentAnswer && answer.correctAnswer) {
      return {
        color: '#fff',
        borderColor: '#32955c',
        backgroundColor: '#3eb777'
      };
    } else if (!answer.correctAnswer && answer.answerLetter === studentAnswer) {
      return {
        color: '#fff',
        borderColor: '#ad1e3e',
        backgroundColor: '#db1d41'
      };
    }

    return null;
  }

  if (answer.answerValue !== studentAnswer && answer.correctAnswer) {
    return {
      color: '#32955c',
      borderColor: '#32955c',
      backgroundColor: '#fff'
    };
  } else if (answer.answerValue === studentAnswer && answer.correctAnswer) {
    return {
      color: '#fff',
      borderColor: '#32955c',
      backgroundColor: '#3eb777'
    };
  } else if (!answer.correctAnswer && answer.answerValue === studentAnswer) {
    return {
      color: '#fff',
      borderColor: '#ad1e3e',
      backgroundColor: '#db1d41'
    };
  }

  return null;
};
var statusColorMap = {
  Assigned: 'grey darken-4',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple'
};
var chartColorMap = {
  Assigned: '#333',
  Accomplished: '#7327cc',
  Beginning: '#ed1c24',
  Exemplary: 'rgb(0, 100, 244)',
  Developing: '#c10078'
};
var data = function data(percentage, status) {
  var colorOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: [colorOverride || chartColorMap[status], '#eaeaea']
    }]
  };
};
var formatTimeEstimate = function formatTimeEstimate(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  var hourString = hours !== 0 ? "".concat(hours, ":") : '';
  var minuteString = minutes !== 0 ? "".concat(minutes) : '';
  return "".concat(hourString).concat(minuteString);
};

/***/ }),

/***/ "./components/Student/LessonWorksheetTestSection/utils/sampleQuestions.js":
/*!********************************************************************************!*\
  !*** ./components/Student/LessonWorksheetTestSection/utils/sampleQuestions.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  hasVideo: false,
  questionType: 'Challenge',
  questionNumber: 1,
  topic: 'Special Right Triangles',
  difficulty: 'Easy',
  studentNotes: '1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes',
  passage: "Question 1-10 are based on the following passage.\n    Why do we use it? \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'As it is used in line 14, convention most nearly means',
  flagged: false,
  studentAnswer: 'B',
  answerType: 'letter',
  answerChoices: [{
    answerLetter: 'A',
    answerText: 'ceremony',
    correctAnswer: false,
    answerPercentage: '12'
  }, {
    answerLetter: 'B',
    answerText: 'ceremony2',
    correctAnswer: false,
    answerPercentage: '18'
  }, {
    answerLetter: 'C',
    answerText: 'generalization',
    correctAnswer: true,
    answerPercentage: '40'
  }, {
    answerLetter: 'D',
    answerText: 'code',
    correctAnswer: false,
    answerPercentage: '30'
  }]
}, {
  id: 2,
  hasVideo: true,
  questionType: 'Challenge',
  videoSource: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
  videoThumbnail: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225921/Pembroke-Welsh-Corgi-MP.jpg',
  questionNumber: 2,
  topic: 'Geometry',
  difficulty: 'Medium',
  studentNotes: '2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes',
  passage: "This is the start of another passage.\n    Why do we use it?\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'What is the correct number choice',
  flagged: true,
  studentAnswer: '2.91',
  answerType: 'value',
  answerChoices: [{
    answerValue: '5.12',
    correctAnswer: true,
    answerPercentage: '67'
  }, {
    answerValue: '2.91',
    correctAnswer: false,
    answerPercentage: '33'
  }]
}, {
  id: 3,
  hasVideo: true,
  questionType: 'Challenge',
  videoSource: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
  videoThumbnail: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225921/Pembroke-Welsh-Corgi-MP.jpg',
  questionNumber: 3,
  topic: 'Pythagorean Theorem',
  difficulty: 'Difficult',
  studentNotes: '3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes',
  passage: "Question three!\n    Why do we use it? \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'Here is the third question',
  flagged: false,
  studentAnswer: 'C',
  answerType: 'letter',
  answerChoices: [{
    answerLetter: 'A',
    answerText: 'answera',
    correctAnswer: true,
    answerPercentage: '62'
  }, {
    answerLetter: 'B',
    answerText: 'answerb',
    correctAnswer: false,
    answerPercentage: '8'
  }, {
    answerLetter: 'C',
    answerText: 'answerc',
    correctAnswer: false,
    answerPercentage: '20'
  }, {
    answerLetter: 'D',
    answerText: 'answerd',
    correctAnswer: false,
    answerPercentage: '10'
  }]
}, {
  id: 4,
  hasVideo: false,
  questionType: 'Challenge',
  questionNumber: 4,
  topic: 'Algebra',
  difficulty: 'Medium',
  studentNotes: '4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes',
  passage: "Fourth passage sample.\n    Why do we use it?\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'What is the correct number choice 2',
  flagged: true,
  studentAnswer: '6.91',
  answerType: 'value',
  answerChoices: [{
    answerValue: '6.91',
    correctAnswer: false,
    answerPercentage: '22'
  }, {
    answerValue: '4.53',
    correctAnswer: true,
    answerPercentage: '78'
  }]
}, {
  id: 5,
  hasVideo: true,
  questionType: 'Practice',
  videoSource: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
  videoThumbnail: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225921/Pembroke-Welsh-Corgi-MP.jpg',
  questionNumber: 3,
  topic: 'Pythagorean Theorem',
  difficulty: 'Difficult',
  studentNotes: '3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes',
  passage: "Question three!\n    Why do we use it? \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'Here is the third question',
  flagged: false,
  studentAnswer: 'C',
  answerType: 'letter',
  answerChoices: [{
    answerLetter: 'A',
    answerText: 'answera',
    correctAnswer: true,
    answerPercentage: '62'
  }, {
    answerLetter: 'B',
    answerText: 'answerb',
    correctAnswer: false,
    answerPercentage: '8'
  }, {
    answerLetter: 'C',
    answerText: 'answerc',
    correctAnswer: false,
    answerPercentage: '20'
  }, {
    answerLetter: 'D',
    answerText: 'answerd',
    correctAnswer: false,
    answerPercentage: '10'
  }]
}, {
  id: 6,
  hasVideo: false,
  questionType: 'Practice',
  questionNumber: 4,
  topic: 'Algebra',
  difficulty: 'Medium',
  studentNotes: '4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes',
  passage: "Fourth passage sample.\n    Why do we use it? \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'What is the correct number choice 2',
  flagged: true,
  studentAnswer: '6.91',
  answerType: 'value',
  answerChoices: [{
    answerValue: '6.91',
    correctAnswer: false,
    answerPercentage: '22'
  }, {
    answerValue: '4.53',
    correctAnswer: true,
    answerPercentage: '78'
  }]
}]);

/***/ }),

/***/ "./components/Student/ListPage/Components/FilterSection/index.js":
/*!***********************************************************************!*\
  !*** ./components/Student/ListPage/Components/FilterSection/index.js ***!
  \***********************************************************************/
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleShowFilters", function () {
      return _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onHandleFilterClick", function (filter) {
      var currentActiveFilters = _this.state.activeFilters;
      var activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        var filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState({
        activeFilters: activeFilters
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClearFilters", function () {
      return _this.setState({
        activeFilters: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitNameFilter", function () {
      var _this$props = _this.props,
          onSetFilteredState = _this$props.onSetFilteredState,
          onUnsetFilteredState = _this$props.onUnsetFilteredState;
      var name = _this.state.name;

      if (name === '') {
        onUnsetFilteredState();
      }

      var transformedName = name.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilterChange", function (event, name) {
      var _this$props2 = _this.props,
          onSetFilteredLocationState = _this$props2.onSetFilteredLocationState,
          onUnsetFilteredLocationState = _this$props2.onUnsetFilteredLocationState,
          onSetSort = _this$props2.onSetSort;
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

    _this.state = {
      open: false,
      name: '',
      location: {},
      sort: {},
      activeFilters: []
    };
    return _this;
  } // eslint-disable-next-line consistent-return


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // eslint-disable-next-line no-unused-vars
      var _this$state = this.state,
          name = _this$state.name,
          location = _this$state.location,
          sort = _this$state.sort,
          open = _this$state.open,
          activeFilters = _this$state.activeFilters;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-form-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "collapsible expandable"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "collapsible-body",
        style: open ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-form_checkbox-list-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "activated",
        checked: activeFilters.indexOf("activated") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('activated');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "activated"
      }, "Activated")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "unactivated",
        checked: activeFilters.indexOf("unactivated") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('unactivated');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "unactivated"
      }, "Unactivated")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "expired",
        checked: activeFilters.indexOf("expired") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('expired');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "expired"
      }, "Expired"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "current",
        checked: activeFilters.indexOf("current") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('current');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "current"
      }, "Current")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "archived",
        checked: activeFilters.indexOf("archived") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('archived');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "archived"
      }, "Archived"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "no-gain",
        checked: activeFilters.indexOf("no-gain") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-gain');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "no-gain"
      }, "No Gain")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "some-gain",
        checked: activeFilters.indexOf("some-gain") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('some-gain');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "some-gain"
      }, "Some Gain")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "gain-100+",
        checked: activeFilters.indexOf("gain-100+") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('gain-100+');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "gain-100+"
      }, "Gain of 100+")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "gain-200+",
        checked: activeFilters.indexOf("gain-200+") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('gain-200+');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "gain-200+"
      }, "Gain of 200+"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "hit-target-score",
        checked: activeFilters.indexOf("hit-target-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('hit-target-score');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "hit-target-score"
      }, "Hit Target Score")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "hasnt-hit-target-score",
        checked: activeFilters.indexOf("hasnt-hit-target-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('hasnt-hit-target-score');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "hasnt-hit-target-score"
      }, "Hasn\u2019t Hit Target Score"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "no-tests",
        checked: activeFilters.indexOf("no-tests") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('tests');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "no-tests"
      }, "No Tests")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "1-test",
        checked: activeFilters.indexOf("1-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('1-test');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "1-test"
      }, "1 Test")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "2-test",
        checked: activeFilters.indexOf("2-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('2-test');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "2-test"
      }, "2 Tests")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "3-test",
        checked: activeFilters.indexOf("3-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('3-test');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "3-test"
      }, "3+ Tests"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "has-overdue-work",
        checked: activeFilters.indexOf("has-overdue-work") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('has-overdue-work');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "has-overdue-work"
      }, "Has Overdue Work")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "unreviewed-flags",
        checked: activeFilters.indexOf("unreviewed-flags") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('unreviewed-flags');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "unreviewed-flags"
      }, "Unreviewed Flags"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "sessions-this-week",
        checked: activeFilters.indexOf("sessions-this-week") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('sessions-this-week');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "sessions-this-week"
      }, "Sessions This Week")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "session-today",
        checked: activeFilters.indexOf("session-today") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('session-today');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "session-today"
      }, "Session Today")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "no-sessions",
        checked: activeFilters.indexOf("no-sessions") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-sessions');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "no-sessions"
      }, "No Sessions Scheduled"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "entered-actual-score",
        checked: activeFilters.indexOf("entered-actual-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('entered-actual-score');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "entered-actual-score"
      }, "Entered Actual Score")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "no-actual-score",
        checked: activeFilters.indexOf("no-actual-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-actual-score');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "no-actual-score"
      }, "No Actual Score"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-inputs-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 18",
        style: {
          marginTop: '-30px',
          marginBottom: '-10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field",
        style: {
          marginTop: '50px'
        }
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
        onClick: this.onFilterByName
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: name.length ? 'label active' : 'label',
        htmlFor: "name_search"
      }, "Search"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
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
        className: "col s12 m3"
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
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 14"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-filters"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-item clear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.onClearFilters
      }, "Clear Filters")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "collapsible-header",
        onClick: this.onToggleShowFilters
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "open-text"
      }, open ? 'Hide Filters' : 'Open Filters'))))))))));
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

/***/ "./components/Student/components/StudentCard/components/EditModal.js":
/*!***************************************************************************!*\
  !*** ./components/Student/components/StudentCard/components/EditModal.js ***!
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../.././../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_genderOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utils/genderOptions */ "./components/utils/genderOptions.js");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../utils/stateOptions */ "./components/utils/stateOptions.js");
















var EditModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EditModal, _React$Component);

  function EditModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EditModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        updatedStudent: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.id, event.target.value)
      });
    });

    _this.state = {
      updatedStudent: {
        firstName: "",
        lastName: "",
        gender: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        email: "",
        location: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          onCloseEditModal = _this$props.onCloseEditModal,
          student = _this$props.student;
      var _this$state$updatedSt = this.state.updatedStudent,
          firstName = _this$state$updatedSt.firstName,
          lastName = _this$state$updatedSt.lastName,
          phone = _this$state$updatedSt.phone,
          address = _this$state$updatedSt.address,
          city = _this$state$updatedSt.city,
          zipCode = _this$state$updatedSt.zipCode,
          email = _this$state$updatedSt.email;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onOuterClick: onCloseEditModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_user_edit",
        className: "jsx-2013376804" + " " + "modal modal-custom modal-custom-large modal-gray"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        action: "#",
        className: "jsx-2013376804" + " " + "custom-form"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-modal card-main card grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: "#31837a",
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "owner-box card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "user-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: "#0085ce",
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "user-circle"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "images/img-owner01.jpg",
        alt: "",
        className: "jsx-2013376804"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "user-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-2013376804" + " " + "h3"
      }, "Ownerly, Jennifer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "mailto:jen.ownerly@gmail.com",
        className: "jsx-2013376804"
      }, "jen.ownerly@gmail.com")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-owner"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "text-icon"
      }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Account Info"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-main card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "firstName",
        value: firstName,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "firstName",
        className: "jsx-2013376804" + " " + "label"
      }, student.studentInformation.firstName))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "lastName",
        value: lastName,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "lastName",
        className: "jsx-2013376804" + " " + "label"
      }, student.studentInformation.lastName))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "email",
        value: email,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "email",
        className: "jsx-2013376804" + " " + "label"
      }, student.emailAddress.email))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + ""
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12 l7"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: student.studentInformation.gender,
        onChange: this.onSetGender,
        options: _utils_genderOptions__WEBPACK_IMPORTED_MODULE_13__["default"],
        label: "Gender",
        stateKey: "state",
        dropdownKey: "state",
        id: "gender"
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Contact Info"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-main card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "tel",
        id: "phone",
        value: phone,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "phone",
        className: "jsx-2013376804" + " " + "label"
      }, student.contactInformation.phone))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "address",
        value: address,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "address",
        className: "jsx-2013376804" + " " + "label"
      }, student.contactInformation.addressLine1, " (optional)"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "city",
        value: city,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "city",
        className: "jsx-2013376804" + " " + "label"
      }, student.contactInformation.city, "(optional)"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s12 m6 l5"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: student.contactInformation.state,
        onChange: this.onSetState,
        options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_14__["default"],
        label: "State",
        stateKey: "state",
        dropdownKey: "state"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s12 m6 l7"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "tel",
        id: "zipCode",
        value: zipCode,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "zipCode",
        className: "jsx-2013376804" + " " + "label"
      }, student.contactInformation.zipCode, "(optional)")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Location(s)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-main card-location card card-large"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: "#62b771",
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "card-panel card-panel-location"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804" + " " + "h4 truncate"
      }, "Tutor Doctor"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-2013376804" + " " + "sub-title"
      }, "Tutor Doctor - Austin, TX")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-location"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "text-icon"
      }, "Location"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown105",
        className: "jsx-2013376804" + " " + 'dropdown-trigger btn'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "material-icons dots-icon"
      }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown105",
        className: "jsx-2013376804" + " " + 'dropdown-content dropdown-wide'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#modal_location_edit",
        className: "jsx-2013376804" + " " + "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804"
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804"
      }, "Delete"))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-main card-location card card-large"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: "#62b771",
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "card-panel card-panel-location"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804" + " " + "h4 truncate"
      }, "Tutor Doctor"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-2013376804" + " " + "sub-title"
      }, "Tutor Doctor - Dallas, TX")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-location"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "text-icon"
      }, "Location"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown106",
        className: "jsx-2013376804" + " " + 'dropdown-trigger btn'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "material-icons dots-icon"
      }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown106",
        className: "jsx-2013376804" + " " + 'dropdown-content dropdown-wide'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#modal_location_edit",
        className: "jsx-2013376804" + " " + "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804"
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804"
      }, "Delete"))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "add-box"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "add-box-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-2013376804" + " " + "btn-floating waves-effect waves-light green lighten-1"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "material-icons"
      }, "add")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Delete"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        onClick: onCloseEditModal,
        className: "jsx-2013376804" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "jsx-2013376804" + " " + "btn"
      }, "Save"))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2013376804"
      }, ".overlay.jsx-2013376804{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-2013376804{margin:0;border-radius:6px;}#modal_Location1.jsx-2013376804{border-radius:6px;}.modal.jsx-2013376804{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2013376804{opacity:1;visibility:visible;}.modal-footer.jsx-2013376804{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc2NoYXZhcnJvL2NsZWFyLWNob2ljZS9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9TdHVkZW50L2NvbXBvbmVudHMvU3R1ZGVudENhcmQvY29tcG9uZW50cy9FZGl0TW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1FXLEFBRzhCLEFBU04sQUFJUyxBQUdKLEFBU0osQUFJYSxTQW5CTCxDQWdCQyxJQVRJLENBaEJhLEdBYXRDLEtBZ0JBLElBbkJBLEVBZ0JBLFFBVG9CLFdBaEJaLE1BQ0UsQ0FnQkEsT0FmQyxDQWdCQyxRQWZILEVBZ0JFLEtBZkcsSUFnQjRHLFFBZjFILHFHQWdCQSIsImZpbGUiOiIvVXNlcnMvY2hyaXNjaGF2YXJyby9jbGVhci1jaG9pY2UvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvU3R1ZGVudC9jb21wb25lbnRzL1N0dWRlbnRDYXJkL2NvbXBvbmVudHMvRWRpdE1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uLy4uLy4uLy4uL1BvcnRhbCc7XG5pbXBvcnQgQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIGZyb20gJy4uLy4uLy4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi8uLi8uLi8uLi9Gb3JtQ29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgZ2VuZGVyT3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9nZW5kZXJPcHRpb25zJztcbmltcG9ydCBzdGF0ZU9wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvc3RhdGVPcHRpb25zJztcblxuXG5jbGFzcyBFZGl0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cGRhdGVkU3R1ZGVudDoge1xuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgICAgICBnZW5kZXI6IFwiXCIsXG4gICAgICAgIHBob25lOiBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICBzdGF0ZTogXCJcIixcbiAgICAgICAgemlwQ29kZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlwiLFxuICAgICAgIH0sXG4gICAgfVxuICB9XG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBkYXRlZFN0dWRlbnQ6IHtcbiAgICAgICBbZXZlbnQudGFyZ2V0LmlkXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgb3Blbiwgb25DbG9zZUVkaXRNb2RhbCwgc3R1ZGVudCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmUsIGFkZHJlc3MsIGNpdHksIHppcENvZGUsIGVtYWlsIH0gPSB0aGlzLnN0YXRlLnVwZGF0ZWRTdHVkZW50O1xuXG4gICAgcmV0dXJuKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17b25DbG9zZUVkaXRNb2RhbH0+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfdXNlcl9lZGl0XCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWN1c3RvbS1sYXJnZSBtb2RhbC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJjdXN0b20tZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBncmV5IGxpZ2h0ZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZXItYm94IGNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiMzMTgzN2FcIiwgY29sb3I6IFwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jaXJjbGVcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMDA4NWNlXCIsIGNvbG9yOiBcIiNmZmZcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ltZy1vd25lcjAxLmpwZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRleHRcIiBzdHlsZT17e2NvbG9yOiBcIiNmZmZcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoM1wiPk93bmVybHksIEplbm5pZmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOiYjMTA2OyYjMTAxOyYjMTEwOyYjMDQ2OyYjMTExOyYjMTE5OyYjMTEwOyYjMTAxOyYjMTE0OyYjMTA4OyYjMTIxOyYjMDY0OyYjMTAzOyYjMTA5OyYjMDk3OyYjMTA1OyYjMTA4OyYjMDQ2OyYjMDk5OyYjMTExOyYjMTA5O1wiPiYjMTA2OyYjMTAxOyYjMTEwOyYjMDQ2OyYjMTExOyYjMTE5OyYjMTEwOyYjMTAxOyYjMTE0OyYjMTA4OyYjMTIxOyYjMDY0OyYjMTAzOyYjMTA5OyYjMDk3OyYjMTA1OyYjMTA4OyYjMDQ2OyYjMDk5OyYjMTExOyYjMTA5OzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1vd25lclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPk93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsNlwiPlxuXG4gICAgICAgICAgICAgIHsvKiBmb3JtIHBhbmVsICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5BY2NvdW50IEluZm88L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbWFpbiBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiB2YWx1ZT17Zmlyc3ROYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwiZmlyc3ROYW1lXCI+e3N0dWRlbnQuc3R1ZGVudEluZm9ybWF0aW9uLmZpcnN0TmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgdmFsdWU9e2xhc3ROYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwibGFzdE5hbWVcIj57c3R1ZGVudC5zdHVkZW50SW5mb3JtYXRpb24ubGFzdE5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cImVtYWlsXCI+e3N0dWRlbnQuZW1haWxBZGRyZXNzLmVtYWlsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyIGw3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0dWRlbnQuc3R1ZGVudEluZm9ybWF0aW9uLmdlbmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRHZW5kZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dlbmRlck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVLZXk9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duS2V5PVwic3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSBwYW5lbCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCBJbmZvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW4gY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgaWQ9XCJwaG9uZVwiIHZhbHVlPXtwaG9uZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cInBob25lXCI+e3N0dWRlbnQuY29udGFjdEluZm9ybWF0aW9uLnBob25lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc1wiIHZhbHVlPXthZGRyZXNzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwiYWRkcmVzc1wiPntzdHVkZW50LmNvbnRhY3RJbmZvcm1hdGlvbi5hZGRyZXNzTGluZTF9IChvcHRpb25hbCk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIiB2YWx1ZT17Y2l0eX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cImNpdHlcIj57c3R1ZGVudC5jb250YWN0SW5mb3JtYXRpb24uY2l0eX0ob3B0aW9uYWwpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGw1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0dWRlbnQuY29udGFjdEluZm9ybWF0aW9uLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVLZXk9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bktleT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgbDdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGlkPVwiemlwQ29kZVwiIHZhbHVlPXt6aXBDb2RlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9XCJ6aXBDb2RlXCI+e3N0dWRlbnQuY29udGFjdEluZm9ybWF0aW9uLnppcENvZGV9KG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGw2XCI+XG4gICAgICAgICAgICAgICAgey8qIGZvcm0gcGFuZWwgKi99XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TG9jYXRpb24ocyk8L2gzPlxuICAgICAgICAgICAgICB7LyogY2FyZCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW4gY2FyZC1sb2NhdGlvbiBjYXJkIGNhcmQtbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC1sb2NhdGlvblwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM2MmI3NzFcIiwgY29sb3I6IFwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoNCB0cnVuY2F0ZVwiPlR1dG9yIERvY3RvcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlR1dG9yIERvY3RvciAtIEF1c3RpbiwgVFg8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpY29ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvY2F0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYmxvY2sgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biB0cmlnZ2VyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLXRyaWdnZXIgYnRuJyBocmVmPScjJyBkYXRhLXRhcmdldD0nZHJvcGRvd24xMDUnPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGRvdHMtaWNvblwiPm1vcmVfdmVydDwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biBzdHJ1Y3R1cmUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24xMDUnIGNsYXNzTmFtZT0nZHJvcGRvd24tY29udGVudCBkcm9wZG93bi13aWRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2RhbCB0cmlnZ2VyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21vZGFsX2xvY2F0aW9uX2VkaXRcIiBjbGFzc05hbWU9XCJtb2RhbC10cmlnZ2VyIGxpbmstYmxvY2tcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkNsb25lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkRlbGV0ZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIGNhcmQgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW4gY2FyZC1sb2NhdGlvbiBjYXJkIGNhcmQtbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC1sb2NhdGlvblwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM2MmI3NzFcIiwgY29sb3I6IFwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoNCB0cnVuY2F0ZVwiPlR1dG9yIERvY3RvcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlR1dG9yIERvY3RvciAtIERhbGxhcywgVFg8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpY29ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvY2F0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYmxvY2sgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biB0cmlnZ2VyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLXRyaWdnZXIgYnRuJyBocmVmPScjJyBkYXRhLXRhcmdldD0nZHJvcGRvd24xMDYnPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGRvdHMtaWNvblwiPm1vcmVfdmVydDwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biBjb250ZW50ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMTA2JyBjbGFzc05hbWU9J2Ryb3Bkb3duLWNvbnRlbnQgZHJvcGRvd24td2lkZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9kYWwgdHJpZ2dlciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtb2RhbF9sb2NhdGlvbl9lZGl0XCIgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlciBsaW5rLWJsb2NrXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5DbG9uZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5EZWxldGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBjYXJkIGFkZCBibG9jayAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWJveC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1mbG9hdGluZyB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgZ3JlZW4gbGlnaHRlbi0xXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGdyZXktdGV4dCB0ZXh0LWRhcmtlbi0xXCIgb25DbGljaz17b25DbG9zZUVkaXRNb2RhbH0+Q2FuY2VsPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0blwiPlNhdmU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtb2RhbF9Mb2NhdGlvbjEge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgIClcbiAgfVxufVxuXG5FZGl0TW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlRWRpdE1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdHVkZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59XG5leHBvcnQgZGVmYXVsdCBFZGl0TW9kYWw7Il19 */\n/*@ sourceURL=/Users/chrischavarro/clear-choice/clear-choice-admin/components/Student/components/StudentCard/components/EditModal.js */"));
    }
  }]);

  return EditModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

EditModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onCloseEditModal: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  student: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EditModal);

/***/ }),

/***/ "./components/Student/components/StudentCard/index.js":
/*!************************************************************!*\
  !*** ./components/Student/components/StudentCard/index.js ***!
  \************************************************************/
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
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_EditModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/EditModal */ "./components/Student/components/StudentCard/components/EditModal.js");












var _data = function data(current, target, initial) {
  return {
    datasets: [{
      data: [current - initial, target - initial - (current - initial)],
      backgroundColor: ['#0085ce', '#eaeaea']
    }]
  };
};

var StudentCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StudentCard, _React$Component);

  function StudentCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StudentCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetDropdown", function (event, dropdownIsOpen) {
      event.preventDefault();

      _this.setState({
        dropdownIsOpen: !dropdownIsOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenEditModal", function () {
      return _this.setState({
        editModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseEditModal", function () {
      return _this.setState({
        editModalOpen: false
      });
    });

    _this.state = {
      dropdownIsOpen: false,
      editModalOpen: false,
      cloneModalOpen: false,
      showOwnerModalOpen: false,
      deleteModalOpen: false,
      activateAccountModalOpen: false,
      assignInstructorModalOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onHandleStudentCard = _this$props.onHandleStudentCard,
          onDeleteStudent = _this$props.onDeleteStudent,
          onCloneStudent = _this$props.onCloneStudent,
          index = _this$props.index,
          student = _this$props.student,
          _this$props$student = _this$props.student,
          id = _this$props$student.id,
          active = _this$props$student.active,
          tutor = _this$props$student.tutor,
          _this$props$student$t = _this$props$student.testScores,
          initialScore = _this$props$student$t.initialScore,
          currentScore = _this$props$student$t.currentScore,
          targetScore = _this$props$student.courseContext.targetScore,
          _this$props$student$s = _this$props$student.studentInformation,
          firstName = _this$props$student$s.firstName,
          lastName = _this$props$student$s.lastName,
          email = _this$props$student.emailAddress.email;
      var _this$state = this.state,
          dropdownIsOpen = _this$state.dropdownIsOpen,
          editModalOpen = _this$state.editModalOpen;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_EditModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: editModalOpen,
        onCloseEditModal: this.onCloseEditModal,
        student: student
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5",
        id: id
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: active ? "card-main card-location card card-large" : "card-main card-location card-disabled card-large card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "owner-box card-panel card-panel-panel card-panel-large",
        style: {
          backgroundColor: active ? '#0085ce' : '#9b9b9b',
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
          backgroundColor: active ? '#14b14b' : '#808080',
          color: '#fff',
          height: '45px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "#",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "user-text",
        style: {
          color: '#fff'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "h3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        value: student,
        onClick: function onClick() {
          return onHandleStudentCard({
            index: index
          });
        }
      }, lastName, ", ", firstName)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "mailto:".concat(email)
      }, email)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s2 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-user"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-icon"
      }, "Student"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s1 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger btn",
        "data-target": "dropdown01",
        onClick: function onClick(event) {
          return _this2.onSetDropdown(event, dropdownIsOpen);
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown01",
        className: "dropdown-content dropdown-wide",
        style: {
          display: "block",
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "modal-trigger link-block",
        onClick: this.onOpenEditModal
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!",
        onClick: function onClick() {
          return onCloneStudent(index);
        }
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!"
      }, "Show Owner")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#!",
        onClick: function onClick() {
          return onDeleteStudent(index);
        }
      }, "Delete"))) : null))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content",
        ref: this.studentCard
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex align-items-center mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-container chart-container-large"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-holder"
      }, active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__["Doughnut"], {
        data: function data() {
          return _data(currentScore, targetScore, initialScore);
        },
        height: 210,
        options: {
          circumference: 1.45 * Math.PI,
          rotation: -3.85,
          cutoutPercentage: 60,
          tooltips: false
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "chart-value",
        style: {
          backgroundColor: "#0085ce",
          bottom: "7px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        "data-count-up": true,
        "data-start-val": initialScore,
        "data-end-val": currentScore,
        "data-duration": "1"
      }, currentScore))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-col chart-start"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "amount",
        style: {
          color: '#0085ce'
        }
      }, initialScore), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "amount-text"
      }, "\xA0 initial")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-col chart-end"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "amount"
      }, targetScore), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "amount-text"
      }, "\xA0 target"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "points-list-bordered"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-green"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, "61"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "complete")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-red"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, "7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "overdue")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-orange"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, "3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "practice tests")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "style-blue-lighter"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "badge-circle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "17"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "of"
      }, "of 23")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "point-text"
      }, "sessions"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-inner-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "category-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "category-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-badge badge-purple"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-text"
      }, tutor)))))))));
    }
  }]);

  return StudentCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
StudentCard.propTypes = {
  student: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  onHandleStudentCard: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  onDeleteStudent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onCloneStudent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StudentCard);

/***/ }),

/***/ "./components/Student/components/StudentModal/index.js":
/*!*************************************************************!*\
  !*** ./components/Student/components/StudentModal/index.js ***!
  \*************************************************************/
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
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_genderOptions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/genderOptions */ "./components/utils/genderOptions.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/stateOptions */ "./components/utils/stateOptions.js");


















var StudentModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StudentModal, _React$Component);

  function StudentModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StudentModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      return _this.setState({
        newStudent: []
      }, _this.props.onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetGender", function (gender) {
      return _this.setState({
        newStudent: {
          gender: gender
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetState", function (state) {
      return _this.setState({
        newStudent: {
          state: state
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleNewStudent", function (firstName, lastName, gender, phone, address, city, state, zipCode, email, location) {
      var newStudent = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(_this.state.newStudent, {
        firstName: {
          $set: [firstName]
        },
        lastName: {
          $set: [lastName]
        },
        gender: {
          $set: [gender]
        },
        phone: {
          $set: [phone]
        },
        address: {
          $set: [address]
        },
        city: {
          $set: [city]
        },
        state: {
          $set: [state]
        },
        zipCode: {
          $set: [zipCode]
        },
        email: {
          $set: [email]
        },
        location: {
          $set: [location]
        }
      });

      _this.setState({
        newStudent: newStudent
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        newStudent: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.id, event.target.value)
      });
    });

    _this.state = {
      newStudent: {
        firstName: "",
        lastName: "",
        gender: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        email: "",
        location: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var _this$state$newStuden = this.state.newStudent,
          firstName = _this$state$newStuden.firstName,
          lastName = _this$state$newStuden.lastName,
          gender = _this$state$newStuden.gender,
          phone = _this$state$newStuden.phone,
          address = _this$state$newStuden.address,
          city = _this$state$newStuden.city,
          state = _this$state$newStuden.state,
          zipCode = _this$state$newStuden.zipCode,
          email = _this$state$newStuden.email; // const { newStudent } = this.state;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_user_edit",
        className: "jsx-2013376804" + " " + "modal modal-custom modal-custom-large modal-gray"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        action: "#",
        className: "jsx-2013376804" + " " + "custom-form"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-modal card-main card grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: "#31837a",
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "owner-box card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "user-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: "#0085ce",
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "user-circle"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "images/img-owner01.jpg",
        alt: "",
        className: "jsx-2013376804"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "user-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-2013376804" + " " + "h3"
      }, "Ownerly, Jennifer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "mailto:jen.ownerly@gmail.com",
        className: "jsx-2013376804"
      }, "jen.ownerly@gmail.com")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-owner"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "text-icon"
      }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Account Info"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-main card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "firstName",
        value: firstName,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "firstName",
        className: "jsx-2013376804" + " " + "label"
      }, "First Name*"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "lastName",
        value: lastName,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "lastName",
        className: "jsx-2013376804" + " " + "label"
      }, "Last Name*"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "email",
        value: email,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "email",
        className: "jsx-2013376804" + " " + "label"
      }, "Email Address*"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + ""
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12 l7"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_15__["default"])(gender, _utils_genderOptions__WEBPACK_IMPORTED_MODULE_14__["default"]),
        onChange: this.onSetGender,
        options: _utils_genderOptions__WEBPACK_IMPORTED_MODULE_14__["default"],
        label: "Gender",
        stateKey: "state",
        dropdownKey: "state",
        id: "gender"
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Contact Info"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-main card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "tel",
        id: "phone",
        value: phone,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "phone",
        className: "jsx-2013376804" + " " + "label"
      }, "Phone (optional)"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "address",
        value: address,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "address",
        className: "jsx-2013376804" + " " + "label"
      }, "Street Address (optional)"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "city",
        value: city,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "city",
        className: "jsx-2013376804" + " " + "label"
      }, "City (optional)"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s12 m6 l5"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_15__["default"])(state, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_16__["default"]),
        onChange: this.onSetState,
        options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_16__["default"],
        label: "State",
        stateKey: "state",
        dropdownKey: "state"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s12 m6 l7"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "tel",
        id: "zipCode",
        value: zipCode,
        onChange: this.handleChange,
        className: "jsx-2013376804"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "zipCode",
        className: "jsx-2013376804" + " " + "label"
      }, "Zip (optional)")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s12 l6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Location(s)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-main card-location card card-large"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: "#62b771",
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "card-panel card-panel-location"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804" + " " + "h4 truncate"
      }, "Tutor Doctor"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-2013376804" + " " + "sub-title"
      }, "Tutor Doctor - Austin, TX")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-location"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "text-icon"
      }, "Location"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown105",
        className: "jsx-2013376804" + " " + 'dropdown-trigger btn'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "material-icons dots-icon"
      }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown105",
        className: "jsx-2013376804" + " " + 'dropdown-content dropdown-wide'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#modal_location_edit",
        className: "jsx-2013376804" + " " + "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804"
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804"
      }, "Delete"))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-main card-location card card-large"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: "#62b771",
          color: "#fff"
        },
        className: "jsx-2013376804" + " " + "card-panel card-panel-location"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2013376804" + " " + "h4 truncate"
      }, "Tutor Doctor"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-2013376804" + " " + "sub-title"
      }, "Tutor Doctor - Dallas, TX")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col s3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-location"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "text-icon"
      }, "Location"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown106",
        className: "jsx-2013376804" + " " + 'dropdown-trigger btn'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "material-icons dots-icon"
      }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown106",
        className: "jsx-2013376804" + " " + 'dropdown-content dropdown-wide'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#modal_location_edit",
        className: "jsx-2013376804" + " " + "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804"
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2013376804"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804"
      }, "Delete"))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "add-box"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "add-box-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-2013376804" + " " + "btn-floating waves-effect waves-light green lighten-1"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "material-icons"
      }, "add")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-2013376804" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Delete"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        onClick: this.onCloseModal,
        className: "jsx-2013376804" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.handleNewStudent,
        className: "jsx-2013376804" + " " + "btn"
      }, "Save"))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2013376804"
      }, ".overlay.jsx-2013376804{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-2013376804{margin:0;border-radius:6px;}#modal_Location1.jsx-2013376804{border-radius:6px;}.modal.jsx-2013376804{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2013376804{opacity:1;visibility:visible;}.modal-footer.jsx-2013376804{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc2NoYXZhcnJvL2NsZWFyLWNob2ljZS9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9TdHVkZW50L2NvbXBvbmVudHMvU3R1ZGVudE1vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZSVyxBQUc4QixBQVNOLEFBSVMsQUFHSixBQVNKLEFBSWEsU0FuQkwsQ0FnQkMsSUFUSSxDQWhCYSxHQWF0QyxLQWdCQSxJQW5CQSxFQWdCQSxRQVRvQixXQWhCWixNQUNFLENBZ0JBLE9BZkMsQ0FnQkMsUUFmSCxFQWdCRSxLQWZHLElBZ0I0RyxRQWYxSCxxR0FnQkEiLCJmaWxlIjoiL1VzZXJzL2NocmlzY2hhdmFycm8vY2xlYXItY2hvaWNlL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL1N0dWRlbnQvY29tcG9uZW50cy9TdHVkZW50TW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnaW1tdXRhYmlsaXR5LWhlbHBlcic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uLy4uLy4uL1BvcnRhbCc7XG5pbXBvcnQgQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIGZyb20gJy4uLy4uLy4uL0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vLi4vLi4vRm9ybUNvbXBvbmVudHMvRHJvcGRvd24nO1xuaW1wb3J0IGdlbmRlck9wdGlvbnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZ2VuZGVyT3B0aW9ucyc7XG5pbXBvcnQgZ2V0VmFsdWVGcm9tU3RhdGUgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZ2V0VmFsdWVGcm9tU3RhdGUnO1xuaW1wb3J0IHN0YXRlT3B0aW9ucyBmcm9tICcuLi8uLi8uLi91dGlscy9zdGF0ZU9wdGlvbnMnO1xuXG5cbmNsYXNzIFN0dWRlbnRNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmV3U3R1ZGVudDoge1xuICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgICAgICAgICAgICBnZW5kZXI6IFwiXCIsXG4gICAgICAgICAgICAgIHBob25lOiBcIlwiLFxuICAgICAgICAgICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICBzdGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgemlwQ29kZTogXCJcIixcbiAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlwiLFxuICAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbmV3U3R1ZGVudDogW10gfSwgdGhpcy5wcm9wcy5vbkNsb3NlIClcbiAgICBvblNldEdlbmRlciA9IChnZW5kZXIpID0+IHRoaXMuc2V0U3RhdGUoe25ld1N0dWRlbnQ6IHsgZ2VuZGVyIH19KTtcbiAgICBvblNldFN0YXRlID0gKHN0YXRlKSA9PiB0aGlzLnNldFN0YXRlKHtuZXdTdHVkZW50OiB7c3RhdGV9fSk7XG5cbiAgICBoYW5kbGVOZXdTdHVkZW50ID0gKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGdlbmRlciwgcGhvbmUsIGFkZHJlc3MsIGNpdHksIHN0YXRlLCB6aXBDb2RlLCBlbWFpbCwgbG9jYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3R1ZGVudCA9IHVwZGF0ZSh0aGlzLnN0YXRlLm5ld1N0dWRlbnQsIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogeyRzZXQ6IFtmaXJzdE5hbWVdfSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiB7JHNldDogW2xhc3ROYW1lXX0sXG4gICAgICAgICAgICBnZW5kZXI6IHskc2V0OiBbZ2VuZGVyXX0sXG4gICAgICAgICAgICBwaG9uZTogeyRzZXQ6IFtwaG9uZV19LFxuICAgICAgICAgICAgYWRkcmVzczogeyRzZXQ6IFthZGRyZXNzXX0sXG4gICAgICAgICAgICBjaXR5OiB7JHNldDogW2NpdHldfSxcbiAgICAgICAgICAgIHN0YXRlOiB7JHNldDogW3N0YXRlXX0sXG4gICAgICAgICAgICB6aXBDb2RlOiB7JHNldDogW3ppcENvZGVdfSxcbiAgICAgICAgICAgIGVtYWlsOiB7JHNldDogW2VtYWlsXX0sXG4gICAgICAgICAgICBsb2NhdGlvbjogeyRzZXQ6IFtsb2NhdGlvbl19LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1N0dWRlbnQgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBuZXdTdHVkZW50OiB7XG4gICAgICAgICBbZXZlbnQudGFyZ2V0LmlkXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGdlbmRlciwgcGhvbmUsIGFkZHJlc3MsIGNpdHksIHN0YXRlLCB6aXBDb2RlLCBlbWFpbCB9ID0gdGhpcy5zdGF0ZS5uZXdTdHVkZW50O1xuICAgICAgICAvLyBjb25zdCB7IG5ld1N0dWRlbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3VzZXJfZWRpdFwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1jdXN0b20tbGFyZ2UgbW9kYWwtZ3JheVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZC1tYWluIGNhcmQgZ3JleSBsaWdodGVuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVyLWJveCBjYXJkLXBhbmVsIGNhcmQtcGFuZWwtdGl0bGVcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMzE4MzdhXCIsIGNvbG9yOiBcIiNmZmZcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2lyY2xlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwODVjZVwiLCBjb2xvcjogXCIjZmZmXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pbWctb3duZXIwMS5qcGdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci10ZXh0XCIgc3R5bGU9e3tjb2xvcjogXCIjZmZmXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaDNcIj5Pd25lcmx5LCBKZW5uaWZlcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzomIzEwNjsmIzEwMTsmIzExMDsmIzA0NjsmIzExMTsmIzExOTsmIzExMDsmIzEwMTsmIzExNDsmIzEwODsmIzEyMTsmIzA2NDsmIzEwMzsmIzEwOTsmIzA5NzsmIzEwNTsmIzEwODsmIzA0NjsmIzA5OTsmIzExMTsmIzEwOTtcIj4mIzEwNjsmIzEwMTsmIzExMDsmIzA0NjsmIzExMTsmIzExOTsmIzExMDsmIzEwMTsmIzExNDsmIzEwODsmIzEyMTsmIzA2NDsmIzEwMzsmIzEwOTsmIzA5NzsmIzEwNTsmIzEwODsmIzA0NjsmIzA5OTsmIzExMTsmIzEwOTs8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tb3duZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWljb25cIj5Pd25lcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDZcIj5cblxuICAgICAgICAgICAgICB7LyogZm9ybSBwYW5lbCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QWNjb3VudCBJbmZvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW4gY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgdmFsdWU9e2ZpcnN0TmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWUqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0TmFtZVwiIHZhbHVlPXtsYXN0TmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsIEFkZHJlc3MqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTIgbDdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2V0VmFsdWVGcm9tU3RhdGUoZ2VuZGVyLCBnZW5kZXJPcHRpb25zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRHZW5kZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dlbmRlck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVLZXk9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duS2V5PVwic3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogZm9ybSBwYW5lbCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCBJbmZvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW4gY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgaWQ9XCJwaG9uZVwiIHZhbHVlPXtwaG9uZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgKG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc1wiIHZhbHVlPXthZGRyZXNzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwiYWRkcmVzc1wiPlN0cmVldCBBZGRyZXNzIChvcHRpb25hbCk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIiB2YWx1ZT17Y2l0eX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cImNpdHlcIj5DaXR5IChvcHRpb25hbCk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgbDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2V0VmFsdWVGcm9tU3RhdGUoc3RhdGUsIHN0YXRlT3B0aW9ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c3RhdGVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUtleT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duS2V5PVwic3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBsN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgaWQ9XCJ6aXBDb2RlXCIgdmFsdWU9e3ppcENvZGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cInppcENvZGVcIj5aaXAgKG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGw2XCI+XG4gICAgICAgICAgICAgICAgey8qIGZvcm0gcGFuZWwgKi99XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TG9jYXRpb24ocyk8L2gzPlxuICAgICAgICAgICAgICB7LyogY2FyZCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW4gY2FyZC1sb2NhdGlvbiBjYXJkIGNhcmQtbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC1sb2NhdGlvblwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM2MmI3NzFcIiwgY29sb3I6IFwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoNCB0cnVuY2F0ZVwiPlR1dG9yIERvY3RvcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlR1dG9yIERvY3RvciAtIEF1c3RpbiwgVFg8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpY29ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvY2F0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYmxvY2sgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biB0cmlnZ2VyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLXRyaWdnZXIgYnRuJyBocmVmPScjJyBkYXRhLXRhcmdldD0nZHJvcGRvd24xMDUnPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGRvdHMtaWNvblwiPm1vcmVfdmVydDwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biBzdHJ1Y3R1cmUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24xMDUnIGNsYXNzTmFtZT0nZHJvcGRvd24tY29udGVudCBkcm9wZG93bi13aWRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2RhbCB0cmlnZ2VyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21vZGFsX2xvY2F0aW9uX2VkaXRcIiBjbGFzc05hbWU9XCJtb2RhbC10cmlnZ2VyIGxpbmstYmxvY2tcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkNsb25lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkRlbGV0ZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIGNhcmQgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW4gY2FyZC1sb2NhdGlvbiBjYXJkIGNhcmQtbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC1sb2NhdGlvblwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM2MmI3NzFcIiwgY29sb3I6IFwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoNCB0cnVuY2F0ZVwiPlR1dG9yIERvY3RvcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlR1dG9yIERvY3RvciAtIERhbGxhcywgVFg8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpY29ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvY2F0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYmxvY2sgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biB0cmlnZ2VyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLXRyaWdnZXIgYnRuJyBocmVmPScjJyBkYXRhLXRhcmdldD0nZHJvcGRvd24xMDYnPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGRvdHMtaWNvblwiPm1vcmVfdmVydDwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biBjb250ZW50ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMTA2JyBjbGFzc05hbWU9J2Ryb3Bkb3duLWNvbnRlbnQgZHJvcGRvd24td2lkZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9kYWwgdHJpZ2dlciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtb2RhbF9sb2NhdGlvbl9lZGl0XCIgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlciBsaW5rLWJsb2NrXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5DbG9uZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5EZWxldGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBjYXJkIGFkZCBibG9jayAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWJveC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1mbG9hdGluZyB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgZ3JlZW4gbGlnaHRlbi0xXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGdyZXktdGV4dCB0ZXh0LWRhcmtlbi0xXCIgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9PkNhbmNlbDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5ld1N0dWRlbnR9PlNhdmU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21vZGFsX0xvY2F0aW9uMSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblN0dWRlbnRNb2RhbC5wcm9wVHlwZXMgPSB7XG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudE1vZGFsO1xuXG4iXX0= */\n/*@ sourceURL=/Users/chrischavarro/clear-choice/clear-choice-admin/components/Student/components/StudentModal/index.js */"));
    }
  }]);

  return StudentModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

StudentModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StudentModal);

/***/ }),

/***/ "./components/Student/components/StudentNavBar/index.js":
/*!**************************************************************!*\
  !*** ./components/Student/components/StudentNavBar/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var StudentNavBar = function StudentNavBar(_ref) {
  var activePage = _ref.activePage,
      onSetActivePage = _ref.onSetActivePage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav-additional"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu-additional"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: activePage === 'summary' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('summary');
    },
    href: "#"
  }, "Summary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: activePage === 'calendar' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('calendar');
    },
    href: "#"
  }, "Calendar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: activePage === 'lessons' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('lessons');
    },
    href: "#"
  }, "Lessons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: activePage === 'worksheets' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('worksheets');
    },
    href: "#"
  }, "Worksheets")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: activePage === 'test' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('test');
    },
    href: "#"
  }, "Test Sections")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: activePage === 'account' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('account');
    },
    href: "#"
  }, "Account"))));
};

StudentNavBar.propTypes = {
  activePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onSetActivePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StudentNavBar);

/***/ }),

/***/ "./components/Student/utils/sampleStudentList.js":
/*!*******************************************************!*\
  !*** ./components/Student/utils/sampleStudentList.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sampleStudentList = [{
  id: '1232',
  active: false,
  studentInformation: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    gender: 'Male'
  },
  contactInformation: {
    phone: '7865645859',
    addressLine1: '1234 Test Lane',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
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
  instructor: {
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
  tutor: "Jason Bourne",
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1400',
    highSchool: 'Everglades High',
    graduationYear: '2018'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '77',
    improvement: '82',
    lessons: '73',
    instruction: '68',
    practiceTests: '47'
  },
  overdueWork: {
    lessons: '12',
    worksheets: '3',
    quizzes: '1',
    practiceTests: '5'
  },
  summary: {
    questionsAnswered: '791',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '1040',
    currentScore: '1300',
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    }
  },
  totalScore: '1300',
  totalPossible: '1600',
  sectionScores: {
    readingAndWriting: '710',
    math: '650',
    totalPossible: '800'
  },
  essayScores: {
    reading: '7',
    analysis: '6',
    writing: '7',
    totalPossible: '8'
  },
  crossTestScores: '24',
  subScores: {
    commandOfEvidence: '5',
    wordsInContext: '12',
    expressionOfIdeas: '12',
    standardEnglishConventions: '14',
    heartOfAlgebra: '10',
    problemSolvingAndDataAnalysis: '10',
    passportToAdvancedMath: '13',
    totalPossible: '15'
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false
  }]
}, {
  id: '1233',
  active: true,
  studentInformation: {
    firstName: 'JJ',
    lastName: 'Abrams',
    gender: 'Male'
  },
  contactInformation: {
    phone: '8888888888',
    addressLine1: '123 Sesame Street',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
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
  instructor: {
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
  tutor: "James Bond",
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1250',
    highSchool: 'Everglades High',
    graduationYear: '2019'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '65',
    improvement: '84',
    lessons: '66',
    instruction: '66',
    practiceTests: '45'
  },
  overdueWork: {
    lessons: '10',
    worksheets: '4',
    quizzes: '2',
    practiceTests: '6'
  },
  summary: {
    questionsAnswered: '750',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '950',
    currentScore: '1080',
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    },
    totalScore: '1080',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false
  }]
}, {
  id: '1234',
  active: false,
  studentInformation: {
    firstName: 'Caroline',
    lastName: 'Ingalls',
    gender: 'female'
  },
  contactInformation: {
    phone: '4448885598',
    addressLine1: '123 Baker Street',
    addressLine2: '',
    city: 'Paris',
    state: 'ID',
    zipCode: '88775'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
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
  instructor: {
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
  tutor: "Jason Bourne",
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1500',
    highSchool: 'Everglades High',
    graduationYear: '2018'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '77',
    improvement: '82',
    lessons: '73',
    instruction: '68',
    practiceTests: '47'
  },
  overdueWork: {
    lessons: '12',
    worksheets: '3',
    quizzes: '1',
    practiceTests: '5'
  },
  summary: {
    questionsAnswered: '791',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '900',
    currentScore: '1080',
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    },
    totalScore: '1080',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false
  }]
}, {
  id: '1236',
  active: true,
  studentInformation: {
    firstName: 'Bob',
    lastName: 'Ross',
    gender: 'Male'
  },
  contactInformation: {
    phone: '7865645859',
    addressLine1: '1234 Test Lane',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
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
  instructor: {
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
  tutor: "James Bond",
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1450',
    highSchool: 'Everglades High',
    graduationYear: '2018'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '77',
    improvement: '82',
    lessons: '73',
    instruction: '68',
    practiceTests: '47'
  },
  overdueWork: {
    lessons: '12',
    worksheets: '3',
    quizzes: '1',
    practiceTests: '5'
  },
  summary: {
    questionsAnswered: '791',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '1040',
    currentScore: '1270',
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    },
    totalScore: '1270',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (sampleStudentList);

/***/ }),

/***/ "./components/Toast/index.js":
/*!***********************************!*\
  !*** ./components/Toast/index.js ***!
  \***********************************/
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./components/Toast/styles/index.js");










var Toast =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Toast, _React$Component);

  function Toast() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Toast);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Toast).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Toast, [{
    key: "render",
    // eslint-disable-line
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnVisibilityChange: true,
        draggable: true,
        pauseOnHover: true
      }));
    }
  }]);

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./components/Toast/styles/index.js":
/*!******************************************!*\
  !*** ./components/Toast/styles/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ToastWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ToastWrapper",
  componentId: "f1vbvd-0"
})([".update-success{background-color:#31837a;}.progress-bar-success{background-color:#fff;}"]);
/* harmony default export */ __webpack_exports__["default"] = (ToastWrapper);

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

/***/ "./components/utils/licenseTypeOptions.js":
/*!************************************************!*\
  !*** ./components/utils/licenseTypeOptions.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  classMember: {
    name: 'Class Member',
    description: "This license type allows the student to participate in a course with 4 or more other students. The coursework may be customized for the class as a whole, but not for individual students within the class.\n    To conduct a course for an individual student in a one-on-one format (tutoring), you need a \u201Cone-on-one\u201D license type.\n    "
  },
  oneOnOne: {
    name: 'One-On-One',
    description: "This license type allows the student to participate in a course with 4 or more other students. The coursework may be customized for the class as a whole, but not for individual students within the class.\n    To conduct a course for an individual student in a one-on-one format (tutoring), you need a \u201Cone-on-one\u201D license type.\n    "
  }
});

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

/***/ "./components/utils/sampleClasses.js":
/*!*******************************************!*\
  !*** ./components/utils/sampleClasses.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  className: 'Disneyworld  Tutoring',
  classLocation: 'Miami, FL'
}, {
  className: 'TutorZone Austin',
  classLocation: 'Austin, TX'
}, {
  className: 'TutorZone Miami',
  classLocation: 'San Francisco, CA'
}, {
  className: 'Disneyworld  Tutoring2',
  classLocation: 'New York, NY'
}, {
  className: 'TutorZone Austin2',
  classLocation: 'Denver, CO'
}, {
  className: 'TutorZone Miami2',
  classLocation: 'Atlanta, GA'
}]);

/***/ }),

/***/ "./components/utils/sampleInstructors.js":
/*!***********************************************!*\
  !*** ./components/utils/sampleInstructors.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/utils/sampleLocations.js":
/*!*********************************************!*\
  !*** ./components/utils/sampleLocations.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/utils/sampleTopics.js":
/*!******************************************!*\
  !*** ./components/utils/sampleTopics.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ "./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./pages/students.js":
/*!***************************!*\
  !*** ./pages/students.js ***!
  \***************************/
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
/* harmony import */ var _components_Student_components_StudentCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Student/components/StudentCard */ "./components/Student/components/StudentCard/index.js");
/* harmony import */ var _components_Student_utils_sampleStudentList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Student/utils/sampleStudentList */ "./components/Student/utils/sampleStudentList.js");
/* harmony import */ var _components_Student_ListPage_Components_FilterSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Student/ListPage/Components/FilterSection */ "./components/Student/ListPage/Components/FilterSection/index.js");
/* harmony import */ var _components_Student_components_StudentModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Student/components/StudentModal */ "./components/Student/components/StudentModal/index.js");
/* harmony import */ var _components_Location_utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Location/utils/sampleLocationList */ "./components/Location/utils/sampleLocationList.js");
/* harmony import */ var _components_Student_IndividualStudentPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Student/IndividualStudentPage */ "./components/Student/IndividualStudentPage/index.js");















var Students =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Students, _Component);

  function Students(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Students);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Students).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenStudentModal", function () {
      return _this.setState({
        studentModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseStudentModal", function () {
      return _this.setState({
        studentModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredState", function (filterName) {
      return _this.setState({
        filterName: filterName
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        filterName: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredLocationState", function (location) {
      return _this.setState({
        location: location
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredLocationState", function () {
      return _this.setState({
        location: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByName", function () {
      var _this$state = _this.state,
          students = _this$state.students,
          filterName = _this$state.filterName;
      return students.reduce(function (finalArr, currentStudent) {
        var lastName = currentStudent.lastName,
            firstName = currentStudent.firstName;
        var studentString = "".concat(firstName.toLowerCase()).concat(lastName.toLowerCase());

        if (studentString.indexOf(filterName) !== -1 && finalArr.indexOf(currentStudent) === -1) {
          finalArr.push(currentStudent);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onHandleStudentCard", function (index) {
      var students = _this.state.students;

      _this.setState({
        selectedStudent: students[index]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onRedirectToStudentPage", function (event) {
      event.preventDefault();

      _this.setState({
        selectedStudent: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDeleteStudent", function (index) {
      var students = _this.state.students;

      var newStudentArray = _this.arrayItemRemover(students, students[index]);

      _this.setState({
        students: newStudentArray
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloneStudent", function (index) {
      var students = _this.state.students;

      _this.setState(function (prevState) {
        prevState.students.push(students[index]);
        return {
          students: prevState.students
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "arrayItemRemover", function (array, value) {
      return array.filter(function (student) {
        return student !== value;
      });
    });

    _this.state = {
      selectedStudent: null,
      locations: _components_Location_utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_12__["default"],
      students: _components_Student_utils_sampleStudentList__WEBPACK_IMPORTED_MODULE_9__["default"],
      studentModalOpen: false,
      sort: "",
      filterName: "",
      newStudent: {
        active: false,
        firstName: {},
        lastName: {},
        gender: {},
        phone: {},
        address: {},
        city: {},
        state: {},
        zipCode: {},
        email: {},
        location: {}
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Students, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          studentModalOpen = _this$state2.studentModalOpen,
          students = _this$state2.students,
          selectedStudent = _this$state2.selectedStudent;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, !selectedStudent && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title-row card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "menu"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "h1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-student"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-block"
      }, "Students")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_ListPage_Components_FilterSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onSetSort: this.onSetSort,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState,
        onSetFilteredLocationState: this.onSetFilteredLocationState,
        onUnsetFilteredLocationState: this.onUnsetFilteredLocationState,
        handleFilterClick: this.handleFilterClick,
        onFilterByName: this.onFilterByName
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex-content"
      }, students.map(function (student, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_components_StudentCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
          student: student,
          index: index,
          id: student.id,
          key: student.id,
          onHandleStudentCard: function onHandleStudentCard() {
            return _this2.onHandleStudentCard(index);
          },
          onDeleteStudent: function onDeleteStudent() {
            return _this2.onDeleteStudent(index);
          },
          onCloneStudent: function onCloneStudent() {
            return _this2.onCloneStudent(index, student.id);
          }
        });
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn add-btn modal-trigger",
        onClick: this.onOpenStudentModal
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Student"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_components_StudentModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        open: studentModalOpen,
        onOpenStudentModal: this.OpenStudentModal,
        onClose: this.onCloseStudentModal
      })), selectedStudent && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_IndividualStudentPage__WEBPACK_IMPORTED_MODULE_13__["default"], {
        student: selectedStudent,
        onRedirectToStudentPage: this.onRedirectToStudentPage
      })));
    }
  }]);

  return Students;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Students);

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/students.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrischavarro/clear-choice/clear-choice-admin/pages/students.js */"./pages/students.js");


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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-server/dynamic":
/*!**************************************!*\
  !*** external "next-server/dynamic" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dynamic");

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

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

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
//# sourceMappingURL=students.js.map