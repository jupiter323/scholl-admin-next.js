module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"061c": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"1ff6":"6e7460fd95b71a0caae4"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("227i");


/***/ }),

/***/ "227i":
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

// CONCATENATED MODULE: ./components/Student/components/StudentNavBar/index.js


var StudentNavBar_StudentNavBar = function StudentNavBar(_ref) {
  var active = _ref.active,
      onSetActivePage = _ref.onSetActivePage;
  return external_react_default.a.createElement("nav", {
    className: "nav-additional"
  }, external_react_default.a.createElement("ul", {
    className: "menu-additional"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: active === 'summary' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('summary');
    },
    href: "#"
  }, "Summary")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: active === 'calendar' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('calendar');
    },
    href: "#"
  }, "Calendar")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: active === 'lessons' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('lessons');
    },
    href: "#"
  }, "Lessons")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: active === 'worksheets' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('worksheets');
    },
    href: "#"
  }, "Worksheets")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: active === 'tests' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('tests');
    },
    href: "#"
  }, "Test Sections")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: active === 'account' ? 'active' : '',
    onClick: function onClick() {
      return onSetActivePage('account');
    },
    href: "#"
  }, "Account"))));
};

/* harmony default export */ var components_StudentNavBar = (StudentNavBar_StudentNavBar);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Toast/styles/index.js

var ToastWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ToastWrapper",
  componentId: "f1vbvd-0"
})([".update-success{background-color:#31837a;}.progress-bar-success{background-color:#fff;}"]);
/* harmony default export */ var styles = (ToastWrapper);
// CONCATENATED MODULE: ./components/Toast/index.js










var Toast_Toast =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Toast, _React$Component);

  function Toast() {
    Object(classCallCheck["a" /* default */])(this, Toast);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Toast).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Toast, [{
    key: "render",
    // eslint-disable-line
    value: function render() {
      return external_react_default.a.createElement(styles, null, external_react_default.a.createElement(external_react_toastify_["ToastContainer"], {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnVisibilityChange: true,
        draggable: true,
        pauseOnHover: true
      }));
    }
  }]);

  return Toast;
}(external_react_default.a.Component);

/* harmony default export */ var components_Toast = (Toast_Toast);
// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// EXTERNAL MODULE: ./components/utils/genderOptions.js
var genderOptions = __webpack_require__("QvYC");

// CONCATENATED MODULE: ./components/Student/AccountPage/components/StudentInformation/index.js





var StudentInformation_StudentInformation = function StudentInformation(_ref) {
  var _ref$state = _ref.state,
      firstName = _ref$state.firstName,
      lastName = _ref$state.lastName,
      gender = _ref$state.gender,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h2", null, "Student Information"), external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "first_name",
    name: "firstName",
    value: firstName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'firstName', 'studentInformation');
    }
  }), external_react_default.a.createElement("label", {
    className: firstName.length ? 'label active' : 'label',
    htmlFor: "first_name"
  }, "First Name"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "last_name",
    name: "lastName",
    value: lastName,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'lastName', 'studentInformation');
    }
  }), external_react_default.a.createElement("label", {
    className: lastName.length ? 'label active' : 'label',
    htmlFor: "last_name"
  }, "Last Name"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s6 l5 focus-blue"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(gender, genderOptions["a" /* default */]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'gender', 'studentInformation');
    },
    options: genderOptions["a" /* default */],
    label: "Gender",
    stateKey: "gender",
    dropdownKey: "gender"
  }))))));
};

/* harmony default export */ var components_StudentInformation = (StudentInformation_StudentInformation);
// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// CONCATENATED MODULE: ./components/Student/AccountPage/components/ContactInformation/index.js





var ContactInformation_ContactInformation = function ContactInformation(_ref) {
  var _ref$state = _ref.state,
      phone = _ref$state.phone,
      addressLine1 = _ref$state.addressLine1,
      addressLine2 = _ref$state.addressLine2,
      city = _ref$state.city,
      state = _ref$state.state,
      zipCode = _ref$state.zipCode,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h2", null, "Contact Information (optional)"), external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "tel",
    id: "phone",
    name: "phone",
    value: phone,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'phone', 'contactInformation');
    }
  }), external_react_default.a.createElement("label", {
    className: phone.length ? 'label active' : 'label',
    htmlFor: "phone"
  }, "Phone"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "address_line_1",
    name: "addressLine1",
    value: addressLine1,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'addressLine1', 'contactInformation');
    }
  }), external_react_default.a.createElement("label", {
    className: addressLine1.length ? 'label active' : 'label',
    htmlFor: "address_line_1"
  }, "Address Line 1*"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "address_line_2",
    name: "addressLine2",
    value: addressLine2,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'addressLine2', 'contactInformation');
    }
  }), external_react_default.a.createElement("label", {
    className: addressLine2.length ? 'label active' : 'label',
    htmlFor: "address_line_2"
  }, "Address Line 2*"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "city",
    name: "city",
    value: city,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'city', 'contactInformation');
    }
  }), external_react_default.a.createElement("label", {
    className: city.length ? 'label active' : 'label',
    htmlFor: "city"
  }, "City"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s6 l5"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(state, stateOptions["a" /* default */]),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'state', 'contactInformation');
    },
    options: stateOptions["a" /* default */],
    label: "State",
    stateKey: "state",
    dropdownKey: "state"
  }), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), external_react_default.a.createElement("div", {
    className: "col s6 l7"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "zip_code",
    name: "zipCode",
    value: zipCode,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'zipCode', 'contactInformation');
    }
  }), external_react_default.a.createElement("label", {
    className: zipCode.length ? 'label active' : 'label',
    htmlFor: "zip_code"
  }, "Zip"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional")))))));
};

/* harmony default export */ var components_ContactInformation = (ContactInformation_ContactInformation);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/EmailAddress/index.js


var EmailAddress_EmailAddress = function EmailAddress(_ref) {
  var email = _ref.state.email,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h2", null, "Email Address"), external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'email', 'emailAddress');
    }
  }), external_react_default.a.createElement("label", {
    className: email.length ? 'label active' : 'label',
    htmlFor: "email"
  }, "Email*"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), external_react_default.a.createElement("p", {
    className: "text"
  }, "A valid student email address is required for most student functions. You may create an account without an email address, but until a valid email address is entered, the student will not receive the requisite welcome email and cannot login to the system."))));
};

/* harmony default export */ var components_EmailAddress = (EmailAddress_EmailAddress);
// EXTERNAL MODULE: ./components/Location/components/LocationCard/index.js
var LocationCard = __webpack_require__("2Gwb");

// CONCATENATED MODULE: ./components/Student/AccountPage/components/Location/index.js



var Location_Location = function Location(_ref) {
  var locations = _ref.state.locations,
      onOpenLocationModal = _ref.onOpenLocationModal,
      _onRemoveLocation = _ref.onRemoveLocation;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Location"), external_react_default.a.createElement("div", {
    className: "card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "text-block"
  }, external_react_default.a.createElement("p", null, "Depending on your settings, you may have more than one location/branch. The student\u2019s location a\uFB00ects which managers have access to this student. ")), external_react_default.a.createElement("div", {
    className: "box-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "height-15 jcf-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "card-location-holder",
    style: {
      height: '100%',
      overflowY: 'scroll'
    }
  }, !locations.length && external_react_default.a.createElement("div", {
    className: "add-class-box"
  }), locations.map(function (location, index) {
    return external_react_default.a.createElement(LocationCard["a" /* default */], {
      location: location,
      onRemoveLocation: function onRemoveLocation() {
        return _onRemoveLocation(index, 'location', 'locations');
      }
    });
  })))), external_react_default.a.createElement("div", {
    className: "card-footer right-align"
  }, external_react_default.a.createElement("a", {
    href: "#",
    onClick: onOpenLocationModal,
    className: "modal-trigger link-block"
  }, "Add Location")))));
};

/* harmony default export */ var components_Location = (Location_Location);
// EXTERNAL MODULE: ./components/Instructor/components/InstructorCard/index.js
var InstructorCard = __webpack_require__("i1q9");

// CONCATENATED MODULE: ./components/Student/AccountPage/components/Instructor/index.js
/* eslint-disable jsx-a11y/img-redundant-alt */



var Instructor_Instructor = function Instructor(_ref) {
  var instructors = _ref.state.instructors,
      onOpenInstructorModal = _ref.onOpenInstructorModal,
      _onRemoveInstructor = _ref.onRemoveInstructor;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Instructor"), external_react_default.a.createElement("div", {
    className: "card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "text-block"
  }, external_react_default.a.createElement("p", null, "Add one or more instructors to the list below. Each instructor can manage the student\u2019s course.")), external_react_default.a.createElement("div", {
    className: "box-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "height-15 jcf-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "card-location-holder",
    style: {
      height: '100%',
      overflowY: 'scroll'
    }
  }, !instructors.length && external_react_default.a.createElement("div", {
    className: "add-class-box"
  }), instructors.map(function (instructor, index) {
    return external_react_default.a.createElement(InstructorCard["a" /* default */], {
      instructor: instructor,
      onRemoveInstructor: function onRemoveInstructor() {
        return _onRemoveInstructor(index, 'instructor', 'instructors');
      }
    });
  })))), external_react_default.a.createElement("div", {
    className: "card-footer right-align"
  }, external_react_default.a.createElement("a", {
    href: "#",
    onClick: onOpenInstructorModal,
    className: "modal-trigger link-block"
  }, "Add Instructor")))));
};

/* harmony default export */ var components_Instructor = (Instructor_Instructor);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/Class/components/ClassCard/index.js


var ClassCard_ClassCard = function ClassCard(_ref) {
  var _ref$course = _ref.course,
      className = _ref$course.className,
      classLocation = _ref$course.classLocation,
      index = _ref.index,
      onRemoveClass = _ref.onRemoveClass;
  return external_react_default.a.createElement("div", {
    className: "card-panel card-panel-panel card-panel-large",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, external_react_default.a.createElement("a", {
    href: "#",
    className: "close-link icon-close-thin",
    onClick: function onClick() {
      return onRemoveClass(index, 'location', 'locations');
    }
  }), external_react_default.a.createElement("div", {
    className: "card-panel-row row"
  }, external_react_default.a.createElement("div", {
    className: "col s10"
  }, external_react_default.a.createElement("h3", {
    className: "h4 truncate"
  }, className), external_react_default.a.createElement("h4", {
    className: "sub-title"
  }, classLocation)), external_react_default.a.createElement("div", {
    className: "col s2 right-align"
  }, external_react_default.a.createElement("span", {
    className: "block-icon"
  }, external_react_default.a.createElement("i", {
    className: "icon-location"
  }), external_react_default.a.createElement("span", {
    className: "text-icon"
  }, "Class")))));
};

/* harmony default export */ var components_ClassCard = (ClassCard_ClassCard);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/Class/index.js
/* eslint-disable jsx-a11y/img-redundant-alt */



var Class_Class = function Class(_ref) {
  var classes = _ref.state.classes,
      onOpenClassModal = _ref.onOpenClassModal,
      onRemoveClass = _ref.onRemoveClass;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h3", null, "Class"), external_react_default.a.createElement("div", {
    className: "card card-instructor"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "text-block"
  }, external_react_default.a.createElement("p", null, "If this student is in a class, add it here. When a student is a member of a class, he or she will automatically be assigned all the classwork. ")), external_react_default.a.createElement("div", {
    className: "box-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "height-20 jcf-scrollable"
  }, external_react_default.a.createElement("div", {
    className: "card-location-holder"
  }, !classes.length && external_react_default.a.createElement("div", {
    className: "add-class-box"
  }), classes.map(function (course, index) {
    return external_react_default.a.createElement(components_ClassCard, {
      course: course,
      key: course.className,
      index: index,
      onRemoveClass: onRemoveClass
    });
  })))), external_react_default.a.createElement("div", {
    className: "card-footer right-align"
  }, external_react_default.a.createElement("a", {
    href: "#",
    onClick: onOpenClassModal,
    className: "modal-trigger link-block"
  }, "Add Class")))));
};

/* harmony default export */ var components_Class = (Class_Class);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/AccountStatus/index.js


var AccountStatus_AccountStatus = function AccountStatus(_ref) {
  var _ref$state = _ref.state,
      licenseCode = _ref$state.licenseCode,
      status = _ref$state.status,
      activationDate = _ref$state.activationDate,
      expirationDate = _ref$state.expirationDate;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h2", null, "Account Status"), external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field account-status_input col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "license-code",
    name: "licenseCode",
    value: licenseCode,
    readOnly: ""
  }), external_react_default.a.createElement("label", {
    className: "label active",
    htmlFor: "code"
  }, "License Code"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field account-status_input col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "status",
    name: "status",
    value: status,
    readOnly: ""
  }), external_react_default.a.createElement("label", {
    className: "label active",
    htmlFor: "status"
  }, "Status"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field account-status_input col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "activation-date",
    name: "activationDate",
    value: activationDate,
    readOnly: ""
  }), external_react_default.a.createElement("label", {
    className: "label active",
    htmlFor: "activation-date"
  }, "Activation Date"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field account-status_input col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "expiration-date",
    name: "expirationDate",
    value: expirationDate,
    readOnly: ""
  }), external_react_default.a.createElement("label", {
    className: "label active",
    htmlFor: "expiration-date"
  }, "Expiration Date")))))));
};

/* harmony default export */ var components_AccountStatus = (AccountStatus_AccountStatus);
// CONCATENATED MODULE: ./components/utils/licenseTypeOptions.js
/* harmony default export */ var licenseTypeOptions = ({
  classMember: {
    name: 'Class Member',
    description: "This license type allows the student to participate in a course with 4 or more other students. The coursework may be customized for the class as a whole, but not for individual students within the class.\n    To conduct a course for an individual student in a one-on-one format (tutoring), you need a \u201Cone-on-one\u201D license type.\n    "
  },
  oneOnOne: {
    name: 'One-On-One',
    description: "This license type allows the student to participate in a course with 4 or more other students. The coursework may be customized for the class as a whole, but not for individual students within the class.\n    To conduct a course for an individual student in a one-on-one format (tutoring), you need a \u201Cone-on-one\u201D license type.\n    "
  }
});
// CONCATENATED MODULE: ./components/Student/AccountPage/components/AccountType/index.js
/* eslint-disable jsx-a11y/img-redundant-alt */



var AccountType_AccountType = function AccountType(_ref) {
  var licenseType = _ref.state.licenseType;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h2", null, "Account Type"), external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "account-type-block"
  }, external_react_default.a.createElement("div", {
    className: "account-type-block_holder"
  }, external_react_default.a.createElement("div", {
    className: "head-box"
  }, external_react_default.a.createElement("h3", null, external_react_default.a.createElement("span", null, "License Type"), " ", licenseTypeOptions[licenseType].name)), external_react_default.a.createElement("div", {
    className: "picture-holder"
  }, external_react_default.a.createElement("img", {
    src: "images/img-01.png",
    alt: "image description"
  })), external_react_default.a.createElement("p", null, licenseTypeOptions[licenseType].description)))))));
};

/* harmony default export */ var components_AccountType = (AccountType_AccountType);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/Student/AccountPage/components/CourseContext/index.js




var DatePicker = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ "1ff6").then(__webpack_require__.bind(null, "SdOD"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("SdOD")];
    },
    modules: ['../../../../FormComponents/DatePicker']
  }
});
var startDateOptions = [{
  label: 'First Assignment Date (Default)',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];
var endDateOptions = [{
  label: 'First Assignment Date (Default)',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];
var targetTestDateOptions = [{
  label: 'October 6, 2018',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];

var CourseContext_CourseContext = function CourseContext(_ref) {
  var _ref$state = _ref.state,
      courseStartDateOption = _ref$state.courseStartDateOption,
      courseStartDate = _ref$state.courseStartDate,
      courseEndDateOption = _ref$state.courseEndDateOption,
      courseEndDate = _ref$state.courseEndDate,
      targetTestDate = _ref$state.targetTestDate,
      targetScore = _ref$state.targetScore,
      highSchool = _ref$state.highSchool,
      graduationYear = _ref$state.graduationYear,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "row mb-0 one-large-col d-flex-content"
  }, external_react_default.a.createElement("div", {
    className: "col s12"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h2", null, "Course Context"), external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "course-context_two-col"
  }, external_react_default.a.createElement("div", {
    className: "column"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s12"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(courseStartDateOption, startDateOptions),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'courseStartDateOption', 'courseContext');
    },
    options: startDateOptions,
    label: "Course Start Date",
    stateKey: "courseStartDateOption",
    dropdownKey: "courseStartDateOption"
  })))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col s4"
  }, external_react_default.a.createElement("div", {
    className: "datepicker-field input-field"
  }, external_react_default.a.createElement("i", {
    className: "icon-calendar-dark"
  }), external_react_default.a.createElement(DatePicker, {
    selected: courseStartDate,
    id: "course_start_date",
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'courseStartDate', 'courseContext');
    }
  })))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s12"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(courseEndDateOption, endDateOptions),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'courseEndDateOption', 'courseContext');
    },
    options: endDateOptions,
    label: "Course End Date",
    stateKey: "courseEndDateOption",
    dropdownKey: "courseEndDateOption"
  })))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col s4"
  }, external_react_default.a.createElement("div", {
    className: "datepicker-field input-field"
  }, external_react_default.a.createElement("i", {
    className: "icon-calendar-dark"
  }), external_react_default.a.createElement(DatePicker, {
    selected: courseEndDate,
    id: "course_end_date",
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'courseEndDate', 'courseContext');
    }
  }))))), external_react_default.a.createElement("div", {
    className: "column"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col s12 m6 l8"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(targetTestDate, targetTestDateOptions),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'targetTestDate', 'courseContext');
    },
    options: targetTestDateOptions,
    label: "Target Test Date*",
    stateKey: "targetTestDate",
    dropdownKey: "targetTestDate"
  }), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional"))), external_react_default.a.createElement("div", {
    className: "col s12 m6 l4"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "target_score",
    name: "targetScore",
    value: targetScore,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'targetScore', 'courseContext');
    }
  }), external_react_default.a.createElement("label", {
    className: targetScore.length ? 'label active' : 'label',
    htmlFor: "target_score"
  }, "Target Score*"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional")))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col s12"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "high_school",
    name: "highSchool",
    value: highSchool,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'highSchool', 'courseContext');
    }
  }), external_react_default.a.createElement("label", {
    className: highSchool.length ? 'label active' : 'label',
    htmlFor: "high_school"
  }, "High School*"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional")))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s12"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "text",
    id: "graduation_year",
    name: "graduationYear",
    value: graduationYear,
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'graduationYear', 'courseContext');
    }
  }), external_react_default.a.createElement("label", {
    className: graduationYear.length ? 'label active' : 'label',
    htmlFor: "graduation_year"
  }, "Graduation Year*"), external_react_default.a.createElement("span", {
    className: "note"
  }, "*Optional")))))))))));
};

/* harmony default export */ var components_CourseContext = (CourseContext_CourseContext);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/AccountSettings/index.js



var sessionDurationOptions = [{
  label: 'Use organization default',
  value: 'organizationDefault'
}, {
  label: 'Option 2',
  value: 'Option 2'
}, {
  label: 'Option 3',
  value: 'Option 3'
}];

var AccountSettings_AccountSettings = function AccountSettings(_ref) {
  var _ref$state = _ref.state,
      loginBeforeActivation = _ref$state.loginBeforeActivation,
      unstructuredCourseMode = _ref$state.unstructuredCourseMode,
      defaultSessionDuration = _ref$state.defaultSessionDuration,
      videoSolutionsRequired = _ref$state.videoSolutionsRequired,
      preventLogin = _ref$state.preventLogin,
      inactive = _ref$state.inactive,
      excludeFromStatistics = _ref$state.excludeFromStatistics,
      handleDetailsChange = _ref.handleDetailsChange;
  return external_react_default.a.createElement("div", {
    className: "row mb-0 one-large-col d-flex-content"
  }, external_react_default.a.createElement("div", {
    className: "col s12"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h2", null, "Account Settings"), external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "course-context_two-col"
  }, external_react_default.a.createElement("div", {
    className: "column"
  }, external_react_default.a.createElement("div", {
    className: "checkbox-block"
  }, external_react_default.a.createElement("div", {
    className: "checkbox-holder"
  }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "loginBeforeActivation",
    id: "",
    value: loginBeforeActivation,
    onChange: function onChange() {
      return handleDetailsChange({}, 'loginBeforeActivation', 'accountSettings', true);
    }
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "Allow Student Login Prior to Activation")), external_react_default.a.createElement("span", {
    className: "note"
  }, "To enter initial practice test answers")), external_react_default.a.createElement("p", null, "By default, a student may not log in until you activate the student's account. If, prior to signing up for the course, this student needs to enter his or her own answers for an initial practice test, choose this option to allow the student access. When the student completes the test, we will not reveal the score or score report, which will retain your opportunity to setup a consultation with student/parent to review the results.")), external_react_default.a.createElement("div", {
    className: "checkbox-block"
  }, external_react_default.a.createElement("div", {
    className: "checkbox-holder"
  }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "unstructuredCourseMode",
    id: "unstructuredCourseMode",
    value: unstructuredCourseMode,
    onChange: function onChange() {
      return handleDetailsChange({}, 'unstructuredCourseMode', 'accountSettings', true);
    }
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "Unstructured Course Mode")), external_react_default.a.createElement("span", {
    className: "note"
  }, "O\uFB00 by default")), external_react_default.a.createElement("p", null, "With this option selected, the student can access any lesson at any time, whether or not you've explicitly assigned it. If a student begins a lesson that you have not yet assigned, the lesson will appear on the student's planner for the day that the student begins the lesson, and no due date will be assigned.")), external_react_default.a.createElement("div", {
    className: "checkbox-block"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col s12 l8"
  }, external_react_default.a.createElement("div", {
    className: "input-field focus-blue"
  }, external_react_default.a.createElement(Dropdown["a" /* default */], {
    value: Object(getValueFromState["a" /* default */])(defaultSessionDuration, sessionDurationOptions),
    onChange: function onChange(event) {
      return handleDetailsChange(event, 'defaultSessionDuration', 'accountSettings');
    },
    options: sessionDurationOptions,
    label: "Default Session Duration",
    stateKey: "defaultSessionDuration",
    dropdownKey: "defaultSessionDuration"
  })))))), external_react_default.a.createElement("div", {
    className: "column"
  }, external_react_default.a.createElement("div", {
    className: "checkbox-block"
  }, external_react_default.a.createElement("div", {
    className: "checkbox-holder"
  }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "videoSolutionsRequired",
    id: "videoSolutionsRequired",
    value: videoSolutionsRequired,
    onChange: function onChange() {
      return handleDetailsChange({}, 'videoSolutionsRequired', 'accountSettings', true);
    }
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "Require Students to Watch Video Solutions")), external_react_default.a.createElement("span", {
    className: "note"
  }, "Not recommended")), external_react_default.a.createElement("p", null, "With this option is selected, the student must watch video solutions for each of the problems that he or she misses or skips before the lesson or quiz is marked complete.")), external_react_default.a.createElement("div", {
    className: "checkbox-block"
  }, external_react_default.a.createElement("div", {
    className: "checkbox-holder"
  }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "preventLogin",
    id: "preventLogin",
    value: preventLogin,
    onChange: preventLogin
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "Prevent Login"))), external_react_default.a.createElement("p", null, "Check this box to temporarily prevent this student from logging in. If this account has not yet been activated, selecting this option is unnecessary because an unactivated student cannot login anyway.")), external_react_default.a.createElement("div", {
    className: "checkbox-block"
  }, external_react_default.a.createElement("div", {
    className: "checkbox-holder"
  }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "inactive",
    id: "inactive",
    value: inactive,
    onChange: function onChange() {
      return handleDetailsChange({}, 'inactive', 'accountSettings', true);
    }
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "Inactive"))), external_react_default.a.createElement("p", null, "Select this option when you no longer want this student to appear on your list of current students. All student data is retained and, by default, included in instructor and global statistics. ")), external_react_default.a.createElement("div", {
    className: "checkbox-block"
  }, external_react_default.a.createElement("div", {
    className: "checkbox-holder"
  }, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "excludeFromStatistics",
    id: "excludeFromStatistics",
    value: excludeFromStatistics,
    onChange: function onChange() {
      return handleDetailsChange({}, 'excludeFromStatistics', 'accountSettings', true);
    }
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "Exclude from Statistics"))), external_react_default.a.createElement("p", null, "Use this option to exclude this student\u2019s data from all instructor and global statistics.")))))))));
};

/* harmony default export */ var components_AccountSettings = (AccountSettings_AccountSettings);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/Actions/index.js


var Actions_Actions = function Actions(_ref) {
  var _ref$state = _ref.state,
      ccAdmin = _ref$state.ccAdmin,
      requireUserToChange = _ref$state.requireUserToChange,
      password = _ref$state.password,
      confirmPassword = _ref$state.confirmPassword,
      handleActionsChange = _ref.handleActionsChange,
      onResetPassword = _ref.onResetPassword,
      onSendWelcomeEmail = _ref.onSendWelcomeEmail,
      onSendPasswordResetEmail = _ref.onSendPasswordResetEmail;
  return external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("h2", null, "Actions"), external_react_default.a.createElement("div", {
    className: "row mb-0 d-flex-content large sameheight"
  }, external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "account-block"
  }, external_react_default.a.createElement("h3", null, "Welcome Email"), external_react_default.a.createElement("p", null, "Use this feature to send (or resend) a welcome email to the student. The welcome email contains login instruction and a temporary password that the student can use to login for the \uFB01rst time. Keep in mind that sending this email will automatically set a new, randomly generated password which may be confusing to the student if he or she has already received a welcome email or has already set a permanent password."), external_react_default.a.createElement("p", null, external_react_default.a.createElement("button", {
    className: "btn waves-effect waves-light bg-blue",
    name: "action",
    onClick: onSendWelcomeEmail
  }, "(Re)send Welcome Email")), external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    name: "ccAdmin",
    id: "cc-admin",
    value: ccAdmin,
    onChange: function onChange() {
      return handleActionsChange({}, 'ccAdmin', true);
    }
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "cc me at:  this_is_me@gmail.com"))), external_react_default.a.createElement("div", {
    className: "account-block"
  }, external_react_default.a.createElement("h3", null, "Password Reset Email"), external_react_default.a.createElement("p", null, "The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid.."), external_react_default.a.createElement("p", null, external_react_default.a.createElement("button", {
    className: "btn waves-effect waves-light bg-blue",
    name: "action",
    onClick: onSendPasswordResetEmail
  }, "Send Password Reset Email")))))), external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "account-block"
  }, external_react_default.a.createElement("h3", null, "Reset Password"), external_react_default.a.createElement("p", null, "The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid."), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    onChange: function onChange(event) {
      return handleActionsChange(event, 'password');
    }
  }), external_react_default.a.createElement("label", {
    className: password.length ? 'label active' : 'label',
    htmlFor: "password"
  }, "Password"), external_react_default.a.createElement("span", {
    className: "note"
  }, "6 to 20 characters"))), external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "input-field col s12 focus-blue"
  }, external_react_default.a.createElement("input", {
    type: "password",
    id: "confirm-password",
    name: "confirmPassword",
    value: confirmPassword,
    onChange: function onChange(event) {
      return handleActionsChange(event, 'confirmPassword');
    }
  }), external_react_default.a.createElement("label", {
    className: confirmPassword.length ? 'label active' : 'label',
    htmlFor: "confirm-password"
  }, "Confirm Password"))), external_react_default.a.createElement("p", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
    type: "checkbox",
    className: "filled-in",
    id: "require-user-to-change",
    name: "requireUserToChange",
    value: requireUserToChange,
    onChange: function onChange() {
      return handleActionsChange({}, 'ccAdmin', true);
    }
  }), external_react_default.a.createElement("span", {
    className: "large-label"
  }, "Require user to change"))), external_react_default.a.createElement("p", null, external_react_default.a.createElement("button", {
    className: "btn waves-effect waves-light bg-blue",
    name: "action",
    onClick: onResetPassword
  }, "Set Password"))))))));
};

/* harmony default export */ var components_Actions = (Actions_Actions);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/DeleteAccount/index.js


var DeleteAccount_DeleteAccount = function DeleteAccount(_ref) {
  var activeButton = _ref.activeButton,
      onDeleteAccount = _ref.onDeleteAccount;
  return external_react_default.a.createElement("div", {
    className: "row mb-0 d-flex-content large sameheight"
  }, external_react_default.a.createElement("div", {
    className: "col s12 l5"
  }, external_react_default.a.createElement("div", {
    className: "card-block"
  }, external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("div", {
    className: "account-block"
  }, external_react_default.a.createElement("h3", null, "Delete Account"), external_react_default.a.createElement("p", null, "This option will only be available until the student account is activated.  Once activated, if you need to delete a student's account, please contact your system administrator."), external_react_default.a.createElement("p", null, external_react_default.a.createElement("button", {
    className: "btn waves-effect waves-light bg-blue ".concat(activeButton ? '' : 'disabled'),
    type: "submit",
    name: "action",
    onClick: onDeleteAccount
  }, "Delete Account"))))))));
};

/* harmony default export */ var components_DeleteAccount = (DeleteAccount_DeleteAccount);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/ClickOffComponentWrapper/index.js
var ClickOffComponentWrapper = __webpack_require__("x4x+");

// CONCATENATED MODULE: ./components/Student/ClassModal/components/ClassToggleCard/index.js
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


var ClassToggleCard_ClassToggleCard = function ClassToggleCard(_ref) {
  var course = _ref.course,
      onToggleClassSelect = _ref.onToggleClassSelect;
  return external_react_default.a.createElement("li", {
    onClick: function onClick() {
      return onToggleClassSelect(course);
    }
  }, external_react_default.a.createElement("input", {
    type: "checkbox"
  }), external_react_default.a.createElement("div", {
    className: "card-location card"
  }, external_react_default.a.createElement("div", {
    className: "owner-box card-panel card-panel-location",
    style: {
      backgroundColor: '#31837a',
      color: '#fff'
    }
  }, external_react_default.a.createElement("span", {
    className: "check-link icon-check"
  }), external_react_default.a.createElement("div", {
    className: "card-panel-row row"
  }, external_react_default.a.createElement("div", {
    className: "col s10"
  }, external_react_default.a.createElement("h3", {
    className: "h4 truncate"
  }, course.className), external_react_default.a.createElement("h4", {
    className: "sub-title"
  }, course.classLocation)), external_react_default.a.createElement("div", {
    className: "col s2 right-align"
  }, external_react_default.a.createElement("span", {
    className: "block-icon"
  }, external_react_default.a.createElement("i", {
    className: "icon-user"
  }), external_react_default.a.createElement("span", {
    className: "text-icon"
  }, "Instructor")))))));
};

/* harmony default export */ var components_ClassToggleCard = (ClassToggleCard_ClassToggleCard);
// CONCATENATED MODULE: ./components/utils/sampleClasses.js
/* harmony default export */ var sampleClasses = ([{
  className: 'Disneyworld  Tutoring',
  classLocation: 'Miami, FL'
}, {
  className: 'TutorZone Austin',
  classLocation: 'Austin, TX'
}, {
  className: 'TutorZone Miami',
  classLocation: 'San Francisco, CA'
}, {
  className: 'Disneyworld  Tutoring2',
  classLocation: 'New York, NY'
}, {
  className: 'TutorZone Austin2',
  classLocation: 'Denver, CO'
}, {
  className: 'TutorZone Miami2',
  classLocation: 'Atlanta, GA'
}]);
// CONCATENATED MODULE: ./components/Student/ClassModal/index.js
















var ClassModal_ClassModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ClassModal, _React$Component);

  function ClassModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ClassModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ClassModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      return _this.setState({
        selectedClasses: []
      }, _this.props.onClose);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleClassSelect", function (course) {
      var selectedClasses = _this.state.selectedClasses;

      if (selectedClasses.indexOf(course) === -1) {
        _this.setState({
          selectedClasses: [].concat(Object(toConsumableArray["a" /* default */])(selectedClasses), [course])
        });
      } else {
        var updatedClasses = external_immutability_helper_default()(selectedClasses, {
          $splice: [[selectedClasses.indexOf(course), 1]]
        });

        _this.setState({
          selectedClasses: updatedClasses
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSaveClassChanges", function () {
      var selectedClasses = _this.state.selectedClasses;
      var handleClassChange = _this.props.handleClassChange;
      handleClassChange(selectedClasses, 'course', 'classes');

      _this.onCloseModal();
    });

    _this.state = {
      open: false,
      classes: sampleClasses,
      selectedClasses: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ClassModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var classes = this.state.classes;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_Location1",
        className: "jsx-431526058" + " " + "modal modal-custom modal-location"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#00456b',
          color: '#fff'
        },
        className: "jsx-431526058" + " " + "owner-box card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "col"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-431526058"
      }, "Select Class(es)")))), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-body"
      }, external_react_default.a.createElement("span", {
        className: "jsx-431526058" + " " + "hint"
      }, "Click to select or deselect."), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "box-scrollable"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "height-40 jcf-scrollable"
      }, external_react_default.a.createElement("div", {
        style: {
          height: '100%',
          overflowY: 'scroll'
        },
        className: "jsx-431526058" + " " + "card-location-holder"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-431526058" + " " + "checkbox-list"
      }, classes.map(function (course) {
        return external_react_default.a.createElement(components_ClassToggleCard, {
          key: course.className,
          course: course,
          onToggleClassSelect: _this2.onToggleClassSelect
        });
      })))))), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "modal-footer"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-431526058" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveClassChanges,
        className: "jsx-431526058" + " " + "btn"
      }, "Add"))))))), external_react_default.a.createElement(style_default.a, {
        id: "431526058"
      }, ["h4.jsx-431526058{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", ".overlay.jsx-431526058{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-431526058{margin:0;border-radius:6px;}", "#modal_Location1.jsx-431526058{border-radius:6px;}", ".modal.jsx-431526058{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-431526058{opacity:1;visibility:visible;}", ".modal-footer.jsx-431526058{background-color:white;}"]));
    }
  }]);

  return ClassModal;
}(external_react_default.a.Component);

/* harmony default export */ var Student_ClassModal = (ClassModal_ClassModal);
// EXTERNAL MODULE: ./components/Location/components/LocationModal/index.js + 2 modules
var LocationModal = __webpack_require__("R12m");

// EXTERNAL MODULE: ./components/Instructor/components/InstructorModal/index.js + 2 modules
var InstructorModal = __webpack_require__("JyJo");

// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Student/AccountPage/index.js










/* eslint-disable no-unused-vars */

/* eslint-disable jsx-a11y/img-redundant-alt */





















var AccountPage_AccountPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AccountPage, _React$Component);

  function AccountPage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AccountPage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AccountPage).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "componentWillReceiveProps", function (nextProps) {
      if (!_this.state.originalUser || nextProps.user.id !== _this.state.originalUser.id) {
        var _nextProps$user = nextProps.user;
        _nextProps$user = _nextProps$user === void 0 ? {} : _nextProps$user;
        var id = _nextProps$user.id,
            studentInformation = _nextProps$user.studentInformation,
            contactInformation = _nextProps$user.contactInformation,
            emailAddress = _nextProps$user.emailAddress,
            location = _nextProps$user.location,
            instructor = _nextProps$user.instructor,
            course = _nextProps$user.course,
            courseContext = _nextProps$user.courseContext,
            accountSettings = _nextProps$user.accountSettings;
        var updatedUser = {
          id: id,
          studentInformation: studentInformation,
          contactInformation: contactInformation,
          emailAddress: emailAddress,
          location: location,
          instructor: instructor,
          course: course,
          courseContext: courseContext,
          accountSettings: accountSettings
        };
        var originalUserState = _this.state.originalUser;
        var originalUser = external_immutability_helper_default()(originalUserState, {
          $merge: nextProps.user
        });

        _this.setState({
          originalUser: originalUser,
          updatedUser: updatedUser
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onOpenLocationModal", function () {
      return _this.setState({
        locationModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseLocationModal", function () {
      return _this.setState({
        locationModalOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onOpenInstructorModal", function () {
      return _this.setState({
        instructorModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseInstructorModal", function () {
      return _this.setState({
        instructorModalOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onOpenClassModal", function () {
      return _this.setState({
        classModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseClassModal", function () {
      return _this.setState({
        classModalOpen: false
      });
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
        var updatedUser, valid;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault(); // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;

                updatedUser = _this.state.updatedUser;
                _context.next = 4;
                return Object(fieldValidation["b" /* nestedEditFieldValidation */])(_this.state, _this.state.updatedUser, _this.onSetValidation, function (validation) {
                  return console.warn('validation', validation);
                });

              case 4:
                valid = _context.sent;

                if (!valid) {
                  // return onSaveChangesError();
                  console.warn('not valid');
                }

                _this.setState({
                  originalUser: _this.state.updatedUser
                }); // return onSavePassageChanges(updatedUser);


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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onDeleteAccount", function () {
      console.warn('Stubbed out delete user');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSendWelcomeEmail", function (event) {
      event.preventDefault();
      console.warn('Stubbed out send email');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSendPasswordResetEmail", function (event) {
      event.preventDefault();
      console.warn('Stubbed out password reset email');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onResetPassword", function (event) {
      event.preventDefault();
      var _this$state$actions = _this.state.actions,
          password = _this$state$actions.password,
          confirmPassword = _this$state$actions.confirmPassword;

      if (password !== confirmPassword) {
        console.warn('Toast is broken, have a console log'); // return this.notify
      }

      if (!confirmPassword.length) {
        console.warn('Toast is broken, have a console log'); // return this.notify()
      }

      return console.warn('stubbed out password reset');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onRemoveOption", function (optionIndex, section, array) {
      var updatedUser = external_immutability_helper_default()(_this.state.updatedUser, Object(defineProperty["a" /* default */])({}, section, Object(defineProperty["a" /* default */])({}, array, {
        $splice: [[optionIndex, 1]]
      })));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "initialUserMount", function () {
      return _this.state.originalUser.id !== _this.props.user.id;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleActionsChange", function (event, name) {
      var checkBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var previousActions = _this.state.actions;
      var value;

      if (checkBox) {
        value = !previousActions.ccAdmin;
      } else {
        value = event.target.value;
      }

      var updatedState = external_immutability_helper_default()(_this.state, {
        actions: {
          $merge: Object(defineProperty["a" /* default */])({}, name, value)
        }
      });

      _this.setState(updatedState);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleOptionsChange", function (selectedOptions, section, array) {
      var updatedUser = external_immutability_helper_default()(_this.state.updatedUser, Object(defineProperty["a" /* default */])({}, section, Object(defineProperty["a" /* default */])({}, array, {
        $set: selectedOptions
      })));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDetailsChange", function (event, name, section) {
      var checkBox = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var previousUserState = _this.state.updatedUser;
      var value;

      if (checkBox) {
        value = !previousUserState[section][name];
      } else {
        value = event.target ? event.target.value : event;
      }

      var updatedUser = external_immutability_helper_default()(previousUserState, Object(defineProperty["a" /* default */])({}, section, {
        $merge: Object(defineProperty["a" /* default */])({}, name, value)
      }));

      _this.setState({
        updatedUser: updatedUser
      });
    });

    _this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
      classModalOpen: false,
      originalUser: {
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: ''
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: ''
        },
        emailAddress: {
          email: ''
        },
        location: {
          locations: []
        },
        instructor: {
          instructors: []
        },
        course: {
          classes: []
        },
        courseContext: {
          courseStartDateOption: '',
          courseStartDate: '',
          courseEndDateOption: '',
          courseEndDate: '',
          targetTestDate: '',
          targetScore: '',
          highSchool: '',
          graduationYear: ''
        },
        accountSettings: {
          loginBeforeActivation: false,
          unstructuredCourseMode: false,
          defaultSessionDuration: '',
          videoSolutionsRequired: false,
          preventLogin: false,
          inactive: false,
          excludeFromStatistics: false
        }
      },
      updatedUser: {
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: ''
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: ''
        },
        emailAddress: {
          email: ''
        },
        location: {
          locations: []
        },
        instructor: {
          instructors: []
        },
        course: {
          classes: []
        },
        courseContext: {
          courseStartDateOption: '',
          courseStartDate: '',
          courseEndDateOption: '',
          courseEndDate: '',
          targetTestDate: '',
          targetScore: '',
          highSchool: '',
          graduationYear: ''
        },
        accountSettings: {
          loginBeforeActivation: false,
          unstructuredCourseMode: false,
          defaultSessionDuration: '',
          videoSolutionsRequired: false,
          preventLogin: false,
          inactive: false,
          excludeFromStatistics: false
        }
      },
      actions: {
        ccAdmin: false,
        requireUserToChange: false,
        password: '',
        confirmPassword: ''
      },
      validation: {
        studentInformation: {
          firstName: true,
          lastName: true,
          gender: true
        },
        emailAddress: {
          email: true
        }
      }
    };
    return _this;
  }

  Object(createClass["a" /* default */])(AccountPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$user = this.props.user;
      _this$props$user = _this$props$user === void 0 ? {} : _this$props$user;
      var id = _this$props$user.id,
          studentInformation = _this$props$user.studentInformation,
          contactInformation = _this$props$user.contactInformation,
          emailAddress = _this$props$user.emailAddress,
          location = _this$props$user.location,
          instructor = _this$props$user.instructor,
          course = _this$props$user.course,
          courseContext = _this$props$user.courseContext,
          accountSettings = _this$props$user.accountSettings;
      var updatedUser = {
        id: id,
        studentInformation: studentInformation,
        contactInformation: contactInformation,
        emailAddress: emailAddress,
        location: location,
        instructor: instructor,
        course: course,
        courseContext: courseContext,
        accountSettings: accountSettings
      };
      var originalUserState = this.state.originalUser;
      var originalUser = external_immutability_helper_default()(originalUserState, {
        $merge: updatedUser
      });
      this.setState({
        originalUser: originalUser,
        updatedUser: updatedUser
      }); // eslint-disable-line
    } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
    // This resets the component state to reflect the details of the next user the user clicks on

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          locationModalOpen = _this$state.locationModalOpen,
          instructorModalOpen = _this$state.instructorModalOpen,
          classModalOpen = _this$state.classModalOpen,
          actions = _this$state.actions,
          _this$state$updatedUs = _this$state.updatedUser,
          updatedStudentInformation = _this$state$updatedUs.studentInformation,
          updatedContactInformation = _this$state$updatedUs.contactInformation,
          updatedEmailAddress = _this$state$updatedUs.emailAddress,
          updatedLocation = _this$state$updatedUs.location,
          updatedInstructor = _this$state$updatedUs.instructor,
          updatedClasses = _this$state$updatedUs.course,
          updatedCourseContext = _this$state$updatedUs.courseContext,
          updatedAccountSettings = _this$state$updatedUs.accountSettings;
      var _this$props$user2 = this.props.user;
      _this$props$user2 = _this$props$user2 === void 0 ? {} : _this$props$user2;
      var studentInformation = _this$props$user2.studentInformation,
          contactInformation = _this$props$user2.contactInformation,
          emailAddress = _this$props$user2.emailAddress,
          location = _this$props$user2.location,
          instructor = _this$props$user2.instructor,
          course = _this$props$user2.course,
          courseContext = _this$props$user2.courseContext,
          accountSettings = _this$props$user2.accountSettings,
          accountStatus = _this$props$user2.accountStatus,
          accountType = _this$props$user2.accountType;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_Toast, null), external_react_default.a.createElement(Student_ClassModal, {
        open: classModalOpen,
        onClose: this.onCloseClassModal,
        handleClassChange: this.handleOptionsChange
      }), external_react_default.a.createElement(LocationModal["a" /* default */], {
        open: locationModalOpen,
        onClose: this.onCloseLocationModal,
        handleLocationsChange: function handleLocationsChange(selectedLocations) {
          return _this2.handleOptionsChange(selectedLocations, 'location', 'locations');
        }
      }), external_react_default.a.createElement(InstructorModal["a" /* default */], {
        open: instructorModalOpen,
        onClose: this.onCloseInstructorModal,
        handleInstructorsChange: function handleInstructorsChange(selectedInstructors) {
          return _this2.handleOptionsChange(selectedInstructors, 'instructor', 'instructors');
        }
      }), external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "content-section-holder"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex-content large"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l5"
      }, external_react_default.a.createElement(components_StudentInformation, {
        state: this.initialUserMount() ? studentInformation : updatedStudentInformation,
        handleDetailsChange: this.handleDetailsChange
      }), external_react_default.a.createElement(components_ContactInformation, {
        state: this.initialUserMount() ? contactInformation : updatedContactInformation,
        handleDetailsChange: this.handleDetailsChange
      }), external_react_default.a.createElement(components_EmailAddress, {
        state: this.initialUserMount() ? emailAddress : updatedEmailAddress,
        handleDetailsChange: this.handleDetailsChange
      })), external_react_default.a.createElement("div", {
        className: "col s12 l5"
      }, external_react_default.a.createElement(components_Location, {
        state: this.initialUserMount() ? location : updatedLocation,
        onOpenLocationModal: this.onOpenLocationModal,
        onRemoveLocation: this.onRemoveOption
      }), external_react_default.a.createElement(components_Instructor, {
        state: this.initialUserMount() ? instructor : updatedInstructor,
        onOpenInstructorModal: this.onOpenInstructorModal,
        onRemoveInstructor: this.onRemoveOption
      }), external_react_default.a.createElement(components_Class, {
        state: this.initialUserMount() ? course : updatedClasses,
        onOpenClassModal: this.onOpenClassModal,
        onRemoveInstructor: this.onRemoveOption
      }))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex-content large sameheight"
      }, external_react_default.a.createElement(components_AccountStatus, {
        state: accountStatus
      }), external_react_default.a.createElement(components_AccountType, {
        state: accountType
      })), external_react_default.a.createElement(components_CourseContext, {
        state: this.initialUserMount() ? courseContext : updatedCourseContext,
        handleDetailsChange: this.handleDetailsChange
      }), external_react_default.a.createElement(components_AccountSettings, {
        state: this.initialUserMount() ? accountSettings : updatedAccountSettings,
        handleDetailsChange: this.handleDetailsChange
      }), external_react_default.a.createElement(components_Actions, {
        state: actions,
        handleActionsChange: this.handleActionsChange,
        onResetPassword: this.onResetPassword,
        onSendWelcomeEmail: this.onSendWelcomeEmail,
        onSendPasswordResetEmail: this.onSendPasswordResetEmail
      }), external_react_default.a.createElement(components_DeleteAccount, {
        activeButton: accountStatus.status !== 'Activated',
        onDeleteAccount: this.onDeleteAccount
      }), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveChanges,
        className: "btn"
      }, "Save"))));
    }
  }]);

  return AccountPage;
}(external_react_default.a.Component);

