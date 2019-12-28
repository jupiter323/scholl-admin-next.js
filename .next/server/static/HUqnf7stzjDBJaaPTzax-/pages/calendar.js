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

/***/ "/NWr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable array-callback-return */
// This function pulls the matching value objects from state for each Dropdown component if an existing value exists - otherwise, returns empty object
const getValueFromState = (valueKey, state, nested = false) => {
  let obj = {}; // This is encountered when the options are nested as arrays within objects

  if (nested) {
    state.map(substate => {
      substate.options.map(substateField => {
        if (substateField.value === valueKey) {
          obj = substateField;
        }
      });
    });
  } else {
    state.map(option => {
      if (option.value === valueKey) {
        obj = option;
      }
    });
  }

  return obj;
};

/* harmony default export */ __webpack_exports__["a"] = (getValueFromState);

/***/ }),

/***/ "/UQ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5Buo");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xA6B");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("x4x+");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class AssignSessionModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onResetModal", () => this.setState({
      date: '',
      startTime: '',
      endTime: '',
      notes: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "assignSession", () => {
      const {
        onAssignSession
      } = this.props;
      const {
        date: unformattedDate,
        startTime: unformattedStartTime,
        endTime: unformattedEndTime,
        notes
      } = this.state;
      const date = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedDate).format('MM/DD/YY');
      const startTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedStartTime).format('hh:mm');
      const endTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedEndTime).format('hh:mm');
      onAssignSession({
        date,
        startTime,
        endTime,
        notes,
        title: 'Session'
      });
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDetailsChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDatePickerChange", (field, value) => this.setState({
      [field]: value
    }));

    this.state = {
      date: '',
      startTime: '',
      endTime: '',
      notes: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      modalDate
    } = this.props;

    if (prevState.date === '' && modalDate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        date: new Date(modalDate)
      });
    }
  }

  render() {
    const {
      open
    } = this.props;
    const {
      date,
      startTime,
      endTime,
      notes
    } = this.state;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-3300663016" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_assign_session",
      className: "jsx-3300663016" + " " + "modal modal-custom modal-calendar"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#14b04b',
        color: '#fff'
      },
      className: "jsx-3300663016" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-3300663016"
    }, __jsx("span", {
      className: "jsx-3300663016" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-clock2"
    }), __jsx("span", {
      className: "jsx-3300663016" + " " + "heading-block"
    }, " New Session")))), __jsx("div", {
      className: "jsx-3300663016" + " " + "col right-align"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-3300663016" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-3300663016" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "col s12"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: date,
      className: "full-width",
      dateFormat: "MM/dd/yy",
      id: "date",
      name: "date",
      onChange: event => this.handleDatePickerChange('date', event)
    }), __jsx("label", {
      htmlFor: "date",
      className: "jsx-3300663016" + " " + ((date ? 'label active' : 'label') || "")
    }, "Date")))), __jsx("div", {
      className: "jsx-3300663016" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: startTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "startTime",
      name: "startTime",
      onChange: event => this.handleDatePickerChange('startTime', event)
    }), __jsx("label", {
      htmlFor: "startTime",
      className: "jsx-3300663016" + " " + ((startTime ? 'label active' : 'label') || "")
    }, "Start Time"))), __jsx("div", {
      className: "jsx-3300663016" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: endTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "endTime",
      name: "endTime",
      onChange: event => this.handleDatePickerChange('endTime', event)
    }), __jsx("label", {
      htmlFor: "endTime",
      className: "jsx-3300663016" + " " + ((endTime ? 'label active' : 'label') || "")
    }, "End Time")))), __jsx("div", {
      className: "jsx-3300663016" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "col s12"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "input-field input-field-textarea"
    }, __jsx("textarea", {
      id: "notes",
      name: "notes",
      cols: "40",
      rows: "7",
      value: notes,
      onChange: this.handleDetailsChange,
      className: "jsx-3300663016" + " " + "textarea-scroll"
    }), __jsx("label", {
      htmlFor: "notes",
      className: "jsx-3300663016" + " " + ((notes ? 'label active' : 'label') || "")
    }, "Session Notes:"))))), __jsx("div", {
      className: "jsx-3300663016" + " " + "modal-footer modal-footer-width"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-3300663016" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.assignSession,
      className: "jsx-3300663016" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Add Session"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3300663016"
    }, [".overlay.jsx-3300663016{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-3300663016{margin:0;border-radius:6px;}", ".modal.jsx-3300663016{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-3300663016{opacity:1;visibility:visible;}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AssignSessionModal);

/***/ }),

/***/ "2Iwh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Portal */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


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
/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ "325u":
/***/ (function(module, exports) {

module.exports = require("react-sticky");

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ControlComponent = props => {
  const {
    selectProps: {
      placeholder,
      label,
      className
    }
  } = props;
  const categoryCheck = label === 'Categories';
  return __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* ControlWrapper */ "a"], {
    invalid: className,
    categoryCheck: categoryCheck
  }, __jsx("div", {
    style: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__[/* DropdownStyles */ "a"]
  }, __jsx("p", null, categoryCheck ? 'Categories' : placeholder), __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__["components"].Control, props)));
};

/* harmony default export */ __webpack_exports__["a"] = (ControlComponent);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B+Aq");


/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ "AZl1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCalendarCellClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCalendarDayClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calendarMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currentMonthIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return currentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getFirstDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getDaysInActiveMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDaysInPreviousMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getNextMonthAsCurrentMonth; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const getCalendarCellClassName = (hasEvents, inActiveColumn) => {
  let classNames = 'cal-cell1 cal-cell ';

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
const getCalendarDayClassName = (date, inMonth, activeDateKey) => {
  let className = 'cal-month-day ';

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
const calendarMap = {
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
const currentMonthIndex = Number(moment__WEBPACK_IMPORTED_MODULE_0___default()().format('M')) - 1;
const currentYear = new Date().getFullYear().toString().substr(-2);
const getDayDate = date => moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date)).format('ddd, MMM Do');
const getFirstDay = activeMonthIndex => new Date(2019, activeMonthIndex).getDay();
const getDaysInActiveMonth = activeMonthIndex => 32 - new Date(2019, activeMonthIndex, 32).getDate();
const getDaysInPreviousMonth = activeMonthIndex => 32 - new Date(2019, activeMonthIndex - 1, 32).getDate();
const getNextMonthAsCurrentMonth = activeMonthIndex => activeMonthIndex > 9 ? activeMonthIndex + 1 : `0${activeMonthIndex + 1}`;

/***/ }),

/***/ "B+Aq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YckE");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uzjx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("325u");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Dashboard_components_FilterSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Guna");
/* harmony import */ var _components_Dashboard_components_CalendarHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("R5Ku");
/* harmony import */ var _components_Dashboard_components_CalendarRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("F//q");
/* harmony import */ var _components_Dashboard_components_Modals_AssignSessionModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/UQ3");
/* harmony import */ var _components_Dashboard_components_Modals_AssignLessonModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("wH9L");
/* harmony import */ var _components_Dashboard_components_Modals_AssignWorksheetModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("fRFr");
/* harmony import */ var _components_Dashboard_components_Modals_AssignTestSectionModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("MV2m");
/* harmony import */ var _components_Dashboard_components_Modals_AssignSimulatedSATModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("cufv");
/* harmony import */ var _components_Dashboard_components_Modals_AssignTargetTestModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("D4DP");
/* harmony import */ var _components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("AZl1");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















