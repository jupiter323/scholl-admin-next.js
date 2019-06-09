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

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/NWr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (getValueFromState);

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NKQE");


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4vSA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Rgyi");
/* harmony import */ var _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhPQ");





var ControlComponent = function ControlComponent(props) {
  var _props$selectProps = props.selectProps,
      placeholder = _props$selectProps.placeholder,
      label = _props$selectProps.label,
      className = _props$selectProps.className;
  var categoryCheck = label === 'Categories';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__[/* ControlWrapper */ "a"], {
    invalid: className,
    categoryCheck: categoryCheck
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__[/* DropdownStyles */ "a"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, categoryCheck ? 'Categories' : placeholder), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["components"].Control, props)));
};

/* harmony default export */ __webpack_exports__["a"] = (ControlComponent);

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EABn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ControlComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4vSA");
/* harmony import */ var _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhPQ");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Rgyi");






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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    className: className,
    valid: valid || !valid && value === {},
    padRight: padRight
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    onChange: function onChange(event) {
      return _onChange(event.value, dropdownKey, stateKey);
    },
    components: {
      Control: _styles_ControlComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
    },
    name: "categoryOptions",
    classNamePrefix: dropdownKey === 'difficulty' ? 'expanded-select' : 'select',
    placeholder: label,
    styles: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__[/* DropdownStyles */ "a"],
    isClearable: false,
    isSearchable: false,
    value: value,
    instanceId: "dropdown-select"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "NKQE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Class/components/ClassNavBar/index.js


var ClassNavBar_ClassNavBar = function ClassNavBar(_ref) {
  var active = _ref.active,
      onSetActivePage = _ref.onSetActivePage;
  return external_react_default.a.createElement("nav", {
    className: "nav-additional"
  }, external_react_default.a.createElement("ul", {
    className: "menu-additional js-flex-nav",
    "data-more-text": "More"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('summary');
    },
    className: active === 'summary' ? 'active' : ''
  }, "Summary")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('calendar');
    },
    className: active === 'calendar' ? 'active' : ''
  }, "Calendar")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('lessons');
    },
    className: active === 'lessons' ? 'active' : ''
  }, "Lessons")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('worksheets');
    },
    className: active === 'worksheets' ? 'active' : ''
  }, "Worksheets")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('testSections');
    },
    className: active === 'testSections' ? 'active' : ''
  }, "Test Sections")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('account');
    },
    className: active === 'account' ? 'active' : ''
  }, "Account"))));
};

/* harmony default export */ var components_ClassNavBar = (ClassNavBar_ClassNavBar);
// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Class/utils/sortOptions.js
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
/* harmony default export */ var sortOptions = (sortByOptions);
// CONCATENATED MODULE: ./components/Class/TestSectionsPage/components/FilterSection/index.js








/* eslint-disable jsx-a11y/no-static-element-interactions */





