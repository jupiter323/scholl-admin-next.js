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

/***/ "2Iwh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Portal */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


class Portal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    this.element = document.querySelector(this.props.selector);
    this.forceUpdate();
  }

  render() {
    if (this.element === undefined) {
      return null;
    }

    return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.children, this.element);
  }

}
/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ "325u":
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QYtH");


/***/ }),

/***/ "4jX/":
/***/ (function(module, exports) {

module.exports = require("react-color");

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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Hl4h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  id: 1,
  owner: {
    lastName: 'Bezos',
    firstName: 'Jeff',
    email: 'jeff-bezos@gmail.com'
  },
  locationContactInfo: {
    locationName: 'Amazon',
    locationNickname: 'Amazon - Online Marketplace',
    locationEmail: 'amazon@gmail.com',
    locationPhoneNumber: '123-456-7889',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: 'TX',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 15,
    pastStudents: 24,
    unactivatedStudents: 29,
    averageImprovement: 185,
    averageInitialScore: 1037,
    averageFinalScore: 1218,
    studentsAchievingTargetScore: 12
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
}, {
  id: 2,
  owner: {
    lastName: 'Chavarro',
    firstName: 'Christian',
    email: 'christian-chavarro@gmail.com'
  },
  locationContactInfo: {
    locationName: 'ChavarroLand',
    locationNickname: 'ChavarroLand - Austin, TX',
    locationEmail: 'chavarro@gmail.com',
    locationPhoneNumber: '535-432-2564',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: 'TX',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 12,
    pastStudents: 73,
    unactivatedStudents: 12,
    averageImprovement: 200,
    averageInitialScore: 1000,
    averageFinalScore: 1213,
    studentsAchievingTargetScore: 11
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
}, {
  id: 3,
  owner: {
    lastName: 'Chavis',
    firstName: 'Cellena',
    email: 'cellena-chavis@gmail.com'
  },
  locationContactInfo: {
    locationName: 'Tutor Zone',
    locationNickname: 'Tutor Zone - Orlando, FL',
    locationEmail: 'tutor-zone@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: 'TX',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 44,
    pastStudents: 32,
    unactivatedStudents: 5,
    averageImprovement: 221,
    averageInitialScore: 1200,
    averageFinalScore: 1400,
    studentsAchievingTargetScore: 23
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
}, {
  id: 4,
  owner: {
    lastName: 'Smith',
    firstName: 'Will',
    email: 'will-smithgmail.com'
  },
  locationContactInfo: {
    locationName: 'Fresh Prince',
    locationNickname: 'Fresh Prince - Philladelphia',
    locationEmail: 'fresh-prince@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Austin',
    locationState: 'TX',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 22,
    pastStudents: 13,
    unactivatedStudents: 12,
    averageImprovement: 261,
    averageInitialScore: 1100,
    averageFinalScore: 1233,
    studentsAchievingTargetScore: 10
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
}, {
  id: 5,
  owner: {
    lastName: 'Lumberjack',
    firstName: 'Arnold',
    email: 'arnold-lumberjack@gmail.com'
  },
  locationContactInfo: {
    locationName: 'Lumberjack Tutoring',
    locationNickname: 'Lumberjack Tutoring - Canada',
    locationEmail: 'lumberjack-tutoring@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Miami',
    locationState: 'FL',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 11,
    pastStudents: 24,
    unactivatedStudents: 62,
    averageImprovement: 123,
    averageInitialScore: 1269,
    averageFinalScore: 1459,
    studentsAchievingTargetScore: 9
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
}, {
  id: 6,
  owner: {
    lastName: 'Duck',
    firstName: 'Donald',
    email: 'donald-duck@gmail.com'
  },
  locationContactInfo: {
    locationName: 'Disney Learning',
    locationNickname: 'Disney Learning - San Francisco, CA',
    locationEmail: 'disney-learning@gmail.com',
    locationPhoneNumber: '331-145-7351',
    website: '',
    locationStreetAddress: '',
    locationCity: 'Miami',
    locationState: 'FL',
    locationZip: ''
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  },
  locationBasicInfo: {
    activeStudents: 45,
    pastStudents: 54,
    unactivatedStudents: 31,
    averageImprovement: 205,
    averageInitialScore: 1129,
    averageFinalScore: 1367,
    studentsAchievingTargetScore: 44
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
}]);

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

/***/ "QLkJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LocationEmailSettings = ({
  state: {
    automatedEmailOriginAddress,
    automatedEmailSalutation
  },
  handleDetailsChange
}) => __jsx("div", {
  className: "col s12 l6"
}, __jsx("div", {
  className: "card-block"
}, __jsx("h3", null, "Location Email Settings"), __jsx("div", {
  className: "card-main card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "automated-email-origin-address",
  name: "automatedEmailOriginAddress",
  value: automatedEmailOriginAddress,
  onChange: event => handleDetailsChange(event, 'automatedEmailOriginAddress', 'locationEmailSettings')
}), __jsx("label", {
  className: "label",
  htmlFor: "automated-email-origin-address"
}, "Automated Emails Come From (email)*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("textarea", {
  className: "materialize-textarea",
  id: "automated-email-salutation",
  name: "automatedEmailSalutation",
  value: automatedEmailSalutation,
  onChange: event => handleDetailsChange(event, 'automatedEmailSalutation', 'locationEmailSettings')
}), __jsx("label", {
  className: "label",
  htmlFor: "automated-email-salutation"
}, "Automated Email Salutation*")))))));

