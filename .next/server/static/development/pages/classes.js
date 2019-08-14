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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Class/DetailSummaryPage/components/ClassAverages/index.js":
/*!******************************************************************************!*\
  !*** ./components/Class/DetailSummaryPage/components/ClassAverages/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./components/Class/DetailSummaryPage/components/ClassAverages/utils/index.js");




var ClassAverages = function ClassAverages(_ref) {
  var _ref$state = _ref.state,
      questionsAnswered = _ref$state.questionsAnswered,
      flaggedProblems = _ref$state.flaggedProblems,
      timeLoggedIn = _ref$state.timeLoggedIn,
      videoWatched = _ref$state.videoWatched,
      notesTaken = _ref$state.notesTaken,
      onTimePercentage = _ref$state.onTimePercentage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Class Averages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "alerts-list list-three-columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box purple darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-pencil2"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text purple-text text-darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Questions Answered")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, questionsAnswered)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box icon-box pink darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-flag"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text pink-text text-darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Flagged Problems")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, flaggedProblems)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box icon-box green darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-clock"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text green-text text-darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Time Logged In")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatTimeLoggedIn"])(timeLoggedIn)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert alert-blue-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box cyan darken-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-videocam"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text cyan-text text-darken-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Video Watched")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatVideoWatched"])(videoWatched)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box orange darken-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-note"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text orange-text text-darken-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Notes Taken")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, notesTaken)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box red"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-bell"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text red-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "On-Time Percentage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, onTimePercentage, "%"))))));
};

ClassAverages.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassAverages);

/***/ }),

/***/ "./components/Class/DetailSummaryPage/components/ClassAverages/utils/index.js":
/*!************************************************************************************!*\
  !*** ./components/Class/DetailSummaryPage/components/ClassAverages/utils/index.js ***!
  \************************************************************************************/
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

/***/ "./components/Class/DetailSummaryPage/components/ScoreImprovement/index.js":
/*!*********************************************************************************!*\
  !*** ./components/Class/DetailSummaryPage/components/ScoreImprovement/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var ScoreImprovement = function ScoreImprovement(_ref) {
  var _ref$state = _ref.state,
      points = _ref$state.points,
      readingAndWriting = _ref$state.readingAndWriting,
      math = _ref$state.math,
      noGain = _ref$state.noGain,
      from0To50 = _ref$state.from0To50,
      from50To99 = _ref$state.from50To99,
      from100To149 = _ref$state.from100To149,
      from150To199 = _ref$state.from150To199,
      from200Plus = _ref$state.from200Plus;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Score Improvement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "two-columns-sameheight row mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 xl6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "points-list-custom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "point-custom-xlarge style-aqua"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, points, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "point-custom-114 style-green-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, "+", readingAndWriting, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Reading & Writing"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "point-custom-114 style-blue-lightdark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, math, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Math"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 xl6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "vertical-graphs-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, noGain, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box red darken-1",
    style: {
      height: "".concat(noGain, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "no gain"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from0To50, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box pink darken-3",
    style: {
      height: "".concat(from0To50, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "0 to 50 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from50To99, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box purple accent-4",
    style: {
      height: "".concat(from50To99, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "50 to 99 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from100To149, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box purple darken-3",
    style: {
      height: "".concat(from100To149, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "100-149 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from150To199, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box  deep-purple accent-4",
    style: {
      height: "".concat(from150To199, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "150-199 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "vertical-graph-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical-graph-frame"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-value"
  }, from200Plus, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "vertical-graph-box  indigo accent-4",
    style: {
      height: "".concat(from200Plus, "%")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "graph-legend"
  }, "200+ ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points")))))))));
};

ScoreImprovement.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ScoreImprovement);

/***/ }),