/* harmony default export */ var Student_AccountPage = (AccountPage_AccountPage);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/CourseProgress/index.js


// TODO: Implement doughnut charts
var CourseProgress_CourseProgress = function CourseProgress(_ref) {
  var _ref$state = _ref.state,
      startDate = _ref$state.startDate,
      testDate = _ref$state.testDate,
      progress = _ref$state.progress,
      improvement = _ref$state.improvement,
      lessons = _ref$state.lessons,
      instruction = _ref$state.instruction,
      practiceTests = _ref$state.practiceTests,
      active = _ref.active;
  return external_react_default.a.createElement("div", {
    className: "col s12 l7 card-width-747"
  }, external_react_default.a.createElement("div", {
    className: "card-main card card-chart"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("h2", null, "Course Progress"), external_react_default.a.createElement("div", {
    className: "progress-block"
  }, external_react_default.a.createElement("div", {
    className: "progress-legend"
  }, active ? [external_react_default.a.createElement("div", {
    className: "legend-block",
    key: "0"
  }, external_react_default.a.createElement("span", {
    className: "small-text"
  }, "Start Date"), external_react_default.a.createElement("time", {
    dateTime: "2018-06-13",
    className: "large-text"
  }, startDate)), external_react_default.a.createElement("div", {
    className: "legend-block",
    key: "1"
  }, external_react_default.a.createElement("span", {
    className: "small-text"
  }, "Test Date"), external_react_default.a.createElement("time", {
    dateTime: "2018-10-06",
    className: "large-text"
  }, "Oct SAT (", testDate, ")"))] : external_react_default.a.createElement("span", {
    className: "text-frame"
  }, "Once the course begins, check here to be sure the student is on track.")), external_react_default.a.createElement("div", {
    className: "progress"
  }, external_react_default.a.createElement("div", {
    className: "determinate",
    style: {
      width: "".concat(active ? progress : '0', "%")
    }
  }, active && external_react_default.a.createElement("span", {
    className: "progress-label"
  }, progress, "%")))), external_react_default.a.createElement("div", {
    className: "charts-container"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("div", {
    className: "chart-block"
  }, external_react_default.a.createElement("div", {
    className: "js-donut-chart js-donut-middle",
    "data-stroke-width": "20",
    "data-source": "./inc/score-data-improvement.json"
  }), external_react_default.a.createElement("div", {
    className: "chart-text"
  }, external_react_default.a.createElement("span", {
    className: "title"
  }, "Improvement"), active ? [external_react_default.a.createElement("span", {
    className: "value",
    key: "0"
  }, improvement, "%"), external_react_default.a.createElement("span", {
    className: "description",
    key: "1"
  }, "vs target score")] : external_react_default.a.createElement("span", {
    className: "inactive-text"
  }, "None Yet")))), external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("div", {
    className: "chart-block"
  }, external_react_default.a.createElement("div", {
    className: "js-donut-chart js-donut-middle",
    "data-stroke-width": "20",
    "data-source": "./inc/score-data-lessons.json"
  }), external_react_default.a.createElement("div", {
    className: "chart-text"
  }, external_react_default.a.createElement("span", {
    className: "title"
  }, "Lessons"), active ? [external_react_default.a.createElement("span", {
    className: "value",
    key: "0"
  }, lessons, "%"), external_react_default.a.createElement("span", {
    className: "description",
    key: "1"
  }, "vs scheduled lessons")] : external_react_default.a.createElement("span", {
    className: "inactive-text"
  }, "None Scheduled")))), external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("div", {
    className: "chart-block"
  }, external_react_default.a.createElement("div", {
    className: "js-donut-chart js-donut-middle",
    "data-stroke-width": "20",
    "data-source": "./inc/score-data-instruction.json"
  }), external_react_default.a.createElement("div", {
    className: "chart-text"
  }, external_react_default.a.createElement("span", {
    className: "title"
  }, "Instruction"), active ? [external_react_default.a.createElement("span", {
    className: "value",
    key: "0"
  }, instruction, "%"), external_react_default.a.createElement("span", {
    className: "description",
    key: "1"
  }, "vs scheduled instruction")] : external_react_default.a.createElement("span", {
    className: "inactive-text"
  }, "None Scheduled")))), external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("div", {
    className: "chart-block"
  }, external_react_default.a.createElement("div", {
    className: "js-donut-chart js-donut-middle",
    "data-stroke-width": "20",
    "data-source": "./inc/score-data-practice-tests.json"
  }), external_react_default.a.createElement("div", {
    className: "chart-text"
  }, external_react_default.a.createElement("span", {
    className: "title"
  }, "Practice Tests"), active ? [external_react_default.a.createElement("span", {
    className: "value",
    key: "0"
  }, practiceTests, "%"), external_react_default.a.createElement("span", {
    className: "description",
    key: "1"
  }, "vs scheduled tests")] : external_react_default.a.createElement("span", {
    className: "inactive-text"
  }, "None Scheduled"))))), active ? external_react_default.a.createElement("div", {
    className: "chart-legend"
  }, external_react_default.a.createElement("div", {
    className: "row mb-0"
  }, external_react_default.a.createElement("div", {
    className: "col legend-frame"
  }, external_react_default.a.createElement("span", {
    className: "box complete"
  }), external_react_default.a.createElement("span", {
    className: "text"
  }, "Complete")), external_react_default.a.createElement("div", {
    className: "col legend-frame"
  }, external_react_default.a.createElement("span", {
    className: "box behind"
  }), external_react_default.a.createElement("span", {
    className: "text"
  }, "Behind Schedule")))) : null))));
};

/* harmony default export */ var components_CourseProgress = (CourseProgress_CourseProgress);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/OverdueWork/index.js


var OverdueWork_OverdueWork = function OverdueWork(_ref) {
  var _ref$state = _ref.state,
      lessons = _ref$state.lessons,
      worksheets = _ref$state.worksheets,
      quizzes = _ref$state.quizzes,
      practiceTests = _ref$state.practiceTests,
      active = _ref.active;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5 card-width-366"
  }, external_react_default.a.createElement("div", {
    className: "card-main card card-chart"
  }, external_react_default.a.createElement("div", {
    className: "card-content"
  }, external_react_default.a.createElement("h2", null, "Overdue Work"), external_react_default.a.createElement("ul", {
    className: "points-list-large"
  }, external_react_default.a.createElement("li", {
    className: active ? 'style-red-darken' : ''
  }, external_react_default.a.createElement("span", {
    className: "badge-circle"
  }, lessons, " ", external_react_default.a.createElement("span", {
    className: "badge-text"
  }, "Lessons"))), external_react_default.a.createElement("li", {
    className: active ? 'style-pink-darken' : ''
  }, external_react_default.a.createElement("span", {
    className: "badge-circle",
    style: {
      paddingTop: '0'
    }
  }, worksheets, " ", external_react_default.a.createElement("span", {
    className: "badge-text"
  }, "Worksheets"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", {
    className: "badge-circle"
  }, quizzes, " ", external_react_default.a.createElement("span", {
    className: "badge-text"
  }, "Quizzes"))), external_react_default.a.createElement("li", {
    className: active ? 'style-blue-light' : ''
  }, external_react_default.a.createElement("span", {
    className: "badge-circle",
    style: {
      paddingTop: '0'
    }
  }, practiceTests, " ", external_react_default.a.createElement("span", {
    className: "badge-text"
  }, "Practice Tests")))))));
};

/* harmony default export */ var components_OverdueWork = (OverdueWork_OverdueWork);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/SummaryCards/index.js


var SummaryCards_formatTimeLoggedIn = function formatTimeLoggedIn(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, hours !== 0 && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", {
    className: "text-large"
  }, hours), external_react_default.a.createElement("span", {
    className: "text-small"
  }, "hrs ")), minutes !== 0 && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", {
    className: "text-large"
  }, minutes), external_react_default.a.createElement("span", {
    className: "text-small"
  }, "min")));
};

var SummaryCards_formatVideoWatched = function formatVideoWatched(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, hours !== 0 && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", {
    className: "text-large"
  }, hours), external_react_default.a.createElement("span", {
    className: "text-small"
  }, "hrs ")), minutes !== 0 && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", {
    className: "text-large"
  }, minutes), external_react_default.a.createElement("span", {
    className: "text-small"
  }, "min")));
};

var SummaryCards_SummaryCards = function SummaryCards(_ref) {
  var _ref$state = _ref.state,
      questionsAnswered = _ref$state.questionsAnswered,
      videoWatched = _ref$state.videoWatched,
      notesTaken = _ref$state.notesTaken,
      totalTimeLoggedIn = _ref$state.totalTimeLoggedIn,
      lastLogIn = _ref$state.lastLogIn,
      loginTimeCode = _ref$state.loginTimeCode,
      onTimePercentage = _ref$state.onTimePercentage,
      active = _ref.active;
  return external_react_default.a.createElement("div", {
    className: "col s12 l5 card-width-366"
  }, external_react_default.a.createElement("ul", {
    className: "alerts-list"
  }, external_react_default.a.createElement("li", {
    className: "card card-alert"
  }, external_react_default.a.createElement("span", {
    className: active ? 'icon-box purple darken-3' : 'icon-box'
  }, external_react_default.a.createElement("i", {
    className: "icon-pencil2"
  })), external_react_default.a.createElement("div", {
    className: active ? 'alert-text purple-text text-darken-3' : 'alert-text'
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "Questions Answered")), external_react_default.a.createElement("div", {
    className: "value"
  }, external_react_default.a.createElement("b", {
    className: "text-large"
  }, active ? questionsAnswered : '0')))), external_react_default.a.createElement("li", {
    className: "card card-alert alert-blue-dark"
  }, external_react_default.a.createElement("span", {
    className: active ? 'icon-box cyan darken-2' : 'icon-box'
  }, external_react_default.a.createElement("i", {
    className: "icon-videocam"
  })), external_react_default.a.createElement("div", {
    className: active ? 'alert-text cyan-text text-darken-2' : 'alert-text'
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "Video Watched")), external_react_default.a.createElement("div", {
    className: "value"
  }, active ? SummaryCards_formatVideoWatched(videoWatched) : external_react_default.a.createElement("b", {
    className: "text-large"
  }, "0")))), external_react_default.a.createElement("li", {
    className: "card card-alert"
  }, external_react_default.a.createElement("span", {
    className: active ? 'icon-box pink darken-2' : 'icon-box'
  }, external_react_default.a.createElement("i", {
    className: "icon-note"
  })), external_react_default.a.createElement("div", {
    className: active ? 'alert-text pink-text text-darken-2' : 'alert-text'
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "Notes Taken")), external_react_default.a.createElement("div", {
    className: "value"
  }, external_react_default.a.createElement("b", {
    className: "text-large"
  }, active ? notesTaken : '0')))), external_react_default.a.createElement("li", {
    className: "card card-alert"
  }, external_react_default.a.createElement("span", {
    className: active ? 'icon-box green darken-3' : 'icon-box'
  }, external_react_default.a.createElement("i", {
    className: "icon-clock"
  })), external_react_default.a.createElement("div", {
    className: active ? 'alert-text green-text text-darken-3' : 'alert-text'
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "Total Time Logged In")), external_react_default.a.createElement("div", {
    className: "value"
  }, active ? SummaryCards_formatTimeLoggedIn(totalTimeLoggedIn) : external_react_default.a.createElement("b", {
    className: "text-large"
  }, "0")))), external_react_default.a.createElement("li", {
    className: "card card-alert"
  }, external_react_default.a.createElement("span", {
    className: active ? 'icon-box orange darken-2' : 'icon-box'
  }, external_react_default.a.createElement("i", {
    className: "icon-arrow-right"
  })), external_react_default.a.createElement("div", {
    className: active ? 'alert-text orange-text text-darken-2' : 'alert-text'
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "Last Log In")), external_react_default.a.createElement("div", {
    className: "value"
  }, active ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", {
    className: "text-large"
  }, lastLogIn), " ", external_react_default.a.createElement("span", {
    className: "text-small"
  }, loginTimeCode)) : external_react_default.a.createElement("span", {
    className: "text-large"
  }, "none")))), external_react_default.a.createElement("li", {
    className: "card card-alert"
  }, external_react_default.a.createElement("span", {
    className: active ? 'icon-box red' : 'icon-box'
  }, external_react_default.a.createElement("i", {
    className: "icon-bell"
  })), external_react_default.a.createElement("div", {
    className: active ? 'alert-text red-text' : 'alert-text'
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "On-Time Percentage")), external_react_default.a.createElement("div", {
    className: "value"
  }, active ? external_react_default.a.createElement("b", {
    className: "text-large"
  }, onTimePercentage, "%") : external_react_default.a.createElement("b", {
    className: "text-large"
  }, "not available"))))));
};

/* harmony default export */ var components_SummaryCards = (SummaryCards_SummaryCards);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/TestScores/index.js









var TestScores_data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

var getIndicatorStatus = function getIndicatorStatus(activeSection, active) {
  return {
    left: activeSection === 'subjectScores' ? '50%' : '0',
    right: activeSection === 'subjectScores' ? '0' : '50%',
    backgroundColor: active ? '#00bbf7' : '#b2b2b2'
  };
}; // TODO: Implement final line chart data implementation later


var TestScores_TestScores =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(TestScores, _React$Component);

  function TestScores(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TestScores);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TestScores).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetOpenSection", function (event, openSection) {
      event.preventDefault();

      _this.setState({
        openSection: openSection
      });
    });

    _this.state = {
      openSection: 'compositeScore'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(TestScores, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var openSection = this.state.openSection;
      var _this$props = this.props,
          _this$props$state = _this$props.state,
          compositeScore = _this$props$state.compositeScore,
          subjectScores = _this$props$state.subjectScores,
          active = _this$props.active;
      return external_react_default.a.createElement("div", {
        className: "col s12 l7 card-width-747"
      }, external_react_default.a.createElement("div", {
        className: "card-main card card-chart"
      }, external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("h2", null, "Test Scores"), external_react_default.a.createElement("div", {
        className: "tabs-container tabs-charts-container"
      }, !active ? external_react_default.a.createElement("div", {
        className: "card-note-box",
        style: {
          display: 'block'
        }
      }, external_react_default.a.createElement("span", {
        className: "title"
      }, "Nothing to see here yet."), external_react_default.a.createElement("span", {
        className: "text-frame"
      }, "Once this student has taken multiple tests, you can track the progress here. ")) : null, external_react_default.a.createElement("ul", {
        className: "tabs",
        style: active ? '' : {
          filter: 'blur(3px)'
        }
      }, external_react_default.a.createElement("li", {
        className: "tab col s6 l6"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'compositeScore');
        },
        className: openSection === 'compositeScore' ? 'active' : ''
      }, "Composite Score")), external_react_default.a.createElement("li", {
        className: "tab col s6 l6"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'subjectScores');
        },
        className: openSection === 'subjectScores' ? 'active' : ''
      }, "Subject Scores")), external_react_default.a.createElement("li", {
        className: "indicator",
        style: getIndicatorStatus(openSection, active)
      })), external_react_default.a.createElement("div", {
        id: "scores_tab01",
        className: openSection === 'compositeScore' ? '' : 'tab-content',
        style: active ? '' : {
          filter: 'blur(3px)'
        }
      }, external_react_default.a.createElement("div", {
        className: active ? 'card-panel panel-scores light-blue accent-2 white-text' : 'card-panel panel-scores white-text'
      }, external_react_default.a.createElement("ul", {
        className: "panel-list"
      }, external_react_default.a.createElement("li", {
        className: "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "text-small"
      }, "Reading"), active ? external_react_default.a.createElement("strong", {
        className: "text-large"
      }, "+", compositeScore.reading) : null), external_react_default.a.createElement("li", {
        className: "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "text-small"
      }, "Writing"), active ? external_react_default.a.createElement("strong", {
        className: "text-large"
      }, "+", compositeScore.writing) : null), external_react_default.a.createElement("li", {
        className: "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "text-small"
      }, "Math"), active ? external_react_default.a.createElement("strong", {
        className: "text-large"
      }, "+", compositeScore.math) : null), external_react_default.a.createElement("li", {
        className: "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "text-small"
      }, "Composite"), active ? external_react_default.a.createElement("strong", {
        className: "text-large"
      }, "+", compositeScore.composite) : null))), external_react_default.a.createElement("div", {
        className: "chart-line-container js-scrollable-chart"
      }, external_react_default.a.createElement(external_react_chartjs_2_["Line"], {
        data: TestScores_data
      }))), external_react_default.a.createElement("div", {
        id: "scores_tab02",
        className: openSection === 'subjectScores' ? '' : 'tab-content',
        style: active ? '' : {
          filter: 'blur(3px)'
        }
      }, external_react_default.a.createElement("div", {
        className: active ? 'card-panel panel-scores light-blue accent-2 white-text' : 'card-panel panel-scores white-text'
      }, external_react_default.a.createElement("ul", {
        className: "panel-list"
      }, external_react_default.a.createElement("li", {
        className: "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "text-small"
      }, "Reading"), active ? external_react_default.a.createElement("strong", {
        className: "text-large"
      }, "+", subjectScores.reading) : null), external_react_default.a.createElement("li", {
        className: "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "text-small"
      }, "Writing"), active ? external_react_default.a.createElement("strong", {
        className: "text-large"
      }, "+", subjectScores.writing) : null), external_react_default.a.createElement("li", {
        className: "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "text-small"
      }, "Math"), active ? external_react_default.a.createElement("strong", {
        className: "text-large"
      }, "+", subjectScores.math) : null), external_react_default.a.createElement("li", {
        className: "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "text-small"
      }, "Composite"), active ? external_react_default.a.createElement("strong", {
        className: "text-large"
      }, "+", subjectScores.composite) : null))), external_react_default.a.createElement("div", {
        className: "chart-line-container js-scrollable-chart"
      }, external_react_default.a.createElement(external_react_chartjs_2_["Line"], {
        data: TestScores_data
      })))))));
    }
  }]);

  return TestScores;
}(external_react_default.a.Component);

;
/* harmony default export */ var components_TestScores = (TestScores_TestScores);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js









var StrengthsAndWeaknesses_getIndicatorStatus = function getIndicatorStatus(activeSection) {
  switch (activeSection) {
    case 'reading':
      return {
        left: '0',
        right: '66%'
      };

    case 'writing':
      return {
        left: '33%',
        right: '33%'
      };

    case 'math':
      return {
        left: '66%',
        right: '0'
      };

    default:
      return null;
  }
}; // TODO: Figure out how the client wants this data visualized and what these bar graphs actually mean