/* harmony default export */ __webpack_exports__["a"] = (LocationEmailSettings);

/***/ }),

/***/ "QYtH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// CONCATENATED MODULE: ./components/Location/ListPage/components/LocationCard/index.js
var __jsx = external_react_default.a.createElement;



const data = (value, total) => ({
  datasets: [{
    data: [value, total - value],
    backgroundColor: ['#62b771', '#eaeaea']
  }]
});

const LocationCard = ({
  index,
  handleLocationCardClick,
  location: {
    locationBasicInfo: {
      studentsAchievingTargetScore,
      activeStudents,
      pastStudents,
      unactivatedStudents,
      averageImprovement,
      averageInitialScore,
      averageFinalScore
    } = {},
    locationContactInfo: {
      locationName,
      locationNickname
    } = {}
  } = {}
}) => __jsx("div", {
  className: "card-main-col col s12 m8 l7 xl5"
}, __jsx("div", {
  className: "card-main card-location card card-large"
}, __jsx("div", {
  className: "card-panel",
  style: {
    backgroundColor: '#62b771',
    color: '#fff'
  }
}, __jsx("div", {
  className: "card-panel-row row"
}, __jsx("div", {
  className: "col s10"
}, __jsx("div", {
  className: "user-block"
}, __jsx("div", {
  className: "user-text",
  style: {
    color: '#fff'
  }
}, __jsx("h4", {
  className: "h3"
}, __jsx("a", {
  href: "#",
  onClick: () => handleLocationCardClick(index)
}, " ", locationName)), __jsx("span", {
  className: "sub-title"
}, locationNickname)))), __jsx("div", {
  className: "col s2 right-align"
}, __jsx("div", {
  className: "row icons-row"
}, __jsx("div", {
  className: "col right-align"
}, __jsx("span", {
  className: "block-icon"
}, __jsx("i", {
  className: "icon-location"
}), __jsx("span", {
  className: "text-icon"
}, "Location"))))))), __jsx("div", {
  className: "card-content"
}, __jsx("div", {
  className: "row d-flex align-items-center mb-0"
}, __jsx("div", {
  className: "col s12 m5"
}, __jsx("div", {
  className: "chart-container"
}, __jsx("div", {
  className: "chart-holder"
}, __jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => data(studentsAchievingTargetScore, pastStudents),
  height: 110,
  width: 110,
  options: {
    circumference: 1.45 * Math.PI,
    rotation: -3.85,
    cutoutPercentage: 55,
    tooltips: false
  }
}), __jsx("span", {
  className: "chart-value",
  style: {
    backgroundColor: '#62b771',
    marginBottom: '-15px'
  }
}, __jsx("span", {
  "data-count-up": true,
  "data-start-val": "0",
  "data-end-val": "91",
  "data-duration": "1"
}), Math.floor(studentsAchievingTargetScore / pastStudents * 100), "%")), __jsx("div", {
  className: "chart-description",
  style: {
    color: '#31837a',
    marginTop: '45px'
  }
}, "Students Who Achieved Target Score"))), __jsx("div", {
  className: "col s12 m7"
}, __jsx("ul", {
  className: "points-list"
}, __jsx("li", {
  className: "style-red-darken"
}, __jsx("span", {
  className: "badge-circle"
}, activeStudents), __jsx("span", {
  className: "point-text"
}, "active students")), __jsx("li", {
  className: "style-pink-darken"
}, __jsx("span", {
  className: "badge-circle"
}, pastStudents), __jsx("span", {
  className: "point-text"
}, "past students")), __jsx("li", null, __jsx("span", {
  className: "badge-circle"
}, unactivatedStudents), __jsx("span", {
  className: "point-text"
}, "unactivated students")), __jsx("li", {
  className: "style-blue-light"
}, __jsx("span", {
  className: "badge-circle"
}, "+", averageImprovement), __jsx("span", {
  className: "point-text"
}, "average improvement")), __jsx("li", {
  className: "style-blue"
}, __jsx("span", {
  className: "badge-circle"
}, averageInitialScore), __jsx("span", {
  className: "point-text"
}, "average initial score")), __jsx("li", {
  className: "style-blue-dark"
}, __jsx("span", {
  className: "badge-circle"
}, averageFinalScore), __jsx("span", {
  className: "point-text"
}, "average final score"))))))));

