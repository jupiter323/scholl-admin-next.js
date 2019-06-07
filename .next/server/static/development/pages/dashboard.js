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

/***/ "./components/Dashboard/components/CalendarHeader/index.js":
/*!*****************************************************************!*\
  !*** ./components/Dashboard/components/CalendarHeader/index.js ***!
  \*****************************************************************/
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/dateAndCalendarUtils */ "./components/Dashboard/utils/dateAndCalendarUtils.js");








 // eslint-disable-next-line react/prefer-stateless-function

var CalendarHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CalendarHeader, _React$Component);

  function CalendarHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CalendarHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CalendarHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CalendarHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeMonth = _this$props.activeMonth,
          onSetActiveMonth = _this$props.onSetActiveMonth;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "calendar-header",
        style: {
          zIndex: '9'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "calendar-view-switcher"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "switcher"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active col",
        "data-view": "view-month"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "Month View")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "col",
        "data-view": "view-day"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "Day View")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav-slick-calendar",
        style: {
          opacity: '1'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_7___default.a, {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_8__["currentMonthIndex"],
        onInit: function onInit() {
          return onSetActiveMonth(_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_8__["currentMonthIndex"]);
        },
        afterChange: onSetActiveMonth,
        nextArrow: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_8__["calendarMap"][activeMonth + 2]),
        prevArrow: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_8__["calendarMap"][activeMonth])
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "January"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "February"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "March"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "April"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "May"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "June"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "July"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "August"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "September"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "October"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "November"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slide"
      }, "December"))));
    }
  }]);

  return CalendarHeader;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

CalendarHeader.propTypes = {
  activeMonth: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  onSetActiveMonth: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarHeader);

/***/ }),

/***/ "./components/Dashboard/components/CalendarRow/index.js":
/*!**************************************************************!*\
  !*** ./components/Dashboard/components/CalendarRow/index.js ***!
  \**************************************************************/
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
/* harmony import */ var _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/dateAndCalendarUtils */ "./components/Dashboard/utils/dateAndCalendarUtils.js");








/* eslint-disable react/no-array-index-key */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */




var CalendarRow =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CalendarRow, _React$Component);

  function CalendarRow() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CalendarRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CalendarRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAssignSessionModal", function (event, date) {
      event.preventDefault();
      var _this$props = _this.props,
          onToggleAssignSessionModal = _this$props.onToggleAssignSessionModal,
          onToggleAddDropdown = _this$props.onToggleAddDropdown;
      onToggleAssignSessionModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAssignLessonsModal", function (event, date) {
      event.preventDefault();
      var _this$props2 = _this.props,
          onToggleAssignLessonsModal = _this$props2.onToggleAssignLessonsModal,
          onToggleAddDropdown = _this$props2.onToggleAddDropdown;
      onToggleAssignLessonsModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAssignWorksheetsModal", function (event, date) {
      event.preventDefault();
      var _this$props3 = _this.props,
          onToggleAssignWorksheetsModal = _this$props3.onToggleAssignWorksheetsModal,
          onToggleAddDropdown = _this$props3.onToggleAddDropdown;
      onToggleAssignWorksheetsModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAssignTestSectionModal", function (event, date) {
      event.preventDefault();
      var _this$props4 = _this.props,
          onToggleAssignTestSectionModal = _this$props4.onToggleAssignTestSectionModal,
          onToggleAddDropdown = _this$props4.onToggleAddDropdown;
      onToggleAssignTestSectionModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAssignSimulatedSatModal", function (event, date) {
      event.preventDefault();
      var _this$props5 = _this.props,
          onToggleAssignSimulatedSatModal = _this$props5.onToggleAssignSimulatedSatModal,
          onToggleAddDropdown = _this$props5.onToggleAddDropdown;
      onToggleAssignSimulatedSatModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapDateLessons", function (shouldMapLessons, lessons) {
      if (shouldMapLessons) {
        return lessons.map(function (lesson, index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, lesson.completed && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "event-check lesson-check"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "icon-check02"
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "event event-lesson-box"
          }, lesson.title));
        });
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapDateWorksheets", function (shouldMapWorksheets, worksheets) {
      if (shouldMapWorksheets) {
        return worksheets.map(function (worksheet, index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, worksheet.completed && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "event-check worksheet-check"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "icon-check02"
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "event event-worksheet-box"
          }, worksheet.title));
        });
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapTestSections", function (shouldMapTestSections, testSections) {
      if (shouldMapTestSections) {
        return testSections.map(function (testSection, index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "event event-test-box"
          }, "Test Section: ", testSection.version));
        });
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapSimulatedSats", function (shouldMapSimulatedSats, simulatedSat) {
      if (shouldMapSimulatedSats) {
        return simulatedSat.map(function (sat, index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "event event-sat-box"
          }, sat.version));
        });
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapRowDates", function () {
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
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            className: "cal-cell1 cal-cell cal-day-outmonth",
            key: dayDate
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: Object(_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_9__["getCalendarDayClassName"])(date, inMonth, activeDateKey)
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "day-date"
          }, dayDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "cal-date"
          }, calDate)));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          key: activeDateKey,
          className: Object(_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_9__["getCalendarCellClassName"])(hasEvents, inActiveColumn),
          onClick: function onClick() {
            return onSetActiveDate(activeDateKey);
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: Object(_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_9__["getCalendarDayClassName"])(date, inMonth, activeDateKey)
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "day-date"
        }, dayDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "cal-date"
        }, calDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "day-collapsible collapsible"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: isActiveDate ? 'collapsible-holder active' : 'collapsible-holder',
          style: {
            transform: 'none'
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "collapsible-header",
          style: {
            display: inActiveColumn && isActiveDate ? 'none' : 'block'
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "fake-close"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "icon-close-thin"
        })), hasEvents ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "events-list events-list-short"
        }, shouldMapSessions ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "event-frame event-title"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event-title-box"
        }, "Session ", sessions.length)) : null, shouldMapLessons ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "event-frame"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event event-lesson-box"
        }, " ", lessons.length, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event-text"
        }, "Lesson", lessons.length > 1 && 's'))) : null, shouldMapWorksheets ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "event-frame"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event event-worksheet-box"
        }, worksheets.length, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event-text"
        }, "Worksheet", worksheets.length > 1 && 's'))) : null, shouldMapTestSections ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "event-frame"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event event-test-box"
        }, testSections.length, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event-text"
        }, "Test Section", testSections.length > 1 && 's'))) : null, shouldMapSimulatedSats ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "event-frame"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event event-sat-box"
        }, simulatedSat.length, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "event-text"
        }, "Simulated SAT"))) : null) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "collapsible-body",
          style: {
            opacity: inActiveColumn && isActiveDate ? '1' : '0',
            visibility: inActiveColumn ? 'visible' : 'hidden'
          }
        }, hasEvents ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "events-list"
        }, shouldMapSessions && sessions.map(function (session, index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "event-frame",
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "event-title-box"
          }, session.title));
        }), _this.mapDateLessons(shouldMapLessons, lessons), _this.mapDateWorksheets(shouldMapWorksheets, worksheets), _this.mapTestSections(shouldMapTestSections, testSections), _this.mapSimulatedSats(shouldMapSimulatedSats, simulatedSat)) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "day-footer"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "links-list"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          "data-target": "dropdown_day_240119_add",
          onClick: onToggleAddDropdown,
          className: "link-add dropdown-trigger waves-effect waves-teal"
        }, "Add"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          id: "dropdown_day_240119_add",
          className: "dropdown-content",
          style: {
            display: addDropdownOpen ? 'block' : 'none',
            opacity: addDropdownOpen ? '100' : '0'
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignSessionModal(event, date);
          },
          className: "modal-trigger"
        }, "Session")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignLessonsModal(event, date);
          },
          className: "modal-trigger"
        }, "Lesson")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignWorksheetsModal(event, date);
          },
          className: "modal-trigger"
        }, "Worksheet")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignTestSectionModal(event, date);
          },
          className: "modal-trigger"
        }, "Test Section")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            return _this.toggleAssignSimulatedSatModal(event, date);
          },
          className: "modal-trigger"
        }, "Simulated SAT")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          "data-target": "dropdown_day_240119_delete",
          onClick: onToggleDeleteDropdown,
          className: "link-delete dropdown-trigger waves-effect waves-teal"
        }, "Delete"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          id: "dropdown_day_240119_delete",
          className: "dropdown-content",
          style: {
            display: deleteDropdownOpen ? 'block' : 'none',
            opacity: deleteDropdownOpen ? '100' : '0'
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#modal_edit_delete_section",
          className: "modal-trigger"
        }, "Session")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#modal_edit_delete_lesson",
          className: "modal-trigger"
        }, "Lesson")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#modal_edit_delete_worksheet",
          className: "modal-trigger"
        }, "Worksheet")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#modal_edit_delete_test_section",
          className: "modal-trigger"
        }, "Test Section")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!",
          className: "disabled"
        }, "Simulated SAT")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!",
          className: "disabled"
        }, "Target Test")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#!"
        }, "All")))))))))));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CalendarRow, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "cal-row-fluid"
      }, this.mapRowDates());
    }
  }]);

  return CalendarRow;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

CalendarRow.propTypes = {
  activeDate: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  activeColumn: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  rows: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  eventFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  onSetActiveDate: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  addDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  deleteDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onToggleAddDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onToggleDeleteDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onToggleAssignSessionModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onToggleAssignLessonsModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onToggleAssignWorksheetsModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onToggleAssignTestSectionModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onToggleAssignSimulatedSatModal: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarRow);

/***/ }),

/***/ "./components/Dashboard/components/FilterSection/index.js":
/*!****************************************************************!*\
  !*** ./components/Dashboard/components/FilterSection/index.js ***!
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

    _this.state = {
      open: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterSection, [{
    key: "render",
    value: function render() {
      var open = this.state.open;
      var _this$props = this.props,
          filters = _this$props.filters,
          eventFilters = _this$props.eventFilters,
          onClearFilters = _this$props.onClearFilters,
          handleFilterClick = _this$props.handleFilterClick;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "calendar-filter filter-form-holder"
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
        id: "className",
        name: "className",
        checked: filters.indexOf('className') !== -1,
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "className"
      }, "Some Class Name")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "tutoring",
        name: "tutoring",
        checked: filters.indexOf('tutoring') !== -1,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "tutoring"
      }, "Tutoring"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "sessions",
        name: "sessions",
        checked: eventFilters.indexOf('sessions') !== -1,
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          return handleFilterClick(target.name, true);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "sessions"
      }, "Sessions")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "lessons",
        name: "lessons",
        checked: eventFilters.indexOf('lessons') !== -1,
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          return handleFilterClick(target.name, true);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "lessons"
      }, "Lessons"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "worksheets",
        name: "worksheets",
        checked: eventFilters.indexOf('worksheets') !== -1,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return handleFilterClick(target.name, true);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "worksheets"
      }, "Worksheets")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "testSections",
        name: "testSections",
        checked: eventFilters.indexOf('testSections') !== -1,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return handleFilterClick(target.name, true);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "testSections"
      }, "Test Sections")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "simulatedSats",
        name: "simulatedSats",
        checked: eventFilters.indexOf('simulatedSats') !== -1,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return handleFilterClick(target.name, true);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "simulatedSats"
      }, "Simulated SATs")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "targetTests",
        name: "targetTests",
        checked: eventFilters.indexOf('targetTests') !== -1,
        onChange: function onChange(_ref9) {
          var target = _ref9.target;
          return handleFilterClick(target.name, true);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "targetTests"
      }, "Target Tests"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueToday",
        name: "dueToday",
        checked: filters.indexOf('dueToday') !== -1,
        onChange: function onChange(_ref10) {
          var target = _ref10.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueToday"
      }, "Due Today")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueNextSession",
        name: "dueNextSession",
        checked: filters.indexOf('dueNextSession') !== -1,
        onChange: function onChange(_ref11) {
          var target = _ref11.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueNextSession"
      }, "Due By Next Session")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "dueThisWeek",
        name: "dueThisWeek",
        checked: filters.indexOf('dueThisWeek') !== -1,
        onChange: function onChange(_ref12) {
          var target = _ref12.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dueThisWeek"
      }, "Due this Week")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "overdue",
        name: "overdue",
        checked: filters.indexOf('overdue') !== -1,
        onChange: function onChange(_ref13) {
          var target = _ref13.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "overdue"
      }, "Overdue"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "complete",
        name: "complete",
        checked: filters.indexOf('complete') !== -1,
        onChange: function onChange(_ref14) {
          var target = _ref14.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "complete"
      }, "Complete")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "incomplete",
        name: "incomplete",
        checked: filters.indexOf('incomplete') !== -1,
        onChange: function onChange(_ref15) {
          var target = _ref15.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "incomplete"
      }, "Incomplete")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "future",
        name: "future",
        checked: filters.indexOf('future') !== -1,
        onChange: function onChange(_ref16) {
          var target = _ref16.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "future"
      }, "Future"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "reading",
        name: "reading",
        checked: filters.indexOf('reading') !== -1,
        onChange: function onChange(_ref17) {
          var target = _ref17.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "reading"
      }, "Reading")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "writing",
        name: "writing",
        checked: filters.indexOf('writing') !== -1,
        onChange: function onChange(_ref18) {
          var target = _ref18.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "writing"
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "math",
        name: "math",
        checked: filters.indexOf('math') !== -1,
        onChange: function onChange(_ref19) {
          var target = _ref19.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "math"
      }, "Math"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "beginning",
        name: "beginning",
        checked: filters.indexOf('beginning') !== -1,
        onChange: function onChange(_ref20) {
          var target = _ref20.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "beginning"
      }, "Beginning")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "developing",
        name: "developing",
        checked: filters.indexOf('developing') !== -1,
        onChange: function onChange(_ref21) {
          var target = _ref21.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "developing"
      }, "Developing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "accomplished",
        name: "accomplished",
        checked: filters.indexOf('accomplished') !== -1,
        onChange: function onChange(_ref22) {
          var target = _ref22.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "accomplished"
      }, "Accomplished")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "exemplary",
        name: "exemplary",
        checked: filters.indexOf('exemplary') !== -1,
        onChange: function onChange(_ref23) {
          var target = _ref23.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "exemplary"
      }, "Exemplary"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "hasReviewFlags",
        name: "hasReviewFlags",
        checked: filters.indexOf('hasReviewFlags') !== -1,
        onChange: function onChange(_ref24) {
          var target = _ref24.target;
          return handleFilterClick(target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "hasReviewFlags"
      }, "Has Review Flags"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-flex-end"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l8"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-filters"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "option-item clear"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: onClearFilters
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
  filters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  eventFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  onClearFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  handleFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js":
/*!****************************************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js ***!
  \****************************************************************************************************/
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
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");








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
        titleFilter: '',
        unitFilter: ''
      }, _this.props.onClearFilters);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchChange", function (_ref2) {
      var target = _ref2.target;
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, target.name, target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitSearchFilter", function (searchType) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterSection, [{
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
        id: "Reading",
        name: "Reading",
        checked: subjectFilters.indexOf('Reading') !== -1,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "Reading"
      }, "Reading")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "Writing",
        name: "Writing",
        checked: subjectFilters.indexOf('Writing') !== -1,
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "Writing"
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "Math",
        name: "Math",
        checked: subjectFilters.indexOf('Math') !== -1,
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "Math"
      }, "Math"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "challenge",
        name: "challenge",
        checked: typeFilters.indexOf('challenge') !== -1,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return handleFilterClick('type', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "challenge"
      }, "Challenge + Practice")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "homework",
        name: "homework",
        checked: typeFilters.indexOf('homework') !== -1,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return handleFilterClick('type', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "homework"
      }, "Homework Drill")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "readingFromWorkbook",
        name: "readingFromWorkbook",
        checked: typeFilters.indexOf('readingFromWorkbook') !== -1,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return handleFilterClick('type', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "readingFromWorkbook"
      }, "Reading from Workbook")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        id: "titleFilter",
        name: "titleFilter",
        className: "input-control validate",
        value: titleFilter,
        onChange: this.handleSearchChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.submitSearchFilter('titleFilter');
        },
        className: "search-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: titleFilter.length ? 'label active' : 'label',
        htmlFor: "titleFilter"
      }, "Search By Title"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        id: "unitFilter",
        name: "unitFilter",
        className: "input-control validate",
        value: unitFilter,
        onChange: this.handleSearchChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.submitSearchFilter('unitFilter');
        },
        className: "search-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: unitFilter.length ? 'label active' : 'label',
        htmlFor: "unitFilter"
      }, "Search By Unit"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field",
        style: {
          marginBottom: '0',
          marginTop: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__["default"])(sort, sortByOptions),
        onChange: onSetSort,
        options: sortByOptions,
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
        className: "active",
        "data-view": "view-full"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Month View")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        "data-view": "view-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Day View"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
  typeFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  onClearFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  subjectFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  handleFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js":
