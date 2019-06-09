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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+JeY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AverageImprovement = function AverageImprovement(_ref) {
  var _ref$state = _ref.state,
      totalPoints = _ref$state.totalPoints,
      readingAndWriting = _ref$state.readingAndWriting,
      math = _ref$state.math;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item card-width-366"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Average Improvement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "points-list-custom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "point-custom-large style-aqua"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, totalPoints, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "points"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-green-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, "+", readingAndWriting, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Reading & Writing"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-blue-lightdark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle"
  }, math, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Math"))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (AverageImprovement);

/***/ }),

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

/***/ "1v6+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Pipeline = function Pipeline(_ref) {
  var _ref$state = _ref.state,
      unactivated = _ref$state.unactivated,
      current = _ref$state.current,
      complete = _ref$state.complete,
      waitingForFinalScore = _ref$state.waitingForFinalScore;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item card-width-556"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Pipeline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "points-list-bordered-large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-unactive"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle badge-circle-bordered"
  }, unactivated, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Unactivated"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-current"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle badge-circle-bordered"
  }, current, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Current"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-complete"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle badge-circle-bordered"
  }, complete, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Complete"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "style-waiting"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-circle badge-circle-bordered"
  }, waitingForFinalScore, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge-text"
  }, "Waiting for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Final Score"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Pipeline);

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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FBPj");


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

/***/ "Bci1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var StudentImprovement = function StudentImprovement(_ref) {
  var _ref$state = _ref.state,
      noGain = _ref$state.noGain,
      from0To50 = _ref$state.from0To50,
      from50To99 = _ref$state.from50To99,
      from100To149 = _ref$state.from100To149,
      from150To199 = _ref$state.from150To199,
      from200Plus = _ref$state.from200Plus;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item card-width-556 order-sm-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Student Improvement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, "200+ ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "points"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (StudentImprovement);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Bvo1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nestedEditFieldValidation; });
/* unused harmony export shallowEditFieldValidation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nestedCreateFieldValidation; });
/* unused harmony export shallowCreateFieldValidation */
/* unused harmony export parseInvalidFieldsToString */
/* unused harmony export shallowParseInvalidFieldsToString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return saveNewSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveChangesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveNewError; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable array-callback-return */
// HOW THESE FUNCTIONS WORK
// Each nested validation function takes these three props - component state, a validation state setter, and a set validation function
// Component state is self-explanatory - it's a copy of the entire component state
// The validation state setter refers to a function in the component that sets updated validation state and dispatches the set validation function as a callback
// nestedEditFieldValidation takes updatedInstance as an additional prop - this is the state instance the user has been updating in edit mode
// We set an initial validation boolean that will be switched to false if an invalid field is found
// We also create a shallow copy of the component's validation map
// With the nested functions, we map through the validation state and each object contained within for that component's nested state: for example, ownerContactInfo, locationContactInfo, and locationBranding
// Both functions check if the component state has valid input, referred to by field, and whether that key/field is required - the edit variation checks the user-updated state
// If an invalid input is found, that boolean in the validation map is set to false, along with validForm
// The validation state setter is dispatched with the updated validation map
// The set validation function is passed down from the container level and provides the component with the toast displaying all invalid fields

