webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Core_SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Core/SideNav */ "./components/Core/SideNav.js");
/* harmony import */ var _components_utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utils/sampleInstructors */ "./components/utils/sampleInstructors.js");










 // import Main from './Core/Main';

var theme = {
  grey: '#707070',
  lightGrey: '#959595',
  blue: '#01579b',
  darkBlue: '#01579b'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "x56gd0-0"
})([""]);
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "x56gd0-1"
})([""]); // eslint-disable-next-line react/prefer-stateless-function

var Page =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledPage, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Core_SideNav__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: _components_utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_10__["default"][0]
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Inner, null, this.props.children)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charSet: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

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

/***/ })

})
//# sourceMappingURL=_app.js.0a64abb65fba593b00e6.hot-update.js.map