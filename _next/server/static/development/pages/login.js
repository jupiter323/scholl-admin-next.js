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

/***/ "./components/User/index/actions.js":
/*!******************************************!*\
  !*** ./components/User/index/actions.js ***!
  \******************************************/
/*! exports provided: setUserIsLogged, getCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserIsLogged", function() { return setUserIsLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/User/index/constants.js");

function setUserIsLogged(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_USER_IS_LOGGED"],
    value
  };
}
function getCurrentUser() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_CURRENT_USER"]
  };
}

/***/ }),

/***/ "./components/User/index/api.js":
/*!**************************************!*\
  !*** ./components/User/index/api.js ***!
  \**************************************/
/*! exports provided: _checkStatus, oAuthTokenApi, fetchCurrentUserApi, LogoutApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_checkStatus", function() { return _checkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oAuthTokenApi", function() { return oAuthTokenApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUserApi", function() { return fetchCurrentUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutApi", function() { return LogoutApi; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/AuthService */ "./utils/AuthService.js");

const API_URL = "http://18.236.213.121";

const _checkStatus = response => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};
const oAuthTokenApi = data => fetch(`${API_URL}/api/login`, {
  method: 'POST',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
}).then(response => response.json()).then(data => data).catch(err => err);
const fetchCurrentUserApi = () => fetch(`${API_URL}/api/users`, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => data).catch(err => err);
const LogoutApi = () => fetch(`${API_URL}/api/logout`, {
  method: 'POST',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(_checkStatus).then(response => response.json()).then(data => data).catch(err => err);
/* harmony default export */ __webpack_exports__["default"] = ([oAuthTokenApi, fetchCurrentUserApi, LogoutApi]);

/***/ }),

/***/ "./components/User/index/constants.js":
/*!********************************************!*\
  !*** ./components/User/index/constants.js ***!
  \********************************************/
/*! exports provided: SET_USER_IS_LOGGED, SET_CURRENT_USER, FETCH_CURRENT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_IS_LOGGED", function() { return SET_USER_IS_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CURRENT_USER", function() { return FETCH_CURRENT_USER; });
const SET_USER_IS_LOGGED = 'SET_USER_IS_LOGGED';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

/***/ }),

/***/ "./components/User/index/selectors.js":
/*!********************************************!*\
  !*** ./components/User/index/selectors.js ***!
  \********************************************/
/*! exports provided: default, makeSelectUserPageState, makeSelectUserIsLogged, makeSelectCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectUserPageState", function() { return makeSelectUserPageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectUserIsLogged", function() { return makeSelectUserIsLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectCurrentUser", function() { return makeSelectCurrentUser; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


const selectUserDomain = state => state.userReducer;

const makeSelectUserPageState = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserDomain, substate => substate ? substate.toJS() : {});

const makeSelectUserIsLogged = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(makeSelectUserPageState(), substate => substate.isLogged);

const makeSelectCurrentUser = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(makeSelectUserPageState(), substate => substate.user);

/* harmony default export */ __webpack_exports__["default"] = (selectUserDomain);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/AuthService */ "./utils/AuthService.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_User_index_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/User/index/actions */ "./components/User/index/actions.js");
/* harmony import */ var _components_User_index_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/User/index/selectors */ "./components/User/index/selectors.js");

var _jsxFileName = "/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