/***/ "./components/Class/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js":
/*!***************************************************************************************!*\
  !*** ./components/Class/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js ***!
  \***************************************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./components/Class/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js");











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

      var _this$props$state = this.props.state,
          reading = _this$props$state.reading,
          writing = _this$props$state.writing,
          math = _this$props$state.math;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-block"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "h1"
      }, "Strengths & Weaknesses"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-main-full card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-panel light-blue accent-2 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "tabs row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tab col s4 l4",
        style: {
          margin: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: openSection === 'reading' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'reading');
        }
      }, "Reading")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tab col s4 l4",
        style: {
          margin: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: openSection === 'writing' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'writing');
        }
      }, "Writing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tab col s4 l4",
        style: {
          margin: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: openSection === 'math' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'math');
        }
      }, "Math")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "indicator",
        style: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getIndicatorStatus"])(openSection)
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-content tabs-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tabs_tab01",
        className: openSection === 'reading' ? '' : 'tab-content'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col s12 l5 xl4 chart-column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "chart-block chart-block-large"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "js-donut-chart js-donut-large",
        "data-stroke-width": "32",
        "data-source": "./inc/score-data-reading.json"
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
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Tab 03 content"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Expedita quibusdam sed, temporibus quasi dolorem iure non inventore quaerat sit mollitia dolores minima illo perspiciatis omnis delectus, recusandae quos, incidunt ratione."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, enim? Itaque reprehenderit, id eos quasi optio est. Soluta alias, minima consequuntur obcaecati odio maiores, molestiae, vel ipsum modi delectus enim!"))))));
    }
  }]);

  return StrengthsAndWeaknesses;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

StrengthsAndWeaknesses.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StrengthsAndWeaknesses);

/***/ }),

/***/ "./components/Class/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js":
/*!*********************************************************************************************!*\
  !*** ./components/Class/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js ***!
  \*********************************************************************************************/
/*! exports provided: getIndicatorStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndicatorStatus", function() { return getIndicatorStatus; });
var getIndicatorStatus = function getIndicatorStatus(activeSection) {
  switch (activeSection) {
    case 'reading':
      return {
        left: '0',
        right: '66%'
      };

    case 'writing':
      return {
        left: '33%',
        right: '33%'
      };

    case 'math':
      return {
        left: '66%',
        right: '0'
      };

    default:
      return null;
  }
};

/***/ }),

/***/ "./components/Class/DetailSummaryPage/components/StudentsWhoHave/index.js":
/*!********************************************************************************!*\
  !*** ./components/Class/DetailSummaryPage/components/StudentsWhoHave/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


/* eslint-disable jsx-a11y/no-static-element-interactions */



var StudentsWhoHave = function StudentsWhoHave(_ref) {
  var _ref$state = _ref.state,
      overdueCoursework = _ref$state.overdueCoursework,
      flaggedProblems = _ref$state.flaggedProblems,
      fewerThan2PracticeTests = _ref$state.fewerThan2PracticeTests;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      overdueSectionOpen = _useState2[0],
      setOverdueSectionOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      flaggedSectionOpen = _useState4[0],
      setFlaggedSectionOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      fewerThan2PracticeTestsOpen = _useState6[0],
      setFewerThan2PracticeTestsOpen = _useState6[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Student Who Have..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: overdueSectionOpen ? "pink-darken-2 pink-text text-darken-2 active" : "pink-darken-2 pink-text text-darken-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return setOverdueSectionOpen(!overdueSectionOpen);
    },
    className: "card card-alert collapsible-header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "icon-box pink darken-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "icon-exclamation-mark"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "alert-text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Overdue Coursework")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "text-large"
  }, overdueCoursework.length))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "collapsible-opener"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "custom-icon-traingle-down"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-content collapsible-body",
    style: {
      display: overdueSectionOpen ? 'block' : ''
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "card-detail-table"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sort-holder"
  }, "Name ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sort-holder"
  }, "Overdue ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, overdueCoursework.map(function (student) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: student.name
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, student.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, student.overdueAssignments));
  }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: flaggedSectionOpen ? "pink-darken-3 pink-text text-darken-3 active" : "pink-darken-3 pink-text text-darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return setFlaggedSectionOpen(!flaggedSectionOpen);
    },
    className: "card card-alert collapsible-header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "icon-box pink darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "icon-exclamation-mark"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "alert-text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Flagged Problems")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "text-large"
  }, flaggedProblems.length))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "collapsible-opener"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "custom-icon-traingle-down"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-content collapsible-body",
    style: {
      display: flaggedSectionOpen ? 'block' : ''
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "card-detail-table"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sort-holder"
  }, "Name ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sort-holder"
  }, "Flags", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, flaggedProblems.map(function (student) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: student.name
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, student.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, student.flaggedProblems));
  }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: fewerThan2PracticeTestsOpen ? "pink-darken-4 pink-text text-darken-4 active" : "pink-darken-4 pink-text text-darken-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return setFewerThan2PracticeTestsOpen(!fewerThan2PracticeTestsOpen);
    },
    className: "card card-alert collapsible-header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "icon-box pink darken-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "icon-exclamation-mark"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "alert-text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Fewer than 2  Practice Tests")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "text-large"
  }, fewerThan2PracticeTests.length))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "collapsible-opener"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "custom-icon-traingle-down"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-content collapsible-body",
    style: {
      display: fewerThan2PracticeTestsOpen ? 'block' : ''
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "card-detail-table"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sort-holder"
  }, "Name ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sort-holder"
  }, "Tests", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, fewerThan2PracticeTests.map(function (student) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: student.name
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, student.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, student.fewerThan2PracticeTests));
  })))))))));
};

