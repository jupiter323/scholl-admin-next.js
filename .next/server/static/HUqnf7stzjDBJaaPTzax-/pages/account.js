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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cdae");


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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "cdae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YckE");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("325u");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("EABn");
/* harmony import */ var _components_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/NWr");
/* harmony import */ var _components_utils_stateOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("rKn1");
/* harmony import */ var _components_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Bvo1");
/* harmony import */ var _components_utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("P/Kj");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// TODO: change componentDidMount for when user comes though as props, profile pic change








const timeZoneOptions = [{
  label: "(UTC - 10:00) Hawaii Time Zone (US)",
  value: "Hawaii"
}, {
  label: "(UTC - 9:00) Alaska Time Zone (US)",
  value: "Alaska"
}, {
  label: "(UTC - 8:00) Paciﬁc/Yukon Time Zone (US & Canada)",
  value: "Pacific"
}, {
  label: "(UTC - 7:00) Mountain Time Zone (US & Canada)",
  value: "Mountain"
}, {
  label: "(UTC - 6:00) Central Time Zone (US & Canada)",
  value: "Central"
}, {
  label: "(UTC - 5:00) Eastern Time Zone (US & Canada)",
  value: "Eastern"
}, {
  label: "(UTC - 4:00) Atlantic Time Zone (Canada)",
  value: "Atlantic"
}, {
  label: "(UTC - 3:30) Newfoundland Time Zone (Canada)",
  value: "Newfoundland"
}];