class Login extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSubmit", async event => {
      event.preventDefault();
      const {
        email,
        password
      } = this.state;
      const postBody = {
        email,
        password
      };
      const data = await Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_7__["logIn"])(postBody);

      if (data.token && data.expires_at) {
        Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_7__["setToken"])(data.token, data.expires_at);
        const {
          onFetchCurrentUser
        } = this.props;
        onFetchCurrentUser();
      } else {
        this.setState({
          loginError: true
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentWillReceiveProps", nextProps => {
      const {
        onSetUserIsLogged
      } = this.props;
      const {
        currentUser
      } = nextProps;

      if (currentUser && currentUser.type === "INSTRUCTOR") {
        onSetUserIsLogged(true);
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/dashboard");
      } else {
        onSetUserIsLogged(false);
        this.setState({
          loginError: true
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChangeForm", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleForgotPassword", () => {
      console.log('this.recoverEmail', this.state.recoverEmail);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetForgotPassword", () => {
      this.setState({
        forgotPassword: true
      });
    });

    this.state = {
      email: "",
      password: "",
      forgotPassword: false,
      loginError: false,
      recoverEmail: ""
    };
  }

  componentDidMount() {
    if (Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_7__["loggedIn"])()) {
      Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_7__["logout"])();
      const {
        onSetUserIsLogged
      } = this.props;
      onSetUserIsLogged(false);
    }

    this.textFieldForUserEmailRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.textFieldForPasswordRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.chkRememberRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.buttonForLoginRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  }

  render() {
    const {
      email,
      password,
      forgotPassword,
      loginError,
      recoverEmail
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "wrapper forgot_account_number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "container-fluid clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "rightsec padleft clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "boxgroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "choicelogo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("img", {
      src: "./static/images/choice_logo_big.png",
      alt: "",
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }))), forgotPassword ? __jsx("div", {
      className: "jsx-1531380744" + " " + "forgot_account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "discrption",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("h5", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Forgot Account Number"), __jsx("p", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "If you\u2019ve lost or forgotten your Account Number, we can sendt it to your email address. To receive your Account Number by email, enter your email address below and click \u201CSend Account Number\u201D.")), __jsx("div", {
      className: "jsx-1531380744" + " " + "formsec",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("ul", {
      className: "jsx-1531380744" + " " + "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "input-field input-field-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("input", {
      type: "email",
      name: "recoverEmail",
      placeholder: "Enter your Email Addres",
      value: recoverEmail,
      onChange: this.handleChangeForm,
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1531380744" + " " + "input-icon icon-letter2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }))), __jsx("li", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("button", {
      onClick: this.handleForgotPassword,
      className: "jsx-1531380744" + " " + "btn waves-effect read",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Send Account Number"))))) : __jsx("div", {
      className: "jsx-1531380744" + " " + "forgot_account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "discrption",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, loginError ? __jsx("h5", {
      style: {
        color: 'red'
      },
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Please Enter valid email and password") : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h5", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Please Enter your email and password"), __jsx("p", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "For security purposes, you need to enter a current your email and password for this account."))), __jsx("div", {
      className: "jsx-1531380744" + " " + "formsec",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("ul", {
      className: "jsx-1531380744" + " " + "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "input-field input-field-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      name: "email",
      placeholder: "email",
      value: email,
      onChange: this.handleChangeForm,
      autoFocus: true,
      ref: this.textFieldForUserEmailRef,
      onKeyPress: event => {
        if (event.key === "Enter") {
          this.textFieldForPasswordRef.current.focus();
        }
      },
      className: "jsx-1531380744" + " " + "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1531380744" + " " + "input-icon icon-letter2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }))), __jsx("li", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "input-field input-field-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("input", {
      type: "password",
      name: "password",
      placeholder: "password",
      value: password,
      onChange: this.handleChangeForm,
      autoFocus: true,
      ref: this.textFieldForPasswordRef,
      onKeyPress: event => {
        if (event.key === "Enter") {
          this.chkRememberRef.current.focus();
        }
      },
      className: "jsx-1531380744" + " " + "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1531380744" + " " + "input-icon icon-key",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }))), __jsx("div", {
      style: {
        marginBottom: 20
      },
      className: "jsx-1531380744" + " " + "course-context_two-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("div", {
      style: {
        textAlign: 'left',
        paddingLeft: 20
      },
      className: "jsx-1531380744" + " " + "checkbox-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1531380744" + " " + "checkbox-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("label", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("input", {
      type: "checkbox",
      name: "chk_remember",
      id: "chk_remember",
      value: true,
      autoFocus: true,
      ref: this.chkRememberRef,
      onKeyPress: event => {
        if (event.key === "Enter") {
          this.buttonForLoginRef.current.click();
        }
      },
      className: "jsx-1531380744" + " " + "filled-in",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1531380744" + " " + "large-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "Remember Me"))))), __jsx("div", {
      style: {
        textAlign: "right",
        width: '100%',
        paddingRight: 20
      },
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("a", {
      onClick: this.onSetForgotPassword,
      style: {
        cursor: 'pointer'
      },
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "Forgot Password?"))), __jsx("li", {
      className: "jsx-1531380744",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, __jsx("button", {
      onClick: this.handleSubmit,
      ref: this.buttonForLoginRef,
      className: "jsx-1531380744" + " " + "btn waves-effect read",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "LogIn"))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1531380744",
      __self: this
    }, ".container-fluid.jsx-1531380744{width:100%;padding:0 15px;margin-right:auto;margin-left:auto;}.clearfix.jsx-1531380744{clear:both;}.wrapper.jsx-1531380744{margin:0 auto;height:auto;overflow:auto;}.forgot_account_number.jsx-1531380744{height:100vh !important;background-image:url(./static/images/forgot_account_numberbg.png);background-position:top center;background-repeat:no-repeat;background-size:cover;background-color:#181a1a;}.forgot_account_number.jsx-1531380744 .rightsec.padleft.jsx-1531380744{padding-left:0;text-align:center;}.forgot_account_number.jsx-1531380744 .rightsec.jsx-1531380744{text-align:center;}.padleft.jsx-1531380744{padding-left:255px;}.rightsec.jsx-1531380744{width:100%;height:auto;padding-top:130px;}.clearfix.jsx-1531380744{clear:both;}.choicelogo.jsx-1531380744{margin-bottom:55px;}.forgot_account_number.jsx-1531380744 .rightsec.jsx-1531380744 .boxgroup.jsx-1531380744{padding:0;max-width:554px;width:100%;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;}.boxgroup.jsx-1531380744{padding:0 20px 0 30px;text-align:center;}.forgot_account.jsx-1531380744{background-color:#ffffff;width:100%;height:auto;box-shadow:0 0 3px rgba(0,0,0,0.35);margin-bottom:30px;position:relative;border-radius:7px;-webkit-border-radius:7px;-moz-border-radius:7px;-ms-border-radius:7px;-o-border-radius:7px;padding:30px;}.discrption.jsx-1531380744{margin-bottom:35px;width:100%;}.forgot_account.jsx-1531380744 h5.jsx-1531380744{font-weight:normal;margin-bottom:15px;}h5.jsx-1531380744{font-size:24px;font-family:\"Raleway\",sans-serif;color:#252525;}.forgot_account.jsx-1531380744 p.jsx-1531380744{color:#959595;}p.jsx-1531380744{font-size:14px;font-family:\"Raleway\",sans-serif;color:#484949;line-height:25px;}.formsec.jsx-1531380744{width:100%;}.formsec.jsx-1531380744 ul.jsx-1531380744{margin:0;padding:0;list-style:none;}.forgot_account.jsx-1531380744 .formsec.jsx-1531380744 ul.jsx-1531380744 li.jsx-1531380744{margin-bottom:27px;}.forgot_account.jsx-1531380744 .formsec.jsx-1531380744 .read.jsx-1531380744{max-width:100%;}.read.jsx-1531380744,.see_more.jsx-1531380744{line-height:inherit;text-transform:none;}.read.jsx-1531380744{font-size:16px;color:#1ca609;display:inline-block;vertical-align:top;font-weight:bold;padding:5px 15px;border:1px solid transparent;margin:0 auto;max-width:170px;width:100%;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;background-color:#00bbf7;color:#ffffff;font-size:14px;border:1px solid transparent;}.forgot_account.jsx-1531380744 .formsec.jsx-1531380744 ul.jsx-1531380744 li.jsx-1531380744 input.jsx-1531380744{height:inherit;padding-top:10px;padding-bottom:10px;}.formsec.jsx-1531380744 ul.jsx-1531380744 li.jsx-1531380744 input[type=\"text\"].jsx-1531380744{height:2rem;margin-bottom:0;font-family:\"Raleway\",sans-serif;font-size:14px;}.formsec.jsx-1531380744 ul.jsx-1531380744 li.jsx-1531380744 input[type=\"password\"].jsx-1531380744{height:2rem;margin-bottom:0;font-family:\"Raleway\",sans-serif;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93b2xmL0RvY3VtZW50cy9jbGVhcmNob2ljZS9hZG1pbi9mZWF0dXJlLXZpZXctdXBkYXRlZC1jb3Vyc2UvY2xlYXItY2hvaWNlLWFkbWluL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVOVyxBQUcwQixBQU1BLEFBR0csQUFLVSxBQVFULEFBS0csQUFHQyxBQUdSLEFBS0EsQUFHUSxBQUdULEFBU1ksQUFJRyxBQWNOLEFBSUEsQUFLSixBQUtELEFBR0MsQUFNSixBQUdGLEFBS1UsQUFHSixBQUlLLEFBSUwsQUFzQkEsQUFNSCxBQU1BLFNBakRGLENBckRNLENBNUNELEFBTWpCLEFBMkJjLEFBS2QsQUF3REEsQ0ErQ2tCLEFBTUEsRUExSUosQUE0RWQsQ0EvRG9CLEFBMERnQixBQVFBLEFBaUJwQyxBQVFnQixBQXNCRyxHQTVHbkIsQ0FHQSxBQVdBLEFBOEJhLEFBSVEsQUF1QkgsQUFJbEIsQ0FPc0IsRUF4REYsQ0FuQkEsQ0FwQmdELENBMkN2RCxDQXhETyxBQVNKLEFBbUNILEVBaUd1QixBQU1BLENBbENiLENBMUN2QixFQWdFc0IsQ0FqSHRCLEVBNEVBLENBekNjLENBWkssQ0E4Qm5CLEVBakVBLEFBMkNBLEFBd0RBLENBM0VBLEdBakNtQixJQXlEc0IsQUFzQnpCLEFBUUEsRUEwQkssRUFzQnJCLEVBMUZvQixPQTVDcEIsQUE0SWlCLEFBTUEsQ0FuRWpCLEFBUW1CLE9BMEJBLEdBcEVELElBZ0dsQixBQU1BLEdBM0RBLEtBL0JxQixFQXlERixFQXBFRSxFQWxDWSxhQThDYixBQXlEVyxJQXBFL0IsY0FsQzhCLEFBOENWLFdBeURKLE9BeERZLE9BeURWLEdBdkdNLGFBd0dYLEdBekRZLE1BOUNFLEVBd0dQLGVBekRJLEdBMERKLEtBeEdwQixhQXlHNEIsQ0ExREwscUJBQ1IsSUEwRFUsU0F6RHpCLGNBMER3QixzQkFDRCxxQkFDSSx5QkFDWCxjQUNDLGVBQ2MsNkJBQy9CIiwiZmlsZSI6Ii9Vc2Vycy93b2xmL0RvY3VtZW50cy9jbGVhcmNob2ljZS9hZG1pbi9mZWF0dXJlLXZpZXctdXBkYXRlZC1jb3Vyc2UvY2xlYXItY2hvaWNlLWFkbWluL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBsb2dJbiwgbG9nZ2VkSW4sIGxvZ291dCwgc2V0VG9rZW4gfSBmcm9tIFwiLi4vdXRpbHMvQXV0aFNlcnZpY2VcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBzZXRVc2VySXNMb2dnZWQsIGdldEN1cnJlbnRVc2VyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlci9pbmRleC9hY3Rpb25zXCI7XG5pbXBvcnQgeyBtYWtlU2VsZWN0Q3VycmVudFVzZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyL2luZGV4L3NlbGVjdG9yc1wiO1xuXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBmb3Jnb3RQYXNzd29yZDogZmFsc2UsXG4gICAgICBsb2dpbkVycm9yOiBmYWxzZSxcbiAgICAgIHJlY292ZXJFbWFpbDogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGxvZ2dlZEluKCkpIHtcbiAgICAgIGxvZ291dCgpO1xuICAgICAgY29uc3QgeyBvblNldFVzZXJJc0xvZ2dlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIG9uU2V0VXNlcklzTG9nZ2VkKGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy50ZXh0RmllbGRGb3JVc2VyRW1haWxSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnRleHRGaWVsZEZvclBhc3N3b3JkUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5jaGtSZW1lbWJlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuYnV0dG9uRm9yTG9naW5SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHBvc3RCb2R5ID0ge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICB9O1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2dJbihwb3N0Qm9keSk7XG4gICAgaWYgKGRhdGEudG9rZW4gJiYgZGF0YS5leHBpcmVzX2F0KSB7XG4gICAgICBzZXRUb2tlbihkYXRhLnRva2VuLCBkYXRhLmV4cGlyZXNfYXQpO1xuICAgICAgY29uc3QgeyBvbkZldGNoQ3VycmVudFVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICBvbkZldGNoQ3VycmVudFVzZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvZ2luRXJyb3I6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG9uU2V0VXNlcklzTG9nZ2VkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IG5leHRQcm9wcztcbiAgICBpZiAoY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIudHlwZSA9PT0gXCJJTlNUUlVDVE9SXCIpIHtcbiAgICAgIG9uU2V0VXNlcklzTG9nZ2VkKHRydWUpO1xuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblNldFVzZXJJc0xvZ2dlZChmYWxzZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9naW5FcnJvcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgaGFuZGxlQ2hhbmdlRm9ybSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVGb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygndGhpcy5yZWNvdmVyRW1haWwnLCB0aGlzLnN0YXRlLnJlY292ZXJFbWFpbCk7XG4gIH1cbiAgb25TZXRGb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcmdvdFBhc3N3b3JkOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBmb3Jnb3RQYXNzd29yZCwgbG9naW5FcnJvciwgcmVjb3ZlckVtYWlsIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyIGZvcmdvdF9hY2NvdW50X251bWJlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNsZWFyZml4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0c2VjIHBhZGxlZnQgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hncm91cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hvaWNlbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvY2hvaWNlX2xvZ29fYmlnLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENob29zZT5cbiAgICAgICAgICAgICAgICAgIDxXaGVuIGNvbmRpdGlvbj17Zm9yZ290UGFzc3dvcmR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdvdF9hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjcnB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Rm9yZ290IEFjY291bnQgTnVtYmVyPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdeKAmXZlIGxvc3Qgb3IgZm9yZ290dGVuIHlvdXIgQWNjb3VudCBOdW1iZXIsIHdlIGNhbiBzZW5kdCBpdCB0byB5b3VyIGVtYWlsIGFkZHJlc3MuIFRvIHJlY2VpdmUgeW91ciBBY2NvdW50IE51bWJlciBieSBlbWFpbCwgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzIGJlbG93IGFuZCBjbGljayDigJxTZW5kIEFjY291bnQgTnVtYmVy4oCdLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1zZWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBpbnB1dC1maWVsZC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cInJlY292ZXJFbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBFbWFpbCBBZGRyZXNcIiB2YWx1ZT17cmVjb3ZlckVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VGb3JtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvbiBpY29uLWxldHRlcjJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3QgcmVhZFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9yZ290UGFzc3dvcmR9PlNlbmQgQWNjb3VudCBOdW1iZXI8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1doZW4+XG4gICAgICAgICAgICAgICAgICA8T3RoZXJ3aXNlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdvdF9hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjcnB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9naW5FcnJvciA/IDxoNSBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+UGxlYXNlIEVudGVyIHZhbGlkIGVtYWlsIGFuZCBwYXNzd29yZDwvaDU+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UGxlYXNlIEVudGVyIHlvdXIgZW1haWwgYW5kIHBhc3N3b3JkPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBzZWN1cml0eSBwdXJwb3NlcywgeW91IG5lZWQgdG8gZW50ZXIgYSBjdXJyZW50IHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsIGFuZCBwYXNzd29yZCBmb3IgdGhpcyBhY2NvdW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD48Lz59XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtc2VjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgaW5wdXQtZmllbGQtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnRleHRGaWVsZEZvclVzZXJFbWFpbFJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGRGb3JQYXNzd29yZFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWljb24gaWNvbi1sZXR0ZXIyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBpbnB1dC1maWVsZC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnRleHRGaWVsZEZvclBhc3N3b3JkUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoa1JlbWVtYmVyUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvbiBpY29uLWtleVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2UtY29udGV4dF90d28tY29sXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1ibG9ja1wiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBwYWRkaW5nTGVmdDogMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGxlZC1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGtfcmVtZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNoa19yZW1lbWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuY2hrUmVtZW1iZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uRm9yTG9naW5SZWYuY3VycmVudC5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhcmdlLWxhYmVsXCI+UmVtZW1iZXIgTWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmdSaWdodDogMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLm9uU2V0Rm9yZ290UGFzc3dvcmR9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PkZvcmdvdCBQYXNzd29yZD88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3QgcmVhZFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSByZWY9e3RoaXMuYnV0dG9uRm9yTG9naW5SZWZ9PkxvZ0luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvT3RoZXJ3aXNlPlxuICAgICAgICAgICAgICAgIDwvQ2hvb3NlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xlYXJmaXgge1xuICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yZ290X2FjY291bnRfbnVtYmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zdGF0aWMvaW1hZ2VzL2ZvcmdvdF9hY2NvdW50X251bWJlcmJnLnBuZyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yZ290X2FjY291bnRfbnVtYmVyIC5yaWdodHNlYy5wYWRsZWZ0IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3Jnb3RfYWNjb3VudF9udW1iZXIgLnJpZ2h0c2VjIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZGxlZnQge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0c2VjIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsZWFyZml4IHtcbiAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hvaWNlbG9nbyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9yZ290X2FjY291bnRfbnVtYmVyIC5yaWdodHNlYyAuYm94Z3JvdXAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1NHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3hncm91cCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAwIDMwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3Jnb3RfYWNjb3VudCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpc2NycHRpb24ge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3Jnb3RfYWNjb3VudCBoNSB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjUyNTI1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcmdvdF9hY2NvdW50IHAge1xuICAgICAgICAgICAgICBjb2xvcjogIzk1OTU5NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICM0ODQ5NDk7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1zZWMge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3Jtc2VjIHVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcmdvdF9hY2NvdW50IC5mb3Jtc2VjIHVsIGxpIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3Jnb3RfYWNjb3VudCAuZm9ybXNlYyAucmVhZCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWFkLFxuICAgICAgICAgICAgLnNlZV9tb3JlIHtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlYWQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMWNhNjA5O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiYmY3O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3Jnb3RfYWNjb3VudCAuZm9ybXNlYyB1bCBsaSBpbnB1dCB7XG4gICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybXNlYyB1bCBsaSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybXNlYyB1bCBsaSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuTG9naW4ucHJvcFR5cGVzID0ge1xuICBvblNldFVzZXJJc0xvZ2dlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3Rvcih7XG4gIGN1cnJlbnRVc2VyOiBtYWtlU2VsZWN0Q3VycmVudFVzZXIoKSxcbn0pO1xuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBvblNldFVzZXJJc0xvZ2dlZDogdmFsdWUgPT4gZGlzcGF0Y2goc2V0VXNlcklzTG9nZ2VkKHZhbHVlKSksXG4gICAgb25GZXRjaEN1cnJlbnRVc2VyOiAoKSA9PiBkaXNwYXRjaChnZXRDdXJyZW50VXNlcigpKSxcbiAgfTtcbn1cblxuY29uc3Qgd2l0aENvbm5lY3QgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh3aXRoQ29ubmVjdCkoTG9naW4pO1xuIl19 */\n/*@ sourceURL=/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/pages/login.js */"));
  }

}