/* harmony default export */ var components_LocationCard = (LocationCard);
// EXTERNAL MODULE: ./components/Location/components/NewLocationModal/index.js + 2 modules
var NewLocationModal = __webpack_require__("gBDQ");

// EXTERNAL MODULE: ./components/Location/utils/sampleLocationList.js
var sampleLocationList = __webpack_require__("Hl4h");

// EXTERNAL MODULE: ./pages/locations.js + 7 modules
var locations = __webpack_require__("FBPj");

// CONCATENATED MODULE: ./components/Location/ListPage/index.js


var ListPage_jsx = external_react_default.a.createElement;
 // import PropTypes from 'prop-types';







class ListPage_LocationListPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenLocationModal", () => this.setState({
      locationModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseLocationModal", () => this.setState({
      locationModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onAddNewLocation", newLocation => this.setState(({
      locations
    }) => ({
      locations: [...locations, newLocation]
    })));

    Object(defineProperty["a" /* default */])(this, "onRedirectToLocationsPage", event => {
      event.preventDefault();
      this.setState({
        selectedLocation: null
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleLocationCardClick", index => {
      const {
        locations
      } = this.state;
      this.setState({
        selectedLocation: locations[index]
      });
    });

    Object(defineProperty["a" /* default */])(this, "mapLocations", () => this.state.locations.map((location, index) => ListPage_jsx(components_LocationCard, {
      location: location,
      key: location.id,
      index: index,
      handleLocationCardClick: this.handleLocationCardClick
    })));

    this.state = {
      locationModalOpen: false,
      locations: sampleLocationList["a" /* default */],
      selectedLocation: null
    };
  }

  render() {
    const {
      locationModalOpen,
      selectedLocation
    } = this.state;
    return ListPage_jsx(external_react_default.a.Fragment, null, !selectedLocation && ListPage_jsx("div", {
      className: "main-holder grey lighten-5"
    }, ListPage_jsx(external_react_sticky_["StickyContainer"], null, ListPage_jsx(external_react_sticky_["Sticky"], null, ({
      style
    }) => ListPage_jsx("div", {
      className: "title-row card-panel",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1999
      })
    }, ListPage_jsx("div", {
      className: "mobile-header"
    }, ListPage_jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, ListPage_jsx("i", {
      className: "material-icons"
    }, "menu"))), ListPage_jsx("h2", {
      className: "h1 white-text"
    }, ListPage_jsx("span", {
      className: "heading-holder"
    }, ListPage_jsx("i", {
      className: "icon-location"
    }), ListPage_jsx("span", {
      className: "heading-block"
    }, "Locations"))))), ListPage_jsx("div", {
      className: "content-section"
    }, ListPage_jsx("div", {
      className: "row d-flex-content"
    }, this.mapLocations())), ListPage_jsx("a", {
      href: "#",
      onClick: this.onOpenLocationModal,
      className: "waves-effect waves-teal btn add-btn"
    }, ListPage_jsx("i", {
      className: "material-icons"
    }, "add"), "New Location"), ListPage_jsx(NewLocationModal["a" /* default */], {
      open: locationModalOpen,
      onClose: this.onCloseLocationModal,
      onAddNewLocation: this.onAddNewLocation
    }))), selectedLocation && ListPage_jsx(locations["default"], {
      location: selectedLocation,
      onRedirectToLocationsPage: this.onRedirectToLocationsPage
    }) // <React.Fragment>
    // <LocationNavBar location={selectedLocation} onRedirectToLocationsPage={this.onRedirectToLocationsPage} />
    // <DetailAccountPage location={selectedLocation} />
    // </React.Fragment>
    );
  }

}

/* harmony default export */ var ListPage = (ListPage_LocationListPage);
// CONCATENATED MODULE: ./pages/all-locations.js
var all_locations_jsx = external_react_default.a.createElement;

 // eslint-disable-next-line react/prefer-stateless-function

class all_locations_LocationList extends external_react_default.a.Component {
  render() {
    return all_locations_jsx("main", {
      id: "main",
      role: "main"
    }, all_locations_jsx(ListPage, null));
  }

}

