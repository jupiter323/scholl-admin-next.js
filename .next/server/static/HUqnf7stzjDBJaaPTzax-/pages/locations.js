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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+JeY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AverageImprovement = ({
  state: {
    totalPoints,
    readingAndWriting,
    math
  }
}) => __jsx("div", {
  className: "grid-item card-width-366"
}, __jsx("div", {
  className: "card-block"
}, __jsx("h2", null, "Average Improvement"), __jsx("div", {
  className: "card-main-full card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("ul", {
  className: "points-list-custom"
}, __jsx("li", {
  className: "point-custom-large style-aqua"
}, __jsx("span", {
  className: "badge-circle"
}, totalPoints, " ", __jsx("span", {
  className: "badge-text"
}, "points"))), __jsx("li", null, __jsx("ul", null, __jsx("li", {
  className: "style-green-light"
}, __jsx("span", {
  className: "badge-circle"
}, "+", readingAndWriting, " ", __jsx("span", {
  className: "badge-text"
}, "Reading & Writing"))), __jsx("li", {
  className: "style-blue-lightdark"
}, __jsx("span", {
  className: "badge-circle"
}, math, " ", __jsx("span", {
  className: "badge-text"
}, "Math"))))))))));

/* harmony default export */ __webpack_exports__["a"] = (AverageImprovement);

/***/ }),

/***/ "/NWr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable array-callback-return */
// This function pulls the matching value objects from state for each Dropdown component if an existing value exists - otherwise, returns empty object
const getValueFromState = (valueKey, state, nested = false) => {
  let obj = {}; // This is encountered when the options are nested as arrays within objects

  if (nested) {
    state.map(substate => {
      substate.options.map(substateField => {
        if (substateField.value === valueKey) {
          obj = substateField;
        }
      });
    });
  } else {
    state.map(option => {
      if (option.value === valueKey) {
        obj = option;
      }
    });
  }

  return obj;
};

/* harmony default export */ __webpack_exports__["a"] = (getValueFromState);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FBPj");


/***/ }),

/***/ "1v6+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Pipeline = ({
  state: {
    unactivated,
    current,
    complete,
    waitingForFinalScore
  }
}) => __jsx("div", {
  className: "grid-item card-width-556"
}, __jsx("div", {
  className: "card-block"
}, __jsx("h2", null, "Pipeline"), __jsx("div", {
  className: "card-main-full card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("ul", {
  className: "points-list-bordered-large"
}, __jsx("li", {
  className: "style-unactive"
}, __jsx("span", {
  className: "badge-circle badge-circle-bordered"
}, unactivated, " ", __jsx("span", {
  className: "badge-text"
}, "Unactivated"))), __jsx("li", {
  className: "style-current"
}, __jsx("span", {
  className: "badge-circle badge-circle-bordered"
}, current, " ", __jsx("span", {
  className: "badge-text"
}, "Current"))), __jsx("li", {
  className: "style-complete"
}, __jsx("span", {
  className: "badge-circle badge-circle-bordered"
}, complete, " ", __jsx("span", {
  className: "badge-text"
}, "Complete"))), __jsx("li", {
  className: "style-waiting"
}, __jsx("span", {
  className: "badge-circle badge-circle-bordered"
}, waitingForFinalScore, " ", __jsx("span", {
  className: "badge-text"
}, "Waiting for ", __jsx("br", null), "Final Score"))))))));

/* harmony default export */ __webpack_exports__["a"] = (Pipeline);

/***/ }),

/***/ "325u":
/***/ (function(module, exports) {

module.exports = require("react-sticky");

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ControlComponent = props => {
  const {
    selectProps: {
      placeholder,
      label,
      className
    }
  } = props;
  const categoryCheck = label === 'Categories';
  return __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* ControlWrapper */ "a"], {
    invalid: className,
    categoryCheck: categoryCheck
  }, __jsx("div", {
    style: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_3__[/* DropdownStyles */ "a"]
  }, __jsx("p", null, categoryCheck ? 'Categories' : placeholder), __jsx(react_select__WEBPACK_IMPORTED_MODULE_1__["components"].Control, props)));
};

/* harmony default export */ __webpack_exports__["a"] = (ControlComponent);

/***/ }),