var StrengthsAndWeaknesses_StrengthsAndWeaknesses =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(StrengthsAndWeaknesses, _React$Component);

  function StrengthsAndWeaknesses(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, StrengthsAndWeaknesses);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(StrengthsAndWeaknesses).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetOpenSection", function (event, openSection) {
      event.preventDefault();

      _this.setState({
        openSection: openSection
      });
    });

    _this.state = {
      openSection: 'reading'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(StrengthsAndWeaknesses, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var openSection = this.state.openSection; // eslint-disable-next-line no-unused-vars

      var _this$props = this.props,
          _this$props$state = _this$props.state,
          reading = _this$props$state.reading,
          writing = _this$props$state.writing,
          math = _this$props$state.math,
          active = _this$props.active;
      return external_react_default.a.createElement("div", {
        className: "card-block"
      }, external_react_default.a.createElement("h2", {
        className: "h1"
      }, "Strengths & Weaknesses"), external_react_default.a.createElement("div", {
        className: "card-main-full card"
      }, external_react_default.a.createElement("div", {
        className: "tabs-container"
      }, active ? [external_react_default.a.createElement("div", {
        className: "card-panel light-blue accent-2 white-text",
        key: "0"
      }, external_react_default.a.createElement("ul", {
        className: "tabs row"
      }, external_react_default.a.createElement("li", {
        className: "tab col s4 l4",
        style: {
          margin: '0'
        }
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: openSection === 'reading' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'reading');
        }
      }, "Reading")), external_react_default.a.createElement("li", {
        className: "tab col s4 l4",
        style: {
          margin: '0'
        }
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: openSection === 'writing' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'writing');
        }
      }, "Writing")), external_react_default.a.createElement("li", {
        className: "tab col s4 l4",
        style: {
          margin: '0'
        }
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: openSection === 'math' ? 'active' : '',
        onClick: function onClick(event) {
          return _this2.onSetOpenSection(event, 'math');
        }
      }, "Math")), external_react_default.a.createElement("li", {
        className: "indicator",
        style: StrengthsAndWeaknesses_getIndicatorStatus(openSection)
      }))), external_react_default.a.createElement("div", {
        className: "card-content tabs-content",
        key: "1"
      }, external_react_default.a.createElement("div", {
        id: "tabs_tab01",
        className: openSection === 'reading' ? '' : 'tab-content'
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l5 xl4 chart-column"
      }, external_react_default.a.createElement("div", {
        className: "chart-block chart-block-large"
      }, external_react_default.a.createElement("div", {
        className: "js-donut-chart js-donut-large",
        "data-stroke-width": "32",
        "data-source": "./inc/score-data-reading.json"
      }), external_react_default.a.createElement("div", {
        className: "chart-text"
      }, external_react_default.a.createElement("span", {
        className: "title"
      }, "Reading"), external_react_default.a.createElement("span", {
        className: "value"
      }, reading.correctAnswers), external_react_default.a.createElement("span", {
        className: "description"
      }, "out of ", external_react_default.a.createElement("b", null, reading.totalAnswers))))), external_react_default.a.createElement("div", {
        className: "col s12 l7 xl8"
      }, external_react_default.a.createElement("ul", {
        className: "collapsible expandable collapsible-explain"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "collapsible-header"
      }, external_react_default.a.createElement("b", null, "Explain This Graph")), external_react_default.a.createElement("div", {
        className: "collapsible-body"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col l6"
      }, external_react_default.a.createElement("ul", {
        className: "legend-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "legend-frame"
      }, external_react_default.a.createElement("span", {
        className: "box red darken-2"
      }), external_react_default.a.createElement("strong", {
        className: "text h3"
      }, "Focus Here!")), external_react_default.a.createElement("p", null, "Most people with your score would get these correct, but you got them wrong. Work on these and you can pick up some easy points!")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "legend-frame"
      }, external_react_default.a.createElement("span", {
        className: "box red lighten-5"
      }), external_react_default.a.createElement("strong", {
        className: "text h3"
      }, "Tough Gains")), external_react_default.a.createElement("p", null, "You missed these, but so did most others with a similar score. You\u2019ll likely \uFB01nd easier gains elsewhere.")))), external_react_default.a.createElement("div", {
        className: "col l6"
      }, external_react_default.a.createElement("ul", {
        className: "legend-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "legend-frame"
      }, external_react_default.a.createElement("span", {
        className: "box light-green darken-2"
      }), external_react_default.a.createElement("strong", {
        className: "text h3"
      }, "Well Done!")), external_react_default.a.createElement("p", null, "You\u2019re overachiving in this category compared to other with your score. Keep up the good work!")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "legend-frame"
      }, external_react_default.a.createElement("span", {
        className: "box  light-green lighten-4"
      }), external_react_default.a.createElement("strong", {
        className: "text h3"
      }, "Piece o\u2019 Cake")), external_react_default.a.createElement("p", null, "You answered these correctly like others with a similar score.")))))))))), external_react_default.a.createElement("div", {
        className: "graphs-section"
      }, external_react_default.a.createElement("div", {
        className: "graphs-block"
      }, external_react_default.a.createElement("div", {
        className: "graph-row graph-row-title"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("h3", {
        className: "graph-title"
      }, "Passage Type")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '100%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '80%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '80%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Science")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '85%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '100%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '70%'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Informational Graphic Passage")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '75%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '70%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '70%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "History/Social Science")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '85%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '5%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '15%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "US & World Literature")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '45%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '85%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '0'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Paired Passages")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '35%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '60%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '10%'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18")))), external_react_default.a.createElement("div", {
        className: "graphs-block"
      }, external_react_default.a.createElement("div", {
        className: "graph-row graph-row-title"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("h3", {
        className: "graph-title"
      }, "Question Type")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '85%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '12%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '95%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row-block"
      }, external_react_default.a.createElement("div", {
        className: "graph-row graph-row-subtitle"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Citing Textual Evidence")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '55%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '70%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '12%'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Cite Text as Evidence")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '20%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '85%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '70%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Author\u2019s Intention and Method")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '55%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '7%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '15%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Support / Refute a Claim")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '47%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '12%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '0'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18")))), external_react_default.a.createElement("div", {
        className: "graph-row-block"
      }, external_react_default.a.createElement("div", {
        className: "graph-row graph-row-subtitle"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Reading Closely")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '12%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '55%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '10%'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Detail Question")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '100%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '8%'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '95%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '0'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))), external_react_default.a.createElement("div", {
        className: "graph-row graph-row-inner"
      }, external_react_default.a.createElement("div", {
        className: "graph-col text-column"
      }, external_react_default.a.createElement("strong", {
        className: "graph-subtitle"
      }, "Support / Refute a Claim")), external_react_default.a.createElement("div", {
        className: "graph-col graph-container"
      }, external_react_default.a.createElement("div", {
        className: "graph-linear"
      }, external_react_default.a.createElement("div", {
        className: "part-left"
      }, external_react_default.a.createElement("div", {
        className: "part-green-light",
        style: {
          width: '75%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-red",
        style: {
          width: '0'
        }
      }))), external_react_default.a.createElement("div", {
        className: "part-right"
      }, external_react_default.a.createElement("div", {
        className: "part-red-light",
        style: {
          width: '100%'
        }
      }, external_react_default.a.createElement("div", {
        className: "part-green",
        style: {
          width: '70%'
        }
      }))))), external_react_default.a.createElement("div", {
        className: "graph-col graph-info"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, "12"), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "out of"), external_react_default.a.createElement("span", {
        className: "text-large"
      }, "18"))))))), external_react_default.a.createElement("div", {
        id: "tabs_tab02",
        className: openSection === 'writing' ? '' : 'tab-content'
      }, external_react_default.a.createElement("h3", null, "Tab 02 content"), external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quasi inventore expedita maxime, vero magnam architecto eius laudantium corrupti! Ut fuga sit corrupti, vitae cum temporibus sed dolore labore! Fugit."), external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorem nihil minus, quasi, dicta cupiditate aut magni ea veniam natus provident eveniet tempore iure minima placeat distinctio ducimus quo cum.")), external_react_default.a.createElement("div", {
        id: "tabs_tab03",
        className: openSection === 'math' ? '' : 'tab-content'
      }, external_react_default.a.createElement("h3", null, "Tab 03 content"), external_react_default.a.createElement("p", null, "Expedita quibusdam sed, temporibus quasi dolorem iure non inventore quaerat sit mollitia dolores minima illo perspiciatis omnis delectus, recusandae quos, incidunt ratione."), external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, enim? Itaque reprehenderit, id eos quasi optio est. Soluta alias, minima consequuntur obcaecati odio maiores, molestiae, vel ipsum modi delectus enim!")))] : [external_react_default.a.createElement("div", {
        className: "card-panel white-text",
        style: {
          backgroundColor: '#b2b2b2'
        },
        key: "0"
      }, external_react_default.a.createElement("h2", null, "Areas for Improvement")), external_react_default.a.createElement("div", {
        className: "card-content",
        key: "1"
      }, external_react_default.a.createElement("div", {
        className: "card-note-box"
      }, external_react_default.a.createElement("span", {
        className: "title"
      }, "Nothing to see here yet."), external_react_default.a.createElement("span", {
        className: "text-frame"
      }, "As the this student takes practice tests and completes course work, we\u2019ll track the student\u2019s strengths and weaknesess. Check back here once the course begins.")))])));
    }
  }]);

  return StrengthsAndWeaknesses;
}(external_react_default.a.Component);

/* harmony default export */ var components_StrengthsAndWeaknesses = (StrengthsAndWeaknesses_StrengthsAndWeaknesses);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/index.js










 // eslint-disable-next-line react/prefer-stateless-function

var DetailSummaryPage_DetailSummaryPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DetailSummaryPage, _React$Component);

  function DetailSummaryPage() {
    Object(classCallCheck["a" /* default */])(this, DetailSummaryPage);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DetailSummaryPage).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(DetailSummaryPage, [{
    key: "render",
    value: function render() {
      var _this$props$user = this.props.user,
          active = _this$props$user.active,
          courseProgress = _this$props$user.courseProgress,
          overdueWork = _this$props$user.overdueWork,
          summary = _this$props$user.summary,
          testScores = _this$props$user.testScores,
          strengthsAndWeaknesses = _this$props$user.strengthsAndWeaknesses;
      return external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "cards-section"
      }, external_react_default.a.createElement("div", {
        className: "row d-flex justify-content-center mb-0"
      }, external_react_default.a.createElement(components_CourseProgress, {
        active: active,
        state: courseProgress
      }), external_react_default.a.createElement(components_OverdueWork, {
        active: active,
        state: overdueWork
      })), external_react_default.a.createElement("div", {
        className: "row d-flex justify-content-center mb-0"
      }, external_react_default.a.createElement(components_SummaryCards, {
        active: active,
        state: summary
      }), external_react_default.a.createElement(components_TestScores, {
        active: active,
        state: testScores
      }))), external_react_default.a.createElement(components_StrengthsAndWeaknesses, {
        active: active,
        state: strengthsAndWeaknesses
      })));
    }
  }]);

  return DetailSummaryPage;
}(external_react_default.a.Component);

/* harmony default export */ var Student_DetailSummaryPage = (DetailSummaryPage_DetailSummaryPage);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/utils/formatTimeEstimate.js
var formatTimeEstimate = function formatTimeEstimate(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  var hourString = hours !== 0 ? "".concat(hours, " hrs") : '';
  var minuteString = minutes !== 0 ? "".concat(minutes, " mins") : '';
  return "".concat(hourString, " ").concat(minuteString);
};

/* harmony default export */ var utils_formatTimeEstimate = (formatTimeEstimate);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/utils/statusColorMap.js
var statusColorMap = {
  Assigned: 'grey darken-4',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple'
};
var chartColorMap = {
  Assigned: '#333',
  Accomplished: '#7327cc',
  Beginning: '#ed1c24',
  Exemplary: 'rgb(0, 100, 244)',
  Developing: '#c10078'
};
/* harmony default export */ var utils_statusColorMap = (statusColorMap);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/components/FullView/index.js












var _data = function data(percentage, status) {
  return {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: [chartColorMap[status], '#eaeaea']
    }]
  };
};

var FullView_FullView =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(FullView, _React$Component);

  function FullView(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FullView);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FullView).call(this, props));

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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDropdownClick", function (event, index) {
      var dropdownIsOpen = _this.state.dropdownIsOpen;
      event.preventDefault();

      if (dropdownIsOpen) {
        return _this.onCloseDropdown();
      }

      return _this.onSetDropdown(index);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapWorksheetCards", function () {
      var worksheets = _this.props.worksheets;
      var _this$state = _this.state,
          dropdownIndex = _this$state.dropdownIndex,
          dropdownIsOpen = _this$state.dropdownIsOpen;
      return worksheets.map(function (worksheet, index) {
        var disabled = worksheet.disabled,
            worksheetName = worksheet.worksheetName,
            worksheetSource = worksheet.worksheetSource,
            subject = worksheet.subject,
            problemType = worksheet.problemType,
            difficulty = worksheet.difficulty,
            score = worksheet.score,
            status = worksheet.status,
            problems = worksheet.problems,
            timeEstimate = worksheet.timeEstimate,
            availableDate = worksheet.availableDate,
            dueDate = worksheet.dueDate,
            classifications = worksheet.classifications,
            flags = worksheet.flags,
            late = worksheet.late;
        return external_react_default.a.createElement("div", {
          className: "card-main-col col s12 m8 l7 xl5",
          key: worksheet.id
        }, external_react_default.a.createElement("div", {
          className: disabled ? 'card-main work-card card-disabled card' : 'card-main work-card card'
        }, external_react_default.a.createElement("div", {
          className: "card-panel panel-border"
        }, external_react_default.a.createElement("div", {
          className: "card-panel-row row"
        }, external_react_default.a.createElement("div", {
          className: "icon-col col s2"
        }, external_react_default.a.createElement("span", {
          className: "block-icon"
        }, external_react_default.a.createElement("i", {
          className: "icon-sheets-w"
        }))), external_react_default.a.createElement("div", {
          className: "col s8"
        }, external_react_default.a.createElement("div", {
          className: "card-panel-text"
        }, external_react_default.a.createElement("div", {
          className: "text-small truncate"
        }, "Worksheet (", subject, ")"), external_react_default.a.createElement("div", {
          className: "text-large truncate"
        }, worksheetName))), external_react_default.a.createElement("div", {
          className: "position-top right-align"
        }, external_react_default.a.createElement("div", {
          className: "icons-row"
        }, flags.length > 0 && external_react_default.a.createElement("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, external_react_default.a.createElement("b", {
          className: "badge-text"
        }, flags.length), " ", external_react_default.a.createElement("i", {
          className: "icon-flag"
        })), external_react_default.a.createElement("div", {
          className: "dropdown-block col"
        }, external_react_default.a.createElement("a", {
          href: "#",
          "data-target": "dropdown01",
          className: "dropdown-trigger btn",
          onClick: function onClick(event) {
            return _this.handleDropdownClick(event, index);
          }
        }, external_react_default.a.createElement("i", {
          className: "material-icons dots-icon"
        }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? external_react_default.a.createElement("ul", {
          id: "dropdown01",
          className: "dropdown-content dropdown-wide",
          style: {
            display: 'block',
            opacity: '1',
            transform: 'scaleX(1) scaleY(1)'
          }
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#modal_user_edit",
          className: "modal-trigger link-block"
        }, "View Details")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!"
        }, "Dismiss Flags")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!"
        }, "Reset")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!",
          className: "link-delete"
        }, "Delete"))) : null)))), external_react_default.a.createElement("div", {
          className: "card-top-block"
        }, external_react_default.a.createElement("div", {
          className: "d-flex row mb-0"
        }, external_react_default.a.createElement("div", {
          className: "left-col col s7"
        }, external_react_default.a.createElement("dl", {
          className: "dl-horizontal"
        }, external_react_default.a.createElement("dt", null, "Problem Type:"), external_react_default.a.createElement("dd", null, problemType))), external_react_default.a.createElement("div", {
          className: "right-col col s5 right-align"
        }, external_react_default.a.createElement("dl", {
          className: "dl-horizontal"
        }, external_react_default.a.createElement("dt", null, "Di\uFB03culty:"), external_react_default.a.createElement("dd", null, difficulty)))))), external_react_default.a.createElement("div", {
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
            return _data(score, status);
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
            backgroundColor: chartColorMap[status]
          }
        }, external_react_default.a.createElement("span", {
          "data-count-up": true,
          "data-start-val": "0",
          "data-end-val": "96",
          "data-duration": "1"
        }), external_react_default.a.createElement("span", {
          className: "percentage"
        }, score && "".concat(score, "%")))), external_react_default.a.createElement("div", {
          className: "chart-row"
        }, external_react_default.a.createElement("div", {
          className: "chart-col chart-start"
        }, "\xA0"), external_react_default.a.createElement("div", {
          className: "chart-col chart-end"
        }, external_react_default.a.createElement("span", {
          className: "amount",
          style: {
            color: chartColorMap[status]
          }
        }, problems))), external_react_default.a.createElement("div", {
          className: "chart-description"
        }, external_react_default.a.createElement("dl", {
          className: "dl-horizontal"
        }, external_react_default.a.createElement("dt", null, "Time Est:"), external_react_default.a.createElement("dd", null, utils_formatTimeEstimate(timeEstimate))), external_react_default.a.createElement("dl", {
          className: "dl-horizontal"
        }, external_react_default.a.createElement("dt", null, "Problems:"), external_react_default.a.createElement("dd", null, problems))))), external_react_default.a.createElement("div", {
          className: "col s6 right-align justify-end"
        }, external_react_default.a.createElement("div", {
          className: "chart-description"
        }, external_react_default.a.createElement("dl", {
          className: "dl-horizontal"
        }, external_react_default.a.createElement("dt", null, "Available:"), external_react_default.a.createElement("dd", null, external_react_default.a.createElement("time", {
          dateTime: availableDate
        }, availableDate))), external_react_default.a.createElement("dl", {
          className: late ? 'dl-horizontal red-text text-darken-3' : 'dl-horizontal'
        }, disabled ? external_react_default.a.createElement("dt", null, "No Due Date") : [external_react_default.a.createElement("dt", {
          key: "0"
        }, "Due:"), external_react_default.a.createElement("dd", {
          key: "1"
        }, external_react_default.a.createElement("time", {
          dateTime: dueDate
        }, dueDate))])), external_react_default.a.createElement("div", {
          className: "align-self-end"
        }, external_react_default.a.createElement("span", {
          className: "badge badge-rounded-md ".concat(utils_statusColorMap[status], " white-text")
        }, status)))), external_react_default.a.createElement("div", {
          className: "card-text"
        }, external_react_default.a.createElement("dl", {
          className: "dl-horizontal"
        }, external_react_default.a.createElement("dt", null, "Worksheet Source:"), external_react_default.a.createElement("dd", null, worksheetSource))), external_react_default.a.createElement("div", {
          className: "card-inner-row"
        }, external_react_default.a.createElement("div", {
          className: "row-holder"
        }, external_react_default.a.createElement("ul", {
          className: "classification-list"
        }, classifications.map(function (classification) {
          return external_react_default.a.createElement("li", {
            className: "class-box",
            key: classification
          }, classification);
        })))))));
      });
    });

    _this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FullView, [{
    key: "render",
    value: function render() {
      var worksheets = this.props.worksheets;
      return external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "result-row center-align"
      }, external_react_default.a.createElement("b", {
        className: "result"
      }, " - ", worksheets.length, " results -")), external_react_default.a.createElement("div", {
        className: "row d-flex-content card-width-272"
      }, this.mapWorksheetCards()));
    }
  }]);

  return FullView;
}(external_react_default.a.Component);

/* harmony default export */ var components_FullView = (FullView_FullView);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/components/ListView/components/TableHeader/index.js


var TableHeader_TableHeader = function TableHeader() {
  return external_react_default.a.createElement("div", {
    className: "list-table-header"
  }, external_react_default.a.createElement("div", {
    className: "list-table-row"
  }, external_react_default.a.createElement("div", {
    className: "list-table-cell icon-cell"
  }, "\xA0"), external_react_default.a.createElement("div", {
    className: "list-table-cell name-cell"
  }, external_react_default.a.createElement("b", null, "Worksheet")), external_react_default.a.createElement("div", {
    className: "list-table-cell graph-cell"
  }, external_react_default.a.createElement("b", null, "Score")), external_react_default.a.createElement("div", {
    className: "list-table-cell description-cell"
  }, external_react_default.a.createElement("b", null, "Problems")), external_react_default.a.createElement("div", {
    className: "list-table-cell time-cell"
  }, external_react_default.a.createElement("b", null, "Time Est")), external_react_default.a.createElement("div", {
    className: "list-table-cell date-cell"
  }, external_react_default.a.createElement("b", null, "Assign")), external_react_default.a.createElement("div", {
    className: "list-table-cell date-cell"
  }, external_react_default.a.createElement("b", null, "Due")), external_react_default.a.createElement("div", {
    className: "list-table-cell completed-cell"
  }, external_react_default.a.createElement("b", null, "Completed")), external_react_default.a.createElement("div", {
    className: "list-table-cell flags-cell"
  }, external_react_default.a.createElement("b", null, "Flags")), external_react_default.a.createElement("div", {
    className: "list-table-cell status-cell"
  }, external_react_default.a.createElement("b", null, "Status")), external_react_default.a.createElement("div", {
    className: "list-table-cell drop-cell"
  }, "\xA0")));
};

/* harmony default export */ var components_TableHeader = (TableHeader_TableHeader);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/components/ListView/index.js












var ListView_ListView =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ListView, _React$Component);

  function ListView(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ListView);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ListView).call(this, props));

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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDropdownClick", function (event, index) {
      var dropdownIsOpen = _this.state.dropdownIsOpen;
      event.preventDefault();

      if (dropdownIsOpen) {
        return _this.onCloseDropdown();
      }

      return _this.onSetDropdown(index);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapWorksheetRows", function () {
      var worksheets = _this.props.worksheets;
      var _this$state = _this.state,
          dropdownIndex = _this$state.dropdownIndex,
          dropdownIsOpen = _this$state.dropdownIsOpen;
      return worksheets.map(function (worksheet, index) {
        var disabled = worksheet.disabled,
            worksheetName = worksheet.worksheetName,
            score = worksheet.score,
            status = worksheet.status,
            problems = worksheet.problems,
            timeEstimate = worksheet.timeEstimate,
            assignDate = worksheet.assignDate,
            dueDate = worksheet.dueDate,
            completed = worksheet.completed,
            flags = worksheet.flags;
        return external_react_default.a.createElement("div", {
          className: disabled ? 'card card-disabled list-table-row' : 'card list-table-row',
          key: worksheet.id
        }, external_react_default.a.createElement("div", {
          className: "list-table-cell icon-cell"
        }, external_react_default.a.createElement("span", {
          className: "block-icon"
        }, external_react_default.a.createElement("i", {
          className: "icon-sheets-w"
        }))), external_react_default.a.createElement("div", {
          className: "list-table-cell name-cell"
        }, external_react_default.a.createElement("div", {
          className: "card-panel-text truncate"
        }, external_react_default.a.createElement("div", {
          className: "text-large truncate"
        }, worksheetName))), external_react_default.a.createElement("div", {
          className: "list-table-cell graph-cell"
        }, score && external_react_default.a.createElement("span", {
          className: "chart-bar ".concat(utils_statusColorMap[status], " white-text")
        }, score, "%")), external_react_default.a.createElement("div", {
          className: "list-table-cell description-cell"
        }, problems), external_react_default.a.createElement("div", {
          className: "list-table-cell time-cell"
        }, utils_formatTimeEstimate(timeEstimate)), external_react_default.a.createElement("div", {
          className: "list-table-cell date-cell"
        }, external_react_default.a.createElement("time", {
          dateTime: "2019-01-27"
        }, assignDate)), external_react_default.a.createElement("div", {
          className: "list-table-cell date-cell"
        }, external_react_default.a.createElement("time", {
          dateTime: "2019-01-27"
        }, dueDate)), external_react_default.a.createElement("div", {
          className: "list-table-cell completed-cell"
        }, completed && external_react_default.a.createElement(external_react_default.a.Fragment, null, completed, " of ", problems)), external_react_default.a.createElement("div", {
          className: "list-table-cell flags-cell"
        }, flags.length > 0 && external_react_default.a.createElement("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, external_react_default.a.createElement("b", {
          className: "badge-text"
        }, flags.length), " ", external_react_default.a.createElement("i", {
          className: "icon-flag"
        }))), external_react_default.a.createElement("div", {
          className: "list-table-cell status-cell"
        }, external_react_default.a.createElement("span", {
          className: "badge badge-rounded-md ".concat(utils_statusColorMap[status], " white-text")
        }, status)), external_react_default.a.createElement("div", {
          className: "list-table-cell drop-cell"
        }, external_react_default.a.createElement("div", {
          className: "dropdown-block"
        }, external_react_default.a.createElement("a", {
          href: "#",
          "data-target": "dropdown01",
          className: "dropdown-trigger btn",
          onClick: function onClick(event) {
            return _this.handleDropdownClick(event, index);
          }
        }, external_react_default.a.createElement("i", {
          className: "material-icons dots-icon"
        }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? external_react_default.a.createElement("ul", {
          id: "dropdown01",
          className: "dropdown-content dropdown-wide",
          style: {
            display: 'block',
            opacity: '1',
            transform: 'scaleX(1) scaleY(1)'
          }
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#modal_user_edit",
          className: "modal-trigger link-block"
        }, "View Details")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!"
        }, "Dismiss Flags")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!"
        }, "Reset")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
          href: "#!",
          className: "link-delete"
        }, "Delete"))) : null)));
      });
    });

    _this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ListView, [{
    key: "render",
    value: function render() {
      var worksheets = this.props.worksheets;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "container-md"
      }, external_react_default.a.createElement("div", {
        className: "result-row center-align"
      }, external_react_default.a.createElement("b", {
        className: "result"
      }, " - ", worksheets.length, " results -")), external_react_default.a.createElement("div", {
        className: "list-view-section"
      }, external_react_default.a.createElement("div", {
        className: "list-table"
      }, external_react_default.a.createElement(components_TableHeader, null), external_react_default.a.createElement("div", {
        className: "list-table-body"
      }, this.mapWorksheetRows()))))));
    }
  }]);

  return ListView;
}(external_react_default.a.Component);

/* harmony default export */ var components_ListView = (ListView_ListView);
// EXTERNAL MODULE: ./components/utils/sampleTopics.js
var sampleTopics = __webpack_require__("WoyS");

// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/utils/worksheetSortOptions.js
/* harmony default export */ var worksheetSortOptions = ([{
  label: 'Due Date',
  value: 'dueDate'
}, {
  label: 'Assign Date',
  value: 'assignDate'
}, {
  label: 'Problems',
  value: 'problems'
}, {
  label: 'Completed',
  value: 'completed'
}, {
  label: 'Flags',
  value: 'flags'
}, {
  label: 'Score',
  value: 'score'
}, {
  label: 'Time Estimate',
  value: 'timeEstimate'
}]);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/components/FilterSection/index.js