/* harmony default export */ var all_locations = __webpack_exports__["default"] = (all_locations_LocationList);

/***/ }),

/***/ "QvYC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const genderOptions = [{
  label: 'Male',
  value: 'Male'
}, {
  label: 'Female',
  value: 'Female'
}];
/* harmony default export */ __webpack_exports__["a"] = (genderOptions);

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

/***/ "fSO3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4jX/");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("x4x+");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable react/jsx-indent */




class LocationBranding extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onSetColorPicker", colorPickerField => this.setState({
      colorPickerOpen: true,
      colorPickerField
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseColorPicker", () => this.setState({
      colorPickerOpen: false,
      colorPickerField: ''
    }));

    this.state = {
      colorPickerOpen: false,
      colorPickerField: ''
    };
  }

  render() {
    const {
      state: {
        locationUrl,
        headerColor1,
        headerColor2,
        headerLogoBackgroundColor,
        headerLogoBackgroundAlpha,
        horizontalLogoVariation,
        squareLogoVariation,
        backgroundImage,
        backgroundBlur,
        backgroundOverlayAlpha,
        studentWelcomeVideo,
        instructorWelcomeVideo
      },
      handleDetailsChange
    } = this.props;
    const {
      colorPickerField,
      colorPickerOpen
    } = this.state;
    return __jsx("div", {
      className: "col s12 l6"
    }, __jsx("div", {
      className: "card-block"
    }, __jsx("h3", null, "Location Branding"), __jsx("div", {
      className: "card-main card"
    }, __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "input-field col s12"
    }, __jsx("input", {
      type: "text",
      id: "location-url",
      name: "locationUrl",
      value: locationUrl,
      onChange: event => handleDetailsChange(event, 'locationUrl', 'locationBranding')
    }), __jsx("label", {
      className: locationUrl.length ? 'label active' : 'label',
      htmlFor: "location-url"
    }, "Location Url*"))), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "input-field js-spectrum custom-colorpicker col s12 m6"
    }, __jsx("input", {
      type: "text",
      className: "js-spectrum-input",
      id: "header-color-1",
      name: "headerColor1",
      value: headerColor1,
      onClick: () => this.onSetColorPicker('headerColor1'),
      onChange: event => handleDetailsChange(event, 'headerColor1', 'locationBranding')
    }), __jsx("label", {
      className: headerColor1.length ? 'label active' : 'label',
      htmlFor: "header-color-1"
    }, "Header Color 1*"), colorPickerOpen && colorPickerField === 'headerColor1' ? __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      onOuterClick: this.onCloseColorPicker
    }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_2__["ChromePicker"], {
      color: headerColor1,
      onChange: color => handleDetailsChange(color, 'headerColor1', 'locationBranding')
    })) : null), __jsx("div", {
      className: "input-field js-spectrum custom-colorpicker col s12 m6"
    }, __jsx("input", {
      type: "text",
      className: "js-spectrum-input",
      id: "header-color-2",
      name: "headerColor2",
      value: headerColor2,
      onClick: () => this.onSetColorPicker('headerColor2'),
      onChange: event => handleDetailsChange(event, 'headerColor2', 'locationBranding')
    }), __jsx("label", {
      className: headerColor2.length ? 'label active' : 'label',
      htmlFor: "header-color-2"
    }, "Header Color 2*"), colorPickerOpen && colorPickerField === 'headerColor2' ? __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      onOuterClick: this.onCloseColorPicker
    }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_2__["ChromePicker"], {
      color: headerColor2,
      onChange: color => handleDetailsChange(color, 'headerColor2', 'locationBranding')
    })) : null)), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "input-field js-spectrum custom-colorpicker col s12 m6"
    }, __jsx("input", {
      type: "text",
      className: "js-spectrum-input",
      id: "header-logo-background-color",
      name: "headerLogoBackgroundColor",
      value: headerLogoBackgroundColor,
      onClick: () => this.onSetColorPicker('headerLogoBackgroundColor'),
      onChange: event => handleDetailsChange(event, 'headerLogoBackgroundColor', 'locationBranding')
    }), __jsx("label", {
      className: headerLogoBackgroundColor.length ? 'label active' : 'label',
      htmlFor: "header-logo-background-color"
    }, "Header Logo Background Color*"), colorPickerOpen && colorPickerField === 'headerLogoBackgroundColor' ? __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      onOuterClick: this.onCloseColorPicker
    }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_2__["ChromePicker"], {
      color: headerLogoBackgroundColor,
      onChange: color => handleDetailsChange(color, 'headerLogoBackgroundColor', 'locationBranding')
    })) : null), __jsx("div", {
      className: "input-field col s12 m6"
    }, __jsx("input", {
      type: "text",
      id: "header-logo-background-alpha",
      name: "headerLogoBackgroundAlpha",
      value: headerLogoBackgroundAlpha,
      onChange: event => handleDetailsChange(event, 'headerLogoBackgroundAlpha', 'locationBranding')
    }), __jsx("label", {
      className: headerLogoBackgroundAlpha.length ? 'label active' : 'label',
      htmlFor: "header-logo-background-alpha"
    }, "Header Logo Background Alpha*"))), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "file-input-custom file-field input-field col s12"
    }, __jsx("div", {
      className: "file-path-wrapper"
    }, __jsx("input", {
      className: "file-path",
      type: "text",
      id: "horizontal-logo-variation",
      name: "horizontalLogoVariation",
      value: horizontalLogoVariation,
      onChange: event => handleDetailsChange(event, 'horizontalLogoVariation', 'locationBranding')
    }), __jsx("label", {
      className: horizontalLogoVariation.length ? 'label active' : 'label',
      htmlFor: "horizontal-logo-variation"
    }, "Horizontal Logo Variation*")), __jsx("span", {
      className: "btn-upload"
    }, __jsx("span", {
      className: "holder-icon"
    }, __jsx("i", {
      className: "icon-upload-file"
    })), __jsx("input", {
      type: "file"
    })))), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "file-input-custom file-field input-field col s12"
    }, __jsx("div", {
      className: "file-path-wrapper"
    }, __jsx("input", {
      className: "file-path",
      type: "text",
      id: "square-logo-variation",
      name: "squareLogoVariation",
      value: squareLogoVariation,
      onChange: event => handleDetailsChange(event, 'squareLogoVariation', 'locationBranding')
    }), __jsx("label", {
      className: squareLogoVariation.length ? 'label active' : 'label',
      htmlFor: "square-logo-variation"
    }, "Square Logo Variation*")), __jsx("span", {
      className: "btn-upload"
    }, __jsx("span", {
      className: "holder-icon"
    }, __jsx("i", {
      className: "icon-upload-file"
    })), __jsx("input", {
      type: "file"
    })))), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "file-input-custom file-field input-field col s12"
    }, __jsx("div", {
      className: "file-path-wrapper"
    }, __jsx("input", {
      className: "file-path",
      type: "text",
      id: "background-image",
      name: "backgroundImage",
      value: backgroundImage,
      onChange: event => handleDetailsChange(event, 'backgroundImage', 'locationBranding')
    }), __jsx("label", {
      className: backgroundImage.length ? 'label active' : 'label',
      htmlFor: "background-image"
    }, "Background Image*")), __jsx("span", {
      className: "btn-upload"
    }, __jsx("span", {
      className: "holder-icon"
    }, __jsx("i", {
      className: "icon-upload-file"
    })), __jsx("input", {
      type: "file"
    })))), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 m6"
    }, __jsx("div", {
      className: "input-field"
    }, __jsx("input", {
      type: "text",
      id: "background-blur",
      name: "backgroundBlur",
      value: backgroundBlur,
      onChange: event => handleDetailsChange(event, 'backgroundBlur', 'locationBranding')
    }), __jsx("label", {
      className: backgroundBlur.length ? 'label active' : 'label',
      htmlFor: "background-blur"
    }, "Background Blur*"))), __jsx("div", {
      className: "col s12 m6"
    }, __jsx("div", {
      className: "input-field"
    }, __jsx("input", {
      type: "text",
      id: "background-overlay-alpha",
      name: "backgroundOverlayAlpha",
      value: backgroundOverlayAlpha,
      onChange: event => handleDetailsChange(event, 'backgroundOverlayAlpha', 'locationBranding')
    }), __jsx("label", {
      className: backgroundOverlayAlpha.length ? 'label active' : 'label',
      htmlFor: "background-overlay-alpha"
    }, "Background Overlay Alpha*")))), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "file-input-custom file-field input-field col s12"
    }, __jsx("div", {
      className: "file-path-wrapper"
    }, __jsx("input", {
      className: "file-path",
      type: "text",
      id: "student-welcome-video",
      name: "studentWelcomeVideo",
      value: studentWelcomeVideo,
      onChange: event => handleDetailsChange(event, 'studentWelcomeVideo', 'locationBranding')
    }), __jsx("label", {
      className: studentWelcomeVideo.length ? 'label active' : 'label',
      htmlFor: "student-welcome-video"
    }, "Student Welcome Video (optional)")), __jsx("span", {
      className: "btn-upload"
    }, __jsx("span", {
      className: "holder-icon"
    }, __jsx("i", {
      className: "icon-upload-file"
    })), __jsx("input", {
      type: "file"
    })))), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "file-input-custom file-field input-field col s12"
    }, __jsx("div", {
      className: "file-path-wrapper"
    }, __jsx("input", {
      className: "file-path",
      type: "text",
      id: "instructor-welcome-video",
      name: "instructorWelcomeVideo",
      value: instructorWelcomeVideo,
      onChange: event => handleDetailsChange(event, 'instructorWelcomeVideo', 'locationBranding')
    }), __jsx("label", {
      className: instructorWelcomeVideo.length ? 'label active' : 'label',
      htmlFor: "instructor-welcome-video"
    }, "Instructor Welcome Video (optional)")), __jsx("span", {
      className: "btn-upload"
    }, __jsx("span", {
      className: "holder-icon"
    }, __jsx("i", {
      className: "icon-upload-file"
    })), __jsx("input", {
      type: "file"
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (LocationBranding);

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gBDQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/ClickOffComponentWrapper/index.js
var ClickOffComponentWrapper = __webpack_require__("x4x+");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// EXTERNAL MODULE: ./components/utils/genderOptions.js
var genderOptions = __webpack_require__("QvYC");

// CONCATENATED MODULE: ./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js
var __jsx = external_react_default.a.createElement;






const OwnerContactInfo = ({
  state: {
    firstName,
    lastName,
    email,
    gender,
    phone,
    streetAddress,
    city,
    state,
    zip
  },
  handleDetailsChange
}) => __jsx("div", {
  className: "col s12 l6"
}, __jsx("div", {
  className: "card-block"
}, __jsx("h3", null, "Owner Contact Info"), __jsx("div", {
  className: "card-main card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "first-name",
  name: "firstName",
  value: firstName,
  onChange: event => handleDetailsChange(event, 'firstName', 'ownerContactInfo')
}), __jsx("label", {
  className: "label",
  htmlFor: "first-name"
}, "First Name*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "last-name",
  name: "lastName",
  value: lastName,
  onChange: event => handleDetailsChange(event, 'lastName', 'ownerContactInfo')
}), __jsx("label", {
  className: "label",
  htmlFor: "last-name"
}, "Last Name*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "email",
  name: "email",
  value: email,
  onChange: event => handleDetailsChange(event, 'email', 'ownerContactInfo')
}), __jsx("label", {
  className: "label",
  htmlFor: "email"
}, "Email Address*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12 l7"
}, __jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(gender, genderOptions["a" /* default */]),
  onChange: event => handleDetailsChange(event, 'gender', 'ownerContactInfo'),
  options: genderOptions["a" /* default */],
  label: "Gender*",
  stateKey: "gender",
  dropdownKey: "gender"
}))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "tel",
  id: "phone",
  name: "phone",
  value: phone,
  onChange: event => handleDetailsChange(event, 'phone', 'ownerContactInfo')
}), __jsx("label", {
  className: "label",
  htmlFor: "phone"
}, "Phone (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "street-address",
  name: "streetAddress",
  value: streetAddress,
  onChange: event => handleDetailsChange(event, 'streetAddress', 'ownerContactInfo')
}), __jsx("label", {
  className: "label",
  htmlFor: "street-address"
}, "Street Address (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "city",
  name: "city",
  value: city,
  onChange: event => handleDetailsChange(event, 'city', 'ownerContactInfo')
}), __jsx("label", {
  className: "label",
  htmlFor: "city"
}, "City (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "col s12 m6 l5"
}, __jsx("div", {
  className: "input-field"
}, __jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(state, stateOptions["a" /* default */]),
  onChange: event => handleDetailsChange(event, 'state', 'ownerContactInfo'),
  options: stateOptions["a" /* default */],
  label: "State (optional)",
  stateKey: "state",
  dropdownKey: "state"
}))), __jsx("div", {
  className: "col s12 m6 l7"
}, __jsx("div", {
  className: "input-field"
}, __jsx("input", {
  type: "tel",
  id: "zip",
  name: "zip",
  value: zip,
  onChange: event => handleDetailsChange(event, 'zip', 'ownerContactInfo')
}), __jsx("label", {
  className: "label",
  htmlFor: "zip"
}, "Zip (optional)"))))))));