var FilterSection_FilterSection =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(FilterSection, _React$Component);

  function FilterSection(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FilterSection);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FilterSection).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleShowFilters", function () {
      return _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        testVersionFilter: ''
      }, _this.props.onClearFilters);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearchChange", function (_ref2) {
      var target = _ref2.target;
      return _this.setState({
        testVersionFilter: target.value
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "submitSearchFilter", function () {
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

  Object(createClass["a" /* default */])(FilterSection, [{
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
      return external_react_default.a.createElement("div", {
        className: "filter-form-holder"
      }, external_react_default.a.createElement("ul", {
        className: "collapsible expandable",
        style: {
          minHeight: '0'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "collapsible-body",
        style: open ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, external_react_default.a.createElement("div", {
        className: "filter-form_checkbox-list-holder justify-center"
      }, external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "reading",
        name: "reading",
        checked: subjectFilters.indexOf('reading') !== -1,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "reading"
      }, "Reading")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "writing",
        name: "writing",
        checked: subjectFilters.indexOf('writing') !== -1,
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "writing"
      }, "Writing")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "math",
        name: "math",
        checked: subjectFilters.indexOf('math') !== -1,
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          return handleFilterClick('subject', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "math"
      }, "Math"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "future",
        name: "future",
        checked: availableDateFilters.indexOf('future') !== -1,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return handleFilterClick('availableDate', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "future"
      }, "Future")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "available",
        name: "available",
        checked: availableDateFilters.indexOf('available') !== -1,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return handleFilterClick('availableDate', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "available"
      }, "Available")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "complete",
        name: "complete",
        checked: availableDateFilters.indexOf('complete') !== -1,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return handleFilterClick('availableDate', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "complete"
      }, "Complete"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "hasReviewFlags",
        name: "hasReviewFlags",
        checked: flagFilter,
        onChange: function onChange(_ref9) {
          var target = _ref9.target;
          return handleFilterClick('hasFlags', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "hasReviewFlags"
      }, "Has Review Flags"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueToday",
        name: "dueToday",
        checked: dueDateFilters.indexOf('dueToday') !== -1,
        onChange: function onChange(_ref10) {
          var target = _ref10.target;
          return handleFilterClick('dueDate', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueToday"
      }, "Due Today")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueNextSession",
        name: "dueNextSession",
        checked: dueDateFilters.indexOf('dueNextSession') !== -1,
        onChange: function onChange(_ref11) {
          var target = _ref11.target;
          return handleFilterClick('dueDate', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueNextSession"
      }, "Due By Next Session")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueThisWeek",
        name: "dueThisWeek",
        checked: dueDateFilters.indexOf('dueThisWeek') !== -1,
        onChange: function onChange(_ref12) {
          var target = _ref12.target;
          return handleFilterClick('dueDate', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueThisWeek"
      }, "Due this Week")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "overdue",
        name: "overdue",
        checked: dueDateFilters.indexOf('overdue') !== -1,
        onChange: function onChange(_ref13) {
          var target = _ref13.target;
          return handleFilterClick('dueDate', target.name);
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "overdue"
      }, "Overdue")))), external_react_default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m4"
      }, external_react_default.a.createElement("div", {
        className: "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "test_version_search",
        className: "input-control validate",
        value: testVersionFilter,
        onChange: this.handleSearchChange
      }), external_react_default.a.createElement("button", {
        type: "submit",
        onClick: this.submitSearchFilter,
        className: "search-button"
      }, external_react_default.a.createElement("i", {
        className: "icon-search"
      })), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "test_version_search"
      }, "Test Version"))))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12 xl7"
      }, external_react_default.a.createElement("div", {
        className: "input-field",
        style: {
          marginBottom: '10px',
          marginTop: '0'
        }
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(sort, sortOptions),
        onChange: onSetSort,
        options: sortOptions,
        label: "Sort By",
        stateKey: "sort",
        dropdownKey: "sort"
      }))))), external_react_default.a.createElement("div", {
        className: "col s12 l4 hide-on-med-and-down show-on-large"
      }, "\xA0"), external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "option-filters"
      }, external_react_default.a.createElement("div", {
        className: "option-item clear"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onClearFilters
      }, "Clear Filters")), external_react_default.a.createElement("div", {
        className: "option-item"
      }, external_react_default.a.createElement("span", {
        className: "collapsible-header",
        onClick: this.onToggleShowFilters
      }, external_react_default.a.createElement("span", {
        className: "open-text"
      }, open ? 'Hide Filters' : 'Open Filters')))))))));
    }
  }]);

  return FilterSection;
}(external_react_default.a.Component);

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// CONCATENATED MODULE: ./components/Class/utils/testSectionCardUtils.js
var testSectionCardUtils_data = function data(percentage, status) {
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
// CONCATENATED MODULE: ./components/Class/TestSectionsPage/components/TestSectionCard/index.js











var TestSectionCard_TestSectionCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(TestSectionCard, _React$Component);

  function TestSectionCard(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TestSectionCard);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TestSectionCard).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "viewTestSectionDetails", function () {
      return console.warn('Pending implementation of view test section details functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "dismissFlags", function () {
      return console.warn('Pending implementation of dismiss flags functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "resetTestSection", function () {
      return console.warn('Pending implementation of reset test section functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "deleteTestSection", function () {
      return console.warn('Pending implementation of delete test section functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDropdownClick", function (event) {
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderFlags", function () {
      var flags = _this.props.testSection.flags;

      if (flags.length) {
        return external_react_default.a.createElement("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, external_react_default.a.createElement("b", {
          className: "badge-text"
        }, flags.length), " ", external_react_default.a.createElement("i", {
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

  Object(createClass["a" /* default */])(TestSectionCard, [{
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
      return external_react_default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, external_react_default.a.createElement("div", {
        className: disabled ? 'card-main test-card card-disabled card' : 'card-main test-card card'
      }, external_react_default.a.createElement("div", {
        className: "card-panel panel-border"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "icon-col col s2"
      }, external_react_default.a.createElement("span", {
        className: "block-icon"
      }, external_react_default.a.createElement("i", {
        className: "icon-assign-section"
      }), external_react_default.a.createElement("span", {
        className: "text-icon"
      }, "Assigned ", external_react_default.a.createElement("br", null), "Test Section"))), external_react_default.a.createElement("div", {
        className: "col s8"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-text"
      }, external_react_default.a.createElement("div", {
        className: "text-large truncate"
      }, subjectMap[subject], " Section"), external_react_default.a.createElement("div", {
        className: "text-small truncate"
      }, "Version: ", version))), external_react_default.a.createElement("div", {
        className: "position-top right-align"
      }, external_react_default.a.createElement("div", {
        className: "icons-row"
      }, this.renderFlags(), external_react_default.a.createElement("div", {
        className: "dropdown-block col"
      }, external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown01",
        className: "dropdown-trigger btn",
        onClick: this.handleDropdownClick
      }, external_react_default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? external_react_default.a.createElement("ul", {
        id: "dropdown01",
        className: "dropdown-content dropdown-wide",
        style: {
          display: 'block',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.viewTestSectionDetails,
        className: "modal-trigger link-block"
      }, "View Details")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.dismissFlags
      }, "Dismiss Flags")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.resetTestSection
      }, "Reset")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.deleteTestSection,
        className: "link-delete"
      }, "Delete"))) : null))))), external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("div", {
        className: "d-flex sameheight-all row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s6"
      }, external_react_default.a.createElement("div", {
        className: "chart-container"
      }, external_react_default.a.createElement("div", {
        className: "chart-holder"
      }, external_react_default.a.createElement(external_react_chartjs_2_["Doughnut"], {
        data: function data() {
          return testSectionCardUtils_data(percentageComplete, status);
        },
        options: {
          circumference: 1 * Math.PI,
          rotation: 1 * Math.PI,
          cutoutPercentage: 60,
          tooltips: false
        }
      }), external_react_default.a.createElement("span", {
        className: "chart-value",
        style: {
          backgroundColor: graphColorMap[status]
        }
      }, external_react_default.a.createElement("span", {
        "data-count-up": true,
        "data-start-val": "0",
        "data-end-val": "96",
        "data-duration": "1"
      }), external_react_default.a.createElement("span", {
        className: "percentage"
      }, percentageComplete, "%"))), external_react_default.a.createElement("div", {
        className: "chart-row"
      }, external_react_default.a.createElement("div", {
        className: "chart-col chart-start"
      }, "\xA0"), external_react_default.a.createElement("div", {
        className: "chart-col chart-end"
      }, external_react_default.a.createElement("span", {
        className: "amount",
        style: {
          color: graphColorMap[status]
        }
      }, problems))), external_react_default.a.createElement("div", {
        className: "chart-description"
      }, external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Time Est:"), external_react_default.a.createElement("dd", null, timeEstimate, " min")), external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Problems:"), external_react_default.a.createElement("dd", null, problems))))), external_react_default.a.createElement("div", {
        className: "col s6 right-align justify-end"
      }, external_react_default.a.createElement("div", {
        className: "chart-description"
      }, external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Available:"), external_react_default.a.createElement("dd", null, external_react_default.a.createElement("time", {
        dateTime: "2018-12-15"
      }, availableDate))), external_react_default.a.createElement("dl", {
        className: "dl-horizontal"
      }, external_react_default.a.createElement("dt", null, "Due:"), external_react_default.a.createElement("dd", null, external_react_default.a.createElement("time", {
        dateTime: "2018-12-15"
      }, dueDate)))), external_react_default.a.createElement("div", {
        className: "align-self-end"
      }, external_react_default.a.createElement("span", {
        className: testSectionCardColorMap[status]
      }, status)))))));
    }
  }]);

  return TestSectionCard;
}(external_react_default.a.Component);

