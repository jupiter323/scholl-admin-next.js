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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Class/TestSectionsPage/components/FilterSection/index.js":
/*!*****************************************************************************!*\
  !*** ./components/Class/TestSectionsPage/components/FilterSection/index.js ***!
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
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/sortOptions */ "./components/Class/utils/sortOptions.js");








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
        testVersionFilter: ''
      }, _this.props.onClearFilters);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchChange", function (_ref2) {
      var target = _ref2.target;
      return _this.setState({
        testVersionFilter: target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitSearchFilter", function () {
      var _this$props = _this.props,
          onSetFilteredState = _this$props.onSetFilteredState,
          onUnsetFilteredState = _this$props.onUnsetFilteredState;
      var testVersionFilter = _this.state.testVersionFilter;

      if (testVersionFilter === '') {
        onUnsetFilteredState();
      }

      var transformedTitle = testVersionFilter.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedTitle);
    });

    _this.state = {
      open: false,
      testVersionFilter: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          testVersionFilter = _this$state.testVersionFilter;
      var _this$props2 = this.props,
          handleFilterClick = _this$props2.handleFilterClick,
          sort = _this$props2.sort,
          onSetSort = _this$props2.onSetSort,
          subjectFilters = _this$props2.subjectFilters,
          flagFilter = _this$props2.flagFilter,
          availableDateFilters = _this$props2.availableDateFilters,
          dueDateFilters = _this$props2.dueDateFilters;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filter-form-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "collapsible expandable",
        style: {
          minHeight: '0'
        }
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
        name: "reading",
        checked: subjectFilters.indexOf('reading') !== -1,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "reading"
      }, "Reading")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "writing",
        name: "writing",
        checked: subjectFilters.indexOf('writing') !== -1,
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "writing"
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "math",
        name: "math",
        checked: subjectFilters.indexOf('math') !== -1,
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "math"
      }, "Math"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "future",
        name: "future",
        checked: availableDateFilters.indexOf('future') !== -1,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return handleFilterClick('availableDate', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "future"
      }, "Future")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "available",
        name: "available",
        checked: availableDateFilters.indexOf('available') !== -1,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return handleFilterClick('availableDate', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "available"
      }, "Available")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "complete",
        name: "complete",
        checked: availableDateFilters.indexOf('complete') !== -1,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return handleFilterClick('availableDate', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "complete"
      }, "Complete"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "hasReviewFlags",
        name: "hasReviewFlags",
        checked: flagFilter,
        onChange: function onChange(_ref9) {
          var target = _ref9.target;
          return handleFilterClick('hasFlags', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "hasReviewFlags"
      }, "Has Review Flags"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueToday",
        name: "dueToday",
        checked: dueDateFilters.indexOf('dueToday') !== -1,
        onChange: function onChange(_ref10) {
          var target = _ref10.target;
          return handleFilterClick('dueDate', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueToday"
      }, "Due Today")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueNextSession",
        name: "dueNextSession",
        checked: dueDateFilters.indexOf('dueNextSession') !== -1,
        onChange: function onChange(_ref11) {
          var target = _ref11.target;
          return handleFilterClick('dueDate', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueNextSession"
      }, "Due By Next Session")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueThisWeek",
        name: "dueThisWeek",
        checked: dueDateFilters.indexOf('dueThisWeek') !== -1,
        onChange: function onChange(_ref12) {
          var target = _ref12.target;
          return handleFilterClick('dueDate', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueThisWeek"
      }, "Due this Week")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "overdue",
        name: "overdue",
        checked: dueDateFilters.indexOf('overdue') !== -1,
        onChange: function onChange(_ref13) {
          var target = _ref13.target;
          return handleFilterClick('dueDate', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "overdue"
      }, "Overdue")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        id: "test_version_search",
        className: "input-control validate",
        value: testVersionFilter,
        onChange: this.handleSearchChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        onClick: this.submitSearchFilter,
        className: "search-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        htmlFor: "test_version_search"
      }, "Test Version"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 xl7"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field",
        style: {
          marginBottom: '10px',
          marginTop: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__["default"])(sort, _utils_sortOptions__WEBPACK_IMPORTED_MODULE_11__["default"]),
        onChange: onSetSort,
        options: _utils_sortOptions__WEBPACK_IMPORTED_MODULE_11__["default"],
        label: "Sort By",
        stateKey: "sort",
        dropdownKey: "sort"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l4 hide-on-med-and-down show-on-large"
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
  sort: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  flagFilter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onClearFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  dueDateFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  subjectFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  handleFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  availableDateFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Class/TestSectionsPage/components/TestSectionCard/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Class/TestSectionsPage/components/TestSectionCard/index.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/testSectionCardUtils */ "./components/Class/utils/testSectionCardUtils.js");












var TestSectionCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TestSectionCard, _React$Component);

  function TestSectionCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TestSectionCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TestSectionCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "viewTestSectionDetails", function () {
      return console.warn('Pending implementation of view test section details functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "dismissFlags", function () {
      return console.warn('Pending implementation of dismiss flags functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "resetTestSection", function () {
      return console.warn('Pending implementation of reset test section functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteTestSection", function () {
      return console.warn('Pending implementation of delete test section functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDropdownClick", function (event) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderFlags", function () {
      var flags = _this.props.testSection.flags;

      if (flags.length) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
          className: "badge-text"
        }, flags.length), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icon-flag"
        }));
      }

      return null;
    });

    _this.state = {
      open: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TestSectionCard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          testSection = _this$props2.testSection,
          dropdownIsOpen = _this$props2.dropdownIsOpen,
          dropdownIndex = _this$props2.dropdownIndex,
          index = _this$props2.index;
      var subject = testSection.subject,
          timeEstimate = testSection.timeEstimate,
          version = testSection.version,
          availableDate = testSection.availableDate,
          dueDate = testSection.dueDate,
          problems = testSection.problems,
          disabled = testSection.disabled,
          status = testSection.status,
          percentageComplete = testSection.percentageComplete;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: disabled ? 'card-main test-card card-disabled card' : 'card-main test-card card'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel panel-border"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon-col col s2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-assign-section"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-icon"
      }, "Assigned ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Test Section"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s8"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-large truncate"
      }, _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_10__["subjectMap"][subject], " Section"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-small truncate"
      }, "Version: ", version))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "position-top right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icons-row"
      }, this.renderFlags(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown01",
        className: "dropdown-trigger btn",
        onClick: this.handleDropdownClick
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown01",
        className: "dropdown-content dropdown-wide",
        style: {
          display: 'block',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.viewTestSectionDetails,
        className: "modal-trigger link-block"
      }, "View Details")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.dismissFlags
      }, "Dismiss Flags")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.resetTestSection
      }, "Reset")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.deleteTestSection,
        className: "link-delete"
      }, "Delete"))) : null))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
          return Object(_utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_10__["data"])(percentageComplete, status);
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
          backgroundColor: _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_10__["graphColorMap"][status]
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        "data-count-up": true,
        "data-start-val": "0",
        "data-end-val": "96",
        "data-duration": "1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "percentage"
      }, percentageComplete, "%"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-col chart-start"
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-col chart-end"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "amount",
        style: {
          color: _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_10__["graphColorMap"][status]
        }
      }, problems))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Time Est:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, timeEstimate, " min")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Problems:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, problems))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s6 right-align justify-end"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Available:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
        dateTime: "2018-12-15"
      }, availableDate))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Due:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("time", {
        dateTime: "2018-12-15"
      }, dueDate)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "align-self-end"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_10__["testSectionCardColorMap"][status]
      }, status)))))));
    }
  }]);

  return TestSectionCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

TestSectionCard.propTypes = {
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  testSection: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TestSectionCard);

/***/ }),

/***/ "./components/Class/TestSectionsPage/index.js":
/*!****************************************************!*\
  !*** ./components/Class/TestSectionsPage/index.js ***!
  \****************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Class/TestSectionsPage/components/FilterSection/index.js");
/* harmony import */ var _components_TestSectionCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/TestSectionCard */ "./components/Class/TestSectionsPage/components/TestSectionCard/index.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/sortOptions */ "./components/Class/utils/sortOptions.js");
/* harmony import */ var _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/testSectionCardUtils */ "./components/Class/utils/testSectionCardUtils.js");
/* harmony import */ var _utils_sampleTestSections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/sampleTestSections */ "./components/Class/utils/sampleTestSections.js");
















var TestSectionsPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TestSectionsPage, _React$Component);

  function TestSectionsPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TestSectionsPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TestSectionsPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClearFilters", function () {
      return _this.setState({
        sort: '',
        testVersionFilter: '',
        subjectFilters: [],
        flagFilter: false,
        availableDateFilters: [],
        dueDateFilters: []
      });
    });

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredState", function (value) {
      return _this.setState({
        testVersionFilter: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        testVersionFilter: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSortTestSections", function (testSections) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'flags':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__["flagsSort"]);

        case 'dueDate':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__["dueDateSort"]);

        case 'availableDate':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__["availableDateSort"]);

        case 'status':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__["statusSort"]);

        case 'problems':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__["problemSort"]);

        case 'timeEstimate':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__["timeEstimateSort"]);

        case 'subject':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__["subjectSort"]);

        case 'percentageComplete':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_12__["percentageCompleteSort"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByTestVersion", function () {
      var _this$state = _this.state,
          testSections = _this$state.testSections,
          testVersionFilter = _this$state.testVersionFilter;
      return testSections.reduce(function (finalArr, currentTestSection) {
        var version = currentTestSection.version;
        var testSectionString = version.replace(/\s/g, "").toLowerCase();

        if (testSectionString.indexOf(testVersionFilter) !== -1 && finalArr.indexOf(currentTestSection) === -1) {
          finalArr.push(currentTestSection);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByDate", function (incomingSections, dateType) {
      var _this$state2 = _this.state,
          dueDateFilters = _this$state2.dueDateFilters,
          availableDateFilters = _this$state2.availableDateFilters;
      var dateFilters;
      var testSections = incomingSections;
      var currentDate = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('MM/DD/YY');
      var currentDateIndex = new Date().getDay();
      var endOfWeekIndex = 6 - currentDateIndex;
      var endOfWeekDate = moment__WEBPACK_IMPORTED_MODULE_9___default()().add(endOfWeekIndex, 'days').format('MM/DD/YY');

      if (dateType === 'dueDate') {
        dateFilters = dueDateFilters;

        if (dateFilters.indexOf('dueToday') !== -1) {
          testSections = testSections.filter(function (testSection) {
            return testSection.dueDate === currentDate;
          });
        }

        if (dateFilters.indexOf('dueNextSession') !== -1) {
          console.warn('Pending decision on how next session date is calculated');
        }

        if (dateFilters.indexOf('overdue') !== -1) {
          testSections = testSections.filter(function (testSection) {
            return testSection.dueDate < currentDate;
          });
        }

        if (dateFilters.indexOf('dueThisWeek') !== -1) {
          testSections = testSections.filter(function (testSection) {
            return testSection.dueDate >= currentDate && testSection.dueDate <= endOfWeekDate;
          });
        }
      } else {
        dateFilters = availableDateFilters;

        if (dateFilters.indexOf('future') !== -1) {
          testSections = testSections.filter(function (testSection) {
            return testSection.availableDate > currentDate;
          });
        }

        if (dateFilters.indexOf('available') !== -1) {
          testSections = testSections.filter(function (testSection) {
            return testSection.availableDate <= currentDate;
          });
        }

        if (dateFilters.indexOf('complete') !== -1) {
          testSections = testSections.filter(function (testSection) {
            return testSection.percentageComplete === '100';
          });
        }
      }

      return testSections;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterTestSections", function () {
      var _this$state3 = _this.state,
          subjectFilters = _this$state3.subjectFilters,
          dueDateFilters = _this$state3.dueDateFilters,
          availableDateFilters = _this$state3.availableDateFilters,
          flagFilter = _this$state3.flagFilter,
          allTestSections = _this$state3.testSections;
      var testSections = allTestSections;

      if (subjectFilters.length) {
        testSections = testSections.filter(function (testSection) {
          return subjectFilters.indexOf(_utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_13__["testSectionSubjectMap"][testSection.subject]) !== -1;
        });
      }

      if (dueDateFilters.length) {
        testSections = _this.onFilterByDate(testSections, 'dueDate');
      }

      if (availableDateFilters.length) {
        testSections = _this.onFilterByDate(testSections, 'availableDate');
      }

      if (flagFilter) {
        testSections = testSections.filter(function (testSection) {
          return testSection.flags.length;
        });
      }

      return testSections;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMappableTestSections", function () {
      var _this$state4 = _this.state,
          subjectFilters = _this$state4.subjectFilters,
          dueDateFilters = _this$state4.dueDateFilters,
          availableDateFilters = _this$state4.availableDateFilters,
          flagFilter = _this$state4.flagFilter,
          sort = _this$state4.sort,
          testVersionFilter = _this$state4.testVersionFilter,
          testSections = _this$state4.testSections;
      var mappableTestSections = testSections;

      if (testVersionFilter.length) {
        mappableTestSections = _this.onFilterByTestVersion();
      }

      if (subjectFilters.length || dueDateFilters.length || availableDateFilters.length || flagFilter) {
        mappableTestSections = _this.onFilterTestSections();
      }

      if (sort) {
        return _this.onSortTestSections(mappableTestSections);
      }

      return mappableTestSections;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilterClick", function (filterType, filter) {
      var _this$state5 = _this.state,
          currentAvailableDateFilters = _this$state5.availableDateFilters,
          currentDueDateFilters = _this$state5.dueDateFilters,
          currentSubjectFilters = _this$state5.subjectFilters,
          flagFilter = _this$state5.flagFilter;
      var modifiedFilterCurrentState;
      var modifiedFilterName;
      var modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'dueDate':
          modifiedFilterCurrentState = currentDueDateFilters;
          modifiedFilterName = 'dueDateFilters';
          break;

        case 'availableDate':
          modifiedFilterCurrentState = currentAvailableDateFilters;
          modifiedFilterName = 'availableDateFilters';
          break;

        case 'hasFlags':
          return _this.setState({
            flagFilter: !flagFilter
          });

        default:
          break;
      }

      if (modifiedFilterCurrentState.indexOf(filter) === -1) {
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        var filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, modifiedFilterName, modifiedFilterUpdatedState));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapTestSections", function () {
      return _this.getMappableTestSections().map(function (testSection, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TestSectionCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          index: index,
          key: testSection.id,
          testSection: testSection,
          onSetDropdown: _this.onSetDropdown,
          onCloseDropdown: _this.onCloseDropdown,
          dropdownIndex: _this.state.dropdownIndex,
          dropdownIsOpen: _this.state.dropdownIsOpen
        });
      });
    });

    _this.state = {
      sort: '',
      testVersionFilter: '',
      subjectFilters: [],
      flagFilter: false,
      availableDateFilters: [],
      dueDateFilters: [],
      dropdownIndex: null,
      dropdownIsOpen: false,
      testSections: _utils_sampleTestSections__WEBPACK_IMPORTED_MODULE_14__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TestSectionsPage, [{
    key: "render",
    value: function render() {
      var testSections = this.state.testSections;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FilterSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sort: this.state.sort,
        onSetSort: this.onSetSort,
        flagFilter: this.state.flagFilter,
        onClearFilters: this.onClearFilters,
        handleFilterClick: this.handleFilterClick,
        subjectFilters: this.state.subjectFilters,
        dueDateFilters: this.state.dueDateFilters,
        availableDateFilters: this.state.availableDateFilters,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "result-row center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "result"
      }, " - ", testSections.length, " results -")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex-content card-width-272"
      }, this.mapTestSections())));
    }
  }]);

  return TestSectionsPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TestSectionsPage);