/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

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
        activeFilters: []
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFilterClick", function (filter) {
      var currentActiveFilters = _this.state.activeFilters;
      var activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = external_immutability_helper_default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        var filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = external_immutability_helper_default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState({
        activeFilters: activeFilters
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFilterChange", function (event, name) {
      var _this$props = _this.props,
          onSetFilteredTopicState = _this$props.onSetFilteredTopicState,
          onUnsetFilteredTopicState = _this$props.onUnsetFilteredTopicState,
          onSetSort = _this$props.onSetSort;
      var value = event.target ? event.target.value : event;
      var updatedState = external_immutability_helper_default()(_this.state, {
        $merge: Object(defineProperty["a" /* default */])({}, name, value)
      });

      _this.setState(updatedState);

      if (name === 'topic') {
        if (event === '') {
          return onUnsetFilteredTopicState();
        }

        return onSetFilteredTopicState(event);
      } else if (name === 'sort') {
        return onSetSort(event);
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "submitNameFilter", function () {
      var _this$props2 = _this.props,
          onSetFilteredState = _this$props2.onSetFilteredState,
          onUnsetFilteredState = _this$props2.onUnsetFilteredState;
      var worksheetName = _this.state.worksheetName;

      if (worksheetName === '') {
        onUnsetFilteredState();
      }

      var transformedName = worksheetName.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    _this.state = {
      open: false,
      worksheetName: '',
      topic: {},
      sort: {},
      activeFilters: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          open = _this$state.open,
          activeFilters = _this$state.activeFilters,
          worksheetName = _this$state.worksheetName,
          topic = _this$state.topic,
          sort = _this$state.sort;
      var _this$props3 = this.props,
          currentView = _this$props3.currentView,
          onChangeView = _this$props3.onChangeView;
      return external_react_default.a.createElement("div", {
        className: "filter-form-holder"
      }, external_react_default.a.createElement("ul", {
        className: "collapsible expandable"
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
        checked: activeFilters.indexOf('reading') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('reading');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "reading"
      }, "Reading")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "writing",
        checked: activeFilters.indexOf('writing') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('writing');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "writing"
      }, "Writing")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "math",
        checked: activeFilters.indexOf('math') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('math');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "math"
      }, "Math"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "beginning",
        checked: activeFilters.indexOf('beginning') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('beginning');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "beginning"
      }, "Beginning")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "developing",
        checked: activeFilters.indexOf('developing') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('developing');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "developing"
      }, "Developing")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "accomplished",
        checked: activeFilters.indexOf('accomplished') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('accomplished');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "accomplished"
      }, "Accomplished")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "exemplary",
        checked: activeFilters.indexOf('exemplary') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('exemplary');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "exemplary"
      }, "Exemplary"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "unassigned",
        checked: activeFilters.indexOf('unassigned') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('unassigned');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "unassigned"
      }, "Unassigned")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "complete",
        checked: activeFilters.indexOf('complete') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('complete');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "complete"
      }, "Complete")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "incomplete",
        checked: activeFilters.indexOf('incomplete') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('incomplete');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "incomplete"
      }, "Incomplete"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "hasReviewFlags",
        checked: activeFilters.indexOf('hasReviewFlags') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('hasReviewFlags');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "hasReviewFlags"
      }, "Has Review Flags"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueToday",
        checked: activeFilters.indexOf('dueToday') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('dueToday');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueToday"
      }, "Due Today")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueNextSession",
        checked: activeFilters.indexOf('dueNextSession') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('dueNextSession');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueNextSession"
      }, "Due By Next Session")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "dueThisWeek",
        checked: activeFilters.indexOf('dueThisWeek') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('dueThisWeek');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "dueThisWeek"
      }, "Due this Week")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "overdue",
        checked: activeFilters.indexOf('overdue') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('overdue');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "overdue"
      }, "Overdue"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "some-class",
        checked: activeFilters.indexOf('class') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('class');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "some-class"
      }, "Some Class")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "tutoring",
        checked: activeFilters.indexOf('tutoring') !== -1,
        onChange: function onChange() {
          return _this2.handleFilterClick('tutoring');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "tutoring"
      }, "Tutoring")))), external_react_default.a.createElement("div", {
        className: "d-flex row mb-0 justify-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "name_search",
        value: worksheetName,
        className: "input-control validate",
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'worksheetName');
        }
      }), external_react_default.a.createElement("button", {
        type: "submit",
        className: "search-button",
        onClick: this.submitNameFilter
      }, external_react_default.a.createElement("i", {
        className: "icon-search"
      })), external_react_default.a.createElement("label", {
        className: worksheetName.length ? 'label active' : 'label',
        htmlFor: "name_search"
      }, "Search"))), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(topic, sampleTopics["a" /* default */]),
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'topic');
        },
        options: sampleTopics["a" /* default */],
        label: "Topic",
        stateKey: "topic",
        dropdownKey: "topic"
      }))))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-center"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12 xl7"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(sort, worksheetSortOptions),
        onChange: function onChange(event) {
          return _this2.handleFilterChange(event, 'sort');
        },
        options: worksheetSortOptions,
        label: "Sort By",
        stateKey: "sort",
        dropdownKey: "sort"
      }))))), external_react_default.a.createElement("div", {
        className: "switcher-block col s12 l4"
      }, external_react_default.a.createElement("div", {
        className: "view-switcher"
      }, external_react_default.a.createElement("ul", {
        className: "switcher center-align"
      }, external_react_default.a.createElement("li", {
        "data-view": "view-full",
        className: currentView === 'full' ? 'active' : '',
        onClick: function onClick() {
          return onChangeView('full');
        }
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "Full View")), external_react_default.a.createElement("li", {
        "data-view": "view-list",
        className: currentView === 'list' ? 'active' : '',
        onClick: function onClick() {
          return onChangeView('list');
        }
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "List View"))))), external_react_default.a.createElement("div", {
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
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/utils/sampleWorksheets.js
/* harmony default export */ var sampleWorksheets = ([{
  id: 1,
  worksheetName: 'Some SAT Problems about Triangles',
  subject: 'Math',
  score: '',
  problems: 15,
  problemType: 'Skill Builder',
  difficulty: 'Beginner',
  timeEstimate: '14',
  assignDate: '1/27/19',
  availableDate: '1/27/19',
  dueDate: '2/10/19',
  completed: '',
  flags: [],
  status: 'Assigned',
  disabled: true,
  late: false,
  topic: 'specialRightTriangles',
  worksheetSource: 'Admin Created',
  classifications: ['Right Triangles', 'More Math', "Lots Of Math"]
}, {
  id: 2,
  worksheetName: 'Worksheet 2',
  subject: 'Reading',
  score: '',
  problems: 18,
  problemType: 'Skill Builder',
  difficulty: 'Beginner',
  timeEstimate: '30',
  assignDate: '1/19/19',
  availableDate: '1/19/19',
  dueDate: '2/02/19',
  completed: 0,
  flags: ['one', 'two', 'three'],
  status: 'Assigned',
  disabled: false,
  late: true,
  topic: 'topic2',
  worksheetSource: 'User Created',
  classifications: ['Math', 'More Math', "Lots Of Math"]
}, {
  id: 3,
  worksheetName: 'Worksheet 3',
  subject: 'Science',
  score: '81',
  problems: 16,
  problemType: 'SAT Style',
  difficulty: 'Advanced',
  timeEstimate: '24',
  assignDate: '1/11/19',
  availableDate: '1/11/19',
  dueDate: '2/12/19',
  completed: 10,
  flags: [],
  status: 'Accomplished',
  disabled: false,
  late: false,
  topic: 'topic2',
  worksheetSource: 'Admin Created',
  classifications: ['Right Triangles', 'Math', "Lots Of Math"]
}, {
  id: 4,
  worksheetName: 'Worksheet 4',
  subject: 'Science',
  score: '32',
  problems: 14,
  problemType: 'SAT Style',
  difficulty: 'Mixed',
  timeEstimate: '31',
  assignDate: '1/24/19',
  availableDate: '1/24/19',
  dueDate: '2/27/19',
  completed: 4,
  flags: [],
  status: 'Beginning',
  disabled: false,
  late: true,
  topic: 'topic3',
  worksheetSource: 'User Created',
  classifications: ['Trigonometry', 'More Math', "Lots Of Math"]
}, {
  id: 5,
  worksheetName: 'Worksheet 5',
  subject: 'Reading',
  score: '93',
  problems: 21,
  problemType: 'Mixed',
  difficulty: 'Mixed',
  timeEstimate: '23',
  assignDate: '1/12/19',
  availableDate: '1/12/19',
  dueDate: '2/03/19',
  completed: 6,
  flags: [],
  status: 'Exemplary',
  disabled: false,
  late: false,
  topic: 'topic3',
  worksheetSource: 'Admin Created',
  classifications: ['Trigonometry', 'Math', "Lots Of Math"]
}, {
  id: 6,
  worksheetName: 'Worksheet 6',
  subject: 'Math',
  score: '64',
  problems: 30,
  problemType: 'Mixed',
  difficulty: 'Advanced',
  timeEstimate: '65',
  assignDate: '1/09/19',
  availableDate: '1/09/19',
  dueDate: '2/12/19',
  completed: 5,
  flags: [],
  status: 'Developing',
  disabled: false,
  late: false,
  topic: 'topic4',
  worksheetSource: 'User Created',
  classifications: ['Right Triangles', 'Trigonometry', 'More Math']
}]);
// EXTERNAL MODULE: ./components/utils/sortFunctions.js
var sortFunctions = __webpack_require__("PFiW");

// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/index.js














var DetailWorksheetPage_DetailWorksheetPage =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DetailWorksheetPage, _React$Component);

  function DetailWorksheetPage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DetailWorksheetPage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DetailWorksheetPage).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleAssignWorksheetDropdown", function (event) {
      event.preventDefault();

      _this.setState(function (_ref) {
        var assignWorksheetDropdownOpen = _ref.assignWorksheetDropdownOpen;
        return {
          assignWorksheetDropdownOpen: !assignWorksheetDropdownOpen
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChangeView", function (view) {
      return _this.setState({
        currentView: view
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetFilteredState", function (filterName) {
      return _this.setState({
        worksheetsAreFiltered: true,
        filterName: filterName
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        worksheetsAreFiltered: false,
        filterName: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetFilteredTopicState", function (filterTopic) {
      return _this.setState({
        worksheetsAreFiltered: true,
        filterTopic: filterTopic
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onUnsetFilteredTopicState", function () {
      return _this.setState({
        filterTopic: ''
      }, _this.checkForFilteredState);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onAssignWorksheet", function (assignType) {
      console.warn('Stubbed out assign worksheet click', assignType);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByName", function () {
      var _this$state = _this.state,
          worksheets = _this$state.worksheets,
          filterName = _this$state.filterName;
      return worksheets.reduce(function (finalArr, currentWorksheet) {
        var _currentWorksheet$acc = currentWorksheet.accountInfo,
            lastName = _currentWorksheet$acc.lastName,
            firstName = _currentWorksheet$acc.firstName;
        var worksheetString = "".concat(firstName.toLowerCase()).concat(lastName.toLowerCase());

        if (worksheetString.indexOf(filterName) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onFilterByTopic", function () {
      var preFilteredWorksheets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this$state2 = _this.state,
          allWorksheets = _this$state2.worksheets,
          filterTopic = _this$state2.filterTopic;
      var worksheets;

      if (preFilteredWorksheets.length) {
        worksheets = preFilteredWorksheets;
      } else {
        worksheets = allWorksheets;
      }

      return worksheets.reduce(function (finalArr, currentWorksheet) {
        var topic = currentWorksheet.topic;

        if (topic === filterTopic && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSortWorksheets", function (worksheets) {
      var sort = _this.state.sort;

      switch (sort) {
        case 'dueDate':
          return worksheets.sort(sortFunctions["c" /* dueDate */]);

        case 'assignDate':
          return worksheets.sort(sortFunctions["a" /* assignDate */]);

        case 'problems':
          return worksheets.sort(sortFunctions["i" /* problems */]);

        case 'completed':
          return worksheets.sort(sortFunctions["b" /* completed */]);

        case 'flags':
          return worksheets.sort(sortFunctions["f" /* flags */]);

        case 'score':
          return worksheets.sort(sortFunctions["j" /* score */]);

        case 'timeEstimate':
          return worksheets.sort(sortFunctions["m" /* timeEstimate */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getMappableWorksheets", function () {
      var _this$state3 = _this.state,
          filterName = _this$state3.filterName,
          filterTopic = _this$state3.filterTopic,
          allWorksheets = _this$state3.worksheets,
          sort = _this$state3.sort;
      var worksheets;

      if (filterName.length && !filterTopic.length) {
        worksheets = _this.onFilterByName();
      } else if (!filterName.length && filterTopic.length) {
        worksheets = _this.onFilterByTopic();
      } else if (filterName.length && filterTopic.length) {
        var filteredByName = _this.onFilterByName();

        worksheets = _this.onFilterByTopic(filteredByName);
      } else {
        worksheets = allWorksheets;
      }

      if (sort) {
        return _this.onSortWorksheets(worksheets);
      }

      return worksheets;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "checkForFilteredState", function () {
      var _this$state4 = _this.state,
          filterName = _this$state4.filterName,
          filterTopic = _this$state4.filterTopic;

      if (!filterName.length && !filterTopic.length) {
        _this.setState({
          worksheetsAreFiltered: false
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderWorksheetView", function () {
      var currentView = _this.state.currentView;

      switch (currentView) {
        case 'list':
          return external_react_default.a.createElement(components_ListView, {
            worksheets: _this.getMappableWorksheets()
          });

        case 'full':
          return external_react_default.a.createElement(components_FullView, {
            worksheets: _this.getMappableWorksheets()
          });

        default:
          break;
      }
    });

    _this.state = {
      sort: '',
      filterName: '',
      filterTopic: '',
      currentView: 'full',
      assignWorksheetDropdownOpen: false,
      worksheets: sampleWorksheets
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DetailWorksheetPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state5 = this.state,
          currentView = _this$state5.currentView,
          assignWorksheetDropdownOpen = _this$state5.assignWorksheetDropdownOpen;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-5 switcher-section"
      }, external_react_default.a.createElement(components_FilterSection, {
        currentView: currentView,
        onChangeView: this.onChangeView,
        onSetSort: this.onSetSort,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState,
        onSetFilteredTopicState: this.onSetFilteredTopicState,
        onUnsetFilteredTopicState: this.onUnsetFilteredTopicState
      }), this.renderWorksheetView()), external_react_default.a.createElement("div", {
        className: "add-btn-block"
      }, external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "dropdown_assign_selected",
        onClick: this.onToggleAssignWorksheetDropdown,
        className: "dropdown-trigger waves-effect waves-teal btn add-btn"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "add"), " Assign Worksheet"), external_react_default.a.createElement("ul", {
        id: "dropdown_assign_selected",
        className: "dropdown-content dropdown-small",
        style: {
          display: assignWorksheetDropdownOpen ? 'block' : '0',
          opacity: assignWorksheetDropdownOpen ? '1' : '0'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onAssignWorksheet('fromSaved');
        }
      }, "From Saved")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this2.onAssignWorksheet('createNew');
        }
      }, "Create New")))));
    }
  }]);

  return DetailWorksheetPage;
}(external_react_default.a.Component);

/* harmony default export */ var Student_DetailWorksheetPage = (DetailWorksheetPage_DetailWorksheetPage);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/LessonCard/index.js









var getProblemCompletionStatusColor = function getProblemCompletionStatusColor(solvedProblems, totalProblems) {
  if (solvedProblems / totalProblems <= .25) {
    return {
      backgroundColor: '#ed1c25'
    };
  } else if (solvedProblems / totalProblems <= .5) {
    return {
      backgroundColor: '#a005a5'
    };
  }

  return {
    backgroundColor: '#0200fd'
  };
}; // assigned ? 'card-main card-lesson-detail card-assigned card' : 'card-main card-lesson-detail card'}


var getLessonActivityStatus = function getLessonActivityStatus(assigned, dueDate) {
  if (assigned && dueDate) {
    return 'card-main card-lesson-detail card-assigned card';
  }

  if (!assigned && !dueDate) {
    return 'card-main card-lesson-detail card-not-assigned card';
  }

  return 'card-main card-lesson-detail card';
};

var LessonCard_LessonCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LessonCard, _React$Component);

  function LessonCard(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LessonCard);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LessonCard).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderLessonIcon", function (subject) {
      switch (subject) {
        case 'Reading':
          return 'icon-books';

        case 'Writing':
          return 'icon-hands';

        case 'Math':
          return 'icon-calculator';

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderProblemCount", function (assigned, totalProblems, solvedProblems) {
      if (assigned) {
        return external_react_default.a.createElement("span", {
          className: "chart-value chart-value-column",
          style: getProblemCompletionStatusColor(solvedProblems, totalProblems)
        }, external_react_default.a.createElement("span", {
          className: "chart-count",
          "data-count-up": true,
          "data-start-val": "0",
          "data-end-val": "4",
          "data-duration": "1"
        }, external_react_default.a.createElement("span", {
          className: "text-large"
        }, solvedProblems)), external_react_default.a.createElement("span", {
          className: "text-small"
        }, "out of"), " ", external_react_default.a.createElement("span", {
          className: "text-large"
        }, totalProblems));
      }

      return external_react_default.a.createElement("span", {
        className: "chart-value chart-value-column",
        style: {
          backgroundColor: '#666'
        }
      }, external_react_default.a.createElement("span", {
        "data-count-up": true,
        "data-start-val": "0",
        "data-end-val": "0",
        "data-duration": "1"
      }, external_react_default.a.createElement("span", {
        className: "text-large"
      }, totalProblems), external_react_default.a.createElement("span", {
        className: "text-small"
      }, "problems")));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderProblemCompletionStatus", function (dueTime, completed, completionDate, completionTime, completedLate, availableDate, dueDate, overdue, assigned) {
      if (completed) {
        return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", null, "Completed ", external_react_default.a.createElement("time", {
          dateTime: "2018-11-18T20:43"
        }, completionDate, " at ", completionTime), completedLate && external_react_default.a.createElement("span", {
          className: "status status-late"
        }, " (late)")));
      }

      if (availableDate) {
        return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", null, "Available ", external_react_default.a.createElement("time", {
          dateTime: "2018-12-13"
        }, availableDate)), external_react_default.a.createElement("p", null, external_react_default.a.createElement("time", {
          dateTime: "2018-12-17"
        }, "(due ", dueDate, ")")));
      }

      if (overdue) {
        return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("strong", {
          className: "text-large",
          style: {
            color: '#c1272d'
          }
        }, "Overdue"));
      }

      if (!availableDate && dueDate) {
        return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", null, "Due ", external_react_default.a.createElement("time", {
          dateTime: "2018-12-15"
        }, dueDate)));
      }

      if (!assigned && !dueDate) {
        return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", null, "Not Assigned"));
      }

      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("strong", {
        className: "text-large",
        style: {
          color: '#006837'
        }
      }, "Due Today at ", dueTime));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderAlerts", function (alerts) {
      if (alerts.length) {
        return external_react_default.a.createElement("div", {
          className: "right-col col s3"
        }, external_react_default.a.createElement("span", {
          className: "badge-rounded badge red darken-2 white-text"
        }, external_react_default.a.createElement("b", {
          className: "badge-text"
        }, alerts.length), " ", external_react_default.a.createElement("i", {
          className: "icon-flag"
        })));
      }

      return external_react_default.a.createElement("div", {
        className: "right-col col s3"
      }, "\xA0");
    });

    _this.state = {
      test: true
    };
    return _this;
  } // eslint-disable-next-line consistent-return


  Object(createClass["a" /* default */])(LessonCard, [{
    key: "render",
    value: function render() {
      var _this$props$lesson = this.props.lesson,
          subject = _this$props$lesson.subject,
          unitNumber = _this$props$lesson.unitNumber,
          lessonName = _this$props$lesson.lessonName,
          assigned = _this$props$lesson.assigned,
          alerts = _this$props$lesson.alerts,
          lessonType = _this$props$lesson.lessonType,
          totalProblems = _this$props$lesson.totalProblems,
          _this$props$lesson$so = _this$props$lesson.solvedProblems,
          solvedProblems = _this$props$lesson$so === void 0 ? '' : _this$props$lesson$so,
          passage = _this$props$lesson.passage,
          dueDate = _this$props$lesson.dueDate,
          dueTime = _this$props$lesson.dueTime,
          completed = _this$props$lesson.completed,
          availableDate = _this$props$lesson.availableDate,
          completionDate = _this$props$lesson.completionDate,
          completionTime = _this$props$lesson.completionTime,
          completedLate = _this$props$lesson.completedLate,
          overdue = _this$props$lesson.overdue;
      return external_react_default.a.createElement("div", {
        className: "card-main-col col s12 m8 l7 xl5"
      }, external_react_default.a.createElement("div", {
        className: getLessonActivityStatus(assigned, dueDate)
      }, external_react_default.a.createElement("div", {
        className: "card-panel",
        style: {
          backgroundColor: '#666',
          color: '#fff'
        }
      }, external_react_default.a.createElement("div", {
        className: "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "icon-col col s1"
      }, external_react_default.a.createElement("i", {
        className: this.renderLessonIcon(subject)
      })), external_react_default.a.createElement("div", {
        className: "col s9"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-text center-align"
      }, external_react_default.a.createElement("div", {
        className: "text-small"
      }, subject, " Unit ", unitNumber), external_react_default.a.createElement("div", {
        className: "text-large"
      }, lessonName))), external_react_default.a.createElement("div", {
        className: "col s1 right-align"
      }, external_react_default.a.createElement("div", {
        className: "row icons-row"
      }, external_react_default.a.createElement("div", {
        className: "dropdown-block col"
      }, external_react_default.a.createElement("a", {
        className: "dropdown-trigger btn",
        href: "#",
        "data-target": "dropdown01"
      }, external_react_default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")), external_react_default.a.createElement("ul", {
        id: "dropdown01",
        className: "dropdown-content dropdown-wide"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#modal_user_edit",
        className: "modal-trigger link-block"
      }, "Edit")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#!"
      }, "Clone")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#!"
      }, "Show Owner")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#!"
      }, "Delete")))))))), external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("div", {
        className: "card-top-row row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "left-col col s3"
      }, external_react_default.a.createElement("span", {
        className: "meta-num"
      }, "p.", passage)), external_react_default.a.createElement("div", {
        className: "center-col col s6 center-align"
      }, external_react_default.a.createElement("span", {
        className: "meta-name"
      }, "(", lessonType, ")")), this.renderAlerts(alerts)), external_react_default.a.createElement("div", {
        className: "chart-container chart-container-xlarge"
      }, external_react_default.a.createElement("div", {
        className: "chart-holder"
      }, external_react_default.a.createElement("span", {
        className: "svg-curved-bar",
        "data-values": "{\"from\": 0, \"to\": 0, \"current\": 0}",
        "data-duration": "1"
      }, external_react_default.a.createElement("svg", {
        width: "207px",
        height: "207px",
        viewBox: "0 0 207 207",
        preserveAspectRatio: "xMidYMid meet"
      }, external_react_default.a.createElement("path", {
        fill: "none",
        style: {
          strokeWidth: '42',
          stroke: '#eaeaea'
        },
        d: "M 26.909645526174018 134.16215259197702 A 82.5 82.5 0 1 1 180.09035447382598 134.16215259197702"
      }), external_react_default.a.createElement("path", {
        "data-dinamic": true,
        fill: "none",
        style: {
          strokeWidth: '42',
          stroke: '#62b771'
        },
        d: "M 26.909645526174018 134.16215259197702 A 82.5 82.5 0 0 1 26.909645526174018 134.16215259197702"
      }))), this.renderProblemCount(assigned, totalProblems, solvedProblems))), external_react_default.a.createElement("div", {
        className: "card-footer-row center-align"
      }, external_react_default.a.createElement("div", {
        className: "card-footer-holder"
      }, this.renderProblemCompletionStatus(dueTime, completed, completionDate, completionTime, completedLate, availableDate, dueDate, overdue, assigned))))));
    }
  }]);

  return LessonCard;
}(external_react_default.a.Component);