/*!*************************************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js ***!
  \*************************************************************************************************/
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










var LessonCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LessonCard, _React$Component);

  function LessonCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LessonCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "editLesson", function () {
      return console.warn('Pending implementation of edit modal/functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cloneLesson", function () {
      return console.warn('Pending implementation of clone lesson functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showOwner", function () {
      return console.warn('Pending implementation of show owner functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteLesson", function () {
      return console.warn('Pending implementation of delete lesson functionality');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessonCard, [{
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-checkbox"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        checked: selectedLessons.indexOf(lesson) !== -1,
        onChange: function onChange() {
          return handleLessonClick(lesson);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "checkbox-card card-main card-lesson-detail card-assigned card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel",
        style: {
          backgroundColor: '#666',
          color: '#fff'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon-col col s2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-books-l"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-icon"
      }, "Lesson"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-small"
      }, unit), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-large"
      }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-small"
      }, "Subject: ", subject))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "align-top col s1 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger btn",
        "data-target": "dropdown_lesson_01",
        onClick: this.handleDropdownClick
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown_lesson_01",
        className: "dropdown-content dropdown-wide",
        style: {
          display: 'block',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.editLesson,
        className: "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.cloneLesson
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.showOwner
      }, "Show Owner")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.deleteLesson
      }, "Delete"))) : null))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "svg-curved-bar",
        "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
        "data-duration": "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        width: "110px",
        height: "110px",
        viewBox: " 0 0 110 110"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        fill: "none",
        style: {
          strokeWidth: '22',
          stroke: '#d6d6d6'
        },
        d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        "data-dinamic": true,
        fill: "none",
        style: {
          strokeWidth: '22',
          stroke: '#62b771'
        },
        d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "chart-value",
        style: {
          backgroundColor: '#4d4d4d'
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Time Est:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, timeEstimate, " min")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Problems:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, problems)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-footer-row center-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-footer-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "p.", pageNumber, "  (", type, ")")))))));
    }
  }]);

  return LessonCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
LessonCard.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  lesson: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  selectedLessons: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  handleLessonClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LessonCard);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignLessonModal/index.js":
/*!***************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignLessonModal/index.js ***!
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
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js");
/* harmony import */ var _components_LessonCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/LessonCard */ "./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js");
/* harmony import */ var _utils_sampleLessons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/sampleLessons */ "./components/Dashboard/utils/sampleLessons.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/sortOptions */ "./components/Dashboard/utils/sortOptions.js");

















var lessonTypeMap = {
  'Challenge + Practice': 'challenge',
  'Homework Drill': 'homework',
  'Reading from Workbook': 'readingFromWorkbook'
};

var AssignLessonModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AssignLessonModal, _React$Component);

  function AssignLessonModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssignLessonModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AssignLessonModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleAssignSelectedDropdown", function () {
      return _this.setState(function (_ref) {
        var assignSelectedDropdownOpen = _ref.assignSelectedDropdownOpen;
        return {
          assignSelectedDropdownOpen: !assignSelectedDropdownOpen
        };
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onResetModal", function () {
      return _this.setState({
        subjectFilters: [],
        typeFilters: [],
        sort: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredState", function (titleFilter, value) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, titleFilter, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredState", function (titleFilter) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, titleFilter, ''));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSortLessons", function (lessons) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'pageNumber':
          return lessons.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_16__["pageNumberSort"]);

        case 'problems':
          return lessons.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_16__["problemSort"]);

        case 'timeEstimate':
          return lessons.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_16__["timeEstimateSort"]);

        case 'subject':
          return lessons.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_16__["subjectSort"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByTitle", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByUnit", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterLessons", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMappableLessons", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilterClick", function (filterType, filter) {
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
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        var filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, modifiedFilterName, modifiedFilterUpdatedState));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleLessonClick", function (lesson) {
      var selectedLessons = _this.state.selectedLessons;
      var modifiedLessons;

      if (selectedLessons.indexOf(lesson) === -1) {
        modifiedLessons = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(selectedLessons, {
          $push: [lesson]
        });
      } else {
        var lessonIndex = selectedLessons.indexOf(lesson);
        modifiedLessons = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(selectedLessons, {
          $splice: [[lessonIndex, 1]]
        });
      }

      _this.setState({
        selectedLessons: modifiedLessons
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "assignLessons", function (date) {
      var onAssignLessons = _this.props.onAssignLessons;
      var selectedLessons = _this.state.selectedLessons;
      var assignDate;

      switch (date) {
        case 'today':
          assignDate = moment__WEBPACK_IMPORTED_MODULE_11___default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = moment__WEBPACK_IMPORTED_MODULE_11___default()().add(1, 'days').format('MM/DD/YY');
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapLessons", function () {
      return _this.getMappableLessons().map(function (lesson, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_LessonCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lessons: _utils_sampleLessons__WEBPACK_IMPORTED_MODULE_15__["default"],
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssignLessonModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var _this$state6 = this.state,
          assignSelectedDropdownOpen = _this$state6.assignSelectedDropdownOpen,
          subjectFilters = _this$state6.subjectFilters,
          typeFilters = _this$state6.typeFilters,
          sort = _this$state6.sort;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_assign_lesson",
        style: {
          zIndex: '1003'
        },
        className: "jsx-2666520574" + " " + "modal-page modal modal-custom"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-modal card-main card switcher-section grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "header-row card-panel light-blue lighten-1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "col s11"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "icon-col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "icon-books-l"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-panel-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "text-large"
      }, "Assign Lessons")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "col s1 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-2666520574" + " " + "modal-close close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "icon-close-thin"
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_FilterSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        sort: sort,
        typeFilters: typeFilters,
        subjectFilters: subjectFilters,
        onSetSort: this.onSetSort,
        onClearFilters: this.onResetModal,
        handleFilterClick: this.handleFilterClick,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "result-row center-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-2666520574" + " " + "result"
      }, " - ", this.getMappableLessons().length, " results -")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "checkboxes-section row d-flex-content card-width-322"
      }, this.mapLessons())))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "add-btn-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignSelectedDropdown,
        "data-target": "dropdown_assign_selected_lessons",
        className: "jsx-2666520574" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "material-icons"
      }, "add"), " Assign Selected"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown_assign_selected_lessons",
        style: {
          display: assignSelectedDropdownOpen ? 'block' : '0',
          opacity: assignSelectedDropdownOpen ? '1' : '0'
        },
        className: "jsx-2666520574" + " " + 'dropdown-content'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2666520574"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignLessons('today');
        },
        className: "jsx-2666520574"
      }, "For Today")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2666520574"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignLessons('tomorrow');
        },
        className: "jsx-2666520574"
      }, "For Tomorrow")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2666520574"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignLessons('nextSession');
        },
        className: "jsx-2666520574"
      }, "For Next Session")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2666520574"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignLessons('customDate');
        },
        className: "jsx-2666520574"
      }, "For Date...")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2666520574"
      }, ".card-modal.jsx-2666520574{margin:0;border-radius:6px;}.wrapper.jsx-2666520574{min-height:0px;}.modal-custom.jsx-2666520574{opacity:1;visibility:visible;}.modal-footer.jsx-2666520574{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25MZXNzb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzUlcsQUFHd0IsQUFJTSxBQUdMLEFBSWEsU0FWTCxDQU9DLEtBSHJCLFFBT0EsSUFWQSxFQU9BIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25MZXNzb25Nb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi8uLi9Qb3J0YWwnO1xuXG5pbXBvcnQgRmlsdGVyU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyU2VjdGlvbic7XG5pbXBvcnQgTGVzc29uQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvTGVzc29uQ2FyZCc7XG5pbXBvcnQgc2FtcGxlTGVzc29ucyBmcm9tICcuLi8uLi8uLi91dGlscy9zYW1wbGVMZXNzb25zJztcbmltcG9ydCB7IHBhZ2VOdW1iZXJTb3J0LCBwcm9ibGVtU29ydCwgdGltZUVzdGltYXRlU29ydCwgc3ViamVjdFNvcnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zb3J0T3B0aW9ucyc7XG5cbmNvbnN0IGxlc3NvblR5cGVNYXAgPSB7XG4gICdDaGFsbGVuZ2UgKyBQcmFjdGljZSc6ICdjaGFsbGVuZ2UnLFxuICAnSG9tZXdvcmsgRHJpbGwnOiAnaG9tZXdvcmsnLFxuICAnUmVhZGluZyBmcm9tIFdvcmtib29rJzogJ3JlYWRpbmdGcm9tV29ya2Jvb2snLFxufTtcblxuY2xhc3MgQXNzaWduTGVzc29uTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29ydDogJycsXG4gICAgICB1bml0RmlsdGVyOiAnJyxcbiAgICAgIHRpdGxlRmlsdGVyOiAnJyxcbiAgICAgIHR5cGVGaWx0ZXJzOiBbXSxcbiAgICAgIHN1YmplY3RGaWx0ZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkTGVzc29uczogW10sXG4gICAgICBsZXNzb25zOiBzYW1wbGVMZXNzb25zLFxuICAgICAgZHJvcGRvd25JbmRleDogbnVsbCxcbiAgICAgIGRyb3Bkb3duSXNPcGVuOiBmYWxzZSxcbiAgICAgIGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb25Ub2dnbGVBc3NpZ25TZWxlY3RlZERyb3Bkb3duID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSgoeyBhc3NpZ25TZWxlY3RlZERyb3Bkb3duT3BlbiB9KSA9PiAoeyBhc3NpZ25TZWxlY3RlZERyb3Bkb3duT3BlbjogIWFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuIH0pKVxuXG4gIG9uU2V0RHJvcGRvd24gPSAoZHJvcGRvd25JbmRleCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duSW5kZXgsIGRyb3Bkb3duSXNPcGVuOiB0cnVlIH0pO1xuICBvbkNsb3NlRHJvcGRvd24gPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25Jc09wZW46IGZhbHNlIH0pO1xuXG4gIG9uUmVzZXRNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzdWJqZWN0RmlsdGVyczogW10sIHR5cGVGaWx0ZXJzOiBbXSwgc29ydDogJycgfSlcbiAgb25TZXRTb3J0ID0gKHNvcnQpID0+IHRoaXMuc2V0U3RhdGUoeyBzb3J0IH0pXG5cbiAgb25TZXRGaWx0ZXJlZFN0YXRlID0gKHRpdGxlRmlsdGVyLCB2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFt0aXRsZUZpbHRlcl06IHZhbHVlIH0pXG4gIG9uVW5zZXRGaWx0ZXJlZFN0YXRlID0gKHRpdGxlRmlsdGVyKSA9PiB0aGlzLnNldFN0YXRlKHsgW3RpdGxlRmlsdGVyXTogJycgfSlcblxuICBvbkNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2xvc2UoKTtcbiAgICB0aGlzLm9uUmVzZXRNb2RhbCgpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIG9uU29ydExlc3NvbnMgPSAobGVzc29ucykgPT4ge1xuICAgIGNvbnN0IHsgc29ydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBzd2l0Y2ggKHNvcnQpIHtcbiAgICAgIGNhc2UgJ3BhZ2VOdW1iZXInOlxuICAgICAgICByZXR1cm4gbGVzc29ucy5zb3J0KHBhZ2VOdW1iZXJTb3J0KTtcbiAgICAgIGNhc2UgJ3Byb2JsZW1zJzpcbiAgICAgICAgcmV0dXJuIGxlc3NvbnMuc29ydChwcm9ibGVtU29ydCk7XG4gICAgICBjYXNlICd0aW1lRXN0aW1hdGUnOlxuICAgICAgICByZXR1cm4gbGVzc29ucy5zb3J0KHRpbWVFc3RpbWF0ZVNvcnQpO1xuICAgICAgY2FzZSAnc3ViamVjdCc6XG4gICAgICAgIHJldHVybiBsZXNzb25zLnNvcnQoc3ViamVjdFNvcnQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25GaWx0ZXJCeVRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbGVzc29ucywgdGl0bGVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIGxlc3NvbnMucmVkdWNlKChmaW5hbEFyciwgY3VycmVudExlc3NvbikgPT4ge1xuICAgICAgY29uc3QgeyB0aXRsZSB9ID0gY3VycmVudExlc3NvbjtcbiAgICAgIGNvbnN0IGxlc3NvblN0cmluZyA9IHRpdGxlLnJlcGxhY2UoL1xccy9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGxlc3NvblN0cmluZy5pbmRleE9mKHRpdGxlRmlsdGVyKSAhPT0gLTEgJiYgZmluYWxBcnIuaW5kZXhPZihjdXJyZW50TGVzc29uKSA9PT0gLTEpIHtcbiAgICAgICAgZmluYWxBcnIucHVzaChjdXJyZW50TGVzc29uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5hbEFycjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBvbkZpbHRlckJ5VW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxlc3NvbnMsIHVuaXRGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIGxlc3NvbnMucmVkdWNlKChmaW5hbEFyciwgY3VycmVudExlc3NvbikgPT4ge1xuICAgICAgY29uc3QgeyB1bml0IH0gPSBjdXJyZW50TGVzc29uO1xuICAgICAgY29uc3QgbGVzc29uU3RyaW5nID0gdW5pdC5yZXBsYWNlKC9cXHMvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChsZXNzb25TdHJpbmcuaW5kZXhPZih1bml0RmlsdGVyKSAhPT0gLTEgJiYgZmluYWxBcnIuaW5kZXhPZihjdXJyZW50TGVzc29uKSA9PT0gLTEpIHtcbiAgICAgICAgZmluYWxBcnIucHVzaChjdXJyZW50TGVzc29uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5hbEFycjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBvbkZpbHRlckxlc3NvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzdWJqZWN0RmlsdGVycywgdHlwZUZpbHRlcnMsIGxlc3NvbnM6IGFsbExlc3NvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGxlc3NvbnMgPSBhbGxMZXNzb25zO1xuICAgIGlmIChzdWJqZWN0RmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIGxlc3NvbnMgPSBsZXNzb25zLmZpbHRlcihsZXNzb24gPT4gc3ViamVjdEZpbHRlcnMuaW5kZXhPZihsZXNzb24uc3ViamVjdCkgIT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHR5cGVGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgbGVzc29ucyA9IGxlc3NvbnMuZmlsdGVyKGxlc3NvbiA9PiB0eXBlRmlsdGVycy5pbmRleE9mKGxlc3NvblR5cGVNYXBbbGVzc29uLnR5cGVdKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gbGVzc29ucztcbiAgfVxuXG4gIGdldE1hcHBhYmxlTGVzc29ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN1YmplY3RGaWx0ZXJzLCB0eXBlRmlsdGVycywgc29ydCwgdW5pdEZpbHRlciwgdGl0bGVGaWx0ZXIsIGxlc3NvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG1hcHBhYmxlTGVzc29ucyA9IGxlc3NvbnM7XG4gICAgaWYgKHRpdGxlRmlsdGVyLmxlbmd0aCkge1xuICAgICAgbWFwcGFibGVMZXNzb25zID0gdGhpcy5vbkZpbHRlckJ5VGl0bGUoKTtcbiAgICB9XG4gICAgaWYgKHVuaXRGaWx0ZXIubGVuZ3RoKSB7XG4gICAgICBtYXBwYWJsZUxlc3NvbnMgPSB0aGlzLm9uRmlsdGVyQnlVbml0KCk7XG4gICAgfVxuICAgIGlmIChzdWJqZWN0RmlsdGVycy5sZW5ndGggfHwgdHlwZUZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICBtYXBwYWJsZUxlc3NvbnMgPSB0aGlzLm9uRmlsdGVyTGVzc29ucygpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcmV0dXJuIHRoaXMub25Tb3J0TGVzc29ucyhtYXBwYWJsZUxlc3NvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwcGFibGVMZXNzb25zO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2xpY2sgPSAoZmlsdGVyVHlwZSwgZmlsdGVyKSA9PiB7XG4gICAgY29uc3QgeyBzdWJqZWN0RmlsdGVyczogY3VycmVudFN1YmplY3RGaWx0ZXJzLCB0eXBlRmlsdGVyczogY3VycmVudFR5cGVGaWx0ZXJzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZTtcbiAgICBsZXQgbW9kaWZpZWRGaWx0ZXJOYW1lO1xuICAgIGxldCBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZTtcbiAgICBzd2l0Y2ggKGZpbHRlclR5cGUpIHtcbiAgICAgIGNhc2UgJ3N1YmplY3QnOlxuICAgICAgICBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdWJqZWN0RmlsdGVycztcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJOYW1lID0gJ3N1YmplY3RGaWx0ZXJzJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJDdXJyZW50U3RhdGUgPSBjdXJyZW50VHlwZUZpbHRlcnM7XG4gICAgICAgIG1vZGlmaWVkRmlsdGVyTmFtZSA9ICd0eXBlRmlsdGVycyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZS5pbmRleE9mKGZpbHRlcikgPT09IC0xKSB7XG4gICAgICBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZShtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSwge1xuICAgICAgICAkcHVzaDogW2ZpbHRlcl0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVySW5kZXggPSBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZS5pbmRleE9mKGZpbHRlcik7XG4gICAgICBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZShtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSwge1xuICAgICAgICAkc3BsaWNlOiBbWyBmaWx0ZXJJbmRleCwgMSBdXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgW21vZGlmaWVkRmlsdGVyTmFtZV06IG1vZGlmaWVkRmlsdGVyVXBkYXRlZFN0YXRlIH0pO1xuICB9XG5cbiAgaGFuZGxlTGVzc29uQ2xpY2sgPSAobGVzc29uKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZExlc3NvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG1vZGlmaWVkTGVzc29ucztcbiAgICBpZiAoc2VsZWN0ZWRMZXNzb25zLmluZGV4T2YobGVzc29uKSA9PT0gLTEpIHtcbiAgICAgIG1vZGlmaWVkTGVzc29ucyA9IHVwZGF0ZShzZWxlY3RlZExlc3NvbnMsIHtcbiAgICAgICAgJHB1c2g6IFtsZXNzb25dLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlc3NvbkluZGV4ID0gc2VsZWN0ZWRMZXNzb25zLmluZGV4T2YobGVzc29uKTtcbiAgICAgIG1vZGlmaWVkTGVzc29ucyA9IHVwZGF0ZShzZWxlY3RlZExlc3NvbnMsIHtcbiAgICAgICAgJHNwbGljZTogW1sgbGVzc29uSW5kZXgsIDEgXV0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTGVzc29uczogbW9kaWZpZWRMZXNzb25zIH0pO1xuICB9XG5cbiAgYXNzaWduTGVzc29ucyA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgeyBvbkFzc2lnbkxlc3NvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZExlc3NvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGFzc2lnbkRhdGU7XG4gICAgc3dpdGNoIChkYXRlKSB7XG4gICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgIGFzc2lnbkRhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9tb3Jyb3cnOlxuICAgICAgICBhc3NpZ25EYXRlID0gbW9tZW50KCkuYWRkKDEsICdkYXlzJykuZm9ybWF0KCdNTS9ERC9ZWScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25leHRTZXNzaW9uJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b21EYXRlJzpcbiAgICAgICAgYXNzaWduRGF0ZSA9ICcwMS8wNS8xOSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMub25Ub2dnbGVBc3NpZ25TZWxlY3RlZERyb3Bkb3duKCk7XG4gICAgdGhpcy5vblJlc2V0TW9kYWwoKTtcbiAgICBvbkFzc2lnbkxlc3NvbnMoc2VsZWN0ZWRMZXNzb25zLCBhc3NpZ25EYXRlKTtcbiAgfVxuXG4gIG1hcExlc3NvbnMgPSAoKSA9PiB0aGlzLmdldE1hcHBhYmxlTGVzc29ucygpLm1hcCgobGVzc29uLCBpbmRleCkgPT4gKFxuICAgIDxMZXNzb25DYXJkXG4gICAgICBsZXNzb249e2xlc3Nvbn1cbiAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgIGtleT17bGVzc29uLmlkfVxuICAgICAgb25TZXREcm9wZG93bj17dGhpcy5vblNldERyb3Bkb3dufVxuICAgICAgb25DbG9zZURyb3Bkb3duPXt0aGlzLm9uQ2xvc2VEcm9wZG93bn1cbiAgICAgIGRyb3Bkb3duSW5kZXg9e3RoaXMuc3RhdGUuZHJvcGRvd25JbmRleH1cbiAgICAgIGRyb3Bkb3duSXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duSXNPcGVufVxuICAgICAgaGFuZGxlTGVzc29uQ2xpY2s9e3RoaXMuaGFuZGxlTGVzc29uQ2xpY2t9XG4gICAgICBzZWxlY3RlZExlc3NvbnM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRMZXNzb25zfVxuICAgIC8+XG4gICkpXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuLCBzdWJqZWN0RmlsdGVycywgdHlwZUZpbHRlcnMsIHNvcnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX2Fzc2lnbl9sZXNzb25cIiBjbGFzc05hbWU9XCJtb2RhbC1wYWdlIG1vZGFsIG1vZGFsLWN1c3RvbVwiIHN0eWxlPXt7IHpJbmRleDogJzEwMDMnIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZC1tYWluIGNhcmQgc3dpdGNoZXItc2VjdGlvbiBncmV5IGxpZ2h0ZW4tM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJvdyBjYXJkLXBhbmVsIGxpZ2h0LWJsdWUgbGlnaHRlbi0xIHdoaXRlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYm9va3MtbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxhcmdlXCI+QXNzaWduIExlc3NvbnM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpY29ucy1yb3dcIj48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSBjbG9zZVwiPjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2UtdGhpblwiPjwvaT48L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEZpbHRlclNlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICAgICAgICB0eXBlRmlsdGVycz17dHlwZUZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBzdWJqZWN0RmlsdGVycz17c3ViamVjdEZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBvblNldFNvcnQ9e3RoaXMub25TZXRTb3J0fVxuICAgICAgICAgICAgICAgICAgb25DbGVhckZpbHRlcnM9e3RoaXMub25SZXNldE1vZGFsfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyQ2xpY2s9e3RoaXMuaGFuZGxlRmlsdGVyQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBvblNldEZpbHRlcmVkU3RhdGU9e3RoaXMub25TZXRGaWx0ZXJlZFN0YXRlfVxuICAgICAgICAgICAgICAgICAgb25VbnNldEZpbHRlcmVkU3RhdGU9e3RoaXMub25VbnNldEZpbHRlcmVkU3RhdGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtcm93IGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cInJlc3VsdFwiPiAtIHt0aGlzLmdldE1hcHBhYmxlTGVzc29ucygpLmxlbmd0aH0gcmVzdWx0cyAtPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveGVzLXNlY3Rpb24gcm93IGQtZmxleC1jb250ZW50IGNhcmQtd2lkdGgtMzIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMubWFwTGVzc29ucygpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Ub2dnbGVBc3NpZ25TZWxlY3RlZERyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9J2Ryb3Bkb3duX2Fzc2lnbl9zZWxlY3RlZF9sZXNzb25zJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tdHJpZ2dlciB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4gYWRkLWJ0blwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+IEFzc2lnbiBTZWxlY3RlZFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZHJvcGRvd24tY29udGVudCdcbiAgICAgICAgICAgICAgICAgIGlkPSdkcm9wZG93bl9hc3NpZ25fc2VsZWN0ZWRfbGVzc29ucydcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuID8gJ2Jsb2NrJyA6ICcwJywgb3BhY2l0eTogYXNzaWduU2VsZWN0ZWREcm9wZG93bk9wZW4gPyAnMScgOiAnMCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFzc2lnbkxlc3NvbnMoJ3RvZGF5Jyl9PkZvciBUb2RheTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5hc3NpZ25MZXNzb25zKCd0b21vcnJvdycpfT5Gb3IgVG9tb3Jyb3c8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXNzaWduTGVzc29ucygnbmV4dFNlc3Npb24nKX0+Rm9yIE5leHQgU2Vzc2lvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5hc3NpZ25MZXNzb25zKCdjdXN0b21EYXRlJyl9PkZvciBEYXRlLi4uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuQXNzaWduTGVzc29uTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkFzc2lnbkxlc3NvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NpZ25MZXNzb25Nb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignLessonModal/index.js */"));
    }
  }]);

  return AssignLessonModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

AssignLessonModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onAssignLessons: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignLessonModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignSessionModal/index.js":
/*!****************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignSessionModal/index.js ***!
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

















var AssignSessionModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AssignSessionModal, _React$Component);

  function AssignSessionModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssignSessionModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AssignSessionModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onResetModal", function () {
      return _this.setState({
        date: '',
        startTime: '',
        endTime: '',
        notes: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "assignSession", function () {
      var onAssignSession = _this.props.onAssignSession;
      var _this$state = _this.state,
          unformattedDate = _this$state.date,
          unformattedStartTime = _this$state.startTime,
          unformattedEndTime = _this$state.endTime,
          notes = _this$state.notes;
      var date = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedDate).format('MM/DD/YY');
      var startTime = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedStartTime).format('hh:mm');
      var endTime = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedEndTime).format('hh:mm');
      onAssignSession({
        date: date,
        startTime: startTime,
        endTime: endTime,
        notes: notes,
        title: 'Session'
      });

      _this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDetailsChange", function (_ref) {
      var target = _ref.target;
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, target.name, target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDatePickerChange", function (field, value) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
    });

    _this.state = {
      date: '',
      startTime: '',
      endTime: '',
      notes: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssignSessionModal, [{
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_assign_session",
        className: "jsx-1216404812" + " " + "modal modal-custom modal-calendar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "card-modal card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: '#14b04b',
          color: '#fff'
        },
        className: "jsx-1216404812" + " " + "card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1216404812"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1216404812" + " " + "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1216404812" + " " + "heading-block"
      }, " New Session")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-1216404812" + " " + "panel-link close modal-close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-close-thin"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-calendar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        selected: date,
        className: "full-width",
        dateFormat: "MM/dd/yy",
        id: "date",
        name: "date",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('date', event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "date",
        className: "jsx-1216404812" + " " + ((date ? 'label active' : 'label') || "")
      }, "Date")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "startTime",
        className: "jsx-1216404812" + " " + ((startTime ? 'label active' : 'label') || "")
      }, "Start Time"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1216404812" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "endTime",
        className: "jsx-1216404812" + " " + ((endTime ? 'label active' : 'label') || "")
      }, "End Time")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "input-field input-field-textarea"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        id: "notes",
        name: "notes",
        cols: "40",
        rows: "7",
        value: notes,
        onChange: this.handleDetailsChange,
        className: "jsx-1216404812" + " " + "textarea-scroll"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "notes",
        className: "jsx-1216404812" + " " + ((notes ? 'label active' : 'label') || "")
      }, "Session Notes:"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1216404812" + " " + "modal-footer modal-footer-width"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-1216404812" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.assignSession,
        className: "jsx-1216404812" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Add Session"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1216404812"
      }, ".overlay.jsx-1216404812{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-1216404812{margin:0;border-radius:6px;}.modal.jsx-1216404812{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-1216404812{opacity:1;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25TZXNzaW9uTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEpXLEFBRzhCLEFBU04sQUFJSyxBQVNKLFNBWlEsQ0FhQyxJQVRJLENBYmEsWUFVdEMsRUFhQSxRQVRvQixXQWJaLE1BQ0UsQ0FhQSxPQVpDLENBYUMsUUFaSCxFQWFFLEtBWkcsSUFhNEcsUUFaMUgscUdBYUEiLCJmaWxlIjoiL1ZvbHVtZXMvSEREL1NpdGVzL2NsZWFyY2hvaWNldGVzdHByZXAvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvRGFzaGJvYXJkL2NvbXBvbmVudHMvTW9kYWxzL0Fzc2lnblNlc3Npb25Nb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci1jc3Ntb2R1bGVzLmNzcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuY2xhc3MgQXNzaWduU2Vzc2lvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGU6ICcnLFxuICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgIGVuZFRpbWU6ICcnLFxuICAgICAgbm90ZXM6ICcnLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7IG1vZGFsRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlN0YXRlLmRhdGUgPT09ICcnICYmIG1vZGFsRGF0ZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZTogbmV3IERhdGUobW9kYWxEYXRlKSB9KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0TW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0ZTogJycsIHN0YXJ0VGltZTogJycsIGVuZFRpbWU6ICcnLCBub3RlczogJycgfSlcblxuICBvbkNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2xvc2UoKTtcbiAgICB0aGlzLm9uUmVzZXRNb2RhbCgpO1xuICB9XG5cbiAgYXNzaWduU2Vzc2lvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQXNzaWduU2Vzc2lvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGU6IHVuZm9ybWF0dGVkRGF0ZSwgc3RhcnRUaW1lOiB1bmZvcm1hdHRlZFN0YXJ0VGltZSwgZW5kVGltZTogdW5mb3JtYXR0ZWRFbmRUaW1lLCBub3RlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KHVuZm9ybWF0dGVkRGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWScpO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG1vbWVudCh1bmZvcm1hdHRlZFN0YXJ0VGltZSkuZm9ybWF0KCdoaDptbScpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBtb21lbnQodW5mb3JtYXR0ZWRFbmRUaW1lKS5mb3JtYXQoJ2hoOm1tJyk7XG4gICAgb25Bc3NpZ25TZXNzaW9uKHsgZGF0ZSwgc3RhcnRUaW1lLCBlbmRUaW1lLCBub3RlcywgdGl0bGU6ICdTZXNzaW9uJyB9KTtcbiAgICB0aGlzLm9uUmVzZXRNb2RhbCgpO1xuICB9XG5cbiAgaGFuZGxlRGV0YWlsc0NoYW5nZSA9ICh7IHRhcmdldCB9KSA9PiB0aGlzLnNldFN0YXRlKHsgW3RhcmdldC5uYW1lXTogdGFyZ2V0LnZhbHVlIH0pXG5cbiAgaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRlLCBzdGFydFRpbWUsIGVuZFRpbWUsIG5vdGVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgb25PdXRlckNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9hc3NpZ25fc2Vzc2lvblwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1jYWxlbmRhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxNGIwNGInLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9jazJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ibG9ja1wiPiBOZXcgU2Vzc2lvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCByaWdodC1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwicGFuZWwtbGluayBjbG9zZSBtb2RhbC1jbG9zZVwiPjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2UtdGhpblwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU0vZGQveXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSgnZGF0ZScsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2RhdGUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJkYXRlXCI+RGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNsb2NrMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0VGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVJbnRlcnZhbHM9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImg6bW0gYWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNhcHRpb249XCJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydFRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdzdGFydFRpbWUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdGFydFRpbWUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJzdGFydFRpbWVcIj5TdGFydCBUaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2xvY2syXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kVGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVJbnRlcnZhbHM9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImg6bW0gYWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNhcHRpb249XCJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW5kVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURhdGVQaWNrZXJDaGFuZ2UoJ2VuZFRpbWUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtlbmRUaW1lID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwiZW5kVGltZVwiPkVuZCBUaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGlucHV0LWZpZWxkLXRleHRhcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYS1zY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjQwXCIgcm93cz1cIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e25vdGVzID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwibm90ZXNcIj5TZXNzaW9uIE5vdGVzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciBtb2RhbC1mb290ZXItd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiPkNhbmNlbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuYXNzaWduU2Vzc2lvbn0gY2xhc3NOYW1lPVwibGluay1idG4gd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXRcIj5BZGQgU2Vzc2lvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkFzc2lnblNlc3Npb25Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG1vZGFsRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Bc3NpZ25TZXNzaW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzaWduU2Vzc2lvbk1vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignSessionModal/index.js */"));
    }
  }]);

  return AssignSessionModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

AssignSessionModal.propTypes = {
  modalDate: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onAssignSession: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignSessionModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignSimulatedSatModal/index.js":
/*!*********************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignSimulatedSatModal/index.js ***!
  \*********************************************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker-cssmodules.css */ "./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");



















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

var AssignSimulatedSatModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AssignSimulatedSatModal, _React$Component);

  function AssignSimulatedSatModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssignSimulatedSatModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AssignSimulatedSatModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onResetModal", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "assignSimulatedSat", function () {
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
      var assignDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(unformattedAssignDate).format('MM/DD/YY');
      var assignTime = moment__WEBPACK_IMPORTED_MODULE_11___default()(unformattedAssignTime).format('hh:mm');
      var dueDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(unformattedDueDate).format('MM/DD/YY');
      var dueTime = moment__WEBPACK_IMPORTED_MODULE_11___default()(unformattedDueTime).format('hh:mm');
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDetailsChange", function (event) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event.target) {
        var checkboxName = event.target.name;
        var prevState = _this.state[checkboxName];

        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, checkboxName, !prevState));
      } else {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, event));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSectionsChange", function (event) {
      var sections = _this.state.sections;

      if (sections.indexOf(event.target.name) === -1) {
        var updatedSections = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(sections, {
          $push: [event.target.name]
        });

        _this.setState({
          sections: updatedSections
        });
      } else {
        var sectionIndex = sections.indexOf(event.target.name);

        var _updatedSections = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(sections, {
          $splice: [[sectionIndex, 1]]
        });

        _this.setState({
          sections: _updatedSections
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDatePickerChange", function (field, value) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssignSimulatedSatModal, [{
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_assign_simulated_sat",
        className: "jsx-1100509129" + " " + "modal modal-custom modal-calendar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-modal card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: '#ec3330',
          color: '#fff'
        },
        className: "jsx-1100509129" + " " + "card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-circles"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "heading-block"
      }, " New Scored SAT Test")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-1100509129" + " " + "panel-link close modal-close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-close-thin"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: '0',
          marginTop: '0'
        },
        className: "jsx-1100509129" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_17__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_18__["default"])(version, sampleVersions),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'version');
        },
        options: sampleVersions,
        name: "version",
        label: "Version",
        stateKey: "version",
        dropdownKey: "version"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-calendar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12___default.a, {
        selected: assignDate,
        dateFormat: "MM/dd/yy",
        id: "assignDate",
        name: "assignDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('assignDate', event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "new_test_section_assign_date",
        className: "jsx-1100509129" + " " + ((assignDate ? 'label active' : 'label') || "")
      }, "Assign For"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "assignTime",
        className: "jsx-1100509129" + " " + ((assignTime ? 'label active' : 'label') || "")
      }, "Time")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-calendar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12___default.a, {
        selected: dueDate,
        dateFormat: "MM/dd/yy",
        id: "dueDate",
        name: "dueDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('dueDate', event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "dueDate",
        className: "jsx-1100509129" + " " + ((dueDate ? 'label active' : 'label') || "")
      }, "Due (optional)"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "dueTime",
        className: "jsx-1100509129" + " " + ((dueTime ? 'label active' : 'label') || "")
      }, "Time")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "card-subtitle"
      }, "Sections:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "check-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "Reading",
        id: "reading",
        checked: sections.indexOf('Reading') !== -1,
        onChange: this.handleSectionsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Reading"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "Math (no calc)",
        id: "mathNoCalc",
        checked: sections.indexOf('Math (no calc)') !== -1,
        onChange: this.handleSectionsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Math (no calc)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "Writing",
        id: "writing",
        checked: sections.indexOf('Writing') !== -1,
        onChange: this.handleSectionsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Writing"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "Math (calculator)",
        id: "Math (calculator)",
        checked: sections.indexOf('Math (calculator)') !== -1,
        onChange: this.handleSectionsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Math (calculator)"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "card-note"
      }, "Note: scaled test scores may require combinations of sections")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "allowStudentToEnterAnswers",
        id: "allowStudentToEnterAnswers",
        checked: allowStudentToEnterAnswers,
        onChange: this.handleDetailsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Allow Student to Enter Answers"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "includeScoreInImprovementMetrics",
        id: "includeScoreInImprovementMetrics",
        checked: includeScoreInImprovementMetrics,
        onChange: this.handleDetailsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Include Score in Improvement Metrics"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "timed",
        id: "timed",
        checked: timed,
        onChange: this.handleDetailsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Timed")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-footer modal-footer-width"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-1100509129" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.assignSimulatedSat,
        className: "jsx-1100509129" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1100509129"
      }, ".overlay.jsx-1100509129{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-1100509129{margin:0;border-radius:6px;}.modal.jsx-1100509129{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-1100509129{opacity:1;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25TaW11bGF0ZWRTYXRNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtVVMsQUFHNEIsQUFTTixBQUlLLEFBU0osU0FaUSxDQWFDLElBVEksQ0FiYSxZQVV0QyxFQWFBLFFBVG9CLFdBYlosTUFDRSxDQWFBLE9BWkMsQ0FhQyxRQVpILEVBYUUsS0FaRyxJQWE0RyxRQVoxSCxxR0FhQSIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9EYXNoYm9hcmQvY29tcG9uZW50cy9Nb2RhbHMvQXNzaWduU2ltdWxhdGVkU2F0TW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnaW1tdXRhYmlsaXR5LWhlbHBlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci1jc3Ntb2R1bGVzLmNzcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi8uLi8uLi8uLi9Gb3JtQ29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgZ2V0VmFsdWVGcm9tU3RhdGUgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZ2V0VmFsdWVGcm9tU3RhdGUnO1xuXG5jb25zdCBzYW1wbGVWZXJzaW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAnU0FUIFByYWN0aWNlIFRlc3QgIzEnLFxuICAgIHZhbHVlOiAnU0FUIFByYWN0aWNlIFRlc3QgIzEnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTQVQgUHJhY3RpY2UgVGVzdCAjMicsXG4gICAgdmFsdWU6ICdTQVQgUHJhY3RpY2UgVGVzdCAjMicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1NBVCBQcmFjdGljZSBUZXN0ICMzJyxcbiAgICB2YWx1ZTogJ1NBVCBQcmFjdGljZSBUZXN0ICMzJyxcbiAgfSxcbl07XG5cbmNsYXNzIEFzc2lnblNpbXVsYXRlZFNhdE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZlcnNpb246ICcnLFxuICAgICAgYXNzaWduRGF0ZTogJycsXG4gICAgICBhc3NpZ25UaW1lOiAnJyxcbiAgICAgIGR1ZURhdGU6ICcnLFxuICAgICAgZHVlVGltZTogJycsXG4gICAgICBzZWN0aW9uczogW10sXG4gICAgICBhbGxvd1N0dWRlbnRUb0VudGVyQW5zd2VyczogZmFsc2UsXG4gICAgICBpbmNsdWRlU2NvcmVJbkltcHJvdmVtZW50TWV0cmljczogZmFsc2UsXG4gICAgICB0aW1lZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgbW9kYWxEYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwcmV2U3RhdGUuYXNzaWduRGF0ZSA9PT0gJycgJiYgbW9kYWxEYXRlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhc3NpZ25EYXRlOiBuZXcgRGF0ZShtb2RhbERhdGUpIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzZXRNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyB2ZXJzaW9uOiAnJywgYXNzaWduRGF0ZTogJycsIGFzc2lnblRpbWU6ICcnLCBkdWVEYXRlOiAnJywgZHVlVGltZTogJycsIHNlY3Rpb25zOiBbXSwgYWxsb3dTdHVkZW50VG9FbnRlckFuc3dlcnM6IGZhbHNlLCBpbmNsdWRlU2NvcmVJbkltcHJvdmVtZW50TWV0cmljczogZmFsc2UsIHRpbWVkOiBmYWxzZSB9KVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldE1vZGFsKCk7XG4gIH1cblxuICBhc3NpZ25TaW11bGF0ZWRTYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkFzc2lnblNpbXVsYXRlZFNhdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZlcnNpb24sIGFzc2lnbkRhdGU6IHVuZm9ybWF0dGVkQXNzaWduRGF0ZSwgYXNzaWduVGltZTogdW5mb3JtYXR0ZWRBc3NpZ25UaW1lLCBkdWVEYXRlOiB1bmZvcm1hdHRlZER1ZURhdGUsIGR1ZVRpbWU6IHVuZm9ybWF0dGVkRHVlVGltZSwgc2VjdGlvbnMsIGFsbG93U3R1ZGVudFRvRW50ZXJBbnN3ZXJzLCBpbmNsdWRlU2NvcmVJbkltcHJvdmVtZW50TWV0cmljcywgdGltZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYXNzaWduRGF0ZSA9IG1vbWVudCh1bmZvcm1hdHRlZEFzc2lnbkRhdGUpLmZvcm1hdCgnTU0vREQvWVknKTtcbiAgICBjb25zdCBhc3NpZ25UaW1lID0gbW9tZW50KHVuZm9ybWF0dGVkQXNzaWduVGltZSkuZm9ybWF0KCdoaDptbScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBtb21lbnQodW5mb3JtYXR0ZWREdWVEYXRlKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgY29uc3QgZHVlVGltZSA9IG1vbWVudCh1bmZvcm1hdHRlZER1ZVRpbWUpLmZvcm1hdCgnaGg6bW0nKTtcbiAgICBvbkFzc2lnblNpbXVsYXRlZFNhdCh7IHZlcnNpb24sIGFzc2lnbkRhdGUsIGFzc2lnblRpbWUsIGR1ZURhdGUsIGR1ZVRpbWUsIHNlY3Rpb25zLCBhbGxvd1N0dWRlbnRUb0VudGVyQW5zd2VycywgaW5jbHVkZVNjb3JlSW5JbXByb3ZlbWVudE1ldHJpY3MsIHRpbWVkIH0pO1xuICAgIHRoaXMub25SZXNldE1vZGFsKCk7XG4gIH1cblxuICBoYW5kbGVEZXRhaWxzQ2hhbmdlID0gKGV2ZW50LCBuYW1lID0gbnVsbCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94TmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgY29uc3QgcHJldlN0YXRlID0gdGhpcy5zdGF0ZVtjaGVja2JveE5hbWVdXG4gICAgICB0aGlzLnNldFN0YXRlKHsgW2NoZWNrYm94TmFtZV06ICFwcmV2U3RhdGUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IGV2ZW50IH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlY3Rpb25zQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2VjdGlvbnMuaW5kZXhPZihldmVudC50YXJnZXQubmFtZSkgPT09IC0xKSB7XG4gICAgICBjb25zdCB1cGRhdGVkU2VjdGlvbnMgPSB1cGRhdGUoc2VjdGlvbnMsIHtcbiAgICAgICAgJHB1c2g6IFsgZXZlbnQudGFyZ2V0Lm5hbWUgXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY3Rpb25zOiB1cGRhdGVkU2VjdGlvbnMgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlY3Rpb25JbmRleCA9IHNlY3Rpb25zLmluZGV4T2YoZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgICAgY29uc3QgdXBkYXRlZFNlY3Rpb25zID0gdXBkYXRlKHNlY3Rpb25zLCB7XG4gICAgICAgICRzcGxpY2U6IFtbIHNlY3Rpb25JbmRleCwgMSBdXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY3Rpb25zOiB1cGRhdGVkU2VjdGlvbnMgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2ZXJzaW9uLCBhc3NpZ25EYXRlLCBhc3NpZ25UaW1lLCBkdWVEYXRlLCBkdWVUaW1lLCBzZWN0aW9ucywgYWxsb3dTdHVkZW50VG9FbnRlckFuc3dlcnMsIGluY2x1ZGVTY29yZUluSW1wcm92ZW1lbnRNZXRyaWNzLCB0aW1lZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfYXNzaWduX3NpbXVsYXRlZF9zYXRcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1jdXN0b20gbW9kYWwtY2FsZW5kYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsIGNhcmQtcGFuZWwtdGl0bGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZWMzMzMwJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2lyY2xlc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWJsb2NrXCI+IE5ldyBTY29yZWQgU0FUIFRlc3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9IGNsYXNzTmFtZT1cInBhbmVsLWxpbmsgY2xvc2UgbW9kYWwtY2xvc2VcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlLXRoaW5cIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCcsIG1hcmdpblRvcDogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dldFZhbHVlRnJvbVN0YXRlKHZlcnNpb24sIHNhbXBsZVZlcnNpb25zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZShldmVudCwgJ3ZlcnNpb24nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NhbXBsZVZlcnNpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWZXJzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlS2V5PVwidmVyc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bktleT1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthc3NpZ25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL2RkL3l5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXNzaWduRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXNzaWduRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURhdGVQaWNrZXJDaGFuZ2UoJ2Fzc2lnbkRhdGUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXthc3NpZ25EYXRlID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwibmV3X3Rlc3Rfc2VjdGlvbl9hc3NpZ25fZGF0ZVwiPkFzc2lnbiBGb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLWZpZWxkIGlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9jazJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthc3NpZ25UaW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0T25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUludGVydmFscz17MTV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiaDptbSBhYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2FwdGlvbj1cIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhc3NpZ25UaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhc3NpZ25UaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSgnYXNzaWduVGltZScsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Fzc2lnblRpbWUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJhc3NpZ25UaW1lXCI+VGltZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZHVlRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTS9kZC95eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdkdWVEYXRlJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZHVlRGF0ZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImR1ZURhdGVcIj5EdWUgKG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNsb2NrMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2R1ZVRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXsxNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJoOm1tIGFhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPVwiVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1ZVRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZVRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdkdWVUaW1lJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZHVlVGltZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImR1ZVRpbWVcIj5UaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlXCI+U2VjdGlvbnM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsZWQtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiUmVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlY3Rpb25zLmluZGV4T2YoJ1JlYWRpbmcnKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlY3Rpb25zQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlYWRpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbGVkLWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIk1hdGggKG5vIGNhbGMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXRoTm9DYWxjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbnMuaW5kZXhPZignTWF0aCAobm8gY2FsYyknKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlY3Rpb25zQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1hdGggKG5vIGNhbGMpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGxlZC1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJXcml0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3cml0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbnMuaW5kZXhPZignV3JpdGluZycpICE9PSAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VjdGlvbnNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V3JpdGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsZWQtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTWF0aCAoY2FsY3VsYXRvcilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIk1hdGggKGNhbGN1bGF0b3IpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbnMuaW5kZXhPZignTWF0aCAoY2FsY3VsYXRvciknKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlY3Rpb25zQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1hdGggKGNhbGN1bGF0b3IpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtbm90ZVwiPk5vdGU6IHNjYWxlZCB0ZXN0IHNjb3JlcyBtYXkgcmVxdWlyZSBjb21iaW5hdGlvbnMgb2Ygc2VjdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbGVkLWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFsbG93U3R1ZGVudFRvRW50ZXJBbnN3ZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbGxvd1N0dWRlbnRUb0VudGVyQW5zd2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FsbG93U3R1ZGVudFRvRW50ZXJBbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFsbG93IFN0dWRlbnQgdG8gRW50ZXIgQW5zd2Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsZWQtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5jbHVkZVNjb3JlSW5JbXByb3ZlbWVudE1ldHJpY3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImluY2x1ZGVTY29yZUluSW1wcm92ZW1lbnRNZXRyaWNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aW5jbHVkZVNjb3JlSW5JbXByb3ZlbWVudE1ldHJpY3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW5jbHVkZSBTY29yZSBpbiBJbXByb3ZlbWVudCBNZXRyaWNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGxlZC1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aW1lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGltZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aW1lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UaW1lZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyIG1vZGFsLWZvb3Rlci13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9IGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IHBpbmstdGV4dCB0ZXh0LWRhcmtlbi0xXCI+Q2FuY2VsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5hc3NpZ25TaW11bGF0ZWRTYXR9IGNsYXNzTmFtZT1cImxpbmstYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0XCI+U2F2ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLW1vZGFsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5Bc3NpZ25TaW11bGF0ZWRTYXRNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG1vZGFsRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Bc3NpZ25TaW11bGF0ZWRTYXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NpZ25TaW11bGF0ZWRTYXRNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignSimulatedSatModal/index.js */"));
    }
  }]);

  return AssignSimulatedSatModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