var nestedEditFieldValidation = function nestedEditFieldValidation(componentState, updatedInstance, validationStateSetter, setValidationFunc) {
  var validForm = true;
  var validation = componentState.validation;

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(function (fieldSection) {
    if (!updatedInstance[fieldSection] && initialValidation[fieldSection]) {
      initialValidation[fieldSection] = false;
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation[fieldSection]).map(function (field) {
      if (!updatedInstance[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
var shallowEditFieldValidation = function shallowEditFieldValidation(componentState, updatedInstance, validationStateSetter, setValidationFunc) {
  var validForm = true;
  var validation = componentState.validation;

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(function (field) {
    if (!updatedInstance[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
var nestedCreateFieldValidation = function nestedCreateFieldValidation(componentState, validationStateSetter, setValidationFunc) {
  var validForm = true;
  var validation = componentState.validation;

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(function (fieldSection) {
    if (!componentState[fieldSection] && initialValidation[fieldSection]) {
      initialValidation[fieldSection] = false;
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation[fieldSection]).map(function (field) {
      if (!componentState[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
var shallowCreateFieldValidation = function shallowCreateFieldValidation(componentState, validationStateSetter, setValidationFunc) {
  var validForm = true;
  var validation = componentState.validation;

  var initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(function (field) {
    if (!componentState[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
}; // validationState is set in state from the root create or edit when an invalid section is found
// This function maps through the validation object, checks for invalid fields, and converts them to regular english based on validationFieldMap

var parseInvalidFieldsToString = function parseInvalidFieldsToString(validationState, validationFieldMap) {
  var invalidFields = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState).map(function (fieldSection) {
    if (validationState[fieldSection] === false) {
      invalidFields.push(validationFieldMap[fieldSection]);
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState[fieldSection]).map(function (field) {
      if (validationState[fieldSection][field] === false) {
        invalidFields.push(validationFieldMap[field]);
      }
    });
  });

  return invalidFields.join(', ');
};
var shallowParseInvalidFieldsToString = function shallowParseInvalidFieldsToString(validationState, validationFieldMap) {
  var invalidFields = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState).map(function (field) {
    if (validationState[field] === false) {
      invalidFields.push(validationFieldMap[field]);
    }
  });

  return invalidFields.join(', ');
};
var saveNewSuccess = function saveNewSuccess(name) {
  return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Your ".concat(name, " has been successfully saved!"), {
    className: 'update-success',
    progressClassName: 'progress-bar-success'
  });
};
var saveChangesSuccess = function saveChangesSuccess() {
  return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Your changes have been successfully saved!", {
    className: 'update-success',
    progressClassName: 'progress-bar-success'
  });
};
var saveNewError = function saveNewError(validationState, validationFieldMap) {
  var shallowValidation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Please fill out the following required fields: ".concat(shallowValidation ? shallowParseInvalidFieldsToString(validationState, validationFieldMap) : parseInvalidFieldsToString(validationState, validationFieldMap)), {
    className: 'update-error',
    progressClassName: 'progress-bar-error'
  });
};

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

/***/ "EKwD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AveragePerCourse = function AveragePerCourse(_ref) {
  var _ref$state = _ref.state,
      hoursOfInstruction = _ref$state.hoursOfInstruction,
      lessons = _ref$state.lessons,
      worksheets = _ref$state.worksheets,
      practiceTests = _ref$state.practiceTests;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-width-750 order-sm-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Average (per course)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "alerts-list list-in-columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box icon-box green darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-clock"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text green-text text-darken-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Hours of Instruction")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, hoursOfInstruction)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box purple accent-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-books"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text purple-text text-accent-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Lessons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, lessons)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box light-blue darken-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-note"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text light-blue-text text-darken-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Worksheets")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, worksheets)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card-alert"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-box pink darken-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-clock"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert-text pink-text text-darken-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Pactice Tests")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-large"
  }, practiceTests)))))));
};

/* harmony default export */ __webpack_exports__["a"] = (AveragePerCourse);

/***/ }),

/***/ "FBPj":
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

// CONCATENATED MODULE: ./components/Location/components/LocationNavBar/index.js


var LocationNavBar_LocationNavBar = function LocationNavBar(_ref) {
  var active = _ref.active,
      onSetActivePage = _ref.onSetActivePage;
  return external_react_default.a.createElement("div", {
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
  }, "<  Locations"))), external_react_default.a.createElement("h2", {
    className: "h1 white-text"
  }, external_react_default.a.createElement("span", {
    className: "heading-holder"
  }, external_react_default.a.createElement("i", {
    className: "icon-location"
  }), external_react_default.a.createElement("span", {
    className: "heading-block"
  }, "Study Hut - Redondo Beach, CA"))), external_react_default.a.createElement("nav", {
    className: "nav-additional"
  }, external_react_default.a.createElement("ul", {
    className: "menu-additional"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('summary');
    },
    className: active === 'summary' ? 'active' : ''
  }, "Summary")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return onSetActivePage('account');
    },
    className: active === 'account' ? 'active' : ''
  }, "Account")))));
};

/* harmony default export */ var components_LocationNavBar = (LocationNavBar_LocationNavBar);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// CONCATENATED MODULE: ./components/Location/DetailAccountPage/components/Owner/index.js