/***/ "Bci1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StudentImprovement = ({
  state: {
    noGain,
    from0To50,
    from50To99,
    from100To149,
    from150To199,
    from200Plus
  }
}) => __jsx("div", {
  className: "grid-item card-width-556 order-sm-4"
}, __jsx("div", {
  className: "card-block"
}, __jsx("h2", null, "Student Improvement"), __jsx("div", {
  className: "card-main-full card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("ul", {
  className: "vertical-graphs-container"
}, __jsx("li", {
  className: "vertical-graph-block"
}, __jsx("div", {
  className: "vertical-graph-frame"
}, __jsx("span", {
  className: "vertical-graph"
}, __jsx("span", {
  className: "graph-value"
}, noGain, "%"), __jsx("span", {
  className: "vertical-graph-box red darken-1",
  style: {
    height: `${noGain}%`
  }
})), __jsx("span", {
  className: "graph-legend"
}, "no gain"))), __jsx("li", {
  className: "vertical-graph-block"
}, __jsx("div", {
  className: "vertical-graph-frame"
}, __jsx("span", {
  className: "vertical-graph"
}, __jsx("span", {
  className: "graph-value"
}, from0To50, "%"), __jsx("span", {
  className: "vertical-graph-box pink darken-3",
  style: {
    height: `${from0To50}%`
  }
})), __jsx("span", {
  className: "graph-legend"
}, "0 to 50 ", __jsx("br", null), "points"))), __jsx("li", {
  className: "vertical-graph-block"
}, __jsx("div", {
  className: "vertical-graph-frame"
}, __jsx("span", {
  className: "vertical-graph"
}, __jsx("span", {
  className: "graph-value"
}, from50To99, "%"), __jsx("span", {
  className: "vertical-graph-box purple accent-4",
  style: {
    height: `${from50To99}%`
  }
})), __jsx("span", {
  className: "graph-legend"
}, "50 to 99 ", __jsx("br", null), "points"))), __jsx("li", {
  className: "vertical-graph-block"
}, __jsx("div", {
  className: "vertical-graph-frame"
}, __jsx("span", {
  className: "vertical-graph"
}, __jsx("span", {
  className: "graph-value"
}, from100To149, "%"), __jsx("span", {
  className: "vertical-graph-box purple darken-3",
  style: {
    height: `${from100To149}%`
  }
})), __jsx("span", {
  className: "graph-legend"
}, "100-149 ", __jsx("br", null), "points"))), __jsx("li", {
  className: "vertical-graph-block"
}, __jsx("div", {
  className: "vertical-graph-frame"
}, __jsx("span", {
  className: "vertical-graph"
}, __jsx("span", {
  className: "graph-value"
}, from150To199, "%"), __jsx("span", {
  className: "vertical-graph-box  deep-purple accent-4",
  style: {
    height: `${from150To199}%`
  }
})), __jsx("span", {
  className: "graph-legend"
}, "150-199 ", __jsx("br", null), "points"))), __jsx("li", {
  className: "vertical-graph-block"
}, __jsx("div", {
  className: "vertical-graph-frame"
}, __jsx("span", {
  className: "vertical-graph"
}, __jsx("span", {
  className: "graph-value"
}, from200Plus, "%"), __jsx("span", {
  className: "vertical-graph-box  indigo accent-4",
  style: {
    height: `${from200Plus}%`
  }
})), __jsx("span", {
  className: "graph-legend"
}, "200+ ", __jsx("br", null), "points"))))))));

/* harmony default export */ __webpack_exports__["a"] = (StudentImprovement);

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