AssignSimulatedSatModal.propTypes = {
  modalDate: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onAssignSimulatedSat: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignSimulatedSatModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignTargetTestModal/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignTargetTestModal/index.js ***!
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");














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

var AssignTargetTestModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AssignTargetTestModal, _React$Component);

  function AssignTargetTestModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssignTargetTestModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AssignTargetTestModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetTestDate", function (testDate) {
      return _this.setState({
        testDate: testDate
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      return _this.setState({
        testDate: ''
      }, _this.props.onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "assignTargetTest", function () {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssignTargetTestModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var testDate = this.state.testDate;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_assign_target_test",
        style: {
          zIndex: '1003',
          top: '10%'
        },
        className: "jsx-139132964" + " " + "modal modal-custom modal-calendar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "card-modal card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: '#ec3330',
          color: '#fff'
        },
        className: "jsx-139132964" + " " + "card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-139132964"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-139132964" + " " + "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-139132964" + " " + "icon-cup"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-139132964" + " " + "heading-block"
      }, " Set Target Test Date")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "col right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        className: "jsx-139132964" + " " + "panel-link close modal-close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-139132964" + " " + "icon-close-thin"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: '0',
          marginTop: '0'
        },
        className: "jsx-139132964" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_13__["default"])(testDate, testDateOptions),
        onChange: this.onSetTestDate,
        options: testDateOptions,
        label: "Test Date",
        stateKey: "testDate",
        dropdownKey: "testDate"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-139132964" + " " + "note"
      }, "Note:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-139132964"
      }, "If the student plans to take the SAT multiple times, you may schedule multiple \u201CTarget Test Dates.\u201D Test score and improvement metrics will be based on the student\u2019s score on the \uFB01nal target test date.")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-139132964" + " " + "modal-footer modal-footer-width"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-139132964" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.assignTargetTest,
        className: "jsx-139132964" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Set Target Test Date"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "139132964"
      }, ".overlay.jsx-139132964{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-139132964{margin:0;border-radius:6px;}.modal-custom.jsx-139132964{opacity:1;visibility:visible;}.modal-footer.jsx-139132964{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25UYXJnZXRUZXN0TW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dXLEFBRzhCLEFBU04sQUFJQyxBQUlhLFNBUEwsQ0FJQyxLQWJpQixRQWlCdEMsSUFQQSxFQUlBLG1CQWJRLE1BQ0UsUUFDQyxTQUNGLE9BQ0ssWUFDZCIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9EYXNoYm9hcmQvY29tcG9uZW50cy9Nb2RhbHMvQXNzaWduVGFyZ2V0VGVzdE1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uLy4uLy4uLy4uL0Zvcm1Db21wb25lbnRzL0Ryb3Bkb3duJztcbmltcG9ydCBnZXRWYWx1ZUZyb21TdGF0ZSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9nZXRWYWx1ZUZyb21TdGF0ZSc7XG5cbmNvbnN0IHRlc3REYXRlT3B0aW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAnSmFudWFyeSBTQVQgKDAxLzE1LzIwMTkpJyxcbiAgICB2YWx1ZTogJzAxLzE1LzE5JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnSmFudWFyeSBTQVQgKDAxLzAyLzIwMTkpJyxcbiAgICB2YWx1ZTogJzAxLzAyLzE5JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnSmFudWFyeSBTQVQgKDAxLzIxLzIwMTkpJyxcbiAgICB2YWx1ZTogJzAxLzIxLzE5JyxcbiAgfSxcbl1cblxuY2xhc3MgQXNzaWduVGFyZ2V0VGVzdE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlc3REYXRlOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgb25TZXRUZXN0RGF0ZSA9ICh0ZXN0RGF0ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRlc3REYXRlIH0pXG5cbiAgb25DbG9zZU1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRlc3REYXRlOiAnJyB9LCB0aGlzLnByb3BzLm9uQ2xvc2UpXG5cbiAgYXNzaWduVGFyZ2V0VGVzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQXNzaWduVGFyZ2V0VGVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRlc3REYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIG9uQXNzaWduVGFyZ2V0VGVzdCh0ZXN0RGF0ZSk7XG4gICAgdGhpcy5vbkNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0ZXN0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfYXNzaWduX3RhcmdldF90ZXN0XCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWNhbGVuZGFyXCIgc3R5bGU9e3sgekluZGV4OiAnMTAwMycsIHRvcDogJzEwJScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbCBjYXJkLXBhbmVsLXRpdGxlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2VjMzMzMCcsIGNvbG9yOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWN1cFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWJsb2NrXCI+IFNldCBUYXJnZXQgVGVzdCBEYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHJpZ2h0LWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJwYW5lbC1saW5rIGNsb3NlIG1vZGFsLWNsb3NlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9zZS10aGluXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAnLCBtYXJnaW5Ub3A6ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZXRWYWx1ZUZyb21TdGF0ZSh0ZXN0RGF0ZSwgdGVzdERhdGVPcHRpb25zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2V0VGVzdERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0ZXN0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlc3QgRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUtleT1cInRlc3REYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duS2V5PVwidGVzdERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90ZVwiPk5vdGU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB0aGUgc3R1ZGVudCBwbGFucyB0byB0YWtlIHRoZSBTQVQgbXVsdGlwbGUgdGltZXMsIHlvdSBtYXkgc2NoZWR1bGUgbXVsdGlwbGUg4oCcVGFyZ2V0IFRlc3QgRGF0ZXMu4oCdIFRlc3Qgc2NvcmUgYW5kIGltcHJvdmVtZW50IG1ldHJpY3Mgd2lsbCBiZSBiYXNlZCBvbiB0aGUgc3R1ZGVudOKAmXMgc2NvcmUgb24gdGhlIO+sgW5hbCB0YXJnZXQgdGVzdCBkYXRlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXIgbW9kYWwtZm9vdGVyLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPVwibW9kYWwtY2xvc2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIj5DYW5jZWw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmFzc2lnblRhcmdldFRlc3R9IGNsYXNzTmFtZT1cImxpbmstYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0XCI+U2V0IFRhcmdldCBUZXN0IERhdGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkFzc2lnblRhcmdldFRlc3RNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQXNzaWduVGFyZ2V0VGVzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2lnblRhcmdldFRlc3RNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignTargetTestModal/index.js */"));
    }
  }]);

  return AssignTargetTestModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

AssignTargetTestModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onAssignTargetTest: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignTargetTestModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignTestSectionModal/index.js":
/*!********************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignTestSectionModal/index.js ***!
  \********************************************************************************/
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
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");


















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

var AssignTestSectionModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AssignTestSectionModal, _React$Component);

  function AssignTestSectionModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssignTestSectionModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AssignTestSectionModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onResetModal", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "assignTestSection", function () {
      var onAssignTestSection = _this.props.onAssignTestSection;
      var _this$state = _this.state,
          version = _this$state.version,
          section = _this$state.section,
          unformattedAssignDate = _this$state.assignDate,
          unformattedAssignTime = _this$state.assignTime,
          unformattedDueDate = _this$state.dueDate,
          unformattedDueTime = _this$state.dueTime,
          timed = _this$state.timed;
      var assignDate = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedAssignDate).format('MM/DD/YY');
      var assignTime = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedAssignTime).format('hh:mm');
      var dueDate = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedDueDate).format('MM/DD/YY');
      var dueTime = moment__WEBPACK_IMPORTED_MODULE_10___default()(unformattedDueTime).format('hh:mm');
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDetailsChange", function (event) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (event.target) {
        _this.setState(function (_ref) {
          var timed = _ref.timed;
          return {
            timed: !timed
          };
        });
      } else {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, event));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDatePickerChange", function (field, value) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssignTestSectionModal, [{
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onOuterClick: this.onCloseModal
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_assign_test_section",
        className: "jsx-1100509129" + " " + "modal modal-custom modal-calendar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-modal card"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: '#00638e',
          color: '#fff'
        },
        className: "jsx-1100509129" + " " + "card-panel card-panel-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1100509129" + " " + "h3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-assign-section"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129" + " " + "heading-block"
      }, " Assign Test Section (as coursework)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#!",
        onClick: this.onCloseModal,
        className: "jsx-1100509129" + " " + "panel-link close modal-close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-close-thin"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: '0',
          marginTop: '0'
        },
        className: "jsx-1100509129" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_16__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_17__["default"])(version, sampleVersions),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'version');
        },
        options: sampleVersions,
        name: "version",
        label: "Version",
        stateKey: "version",
        dropdownKey: "version"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: '0',
          marginTop: '0'
        },
        className: "jsx-1100509129" + " " + "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_16__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_17__["default"])(section, sampleSections),
        onChange: function onChange(event) {
          return _this2.handleDetailsChange(event, 'section');
        },
        options: sampleSections,
        name: "section",
        label: "Section",
        stateKey: "section",
        dropdownKey: "section"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-calendar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        selected: assignDate,
        dateFormat: "MM/dd/yy",
        id: "assignDate",
        name: "assignDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('assignDate', event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "new_test_section_assign_date",
        className: "jsx-1100509129" + " " + ((assignDate ? 'label active' : 'label') || "")
      }, "Assign For"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "assignTime",
        className: "jsx-1100509129" + " " + ((assignTime ? 'label active' : 'label') || "")
      }, "Time")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-calendar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
        selected: dueDate,
        dateFormat: "MM/dd/yy",
        id: "dueDate",
        name: "dueDate",
        onChange: function onChange(event) {
          return _this2.handleDatePickerChange('dueDate', event);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "dueDate",
        className: "jsx-1100509129" + " " + ((dueDate ? 'label active' : 'label') || "")
      }, "Due (optional)"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "datepicker-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1100509129" + " " + "icon-clock2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "dueTime",
        className: "jsx-1100509129" + " " + ((dueTime ? 'label active' : 'label') || "")
      }, "Time")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "jsx-1100509129"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        name: "timed",
        id: "timed",
        checked: timed,
        onChange: this.handleDetailsChange,
        className: "jsx-1100509129" + " " + "filled-in"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1100509129"
      }, "Timed")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1100509129" + " " + "modal-footer modal-footer-width"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-1100509129" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.assignTestSection,
        className: "jsx-1100509129" + " " + "link-btn waves-effect waves-teal btn-flat"
      }, "Save"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1100509129"
      }, ".overlay.jsx-1100509129{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}.card-modal.jsx-1100509129{margin:0;border-radius:6px;}.modal.jsx-1100509129{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-1100509129{opacity:1;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25UZXN0U2VjdGlvbk1vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFQUyxBQUc0QixBQVNOLEFBSUssQUFTSixTQVpRLENBYUMsSUFUSSxDQWJhLFlBVXRDLEVBYUEsUUFUb0IsV0FiWixNQUNFLENBYUEsT0FaQyxDQWFDLFFBWkgsRUFhRSxLQVpHLElBYTRHLFFBWjFILHFHQWFBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25UZXN0U2VjdGlvbk1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci1jc3Ntb2R1bGVzLmNzcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi8uLi8uLi8uLi9Gb3JtQ29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgZ2V0VmFsdWVGcm9tU3RhdGUgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZ2V0VmFsdWVGcm9tU3RhdGUnO1xuXG5jb25zdCBzYW1wbGVWZXJzaW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAnU0FUIFByYWN0aWNlIFRlc3QgIzEnLFxuICAgIHZhbHVlOiAnU0FUIFByYWN0aWNlIFRlc3QgIzEnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTQVQgUHJhY3RpY2UgVGVzdCAjMicsXG4gICAgdmFsdWU6ICdTQVQgUHJhY3RpY2UgVGVzdCAjMicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1NBVCBQcmFjdGljZSBUZXN0ICMzJyxcbiAgICB2YWx1ZTogJ1NBVCBQcmFjdGljZSBUZXN0ICMzJyxcbiAgfSxcbl07XG5cbmNvbnN0IHNhbXBsZVNlY3Rpb25zID0gW1xuICB7XG4gICAgbGFiZWw6ICdNYXRoIChubyBjYWxjKScsXG4gICAgdmFsdWU6ICdNYXRoIChubyBjYWxjKScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1JlYWRpbmcnLFxuICAgIHZhbHVlOiAnUmVhZGluZycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1dyaXRpbmcnLFxuICAgIHZhbHVlOiAnV3JpdGluZycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ01hdGggKGNhbGN1bGF0b3IpJyxcbiAgICB2YWx1ZTogJ01hdGggKGNhbGN1bGF0b3IpJyxcbiAgfSxcbl07XG5cbmNsYXNzIEFzc2lnblRlc3RTZWN0aW9uTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmVyc2lvbjogJycsXG4gICAgICBzZWN0aW9uOiAnJyxcbiAgICAgIGFzc2lnbkRhdGU6ICcnLFxuICAgICAgYXNzaWduVGltZTogJycsXG4gICAgICBkdWVEYXRlOiAnJyxcbiAgICAgIGR1ZVRpbWU6ICcnLFxuICAgICAgdGltZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7IG1vZGFsRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlN0YXRlLmFzc2lnbkRhdGUgPT09ICcnICYmIG1vZGFsRGF0ZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXNzaWduRGF0ZTogbmV3IERhdGUobW9kYWxEYXRlKSB9KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0TW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgdmVyc2lvbjogJycsIHNlY3Rpb246ICcnLCBhc3NpZ25EYXRlOiAnJywgYXNzaWduVGltZTogJycsIGR1ZURhdGU6ICcnLCBkdWVUaW1lOiAnJywgdGltZWQ6IGZhbHNlIH0pXG5cbiAgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DbG9zZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNsb3NlKCk7XG4gICAgdGhpcy5vblJlc2V0TW9kYWwoKTtcbiAgfVxuXG4gIGFzc2lnblRlc3RTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25Bc3NpZ25UZXN0U2VjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZlcnNpb24sIHNlY3Rpb24sIGFzc2lnbkRhdGU6IHVuZm9ybWF0dGVkQXNzaWduRGF0ZSwgYXNzaWduVGltZTogdW5mb3JtYXR0ZWRBc3NpZ25UaW1lLCBkdWVEYXRlOiB1bmZvcm1hdHRlZER1ZURhdGUsIGR1ZVRpbWU6IHVuZm9ybWF0dGVkRHVlVGltZSwgdGltZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYXNzaWduRGF0ZSA9IG1vbWVudCh1bmZvcm1hdHRlZEFzc2lnbkRhdGUpLmZvcm1hdCgnTU0vREQvWVknKTtcbiAgICBjb25zdCBhc3NpZ25UaW1lID0gbW9tZW50KHVuZm9ybWF0dGVkQXNzaWduVGltZSkuZm9ybWF0KCdoaDptbScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBtb21lbnQodW5mb3JtYXR0ZWREdWVEYXRlKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgY29uc3QgZHVlVGltZSA9IG1vbWVudCh1bmZvcm1hdHRlZER1ZVRpbWUpLmZvcm1hdCgnaGg6bW0nKTtcbiAgICBvbkFzc2lnblRlc3RTZWN0aW9uKHsgdmVyc2lvbiwgc2VjdGlvbiwgYXNzaWduRGF0ZSwgYXNzaWduVGltZSwgZHVlRGF0ZSwgZHVlVGltZSwgdGltZWQgfSk7XG4gICAgdGhpcy5vblJlc2V0TW9kYWwoKTtcbiAgfVxuXG4gIGhhbmRsZURldGFpbHNDaGFuZ2UgPSAoZXZlbnQsIG5hbWUgPSBudWxsKSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoeyB0aW1lZCB9KSA9PiAoeyB0aW1lZDogIXRpbWVkIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogZXZlbnQgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2ZXJzaW9uLCBzZWN0aW9uLCBhc3NpZ25EYXRlLCBhc3NpZ25UaW1lLCBkdWVEYXRlLCBkdWVUaW1lLCB0aW1lZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfYXNzaWduX3Rlc3Rfc2VjdGlvblwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1jYWxlbmRhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMDYzOGUnLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFzc2lnbi1zZWN0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYmxvY2tcIj4gQXNzaWduIFRlc3QgU2VjdGlvbiAoYXMgY291cnNld29yayk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJwYW5lbC1saW5rIGNsb3NlIG1vZGFsLWNsb3NlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9zZS10aGluXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAnLCBtYXJnaW5Ub3A6ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZXRWYWx1ZUZyb21TdGF0ZSh2ZXJzaW9uLCBzYW1wbGVWZXJzaW9ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2UoZXZlbnQsICd2ZXJzaW9uJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzYW1wbGVWZXJzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVmVyc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUtleT1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25LZXk9XCJ2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwJywgbWFyZ2luVG9wOiAnMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2V0VmFsdWVGcm9tU3RhdGUoc2VjdGlvbiwgc2FtcGxlU2VjdGlvbnMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlKGV2ZW50LCAnc2VjdGlvbicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2FtcGxlU2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVLZXk9XCJzZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duS2V5PVwic2VjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthc3NpZ25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL2RkL3l5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXNzaWduRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXNzaWduRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURhdGVQaWNrZXJDaGFuZ2UoJ2Fzc2lnbkRhdGUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXthc3NpZ25EYXRlID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwibmV3X3Rlc3Rfc2VjdGlvbl9hc3NpZ25fZGF0ZVwiPkFzc2lnbiBGb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLWZpZWxkIGlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9jazJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthc3NpZ25UaW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0T25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUludGVydmFscz17MTV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiaDptbSBhYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2FwdGlvbj1cIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhc3NpZ25UaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhc3NpZ25UaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSgnYXNzaWduVGltZScsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Fzc2lnblRpbWUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJhc3NpZ25UaW1lXCI+VGltZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZHVlRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTS9kZC95eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdkdWVEYXRlJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZHVlRGF0ZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImR1ZURhdGVcIj5EdWUgKG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNsb2NrMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2R1ZVRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXsxNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJoOm1tIGFhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPVwiVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1ZVRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZVRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdkdWVUaW1lJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZHVlVGltZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImR1ZVRpbWVcIj5UaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbGVkLWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpbWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aW1lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RpbWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRpbWVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXIgbW9kYWwtZm9vdGVyLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPVwibW9kYWwtY2xvc2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIj5DYW5jZWw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmFzc2lnblRlc3RTZWN0aW9ufSBjbGFzc05hbWU9XCJsaW5rLWJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdFwiPlNhdmU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuQXNzaWduVGVzdFNlY3Rpb25Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG1vZGFsRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Bc3NpZ25UZXN0U2VjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2lnblRlc3RTZWN0aW9uTW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignTestSectionModal/index.js */"));
    }
  }]);

  return AssignTestSectionModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