/* harmony default export */ var components_TestSectionCard = (TestSectionCard_TestSectionCard);
// CONCATENATED MODULE: ./components/Class/utils/sampleTestSections.js
/* harmony default export */ var sampleTestSections = ([{
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
// CONCATENATED MODULE: ./components/Class/TestSectionsPage/index.js
















var TestSectionsPage_TestSectionsPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(TestSectionsPage, _React$Component);

  function TestSectionsPage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TestSectionsPage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TestSectionsPage).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        sort: '',
        testVersionFilter: '',
        subjectFilters: [],
        flagFilter: false,
        availableDateFilters: [],
        dueDateFilters: []
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetDropdown", function (dropdownIndex) {
      return _this.setState({
        dropdownIndex: dropdownIndex,
        dropdownIsOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseDropdown", function () {
      return _this.setState({
        dropdownIsOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetFilteredState", function (value) {
      return _this.setState({
        testVersionFilter: value
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        testVersionFilter: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSortTestSections", function (testSections) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'flags':
          return testSections.sort(flagsSort);

        case 'dueDate':
          return testSections.sort(dueDateSort);

        case 'availableDate':
          return testSections.sort(availableDateSort);

        case 'status':
          return testSections.sort(statusSort);

        case 'problems':
          return testSections.sort(problemSort);

        case 'timeEstimate':
          return testSections.sort(timeEstimateSort);

        case 'subject':
          return testSections.sort(subjectSort);

        case 'percentageComplete':
          return testSections.sort(percentageCompleteSort);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByTestVersion", function () {
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByDate", function (incomingSections, dateType) {
      var _this$state2 = _this.state,
          dueDateFilters = _this$state2.dueDateFilters,
          availableDateFilters = _this$state2.availableDateFilters;
      var dateFilters;
      var testSections = incomingSections;
      var currentDate = external_moment_default()().format('MM/DD/YY');
      var currentDateIndex = new Date().getDay();
      var endOfWeekIndex = 6 - currentDateIndex;
      var endOfWeekDate = external_moment_default()().add(endOfWeekIndex, 'days').format('MM/DD/YY');

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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterTestSections", function () {
      var _this$state3 = _this.state,
          subjectFilters = _this$state3.subjectFilters,
          dueDateFilters = _this$state3.dueDateFilters,
          availableDateFilters = _this$state3.availableDateFilters,
          flagFilter = _this$state3.flagFilter,
          allTestSections = _this$state3.testSections;
      var testSections = allTestSections;

      if (subjectFilters.length) {
        testSections = testSections.filter(function (testSection) {
          return subjectFilters.indexOf(testSectionSubjectMap[testSection.subject]) !== -1;
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getMappableTestSections", function () {
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFilterClick", function (filterType, filter) {
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
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        var filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState(Object(defineProperty["a" /* default */])({}, modifiedFilterName, modifiedFilterUpdatedState));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapTestSections", function () {
      return _this.getMappableTestSections().map(function (testSection, index) {
        return external_react_default.a.createElement(components_TestSectionCard, {
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
      testSections: sampleTestSections
    };
    return _this;
  }

  Object(createClass["a" /* default */])(TestSectionsPage, [{
    key: "render",
    value: function render() {
      var testSections = this.state.testSections;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_FilterSection, {
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
      }), external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "result-row center-align"
      }, external_react_default.a.createElement("b", {
        className: "result"
      }, " - ", testSections.length, " results -")), external_react_default.a.createElement("div", {
        className: "row d-flex-content card-width-272"
      }, this.mapTestSections())));
    }
  }]);

  return TestSectionsPage;
}(external_react_default.a.Component);

/* harmony default export */ var Class_TestSectionsPage = (TestSectionsPage_TestSectionsPage);
// CONCATENATED MODULE: ./pages/classes.js









 // eslint-disable-next-line react/prefer-stateless-function

var classes_Classes =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Classes, _Component);

  function Classes(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Classes);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Classes).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetActivePage", function (active) {
      return _this.setState({
        active: active
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderCurrentPage", function () {
      var active = _this.state.active;

      if (active === 'testSections') {
        return external_react_default.a.createElement(Class_TestSectionsPage, null);
      }

      return null;
    });

    _this.state = {
      active: 'testSections'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Classes, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("main", {
        id: "main",
        role: "main"
      }, external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-5 switcher-section"
      }, external_react_default.a.createElement("div", {
        className: "title-row card-panel"
      }, external_react_default.a.createElement("div", {
        className: "mobile-header"
      }, external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "menu"))), external_react_default.a.createElement("nav", {
        className: "breadcrumb-holder"
      }, external_react_default.a.createElement("div", {
        className: "nav-wrapper "
      }, external_react_default.a.createElement("a", {
        href: "#!",
        className: "breadcrumb"
      }, "< Classes"))), external_react_default.a.createElement("h2", {
        className: "h1 white-text"
      }, external_react_default.a.createElement("span", {
        className: "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "icon-members"
      }), external_react_default.a.createElement("span", {
        className: "heading-block"
      }, "Some Class in June"))), external_react_default.a.createElement(components_ClassNavBar, null)), this.renderCurrentPage()), external_react_default.a.createElement("div", {
        className: "add-btn-block dropdown-small"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "dropdown-trigger waves-effect waves-teal btn add-btn",
        "data-target": "dropdown_assign_selected"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "add"), " Assign Test Section"), external_react_default.a.createElement("ul", {
        id: "dropdown_assign_selected",
        className: "dropdown-content dropdown-small"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "From Saved")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#"
      }, "Create New"))))));
    }
  }]);

  return Classes;
}(external_react_["Component"]);

/* harmony default export */ var classes = __webpack_exports__["default"] = (classes_Classes);

/***/ }),

/***/ "Rgyi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
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
/* harmony default export */ __webpack_exports__["b"] = (DropdownWrapper);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YckE":
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "uhPQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");

// Keeping unused styling for now so I know what element they target
/* harmony default export */ __webpack_exports__["b"] = ({
  multiValueLabel: function multiValueLabel(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
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
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles);
  },
  dropdownIndicator: function dropdownIndicator(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      display: 'none'
    });
  },
  multiValue: function multiValue(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      background: 'none'
    });
  },
  valueContainer: function valueContainer(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles);
  },
  input: function input(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      paddingTop: '9px'
    });
  },
  groupHeading: function groupHeading(styles) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles);
  },
  control: function control(styles, _ref) {
    var isFocused = _ref.isFocused;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
      boxShadow: 'none',
      borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important'
    });
  }
});
var DropdownStyles = {
  container: function container(base, state) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, base, {
      opacity: state.isDisabled ? ".5" : "1",
      backgroundColor: "transparent",
      zIndex: "999"
    });
  },
  option: function option(styles, _ref2) {
    var isFocused = _ref2.isFocused;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
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
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

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