/***/ }),

/***/ "./components/Class/components/ClassNavBar/index.js":
/*!**********************************************************!*\
  !*** ./components/Class/components/ClassNavBar/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var ClassNavBar = function ClassNavBar(_ref) {
  var active = _ref.active,
      onSetActivePage = _ref.onSetActivePage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav-additional"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu-additional js-flex-nav",
    "data-more-text": "More"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('summary');
    },
    className: active === 'summary' ? 'active' : ''
  }, "Summary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('calendar');
    },
    className: active === 'calendar' ? 'active' : ''
  }, "Calendar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('lessons');
    },
    className: active === 'lessons' ? 'active' : ''
  }, "Lessons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('worksheets');
    },
    className: active === 'worksheets' ? 'active' : ''
  }, "Worksheets")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('testSections');
    },
    className: active === 'testSections' ? 'active' : ''
  }, "Test Sections")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('account');
    },
    className: active === 'account' ? 'active' : ''
  }, "Account"))));
};

ClassNavBar.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onSetActivePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassNavBar);

/***/ }),

/***/ "./components/Class/utils/sampleTestSections.js":
/*!******************************************************!*\
  !*** ./components/Class/utils/sampleTestSections.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  subject: 'Math',
  version: 'SAT Practice #2',
  availableDate: '12/15/19',
  dueDate: '12/17/19',
  status: 'Exemplary',
  problems: 15,
  timeEstimate: '23',
  percentageComplete: '100',
  flags: [{}, {}, {}],
  disabled: false
}, {
  id: 2,
  subject: 'Writing',
  version: 'SAT Practice #4',
  availableDate: '03/21/19',
  dueDate: '05/31/19',
  status: 'Developing',
  problems: 21,
  timeEstimate: '41',
  percentageComplete: '86',
  flags: [],
  disabled: false
}, {
  id: 3,
  subject: 'Reading',
  version: 'SAT Practice #1',
  availableDate: '04/01/19',
  dueDate: '06/12/19',
  status: 'Assigned',
  problems: 42,
  timeEstimate: '57',
  percentageComplete: '0',
  flags: [],
  disabled: true
}, {
  id: 4,
  subject: 'Writing',
  version: 'SAT Practice #6',
  availableDate: '07/11/19',
  dueDate: '07/13/19',
  status: 'Developing',
  problems: 17,
  timeEstimate: '21',
  percentageComplete: '72',
  flags: [{}],
  disabled: false
}, {
  id: 5,
  subject: 'Math',
  version: 'SAT Practice #5',
  availableDate: '04/02/19',
  dueDate: '04/16/19',
  status: 'Exemplary',
  problems: 16,
  timeEstimate: '41',
  percentageComplete: '47',
  flags: [],
  disabled: false
}]);

/***/ }),

