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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZKJo");


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

/***/ "2Gwb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LocationCard = ({
  location: {
    locationNickname,
    locationName
  },
  onRemoveLocation
}) => __jsx("div", {
  className: "card-panel card-panel-panel card-panel-large",
  style: {
    backgroundColor: '#62b771',
    color: '#fff'
  }
}, __jsx("a", {
  href: "#",
  className: "close-link icon-close-thin",
  onClick: onRemoveLocation
}), __jsx("div", {
  className: "card-panel-row row"
}, __jsx("div", {
  className: "col s10"
}, __jsx("h3", {
  className: "h4 truncate"
}, locationNickname), __jsx("h4", {
  className: "sub-title"
}, locationName)), __jsx("div", {
  className: "col s2 right-align"
}, __jsx("span", {
  className: "block-icon"
}, __jsx("i", {
  className: "icon-location"
}), __jsx("span", {
  className: "text-icon"
}, "Location")))));

/* harmony default export */ __webpack_exports__["a"] = (LocationCard);

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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JyJo":
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

// CONCATENATED MODULE: ./components/Instructor/components/InstructorModal/components/InstructorToggleCard/index.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


const InstructorToggleCard = ({
  instructor,
  onToggleInstructorSelect
}) => __jsx("li", {
  onClick: () => onToggleInstructorSelect(instructor)
}, __jsx("input", {
  type: "checkbox"
}), __jsx("div", {
  className: "card-location card"
}, __jsx("div", {
  className: "owner-box card-panel card-panel-location",
  style: {
    backgroundColor: '#31837a',
    color: '#fff'
  }
}, __jsx("span", {
  className: "check-link icon-check"
}), __jsx("div", {
  className: "card-panel-row row"
}, __jsx("div", {
  className: "col s10"
}, __jsx("div", {
  className: "user-block"
}, __jsx("div", {
  className: "user-circle",
  style: {
    backgroundColor: '#0085ce',
    color: '#fff'
  }
}, __jsx("img", {
  src: "#",
  alt: ""
})), __jsx("div", {
  className: "user-text",
  style: {
    color: '#fff'
  }
}, __jsx("h4", {
  className: "h3"
}, instructor.lastName, ", ", instructor.firstName), __jsx("a", {
  href: `mailto:${instructor.email}`
}, instructor.email)))), __jsx("div", {
  className: "col s2 right-align"
}, __jsx("span", {
  className: "block-icon"
}, __jsx("i", {
  className: "icon-user"
}), __jsx("span", {
  className: "text-icon"
}, "Instructor")))))));

/* harmony default export */ var components_InstructorToggleCard = (InstructorToggleCard);
// EXTERNAL MODULE: ./components/utils/sampleInstructors.js
var sampleInstructors = __webpack_require__("P/Kj");

// CONCATENATED MODULE: ./components/Instructor/components/InstructorModal/index.js


var InstructorModal_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/img-redundant-alt */








const locationOptions = [{
  label: 'Any',
  value: 'all'
}, {
  label: 'Location 2',
  value: 'location2'
}, {
  label: 'Location 3',
  value: 'location3'
}];