var Owner_Owner = function Owner(_ref) {
  var _ref$state = _ref.state,
      firstName = _ref$state.firstName,
      lastName = _ref$state.lastName,
      email = _ref$state.email;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Owner"), external_react_default.a.createElement("div", {
    className: "owner-box card-panel",
    style: {
      backgroundColor: '#31837a',
      color: '#fff'
    }
  }, external_react_default.a.createElement("div", {
    className: "card-panel-row row"
  }, external_react_default.a.createElement("div", {
    className: "col s10"
  }, external_react_default.a.createElement("div", {
    className: "user-block"
  }, external_react_default.a.createElement("div", {
    className: "user-circle",
    style: {
      backgroundColor: '#9c27b0',
      color: '#fff'
    }
  }, external_react_default.a.createElement("img", {
    src: "images/img-owner01.jpg",
    alt: ""
  })), external_react_default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, external_react_default.a.createElement("h4", {
    className: "h3"
  }, lastName, ", ", firstName), external_react_default.a.createElement("a", {
    href: "mailto:".concat(email)
  }, email)))), external_react_default.a.createElement("div", {
    className: "col s2 right-align"
  }, external_react_default.a.createElement("span", {
    className: "block-icon"
  }, external_react_default.a.createElement("i", {
    className: "icon-owner"
  }), external_react_default.a.createElement("span", {
    className: "text-icon"
  }, "Owner"))))));
};

/* harmony default export */ var components_Owner = (Owner_Owner);
// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// CONCATENATED MODULE: ./components/Location/DetailAccountPage/components/LocationContactInfo/index.js





var LocationContactInfo_LocationContactInfo = function LocationContactInfo(_ref) {
  var _ref$state = _ref.state;
  _ref$state = _ref$state === void 0 ? {} : _ref$state;
  var locationName = _ref$state.locationName,
      locationNickname = _ref$state.locationNickname,
      locationEmail = _ref$state.locationEmail,
      locationPhone = _ref$state.locationPhone,
      website = _ref$state.website,
      streetAddress = _ref$state.streetAddress,
      city = _ref$state.city,
      state = _ref$state.state,
      zip = _ref$state.zip,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Location Contact Info"), external_react_default.a.createElement("div", {
    className: "card-main card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "location-name",
    name: "locationName",
    value: locationName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationName', 'locationContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: locationName.length ? 'label active' : 'label',
    htmlFor: "location-name"
  }, "Location Name*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "location-nickname",
    name: "locationNickname",
    value: locationNickname,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationNickname', 'locationContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: locationNickname.length ? 'label active' : 'label',
    htmlFor: "location-nickname"
  }, "Location Nickname*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "location-email",
    name: "locationEmail",
    value: locationEmail,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationEmail', 'locationContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: locationEmail.length ? 'label active' : 'label',
    htmlFor: "location-email"
  }, "Location Email*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "location-phone",
    name: locationPhone,
    value: locationPhone,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'locationPhone', 'locationContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: locationPhone.length ? 'label active' : 'label',
    htmlFor: "location-phone"
  }, "Location Phone Number (optional)"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "url",
    id: "website",
    name: "website",
    value: website,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'website', 'locationContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: "label active",
    htmlFor: "website"
  }, "Website (optional)"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "street-address",
    name: "streetAddress",
    value: streetAddress,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'streetAddress', 'locationContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: streetAddress.length ? 'label active' : 'label',
    htmlFor: "street-address"
  }, "Street Address (optional)"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "city",
    name: "city",
    value: city,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'city', 'locationContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: city.length ? 'label active' : 'label',
    htmlFor: "city"
  }, "City (optional)"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 m6 l5"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(state, stateOptions["a" /* default */]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'state', 'locationContactInfo');
    },
    options: stateOptions["a" /* default */],
    label: "State",
    stateKey: "state",
    dropdownKey: "state"
  })), external_react_default.a.createElement("div", {
    className: "input-field col s12 m6 l7"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "zip",
    name: "zip",
    value: zip,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'zip', 'locationContactInfo');
    }
  }), external_react_default.a.createElement("label", {
    className: zip.length ? 'label active' : 'label',
    htmlFor: "zip_edit"
  }, "Zip (optional)")))))));
};

