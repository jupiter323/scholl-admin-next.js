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

/***/ "./components/Dashboard/components/DashboardCard/index.js":
/*!****************************************************************!*\
  !*** ./components/Dashboard/components/DashboardCard/index.js ***!
  \****************************************************************/
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








var DashboardCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DashboardCard, _Component);

  function DashboardCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DashboardCard).call(this, props));
    var sessionStats = props.sessionStats,
        testStats = props.testStats,
        user = props.user;
    _this.state = {
      menuOpacity: 0,
      collapseStyle: {},
      dropDownActive: false,
      listClasses: "card-collapsible-holder"
    };
    _this.sessionStats = sessionStats;
    _this.testStats = testStats;
    _this.user = user;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardCard, [{
    key: "cycleMenuOpacity",
    value: function cycleMenuOpacity() {
      if (this.state.menuOpacity === 0) {
        this.setState({
          menuOpacity: 1
        });
      } else {
        this.setState({
          menuOpacity: 0
        });
      }
    }
  }, {
    key: "cycleDropDown",
    value: function cycleDropDown() {
      if (!this.state.dropDownActive) {
        this.setState({
          collapseStyle: {
            "display": "block"
          },
          listClasses: "card-collapsible-holder active",
          dropDownActive: true
        });
      } else {
        this.setState({
          collapseStyle: {},
          listClasses: "card-collapsible-holder",
          dropDownActive: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('mousedown', function () {
        return _this2.handleClickOutside();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      document.removeEventListener('mousedown', function () {
        return _this3.handleClickOutside();
      });
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      if (this.state.menuOpacity === 1) {
        this.cycleMenuOpacity();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "card-dashboard-session card-main card expandable"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: this.state.listClasses
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "collapsible-card owner-box card-panel",
        style: {
          "backgroundColor": "#14b04b",
          "color": "#fff"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col s9"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "meta-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("time", {
        dateTime: "2018-12-09T15:30"
      }, this.sessionStats.datetime), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "amount"
      }, " (10 of 12)")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "collapsible-title hidden-active"
      }, "".concat(this.user.lastName, ", ").concat(this.user.firstName))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col s2 right-align"
      }, this.sessionStats.numberOfFlags > 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "badge-rounded-sm badge red darken-2 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        className: "badge-text"
      }, this.sessionStats.numberOfFlags), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icon-flag"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col s2 right-align"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row icons-row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "dropdown-block col"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return _this4.cycleMenuOpacity();
        },
        className: "dropdown-trigger btn",
        href: "#",
        "data-target": "dropdown01_01"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        id: "dropdown01_01",
        className: "dropdown-content dropdown-wide",
        tabIndex: "0",
        style: {
          "display": "block",
          "width": "120px",
          "left": "133px",
          "top": "8px",
          "height": "104px",
          "transformOrigin": "0px 0px",
          "opacity": this.state.menuOpacity,
          "transform": "scaleX(1) scaleY(1)"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        tabIndex: "0"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#modal_user_edit",
        className: "modal-trigger link-block"
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        tabIndex: "0"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#!"
      }, "Clone")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        tabIndex: "0"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#!"
      }, "Impersonate")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        tabIndex: "0"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#!"
      }, "Delete")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col right-align"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "collapsible-header collapsible-opener",
        onClick: function onClick() {
          return _this4.cycleDropDown();
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "custom-icon-triangle-right color-white"
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-content collapsible-body",
        style: this.state.collapseStyle
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "owner-box card-panel",
        style: {
          "backgroundColor": "#14b04b",
          "color": "#fff"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-panel-row row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col s12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "user-block"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "user-circle",
        style: {
          "backgroundColor": "#af1e90",
          "color": "#fff"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "initials"
      }, this.user.initials)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "user-text",
        style: {
          "color": "#fff"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "h3"
      }, "".concat(this.user.firstName, ", ").concat(this.user.lastName)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "mailto:arnold.studently@gmail.com"
      }, this.user.email)))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row d-flex align-items-center mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chart-container chart-container-large start-anim"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chart-holder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "svg-curved-bar",
        "data-values": "{\"from\": 1040, \"to\": 1510, \"current\": 1270}",
        "data-duration": "1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        width: "146px",
        height: "146px",
        viewBox: "0 0 146 146"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        fill: "none",
        style: {
          "strokeWidth": 30,
          "stroke": "#eaeaea"
        },
        d: "M 19.154659885067794 94.556422428299 A 58 58 0 1 1 126.84534011493221 94.556422428299"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        "data-dinamic": "",
        fill: "none",
        style: {
          "strokeWidth": 30,
          "stroke": "#0085ce"
        },
        d: "M 19.154659885067794 94.556422428299 A 58 58 0 0 1 69.48595978278411 15.106550272489471"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "js-diff-holder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "js-diff visible",
        "data-position": "position-2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "txt",
        style: {
          "top": "-56px",
          "left": "-16px"
        }
      }, "+".concat(this.testStats.currentScore - this.testStats.initial))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "chart-value",
        style: {
          "backgroundColor": "#0085ce"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        "data-count-up": "",
        "data-start-val": "1040",
        "data-end-val": "1270",
        "data-duration": "1"
      }, this.testStats.currentScore))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chart-row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chart-col chart-start"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "amount"
      }, this.testStats.initial), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "amount-text"
      }, "initial")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chart-col chart-end"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "amount"
      }, this.testStats.target), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "amount-text"
      }, "target"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col s12 m6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "points-list-bordered"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "style-green"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "badge-circle"
      }, this.sessionStats.complete), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "point-text"
      }, "complete")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "style-red"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "badge-circle"
      }, this.sessionStats.overdue), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "point-text"
      }, "overdue")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "style-orange"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "badge-circle"
      }, this.sessionStats.practiceTests), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "point-text"
      }, "practice tests")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "style-blue-lighter"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "badge-circle"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, this.sessionStats.sessions), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "of"
      }, "of 23")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "point-text"
      }, "sessions")))))))));
    }
  }]);

  return DashboardCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DashboardCard);

