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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FjG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const formatTimeEstimate = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  const hourString = hours !== 0 ? `${hours} hrs` : '';
  const minuteString = minutes !== 0 ? `${minutes} mins` : '';
  return `${hourString} ${minuteString}`;
};

/* harmony default export */ __webpack_exports__["a"] = (formatTimeEstimate);

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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ab7+");


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

/***/ "6C9T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "PFiW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return firstNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return firstNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return lastNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return lastNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dueDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assignDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return problems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return completed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return flags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return timeEstimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return timeEstimateAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return subjectAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return subjectDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return passageAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return passageDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return statusDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return statusAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return flagsDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return flagsAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return availableDateDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return availableDateAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return lessonNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return lessonNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return dueDateAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return completionDateAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return completionDateDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return lessonTypeAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return lessonTypeDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return totalProblemsAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return totalProblemsDescending; });
const firstNameAscending = ({
  accountInfo: {
    firstName: firstNameA
  }
}, {
  accountInfo: {
    firstName: firstNameB
  }
}) => {
  if (firstNameA < firstNameB) {
    return -1;
  }

  return 0;
};
const firstNameDescending = ({
  accountInfo: {
    firstName: firstNameA
  }
}, {
  accountInfo: {
    firstName: firstNameB
  }
}) => {
  if (firstNameA > firstNameB) {
    return -1;
  }

  return 0;
};
const lastNameAscending = ({
  accountInfo: {
    lastName: lastNameA
  }
}, {
  accountInfo: {
    lastName: lastNameB
  }
}) => {
  if (lastNameA < lastNameB) {
    return -1;
  }

  return 0;
};
const lastNameDescending = ({
  accountInfo: {
    lastName: lastNameA
  }
}, {
  accountInfo: {
    lastName: lastNameB
  }
}) => {
  if (lastNameA > lastNameB) {
    return -1;
  }

  return 0;
};
const dueDate = ({
  dueDate: dueDateA
}, {
  dueDate: dueDateB
}) => {
  if (dueDateA > dueDateB) {
    return -1;
  }

  return 0;
};
const assignDate = ({
  assignDate: assignDateA
}, {
  assignDate: assignDateB
}) => {
  if (assignDateA > assignDateB) {
    return -1;
  }

  return 0;
};
const problems = ({
  problems: problemsA
}, {
  problems: problemsB
}) => {
  if (problemsA > problemsB) {
    return -1;
  }

  return 0;
};
const completed = ({
  completed: completedA,
  problems: problemsA
}, {
  completed: completedB,
  problems: problemsB
}) => {
  if (completedA / problemsA > completedB / problemsB) {
    return -1;
  }

  return 0;
};
const flags = ({
  flags: flagsA
}, {
  flags: flagsB
}) => {
  if (flagsA > flagsB) {
    return -1;
  }

  return 0;
};
const score = ({
  score: scoreA
}, {
  score: scoreB
}) => {
  if (scoreA > scoreB) {
    return -1;
  }

  return 0;
};
const timeEstimate = ({
  timeEstimate: timeEstimateA
}, {
  timeEstimate: timeEstimateB
}) => {
  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
const timeEstimateAscending = ({
  timeEstimate: timeEstimateA
}, {
  timeEstimate: timeEstimateB
}) => {
  if (timeEstimateA < timeEstimateB) {
    return -1;
  }

  return 0;
};
const subjectAscending = ({
  subject: subjectA
}, {
  subject: subjectB
}) => {
  if (subjectA < subjectB) {
    return -1;
  }

  return 0;
};
const subjectDescending = ({
  subject: subjectA
}, {
  subject: subjectB
}) => {
  if (subjectA > subjectB) {
    return -1;
  }

  return 0;
};
const passageAscending = ({
  passage: passageA
}, {
  passage: passageB
}) => {
  if (passageA < passageB) {
    return -1;
  }

  return 0;
};
const passageDescending = ({
  passage: passageA
}, {
  passage: passageB
}) => {
  if (passageA > passageB) {
    return -1;
  }

  return 0;
};
const statusDescending = ({
  status: statusA
}, {
  status: statusB
}) => {
  if (statusA > statusB) {
    return -1;
  }

  return 0;
};
const statusAscending = ({
  status: statusA
}, {
  status: statusB
}) => {
  if (statusA < statusB) {
    return -1;
  }

  return 0;
};
const flagsDescending = ({
  flags: flagsA
}, {
  flags: flagsB
}) => {
  if (flagsA.length > flagsB.length) {
    return -1;
  }

  return 0;
};
const flagsAscending = ({
  flags: flagsA
}, {
  flags: flagsB
}) => {
  if (flagsA.length < flagsB.length) {
    return -1;
  }

  return 0;
};
const availableDateDescending = ({
  availableDate: availableDateA
}, {
  availableDate: availableDateB
}) => {
  if (availableDateA > availableDateB) {
    return -1;
  }

  return 0;
};
const availableDateAscending = ({
  availableDate: availableDateA
}, {
  availableDate: availableDateB
}) => {
  if (availableDateA < availableDateB) {
    return -1;
  }

  return 0;
};
const lessonNameAscending = ({
  lessonName: lessonNameA
}, {
  lessonName: lessonNameB
}) => {
  if (lessonNameA < lessonNameB) {
    return -1;
  }

  return 0;
};
const lessonNameDescending = ({
  lessonName: lessonNameA
}, {
  lessonName: lessonNameB
}) => {
  if (lessonNameA > lessonNameB) {
    return -1;
  }

  return 0;
};
const dueDateAscending = ({
  dueDate: dueDateA
}, {
  dueDate: dueDateB
}) => {
  if (dueDateA < dueDateB) {
    return -1;
  }

  return 0;
};
const completionDateAscending = ({
  completionDate: completionDateA
}, {
  completionDate: completionDateB
}) => {
  if (completionDateA < completionDateB) {
    return -1;
  }

  return 0;
};
const completionDateDescending = ({
  completionDate: completionDateA
}, {
  completionDate: completionDateB
}) => {
  if (completionDateA > completionDateB) {
    return -1;
  }

  return 0;
};
const lessonTypeAscending = ({
  type: typeA
}, {
  type: typeB
}) => {
  if (typeA < typeB) {
    return -1;
  }

  return 0;
};
const lessonTypeDescending = ({
  type: typeA
}, {
  type: typeB
}) => {
  if (typeA > typeB) {
    return -1;
  }

  return 0;
};
const totalProblemsAscending = ({
  totalProblems: totalProblemsA
}, {
  totalProblems: totalProblemsB
}) => {
  if (totalProblemsA < totalProblemsB) {
    return -1;
  }

  return 0;
};
const totalProblemsDescending = ({
  totalProblems: totalProblemsA
}, {
  totalProblems: totalProblemsB
}) => {
  if (totalProblemsA > totalProblemsB) {
    return -1;
  }

  return 0;
};

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

/***/ "YckE":
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ab7+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/styles/dropdownStyles.js
var dropdownStyles = __webpack_require__("uhPQ");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/styles/ControlComponent.js
var ControlComponent = __webpack_require__("4vSA");

// CONCATENATED MODULE: ./components/FormComponents/Dropdown/styles/MultiValueLabel.js
var __jsx = external_react_default.a.createElement;


/* harmony default export */ var MultiValueLabel = (props => __jsx("div", {
  className: "chip"
}, __jsx(external_react_select_["components"].MultiValueLabel, props)));
// CONCATENATED MODULE: ./components/Worksheet/utils/index.js
const samplePassages = [{
  id: 1,
  subject: 'reading',
  title: 'Passage Title 1',
  problems: [{
    id: 1,
    subject: 'math',
    difficulty: 'easy',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 3,
    subject: 'reading',
    difficulty: 'hard',
    type: 'satPractice',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles', 'trigonometry']
  }]
}, {
  id: 2,
  subject: 'writing',
  title: 'Passage Title 2',
  problems: [{
    id: 2,
    subject: 'reading',
    difficulty: 'easy',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 4,
    subject: 'writing',
    difficulty: 'medium',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['trigonometry']
  }]
}, {
  id: 3,
  subject: 'math',
  title: 'Passage Title 3',
  problems: [{
    id: 5,
    subject: 'writing',
    difficulty: 'hard',
    type: 'skillBuilder',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles']
  }, {
    id: 6,
    subject: 'math',
    difficulty: 'medium',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }]
}];
const sampleProblems = [{
  id: 1,
  subject: 'math',
  difficulty: 'easy',
  type: 'skillBuilder',
  inWorkbook: false,
  topics: ['rightTriangles', 'trigonometry']
}, {
  id: 2,
  subject: 'reading',
  difficulty: 'easy',
  type: 'satPractice',
  inWorkbook: false,
  topics: ['rightTriangles', 'trigonometry']
}, {
  id: 3,
  subject: 'reading',
  difficulty: 'hard',
  type: 'satPractice',
  inWorkbook: false,
  disabled: true,
  topics: ['rightTriangles', 'trigonometry']
}, {
  id: 4,
  subject: 'writing',
  difficulty: 'medium',
  type: 'skillBuilder',
  inWorkbook: false,
  topics: ['trigonometry']
}, {
  id: 5,
  subject: 'writing',
  difficulty: 'hard',
  type: 'skillBuilder',
  inWorkbook: false,
  disabled: true,
  topics: ['rightTriangles']
}, {
  id: 6,
  subject: 'math',
  difficulty: 'medium',
  type: 'satPractice',
  inWorkbook: false,
  topics: ['rightTriangles', 'trigonometry']
}];
const subjectOptions = [{
  label: 'Reading',
  value: 'Reading'
}, {
  label: 'Writing',
  value: 'Writing'
}, {
  label: 'Math',
  value: 'Math'
}];
const typeOptions = [{
  label: 'SAT Practice',
  value: 'SAT Practice'
}, {
  label: 'Skill Builder',
  value: 'Skill Builders'
}];
const difficultyOptions = [{
  label: 'Basic',
  value: 'Basic'
}, {
  label: 'Medium',
  value: 'Medium'
}, {
  label: 'Advanced',
  value: 'Advanced'
}, {
  label: 'Mixed',
  value: 'Mixed'
}];
const tagOptions = [{
  label: '',
  value: ''
}];
const categoryOptions = [{
  label: 'Math',
  options: [{
    value: 'Special Right Triangles',
    label: 'Special Right Triangles'
  }, {
    value: 'Volumes',
    label: 'Volumes'
  }, {
    value: 'Trig Functions',
    label: 'Trig Functions'
  }]
}, {
  label: 'Writing',
  options: [{
    value: 'Astrology',
    label: 'Astrology'
  }, {
    value: 'Algebra',
    label: 'Algebra'
  }]
}, {
  label: 'Reading',
  options: [{
    value: 'Geometry',
    label: 'Geometry'
  }, {
    value: 'Pythagorean Theorem',
    label: 'Pythagorean Theorem'
  }]
}];
const getDefaultCategories = (categories, subject) => {
  const subjectCategories = categoryOptions.filter(categorySection => categorySection.label === subject);
  const subjectCategoryOptions = subjectCategories && subjectCategories.length > 0 && subjectCategories[0].options;
  return categories.map(currentCategory => subjectCategoryOptions.filter(category => category.value === currentCategory)[0]);
};
const data = percentage => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: ['#03bbf7', '#eaeaea']
  }]
});
// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/WorksheetDetails/index.js

var WorksheetDetails_jsx = external_react_default.a.createElement;










class WorksheetDetails_WorksheetDetails extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalWorksheet || nextProps.worksheet.id !== this.state.originalWorksheet.id) {
        const {
          worksheet: {
            id,
            worksheetName,
            subject,
            problemType: type,
            difficulty,
            timeEstimate,
            classifications: categories,
            description
          } = {}
        } = nextProps;
        const updatedWorksheet = {
          id,
          worksheetName,
          subject,
          type,
          difficulty,
          timeEstimate,
          categories,
          description
        };
        const {
          originalWorksheet: originalWorksheetState
        } = this.state;
        const originalWorksheet = external_immutability_helper_default()(originalWorksheetState, {
          $merge: nextProps.worksheet
        });
        this.setState({
          originalWorksheet,
          updatedWorksheet
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "getSectionDropdownOptions", () => {
      const {
        categoryOptions
      } = this.state;
      const {
        worksheet: {
          subject
        } = {}
      } = this.props;

      if (!subject) {
        return categoryOptions;
      }

      const categoryLabels = categoryOptions.map(categoryOption => categoryOption.label);
      const subjectIndex = categoryLabels.indexOf(subject.charAt(0).toUpperCase() + subject.slice(1));
      return [categoryOptions[subjectIndex]];
    });

    Object(defineProperty["a" /* default */])(this, "updateCategoryState", categories => {
      const updatedWorksheet = external_immutability_helper_default()(this.state.updatedWorksheet, {
        $merge: {
          categories
        }
      });
      this.setState({
        updatedWorksheet
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleCategoryChange", categories => {
      const updatedCategories = categories.reduce((finalArr, category) => {
        finalArr.push(category.value);
        return finalArr;
      }, []);
      this.updateCategoryState(updatedCategories);
    });

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name) => {
      const {
        updatedWorksheet: previousWorksheetState
      } = this.state;
      const value = event.target ? event.target.value : event;
      const updatedWorksheet = external_immutability_helper_default()(previousWorksheetState, {
        $merge: {
          [name]: value
        }
      });
      this.setState({
        updatedWorksheet
      });
    });

    this.state = {
      originalWorksheet: {
        worksheetName: '',
        subject: {},
        type: '',
        difficulty: '',
        timeEstimate: '',
        categories: [],
        description: ''
      },
      updatedWorksheet: {
        worksheetName: '',
        subject: {},
        type: '',
        difficulty: '',
        timeEstimate: '',
        categories: [],
        description: ''
      },
      validation: {
        worksheetName: true,
        subject: true,
        type: true,
        difficulty: true,
        timeEstimate: true,
        categories: true
      },
      categoryOptions: [{
        label: 'Math',
        options: [{
          value: 'Special Right Triangles',
          label: 'Special Right Triangles'
        }, {
          value: 'Volumes',
          label: 'Volumes'
        }, {
          value: 'Trig Functions',
          label: 'Trig Functions'
        }]
      }, {
        label: 'Writing',
        options: [{
          value: 'Astrology',
          label: 'Astrology'
        }, {
          value: 'Algebra',
          label: 'Algebra'
        }]
      }, {
        label: 'Reading',
        options: [{
          value: 'Geometry',
          label: 'Geometry'
        }, {
          value: 'Pythagorean Theorem',
          label: 'Pythagorean Theorem'
        }]
      }],
      subjectCategoryOptions: []
    };
  }

  componentDidMount() {
    const {
      worksheet: {
        id,
        worksheetName,
        subject,
        problemType: type,
        difficulty,
        timeEstimate,
        classifications: categories,
        description
      } = {}
    } = this.props;
    const updatedWorksheet = {
      id,
      worksheetName,
      subject,
      type,
      difficulty,
      timeEstimate,
      categories,
      description
    };
    const {
      originalWorksheet: originalWorksheetState
    } = this.state;
    const originalWorksheet = external_immutability_helper_default()(originalWorksheetState, {
      $merge: updatedWorksheet
    });
    this.setState({
      originalWorksheet,
      updatedWorksheet
    }); // eslint-disable-line
  } // This resets the component state to reflect the details of the next worksheet the user clicks on


  render() {
    const {
      validation: {
        categories: categoriesValid
      },
      updatedWorksheet: {
        worksheetName,
        timeEstimate,
        subject,
        type,
        difficulty,
        description,
        categories
      }
    } = this.state;
    const {
      defaultCategories
    } = this.props;
    return WorksheetDetails_jsx("div", {
      className: "col s12 l6"
    }, WorksheetDetails_jsx("div", {
      className: "card-block"
    }, WorksheetDetails_jsx("h2", null, "Details"), WorksheetDetails_jsx("div", {
      className: "card"
    }, WorksheetDetails_jsx("div", {
      className: "card-content"
    }, WorksheetDetails_jsx("div", {
      className: "card-body"
    }, WorksheetDetails_jsx("div", {
      className: "row mb-0"
    }, WorksheetDetails_jsx("div", {
      className: "col s12"
    }, WorksheetDetails_jsx("div", {
      className: "input-field"
    }, WorksheetDetails_jsx("input", {
      type: "text",
      id: "details_name",
      value: worksheetName,
      onChange: event => this.handleDetailsChange(event, 'worksheetName')
    }), WorksheetDetails_jsx("label", {
      className: worksheetName.length ? 'label active' : 'label',
      htmlFor: "details_name"
    }, "Name")))), WorksheetDetails_jsx("div", {
      className: "row mb-0"
    }, WorksheetDetails_jsx("div", {
      className: "col s6"
    }, WorksheetDetails_jsx("div", {
      className: "input-field"
    }, WorksheetDetails_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(subject, subjectOptions),
      onChange: event => this.handleDetailsChange(event, 'subject'),
      options: subjectOptions,
      label: "Subject",
      stateKey: "subject",
      dropdownKey: "subject"
    }))), WorksheetDetails_jsx("div", {
      className: "col s6"
    }, WorksheetDetails_jsx("div", {
      className: "input-field"
    }, WorksheetDetails_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(type, typeOptions),
      onChange: event => this.handleDetailsChange(event, 'type'),
      options: typeOptions,
      label: "Type",
      stateKey: "type",
      dropdownKey: "type"
    })))), WorksheetDetails_jsx("div", {
      className: "row mb-0"
    }, WorksheetDetails_jsx("div", {
      className: "col s6"
    }, WorksheetDetails_jsx("div", {
      className: "input-field"
    }, WorksheetDetails_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(difficulty, difficultyOptions),
      onChange: event => this.handleDetailsChange(event, 'difficulty'),
      options: difficultyOptions,
      label: "Difficulty",
      stateKey: "difficulty",
      dropdownKey: "difficulty"
    }))), WorksheetDetails_jsx("div", {
      className: "col s6"
    }, WorksheetDetails_jsx("div", {
      className: "datepicker-field input-field"
    }, WorksheetDetails_jsx("i", {
      className: "icon-clock2"
    }), WorksheetDetails_jsx("input", {
      type: "text",
      className: "timepicker",
      id: "detail_estimated_time",
      value: timeEstimate,
      onChange: event => this.handleDetailsChange(event, 'timeEstimate')
    }), WorksheetDetails_jsx("label", {
      className: timeEstimate.length ? 'label active' : 'label',
      htmlFor: "detail_estimated_time"
    }, "Estimated Time")))), WorksheetDetails_jsx("div", {
      className: "row mb-0"
    }, WorksheetDetails_jsx("div", {
      className: "col s12"
    }, WorksheetDetails_jsx(external_react_select_default.a, {
      options: this.getSectionDropdownOptions(),
      isMulti: true,
      instanceId: "categories-select",
      onChange: this.handleCategoryChange,
      components: {
        Control: ControlComponent["a" /* default */],
        MultiValueLabel: MultiValueLabel
      },
      name: "categoryOptions",
      className: categoriesValid || !categoriesValid && categories.length ? '' : 'invalid',
      classNamePrefix: "multi-select",
      placeholder: 'Select one or more categories',
      styles: dropdownStyles["b" /* default */],
      isClearable: false,
      label: "Categories",
      defaultValue: defaultCategories
    }))), WorksheetDetails_jsx("div", {
      className: "row mb-0"
    }, WorksheetDetails_jsx("div", {
      className: "col s12"
    }, WorksheetDetails_jsx("div", {
      className: "input-field"
    }, WorksheetDetails_jsx("textarea", {
      id: "detail_description",
      className: "materialize-textarea",
      style: {
        height: '70px'
      },
      value: description,
      onChange: event => this.handleDetailsChange(event, 'description')
    }), WorksheetDetails_jsx("label", {
      className: description.length ? 'label active' : 'label',
      htmlFor: "detail_description"
    }, "Description (optional)")))))))));
  }

}

/* harmony default export */ var components_WorksheetDetails = (WorksheetDetails_WorksheetDetails);
// CONCATENATED MODULE: ./components/Worksheet/utils/worksheetFilterMap.js
const topicMap = {
  rightTriangles: 'Right Triangles',
  trigonometry: 'Trigonometry'
};
const workbookMap = {
  false: 'notInWorkbook',
  true: 'inWorkbook'
};
const subjectMap = {
  reading: 'Reading',
  writing: 'Writing',
  math: 'Math'
};
const difficultyMap = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard'
};
const typeMap = {
  satPractice: 'SAT Practice',
  skillBuilder: 'Skill Builder'
};
const worksheetTypeMap = {
  'SAT Practice': 'satPractice',
  'Skill Builders': 'skillBuilders',
  'Mixed': 'mixedType'
};
const worksheetSourceMap = {
  'Built-In': 'builtIn',
  'User Created': 'userCreated'
};
const worksheetDifficultyMap = {
  'Basic': 'basic',
  'Medium': 'medium',
  'Advanced': 'advanced',
  'Mixed': 'mixedDifficulty'
};
const worksheetSubjectMap = {
  'Reading': 'reading',
  'Writing': 'writing',
  'Math': 'math',
  'Mixed': 'mixedSubject'
};
// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/WorksheetProblems/index.js

var WorksheetProblems_jsx = external_react_default.a.createElement;



class WorksheetProblems_WorksheetProblems extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "mapProblemsAndPassages", () => {
      const {
        problems,
        passages
      } = this.props;
      const mappableArray = [...problems, ...passages];
      return mappableArray.map(problemOrPassage => {
        if (problemOrPassage.difficulty) {
          return WorksheetProblems_jsx("li", {
            className: "collection-item",
            key: problemOrPassage.id
          }, WorksheetProblems_jsx("div", {
            className: "list-row"
          }, WorksheetProblems_jsx("div", {
            className: "cell handle cell_01"
          }, WorksheetProblems_jsx("i", {
            className: "custom-icon-burger"
          })), WorksheetProblems_jsx("div", {
            className: "cell cell_02"
          }, WorksheetProblems_jsx("span", {
            className: "list-num"
          })), WorksheetProblems_jsx("div", {
            className: "cell cell_03"
          }, WorksheetProblems_jsx("span", null, subjectMap[problemOrPassage.subject])), WorksheetProblems_jsx("div", {
            className: "cell cell_04"
          }, WorksheetProblems_jsx("span", null, typeMap[problemOrPassage.type])), WorksheetProblems_jsx("div", {
            className: "cell cell_05"
          }, WorksheetProblems_jsx("span", null, problemOrPassage.inWorkbook ? 'Yes' : 'No')), WorksheetProblems_jsx("div", {
            className: "cell cell_06"
          }, WorksheetProblems_jsx("span", null, difficultyMap[problemOrPassage.difficulty].charAt(0))), WorksheetProblems_jsx("div", {
            className: "cell right-align cell_07"
          }, WorksheetProblems_jsx("span", {
            className: "icon-frame"
          }, WorksheetProblems_jsx("a", {
            href: "#"
          }, WorksheetProblems_jsx("i", {
            className: "icon-eye"
          }))), WorksheetProblems_jsx("a", {
            href: "#",
            className: "close"
          }, WorksheetProblems_jsx("i", {
            className: "icon-close"
          })))));
        }

        return WorksheetProblems_jsx("li", {
          className: "collection-item combined-rows",
          key: problemOrPassage.id
        }, WorksheetProblems_jsx("div", {
          className: "combined-holder"
        }, WorksheetProblems_jsx("div", {
          className: "combined-header"
        }, WorksheetProblems_jsx("div", {
          className: "burger-block handle"
        }, WorksheetProblems_jsx("i", {
          className: "custom-icon-burger"
        })), WorksheetProblems_jsx("div", {
          className: "combined-title"
        }, problemOrPassage.title), WorksheetProblems_jsx("a", {
          href: "#",
          className: "close"
        }, WorksheetProblems_jsx("i", {
          className: "icon-close"
        }))), WorksheetProblems_jsx("ol", {
          className: "problems-list-number problems-list collection"
        }, problemOrPassage.problems.map(problem => WorksheetProblems_jsx("li", {
          className: "collection-item",
          key: problem.id
        }, WorksheetProblems_jsx("div", {
          className: "list-row"
        }, WorksheetProblems_jsx("div", {
          className: "cell handle cell_01"
        }, "\xA0"), WorksheetProblems_jsx("div", {
          className: "cell cell_02"
        }, WorksheetProblems_jsx("span", {
          className: "list-num"
        })), WorksheetProblems_jsx("div", {
          className: "cell cell_03"
        }, WorksheetProblems_jsx("span", null, subjectMap[problem.subject])), WorksheetProblems_jsx("div", {
          className: "cell cell_04"
        }, WorksheetProblems_jsx("span", null, typeMap[problem.type])), WorksheetProblems_jsx("div", {
          className: "cell cell_05"
        }, WorksheetProblems_jsx("span", null, problem.inWorkbook ? 'Yes' : 'No')), WorksheetProblems_jsx("div", {
          className: "cell cell_06"
        }, WorksheetProblems_jsx("span", null, difficultyMap[problem.difficulty].charAt(0))), WorksheetProblems_jsx("div", {
          className: "cell right-align cell_07"
        }, WorksheetProblems_jsx("span", {
          className: "icon-frame"
        }, WorksheetProblems_jsx("a", {
          href: "#"
        }, WorksheetProblems_jsx("i", {
          className: "icon-eye"
        }))), WorksheetProblems_jsx("a", {
          href: "#",
          className: "close invisible"
        }, WorksheetProblems_jsx("i", {
          className: "icon-close"
        })))))))));
      });
    });

    this.state = {
      true: true
    };
  }

  render() {
    const {
      onOpenProblemBankModal,
      onRemoveAllProblems
    } = this.props;
    return WorksheetProblems_jsx("div", {
      className: "col s12 l6"
    }, WorksheetProblems_jsx("div", {
      className: "card-block card-block-problems"
    }, WorksheetProblems_jsx("h2", null, "Worksheet Problems"), WorksheetProblems_jsx("div", {
      className: "card-main-full card"
    }, WorksheetProblems_jsx("div", {
      className: "body-inner"
    }, WorksheetProblems_jsx("ol", {
      className: "problems-list-number problems-list collection js-sortable-list",
      "data-sortable-group": "{ \"name\": \"put-list\", \"put\": \"list\"}"
    }, WorksheetProblems_jsx("li", {
      className: "collection-item list-header"
    }, WorksheetProblems_jsx("div", {
      className: "header-row"
    }, WorksheetProblems_jsx("div", {
      className: "cell cell_01"
    }, "\xA0"), WorksheetProblems_jsx("div", {
      className: "cell cell_02"
    }, "\xA0"), WorksheetProblems_jsx("div", {
      className: "cell cell_03"
    }, "Subject"), WorksheetProblems_jsx("div", {
      className: "cell cell_04"
    }, "Type"), WorksheetProblems_jsx("div", {
      className: "cell cell_05"
    }, "In Book"), WorksheetProblems_jsx("div", {
      className: "cell cell_06"
    }, "Di\uFB00"), WorksheetProblems_jsx("div", {
      className: "cell cell_07"
    }, "\xA0"))), this.mapProblemsAndPassages())), WorksheetProblems_jsx("div", {
      className: "card-footer right-align"
    }, WorksheetProblems_jsx("a", {
      href: "#",
      className: "waves-effect waves-teal btn-flat pink-text text-darken-1",
      onClick: onRemoveAllProblems
    }, "Remove All"), WorksheetProblems_jsx("a", {
      href: "#",
      className: "modal-trigger link-btn waves-effect waves-teal btn-flat",
      onClick: onOpenProblemBankModal
    }, "Add Problems")))));
  }

}

/* harmony default export */ var components_WorksheetProblems = (WorksheetProblems_WorksheetProblems);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/utils/sampleTopics.js
var sampleTopics = __webpack_require__("WoyS");

// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/ProblemBank/components/FilterSection/index.js

var FilterSection_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */






class FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      topic: ''
    }, this.props.onClearFilters));

    Object(defineProperty["a" /* default */])(this, "handleTopicFilterChange", event => {
      const {
        onSetFilteredTopicState
      } = this.props;
      const value = event.target ? event.target.value : event;
      const updatedState = external_immutability_helper_default()(this.state, {
        $merge: {
          topic: value
        }
      });
      this.setState(updatedState);
      return onSetFilteredTopicState(event);
    });

    this.state = {
      open: true,
      topic: ''
    };
  }

  render() {
    const {
      open,
      topic
    } = this.state;
    const {
      sortBySubject,
      toggleSelectAllProblemsOrPassages,
      handleFilterClick,
      subjectFilters,
      difficultyFilters,
      typeFilters,
      workbookFilters
    } = this.props;
    return FilterSection_jsx("div", {
      className: "filter-form-holder"
    }, FilterSection_jsx("ul", {
      className: "collapsible expandable",
      style: {
        minHeight: '0'
      }
    }, FilterSection_jsx("li", null, FilterSection_jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, FilterSection_jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "reading_problems",
      checked: subjectFilters.indexOf('reading') !== -1,
      onChange: () => handleFilterClick('subject', 'reading')
    }), FilterSection_jsx("label", {
      htmlFor: "reading_problems"
    }, "Reading")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "writing",
      checked: subjectFilters.indexOf('writing') !== -1,
      onChange: () => handleFilterClick('subject', 'writing')
    }), FilterSection_jsx("label", {
      htmlFor: "writing"
    }, "Writing")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "math",
      checked: subjectFilters.indexOf('math') !== -1,
      onChange: () => handleFilterClick('subject', 'math')
    }), FilterSection_jsx("label", {
      htmlFor: "math"
    }, "Math"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "easy",
      checked: difficultyFilters.indexOf('easy') !== -1,
      onChange: () => handleFilterClick('difficulty', 'easy')
    }), FilterSection_jsx("label", {
      htmlFor: "easy"
    }, "Easy")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "medium",
      checked: difficultyFilters.indexOf('medium') !== -1,
      onChange: () => handleFilterClick('difficulty', 'medium')
    }), FilterSection_jsx("label", {
      htmlFor: "medium"
    }, "Medium")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "hard",
      checked: difficultyFilters.indexOf('hard') !== -1,
      onChange: () => handleFilterClick('difficulty', 'hard')
    }), FilterSection_jsx("label", {
      htmlFor: "hard"
    }, "Hard"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "satPractice",
      checked: typeFilters.indexOf('satPractice') !== -1,
      onChange: () => handleFilterClick('type', 'satPractice')
    }), FilterSection_jsx("label", {
      htmlFor: "satPractice"
    }, "SAT Practice")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "skillBuilder",
      checked: typeFilters.indexOf('skillBuilder') !== -1,
      onChange: () => handleFilterClick('type', 'skillBuilder')
    }), FilterSection_jsx("label", {
      htmlFor: "skillBuilder"
    }, "Skill Builder"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "inWorkbook",
      checked: workbookFilters.indexOf('inWorkbook') !== -1,
      onChange: () => handleFilterClick('workbook', 'inWorkbook')
    }), FilterSection_jsx("label", {
      htmlFor: "inWorkbook"
    }, "In Workbook")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "notInWorkbook",
      checked: workbookFilters.indexOf('notInWorkbook') !== -1,
      onChange: () => handleFilterClick('workbook', 'notInWorkbook')
    }), FilterSection_jsx("label", {
      htmlFor: "notInWorkbook"
    }, "Not in Workbook")))), FilterSection_jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, FilterSection_jsx("div", {
      className: "col s12 m3"
    }, FilterSection_jsx("div", {
      className: "input-field",
      style: {
        marginBottom: '0',
        marginTop: '0'
      }
    }, FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(topic, sampleTopics["a" /* default */]),
      onChange: this.handleTopicFilterChange,
      options: sampleTopics["a" /* default */],
      label: "Topic",
      stateKey: "topic",
      dropdownKey: "topic"
    }))))), FilterSection_jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, FilterSection_jsx("div", {
      className: "col s12 l4 hide-on-med-and-down show-on-large"
    }, "\xA0"), FilterSection_jsx("div", {
      className: "col s12 l4 hide-on-med-and-down show-on-large"
    }, "\xA0"), FilterSection_jsx("div", {
      className: "col s12 l4"
    }, FilterSection_jsx("div", {
      className: "option-filters"
    }, FilterSection_jsx("div", {
      className: "option-item clear"
    }, FilterSection_jsx("a", {
      href: "#",
      onClick: this.onClearFilters
    }, "Clear Filters")), FilterSection_jsx("div", {
      className: "option-item"
    }, FilterSection_jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, FilterSection_jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))), FilterSection_jsx("div", {
      className: "table-header white hide-on-med-and-down"
    }, FilterSection_jsx("div", {
      className: "container-lg"
    }, FilterSection_jsx("div", {
      className: "list-table detail-table"
    }, FilterSection_jsx("div", {
      className: "list-table-header table-header-box"
    }, FilterSection_jsx("div", {
      className: "list-table-row"
    }, FilterSection_jsx("div", {
      className: "list-table-cell checkbox-cell"
    }, FilterSection_jsx("label", null, FilterSection_jsx("input", {
      type: "checkbox",
      className: "filled-in",
      "data-check-pattern": "[name^='check_']",
      onChange: toggleSelectAllProblemsOrPassages
    }), FilterSection_jsx("span", null, "\xA0"))), FilterSection_jsx("div", {
      className: "list-table-cell subject-cell"
    }, FilterSection_jsx("a", {
      href: "#",
      onClick: sortBySubject
    }, FilterSection_jsx("span", {
      className: "sort-holder"
    }, "Subject ", FilterSection_jsx("i", {
      className: "sort-icon custom-icon-traingle-down"
    })))), FilterSection_jsx("div", {
      className: "list-table-cell info-cell"
    }, FilterSection_jsx("b", null, "Di\uFB03culty")), FilterSection_jsx("div", {
      className: "list-table-cell type-cell"
    }, FilterSection_jsx("b", null, "Type")), FilterSection_jsx("div", {
      className: "list-table-cell in-cell"
    }, FilterSection_jsx("b", null, "In Workbook")), FilterSection_jsx("div", {
      className: "list-table-cell topic-cell"
    }, FilterSection_jsx("b", null, "Topic(s)")), FilterSection_jsx("div", {
      className: "list-table-cell view-cell"
    }, FilterSection_jsx("b", null, "\xA0")), FilterSection_jsx("div", {
      className: "list-table-cell drop-cell"
    }, "\xA0")))))));
  }

}

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/ProblemBank/components/TableHeader/index.js
var TableHeader_jsx = external_react_default.a.createElement;


const TableHeader = ({
  sortBySubject
}) => TableHeader_jsx("div", {
  className: "list-table-header show-on-medium-and-down hide-on-large-only"
}, TableHeader_jsx("div", {
  className: "list-table-row"
}, TableHeader_jsx("div", {
  className: "list-table-cell checkbox-cell"
}, TableHeader_jsx("span", null, "\xA0")), TableHeader_jsx("div", {
  className: "list-table-cell subject-cell"
}, TableHeader_jsx("a", {
  href: "#",
  onClick: sortBySubject
}, TableHeader_jsx("span", {
  className: "sort-holder"
}, "Subject ", TableHeader_jsx("i", {
  className: "sort-icon custom-icon-traingle-down"
})))), TableHeader_jsx("div", {
  className: "list-table-cell info-cell"
}, TableHeader_jsx("b", null, "Di\uFB03culty")), TableHeader_jsx("div", {
  className: "list-table-cell type-cell"
}, TableHeader_jsx("b", null, "Type")), TableHeader_jsx("div", {
  className: "list-table-cell in-cell"
}, TableHeader_jsx("b", null, "In Workbook")), TableHeader_jsx("div", {
  className: "list-table-cell topic-cell"
}, TableHeader_jsx("b", null, "Topic(s)")), TableHeader_jsx("div", {
  className: "list-table-cell view-cell"
}, TableHeader_jsx("b", null, "\xA0")), TableHeader_jsx("div", {
  className: "list-table-cell drop-cell"
}, "\xA0")));

/* harmony default export */ var components_TableHeader = (TableHeader);
// EXTERNAL MODULE: ./components/utils/sortFunctions.js
var sortFunctions = __webpack_require__("PFiW");

// CONCATENATED MODULE: ./components/Worksheet/DetailPage/components/ProblemBank/index.js


var ProblemBank_jsx = external_react_default.a.createElement;

/* eslint-disable array-callback-return */

/* eslint-disable consistent-return */








class ProblemBank_ProblemBank extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.props.worksheetId || nextProps.worksheetId !== this.state.worksheetId) {
        const {
          problems,
          passages,
          worksheetId
        } = nextProps;
        this.setState({
          problems,
          passages,
          worksheetId
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onToggleAddProblemDropdown", () => this.setState(({
      addProblemsDropdownOpen
    }) => ({
      addProblemsDropdownOpen: !addProblemsDropdownOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onChangeOpenSection", openSection => this.setState({
      openSection
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredTopicState", topicFilter => this.setState({
      topicFilter
    }));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      subjectFilters: [],
      difficultyFilters: [],
      typeFilters: [],
      workbookFilters: [],
      topicFilter: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetAscendingSort", () => this.setState({
      sort: 'ascending'
    }));

    Object(defineProperty["a" /* default */])(this, "onSetDescendingSort", () => this.setState({
      sort: 'descending'
    }));

    Object(defineProperty["a" /* default */])(this, "onSortBySubject", problemsOrPassages => {
      const {
        sort
      } = this.state;

      if (sort === 'ascending') {
        return problemsOrPassages.sort(sortFunctions["z" /* subjectAscending */]);
      }

      return problemsOrPassages.sort(sortFunctions["A" /* subjectDescending */]);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterPassages", (passages, filterType, filter) => {
      switch (filterType) {
        case 'difficulty':
        case 'type':
          return passages.reduce((finalArr, passage) => {
            passage.problems.map(problem => {
              if (filter.indexOf(problem[filterType]) !== -1 && finalArr.indexOf(passage) === -1) {
                finalArr.push(passage);
              }
            });
            return finalArr;
          }, []);

        case 'topic':
          return passages.reduce((finalArr, passage) => {
            passage.problems.map(problem => {
              if (problem.topics.indexOf(filter) !== -1 && finalArr.indexOf(passage) === -1) {
                finalArr.push(passage);
              }
            });
            return finalArr;
          }, []);

        case 'workbook':
          return passages.reduce((finalArr, passage) => {
            passage.problems.map(problem => {
              if (filter.indexOf(workbookMap[problem.inWorkbook]) !== -1 && finalArr.indexOf(passage) === -1) {
                finalArr.push(passage);
              }
            });
            return finalArr;
          }, []);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterProblemsOrPassages", type => {
      const {
        subjectFilters,
        difficultyFilters,
        typeFilters,
        workbookFilters,
        topicFilter,
        problems: allProblems,
        passages: allPassages
      } = this.state;
      let problemsOrPassages;

      if (type === 'problems') {
        problemsOrPassages = allProblems;
      } else {
        problemsOrPassages = allPassages;
      }

      if (subjectFilters.length) {
        problemsOrPassages = problemsOrPassages.filter(problemOrPassage => subjectFilters.indexOf(problemOrPassage.subject) !== -1);
      }

      if (difficultyFilters.length) {
        if (type === 'problems') {
          problemsOrPassages = problemsOrPassages.filter(problem => difficultyFilters.indexOf(problem.difficulty) !== -1);
        } else {
          problemsOrPassages = this.onFilterPassages(problemsOrPassages, 'difficulty', difficultyFilters);
        }
      }

      if (typeFilters.length) {
        if (type === 'problems') {
          problemsOrPassages = problemsOrPassages.filter(problem => typeFilters.indexOf(problem.type) !== -1);
        } else {
          problemsOrPassages = this.onFilterPassages(problemsOrPassages, 'type', typeFilters);
        }
      }

      if (workbookFilters.length) {
        if (type === 'problems') {
          problemsOrPassages = problemsOrPassages.filter(problem => workbookFilters.indexOf(workbookMap[problem.inWorkbook]) !== -1);
        } else {
          problemsOrPassages = this.onFilterPassages(problemsOrPassages, 'workbook', workbookFilters);
        }
      }

      if (topicFilter.length) {
        if (type === 'problems') {
          problemsOrPassages = problemsOrPassages.filter(problem => problem.topics.indexOf(topicFilter) !== -1);
        } else {
          problemsOrPassages = this.onFilterPassages(problemsOrPassages, 'topic', topicFilter);
        }
      }

      return problemsOrPassages;
    });

    Object(defineProperty["a" /* default */])(this, "onAddSelectedProblems", addTime => {
      const {
        selectedProblems,
        selectedPassages
      } = this.state;
      const {
        addSelectedProblems
      } = this.props;
      addSelectedProblems(selectedProblems, selectedPassages, addTime);
      this.setState({
        selectedPassages: [],
        selectedProblems: [],
        addProblemsDropdownOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(this, "getMappableProblemsOrPassages", type => {
      const {
        subjectFilters,
        difficultyFilters,
        typeFilters,
        workbookFilters,
        topicFilter,
        sort,
        problems: allProblems,
        passages: allPassages
      } = this.state;
      let problemsOrPassages;

      if (type === 'problems') {
        problemsOrPassages = allProblems;
      } else {
        problemsOrPassages = allPassages;
      }

      if (topicFilter.length || subjectFilters.length || difficultyFilters.length || typeFilters.length || workbookFilters.length) {
        problemsOrPassages = this.onFilterProblemsOrPassages(type);
      }

      if (sort) {
        return this.onSortBySubject(problemsOrPassages);
      }

      return problemsOrPassages;
    });

    Object(defineProperty["a" /* default */])(this, "determineSort", () => {
      const {
        sort
      } = this.state;

      if (sort === '' || sort === 'descending') {
        return this.onSetAscendingSort();
      }

      return this.onSetDescendingSort();
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        subjectFilters: currentSubjectFilters,
        difficultyFilters: currentDifficultyFilters,
        typeFilters: currentTypeFilters,
        workbookFilters: currentWorkbookFilters
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'difficulty':
          modifiedFilterCurrentState = currentDifficultyFilters;
          modifiedFilterName = 'difficultyFilters';
          break;

        case 'type':
          modifiedFilterCurrentState = currentTypeFilters;
          modifiedFilterName = 'typeFilters';
          break;

        case 'workbook':
          modifiedFilterCurrentState = currentWorkbookFilters;
          modifiedFilterName = 'workbookFilters';
          break;

        default:
          break;
      }

      if (modifiedFilterCurrentState.indexOf(filter) === -1) {
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        const filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [modifiedFilterName]: modifiedFilterUpdatedState
      });
    });

    Object(defineProperty["a" /* default */])(this, "toggleSelectAllProblemsOrPassages", () => {
      const {
        openSection: type,
        problems,
        passages,
        selectedProblems: currentSelectedProblems,
        selectedPassages: currentSelectedPassages
      } = this.state;
      let clickedTypeCurrentState;
      let clickedTypeName;
      let clickedAllOfType;

      if (type === 'problems') {
        clickedTypeCurrentState = currentSelectedProblems;
        clickedTypeName = 'selectedProblems';
        clickedAllOfType = problems;
      } else {
        clickedTypeCurrentState = currentSelectedPassages;
        clickedTypeName = 'selectedPassages';
        clickedAllOfType = passages;
      }

      if (clickedTypeCurrentState.length === 0) {
        this.setState({
          [clickedTypeName]: clickedAllOfType
        });
      } else {
        this.setState({
          [clickedTypeName]: []
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "handleProblemOrPassageClick", (type, value) => {
      const {
        selectedProblems: currentSelectedProblems,
        selectedPassages: currentSelectedPassages
      } = this.state;
      let clickedTypeCurrentState;
      let clickedTypeName;

      if (type === 'problem') {
        clickedTypeCurrentState = currentSelectedProblems;
        clickedTypeName = 'selectedProblems';
      } else {
        clickedTypeCurrentState = currentSelectedPassages;
        clickedTypeName = 'selectedPassages';
      }

      let clickedTypeUpdatedState;

      if (clickedTypeCurrentState.map(selectedElement => selectedElement.id).indexOf(value.id) === -1) {
        clickedTypeUpdatedState = external_immutability_helper_default()(clickedTypeCurrentState, {
          $push: [value]
        });
      } else {
        const selectedIndex = clickedTypeCurrentState.map(selectedElement => selectedElement.id).indexOf(value.id);
        clickedTypeUpdatedState = external_immutability_helper_default()(clickedTypeCurrentState, {
          $splice: [[selectedIndex, 1]]
        });
      }

      this.setState({
        [clickedTypeName]: clickedTypeUpdatedState
      });
    });

    Object(defineProperty["a" /* default */])(this, "mapProblems", () => this.getMappableProblemsOrPassages('problems').map(problem => {
      const {
        selectedProblems
      } = this.state;
      const selected = selectedProblems.map(selectedProblem => selectedProblem.id).indexOf(problem.id) !== -1;
      return ProblemBank_jsx("div", {
        className: selected ? "card list-table-row list-row-added" : "card list-table-row"
      }, ProblemBank_jsx("div", {
        className: "list-table-cell checkbox-cell"
      }, ProblemBank_jsx("label", null, ProblemBank_jsx("input", {
        type: "checkbox",
        className: "filled-in",
        name: "check_01",
        checked: selectedProblems.map(selectedProblem => selectedProblem.id).indexOf(problem.id) !== -1,
        onChange: () => this.handleProblemOrPassageClick('problem', problem)
      }), ProblemBank_jsx("span", null, "\xA0"))), ProblemBank_jsx("div", {
        className: "list-table-cell subject-cell"
      }, ProblemBank_jsx("span", null, subjectMap[problem.subject])), ProblemBank_jsx("div", {
        className: "list-table-cell info-cell"
      }, ProblemBank_jsx("span", null, difficultyMap[problem.difficulty])), ProblemBank_jsx("div", {
        className: "list-table-cell type-cell"
      }, ProblemBank_jsx("span", null, typeMap[problem.type])), ProblemBank_jsx("div", {
        className: "list-table-cell in-cell"
      }, problem.inWorkbook ? 'Yes' : 'No'), ProblemBank_jsx("div", {
        className: "list-table-cell topic-cell"
      }, problem.topics.map(topic => ProblemBank_jsx("span", {
        className: "chip",
        id: topic
      }, topicMap[topic]))), ProblemBank_jsx("div", {
        className: "list-table-cell view-cell"
      }, ProblemBank_jsx("a", {
        href: "#"
      }, ProblemBank_jsx("i", {
        className: "icon-eye"
      }))), ProblemBank_jsx("div", {
        className: "list-table-cell drop-cell"
      }, ProblemBank_jsx("a", {
        href: "#"
      }, ProblemBank_jsx("i", {
        className: "icon-plus-circle"
      }))));
    }));

    Object(defineProperty["a" /* default */])(this, "mapPassages", () => this.getMappableProblemsOrPassages('passages').map(passage => {
      const {
        selectedPassages
      } = this.state;
      const selected = selectedPassages.map(selectedPassage => selectedPassage.id).indexOf(passage.id) !== -1;
      return ProblemBank_jsx("div", {
        className: "list-view-section"
      }, ProblemBank_jsx("div", {
        className: selected ? "list-table detail-table list-table-added" : "list-table detail-table"
      }, ProblemBank_jsx(components_TableHeader, {
        sortBySubject: this.determineSort
      }), ProblemBank_jsx("div", {
        className: "list-table-body"
      }, ProblemBank_jsx("div", {
        className: "combined-holder"
      }, ProblemBank_jsx("div", {
        className: "combined-header"
      }, ProblemBank_jsx("div", {
        className: "list-table-row"
      }, ProblemBank_jsx("div", {
        className: "list-table-cell checkbox-cell"
      }, ProblemBank_jsx("div", {
        className: "checkbox-block"
      }, ProblemBank_jsx("label", null, ProblemBank_jsx("input", {
        type: "checkbox",
        className: "filled-in",
        checked: selectedPassages.map(selectedPassage => selectedPassage.id).indexOf(passage.id) !== -1,
        onChange: () => this.handleProblemOrPassageClick('passage', passage)
      }), ProblemBank_jsx("span", null, "\xA0")))), ProblemBank_jsx("div", {
        className: "list-table-cell subject-cell"
      }, ProblemBank_jsx("div", {
        className: "filter-name"
      }, subjectMap[passage.subject])), ProblemBank_jsx("div", {
        className: "list-table-cell combined-title-cell"
      }, ProblemBank_jsx("div", {
        className: "combined-title"
      }, passage.title)), ProblemBank_jsx("div", {
        className: "list-table-cell view-cell"
      }, ProblemBank_jsx("a", {
        href: "#"
      }, ProblemBank_jsx("i", {
        className: "custom-icon-triangle-right"
      }))), ProblemBank_jsx("div", {
        className: "list-table-cell drop-cell"
      }, ProblemBank_jsx("a", {
        href: "#"
      }, ProblemBank_jsx("i", {
        className: "icon-plus-circle"
      }))))), ProblemBank_jsx("div", {
        className: "collection"
      }, passage.problems.map(problem => ProblemBank_jsx("div", {
        className: "collection-item list-table-row",
        id: problem.id
      }, ProblemBank_jsx("div", {
        className: "list-table-cell checkbox-cell"
      }, ProblemBank_jsx("span", null, "\xA0")), ProblemBank_jsx("div", {
        className: "list-table-cell subject-cell"
      }, ProblemBank_jsx("span", null, subjectMap[problem.subject])), ProblemBank_jsx("div", {
        className: "list-table-cell info-cell"
      }, ProblemBank_jsx("span", null, difficultyMap[problem.difficulty])), ProblemBank_jsx("div", {
        className: "list-table-cell type-cell"
      }, ProblemBank_jsx("span", null, typeMap[problem.type])), ProblemBank_jsx("div", {
        className: "list-table-cell in-cell"
      }, problem.inWorkbook ? 'Yes' : 'No'), ProblemBank_jsx("div", {
        className: "list-table-cell topic-cell"
      }, problem.topics.map(topic => ProblemBank_jsx("span", {
        className: "chip",
        id: topic
      }, topicMap[topic]))), ProblemBank_jsx("div", {
        className: "list-table-cell view-cell"
      }, ProblemBank_jsx("a", {
        href: "#"
      }, ProblemBank_jsx("i", {
        className: "icon-eye"
      }))), ProblemBank_jsx("div", {
        className: "list-table-cell drop-cell"
      }, ProblemBank_jsx("span", null, "\xA0")))))))));
    }));

    this.state = {
      addProblemsDropdownOpen: false,
      openSection: 'problems',
      topicFilter: '',
      subjectFilters: [],
      difficultyFilters: [],
      typeFilters: [],
      workbookFilters: [],
      sort: '',
      selectedProblems: [],
      selectedPassages: [],
      problems: [],
      passages: [],
      worksheetId: null
    };
  }

  componentDidMount() {
    const {
      problems,
      passages,
      worksheetId
    } = this.props; // eslint-disable-next-line react/no-did-mount-set-state

    this.setState({
      problems,
      passages,
      worksheetId
    });
  }

  render() {
    const {
      open,
      onClose,
      problems
    } = this.props;
    const {
      openSection,
      subjectFilters,
      difficultyFilters,
      typeFilters,
      workbookFilters,
      addProblemsDropdownOpen
    } = this.state;
    return ProblemBank_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "wrapper"
    }, ProblemBank_jsx("div", {
      id: "modal_add_problem",
      style: {
        zIndex: '1003'
      },
      className: "jsx-837324748" + " " + "modal-page modal modal-custom"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "card-modal grey lighten-3"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "header-modal-box card-panel light-blue lighten-1 white-text"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "header-flex-row row mb-0"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "col s12 m4 l5"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "header-holder"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "header-col"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "icon-col"
    }, ProblemBank_jsx("i", {
      className: "jsx-837324748" + " " + "icon-search"
    }))), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "header-col"
    }, ProblemBank_jsx("nav", {
      className: "jsx-837324748" + " " + "breadcrumb-header"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "nav-wrapper "
    }, ProblemBank_jsx("a", {
      href: "#!",
      className: "jsx-837324748" + " " + "breadcrumb modal-close"
    }, "< Custom Worksheet"))), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "card-panel-text"
    }, ProblemBank_jsx("h1", {
      className: "jsx-837324748" + " " + "text-large"
    }, "Problem Bank"))))), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "card-panel-description col s8 m3 l2"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "card-panel-text"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "col-row"
    }, ProblemBank_jsx("span", {
      className: "jsx-837324748" + " " + "value"
    }, problems.length), ProblemBank_jsx("span", {
      className: "jsx-837324748" + " " + "value-text"
    }, "worksheet ", ProblemBank_jsx("br", {
      className: "jsx-837324748"
    }), "problems")))), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "col s2 m1 right-align position-mobile-right"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "close-block"
    }, ProblemBank_jsx("a", {
      href: "#",
      onClick: onClose,
      className: "jsx-837324748" + " " + "modal-close close"
    }, ProblemBank_jsx("i", {
      className: "jsx-837324748" + " " + "icon-close-thin"
    }))))), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "tabs-switcher-holder card-panel-row"
    }, ProblemBank_jsx("ul", {
      className: "jsx-837324748" + " " + "tabs"
    }, ProblemBank_jsx("li", {
      style: {
        borderBottom: openSection === 'problems' ? '2px solid white' : ''
      },
      className: "jsx-837324748" + " " + "tab col s3"
    }, ProblemBank_jsx("a", {
      href: "#",
      onClick: () => this.onChangeOpenSection('problems'),
      className: "jsx-837324748" + " " + ((openSection === 'problems' ? 'active' : '') || "")
    }, ProblemBank_jsx("b", {
      className: "jsx-837324748"
    }, "Problems"))), ProblemBank_jsx("li", {
      style: {
        borderBottom: openSection === 'passages' ? '2px solid white' : ''
      },
      className: "jsx-837324748" + " " + "tab col s3"
    }, ProblemBank_jsx("a", {
      href: "#",
      onClick: () => this.onChangeOpenSection('passages'),
      className: "jsx-837324748" + " " + ((openSection === 'passages' ? 'active' : '') || "")
    }, ProblemBank_jsx("b", {
      className: "jsx-837324748"
    }, "Passages")))))), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "tabs-content"
    }, ProblemBank_jsx(components_FilterSection, {
      onSetFilteredTopicState: this.onSetFilteredTopicState,
      onClearFilters: this.onClearFilters,
      sortBySubject: this.determineSort,
      toggleSelectAllProblemsOrPassages: this.toggleSelectAllProblemsOrPassages,
      handleFilterClick: this.handleFilterClick,
      subjectFilters: subjectFilters,
      difficultyFilters: difficultyFilters,
      typeFilters: typeFilters,
      workbookFilters: workbookFilters
    }), openSection === 'problems' ? ProblemBank_jsx("div", {
      id: "tab_problems",
      className: "jsx-837324748" + " " + "tab-content active"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "content-section content-section-80"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "container-lg"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "result-row center-align"
    }, ProblemBank_jsx("b", {
      className: "jsx-837324748" + " " + "result"
    }, "- ", this.getMappableProblemsOrPassages('problems').length, " matches -")), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "list-view-section"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "list-table detail-table"
    }, ProblemBank_jsx(components_TableHeader, {
      sortBySubject: this.determineSort
    }), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "list-table-body"
    }, this.mapProblems())))))) : ProblemBank_jsx("div", {
      id: "tab_passages",
      className: "jsx-837324748" + " " + "tab-content active"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "content-section content-section-80"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "container-lg"
    }, ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "result-row center-align"
    }, ProblemBank_jsx("b", {
      className: "jsx-837324748" + " " + "result"
    }, "- ", this.getMappableProblemsOrPassages('passages').length, " matches -")), this.mapPassages()))), ProblemBank_jsx("div", {
      className: "jsx-837324748" + " " + "add-btn-block"
    }, ProblemBank_jsx("a", {
      href: "#",
      "data-target": "dropdown_assign_selected_passeges",
      onClick: this.onToggleAddProblemDropdown,
      className: "jsx-837324748" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, ProblemBank_jsx("i", {
      className: "jsx-837324748" + " " + "material-icons"
    }, "add"), "Add Selected Problems"), ProblemBank_jsx("ul", {
      id: "dropdown_assign_selected_passeges",
      style: {
        display: addProblemsDropdownOpen ? 'block' : '0',
        opacity: addProblemsDropdownOpen ? '1' : '0'
      },
      className: "jsx-837324748" + " " + 'dropdown-content'
    }, ProblemBank_jsx("li", {
      className: "jsx-837324748"
    }, ProblemBank_jsx("a", {
      href: "#",
      onClick: () => this.onAddSelectedProblems('today'),
      className: "jsx-837324748"
    }, "For Today")), ProblemBank_jsx("li", {
      className: "jsx-837324748"
    }, ProblemBank_jsx("a", {
      href: "#",
      onClick: () => this.onAddSelectedProblems('tomorrow'),
      className: "jsx-837324748"
    }, "For Tomorrow")), ProblemBank_jsx("li", {
      className: "jsx-837324748"
    }, ProblemBank_jsx("a", {
      href: "#",
      onClick: () => this.onAddSelectedProblems('nextSession'),
      className: "jsx-837324748"
    }, "For Next Session")), ProblemBank_jsx("li", {
      className: "jsx-837324748"
    }, ProblemBank_jsx("a", {
      href: "#",
      onClick: () => this.onAddSelectedProblems('date'),
      className: "jsx-837324748"
    }, "For Date...")))))))), ProblemBank_jsx(style_default.a, {
      id: "837324748"
    }, [".card-modal.jsx-837324748{margin:0;border-radius:6px;}", ".wrapper.jsx-837324748{min-height:0px;}", ".modal-custom.jsx-837324748{opacity:1;visibility:visible;}", ".modal-footer.jsx-837324748{background-color:white;}"]));
  }

}

/* harmony default export */ var components_ProblemBank = (ProblemBank_ProblemBank);
// CONCATENATED MODULE: ./components/Worksheet/DetailPage/index.js

var DetailPage_jsx = external_react_default.a.createElement;

// import update from 'immutability-helper';





class DetailPage_DetailPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleProblemBankModal", () => this.setState(({
      problemBankOpen
    }) => ({
      problemBankOpen: !problemBankOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onRemoveAllProblems", () => this.setState({
      problems: [],
      passages: []
    }));

    Object(defineProperty["a" /* default */])(this, "addSelectedProblems", (incomingProblems, incomingPassages, addTime) => {
      // const problems = update(this.state.problems, {
      //   $push: [...incomingProblems],
      // });
      // const passages = update(this.state.passages, {
      //   $push: [...incomingPassages],
      // });
      console.warn('Likely pending wiring up via api call', incomingPassages, incomingProblems);
      console.warn('What are we doing with addTime?', addTime);
      this.onToggleProblemBankModal(); // this.setState({ problems, passages }, this.onToggleProblemBankModal);
    });

    this.state = {
      problemBankOpen: false // problems: sampleProblems,
      // passages: samplePassages,

    };
  }

  render() {
    const {
      problemBankOpen
    } = this.state;
    const {
      worksheet,
      onSetActiveWorksheet
    } = this.props;
    return DetailPage_jsx("div", {
      className: "main-container"
    }, DetailPage_jsx("div", {
      className: "container"
    }, DetailPage_jsx("div", {
      className: "main-row row"
    }, DetailPage_jsx(components_ProblemBank, {
      open: problemBankOpen,
      worksheetId: worksheet.id,
      problems: worksheet.problems,
      passages: worksheet.passages,
      onClose: this.onToggleProblemBankModal,
      addSelectedProblems: this.addSelectedProblems
    }), DetailPage_jsx(components_WorksheetProblems, {
      onOpenProblemBankModal: this.onToggleProblemBankModal,
      onRemoveAllProblems: this.onRemoveAllProblems,
      problems: worksheet.problems,
      passages: worksheet.passages
    }), DetailPage_jsx(components_WorksheetDetails, {
      worksheet: worksheet,
      defaultCategories: getDefaultCategories(worksheet.classifications, worksheet.subject)
    })), DetailPage_jsx("div", {
      className: "row"
    }, DetailPage_jsx("div", {
      className: "col s12"
    }, DetailPage_jsx("div", {
      className: "btn-holder right-align"
    }, DetailPage_jsx("a", {
      href: "#",
      className: "waves-effect waves-teal btn-flat pink-text text-darken-1",
      onClick: () => onSetActiveWorksheet(null)
    }, "Cancel"), DetailPage_jsx("a", {
      href: "#",
      className: "btn waves-effect waves-light bg-blue"
    }, "Save Worksheet"))))));
  }

}

/* harmony default export */ var Worksheet_DetailPage = (DetailPage_DetailPage);
// EXTERNAL MODULE: ./utils/worksheetSortOptions.js
var worksheetSortOptions = __webpack_require__("6C9T");

// CONCATENATED MODULE: ./components/Worksheet/ListPage/components/FilterSection/index.js

var components_FilterSection_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */







class components_FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      topic: ''
    }, this.props.onClearFilters));

    Object(defineProperty["a" /* default */])(this, "handleFilterChange", (event, name) => {
      const {
        onSetFilteredTopicState,
        onUnsetFilteredTopicState,
        onSetSort
      } = this.props;
      const value = event.target ? event.target.value : event;
      const updatedState = external_immutability_helper_default()(this.state, {
        $merge: {
          [name]: value
        }
      });
      this.setState(updatedState);

      if (name === 'topic') {
        if (event === '') {
          return onUnsetFilteredTopicState();
        }

        return onSetFilteredTopicState(event);
      } else if (name === 'sort') {
        return onSetSort(event);
      }
    });

    Object(defineProperty["a" /* default */])(this, "submitNameFilter", () => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;
      const {
        worksheetName
      } = this.state;

      if (worksheetName === '') {
        onUnsetFilteredState();
      }

      const transformedName = worksheetName.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    this.state = {
      open: false,
      worksheetName: '',
      topic: '',
      sort: {}
    };
  }

  render() {
    const {
      open,
      worksheetName,
      topic,
      sort
    } = this.state;
    const {
      currentView,
      onChangeView,
      handleFilterClick,
      subjectFilters,
      difficultyFilters,
      typeFilters,
      sourceFilters
    } = this.props;
    return components_FilterSection_jsx("div", {
      className: "filter-form-holder"
    }, components_FilterSection_jsx("ul", {
      className: "collapsible expandable"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, components_FilterSection_jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      name: "reading",
      id: "reading",
      checked: subjectFilters.indexOf('reading') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "reading"
    }, "Reading")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      name: "writing",
      id: "writing",
      checked: subjectFilters.indexOf('writing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "writing"
    }, "Writing")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      name: "math",
      id: "math",
      checked: subjectFilters.indexOf('math') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "math"
    }, "Math")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      name: "mixedSubject",
      id: "mixedSubject",
      checked: subjectFilters.indexOf('mixedSubject') !== -1,
      onChange: () => handleFilterClick('subject', 'mixedSubject')
    }), components_FilterSection_jsx("label", {
      htmlFor: "mixedSubject"
    }, "Mixed"))), components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      name: "basic",
      id: "basic",
      checked: difficultyFilters.indexOf('basic') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "basic"
    }, "Basic")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      name: "medium",
      id: "medium",
      checked: difficultyFilters.indexOf('medium') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "medium"
    }, "Medium")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      name: "advanced",
      id: "advanced",
      checked: difficultyFilters.indexOf('advanced') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "advanced"
    }, "Advanced")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      name: "mixedDifficulty",
      id: "mixedDifficulty",
      checked: difficultyFilters.indexOf('mixedDifficulty') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "mixedDifficulty"
    }, "Mixed"))), components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "skillBuilders",
      name: "skillBuilders",
      checked: typeFilters.indexOf('skillBuilders') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "skillBuilders"
    }, "Skill Builders")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "satPractice",
      name: "satPractice",
      checked: typeFilters.indexOf('satPractice') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "satPractice"
    }, "SAT Practice")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "mixedType",
      name: "mixedType",
      checked: typeFilters.indexOf('mixedType') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "mixedType"
    }, "Mixed"))), components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "builtIn",
      name: "builtIn",
      checked: sourceFilters.indexOf('builtIn') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('source', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "builtIn"
    }, "Built-In")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "userCreated",
      name: "userCreated",
      checked: sourceFilters.indexOf('userCreated') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('source', target.name)
    }), components_FilterSection_jsx("label", {
      htmlFor: "userCreated"
    }, "User Created")))), components_FilterSection_jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, components_FilterSection_jsx("div", {
      className: "col s12 m3"
    }, components_FilterSection_jsx("div", {
      className: "search-field input-field"
    }, components_FilterSection_jsx("input", {
      type: "search",
      id: "name_search",
      value: worksheetName,
      className: "input-control validate",
      onChange: event => this.handleFilterChange(event, 'worksheetName')
    }), components_FilterSection_jsx("button", {
      type: "submit",
      className: "search-button",
      onClick: this.submitNameFilter
    }, components_FilterSection_jsx("i", {
      className: "icon-search"
    })), components_FilterSection_jsx("label", {
      className: worksheetName.length ? 'label active' : 'label',
      htmlFor: "name_search"
    }, "Search"))), components_FilterSection_jsx("div", {
      className: "col s12 m3"
    }, components_FilterSection_jsx("div", {
      className: "input-field"
    }, components_FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(topic, sampleTopics["a" /* default */]),
      onChange: event => this.handleFilterChange(event, 'topic'),
      options: sampleTopics["a" /* default */],
      label: "Topic",
      stateKey: "topic",
      dropdownKey: "topic"
    }))))), components_FilterSection_jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, components_FilterSection_jsx("div", {
      className: "col s12 l4"
    }, components_FilterSection_jsx("div", {
      className: "row mb-0"
    }, components_FilterSection_jsx("div", {
      className: "col s12 xl7"
    }, components_FilterSection_jsx("div", {
      className: "input-field"
    }, components_FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, worksheetSortOptions["a" /* default */]),
      onChange: event => this.handleFilterChange(event, 'sort'),
      options: worksheetSortOptions["a" /* default */],
      label: "Sort By",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), components_FilterSection_jsx("div", {
      className: "switcher-block col s12 l4"
    }, components_FilterSection_jsx("div", {
      className: "view-switcher"
    }, components_FilterSection_jsx("ul", {
      className: "switcher center-align"
    }, components_FilterSection_jsx("li", {
      "data-view": "view-full",
      className: currentView === 'full' ? 'active' : '',
      onClick: () => onChangeView('full')
    }, components_FilterSection_jsx("a", {
      href: "#"
    }, "Full View")), components_FilterSection_jsx("li", {
      "data-view": "view-list",
      className: currentView === 'list' ? 'active' : '',
      onClick: () => onChangeView('list')
    }, components_FilterSection_jsx("a", {
      href: "#"
    }, "List View"))))), components_FilterSection_jsx("div", {
      className: "col s12 l4"
    }, components_FilterSection_jsx("div", {
      className: "option-filters"
    }, components_FilterSection_jsx("div", {
      className: "option-item clear"
    }, components_FilterSection_jsx("a", {
      href: "#",
      onClick: this.onClearFilters
    }, "Clear Filters")), components_FilterSection_jsx("div", {
      className: "option-item"
    }, components_FilterSection_jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, components_FilterSection_jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ var ListPage_components_FilterSection = (components_FilterSection_FilterSection);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// EXTERNAL MODULE: ./utils/formatTimeEstimate.js
var formatTimeEstimate = __webpack_require__("+FjG");

// CONCATENATED MODULE: ./components/Worksheet/ListPage/components/FullView/index.js

var FullView_jsx = external_react_default.a.createElement;





class FullView_FullView extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "handleDropdownClick", (event, index) => {
      const {
        dropdownIsOpen
      } = this.state;
      event.preventDefault();

      if (dropdownIsOpen) {
        return this.onCloseDropdown();
      }

      return this.onSetDropdown(index);
    });

    Object(defineProperty["a" /* default */])(this, "mapWorksheetCards", () => {
      const {
        worksheets,
        onSetActiveWorksheet
      } = this.props;
      const {
        dropdownIndex,
        dropdownIsOpen
      } = this.state;
      return worksheets.map((worksheet, index) => {
        const {
          timeEstimate,
          subject,
          difficulty,
          problems,
          completedProblems,
          problemType,
          worksheetName,
          worksheetSource,
          classifications
        } = worksheet;
        const completedPercentage = Number(completedProblems / problems.length) * 100;
        return FullView_jsx("div", {
          className: "card-main-col col s12 m8 l7 xl5",
          key: worksheet.id
        }, FullView_jsx("div", {
          className: "card-main work-card card"
        }, FullView_jsx("div", {
          className: "card-panel panel-border"
        }, FullView_jsx("div", {
          className: "card-panel-row row"
        }, FullView_jsx("div", {
          className: "icon-col col s2"
        }, FullView_jsx("span", {
          className: "block-icon"
        }, FullView_jsx("i", {
          className: "icon-sheets-w"
        }))), FullView_jsx("div", {
          className: "col s8"
        }, FullView_jsx("div", {
          className: "card-panel-text"
        }, FullView_jsx("div", {
          className: "text-small truncate"
        }, "Worksheet (", subject, ")"), FullView_jsx("div", {
          className: "text-large truncate"
        }, worksheetName))), FullView_jsx("div", {
          className: "position-top right-align"
        }, FullView_jsx("div", {
          className: "icons-row"
        }, FullView_jsx("div", {
          className: "dropdown-block col"
        }, FullView_jsx("a", {
          href: "#",
          "data-target": "dropdown01",
          className: "dropdown-trigger btn",
          onClick: event => this.handleDropdownClick(event, index)
        }, FullView_jsx("i", {
          className: "material-icons dots-icon"
        }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? FullView_jsx("ul", {
          id: "dropdown01",
          className: "dropdown-content dropdown-wide",
          style: {
            display: 'block',
            opacity: '1',
            transform: 'scaleX(1) scaleY(1)'
          }
        }, FullView_jsx("li", null, FullView_jsx("a", {
          href: "#",
          className: "modal-trigger link-block",
          onClick: () => onSetActiveWorksheet(worksheet)
        }, "Edit")), FullView_jsx("li", null, FullView_jsx("a", {
          href: "#!"
        }, "Clone")), FullView_jsx("li", null, FullView_jsx("a", {
          href: "#!",
          className: "link-delete"
        }, "Delete"))) : null)))), FullView_jsx("div", {
          className: "card-top-block"
        }, FullView_jsx("div", {
          className: "d-flex row mb-0"
        }, FullView_jsx("div", {
          className: "left-col col s7"
        }, FullView_jsx("dl", {
          className: "dl-horizontal"
        }, FullView_jsx("dt", null, "Problem Type:"), FullView_jsx("dd", null, problemType))), FullView_jsx("div", {
          className: "right-col col s5 right-align"
        }, FullView_jsx("dl", {
          className: "dl-horizontal"
        }, FullView_jsx("dt", null, "Di\uFB03culty:"), FullView_jsx("dd", null, difficulty)))))), FullView_jsx("div", {
          className: "card-content"
        }, FullView_jsx("div", {
          className: "d-flex sameheight-all row mb-0"
        }, FullView_jsx("div", {
          className: "col s12"
        }, FullView_jsx("div", {
          className: "chart-container"
        }, FullView_jsx("div", {
          className: "chart-holder"
        }, FullView_jsx(external_react_chartjs_2_["Doughnut"], {
          data: () => data(completedPercentage),
          options: {
            circumference: 1 * Math.PI,
            rotation: 1 * Math.PI,
            cutoutPercentage: 60,
            tooltips: false
          }
        }), FullView_jsx("span", {
          className: "chart-value",
          style: {
            backgroundColor: '#333'
          }
        }, FullView_jsx("span", {
          "data-count-up": true,
          "data-start-val": "0",
          "data-end-val": "0",
          "data-duration": "1"
        }), FullView_jsx("span", {
          className: "percentage"
        }, "%"))), FullView_jsx("div", {
          className: "chart-row"
        }, FullView_jsx("div", {
          className: "chart-col chart-start"
        }, "\xA0"), FullView_jsx("div", {
          className: "chart-col chart-end"
        }, FullView_jsx("span", {
          className: "amount",
          style: {
            color: 'inherit'
          }
        }, "\xA0"))), FullView_jsx("div", {
          className: "chart-description"
        }, FullView_jsx("dl", {
          className: "dl-horizontal"
        }, FullView_jsx("dt", null, "Time Est:"), FullView_jsx("dd", null, Object(formatTimeEstimate["a" /* default */])(timeEstimate))), FullView_jsx("dl", {
          className: "dl-horizontal"
        }, FullView_jsx("dt", null, "Problems:"), FullView_jsx("dd", null, problems.length)))))), FullView_jsx("div", {
          className: "card-text"
        }, FullView_jsx("dl", {
          className: "dl-horizontal"
        }, FullView_jsx("dt", null, "Worksheet Source:"), FullView_jsx("dd", null, worksheetSource))), FullView_jsx("div", {
          className: "card-inner-row"
        }, FullView_jsx("div", {
          className: "row-holder"
        }, FullView_jsx("ul", {
          className: "classification-list"
        }, classifications.map(classification => FullView_jsx("li", {
          className: "class-box",
          key: classification
        }, classification))))))));
      });
    });

    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null
    };
  }

  render() {
    const {
      worksheets
    } = this.props;
    return FullView_jsx("div", {
      className: "content-section"
    }, FullView_jsx("div", {
      className: "result-row center-align"
    }, FullView_jsx("b", {
      className: "result"
    }, " - ", worksheets.length, " results -")), FullView_jsx("div", {
      className: "row d-flex-content card-width-272"
    }, this.mapWorksheetCards()));
  }

}

/* harmony default export */ var components_FullView = (FullView_FullView);
// CONCATENATED MODULE: ./components/Worksheet/ListPage/components/ListView/index.js

var ListView_jsx = external_react_default.a.createElement;



class ListView_ListView extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "handleDropdownClick", (event, index) => {
      const {
        dropdownIsOpen
      } = this.state;
      event.preventDefault();

      if (dropdownIsOpen) {
        return this.onCloseDropdown();
      }

      return this.onSetDropdown(index);
    });

    Object(defineProperty["a" /* default */])(this, "mapWorksheetRows", () => {
      const {
        worksheets,
        onSetActiveWorksheet
      } = this.props;
      const {
        dropdownIndex,
        dropdownIsOpen
      } = this.state;
      return worksheets.map((worksheet, index) => {
        const {
          worksheetSource,
          worksheetName,
          problems,
          timeEstimate
        } = worksheet;
        return ListView_jsx("div", {
          className: "card list-table-row",
          key: worksheet.id
        }, ListView_jsx("div", {
          className: "list-table-cell icon-cell"
        }, ListView_jsx("span", {
          className: "block-icon"
        }, ListView_jsx("i", {
          className: "icon-sheets-w"
        }))), ListView_jsx("div", {
          className: "list-table-cell name-cell"
        }, ListView_jsx("div", {
          className: "card-panel-text truncate"
        }, ListView_jsx("div", {
          className: "text-large truncate"
        }, worksheetName))), ListView_jsx("div", {
          className: "list-table-cell description-cell"
        }, problems.length), ListView_jsx("div", {
          className: "list-table-cell time-cell"
        }, Object(formatTimeEstimate["a" /* default */])(timeEstimate)), ListView_jsx("div", {
          className: "list-table-cell completed-cell"
        }, worksheetSource), ListView_jsx("div", {
          className: "list-table-cell empty-cell"
        }, ListView_jsx("b", null, "\xA0")), ListView_jsx("div", {
          className: "list-table-cell drop-cell"
        }, ListView_jsx("div", {
          className: "dropdown-block"
        }, ListView_jsx("a", {
          href: "#",
          "data-target": "dropdown01",
          className: "dropdown-trigger btn",
          onClick: event => this.handleDropdownClick(event, index)
        }, ListView_jsx("i", {
          className: "material-icons dots-icon"
        }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? ListView_jsx("ul", {
          id: "dropdown01",
          className: "dropdown-content dropdown-wide",
          style: {
            display: 'block',
            opacity: '1',
            transform: 'scaleX(1) scaleY(1)'
          }
        }, ListView_jsx("li", null, ListView_jsx("a", {
          href: "#",
          className: "modal-trigger link-block",
          onClick: () => onSetActiveWorksheet(worksheet)
        }, "Edit")), ListView_jsx("li", null, ListView_jsx("a", {
          href: "#"
        }, "Clone")), ListView_jsx("li", null, ListView_jsx("a", {
          href: "#",
          className: "link-delete"
        }, "Delete"))) : null)));
      });
    });

    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null
    };
  }

  render() {
    const {
      worksheets
    } = this.props;
    return ListView_jsx("div", {
      className: "content-section"
    }, ListView_jsx("div", {
      className: "container-md"
    }, ListView_jsx("div", {
      className: "result-row center-align"
    }, ListView_jsx("b", {
      className: "result"
    }, " - ", worksheets.length, " results -")), ListView_jsx("div", {
      className: "list-view-section"
    }, ListView_jsx("div", {
      className: "list-table six-columns"
    }, ListView_jsx("div", {
      className: "list-table-header"
    }, ListView_jsx("div", {
      className: "list-table-row"
    }, ListView_jsx("div", {
      className: "list-table-cell icon-cell"
    }, "\xA0"), ListView_jsx("div", {
      className: "list-table-cell name-cell"
    }, ListView_jsx("b", null, "Worksheet")), ListView_jsx("div", {
      className: "list-table-cell description-cell"
    }, ListView_jsx("b", null, "Problems")), ListView_jsx("div", {
      className: "list-table-cell time-cell"
    }, ListView_jsx("b", null, "Time Est")), ListView_jsx("div", {
      className: "list-table-cell completed-cell"
    }, ListView_jsx("b", null, "Source")), ListView_jsx("div", {
      className: "list-table-cell empty-cell"
    }, ListView_jsx("b", null, "\xA0")), ListView_jsx("div", {
      className: "list-table-cell drop-cell"
    }, "\xA0"))), ListView_jsx("div", {
      className: "list-table-body"
    }, this.mapWorksheetRows())))));
  }

}

/* harmony default export */ var components_ListView = (ListView_ListView);
// CONCATENATED MODULE: ./components/Worksheet/utils/sampleWorksheets.js
/* harmony default export */ var sampleWorksheets = ([{
  id: 1,
  worksheetName: 'Some SAT Problems about Triangles',
  subject: 'Math',
  score: '',
  description: 'test description',
  problemType: 'Skill Builders',
  difficulty: 'Basic',
  timeEstimate: '14',
  assignDate: '1/27/19',
  assignTime: '3:01 PM',
  availableDate: '1/27/19',
  dueDate: '2/10/19',
  dueTime: '9:32 AM',
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: 3,
  completionLevel: 'Complete',
  unit: 'Reading Unit #4',
  passage: '214',
  type: 'challenge + practice',
  flags: [],
  status: 'Assigned',
  disabled: true,
  late: false,
  topic: 'trigonometry',
  worksheetSource: 'Built-In',
  classifications: ['Special Right Triangles', 'Volumes'],
  totalVideoMinutesWatched: '77',
  totalVideoMinutesAllMissedProblems: '214',
  passages: [{
    id: 1,
    subject: 'reading',
    title: 'Passage Title 1',
    problems: [{
      id: 1,
      subject: 'math',
      difficulty: 'easy',
      type: 'skillBuilder',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }, {
      id: 3,
      subject: 'reading',
      difficulty: 'hard',
      type: 'satPractice',
      inWorkbook: false,
      disabled: true,
      topics: ['rightTriangles', 'trigonometry']
    }]
  }, {
    id: 2,
    subject: 'writing',
    title: 'Passage Title 2',
    problems: [{
      id: 2,
      subject: 'reading',
      difficulty: 'easy',
      type: 'satPractice',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }, {
      id: 4,
      subject: 'writing',
      difficulty: 'medium',
      type: 'skillBuilder',
      inWorkbook: false,
      topics: ['trigonometry']
    }]
  }, {
    id: 3,
    subject: 'math',
    title: 'Passage Title 3',
    problems: [{
      id: 5,
      subject: 'writing',
      difficulty: 'hard',
      type: 'skillBuilder',
      inWorkbook: false,
      disabled: true,
      topics: ['rightTriangles']
    }, {
      id: 6,
      subject: 'math',
      difficulty: 'medium',
      type: 'satPractice',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }]
  }],
  problems: [{
    id: 1,
    subject: 'math',
    difficulty: 'easy',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 2,
    subject: 'reading',
    difficulty: 'easy',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 3,
    subject: 'reading',
    difficulty: 'hard',
    type: 'satPractice',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 4,
    subject: 'writing',
    difficulty: 'medium',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['trigonometry']
  }, {
    id: 5,
    subject: 'writing',
    difficulty: 'hard',
    type: 'skillBuilder',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles']
  }, {
    id: 6,
    subject: 'math',
    difficulty: 'medium',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }]
}, {
  id: 2,
  worksheetName: 'Worksheet 2',
  subject: 'Reading',
  score: '',
  description: '',
  problemType: 'Skill Builders',
  difficulty: 'Basic',
  timeEstimate: '30',
  assignDate: '1/19/19',
  assignTime: '3:01 PM',
  availableDate: '1/19/19',
  dueDate: '2/02/19',
  dueTime: '9:32 AM',
  completionDate: '',
  completionTime: '',
  completedProblems: 2,
  completionLevel: 'Not Started',
  unit: 'Reading Unit #4',
  passage: '51',
  type: 'challenge + practice',
  flags: [{
    title: 'one',
    status: 'reviewed'
  }, {
    title: 'two',
    status: 'reviewed'
  }, {
    title: 'three',
    status: 'toReview'
  }],
  status: 'Assigned',
  disabled: false,
  late: true,
  topic: 'rightTriangles',
  worksheetSource: 'User Created',
  classifications: ['Math', 'More Math', "Lots Of Math"],
  totalVideoMinutesWatched: '77',
  totalVideoMinutesAllMissedProblems: '214',
  passages: [{
    id: 1,
    subject: 'reading',
    title: 'Passage Title 1',
    problems: [{
      id: 1,
      subject: 'math',
      difficulty: 'easy',
      type: 'skillBuilder',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }, {
      id: 3,
      subject: 'reading',
      difficulty: 'hard',
      type: 'satPractice',
      inWorkbook: false,
      disabled: true,
      topics: ['rightTriangles', 'trigonometry']
    }]
  }, {
    id: 2,
    subject: 'writing',
    title: 'Passage Title 2',
    problems: [{
      id: 2,
      subject: 'reading',
      difficulty: 'easy',
      type: 'satPractice',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }, {
      id: 4,
      subject: 'writing',
      difficulty: 'medium',
      type: 'skillBuilder',
      inWorkbook: false,
      topics: ['trigonometry']
    }]
  }],
  problems: [{
    id: 1,
    subject: 'math',
    difficulty: 'easy',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 2,
    subject: 'reading',
    difficulty: 'easy',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 3,
    subject: 'reading',
    difficulty: 'hard',
    type: 'satPractice',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 4,
    subject: 'writing',
    difficulty: 'medium',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['trigonometry']
  }, {
    id: 5,
    subject: 'writing',
    difficulty: 'hard',
    type: 'skillBuilder',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles']
  }, {
    id: 6,
    subject: 'math',
    difficulty: 'medium',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }]
}, {
  id: 3,
  worksheetName: 'Worksheet 3',
  subject: 'Math',
  score: '81',
  description: '',
  problemType: 'SAT Practice',
  difficulty: 'Advanced',
  timeEstimate: '24',
  assignDate: '1/11/19',
  assignTime: '3:01 PM',
  availableDate: '1/11/19',
  dueDate: '2/12/19',
  dueTime: '9:32 AM',
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: 4,
  completionLevel: 'Complete',
  unit: 'Reading Unit #4',
  passage: '121',
  type: 'challenge + practice',
  flags: [],
  status: 'Accomplished',
  disabled: false,
  late: false,
  topic: 'rightTriangles',
  worksheetSource: 'Built-In',
  classifications: ['Right Triangles', 'Math', "Lots Of Math"],
  totalVideoMinutesWatched: '124',
  totalVideoMinutesAllMissedProblems: '312',
  passages: [{
    id: 1,
    subject: 'reading',
    title: 'Passage Title 1',
    problems: [{
      id: 1,
      subject: 'math',
      difficulty: 'easy',
      type: 'skillBuilder',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }, {
      id: 3,
      subject: 'reading',
      difficulty: 'hard',
      type: 'satPractice',
      inWorkbook: false,
      disabled: true,
      topics: ['rightTriangles', 'trigonometry']
    }]
  }, {
    id: 3,
    subject: 'math',
    title: 'Passage Title 3',
    problems: [{
      id: 5,
      subject: 'writing',
      difficulty: 'hard',
      type: 'skillBuilder',
      inWorkbook: false,
      disabled: true,
      topics: ['rightTriangles']
    }, {
      id: 6,
      subject: 'math',
      difficulty: 'medium',
      type: 'satPractice',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }]
  }],
  problems: [{
    id: 1,
    subject: 'math',
    difficulty: 'easy',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 2,
    subject: 'reading',
    difficulty: 'easy',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 3,
    subject: 'reading',
    difficulty: 'hard',
    type: 'satPractice',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 4,
    subject: 'writing',
    difficulty: 'medium',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['trigonometry']
  }, {
    id: 5,
    subject: 'writing',
    difficulty: 'hard',
    type: 'skillBuilder',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles']
  }]
}, {
  id: 4,
  worksheetName: 'Worksheet 4',
  subject: 'Writing',
  score: '32',
  description: '',
  problemType: 'SAT Practice',
  difficulty: 'Mixed',
  timeEstimate: '31',
  assignDate: '1/24/19',
  assignTime: '3:01 PM',
  availableDate: '1/24/19',
  dueDate: '2/27/19',
  dueTime: '9:32 AM',
  completionDate: '',
  completionTime: '',
  completedProblems: 1,
  completionLevel: 'Started',
  unit: 'Reading Unit #4',
  passage: '128',
  type: 'challenge + practice',
  flags: [{
    title: 'one',
    status: 'reviewed'
  }, {
    title: 'two',
    status: 'reviewed'
  }, {
    title: 'three',
    status: 'toReview'
  }, {
    title: 'four',
    status: 'toReview'
  }],
  status: 'Beginning',
  disabled: false,
  late: true,
  topic: 'trigonometry',
  worksheetSource: 'User Created',
  classifications: ['Trigonometry', 'More Math', "Lots Of Math"],
  totalVideoMinutesWatched: '311',
  totalVideoMinutesAllMissedProblems: '401',
  passages: [{
    id: 2,
    subject: 'writing',
    title: 'Passage Title 2',
    problems: [{
      id: 2,
      subject: 'reading',
      difficulty: 'easy',
      type: 'satPractice',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }, {
      id: 4,
      subject: 'writing',
      difficulty: 'medium',
      type: 'skillBuilder',
      inWorkbook: false,
      topics: ['trigonometry']
    }]
  }, {
    id: 3,
    subject: 'math',
    title: 'Passage Title 3',
    problems: [{
      id: 5,
      subject: 'writing',
      difficulty: 'hard',
      type: 'skillBuilder',
      inWorkbook: false,
      disabled: true,
      topics: ['rightTriangles']
    }, {
      id: 6,
      subject: 'math',
      difficulty: 'medium',
      type: 'satPractice',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }]
  }],
  problems: [{
    id: 1,
    subject: 'math',
    difficulty: 'easy',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 2,
    subject: 'reading',
    difficulty: 'easy',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 3,
    subject: 'reading',
    difficulty: 'hard',
    type: 'satPractice',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 4,
    subject: 'writing',
    difficulty: 'medium',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['trigonometry']
  }, {
    id: 6,
    subject: 'math',
    difficulty: 'medium',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }]
}, {
  id: 5,
  worksheetName: 'Worksheet 5',
  subject: 'Reading',
  score: '93',
  description: '',
  problemType: 'Mixed',
  difficulty: 'Mixed',
  timeEstimate: '23',
  assignDate: '1/12/19',
  assignTime: '3:01 PM',
  availableDate: '1/12/19',
  dueDate: '2/03/19',
  dueTime: '9:32 AM',
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: 3,
  completionLevel: 'Instructor Editing',
  unit: 'Reading Unit #4',
  passage: '73',
  type: 'challenge + practice',
  flags: [{
    title: 'one',
    status: 'toReview'
  }, {
    title: 'two',
    status: 'toReview'
  }],
  status: 'Developing',
  disabled: false,
  late: false,
  topic: 'trigonometry',
  worksheetSource: 'Built-In',
  classifications: ['Trigonometry', 'Math', "Lots Of Math"],
  totalVideoMinutesWatched: '51',
  totalVideoMinutesAllMissedProblems: '200',
  passages: [{
    id: 1,
    subject: 'reading',
    title: 'Passage Title 1',
    problems: [{
      id: 1,
      subject: 'math',
      difficulty: 'easy',
      type: 'skillBuilder',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }, {
      id: 3,
      subject: 'reading',
      difficulty: 'hard',
      type: 'satPractice',
      inWorkbook: false,
      disabled: true,
      topics: ['rightTriangles', 'trigonometry']
    }]
  }],
  problems: [{
    id: 1,
    subject: 'math',
    difficulty: 'easy',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 2,
    subject: 'reading',
    difficulty: 'easy',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 3,
    subject: 'reading',
    difficulty: 'hard',
    type: 'satPractice',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 5,
    subject: 'writing',
    difficulty: 'hard',
    type: 'skillBuilder',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles']
  }, {
    id: 6,
    subject: 'math',
    difficulty: 'medium',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }]
}, {
  id: 6,
  worksheetName: 'Worksheet 6',
  subject: 'Writing',
  score: '64',
  description: '',
  problemType: 'Mixed',
  difficulty: 'Advanced',
  timeEstimate: '65',
  assignDate: '1/09/19',
  assignTime: '3:01 PM',
  availableDate: '1/09/19',
  dueDate: '2/12/19',
  dueTime: '9:32 AM',
  completionDate: '',
  completionTime: '',
  completedProblems: 4,
  completionLevel: 'Not Started',
  unit: 'Reading Unit #4',
  passage: '153',
  type: 'challenge + practice',
  flags: [],
  status: 'Developing',
  disabled: false,
  late: false,
  topic: 'rightTriangles',
  worksheetSource: 'User Created',
  classifications: ['Right Triangles', 'Trigonometry', 'More Math'],
  totalVideoMinutesWatched: '83',
  totalVideoMinutesAllMissedProblems: '305',
  passages: [{
    id: 3,
    subject: 'math',
    title: 'Passage Title 3',
    problems: [{
      id: 5,
      subject: 'writing',
      difficulty: 'hard',
      type: 'skillBuilder',
      inWorkbook: false,
      disabled: true,
      topics: ['rightTriangles']
    }, {
      id: 6,
      subject: 'math',
      difficulty: 'medium',
      type: 'satPractice',
      inWorkbook: false,
      topics: ['rightTriangles', 'trigonometry']
    }]
  }],
  problems: [{
    id: 1,
    subject: 'math',
    difficulty: 'easy',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 2,
    subject: 'reading',
    difficulty: 'easy',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }, {
    id: 4,
    subject: 'writing',
    difficulty: 'medium',
    type: 'skillBuilder',
    inWorkbook: false,
    topics: ['trigonometry']
  }, {
    id: 5,
    subject: 'writing',
    difficulty: 'hard',
    type: 'skillBuilder',
    inWorkbook: false,
    disabled: true,
    topics: ['rightTriangles']
  }, {
    id: 6,
    subject: 'math',
    difficulty: 'medium',
    type: 'satPractice',
    inWorkbook: false,
    topics: ['rightTriangles', 'trigonometry']
  }]
}]);
// CONCATENATED MODULE: ./components/Worksheet/utils/sortFunctions.js
const firstNameAscending = ({
  accountInfo: {
    firstName: firstNameA
  }
}, {
  accountInfo: {
    firstName: firstNameB
  }
}) => {
  if (firstNameA < firstNameB) {
    return -1;
  }

  return 0;
};
const firstNameDescending = ({
  accountInfo: {
    firstName: firstNameA
  }
}, {
  accountInfo: {
    firstName: firstNameB
  }
}) => {
  if (firstNameA > firstNameB) {
    return -1;
  }

  return 0;
};
const lastNameAscending = ({
  accountInfo: {
    lastName: lastNameA
  }
}, {
  accountInfo: {
    lastName: lastNameB
  }
}) => {
  if (lastNameA < lastNameB) {
    return -1;
  }

  return 0;
};
const lastNameDescending = ({
  accountInfo: {
    lastName: lastNameA
  }
}, {
  accountInfo: {
    lastName: lastNameB
  }
}) => {
  if (lastNameA > lastNameB) {
    return -1;
  }

  return 0;
};
const dueDate = ({
  dueDate: dueDateA
}, {
  dueDate: dueDateB
}) => {
  if (dueDateA > dueDateB) {
    return -1;
  }

  return 0;
};
const assignDate = ({
  assignDate: assignDateA
}, {
  assignDate: assignDateB
}) => {
  if (assignDateA > assignDateB) {
    return -1;
  }

  return 0;
};
const sortFunctions_problems = ({
  problems: problemsA
}, {
  problems: problemsB
}) => {
  if (problemsA > problemsB) {
    return -1;
  }

  return 0;
};
const completed = ({
  completed: completedA,
  problems: problemsA
}, {
  completed: completedB,
  problems: problemsB
}) => {
  if (completedA / problemsA > completedB / problemsB) {
    return -1;
  }

  return 0;
};
const flags = ({
  flags: flagsA
}, {
  flags: flagsB
}) => {
  if (flagsA > flagsB) {
    return -1;
  }

  return 0;
};
const score = ({
  score: scoreA
}, {
  score: scoreB
}) => {
  if (scoreA > scoreB) {
    return -1;
  }

  return 0;
};
const sortFunctions_timeEstimate = ({
  timeEstimate: timeEstimateA
}, {
  timeEstimate: timeEstimateB
}) => {
  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
const subjectAscending = ({
  subject: subjectA
}, {
  subject: subjectB
}) => {
  if (subjectA < subjectB) {
    return -1;
  }

  return 0;
};
const subjectDescending = ({
  subject: subjectA
}, {
  subject: subjectB
}) => {
  if (subjectA > subjectB) {
    return -1;
  }

  return 0;
};
// CONCATENATED MODULE: ./components/Worksheet/ListPage/index.js


var ListPage_jsx = external_react_default.a.createElement;










class ListPage_ListPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onChangeView", view => this.setState({
      currentView: view
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", filterName => this.setState({
      worksheetsAreFiltered: true,
      filterName
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", () => this.setState({
      worksheetsAreFiltered: false,
      filterName: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredTopicState", filterTopic => this.setState({
      worksheetsAreFiltered: true,
      filterTopic
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredTopicState", () => this.setState({
      filterTopic: ''
    }, this.checkForFilteredState));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      subjectFilters: [],
      difficultyFilters: [],
      typeFilters: [],
      sourceFilters: [],
      workbookFilters: [],
      topicFilter: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onAssignWorksheet", assignType => {
      console.warn('Stubbed out assign worksheet click', assignType);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByName", () => {
      const {
        worksheets,
        filterName
      } = this.state;
      return worksheets.reduce((finalArr, currentWorksheet) => {
        const {
          accountInfo: {
            lastName,
            firstName
          }
        } = currentWorksheet;
        const worksheetString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

        if (worksheetString.indexOf(filterName) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByTopic", (preFilteredWorksheets = []) => {
      const {
        worksheets: allWorksheets,
        filterTopic
      } = this.state;
      let worksheets;

      if (preFilteredWorksheets.length) {
        worksheets = preFilteredWorksheets;
      } else {
        worksheets = allWorksheets;
      }

      return worksheets.reduce((finalArr, currentWorksheet) => {
        const {
          topic
        } = currentWorksheet;

        if (topic === filterTopic && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onSortWorksheets", worksheets => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'dueDate':
          return worksheets.sort(dueDate);

        case 'assignDate':
          return worksheets.sort(assignDate);

        case 'problems':
          return worksheets.sort(sortFunctions_problems);

        case 'completed':
          return worksheets.sort(completed);

        case 'flags':
          return worksheets.sort(flags);

        case 'score':
          return worksheets.sort(score);

        case 'timeEstimate':
          return worksheets.sort(sortFunctions_timeEstimate);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterWorksheets", () => {
      const {
        subjectFilters,
        difficultyFilters,
        typeFilters,
        sourceFilters,
        worksheets: allWorksheets
      } = this.state;
      let worksheets = allWorksheets;

      if (subjectFilters.length) {
        worksheets = worksheets.filter(worksheet => subjectFilters.indexOf(worksheetSubjectMap[worksheet.subject]) !== -1);
      }

      if (typeFilters.length && typeFilters.indexOf('mixedType') === -1) {
        worksheets = worksheets.filter(worksheet => typeFilters.indexOf(worksheetTypeMap[worksheet.problemType]) !== -1);
      }

      if (sourceFilters.length) {
        worksheets = worksheets.filter(worksheet => sourceFilters.indexOf(worksheetSourceMap[worksheet.worksheetSource]) !== -1);
      }

      if (difficultyFilters.length && difficultyFilters.indexOf('mixedDifficulty') === -1) {
        worksheets = worksheets.filter(worksheet => difficultyFilters.indexOf(worksheetDifficultyMap[worksheet.difficulty]) !== -1);
      }

      return worksheets;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableWorksheets", () => {
      const {
        filterName,
        filterTopic,
        worksheets: allWorksheets,
        sort,
        subjectFilters,
        difficultyFilters,
        typeFilters,
        sourceFilters
      } = this.state;
      let worksheets;

      if (filterName.length && !filterTopic.length) {
        worksheets = this.onFilterByName();
      } else if (!filterName.length && filterTopic.length) {
        worksheets = this.onFilterByTopic();
      } else if (filterName.length && filterTopic.length) {
        const filteredByName = this.onFilterByName();
        worksheets = this.onFilterByTopic(filteredByName);
      } else {
        worksheets = allWorksheets;
      }

      if (subjectFilters.length || difficultyFilters.length || typeFilters.length || sourceFilters.length) {
        worksheets = this.onFilterWorksheets();
      }

      if (sort) {
        return this.onSortWorksheets(worksheets);
      }

      return worksheets;
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        subjectFilters: currentSubjectFilters,
        difficultyFilters: currentDifficultyFilters,
        typeFilters: currentTypeFilters,
        sourceFilters: currentSourceFilters
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'difficulty':
          modifiedFilterCurrentState = currentDifficultyFilters;
          modifiedFilterName = 'difficultyFilters';
          break;

        case 'type':
          modifiedFilterCurrentState = currentTypeFilters;
          modifiedFilterName = 'typeFilters';
          break;

        case 'source':
          modifiedFilterCurrentState = currentSourceFilters;
          modifiedFilterName = 'sourceFilters';
          break;

        default:
          break;
      }

      if (modifiedFilterCurrentState.indexOf(filter) === -1) {
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        const filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [modifiedFilterName]: modifiedFilterUpdatedState
      });
    });

    Object(defineProperty["a" /* default */])(this, "renderWorksheetView", () => {
      const {
        currentView
      } = this.state;
      const {
        onSetActiveWorksheet
      } = this.props;

      switch (currentView) {
        case 'list':
          return ListPage_jsx(components_ListView, {
            onSetActiveWorksheet: onSetActiveWorksheet,
            worksheets: this.getMappableWorksheets()
          });

        case 'full':
          return ListPage_jsx(components_FullView, {
            onSetActiveWorksheet: onSetActiveWorksheet,
            worksheets: this.getMappableWorksheets()
          });

        default:
          break;
      }
    });

    this.state = {
      sort: '',
      subjectFilters: [],
      difficultyFilters: [],
      typeFilters: [],
      sourceFilters: [],
      filterName: '',
      filterTopic: '',
      currentView: 'full',
      worksheets: sampleWorksheets
    };
  }

  render() {
    const {
      currentView,
      subjectFilters,
      difficultyFilters,
      typeFilters,
      sourceFilters
    } = this.state;
    return ListPage_jsx(external_react_default.a.Fragment, null, ListPage_jsx(external_react_sticky_["Sticky"], null, ({
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
      className: "icon-sheets-w"
    }), ListPage_jsx("span", {
      className: "heading-block"
    }, "Custom Worksheet Library"))))), ListPage_jsx(ListPage_components_FilterSection, {
      currentView: currentView,
      typeFilters: typeFilters,
      sourceFilters: sourceFilters,
      subjectFilters: subjectFilters,
      difficultyFilters: difficultyFilters,
      onSetSort: this.onSetSort,
      onChangeView: this.onChangeView,
      onClearFilters: this.onClearFilters,
      handleFilterClick: this.handleFilterClick,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredTopicState: this.onSetFilteredTopicState,
      onUnsetFilteredTopicState: this.onUnsetFilteredTopicState
    }), this.renderWorksheetView(), ListPage_jsx("div", {
      className: "add-btn-block"
    }, ListPage_jsx("a", {
      href: "#",
      className: "dropdown-trigger waves-effect waves-teal btn add-btn",
      "data-target": "dropdown_assign_selected"
    }, ListPage_jsx("i", {
      className: "material-icons"
    }, "add"), " Custom Worksheet"), ListPage_jsx("ul", {
      id: "dropdown_assign_selected",
      className: "dropdown-content dropdown-small"
    }, ListPage_jsx("li", null, ListPage_jsx("a", {
      href: "#"
    }, "From Saved")), ListPage_jsx("li", null, ListPage_jsx("a", {
      href: "#"
    }, "Create New")))));
  }

}

/* harmony default export */ var Worksheet_ListPage = (ListPage_ListPage);
// CONCATENATED MODULE: ./pages/worksheets.js


var worksheets_jsx = external_react_default.a.createElement;



 // eslint-disable-next-line react/prefer-stateless-function

class worksheets_Worksheets extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetActiveWorksheet", activeWorksheet => this.setState({
      activeWorksheet
    }));

    Object(defineProperty["a" /* default */])(this, "renderCurrentPage", () => {
      const {
        activeWorksheet
      } = this.state;

      if (!activeWorksheet) {
        return worksheets_jsx(Worksheet_ListPage, {
          onSetActiveWorksheet: this.onSetActiveWorksheet
        });
      }

      return worksheets_jsx(external_react_default.a.Fragment, null, worksheets_jsx(external_react_sticky_["Sticky"], null, ({
        style
      }) => worksheets_jsx("div", {
        className: "title-row card-panel",
        style: Object(objectSpread["a" /* default */])({}, style, {
          zIndex: 999
        })
      }, worksheets_jsx("div", {
        className: "mobile-header"
      }, worksheets_jsx("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, worksheets_jsx("i", {
        className: "material-icons"
      }, "menu"))), worksheets_jsx("nav", {
        className: "breadcrumb-holder"
      }, worksheets_jsx("div", {
        className: "nav-wrapper "
      }, worksheets_jsx("a", {
        href: "#",
        className: "breadcrumb",
        onClick: () => this.onSetActiveWorksheet(null)
      }, "< Custom Worksheet Library"))), worksheets_jsx("h2", {
        className: "h1 white-text"
      }, worksheets_jsx("span", {
        className: "heading-holder"
      }, worksheets_jsx("i", {
        className: "icon-sheets-w"
      }), worksheets_jsx("span", {
        className: "heading-block"
      }, "Some Custom Worksheet"))))), worksheets_jsx(Worksheet_DetailPage, {
        worksheet: activeWorksheet,
        onSetActiveWorksheet: this.onSetActiveWorksheet
      }));
    });

    this.state = {
      activeWorksheet: null
    };
  }

  render() {
    return worksheets_jsx("main", {
      id: "main",
      role: "main"
    }, worksheets_jsx("div", {
      className: "main-holder grey lighten-5 switcher-section"
    }, worksheets_jsx(external_react_sticky_["StickyContainer"], null, this.renderCurrentPage())));
  }

}

/* harmony default export */ var pages_worksheets = __webpack_exports__["default"] = (worksheets_Worksheets);

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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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