AssignTestSectionModal.propTypes = {
  modalDate: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onAssignTestSection: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignTestSectionModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js":
/*!*******************************************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js ***!
  \*******************************************************************************************************/
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
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");








/* eslint-disable jsx-a11y/no-static-element-interactions */




var sortByOptions = [{
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
        titleFilter: '',
        unitFilter: ''
      }, _this.props.onClearFilters);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchChange", function (_ref2) {
      var target = _ref2.target;
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, target.name, target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitSearchFilter", function (searchType) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterSection, [{
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
        id: "readingSubject",
        name: "readingSubject",
        checked: subjectFilters.indexOf('readingSubject') !== -1,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "readingSubject"
      }, "Reading")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "writingSubject",
        name: "writingSubject",
        checked: subjectFilters.indexOf('writingSubject') !== -1,
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "writingSubject"
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "mathSubject",
        name: "mathSubject",
        checked: subjectFilters.indexOf('mathSubject') !== -1,
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "mathSubject"
      }, "Math")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "mixedDifficulty",
        name: "mixedDifficulty",
        checked: subjectFilters.indexOf('mixedDifficulty') !== -1,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return handleFilterClick('subject', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "mixedDifficulty"
      }, "Mixed"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "satPractice",
        name: "satPractice",
        checked: typeFilters.indexOf('satPractice') !== -1,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return handleFilterClick('type', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "satPractice"
      }, "SAT Practice")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "skillBuilders",
        name: "skillBuilders",
        checked: typeFilters.indexOf('skillBuilders') !== -1,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return handleFilterClick('type', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "skillBuilders"
      }, "Skill Builders")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "mixedType",
        name: "mixedType",
        checked: typeFilters.indexOf('mixedType') !== -1,
        onChange: function onChange(_ref9) {
          var target = _ref9.target;
          return handleFilterClick('type', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "mixedType"
      }, "Mixed"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "builtIn",
        name: "builtIn",
        checked: sourceFilters.indexOf('builtIn') !== -1,
        onChange: function onChange(_ref10) {
          var target = _ref10.target;
          return handleFilterClick('source', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "builtIn"
      }, "Built-In")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "userCreated",
        name: "userCreated",
        checked: sourceFilters.indexOf('userCreated') !== -1,
        onChange: function onChange(_ref11) {
          var target = _ref11.target;
          return handleFilterClick('source', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "userCreated"
      }, "User Created"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "easy",
        name: "easy",
        checked: difficultyFilters.indexOf('easy') !== -1,
        onChange: function onChange(_ref12) {
          var target = _ref12.target;
          return handleFilterClick('difficulty', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "easy"
      }, "Easy")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "medium",
        name: "medium",
        checked: difficultyFilters.indexOf('medium') !== -1,
        onChange: function onChange(_ref13) {
          var target = _ref13.target;
          return handleFilterClick('difficulty', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "medium"
      }, "Medium")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "difficult",
        name: "difficult",
        checked: difficultyFilters.indexOf('difficult') !== -1,
        onChange: function onChange(_ref14) {
          var target = _ref14.target;
          return handleFilterClick('difficulty', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "difficult"
      }, "Di\uFB03cult")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "mixedDifficulty",
        name: "mixedDifficulty",
        checked: difficultyFilters.indexOf('mixedDifficulty') !== -1,
        onChange: function onChange(_ref15) {
          var target = _ref15.target;
          return handleFilterClick('difficulty', target.name);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "mixedDifficulty"
      }, "Mixed")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        id: "titleFilter",
        name: "titleFilter",
        className: "input-control validate",
        value: titleFilter,
        onChange: this.handleSearchChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.submitSearchFilter('titleFilter');
        },
        className: "search-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: titleFilter.length ? 'label active' : 'label',
        htmlFor: "titleFilter"
      }, "Search By Title"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search-field input-field"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        id: "unitFilter",
        name: "unitFilter",
        className: "input-control validate",
        value: unitFilter,
        onChange: this.handleSearchChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.submitSearchFilter('unitFilter');
        },
        className: "search-button"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-search"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: unitFilter.length ? 'label active' : 'label',
        htmlFor: "unitFilter"
      }, "Search By Unit"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-field",
        style: {
          marginBottom: '0',
          marginTop: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__["default"])(sort, sortByOptions),
        onChange: onSetSort,
        options: sortByOptions,
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
        className: "active",
        "data-view": "view-full"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Month View")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        "data-view": "view-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Day View"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
  typeFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  onClearFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  sourceFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  subjectFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  difficultyFilters: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  handleFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js":
/*!*******************************************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js ***!
  \*******************************************************************************************************/
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










var WorksheetCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WorksheetCard, _React$Component);

  function WorksheetCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WorksheetCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WorksheetCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "editWorksheet", function () {
      return console.warn('Pending implementation of edit modal/functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cloneWorksheet", function () {
      return console.warn('Pending implementation of clone worksheet functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showOwner", function () {
      return console.warn('Pending implementation of show owner functionality');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteWorksheet", function () {
      return console.warn('Pending implementation of delete worksheet functionality');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WorksheetCard, [{
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-checkbox"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        checked: selectedWorksheets.indexOf(worksheet) !== -1,
        onChange: function onChange() {
          return handleWorksheetClick(worksheet);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "checkbox-card card-main card-lesson-detail card-assigned card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel",
        style: {
          backgroundColor: '#666',
          color: '#fff'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon-col col s2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "block-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-sheets-w"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-small"
      }, "Worksheet (", subject, ")"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-large"
      }, title))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "align-top col s1 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger btn",
        "data-target": "dropdown_worksheet_01",
        onClick: this.handleDropdownClick
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "dropdown_worksheet_01",
        className: "dropdown-content dropdown-wide",
        style: {
          display: 'block',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.editWorksheet,
        className: "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.cloneWorksheet
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.showOwner
      }, "Show Owner")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        onClick: this.deleteWorksheet
      }, "Delete"))) : null)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-top-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "left-col col s6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Problem Type:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, type))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "right-col col s6 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Di\uFB03culty:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, difficulty)))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "svg-curved-bar",
        "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
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
          backgroundColor: '#4d4d4d'
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Time Est:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, timeEstimate, " min")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Problems:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, problems)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dl", {
        className: "dl-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dt", null, "Worksheet Source:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("dd", null, source))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-inner-row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "classification-list"
      }, classifications.length ? classifications.map(function (classification) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: classification,
          className: "class-box"
        }, classification);
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "empty-box"
      }, "no classi\uFB01cation"))))))));
    }
  }]);

  return WorksheetCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

WorksheetCard.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  worksheet: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  selectedWorksheets: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  handleWorksheetClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WorksheetCard);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignWorksheetModal/index.js":
/*!******************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignWorksheetModal/index.js ***!
  \******************************************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js");
/* harmony import */ var _components_WorksheetCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/WorksheetCard */ "./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/sortOptions */ "./components/Dashboard/utils/sortOptions.js");
/* harmony import */ var _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/sampleWorksheets */ "./components/Dashboard/utils/sampleWorksheets.js");

















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

var AssignWorksheetModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AssignWorksheetModal, _React$Component);

  function AssignWorksheetModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssignWorksheetModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AssignWorksheetModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggleAssignSelectedDropdown", function () {
      return _this.setState(function (_ref) {
        var assignSelectedDropdownOpen = _ref.assignSelectedDropdownOpen;
        return {
          assignSelectedDropdownOpen: !assignSelectedDropdownOpen
        };
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onResetModal", function () {
      return _this.setState({
        sourceFilters: [],
        difficultyFilters: [],
        subjectFilters: [],
        typeFilters: [],
        sort: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredState", function (titleFilter, value) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, titleFilter, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredState", function (titleFilter) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, titleFilter, ''));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSortWorksheets", function (worksheets) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'difficulty':
          return worksheets.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_15__["difficultySort"]);

        case 'problems':
          return worksheets.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_15__["problemSort"]);

        case 'timeEstimate':
          return worksheets.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_15__["timeEstimateSort"]);

        case 'subject':
          return worksheets.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_15__["subjectSort"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByTitle", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByUnit", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterWorksheets", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMappableWorksheets", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilterClick", function (filterType, filter) {
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
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        var filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, modifiedFilterName, modifiedFilterUpdatedState));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleWorksheetClick", function (worksheet) {
      var selectedWorksheets = _this.state.selectedWorksheets;
      var modifiedWorksheets;

      if (selectedWorksheets.indexOf(worksheet) === -1) {
        modifiedWorksheets = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(selectedWorksheets, {
          $push: [worksheet]
        });
      } else {
        var worksheetIndex = selectedWorksheets.indexOf(worksheet);
        modifiedWorksheets = immutability_helper__WEBPACK_IMPORTED_MODULE_10___default()(selectedWorksheets, {
          $splice: [[worksheetIndex, 1]]
        });
      }

      _this.setState({
        selectedWorksheets: modifiedWorksheets
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "assignWorksheets", function (date) {
      var onAssignWorksheets = _this.props.onAssignWorksheets;
      var selectedWorksheets = _this.state.selectedWorksheets;
      var assignDate;

      switch (date) {
        case 'today':
          assignDate = moment__WEBPACK_IMPORTED_MODULE_11___default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = moment__WEBPACK_IMPORTED_MODULE_11___default()().add(1, 'days').format('MM/DD/YY');
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mapWorksheets", function () {
      return _this.getMappableWorksheets().map(function (worksheet, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_WorksheetCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      worksheets: _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_16__["default"],
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssignWorksheetModal, [{
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        selector: "#modal"
      }, open && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal_assign_worksheet",
        style: {
          zIndex: '1003'
        },
        className: "jsx-2666520574" + " " + "modal-page modal modal-custom"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-modal card-main card switcher-section grey lighten-3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "header-row card-panel light-blue lighten-1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "col s11"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "icon-col"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "icon-sheets-w"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-panel-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "text-large"
      }, "Assign Worksheets")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "col s1 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-2666520574" + " " + "modal-close close"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "icon-close-thin"
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_FilterSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "result-row center-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-2666520574" + " " + "result"
      }, " - ", this.getMappableWorksheets().length, " results -")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "checkboxes-section row d-flex-content card-width-322"
      }, this.mapWorksheets())))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2666520574" + " " + "add-btn-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_assign_selected",
        onClick: this.onToggleAssignSelectedDropdown,
        className: "jsx-2666520574" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2666520574" + " " + "material-icons"
      }, "add"), " Assign Selected"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown_assign_selected",
        style: {
          display: assignSelectedDropdownOpen ? 'block' : '0',
          opacity: assignSelectedDropdownOpen ? '1' : '0'
        },
        className: "jsx-2666520574" + " " + 'dropdown-content'
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2666520574"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignWorksheets('today');
        },
        className: "jsx-2666520574"
      }, "For Today")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2666520574"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignWorksheets('tomorrow');
        },
        className: "jsx-2666520574"
      }, "For Tomorrow")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2666520574"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignWorksheets('nextSession');
        },
        className: "jsx-2666520574"
      }, "For Next Session")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-2666520574"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.assignWorksheets('customDate');
        },
        className: "jsx-2666520574"
      }, "For Date...")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2666520574"
      }, ".card-modal.jsx-2666520574{margin:0;border-radius:6px;}.wrapper.jsx-2666520574{min-height:0px;}.modal-custom.jsx-2666520574{opacity:1;visibility:visible;}.modal-footer.jsx-2666520574{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25Xb3Jrc2hlZXRNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyVFcsQUFHd0IsQUFJTSxBQUdMLEFBSWEsU0FWTCxDQU9DLEtBSHJCLFFBT0EsSUFWQSxFQU9BIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25Xb3Jrc2hlZXRNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi8uLi9Qb3J0YWwnO1xuXG5pbXBvcnQgRmlsdGVyU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyU2VjdGlvbic7XG5pbXBvcnQgV29ya3NoZWV0Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvV29ya3NoZWV0Q2FyZCc7XG5pbXBvcnQgeyBkaWZmaWN1bHR5U29ydCwgcHJvYmxlbVNvcnQsIHRpbWVFc3RpbWF0ZVNvcnQsIHN1YmplY3RTb3J0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc29ydE9wdGlvbnMnO1xuaW1wb3J0IHNhbXBsZVdvcmtzaGVldHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvc2FtcGxlV29ya3NoZWV0cyc7XG5cbmNvbnN0IHdvcmtzaGVldFR5cGVNYXAgPSB7XG4gICdTQVQgUHJhY3RpY2UnOiAnc2F0UHJhY3RpY2UnLFxuICAnU2tpbGwgQnVpbGRlcnMnOiAnc2tpbGxCdWlsZGVycycsXG4gICdNaXhlZCc6ICdtaXhlZFR5cGUnLFxufTtcblxuY29uc3Qgd29ya3NoZWV0U291cmNlTWFwID0ge1xuICAnQnVpbHQtSW4nOiAnYnVpbHRJbicsXG4gICdVc2VyIENyZWF0ZWQnOiAndXNlckNyZWF0ZWQnLFxufTtcblxuY29uc3Qgd29ya3NoZWV0RGlmZmljdWx0eU1hcCA9IHtcbiAgJ0Vhc3knOiAnZWFzeScsXG4gICdNZWRpdW0nOiAnbWVkaXVtJyxcbiAgJ0RpZmZpY3VsdCc6ICdkaWZmaWN1bHQnLFxuICAnTWl4ZWQnOiAnbWl4ZWREaWZmaWN1bHR5Jyxcbn07XG5cbmNvbnN0IHdvcmtzaGVldFN1YmplY3RNYXAgPSB7XG4gICdSZWFkaW5nJzogJ3JlYWRpbmdTdWJqZWN0JyxcbiAgJ1dyaXRpbmcnOiAnd3JpdGluZ1N1YmplY3QnLFxuICAnTWF0aCc6ICdtYXRoU3ViamVjdCcsXG4gICdNaXhlZCc6ICdtaXhlZFN1YmplY3QnLFxufTtcblxuY2xhc3MgQXNzaWduV29ya3NoZWV0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29ydDogJycsXG4gICAgICB1bml0RmlsdGVyOiAnJyxcbiAgICAgIHRpdGxlRmlsdGVyOiAnJyxcbiAgICAgIHR5cGVGaWx0ZXJzOiBbXSxcbiAgICAgIHNvdXJjZUZpbHRlcnM6IFtdLFxuICAgICAgc3ViamVjdEZpbHRlcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRXb3Jrc2hlZXRzOiBbXSxcbiAgICAgIGRpZmZpY3VsdHlGaWx0ZXJzOiBbXSxcbiAgICAgIHdvcmtzaGVldHM6IHNhbXBsZVdvcmtzaGVldHMsXG4gICAgICBkcm9wZG93bkluZGV4OiBudWxsLFxuICAgICAgZHJvcGRvd25Jc09wZW46IGZhbHNlLFxuICAgICAgYXNzaWduU2VsZWN0ZWREcm9wZG93bk9wZW46IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvblRvZ2dsZUFzc2lnblNlbGVjdGVkRHJvcGRvd24gPSAoKSA9PiB0aGlzLnNldFN0YXRlKCh7IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuIH0pID0+ICh7IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuOiAhYXNzaWduU2VsZWN0ZWREcm9wZG93bk9wZW4gfSkpXG5cbiAgb25TZXREcm9wZG93biA9IChkcm9wZG93bkluZGV4KSA9PiB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25JbmRleCwgZHJvcGRvd25Jc09wZW46IHRydWUgfSk7XG4gIG9uQ2xvc2VEcm9wZG93biA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bklzT3BlbjogZmFsc2UgfSk7XG5cbiAgb25SZXNldE1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNvdXJjZUZpbHRlcnM6IFtdLCBkaWZmaWN1bHR5RmlsdGVyczogW10sIHN1YmplY3RGaWx0ZXJzOiBbXSwgdHlwZUZpbHRlcnM6IFtdLCBzb3J0OiAnJyB9KVxuICBvblNldFNvcnQgPSAoc29ydCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNvcnQgfSlcblxuICBvblNldEZpbHRlcmVkU3RhdGUgPSAodGl0bGVGaWx0ZXIsIHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW3RpdGxlRmlsdGVyXTogdmFsdWUgfSlcbiAgb25VbnNldEZpbHRlcmVkU3RhdGUgPSAodGl0bGVGaWx0ZXIpID0+IHRoaXMuc2V0U3RhdGUoeyBbdGl0bGVGaWx0ZXJdOiAnJyB9KVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldE1vZGFsKCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgb25Tb3J0V29ya3NoZWV0cyA9ICh3b3Jrc2hlZXRzKSA9PiB7XG4gICAgY29uc3QgeyBzb3J0IH0gPSB0aGlzLnN0YXRlO1xuICAgIHN3aXRjaCAoc29ydCkge1xuICAgICAgY2FzZSAnZGlmZmljdWx0eSc6XG4gICAgICAgIHJldHVybiB3b3Jrc2hlZXRzLnNvcnQoZGlmZmljdWx0eVNvcnQpO1xuICAgICAgY2FzZSAncHJvYmxlbXMnOlxuICAgICAgICByZXR1cm4gd29ya3NoZWV0cy5zb3J0KHByb2JsZW1Tb3J0KTtcbiAgICAgIGNhc2UgJ3RpbWVFc3RpbWF0ZSc6XG4gICAgICAgIHJldHVybiB3b3Jrc2hlZXRzLnNvcnQodGltZUVzdGltYXRlU29ydCk7XG4gICAgICBjYXNlICdzdWJqZWN0JzpcbiAgICAgICAgcmV0dXJuIHdvcmtzaGVldHMuc29ydChzdWJqZWN0U29ydCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbkZpbHRlckJ5VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB3b3Jrc2hlZXRzLCB0aXRsZUZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gd29ya3NoZWV0cy5yZWR1Y2UoKGZpbmFsQXJyLCBjdXJyZW50V29ya3NoZWV0KSA9PiB7XG4gICAgICBjb25zdCB7IHRpdGxlIH0gPSBjdXJyZW50V29ya3NoZWV0O1xuICAgICAgY29uc3Qgd29ya3NoZWV0U3RyaW5nID0gdGl0bGUucmVwbGFjZSgvXFxzL2csIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAod29ya3NoZWV0U3RyaW5nLmluZGV4T2YodGl0bGVGaWx0ZXIpICE9PSAtMSAmJiBmaW5hbEFyci5pbmRleE9mKGN1cnJlbnRXb3Jrc2hlZXQpID09PSAtMSkge1xuICAgICAgICBmaW5hbEFyci5wdXNoKGN1cnJlbnRXb3Jrc2hlZXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbmFsQXJyO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIG9uRmlsdGVyQnlVbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgd29ya3NoZWV0cywgdW5pdEZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gd29ya3NoZWV0cy5yZWR1Y2UoKGZpbmFsQXJyLCBjdXJyZW50V29ya3NoZWV0KSA9PiB7XG4gICAgICBjb25zdCB7IHVuaXQgfSA9IGN1cnJlbnRXb3Jrc2hlZXQ7XG4gICAgICBjb25zdCB3b3Jrc2hlZXRTdHJpbmcgPSB1bml0LnJlcGxhY2UoL1xccy9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHdvcmtzaGVldFN0cmluZy5pbmRleE9mKHVuaXRGaWx0ZXIpICE9PSAtMSAmJiBmaW5hbEFyci5pbmRleE9mKGN1cnJlbnRXb3Jrc2hlZXQpID09PSAtMSkge1xuICAgICAgICBmaW5hbEFyci5wdXNoKGN1cnJlbnRXb3Jrc2hlZXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbmFsQXJyO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIG9uRmlsdGVyV29ya3NoZWV0cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN1YmplY3RGaWx0ZXJzLCB0eXBlRmlsdGVycywgc291cmNlRmlsdGVycywgZGlmZmljdWx0eUZpbHRlcnMsIHdvcmtzaGVldHM6IGFsbFdvcmtzaGVldHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHdvcmtzaGVldHMgPSBhbGxXb3Jrc2hlZXRzO1xuICAgIGlmIChzdWJqZWN0RmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIHdvcmtzaGVldHMgPSB3b3Jrc2hlZXRzLmZpbHRlcih3b3Jrc2hlZXQgPT4gc3ViamVjdEZpbHRlcnMuaW5kZXhPZih3b3Jrc2hlZXRTdWJqZWN0TWFwW3dvcmtzaGVldC5zdWJqZWN0XSkgIT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHR5cGVGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgd29ya3NoZWV0cyA9IHdvcmtzaGVldHMuZmlsdGVyKHdvcmtzaGVldCA9PiB0eXBlRmlsdGVycy5pbmRleE9mKHdvcmtzaGVldFR5cGVNYXBbd29ya3NoZWV0LnR5cGVdKSAhPT0gLTEpO1xuICAgIH1cbiAgICBpZiAoc291cmNlRmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIHdvcmtzaGVldHMgPSB3b3Jrc2hlZXRzLmZpbHRlcih3b3Jrc2hlZXQgPT4gc291cmNlRmlsdGVycy5pbmRleE9mKHdvcmtzaGVldFNvdXJjZU1hcFt3b3Jrc2hlZXQuc291cmNlXSkgIT09IC0xKTtcbiAgICB9XG4gICAgaWYgKGRpZmZpY3VsdHlGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgd29ya3NoZWV0cyA9IHdvcmtzaGVldHMuZmlsdGVyKHdvcmtzaGVldCA9PiBkaWZmaWN1bHR5RmlsdGVycy5pbmRleE9mKHdvcmtzaGVldERpZmZpY3VsdHlNYXBbd29ya3NoZWV0LmRpZmZpY3VsdHldKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gd29ya3NoZWV0cztcbiAgfVxuXG4gIGdldE1hcHBhYmxlV29ya3NoZWV0cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN1YmplY3RGaWx0ZXJzLCB0eXBlRmlsdGVycywgZGlmZmljdWx0eUZpbHRlcnMsIHNvdXJjZUZpbHRlcnMsIHNvcnQsIHVuaXRGaWx0ZXIsIHRpdGxlRmlsdGVyLCB3b3Jrc2hlZXRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBtYXBwYWJsZVdvcmtzaGVldHMgPSB3b3Jrc2hlZXRzO1xuICAgIGlmICh0aXRsZUZpbHRlci5sZW5ndGgpIHtcbiAgICAgIG1hcHBhYmxlV29ya3NoZWV0cyA9IHRoaXMub25GaWx0ZXJCeVRpdGxlKCk7XG4gICAgfVxuICAgIGlmICh1bml0RmlsdGVyLmxlbmd0aCkge1xuICAgICAgbWFwcGFibGVXb3Jrc2hlZXRzID0gdGhpcy5vbkZpbHRlckJ5VW5pdCgpO1xuICAgIH1cbiAgICBpZiAoc3ViamVjdEZpbHRlcnMubGVuZ3RoIHx8IHR5cGVGaWx0ZXJzLmxlbmd0aCB8fCBkaWZmaWN1bHR5RmlsdGVycy5sZW5ndGggfHwgc291cmNlRmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIG1hcHBhYmxlV29ya3NoZWV0cyA9IHRoaXMub25GaWx0ZXJXb3Jrc2hlZXRzKCk7XG4gICAgfVxuICAgIGlmIChzb3J0KSB7XG4gICAgICByZXR1cm4gdGhpcy5vblNvcnRXb3Jrc2hlZXRzKG1hcHBhYmxlV29ya3NoZWV0cyk7XG4gICAgfVxuICAgIHJldHVybiBtYXBwYWJsZVdvcmtzaGVldHM7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDbGljayA9IChmaWx0ZXJUeXBlLCBmaWx0ZXIpID0+IHtcbiAgICBjb25zdCB7IHNvdXJjZUZpbHRlcnM6IGN1cnJlbnRTb3VyY2VGaWx0ZXJzLCBkaWZmaWN1bHR5RmlsdGVyczogY3VycmVudERpZmZpY3VsdHlGaWx0ZXJzLFxuICAgICAgc3ViamVjdEZpbHRlcnM6IGN1cnJlbnRTdWJqZWN0RmlsdGVycywgdHlwZUZpbHRlcnM6IGN1cnJlbnRUeXBlRmlsdGVycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgbW9kaWZpZWRGaWx0ZXJDdXJyZW50U3RhdGU7XG4gICAgbGV0IG1vZGlmaWVkRmlsdGVyTmFtZTtcbiAgICBsZXQgbW9kaWZpZWRGaWx0ZXJVcGRhdGVkU3RhdGU7XG4gICAgc3dpdGNoIChmaWx0ZXJUeXBlKSB7XG4gICAgICBjYXNlICdzdWJqZWN0JzpcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJDdXJyZW50U3RhdGUgPSBjdXJyZW50U3ViamVjdEZpbHRlcnM7XG4gICAgICAgIG1vZGlmaWVkRmlsdGVyTmFtZSA9ICdzdWJqZWN0RmlsdGVycyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgIG1vZGlmaWVkRmlsdGVyQ3VycmVudFN0YXRlID0gY3VycmVudFR5cGVGaWx0ZXJzO1xuICAgICAgICBtb2RpZmllZEZpbHRlck5hbWUgPSAndHlwZUZpbHRlcnMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NvdXJjZSc6XG4gICAgICAgIG1vZGlmaWVkRmlsdGVyQ3VycmVudFN0YXRlID0gY3VycmVudFNvdXJjZUZpbHRlcnM7XG4gICAgICAgIG1vZGlmaWVkRmlsdGVyTmFtZSA9ICdzb3VyY2VGaWx0ZXJzJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkaWZmaWN1bHR5JzpcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJDdXJyZW50U3RhdGUgPSBjdXJyZW50RGlmZmljdWx0eUZpbHRlcnM7XG4gICAgICAgIG1vZGlmaWVkRmlsdGVyTmFtZSA9ICdkaWZmaWN1bHR5RmlsdGVycyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZS5pbmRleE9mKGZpbHRlcikgPT09IC0xKSB7XG4gICAgICBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZShtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSwge1xuICAgICAgICAkcHVzaDogW2ZpbHRlcl0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVySW5kZXggPSBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZS5pbmRleE9mKGZpbHRlcik7XG4gICAgICBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZShtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSwge1xuICAgICAgICAkc3BsaWNlOiBbWyBmaWx0ZXJJbmRleCwgMSBdXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgW21vZGlmaWVkRmlsdGVyTmFtZV06IG1vZGlmaWVkRmlsdGVyVXBkYXRlZFN0YXRlIH0pO1xuICB9XG5cbiAgaGFuZGxlV29ya3NoZWV0Q2xpY2sgPSAod29ya3NoZWV0KSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZFdvcmtzaGVldHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG1vZGlmaWVkV29ya3NoZWV0cztcbiAgICBpZiAoc2VsZWN0ZWRXb3Jrc2hlZXRzLmluZGV4T2Yod29ya3NoZWV0KSA9PT0gLTEpIHtcbiAgICAgIG1vZGlmaWVkV29ya3NoZWV0cyA9IHVwZGF0ZShzZWxlY3RlZFdvcmtzaGVldHMsIHtcbiAgICAgICAgJHB1c2g6IFt3b3Jrc2hlZXRdLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdvcmtzaGVldEluZGV4ID0gc2VsZWN0ZWRXb3Jrc2hlZXRzLmluZGV4T2Yod29ya3NoZWV0KTtcbiAgICAgIG1vZGlmaWVkV29ya3NoZWV0cyA9IHVwZGF0ZShzZWxlY3RlZFdvcmtzaGVldHMsIHtcbiAgICAgICAgJHNwbGljZTogW1sgd29ya3NoZWV0SW5kZXgsIDEgXV0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkV29ya3NoZWV0czogbW9kaWZpZWRXb3Jrc2hlZXRzIH0pO1xuICB9XG5cbiAgYXNzaWduV29ya3NoZWV0cyA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgeyBvbkFzc2lnbldvcmtzaGVldHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFdvcmtzaGVldHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGFzc2lnbkRhdGU7XG4gICAgc3dpdGNoIChkYXRlKSB7XG4gICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgIGFzc2lnbkRhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9tb3Jyb3cnOlxuICAgICAgICBhc3NpZ25EYXRlID0gbW9tZW50KCkuYWRkKDEsICdkYXlzJykuZm9ybWF0KCdNTS9ERC9ZWScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25leHRTZXNzaW9uJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b21EYXRlJzpcbiAgICAgICAgYXNzaWduRGF0ZSA9ICcwMS8wNS8xOSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMub25Ub2dnbGVBc3NpZ25TZWxlY3RlZERyb3Bkb3duKCk7XG4gICAgb25Bc3NpZ25Xb3Jrc2hlZXRzKHNlbGVjdGVkV29ya3NoZWV0cywgYXNzaWduRGF0ZSk7XG4gIH1cblxuICBtYXBXb3Jrc2hlZXRzID0gKCkgPT4gdGhpcy5nZXRNYXBwYWJsZVdvcmtzaGVldHMoKS5tYXAoKHdvcmtzaGVldCwgaW5kZXgpID0+IChcbiAgICA8V29ya3NoZWV0Q2FyZFxuICAgICAgd29ya3NoZWV0PXt3b3Jrc2hlZXR9XG4gICAgICBpbmRleD17aW5kZXh9XG4gICAgICBrZXk9e3dvcmtzaGVldC5pZH1cbiAgICAgIG9uU2V0RHJvcGRvd249e3RoaXMub25TZXREcm9wZG93bn1cbiAgICAgIG9uQ2xvc2VEcm9wZG93bj17dGhpcy5vbkNsb3NlRHJvcGRvd259XG4gICAgICBkcm9wZG93bkluZGV4PXt0aGlzLnN0YXRlLmRyb3Bkb3duSW5kZXh9XG4gICAgICBkcm9wZG93bklzT3Blbj17dGhpcy5zdGF0ZS5kcm9wZG93bklzT3Blbn1cbiAgICAgIGhhbmRsZVdvcmtzaGVldENsaWNrPXt0aGlzLmhhbmRsZVdvcmtzaGVldENsaWNrfVxuICAgICAgc2VsZWN0ZWRXb3Jrc2hlZXRzPXt0aGlzLnN0YXRlLnNlbGVjdGVkV29ya3NoZWV0c31cbiAgICAvPlxuICApKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhc3NpZ25TZWxlY3RlZERyb3Bkb3duT3BlbiwgdHlwZUZpbHRlcnMsIHNvdXJjZUZpbHRlcnMsIHN1YmplY3RGaWx0ZXJzLCBkaWZmaWN1bHR5RmlsdGVycywgc29ydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfYXNzaWduX3dvcmtzaGVldFwiIGNsYXNzTmFtZT1cIm1vZGFsLXBhZ2UgbW9kYWwgbW9kYWwtY3VzdG9tXCIgc3R5bGU9e3sgekluZGV4OiAnMTAwMycgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBzd2l0Y2hlci1zZWN0aW9uIGdyZXkgbGlnaHRlbi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcm93IGNhcmQtcGFuZWwgbGlnaHQtYmx1ZSBsaWdodGVuLTEgd2hpdGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczExXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1zaGVldHMtd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxhcmdlXCI+QXNzaWduIFdvcmtzaGVldHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpY29ucy1yb3dcIj48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSBjbG9zZVwiPjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2UtdGhpblwiPjwvaT48L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEZpbHRlclNlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICAgICAgICB0eXBlRmlsdGVycz17dHlwZUZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBzb3VyY2VGaWx0ZXJzPXtzb3VyY2VGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgc3ViamVjdEZpbHRlcnM9e3N1YmplY3RGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgZGlmZmljdWx0eUZpbHRlcnM9e2RpZmZpY3VsdHlGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgb25TZXRTb3J0PXt0aGlzLm9uU2V0U29ydH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xlYXJGaWx0ZXJzPXt0aGlzLm9uUmVzZXRNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlckNsaWNrPXt0aGlzLmhhbmRsZUZpbHRlckNsaWNrfVxuICAgICAgICAgICAgICAgICAgb25TZXRGaWx0ZXJlZFN0YXRlPXt0aGlzLm9uU2V0RmlsdGVyZWRTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uVW5zZXRGaWx0ZXJlZFN0YXRlPXt0aGlzLm9uVW5zZXRGaWx0ZXJlZFN0YXRlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXJvdyBjZW50ZXItYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJyZXN1bHRcIj4gLSB7dGhpcy5nZXRNYXBwYWJsZVdvcmtzaGVldHMoKS5sZW5ndGh9IHJlc3VsdHMgLTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3hlcy1zZWN0aW9uIHJvdyBkLWZsZXgtY29udGVudCBjYXJkLXdpZHRoLTMyMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm1hcFdvcmtzaGVldHMoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD0nZHJvcGRvd25fYXNzaWduX3NlbGVjdGVkJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblRvZ2dsZUFzc2lnblNlbGVjdGVkRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0biBhZGQtYnRuXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvaT4gQXNzaWduIFNlbGVjdGVkXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkcm9wZG93bi1jb250ZW50J1xuICAgICAgICAgICAgICAgICAgaWQ9J2Ryb3Bkb3duX2Fzc2lnbl9zZWxlY3RlZCdcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuID8gJ2Jsb2NrJyA6ICcwJywgb3BhY2l0eTogYXNzaWduU2VsZWN0ZWREcm9wZG93bk9wZW4gPyAnMScgOiAnMCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFzc2lnbldvcmtzaGVldHMoJ3RvZGF5Jyl9PkZvciBUb2RheTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5hc3NpZ25Xb3Jrc2hlZXRzKCd0b21vcnJvdycpfT5Gb3IgVG9tb3Jyb3c8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXNzaWduV29ya3NoZWV0cygnbmV4dFNlc3Npb24nKX0+Rm9yIE5leHQgU2Vzc2lvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5hc3NpZ25Xb3Jrc2hlZXRzKCdjdXN0b21EYXRlJyl9PkZvciBEYXRlLi4uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuQXNzaWduV29ya3NoZWV0TW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkFzc2lnbldvcmtzaGVldHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NpZ25Xb3Jrc2hlZXRNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignWorksheetModal/index.js */"));
    }
  }]);

  return AssignWorksheetModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

AssignWorksheetModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onAssignWorksheets: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignWorksheetModal);

/***/ }),

/***/ "./components/Dashboard/utils/dateAndCalendarUtils.js":
/*!************************************************************!*\
  !*** ./components/Dashboard/utils/dateAndCalendarUtils.js ***!
  \************************************************************/
/*! exports provided: getCalendarCellClassName, getCalendarDayClassName, calendarMap, currentMonthIndex, currentYear, getDayDate, getFirstDay, getDaysInActiveMonth, getDaysInPreviousMonth, getNextMonthAsCurrentMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarCellClassName", function() { return getCalendarCellClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarDayClassName", function() { return getCalendarDayClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarMap", function() { return calendarMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentMonthIndex", function() { return currentMonthIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentYear", function() { return currentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayDate", function() { return getDayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstDay", function() { return getFirstDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInActiveMonth", function() { return getDaysInActiveMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInPreviousMonth", function() { return getDaysInPreviousMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthAsCurrentMonth", function() { return getNextMonthAsCurrentMonth; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

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
var getCalendarDayClassName = function getCalendarDayClassName(date, inMonth, activeDateKey) {
  var className = 'cal-month-day ';

  if (activeDateKey.includes('column-7') || activeDateKey.includes('column-1')) {
    className += 'cal-day-weekend ';
  }

  if (date === moment__WEBPACK_IMPORTED_MODULE_0___default()().format('MM/DD/YY')) {
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
var currentMonthIndex = Number(moment__WEBPACK_IMPORTED_MODULE_0___default()().format('M')) - 1;
var currentYear = new Date().getFullYear().toString().substr(-2);
var getDayDate = function getDayDate(date) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('ddd, MMM Do');
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

/***/ }),

/***/ "./components/Dashboard/utils/sampleLessons.js":
/*!*****************************************************!*\
  !*** ./components/Dashboard/utils/sampleLessons.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/Dashboard/utils/sampleWorksheets.js":
/*!********************************************************!*\
  !*** ./components/Dashboard/utils/sampleWorksheets.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/Dashboard/utils/sortOptions.js":
/*!***************************************************!*\
  !*** ./components/Dashboard/utils/sortOptions.js ***!
  \***************************************************/
/*! exports provided: difficultySort, pageNumberSort, problemSort, timeEstimateSort, subjectSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difficultySort", function() { return difficultySort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageNumberSort", function() { return pageNumberSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemSort", function() { return problemSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEstimateSort", function() { return timeEstimateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectSort", function() { return subjectSort; });
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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
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
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Dashboard_components_FilterSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Dashboard/components/FilterSection */ "./components/Dashboard/components/FilterSection/index.js");
/* harmony import */ var _components_Dashboard_components_CalendarHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Dashboard/components/CalendarHeader */ "./components/Dashboard/components/CalendarHeader/index.js");
/* harmony import */ var _components_Dashboard_components_CalendarRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Dashboard/components/CalendarRow */ "./components/Dashboard/components/CalendarRow/index.js");
/* harmony import */ var _components_Dashboard_components_Modals_AssignSessionModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Dashboard/components/Modals/AssignSessionModal */ "./components/Dashboard/components/Modals/AssignSessionModal/index.js");
/* harmony import */ var _components_Dashboard_components_Modals_AssignLessonModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Dashboard/components/Modals/AssignLessonModal */ "./components/Dashboard/components/Modals/AssignLessonModal/index.js");
/* harmony import */ var _components_Dashboard_components_Modals_AssignWorksheetModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Dashboard/components/Modals/AssignWorksheetModal */ "./components/Dashboard/components/Modals/AssignWorksheetModal/index.js");
/* harmony import */ var _components_Dashboard_components_Modals_AssignTestSectionModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Dashboard/components/Modals/AssignTestSectionModal */ "./components/Dashboard/components/Modals/AssignTestSectionModal/index.js");
/* harmony import */ var _components_Dashboard_components_Modals_AssignSimulatedSatModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Dashboard/components/Modals/AssignSimulatedSatModal */ "./components/Dashboard/components/Modals/AssignSimulatedSatModal/index.js");
/* harmony import */ var _components_Dashboard_components_Modals_AssignTargetTestModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Dashboard/components/Modals/AssignTargetTestModal */ "./components/Dashboard/components/Modals/AssignTargetTestModal/index.js");
/* harmony import */ var _components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Dashboard/utils/dateAndCalendarUtils */ "./components/Dashboard/utils/dateAndCalendarUtils.js");





















var Dashboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Dashboard, _Component);

  function Dashboard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Dashboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSetActiveMonth", function (activeMonthIndex) {
      // daysInPreviousMonth is used to handle cases where the calendar for the month starts with dates from the preceding month
      // firstDay indicates the day the first day of the month falls on in a zero-based index manner, meaning Sunday is 0, Monday is 1, etc
      var daysInPreviousMonth = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_19__["getDaysInPreviousMonth"])(activeMonthIndex);
      var daysInActiveMonth = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_19__["getDaysInActiveMonth"])(activeMonthIndex);
      var firstDay = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_19__["getFirstDay"])(activeMonthIndex);
      var rows = []; // We increment calDate and change inMonth in the case where dates from the next month appear in row 1 or row 6
      // Since activeMonthIndex is zero-based, currentMonth adds 1 so the cells are accurate as actual calendar dates
      // getNextMonthAsCurrentMonth is used to derive the current month to ensure it matches the format of incoming dates - 01/15/19 vs 1/15/19, otherwise new events wouldn't find the date to be assigned to

      var inMonth = true;
      var calDate = 1;
      var currentMonth = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_19__["getNextMonthAsCurrentMonth"])(activeMonthIndex);

      if (firstDay !== 0) {
        currentMonth = currentMonth > 9 ? currentMonth -= 1 : "0".concat(currentMonth - 1);
        calDate = daysInPreviousMonth - firstDay + 1;
        inMonth = false;
      } // First for loop handles the 6 calendar rows, second for loop handles the 7 days of the week


      for (var i = 0; i < 6; i++) {
        var rowArr = [];

        for (var j = 0; j < 7; j++) {
          var date = "".concat(currentMonth, "/").concat(calDate > 9 ? calDate : "0".concat(calDate), "/").concat(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_19__["currentYear"]);
          var dayDate = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_19__["getDayDate"])(date);
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
                currentMonth = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_19__["getNextMonthAsCurrentMonth"])(activeMonthIndex);
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSetActiveDate", function (incomingDate) {
      _this.setState({
        activeDate: incomingDate,
        activeColumn: incomingDate[13]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAssignSession", function (session) {
      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === session.date;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.sessions.push(session);
      var updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignSessionModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAssignLessons", function (lessons, date) {
      var _updatedDate$lessons;

      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === date;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);

      (_updatedDate$lessons = updatedDate.lessons).push.apply(_updatedDate$lessons, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(lessons));

      var updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignLessonsModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAssignWorksheets", function (worksheets, date) {
      var _updatedDate$workshee;

      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === date;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);

      (_updatedDate$workshee = updatedDate.worksheets).push.apply(_updatedDate$workshee, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(worksheets));

      var updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignWorksheetsModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAssignTestSection", function (testSection) {
      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === testSection.assignDate;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.testSections.push(testSection);
      var updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignTestSectionModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAssignSimulatedSat", function (simulatedSat) {
      var rows = _this.state.rows;
      var updatedDate = rows.filter(function (row) {
        return row.date === simulatedSat.assignDate;
      })[0];
      var updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.simulatedSat.push(simulatedSat);
      var updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });

      _this.setState({
        rows: updatedRows
      });

      _this.onToggleAssignSimulatedSatModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onAssignTargetTest", function (targetTestDate) {
      console.warn('pending decision of what test date assign ui looks like', targetTestDate);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleAssignSessionModal", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleAssignLessonsModal", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleAssignWorksheetsModal", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleAssignTestSectionModal", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleAssignSimulatedSatModal", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleAssignTargetTestModal", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleAddDropdown", function () {
      return _this.setState(function (_ref7) {
        var addDropdownOpen = _ref7.addDropdownOpen;
        return {
          addDropdownOpen: !addDropdownOpen,
          deleteDropdownOpen: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleDeleteDropdown", function () {
      return _this.setState(function (_ref8) {
        var deleteDropdownOpen = _ref8.deleteDropdownOpen;
        return {
          deleteDropdownOpen: !deleteDropdownOpen,
          addDropdownOpen: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleAssignDropdown", function () {
      return _this.setState(function (_ref9) {
        var assignDropdownIsOpen = _ref9.assignDropdownIsOpen;
        return {
          assignDropdownIsOpen: !assignDropdownIsOpen
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onToggleHandleFilteredItemsDropdown", function () {
      return _this.setState(function (_ref10) {
        var onToggleHandleFilteredItemsDropdown = _ref10.onToggleHandleFilteredItemsDropdown;
        return {
          onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onClearFilters", function () {
      return _this.setState({
        filters: [],
        eventFilters: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFilterClick", function (filter) {
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
        updatedFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(filters, {
          $push: [filter]
        });
      } else {
        var filterIndex = filters.indexOf(filter);
        updatedFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(filters, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, filterName, updatedFilters));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "mapRows", function () {
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
        rowArray.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_CalendarRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
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


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Dashboard, [{
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_Modals_AssignSessionModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        modalDate: modalDate,
        open: assignSessionModalOpen,
        onClose: this.onToggleAssignSessionModal,
        onAssignSession: this.onAssignSession
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_Modals_AssignLessonModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        modalDate: modalDate,
        open: assignLessonsModalOpen,
        onClose: this.onToggleAssignLessonsModal,
        onAssignLessons: this.onAssignLessons
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_Modals_AssignWorksheetModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        modalDate: modalDate,
        open: assignWorksheetsModalOpen,
        onClose: this.onToggleAssignWorksheetsModal,
        onAssignWorksheets: this.onAssignWorksheets
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_Modals_AssignTestSectionModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
        modalDate: modalDate,
        open: assignTestSectionModalOpen,
        onClose: this.onToggleAssignTestSectionModal,
        onAssignTestSection: this.onAssignTestSection
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_Modals_AssignSimulatedSatModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
        modalDate: modalDate,
        open: assignSimulatedSatModalOpen,
        onClose: this.onToggleAssignSimulatedSatModal,
        onAssignSimulatedSat: this.onAssignSimulatedSat
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_Modals_AssignTargetTestModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
        open: assignTargetTestDateModalOpen,
        onClose: this.onToggleAssignTargetTestModal,
        onAssignTargetTest: this.onAssignTargetTest
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "main-holder grey lighten-3"
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
      }, "menu"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "breadcrumb-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "nav-wrapper "
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "breadcrumb"
      }, "< Classes"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "h1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-members"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "heading-block"
      }, "Some Class in June"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "nav-additional"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "menu-additional"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, "Summary")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "active",
        href: "#"
      }, "Calendar")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, "Lessons")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, "Tests")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, "Account")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "activate-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "btn-text visible-lg"
      }, "Account Activated"), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-unlock"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "waves-effect btn btn-orange btn-account_inactive dropdown-trigger",
        "data-target": "dropdown_activate"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "btn-text visible-lg"
      }, "Activate Account"), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-key"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "dropdown_activate",
        className: "dropdown-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "title-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "h3"
      }, "Ready to begin your course?"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "subtitle"
      }, "Please enter a valid license code below.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        action: "#",
        className: "activate-form"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        value: "4BF86266-A2A4-C9FB-387D07ABB5471305",
        id: "license_code"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "label",
        htmlFor: "license_code"
      }, "License Code")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "btn-holder center-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-blue",
        type: "submit"
      }, "Activate ")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-block center-align"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "If you need license codes, you can get them here: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-light btn-small btn-blue"
      }, "Purchase Licenses"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "*Note: "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "We o\uFB00er discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students.")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_FilterSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        filters: filters,
        eventFilters: eventFilters,
        onClearFilters: this.onClearFilters,
        handleFilterClick: this.handleFilterClick
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "calendar-section view-month"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "calendar-slider"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Dashboard_components_CalendarHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        activeMonth: Number(activeMonth),
        onSetActiveMonth: this.onSetActiveMonth
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "calendar",
        className: "main-slick-calendar cal-context",
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "slide"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        className: "calendar-table cal-month-box"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        className: "month-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        colSpan: "7"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cal-month-day"
      }, "January"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        className: "calendar-head-row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Su"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "M"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Tu"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "W"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Th"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "F"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Sa"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, this.mapRows()))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "slide"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "slide"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "add-btn-block"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_assign",
        onClick: this.onToggleAssignDropdown,
        className: "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, "Assign..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown_assign",
        className: "dropdown-content",
        style: {
          display: assignDropdownIsOpen ? 'block' : 'none',
          opacity: assignDropdownIsOpen ? '100' : '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignSessionModal,
        className: "modal-trigger"
      }, "Session")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignLessonsModal,
        className: "modal-trigger"
      }, "Lesson")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignWorksheetsModal,
        className: "modal-trigger"
      }, "Worksheet")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignTestSectionModal,
        className: "modal-trigger"
      }, "Test Section")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignSimulatedSatModal,
        className: "modal-trigger"
      }, "Simulated SAT")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleAssignTargetTestModal,
        className: "modal-trigger"
      }, "Target Test")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "divider",
        tabIndex: "-1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "dropdown-footer"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "modal-trigger"
      }, "Apply Course Template")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "add-btn-block btn-block-right"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_other",
        onClick: this.onToggleHandleFilteredItemsDropdown,
        className: "dropdown-trigger waves-effect waves-teal btn add-btn-circle"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-dots"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown_other",
        className: "dropdown-content",
        style: {
          display: onToggleHandleFilteredItemsDropdown ? 'block' : 'none',
          opacity: onToggleHandleFilteredItemsDropdown ? '100' : '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "dropdown-header"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, "With Filtered Items... "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "small"
      }, "(items currently visible on calendar)")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "divider"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "modal-trigger"
      }, "Save Course as Template")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, "Reset All")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, "Delete All")))))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);
/* <!-- Modal structure view Lesson --> */
// <div id="modal_view_lesson" className="modal modal-custom"></div>

/* <!-- Modal structure view Session --> */
// <div id="modal_view_session" className="modal modal-custom"></div>

/* <!-- Modal structure view Practice Test --> */
// <div id="modal_view_practice_test" className="modal modal-custom"></div>

/* <!-- Modal structure view Worksheet --> */
// <div id="modal_view_worksheet" className="modal modal-custom"></div>

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/pages/dashboard.js */"./pages/dashboard.js");


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

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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
//# sourceMappingURL=dashboard.js.map