class InstructorModal_InstructorModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => this.setState({
      selectedInstructors: []
    }, this.props.onClose));

    Object(defineProperty["a" /* default */])(this, "onToggleInstructorSelect", instructor => {
      const {
        selectedInstructors
      } = this.state;

      if (selectedInstructors.indexOf(instructor) === -1) {
        this.setState({
          selectedInstructors: [...selectedInstructors, instructor]
        });
      } else {
        const updatedInstructors = external_immutability_helper_default()(selectedInstructors, {
          $splice: [[selectedInstructors.indexOf(instructor), 1]]
        });
        this.setState({
          selectedInstructors: updatedInstructors
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSetLocation", location => this.setState({
      location
    }));

    Object(defineProperty["a" /* default */])(this, "onSaveInstructorChanges", () => {
      const {
        selectedInstructors
      } = this.state;
      const {
        handleInstructorsChange
      } = this.props;
      handleInstructorsChange(selectedInstructors);
      this.onCloseModal();
    });

    Object(defineProperty["a" /* default */])(this, "handleSearchChange", ({
      target: {
        value: searchTerm
      }
    }) => this.setState({
      searchTerm
    }));

    Object(defineProperty["a" /* default */])(this, "renderInstructors", () => {
      const {
        location,
        instructors: allInstructors,
        searchTerm
      } = this.state;
      let instructors;

      if (searchTerm) {
        instructors = allInstructors.reduce((finalArr, currentInstructor) => {
          const instructorName = `${currentInstructor.firstName}${currentInstructor.lastName}`.toLowerCase();

          if (instructorName.indexOf(searchTerm) !== -1) {
            finalArr.push(currentInstructor);
          }

          return finalArr;
        }, []);
      } else if (location === 'all') {
        instructors = allInstructors;
      } else {
        instructors = allInstructors.filter(instructor => instructor.location === location);
      }

      return instructors.map(instructor => InstructorModal_jsx(components_InstructorToggleCard, {
        key: instructor.email,
        instructor: instructor,
        onToggleInstructorSelect: this.onToggleInstructorSelect
      }));
    });

    this.state = {
      open: false,
      instructors: sampleInstructors["a" /* default */],
      location: 'all',
      searchTerm: '',
      selectedInstructors: []
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      location,
      searchTerm
    } = this.state;
    return InstructorModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "overlay"
    }, InstructorModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCloseModal
    }, InstructorModal_jsx("div", {
      id: "modal_Instructor1",
      className: "jsx-3963704857" + " " + "modal modal-custom modal-location"
    }, InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-modal card"
    }, InstructorModal_jsx("div", {
      style: {
        backgroundColor: '#00456b',
        color: '#fff'
      },
      className: "jsx-3963704857" + " " + "owner-box card-panel card-panel-title"
    }, InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-panel-row row"
    }, InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "col"
    }, InstructorModal_jsx("h3", {
      className: "jsx-3963704857"
    }, "Select Instructor(s)")))), InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-content"
    }, InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-body"
    }, InstructorModal_jsx("span", {
      className: "jsx-3963704857" + " " + "hint"
    }, "Click to select or deselect."), InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row-holder"
    }, InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "search-field input-field"
    }, InstructorModal_jsx("input", {
      type: "search",
      id: "name_search",
      name: "nameSearch",
      value: searchTerm,
      onChange: this.handleSearchChange,
      className: "jsx-3963704857" + " " + "input-control validate"
    }), InstructorModal_jsx("button", {
      type: "submit",
      className: "jsx-3963704857" + " " + "search-button"
    }, InstructorModal_jsx("i", {
      className: "jsx-3963704857" + " " + "icon-search"
    })), InstructorModal_jsx("label", {
      htmlFor: "name_search",
      className: "jsx-3963704857" + " " + ((searchTerm.length ? 'label active' : 'label') || "")
    }, "Search")), InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field"
    }, InstructorModal_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(location, locationOptions),
      onChange: this.onSetLocation,
      options: locationOptions,
      label: "State",
      stateKey: "state",
      dropdownKey: "state"
    }))), InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "box-scrollable"
    }, InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "height-40 jcf-scrollable"
    }, InstructorModal_jsx("div", {
      style: {
        height: '100%',
        overflowY: 'scroll'
      },
      className: "jsx-3963704857" + " " + "card-location-holder"
    }, InstructorModal_jsx("ul", {
      className: "jsx-3963704857" + " " + "checkbox-list"
    }, this.renderInstructors()))))), InstructorModal_jsx("div", {
      className: "jsx-3963704857" + " " + "modal-footer"
    }, InstructorModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-3963704857" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), InstructorModal_jsx("a", {
      href: "#",
      onClick: this.onSaveInstructorChanges,
      className: "jsx-3963704857" + " " + "btn"
    }, "Add"))))))), InstructorModal_jsx(style_default.a, {
      id: "3963704857"
    }, [".overlay.jsx-3963704857{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-3963704857{margin:0;border-radius:6px;}", "#modal_Location1.jsx-3963704857{border-radius:6px;}", ".modal.jsx-3963704857{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-3963704857{opacity:1;visibility:visible;}", ".modal-footer.jsx-3963704857{background-color:white;}"]));
  }

}

/* harmony default export */ var components_InstructorModal = __webpack_exports__["a"] = (InstructorModal_InstructorModal);

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

/***/ "P/Kj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
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

/***/ "R12m":
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

// CONCATENATED MODULE: ./components/Location/components/LocationModal/components/LocationToggleCard/index.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


const LocationToggleCard = ({
  location,
  onToggleLocationSelect
}) => __jsx("li", {
  onClick: () => onToggleLocationSelect(location)
}, __jsx("input", {
  type: "checkbox"
}), __jsx("div", {
  className: "card-location card card-large"
}, __jsx("div", {
  className: "card-panel card-panel-location",
  style: {
    backgroundColor: '#62b771',
    color: '#fff'
  }
}, __jsx("span", {
  className: "check-link icon-check"
}), __jsx("div", {
  className: "card-panel-row row"
}, __jsx("div", {
  className: "col s10"
}, __jsx("h3", {
  className: "h4 truncate"
}, location.locationNickname), __jsx("h4", {
  className: "sub-title"
}, location.locationName)), __jsx("div", {
  className: "col s2 right-align"
}, __jsx("span", {
  className: "block-icon"
}, __jsx("i", {
  className: "icon-location"
}), __jsx("span", {
  className: "text-icon"
}, "Location")))))));

/* harmony default export */ var components_LocationToggleCard = (LocationToggleCard);
// CONCATENATED MODULE: ./components/utils/sampleLocations.js
/* harmony default export */ var sampleLocations = ([{
  locationNickname: 'Disneyworld  Tutoring',
  locationName: 'House Of Mouse'
}, {
  locationNickname: 'TutorZone Austin',
  locationName: 'We Teach Real Good'
}, {
  locationNickname: 'TutorZone Miami',
  locationName: 'We Teach Even Better'
}, {
  locationNickname: 'Disneyworld  Tutoring2',
  locationName: 'House Of Goofy'
}, {
  locationNickname: 'TutorZone Austin2',
  locationName: 'We Teach Good'
}, {
  locationNickname: 'TutorZone Miami2',
  locationName: 'We Teach The Best'
}]);
// CONCATENATED MODULE: ./components/Location/components/LocationModal/index.js


var LocationModal_jsx = external_react_default.a.createElement;