/* harmony default export */ var components_LocationContactInfo = (LocationContactInfo_LocationContactInfo);
// CONCATENATED MODULE: ./components/Location/DetailAccountPage/components/LocationEmailSettings/index.js


var LocationEmailSettings_LocationEmailSettings = function LocationEmailSettings(_ref) {
  var _ref$state = _ref.state,
      automatedEmailOriginAddress = _ref$state.automatedEmailOriginAddress,
      automatedEmailSalutation = _ref$state.automatedEmailSalutation,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Location Email Settings"), external_react_default.a.createElement("div", {
    className: "card-main card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "automated-email-origin-address",
    name: "automatedEmailOriginAddress",
    value: automatedEmailOriginAddress,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'automatedEmailOriginAddress', 'locationEmailSettings');
    }
  }), external_react_default.a.createElement("label", {
    className: automatedEmailOriginAddress.length ? 'label active' : 'label',
    htmlFor: "automated-email-origin-address"
  }, "Automated Emails Come From (email)*"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12"
  }, external_react_default.a.createElement("textarea", {
    className: "materialize-textarea",
    id: "email_salutation_edit",
    name: "automatedEmailSalutation",
    value: automatedEmailSalutation,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'automatedEmailSalutation', 'locationEmailSettings');
    }
  }), external_react_default.a.createElement("label", {
    className: automatedEmailSalutation.length ? 'label active' : 'label',
    htmlFor: "email_salutation_edit"
  }, "Automated Email Salutation*"))))));
};

/* harmony default export */ var components_LocationEmailSettings = (LocationEmailSettings_LocationEmailSettings);
// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Location/DetailAccountPage/index.js
