/***/ }),

/***/ "./components/Dashboard/components/SessionList/index.js":
/*!**************************************************************!*\
  !*** ./components/Dashboard/components/SessionList/index.js ***!
  \**************************************************************/
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
/* harmony import */ var _DashboardCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DashboardCard */ "./components/Dashboard/components/DashboardCard/index.js");
/* harmony import */ var _utils_sampleUpComingSessions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/sampleUpComingSessions */ "./components/Dashboard/utils/sampleUpComingSessions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);










var SessionList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SessionList, _Component);

  function SessionList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SessionList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SessionList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SessionList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "dashboard-card card"
      }, _utils_sampleUpComingSessions__WEBPACK_IMPORTED_MODULE_7__["default"].sessions.map(function (element, key) {
        console.log(element);
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card-content",
          key: element.key
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          className: "dashboard-title"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("time", {
          dateTime: "2019-02-02"
        }, element.datetime), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "small"
        }, " ", SessionList.getDateName(moment__WEBPACK_IMPORTED_MODULE_8__(element.datetime, 'M/D/YYYY')))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row d-flex-content card-width-366 mb-0"
        }, element.sessions.map(function (session) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DashboardCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            sessionStats: session.sessionStats,
            testStats: session.testStats,
            user: session.user,
            key: session.uuid
          });
        })));
      }));
    }
  }], [{
    key: "getDateName",
    value: function getDateName(datetime) {
      if (moment__WEBPACK_IMPORTED_MODULE_8__().isSame(moment__WEBPACK_IMPORTED_MODULE_8__(datetime, 'M/D/YYYY'), 'day')) {
        return 'Today';
      } else if (moment__WEBPACK_IMPORTED_MODULE_8__().add(1, 'days').isSame(moment__WEBPACK_IMPORTED_MODULE_8__(datetime, 'M/D/YYYY'), 'day')) {
        return 'Tomorrow';
      }

      return 'Other';
    }
  }]);

  return SessionList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SessionList);

/***/ }),

/***/ "./components/Dashboard/utils/sampleUpComingSessions.js":
/*!**************************************************************!*\
  !*** ./components/Dashboard/utils/sampleUpComingSessions.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var moment = __webpack_require__(/*! moment */ "moment");

var uuidv4 = __webpack_require__(/*! uuid/v4 */ "uuid/v4");

var faker = __webpack_require__(/*! faker */ "faker");

/* harmony default export */ __webpack_exports__["default"] = ({
  sessions: [{
    key: uuidv4(),
    datetime: moment().format('M/D/YYYY'),
    // datetime: "2/6/2019",
    sessions: [{
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }]
  }, {
    key: uuidv4(),
    datetime: moment().add(1, 'd').format('M/D/YYYY'),
    sessions: [{
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }, {
      uuid: uuidv4(),
      sessionStats: {
        complete: Math.floor(Math.random() * 100),
        overdue: Math.floor(Math.random() * 10),
        practiceTests: Math.floor(Math.random() * 10),
        sessions: Math.floor(Math.random() * 23) + 1,
        numberOfSessions: 12,
        sessionNumber: 10,
        numberOfFlags: Math.floor(Math.random() * 10),
        datetime: moment().format('M/D/YYYY @ 4:30 PM')
      },
      testStats: {
        currentScore: Math.floor(Math.random() * (1510 - 1040)) + 1040,
        initial: 1040,
        target: 1510
      },
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        initials: 'JS',
        email: faker.internet.email()
      }
    }]
  }]
});

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
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
/* harmony import */ var _components_Dashboard_components_SessionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dashboard/components/SessionList */ "./components/Dashboard/components/SessionList/index.js");








var Dashboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, _Component);

  function Dashboard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dashboard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dashboard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "title-row card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mobile-header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "material-icons"
      }, "menu"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "h1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icon-speed"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "heading-block"
      }, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "nav-additional"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "menu-additional"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "active",
        href: "#"
      }, "Upcoming Sessions")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "Stats"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Dashboard_components_SessionList__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/pages/dashboard.js */"./pages/dashboard.js");


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

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map