/* harmony default export */ var components_LessonCard = (LessonCard_LessonCard);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/FilterSection/index.js








/* eslint-disable jsx-a11y/no-static-element-interactions */



var components_FilterSection_FilterSection =
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onHandleFilterClick", function (filter) {
      var currentActiveFilters = _this.state.activeFilters;
      var activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = external_immutability_helper_default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        var filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = external_immutability_helper_default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      _this.setState({
        activeFilters: activeFilters
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClearFilters", function () {
      return _this.setState({
        activeFilters: []
      });
    });

    _this.state = {
      open: true,
      activeFilters: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FilterSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          open = _this$state.open,
          activeFilters = _this$state.activeFilters;
      return external_react_default.a.createElement("div", {
        className: "filter-form-holder"
      }, external_react_default.a.createElement("ul", {
        className: "collapsible expandable"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
        className: "collapsible-body",
        style: open ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, external_react_default.a.createElement("div", {
        className: "filter-form_checkbox-list-holder"
      }, external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "activated",
        checked: activeFilters.indexOf("activated") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('activated');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "activated"
      }, "Activated")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "unactivated",
        checked: activeFilters.indexOf("unactivated") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('unactivated');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "unactivated"
      }, "Unactivated")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "expired",
        checked: activeFilters.indexOf("expired") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('expired');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "expired"
      }, "Expired"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "current",
        checked: activeFilters.indexOf("current") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('current');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "current"
      }, "Current")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "archived",
        checked: activeFilters.indexOf("archived") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('archived');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "archived"
      }, "Archived"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "no-gain",
        checked: activeFilters.indexOf("no-gain") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-gain');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "no-gain"
      }, "No Gain")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "some-gain",
        checked: activeFilters.indexOf("some-gain") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('some-gain');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "some-gain"
      }, "Some Gain")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "gain-100+",
        checked: activeFilters.indexOf("gain-100+") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('gain-100+');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "gain-100+"
      }, "Gain of 100+")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "gain-200+",
        checked: activeFilters.indexOf("gain-200+") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('gain-200+');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "gain-200+"
      }, "Gain of 200+"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "hit-target-score",
        checked: activeFilters.indexOf("hit-target-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('hit-target-score');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "hit-target-score"
      }, "Hit Target Score")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "hasnt-hit-target-score",
        checked: activeFilters.indexOf("hasnt-hit-target-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('hasnt-hit-target-score');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "hasnt-hit-target-score"
      }, "Hasn\u2019t Hit Target Score"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "no-tests",
        checked: activeFilters.indexOf("no-tests") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('tests');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "no-tests"
      }, "No Tests")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "1-test",
        checked: activeFilters.indexOf("1-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('1-test');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "1-test"
      }, "1 Test")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "2-test",
        checked: activeFilters.indexOf("2-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('2-test');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "2-test"
      }, "2 Tests")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "3-test",
        checked: activeFilters.indexOf("3-test") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('3-test');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "3-test"
      }, "3+ Tests"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "has-overdue-work",
        checked: activeFilters.indexOf("has-overdue-work") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('has-overdue-work');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "has-overdue-work"
      }, "Has Overdue Work")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "unreviewed-flags",
        checked: activeFilters.indexOf("unreviewed-flags") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('unreviewed-flags');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "unreviewed-flags"
      }, "Unreviewed Flags"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "sessions-this-week",
        checked: activeFilters.indexOf("sessions-this-week") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('sessions-this-week');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "sessions-this-week"
      }, "Sessions This Week")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "session-today",
        checked: activeFilters.indexOf("session-today") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('session-today');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "session-today"
      }, "Session Today")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "no-sessions",
        checked: activeFilters.indexOf("no-sessions") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-sessions');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "no-sessions"
      }, "No Sessions Scheduled"))), external_react_default.a.createElement("ul", {
        className: "filter-form_checkbox-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "entered-actual-score",
        checked: activeFilters.indexOf("entered-actual-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('entered-actual-score');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "entered-actual-score"
      }, "Entered Actual Score")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("input", {
        type: "checkbox",
        id: "no-actual-score",
        checked: activeFilters.indexOf("no-actual-score") !== -1,
        onChange: function onChange() {
          return _this2.onHandleFilterClick('no-actual-score');
        }
      }), external_react_default.a.createElement("label", {
        htmlFor: "no-actual-score"
      }, "No Actual Score"))))), external_react_default.a.createElement("div", {
        className: "row mb-0 d-flex align-items-flex-end"
      }, external_react_default.a.createElement("div", {
        className: "col s12 l8"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "name_search",
        className: "input-control  validate",
        placeholder: "Edwar"
      }), external_react_default.a.createElement("button", {
        type: "submit",
        className: "search-button"
      }, external_react_default.a.createElement("i", {
        className: "icon-search"
      })), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "name_search"
      }, "Search"))), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("select", {
        id: "location_search"
      }, external_react_default.a.createElement("option", null, "Any"), external_react_default.a.createElement("option", null, "Option"), external_react_default.a.createElement("option", null, "Option")), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "location_search"
      }, "Location"))), external_react_default.a.createElement("div", {
        className: "col s12 m3"
      }, external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("select", {
        id: "sort_search"
      }, external_react_default.a.createElement("option", null, "Last Name (ascending)"), external_react_default.a.createElement("option", null, "Option"), external_react_default.a.createElement("option", null, "Option")), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "sort_search"
      }, "Sort"))))), external_react_default.a.createElement("div", {
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

/* harmony default export */ var DetailLessonList_components_FilterSection = (components_FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/index.js








/* eslint-disable react/no-array-index-key */




var DetailLessonList_DetailLessonList =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DetailLessonList, _React$Component);

  function DetailLessonList(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DetailLessonList);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DetailLessonList).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapLessons", function () {
      return _this.props.user.lessons.map(function (lesson, index) {
        return external_react_default.a.createElement(components_LessonCard, {
          key: index,
          lesson: lesson
        });
      });
    });

    _this.state = {
      test: true
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DetailLessonList, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(DetailLessonList_components_FilterSection, null), external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "row d-flex-content card-width-272"
      }, this.mapLessons())), external_react_default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn add-btn"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Lesson"));
    }
  }]);

  return DetailLessonList;
}(external_react_default.a.Component);

/* harmony default export */ var Student_DetailLessonList = (DetailLessonList_DetailLessonList);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/utils/index.js
var getAnswerChoiceColors = function getAnswerChoiceColors(answerLetter, correctAnswer, studentAnswer) {
  if (correctAnswer) {
    return {
      backgroundColor: '#32955e'
    };
  } else if (answerLetter === studentAnswer && studentAnswer !== correctAnswer) {
    return {
      backgroundColor: '#db1d41'
    };
  }

  return null;
};
var getAnswerPercentageBreakdownColors = function getAnswerPercentageBreakdownColors(colorType, answerLetter, answerPercentage, correctAnswer, studentAnswer) {
  if (correctAnswer) {
    if (colorType === 'full') {
      return {
        backgroundColor: '#32955c',
        color: '#fff'
      };
    }

    return {
      width: "".concat(answerPercentage, "%"),
      backgroundColor: '#d3efde'
    };
  } else if (answerLetter === studentAnswer && studentAnswer !== correctAnswer) {
    if (colorType === 'full') {
      return {
        backgroundColor: '#db1d41',
        color: '#fff'
      };
    }

    return {
      width: "".concat(answerPercentage, "%"),
      backgroundColor: '#db1d41'
    };
  }

  if (colorType === 'full') {
    return {
      backgroundColor: '#e5e5e5'
    };
  }

  return {
    width: "".concat(answerPercentage, "%"),
    backgroundColor: '#e5e5e5'
  };
};
var getAnswerColor = function getAnswerColor(answer) {
  if (answer.correctAnswer) {
    return {
      color: '#3eb777',
      borderColor: '#32955c'
    };
  }

  return null;
};
var difficultyMap = {
  'Easy': 'E',
  'Medium': 'M',
  'Difficult': 'D'
};
var getCompleteAnswerColor = function getCompleteAnswerColor(answerType, answer, studentAnswer) {
  if (answerType === 'letter') {
    if (answer.answerLetter !== studentAnswer && answer.correctAnswer) {
      return {
        color: '#32955c',
        borderColor: '#32955c',
        backgroundColor: '#fff'
      };
    } else if (answer.answerLetter === studentAnswer && answer.correctAnswer) {
      return {
        color: '#fff',
        borderColor: '#32955c',
        backgroundColor: '#3eb777'
      };
    } else if (!answer.correctAnswer && answer.answerLetter === studentAnswer) {
      return {
        color: '#fff',
        borderColor: '#ad1e3e',
        backgroundColor: '#db1d41'
      };
    }

    return null;
  }

  if (answer.answerValue !== studentAnswer && answer.correctAnswer) {
    return {
      color: '#32955c',
      borderColor: '#32955c',
      backgroundColor: '#fff'
    };
  } else if (answer.answerValue === studentAnswer && answer.correctAnswer) {
    return {
      color: '#fff',
      borderColor: '#32955c',
      backgroundColor: '#3eb777'
    };
  } else if (!answer.correctAnswer && answer.answerValue === studentAnswer) {
    return {
      color: '#fff',
      borderColor: '#ad1e3e',
      backgroundColor: '#db1d41'
    };
  }

  return null;
};
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/components/Question/index.js










var Question_Question =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Question, _React$Component);

  function Question() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Question);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Question)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapAnswerChoices", function () {
      var _this$props = _this.props,
          _this$props$question = _this$props.question,
          answerType = _this$props$question.answerType,
          answerChoices = _this$props$question.answerChoices,
          studentAnswer = _this$props$question.studentAnswer,
          answerSheetComplete = _this$props.answerSheetComplete;

      if (answerSheetComplete) {
        if (answerType === 'letter') {
          return external_react_default.a.createElement("ul", {
            className: "answer-list"
          }, answerChoices.map(function (answer) {
            return external_react_default.a.createElement("li", {
              key: answer.answerLetter
            }, external_react_default.a.createElement("span", {
              className: "badge-circle badge-circle-bordered",
              style: getCompleteAnswerColor('letter', answer, studentAnswer)
            }, answer.answerLetter));
          }));
        }

        return external_react_default.a.createElement("ul", {
          className: "answer-list"
        }, answerChoices.map(function (answer) {
          return external_react_default.a.createElement("li", {
            key: answer.answerValue
          }, external_react_default.a.createElement("span", {
            className: "badge badge-rounded badge-rounded-bordered",
            style: getCompleteAnswerColor('value', answer, studentAnswer)
          }, answer.answerValue));
        }));
      }

      if (answerType === 'letter') {
        return external_react_default.a.createElement("ul", {
          className: "answer-list"
        }, answerChoices.map(function (answer) {
          return external_react_default.a.createElement("li", {
            key: answer.answerLetter
          }, external_react_default.a.createElement("span", {
            className: "badge-circle badge-circle-bordered",
            style: getAnswerColor(answer)
          }, answer.answerLetter));
        }));
      }

      return external_react_default.a.createElement("ul", {
        className: "answer-list"
      }, answerChoices.map(function (answer) {
        return external_react_default.a.createElement("li", {
          key: answer.answerValue
        }, external_react_default.a.createElement("span", {
          className: "badge badge-rounded badge-rounded-bordered",
          style: getAnswerColor(answer)
        }, answer.answerValue));
      }));
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Question, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onOpenQuestionModal = _this$props2.onOpenQuestionModal,
          question = _this$props2.question,
          answerSheetComplete = _this$props2.answerSheetComplete;
      var difficulty = question.difficulty,
          hasVideo = question.hasVideo,
          flagged = question.flagged,
          studentNotes = question.studentNotes;
      return external_react_default.a.createElement("li", {
        className: "answers-list-holder"
      }, external_react_default.a.createElement("div", {
        className: "answer-row row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col col-120"
      }, this.mapAnswerChoices()), external_react_default.a.createElement("div", {
        className: "col col-30"
      }, external_react_default.a.createElement("span", {
        className: "status-info"
      }, difficultyMap[difficulty])), hasVideo && external_react_default.a.createElement("div", {
        className: "col col-43"
      }, external_react_default.a.createElement("span", {
        className: "play-progress",
        "data-video-id": "video001"
      }, external_react_default.a.createElement("span", {
        className: "play"
      }), external_react_default.a.createElement("svg", {
        viewBox: "0 0 50 50",
        width: "50",
        height: "50",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, external_react_default.a.createElement("circle", {
        className: "circle-static",
        cx: "25.8",
        cy: "24.3",
        r: "22.8",
        style: {
          strokeWidth: '3',
          fill: 'rgba(0,0,0,0)'
        }
      }), external_react_default.a.createElement("circle", {
        className: "circle-progress",
        cx: "25.8",
        cy: "24.3",
        r: "22.8",
        style: {
          stroke: 'none',
          strokeWidth: '3',
          fill: 'rgba(0,0,0,0)'
        }
      })))), external_react_default.a.createElement("div", {
        className: "col col-auto"
      }, answerSheetComplete && flagged ? external_react_default.a.createElement("span", {
        className: "status-answer",
        style: {
          color: '#c0272d'
        }
      }, external_react_default.a.createElement("i", {
        className: "icon-flag"
      }), external_react_default.a.createElement("b", {
        className: "status-text"
      }, "Review")) : null), external_react_default.a.createElement("div", {
        className: "dropdown-block col col-35"
      }, external_react_default.a.createElement("a", {
        className: "modal-trigger",
        onClick: function onClick() {
          return onOpenQuestionModal(question);
        },
        href: "#"
      }, external_react_default.a.createElement("i", {
        className: "material-icons dots-icon"
      }, "more_vert")))), answerSheetComplete && studentNotes ? external_react_default.a.createElement("div", {
        className: "comment-block"
      }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?")) : null);
    }
  }]);

  return Question;
}(external_react_default.a.Component);

;
/* harmony default export */ var components_Question = (Question_Question);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/components/PracticeQuestions/index.js










var PracticeQuestions_PracticeQuestions =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(PracticeQuestions, _React$Component);

  function PracticeQuestions() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, PracticeQuestions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(PracticeQuestions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapQuestions", function () {
      return _this.props.questions.map(function (question) {
        return external_react_default.a.createElement(components_Question, {
          key: question.id,
          question: question,
          answerSheetComplete: _this.props.answerSheetComplete,
          onOpenQuestionModal: _this.props.onOpenQuestionModal
        });
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(PracticeQuestions, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "col s12 l6"
      }, external_react_default.a.createElement("div", {
        className: "card-block"
      }, external_react_default.a.createElement("h2", null, "Practice"), external_react_default.a.createElement("div", {
        className: "card"
      }, external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("ol", {
        className: "answers-list"
      }, this.mapQuestions())))));
    }
  }]);

  return PracticeQuestions;
}(external_react_default.a.Component);

/* harmony default export */ var components_PracticeQuestions = (PracticeQuestions_PracticeQuestions);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/components/ChallengeQuestions/index.js










var ChallengeQuestions_ChallengeQuestions =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ChallengeQuestions, _React$Component);

  function ChallengeQuestions() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, ChallengeQuestions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(ChallengeQuestions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapQuestions", function () {
      return _this.props.questions.map(function (question) {
        return external_react_default.a.createElement(components_Question, {
          key: question.id,
          question: question,
          answerSheetComplete: _this.props.answerSheetComplete,
          onOpenQuestionModal: _this.props.onOpenQuestionModal
        });
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(ChallengeQuestions, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "col s12 l6"
      }, external_react_default.a.createElement("div", {
        className: "card-block"
      }, external_react_default.a.createElement("h2", null, "Challenge"), external_react_default.a.createElement("div", {
        className: "card-answer card"
      }, external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("ol", {
        className: "answers-list"
      }, this.mapQuestions())))));
    }
  }]);

  return ChallengeQuestions;
}(external_react_default.a.Component);

/* harmony default export */ var components_ChallengeQuestions = (ChallengeQuestions_ChallengeQuestions);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/components/QuestionModal/index.js









/* eslint-disable jsx-a11y/media-has-caption */





var QuestionModal_QuestionModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(QuestionModal, _React$Component);

  function QuestionModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, QuestionModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(QuestionModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleReviewedStatus", function () {
      return _this.setState(function (_ref) {
        var reviewedWithStudent = _ref.reviewedWithStudent;
        return {
          reviewedWithStudent: !reviewedWithStudent
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapAnswerChoices", function () {
      var _this$props$question = _this.props.question,
          answerChoices = _this$props$question.answerChoices,
          studentAnswer = _this$props$question.studentAnswer;

      if (answerChoices[0].answerLetter) {
        return answerChoices.map(function (answer) {
          return external_react_default.a.createElement("li", {
            className: "answer-block",
            key: answer.answerLetter
          }, external_react_default.a.createElement("div", {
            className: "answer-box",
            style: getAnswerChoiceColors(answer.answerLetter, answer.correctAnswer, studentAnswer)
          }, external_react_default.a.createElement("b", {
            className: "answer-circle"
          }, answer.answerLetter, "."), external_react_default.a.createElement("span", {
            className: "answer-text"
          }, answer.answerText)));
        });
      }

      return answerChoices.map(function (answer) {
        return external_react_default.a.createElement("li", {
          className: "answer-block",
          key: answer.answerValue
        }, external_react_default.a.createElement("div", {
          className: "answer-box",
          style: getAnswerChoiceColors(answer.answerValue, answer.correctAnswer, studentAnswer)
        }, external_react_default.a.createElement("span", {
          className: "answer-text",
          style: {
            marginLeft: '30px'
          }
        }, answer.answerValue)));
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderAnswerPercentageBreakdown", function () {
      var _this$props$question2 = _this.props.question,
          answerChoices = _this$props$question2.answerChoices,
          studentAnswer = _this$props$question2.studentAnswer;

      if (answerChoices[0].answerLetter) {
        return answerChoices.map(function (answer) {
          return external_react_default.a.createElement("li", {
            className: "informer-block",
            key: answer.answerLetter
          }, external_react_default.a.createElement("div", {
            className: "informer-box",
            style: getAnswerPercentageBreakdownColors('half', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)
          }, external_react_default.a.createElement("b", {
            className: "informer-circle",
            style: getAnswerPercentageBreakdownColors('full', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)
          }, answer.answerLetter)), external_react_default.a.createElement("b", {
            className: "informer-value"
          }, answer.answerPercentage, "%"));
        });
      }

      return answerChoices.map(function (answer) {
        return external_react_default.a.createElement("li", {
          className: "informer-block",
          key: answer.answerValue
        }, external_react_default.a.createElement("div", {
          className: "informer-box",
          style: getAnswerPercentageBreakdownColors('half', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)
        }, external_react_default.a.createElement("b", {
          className: "informer-circle",
          style: getAnswerPercentageBreakdownColors('full', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)
        }, answer.answerValue)), external_react_default.a.createElement("b", {
          className: "informer-value"
        }, answer.answerPercentage, "%"));
      });
    });

    _this.state = {
      reviewedWithStudent: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(QuestionModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          onCloseModal = _this$props.onCloseModal,
          _this$props$question3 = _this$props.question,
          question = _this$props$question3 === void 0 ? {} : _this$props$question3;
      var reviewedWithStudent = this.state.reviewedWithStudent;
      var topic = question.topic,
          questionType = question.questionType,
          questionText = question.question,
          hasVideo = question.hasVideo,
          flagged = question.flagged,
          questionNumber = question.questionNumber,
          videoSource = question.videoSource,
          studentNotes = question.studentNotes,
          passage = question.passage,
          videoThumbnail = question.videoThumbnail;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_video001",
        className: "jsx-4127667448" + " " + "modal modal-answer"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "modal-header row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col s10"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4127667448" + " " + "subtitle"
      }, topic), external_react_default.a.createElement("span", {
        className: "jsx-4127667448" + " " + "title"
      }, questionType, " Problem #", questionNumber)), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col s2 right-align"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: onCloseModal,
        className: "jsx-4127667448" + " " + "close modal-close"
      }, external_react_default.a.createElement("i", {
        className: "jsx-4127667448" + " " + "icon-close-thin"
      })))), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "modal-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "d-flex row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col s12 l6 order-lg-2"
      }, hasVideo && external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "card-panel"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "video-frame"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "embed-responsive embed-responsive-16by9"
      }, external_react_default.a.createElement("video", {
        id: "video001",
        "data-current-time": "0",
        poster: videoThumbnail,
        preload: "metadata",
        controls: true,
        playsinline: true,
        className: "jsx-4127667448" + " " + "in-modal embed-responsive-item"
      }, external_react_default.a.createElement("source", {
        type: "video/mp4",
        src: videoSource,
        className: "jsx-4127667448"
      }))))), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "card-panel"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "panel-block"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "d-flex align-items-center row mb-0"
      }, flagged && external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col"
      }, external_react_default.a.createElement("span", {
        style: {
          color: '#c0272d'
        },
        className: "jsx-4127667448" + " " + "status-answer"
      }, external_react_default.a.createElement("i", {
        className: "jsx-4127667448" + " " + "icon-flag"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4127667448" + " " + "status-text"
      }, "Flagged"))), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col"
      }, external_react_default.a.createElement("label", {
        className: "jsx-4127667448"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        checked: reviewedWithStudent,
        onChange: this.toggleReviewedStatus,
        className: "jsx-4127667448" + " " + "filled-in"
      }), external_react_default.a.createElement("span", {
        className: "jsx-4127667448"
      }, external_react_default.a.createElement("b", {
        className: "jsx-4127667448"
      }, "Reviewed with Student")))))), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "panel-block"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-4127667448" + " " + "informers-list"
      }, this.renderAnswerPercentageBreakdown())), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "panel-block"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-4127667448" + " " + "subtitle"
      }, "Student\u2019s Notes:"), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "text-content custom-form"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "jcf-scrollable height-22"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "text-holder"
      }, studentNotes)))))), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "col s12 l6 order-lg-1"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "card-panel"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "text-content custom-form"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "jcf-scrollable height-45"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "text-holder"
      }, passage)))), external_react_default.a.createElement("div", {
        className: "jsx-4127667448" + " " + "card-panel"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-4127667448" + " " + "h3 subtitle"
      }, questionText), external_react_default.a.createElement("ul", {
        className: "jsx-4127667448" + " " + "answer-full-list"
      }, this.mapAnswerChoices())))))))), external_react_default.a.createElement(style_default.a, {
        id: "4127667448"
      }, [".overlay.jsx-4127667448{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:9999;}", ".modal-answer.jsx-4127667448{opacity:1;visibility:visible;}"]));
    }
  }]);

  return QuestionModal;
}(external_react_default.a.Component);

