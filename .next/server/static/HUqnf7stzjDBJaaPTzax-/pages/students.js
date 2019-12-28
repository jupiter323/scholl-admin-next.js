module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		32: 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"73053d72685b94cb1ed3"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/UQ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5Buo");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xA6B");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("x4x+");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class AssignSessionModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onResetModal", () => this.setState({
      date: '',
      startTime: '',
      endTime: '',
      notes: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "assignSession", () => {
      const {
        onAssignSession
      } = this.props;
      const {
        date: unformattedDate,
        startTime: unformattedStartTime,
        endTime: unformattedEndTime,
        notes
      } = this.state;
      const date = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedDate).format('MM/DD/YY');
      const startTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedStartTime).format('hh:mm');
      const endTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedEndTime).format('hh:mm');
      onAssignSession({
        date,
        startTime,
        endTime,
        notes,
        title: 'Session'
      });
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDetailsChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDatePickerChange", (field, value) => this.setState({
      [field]: value
    }));

    this.state = {
      date: '',
      startTime: '',
      endTime: '',
      notes: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      modalDate
    } = this.props;

    if (prevState.date === '' && modalDate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        date: new Date(modalDate)
      });
    }
  }

  render() {
    const {
      open
    } = this.props;
    const {
      date,
      startTime,
      endTime,
      notes
    } = this.state;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-3300663016" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_assign_session",
      className: "jsx-3300663016" + " " + "modal modal-custom modal-calendar"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#14b04b',
        color: '#fff'
      },
      className: "jsx-3300663016" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-3300663016"
    }, __jsx("span", {
      className: "jsx-3300663016" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-clock2"
    }), __jsx("span", {
      className: "jsx-3300663016" + " " + "heading-block"
    }, " New Session")))), __jsx("div", {
      className: "jsx-3300663016" + " " + "col right-align"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-3300663016" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-3300663016" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "col s12"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: date,
      className: "full-width",
      dateFormat: "MM/dd/yy",
      id: "date",
      name: "date",
      onChange: event => this.handleDatePickerChange('date', event)
    }), __jsx("label", {
      htmlFor: "date",
      className: "jsx-3300663016" + " " + ((date ? 'label active' : 'label') || "")
    }, "Date")))), __jsx("div", {
      className: "jsx-3300663016" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: startTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "startTime",
      name: "startTime",
      onChange: event => this.handleDatePickerChange('startTime', event)
    }), __jsx("label", {
      htmlFor: "startTime",
      className: "jsx-3300663016" + " " + ((startTime ? 'label active' : 'label') || "")
    }, "Start Time"))), __jsx("div", {
      className: "jsx-3300663016" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-3300663016" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: endTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "endTime",
      name: "endTime",
      onChange: event => this.handleDatePickerChange('endTime', event)
    }), __jsx("label", {
      htmlFor: "endTime",
      className: "jsx-3300663016" + " " + ((endTime ? 'label active' : 'label') || "")
    }, "End Time")))), __jsx("div", {
      className: "jsx-3300663016" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "col s12"
    }, __jsx("div", {
      className: "jsx-3300663016" + " " + "input-field input-field-textarea"
    }, __jsx("textarea", {
      id: "notes",
      name: "notes",
      cols: "40",
      rows: "7",
      value: notes,
      onChange: this.handleDetailsChange,
      className: "jsx-3300663016" + " " + "textarea-scroll"
    }), __jsx("label", {
      htmlFor: "notes",
      className: "jsx-3300663016" + " " + ((notes ? 'label active' : 'label') || "")
    }, "Session Notes:"))))), __jsx("div", {
      className: "jsx-3300663016" + " " + "modal-footer modal-footer-width"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-3300663016" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.assignSession,
      className: "jsx-3300663016" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Add Session"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3300663016"
    }, [".overlay.jsx-3300663016{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-3300663016{margin:0;border-radius:6px;}", ".modal.jsx-3300663016{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-3300663016{opacity:1;visibility:visible;}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AssignSessionModal);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("227i");


/***/ }),

/***/ "227i":
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

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__("MWqi");

// EXTERNAL MODULE: ./components/Student/index/actions.js
var index_actions = __webpack_require__("6VZ0");

// CONCATENATED MODULE: ./components/Student/index/selectors.js


const selectStudentsDomain = state => state.studentReducer;

const makeSelectStudentPageState = () => Object(external_reselect_["createSelector"])(selectStudentsDomain, substate => substate ? substate.toJS() : {});

const makeSelectStudents = () => Object(external_reselect_["createSelector"])(makeSelectStudentPageState(), substate => substate.students);

const makeSelectAssignLessonsModalOpen = () => Object(external_reselect_["createSelector"])(makeSelectStudentPageState(), substate => substate.assignLessonsModalOpen);

const makeSelectAssignWorkSheetsModalOpen = () => Object(external_reselect_["createSelector"])(makeSelectStudentPageState(), substate => substate.assignWorkSheetsModalOpen);

const makeSelectCalendarRows = () => Object(external_reselect_["createSelector"])(makeSelectStudentPageState(), substate => substate.calendarRows);

/* harmony default export */ var selectors = (selectStudentsDomain);

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/ClickOffComponentWrapper/index.js
var ClickOffComponentWrapper = __webpack_require__("x4x+");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// EXTERNAL MODULE: ./components/Student/index/api.js
var api = __webpack_require__("zTv3");

// CONCATENATED MODULE: ./components/Student/components/StudentCard/components/EditModal.js


var __jsx = external_react_default.a.createElement;









class EditModal_EditModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalStudent || nextProps.student.id !== this.state.originalStudent.id) {
        const {
          student: {
            id,
            active,
            studentInformation,
            contactInformation,
            emailAddress,
            location
          } = {}
        } = nextProps;
        const updatedStudent = {
          id,
          active,
          studentInformation,
          contactInformation,
          emailAddress,
          location
        };
        const {
          originalStudent: originalStudentState
        } = this.state;
        const originalStudent = external_immutability_helper_default()(originalStudentState, {
          $merge: nextProps.student
        });
        this.setState({
          originalStudent,
          updatedStudent
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "initialStudentMount", () => this.state.originalStudent.id !== this.props.student.id);

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section) => {
      const {
        updatedStudent: previousStudentState
      } = this.state;
      const value = event.target ? event.target.value : event;
      const updatedStudent = external_immutability_helper_default()(previousStudentState, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState({
        updatedStudent
      });
      this.handleUnitApiUpdate(name, value);
    });

    Object(defineProperty["a" /* default */])(this, "handleUnitApiUpdate", async (name, value) => {
      const {
        student: {
          id: student_id
        }
      } = this.props;

      switch (name) {
        case "firstName":
          return await Object(api["g" /* updateStudentFirstNameApi */])({
            student_id,
            first_name: value
          });

        case "lastName":
          return await Object(api["h" /* updateStudentLastNameApi */])({
            student_id,
            last_name: value
          });

        case "email":
          return await Object(api["f" /* updateStudentEmailApi */])({
            student_id,
            email: value
          });

        case "phone":
          return await Object(api["i" /* updateStudentPhoneApi */])({
            student_id,
            phone: value
          });

        case "addressLine1":
          return await Object(api["d" /* updateStudentAddressApi */])({
            student_id,
            address: value
          });

        case "city":
          return await Object(api["e" /* updateStudentCityApi */])({
            student_id,
            city: value
          });

        case "state":
          return await Object(api["j" /* updateStudentStateApi */])({
            student_id,
            state: value
          });

        case "zipCode":
          return await Object(api["k" /* updateStudentZipApi */])({
            student_id,
            zip: value
          });

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        updatedStudent: {
          id,
          active,
          studentInformation,
          contactInformation,
          emailAddress,
          location
        }
      } = this.state;
      const {
        onSaveStudentChanges,
        onCloseEditModal
      } = this.props;
      const postBody = {
        id,
        active,
        studentInformation,
        contactInformation,
        emailAddress,
        location
      };
      onSaveStudentChanges(postBody);
      onCloseEditModal();
    });

    this.state = {
      originalStudent: {
        id: "",
        active: false,
        studentInformation: {
          firstName: '',
          lastName: ''
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
          locations: [{
            locationNickname: '',
            locationName: ''
          }, {
            locationNickname: '',
            locationName: ''
          }, {
            locationNickname: '',
            locationName: ''
          }]
        }
      },
      updatedStudent: {
        id: "",
        active: false,
        studentInformation: {
          firstName: '',
          lastName: ''
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
          locations: [{
            locationNickname: '',
            locationName: ''
          }, {
            locationNickname: '',
            locationName: ''
          }, {
            locationNickname: '',
            locationName: ''
          }]
        }
      }
    };
  }

  componentDidMount() {
    const {
      student: {
        id,
        active,
        studentInformation,
        contactInformation,
        emailAddress,
        location
      } = {}
    } = this.props;
    const updatedStudent = {
      id,
      active,
      studentInformation,
      contactInformation,
      emailAddress,
      location
    };
    const {
      originalStudent: originalStudentState
    } = this.state;
    const originalStudent = external_immutability_helper_default()(originalStudentState, {
      $merge: updatedStudent
    });
    this.setState({
      originalStudent,
      updatedStudent
    }); // eslint-disable-line
  } // This resets the component state to reflect the details of the next student the user clicks on


  render() {
    const {
      open,
      onCloseEditModal,
      student: {
        id,
        active,
        studentInformation,
        contactInformation,
        emailAddress,
        location
      }
    } = this.props;
    const {
      updatedStudent: {
        active: updatedActive,
        studentInformation: updatedStudentInformation,
        contactInformation: updatedContactInformation,
        emailAddress: updatedEmailAddress,
        location: updatedLocation
      }
    } = this.state;
    return __jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-1261272773" + " " + "overlay"
    }, __jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: onCloseEditModal
    }, __jsx("div", {
      id: "modal_user_edit",
      className: "jsx-1261272773" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, __jsx("form", {
      action: "#",
      className: "jsx-1261272773" + " " + "custom-form"
    }, __jsx("fieldset", {
      className: "jsx-1261272773"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-modal card-main card grey lighten-3"
    }, __jsx("div", {
      style: {
        backgroundColor: "#31837a",
        color: "#fff"
      },
      className: "jsx-1261272773" + " " + "owner-box card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "col s9"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "user-block"
    }, __jsx("div", {
      style: {
        backgroundColor: "#0085ce",
        color: "#fff"
      },
      className: "jsx-1261272773" + " " + "user-circle"
    }, __jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "",
      className: "jsx-1261272773"
    })), __jsx("div", {
      style: {
        color: "#fff"
      },
      className: "jsx-1261272773" + " " + "user-text"
    }, __jsx("h4", {
      className: "jsx-1261272773" + " " + "h3"
    }, "Ownerly, Jennifer"), __jsx("a", {
      href: "mailto:jen.ownerly@gmail.com",
      className: "jsx-1261272773"
    }, "jen.ownerly@gmail.com")))), __jsx("div", {
      className: "jsx-1261272773" + " " + "col"
    }, __jsx("span", {
      className: "jsx-1261272773" + " " + "block-icon"
    }, __jsx("i", {
      className: "jsx-1261272773" + " " + "icon-owner"
    }), __jsx("span", {
      className: "jsx-1261272773" + " " + "text-icon"
    }, "Owner"))))), __jsx("div", {
      className: "jsx-1261272773" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "col s12 l6"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-block"
    }, __jsx("h3", {
      className: "jsx-1261272773"
    }, "Account Info"), __jsx("div", {
      className: "jsx-1261272773" + " " + "card-main card"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "input-field col s12"
    }, __jsx("input", {
      type: "text",
      id: "firstName",
      name: "firstName",
      value: this.initialStudentMount() ? studentInformation.firstName : updatedStudentInformation.firstName,
      onChange: event => this.handleDetailsChange(event, "firstName", "studentInformation"),
      className: "jsx-1261272773"
    }), __jsx("label", {
      htmlFor: "firstName",
      className: "jsx-1261272773" + " " + ((studentInformation.firstName ? 'label active' : 'label') || "")
    }, "FirstName"))), __jsx("div", {
      className: "jsx-1261272773" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "input-field col s12"
    }, __jsx("input", {
      type: "text",
      id: "lastName",
      name: "lastName",
      value: this.initialStudentMount() ? studentInformation.lastName : updatedStudentInformation.lastName,
      onChange: event => this.handleDetailsChange(event, "lastName", "studentInformation"),
      className: "jsx-1261272773"
    }), __jsx("label", {
      htmlFor: "lastName",
      className: "jsx-1261272773" + " " + ((studentInformation.lastName ? 'label active' : 'label') || "")
    }, "LastName"))), __jsx("div", {
      className: "jsx-1261272773" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "input-field col s12"
    }, __jsx("input", {
      type: "text",
      id: "email",
      name: "email",
      value: this.initialStudentMount() ? emailAddress.email : updatedEmailAddress.email,
      onChange: event => this.handleDetailsChange(event, "email", "emailAddress"),
      className: "jsx-1261272773"
    }), __jsx("label", {
      htmlFor: "email",
      className: "jsx-1261272773" + " " + ((emailAddress.email ? 'label active' : 'label') || "")
    }, "Email")))))), __jsx("div", {
      className: "jsx-1261272773" + " " + "card-block"
    }, __jsx("h3", {
      className: "jsx-1261272773"
    }, "Contact Info"), __jsx("div", {
      className: "jsx-1261272773" + " " + "card-main card"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "input-field col s12"
    }, __jsx("input", {
      type: "tel",
      id: "phone",
      name: "phone",
      value: this.initialStudentMount() ? contactInformation.phone : updatedContactInformation.phone,
      onChange: event => this.handleDetailsChange(event, "phone", "contactInformation"),
      className: "jsx-1261272773"
    }), __jsx("label", {
      htmlFor: "phone",
      className: "jsx-1261272773" + " " + ((contactInformation.phone ? 'label active' : 'label') || "")
    }, "Phone"))), __jsx("div", {
      className: "jsx-1261272773" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "input-field col s12"
    }, __jsx("input", {
      type: "text",
      id: "address",
      name: "address",
      value: this.initialStudentMount() ? contactInformation.addressLine1 : updatedContactInformation.addressLine1,
      onChange: event => this.handleDetailsChange(event, "addressLine1", "contactInformation"),
      className: "jsx-1261272773"
    }), __jsx("label", {
      htmlFor: "address",
      className: "jsx-1261272773" + " " + ((contactInformation.addressLine1 ? 'label active' : 'label') || "")
    }, "Address (optional)"))), __jsx("div", {
      className: "jsx-1261272773" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "input-field col s12"
    }, __jsx("input", {
      type: "text",
      id: "city",
      value: this.initialStudentMount() ? contactInformation.city : updatedContactInformation.city,
      name: "city",
      onChange: event => this.handleDetailsChange(event, "city", "contactInformation"),
      className: "jsx-1261272773"
    }), __jsx("label", {
      htmlFor: "city",
      className: "jsx-1261272773" + " " + ((contactInformation.city ? 'label active' : 'label') || "")
    }, "City (optional)"))), __jsx("div", {
      className: "jsx-1261272773" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "col s12 m6 l5"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "input-field"
    }, __jsx(Dropdown["a" /* default */], {
      value: this.initialStudentMount() ? Object(getValueFromState["a" /* default */])(contactInformation.state, stateOptions["a" /* default */]) : Object(getValueFromState["a" /* default */])(updatedContactInformation.state, stateOptions["a" /* default */]),
      name: "state",
      onChange: event => this.handleDetailsChange(event, "state", "contactInformation"),
      options: stateOptions["a" /* default */],
      label: "State",
      stateKey: "state",
      dropdownKey: "state"
    }))), __jsx("div", {
      className: "jsx-1261272773" + " " + "col s12 m6 l7"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "input-field"
    }, __jsx("input", {
      type: "tel",
      id: "zipCode",
      name: "zipCode",
      value: this.initialStudentMount() ? contactInformation.zipCode : updatedContactInformation.zipCode,
      onChange: event => this.handleDetailsChange(event, "zipCode", "contactInformation"),
      className: "jsx-1261272773"
    }), __jsx("label", {
      htmlFor: "zipCode",
      className: "jsx-1261272773" + " " + ((contactInformation.zipCode ? 'label active' : 'label') || "")
    }, "zipCode (optional)")))))))), __jsx("div", {
      className: "jsx-1261272773" + " " + "col s12 l6"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-block"
    }, __jsx("h3", {
      className: "jsx-1261272773"
    }, "Location(s)"), __jsx("div", {
      className: "jsx-1261272773" + " " + "card-main card-location card card-large"
    }, __jsx("div", {
      style: {
        backgroundColor: "#62b771",
        color: "#fff"
      },
      className: "jsx-1261272773" + " " + "card-panel card-panel-location"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "col s9"
    }, __jsx("h3", {
      className: "jsx-1261272773" + " " + "h4 truncate"
    }, "Tutor Doctor"), __jsx("h4", {
      className: "jsx-1261272773" + " " + "sub-title"
    }, "Tutor Doctor - Austin, TX")), __jsx("div", {
      className: "jsx-1261272773" + " " + "col s3"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "row icons-row"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "col"
    }, __jsx("span", {
      className: "jsx-1261272773" + " " + "block-icon"
    }, __jsx("i", {
      className: "jsx-1261272773" + " " + "icon-location"
    }), __jsx("span", {
      className: "jsx-1261272773" + " " + "text-icon"
    }, "Location"))), __jsx("div", {
      className: "jsx-1261272773" + " " + "dropdown-block col"
    }, __jsx("a", {
      href: "#",
      className: "jsx-1261272773" + " " + "dropdown-trigger btn"
    }, __jsx("i", {
      className: "jsx-1261272773" + " " + "material-icons dots-icon"
    }, "more_vert")), __jsx("ul", {
      id: "dropdown105",
      className: "jsx-1261272773" + " " + "dropdown-content dropdown-wide"
    }, __jsx("li", {
      className: "jsx-1261272773"
    }, __jsx("a", {
      href: "#modal_location_edit",
      className: "jsx-1261272773" + " " + "modal-trigger link-block"
    }, "Edit")), __jsx("li", {
      className: "jsx-1261272773"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-1261272773"
    }, "Clone")), __jsx("li", {
      className: "jsx-1261272773"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-1261272773"
    }, "Delete"))))))))), __jsx("div", {
      className: "jsx-1261272773" + " " + "card-main card-location card card-large"
    }, __jsx("div", {
      style: {
        backgroundColor: "#62b771",
        color: "#fff"
      },
      className: "jsx-1261272773" + " " + "card-panel card-panel-location"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "col s9"
    }, __jsx("h3", {
      className: "jsx-1261272773" + " " + "h4 truncate"
    }, "Tutor Doctor"), __jsx("h4", {
      className: "jsx-1261272773" + " " + "sub-title"
    }, "Tutor Doctor - Dallas, TX")), __jsx("div", {
      className: "jsx-1261272773" + " " + "col s3"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "row icons-row"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "col"
    }, __jsx("span", {
      className: "jsx-1261272773" + " " + "block-icon"
    }, __jsx("i", {
      className: "jsx-1261272773" + " " + "icon-location"
    }), __jsx("span", {
      className: "jsx-1261272773" + " " + "text-icon"
    }, "Location"))), __jsx("div", {
      className: "jsx-1261272773" + " " + "dropdown-block col"
    }, __jsx("a", {
      href: "#",
      className: "jsx-1261272773" + " " + "dropdown-trigger btn"
    }, __jsx("i", {
      className: "jsx-1261272773" + " " + "material-icons dots-icon"
    }, "more_vert")), __jsx("ul", {
      id: "dropdown106",
      className: "jsx-1261272773" + " " + "dropdown-content dropdown-wide"
    }, __jsx("li", {
      className: "jsx-1261272773"
    }, __jsx("a", {
      href: "#modal_location_edit",
      className: "jsx-1261272773" + " " + "modal-trigger link-block"
    }, "Edit")), __jsx("li", {
      className: "jsx-1261272773"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-1261272773"
    }, "Clone")), __jsx("li", {
      className: "jsx-1261272773"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-1261272773"
    }, "Delete"))))))))), __jsx("div", {
      className: "jsx-1261272773" + " " + "add-box"
    }, __jsx("div", {
      className: "jsx-1261272773" + " " + "add-box-holder"
    }, __jsx("a", {
      className: "jsx-1261272773" + " " + "btn-floating waves-effect waves-light green lighten-1"
    }, __jsx("i", {
      className: "jsx-1261272773" + " " + "material-icons"
    }, "add")))))))), __jsx("div", {
      className: "jsx-1261272773" + " " + "modal-footer"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-1261272773" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Delete"), __jsx("a", {
      href: "#!",
      onClick: onCloseEditModal,
      className: "jsx-1261272773" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-1261272773" + " " + "btn"
    }, "Save"))))))))), __jsx(style_default.a, {
      id: "1261272773"
    }, [".overlay.jsx-1261272773{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-1261272773{margin:0;border-radius:6px;}", "#modal_Location1.jsx-1261272773{border-radius:6px;}", ".modal.jsx-1261272773{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-1261272773{opacity:1;visibility:visible;}", ".modal-footer.jsx-1261272773{background-color:white;}"]));
  }

}

/* harmony default export */ var components_EditModal = (EditModal_EditModal);
// CONCATENATED MODULE: ./components/Student/components/StudentCard/index.js

var StudentCard_jsx = external_react_default.a.createElement;





const data = (current, target, initial) => ({
  datasets: [{
    data: [current - initial, target - initial - (current - initial)],
    backgroundColor: ['#0085ce', '#eaeaea']
  }]
});

class StudentCard_StudentCard extends external_react_default.a.Component {
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

    Object(defineProperty["a" /* default */])(this, "onOpenEditModal", () => {
      this.props.onCloseDropdown();
      this.setState({
        editModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(this, "onCloseEditModal", () => this.setState({
      editModalOpen: false
    }));

    this.state = {
      editModalOpen: false,
      cloneModalOpen: false,
      showOwnerModalOpen: false,
      deleteModalOpen: false,
      activateAccountModalOpen: false,
      assignInstructorModalOpen: false
    };
  }

  render() {
    const {
      onHandleStudentCard,
      onSaveStudentChanges,
      onDeleteStudent,
      onCloneStudent,
      index,
      dropdownIndex,
      student,
      student: {
        id,
        active,
        tutor,
        testScores: {
          initialScore,
          currentScore
        },
        courseContext: {
          targetScore
        },
        studentInformation: {
          firstName,
          lastName
        },
        emailAddress: {
          email
        }
      },
      dropdownIsOpen
    } = this.props;
    const {
      editModalOpen
    } = this.state;
    return StudentCard_jsx(external_react_default.a.Fragment, null, StudentCard_jsx(components_EditModal, {
      open: editModalOpen,
      onSaveStudentChanges: onSaveStudentChanges,
      onCloseEditModal: this.onCloseEditModal,
      student: student,
      handleDetailsChange: this.handleDetailsChange
    }), StudentCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5",
      id: id
    }, StudentCard_jsx("div", {
      className: active ? "card-main card-location card card-large" : "card-main card-location card-disabled card-large card"
    }, StudentCard_jsx("div", {
      className: "owner-box card-panel card-panel-panel card-panel-large",
      style: {
        backgroundColor: active ? '#0085ce' : '#9b9b9b',
        color: '#fff'
      }
    }, StudentCard_jsx("div", {
      className: "card-panel-row row"
    }, StudentCard_jsx("div", {
      className: "col s9"
    }, StudentCard_jsx("div", {
      className: "user-block"
    }, StudentCard_jsx("div", {
      className: "user-circle",
      style: {
        backgroundColor: active ? '#14b14b' : '#808080',
        color: '#fff',
        height: '45px'
      }
    }, StudentCard_jsx("img", {
      src: "#",
      alt: ""
    })), StudentCard_jsx("div", {
      className: "user-text",
      style: {
        color: '#fff'
      }
    }, StudentCard_jsx("h4", {
      className: "h3"
    }, StudentCard_jsx("a", {
      href: "#",
      value: student,
      onClick: () => onHandleStudentCard({
        index
      })
    }, lastName, ", ", firstName)), StudentCard_jsx("a", {
      href: `mailto:${email}`
    }, email)))), StudentCard_jsx("div", {
      className: "col s2 right-align"
    }, StudentCard_jsx("span", {
      className: "block-icon"
    }, StudentCard_jsx("i", {
      className: "icon-user"
    }), StudentCard_jsx("span", {
      className: "text-icon"
    }, "Student"))), StudentCard_jsx("div", {
      className: "col s1 right-align"
    }, StudentCard_jsx("div", {
      className: "row icons-row"
    }, StudentCard_jsx("div", {
      className: "dropdown-block col"
    }, StudentCard_jsx("a", {
      href: "#",
      className: "dropdown-trigger btn",
      "data-target": "dropdown01",
      onClick: this.handleDropdownClick
    }, StudentCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? StudentCard_jsx("ul", {
      id: "dropdown01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: "block",
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, StudentCard_jsx("li", null, StudentCard_jsx("a", {
      href: "#",
      className: "modal-trigger link-block",
      onClick: this.onOpenEditModal
    }, "Edit")), StudentCard_jsx("li", null, StudentCard_jsx("a", {
      href: "#!",
      onClick: () => onCloneStudent(index)
    }, "Clone")), StudentCard_jsx("li", null, StudentCard_jsx("a", {
      href: "#!"
    }, "Show Owner")), StudentCard_jsx("li", null, StudentCard_jsx("a", {
      href: "#!",
      onClick: () => onDeleteStudent(index)
    }, "Delete"))) : null))))), StudentCard_jsx("div", {
      className: "card-content",
      ref: this.studentCard
    }, StudentCard_jsx("div", {
      className: "row d-flex align-items-center mb-0"
    }, StudentCard_jsx("div", {
      className: "col s12 m6"
    }, StudentCard_jsx("div", {
      className: "chart-container chart-container-large"
    }, StudentCard_jsx("div", {
      className: "chart-holder"
    }, active ? StudentCard_jsx(external_react_chartjs_2_["Doughnut"], {
      data: () => data(currentScore, targetScore, initialScore),
      height: 210,
      options: {
        circumference: 1.45 * Math.PI,
        rotation: -3.85,
        cutoutPercentage: 60,
        tooltips: false
      }
    }) : null, StudentCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: "#0085ce",
        bottom: "7px"
      }
    }, StudentCard_jsx("span", {
      "data-count-up": true,
      "data-start-val": initialScore,
      "data-end-val": currentScore,
      "data-duration": "1"
    }, currentScore))), StudentCard_jsx("div", {
      className: "chart-row"
    }, StudentCard_jsx("div", {
      className: "chart-col chart-start"
    }, StudentCard_jsx("span", {
      className: "amount",
      style: {
        color: '#0085ce'
      }
    }, initialScore), StudentCard_jsx("span", {
      className: "amount-text"
    }, "\xA0 initial")), StudentCard_jsx("div", {
      className: "chart-col chart-end"
    }, StudentCard_jsx("span", {
      className: "amount"
    }, targetScore), StudentCard_jsx("span", {
      className: "amount-text"
    }, "\xA0 target"))))), StudentCard_jsx("div", {
      className: "col s12 m6"
    }, StudentCard_jsx("ul", {
      className: "points-list-bordered"
    }, StudentCard_jsx("li", {
      className: "style-green"
    }, StudentCard_jsx("span", {
      className: "badge-circle"
    }, "61"), StudentCard_jsx("span", {
      className: "point-text"
    }, "complete")), StudentCard_jsx("li", {
      className: "style-red"
    }, StudentCard_jsx("span", {
      className: "badge-circle"
    }, "7"), StudentCard_jsx("span", {
      className: "point-text"
    }, "overdue")), StudentCard_jsx("li", {
      className: "style-orange"
    }, StudentCard_jsx("span", {
      className: "badge-circle"
    }, "3"), StudentCard_jsx("span", {
      className: "point-text"
    }, "practice tests")), StudentCard_jsx("li", {
      className: "style-blue-lighter"
    }, StudentCard_jsx("span", {
      className: "badge-circle"
    }, StudentCard_jsx("span", null, "17"), " ", StudentCard_jsx("span", {
      className: "of"
    }, "of 23")), StudentCard_jsx("span", {
      className: "point-text"
    }, "sessions"))))), StudentCard_jsx("div", {
      className: "card-inner-row"
    }, StudentCard_jsx("div", {
      className: "row-holder"
    }, StudentCard_jsx("ul", {
      className: "category-list"
    }, StudentCard_jsx("li", {
      className: "category-box"
    }, StudentCard_jsx("span", {
      className: "category-badge badge-purple"
    }), StudentCard_jsx("span", {
      className: "category-text"
    }, tutor)))))))));
  }

}

;
/* harmony default export */ var components_StudentCard = (StudentCard_StudentCard);
// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/utils/sampleQuestions.js
/* harmony default export */ var sampleQuestions = ([{
  id: 1,
  hasVideo: false,
  questionType: 'Challenge',
  questionNumber: 1,
  topic: 'Special Right Triangles',
  difficulty: 'Easy',
  studentNotes: '1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes',
  passage: `Question 1-10 are based on the following passage.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `This is the start of another passage.
    Why do we use it?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `Question three!
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `Fourth passage sample.
    Why do we use it?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `Question three!
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `Fourth passage sample.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
// CONCATENATED MODULE: ./components/Student/utils/sampleStudentList.js

const sampleStudentList = [{
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
      id: 1,
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      id: 2,
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      id: 3,
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructor: {
    instructors: [{
      id: 1,
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      id: 2,
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  tutor: "Jason Bourne",
  course: {
    classes: []
  },
  scoredTests: [{
    id: 1,
    status: 'complete',
    testType: 'real',
    title: 'May 2019',
    testDate: '05/12/2019',
    dueDate: '',
    completionDate: '',
    completionTime: '',
    disabled: false,
    available: true,
    weekNumber: '',
    version: '',
    initialScore: '1050',
    targetScore: '1500',
    currentScore: '1245',
    totalGain: '132',
    flags: ['', '', ''],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '376',
      totalGain: '73'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '310',
      totalGain: '73'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '681',
      totalGain: '101'
    }]
  }, {
    id: 2,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 3,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: true,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 4,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/02/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: false,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 5,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '08/02/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '',
    totalGain: '',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '',
      totalGain: ''
    }]
  }],
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1400',
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
    initialScore: '1040',
    currentScore: '1300',
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
  totalScore: '1300',
  totalPossible: '1600',
  sectionScores: {
    readingAndWriting: '710',
    math: '650',
    totalPossible: '800'
  },
  essayScores: {
    reading: '7',
    analysis: '6',
    writing: '7',
    totalPossible: '8'
  },
  crossTestScores: '24',
  subScores: {
    commandOfEvidence: '5',
    wordsInContext: '12',
    expressionOfIdeas: '12',
    standardEnglishConventions: '14',
    heartOfAlgebra: '10',
    problemSolvingAndDataAnalysis: '10',
    passportToAdvancedMath: '13',
    totalPossible: '15'
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
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
    id: 1,
    subject: 'Reading',
    lessonName: 'Reading Something 1',
    status: "Scheduled",
    scoreStatus: '',
    assigned: true,
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '17 min',
    score: "",
    passage: '128',
    dueDate: '',
    dueTime: "",
    completed: false,
    availableDate: '10/02/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: ' Not Started',
    unit: 'Reading Unit #1',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 20
  }, {
    id: 2,
    subject: 'Math',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    status: "Started",
    scoreStatus: '',
    alerts: [],
    reviewedAlerts: [{}, {}],
    timeEstimate: '20 min',
    score: "",
    passage: '132',
    dueDate: '07/01/2019',
    dueTime: '4:00 PM',
    completed: false,
    availableDate: '12/31/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
    flags: [],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Math Unit #1',
    type: 'Challenge + Practice',
    completedProblems: 3,
    problems: 16
  }, {
    id: 3,
    subject: 'Reading',
    lessonName: 'More Reading Stuff',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Beginning',
    alerts: [{}, {}, {}, {}, {}],
    reviewedAlerts: [],
    timeEstimate: '16 min',
    score: '8',
    passage: '141',
    dueDate: '07/05/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '09/01/2018',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #2',
    type: 'Read from the Book',
    completedProblems: 10,
    problems: 10
  }, {
    id: 4,
    subject: 'Reading',
    lessonName: 'Reading Something 7',
    assigned: true,
    status: "Scheduled",
    scoreStatus: "",
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '15 min',
    score: "",
    passage: '127',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #2',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 17
  }, {
    id: 5,
    subject: 'Reading',
    lessonName: 'Reading Something 4',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Accomplished',
    alerts: [{}],
    reviewedAlerts: [{}],
    timeEstimate: '18 min',
    score: 16,
    passage: '120',
    dueDate: '01/04/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '08/04/2018',
    completionDate: '12/31/2018',
    completionTime: '2:38 PM',
    completedLate: false,
    overdue: false,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #1',
    type: 'Challenge + Practice',
    completedProblems: 17,
    problems: 17
  }, {
    id: 6,
    subject: 'Reading',
    lessonName: 'Reading Something 5',
    assigned: true,
    status: "Overdue",
    scoreStatus: "",
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '20 min',
    score: "",
    passage: '141',
    dueDate: '05/31/2019',
    dueTime: '4:00 PM',
    completed: false,
    availableDate: '01/01/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #3',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 22
  }, {
    id: 7,
    subject: 'Reading',
    lessonName: 'Reading Something 1',
    assigned: true,
    status: "Complete",
    scoreStatus: "Developing",
    alerts: [{}],
    reviewedAlerts: [{}, {}, {}],
    timeEstimate: '25 min',
    score: '20',
    passage: '136',
    dueDate: '04/31/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '01/01/2019',
    completionDate: '04/30/2019',
    completionTime: '2:00 PM',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Completed',
    unit: 'Reading Unit #3',
    type: 'Challenge + Practice',
    completedProblems: 29,
    problems: 29
  }, {
    id: 8,
    subject: 'Writing',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Exemplary',
    alerts: [{}, {}],
    reviewedAlerts: [],
    timeEstimate: '14 min',
    score: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '06/01/2018',
    completionDate: '11/23/201818',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Completed',
    unit: 'Writing Unit #1',
    type: 'Homework Drill',
    completedProblems: 14,
    problems: 14
  }, {
    id: 9,
    subject: 'Writing',
    lessonName: 'Writing Lesson 11',
    assigned: false,
    status: "Unassigned",
    scoreStatus: '',
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '14 min',
    score: '',
    passage: '250',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '04/02/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Writing Unit #2',
    type: 'Homework Drill',
    completedProblems: "",
    problems: 14
  }]
}, {
  id: '1233',
  active: true,
  studentInformation: {
    firstName: 'JJ',
    lastName: 'Abrams',
    gender: 'Male'
  },
  contactInformation: {
    phone: '8888888888',
    addressLine1: '123 Sesame Street',
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
      id: 1,
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      id: 2,
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      id: 3,
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructor: {
    instructors: [{
      id: 1,
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      id: 2,
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  tutor: "James Bond",
  course: {
    classes: []
  },
  scoredTests: [{
    id: 1,
    status: 'complete',
    testType: 'real',
    title: 'May 2019',
    testDate: '05/12/2019',
    dueDate: '',
    completionDate: '',
    completionTime: '',
    disabled: false,
    available: true,
    weekNumber: '',
    version: '',
    initialScore: '1050',
    targetScore: '1500',
    currentScore: '1245',
    totalGain: '132',
    flags: ['', '', ''],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '376',
      totalGain: '73'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '310',
      totalGain: '73'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '681',
      totalGain: '101'
    }]
  }, {
    id: 2,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 3,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: true,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 4,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/02/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: false,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 5,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '08/02/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '',
    totalGain: '',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '',
      totalGain: ''
    }]
  }],
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1250',
    highSchool: 'Everglades High',
    graduationYear: '2019'
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
    progress: '65',
    improvement: '84',
    lessons: '66',
    instruction: '66',
    practiceTests: '45'
  },
  nextSession: '07/15/2019',
  overdueWork: {
    lessons: '10',
    worksheets: '4',
    quizzes: '2',
    practiceTests: '6'
  },
  summary: {
    questionsAnswered: '750',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '950',
    currentScore: '1080',
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
    },
    totalScore: '1080',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
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
    id: 1,
    subject: 'Reading',
    lessonName: 'Reading Something 1',
    status: "Scheduled",
    scoreStatus: '',
    assigned: true,
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '17 min',
    score: "",
    passage: '128',
    dueDate: '',
    dueTime: "",
    completed: false,
    availableDate: '10/02/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: ' Not Started',
    unit: 'Reading Unit #1',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 20
  }, {
    id: 2,
    subject: 'Math',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    status: "Started",
    scoreStatus: '',
    alerts: [],
    reviewedAlerts: [{}, {}],
    timeEstimate: '20 min',
    score: "",
    passage: '132',
    dueDate: '07/01/2019',
    dueTime: '4:00 PM',
    completed: false,
    availableDate: '12/31/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
    flags: [],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Math Unit #1',
    type: 'Challenge + Practice',
    completedProblems: 3,
    problems: 16
  }, {
    id: 3,
    subject: 'Reading',
    lessonName: 'More Reading Stuff',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Beginning',
    alerts: [{}, {}, {}, {}, {}],
    reviewedAlerts: [],
    timeEstimate: '16 min',
    score: '8',
    passage: '141',
    dueDate: '07/05/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '09/01/2018',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #2',
    type: 'Read from the Book',
    completedProblems: 10,
    problems: 10
  }, {
    id: 4,
    subject: 'Reading',
    lessonName: 'Reading Something 7',
    assigned: true,
    status: "Scheduled",
    scoreStatus: "",
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '15 min',
    score: "",
    passage: '127',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #2',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 17
  }, {
    id: 5,
    subject: 'Reading',
    lessonName: 'Reading Something 4',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Accomplished',
    alerts: [{}],
    reviewedAlerts: [{}],
    timeEstimate: '18 min',
    score: 16,
    passage: '120',
    dueDate: '01/04/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '08/04/2018',
    completionDate: '12/31/2018',
    completionTime: '2:38 PM',
    completedLate: false,
    overdue: false,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #1',
    type: 'Challenge + Practice',
    completedProblems: 17,
    problems: 17
  }, {
    id: 6,
    subject: 'Reading',
    lessonName: 'Reading Something 5',
    assigned: true,
    status: "Overdue",
    scoreStatus: "",
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '20 min',
    score: "",
    passage: '141',
    dueDate: '05/31/2019',
    dueTime: '4:00 PM',
    completed: false,
    availableDate: '01/01/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #3',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 22
  }, {
    id: 7,
    subject: 'Reading',
    lessonName: 'Reading Something 1',
    assigned: true,
    status: "Complete",
    scoreStatus: "Developing",
    alerts: [{}],
    reviewedAlerts: [{}, {}, {}],
    timeEstimate: '25 min',
    score: '20',
    passage: '136',
    dueDate: '04/31/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '01/01/2019',
    completionDate: '04/30/2019',
    completionTime: '2:00 PM',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Completed',
    unit: 'Reading Unit #3',
    type: 'Challenge + Practice',
    completedProblems: 29,
    problems: 29
  }, {
    id: 8,
    subject: 'Writing',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Exemplary',
    alerts: [{}, {}],
    reviewedAlerts: [],
    timeEstimate: '14 min',
    score: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '06/01/2018',
    completionDate: '11/23/201818',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Completed',
    unit: 'Writing Unit #1',
    type: 'Homework Drill',
    completedProblems: 14,
    problems: 14
  }, {
    id: 9,
    subject: 'Writing',
    lessonName: 'Writing Lesson 11',
    assigned: false,
    status: "Unassigned",
    scoreStatus: '',
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '14 min',
    score: '',
    passage: '250',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '04/02/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Writing Unit #2',
    type: 'Homework Drill',
    completedProblems: "",
    problems: 14
  }]
}, {
  id: '1234',
  active: false,
  studentInformation: {
    firstName: 'Caroline',
    lastName: 'Ingalls',
    gender: 'female'
  },
  contactInformation: {
    phone: '4448885598',
    addressLine1: '123 Baker Street',
    addressLine2: '',
    city: 'Paris',
    state: 'ID',
    zipCode: '88775'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
    locations: [{
      id: 1,
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      id: 2,
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      id: 3,
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructor: {
    instructors: [{
      id: 1,
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      id: 2,
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  tutor: "Jason Bourne",
  course: {
    classes: []
  },
  scoredTests: [{
    id: 1,
    status: 'complete',
    testType: 'real',
    title: 'May 2019',
    testDate: '05/12/2019',
    dueDate: '',
    completionDate: '',
    completionTime: '',
    disabled: false,
    available: true,
    weekNumber: '',
    version: '',
    initialScore: '1050',
    targetScore: '1500',
    currentScore: '1245',
    totalGain: '132',
    flags: ['', '', ''],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '376',
      totalGain: '73'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '310',
      totalGain: '73'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '681',
      totalGain: '101'
    }]
  }, {
    id: 2,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 3,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: true,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 4,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/02/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: false,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 5,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '08/02/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '',
    totalGain: '',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '',
      totalGain: ''
    }]
  }],
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1500',
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
    initialScore: '900',
    currentScore: '1080',
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
    },
    totalScore: '1080',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
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
    id: 1,
    subject: 'Reading',
    lessonName: 'Reading Something 1',
    status: "Scheduled",
    scoreStatus: '',
    assigned: true,
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '17 min',
    score: "",
    passage: '128',
    dueDate: '',
    dueTime: "",
    completed: false,
    availableDate: '10/02/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: ' Not Started',
    unit: 'Reading Unit #1',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 20
  }, {
    id: 2,
    subject: 'Math',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    status: "Started",
    scoreStatus: '',
    alerts: [],
    reviewedAlerts: [{}, {}],
    timeEstimate: '20 min',
    score: "",
    passage: '132',
    dueDate: '07/01/2019',
    dueTime: '4:00 PM',
    completed: false,
    availableDate: '12/31/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
    flags: [],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Math Unit #1',
    type: 'Challenge + Practice',
    completedProblems: 3,
    problems: 16
  }, {
    id: 3,
    subject: 'Reading',
    lessonName: 'More Reading Stuff',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Beginning',
    alerts: [{}, {}, {}, {}, {}],
    reviewedAlerts: [],
    timeEstimate: '16 min',
    score: '8',
    passage: '141',
    dueDate: '07/05/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '09/01/2018',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #2',
    type: 'Read from the Book',
    completedProblems: 10,
    problems: 10
  }, {
    id: 4,
    subject: 'Reading',
    lessonName: 'Reading Something 7',
    assigned: true,
    status: "Scheduled",
    scoreStatus: "",
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '15 min',
    score: "",
    passage: '127',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #2',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 17
  }, {
    id: 5,
    subject: 'Reading',
    lessonName: 'Reading Something 4',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Accomplished',
    alerts: [{}],
    reviewedAlerts: [{}],
    timeEstimate: '18 min',
    score: 16,
    passage: '120',
    dueDate: '01/04/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '08/04/2018',
    completionDate: '12/31/2018',
    completionTime: '2:38 PM',
    completedLate: false,
    overdue: false,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #1',
    type: 'Challenge + Practice',
    completedProblems: 17,
    problems: 17
  }, {
    id: 6,
    subject: 'Reading',
    lessonName: 'Reading Something 5',
    assigned: true,
    status: "Overdue",
    scoreStatus: "",
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '20 min',
    score: "",
    passage: '141',
    dueDate: '05/31/2019',
    dueTime: '4:00 PM',
    completed: false,
    availableDate: '01/01/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #3',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 22
  }, {
    id: 7,
    subject: 'Reading',
    lessonName: 'Reading Something 1',
    assigned: true,
    status: "Complete",
    scoreStatus: "Developing",
    alerts: [{}],
    reviewedAlerts: [{}, {}, {}],
    timeEstimate: '25 min',
    score: '20',
    passage: '136',
    dueDate: '04/31/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '01/01/2019',
    completionDate: '04/30/2019',
    completionTime: '2:00 PM',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Completed',
    unit: 'Reading Unit #3',
    type: 'Challenge + Practice',
    completedProblems: 29,
    problems: 29
  }, {
    id: 8,
    subject: 'Writing',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Exemplary',
    alerts: [{}, {}],
    reviewedAlerts: [],
    timeEstimate: '14 min',
    score: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '06/01/2018',
    completionDate: '11/23/201818',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Completed',
    unit: 'Writing Unit #1',
    type: 'Homework Drill',
    completedProblems: 14,
    problems: 14
  }, {
    id: 9,
    subject: 'Writing',
    lessonName: 'Writing Lesson 11',
    assigned: false,
    status: "Unassigned",
    scoreStatus: '',
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '14 min',
    score: '',
    passage: '250',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '04/02/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Writing Unit #2',
    type: 'Homework Drill',
    completedProblems: "",
    problems: 14
  }]
}, {
  id: '1236',
  active: true,
  studentInformation: {
    firstName: 'Bob',
    lastName: 'Ross',
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
      id: 1,
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      id: 2,
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      id: 3,
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructor: {
    instructors: [{
      id: 1,
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      id: 2,
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  tutor: "James Bond",
  course: {
    classes: []
  },
  scoredTests: [{
    id: 1,
    status: 'complete',
    testType: 'real',
    title: 'May 2019',
    testDate: '05/12/2019',
    dueDate: '',
    completionDate: '',
    completionTime: '',
    disabled: false,
    available: true,
    weekNumber: '',
    version: '',
    initialScore: '1050',
    targetScore: '1500',
    currentScore: '1245',
    totalGain: '132',
    flags: ['', '', ''],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '376',
      totalGain: '73'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '310',
      totalGain: '73'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '681',
      totalGain: '101'
    }]
  }, {
    id: 2,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 3,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: true,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 4,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/02/19',
    dueDate: '05/05/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: false,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '702',
      totalGain: '98'
    }]
  }, {
    id: 5,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '08/02/19',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '',
    totalGain: '',
    flags: [],
    subjects: [{
      subject: 'Reading',
      targetScore: '400',
      currentScore: '332',
      totalGain: '81'
    }, {
      subject: 'Writing',
      targetScore: '400',
      currentScore: '291',
      totalGain: '65'
    }, {
      subject: 'Math',
      targetScore: '800',
      currentScore: '',
      totalGain: ''
    }]
  }],
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1450',
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
    initialScore: '1040',
    currentScore: '1270',
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
    },
    totalScore: '1270',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
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
    id: 1,
    subject: 'Reading',
    lessonName: 'Reading Something 1',
    status: "Scheduled",
    scoreStatus: '',
    assigned: true,
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '17 min',
    score: "",
    passage: '128',
    dueDate: '',
    dueTime: "",
    completed: false,
    availableDate: '10/02/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: ' Not Started',
    unit: 'Reading Unit #1',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 20
  }, {
    id: 2,
    subject: 'Math',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    status: "Started",
    scoreStatus: '',
    alerts: [],
    reviewedAlerts: [{}, {}],
    timeEstimate: '20 min',
    score: "",
    passage: '132',
    dueDate: '07/01/2019',
    dueTime: '4:00 PM',
    completed: false,
    availableDate: '12/31/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
    flags: [],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Math Unit #1',
    type: 'Challenge + Practice',
    completedProblems: 3,
    problems: 16
  }, {
    id: 3,
    subject: 'Reading',
    lessonName: 'More Reading Stuff',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Beginning',
    alerts: [{}, {}, {}, {}, {}],
    reviewedAlerts: [],
    timeEstimate: '16 min',
    score: '8',
    passage: '141',
    dueDate: '07/05/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '09/01/2018',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #2',
    type: 'Read from the Book',
    completedProblems: 10,
    problems: 10
  }, {
    id: 4,
    subject: 'Reading',
    lessonName: 'Reading Something 7',
    assigned: true,
    status: "Scheduled",
    scoreStatus: "",
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '15 min',
    score: "",
    passage: '127',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #2',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 17
  }, {
    id: 5,
    subject: 'Reading',
    lessonName: 'Reading Something 4',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Accomplished',
    alerts: [{}],
    reviewedAlerts: [{}],
    timeEstimate: '18 min',
    score: 16,
    passage: '120',
    dueDate: '01/04/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '08/04/2018',
    completionDate: '12/31/2018',
    completionTime: '2:38 PM',
    completedLate: false,
    overdue: false,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #1',
    type: 'Challenge + Practice',
    completedProblems: 17,
    problems: 17
  }, {
    id: 6,
    subject: 'Reading',
    lessonName: 'Reading Something 5',
    assigned: true,
    status: "Overdue",
    scoreStatus: "",
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '20 min',
    score: "",
    passage: '141',
    dueDate: '05/31/2019',
    dueTime: '4:00 PM',
    completed: false,
    availableDate: '01/01/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true,
    classType: 'tutoring',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #3',
    type: 'Challenge + Practice',
    completedProblems: "",
    problems: 22
  }, {
    id: 7,
    subject: 'Reading',
    lessonName: 'Reading Something 1',
    assigned: true,
    status: "Complete",
    scoreStatus: "Developing",
    alerts: [{}],
    reviewedAlerts: [{}, {}, {}],
    timeEstimate: '25 min',
    score: '20',
    passage: '136',
    dueDate: '04/31/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '01/01/2019',
    completionDate: '04/30/2019',
    completionTime: '2:00 PM',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Completed',
    unit: 'Reading Unit #3',
    type: 'Challenge + Practice',
    completedProblems: 29,
    problems: 29
  }, {
    id: 8,
    subject: 'Writing',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    status: "Complete",
    scoreStatus: 'Exemplary',
    alerts: [{}, {}],
    reviewedAlerts: [],
    timeEstimate: '14 min',
    score: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '06/01/2018',
    completionDate: '11/23/201818',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Completed',
    unit: 'Writing Unit #1',
    type: 'Homework Drill',
    completedProblems: 14,
    problems: 14
  }, {
    id: 9,
    subject: 'Writing',
    lessonName: 'Writing Lesson 11',
    assigned: false,
    status: "Unassigned",
    scoreStatus: '',
    alerts: [],
    reviewedAlerts: [],
    timeEstimate: '14 min',
    score: '',
    passage: '250',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '04/02/2019',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    classType: 'class',
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
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: sampleQuestions,
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Writing Unit #2',
    type: 'Homework Drill',
    completedProblems: "",
    problems: 14
  }]
}];
/* harmony default export */ var utils_sampleStudentList = (sampleStudentList);
// EXTERNAL MODULE: ./components/utils/locationOptions.js
var locationOptions = __webpack_require__("KnbY");

// EXTERNAL MODULE: ./components/utils/sortOptions.js
var sortOptions = __webpack_require__("OI+E");

// CONCATENATED MODULE: ./components/Student/ListPage/Components/FilterSection/index.js

var FilterSection_jsx = external_react_default.a.createElement;







class FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onHandleFilterClick", filter => {
      const {
        activeFilters: currentActiveFilters
      } = this.state;
      let activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = external_immutability_helper_default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        const filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = external_immutability_helper_default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        activeFilters
      });
    });

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      activeFilters: []
    }));

    Object(defineProperty["a" /* default */])(this, "submitNameFilter", () => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;
      const {
        name
      } = this.state;

      if (name === '') {
        onUnsetFilteredState();
      }

      const transformedName = name.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterChange", (event, name) => {
      const {
        onSetFilteredLocationState,
        onUnsetFilteredLocationState,
        onSetSort
      } = this.props;
      const value = event.target ? event.target.value : event;
      const updatedState = external_immutability_helper_default()(this.state, {
        $merge: {
          [name]: value
        }
      });
      this.setState(updatedState);

      if (name === 'location') {
        if (event === '') {
          return onUnsetFilteredLocationState();
        }

        return onSetFilteredLocationState(event);
      } else if (name === 'sort') {
        return onSetSort(event);
      }
    });

    this.state = {
      open: false,
      name: '',
      location: {},
      sort: {},
      activeFilters: []
    };
  } // eslint-disable-next-line consistent-return


  render() {
    // eslint-disable-next-line no-unused-vars
    const {
      name,
      location,
      sort,
      open,
      activeFilters
    } = this.state;
    return FilterSection_jsx("div", {
      className: "filter-form-holder"
    }, FilterSection_jsx("ul", {
      className: "collapsible expandable"
    }, FilterSection_jsx("li", null, FilterSection_jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, FilterSection_jsx("div", {
      className: "filter-form_checkbox-list-holder"
    }, FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "activated",
      checked: activeFilters.indexOf("activated") !== -1,
      onChange: () => this.onHandleFilterClick('activated')
    }), FilterSection_jsx("label", {
      htmlFor: "activated"
    }, "Activated")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "unactivated",
      checked: activeFilters.indexOf("unactivated") !== -1,
      onChange: () => this.onHandleFilterClick('unactivated')
    }), FilterSection_jsx("label", {
      htmlFor: "unactivated"
    }, "Unactivated")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "expired",
      checked: activeFilters.indexOf("expired") !== -1,
      onChange: () => this.onHandleFilterClick('expired')
    }), FilterSection_jsx("label", {
      htmlFor: "expired"
    }, "Expired"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "current",
      checked: activeFilters.indexOf("current") !== -1,
      onChange: () => this.onHandleFilterClick('current')
    }), FilterSection_jsx("label", {
      htmlFor: "current"
    }, "Current")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "archived",
      checked: activeFilters.indexOf("archived") !== -1,
      onChange: () => this.onHandleFilterClick('archived')
    }), FilterSection_jsx("label", {
      htmlFor: "archived"
    }, "Archived"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "no-gain",
      checked: activeFilters.indexOf("no-gain") !== -1,
      onChange: () => this.onHandleFilterClick('no-gain')
    }), FilterSection_jsx("label", {
      htmlFor: "no-gain"
    }, "No Gain")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "some-gain",
      checked: activeFilters.indexOf("some-gain") !== -1,
      onChange: () => this.onHandleFilterClick('some-gain')
    }), FilterSection_jsx("label", {
      htmlFor: "some-gain"
    }, "Some Gain")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "gain-100+",
      checked: activeFilters.indexOf("gain-100+") !== -1,
      onChange: () => this.onHandleFilterClick('gain-100+')
    }), FilterSection_jsx("label", {
      htmlFor: "gain-100+"
    }, "Gain of 100+")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "gain-200+",
      checked: activeFilters.indexOf("gain-200+") !== -1,
      onChange: () => this.onHandleFilterClick('gain-200+')
    }), FilterSection_jsx("label", {
      htmlFor: "gain-200+"
    }, "Gain of 200+"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "hit-target-score",
      checked: activeFilters.indexOf("hit-target-score") !== -1,
      onChange: () => this.onHandleFilterClick('hit-target-score')
    }), FilterSection_jsx("label", {
      htmlFor: "hit-target-score"
    }, "Hit Target Score")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "hasnt-hit-target-score",
      checked: activeFilters.indexOf("hasnt-hit-target-score") !== -1,
      onChange: () => this.onHandleFilterClick('hasnt-hit-target-score')
    }), FilterSection_jsx("label", {
      htmlFor: "hasnt-hit-target-score"
    }, "Hasn\u2019t Hit Target Score"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "no-tests",
      checked: activeFilters.indexOf("no-tests") !== -1,
      onChange: () => this.onHandleFilterClick('tests')
    }), FilterSection_jsx("label", {
      htmlFor: "no-tests"
    }, "No Tests")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "1-test",
      checked: activeFilters.indexOf("1-test") !== -1,
      onChange: () => this.onHandleFilterClick('1-test')
    }), FilterSection_jsx("label", {
      htmlFor: "1-test"
    }, "1 Test")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "2-test",
      checked: activeFilters.indexOf("2-test") !== -1,
      onChange: () => this.onHandleFilterClick('2-test')
    }), FilterSection_jsx("label", {
      htmlFor: "2-test"
    }, "2 Tests")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "3-test",
      checked: activeFilters.indexOf("3-test") !== -1,
      onChange: () => this.onHandleFilterClick('3-test')
    }), FilterSection_jsx("label", {
      htmlFor: "3-test"
    }, "3+ Tests"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "has-overdue-work",
      checked: activeFilters.indexOf("has-overdue-work") !== -1,
      onChange: () => this.onHandleFilterClick('has-overdue-work')
    }), FilterSection_jsx("label", {
      htmlFor: "has-overdue-work"
    }, "Has Overdue Work")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "unreviewed-flags",
      checked: activeFilters.indexOf("unreviewed-flags") !== -1,
      onChange: () => this.onHandleFilterClick('unreviewed-flags')
    }), FilterSection_jsx("label", {
      htmlFor: "unreviewed-flags"
    }, "Unreviewed Flags"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "sessions-this-week",
      checked: activeFilters.indexOf("sessions-this-week") !== -1,
      onChange: () => this.onHandleFilterClick('sessions-this-week')
    }), FilterSection_jsx("label", {
      htmlFor: "sessions-this-week"
    }, "Sessions This Week")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "session-today",
      checked: activeFilters.indexOf("session-today") !== -1,
      onChange: () => this.onHandleFilterClick('session-today')
    }), FilterSection_jsx("label", {
      htmlFor: "session-today"
    }, "Session Today")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "no-sessions",
      checked: activeFilters.indexOf("no-sessions") !== -1,
      onChange: () => this.onHandleFilterClick('no-sessions')
    }), FilterSection_jsx("label", {
      htmlFor: "no-sessions"
    }, "No Sessions Scheduled"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "entered-actual-score",
      checked: activeFilters.indexOf("entered-actual-score") !== -1,
      onChange: () => this.onHandleFilterClick('entered-actual-score')
    }), FilterSection_jsx("label", {
      htmlFor: "entered-actual-score"
    }, "Entered Actual Score")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "no-actual-score",
      checked: activeFilters.indexOf("no-actual-score") !== -1,
      onChange: () => this.onHandleFilterClick('no-actual-score')
    }), FilterSection_jsx("label", {
      htmlFor: "no-actual-score"
    }, "No Actual Score"))))), FilterSection_jsx("div", {
      className: "filter-inputs-holder"
    }, FilterSection_jsx("div", {
      className: "col s12 18",
      style: {
        marginTop: '-30px',
        marginBottom: '-10px'
      }
    }, FilterSection_jsx("div", {
      className: "row mb-0"
    }, FilterSection_jsx("div", {
      className: "col s12 m3"
    }, FilterSection_jsx("div", {
      className: "search-field input-field",
      style: {
        marginTop: '50px'
      }
    }, FilterSection_jsx("input", {
      type: "search",
      id: "name_search",
      className: "input-control validate",
      name: "name",
      value: name,
      onChange: event => this.handleFilterChange(event, 'name')
    }), FilterSection_jsx("button", {
      type: "submit",
      className: "search-button",
      onClick: this.onFilterByName
    }, FilterSection_jsx("i", {
      className: "icon-search"
    })), FilterSection_jsx("label", {
      className: name.length ? 'label active' : 'label',
      htmlFor: "name_search"
    }, "Search"))), FilterSection_jsx("div", {
      className: "col s12 m3"
    }, FilterSection_jsx("div", {
      className: "input-field"
    }, FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(location, locationOptions["a" /* default */]),
      onChange: event => this.handleFilterChange(event, 'location'),
      options: locationOptions["a" /* default */],
      label: "Location",
      stateKey: "location",
      dropdownKey: "location"
    }))), FilterSection_jsx("div", {
      className: "col s12 m3"
    }, FilterSection_jsx("div", {
      className: "input-field"
    }, FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, sortOptions["a" /* default */]),
      onChange: event => this.handleFilterChange(event, 'sort'),
      options: sortOptions["a" /* default */],
      label: "Sort",
      stateKey: "sort",
      dropdownKey: "sort"
    })))), FilterSection_jsx("div", {
      className: "col s12 14"
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
    }, open ? 'Hide Filters' : 'Open Filters'))))))))));
  }

}

/* harmony default export */ var Components_FilterSection = (FilterSection_FilterSection);
// EXTERNAL MODULE: ./components/utils/genderOptions.js
var genderOptions = __webpack_require__("QvYC");

// EXTERNAL MODULE: ./components/Location/components/LocationCard/index.js
var LocationCard = __webpack_require__("2Gwb");

// CONCATENATED MODULE: ./components/Student/components/StudentModal/components/Location/index.js
var Location_jsx = external_react_default.a.createElement;



const Location = ({
  locations,
  onOpenLocationModal,
  onRemoveLocation
}) => Location_jsx(external_react_default.a.Fragment, null, Location_jsx("div", {
  className: "card-block"
}, Location_jsx("h3", null, "Location(s)"), locations.length > 0 && locations.map((location, index) => Location_jsx(LocationCard["a" /* default */], {
  location: location,
  onRemoveLocation: () => onRemoveLocation(index)
}))), Location_jsx("div", {
  className: "add-box"
}, Location_jsx("div", {
  className: "add-box-holder"
}, Location_jsx("a", {
  href: "#",
  lassName: "btn-floating waves-effect waves-light green lighten-1",
  onClick: onOpenLocationModal
}, Location_jsx("i", {
  className: "material-icons"
}, "add")))));

/* harmony default export */ var components_Location = (Location);
// CONCATENATED MODULE: ./components/Student/components/StudentModal/index.js

var StudentModal_jsx = external_react_default.a.createElement;






 // eslint-disable-next-line react/prefer-stateless-function

class StudentModal_StudentModal extends external_react_default.a.Component {
  render() {
    const {
      state,
      open,
      handleChange,
      onSave,
      onClose,
      onOpenLocationModal,
      onRemoveLocation,
      onDeleteNewStudent
    } = this.props;
    return StudentModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "overlay"
    }, StudentModal_jsx("div", {
      id: "modal_user_edit",
      className: "jsx-3963704857" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, StudentModal_jsx("form", {
      action: "#",
      className: "jsx-3963704857" + " " + "custom-form"
    }, StudentModal_jsx("fieldset", {
      className: "jsx-3963704857"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-modal card-main card grey lighten-3"
    }, StudentModal_jsx("div", {
      style: {
        backgroundColor: "#31837a",
        color: "#fff"
      },
      className: "jsx-3963704857" + " " + "owner-box card-panel card-panel-title"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-panel-row row"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "col s9"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "user-block"
    }, StudentModal_jsx("div", {
      style: {
        backgroundColor: "#0085ce",
        color: "#fff"
      },
      className: "jsx-3963704857" + " " + "user-circle"
    }, StudentModal_jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "",
      className: "jsx-3963704857"
    })), StudentModal_jsx("div", {
      style: {
        color: "#fff"
      },
      className: "jsx-3963704857" + " " + "user-text"
    }, StudentModal_jsx("h4", {
      className: "jsx-3963704857" + " " + "h3"
    }, "Ownerly, Jennifer"), StudentModal_jsx("a", {
      href: "mailto:jen.ownerly@gmail.com",
      className: "jsx-3963704857"
    }, "jen.ownerly@gmail.com")))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "col"
    }, StudentModal_jsx("span", {
      className: "jsx-3963704857" + " " + "block-icon"
    }, StudentModal_jsx("i", {
      className: "jsx-3963704857" + " " + "icon-owner"
    }), StudentModal_jsx("span", {
      className: "jsx-3963704857" + " " + "text-icon"
    }, "Owner"))))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-content"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-body"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "col s12 l6"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-block"
    }, StudentModal_jsx("h3", {
      className: "jsx-3963704857"
    }, "Account Info"), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-main card"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-content"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field col s12"
    }, StudentModal_jsx("input", {
      type: "text",
      id: "firstName",
      name: "firstName",
      value: state.studentInformation.firstName,
      onChange: event => handleChange(event, 'firstName', 'studentInformation'),
      className: "jsx-3963704857"
    }), StudentModal_jsx("label", {
      htmlFor: "firstName",
      className: "jsx-3963704857" + " " + "label"
    }, "First Name*"))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field col s12"
    }, StudentModal_jsx("input", {
      type: "text",
      id: "lastName",
      name: "lastName",
      value: state.studentInformation.lastName,
      onChange: event => handleChange(event, 'lastName', 'studentInformation'),
      className: "jsx-3963704857"
    }), StudentModal_jsx("label", {
      htmlFor: "lastName",
      className: "jsx-3963704857" + " " + "label"
    }, "Last Name*"))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field col s12"
    }, StudentModal_jsx("input", {
      type: "text",
      id: "email",
      name: "email",
      value: state.emailAddress.email,
      onChange: event => handleChange(event, 'email', 'emailAddress'),
      className: "jsx-3963704857"
    }), StudentModal_jsx("label", {
      htmlFor: "email",
      className: "jsx-3963704857" + " " + "label"
    }, "Email Address*"))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + ""
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field col s12 l7"
    }, StudentModal_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(state.studentInformation.gender, genderOptions["a" /* default */]),
      onChange: event => handleChange(event, 'gender', 'studentInformation'),
      options: genderOptions["a" /* default */],
      label: "Gender",
      stateKey: "state",
      dropdownKey: "state"
    }))))))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-block"
    }, StudentModal_jsx("h3", {
      className: "jsx-3963704857"
    }, "Contact Info"), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-main card"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "card-content"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field col s12"
    }, StudentModal_jsx("input", {
      type: "tel",
      id: "phone",
      name: "phone",
      value: state.contactInformation.phone,
      onChange: event => handleChange(event, 'phone', 'contactInformation'),
      className: "jsx-3963704857"
    }), StudentModal_jsx("label", {
      htmlFor: "phone",
      className: "jsx-3963704857" + " " + "label"
    }, "Phone (optional)"))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field col s12"
    }, StudentModal_jsx("input", {
      type: "text",
      id: "address",
      name: "address",
      value: state.contactInformation.addressLine1,
      onChange: event => handleChange(event, 'addressLine1', 'contactInformation'),
      className: "jsx-3963704857"
    }), StudentModal_jsx("label", {
      htmlFor: "address",
      className: "jsx-3963704857" + " " + "label"
    }, "Street Address (optional)"))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field col s12"
    }, StudentModal_jsx("input", {
      type: "text",
      id: "city",
      name: "city",
      value: state.contactInformation.city,
      onChange: event => handleChange(event, 'city', 'contactInformation'),
      className: "jsx-3963704857"
    }), StudentModal_jsx("label", {
      htmlFor: "city",
      className: "jsx-3963704857" + " " + "label"
    }, "City (optional)"))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "row mb-0"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "col s12 m6 l5"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field"
    }, StudentModal_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(state.contactInformation.state, stateOptions["a" /* default */]),
      onChange: event => handleChange(event, 'state', 'contactInformation'),
      options: stateOptions["a" /* default */],
      label: "State",
      stateKey: "state",
      dropdownKey: "state"
    }))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "col s12 m6 l7"
    }, StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "input-field"
    }, StudentModal_jsx("input", {
      type: "tel",
      name: "zipCode",
      id: "zipCode",
      value: state.contactInformation.zipCode,
      onChange: event => handleChange(event, 'zipCode', 'contactInformation'),
      className: "jsx-3963704857"
    }), StudentModal_jsx("label", {
      htmlFor: "zipCode",
      className: "jsx-3963704857" + " " + "label"
    }, "Zip (optional)")))))))), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "col s12 l6"
    }, StudentModal_jsx(components_Location, {
      locations: state.location.locations,
      onOpenLocationModal: onOpenLocationModal,
      onRemoveLocation: onRemoveLocation
    }), StudentModal_jsx("div", {
      className: "jsx-3963704857" + " " + "modal-footer"
    }, StudentModal_jsx("a", {
      href: "#!",
      onClick: onDeleteNewStudent,
      className: "jsx-3963704857" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Delete"), StudentModal_jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-3963704857" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
    }, "Cancel"), StudentModal_jsx("a", {
      href: "#",
      onClick: onSave,
      className: "jsx-3963704857" + " " + "btn"
    }, "Save"))))))))))), StudentModal_jsx(style_default.a, {
      id: "3963704857"
    }, [".overlay.jsx-3963704857{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-3963704857{margin:0;border-radius:6px;}", "#modal_Location1.jsx-3963704857{border-radius:6px;}", ".modal.jsx-3963704857{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-3963704857{opacity:1;visibility:visible;}", ".modal-footer.jsx-3963704857{background-color:white;}"]));
  }

}

;
/* harmony default export */ var components_StudentModal = (StudentModal_StudentModal);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Toast/styles/index.js

const ToastWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ToastWrapper",
  componentId: "f1vbvd-0"
})([".update-success{background-color:#31837a;}.progress-bar-success{background-color:#fff;}"]);
/* harmony default export */ var styles = (ToastWrapper);
// CONCATENATED MODULE: ./components/Toast/index.js
var Toast_jsx = external_react_default.a.createElement;





class Toast_Toast extends external_react_default.a.Component {
  // eslint-disable-line
  render() {
    return Toast_jsx(styles, null, Toast_jsx(external_react_toastify_["ToastContainer"], {
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

}

/* harmony default export */ var components_Toast = (Toast_Toast);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/StudentInformation/index.js
var StudentInformation_jsx = external_react_default.a.createElement;





const StudentInformation = ({
  state: {
    firstName,
    lastName,
    gender
  },
  handleDetailsChange
}) => StudentInformation_jsx("div", {
  className: "card-block"
}, StudentInformation_jsx("h2", null, "Student Information"), StudentInformation_jsx("div", {
  className: "card"
}, StudentInformation_jsx("div", {
  className: "card-content"
}, StudentInformation_jsx("div", {
  className: "row mb-0"
}, StudentInformation_jsx("div", {
  className: "input-field col s12 focus-blue"
}, StudentInformation_jsx("input", {
  type: "text",
  id: "first_name",
  name: "firstName",
  value: firstName,
  onChange: event => handleDetailsChange(event, 'firstName', 'studentInformation')
}), StudentInformation_jsx("label", {
  className: firstName.length ? 'label active' : 'label',
  htmlFor: "first_name"
}, "First Name"))), StudentInformation_jsx("div", {
  className: "row mb-0"
}, StudentInformation_jsx("div", {
  className: "input-field col s12 focus-blue"
}, StudentInformation_jsx("input", {
  type: "text",
  id: "last_name",
  name: "lastName",
  value: lastName,
  onChange: event => handleDetailsChange(event, 'lastName', 'studentInformation')
}), StudentInformation_jsx("label", {
  className: lastName.length ? 'label active' : 'label',
  htmlFor: "last_name"
}, "Last Name"))), StudentInformation_jsx("div", {
  className: "row mb-0"
}, StudentInformation_jsx("div", {
  className: "input-field col s6 l5 focus-blue"
}, StudentInformation_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(gender, genderOptions["a" /* default */]),
  onChange: event => handleDetailsChange(event, 'gender', 'studentInformation'),
  options: genderOptions["a" /* default */],
  label: "Gender",
  stateKey: "gender",
  dropdownKey: "gender"
}))))));

/* harmony default export */ var components_StudentInformation = (StudentInformation);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/ContactInformation/index.js
var ContactInformation_jsx = external_react_default.a.createElement;





const ContactInformation = ({
  state: {
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode
  },
  handleDetailsChange
}) => ContactInformation_jsx("div", {
  className: "card-block"
}, ContactInformation_jsx("h2", null, "Contact Information (optional)"), ContactInformation_jsx("div", {
  className: "card"
}, ContactInformation_jsx("div", {
  className: "card-content"
}, ContactInformation_jsx("div", {
  className: "row mb-0"
}, ContactInformation_jsx("div", {
  className: "input-field col s12 focus-blue"
}, ContactInformation_jsx("input", {
  type: "tel",
  id: "phone",
  name: "phone",
  value: phone,
  onChange: event => handleDetailsChange(event, 'phone', 'contactInformation')
}), ContactInformation_jsx("label", {
  className: phone.length ? 'label active' : 'label',
  htmlFor: "phone"
}, "Phone"), ContactInformation_jsx("span", {
  className: "note"
}, "*Optional"))), ContactInformation_jsx("div", {
  className: "row mb-0"
}, ContactInformation_jsx("div", {
  className: "input-field col s12 focus-blue"
}, ContactInformation_jsx("input", {
  type: "text",
  id: "address_line_1",
  name: "addressLine1",
  value: addressLine1,
  onChange: event => handleDetailsChange(event, 'addressLine1', 'contactInformation')
}), ContactInformation_jsx("label", {
  className: addressLine1.length ? 'label active' : 'label',
  htmlFor: "address_line_1"
}, "Address Line 1*"), ContactInformation_jsx("span", {
  className: "note"
}, "*Optional"))), ContactInformation_jsx("div", {
  className: "row mb-0"
}, ContactInformation_jsx("div", {
  className: "input-field col s12 focus-blue"
}, ContactInformation_jsx("input", {
  type: "text",
  id: "address_line_2",
  name: "addressLine2",
  value: addressLine2,
  onChange: event => handleDetailsChange(event, 'addressLine2', 'contactInformation')
}), ContactInformation_jsx("label", {
  className: addressLine2.length ? 'label active' : 'label',
  htmlFor: "address_line_2"
}, "Address Line 2*"), ContactInformation_jsx("span", {
  className: "note"
}, "*Optional"))), ContactInformation_jsx("div", {
  className: "row mb-0"
}, ContactInformation_jsx("div", {
  className: "input-field col s12 focus-blue"
}, ContactInformation_jsx("input", {
  type: "text",
  id: "city",
  name: "city",
  value: city,
  onChange: event => handleDetailsChange(event, 'city', 'contactInformation')
}), ContactInformation_jsx("label", {
  className: city.length ? 'label active' : 'label',
  htmlFor: "city"
}, "City"), ContactInformation_jsx("span", {
  className: "note"
}, "*Optional"))), ContactInformation_jsx("div", {
  className: "row mb-0"
}, ContactInformation_jsx("div", {
  className: "col s6 l5"
}, ContactInformation_jsx("div", {
  className: "input-field focus-blue"
}, ContactInformation_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(state, stateOptions["a" /* default */]),
  onChange: event => handleDetailsChange(event, 'state', 'contactInformation'),
  options: stateOptions["a" /* default */],
  label: "State",
  stateKey: "state",
  dropdownKey: "state"
}), ContactInformation_jsx("span", {
  className: "note"
}, "*Optional"))), ContactInformation_jsx("div", {
  className: "col s6 l7"
}, ContactInformation_jsx("div", {
  className: "input-field focus-blue"
}, ContactInformation_jsx("input", {
  type: "text",
  id: "zip_code",
  name: "zipCode",
  value: zipCode,
  onChange: event => handleDetailsChange(event, 'zipCode', 'contactInformation')
}), ContactInformation_jsx("label", {
  className: zipCode.length ? 'label active' : 'label',
  htmlFor: "zip_code"
}, "Zip"), ContactInformation_jsx("span", {
  className: "note"
}, "*Optional")))))));

/* harmony default export */ var components_ContactInformation = (ContactInformation);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/EmailAddress/index.js
var EmailAddress_jsx = external_react_default.a.createElement;


const EmailAddress = ({
  state: {
    email
  },
  handleDetailsChange
}) => EmailAddress_jsx("div", {
  className: "card-block"
}, EmailAddress_jsx("h2", null, "Email Address"), EmailAddress_jsx("div", {
  className: "card"
}, EmailAddress_jsx("div", {
  className: "card-content"
}, EmailAddress_jsx("div", {
  className: "row mb-0"
}, EmailAddress_jsx("div", {
  className: "input-field col s12 focus-blue"
}, EmailAddress_jsx("input", {
  type: "email",
  id: "email",
  name: "email",
  value: email,
  onChange: event => handleDetailsChange(event, 'email', 'emailAddress')
}), EmailAddress_jsx("label", {
  className: email.length ? 'label active' : 'label',
  htmlFor: "email"
}, "Email*"), EmailAddress_jsx("span", {
  className: "note"
}, "*Optional"))), EmailAddress_jsx("p", {
  className: "text"
}, "A valid student email address is required for most student functions. You may create an account without an email address, but until a valid email address is entered, the student will not receive the requisite welcome email and cannot login to the system."))));

/* harmony default export */ var components_EmailAddress = (EmailAddress);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/Location/index.js
var components_Location_jsx = external_react_default.a.createElement;



const Location_Location = ({
  state: {
    locations
  },
  onOpenLocationModal,
  onRemoveLocation
}) => components_Location_jsx("div", {
  className: "card-block"
}, components_Location_jsx("h3", null, "Location"), components_Location_jsx("div", {
  className: "card card-instructor"
}, components_Location_jsx("div", {
  className: "card-content"
}, components_Location_jsx("div", {
  className: "text-block"
}, components_Location_jsx("p", null, "Depending on your settings, you may have more than one location/branch. The student\u2019s location a\uFB00ects which managers have access to this student. ")), components_Location_jsx("div", {
  className: "box-scrollable"
}, components_Location_jsx("div", {
  className: "height-15 jcf-scrollable"
}, components_Location_jsx("div", {
  className: "card-location-holder",
  style: {
    height: '100%',
    overflowY: 'scroll'
  }
}, !locations.length && components_Location_jsx("div", {
  className: "add-class-box"
}), locations.map((location, index) => components_Location_jsx(LocationCard["a" /* default */], {
  location: location,
  key: location.id,
  onRemoveLocation: () => onRemoveLocation(index, 'location', 'locations')
}))))), components_Location_jsx("div", {
  className: "card-footer right-align"
}, components_Location_jsx("a", {
  href: "#",
  onClick: onOpenLocationModal,
  className: "modal-trigger link-block"
}, "Add Location")))));

/* harmony default export */ var AccountPage_components_Location = (Location_Location);
// EXTERNAL MODULE: ./components/Instructor/components/InstructorCard/index.js
var InstructorCard = __webpack_require__("i1q9");

// CONCATENATED MODULE: ./components/Student/AccountPage/components/Instructor/index.js
var Instructor_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/img-redundant-alt */



const Instructor = ({
  state: {
    instructors
  },
  onOpenInstructorModal,
  onRemoveInstructor
}) => Instructor_jsx("div", {
  className: "card-block"
}, Instructor_jsx("h3", null, "Instructor"), Instructor_jsx("div", {
  className: "card card-instructor"
}, Instructor_jsx("div", {
  className: "card-content"
}, Instructor_jsx("div", {
  className: "text-block"
}, Instructor_jsx("p", null, "Add one or more instructors to the list below. Each instructor can manage the student\u2019s course.")), Instructor_jsx("div", {
  className: "box-scrollable"
}, Instructor_jsx("div", {
  className: "height-15 jcf-scrollable"
}, Instructor_jsx("div", {
  className: "card-location-holder",
  style: {
    height: '100%',
    overflowY: 'scroll'
  }
}, !instructors.length && Instructor_jsx("div", {
  className: "add-class-box"
}), instructors.map((instructor, index) => Instructor_jsx(InstructorCard["a" /* default */], {
  instructor: instructor,
  key: instructor.id,
  onRemoveInstructor: () => onRemoveInstructor(index, 'instructor', 'instructors')
}))))), Instructor_jsx("div", {
  className: "card-footer right-align"
}, Instructor_jsx("a", {
  href: "#",
  onClick: onOpenInstructorModal,
  className: "modal-trigger link-block"
}, "Add Instructor")))));

/* harmony default export */ var components_Instructor = (Instructor);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/Class/components/ClassCard/index.js
var ClassCard_jsx = external_react_default.a.createElement;


const ClassCard = ({
  course: {
    className,
    classLocation
  },
  index,
  onRemoveClass
}) => ClassCard_jsx("div", {
  className: "card-panel card-panel-panel card-panel-large",
  style: {
    backgroundColor: '#62b771',
    color: '#fff'
  }
}, ClassCard_jsx("a", {
  href: "#",
  className: "close-link icon-close-thin",
  onClick: () => onRemoveClass(index, 'location', 'locations')
}), ClassCard_jsx("div", {
  className: "card-panel-row row"
}, ClassCard_jsx("div", {
  className: "col s10"
}, ClassCard_jsx("h3", {
  className: "h4 truncate"
}, className), ClassCard_jsx("h4", {
  className: "sub-title"
}, classLocation)), ClassCard_jsx("div", {
  className: "col s2 right-align"
}, ClassCard_jsx("span", {
  className: "block-icon"
}, ClassCard_jsx("i", {
  className: "icon-location"
}), ClassCard_jsx("span", {
  className: "text-icon"
}, "Class")))));

/* harmony default export */ var components_ClassCard = (ClassCard);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/Class/index.js
var Class_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/img-redundant-alt */



const Class = ({
  state: {
    classes
  },
  onOpenClassModal,
  onRemoveClass
}) => Class_jsx("div", {
  className: "card-block"
}, Class_jsx("h3", null, "Class"), Class_jsx("div", {
  className: "card card-instructor"
}, Class_jsx("div", {
  className: "card-content"
}, Class_jsx("div", {
  className: "text-block"
}, Class_jsx("p", null, "If this student is in a class, add it here. When a student is a member of a class, he or she will automatically be assigned all the classwork. ")), Class_jsx("div", {
  className: "box-scrollable"
}, Class_jsx("div", {
  className: "height-20 jcf-scrollable"
}, Class_jsx("div", {
  className: "card-location-holder"
}, !classes.length && Class_jsx("div", {
  className: "add-class-box"
}), classes.map((course, index) => Class_jsx(components_ClassCard, {
  course: course,
  key: course.className,
  index: index,
  onRemoveClass: onRemoveClass
}))))), Class_jsx("div", {
  className: "card-footer right-align"
}, Class_jsx("a", {
  href: "#",
  onClick: onOpenClassModal,
  className: "modal-trigger link-block"
}, "Add Class")))));

/* harmony default export */ var components_Class = (Class);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/AccountStatus/index.js
var AccountStatus_jsx = external_react_default.a.createElement;


const AccountStatus = ({
  state: {
    licenseCode,
    status,
    activationDate,
    expirationDate
  }
}) => AccountStatus_jsx("div", {
  className: "col s12 l5"
}, AccountStatus_jsx("div", {
  className: "card-block"
}, AccountStatus_jsx("h2", null, "Account Status"), AccountStatus_jsx("div", {
  className: "card"
}, AccountStatus_jsx("div", {
  className: "card-content"
}, AccountStatus_jsx("div", {
  className: "row mb-0"
}, AccountStatus_jsx("div", {
  className: "input-field account-status_input col s12 focus-blue"
}, AccountStatus_jsx("input", {
  type: "text",
  id: "license-code",
  name: "licenseCode",
  defaultValue: licenseCode,
  readOnly: ""
}), AccountStatus_jsx("label", {
  className: "label active",
  htmlFor: "code"
}, "License Code"))), AccountStatus_jsx("div", {
  className: "row mb-0"
}, AccountStatus_jsx("div", {
  className: "input-field account-status_input col s12 focus-blue"
}, AccountStatus_jsx("input", {
  type: "text",
  id: "status",
  name: "status",
  defaultValue: status,
  readOnly: ""
}), AccountStatus_jsx("label", {
  className: "label active",
  htmlFor: "status"
}, "Status"))), AccountStatus_jsx("div", {
  className: "row mb-0"
}, AccountStatus_jsx("div", {
  className: "input-field account-status_input col s12 focus-blue"
}, AccountStatus_jsx("input", {
  type: "text",
  id: "activation-date",
  name: "activationDate",
  defaultValue: activationDate,
  readOnly: ""
}), AccountStatus_jsx("label", {
  className: "label active",
  htmlFor: "activation-date"
}, "Activation Date"))), AccountStatus_jsx("div", {
  className: "row mb-0"
}, AccountStatus_jsx("div", {
  className: "input-field account-status_input col s12 focus-blue"
}, AccountStatus_jsx("input", {
  type: "text",
  id: "expiration-date",
  name: "expirationDate",
  defaultValue: expirationDate,
  readOnly: ""
}), AccountStatus_jsx("label", {
  className: "label active",
  htmlFor: "expiration-date"
}, "Expiration Date")))))));

/* harmony default export */ var components_AccountStatus = (AccountStatus);
// CONCATENATED MODULE: ./components/utils/licenseTypeOptions.js
/* harmony default export */ var licenseTypeOptions = ({
  classMember: {
    name: 'Class Member',
    description: `This license type allows the student to participate in a course with 4 or more other students. The coursework may be customized for the class as a whole, but not for individual students within the class.
    To conduct a course for an individual student in a one-on-one format (tutoring), you need a “one-on-one” license type.
    `
  },
  oneOnOne: {
    name: 'One-On-One',
    description: `This license type allows the student to participate in a course with 4 or more other students. The coursework may be customized for the class as a whole, but not for individual students within the class.
    To conduct a course for an individual student in a one-on-one format (tutoring), you need a “one-on-one” license type.
    `
  }
});
// CONCATENATED MODULE: ./components/Student/AccountPage/components/AccountType/index.js
var AccountType_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/img-redundant-alt */



const AccountType = ({
  state: {
    licenseType
  }
}) => AccountType_jsx("div", {
  className: "col s12 l5"
}, AccountType_jsx("div", {
  className: "card-block"
}, AccountType_jsx("h2", null, "Account Type"), AccountType_jsx("div", {
  className: "card"
}, AccountType_jsx("div", {
  className: "card-content"
}, AccountType_jsx("div", {
  className: "account-type-block"
}, AccountType_jsx("div", {
  className: "account-type-block_holder"
}, AccountType_jsx("div", {
  className: "head-box"
}, AccountType_jsx("h3", null, AccountType_jsx("span", null, "License Type"), " ", licenseTypeOptions[licenseType].name)), AccountType_jsx("div", {
  className: "picture-holder"
}, AccountType_jsx("img", {
  src: "images/img-01.png",
  alt: "image description"
})), AccountType_jsx("p", null, licenseTypeOptions[licenseType].description)))))));

/* harmony default export */ var components_AccountType = (AccountType);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/Student/AccountPage/components/CourseContext/index.js
var CourseContext_jsx = external_react_default.a.createElement;




const DatePicker = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "SdOD")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("SdOD")],
    modules: ['../../../../FormComponents/DatePicker']
  }
});
const startDateOptions = [{
  label: 'First Assignment Date (Default)',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];
const endDateOptions = [{
  label: 'First Assignment Date (Default)',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];
const targetTestDateOptions = [{
  label: 'October 6, 2018',
  value: 'firstAssignmentDate'
}, {
  label: 'Second Option',
  value: 'secondOption'
}, {
  label: 'Third Option',
  value: 'thirdOption'
}];

const CourseContext = ({
  state: {
    courseStartDateOption,
    courseStartDate,
    courseEndDateOption,
    courseEndDate,
    targetTestDate,
    targetScore,
    highSchool,
    graduationYear
  },
  handleDetailsChange
}) => CourseContext_jsx("div", {
  className: "row mb-0 one-large-col d-flex-content"
}, CourseContext_jsx("div", {
  className: "col s12"
}, CourseContext_jsx("div", {
  className: "card-block"
}, CourseContext_jsx("h2", null, "Course Context"), CourseContext_jsx("div", {
  className: "card"
}, CourseContext_jsx("div", {
  className: "card-content"
}, CourseContext_jsx("div", {
  className: "course-context_two-col"
}, CourseContext_jsx("div", {
  className: "column"
}, CourseContext_jsx("div", {
  className: "row mb-0"
}, CourseContext_jsx("div", {
  className: "col s12"
}, CourseContext_jsx("div", {
  className: "input-field focus-blue"
}, CourseContext_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(courseStartDateOption, startDateOptions),
  onChange: event => handleDetailsChange(event, 'courseStartDateOption', 'courseContext'),
  options: startDateOptions,
  label: "Course Start Date",
  stateKey: "courseStartDateOption",
  dropdownKey: "courseStartDateOption"
})))), CourseContext_jsx("div", {
  className: "row"
}, CourseContext_jsx("div", {
  className: "col s4"
}, CourseContext_jsx("div", {
  className: "datepicker-field input-field"
}, CourseContext_jsx("i", {
  className: "icon-calendar-dark"
}), CourseContext_jsx(DatePicker, {
  selected: courseStartDate,
  id: "course_start_date",
  onChange: event => handleDetailsChange(event, 'courseStartDate', 'courseContext')
})))), CourseContext_jsx("div", {
  className: "row mb-0"
}, CourseContext_jsx("div", {
  className: "col s12"
}, CourseContext_jsx("div", {
  className: "input-field focus-blue"
}, CourseContext_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(courseEndDateOption, endDateOptions),
  onChange: event => handleDetailsChange(event, 'courseEndDateOption', 'courseContext'),
  options: endDateOptions,
  label: "Course End Date",
  stateKey: "courseEndDateOption",
  dropdownKey: "courseEndDateOption"
})))), CourseContext_jsx("div", {
  className: "row"
}, CourseContext_jsx("div", {
  className: "col s4"
}, CourseContext_jsx("div", {
  className: "datepicker-field input-field"
}, CourseContext_jsx("i", {
  className: "icon-calendar-dark"
}), CourseContext_jsx(DatePicker, {
  selected: courseEndDate,
  id: "course_end_date",
  onChange: event => handleDetailsChange(event, 'courseEndDate', 'courseContext')
}))))), CourseContext_jsx("div", {
  className: "column"
}, CourseContext_jsx("div", {
  className: "row"
}, CourseContext_jsx("div", {
  className: "col s12 m6 l8"
}, CourseContext_jsx("div", {
  className: "input-field focus-blue"
}, CourseContext_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(targetTestDate, targetTestDateOptions),
  onChange: event => handleDetailsChange(event, 'targetTestDate', 'courseContext'),
  options: targetTestDateOptions,
  label: "Target Test Date*",
  stateKey: "targetTestDate",
  dropdownKey: "targetTestDate"
}), CourseContext_jsx("span", {
  className: "note"
}, "*Optional"))), CourseContext_jsx("div", {
  className: "col s12 m6 l4"
}, CourseContext_jsx("div", {
  className: "input-field focus-blue"
}, CourseContext_jsx("input", {
  type: "text",
  id: "target_score",
  name: "targetScore",
  value: targetScore,
  onChange: event => handleDetailsChange(event, 'targetScore', 'courseContext')
}), CourseContext_jsx("label", {
  className: targetScore.length ? 'label active' : 'label',
  htmlFor: "target_score"
}, "Target Score*"), CourseContext_jsx("span", {
  className: "note"
}, "*Optional")))), CourseContext_jsx("div", {
  className: "row"
}, CourseContext_jsx("div", {
  className: "col s12"
}, CourseContext_jsx("div", {
  className: "input-field focus-blue"
}, CourseContext_jsx("input", {
  type: "text",
  id: "high_school",
  name: "highSchool",
  value: highSchool,
  onChange: event => handleDetailsChange(event, 'highSchool', 'courseContext')
}), CourseContext_jsx("label", {
  className: highSchool.length ? 'label active' : 'label',
  htmlFor: "high_school"
}, "High School*"), CourseContext_jsx("span", {
  className: "note"
}, "*Optional")))), CourseContext_jsx("div", {
  className: "row mb-0"
}, CourseContext_jsx("div", {
  className: "col s12"
}, CourseContext_jsx("div", {
  className: "input-field focus-blue"
}, CourseContext_jsx("input", {
  type: "text",
  id: "graduation_year",
  name: "graduationYear",
  value: graduationYear,
  onChange: event => handleDetailsChange(event, 'graduationYear', 'courseContext')
}), CourseContext_jsx("label", {
  className: graduationYear.length ? 'label active' : 'label',
  htmlFor: "graduation_year"
}, "Graduation Year*"), CourseContext_jsx("span", {
  className: "note"
}, "*Optional")))))))))));

/* harmony default export */ var components_CourseContext = (CourseContext);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/AccountSettings/index.js
var AccountSettings_jsx = external_react_default.a.createElement;



const sessionDurationOptions = [{
  label: 'Use organization default',
  value: 'organizationDefault'
}, {
  label: 'Option 2',
  value: 'Option 2'
}, {
  label: 'Option 3',
  value: 'Option 3'
}];

const AccountSettings = ({
  state: {
    loginBeforeActivation,
    unstructuredCourseMode,
    defaultSessionDuration,
    videoSolutionsRequired,
    preventLogin,
    inactive,
    excludeFromStatistics
  },
  handleDetailsChange
}) => AccountSettings_jsx("div", {
  className: "row mb-0 one-large-col d-flex-content"
}, AccountSettings_jsx("div", {
  className: "col s12"
}, AccountSettings_jsx("div", {
  className: "card-block"
}, AccountSettings_jsx("h2", null, "Account Settings"), AccountSettings_jsx("div", {
  className: "card"
}, AccountSettings_jsx("div", {
  className: "card-content"
}, AccountSettings_jsx("div", {
  className: "course-context_two-col"
}, AccountSettings_jsx("div", {
  className: "column"
}, AccountSettings_jsx("div", {
  className: "checkbox-block"
}, AccountSettings_jsx("div", {
  className: "checkbox-holder"
}, AccountSettings_jsx("label", null, AccountSettings_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  name: "loginBeforeActivation",
  id: "",
  value: loginBeforeActivation,
  onChange: () => handleDetailsChange({}, 'loginBeforeActivation', 'accountSettings', true)
}), AccountSettings_jsx("span", {
  className: "large-label"
}, "Allow Student Login Prior to Activation")), AccountSettings_jsx("span", {
  className: "note"
}, "To enter initial practice test answers")), AccountSettings_jsx("p", null, "By default, a student may not log in until you activate the student's account. If, prior to signing up for the course, this student needs to enter his or her own answers for an initial practice test, choose this option to allow the student access. When the student completes the test, we will not reveal the score or score report, which will retain your opportunity to setup a consultation with student/parent to review the results.")), AccountSettings_jsx("div", {
  className: "checkbox-block"
}, AccountSettings_jsx("div", {
  className: "checkbox-holder"
}, AccountSettings_jsx("label", null, AccountSettings_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  name: "unstructuredCourseMode",
  id: "unstructuredCourseMode",
  value: unstructuredCourseMode,
  onChange: () => handleDetailsChange({}, 'unstructuredCourseMode', 'accountSettings', true)
}), AccountSettings_jsx("span", {
  className: "large-label"
}, "Unstructured Course Mode")), AccountSettings_jsx("span", {
  className: "note"
}, "O\uFB00 by default")), AccountSettings_jsx("p", null, "With this option selected, the student can access any lesson at any time, whether or not you've explicitly assigned it. If a student begins a lesson that you have not yet assigned, the lesson will appear on the student's planner for the day that the student begins the lesson, and no due date will be assigned.")), AccountSettings_jsx("div", {
  className: "checkbox-block"
}, AccountSettings_jsx("div", {
  className: "row mb-0"
}, AccountSettings_jsx("div", {
  className: "col s12 l8"
}, AccountSettings_jsx("div", {
  className: "input-field focus-blue"
}, AccountSettings_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(defaultSessionDuration, sessionDurationOptions),
  onChange: event => handleDetailsChange(event, 'defaultSessionDuration', 'accountSettings'),
  options: sessionDurationOptions,
  label: "Default Session Duration",
  stateKey: "defaultSessionDuration",
  dropdownKey: "defaultSessionDuration"
})))))), AccountSettings_jsx("div", {
  className: "column"
}, AccountSettings_jsx("div", {
  className: "checkbox-block"
}, AccountSettings_jsx("div", {
  className: "checkbox-holder"
}, AccountSettings_jsx("label", null, AccountSettings_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  name: "videoSolutionsRequired",
  id: "videoSolutionsRequired",
  value: videoSolutionsRequired,
  onChange: () => handleDetailsChange({}, 'videoSolutionsRequired', 'accountSettings', true)
}), AccountSettings_jsx("span", {
  className: "large-label"
}, "Require Students to Watch Video Solutions")), AccountSettings_jsx("span", {
  className: "note"
}, "Not recommended")), AccountSettings_jsx("p", null, "With this option is selected, the student must watch video solutions for each of the problems that he or she misses or skips before the lesson or quiz is marked complete.")), AccountSettings_jsx("div", {
  className: "checkbox-block"
}, AccountSettings_jsx("div", {
  className: "checkbox-holder"
}, AccountSettings_jsx("label", null, AccountSettings_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  name: "preventLogin",
  id: "preventLogin",
  value: preventLogin,
  onChange: preventLogin
}), AccountSettings_jsx("span", {
  className: "large-label"
}, "Prevent Login"))), AccountSettings_jsx("p", null, "Check this box to temporarily prevent this student from logging in. If this account has not yet been activated, selecting this option is unnecessary because an unactivated student cannot login anyway.")), AccountSettings_jsx("div", {
  className: "checkbox-block"
}, AccountSettings_jsx("div", {
  className: "checkbox-holder"
}, AccountSettings_jsx("label", null, AccountSettings_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  name: "inactive",
  id: "inactive",
  value: inactive,
  onChange: () => handleDetailsChange({}, 'inactive', 'accountSettings', true)
}), AccountSettings_jsx("span", {
  className: "large-label"
}, "Inactive"))), AccountSettings_jsx("p", null, "Select this option when you no longer want this student to appear on your list of current students. All student data is retained and, by default, included in instructor and global statistics. ")), AccountSettings_jsx("div", {
  className: "checkbox-block"
}, AccountSettings_jsx("div", {
  className: "checkbox-holder"
}, AccountSettings_jsx("label", null, AccountSettings_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  name: "excludeFromStatistics",
  id: "excludeFromStatistics",
  value: excludeFromStatistics,
  onChange: () => handleDetailsChange({}, 'excludeFromStatistics', 'accountSettings', true)
}), AccountSettings_jsx("span", {
  className: "large-label"
}, "Exclude from Statistics"))), AccountSettings_jsx("p", null, "Use this option to exclude this student\u2019s data from all instructor and global statistics.")))))))));

/* harmony default export */ var components_AccountSettings = (AccountSettings);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/Actions/index.js
var Actions_jsx = external_react_default.a.createElement;


const Actions = ({
  state: {
    ccAdmin,
    requireUserToChange,
    password,
    confirmPassword
  },
  handleActionsChange,
  onResetPassword,
  onSendWelcomeEmail,
  onSendPasswordResetEmail
}) => Actions_jsx("div", {
  className: "card-block"
}, Actions_jsx("h2", null, "Actions"), Actions_jsx("div", {
  className: "row mb-0 d-flex-content large sameheight"
}, Actions_jsx("div", {
  className: "col s12 l5"
}, Actions_jsx("div", {
  className: "card"
}, Actions_jsx("div", {
  className: "card-content"
}, Actions_jsx("div", {
  className: "account-block"
}, Actions_jsx("h3", null, "Welcome Email"), Actions_jsx("p", null, "Use this feature to send (or resend) a welcome email to the student. The welcome email contains login instruction and a temporary password that the student can use to login for the \uFB01rst time. Keep in mind that sending this email will automatically set a new, randomly generated password which may be confusing to the student if he or she has already received a welcome email or has already set a permanent password."), Actions_jsx("p", null, Actions_jsx("button", {
  className: "btn waves-effect waves-light bg-blue",
  name: "action",
  onClick: onSendWelcomeEmail
}, "(Re)send Welcome Email")), Actions_jsx("label", null, Actions_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  name: "ccAdmin",
  id: "cc-admin",
  value: ccAdmin,
  onChange: () => handleActionsChange({}, 'ccAdmin', true)
}), Actions_jsx("span", {
  className: "large-label"
}, "cc me at:  this_is_me@gmail.com"))), Actions_jsx("div", {
  className: "account-block"
}, Actions_jsx("h3", null, "Password Reset Email"), Actions_jsx("p", null, "The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid.."), Actions_jsx("p", null, Actions_jsx("button", {
  className: "btn waves-effect waves-light bg-blue",
  name: "action",
  onClick: onSendPasswordResetEmail
}, "Send Password Reset Email")))))), Actions_jsx("div", {
  className: "col s12 l5"
}, Actions_jsx("div", {
  className: "card"
}, Actions_jsx("div", {
  className: "card-content"
}, Actions_jsx("div", {
  className: "account-block"
}, Actions_jsx("h3", null, "Reset Password"), Actions_jsx("p", null, "The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid."), Actions_jsx("div", {
  className: "row mb-0"
}, Actions_jsx("div", {
  className: "input-field col s12 focus-blue"
}, Actions_jsx("input", {
  type: "password",
  id: "password",
  name: "password",
  value: password,
  onChange: event => handleActionsChange(event, 'password')
}), Actions_jsx("label", {
  className: password.length ? 'label active' : 'label',
  htmlFor: "password"
}, "Password"), Actions_jsx("span", {
  className: "note"
}, "6 to 20 characters"))), Actions_jsx("div", {
  className: "row mb-0"
}, Actions_jsx("div", {
  className: "input-field col s12 focus-blue"
}, Actions_jsx("input", {
  type: "password",
  id: "confirm-password",
  name: "confirmPassword",
  value: confirmPassword,
  onChange: event => handleActionsChange(event, 'confirmPassword')
}), Actions_jsx("label", {
  className: confirmPassword.length ? 'label active' : 'label',
  htmlFor: "confirm-password"
}, "Confirm Password"))), Actions_jsx("p", null, Actions_jsx("label", null, Actions_jsx("input", {
  type: "checkbox",
  className: "filled-in",
  id: "require-user-to-change",
  name: "requireUserToChange",
  value: requireUserToChange,
  onChange: () => handleActionsChange({}, 'ccAdmin', true)
}), Actions_jsx("span", {
  className: "large-label"
}, "Require user to change"))), Actions_jsx("p", null, Actions_jsx("button", {
  className: "btn waves-effect waves-light bg-blue",
  name: "action",
  onClick: onResetPassword
}, "Set Password"))))))));

/* harmony default export */ var components_Actions = (Actions);
// CONCATENATED MODULE: ./components/Student/AccountPage/components/DeleteAccount/index.js
var DeleteAccount_jsx = external_react_default.a.createElement;


const DeleteAccount = ({
  activeButton,
  onDeleteAccount
}) => DeleteAccount_jsx("div", {
  className: "row mb-0 d-flex-content large sameheight"
}, DeleteAccount_jsx("div", {
  className: "col s12 l5"
}, DeleteAccount_jsx("div", {
  className: "card-block"
}, DeleteAccount_jsx("div", {
  className: "card"
}, DeleteAccount_jsx("div", {
  className: "card-content"
}, DeleteAccount_jsx("div", {
  className: "account-block"
}, DeleteAccount_jsx("h3", null, "Delete Account"), DeleteAccount_jsx("p", null, "This option will only be available until the student account is activated.  Once activated, if you need to delete a student's account, please contact your system administrator."), DeleteAccount_jsx("p", null, DeleteAccount_jsx("button", {
  className: `btn waves-effect waves-light bg-blue ${activeButton ? '' : 'disabled'}`,
  type: "submit",
  name: "action",
  onClick: onDeleteAccount
}, "Delete Account"))))))));

/* harmony default export */ var components_DeleteAccount = (DeleteAccount);
// CONCATENATED MODULE: ./components/Student/ClassModal/components/ClassToggleCard/index.js
var ClassToggleCard_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


const ClassToggleCard = ({
  course,
  onToggleClassSelect
}) => ClassToggleCard_jsx("li", {
  onClick: () => onToggleClassSelect(course)
}, ClassToggleCard_jsx("input", {
  type: "checkbox"
}), ClassToggleCard_jsx("div", {
  className: "card-location card"
}, ClassToggleCard_jsx("div", {
  className: "owner-box card-panel card-panel-location",
  style: {
    backgroundColor: '#31837a',
    color: '#fff'
  }
}, ClassToggleCard_jsx("span", {
  className: "check-link icon-check"
}), ClassToggleCard_jsx("div", {
  className: "card-panel-row row"
}, ClassToggleCard_jsx("div", {
  className: "col s10"
}, ClassToggleCard_jsx("h3", {
  className: "h4 truncate"
}, course.className), ClassToggleCard_jsx("h4", {
  className: "sub-title"
}, course.classLocation)), ClassToggleCard_jsx("div", {
  className: "col s2 right-align"
}, ClassToggleCard_jsx("span", {
  className: "block-icon"
}, ClassToggleCard_jsx("i", {
  className: "icon-user"
}), ClassToggleCard_jsx("span", {
  className: "text-icon"
}, "Instructor")))))));

/* harmony default export */ var components_ClassToggleCard = (ClassToggleCard);
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


var ClassModal_jsx = external_react_default.a.createElement;







class ClassModal_ClassModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => this.setState({
      selectedClasses: []
    }, this.props.onClose));

    Object(defineProperty["a" /* default */])(this, "onToggleClassSelect", course => {
      const {
        selectedClasses
      } = this.state;

      if (selectedClasses.indexOf(course) === -1) {
        this.setState({
          selectedClasses: [...selectedClasses, course]
        });
      } else {
        const updatedClasses = external_immutability_helper_default()(selectedClasses, {
          $splice: [[selectedClasses.indexOf(course), 1]]
        });
        this.setState({
          selectedClasses: updatedClasses
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSaveClassChanges", () => {
      const {
        selectedClasses
      } = this.state;
      const {
        handleClassChange
      } = this.props;
      handleClassChange(selectedClasses, 'course', 'classes');
      this.onCloseModal();
    });

    this.state = {
      open: false,
      classes: sampleClasses,
      selectedClasses: []
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      classes
    } = this.state;
    return ClassModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "overlay"
    }, ClassModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCloseModal
    }, ClassModal_jsx("div", {
      id: "modal_Location1",
      className: "jsx-3776783325" + " " + "modal modal-custom modal-location"
    }, ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "card-modal card"
    }, ClassModal_jsx("div", {
      style: {
        backgroundColor: '#00456b',
        color: '#fff'
      },
      className: "jsx-3776783325" + " " + "owner-box card-panel card-panel-title"
    }, ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "card-panel-row row"
    }, ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "col"
    }, ClassModal_jsx("h3", {
      className: "jsx-3776783325"
    }, "Select Class(es)")))), ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "card-content"
    }, ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "card-body"
    }, ClassModal_jsx("span", {
      className: "jsx-3776783325" + " " + "hint"
    }, "Click to select or deselect."), ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "box-scrollable"
    }, ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "height-40 jcf-scrollable"
    }, ClassModal_jsx("div", {
      style: {
        height: '100%',
        overflowY: 'scroll'
      },
      className: "jsx-3776783325" + " " + "card-location-holder"
    }, ClassModal_jsx("ul", {
      className: "jsx-3776783325" + " " + "checkbox-list"
    }, classes.map(course => ClassModal_jsx(components_ClassToggleCard, {
      key: course.className,
      course: course,
      onToggleClassSelect: this.onToggleClassSelect
    }))))))), ClassModal_jsx("div", {
      className: "jsx-3776783325" + " " + "modal-footer"
    }, ClassModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-3776783325" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), ClassModal_jsx("a", {
      href: "#",
      onClick: this.onSaveClassChanges,
      className: "jsx-3776783325" + " " + "btn"
    }, "Add"))))))), ClassModal_jsx(style_default.a, {
      id: "3776783325"
    }, ["h4.jsx-3776783325{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", ".overlay.jsx-3776783325{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-3776783325{margin:0;border-radius:6px;}", "#modal_Location1.jsx-3776783325{border-radius:6px;}", ".modal.jsx-3776783325{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-3776783325{opacity:1;visibility:visible;}", ".modal-footer.jsx-3776783325{background-color:white;}"]));
  }

}

/* harmony default export */ var Student_ClassModal = (ClassModal_ClassModal);
// EXTERNAL MODULE: ./components/Location/components/LocationModal/index.js + 2 modules
var LocationModal = __webpack_require__("R12m");

// EXTERNAL MODULE: ./components/Instructor/components/InstructorModal/index.js + 1 modules
var InstructorModal = __webpack_require__("JyJo");

// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Student/AccountPage/index.js

var AccountPage_jsx = external_react_default.a.createElement;

/* eslint-disable no-console */

/* eslint-disable no-unused-vars */

/* eslint-disable jsx-a11y/img-redundant-alt */





















class AccountPage_AccountPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalUser || nextProps.user.id !== this.state.originalUser.id) {
        const {
          user: {
            id,
            studentInformation,
            contactInformation,
            emailAddress,
            location,
            instructor,
            course,
            courseContext,
            accountSettings
          } = {}
        } = nextProps;
        const updatedUser = {
          id,
          studentInformation,
          contactInformation,
          emailAddress,
          location,
          instructor,
          course,
          courseContext,
          accountSettings
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

    Object(defineProperty["a" /* default */])(this, "onOpenClassModal", () => this.setState({
      classModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseClassModal", () => this.setState({
      classModalOpen: false
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

    Object(defineProperty["a" /* default */])(this, "onDeleteAccount", () => {
      console.warn('Stubbed out delete user');
    });

    Object(defineProperty["a" /* default */])(this, "onSendWelcomeEmail", event => {
      event.preventDefault();
      console.warn('Stubbed out send email');
    });

    Object(defineProperty["a" /* default */])(this, "onSendPasswordResetEmail", event => {
      event.preventDefault();
      console.warn('Stubbed out password reset email');
    });

    Object(defineProperty["a" /* default */])(this, "onResetPassword", event => {
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

    Object(defineProperty["a" /* default */])(this, "handleActionsChange", (event, name, checkBox = false) => {
      const {
        actions: previousActions
      } = this.state;
      let value;

      if (checkBox) {
        value = !previousActions.ccAdmin;
      } else {
        value = event.target.value;
      }

      const updatedState = external_immutability_helper_default()(this.state, {
        actions: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState(updatedState);
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

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section, checkBox = false) => {
      const {
        updatedUser: previousUserState
      } = this.state;
      let value;

      if (checkBox) {
        value = !previousUserState[section][name];
      } else {
        value = event.target ? event.target.value : event;
      }

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

    this.state = {
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
  }

  componentDidMount() {
    const {
      user: {
        id,
        studentInformation,
        contactInformation,
        emailAddress,
        location,
        instructor,
        course,
        courseContext,
        accountSettings
      } = {}
    } = this.props;
    const updatedUser = {
      id,
      studentInformation,
      contactInformation,
      emailAddress,
      location,
      instructor,
      course,
      courseContext,
      accountSettings
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
      classModalOpen,
      actions,
      updatedUser: {
        studentInformation: updatedStudentInformation,
        contactInformation: updatedContactInformation,
        emailAddress: updatedEmailAddress,
        location: updatedLocation,
        instructor: updatedInstructor,
        course: updatedClasses,
        courseContext: updatedCourseContext,
        accountSettings: updatedAccountSettings
      }
    } = this.state;
    const {
      user: {
        studentInformation,
        contactInformation,
        emailAddress,
        location,
        instructor,
        course,
        courseContext,
        accountSettings,
        accountStatus,
        accountType
      } = {}
    } = this.props;
    return AccountPage_jsx(external_react_default.a.Fragment, null, AccountPage_jsx(components_Toast, null), AccountPage_jsx(Student_ClassModal, {
      open: classModalOpen,
      onClose: this.onCloseClassModal,
      handleClassChange: this.handleOptionsChange
    }), AccountPage_jsx(LocationModal["a" /* default */], {
      open: locationModalOpen,
      onClose: this.onCloseLocationModal,
      handleLocationsChange: selectedLocations => this.handleOptionsChange(selectedLocations, 'location', 'locations')
    }), AccountPage_jsx(InstructorModal["a" /* default */], {
      open: instructorModalOpen,
      onClose: this.onCloseInstructorModal,
      handleInstructorsChange: selectedInstructors => this.handleOptionsChange(selectedInstructors, 'instructor', 'instructors')
    }), AccountPage_jsx("div", {
      className: "content-section"
    }, AccountPage_jsx("div", {
      className: "content-section-holder"
    }, AccountPage_jsx("div", {
      className: "row mb-0 d-flex-content large"
    }, AccountPage_jsx("div", {
      className: "col s12 l5"
    }, AccountPage_jsx(components_StudentInformation, {
      state: this.initialUserMount() ? studentInformation : updatedStudentInformation,
      handleDetailsChange: this.handleDetailsChange
    }), AccountPage_jsx(components_ContactInformation, {
      state: this.initialUserMount() ? contactInformation : updatedContactInformation,
      handleDetailsChange: this.handleDetailsChange
    }), AccountPage_jsx(components_EmailAddress, {
      state: this.initialUserMount() ? emailAddress : updatedEmailAddress,
      handleDetailsChange: this.handleDetailsChange
    })), AccountPage_jsx("div", {
      className: "col s12 l5"
    }, AccountPage_jsx(AccountPage_components_Location, {
      state: this.initialUserMount() ? location : updatedLocation,
      onOpenLocationModal: this.onOpenLocationModal,
      onRemoveLocation: this.onRemoveOption
    }), AccountPage_jsx(components_Instructor, {
      state: this.initialUserMount() ? instructor : updatedInstructor,
      onOpenInstructorModal: this.onOpenInstructorModal,
      onRemoveInstructor: this.onRemoveOption
    }), AccountPage_jsx(components_Class, {
      state: this.initialUserMount() ? course : updatedClasses,
      onOpenClassModal: this.onOpenClassModal,
      onRemoveClass: this.onRemoveOption
    }))), AccountPage_jsx("div", {
      className: "row mb-0 d-flex-content large sameheight"
    }, AccountPage_jsx(components_AccountStatus, {
      state: accountStatus
    }), AccountPage_jsx(components_AccountType, {
      state: accountType
    })), AccountPage_jsx(components_CourseContext, {
      state: this.initialUserMount() ? courseContext : updatedCourseContext,
      handleDetailsChange: this.handleDetailsChange
    }), AccountPage_jsx(components_AccountSettings, {
      state: this.initialUserMount() ? accountSettings : updatedAccountSettings,
      handleDetailsChange: this.handleDetailsChange
    }), AccountPage_jsx(components_Actions, {
      state: actions,
      handleActionsChange: this.handleActionsChange,
      onResetPassword: this.onResetPassword,
      onSendWelcomeEmail: this.onSendWelcomeEmail,
      onSendPasswordResetEmail: this.onSendPasswordResetEmail
    }), AccountPage_jsx(components_DeleteAccount, {
      activeButton: accountStatus.status !== 'Activated',
      onDeleteAccount: this.onDeleteAccount
    }), AccountPage_jsx("a", {
      href: "#",
      onClick: this.onSaveChanges,
      className: "btn"
    }, "Save"))));
  }

}

/* harmony default export */ var Student_AccountPage = (AccountPage_AccountPage);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/CourseProgress/index.js
var CourseProgress_jsx = external_react_default.a.createElement;


const areaColorMap = {
  maroon: '#ce237a',
  blue: '#1aa3ef',
  purple: '#752189',
  green: '#3a8745',
  orange: '#e28100'
};

const CourseProgress_data = (percentage, color) => ({
  datasets: [{
    data: [100, 100 - percentage],
    backgroundColor: [areaColorMap[color], 'rgb(234, 234, 234)']
  }]
}); // TODO: Implement doughnut charts


const CourseProgress = ({
  state: {
    startDate,
    testDate,
    progress,
    improvement,
    lessons,
    instruction,
    practiceTests
  },
  active
}) => CourseProgress_jsx("div", {
  className: "col s12 l7 card-width-747"
}, CourseProgress_jsx("div", {
  className: "card-main card card-chart"
}, CourseProgress_jsx("div", {
  className: "card-content"
}, CourseProgress_jsx("h2", null, "Course Progress"), CourseProgress_jsx("div", {
  className: "progress-block"
}, CourseProgress_jsx("div", {
  className: "progress-legend"
}, active ? [CourseProgress_jsx("div", {
  className: "legend-block",
  key: "0"
}, CourseProgress_jsx("span", {
  className: "small-text"
}, "Start Date"), CourseProgress_jsx("time", {
  dateTime: "2018-06-13",
  className: "large-text"
}, startDate)), CourseProgress_jsx("div", {
  className: "legend-block",
  key: "1"
}, CourseProgress_jsx("span", {
  className: "small-text"
}, "Test Date"), CourseProgress_jsx("time", {
  dateTime: "2018-10-06",
  className: "large-text"
}, "Oct SAT (", testDate, ")"))] : CourseProgress_jsx("span", {
  className: "text-frame"
}, "Once the course begins, check here to be sure the student is on track.")), CourseProgress_jsx("div", {
  className: "progress"
}, CourseProgress_jsx("div", {
  className: "determinate",
  style: {
    width: active ? `${progress}%` : '0%'
  }
}, active && CourseProgress_jsx("span", {
  className: "progress-label"
}, progress, "%")))), CourseProgress_jsx("div", {
  className: "charts-container"
}, CourseProgress_jsx("div", {
  className: "row mb-0"
}, CourseProgress_jsx("div", {
  className: "col"
}, CourseProgress_jsx("div", {
  className: "chart-block"
}, active ? CourseProgress_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => CourseProgress_data(improvement, 'maroon'),
  width: 156,
  height: 156,
  options: {
    cutoutPercentage: 75
  }
}) : CourseProgress_jsx("div", {
  className: "js-donut-chart js-donut-middle",
  "data-stroke-width": "20",
  "data-source": "./inc/score-data-improvement.json"
}), CourseProgress_jsx("div", {
  className: "chart-text"
}, CourseProgress_jsx("span", {
  className: "title"
}, "Improvement"), active ? [CourseProgress_jsx("span", {
  className: "value",
  key: "0"
}, improvement, "%"), CourseProgress_jsx("span", {
  className: "description",
  key: "1"
}, "vs target score")] : CourseProgress_jsx("span", {
  className: "inactive-text"
}, "None Yet")))), CourseProgress_jsx("div", {
  className: "col"
}, CourseProgress_jsx("div", {
  className: "chart-block"
}, active ? CourseProgress_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => CourseProgress_data(lessons, 'purple'),
  width: 156,
  height: 156,
  options: {
    cutoutPercentage: 75
  }
}) : CourseProgress_jsx("div", {
  className: "js-donut-chart js-donut-middle",
  "data-stroke-width": "20",
  "data-source": "./inc/score-data-improvement.json"
}), CourseProgress_jsx("div", {
  className: "chart-text"
}, CourseProgress_jsx("span", {
  className: "title"
}, "Lessons"), active ? [CourseProgress_jsx("span", {
  className: "value",
  key: "0"
}, lessons, "%"), CourseProgress_jsx("span", {
  className: "description",
  key: "1"
}, "vs scheduled lessons")] : CourseProgress_jsx("span", {
  className: "inactive-text"
}, "None Scheduled")))), CourseProgress_jsx("div", {
  className: "col"
}, CourseProgress_jsx("div", {
  className: "chart-block"
}, active ? CourseProgress_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => CourseProgress_data(instruction, 'orange'),
  width: 156,
  height: 156,
  options: {
    cutoutPercentage: 75
  }
}) : CourseProgress_jsx("div", {
  className: "js-donut-chart js-donut-middle",
  "data-stroke-width": "20",
  "data-source": "./inc/score-data-improvement.json"
}), CourseProgress_jsx("div", {
  className: "chart-text"
}, CourseProgress_jsx("span", {
  className: "title"
}, "Instruction"), active ? [CourseProgress_jsx("span", {
  className: "value",
  key: "0"
}, instruction, "%"), CourseProgress_jsx("span", {
  className: "description",
  key: "1"
}, "vs scheduled instruction")] : CourseProgress_jsx("span", {
  className: "inactive-text"
}, "None Scheduled")))), CourseProgress_jsx("div", {
  className: "col"
}, CourseProgress_jsx("div", {
  className: "chart-block"
}, active ? CourseProgress_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => CourseProgress_data(practiceTests, 'blue'),
  width: 156,
  height: 156,
  options: {
    cutoutPercentage: 75
  }
}) : CourseProgress_jsx("div", {
  className: "js-donut-chart js-donut-middle",
  "data-stroke-width": "20",
  "data-source": "./inc/score-data-improvement.json"
}), CourseProgress_jsx("div", {
  className: "chart-text"
}, CourseProgress_jsx("span", {
  className: "title"
}, "Practice Tests"), active ? [CourseProgress_jsx("span", {
  className: "value",
  key: "0"
}, practiceTests, "%"), CourseProgress_jsx("span", {
  className: "description",
  key: "1"
}, "vs scheduled tests")] : CourseProgress_jsx("span", {
  className: "inactive-text"
}, "None Scheduled"))))), active ? CourseProgress_jsx("div", {
  className: "chart-legend"
}, CourseProgress_jsx("div", {
  className: "row mb-0"
}, CourseProgress_jsx("div", {
  className: "col legend-frame"
}, CourseProgress_jsx("span", {
  className: "box complete"
}), CourseProgress_jsx("span", {
  className: "text"
}, "Complete")), CourseProgress_jsx("div", {
  className: "col legend-frame"
}, CourseProgress_jsx("span", {
  className: "box behind"
}), CourseProgress_jsx("span", {
  className: "text"
}, "Behind Schedule")))) : null))));

/* harmony default export */ var components_CourseProgress = (CourseProgress);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/OverdueWork/index.js
var OverdueWork_jsx = external_react_default.a.createElement;


const OverdueWork = ({
  state: {
    lessons,
    worksheets,
    quizzes,
    practiceTests
  },
  active
}) => OverdueWork_jsx("div", {
  className: "col s12 l5 card-width-366"
}, OverdueWork_jsx("div", {
  className: "card-main card card-chart"
}, OverdueWork_jsx("div", {
  className: "card-content"
}, OverdueWork_jsx("h2", null, "Overdue Work"), OverdueWork_jsx("ul", {
  className: "points-list-large"
}, OverdueWork_jsx("li", {
  className: active ? 'style-red-darken' : ''
}, OverdueWork_jsx("span", {
  className: "badge-circle"
}, lessons, " ", OverdueWork_jsx("span", {
  className: "badge-text"
}, "Lessons"))), OverdueWork_jsx("li", {
  className: active ? 'style-pink-darken' : ''
}, OverdueWork_jsx("span", {
  className: "badge-circle",
  style: {
    paddingTop: '0'
  }
}, worksheets, " ", OverdueWork_jsx("span", {
  className: "badge-text"
}, "Worksheets"))), OverdueWork_jsx("li", null, OverdueWork_jsx("span", {
  className: "badge-circle"
}, quizzes, " ", OverdueWork_jsx("span", {
  className: "badge-text"
}, "Quizzes"))), OverdueWork_jsx("li", {
  className: active ? 'style-blue-light' : ''
}, OverdueWork_jsx("span", {
  className: "badge-circle",
  style: {
    paddingTop: '0'
  }
}, practiceTests, " ", OverdueWork_jsx("span", {
  className: "badge-text"
}, "Practice Tests")))))));

/* harmony default export */ var components_OverdueWork = (OverdueWork);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/SummaryCards/utils/index.js
var utils_jsx = external_react_default.a.createElement;

const formatTimeLoggedIn = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return utils_jsx(external_react_default.a.Fragment, null, hours !== 0 && utils_jsx(external_react_default.a.Fragment, null, utils_jsx("b", {
    className: "text-large"
  }, hours), utils_jsx("span", {
    className: "text-small"
  }, "hrs ")), minutes !== 0 && utils_jsx(external_react_default.a.Fragment, null, utils_jsx("b", {
    className: "text-large"
  }, minutes), utils_jsx("span", {
    className: "text-small"
  }, "min")));
};
const formatVideoWatched = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return utils_jsx(external_react_default.a.Fragment, null, hours !== 0 && utils_jsx(external_react_default.a.Fragment, null, utils_jsx("b", {
    className: "text-large"
  }, hours), utils_jsx("span", {
    className: "text-small"
  }, "hrs ")), minutes !== 0 && utils_jsx(external_react_default.a.Fragment, null, utils_jsx("b", {
    className: "text-large"
  }, minutes), utils_jsx("span", {
    className: "text-small"
  }, "min")));
};
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/SummaryCards/index.js
var SummaryCards_jsx = external_react_default.a.createElement;



const SummaryCards = ({
  state: {
    questionsAnswered,
    videoWatched,
    notesTaken,
    totalTimeLoggedIn,
    lastLogIn,
    loginTimeCode,
    onTimePercentage
  },
  active
}) => SummaryCards_jsx("div", {
  className: "col s12 l5 card-width-366"
}, SummaryCards_jsx("ul", {
  className: "alerts-list"
}, SummaryCards_jsx("li", {
  className: "card card-alert"
}, SummaryCards_jsx("span", {
  className: active ? 'icon-box purple darken-3' : 'icon-box'
}, SummaryCards_jsx("i", {
  className: "icon-pencil2"
})), SummaryCards_jsx("div", {
  className: active ? 'alert-text purple-text text-darken-3' : 'alert-text'
}, SummaryCards_jsx("p", null, SummaryCards_jsx("b", null, "Questions Answered")), SummaryCards_jsx("div", {
  className: "value"
}, SummaryCards_jsx("b", {
  className: "text-large"
}, active ? questionsAnswered : '0')))), SummaryCards_jsx("li", {
  className: "card card-alert alert-blue-dark"
}, SummaryCards_jsx("span", {
  className: active ? 'icon-box cyan darken-2' : 'icon-box'
}, SummaryCards_jsx("i", {
  className: "icon-videocam"
})), SummaryCards_jsx("div", {
  className: active ? 'alert-text cyan-text text-darken-2' : 'alert-text'
}, SummaryCards_jsx("p", null, SummaryCards_jsx("b", null, "Video Watched")), SummaryCards_jsx("div", {
  className: "value"
}, active ? formatVideoWatched(videoWatched) : SummaryCards_jsx("b", {
  className: "text-large"
}, "0")))), SummaryCards_jsx("li", {
  className: "card card-alert"
}, SummaryCards_jsx("span", {
  className: active ? 'icon-box pink darken-2' : 'icon-box'
}, SummaryCards_jsx("i", {
  className: "icon-note"
})), SummaryCards_jsx("div", {
  className: active ? 'alert-text pink-text text-darken-2' : 'alert-text'
}, SummaryCards_jsx("p", null, SummaryCards_jsx("b", null, "Notes Taken")), SummaryCards_jsx("div", {
  className: "value"
}, SummaryCards_jsx("b", {
  className: "text-large"
}, active ? notesTaken : '0')))), SummaryCards_jsx("li", {
  className: "card card-alert"
}, SummaryCards_jsx("span", {
  className: active ? 'icon-box green darken-3' : 'icon-box'
}, SummaryCards_jsx("i", {
  className: "icon-clock"
})), SummaryCards_jsx("div", {
  className: active ? 'alert-text green-text text-darken-3' : 'alert-text'
}, SummaryCards_jsx("p", null, SummaryCards_jsx("b", null, "Total Time Logged In")), SummaryCards_jsx("div", {
  className: "value"
}, active ? formatTimeLoggedIn(totalTimeLoggedIn) : SummaryCards_jsx("b", {
  className: "text-large"
}, "0")))), SummaryCards_jsx("li", {
  className: "card card-alert"
}, SummaryCards_jsx("span", {
  className: active ? 'icon-box orange darken-2' : 'icon-box'
}, SummaryCards_jsx("i", {
  className: "icon-arrow-right"
})), SummaryCards_jsx("div", {
  className: active ? 'alert-text orange-text text-darken-2' : 'alert-text'
}, SummaryCards_jsx("p", null, SummaryCards_jsx("b", null, "Last Log In")), SummaryCards_jsx("div", {
  className: "value"
}, active ? SummaryCards_jsx(external_react_default.a.Fragment, null, SummaryCards_jsx("span", {
  className: "text-large"
}, lastLogIn), " ", SummaryCards_jsx("span", {
  className: "text-small"
}, loginTimeCode)) : SummaryCards_jsx("span", {
  className: "text-large"
}, "none")))), SummaryCards_jsx("li", {
  className: "card card-alert"
}, SummaryCards_jsx("span", {
  className: active ? 'icon-box red' : 'icon-box'
}, SummaryCards_jsx("i", {
  className: "icon-bell"
})), SummaryCards_jsx("div", {
  className: active ? 'alert-text red-text' : 'alert-text'
}, SummaryCards_jsx("p", null, SummaryCards_jsx("b", null, "On-Time Percentage")), SummaryCards_jsx("div", {
  className: "value"
}, active ? SummaryCards_jsx("b", {
  className: "text-large"
}, onTimePercentage, "%") : SummaryCards_jsx("b", {
  className: "text-large"
}, "not available"))))));

/* harmony default export */ var components_SummaryCards = (SummaryCards);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/TestScores/index.js

var TestScores_jsx = external_react_default.a.createElement;


const TestScores_data = {
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

const getIndicatorStatus = (activeSection, active) => ({
  left: activeSection === 'subjectScores' ? '50%' : '0',
  right: activeSection === 'subjectScores' ? '0' : '50%',
  backgroundColor: active ? '#00bbf7' : '#b2b2b2'
}); // TODO: Implement final line chart data implementation later


class TestScores_TestScores extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetOpenSection", (event, openSection) => {
      event.preventDefault();
      this.setState({
        openSection
      });
    });

    this.state = {
      openSection: 'compositeScore'
    };
  }

  render() {
    const {
      openSection
    } = this.state;
    const {
      state: {
        compositeScore,
        subjectScores
      },
      active
    } = this.props;
    return TestScores_jsx("div", {
      className: "col s12 l7 card-width-747"
    }, TestScores_jsx("div", {
      className: "card-main card card-chart"
    }, TestScores_jsx("div", {
      className: "card-content"
    }, TestScores_jsx("h2", null, "Test Scores"), TestScores_jsx("div", {
      className: "tabs-container tabs-charts-container"
    }, !active ? TestScores_jsx("div", {
      className: "card-note-box",
      style: {
        display: 'block'
      }
    }, TestScores_jsx("span", {
      className: "title"
    }, "Nothing to see here yet."), TestScores_jsx("span", {
      className: "text-frame"
    }, "Once this student has taken multiple tests, you can track the progress here. ")) : null, TestScores_jsx("ul", {
      className: "tabs",
      style: {
        filter: !active ? 'blur(3px)' : ""
      }
    }, TestScores_jsx("li", {
      className: "tab col s6 l6"
    }, TestScores_jsx("a", {
      href: "#",
      onClick: event => this.onSetOpenSection(event, 'compositeScore'),
      className: openSection === 'compositeScore' ? 'active' : ''
    }, "Composite Score")), TestScores_jsx("li", {
      className: "tab col s6 l6"
    }, TestScores_jsx("a", {
      href: "#",
      onClick: event => this.onSetOpenSection(event, 'subjectScores'),
      className: openSection === 'subjectScores' ? 'active' : ''
    }, "Subject Scores")), TestScores_jsx("li", {
      className: "indicator",
      style: getIndicatorStatus(openSection, active)
    })), TestScores_jsx("div", {
      id: "scores_tab01",
      className: openSection === 'compositeScore' ? '' : 'tab-content',
      style: active ? {} : {
        filter: 'blur(3px)'
      }
    }, TestScores_jsx("div", {
      className: active ? 'card-panel panel-scores light-blue accent-2 white-text' : 'card-panel panel-scores white-text'
    }, TestScores_jsx("ul", {
      className: "panel-list"
    }, TestScores_jsx("li", {
      className: "panel-block"
    }, TestScores_jsx("strong", {
      className: "text-small"
    }, "Reading"), active ? TestScores_jsx("strong", {
      className: "text-large"
    }, "+", compositeScore.reading) : null), TestScores_jsx("li", {
      className: "panel-block"
    }, TestScores_jsx("strong", {
      className: "text-small"
    }, "Writing"), active ? TestScores_jsx("strong", {
      className: "text-large"
    }, "+", compositeScore.writing) : null), TestScores_jsx("li", {
      className: "panel-block"
    }, TestScores_jsx("strong", {
      className: "text-small"
    }, "Math"), active ? TestScores_jsx("strong", {
      className: "text-large"
    }, "+", compositeScore.math) : null), TestScores_jsx("li", {
      className: "panel-block"
    }, TestScores_jsx("strong", {
      className: "text-small"
    }, "Composite"), active ? TestScores_jsx("strong", {
      className: "text-large"
    }, "+", compositeScore.composite) : null))), TestScores_jsx("div", {
      className: "chart-line-container js-scrollable-chart"
    }, TestScores_jsx(external_react_chartjs_2_["Line"], {
      data: TestScores_data
    }))), TestScores_jsx("div", {
      id: "scores_tab02",
      className: openSection === 'subjectScores' ? '' : 'tab-content',
      style: active ? {} : {
        filter: 'blur(3px)'
      }
    }, TestScores_jsx("div", {
      className: active ? 'card-panel panel-scores light-blue accent-2 white-text' : 'card-panel panel-scores white-text'
    }, TestScores_jsx("ul", {
      className: "panel-list"
    }, TestScores_jsx("li", {
      className: "panel-block"
    }, TestScores_jsx("strong", {
      className: "text-small"
    }, "Reading"), active ? TestScores_jsx("strong", {
      className: "text-large"
    }, "+", subjectScores.reading) : null), TestScores_jsx("li", {
      className: "panel-block"
    }, TestScores_jsx("strong", {
      className: "text-small"
    }, "Writing"), active ? TestScores_jsx("strong", {
      className: "text-large"
    }, "+", subjectScores.writing) : null), TestScores_jsx("li", {
      className: "panel-block"
    }, TestScores_jsx("strong", {
      className: "text-small"
    }, "Math"), active ? TestScores_jsx("strong", {
      className: "text-large"
    }, "+", subjectScores.math) : null), TestScores_jsx("li", {
      className: "panel-block"
    }, TestScores_jsx("strong", {
      className: "text-small"
    }, "Composite"), active ? TestScores_jsx("strong", {
      className: "text-large"
    }, "+", subjectScores.composite) : null))), TestScores_jsx("div", {
      className: "chart-line-container js-scrollable-chart"
    }, TestScores_jsx(external_react_chartjs_2_["Line"], {
      data: TestScores_data
    })))))));
  }

}

;
/* harmony default export */ var components_TestScores = (TestScores_TestScores);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js
const utils_getIndicatorStatus = activeSection => {
  switch (activeSection) {
    case 'reading':
      return {
        left: '1.5%',
        right: '92%',
        height: '2px'
      };

    case 'writing':
      return {
        left: '11%',
        right: '83%',
        height: '2px'
      };

    case 'math':
      return {
        left: '20%',
        right: '75%',
        height: '2px'
      };

    default:
      return null;
  }
};
const utils_data = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible - totalScore],
    backgroundColor: ['#ce237a', 'rgb(234, 234, 234)']
  }]
});
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js

var StrengthsAndWeaknesses_jsx = external_react_default.a.createElement;


 // TODO: Figure out how the client wants this data visualized and what these bar graphs actually mean

class StrengthsAndWeaknesses_StrengthsAndWeaknesses extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetOpenSection", (event, openSection) => {
      event.preventDefault();
      this.setState({
        openSection
      });
    });

    this.state = {
      openSection: 'reading'
    };
  }

  render() {
    const {
      openSection
    } = this.state; // eslint-disable-next-line no-unused-vars

    const {
      state: {
        reading,
        writing,
        math
      },
      active
    } = this.props;
    return StrengthsAndWeaknesses_jsx("div", {
      className: "card-block"
    }, StrengthsAndWeaknesses_jsx("h2", {
      className: "h1"
    }, "Strengths & Weaknesses"), StrengthsAndWeaknesses_jsx("div", {
      className: "card-main-full card"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "tabs-container"
    }, active ? [StrengthsAndWeaknesses_jsx("div", {
      className: "card-panel light-blue accent-2 white-text",
      key: "0"
    }, StrengthsAndWeaknesses_jsx("ul", {
      className: "tabs"
    }, StrengthsAndWeaknesses_jsx("li", {
      className: "tab col s4 l3",
      style: {
        margin: '0',
        paddingRight: '20px',
        paddingLeft: '20px',
        height: '24px'
      }
    }, StrengthsAndWeaknesses_jsx("a", {
      href: "#",
      style: {
        fontSize: '17px'
      },
      className: openSection === 'reading' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'reading')
    }, "Reading")), StrengthsAndWeaknesses_jsx("li", {
      className: "tab col s4 l3",
      style: {
        margin: '0',
        paddingRight: '20px',
        paddingLeft: '20px',
        height: '24px'
      }
    }, StrengthsAndWeaknesses_jsx("a", {
      href: "#",
      style: {
        fontSize: '17px'
      },
      className: openSection === 'writing' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'writing')
    }, "Writing")), StrengthsAndWeaknesses_jsx("li", {
      className: "tab col s4 l3",
      style: {
        margin: '0',
        paddingRight: '20px',
        paddingLeft: '20px',
        height: '24px'
      }
    }, StrengthsAndWeaknesses_jsx("a", {
      href: "#",
      style: {
        fontSize: '17px'
      },
      className: openSection === 'math' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'math')
    }, "Math")), StrengthsAndWeaknesses_jsx("li", {
      className: "indicator",
      style: utils_getIndicatorStatus(openSection)
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "card-content tabs-content",
      key: "1"
    }, StrengthsAndWeaknesses_jsx("div", {
      id: "tabs_tab01",
      className: openSection === 'reading' ? '' : 'tab-content'
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "row mb-0"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "col s12 l5 xl4 chart-column"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "chart-block chart-block-large"
    }, StrengthsAndWeaknesses_jsx(external_react_chartjs_2_["Doughnut"], {
      data: () => utils_data(reading.correctAnswers, reading.totalAnswers),
      width: 250,
      height: 250,
      options: {
        cutoutPercentage: 80
      }
    }), StrengthsAndWeaknesses_jsx("div", {
      className: "chart-text"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "title"
    }, "Reading"), StrengthsAndWeaknesses_jsx("span", {
      className: "value"
    }, reading.correctAnswers), StrengthsAndWeaknesses_jsx("span", {
      className: "description"
    }, "out of ", StrengthsAndWeaknesses_jsx("b", null, reading.totalAnswers))))), StrengthsAndWeaknesses_jsx("div", {
      className: "col s12 l7 xl8"
    }, StrengthsAndWeaknesses_jsx("ul", {
      className: "collapsible expandable collapsible-explain"
    }, StrengthsAndWeaknesses_jsx("li", null, StrengthsAndWeaknesses_jsx("div", {
      className: "collapsible-header"
    }, StrengthsAndWeaknesses_jsx("b", null, "Explain This Graph")), StrengthsAndWeaknesses_jsx("div", {
      className: "collapsible-body"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "row mb-0"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "col l6"
    }, StrengthsAndWeaknesses_jsx("ul", {
      className: "legend-list"
    }, StrengthsAndWeaknesses_jsx("li", null, StrengthsAndWeaknesses_jsx("div", {
      className: "legend-frame"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "box red darken-2"
    }), StrengthsAndWeaknesses_jsx("strong", {
      className: "text h3"
    }, "Focus Here!")), StrengthsAndWeaknesses_jsx("p", null, "Most people with your score would get these correct, but you got them wrong. Work on these and you can pick up some easy points!")), StrengthsAndWeaknesses_jsx("li", null, StrengthsAndWeaknesses_jsx("div", {
      className: "legend-frame"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "box red lighten-5"
    }), StrengthsAndWeaknesses_jsx("strong", {
      className: "text h3"
    }, "Tough Gains")), StrengthsAndWeaknesses_jsx("p", null, "You missed these, but so did most others with a similar score. You\u2019ll likely \uFB01nd easier gains elsewhere.")))), StrengthsAndWeaknesses_jsx("div", {
      className: "col l6"
    }, StrengthsAndWeaknesses_jsx("ul", {
      className: "legend-list"
    }, StrengthsAndWeaknesses_jsx("li", null, StrengthsAndWeaknesses_jsx("div", {
      className: "legend-frame"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "box light-green darken-2"
    }), StrengthsAndWeaknesses_jsx("strong", {
      className: "text h3"
    }, "Well Done!")), StrengthsAndWeaknesses_jsx("p", null, "You\u2019re overachiving in this category compared to other with your score. Keep up the good work!")), StrengthsAndWeaknesses_jsx("li", null, StrengthsAndWeaknesses_jsx("div", {
      className: "legend-frame"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "box  light-green lighten-4"
    }), StrengthsAndWeaknesses_jsx("strong", {
      className: "text h3"
    }, "Piece o\u2019 Cake")), StrengthsAndWeaknesses_jsx("p", null, "You answered these correctly like others with a similar score.")))))))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graphs-section"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graphs-block"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-title"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("h3", {
      className: "graph-title"
    }, "Passage Type")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '100%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '80%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '80%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Science")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '85%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '100%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '70%'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Informational Graphic Passage")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '75%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '70%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '70%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "History/Social Science")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '85%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '5%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '15%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "US & World Literature")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '45%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '85%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '0'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Paired Passages")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '35%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '60%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '10%'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18")))), StrengthsAndWeaknesses_jsx("div", {
      className: "graphs-block"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-title"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("h3", {
      className: "graph-title"
    }, "Question Type")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '85%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '12%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '95%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row-block"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-subtitle"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Citing Textual Evidence")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '55%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '70%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '12%'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-inner"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Cite Text as Evidence")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '20%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '85%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '70%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-inner"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Author\u2019s Intention and Method")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '55%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '7%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '15%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-inner"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Support / Refute a Claim")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '47%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '12%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '0'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18")))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row-block"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-subtitle"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Reading Closely")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '12%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '55%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '10%'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-inner"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Detail Question")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '100%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '8%'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '95%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-row graph-row-inner"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col text-column"
    }, StrengthsAndWeaknesses_jsx("strong", {
      className: "graph-subtitle"
    }, "Support / Refute a Claim")), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "graph-linear"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-left"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green-light",
      style: {
        width: '75%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "part-right"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-red-light",
      style: {
        width: '100%'
      }
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "part-green",
      style: {
        width: '70%'
      }
    }))))), StrengthsAndWeaknesses_jsx("div", {
      className: "graph-col graph-info"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "12"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-small"
    }, "out of"), StrengthsAndWeaknesses_jsx("span", {
      className: "text-large"
    }, "18"))))))), StrengthsAndWeaknesses_jsx("div", {
      id: "tabs_tab02",
      className: openSection === 'writing' ? '' : 'tab-content'
    }, StrengthsAndWeaknesses_jsx("h3", null, "Tab 02 content"), StrengthsAndWeaknesses_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quasi inventore expedita maxime, vero magnam architecto eius laudantium corrupti! Ut fuga sit corrupti, vitae cum temporibus sed dolore labore! Fugit."), StrengthsAndWeaknesses_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorem nihil minus, quasi, dicta cupiditate aut magni ea veniam natus provident eveniet tempore iure minima placeat distinctio ducimus quo cum.")), StrengthsAndWeaknesses_jsx("div", {
      id: "tabs_tab03",
      className: openSection === 'math' ? '' : 'tab-content'
    }, StrengthsAndWeaknesses_jsx("h3", null, "Tab 03 content"), StrengthsAndWeaknesses_jsx("p", null, "Expedita quibusdam sed, temporibus quasi dolorem iure non inventore quaerat sit mollitia dolores minima illo perspiciatis omnis delectus, recusandae quos, incidunt ratione."), StrengthsAndWeaknesses_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, enim? Itaque reprehenderit, id eos quasi optio est. Soluta alias, minima consequuntur obcaecati odio maiores, molestiae, vel ipsum modi delectus enim!")))] : [StrengthsAndWeaknesses_jsx("div", {
      className: "card-panel white-text",
      style: {
        backgroundColor: '#b2b2b2'
      },
      key: "0"
    }, StrengthsAndWeaknesses_jsx("h2", null, "Areas for Improvement")), StrengthsAndWeaknesses_jsx("div", {
      className: "card-content",
      key: "1"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "card-note-box"
    }, StrengthsAndWeaknesses_jsx("span", {
      className: "title"
    }, "Nothing to see here yet."), StrengthsAndWeaknesses_jsx("span", {
      className: "text-frame"
    }, "As the this student takes practice tests and completes course work, we\u2019ll track the student\u2019s strengths and weaknesess. Check back here once the course begins.")))])));
  }

}

/* harmony default export */ var components_StrengthsAndWeaknesses = (StrengthsAndWeaknesses_StrengthsAndWeaknesses);
// CONCATENATED MODULE: ./components/Student/DetailSummaryPage/index.js
var DetailSummaryPage_jsx = external_react_default.a.createElement;





 // eslint-disable-next-line react/prefer-stateless-function

class DetailSummaryPage_DetailSummaryPage extends external_react_default.a.Component {
  render() {
    const {
      user: {
        active,
        courseProgress,
        overdueWork,
        summary,
        testScores,
        strengthsAndWeaknesses
      }
    } = this.props;
    return DetailSummaryPage_jsx("div", {
      className: "content-section"
    }, DetailSummaryPage_jsx("div", {
      className: "container"
    }, DetailSummaryPage_jsx("div", {
      className: "cards-section"
    }, DetailSummaryPage_jsx("div", {
      className: "row d-flex justify-content-center mb-0"
    }, DetailSummaryPage_jsx(components_CourseProgress, {
      active: active,
      state: courseProgress
    }), DetailSummaryPage_jsx(components_OverdueWork, {
      active: active,
      state: overdueWork
    })), DetailSummaryPage_jsx("div", {
      className: "row d-flex justify-content-center mb-0"
    }, DetailSummaryPage_jsx(components_SummaryCards, {
      active: active,
      state: summary
    }), DetailSummaryPage_jsx(components_TestScores, {
      active: active,
      state: testScores
    }))), DetailSummaryPage_jsx(components_StrengthsAndWeaknesses, {
      active: active,
      state: strengthsAndWeaknesses
    })));
  }

}

/* harmony default export */ var Student_DetailSummaryPage = (DetailSummaryPage_DetailSummaryPage);
// EXTERNAL MODULE: ./utils/formatTimeEstimate.js
var formatTimeEstimate = __webpack_require__("+FjG");

// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/utils/statusColorMap.js
const statusColorMap = {
  Assigned: 'grey darken-4',
  Overdue: 'grey darken-4',
  Started: 'grey darken-4',
  Scheduled: 'grey',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple'
};
const chartColorMap = {
  Assigned: '#333',
  Started: "#333",
  Overdue: '#333',
  Scheduled: "#b2b2b2",
  Accomplished: '#7327cc',
  Beginning: '#ed1c24',
  Exemplary: 'rgb(0, 100, 244)',
  Developing: '#c10078'
};
/* harmony default export */ var utils_statusColorMap = (statusColorMap);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/components/FullView/index.js

var FullView_jsx = external_react_default.a.createElement;





const FullView_data = (percentage, status) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [chartColorMap[status], '#eaeaea']
  }]
});

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
        onToggleDetailModalOpen
      } = this.props;
      const {
        dropdownIndex,
        dropdownIsOpen
      } = this.state;
      return worksheets.map((worksheet, index) => {
        const {
          disabled,
          worksheetName,
          worksheetSource,
          subject,
          problemType,
          difficulty,
          score,
          status,
          problems,
          timeEstimate,
          availableDate,
          dueDate,
          classifications,
          flags,
          late
        } = worksheet;
        return FullView_jsx("div", {
          className: "card-main-col col s12 m8 l7 xl5",
          key: worksheet.id
        }, FullView_jsx("div", {
          className: disabled ? 'card-main work-card card-disabled card' : 'card-main work-card card'
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
        }, flags.length > 0 && FullView_jsx("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, FullView_jsx("b", {
          className: "badge-text"
        }, flags.length), " ", FullView_jsx("i", {
          className: "icon-flag"
        })), FullView_jsx("div", {
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
          onClick: () => onToggleDetailModalOpen(index)
        }, "View Details")), FullView_jsx("li", null, FullView_jsx("a", {
          href: "#!"
        }, "Dismiss Flags")), FullView_jsx("li", null, FullView_jsx("a", {
          href: "#!"
        }, "Reset")), FullView_jsx("li", null, FullView_jsx("a", {
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
          className: "col s6"
        }, FullView_jsx("div", {
          className: "chart-container"
        }, FullView_jsx("div", {
          className: "chart-holder"
        }, FullView_jsx(external_react_chartjs_2_["Doughnut"], {
          data: () => FullView_data(score, status),
          options: {
            circumference: 1 * Math.PI,
            rotation: 1 * Math.PI,
            cutoutPercentage: 60,
            tooltips: false
          }
        }), FullView_jsx("span", {
          className: "chart-value",
          style: {
            backgroundColor: chartColorMap[status]
          }
        }, FullView_jsx("span", {
          "data-count-up": true,
          "data-start-val": "0",
          "data-end-val": "96",
          "data-duration": "1"
        }), FullView_jsx("span", {
          className: "percentage"
        }, score && `${score}%`))), FullView_jsx("div", {
          className: "chart-row"
        }, FullView_jsx("div", {
          className: "chart-col chart-start"
        }, "\xA0"), FullView_jsx("div", {
          className: "chart-col chart-end"
        }, FullView_jsx("span", {
          className: "amount",
          style: {
            color: chartColorMap[status]
          }
        }, problems))), FullView_jsx("div", {
          className: "chart-description"
        }, FullView_jsx("dl", {
          className: "dl-horizontal"
        }, FullView_jsx("dt", null, "Time Est:"), FullView_jsx("dd", null, Object(formatTimeEstimate["a" /* default */])(timeEstimate))), FullView_jsx("dl", {
          className: "dl-horizontal"
        }, FullView_jsx("dt", null, "Problems:"), FullView_jsx("dd", null, problems))))), FullView_jsx("div", {
          className: "col s6 right-align justify-end"
        }, FullView_jsx("div", {
          className: "chart-description"
        }, FullView_jsx("dl", {
          className: "dl-horizontal"
        }, FullView_jsx("dt", null, "Available:"), FullView_jsx("dd", null, FullView_jsx("time", {
          dateTime: availableDate
        }, availableDate))), FullView_jsx("dl", {
          className: late ? 'dl-horizontal red-text text-darken-3' : 'dl-horizontal'
        }, disabled ? FullView_jsx("dt", null, "No Due Date") : [FullView_jsx("dt", {
          key: "0"
        }, "Due:"), FullView_jsx("dd", {
          key: "1"
        }, FullView_jsx("time", {
          dateTime: dueDate
        }, dueDate))])), FullView_jsx("div", {
          className: "align-self-end"
        }, FullView_jsx("span", {
          className: `badge badge-rounded-md ${utils_statusColorMap[status]} white-text`
        }, status)))), FullView_jsx("div", {
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
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/components/ListView/components/TableHeader/index.js
var TableHeader_jsx = external_react_default.a.createElement;


const TableHeader = () => TableHeader_jsx("div", {
  className: "list-table-header"
}, TableHeader_jsx("div", {
  className: "list-table-row"
}, TableHeader_jsx("div", {
  className: "list-table-cell icon-cell"
}, "\xA0"), TableHeader_jsx("div", {
  className: "list-table-cell name-cell"
}, TableHeader_jsx("b", null, "Worksheet")), TableHeader_jsx("div", {
  className: "list-table-cell graph-cell"
}, TableHeader_jsx("b", null, "Score")), TableHeader_jsx("div", {
  className: "list-table-cell description-cell"
}, TableHeader_jsx("b", null, "Problems")), TableHeader_jsx("div", {
  className: "list-table-cell time-cell"
}, TableHeader_jsx("b", null, "Time Est")), TableHeader_jsx("div", {
  className: "list-table-cell date-cell"
}, TableHeader_jsx("b", null, "Assign")), TableHeader_jsx("div", {
  className: "list-table-cell date-cell"
}, TableHeader_jsx("b", null, "Due")), TableHeader_jsx("div", {
  className: "list-table-cell completed-cell"
}, TableHeader_jsx("b", null, "Completed")), TableHeader_jsx("div", {
  className: "list-table-cell flags-cell"
}, TableHeader_jsx("b", null, "Flags")), TableHeader_jsx("div", {
  className: "list-table-cell status-cell"
}, TableHeader_jsx("b", null, "Status")), TableHeader_jsx("div", {
  className: "list-table-cell drop-cell"
}, "\xA0")));

/* harmony default export */ var components_TableHeader = (TableHeader);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/components/ListView/index.js

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
        onToggleDetailModalOpen
      } = this.props;
      const {
        dropdownIndex,
        dropdownIsOpen
      } = this.state;
      return worksheets.map((worksheet, index) => {
        const {
          disabled,
          worksheetName,
          score,
          status,
          problems,
          timeEstimate,
          assignDate,
          dueDate,
          completed,
          flags
        } = worksheet;
        return ListView_jsx("div", {
          className: disabled ? 'card card-disabled list-table-row' : 'card list-table-row',
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
          className: "list-table-cell graph-cell"
        }, score && ListView_jsx("span", {
          className: `chart-bar ${utils_statusColorMap[status]} white-text`
        }, score, "%")), ListView_jsx("div", {
          className: "list-table-cell description-cell"
        }, problems), ListView_jsx("div", {
          className: "list-table-cell time-cell"
        }, Object(formatTimeEstimate["a" /* default */])(timeEstimate)), ListView_jsx("div", {
          className: "list-table-cell date-cell"
        }, ListView_jsx("time", {
          dateTime: "2019-01-27"
        }, assignDate)), ListView_jsx("div", {
          className: "list-table-cell date-cell"
        }, ListView_jsx("time", {
          dateTime: "2019-01-27"
        }, dueDate)), ListView_jsx("div", {
          className: "list-table-cell completed-cell"
        }, completed && ListView_jsx(external_react_default.a.Fragment, null, completed, " of ", problems)), ListView_jsx("div", {
          className: "list-table-cell flags-cell"
        }, flags.length > 0 && ListView_jsx("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, ListView_jsx("b", {
          className: "badge-text"
        }, flags.length), " ", ListView_jsx("i", {
          className: "icon-flag"
        }))), ListView_jsx("div", {
          className: "list-table-cell status-cell"
        }, ListView_jsx("span", {
          className: `badge badge-rounded-md ${utils_statusColorMap[status]} white-text`
        }, status)), ListView_jsx("div", {
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
          onClick: () => onToggleDetailModalOpen(index)
        }, "View Details")), ListView_jsx("li", null, ListView_jsx("a", {
          href: "#!"
        }, "Dismiss Flags")), ListView_jsx("li", null, ListView_jsx("a", {
          href: "#!"
        }, "Reset")), ListView_jsx("li", null, ListView_jsx("a", {
          href: "#!",
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
    return ListView_jsx(external_react_default.a.Fragment, null, ListView_jsx("div", {
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
      className: "list-table"
    }, ListView_jsx(components_TableHeader, null), ListView_jsx("div", {
      className: "list-table-body"
    }, this.mapWorksheetRows()))))));
  }

}

/* harmony default export */ var components_ListView = (ListView_ListView);
// EXTERNAL MODULE: ./components/utils/sampleTopics.js
var sampleTopics = __webpack_require__("WoyS");

// EXTERNAL MODULE: ./utils/worksheetSortOptions.js
var worksheetSortOptions = __webpack_require__("6C9T");

// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/components/FilterSection/index.js

var components_FilterSection_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/no-static-element-interactions */







class components_FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      activeFilters: []
    }));

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", filter => {
      const {
        activeFilters: currentActiveFilters
      } = this.state;
      let activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = external_immutability_helper_default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        const filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = external_immutability_helper_default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        activeFilters
      });
    });

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
      topic: {},
      sort: {},
      activeFilters: []
    };
  }

  render() {
    const {
      open,
      activeFilters,
      worksheetName,
      topic,
      sort
    } = this.state;
    const {
      currentView,
      onChangeView
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
      id: "reading",
      checked: activeFilters.indexOf('reading') !== -1,
      onChange: () => this.handleFilterClick('reading')
    }), components_FilterSection_jsx("label", {
      htmlFor: "reading"
    }, "Reading")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "writing",
      checked: activeFilters.indexOf('writing') !== -1,
      onChange: () => this.handleFilterClick('writing')
    }), components_FilterSection_jsx("label", {
      htmlFor: "writing"
    }, "Writing")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "math",
      checked: activeFilters.indexOf('math') !== -1,
      onChange: () => this.handleFilterClick('math')
    }), components_FilterSection_jsx("label", {
      htmlFor: "math"
    }, "Math"))), components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "beginning",
      checked: activeFilters.indexOf('beginning') !== -1,
      onChange: () => this.handleFilterClick('beginning')
    }), components_FilterSection_jsx("label", {
      htmlFor: "beginning"
    }, "Beginning")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "developing",
      checked: activeFilters.indexOf('developing') !== -1,
      onChange: () => this.handleFilterClick('developing')
    }), components_FilterSection_jsx("label", {
      htmlFor: "developing"
    }, "Developing")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "accomplished",
      checked: activeFilters.indexOf('accomplished') !== -1,
      onChange: () => this.handleFilterClick('accomplished')
    }), components_FilterSection_jsx("label", {
      htmlFor: "accomplished"
    }, "Accomplished")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "exemplary",
      checked: activeFilters.indexOf('exemplary') !== -1,
      onChange: () => this.handleFilterClick('exemplary')
    }), components_FilterSection_jsx("label", {
      htmlFor: "exemplary"
    }, "Exemplary"))), components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "unassigned",
      checked: activeFilters.indexOf('unassigned') !== -1,
      onChange: () => this.handleFilterClick('unassigned')
    }), components_FilterSection_jsx("label", {
      htmlFor: "unassigned"
    }, "Unassigned")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "complete",
      checked: activeFilters.indexOf('complete') !== -1,
      onChange: () => this.handleFilterClick('complete')
    }), components_FilterSection_jsx("label", {
      htmlFor: "complete"
    }, "Complete")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "incomplete",
      checked: activeFilters.indexOf('incomplete') !== -1,
      onChange: () => this.handleFilterClick('incomplete')
    }), components_FilterSection_jsx("label", {
      htmlFor: "incomplete"
    }, "Incomplete"))), components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "hasReviewFlags",
      checked: activeFilters.indexOf('hasReviewFlags') !== -1,
      onChange: () => this.handleFilterClick('hasReviewFlags')
    }), components_FilterSection_jsx("label", {
      htmlFor: "hasReviewFlags"
    }, "Has Review Flags"))), components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueToday",
      checked: activeFilters.indexOf('dueToday') !== -1,
      onChange: () => this.handleFilterClick('dueToday')
    }), components_FilterSection_jsx("label", {
      htmlFor: "dueToday"
    }, "Due Today")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueNextSession",
      checked: activeFilters.indexOf('dueNextSession') !== -1,
      onChange: () => this.handleFilterClick('dueNextSession')
    }), components_FilterSection_jsx("label", {
      htmlFor: "dueNextSession"
    }, "Due By Next Session")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueThisWeek",
      checked: activeFilters.indexOf('dueThisWeek') !== -1,
      onChange: () => this.handleFilterClick('dueThisWeek')
    }), components_FilterSection_jsx("label", {
      htmlFor: "dueThisWeek"
    }, "Due this Week")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "overdue",
      checked: activeFilters.indexOf('overdue') !== -1,
      onChange: () => this.handleFilterClick('overdue')
    }), components_FilterSection_jsx("label", {
      htmlFor: "overdue"
    }, "Overdue"))), components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "some-class",
      checked: activeFilters.indexOf('class') !== -1,
      onChange: () => this.handleFilterClick('class')
    }), components_FilterSection_jsx("label", {
      htmlFor: "some-class"
    }, "Some Class")), components_FilterSection_jsx("li", null, components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "tutoring",
      checked: activeFilters.indexOf('tutoring') !== -1,
      onChange: () => this.handleFilterClick('tutoring')
    }), components_FilterSection_jsx("label", {
      htmlFor: "tutoring"
    }, "Tutoring")))), components_FilterSection_jsx("div", {
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

/* harmony default export */ var components_FilterSection = (components_FilterSection_FilterSection);
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
  assignTime: '3:01 PM',
  availableDate: '1/27/19',
  dueDate: '2/10/19',
  dueTime: '9:32 AM',
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: '',
  completionLevel: 'Complete',
  unit: 'Reading Unit #4',
  passage: '214',
  type: 'challenge + practice',
  flags: [],
  status: 'Assigned',
  disabled: true,
  late: false,
  topic: 'specialRightTriangles',
  worksheetSource: 'Admin Created',
  classifications: ['Right Triangles', 'More Math', "Lots Of Math"],
  totalVideoMinutesWatched: '77',
  totalVideoMinutesAllMissedProblems: '214',
  questions: sampleQuestions
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
  assignTime: '3:01 PM',
  availableDate: '1/19/19',
  dueDate: '2/02/19',
  dueTime: '9:32 AM',
  completionDate: '',
  completionTime: '',
  completedProblems: 0,
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
  topic: 'topic2',
  worksheetSource: 'User Created',
  classifications: ['Math', 'More Math', "Lots Of Math"],
  totalVideoMinutesWatched: '77',
  totalVideoMinutesAllMissedProblems: '214',
  questions: sampleQuestions
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
  assignTime: '3:01 PM',
  availableDate: '1/11/19',
  dueDate: '2/12/19',
  dueTime: '9:32 AM',
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: 10,
  completionLevel: 'Complete',
  unit: 'Reading Unit #4',
  passage: '121',
  type: 'challenge + practice',
  flags: [],
  status: 'Accomplished',
  disabled: false,
  late: false,
  topic: 'topic2',
  worksheetSource: 'Admin Created',
  classifications: ['Right Triangles', 'Math', "Lots Of Math"],
  totalVideoMinutesWatched: '124',
  totalVideoMinutesAllMissedProblems: '312',
  questions: sampleQuestions
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
  assignTime: '3:01 PM',
  availableDate: '1/24/19',
  dueDate: '2/27/19',
  dueTime: '9:32 AM',
  completionDate: '',
  completionTime: '',
  completedProblems: 4,
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
  topic: 'topic3',
  worksheetSource: 'User Created',
  classifications: ['Trigonometry', 'More Math', "Lots Of Math"],
  totalVideoMinutesWatched: '311',
  totalVideoMinutesAllMissedProblems: '401',
  questions: sampleQuestions
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
  assignTime: '3:01 PM',
  availableDate: '1/12/19',
  dueDate: '2/03/19',
  dueTime: '9:32 AM',
  completionDate: '3/12/19',
  completionTime: '2:53 PM',
  completedProblems: 6,
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
  topic: 'topic3',
  worksheetSource: 'Admin Created',
  classifications: ['Trigonometry', 'Math', "Lots Of Math"],
  totalVideoMinutesWatched: '51',
  totalVideoMinutesAllMissedProblems: '200',
  questions: sampleQuestions
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
  assignTime: '3:01 PM',
  availableDate: '1/09/19',
  dueDate: '2/12/19',
  dueTime: '9:32 AM',
  completionDate: '',
  completionTime: '',
  completedProblems: 5,
  completionLevel: 'Not Started',
  unit: 'Reading Unit #4',
  passage: '153',
  type: 'challenge + practice',
  flags: [],
  status: 'Developing',
  disabled: false,
  late: false,
  topic: 'topic4',
  worksheetSource: 'User Created',
  classifications: ['Right Triangles', 'Trigonometry', 'More Math'],
  totalVideoMinutesWatched: '83',
  totalVideoMinutesAllMissedProblems: '305',
  questions: sampleQuestions
}]);
// EXTERNAL MODULE: ./components/utils/sortFunctions.js
var sortFunctions = __webpack_require__("PFiW");

// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/utils/index.js
const getAnswerChoiceColors = (answerLetter, correctAnswer, studentAnswer) => {
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
const getAnswerPercentageBreakdownColors = (colorType, answerLetter, answerPercentage, correctAnswer, studentAnswer) => {
  if (correctAnswer) {
    if (colorType === 'full') {
      return {
        backgroundColor: '#32955c',
        color: '#fff'
      };
    }

    return {
      width: `${answerPercentage}%`,
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
      width: `${answerPercentage}%`,
      backgroundColor: '#db1d41'
    };
  }

  if (colorType === 'full') {
    return {
      backgroundColor: '#e5e5e5'
    };
  }

  return {
    width: `${answerPercentage}%`,
    backgroundColor: '#e5e5e5'
  };
};
const getAnswerColor = answer => {
  if (answer.correctAnswer) {
    return {
      color: '#3eb777',
      borderColor: '#32955c'
    };
  }

  return null;
};
const difficultyMap = {
  'Easy': 'E',
  'Medium': 'M',
  'Difficult': 'D'
};
const getCompleteAnswerColor = (answerType, answer, studentAnswer) => {
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
const LessonWorksheetTestSection_utils_statusColorMap = {
  Assigned: 'grey darken-4',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple'
};
const utils_chartColorMap = {
  Assigned: '#333',
  Accomplished: '#7327cc',
  Beginning: '#ed1c24',
  Exemplary: 'rgb(0, 100, 244)',
  Developing: '#c10078'
};
const LessonWorksheetTestSection_utils_data = (percentage, status, colorOverride = null) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [colorOverride || utils_chartColorMap[status], '#eaeaea']
  }]
});
const utils_formatTimeEstimate = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  const hourString = hours !== 0 ? `${hours}:` : '';
  const minuteString = minutes !== 0 ? `${minutes}` : '';
  return `${hourString}${minuteString}`;
};
// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/components/Question/index.js

var Question_jsx = external_react_default.a.createElement;



class Question_Question extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapAnswerChoices", () => {
      const {
        question: {
          answerType,
          answerChoices,
          studentAnswer
        },
        answerSheetComplete
      } = this.props;

      if (answerSheetComplete) {
        if (answerType === 'letter') {
          return Question_jsx("ul", {
            className: "answer-list"
          }, answerChoices.map(answer => Question_jsx("li", {
            key: answer.answerLetter
          }, Question_jsx("span", {
            className: "badge-circle badge-circle-bordered",
            style: getCompleteAnswerColor('letter', answer, studentAnswer)
          }, answer.answerLetter))));
        }

        return Question_jsx("ul", {
          className: "answer-list"
        }, answerChoices.map(answer => Question_jsx("li", {
          key: answer.answerValue
        }, Question_jsx("span", {
          className: "badge badge-rounded badge-rounded-bordered",
          style: getCompleteAnswerColor('value', answer, studentAnswer)
        }, answer.answerValue))));
      }

      if (answerType === 'letter') {
        return Question_jsx("ul", {
          className: "answer-list"
        }, answerChoices.map(answer => Question_jsx("li", {
          key: answer.answerLetter
        }, Question_jsx("span", {
          className: "badge-circle badge-circle-bordered",
          style: getAnswerColor(answer)
        }, answer.answerLetter))));
      }

      return Question_jsx("ul", {
        className: "answer-list"
      }, answerChoices.map(answer => Question_jsx("li", {
        key: answer.answerValue
      }, Question_jsx("span", {
        className: "badge badge-rounded badge-rounded-bordered",
        style: getAnswerColor(answer)
      }, answer.answerValue))));
    });
  }

  render() {
    const {
      onOpenQuestionModal,
      question,
      answerSheetComplete,
      handleQuestionDropdownClick,
      questionDropdownOpen,
      questionDropdownIndex
    } = this.props;
    const {
      difficulty,
      hasVideo,
      flagged,
      studentNotes
    } = question;
    return Question_jsx("li", {
      className: "answers-list-holder"
    }, Question_jsx("div", {
      className: "answer-row row mb-0"
    }, Question_jsx("div", {
      className: "col col-120"
    }, this.mapAnswerChoices()), Question_jsx("div", {
      className: "col col-30"
    }, Question_jsx("span", {
      className: "status-info"
    }, difficultyMap[difficulty])), hasVideo && Question_jsx("div", {
      className: "col col-43"
    }, Question_jsx("span", {
      className: "play-progress",
      "data-video-id": "video001"
    }, Question_jsx("span", {
      className: "play"
    }), Question_jsx("svg", {
      viewBox: "0 0 50 50",
      width: "50",
      height: "50",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, Question_jsx("circle", {
      className: "circle-static",
      cx: "25.8",
      cy: "24.3",
      r: "22.8",
      style: {
        strokeWidth: '3',
        fill: 'rgba(0,0,0,0)'
      }
    }), Question_jsx("circle", {
      className: "circle-progress",
      cx: "25.8",
      cy: "24.3",
      r: "22.8",
      style: {
        stroke: 'none',
        strokeWidth: '3',
        fill: 'rgba(0,0,0,0)'
      }
    })))), Question_jsx("div", {
      className: "col col-auto"
    }, answerSheetComplete && flagged ? Question_jsx("span", {
      className: "status-answer",
      style: {
        color: '#c0272d'
      }
    }, Question_jsx("i", {
      className: "icon-flag"
    }), Question_jsx("b", {
      className: "status-text"
    }, "Review")) : null), Question_jsx("div", {
      className: "dropdown-block col col-35"
    }, Question_jsx("a", {
      href: "#",
      className: "dropdown-trigger",
      "data-target": "dropdown_answer01-3",
      onClick: event => handleQuestionDropdownClick(event, question)
    }, Question_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), questionDropdownOpen && question.id === questionDropdownIndex ? Question_jsx("ul", {
      id: "dropdown_answer01-3",
      className: "dropdown-content dropdown-exwide",
      style: {
        display: 'block',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, Question_jsx("li", null, Question_jsx("a", {
      className: "modal-trigger",
      href: "#",
      onClick: () => onOpenQuestionModal(question)
    }, "View Problem")), Question_jsx("li", null, Question_jsx("a", {
      href: "#!"
    }, "Dismiss Flag")), Question_jsx("li", null, Question_jsx("a", {
      href: "#!"
    }, "Edit Response"))) : null)), answerSheetComplete && studentNotes ? Question_jsx("div", {
      className: "comment-block"
    }, Question_jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?")) : null);
  }

}

;
/* harmony default export */ var components_Question = (Question_Question);
// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/components/PracticeQuestions/index.js

var PracticeQuestions_jsx = external_react_default.a.createElement;



class PracticeQuestions_PracticeQuestions extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapQuestions", () => this.props.questions.map(question => PracticeQuestions_jsx(components_Question, {
      key: question.id,
      question: question,
      questionDropdownIndex: this.props.questionDropdownIndex,
      questionDropdownOpen: this.props.questionDropdownOpen,
      answerSheetComplete: this.props.answerSheetComplete,
      onOpenQuestionModal: this.props.onOpenQuestionModal,
      handleQuestionDropdownClick: this.props.handleQuestionDropdownClick
    })));
  }

  render() {
    return PracticeQuestions_jsx("div", {
      className: "col s12 l6"
    }, PracticeQuestions_jsx("div", {
      className: "card-block"
    }, PracticeQuestions_jsx("h2", null, "Practice"), PracticeQuestions_jsx("div", {
      className: "card"
    }, PracticeQuestions_jsx("div", {
      className: "card-content"
    }, PracticeQuestions_jsx("ol", {
      className: "answers-list"
    }, this.mapQuestions())))));
  }

}

/* harmony default export */ var components_PracticeQuestions = (PracticeQuestions_PracticeQuestions);
// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/components/ChallengeQuestions/index.js

var ChallengeQuestions_jsx = external_react_default.a.createElement;



class ChallengeQuestions_ChallengeQuestions extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapQuestions", () => this.props.questions.map(question => ChallengeQuestions_jsx(components_Question, {
      key: question.id,
      question: question,
      questionDropdownIndex: this.props.questionDropdownIndex,
      questionDropdownOpen: this.props.questionDropdownOpen,
      answerSheetComplete: this.props.answerSheetComplete,
      onOpenQuestionModal: this.props.onOpenQuestionModal,
      handleQuestionDropdownClick: this.props.handleQuestionDropdownClick
    })));
  }

  render() {
    return ChallengeQuestions_jsx("div", {
      className: "col s12 l6"
    }, ChallengeQuestions_jsx("div", {
      className: "card-block"
    }, ChallengeQuestions_jsx("h2", null, "Challenge"), ChallengeQuestions_jsx("div", {
      className: "card-answer card"
    }, ChallengeQuestions_jsx("div", {
      className: "card-content"
    }, ChallengeQuestions_jsx("ol", {
      className: "answers-list"
    }, this.mapQuestions())))));
  }

}

/* harmony default export */ var components_ChallengeQuestions = (ChallengeQuestions_ChallengeQuestions);
// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/components/QuestionModal/index.js


var QuestionModal_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/media-has-caption */





class QuestionModal_QuestionModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "toggleReviewedStatus", () => this.setState(({
      reviewedWithStudent
    }) => ({
      reviewedWithStudent: !reviewedWithStudent
    })));

    Object(defineProperty["a" /* default */])(this, "mapAnswerChoices", () => {
      const {
        question: {
          answerChoices,
          studentAnswer
        }
      } = this.props;

      if (answerChoices[0].answerLetter) {
        return answerChoices.map(answer => QuestionModal_jsx("li", {
          className: "answer-block",
          key: answer.answerLetter
        }, QuestionModal_jsx("div", {
          className: "answer-box",
          style: getAnswerChoiceColors(answer.answerLetter, answer.correctAnswer, studentAnswer)
        }, QuestionModal_jsx("b", {
          className: "answer-circle"
        }, answer.answerLetter, "."), QuestionModal_jsx("span", {
          className: "answer-text"
        }, answer.answerText))));
      }

      return answerChoices.map(answer => QuestionModal_jsx("li", {
        className: "answer-block",
        key: answer.answerValue
      }, QuestionModal_jsx("div", {
        className: "answer-box",
        style: getAnswerChoiceColors(answer.answerValue, answer.correctAnswer, studentAnswer)
      }, QuestionModal_jsx("span", {
        className: "answer-text",
        style: {
          marginLeft: '30px'
        }
      }, answer.answerValue))));
    });

    Object(defineProperty["a" /* default */])(this, "renderAnswerPercentageBreakdown", () => {
      const {
        question: {
          answerChoices,
          studentAnswer
        }
      } = this.props;

      if (answerChoices[0].answerLetter) {
        return answerChoices.map(answer => QuestionModal_jsx("li", {
          className: "informer-block",
          key: answer.answerLetter
        }, QuestionModal_jsx("div", {
          className: "informer-box",
          style: getAnswerPercentageBreakdownColors('half', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)
        }, QuestionModal_jsx("b", {
          className: "informer-circle",
          style: getAnswerPercentageBreakdownColors('full', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)
        }, answer.answerLetter)), QuestionModal_jsx("b", {
          className: "informer-value"
        }, answer.answerPercentage, "%")));
      }

      return answerChoices.map(answer => QuestionModal_jsx("li", {
        className: "informer-block",
        key: answer.answerValue
      }, QuestionModal_jsx("div", {
        className: "informer-box",
        style: getAnswerPercentageBreakdownColors('half', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)
      }, QuestionModal_jsx("b", {
        className: "informer-circle",
        style: getAnswerPercentageBreakdownColors('full', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)
      }, answer.answerValue)), QuestionModal_jsx("b", {
        className: "informer-value"
      }, answer.answerPercentage, "%")));
    });

    this.state = {
      reviewedWithStudent: false
    };
  }

  render() {
    const {
      open,
      onCloseModal,
      question = {}
    } = this.props;
    const {
      reviewedWithStudent
    } = this.state;
    const {
      topic,
      questionType,
      question: questionText,
      hasVideo,
      flagged,
      questionNumber,
      videoSource,
      studentNotes,
      passage,
      videoThumbnail
    } = question;
    return QuestionModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "overlay"
    }, QuestionModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: onCloseModal
    }, QuestionModal_jsx("div", {
      id: "modal_video001",
      className: "jsx-4127667448" + " " + "modal modal-answer"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "modal-header row mb-0"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col s10"
    }, QuestionModal_jsx("span", {
      className: "jsx-4127667448" + " " + "subtitle"
    }, topic), QuestionModal_jsx("span", {
      className: "jsx-4127667448" + " " + "title"
    }, questionType, " Problem #", questionNumber)), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col s2 right-align"
    }, QuestionModal_jsx("a", {
      href: "#",
      onClick: onCloseModal,
      className: "jsx-4127667448" + " " + "close modal-close"
    }, QuestionModal_jsx("i", {
      className: "jsx-4127667448" + " " + "icon-close-thin"
    })))), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "modal-content"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "d-flex row mb-0"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col s12 l6 order-lg-2"
    }, hasVideo && QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "card-panel"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "video-frame"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "embed-responsive embed-responsive-16by9"
    }, QuestionModal_jsx("video", {
      id: "video001",
      "data-current-time": "0",
      poster: videoThumbnail,
      preload: "metadata",
      controls: true,
      playsinline: true,
      className: "jsx-4127667448" + " " + "in-modal embed-responsive-item"
    }, QuestionModal_jsx("source", {
      type: "video/mp4",
      src: videoSource,
      className: "jsx-4127667448"
    }))))), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "card-panel"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "panel-block"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "d-flex align-items-center row mb-0"
    }, flagged && QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col"
    }, QuestionModal_jsx("span", {
      style: {
        color: '#c0272d'
      },
      className: "jsx-4127667448" + " " + "status-answer"
    }, QuestionModal_jsx("i", {
      className: "jsx-4127667448" + " " + "icon-flag"
    }), QuestionModal_jsx("b", {
      className: "jsx-4127667448" + " " + "status-text"
    }, "Flagged"))), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col"
    }, QuestionModal_jsx("label", {
      className: "jsx-4127667448"
    }, QuestionModal_jsx("input", {
      type: "checkbox",
      checked: reviewedWithStudent,
      onChange: this.toggleReviewedStatus,
      className: "jsx-4127667448" + " " + "filled-in"
    }), QuestionModal_jsx("span", {
      className: "jsx-4127667448"
    }, QuestionModal_jsx("b", {
      className: "jsx-4127667448"
    }, "Reviewed with Student")))))), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "panel-block"
    }, QuestionModal_jsx("ul", {
      className: "jsx-4127667448" + " " + "informers-list"
    }, this.renderAnswerPercentageBreakdown())), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "panel-block"
    }, QuestionModal_jsx("strong", {
      className: "jsx-4127667448" + " " + "subtitle"
    }, "Student\u2019s Notes:"), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "text-content custom-form"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "jcf-scrollable height-22"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "text-holder"
    }, studentNotes)))))), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col s12 l6 order-lg-1"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "card-panel"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "text-content custom-form"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "jcf-scrollable height-45"
    }, QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "text-holder"
    }, passage)))), QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "card-panel"
    }, QuestionModal_jsx("strong", {
      className: "jsx-4127667448" + " " + "h3 subtitle"
    }, questionText), QuestionModal_jsx("ul", {
      className: "jsx-4127667448" + " " + "answer-full-list"
    }, this.mapAnswerChoices())))))))), QuestionModal_jsx(style_default.a, {
      id: "4127667448"
    }, [".overlay.jsx-4127667448{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:9999;}", ".modal-answer.jsx-4127667448{opacity:1;visibility:visible;}"]));
  }

}

/* harmony default export */ var components_QuestionModal = (QuestionModal_QuestionModal);
// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/components/CardSection/index.js
var CardSection_jsx = external_react_default.a.createElement;




const CardSection = ({
  completionLevel,
  problems,
  completedProblems,
  status,
  flags,
  totalVideoMinutesWatched,
  totalVideoMinutesAllMissedProblems
}) => {
  const percentageComplete = Number(completedProblems / problems * 100).toFixed(0);
  const videoWatchedPercentage = Number(totalVideoMinutesWatched / totalVideoMinutesAllMissedProblems * 100).toFixed(0);
  return CardSection_jsx("div", {
    className: "cards-section"
  }, CardSection_jsx("div", {
    className: "d-flex same-height justify-center row mb-0"
  }, CardSection_jsx("div", {
    className: "col s12 l5 col-435"
  }, CardSection_jsx("div", {
    className: "card-block"
  }, CardSection_jsx("h2", null, "Performance"), CardSection_jsx("div", {
    className: "card-student-detail card-main-full card"
  }, CardSection_jsx("div", {
    className: "card-content"
  }, CardSection_jsx("div", {
    className: "d-flex sameheight-all row mb-0"
  }, CardSection_jsx("div", {
    className: "col s6"
  }, CardSection_jsx("div", {
    className: "chart-container chart-container-195"
  }, CardSection_jsx("div", {
    className: "chart-holder"
  }, CardSection_jsx(external_react_chartjs_2_["Doughnut"], {
    data: () => LessonWorksheetTestSection_utils_data(percentageComplete, status),
    options: {
      circumference: 1 * Math.PI,
      rotation: 1 * Math.PI,
      cutoutPercentage: 60,
      tooltips: false
    }
  }), CardSection_jsx("span", {
    className: "chart-value",
    style: {
      backgroundColor: utils_chartColorMap[status]
    }
  }, CardSection_jsx("span", {
    "data-count-up": true,
    "data-start-val": "0",
    "data-end-val": "75",
    "data-duration": "1"
  }), CardSection_jsx("span", {
    className: "percentage"
  }, completionLevel === 'Complete' ? percentageComplete : '', completionLevel !== 'Started' ? '%' : ''))), CardSection_jsx("div", {
    className: "chart-row"
  }, CardSection_jsx("div", {
    className: "chart-col chart-start"
  }, "\xA0"), CardSection_jsx("div", {
    className: "chart-col chart-end"
  }, CardSection_jsx("span", {
    className: "amount",
    style: {
      color: utils_chartColorMap[status]
    }
  }, problems))))), CardSection_jsx("div", {
    className: "col s6"
  }, CardSection_jsx("div", {
    className: "card-description"
  }, CardSection_jsx("dl", {
    className: "dl-horizontal"
  }, CardSection_jsx("dt", {
    className: "text-large"
  }, "Status:"), CardSection_jsx("dd", {
    className: "text-large"
  }, completionLevel)), CardSection_jsx("b", {
    className: "text-small"
  }, completedProblems, " out of ", problems, " ", completionLevel === 'Started' ? 'completed' : 'correct')), CardSection_jsx("div", {
    className: "card-description"
  }, completionLevel === 'Completed' || completionLevel === 'Instructor Editing' ? [CardSection_jsx("dl", {
    className: "dl-horizontal",
    key: "0"
  }, CardSection_jsx("dt", {
    className: "text-large"
  }, "Score:"), CardSection_jsx("dd", {
    className: "text-large"
  }, percentageComplete, "%")), CardSection_jsx("b", {
    className: "text-small",
    key: "1"
  }, completedProblems, " out of ", problems, " correct")] : CardSection_jsx("span", {
    className: "text-large gray-text"
  }, "Score: Incomplete")), CardSection_jsx("div", {
    className: "align-self-end"
  }, CardSection_jsx("span", {
    className: `badge badge-rounded-lg ${LessonWorksheetTestSection_utils_statusColorMap[status]} white-text`
  }, status)))))))), CardSection_jsx("div", {
    className: "col s12 l3 col-320"
  }, CardSection_jsx("div", {
    className: "card-block"
  }, CardSection_jsx("h2", null, "Video"), CardSection_jsx("div", {
    className: "card-student-detail card-main-full card"
  }, CardSection_jsx("div", {
    className: "card-content"
  }, CardSection_jsx("div", {
    className: "d-flex sameheight-all row mb-0 align-center"
  }, CardSection_jsx("div", {
    className: "col s6",
    style: {
      marginBottom: '12px'
    }
  }, CardSection_jsx("div", {
    className: "chart-container chart-container-195"
  }, CardSection_jsx("div", {
    className: "chart-holder",
    style: {
      width: '130px'
    }
  }, CardSection_jsx("span", {
    style: {
      position: 'absolute',
      top: '30px',
      left: '42px'
    }
  }, CardSection_jsx("span", {
    style: {
      fontSize: '23px',
      fontWeight: '700',
      color: '#02baf7'
    }
  }, utils_formatTimeEstimate(totalVideoMinutesWatched)), " ", CardSection_jsx("br", null), CardSection_jsx("span", {
    style: {
      fontSize: '16px',
      color: '#bbbbbb'
    }
  }, "out of"), " ", CardSection_jsx("br", null), CardSection_jsx("span", {
    style: {
      fontSize: '23px',
      fontWeight: '700',
      color: '#838383'
    }
  }, utils_formatTimeEstimate(totalVideoMinutesAllMissedProblems))), CardSection_jsx(external_react_chartjs_2_["Doughnut"], {
    data: () => LessonWorksheetTestSection_utils_data(videoWatchedPercentage, status, '#02baf7'),
    height: 300,
    width: 300,
    options: {
      circumference: 2 * Math.PI,
      rotation: 1 * Math.PI,
      cutoutPercentage: 70,
      tooltips: false
    }
  })))), CardSection_jsx("div", {
    className: "col s6"
  }, CardSection_jsx("div", {
    className: "video-description"
  }, CardSection_jsx("strong", {
    className: "blue-text"
  }, "total minutes of video watched")), CardSection_jsx("div", {
    className: "video-description"
  }, CardSection_jsx("strong", {
    className: "grey-text"
  }, "total minutes of video for all missed problems")))))))), CardSection_jsx("div", {
    className: "col s12 l3 col-320"
  }, CardSection_jsx("div", {
    className: "card-block"
  }, CardSection_jsx("h2", null, "Flagged for Review"), CardSection_jsx("div", {
    className: "card-student-detail card-main-full card"
  }, CardSection_jsx("div", {
    className: "card-content"
  }, CardSection_jsx("div", {
    className: "d-flex sameheight-all row mb-0"
  }, CardSection_jsx("div", {
    className: "col s12"
  }, CardSection_jsx("div", {
    className: "badges-container"
  }, CardSection_jsx("div", {
    className: "badge-block red-text"
  }, CardSection_jsx("span", {
    className: "badge-rounded-md badge red darken-2 white-text"
  }, CardSection_jsx("b", {
    className: "badge-text"
  }, flags.filter(flag => flag.status === 'toReview').length), " ", CardSection_jsx("i", {
    className: "icon-flag"
  })), CardSection_jsx("span", {
    className: "badge-block-text"
  }, "To Review")), CardSection_jsx("div", {
    className: "badge-block"
  }, CardSection_jsx("span", {
    className: "badge-rounded-md badge grey darken-2 white-text"
  }, CardSection_jsx("b", {
    className: "badge-text"
  }, flags.filter(flag => flag.status === 'reviewed').length), " ", CardSection_jsx("i", {
    className: "icon-flag"
  })), CardSection_jsx("span", {
    className: "badge-block-text"
  }, "Reviewed")))))))))));
};

/* harmony default export */ var components_CardSection = (CardSection);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("5Buo");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css
var react_datepicker_cssmodules = __webpack_require__("xA6B");

// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/components/ReassignModal/index.js


var ReassignModal_jsx = external_react_default.a.createElement;








class ReassignModal_ReassignModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onResetModal", () => this.setState({
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(this, "reassignDate", () => {
      const {
        onReassignDate
      } = this.props;
      const {
        assignDate: unformattedAssignDate,
        assignTime: unformattedAssignTime,
        dueDate: unformattedDueDate,
        dueTime: unformattedDueTime
      } = this.state;
      const assignDate = external_moment_default()(unformattedAssignDate).format('MM/DD/YY');
      const assignTime = external_moment_default()(unformattedAssignTime).format('hh:mm');
      const dueDate = external_moment_default()(unformattedDueDate).format('MM/DD/YY');
      const dueTime = external_moment_default()(unformattedDueTime).format('hh:mm');
      onReassignDate({
        assignDate,
        assignTime,
        dueDate,
        dueTime
      });
      this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(this, "handleDatePickerChange", (field, value) => this.setState({
      [field]: value
    }));

    this.state = {
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: ''
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      assignDate,
      assignTime,
      dueDate,
      dueTime
    } = this.state;
    return ReassignModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "overlay"
    }, ReassignModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCloseModal
    }, ReassignModal_jsx("div", {
      id: "modal_reschedule",
      className: "jsx-2170258732" + " " + "modal modal-custom modal-calendar"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "card-modal card"
    }, ReassignModal_jsx("div", {
      style: {
        backgroundColor: '#25bbf7',
        color: '#fff'
      },
      className: "jsx-2170258732" + " " + "card-panel card-panel-title"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "card-panel-row row"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "col"
    }, ReassignModal_jsx("h2", {
      className: "jsx-2170258732"
    }, ReassignModal_jsx("span", {
      className: "jsx-2170258732" + " " + "heading-holder"
    }, ReassignModal_jsx("span", {
      className: "jsx-2170258732" + " " + "heading-block"
    }, "Reschedule")))), ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "col right-align"
    }, ReassignModal_jsx("a", {
      href: "#",
      className: "jsx-2170258732" + " " + "panel-link close modal-close"
    }, ReassignModal_jsx("i", {
      className: "jsx-2170258732" + " " + "icon-close-thin"
    }))))), ReassignModal_jsx("div", {
      style: {
        height: '410px'
      },
      className: "jsx-2170258732" + " " + "card-content"
    }, ReassignModal_jsx("div", {
      style: {
        height: '335px'
      },
      className: "jsx-2170258732" + " " + "card-body"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "modal-row row"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "col s6"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "datepicker-field input-field"
    }, ReassignModal_jsx("i", {
      className: "jsx-2170258732" + " " + "icon-calendar"
    }), ReassignModal_jsx(external_react_datepicker_default.a, {
      selected: assignDate,
      withPortal: true,
      dateFormat: "MM/dd/yy",
      id: "assignDate",
      name: "assignDate",
      onChange: event => this.handleDatePickerChange('assignDate', event)
    }), ReassignModal_jsx("label", {
      htmlFor: "new_test_section_assign_date",
      className: "jsx-2170258732" + " " + ((assignDate ? 'label active' : 'label') || "")
    }, "Assign For"))), ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "col s6"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "datepicker-field input-field"
    }, ReassignModal_jsx("i", {
      className: "jsx-2170258732" + " " + "icon-clock2"
    }), ReassignModal_jsx(external_react_datepicker_default.a, {
      selected: assignTime,
      withPortal: true,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "assignTime",
      name: "assignTime",
      onChange: event => this.handleDatePickerChange('assignTime', event)
    }), ReassignModal_jsx("label", {
      htmlFor: "assignTime",
      className: "jsx-2170258732" + " " + ((assignTime ? 'label active' : 'label') || "")
    }, "Time")))), ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "modal-row row"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "col s6"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "datepicker-field input-field"
    }, ReassignModal_jsx("i", {
      className: "jsx-2170258732" + " " + "icon-calendar"
    }), ReassignModal_jsx(external_react_datepicker_default.a, {
      selected: dueDate,
      withPortal: true,
      dateFormat: "MM/dd/yy",
      id: "dueDate",
      name: "dueDate",
      onChange: event => this.handleDatePickerChange('dueDate', event)
    }), ReassignModal_jsx("label", {
      htmlFor: "dueDate",
      className: "jsx-2170258732" + " " + ((dueDate ? 'label active' : 'label') || "")
    }, "Due (optional)"))), ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "col s6"
    }, ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "datepicker-field input-field"
    }, ReassignModal_jsx("i", {
      className: "jsx-2170258732" + " " + "icon-clock2"
    }), ReassignModal_jsx(external_react_datepicker_default.a, {
      selected: dueTime,
      withPortal: true,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "dueTime",
      name: "dueTime",
      onChange: event => this.handleDatePickerChange('dueTime', event)
    }), ReassignModal_jsx("label", {
      htmlFor: "dueTime",
      className: "jsx-2170258732" + " " + ((dueTime ? 'label active' : 'label') || "")
    }, "Time")))), ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "modal-row row"
    }, ReassignModal_jsx("p", {
      className: "jsx-2170258732"
    }, "\xA0"))), ReassignModal_jsx("div", {
      className: "jsx-2170258732" + " " + "modal-footer modal-footer-width"
    }, ReassignModal_jsx("a", {
      href: "#",
      className: "jsx-2170258732" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), ReassignModal_jsx("a", {
      href: "#",
      className: "jsx-2170258732" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Save Changes"))))))), ReassignModal_jsx(style_default.a, {
      id: "2170258732"
    }, [".card-modal.jsx-2170258732{margin:0;border-radius:6px;}", ".overlay.jsx-2170258732{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:2003;}", ".modal-custom.jsx-2170258732{opacity:1;visibility:visible;}", ".modal-footer.jsx-2170258732{background-color:white;}", "#modal_reschedule.jsx-2170258732{top:10%;}", "div.react-datepicker__portal.jsx-2170258732{height:100%!important;width:100%!important;}"]));
  }

}

/* harmony default export */ var components_ReassignModal = (ReassignModal_ReassignModal);
// CONCATENATED MODULE: ./components/Student/LessonWorksheetTestSection/index.js

var LessonWorksheetTestSection_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-did-mount-set-state */

/* eslint-disable react/no-did-update-set-state */

/* eslint-disable jsx-a11y/no-static-element-interactions */









class LessonWorksheetTestSection_LessonWorksheetTestSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleReassignModal", () => this.setState(({
      reassigNModalOpen
    }) => ({
      reassigNModalOpen: !reassigNModalOpen,
      dropdownIsOpen: false
    })));

    Object(defineProperty["a" /* default */])(this, "onToggleQuestionModal", (selectedQuestion = {}) => this.setState(({
      questionModalOpen
    }) => ({
      questionModalOpen: !questionModalOpen,
      selectedQuestion,
      questionDropdownOpen: false,
      questionDropdownIndex: null
    })));

    Object(defineProperty["a" /* default */])(this, "onOpenDropdown", () => this.setState({
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onReassignDate", (assignDate, assignTime, dueDate, dueTime) => {
      console.warn('Stubbed out date functionality', assignDate, assignTime, dueDate, dueTime);
    });

    Object(defineProperty["a" /* default */])(this, "handleQuestionDropdownClick", (event, question) => {
      const {
        questionDropdownOpen,
        questionDropdownIndex
      } = this.state;
      event.preventDefault();

      if (questionDropdownOpen && question.id === questionDropdownIndex) {
        this.setState({
          questionDropdownOpen: false,
          questionDropdownIndex: null
        });
      } else if (questionDropdownOpen && question !== questionDropdownIndex) {
        this.setState({
          questionDropdownIndex: question.id
        });
      } else if (questionDropdownOpen && question.id === questionDropdownIndex) {
        this.setState({
          questionDropdownOpen: false,
          questionDropdownIndex: null
        });
      } else {
        this.setState({
          questionDropdownOpen: true,
          questionDropdownIndex: question.id
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "handleDropdownClick", event => {
      const {
        dropdownIsOpen
      } = this.state;
      event.preventDefault();

      if (dropdownIsOpen) {
        return this.onCloseDropdown();
      }

      return this.onOpenDropdown();
    });

    this.state = {
      selectedQuestion: {},
      questionModalOpen: false,
      answerSheetComplete: false,
      questions: sampleQuestions,
      dropdownIsOpen: false,
      questionDropdownOpen: false,
      questionDropdownIndex: null,
      reassigNModalOpen: false
    };
  }

  componentDidMount() {
    if (this.props.worksheet.completionLevel !== 'Not Started') {
      this.setState({
        answerSheetComplete: true
      });
    }
  }

  componentDidUpdate(prevProps) {
    const {
      worksheet
    } = this.props;

    if (prevProps.worksheet.id !== worksheet.id) {
      if (worksheet.completionLevel === 'Not Started') {
        this.setState({
          answerSheetComplete: false
        });
      } else {
        this.setState({
          answerSheetComplete: true
        });
      }
    }
  }

  render() {
    const {
      questionModalOpen,
      selectedQuestion,
      questions,
      answerSheetComplete,
      dropdownIsOpen,
      questionDropdownOpen,
      questionDropdownIndex,
      reassigNModalOpen
    } = this.state;
    const {
      onClose,
      worksheet,
      user = {}
    } = this.props;
    const {
      studentInformation: {
        firstName,
        lastName
      }
    } = user;
    return LessonWorksheetTestSection_jsx(external_react_default.a.Fragment, null, LessonWorksheetTestSection_jsx(components_QuestionModal, {
      open: questionModalOpen,
      question: selectedQuestion,
      onCloseModal: this.onToggleQuestionModal
    }), LessonWorksheetTestSection_jsx(components_ReassignModal, {
      open: reassigNModalOpen,
      onClose: this.onToggleReassignModal,
      onReassignDate: this.onReassignDate
    }), LessonWorksheetTestSection_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "wrapper modal",
      style: {
        zIndex: '1003',
        display: 'block',
        position: 'absolute',
        top: '0',
        width: '100%'
      }
    }, LessonWorksheetTestSection_jsx("div", {
      className: "header-box card-panel light-blue lighten-1 white-text",
      style: {
        zIndex: '9'
      }
    }, LessonWorksheetTestSection_jsx("div", {
      className: "header-flex-row row mb-0"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "col s12 m7 xl8"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "header-holder"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "header-col"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "icon-col"
    }, LessonWorksheetTestSection_jsx("i", {
      className: "icon-books-l"
    }), LessonWorksheetTestSection_jsx("span", {
      className: "text-icon"
    }, "Lesson"))), LessonWorksheetTestSection_jsx("div", {
      className: "header-col"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "card-panel-text"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "text-small"
    }, worksheet.unit), LessonWorksheetTestSection_jsx("h1", {
      className: "text-large"
    }, worksheet.worksheetName), LessonWorksheetTestSection_jsx("div", {
      className: "text-small"
    }, "p.", worksheet.passage, "  (", worksheet.type, ")"))))), LessonWorksheetTestSection_jsx("div", {
      className: "col s9 m4 xl3 position-mobile-left"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "card-panel-text"
    }, LessonWorksheetTestSection_jsx("h2", {
      className: "text-large"
    }, firstName, " ", lastName), LessonWorksheetTestSection_jsx("dl", {
      className: "text-small dl-horizontal"
    }, LessonWorksheetTestSection_jsx("dt", null, "Assigned:"), LessonWorksheetTestSection_jsx("dd", null, LessonWorksheetTestSection_jsx("time", {
      dateTime: "2019-01-06T08:00"
    }, worksheet.assignDate, " at ", worksheet.assignTime))), LessonWorksheetTestSection_jsx("dl", {
      className: "text-small dl-horizontal"
    }, LessonWorksheetTestSection_jsx("dt", null, "Due:"), LessonWorksheetTestSection_jsx("dd", null, LessonWorksheetTestSection_jsx("time", {
      dateTime: "2019-01-06T16:00"
    }, worksheet.dueDate, " at ", worksheet.dueTime))), worksheet.completionDate ? LessonWorksheetTestSection_jsx("dl", {
      className: "text-small dl-horizontal"
    }, LessonWorksheetTestSection_jsx("dt", null, "Completed:"), LessonWorksheetTestSection_jsx("dd", null, LessonWorksheetTestSection_jsx("time", {
      dateTime: "2019-09-01T06:59"
    }, worksheet.completionDate, " at ", worksheet.completionTime))) : null)), LessonWorksheetTestSection_jsx("div", {
      className: "col s2 m1 right-align position-mobile-right"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "dropdown-block"
    }, LessonWorksheetTestSection_jsx("a", {
      href: "#",
      "data-target": "dropdown_top",
      className: "dropdown-trigger btn",
      onClick: this.handleDropdownClick
    }, LessonWorksheetTestSection_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen ? LessonWorksheetTestSection_jsx("ul", {
      id: "dropdown_top",
      className: "dropdown-content dropdown-exwide",
      style: {
        display: 'block',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, LessonWorksheetTestSection_jsx("li", null, LessonWorksheetTestSection_jsx("a", {
      href: "#",
      className: "modal-trigger",
      onClick: this.onToggleReassignModal
    }, "Change Date")), LessonWorksheetTestSection_jsx("li", null, LessonWorksheetTestSection_jsx("a", {
      href: "#",
      className: "modal-trigger",
      onClick: this.onToggleReassignModal
    }, "Change Due Date")), LessonWorksheetTestSection_jsx("li", null, LessonWorksheetTestSection_jsx("a", {
      href: "#",
      className: "modal-trigger",
      onClick: this.onToggleReassignModal
    }, "Remove Due Date")), LessonWorksheetTestSection_jsx("li", null, LessonWorksheetTestSection_jsx("a", {
      href: "#"
    }, "Excuse Latness")), LessonWorksheetTestSection_jsx("li", null, LessonWorksheetTestSection_jsx("a", {
      href: "#"
    }, "Reset")), LessonWorksheetTestSection_jsx("li", null, LessonWorksheetTestSection_jsx("a", {
      href: "#",
      className: "link-delete"
    }, "Delete"))) : null), LessonWorksheetTestSection_jsx("div", {
      className: "close-block",
      onClick: onClose
    }, LessonWorksheetTestSection_jsx("a", {
      href: "#",
      className: "modal-close close"
    }, LessonWorksheetTestSection_jsx("i", {
      className: "icon-close-thin"
    })))))), LessonWorksheetTestSection_jsx("div", {
      className: "content-section content-section-85"
    }, LessonWorksheetTestSection_jsx("div", {
      className: "container-sm"
    }, worksheet.completionLevel !== 'Not Started' ? LessonWorksheetTestSection_jsx(components_CardSection, {
      flags: worksheet.flags,
      status: worksheet.status,
      problems: worksheet.problems,
      completedProblems: worksheet.completedProblems,
      completionLevel: worksheet.completionLevel,
      totalVideoMinutesWatched: worksheet.totalVideoMinutesWatched,
      totalVideoMinutesAllMissedProblems: worksheet.totalVideoMinutesAllMissedProblems
    }) : null, LessonWorksheetTestSection_jsx("div", {
      className: "main-row row"
    }, LessonWorksheetTestSection_jsx(components_ChallengeQuestions, {
      answerSheetComplete: answerSheetComplete,
      questionDropdownIndex: questionDropdownIndex,
      questionDropdownOpen: questionDropdownOpen,
      onOpenQuestionModal: this.onToggleQuestionModal,
      handleQuestionDropdownClick: this.handleQuestionDropdownClick,
      questions: questions.filter(question => question.questionType === 'Challenge')
    }), LessonWorksheetTestSection_jsx(components_PracticeQuestions, {
      answerSheetComplete: answerSheetComplete,
      questionDropdownIndex: questionDropdownIndex,
      questionDropdownOpen: questionDropdownOpen,
      onOpenQuestionModal: this.onToggleQuestionModal,
      handleQuestionDropdownClick: this.handleQuestionDropdownClick,
      questions: questions.filter(question => question.questionType === 'Practice')
    })))))));
  }

}

/* harmony default export */ var Student_LessonWorksheetTestSection = (LessonWorksheetTestSection_LessonWorksheetTestSection);
// CONCATENATED MODULE: ./components/Student/DetailWorksheetPage/index.js

var DetailWorksheetPage_jsx = external_react_default.a.createElement;








class DetailWorksheetPage_DetailWorksheetPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleAssignWorksheetDropdown", event => {
      event.preventDefault();
      this.setState(({
        assignWorksheetDropdownOpen
      }) => ({
        assignWorksheetDropdownOpen: !assignWorksheetDropdownOpen
      }));
    });

    Object(defineProperty["a" /* default */])(this, "onToggleDetailModalOpen", worksheetIndex => this.setState(({
      detailModalOpen,
      worksheets
    }) => ({
      detailModalOpen: !detailModalOpen,
      activeWorksheet: worksheets[worksheetIndex]
    })));

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
          return worksheets.sort(sortFunctions["g" /* dueDate */]);

        case 'assignDate':
          return worksheets.sort(sortFunctions["a" /* assignDate */]);

        case 'problems':
          return worksheets.sort(sortFunctions["v" /* problems */]);

        case 'completed':
          return worksheets.sort(sortFunctions["d" /* completed */]);

        case 'flags':
          return worksheets.sort(sortFunctions["k" /* flags */]);

        case 'score':
          return worksheets.sort(sortFunctions["w" /* score */]);

        case 'timeEstimate':
          return worksheets.sort(sortFunctions["B" /* timeEstimate */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "getMappableWorksheets", () => {
      const {
        filterName,
        filterTopic,
        worksheets: allWorksheets,
        sort
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

      if (sort) {
        return this.onSortWorksheets(worksheets);
      }

      return worksheets;
    });

    Object(defineProperty["a" /* default */])(this, "checkForFilteredState", () => {
      const {
        filterName,
        filterTopic
      } = this.state;

      if (!filterName.length && !filterTopic.length) {
        this.setState({
          worksheetsAreFiltered: false
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "renderWorksheetView", () => {
      const {
        currentView
      } = this.state;

      switch (currentView) {
        case 'list':
          return DetailWorksheetPage_jsx(components_ListView, {
            onToggleDetailModalOpen: this.onToggleDetailModalOpen,
            worksheets: this.getMappableWorksheets()
          });

        case 'full':
          return DetailWorksheetPage_jsx(components_FullView, {
            onToggleDetailModalOpen: this.onToggleDetailModalOpen,
            worksheets: this.getMappableWorksheets()
          });

        default:
          break;
      }
    });

    this.state = {
      sort: '',
      filterName: '',
      filterTopic: '',
      currentView: 'full',
      assignWorksheetDropdownOpen: false,
      worksheets: sampleWorksheets,
      detailModalOpen: false,
      activeWorksheet: null
    };
  }

  render() {
    const {
      currentView,
      assignWorksheetDropdownOpen,
      detailModalOpen,
      activeWorksheet
    } = this.state;
    const {
      user
    } = this.props;
    return DetailWorksheetPage_jsx(external_react_default.a.Fragment, null, detailModalOpen ? DetailWorksheetPage_jsx(Student_LessonWorksheetTestSection, {
      onClose: this.onToggleDetailModalOpen,
      worksheet: activeWorksheet,
      user: user
    }) : [DetailWorksheetPage_jsx("div", {
      className: "main-holder grey lighten-5 switcher-section",
      key: "0"
    }, DetailWorksheetPage_jsx(components_FilterSection, {
      currentView: currentView,
      onChangeView: this.onChangeView,
      onSetSort: this.onSetSort,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredTopicState: this.onSetFilteredTopicState,
      onUnsetFilteredTopicState: this.onUnsetFilteredTopicState
    }), this.renderWorksheetView()), DetailWorksheetPage_jsx("div", {
      className: "add-btn-block",
      key: "1"
    }, DetailWorksheetPage_jsx("a", {
      href: "#",
      "data-target": "dropdown_assign_selected",
      onClick: this.onToggleAssignWorksheetDropdown,
      className: "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, DetailWorksheetPage_jsx("i", {
      className: "material-icons"
    }, "add"), " Assign Worksheet"), DetailWorksheetPage_jsx("ul", {
      id: "dropdown_assign_selected",
      className: "dropdown-content dropdown-small",
      style: {
        display: assignWorksheetDropdownOpen ? 'block' : '0',
        opacity: assignWorksheetDropdownOpen ? '1' : '0'
      }
    }, DetailWorksheetPage_jsx("li", null, DetailWorksheetPage_jsx("a", {
      href: "#",
      onClick: () => this.onAssignWorksheet('fromSaved')
    }, "From Saved")), DetailWorksheetPage_jsx("li", null, DetailWorksheetPage_jsx("a", {
      href: "#",
      onClick: () => this.onAssignWorksheet('createNew')
    }, "Create New"))))]);
  }

}

/* harmony default export */ var Student_DetailWorksheetPage = (DetailWorksheetPage_DetailWorksheetPage);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/utils/lessonSortOptions.js
/* harmony default export */ var lessonSortOptions = ([{
  label: "Page Number",
  value: "passageAscending"
}, {
  label: "Status/Score",
  value: "statusAscending"
}, {
  label: "Assignment Date",
  value: "availableDateAscending"
}, {
  label: "Due Date",
  value: "dueDate"
}, {
  label: "Flag Count",
  value: "alertsAscending"
}]);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/utils/unitOptions.js
/* harmony default export */ var unitOptions = ([{
  label: "Any",
  value: ""
}, {
  label: "Reading Unit #1",
  value: "Reading Unit #1"
}, {
  label: "Reading Unit #2",
  value: "Reading Unit #2"
}, {
  label: "Reading Unit #3",
  value: "Reading Unit #3"
}, {
  label: "Math Unit #1",
  value: "Math Unit #1"
}, {
  label: "Math Unit #2",
  value: "Math Unit #2"
}, {
  label: "Math Unit #3",
  value: "Math Unit #3"
}, {
  label: "Writing Unit #1",
  value: "Writing Unit #1"
}, {
  label: "Writing Unit #2",
  value: "Writing Unit #2"
}, {
  label: "Writing Unit #3",
  value: "Writing Unit #3"
}]);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/FilterSection/index.js

var DetailLessonList_components_FilterSection_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */







class DetailLessonList_components_FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "handleSortChange", event => {
      const {
        onSetSort
      } = this.props;
      this.setState({
        sort: event
      });
      onSetSort(event);
    });

    Object(defineProperty["a" /* default */])(this, "submitNameFilter", () => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;
      const {
        nameFilter
      } = this.state;

      if (nameFilter === '') {
        onUnsetFilteredState(nameFilter);
      }

      const transformedName = nameFilter.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    Object(defineProperty["a" /* default */])(this, "handleUnitChange", event => {
      const {
        onSetUnitFilter
      } = this.props;
      this.setState({
        unitFilter: event
      });
      onSetUnitFilter(event);
    });

    Object(defineProperty["a" /* default */])(this, "clearAllFilters", () => {
      const {
        onClearFilters
      } = this.props;
      this.setState({
        sort: {},
        nameFilter: "",
        unitFilter: ""
      });
      onClearFilters();
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterChange", (event, name) => {
      const {
        onUnsetFilteredState,
        onSetFilteredState,
        onSetUnitFilter
      } = this.props;
      const value = event.target ? event.target.value : event;
      const updatedState = external_immutability_helper_default()(this.state, {
        $merge: {
          [name]: value
        }
      });
      this.setState(updatedState);

      if (name === 'nameFilter') {
        if (event === '') {
          return onUnsetFilteredState();
        }

        return onSetFilteredState(event);
      }

      if (name === 'unitFilter') {
        if (event === "") {
          return onUnsetFilteredState();
        }

        return onSetUnitFilter(event);
      }
    });

    this.state = {
      open: false,
      sort: {},
      nameFilter: "",
      unitFilter: ""
    };
  }

  render() {
    const {
      open,
      sort,
      nameFilter,
      unitFilter
    } = this.state;
    const {
      currentView,
      dueDateFilters,
      flagFilters,
      subjectFilters,
      statusFilters,
      scoreStatusFilters,
      classTypeFilters,
      onChangeView,
      handleFilterClick
    } = this.props;
    return DetailLessonList_components_FilterSection_jsx("div", {
      className: "filter-form-holder"
    }, DetailLessonList_components_FilterSection_jsx("ul", {
      className: "collapsible expandable"
    }, DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, DetailLessonList_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "reading",
      checked: subjectFilters.indexOf('Reading') !== -1,
      onChange: () => handleFilterClick("subject", 'Reading')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "reading"
    }, "Reading")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "writing",
      checked: subjectFilters.indexOf('Writing') !== -1,
      onChange: () => handleFilterClick("subject", 'Writing')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "writing"
    }, "Writing")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "math",
      checked: subjectFilters.indexOf('Math') !== -1,
      onChange: () => handleFilterClick("subject", 'Math')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "math"
    }, "Math"))), DetailLessonList_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "beginning",
      checked: scoreStatusFilters.indexOf('Beginning') !== -1,
      onChange: () => handleFilterClick("score", 'Beginning')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "beginning"
    }, "Beginning")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "developing",
      checked: scoreStatusFilters.indexOf('Developing') !== -1,
      onChange: () => handleFilterClick("score", 'Developing')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "developing"
    }, "Developing")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "accomplished",
      checked: scoreStatusFilters.indexOf('Accomplished') !== -1,
      onChange: () => handleFilterClick("score", 'Accomplished')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "accomplished"
    }, "Accomplished")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "exemplary",
      checked: scoreStatusFilters.indexOf('Exemplary') !== -1,
      onChange: () => handleFilterClick("score", 'Exemplary')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "exemplary"
    }, "Exemplary"))), DetailLessonList_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "scheduled",
      checked: statusFilters.indexOf('Scheduled') !== -1,
      onChange: () => handleFilterClick('status', 'Scheduled')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "scheduled"
    }, "Scheduled")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "assigned",
      checked: statusFilters.indexOf('Assigned') !== -1,
      onChange: () => handleFilterClick('status', 'Assigned')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "assigned"
    }, "Assigned")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "started",
      checked: statusFilters.indexOf('Started') !== -1,
      onChange: () => handleFilterClick('status', 'Started')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "started"
    }, "Started")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "complete",
      checked: statusFilters.indexOf('Complete') !== -1,
      onChange: () => handleFilterClick('status', 'Complete')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "complete"
    }, "Complete"))), DetailLessonList_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "hasReviewFlags",
      checked: flagFilters.indexOf("flags") !== -1,
      onChange: () => handleFilterClick('flags', 'true')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "hasReviewFlags"
    }, "Has Review Flags"))), DetailLessonList_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueToday",
      checked: dueDateFilters.indexOf('dueToday') !== -1,
      onChange: () => handleFilterClick('dueDate', 'dueToday')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "dueToday"
    }, "Due Today")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueNextSession",
      checked: dueDateFilters.indexOf('dueNextSession') !== -1,
      onChange: () => handleFilterClick('dueDate', 'dueNextSession')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "dueNextSession"
    }, "Due By Next Session")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueThisWeek",
      checked: dueDateFilters.indexOf('dueThisWeek') !== -1,
      onChange: () => handleFilterClick('dueDate', 'dueThisWeek')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "dueThisWeek"
    }, "Due this Week")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "overdue",
      checked: dueDateFilters.indexOf('overdue') !== -1,
      onChange: () => handleFilterClick('dueDate', 'overdue')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "overdue"
    }, "Overdue"))), DetailLessonList_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "some-class",
      checked: classTypeFilters.indexOf('class') !== -1,
      onChange: () => handleFilterClick('classType', 'class')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "some-class"
    }, "Some Class")), DetailLessonList_components_FilterSection_jsx("li", null, DetailLessonList_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "tutoring",
      checked: classTypeFilters.indexOf('tutoring') !== -1,
      onChange: () => handleFilterClick('classType', 'tutoring')
    }), DetailLessonList_components_FilterSection_jsx("label", {
      htmlFor: "tutoring"
    }, "Tutoring")))), DetailLessonList_components_FilterSection_jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "col s12 m3"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "search-field input-field",
      style: {
        marginTop: '30px'
      }
    }, DetailLessonList_components_FilterSection_jsx("input", {
      type: "search",
      id: "name_search",
      className: "input-control  validate",
      name: "nameFilter",
      value: nameFilter,
      onChange: event => this.handleFilterChange(event, 'nameFilter')
    }), DetailLessonList_components_FilterSection_jsx("button", {
      type: "submit",
      className: "search-button",
      onClick: this.submitNameFilter
    }, DetailLessonList_components_FilterSection_jsx("i", {
      className: "icon-search"
    })), DetailLessonList_components_FilterSection_jsx("label", {
      className: nameFilter.length ? "label active" : "label",
      htmlFor: "name_search"
    }, "Search"))), DetailLessonList_components_FilterSection_jsx("div", {
      className: "col s12 m3"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "input-field",
      style: {
        marginTop: '-7px'
      }
    }, DetailLessonList_components_FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(unitFilter, unitOptions),
      onChange: event => this.handleUnitChange(event),
      options: unitOptions,
      label: "Unit Number",
      stateKey: "unit",
      dropdownKey: "unit"
    }))))), DetailLessonList_components_FilterSection_jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "col s12 l4"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "row mb-0"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "col s12 x17"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "input-field"
    }, DetailLessonList_components_FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, lessonSortOptions),
      onChange: event => this.handleSortChange(event),
      options: lessonSortOptions,
      label: "Sort by",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), DetailLessonList_components_FilterSection_jsx("div", {
      className: "switcher-block col s12 l4",
      style: {
        marginTop: '14px'
      }
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "view-switcher"
    }, DetailLessonList_components_FilterSection_jsx("ul", {
      className: "switcher center-align"
    }, DetailLessonList_components_FilterSection_jsx("li", {
      "data-view": "view-full",
      className: currentView === 'full' ? 'active' : ""
    }, DetailLessonList_components_FilterSection_jsx("a", {
      href: "#",
      onClick: () => onChangeView('full')
    }, "Full View")), DetailLessonList_components_FilterSection_jsx("li", {
      "data-view": "view-list",
      className: currentView === 'list' ? 'active' : ''
    }, DetailLessonList_components_FilterSection_jsx("a", {
      href: "#",
      onClick: () => onChangeView('list')
    }, "List View"))))), DetailLessonList_components_FilterSection_jsx("div", {
      className: "col s12 l4"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "option-filters"
    }, DetailLessonList_components_FilterSection_jsx("div", {
      className: "option-item clear"
    }, DetailLessonList_components_FilterSection_jsx("a", {
      href: "#",
      onClick: this.clearAllFilters
    }, "Clear Filters")), DetailLessonList_components_FilterSection_jsx("div", {
      className: "option-item"
    }, DetailLessonList_components_FilterSection_jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, DetailLessonList_components_FilterSection_jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ var DetailLessonList_components_FilterSection = (DetailLessonList_components_FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/utils/index.js
const utils_getAnswerChoiceColors = (answerLetter, correctAnswer, studentAnswer) => {
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
const utils_getAnswerPercentageBreakdownColors = (colorType, answerLetter, answerPercentage, correctAnswer, studentAnswer) => {
  if (correctAnswer) {
    if (colorType === 'full') {
      return {
        backgroundColor: '#32955c',
        color: '#fff'
      };
    }

    return {
      width: `${answerPercentage}%`,
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
      width: `${answerPercentage}%`,
      backgroundColor: '#db1d41'
    };
  }

  if (colorType === 'full') {
    return {
      backgroundColor: '#e5e5e5'
    };
  }

  return {
    width: `${answerPercentage}%`,
    backgroundColor: '#e5e5e5'
  };
};
const utils_getAnswerColor = answer => {
  if (answer.correctAnswer) {
    return {
      color: '#3eb777',
      borderColor: '#32955c'
    };
  }

  return null;
};
const utils_difficultyMap = {
  'Easy': 'E',
  'Medium': 'M',
  'Difficult': 'D'
};
const utils_getCompleteAnswerColor = (answerType, answer, studentAnswer) => {
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

var components_Question_jsx = external_react_default.a.createElement;



class components_Question_Question extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapAnswerChoices", () => {
      const {
        question: {
          answerType,
          answerChoices,
          studentAnswer
        },
        answerSheetComplete
      } = this.props;

      if (answerSheetComplete) {
        if (answerType === 'letter') {
          return components_Question_jsx("ul", {
            className: "answer-list"
          }, answerChoices.map(answer => components_Question_jsx("li", {
            key: answer.answerLetter
          }, components_Question_jsx("span", {
            className: "badge-circle badge-circle-bordered",
            style: utils_getCompleteAnswerColor('letter', answer, studentAnswer)
          }, answer.answerLetter))));
        }

        return components_Question_jsx("ul", {
          className: "answer-list"
        }, answerChoices.map(answer => components_Question_jsx("li", {
          key: answer.answerValue
        }, components_Question_jsx("span", {
          className: "badge badge-rounded badge-rounded-bordered",
          style: utils_getCompleteAnswerColor('value', answer, studentAnswer)
        }, answer.answerValue))));
      }

      if (answerType === 'letter') {
        return components_Question_jsx("ul", {
          className: "answer-list"
        }, answerChoices.map(answer => components_Question_jsx("li", {
          key: answer.answerLetter
        }, components_Question_jsx("span", {
          className: "badge-circle badge-circle-bordered",
          style: utils_getAnswerColor(answer)
        }, answer.answerLetter))));
      }

      return components_Question_jsx("ul", {
        className: "answer-list"
      }, answerChoices.map(answer => components_Question_jsx("li", {
        key: answer.answerValue
      }, components_Question_jsx("span", {
        className: "badge badge-rounded badge-rounded-bordered",
        style: utils_getAnswerColor(answer)
      }, answer.answerValue))));
    });
  }

  render() {
    const {
      onOpenQuestionModal,
      question,
      answerSheetComplete
    } = this.props;
    const {
      difficulty,
      hasVideo,
      flagged,
      studentNotes
    } = question;
    return components_Question_jsx("li", {
      className: "answers-list-holder"
    }, components_Question_jsx("div", {
      className: "answer-row row mb-0"
    }, components_Question_jsx("div", {
      className: "col col-120"
    }, this.mapAnswerChoices()), components_Question_jsx("div", {
      className: "col col-30"
    }, components_Question_jsx("span", {
      className: "status-info"
    }, utils_difficultyMap[difficulty])), hasVideo && components_Question_jsx("div", {
      className: "col col-43"
    }, components_Question_jsx("span", {
      className: "play-progress",
      "data-video-id": "video001"
    }, components_Question_jsx("span", {
      className: "play"
    }), components_Question_jsx("svg", {
      viewBox: "0 0 50 50",
      width: "50",
      height: "50",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, components_Question_jsx("circle", {
      className: "circle-static",
      cx: "25.8",
      cy: "24.3",
      r: "22.8",
      style: {
        strokeWidth: '3',
        fill: 'rgba(0,0,0,0)'
      }
    }), components_Question_jsx("circle", {
      className: "circle-progress",
      cx: "25.8",
      cy: "24.3",
      r: "22.8",
      style: {
        stroke: 'none',
        strokeWidth: '3',
        fill: 'rgba(0,0,0,0)'
      }
    })))), components_Question_jsx("div", {
      className: "col col-auto"
    }, answerSheetComplete && flagged ? components_Question_jsx("span", {
      className: "status-answer",
      style: {
        color: '#c0272d'
      }
    }, components_Question_jsx("i", {
      className: "icon-flag"
    }), components_Question_jsx("b", {
      className: "status-text"
    }, "Review")) : null), components_Question_jsx("div", {
      className: "dropdown-block col col-35"
    }, components_Question_jsx("a", {
      className: "modal-trigger",
      onClick: () => onOpenQuestionModal(question),
      href: "#"
    }, components_Question_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")))), answerSheetComplete && studentNotes ? components_Question_jsx("div", {
      className: "comment-block"
    }, components_Question_jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?")) : null);
  }

}

;
/* harmony default export */ var LessonDetailAnswerSheet_components_Question = (components_Question_Question);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/components/PracticeQuestions/index.js

var components_PracticeQuestions_jsx = external_react_default.a.createElement;



class components_PracticeQuestions_PracticeQuestions extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapQuestions", () => this.props.questions.map(question => components_PracticeQuestions_jsx(LessonDetailAnswerSheet_components_Question, {
      key: question.id,
      question: question,
      answerSheetComplete: this.props.answerSheetComplete,
      onOpenQuestionModal: this.props.onOpenQuestionModal
    })));
  }

  render() {
    return components_PracticeQuestions_jsx("div", {
      className: "col s12 l6"
    }, components_PracticeQuestions_jsx("div", {
      className: "card-block"
    }, components_PracticeQuestions_jsx("h2", null, "Practice"), components_PracticeQuestions_jsx("div", {
      className: "card"
    }, components_PracticeQuestions_jsx("div", {
      className: "card-content"
    }, components_PracticeQuestions_jsx("ol", {
      className: "answers-list"
    }, this.mapQuestions())))));
  }

}

/* harmony default export */ var LessonDetailAnswerSheet_components_PracticeQuestions = (components_PracticeQuestions_PracticeQuestions);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/components/ChallengeQuestions/index.js

var components_ChallengeQuestions_jsx = external_react_default.a.createElement;



class components_ChallengeQuestions_ChallengeQuestions extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapQuestions", () => this.props.questions.map(question => components_ChallengeQuestions_jsx(LessonDetailAnswerSheet_components_Question, {
      key: question.id,
      question: question,
      answerSheetComplete: this.props.answerSheetComplete,
      onOpenQuestionModal: this.props.onOpenQuestionModal
    })));
  }

  render() {
    return components_ChallengeQuestions_jsx("div", {
      className: "col s12 l6"
    }, components_ChallengeQuestions_jsx("div", {
      className: "card-block"
    }, components_ChallengeQuestions_jsx("h2", null, "Challenge"), components_ChallengeQuestions_jsx("div", {
      className: "card-answer card"
    }, components_ChallengeQuestions_jsx("div", {
      className: "card-content"
    }, components_ChallengeQuestions_jsx("ol", {
      className: "answers-list"
    }, this.mapQuestions())))));
  }

}

/* harmony default export */ var LessonDetailAnswerSheet_components_ChallengeQuestions = (components_ChallengeQuestions_ChallengeQuestions);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/components/QuestionModal/index.js


var components_QuestionModal_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/media-has-caption */





class components_QuestionModal_QuestionModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "toggleReviewedStatus", () => this.setState(({
      reviewedWithStudent
    }) => ({
      reviewedWithStudent: !reviewedWithStudent
    })));

    Object(defineProperty["a" /* default */])(this, "mapAnswerChoices", () => {
      const {
        question: {
          answerChoices,
          studentAnswer
        }
      } = this.props;

      if (answerChoices[0].answerLetter) {
        return answerChoices.map(answer => components_QuestionModal_jsx("li", {
          className: "answer-block",
          key: answer.answerLetter
        }, components_QuestionModal_jsx("div", {
          className: "answer-box",
          style: utils_getAnswerChoiceColors(answer.answerLetter, answer.correctAnswer, studentAnswer)
        }, components_QuestionModal_jsx("b", {
          className: "answer-circle"
        }, answer.answerLetter, "."), components_QuestionModal_jsx("span", {
          className: "answer-text"
        }, answer.answerText))));
      }

      return answerChoices.map(answer => components_QuestionModal_jsx("li", {
        className: "answer-block",
        key: answer.answerValue
      }, components_QuestionModal_jsx("div", {
        className: "answer-box",
        style: utils_getAnswerChoiceColors(answer.answerValue, answer.correctAnswer, studentAnswer)
      }, components_QuestionModal_jsx("span", {
        className: "answer-text",
        style: {
          marginLeft: '30px'
        }
      }, answer.answerValue))));
    });

    Object(defineProperty["a" /* default */])(this, "renderAnswerPercentageBreakdown", () => {
      const {
        question: {
          answerChoices,
          studentAnswer
        }
      } = this.props;

      if (answerChoices[0].answerLetter) {
        return answerChoices.map(answer => components_QuestionModal_jsx("li", {
          className: "informer-block",
          key: answer.answerLetter
        }, components_QuestionModal_jsx("div", {
          className: "informer-box",
          style: utils_getAnswerPercentageBreakdownColors('half', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)
        }, components_QuestionModal_jsx("b", {
          className: "informer-circle",
          style: utils_getAnswerPercentageBreakdownColors('full', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)
        }, answer.answerLetter)), components_QuestionModal_jsx("b", {
          className: "informer-value"
        }, answer.answerPercentage, "%")));
      }

      return answerChoices.map(answer => components_QuestionModal_jsx("li", {
        className: "informer-block",
        key: answer.answerValue
      }, components_QuestionModal_jsx("div", {
        className: "informer-box",
        style: utils_getAnswerPercentageBreakdownColors('half', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)
      }, components_QuestionModal_jsx("b", {
        className: "informer-circle",
        style: utils_getAnswerPercentageBreakdownColors('full', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)
      }, answer.answerValue)), components_QuestionModal_jsx("b", {
        className: "informer-value"
      }, answer.answerPercentage, "%")));
    });

    this.state = {
      reviewedWithStudent: false
    };
  }

  render() {
    const {
      open,
      onCloseModal,
      question = {}
    } = this.props;
    const {
      reviewedWithStudent
    } = this.state;
    const {
      topic,
      questionType,
      question: questionText,
      hasVideo,
      flagged,
      questionNumber,
      videoSource,
      studentNotes,
      passage,
      videoThumbnail
    } = question;
    return components_QuestionModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "overlay"
    }, components_QuestionModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: onCloseModal
    }, components_QuestionModal_jsx("div", {
      id: "modal_video001",
      className: "jsx-4127667448" + " " + "modal modal-answer"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "modal-header row mb-0"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col s10"
    }, components_QuestionModal_jsx("span", {
      className: "jsx-4127667448" + " " + "subtitle"
    }, topic), components_QuestionModal_jsx("span", {
      className: "jsx-4127667448" + " " + "title"
    }, questionType, " Problem #", questionNumber)), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col s2 right-align"
    }, components_QuestionModal_jsx("a", {
      href: "#",
      onClick: onCloseModal,
      className: "jsx-4127667448" + " " + "close modal-close"
    }, components_QuestionModal_jsx("i", {
      className: "jsx-4127667448" + " " + "icon-close-thin"
    })))), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "modal-content"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "d-flex row mb-0"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col s12 l6 order-lg-2"
    }, hasVideo && components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "card-panel"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "video-frame"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "embed-responsive embed-responsive-16by9"
    }, components_QuestionModal_jsx("video", {
      id: "video001",
      "data-current-time": "0",
      poster: videoThumbnail,
      preload: "metadata",
      controls: true,
      playsInline: true,
      className: "jsx-4127667448" + " " + "in-modal embed-responsive-item"
    }, components_QuestionModal_jsx("source", {
      type: "video/mp4",
      src: videoSource,
      className: "jsx-4127667448"
    }))))), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "card-panel"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "panel-block"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "d-flex align-items-center row mb-0"
    }, flagged && components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col"
    }, components_QuestionModal_jsx("span", {
      style: {
        color: '#c0272d'
      },
      className: "jsx-4127667448" + " " + "status-answer"
    }, components_QuestionModal_jsx("i", {
      className: "jsx-4127667448" + " " + "icon-flag"
    }), components_QuestionModal_jsx("b", {
      className: "jsx-4127667448" + " " + "status-text"
    }, "Flagged"))), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col"
    }, components_QuestionModal_jsx("label", {
      htmlFor: "reviewedWithStudent",
      className: "jsx-4127667448"
    }, components_QuestionModal_jsx("input", {
      id: "reviewedWithStudent",
      type: "checkbox",
      checked: reviewedWithStudent,
      onChange: this.toggleReviewedStatus,
      className: "jsx-4127667448" + " " + "filled-in"
    }), components_QuestionModal_jsx("span", {
      className: "jsx-4127667448"
    }, components_QuestionModal_jsx("b", {
      className: "jsx-4127667448"
    }, "Reviewed with Student")))))), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "panel-block"
    }, components_QuestionModal_jsx("ul", {
      className: "jsx-4127667448" + " " + "informers-list"
    }, this.renderAnswerPercentageBreakdown())), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "panel-block"
    }, components_QuestionModal_jsx("strong", {
      className: "jsx-4127667448" + " " + "subtitle"
    }, "Student\u2019s Notes:"), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "text-content custom-form"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "jcf-scrollable height-22"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "text-holder"
    }, studentNotes)))))), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "col s12 l6 order-lg-1"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "card-panel"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "text-content custom-form"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "jcf-scrollable height-45"
    }, components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "text-holder"
    }, passage)))), components_QuestionModal_jsx("div", {
      className: "jsx-4127667448" + " " + "card-panel"
    }, components_QuestionModal_jsx("strong", {
      className: "jsx-4127667448" + " " + "h3 subtitle"
    }, questionText), components_QuestionModal_jsx("ul", {
      className: "jsx-4127667448" + " " + "answer-full-list"
    }, this.mapAnswerChoices())))))))), components_QuestionModal_jsx(style_default.a, {
      id: "4127667448"
    }, [".overlay.jsx-4127667448{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:9999;}", ".modal-answer.jsx-4127667448{opacity:1;visibility:visible;}"]));
  }

}

/* harmony default export */ var LessonDetailAnswerSheet_components_QuestionModal = (components_QuestionModal_QuestionModal);
// CONCATENATED MODULE: ./components/Student/LessonDetailAnswerSheet/utils/sampleQuestions.js
/* harmony default export */ var utils_sampleQuestions = ([{
  id: 1,
  hasVideo: false,
  questionType: 'Challenge',
  questionNumber: 1,
  topic: 'Special Right Triangles',
  difficulty: 'Easy',
  studentNotes: '1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes',
  passage: `Question 1-10 are based on the following passage.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `This is the start of another passage.
    Why do we use it?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `Question three!
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `Fourth passage sample.
    Why do we use it?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `Question three!
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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
  passage: `Fourth passage sample.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
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


var LessonDetailAnswerSheet_jsx = external_react_default.a.createElement;







class LessonDetailAnswerSheet_LessonDetailAnswerSheet extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleQuestionModal", (selectedQuestion = {}) => this.setState(({
      questionModalOpen
    }) => ({
      questionModalOpen: !questionModalOpen,
      selectedQuestion
    })));

    this.state = {
      selectedQuestion: {},
      questionModalOpen: false,
      questions: utils_sampleQuestions,
      answerSheetComplete: this.props.lesson.completionDate && true
    };
  }

  render() {
    const {
      questionModalOpen,
      selectedQuestion,
      questions,
      answerSheetComplete
    } = this.state;
    const {
      open,
      onCloseDetailModal,
      user,
      lesson: {
        lessonName,
        unit,
        passage,
        completionDate,
        completionTime,
        assignTime,
        assignDate,
        dueDate,
        dueTime,
        type
      }
    } = this.props;
    const {
      studentInformation: {
        firstName,
        lastName
      }
    } = user;
    return LessonDetailAnswerSheet_jsx(external_react_default.a.Fragment, null, LessonDetailAnswerSheet_jsx(LessonDetailAnswerSheet_components_QuestionModal, {
      open: questionModalOpen,
      question: selectedQuestion,
      onCloseModal: this.onToggleQuestionModal
    }), LessonDetailAnswerSheet_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "overlay"
    }, LessonDetailAnswerSheet_jsx("div", {
      style: {
        zIndex: '1003',
        display: 'block',
        position: 'absolute',
        top: '0',
        backroundColor: "rgba(0, 0, 0, 0.7)"
      },
      className: "jsx-2165974909" + " " + "wrapper modal"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "header-row card-panel light-blue lighten-1 white-text"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "position-top right-align"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "icons-row"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "dropdown-block col"
    }, LessonDetailAnswerSheet_jsx("i", {
      className: "jsx-2165974909" + " " + "material-icons dots-icon"
    }, "more_vert")), LessonDetailAnswerSheet_jsx("a", {
      href: "#",
      onClick: onCloseDetailModal,
      style: {
        color: 'white'
      },
      className: "jsx-2165974909" + " " + "icon-close"
    }))), LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "card-panel-row row"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "icon-col col s1"
    }, LessonDetailAnswerSheet_jsx("i", {
      className: "jsx-2165974909" + " " + "icon-books"
    })), LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "col s2"
    }, LessonDetailAnswerSheet_jsx("span", {
      style: {
        fontSize: '17px'
      },
      className: "jsx-2165974909"
    }, `p.${passage} (${type})`, " ")), LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "col s7"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "card-panel-text center-align"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "text-small"
    }, unit), LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "text-large"
    }, lessonName))), LessonDetailAnswerSheet_jsx("div", {
      style: {
        marginTop: '-47px'
      },
      className: "jsx-2165974909" + " " + "col s2"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "card-panel-text center-align"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909"
    }, LessonDetailAnswerSheet_jsx("span", {
      style: {
        fontSize: '17px'
      },
      className: "jsx-2165974909" + " " + "name"
    }, firstName, " ", lastName)), completionDate ? LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909"
    }, LessonDetailAnswerSheet_jsx("time", {
      dateTime: "",
      style: {
        color: 'white',
        fontWeight: 'unset',
        marginTop: '-50px',
        fontSize: '17px'
      },
      className: "jsx-2165974909" + " " + "date"
    }, `Completed ${completionDate} at ${completionTime}`)) : [LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909",
      key: "0"
    }, LessonDetailAnswerSheet_jsx("time", {
      dateTime: "",
      style: {
        color: 'white',
        fontWeight: 'unset',
        marginTop: '-50px',
        fontSize: '17px'
      },
      className: "jsx-2165974909" + " " + "date"
    }, `Assigned ${assignDate} at ${assignTime}`)), LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909",
      key: "1"
    }, LessonDetailAnswerSheet_jsx("time", {
      dateTime: "",
      style: {
        color: 'white',
        fontWeight: 'unset',
        marginTop: '-28px',
        fontSize: '17px'
      },
      className: "jsx-2165974909" + " " + "date"
    }, dueDate && `Due ${dueDate} at ${dueTime}`))])))), LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "nav-header nav-header-special white"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "nav-additional"
    }, LessonDetailAnswerSheet_jsx("ul", {
      style: {
        paddingLeft: '25%'
      },
      className: "jsx-2165974909" + " " + "menu-additional"
    }, LessonDetailAnswerSheet_jsx("li", {
      className: "jsx-2165974909" + " " + "col s3"
    }, LessonDetailAnswerSheet_jsx("a", {
      href: "#",
      className: "jsx-2165974909"
    }, "Summary")), LessonDetailAnswerSheet_jsx("li", {
      className: "jsx-2165974909" + " " + "col s3"
    }, LessonDetailAnswerSheet_jsx("a", {
      href: "#answer",
      className: "jsx-2165974909" + " " + "active"
    }, "Answer Sheet"))))), LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "content-section"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "container-sm"
    }, LessonDetailAnswerSheet_jsx("div", {
      className: "jsx-2165974909" + " " + "main-row row"
    }, LessonDetailAnswerSheet_jsx(LessonDetailAnswerSheet_components_ChallengeQuestions, {
      answerSheetComplete: answerSheetComplete,
      onOpenQuestionModal: this.onToggleQuestionModal,
      questions: questions.filter(question => question.questionType === 'Challenge')
    }), LessonDetailAnswerSheet_jsx(LessonDetailAnswerSheet_components_PracticeQuestions, {
      answerSheetComplete: answerSheetComplete,
      onOpenQuestionModal: this.onToggleQuestionModal,
      questions: questions.filter(question => question.questionType === 'Practice')
    })))))), LessonDetailAnswerSheet_jsx(style_default.a, {
      id: "2165974909"
    }, [".overlay.jsx-2165974909{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1004;}"])));
  }

}

/* harmony default export */ var Student_LessonDetailAnswerSheet = (LessonDetailAnswerSheet_LessonDetailAnswerSheet);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/FullView/components/LessonCard/index.js

var LessonCard_jsx = external_react_default.a.createElement;






const LessonCard_data = (current, target, status) => ({
  datasets: [{
    data: [current, target - current],
    backgroundColor: [chartColorMap[status], '#eaeaea']
  }]
});

const getLessonActivityStatus = status => {
  if (status === "Scheduled") {
    return 'card-main card-lesson-detail card-disabled card-assigned card';
  }

  return 'card-main card-lesson-detail card-assigned card';
};

class LessonCard_LessonCard extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenDetailModal", () => this.setState({
      detailModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDetailModal", () => this.setState({
      detailModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIsOpen => this.setState({
      dropdownIsOpen: !dropdownIsOpen
    }));

    Object(defineProperty["a" /* default */])(this, "onReschedule", (assignDate, assignTime, dueDate, dueTime) => {
      // eslint-disable-next-line no-console
      console.warn('Stubbed out date functionality', assignDate, assignTime, dueDate, dueTime);
    });

    Object(defineProperty["a" /* default */])(this, "renderLessonIcon", subject => {
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

    Object(defineProperty["a" /* default */])(this, "renderDropdownOptions", status => {
      const {
        lesson: {
          assignDate,
          assignTime,
          dueDate,
          dueTime
        }
      } = this.props;

      if (status === "Scheduled" || status === 'Assigned') {
        return LessonCard_jsx(external_react_default.a.Fragment, null, LessonCard_jsx("li", null, LessonCard_jsx("a", {
          href: "#"
        }, "Reschedule")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
          href: "#!"
        }, "Unassign")));
      }

      return LessonCard_jsx(external_react_default.a.Fragment, null, LessonCard_jsx("li", null, LessonCard_jsx("a", {
        href: "#",
        onClick: this.onReschedule(assignDate, assignTime, dueDate, dueTime)
      }, "Reschedule")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
        href: "#!"
      }, "Mark all Flags Reviewed")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
        href: "#!"
      }, "Reset")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
        href: "#!"
      }, "Unassign")));
    });

    Object(defineProperty["a" /* default */])(this, "renderProblemCount", (status, scoreStatus, score, problems, completedProblems) => {
      if (status === "Started") {
        return LessonCard_jsx("span", {
          className: "chart-value chart-value-column",
          style: {
            bottom: '8px',
            backgroundColor: chartColorMap[status]
          }
        }, LessonCard_jsx("span", {
          className: "chart-count",
          "data-count-up": true,
          "data-start-val": "0",
          "data-end-val": "4",
          "data-duration": "1"
        }, LessonCard_jsx("span", {
          className: "text-small",
          style: {
            fontSize: 'x-small'
          }
        }, completedProblems)), LessonCard_jsx("span", {
          className: "text-small",
          style: {
            fontSize: 'xx-small'
          }
        }, "out of"), " ", LessonCard_jsx("span", {
          className: "text-small",
          style: {
            fontSize: 'x-small'
          }
        }, problems));
      }

      return LessonCard_jsx("span", {
        className: "chart-value",
        style: {
          height: '50px',
          width: '50px',
          bottom: '6px',
          backgroundColor: chartColorMap[scoreStatus]
        }
      }, LessonCard_jsx("span", {
        "data-count-up": true,
        "data-start-val": "0",
        "data-end-val": "96",
        "data-duration": "1"
      }), score !== "" ? LessonCard_jsx("span", {
        className: "percentage"
      }, Math.floor(`${score / problems * 100}`), "%") : null);
    });

    Object(defineProperty["a" /* default */])(this, "renderAlerts", flags => {
      if (flags.length) {
        return LessonCard_jsx("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, LessonCard_jsx("b", {
          className: "badge-text"
        }, flags.length), " ", LessonCard_jsx("i", {
          className: "icon-flag"
        }));
      }

      return LessonCard_jsx("div", {
        className: "right-col col s3"
      }, "\xA0");
    });

    this.state = {
      test: true,
      dropdownIsOpen: false,
      detailModalOpen: false
    };
  }

  render() {
    const {
      dropdownIsOpen
    } = this.state;
    const {
      lesson,
      lesson: {
        subject,
        timeEstimate,
        status,
        scoreStatus,
        score,
        unit,
        lessonName,
        assigned,
        flags,
        type,
        problems,
        completedProblems = '',
        passage,
        dueDate,
        availableDate,
        completionDate,
        overdue
      }
    } = this.props;
    return LessonCard_jsx(external_react_default.a.Fragment, null, LessonCard_jsx(Student_LessonDetailAnswerSheet, {
      onCloseDetailModal: this.onCloseDetailModal,
      open: this.state.detailModalOpen,
      user: this.props.user,
      lesson: lesson
    }), LessonCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, LessonCard_jsx("div", {
      className: getLessonActivityStatus(status)
    }, LessonCard_jsx("div", {
      className: "card-panel",
      style: {
        backgroundColor: '#666',
        color: '#fff'
      }
    }, LessonCard_jsx("div", {
      className: "card-panel-row row"
    }, LessonCard_jsx("div", {
      className: "icon-col col s1"
    }, LessonCard_jsx("i", {
      className: this.renderLessonIcon(subject)
    })), LessonCard_jsx("div", {
      className: "col s9"
    }, LessonCard_jsx("div", {
      className: "card-panel-text center-align"
    }, LessonCard_jsx("div", {
      className: "text-small"
    }, unit), LessonCard_jsx("div", {
      className: "text-large"
    }, LessonCard_jsx("a", {
      href: "#",
      onClick: this.onOpenDetailModal
    }, lessonName)))), LessonCard_jsx("div", {
      className: "col s1 right-align"
    }, LessonCard_jsx("div", {
      className: "row icons-row"
    }, this.renderAlerts(flags), LessonCard_jsx("div", {
      className: "dropdown-block col"
    }, LessonCard_jsx("a", {
      className: "dropdown-trigger btn",
      href: "#",
      "data-target": "dropdown01",
      onClick: () => this.onSetDropdown(dropdownIsOpen)
    }, LessonCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen ? LessonCard_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: () => this.onSetDropdown(dropdownIsOpen)
    }, LessonCard_jsx("ul", {
      id: "dropdown01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: "block",
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, this.renderDropdownOptions(status))) : null))))), LessonCard_jsx("div", {
      className: "card-content"
    }, LessonCard_jsx("div", {
      className: "d-flex sameheight-all row mb-0"
    }, LessonCard_jsx("div", {
      className: "col s6"
    }, LessonCard_jsx("div", {
      className: "chart-container"
    }, LessonCard_jsx("div", {
      className: "chart-holder",
      style: {
        width: '140px',
        height: '95px'
      }
    }, LessonCard_jsx(external_react_chartjs_2_["Doughnut"], {
      data: completionDate ? () => LessonCard_data(score, problems, scoreStatus) : () => LessonCard_data(completedProblems, problems, status),
      height: 210,
      options: {
        circumference: 1.45 * Math.PI,
        rotation: -3.85,
        cutoutPercentage: 60,
        tooltips: false
      }
    }), this.renderProblemCount(status, scoreStatus, score, problems, completedProblems)), LessonCard_jsx("div", {
      className: "chart-row"
    }, LessonCard_jsx("div", {
      className: "chart-col chart-start"
    }, "\xA0"), LessonCard_jsx("div", {
      className: "chart-col chart-end"
    }, LessonCard_jsx("span", {
      className: "amount",
      style: {
        color: chartColorMap[status]
      }
    }, problems))), LessonCard_jsx("div", {
      className: "chart-description",
      style: {
        marginTop: '10px'
      }
    }, LessonCard_jsx("dl", {
      className: "dl-horizontal"
    }, LessonCard_jsx("dt", null, "Time Est:"), LessonCard_jsx("dd", null, timeEstimate)), LessonCard_jsx("dl", {
      className: "dl-horizontal"
    }, LessonCard_jsx("dt", null, "Problems:"), LessonCard_jsx("dd", null, problems))))), LessonCard_jsx("div", {
      className: "col s6 right-align justify-end"
    }, LessonCard_jsx("dl", {
      className: "dl-horizontal",
      style: {
        marginTop: '20px',
        marginBottom: '-10px'
      }
    }, LessonCard_jsx("dt", null, "Available:"), LessonCard_jsx("dd", null, LessonCard_jsx("time", {
      dateTime: availableDate
    }, availableDate))), LessonCard_jsx("dl", {
      className: overdue ? 'dl-horizontal red-text text-darken-3' : 'dl-horizontal',
      style: {
        marginTop: '13px',
        marginBottom: '-3px'
      }
    }, !assigned || status === "Scheduled" ? LessonCard_jsx("dt", null, "No Due Date") : [LessonCard_jsx("dt", {
      key: "0"
    }, "Due:"), LessonCard_jsx("dd", {
      key: "1"
    }, LessonCard_jsx("time", {
      dateTime: dueDate
    }, dueDate))]), completionDate ? LessonCard_jsx("dl", {
      className: "dl-horizontal"
    }, LessonCard_jsx("dt", null, "Completed:"), LessonCard_jsx("dd", null, LessonCard_jsx("time", {
      dateTime: completionDate
    }, completionDate))) : null, LessonCard_jsx("div", {
      className: "align-self-end"
    }, scoreStatus !== "" ? LessonCard_jsx("span", {
      className: `badge badge-rounded-md ${utils_statusColorMap[scoreStatus]} white-text`
    }, scoreStatus) : LessonCard_jsx("span", {
      className: `badge badge-rounded-md ${utils_statusColorMap[status]} white-text`
    }, status))))), LessonCard_jsx("div", {
      className: "card-text"
    }, LessonCard_jsx("dl", {
      className: "dl-horizontal"
    }, LessonCard_jsx("dt", null, "p.", passage), LessonCard_jsx("dd", null, "(", type, ")"))))));
  }

}

/* harmony default export */ var components_LessonCard = (LessonCard_LessonCard);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/FullView/index.js

var components_FullView_jsx = external_react_default.a.createElement;



class components_FullView_FullView extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapLessons", () => {
      const {
        lessons,
        onCloneLesson,
        onDeleteLesson,
        user
      } = this.props;
      return lessons.map((lesson, index) => components_FullView_jsx(components_LessonCard // eslint-disable-next-line react/no-array-index-key
      , {
        key: index,
        index: index,
        lesson: lesson,
        onCloneLesson: () => onCloneLesson(index),
        onDeleteLesson: () => onDeleteLesson(index),
        user: user
      }));
    });
  }

  render() {
    return components_FullView_jsx("div", {
      className: "content-section"
    }, components_FullView_jsx("div", {
      className: "row d-flex-content card-width-272"
    }, this.mapLessons()));
  }

}

/* harmony default export */ var DetailLessonList_components_FullView = (components_FullView_FullView);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/ListView/components/ListItem.js

var ListItem_jsx = external_react_default.a.createElement;




class ListItem_ListItem extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenDetailModal", () => this.setState({
      detailModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDetailModal", () => this.setState({
      detailModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "renderLessonIcon", subject => {
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

    Object(defineProperty["a" /* default */])(this, "renderDropdownOptions", status => {
      if (status === "Scheduled" || status === 'Assigned') {
        return ListItem_jsx(external_react_default.a.Fragment, null, ListItem_jsx("li", null, ListItem_jsx("a", {
          href: "#"
        }, "Reschedule")), ListItem_jsx("li", null, ListItem_jsx("a", {
          href: "#!"
        }, "Unassign")));
      }

      return ListItem_jsx(external_react_default.a.Fragment, null, ListItem_jsx("li", null, ListItem_jsx("a", {
        href: "#"
      }, "Reschedule")), ListItem_jsx("li", null, ListItem_jsx("a", {
        href: "#!"
      }, "Mark all Flags Reviewed")), ListItem_jsx("li", null, ListItem_jsx("a", {
        href: "#!"
      }, "Reset")), ListItem_jsx("li", null, ListItem_jsx("a", {
        href: "#!"
      }, "Unassign")));
    });

    this.state = {
      detailModalOpen: false
    };
  }

  render() {
    const {
      lessonName,
      score,
      scoreStatus,
      passage,
      reviewedAlerts,
      overdue,
      subject,
      status,
      completionDate,
      problems,
      type,
      availableDate,
      dueDate,
      flags
    } = this.props.lesson;
    const {
      dropdownIndex,
      lesson,
      dropdownIsOpen,
      index,
      user,
      handleDropdownClick
    } = this.props;
    return ListItem_jsx(external_react_default.a.Fragment, null, ListItem_jsx(Student_LessonDetailAnswerSheet, {
      onCloseDetailModal: this.onCloseDetailModal,
      open: this.state.detailModalOpen,
      user: user,
      lesson: lesson
    }), ListItem_jsx("div", {
      className: "card list-table-row",
      key: index
    }, ListItem_jsx("div", {
      className: "list-table-cell icon-cell"
    }, ListItem_jsx("span", {
      className: "block-icon"
    }, ListItem_jsx("i", {
      className: this.renderLessonIcon(subject)
    }))), ListItem_jsx("div", {
      className: "list-table-cell type-cell"
    }, ListItem_jsx("div", {
      className: "card-panel-text truncate"
    }, ListItem_jsx("div", {
      className: "text-large truncate",
      id: "lessonName"
    }, ListItem_jsx("a", {
      href: "#",
      onClick: this.onOpenDetailModal
    }, lessonName)))), ListItem_jsx("div", {
      className: "list-table-cell graph-cell",
      style: {
        marginLeft: '50px'
      }
    }, scoreStatus && ListItem_jsx("span", {
      className: `chart-bar ${utils_statusColorMap[scoreStatus]} white-text`
    }, Math.floor(`${score / problems * 100}`), "%")), ListItem_jsx("div", {
      className: "list-table-cell status-cell"
    }, scoreStatus !== "" ? ListItem_jsx("span", {
      className: `badge badge-rounded-md ${utils_statusColorMap[scoreStatus]} white-text`
    }, scoreStatus) : ListItem_jsx("span", {
      className: `badge badge-rounded-md ${utils_statusColorMap[status]} white-text`
    }, status)), ListItem_jsx("div", {
      className: "list-table-cell type-cell",
      style: {
        marginLeft: '10px'
      }
    }, subject), ListItem_jsx("div", {
      className: "list-table-cell type-cell"
    }, "p. ", passage), ListItem_jsx("div", {
      className: "list-table-cell date-cell"
    }, ListItem_jsx("time", {
      dateTime: "2019-01-27"
    }, availableDate)), ListItem_jsx("div", {
      className: "list-table-cell dueDate-cell",
      style: {
        color: overdue ? "#db1b29" : ""
      }
    }, ListItem_jsx("time", {
      dateTime: "2019-01-27"
    }, dueDate)), ListItem_jsx("div", {
      className: "list-table-cell completed-cell"
    }, completionDate), ListItem_jsx("div", {
      className: "list-table-cell name-cell"
    }, ListItem_jsx("div", {
      className: "card-panel-text truncate"
    }, ListItem_jsx("div", {
      className: "text-large truncate"
    }, type))), ListItem_jsx("div", {
      className: "list-table-cell graph-cell"
    }, reviewedAlerts.length > 0 && ListItem_jsx("span", {
      className: "badge-rounded-xs badge grey darken-1 white-text"
    }, ListItem_jsx("b", {
      className: "badge-text"
    }, reviewedAlerts.length), " ", ListItem_jsx("i", {
      className: "icon-flag"
    }))), ListItem_jsx("div", {
      className: "list-table-cell flags-cell"
    }, flags.length > 0 && ListItem_jsx("span", {
      className: "badge-rounded-xs badge red darken-2 white-text"
    }, ListItem_jsx("b", {
      className: "badge-text"
    }, flags.length), " ", ListItem_jsx("i", {
      className: "icon-flag"
    }))), ListItem_jsx("div", {
      className: "list-table-cell drop-cell"
    }, ListItem_jsx("div", {
      className: "dropdown-block"
    }, ListItem_jsx("a", {
      href: "#",
      "data-target": "dropdown01",
      className: "dropdown-trigger btn",
      onClick: event => handleDropdownClick(event, index)
    }, ListItem_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? ListItem_jsx("ul", {
      id: "dropdown01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, this.renderDropdownOptions(status)) : null))));
  }

}

/* harmony default export */ var components_ListItem = (ListItem_ListItem);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/ListView/index.js


var components_ListView_jsx = external_react_default.a.createElement;



class components_ListView_ListView extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "setSortType", name => {
      const {
        onSetSort,
        sort
      } = this.props;

      if (sort !== `${name}Ascending` && sort !== `${name}Descending`) {
        onSetSort(`${name}Ascending`);
      }

      if (sort === `${name}Descending`) {
        onSetSort(`${name}Ascending`);
      } else {
        onSetSort(`${name}Descending`);
      }
    });

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

    Object(defineProperty["a" /* default */])(this, "mapLessonRows", () => {
      const {
        lessons,
        user
      } = this.props;
      const {
        dropdownIndex,
        dropdownIsOpen
      } = this.state;
      return lessons.map((lesson, index) => components_ListView_jsx(components_ListItem, {
        lesson: lesson,
        user: user,
        index: index,
        dropdownIndex: dropdownIndex,
        dropdownIsOpen: dropdownIsOpen,
        handleDropdownClick: this.handleDropdownClick
      }));
    });

    Object(defineProperty["a" /* default */])(this, "renderLessonIcon", subject => {
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

    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null
    };
  }

  render() {
    const {
      lessons
    } = this.props;
    return components_ListView_jsx(external_react_default.a.Fragment, null, components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "content-section"
    }, components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "container-md"
    }, components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "result-row center-align"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322" + " " + "result"
    }, " - ", lessons.length, " results -")), components_ListView_jsx("div", {
      style: {
        margin: '0 -160px'
      },
      className: "jsx-694926322" + " " + "list-view-section"
    }, components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table"
    }, components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-header"
    }, components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-row"
    }, components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-cell icon-cell"
    }, "\xA0"), components_ListView_jsx("div", {
      style: {
        marginRight: '55px'
      },
      value: "lessonName",
      className: "jsx-694926322" + " " + "list-table-cell name-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("lessonName"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Lesson"))), components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-cell completed-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("status"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Status"))), components_ListView_jsx("div", {
      style: {
        marginLeft: '5px'
      },
      className: "jsx-694926322" + " " + "list-table-cell completed-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("subject"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Subject"))), components_ListView_jsx("div", {
      style: {
        paddingRight: '82px  '
      },
      className: "jsx-694926322" + " " + "list-table-cell page-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("passage"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Page"))), components_ListView_jsx("div", {
      style: {
        marginLeft: '-53px'
      },
      className: "jsx-694926322" + " " + "list-table-cell date-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("availableDate"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Date"))), components_ListView_jsx("div", {
      style: {
        marginLeft: '13px',
        paddingLeft: '-1px'
      },
      className: "jsx-694926322" + " " + "list-table-cell dueDate-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("dueDate"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Due Date"))), components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-cell completed-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("completionDate"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Complete"))), components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-cell completed-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("lessonType"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Type"))), components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-cell flags-cell"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "\xA0")), components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-cell flags-cell"
    }, components_ListView_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("flags"),
      className: "jsx-694926322"
    }, components_ListView_jsx("b", {
      className: "jsx-694926322"
    }, "Flags"))), components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-cell drop-cell"
    }, "\xA0"))), components_ListView_jsx("div", {
      className: "jsx-694926322" + " " + "list-table-body"
    }, this.mapLessonRows()))))), components_ListView_jsx(style_default.a, {
      id: "694926322"
    }, ["#nameCell.jsx-694926322{width:140px;}", ".list-table.jsx-694926322 .list-table-cell.type-cell.jsx-694926322{max-width:12%;}"]));
  }

}

/* harmony default export */ var DetailLessonList_components_ListView = (components_ListView_ListView);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/AssignLessonModal/components/LessonListItem.js

var LessonListItem_jsx = external_react_default.a.createElement;



class LessonListItem_LessonListItem extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "renderLessonIcon", subject => {
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
  }

  render() {
    const {
      checkedLessons,
      selectAll,
      handleCheckbox,
      index,
      lesson,
      lesson: {
        id,
        lessonName,
        status,
        assigned,
        score,
        scoreStatus,
        reviewedAlerts,
        subject,
        unit,
        passage,
        timeEstimate,
        problems,
        lessonType,
        flags
      }
    } = this.props;
    return LessonListItem_jsx("div", {
      className: "card list-table-row",
      key: id,
      style: {
        opacity: assigned ? .5 : 1
      }
    }, LessonListItem_jsx("div", {
      className: "list-table-cell icon-cell"
    }, LessonListItem_jsx("label", {
      htmlFor: index
    }, LessonListItem_jsx("input", {
      type: "checkbox",
      id: index,
      checked: !selectAll ? checkedLessons.indexOf(lesson) > -1 : true,
      onChange: () => handleCheckbox(lesson),
      className: "filled-in"
    }), LessonListItem_jsx("span", null, LessonListItem_jsx("b", null, "\xA0")))), LessonListItem_jsx("div", {
      className: "list-table-cell icon-cell"
    }, LessonListItem_jsx("span", {
      className: "block-icon"
    }, LessonListItem_jsx("i", {
      className: this.renderLessonIcon(subject)
    }))), LessonListItem_jsx("div", {
      className: "list-table-cell name-cell",
      style: {
        width: '140px'
      }
    }, LessonListItem_jsx("div", {
      className: "card-panel-text truncate"
    }, LessonListItem_jsx("div", {
      className: "text-large truncate",
      id: "lessonName"
    }, unit, " ", lessonName))), LessonListItem_jsx("div", {
      className: "list-table-cell graph-cell",
      style: {
        marginLeft: '50px'
      }
    }, scoreStatus && LessonListItem_jsx("span", {
      className: `chart-bar ${utils_statusColorMap[scoreStatus]} white-text`
    }, Math.floor(`${score / problems * 100}`), "%")), LessonListItem_jsx("div", {
      className: "list-table-cell status-cell"
    }, scoreStatus !== "" ? LessonListItem_jsx("span", {
      className: `badge badge-rounded-md ${utils_statusColorMap[scoreStatus]} white-text`
    }, scoreStatus) : LessonListItem_jsx("span", {
      className: `badge badge-rounded-md ${utils_statusColorMap[status]} white-text`
    }, status)), LessonListItem_jsx("div", {
      className: "list-table-cell type-cell",
      style: {
        marginLeft: '10px'
      }
    }, subject), LessonListItem_jsx("div", {
      className: "list-table-cell type-cell"
    }, "p. ", passage), LessonListItem_jsx("div", {
      className: "list-table-cell date-cell"
    }, timeEstimate), LessonListItem_jsx("div", {
      className: "list-table-cell date-cell",
      style: {
        paddingLeft: '50px'
      }
    }, problems), LessonListItem_jsx("div", {
      className: "list-table-cell name-cell"
    }, LessonListItem_jsx("div", {
      className: "card-panel-text truncate"
    }, LessonListItem_jsx("div", {
      className: "text-large truncate",
      style: {
        paddingLeft: '70px'
      }
    }, lessonType))), LessonListItem_jsx("div", {
      className: "list-table-cell graph-cell"
    }, reviewedAlerts.length > 0 && LessonListItem_jsx("span", {
      className: "badge-rounded-xs badge grey darken-1 white-text"
    }, LessonListItem_jsx("b", {
      className: "badge-text"
    }, reviewedAlerts.length), " ", LessonListItem_jsx("i", {
      className: "icon-flag"
    }))), LessonListItem_jsx("div", {
      className: "list-table-cell flags-cell"
    }, flags.length > 0 && LessonListItem_jsx("span", {
      className: "badge-rounded-xs badge red darken-2 white-text"
    }, LessonListItem_jsx("b", {
      className: "badge-text"
    }, flags.length), " ", LessonListItem_jsx("i", {
      className: "icon-flag"
    }))));
  }

}

/* harmony default export */ var components_LessonListItem = (LessonListItem_LessonListItem);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/utils/modalSortOptions.js
/* harmony default export */ var modalSortOptions = ([{
  label: "Page Number",
  value: "passageAscending"
}, {
  label: "Status",
  value: "statusAscending"
}, {
  label: "Time Est",
  value: "timeEstimateDescending"
}, {
  label: "Type",
  value: "lessonTypeAscending"
}, {
  label: "Flag Count",
  value: "alertsDescending"
}, {
  label: "Subject",
  value: "subjectAscending"
}, {
  label: "Lesson Name",
  value: "lessonNameAscending"
}]);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/ModalFilterSection/index.js

var ModalFilterSection_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */








class ModalFilterSection_ModalFilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "handleSortChange", event => {
      const {
        onSetSort
      } = this.props;
      this.setState({
        sort: event
      });
      onSetSort(event);
    });

    Object(defineProperty["a" /* default */])(this, "submitNameFilter", () => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;
      const {
        nameFilter
      } = this.state;

      if (nameFilter === '') {
        onUnsetFilteredState(nameFilter);
      }

      const transformedName = nameFilter.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedName);
    });

    Object(defineProperty["a" /* default */])(this, "handleUnitChange", event => {
      const {
        onSetUnitFilter
      } = this.props;
      this.setState({
        unitFilter: event
      });
      onSetUnitFilter(event);
    });

    Object(defineProperty["a" /* default */])(this, "clearAllFilters", () => {
      const {
        onClearFilters
      } = this.props;
      this.setState({
        sort: {},
        nameFilter: "",
        unitFilter: ""
      });
      onClearFilters();
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterChange", (event, name) => {
      const {
        onUnsetFilteredState,
        onSetFilteredState,
        onSetUnitFilter
      } = this.props;
      const value = event.target ? event.target.value : event;
      const updatedState = external_immutability_helper_default()(this.state, {
        $merge: {
          [name]: value
        }
      });
      this.setState(updatedState);

      if (name === 'nameFilter') {
        if (event === '') {
          return onUnsetFilteredState();
        }

        return onSetFilteredState(event);
      }

      if (name === 'unitFilter') {
        if (event === "") {
          return onUnsetFilteredState();
        }

        return onSetUnitFilter(event);
      }
    });

    this.state = {
      open: false,
      sort: {},
      nameFilter: "",
      unitFilter: ""
    };
  }

  render() {
    const {
      open,
      sort,
      nameFilter,
      unitFilter
    } = this.state;
    const {
      subjectFilters,
      statusFilters,
      lessonTypeFilters,
      handleFilterClick
    } = this.props;
    return ModalFilterSection_jsx("div", {
      className: "filter-form-holder"
    }, ModalFilterSection_jsx("ul", {
      className: "collapsible expandable"
    }, ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, ModalFilterSection_jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, ModalFilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("input", {
      type: "checkbox",
      id: "assignedModal",
      checked: statusFilters.indexOf('Assigned') !== -1,
      onChange: () => handleFilterClick('status', 'Assigned')
    }), ModalFilterSection_jsx("label", {
      htmlFor: "assignedModal"
    }, "Assigned")), ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("input", {
      type: "checkbox",
      id: "unassigned",
      checked: statusFilters.indexOf('Unassigned') !== -1,
      onChange: () => handleFilterClick('status', 'Unassigned')
    }), ModalFilterSection_jsx("label", {
      htmlFor: "unassigned"
    }, "Unassigned"))), ModalFilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("input", {
      type: "checkbox",
      id: "readingModal",
      checked: subjectFilters.indexOf('Reading') !== -1,
      onChange: () => handleFilterClick('subject', 'Reading')
    }), ModalFilterSection_jsx("label", {
      htmlFor: "readingModal"
    }, "Reading")), ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("input", {
      type: "checkbox",
      id: "writingModal",
      checked: subjectFilters.indexOf('Writing') !== -1,
      onChange: () => handleFilterClick('subject', 'Writing')
    }), ModalFilterSection_jsx("label", {
      htmlFor: "writingModal"
    }, "Writing")), ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("input", {
      type: "checkbox",
      id: "mathModal",
      checked: subjectFilters.indexOf('Math') !== -1,
      onChange: () => handleFilterClick('subject', 'Math')
    }), ModalFilterSection_jsx("label", {
      htmlFor: "mathModal"
    }, "Math"))), ModalFilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("input", {
      type: "checkbox",
      id: "challengePractice",
      checked: lessonTypeFilters.indexOf('Challenge + Practice') !== -1,
      onChange: () => handleFilterClick('lessonType', 'Challenge + Practice')
    }), ModalFilterSection_jsx("label", {
      htmlFor: "challengePractice"
    }, "Challenge + Practice")), ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("input", {
      type: "checkbox",
      id: "homeworkDrill",
      checked: lessonTypeFilters.indexOf('Homework Drill') !== -1,
      onChange: () => handleFilterClick('lessonType', 'Homework Drill')
    }), ModalFilterSection_jsx("label", {
      htmlFor: "homeworkDrill"
    }, "Homework Drill")), ModalFilterSection_jsx("li", null, ModalFilterSection_jsx("input", {
      type: "checkbox",
      id: "readingFromWorkbook",
      checked: lessonTypeFilters.indexOf('Read from the Book') !== -1,
      onChange: () => handleFilterClick('lessonType', 'Read from the Book')
    }), ModalFilterSection_jsx("label", {
      htmlFor: "readingFromWorkbook"
    }, "Reading from Workbook")))), ModalFilterSection_jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, ModalFilterSection_jsx("div", {
      className: "col s12 m3"
    }, ModalFilterSection_jsx("div", {
      className: "search-field input-field",
      style: {
        marginTop: '30px'
      }
    }, ModalFilterSection_jsx("input", {
      type: "search",
      id: "name_search",
      className: "input-control  validate",
      name: "nameFilter",
      value: nameFilter,
      onChange: event => this.handleFilterChange(event, 'nameFilter')
    }), ModalFilterSection_jsx("button", {
      type: "submit",
      className: "search-button",
      onClick: this.submitNameFilter
    }, ModalFilterSection_jsx("i", {
      className: "icon-search"
    })), ModalFilterSection_jsx("label", {
      className: nameFilter.length ? "label active" : "label",
      htmlFor: "name_search"
    }, "Search"))), ModalFilterSection_jsx("div", {
      className: "col s12 m3"
    }, ModalFilterSection_jsx("div", {
      className: "input-field",
      style: {
        marginTop: '-7px'
      }
    }, ModalFilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(unitFilter, unitOptions),
      onChange: event => this.handleUnitChange(event),
      options: unitOptions,
      label: "Unit Number",
      stateKey: "unit",
      dropdownKey: "unit"
    }))))), ModalFilterSection_jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, ModalFilterSection_jsx("div", {
      className: "col s12 l4"
    }, ModalFilterSection_jsx("div", {
      className: "row mb-0"
    }, ModalFilterSection_jsx("div", {
      className: "col s12 14"
    }, ModalFilterSection_jsx("div", {
      className: "input-field"
    }, ModalFilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, modalSortOptions),
      onChange: event => this.handleSortChange(event),
      options: modalSortOptions,
      label: "Sort by",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), ModalFilterSection_jsx("div", {
      className: "col s12 l4 offset-s12"
    }, ModalFilterSection_jsx("div", {
      className: "option-filters"
    }, ModalFilterSection_jsx("div", {
      className: "option-item clear"
    }, ModalFilterSection_jsx("a", {
      href: "#",
      onClick: this.clearAllFilters
    }, "Clear Filters")), ModalFilterSection_jsx("div", {
      className: "option-item"
    }, ModalFilterSection_jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, ModalFilterSection_jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ var components_ModalFilterSection = (ModalFilterSection_ModalFilterSection);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/utils/timeOptions.js
/* harmony default export */ var timeOptions = ([{
  label: '12:00 am',
  value: "12:00 am"
}, {
  label: '1:00 am',
  value: "1:00 am"
}, {
  label: '2:00 am',
  value: "2:00 am"
}, {
  label: '3:00 am',
  value: "3:00 am"
}, {
  label: '4:00 am',
  value: "4:00 am"
}, {
  label: '5:00 am',
  value: "5:00 am"
}, {
  label: '6:00 am',
  value: "6:00 am"
}, {
  label: '7:00 am',
  value: "7:00 am"
}, {
  label: '8:00 am',
  value: "8:00 am"
}, {
  label: '9:00 am',
  value: "9:00 am"
}, {
  label: '10:00 am',
  value: "10:00 am"
}, {
  label: '11:00 am',
  value: "11:00 am"
}, {
  label: '12:00 pm',
  value: "12:00 pm"
}, {
  label: '1:00 pm',
  value: "1:00 pm"
}, {
  label: '2:00 pm',
  value: "2:00 pm"
}, {
  label: '3:00 pm',
  value: "3:00 pm"
}, {
  label: '4:00 pm',
  value: "4:00 pm"
}, {
  label: '5:00 pm',
  value: "5:00 pm"
}, {
  label: '6:00 pm',
  value: "6:00 pm"
}, {
  label: '7:00 pm',
  value: "7:00 pm"
}, {
  label: '8:00 pm',
  value: "8:00 pm"
}, {
  label: '9:00 pm',
  value: "9:00 pm"
}, {
  label: '10:00 pm',
  value: "10:00 pm"
}, {
  label: '11:00 pm',
  value: "11:00 pm"
}]);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/AssignDatesModal/index.js


var AssignDatesModal_jsx = external_react_default.a.createElement;








const AssignDatesModal_DatePicker = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "SdOD")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("SdOD")],
    modules: ['../../../../FormComponents/DatePicker']
  }
});

class AssignDatesModal_AssignDatesModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onAssignDates", () => {
      const {
        assignDate,
        assignTime,
        dueDate,
        dueTime
      } = this.state;
      const {
        onHandleDates
      } = this.props;
      onHandleDates(assignDate, assignTime, dueDate, dueTime);
      this.closeModal();
    });

    Object(defineProperty["a" /* default */])(this, "closeModal", () => {
      const {
        onCloseDatesModal
      } = this.props;
      this.setState({
        assignDate: "",
        assignTime: "",
        dueDate: "",
        dueTime: ""
      }, onCloseDatesModal);
    });

    Object(defineProperty["a" /* default */])(this, "handleChange", (event, name) => {
      const value = event.target ? event.target.value : event;
      this.setState({
        [name]: value
      });
    });

    this.state = {
      assignDate: "",
      assignTime: "",
      dueDate: "",
      dueTime: ""
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      assignTime,
      dueTime
    } = this.state;
    return AssignDatesModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "outer-overlay"
    }, AssignDatesModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.closeModal
    }, AssignDatesModal_jsx("div", {
      id: "datesModal",
      className: "jsx-2270004840" + " " + "modal modal-custom modal-assignDates"
    }, AssignDatesModal_jsx("div", {
      style: {
        overflow: 'auto'
      },
      className: "jsx-2270004840" + " " + "card-modal card"
    }, AssignDatesModal_jsx("div", {
      style: {
        backgroundColor: 'rgb(24,181,233)',
        color: '#fff'
      },
      className: "jsx-2270004840" + " " + "owner-box card-panel card-panel-title"
    }, AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "card-panel-row row"
    }, AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + " icon-col"
    }, AssignDatesModal_jsx("i", {
      className: "jsx-2270004840" + " " + "icon-calendar"
    })), AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "col"
    }, AssignDatesModal_jsx("h4", {
      style: {
        padding: '8px 0px 0px 20px'
      },
      className: "jsx-2270004840"
    }, "Select Dates")))), AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "card-content"
    }, AssignDatesModal_jsx("div", {
      style: {
        height: '300px',
        padding: '10px 37px'
      },
      className: "jsx-2270004840" + " " + "card-body"
    }, AssignDatesModal_jsx("div", {
      style: {
        marginTop: '18px'
      },
      className: "jsx-2270004840" + " " + "row justify-center"
    }, AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "col s6"
    }, AssignDatesModal_jsx("label", {
      htmlFor: "assignDate",
      className: "jsx-2270004840"
    }, "Assignment Date"), AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "datepicker-field input-field"
    }, AssignDatesModal_jsx("i", {
      style: {
        marginRight: '20px',
        zIndex: '1001'
      },
      className: "jsx-2270004840" + " " + "icon-calendar-dark"
    }), AssignDatesModal_jsx(AssignDatesModal_DatePicker, {
      id: "assignDate",
      selected: this.state.assignDate,
      onChange: event => this.handleChange(event, "assignDate"),
      name: "assignDate"
    }))), AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "col s6"
    }, AssignDatesModal_jsx("div", {
      style: {
        marginTop: '-15px',
        zIndex: '1001'
      },
      className: "jsx-2270004840" + " " + "input-field focus-blue"
    }, AssignDatesModal_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(assignTime, timeOptions),
      onChange: event => this.handleChange(event, 'assignTime'),
      label: "Time",
      options: timeOptions,
      stateKey: "assignmentDate",
      dropdownKey: "assignmentDate",
      name: "assignTime",
      id: "assignTime"
    })))), AssignDatesModal_jsx("div", {
      style: {
        marginTop: '43px'
      },
      className: "jsx-2270004840" + " " + "row"
    }, AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "col s6"
    }, AssignDatesModal_jsx("label", {
      htmlFor: "dueDate",
      style: {
        marginTop: '50px'
      },
      className: "jsx-2270004840"
    }, "Due Date (optional)"), AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "datepicker-field input-field"
    }, AssignDatesModal_jsx("i", {
      style: {
        marginRight: '20px',
        zIndex: '1001'
      },
      className: "jsx-2270004840" + " " + "icon-calendar-dark"
    }), AssignDatesModal_jsx(AssignDatesModal_DatePicker, {
      id: "dueDate",
      selected: this.state.dueDate,
      onChange: event => this.handleChange(event, 'dueDate'),
      name: "dueDate"
    }))), AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "col s6"
    }, AssignDatesModal_jsx("div", {
      style: {
        marginTop: '35px'
      },
      className: "jsx-2270004840" + " " + "input-field focus-blue"
    }, AssignDatesModal_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(dueTime, timeOptions),
      onChange: event => this.handleChange(event, "dueTime"),
      label: "Time",
      options: timeOptions,
      stateKey: "dueTime",
      dropdownKey: "dueTime",
      name: "dueTime"
    }))))), AssignDatesModal_jsx("div", {
      className: "jsx-2270004840" + " " + "modal-footer"
    }, AssignDatesModal_jsx("a", {
      href: "#",
      onClick: this.closeModal,
      className: "jsx-2270004840" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), AssignDatesModal_jsx("a", {
      href: "#",
      onClick: this.onAssignDates,
      className: "jsx-2270004840" + " " + "btn"
    }, "Assign Dates"))))))), AssignDatesModal_jsx(style_default.a, {
      id: "2270004840"
    }, ["h4.jsx-2270004840{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", ".outer-overlay.jsx-2270004840{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", ".card-modal.jsx-2270004840{margin:0;border-radius:6px;}", "#assign-dates.jsx-2270004840{border-radius:6px;}", ".modal.jsx-2270004840{display:block;background-color:white;position:absolute;width:30%;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-2270004840{opacity:1;visibility:visible;}", ".modal-footer.jsx-2270004840{background-color:white;}"]));
  }

}

/* harmony default export */ var components_AssignDatesModal = (AssignDatesModal_AssignDatesModal);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/components/AssignLessonModal/index.js


var AssignLessonModal_jsx = external_react_default.a.createElement;









class AssignLessonModal_AssignLessonModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenDatesModal", () => this.setState({
      datesModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDatesModal", () => this.setState({
      datesModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onToggleChecked", () => {
      this.setState({
        checked: !this.state.checked
      }, () => this.onChecked());
    });

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      statusFilters: [],
      subjectFilters: [],
      lessonTypeFilters: [],
      unitFilter: "",
      nameFilter: ""
    }));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", lesson => this.setState({
      nameFilter: lesson
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", filter => this.setState({
      [filter]: ""
    }));

    Object(defineProperty["a" /* default */])(this, "onSetUnitFilter", unit => this.setState({
      unitFilter: unit
    }));

    Object(defineProperty["a" /* default */])(this, "onChecked", () => {
      const {
        checkedLessons,
        checked
      } = this.state;

      if (checked) {
        let mappedLessons = this.getMappableLessons();

        for (let i = 0; i < mappedLessons.length; i++) {
          if (checkedLessons.indexOf(mappedLessons[i]) > -1) {
            mappedLessons = mappedLessons.filter(lesson => checkedLessons.indexOf(lesson) === -1);
          }
        }

        this.setState(prevState => {
          prevState.checkedLessons.push(...mappedLessons);
        });
      } else this.setState({
        checkedLessons: []
      });
    });

    Object(defineProperty["a" /* default */])(this, "onSortLessons", lessons => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'subjectAscending':
          return lessons.sort(sortFunctions["z" /* subjectAscending */]);

        case 'subjectDescending':
          return lessons.sort(sortFunctions["A" /* subjectDescending */]);

        case 'passageAscending':
          return lessons.sort(sortFunctions["t" /* passageAscending */]);

        case 'passageDescending':
          return lessons.sort(sortFunctions["u" /* passageDescending */]);

        case 'statusAscending':
          return lessons.sort(sortFunctions["x" /* statusAscending */]);

        case 'statusDescending':
          return lessons.sort(sortFunctions["y" /* statusDescending */]);

        case 'flagsAscending':
          return lessons.sort(sortFunctions["l" /* flagsAscending */]);

        case 'flagsDescending':
          return lessons.sort(sortFunctions["m" /* flagsDescending */]);

        case 'lessonNameAscending':
          return lessons.sort(sortFunctions["p" /* lessonNameAscending */]);

        case 'lessonNameDescending':
          return lessons.sort(sortFunctions["q" /* lessonNameDescending */]);

        case 'lessonTypeAscending':
          return lessons.sort(sortFunctions["r" /* lessonTypeAscending */]);

        case 'lessonTypeDescending':
          return lessons.sort(sortFunctions["s" /* lessonTypeDescending */]);

        case 'timeEstimateDescending':
          return lessons.sort(sortFunctions["B" /* timeEstimate */]);

        case 'timeEstimateAscending':
          return lessons.sort(sortFunctions["C" /* timeEstimateAscending */]);

        case 'totalProblemsDescending':
          return lessons.sort(sortFunctions["E" /* totalProblemsDescending */]);

        case 'totalProblemsAscending':
          return lessons.sort(sortFunctions["D" /* totalProblemsAscending */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByName", () => {
      const {
        lessons,
        nameFilter
      } = this.state;
      return lessons.reduce((finalArr, currentLesson) => {
        const {
          lessonName
        } = currentLesson;
        const lessonString = lessonName.replace(/\s/g, "").toLowerCase();

        if (lessonString.indexOf(nameFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
          finalArr.push(currentLesson);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterLessons", () => {
      const {
        statusFilters,
        subjectFilters,
        lessonTypeFilters,
        unitFilter,
        lessons: allLessons
      } = this.state;
      let lessons = allLessons;

      if (statusFilters.length && statusFilters.indexOf('all') === -1) {
        if (statusFilters.indexOf("Unassigned") !== -1) {
          lessons = lessons.filter(lesson => statusFilters.indexOf(lesson.status) !== -1);
        } else lessons = lessons.filter(lesson => lesson.assigned === true);
      }

      if (subjectFilters.length && subjectFilters.indexOf('all') === -1) {
        lessons = lessons.filter(lesson => subjectFilters.indexOf(lesson.subject) !== -1);
      }

      if (lessonTypeFilters.length && lessonTypeFilters.indexOf('all') === -1) {
        lessons = lessons.filter(lesson => lessonTypeFilters.indexOf(lesson.type) !== -1);
      }

      if (unitFilter.length && unitFilter.indexOf('all') === -1) {
        lessons = lessons.filter(lesson => unitFilter.indexOf(lesson.unitNumber) !== -1);
      }

      return lessons;
    });

    Object(defineProperty["a" /* default */])(this, "onHandleDates", (assignDate, assignTime, dueDate, dueTime) => {
      const {
        onAddUpdatedLessons
      } = this.props;
      const updatedLessons = [];
      const {
        checkedLessons: previousCheckedLessons
      } = this.state;

      for (let i = 0; i < previousCheckedLessons.length; i++) {
        const updatedCheckedLessons = external_immutability_helper_default()(previousCheckedLessons[i], {
          $merge: {
            assigned: true,
            dueDate: external_moment_default()(dueDate).format('DD/MM/YYYY'),
            dueTime,
            availableDate: external_moment_default()(assignDate).format("DD/MM/YYYY"),
            status: "Scheduled",
            assignTime
          }
        });
        updatedLessons.push(updatedCheckedLessons);
      }

      onAddUpdatedLessons(updatedLessons);
      this.props.onCloseModal();
    });

    Object(defineProperty["a" /* default */])(this, "setSortType", name => {
      const {
        sort
      } = this.state;

      if (sort !== `${name}Ascending` && sort !== `${name}Descending`) {
        this.onSetSort(`${name}Ascending`);
      }

      if (sort === `${name}Descending`) {
        this.onSetSort(`${name}Ascending`);
      } else {
        this.onSetSort(`${name}Descending`);
      }
    });

    Object(defineProperty["a" /* default */])(this, "getMappableLessons", () => {
      const {
        sort,
        unitFilter,
        lessons,
        statusFilters,
        subjectFilters,
        lessonTypeFilters,
        nameFilter
      } = this.state;
      let mappableLessons = lessons;

      if (nameFilter.length) {
        mappableLessons = this.onFilterByName();
      }

      if (statusFilters.length || unitFilter.length || lessonTypeFilters.length || subjectFilters.length) {
        mappableLessons = this.onFilterLessons();
      }

      if (sort) {
        return this.onSortLessons(mappableLessons);
      }

      return mappableLessons;
    });

    Object(defineProperty["a" /* default */])(this, "handleCheckbox", selectedLesson => {
      const {
        checkedLessons
      } = this.state;
      let updatedLessonArray;

      if (checkedLessons.indexOf(selectedLesson) > -1) {
        updatedLessonArray = checkedLessons.filter(lesson => lesson !== selectedLesson);
      } else {
        updatedLessonArray = [...checkedLessons, selectedLesson];
      }

      this.setState({
        checkedLessons: updatedLessonArray
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        subjectFilters: currentSubjectFilters,
        statusFilters: currentStatusFilters,
        lessonTypeFilters: currentLessonTypeFilters
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'status':
          modifiedFilterCurrentState = currentStatusFilters;
          modifiedFilterName = 'statusFilters';
          break;

        case 'lessonType':
          modifiedFilterCurrentState = currentLessonTypeFilters;
          modifiedFilterName = 'lessonTypeFilters';
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

    Object(defineProperty["a" /* default */])(this, "mapLessonListItem", () => this.getMappableLessons().map((lesson, index) => AssignLessonModal_jsx(components_LessonListItem, {
      lesson: lesson,
      index: index,
      selectAll: this.state.checked,
      key: lesson.id,
      onSelectLesson: this.onSelectLesson,
      renderLessonIcon: this.renderLessonIcon,
      checkedLessons: this.state.checkedLessons,
      handleCheckbox: this.handleCheckbox
    })));

    Object(defineProperty["a" /* default */])(this, "renderTableHeader", () => AssignLessonModal_jsx("div", {
      className: "list-table-row"
    }, AssignLessonModal_jsx("div", {
      className: "list-table-cell icon-cell"
    }, AssignLessonModal_jsx("label", {
      htmlFor: "selectAll"
    }, AssignLessonModal_jsx("input", {
      type: "checkbox",
      id: "selectAll",
      defaultChecked: this.state.checked,
      onChange: this.onToggleChecked,
      className: "filled-in"
    }), AssignLessonModal_jsx("span", null, AssignLessonModal_jsx("b", null, "\xA0")))), AssignLessonModal_jsx("div", {
      className: "list-table-cell icon-cell"
    }, "\xA0"), AssignLessonModal_jsx("div", {
      className: "list-table-cell name-cell",
      value: "lessonName"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("lessonName")
    }, AssignLessonModal_jsx("b", null, "Lesson"))), AssignLessonModal_jsx("div", {
      className: "list-table-cell name-cell",
      style: {
        width: '100px',
        paddingLeft: '237px'
      }
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("status")
    }, AssignLessonModal_jsx("b", null, "Status"))), AssignLessonModal_jsx("div", {
      className: "list-table-call completed-cell"
    }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), AssignLessonModal_jsx("div", {
      className: "list-table-cell type-cell",
      style: {
        marginLeft: '30px',
        paddingLeft: '58px'
      }
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("subject")
    }, AssignLessonModal_jsx("b", null, "Subject"))), AssignLessonModal_jsx("div", {
      className: "list-table-cell completed-cell",
      style: {
        paddingLeft: '56px'
      }
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("passage")
    }, AssignLessonModal_jsx("b", null, "Page"))), AssignLessonModal_jsx("div", {
      className: "list-table-cell completed-cell",
      style: {
        marginLeft: '30px'
      }
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("timeEstimate")
    }, AssignLessonModal_jsx("b", null, "Time Est"))), AssignLessonModal_jsx("div", {
      className: "list-table-cell type-cell",
      style: {
        marginLeft: '13px',
        paddingLeft: '-1px'
      }
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("totalProblems")
    }, AssignLessonModal_jsx("b", null, "Problems"))), AssignLessonModal_jsx("div", {
      className: "list-table-cell completed-cell"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("lessonType")
    }, AssignLessonModal_jsx("b", null, "Type"))), AssignLessonModal_jsx("div", {
      className: "list-table-cell flags-cell"
    }, AssignLessonModal_jsx("b", null, "\xA0")), AssignLessonModal_jsx("div", {
      className: "list-table-cell flags-cell"
    }, AssignLessonModal_jsx("b", null, "\xA0")), AssignLessonModal_jsx("div", {
      className: "list-table-cell flags-cell"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.setSortType("alerts")
    }, AssignLessonModal_jsx("b", null, "Flags")))));

    this.state = {
      lessons: this.props.lessons,
      statusFilters: [],
      subjectFilters: [],
      lessonTypeFilters: [],
      sort: "",
      nameFilter: "",
      unitFilter: "",
      checked: false,
      checkedLessons: [],
      datesModalOpen: false
    };
  }

  render() {
    const {
      lessons,
      subjectFilters,
      statusFilters,
      lessonTypeFilters
    } = this.state;
    const {
      open,
      onCloseModal
    } = this.props;
    return AssignLessonModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "overlay"
    }, AssignLessonModal_jsx("div", {
      id: "assign-lesson-modal",
      className: "jsx-3810222716" + " " + "modal modal-custom"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "header-row card-panel light-blue lighten-1 white-text"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "card-panel-row row"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "col s3"
    }, "\xA0"), AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "col s9 right-align"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "row icons-row"
    }, " ", AssignLessonModal_jsx("span", {
      className: "jsx-3810222716"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: onCloseModal,
      className: "jsx-3810222716"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-3810222716" + " " + "icon-close"
    })))))), AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "card-panel-row row"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "icon-col col s1"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-3810222716" + " " + "icon-books"
    })), AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "col s9"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "card-panel-text"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "text-large"
    }, "Assign Lessons"))))), AssignLessonModal_jsx("div", {
      style: {
        backgroundColor: '#f2f2f2'
      },
      className: "jsx-3810222716" + " " + "content-section"
    }, AssignLessonModal_jsx(components_ModalFilterSection, {
      handleFilterClick: this.handleFilterClick,
      subjectFilters: subjectFilters,
      statusFilters: statusFilters,
      lessonTypeFilters: lessonTypeFilters,
      onClearFilters: this.onClearFilters,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetSort: this.onSetSort,
      onSetUnitFilter: this.onSetUnitFilter
    }), AssignLessonModal_jsx("div", {
      style: {
        marginTop: '50px'
      },
      className: "jsx-3810222716" + " " + "container-md"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "result-row center-align"
    }, AssignLessonModal_jsx("b", {
      className: "jsx-3810222716" + " " + "result"
    }, " - ", lessons.length, " Lessons")), AssignLessonModal_jsx("div", {
      style: {
        margin: '0 -160px'
      },
      className: "jsx-3810222716" + " " + "list-view-section"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "list-table"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "list-table-header"
    }, this.renderTableHeader()), AssignLessonModal_jsx("div", {
      className: "jsx-3810222716" + " " + "list-table-body"
    }, this.mapLessonListItem())))))), AssignLessonModal_jsx(components_AssignDatesModal, {
      open: this.state.datesModalOpen,
      onCloseDatesModal: this.onCloseDatesModal,
      onHandleDates: this.onHandleDates
    }), AssignLessonModal_jsx("a", {
      href: "#",
      onClick: this.onOpenDatesModal,
      className: "jsx-3810222716" + " " + "waves-effect waves-teal btn add-btn modal-trigger"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-3810222716" + " " + "material-icons"
    }, "add"), "Assign Selected")), AssignLessonModal_jsx(style_default.a, {
      id: "3810222716"
    }, [".overlay.jsx-3810222716{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:999;}", "#assign-lesson-modal.jsx-3810222716{border-radius:6px;}", ".modal.jsx-3810222716{display:block;background-color:white;position:absolute;top:13%;right:0%;left:14%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-footer.jsx-3810222716{background-color:white;}", ".modal-custom.jsx-3810222716{opacity:1;visibility:visible;max-width:1280px !important;}", "#assign-lessons-header.jsx-3810222716{background:rgb(24,181,233) !important background:linear-gradient(90deg,rgba(24,181,233,1) 0%,rgba(8,107,140,1) 100%) !important;}"]));
  }

}

/* harmony default export */ var components_AssignLessonModal = (AssignLessonModal_AssignLessonModal);
// CONCATENATED MODULE: ./components/Student/DetailLessonList/index.js

var DetailLessonList_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-did-mount-set-state */

/* eslint-disable react/no-did-update-set-state */

/* eslint-disable react/no-array-index-key */







 // TODO: compare updatedlessons to lessons and update lesson list

class DetailLessonList_DetailLessonList extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenModal", () => this.setState({
      modalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => this.setState({
      modalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      statusFilters: [],
      subjectFilters: [],
      completeFilters: [],
      flagFilters: [],
      classTypeFilters: [],
      dueDateFilters: [],
      unitFilter: "",
      nameFilter: ""
    }));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", lesson => this.setState({
      nameFilter: lesson
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", filter => this.setState({
      [filter]: ""
    }));

    Object(defineProperty["a" /* default */])(this, "onChangeView", view => this.setState({
      currentView: view,
      active: view
    }));

    Object(defineProperty["a" /* default */])(this, "onSetUnitFilter", unit => this.setState({
      unitFilter: unit
    }));

    Object(defineProperty["a" /* default */])(this, "onSortLessons", lessons => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'subjectAscending':
          return lessons.sort(sortFunctions["z" /* subjectAscending */]);

        case 'subjectDescending':
          return lessons.sort(sortFunctions["A" /* subjectDescending */]);

        case 'passageAscending':
          return lessons.sort(sortFunctions["t" /* passageAscending */]);

        case 'statusAscending':
          return lessons.sort(sortFunctions["x" /* statusAscending */]);

        case 'passageDescending':
          return lessons.sort(sortFunctions["u" /* passageDescending */]);

        case 'statusDescending':
          return lessons.sort(sortFunctions["y" /* statusDescending */]);

        case 'availableDateAscending':
          return lessons.sort(sortFunctions["b" /* availableDateAscending */]);

        case 'availableDateDescending':
          return lessons.sort(sortFunctions["c" /* availableDateDescending */]);

        case 'dueDateDescending':
          return lessons.sort(sortFunctions["g" /* dueDate */]);

        case 'dueDateAscending':
          return lessons.sort(sortFunctions["h" /* dueDateAscending */]);

        case 'flagsAscending':
          return lessons.sort(sortFunctions["l" /* flagsAscending */]);

        case 'flagsDescending':
          return lessons.sort(sortFunctions["m" /* flagsDescending */]);

        case 'lessonNameAscending':
          return lessons.sort(sortFunctions["p" /* lessonNameAscending */]);

        case 'lessonNameDescending':
          return lessons.sort(sortFunctions["q" /* lessonNameDescending */]);

        case 'completionDateAscending':
          return lessons.sort(sortFunctions["e" /* completionDateAscending */]);

        case 'completionDateDescending':
          return lessons.sort(sortFunctions["f" /* completionDateDescending */]);

        case 'lessonTypeAscending':
          return lessons.sort(sortFunctions["r" /* lessonTypeAscending */]);

        case 'lessonTypeDescending':
          return lessons.sort(sortFunctions["s" /* lessonTypeDescending */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onAddUpdatedLessons", lessons => this.setState({
      updatedLessons: lessons
    }));

    Object(defineProperty["a" /* default */])(this, "onFilterByName", () => {
      const {
        lessons,
        nameFilter
      } = this.state;
      return lessons.reduce((finalArr, currentLesson) => {
        const {
          lessonName
        } = currentLesson;
        const lessonString = lessonName.replace(/\s/g, "").toLowerCase();

        if (lessonString.indexOf(nameFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
          finalArr.push(currentLesson);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onCloneLesson", index => {
      const {
        lessons
      } = this.state;
      this.setState(prevState => {
        prevState.lessons.push(lessons[index]);
        return {
          lessons: prevState.lessons
        };
      });
    });

    Object(defineProperty["a" /* default */])(this, "onDeleteLesson", index => {
      const {
        lessons
      } = this.state;
      const newLessonsArray = this.arrayItemRemover(lessons, lessons[index]);
      this.setState({
        lessons: newLessonsArray
      });
    });

    Object(defineProperty["a" /* default */])(this, "onFilterLessons", () => {
      const {
        statusFilters,
        subjectFilters,
        unitFilter,
        classTypeFilters,
        scoreStatusFilters,
        flagFilters,
        lessons: allLessons
      } = this.state;
      let lessons = allLessons;

      if (scoreStatusFilters.length && scoreStatusFilters.indexOf("all") === -1) {
        lessons = lessons.filter(lesson => scoreStatusFilters.indexOf(lesson.scoreStatus) !== -1);
      }

      if (statusFilters.length && statusFilters.indexOf("all") === -1) {
        lessons = lessons.filter(lesson => statusFilters.indexOf(lesson.status) !== -1);
      }

      if (subjectFilters.length && subjectFilters.indexOf('all') === -1) {
        lessons = lessons.filter(lesson => subjectFilters.indexOf(lesson.subject) !== -1);
      }

      if (flagFilters.length && flagFilters.indexOf('all') === -1) {
        lessons = lessons.filter(lesson => lesson.flags.length !== 0);
      }

      if (classTypeFilters.length && classTypeFilters.indexOf("all") === -1) {
        lessons = lessons.filter(lesson => classTypeFilters.indexOf(lesson.type) !== -1);
      }

      if (unitFilter.length && unitFilter.indexOf('all') === -1) {
        lessons = lessons.filter(lesson => unitFilter.indexOf(lesson.unit) !== -1);
      }

      return lessons;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableLessons", () => {
      const {
        sort,
        unitFilter,
        lessons,
        dueDateFilters,
        nameFilter,
        statusFilters,
        subjectFilters,
        scoreStatusFilters,
        classTypeFilters,
        flagFilters
      } = this.state;
      let mappableLessons = lessons;

      if (nameFilter.length) {
        mappableLessons = this.onFilterByName();
      }

      if (statusFilters.length || unitFilter.length || scoreStatusFilters.length || subjectFilters.length || classTypeFilters.length || flagFilters.length) {
        mappableLessons = this.onFilterLessons();
      }

      if (dueDateFilters.length) {
        mappableLessons = this.filterDueDate();
      }

      if (sort) {
        return this.onSortLessons(mappableLessons);
      }

      return mappableLessons;
    });

    Object(defineProperty["a" /* default */])(this, "filterDueDate", () => {
      const {
        user
      } = this.props;
      const {
        dueDateFilters,
        lessons: allLessons
      } = this.state;
      let lessons = allLessons;

      if (dueDateFilters.length && dueDateFilters.indexOf('all') === -1) {
        if (dueDateFilters.includes('overdue')) {
          lessons = lessons.filter(lesson => lesson.overdue === true);
        }

        if (dueDateFilters.includes('dueToday')) {
          lessons = lessons.filter(lesson => lesson.dueDate === external_moment_default()().format("MM/DD/Y"));
        }

        if (dueDateFilters.includes('dueThisWeek')) {
          lessons = lessons.filter(lesson => external_moment_default()(lesson.dueDate).format('w') === external_moment_default()().format("W"));
        }

        if (dueDateFilters.includes('dueNextSession')) {
          lessons = lessons.filter(lesson => external_moment_default()(user.nextSession).isSameOrAfter(lesson.dueDate, 'day'));
        }

        return lessons;
      }

      return lessons;
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        subjectFilters: currentSubjectFilters,
        scoreStatusFilters: currentScoreStatusFilters,
        statusFilters: currentStatusFilters,
        flagFilters: currentFlagFilters,
        dueDateFilters: currentDueDateFilters,
        classTypeFilters: currentClassTypeFilters
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'status':
          modifiedFilterCurrentState = currentStatusFilters;
          modifiedFilterName = 'statusFilters';
          break;

        case 'score':
          modifiedFilterCurrentState = currentScoreStatusFilters;
          modifiedFilterName = 'scoreStatusFilters';
          break;

        case 'flags':
          modifiedFilterCurrentState = currentFlagFilters;
          modifiedFilterName = 'flagFilters';
          break;

        case 'dueDate':
          modifiedFilterCurrentState = currentDueDateFilters;
          modifiedFilterName = 'dueDateFilters';
          break;

        case 'classType':
          modifiedFilterCurrentState = currentClassTypeFilters;
          modifiedFilterName = 'classTypeFilters';
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

    Object(defineProperty["a" /* default */])(this, "arrayItemRemover", (array, value) => array.filter(lesson => lesson !== value));

    Object(defineProperty["a" /* default */])(this, "renderCurrentView", () => {
      const {
        active
      } = this.state;
      const {
        user
      } = this.props;

      if (active === 'full') {
        return DetailLessonList_jsx(DetailLessonList_components_FullView, {
          user: user,
          lessons: this.getMappableLessons(),
          onDeleteLesson: this.onDeleteLesson,
          onCloneLesson: this.onCloneLesson
        });
      }

      return DetailLessonList_jsx(DetailLessonList_components_ListView, {
        user: user,
        lessons: this.getMappableLessons(),
        onSetSort: this.onSetSort,
        sort: this.state.sort
      });
    });

    this.state = {
      test: true,
      lessons: this.props.user.lessons,
      modalOpen: false,
      currentView: 'full',
      active: 'full',
      statusFilters: [],
      subjectFilters: [],
      scoreStatusFilters: [],
      flagFilters: [],
      classTypeFilters: [],
      dueDateFilters: [],
      sort: "",
      nameFilter: "",
      unitFilter: "",
      updatedLessons: []
    };
  }

  render() {
    const {
      currentView,
      subjectFilters,
      statusFilters,
      scoreStatusFilters,
      flagFilters,
      dueDateFilters,
      classTypeFilters
    } = this.state;
    return DetailLessonList_jsx(external_react_default.a.Fragment, null, DetailLessonList_jsx(DetailLessonList_components_FilterSection, {
      currentView: currentView,
      onChangeView: this.onChangeView,
      onHandleFilterClick: this.onHandleFilterClick,
      onClearFilters: this.onClearFilters,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetSort: this.onSetSort,
      subjectFilters: subjectFilters,
      statusFilters: statusFilters,
      scoreStatusFilters: scoreStatusFilters,
      flagFilters: flagFilters,
      dueDateFilters: dueDateFilters,
      classTypeFilters: classTypeFilters,
      handleFilterClick: this.handleFilterClick,
      onSetUnitFilter: this.onSetUnitFilter,
      filterDueDate: this.filterDueDate
    }), this.renderCurrentView(), DetailLessonList_jsx(components_AssignLessonModal, {
      open: this.state.modalOpen,
      lessons: this.props.user.lessons,
      onCloseModal: this.onCloseModal,
      onAddUpdatedLessons: this.onAddUpdatedLessons
    }), DetailLessonList_jsx("a", {
      href: "#",
      onClick: this.onOpenModal,
      className: "waves-effect waves-teal btn add-btn modal-trigger"
    }, DetailLessonList_jsx("i", {
      className: "material-icons"
    }, "add"), "Assign Lesson"));
  }

}

/* harmony default export */ var Student_DetailLessonList = (DetailLessonList_DetailLessonList);
// CONCATENATED MODULE: ./components/Student/DetailTestList/components/TestCard/index.js

var TestCard_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-array-index-key */

 // import { data, subjectMap, testSectionCardColorMap, graphColorMap } from '../../../utils/testSectionCardUtils';

const TestCard_data = percentage => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: ['#00bbf7', '#eaeaea']
  }]
});

class TestCard_TestCard extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

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

    Object(defineProperty["a" /* default */])(this, "mapTestSubjects", () => {
      const {
        test,
        futureTest
      } = this.props;
      const {
        subjects
      } = test;
      return subjects.map((subject, index) => TestCard_jsx("div", {
        className: "chart-block chart-block-test",
        key: index
      }, !futureTest ? [TestCard_jsx(external_react_chartjs_2_["Doughnut"], {
        data: () => TestCard_data(subjects.length ? subject.currentScore / subject.targetScore * 100 : 0),
        height: 104,
        width: 104,
        options: {
          cutoutPercentage: 80
        },
        key: "0"
      }), TestCard_jsx("span", {
        className: "value-max",
        style: {
          top: '0px'
        },
        key: "1"
      }, subject.targetScore)] : [TestCard_jsx("span", {
        className: "value-max",
        key: "0"
      }, subject.targetScore), TestCard_jsx("div", {
        className: "js-donut-chart",
        "data-stroke-width": "15",
        "data-source": "./inc/score-data-test-reading.json",
        key: "1"
      })], TestCard_jsx("div", {
        className: "chart-text"
      }, subject.subject === 'Reading & Writing' && !futureTest ? TestCard_jsx("span", {
        className: "title"
      }, "Reading ", TestCard_jsx("br", null), " & Writing") : TestCard_jsx("span", {
        className: "title"
      }, subject.subject), TestCard_jsx("span", {
        className: "value"
      }, subject.currentScore), TestCard_jsx("span", {
        className: "description"
      }, "+", subject.totalGain))));
    });
  }

  render() {
    const {
      test,
      futureTest = false,
      dropdownIndex,
      index,
      dropdownIsOpen,
      onEnterAnswers,
      onEditTest,
      onDownloadReport,
      onDeleteTest,
      openTestScores
    } = this.props;
    const {
      title,
      version = '',
      testDate,
      weekNumber,
      initialScore,
      targetScore,
      currentScore
    } = test;
    return TestCard_jsx("div", {
      className: "col s12 m8 l7 xl5"
    }, TestCard_jsx("div", {
      className: "card-main-col"
    }, TestCard_jsx("div", {
      className: futureTest ? 'card-test card-main card-disabled card' : 'card-test card-main card'
    }, TestCard_jsx("div", {
      className: "card-content"
    }, TestCard_jsx("div", {
      className: " card-panel-row row mb-0"
    }, TestCard_jsx("div", {
      className: "col s7"
    }, TestCard_jsx("div", {
      className: "card-title-block",
      style: {
        marginTop: !futureTest ? '-30px' : '-50px'
      }
    }, TestCard_jsx("h4", {
      className: "h2"
    }, TestCard_jsx("a", {
      href: "#",
      onClick: () => openTestScores({
        index
      })
    }, title)), TestCard_jsx("time", {
      className: "date",
      style: {
        marginBottom: futureTest ? '20px' : ''
      }
    }, testDate, " (week ", weekNumber, ")"), !futureTest ? TestCard_jsx("p", null, "Version ", version) : null), TestCard_jsx("div", {
      className: "chart-container chart-container-test"
    }, TestCard_jsx("div", {
      className: "chart-holder"
    }, TestCard_jsx("span", {
      className: "svg-curved-bar"
    }, TestCard_jsx(external_react_chartjs_2_["Doughnut"], {
      data: () => TestCard_data(initialScore ? Number((currentScore - initialScore) / (targetScore - initialScore)) * 100 : 0),
      options: {
        circumference: 1 * Math.PI,
        rotation: 1 * Math.PI,
        cutoutPercentage: 60,
        tooltips: false
      }
    }), TestCard_jsx("span", {
      className: "js-diff-holder"
    }, TestCard_jsx("span", {
      className: "js-diff"
    }, TestCard_jsx("span", {
      className: "txt",
      style: {
        opacity: '1',
        bottom: '75px',
        color: 'black',
        fontWeight: '600',
        fontSize: '12px'
      }
    }, "+", currentScore - initialScore)))), TestCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#00bbf7'
      }
    }, TestCard_jsx("span", {
      "data-count-up": true,
      "data-start-val": "1100",
      "data-end-val": "1210",
      "data-duration": "1"
    }, currentScore))), TestCard_jsx("div", {
      className: "chart-row"
    }, TestCard_jsx("div", {
      className: "chart-col chart-start"
    }, TestCard_jsx("span", {
      className: "amount"
    }, initialScore), " ", TestCard_jsx("br", null), TestCard_jsx("span", {
      className: "amount-text"
    }, "initial")), TestCard_jsx("div", {
      className: "chart-col chart-end"
    }, TestCard_jsx("span", {
      className: "amount"
    }, targetScore), " ", TestCard_jsx("br", null), TestCard_jsx("span", {
      className: "amount-text"
    }, "target"))))), TestCard_jsx("div", {
      className: "col s5 right-align"
    }, TestCard_jsx("div", {
      className: "row icons-row",
      style: {
        marginBottom: '10px'
      }
    }, TestCard_jsx("div", {
      className: "dropdown-block col"
    }, TestCard_jsx("a", {
      href: "#",
      "data-target": "dropdown01",
      className: "dropdown-trigger btn",
      onClick: this.handleDropdownClick
    }, TestCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? TestCard_jsx("ul", {
      id: "dropdown01",
      className: "dropdown-content",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, TestCard_jsx("li", null, TestCard_jsx("a", {
      href: "#",
      onClick: onEnterAnswers
    }, "Enter Answers")), TestCard_jsx("li", null, TestCard_jsx("a", {
      href: "#",
      onClick: onEditTest
    }, "Edit")), TestCard_jsx("li", null, TestCard_jsx("a", {
      href: "#",
      onClick: onDownloadReport,
      className: "disabled"
    }, "Download Report")), TestCard_jsx("li", null, TestCard_jsx("a", {
      href: "#",
      onClick: onDeleteTest,
      className: "red-text text-darken-3"
    }, "Delete"))) : null)), this.mapTestSubjects()))))));
  }

}

/* harmony default export */ var components_TestCard = (TestCard_TestCard);
// CONCATENATED MODULE: ./components/Student/DetailTestScorePage/components/TotalScoreCard/index.js
var TotalScoreCard_jsx = external_react_default.a.createElement;



const TotalScoreCard_data = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible - totalScore],
    backgroundColor: ['#ce237a', 'rgb(234, 234, 234)']
  }]
}); // eslint-disable-next-line react/prop-types


const TotalScoreCard = ({
  totalScore,
  totalPossible
}) => TotalScoreCard_jsx("div", {
  className: "col s12 l6 card-width-546"
}, TotalScoreCard_jsx("div", {
  className: "card-block"
}, TotalScoreCard_jsx("h2", null, "Your Score ", TotalScoreCard_jsx("span", {
  className: "separator"
}, "|"), " ", TotalScoreCard_jsx("span", {
  className: "quantity"
}, "400 to 1600")), TotalScoreCard_jsx("div", {
  className: "card-main-full card"
}, TotalScoreCard_jsx("div", {
  className: "card-content center-align"
}, TotalScoreCard_jsx("div", {
  className: "chart-block chart-block-total"
}, TotalScoreCard_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => TotalScoreCard_data(totalScore, totalPossible),
  width: 320,
  height: 320,
  options: {
    cutoutPercentage: 80
  }
}), TotalScoreCard_jsx("div", {
  className: "chart-text"
}, TotalScoreCard_jsx("span", {
  className: "title"
}, "TotalScore"), TotalScoreCard_jsx("span", {
  className: "value"
}, totalScore), TotalScoreCard_jsx("span", {
  className: "description"
}, "(+220)")))))));

/* harmony default export */ var components_TotalScoreCard = (TotalScoreCard);
// CONCATENATED MODULE: ./components/Student/DetailTestScorePage/components/SectionScoreCard/index.js
var SectionScoreCard_jsx = external_react_default.a.createElement;



const SectionScoreCard_data = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible - totalScore],
    backgroundColor: ['#f5883f', 'rgb(234, 234, 234)']
  }]
});

const SectionScoreCard = ({
  sectionScores: {
    readingAndWriting,
    math,
    totalPossible
  }
}) => SectionScoreCard_jsx("div", {
  className: "col s12 l6 card-width-546"
}, SectionScoreCard_jsx("div", {
  className: "card-block"
}, SectionScoreCard_jsx("h2", null, "Section Scores ", SectionScoreCard_jsx("span", {
  className: "separator"
}, "|"), " ", SectionScoreCard_jsx("span", {
  className: "quantity"
}, "200 to 800")), SectionScoreCard_jsx("div", {
  className: "card-main-full card"
}, SectionScoreCard_jsx("div", {
  className: "card-content"
}, SectionScoreCard_jsx("div", {
  className: "several-charts-row row mb-0"
}, SectionScoreCard_jsx("div", {
  className: "col s6 center-align"
}, SectionScoreCard_jsx("div", {
  className: "chart-block chart-block-218"
}, SectionScoreCard_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => SectionScoreCard_data(readingAndWriting, totalPossible),
  width: 215,
  height: 215,
  options: {
    cutoutPercentage: 80
  }
}), SectionScoreCard_jsx("div", {
  className: "chart-text"
}, SectionScoreCard_jsx("span", {
  className: "title"
}, "Reading & Writing"), SectionScoreCard_jsx("span", {
  className: "value"
}, readingAndWriting), SectionScoreCard_jsx("span", {
  className: "description"
}, "(+80)")))), SectionScoreCard_jsx("div", {
  className: "col s6 center-align"
}, SectionScoreCard_jsx("div", {
  className: "chart-block chart-block-218"
}, SectionScoreCard_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => SectionScoreCard_data(math, totalPossible),
  width: 215,
  height: 215,
  options: {
    cutoutPercentage: 80
  }
}), SectionScoreCard_jsx("div", {
  className: "chart-text"
}, SectionScoreCard_jsx("span", {
  className: "title"
}, "Math"), SectionScoreCard_jsx("span", {
  className: "value"
}, math), SectionScoreCard_jsx("span", {
  className: "description"
}, "(+80)"))))), SectionScoreCard_jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.")))));

/* harmony default export */ var components_SectionScoreCard = (SectionScoreCard);
// CONCATENATED MODULE: ./components/Student/DetailTestScorePage/components/TestScoreCard/index.js
var TestScoreCard_jsx = external_react_default.a.createElement;



const TestScoreCard_data = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible - totalScore],
    backgroundColor: ['#00bbf7', 'rgb(234, 234, 234)']
  }]
});

const TestScoreCard = ({
  subjectScores: {
    reading,
    math,
    writing,
    totalPossible
  }
}) => TestScoreCard_jsx("div", {
  className: "col s12 l8 card-width-772"
}, TestScoreCard_jsx("div", {
  className: "card-block"
}, TestScoreCard_jsx("h2", null, "Test Scores ", TestScoreCard_jsx("span", {
  className: "separator"
}, "|"), " ", TestScoreCard_jsx("span", {
  className: "quantity"
}, "10 to 40")), TestScoreCard_jsx("div", {
  className: "card-main-full card"
}, TestScoreCard_jsx("div", {
  className: "card-content"
}, TestScoreCard_jsx("div", {
  className: "several-charts-row row mb-0"
}, TestScoreCard_jsx("div", {
  className: "col s4 center-align"
}, TestScoreCard_jsx("div", {
  className: "chart-block chart-block-182"
}, TestScoreCard_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => TestScoreCard_data(reading, totalPossible),
  width: 182,
  height: 182,
  options: {
    cutoutPercentage: 80
  }
}), TestScoreCard_jsx("div", {
  className: "chart-text"
}, TestScoreCard_jsx("span", {
  className: "title"
}, "Reading"), TestScoreCard_jsx("span", {
  className: "value"
}, reading), TestScoreCard_jsx("span", {
  className: "description"
}, "(+3)")))), TestScoreCard_jsx("div", {
  className: "col s4 center-align"
}, TestScoreCard_jsx("div", {
  className: "chart-block chart-block-182"
}, TestScoreCard_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => TestScoreCard_data(writing, totalPossible),
  width: 182,
  height: 182,
  options: {
    cutoutPercentage: 80
  }
}), TestScoreCard_jsx("div", {
  className: "chart-text"
}, TestScoreCard_jsx("span", {
  className: "title"
}, "Writing"), TestScoreCard_jsx("span", {
  className: "value"
}, writing), TestScoreCard_jsx("span", {
  className: "description"
}, "(+4)")))), TestScoreCard_jsx("div", {
  className: "col s4 center-align"
}, TestScoreCard_jsx("div", {
  className: "chart-block chart-block-182"
}, TestScoreCard_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => TestScoreCard_data(math, totalPossible),
  width: 182,
  height: 182,
  options: {
    cutoutPercentage: 80
  }
}), TestScoreCard_jsx("div", {
  className: "chart-text"
}, TestScoreCard_jsx("span", {
  className: "title"
}, "Math"), TestScoreCard_jsx("span", {
  className: "value"
}, math), TestScoreCard_jsx("span", {
  className: "description"
}, "(+2.5)"))))), TestScoreCard_jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ")))));

/* harmony default export */ var components_TestScoreCard = (TestScoreCard);
// CONCATENATED MODULE: ./components/Student/DetailTestScorePage/components/EssayScoresCard/index.js
var EssayScoresCard_jsx = external_react_default.a.createElement;


const EssayScoresCard = ({
  essayScores: {
    reading,
    analysis,
    writing
  }
}) => EssayScoresCard_jsx("div", {
  className: "col s12 l4 card-width-316"
}, EssayScoresCard_jsx("div", {
  className: "card-block"
}, EssayScoresCard_jsx("h2", null, "Essay Scores ", EssayScoresCard_jsx("span", {
  className: "separator"
}, "|"), " ", EssayScoresCard_jsx("span", {
  className: "quantity"
}, "2 to 8")), EssayScoresCard_jsx("div", {
  className: "card-main-full card"
}, EssayScoresCard_jsx("div", {
  className: "card-content"
}, EssayScoresCard_jsx("div", {
  className: "progress-section"
}, EssayScoresCard_jsx("div", {
  className: "progress-block progress-block-lg"
}, EssayScoresCard_jsx("div", {
  className: "progress-legend"
}, EssayScoresCard_jsx("div", {
  className: "legend-block"
}, EssayScoresCard_jsx("span", {
  className: "text"
}, "Reading"))), EssayScoresCard_jsx("div", {
  className: "progress progress-rounded-lg",
  style: {
    borderRadius: '13px'
  }
}, EssayScoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: '80%',
    backgroundColor: '#ce237a',
    borderRadius: '13px'
  }
}, EssayScoresCard_jsx("span", {
  className: "progress-label"
}, reading)))), EssayScoresCard_jsx("div", {
  className: "progress-block progress-block-lg"
}, EssayScoresCard_jsx("div", {
  className: "progress-legend"
}, EssayScoresCard_jsx("div", {
  className: "legend-block"
}, EssayScoresCard_jsx("span", {
  className: "text"
}, "Analysis"))), EssayScoresCard_jsx("div", {
  className: "progress progress-rounded-lg",
  style: {
    borderRadius: '13px'
  }
}, EssayScoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: '80%',
    backgroundColor: '#ce237a',
    borderRadius: '13px'
  }
}, EssayScoresCard_jsx("span", {
  className: "progress-label"
}, analysis)))), EssayScoresCard_jsx("div", {
  className: "progress-block progress-block-lg"
}, EssayScoresCard_jsx("div", {
  className: "progress-legend"
}, EssayScoresCard_jsx("div", {
  className: "legend-block"
}, EssayScoresCard_jsx("span", {
  className: "text"
}, "Writing"))), EssayScoresCard_jsx("div", {
  className: "progress progress-rounded-lg",
  style: {
    borderRadius: '13px'
  }
}, EssayScoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: '80%',
    backgroundColor: '#ce237a',
    borderRadius: '13px'
  }
}, EssayScoresCard_jsx("span", {
  className: "progress-label"
}, writing)))))))));

/* harmony default export */ var components_EssayScoresCard = (EssayScoresCard);
// CONCATENATED MODULE: ./components/Student/DetailTestScorePage/components/CrossTestScoresCard/index.js
var CrossTestScoresCard_jsx = external_react_default.a.createElement;


const CrossTestScoresCard = () => CrossTestScoresCard_jsx("div", {
  className: "col s12 l6 card-width-546"
}, CrossTestScoresCard_jsx("div", {
  className: "card-block"
}, CrossTestScoresCard_jsx("h2", null, "Cross-Test Scores ", CrossTestScoresCard_jsx("span", {
  className: "separator"
}, "|"), " ", CrossTestScoresCard_jsx("span", {
  className: "quantity"
}, "10 to 40")), CrossTestScoresCard_jsx("div", {
  className: "card-main-full card"
}, CrossTestScoresCard_jsx("div", {
  className: "card-content"
}, CrossTestScoresCard_jsx("div", {
  className: "progress-section"
}, CrossTestScoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, CrossTestScoresCard_jsx("div", {
  className: "progress-legend"
}, CrossTestScoresCard_jsx("div", {
  className: "legend-block"
}, CrossTestScoresCard_jsx("span", {
  className: "text"
}, "Analysis of History/Social Studies"))), CrossTestScoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, CrossTestScoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "55%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, CrossTestScoresCard_jsx("span", {
  className: "progress-label"
}, "24")))), CrossTestScoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, CrossTestScoresCard_jsx("div", {
  className: "progress-legend"
}, CrossTestScoresCard_jsx("div", {
  className: "legend-block"
}, CrossTestScoresCard_jsx("span", {
  className: "text"
}, "Analysis of History/Social Studies"))), CrossTestScoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, CrossTestScoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "50%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, CrossTestScoresCard_jsx("span", {
  className: "progress-label"
}, "17")))))))));

/* harmony default export */ var components_CrossTestScoresCard = (CrossTestScoresCard);
// CONCATENATED MODULE: ./components/Student/DetailTestScorePage/components/SubscoresCard/index.js
var SubscoresCard_jsx = external_react_default.a.createElement;


const SubScoresCard = ({
  subScores: {
    commandOfEvidence,
    wordsInContext,
    expressionOfIdeas,
    standardEnglishConventions,
    heartOfAlgebra,
    problemSolvingAndDataAnalysis,
    passportToAdvancedMath
  }
}) => SubscoresCard_jsx("div", {
  className: "col s12 l6 card-width-546"
}, SubscoresCard_jsx("div", {
  className: "card-block"
}, SubscoresCard_jsx("h2", null, "Subscores ", SubscoresCard_jsx("span", {
  className: "separator"
}, "|"), " ", SubscoresCard_jsx("span", {
  className: "quantity"
}, "1 to 15")), SubscoresCard_jsx("div", {
  className: "card-main-full card"
}, SubscoresCard_jsx("div", {
  className: "card-content"
}, SubscoresCard_jsx("div", {
  className: "progress-section"
}, SubscoresCard_jsx("div", {
  className: "row mb-0"
}, SubscoresCard_jsx("div", {
  className: "col s12 m6"
}, SubscoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, SubscoresCard_jsx("div", {
  className: "progress-legend"
}, SubscoresCard_jsx("div", {
  className: "legend-block"
}, SubscoresCard_jsx("span", {
  className: "text"
}, "Command of Evidence"))), SubscoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "10%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("span", {
  className: "progress-label"
}, commandOfEvidence)))), SubscoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, SubscoresCard_jsx("div", {
  className: "progress-legend"
}, SubscoresCard_jsx("div", {
  className: "legend-block"
}, SubscoresCard_jsx("span", {
  className: "text"
}, "Words in Context"))), SubscoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "70%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("span", {
  className: "progress-label"
}, wordsInContext)))), SubscoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, SubscoresCard_jsx("div", {
  className: "progress-legend"
}, SubscoresCard_jsx("div", {
  className: "legend-block"
}, SubscoresCard_jsx("span", {
  className: "text"
}, "Expression of Ideas"))), SubscoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "50%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("span", {
  className: "progress-label"
}, expressionOfIdeas)))), SubscoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, SubscoresCard_jsx("div", {
  className: "progress-legend"
}, SubscoresCard_jsx("div", {
  className: "legend-block"
}, SubscoresCard_jsx("span", {
  className: "text"
}, "Standard English Conventions"))), SubscoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "60%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("span", {
  className: "progress-label"
}, standardEnglishConventions))))), SubscoresCard_jsx("div", {
  className: "col s12 m6"
}, SubscoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, SubscoresCard_jsx("div", {
  className: "progress-legend"
}, SubscoresCard_jsx("div", {
  className: "legend-block"
}, SubscoresCard_jsx("span", {
  className: "text"
}, "Heart of Algebra"))), SubscoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "50%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("span", {
  className: "progress-label"
}, heartOfAlgebra)))), SubscoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, SubscoresCard_jsx("div", {
  className: "progress-legend"
}, SubscoresCard_jsx("div", {
  className: "legend-block"
}, SubscoresCard_jsx("span", {
  className: "text"
}, "Problem Solving and Data Analysis"))), SubscoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "50%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("span", {
  className: "progress-label"
}, problemSolvingAndDataAnalysis)))), SubscoresCard_jsx("div", {
  className: "progress-block progress-block-md"
}, SubscoresCard_jsx("div", {
  className: "progress-legend"
}, SubscoresCard_jsx("div", {
  className: "legend-block"
}, SubscoresCard_jsx("span", {
  className: "text"
}, "Passport to Advanced Math"))), SubscoresCard_jsx("div", {
  className: "progress progress-rounded-md",
  style: {
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("div", {
  className: "determinate",
  style: {
    width: "75%",
    backgroundColor: "#f5883f",
    borderRadius: '13px'
  }
}, SubscoresCard_jsx("span", {
  className: "progress-label"
}, passportToAdvancedMath)))))))))));

/* harmony default export */ var SubscoresCard = (SubScoresCard);
// CONCATENATED MODULE: ./components/Student/DetailTestScorePage/index.js
var DetailTestScorePage_jsx = external_react_default.a.createElement;








const DetailTestScorePage = ({
  test: {
    subjectScores,
    totalScore,
    totalPossible,
    sectionScores,
    essayScores,
    crossTestScores,
    subScores
  }
}) => DetailTestScorePage_jsx("div", {
  className: "container"
}, DetailTestScorePage_jsx("div", {
  className: "cards-section"
}, DetailTestScorePage_jsx("div", {
  className: "d-flex-content same-height justify-center row mb-0"
}, DetailTestScorePage_jsx(components_TotalScoreCard, {
  totalScore: totalScore,
  totalPossible: totalPossible
}), DetailTestScorePage_jsx(components_SectionScoreCard, {
  sectionScores: sectionScores
})), DetailTestScorePage_jsx("div", {
  className: "d-flex-content same-height justify-center row mb-0"
}, DetailTestScorePage_jsx(components_TestScoreCard, {
  subjectScores: subjectScores
}), DetailTestScorePage_jsx(components_EssayScoresCard, {
  essayScores: essayScores
})), DetailTestScorePage_jsx("div", {
  className: "d-flex-content justify-center row mb-0"
}, DetailTestScorePage_jsx(components_CrossTestScoresCard, {
  crossTestScores: crossTestScores
}), DetailTestScorePage_jsx(SubscoresCard, {
  subScores: subScores
}))));

/* harmony default export */ var Student_DetailTestScorePage = (DetailTestScorePage);
// CONCATENATED MODULE: ./components/Student/DetailTestScorePage/components/TestScoreNavBar/index.js

var TestScoreNavBar_jsx = external_react_default.a.createElement;

 // eslint-disable-next-line react/prefer-stateless-function

class TestScoreNavBar_TestScoreNavBar extends external_react_default.a.Component {
  render() {
    const {
      active,
      onSetActivePage
    } = this.props;
    return TestScoreNavBar_jsx(external_react_sticky_["Sticky"], {
      topOffset: -100
    }, ({
      style,
      isSticky
    }) => TestScoreNavBar_jsx("div", {
      className: "nav-header white",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1999,
        top: isSticky ? '95px' : "0px"
      })
    }, TestScoreNavBar_jsx("div", {
      className: "nav-additional",
      style: {
        display: 'table',
        margin: "0 auto"
      }
    }, TestScoreNavBar_jsx("ul", {
      className: "menu-additional"
    }, TestScoreNavBar_jsx("li", {
      className: "col s3",
      style: {
        display: 'inline'
      }
    }, TestScoreNavBar_jsx("a", {
      className: active === 'scores' ? 'active' : '',
      onClick: () => onSetActivePage('scores'),
      href: "#"
    }, "Scores")), TestScoreNavBar_jsx("li", {
      className: "col s3",
      style: {
        display: 'inline'
      }
    }, TestScoreNavBar_jsx("a", {
      className: active === 'answerSheet' ? 'active' : '',
      onClick: () => onSetActivePage('answerSheet'),
      href: "#"
    }, "Answer Sheet")), TestScoreNavBar_jsx("li", {
      className: "col s3 ",
      style: {
        display: 'inline'
      }
    }, TestScoreNavBar_jsx("a", {
      className: active === 'StrengthsAndWeaknesses' ? 'active' : '',
      onClick: () => onSetActivePage('StrengthsAndWeaknesses'),
      href: "#"
    }, "Strengths & Weaknesses")), TestScoreNavBar_jsx("li", {
      className: "col s3",
      style: {
        display: 'inline'
      }
    }, TestScoreNavBar_jsx("a", {
      className: active === 'testVersion' ? 'active' : '',
      onClick: () => onSetActivePage('testVersion'),
      href: "#"
    }, "Test Version")), TestScoreNavBar_jsx("li", {
      className: "menu-special col s3"
    }, TestScoreNavBar_jsx("a", {
      href: "#"
    }, "Download Score Report ", TestScoreNavBar_jsx("i", {
      className: "icon-download-file"
    })))))));
  }

}

;
/* harmony default export */ var components_TestScoreNavBar = (TestScoreNavBar_TestScoreNavBar);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/AnswerSheetNavBar/index.js
var AnswerSheetNavBar_jsx = external_react_default.a.createElement;


const AnswerSheetNavBar = ({
  activeSlide,
  onSetActiveSlide
}) => // eslint-disable-next-line no-unused-expressions
AnswerSheetNavBar_jsx("div", {
  className: "card-panel light-blue accent-2 white-text",
  style: {
    display: 'block'
  }
}, AnswerSheetNavBar_jsx("div", {
  className: "container"
}, AnswerSheetNavBar_jsx("div", {
  className: "row mb-0"
}, AnswerSheetNavBar_jsx("div", {
  className: "nav-slick nav-tab",
  style: {
    fontSize: '15px',
    display: 'table',
    margin: '0 auto'
  }
}, AnswerSheetNavBar_jsx("div", {
  className: "tab slide col 3",
  style: {
    padding: '0px 70px'
  }
}, AnswerSheetNavBar_jsx("a", {
  className: activeSlide === 'reading' ? 'active' : '',
  onClick: () => onSetActiveSlide('reading'),
  href: "#"
}, "Reading")), AnswerSheetNavBar_jsx("div", {
  className: "tab slide col 3",
  style: {
    padding: '0px 70px'
  }
}, AnswerSheetNavBar_jsx("a", {
  className: activeSlide === 'writing' ? 'active' : '',
  onClick: () => onSetActiveSlide('writing'),
  href: "#"
}, "Writing")), AnswerSheetNavBar_jsx("div", {
  className: "tab slide col 3",
  style: {
    padding: '0px 70px'
  }
}, AnswerSheetNavBar_jsx("a", {
  className: activeSlide === 'math (no calc)' ? 'active' : '',
  onClick: () => onSetActiveSlide('math (no calc)'),
  href: "#"
}, "Math ", AnswerSheetNavBar_jsx("span", {
  className: "block-sm"
}, "(no calc)"))), AnswerSheetNavBar_jsx("div", {
  className: "tab slide col 3",
  style: {
    padding: '0px 70px'
  }
}, AnswerSheetNavBar_jsx("a", {
  className: activeSlide === 'math (calculator)' ? 'active' : '',
  onClick: () => onSetActiveSlide('math (calculator)'),
  href: "#"
}, "Math ", AnswerSheetNavBar_jsx("span", {
  className: "block-sm"
}, "(calculator)"))), AnswerSheetNavBar_jsx("div", {
  className: "tab slide col 3",
  style: {
    padding: '0px 70px'
  }
}, AnswerSheetNavBar_jsx("a", {
  className: activeSlide === 'essay' ? 'active' : '',
  onClick: () => onSetActiveSlide('essay'),
  href: "#"
}, "Essay"))))));

/* harmony default export */ var components_AnswerSheetNavBar = (AnswerSheetNavBar);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/ReadingPage/index.js
var ReadingPage_jsx = external_react_default.a.createElement;



const ReadingPage_data = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible - totalScore],
    backgroundColor: ['#ce237a', 'rgb(234, 234, 234)']
  }]
});

const ReadingPage = ({
  reading: {
    totalCorrect,
    totalPossible,
    passageType: {
      science,
      informationalGraphicPassage,
      historySocialScience,
      USWorldLiterature,
      pairedPassages
    },
    questionType: {
      citingTextualEvidence: {
        citeTextAsEvidence,
        authorsIntentionAndMethod,
        supportOrRefute
      },
      readingClosely: {
        detailQuestion,
        supportRefuteAClaim
      }
    }
  }
}) => ReadingPage_jsx("div", {
  className: "slide"
}, ReadingPage_jsx("div", {
  className: "container-sm"
}, ReadingPage_jsx("div", {
  className: "row mb-0",
  style: {
    marginTop: '20px'
  }
}, ReadingPage_jsx("div", {
  className: "col s12 l5 xl4 chart-column"
}, ReadingPage_jsx("div", {
  className: "chart-block chart-block-large"
}, ReadingPage_jsx(external_react_chartjs_2_["Doughnut"], {
  data: () => ReadingPage_data(totalCorrect, totalPossible),
  width: 250,
  height: 250,
  options: {
    cutoutPercentage: 80
  }
}), ReadingPage_jsx("div", {
  className: "chart-text"
}, ReadingPage_jsx("span", {
  className: "title"
}, "Reading"), ReadingPage_jsx("span", {
  className: "value"
}, totalCorrect), ReadingPage_jsx("span", {
  className: "description"
}, "  out of  ", ReadingPage_jsx("b", null, totalPossible))))), ReadingPage_jsx("div", {
  className: "col s12 l7 xl8"
}, ReadingPage_jsx("ul", {
  className: "collapsible expandable collapsible-explain"
}, ReadingPage_jsx("li", null, ReadingPage_jsx("div", {
  className: "collapsible-header"
}, ReadingPage_jsx("b", null, "Explain This Graph")), ReadingPage_jsx("div", {
  className: "collapsible-body"
}, ReadingPage_jsx("div", {
  className: "row mb-0"
}, ReadingPage_jsx("div", {
  className: "col l6"
}, ReadingPage_jsx("ul", {
  className: "legend-list"
}, ReadingPage_jsx("li", null, ReadingPage_jsx("div", {
  className: "legend-frame"
}, ReadingPage_jsx("span", {
  className: "box red darken-2"
}), ReadingPage_jsx("strong", {
  className: "text h3"
}, "Focus Here!")), ReadingPage_jsx("p", null, "Most people with your score would get these correct, but you got them wrong. Work on these and you can pick up some easy points!")), ReadingPage_jsx("li", null, ReadingPage_jsx("div", {
  className: "legend-frame"
}, ReadingPage_jsx("span", {
  className: "box red lighten-5"
}), ReadingPage_jsx("strong", {
  className: "text h3"
}, "Tough Gains")), ReadingPage_jsx("p", null, "You missed these, but so did most others with a similar score. You\u2019ll likely \uFB01nd easier gains elsewhere.")))), ReadingPage_jsx("div", {
  className: "col l6"
}, ReadingPage_jsx("ul", {
  className: "legend-list"
}, ReadingPage_jsx("li", null, ReadingPage_jsx("div", {
  className: "legend-frame"
}, ReadingPage_jsx("span", {
  className: "box light-green darken-2"
}), ReadingPage_jsx("strong", {
  className: "text h3"
}, "Well Done!")), ReadingPage_jsx("p", null, "You\u2019re overachiving in this category compared to other with your score. Keep up the good work!"), ReadingPage_jsx("p", null, " ")), ReadingPage_jsx("li", null, ReadingPage_jsx("div", {
  className: "legend-frame"
}, ReadingPage_jsx("span", {
  className: "box  light-green lighten-4"
}), ReadingPage_jsx("strong", {
  className: "text h3"
}, "Piece o\u2019 Cake")), ReadingPage_jsx("p", null, "You answered these correctly like others with a similar score.")))))))))), ReadingPage_jsx("div", {
  className: "graphs-section"
}, ReadingPage_jsx("div", {
  className: "graphs-block"
}, ReadingPage_jsx("div", {
  className: "graph-row graph-row-title"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("h3", {
  className: "graph-title"
}, "Passage Type")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "100%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "80%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "80%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, "12"), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Science")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "85%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "0%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "100%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "70%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, science), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Informational Graphic Passage")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "75%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "70%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "70%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, informationalGraphicPassage), ReadingPage_jsx("span", {
  className: "text-small"
}, "  out of  "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "History/Social Science")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "85%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "5%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "15%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, historySocialScience), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "US & World Literature")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "45%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "85%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "0%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, USWorldLiterature), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Paired Passages")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "35%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "0%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "60%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "10%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, pairedPassages), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18")))), ReadingPage_jsx("div", {
  className: "graphs-block"
}, ReadingPage_jsx("div", {
  className: "graph-row graph-row-title"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("h3", {
  className: "graph-title"
}, "Question Type")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "85%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "12%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "95%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, "12"), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row-block"
}, ReadingPage_jsx("div", {
  className: "graph-row graph-row-subtitle"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Citing Textual Evidence")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "55%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "0%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "70%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "12%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, "12"), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row graph-row-inner"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Cite Text as Evidence")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "20%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "85%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "70%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, citeTextAsEvidence), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row graph-row-inner"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Author\u2019s Intention and Method")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "55%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "7%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "15%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, authorsIntentionAndMethod), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row graph-row-inner"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Support / Refute a Claim")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "47%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "12%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "0%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, supportOrRefute), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18")))), ReadingPage_jsx("div", {
  className: "graph-row-block"
}, ReadingPage_jsx("div", {
  className: "graph-row graph-row-subtitle"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Reading Closely")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "12%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "0%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "55%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "10%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, "12"), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row graph-row-inner"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Detail Question")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "100%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "8%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "95%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "0%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, detailQuestion), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))), ReadingPage_jsx("div", {
  className: "graph-row graph-row-inner"
}, ReadingPage_jsx("div", {
  className: "graph-col text-column"
}, ReadingPage_jsx("strong", {
  className: "graph-subtitle"
}, "Support / Refute a Claim")), ReadingPage_jsx("div", {
  className: "graph-col graph-container"
}, ReadingPage_jsx("div", {
  className: "graph-linear"
}, ReadingPage_jsx("div", {
  className: "part-left"
}, ReadingPage_jsx("div", {
  className: "part-green-light",
  style: {
    width: "75%"
  }
}, ReadingPage_jsx("div", {
  className: "part-red",
  style: {
    width: "0%"
  }
}))), ReadingPage_jsx("div", {
  className: "part-right"
}, ReadingPage_jsx("div", {
  className: "part-red-light",
  style: {
    width: "100%"
  }
}, ReadingPage_jsx("div", {
  className: "part-green",
  style: {
    width: "70%"
  }
}))))), ReadingPage_jsx("div", {
  className: "graph-col graph-info"
}, ReadingPage_jsx("span", {
  className: "text-large"
}, supportRefuteAClaim), ReadingPage_jsx("span", {
  className: "text-small"
}, " out of "), ReadingPage_jsx("span", {
  className: "text-large"
}, "18"))))))));

/* harmony default export */ var components_ReadingPage = (ReadingPage);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/WritingPage/components/QuestionModal/index.js


var WritingPage_components_QuestionModal_jsx = external_react_default.a.createElement;




class WritingPage_components_QuestionModal_QuestionModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleChecked", () => this.setState({
      isChecked: !this.state.isChecked
    }));

    this.state = {
      isChecked: false
    };
  }

  render() {
    const {
      open,
      onCloseQuestionModal,
      question
    } = this.props;
    const {
      isChecked
    } = this.state;
    return WritingPage_components_QuestionModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "overlay"
    }, WritingPage_components_QuestionModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: onCloseQuestionModal
    }, WritingPage_components_QuestionModal_jsx("div", {
      id: "modal_video001",
      className: "jsx-212733957" + " " + "modal modal-answer-single"
    }, WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "modal-header row mb-0"
    }, WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "col s10"
    }, WritingPage_components_QuestionModal_jsx("span", {
      className: "jsx-212733957" + " " + "subtitle"
    }, "Reading"), WritingPage_components_QuestionModal_jsx("span", {
      className: "jsx-212733957" + " " + "title"
    }, "Problem ", question.id)), WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "col s2 right-align"
    }, WritingPage_components_QuestionModal_jsx("a", {
      href: "#!",
      onClick: onCloseQuestionModal,
      className: "jsx-212733957" + " " + "close modal-close"
    }, WritingPage_components_QuestionModal_jsx("i", {
      className: "jsx-212733957" + " " + "icon-close-thin"
    })))), WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "modal-content"
    }, WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "card-panel"
    }, WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "panel-block"
    }, WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "d-flex align-items-center row mb-0"
    }, WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "col"
    }, WritingPage_components_QuestionModal_jsx("span", {
      style: {
        color: '#c0272d'
      },
      className: "jsx-212733957" + " " + "status-answer"
    }, WritingPage_components_QuestionModal_jsx("i", {
      className: "jsx-212733957" + " " + "icon-flag"
    }), WritingPage_components_QuestionModal_jsx("b", {
      className: "jsx-212733957" + " " + "status-text"
    }, "Flagged"))), WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "col"
    }, WritingPage_components_QuestionModal_jsx("label", {
      htmlFor: "reviewedCheckbox",
      className: "jsx-212733957"
    }, WritingPage_components_QuestionModal_jsx("input", {
      id: "reviewedCheckbox",
      type: "checkbox",
      defaultChecked: isChecked,
      name: "isChecked",
      onChange: this.onToggleChecked,
      className: "jsx-212733957" + " " + "filled-in"
    }), WritingPage_components_QuestionModal_jsx("span", {
      className: "jsx-212733957"
    }, WritingPage_components_QuestionModal_jsx("b", {
      className: "jsx-212733957"
    }, "Reviewed with Student")))))), WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "panel-block"
    }, WritingPage_components_QuestionModal_jsx("ul", {
      className: "jsx-212733957" + " " + "informers-list"
    }, WritingPage_components_QuestionModal_jsx("li", {
      className: "jsx-212733957" + " " + "informer-block"
    }, WritingPage_components_QuestionModal_jsx("div", {
      style: {
        width: '10%',
        backgroundColor: '#e5e5e5'
      },
      className: "jsx-212733957" + " " + "informer-box"
    }, WritingPage_components_QuestionModal_jsx("b", {
      style: {
        backgroundColor: '#e5e5e5'
      },
      className: "jsx-212733957" + " " + "informer-circle"
    }, "A")), WritingPage_components_QuestionModal_jsx("b", {
      className: "jsx-212733957" + " " + "informer-value"
    }, "10%")), WritingPage_components_QuestionModal_jsx("li", {
      className: "jsx-212733957" + " " + "informer-block"
    }, WritingPage_components_QuestionModal_jsx("div", {
      style: {
        width: '16%',
        backgroundColor: '#db1d41'
      },
      className: "jsx-212733957" + " " + "informer-box"
    }, WritingPage_components_QuestionModal_jsx("b", {
      style: {
        backgroundColor: '#db1d41',
        color: '#fff'
      },
      className: "jsx-212733957" + " " + "informer-circle"
    }, "B")), WritingPage_components_QuestionModal_jsx("b", {
      className: "jsx-212733957" + " " + "informer-value"
    }, "16%")), WritingPage_components_QuestionModal_jsx("li", {
      className: "jsx-212733957" + " " + "informer-block"
    }, WritingPage_components_QuestionModal_jsx("div", {
      style: {
        width: '37%',
        backgroundColor: '#d3efde'
      },
      className: "jsx-212733957" + " " + "informer-box"
    }, WritingPage_components_QuestionModal_jsx("b", {
      style: {
        backgroundColor: '#32955c',
        color: '#fff'
      },
      className: "jsx-212733957" + " " + "informer-circle"
    }, "C")), WritingPage_components_QuestionModal_jsx("b", {
      className: "jsx-212733957" + " " + "informer-value"
    }, "37%")), WritingPage_components_QuestionModal_jsx("li", {
      className: "jsx-212733957" + " " + "informer-block"
    }, WritingPage_components_QuestionModal_jsx("div", {
      style: {
        width: '8%',
        backgroundColor: '#e5e5e5'
      },
      className: "jsx-212733957" + " " + "informer-box"
    }, WritingPage_components_QuestionModal_jsx("b", {
      style: {
        backgroundColor: '#e5e5e5'
      },
      className: "jsx-212733957" + " " + "informer-circle"
    }, "D")), WritingPage_components_QuestionModal_jsx("b", {
      className: "jsx-212733957" + " " + "informer-value"
    }, "8%")))), WritingPage_components_QuestionModal_jsx("div", {
      className: "jsx-212733957" + " " + "panel-block"
    }, WritingPage_components_QuestionModal_jsx("strong", {
      className: "jsx-212733957" + " " + "subtitle"
    }, "Student\u2019s Notes:"), WritingPage_components_QuestionModal_jsx("div", {
      style: {
        borderTop: '1px solid gray'
      },
      className: "jsx-212733957" + " " + "text-content custom-form"
    }, WritingPage_components_QuestionModal_jsx("div", {
      style: {
        boxShadow: 'none'
      },
      className: "jsx-212733957" + " " + "jcf-scrollable height-22"
    }, WritingPage_components_QuestionModal_jsx("div", {
      style: {
        height: '100%',
        overflowY: 'scroll'
      },
      className: "jsx-212733957" + " " + "text-holder"
    }, WritingPage_components_QuestionModal_jsx("p", {
      className: "jsx-212733957"
    }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore? re?  tincidunt ut laoreet."), WritingPage_components_QuestionModal_jsx("p", {
      className: "jsx-212733957"
    }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet do?"), WritingPage_components_QuestionModal_jsx("p", {
      className: "jsx-212733957"
    }, "Hi Student, "), WritingPage_components_QuestionModal_jsx("p", {
      className: "jsx-212733957"
    }, "I\u2019m adding to your notes here.Maybe a suggestion or an answer to your question."), WritingPage_components_QuestionModal_jsx("p", {
      className: "jsx-212733957"
    }, "-Tutor")))))))))), WritingPage_components_QuestionModal_jsx(style_default.a, {
      id: "212733957"
    }, [".overlay.jsx-212733957{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", "#modal_video001.jsx-212733957{z-index:2003;opacity:1;-webkit-transform:scaleX(1) scaleY(1);-ms-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);}", ".modal.jsx-212733957{display:block;background-color:white;position:fixed;top:10%;left:10%;box-shadow:none;}", ".modal-answer-single.jsx-212733957{opacity:1;visibility:visible;display:block !important;top:0 !important;left:auto;right:0;height:100vh;max-weight:none;margin:0 0 0 auto;border-radius:0;width:100%;-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0;}", ".modal-footer.jsx-212733957{background-color:white;}", ".modal-header.jsx-212733957{background:#ec693d linear-gradient(to right,#ec693d 0%,#649aab 61%,#30add6 87%,#18b5e9 100%);color:#fff;padding:7px 10px 5px;min-height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]));
  }

}

/* harmony default export */ var WritingPage_components_QuestionModal = (WritingPage_components_QuestionModal_QuestionModal);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/WritingPage/components/Bubble/index.js

var Bubble_jsx = external_react_default.a.createElement;

const Bubble_styles = {
  red: {
    position: 'relative',
    color: '#fff',
    borderColor: '#fff',
    border: '1px solid',
    backgroundColor: '#db1d41',
    height: '19px',
    width: '19px',
    borderRadius: '50%'
  },
  greenFilled: {
    position: 'relative',
    color: '#fff',
    borderColor: '#32955c',
    border: '1px solid',
    backgroundColor: '#32955c',
    height: '19px',
    width: '19px',
    borderRadius: '50%'
  },
  greenBorderOnly: {
    position: 'relative',
    color: '#32955c',
    borderColor: '#32955c',
    border: '1px solid',
    backgroundColor: '#fff',
    height: '19px',
    width: '19px',
    borderRadius: '50%'
  },
  plain: {
    position: 'relative',
    color: '#a6a8ab',
    border: '1px solid',
    borderColor: '#a6a8ab',
    height: '19px',
    width: '19px',
    borderRadius: '50%'
  }
};

class Bubble_BubbleGroup extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentDidMount", () => {
      const {
        question: {
          studentChoice
        }
      } = this.props;
      this.setState({
        selected: studentChoice
      }, () => this.checkIfCorrect(this.state.selected));
    });

    Object(defineProperty["a" /* default */])(this, "onHandleBubbleChange", (event, letter) => {
      if (this.props.question.studentChoice === "") {
        this.setState({
          selected: event.target.value
        }, () => this.checkIfCorrect(letter));
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSelectedBubbleClick", event => {
      const {
        selected
      } = this.state;

      if (this.props.question.studentChoice === "") {
        if (selected === event.target.value) {
          this.setState({
            selected: ""
          });
        }
      }
    });

    Object(defineProperty["a" /* default */])(this, "checkIfCorrect", letter => {
      const {
        question
      } = this.props;

      if (letter === question.answer) {
        this.setState({
          correct: true
        });
      } else {
        this.setState({
          correct: false
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "mapEmptyBubbles", id => {
      const letters = ["A", "B", "C", "D"];
      return letters.map(letter => Bubble_jsx("li", {
        key: letter
      }, Bubble_jsx("form", null, Bubble_jsx("input", {
        type: "radio",
        id: `${id}${letter}`,
        name: "letter",
        value: letter,
        checked: this.state.selected === letter,
        onChange: event => this.onHandleBubbleChange(event, letter),
        onClick: event => this.onSelectedBubbleClick(event)
      }), Bubble_jsx("label", {
        htmlFor: `${id}${letter}`,
        style: this.state.selected ? this.renderBubbleStyle(letter) : Bubble_styles.plain
      }, Bubble_jsx("span", {
        style: {
          display: 'block',
          marginTop: '2px',
          paddingLeft: "4.5px"
        }
      }, letter)))));
    });

    Object(defineProperty["a" /* default */])(this, "renderBubbleStyle", letter => {
      const {
        correct,
        selected
      } = this.state;
      const {
        question: {
          answer
        }
      } = this.props;

      if (selected === letter && correct) {
        return Bubble_styles.greenFilled;
      }

      if (selected === letter && !correct) {
        return Bubble_styles.red;
      }

      if (letter !== selected && letter === !answer) {
        return Bubble_styles.plain;
      }

      if (letter !== selected && letter === answer) {
        return Bubble_styles.greenBorderOnly;
      }

      return Bubble_styles.plain;
    });

    this.state = {
      selected: this.props.question.studentChoice,
      correct: null
    };
  }

  render() {
    const {
      question: {
        id
      }
    } = this.props;
    return Bubble_jsx(external_react_default.a.Fragment, null, this.mapEmptyBubbles(id));
  }

}

/* harmony default export */ var Bubble = (Bubble_BubbleGroup);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/WritingPage/components/AnswerRow/index.js

var AnswerRow_jsx = external_react_default.a.createElement;




class AnswerRow_AnswerRow extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenQuestionModal", () => this.setState({
      open: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseQuestionModal", () => this.setState({
      open: false
    }));

    Object(defineProperty["a" /* default */])(this, "mapNumberBubbles", () => {
      const {
        question: {
          answer,
          studentChoice
        }
      } = this.props;

      if (answer === studentChoice) {
        return AnswerRow_jsx("li", {
          key: answer
        }, AnswerRow_jsx("span", {
          className: "badge badge-rounded badge-rounded-bordered",
          style: {
            color: '#fff',
            borderColor: '#32955c',
            backgroundColor: '#3eb777'
          }
        }, answer));
      }

      return AnswerRow_jsx(external_react_default.a.Fragment, null, AnswerRow_jsx("li", {
        key: studentChoice
      }, AnswerRow_jsx("span", {
        className: "badge badge-rounded badge-rounded-bordered",
        style: {
          color: '#fff',
          borderColor: '#ad1e3e',
          backgroundColor: '#db1d41'
        }
      }, studentChoice)), AnswerRow_jsx("li", {
        key: answer
      }, AnswerRow_jsx("span", {
        className: "badge badge-rounded badge-rounded-bordered",
        style: {
          color: '#32955c',
          borderColor: '#32955c',
          backgroundColor: '#fff'
        }
      }, answer)));
    });

    this.state = {
      open: false
    };
  }

  render() {
    const {
      question
    } = this.props;
    const {
      open
    } = this.state;
    return AnswerRow_jsx(external_react_default.a.Fragment, null, AnswerRow_jsx(WritingPage_components_QuestionModal, {
      open: open,
      onOpenQuestionModal: this.onOpenQuestionModal,
      onCloseQuestionModal: this.onCloseQuestionModal,
      question: question
    }), AnswerRow_jsx("li", {
      className: "answers-list-holder",
      key: question.problem,
      style: {
        marginRight: "15px"
      }
    }, AnswerRow_jsx("div", {
      className: "answer-row row mb-0"
    }, AnswerRow_jsx("div", {
      className: "col col-120"
    }, AnswerRow_jsx("ul", {
      className: "answer-list"
    }, !question.numeric ? AnswerRow_jsx(Bubble, {
      id: question.id,
      question: question
    }) : this.mapNumberBubbles())), AnswerRow_jsx("div", {
      className: "col col-30"
    }, AnswerRow_jsx("span", {
      className: "status-info"
    }, question.status)), AnswerRow_jsx("div", {
      className: "col col-43"
    }, AnswerRow_jsx("span", {
      className: "play-progress",
      "data-video-id": "video001"
    }, AnswerRow_jsx("span", {
      className: "play"
    }), AnswerRow_jsx("svg", {
      viewBox: "0 0 50 50",
      width: "50",
      height: "50",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, AnswerRow_jsx("circle", {
      className: "circle-static",
      cx: 25.8,
      cy: 24.3,
      r: 22.8,
      fill: "transparent",
      strokeWidth: 3
    }), AnswerRow_jsx("circle", {
      className: "circle-progress",
      cx: 25.8,
      cy: 24.3,
      r: 22.8,
      fill: "transparent",
      strokeWidth: 3
    })))), AnswerRow_jsx("div", {
      className: "col col-auto"
    }, question.flagged ? AnswerRow_jsx("span", {
      className: "status-answer",
      style: {
        color: '#c0272d'
      }
    }, AnswerRow_jsx("i", {
      className: "icon-flag"
    }), AnswerRow_jsx("b", {
      className: "status-text"
    }, "Review")) : null), AnswerRow_jsx("div", {
      className: "dropdown-block col col-35"
    }, AnswerRow_jsx("a", {
      className: "modal-trigger",
      href: "#",
      onClick: this.onOpenQuestionModal
    }, AnswerRow_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")))), question.studentNotes ? AnswerRow_jsx("div", {
      className: "comment-block"
    }, AnswerRow_jsx("p", null, question.studentNotes)) : null));
  }

}

/* harmony default export */ var components_AnswerRow = (AnswerRow_AnswerRow);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/WritingPage/index.js

var WritingPage_jsx = external_react_default.a.createElement;



class WritingPage_WritingPage extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapSampleAnswers", () => {
      const {
        sampleAnswers
      } = this.props;
      return sampleAnswers.map((question, index) => WritingPage_jsx(components_AnswerRow, {
        key: question.id,
        question: question,
        index: index
      }));
    });
  }

  render() {
    return WritingPage_jsx("div", {
      className: "slide"
    }, WritingPage_jsx("div", {
      className: "row",
      style: {
        columns: '3 auto',
        marginLeft: '10px',
        marginRight: '10px'
      }
    }, WritingPage_jsx("ol", {
      className: "answers-list"
    }, this.mapSampleAnswers())));
  }

}

/* harmony default export */ var components_WritingPage = (WritingPage_WritingPage);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/MathNoCalcPage/index.js

var MathNoCalcPage_jsx = external_react_default.a.createElement;



class MathNoCalcPage_MathNoCalcPage extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapMathNoCalcAnswers", () => {
      const {
        mathNoCalc: {
          sampleAnswers
        }
      } = this.props;
      return sampleAnswers.map(question => MathNoCalcPage_jsx(components_AnswerRow, {
        question: question,
        key: question.id
      }));
    });
  }

  render() {
    return MathNoCalcPage_jsx("div", {
      className: "slide"
    }, MathNoCalcPage_jsx("div", {
      className: "row",
      style: {
        columns: '3 auto',
        marginLeft: '10px',
        marginRight: '10px'
      }
    }, MathNoCalcPage_jsx("ol", {
      className: "answers-list"
    }, this.mapMathNoCalcAnswers())));
  }

}

/* harmony default export */ var components_MathNoCalcPage = (MathNoCalcPage_MathNoCalcPage);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/MathCalculatorPage/index.js

var MathCalculatorPage_jsx = external_react_default.a.createElement;



class MathCalculatorPage_MathCalculatorPage extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "mapMathCalculatorAnswers", () => {
      const {
        mathCalculator: {
          sampleAnswers
        }
      } = this.props;
      return sampleAnswers.map(question => MathCalculatorPage_jsx(components_AnswerRow, {
        question: question,
        key: question.id
      }));
    });
  }

  render() {
    return MathCalculatorPage_jsx("div", {
      className: "slide"
    }, MathCalculatorPage_jsx("div", {
      className: "row",
      style: {
        columns: '3 auto',
        marginLeft: '10px',
        marginRight: '10px'
      }
    }, MathCalculatorPage_jsx("ol", {
      className: "answers-list"
    }, this.mapMathCalculatorAnswers())));
  }

}

/* harmony default export */ var components_MathCalculatorPage = (MathCalculatorPage_MathCalculatorPage);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/utils/sampleEssayScores.js
const sampleEssayScores = [{
  value: 2,
  label: "2"
}, {
  value: 3,
  label: "3"
}, {
  value: 4,
  label: "4"
}, {
  value: 5,
  label: "5"
}, {
  value: 6,
  label: "6"
}, {
  value: 7,
  label: "7"
}, {
  value: 8,
  label: "8"
}];
/* harmony default export */ var utils_sampleEssayScores = (sampleEssayScores);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/components/EssayPage/index.js

var EssayPage_jsx = external_react_default.a.createElement;





class EssayPage_EssayPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetReadingScore", readingScore => this.setState({
      readingScore
    }));

    Object(defineProperty["a" /* default */])(this, "onSetAnalysisScore", analysisScore => this.setState({
      analysisScore
    }));

    Object(defineProperty["a" /* default */])(this, "onSetWritingScore", writingScore => this.setState({
      writingScore
    }));

    this.state = {
      readingScore: "",
      analysisScore: "",
      writingScore: ""
    };
  }

  render() {
    const {
      readingScore,
      writingScore,
      analysisScore
    } = this.state;
    return EssayPage_jsx("div", {
      className: "slide"
    }, EssayPage_jsx("div", {
      className: "tabs-section tabs-content-lg-visible"
    }, EssayPage_jsx("ul", {
      className: "tabs tabs-flex"
    }, EssayPage_jsx("li", {
      className: "tab col s3"
    }, EssayPage_jsx("a", {
      className: "active",
      href: "#reading"
    }, EssayPage_jsx("b", null, "Reading"))), EssayPage_jsx("li", {
      className: "tab col s3"
    }, EssayPage_jsx("a", {
      href: "#analysis"
    }, EssayPage_jsx("b", null, "Analysis"))), EssayPage_jsx("li", {
      className: "tab col s3"
    }, EssayPage_jsx("a", {
      href: "#writing"
    }, EssayPage_jsx("b", null, "Writing")))), EssayPage_jsx("div", {
      className: "tabs-content"
    }, EssayPage_jsx("div", {
      className: "row"
    }, EssayPage_jsx("div", {
      className: "col s12 l4"
    }, EssayPage_jsx("div", {
      id: "reading",
      className: "tab-content"
    }, EssayPage_jsx("div", {
      className: "card-panel"
    }, EssayPage_jsx("h1", {
      className: "h2"
    }, EssayPage_jsx("span", {
      className: "hide-on-large-only"
    }, "Score:"), EssayPage_jsx("span", {
      className: "visible-lg-inline"
    }, "Reading |"), " ", EssayPage_jsx("span", {
      className: "quality"
    }, "2 to 8")), EssayPage_jsx("div", {
      className: "input-row row"
    }, EssayPage_jsx("div", {
      className: "input-field col s8 m6 l5"
    }, EssayPage_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(readingScore, utils_sampleEssayScores),
      onChange: this.onSetReadingScore,
      options: utils_sampleEssayScores,
      label: "Score",
      stateKey: "state",
      dropdownKey: "state",
      id: "readingScore"
    }))), EssayPage_jsx("div", {
      className: "text-content custom-form",
      style: {
        borderTop: '1px solid gray'
      }
    }, EssayPage_jsx("div", {
      className: "jcf-scrollable height-570 box scrollable",
      style: {
        boxShadow: 'none'
      }
    }, EssayPage_jsx("div", {
      className: "text-container",
      style: {
        height: '100%',
        overflowY: 'scroll'
      }
    }, EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 8 - Advanced"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details and how they interrelate, demonstrating a comprehensive understanding of the text."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 6 - Pro\uFB01cient"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 4 - Partial"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 2 - Inadequate"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response fails to show an understanding of the text's central idea(s) and may include only details without reference to central idea(s). "), EssayPage_jsx("p", null, "The response may contain numerous errors of fact and/or interpretation with regard to the text. "), EssayPage_jsx("p", null, "The response makes little or no use of textual evidence (quotations, paraphrases, or both), demonstrating little or no understanding of the source text.")))))))), EssayPage_jsx("div", {
      className: "col s12 l4"
    }, EssayPage_jsx("div", {
      id: "analysis",
      className: "tab-content"
    }, EssayPage_jsx("div", {
      className: "card-panel"
    }, EssayPage_jsx("h1", {
      className: "h2"
    }, EssayPage_jsx("span", {
      className: "hide-on-large-only"
    }, "Score:"), EssayPage_jsx("span", {
      className: "visible-lg-inline"
    }, "Analysis |"), " ", EssayPage_jsx("span", {
      className: "quality"
    }, "2 to 8")), EssayPage_jsx("div", {
      className: "input-row row"
    }, EssayPage_jsx("div", {
      className: "input-field col s8 m6 l5"
    }, EssayPage_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(analysisScore, utils_sampleEssayScores),
      onChange: this.onSetAnalysisScore,
      options: utils_sampleEssayScores,
      label: "Score",
      stateKey: "state",
      dropdownKey: "state",
      id: "analysisScore"
    }))), EssayPage_jsx("div", {
      className: "text-content custom-form",
      style: {
        borderTop: '1px solid gray'
      }
    }, EssayPage_jsx("div", {
      className: "jcf-scrollable height-570 box scrollable",
      style: {
        boxShadow: 'none'
      }
    }, EssayPage_jsx("div", {
      className: "text-container",
      style: {
        height: '100%',
        overflowY: 'scroll'
      }
    }, EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 8 - Advanced"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details and how they interrelate, demonstrating a comprehensive understanding of the text."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 6 - Pro\uFB01cient"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 4 - Partial"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 2 - Inadequate"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response fails to show an understanding of the text's central idea(s) and may include only details without reference to central idea(s). "), EssayPage_jsx("p", null, "The response may contain numerous errors of fact and/or interpretation with regard to the text. "), EssayPage_jsx("p", null, "The response makes little or no use of textual evidence (quotations, paraphrases, or both), demonstrating little or no understanding of the source text.")))))))), EssayPage_jsx("div", {
      className: "col s12 l4"
    }, EssayPage_jsx("div", {
      id: "writing",
      className: "tab-content"
    }, EssayPage_jsx("div", {
      className: "card-panel"
    }, EssayPage_jsx("h1", {
      className: "h2"
    }, EssayPage_jsx("span", {
      className: "hide-on-large-only"
    }, "Score:"), EssayPage_jsx("span", {
      className: "visible-lg-inline"
    }, "Writing |"), " ", EssayPage_jsx("span", {
      className: "quality"
    }, "2 to 8")), EssayPage_jsx("div", {
      className: "input-row row"
    }, EssayPage_jsx("div", {
      className: "input-field col s8 m6 l5"
    }, EssayPage_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(writingScore, utils_sampleEssayScores),
      onChange: this.onSetWritingScore,
      options: utils_sampleEssayScores,
      label: "Score",
      stateKey: "state",
      dropdownKey: "state",
      id: "readingScore"
    }))), EssayPage_jsx("div", {
      className: "text-content custom-form",
      style: {
        borderTop: '1px solid gray'
      }
    }, EssayPage_jsx("div", {
      className: "jcf-scrollable height-570 box scrollable",
      style: {
        boxShadow: 'none'
      }
    }, EssayPage_jsx("div", {
      className: "text-container",
      style: {
        height: '100%',
        overflowY: 'scroll'
      }
    }, EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 8 - Advanced"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details and how they interrelate, demonstrating a comprehensive understanding of the text."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 6 - Pro\uFB01cient"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 4 - Partial"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response shows an understanding of the text's central idea(s) and of most important details."), EssayPage_jsx("p", null, "The response is free of errors of fact or interpretation with regard to the text."), EssayPage_jsx("p", null, "The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.")), EssayPage_jsx("div", {
      className: "text-frame"
    }, EssayPage_jsx("h2", null, "Score: 2 - Inadequate"), EssayPage_jsx("p", null, "The response demonstrates thorough comprehension of the source text."), EssayPage_jsx("p", null, "The response fails to show an understanding of the text's central idea(s) and may include only details without reference to central idea(s). "), EssayPage_jsx("p", null, "The response may contain numerous errors of fact and/or interpretation with regard to the text. "), EssayPage_jsx("p", null, "The response makes little or no use of textual evidence (quotations, paraphrases, or both), demonstrating little or no understanding of the source text."))))))))))));
  }

}

/* harmony default export */ var components_EssayPage = (EssayPage_EssayPage);
// CONCATENATED MODULE: ./components/Student/DetailTestAnswerSheetComplete/index.js

var DetailTestAnswerSheetComplete_jsx = external_react_default.a.createElement;








class DetailTestAnswerSheetComplete_DetailTestAnswerSheetComplete extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetActiveSlide", activeSlide => this.setState({
      activeSlide
    }));

    Object(defineProperty["a" /* default */])(this, "renderCurrentSlide", () => {
      const {
        activeSlide
      } = this.state;
      const {
        testScoreDetails: {
          reading,
          mathNoCalc,
          mathCalculator,
          writing: {
            sampleAnswers
          }
        }
      } = this.props;

      if (activeSlide === 'reading') {
        return DetailTestAnswerSheetComplete_jsx(components_ReadingPage, {
          reading: reading
        });
      }

      if (activeSlide === 'writing') {
        return DetailTestAnswerSheetComplete_jsx(components_WritingPage, {
          sampleAnswers: sampleAnswers
        });
      }

      if (activeSlide === 'math (no calc)') {
        return DetailTestAnswerSheetComplete_jsx(components_MathNoCalcPage, {
          mathNoCalc: mathNoCalc
        });
      }

      if (activeSlide === 'math (calculator)') {
        return DetailTestAnswerSheetComplete_jsx(components_MathCalculatorPage, {
          mathCalculator: mathCalculator
        });
      }

      if (activeSlide === 'essay') {
        return DetailTestAnswerSheetComplete_jsx(components_EssayPage, null);
      }

      return null;
    });

    this.state = {
      activeSlide: 'reading'
    };
  }

  render() {
    const {
      activeSlide
    } = this.state;
    return DetailTestAnswerSheetComplete_jsx("div", {
      className: "card-main-full card"
    }, DetailTestAnswerSheetComplete_jsx("div", {
      className: "slick-tabs-gallery"
    }, DetailTestAnswerSheetComplete_jsx(components_AnswerSheetNavBar, {
      activeSlide: activeSlide,
      onSetActiveSlide: this.onSetActiveSlide
    })), DetailTestAnswerSheetComplete_jsx("div", {
      className: "card-content"
    }, DetailTestAnswerSheetComplete_jsx("div", {
      className: "main-slick"
    }, this.renderCurrentSlide())));
  }

}

/* harmony default export */ var Student_DetailTestAnswerSheetComplete = (DetailTestAnswerSheetComplete_DetailTestAnswerSheetComplete);
// CONCATENATED MODULE: ./components/Student/TestSections/index.js

var TestSections_jsx = external_react_default.a.createElement;






class TestSections_TestSections extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetActivePage", active => this.setState({
      active
    }));

    Object(defineProperty["a" /* default */])(this, "renderCurrentPage", () => {
      const {
        active
      } = this.state;
      const {
        test
      } = this.props;

      if (active === 'scores') {
        return TestSections_jsx(Student_DetailTestScorePage, {
          test: test
        });
      }

      if (active === 'answerSheet') {
        return TestSections_jsx(Student_DetailTestAnswerSheetComplete, {
          testScoreDetails: test.testScoreDetails
        });
      }

      return null;
    });

    this.state = {
      active: 'scores'
    };
  }

  render() {
    const {
      active
    } = this.state;
    return TestSections_jsx(external_react_default.a.Fragment, null, TestSections_jsx(external_react_sticky_["StickyContainer"], null, TestSections_jsx(components_TestScoreNavBar, {
      active: active,
      onSetActivePage: this.onSetActivePage
    }), TestSections_jsx("div", {
      className: "content-section"
    }, TestSections_jsx("div", {
      className: "content-section-holder"
    }, this.renderCurrentPage()))));
  }

}

/* harmony default export */ var Student_TestSections = (TestSections_TestSections);
// CONCATENATED MODULE: ./components/Student/DetailTestList/utils/sampleTests.js
/* harmony default export */ var sampleTests = ([{
  id: 1,
  status: 'complete',
  title: 'Practice Test 1',
  testDate: '05/12/2019',
  dueDate: '05/05/2019',
  completionDate: '05/12/2019',
  completionTime: '4:21 PM',
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
  }],
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
  },
  totalScore: '1080',
  totalPossible: '1600',
  sectionScores: {
    readingAndWriting: '710',
    math: '650',
    totalPossible: '800'
  },
  essayScores: {
    reading: '7',
    analysis: '6',
    writing: '7',
    totalPossible: '8'
  },
  crossTestScores: '24',
  subScores: {
    commandOfEvidence: '5',
    wordsInContext: '12',
    expressionOfIdeas: '12',
    standardEnglishConventions: '14',
    heartOfAlgebra: '10',
    problemSolvingAndDataAnalysis: '10',
    passportToAdvancedMath: '13',
    totalPossible: '15'
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  }
}, {
  id: 2,
  status: 'complete',
  title: 'Practice Test 2',
  testDate: '07/01/2019',
  dueDate: '05/05/2019',
  completionDate: '05/07/2019',
  completionTime: '4:21 PM',
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
  }],
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
  },
  totalScore: '1080',
  totalPossible: '1600',
  sectionScores: {
    readingAndWriting: '710',
    math: '650',
    totalPossible: '800'
  },
  essayScores: {
    reading: '7',
    analysis: '6',
    writing: '7',
    totalPossible: '8'
  },
  crossTestScores: '24',
  subScores: {
    commandOfEvidence: '5',
    wordsInContext: '12',
    expressionOfIdeas: '12',
    standardEnglishConventions: '14',
    heartOfAlgebra: '10',
    problemSolvingAndDataAnalysis: '10',
    passportToAdvancedMath: '13',
    totalPossible: '15'
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  }
}, {
  id: 3,
  status: 'complete',
  title: 'Practice Test 3',
  testDate: '11/25/2019',
  dueDate: '05/05/2019',
  completionDate: '',
  completionTime: '',
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
  dueDate: '05/05/2019',
  completionDate: '',
  completionTime: '',
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
  dueDate: '05/05/2019',
  completionDate: '',
  completionTime: '',
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
// CONCATENATED MODULE: ./components/Student/DetailTestList/components/EditTestModal/components/TestVersionSettings/utils/index.js
const versionOptions = [{
  value: 'SAT Practice Test #1',
  label: 'SAT Practice Test #1'
}, {
  value: 'SAT Practice Test #2',
  label: 'SAT Practice Test #2'
}, {
  value: 'SAT Practice Test #3',
  label: 'SAT Practice Test #3'
}, {
  value: 'SAT Practice Test #4',
  label: 'SAT Practice Test #4'
}];
// CONCATENATED MODULE: ./components/Student/DetailTestList/components/EditTestModal/components/TestVersionSettings/index.js
var TestVersionSettings_jsx = external_react_default.a.createElement;





const TestVersionSettings = ({
  version,
  reading,
  writing,
  math,
  essay,
  includeScoreInImprovementMetrics,
  handleTestVersionSettingsChange
}) => TestVersionSettings_jsx(external_react_default.a.Fragment, null, TestVersionSettings_jsx("h2", null, "Test Version"), TestVersionSettings_jsx("div", {
  className: "card card-test-detail"
}, TestVersionSettings_jsx("div", {
  className: "card-content"
}, TestVersionSettings_jsx("div", {
  className: "row"
}, TestVersionSettings_jsx("div", {
  className: "input-field col s12"
}, TestVersionSettings_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(version, versionOptions),
  onChange: handleTestVersionSettingsChange,
  options: versionOptions,
  label: "Version",
  stateKey: "version",
  dropdownKey: "version"
}))), TestVersionSettings_jsx("div", {
  className: "check-holder"
}, TestVersionSettings_jsx("div", {
  className: "row mb-0"
}, TestVersionSettings_jsx("div", {
  className: "col s6"
}, TestVersionSettings_jsx("p", null, TestVersionSettings_jsx("label", null, TestVersionSettings_jsx("input", {
  type: "checkbox",
  name: "reading",
  className: "filled-in",
  checked: reading,
  onChange: handleTestVersionSettingsChange
}), TestVersionSettings_jsx("span", null, "Reading Section"))), TestVersionSettings_jsx("p", null, TestVersionSettings_jsx("label", null, TestVersionSettings_jsx("input", {
  type: "checkbox",
  name: "writing",
  className: "filled-in",
  checked: writing,
  onChange: handleTestVersionSettingsChange
}), TestVersionSettings_jsx("span", null, "Writing Section")))), TestVersionSettings_jsx("div", {
  className: "col s6"
}, TestVersionSettings_jsx("p", null, TestVersionSettings_jsx("label", null, TestVersionSettings_jsx("input", {
  type: "checkbox",
  name: "math",
  className: "filled-in",
  checked: math,
  onChange: handleTestVersionSettingsChange
}), TestVersionSettings_jsx("span", null, "Math Section"))), TestVersionSettings_jsx("p", null, TestVersionSettings_jsx("label", null, TestVersionSettings_jsx("input", {
  type: "checkbox",
  name: "essay",
  className: "filled-in",
  checked: essay,
  onChange: handleTestVersionSettingsChange
}), TestVersionSettings_jsx("span", null, "Essay")))))), TestVersionSettings_jsx("div", {
  className: "row mb-0"
}, TestVersionSettings_jsx("div", {
  className: "input-field col s12"
}, TestVersionSettings_jsx("p", null, TestVersionSettings_jsx("label", null, TestVersionSettings_jsx("input", {
  type: "checkbox",
  name: "includeScoreInImprovementMetrics",
  className: "filled-in",
  checked: includeScoreInImprovementMetrics,
  onChange: handleTestVersionSettingsChange
}), TestVersionSettings_jsx("span", null, "Include Score in Improvement Metrics"))))))));

/* harmony default export */ var components_TestVersionSettings = (TestVersionSettings);
// CONCATENATED MODULE: ./components/Student/DetailTestList/components/EditTestModal/components/Settings/index.js
var Settings_jsx = external_react_default.a.createElement;





const Settings = ({
  testDate,
  dueDate,
  handleDatePickerChange,
  allowStudentToEnterAnswers,
  timed,
  handleSettingsChange
}) => Settings_jsx(external_react_default.a.Fragment, null, Settings_jsx("h2", null, "Settings"), Settings_jsx("div", {
  className: "card card-test-detail"
}, Settings_jsx("div", {
  className: "card-content"
}, Settings_jsx("div", {
  className: "datepicker-field input-field"
}, Settings_jsx("i", {
  className: "icon-calendar"
}), Settings_jsx(external_react_datepicker_default.a, {
  selected: testDate,
  withPortal: true,
  dateFormat: "MM/dd/yy",
  id: "testDate",
  name: "testDate",
  onChange: event => handleDatePickerChange('testDate', event)
}), Settings_jsx("label", {
  className: testDate ? 'label active' : 'label',
  htmlFor: "date_Test"
}, "Test Date")), Settings_jsx("div", {
  className: "datepicker-field input-field"
}, Settings_jsx("i", {
  className: "icon-calendar"
}), Settings_jsx(external_react_datepicker_default.a, {
  selected: dueDate,
  withPortal: true,
  dateFormat: "MM/dd/yy",
  id: "dueDate",
  name: "dueDate",
  onChange: event => handleDatePickerChange('dueDate', event)
}), Settings_jsx("label", {
  className: dueDate ? 'label active' : 'label',
  htmlFor: "date_Test"
}, "Due Date (optional)")), Settings_jsx("div", {
  className: "input-field"
}, Settings_jsx("p", null, Settings_jsx("label", null, Settings_jsx("input", {
  type: "checkbox",
  name: "allowStudentToEnterAnswers",
  className: "filled-in",
  checked: allowStudentToEnterAnswers,
  onChange: handleSettingsChange
}), Settings_jsx("span", null, "Allow Student to Enter Answers")))), Settings_jsx("div", {
  className: "input-field"
}, Settings_jsx("p", null, Settings_jsx("label", null, Settings_jsx("input", {
  type: "checkbox",
  name: "timed",
  className: "filled-in",
  checked: timed,
  onChange: handleSettingsChange
}), Settings_jsx("span", null, "Timed")))))));

/* harmony default export */ var components_Settings = (Settings);
// CONCATENATED MODULE: ./components/Student/DetailTestList/components/EditTestModal/index.js

var EditTestModal_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-did-update-set-state */

/* eslint-disable react/no-did-mount-set-state */







class EditTestModal_EditTestModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "handleTestVersionSettingsChange", event => {
      const {
        testVersion: {
          sections
        }
      } = this.state;
      let testVersion;

      if (event.target) {
        const {
          target: {
            name: setting
          }
        } = event;

        if (sections[setting] !== undefined) {
          testVersion = external_immutability_helper_default()(this.state.testVersion, {
            sections: {
              [setting]: {
                $set: !sections[setting]
              }
            }
          });
        } else {
          testVersion = external_immutability_helper_default()(this.state.testVersion, {
            [setting]: {
              $set: !this.state.testVersion[setting]
            }
          });
        }
      } else {
        testVersion = external_immutability_helper_default()(this.state.testVersion, {
          version: {
            $set: event
          }
        });
      }

      this.setState({
        testVersion
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleSettingsChange", event => {
      const {
        settings: previousSettings
      } = this.state;
      const {
        target: {
          name: setting
        }
      } = event;
      const settings = external_immutability_helper_default()(this.state.settings, {
        [setting]: {
          $set: !previousSettings[setting]
        }
      });
      this.setState({
        settings
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleDatePickerChange", (field, value) => {
      const settings = external_immutability_helper_default()(this.state.settings, {
        [field]: {
          $set: value
        }
      });
      this.setState({
        settings
      });
    });

    Object(defineProperty["a" /* default */])(this, "saveTestChanges", () => {
      const {
        onSaveTestChanges
      } = this.props;
      const {
        testVersion,
        settings: {
          testDate: unformattedTestDate,
          dueDate: unformattedDueDate,
          allowStudentToEnterAnswers,
          timed
        }
      } = this.state;
      const testDate = external_moment_default()(unformattedTestDate).format('MM/DD/YY');
      const dueDate = external_moment_default()(unformattedDueDate).format('MM/DD/YY');
      onSaveTestChanges(testVersion, {
        testDate,
        dueDate,
        allowStudentToEnterAnswers,
        timed
      });
    });

    this.state = {
      testVersion: {
        version: '',
        sections: {
          reading: false,
          writing: false,
          math: false,
          essay: false
        },
        includeScoreInImprovementMetrics: false
      },
      settings: {
        testDate: '',
        dueDate: '',
        allowStudentToEnterAnswers: false,
        timed: false
      }
    };
  }

  componentDidMount() {
    const {
      test: {
        testDate: unformattedTestDate,
        dueDate: unformattedDueDate
      }
    } = this.props;
    const testDate = new Date(unformattedTestDate);
    const dueDate = unformattedDueDate ? new Date(unformattedDueDate) : '';
    const settings = external_immutability_helper_default()(this.state.settings, {
      testDate: {
        $set: testDate
      },
      dueDate: {
        $set: dueDate
      }
    });
    this.setState({
      settings
    });
  }

  componentDidUpdate(prevProps) {
    const {
      test: {
        testDate: unformattedTestDate,
        dueDate: unformattedDueDate
      }
    } = this.props;
    const testDate = new Date(unformattedTestDate);
    const dueDate = unformattedDueDate ? new Date(unformattedDueDate) : '';

    if (prevProps.test.id !== this.props.test.id) {
      const settings = external_immutability_helper_default()(this.state.settings, {
        testDate: {
          $set: testDate
        },
        dueDate: {
          $set: dueDate
        }
      });
      this.setState({
        settings
      });
    }
  }

  render() {
    const {
      test,
      user,
      onDeleteTest
    } = this.props;
    const {
      title,
      version: testVersion,
      completionDate,
      completionTime
    } = test;
    const {
      studentInformation: {
        firstName,
        lastName
      }
    } = user;
    const {
      testVersion: {
        sections: {
          reading,
          writing,
          math,
          essay
        },
        version,
        includeScoreInImprovementMetrics
      },
      settings: {
        testDate,
        dueDate,
        allowStudentToEnterAnswers,
        timed
      }
    } = this.state;
    return EditTestModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, EditTestModal_jsx("div", {
      className: "main-holder grey lighten-5 modal",
      style: {
        zIndex: '1003',
        display: 'block',
        position: 'absolute',
        top: '0',
        width: '100%'
      }
    }, EditTestModal_jsx("div", {
      className: "header-row card-panel light-blue lighten-1 white-text"
    }, EditTestModal_jsx("div", {
      className: "card-panel-row row"
    }, EditTestModal_jsx("div", {
      className: "icon-col col s1"
    }, EditTestModal_jsx("i", {
      className: "icon-letter-a"
    })), EditTestModal_jsx("div", {
      className: "col s9"
    }, EditTestModal_jsx("div", {
      className: "card-panel-text center-align"
    }, EditTestModal_jsx("div", {
      className: "text-xlarge"
    }, title), EditTestModal_jsx("div", {
      className: "text-small"
    }, "Version: SAT Practice Test #", testVersion))), EditTestModal_jsx("div", {
      className: "col s1 right-align"
    }, EditTestModal_jsx("div", {
      className: "row icons-row"
    }, "\xA0"))), EditTestModal_jsx("div", {
      className: "header-row-block card-panel-row row"
    }, EditTestModal_jsx("div", {
      className: "col s3"
    }, "\xA0"), EditTestModal_jsx("div", {
      className: "col s9 right-align"
    }, EditTestModal_jsx("div", null, EditTestModal_jsx("span", {
      className: "name"
    }, firstName, " ", lastName))))), EditTestModal_jsx("div", {
      className: "nav-header white"
    }, EditTestModal_jsx("div", {
      className: "nav-additional"
    }, EditTestModal_jsx("ul", {
      className: "menu-additional"
    }, EditTestModal_jsx("li", {
      className: "col s3"
    }, EditTestModal_jsx("a", {
      className: "active",
      href: "#"
    }, "Scores")), EditTestModal_jsx("li", {
      className: "col s3"
    }, EditTestModal_jsx("a", {
      href: "#"
    }, "Answer Sheet")), EditTestModal_jsx("li", {
      className: "col s3"
    }, EditTestModal_jsx("a", {
      href: "#"
    }, "Strengths & Weaknesses")), EditTestModal_jsx("li", {
      className: "col s3"
    }, EditTestModal_jsx("a", {
      href: "#"
    }, "Test Version")), EditTestModal_jsx("li", {
      className: "menu-special col s3"
    }, EditTestModal_jsx("a", {
      href: "#"
    }, "Download Score Report ", EditTestModal_jsx("i", {
      className: "icon-download-file"
    })))))), EditTestModal_jsx("div", {
      className: "content-section"
    }, EditTestModal_jsx("div", {
      className: "content-section-holder"
    }, EditTestModal_jsx("div", {
      className: "container-xsmall"
    }, EditTestModal_jsx("div", {
      className: "row d-flex-content card-width-322"
    }, EditTestModal_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, EditTestModal_jsx(components_TestVersionSettings, {
      version: version,
      reading: reading,
      writing: writing,
      math: math,
      essay: essay,
      includeScoreInImprovementMetrics: includeScoreInImprovementMetrics,
      handleTestVersionSettingsChange: this.handleTestVersionSettingsChange
    }), EditTestModal_jsx(components_Settings, {
      timed: timed,
      testDate: testDate,
      dueDate: dueDate,
      handleSettingsChange: this.handleSettingsChange,
      handleDatePickerChange: this.handleDatePickerChange,
      allowStudentToEnterAnswers: allowStudentToEnterAnswers
    })), EditTestModal_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, EditTestModal_jsx("h2", null, "Status"), EditTestModal_jsx("div", {
      className: "card card-test-detail"
    }, EditTestModal_jsx("div", {
      className: "card-content"
    }, EditTestModal_jsx("div", {
      className: "meta-info"
    }, completionDate.length ? EditTestModal_jsx("p", null, "Completed : ", EditTestModal_jsx("time", {
      dateTime: "2018-12-29"
    }, completionDate, " at ", completionTime), completionDate.length && test.dueDate < completionDate ? EditTestModal_jsx("span", {
      className: "badge white-text badge-rounded-sm",
      style: {
        backgroundColor: '#db1d41'
      }
    }, EditTestModal_jsx("b", {
      className: "badge-text"
    }, "late")) : null) : null, EditTestModal_jsx("p", null, "Answers Entered by: ", firstName, " ", lastName, " (student)")))))), EditTestModal_jsx("div", {
      className: "btn-holder"
    }, EditTestModal_jsx("a", {
      href: "#",
      className: "btn",
      onClick: this.saveTestChanges
    }, "Save"), EditTestModal_jsx("a", {
      href: "#",
      className: "waves-effect waves-teal btn-flat pink-text text-darken-1",
      onClick: onDeleteTest
    }, "Delete")))))));
  }

}

/* harmony default export */ var components_EditTestModal = (EditTestModal_EditTestModal);
// CONCATENATED MODULE: ./components/Student/DetailTestList/index.js

var DetailTestList_jsx = external_react_default.a.createElement;

/* eslint-disable no-console */






class DetailTestList_DetailTestList extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleEditTestModal", (activeTest = null) => this.setState(({
      editTestModalOpen
    }) => ({
      editTestModalOpen: !editTestModalOpen,
      activeTest
    }), this.onCloseDropdown));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false,
      dropdownIndex: null
    }));

    Object(defineProperty["a" /* default */])(this, "onCreateTest", event => {
      event.preventDefault();
      console.warn('Pending implementation of create test UI and functionality');
    });

    Object(defineProperty["a" /* default */])(this, "onEnterAnswers", () => console.warn('Pending implementation of enter answers UI and functionality'));

    Object(defineProperty["a" /* default */])(this, "onEditTest", () => console.warn('Pending implementation edit test UI and functionality'));

    Object(defineProperty["a" /* default */])(this, "onDownloadReport", () => console.warn('Pending implementation of download report ui and functionality'));

    Object(defineProperty["a" /* default */])(this, "onDeleteTest", () => this.setState({
      editTestModalOpen: false
    }, () => console.warn('Pending implementation of delete test UI and functionality')));

    Object(defineProperty["a" /* default */])(this, "onSaveTestChanges", (testVersion, settings) => {
      this.onToggleEditTestModal();
      console.warn('Pending save test changes functionality', testVersion, settings);
    });

    Object(defineProperty["a" /* default */])(this, "openTestScores", index => {
      const {
        tests
      } = this.state;
      const newTestArray = tests.filter(test => test.status === 'complete');
      this.setState({
        selectedTest: newTestArray[index.index]
      }, console.log("clicked", index[0], newTestArray, newTestArray[{
        index
      }]));
    });

    Object(defineProperty["a" /* default */])(this, "mapCompletedTests", () => {
      const {
        tests
      } = this.state;
      return tests.filter(test => test.status === 'complete').map((test, index) => DetailTestList_jsx(components_TestCard, {
        test: test,
        key: `completed-${test.id}`,
        index: index,
        onEditTest: () => this.onToggleEditTestModal(test),
        onDeleteTest: this.onDeleteTest,
        onSetDropdown: this.onSetDropdown,
        onEnterAnswers: this.onEnterAnswers,
        onCloseDropdown: this.onCloseDropdown,
        onDownloadReport: this.onDownloadReport,
        dropdownIndex: this.state.dropdownIndex,
        dropdownIsOpen: this.state.dropdownIsOpen,
        openTestScores: this.openTestScores
      }));
    });

    Object(defineProperty["a" /* default */])(this, "mapFutureTests", () => {
      const {
        tests
      } = this.state;
      return tests.filter(test => test.status !== 'complete').map((test, index) => DetailTestList_jsx(components_TestCard, {
        futureTest: true,
        test: test,
        key: `future-${test.id}`,
        onEditTest: () => this.onToggleEditTestModal(test),
        onDeleteTest: this.onDeleteTest,
        onSetDropdown: this.onSetDropdown,
        onEnterAnswers: this.onEnterAnswers,
        onCloseDropdown: this.onCloseDropdown,
        onDownloadReport: this.onDownloadReport,
        dropdownIndex: this.state.dropdownIndex,
        dropdownIsOpen: this.state.dropdownIsOpen,
        openTestScores: this.openTestScores,
        index: tests.filter(filterTest => filterTest.status === 'complete').length + index
      }));
    });

    this.state = {
      tests: sampleTests,
      dropdownIndex: null,
      dropdownIsOpen: false,
      editTestModalOpen: false,
      activeTest: null,
      selectedTest: null
    };
  }

  render() {
    const {
      editTestModalOpen,
      activeTest,
      selectedTest
    } = this.state;
    const {
      user
    } = this.props;
    return DetailTestList_jsx(external_react_default.a.Fragment, null, !selectedTest && (editTestModalOpen ? DetailTestList_jsx(components_EditTestModal, {
      user: user,
      test: activeTest,
      onDeleteTest: this.onDeleteTest,
      onSaveTestChanges: this.onSaveTestChanges
    }) : DetailTestList_jsx("div", {
      className: "content-section"
    }, DetailTestList_jsx("div", {
      className: "section-holder"
    }, DetailTestList_jsx("div", {
      className: "content-container"
    }, DetailTestList_jsx("h2", null, "Completed Tests"), DetailTestList_jsx("div", {
      className: "row d-flex-content card-width-366"
    }, this.mapCompletedTests())), DetailTestList_jsx("div", {
      className: "content-container"
    }, DetailTestList_jsx("h2", null, "Future Tests"), DetailTestList_jsx("div", {
      className: "row d-flex-content card-width-366"
    }, this.mapFutureTests()))), DetailTestList_jsx("a", {
      href: "#",
      onClick: this.onCreateTest,
      className: "waves-effect waves-teal btn add-btn"
    }, DetailTestList_jsx("i", {
      className: "material-icons"
    }, "add"), "New Test"))), selectedTest && DetailTestList_jsx(Student_TestSections, {
      test: selectedTest
    }));
  }

}

/* harmony default export */ var Student_DetailTestList = (DetailTestList_DetailTestList);
// CONCATENATED MODULE: ./components/Student/components/StudentNavBar/index.js
var StudentNavBar_jsx = external_react_default.a.createElement;


const StudentNavBar = ({
  activePage,
  onSetActivePage
}) => StudentNavBar_jsx("nav", {
  className: "nav-additional"
}, StudentNavBar_jsx("ul", {
  className: "menu-additional"
}, StudentNavBar_jsx("li", null, StudentNavBar_jsx("a", {
  className: activePage === 'summary' ? 'active' : '',
  onClick: () => onSetActivePage('summary'),
  href: "#"
}, "Summary")), StudentNavBar_jsx("li", null, StudentNavBar_jsx("a", {
  className: activePage === 'calendar' ? 'active' : '',
  onClick: () => onSetActivePage('calendar'),
  href: "#"
}, "Calendar")), StudentNavBar_jsx("li", null, StudentNavBar_jsx("a", {
  className: activePage === 'lessons' ? 'active' : '',
  onClick: () => onSetActivePage('lessons'),
  href: "#"
}, "Lessons")), StudentNavBar_jsx("li", null, StudentNavBar_jsx("a", {
  className: activePage === 'worksheets' ? 'active' : '',
  onClick: () => onSetActivePage('worksheets'),
  href: "#"
}, "Worksheets")), StudentNavBar_jsx("li", null, StudentNavBar_jsx("a", {
  className: activePage === 'test' ? 'active' : '',
  onClick: () => onSetActivePage('test'),
  href: "#"
}, "Test Sections")), StudentNavBar_jsx("li", null, StudentNavBar_jsx("a", {
  className: activePage === 'scored-tests' ? 'active' : '',
  onClick: () => onSetActivePage('scored-tests'),
  href: "#"
}, "Scored Tests")), StudentNavBar_jsx("li", null, StudentNavBar_jsx("a", {
  className: activePage === 'account' ? 'active' : '',
  onClick: () => onSetActivePage('account'),
  href: "#"
}, "Account"))));

/* harmony default export */ var components_StudentNavBar = (StudentNavBar);
// CONCATENATED MODULE: ./components/Student/ScoredTestListPage/components/ScoredTestCard/index.js

var ScoredTestCard_jsx = external_react_default.a.createElement;


const ScoredTestCard_data = percentage => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: ['#00bbf7', '#eaeaea']
  }]
});

const getCardClass = (disabled, available) => {
  if (disabled) {
    return 'card-test card-disabled card-main card';
  }

  if (!available) {
    return 'card-test card-nonavailable card-main card';
  }

  return 'card-test card-main card';
};

class ScoredTestCard_ScoredTestCard extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false,
      dropdownIndex: null
    }));

    Object(defineProperty["a" /* default */])(this, "onCreateTest", event => {
      event.preventDefault();
      console.warn('Pending implementation of create test UI and functionality');
    });

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
  }

  render() {
    const {
      test,
      dropdownIndex,
      index,
      dropdownIsOpen,
      onEditTest,
      onDownloadReport,
      onResetTest,
      onDeleteTest
    } = this.props;
    const {
      flags = [],
      disabled,
      available,
      testType,
      testDate,
      title,
      version,
      availableDate,
      dueDate,
      completionDate,
      initialScore,
      targetScore,
      currentScore,
      totalGain,
      subjects
    } = test;
    return ScoredTestCard_jsx("div", {
      className: "col s12 m8 l7 xl5"
    }, ScoredTestCard_jsx("div", {
      className: "card-main-col"
    }, ScoredTestCard_jsx("div", {
      className: getCardClass(disabled, available)
    }, ScoredTestCard_jsx("div", {
      className: "card-content"
    }, ScoredTestCard_jsx("div", {
      className: "card-title-row row"
    }, ScoredTestCard_jsx("div", {
      className: "col s9"
    }, ScoredTestCard_jsx("div", {
      className: "card-title-block"
    }, ScoredTestCard_jsx("h4", {
      className: "h2"
    }, ScoredTestCard_jsx("b", null, testType === 'real' ? 'Real SAT' : title), testType === 'real' ? ["- ", title] : null), ScoredTestCard_jsx("time", {
      dateTime: "2018-03-05",
      className: "title-meta"
    }, testType === 'real' ? testDate : ["Version ", version]))), ScoredTestCard_jsx("div", {
      className: "col s3"
    }, ScoredTestCard_jsx("div", {
      className: "row icons-row"
    }, flags.length ? ScoredTestCard_jsx("span", {
      className: "badge-rounded-xs badge red darken-2 white-text"
    }, ScoredTestCard_jsx("b", {
      className: "badge-text"
    }, flags.length), ScoredTestCard_jsx("i", {
      className: "icon-flag"
    })) : null, ScoredTestCard_jsx("div", {
      className: "dropdown-block col"
    }, ScoredTestCard_jsx("a", {
      href: "#",
      "data-target": "dropdown01",
      className: "dropdown-trigger btn",
      onClick: this.handleDropdownClick
    }, ScoredTestCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? ScoredTestCard_jsx("ul", {
      id: "dropdown01",
      className: "dropdown-content",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, ScoredTestCard_jsx("li", null, ScoredTestCard_jsx("a", {
      href: "#",
      onClick: onEditTest
    }, "View/Edit")), ScoredTestCard_jsx("li", null, ScoredTestCard_jsx("a", {
      href: "#",
      onClick: onDownloadReport
    }, "Download Score Report")), ScoredTestCard_jsx("li", null, ScoredTestCard_jsx("a", {
      href: "#",
      className: "red-text text-darken-3",
      onClick: onResetTest
    }, "Reset")), ScoredTestCard_jsx("li", null, ScoredTestCard_jsx("a", {
      href: "#",
      className: "red-text text-darken-3",
      onClick: onDeleteTest
    }, "Delete"))) : null)))), ScoredTestCard_jsx("div", {
      className: "card-test-row row d-flex mb-0"
    }, ScoredTestCard_jsx("div", {
      className: "col s6"
    }, ScoredTestCard_jsx("div", {
      className: "card-description"
    }, testType !== 'real' ? [ScoredTestCard_jsx("dl", {
      className: "dl-horizontal",
      key: "0"
    }, ScoredTestCard_jsx("dt", null, "Available:"), ScoredTestCard_jsx("dd", null, ScoredTestCard_jsx("time", {
      dateTime: "2018-12-15"
    }, availableDate))), ScoredTestCard_jsx("dl", {
      className: "dl-horizontal",
      key: "1"
    }, ScoredTestCard_jsx("dt", null, "Due:"), ScoredTestCard_jsx("dd", null, ScoredTestCard_jsx("time", {
      dateTime: "2018-12-15"
    }, dueDate))), completionDate.length ? ScoredTestCard_jsx("dl", {
      className: "dl-horizontal",
      key: "2"
    }, ScoredTestCard_jsx("dt", null, "Complete:"), ScoredTestCard_jsx("dd", null, ScoredTestCard_jsx("time", {
      dateTime: "2018-12-15"
    }, completionDate))) : null] : null), ScoredTestCard_jsx("div", {
      className: currentScore ? 'chart-container chart-container-160' : 'chart-container chart-container-160 chart-value-zero start-anim'
    }, ScoredTestCard_jsx("div", {
      className: "chart-holder"
    }, ScoredTestCard_jsx("span", {
      className: "svg-curved-bar",
      "data-values": "{\"from\": 1100, \"to\": 1460, \"current\": 1210}",
      "data-duration": "1"
    }, ScoredTestCard_jsx(external_react_chartjs_2_["Doughnut"], {
      data: () => ScoredTestCard_data(initialScore && !disabled && available && currentScore ? Number(initialScore / targetScore) * 100 : 0),
      options: {
        circumference: 1 * Math.PI,
        rotation: 1 * Math.PI,
        cutoutPercentage: 60,
        tooltips: false
      }
    }), ScoredTestCard_jsx("span", {
      className: "js-diff-holder"
    }, ScoredTestCard_jsx("span", {
      className: "js-diff"
    }, ScoredTestCard_jsx("span", {
      className: "txt",
      style: {
        opacity: '1',
        bottom: '65px',
        color: 'black',
        fontWeight: '600',
        fontSize: '12px'
      }
    }, "+", totalGain)))), ScoredTestCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#00bbf7'
      }
    }, ScoredTestCard_jsx("span", {
      "data-count-up": true,
      "data-start-val": "1100",
      "data-end-val": "1210",
      "data-duration": "1"
    }, currentScore))), ScoredTestCard_jsx("div", {
      className: "chart-row"
    }, ScoredTestCard_jsx("div", {
      className: "chart-col chart-start"
    }, ScoredTestCard_jsx("span", {
      className: "amount"
    }, initialScore), ScoredTestCard_jsx("br", null), ScoredTestCard_jsx("span", {
      className: "amount-text"
    }, "initial")), ScoredTestCard_jsx("div", {
      className: "chart-col chart-end"
    }, ScoredTestCard_jsx("span", {
      className: "amount"
    }, targetScore), ScoredTestCard_jsx("br", null), ScoredTestCard_jsx("span", {
      className: "amount-text"
    }, "target"))))), ScoredTestCard_jsx("div", {
      className: "col s6 right-align"
    }, ScoredTestCard_jsx("div", {
      className: "charts-row row mb-0"
    }, ScoredTestCard_jsx("div", {
      className: "col s6"
    }, ScoredTestCard_jsx("div", {
      className: "chart-block chart-block-test-sm"
    }, ScoredTestCard_jsx("span", {
      className: "value-max"
    }, subjects[0].targetScore), ScoredTestCard_jsx("div", {
      className: "js-donut-chart",
      "data-stroke-width": "11",
      "data-source": "./inc/score-data-test-reading.json"
    }), ScoredTestCard_jsx("div", {
      className: "chart-text"
    }, ScoredTestCard_jsx("span", {
      className: "title"
    }, "Reading"), ScoredTestCard_jsx("span", {
      className: "value"
    }, subjects[0].currentScore), ScoredTestCard_jsx("span", {
      className: "description"
    }, "+", subjects[0].totalGain)))), ScoredTestCard_jsx("div", {
      className: "col s6"
    }, ScoredTestCard_jsx("div", {
      className: "chart-block chart-block-test-sm"
    }, ScoredTestCard_jsx("span", {
      className: "value-max"
    }, subjects[1].targetScore), ScoredTestCard_jsx("div", {
      className: "js-donut-chart",
      "data-stroke-width": "11",
      "data-source": "./inc/score-data-test-writing.json"
    }), ScoredTestCard_jsx("div", {
      className: "chart-text"
    }, ScoredTestCard_jsx("span", {
      className: "title"
    }, "Writing"), ScoredTestCard_jsx("span", {
      className: "value"
    }, subjects[1].currentScore), ScoredTestCard_jsx("span", {
      className: "description"
    }, "+", subjects[1].totalGain))))), ScoredTestCard_jsx("div", {
      className: !subjects[2].currentScore ? 'chart-block chart-block-test' : 'chart-block chart-block-test chart-block-zero'
    }, ScoredTestCard_jsx("span", {
      className: "value-max"
    }, subjects[2].currentScore), ScoredTestCard_jsx("div", {
      className: "js-donut-chart",
      "data-stroke-width": "15",
      "data-source": "./inc/score-data-test-math.json"
    }), ScoredTestCard_jsx("div", {
      className: "chart-text"
    }, ScoredTestCard_jsx("span", {
      className: "title"
    }, "Math"), ScoredTestCard_jsx("span", {
      className: "value"
    }, subjects[2].currentScore), subjects[2].totalGain ? ScoredTestCard_jsx("span", {
      className: "description"
    }, "+", subjects[2].totalGain) : null))))))));
  }

}

/* harmony default export */ var components_ScoredTestCard = (ScoredTestCard_ScoredTestCard);
// CONCATENATED MODULE: ./components/Student/utils/index.js
const sortByOptions = [{
  label: 'Available On Date',
  value: 'availableDate'
}, {
  label: 'Due Date',
  value: 'dueDate'
}, {
  label: 'Completion Date',
  value: 'completionDate'
}, {
  label: 'Flags',
  value: 'flags'
}];
const availableDateSort = ({
  availableDate: availableDateA
}, {
  availableDate: availableDateB
}) => {
  if (availableDateA > availableDateB) {
    return -1;
  }

  return 0;
};
const dueDateSort = ({
  dueDate: dueDateA
}, {
  dueDate: dueDateB
}) => {
  if (dueDateA > dueDateB) {
    return -1;
  }

  return 0;
};
const completionDateSort = ({
  completionDate: completionDateA
}, {
  completionDate: completionDateB
}) => {
  if (completionDateA > completionDateB) {
    return -1;
  }

  return 0;
};
const flagsSort = ({
  flags: flagsA
}, {
  flags: flagsB
}) => {
  if (flagsA > flagsB) {
    return -1;
  }

  return 0;
};
/* harmony default export */ var utils = (sortByOptions);
// CONCATENATED MODULE: ./components/Student/ScoredTestListPage/components/FilterSection/index.js

var ScoredTestListPage_components_FilterSection_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */





class ScoredTestListPage_components_FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      testVersionFilter: ''
    }, this.props.onClearFilters));

    Object(defineProperty["a" /* default */])(this, "handleSearchChange", ({
      target
    }) => this.setState({
      testVersionFilter: target.value
    }));

    Object(defineProperty["a" /* default */])(this, "submitSearchFilter", () => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;
      const {
        testVersionFilter
      } = this.state;

      if (testVersionFilter === '') {
        onUnsetFilteredState();
      }

      const transformedTitle = testVersionFilter.replace(/\s/g, "").toLowerCase();
      onSetFilteredState(transformedTitle);
    });

    this.state = {
      open: false,
      testVersionFilter: ''
    };
  }

  render() {
    const {
      open,
      testVersionFilter
    } = this.state;
    const {
      handleFilterClick,
      sort,
      onSetSort,
      flagFilter,
      availableDateFilters,
      dueDateFilters
    } = this.props;
    return ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "filter-form-holder"
    }, ScoredTestListPage_components_FilterSection_jsx("ul", {
      className: "collapsible expandable",
      style: {
        minHeight: '0'
      }
    }, ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, ScoredTestListPage_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "future",
      name: "future",
      checked: availableDateFilters.indexOf('future') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), ScoredTestListPage_components_FilterSection_jsx("label", {
      htmlFor: "future"
    }, "Future")), ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "available",
      name: "available",
      checked: availableDateFilters.indexOf('available') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), ScoredTestListPage_components_FilterSection_jsx("label", {
      htmlFor: "available"
    }, "Available")), ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "complete",
      name: "complete",
      checked: availableDateFilters.indexOf('complete') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), ScoredTestListPage_components_FilterSection_jsx("label", {
      htmlFor: "complete"
    }, "Complete"))), ScoredTestListPage_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "hasReviewFlags",
      name: "hasReviewFlags",
      checked: flagFilter,
      onChange: ({
        target
      }) => handleFilterClick('hasFlags', target.name)
    }), ScoredTestListPage_components_FilterSection_jsx("label", {
      htmlFor: "hasReviewFlags"
    }, "Has Review Flags"))), ScoredTestListPage_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueToday",
      name: "dueToday",
      checked: dueDateFilters.indexOf('dueToday') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), ScoredTestListPage_components_FilterSection_jsx("label", {
      htmlFor: "dueToday"
    }, "Due Today")), ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueNextSession",
      name: "dueNextSession",
      checked: dueDateFilters.indexOf('dueNextSession') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), ScoredTestListPage_components_FilterSection_jsx("label", {
      htmlFor: "dueNextSession"
    }, "Due By Next Session")), ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueThisWeek",
      name: "dueThisWeek",
      checked: dueDateFilters.indexOf('dueThisWeek') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), ScoredTestListPage_components_FilterSection_jsx("label", {
      htmlFor: "dueThisWeek"
    }, "Due this Week")), ScoredTestListPage_components_FilterSection_jsx("li", null, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "overdue",
      name: "overdue",
      checked: dueDateFilters.indexOf('overdue') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), ScoredTestListPage_components_FilterSection_jsx("label", {
      htmlFor: "overdue"
    }, "Overdue")))), ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "col s12 m4"
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "search-field input-field"
    }, ScoredTestListPage_components_FilterSection_jsx("input", {
      type: "search",
      id: "test_version_search",
      className: "input-control validate",
      value: testVersionFilter,
      onChange: this.handleSearchChange
    }), ScoredTestListPage_components_FilterSection_jsx("button", {
      type: "submit",
      onClick: this.submitSearchFilter,
      className: "search-button"
    }, ScoredTestListPage_components_FilterSection_jsx("i", {
      className: "icon-search"
    })), ScoredTestListPage_components_FilterSection_jsx("label", {
      className: "label",
      htmlFor: "test_version_search"
    }, "Test Version"))))), ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "col s12 l4"
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "row mb-0"
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "col s12 xl7"
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "input-field",
      style: {
        marginBottom: '10px',
        marginTop: '0'
      }
    }, ScoredTestListPage_components_FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, utils),
      onChange: onSetSort,
      options: utils,
      label: "Sort By",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "col s12 l4 hide-on-med-and-down show-on-large"
    }, "\xA0"), ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "col s12 l4"
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "option-filters"
    }, ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "option-item clear"
    }, ScoredTestListPage_components_FilterSection_jsx("a", {
      href: "#",
      onClick: this.onClearFilters
    }, "Clear Filters")), ScoredTestListPage_components_FilterSection_jsx("div", {
      className: "option-item"
    }, ScoredTestListPage_components_FilterSection_jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, ScoredTestListPage_components_FilterSection_jsx("span", {
      className: "open-text"
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ var ScoredTestListPage_components_FilterSection = (ScoredTestListPage_components_FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Student/ScoredTestListPage/index.js

var ScoredTestListPage_jsx = external_react_default.a.createElement;







class ScoredTestListPage_ScoredTestListPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      sort: '',
      testVersionFilter: '',
      flagFilter: false,
      availableDateFilters: [],
      dueDateFilters: []
    }));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false,
      dropdownIndex: null
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", value => this.setState({
      testVersionFilter: value
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", () => this.setState({
      testVersionFilter: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onEditTest", () => console.warn('Pending implementation edit test UI and functionality'));

    Object(defineProperty["a" /* default */])(this, "onResetTest", () => console.warn('Pending implementation of reset UI and functionality'));

    Object(defineProperty["a" /* default */])(this, "onDeleteTest", () => console.warn('Pending implementation of delete test UI and functionality'));

    Object(defineProperty["a" /* default */])(this, "onDownloadReport", () => console.warn('Pending implementation of download report ui and functionality'));

    Object(defineProperty["a" /* default */])(this, "onSortTests", testSections => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'flags':
          return testSections.sort(flagsSort);

        case 'dueDate':
          return testSections.sort(dueDateSort);

        case 'availableDate':
          return testSections.sort(availableDateSort);

        case 'completionDate':
          return testSections.sort(completionDateSort);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByTestVersion", () => {
      const {
        tests,
        testVersionFilter
      } = this.state;
      return tests.reduce((finalArr, currentTest) => {
        const {
          version
        } = currentTest;
        const testString = version.replace(/\s/g, "").toLowerCase();

        if (testString.indexOf(testVersionFilter) !== -1 && finalArr.indexOf(currentTest) === -1) {
          finalArr.push(currentTest);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByDate", (incomingTests, dateType) => {
      const {
        dueDateFilters,
        availableDateFilters
      } = this.state;
      let dateFilters;
      let tests = incomingTests;
      const currentDate = external_moment_default()().format('MM/DD/YY');
      const currentDateIndex = new Date().getDay();
      const endOfWeekIndex = 6 - currentDateIndex;
      const endOfWeekDate = external_moment_default()().add(endOfWeekIndex, 'days').format('MM/DD/YY');

      if (dateType === 'dueDate') {
        dateFilters = dueDateFilters;

        if (dateFilters.indexOf('dueToday') !== -1) {
          tests = tests.filter(test => test.dueDate === currentDate);
        }

        if (dateFilters.indexOf('dueNextSession') !== -1) {
          console.warn('Pending decision on how next session date is calculated');
        }

        if (dateFilters.indexOf('overdue') !== -1) {
          tests = tests.filter(test => test.dueDate < currentDate);
        }

        if (dateFilters.indexOf('dueThisWeek') !== -1) {
          tests = tests.filter(test => test.dueDate >= currentDate && test.dueDate <= endOfWeekDate);
        }
      } else {
        dateFilters = availableDateFilters;

        if (dateFilters.indexOf('future') !== -1) {
          tests = tests.filter(test => test.availableDate > currentDate);
        }

        if (dateFilters.indexOf('available') !== -1) {
          tests = tests.filter(test => test.availableDate <= currentDate);
        }

        if (dateFilters.indexOf('complete') !== -1) {
          tests = tests.filter(test => test.completionDate.length);
        }
      }

      return tests;
    });

    Object(defineProperty["a" /* default */])(this, "onFilterTests", () => {
      const {
        dueDateFilters,
        availableDateFilters,
        flagFilter,
        tests: allTests
      } = this.state;
      let tests = allTests;

      if (dueDateFilters.length) {
        tests = this.onFilterByDate(tests, 'dueDate');
      }

      if (availableDateFilters.length) {
        tests = this.onFilterByDate(tests, 'availableDate');
      }

      if (flagFilter) {
        tests = tests.filter(testSection => testSection.flags.length);
      }

      return tests;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableTests", () => {
      const {
        dueDateFilters,
        availableDateFilters,
        flagFilter,
        sort,
        testVersionFilter,
        tests
      } = this.state;
      let mappableTests = tests;

      if (testVersionFilter.length) {
        mappableTests = this.onFilterByTestVersion();
      }

      if (dueDateFilters.length || availableDateFilters.length || flagFilter) {
        mappableTests = this.onFilterTests();
      }

      if (sort) {
        return this.onSortTests(mappableTests);
      }

      return mappableTests;
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        availableDateFilters: currentAvailableDateFilters,
        dueDateFilters: currentDueDateFilters,
        flagFilter
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

      switch (filterType) {
        case 'dueDate':
          modifiedFilterCurrentState = currentDueDateFilters;
          modifiedFilterName = 'dueDateFilters';
          break;

        case 'availableDate':
          modifiedFilterCurrentState = currentAvailableDateFilters;
          modifiedFilterName = 'availableDateFilters';
          break;

        case 'hasFlags':
          return this.setState({
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
        const filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = external_immutability_helper_default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [modifiedFilterName]: modifiedFilterUpdatedState
      });
    });

    Object(defineProperty["a" /* default */])(this, "mapScoredTests", () => this.getMappableTests().map((test, index) => ScoredTestListPage_jsx(components_ScoredTestCard, {
      test: test,
      index: index,
      key: test.id,
      onEditTest: this.onEditTest,
      onResetTest: this.onResetTest,
      onDeleteTest: this.onDeleteTest,
      onSetDropdown: this.onSetDropdown,
      onCloseDropdown: this.onCloseDropdown,
      onDownloadReport: this.onDownloadReport,
      dropdownIndex: this.state.dropdownIndex,
      dropdownIsOpen: this.state.dropdownIsOpen
    })));

    this.state = {
      sort: '',
      testVersionFilter: '',
      availableDateFilters: [],
      dueDateFilters: [],
      flagFilter: false,
      dropdownIndex: null,
      dropdownIsOpen: false,
      tests: this.props.user.scoredTests
    };
  }

  render() {
    return ScoredTestListPage_jsx(external_react_default.a.Fragment, null, ScoredTestListPage_jsx(ScoredTestListPage_components_FilterSection, {
      sort: this.state.sort,
      onSetSort: this.onSetSort,
      flagFilter: this.state.flagFilter,
      onClearFilters: this.onClearFilters,
      handleFilterClick: this.handleFilterClick,
      dueDateFilters: this.state.dueDateFilters,
      availableDateFilters: this.state.availableDateFilters,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState
    }), ScoredTestListPage_jsx("div", {
      className: "content-section"
    }, ScoredTestListPage_jsx("div", {
      className: "row d-flex-content card-width-366"
    }, this.mapScoredTests())));
  }

}

/* harmony default export */ var Student_ScoredTestListPage = (ScoredTestListPage_ScoredTestListPage);
// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__("uzjx");

// EXTERNAL MODULE: ./components/Dashboard/components/FilterSection/index.js
var Dashboard_components_FilterSection = __webpack_require__("Guna");

// EXTERNAL MODULE: ./components/Dashboard/components/CalendarHeader/index.js + 1 modules
var CalendarHeader = __webpack_require__("R5Ku");

// EXTERNAL MODULE: ./components/Dashboard/components/CalendarRow/index.js + 1 modules
var CalendarRow = __webpack_require__("F//q");

// EXTERNAL MODULE: ./components/Dashboard/components/Modals/AssignSessionModal/index.js
var AssignSessionModal = __webpack_require__("/UQ3");

// EXTERNAL MODULE: ./components/Dashboard/components/Modals/AssignTestSectionModal/index.js
var AssignTestSectionModal = __webpack_require__("MV2m");

// EXTERNAL MODULE: ./components/Dashboard/components/Modals/AssignSimulatedSATModal/index.js
var AssignSimulatedSATModal = __webpack_require__("cufv");

// EXTERNAL MODULE: ./components/Dashboard/components/Modals/AssignTargetTestModal/index.js
var AssignTargetTestModal = __webpack_require__("D4DP");

// EXTERNAL MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/index.js + 3 modules
var Modals_AssignLessonModal = __webpack_require__("wH9L");

// EXTERNAL MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/index.js + 4 modules
var AssignWorksheetModal = __webpack_require__("fRFr");

// EXTERNAL MODULE: ./components/Dashboard/utils/dateAndCalendarUtils.js
var dateAndCalendarUtils = __webpack_require__("AZl1");

// CONCATENATED MODULE: ./components/Student/Calendar/index.js

var Calendar_jsx = external_react_default.a.createElement;




















class Calendar_Calendar extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetActiveMonth", activeMonthIndex => {
      // daysInPreviousMonth is used to handle cases where the calendar for the month starts with dates from the preceding month
      // firstDay indicates the day the first day of the month falls on in a zero-based index manner, meaning Sunday is 0, Monday is 1, etc
      const daysInPreviousMonth = Object(dateAndCalendarUtils["h" /* getDaysInPreviousMonth */])(activeMonthIndex);
      const daysInActiveMonth = Object(dateAndCalendarUtils["g" /* getDaysInActiveMonth */])(activeMonthIndex);
      const firstDay = Object(dateAndCalendarUtils["i" /* getFirstDay */])(activeMonthIndex);
      const rows = []; // We increment calDate and change inMonth in the case where dates from the next month appear in row 1 or row 6
      // Since activeMonthIndex is zero-based, currentMonth adds 1 so the cells are accurate as actual calendar dates
      // getNextMonthAsCurrentMonth is used to derive the current month to ensure it matches the format of incoming dates - 01/15/19 vs 1/15/19, otherwise new events wouldn't find the date to be assigned to

      let inMonth = true;
      let calDate = 1;
      let currentMonth = Object(dateAndCalendarUtils["j" /* getNextMonthAsCurrentMonth */])(activeMonthIndex);

      if (firstDay !== 0) {
        currentMonth = currentMonth > 9 ? currentMonth -= 1 : `0${currentMonth - 1}`;
        calDate = daysInPreviousMonth - firstDay + 1;
        inMonth = false;
      } // First for loop handles the 6 calendar rows, second for loop handles the 7 days of the week


      for (let i = 0; i < 6; i++) {
        const rowArr = [];

        for (let j = 0; j < 7; j++) {
          const date = `${currentMonth}/${calDate > 9 ? calDate : `0${calDate}`}/${dateAndCalendarUtils["c" /* currentYear */]}`;
          const dayDate = Object(dateAndCalendarUtils["f" /* getDayDate */])(date);
          const activeDateKey = `row-${i + 1}-column-${j + 1}`; // This if statement handles the easiest calendar month scenario, where the 1st of the month falls on a Sunday

          if (firstDay === 0) {
            const dateCell = {
              date,
              dayDate,
              calDate,
              activeDateKey,
              inMonth,
              sessions: [],
              lessons: [],
              worksheets: [],
              testSections: [],
              simulatedSat: []
            }; // This if statement handles the case where the date spills over into the next month

            if (calDate === daysInActiveMonth) {
              calDate = 1;
              currentMonth = activeMonthIndex > 9 ? activeMonthIndex + 2 : `0${activeMonthIndex + 2}`;
              inMonth = false;
            } else {
              calDate += 1;
            }

            rowArr.push(dateCell);
          } // This else statement handles the more likely scenario, where the first row contains several days from the preceding month
          else {
              const dateCell = {
                date,
                dayDate,
                calDate,
                activeDateKey,
                inMonth,
                sessions: [],
                lessons: [],
                worksheets: [],
                testSections: [],
                simulatedSat: []
              }; // This if statement handles the case where the date spills over into the next month

              if (inMonth === false && calDate === daysInPreviousMonth) {
                calDate = 1;
                currentMonth = Object(dateAndCalendarUtils["j" /* getNextMonthAsCurrentMonth */])(activeMonthIndex);
                inMonth = true;
              } else if (inMonth === true && calDate === daysInActiveMonth) {
                currentMonth = activeMonthIndex > 9 ? activeMonthIndex + 2 : `0${activeMonthIndex + 2}`;
                calDate = 1;
                inMonth = false;
              } else {
                calDate += 1;
              }

              rowArr.push(dateCell);
            }
        }

        rows.push(...rowArr);
      }

      this.setState({
        activeMonth: activeMonthIndex
      });

      if (this.props.rows.length === 0) {
        const {
          onSetCalendarRows
        } = this.props;
        onSetCalendarRows(rows);
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSetActiveDate", incomingDate => {
      this.setState({
        activeDate: incomingDate,
        activeColumn: incomingDate[13]
      });
    });

    Object(defineProperty["a" /* default */])(this, "onAssignSession", session => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === session.date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.sessions.push(session);
      const updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignSessionModal();
    });

    Object(defineProperty["a" /* default */])(this, "onAssignLessons", (lessons, date) => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.lessons.push(...lessons);
      const updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignLessonsModal();
    });

    Object(defineProperty["a" /* default */])(this, "onToggleAssignLessonsModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      const {
        onSetAssignLessonsModalOpen,
        assignLessonsModalOpen
      } = this.props;
      onSetAssignLessonsModalOpen(!assignLessonsModalOpen);
      this.setState({
        modalDate,
        assignDropdownIsOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(this, "onAssignTestSection", testSection => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === testSection.assignDate)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.testSections.push(testSection);
      const updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignTestSectionModal();
    });

    Object(defineProperty["a" /* default */])(this, "onAssignSimulatedSat", simulatedSat => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === simulatedSat.assignDate)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.simulatedSat.push(simulatedSat);
      const updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignSimulatedSatModal();
    });

    Object(defineProperty["a" /* default */])(this, "onAssignTargetTest", targetTestDate => {
      throw `pending decision of what test date assign ui looks like${targetTestDate.toString()}`; // console.warn(, targetTestDate);
    });

    Object(defineProperty["a" /* default */])(this, "onToggleAssignSessionModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignSessionModalOpen
      }) => ({
        assignSessionModalOpen: !assignSessionModalOpen,
        modalDate,
        assignDropdownIsOpen: false
      }));
    });

    Object(defineProperty["a" /* default */])(this, "onToggleAssignTestSectionModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignTestSectionModalOpen
      }) => ({
        assignTestSectionModalOpen: !assignTestSectionModalOpen,
        modalDate,
        assignDropdownIsOpen: false
      }));
    });

    Object(defineProperty["a" /* default */])(this, "onToggleAssignSimulatedSatModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignSimulatedSatModalOpen
      }) => ({
        assignSimulatedSatModalOpen: !assignSimulatedSatModalOpen,
        modalDate,
        assignDropdownIsOpen: false
      }));
    });

    Object(defineProperty["a" /* default */])(this, "onToggleAssignTargetTestModal", (event = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState(({
        assignTargetTestDateModalOpen
      }) => ({
        assignTargetTestDateModalOpen: !assignTargetTestDateModalOpen,
        assignDropdownIsOpen: false
      }));
    });

    Object(defineProperty["a" /* default */])(this, "onToggleAddDropdown", () => this.setState(({
      addDropdownOpen
    }) => ({
      addDropdownOpen: !addDropdownOpen,
      deleteDropdownOpen: false
    })));

    Object(defineProperty["a" /* default */])(this, "onToggleDeleteDropdown", () => this.setState(({
      deleteDropdownOpen
    }) => ({
      deleteDropdownOpen: !deleteDropdownOpen,
      addDropdownOpen: false
    })));

    Object(defineProperty["a" /* default */])(this, "onToggleAssignDropdown", () => this.setState(({
      assignDropdownIsOpen
    }) => ({
      assignDropdownIsOpen: !assignDropdownIsOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onToggleHandleFilteredItemsDropdown", () => this.setState(({
      onToggleHandleFilteredItemsDropdown
    }) => ({
      onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      filters: [],
      eventFilters: []
    }));

    Object(defineProperty["a" /* default */])(this, "onHandleDetailsChange", (name, event) => this.setState({
      [name]: event.target.value
    }));

    Object(defineProperty["a" /* default */])(this, "onDragEnd", result => {
      const {
        rows
      } = this.props;
      const {
        source,
        destination,
        draggableId
      } = result; // The following draggable vars are pulled from the dragged item to identify the event type (lesson, worksheet, etc), date, and index in that date's array of that type of event

      const draggableKeys = draggableId.split("-");
      const draggableType = draggableKeys[0];
      const draggableIndex = draggableKeys[2]; // If the event isn't switching dates, we return out of the function early and do nothing

      if (!destination || source.droppableId === destination.droppableId) {
        return;
      } // The follwing sourceDate and destinationDate vars are used to find the dates being modified and their index in the month of calendar dates


      const sourceDateKey = source.droppableId.split("-")[1];
      const destinationDateKey = destination.droppableId.split("-")[1];
      const sourceDate = rows.filter(row => row.date === sourceDateKey)[0];
      const destinationDate = rows.filter(row => row.date === destinationDateKey)[0];
      const sourceDateIndex = rows.indexOf(sourceDate);
      const destinationDateIndex = rows.indexOf(destinationDate); // Here we target the event being moved, alter its date to that of the destintion, splice it from the source and push it to the destination
      // Finally, we perform two splice operations to replace the old source and destination dates with their updated equivalents

      const movedEvent = sourceDate[draggableType][draggableIndex];
      movedEvent.date = destinationDate.date;
      sourceDate[draggableType].splice(draggableIndex, 1);
      destinationDate[draggableType].push(movedEvent);
      const updatedRows = external_immutability_helper_default()(rows, {
        $splice: [+[sourceDateIndex, 1, sourceDate], [destinationDateIndex, 1, destinationDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filter, eventFilter = false) => {
      // TODO: Only the following filters are active: sessions, lessons, worksheets, test sections, simulated sats, target tests
      // The other filters dont seem to have corresponding data in this page
      const {
        filters: allFilters,
        eventFilters
      } = this.state;
      let filters;
      let filterName;

      if (eventFilter) {
        filters = eventFilters;
        filterName = "eventFilters";
      } else {
        filters = allFilters;
        filterName = "filters";
      }

      let updatedFilters;

      if (filters.indexOf(filter) === -1) {
        updatedFilters = external_immutability_helper_default()(filters, {
          $push: [filter]
        });
      } else {
        const filterIndex = filters.indexOf(filter);
        updatedFilters = external_immutability_helper_default()(filters, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [filterName]: updatedFilters
      });
    });

    Object(defineProperty["a" /* default */])(this, "onToggleAssignWorksheetsModal", (event = null, modalDate = null) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        modalDate,
        assignDropdownIsOpen: false
      });
      const {
        onSetAssignWorksheetModalOpen,
        assignWorkSheetsModalOpen
      } = this.props;
      onSetAssignWorksheetModalOpen(!assignWorkSheetsModalOpen);
    });

    Object(defineProperty["a" /* default */])(this, "onAssignWorksheets", (worksheets, date) => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.worksheets.push(...worksheets);
      const updatedRows = external_immutability_helper_default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignWorksheetsModal();
    });

    Object(defineProperty["a" /* default */])(this, "mapRows", () => {
      const {
        filters,
        eventFilters,
        activeDate,
        activeColumn,
        addDropdownOpen,
        deleteDropdownOpen
      } = this.state;
      const {
        rows
      } = this.props;
      let startIndex = -7;
      let endIndex = 0;
      const rowArray = [];

      for (let i = 0; i < 6; i++) {
        startIndex += 7;
        endIndex += 7;
        rowArray.push(Calendar_jsx(CalendarRow["a" /* default */], {
          key: i,
          rows: rows.slice(startIndex, endIndex),
          filters: filters,
          eventFilters: eventFilters,
          activeDate: activeDate,
          activeColumn: activeColumn,
          addDropdownOpen: addDropdownOpen,
          deleteDropdownOpen: deleteDropdownOpen,
          onSetActiveDate: this.onSetActiveDate,
          onToggleAddDropdown: this.onToggleAddDropdown,
          onToggleDeleteDropdown: this.onToggleDeleteDropdown,
          onToggleAssignLessonsModal: this.onToggleAssignLessonsModal,
          onToggleAssignSessionModal: this.onToggleAssignSessionModal,
          onToggleAssignWorksheetsModal: this.onToggleAssignWorksheetsModal,
          onToggleAssignTestSectionModal: this.onToggleAssignTestSectionModal,
          onToggleAssignSimulatedSatModal: this.onToggleAssignSimulatedSatModal
        }));
      }

      return rowArray;
    });

    this.state = {
      activeMonth: '',
      filters: [],
      eventFilters: [],
      activeDate: null,
      activeColumn: null,
      addDropdownOpen: false,
      deleteDropdownOpen: false,
      assignDropdownIsOpen: false,
      onToggleHandleFilteredItemsDropdown: false,
      assignSessionModalOpen: false,
      assignTestSectionModalOpen: false,
      assignSimulatedSatModalOpen: false,
      assignTargetTestDateModalOpen: false,
      assignLessonsModalOpen: false,
      assignWorksheetsModalOpen: false,
      modalDate: null,
      accountActivated: false,
      activationDropdownOpen: false,
      licenseCode: ''
    };
  } // This is called onMount in CalendarHeader component to set the current month calendar rows, and every time the month changes afterward
  // IMPORTANT: activeMonthIndex is zero-based, meaning January is 0, February is 1, etc.


  render() {
    const {
      assignSessionModalOpen,
      activeMonth,
      assignTestSectionModalOpen,
      assignSimulatedSatModalOpen,
      assignTargetTestDateModalOpen,
      modalDate,
      assignDropdownIsOpen,
      onToggleHandleFilteredItemsDropdown,
      filters,
      eventFilters
    } = this.state;
    const {
      assignLessonsModalOpen,
      assignWorkSheetsModalOpen
    } = this.props;
    return Calendar_jsx(external_react_default.a.Fragment, null, assignLessonsModalOpen ? Calendar_jsx(Modals_AssignLessonModal["a" /* default */], {
      modalDate: modalDate,
      open: assignLessonsModalOpen,
      onClose: this.onToggleAssignLessonsModal,
      onAssignLessons: this.onAssignLessons
    }) : assignWorkSheetsModalOpen ? Calendar_jsx(AssignWorksheetModal["a" /* default */], {
      modalDate: modalDate,
      open: assignWorkSheetsModalOpen,
      onClose: this.onToggleAssignWorksheetsModal,
      onAssignWorksheets: this.onAssignWorksheets
    }) : [Calendar_jsx(AssignSessionModal["a" /* default */], {
      modalDate: modalDate,
      open: assignSessionModalOpen,
      onClose: this.onToggleAssignSessionModal,
      onAssignSession: this.onAssignSession,
      key: "0"
    }), Calendar_jsx(AssignTestSectionModal["a" /* default */], {
      modalDate: modalDate,
      open: assignTestSectionModalOpen,
      onClose: this.onToggleAssignTestSectionModal,
      onAssignTestSection: this.onAssignTestSection,
      key: "1"
    }), Calendar_jsx(AssignSimulatedSATModal["a" /* default */], {
      modalDate: modalDate,
      open: assignSimulatedSatModalOpen,
      onClose: this.onToggleAssignSimulatedSatModal,
      onAssignSimulatedSat: this.onAssignSimulatedSat,
      key: "2"
    }), Calendar_jsx(AssignTargetTestModal["a" /* default */], {
      open: assignTargetTestDateModalOpen,
      onClose: this.onToggleAssignTargetTestModal,
      onAssignTargetTest: this.onAssignTargetTest,
      key: "3"
    }), Calendar_jsx(external_react_sticky_["StickyContainer"], {
      key: "4"
    }, Calendar_jsx(Dashboard_components_FilterSection["a" /* default */], {
      filters: filters,
      eventFilters: eventFilters,
      onClearFilters: this.onClearFilters,
      handleFilterClick: this.handleFilterClick
    }), Calendar_jsx("div", {
      className: "calendar-section view-month"
    }, Calendar_jsx("div", {
      className: "calendar-slider"
    }, Calendar_jsx(CalendarHeader["a" /* default */], {
      activeMonth: Number(activeMonth),
      onSetActiveMonth: this.onSetActiveMonth
    }), Calendar_jsx("div", {
      id: "calendar",
      className: "main-slick-calendar cal-context",
      style: {
        width: "100%"
      }
    }, Calendar_jsx("div", {
      className: "slide"
    }, Calendar_jsx("table", {
      className: "calendar-table cal-month-box"
    }, Calendar_jsx("thead", null, Calendar_jsx("tr", {
      className: "calendar-head-row"
    }, Calendar_jsx("th", null, "Su"), Calendar_jsx("th", null, "M"), Calendar_jsx("th", null, "Tu"), Calendar_jsx("th", null, "W"), Calendar_jsx("th", null, "Th"), Calendar_jsx("th", null, "F"), Calendar_jsx("th", null, "Sa"))), Calendar_jsx("tbody", null, Calendar_jsx(external_react_beautiful_dnd_["DragDropContext"], {
      onDragEnd: this.onDragEnd
    }, this.mapRows()))))), Calendar_jsx("div", {
      className: "add-btn-block"
    }, Calendar_jsx("a", {
      href: "#",
      "data-target": "dropdown_assign",
      onClick: this.onToggleAssignDropdown,
      className: "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, "Assign..."), Calendar_jsx("ul", {
      id: "dropdown_assign",
      className: "dropdown-content",
      style: {
        display: assignDropdownIsOpen ? "block" : "none",
        opacity: assignDropdownIsOpen ? "100" : "0"
      }
    }, Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSessionModal,
      className: "modal-trigger"
    }, "Session")), Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#",
      onClick: this.onToggleAssignLessonsModal,
      className: "modal-trigger"
    }, "Lesson")), Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#",
      onClick: this.onToggleAssignWorksheetsModal,
      className: "modal-trigger"
    }, "Worksheet")), Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#",
      onClick: this.onToggleAssignTestSectionModal,
      className: "modal-trigger"
    }, "Test Section")), Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSimulatedSatModal,
      className: "modal-trigger"
    }, "Simulated SAT")), Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#",
      onClick: this.onToggleAssignTargetTestModal,
      className: "modal-trigger"
    }, "Target Test")), Calendar_jsx("li", {
      className: "divider",
      tabIndex: "-1"
    }), Calendar_jsx("li", {
      className: "dropdown-footer"
    }, Calendar_jsx("a", {
      href: "#",
      className: "modal-trigger"
    }, "Apply Course Template")))), Calendar_jsx("div", {
      className: "add-btn-block btn-block-right"
    }, Calendar_jsx("a", {
      href: "#",
      "data-target": "dropdown_other",
      onClick: this.onToggleHandleFilteredItemsDropdown,
      className: "dropdown-trigger waves-effect waves-teal btn add-btn-circle"
    }, Calendar_jsx("i", {
      className: "icon-dots"
    })), Calendar_jsx("ul", {
      id: "dropdown_other",
      className: "dropdown-content",
      style: {
        display: onToggleHandleFilteredItemsDropdown ? "block" : "none",
        opacity: onToggleHandleFilteredItemsDropdown ? "100" : "0"
      }
    }, Calendar_jsx("li", {
      className: "dropdown-header"
    }, Calendar_jsx("b", null, "With Filtered Items... "), Calendar_jsx("b", {
      className: "small"
    }, "(items currently visible on calendar)")), Calendar_jsx("li", {
      className: "divider"
    }), Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#",
      className: "modal-trigger"
    }, "Save Course as Template")), Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#"
    }, "Reset All")), Calendar_jsx("li", null, Calendar_jsx("a", {
      href: "#"
    }, "Delete All")))))))]);
  }

}

const mapStateToProps = Object(external_reselect_["createStructuredSelector"])({
  assignLessonsModalOpen: makeSelectAssignLessonsModalOpen(),
  assignWorkSheetsModalOpen: makeSelectAssignWorkSheetsModalOpen(),
  rows: makeSelectCalendarRows()
});

function mapDispatchToProps(dispatch) {
  return {
    onSetAssignLessonsModalOpen: value => dispatch(Object(index_actions["d" /* setAssignLessonsModalOpen */])(value)),
    onSetAssignWorksheetModalOpen: value => dispatch(Object(index_actions["e" /* setAssignWorksheetModalOpen */])(value)),
    onSetCalendarRows: rows => dispatch(Object(index_actions["f" /* setCalendarRows */])(rows))
  };
}

const withConnect = Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ var Student_Calendar = (Object(external_redux_["compose"])(withConnect)(Calendar_Calendar));
// CONCATENATED MODULE: ./components/Student/IndividualStudentPage/index.js


var IndividualStudentPage_jsx = external_react_default.a.createElement;
















class IndividualStudentPage_IndividualStudentPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleActivationDropdown", () => this.setState(({
      activationDropdownOpen
    }) => ({
      activationDropdownOpen: !activationDropdownOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onSetActivePage", activePage => this.setState({
      activePage
    }));

    Object(defineProperty["a" /* default */])(this, "onHandleDetailsChange", (name, event) => this.setState({
      [name]: event.target.value
    }));

    Object(defineProperty["a" /* default */])(this, "renderCurrentPage", () => {
      const {
        activePage
      } = this.state;
      const {
        student
      } = this.props;

      if (activePage === "summary") {
        return IndividualStudentPage_jsx(Student_DetailSummaryPage, {
          user: student
        });
      }

      if (activePage === "account") {
        return IndividualStudentPage_jsx(Student_AccountPage, {
          user: student
        });
      }

      if (activePage === "lessons") {
        return IndividualStudentPage_jsx(Student_DetailLessonList, {
          user: student
        });
      }

      if (activePage === "worksheets") {
        return IndividualStudentPage_jsx(Student_DetailWorksheetPage, {
          user: student
        });
      }

      if (activePage === "answer-sheet") {
        return IndividualStudentPage_jsx(Student_LessonDetailAnswerSheet, null);
      }

      if (activePage === "test") {
        return IndividualStudentPage_jsx(Student_DetailTestList, {
          user: student
        });
      }

      if (activePage === "scored-tests") {
        return IndividualStudentPage_jsx(Student_ScoredTestListPage, null);
      }

      if (activePage === "calendar") {
        return IndividualStudentPage_jsx(Student_Calendar, null);
      }

      return null;
    });

    this.state = {
      activePage: "summary",
      activationDropdownOpen: false,
      licenseCode: ""
    };
  }

  render() {
    const {
      onRedirectToStudentPage,
      student: {
        active,
        studentInformation: {
          firstName,
          lastName
        }
      }
    } = this.props;
    const {
      activePage,
      activationDropdownOpen,
      licenseCode
    } = this.state;
    const {
      assignLessonsModalOpen,
      assignWorkSheetsModalOpen
    } = this.props;
    return IndividualStudentPage_jsx(external_react_default.a.Fragment, null, !assignLessonsModalOpen && !assignWorkSheetsModalOpen ? IndividualStudentPage_jsx(external_react_sticky_["Sticky"], null, ({
      style
    }) => IndividualStudentPage_jsx("div", {
      className: "title-row card-panel",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1999
      })
    }, IndividualStudentPage_jsx("div", {
      className: "mobile-header"
    }, IndividualStudentPage_jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, IndividualStudentPage_jsx("i", {
      className: "material-icons"
    }, "menu"))), IndividualStudentPage_jsx("nav", {
      className: "breadcrumb-holder"
    }, IndividualStudentPage_jsx("div", {
      className: "nav-wrapper "
    }, IndividualStudentPage_jsx("a", {
      href: "#!",
      className: "breadcrumb",
      onClick: onRedirectToStudentPage
    }, "< Students"))), IndividualStudentPage_jsx("h2", {
      className: "h1 white-text"
    }, IndividualStudentPage_jsx("span", {
      className: "heading-holder"
    }, IndividualStudentPage_jsx("i", {
      className: "icon-student"
    }), IndividualStudentPage_jsx("span", {
      className: "heading-block"
    }, firstName, " ", lastName))), IndividualStudentPage_jsx(components_StudentNavBar, {
      activePage: activePage,
      onSetActivePage: this.onSetActivePage
    }), IndividualStudentPage_jsx("div", {
      className: "activate-block"
    }, active ? IndividualStudentPage_jsx("a", {
      href: "#",
      className: "waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"
    }, IndividualStudentPage_jsx("b", {
      className: "btn-text visible-lg"
    }, "Account Activated"), " ", IndividualStudentPage_jsx("i", {
      className: "icon-unlock"
    })) : IndividualStudentPage_jsx("a", {
      href: "#",
      onClick: this.onToggleActivationDropdown,
      className: "waves-effect btn btn-orange btn-account_inactive dropdown-trigger",
      "data-target": "dropdown_activate"
    }, IndividualStudentPage_jsx("b", {
      className: "btn-text visible-lg"
    }, "Activate Account"), " ", IndividualStudentPage_jsx("i", {
      className: "icon-key"
    })), IndividualStudentPage_jsx("div", {
      id: "dropdown_activate",
      className: "dropdown-content",
      style: activationDropdownOpen ? {
        display: "block",
        opacity: "1"
      } : {}
    }, IndividualStudentPage_jsx("div", {
      className: "card-panel"
    }, IndividualStudentPage_jsx("div", {
      className: "title-block"
    }, IndividualStudentPage_jsx("div", {
      className: "h3"
    }, "Ready to begin your course?"), IndividualStudentPage_jsx("div", {
      className: "subtitle"
    }, "Please enter a valid license code below.")), IndividualStudentPage_jsx("div", {
      className: "input-field"
    }, IndividualStudentPage_jsx("input", {
      type: "text",
      value: licenseCode,
      id: "license-code",
      onChange: event => this.onHandleDetailsChange("licenseCode", event)
    }), IndividualStudentPage_jsx("label", {
      className: "label",
      htmlFor: "license_code"
    }, "License Code")), IndividualStudentPage_jsx("div", {
      className: "btn-holder center-align"
    }, IndividualStudentPage_jsx("button", {
      className: "btn btn-blue",
      type: "submit"
    }, "Activate")), IndividualStudentPage_jsx("div", {
      className: "text-block center-align"
    }, IndividualStudentPage_jsx("p", null, "If you need license codes, you can get them here:", " ", IndividualStudentPage_jsx("a", {
      href: "#",
      className: "waves-effect waves-light btn-small btn-blue"
    }, "Purchase Licenses"))), IndividualStudentPage_jsx("div", {
      className: "text-block"
    }, IndividualStudentPage_jsx("p", null, "*Note: "), IndividualStudentPage_jsx("p", null, "We o\uFB00er discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students."))))))) : null, this.renderCurrentPage());
  }

}

const IndividualStudentPage_mapStateToProps = Object(external_reselect_["createStructuredSelector"])({
  assignLessonsModalOpen: makeSelectAssignLessonsModalOpen(),
  assignWorkSheetsModalOpen: makeSelectAssignWorkSheetsModalOpen()
});
const IndividualStudentPage_withConnect = Object(external_react_redux_["connect"])(IndividualStudentPage_mapStateToProps, null);
/* harmony default export */ var Student_IndividualStudentPage = (Object(external_redux_["compose"])(IndividualStudentPage_withConnect)(IndividualStudentPage_IndividualStudentPage));
// CONCATENATED MODULE: ./pages/students.js


var students_jsx = external_react_default.a.createElement;

















const idGenerator = () => {
  return subIdGenerator() + subIdGenerator() + '-' + subIdGenerator() + '-' + subIdGenerator() + '-' + subIdGenerator() + '-' + subIdGenerator() + subIdGenerator() + subIdGenerator();
};

const subIdGenerator = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

class students_Students extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentDidMount", () => {
      const {
        onFetchStudents
      } = this.props;
      onFetchStudents();
    });

    Object(defineProperty["a" /* default */])(this, "onOpenStudentModal", () => this.setState({
      studentModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseStudentModal", () => this.setState({
      studentModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenLocationModal", () => this.setState({
      locationModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseLocationModal", () => this.setState({
      locationModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", filterName => this.setState({
      filterName
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", () => this.setState({
      filterName: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredLocationState", location => this.setState({
      location
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredLocationState", () => this.setState({
      location: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSaveNewStudent", async () => {
      const {
        newStudent: previousStudentState
      } = this.state; // dispatch add student action

      const {
        onAddNewStudent
      } = this.props;
      onAddNewStudent(previousStudentState);
      const newStudent = external_immutability_helper_default()(previousStudentState, {
        $set: {
          active: false,
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
          }
        }
      });
      this.setState({
        newStudent
      }); // eslint-disable-next-line no-console

      console.warn('do something with the new student info');
      this.onCloseStudentModal();
    });

    Object(defineProperty["a" /* default */])(this, "onDeleteNewStudent", () => {
      const {
        newStudent: previousStudentState
      } = this.state;
      const newStudent = external_immutability_helper_default()(previousStudentState, {
        $set: {
          active: false,
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
          }
        }
      });
      this.setState({
        newStudent
      });
    });

    Object(defineProperty["a" /* default */])(this, "onRemoveLocation", index => {
      const {
        newStudent: previousStudentState
      } = this.state;
      const {
        location: {
          locations
        }
      } = this.state.newStudent;
      const newLocationsArray = this.arrayItemRemover(locations, locations[index]);
      const newStudent = external_immutability_helper_default()(previousStudentState, {
        location: {
          $set: {
            locations: newLocationsArray
          }
        }
      });
      this.setState({
        newStudent
      });
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByName", () => {
      const {
        students,
        filterName
      } = this.state;
      return students.reduce((finalArr, currentStudent) => {
        const {
          lastName,
          firstName
        } = currentStudent;
        const studentString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

        if (studentString.indexOf(filterName) !== -1 && finalArr.indexOf(currentStudent) === -1) {
          finalArr.push(currentStudent);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onHandleStudentCard", index => {
      const {
        students
      } = this.state;
      this.setState({
        selectedStudent: students[index]
      });
    });

    Object(defineProperty["a" /* default */])(this, "onRedirectToStudentPage", event => {
      event.preventDefault();
      this.setState({
        selectedStudent: null
      });
    });

    Object(defineProperty["a" /* default */])(this, "onDeleteStudent", index => {
      const {
        onDeleteStudent
      } = this.props;
      const {
        students
      } = this.state; // Dispatch deleteStudent

      onDeleteStudent(students[index].id);
      const newStudentArray = this.arrayItemRemover(students, students[index]);
      this.setState({
        students: newStudentArray
      });
      const student_id = students[index].id;
      Object(api["b" /* deleteStudentApi */])({
        student_id
      });
      this.onCloseDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "onCloneStudent", index => {
      const {
        students
      } = this.state;
      const newStudent = external_immutability_helper_default()(students[index], {
        id: {
          $set: idGenerator()
        }
      });
      this.setState(prevState => {
        prevState.students.push(newStudent);
        return {
          students: prevState.students
        };
      });
    });

    Object(defineProperty["a" /* default */])(this, "handleChange", (event, name, section) => {
      const {
        newStudent: previousStudentState
      } = this.state;
      const value = event.target ? event.target.value : event;
      const updatedStudent = external_immutability_helper_default()(previousStudentState, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState({
        newStudent: updatedStudent
      });
    });

    Object(defineProperty["a" /* default */])(this, "onSaveStudentChanges", updatedStudent => {
      const {
        students: originalStudents
      } = this.state;
      const {
        active,
        studentInformation,
        contactInformation,
        emailAddress,
        location
      } = updatedStudent;
      const studentToUpdate = originalStudents.filter(student => student.id === updatedStudent.id)[0];
      const updatedStudentIndex = originalStudents.indexOf(studentToUpdate);
      const students = external_immutability_helper_default()(originalStudents, {
        [updatedStudentIndex]: {
          $merge: {
            active: active,
            studentInformation: studentInformation,
            contactInformation: contactInformation,
            emailAddress: emailAddress,
            location: location
          }
        }
      });
      this.setState({
        students
      });
    });

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIsOpen: true,
      dropdownIndex
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false,
      dropdownIndex: null
    }));

    Object(defineProperty["a" /* default */])(this, "arrayItemRemover", (array, value) => array.filter(student => student !== value));

    this.state = {
      selectedStudent: null,
      students: utils_sampleStudentList,
      studentModalOpen: false,
      locationModalOpen: false,
      dropdownIsOpen: false,
      dropdownIndex: null,
      sort: "",
      filterName: "",
      newStudent: {
        active: false,
        studentInformation: {
          firstName: '',
          lastName: ''
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
        }
      }
    };
  }

  render() {
    const {
      studentModalOpen,
      students,
      selectedStudent
    } = this.state;
    return students_jsx("main", {
      id: "main",
      role: "main"
    }, students_jsx("div", {
      className: "main-holder grey lighten-5"
    }, students_jsx(external_react_sticky_["StickyContainer"], null, !selectedStudent && students_jsx(external_react_default.a.Fragment, null, students_jsx(external_react_sticky_["Sticky"], null, ({
      style
    }) => students_jsx("div", {
      className: "title-row card-panel",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1999
      })
    }, students_jsx("div", {
      className: "mobile-header"
    }, students_jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, students_jsx("i", {
      className: "material-icons"
    }, "menu"))), students_jsx("h2", {
      className: "h1 white-text"
    }, students_jsx("span", {
      className: "heading-holder"
    }, students_jsx("i", {
      className: "icon-student"
    }), students_jsx("span", {
      className: "heading-block"
    }, "Students"))))), students_jsx(Components_FilterSection, {
      onSetSort: this.onSetSort,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredLocationState: this.onSetFilteredLocationState,
      onUnsetFilteredLocationState: this.onUnsetFilteredLocationState,
      handleFilterClick: this.handleFilterClick,
      onFilterByName: this.onFilterByName
    }), students_jsx("div", {
      className: "content-section"
    }, students_jsx("div", {
      className: "row d-flex-content"
    }, students.map((student, index) => students_jsx(components_StudentCard, {
      student: student,
      index: index,
      id: student.id,
      key: student.id,
      dropdownIsOpen: this.state.dropdownIsOpen,
      dropdownIndex: this.state.dropdownIndex,
      onSetDropdown: this.onSetDropdown,
      onCloseDropdown: this.onCloseDropdown,
      onHandleStudentCard: () => this.onHandleStudentCard(index),
      onDeleteStudent: () => this.onDeleteStudent(index),
      onCloneStudent: () => this.onCloneStudent(index, student.id),
      onSaveStudentChanges: this.onSaveStudentChanges
    })))), students_jsx("a", {
      href: "#",
      className: "waves-effect waves-teal btn add-btn modal-trigger",
      onClick: this.onOpenStudentModal
    }, students_jsx("i", {
      className: "material-icons"
    }, "add"), "New Student"), students_jsx(components_StudentModal, {
      open: studentModalOpen,
      onClose: this.onCloseStudentModal,
      handleChange: this.handleChange,
      state: this.state.newStudent,
      onSave: this.onSaveNewStudent,
      onOpenLocationModal: this.onOpenLocationModal,
      onRemoveLocation: this.onRemoveLocation,
      onDeleteNewStudent: this.onDeleteNewStudent
    }), students_jsx(LocationModal["a" /* default */], {
      open: this.state.locationModalOpen,
      onClose: this.onCloseLocationModal,
      handleLocationsChange: selectedLocations => this.handleChange(selectedLocations, 'locations', 'location')
    })), selectedStudent && students_jsx(Student_IndividualStudentPage, {
      student: selectedStudent,
      onRedirectToStudentPage: this.onRedirectToStudentPage
    }))));
  }

}

const students_mapStateToProps = Object(external_reselect_["createStructuredSelector"])({
  students: makeSelectStudents()
});

const students_mapDispatchToProps = dispatch => ({
  onDeleteStudent: id => dispatch(Object(index_actions["b" /* deleteStudent */])(id)),
  onFetchStudents: () => dispatch(Object(index_actions["c" /* fetchStudents */])()),
  onAddNewStudent: student => dispatch(Object(index_actions["a" /* addNewStudent */])(student))
});

const students_withConnect = Object(external_react_redux_["connect"])(students_mapStateToProps, students_mapDispatchToProps);
/* harmony default export */ var pages_students = __webpack_exports__["default"] = (Object(external_redux_["compose"])(students_withConnect)(students_Students));

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

/***/ "5Buo":
/***/ (function(module, exports) {



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

/***/ "6VZ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchStudents; });
/* unused harmony export setStudents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addNewStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setAssignLessonsModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setAssignWorksheetModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setCalendarRows; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T6BG");

function fetchStudents() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_STUDENTS */ "c"]
  };
}
function setStudents(students) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* SET_STUDENTS */ "d"],
    students
  };
}
function addNewStudent(student) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* ADD_STUDENT */ "a"],
    student
  };
}
function deleteStudent(id) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* DELETE_STUDENT */ "b"],
    id
  };
}
function setAssignLessonsModalOpen(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN */ "e"],
    value
  };
}
function setAssignWorksheetModalOpen(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN */ "f"],
    value
  };
}
function setCalendarRows(rows) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* SET_STUDENTS_CALENDAR_CALENDAR_ROWS */ "g"],
    rows
  };
}

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AZl1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCalendarCellClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCalendarDayClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calendarMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currentMonthIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return currentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getFirstDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getDaysInActiveMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDaysInPreviousMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getNextMonthAsCurrentMonth; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const getCalendarCellClassName = (hasEvents, inActiveColumn) => {
  let classNames = 'cal-cell1 cal-cell ';

  if (!hasEvents) {
    classNames += 'day-no-events ';
  } else {
    classNames += 'day-has-events ';
  }

  if (inActiveColumn) {
    classNames += 'active-cell';
  }

  return classNames;
};
const getCalendarDayClassName = (date, inMonth, activeDateKey) => {
  let className = 'cal-month-day ';

  if (activeDateKey.includes('column-7') || activeDateKey.includes('column-1')) {
    className += 'cal-day-weekend ';
  }

  if (date === moment__WEBPACK_IMPORTED_MODULE_0___default()().format('MM/DD/YY')) {
    className += 'cal-day-today ';
  }

  if (inMonth === true) {
    className += 'cal-day-inmonth ';
  } else if (inMonth === false) {
    className += 'cal-day-outmonth ';
  }

  return className;
};
const calendarMap = {
  '0': 'December',
  '1': 'January',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
  '13': 'January'
};
const currentMonthIndex = Number(moment__WEBPACK_IMPORTED_MODULE_0___default()().format('M')) - 1;
const currentYear = new Date().getFullYear().toString().substr(-2);
const getDayDate = date => moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date)).format('ddd, MMM Do');
const getFirstDay = activeMonthIndex => new Date(2019, activeMonthIndex).getDay();
const getDaysInActiveMonth = activeMonthIndex => 32 - new Date(2019, activeMonthIndex, 32).getDate();
const getDaysInPreviousMonth = activeMonthIndex => 32 - new Date(2019, activeMonthIndex - 1, 32).getDate();
const getNextMonthAsCurrentMonth = activeMonthIndex => activeMonthIndex > 9 ? activeMonthIndex + 1 : `0${activeMonthIndex + 1}`;

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

/***/ "D4DP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("x4x+");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("EABn");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/NWr");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const testDateOptions = [{
  label: 'January SAT (01/15/2019)',
  value: '01/15/19'
}, {
  label: 'January SAT (01/02/2019)',
  value: '01/02/19'
}, {
  label: 'January SAT (01/21/2019)',
  value: '01/21/19'
}];

class AssignTargetTestModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onSetTestDate", testDate => this.setState({
      testDate
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseModal", () => this.setState({
      testDate: ''
    }, this.props.onClose));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "assignTargetTest", () => {
      const {
        onAssignTargetTest
      } = this.props;
      const {
        testDate
      } = this.state;
      onAssignTargetTest(testDate);
      this.onCloseModal();
    });

    this.state = {
      testDate: ''
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      testDate
    } = this.state;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-2310887436" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_assign_target_test",
      style: {
        zIndex: '1003',
        top: '10%'
      },
      className: "jsx-2310887436" + " " + "modal modal-custom modal-calendar"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#ec3330',
        color: '#fff'
      },
      className: "jsx-2310887436" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-2310887436"
    }, __jsx("span", {
      className: "jsx-2310887436" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-2310887436" + " " + "icon-cup"
    }), __jsx("span", {
      className: "jsx-2310887436" + " " + "heading-block"
    }, " Set Target Test Date")))), __jsx("div", {
      className: "jsx-2310887436" + " " + "col right-align"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2310887436" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-2310887436" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-2310887436" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "col s12"
    }, __jsx("div", {
      style: {
        marginBottom: '0',
        marginTop: '0'
      },
      className: "jsx-2310887436" + " " + "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(testDate, testDateOptions),
      onChange: this.onSetTestDate,
      options: testDateOptions,
      label: "Test Date",
      stateKey: "testDate",
      dropdownKey: "testDate"
    })))), __jsx("div", {
      className: "jsx-2310887436" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-2310887436" + " " + "col s12"
    }, __jsx("span", {
      className: "jsx-2310887436" + " " + "note"
    }, "Note:"), __jsx("p", {
      className: "jsx-2310887436"
    }, "If the student plans to take the SAT multiple times, you may schedule multiple \u201CTarget Test Dates.\u201D Test score and improvement metrics will be based on the student\u2019s score on the \uFB01nal target test date.")))), __jsx("div", {
      className: "jsx-2310887436" + " " + "modal-footer modal-footer-width"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-2310887436" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.assignTargetTest,
      className: "jsx-2310887436" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Set Target Test Date"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2310887436"
    }, [".overlay.jsx-2310887436{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-2310887436{margin:0;border-radius:6px;}", ".modal-custom.jsx-2310887436{opacity:1;visibility:visible;}", ".modal-footer.jsx-2310887436{background-color:white;}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AssignTargetTestModal);

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

/***/ "F//q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__("uzjx");

// EXTERNAL MODULE: ./components/Dashboard/utils/dateAndCalendarUtils.js
var dateAndCalendarUtils = __webpack_require__("AZl1");

// CONCATENATED MODULE: ./components/Dashboard/components/CalendarDate/index.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */




const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'inherit'
}); // eslint-disable-next-line react/prefer-stateless-function


class CalendarDate_CalendarDate extends external_react_default.a.Component {
  render() {
    const {
      date,
      dayDate,
      calDate,
      inMonth,
      hasEvents,
      isActiveDate,
      inActiveColumn,
      addDropdownOpen,
      onSetActiveDate,
      shouldMapLessons,
      shouldMapSessions,
      deleteDropdownOpen,
      onToggleAddDropdown,
      shouldMapWorksheets,
      shouldMapTestSections,
      onToggleDeleteDropdown,
      shouldMapSimulatedSats,
      activeDateKey,
      mapDateSessions,
      mapDateLessons,
      mapDateWorksheets,
      mapTestSections,
      mapSimulatedSats,
      toggleAssignSessionModal,
      toggleAssignLessonsModal,
      toggleAssignWorksheetsModal,
      toggleAssignTestSectionModal,
      toggleAssignSimulatedSatModal,
      sessions,
      lessons,
      worksheets,
      testSections,
      simulatedSat
    } = this.props;
    return __jsx(external_react_default.a.Fragment, null, !inMonth ? __jsx("td", {
      className: "cal-cell1 cal-cell cal-day-outmonth",
      key: dayDate
    }, __jsx("div", {
      className: Object(dateAndCalendarUtils["e" /* getCalendarDayClassName */])(date, inMonth, activeDateKey)
    }, __jsx("span", {
      className: "day-date"
    }, dayDate), __jsx("span", {
      className: "cal-date"
    }, calDate))) : __jsx("td", {
      key: activeDateKey,
      className: Object(dateAndCalendarUtils["d" /* getCalendarCellClassName */])(hasEvents, inActiveColumn),
      onClick: () => onSetActiveDate(activeDateKey)
    }, __jsx(external_react_beautiful_dnd_["Droppable"], {
      droppableId: `droppable-${date}`
    }, (provided, snapshot) => __jsx("div", {
      ref: provided.innerRef,
      style: getListStyle(snapshot.isDraggingOver)
    }, __jsx("div", {
      className: Object(dateAndCalendarUtils["e" /* getCalendarDayClassName */])(date, inMonth, activeDateKey)
    }, __jsx("span", {
      className: "day-date"
    }, dayDate), __jsx("span", {
      className: "cal-date"
    }, calDate), __jsx("ul", {
      className: "day-collapsible collapsible"
    }, __jsx("li", {
      className: isActiveDate ? 'collapsible-holder active' : 'collapsible-holder',
      style: {
        transform: 'none'
      }
    }, __jsx("div", {
      className: "collapsible-header",
      style: {
        display: inActiveColumn && isActiveDate ? 'none' : 'block'
      }
    }, __jsx("span", {
      className: "fake-close"
    }, __jsx("span", {
      className: "icon-close-thin"
    })), hasEvents ? __jsx("ul", {
      className: "events-list events-list-short"
    }, shouldMapSessions ? __jsx("li", {
      className: "event-frame event-title"
    }, __jsx("span", {
      className: "event-title-box"
    }, "Session ", sessions.length)) : null, shouldMapLessons ? __jsx("li", {
      className: "event-frame"
    }, __jsx("span", {
      className: "event event-lesson-box"
    }, " ", lessons.length, " ", __jsx("span", {
      className: "event-text"
    }, "Lesson", lessons.length > 1 && 's'))) : null, shouldMapWorksheets ? __jsx("li", {
      className: "event-frame"
    }, __jsx("span", {
      className: "event event-worksheet-box"
    }, worksheets.length, " ", __jsx("span", {
      className: "event-text"
    }, "Worksheet", worksheets.length > 1 && 's'))) : null, shouldMapTestSections ? __jsx("li", {
      className: "event-frame"
    }, __jsx("span", {
      className: "event event-test-box"
    }, testSections.length, " ", __jsx("span", {
      className: "event-text"
    }, "Test Section", testSections.length > 1 && 's'))) : null, shouldMapSimulatedSats ? __jsx("li", {
      className: "event-frame"
    }, __jsx("span", {
      className: "event event-sat-box"
    }, simulatedSat.length, " ", __jsx("span", {
      className: "event-text"
    }, "Simulated SAT"))) : null) : null), __jsx("div", {
      className: "collapsible-body",
      style: {
        opacity: inActiveColumn && isActiveDate ? '1' : '0',
        visibility: inActiveColumn ? 'visible' : 'hidden'
      }
    }, hasEvents ? __jsx("ul", {
      className: "events-list"
    }, mapDateSessions(shouldMapSessions, sessions), mapDateLessons(shouldMapLessons, lessons), mapDateWorksheets(shouldMapWorksheets, worksheets), mapTestSections(shouldMapTestSections, testSections), mapSimulatedSats(shouldMapSimulatedSats, simulatedSat)) : null, __jsx("div", {
      className: "day-footer"
    }, __jsx("ul", {
      className: "links-list"
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      "data-target": "dropdown_day_240119_add",
      onClick: onToggleAddDropdown,
      className: "link-add dropdown-trigger waves-effect waves-teal"
    }, "Add"), __jsx("ul", {
      id: "dropdown_day_240119_add",
      className: "dropdown-content",
      style: {
        display: addDropdownOpen ? 'block' : 'none',
        opacity: addDropdownOpen ? '100' : '0'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignSessionModal(event, date),
      className: "modal-trigger"
    }, "Session")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignLessonsModal(event, date),
      className: "modal-trigger"
    }, "Lesson")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignWorksheetsModal(event, date),
      className: "modal-trigger"
    }, "Worksheet")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignTestSectionModal(event, date),
      className: "modal-trigger"
    }, "Test Section")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: event => toggleAssignSimulatedSatModal(event, date),
      className: "modal-trigger"
    }, "Simulated SAT")))), __jsx("li", null, __jsx("a", {
      href: "#",
      "data-target": "dropdown_day_240119_delete",
      onClick: onToggleDeleteDropdown,
      className: "link-delete dropdown-trigger waves-effect waves-teal"
    }, "Delete"), __jsx("ul", {
      id: "dropdown_day_240119_delete",
      className: "dropdown-content",
      style: {
        display: deleteDropdownOpen ? 'block' : 'none',
        opacity: deleteDropdownOpen ? '100' : '0'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#modal_edit_delete_section",
      className: "modal-trigger"
    }, "Session")), __jsx("li", null, __jsx("a", {
      href: "#modal_edit_delete_lesson",
      className: "modal-trigger"
    }, "Lesson")), __jsx("li", null, __jsx("a", {
      href: "#modal_edit_delete_worksheet",
      className: "modal-trigger"
    }, "Worksheet")), __jsx("li", null, __jsx("a", {
      href: "#modal_edit_delete_test_section",
      className: "modal-trigger"
    }, "Test Section")), __jsx("li", null, __jsx("a", {
      href: "#!",
      className: "disabled"
    }, "Simulated SAT")), __jsx("li", null, __jsx("a", {
      href: "#!",
      className: "disabled"
    }, "Target Test")), __jsx("li", null, __jsx("a", {
      href: "#!"
    }, "All")))))))))), provided.placeholder))));
  }

}

;
/* harmony default export */ var components_CalendarDate = (CalendarDate_CalendarDate);
// CONCATENATED MODULE: ./components/Dashboard/components/CalendarRow/index.js


var CalendarRow_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-array-index-key */




class CalendarRow_CalendarRow extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "toggleAssignSessionModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignSessionModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignSessionModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "toggleAssignLessonsModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignLessonsModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignLessonsModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "toggleAssignWorksheetsModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignWorksheetsModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignWorksheetsModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "toggleAssignTestSectionModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignTestSectionModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignTestSectionModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "toggleAssignSimulatedSatModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignSimulatedSatModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignSimulatedSatModal(event, date);
      onToggleAddDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "mapDateSessions", (shouldMapSessions, sessions) => {
      if (shouldMapSessions) {
        return sessions.map((session, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `sessions-${session.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), CalendarRow_jsx("span", {
          className: "event-title-box"
        }, session.title)))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapDateLessons", (shouldMapLessons, lessons) => {
      if (shouldMapLessons) {
        return lessons.map((lesson, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `lessons-${lesson.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), CalendarRow_jsx(external_react_default.a.Fragment, null, lesson.completed && CalendarRow_jsx("span", {
          className: "event-check lesson-check"
        }, CalendarRow_jsx("i", {
          className: "icon-check02"
        })), CalendarRow_jsx("span", {
          className: "event event-lesson-box"
        }, lesson.title))))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapDateWorksheets", (shouldMapWorksheets, worksheets) => {
      if (shouldMapWorksheets) {
        return worksheets.map((worksheet, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `worksheets-${worksheet.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), CalendarRow_jsx(external_react_default.a.Fragment, null, worksheet.completed && CalendarRow_jsx("span", {
          className: "event-check worksheet-check"
        }, CalendarRow_jsx("i", {
          className: "icon-check02"
        })), CalendarRow_jsx("span", {
          className: "event event-worksheet-box"
        }, worksheet.title))))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapTestSections", (shouldMapTestSections, testSections) => {
      if (shouldMapTestSections) {
        return testSections.map((testSection, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `testSections-${testSection.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), CalendarRow_jsx("span", {
          className: "event event-test-box"
        }, "Test Section: ", testSection.version)))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapSimulatedSats", (shouldMapSimulatedSats, simulatedSat) => {
      if (shouldMapSimulatedSats) {
        return simulatedSat.map((sat, index) => CalendarRow_jsx("li", {
          className: "event-frame",
          key: index
        }, CalendarRow_jsx(external_react_beautiful_dnd_["Draggable"], {
          key: index,
          index: index,
          draggableId: `simulatedSat-${sat.date}-${index}`
        }, provided => CalendarRow_jsx("div", Object(esm_extends["a" /* default */])({
          ref: provided.innerRef
        }, provided.dragHandleProps, provided.dragHandleProps), CalendarRow_jsx("span", {
          className: "event event-sat-box"
        }, sat.version)))));
      }

      return null;
    });

    Object(defineProperty["a" /* default */])(this, "mapRowDates", () => this.props.rows && this.props.rows.map(rowDate => {
      const {
        eventFilters,
        activeDate,
        addDropdownOpen,
        deleteDropdownOpen,
        onSetActiveDate,
        onToggleAddDropdown,
        onToggleDeleteDropdown,
        activeColumn
      } = this.props;
      const {
        date,
        dayDate,
        calDate,
        activeDateKey,
        inMonth,
        sessions = [],
        lessons = [],
        worksheets = [],
        testSections = [],
        simulatedSat = []
      } = rowDate;
      const hasEvents = sessions.length > 0 || lessons.length > 0 || worksheets.length > 0 || testSections.length > 0 || simulatedSat.length > 0;
      const inActiveColumn = activeDateKey && activeDateKey[13] === activeColumn;
      const isActiveDate = activeDate === activeDateKey;
      const hasEventFilters = eventFilters.length > 0;
      const shouldMapSessions = !hasEventFilters && sessions.length || sessions.length > 0 && hasEventFilters && eventFilters.indexOf('sessions') !== -1;
      const shouldMapLessons = !hasEventFilters && lessons.length || lessons.length > 0 && hasEventFilters && eventFilters.indexOf('lessons') !== -1;
      const shouldMapWorksheets = !hasEventFilters && worksheets.length || worksheets.length > 0 && hasEventFilters && eventFilters.indexOf('worksheets') !== -1;
      const shouldMapTestSections = !hasEventFilters && testSections.length || testSections.length > 0 && hasEventFilters && eventFilters.indexOf('testSections') !== -1;
      const shouldMapSimulatedSats = !hasEventFilters && simulatedSat.length || simulatedSat.length > 0 && hasEventFilters && eventFilters.indexOf('simulatedSats') !== -1;
      return CalendarRow_jsx(components_CalendarDate, {
        sessions: sessions,
        lessons: lessons,
        worksheets: worksheets,
        testSections: testSections,
        simulatedSat: simulatedSat,
        key: date,
        date: date,
        dayDate: dayDate,
        calDate: calDate,
        inMonth: inMonth,
        hasEvents: hasEvents,
        isActiveDate: isActiveDate,
        activeDateKey: activeDateKey,
        inActiveColumn: inActiveColumn,
        addDropdownOpen: addDropdownOpen,
        onSetActiveDate: onSetActiveDate,
        shouldMapLessons: shouldMapLessons,
        shouldMapSessions: shouldMapSessions,
        deleteDropdownOpen: deleteDropdownOpen,
        onToggleAddDropdown: onToggleAddDropdown,
        shouldMapWorksheets: shouldMapWorksheets,
        shouldMapTestSections: shouldMapTestSections,
        onToggleDeleteDropdown: onToggleDeleteDropdown,
        shouldMapSimulatedSats: shouldMapSimulatedSats,
        mapDateSessions: this.mapDateSessions,
        mapDateLessons: this.mapDateLessons,
        mapDateWorksheets: this.mapDateWorksheets,
        mapTestSections: this.mapTestSections,
        mapSimulatedSats: this.mapSimulatedSats,
        toggleAssignSessionModal: this.toggleAssignSessionModal,
        toggleAssignLessonsModal: this.toggleAssignLessonsModal,
        toggleAssignWorksheetsModal: this.toggleAssignWorksheetsModal,
        toggleAssignTestSectionModal: this.toggleAssignTestSectionModal,
        toggleAssignSimulatedSatModal: this.toggleAssignSimulatedSatModal
      });
    }));
  }

  render() {
    return CalendarRow_jsx("tr", {
      className: "cal-row-fluid"
    }, this.mapRowDates());
  }

}

/* harmony default export */ var components_CalendarRow = __webpack_exports__["a"] = (CalendarRow_CalendarRow);

/***/ }),

/***/ "Guna":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */


class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    this.state = {
      open: false
    };
  }

  render() {
    const {
      open
    } = this.state;
    const {
      filters,
      eventFilters,
      onClearFilters,
      handleFilterClick
    } = this.props;
    return __jsx("div", {
      className: "calendar-filter filter-form-holder"
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
      id: "className",
      name: "className",
      checked: filters.indexOf('className') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "className"
    }, "Some Class Name")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "tutoring",
      name: "tutoring",
      checked: filters.indexOf('tutoring') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "tutoring"
    }, "Tutoring"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "sessions",
      name: "sessions",
      checked: eventFilters.indexOf('sessions') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "sessions"
    }, "Sessions")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "lessons",
      name: "lessons",
      checked: eventFilters.indexOf('lessons') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "lessons"
    }, "Lessons"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "worksheets",
      name: "worksheets",
      checked: eventFilters.indexOf('worksheets') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "worksheets"
    }, "Worksheets")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "testSections",
      name: "testSections",
      checked: eventFilters.indexOf('testSections') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "testSections"
    }, "Test Sections")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "simulatedSats",
      name: "simulatedSats",
      checked: eventFilters.indexOf('simulatedSats') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "simulatedSats"
    }, "Simulated SATs")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "targetTests",
      name: "targetTests",
      checked: eventFilters.indexOf('targetTests') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name, true)
    }), __jsx("label", {
      htmlFor: "targetTests"
    }, "Target Tests"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueToday",
      name: "dueToday",
      checked: filters.indexOf('dueToday') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "dueToday"
    }, "Due Today")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueNextSession",
      name: "dueNextSession",
      checked: filters.indexOf('dueNextSession') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "dueNextSession"
    }, "Due By Next Session")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueThisWeek",
      name: "dueThisWeek",
      checked: filters.indexOf('dueThisWeek') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "dueThisWeek"
    }, "Due this Week")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "overdue",
      name: "overdue",
      checked: filters.indexOf('overdue') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "overdue"
    }, "Overdue"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "complete",
      name: "complete",
      checked: filters.indexOf('complete') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "complete"
    }, "Complete")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "incomplete",
      name: "incomplete",
      checked: filters.indexOf('incomplete') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "incomplete"
    }, "Incomplete")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "future",
      name: "future",
      checked: filters.indexOf('future') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "future"
    }, "Future"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "reading",
      name: "reading",
      checked: filters.indexOf('reading') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "reading"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "writing",
      name: "writing",
      checked: filters.indexOf('writing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "writing"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "math",
      name: "math",
      checked: filters.indexOf('math') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "math"
    }, "Math"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "beginning",
      name: "beginning",
      checked: filters.indexOf('beginning') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "beginning"
    }, "Beginning")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "developing",
      name: "developing",
      checked: filters.indexOf('developing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "developing"
    }, "Developing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "accomplished",
      name: "accomplished",
      checked: filters.indexOf('accomplished') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "accomplished"
    }, "Accomplished")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "exemplary",
      name: "exemplary",
      checked: filters.indexOf('exemplary') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "exemplary"
    }, "Exemplary"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "hasReviewFlags",
      name: "hasReviewFlags",
      checked: filters.indexOf('hasReviewFlags') !== -1,
      onChange: ({
        target
      }) => handleFilterClick(target.name)
    }), __jsx("label", {
      htmlFor: "hasReviewFlags"
    }, "Has Review Flags"))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-flex-end"
    }, __jsx("div", {
      className: "col s12 l8"
    }), __jsx("div", {
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

/* harmony default export */ __webpack_exports__["a"] = (FilterSection);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IUQe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return difficultySort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pageNumberSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return problemSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return timeEstimateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return subjectSort; });
const difficultySort = ({
  difficulty: difficultyA
}, {
  difficulty: difficultyB
}) => {
  if (difficultyA > difficultyB) {
    return -1;
  }

  return 0;
};
const pageNumberSort = ({
  pageNumber: pageNumberA
}, {
  pageNumber: pageNumberB
}) => {
  if (pageNumberA > pageNumberB) {
    return -1;
  }

  return 0;
};
const problemSort = ({
  problems: problemCountA
}, {
  problems: problemCountB
}) => {
  if (problemCountA > problemCountB) {
    return -1;
  }

  return 0;
};
const timeEstimateSort = ({
  timeEstimate: timeEstimateA
}, {
  timeEstimate: timeEstimateB
}) => {
  if (timeEstimateA > timeEstimateB) {
    return -1;
  }

  return 0;
};
const subjectSort = ({
  subject: subjectA
}, {
  subject: subjectB
}) => {
  if (subjectA > subjectB) {
    return -1;
  }

  return 0;
};

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

/***/ "KnbY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  value: '',
  label: 'Any'
}, {
  value: 'Miami',
  label: 'Miami'
}, {
  value: 'Austin',
  label: 'Austin'
}, {
  value: 'option1',
  label: 'Option 1'
}, {
  value: 'option2',
  label: 'Option 2'
}]);

/***/ }),

/***/ "MV2m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5Buo");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xA6B");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("x4x+");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("EABn");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/NWr");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const sampleVersions = [{
  label: 'SAT Practice Test #1',
  value: 'SAT Practice Test #1'
}, {
  label: 'SAT Practice Test #2',
  value: 'SAT Practice Test #2'
}, {
  label: 'SAT Practice Test #3',
  value: 'SAT Practice Test #3'
}];
const sampleSections = [{
  label: 'Math (no calc)',
  value: 'Math (no calc)'
}, {
  label: 'Reading',
  value: 'Reading'
}, {
  label: 'Writing',
  value: 'Writing'
}, {
  label: 'Math (calculator)',
  value: 'Math (calculator)'
}];

class AssignTestSectionModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onResetModal", () => this.setState({
      version: '',
      section: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      timed: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "assignTestSection", () => {
      const {
        onAssignTestSection
      } = this.props;
      const {
        version,
        section,
        assignDate: unformattedAssignDate,
        assignTime: unformattedAssignTime,
        dueDate: unformattedDueDate,
        dueTime: unformattedDueTime,
        timed
      } = this.state;
      const assignDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedAssignDate).format('MM/DD/YY');
      const assignTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedAssignTime).format('hh:mm');
      const dueDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedDueDate).format('MM/DD/YY');
      const dueTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(unformattedDueTime).format('hh:mm');
      onAssignTestSection({
        version,
        section,
        assignDate,
        assignTime,
        dueDate,
        dueTime,
        timed
      });
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDetailsChange", (event, name = null) => {
      if (event.target) {
        this.setState(({
          timed
        }) => ({
          timed: !timed
        }));
      } else {
        this.setState({
          [name]: event
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDatePickerChange", (field, value) => this.setState({
      [field]: value
    }));

    this.state = {
      version: '',
      section: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      timed: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      modalDate
    } = this.props;

    if (prevState.assignDate === '' && modalDate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        assignDate: new Date(modalDate)
      });
    }
  }

  render() {
    const {
      open
    } = this.props;
    const {
      version,
      section,
      assignDate,
      assignTime,
      dueDate,
      dueTime,
      timed
    } = this.state;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-482330571" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_assign_test_section",
      className: "jsx-482330571" + " " + "modal modal-custom modal-calendar"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#00638e',
        color: '#fff'
      },
      className: "jsx-482330571" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-482330571" + " " + "h3"
    }, __jsx("span", {
      className: "jsx-482330571" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-assign-section"
    }), __jsx("span", {
      className: "jsx-482330571" + " " + "heading-block"
    }, " Assign Test Section (as coursework)")))), __jsx("div", {
      className: "jsx-482330571" + " " + "col right-align"
    }, __jsx("a", {
      href: "#!",
      onClick: this.onCloseModal,
      className: "jsx-482330571" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-482330571" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("div", {
      style: {
        marginBottom: '0',
        marginTop: '0'
      },
      className: "jsx-482330571" + " " + "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(version, sampleVersions),
      onChange: event => this.handleDetailsChange(event, 'version'),
      options: sampleVersions,
      name: "version",
      label: "Version",
      stateKey: "version",
      dropdownKey: "version"
    }))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("div", {
      style: {
        marginBottom: '0',
        marginTop: '0'
      },
      className: "jsx-482330571" + " " + "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(section, sampleSections),
      onChange: event => this.handleDetailsChange(event, 'section'),
      options: sampleSections,
      name: "section",
      label: "Section",
      stateKey: "section",
      dropdownKey: "section"
    })))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: assignDate,
      dateFormat: "MM/dd/yy",
      id: "assignDate",
      name: "assignDate",
      onChange: event => this.handleDatePickerChange('assignDate', event)
    }), __jsx("label", {
      htmlFor: "new_test_section_assign_date",
      className: "jsx-482330571" + " " + ((assignDate ? 'label active' : 'label') || "")
    }, "Assign For"))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: assignTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "assignTime",
      name: "assignTime",
      onChange: event => this.handleDatePickerChange('assignTime', event)
    }), __jsx("label", {
      htmlFor: "assignTime",
      className: "jsx-482330571" + " " + ((assignTime ? 'label active' : 'label') || "")
    }, "Time")))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: dueDate,
      dateFormat: "MM/dd/yy",
      id: "dueDate",
      name: "dueDate",
      onChange: event => this.handleDatePickerChange('dueDate', event)
    }), __jsx("label", {
      htmlFor: "dueDate",
      className: "jsx-482330571" + " " + ((dueDate ? 'label active' : 'label') || "")
    }, "Due (optional)"))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      selected: dueTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "dueTime",
      name: "dueTime",
      onChange: event => this.handleDatePickerChange('dueTime', event)
    }), __jsx("label", {
      htmlFor: "dueTime",
      className: "jsx-482330571" + " " + ((dueTime ? 'label active' : 'label') || "")
    }, "Time")))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "timed",
      id: "timed",
      checked: timed,
      onChange: this.handleDetailsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Timed")))))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-footer modal-footer-width"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-482330571" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.assignTestSection,
      className: "jsx-482330571" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Save"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "482330571"
    }, [".overlay.jsx-482330571{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-482330571{margin:0;border-radius:6px;}", ".modal.jsx-482330571{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-482330571{opacity:1;visibility:visible;}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AssignTestSectionModal);

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OI+E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  value: 'lastNameDescending',
  label: 'Last Name (Descending)'
}, {
  value: 'lastNameAscending',
  label: 'Last Name (Ascending)'
}, {
  value: 'firstNameDescending',
  label: 'First Name (Descending)'
}, {
  value: 'firstNameAscending',
  label: 'First Name (Ascending)'
}]);

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

/***/ "R5Ku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/Dashboard/components/CalendarHeader/components/CalendarArrow/index.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */


const CalendarArrow = ({
  calendarMap,
  activeMonth,
  onClick,
  direction
}) => __jsx("div", {
  onClick: onClick,
  className: direction === "next" ? "slick-arrow slick-next" : "slick-arrow slick-prev"
}, direction === "next" ? calendarMap[activeMonth + 2] : calendarMap[activeMonth]);

/* harmony default export */ var components_CalendarArrow = (CalendarArrow);
// EXTERNAL MODULE: ./components/Dashboard/utils/dateAndCalendarUtils.js
var dateAndCalendarUtils = __webpack_require__("AZl1");

// CONCATENATED MODULE: ./components/Dashboard/components/CalendarHeader/index.js
var CalendarHeader_jsx = external_react_default.a.createElement;



 // eslint-disable-next-line react/prefer-stateless-function

class CalendarHeader_CalendarHeader extends external_react_default.a.Component {
  render() {
    const {
      activeMonth,
      onSetActiveMonth
    } = this.props;
    return CalendarHeader_jsx("div", {
      className: "calendar-header",
      style: {
        zIndex: '9'
      }
    }, CalendarHeader_jsx("div", {
      className: "calendar-view-switcher"
    }, CalendarHeader_jsx("ul", {
      className: "switcher"
    }, CalendarHeader_jsx("li", {
      className: "active col",
      "data-view": "view-month"
    }, CalendarHeader_jsx("a", {
      href: "#"
    }, "Month View")), CalendarHeader_jsx("li", {
      className: "col",
      "data-view": "view-day"
    }, CalendarHeader_jsx("a", {
      href: "#"
    }, "Day View")))), CalendarHeader_jsx("div", {
      className: "nav-slick-calendar",
      style: {
        opacity: '1'
      }
    }, CalendarHeader_jsx(external_react_slick_default.a, {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: dateAndCalendarUtils["b" /* currentMonthIndex */],
      onInit: () => onSetActiveMonth(dateAndCalendarUtils["b" /* currentMonthIndex */]),
      afterChange: onSetActiveMonth,
      nextArrow: CalendarHeader_jsx(components_CalendarArrow, {
        direction: "next",
        calendarMap: dateAndCalendarUtils["a" /* calendarMap */],
        activeMonth: activeMonth
      }),
      prevArrow: CalendarHeader_jsx(components_CalendarArrow, {
        direction: "previous",
        calendarMap: dateAndCalendarUtils["a" /* calendarMap */],
        activeMonth: activeMonth
      })
    }, CalendarHeader_jsx("div", {
      className: "slide"
    }, "January"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "February"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "March"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "April"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "May"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "June"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "July"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "August"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "September"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "October"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "November"), CalendarHeader_jsx("div", {
      className: "slide"
    }, "December"))));
  }

}

/* harmony default export */ var components_CalendarHeader = __webpack_exports__["a"] = (CalendarHeader_CalendarHeader);

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

/***/ "T6BG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_STUDENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_STUDENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_STUDENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_STUDENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_STUDENTS_CALENDAR_CALENDAR_ROWS; });
const FETCH_STUDENTS = 'FETCH_STUDENTS';
const SET_STUDENTS = 'SET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN = 'SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN';
const SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN = 'SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN';
const SET_STUDENTS_CALENDAR_CALENDAR_ROWS = 'SET_STUDENTS_CALENDAR_CALENDAR_ROWS';

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

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

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cufv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YckE");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5Buo");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xA6B");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("x4x+");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("EABn");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("/NWr");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










const sampleVersions = [{
  label: 'SAT Practice Test #1',
  value: 'SAT Practice Test #1'
}, {
  label: 'SAT Practice Test #2',
  value: 'SAT Practice Test #2'
}, {
  label: 'SAT Practice Test #3',
  value: 'SAT Practice Test #3'
}];

class AssignSimulatedSatModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onResetModal", () => this.setState({
      version: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      sections: [],
      allowStudentToEnterAnswers: false,
      includeScoreInImprovementMetrics: false,
      timed: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "assignSimulatedSat", () => {
      const {
        onAssignSimulatedSat
      } = this.props;
      const {
        version,
        assignDate: unformattedAssignDate,
        assignTime: unformattedAssignTime,
        dueDate: unformattedDueDate,
        dueTime: unformattedDueTime,
        sections,
        allowStudentToEnterAnswers,
        includeScoreInImprovementMetrics,
        timed
      } = this.state;
      const assignDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedAssignDate).format('MM/DD/YY');
      const assignTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedAssignTime).format('hh:mm');
      const dueDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedDueDate).format('MM/DD/YY');
      const dueTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedDueTime).format('hh:mm');
      onAssignSimulatedSat({
        version,
        assignDate,
        assignTime,
        dueDate,
        dueTime,
        sections,
        allowStudentToEnterAnswers,
        includeScoreInImprovementMetrics,
        timed
      });
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDetailsChange", (event, name = null) => {
      if (event.target) {
        const checkboxName = event.target.name;
        const prevState = this.state[checkboxName];
        this.setState({
          [checkboxName]: !prevState
        });
      } else {
        this.setState({
          [name]: event
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleSectionsChange", event => {
      const {
        sections
      } = this.state;

      if (sections.indexOf(event.target.name) === -1) {
        const updatedSections = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(sections, {
          $push: [event.target.name]
        });
        this.setState({
          sections: updatedSections
        });
      } else {
        const sectionIndex = sections.indexOf(event.target.name);
        const updatedSections = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(sections, {
          $splice: [[sectionIndex, 1]]
        });
        this.setState({
          sections: updatedSections
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleDatePickerChange", (field, value) => this.setState({
      [field]: value
    }));

    this.state = {
      version: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      sections: [],
      allowStudentToEnterAnswers: false,
      includeScoreInImprovementMetrics: false,
      timed: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      modalDate
    } = this.props;

    if (prevState.assignDate === '' && modalDate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        assignDate: new Date(modalDate)
      });
    }
  }

  render() {
    const {
      open
    } = this.props;
    const {
      version,
      assignDate,
      assignTime,
      dueDate,
      dueTime,
      sections,
      allowStudentToEnterAnswers,
      includeScoreInImprovementMetrics,
      timed
    } = this.state;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-482330571" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_assign_simulated_sat",
      className: "jsx-482330571" + " " + "modal modal-custom modal-calendar"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#ec3330',
        color: '#fff'
      },
      className: "jsx-482330571" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-482330571"
    }, __jsx("span", {
      className: "jsx-482330571" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-circles"
    }), __jsx("span", {
      className: "jsx-482330571" + " " + "heading-block"
    }, " New Scored SAT Test")))), __jsx("div", {
      className: "jsx-482330571" + " " + "col right-align"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-482330571" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-482330571" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("div", {
      style: {
        marginBottom: '0',
        marginTop: '0'
      },
      className: "jsx-482330571" + " " + "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(version, sampleVersions),
      onChange: event => this.handleDetailsChange(event, 'version'),
      options: sampleVersions,
      name: "version",
      label: "Version",
      stateKey: "version",
      dropdownKey: "version"
    })))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      selected: assignDate,
      dateFormat: "MM/dd/yy",
      id: "assignDate",
      name: "assignDate",
      onChange: event => this.handleDatePickerChange('assignDate', event)
    }), __jsx("label", {
      htmlFor: "new_test_section_assign_date",
      className: "jsx-482330571" + " " + ((assignDate ? 'label active' : 'label') || "")
    }, "Assign For"))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      selected: assignTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "assignTime",
      name: "assignTime",
      onChange: event => this.handleDatePickerChange('assignTime', event)
    }), __jsx("label", {
      htmlFor: "assignTime",
      className: "jsx-482330571" + " " + ((assignTime ? 'label active' : 'label') || "")
    }, "Time")))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      selected: dueDate,
      dateFormat: "MM/dd/yy",
      id: "dueDate",
      name: "dueDate",
      onChange: event => this.handleDatePickerChange('dueDate', event)
    }), __jsx("label", {
      htmlFor: "dueDate",
      className: "jsx-482330571" + " " + ((dueDate ? 'label active' : 'label') || "")
    }, "Due (optional)"))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "datepicker-field input-field"
    }, __jsx("i", {
      className: "jsx-482330571" + " " + "icon-clock2"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      selected: dueTime,
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",
      id: "dueTime",
      name: "dueTime",
      onChange: event => this.handleDatePickerChange('dueTime', event)
    }), __jsx("label", {
      htmlFor: "dueTime",
      className: "jsx-482330571" + " " + ((dueTime ? 'label active' : 'label') || "")
    }, "Time")))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-row row"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s12"
    }, __jsx("span", {
      className: "jsx-482330571" + " " + "card-subtitle"
    }, "Sections:"), __jsx("div", {
      className: "jsx-482330571" + " " + "check-holder"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "Reading",
      id: "reading",
      checked: sections.indexOf('Reading') !== -1,
      onChange: this.handleSectionsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Reading"))), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "Math (no calc)",
      id: "mathNoCalc",
      checked: sections.indexOf('Math (no calc)') !== -1,
      onChange: this.handleSectionsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Math (no calc)")))), __jsx("div", {
      className: "jsx-482330571" + " " + "col s6"
    }, __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "Writing",
      id: "writing",
      checked: sections.indexOf('Writing') !== -1,
      onChange: this.handleSectionsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Writing"))), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "Math (calculator)",
      id: "Math (calculator)",
      checked: sections.indexOf('Math (calculator)') !== -1,
      onChange: this.handleSectionsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Math (calculator)"))))), __jsx("span", {
      className: "jsx-482330571" + " " + "card-note"
    }, "Note: scaled test scores may require combinations of sections")), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "allowStudentToEnterAnswers",
      id: "allowStudentToEnterAnswers",
      checked: allowStudentToEnterAnswers,
      onChange: this.handleDetailsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Allow Student to Enter Answers"))), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "includeScoreInImprovementMetrics",
      id: "includeScoreInImprovementMetrics",
      checked: includeScoreInImprovementMetrics,
      onChange: this.handleDetailsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Include Score in Improvement Metrics"))), __jsx("p", {
      className: "jsx-482330571"
    }, __jsx("label", {
      className: "jsx-482330571"
    }, __jsx("input", {
      type: "checkbox",
      name: "timed",
      id: "timed",
      checked: timed,
      onChange: this.handleDetailsChange,
      className: "jsx-482330571" + " " + "filled-in"
    }), __jsx("span", {
      className: "jsx-482330571"
    }, "Timed")))))), __jsx("div", {
      className: "jsx-482330571" + " " + "modal-footer modal-footer-width"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-482330571" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.assignSimulatedSat,
      className: "jsx-482330571" + " " + "link-btn waves-effect waves-teal btn-flat"
    }, "Save"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "482330571"
    }, [".overlay.jsx-482330571{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-482330571{margin:0;border-radius:6px;}", ".modal.jsx-482330571{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-482330571{opacity:1;visibility:visible;}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AssignSimulatedSatModal);

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fRFr":
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

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js

var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */



const sortByOptions = [{
  label: 'Difficulty',
  value: 'difficulty'
}, {
  label: 'Problems',
  value: 'problems'
}, {
  label: 'Time Estimate',
  value: 'timeEstimate'
}, {
  label: 'Subject',
  value: 'subject'
}];

class FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      titleFilter: '',
      unitFilter: ''
    }, this.props.onClearFilters));

    Object(defineProperty["a" /* default */])(this, "handleSearchChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(defineProperty["a" /* default */])(this, "submitSearchFilter", searchType => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;

      if (this.state[searchType] === '') {
        onUnsetFilteredState(searchType);
      }

      const transformedTitle = this.state[searchType].replace(/\s/g, "").toLowerCase();
      onSetFilteredState(searchType, transformedTitle);
    });

    this.state = {
      open: false,
      titleFilter: '',
      unitFilter: ''
    };
  }

  render() {
    const {
      handleFilterClick,
      subjectFilters,
      typeFilters,
      sourceFilters,
      difficultyFilters,
      sort,
      onSetSort
    } = this.props;
    const {
      open,
      titleFilter,
      unitFilter
    } = this.state;
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
      id: "readingSubject",
      name: "readingSubject",
      checked: subjectFilters.indexOf('readingSubject') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "readingSubject"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "writingSubject",
      name: "writingSubject",
      checked: subjectFilters.indexOf('writingSubject') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "writingSubject"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "mathSubject",
      name: "mathSubject",
      checked: subjectFilters.indexOf('mathSubject') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "mathSubject"
    }, "Math")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "mixedDifficulty",
      name: "mixedDifficulty",
      checked: subjectFilters.indexOf('mixedDifficulty') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "mixedDifficulty"
    }, "Mixed"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "satPractice",
      name: "satPractice",
      checked: typeFilters.indexOf('satPractice') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "satPractice"
    }, "SAT Practice")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "skillBuilders",
      name: "skillBuilders",
      checked: typeFilters.indexOf('skillBuilders') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "skillBuilders"
    }, "Skill Builders")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "mixedType",
      name: "mixedType",
      checked: typeFilters.indexOf('mixedType') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "mixedType"
    }, "Mixed"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "builtIn",
      name: "builtIn",
      checked: sourceFilters.indexOf('builtIn') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('source', target.name)
    }), __jsx("label", {
      htmlFor: "builtIn"
    }, "Built-In")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "userCreated",
      name: "userCreated",
      checked: sourceFilters.indexOf('userCreated') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('source', target.name)
    }), __jsx("label", {
      htmlFor: "userCreated"
    }, "User Created"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "easy",
      name: "easy",
      checked: difficultyFilters.indexOf('easy') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), __jsx("label", {
      htmlFor: "easy"
    }, "Easy")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "medium",
      name: "medium",
      checked: difficultyFilters.indexOf('medium') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), __jsx("label", {
      htmlFor: "medium"
    }, "Medium")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "difficult",
      name: "difficult",
      checked: difficultyFilters.indexOf('difficult') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), __jsx("label", {
      htmlFor: "difficult"
    }, "Di\uFB03cult")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "mixedDifficulty",
      name: "mixedDifficulty",
      checked: difficultyFilters.indexOf('mixedDifficulty') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('difficulty', target.name)
    }), __jsx("label", {
      htmlFor: "mixedDifficulty"
    }, "Mixed")))), __jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "titleFilter",
      name: "titleFilter",
      className: "input-control validate",
      value: titleFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: () => this.submitSearchFilter('titleFilter'),
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: titleFilter.length ? 'label active' : 'label',
      htmlFor: "titleFilter"
    }, "Search By Title"))), __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "unitFilter",
      name: "unitFilter",
      className: "input-control validate",
      value: unitFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: () => this.submitSearchFilter('unitFilter'),
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: unitFilter.length ? 'label active' : 'label',
      htmlFor: "unitFilter"
    }, "Search By Unit"))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 m6"
    }, __jsx("div", {
      className: "input-field",
      style: {
        marginBottom: '0',
        marginTop: '0'
      }
    }, __jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, sortByOptions),
      onChange: onSetSort,
      options: sortByOptions,
      label: "Sort By",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), __jsx("div", {
      className: "switcher-block col s12 l4"
    }, __jsx("div", {
      className: "view-switcher"
    }, __jsx("ul", {
      className: "switcher center-align"
    }, __jsx("li", {
      className: "active",
      "data-view": "view-full"
    }, __jsx("a", {
      href: "#"
    }, "Month View")), __jsx("li", {
      "data-view": "view-list"
    }, __jsx("a", {
      href: "#"
    }, "Day View"))))), __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "option-filters"
    }, __jsx("div", {
      className: "option-item clear"
    }, __jsx("a", {
      href: "#",
      onClick: this.onClearFilters
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
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js

var WorksheetCard_jsx = external_react_default.a.createElement;


class WorksheetCard_WorksheetCard extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

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

    Object(defineProperty["a" /* default */])(this, "editWorksheet", () => console.warn('Pending implementation of edit modal/functionality'));

    Object(defineProperty["a" /* default */])(this, "cloneWorksheet", () => console.warn('Pending implementation of clone worksheet functionality'));

    Object(defineProperty["a" /* default */])(this, "showOwner", () => console.warn('Pending implementation of show owner functionality'));

    Object(defineProperty["a" /* default */])(this, "deleteWorksheet", () => console.warn('Pending implementation of delete worksheet functionality'));
  }

  render() {
    const {
      worksheet,
      selectedWorksheets,
      handleWorksheetClick,
      index,
      dropdownIndex,
      dropdownIsOpen
    } = this.props;
    const {
      title,
      subject,
      problems,
      type,
      difficulty,
      timeEstimate,
      source,
      classifications
    } = worksheet;
    return WorksheetCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, WorksheetCard_jsx("div", {
      className: "card-checkbox"
    }, WorksheetCard_jsx("input", {
      type: "checkbox",
      checked: selectedWorksheets.indexOf(worksheet) !== -1,
      onChange: () => handleWorksheetClick(worksheet)
    }), WorksheetCard_jsx("div", {
      className: "checkbox-card card-main card-lesson-detail card-assigned card"
    }, WorksheetCard_jsx("div", {
      className: "card-panel",
      style: {
        backgroundColor: '#666',
        color: '#fff'
      }
    }, WorksheetCard_jsx("div", {
      className: "card-panel-row row"
    }, WorksheetCard_jsx("div", {
      className: "icon-col col s2"
    }, WorksheetCard_jsx("span", {
      className: "block-icon"
    }, WorksheetCard_jsx("i", {
      className: "icon-sheets-w"
    }))), WorksheetCard_jsx("div", {
      className: "col s9"
    }, WorksheetCard_jsx("div", {
      className: "card-panel-text"
    }, WorksheetCard_jsx("div", {
      className: "text-small"
    }, "Worksheet (", subject, ")"), WorksheetCard_jsx("div", {
      className: "text-large"
    }, title))), WorksheetCard_jsx("div", {
      className: "align-top col s1 right-align"
    }, WorksheetCard_jsx("div", {
      className: "row icons-row"
    }, WorksheetCard_jsx("div", {
      className: "dropdown-block col"
    }, WorksheetCard_jsx("a", {
      href: "#",
      className: "dropdown-trigger btn",
      "data-target": "dropdown_worksheet_01",
      onClick: this.handleDropdownClick
    }, WorksheetCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? WorksheetCard_jsx("ul", {
      id: "dropdown_worksheet_01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, WorksheetCard_jsx("li", null, WorksheetCard_jsx("a", {
      href: "#",
      onClick: this.editWorksheet,
      className: "modal-trigger link-block"
    }, "Edit")), WorksheetCard_jsx("li", null, WorksheetCard_jsx("a", {
      href: "#",
      onClick: this.cloneWorksheet
    }, "Clone")), WorksheetCard_jsx("li", null, WorksheetCard_jsx("a", {
      href: "#",
      onClick: this.showOwner
    }, "Show Owner")), WorksheetCard_jsx("li", null, WorksheetCard_jsx("a", {
      href: "#",
      onClick: this.deleteWorksheet
    }, "Delete"))) : null)))), WorksheetCard_jsx("div", {
      className: "card-top-block"
    }, WorksheetCard_jsx("div", {
      className: "d-flex row mb-0"
    }, WorksheetCard_jsx("div", {
      className: "left-col col s6"
    }, WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Problem Type:"), WorksheetCard_jsx("dd", null, type))), WorksheetCard_jsx("div", {
      className: "right-col col s6 right-align"
    }, WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Di\uFB03culty:"), WorksheetCard_jsx("dd", null, difficulty)))))), WorksheetCard_jsx("div", {
      className: "card-content"
    }, WorksheetCard_jsx("div", {
      className: "chart-container"
    }, WorksheetCard_jsx("div", {
      className: "chart-holder"
    }, WorksheetCard_jsx("span", {
      className: "svg-curved-bar",
      "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
      "data-duration": "1"
    }, WorksheetCard_jsx("svg", {
      width: "110px",
      height: "110px",
      viewBox: " 0 0 110 110"
    }, WorksheetCard_jsx("path", {
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#eaeaea'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
    }), WorksheetCard_jsx("path", {
      "data-dinamic": true,
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#31837a'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
    }))), WorksheetCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#4d4d4d'
      }
    })), WorksheetCard_jsx("div", {
      className: "chart-description"
    }, WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Time Est:"), WorksheetCard_jsx("dd", null, timeEstimate, " min")), WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Problems:"), WorksheetCard_jsx("dd", null, problems)))), WorksheetCard_jsx("div", {
      className: "card-text"
    }, WorksheetCard_jsx("dl", {
      className: "dl-horizontal"
    }, WorksheetCard_jsx("dt", null, "Worksheet Source:"), WorksheetCard_jsx("dd", null, source))), WorksheetCard_jsx("div", {
      className: "card-inner-row"
    }, WorksheetCard_jsx("div", {
      className: "row-holder"
    }, WorksheetCard_jsx("ul", {
      className: "classification-list"
    }, classifications.length ? classifications.map(classification => WorksheetCard_jsx("li", {
      key: classification,
      className: "class-box"
    }, classification)) : WorksheetCard_jsx("li", {
      className: "empty-box"
    }, "no classi\uFB01cation"))))))));
  }

}

/* harmony default export */ var components_WorksheetCard = (WorksheetCard_WorksheetCard);
// EXTERNAL MODULE: ./components/Dashboard/utils/sortOptions.js
var sortOptions = __webpack_require__("IUQe");

// CONCATENATED MODULE: ./components/Dashboard/utils/sampleWorksheets.js
/* harmony default export */ var sampleWorksheets = ([{
  id: 1,
  title: 'Some SAT Problems about Triangles',
  subject: 'Math',
  problems: 15,
  type: 'Skill Builders',
  unit: 'Math Unit #2',
  difficulty: 'Easy',
  timeEstimate: '14',
  source: 'Built-In',
  classifications: ['Right Triangles', 'More Math', "Lots Of Math"]
}, {
  id: 2,
  title: 'Worksheet 2',
  subject: 'Reading',
  problems: 18,
  type: 'Skill Builders',
  unit: 'Reading Unit #3',
  difficulty: 'Easy',
  timeEstimate: '30',
  source: 'User Created',
  classifications: []
}, {
  id: 3,
  title: 'Worksheet 3',
  subject: 'Writing',
  problems: 16,
  type: 'SAT Practice',
  unit: 'Writing Unit #1',
  difficulty: 'Difficult',
  timeEstimate: '62',
  source: 'Built-In',
  classifications: ['Right Triangles', 'Math', "Lots Of Math"]
}, {
  id: 4,
  title: 'Worksheet 4',
  subject: 'Writing',
  problems: 14,
  type: 'SAT Practice',
  unit: 'Mixed Unit #6',
  difficulty: 'Mixed',
  timeEstimate: '31',
  source: 'User Created',
  classifications: ['Trigonometry', 'More Math', "Lots Of Math"]
}, {
  id: 5,
  title: 'Worksheet 5',
  subject: 'Reading',
  problems: 21,
  type: 'Mixed',
  unit: 'Reading Unit #2',
  difficulty: 'Medium',
  timeEstimate: '23',
  source: 'Built-In',
  classifications: ['Trigonometry', 'Math', "Lots Of Math"]
}, {
  id: 6,
  title: 'Worksheet 6',
  subject: 'Math',
  problems: 30,
  type: 'Mixed',
  unit: 'Math Unit #4',
  difficulty: 'Difficult',
  timeEstimate: '58',
  source: 'User Created',
  classifications: ['Right Triangles', 'Trigonometry', 'More Math']
}]);
// CONCATENATED MODULE: ./components/Dashboard/utils/worksheetModalMaps.js
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
  'Easy': 'easy',
  'Medium': 'medium',
  'Difficult': 'difficult',
  'Mixed': 'mixedDifficulty'
};
const worksheetSubjectMap = {
  'Reading': 'readingSubject',
  'Writing': 'writingSubject',
  'Math': 'mathSubject',
  'Mixed': 'mixedSubject'
};
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/index.js


var AssignWorksheetModal_jsx = external_react_default.a.createElement;










class AssignWorksheetModal_AssignWorksheetModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleAssignSelectedDropdown", () => this.setState(({
      assignSelectedDropdownOpen
    }) => ({
      assignSelectedDropdownOpen: !assignSelectedDropdownOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onResetModal", () => this.setState({
      sourceFilters: [],
      difficultyFilters: [],
      subjectFilters: [],
      typeFilters: [],
      sort: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", (titleFilter, value) => this.setState({
      [titleFilter]: value
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", titleFilter => this.setState({
      [titleFilter]: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(this, "onSortWorksheets", worksheets => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'difficulty':
          return worksheets.sort(sortOptions["a" /* difficultySort */]);

        case 'problems':
          return worksheets.sort(sortOptions["c" /* problemSort */]);

        case 'timeEstimate':
          return worksheets.sort(sortOptions["e" /* timeEstimateSort */]);

        case 'subject':
          return worksheets.sort(sortOptions["d" /* subjectSort */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByTitle", () => {
      const {
        worksheets,
        titleFilter
      } = this.state;
      return worksheets.reduce((finalArr, currentWorksheet) => {
        const {
          title
        } = currentWorksheet;
        const worksheetString = title.replace(/\s/g, "").toLowerCase();

        if (worksheetString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByUnit", () => {
      const {
        worksheets,
        unitFilter
      } = this.state;
      return worksheets.reduce((finalArr, currentWorksheet) => {
        const {
          unit
        } = currentWorksheet;
        const worksheetString = unit.replace(/\s/g, "").toLowerCase();

        if (worksheetString.indexOf(unitFilter) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
          finalArr.push(currentWorksheet);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterWorksheets", () => {
      const {
        subjectFilters,
        typeFilters,
        sourceFilters,
        difficultyFilters,
        worksheets: allWorksheets
      } = this.state;
      let worksheets = allWorksheets;

      if (subjectFilters.length) {
        worksheets = worksheets.filter(worksheet => subjectFilters.indexOf(worksheetSubjectMap[worksheet.subject]) !== -1);
      }

      if (typeFilters.length) {
        worksheets = worksheets.filter(worksheet => typeFilters.indexOf(worksheetTypeMap[worksheet.type]) !== -1);
      }

      if (sourceFilters.length) {
        worksheets = worksheets.filter(worksheet => sourceFilters.indexOf(worksheetSourceMap[worksheet.source]) !== -1);
      }

      if (difficultyFilters.length) {
        worksheets = worksheets.filter(worksheet => difficultyFilters.indexOf(worksheetDifficultyMap[worksheet.difficulty]) !== -1);
      }

      return worksheets;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableWorksheets", () => {
      const {
        subjectFilters,
        typeFilters,
        difficultyFilters,
        sourceFilters,
        sort,
        unitFilter,
        titleFilter,
        worksheets
      } = this.state;
      let mappableWorksheets = worksheets;

      if (titleFilter.length) {
        mappableWorksheets = this.onFilterByTitle();
      }

      if (unitFilter.length) {
        mappableWorksheets = this.onFilterByUnit();
      }

      if (subjectFilters.length || typeFilters.length || difficultyFilters.length || sourceFilters.length) {
        mappableWorksheets = this.onFilterWorksheets();
      }

      if (sort) {
        return this.onSortWorksheets(mappableWorksheets);
      }

      return mappableWorksheets;
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        sourceFilters: currentSourceFilters,
        difficultyFilters: currentDifficultyFilters,
        subjectFilters: currentSubjectFilters,
        typeFilters: currentTypeFilters
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'type':
          modifiedFilterCurrentState = currentTypeFilters;
          modifiedFilterName = 'typeFilters';
          break;

        case 'source':
          modifiedFilterCurrentState = currentSourceFilters;
          modifiedFilterName = 'sourceFilters';
          break;

        case 'difficulty':
          modifiedFilterCurrentState = currentDifficultyFilters;
          modifiedFilterName = 'difficultyFilters';
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

    Object(defineProperty["a" /* default */])(this, "handleWorksheetClick", worksheet => {
      const {
        selectedWorksheets
      } = this.state;
      let modifiedWorksheets;

      if (selectedWorksheets.indexOf(worksheet) === -1) {
        modifiedWorksheets = external_immutability_helper_default()(selectedWorksheets, {
          $push: [worksheet]
        });
      } else {
        const worksheetIndex = selectedWorksheets.indexOf(worksheet);
        modifiedWorksheets = external_immutability_helper_default()(selectedWorksheets, {
          $splice: [[worksheetIndex, 1]]
        });
      }

      this.setState({
        selectedWorksheets: modifiedWorksheets
      });
    });

    Object(defineProperty["a" /* default */])(this, "assignWorksheets", date => {
      const {
        onAssignWorksheets
      } = this.props;
      const {
        selectedWorksheets
      } = this.state;
      let assignDate;

      switch (date) {
        case 'today':
          assignDate = external_moment_default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = external_moment_default()().add(1, 'days').format('MM/DD/YY');
          break;

        case 'nextSession':
          break;

        case 'customDate':
          assignDate = '01/05/19';
          break;

        default:
          break;
      }

      this.onToggleAssignSelectedDropdown();
      onAssignWorksheets(selectedWorksheets, assignDate);
    });

    Object(defineProperty["a" /* default */])(this, "mapWorksheets", () => this.getMappableWorksheets().map((worksheet, index) => AssignWorksheetModal_jsx(components_WorksheetCard, {
      worksheet: worksheet,
      index: index,
      key: worksheet.id,
      onSetDropdown: this.onSetDropdown,
      onCloseDropdown: this.onCloseDropdown,
      dropdownIndex: this.state.dropdownIndex,
      dropdownIsOpen: this.state.dropdownIsOpen,
      handleWorksheetClick: this.handleWorksheetClick,
      selectedWorksheets: this.state.selectedWorksheets
    })));

    this.state = {
      sort: '',
      unitFilter: '',
      titleFilter: '',
      typeFilters: [],
      sourceFilters: [],
      subjectFilters: [],
      selectedWorksheets: [],
      difficultyFilters: [],
      worksheets: sampleWorksheets,
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      assignSelectedDropdownOpen,
      typeFilters,
      sourceFilters,
      subjectFilters,
      difficultyFilters,
      sort
    } = this.state;
    return AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574"
    }, open && AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "wrapper"
    }, AssignWorksheetModal_jsx("div", {
      style: {
        minWidth: "100%"
      },
      className: "jsx-2666520574" + " " + "card-modal card-main card switcher-section grey lighten-3"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "header-row card-panel light-blue lighten-1 white-text"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "card-panel-row row"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "col s11"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "d-flex"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "icon-col"
    }, AssignWorksheetModal_jsx("i", {
      className: "jsx-2666520574" + " " + "icon-sheets-w"
    })), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "card-panel-text"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "text-large"
    }, "Assign Worksheets")))), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "col s1 right-align"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "row icons-row"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-2666520574" + " " + "modal-close close"
    }, AssignWorksheetModal_jsx("i", {
      className: "jsx-2666520574" + " " + "icon-close-thin"
    })))))), AssignWorksheetModal_jsx(components_FilterSection, {
      sort: sort,
      typeFilters: typeFilters,
      sourceFilters: sourceFilters,
      subjectFilters: subjectFilters,
      difficultyFilters: difficultyFilters,
      onSetSort: this.onSetSort,
      onClearFilters: this.onResetModal,
      handleFilterClick: this.handleFilterClick,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState
    }), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "card-content"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "card-body"
    }, AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "result-row center-align"
    }, AssignWorksheetModal_jsx("b", {
      className: "jsx-2666520574" + " " + "result"
    }, " - ", this.getMappableWorksheets().length, " results -")), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "checkboxes-section row d-flex-content card-width-322"
    }, this.mapWorksheets())))), AssignWorksheetModal_jsx("div", {
      className: "jsx-2666520574" + " " + "add-btn-block"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      "data-target": "dropdown_assign_selected",
      onClick: this.onToggleAssignSelectedDropdown,
      className: "jsx-2666520574" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, AssignWorksheetModal_jsx("i", {
      className: "jsx-2666520574" + " " + "material-icons"
    }, "add"), " Assign Selected"), AssignWorksheetModal_jsx("ul", {
      id: "dropdown_assign_selected",
      style: {
        display: assignSelectedDropdownOpen ? 'block' : '0',
        opacity: assignSelectedDropdownOpen ? '1' : '0'
      },
      className: "jsx-2666520574" + " " + 'dropdown-content'
    }, AssignWorksheetModal_jsx("li", {
      className: "jsx-2666520574"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('today'),
      className: "jsx-2666520574"
    }, "For Today")), AssignWorksheetModal_jsx("li", {
      className: "jsx-2666520574"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('tomorrow'),
      className: "jsx-2666520574"
    }, "For Tomorrow")), AssignWorksheetModal_jsx("li", {
      className: "jsx-2666520574"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('nextSession'),
      className: "jsx-2666520574"
    }, "For Next Session")), AssignWorksheetModal_jsx("li", {
      className: "jsx-2666520574"
    }, AssignWorksheetModal_jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('customDate'),
      className: "jsx-2666520574"
    }, "For Date..."))))), AssignWorksheetModal_jsx(style_default.a, {
      id: "2666520574"
    }, [".card-modal.jsx-2666520574{margin:0;border-radius:6px;}", ".wrapper.jsx-2666520574{min-height:0px;}", ".modal-custom.jsx-2666520574{opacity:1;visibility:visible;}", ".modal-footer.jsx-2666520574{background-color:white;}"]));
  }

}

/* harmony default export */ var Modals_AssignWorksheetModal = __webpack_exports__["a"] = (AssignWorksheetModal_AssignWorksheetModal);

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "uzjx":
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

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

/***/ "wH9L":
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

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js

var __jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */



const sortByOptions = [{
  label: 'Page Number',
  value: 'pageNumber'
}, {
  label: 'Problems',
  value: 'problems'
}, {
  label: 'Time Estimate',
  value: 'timeEstimate'
}, {
  label: 'Subject',
  value: 'subject'
}];

class FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      titleFilter: '',
      unitFilter: ''
    }, this.props.onClearFilters));

    Object(defineProperty["a" /* default */])(this, "handleSearchChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(defineProperty["a" /* default */])(this, "submitSearchFilter", searchType => {
      const {
        onSetFilteredState,
        onUnsetFilteredState
      } = this.props;

      if (this.state[searchType] === '') {
        onUnsetFilteredState(searchType);
      }

      const transformedTitle = this.state[searchType].replace(/\s/g, "").toLowerCase();
      onSetFilteredState(searchType, transformedTitle);
    });

    this.state = {
      open: true,
      titleFilter: '',
      unitFilter: ''
    };
  }

  render() {
    const {
      handleFilterClick,
      subjectFilters,
      typeFilters,
      sort,
      onSetSort
    } = this.props;
    const {
      open,
      titleFilter,
      unitFilter
    } = this.state;
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
      id: "Reading",
      name: "Reading",
      checked: subjectFilters.indexOf('Reading') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "Reading"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "Writing",
      name: "Writing",
      checked: subjectFilters.indexOf('Writing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "Writing"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "Math",
      name: "Math",
      checked: subjectFilters.indexOf('Math') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "Math"
    }, "Math"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "challenge",
      name: "challenge",
      checked: typeFilters.indexOf('challenge') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "challenge"
    }, "Challenge + Practice")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "homework",
      name: "homework",
      checked: typeFilters.indexOf('homework') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "homework"
    }, "Homework Drill")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "readingFromWorkbook",
      name: "readingFromWorkbook",
      checked: typeFilters.indexOf('readingFromWorkbook') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('type', target.name)
    }), __jsx("label", {
      htmlFor: "readingFromWorkbook"
    }, "Reading from Workbook")))), __jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "titleFilter",
      name: "titleFilter",
      className: "input-control validate",
      value: titleFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: () => this.submitSearchFilter('titleFilter'),
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: titleFilter.length ? 'label active' : 'label',
      htmlFor: "titleFilter"
    }, "Search By Title"))), __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "unitFilter",
      name: "unitFilter",
      className: "input-control validate",
      value: unitFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: () => this.submitSearchFilter('unitFilter'),
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: unitFilter.length ? 'label active' : 'label',
      htmlFor: "unitFilter"
    }, "Search By Unit"))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 m6"
    }, __jsx("div", {
      className: "input-field",
      style: {
        marginBottom: '0',
        marginTop: '0'
      }
    }, __jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, sortByOptions),
      onChange: onSetSort,
      options: sortByOptions,
      label: "Sort By",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), __jsx("div", {
      className: "switcher-block col s12 l4"
    }, __jsx("div", {
      className: "view-switcher"
    }, __jsx("ul", {
      className: "switcher center-align"
    }, __jsx("li", {
      className: "active",
      "data-view": "view-full"
    }, __jsx("a", {
      href: "#"
    }, "Month View")), __jsx("li", {
      "data-view": "view-list"
    }, __jsx("a", {
      href: "#"
    }, "Day View"))))), __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "option-filters"
    }, __jsx("div", {
      className: "option-item clear"
    }, __jsx("a", {
      href: "#",
      onClick: this.onClearFilters
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
// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js

var LessonCard_jsx = external_react_default.a.createElement;


class LessonCard_LessonCard extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

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

    Object(defineProperty["a" /* default */])(this, "editLesson", () => console.warn('Pending implementation of edit modal/functionality'));

    Object(defineProperty["a" /* default */])(this, "cloneLesson", () => console.warn('Pending implementation of clone lesson functionality'));

    Object(defineProperty["a" /* default */])(this, "showOwner", () => console.warn('Pending implementation of show owner functionality'));

    Object(defineProperty["a" /* default */])(this, "deleteLesson", () => console.warn('Pending implementation of delete lesson functionality'));
  }

  render() {
    const {
      lesson,
      selectedLessons,
      handleLessonClick,
      index,
      dropdownIndex,
      dropdownIsOpen
    } = this.props;
    const {
      unit,
      title,
      subject,
      timeEstimate,
      problems,
      pageNumber,
      type
    } = lesson;
    return LessonCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, LessonCard_jsx("div", {
      className: "card-checkbox"
    }, LessonCard_jsx("input", {
      type: "checkbox",
      checked: selectedLessons.indexOf(lesson) !== -1,
      onChange: () => handleLessonClick(lesson)
    }), LessonCard_jsx("div", {
      className: "checkbox-card card-main card-lesson-detail card-assigned card"
    }, LessonCard_jsx("div", {
      className: "card-panel",
      style: {
        backgroundColor: '#666',
        color: '#fff'
      }
    }, LessonCard_jsx("div", {
      className: "card-panel-row row"
    }, LessonCard_jsx("div", {
      className: "icon-col col s2"
    }, LessonCard_jsx("span", {
      className: "block-icon"
    }, LessonCard_jsx("i", {
      className: "icon-books-l"
    }), LessonCard_jsx("span", {
      className: "text-icon"
    }, "Lesson"))), LessonCard_jsx("div", {
      className: "col s9"
    }, LessonCard_jsx("div", {
      className: "card-panel-text"
    }, LessonCard_jsx("div", {
      className: "text-small"
    }, unit), LessonCard_jsx("div", {
      className: "text-large"
    }, title), LessonCard_jsx("div", {
      className: "text-small"
    }, "Subject: ", subject))), LessonCard_jsx("div", {
      className: "align-top col s1 right-align"
    }, LessonCard_jsx("div", {
      className: "row icons-row"
    }, LessonCard_jsx("div", {
      className: "dropdown-block col"
    }, LessonCard_jsx("a", {
      href: "#",
      className: "dropdown-trigger btn",
      "data-target": "dropdown_lesson_01",
      onClick: this.handleDropdownClick
    }, LessonCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? LessonCard_jsx("ul", {
      id: "dropdown_lesson_01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, LessonCard_jsx("li", null, LessonCard_jsx("a", {
      href: "#",
      onClick: this.editLesson,
      className: "modal-trigger link-block"
    }, "Edit")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
      href: "#",
      onClick: this.cloneLesson
    }, "Clone")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
      href: "#",
      onClick: this.showOwner
    }, "Show Owner")), LessonCard_jsx("li", null, LessonCard_jsx("a", {
      href: "#",
      onClick: this.deleteLesson
    }, "Delete"))) : null))))), LessonCard_jsx("div", {
      className: "card-content"
    }, LessonCard_jsx("div", {
      className: "chart-container"
    }, LessonCard_jsx("div", {
      className: "chart-holder"
    }, LessonCard_jsx("span", {
      className: "svg-curved-bar",
      "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
      "data-duration": "1"
    }, LessonCard_jsx("svg", {
      width: "110px",
      height: "110px",
      viewBox: " 0 0 110 110"
    }, LessonCard_jsx("path", {
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#d6d6d6'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
    }), LessonCard_jsx("path", {
      "data-dinamic": true,
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#62b771'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
    }))), LessonCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#4d4d4d'
      }
    })), LessonCard_jsx("div", {
      className: "chart-description"
    }, LessonCard_jsx("dl", {
      className: "dl-horizontal"
    }, LessonCard_jsx("dt", null, "Time Est:"), LessonCard_jsx("dd", null, timeEstimate, " min")), LessonCard_jsx("dl", {
      className: "dl-horizontal"
    }, LessonCard_jsx("dt", null, "Problems:"), LessonCard_jsx("dd", null, problems)))), LessonCard_jsx("div", {
      className: "card-footer-row center-align"
    }, LessonCard_jsx("div", {
      className: "card-footer-holder"
    }, LessonCard_jsx("p", null, "p.", pageNumber, "  (", type, ")")))))));
  }

}

;
/* harmony default export */ var components_LessonCard = (LessonCard_LessonCard);
// CONCATENATED MODULE: ./components/Dashboard/utils/sampleLessons.js
/* harmony default export */ var sampleLessons = ([{
  id: 1,
  subject: 'Reading',
  timeEstimate: '14',
  unit: 'Reading Unit #2',
  title: 'Reading Something 1',
  type: 'Challenge + Practice',
  problems: '20',
  pageNumber: '128'
}, {
  id: 2,
  subject: 'Math',
  timeEstimate: '30',
  unit: 'Math Unit #4',
  title: 'Pythagorean Theorem',
  type: 'Challenge + Practice',
  problems: '16',
  pageNumber: '132'
}, {
  id: 3,
  subject: 'Reading',
  timeEstimate: '23',
  unit: 'Reading Unit #3',
  title: 'More Reading Stuff',
  type: 'Reading from Workbook',
  problems: '20',
  pageNumber: '141'
}, {
  id: 4,
  subject: 'Reading',
  timeEstimate: '31',
  unit: 'Reading Unit #6',
  title: 'Reading Someing 7',
  type: 'Challenge + Practice',
  problems: '17',
  pageNumber: '127'
}, {
  id: 5,
  subject: 'Reading',
  timeEstimate: '65',
  unit: 'Reading Unit #4',
  title: 'Reading Someing 4',
  type: 'Homework Drill',
  problems: '19',
  pageNumber: '120'
}, {
  id: 6,
  subject: 'Reading',
  timeEstimate: '50',
  unit: 'Reading Unit #9',
  title: 'Reading Someing 9',
  type: 'Challenge + Practice',
  problems: '22',
  pageNumber: '141'
}, {
  id: 7,
  subject: 'Reading',
  timeEstimate: '31',
  unit: 'Reading Unit #1',
  title: 'Reading Someing 1',
  type: 'Homework Drill',
  problems: '29',
  pageNumber: '136'
}, {
  id: 8,
  subject: 'Writing',
  timeEstimate: '48',
  unit: 'Writing Unit #5',
  title: 'Writing Lesson 5',
  type: 'Homework Drill',
  problems: '14',
  pageNumber: '117'
}, {
  id: 9,
  subject: 'Writing',
  timeEstimate: '48',
  unit: 'Writing Unit #5',
  title: 'Writing Lesson 5',
  type: 'Reading from Workbook',
  problems: '14',
  pageNumber: '117'
}]);
// EXTERNAL MODULE: ./components/Dashboard/utils/sortOptions.js
var sortOptions = __webpack_require__("IUQe");

// CONCATENATED MODULE: ./components/Dashboard/components/Modals/AssignLessonModal/index.js


var AssignLessonModal_jsx = external_react_default.a.createElement;







const lessonTypeMap = {
  'Challenge + Practice': 'challenge',
  'Homework Drill': 'homework',
  'Reading from Workbook': 'readingFromWorkbook'
};

class AssignLessonModal_AssignLessonModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onToggleAssignSelectedDropdown", () => this.setState(({
      assignSelectedDropdownOpen
    }) => ({
      assignSelectedDropdownOpen: !assignSelectedDropdownOpen
    })));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onResetModal", () => this.setState({
      subjectFilters: [],
      typeFilters: [],
      sort: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", (titleFilter, value) => this.setState({
      [titleFilter]: value
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", titleFilter => this.setState({
      [titleFilter]: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(defineProperty["a" /* default */])(this, "onSortLessons", lessons => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'pageNumber':
          return lessons.sort(sortOptions["b" /* pageNumberSort */]);

        case 'problems':
          return lessons.sort(sortOptions["c" /* problemSort */]);

        case 'timeEstimate':
          return lessons.sort(sortOptions["e" /* timeEstimateSort */]);

        case 'subject':
          return lessons.sort(sortOptions["d" /* subjectSort */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByTitle", () => {
      const {
        lessons,
        titleFilter
      } = this.state;
      return lessons.reduce((finalArr, currentLesson) => {
        const {
          title
        } = currentLesson;
        const lessonString = title.replace(/\s/g, "").toLowerCase();

        if (lessonString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
          finalArr.push(currentLesson);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByUnit", () => {
      const {
        lessons,
        unitFilter
      } = this.state;
      return lessons.reduce((finalArr, currentLesson) => {
        const {
          unit
        } = currentLesson;
        const lessonString = unit.replace(/\s/g, "").toLowerCase();

        if (lessonString.indexOf(unitFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
          finalArr.push(currentLesson);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterLessons", () => {
      const {
        subjectFilters,
        typeFilters,
        lessons: allLessons
      } = this.state;
      let lessons = allLessons;

      if (subjectFilters.length) {
        lessons = lessons.filter(lesson => subjectFilters.indexOf(lesson.subject) !== -1);
      }

      if (typeFilters.length) {
        lessons = lessons.filter(lesson => typeFilters.indexOf(lessonTypeMap[lesson.type]) !== -1);
      }

      return lessons;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableLessons", () => {
      const {
        subjectFilters,
        typeFilters,
        sort,
        unitFilter,
        titleFilter,
        lessons
      } = this.state;
      let mappableLessons = lessons;

      if (titleFilter.length) {
        mappableLessons = this.onFilterByTitle();
      }

      if (unitFilter.length) {
        mappableLessons = this.onFilterByUnit();
      }

      if (subjectFilters.length || typeFilters.length) {
        mappableLessons = this.onFilterLessons();
      }

      if (sort) {
        return this.onSortLessons(mappableLessons);
      }

      return mappableLessons;
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        subjectFilters: currentSubjectFilters,
        typeFilters: currentTypeFilters
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

      switch (filterType) {
        case 'subject':
          modifiedFilterCurrentState = currentSubjectFilters;
          modifiedFilterName = 'subjectFilters';
          break;

        case 'type':
          modifiedFilterCurrentState = currentTypeFilters;
          modifiedFilterName = 'typeFilters';
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

    Object(defineProperty["a" /* default */])(this, "handleLessonClick", lesson => {
      const {
        selectedLessons
      } = this.state;
      let modifiedLessons;

      if (selectedLessons.indexOf(lesson) === -1) {
        modifiedLessons = external_immutability_helper_default()(selectedLessons, {
          $push: [lesson]
        });
      } else {
        const lessonIndex = selectedLessons.indexOf(lesson);
        modifiedLessons = external_immutability_helper_default()(selectedLessons, {
          $splice: [[lessonIndex, 1]]
        });
      }

      this.setState({
        selectedLessons: modifiedLessons
      });
    });

    Object(defineProperty["a" /* default */])(this, "assignLessons", date => {
      const {
        onAssignLessons
      } = this.props;
      const {
        selectedLessons
      } = this.state;
      let assignDate;

      switch (date) {
        case 'today':
          assignDate = external_moment_default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = external_moment_default()().add(1, 'days').format('MM/DD/YY');
          break;

        case 'nextSession':
          break;

        case 'customDate':
          assignDate = '01/05/19';
          break;

        default:
          break;
      }

      this.onToggleAssignSelectedDropdown();
      this.onResetModal();
      onAssignLessons(selectedLessons, assignDate);
    });

    Object(defineProperty["a" /* default */])(this, "mapLessons", () => this.getMappableLessons().map((lesson, index) => AssignLessonModal_jsx(components_LessonCard, {
      lesson: lesson,
      index: index,
      key: lesson.id,
      onSetDropdown: this.onSetDropdown,
      onCloseDropdown: this.onCloseDropdown,
      dropdownIndex: this.state.dropdownIndex,
      dropdownIsOpen: this.state.dropdownIsOpen,
      handleLessonClick: this.handleLessonClick,
      selectedLessons: this.state.selectedLessons
    })));

    this.state = {
      sort: '',
      unitFilter: '',
      titleFilter: '',
      typeFilters: [],
      subjectFilters: [],
      selectedLessons: [],
      lessons: sampleLessons,
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false
    };
  }

  render() {
    const {
      open
    } = this.props;
    const {
      assignSelectedDropdownOpen,
      subjectFilters,
      typeFilters,
      sort
    } = this.state;
    return AssignLessonModal_jsx("div", {
      className: "jsx-4152893512"
    }, open && AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "wrapper"
    }, AssignLessonModal_jsx("div", {
      style: {
        minWidth: "100%"
      },
      className: "jsx-4152893512" + " " + "card-modal card-main card switcher-section grey lighten-3"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "header-row card-panel light-blue lighten-1 white-text"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "card-panel-row row"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "col s11"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "d-flex"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "icon-col"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-4152893512" + " " + "icon-books-l"
    })), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "card-panel-text"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "text-large"
    }, "Assign Lessons")))), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "col s1 right-align"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "row icons-row"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-4152893512" + " " + "modal-close close"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-4152893512" + " " + "icon-close-thin"
    })))))), AssignLessonModal_jsx(components_FilterSection, {
      sort: sort,
      typeFilters: typeFilters,
      subjectFilters: subjectFilters,
      onSetSort: this.onSetSort,
      onClearFilters: this.onResetModal,
      handleFilterClick: this.handleFilterClick,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState
    }), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "card-content"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "card-body"
    }, AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "result-row center-align"
    }, AssignLessonModal_jsx("b", {
      className: "jsx-4152893512" + " " + "result"
    }, " - ", this.getMappableLessons().length, " results -")), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "checkboxes-section row d-flex-content card-width-322"
    }, this.mapLessons())))), AssignLessonModal_jsx("div", {
      className: "jsx-4152893512" + " " + "add-btn-block"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSelectedDropdown,
      "data-target": "dropdown_assign_selected_lessons",
      className: "jsx-4152893512" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, AssignLessonModal_jsx("i", {
      className: "jsx-4152893512" + " " + "material-icons"
    }, "add"), " Assign Selected"), AssignLessonModal_jsx("ul", {
      id: "dropdown_assign_selected_lessons",
      style: {
        display: assignSelectedDropdownOpen ? 'block' : '0',
        opacity: assignSelectedDropdownOpen ? '1' : '0'
      },
      className: "jsx-4152893512" + " " + 'dropdown-content'
    }, AssignLessonModal_jsx("li", {
      className: "jsx-4152893512"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('today'),
      className: "jsx-4152893512"
    }, "For Today")), AssignLessonModal_jsx("li", {
      className: "jsx-4152893512"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('tomorrow'),
      className: "jsx-4152893512"
    }, "For Tomorrow")), AssignLessonModal_jsx("li", {
      className: "jsx-4152893512"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('nextSession'),
      className: "jsx-4152893512"
    }, "For Next Session")), AssignLessonModal_jsx("li", {
      className: "jsx-4152893512"
    }, AssignLessonModal_jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('customDate'),
      className: "jsx-4152893512"
    }, "For Date..."))))), AssignLessonModal_jsx(style_default.a, {
      id: "4152893512"
    }, [".card-modal.jsx-4152893512{margin:0;border-radius:6px;}", ".modal-custom.jsx-4152893512{opacity:1;visibility:visible;}", ".modal-footer.jsx-4152893512{background-color:white;}"]));
  }

}

/* harmony default export */ var Modals_AssignLessonModal = __webpack_exports__["a"] = (AssignLessonModal_AssignLessonModal);

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "xA6B":
/***/ (function(module, exports) {



/***/ }),

/***/ "zTv3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchStudentsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addNewStudentApi; });
/* unused harmony export updateStudentActivationApi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateStudentAddressApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateStudentCityApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateStudentEmailApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateStudentFirstNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateStudentLastNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateStudentPhoneApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateStudentStateApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateStudentZipApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteStudentApi; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = undefined;
const fetchStudentsApi = () => fetch(`${API_URL}/api/students`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
}).then(res => res.json()).then(({
  data
}) => {
  const formattedStudents = data.students.map(student => ({
    id: student.id,
    active: false,
    studentInformation: {
      firstName: student.first_name,
      lastName: student.last_name
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
      email: student.email
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
    }
  }));
  return formattedStudents;
});
const addNewStudentApi = student => {
  const {
    firstName: first_name,
    lastName: last_name,
    gender
  } = student.studentInformation;
  const {
    email
  } = student.emailAddress;
  const {
    state,
    addressLine1,
    addressLine2,
    city,
    phone,
    zipCode: zip
  } = student.contactInformation;
  const {
    locations
  } = student.location;
  const studentPayload = {
    first_name,
    last_name,
    email,
    gender,
    state,
    locations,
    phone,
    address: `${addressLine1}\n${addressLine2}`,
    city,
    zip
  };
  fetch(`${API_URL}/api/commands/create-student`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(studentPayload)
  }).then(res => res.json()).catch(err => err);
};
const updateStudentActivationApi = body => fetch(`${API_URL}/api/commands/update-student-activation`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentAddressApi = body => fetch(`${API_URL}/api/commands/update-student-address`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentCityApi = body => fetch(`${API_URL}/api/commands/update-student-city`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentEmailApi = body => fetch(`${API_URL}/api/commands/update-student-email`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentFirstNameApi = body => fetch(`${API_URL}/api/commands/update-student-first-name`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentLastNameApi = body => fetch(`${API_URL}/api/commands/update-student-last-name`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentPhoneApi = body => fetch(`${API_URL}/api/commands/update-student-phone`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentStateApi = body => fetch(`${API_URL}/api/commands/update-student-state`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentZipApi = body => fetch(`${API_URL}/api/commands/update-student-zip`, {
  method: 'PATCH',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const deleteStudentApi = id => fetch(`${API_URL}/api/commands/delete-student`, {
  method: "DELETE",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
    student_id: id
  })
}).then(res => res.json()).catch(err => err);
/* unused harmony default export */ var _unused_webpack_default_export = ([fetchStudentsApi, addNewStudentApi, deleteStudentApi, updateStudentActivationApi, updateStudentAddressApi, updateStudentCityApi, updateStudentEmailApi, updateStudentFirstNameApi, updateStudentLastNameApi, updateStudentPhoneApi, updateStudentStateApi, updateStudentZipApi]);

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