class LocationModal_LocationModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => this.setState({
      selectedLocations: []
    }, this.props.onClose));

    Object(defineProperty["a" /* default */])(this, "onToggleLocationSelect", location => {
      const {
        selectedLocations
      } = this.state;

      if (selectedLocations.indexOf(location) === -1) {
        this.setState({
          selectedLocations: [...selectedLocations, location]
        });
      } else {
        const updatedLocations = external_immutability_helper_default()(selectedLocations, {
          $splice: [[selectedLocations.indexOf(location), 1]]
        });
        this.setState({
          selectedLocations: updatedLocations
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSaveLocationChanges", () => {
      const {
        selectedLocations
      } = this.state;
      const {
        handleLocationsChange
      } = this.props;
      handleLocationsChange(selectedLocations);
      this.onCloseModal();
    });

    this.state = {
      open: false,
      locations: sampleLocations,
      selectedLocations: []
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      locations
    } = this.state;
    return LocationModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "overlay"
    }, LocationModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCloseModal
    }, LocationModal_jsx("div", {
      id: "modal_Location1",
      className: "jsx-3776783325" + " " + "modal modal-custom modal-location"
    }, LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "card-modal card"
    }, LocationModal_jsx("div", {
      style: {
        backgroundColor: '#00456b',
        color: '#fff'
      },
      className: "jsx-3776783325" + " " + "owner-box card-panel card-panel-title"
    }, LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "card-panel-row row"
    }, LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "col"
    }, LocationModal_jsx("h3", {
      className: "jsx-3776783325"
    }, "Select Locations(s)")))), LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "card-content"
    }, LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "card-body"
    }, LocationModal_jsx("span", {
      className: "jsx-3776783325" + " " + "hint"
    }, "Click to select or deselect."), LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "box-scrollable"
    }, LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "height-40 jcf-scrollable"
    }, LocationModal_jsx("div", {
      style: {
        height: '100%',
        overflowY: 'scroll'
      },
      className: "jsx-3776783325" + " " + "card-location-holder"
    }, LocationModal_jsx("ul", {
      className: "jsx-3776783325" + " " + "checkbox-list"
    }, locations.map(location => LocationModal_jsx(components_LocationToggleCard, {
      key: location.locationName,
      location: location,
      onToggleLocationSelect: this.onToggleLocationSelect
    }))))))), LocationModal_jsx("div", {
      className: "jsx-3776783325" + " " + "modal-footer"
    }, LocationModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-3776783325" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), LocationModal_jsx("a", {
      href: "#",
      onClick: this.onSaveLocationChanges,
      className: "jsx-3776783325" + " " + "btn"
    }, "Add"))))))), LocationModal_jsx(style_default.a, {
      id: "3776783325"
    }, ["h4.jsx-3776783325{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", ".overlay.jsx-3776783325{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-3776783325{margin:0;border-radius:6px;}", "#modal_Location1.jsx-3776783325{border-radius:6px;}", ".modal.jsx-3776783325{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-3776783325{opacity:1;visibility:visible;}", ".modal-footer.jsx-3776783325{background-color:white;}"]));
  }

}

/* harmony default export */ var components_LocationModal = __webpack_exports__["a"] = (LocationModal_LocationModal);

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

/***/ "ZKJo":
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

// CONCATENATED MODULE: ./components/Instructor/components/InstructorNavBar/index.js

var __jsx = external_react_default.a.createElement;

 // eslint-disable-next-line react/prefer-stateless-function

class InstructorNavBar_InstructorNavBar extends external_react_default.a.Component {
  render() {
    const {
      active,
      onSetActivePage
    } = this.props;
    return __jsx(external_react_sticky_["Sticky"], {
      id: "sticky"
    }, ({
      style
    }) => __jsx("div", {
      className: "title-row card-panel",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 999
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
      className: "breadcrumb"
    }, "<  Instructors"))), __jsx("h2", {
      className: "h1 white-text"
    }, __jsx("span", {
      className: "heading-holder"
    }, __jsx("i", {
      className: "icon-instructors"
    }), __jsx("span", {
      className: "heading-block"
    }, "George Tutorly"))), __jsx("nav", {
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
    }, "Account")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: () => onSetActivePage('managementSettings'),
      className: active === 'managementSettings' ? 'active' : ''
    }, "Management Settings"))))));
  }

}

;
/* harmony default export */ var components_InstructorNavBar = (InstructorNavBar_InstructorNavBar);
// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./components/Location/components/LocationCard/index.js
var LocationCard = __webpack_require__("2Gwb");

// CONCATENATED MODULE: ./components/Instructor/DetailManagementPage/components/LocationsToManage/index.js
var LocationsToManage_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-array-index-key */