const nestedEditFieldValidation = (componentState, updatedInstance, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const {
    validation
  } = componentState;

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(fieldSection => {
    if (!updatedInstance[fieldSection] && initialValidation[fieldSection]) {
      initialValidation[fieldSection] = false;
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation[fieldSection]).map(field => {
      if (!updatedInstance[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
const shallowEditFieldValidation = (componentState, updatedInstance, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const {
    validation
  } = componentState;

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(field => {
    if (!updatedInstance[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
const nestedCreateFieldValidation = (componentState, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const {
    validation
  } = componentState;

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(fieldSection => {
    if (!componentState[fieldSection] && initialValidation[fieldSection]) {
      initialValidation[fieldSection] = false;
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation[fieldSection]).map(field => {
      if (!componentState[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};
const shallowCreateFieldValidation = (componentState, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const {
    validation
  } = componentState;

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, validation);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validation).map(field => {
    if (!componentState[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });

  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
}; // validationState is set in state from the root create or edit when an invalid section is found
// This function maps through the validation object, checks for invalid fields, and converts them to regular english based on validationFieldMap

const parseInvalidFieldsToString = (validationState, validationFieldMap) => {
  const invalidFields = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState).map(fieldSection => {
    if (validationState[fieldSection] === false) {
      invalidFields.push(validationFieldMap[fieldSection]);
    }

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState[fieldSection]).map(field => {
      if (validationState[fieldSection][field] === false) {
        invalidFields.push(validationFieldMap[field]);
      }
    });
  });

  return invalidFields.join(', ');
};
const shallowParseInvalidFieldsToString = (validationState, validationFieldMap) => {
  const invalidFields = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(validationState).map(field => {
    if (validationState[field] === false) {
      invalidFields.push(validationFieldMap[field]);
    }
  });

  return invalidFields.join(', ');
};
const saveNewSuccess = name => react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success(`Your ${name} has been successfully saved!`, {
  className: 'update-success',
  progressClassName: 'progress-bar-success'
});
const saveChangesSuccess = () => react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Your changes have been successfully saved!", {
  className: 'update-success',
  progressClassName: 'progress-bar-success'
});
const saveNewError = (validationState, validationFieldMap, shallowValidation = false) => react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error(`Please fill out the following required fields: ${shallowValidation ? shallowParseInvalidFieldsToString(validationState, validationFieldMap) : parseInvalidFieldsToString(validationState, validationFieldMap)}`, {
  className: 'update-error',
  progressClassName: 'progress-bar-error'
});

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Dropdown = ({
  value,
  label,
  dropdownKey,
  stateKey = null,
  onChange,
  options,
  valid = true,
  padRight,
  className
}) => __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
  className: className,
  valid: valid || !valid && value === {},
  padRight: padRight
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
  options: options,
  onChange: event => onChange(event.value, dropdownKey, stateKey),
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

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ "EKwD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AveragePerCourse = ({
  state: {
    hoursOfInstruction,
    lessons,
    worksheets,
    practiceTests
  }
}) => __jsx("div", {
  className: "card-width-750 order-sm-5"
}, __jsx("div", {
  className: "card-block"
}, __jsx("h2", null, "Average (per course)"), __jsx("ul", {
  className: "alerts-list list-in-columns"
}, __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box icon-box green darken-3"
}, __jsx("i", {
  className: "icon-clock"
})), __jsx("div", {
  className: "alert-text green-text text-darken-3"
}, __jsx("p", null, __jsx("b", null, "Hours of Instruction")), __jsx("div", {
  className: "value"
}, __jsx("b", {
  className: "text-large"
}, hoursOfInstruction)))), __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box purple accent-4"
}, __jsx("i", {
  className: "icon-books"
})), __jsx("div", {
  className: "alert-text purple-text text-accent-4"
}, __jsx("p", null, __jsx("b", null, "Lessons")), __jsx("div", {
  className: "value"
}, __jsx("b", {
  className: "text-large"
}, lessons)))), __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box light-blue darken-1"
}, __jsx("i", {
  className: "icon-note"
})), __jsx("div", {
  className: "alert-text light-blue-text text-darken-1"
}, __jsx("p", null, __jsx("b", null, "Worksheets")), __jsx("div", {
  className: "value"
}, __jsx("b", {
  className: "text-large"
}, worksheets)))), __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box pink darken-1"
}, __jsx("i", {
  className: "icon-clock"
})), __jsx("div", {
  className: "alert-text pink-text text-darken-1"
}, __jsx("p", null, __jsx("b", null, "Pactice Tests")), __jsx("div", {
  className: "value"
}, __jsx("b", {
  className: "text-large"
}, practiceTests)))))));

/* harmony default export */ __webpack_exports__["a"] = (AveragePerCourse);

/***/ }),

/***/ "FBPj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// CONCATENATED MODULE: ./components/Location/components/LocationNavBar/index.js

var __jsx = external_react_default.a.createElement;

 // eslint-disable-next-line react/prefer-stateless-function