class Calendar extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onSetActiveMonth", activeMonthIndex => {
      // daysInPreviousMonth is used to handle cases where the calendar for the month starts with dates from the preceding month
      // firstDay indicates the day the first day of the month falls on in a zero-based index manner, meaning Sunday is 0, Monday is 1, etc
      const daysInPreviousMonth = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_15__[/* getDaysInPreviousMonth */ "h"])(activeMonthIndex);
      const daysInActiveMonth = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_15__[/* getDaysInActiveMonth */ "g"])(activeMonthIndex);
      const firstDay = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_15__[/* getFirstDay */ "i"])(activeMonthIndex);
      const rows = []; // We increment calDate and change inMonth in the case where dates from the next month appear in row 1 or row 6
      // Since activeMonthIndex is zero-based, currentMonth adds 1 so the cells are accurate as actual calendar dates
      // getNextMonthAsCurrentMonth is used to derive the current month to ensure it matches the format of incoming dates - 01/15/19 vs 1/15/19, otherwise new events wouldn't find the date to be assigned to

      let inMonth = true;
      let calDate = 1;
      let currentMonth = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_15__[/* getNextMonthAsCurrentMonth */ "j"])(activeMonthIndex);

      if (firstDay !== 0) {
        currentMonth = currentMonth > 9 ? currentMonth -= 1 : `0${currentMonth - 1}`;
        calDate = daysInPreviousMonth - firstDay + 1;
        inMonth = false;
      } // First for loop handles the 6 calendar rows, second for loop handles the 7 days of the week


      for (let i = 0; i < 6; i++) {
        const rowArr = [];

        for (let j = 0; j < 7; j++) {
          const date = `${currentMonth}/${calDate > 9 ? calDate : `0${calDate}`}/${_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_15__[/* currentYear */ "c"]}`;
          const dayDate = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_15__[/* getDayDate */ "f"])(date);
          const activeDateKey = `row-${i + 1}-column-${j + 1}`; // This if statement handles the easiest calendar month scenario, where the 1st of the month falls on a Sunday

          if (firstDay === 0) {
            const dateCell = {
              date,
              dayDate,
              calDate,
              activeDateKey,
              inMonth,
              sessions: [],
              lessons: [],
              worksheets: [],
              testSections: [],
              simulatedSat: []
            }; // This if statement handles the case where the date spills over into the next month

            if (calDate === daysInActiveMonth) {
              calDate = 1;
              currentMonth = activeMonthIndex > 9 ? activeMonthIndex + 2 : `0${activeMonthIndex + 2}`;
              inMonth = false;
            } else {
              calDate += 1;
            }

            rowArr.push(dateCell);
          } // This else statement handles the more likely scenario, where the first row contains several days from the preceding month
          else {
              const dateCell = {
                date,
                dayDate,
                calDate,
                activeDateKey,
                inMonth,
                sessions: [],
                lessons: [],
                worksheets: [],
                testSections: [],
                simulatedSat: []
              }; // This if statement handles the case where the date spills over into the next month

              if (inMonth === false && calDate === daysInPreviousMonth) {
                calDate = 1;
                currentMonth = Object(_components_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_15__[/* getNextMonthAsCurrentMonth */ "j"])(activeMonthIndex);
                inMonth = true;
              } else if (inMonth === true && calDate === daysInActiveMonth) {
                currentMonth = activeMonthIndex > 9 ? activeMonthIndex + 2 : `0${activeMonthIndex + 2}`;
                calDate = 1;
                inMonth = false;
              } else {
                calDate += 1;
              }

              rowArr.push(dateCell);
            }
        }

        ;
        rows.push(...rowArr);
      }

      ;
      this.setState({
        activeMonth: activeMonthIndex,
        rows
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onSetActiveDate", incomingDate => {
      this.setState({
        activeDate: incomingDate,
        activeColumn: incomingDate[13]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onAssignSession", session => {
      const {
        rows
      } = this.state;
      const updatedDate = rows.filter(row => row.date === session.date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.sessions.push(session);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      this.setState({
        rows: updatedRows
      });
      this.onToggleAssignSessionModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onAssignLessons", (lessons, date) => {
      const {
        rows
      } = this.state;
      const updatedDate = rows.filter(row => row.date === date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.lessons.push(...lessons);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      this.setState({
        rows: updatedRows
      });
      this.onToggleAssignLessonsModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onAssignWorksheets", (worksheets, date) => {
      const {
        rows
      } = this.state;
      const updatedDate = rows.filter(row => row.date === date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.worksheets.push(...worksheets);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      this.setState({
        rows: updatedRows
      });
      this.onToggleAssignWorksheetsModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onAssignTestSection", testSection => {
      const {
        rows
      } = this.state;
      const updatedDate = rows.filter(row => row.date === testSection.assignDate)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.testSections.push(testSection);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      this.setState({
        rows: updatedRows
      });
      this.onToggleAssignTestSectionModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onAssignSimulatedSat", simulatedSat => {
      const {
        rows
      } = this.state;
      const updatedDate = rows.filter(row => row.date === simulatedSat.assignDate)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.simulatedSat.push(simulatedSat);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      this.setState({
        rows: updatedRows
      });
      this.onToggleAssignSimulatedSatModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onAssignTargetTest", targetTestDate => {
      // eslint-disable-next-line no-throw-literal
      throw `pending decision of what test date assign ui looks like${targetTestDate.toString()}`; // console.warn(, targetTestDate);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleAssignSessionModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignSessionModalOpen
      }) => ({
        assignSessionModalOpen: !assignSessionModalOpen,
        modalDate,
        assignDropdownIsOpen: false
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleAssignLessonsModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignLessonsModalOpen
      }) => ({
        assignLessonsModalOpen: !assignLessonsModalOpen,
        modalDate,
        assignDropdownIsOpen: false
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleAssignWorksheetsModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignWorksheetsModalOpen
      }) => ({
        assignWorksheetsModalOpen: !assignWorksheetsModalOpen,
        modalDate,
        assignDropdownIsOpen: false
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleAssignTestSectionModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignTestSectionModalOpen
      }) => ({
        assignTestSectionModalOpen: !assignTestSectionModalOpen,
        modalDate,
        assignDropdownIsOpen: false
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleAssignSimulatedSatModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignSimulatedSatModalOpen
      }) => ({
        assignSimulatedSatModalOpen: !assignSimulatedSatModalOpen,
        modalDate,
        assignDropdownIsOpen: false
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleAssignTargetTestModal", (event = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignTargetTestDateModalOpen
      }) => ({
        assignTargetTestDateModalOpen: !assignTargetTestDateModalOpen,
        assignDropdownIsOpen: false
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleAddDropdown", () => this.setState(({
      addDropdownOpen
    }) => ({
      addDropdownOpen: !addDropdownOpen,
      deleteDropdownOpen: false
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleDeleteDropdown", () => this.setState(({
      deleteDropdownOpen
    }) => ({
      deleteDropdownOpen: !deleteDropdownOpen,
      addDropdownOpen: false
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleAssignDropdown", () => this.setState(({
      assignDropdownIsOpen
    }) => ({
      assignDropdownIsOpen: !assignDropdownIsOpen
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onToggleHandleFilteredItemsDropdown", () => this.setState(({
      onToggleHandleFilteredItemsDropdown
    }) => ({
      onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onClearFilters", () => this.setState({
      filters: [],
      eventFilters: []
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onHandleDetailsChange", (name, event) => this.setState({
      [name]: event.target.value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onDragEnd", result => {
      const {
        rows
      } = this.state;
      const {
        source,
        destination,
        draggableId
      } = result; // The following draggable vars are pulled from the dragged item to identify the event type (lesson, worksheet, etc), date, and index in that date's array of that type of event

      const draggableKeys = draggableId.split('-');
      const draggableType = draggableKeys[0];
      const draggableIndex = draggableKeys[2]; // If the event isn't switching dates, we return out of the function early and do nothing

      if (!destination || source.droppableId === destination.droppableId) {
        return;
      } // The follwing sourceDate and destinationDate vars are used to find the dates being modified and their index in the month of calendar dates


      const sourceDateKey = source.droppableId.split('-')[1];
      const destinationDateKey = destination.droppableId.split('-')[1];
      const sourceDate = rows.filter(row => row.date === sourceDateKey)[0];
      const destinationDate = rows.filter(row => row.date === destinationDateKey)[0];
      const sourceDateIndex = rows.indexOf(sourceDate);
      const destinationDateIndex = rows.indexOf(destinationDate); // Here we target the event being moved, alter its date to that of the destintion, splice it from the source and push it to the destination
      // Finally, we perform two splice operations to replace the old source and destination dates with their updated equivalents

      const movedEvent = sourceDate[draggableType][draggableIndex];
      movedEvent.date = destinationDate.date;
      sourceDate[draggableType].splice(draggableIndex, 1);
      destinationDate[draggableType].push(movedEvent);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(rows, {
        $splice: [[sourceDateIndex, 1, sourceDate], [destinationDateIndex, 1, destinationDate]]
      });
      this.setState({
        rows: updatedRows
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "handleFilterClick", (filter, eventFilter = false) => {
      // TODO: Only the following filters are active: sessions, lessons, worksheets, test sections, simulated sats, target tests
      // The other filters dont seem to have corresponding data in this page
      const {
        filters: allFilters,
        eventFilters
      } = this.state;
      let filters;
      let filterName;

      if (eventFilter) {
        filters = eventFilters;
        filterName = 'eventFilters';
      } else {
        filters = allFilters;
        filterName = 'filters';
      }

      let updatedFilters;

      if (filters.indexOf(filter) === -1) {
        updatedFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(filters, {
          $push: [filter]
        });
      } else {
        const filterIndex = filters.indexOf(filter);
        updatedFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(filters, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [filterName]: updatedFilters
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "mapRows", () => {
      const {
        rows,
        filters,
        eventFilters,
        activeDate,
        activeColumn,
        addDropdownOpen,
        deleteDropdownOpen
      } = this.state;
      let startIndex = -7;
      let endIndex = 0;
      const rowArray = [];

      for (let i = 0; i < 6; i++) {
        startIndex += 7;
        endIndex += 7;
        rowArray.push(__jsx(_components_Dashboard_components_CalendarRow__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
          key: i,
          rows: rows.slice(startIndex, endIndex),
          filters: filters,
          eventFilters: eventFilters,
          activeDate: activeDate,
          activeColumn: activeColumn,
          addDropdownOpen: addDropdownOpen,
          deleteDropdownOpen: deleteDropdownOpen,
          onSetActiveDate: this.onSetActiveDate,
          onToggleAddDropdown: this.onToggleAddDropdown,
          onToggleDeleteDropdown: this.onToggleDeleteDropdown,
          onToggleAssignLessonsModal: this.onToggleAssignLessonsModal,
          onToggleAssignSessionModal: this.onToggleAssignSessionModal,
          onToggleAssignWorksheetsModal: this.onToggleAssignWorksheetsModal,
          onToggleAssignTestSectionModal: this.onToggleAssignTestSectionModal,
          onToggleAssignSimulatedSatModal: this.onToggleAssignSimulatedSatModal
        }));
      }

      return rowArray;
    });

    this.state = {
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
      modalDate: null,
      accountActivated: false,
      activationDropdownOpen: false,
      licenseCode: ''
    };
  } // This is called onMount in CalendarHeader component to set the current month calendar rows, and every time the month changes afterward
  // IMPORTANT: activeMonthIndex is zero-based, meaning January is 0, February is 1, etc.


  render() {
    const {
      assignSessionModalOpen,
      assignLessonsModalOpen,
      assignWorksheetsModalOpen,
      activeMonth,
      assignTestSectionModalOpen,
      assignSimulatedSatModalOpen,
      assignTargetTestDateModalOpen,
      modalDate,
      assignDropdownIsOpen,
      onToggleHandleFilteredItemsDropdown,
      filters,
      eventFilters,
      accountActivated,
      activationDropdownOpen,
      licenseCode
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Dashboard_components_Modals_AssignSessionModal__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      modalDate: modalDate,
      open: assignSessionModalOpen,
      onClose: this.onToggleAssignSessionModal,
      onAssignSession: this.onAssignSession
    }), __jsx(_components_Dashboard_components_Modals_AssignLessonModal__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      modalDate: modalDate,
      open: assignLessonsModalOpen,
      onClose: this.onToggleAssignLessonsModal,
      onAssignLessons: this.onAssignLessons
    }), __jsx(_components_Dashboard_components_Modals_AssignWorksheetModal__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      modalDate: modalDate,
      open: assignWorksheetsModalOpen,
      onClose: this.onToggleAssignWorksheetsModal,
      onAssignWorksheets: this.onAssignWorksheets
    }), __jsx(_components_Dashboard_components_Modals_AssignTestSectionModal__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      modalDate: modalDate,
      open: assignTestSectionModalOpen,
      onClose: this.onToggleAssignTestSectionModal,
      onAssignTestSection: this.onAssignTestSection
    }), __jsx(_components_Dashboard_components_Modals_AssignSimulatedSATModal__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      modalDate: modalDate,
      open: assignSimulatedSatModalOpen,
      onClose: this.onToggleAssignSimulatedSatModal,
      onAssignSimulatedSat: this.onAssignSimulatedSat
    }), __jsx(_components_Dashboard_components_Modals_AssignTargetTestModal__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      open: assignTargetTestDateModalOpen,
      onClose: this.onToggleAssignTargetTestModal,
      onAssignTargetTest: this.onAssignTargetTest
    }), __jsx("main", {
      id: "main",
      role: "main"
    }, __jsx("div", {
      className: "main-holder grey lighten-3"
    }, __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_5__["StickyContainer"], null, __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_5__["Sticky"], null, ({
      style
    }) => __jsx("div", {
      className: "title-row card-panel",
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, style, {
        zIndex: 1999
      })
    }, __jsx("div", {
      className: "mobile-header"
    }, __jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, __jsx("i", {
      className: "material-icons"
    }, "menu"))), __jsx("nav", {
      className: "breadcrumb-holder"
    }, __jsx("div", {
      className: "nav-wrapper "
    }, __jsx("a", {
      href: "#",
      className: "breadcrumb"
    }, "< Classes"))), __jsx("h2", {
      className: "h1 white-text"
    }, __jsx("span", {
      className: "heading-holder"
    }, __jsx("i", {
      className: "icon-members"
    }), __jsx("span", {
      className: "heading-block"
    }, "Some Class in June"))), __jsx("nav", {
      className: "nav-additional"
    }, __jsx("ul", {
      className: "menu-additional"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Summary")), __jsx("li", null, __jsx("a", {
      className: "active",
      href: "#"
    }, "Calendar")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Lessons")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Tests")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Account")))), __jsx("div", {
      className: "activate-block"
    }, accountActivated ? __jsx("a", {
      href: "#",
      className: "waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"
    }, __jsx("b", {
      className: "btn-text visible-lg"
    }, "Account Activated"), " ", __jsx("i", {
      className: "icon-unlock"
    })) : __jsx("a", {
      href: "#",
      onClick: this.onToggleActivationDropdown,
      className: "waves-effect btn btn-orange btn-account_inactive dropdown-trigger",
      "data-target": "dropdown_activate"
    }, __jsx("b", {
      className: "btn-text visible-lg"
    }, "Activate Account"), " ", __jsx("i", {
      className: "icon-key"
    })), __jsx("div", {
      id: "dropdown_activate",
      className: "dropdown-content",
      style: activationDropdownOpen ? {
        display: 'block',
        opacity: '1'
      } : {}
    }, __jsx("div", {
      className: "card-panel"
    }, __jsx("div", {
      className: "title-block"
    }, __jsx("div", {
      className: "h3"
    }, "Ready to begin your course?"), __jsx("div", {
      className: "subtitle"
    }, "Please enter a valid license code below.")), __jsx("div", {
      className: "input-field"
    }, __jsx("input", {
      type: "text",
      value: licenseCode,
      id: "license-code",
      onChange: event => this.onHandleDetailsChange('licenseCode', event)
    }), __jsx("label", {
      className: "label",
      htmlFor: "license_code"
    }, "License Code")), __jsx("div", {
      className: "btn-holder center-align"
    }, __jsx("button", {
      className: "btn btn-blue",
      type: "submit"
    }, "Activate")), __jsx("div", {
      className: "text-block center-align"
    }, __jsx("p", null, "If you need license codes, you can get them here: ", __jsx("a", {
      href: "#",
      className: "waves-effect waves-light btn-small btn-blue"
    }, "Purchase Licenses"))), __jsx("div", {
      className: "text-block"
    }, __jsx("p", null, "*Note: "), __jsx("p", null, "We o\uFB00er discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students."))))))), __jsx(_components_Dashboard_components_FilterSection__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      filters: filters,
      eventFilters: eventFilters,
      onClearFilters: this.onClearFilters,
      handleFilterClick: this.handleFilterClick
    }), __jsx("div", {
      className: "calendar-section view-month"
    }, __jsx("div", {
      className: "calendar-slider"
    }, __jsx(_components_Dashboard_components_CalendarHeader__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      activeMonth: Number(activeMonth),
      onSetActiveMonth: this.onSetActiveMonth
    }), __jsx("div", {
      id: "calendar",
      className: "main-slick-calendar cal-context",
      style: {
        width: '100%'
      }
    }, __jsx("div", {
      className: "slide"
    }, __jsx("table", {
      className: "calendar-table cal-month-box"
    }, __jsx("thead", null, __jsx("tr", {
      className: "calendar-head-row"
    }, __jsx("th", null, "Su"), __jsx("th", null, "M"), __jsx("th", null, "Tu"), __jsx("th", null, "W"), __jsx("th", null, "Th"), __jsx("th", null, "F"), __jsx("th", null, "Sa"))), __jsx("tbody", null, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["DragDropContext"], {
      onDragEnd: this.onDragEnd
    }, this.mapRows()))))), __jsx("div", {
      className: "add-btn-block"
    }, __jsx("a", {
      href: "#",
      "data-target": "dropdown_assign",
      onClick: this.onToggleAssignDropdown,
      className: "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, "Assign..."), __jsx("ul", {
      id: "dropdown_assign",
      className: "dropdown-content",
      style: {
        display: assignDropdownIsOpen ? 'block' : 'none',
        opacity: assignDropdownIsOpen ? '100' : '0'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSessionModal,
      className: "modal-trigger"
    }, "Session")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignLessonsModal,
      className: "modal-trigger"
    }, "Lesson")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignWorksheetsModal,
      className: "modal-trigger"
    }, "Worksheet")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignTestSectionModal,
      className: "modal-trigger"
    }, "Test Section")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSimulatedSatModal,
      className: "modal-trigger"
    }, "Simulated SAT")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignTargetTestModal,
      className: "modal-trigger"
    }, "Target Test")), __jsx("li", {
      className: "divider",
      tabIndex: "-1"
    }), __jsx("li", {
      className: "dropdown-footer"
    }, __jsx("a", {
      href: "#",
      className: "modal-trigger"
    }, "Apply Course Template")))), __jsx("div", {
      className: "add-btn-block btn-block-right"
    }, __jsx("a", {
      href: "#",
      "data-target": "dropdown_other",
      onClick: this.onToggleHandleFilteredItemsDropdown,
      className: "dropdown-trigger waves-effect waves-teal btn add-btn-circle"
    }, __jsx("i", {
      className: "icon-dots"
    })), __jsx("ul", {
      id: "dropdown_other",
      className: "dropdown-content",
      style: {
        display: onToggleHandleFilteredItemsDropdown ? 'block' : 'none',
        opacity: onToggleHandleFilteredItemsDropdown ? '100' : '0'
      }
    }, __jsx("li", {
      className: "dropdown-header"
    }, __jsx("b", null, "With Filtered Items... "), __jsx("b", {
      className: "small"
    }, "(items currently visible on calendar)")), __jsx("li", {
      className: "divider"
    }), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "modal-trigger"
    }, "Save Course as Template")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Reset All")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Delete All"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "D4DP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("x4x+");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("EABn");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/NWr");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const testDateOptions = [{
  label: 'January SAT (01/15/2019)',
  value: '01/15/19'
}, {
  label: 'January SAT (01/02/2019)',
  value: '01/02/19'
}, {
  label: 'January SAT (01/21/2019)',
  value: '01/21/19'
}];

class AssignTargetTestModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onSetTestDate", testDate => this.setState({
      testDate
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseModal", () => this.setState({
      testDate: ''
    }, this.props.onClose));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "assignTargetTest", () => {
      const {
        onAssignTargetTest
      } = this.props;
      const {
        testDate
      } = this.state;
      onAssignTargetTest(testDate);
      this.onCloseModal();
    });

    this.state = {
      testDate: ''
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      testDate
    } = this.state;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-2310887436" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_assign_target_test",
      style: {
        zIndex: '1003',
        top: '10%'
      },
      className: "jsx-2310887436" + " " + "modal modal-custom modal-calendar"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#ec3330',
        color: '#fff'
      },
      className: "jsx-2310887436" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-2310887436"
    }, __jsx("span", {
      className: "jsx-2310887436" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-2310887436" + " " + "icon-cup"
    }), __jsx("span", {
      className: "jsx-2310887436" + " " + "heading-block"
    }, " Set Target Test Date")))), __jsx("div", {
      className: "jsx-2310887436" + " " + "col right-align"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2310887436" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-2310887436" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-2310887436" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "col s12"
    }, __jsx("div", {
      style: {
        marginBottom: '0',
        marginTop: '0'
      },
      className: "jsx-2310887436" + " " + "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(testDate, testDateOptions),
      onChange: this.onSetTestDate,
      options: testDateOptions,
      label: "Test Date",
      stateKey: "testDate",
      dropdownKey: "testDate"
    })))), __jsx("div", {
      className: "jsx-2310887436" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "col s12"
    }, __jsx("span", {
      className: "jsx-2310887436" + " " + "note"
    }, "Note:"), __jsx("p", {
      className: "jsx-2310887436"
    }, "If the student plans to take the SAT multiple times, you may schedule multiple \u201CTarget Test Dates.\u201D Test score and improvement metrics will be based on the student\u2019s score on the \uFB01nal target test date.")))), __jsx("div", {
      className: "jsx-2310887436" + " " + "modal-footer modal-footer-width"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-2310887436" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.assignTargetTest,
      className: "jsx-2310887436" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Set Target Test Date"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2310887436"
    }, [".overlay.jsx-2310887436{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-2310887436{margin:0;border-radius:6px;}", ".modal-custom.jsx-2310887436{opacity:1;visibility:visible;}", ".modal-footer.jsx-2310887436{background-color:white;}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AssignTargetTestModal);

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






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
}) => __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
  className: className,
  valid: valid || !valid && value === {},
  padRight: padRight
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
  options: options,
  onChange: event => onChange(event.value, dropdownKey, stateKey),
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

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ "F//q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__("uzjx");

// EXTERNAL MODULE: ./components/Dashboard/utils/dateAndCalendarUtils.js
var dateAndCalendarUtils = __webpack_require__("AZl1");

// CONCATENATED MODULE: ./components/Dashboard/components/CalendarDate/index.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */




const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'inherit'
}); // eslint-disable-next-line react/prefer-stateless-function


class CalendarDate_CalendarDate extends external_react_default.a.Component {
  render() {
    const {
      date,
      dayDate,
      calDate,
      inMonth,
      hasEvents,
      isActiveDate,
      inActiveColumn,
      addDropdownOpen,
      onSetActiveDate,
      shouldMapLessons,
      shouldMapSessions,
      deleteDropdownOpen,
      onToggleAddDropdown,
      shouldMapWorksheets,
      shouldMapTestSections,
      onToggleDeleteDropdown,
      shouldMapSimulatedSats,
      activeDateKey,
      mapDateSessions,
      mapDateLessons,
      mapDateWorksheets,
      mapTestSections,
      mapSimulatedSats,
      toggleAssignSessionModal,
      toggleAssignLessonsModal,
      toggleAssignWorksheetsModal,
      toggleAssignTestSectionModal,
      toggleAssignSimulatedSatModal,
      sessions,
      lessons,
      worksheets,
      testSections,
      simulatedSat
    } = this.props;
    return __jsx(external_react_default.a.Fragment, null, !inMonth ? __jsx("td", {
      className: "cal-cell1 cal-cell cal-day-outmonth",
      key: dayDate
    }, __jsx("div", {
      className: Object(dateAndCalendarUtils["e" /* getCalendarDayClassName */])(date, inMonth, activeDateKey)
    }, __jsx("span", {
      className: "day-date"
    }, dayDate), __jsx("span", {
      className: "cal-date"
    }, calDate))) : __jsx("td", {
      key: activeDateKey,
      className: Object(dateAndCalendarUtils["d" /* getCalendarCellClassName */])(hasEvents, inActiveColumn),
      onClick: () => onSetActiveDate(activeDateKey)
    }, __jsx(external_react_beautiful_dnd_["Droppable"], {
      droppableId: `droppable-${date}`
    }, (provided, snapshot) => __jsx("div", {
      ref: provided.innerRef,
      style: getListStyle(snapshot.isDraggingOver)
    }, __jsx("div", {
      className: Object(dateAndCalendarUtils["e" /* getCalendarDayClassName */])(date, inMonth, activeDateKey)
    }, __jsx("span", {
      className: "day-date"
    }, dayDate), __jsx("span", {
      className: "cal-date"
    }, calDate), __jsx("ul", {
      className: "day-collapsible collapsible"
    }, __jsx("li", {
      className: isActiveDate ? 'collapsible-holder active' : 'collapsible-holder',
      style: {
        transform: 'none'
      }
    }, __jsx("div", {
      className: "collapsible-header",
      style: {
        display: inActiveColumn && isActiveDate ? 'none' : 'block'
      }
    }, __jsx("span", {
      className: "fake-close"
    }, __jsx("span", {
      className: "icon-close-thin"
    })), hasEvents ? __jsx("ul", {
      className: "events-list events-list-short"
    }, shouldMapSessions ? __jsx("li", {
      className: "event-frame event-title"
    }, __jsx("span", {
      className: "event-title-box"
    }, "Session ", sessions.length)) : null, shouldMapLessons ? __jsx("li", {
      className: "event-frame"
    }, __jsx("span", {
      className: "event event-lesson-box"
    }, " ", lessons.length, " ", __jsx("span", {
      className: "event-text"
    }, "Lesson", lessons.length > 1 && 's'))) : null, shouldMapWorksheets ? __jsx("li", {
      className: "event-frame"
    }, __jsx("span", {
      className: "event event-worksheet-box"
    }, worksheets.length, " ", __jsx("span", {
      className: "event-text"
    }, "Worksheet", worksheets.length > 1 && 's'))) : null, shouldMapTestSections ? __jsx("li", {
      className: "event-frame"
    }, __jsx("span", {
      className: "event event-test-box"
    }, testSections.length, " ", __jsx("span", {
      className: "event-text"
    }, "Test Section", testSections.length > 1 && 's'))) : null, shouldMapSimulatedSats ? __jsx("li", {
      className: "event-frame"
    }, __jsx("span", {
      className: "event event-sat-box"
    }, simulatedSat.length, " ", __jsx("span", {
      className: "event-text"
    }, "Simulated SAT"))) : null) : null), __jsx("div", {
      className: "collapsible-body",
      style: {
        opacity: inActiveColumn && isActiveDate ? '1' : '0',
        visibility: inActiveColumn ? 'visible' : 'hidden'
      }
    }, hasEvents ? __jsx("ul", {
      className: "events-list"
    }, mapDateSessions(shouldMapSessions, sessions), mapDateLessons(shouldMapLessons, lessons), mapDateWorksheets(shouldMapWorksheets, worksheets), mapTestSections(shouldMapTestSections, testSections), mapSimulatedSats(shouldMapSimulatedSats, simulatedSat)) : null, __jsx("div", {
      className: "day-footer"
    }, __jsx("ul", {
      className: "links-list"
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      "data-target": "dropdown_day_240119_add",
      onClick: onToggleAddDropdown,
      className: "link-add dropdown-trigger waves-effect waves-teal"
    }, "Add"), __jsx("ul", {
      id: "dropdown_day_240119_add",
      className: "dropdown-content",
      style: {
        display: addDropdownOpen ? 'block' : 'none',
        opacity: addDropdownOpen ? '100' : '0'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignSessionModal(event, date),
      className: "modal-trigger"
    }, "Session")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignLessonsModal(event, date),
      className: "modal-trigger"
    }, "Lesson")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignWorksheetsModal(event, date),
      className: "modal-trigger"
    }, "Worksheet")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignTestSectionModal(event, date),
      className: "modal-trigger"
    }, "Test Section")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignSimulatedSatModal(event, date),
      className: "modal-trigger"
    }, "Simulated SAT")))), __jsx("li", null, __jsx("a", {
      href: "#",
      "data-target": "dropdown_day_240119_delete",
      onClick: onToggleDeleteDropdown,
      className: "link-delete dropdown-trigger waves-effect waves-teal"
    }, "Delete"), __jsx("ul", {
      id: "dropdown_day_240119_delete",
      className: "dropdown-content",
      style: {
        display: deleteDropdownOpen ? 'block' : 'none',
        opacity: deleteDropdownOpen ? '100' : '0'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#modal_edit_delete_section",
      className: "modal-trigger"
    }, "Session")), __jsx("li", null, __jsx("a", {
      href: "#modal_edit_delete_lesson",
      className: "modal-trigger"
    }, "Lesson")), __jsx("li", null, __jsx("a", {
      href: "#modal_edit_delete_worksheet",
      className: "modal-trigger"
    }, "Worksheet")), __jsx("li", null, __jsx("a", {
      href: "#modal_edit_delete_test_section",
      className: "modal-trigger"
    }, "Test Section")), __jsx("li", null, __jsx("a", {
      href: "#!",
      className: "disabled"
    }, "Simulated SAT")), __jsx("li", null, __jsx("a", {
      href: "#!",
      className: "disabled"
    }, "Target Test")), __jsx("li", null, __jsx("a", {
      href: "#!"
    }, "All")))))))))), provided.placeholder))));
  }

}

