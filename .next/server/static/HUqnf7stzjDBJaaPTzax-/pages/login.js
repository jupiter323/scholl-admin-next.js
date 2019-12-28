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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O2ls");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "O2ls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-1710752352" + " " + "wrapper forgot_account_number"
    }, __jsx("div", {
      className: "jsx-1710752352" + " " + "container-fluid clearfix"
    }, __jsx("div", {
      className: "jsx-1710752352" + " " + "rightsec padleft clearfix"
    }, __jsx("div", {
      className: "jsx-1710752352" + " " + "boxgroup"
    }, __jsx("div", {
      className: "jsx-1710752352" + " " + "choicelogo"
    }, __jsx("a", {
      href: "#",
      className: "jsx-1710752352"
    }, __jsx("img", {
      src: "./static/images/choice_logo_big.png",
      alt: "",
      className: "jsx-1710752352"
    }))), __jsx("div", {
      className: "jsx-1710752352" + " " + "forgot_account"
    }, __jsx("div", {
      className: "jsx-1710752352" + " " + "discrption"
    }, __jsx("h5", {
      className: "jsx-1710752352"
    }, "Please Enter your email and password"), __jsx("p", {
      className: "jsx-1710752352"
    }, "For security purposes, you need to enter a current your email and password for this account.")), __jsx("div", {
      className: "jsx-1710752352" + " " + "formsec"
    }, __jsx("ul", {
      className: "jsx-1710752352" + " " + "clearfix"
    }, __jsx("li", {
      className: "jsx-1710752352"
    }, __jsx("input", {
      type: "text",
      placeholder: "email",
      className: "jsx-1710752352"
    })), __jsx("li", {
      className: "jsx-1710752352"
    }, __jsx("input", {
      type: "text",
      placeholder: "password",
      className: "jsx-1710752352"
    })), __jsx("li", {
      style: {
        textAlign: "right"
      },
      className: "jsx-1710752352"
    }, __jsx("a", {
      className: "jsx-1710752352"
    }, "Forgot Password")), __jsx("li", {
      className: "jsx-1710752352"
    }, __jsx("button", {
      className: "jsx-1710752352" + " " + "btn waves-effect read"
    }, "LogIn"))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1710752352"
    }, [".container-fluid.jsx-1710752352{width:100%;padding:0 15px;margin-right:auto;margin-left:auto;}", ".clearfix.jsx-1710752352{clear:both;}", ".wrapper.jsx-1710752352{margin:0 auto;height:auto;overflow:auto;}", ".forgot_account_number.jsx-1710752352{height:100vh !important;background-image:url(./static/images/forgot_account_numberbg.png);background-position:top center;background-repeat:no-repeat;background-size:cover;background-color:#181a1a;}", ".forgot_account_number.jsx-1710752352 .rightsec.padleft.jsx-1710752352{padding-left:0;text-align:center;}", ".forgot_account_number.jsx-1710752352 .rightsec.jsx-1710752352{text-align:center;}", ".padleft.jsx-1710752352{padding-left:255px;}", ".rightsec.jsx-1710752352{width:100%;height:auto;padding-top:130px;}", ".clearfix.jsx-1710752352{clear:both;}", ".choicelogo.jsx-1710752352{margin-bottom:55px;}", ".forgot_account_number.jsx-1710752352 .rightsec.jsx-1710752352 .boxgroup.jsx-1710752352{padding:0;max-width:554px;width:100%;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;}", ".boxgroup.jsx-1710752352{padding:0 20px 0 30px;text-align:center;}", ".forgot_account.jsx-1710752352{background-color:#ffffff;width:100%;height:auto;box-shadow:0 0 3px rgba(0,0,0,0.35);margin-bottom:30px;position:relative;border-radius:7px;-webkit-border-radius:7px;-moz-border-radius:7px;-ms-border-radius:7px;-o-border-radius:7px;padding:30px;}", ".discrption.jsx-1710752352{margin-bottom:35px;width:100%;}", ".forgot_account.jsx-1710752352 h5.jsx-1710752352{font-weight:normal;margin-bottom:15px;}", "h5.jsx-1710752352{font-size:24px;font-family:\"Raleway\",sans-serif;color:#252525;}", ".forgot_account.jsx-1710752352 p.jsx-1710752352{color:#959595;}", "p.jsx-1710752352{font-size:14px;font-family:\"Raleway\",sans-serif;color:#484949;line-height:25px;}", ".formsec.jsx-1710752352{width:100%;}", ".formsec.jsx-1710752352 ul.jsx-1710752352{margin:0;padding:0;list-style:none;}", ".forgot_account.jsx-1710752352 .formsec.jsx-1710752352 ul.jsx-1710752352 li.jsx-1710752352{margin-bottom:27px;}", ".forgot_account.jsx-1710752352 .formsec.jsx-1710752352 .read.jsx-1710752352{max-width:100%;}", ".read.jsx-1710752352,.see_more.jsx-1710752352{line-height:inherit;text-transform:none;}", ".read.jsx-1710752352{font-size:16px;color:#1ca609;display:inline-block;vertical-align:top;font-weight:bold;padding:5px 15px;border:1px solid transparent;margin:0 auto;max-width:170px;width:100%;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;background-color:#00bbf7;color:#ffffff;font-size:14px;border:1px solid transparent;}", ".forgot_account.jsx-1710752352 .formsec.jsx-1710752352 ul.jsx-1710752352 li.jsx-1710752352 input.jsx-1710752352{height:inherit;padding-top:10px;padding-bottom:10px;}", ".formsec.jsx-1710752352 ul.jsx-1710752352 li.jsx-1710752352 input[type=\"text\"].jsx-1710752352{height:2rem;margin-bottom:0;font-family:\"Raleway\",sans-serif;font-size:14px;}"]));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });