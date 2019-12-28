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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zlhV");


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

/***/ "zlhV":
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

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/CourseTemplate/utils/sortOptions.js
/* harmony default export */ var sortOptions = ([{
  value: 'sessions',
  label: 'Number Of Sessions'
}, {
  value: 'estimatedTotalCourseWork',
  label: 'Estimated Total Course Work'
}, {
  value: 'lessons',
  label: 'Number Of Lessons'
}]);
const sessionSort = ({
  sessions: sessionCountA
}, {
  sessions: sessionCountB
}) => {
  if (sessionCountA > sessionCountB) {
    return -1;
  }

  return 0;
};
const lessonSort = ({
  lessons: lessonCountA
}, {
  lessons: lessonCountB
}) => {
  if (lessonCountA > lessonCountB) {
    return -1;
  }

  return 0;
};
const estimatedTotalCourseWorkSort = ({
  estimatedTotalCourseWork: courseworkA
}, {
  estimatedTotalCourseWork: courseworkB
}) => {
  if (courseworkA > courseworkB) {
    return -1;
  }

  return 0;
};
// CONCATENATED MODULE: ./components/CourseTemplate/components/FilterSection/index.js

var __jsx = external_react_default.a.createElement;

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
      title: '',
      sort: ''
    }, this.props.onClearFilters));

    Object(defineProperty["a" /* default */])(this, "onChangeTitleSearch", ({
      target: {
        value: title
      }
    }) => this.setState({
      title
    }));

    Object(defineProperty["a" /* default */])(this, "handleSortChange", sort => {
      const {
        onSetSort
      } = this.props;
      this.setState({
        sort
      });
      return onSetSort(sort);
    });

    Object(defineProperty["a" /* default */])(this, "submitNameFilter", () => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;
      const {
        title
      } = this.state;

      if (title === '') {
        onUnsetFilteredState();
      }

      const transformedTitle = title.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedTitle);
    });

    this.state = {
      open: true,
      title: '',
      sort: ''
    };
  }

  render() {
    const {
      sort,
      open,
      title
    } = this.state;
    const {
      onClearFilters,
      subjectFilters,
      sourceFilters,
      handleFilterClick
    } = this.props;
    return __jsx("div", {
      className: "filter-form-holder"
    }, __jsx("ul", {
      className: "collapsible expandable",
      style: {
        minHeight: '0'
      }
    }, __jsx("li", null, __jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, __jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "reading",
      checked: subjectFilters.indexOf('reading') !== -1,
      onChange: () => handleFilterClick('subject', 'reading')
    }), __jsx("label", {
      htmlFor: "reading"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "writing",
      checked: subjectFilters.indexOf('writing') !== -1,
      onChange: () => handleFilterClick('subject', 'writing')
    }), __jsx("label", {
      htmlFor: "writing"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "math",
      checked: subjectFilters.indexOf('math') !== -1,
      onChange: () => handleFilterClick('subject', 'math')
    }), __jsx("label", {
      htmlFor: "math"
    }, "Math")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "all",
      checked: subjectFilters.indexOf('all') !== -1,
      onChange: () => handleFilterClick('subject', 'all')
    }), __jsx("label", {
      htmlFor: "all"
    }, "All"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "builtIn",
      checked: sourceFilters.indexOf('builtIn') !== -1,
      onChange: () => handleFilterClick('source', 'builtIn')
    }), __jsx("label", {
      htmlFor: "builtIn"
    }, "Built-In")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "userCreated",
      checked: sourceFilters.indexOf('userCreated') !== -1,
      onChange: () => handleFilterClick('source', 'userCreated')
    }), __jsx("label", {
      htmlFor: "userCreated"
    }, "User Created")))), __jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "course_search",
      className: "input-control validate",
      value: title,
      onChange: this.onChangeTitleSearch
    }), __jsx("button", {
      type: "submit",
      className: "search-button",
      onClick: this.submitNameFilter
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: "label",
      htmlFor: "course_search"
    }, "Search"))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 xl7"
    }, __jsx("div", {
      className: "input-field",
      style: {
        marginBottom: '0',
        marginTop: '0'
      }
    }, __jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, sortOptions),
      onChange: this.handleSortChange,
      options: sortOptions,
      label: "Sort By",
      stateKey: "topic",
      dropdownKey: "topic"
    }))))), __jsx("div", {
      className: "col s12 l4 hide-on-med-and-down show-on-large"
    }, "\xA0"), __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "option-filters"
    }, __jsx("div", {
      className: "option-item clear"
    }, __jsx("a", {
      href: "#",
      onClick: onClearFilters
    }, "Clear Filters")), __jsx("div", {
      className: "option-item"
    }, __jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, __jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// CONCATENATED MODULE: ./components/CourseTemplate/components/TemplateCard/index.js

var TemplateCard_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */



const data = total => ({
  datasets: [{
    data: [total, 0],
    backgroundColor: ['#3d8946', 'rgb(234, 234, 234)']
  }]
});

const formatEstimatedTotalCourseWork = minutes => Math.floor(minutes / 60);

const sourceMap = {
  builtIn: 'Built-In',
  userCreated: 'User Created'
};

class TemplateCard_TemplateCard extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "handleDropdownClick", event => {
      const {
        onSetDropdown,
        onCloseDropdown,
        dropdownIsOpen,
        index
      } = this.props;
      event.preventDefault();

      if (dropdownIsOpen) {
        return onCloseDropdown();
      }

      return onSetDropdown(index);
    });

    Object(defineProperty["a" /* default */])(this, "toggleEditModal", event => {
      const {
        onToggleEditModal
      } = this.props;
      event.preventDefault();
      onToggleEditModal();
    });

    Object(defineProperty["a" /* default */])(this, "toggleExpandedState", () => this.setState(({
      expanded
    }) => ({
      expanded: !expanded
    })));

    this.state = {
      expanded: false
    };
  }

  render() {
    const {
      template,
      dropdownIndex,
      dropdownIsOpen,
      index
    } = this.props;
    const {
      title,
      source,
      sessions,
      estimatedTotalCourseWork,
      lessons,
      description,
      instructions
    } = template;
    const {
      expanded
    } = this.state;
    return TemplateCard_jsx("div", {
      className: "card-main-col col s12 l6"
    }, TemplateCard_jsx("div", {
      className: "card-template card"
    }, TemplateCard_jsx("i", {
      className: "icon-module icon-position-left"
    }), TemplateCard_jsx("ul", {
      className: "collapsible expandable"
    }, TemplateCard_jsx("li", null, TemplateCard_jsx("div", {
      className: "collapsible-card card-panel"
    }, TemplateCard_jsx("div", {
      className: "card-panel-row align-items-start row"
    }, TemplateCard_jsx("div", {
      className: "col s10"
    }, TemplateCard_jsx("div", {
      className: "card-header-block"
    }, TemplateCard_jsx("h3", {
      className: "h4 collapsible-title"
    }, title), TemplateCard_jsx("div", {
      className: "meta-info"
    }, TemplateCard_jsx("dl", {
      className: "dl-horizontal"
    }, TemplateCard_jsx("dt", null, "Source:"), TemplateCard_jsx("dd", null, sourceMap[source]))))), TemplateCard_jsx("div", {
      className: "col s2 right-align"
    }, TemplateCard_jsx("div", {
      className: "row icons-row"
    }, TemplateCard_jsx("div", {
      className: "dropdown-block col"
    }, TemplateCard_jsx("a", {
      className: "dropdown-trigger btn",
      href: "#",
      "data-target": "dropdown02",
      onClick: this.handleDropdownClick
    }, TemplateCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? TemplateCard_jsx("ul", {
      id: "dropdown02",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, TemplateCard_jsx("li", null, TemplateCard_jsx("a", {
      href: "#",
      className: "modal-trigger link-block",
      onClick: this.toggleEditModal
    }, "Edit")), TemplateCard_jsx("li", null, TemplateCard_jsx("a", {
      href: "#!",
      className: "link-delete"
    }, "Delete"))) : null), TemplateCard_jsx("div", {
      className: "col right-align"
    }, TemplateCard_jsx("span", {
      onClick: this.toggleExpandedState,
      className: "collapsible-header collapsible-opener"
    }, TemplateCard_jsx("i", {
      className: "custom-icon-triangle-right color-black"
    })))))), TemplateCard_jsx("div", {
      className: "d-flex justify-content-center align-items-center row mb-0"
    }, TemplateCard_jsx("div", {
      className: "col m6"
    }, TemplateCard_jsx("ul", {
      className: "points-list list-two-cols badge-circle-78"
    }, TemplateCard_jsx("li", {
      className: "style-purple-dark"
    }, TemplateCard_jsx("span", {
      className: "badge-circle"
    }, sessions), TemplateCard_jsx("span", {
      className: "point-text"
    }, "Sessions")), TemplateCard_jsx("li", {
      className: "style-pink"
    }, TemplateCard_jsx("span", {
      className: "badge-circle"
    }, formatEstimatedTotalCourseWork(estimatedTotalCourseWork), " ", TemplateCard_jsx("span", {
      className: "badge-text"
    }, "hrs")), TemplateCard_jsx("span", {
      className: "point-text"
    }, "Estimated Total Course Work")))), TemplateCard_jsx("div", {
      className: "col"
    }, TemplateCard_jsx("div", {
      className: "chart-block chart-block-140"
    }, TemplateCard_jsx(external_react_chartjs_2_["Doughnut"], {
      data: () => data(lessons),
      height: 140,
      width: 140,
      options: {
        cutoutPercentage: 55,
        tooltips: false
      }
    }), TemplateCard_jsx("div", {
      className: "chart-text"
    }, TemplateCard_jsx("span", {
      className: "value",
      style: {
        color: '#3d8946'
      }
    }, lessons), TemplateCard_jsx("span", {
      className: "title",
      style: {
        color: '#3d8946'
      }
    }, "Lessons")))))), TemplateCard_jsx("div", {
      className: "card-content collapsible-body",
      style: {
        display: expanded ? 'block' : 'none'
      }
    }, TemplateCard_jsx("dl", null, TemplateCard_jsx("dt", null, TemplateCard_jsx("strong", {
      className: "dl-title"
    }, "Description:")), TemplateCard_jsx("dd", null, TemplateCard_jsx("p", null, description))), TemplateCard_jsx("dl", null, TemplateCard_jsx("dt", null, TemplateCard_jsx("strong", {
      className: "dl-title"
    }, "Instructions:")), TemplateCard_jsx("dd", null, TemplateCard_jsx("p", null, instructions))))))));
  }

}

/* harmony default export */ var components_TemplateCard = (TemplateCard_TemplateCard);
// CONCATENATED MODULE: ./components/CourseTemplate/utils/sampleTemplate.js
/* harmony default export */ var sampleTemplate = ([{
  title: 'Template name 1',
  source: 'userCreated',
  sessions: 31,
  estimatedTotalCourseWork: 3660,
  lessons: 98,
  subject: 'reading',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 2',
  source: 'builtIn',
  sessions: 19,
  estimatedTotalCourseWork: 2198,
  lessons: 102,
  subject: 'writing',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 3',
  source: 'userCreated',
  sessions: 19,
  estimatedTotalCourseWork: 4102,
  lessons: 125,
  subject: 'math',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 4',
  source: 'builtIn',
  sessions: 22,
  estimatedTotalCourseWork: 4000,
  lessons: 131,
  subject: 'reading',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 5',
  source: 'userCreated',
  sessions: 12,
  estimatedTotalCourseWork: 2981,
  lessons: 91,
  subject: 'writing',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}, {
  title: 'Template name 6',
  source: 'builtIn',
  sessions: 35,
  estimatedTotalCourseWork: 1249,
  lessons: 88,
  subject: 'math',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
  instructions: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.'
}]);
// CONCATENATED MODULE: ./pages/courseTemplates.js


var courseTemplates_jsx = external_react_default.a.createElement;








class courseTemplates_CourseTemplates extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      subjectFilters: [],
      sourceFilters: [],
      titleFilter: '',
      sort: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", titleFilter => this.setState({
      templatesAreFiltered: true,
      titleFilter
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", () => this.setState({
      templatesAreFiltered: false,
      titleFilter: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onToggleEditModal", () => this.setState(({
      editModalOpen
    }) => ({
      editModalOpen: !editModalOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onSortTemplates", templates => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'sessions':
          return templates.sort(sessionSort);

        case 'estimatedTotalCourseWork':
          return templates.sort(estimatedTotalCourseWorkSort);

        case 'lessons':
          return templates.sort(lessonSort);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByTitle", () => {
      const {
        templates,
        titleFilter
      } = this.state;
      return templates.reduce((finalArr, currentTemplate) => {
        const {
          title
        } = currentTemplate;
        const templateString = title.replace(/\s/g, "").toLowerCase();

        if (templateString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentTemplate) === -1) {
          finalArr.push(currentTemplate);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterTemplates", () => {
      const {
        subjectFilters,
        sourceFilters,
        templates: allTemplates
      } = this.state;
      let templates = allTemplates;

      if (subjectFilters.length && subjectFilters.indexOf('all') === -1) {
        templates = templates.filter(template => subjectFilters.indexOf(template.subject) !== -1);
      }

      if (sourceFilters.length) {
        templates = templates.filter(template => sourceFilters.indexOf(template.source) !== -1);
      }

      return templates;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableTemplates", () => {
      const {
        subjectFilters,
        sourceFilters,
        titleFilter,
        sort,
        templates
      } = this.state;
      let mappableTemplates = templates;

      if (titleFilter.length) {
        mappableTemplates = this.onFilterByTitle();
      }

      if (subjectFilters.length || sourceFilters.length) {
        mappableTemplates = this.onFilterTemplates();
      }

      if (sort) {
        return this.onSortTemplates(mappableTemplates);
      }

      return mappableTemplates;
    });

    Object(defineProperty["a" /* default */])(this, "importTemplateFromFile", () => {
      console.warn('stubbed out import function');
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        subjectFilters: currentSubjectFilters,
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

        case 'source':
          modifiedFilterCurrentState = currentSourceFilters;
          modifiedFilterName = 'sourceFilters';
          break;

        default:
          break;
      } // Decide whether we're adding or removing the selected filter


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

    Object(defineProperty["a" /* default */])(this, "mapTemplateCards", () => this.getMappableTemplates().map((template, index) => courseTemplates_jsx(components_TemplateCard, {
      template: template,
      index: index,
      dropdownIndex: this.state.dropdownIndex,
      dropdownIsOpen: this.state.dropdownIsOpen,
      onCloseDropdown: this.onCloseDropdown,
      onSetDropdown: this.onSetDropdown,
      onToggleEditModal: this.onToggleEditModal
    })));

    this.state = {
      templates: sampleTemplate,
      dropdownIsOpen: false,
      dropdownIndex: null,
      editModalOpen: false,
      subjectFilters: [],
      sourceFilters: [],
      titleFilter: '',
      sort: ''
    };
  }

  render() {
    const {
      subjectFilters,
      sourceFilters
    } = this.state;
    return courseTemplates_jsx("main", {
      id: "main",
      role: "main"
    }, courseTemplates_jsx("div", {
      className: "main-holder grey lighten-5 switcher-section"
    }, courseTemplates_jsx(external_react_sticky_["StickyContainer"], null, courseTemplates_jsx(external_react_sticky_["Sticky"], null, ({
      style
    }) => courseTemplates_jsx("div", {
      className: "title-row card-panel",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1999
      })
    }, courseTemplates_jsx("div", {
      className: "mobile-header"
    }, courseTemplates_jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, courseTemplates_jsx("i", {
      className: "material-icons"
    }, "menu"))), courseTemplates_jsx("h2", {
      className: "h1 white-text"
    }, courseTemplates_jsx("span", {
      className: "heading-holder"
    }, courseTemplates_jsx("i", {
      className: "icon-module"
    }), courseTemplates_jsx("span", {
      className: "heading-block"
    }, "Course Template Library"))))), courseTemplates_jsx(components_FilterSection, {
      subjectFilters: subjectFilters,
      sourceFilters: sourceFilters,
      onSetSort: this.onSetSort,
      onClearFilters: this.onClearFilters,
      handleFilterClick: this.handleFilterClick,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState
    }), courseTemplates_jsx("div", {
      className: "content-section"
    }, courseTemplates_jsx("div", {
      className: "container-middle"
    }, courseTemplates_jsx("div", {
      className: "result-row center-align"
    }, courseTemplates_jsx("b", {
      className: "result"
    }, "- ", this.getMappableTemplates().length, " matches -")), courseTemplates_jsx("div", {
      className: "d-flex-content row card-width-470"
    }, this.mapTemplateCards()))), courseTemplates_jsx("div", {
      className: "add-btn-block"
    }, courseTemplates_jsx("a", {
      href: "#",
      onClick: this.importTemplateFromFile,
      className: "waves-effect waves-teal btn add-btn"
    }, courseTemplates_jsx("i", {
      className: "material-icons"
    }, "add"), " Import Template from File")))));
  }

}

/* harmony default export */ var courseTemplates = __webpack_exports__["default"] = (courseTemplates_CourseTemplates);

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