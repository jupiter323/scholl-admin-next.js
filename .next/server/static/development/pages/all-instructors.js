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

/***/ "./components/ClickOffComponentWrapper/index.js":
/*!******************************************************!*\
  !*** ./components/ClickOffComponentWrapper/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClickOffComponentWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


class ClickOffComponentWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.props.nestedModals) {
        return;
      }

      this.props.onOuterClick();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.className,
      ref: this.setWrapperRef
    }, this.props.children);
  }

}
ClickOffComponentWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onOuterClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nestedModals: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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







const Dropdown = ({
  value,
  label,
  dropdownKey,
  stateKey = null,
  onChange,
  options,
  valid = true,
  padRight,
  className
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  className: className,
  valid: valid || !valid && value === {},
  padRight: padRight
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
  options: options,
  onChange: event => onChange(event.value, dropdownKey, stateKey),
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






const ControlComponent = props => {
  const {
    selectProps: {
      placeholder,
      label,
      className
    }
  } = props;
  const categoryCheck = label === 'Categories';
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
  multiValueLabel: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    color: 'white',
    borderRadius: 'inherit',
    fontSize: 'inherit',
    overflow: 'inherit',
    padding: 'inherit',
    paddingLeft: 'inherit',
    textOverflow: 'inherit',
    whiteSpace: 'inherit',
    boxSizing: 'inherit' // backgroundColor: 'red!important',

  }),
  menuList: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles),
  dropdownIndicator: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    display: 'none'
  }),
  multiValue: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    background: 'none'
  }),
  valueContainer: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles),
  input: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    paddingTop: '9px'
  }),
  groupHeading: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles),
  control: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    boxShadow: 'none',
    borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important'
  })
});
const DropdownStyles = {
  container: (base, state) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
    opacity: state.isDisabled ? ".5" : "1",
    backgroundColor: "transparent",
    zIndex: "999"
  }),
  option: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    backgroundColor: isFocused ? '#dad8d8' : 'white',
    color: isFocused ? '#a80303' : '#333',
    clear: 'both',
    lineHeight: '22px',
    width: '100%',
    textAlign: 'left',
    fontWeight: '500',
    padding: '3px 10px 3px 19px',
    fontSize: '15px'
  }),
  control: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    border: 'none',
    borderBottom: '1px solid',
    borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important',
    backgroundColor: 'transparent',
    borderRadius: '0',
    outline: 'none',
    boxShadow: 'none'
  })
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

const DropdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__DropdownWrapper",
  componentId: "s47nns-0"
})(["padding:5px 0;padding-right:", ";", ";&.flex-50{flex-basis:50%!important;}"], ({
  padRight
}) => padRight ? '20px' : '', ({
  valid
}) => !valid ? `div.select__control, div.expanded-select__control, div.multi-select__control { 
        border-color: #F44336!important; 
        &:focus {
          border-color: inherit;
      }
    }` : '');
const ControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ControlWrapper",
  componentId: "s47nns-1"
})(["p{padding-left:", ";margin-bottom:5px;color:#959595;margin-top:", ";}", ";"], ({
  categoryCheck
}) => categoryCheck ? '10px' : '', ({
  categoryCheck
}) => categoryCheck ? '20px' : '', ({
  invalid
}) => invalid ? `div.multi-select__control {
      border-color: #F44336!important;
    }` : '');
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_locationOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/locationOptions */ "./components/utils/locationOptions.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/sortOptions */ "./components/utils/sortOptions.js");









class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterChange", (event, name) => {
      const {
        onSetFilteredLocationState,
        onUnsetFilteredLocationState,
        onSetSort
      } = this.props;
      const value = event.target ? event.target.value : event;
      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(this.state, {
        $merge: {
          [name]: value
        }
      });
      this.setState(updatedState);

      if (name === 'location') {
        if (event === '') {
          return onUnsetFilteredLocationState();
        }

        return onSetFilteredLocationState(event);
      } else if (name === 'sort') {
        return onSetSort(event);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submitNameFilter", () => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;
      const {
        name
      } = this.state;

      if (name === '') {
        onUnsetFilteredState();
      }

      const transformedName = name.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    this.state = {
      name: '',
      location: {},
      sort: {}
    };
  } // This function does two things - first, it changes the filter state regardless of the field it's coming from
  // If either location or sort filters are changed, we dispatch the appropriate action in ListPage to ensure the rendered instructors are filtered/sorted appropriately
  // eslint-disable-next-line consistent-return


  render() {
    // eslint-disable-next-line no-unused-vars
    const {
      name,
      location,
      sort
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "filter-inputs-holder"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s12 m4 l3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "search-field input-field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "search",
      id: "name_search",
      className: "input-control validate",
      name: "name",
      value: name,
      onChange: event => this.handleFilterChange(event, 'name')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "search-button",
      onClick: this.submitNameFilter
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-search"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: name.length ? 'label active' : 'label',
      htmlFor: "name_search"
    }, "Search"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s12 m4 l3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__["default"])(location, _utils_locationOptions__WEBPACK_IMPORTED_MODULE_6__["default"]),
      onChange: event => this.handleFilterChange(event, 'location'),
      options: _utils_locationOptions__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: "Location",
      stateKey: "location",
      dropdownKey: "location"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s12 m4 l3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__["default"])(sort, _utils_sortOptions__WEBPACK_IMPORTED_MODULE_7__["default"]),
      onChange: event => this.handleFilterChange(event, 'sort'),
      options: _utils_sortOptions__WEBPACK_IMPORTED_MODULE_7__["default"],
      label: "Sort",
      stateKey: "sort",
      dropdownKey: "sort"
    })))));
  }

}

FilterSection.propTypes = {
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredLocationState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredLocationState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _InstructorDetailsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InstructorDetailsModal */ "./components/Instructor/ListPage/components/InstructorDetailsModal/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Modal */ "./components/Modal/index.js");







const data = (total, current) => ({
  datasets: [{
    data: [current, total - current],
    backgroundColor: ['rgb(49, 131, 122)', '#eaeaea']
  }]
});

class InstructorCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenInstructorDetailsModal", () => {
      this.props.onCloseDropdown();
      this.setState({
        instructorDetailsModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseInstructorDetailsModal", () => this.setState({
      instructorDetailsModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloneInstructor", () => this.props.onCloneInstructor(this.props.instructor));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenDeleteModal", () => this.setState({
      deleteModalOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDeleteModal", () => this.setState({
      deleteModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onConfirmDeleteInstructor", () => {
      const {
        onDeleteInstructor,
        instructor,
        onCloseDropdown
      } = this.props;
      onDeleteInstructor(instructor);
      onCloseDropdown();
      this.onCloseDeleteModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", event => {
      const {
        onSetDropdown,
        onCloseDropdown,
        dropdownIsOpen,
        index
      } = this.props;
      event.preventDefault();

      if (dropdownIsOpen) {
        return onCloseDropdown();
      }

      return onSetDropdown(index);
    });

    this.state = {
      instructorDetailsModalOpen: false,
      deleteModalOpen: false
    };
  }

  render() {
    const {
      deleteModalOpen,
      instructorDetailsModalOpen
    } = this.state;
    const {
      dropdownIsOpen,
      dropdownIndex,
      index,
      instructor,
      onSaveInstructorChanges
    } = this.props;
    const {
      accountInfo: {
        lastName,
        firstName,
        email
      } = {},
      basicInfo: {
        activeStudents,
        pastStudents,
        unactivatedStudents,
        averageImprovement,
        averageInitialScore,
        averageFinalScore,
        studentsAchievingTargetScore
      } = {}
    } = instructor;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InstructorDetailsModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      instructor: instructor,
      open: instructorDetailsModalOpen,
      onClose: this.onCloseInstructorDetailsModal,
      onSaveInstructorChanges: onSaveInstructorChanges,
      onOpenDeleteModal: this.onOpenDeleteModal,
      deleteModalOpen: deleteModalOpen
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: deleteModalOpen,
      onConfirm: this.onConfirmDeleteInstructor,
      onClose: this.onCloseDeleteModal,
      header: "Are You Sure?",
      body: "Deleting this instructor will be permanent"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-main card-location card card-large"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "owner-box card-panel",
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-panel-row row"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s9"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "user-block"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "user-circle",
      style: {
        backgroundColor: '#18b5e9',
        color: '#fff'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "initials"
    }, "NT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "user-text",
      style: {
        color: '#fff'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "h3"
    }, lastName, ", ", firstName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: `mailto:${email}`
    }, email)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s3 right-align"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row icons-row"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col right-align"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "block-icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-user"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-icon"
    }, "Instructor"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "dropdown-block col"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: this.handleDropdownClick,
      className: "dropdown-trigger btn",
      "data-target": "dropdown05"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: this.onOpenInstructorDetailsModal,
      className: "modal-trigger link-block"
    }, "Edit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: this.onCloneInstructor
    }, "Clone")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#!"
    }, "Impersonate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: this.onOpenDeleteModal
    }, "Delete"))) : null))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row d-flex align-items-center mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s12 m5"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "chart-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "chart-holder"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Doughnut"], {
      data: () => data(activeStudents, studentsAchievingTargetScore),
      height: 110,
      width: 110,
      options: {
        circumference: 4,
        rotation: -3.58,
        cutoutPercentage: 50,
        tooltips: false
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#31837a',
        bottom: '-22px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      "data-count-up": true,
      "data-start-val": "0",
      "data-end-val": "71",
      "data-duration": "1"
    }), Math.floor(studentsAchievingTargetScore / activeStudents * 100), "%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "chart-description",
      style: {
        color: '#31837a',
        marginTop: '36px'
      }
    }, "Students Who Achieved Target Score"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s12 m7"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "points-list"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "style-red-darken"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "badge-circle"
    }, activeStudents), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "point-text"
    }, "active students")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "style-pink-darken"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "badge-circle"
    }, pastStudents), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "point-text"
    }, "past students")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "badge-circle"
    }, unactivatedStudents), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "point-text"
    }, "unactivated students")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "style-blue-light"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "badge-circle"
    }, "+", averageImprovement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "point-text"
    }, "average improvement")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "style-blue"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "badge-circle"
    }, averageInitialScore), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "point-text"
    }, "average initial score")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "style-blue-dark"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "badge-circle"
    }, averageFinalScore), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "point-text"
    }, "average final score"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-footer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "meta-info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "truncate"
    }, "First Location,  Second Location, Possible Additional Truncated More Locatioa...")))))));
  }

}

InstructorCard.propTypes = {
  instructor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onSaveInstructorChanges: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onDeleteInstructor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloneInstructor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SharedModalComponents/AccountInfo */ "./components/Instructor/ListPage/components/SharedModalComponents/AccountInfo/index.js");
/* harmony import */ var _SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SharedModalComponents/ContactInfo */ "./components/Instructor/ListPage/components/SharedModalComponents/ContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SharedModalComponents/Locations */ "./components/Instructor/ListPage/components/SharedModalComponents/Locations/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");



/* eslint-disable no-unused-vars */










class InstructorDetailsModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalInstructor || nextProps.instructor.id !== this.state.originalInstructor.id) {
        const {
          instructor: {
            id,
            basicInfo,
            accountInfo,
            contactInfo,
            locations
          } = {}
        } = nextProps;
        const updatedInstructor = {
          id,
          basicInfo,
          accountInfo,
          contactInfo,
          locations
        };
        const {
          originalInstructor: originalInstructorState
        } = this.state;
        const originalInstructor = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(originalInstructorState, {
          $merge: nextProps.instructor
        });
        this.setState({
          originalInstructor,
          updatedInstructor
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenDeleteLocationModal", pendingLocationDelete => this.setState({
      deleteLocationModalOpen: true,
      pendingLocationDelete
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDeleteLocationModal", () => this.setState({
      deleteLocationModalOpen: false,
      pendingLocationDelete: {}
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenNewLocationModal", () => this.setState({
      newLocationModalOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseNewLocationModal", () => this.setState({
      newLocationModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenEditLocationModal", activeLocation => this.setState({
      editLocationModalOpen: true,
      activeLocation
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseEditLocationModal", () => this.setState({
      editLocationModalOpen: false,
      dropdownIsOpen: false,
      activeLocation: {}
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCancelChanges", () => {
      const {
        onClose
      } = this.props;
      const {
        updatedInstructor,
        originalInstructor
      } = this.state;
      this.setState({
        updatedInstructor: originalInstructor
      }, onClose());
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        updatedInstructor: {
          id,
          basicInfo,
          accountInfo,
          contactInfo,
          locations
        }
      } = this.state;
      const {
        onSaveLocationError,
        onSaveInstructorChanges,
        onClose
      } = this.props; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
      // const valid = true;

      const valid = await Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_10__["nestedEditFieldValidation"])(this.state, this.state.updatedInstructor, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveLocationError();
        console.warn('not valid');
      }