class LocationNavBar_LocationNavBar extends external_react_default.a.Component {
  render() {
    const {
      active,
      onSetActivePage,
      location: {
        locationContactInfo
      },
      onRedirectToLocationsPage
    } = this.props;
    return __jsx(external_react_sticky_["Sticky"], null, ({
      style
    }) => __jsx("div", {
      className: "title-row card-panel",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1999
      })
    }, __jsx("div", {
      className: "mobile-header"
    }, __jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, __jsx("i", {
      className: "material-icons"
    }, "menu"))), __jsx("nav", {
      className: "breadcrumb-holder"
    }, __jsx("div", {
      className: "nav-wrapper "
    }, __jsx("a", {
      href: "#!",
      onClick: onRedirectToLocationsPage,
      className: "breadcrumb"
    }, "<  Locations"))), __jsx("h2", {
      className: "h1 white-text"
    }, __jsx("span", {
      className: "heading-holder"
    }, __jsx("i", {
      className: "icon-location"
    }), __jsx("span", {
      className: "heading-block"
    }, locationContactInfo.locationName, " - ", locationContactInfo.locationCity, ", ", locationContactInfo.locationState))), __jsx("nav", {
      className: "nav-additional"
    }, __jsx("ul", {
      className: "menu-additional"
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: () => onSetActivePage('summary'),
      className: active === 'summary' ? 'active' : ''
    }, "Summary")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: () => onSetActivePage('account'),
      className: active === 'account' ? 'active' : ''
    }, "Account"))))));
  }

}

/* harmony default export */ var components_LocationNavBar = (LocationNavBar_LocationNavBar);
// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// CONCATENATED MODULE: ./components/Location/DetailAccountPage/components/Owner/index.js
var Owner_jsx = external_react_default.a.createElement;


const Owner = ({
  state: {
    firstName,
    lastName,
    email
  }
}) => Owner_jsx("div", {
  className: "card-block"
}, Owner_jsx("h3", null, "Owner"), Owner_jsx("div", {
  className: "owner-box card-panel",
  style: {
    backgroundColor: '#31837a',
    color: '#fff'
  }
}, Owner_jsx("div", {
  className: "card-panel-row row"
}, Owner_jsx("div", {
  className: "col s10"
}, Owner_jsx("div", {
  className: "user-block"
}, Owner_jsx("div", {
  className: "user-circle",
  style: {
    backgroundColor: '#9c27b0',
    color: '#fff'
  }
}, Owner_jsx("img", {
  src: "images/img-owner01.jpg",
  alt: ""
})), Owner_jsx("div", {
  className: "user-text",
  style: {
    color: '#fff'
  }
}, Owner_jsx("h4", {
  className: "h3"
}, lastName, ", ", firstName), Owner_jsx("a", {
  href: `mailto:${email}`
}, email)))), Owner_jsx("div", {
  className: "col s2 right-align"
}, Owner_jsx("span", {
  className: "block-icon"
}, Owner_jsx("i", {
  className: "icon-owner"
}), Owner_jsx("span", {
  className: "text-icon"
}, "Owner"))))));

/* harmony default export */ var components_Owner = (Owner);
// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// CONCATENATED MODULE: ./components/Location/DetailAccountPage/components/LocationContactInfo/index.js
var LocationContactInfo_jsx = external_react_default.a.createElement;