var DetailAccountPage_DetailAccountPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DetailAccountPage, _React$Component);

  function DetailAccountPage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DetailAccountPage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DetailAccountPage).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "componentWillReceiveProps", function (nextProps) {
      if (!_this.state.originalLocation || nextProps.location.id !== _this.state.originalLocation.id) {
        var _nextProps$location = nextProps.location;
        _nextProps$location = _nextProps$location === void 0 ? {} : _nextProps$location;
        var id = _nextProps$location.id,
            owner = _nextProps$location.owner,
            locationEmailSettings = _nextProps$location.locationEmailSettings,
            locationContactInfo = _nextProps$location.locationContactInfo;
        var updatedLocation = {
          id: id,
          locationEmailSettings: locationEmailSettings,
          locationContactInfo: locationContactInfo
        };
        var originalLocationState = _this.state.originalLocation;
        var originalLocation = external_immutability_helper_default()(originalLocationState, {
          $merge: nextProps.location
        });

        _this.setState({
          originalLocation: originalLocation,
          updatedLocation: updatedLocation,
          owner: owner
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetValidation", function (validation, cb) {
      return _this.setState({
        validation: validation
      }, cb);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSaveChanges",
    /*#__PURE__*/
    function () {
      var _ref = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(event) {
        var updatedLocation, valid;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault(); // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;

                updatedLocation = _this.state.updatedLocation;
                _context.next = 4;
                return Object(fieldValidation["b" /* nestedEditFieldValidation */])(_this.state, _this.state.updatedLocation, _this.onSetValidation, function (validation) {
                  return console.warn('validation', validation);
                });

              case 4:
                valid = _context.sent;

                if (!valid) {
                  // return onSaveChangesError();
                  console.warn('not valid');
                }

                _this.setState({
                  originalLocation: updatedLocation
                }); // return onSavePassageChanges(updatedLocation);


              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "initialLocationMount", function () {
      return _this.state.originalLocation.id !== _this.props.location.id;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDetailsChange", function (event, name, section) {
      var previousLocationState = _this.state.updatedLocation;
      var value = event.target ? event.target.value : event;
      var updatedLocation = external_immutability_helper_default()(previousLocationState, Object(defineProperty["a" /* default */])({}, section, {
        $merge: Object(defineProperty["a" /* default */])({}, name, value)
      }));

      _this.setState({
        updatedLocation: updatedLocation
      });
    });

    _this.state = {
      owner: {
        firstName: '',
        lastName: '',
        email: ''
      },
      originalLocation: {
        locationEmailSettings: {
          automatedEmailOriginAddress: '',
          automatedEmailSalutation: ''
        },
        locationContactInfo: {
          locationName: '',
          locationNickname: '',
          locationEmail: '',
          locationPhone: '',
          website: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: ''
        }
      },
      updatedLocation: {
        locationEmailSettings: {
          automatedEmailOriginAddress: '',
          automatedEmailSalutation: ''
        },
        locationContactInfo: {
          locationName: '',
          locationNickname: '',
          locationEmail: '',
          locationPhone: '',
          website: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: ''
        }
      },
      validation: {
        locationEmailSettings: {
          automatedEmailOriginAddress: true,
          automatedEmailSalutation: true
        },
        locationContactInfo: {
          locationName: true,
          locationNickname: true,
          locationEmail: true
        }
      }
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DetailAccountPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$location = this.props.location;
      _this$props$location = _this$props$location === void 0 ? {} : _this$props$location;
      var id = _this$props$location.id,
          owner = _this$props$location.owner,
          locationEmailSettings = _this$props$location.locationEmailSettings,
          locationContactInfo = _this$props$location.locationContactInfo;
      var updatedLocation = {
        id: id,
        locationEmailSettings: locationEmailSettings,
        locationContactInfo: locationContactInfo
      };
      var originalLocationState = this.state.originalLocation;
      var originalLocation = external_immutability_helper_default()(originalLocationState, {
        $merge: updatedLocation
      });
      this.setState({
        originalLocation: originalLocation,
        updatedLocation: updatedLocation,
        owner: owner
      }); // eslint-disable-line
    } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the location edit page
    // This resets the component state to reflect the details of the next location the location clicks on

  }, {
    key: "render",
    value: function render() {
      // TODO: Update navbar info with actual sample location data
      var _this$state$updatedLo = this.state.updatedLocation,
          updatedLocationEmailSettings = _this$state$updatedLo.locationEmailSettings,
          updatedLocationContactInfo = _this$state$updatedLo.locationContactInfo;
      var _this$props$location2 = this.props.location,
          owner = _this$props$location2.owner,
          locationEmailSettings = _this$props$location2.locationEmailSettings,
          locationContactInfo = _this$props$location2.locationContactInfo;
      return external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "content-section-holder"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex-content large"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l5"
      }, external_react_default.a.createElement(components_Owner, {
        state: owner
      }), external_react_default.a.createElement(components_LocationEmailSettings, {
        state: this.initialLocationMount() ? locationEmailSettings : updatedLocationEmailSettings,
        handleDetailsChange: this.handleDetailsChange
      })), external_react_default.a.createElement(components_LocationContactInfo, {
        state: this.initialLocationMount() ? locationContactInfo : updatedLocationContactInfo,
        handleDetailsChange: this.handleDetailsChange
      })), external_react_default.a.createElement("div", {
        className: "btn-holder align-right-sm"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "btn",
        onClick: this.onSaveChanges
      }, "Save"))));
    }
  }]);

  return DetailAccountPage;
}(external_react_default.a.Component);

/* harmony default export */ var Location_DetailAccountPage = (DetailAccountPage_DetailAccountPage);
// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/AverageImprovement/index.js
var AverageImprovement = __webpack_require__("+JeY");

// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/Pipeline/index.js
var Pipeline = __webpack_require__("1v6+");

// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/StudentImprovement/index.js
var StudentImprovement = __webpack_require__("Bci1");

// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/TargetScores/index.js
var TargetScores = __webpack_require__("Nbej");

// EXTERNAL MODULE: ./components/SharedSummaryPageComponents/AveragePerCourse/index.js
var AveragePerCourse = __webpack_require__("EKwD");

// CONCATENATED MODULE: ./components/Location/DetailSummaryPage/index.js










 // eslint-disable-next-line react/prefer-stateless-function