;
/* harmony default export */ var components_CalendarDate = (CalendarDate_CalendarDate);
// CONCATENATED MODULE: ./components/Dashboard/components/CalendarRow/index.js


var CalendarRow_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-array-index-key */




class CalendarRow_CalendarRow extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "toggleAssignSessionModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignSessionModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignSessionModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "toggleAssignLessonsModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignLessonsModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignLessonsModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "toggleAssignWorksheetsModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignWorksheetsModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignWorksheetsModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "toggleAssignTestSectionModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignTestSectionModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignTestSectionModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "toggleAssignSimulatedSatModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignSimulatedSatModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignSimulatedSatModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "mapDateSessions", (shouldMapSessions, sessions) => {
      if (shouldMapSessions) {
        return sessions.map((session, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `sessions-${session.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), CalendarRow_jsx("span", {
          className: "event-title-box"
        }, session.title)))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapDateLessons", (shouldMapLessons, lessons) => {
      if (shouldMapLessons) {
        return lessons.map((lesson, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `lessons-${lesson.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), CalendarRow_jsx(external_react_default.a.Fragment, null, lesson.completed && CalendarRow_jsx("span", {
          className: "event-check lesson-check"
        }, CalendarRow_jsx("i", {
          className: "icon-check02"
        })), CalendarRow_jsx("span", {
          className: "event event-lesson-box"
        }, lesson.title))))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapDateWorksheets", (shouldMapWorksheets, worksheets) => {
      if (shouldMapWorksheets) {
        return worksheets.map((worksheet, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `worksheets-${worksheet.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), CalendarRow_jsx(external_react_default.a.Fragment, null, worksheet.completed && CalendarRow_jsx("span", {
          className: "event-check worksheet-check"
        }, CalendarRow_jsx("i", {
          className: "icon-check02"
        })), CalendarRow_jsx("span", {
          className: "event event-worksheet-box"
        }, worksheet.title))))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapTestSections", (shouldMapTestSections, testSections) => {
      if (shouldMapTestSections) {
        return testSections.map((testSection, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `testSections-${testSection.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), CalendarRow_jsx("span", {
          className: "event event-test-box"
        }, "Test Section: ", testSection.version)))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapSimulatedSats", (shouldMapSimulatedSats, simulatedSat) => {
      if (shouldMapSimulatedSats) {
        return simulatedSat.map((sat, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `simulatedSat-${sat.date}-${index}`
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.dragHandleProps, provided.dragHandleProps), CalendarRow_jsx("span", {
          className: "event event-sat-box"
        }, sat.version)))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapRowDates", () => this.props.rows && this.props.rows.map(rowDate => {
      const {
        eventFilters,
        activeDate,
        addDropdownOpen,
        deleteDropdownOpen,
        onSetActiveDate,
        onToggleAddDropdown,
        onToggleDeleteDropdown,
        activeColumn
      } = this.props;
      const {
        date,
        dayDate,
        calDate,
        activeDateKey,
        inMonth,
        sessions = [],
        lessons = [],
        worksheets = [],
        testSections = [],
        simulatedSat = []
      } = rowDate;
      const hasEvents = sessions.length > 0 || lessons.length > 0 || worksheets.length > 0 || testSections.length > 0 || simulatedSat.length > 0;
      const inActiveColumn = activeDateKey && activeDateKey[13] === activeColumn;
      const isActiveDate = activeDate === activeDateKey;
      const hasEventFilters = eventFilters.length > 0;
      const shouldMapSessions = !hasEventFilters && sessions.length || sessions.length > 0 && hasEventFilters && eventFilters.indexOf('sessions') !== -1;
      const shouldMapLessons = !hasEventFilters && lessons.length || lessons.length > 0 && hasEventFilters && eventFilters.indexOf('lessons') !== -1;
      const shouldMapWorksheets = !hasEventFilters && worksheets.length || worksheets.length > 0 && hasEventFilters && eventFilters.indexOf('worksheets') !== -1;
      const shouldMapTestSections = !hasEventFilters && testSections.length || testSections.length > 0 && hasEventFilters && eventFilters.indexOf('testSections') !== -1;
      const shouldMapSimulatedSats = !hasEventFilters && simulatedSat.length || simulatedSat.length > 0 && hasEventFilters && eventFilters.indexOf('simulatedSats') !== -1;
      return CalendarRow_jsx(components_CalendarDate, {
        sessions: sessions,
        lessons: lessons,
        worksheets: worksheets,
        testSections: testSections,
        simulatedSat: simulatedSat,
        key: date,
        date: date,
        dayDate: dayDate,
        calDate: calDate,
        inMonth: inMonth,
        hasEvents: hasEvents,
        isActiveDate: isActiveDate,
        activeDateKey: activeDateKey,
        inActiveColumn: inActiveColumn,
        addDropdownOpen: addDropdownOpen,
        onSetActiveDate: onSetActiveDate,
        shouldMapLessons: shouldMapLessons,
        shouldMapSessions: shouldMapSessions,
        deleteDropdownOpen: deleteDropdownOpen,
        onToggleAddDropdown: onToggleAddDropdown,
        shouldMapWorksheets: shouldMapWorksheets,
        shouldMapTestSections: shouldMapTestSections,
        onToggleDeleteDropdown: onToggleDeleteDropdown,
        shouldMapSimulatedSats: shouldMapSimulatedSats,
        mapDateSessions: this.mapDateSessions,
        mapDateLessons: this.mapDateLessons,
        mapDateWorksheets: this.mapDateWorksheets,
        mapTestSections: this.mapTestSections,
        mapSimulatedSats: this.mapSimulatedSats,
        toggleAssignSessionModal: this.toggleAssignSessionModal,
        toggleAssignLessonsModal: this.toggleAssignLessonsModal,
        toggleAssignWorksheetsModal: this.toggleAssignWorksheetsModal,
        toggleAssignTestSectionModal: this.toggleAssignTestSectionModal,
        toggleAssignSimulatedSatModal: this.toggleAssignSimulatedSatModal
      });
    }));
  }

  render() {
    return CalendarRow_jsx("tr", {
      className: "cal-row-fluid"
    }, this.mapRowDates());
  }

}

/* harmony default export */ var components_CalendarRow = __webpack_exports__["a"] = (CalendarRow_CalendarRow);

/***/ }),

/***/ "Guna":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */


class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    this.state = {
      open: false
    };
  }

  render() {
    const {
      open
    } = this.state;
    const {
      filters,
      eventFilters,
      onClearFilters,
      handleFilterClick
    } = this.props;
    return __jsx("div", {
      className: "calendar-filter filter-form-holder"
    }, __jsx("ul", {
      className: "collapsible expandable",
      style: {
        minHeight: '0'
      }
    }, __jsx("li", null, __jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, __jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "className",
      name: "className",
      checked: filters.indexOf('className') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "className"
    }, "Some Class Name")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "tutoring",
      name: "tutoring",
      checked: filters.indexOf('tutoring') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "tutoring"
    }, "Tutoring"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "sessions",
      name: "sessions",
      checked: eventFilters.indexOf('sessions') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "sessions"
    }, "Sessions")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "lessons",
      name: "lessons",
      checked: eventFilters.indexOf('lessons') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "lessons"
    }, "Lessons"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "worksheets",
      name: "worksheets",
      checked: eventFilters.indexOf('worksheets') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "worksheets"
    }, "Worksheets")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "testSections",
      name: "testSections",
      checked: eventFilters.indexOf('testSections') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "testSections"
    }, "Test Sections")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "simulatedSats",
      name: "simulatedSats",
      checked: eventFilters.indexOf('simulatedSats') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "simulatedSats"
    }, "Simulated SATs")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "targetTests",
      name: "targetTests",
      checked: eventFilters.indexOf('targetTests') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "targetTests"
    }, "Target Tests"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueToday",
      name: "dueToday",
      checked: filters.indexOf('dueToday') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "dueToday"
    }, "Due Today")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueNextSession",
      name: "dueNextSession",
      checked: filters.indexOf('dueNextSession') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "dueNextSession"
    }, "Due By Next Session")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueThisWeek",
      name: "dueThisWeek",
      checked: filters.indexOf('dueThisWeek') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "dueThisWeek"
    }, "Due this Week")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "overdue",
      name: "overdue",
      checked: filters.indexOf('overdue') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "overdue"
    }, "Overdue"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "complete",
      name: "complete",
      checked: filters.indexOf('complete') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "complete"
    }, "Complete")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "incomplete",
      name: "incomplete",
      checked: filters.indexOf('incomplete') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "incomplete"
    }, "Incomplete")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "future",
      name: "future",
      checked: filters.indexOf('future') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "future"
    }, "Future"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "reading",
      name: "reading",
      checked: filters.indexOf('reading') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "reading"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "writing",
      name: "writing",
      checked: filters.indexOf('writing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "writing"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "math",
      name: "math",
      checked: filters.indexOf('math') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "math"
    }, "Math"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "beginning",
      name: "beginning",
      checked: filters.indexOf('beginning') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "beginning"
    }, "Beginning")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "developing",
      name: "developing",
      checked: filters.indexOf('developing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "developing"
    }, "Developing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "accomplished",
      name: "accomplished",
      checked: filters.indexOf('accomplished') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "accomplished"
    }, "Accomplished")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "exemplary",
      name: "exemplary",
      checked: filters.indexOf('exemplary') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "exemplary"
    }, "Exemplary"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "hasReviewFlags",
      name: "hasReviewFlags",
      checked: filters.indexOf('hasReviewFlags') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "hasReviewFlags"
    }, "Has Review Flags"))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-flex-end"
    }, __jsx("div", {
      className: "col s12 l8"
    }), __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "option-filters"
    }, __jsx("div", {
      className: "option-item clear"
    }, __jsx("a", {
      href: "#",
      onClick: onClearFilters
    }, "Clear Filters")), __jsx("div", {
      className: "option-item"
    }, __jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, __jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FilterSection);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IUQe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return difficultySort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pageNumberSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return problemSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return timeEstimateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return subjectSort; });