/* harmony default export */ var components_OwnerContactInfo = (OwnerContactInfo);
// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationContactInfo/index.js
var LocationContactInfo = __webpack_require__("z6T/");

// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js
var LocationEmailSettings = __webpack_require__("QLkJ");

// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationBranding/index.js
var LocationBranding = __webpack_require__("fSO3");

// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Location/utils/initialState.js
const initialState = {
  owner: null,
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
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: ''
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: ''
  }
};
/* harmony default export */ var utils_initialState = (initialState);
// CONCATENATED MODULE: ./components/Location/components/NewLocationModal/index.js


var NewLocationModal_jsx = external_react_default.a.createElement;

/* eslint-disable no-unused-vars */











class NewLocationModal_NewLocationModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(defineProperty["a" /* default */])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        owner,
        locationContactInfo,
        locationEmailSettings,
        locationBranding
      } = this.state;
      const {
        onSaveNewLocation,
        onSaveLocationError,
        onAddNewLocation,
        fromInstructorPage = false
      } = this.props; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
      // const valid = true;

      const valid = await Object(fieldValidation["a" /* nestedCreateFieldValidation */])(this.state, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveLocationError();
        console.warn('not valid');
      }

      const postBody = {
        locationContactInfo,
        locationEmailSettings,
        locationBranding,
        owner
      };

      if (fromInstructorPage) {
        onSaveNewLocation(postBody);
      } else {
        onAddNewLocation(postBody);
      }

      console.warn('stubbed out save function');
      this.onCloseModal();
    });

    Object(defineProperty["a" /* default */])(this, "onResetLocation", () => this.setState(utils_initialState));

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetLocation();
    });

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section) => {
      let value;

      if (event.hex) {
        value = event.hex;
      } else {
        value = event.target ? event.target.value : event;
      }

      const updatedState = external_immutability_helper_default()(this.state, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState(updatedState);
    });

    this.state = {
      ownerContactInfo: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
      },
      locationEmailSettings: {
        automatedEmailOriginAddress: '',
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
      },
      locationBranding: {
        locationUrl: '',
        headerColor1: '',
        headerColor2: '',
        headerLogoBackgroundColor: '',
        headerLogoBackgroundAlpha: '',
        horizontalLogoVariation: '',
        squareLogoVariation: '',
        backgroundImage: '',
        backgroundBlur: '',
        backgroundOverlayAlpha: '',
        studentWelcomeVideo: '',
        instructorWelcomeVideo: ''
      },
      validation: {
        ownerContactInfo: {
          firstName: true,
          lastName: true,
          email: true,
          gender: true
        },
        locationEmailSettings: {
          automatedEmailOriginAddress: true,
          automatedEmailSalutation: true
        },
        locationContactInfo: {
          locationName: true,
          locationNickname: true,
          locationEmail: true
        },
        locationBranding: {
          locationUrl: true,
          headerColor1: true,
          headerColor2: true,
          headerLogoBackgroundColor: true,
          headerLogoBackgroundAlpha: true,
          horizontalLogoVariation: true,
          squareLogoVariation: true,
          backgroundImage: true,
          backgroundBlur: true,
          backgroundOverlayAlpha: true
        }
      }
    };
  } // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level


  render() {
    const {
      open
    } = this.props;
    const {
      ownerContactInfo,
      locationEmailSettings,
      locationContactInfo,
      locationBranding
    } = this.state;
    return NewLocationModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "overlay"
    }, NewLocationModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCloseModal
    }, NewLocationModal_jsx("div", {
      id: "modal_user_create",
      className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
    }, NewLocationModal_jsx("div", {
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      },
      className: "jsx-2557376288" + " " + "card-panel card-panel-title"
    }, NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-panel-row row"
    }, NewLocationModal_jsx("div", {
      style: {
        display: 'block'
      },
      className: "jsx-2557376288" + " " + "col"
    }, NewLocationModal_jsx("h3", {
      className: "jsx-2557376288" + " " + "h2"
    }, NewLocationModal_jsx("span", {
      className: "jsx-2557376288" + " " + "heading-holder"
    }, NewLocationModal_jsx("span", {
      className: "jsx-2557376288" + " " + "heading-block"
    }, "Create New Owner")))), NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col"
    }, NewLocationModal_jsx("span", {
      className: "jsx-2557376288" + " " + "block-icon"
    }, NewLocationModal_jsx("i", {
      className: "jsx-2557376288" + " " + "icon-owner"
    }), NewLocationModal_jsx("span", {
      className: "jsx-2557376288" + " " + "text-icon"
    }, "Owner"))))), NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-content"
    }, NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-body"
    }, NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "row mb-0"
    }, NewLocationModal_jsx(components_OwnerContactInfo, {
      state: ownerContactInfo,
      handleDetailsChange: this.handleDetailsChange
    }), NewLocationModal_jsx(LocationContactInfo["a" /* default */], {
      state: locationContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "row mb-0"
    }, NewLocationModal_jsx(LocationEmailSettings["a" /* default */], {
      state: locationEmailSettings,
      handleDetailsChange: this.handleDetailsChange
    }), NewLocationModal_jsx(LocationBranding["a" /* default */], {
      state: locationBranding,
      handleDetailsChange: this.handleDetailsChange
    }))), NewLocationModal_jsx("div", {
      className: "jsx-2557376288" + " " + "modal-footer"
    }, NewLocationModal_jsx("a", {
      href: "#!",
      onClick: this.onCloseModal,
      className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), NewLocationModal_jsx("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2557376288" + " " + "btn"
    }, "Save"))))))), NewLocationModal_jsx(style_default.a, {
      id: "2557376288"
    }, [".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-2557376288{margin:0;border-radius:6px;}", ".modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-2557376288{opacity:1;visibility:visible;}", ".modal-footer.jsx-2557376288{background-color:white;}"]));
  }

}