Login.propTypes = {
  onSetUserIsLogged: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_5__["createStructuredSelector"])({
  currentUser: Object(_components_User_index_selectors__WEBPACK_IMPORTED_MODULE_10__["makeSelectCurrentUser"])()
});

function mapDispatchToProps(dispatch) {
  return {
    onSetUserIsLogged: value => dispatch(Object(_components_User_index_actions__WEBPACK_IMPORTED_MODULE_9__["setUserIsLogged"])(value)),
    onFetchCurrentUser: () => dispatch(Object(_components_User_index_actions__WEBPACK_IMPORTED_MODULE_9__["getCurrentUser"])())
  };
}

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(withConnect)(Login));

/***/ }),

/***/ "./utils/AuthService.js":
/*!******************************!*\
  !*** ./utils/AuthService.js ***!
  \******************************/
/*! exports provided: logIn, loggedIn, setToken, getToken, logout, isTokenExpired, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedIn", function() { return loggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTokenExpired", function() { return isTokenExpired; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_User_index_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/User/index/api */ "./components/User/index/api.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



const logIn = async postBody => {
  const data = await Object(_components_User_index_api__WEBPACK_IMPORTED_MODULE_1__["oAuthTokenApi"])(postBody);
  return data;
};
const loggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = getToken();
  return !!token && !isTokenExpired(token); // handwaiving here
};
const setToken = (token, expires_at) => {
  // Saves user token to sessionStorage
  localStorage.setItem('token', token);
  localStorage.setItem('expires_at', expires_at);
};
const getToken = () => {
  // Retrieves the user token from sessionStorage
  if (false) {}
};
const logout = () => {
  // Clear user token from sessionStorage
  localStorage.removeItem('token');
  localStorage.removeItem('expires_at');
};
const isTokenExpired = token => {
  try {
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);

    if (decoded.exp < _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() / 1000) {
      // Checking if token is expired.
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([loggedIn, setToken, getToken, logout]);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

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
//# sourceMappingURL=login.js.map