class Account extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onUpdateProfile", async event => {
      event.preventDefault(); // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;

      const {
        updatedAccount
      } = this.state;
      const valid = await Object(_components_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__[/* nestedEditFieldValidation */ "b"])(this.state, this.state.updatedAccount, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveChangesError();
        console.warn('not valid');
      }

      this.setState({
        originalAccount: updatedAccount
      }); // return onSavePassageChanges(updatedUser);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onSendPasswordResetEmail", event => {
      event.preventDefault();
      console.warn('Stubbed out password reset email');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "onResetPassword", event => {
      event.preventDefault();
      const {
        actions: {
          password,
          confirmPassword
        }
      } = this.state;

      if (password !== confirmPassword) {
        console.warn('Toast is broken, have a console log'); // return this.notify
      }

      if (!confirmPassword.length) {
        console.warn('Toast is broken, have a console log'); // return this.notify()
      }

      return console.warn('stubbed out password reset');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "handleDetailsChange", (event, name) => {
      const {
        updatedAccount: previousAccountState
      } = this.state;
      const value = event.target ? event.target.value : event;
      const updatedAccount = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(previousAccountState, {
        $merge: {
          [name]: value
        }
      });
      this.setState({
        updatedAccount
      });
    });

    this.state = {
      originalAccount: {
        firstName: "",
        lastName: "",
        avatarURL: "",
        addressLine1: "",
        city: "",
        state: "",
        zipCode: "",
        timeZone: "",
        email: ""
      },
      updatedAccount: {
        firstName: "",
        lastName: "",
        avatarURL: "",
        addressLine1: "",
        city: "",
        state: "",
        zipCode: "",
        timeZone: "",
        email: ""
      },
      actions: {
        ccAdmin: false,
        requireUserToChange: false,
        password: '',
        confirmPassword: ''
      },
      validation: {
        firstName: true,
        lastName: true,
        email: true
      }
    };
  }

  componentDidMount() {
    const {
      firstName,
      lastName,
      avatarURL,
      addressLine1,
      city,
      state,
      zipCode,
      timeZone,
      email = {}
    } = _components_utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"][0];
    const updatedAccount = {
      firstName,
      lastName,
      avatarURL,
      addressLine1,
      city,
      state,
      zipCode,
      timeZone,
      email
    };
    const {
      originalAccount: originalAccountState
    } = this.state;
    const originalAccount = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(originalAccountState, {
      $merge: updatedAccount
    });
    this.setState({
      originalAccount,
      updatedAccount
    }); // eslint-disable-line
  } // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level


  render() {
    const {
      firstName,
      lastName,
      avatarURL,
      addressLine1,
      city,
      state,
      zipCode,
      timeZone,
      email = {}
    } = this.state.updatedAccount;
    return __jsx("main", {
      id: "main",
      role: "main"
    }, __jsx("div", {
      className: "main-holder grey lighten-5"
    }, __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_4__["StickyContainer"], null, __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_4__["Sticky"], null, ({
      style
    }) => __jsx("div", {
      className: "title-row card-panel",
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, style, {
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
    }, "menu"))), __jsx("h2", {
      className: "h1 white-text"
    }, __jsx("span", {
      className: "heading-holder"
    }, __jsx("i", {
      className: "icon-student"
    }), __jsx("span", {
      className: "heading-block"
    }, "My Account"))))), __jsx("div", {
      className: "content-section"
    }, __jsx("div", {
      className: "content-section-holder"
    }, __jsx("form", {
      action: "#",
      className: "custom-form"
    }, __jsx("fieldset", null, __jsx("div", {
      className: "container-xs container-align-left"
    }, __jsx("div", {
      className: "card-block"
    }, __jsx("div", {
      className: "card"
    }, __jsx("div", {
      className: "card-content card-account"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 m3 l5"
    }, __jsx("div", {
      className: "avatar"
    }, __jsx("img", {
      src: avatarURL,
      alt: ""
    }), __jsx("span", {
      className: "btn-upload icon-photocam"
    }, __jsx("input", {
      type: "file"
    })))), __jsx("div", {
      className: "col s12 m9 l7"
    }, __jsx("div", {
      className: "input-field input-field-icon"
    }, __jsx("input", {
      type: "email",
      placeholder: "Email Address",
      value: email,
      onChange: event => this.handleDetailsChange(event, "email")
    }), __jsx("span", {
      className: "input-icon icon-letter2"
    })), __jsx("div", {
      className: "input-field input-field-icon"
    }, __jsx("input", {
      style: {
        width: '44%'
      },
      type: "text",
      placeholder: "First Name",
      value: firstName,
      onChange: event => this.handleDetailsChange(event, "firstName")
    }), __jsx("input", {
      style: {
        width: '44%'
      },
      type: "text",
      placeholder: "Last Name",
      value: lastName,
      onChange: event => this.handleDetailsChange(event, "lastName")
    }), __jsx("span", {
      className: "input-icon icon-user-line"
    })), __jsx("div", {
      className: "input-field input-field-icon"
    }, __jsx("input", {
      type: "text",
      placeholder: "Street Address",
      value: addressLine1,
      onChange: event => this.handleDetailsChange(event, "addressLine1")
    }), __jsx("span", {
      className: "input-icon icon-search"
    })), __jsx("div", {
      className: "input-field"
    }, __jsx("input", {
      type: "text",
      placeholder: "City",
      value: city,
      onChange: event => this.handleDetailsChange(event, "city")
    })), __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 m6"
    }, __jsx("div", {
      className: "input-field",
      style: {
        zIndex: 1001
      }
    }, __jsx(_components_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      value: Object(_components_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(state, _components_utils_stateOptions__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]),
      onChange: event => this.handleDetailsChange(event, 'state'),
      options: _components_utils_stateOptions__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
      label: "State",
      stateKey: "state",
      dropdownKey: "state"
    }))), __jsx("div", {
      className: "col s12 m6",
      style: {
        marginTop: '9%'
      }
    }, __jsx("div", {
      className: "input-field"
    }, __jsx("input", {
      type: "text",
      placeholder: "Zip Code",
      value: zipCode,
      onChange: event => this.handleDetailsChange(event, "zipCode")
    })))), __jsx("div", {
      className: "input-field"
    }, __jsx(_components_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      value: Object(_components_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(timeZone, timeZoneOptions),
      options: timeZoneOptions,
      stateKey: "timeZone",
      dropdownKey: "timeZone",
      label: "Time Zone",
      onChange: event => this.handleDetailsChange(event, 'timeZone')
    }))))))), __jsx("div", {
      className: "account_btn-holder"
    }, __jsx("a", {
      href: "#",
      onClick: this.onResetPassword
    }, "Reset Password"), __jsx("a", {
      className: "btn",
      href: "#",
      onClick: this.onUpdateProfile
    }, "Update Pro\uFB01le"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Account);

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