/***/ "./components/Class/utils/sortOptions.js":
/*!***********************************************!*\
  !*** ./components/Class/utils/sortOptions.js ***!
  \***********************************************/
/*! exports provided: availableDateSort, dueDateSort, statusSort, flagsSort, problemSort, timeEstimateSort, subjectSort, percentageCompleteSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableDateSort", function() { return availableDateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dueDateSort", function() { return dueDateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusSort", function() { return statusSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagsSort", function() { return flagsSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemSort", function() { return problemSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEstimateSort", function() { return timeEstimateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectSort", function() { return subjectSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageCompleteSort", function() { return percentageCompleteSort; });
var sortByOptions = [{
  label: 'Available On Date',
  value: 'availableDate'
}, {
  label: 'Due Date',
  value: 'dueDate'
}, {
  label: 'Problems',
  value: 'problems'
}, {
  label: 'Time Estimate',
  value: 'timeEstimate'
}, {
  label: 'Status',
  value: 'status'
}, {
  label: 'Subject',
  value: 'subject'
}, {
  label: 'Flags',
  value: 'flags'
}, {
  label: 'Percentage Complete',
  value: 'percentageComplete'
}];
var availableDateSort = function availableDateSort(_ref, _ref2) {
  var availableDateA = _ref.availableDate;
  var availableDateB = _ref2.availableDate;

  if (availableDateA > availableDateB) {
    return -1;
  }

  return 0;
};
var dueDateSort = function dueDateSort(_ref3, _ref4) {
  var dueDateA = _ref3.dueDate;
  var dueDateB = _ref4.dueDate;

  if (dueDateA > dueDateB) {
    return -1;
  }

  return 0;
};
var statusSort = function statusSort(_ref5, _ref6) {
  var statusA = _ref5.status;
  var statusB = _ref6.status;

  if (statusA > statusB) {
    return -1;
  }

  return 0;
};
var flagsSort = function flagsSort(_ref7, _ref8) {
  var flagsA = _ref7.flags;
  var flagsB = _ref8.flags;

  if (flagsA > flagsB) {
    return -1;
  }

  return 0;
};
var problemSort = function problemSort(_ref9, _ref10) {
  var problemCountA = _ref9.problems;
  var problemCountB = _ref10.problems;

  if (problemCountA > problemCountB) {
    return -1;
  }

  return 0;
};
var timeEstimateSort = function timeEstimateSort(_ref11, _ref12) {
  var timeEstimateA = _ref11.timeEstimate;
  var timeEstimateB = _ref12.timeEstimate;

  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
var subjectSort = function subjectSort(_ref13, _ref14) {
  var subjectA = _ref13.subject;
  var subjectB = _ref14.subject;

  if (subjectA > subjectB) {
    return -1;
  }

  return 0;
};
var percentageCompleteSort = function percentageCompleteSort(_ref15, _ref16) {
  var percentageCompleteA = _ref15.percentageComplete;
  var percentageCompleteB = _ref16.percentageComplete;

  if (percentageCompleteA > percentageCompleteB) {
    return -1;
  }

  return 0;
};
/* harmony default export */ __webpack_exports__["default"] = (sortByOptions);

