webpackHotUpdate("static/development/pages/_app.js",{

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
  email: 'bob@smith.com',
  addressLine1: '4455 Main St',
  city: "Portland",
  state: "OR",
  zipCode: "98758",
  timeZone: "Pacific",
  avatarURL: "https://ichef.bbci.co.uk/news/320/media/images/82399000/jpg/_82399978_75952740.jpg"
}, {
  firstName: 'Jeff',
  lastName: 'Bezos',
  email: 'jeff-bezos@email.com',
  addressLine1: '1234 Test Lane',
  city: 'Austin',
  state: 'TX',
  zipCode: '78757',
  timeZone: "Central",
  avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGJC2sKaR6OTgnDzoPwpHdpmEMY2rM8CLT8DbStzvnwQPf51Z"
}, {
  firstName: 'Roger',
  lastName: 'Rabbit',
  email: 'roger-rabbit@email.com',
  addressLine1: '123 Baker Street',
  city: 'Paris',
  state: 'ID',
  zipCode: '88775',
  timeZone: "Mountain",
  avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1yFuZbX_ObFSnyaESvq_1a_CTqCLTMURXViN5RyrQvHUm814"
}, {
  firstName: 'Jack',
  lastName: 'InTheBox',
  email: 'jackinbox@email.com',
  addressLine1: '123 Baker Street',
  city: 'Paris',
  state: 'ID',
  zipCode: '88775',
  timeZone: "Mountain",
  avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vXjnr5RTywwY_6k8nOR7-Oz6B8ci4aNac-CGL9J3y3QRNLfo"
}, {
  firstName: 'John',
  lastName: 'Jackson',
  email: 'john-jackson@email.com',
  addressLine1: "7643 Some Lane",
  city: "Topeka",
  state: "KS",
  zipCode: "56788",
  timeZone: "Central",
  avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Mh-9HGP3BCegpacxN9MtJFDCtextZ6c9cVC4xdnsuA0WsJgp5A"
}, {
  firstName: 'Jennifer',
  lastName: 'Ownerson',
  email: 'jennifern@ownerson.com',
  addressLine1: "7643 Some Lane",
  city: "Kansas City",
  state: "KS",
  zipCode: "56788",
  timeZone: "Central",
  avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7O1-5ygT98zoHdS26QzqvClNlzTGqeP9fRIj-KTJKwI15QgSF"
}]);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/sampleInstructors */ "./components/utils/sampleInstructors.js");










var ClearChoice =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ClearChoice, _App);

  function ClearChoice() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClearChoice);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ClearChoice).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClearChoice, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, null)));
    }
  }]);

  return ClearChoice;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);

/* harmony default export */ __webpack_exports__["default"] = (ClearChoice);

/***/ })

})
//# sourceMappingURL=_app.js.34e9b50ac9cadd7baf97.hot-update.js.map