/* harmony default export */ var components_NewLocationModal = __webpack_exports__["a"] = (NewLocationModal_NewLocationModal);

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

/***/ "x4x+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOffComponentWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class ClickOffComponentWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.props.nestedModals) {
        return;
      }

      this.props.onOuterClick();
    }
  }

  render() {
    return __jsx("div", {
      className: this.props.className,
      ref: this.setWrapperRef
    }, this.props.children);
  }

}

/***/ }),

/***/ "z6T/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EABn");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/NWr");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rKn1");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





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
  },
  handleDetailsChange
}) => __jsx("div", {
  className: "col s12 l6"
}, __jsx("div", {
  className: "card-block"
}, __jsx("h3", null, "Location Contact Info"), __jsx("div", {
  className: "card-main card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "location-name",
  name: "locationName",
  value: locationName,
  onChange: event => handleDetailsChange(event, 'locationName', 'locationContactInfo')
}), __jsx("label", {
  className: locationName.length ? 'label active' : 'label',
  htmlFor: "location-name"
}, "Location Name*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "location-nickname",
  name: "locationNickname",
  value: locationNickname,
  onChange: event => handleDetailsChange(event, 'locationNickname', 'locationContactInfo')
}), __jsx("label", {
  className: locationNickname.length ? 'label active' : 'label',
  htmlFor: "location-nickname"
}, "Location Nickname*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "location-email",
  name: "locationEmail",
  value: locationEmail,
  onChange: event => handleDetailsChange(event, 'locationEmail', 'locationContactInfo')
}), __jsx("label", {
  className: locationEmail.length ? 'label active' : 'label',
  htmlFor: "location-email"
}, "Location Email*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "tel",
  id: "location-phone-number",
  name: "locationPhoneNumber",
  value: locationPhoneNumber,
  onChange: event => handleDetailsChange(event, 'locationPhoneNumber', 'locationContactInfo')
}), __jsx("label", {
  className: locationPhoneNumber.length ? 'label active' : 'label',
  htmlFor: "location-phone-number"
}, "Location Phone Number (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "url",
  id: "website",
  name: "website",
  value: website,
  onChange: event => handleDetailsChange(event, 'website', 'locationContactInfo')
}), __jsx("label", {
  className: website.length ? 'label active' : 'label',
  htmlFor: "website"
}, "Website (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "location-street-address",
  name: "locationStreetAddress",
  value: locationStreetAddress,
  onChange: event => handleDetailsChange(event, 'locationStreetAddress', 'locationContactInfo')
}), __jsx("label", {
  className: locationStreetAddress.length ? 'label active' : 'label',
  htmlFor: "location-street-address"
}, "Street Address (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "location-city",
  name: "locationCity",
  value: locationCity,
  onChange: event => handleDetailsChange(event, 'locationCity', 'locationContactInfo')
}), __jsx("label", {
  className: locationCity.length ? 'label active' : 'label',
  htmlFor: "city"
}, "City (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "col s12 m6 l5"
}, __jsx("div", {
  className: "input-field"
}, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
  value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(locationState, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]),
  onChange: event => handleDetailsChange(event, 'locationState', 'locationContactInfo'),
  options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  label: "State (optional)",
  stateKey: "locationState",
  dropdownKey: "locationState"
}))), __jsx("div", {
  className: "col s12 m6 l7"
}, __jsx("div", {
  className: "input-field"
}, __jsx("input", {
  type: "tel",
  id: "location-zip",
  name: "locationZip",
  value: locationZip,
  onChange: event => handleDetailsChange(event, 'locationZip', 'locationContactInfo')
}), __jsx("label", {
  className: locationZip.length ? 'label active' : 'label',
  htmlFor: "location-zip"
}, "Zip (optional)"))))))));

/* harmony default export */ __webpack_exports__["a"] = (LocationContactInfo);

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