const LocationContactInfo = ({
  state: {
    locationName,
    locationNickname,
    locationEmail,
    locationPhoneNumber,
    website,
    locationStreetAddress,
    locationCity,
    locationState,
    locationZip
  } = {},
  handleDetailsChange
}) => LocationContactInfo_jsx("div", {
  className: "col s12 l5"
}, LocationContactInfo_jsx("div", {
  className: "card-block"
}, LocationContactInfo_jsx("h3", null, "Location Contact Info"), LocationContactInfo_jsx("div", {
  className: "card-main card"
}, LocationContactInfo_jsx("div", {
  className: "card-content"
}, LocationContactInfo_jsx("div", {
  className: "row mb-0"
}, LocationContactInfo_jsx("div", {
  className: "input-field col s12"
}, LocationContactInfo_jsx("input", {
  type: "text",
  id: "location-name",
  name: "locationName",
  value: locationName,
  onChange: event => handleDetailsChange(event, 'locationName', 'locationContactInfo')
}), LocationContactInfo_jsx("label", {
  className: locationName.length ? 'label active' : 'label',
  htmlFor: "location-name"
}, "Location Name*"))), LocationContactInfo_jsx("div", {
  className: "row mb-0"
}, LocationContactInfo_jsx("div", {
  className: "input-field col s12"
}, LocationContactInfo_jsx("input", {
  type: "text",
  id: "location-nickname",
  name: "locationNickname",
  value: locationNickname,
  onChange: event => handleDetailsChange(event, 'locationNickname', 'locationContactInfo')
}), LocationContactInfo_jsx("label", {
  className: locationNickname.length ? 'label active' : 'label',
  htmlFor: "location-nickname"
}, "Location Nickname*"))), LocationContactInfo_jsx("div", {
  className: "row mb-0"
}, LocationContactInfo_jsx("div", {
  className: "input-field col s12"
}, LocationContactInfo_jsx("input", {
  type: "text",
  id: "location-email",
  name: "locationEmail",
  value: locationEmail,
  onChange: event => handleDetailsChange(event, 'locationEmail', 'locationContactInfo')
}), LocationContactInfo_jsx("label", {
  className: locationEmail.length ? 'label active' : 'label',
  htmlFor: "location-email"
}, "Location Email*"))), LocationContactInfo_jsx("div", {
  className: "row mb-0"
}, LocationContactInfo_jsx("div", {
  className: "input-field col s12"
}, LocationContactInfo_jsx("input", {
  type: "tel",
  id: "location-phone",
  name: locationPhoneNumber,
  value: locationPhoneNumber,
  onChange: event => handleDetailsChange(event, 'locationPhoneNumber', 'locationContactInfo')
}), LocationContactInfo_jsx("label", {
  className: locationPhoneNumber.length ? 'label active' : 'label',
  htmlFor: "location-phone"
}, "Location Phone Number (optional)"))), LocationContactInfo_jsx("div", {
  className: "row mb-0"
}, LocationContactInfo_jsx("div", {
  className: "input-field col s12"
}, LocationContactInfo_jsx("input", {
  type: "url",
  id: "website",
  name: "website",
  value: website,
  onChange: event => handleDetailsChange(event, 'website', 'locationContactInfo')
}), LocationContactInfo_jsx("label", {
  className: "label active",
  htmlFor: "website"
}, "Website (optional)"))), LocationContactInfo_jsx("div", {
  className: "row mb-0"
}, LocationContactInfo_jsx("div", {
  className: "input-field col s12"
}, LocationContactInfo_jsx("input", {
  type: "tel",
  id: "street-address",
  name: "streetAddress",
  value: locationStreetAddress,
  onChange: event => handleDetailsChange(event, 'locationStreetAddress', 'locationContactInfo')
}), LocationContactInfo_jsx("label", {
  className: locationStreetAddress.length ? 'label active' : 'label',
  htmlFor: "street-address"
}, "Street Address (optional)"))), LocationContactInfo_jsx("div", {
  className: "row mb-0"
}, LocationContactInfo_jsx("div", {
  className: "input-field col s12"
}, LocationContactInfo_jsx("input", {
  type: "tel",
  id: "city",
  name: "city",
  value: locationCity,
  onChange: event => handleDetailsChange(event, 'locationCity', 'locationContactInfo')
}), LocationContactInfo_jsx("label", {
  className: locationCity.length ? 'label active' : 'label',
  htmlFor: "city"
}, "City (optional)"))), LocationContactInfo_jsx("div", {
  className: "row mb-0"
}, LocationContactInfo_jsx("div", {
  className: "input-field col s12 m6 l5"
}, LocationContactInfo_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(locationState, stateOptions["a" /* default */]),
  onChange: event => handleDetailsChange(event, 'locationState', 'locationContactInfo'),
  options: stateOptions["a" /* default */],
  label: "State",
  stateKey: "state",
  dropdownKey: "state"
})), LocationContactInfo_jsx("div", {
  className: "input-field col s12 m6 l7",
  style: {
    marginTop: '60px'
  }
}, LocationContactInfo_jsx("input", {
  type: "tel",
  id: "zip",
  name: "zip",
  value: locationZip,
  onChange: event => handleDetailsChange(event, 'locationZip', 'locationContactInfo')
}), LocationContactInfo_jsx("label", {
  className: locationZip.length ? 'label active' : 'label',
  htmlFor: "zip_edit"
}, "Zip (optional)")))))));

/* harmony default export */ var components_LocationContactInfo = (LocationContactInfo);
// CONCATENATED MODULE: ./components/Location/DetailAccountPage/components/LocationEmailSettings/index.js
var LocationEmailSettings_jsx = external_react_default.a.createElement;