const difficultySort = ({
  difficulty: difficultyA
}, {
  difficulty: difficultyB
}) => {
  if (difficultyA > difficultyB) {
    return -1;
  }

  return 0;
};
const pageNumberSort = ({
  pageNumber: pageNumberA
}, {
  pageNumber: pageNumberB
}) => {
  if (pageNumberA > pageNumberB) {
    return -1;
  }

  return 0;
};
const problemSort = ({
  problems: problemCountA
}, {
  problems: problemCountB
}) => {
  if (problemCountA > problemCountB) {
    return -1;
  }

  return 0;
};
const timeEstimateSort = ({
  timeEstimate: timeEstimateA
}, {
  timeEstimate: timeEstimateB
}) => {
  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
const subjectSort = ({
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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "MV2m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5Buo");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xA6B");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("x4x+");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("EABn");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/NWr");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const sampleVersions = [{
  label: 'SAT Practice Test #1',
  value: 'SAT Practice Test #1'
}, {
  label: 'SAT Practice Test #2',
  value: 'SAT Practice Test #2'
}, {
  label: 'SAT Practice Test #3',
  value: 'SAT Practice Test #3'
}];
const sampleSections = [{
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

class AssignTestSectionModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onResetModal", () => this.setState({
      version: '',
      section: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      timed: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "assignTestSection", () => {
      const {
        onAssignTestSection
      } = this.props;
      const {
        version,
        section,
        assignDate: unformattedAssignDate,
        assignTime: unformattedAssignTime,
        dueDate: unformattedDueDate,
        dueTime: unformattedDueTime,
        timed
      } = this.state;
      const assignDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedAssignDate).format('MM/DD/YY');
      const assignTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedAssignTime).format('hh:mm');
      const dueDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedDueDate).format('MM/DD/YY');
      const dueTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedDueTime).format('hh:mm');
      onAssignTestSection({
        version,
        section,
        assignDate,
        assignTime,
        dueDate,
        dueTime,
        timed
      });
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDetailsChange", (event, name = null) => {
      if (event.target) {
        this.setState(({
          timed
        }) => ({
          timed: !timed
        }));
      } else {
        this.setState({
          [name]: event
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDatePickerChange", (field, value) => this.setState({
      [field]: value
    }));

    this.state = {
      version: '',
      section: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      timed: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      modalDate
    } = this.props;

    if (prevState.assignDate === '' && modalDate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        assignDate: new Date(modalDate)
      });
    }
  }

  render() {
    const {
      open
    } = this.props;
    const {
      version,
      section,
      assignDate,
      assignTime,
      dueDate,
      dueTime,
      timed
    } = this.state;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-482330571" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_assign_test_section",
      className: "jsx-482330571" + " " + "modal modal-custom modal-calendar"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#00638e',
        color: '#fff'
      },
      className: "jsx-482330571" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-482330571" + " " + "h3"
    }, __jsx("span", {
      className: "jsx-482330571" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-assign-section"
    }), __jsx("span", {
      className: "jsx-482330571" + " " + "heading-block"
    }, " Assign Test Section (as coursework)")))), __jsx("div", {
      className: "jsx-482330571" + " " + "col right-align"
    }, __jsx("a", {
      href: "#!",
      onClick: this.onCloseModal,
      className: "jsx-482330571" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-482330571" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("div", {
      style: {
        marginBottom: '0',
        marginTop: '0'
      },
      className: "jsx-482330571" + " " + "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(version, sampleVersions),
      onChange: event => this.handleDetailsChange(event, 'version'),
      options: sampleVersions,
      name: "version",
      label: "Version",
      stateKey: "version",
      dropdownKey: "version"
    }))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("div", {
      style: {
        marginBottom: '0',
        marginTop: '0'
      },
      className: "jsx-482330571" + " " + "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(section, sampleSections),
      onChange: event => this.handleDetailsChange(event, 'section'),
      options: sampleSections,
      name: "section",
      label: "Section",
      stateKey: "section",
      dropdownKey: "section"
    })))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: assignDate,
      dateFormat: "MM/dd/yy",
      id: "assignDate",
      name: "assignDate",
      onChange: event => this.handleDatePickerChange('assignDate', event)
    }), __jsx("label", {
      htmlFor: "new_test_section_assign_date",
      className: "jsx-482330571" + " " + ((assignDate ? 'label active' : 'label') || "")
    }, "Assign For"))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: assignTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "assignTime",
      name: "assignTime",
      onChange: event => this.handleDatePickerChange('assignTime', event)
    }), __jsx("label", {
      htmlFor: "assignTime",
      className: "jsx-482330571" + " " + ((assignTime ? 'label active' : 'label') || "")
    }, "Time")))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: dueDate,
      dateFormat: "MM/dd/yy",
      id: "dueDate",
      name: "dueDate",
      onChange: event => this.handleDatePickerChange('dueDate', event)
    }), __jsx("label", {
      htmlFor: "dueDate",
      className: "jsx-482330571" + " " + ((dueDate ? 'label active' : 'label') || "")
    }, "Due (optional)"))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: dueTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "dueTime",
      name: "dueTime",
      onChange: event => this.handleDatePickerChange('dueTime', event)
    }), __jsx("label", {
      htmlFor: "dueTime",
      className: "jsx-482330571" + " " + ((dueTime ? 'label active' : 'label') || "")
    }, "Time")))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "timed",
      id: "timed",
      checked: timed,
      onChange: this.handleDetailsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Timed")))))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-footer modal-footer-width"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-482330571" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.assignTestSection,
      className: "jsx-482330571" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Save"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "482330571"
    }, [".overlay.jsx-482330571{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-482330571{margin:0;border-radius:6px;}", ".modal.jsx-482330571{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-482330571{opacity:1;visibility:visible;}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AssignTestSectionModal);

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "R5Ku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/Dashboard/components/CalendarHeader/components/CalendarArrow/index.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */


const CalendarArrow = ({
  calendarMap,
  activeMonth,
  onClick,
  direction
}) => __jsx("div", {
  onClick: onClick,
  className: direction === "next" ? "slick-arrow slick-next" : "slick-arrow slick-prev"
}, direction === "next" ? calendarMap[activeMonth + 2] : calendarMap[activeMonth]);

/* harmony default export */ var components_CalendarArrow = (CalendarArrow);
// EXTERNAL MODULE: ./components/Dashboard/utils/dateAndCalendarUtils.js
var dateAndCalendarUtils = __webpack_require__("AZl1");

// CONCATENATED MODULE: ./components/Dashboard/components/CalendarHeader/index.js
var CalendarHeader_jsx = external_react_default.a.createElement;



 // eslint-disable-next-line react/prefer-stateless-function

class CalendarHeader_CalendarHeader extends external_react_default.a.Component {
  render() {
    const {
      activeMonth,
      onSetActiveMonth
    } = this.props;
    return CalendarHeader_jsx("div", {
      className: "calendar-header",
      style: {
        zIndex: '9'
      }
    }, CalendarHeader_jsx("div", {
      className: "calendar-view-switcher"
    }, CalendarHeader_jsx("ul", {
      className: "switcher"
    }, CalendarHeader_jsx("li", {
      className: "active col",
      "data-view": "view-month"
    }, CalendarHeader_jsx("a", {
      href: "#"
    }, "Month View")), CalendarHeader_jsx("li", {
      className: "col",
      "data-view": "view-day"
    }, CalendarHeader_jsx("a", {
      href: "#"
    }, "Day View")))), CalendarHeader_jsx("div", {
      className: "nav-slick-calendar",
      style: {
        opacity: '1'
      }
    }, CalendarHeader_jsx(external_react_slick_default.a, {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: dateAndCalendarUtils["b" /* currentMonthIndex */],
      onInit: () => onSetActiveMonth(dateAndCalendarUtils["b" /* currentMonthIndex */]),
      afterChange: onSetActiveMonth,
      nextArrow: CalendarHeader_jsx(components_CalendarArrow, {
        direction: "next",
        calendarMap: dateAndCalendarUtils["a" /* calendarMap */],
        activeMonth: activeMonth
      }),
      prevArrow: CalendarHeader_jsx(components_CalendarArrow, {
        direction: "previous",
        calendarMap: dateAndCalendarUtils["a" /* calendarMap */],
        activeMonth: activeMonth
      })
    }, CalendarHeader_jsx("div", {
      className: "slide"
    }, "January"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "February"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "March"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "April"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "May"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "June"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "July"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "August"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "September"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "October"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "November"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "December"))));
  }

}

/* harmony default export */ var components_CalendarHeader = __webpack_exports__["a"] = (CalendarHeader_CalendarHeader);

/***/ }),

/***/ "Rgyi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
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
/* harmony default export */ __webpack_exports__["b"] = (DropdownWrapper);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "YckE":
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cufv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YckE");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5Buo");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xA6B");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("x4x+");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("EABn");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("/NWr");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










const sampleVersions = [{
  label: 'SAT Practice Test #1',
  value: 'SAT Practice Test #1'
}, {
  label: 'SAT Practice Test #2',
  value: 'SAT Practice Test #2'
}, {
  label: 'SAT Practice Test #3',
  value: 'SAT Practice Test #3'
}];

class AssignSimulatedSatModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onResetModal", () => this.setState({
      version: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      sections: [],
      allowStudentToEnterAnswers: false,
      includeScoreInImprovementMetrics: false,
      timed: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "assignSimulatedSat", () => {
      const {
        onAssignSimulatedSat
      } = this.props;
      const {
        version,
        assignDate: unformattedAssignDate,
        assignTime: unformattedAssignTime,
        dueDate: unformattedDueDate,
        dueTime: unformattedDueTime,
        sections,
        allowStudentToEnterAnswers,
        includeScoreInImprovementMetrics,
        timed
      } = this.state;
      const assignDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedAssignDate).format('MM/DD/YY');
      const assignTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedAssignTime).format('hh:mm');
      const dueDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedDueDate).format('MM/DD/YY');
      const dueTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedDueTime).format('hh:mm');
      onAssignSimulatedSat({
        version,
        assignDate,
        assignTime,
        dueDate,
        dueTime,
        sections,
        allowStudentToEnterAnswers,
        includeScoreInImprovementMetrics,
        timed
      });
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDetailsChange", (event, name = null) => {
      if (event.target) {
        const checkboxName = event.target.name;
        const prevState = this.state[checkboxName];
        this.setState({
          [checkboxName]: !prevState
        });
      } else {
        this.setState({
          [name]: event
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleSectionsChange", event => {
      const {
        sections
      } = this.state;

      if (sections.indexOf(event.target.name) === -1) {
        const updatedSections = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(sections, {
          $push: [event.target.name]
        });
        this.setState({
          sections: updatedSections
        });
      } else {
        const sectionIndex = sections.indexOf(event.target.name);
        const updatedSections = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(sections, {
          $splice: [[sectionIndex, 1]]
        });
        this.setState({
          sections: updatedSections
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDatePickerChange", (field, value) => this.setState({
      [field]: value
    }));

    this.state = {
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
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      modalDate
    } = this.props;

    if (prevState.assignDate === '' && modalDate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        assignDate: new Date(modalDate)
      });
    }
  }

  render() {
    const {
      open
    } = this.props;
    const {
      version,
      assignDate,
      assignTime,
      dueDate,
      dueTime,
      sections,
      allowStudentToEnterAnswers,
      includeScoreInImprovementMetrics,
      timed
    } = this.state;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-482330571" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_assign_simulated_sat",
      className: "jsx-482330571" + " " + "modal modal-custom modal-calendar"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#ec3330',
        color: '#fff'
      },
      className: "jsx-482330571" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-482330571"
    }, __jsx("span", {
      className: "jsx-482330571" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-circles"
    }), __jsx("span", {
      className: "jsx-482330571" + " " + "heading-block"
    }, " New Scored SAT Test")))), __jsx("div", {
      className: "jsx-482330571" + " " + "col right-align"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-482330571" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-482330571" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("div", {
      style: {
        marginBottom: '0',
        marginTop: '0'
      },
      className: "jsx-482330571" + " " + "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(version, sampleVersions),
      onChange: event => this.handleDetailsChange(event, 'version'),
      options: sampleVersions,
      name: "version",
      label: "Version",
      stateKey: "version",
      dropdownKey: "version"
    })))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      selected: assignDate,
      dateFormat: "MM/dd/yy",
      id: "assignDate",
      name: "assignDate",
      onChange: event => this.handleDatePickerChange('assignDate', event)
    }), __jsx("label", {
      htmlFor: "new_test_section_assign_date",
      className: "jsx-482330571" + " " + ((assignDate ? 'label active' : 'label') || "")
    }, "Assign For"))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      selected: assignTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "assignTime",
      name: "assignTime",
      onChange: event => this.handleDatePickerChange('assignTime', event)
    }), __jsx("label", {
      htmlFor: "assignTime",
      className: "jsx-482330571" + " " + ((assignTime ? 'label active' : 'label') || "")
    }, "Time")))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      selected: dueDate,
      dateFormat: "MM/dd/yy",
      id: "dueDate",
      name: "dueDate",
      onChange: event => this.handleDatePickerChange('dueDate', event)
    }), __jsx("label", {
      htmlFor: "dueDate",
      className: "jsx-482330571" + " " + ((dueDate ? 'label active' : 'label') || "")
    }, "Due (optional)"))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      selected: dueTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "dueTime",
      name: "dueTime",
      onChange: event => this.handleDatePickerChange('dueTime', event)
    }), __jsx("label", {
      htmlFor: "dueTime",
      className: "jsx-482330571" + " " + ((dueTime ? 'label active' : 'label') || "")
    }, "Time")))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("span", {
      className: "jsx-482330571" + " " + "card-subtitle"
    }, "Sections:"), __jsx("div", {
      className: "jsx-482330571" + " " + "check-holder"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "Reading",
      id: "reading",
      checked: sections.indexOf('Reading') !== -1,
      onChange: this.handleSectionsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Reading"))), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "Math (no calc)",
      id: "mathNoCalc",
      checked: sections.indexOf('Math (no calc)') !== -1,
      onChange: this.handleSectionsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Math (no calc)")))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "Writing",
      id: "writing",
      checked: sections.indexOf('Writing') !== -1,
      onChange: this.handleSectionsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Writing"))), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "Math (calculator)",
      id: "Math (calculator)",
      checked: sections.indexOf('Math (calculator)') !== -1,
      onChange: this.handleSectionsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Math (calculator)"))))), __jsx("span", {
      className: "jsx-482330571" + " " + "card-note"
    }, "Note: scaled test scores may require combinations of sections")), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "allowStudentToEnterAnswers",
      id: "allowStudentToEnterAnswers",
      checked: allowStudentToEnterAnswers,
      onChange: this.handleDetailsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Allow Student to Enter Answers"))), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "includeScoreInImprovementMetrics",
      id: "includeScoreInImprovementMetrics",
      checked: includeScoreInImprovementMetrics,
      onChange: this.handleDetailsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Include Score in Improvement Metrics"))), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "timed",
      id: "timed",
      checked: timed,
      onChange: this.handleDetailsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Timed")))))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-footer modal-footer-width"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-482330571" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.assignSimulatedSat,
      className: "jsx-482330571" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Save"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "482330571"
    }, [".overlay.jsx-482330571{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-482330571{margin:0;border-radius:6px;}", ".modal.jsx-482330571{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-482330571{opacity:1;visibility:visible;}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AssignSimulatedSatModal);

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fRFr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js

var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */



const sortByOptions = [{
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

class FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      titleFilter: '',
      unitFilter: ''
    }, this.props.onClearFilters));

    Object(defineProperty["a" /* default */])(this, "handleSearchChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(defineProperty["a" /* default */])(this, "submitSearchFilter", searchType => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;

      if (this.state[searchType] === '') {
        onUnsetFilteredState(searchType);
      }

      const transformedTitle = this.state[searchType].replace(/\s/g, "").toLowerCase();
      onSetFilteredState(searchType, transformedTitle);
    });

    this.state = {
      open: false,
      titleFilter: '',
      unitFilter: ''
    };
  }

  render() {
    const {
      handleFilterClick,
      subjectFilters,
      typeFilters,
      sourceFilters,
      difficultyFilters,
      sort,
      onSetSort
    } = this.props;
    const {
      open,
      titleFilter,
      unitFilter
    } = this.state;
    return __jsx("div", {
      className: "filter-form-holder"
    }, __jsx("ul", {
      className: "collapsible expandable",
      style: {
        minHeight: '0'
      }
    }, __jsx("li", null, __jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, __jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "readingSubject",
      name: "readingSubject",
      checked: subjectFilters.indexOf('readingSubject') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "readingSubject"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "writingSubject",
      name: "writingSubject",
      checked: subjectFilters.indexOf('writingSubject') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "writingSubject"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "mathSubject",
      name: "mathSubject",
      checked: subjectFilters.indexOf('mathSubject') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "mathSubject"
    }, "Math")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "mixedDifficulty",
      name: "mixedDifficulty",
      checked: subjectFilters.indexOf('mixedDifficulty') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "mixedDifficulty"
    }, "Mixed"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "satPractice",
      name: "satPractice",
      checked: typeFilters.indexOf('satPractice') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "satPractice"
    }, "SAT Practice")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "skillBuilders",
      name: "skillBuilders",
      checked: typeFilters.indexOf('skillBuilders') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "skillBuilders"
    }, "Skill Builders")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "mixedType",
      name: "mixedType",
      checked: typeFilters.indexOf('mixedType') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "mixedType"
    }, "Mixed"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "builtIn",
      name: "builtIn",
      checked: sourceFilters.indexOf('builtIn') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('source', target.name)
    }), __jsx("label", {
      htmlFor: "builtIn"
    }, "Built-In")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "userCreated",
      name: "userCreated",
      checked: sourceFilters.indexOf('userCreated') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('source', target.name)
    }), __jsx("label", {
      htmlFor: "userCreated"
    }, "User Created"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "easy",
      name: "easy",
      checked: difficultyFilters.indexOf('easy') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), __jsx("label", {
      htmlFor: "easy"
    }, "Easy")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "medium",
      name: "medium",
      checked: difficultyFilters.indexOf('medium') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), __jsx("label", {
      htmlFor: "medium"
    }, "Medium")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "difficult",
      name: "difficult",
      checked: difficultyFilters.indexOf('difficult') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), __jsx("label", {
      htmlFor: "difficult"
    }, "Di\uFB03cult")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "mixedDifficulty",
      name: "mixedDifficulty",
      checked: difficultyFilters.indexOf('mixedDifficulty') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), __jsx("label", {
      htmlFor: "mixedDifficulty"
    }, "Mixed")))), __jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "titleFilter",
      name: "titleFilter",
      className: "input-control validate",
      value: titleFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: () => this.submitSearchFilter('titleFilter'),
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: titleFilter.length ? 'label active' : 'label',
      htmlFor: "titleFilter"
    }, "Search By Title"))), __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "unitFilter",
      name: "unitFilter",
      className: "input-control validate",
      value: unitFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: () => this.submitSearchFilter('unitFilter'),
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: unitFilter.length ? 'label active' : 'label',
      htmlFor: "unitFilter"
    }, "Search By Unit"))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 m6"
    }, __jsx("div", {
      className: "input-field",
      style: {
        marginBottom: '0',
        marginTop: '0'
      }
    }, __jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, sortByOptions),
      onChange: onSetSort,
      options: sortByOptions,
      label: "Sort By",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), __jsx("div", {
      className: "switcher-block col s12 l4"
    }, __jsx("div", {
      className: "view-switcher"
    }, __jsx("ul", {
      className: "switcher center-align"
    }, __jsx("li", {
      className: "active",
      "data-view": "view-full"
    }, __jsx("a", {
      href: "#"
    }, "Month View")), __jsx("li", {
      "data-view": "view-list"
    }, __jsx("a", {
      href: "#"
    }, "Day View"))))), __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "option-filters"
    }, __jsx("div", {
      className: "option-item clear"
    }, __jsx("a", {
      href: "#",
      onClick: this.onClearFilters
    }, "Clear Filters")), __jsx("div", {
      className: "option-item"
    }, __jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, __jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js

var WorksheetCard_jsx = external_react_default.a.createElement;


class WorksheetCard_WorksheetCard extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "handleDropdownClick", event => {
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

    Object(defineProperty["a" /* default */])(this, "editWorksheet", () => console.warn('Pending implementation of edit modal/functionality'));

    Object(defineProperty["a" /* default */])(this, "cloneWorksheet", () => console.warn('Pending implementation of clone worksheet functionality'));

    Object(defineProperty["a" /* default */])(this, "showOwner", () => console.warn('Pending implementation of show owner functionality'));

    Object(defineProperty["a" /* default */])(this, "deleteWorksheet", () => console.warn('Pending implementation of delete worksheet functionality'));
  }

  render() {
    const {
      worksheet,
      selectedWorksheets,
      handleWorksheetClick,
      index,
      dropdownIndex,
      dropdownIsOpen
    } = this.props;
    const {
      title,
      subject,
      problems,
      type,
      difficulty,
      timeEstimate,
      source,
      classifications
    } = worksheet;
    return WorksheetCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, WorksheetCard_jsx("div", {
      className: "card-checkbox"
    }, WorksheetCard_jsx("input", {
      type: "checkbox",
      checked: selectedWorksheets.indexOf(worksheet) !== -1,
      onChange: () => handleWorksheetClick(worksheet)
    }), WorksheetCard_jsx("div", {
      className: "checkbox-card card-main card-lesson-detail card-assigned card"
    }, WorksheetCard_jsx("div", {
      className: "card-panel",
      style: {
        backgroundColor: '#666',
        color: '#fff'
      }
    }, WorksheetCard_jsx("div", {
      className: "card-panel-row row"
    }, WorksheetCard_jsx("div", {
      className: "icon-col col s2"
    }, WorksheetCard_jsx("span", {
      className: "block-icon"
    }, WorksheetCard_jsx("i", {
      className: "icon-sheets-w"
    }))), WorksheetCard_jsx("div", {
      className: "col s9"
    }, WorksheetCard_jsx("div", {
      className: "card-panel-text"
    }, WorksheetCard_jsx("div", {
      className: "text-small"
    }, "Worksheet (", subject, ")"), WorksheetCard_jsx("div", {
      className: "text-large"
    }, title))), WorksheetCard_jsx("div", {
      className: "align-top col s1 right-align"
    }, WorksheetCard_jsx("div", {
      className: "row icons-row"
    }, WorksheetCard_jsx("div", {
      className: "dropdown-block col"
    }, WorksheetCard_jsx("a", {
      href: "#",
      className: "dropdown-trigger btn",
      "data-target": "dropdown_worksheet_01",
      onClick: this.handleDropdownClick
    }, WorksheetCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? WorksheetCard_jsx("ul", {
      id: "dropdown_worksheet_01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, WorksheetCard_jsx("li", null, WorksheetCard_jsx("a", {
      href: "#",
      onClick: this.editWorksheet,
      className: "modal-trigger link-block"
    }, "Edit")), WorksheetCard_jsx("li", null, WorksheetCard_jsx("a", {
      href: "#",
      onClick: this.cloneWorksheet
    }, "Clone")), WorksheetCard_jsx("li", null, WorksheetCard_jsx("a", {
      href: "#",
      onClick: this.showOwner
    }, "Show Owner")), WorksheetCard_jsx("li", null, WorksheetCard_jsx("a", {
      href: "#",
      onClick: this.deleteWorksheet
    }, "Delete"))) : null)))), WorksheetCard_jsx("div", {
      className: "card-top-block"
    }, WorksheetCard_jsx("div", {
      className: "d-flex row mb-0"
    }, WorksheetCard_jsx("div", {
      className: "left-col col s6"
    }, WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Problem Type:"), WorksheetCard_jsx("dd", null, type))), WorksheetCard_jsx("div", {
      className: "right-col col s6 right-align"
    }, WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Di\uFB03culty:"), WorksheetCard_jsx("dd", null, difficulty)))))), WorksheetCard_jsx("div", {
      className: "card-content"
    }, WorksheetCard_jsx("div", {
      className: "chart-container"
    }, WorksheetCard_jsx("div", {
      className: "chart-holder"
    }, WorksheetCard_jsx("span", {
      className: "svg-curved-bar",
      "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
      "data-duration": "1"
    }, WorksheetCard_jsx("svg", {
      width: "110px",
      height: "110px",
      viewBox: " 0 0 110 110"
    }, WorksheetCard_jsx("path", {
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#eaeaea'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
    }), WorksheetCard_jsx("path", {
      "data-dinamic": true,
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#31837a'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
    }))), WorksheetCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#4d4d4d'
      }
    })), WorksheetCard_jsx("div", {
      className: "chart-description"
    }, WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Time Est:"), WorksheetCard_jsx("dd", null, timeEstimate, " min")), WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Problems:"), WorksheetCard_jsx("dd", null, problems)))), WorksheetCard_jsx("div", {
      className: "card-text"
    }, WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Worksheet Source:"), WorksheetCard_jsx("dd", null, source))), WorksheetCard_jsx("div", {
      className: "card-inner-row"
    }, WorksheetCard_jsx("div", {
      className: "row-holder"
    }, WorksheetCard_jsx("ul", {
      className: "classification-list"
    }, classifications.length ? classifications.map(classification => WorksheetCard_jsx("li", {
      key: classification,
      className: "class-box"
    }, classification)) : WorksheetCard_jsx("li", {
      className: "empty-box"
    }, "no classi\uFB01cation"))))))));
  }

}

/* harmony default export */ var components_WorksheetCard = (WorksheetCard_WorksheetCard);
// EXTERNAL MODULE: ./components/Dashboard/utils/sortOptions.js
var sortOptions = __webpack_require__("IUQe");

