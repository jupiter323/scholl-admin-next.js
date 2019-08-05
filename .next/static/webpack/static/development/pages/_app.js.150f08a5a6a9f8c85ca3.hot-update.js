webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Core/SideNav.js":
/*!************************************!*\
  !*** ./components/Core/SideNav.js ***!
  \************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);






/* eslint-disable jsx-a11y/img-redundant-alt */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */





if (true) {
  window.$ = jquery__WEBPACK_IMPORTED_MODULE_8___default.a;
  window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_8___default.a; // eslint-disable-next-line global-require

  __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
}

var menuItems = [{
  key: 'dashboard',
  page: 'dashboard'
}, {
  key: 'students',
  page: 'students'
}, {
  key: 'instructors',
  page: 'all-instructors'
}, {
  key: 'classes',
  page: 'classes'
}, {
  key: 'locations',
  page: 'all-locations'
}, {
  key: 'worksheets',
  page: 'worksheets'
}, {
  key: 'course templates',
  page: 'courseTemplates'
}, {
  key: 'help',
  page: 'help'
}];
var menuIconMap = {
  'dashboard': 'icon-speed',
  'students': 'icon-student',
  'instructors': 'icon-instructors',
  'classes': 'icon-members',
  'locations': 'icon-location',
  'worksheets': 'icon-sheets-w',
  'course templates': 'icon-module',
  'help': 'icon-help'
};

var SideNav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SideNav, _Component);

  function SideNav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SideNav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SideNav).call(this, props));
    _this.props = props;
    _this.state = {
      active: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SideNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_8___default()('.sidenav').sidenav();
    }
  }, {
    key: "handleClick",
    value: function handleClick(menuItem) {
      this.setState({
        active: menuItem
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$user = this.props.user,
          firstName = _this$props$user.firstName,
          lastName = _this$props$user.lastName;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("aside", {
        id: "slide-out",
        className: "sidenav"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sidenav-holder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "white-text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/logo.jpg",
        alt: "image description"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, menuItems.map(function (menuItem) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: _this2.state.active === menuItem.key ? "active" : '',
          onClick: function onClick() {
            return _this2.handleClick(menuItem.key);
          },
          key: menuItem.key
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          rel: "prefetch",
          href: "/".concat(menuItem.page)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: menuIconMap[menuItem.key]
        }), menuItem.key.charAt(0).toUpperCase() + menuItem.key.slice(1))));
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "log-block white-text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "block white-text"
      }, "Log Out")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/account"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "block white-text"
      }, firstName, " ", lastName)))))));
    }
  }]);

  return SideNav;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

SideNav.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ })

})
//# sourceMappingURL=_app.js.150f08a5a6a9f8c85ca3.hot-update.js.map