const LocationEmailSettings = ({
  state: {
    automatedEmailOrigin,
    automatedEmailSalutation
  },
  handleDetailsChange
}) => LocationEmailSettings_jsx("div", {
  className: "card-block"
}, LocationEmailSettings_jsx("h3", null, "Location Email Settings"), LocationEmailSettings_jsx("div", {
  className: "card-main card"
}, LocationEmailSettings_jsx("div", {
  className: "card-content"
}, LocationEmailSettings_jsx("div", {
  className: "row mb-0"
}, LocationEmailSettings_jsx("div", {
  className: "input-field col s12"
}, LocationEmailSettings_jsx("input", {
  type: "text",
  id: "automated-email-origin",
  name: "automatedEmailOrigin",
  value: automatedEmailOrigin,
  onChange: event => handleDetailsChange(event, 'automatedEmailOrigin', 'locationEmailSettings')
}), LocationEmailSettings_jsx("label", {
  className: automatedEmailOrigin.length ? 'label active' : 'label',
  htmlFor: "automated-email-origin"
}, "Automated Emails Come From (email)*"))), LocationEmailSettings_jsx("div", {
  className: "row mb-0"
}, LocationEmailSettings_jsx("div", {
  className: "input-field col s12"
}, LocationEmailSettings_jsx("textarea", {
  className: "materialize-textarea",
  id: "email_salutation_edit",
  name: "automatedEmailSalutation",
  value: automatedEmailSalutation,
  onChange: event => handleDetailsChange(event, 'automatedEmailSalutation', 'locationEmailSettings')
}), LocationEmailSettings_jsx("label", {
  className: automatedEmailSalutation.length ? 'label active' : 'label',
  htmlFor: "email_salutation_edit"
}, "Automated Email Salutation*"))))));

/* harmony default export */ var components_LocationEmailSettings = (LocationEmailSettings);
// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Location/DetailAccountPage/index.js

var DetailAccountPage_jsx = external_react_default.a.createElement;