var DetailSummaryPage_LocationDetailSummaryPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LocationDetailSummaryPage, _React$Component);

  function LocationDetailSummaryPage() {
    Object(classCallCheck["a" /* default */])(this, LocationDetailSummaryPage);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LocationDetailSummaryPage).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(LocationDetailSummaryPage, [{
    key: "render",
    value: function render() {
      var _this$props$location = this.props.location,
          averageImprovement = _this$props$location.averageImprovement,
          pipeline = _this$props$location.pipeline,
          targetScores = _this$props$location.targetScores,
          studentImprovement = _this$props$location.studentImprovement,
          averagePerCourse = _this$props$location.averagePerCourse;
      return external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "content-section-holder"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "cards-section"
      }, external_react_default.a.createElement("div", {
        className: "dashboard-section"
      }, external_react_default.a.createElement("div", {
        className: "dashboard-row js-sortable js-masonry row",
        "data-masonry-options": "{\"columnWidth\": 1, \"itemSelector\": \".grid-item\", \"gutter\": 31}"
      }, external_react_default.a.createElement(AverageImprovement["a" /* default */], {
        state: averageImprovement
      }), external_react_default.a.createElement(Pipeline["a" /* default */], {
        state: pipeline
      }), external_react_default.a.createElement(StudentImprovement["a" /* default */], {
        state: studentImprovement
      }), external_react_default.a.createElement(TargetScores["a" /* default */], {
        state: targetScores
      })), external_react_default.a.createElement(AveragePerCourse["a" /* default */], {
        state: averagePerCourse
      }))))));
    }
  }]);

  return LocationDetailSummaryPage;
}(external_react_default.a.Component);

/* harmony default export */ var DetailSummaryPage = (DetailSummaryPage_LocationDetailSummaryPage);
// CONCATENATED MODULE: ./components/Location/utils/sampleLocation.js
/* harmony default export */ var sampleLocation = ({
  owner: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    email: 'christian@email.com'
  },
  locationEmailSettings: {
    automatedEmailOriginAddress: 'automated@donotoreply.com',
    automatedEmailSalutation: 'Regards, The Clear Choice Team'
  },
  locationContactInfo: {
    locationName: 'TutorZone Austin',
    locationNickname: 'We Teach Real Good',
    locationEmail: 'tutorzone@email.com',
    locationPhone: '1234567890',
    website: 'tutorzone.com',
    streetAddress: '1234 Test Lane',
    city: 'Austin',
    state: 'FL',
    zip: '12345'
  },
  averageImprovement: {
    totalPoints: '290',
    readingAndWriting: '47',
    math: '146'
  },
  pipeline: {
    unactivated: '31',
    current: '9',
    complete: '12',
    waitingForFinalScore: '27'
  },
  targetScores: {
    percentageHitTargetScore: '81'
  },
  studentImprovement: {
    noGain: '32',
    from0To50: '19',
    from50To99: '60',
    from100To149: '77',
    from150To199: '62',
    from200Plus: '91'
  },
  averagePerCourse: {
    hoursOfInstruction: '31.9',
    lessons: '74.2',
    worksheets: '6.5',
    practiceTests: '1.7'
  }
});
// CONCATENATED MODULE: ./pages/locations.js








/* eslint-disable react/jsx-indent */




 // eslint-disable-next-line react/prefer-stateless-function

var locations_Instructors =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Instructors, _Component);

  function Instructors(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Instructors);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Instructors).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetActivePage", function (active) {
      return _this.setState({
        active: active
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderCurrentPage", function () {
      var active = _this.state.active;

      if (active === 'summary') {
        return external_react_default.a.createElement(DetailSummaryPage, {
          location: sampleLocation
        });
      }

      if (active === 'account') {
        return external_react_default.a.createElement(Location_DetailAccountPage, {
          location: sampleLocation
        });
      }

      return null;
    });

    _this.state = {
      active: 'summary'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Instructors, [{
    key: "render",
    value: function render() {
      var active = this.state.active;
      return external_react_default.a.createElement("main", {
        id: "main",
        role: "main"
      }, external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, external_react_default.a.createElement(components_LocationNavBar, {
        active: active,
        onSetActivePage: this.onSetActivePage
      }), this.renderCurrentPage()));
    }
  }]);

  return Instructors;
}(external_react_["Component"]);

/* harmony default export */ var locations = __webpack_exports__["default"] = (locations_Instructors);

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

/***/ "Nbej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);



var _data = function data(percentage) {
  return {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: ['#00bbf7', '#eaeaea']
    }]
  };
};