StudentsWhoHave.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StudentsWhoHave);

/***/ }),

/***/ "./components/Class/DetailSummaryPage/index.js":
/*!*****************************************************!*\
  !*** ./components/Class/DetailSummaryPage/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _components_ClassAverages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ClassAverages */ "./components/Class/DetailSummaryPage/components/ClassAverages/index.js");
/* harmony import */ var _components_ScoreImprovement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ScoreImprovement */ "./components/Class/DetailSummaryPage/components/ScoreImprovement/index.js");
/* harmony import */ var _components_StudentsWhoHave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/StudentsWhoHave */ "./components/Class/DetailSummaryPage/components/StudentsWhoHave/index.js");
/* harmony import */ var _components_StrengthsAndWeaknesses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/StrengthsAndWeaknesses */ "./components/Class/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js");










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
      var _this$props$currentCl = this.props.currentClass,
          classAverages = _this$props$currentCl.classAverages,
          scoreImprovement = _this$props$currentCl.scoreImprovement,
          studentsWhoHave = _this$props$currentCl.studentsWhoHave,
          strengthsAndWeaknesses = _this$props$currentCl.strengthsAndWeaknesses;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content-section-holder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cards-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "dashboard-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ClassAverages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        state: classAverages
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ScoreImprovement__WEBPACK_IMPORTED_MODULE_8__["default"], {
        state: scoreImprovement
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_StudentsWhoHave__WEBPACK_IMPORTED_MODULE_9__["default"], {
        state: studentsWhoHave
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_StrengthsAndWeaknesses__WEBPACK_IMPORTED_MODULE_10__["default"], {
        state: strengthsAndWeaknesses
      }))))));
    }
  }]);

  return DetailSummaryPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

DetailSummaryPage.propTypes = {
  currentClass: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DetailSummaryPage);

/***/ }),

/***/ "./components/Class/DetailWorksheetPage/components/FilterSection/index.js":
/*!********************************************************************************!*\
  !*** ./components/Class/DetailWorksheetPage/components/FilterSection/index.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_sampleTopics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utils/sampleTopics */ "./components/utils/sampleTopics.js");
/* harmony import */ var _utils_worksheetSortOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../utils/worksheetSortOptions */ "./utils/worksheetSortOptions.js");








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

/***/ "./components/Class/DetailWorksheetPage/components/FullView/index.js":
/*!***************************************************************************!*\
  !*** ./components/Class/DetailWorksheetPage/components/FullView/index.js ***!
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
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utils/formatTimeEstimate */ "./utils/formatTimeEstimate.js");
/* harmony import */ var _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/statusColorMap */ "./components/Class/DetailWorksheetPage/utils/statusColorMap.js");













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

/***/ "./components/Class/DetailWorksheetPage/components/ListView/components/TableHeader/index.js":
/*!**************************************************************************************************!*\
  !*** ./components/Class/DetailWorksheetPage/components/ListView/components/TableHeader/index.js ***!
  \**************************************************************************************************/
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

/***/ "./components/Class/DetailWorksheetPage/components/ListView/index.js":
/*!***************************************************************************!*\
  !*** ./components/Class/DetailWorksheetPage/components/ListView/index.js ***!
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
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TableHeader */ "./components/Class/DetailWorksheetPage/components/ListView/components/TableHeader/index.js");
/* harmony import */ var _utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utils/formatTimeEstimate */ "./utils/formatTimeEstimate.js");
/* harmony import */ var _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/statusColorMap */ "./components/Class/DetailWorksheetPage/utils/statusColorMap.js");













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