class DetailAccountPage_DetailAccountPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalLocation || nextProps.location.id !== this.state.originalLocation.id) {
        const {
          location: {
            id,
            owner,
            locationEmailSettings,
            locationContactInfo
          } = {}
        } = nextProps;
        const updatedLocation = {
          id,
          locationEmailSettings,
          locationContactInfo
        };
        const {
          originalLocation: originalLocationState
        } = this.state;
        const originalLocation = external_immutability_helper_default()(originalLocationState, {
          $merge: nextProps.location
        });
        this.setState({
          originalLocation,
          updatedLocation,
          owner
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(defineProperty["a" /* default */])(this, "onSaveChanges", async event => {
      event.preventDefault(); // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;

      const {
        updatedLocation
      } = this.state;
      const valid = await Object(fieldValidation["b" /* nestedEditFieldValidation */])(this.state, this.state.updatedLocation, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveChangesError();
        console.warn('not valid');
      }

      this.setState({
        originalLocation: updatedLocation
      }); // return onSavePassageChanges(updatedLocation);
    });

    Object(defineProperty["a" /* default */])(this, "initialLocationMount", () => this.state.originalLocation.id !== this.props.location.id);

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section) => {
      const {
        updatedLocation: previousLocationState
      } = this.state;
      const value = event.target ? event.target.value : event;
      const updatedLocation = external_immutability_helper_default()(previousLocationState, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState({
        updatedLocation
      });
    });

    this.state = {
      owner: {
        firstName: '',
        lastName: '',
        email: ''
      },
      originalLocation: {
        locationEmailSettings: {
          automatedEmailOrigin: '',
          automatedEmailSalutation: ''
        },
        locationContactInfo: {
          locationName: '',
          locationNickname: '',
          locationEmail: '',
          locationPhoneNumber: '',
          website: '',
          locationStreetAddress: '',
          locationCity: '',
          locationState: '',
          locationZip: ''
        }
      },
      updatedLocation: {
        locationEmailSettings: {
          automatedEmailOrigin: '',
          automatedEmailSalutation: ''
        },
        locationContactInfo: {
          locationName: '',
          locationNickname: '',
          locationEmail: '',
          locationPhoneNumber: '',
          website: '',
          locationStreetAddress: '',
          locationCity: '',
          locationState: '',
          locationZip: ''
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
  }

  componentDidMount() {
    const {
      location: {
        id,
        owner,
        locationEmailSettings,
        locationContactInfo
      } = {}
    } = this.props;
    const updatedLocation = {
      id,
      locationEmailSettings,
      locationContactInfo
    };
    const {
      originalLocation: originalLocationState
    } = this.state;
    const originalLocation = external_immutability_helper_default()(originalLocationState, {
      $merge: updatedLocation
    });
    this.setState({
      originalLocation,
      updatedLocation,
      owner
    }); // eslint-disable-line
  } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the location edit page
  // This resets the component state to reflect the details of the next location the location clicks on


  render() {
    // TODO: Update navbar info with actual sample location data
    const {
      updatedLocation: {
        locationEmailSettings: updatedLocationEmailSettings,
        locationContactInfo: updatedLocationContactInfo
      }
    } = this.state;
    const {
      location: {
        owner,
        locationEmailSettings,
        locationContactInfo
      }
    } = this.props;
    return DetailAccountPage_jsx("div", {
      className: "content-section"
    }, DetailAccountPage_jsx("div", {
      className: "content-section-holder"
    }, DetailAccountPage_jsx("div", {
      className: "row mb-0 d-flex-content large"
    }, DetailAccountPage_jsx("div", {
      className: "col s12 l5"
    }, DetailAccountPage_jsx(components_Owner, {
      state: owner
    }), DetailAccountPage_jsx(components_LocationEmailSettings, {
      state: this.initialLocationMount() ? locationEmailSettings : updatedLocationEmailSettings,
      handleDetailsChange: this.handleDetailsChange
    })), DetailAccountPage_jsx(components_LocationContactInfo, {
      state: this.initialLocationMount() ? locationContactInfo : updatedLocationContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), DetailAccountPage_jsx("div", {
      className: "btn-holder align-right-sm"
    }, DetailAccountPage_jsx("a", {
      href: "#",
      className: "btn",
      onClick: this.onSaveChanges
    }, "Save"))));
  }

}

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
var DetailSummaryPage_jsx = external_react_default.a.createElement;





 // eslint-disable-next-line react/prefer-stateless-function

class DetailSummaryPage_DetailSummaryPage extends external_react_default.a.Component {
  render() {
    const {
      location: {
        averageImprovement,
        pipeline,
        targetScores,
        studentImprovement,
        averagePerCourse
      }
    } = this.props;
    return DetailSummaryPage_jsx("div", {
      className: "content-section"
    }, DetailSummaryPage_jsx("div", {
      className: "content-section-holder"
    }, DetailSummaryPage_jsx("div", {
      className: "container"
    }, DetailSummaryPage_jsx("div", {
      className: "cards-section"
    }, DetailSummaryPage_jsx("div", {
      className: "dashboard-section"
    }, DetailSummaryPage_jsx("div", {
      className: "dashboard-row js-sortable js-masonry row",
      "data-masonry-options": "{\"columnWidth\": 1, \"itemSelector\": \".grid-item\", \"gutter\": 31}"
    }, DetailSummaryPage_jsx(AverageImprovement["a" /* default */], {
      state: averageImprovement
    }), DetailSummaryPage_jsx(Pipeline["a" /* default */], {
      state: pipeline
    }), DetailSummaryPage_jsx(StudentImprovement["a" /* default */], {
      state: studentImprovement
    }), DetailSummaryPage_jsx(TargetScores["a" /* default */], {
      state: targetScores
    })), DetailSummaryPage_jsx(AveragePerCourse["a" /* default */], {
      state: averagePerCourse
    }))))));
  }

}

/* harmony default export */ var Location_DetailSummaryPage = (DetailSummaryPage_DetailSummaryPage);
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

var locations_jsx = external_react_default.a.createElement;

/* eslint-disable react/jsx-indent */





 // eslint-disable-next-line react/prefer-stateless-function

class locations_Locations extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetActivePage", active => this.setState({
      active
    }));

    Object(defineProperty["a" /* default */])(this, "renderCurrentPage", () => {
      const {
        location
      } = this.props;
      const {
        active
      } = this.state;

      if (active === 'summary') {
        return locations_jsx(Location_DetailSummaryPage, {
          location: this.props.location ? location : sampleLocation
        });
      }

      if (active === 'account') {
        return locations_jsx(Location_DetailAccountPage, {
          location: this.props.location ? location : sampleLocation
        });
      }

      return null;
    });

    this.state = {
      active: 'summary'
    };
  }

  render() {
    const {
      active
    } = this.state;
    const {
      location,
      onRedirectToLocationsPage
    } = this.props;
    return !location ? locations_jsx("main", {
      id: "main",
      role: "main"
    }, locations_jsx("div", {
      className: "main-holder grey lighten-5"
    }, locations_jsx(external_react_sticky_["StickyContainer"], null, locations_jsx(components_LocationNavBar, {
      active: active,
      onSetActivePage: this.onSetActivePage,
      onRedirectToLocationsPage: onRedirectToLocationsPage,
      location: this.props.location ? location : sampleLocation
    }), this.renderCurrentPage()))) : locations_jsx("div", {
      className: "main-holder grey lighten-5"
    }, locations_jsx(external_react_sticky_["StickyContainer"], null, locations_jsx(components_LocationNavBar, {
      active: active,
      onSetActivePage: this.onSetActivePage,
      onRedirectToLocationsPage: onRedirectToLocationsPage,
      location: this.props.location ? location : sampleLocation
    }), this.renderCurrentPage()));
  }

}