var TargetScores = function TargetScores(_ref) {
  var percentageHitTargetScore = _ref.state.percentageHitTargetScore;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item card-width-366 order-sm-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Target Scores"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-main-full card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-container chart-container-xllarge"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
    data: function data() {
      return _data(percentageHitTargetScore);
    },
    options: {
      circumference: 1 * Math.PI,
      rotation: 1 * Math.PI,
      cutoutPercentage: 60,
      tooltips: false
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "chart-value",
    style: {
      backgroundColor: '#00bbf7'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-count-up": true,
    "data-start-val": "0",
    "data-end-val": "".concat(percentageHitTargetScore),
    "data-duration": "1"
  }, percentageHitTargetScore), "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-col chart-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "amount-text"
  }, "Total Students")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-col chart-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "amount-text"
  }, "Hit Target Score"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (TargetScores);

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

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

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKn1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var stateOptions = [{
  label: "Alabama",
  value: "AL"
}, {
  label: "Alaska",
  value: "AK"
}, {
  label: "American Samoa",
  value: "AS"
}, {
  label: "Arizona",
  value: "AZ"
}, {
  label: "Arkansas",
  value: "AR"
}, {
  label: "California",
  value: "CA"
}, {
  label: "Colorado",
  value: "CO"
}, {
  label: "Connecticut",
  value: "CT"
}, {
  label: "Delaware",
  value: "DE"
}, {
  label: "District Of Columbia",
  value: "DC"
}, {
  label: "Federated States Of Micronesia",
  value: "FM"
}, {
  label: "Florida",
  value: "FL"
}, {
  label: "Georgia",
  value: "GA"
}, {
  label: "Guam",
  value: "GU"
}, {
  label: "Hawaii",
  value: "HI"
}, {
  label: "Idaho",
  value: "ID"
}, {
  label: "Illinois",
  value: "IL"
}, {
  label: "Indiana",
  value: "IN"
}, {
  label: "Iowa",
  value: "IA"
}, {
  label: "Kansas",
  value: "KS"
}, {
  label: "Kentucky",
  value: "KY"
}, {
  label: "Louisiana",
  value: "LA"
}, {
  label: "Maine",
  value: "ME"
}, {
  label: "Marshall Islands",
  value: "MH"
}, {
  label: "Maryland",
  value: "MD"
}, {
  label: "Massachusetts",
  value: "MA"
}, {
  label: "Michigan",
  value: "MI"
}, {
  label: "Minnesota",
  value: "MN"
}, {
  label: "Mississippi",
  value: "MS"
}, {
  label: "Missouri",
  value: "MO"
}, {
  label: "Montana",
  value: "MT"
}, {
  label: "Nebraska",
  value: "NE"
}, {
  label: "Nevada",
  value: "NV"
}, {
  label: "New Hampshire",
  value: "NH"
}, {
  label: "New Jersey",
  value: "NJ"
}, {
  label: "New Mexico",
  value: "NM"
}, {
  label: "New York",
  value: "NY"
}, {
  label: "North Carolina",
  value: "NC"
}, {
  label: "North Dakota",
  value: "ND"
}, {
  label: "Northern Mariana Islands",
  value: "MP"
}, {
  label: "Ohio",
  value: "OH"
}, {
  label: "Oklahoma",
  value: "OK"
}, {
  label: "Oregon",
  value: "OR"
}, {
  label: "Palau",
  value: "PW"
}, {
  label: "Pennsylvania",
  value: "PA"
}, {
  label: "Puerto Rico",
  value: "PR"
}, {
  label: "Rhode Island",
  value: "RI"
}, {
  label: "South Carolina",
  value: "SC"
}, {
  label: "South Dakota",
  value: "SD"
}, {
  label: "Tennessee",
  value: "TN"
}, {
  label: "Texas",
  value: "TX"
}, {
  label: "Utah",
  value: "UT"
}, {
  label: "Vermont",
  value: "VT"
}, {
  label: "Virgin Islands",
  value: "VI"
}, {
  label: "Virginia",
  value: "VA"
}, {
  label: "Washington",
  value: "WA"
}, {
  label: "West Virginia",
  value: "WV"
}, {
  label: "Wisconsin",
  value: "WI"
}, {
  label: "Wyoming",
  value: "WY"
}];
/* harmony default export */ __webpack_exports__["a"] = (stateOptions);

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