/***/ "./components/Class/DetailWorksheetPage/index.js":
/*!*******************************************************!*\
  !*** ./components/Class/DetailWorksheetPage/index.js ***!
  \*******************************************************/
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
/* harmony import */ var _components_FullView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/FullView */ "./components/Class/DetailWorksheetPage/components/FullView/index.js");
/* harmony import */ var _components_ListView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ListView */ "./components/Class/DetailWorksheetPage/components/ListView/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Class/DetailWorksheetPage/components/FilterSection/index.js");
/* harmony import */ var _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/sampleWorksheets */ "./components/Class/DetailWorksheetPage/utils/sampleWorksheets.js");
/* harmony import */ var _utils_sortFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/sortFunctions */ "./components/utils/sortFunctions.js");














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
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_12__["dueDate"]);

        case 'assignDate':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_12__["assignDate"]);

        case 'problems':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_12__["problems"]);

        case 'completed':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_12__["completed"]);

        case 'flags':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_12__["flags"]);

        case 'score':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_12__["score"]);

        case 'timeEstimate':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_12__["timeEstimate"]);

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
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ListView__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onToggleDetailModalOpen: _this.onToggleDetailModalOpen,
            worksheets: _this.getMappableWorksheets()
          });

        case 'full':
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FullView__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      worksheets: _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_11__["default"],
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
          assignWorksheetDropdownOpen = _this$state5.assignWorksheetDropdownOpen;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-holder grey lighten-5 switcher-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FilterSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        currentView: currentView,
        onChangeView: this.onChangeView,
        onSetSort: this.onSetSort,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState,
        onSetFilteredTopicState: this.onSetFilteredTopicState,
        onUnsetFilteredTopicState: this.onUnsetFilteredTopicState
      }), this.renderWorksheetView()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "add-btn-block"
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
      }, "Create New")))));
    }
  }]);

  return DetailWorksheetPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DetailWorksheetPage);

/***/ }),

/***/ "./components/Class/DetailWorksheetPage/utils/sampleWorksheets.js":
/*!************************************************************************!*\
  !*** ./components/Class/DetailWorksheetPage/utils/sampleWorksheets.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: '',
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
  totalVideoMinutesAllMissedProblems: '214'
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
  completionDate: '',
  completionTime: '',
  completedProblems: 0,
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
  totalVideoMinutesAllMissedProblems: '214'
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
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: 10,
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
  totalVideoMinutesAllMissedProblems: '312'
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
  completionDate: '',
  completionTime: '',
  completedProblems: 4,
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
  totalVideoMinutesAllMissedProblems: '401'
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
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: 6,
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
  totalVideoMinutesAllMissedProblems: '200'
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
  completionDate: '',
  completionTime: '',
  completedProblems: 5,
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
  totalVideoMinutesAllMissedProblems: '305'
}]);

/***/ }),

/***/ "./components/Class/DetailWorksheetPage/utils/statusColorMap.js":
/*!**********************************************************************!*\
  !*** ./components/Class/DetailWorksheetPage/utils/statusColorMap.js ***!
  \**********************************************************************/
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