const LocationsToManage = ({
  state: {
    locations
  },
  onOpenLocationModal,
  onRemoveLocation
}) => LocationsToManage_jsx("div", {
  className: "col s12 l5"
}, LocationsToManage_jsx("div", {
  className: "card-block"
}, LocationsToManage_jsx("h3", null, "Locations to Manage"), LocationsToManage_jsx("div", {
  className: "card-main card card-instructor"
}, LocationsToManage_jsx("div", {
  className: "card-content"
}, LocationsToManage_jsx("div", {
  className: "text-block"
}, LocationsToManage_jsx("p", null, "If this user manages one or more locations/branches, add them below. This user will be able to view and edit the accounts for all instructors and students at selected locations. ")), LocationsToManage_jsx("div", {
  className: "box-scrollable"
}, LocationsToManage_jsx("div", {
  className: "height-360 jcf-scrollable"
}, LocationsToManage_jsx("div", {
  className: "card-location-holder",
  style: {
    height: '100%',
    overflowY: 'scroll'
  }
}, !locations.length && LocationsToManage_jsx("div", {
  className: "add-class-box"
}), locations.map((location, index) => LocationsToManage_jsx(LocationCard["a" /* default */], {
  key: index,
  location: location,
  onRemoveLocation: () => onRemoveLocation(index, 'locationsToManage', 'locations')
}))))), LocationsToManage_jsx("div", {
  className: "card-footer right-align"
}, LocationsToManage_jsx("a", {
  href: "#",
  onClick: onOpenLocationModal,
  className: "modal-trigger link-block"
}, "Add Location"))))));

/* harmony default export */ var components_LocationsToManage = (LocationsToManage);
// EXTERNAL MODULE: ./components/Instructor/components/InstructorCard/index.js
var InstructorCard = __webpack_require__("i1q9");

// CONCATENATED MODULE: ./components/Instructor/DetailManagementPage/components/InstructorsToManage/index.js
var InstructorsToManage_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-array-index-key */



const InstructorsToManage = ({
  state: {
    instructors
  },
  onOpenInstructorModal,
  onRemoveInstructor
}) => InstructorsToManage_jsx("div", {
  className: "col s12 l5"
}, InstructorsToManage_jsx("div", {
  className: "card-block"
}, InstructorsToManage_jsx("h3", null, "Instructors to Manage"), InstructorsToManage_jsx("div", {
  className: "card-main card card-instructor"
}, InstructorsToManage_jsx("div", {
  className: "card-content"
}, InstructorsToManage_jsx("div", {
  className: "text-block"
}, InstructorsToManage_jsx("p", null, "Add each instructor that you\u2019d like to allow this user to manage. For each instructor you add, this user will be able to view and edit the selected instructor\u2019s account, as well as the accounts of each of the instructor\u2019s students.")), InstructorsToManage_jsx("div", {
  className: "box-scrollable"
}, InstructorsToManage_jsx("div", {
  className: "height-360 jcf-scrollable"
}, InstructorsToManage_jsx("div", {
  className: "card-location-holder",
  style: {
    height: '100%',
    overflowY: 'scroll'
  }
}, !instructors.length && InstructorsToManage_jsx("div", {
  className: "add-class-box"
}), instructors.map((instructor, index) => InstructorsToManage_jsx(InstructorCard["a" /* default */], {
  key: index,
  instructor: instructor,
  onRemoveInstructor: () => onRemoveInstructor(index, 'instructorsToManage', 'instructors')
}))))), InstructorsToManage_jsx("div", {
  className: "card-footer right-align"
}, InstructorsToManage_jsx("a", {
  href: "#",
  onClick: onOpenInstructorModal,
  className: "modal-trigger link-block"
}, "Add Instructor"))))));

/* harmony default export */ var components_InstructorsToManage = (InstructorsToManage);
// CONCATENATED MODULE: ./components/Instructor/DetailManagementPage/components/FullAccess/index.js
var FullAccess_jsx = external_react_default.a.createElement;


const FullAccess = ({
  fullAccess,
  toggleFullAccess
}) => FullAccess_jsx("div", {
  className: "col s12 l5"
}, FullAccess_jsx("div", {
  className: "card-block"
}, FullAccess_jsx("h3", null, "Full Access (be careful!)"), FullAccess_jsx("div", {
  className: "card-main card card-instructor"
}, FullAccess_jsx("div", {
  className: "card-content"
}, FullAccess_jsx("div", {
  className: "row mb-0"
}, FullAccess_jsx("div", {
  className: "col s12"
}, FullAccess_jsx("div", {
  className: "large"
}, FullAccess_jsx("p", null, `To give this instructor full access to all students and instructors, select “Full Access." Caution: this option will give this user access to your whole organization.`), FullAccess_jsx("label", null, FullAccess_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  value: fullAccess,
  onChange: toggleFullAccess
}), FullAccess_jsx("span", {
  className: "large-label"
}, "Full Access")))))))));

/* harmony default export */ var components_FullAccess = (FullAccess);
// EXTERNAL MODULE: ./components/Location/components/LocationModal/index.js + 2 modules
var LocationModal = __webpack_require__("R12m");

// EXTERNAL MODULE: ./components/Instructor/components/InstructorModal/index.js + 1 modules
var InstructorModal = __webpack_require__("JyJo");

// CONCATENATED MODULE: ./components/Instructor/DetailManagementPage/index.js

var DetailManagementPage_jsx = external_react_default.a.createElement;








