webpackHotUpdate("static/development/pages/students.js",{

/***/ "./components/Student/DetailTestScorePage/index.js":
/*!*********************************************************!*\
  !*** ./components/Student/DetailTestScorePage/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_TotalScoreCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/TotalScoreCard */ "./components/Student/DetailTestScorePage/components/TotalScoreCard/index.js");
/* harmony import */ var _components_SectionScoreCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/SectionScoreCard */ "./components/Student/DetailTestScorePage/components/SectionScoreCard/index.js");
/* harmony import */ var _components_TestScoreCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/TestScoreCard */ "./components/Student/DetailTestScorePage/components/TestScoreCard/index.js");
/* harmony import */ var _components_EssayScoresCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/EssayScoresCard */ "./components/Student/DetailTestScorePage/components/EssayScoresCard/index.js");
/* harmony import */ var _components_CrossTestScoresCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/CrossTestScoresCard */ "./components/Student/DetailTestScorePage/components/CrossTestScoresCard/index.js");
/* harmony import */ var _components_SubscoresCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/SubscoresCard */ "./components/Student/DetailTestScorePage/components/SubscoresCard/index.js");
/* harmony import */ var _index_selectors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../index/selectors */ "./components/Student/index/selectors.js");
/* harmony import */ var _index_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../index/actions */ "./components/Student/index/actions.js");
/* harmony import */ var _index_api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../index/api */ "./components/Student/index/api.js");










var _jsxFileName = "/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/components/Student/DetailTestScorePage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;















var DetailTestScorePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(DetailTestScorePage, _React$Component);

  function DetailTestScorePage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DetailTestScorePage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(DetailTestScorePage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "componentDidMount", function () {
      _this.props.onRef(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "delay", function () {
      var _this$props = _this.props,
          scores = _this$props.scores,
          student_test_id = _this$props.test.student_test_id,
          onGetTestScores = _this$props.onGetTestScores,
          id = _this$props.activeStudent.id;
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function _callee(resolve) {
        var postBody;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!scores) {
                  postBody = {
                    studentId: id,
                    student_test_id: student_test_id
                  };
                  onGetTestScores(postBody);
                }

                resolve();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getComponentImages", function () {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
        _this.delay().then(function () {
          setTimeout(function _callee2() {
            var getTargetImage, _ref, _ref2, scoresImages;

            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    getTargetImage = _this.props.getTargetImage;
                    _context2.next = 3;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all([getTargetImage(document.getElementById('scoresRef'))]));

                  case 3:
                    _ref = _context2.sent;
                    _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1);
                    scoresImages = _ref2[0];
                    resolve(scoresImages);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          }, 5000);
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "loadingSpinner", function () {
      return __jsx("div", {
        className: "overlay-spinning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Fetching Scores..."), __jsx("div", {
        className: "spinning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DetailTestScorePage, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onRef(undefined);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          scores = _this$props2.scores,
          test = _this$props2.test;

      if (!scores) {
        return this.loadingSpinner();
      }

      if (scores.student_test_id !== test.student_test_id) {
        return this.loadingSpinner();
      }

      var subjects = scores.subjects,
          cross_test_score = scores.cross_test_score,
          sub_section_score = scores.sub_section_score,
          essay = scores.essay;
      return __jsx("div", {
        className: "container",
        id: "scoresRef",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "cards-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "d-flex-content same-height justify-center row mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(_components_TotalScoreCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subjectScores: subjects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), __jsx("div", {
        className: "d-flex-content same-height justify-center row mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(_components_TestScoreCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
        subjectScores: subjects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx(_components_EssayScoresCard__WEBPACK_IMPORTED_MODULE_18__["default"], {
        essayScores: essay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), __jsx("div", {
        className: "d-flex-content justify-center row mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_components_CrossTestScoresCard__WEBPACK_IMPORTED_MODULE_19__["default"], {
        crossTestScores: cross_test_score,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), __jsx(_components_SubscoresCard__WEBPACK_IMPORTED_MODULE_20__["default"], {
        subScores: sub_section_score,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }))));
    }
  }]);

  return DetailTestScorePage;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

DetailTestScorePage.propTypes = {
  getTargetImage: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  test: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
};
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_13__["createStructuredSelector"])({
  scores: Object(_index_selectors__WEBPACK_IMPORTED_MODULE_21__["makeSelectActiveTestScores"])(),
  activeStudent: Object(_index_selectors__WEBPACK_IMPORTED_MODULE_21__["makeSelectActiveStudent"])()
});

function mapDispatchToProps(dispatch) {
  return {
    onSetScores: function onSetScores(scores) {
      return dispatch(Object(_index_actions__WEBPACK_IMPORTED_MODULE_22__["setActiveTestScores"])(scores));
    }
  };
}

var withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_14__["compose"])(withConnect)(DetailTestScorePage));

/***/ })

})
//# sourceMappingURL=students.js.0b42eaf5056b39cf9004.hot-update.js.map