/* harmony default export */ var components_QuestionModal = (QuestionModal_QuestionModal);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/utils/sampleQuestions.js
/* harmony default export */ var sampleQuestions = ([{
  id: 1,
  hasVideo: false,
  questionType: 'Challenge',
  questionNumber: 1,
  topic: 'Special Right Triangles',
  difficulty: 'Easy',
  studentNotes: '1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes',
  passage: "Question 1-10 are based on the following passage.\n    Why do we use it? \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'As it is used in line 14, convention most nearly means',
  flagged: false,
  studentAnswer: 'B',
  answerType: 'letter',
  answerChoices: [{
    answerLetter: 'A',
    answerText: 'ceremony',
    correctAnswer: false,
    answerPercentage: '12'
  }, {
    answerLetter: 'B',
    answerText: 'ceremony2',
    correctAnswer: false,
    answerPercentage: '18'
  }, {
    answerLetter: 'C',
    answerText: 'generalization',
    correctAnswer: true,
    answerPercentage: '40'
  }, {
    answerLetter: 'D',
    answerText: 'code',
    correctAnswer: false,
    answerPercentage: '30'
  }]
}, {
  id: 2,
  hasVideo: true,
  questionType: 'Challenge',
  videoSource: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
  videoThumbnail: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225921/Pembroke-Welsh-Corgi-MP.jpg',
  questionNumber: 2,
  topic: 'Geometry',
  difficulty: 'Medium',
  studentNotes: '2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes',
  passage: "This is the start of another passage.\n    Why do we use it?\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'What is the correct number choice',
  flagged: true,
  studentAnswer: '2.91',
  answerType: 'value',
  answerChoices: [{
    answerValue: '5.12',
    correctAnswer: true,
    answerPercentage: '67'
  }, {
    answerValue: '2.91',
    correctAnswer: false,
    answerPercentage: '33'
  }]
}, {
  id: 3,
  hasVideo: true,
  questionType: 'Challenge',
  videoSource: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
  videoThumbnail: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225921/Pembroke-Welsh-Corgi-MP.jpg',
  questionNumber: 3,
  topic: 'Pythagorean Theorem',
  difficulty: 'Difficult',
  studentNotes: '3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes',
  passage: "Question three!\n    Why do we use it? \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'Here is the third question',
  flagged: false,
  studentAnswer: 'C',
  answerType: 'letter',
  answerChoices: [{
    answerLetter: 'A',
    answerText: 'answera',
    correctAnswer: true,
    answerPercentage: '62'
  }, {
    answerLetter: 'B',
    answerText: 'answerb',
    correctAnswer: false,
    answerPercentage: '8'
  }, {
    answerLetter: 'C',
    answerText: 'answerc',
    correctAnswer: false,
    answerPercentage: '20'
  }, {
    answerLetter: 'D',
    answerText: 'answerd',
    correctAnswer: false,
    answerPercentage: '10'
  }]
}, {
  id: 4,
  hasVideo: false,
  questionType: 'Challenge',
  questionNumber: 4,
  topic: 'Algebra',
  difficulty: 'Medium',
  studentNotes: '4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes',
  passage: "Fourth passage sample.\n    Why do we use it?\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'What is the correct number choice 2',
  flagged: true,
  studentAnswer: '6.91',
  answerType: 'value',
  answerChoices: [{
    answerValue: '6.91',
    correctAnswer: false,
    answerPercentage: '22'
  }, {
    answerValue: '4.53',
    correctAnswer: true,
    answerPercentage: '78'
  }]
}, {
  id: 5,
  hasVideo: true,
  questionType: 'Practice',
  videoSource: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
  videoThumbnail: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225921/Pembroke-Welsh-Corgi-MP.jpg',
  questionNumber: 3,
  topic: 'Pythagorean Theorem',
  difficulty: 'Difficult',
  studentNotes: '3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes',
  passage: "Question three!\n    Why do we use it? \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'Here is the third question',
  flagged: false,
  studentAnswer: 'C',
  answerType: 'letter',
  answerChoices: [{
    answerLetter: 'A',
    answerText: 'answera',
    correctAnswer: true,
    answerPercentage: '62'
  }, {
    answerLetter: 'B',
    answerText: 'answerb',
    correctAnswer: false,
    answerPercentage: '8'
  }, {
    answerLetter: 'C',
    answerText: 'answerc',
    correctAnswer: false,
    answerPercentage: '20'
  }, {
    answerLetter: 'D',
    answerText: 'answerd',
    correctAnswer: false,
    answerPercentage: '10'
  }]
}, {
  id: 6,
  hasVideo: false,
  questionType: 'Practice',
  questionNumber: 4,
  topic: 'Algebra',
  difficulty: 'Medium',
  studentNotes: '4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes',
  passage: "Fourth passage sample.\n    Why do we use it? \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!\n    Where does it come from?\n    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.\n    ",
  question: 'What is the correct number choice 2',
  flagged: true,
  studentAnswer: '6.91',
  answerType: 'value',
  answerChoices: [{
    answerValue: '6.91',
    correctAnswer: false,
    answerPercentage: '22'
  }, {
    answerValue: '4.53',
    correctAnswer: true,
    answerPercentage: '78'
  }]
}]);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/index.js







 // import PropTypes from 'prop-types';







var LessonDetailAnswerSheet_LessonDetailAnswerSheet =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LessonDetailAnswerSheet, _React$Component);

  function LessonDetailAnswerSheet(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LessonDetailAnswerSheet);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LessonDetailAnswerSheet).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleQuestionModal", function () {
      var selectedQuestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return _this.setState(function (_ref) {
        var questionModalOpen = _ref.questionModalOpen;
        return {
          questionModalOpen: !questionModalOpen,
          selectedQuestion: selectedQuestion
        };
      });
    });

    _this.state = {
      selectedQuestion: {},
      questionModalOpen: false,
      answerSheetComplete: true,
      questions: sampleQuestions
    };
    return _this;
  }

  Object(createClass["a" /* default */])(LessonDetailAnswerSheet, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          questionModalOpen = _this$state.questionModalOpen,
          selectedQuestion = _this$state.selectedQuestion,
          questions = _this$state.questions,
          answerSheetComplete = _this$state.answerSheetComplete;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_QuestionModal, {
        open: questionModalOpen,
        question: selectedQuestion,
        onCloseModal: this.onToggleQuestionModal
      }), external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, external_react_default.a.createElement("div", {
        className: "wrapper modal",
        style: {
          zIndex: '1003',
          display: 'block',
          position: 'absolute',
          top: '0'
        }
      }, external_react_default.a.createElement("div", {
        className: "header-row card-panel light-blue lighten-1 white-text"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "icon-col col s1"
      }, external_react_default.a.createElement("i", {
        className: "icon-books"
      })), external_react_default.a.createElement("div", {
        className: "col s9"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-text center-align"
      }, external_react_default.a.createElement("div", {
        className: "text-small"
      }, "Reading Unit #2"), external_react_default.a.createElement("div", {
        className: "text-large"
      }, "Read Something"))), external_react_default.a.createElement("div", {
        className: "col s1 right-align"
      }, external_react_default.a.createElement("div", {
        className: "row icons-row"
      }, "\xA0"))), external_react_default.a.createElement("div", {
        className: "header-row-block card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "col s3"
      }, external_react_default.a.createElement("span", {
        className: "meta-num"
      }, "p.128")), external_react_default.a.createElement("div", {
        className: "col s9 right-align"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
        className: "name"
      }, "Arnold Studently")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("time", {
        className: "date",
        dateTime: "2018-11-18T20:43",
        style: {
          color: '#006837'
        }
      }, "Completed 11/18/18 at 8:43 PM (late)"))))), external_react_default.a.createElement("div", {
        className: "nav-header nav-header-special white"
      }, external_react_default.a.createElement("div", {
        className: "nav-additional"
      }, external_react_default.a.createElement("ul", {
        className: "menu-additional"
      }, external_react_default.a.createElement("li", {
        className: "col s3"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "Summary")), external_react_default.a.createElement("li", {
        className: "col s3"
      }, external_react_default.a.createElement("a", {
        className: "active",
        href: "#answer"
      }, "Answer Sheet"))))), external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "container-sm"
      }, external_react_default.a.createElement("div", {
        className: "main-row row"
      }, external_react_default.a.createElement(components_ChallengeQuestions, {
        answerSheetComplete: answerSheetComplete,
        onOpenQuestionModal: this.onToggleQuestionModal,
        questions: questions.filter(function (question) {
          return question.questionType === 'Challenge';
        })
      }), external_react_default.a.createElement(components_PracticeQuestions, {
        answerSheetComplete: answerSheetComplete,
        onOpenQuestionModal: this.onToggleQuestionModal,
        questions: questions.filter(function (question) {
          return question.questionType === 'Practice';
        })
      })))))));
    }
  }]);

  return LessonDetailAnswerSheet;
}(external_react_default.a.Component);

/* harmony default export */ var Student_LessonDetailAnswerSheet = (LessonDetailAnswerSheet_LessonDetailAnswerSheet);
// CONCATENATED MODULE: ./components/Student/utils/sampleUser.js
var sampleUser_updatedUser = {
  id: '1232',
  active: false,
  studentInformation: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    gender: 'Male'
  },
  contactInformation: {
    phone: '7865645859',
    addressLine1: '1234 Test Lane',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
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
  instructor: {
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
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1234',
    highSchool: 'Everglades High',
    graduationYear: '2018'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '77',
    improvement: '82',
    lessons: '73',
    instruction: '68',
    practiceTests: '47'
  },
  overdueWork: {
    lessons: '12',
    worksheets: '3',
    quizzes: '1',
    practiceTests: '5'
  },
  summary: {
    questionsAnswered: '791',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false
  }]
};
/* harmony default export */ var sampleUser = (sampleUser_updatedUser);
// CONCATENATED MODULE: ./components/Student/DetailTestList/components/TestCard/index.js








 // import { data, subjectMap, testSectionCardColorMap, graphColorMap } from '../../../utils/testSectionCardUtils';

var TestCard_data = function data(percentage) {
  return {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: ['#00bbf7', '#eaeaea']
    }]
  };
};



var TestCard_TestCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(TestCard, _React$Component);

  function TestCard() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, TestCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(TestCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapTestSubjects", function () {
      var _this$props2 = _this.props,
          test = _this$props2.test,
          futureTest = _this$props2.futureTest;
      var subjects = test.subjects;
      return subjects.map(function (subject) {
        return external_react_default.a.createElement("div", {
          className: "chart-block chart-block-test",
          key: subject.subject
        }, external_react_default.a.createElement("span", {
          className: "value-max"
        }, subject.targetScore), external_react_default.a.createElement("div", {
          className: "js-donut-chart",
          "data-stroke-width": "15",
          "data-source": "./inc/score-data-test-reading.json"
        }), external_react_default.a.createElement("div", {
          className: "chart-text"
        }, subject.subject === 'Reading & Writing' && !futureTest ? external_react_default.a.createElement("span", {
          className: "title"
        }, "Reading ", external_react_default.a.createElement("br", null), " & Writing") : external_react_default.a.createElement("span", {
          className: "title"
        }, subject.subject), external_react_default.a.createElement("span", {
          className: "value"
        }, subject.currentScore), external_react_default.a.createElement("span", {
          className: "description"
        }, "+", subject.totalGain)));
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(TestCard, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          test = _this$props3.test,
          _this$props3$futureTe = _this$props3.futureTest,
          futureTest = _this$props3$futureTe === void 0 ? false : _this$props3$futureTe,
          dropdownIndex = _this$props3.dropdownIndex,
          index = _this$props3.index,
          dropdownIsOpen = _this$props3.dropdownIsOpen,
          onEnterAnswers = _this$props3.onEnterAnswers,
          onEditTest = _this$props3.onEditTest,
          onDownloadReport = _this$props3.onDownloadReport,
          onDeleteTest = _this$props3.onDeleteTest;
      var title = test.title,
          _test$version = test.version,
          version = _test$version === void 0 ? '' : _test$version,
          testDate = test.testDate,
          weekNumber = test.weekNumber,
          initialScore = test.initialScore,
          targetScore = test.targetScore,
          currentScore = test.currentScore,
          totalGain = test.totalGain;
      return external_react_default.a.createElement("div", {
        className: "col s12 m8 l7 xl5"
      }, external_react_default.a.createElement("div", {
        className: "card-main-col"
      }, external_react_default.a.createElement("div", {
        className: futureTest ? 'card-test card-main card-disabled card' : 'card-test card-main card'
      }, external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("div", {
        className: "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "col"
      }, "\xA0"), external_react_default.a.createElement("div", {
        className: "col"
      }, external_react_default.a.createElement("div", {
        className: "row icons-row"
      }, external_react_default.a.createElement("div", {
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
        className: "dropdown-content",
        style: {
          display: 'block',
          transformOrigin: '0px 0px 0px',
          opacity: '1',
          transform: 'scaleX(1) scaleY(1)'
        }
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: onEnterAnswers
      }, "Enter Answers")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: onEditTest
      }, "Edit")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: onDownloadReport,
        className: "disabled"
      }, "Download Report")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "#",
        onClick: onDeleteTest,
        className: "red-text text-darken-3"
      }, "Delete"))) : null)))), external_react_default.a.createElement("div", {
        className: "card-test-row row d-flex mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s7"
      }, external_react_default.a.createElement("div", {
        className: "card-title-block"
      }, external_react_default.a.createElement("h4", {
        className: "h2"
      }, title), external_react_default.a.createElement("time", {
        className: "date"
      }, testDate, " (week ", weekNumber, ")"), !futureTest ? external_react_default.a.createElement("p", null, "Version ", version) : null), external_react_default.a.createElement("div", {
        className: "chart-container chart-container-test"
      }, external_react_default.a.createElement("div", {
        className: "chart-holder"
      }, external_react_default.a.createElement("span", {
        className: "svg-curved-bar"
      }, external_react_default.a.createElement(external_react_chartjs_2_["Doughnut"], {
        data: function data() {
          return TestCard_data(initialScore ? Number(initialScore / targetScore) * 100 : 0);
        },
        options: {
          circumference: 1 * Math.PI,
          rotation: 1 * Math.PI,
          cutoutPercentage: 60,
          tooltips: false
        }
      }), external_react_default.a.createElement("span", {
        className: "js-diff-holder"
      }, external_react_default.a.createElement("span", {
        className: "js-diff"
      }, external_react_default.a.createElement("span", {
        className: "txt",
        style: {
          opacity: '1',
          bottom: '75px',
          color: 'black',
          fontWeight: '600',
          fontSize: '12px'
        }
      }, "+", totalGain)))), external_react_default.a.createElement("span", {
        className: "chart-value",
        style: {
          backgroundColor: '#00bbf7'
        }
      }, external_react_default.a.createElement("span", {
        "data-count-up": true,
        "data-start-val": "1100",
        "data-end-val": "1210",
        "data-duration": "1"
      }, currentScore))), external_react_default.a.createElement("div", {
        className: "chart-row"
      }, external_react_default.a.createElement("div", {
        className: "chart-col chart-start"
      }, external_react_default.a.createElement("span", {
        className: "amount"
      }, initialScore), " ", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
        className: "amount-text"
      }, "initial")), external_react_default.a.createElement("div", {
        className: "chart-col chart-end"
      }, external_react_default.a.createElement("span", {
        className: "amount"
      }, targetScore), " ", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
        className: "amount-text"
      }, "target"))))), external_react_default.a.createElement("div", {
        className: "col s5 right-align"
      }, this.mapTestSubjects()))))));
    }
  }]);

  return TestCard;
}(external_react_default.a.Component);

/* harmony default export */ var components_TestCard = (TestCard_TestCard);
// CONCATENATED MODULE: ./components/Student/DetailTestList/utils/sampleTests.js
/* harmony default export */ var sampleTests = ([{
  id: 1,
  status: 'complete',
  title: 'Practice Test 1',
  testDate: '05/12/2019',
  weekNumber: '3',
  version: '1234',
  initialScore: '1050',
  targetScore: '1500',
  currentScore: '1245',
  totalGain: '132',
  subjects: [{
    subject: 'Reading & Writing',
    targetScore: '750',
    currentScore: '454',
    totalGain: '73'
  }, {
    subject: 'Math',
    targetScore: '490',
    currentScore: '345',
    totalGain: '101'
  }]
}, {
  id: 2,
  status: 'complete',
  title: 'Practice Test 2',
  testDate: '07/01/2019',
  weekNumber: '3',
  version: '2345',
  initialScore: '1100',
  targetScore: '1320',
  currentScore: '1221',
  totalGain: '98',
  subjects: [{
    subject: 'Reading & Writing',
    targetScore: '730',
    currentScore: '421',
    totalGain: '67'
  }, {
    subject: 'Math',
    targetScore: '488',
    currentScore: '367',
    totalGain: '121'
  }]
}, {
  id: 3,
  status: 'complete',
  title: 'Practice Test 3',
  testDate: '11/25/2019',
  weekNumber: '3',
  version: '3456',
  initialScore: '1026',
  targetScore: '1455',
  currentScore: '1102',
  totalGain: '154',
  subjects: [{
    subject: 'Reading & Writing',
    targetScore: '753',
    currentScore: '642',
    totalGain: '91'
  }, {
    subject: 'Math',
    targetScore: '467',
    currentScore: '401',
    totalGain: '163'
  }]
}, {
  id: 4,
  status: 'future',
  title: 'Practice Test 4',
  testDate: '12/12/2019',
  weekNumber: '3',
  // version: '3456',
  // initialScore: '1026',
  // targetScore: '1455',
  // currentScore: '1102',
  // totalGain: '154',
  subjects: [{// subject: 'Reading & Writing',
    // targetScore: '753',
    // currentScore: '642',
    // totalGain: '91',
  }, {// subject: 'Math',
    // targetScore: '467',
    // currentScore: '401',
    // totalGain: '163',
  }]
}, {
  id: 5,
  status: 'future',
  title: 'Practice Test 5',
  testDate: '12/23/2019',
  weekNumber: '3',
  // version: '3456',
  // initialScore: '1026',
  // targetScore: '1455',
  // currentScore: '1102',
  // totalGain: '154',
  subjects: [{// subject: 'Reading & Writing',
    // targetScore: '753',
    // currentScore: '642',
    // totalGain: '91',
  }, {// subject: 'Math',
    // targetScore: '467',
    // currentScore: '401',
    // totalGain: '163',
  }]
}]);
// CONCATENATED MODULE: ./components/Student/DetailTestList/index.js











var DetailTestList_DetailTestList =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DetailTestList, _React$Component);

  function DetailTestList(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DetailTestList);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DetailTestList).call(this, props));

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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCreateTest", function (event) {
      event.preventDefault();
      console.warn('Pending implementation of create test UI and functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onEnterAnswers", function () {
      return console.warn('Pending implementation of enter answers UI and functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onEditTest", function () {
      return console.warn('Pending implementation edit test UI and functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onDownloadReport", function () {
      return console.warn('Pending implementation of download report ui and functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onDeleteTest", function () {
      return console.warn('Pending implementation of delete test UI and functionality');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapCompletedTests", function () {
      var tests = _this.state.tests;
      return tests.filter(function (test) {
        return test.status === 'complete';
      }).map(function (test, index) {
        return external_react_default.a.createElement(components_TestCard, {
          test: test,
          key: test.id,
          index: index,
          onEditTest: _this.onEditTest,
          onDeleteTest: _this.onDeleteTest,
          onSetDropdown: _this.onSetDropdown,
          onEnterAnswers: _this.onEnterAnswers,
          onCloseDropdown: _this.onCloseDropdown,
          onDownloadReport: _this.onDownloadReport,
          dropdownIndex: _this.state.dropdownIndex,
          dropdownIsOpen: _this.state.dropdownIsOpen
        });
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mapFutureTests", function () {
      var tests = _this.state.tests;
      return tests.filter(function (test) {
        return test.status !== 'complete';
      }).map(function (test, index) {
        return external_react_default.a.createElement(components_TestCard, {
          futureTest: true,
          test: test,
          key: test.id,
          onEditTest: _this.onEditTest,
          onDeleteTest: _this.onDeleteTest,
          onSetDropdown: _this.onSetDropdown,
          onEnterAnswers: _this.onEnterAnswers,
          onCloseDropdown: _this.onCloseDropdown,
          onDownloadReport: _this.onDownloadReport,
          dropdownIndex: _this.state.dropdownIndex,
          dropdownIsOpen: _this.state.dropdownIsOpen,
          index: tests.filter(function (filterTest) {
            return filterTest.status === 'complete';
          }).length + index
        });
      });
    });

    _this.state = {
      tests: sampleTests,
      dropdownIndex: null,
      dropdownIsOpen: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DetailTestList, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "content-section"
      }, external_react_default.a.createElement("div", {
        className: "section-holder"
      }, external_react_default.a.createElement("div", {
        className: "content-container"
      }, external_react_default.a.createElement("h2", null, "Completed Tests"), external_react_default.a.createElement("div", {
        className: "row d-flex-content card-width-366"
      }, this.mapCompletedTests())), external_react_default.a.createElement("div", {
        className: "content-container"
      }, external_react_default.a.createElement("h2", null, "Future Tests"), external_react_default.a.createElement("div", {
        className: "row d-flex-content card-width-366"
      }, this.mapFutureTests()))), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCreateTest,
        className: "waves-effect waves-teal btn add-btn"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Test"));
    }
  }]);

  return DetailTestList;
}(external_react_default.a.Component);

/* harmony default export */ var Student_DetailTestList = (DetailTestList_DetailTestList);
// CONCATENATED MODULE: ./pages/students.js

