class DetailManagementPage_DetailManagementPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalUser || nextProps.user.id !== this.state.originalUser.id) {
        const {
          user: {
            id,
            locationsToManage,
            instructorsToManage,
            fullAccess
          } = {}
        } = nextProps;
        const updatedUser = {
          id,
          locationsToManage,
          instructorsToManage,
          fullAccess
        };
        const {
          originalUser: originalUserState
        } = this.state;
        const originalUser = external_immutability_helper_default()(originalUserState, {
          $merge: nextProps.user
        });
        this.setState({
          originalUser,
          updatedUser
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onOpenLocationModal", () => this.setState({
      locationModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseLocationModal", () => this.setState({
      locationModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenInstructorModal", () => this.setState({
      instructorModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseInstructorModal", () => this.setState({
      instructorModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onSaveChanges", event => {
      event.preventDefault();
      const {
        updatedUser
      } = this.state;
      this.setState({
        originalUser: updatedUser
      });
      console.warn('stubbed out success toast');
    });

    Object(defineProperty["a" /* default */])(this, "onRemoveOption", (optionIndex, section, array) => {
      const updatedUser = external_immutability_helper_default()(this.state.updatedUser, {
        [section]: {
          [array]: {
            $splice: [[optionIndex, 1]]
          }
        }
      });
      this.setState({
        updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(this, "toggleFullAccess", () => this.setState(({
      fullAccess
    }) => ({
      fullAccess: !fullAccess
    })));

    Object(defineProperty["a" /* default */])(this, "handleOptionsChange", (selectedOptions, section, array) => {
      const updatedUser = external_immutability_helper_default()(this.state.updatedUser, {
        [section]: {
          [array]: {
            $set: selectedOptions
          }
        }
      });
      this.setState({
        updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(this, "initialUserMount", () => this.state.originalUser.id !== this.props.user.id);

    this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
      originalUser: {
        locationsToManage: {
          locations: []
        },
        instructorsToManage: {
          instructors: []
        },
        fullAccess: false
      },
      updatedUser: {
        locationsToManage: {
          locations: []
        },
        instructorsToManage: {
          instructors: []
        },
        fullAccess: false
      }
    };
  }

  componentDidMount() {
    const {
      user: {
        id,
        locationsToManage,
        instructorsToManage,
        fullAccess
      } = {}
    } = this.props;
    const updatedUser = {
      id,
      locationsToManage,
      instructorsToManage,
      fullAccess
    };
    const {
      originalUser: originalUserState
    } = this.state;
    const originalUser = external_immutability_helper_default()(originalUserState, {
      $merge: updatedUser
    });
    this.setState({
      originalUser,
      updatedUser
    }); // eslint-disable-line
  } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
  // This resets the component state to reflect the details of the next user the user clicks on


  render() {
    const {
      locationModalOpen,
      instructorModalOpen,
      updatedUser: {
        locationsToManage: updatedLocations,
        instructorsToManage: updatedInstructors,
        fullAccess: updatedFullAccess
      }
    } = this.state;
    const {
      user: {
        instructorsToManage,
        locationsToManage,
        fullAccess
      }
    } = this.props;
    return DetailManagementPage_jsx(external_react_default.a.Fragment, null, DetailManagementPage_jsx(LocationModal["a" /* default */], {
      open: locationModalOpen,
      onClose: this.onCloseLocationModal,
      handleLocationsChange: selectedLocations => this.handleOptionsChange(selectedLocations, 'locationsToManage', 'locations')
    }), DetailManagementPage_jsx(InstructorModal["a" /* default */], {
      open: instructorModalOpen,
      onClose: this.onCloseInstructorModal,
      handleInstructorsChange: selectedInstructors => this.handleOptionsChange(selectedInstructors, 'instructorsToManage', 'instructors')
    }), DetailManagementPage_jsx("div", {
      className: "content-section"
    }, DetailManagementPage_jsx("div", {
      className: "content-section-holder"
    }, DetailManagementPage_jsx("div", {
      className: "row mb-0 d-flex-content large"
    }, DetailManagementPage_jsx(components_LocationsToManage, {
      state: this.initialUserMount() ? locationsToManage : updatedLocations,
      onOpenLocationModal: this.onOpenLocationModal,
      onRemoveLocation: this.onRemoveOption
    }), DetailManagementPage_jsx(components_InstructorsToManage, {
      state: this.initialUserMount() ? instructorsToManage : updatedInstructors,
      onOpenInstructorModal: this.onOpenInstructorModal,
      onRemoveInstructor: this.onRemoveOption
    }), DetailManagementPage_jsx(components_FullAccess, {
      fullAccess: this.initialUserMount() ? fullAccess : updatedFullAccess,
      toggleFullAccess: this.toggleFullAccess
    })), DetailManagementPage_jsx("div", {
      className: "btn-holder align-right-sm"
    }, DetailManagementPage_jsx("a", {
      href: "#",
      className: "btn",
      onClick: this.onSaveChanges
    }, "Save")))));
  }

}

/* harmony default export */ var Instructor_DetailManagementPage = (DetailManagementPage_DetailManagementPage);
// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// EXTERNAL MODULE: ./components/utils/genderOptions.js
var genderOptions = __webpack_require__("QvYC");

// CONCATENATED MODULE: ./components/Instructor/DetailAccountPage/components/UserInfo/index.js
var UserInfo_jsx = external_react_default.a.createElement;





const UserInfo = ({
  state: {
    firstName,
    lastName,
    email,
    gender
  },
  handleDetailsChange
}) => UserInfo_jsx("div", {
  className: "card-block"
}, UserInfo_jsx("h3", null, "User Info"), UserInfo_jsx("div", {
  className: "card-main card card-instructor"
}, UserInfo_jsx("div", {
  className: "card-content"
}, UserInfo_jsx("div", {
  className: "row mb-0"
}, UserInfo_jsx("div", {
  className: "input-field col s12"
}, UserInfo_jsx("input", {
  type: "text",
  id: "first-name",
  name: "firstName",
  value: firstName,
  onChange: event => handleDetailsChange(event, 'firstName', 'userInfo')
}), UserInfo_jsx("label", {
  className: firstName.length ? 'label active' : 'label',
  htmlFor: "first-name"
}, "First Name*"))), UserInfo_jsx("div", {
  className: "row mb-0"
}, UserInfo_jsx("div", {
  className: "input-field col s12"
}, UserInfo_jsx("input", {
  type: "text",
  id: "last-name",
  name: "lastName",
  value: lastName,
  onChange: event => handleDetailsChange(event, 'lastName', 'userInfo')
}), UserInfo_jsx("label", {
  className: lastName.length ? 'label active' : 'label',
  htmlFor: "last-name"
}, "Last Name*"))), UserInfo_jsx("div", {
  className: "row mb-0"
}, UserInfo_jsx("div", {
  className: "input-field col s12"
}, UserInfo_jsx("input", {
  type: "text",
  id: "email",
  name: email,
  value: email,
  onChange: event => handleDetailsChange(event, 'email', 'userInfo')
}), UserInfo_jsx("label", {
  className: email.length ? 'label active' : 'label',
  htmlFor: "email"
}, "Email Address*"))), UserInfo_jsx("div", {
  className: "row mb-0"
}, UserInfo_jsx("div", {
  className: ""
}, UserInfo_jsx("div", {
  className: "input-field col s6 l7"
}, UserInfo_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(gender, genderOptions["a" /* default */]),
  onChange: event => handleDetailsChange(event, 'gender', 'userInfo'),
  options: genderOptions["a" /* default */],
  label: "Gender*",
  stateKey: "gender",
  dropdownKey: "gender"
})))))));

/* harmony default export */ var components_UserInfo = (UserInfo);
// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// CONCATENATED MODULE: ./components/Instructor/DetailAccountPage/components/ContactInfo/index.js
var ContactInfo_jsx = external_react_default.a.createElement;





const ContactInfo = ({
  state: {
    phone,
    streetAddress,
    city,
    state,
    zip
  },
  handleDetailsChange
}) => ContactInfo_jsx("div", {
  className: "card-block"
}, ContactInfo_jsx("h3", null, "Contact Info"), ContactInfo_jsx("div", {
  className: "card-main card card-instructor"
}, ContactInfo_jsx("div", {
  className: "card-content"
}, ContactInfo_jsx("div", {
  className: "row mb-0"
}, ContactInfo_jsx("div", {
  className: "input-field col s12"
}, ContactInfo_jsx("input", {
  type: "tel",
  id: "phone",
  name: "phone",
  value: phone,
  onChange: event => handleDetailsChange(event, 'phone', 'contactInfo')
}), ContactInfo_jsx("label", {
  className: phone.length ? 'label active' : 'label',
  htmlFor: "phone"
}, "Phone (optional)"))), ContactInfo_jsx("div", {
  className: "row mb-0"
}, ContactInfo_jsx("div", {
  className: "input-field col s12"
}, ContactInfo_jsx("input", {
  type: "text",
  id: "street-address",
  name: "streetAddress",
  value: streetAddress,
  onChange: event => handleDetailsChange(event, 'streetAddress', 'contactInfo')
}), ContactInfo_jsx("label", {
  className: streetAddress.length ? 'label active' : 'label',
  htmlFor: "street-address"
}, "Street Address (optional)"))), ContactInfo_jsx("div", {
  className: "row mb-0"
}, ContactInfo_jsx("div", {
  className: "input-field col s12"
}, ContactInfo_jsx("input", {
  type: "text",
  id: "city",
  name: "city",
  value: city,
  onChange: event => handleDetailsChange(event, 'city', 'contactInfo')
}), ContactInfo_jsx("label", {
  className: city.length ? 'label active' : 'label',
  htmlFor: "city"
}, "City (optional)"))), ContactInfo_jsx("div", {
  className: "row mb-0"
}, ContactInfo_jsx("div", {
  className: "col s6 l5"
}, ContactInfo_jsx("div", {
  className: "input-field"
}, ContactInfo_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(state, stateOptions["a" /* default */]),
  onChange: event => handleDetailsChange(event, 'state', 'contactInfo'),
  options: stateOptions["a" /* default */],
  label: "State (optional)",
  stateKey: "state",
  dropdownKey: "state"
}))), ContactInfo_jsx("div", {
  className: "col s6 l7"
}, ContactInfo_jsx("div", {
  className: "input-field"
}, ContactInfo_jsx("input", {
  type: "tel",
  id: "zip",
  name: "zip",
  value: zip,
  onChange: event => handleDetailsChange(event, 'zip', 'contactInfo')
}), ContactInfo_jsx("label", {
  className: zip.length ? 'label active' : 'label',
  htmlFor: "zip"
}, "Zip (optional)")))))));

/* harmony default export */ var components_ContactInfo = (ContactInfo);
// CONCATENATED MODULE: ./components/Instructor/DetailAccountPage/components/UserLocation/index.js
var UserLocation_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-array-index-key */



const UserLocation = ({
  state: {
    locations
  },
  onOpenLocationModal,
  onRemoveLocation
}) => UserLocation_jsx("div", {
  className: "col s12 l5"
}, UserLocation_jsx("div", {
  className: "card-block"
}, UserLocation_jsx("h3", null, "User\u2019s Location"), UserLocation_jsx("div", {
  className: "card-main card card-instructor"
}, UserLocation_jsx("div", {
  className: "card-content"
}, UserLocation_jsx("div", {
  className: "text-block"
}, UserLocation_jsx("p", null, "Select the location/branch where this instructor works. Depending on your settings, you may have more than one location. If this instructor works at multiple locations, select all that apply."), UserLocation_jsx("p", null, "Note: Unless you speci\uFB01cally grant additional access, this instructor will only be able to access his or her own students.")), UserLocation_jsx("div", {
  className: "box-scrollable"
}, UserLocation_jsx("div", {
  className: "height-275 jcf-scrollable"
}, UserLocation_jsx("div", {
  className: "card-location-holder"
}, !locations.length && UserLocation_jsx("div", {
  className: "add-class-box"
}), locations.map((location, index) => UserLocation_jsx(LocationCard["a" /* default */], {
  key: index,
  location: location,
  onRemoveLocation: () => onRemoveLocation(index, 'userLocation', 'locations')
}))))), UserLocation_jsx("div", {
  className: "card-footer right-align"
}, UserLocation_jsx("a", {
  href: "#",
  className: "modal-trigger link-block",
  onClick: onOpenLocationModal
}, "Add Location"))))));

/* harmony default export */ var components_UserLocation = (UserLocation);
// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Instructor/DetailAccountPage/index.js

var DetailAccountPage_jsx = external_react_default.a.createElement;

/* eslint-disable no-unused-vars */








class DetailAccountPage_DetailAccountPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalUser || nextProps.user.id !== this.state.originalUser.id) {
        const {
          user: {
            id,
            userInfo,
            contactInfo,
            userLocation
          } = {}
        } = nextProps;
        const updatedUser = {
          id,
          userInfo,
          contactInfo,
          userLocation
        };
        const {
          originalUser: originalUserState
        } = this.state;
        const originalUser = external_immutability_helper_default()(originalUserState, {
          $merge: nextProps.user
        });
        this.setState({
          originalUser,
          updatedUser
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onOpenLocationModal", () => this.setState({
      locationModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseLocationModal", () => this.setState({
      locationModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(defineProperty["a" /* default */])(this, "onSaveChanges", async event => {
      event.preventDefault(); // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;

      const {
        updatedUser
      } = this.state;
      const valid = await Object(fieldValidation["b" /* nestedEditFieldValidation */])(this.state, this.state.updatedUser, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveChangesError();
        console.warn('not valid');
      }

      this.setState({
        originalUser: this.state.updatedUser
      }); // return onSavePassageChanges(updatedUser);
    });

    Object(defineProperty["a" /* default */])(this, "onRemoveOption", (optionIndex, section, array) => {
      const updatedUser = external_immutability_helper_default()(this.state.updatedUser, {
        [section]: {
          [array]: {
            $splice: [[optionIndex, 1]]
          }
        }
      });
      this.setState({
        updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(this, "initialUserMount", () => this.state.originalUser.id !== this.props.user.id);

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section) => {
      const {
        updatedUser: previousUserState
      } = this.state;
      const value = event.target ? event.target.value : event;
      const updatedUser = external_immutability_helper_default()(previousUserState, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState({
        updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleOptionsChange", (selectedOptions, section, array) => {
      const updatedUser = external_immutability_helper_default()(this.state.updatedUser, {
        [section]: {
          [array]: {
            $set: selectedOptions
          }
        }
      });
      this.setState({
        updatedUser
      });
    });

    this.state = {
      locationModalOpen: false,
      originalUser: {
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: ''
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: ''
        },
        userLocation: {
          locations: []
        }
      },
      updatedUser: {
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: ''
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: ''
        },
        userLocation: {
          locations: []
        }
      },
      validation: {
        userInfo: {
          firstName: true,
          lastName: true,
          email: true,
          gender: true
        }
      }
    };
  }

  componentDidMount() {
    const {
      user: {
        id,
        userInfo,
        contactInfo,
        userLocation
      } = {}
    } = this.props;
    const updatedUser = {
      id,
      userInfo,
      contactInfo,
      userLocation
    };
    const {
      originalUser: originalUserState
    } = this.state;
    const originalUser = external_immutability_helper_default()(originalUserState, {
      $merge: updatedUser
    });
    this.setState({
      originalUser,
      updatedUser
    }); // eslint-disable-line
  } // This resets the component state to reflect the details of the next user the user clicks on


  render() {
    const {
      locationModalOpen,
      updatedUser: {
        userInfo: updatedUserInfo,
        contactInfo: updatedContactInfo,
        userLocation: updatedUserLocation
      }
    } = this.state;
    const {
      user: {
        userInfo,
        contactInfo,
        userLocation
      }
    } = this.props;
    return DetailAccountPage_jsx(external_react_default.a.Fragment, null, DetailAccountPage_jsx(LocationModal["a" /* default */], {
      open: locationModalOpen,
      onClose: this.onCloseLocationModal,
      handleLocationsChange: selectedLocations => this.handleOptionsChange(selectedLocations, 'userLocation', 'locations')
    }), DetailAccountPage_jsx("div", {
      className: "content-section"
    }, DetailAccountPage_jsx("div", {
      className: "content-section-holder"
    }, DetailAccountPage_jsx("div", {
      className: "row mb-0 d-flex-content large"
    }, DetailAccountPage_jsx("div", {
      className: "col s12 l5"
    }, DetailAccountPage_jsx(components_UserInfo, {
      state: this.initialUserMount() ? userInfo : updatedUserInfo,
      handleDetailsChange: this.handleDetailsChange
    }), DetailAccountPage_jsx(components_ContactInfo, {
      state: this.initialUserMount() ? contactInfo : updatedContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), DetailAccountPage_jsx(components_UserLocation, {
      state: this.initialUserMount() ? userLocation : updatedUserLocation,
      onOpenLocationModal: this.onOpenLocationModal,
      onRemoveLocation: this.onRemoveOption
    })), DetailAccountPage_jsx("div", {
      className: "btn-holder align-right-sm"
    }, DetailAccountPage_jsx("a", {
      href: "#",
      className: "btn",
      onClick: this.onSaveChanges
    }, "Save")))));
  }

}

/* harmony default export */ var Instructor_DetailAccountPage = (DetailAccountPage_DetailAccountPage);
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

// CONCATENATED MODULE: ./components/Instructor/DetailSummaryPage/index.js
var DetailSummaryPage_jsx = external_react_default.a.createElement;





 // eslint-disable-next-line react/prefer-stateless-function

class DetailSummaryPage_InstructorDetailSummaryPage extends external_react_default.a.Component {
  render() {
    const {
      user: {
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

/* harmony default export */ var DetailSummaryPage = (DetailSummaryPage_InstructorDetailSummaryPage);
// CONCATENATED MODULE: ./components/Instructor/utils/sampleUser.js
const sampleUser_updatedUser = {
  id: '1232',
  userInfo: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    email: 'christian-chavarro@email.com',
    gender: 'Male'
  },
  contactInfo: {
    phone: '123-456-7890',
    streetAddress: '1234 Test Lane',
    city: 'Austin',
    state: 'TX',
    zip: '78751'
  },
  locationsToManage: {
    locations: [{
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  userLocation: {
    locations: [{
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructorsToManage: {
    instructors: [{
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  fullAccess: false,
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
};
/* harmony default export */ var sampleUser = (sampleUser_updatedUser);
// CONCATENATED MODULE: ./pages/instructors.js

var instructors_jsx = external_react_default.a.createElement;








class instructors_Instructors extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetActivePage", active => this.setState({
      active
    }));

    Object(defineProperty["a" /* default */])(this, "renderCurrentPage", () => {
      const {
        active
      } = this.state;

      if (active === "summary") {
        return instructors_jsx(DetailSummaryPage, {
          user: sampleUser
        });
      }

      if (active === "account") {
        return instructors_jsx(Instructor_DetailAccountPage, {
          user: sampleUser
        });
      }

      if (active === "managementSettings") {
        return instructors_jsx(Instructor_DetailManagementPage, {
          user: sampleUser
        });
      }

      return null;
    });

    this.state = {
      active: "account"
    };
  }

  render() {
    const {
      active
    } = this.state;
    return instructors_jsx("main", {
      id: "main",
      role: "main"
    }, instructors_jsx("div", {
      className: "main-holder grey lighten-3"
    }, instructors_jsx(external_react_sticky_["StickyContainer"], {
      id: "stickycontainer"
    }, instructors_jsx(components_InstructorNavBar, {
      active: active,
      onSetActivePage: this.onSetActivePage
    }), this.renderCurrentPage())));
  }

}

/* harmony default export */ var pages_instructors = __webpack_exports__["default"] = (instructors_Instructors);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "i1q9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InstructorCard = ({
  instructor: {
    firstName,
    lastName,
    email
  },
  onRemoveInstructor
}) => __jsx("div", {
  className: "owner-box card-panel card-panel-panel card-panel-large",
  style: {
    backgroundColor: '#31837a',
    color: '#fff'
  }
}, __jsx("a", {
  href: "#",
  className: "close-link icon-close-thin",
  onClick: onRemoveInstructor
}), __jsx("div", {
  className: "card-panel-row row"
}, __jsx("div", {
  className: "col s10"
}, __jsx("div", {
  className: "user-block"
}, __jsx("div", {
  className: "user-circle",
  style: {
    backgroundColor: '#0085ce',
    color: '#fff',
    height: '45px'
  }
}, __jsx("img", {
  src: "#",
  alt: ""
})), __jsx("div", {
  className: "user-text",
  style: {
    color: '#fff'
  }
}, __jsx("h4", {
  className: "h3"
}, lastName, ", ", firstName), __jsx("a", {
  href: `mailto:${email}`
}, email)))), __jsx("div", {
  className: "col s2 right-align"
}, __jsx("span", {
  className: "block-icon"
}, __jsx("i", {
  className: "icon-user"
}), __jsx("span", {
  className: "text-icon"
}, "Instructor")))));

/* harmony default export */ __webpack_exports__["a"] = (InstructorCard);

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