/* harmony default export */ var locations = __webpack_exports__["default"] = (locations_Locations);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Nbej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const data = percentage => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: ['#00bbf7', '#eaeaea']
  }]
});

const TargetScores = ({
  state: {
    percentageHitTargetScore
  }
}) => __jsx("div", {
  className: "grid-item card-width-366 order-sm-3"
}, __jsx("div", {
  className: "card-block"
}, __jsx("h2", null, "Target Scores"), __jsx("div", {
  className: "card-main-full card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("div", {
  className: "chart-container chart-container-xllarge"
}, __jsx("div", {
  className: "chart-holder"
}, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
  data: () => data(percentageHitTargetScore),
  options: {
    circumference: 1 * Math.PI,
    rotation: 1 * Math.PI,
    cutoutPercentage: 60,
    tooltips: false
  }
}), __jsx("span", {
  className: "chart-value",
  style: {
    backgroundColor: '#00bbf7'
  }
}, __jsx("span", {
  "data-count-up": true,
  "data-start-val": "0",
  "data-end-val": `${percentageHitTargetScore}`,
  "data-duration": "1"
}, percentageHitTargetScore), "%")), __jsx("div", {
  className: "chart-row"
}, __jsx("div", {
  className: "chart-col chart-start"
}, __jsx("b", {
  className: "amount-text"
}, "Total Students")), __jsx("div", {
  className: "chart-col chart-end"
}, __jsx("b", {
  className: "amount-text"
}, "Hit Target Score"))))))));

/* harmony default export */ __webpack_exports__["a"] = (TargetScores);

/***/ }),

/***/ "Rgyi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DropdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__DropdownWrapper",
  componentId: "s47nns-0"
})(["padding:5px 0;padding-right:", ";", ";&.flex-50{flex-basis:50%!important;}"], ({
  padRight
}) => padRight ? '20px' : '', ({
  valid
}) => !valid ? `div.select__control, div.expanded-select__control, div.multi-select__control { 
        border-color: #F44336!important; 
        &:focus {
          border-color: inherit;
      }
    }` : '');
const ControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ControlWrapper",
  componentId: "s47nns-1"
})(["p{padding-left:", ";margin-bottom:5px;color:#959595;margin-top:", ";}", ";"], ({
  categoryCheck
}) => categoryCheck ? '10px' : '', ({
  categoryCheck
}) => categoryCheck ? '20px' : '', ({
  invalid
}) => invalid ? `div.multi-select__control {
      border-color: #F44336!important;
    }` : '');
/* harmony default export */ __webpack_exports__["b"] = (DropdownWrapper);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "YckE":
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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
const stateOptions = [{
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
  multiValueLabel: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    color: 'white',
    borderRadius: 'inherit',
    fontSize: 'inherit',
    overflow: 'inherit',
    padding: 'inherit',
    paddingLeft: 'inherit',
    textOverflow: 'inherit',
    whiteSpace: 'inherit',
    boxSizing: 'inherit' // backgroundColor: 'red!important',

  }),
  menuList: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles),
  dropdownIndicator: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    display: 'none'
  }),
  multiValue: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    background: 'none'
  }),
  valueContainer: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles),
  input: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    paddingTop: '9px'
  }),
  groupHeading: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles),
  control: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    boxShadow: 'none',
    borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important'
  })
});
const DropdownStyles = {
  container: (base, state) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, base, {
    opacity: state.isDisabled ? ".5" : "1",
    backgroundColor: "transparent",
    zIndex: "999"
  }),
  option: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    backgroundColor: isFocused ? '#dad8d8' : 'white',
    color: isFocused ? '#a80303' : '#333',
    clear: 'both',
    lineHeight: '22px',
    width: '100%',
    textAlign: 'left',
    fontWeight: '500',
    padding: '3px 10px 3px 19px',
    fontSize: '15px'
  }),
  control: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styles, {
    border: 'none',
    borderBottom: '1px solid',
    borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important',
    backgroundColor: 'transparent',
    borderRadius: '0',
    outline: 'none',
    boxShadow: 'none'
  })
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