/***/ }),

/***/ "./components/Class/utils/testSectionCardUtils.js":
/*!********************************************************!*\
  !*** ./components/Class/utils/testSectionCardUtils.js ***!
  \********************************************************/
/*! exports provided: data, subjectMap, testSectionCardColorMap, graphColorMap, testSectionSubjectMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectMap", function() { return subjectMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSectionCardColorMap", function() { return testSectionCardColorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphColorMap", function() { return graphColorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSectionSubjectMap", function() { return testSectionSubjectMap; });
var data = function data(percentage, status) {
  return {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: [graphColorMap[status], '#eaeaea']
    }]
  };
};
var subjectMap = {
  'Math': 'Math (calculator)',
  'Writing': 'Writing',
  'Reading': 'Reading'
};
var testSectionCardColorMap = {
  'Developing': 'badge badge-rounded-md purple white-text',
  'Assigned': 'badge badge-rounded-md purple white-text',
  'Exemplary': 'badge badge-rounded-md blue accent-4 white-text'
};
var graphColorMap = {
  'Developing': '#c10078',
  'Assigned': '#c10078',
  'Exemplary': '#0064f4'
};
var testSectionSubjectMap = {
  'Reading': 'reading',
  'Writing': 'writing',
  'Math': 'math'
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

/***/ "./pages/classes.js":
/*!**************************!*\
  !*** ./pages/classes.js ***!
  \**************************/
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
/* harmony import */ var _components_Class_components_ClassNavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Class/components/ClassNavBar */ "./components/Class/components/ClassNavBar/index.js");
/* harmony import */ var _components_Class_TestSectionsPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Class/TestSectionsPage */ "./components/Class/TestSectionsPage/index.js");









 // eslint-disable-next-line react/prefer-stateless-function

var Classes =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Classes, _Component);

  function Classes(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Classes);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Classes).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetActivePage", function (active) {
      return _this.setState({
        active: active
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderCurrentPage", function () {
      var active = _this.state.active;

      if (active === 'testSections') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Class_TestSectionsPage__WEBPACK_IMPORTED_MODULE_9__["default"], null);
      }

      return null;
    });

    _this.state = {
      active: 'testSections'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Classes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-holder grey lighten-5 switcher-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
        className: "breadcrumb"
      }, "< Classes"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "h1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-members"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-block"
      }, "Some Class in June"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Class_components_ClassNavBar__WEBPACK_IMPORTED_MODULE_8__["default"], null)), this.renderCurrentPage()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "add-btn-block dropdown-small"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger waves-effect waves-teal btn add-btn",
        "data-target": "dropdown_assign_selected"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), " Assign Test Section"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown_assign_selected",
        className: "dropdown-content dropdown-small"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "From Saved")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Create New"))))));
    }
  }]);

  return Classes;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Classes);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/classes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrischavarro/clear-choice/clear-choice-admin/pages/classes.js */"./pages/classes.js");


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

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

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
//# sourceMappingURL=classes.js.map