// CONCATENATED MODULE: ./components/Dashboard/utils/sampleWorksheets.js
/* harmony default export */ var sampleWorksheets = ([{
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
// CONCATENATED MODULE: ./components/Dashboard/utils/worksheetModalMaps.js
const worksheetTypeMap = {
  'SAT Practice': 'satPractice',
  'Skill Builders': 'skillBuilders',
  'Mixed': 'mixedType'
};
const worksheetSourceMap = {
  'Built-In': 'builtIn',
  'User Created': 'userCreated'
};
const worksheetDifficultyMap = {
  'Easy': 'easy',
  'Medium': 'medium',
  'Difficult': 'difficult',
  'Mixed': 'mixedDifficulty'
};
const worksheetSubjectMap = {
  'Reading': 'readingSubject',
  'Writing': 'writingSubject',
  'Math': 'mathSubject',
  'Mixed': 'mixedSubject'
};
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/index.js


var AssignWorksheetModal_jsx = external_react_default.a.createElement;










class AssignWorksheetModal_AssignWorksheetModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleAssignSelectedDropdown", () => this.setState(({
      assignSelectedDropdownOpen
    }) => ({
      assignSelectedDropdownOpen: !assignSelectedDropdownOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onResetModal", () => this.setState({
      sourceFilters: [],
      difficultyFilters: [],
      subjectFilters: [],
      typeFilters: [],
      sort: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", (titleFilter, value) => this.setState({
      [titleFilter]: value
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", titleFilter => this.setState({
      [titleFilter]: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(this, "onSortWorksheets", worksheets => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'difficulty':
          return worksheets.sort(sortOptions["a" /* difficultySort */]);

        case 'problems':
          return worksheets.sort(sortOptions["c" /* problemSort */]);

        case 'timeEstimate':
          return worksheets.sort(sortOptions["e" /* timeEstimateSort */]);

        case 'subject':
          return worksheets.sort(sortOptions["d" /* subjectSort */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByTitle", () => {
      const {
        worksheets,
        titleFilter
      } = this.state;
      return worksheets.reduce((finalArr, currentWorksheet) => {
        const {
          title
        } = currentWorksheet;
        const worksheetString = title.replace(/\s/g, "").toLowerCase();

        if (worksheetString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByUnit", () => {
      const {
        worksheets,
        unitFilter
      } = this.state;
      return worksheets.reduce((finalArr, currentWorksheet) => {
        const {
          unit
        } = currentWorksheet;
        const worksheetString = unit.replace(/\s/g, "").toLowerCase();

        if (worksheetString.indexOf(unitFilter) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterWorksheets", () => {
      const {
        subjectFilters,
        typeFilters,
        sourceFilters,
        difficultyFilters,
        worksheets: allWorksheets
      } = this.state;
      let worksheets = allWorksheets;

      if (subjectFilters.length) {
        worksheets = worksheets.filter(worksheet => subjectFilters.indexOf(worksheetSubjectMap[worksheet.subject]) !== -1);
      }

      if (typeFilters.length) {
        worksheets = worksheets.filter(worksheet => typeFilters.indexOf(worksheetTypeMap[worksheet.type]) !== -1);
      }

      if (sourceFilters.length) {
        worksheets = worksheets.filter(worksheet => sourceFilters.indexOf(worksheetSourceMap[worksheet.source]) !== -1);
      }

      if (difficultyFilters.length) {
        worksheets = worksheets.filter(worksheet => difficultyFilters.indexOf(worksheetDifficultyMap[worksheet.difficulty]) !== -1);
      }

      return worksheets;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableWorksheets", () => {
      const {
        subjectFilters,
        typeFilters,
        difficultyFilters,
        sourceFilters,
        sort,
        unitFilter,
        titleFilter,
        worksheets
      } = this.state;
      let mappableWorksheets = worksheets;

      if (titleFilter.length) {
        mappableWorksheets = this.onFilterByTitle();
      }

      if (unitFilter.length) {
        mappableWorksheets = this.onFilterByUnit();
      }

      if (subjectFilters.length || typeFilters.length || difficultyFilters.length || sourceFilters.length) {
        mappableWorksheets = this.onFilterWorksheets();
      }

      if (sort) {
        return this.onSortWorksheets(mappableWorksheets);
      }

      return mappableWorksheets;
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        sourceFilters: currentSourceFilters,
        difficultyFilters: currentDifficultyFilters,
        subjectFilters: currentSubjectFilters,
        typeFilters: currentTypeFilters
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

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
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        const filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [modifiedFilterName]: modifiedFilterUpdatedState
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleWorksheetClick", worksheet => {
      const {
        selectedWorksheets
      } = this.state;
      let modifiedWorksheets;

      if (selectedWorksheets.indexOf(worksheet) === -1) {
        modifiedWorksheets = external_immutability_helper_default()(selectedWorksheets, {
          $push: [worksheet]
        });
      } else {
        const worksheetIndex = selectedWorksheets.indexOf(worksheet);
        modifiedWorksheets = external_immutability_helper_default()(selectedWorksheets, {
          $splice: [[worksheetIndex, 1]]
        });
      }

      this.setState({
        selectedWorksheets: modifiedWorksheets
      });
    });

    Object(defineProperty["a" /* default */])(this, "assignWorksheets", date => {
      const {
        onAssignWorksheets
      } = this.props;
      const {
        selectedWorksheets
      } = this.state;
      let assignDate;

      switch (date) {
        case 'today':
          assignDate = external_moment_default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = external_moment_default()().add(1, 'days').format('MM/DD/YY');
          break;

        case 'nextSession':
          break;

        case 'customDate':
          assignDate = '01/05/19';
          break;

        default:
          break;
      }

      this.onToggleAssignSelectedDropdown();
      onAssignWorksheets(selectedWorksheets, assignDate);
    });

    Object(defineProperty["a" /* default */])(this, "mapWorksheets", () => this.getMappableWorksheets().map((worksheet, index) => AssignWorksheetModal_jsx(components_WorksheetCard, {
      worksheet: worksheet,
      index: index,
      key: worksheet.id,
      onSetDropdown: this.onSetDropdown,
      onCloseDropdown: this.onCloseDropdown,
      dropdownIndex: this.state.dropdownIndex,
      dropdownIsOpen: this.state.dropdownIsOpen,
      handleWorksheetClick: this.handleWorksheetClick,
      selectedWorksheets: this.state.selectedWorksheets
    })));

    this.state = {
      sort: '',
      unitFilter: '',
      titleFilter: '',
      typeFilters: [],
      sourceFilters: [],
      subjectFilters: [],
      selectedWorksheets: [],
      difficultyFilters: [],
      worksheets: sampleWorksheets,
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      assignSelectedDropdownOpen,
      typeFilters,
      sourceFilters,
      subjectFilters,
      difficultyFilters,
      sort
    } = this.state;
    return AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574"
    }, open && AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "wrapper"
    }, AssignWorksheetModal_jsx("div", {
      style: {
        minWidth: "100%"
      },
      className: "jsx-2666520574" + " " + "card-modal card-main card switcher-section grey lighten-3"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "header-row card-panel light-blue lighten-1 white-text"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "card-panel-row row"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "col s11"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "d-flex"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "icon-col"
    }, AssignWorksheetModal_jsx("i", {
      className: "jsx-2666520574" + " " + "icon-sheets-w"
    })), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "card-panel-text"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "text-large"
    }, "Assign Worksheets")))), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "col s1 right-align"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "row icons-row"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-2666520574" + " " + "modal-close close"
    }, AssignWorksheetModal_jsx("i", {
      className: "jsx-2666520574" + " " + "icon-close-thin"
    })))))), AssignWorksheetModal_jsx(components_FilterSection, {
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
    }), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "card-content"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "card-body"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "result-row center-align"
    }, AssignWorksheetModal_jsx("b", {
      className: "jsx-2666520574" + " " + "result"
    }, " - ", this.getMappableWorksheets().length, " results -")), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "checkboxes-section row d-flex-content card-width-322"
    }, this.mapWorksheets())))), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "add-btn-block"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      "data-target": "dropdown_assign_selected",
      onClick: this.onToggleAssignSelectedDropdown,
      className: "jsx-2666520574" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, AssignWorksheetModal_jsx("i", {
      className: "jsx-2666520574" + " " + "material-icons"
    }, "add"), " Assign Selected"), AssignWorksheetModal_jsx("ul", {
      id: "dropdown_assign_selected",
      style: {
        display: assignSelectedDropdownOpen ? 'block' : '0',
        opacity: assignSelectedDropdownOpen ? '1' : '0'
      },
      className: "jsx-2666520574" + " " + 'dropdown-content'
    }, AssignWorksheetModal_jsx("li", {
      className: "jsx-2666520574"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('today'),
      className: "jsx-2666520574"
    }, "For Today")), AssignWorksheetModal_jsx("li", {
      className: "jsx-2666520574"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('tomorrow'),
      className: "jsx-2666520574"
    }, "For Tomorrow")), AssignWorksheetModal_jsx("li", {
      className: "jsx-2666520574"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('nextSession'),
      className: "jsx-2666520574"
    }, "For Next Session")), AssignWorksheetModal_jsx("li", {
      className: "jsx-2666520574"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('customDate'),
      className: "jsx-2666520574"
    }, "For Date..."))))), AssignWorksheetModal_jsx(style_default.a, {
      id: "2666520574"
    }, [".card-modal.jsx-2666520574{margin:0;border-radius:6px;}", ".wrapper.jsx-2666520574{min-height:0px;}", ".modal-custom.jsx-2666520574{opacity:1;visibility:visible;}", ".modal-footer.jsx-2666520574{background-color:white;}"]));
  }

}

/* harmony default export */ var Modals_AssignWorksheetModal = __webpack_exports__["a"] = (AssignWorksheetModal_AssignWorksheetModal);

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "uhPQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");

// Keeping unused styling for now so I know what element they target
/* harmony default export */ __webpack_exports__["b"] = ({
  multiValueLabel: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
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
  menuList: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles),
  dropdownIndicator: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    display: 'none'
  }),
  multiValue: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    background: 'none'
  }),
  valueContainer: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles),
  input: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    paddingTop: '9px'
  }),
  groupHeading: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles),
  control: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    boxShadow: 'none',
    borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important'
  })
});
const DropdownStyles = {
  container: (base, state) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, base, {
    opacity: state.isDisabled ? ".5" : "1",
    backgroundColor: "transparent",
    zIndex: "999"
  }),
  option: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
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
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
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

/***/ "uzjx":
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

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

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "wH9L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js

var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */



const sortByOptions = [{
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

class FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      titleFilter: '',
      unitFilter: ''
    }, this.props.onClearFilters));

    Object(defineProperty["a" /* default */])(this, "handleSearchChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(defineProperty["a" /* default */])(this, "submitSearchFilter", searchType => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;

      if (this.state[searchType] === '') {
        onUnsetFilteredState(searchType);
      }

      const transformedTitle = this.state[searchType].replace(/\s/g, "").toLowerCase();
      onSetFilteredState(searchType, transformedTitle);
    });

    this.state = {
      open: true,
      titleFilter: '',
      unitFilter: ''
    };
  }

  render() {
    const {
      handleFilterClick,
      subjectFilters,
      typeFilters,
      sort,
      onSetSort
    } = this.props;
    const {
      open,
      titleFilter,
      unitFilter
    } = this.state;
    return __jsx("div", {
      className: "filter-form-holder"
    }, __jsx("ul", {
      className: "collapsible expandable",
      style: {
        minHeight: '0'
      }
    }, __jsx("li", null, __jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, __jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "Reading",
      name: "Reading",
      checked: subjectFilters.indexOf('Reading') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "Reading"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "Writing",
      name: "Writing",
      checked: subjectFilters.indexOf('Writing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "Writing"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "Math",
      name: "Math",
      checked: subjectFilters.indexOf('Math') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "Math"
    }, "Math"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "challenge",
      name: "challenge",
      checked: typeFilters.indexOf('challenge') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "challenge"
    }, "Challenge + Practice")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "homework",
      name: "homework",
      checked: typeFilters.indexOf('homework') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "homework"
    }, "Homework Drill")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "readingFromWorkbook",
      name: "readingFromWorkbook",
      checked: typeFilters.indexOf('readingFromWorkbook') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "readingFromWorkbook"
    }, "Reading from Workbook")))), __jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "titleFilter",
      name: "titleFilter",
      className: "input-control validate",
      value: titleFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: () => this.submitSearchFilter('titleFilter'),
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: titleFilter.length ? 'label active' : 'label',
      htmlFor: "titleFilter"
    }, "Search By Title"))), __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "unitFilter",
      name: "unitFilter",
      className: "input-control validate",
      value: unitFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: () => this.submitSearchFilter('unitFilter'),
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: unitFilter.length ? 'label active' : 'label',
      htmlFor: "unitFilter"
    }, "Search By Unit"))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 m6"
    }, __jsx("div", {
      className: "input-field",
      style: {
        marginBottom: '0',
        marginTop: '0'
      }
    }, __jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, sortByOptions),
      onChange: onSetSort,
      options: sortByOptions,
      label: "Sort By",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), __jsx("div", {
      className: "switcher-block col s12 l4"
    }, __jsx("div", {
      className: "view-switcher"
    }, __jsx("ul", {
      className: "switcher center-align"
    }, __jsx("li", {
      className: "active",
      "data-view": "view-full"
    }, __jsx("a", {
      href: "#"
    }, "Month View")), __jsx("li", {
      "data-view": "view-list"
    }, __jsx("a", {
      href: "#"
    }, "Day View"))))), __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "option-filters"
    }, __jsx("div", {
      className: "option-item clear"
    }, __jsx("a", {
      href: "#",
      onClick: this.onClearFilters
    }, "Clear Filters")), __jsx("div", {
      className: "option-item"
    }, __jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, __jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js

var LessonCard_jsx = external_react_default.a.createElement;


class LessonCard_LessonCard extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "handleDropdownClick", event => {
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

    Object(defineProperty["a" /* default */])(this, "editLesson", () => console.warn('Pending implementation of edit modal/functionality'));

    Object(defineProperty["a" /* default */])(this, "cloneLesson", () => console.warn('Pending implementation of clone lesson functionality'));

    Object(defineProperty["a" /* default */])(this, "showOwner", () => console.warn('Pending implementation of show owner functionality'));

    Object(defineProperty["a" /* default */])(this, "deleteLesson", () => console.warn('Pending implementation of delete lesson functionality'));
  }

  render() {
    const {
      lesson,
      selectedLessons,
      handleLessonClick,
      index,
      dropdownIndex,
      dropdownIsOpen
    } = this.props;
    const {
      unit,
      title,
      subject,
      timeEstimate,
      problems,
      pageNumber,
      type
    } = lesson;
    return LessonCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, LessonCard_jsx("div", {
      className: "card-checkbox"
    }, LessonCard_jsx("input", {
      type: "checkbox",
      checked: selectedLessons.indexOf(lesson) !== -1,
      onChange: () => handleLessonClick(lesson)
    }), LessonCard_jsx("div", {
      className: "checkbox-card card-main card-lesson-detail card-assigned card"
    }, LessonCard_jsx("div", {
      className: "card-panel",
      style: {
        backgroundColor: '#666',
        color: '#fff'
      }
    }, LessonCard_jsx("div", {
      className: "card-panel-row row"
    }, LessonCard_jsx("div", {
      className: "icon-col col s2"
    }, LessonCard_jsx("span", {
      className: "block-icon"
    }, LessonCard_jsx("i", {
      className: "icon-books-l"
    }), LessonCard_jsx("span", {
      className: "text-icon"
    }, "Lesson"))), LessonCard_jsx("div", {
      className: "col s9"
    }, LessonCard_jsx("div", {
      className: "card-panel-text"
    }, LessonCard_jsx("div", {
      className: "text-small"
    }, unit), LessonCard_jsx("div", {
      className: "text-large"
    }, title), LessonCard_jsx("div", {
      className: "text-small"
    }, "Subject: ", subject))), LessonCard_jsx("div", {
      className: "align-top col s1 right-align"
    }, LessonCard_jsx("div", {
      className: "row icons-row"
    }, LessonCard_jsx("div", {
      className: "dropdown-block col"
    }, LessonCard_jsx("a", {
      href: "#",
      className: "dropdown-trigger btn",
      "data-target": "dropdown_lesson_01",
      onClick: this.handleDropdownClick
    }, LessonCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? LessonCard_jsx("ul", {
      id: "dropdown_lesson_01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, LessonCard_jsx("li", null, LessonCard_jsx("a", {
      href: "#",
      onClick: this.editLesson,
      className: "modal-trigger link-block"
    }, "Edit")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
      href: "#",
      onClick: this.cloneLesson
    }, "Clone")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
      href: "#",
      onClick: this.showOwner
    }, "Show Owner")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
      href: "#",
      onClick: this.deleteLesson
    }, "Delete"))) : null))))), LessonCard_jsx("div", {
      className: "card-content"
    }, LessonCard_jsx("div", {
      className: "chart-container"
    }, LessonCard_jsx("div", {
      className: "chart-holder"
    }, LessonCard_jsx("span", {
      className: "svg-curved-bar",
      "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
      "data-duration": "1"
    }, LessonCard_jsx("svg", {
      width: "110px",
      height: "110px",
      viewBox: " 0 0 110 110"
    }, LessonCard_jsx("path", {
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#d6d6d6'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
    }), LessonCard_jsx("path", {
      "data-dinamic": true,
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#62b771'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
    }))), LessonCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#4d4d4d'
      }
    })), LessonCard_jsx("div", {
      className: "chart-description"
    }, LessonCard_jsx("dl", {
      className: "dl-horizontal"
    }, LessonCard_jsx("dt", null, "Time Est:"), LessonCard_jsx("dd", null, timeEstimate, " min")), LessonCard_jsx("dl", {
      className: "dl-horizontal"
    }, LessonCard_jsx("dt", null, "Problems:"), LessonCard_jsx("dd", null, problems)))), LessonCard_jsx("div", {
      className: "card-footer-row center-align"
    }, LessonCard_jsx("div", {
      className: "card-footer-holder"
    }, LessonCard_jsx("p", null, "p.", pageNumber, "  (", type, ")")))))));
  }

}

;
/* harmony default export */ var components_LessonCard = (LessonCard_LessonCard);
// CONCATENATED MODULE: ./components/Dashboard/utils/sampleLessons.js
/* harmony default export */ var sampleLessons = ([{
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
// EXTERNAL MODULE: ./components/Dashboard/utils/sortOptions.js
var sortOptions = __webpack_require__("IUQe");

// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/index.js


var AssignLessonModal_jsx = external_react_default.a.createElement;







const lessonTypeMap = {
  'Challenge + Practice': 'challenge',
  'Homework Drill': 'homework',
  'Reading from Workbook': 'readingFromWorkbook'
};

class AssignLessonModal_AssignLessonModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleAssignSelectedDropdown", () => this.setState(({
      assignSelectedDropdownOpen
    }) => ({
      assignSelectedDropdownOpen: !assignSelectedDropdownOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onResetModal", () => this.setState({
      subjectFilters: [],
      typeFilters: [],
      sort: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", (titleFilter, value) => this.setState({
      [titleFilter]: value
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", titleFilter => this.setState({
      [titleFilter]: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(this, "onSortLessons", lessons => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'pageNumber':
          return lessons.sort(sortOptions["b" /* pageNumberSort */]);

        case 'problems':
          return lessons.sort(sortOptions["c" /* problemSort */]);

        case 'timeEstimate':
          return lessons.sort(sortOptions["e" /* timeEstimateSort */]);

        case 'subject':
          return lessons.sort(sortOptions["d" /* subjectSort */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByTitle", () => {
      const {
        lessons,
        titleFilter
      } = this.state;
      return lessons.reduce((finalArr, currentLesson) => {
        const {
          title
        } = currentLesson;
        const lessonString = title.replace(/\s/g, "").toLowerCase();

        if (lessonString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
          finalArr.push(currentLesson);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByUnit", () => {
      const {
        lessons,
        unitFilter
      } = this.state;
      return lessons.reduce((finalArr, currentLesson) => {
        const {
          unit
        } = currentLesson;
        const lessonString = unit.replace(/\s/g, "").toLowerCase();

        if (lessonString.indexOf(unitFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
          finalArr.push(currentLesson);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterLessons", () => {
      const {
        subjectFilters,
        typeFilters,
        lessons: allLessons
      } = this.state;
      let lessons = allLessons;

      if (subjectFilters.length) {
        lessons = lessons.filter(lesson => subjectFilters.indexOf(lesson.subject) !== -1);
      }

      if (typeFilters.length) {
        lessons = lessons.filter(lesson => typeFilters.indexOf(lessonTypeMap[lesson.type]) !== -1);
      }

      return lessons;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableLessons", () => {
      const {
        subjectFilters,
        typeFilters,
        sort,
        unitFilter,
        titleFilter,
        lessons
      } = this.state;
      let mappableLessons = lessons;

      if (titleFilter.length) {
        mappableLessons = this.onFilterByTitle();
      }

      if (unitFilter.length) {
        mappableLessons = this.onFilterByUnit();
      }

      if (subjectFilters.length || typeFilters.length) {
        mappableLessons = this.onFilterLessons();
      }

      if (sort) {
        return this.onSortLessons(mappableLessons);
      }

      return mappableLessons;
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        subjectFilters: currentSubjectFilters,
        typeFilters: currentTypeFilters
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

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
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        const filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [modifiedFilterName]: modifiedFilterUpdatedState
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleLessonClick", lesson => {
      const {
        selectedLessons
      } = this.state;
      let modifiedLessons;

      if (selectedLessons.indexOf(lesson) === -1) {
        modifiedLessons = external_immutability_helper_default()(selectedLessons, {
          $push: [lesson]
        });
      } else {
        const lessonIndex = selectedLessons.indexOf(lesson);
        modifiedLessons = external_immutability_helper_default()(selectedLessons, {
          $splice: [[lessonIndex, 1]]
        });
      }

      this.setState({
        selectedLessons: modifiedLessons
      });
    });

    Object(defineProperty["a" /* default */])(this, "assignLessons", date => {
      const {
        onAssignLessons
      } = this.props;
      const {
        selectedLessons
      } = this.state;
      let assignDate;

      switch (date) {
        case 'today':
          assignDate = external_moment_default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = external_moment_default()().add(1, 'days').format('MM/DD/YY');
          break;

        case 'nextSession':
          break;

        case 'customDate':
          assignDate = '01/05/19';
          break;

        default:
          break;
      }

      this.onToggleAssignSelectedDropdown();
      this.onResetModal();
      onAssignLessons(selectedLessons, assignDate);
    });

    Object(defineProperty["a" /* default */])(this, "mapLessons", () => this.getMappableLessons().map((lesson, index) => AssignLessonModal_jsx(components_LessonCard, {
      lesson: lesson,
      index: index,
      key: lesson.id,
      onSetDropdown: this.onSetDropdown,
      onCloseDropdown: this.onCloseDropdown,
      dropdownIndex: this.state.dropdownIndex,
      dropdownIsOpen: this.state.dropdownIsOpen,
      handleLessonClick: this.handleLessonClick,
      selectedLessons: this.state.selectedLessons
    })));

    this.state = {
      sort: '',
      unitFilter: '',
      titleFilter: '',
      typeFilters: [],
      subjectFilters: [],
      selectedLessons: [],
      lessons: sampleLessons,
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      assignSelectedDropdownOpen,
      subjectFilters,
      typeFilters,
      sort
    } = this.state;
    return AssignLessonModal_jsx("div", {
      className: "jsx-4152893512"
    }, open && AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "wrapper"
    }, AssignLessonModal_jsx("div", {
      style: {
        minWidth: "100%"
      },
      className: "jsx-4152893512" + " " + "card-modal card-main card switcher-section grey lighten-3"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "header-row card-panel light-blue lighten-1 white-text"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "card-panel-row row"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "col s11"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "d-flex"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "icon-col"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-4152893512" + " " + "icon-books-l"
    })), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "card-panel-text"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "text-large"
    }, "Assign Lessons")))), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "col s1 right-align"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "row icons-row"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-4152893512" + " " + "modal-close close"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-4152893512" + " " + "icon-close-thin"
    })))))), AssignLessonModal_jsx(components_FilterSection, {
      sort: sort,
      typeFilters: typeFilters,
      subjectFilters: subjectFilters,
      onSetSort: this.onSetSort,
      onClearFilters: this.onResetModal,
      handleFilterClick: this.handleFilterClick,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState
    }), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "card-content"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "card-body"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "result-row center-align"
    }, AssignLessonModal_jsx("b", {
      className: "jsx-4152893512" + " " + "result"
    }, " - ", this.getMappableLessons().length, " results -")), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "checkboxes-section row d-flex-content card-width-322"
    }, this.mapLessons())))), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "add-btn-block"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSelectedDropdown,
      "data-target": "dropdown_assign_selected_lessons",
      className: "jsx-4152893512" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-4152893512" + " " + "material-icons"
    }, "add"), " Assign Selected"), AssignLessonModal_jsx("ul", {
      id: "dropdown_assign_selected_lessons",
      style: {
        display: assignSelectedDropdownOpen ? 'block' : '0',
        opacity: assignSelectedDropdownOpen ? '1' : '0'
      },
      className: "jsx-4152893512" + " " + 'dropdown-content'
    }, AssignLessonModal_jsx("li", {
      className: "jsx-4152893512"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('today'),
      className: "jsx-4152893512"
    }, "For Today")), AssignLessonModal_jsx("li", {
      className: "jsx-4152893512"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('tomorrow'),
      className: "jsx-4152893512"
    }, "For Tomorrow")), AssignLessonModal_jsx("li", {
      className: "jsx-4152893512"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('nextSession'),
      className: "jsx-4152893512"
    }, "For Next Session")), AssignLessonModal_jsx("li", {
      className: "jsx-4152893512"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('customDate'),
      className: "jsx-4152893512"
    }, "For Date..."))))), AssignLessonModal_jsx(style_default.a, {
      id: "4152893512"
    }, [".card-modal.jsx-4152893512{margin:0;border-radius:6px;}", ".modal-custom.jsx-4152893512{opacity:1;visibility:visible;}", ".modal-footer.jsx-4152893512{background-color:white;}"]));
  }

}

/* harmony default export */ var Modals_AssignLessonModal = __webpack_exports__["a"] = (AssignLessonModal_AssignLessonModal);

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x4x+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOffComponentWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
    return __jsx("div", {
      className: this.props.className,
      ref: this.setWrapperRef
    }, this.props.children);
  }

}

/***/ }),

/***/ "xA6B":
/***/ (function(module, exports) {



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