      const postBody = {
        id,
        basicInfo,
        accountInfo,
        contactInfo,
        locations
      };
      onSaveInstructorChanges(postBody);
      console.warn('stubbed out save function');
      onClose();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialInstructorMount", () => this.state.originalInstructor.id !== this.props.instructor.id);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name, section) => {
      const {
        updatedInstructor: previousInstructorState
      } = this.state;
      const value = event.target ? event.target.value : event;
      const updatedInstructor = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(previousInstructorState, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState({
        updatedInstructor
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderModalHeader", () => {
      const {
        instructor: {
          accountInfo: {
            lastName: initialLastName,
            firstName: initialFIrstName,
            email: initialEmail
          }
        }
      } = this.props;
      const {
        updatedInstructor: {
          accountInfo: {
            lastName: updatedLastName,
            firstName: updatedFirstName,
            email: updatedEmail
          }
        }
      } = this.state;
      let lastName;
      let firstName;
      let email;

      if (this.initialInstructorMount()) {
        lastName = initialLastName;
        firstName = initialFIrstName;
        email = initialEmail;
      } else {
        lastName = updatedLastName;
        firstName = updatedFirstName;
        email = updatedEmail;
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
        className: "h3"
      }, lastName, ", ", firstName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: `mailto:${email}`
      }, email));
    });

    this.state = {
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
  }

  componentDidMount() {
    const {
      instructor: {
        id,
        basicInfo,
        accountInfo,
        contactInfo,
        locations
      } = {}
    } = this.props;
    const updatedInstructor = {
      id,
      basicInfo,
      accountInfo,
      contactInfo,
      locations
    };
    const {
      originalInstructor: originalInstructorState
    } = this.state;
    const originalInstructor = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(originalInstructorState, {
      $merge: updatedInstructor
    });
    this.setState({
      originalInstructor,
      updatedInstructor
    }); // eslint-disable-line
  } // This resets the component state to reflect the details of the next instructor the user clicks on


  render() {
    const {
      open,
      instructor: {
        accountInfo,
        contactInfo,
        locations
      },
      onOpenDeleteModal,
      deleteModalOpen
    } = this.props;
    const {
      dropdownIsOpen,
      dropdownIndex,
      activeLocation,
      deleteLocationModalOpen,
      pendingLocationDelete,
      newLocationModalOpen,
      editLocationModalOpen,
      updatedInstructor: {
        accountInfo: updatedAccountInfo,
        contactInfo: updatedContactInfo,
        locations: updatedLocations
      }
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "overlay"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onOuterClick: this.onCancelChanges,
      nestedModals: deleteModalOpen || deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "modal_user_edit",
      className: "jsx-2979935167" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-modal card-main card grey lighten-3"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      },
      className: "jsx-2979935167" + " " + "owner-box card-panel card-panel-title"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-panel-row row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "col s9"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "user-block"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        backgroundColor: '#0085ce',
        color: '#fff'
      },
      className: "jsx-2979935167" + " " + "user-circle"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "images/img-owner01.jpg",
      alt: "",
      className: "jsx-2979935167"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        color: '#fff'
      },
      className: "jsx-2979935167" + " " + "user-text"
    }, this.renderModalHeader()))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-2979935167" + " " + "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-2979935167" + " " + "block-icon"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "jsx-2979935167" + " " + "icon-owner"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-2979935167" + " " + "text-icon"
    }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-body"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "col s12 l6"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      state: this.initialInstructorMount() ? accountInfo : updatedAccountInfo,
      handleDetailsChange: this.handleDetailsChange
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: this.initialInstructorMount() ? contactInfo : updatedContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "col s12 l6"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: onOpenDeleteModal,
      className: "jsx-2979935167" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Delete"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: this.onCancelChanges,
      className: "jsx-2979935167" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2979935167" + " " + "btn"
    }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2979935167"
    }, ".overlay.jsx-2979935167{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-2979935167{margin:0;border-radius:6px;}.modal.jsx-2979935167{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2979935167{opacity:1;visibility:visible;}.modal-footer.jsx-2979935167{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0luc3RydWN0b3IvTGlzdFBhZ2UvY29tcG9uZW50cy9JbnN0cnVjdG9yRGV0YWlsc01vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJRVyxBQUdnQyxBQVNOLEFBSUssQUFTSixBQUlhLFNBaEJMLENBYUMsSUFUSSxDQWJhLFFBMEJ0QyxJQWhCQSxFQWFBLFFBVG9CLFdBYlosTUFDRSxDQWFBLE9BWkMsQ0FhQyxRQVpILEVBYUUsS0FaRyxJQWE0RyxRQVoxSCxxR0FhQSIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9JbnN0cnVjdG9yL0xpc3RQYWdlL2NvbXBvbmVudHMvSW5zdHJ1Y3RvckRldGFpbHNNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnaW1tdXRhYmlsaXR5LWhlbHBlcic7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IEFjY291bnRJbmZvIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9BY2NvdW50SW5mbyc7XG5pbXBvcnQgQ29udGFjdEluZm8gZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0NvbnRhY3RJbmZvJztcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9ucyc7XG5cbmltcG9ydCB7IG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuXG5jbGFzcyBJbnN0cnVjdG9yRGV0YWlsc01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIG5ld0xvY2F0aW9uTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIGVkaXRMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsXG4gICAgICBwZW5kaW5nTG9jYXRpb25EZWxldGU6IHt9LFxuICAgICAgYWN0aXZlTG9jYXRpb246IHt9LFxuICAgICAgZHJvcGRvd25Jc09wZW46IGZhbHNlLFxuICAgICAgZHJvcGRvd25JbmRleDogbnVsbCxcbiAgICAgIG9yaWdpbmFsSW5zdHJ1Y3Rvcjoge1xuICAgICAgICBhY2NvdW50SW5mbzoge1xuICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0SW5mbzoge1xuICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICBzdHJlZXRBZGRyZXNzOiAnJyxcbiAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgemlwOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGVkSW5zdHJ1Y3Rvcjoge1xuICAgICAgICBhY2NvdW50SW5mbzoge1xuICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0SW5mbzoge1xuICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICBzdHJlZXRBZGRyZXNzOiAnJyxcbiAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgemlwOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIGFjY291bnRJbmZvOiB7XG4gICAgICAgICAgZmlyc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGxhc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaW5zdHJ1Y3RvcjogeyBpZCwgYmFzaWNJbmZvLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyB9ID0ge30gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXBkYXRlZEluc3RydWN0b3IgPSB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zIH07XG4gICAgY29uc3QgeyBvcmlnaW5hbEluc3RydWN0b3I6IG9yaWdpbmFsSW5zdHJ1Y3RvclN0YXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG9yaWdpbmFsSW5zdHJ1Y3RvciA9IHVwZGF0ZShvcmlnaW5hbEluc3RydWN0b3JTdGF0ZSwge1xuICAgICAgJG1lcmdlOiB1cGRhdGVkSW5zdHJ1Y3RvcixcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3JpZ2luYWxJbnN0cnVjdG9yLCB1cGRhdGVkSW5zdHJ1Y3RvciB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgLy8gVGhpcyByZXNldHMgdGhlIGNvbXBvbmVudCBzdGF0ZSB0byByZWZsZWN0IHRoZSBkZXRhaWxzIG9mIHRoZSBuZXh0IGluc3RydWN0b3IgdGhlIHVzZXIgY2xpY2tzIG9uXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKCghdGhpcy5zdGF0ZS5vcmlnaW5hbEluc3RydWN0b3IgfHwgbmV4dFByb3BzLmluc3RydWN0b3IuaWQgIT09IHRoaXMuc3RhdGUub3JpZ2luYWxJbnN0cnVjdG9yLmlkKSkge1xuICAgICAgY29uc3QgeyBpbnN0cnVjdG9yOiB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zIH0gPSB7fSB9ID0gbmV4dFByb3BzO1xuICAgICAgY29uc3QgdXBkYXRlZEluc3RydWN0b3IgPSB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zIH07XG4gICAgICBjb25zdCB7IG9yaWdpbmFsSW5zdHJ1Y3Rvcjogb3JpZ2luYWxJbnN0cnVjdG9yU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBvcmlnaW5hbEluc3RydWN0b3IgPSB1cGRhdGUob3JpZ2luYWxJbnN0cnVjdG9yU3RhdGUsIHtcbiAgICAgICAgJG1lcmdlOiBuZXh0UHJvcHMuaW5zdHJ1Y3RvcixcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yaWdpbmFsSW5zdHJ1Y3RvciwgdXBkYXRlZEluc3RydWN0b3IgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TZXREcm9wZG93biA9IChkcm9wZG93bkluZGV4KSA9PiB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25JbmRleCwgZHJvcGRvd25Jc09wZW46IHRydWUgfSk7XG4gIG9uQ2xvc2VEcm9wZG93biA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bklzT3BlbjogZmFsc2UgfSk7XG5cbiAgb25PcGVuRGVsZXRlTG9jYXRpb25Nb2RhbCA9IChwZW5kaW5nTG9jYXRpb25EZWxldGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogdHJ1ZSwgcGVuZGluZ0xvY2F0aW9uRGVsZXRlIH0pO1xuICBvbkNsb3NlRGVsZXRlTG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZToge30gfSk7XG5cbiAgb25PcGVuTmV3TG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBuZXdMb2NhdGlvbk1vZGFsT3BlbjogdHJ1ZSB9KTtcbiAgb25DbG9zZU5ld0xvY2F0aW9uTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbmV3TG9jYXRpb25Nb2RhbE9wZW46IGZhbHNlIH0pO1xuXG4gIG9uT3BlbkVkaXRMb2NhdGlvbk1vZGFsID0gKGFjdGl2ZUxvY2F0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgZWRpdExvY2F0aW9uTW9kYWxPcGVuOiB0cnVlLCBhY3RpdmVMb2NhdGlvbiB9KTtcbiAgb25DbG9zZUVkaXRMb2NhdGlvbk1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVkaXRMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsIGRyb3Bkb3duSXNPcGVuOiBmYWxzZSwgYWN0aXZlTG9jYXRpb246IHt9IH0pO1xuXG4gIG9uQ2FuY2VsQ2hhbmdlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1cGRhdGVkSW5zdHJ1Y3Rvciwgb3JpZ2luYWxJbnN0cnVjdG9yIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGVkSW5zdHJ1Y3Rvcjogb3JpZ2luYWxJbnN0cnVjdG9yIH0sIG9uQ2xvc2UoKSk7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbnRvIG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZU5ld0xvY2F0aW9uIHBhc3NlZCBkb3duIGZyb20gdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB1cGRhdGVkSW5zdHJ1Y3RvcjogeyBpZCwgYmFzaWNJbmZvLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyB9IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTG9jYXRpb25FcnJvciwgb25TYXZlSW5zdHJ1Y3RvckNoYW5nZXMsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gTk9URTogU3dhcCBvdXQgd2hhdCBpbnN0YW5jZSBvZiB2YWxpZCBpcyBhY3RpdmUgaWYgeW91IHdhbnQgdG8gdGVzdCBzYXZpbmcgYSBuZXcgbG9jYXRpb24gd2l0aG91dCB3b3JyeWluZyBhYm91dCB2YWxpZGF0aW9uXG4gICAgLy8gY29uc3QgdmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgbmVzdGVkRWRpdEZpZWxkVmFsaWRhdGlvbih0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLnVwZGF0ZWRJbnN0cnVjdG9yLCB0aGlzLm9uU2V0VmFsaWRhdGlvbiwgKHZhbGlkYXRpb24pID0+IGNvbnNvbGUud2FybigndmFsaWRhdGlvbicsIHZhbGlkYXRpb24pKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgICAgY29uc29sZS53YXJuKCdub3QgdmFsaWQnKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdEJvZHkgPSB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zIH07XG4gICAgb25TYXZlSW5zdHJ1Y3RvckNoYW5nZXMocG9zdEJvZHkpO1xuICAgIGNvbnNvbGUud2Fybignc3R1YmJlZCBvdXQgc2F2ZSBmdW5jdGlvbicpO1xuICAgIG9uQ2xvc2UoKTtcbiAgfVxuXG4gIGluaXRpYWxJbnN0cnVjdG9yTW91bnQgPSAoKSA9PiB0aGlzLnN0YXRlLm9yaWdpbmFsSW5zdHJ1Y3Rvci5pZCAhPT0gdGhpcy5wcm9wcy5pbnN0cnVjdG9yLmlkO1xuXG4gIC8vIFdlIHB1bGwgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBmaWVsZCB0eXBlIHRoZW4gbWVyZ2UgdGhhdCB1cGRhdGVkIGtleS92YWx1ZSBwYWlyIHdpdGggdGhlIGxhc3QgdmVyc2lvbiBvZiBjb21wb25lbnQgc3RhdGVcbiAgaGFuZGxlRGV0YWlsc0NoYW5nZSA9IChldmVudCwgbmFtZSwgc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgdXBkYXRlZEluc3RydWN0b3I6IHByZXZpb3VzSW5zdHJ1Y3RvclN0YXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogZXZlbnQ7XG4gICAgY29uc3QgdXBkYXRlZEluc3RydWN0b3IgPSB1cGRhdGUocHJldmlvdXNJbnN0cnVjdG9yU3RhdGUsIHtcbiAgICAgIFtzZWN0aW9uXTogeyAkbWVyZ2U6IHsgW25hbWVdOiB2YWx1ZSB9IH0sXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0ZWRJbnN0cnVjdG9yIH0pO1xuICB9XG5cbiAgcmVuZGVyTW9kYWxIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbnN0cnVjdG9yOiB7IGFjY291bnRJbmZvOiB7IGxhc3ROYW1lOiBpbml0aWFsTGFzdE5hbWUsIGZpcnN0TmFtZTogaW5pdGlhbEZJcnN0TmFtZSwgZW1haWw6IGluaXRpYWxFbWFpbCB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1cGRhdGVkSW5zdHJ1Y3RvcjogeyBhY2NvdW50SW5mbzogeyBsYXN0TmFtZTogdXBkYXRlZExhc3ROYW1lLCBmaXJzdE5hbWU6IHVwZGF0ZWRGaXJzdE5hbWUsIGVtYWlsOiB1cGRhdGVkRW1haWwgfSB9IH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBsYXN0TmFtZTtcbiAgICBsZXQgZmlyc3ROYW1lO1xuICAgIGxldCBlbWFpbDtcbiAgICBpZiAodGhpcy5pbml0aWFsSW5zdHJ1Y3Rvck1vdW50KCkpIHtcbiAgICAgIGxhc3ROYW1lID0gaW5pdGlhbExhc3ROYW1lO1xuICAgICAgZmlyc3ROYW1lID0gaW5pdGlhbEZJcnN0TmFtZTtcbiAgICAgIGVtYWlsID0gaW5pdGlhbEVtYWlsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0TmFtZSA9IHVwZGF0ZWRMYXN0TmFtZTtcbiAgICAgIGZpcnN0TmFtZSA9IHVwZGF0ZWRGaXJzdE5hbWU7XG4gICAgICBlbWFpbCA9IHVwZGF0ZWRFbWFpbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImgzXCI+e2xhc3ROYW1lfSwge2ZpcnN0TmFtZX08L2g0PlxuICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+e2VtYWlsfTwvYT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4sIGluc3RydWN0b3I6IHsgYWNjb3VudEluZm8sIGNvbnRhY3RJbmZvLCBsb2NhdGlvbnMgfSwgb25PcGVuRGVsZXRlTW9kYWwsIGRlbGV0ZU1vZGFsT3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRyb3Bkb3duSXNPcGVuLCBkcm9wZG93bkluZGV4LCBhY3RpdmVMb2NhdGlvbiwgZGVsZXRlTG9jYXRpb25Nb2RhbE9wZW4sIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZSwgbmV3TG9jYXRpb25Nb2RhbE9wZW4sIGVkaXRMb2NhdGlvbk1vZGFsT3BlbixcbiAgICAgIHVwZGF0ZWRJbnN0cnVjdG9yOiB7XG4gICAgICAgIGFjY291bnRJbmZvOiB1cGRhdGVkQWNjb3VudEluZm8sIGNvbnRhY3RJbmZvOiB1cGRhdGVkQ29udGFjdEluZm8sIGxvY2F0aW9uczogdXBkYXRlZExvY2F0aW9ucyxcbiAgICAgIH0sXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DYW5jZWxDaGFuZ2VzfSBuZXN0ZWRNb2RhbHM9e2RlbGV0ZU1vZGFsT3BlbiB8fCBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbiB8fCBlZGl0TG9jYXRpb25Nb2RhbE9wZW4gfHwgbmV3TG9jYXRpb25Nb2RhbE9wZW59PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfdXNlcl9lZGl0XCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWN1c3RvbS1sYXJnZSBtb2RhbC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmQtbWFpbiBjYXJkIGdyZXkgbGlnaHRlbi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVyLWJveCBjYXJkLXBhbmVsIGNhcmQtcGFuZWwtdGl0bGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzE4MzdhJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jaXJjbGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA4NWNlJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pbWctb3duZXIwMS5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRleHRcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1vZGFsSGVhZGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tb3duZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPk93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuaW5pdGlhbEluc3RydWN0b3JNb3VudCgpID8gYWNjb3VudEluZm8gOiB1cGRhdGVkQWNjb3VudEluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5pbml0aWFsSW5zdHJ1Y3Rvck1vdW50KCkgPyBjb250YWN0SW5mbyA6IHVwZGF0ZWRDb250YWN0SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuaW5pdGlhbEluc3RydWN0b3JNb3VudCgpID8gbG9jYXRpb25zIDogdXBkYXRlZExvY2F0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bklzT3Blbj17ZHJvcGRvd25Jc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JbmRleD17ZHJvcGRvd25JbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVMb2NhdGlvbj17YWN0aXZlTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTG9jYXRpb25Nb2RhbE9wZW49e2RlbGV0ZUxvY2F0aW9uTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZT17cGVuZGluZ0xvY2F0aW9uRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0xvY2F0aW9uTW9kYWxPcGVuPXtuZXdMb2NhdGlvbk1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0TG9jYXRpb25Nb2RhbE9wZW49e2VkaXRMb2NhdGlvbk1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldERyb3Bkb3duPXt0aGlzLm9uU2V0RHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZURyb3Bkb3duPXt0aGlzLm9uQ2xvc2VEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5OZXdMb2NhdGlvbk1vZGFsPXt0aGlzLm9uT3Blbk5ld0xvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuRWRpdExvY2F0aW9uTW9kYWw9e3RoaXMub25PcGVuRWRpdExvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZU5ld0xvY2F0aW9uTW9kYWw9e3RoaXMub25DbG9zZU5ld0xvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZUVkaXRMb2NhdGlvbk1vZGFsPXt0aGlzLm9uQ2xvc2VFZGl0TG9jYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5EZWxldGVMb2NhdGlvbk1vZGFsPXt0aGlzLm9uT3BlbkRlbGV0ZUxvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZURlbGV0ZUxvY2F0aW9uTW9kYWw9e3RoaXMub25DbG9zZURlbGV0ZUxvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkRlbGV0ZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNhbmNlbENoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBncmV5LXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuSW5zdHJ1Y3RvckRldGFpbHNNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRlbGV0ZU1vZGFsT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25PcGVuRGVsZXRlTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGluc3RydWN0b3I6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RydWN0b3JEZXRhaWxzTW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Instructor/ListPage/components/InstructorDetailsModal/index.js */"));
  }

}

InstructorDetailsModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  deleteModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onOpenDeleteModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  instructor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SharedModalComponents/AccountInfo */ "./components/Instructor/ListPage/components/SharedModalComponents/AccountInfo/index.js");
/* harmony import */ var _SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SharedModalComponents/ContactInfo */ "./components/Instructor/ListPage/components/SharedModalComponents/ContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SharedModalComponents/Locations */ "./components/Instructor/ListPage/components/SharedModalComponents/Locations/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");
/* harmony import */ var _utils_initialState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/initialState */ "./components/Instructor/ListPage/components/NewInstructorModal/utils/initialState.js");



/* eslint-disable no-unused-vars */











const idGenerator = () => Math.floor(Math.random() * 100 + 1);

class NewInstructorModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenDeleteLocationModal", pendingLocationDelete => this.setState({
      deleteLocationModalOpen: true,
      pendingLocationDelete
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDeleteLocationModal", () => this.setState({
      deleteLocationModalOpen: false,
      pendingLocationDelete: {}
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenNewLocationModal", () => this.setState({
      newLocationModalOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseNewLocationModal", () => this.setState({
      newLocationModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenEditLocationModal", activeLocation => this.setState({
      editLocationModalOpen: true,
      activeLocation
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseEditLocationModal", () => this.setState({
      editLocationModalOpen: false,
      dropdownIsOpen: false,
      activeLocation: {}
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onResetInstructor", () => this.setState(_utils_initialState__WEBPACK_IMPORTED_MODULE_11__["default"]));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetInstructor();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        accountInfo,
        contactInfo,
        locations
      } = this.state;
      const {
        onAddNewInstructor,
        onClose
      } = this.props; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
      // const valid = true;

      const valid = await Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_10__["nestedCreateFieldValidation"])(this.state, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveLocationError();
        console.warn('not valid');
      }

      const id = idGenerator();
      const postBody = {
        id,
        accountInfo,
        contactInfo,
        locations
      };
      onAddNewInstructor(postBody);
      console.warn('stubbed out save function');
      onClose();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name, section) => {
      const value = event.target ? event.target.value : event;
      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(this.state, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState(updatedState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderModalHeader", () => {
      const {
        accountInfo: {
          lastName,
          firstName,
          email
        }
      } = this.state;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
        className: "h3"
      }, lastName, ", ", firstName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: `mailto:${email}`
      }, email));
    });

    this.state = {
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
  }

  render() {
    const {
      open
    } = this.props;
    const {
      dropdownIsOpen,
      dropdownIndex,
      activeLocation,
      deleteLocationModalOpen,
      pendingLocationDelete,
      newLocationModalOpen,
      editLocationModalOpen,
      accountInfo,
      contactInfo,
      locations
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "overlay"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onOuterClick: this.onCloseModal,
      nestedModals: deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "modal_user_edit",
      className: "jsx-2979935167" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-modal card-main card grey lighten-3"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      },
      className: "jsx-2979935167" + " " + "owner-box card-panel card-panel-title"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-panel-row row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "col s9"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "user-block"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        backgroundColor: '#0085ce',
        color: '#fff'
      },
      className: "jsx-2979935167" + " " + "user-circle"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "images/img-owner01.jpg",
      alt: "",
      className: "jsx-2979935167"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        color: '#fff'
      },
      className: "jsx-2979935167" + " " + "user-text"
    }, this.renderModalHeader()))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-2979935167" + " " + "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-2979935167" + " " + "block-icon"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "jsx-2979935167" + " " + "icon-owner"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-2979935167" + " " + "text-icon"
    }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-body"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "col s12 l6"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      state: accountInfo,
      handleDetailsChange: this.handleDetailsChange
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: contactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "col s12 l6"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-2979935167" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2979935167" + " " + "btn"
    }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2979935167"
    }, ".overlay.jsx-2979935167{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-2979935167{margin:0;border-radius:6px;}.modal.jsx-2979935167{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2979935167{opacity:1;visibility:visible;}.modal-footer.jsx-2979935167{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0luc3RydWN0b3IvTGlzdFBhZ2UvY29tcG9uZW50cy9OZXdJbnN0cnVjdG9yTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOE1XLEFBR2dDLEFBU04sQUFJSyxBQVNKLEFBSWEsU0FoQkwsQ0FhQyxJQVRJLENBYmEsUUEwQnRDLElBaEJBLEVBYUEsUUFUb0IsV0FiWixNQUNFLENBYUEsT0FaQyxDQWFDLFFBWkgsRUFhRSxLQVpHLElBYTRHLFFBWjFILHFHQWFBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0luc3RydWN0b3IvTGlzdFBhZ2UvY29tcG9uZW50cy9OZXdJbnN0cnVjdG9yTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ2ltbXV0YWJpbGl0eS1oZWxwZXInO1xuXG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uLy4uLy4uLy4uL1BvcnRhbCc7XG5pbXBvcnQgQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIGZyb20gJy4uLy4uLy4uLy4uL0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcic7XG5cbmltcG9ydCBBY2NvdW50SW5mbyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvQWNjb3VudEluZm8nO1xuaW1wb3J0IENvbnRhY3RJbmZvIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Db250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25zIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbnMnO1xuXG5pbXBvcnQgeyBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL3V0aWxzL2luaXRpYWxTdGF0ZSc7XG5cbmNvbnN0IGlkR2VuZXJhdG9yID0gKCkgPT4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxKTtcblxuY2xhc3MgTmV3SW5zdHJ1Y3Rvck1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIG5ld0xvY2F0aW9uTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIGVkaXRMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsXG4gICAgICBwZW5kaW5nTG9jYXRpb25EZWxldGU6IHt9LFxuICAgICAgYWN0aXZlTG9jYXRpb246IHt9LFxuICAgICAgZHJvcGRvd25Jc09wZW46IGZhbHNlLFxuICAgICAgZHJvcGRvd25JbmRleDogbnVsbCxcbiAgICAgIGFjY291bnRJbmZvOiB7XG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBnZW5kZXI6IHt9LFxuICAgICAgfSxcbiAgICAgIGNvbnRhY3RJbmZvOiB7XG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIHppcDogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgYWNjb3VudEluZm86IHtcbiAgICAgICAgICBmaXJzdE5hbWU6IHRydWUsXG4gICAgICAgICAgbGFzdE5hbWU6IHRydWUsXG4gICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgZ2VuZGVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgb25TZXREcm9wZG93biA9IChkcm9wZG93bkluZGV4KSA9PiB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25JbmRleCwgZHJvcGRvd25Jc09wZW46IHRydWUgfSk7XG4gIG9uQ2xvc2VEcm9wZG93biA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bklzT3BlbjogZmFsc2UgfSk7XG5cbiAgb25PcGVuRGVsZXRlTG9jYXRpb25Nb2RhbCA9IChwZW5kaW5nTG9jYXRpb25EZWxldGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogdHJ1ZSwgcGVuZGluZ0xvY2F0aW9uRGVsZXRlIH0pO1xuICBvbkNsb3NlRGVsZXRlTG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZToge30gfSk7XG5cbiAgb25PcGVuTmV3TG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBuZXdMb2NhdGlvbk1vZGFsT3BlbjogdHJ1ZSB9KTtcbiAgb25DbG9zZU5ld0xvY2F0aW9uTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbmV3TG9jYXRpb25Nb2RhbE9wZW46IGZhbHNlIH0pO1xuXG4gIG9uT3BlbkVkaXRMb2NhdGlvbk1vZGFsID0gKGFjdGl2ZUxvY2F0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgZWRpdExvY2F0aW9uTW9kYWxPcGVuOiB0cnVlLCBhY3RpdmVMb2NhdGlvbiB9KTtcbiAgb25DbG9zZUVkaXRMb2NhdGlvbk1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVkaXRMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsIGRyb3Bkb3duSXNPcGVuOiBmYWxzZSwgYWN0aXZlTG9jYXRpb246IHt9IH0pO1xuXG4gIG9uUmVzZXRJbnN0cnVjdG9yID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldEluc3RydWN0b3IoKTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIGludG8gbmVzdGVkQ3JlYXRlRmllbGRWYWxpZGF0aW9uLCBpdCB0YWtlcyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uIGNoZWNrIGFuZCBhIGNhbGxiYWNrIGZ1bmN0aW9uXG4gIC8vIFRoZSB1cGRhdGVkIGNvbXBvbmVudCB2YWxpZGF0aW9uIHN0YXRlIGlzIHNldCBhbmQgdGhlbiB0aGUgY2FsbGJhY2sgaXMgZGlzcGF0Y2hlZCAtIGluIHRoaXMgY2FzZSwgdGhlIGNhbGxiYWNrIGhhbmRsZXMgdGhlIHRvYXN0IHdhcm5pbmcgYXQgdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblNldFZhbGlkYXRpb24gPSAodmFsaWRhdGlvbiwgY2IpID0+IHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uIH0sIGNiKTtcblxuICAvLyBJZiBhbGwgdGhlIGZpZWxkcyBhcmUgdmFsaWQsIHdlIGNvbnN0cnVjdCBhIHBvc3QgYm9keSBhbmQgY2FsbCBvblNhdmVOZXdMb2NhdGlvbiBwYXNzZWQgZG93biBmcm9tIHRoZSBjb250YWluZXIgbGV2ZWxcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWNjb3VudEluZm8sIGNvbnRhY3RJbmZvLCBsb2NhdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBvbkFkZE5ld0luc3RydWN0b3IsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gTk9URTogU3dhcCBvdXQgd2hhdCBpbnN0YW5jZSBvZiB2YWxpZCBpcyBhY3RpdmUgaWYgeW91IHdhbnQgdG8gdGVzdCBzYXZpbmcgYSBuZXcgbG9jYXRpb24gd2l0aG91dCB3b3JyeWluZyBhYm91dCB2YWxpZGF0aW9uXG4gICAgLy8gY29uc3QgdmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgbmVzdGVkQ3JlYXRlRmllbGRWYWxpZGF0aW9uKHRoaXMuc3RhdGUsIHRoaXMub25TZXRWYWxpZGF0aW9uLCAodmFsaWRhdGlvbikgPT4gY29uc29sZS53YXJuKCd2YWxpZGF0aW9uJywgdmFsaWRhdGlvbikpO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIC8vIHJldHVybiBvblNhdmVMb2NhdGlvbkVycm9yKCk7XG4gICAgICBjb25zb2xlLndhcm4oJ25vdCB2YWxpZCcpO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IGlkR2VuZXJhdG9yKCk7XG4gICAgY29uc3QgcG9zdEJvZHkgPSB7IGlkLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyB9O1xuICAgIG9uQWRkTmV3SW5zdHJ1Y3Rvcihwb3N0Qm9keSk7XG4gICAgY29uc29sZS53YXJuKCdzdHViYmVkIG91dCBzYXZlIGZ1bmN0aW9uJyk7XG4gICAgb25DbG9zZSgpO1xuICB9XG5cbiAgLy8gV2UgcHVsbCB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGZpZWxkIHR5cGUgdGhlbiBtZXJnZSB0aGF0IHVwZGF0ZWQga2V5L3ZhbHVlIHBhaXIgd2l0aCB0aGUgbGFzdCB2ZXJzaW9uIG9mIGNvbXBvbmVudCBzdGF0ZVxuICBoYW5kbGVEZXRhaWxzQ2hhbmdlID0gKGV2ZW50LCBuYW1lLCBzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiBldmVudDtcbiAgICBjb25zdCB1cGRhdGVkU3RhdGUgPSB1cGRhdGUodGhpcy5zdGF0ZSwge1xuICAgICAgW3NlY3Rpb25dOiB7ICRtZXJnZTogeyBbbmFtZV06IHZhbHVlIH0gfSxcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZWRTdGF0ZSk7XG4gIH1cblxuICByZW5kZXJNb2RhbEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFjY291bnRJbmZvOiB7IGxhc3ROYW1lLCBmaXJzdE5hbWUsIGVtYWlsIH0gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImgzXCI+e2xhc3ROYW1lfSwge2ZpcnN0TmFtZX08L2g0PlxuICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+e2VtYWlsfTwvYT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkcm9wZG93bklzT3BlbiwgZHJvcGRvd25JbmRleCwgYWN0aXZlTG9jYXRpb24sIGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuLCBwZW5kaW5nTG9jYXRpb25EZWxldGUsXG4gICAgICBuZXdMb2NhdGlvbk1vZGFsT3BlbiwgZWRpdExvY2F0aW9uTW9kYWxPcGVuLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9IG5lc3RlZE1vZGFscz17ZGVsZXRlTG9jYXRpb25Nb2RhbE9wZW4gfHwgZWRpdExvY2F0aW9uTW9kYWxPcGVuIHx8IG5ld0xvY2F0aW9uTW9kYWxPcGVufT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3VzZXJfZWRpdFwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1jdXN0b20tbGFyZ2UgbW9kYWwtZ3JheVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBncmV5IGxpZ2h0ZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lci1ib3ggY2FyZC1wYW5lbCBjYXJkLXBhbmVsLXRpdGxlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMxODM3YScsIGNvbG9yOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2lyY2xlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwODVjZScsIGNvbG9yOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaW1nLW93bmVyMDEuanBnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci10ZXh0XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNb2RhbEhlYWRlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLW93bmVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWljb25cIj5Pd25lcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGw2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXthY2NvdW50SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtjb250YWN0SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBsNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2xvY2F0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Jc09wZW49e2Ryb3Bkb3duSXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSW5kZXg9e2Ryb3Bkb3duSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTG9jYXRpb249e2FjdGl2ZUxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuPXtkZWxldGVMb2NhdGlvbk1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nTG9jYXRpb25EZWxldGU9e3BlbmRpbmdMb2NhdGlvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdMb2NhdGlvbk1vZGFsT3Blbj17bmV3TG9jYXRpb25Nb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdExvY2F0aW9uTW9kYWxPcGVuPXtlZGl0TG9jYXRpb25Nb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXREcm9wZG93bj17dGhpcy5vblNldERyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VEcm9wZG93bj17dGhpcy5vbkNsb3NlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTmV3TG9jYXRpb25Nb2RhbD17dGhpcy5vbk9wZW5OZXdMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkVkaXRMb2NhdGlvbk1vZGFsPXt0aGlzLm9uT3BlbkVkaXRMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VOZXdMb2NhdGlvbk1vZGFsPXt0aGlzLm9uQ2xvc2VOZXdMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VFZGl0TG9jYXRpb25Nb2RhbD17dGhpcy5vbkNsb3NlRWRpdExvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuRGVsZXRlTG9jYXRpb25Nb2RhbD17dGhpcy5vbk9wZW5EZWxldGVMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VEZWxldGVMb2NhdGlvbk1vZGFsPXt0aGlzLm9uQ2xvc2VEZWxldGVMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGdyZXktdGV4dCB0ZXh0LWRhcmtlbi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5OZXdJbnN0cnVjdG9yTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3SW5zdHJ1Y3Rvck1vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Instructor/ListPage/components/NewInstructorModal/index.js */"));
  }

}

NewInstructorModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
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






const AccountInfo = ({
  state: {
    firstName,
    lastName,
    email,
    gender
  },
  handleDetailsChange
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  onChange: event => handleDetailsChange(event, 'firstName', 'accountInfo')
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
  onChange: event => handleDetailsChange(event, 'lastName', 'accountInfo')
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
  onChange: event => handleDetailsChange(event, 'email', 'accountInfo')
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
  onChange: event => handleDetailsChange(event, 'gender', 'accountInfo'),
  options: _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
  label: "Gender*",
  stateKey: "gender",
  dropdownKey: "gender"
})))))));

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






const ContactInfo = ({
  state: {
    phone,
    streetAddress,
    city,
    state,
    zip
  },
  handleDetailsChange
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  onChange: event => handleDetailsChange(event, 'phone', 'contactInfo')
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
  onChange: event => handleDetailsChange(event, 'streetAddress', 'contactInfo')
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
  onChange: event => handleDetailsChange(event, 'city', 'contactInfo')
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
  onChange: event => handleDetailsChange(event, 'state', 'contactInfo'),
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
  onChange: event => handleDetailsChange(event, 'zip', 'contactInfo')
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: zip.length ? 'label active' : 'label',
  htmlFor: "contact_zip_edit"
}, "Zip (optional)")))))));

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



const LocationRow = ({
  location: {
    locationContactInfo: {
      locationName,
      locationNickname
    }
  },
  index,
  dropdownIndex,
  dropdownIsOpen,
  handleDropdownClick,
  onOpenEditLocationModal,
  onOpenDeleteModal
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  onClick: event => handleDropdownClick(event, index),
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../Modal */ "./components/Modal/index.js");
/* harmony import */ var _Location_components_NewLocationModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../Location/components/NewLocationModal */ "./components/Location/components/NewLocationModal/index.js");
/* harmony import */ var _Location_components_LocationDetailsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Location/components/LocationDetailsModal */ "./components/Location/components/LocationDetailsModal/index.js");
/* harmony import */ var _components_LocationRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/LocationRow */ "./components/Instructor/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");
/* harmony import */ var _Location_utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../Location/utils/sampleLocationList */ "./components/Location/utils/sampleLocationList.js");


/* eslint-disable array-callback-return */

/* eslint-disable react/no-array-index-key */










const idGenerator = () => Math.floor(Math.random() * 100 + 1);

const validationFieldMap = {
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

class Locations extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetLocationValidation", locationValidation => this.setState({
      locationValidation
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSaveNewLocation", ({
      locationContactInfo,
      locationEmailSettings,
      locationBranding,
      owner
    }) => {
      this.onCloseNewLocationModal();
      const newLocation = {
        id: idGenerator(),
        owner,
        locationContactInfo,
        locationEmailSettings,
        locationBranding,
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
      const locations = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(this.state.locations, {
        $push: [newLocation]
      });
      this.setState({
        locations
      });
      Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__["saveNewSuccess"])('location');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSaveLocationChanges", ({
      id,
      locationContactInfo,
      locationEmailSettings,
      locationBranding
    }) => {
      const {
        locations: originalLocations
      } = this.state;
      const {
        onCloseDropdown
      } = this.props;
      const locationToUpdate = originalLocations.filter(location => location.id === id)[0];
      const updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(locationToUpdate, {
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
      const updatedLocationIndex = originalLocations.indexOf(locationToUpdate);
      const locations = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(originalLocations, {
        $splice: [[updatedLocationIndex, 1, updatedLocation]]
      });
      Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__["saveChangesSuccess"])();
      this.setState({
        locations
      });
      onCloseDropdown();
      return this.onCloseEditLocationModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onConfirmDeleteLocation", () => {
      const {
        pendingLocationDelete,
        onCloseDeleteLocationModal
      } = this.props;
      this.onDeleteLocation(pendingLocationDelete);
      onCloseDeleteLocationModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDeleteLocation", deletedLocation => {
      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(this.state, {
        locations: unfilteredLocations => unfilteredLocations.filter(location => location.id !== deletedLocation.id)
      });
      this.setState({
        locations: updatedState.locations
      });
      this.props.onCloseDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", (event, index) => {
      const {
        dropdownIsOpen,
        onCloseDropdown,
        onSetDropdown
      } = this.props;
      event.preventDefault();

      if (dropdownIsOpen) {
        return onCloseDropdown();
      }

      return onSetDropdown(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapUserLocations", () => this.state.locations.map((location, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LocationRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      index: index,
      location: location,
      dropdownIndex: this.props.dropdownIndex,
      dropdownIsOpen: this.props.dropdownIsOpen,
      handleDropdownClick: this.handleDropdownClick,
      onOpenEditLocationModal: () => this.props.onOpenEditLocationModal(location),
      onOpenDeleteModal: () => this.props.onOpenDeleteLocationModal(location)
    })));

    this.state = {
      locations: _Location_utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_9__["default"],
      dropdownIndex: null,
      pendingLocationDelete: {},
      locationValidation: {}
    };
  }

  render() {
    const {
      deleteLocationModalOpen,
      activeLocation,
      newLocationModalOpen,
      editLocationModalOpen,
      onOpenNewLocationModal,
      onCloseNewLocationModal,
      onCloseEditLocationModal,
      onCloseDeleteLocationModal
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      open: deleteLocationModalOpen,
      onConfirm: this.onConfirmDeleteLocation,
      onClose: onCloseDeleteLocationModal,
      header: "Are You Sure?",
      body: "Deleting this location will be permanent"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Location_components_NewLocationModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      fromInstructorPage: true,
      open: newLocationModalOpen,
      onClose: onCloseNewLocationModal,
      onSaveNewLocation: this.onSaveNewLocation,
      onSaveLocationError: () => Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__["saveNewError"])(this.state.locationValidation, validationFieldMap),
      onSetLocationValidation: this.onSetLocationValidation
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Location_components_LocationDetailsModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      location: activeLocation,
      open: editLocationModalOpen,
      onClose: onCloseEditLocationModal,
      onSaveLocationError: () => Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__["saveNewError"])(this.state.locationValidation, validationFieldMap),
      onSetLocationValidation: this.onSetLocationValidation,
      onSaveLocationChanges: this.onSaveLocationChanges
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-block"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Location(s)"), this.mapUserLocations(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "add-box"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "add-box-holder"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: onOpenNewLocationModal,
      className: "btn-floating waves-effect waves-light green lighten-1"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "material-icons"
    }, "add"))))));
  }

}

Locations.propTypes = {
  activeLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  newLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  editLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  pendingLocationDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  deleteLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onOpenNewLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseNewLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onOpenEditLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseEditLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onOpenDeleteLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseDeleteLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_InstructorCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InstructorCard */ "./components/Instructor/ListPage/components/InstructorCard/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Instructor/ListPage/components/FilterSection/index.js");
/* harmony import */ var _components_NewInstructorModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NewInstructorModal */ "./components/Instructor/ListPage/components/NewInstructorModal/index.js");
/* harmony import */ var _utils_sampleInstructorList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/sampleInstructorList */ "./components/Instructor/utils/sampleInstructorList.js");
/* harmony import */ var _utils_sortFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/sortFunctions */ "./components/utils/sortFunctions.js");

 // import PropTypes from 'prop-types';





 // import { saveNewSuccess as savePracticeTestSuccess, saveChangesSuccess, saveNewError as savePracticeTestError } from '../../utils/fieldValidation';



class InstructorListPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIsOpen: true,
      dropdownIndex
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false,
      dropdownIndex: null
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenInstructorModal", () => this.setState({
      instructorModalOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseInstructorModal", () => this.setState({
      instructorModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAddNewInstructor", newInstructor => this.setState(({
      instructors
    }) => ({
      instructors: [...instructors, newInstructor]
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDeleteInstructor", deletedInstructor => {
      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(this.state, {
        instructors: unfilteredInstructors => unfilteredInstructors.filter(instructor => instructor.id !== deletedInstructor.id)
      });
      this.setState({
        instructors: updatedState.instructors
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloneInstructor", instructor => {
      const cloneIndex = this.state.instructors.indexOf(instructor);
      const instructors = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(this.state.instructors, {
        $splice: [[cloneIndex, 0, instructor]]
      });
      this.setState({
        instructors
      }, this.onCloseDropdown);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSaveInstructorChanges", updatedInstructor => {
      const {
        instructors: originalInstructors
      } = this.state;
      const instructorToUpdate = originalInstructors.filter(instructor => instructor.id === updatedInstructor.id)[0];
      const updatedInstructorIndex = originalInstructors.indexOf(instructorToUpdate);
      const instructors = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(originalInstructors, {
        $splice: [[updatedInstructorIndex, 1, updatedInstructor]]
      }); // saveChangesSuccess();

      this.setState({
        instructors
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredState", filterName => this.setState({
      instructorsAreFiltered: true,
      filterName
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredState", () => this.setState({
      instructorsAreFiltered: false,
      filterName: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredLocationState", filterLocation => this.setState({
      instructorsAreFiltered: true,
      filterLocation
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredLocationState", () => this.setState({
      filterLocation: ''
    }, this.checkForFilteredState));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByName", () => {
      const {
        instructors,
        filterName
      } = this.state;
      return instructors.reduce((finalArr, currentInstructor) => {
        const {
          accountInfo: {
            lastName,
            firstName
          }
        } = currentInstructor;
        const instructorString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

        if (instructorString.indexOf(filterName) !== -1 && finalArr.indexOf(currentInstructor) === -1) {
          finalArr.push(currentInstructor);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByLocation", (preFilteredInstructors = []) => {
      const {
        instructors: allInstructors,
        filterLocation
      } = this.state;
      let instructors;

      if (preFilteredInstructors.length) {
        instructors = preFilteredInstructors;
      } else {
        instructors = allInstructors;
      }

      return instructors.reduce((finalArr, currentInstructor) => {
        const {
          contactInfo: {
            city
          }
        } = currentInstructor;

        if (city === filterLocation && finalArr.indexOf(currentInstructor) === -1) {
          finalArr.push(currentInstructor);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSortInstructors", instructors => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'firstNameAscending':
          return instructors.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_7__["firstNameAscending"]);

        case 'firstNameDescending':
          return instructors.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_7__["firstNameDescending"]);

        case 'lastNameAscending':
          return instructors.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_7__["lastNameAscending"]);

        case 'lastNameDescending':
          return instructors.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_7__["lastNameDescending"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getMappableInstructors", () => {
      const {
        filterName,
        filterLocation,
        instructors: allInstructors,
        sort
      } = this.state;
      let instructors;

      if (filterName.length && !filterLocation.length) {
        instructors = this.onFilterByName();
      } else if (!filterName.length && filterLocation.length) {
        instructors = this.onFilterByLocation();
      } else if (filterName.length && filterLocation.length) {
        const filteredByName = this.onFilterByName();
        instructors = this.onFilterByLocation(filteredByName);
      } else {
        instructors = allInstructors;
      }

      if (sort) {
        return this.onSortInstructors(instructors);
      }

      return instructors;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkForFilteredState", () => {
      const {
        filterName,
        filterLocation
      } = this.state;

      if (!filterName.length && !filterLocation.length) {
        this.setState({
          instructorsAreFiltered: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapInstructors", () => {
      const instructors = this.getMappableInstructors();
      return instructors.map((instructor, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InstructorCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        index: index,
        key: instructor.id,
        instructor: instructor,
        dropdownIsOpen: this.state.dropdownIsOpen,
        onSetDropdown: this.onSetDropdown,
        onCloseDropdown: this.onCloseDropdown,
        dropdownIndex: this.state.dropdownIndex,
        onDeleteInstructor: this.onDeleteInstructor,
        onCloneInstructor: this.onCloneInstructor,
        onSaveInstructorChanges: this.onSaveInstructorChanges
      }));
    });

    this.state = {
      instructorModalOpen: false,
      instructors: _utils_sampleInstructorList__WEBPACK_IMPORTED_MODULE_6__["default"],
      dropdownIndex: null,
      dropdownIsOpen: false,
      instructorsAreFiltered: false,
      filterName: '',
      filterLocation: '',
      sort: ''
    };
  }

  render() {
    const {
      instructorModalOpen
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NewInstructorModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: instructorModalOpen,
      onClose: this.onCloseInstructorModal,
      onAddNewInstructor: this.onAddNewInstructor
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main-holder grey lighten-5"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "title-row card-panel"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mobile-header"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "material-icons"
    }, "menu"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "h1 white-text"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "heading-holder"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-instructors"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "heading-block"
    }, "Instructors")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FilterSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSetSort: this.onSetSort,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredLocationState: this.onSetFilteredLocationState,
      onUnsetFilteredLocationState: this.onUnsetFilteredLocationState
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-section"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row d-flex-content"
    }, this.mapInstructors()))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: this.onOpenInstructorModal,
      className: "waves-effect waves-teal btn add-btn"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "material-icons"
    }, "add"), "New Location"));
  }

}

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
    studentsAchievingTargetScore: 11
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _SharedModalComponents_OwnerSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SharedModalComponents/OwnerSection */ "./components/Location/components/SharedModalComponents/OwnerSection/index.js");
/* harmony import */ var _SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SharedModalComponents/LocationContactInfo */ "./components/Location/components/SharedModalComponents/LocationContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SharedModalComponents/LocationEmailSettings */ "./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js");
/* harmony import */ var _SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SharedModalComponents/LocationBranding */ "./components/Location/components/SharedModalComponents/LocationBranding/index.js");
/* harmony import */ var _NewLocationModal_utils_sampleOwners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NewLocationModal/utils/sampleOwners */ "./components/Location/components/NewLocationModal/utils/sampleOwners.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");



/* eslint-disable array-callback-return */










 // TODO: Render only one instance of this modal

class LocationDetailsModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalLocation || nextProps.location.id !== this.state.originalLocation.id) {
        const {
          location: {
            owner,
            id,
            locationContactInfo,
            locationEmailSettings,
            locationBranding
          } = {}
        } = nextProps;
        const updatedLocation = {
          owner,
          id,
          locationContactInfo,
          locationEmailSettings,
          locationBranding
        };
        const {
          originalLocation: originalLocationState
        } = this.state;
        const originalLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(originalLocationState, {
          $merge: nextProps.location
        });
        this.setState({
          originalLocation,
          updatedLocation
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenUserListModal", () => this.setState({
      userListModalOpen: true,
      changeModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseUserListModal", () => this.setState({
      userListModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenChangeModal", () => this.setState({
      changeModalOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseChangeModal", () => this.setState({
      changeModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        updatedLocation
      } = this.state;
      const {
        onSaveLocationChanges,
        onSaveLocationError,
        onClose
      } = this.props; // const valid = true;

      const valid = await Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_12__["nestedEditFieldValidation"])(this.state, this.state.updatedLocation, this.onSetValidation, this.props.onSetLocationValidation);

      if (!valid) {
        return onSaveLocationError();
      }

      onSaveLocationChanges(updatedLocation);
      return onClose();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialLocationMount", () => this.state.originalLocation.id !== this.props.location.id);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name, stateKey) => {
      const {
        updatedLocation: previousLocationState
      } = this.state;
      let value;

      if (event.hex) {
        value = event.hex;
      } else if (event.target) {
        value = event.target.value;
      } else {
        value = event;
      }

      let updatedLocation;

      if (name === 'owner') {
        updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(previousLocationState, {
          owner: {
            $set: event
          }
        });
      } else {
        updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(previousLocationState, {
          [stateKey]: {
            $merge: {
              [name]: value
            }
          }
        });
      }

      this.setState({
        updatedLocation
      });
    });

    this.state = {
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
  }

  componentDidMount() {
    const {
      location: {
        owner,
        id,
        locationContactInfo,
        locationEmailSettings,
        locationBranding
      } = {}
    } = this.props;
    const updatedLocation = {
      owner,
      id,
      locationContactInfo,
      locationEmailSettings,
      locationBranding
    };
    const {
      originalLocation: originalLocationState
    } = this.state;
    const originalLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(originalLocationState, {
      $merge: updatedLocation
    });
    this.setState({
      originalLocation,
      updatedLocation
    }); // eslint-disable-line
  } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
  // This resets the component state to reflect the details of the next user the user clicks on


  render() {
    const {
      open,
      onClose,
      location
    } = this.props;
    const {
      owner,
      locationContactInfo,
      locationEmailSettings,
      locationBranding
    } = location;
    const {
      updatedLocation: {
        owner: updatedOwner,
        locationContactInfo: updatedLocationContactInfo,
        locationEmailSettings: updatedLocationEmailSettings,
        locationBranding: updatedLocationBranding
      },
      validation: {
        locationContactInfo: locationContactInfoValidation,
        locationEmailSettings: locationEmailSettingsValidation,
        locationBranding: locationBrandingValidation
      },
      userListModalOpen,
      changeModalOpen
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      className: "jsx-1456167890"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "overlay"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      nestedModals: userListModalOpen || changeModalOpen,
      onOuterClick: onClose
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "modal_location_create",
      className: "jsx-1456167890" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "card-modal card-main card grey lighten-3"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "card-panel card-panel-title green lighten-1 white-text"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "card-panel-row row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-1456167890" + " " + "h2"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-1456167890" + " " + "heading-holder"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-1456167890" + " " + "heading-block"
    }, "Edit Location")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-1456167890" + " " + "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-1456167890" + " " + "block-icon"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "jsx-1456167890" + " " + "icon-location"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-1456167890" + " " + "text-icon"
    }, "Location"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "card-body"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "col s12 l6"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_OwnerSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
      owner: this.initialLocationMount() ? owner : updatedOwner,
      userList: _NewLocationModal_utils_sampleOwners__WEBPACK_IMPORTED_MODULE_11__["default"],
      handleDetailsChange: this.handleDetailsChange,
      userListModalOpen: userListModalOpen,
      changeModalOpen: changeModalOpen,
      onOpenUserListModal: this.onOpenUserListModal,
      onCloseUserListModal: this.onCloseUserListModal,
      onOpenChangeModal: this.onOpenChangeModal,
      onCloseChangeModal: this.onCloseChangeModal
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: this.initialLocationMount() ? locationContactInfo : updatedLocationContactInfo,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationContactInfoValidation,
      noColumn: true
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_9__["default"], {
      state: this.initialLocationMount() ? locationEmailSettings : updatedLocationEmailSettings,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationEmailSettingsValidation,
      noColumn: true
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_10__["default"], {
      state: this.initialLocationMount() ? locationBranding : updatedLocationBranding,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationBrandingValidation
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1456167890" + " " + "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-1456167890" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      style: {
        color: 'white'
      },
      onClick: this.onSubmit,
      className: "jsx-1456167890" + " " + "btn"
    }, "Save")))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1456167890"
    }, "h4.jsx-1456167890{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-1456167890{font-size:16px;color:#343434;}p.passage.jsx-1456167890{font-size:14px;}a.jsx-1456167890{color:#343434;}.overlay.jsx-1456167890{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.modal.jsx-1456167890{display:block;background-color:transparent;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-footer.jsx-1456167890{background-color:white;}.modal-custom.jsx-1456167890{opacity:1;visibility:visible;}.modal-full-size.jsx-1456167890{z-index:999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25EZXRhaWxzTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1JXLEFBR21DLEFBTUgsQUFJQSxBQUdELEFBR0MsQUFTRCxBQVNTLEFBR2IsQUFJRSxVQUhPLEVBSVIsRUE1QmIsQUFZK0IsQ0FuQmYsQUFJaEIsQUFNc0MsR0FoQm5CLEtBa0NuQixBQVFTLE1BbkNULEFBK0JBLENBS1EsS0ExQ3FCLENBMkNuQixPQWxCVSxDQW1CVCxJQTVCSCxLQTZCUixDQTVCVSxPQVNBLENBekJLLEFBaUJKLE9BU0MsRUFSSCxJQWpCVCxHQWtCYyxDQVFILFNBQytHLEVBUjFILDJHQVNBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25EZXRhaWxzTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuXG5pbXBvcnQgT3duZXJTZWN0aW9uIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Pd25lclNlY3Rpb24nO1xuaW1wb3J0IExvY2F0aW9uQ29udGFjdEluZm8gZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9uQ29udGFjdEluZm8nO1xuaW1wb3J0IExvY2F0aW9uRW1haWxTZXR0aW5ncyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvTG9jYXRpb25FbWFpbFNldHRpbmdzJztcbmltcG9ydCBMb2NhdGlvbkJyYW5kaW5nIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbkJyYW5kaW5nJztcblxuaW1wb3J0IHNhbXBsZU93bmVycyBmcm9tICcuLi9OZXdMb2NhdGlvbk1vZGFsL3V0aWxzL3NhbXBsZU93bmVycyc7XG5pbXBvcnQgeyBuZXN0ZWRFZGl0RmllbGRWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmllbGRWYWxpZGF0aW9uJztcblxuLy8gVE9ETzogUmVuZGVyIG9ubHkgb25lIGluc3RhbmNlIG9mIHRoaXMgbW9kYWxcbmNsYXNzIExvY2F0aW9uRGV0YWlsc01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG93bmVyOiBudWxsLFxuICAgICAgdXNlckxpc3RNb2RhbE9wZW46IGZhbHNlLFxuICAgICAgY2hhbmdlTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIG9yaWdpbmFsTG9jYXRpb246IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBsb2NhdGlvbkNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgbG9jYXRpb25OYW1lOiAnJyxcbiAgICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiAnJyxcbiAgICAgICAgICBsb2NhdGlvbkVtYWlsOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblBob25lTnVtYmVyOiAnJyxcbiAgICAgICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblN0cmVldEFkZHJlc3M6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uQ2l0eTogJycsXG4gICAgICAgICAgbG9jYXRpb25TdGF0ZTogJycsXG4gICAgICAgICAgbG9jYXRpb25aaXA6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IHtcbiAgICAgICAgICBhdXRvbWF0ZWRFbWFpbE9yaWdpbjogJycsXG4gICAgICAgICAgYXV0b21hdGVkRW1haWxTYWx1dGF0aW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25CcmFuZGluZzoge1xuICAgICAgICAgIGxvY2F0aW9uVXJsOiAnJyxcbiAgICAgICAgICBoZWFkZXJDb2xvcjE6ICcnLFxuICAgICAgICAgIGhlYWRlckNvbG9yMjogJycsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRDb2xvcjogJycsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRBbHBoYTogJycsXG4gICAgICAgICAgaG9yaXpvbnRhbExvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICAgIHNxdWFyZUxvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJycsXG4gICAgICAgICAgYmFja2dyb3VuZEJsdXI6ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRPdmVybGF5QWxwaGE6ICcnLFxuICAgICAgICAgIHN0dWRlbnRXZWxjb21lVmlkZW86ICcnLFxuICAgICAgICAgIGluc3RydWN0b3JXZWxjb21lVmlkZW86ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZWRMb2NhdGlvbjoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGxvY2F0aW9uQ29udGFjdEluZm86IHtcbiAgICAgICAgICBsb2NhdGlvbk5hbWU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uTmlja25hbWU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uRW1haWw6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgIHdlYnNpdGU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uU3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgICAgbG9jYXRpb25DaXR5OiAnJyxcbiAgICAgICAgICBsb2NhdGlvblN0YXRlOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblppcDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uRW1haWxTZXR0aW5nczoge1xuICAgICAgICAgIGF1dG9tYXRlZEVtYWlsT3JpZ2luOiAnJyxcbiAgICAgICAgICBhdXRvbWF0ZWRFbWFpbFNhbHV0YXRpb246ICcnLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgICAgbG9jYXRpb25Vcmw6ICcnLFxuICAgICAgICAgIGhlYWRlckNvbG9yMTogJycsXG4gICAgICAgICAgaGVhZGVyQ29sb3IyOiAnJyxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZEFscGhhOiAnJyxcbiAgICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgICAgc3F1YXJlTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQmx1cjogJycsXG4gICAgICAgICAgYmFja2dyb3VuZE92ZXJsYXlBbHBoYTogJycsXG4gICAgICAgICAgc3R1ZGVudFdlbGNvbWVWaWRlbzogJycsXG4gICAgICAgICAgaW5zdHJ1Y3RvcldlbGNvbWVWaWRlbzogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBsb2NhdGlvbkNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgbG9jYXRpb25OYW1lOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uTmlja25hbWU6IHRydWUsXG4gICAgICAgICAgbG9jYXRpb25FbWFpbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgICAgYXV0b21hdGVkRW1haWxPcmlnaW46IHRydWUsXG4gICAgICAgICAgYXV0b21hdGVkRW1haWxTYWx1dGF0aW9uOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgICAgbG9jYXRpb25Vcmw6IHRydWUsXG4gICAgICAgICAgaGVhZGVyQ29sb3IxOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckNvbG9yMjogdHJ1ZSxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZENvbG9yOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQWxwaGE6IHRydWUsXG4gICAgICAgICAgaG9yaXpvbnRhbExvZ29WYXJpYXRpb246IHRydWUsXG4gICAgICAgICAgc3F1YXJlTG9nb1ZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gICAgICAgICAgYmFja2dyb3VuZEJsdXI6IHRydWUsXG4gICAgICAgICAgYmFja2dyb3VuZE92ZXJsYXlBbHBoYTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbG9jYXRpb246IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHt9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVwZGF0ZWRMb2NhdGlvbiA9IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfTtcbiAgICBjb25zdCB7IG9yaWdpbmFsTG9jYXRpb246IG9yaWdpbmFsTG9jYXRpb25TdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBvcmlnaW5hbExvY2F0aW9uID0gdXBkYXRlKG9yaWdpbmFsTG9jYXRpb25TdGF0ZSwge1xuICAgICAgJG1lcmdlOiB1cGRhdGVkTG9jYXRpb24sXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9yaWdpbmFsTG9jYXRpb24sIHVwZGF0ZWRMb2NhdGlvbiB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgLy8gVE9ETzogVGhpcyBzZWVtcyB0byBiZSB3b3JraW5nIHdlbGwgLSBjb25maXJtIHRoYXQgb25seSBvbmUgaXNudGFuY2Ugb2YgdGhpcyBlZGl0IG1vZGFsIGlzIG9wZW5pbmcgb24gdGhlIHVzZXIgZWRpdCBwYWdlXG4gIC8vIFRoaXMgcmVzZXRzIHRoZSBjb21wb25lbnQgc3RhdGUgdG8gcmVmbGVjdCB0aGUgZGV0YWlscyBvZiB0aGUgbmV4dCB1c2VyIHRoZSB1c2VyIGNsaWNrcyBvblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIGlmICgoIXRoaXMuc3RhdGUub3JpZ2luYWxMb2NhdGlvbiB8fCBuZXh0UHJvcHMubG9jYXRpb24uaWQgIT09IHRoaXMuc3RhdGUub3JpZ2luYWxMb2NhdGlvbi5pZCkpIHtcbiAgICAgIGNvbnN0IHsgbG9jYXRpb246IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHt9IH0gPSBuZXh0UHJvcHM7XG4gICAgICBjb25zdCB1cGRhdGVkTG9jYXRpb24gPSB7IG93bmVyLCBpZCwgbG9jYXRpb25Db250YWN0SW5mbywgbG9jYXRpb25FbWFpbFNldHRpbmdzLCBsb2NhdGlvbkJyYW5kaW5nIH07XG4gICAgICBjb25zdCB7IG9yaWdpbmFsTG9jYXRpb246IG9yaWdpbmFsTG9jYXRpb25TdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTG9jYXRpb24gPSB1cGRhdGUob3JpZ2luYWxMb2NhdGlvblN0YXRlLCB7XG4gICAgICAgICRtZXJnZTogbmV4dFByb3BzLmxvY2F0aW9uLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JpZ2luYWxMb2NhdGlvbiwgdXBkYXRlZExvY2F0aW9uIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVzZXJMaXN0TW9kYWwgaXMgdXNlZCB0byBhc3NpZ24gYW5kIHJlYXNzaWduIHVzZXJzIHRvIGEgbmV3IGxvY2F0aW9uXG4gIG9uT3BlblVzZXJMaXN0TW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlckxpc3RNb2RhbE9wZW46IHRydWUsIGNoYW5nZU1vZGFsT3BlbjogZmFsc2UgfSk7XG4gIG9uQ2xvc2VVc2VyTGlzdE1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJMaXN0TW9kYWxPcGVuOiBmYWxzZSB9KTtcblxuICAvLyBDaGFuZ2VNb2RhbCBwb3BzIHVwIHdoZW4gdXNlciBjbGlja3Mgb24gc2V0IG93bmVyIGFuZCBhc2tzIGZvciBjb25maXJtYXRpb24gdGhhdCB0aGV5IHdpc2ggdG8gYXNzaWduIGEgbmV3IG93bmVyIHRvIHRoZSBuZXcgbG9jYXRpb25cbiAgb25PcGVuQ2hhbmdlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2hhbmdlTW9kYWxPcGVuOiB0cnVlIH0pO1xuICBvbkNsb3NlQ2hhbmdlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2hhbmdlTW9kYWxPcGVuOiBmYWxzZSB9KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbnRvIG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZUxvY2F0aW9uQ2hhbmdlcyBwYXNzZWQgZG93biBmcm9tIHRoZSBjb250YWluZXIgbGV2ZWxcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgdXBkYXRlZExvY2F0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTG9jYXRpb25DaGFuZ2VzLCBvblNhdmVMb2NhdGlvbkVycm9yLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNvbnN0IHZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZCA9IGF3YWl0IG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZS51cGRhdGVkTG9jYXRpb24sIHRoaXMub25TZXRWYWxpZGF0aW9uLCB0aGlzLnByb3BzLm9uU2V0TG9jYXRpb25WYWxpZGF0aW9uKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgIH1cbiAgICBvblNhdmVMb2NhdGlvbkNoYW5nZXModXBkYXRlZExvY2F0aW9uKTtcbiAgICByZXR1cm4gb25DbG9zZSgpO1xuICB9XG5cbiAgaW5pdGlhbExvY2F0aW9uTW91bnQgPSAoKSA9PiB0aGlzLnN0YXRlLm9yaWdpbmFsTG9jYXRpb24uaWQgIT09IHRoaXMucHJvcHMubG9jYXRpb24uaWQ7XG5cbiAgLy8gV2UgcHVsbCB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGZpZWxkIHR5cGUgdGhlbiBtZXJnZSB0aGF0IHVwZGF0ZWQga2V5L3ZhbHVlIHBhaXIgd2l0aCB0aGUgbGFzdCB2ZXJzaW9uIG9mIGNvbXBvbmVudCBzdGF0ZVxuICBoYW5kbGVEZXRhaWxzQ2hhbmdlID0gKGV2ZW50LCBuYW1lLCBzdGF0ZUtleSkgPT4ge1xuICAgIGNvbnN0IHsgdXBkYXRlZExvY2F0aW9uOiBwcmV2aW91c0xvY2F0aW9uU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChldmVudC5oZXgpIHtcbiAgICAgIHZhbHVlID0gZXZlbnQuaGV4O1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudDtcbiAgICB9XG4gICAgbGV0IHVwZGF0ZWRMb2NhdGlvbjtcbiAgICBpZiAobmFtZSA9PT0gJ293bmVyJykge1xuICAgICAgdXBkYXRlZExvY2F0aW9uID0gdXBkYXRlKHByZXZpb3VzTG9jYXRpb25TdGF0ZSwge1xuICAgICAgICBvd25lcjoge1xuICAgICAgICAgICRzZXQ6IGV2ZW50LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZWRMb2NhdGlvbiA9IHVwZGF0ZShwcmV2aW91c0xvY2F0aW9uU3RhdGUsIHtcbiAgICAgICAgW3N0YXRlS2V5XToge1xuICAgICAgICAgICRtZXJnZTogeyBbbmFtZV06IHZhbHVlIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0ZWRMb2NhdGlvbiB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4sIG9uQ2xvc2UsIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3duZXIsIGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uRW1haWxTZXR0aW5ncywgbG9jYXRpb25CcmFuZGluZyB9ID0gbG9jYXRpb247XG4gICAgY29uc3Qge1xuICAgICAgdXBkYXRlZExvY2F0aW9uOiB7IG93bmVyOiB1cGRhdGVkT3duZXIsIGxvY2F0aW9uQ29udGFjdEluZm86IHVwZGF0ZWRMb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IHVwZGF0ZWRMb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmc6IHVwZGF0ZWRMb2NhdGlvbkJyYW5kaW5nIH0sXG4gICAgICB2YWxpZGF0aW9uOiB7IGxvY2F0aW9uQ29udGFjdEluZm86IGxvY2F0aW9uQ29udGFjdEluZm9WYWxpZGF0aW9uLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IGxvY2F0aW9uRW1haWxTZXR0aW5nc1ZhbGlkYXRpb24sIGxvY2F0aW9uQnJhbmRpbmc6IGxvY2F0aW9uQnJhbmRpbmdWYWxpZGF0aW9uIH0sXG4gICAgICB1c2VyTGlzdE1vZGFsT3BlbiwgY2hhbmdlTW9kYWxPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG5lc3RlZE1vZGFscz17dXNlckxpc3RNb2RhbE9wZW4gfHwgY2hhbmdlTW9kYWxPcGVufSBvbk91dGVyQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9sb2NhdGlvbl9jcmVhdGVcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1jdXN0b20gbW9kYWwtY3VzdG9tLWxhcmdlIG1vZGFsLWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBncmV5IGxpZ2h0ZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZSBncmVlbiBsaWdodGVuLTEgd2hpdGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ibG9ja1wiPkVkaXQgTG9jYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9jYXRpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pY29uXCI+TG9jYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3duZXJTZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gb3duZXIgOiB1cGRhdGVkT3duZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdD17c2FtcGxlT3duZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RNb2RhbE9wZW49e3VzZXJMaXN0TW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9kYWxPcGVuPXtjaGFuZ2VNb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Vc2VyTGlzdE1vZGFsPXt0aGlzLm9uT3BlblVzZXJMaXN0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlVXNlckxpc3RNb2RhbD17dGhpcy5vbkNsb3NlVXNlckxpc3RNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkNoYW5nZU1vZGFsPXt0aGlzLm9uT3BlbkNoYW5nZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZUNoYW5nZU1vZGFsPXt0aGlzLm9uQ2xvc2VDaGFuZ2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkNvbnRhY3RJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gbG9jYXRpb25Db250YWN0SW5mbyA6IHVwZGF0ZWRMb2NhdGlvbkNvbnRhY3RJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbj17bG9jYXRpb25Db250YWN0SW5mb1ZhbGlkYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRW1haWxTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuaW5pdGlhbExvY2F0aW9uTW91bnQoKSA/IGxvY2F0aW9uRW1haWxTZXR0aW5ncyA6IHVwZGF0ZWRMb2NhdGlvbkVtYWlsU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPXtsb2NhdGlvbkVtYWlsU2V0dGluZ3NWYWxpZGF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Db2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uQnJhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gbG9jYXRpb25CcmFuZGluZyA6IHVwZGF0ZWRMb2NhdGlvbkJyYW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURldGFpbHNDaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPXtsb2NhdGlvbkJyYW5kaW5nVmFsaWRhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gb25DbGljaz17dGhpcy5vblN1Ym1pdH0+U2F2ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjI4cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMS41MnJlbSAwIC45MTJyZW0gMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0MzQzNDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwLnBhc3NhZ2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0MzQzNDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZ1bGwtc2l6ZSB7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuTG9jYXRpb25EZXRhaWxzTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblNldExvY2F0aW9uVmFsaWRhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uRGV0YWlsc01vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/LocationDetailsModal/index.js */"));
  }

}

LocationDetailsModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onSetLocationValidation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
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







const OwnerContactInfo = ({
  state: {
    firstName,
    lastName,
    email,
    gender,
    phone,
    streetAddress,
    city,
    state,
    zip
  },
  handleDetailsChange
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  onChange: event => handleDetailsChange(event, 'firstName', 'ownerContactInfo')
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
  onChange: event => handleDetailsChange(event, 'lastName', 'ownerContactInfo')
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
  onChange: event => handleDetailsChange(event, 'email', 'ownerContactInfo')
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: "label",
  htmlFor: "email"
}, "Email Address*"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "row mb-0"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "input-field col s12 l7"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
  value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(gender, _utils_genderOptions__WEBPACK_IMPORTED_MODULE_5__["default"]),
  onChange: event => handleDetailsChange(event, 'gender', 'ownerContactInfo'),
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
  onChange: event => handleDetailsChange(event, 'phone', 'ownerContactInfo')
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
  onChange: event => handleDetailsChange(event, 'streetAddress', 'ownerContactInfo')
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
  onChange: event => handleDetailsChange(event, 'city', 'ownerContactInfo')
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
  onChange: event => handleDetailsChange(event, 'state', 'ownerContactInfo'),
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
  onChange: event => handleDetailsChange(event, 'zip', 'ownerContactInfo')
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: "label",
  htmlFor: "zip"
}, "Zip (optional)"))))))));

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _components_OwnerContactInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/OwnerContactInfo */ "./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SharedModalComponents/LocationContactInfo */ "./components/Location/components/SharedModalComponents/LocationContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SharedModalComponents/LocationEmailSettings */ "./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js");
/* harmony import */ var _SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SharedModalComponents/LocationBranding */ "./components/Location/components/SharedModalComponents/LocationBranding/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");
/* harmony import */ var _utils_initialState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/initialState */ "./components/Location/utils/initialState.js");



/* eslint-disable no-unused-vars */












class NewLocationModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        owner,
        locationContactInfo,
        locationEmailSettings,
        locationBranding
      } = this.state;
      const {
        onSaveNewLocation,
        onSaveLocationError,
        onAddNewLocation,
        fromInstructorPage = false
      } = this.props; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
      // const valid = true;

      const valid = await Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_11__["nestedCreateFieldValidation"])(this.state, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveLocationError();
        console.warn('not valid');
      }

      const postBody = {
        locationContactInfo,
        locationEmailSettings,
        locationBranding,
        owner
      };

      if (fromInstructorPage) {
        onSaveNewLocation(postBody);
      } else {
        onAddNewLocation(postBody);
      }

      console.warn('stubbed out save function');
      this.onCloseModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onResetLocation", () => this.setState(_utils_initialState__WEBPACK_IMPORTED_MODULE_12__["default"]));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetLocation();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name, section) => {
      let value;

      if (event.hex) {
        value = event.hex;
      } else {
        value = event.target ? event.target.value : event;
      }

      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(this.state, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState(updatedState);
    });

    this.state = {
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
  } // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level


  render() {
    const {
      open
    } = this.props;
    const {
      ownerContactInfo,
      locationEmailSettings,
      locationContactInfo,
      locationBranding
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "overlay"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onOuterClick: this.onCloseModal
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "modal_user_create",
      className: "jsx-2979935167" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-modal card-main card grey lighten-3"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      },
      className: "jsx-2979935167" + " " + "card-panel card-panel-title"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-panel-row row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        display: 'block'
      },
      className: "jsx-2979935167" + " " + "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-2979935167" + " " + "h2"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-2979935167" + " " + "heading-holder"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-2979935167" + " " + "heading-block"
    }, "Create New Owner")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-2979935167" + " " + "block-icon"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "jsx-2979935167" + " " + "icon-owner"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-2979935167" + " " + "text-icon"
    }, "Owner"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "card-body"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_OwnerContactInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      state: ownerContactInfo,
      handleDetailsChange: this.handleDetailsChange
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: locationContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_9__["default"], {
      state: locationEmailSettings,
      handleDetailsChange: this.handleDetailsChange
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_10__["default"], {
      state: locationBranding,
      handleDetailsChange: this.handleDetailsChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2979935167" + " " + "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#!",
      onClick: this.onCloseModal,
      className: "jsx-2979935167" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2979935167" + " " + "btn"
    }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2979935167"
    }, ".overlay.jsx-2979935167{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-2979935167{margin:0;border-radius:6px;}.modal.jsx-2979935167{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2979935167{opacity:1;visibility:visible;}.modal-footer.jsx-2979935167{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTmV3TG9jYXRpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTlcsQUFHZ0MsQUFTTixBQUlLLEFBU0osQUFJYSxTQWhCTCxDQWFDLElBVEksQ0FiYSxRQTBCdEMsSUFoQkEsRUFhQSxRQVRvQixXQWJaLE1BQ0UsQ0FhQSxPQVpDLENBYUMsUUFaSCxFQWFFLEtBWkcsSUFhNEcsUUFaMUgscUdBYUEiLCJmaWxlIjoiL1ZvbHVtZXMvSEREL1NpdGVzL2NsZWFyY2hvaWNldGVzdHByZXAvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvTG9jYXRpb24vY29tcG9uZW50cy9OZXdMb2NhdGlvbk1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuXG5pbXBvcnQgT3duZXJDb250YWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvT3duZXJDb250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25Db250YWN0SW5mbyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvTG9jYXRpb25Db250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25FbWFpbFNldHRpbmdzIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbkVtYWlsU2V0dGluZ3MnO1xuaW1wb3J0IExvY2F0aW9uQnJhbmRpbmcgZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9uQnJhbmRpbmcnO1xuXG5pbXBvcnQgeyBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuLi8uLi91dGlscy9pbml0aWFsU3RhdGUnO1xuXG5jbGFzcyBOZXdMb2NhdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG93bmVyQ29udGFjdEluZm86IHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIHppcDogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgIGF1dG9tYXRlZEVtYWlsT3JpZ2luQWRkcmVzczogJycsXG4gICAgICAgIGF1dG9tYXRlZEVtYWlsU2FsdXRhdGlvbjogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25Db250YWN0SW5mbzoge1xuICAgICAgICBsb2NhdGlvbk5hbWU6ICcnLFxuICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiAnJyxcbiAgICAgICAgbG9jYXRpb25FbWFpbDogJycsXG4gICAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgICAgbG9jYXRpb25TdHJlZXRBZGRyZXNzOiAnJyxcbiAgICAgICAgbG9jYXRpb25DaXR5OiAnJyxcbiAgICAgICAgbG9jYXRpb25TdGF0ZTogJycsXG4gICAgICAgIGxvY2F0aW9uWmlwOiAnJyxcbiAgICAgIH0sXG4gICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgIGxvY2F0aW9uVXJsOiAnJyxcbiAgICAgICAgaGVhZGVyQ29sb3IxOiAnJyxcbiAgICAgICAgaGVhZGVyQ29sb3IyOiAnJyxcbiAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRDb2xvcjogJycsXG4gICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQWxwaGE6ICcnLFxuICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgIHNxdWFyZUxvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxuICAgICAgICBiYWNrZ3JvdW5kQmx1cjogJycsXG4gICAgICAgIGJhY2tncm91bmRPdmVybGF5QWxwaGE6ICcnLFxuICAgICAgICBzdHVkZW50V2VsY29tZVZpZGVvOiAnJyxcbiAgICAgICAgaW5zdHJ1Y3RvcldlbGNvbWVWaWRlbzogJycsXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBvd25lckNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgZmlyc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGxhc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgICAgYXV0b21hdGVkRW1haWxPcmlnaW5BZGRyZXNzOiB0cnVlLFxuICAgICAgICAgIGF1dG9tYXRlZEVtYWlsU2FsdXRhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25Db250YWN0SW5mbzoge1xuICAgICAgICAgIGxvY2F0aW9uTmFtZTogdHJ1ZSxcbiAgICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uRW1haWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uQnJhbmRpbmc6IHtcbiAgICAgICAgICBsb2NhdGlvblVybDogdHJ1ZSxcbiAgICAgICAgICBoZWFkZXJDb2xvcjE6IHRydWUsXG4gICAgICAgICAgaGVhZGVyQ29sb3IyOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQ29sb3I6IHRydWUsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRBbHBoYTogdHJ1ZSxcbiAgICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBzcXVhcmVMb2dvVmFyaWF0aW9uOiB0cnVlLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQmx1cjogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kT3ZlcmxheUFscGhhOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgaW50byBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZU5ld0xvY2F0aW9uIHBhc3NlZCBkb3duIGZyb20gdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBvd25lciwgbG9jYXRpb25Db250YWN0SW5mbywgbG9jYXRpb25FbWFpbFNldHRpbmdzLCBsb2NhdGlvbkJyYW5kaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTmV3TG9jYXRpb24sIG9uU2F2ZUxvY2F0aW9uRXJyb3IsIG9uQWRkTmV3TG9jYXRpb24sIGZyb21JbnN0cnVjdG9yUGFnZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIE5PVEU6IFN3YXAgb3V0IHdoYXQgaW5zdGFuY2Ugb2YgdmFsaWQgaXMgYWN0aXZlIGlmIHlvdSB3YW50IHRvIHRlc3Qgc2F2aW5nIGEgbmV3IGxvY2F0aW9uIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgdmFsaWRhdGlvblxuICAgIC8vIGNvbnN0IHZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZCA9IGF3YWl0IG5lc3RlZENyZWF0ZUZpZWxkVmFsaWRhdGlvbih0aGlzLnN0YXRlLCB0aGlzLm9uU2V0VmFsaWRhdGlvbiwgKHZhbGlkYXRpb24pID0+IGNvbnNvbGUud2FybigndmFsaWRhdGlvbicsIHZhbGlkYXRpb24pKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgICAgY29uc29sZS53YXJuKCdub3QgdmFsaWQnKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdEJvZHkgPSB7IGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uRW1haWxTZXR0aW5ncywgbG9jYXRpb25CcmFuZGluZywgb3duZXIgfTtcbiAgICBpZiAoZnJvbUluc3RydWN0b3JQYWdlKSB7XG4gICAgICBvblNhdmVOZXdMb2NhdGlvbihwb3N0Qm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQWRkTmV3TG9jYXRpb24ocG9zdEJvZHkpO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oJ3N0dWJiZWQgb3V0IHNhdmUgZnVuY3Rpb24nKTtcbiAgICB0aGlzLm9uQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgb25SZXNldExvY2F0aW9uID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldExvY2F0aW9uKCk7XG4gIH1cblxuICAvLyBXZSBwdWxsIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgZmllbGQgdHlwZSB0aGVuIG1lcmdlIHRoYXQgdXBkYXRlZCBrZXkvdmFsdWUgcGFpciB3aXRoIHRoZSBsYXN0IHZlcnNpb24gb2YgY29tcG9uZW50IHN0YXRlXG4gIGhhbmRsZURldGFpbHNDaGFuZ2UgPSAoZXZlbnQsIG5hbWUsIHNlY3Rpb24pID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGV2ZW50LmhleCkge1xuICAgICAgdmFsdWUgPSBldmVudC5oZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogZXZlbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZSh0aGlzLnN0YXRlLCB7XG4gICAgICBbc2VjdGlvbl06IHsgJG1lcmdlOiB7IFtuYW1lXTogdmFsdWUgfSB9LFxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlZFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBvd25lckNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3VzZXJfY3JlYXRlXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWN1c3RvbS1sYXJnZSBtb2RhbC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmQtbWFpbiBjYXJkIGdyZXkgbGlnaHRlbi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMzMTgzN2EnLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYmxvY2tcIj5DcmVhdGUgTmV3IE93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tb3duZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPk93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8T3duZXJDb250YWN0SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17b3duZXJDb250YWN0SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkNvbnRhY3RJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtsb2NhdGlvbkNvbnRhY3RJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVtYWlsU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2xvY2F0aW9uRW1haWxTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkJyYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtsb2NhdGlvbkJyYW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jYXJkLW1vZGFsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbk5ld0xvY2F0aW9uTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3TG9jYXRpb25Nb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/NewLocationModal/index.js */"));
  }

}

NewLocationModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
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
const sampleOwners = [{
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





const SelectedUserRow = ({
  user,
  onOpenChangeModal
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  href: `mailto:${user.email}`
}, user.email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col s2 right-align"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "block-icon"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "icon-owner"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "text-icon"
}, "Owner")))));

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

const SelectedUserRowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");


/* eslint-disable react/jsx-indent */





class LocationBranding extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetColorPicker", colorPickerField => this.setState({
      colorPickerOpen: true,
      colorPickerField
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseColorPicker", () => this.setState({
      colorPickerOpen: false,
      colorPickerField: ''
    }));

    this.state = {
      colorPickerOpen: false,
      colorPickerField: ''
    };
  }

  render() {
    const {
      state: {
        locationUrl,
        headerColor1,
        headerColor2,
        headerLogoBackgroundColor,
        headerLogoBackgroundAlpha,
        horizontalLogoVariation,
        squareLogoVariation,
        backgroundImage,
        backgroundBlur,
        backgroundOverlayAlpha,
        studentWelcomeVideo,
        instructorWelcomeVideo
      },
      handleDetailsChange
    } = this.props;
    const {
      colorPickerField,
      colorPickerOpen
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s12 l6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-block"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Location Branding"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-main card"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field col s12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      id: "location-url",
      name: "locationUrl",
      value: locationUrl,
      onChange: event => handleDetailsChange(event, 'locationUrl', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: locationUrl.length ? 'label active' : 'label',
      htmlFor: "location-url"
    }, "Location Url*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field js-spectrum custom-colorpicker col s12 m6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "js-spectrum-input",
      id: "header-color-1",
      name: "headerColor1",
      value: headerColor1,
      onClick: () => this.onSetColorPicker('headerColor1'),
      onChange: event => handleDetailsChange(event, 'headerColor1', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: headerColor1.length ? 'label active' : 'label',
      htmlFor: "header-color-1"
    }, "Header Color 1*"), colorPickerOpen && colorPickerField === 'headerColor1' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onOuterClick: this.onCloseColorPicker
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_3__["ChromePicker"], {
      color: headerColor1,
      onChange: color => handleDetailsChange(color, 'headerColor1', 'locationBranding')
    })) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field js-spectrum custom-colorpicker col s12 m6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "js-spectrum-input",
      id: "header-color-2",
      name: "headerColor2",
      value: headerColor2,
      onClick: () => this.onSetColorPicker('headerColor2'),
      onChange: event => handleDetailsChange(event, 'headerColor2', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: headerColor2.length ? 'label active' : 'label',
      htmlFor: "header-color-2"
    }, "Header Color 2*"), colorPickerOpen && colorPickerField === 'headerColor2' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onOuterClick: this.onCloseColorPicker
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_3__["ChromePicker"], {
      color: headerColor2,
      onChange: color => handleDetailsChange(color, 'headerColor2', 'locationBranding')
    })) : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field js-spectrum custom-colorpicker col s12 m6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "js-spectrum-input",
      id: "header-logo-background-color",
      name: "headerLogoBackgroundColor",
      value: headerLogoBackgroundColor,
      onClick: () => this.onSetColorPicker('headerLogoBackgroundColor'),
      onChange: event => handleDetailsChange(event, 'headerLogoBackgroundColor', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: headerLogoBackgroundColor.length ? 'label active' : 'label',
      htmlFor: "header-logo-background-color"
    }, "Header Logo Background Color*"), colorPickerOpen && colorPickerField === 'headerLogoBackgroundColor' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onOuterClick: this.onCloseColorPicker
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_3__["ChromePicker"], {
      color: headerLogoBackgroundColor,
      onChange: color => handleDetailsChange(color, 'headerLogoBackgroundColor', 'locationBranding')
    })) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field col s12 m6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      id: "header-logo-background-alpha",
      name: "headerLogoBackgroundAlpha",
      value: headerLogoBackgroundAlpha,
      onChange: event => handleDetailsChange(event, 'headerLogoBackgroundAlpha', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: headerLogoBackgroundAlpha.length ? 'label active' : 'label',
      htmlFor: "header-logo-background-alpha"
    }, "Header Logo Background Alpha*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-input-custom file-field input-field col s12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-path-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "file-path",
      type: "text",
      id: "horizontal-logo-variation",
      name: "horizontalLogoVariation",
      value: horizontalLogoVariation,
      onChange: event => handleDetailsChange(event, 'horizontalLogoVariation', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: horizontalLogoVariation.length ? 'label active' : 'label',
      htmlFor: "horizontal-logo-variation"
    }, "Horizontal Logo Variation*")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn-upload"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "holder-icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-upload-file"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-input-custom file-field input-field col s12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-path-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "file-path",
      type: "text",
      id: "square-logo-variation",
      name: "squareLogoVariation",
      value: squareLogoVariation,
      onChange: event => handleDetailsChange(event, 'squareLogoVariation', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: squareLogoVariation.length ? 'label active' : 'label',
      htmlFor: "square-logo-variation"
    }, "Square Logo Variation*")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn-upload"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "holder-icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-upload-file"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-input-custom file-field input-field col s12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-path-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "file-path",
      type: "text",
      id: "background-image",
      name: "backgroundImage",
      value: backgroundImage,
      onChange: event => handleDetailsChange(event, 'backgroundImage', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: backgroundImage.length ? 'label active' : 'label',
      htmlFor: "background-image"
    }, "Background Image*")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn-upload"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "holder-icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-upload-file"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s12 m6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      id: "background-blur",
      name: "backgroundBlur",
      value: backgroundBlur,
      onChange: event => handleDetailsChange(event, 'backgroundBlur', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: backgroundBlur.length ? 'label active' : 'label',
      htmlFor: "background-blur"
    }, "Background Blur*"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col s12 m6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      id: "background-overlay-alpha",
      name: "backgroundOverlayAlpha",
      value: backgroundOverlayAlpha,
      onChange: event => handleDetailsChange(event, 'backgroundOverlayAlpha', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: backgroundOverlayAlpha.length ? 'label active' : 'label',
      htmlFor: "background-overlay-alpha"
    }, "Background Overlay Alpha*")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-input-custom file-field input-field col s12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-path-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "file-path",
      type: "text",
      id: "student-welcome-video",
      name: "studentWelcomeVideo",
      value: studentWelcomeVideo,
      onChange: event => handleDetailsChange(event, 'studentWelcomeVideo', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: studentWelcomeVideo.length ? 'label active' : 'label',
      htmlFor: "student-welcome-video"
    }, "Student Welcome Video (optional)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn-upload"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "holder-icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-upload-file"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row mb-0"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-input-custom file-field input-field col s12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "file-path-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "file-path",
      type: "text",
      id: "instructor-welcome-video",
      name: "instructorWelcomeVideo",
      value: instructorWelcomeVideo,
      onChange: event => handleDetailsChange(event, 'instructorWelcomeVideo', 'locationBranding')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: instructorWelcomeVideo.length ? 'label active' : 'label',
      htmlFor: "instructor-welcome-video"
    }, "Instructor Welcome Video (optional)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn-upload"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "holder-icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-upload-file"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file"
    }))))))));
  }

}

LocationBranding.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
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






const LocationContactInfo = ({
  state: {
    locationName,
    locationNickname,
    locationEmail,
    locationPhoneNumber,
    website,
    locationStreetAddress,
    locationCity,
    locationState,
    locationZip
  },
  handleDetailsChange
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  onChange: event => handleDetailsChange(event, 'locationName', 'locationContactInfo')
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
  onChange: event => handleDetailsChange(event, 'locationNickname', 'locationContactInfo')
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
  onChange: event => handleDetailsChange(event, 'locationEmail', 'locationContactInfo')
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
  onChange: event => handleDetailsChange(event, 'locationPhoneNumber', 'locationContactInfo')
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
  onChange: event => handleDetailsChange(event, 'website', 'locationContactInfo')
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
  onChange: event => handleDetailsChange(event, 'locationStreetAddress', 'locationContactInfo')
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
  onChange: event => handleDetailsChange(event, 'locationCity', 'locationContactInfo')
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
  onChange: event => handleDetailsChange(event, 'locationState', 'locationContactInfo'),
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
  onChange: event => handleDetailsChange(event, 'locationZip', 'locationContactInfo')
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: locationZip.length ? 'label active' : 'label',
  htmlFor: "location-zip"
}, "Zip (optional)"))))))));

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



const LocationEmailSettings = ({
  state: {
    automatedEmailOriginAddress,
    automatedEmailSalutation
  },
  handleDetailsChange
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  onChange: event => handleDetailsChange(event, 'automatedEmailOriginAddress', 'locationEmailSettings')
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
  onChange: event => handleDetailsChange(event, 'automatedEmailSalutation', 'locationEmailSettings')
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: "label",
  htmlFor: "automated-email-salutation"
}, "Automated Email Salutation*")))))));

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






const OwnerSection = ({
  owner,
  userList,
  handleDetailsChange,
  userListModalOpen,
  changeModalOpen,
  onOpenChangeModal,
  onCloseChangeModal,
  onOpenUserListModal,
  onCloseUserListModal
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _UserRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UserRow */ "./components/Location/components/UserRow/index.js");



/* eslint-disable react/no-array-index-key */






class UserListModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSelectUser", selectedUser => this.setState({
      selectedUser
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetUser", () => {
      const {
        selectedUser
      } = this.state;
      const {
        onSubmit,
        onClose
      } = this.props;
      onSubmit(selectedUser, 'owner', null);
      this.setState({
        selectedUser: null
      }, onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      this.setState({
        selectedUser: null
      }, onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapUsers", () => this.props.userList.map((user, index) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UserRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      user: user,
      key: index,
      index: index,
      onSelectUser: () => this.onSelectUser(user),
      selectedUser: this.state.selectedUser
    })));

    this.state = {
      selectedUser: null
    };
  }

  render() {
    const {
      open
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selector: "#modal"
    }, open && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "overlay"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onOuterClick: this.onCloseModal
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "modal_Practice1",
      className: "jsx-3695789637" + " " + "modal modal-custom modal-practice"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "card-modal card-course card-main card"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "card-panel green lighten-1 white-text"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "card-panel-row row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        flex: '1 0 83.333333%'
      },
      className: "jsx-3695789637" + " " + "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      className: "jsx-3695789637" + " " + "h1"
    }, "Assign Owner")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-3695789637" + " " + "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#!",
      className: "jsx-3695789637" + " " + "panel-link close modal-close"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "jsx-3695789637" + " " + "icon-close"
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "card-body"
    }, this.mapUsers()), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "col s6"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "meta-info"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3695789637" + " " + "col s6 right-align"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-3695789637" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: this.onSetUser,
      style: {
        color: 'white'
      },
      className: "jsx-3695789637" + " " + "btn"
    }, "Save"))))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3695789637"
    }, "h4.jsx-3695789637{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-3695789637{font-size:16px;color:#343434;}p.passage.jsx-3695789637{font-size:14px;}a.jsx-3695789637{color:#343434;}.overlay.jsx-3695789637{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.modal.jsx-3695789637{display:block;background-color:transparent;position:absolute;top:10%;right:10%;left:10%;}.modal-custom.jsx-3695789637{opacity:1;visibility:visible;}.modal-footer.jsx-3695789637{background-color:white;}.modal-full-size.jsx-3695789637{z-index:999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvVXNlckxpc3RNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR2EsQUFHNkIsQUFNSCxBQUlBLEFBR0QsQUFHQyxBQVNELEFBUUosQUFJYSxBQUdYLFVBTk8sRUFPUixFQTNCYixBQVkrQixDQW5CZixBQUloQixBQU1zQyxHQWhCbkIsS0FxQ25CLEFBSVMsTUFsQ1QsQUEyQkEsQ0FRUSxLQXpDcUIsQ0EwQ25CLE9BakJVLENBa0JULElBM0JILEtBNEJSLENBM0JVLE9BU0EsQ0F6QkssQUFpQkosT0FTQyxFQVJILElBakJULEdBa0JjLENBUUgsU0FDWCxFQVJBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvVXNlckxpc3RNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IFVzZXJSb3cgZnJvbSAnLi4vVXNlclJvdyc7XG5cbmNsYXNzIFVzZXJMaXN0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRVc2VyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblNlbGVjdFVzZXIgPSAoc2VsZWN0ZWRVc2VyKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyIH0pO1xuXG4gIG9uU2V0VXNlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkVXNlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9uU3VibWl0LCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU3VibWl0KHNlbGVjdGVkVXNlciwgJ293bmVyJywgbnVsbCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcjogbnVsbCB9LCBvbkNsb3NlKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcjogbnVsbCB9LCBvbkNsb3NlKTtcbiAgfVxuXG4gIG1hcFVzZXJzID0gKCkgPT4gdGhpcy5wcm9wcy51c2VyTGlzdC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgPFVzZXJSb3dcbiAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgb25TZWxlY3RVc2VyPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcih1c2VyKX1cbiAgICAgIHNlbGVjdGVkVXNlcj17dGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJ9XG4gICAgLz5cbiAgKSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfUHJhY3RpY2UxXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLXByYWN0aWNlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZC1jb3Vyc2UgY2FyZC1tYWluIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsIGdyZWVuIGxpZ2h0ZW4tMSB3aGl0ZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgZmxleDogJzEgMCA4My4zMzMzMzMlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+QXNzaWduIE93bmVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cInBhbmVsLWxpbmsgY2xvc2UgbW9kYWwtY2xvc2VcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubWFwVXNlcnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2V0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4yOHJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICBtYXJnaW46IDEuNTJyZW0gMCAuOTEycmVtIDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgIH1cbiAgICAgICAgcC5wYXNzYWdlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgfVxuICAgICAgICAubW9kYWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsLWZ1bGwtc2l6ZSB7XG4gICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5Vc2VyTGlzdE1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVzZXJMaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMaXN0TW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/UserListModal/index.js */")));
  }

}

UserListModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  userList: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
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





const UserRow = ({
  user,
  onSelectUser,
  selectedUser
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  href: `mailto:${user.email}`
}, user.email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col s2 right-align"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "block-icon"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "icon-owner"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "text-icon"
}, "Owner")))));

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

const UserRowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__UserRowWrapper",
  componentId: "mop4qd-0"
})(["background-color:", ";color:#fff;.user-circle{background-color:", ";color:#fff;}:hover{cursor:pointer;background-color:", ";.user-circle{background-color:", ";}}"], ({
  selected
}) => selected ? '#24645c' : '#31837a', ({
  selected
}) => selected ? '#24645c' : '#31837a', ({
  selected
}) => selected ? '#004a40!important' : '#24645c!important', ({
  selected
}) => selected ? '#004a40!important' : '#24645c!important');
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
const initialState = {
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
    studentsAchievingTargetScore: 11
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");





class Modal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  // eslint-disable-line
  render() {
    const {
      open,
      onClose,
      onConfirm,
      header,
      body,
      fullScreen,
      problem,
      passage
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Portal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selector: "#modal"
    }, fullScreen ? open && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "modal-full-size modal modal-custom open"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "card-modal card-main card"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
      className: "jsx-2052672963" + " " + "passage"
    }, problem ? problem.problemText : passage.passageText), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
      className: "jsx-2052672963" + " " + "passage"
    }, body)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-2052672963" + " " + "modal-close close"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
      className: "jsx-2052672963" + " " + "icon-close"
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "file-field-block"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "info-block"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", {
      className: "jsx-2052672963"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", {
      className: "jsx-2052672963"
    }, "Problem:"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", {
      className: "jsx-2052672963"
    }, problem ? problem.id : passage.id)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", {
      className: "jsx-2052672963"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", {
      className: "jsx-2052672963"
    }, "Passage:"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", {
      className: "jsx-2052672963"
    }, problem ? problem.pass : passage.id))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "file-field input-field"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "file-path-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
      type: "text",
      value: "Video:  some_video.mpg",
      readOnly: "",
      className: "jsx-2052672963" + " " + "file-path"
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "buttons-row"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
      className: "jsx-2052672963" + " " + "waves-effect waves-teal btn-flat blue-text text-darken-3"
    }, "Watch"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: "jsx-2052672963" + " " + "waves-effect waves-teal btn-flat blue-text text-darken-3"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: "jsx-2052672963"
    }, "Upload"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
      type: "file",
      className: "jsx-2052672963"
    }))))))) : open && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "overlay"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onOuterClick: onClose
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "modal"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "modal-content"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", {
      className: "jsx-2052672963"
    }, header), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
      className: "jsx-2052672963"
    }, body)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "jsx-2052672963" + " " + "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-2052672963" + " " + "modal-close waves-effect waves-green btn-flat"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
      href: "#!",
      onClick: onConfirm,
      className: "jsx-2052672963" + " " + "modal-close waves-effect waves-green btn-flat"
    }, "Confirm"))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2052672963"
    }, "h4.jsx-2052672963{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-2052672963{font-size:16px;color:#343434;}p.passage.jsx-2052672963{font-size:14px;}a.jsx-2052672963{color:#343434;}.overlay.jsx-2052672963{position:fixed!important;background-color:rgba(0,0,0,0.7)!important;top:0!important;right:0!important;bottom:0!important;left:0!important;z-index:9999!important;}.modal.jsx-2052672963{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-footer.jsx-2052672963{background-color:white;}.modal-full-size.jsx-2052672963{z-index:999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGYSxBQUdtQyxBQU1ILEFBSUEsQUFHRCxBQUdXLEFBU1gsQUFTUyxBQUdYLFlBQ0QsRUF4QmIsQUFZeUIsQ0FuQlQsQUFJaEIsR0FWbUIsS0FrQ25CLEFBSVMsRUF0QnVDLElBVGhELENBZ0NRLEtBdENxQixDQXVDbkIsQ0FkVSxPQWVULFNBQ1gsRUFmVSxPQXpCSyxDQTBCSCxLQVhNLEtBWVAsRUExQlgsT0EyQjBILEVBWnRHLGtCQUNDLG1CQUNGLGlCQUNNLHVCQUN6Qiw4QkFTQSIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL1BvcnRhbCc7XG5pbXBvcnQgQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIGZyb20gJy4uL0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcic7XG5cbmV4cG9ydCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3Blbiwgb25DbG9zZSwgb25Db25maXJtLCBoZWFkZXIsIGJvZHksIGZ1bGxTY3JlZW4sIHByb2JsZW0sIHBhc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAgICA8Q2hvb3NlPlxuICAgICAgICAgICAgPFdoZW4gY29uZGl0aW9uPXtmdWxsU2NyZWVufT5cbiAgICAgICAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZnVsbC1zaXplIG1vZGFsIG1vZGFsLWN1c3RvbSBvcGVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZC1tYWluIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXNzYWdlXCI+e3Byb2JsZW0gPyBwcm9ibGVtLnByb2JsZW1UZXh0IDogcGFzc2FnZS5wYXNzYWdlVGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFzc2FnZVwiPntib2R5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIGNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1maWVsZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+UHJvYmxlbTo8L2R0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Byb2JsZW0gPyBwcm9ibGVtLmlkIDogcGFzc2FnZS5pZH08L2RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlBhc3NhZ2U6PC9kdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPntwcm9ibGVtID8gcHJvYmxlbS5wYXNzIDogcGFzc2FnZS5pZH08L2RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1wYXRoLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZpbGUtcGF0aFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJWaWRlbzogIHNvbWVfdmlkZW8ubXBnXCIgcmVhZE9ubHk9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGJsdWUtdGV4dCB0ZXh0LWRhcmtlbi0zXCI+V2F0Y2g8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IGJsdWUtdGV4dCB0ZXh0LWRhcmtlbi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VXBsb2FkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9XaGVuPlxuICAgICAgICAgICAgPE90aGVyd2lzZT5cbiAgICAgICAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2hlYWRlcn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2JvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtZ3JlZW4gYnRuLWZsYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLWdyZWVuIGJ0bi1mbGF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9PdGhlcndpc2U+XG4gICAgICAgICAgPC9DaG9vc2U+XG4gICAgICAgICAgeyAvKiBJbmxpbmUgc3R5bGluZyBpcyByZXF1aXJlZCBmb3IgdGhlIE1vZGFsIGNvbXBvbmVudCBkdWUgdG8gdGhlIFBvcnRhbCAqLyB9XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMjhyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxLjUycmVtIDAgLjkxMnJlbSAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQzNDM0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHAucGFzc2FnZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQzNDM0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICByaWdodDogMCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5IWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZ1bGwtc2l6ZSB7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZnVsbFNjcmVlbjogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJvYmxlbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFzc2FnZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Modal/index.js */")));
  }

}
Modal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  fullScreen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  problem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  passage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



class Portal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    this.element = document.querySelector(this.props.selector);
    this.forceUpdate();
  }

  render() {
    if (this.element === undefined) {
      return null;
    }

    return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.children, this.element);
  }

}
Portal.propTypes = {
  selector: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
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

const nestedEditFieldValidation = (componentState, updatedInstance, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const {
    validation
  } = componentState;

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(fieldSection => {
    if (!updatedInstance[fieldSection] && initialValidation[fieldSection]) {
      initialValidation[fieldSection] = false;
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation[fieldSection]).map(field => {
      if (!updatedInstance[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
const shallowEditFieldValidation = (componentState, updatedInstance, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const {
    validation
  } = componentState;

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(field => {
    if (!updatedInstance[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
const nestedCreateFieldValidation = (componentState, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const {
    validation
  } = componentState;

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(fieldSection => {
    if (!componentState[fieldSection] && initialValidation[fieldSection]) {
      initialValidation[fieldSection] = false;
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation[fieldSection]).map(field => {
      if (!componentState[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
const shallowCreateFieldValidation = (componentState, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const {
    validation
  } = componentState;

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(field => {
    if (!componentState[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
}; // validationState is set in state from the root create or edit when an invalid section is found
// This function maps through the validation object, checks for invalid fields, and converts them to regular english based on validationFieldMap

const parseInvalidFieldsToString = (validationState, validationFieldMap) => {
  const invalidFields = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState).map(fieldSection => {
    if (validationState[fieldSection] === false) {
      invalidFields.push(validationFieldMap[fieldSection]);
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState[fieldSection]).map(field => {
      if (validationState[fieldSection][field] === false) {
        invalidFields.push(validationFieldMap[field]);
      }
    });
  });

  return invalidFields.join(', ');
};
const shallowParseInvalidFieldsToString = (validationState, validationFieldMap) => {
  const invalidFields = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState).map(field => {
    if (validationState[field] === false) {
      invalidFields.push(validationFieldMap[field]);
    }
  });

  return invalidFields.join(', ');
};
const saveNewSuccess = name => react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success(`Your ${name} has been successfully saved!`, {
  className: 'update-success',
  progressClassName: 'progress-bar-success'
});
const saveChangesSuccess = () => react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Your changes have been successfully saved!", {
  className: 'update-success',
  progressClassName: 'progress-bar-success'
});
const saveNewError = (validationState, validationFieldMap, shallowValidation = false) => react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error(`Please fill out the following required fields: ${shallowValidation ? shallowParseInvalidFieldsToString(validationState, validationFieldMap) : parseInvalidFieldsToString(validationState, validationFieldMap)}`, {
  className: 'update-error',
  progressClassName: 'progress-bar-error'
});

/***/ }),

/***/ "./components/utils/genderOptions.js":
/*!*******************************************!*\
  !*** ./components/utils/genderOptions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const genderOptions = [{
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
const getUserInitials = user => `${user.accountInfo.firstName[0]}${user.accountInfo.lastName[0]}`;
const getTutorInitials = user => `${user.firstName[0]}${user.lastName[0]}`;

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
const getValueFromState = (valueKey, state) => {
  let obj = {}; // eslint-disable-next-line array-callback-return

  state.map(option => {
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
const firstNameAscending = ({
  accountInfo: {
    firstName: firstNameA
  }
}, {
  accountInfo: {
    firstName: firstNameB
  }
}) => {
  if (firstNameA < firstNameB) {
    return -1;
  }

  return 0;
};
const firstNameDescending = ({
  accountInfo: {
    firstName: firstNameA
  }
}, {
  accountInfo: {
    firstName: firstNameB
  }
}) => {
  if (firstNameA > firstNameB) {
    return -1;
  }

  return 0;
};
const lastNameAscending = ({
  accountInfo: {
    lastName: lastNameA
  }
}, {
  accountInfo: {
    lastName: lastNameB
  }
}) => {
  if (lastNameA < lastNameB) {
    return -1;
  }

  return 0;
};
const lastNameDescending = ({
  accountInfo: {
    lastName: lastNameA
  }
}, {
  accountInfo: {
    lastName: lastNameB
  }
}) => {
  if (lastNameA > lastNameB) {
    return -1;
  }

  return 0;
};
const dueDate = ({
  dueDate: dueDateA
}, {
  dueDate: dueDateB
}) => {
  if (dueDateA > dueDateB) {
    return -1;
  }

  return 0;
};
const assignDate = ({
  assignDate: assignDateA
}, {
  assignDate: assignDateB
}) => {
  if (assignDateA > assignDateB) {
    return -1;
  }

  return 0;
};
const problems = ({
  problems: problemsA
}, {
  problems: problemsB
}) => {
  if (problemsA > problemsB) {
    return -1;
  }

  return 0;
};
const completed = ({
  completed: completedA,
  problems: problemsA
}, {
  completed: completedB,
  problems: problemsB
}) => {
  if (completedA / problemsA > completedB / problemsB) {
    return -1;
  }

  return 0;
};
const flags = ({
  flags: flagsA
}, {
  flags: flagsB
}) => {
  if (flagsA > flagsB) {
    return -1;
  }

  return 0;
};
const score = ({
  score: scoreA
}, {
  score: scoreB
}) => {
  if (scoreA > scoreB) {
    return -1;
  }

  return 0;
};
const timeEstimate = ({
  timeEstimate: timeEstimateA
}, {
  timeEstimate: timeEstimateB
}) => {
  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
const subjectAscending = ({
  subject: subjectA
}, {
  subject: subjectB
}) => {
  if (subjectA < subjectB) {
    return -1;
  }

  return 0;
};
const subjectDescending = ({
  subject: subjectA
}, {
  subject: subjectB
}) => {
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
const stateOptions = [{
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

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

/***/ "./pages/all-instructors.js":
/*!**********************************!*\
  !*** ./pages/all-instructors.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Instructor_ListPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Instructor/ListPage */ "./components/Instructor/ListPage/index.js");

 // eslint-disable-next-line react/prefer-stateless-function

class InstructorList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      id: "main",
      role: "main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-holder grey lighten-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Instructor_ListPage__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
  }

}

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

/***/ 3:
/*!****************************************!*\
  !*** multi ./pages/all-instructors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/pages/all-instructors.js */"./pages/all-instructors.js");


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

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=all-instructors.js.map