/***/ "./components/Class/utils/sampleClass.js":
/*!***********************************************!*\
  !*** ./components/Class/utils/sampleClass.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sampleClass = {
  id: '1232',
  active: true,
  classAverages: {
    questionsAnswered: '721',
    flaggedProblems: '52.9',
    timeLoggedIn: '273',
    videoWatched: '443',
    notesTaken: '57',
    onTimePercentage: '75'
  },
  scoreImprovement: {
    points: '201',
    readingAndWriting: '82',
    math: '119',
    noGain: '32',
    from0To50: '19',
    from50To99: '60',
    from100To149: '77',
    from150To199: '62',
    from200Plus: '91'
  },
  studentsWhoHave: {
    overdueCoursework: [{
      name: 'Bob Smith',
      overdueAssignments: '13'
    }, {
      name: 'John Joe',
      overdueAssignments: '5'
    }, {
      name: 'Tim Bob',
      overdueAssignments: '11'
    }, {
      name: 'Chris Smith',
      overdueAssignments: '33'
    }, {
      name: 'Arnold Jackson',
      overdueAssignments: '7'
    }, {
      name: 'Alfred Fredson',
      overdueAssignments: '2'
    }, {
      name: 'Fred Hampton',
      overdueAssignments: '8'
    }, {
      name: 'Jeff Smith',
      overdueAssignments: '3'
    }],
    flaggedProblems: [{
      name: 'Tim Bob',
      flaggedProblems: '11'
    }, {
      name: 'Chris Smith',
      flaggedProblems: '33'
    }, {
      name: 'Arnold Jackson',
      flaggedProblems: '7'
    }, {
      name: 'Alfred Fredson',
      flaggedProblems: '2'
    }],
    fewerThan2PracticeTests: [{
      name: 'Alfred Fredson',
      fewerThan2PracticeTests: '2'
    }, {
      name: 'Fred Hampton',
      fewerThan2PracticeTests: '8'
    }, {
      name: 'Jeff Smith',
      fewerThan2PracticeTests: '3'
    }]
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
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sampleClass);

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sticky */ "react-sticky");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Class_components_ClassNavBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Class/components/ClassNavBar */ "./components/Class/components/ClassNavBar/index.js");
/* harmony import */ var _components_Class_TestSectionsPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Class/TestSectionsPage */ "./components/Class/TestSectionsPage/index.js");
/* harmony import */ var _components_Class_DetailSummaryPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Class/DetailSummaryPage */ "./components/Class/DetailSummaryPage/index.js");
/* harmony import */ var _components_Class_DetailWorksheetPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Class/DetailWorksheetPage */ "./components/Class/DetailWorksheetPage/index.js");
/* harmony import */ var _components_Class_utils_sampleClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Class/utils/sampleClass */ "./components/Class/utils/sampleClass.js");
















var Classes =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Classes, _Component);

  function Classes(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Classes);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Classes).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSetActivePage", function (active) {
      return _this.setState({
        active: active
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderCurrentPage", function () {
      var active = _this.state.active;

      if (active === 'summary') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Class_DetailSummaryPage__WEBPACK_IMPORTED_MODULE_12__["default"], {
          currentClass: _components_Class_utils_sampleClass__WEBPACK_IMPORTED_MODULE_14__["default"]
        });
      }

      if (active === 'testSections') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Class_TestSectionsPage__WEBPACK_IMPORTED_MODULE_11__["default"], null);
      }

      if (active === 'worksheets') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Class_DetailWorksheetPage__WEBPACK_IMPORTED_MODULE_13__["default"], null);
      }

      return null;
    });

    _this.state = {
      active: 'summary'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Classes, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var active = this.state.active;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "main-holder grey lighten-5 switcher-section"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_9__["StickyContainer"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_9__["Sticky"], null, function (_ref) {
        var style = _ref.style;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "title-row card-panel",
          style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
            zIndex: 1999
          })
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
          href: "#!",
          className: "breadcrumb"
        }, "< Classes"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "h1 white-text"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "heading-holder"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "icon-members"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "heading-block"
        }, "Some Class in June"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Class_components_ClassNavBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onSetActivePage: _this2.onSetActivePage,
          active: active
        }));
      }), this.renderCurrentPage(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "add-btn-block dropdown-small"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger waves-effect waves-teal btn add-btn",
        "data-target": "dropdown_assign_selected"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), " Assign Test Section"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "dropdown_assign_selected",
        className: "dropdown-content dropdown-small"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, "From Saved")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, "Create New"))))))));
    }
  }]);

  return Classes;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Classes);

/***/ }),

/***/ "./utils/formatTimeEstimate.js":
/*!*************************************!*\
  !*** ./utils/formatTimeEstimate.js ***!
  \*************************************/
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

/***/ "./utils/worksheetSortOptions.js":
/*!***************************************!*\
  !*** ./utils/worksheetSortOptions.js ***!
  \***************************************/
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

/***/ 7:
/*!********************************!*\
  !*** multi ./pages/classes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/pages/classes.js */"./pages/classes.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

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

/***/ "react-sticky":
/*!*******************************!*\
  !*** external "react-sticky" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

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