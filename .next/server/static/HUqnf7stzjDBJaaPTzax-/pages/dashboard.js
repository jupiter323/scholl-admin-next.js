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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "325u":
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u9iw");


/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "MCK1":
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "u9iw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

// CONCATENATED MODULE: ./components/Dashboard/components/DashboardCard/index.js

var __jsx = external_react_default.a.createElement;


class DashboardCard_DashboardCard extends external_react_["Component"] {
  constructor(props) {
    super(props);
    const {
      sessionStats,
      testStats,
      user
    } = props;
    this.state = {
      menuOpacity: 0,
      collapseStyle: {},
      dropDownActive: false,
      listClasses: "card-collapsible-holder"
    };
    this.sessionStats = sessionStats;
    this.testStats = testStats;
    this.user = user;
  }

  cycleMenuOpacity() {
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

  cycleDropDown() {
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

  componentDidMount() {
    document.addEventListener('mousedown', () => this.handleClickOutside());
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', () => this.handleClickOutside());
  }

  handleClickOutside() {
    if (this.state.menuOpacity === 1) {
      this.cycleMenuOpacity();
    }
  }

  render() {
    return __jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, __jsx("ul", {
      className: "card-dashboard-session card-main card expandable"
    }, __jsx("li", {
      className: this.state.listClasses
    }, __jsx("div", {
      className: "collapsible-card owner-box card-panel",
      style: {
        "backgroundColor": "#14b04b",
        "color": "#fff"
      }
    }, __jsx("div", {
      className: "card-panel-row row"
    }, __jsx("div", {
      className: "col s9"
    }, __jsx("span", {
      className: "meta-info"
    }, __jsx("time", {
      dateTime: "2018-12-09T15:30"
    }, this.sessionStats.datetime), __jsx("span", {
      className: "amount"
    }, " (10 of 12)")), __jsx("h3", {
      className: "collapsible-title hidden-active"
    }, `${this.user.lastName}, ${this.user.firstName}`)), __jsx("div", {
      className: "col s2 right-align"
    }, this.sessionStats.numberOfFlags > 0 && __jsx("span", {
      className: "badge-rounded-sm badge red darken-2 white-text"
    }, __jsx("b", {
      className: "badge-text"
    }, this.sessionStats.numberOfFlags), __jsx("i", {
      className: "icon-flag"
    }))), __jsx("div", {
      className: "col s2 right-align"
    }, __jsx("div", {
      className: "row icons-row"
    }, __jsx("div", {
      className: "dropdown-block col"
    }, __jsx("a", {
      onClick: () => this.cycleMenuOpacity(),
      className: "dropdown-trigger btn",
      href: "#",
      "data-target": "dropdown01_01"
    }, __jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), __jsx("ul", {
      id: "dropdown01_01",
      className: "dropdown-content dropdown-wide",
      tabIndex: "0001",
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
    }, __jsx("li", {
      tabIndex: "0002"
    }, __jsx("a", {
      href: "#modal_user_edit",
      className: "modal-trigger link-block"
    }, "Edit")), __jsx("li", {
      tabIndex: "0003"
    }, __jsx("a", {
      href: "#!"
    }, "Clone")), __jsx("li", {
      tabIndex: "0004"
    }, __jsx("a", {
      href: "#!"
    }, "Impersonate")), __jsx("li", {
      tabIndex: "0005"
    }, __jsx("a", {
      href: "#!"
    }, "Delete")))), __jsx("div", {
      className: "col right-align"
    }, __jsx("span", {
      className: "collapsible-header collapsible-opener",
      onClick: () => this.cycleDropDown()
    }, __jsx("i", {
      className: "custom-icon-triangle-right color-white"
    }))))))), __jsx("div", {
      className: "card-content collapsible-body",
      style: this.state.collapseStyle
    }, __jsx("div", {
      className: "owner-box card-panel",
      style: {
        "backgroundColor": "#14b04b",
        "color": "#fff"
      }
    }, __jsx("div", {
      className: "card-panel-row row"
    }, __jsx("div", {
      className: "col s12"
    }, __jsx("div", {
      className: "user-block"
    }, __jsx("div", {
      className: "user-circle",
      style: {
        "backgroundColor": "#af1e90",
        "color": "#fff"
      }
    }, __jsx("span", {
      className: "initials"
    }, this.user.initials)), __jsx("div", {
      className: "user-text",
      style: {
        "color": "#fff"
      }
    }, __jsx("h4", {
      className: "h3"
    }, `${this.user.firstName}, ${this.user.lastName}`), __jsx("a", {
      href: "mailto:arnold.studently@gmail.com"
    }, this.user.email)))))), __jsx("div", {
      className: "row d-flex align-items-center mb-0"
    }, __jsx("div", {
      className: "col s12 m6"
    }, __jsx("div", {
      className: "chart-container chart-container-large start-anim"
    }, __jsx("div", {
      className: "chart-holder"
    }, __jsx("span", {
      className: "svg-curved-bar",
      "data-values": "{\"from\": 1040, \"to\": 1510, \"current\": 1270}",
      "data-duration": "1"
    }, __jsx("svg", {
      width: "146px",
      height: "146px",
      viewBox: "0 0 146 146"
    }, __jsx("path", {
      fill: "none",
      style: {
        "strokeWidth": 30,
        "stroke": "#eaeaea"
      },
      d: "M 19.154659885067794 94.556422428299 A 58 58 0 1 1 126.84534011493221 94.556422428299"
    }), __jsx("path", {
      "data-dinamic": "",
      fill: "none",
      style: {
        "strokeWidth": 30,
        "stroke": "#0085ce"
      },
      d: "M 19.154659885067794 94.556422428299 A 58 58 0 0 1 69.48595978278411 15.106550272489471"
    })), __jsx("span", {
      className: "js-diff-holder"
    }, __jsx("span", {
      className: "js-diff visible",
      "data-position": "position-2"
    }, __jsx("span", {
      className: "txt",
      style: {
        "top": "-56px",
        "left": "-16px"
      }
    }, `+${this.testStats.currentScore - this.testStats.initial}`)))), __jsx("span", {
      className: "chart-value",
      style: {
        "backgroundColor": "#0085ce"
      }
    }, __jsx("span", {
      "data-count-up": "",
      "data-start-val": "1040",
      "data-end-val": "1270",
      "data-duration": "1"
    }, this.testStats.currentScore))), __jsx("div", {
      className: "chart-row"
    }, __jsx("div", {
      className: "chart-col chart-start"
    }, __jsx("span", {
      className: "amount"
    }, this.testStats.initial), __jsx("span", {
      className: "amount-text"
    }, "initial")), __jsx("div", {
      className: "chart-col chart-end"
    }, __jsx("span", {
      className: "amount"
    }, this.testStats.target), __jsx("span", {
      className: "amount-text"
    }, "target"))))), __jsx("div", {
      className: "col s12 m6"
    }, __jsx("ul", {
      className: "points-list-bordered"
    }, __jsx("li", {
      className: "style-green"
    }, __jsx("span", {
      className: "badge-circle"
    }, this.sessionStats.complete), __jsx("span", {
      className: "point-text"
    }, "complete")), __jsx("li", {
      className: "style-red"
    }, __jsx("span", {
      className: "badge-circle"
    }, this.sessionStats.overdue), __jsx("span", {
      className: "point-text"
    }, "overdue")), __jsx("li", {
      className: "style-orange"
    }, __jsx("span", {
      className: "badge-circle"
    }, this.sessionStats.practiceTests), __jsx("span", {
      className: "point-text"
    }, "practice tests")), __jsx("li", {
      className: "style-blue-lighter"
    }, __jsx("span", {
      className: "badge-circle"
    }, __jsx("span", null, this.sessionStats.sessions), " ", __jsx("span", {
      className: "of"
    }, "of 23")), __jsx("span", {
      className: "point-text"
    }, "sessions")))))))));
  }

}

/* harmony default export */ var components_DashboardCard = (DashboardCard_DashboardCard);
// CONCATENATED MODULE: ./components/Dashboard/utils/sampleUpComingSessions.js
const moment = __webpack_require__("wy2R");

const uuidv4 = __webpack_require__("xg6E");

const faker = __webpack_require__("MCK1");

/* harmony default export */ var sampleUpComingSessions = ({
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
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");

// CONCATENATED MODULE: ./components/Dashboard/components/SessionList/index.js
var SessionList_jsx = external_react_default.a.createElement;





class SessionList_SessionList extends external_react_["Component"] {
  render() {
    return SessionList_jsx("div", {
      className: "dashboard-card card"
    }, sampleUpComingSessions.sessions.map(function (element, key) {
      console.log(element);
      return SessionList_jsx("div", {
        className: "card-content",
        key: element.key
      }, SessionList_jsx("h2", {
        className: "dashboard-title"
      }, SessionList_jsx("time", {
        dateTime: "2019-02-02"
      }, element.datetime), SessionList_jsx("span", {
        className: "small"
      }, " ", SessionList_SessionList.getDateName(external_moment_(element.datetime, 'M/D/YYYY')))), SessionList_jsx("div", {
        className: "row d-flex-content card-width-366 mb-0"
      }, element.sessions.map(function (session) {
        return SessionList_jsx(components_DashboardCard, {
          sessionStats: session.sessionStats,
          testStats: session.testStats,
          user: session.user,
          key: session.uuid
        });
      })));
    }));
  }

  static getDateName(datetime) {
    if (external_moment_().isSame(external_moment_(datetime, 'M/D/YYYY'), 'day')) {
      return 'Today';
    } else if (external_moment_().add(1, 'days').isSame(external_moment_(datetime, 'M/D/YYYY'), 'day')) {
      return 'Tomorrow';
    }

    return 'Other';
  }

}

/* harmony default export */ var components_SessionList = (SessionList_SessionList);
// CONCATENATED MODULE: ./pages/dashboard.js

var dashboard_jsx = external_react_default.a.createElement;


 // eslint-disable-next-line react/prefer-stateless-function

class dashboard_Dashboard extends external_react_["Component"] {
  render() {
    return dashboard_jsx("main", {
      id: "main",
      role: "main"
    }, dashboard_jsx("div", {
      className: "main-holder grey lighten-5"
    }, dashboard_jsx(external_react_sticky_["StickyContainer"], null, dashboard_jsx(external_react_sticky_["Sticky"], null, ({
      style
    }) => dashboard_jsx("div", {
      className: "title-row card-panel",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1999
      })
    }, dashboard_jsx("div", {
      className: "mobile-header"
    }, dashboard_jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, dashboard_jsx("i", {
      className: "material-icons"
    }, "menu"))), dashboard_jsx("h2", {
      className: "h1 white-text"
    }, dashboard_jsx("span", {
      className: "heading-holder"
    }, dashboard_jsx("i", {
      className: "icon-speed"
    }), dashboard_jsx("span", {
      className: "heading-block"
    }, "Dashboard"))), dashboard_jsx("nav", {
      className: "nav-additional"
    }, dashboard_jsx("ul", {
      className: "menu-additional"
    }, dashboard_jsx("li", null, dashboard_jsx("a", {
      className: "active",
      href: "#"
    }, "Upcoming Sessions")), dashboard_jsx("li", null, dashboard_jsx("a", {
      href: "#"
    }, "Stats")))))), dashboard_jsx("div", {
      className: "content-section"
    }, dashboard_jsx(components_SessionList, null)))));
  }

}

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (dashboard_Dashboard);

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xg6E":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

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