var students_Students =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Students, _Component);

  function Students(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Students);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Students).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleActivationDropdown", function () {
      return _this.setState(function (_ref) {
        var activationDropdownOpen = _ref.activationDropdownOpen;
        return {
          activationDropdownOpen: !activationDropdownOpen
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetActivePage", function (active) {
      return _this.setState({
        active: active
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onHandleDetailsChange", function (name, event) {
      return _this.setState(Object(defineProperty["a" /* default */])({}, name, event.target.value));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderCurrentPage", function () {
      var active = _this.state.active;

      if (active === 'summary') {
        return external_react_default.a.createElement(Student_DetailSummaryPage, {
          user: sampleUser
        });
      }

      if (active === 'account') {
        return external_react_default.a.createElement(Student_AccountPage, {
          user: sampleUser
        });
      }

      if (active === 'lessons') {
        return external_react_default.a.createElement(Student_DetailLessonList, {
          user: sampleUser
        });
      }

      if (active === 'worksheets') {
        return external_react_default.a.createElement(Student_DetailWorksheetPage, {
          user: sampleUser
        });
      }

      if (active === 'answer-sheet') {
        return external_react_default.a.createElement(Student_LessonDetailAnswerSheet, null);
      }

      if (active === 'tests') {
        return external_react_default.a.createElement(Student_DetailTestList, null);
      }

      return null;
    });

    _this.state = {
      active: 'tests',
      accountActivated: false,
      activationDropdownOpen: false,
      licenseCode: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Students, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          active = _this$state.active,
          accountActivated = _this$state.accountActivated,
          activationDropdownOpen = _this$state.activationDropdownOpen,
          licenseCode = _this$state.licenseCode;
      return external_react_default.a.createElement("main", {
        id: "main",
        role: "main"
      }, external_react_default.a.createElement("div", {
        className: "main-holder grey lighten-5"
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
      }, "<  Students"))), external_react_default.a.createElement("h2", {
        className: "h1 white-text"
      }, external_react_default.a.createElement("span", {
        className: "heading-holder"
      }, external_react_default.a.createElement("i", {
        className: "icon-student"
      }), external_react_default.a.createElement("span", {
        className: "heading-block"
      }, "Arnold Studently"))), external_react_default.a.createElement(components_StudentNavBar, {
        active: active,
        onSetActivePage: this.onSetActivePage
      }), external_react_default.a.createElement("div", {
        className: "activate-block"
      }, accountActivated ? external_react_default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"
      }, external_react_default.a.createElement("b", {
        className: "btn-text visible-lg"
      }, "Account Activated"), " ", external_react_default.a.createElement("i", {
        className: "icon-unlock"
      })) : external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onToggleActivationDropdown,
        className: "waves-effect btn btn-orange btn-account_inactive dropdown-trigger",
        "data-target": "dropdown_activate"
      }, external_react_default.a.createElement("b", {
        className: "btn-text visible-lg"
      }, "Activate Account"), " ", external_react_default.a.createElement("i", {
        className: "icon-key"
      })), external_react_default.a.createElement("div", {
        id: "dropdown_activate",
        className: "dropdown-content",
        style: activationDropdownOpen ? {
          display: 'block',
          opacity: '1'
        } : {}
      }, external_react_default.a.createElement("div", {
        className: "card-panel"
      }, external_react_default.a.createElement("div", {
        className: "title-block"
      }, external_react_default.a.createElement("div", {
        className: "h3"
      }, "Ready to begin your course?"), external_react_default.a.createElement("div", {
        className: "subtitle"
      }, "Please enter a valid license code below.")), external_react_default.a.createElement("div", {
        className: "input-field"
      }, external_react_default.a.createElement("input", {
        type: "text",
        value: licenseCode,
        id: "license-code",
        onChange: function onChange(event) {
          return _this2.onHandleDetailsChange('licenseCode', event);
        }
      }), external_react_default.a.createElement("label", {
        className: "label",
        htmlFor: "license_code"
      }, "License Code")), external_react_default.a.createElement("div", {
        className: "btn-holder center-align"
      }, external_react_default.a.createElement("button", {
        className: "btn btn-blue",
        type: "submit"
      }, "Activate")), external_react_default.a.createElement("div", {
        className: "text-block center-align"
      }, external_react_default.a.createElement("p", null, "If you need license codes, you can get them here: ", external_react_default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-light btn-small btn-blue"
      }, "Purchase Licenses"))), external_react_default.a.createElement("div", {
        className: "text-block"
      }, external_react_default.a.createElement("p", null, "*Note: "), external_react_default.a.createElement("p", null, "We o\uFB00er discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students.")))))), this.renderCurrentPage()));
    }
  }]);

  return Students;
}(external_react_["Component"]);

/* harmony default export */ var students = __webpack_exports__["default"] = (students_Students);

/***/ }),

/***/ "2Gwb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LcoationCard = function LcoationCard(_ref) {
  var _ref$location = _ref.location,
      locationNickname = _ref$location.locationNickname,
      locationName = _ref$location.locationName,
      onRemoveLocation = _ref.onRemoveLocation;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel card-panel-panel card-panel-large",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "close-link icon-close-thin",
    onClick: onRemoveLocation
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h4 truncate"
  }, locationNickname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "sub-title"
  }, locationName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-location"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Location")))));
};

/* harmony default export */ __webpack_exports__["a"] = (LcoationCard);

/***/ }),

/***/ "2Iwh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Portal */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);







var Portal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Portal, _React$Component);

  function Portal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Portal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Portal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.element = document.querySelector(this.props.selector);
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.element === undefined) {
        return null;
      }

      return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.createPortal(this.props.children, this.element);
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

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

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JyJo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

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

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

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
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


var InstructorToggleCard_InstructorToggleCard = function InstructorToggleCard(_ref) {
  var instructor = _ref.instructor,
      onToggleInstructorSelect = _ref.onToggleInstructorSelect;
  return external_react_default.a.createElement("li", {
    onClick: function onClick() {
      return onToggleInstructorSelect(instructor);
    }
  }, external_react_default.a.createElement("input", {
    type: "checkbox"
  }), external_react_default.a.createElement("div", {
    className: "card-location card"
  }, external_react_default.a.createElement("div", {
    className: "owner-box card-panel card-panel-location",
    style: {
      backgroundColor: '#31837a',
      color: '#fff'
    }
  }, external_react_default.a.createElement("span", {
    className: "check-link icon-check"
  }), external_react_default.a.createElement("div", {
    className: "card-panel-row row"
  }, external_react_default.a.createElement("div", {
    className: "col s10"
  }, external_react_default.a.createElement("div", {
    className: "user-block"
  }, external_react_default.a.createElement("div", {
    className: "user-circle",
    style: {
      backgroundColor: '#0085ce',
      color: '#fff'
    }
  }, external_react_default.a.createElement("img", {
    src: "#",
    alt: ""
  })), external_react_default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, external_react_default.a.createElement("h4", {
    className: "h3"
  }, instructor.lastName, ", ", instructor.firstName), external_react_default.a.createElement("a", {
    href: "mailto:".concat(instructor.email)
  }, instructor.email)))), external_react_default.a.createElement("div", {
    className: "col s2 right-align"
  }, external_react_default.a.createElement("span", {
    className: "block-icon"
  }, external_react_default.a.createElement("i", {
    className: "icon-user"
  }), external_react_default.a.createElement("span", {
    className: "text-icon"
  }, "Instructor")))))));
};

/* harmony default export */ var components_InstructorToggleCard = (InstructorToggleCard_InstructorToggleCard);
// CONCATENATED MODULE: ./components/utils/sampleInstructors.js
/* harmony default export */ var sampleInstructors = ([{
  firstName: 'Bob',
  lastName: 'Smith',
  email: 'bob@smith.com'
}, {
  firstName: 'Jeff',
  lastName: 'Bezos',
  email: 'jeff-bezos@email.com'
}, {
  firstName: 'Roger',
  lastName: 'Rabbit',
  email: 'roger-rabbit@email.com'
}, {
  firstName: 'Jack',
  lastName: 'InTheBox',
  email: 'jackinbox@email.com'
}, {
  firstName: 'John',
  lastName: 'Jackson',
  email: 'john-jackson@email.com'
}, {
  firstName: 'Jennifer',
  lastName: 'Ownerson',
  email: 'jennifern@ownerson.com'
}]);
// CONCATENATED MODULE: ./components/Instructor/components/InstructorModal/index.js










/* eslint-disable jsx-a11y/img-redundant-alt */








var locationOptions = [{
  label: 'Any',
  value: 'all'
}, {
  label: 'Location 2',
  value: 'location2'
}, {
  label: 'Location 3',
  value: 'location3'
}];

var InstructorModal_InstructorModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(InstructorModal, _React$Component);

  function InstructorModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, InstructorModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InstructorModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      return _this.setState({
        selectedInstructors: []
      }, _this.props.onClose);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleInstructorSelect", function (instructor) {
      var selectedInstructors = _this.state.selectedInstructors;

      if (selectedInstructors.indexOf(instructor) === -1) {
        _this.setState({
          selectedInstructors: [].concat(Object(toConsumableArray["a" /* default */])(selectedInstructors), [instructor])
        });
      } else {
        var updatedInstructors = external_immutability_helper_default()(selectedInstructors, {
          $splice: [[selectedInstructors.indexOf(instructor), 1]]
        });

        _this.setState({
          selectedInstructors: updatedInstructors
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSetLocation", function (location) {
      return _this.setState({
        location: location
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSaveInstructorChanges", function () {
      var selectedInstructors = _this.state.selectedInstructors;
      var handleInstructorsChange = _this.props.handleInstructorsChange;
      handleInstructorsChange(selectedInstructors);

      _this.onCloseModal();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearchChange", function (_ref) {
      var searchTerm = _ref.target.value;
      return _this.setState({
        searchTerm: searchTerm
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderInstructors", function () {
      var _this$state = _this.state,
          location = _this$state.location,
          allInstructors = _this$state.instructors,
          searchTerm = _this$state.searchTerm;
      var instructors;

      if (searchTerm) {
        instructors = allInstructors.reduce(function (finalArr, currentInstructor) {
          var instructorName = "".concat(currentInstructor.firstName).concat(currentInstructor.lastName).toLowerCase();

          if (instructorName.indexOf(searchTerm) !== -1) {
            finalArr.push(currentInstructor);
          }

          return finalArr;
        }, []);
      } else if (location === 'all') {
        instructors = allInstructors;
      } else {
        instructors = allInstructors.filter(function (instructor) {
          return instructor.location === location;
        });
      }

      return instructors.map(function (instructor) {
        return external_react_default.a.createElement(components_InstructorToggleCard, {
          key: instructor.email,
          instructor: instructor,
          onToggleInstructorSelect: _this.onToggleInstructorSelect
        });
      });
    });

    _this.state = {
      open: false,
      instructors: sampleInstructors,
      location: 'all',
      searchTerm: '',
      selectedInstructors: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(InstructorModal, [{
    key: "render",
    value: function render() {
      var open = this.props.open;
      var _this$state2 = this.state,
          location = _this$state2.location,
          searchTerm = _this$state2.searchTerm;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_Instructor1",
        className: "jsx-2013376804" + " " + "modal modal-custom modal-location"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#00456b',
          color: '#fff'
        },
        className: "jsx-2013376804" + " " + "owner-box card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "col"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-2013376804"
      }, "Select Instructor(s)")))), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "card-body"
      }, external_react_default.a.createElement("span", {
        className: "jsx-2013376804" + " " + "hint"
      }, "Click to select or deselect."), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "row-holder"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "search-field input-field"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "name_search",
        name: "nameSearch",
        value: searchTerm,
        onChange: this.handleSearchChange,
        className: "jsx-2013376804" + " " + "input-control validate"
      }), external_react_default.a.createElement("button", {
        type: "submit",
        className: "jsx-2013376804" + " " + "search-button"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2013376804" + " " + "icon-search"
      })), external_react_default.a.createElement("label", {
        htmlFor: "name_search",
        className: "jsx-2013376804" + " " + ((searchTerm.length ? 'label active' : 'label') || "")
      }, "Search")), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "input-field"
      }, external_react_default.a.createElement(Dropdown["a" /* default */], {
        value: Object(getValueFromState["a" /* default */])(location, locationOptions),
        onChange: this.onSetLocation,
        options: locationOptions,
        label: "State",
        stateKey: "state",
        dropdownKey: "state"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "box-scrollable"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "height-40 jcf-scrollable"
      }, external_react_default.a.createElement("div", {
        style: {
          height: '100%',
          overflowY: 'scroll'
        },
        className: "jsx-2013376804" + " " + "card-location-holder"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-2013376804" + " " + "checkbox-list"
      }, this.renderInstructors()))))), external_react_default.a.createElement("div", {
        className: "jsx-2013376804" + " " + "modal-footer"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-2013376804" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveInstructorChanges,
        className: "jsx-2013376804" + " " + "btn"
      }, "Add"))))))), external_react_default.a.createElement(style_default.a, {
        id: "2013376804"
      }, [".overlay.jsx-2013376804{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-2013376804{margin:0;border-radius:6px;}", "#modal_Location1.jsx-2013376804{border-radius:6px;}", ".modal.jsx-2013376804{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-2013376804{opacity:1;visibility:visible;}", ".modal-footer.jsx-2013376804{background-color:white;}"]));
    }
  }]);

  return InstructorModal;
}(external_react_default.a.Component);

/* harmony default export */ var components_InstructorModal = __webpack_exports__["a"] = (InstructorModal_InstructorModal);

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

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

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


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

/***/ "PFiW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return firstNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return firstNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return lastNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return lastNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dueDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assignDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return problems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return completed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return flags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return timeEstimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return subjectAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return subjectDescending; });
var firstNameAscending = function firstNameAscending(_ref, _ref2) {
  var firstNameA = _ref.accountInfo.firstName;
  var firstNameB = _ref2.accountInfo.firstName;

  if (firstNameA < firstNameB) {
    return -1;
  }

  return 0;
};
var firstNameDescending = function firstNameDescending(_ref3, _ref4) {
  var firstNameA = _ref3.accountInfo.firstName;
  var firstNameB = _ref4.accountInfo.firstName;

  if (firstNameA > firstNameB) {
    return -1;
  }

  return 0;
};
var lastNameAscending = function lastNameAscending(_ref5, _ref6) {
  var lastNameA = _ref5.accountInfo.lastName;
  var lastNameB = _ref6.accountInfo.lastName;

  if (lastNameA < lastNameB) {
    return -1;
  }

  return 0;
};
var lastNameDescending = function lastNameDescending(_ref7, _ref8) {
  var lastNameA = _ref7.accountInfo.lastName;
  var lastNameB = _ref8.accountInfo.lastName;

  if (lastNameA > lastNameB) {
    return -1;
  }

  return 0;
};
var dueDate = function dueDate(_ref9, _ref10) {
  var dueDateA = _ref9.dueDate;
  var dueDateB = _ref10.dueDate;

  if (dueDateA > dueDateB) {
    return -1;
  }

  return 0;
};
var assignDate = function assignDate(_ref11, _ref12) {
  var assignDateA = _ref11.assignDate;
  var assignDateB = _ref12.assignDate;

  if (assignDateA > assignDateB) {
    return -1;
  }

  return 0;
};
var problems = function problems(_ref13, _ref14) {
  var problemsA = _ref13.problems;
  var problemsB = _ref14.problems;

  if (problemsA > problemsB) {
    return -1;
  }

  return 0;
};
var completed = function completed(_ref15, _ref16) {
  var completedA = _ref15.completed,
      problemsA = _ref15.problems;
  var completedB = _ref16.completed,
      problemsB = _ref16.problems;

  if (completedA / problemsA > completedB / problemsB) {
    return -1;
  }

  return 0;
};
var flags = function flags(_ref17, _ref18) {
  var flagsA = _ref17.flags;
  var flagsB = _ref18.flags;

  if (flagsA > flagsB) {
    return -1;
  }

  return 0;
};
var score = function score(_ref19, _ref20) {
  var scoreA = _ref19.score;
  var scoreB = _ref20.score;

  if (scoreA > scoreB) {
    return -1;
  }

  return 0;
};
var timeEstimate = function timeEstimate(_ref21, _ref22) {
  var timeEstimateA = _ref21.timeEstimate;
  var timeEstimateB = _ref22.timeEstimate;

  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
var subjectAscending = function subjectAscending(_ref23, _ref24) {
  var subjectA = _ref23.subject;
  var subjectB = _ref24.subject;

  if (subjectA < subjectB) {
    return -1;
  }

  return 0;
};
var subjectDescending = function subjectDescending(_ref25, _ref26) {
  var subjectA = _ref25.subject;
  var subjectB = _ref26.subject;

  if (subjectA > subjectB) {
    return -1;
  }

  return 0;
};

/***/ }),

/***/ "QvYC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var genderOptions = [{
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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

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

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

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
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


var LocationToggleCard_LocationToggleCard = function LocationToggleCard(_ref) {
  var location = _ref.location,
      onToggleLocationSelect = _ref.onToggleLocationSelect;
  return external_react_default.a.createElement("li", {
    onClick: function onClick() {
      return onToggleLocationSelect(location);
    }
  }, external_react_default.a.createElement("input", {
    type: "checkbox"
  }), external_react_default.a.createElement("div", {
    className: "card-location card card-large"
  }, external_react_default.a.createElement("div", {
    className: "card-panel card-panel-location",
    style: {
      backgroundColor: '#62b771',
      color: '#fff'
    }
  }, external_react_default.a.createElement("span", {
    className: "check-link icon-check"
  }), external_react_default.a.createElement("div", {
    className: "card-panel-row row"
  }, external_react_default.a.createElement("div", {
    className: "col s10"
  }, external_react_default.a.createElement("h3", {
    className: "h4 truncate"
  }, location.locationNickname), external_react_default.a.createElement("h4", {
    className: "sub-title"
  }, location.locationName)), external_react_default.a.createElement("div", {
    className: "col s2 right-align"
  }, external_react_default.a.createElement("span", {
    className: "block-icon"
  }, external_react_default.a.createElement("i", {
    className: "icon-location"
  }), external_react_default.a.createElement("span", {
    className: "text-icon"
  }, "Location")))))));
};

/* harmony default export */ var components_LocationToggleCard = (LocationToggleCard_LocationToggleCard);
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
  locationName: 'House Of Mouse'
}, {
  locationNickname: 'TutorZone Austin2',
  locationName: 'We Teach Real Good'
}, {
  locationNickname: 'TutorZone Miami2',
  locationName: 'We Teach Even Better'
}]);
// CONCATENATED MODULE: ./components/Location/components/LocationModal/index.js
















var LocationModal_LocationModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LocationModal, _React$Component);

  function LocationModal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LocationModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LocationModal).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCloseModal", function () {
      return _this.setState({
        selectedLocations: []
      }, _this.props.onClose);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onToggleLocationSelect", function (location) {
      var selectedLocations = _this.state.selectedLocations;

      if (selectedLocations.indexOf(location) === -1) {
        _this.setState({
          selectedLocations: [].concat(Object(toConsumableArray["a" /* default */])(selectedLocations), [location])
        });
      } else {
        var updatedLocations = external_immutability_helper_default()(selectedLocations, {
          $splice: [[selectedLocations.indexOf(location), 1]]
        });

        _this.setState({
          selectedLocations: updatedLocations
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSaveLocationChanges", function () {
      var selectedLocations = _this.state.selectedLocations;
      var handleLocationsChange = _this.props.handleLocationsChange;
      handleLocationsChange(selectedLocations);

      _this.onCloseModal();
    });

    _this.state = {
      open: false,
      locations: sampleLocations,
      selectedLocations: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(LocationModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.props.open;
      var locations = this.state.locations;
      return external_react_default.a.createElement(Portal["a" /* default */], {
        selector: "#modal"
      }, open && external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "overlay"
      }, external_react_default.a.createElement(ClickOffComponentWrapper["a" /* default */], {
        onOuterClick: this.onCloseModal
      }, external_react_default.a.createElement("div", {
        id: "modal_Location1",
        className: "jsx-431526058" + " " + "modal modal-custom modal-location"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-modal card"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundColor: '#00456b',
          color: '#fff'
        },
        className: "jsx-431526058" + " " + "owner-box card-panel card-panel-title"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-panel-row row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "col"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-431526058"
      }, "Select Locations(s)")))), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "card-body"
      }, external_react_default.a.createElement("span", {
        className: "jsx-431526058" + " " + "hint"
      }, "Click to select or deselect."), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "box-scrollable"
      }, external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "height-40 jcf-scrollable"
      }, external_react_default.a.createElement("div", {
        style: {
          height: '100%',
          overflowY: 'scroll'
        },
        className: "jsx-431526058" + " " + "card-location-holder"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-431526058" + " " + "checkbox-list"
      }, locations.map(function (location) {
        return external_react_default.a.createElement(components_LocationToggleCard, {
          key: location.locationName,
          location: location,
          onToggleLocationSelect: _this2.onToggleLocationSelect
        });
      })))))), external_react_default.a.createElement("div", {
        className: "jsx-431526058" + " " + "modal-footer"
      }, external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onCloseModal,
        className: "jsx-431526058" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
      }, "Cancel"), external_react_default.a.createElement("a", {
        href: "#",
        onClick: this.onSaveLocationChanges,
        className: "jsx-431526058" + " " + "btn"
      }, "Add"))))))), external_react_default.a.createElement(style_default.a, {
        id: "431526058"
      }, ["h4.jsx-431526058{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", ".overlay.jsx-431526058{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-431526058{margin:0;border-radius:6px;}", "#modal_Location1.jsx-431526058{border-radius:6px;}", ".modal.jsx-431526058{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-431526058{opacity:1;visibility:visible;}", ".modal-footer.jsx-431526058{background-color:white;}"]));
    }
  }]);

  return LocationModal;
}(external_react_default.a.Component);

/* harmony default export */ var components_LocationModal = __webpack_exports__["a"] = (LocationModal_LocationModal);

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

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

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

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

/***/ "WoyS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  label: 'Right Triangles',
  value: 'rightTriangles'
}, {
  label: 'Trigonometry',
  value: 'trigonometry'
}, {
  label: 'Topic 3',
  value: 'topic3'
}, {
  label: 'Topic 4',
  value: 'topic4'
}, {
  label: 'Topic 5',
  value: 'topic5'
}]);

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

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

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

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

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


var InstructorCard = function InstructorCard(_ref) {
  var _ref$instructor = _ref.instructor,
      firstName = _ref$instructor.firstName,
      lastName = _ref$instructor.lastName,
      email = _ref$instructor.email,
      onRemoveInstructor = _ref.onRemoveInstructor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "owner-box card-panel card-panel-panel card-panel-large",
    style: {
      backgroundColor: '#31837a',
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "close-link icon-close-thin",
    onClick: onRemoveInstructor
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-panel-row row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-circle",
    style: {
      backgroundColor: '#0085ce',
      color: '#fff',
      height: '45px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "#",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-text",
    style: {
      color: '#fff'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "h3"
  }, lastName, ", ", firstName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:".concat(email)
  }, email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s2 right-align"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-user"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-icon"
  }, "Instructor")))));
};

/* harmony default export */ __webpack_exports__["a"] = (InstructorCard);

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



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

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "x4x+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOffComponentWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var ClickOffComponentWrapper =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ClickOffComponentWrapper, _Component);

  function ClickOffComponentWrapper(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ClickOffComponentWrapper);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClickOffComponentWrapper).call(this, props));
    _this.setWrapperRef = _this.setWrapperRef.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ClickOffComponentWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        if (this.props.nestedModals) {
          return;
        }

        this.props.onOuterClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.props.className,
        ref: this.setWrapperRef
      }, this.props.children);
    }
  }]);

  return ClickOffComponentWrapper;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

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