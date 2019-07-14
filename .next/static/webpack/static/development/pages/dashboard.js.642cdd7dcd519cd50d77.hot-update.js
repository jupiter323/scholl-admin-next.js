webpackHotUpdate("static/development/pages/dashboard.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=dashboard.js.642cdd7dcd519cd50d77.hot-update.js.map