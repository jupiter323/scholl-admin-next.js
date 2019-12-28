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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "0sRR":
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

// EXTERNAL MODULE: ./components/Modal/index.js
var Modal = __webpack_require__("81xT");

// CONCATENATED MODULE: ./components/utils/getUserInitials.js
const getUserInitials = user => `${user.accountInfo.firstName[0]}${user.accountInfo.lastName[0]}`;
const getTutorInitials = user => `${user.firstName[0]}${user.lastName[0]}`;
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Location/components/UserRow/styles/index.js

const UserRowWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__UserRowWrapper",
  componentId: "mop4qd-0"
})(["background-color:", ";color:#fff;.user-circle{background-color:", ";color:#fff;}:hover{cursor:pointer;background-color:", ";.user-circle{background-color:", ";}}"], ({
  selected
}) => selected ? '#24645c' : '#31837a', ({
  selected
}) => selected ? '#24645c' : '#31837a', ({
  selected
}) => selected ? '#004a40!important' : '#24645c!important', ({
  selected
}) => selected ? '#004a40!important' : '#24645c!important');
/* harmony default export */ var styles = (UserRowWrapper);
// CONCATENATED MODULE: ./components/Location/components/UserRow/index.js
var __jsx = external_react_default.a.createElement;




const UserRow = ({
  user,
  onSelectUser,
  selectedUser
}) => __jsx(styles, {
  onClick: onSelectUser,
  className: "owner-box card-panel",
  selected: selectedUser && selectedUser.id === user.id
}, __jsx("div", {
  className: "card-panel-row row"
}, __jsx("div", {
  className: "col s10"
}, __jsx("div", {
  className: "user-block"
}, __jsx("div", {
  className: "user-circle"
}, __jsx("span", {
  className: "initials"
}, getTutorInitials(user))), __jsx("div", {
  className: "user-text",
  style: {
    color: '#fff'
  }
}, __jsx("h4", {
  className: "h3"
}, user.lastName, ", ", user.firstName), __jsx("a", {
  href: `mailto:${user.email}`
}, user.email)))), __jsx("div", {
  className: "col s2 right-align"
}, __jsx("span", {
  className: "block-icon"
}, __jsx("i", {
  className: "icon-owner"
}), __jsx("span", {
  className: "text-icon"
}, "Owner")))));

/* harmony default export */ var components_UserRow = (UserRow);
// CONCATENATED MODULE: ./components/Location/components/UserListModal/index.js


var UserListModal_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-array-index-key */





class UserListModal_UserListModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSelectUser", selectedUser => this.setState({
      selectedUser
    }));

    Object(defineProperty["a" /* default */])(this, "onSetUser", () => {
      const {
        selectedUser
      } = this.state;
      const {
        onSubmit,
        onClose
      } = this.props;
      onSubmit(selectedUser, 'owner', null);
      this.setState({
        selectedUser: null
      }, onClose);
    });

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      this.setState({
        selectedUser: null
      }, onClose);
    });

    Object(defineProperty["a" /* default */])(this, "mapUsers", () => this.props.userList.map((user, index) => UserListModal_jsx(components_UserRow, {
      user: user,
      key: index,
      index: index,
      onSelectUser: () => this.onSelectUser(user),
      selectedUser: this.state.selectedUser
    })));

    this.state = {
      selectedUser: null
    };
  }

  render() {
    const {
      open
    } = this.props;
    return UserListModal_jsx(external_react_default.a.Fragment, null, UserListModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "overlay"
    }, UserListModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCloseModal
    }, UserListModal_jsx("div", {
      id: "modal_Practice1",
      className: "jsx-318393204" + " " + "modal modal-custom modal-practice"
    }, UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "card-modal card-course card-main card"
    }, UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "card-panel green lighten-1 white-text"
    }, UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "card-panel-row row"
    }, UserListModal_jsx("div", {
      style: {
        flex: '1 0 83.333333%'
      },
      className: "jsx-318393204" + " " + "col"
    }, UserListModal_jsx("h1", {
      className: "jsx-318393204" + " " + "h1"
    }, "Assign Owner")), UserListModal_jsx("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-318393204" + " " + "col"
    }, UserListModal_jsx("a", {
      href: "#!",
      className: "jsx-318393204" + " " + "panel-link close modal-close"
    }, UserListModal_jsx("i", {
      className: "jsx-318393204" + " " + "icon-close"
    }))))), UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "card-content"
    }, UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "card-body"
    }, this.mapUsers()), UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "modal-footer"
    }, UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "row"
    }, UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "col s6"
    }, UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "meta-info"
    })), UserListModal_jsx("div", {
      className: "jsx-318393204" + " " + "col s6 right-align"
    }, UserListModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-318393204" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), UserListModal_jsx("a", {
      href: "#",
      onClick: this.onSetUser,
      style: {
        color: 'white'
      },
      className: "jsx-318393204" + " " + "btn"
    }, "Save"))))))))), UserListModal_jsx(style_default.a, {
      id: "318393204"
    }, ["h4.jsx-318393204{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", "p.jsx-318393204{font-size:16px;color:#343434;}", "p.passage.jsx-318393204{font-size:14px;}", "a.jsx-318393204{color:#343434;}", ".overlay.jsx-318393204{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".modal.jsx-318393204{display:block;background-color:transparent;position:absolute;top:10%;right:10%;left:10%;}", ".modal-custom.jsx-318393204{opacity:1;visibility:visible;}", ".modal-footer.jsx-318393204{background-color:white;}", ".modal-full-size.jsx-318393204{z-index:1999;width:100%;left:0;top:0;right:0;bottom:0;}"])));
  }

}

/* harmony default export */ var components_UserListModal = (UserListModal_UserListModal);
// CONCATENATED MODULE: ./components/Location/components/SelectedUserRow/styles/index.js

const SelectedUserRowWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SelectedUserRowWrapper",
  componentId: "sc-12bjge9-0"
})(["background-color:#31837a;color:#fff;.user-circle{background-color:#31837a;color:#fff;}:hover{cursor:pointer;background-color:#24645c!important;.user-circle{background-color:#24645c!important;}}"]);
/* harmony default export */ var SelectedUserRow_styles = (SelectedUserRowWrapper);
// CONCATENATED MODULE: ./components/Location/components/SelectedUserRow/index.js
var SelectedUserRow_jsx = external_react_default.a.createElement;




const SelectedUserRow = ({
  user,
  onOpenChangeModal
}) => SelectedUserRow_jsx(SelectedUserRow_styles, {
  onClick: onOpenChangeModal,
  className: "owner-box card-panel"
}, SelectedUserRow_jsx("div", {
  className: "card-panel-row row"
}, SelectedUserRow_jsx("div", {
  className: "col s10"
}, SelectedUserRow_jsx("div", {
  className: "user-block"
}, SelectedUserRow_jsx("div", {
  className: "user-circle"
}, SelectedUserRow_jsx("span", {
  className: "initials"
}, getTutorInitials(user))), SelectedUserRow_jsx("div", {
  className: "user-text",
  style: {
    color: '#fff'
  }
}, SelectedUserRow_jsx("h4", {
  className: "h3"
}, user.lastName, ", ", user.firstName), SelectedUserRow_jsx("a", {
  href: `mailto:${user.email}`
}, user.email)))), SelectedUserRow_jsx("div", {
  className: "col s2 right-align"
}, SelectedUserRow_jsx("span", {
  className: "block-icon"
}, SelectedUserRow_jsx("i", {
  className: "icon-owner"
}), SelectedUserRow_jsx("span", {
  className: "text-icon"
}, "Owner")))));

/* harmony default export */ var components_SelectedUserRow = (SelectedUserRow);
// CONCATENATED MODULE: ./components/Location/components/SharedModalComponents/OwnerSection/index.js
var OwnerSection_jsx = external_react_default.a.createElement;





const OwnerSection = ({
  owner,
  userList,
  handleDetailsChange,
  userListModalOpen,
  changeModalOpen,
  onOpenChangeModal,
  onCloseChangeModal,
  onOpenUserListModal,
  onCloseUserListModal
}) => OwnerSection_jsx(external_react_default.a.Fragment, null, OwnerSection_jsx(Modal["a" /* default */], {
  open: changeModalOpen,
  onClose: onCloseChangeModal,
  onConfirm: onOpenUserListModal,
  header: "Are You Sure?",
  body: "Do you want to change the owner for this location?"
}), OwnerSection_jsx(components_UserListModal, {
  open: userListModalOpen,
  onClose: onCloseUserListModal,
  userList: userList,
  onSubmit: handleDetailsChange
}), OwnerSection_jsx("div", {
  className: "card-block"
}, OwnerSection_jsx("h3", null, "Owner"), owner ? OwnerSection_jsx(components_SelectedUserRow, {
  user: owner,
  onOpenChangeModal: onOpenChangeModal
}) : OwnerSection_jsx("div", {
  className: "add-box"
}, OwnerSection_jsx("div", {
  className: "add-box-holder"
}, OwnerSection_jsx("a", {
  href: "#",
  onClick: onOpenUserListModal,
  className: "btn-floating waves-effect waves-light green lighten-1"
}, OwnerSection_jsx("i", {
  className: "material-icons"
}, "add"))))));

/* harmony default export */ var SharedModalComponents_OwnerSection = (OwnerSection);
// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationContactInfo/index.js
var LocationContactInfo = __webpack_require__("z6T/");

// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js
var LocationEmailSettings = __webpack_require__("QLkJ");

// EXTERNAL MODULE: ./components/Location/components/SharedModalComponents/LocationBranding/index.js
var LocationBranding = __webpack_require__("fSO3");

// CONCATENATED MODULE: ./components/Location/components/NewLocationModal/utils/sampleOwners.js
const sampleOwners = [{
  id: 1,
  firstName: 'Ben',
  lastName: 'Smith',
  email: 'ben-smith@gmail.com'
}, {
  id: 2,
  firstName: 'Christian',
  lastName: 'Chavarro',
  email: 'chavarro-christian@gmail.com'
}, {
  id: 3,
  firstName: 'John',
  lastName: 'Cena',
  email: 'john-cena@gmail.com'
}, {
  id: 4,
  firstName: 'Will',
  lastName: 'Smith',
  email: 'will.smith@gmail.com'
}, {
  id: 5,
  firstName: 'Arnold',
  lastName: 'Lumberjack',
  email: 'arnold-lumberjack@gmail.com'
}, {
  id: 6,
  firstName: 'Goofy',
  lastName: 'Dog',
  email: 'goofy.dog@gmail.com'
}];
/* harmony default export */ var utils_sampleOwners = (sampleOwners);
// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// CONCATENATED MODULE: ./components/Location/components/LocationDetailsModal/index.js


var LocationDetailsModal_jsx = external_react_default.a.createElement;

/* eslint-disable array-callback-return */









 // TODO: Render only one instance of this modal

class LocationDetailsModal_LocationDetailsModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalLocation || nextProps.location.id !== this.state.originalLocation.id) {
        const {
          location: {
            owner,
            id,
            locationContactInfo,
            locationEmailSettings,
            locationBranding
          } = {}
        } = nextProps;
        const updatedLocation = {
          owner,
          id,
          locationContactInfo,
          locationEmailSettings,
          locationBranding
        };
        const {
          originalLocation: originalLocationState
        } = this.state;
        const originalLocation = external_immutability_helper_default()(originalLocationState, {
          $merge: nextProps.location
        });
        this.setState({
          originalLocation,
          updatedLocation
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onOpenUserListModal", () => this.setState({
      userListModalOpen: true,
      changeModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseUserListModal", () => this.setState({
      userListModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenChangeModal", () => this.setState({
      changeModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseChangeModal", () => this.setState({
      changeModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(defineProperty["a" /* default */])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        updatedLocation
      } = this.state;
      const {
        onSaveLocationChanges,
        onSaveLocationError,
        onClose
      } = this.props; // const valid = true;

      const valid = await Object(fieldValidation["b" /* nestedEditFieldValidation */])(this.state, this.state.updatedLocation, this.onSetValidation, this.props.onSetLocationValidation);

      if (!valid) {
        return onSaveLocationError();
      }

      onSaveLocationChanges(updatedLocation);
      return onClose();
    });

    Object(defineProperty["a" /* default */])(this, "initialLocationMount", () => this.state.originalLocation.id !== this.props.location.id);

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, stateKey) => {
      const {
        updatedLocation: previousLocationState
      } = this.state;
      let value;

      if (event.hex) {
        value = event.hex;
      } else if (event.target) {
        value = event.target.value;
      } else {
        value = event;
      }

      let updatedLocation;

      if (name === 'owner') {
        updatedLocation = external_immutability_helper_default()(previousLocationState, {
          owner: {
            $set: event
          }
        });
      } else {
        updatedLocation = external_immutability_helper_default()(previousLocationState, {
          [stateKey]: {
            $merge: {
              [name]: value
            }
          }
        });
      }

      this.setState({
        updatedLocation
      });
    });

    this.state = {
      owner: null,
      userListModalOpen: false,
      changeModalOpen: false,
      originalLocation: {
        id: '',
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
      },
      updatedLocation: {
        id: '',
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
      },
      validation: {
        locationContactInfo: {
          locationName: true,
          locationNickname: true,
          locationEmail: true
        },
        locationEmailSettings: {
          automatedEmailOrigin: true,
          automatedEmailSalutation: true
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
  }

  componentDidMount() {
    const {
      location: {
        owner,
        id,
        locationContactInfo,
        locationEmailSettings,
        locationBranding
      } = {}
    } = this.props;
    const updatedLocation = {
      owner,
      id,
      locationContactInfo,
      locationEmailSettings,
      locationBranding
    };
    const {
      originalLocation: originalLocationState
    } = this.state;
    const originalLocation = external_immutability_helper_default()(originalLocationState, {
      $merge: updatedLocation
    });
    this.setState({
      originalLocation,
      updatedLocation
    }); // eslint-disable-line
  } // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
  // This resets the component state to reflect the details of the next user the user clicks on


  render() {
    const {
      open,
      onClose,
      location
    } = this.props;
    const {
      owner,
      locationContactInfo,
      locationEmailSettings,
      locationBranding
    } = location;
    const {
      updatedLocation: {
        owner: updatedOwner,
        locationContactInfo: updatedLocationContactInfo,
        locationEmailSettings: updatedLocationEmailSettings,
        locationBranding: updatedLocationBranding
      },
      validation: {
        locationContactInfo: locationContactInfoValidation,
        locationEmailSettings: locationEmailSettingsValidation,
        locationBranding: locationBrandingValidation
      },
      userListModalOpen,
      changeModalOpen
    } = this.state;
    return LocationDetailsModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && LocationDetailsModal_jsx("form", {
      className: "jsx-3756323712"
    }, LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "overlay"
    }, LocationDetailsModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      nestedModals: userListModalOpen || changeModalOpen,
      onOuterClick: onClose
    }, LocationDetailsModal_jsx("div", {
      id: "modal_location_create",
      className: "jsx-3756323712" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "card-modal card-main card grey lighten-3"
    }, LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "card-panel card-panel-title green lighten-1 white-text"
    }, LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "card-panel-row row"
    }, LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "col"
    }, LocationDetailsModal_jsx("h3", {
      className: "jsx-3756323712" + " " + "h2"
    }, LocationDetailsModal_jsx("span", {
      className: "jsx-3756323712" + " " + "heading-holder"
    }, LocationDetailsModal_jsx("span", {
      className: "jsx-3756323712" + " " + "heading-block"
    }, "Edit Location")))), LocationDetailsModal_jsx("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-3756323712" + " " + "col"
    }, LocationDetailsModal_jsx("span", {
      className: "jsx-3756323712" + " " + "block-icon"
    }, LocationDetailsModal_jsx("i", {
      className: "jsx-3756323712" + " " + "icon-location"
    }), LocationDetailsModal_jsx("span", {
      className: "jsx-3756323712" + " " + "text-icon"
    }, "Location"))))), LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "card-content"
    }, LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "card-body"
    }, LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "row mb-0"
    }, LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "col s12 l6"
    }, LocationDetailsModal_jsx(SharedModalComponents_OwnerSection, {
      owner: this.initialLocationMount() ? owner : updatedOwner,
      userList: utils_sampleOwners,
      handleDetailsChange: this.handleDetailsChange,
      userListModalOpen: userListModalOpen,
      changeModalOpen: changeModalOpen,
      onOpenUserListModal: this.onOpenUserListModal,
      onCloseUserListModal: this.onCloseUserListModal,
      onOpenChangeModal: this.onOpenChangeModal,
      onCloseChangeModal: this.onCloseChangeModal
    }), LocationDetailsModal_jsx(LocationContactInfo["a" /* default */], {
      state: this.initialLocationMount() ? locationContactInfo : updatedLocationContactInfo,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationContactInfoValidation,
      noColumn: true
    }), LocationDetailsModal_jsx(LocationEmailSettings["a" /* default */], {
      state: this.initialLocationMount() ? locationEmailSettings : updatedLocationEmailSettings,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationEmailSettingsValidation,
      noColumn: true
    })), LocationDetailsModal_jsx(LocationBranding["a" /* default */], {
      state: this.initialLocationMount() ? locationBranding : updatedLocationBranding,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationBrandingValidation
    }))), LocationDetailsModal_jsx("div", {
      className: "jsx-3756323712" + " " + "modal-footer"
    }, LocationDetailsModal_jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-3756323712" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), LocationDetailsModal_jsx("a", {
      href: "#",
      style: {
        color: 'white'
      },
      onClick: this.onSubmit,
      className: "jsx-3756323712" + " " + "btn"
    }, "Save")))))))), LocationDetailsModal_jsx(style_default.a, {
      id: "3756323712"
    }, ["h4.jsx-3756323712{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", "p.jsx-3756323712{font-size:16px;color:#343434;}", "p.passage.jsx-3756323712{font-size:14px;}", "a.jsx-3756323712{color:#343434;}", ".overlay.jsx-3756323712{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".modal.jsx-3756323712{display:block;background-color:transparent;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-footer.jsx-3756323712{background-color:white;}", ".modal-custom.jsx-3756323712{opacity:1;visibility:visible;}", ".modal-full-size.jsx-3756323712{z-index:999;width:100%;left:0;top:0;right:0;bottom:0;}"]));
  }

}

/* harmony default export */ var components_LocationDetailsModal = __webpack_exports__["a"] = (LocationDetailsModal_LocationDetailsModal);

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

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NKQE");


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

/***/ "81xT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Modal */
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Iwh");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("x4x+");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



class Modal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  // eslint-disable-line
  render() {
    const {
      open,
      onClose,
      onConfirm,
      header,
      body,
      fullScreen,
      problem,
      passage
    } = this.props;
    return __jsx("div", null, __jsx(_Portal__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      selector: "#modal"
    }, fullScreen ? open && __jsx("div", {
      className: "jsx-3014652839" + " " + "modal-full-size modal modal-custom open"
    }, __jsx("div", {
      className: "jsx-3014652839" + " " + "card-modal card-main card"
    }, __jsx("div", {
      className: "jsx-3014652839" + " " + "card-content"
    }, __jsx("p", {
      className: "jsx-3014652839" + " " + "passage"
    }, problem ? problem.problemText : passage.passageText), __jsx("p", {
      className: "jsx-3014652839" + " " + "passage"
    }, body)), __jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-3014652839" + " " + "modal-close close"
    }, __jsx("i", {
      className: "jsx-3014652839" + " " + "icon-close"
    })), __jsx("div", {
      className: "jsx-3014652839" + " " + "file-field-block"
    }, __jsx("div", {
      className: "jsx-3014652839" + " " + "info-block"
    }, __jsx("dl", {
      className: "jsx-3014652839"
    }, __jsx("dt", {
      className: "jsx-3014652839"
    }, "Problem:"), __jsx("dd", {
      className: "jsx-3014652839"
    }, problem ? problem.id : passage.id)), __jsx("dl", {
      className: "jsx-3014652839"
    }, __jsx("dt", {
      className: "jsx-3014652839"
    }, "Passage:"), __jsx("dd", {
      className: "jsx-3014652839"
    }, problem ? problem.pass : passage.id))), __jsx("div", {
      className: "jsx-3014652839" + " " + "file-field input-field"
    }, __jsx("div", {
      className: "jsx-3014652839" + " " + "file-path-wrapper"
    }, __jsx("input", {
      type: "text",
      value: "Video:  some_video.mpg",
      readOnly: "",
      className: "jsx-3014652839" + " " + "file-path"
    })), __jsx("div", {
      className: "jsx-3014652839" + " " + "buttons-row"
    }, __jsx("a", {
      className: "jsx-3014652839" + " " + "waves-effect waves-teal btn-flat blue-text text-darken-3"
    }, "Watch"), __jsx("span", {
      className: "jsx-3014652839" + " " + "waves-effect waves-teal btn-flat blue-text text-darken-3"
    }, __jsx("span", {
      className: "jsx-3014652839"
    }, "Upload"), __jsx("input", {
      type: "file",
      className: "jsx-3014652839"
    }))))))) : open && __jsx("div", {
      className: "jsx-3014652839" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      onOuterClick: onClose
    }, __jsx("div", {
      className: "jsx-3014652839" + " " + "modal"
    }, __jsx("div", {
      className: "jsx-3014652839" + " " + "modal-content"
    }, __jsx("h4", {
      className: "jsx-3014652839"
    }, header), __jsx("p", {
      className: "jsx-3014652839"
    }, body)), __jsx("div", {
      className: "jsx-3014652839" + " " + "modal-footer"
    }, __jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-3014652839" + " " + "modal-close waves-effect waves-green btn-flat"
    }, "Cancel"), __jsx("a", {
      href: "#!",
      onClick: onConfirm,
      className: "jsx-3014652839" + " " + "modal-close waves-effect waves-green btn-flat"
    }, "Confirm"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3014652839"
    }, ["h4.jsx-3014652839{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}", "p.jsx-3014652839{font-size:16px;color:#343434;}", "p.passage.jsx-3014652839{font-size:14px;}", "a.jsx-3014652839{color:#343434;}", ".overlay.jsx-3014652839{position:fixed!important;background-color:rgba(0,0,0,0.7)!important;top:0!important;right:0!important;bottom:0!important;left:0!important;z-index:9999!important;}", ".modal.jsx-3014652839{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-footer.jsx-3014652839{background-color:white;}", ".modal-full-size.jsx-3014652839{z-index:1999;width:100%;left:0;top:0;right:0;bottom:0;}"])));
  }

}
/* harmony default export */ __webpack_exports__["a"] = (Modal);

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

/***/ "NKQE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__("MWqi");

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

// CONCATENATED MODULE: ./components/Classes/components/ClassNavBar/index.js
var __jsx = external_react_default.a.createElement;


const ClassNavBar = ({
  active,
  onSetActivePage
}) => __jsx("nav", {
  className: "nav-additional"
}, __jsx("ul", {
  className: "menu-additional js-flex-nav",
  "data-more-text": "More"
}, __jsx("li", null, __jsx("a", {
  href: "#",
  onClick: () => onSetActivePage('summary'),
  className: active === 'summary' ? 'active' : ''
}, "Summary")), __jsx("li", null, __jsx("a", {
  href: "#",
  onClick: () => onSetActivePage('calendar'),
  className: active === 'calendar' ? 'active' : ''
}, "Calendar")), __jsx("li", null, __jsx("a", {
  href: "#",
  onClick: () => onSetActivePage('lessons'),
  className: active === 'lessons' ? 'active' : ''
}, "Lessons")), __jsx("li", null, __jsx("a", {
  href: "#",
  onClick: () => onSetActivePage('worksheets'),
  className: active === 'worksheets' ? 'active' : ''
}, "Worksheets")), __jsx("li", null, __jsx("a", {
  href: "#",
  onClick: () => onSetActivePage('testSections'),
  className: active === 'testSections' ? 'active' : ''
}, "Test Sections")), __jsx("li", null, __jsx("a", {
  href: "#",
  onClick: () => onSetActivePage('account'),
  className: active === 'account' ? 'active' : ''
}, "Account"))));

/* harmony default export */ var components_ClassNavBar = (ClassNavBar);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/FormComponents/Dropdown/index.js
var Dropdown = __webpack_require__("EABn");

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// CONCATENATED MODULE: ./components/Classes/utils/sortOptions.js
const sortByOptions = [{
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
const statusSort = ({
  status: statusA
}, {
  status: statusB
}) => {
  if (statusA > statusB) {
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
const percentageCompleteSort = ({
  percentageComplete: percentageCompleteA
}, {
  percentageComplete: percentageCompleteB
}) => {
  if (percentageCompleteA > percentageCompleteB) {
    return -1;
  }

  return 0;
};
/* harmony default export */ var sortOptions = (sortByOptions);
// CONCATENATED MODULE: ./components/Classes/TestSectionsPage/components/FilterSection/index.js

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
      subjectFilters,
      flagFilter,
      availableDateFilters,
      dueDateFilters
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
      id: "reading",
      name: "reading",
      checked: subjectFilters.indexOf('reading') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "reading"
    }, "Reading")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "writing",
      name: "writing",
      checked: subjectFilters.indexOf('writing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "writing"
    }, "Writing")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "math",
      name: "math",
      checked: subjectFilters.indexOf('math') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "math"
    }, "Math"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "future",
      name: "future",
      checked: availableDateFilters.indexOf('future') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "future"
    }, "Future")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "available",
      name: "available",
      checked: availableDateFilters.indexOf('available') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "available"
    }, "Available")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "complete",
      name: "complete",
      checked: availableDateFilters.indexOf('complete') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "complete"
    }, "Complete"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "hasReviewFlags",
      name: "hasReviewFlags",
      checked: flagFilter,
      onChange: ({
        target
      }) => handleFilterClick('hasFlags', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "hasReviewFlags"
    }, "Has Review Flags"))), FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueToday",
      name: "dueToday",
      checked: dueDateFilters.indexOf('dueToday') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "dueToday"
    }, "Due Today")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueNextSession",
      name: "dueNextSession",
      checked: dueDateFilters.indexOf('dueNextSession') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "dueNextSession"
    }, "Due By Next Session")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "dueThisWeek",
      name: "dueThisWeek",
      checked: dueDateFilters.indexOf('dueThisWeek') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "dueThisWeek"
    }, "Due this Week")), FilterSection_jsx("li", null, FilterSection_jsx("input", {
      type: "checkbox",
      id: "overdue",
      name: "overdue",
      checked: dueDateFilters.indexOf('overdue') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), FilterSection_jsx("label", {
      htmlFor: "overdue"
    }, "Overdue")))), FilterSection_jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, FilterSection_jsx("div", {
      className: "col s12 m4"
    }, FilterSection_jsx("div", {
      className: "search-field input-field"
    }, FilterSection_jsx("input", {
      type: "search",
      id: "test_version_search",
      className: "input-control validate",
      value: testVersionFilter,
      onChange: this.handleSearchChange
    }), FilterSection_jsx("button", {
      type: "submit",
      onClick: this.submitSearchFilter,
      className: "search-button"
    }, FilterSection_jsx("i", {
      className: "icon-search"
    })), FilterSection_jsx("label", {
      className: "label",
      htmlFor: "test_version_search"
    }, "Test Version"))))), FilterSection_jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, FilterSection_jsx("div", {
      className: "col s12 l4"
    }, FilterSection_jsx("div", {
      className: "row mb-0"
    }, FilterSection_jsx("div", {
      className: "col s12 xl7"
    }, FilterSection_jsx("div", {
      className: "input-field",
      style: {
        marginBottom: '10px',
        marginTop: '0'
      }
    }, FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, sortOptions),
      onChange: onSetSort,
      options: sortOptions,
      label: "Sort By",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), FilterSection_jsx("div", {
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
    }, open ? 'Hide Filters' : 'Open Filters')))))))));
  }

}

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// CONCATENATED MODULE: ./components/Classes/utils/testSectionCardUtils.js
const data = (percentage, status) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [graphColorMap[status], '#eaeaea']
  }]
});
const subjectMap = {
  'Math': 'Math (calculator)',
  'Writing': 'Writing',
  'Reading': 'Reading'
};
const testSectionCardColorMap = {
  'Developing': 'badge badge-rounded-md purple white-text',
  'Assigned': 'badge badge-rounded-md purple white-text',
  'Exemplary': 'badge badge-rounded-md blue accent-4 white-text'
};
const graphColorMap = {
  'Developing': '#c10078',
  'Assigned': '#c10078',
  'Exemplary': '#0064f4'
};
const testSectionSubjectMap = {
  'Reading': 'reading',
  'Writing': 'writing',
  'Math': 'math'
};
// CONCATENATED MODULE: ./components/Classes/TestSectionsPage/components/TestSectionCard/index.js

var TestSectionCard_jsx = external_react_default.a.createElement;




class TestSectionCard_TestSectionCard extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "viewTestSectionDetails", () => console.warn('Pending implementation of view test section details functionality'));

    Object(defineProperty["a" /* default */])(this, "dismissFlags", () => console.warn('Pending implementation of dismiss flags functionality'));

    Object(defineProperty["a" /* default */])(this, "resetTestSection", () => console.warn('Pending implementation of reset test section functionality'));

    Object(defineProperty["a" /* default */])(this, "deleteTestSection", () => console.warn('Pending implementation of delete test section functionality'));

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

    Object(defineProperty["a" /* default */])(this, "renderFlags", () => {
      const {
        testSection: {
          flags
        }
      } = this.props;

      if (flags.length) {
        return TestSectionCard_jsx("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, TestSectionCard_jsx("b", {
          className: "badge-text"
        }, flags.length), " ", TestSectionCard_jsx("i", {
          className: "icon-flag"
        }));
      }

      return null;
    });

    this.state = {
      open: true
    };
  }

  render() {
    const {
      testSection,
      dropdownIsOpen,
      dropdownIndex,
      index
    } = this.props;
    const {
      subject,
      timeEstimate,
      version,
      availableDate,
      dueDate,
      problems,
      disabled,
      status,
      percentageComplete
    } = testSection;
    return TestSectionCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, TestSectionCard_jsx("div", {
      className: disabled ? 'card-main test-card card-disabled card' : 'card-main test-card card'
    }, TestSectionCard_jsx("div", {
      className: "card-panel panel-border"
    }, TestSectionCard_jsx("div", {
      className: "card-panel-row row"
    }, TestSectionCard_jsx("div", {
      className: "icon-col col s2"
    }, TestSectionCard_jsx("span", {
      className: "block-icon"
    }, TestSectionCard_jsx("i", {
      className: "icon-assign-section"
    }), TestSectionCard_jsx("span", {
      className: "text-icon"
    }, "Assigned ", TestSectionCard_jsx("br", null), "Test Section"))), TestSectionCard_jsx("div", {
      className: "col s8"
    }, TestSectionCard_jsx("div", {
      className: "card-panel-text"
    }, TestSectionCard_jsx("div", {
      className: "text-large truncate"
    }, subjectMap[subject], " Section"), TestSectionCard_jsx("div", {
      className: "text-small truncate"
    }, "Version: ", version))), TestSectionCard_jsx("div", {
      className: "position-top right-align"
    }, TestSectionCard_jsx("div", {
      className: "icons-row"
    }, this.renderFlags(), TestSectionCard_jsx("div", {
      className: "dropdown-block col"
    }, TestSectionCard_jsx("a", {
      href: "#",
      "data-target": "dropdown01",
      className: "dropdown-trigger btn",
      onClick: this.handleDropdownClick
    }, TestSectionCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? TestSectionCard_jsx("ul", {
      id: "dropdown01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, TestSectionCard_jsx("li", null, TestSectionCard_jsx("a", {
      href: "#",
      onClick: this.viewTestSectionDetails,
      className: "modal-trigger link-block"
    }, "View Details")), TestSectionCard_jsx("li", null, TestSectionCard_jsx("a", {
      href: "#",
      onClick: this.dismissFlags
    }, "Dismiss Flags")), TestSectionCard_jsx("li", null, TestSectionCard_jsx("a", {
      href: "#",
      onClick: this.resetTestSection
    }, "Reset")), TestSectionCard_jsx("li", null, TestSectionCard_jsx("a", {
      href: "#",
      onClick: this.deleteTestSection,
      className: "link-delete"
    }, "Delete"))) : null))))), TestSectionCard_jsx("div", {
      className: "card-content"
    }, TestSectionCard_jsx("div", {
      className: "d-flex sameheight-all row mb-0"
    }, TestSectionCard_jsx("div", {
      className: "col s6"
    }, TestSectionCard_jsx("div", {
      className: "chart-container"
    }, TestSectionCard_jsx("div", {
      className: "chart-holder"
    }, TestSectionCard_jsx(external_react_chartjs_2_["Doughnut"], {
      data: () => data(percentageComplete, status),
      options: {
        circumference: 1 * Math.PI,
        rotation: 1 * Math.PI,
        cutoutPercentage: 60,
        tooltips: false
      }
    }), TestSectionCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: graphColorMap[status]
      }
    }, TestSectionCard_jsx("span", {
      "data-count-up": true,
      "data-start-val": "0",
      "data-end-val": "96",
      "data-duration": "1"
    }), TestSectionCard_jsx("span", {
      className: "percentage"
    }, percentageComplete, "%"))), TestSectionCard_jsx("div", {
      className: "chart-row"
    }, TestSectionCard_jsx("div", {
      className: "chart-col chart-start"
    }, "\xA0"), TestSectionCard_jsx("div", {
      className: "chart-col chart-end"
    }, TestSectionCard_jsx("span", {
      className: "amount",
      style: {
        color: graphColorMap[status]
      }
    }, problems))), TestSectionCard_jsx("div", {
      className: "chart-description"
    }, TestSectionCard_jsx("dl", {
      className: "dl-horizontal"
    }, TestSectionCard_jsx("dt", null, "Time Est:"), TestSectionCard_jsx("dd", null, timeEstimate, " min")), TestSectionCard_jsx("dl", {
      className: "dl-horizontal"
    }, TestSectionCard_jsx("dt", null, "Problems:"), TestSectionCard_jsx("dd", null, problems))))), TestSectionCard_jsx("div", {
      className: "col s6 right-align justify-end"
    }, TestSectionCard_jsx("div", {
      className: "chart-description"
    }, TestSectionCard_jsx("dl", {
      className: "dl-horizontal"
    }, TestSectionCard_jsx("dt", null, "Available:"), TestSectionCard_jsx("dd", null, TestSectionCard_jsx("time", {
      dateTime: "2018-12-15"
    }, availableDate))), TestSectionCard_jsx("dl", {
      className: "dl-horizontal"
    }, TestSectionCard_jsx("dt", null, "Due:"), TestSectionCard_jsx("dd", null, TestSectionCard_jsx("time", {
      dateTime: "2018-12-15"
    }, dueDate)))), TestSectionCard_jsx("div", {
      className: "align-self-end"
    }, TestSectionCard_jsx("span", {
      className: testSectionCardColorMap[status]
    }, status)))))));
  }

}

/* harmony default export */ var components_TestSectionCard = (TestSectionCard_TestSectionCard);
// CONCATENATED MODULE: ./components/Classes/utils/sampleTestSections.js
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
// CONCATENATED MODULE: ./components/Classes/TestSectionsPage/index.js

var TestSectionsPage_jsx = external_react_default.a.createElement;









class TestSectionsPage_TestSectionsPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      sort: '',
      testVersionFilter: '',
      subjectFilters: [],
      flagFilter: false,
      availableDateFilters: [],
      dueDateFilters: []
    }));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", value => this.setState({
      testVersionFilter: value
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", () => this.setState({
      testVersionFilter: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSortTestSections", testSections => {
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

    Object(defineProperty["a" /* default */])(this, "onFilterByTestVersion", () => {
      const {
        testSections,
        testVersionFilter
      } = this.state;
      return testSections.reduce((finalArr, currentTestSection) => {
        const {
          version
        } = currentTestSection;
        const testSectionString = version.replace(/\s/g, "").toLowerCase();

        if (testSectionString.indexOf(testVersionFilter) !== -1 && finalArr.indexOf(currentTestSection) === -1) {
          finalArr.push(currentTestSection);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByDate", (incomingSections, dateType) => {
      const {
        dueDateFilters,
        availableDateFilters
      } = this.state;
      let dateFilters;
      let testSections = incomingSections;
      const currentDate = external_moment_default()().format('MM/DD/YY');
      const currentDateIndex = new Date().getDay();
      const endOfWeekIndex = 6 - currentDateIndex;
      const endOfWeekDate = external_moment_default()().add(endOfWeekIndex, 'days').format('MM/DD/YY');

      if (dateType === 'dueDate') {
        dateFilters = dueDateFilters;

        if (dateFilters.indexOf('dueToday') !== -1) {
          testSections = testSections.filter(testSection => testSection.dueDate === currentDate);
        }

        if (dateFilters.indexOf('dueNextSession') !== -1) {
          console.warn('Pending decision on how next session date is calculated');
        }

        if (dateFilters.indexOf('overdue') !== -1) {
          testSections = testSections.filter(testSection => testSection.dueDate < currentDate);
        }

        if (dateFilters.indexOf('dueThisWeek') !== -1) {
          testSections = testSections.filter(testSection => testSection.dueDate >= currentDate && testSection.dueDate <= endOfWeekDate);
        }
      } else {
        dateFilters = availableDateFilters;

        if (dateFilters.indexOf('future') !== -1) {
          testSections = testSections.filter(testSection => testSection.availableDate > currentDate);
        }

        if (dateFilters.indexOf('available') !== -1) {
          testSections = testSections.filter(testSection => testSection.availableDate <= currentDate);
        }

        if (dateFilters.indexOf('complete') !== -1) {
          testSections = testSections.filter(testSection => testSection.percentageComplete === '100');
        }
      }

      return testSections;
    });

    Object(defineProperty["a" /* default */])(this, "onFilterTestSections", () => {
      const {
        subjectFilters,
        dueDateFilters,
        availableDateFilters,
        flagFilter,
        testSections: allTestSections
      } = this.state;
      let testSections = allTestSections;

      if (subjectFilters.length) {
        testSections = testSections.filter(testSection => subjectFilters.indexOf(testSectionSubjectMap[testSection.subject]) !== -1);
      }

      if (dueDateFilters.length) {
        testSections = this.onFilterByDate(testSections, 'dueDate');
      }

      if (availableDateFilters.length) {
        testSections = this.onFilterByDate(testSections, 'availableDate');
      }

      if (flagFilter) {
        testSections = testSections.filter(testSection => testSection.flags.length);
      }

      return testSections;
    });

    Object(defineProperty["a" /* default */])(this, "getMappableTestSections", () => {
      const {
        subjectFilters,
        dueDateFilters,
        availableDateFilters,
        flagFilter,
        sort,
        testVersionFilter,
        testSections
      } = this.state;
      let mappableTestSections = testSections;

      if (testVersionFilter.length) {
        mappableTestSections = this.onFilterByTestVersion();
      }

      if (subjectFilters.length || dueDateFilters.length || availableDateFilters.length || flagFilter) {
        mappableTestSections = this.onFilterTestSections();
      }

      if (sort) {
        return this.onSortTestSections(mappableTestSections);
      }

      return mappableTestSections;
    });

    Object(defineProperty["a" /* default */])(this, "handleFilterClick", (filterType, filter) => {
      const {
        availableDateFilters: currentAvailableDateFilters,
        dueDateFilters: currentDueDateFilters,
        subjectFilters: currentSubjectFilters,
        flagFilter
      } = this.state;
      let modifiedFilterCurrentState;
      let modifiedFilterName;
      let modifiedFilterUpdatedState;

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

    Object(defineProperty["a" /* default */])(this, "mapTestSections", () => this.getMappableTestSections().map((testSection, index) => TestSectionsPage_jsx(components_TestSectionCard, {
      index: index,
      key: testSection.id,
      testSection: testSection,
      onSetDropdown: this.onSetDropdown,
      onCloseDropdown: this.onCloseDropdown,
      dropdownIndex: this.state.dropdownIndex,
      dropdownIsOpen: this.state.dropdownIsOpen
    })));

    this.state = {
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
  }

  render() {
    const {
      testSections
    } = this.state;
    return TestSectionsPage_jsx(external_react_default.a.Fragment, null, TestSectionsPage_jsx(components_FilterSection, {
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
    }), TestSectionsPage_jsx("div", {
      className: "content-section"
    }, TestSectionsPage_jsx("div", {
      className: "result-row center-align"
    }, TestSectionsPage_jsx("b", {
      className: "result"
    }, " - ", testSections.length, " results -")), TestSectionsPage_jsx("div", {
      className: "row d-flex-content card-width-272"
    }, this.mapTestSections())));
  }

}

/* harmony default export */ var Classes_TestSectionsPage = (TestSectionsPage_TestSectionsPage);
// CONCATENATED MODULE: ./components/Classes/DetailSummaryPage/components/ClassAverages/utils/index.js
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
// CONCATENATED MODULE: ./components/Classes/DetailSummaryPage/components/ClassAverages/index.js
var ClassAverages_jsx = external_react_default.a.createElement;



const ClassAverages = ({
  state: {
    questionsAnswered,
    flaggedProblems,
    timeLoggedIn,
    videoWatched,
    notesTaken,
    onTimePercentage
  }
}) => ClassAverages_jsx("div", {
  className: "card-block"
}, ClassAverages_jsx("h2", null, "Class Averages"), ClassAverages_jsx("ul", {
  className: "alerts-list list-three-columns"
}, ClassAverages_jsx("li", {
  className: "card card-alert"
}, ClassAverages_jsx("span", {
  className: "icon-box purple darken-3"
}, ClassAverages_jsx("i", {
  className: "icon-pencil2"
})), ClassAverages_jsx("div", {
  className: "alert-text purple-text text-darken-3"
}, ClassAverages_jsx("p", null, ClassAverages_jsx("b", null, "Questions Answered")), ClassAverages_jsx("div", {
  className: "value"
}, ClassAverages_jsx("b", {
  className: "text-large"
}, questionsAnswered)))), ClassAverages_jsx("li", {
  className: "card card-alert"
}, ClassAverages_jsx("span", {
  className: "icon-box icon-box pink darken-3"
}, ClassAverages_jsx("i", {
  className: "icon-flag"
})), ClassAverages_jsx("div", {
  className: "alert-text pink-text text-darken-3"
}, ClassAverages_jsx("p", null, ClassAverages_jsx("b", null, "Flagged Problems")), ClassAverages_jsx("div", {
  className: "value"
}, ClassAverages_jsx("b", {
  className: "text-large"
}, flaggedProblems)))), ClassAverages_jsx("li", {
  className: "card card-alert"
}, ClassAverages_jsx("span", {
  className: "icon-box icon-box green darken-3"
}, ClassAverages_jsx("i", {
  className: "icon-clock"
})), ClassAverages_jsx("div", {
  className: "alert-text green-text text-darken-3"
}, ClassAverages_jsx("p", null, ClassAverages_jsx("b", null, "Time Logged In")), ClassAverages_jsx("div", {
  className: "value"
}, formatTimeLoggedIn(timeLoggedIn)))), ClassAverages_jsx("li", {
  className: "card card-alert alert-blue-dark"
}, ClassAverages_jsx("span", {
  className: "icon-box cyan darken-2"
}, ClassAverages_jsx("i", {
  className: "icon-videocam"
})), ClassAverages_jsx("div", {
  className: "alert-text cyan-text text-darken-2"
}, ClassAverages_jsx("p", null, ClassAverages_jsx("b", null, "Video Watched")), ClassAverages_jsx("div", {
  className: "value"
}, formatVideoWatched(videoWatched)))), ClassAverages_jsx("li", {
  className: "card card-alert"
}, ClassAverages_jsx("span", {
  className: "icon-box orange darken-2"
}, ClassAverages_jsx("i", {
  className: "icon-note"
})), ClassAverages_jsx("div", {
  className: "alert-text orange-text text-darken-2"
}, ClassAverages_jsx("p", null, ClassAverages_jsx("b", null, "Notes Taken")), ClassAverages_jsx("div", {
  className: "value"
}, ClassAverages_jsx("b", {
  className: "text-large"
}, notesTaken)))), ClassAverages_jsx("li", {
  className: "card card-alert"
}, ClassAverages_jsx("span", {
  className: "icon-box red"
}, ClassAverages_jsx("i", {
  className: "icon-bell"
})), ClassAverages_jsx("div", {
  className: "alert-text red-text"
}, ClassAverages_jsx("p", null, ClassAverages_jsx("b", null, "On-Time Percentage")), ClassAverages_jsx("div", {
  className: "value"
}, ClassAverages_jsx("b", {
  className: "text-large"
}, onTimePercentage, "%"))))));

/* harmony default export */ var components_ClassAverages = (ClassAverages);
// CONCATENATED MODULE: ./components/Classes/DetailSummaryPage/components/ScoreImprovement/index.js
var ScoreImprovement_jsx = external_react_default.a.createElement;


const ScoreImprovement = ({
  state: {
    points,
    readingAndWriting,
    math,
    noGain,
    from0To50,
    from50To99,
    from100To149,
    from150To199,
    from200Plus
  }
}) => ScoreImprovement_jsx("div", {
  className: "card-block"
}, ScoreImprovement_jsx("h2", null, "Score Improvement"), ScoreImprovement_jsx("div", {
  className: "two-columns-sameheight row mb-0"
}, ScoreImprovement_jsx("div", {
  className: "col s12 xl6"
}, ScoreImprovement_jsx("div", {
  className: "card-main-full card"
}, ScoreImprovement_jsx("div", {
  className: "card-content"
}, ScoreImprovement_jsx("ul", {
  className: "points-list-custom"
}, ScoreImprovement_jsx("li", {
  className: "point-custom-xlarge style-aqua"
}, ScoreImprovement_jsx("span", {
  className: "badge-circle"
}, points, " ", ScoreImprovement_jsx("span", {
  className: "badge-text"
}, "points"))), ScoreImprovement_jsx("li", null, ScoreImprovement_jsx("ul", null, ScoreImprovement_jsx("li", {
  className: "point-custom-114 style-green-light"
}, ScoreImprovement_jsx("span", {
  className: "badge-circle"
}, "+", readingAndWriting, " ", ScoreImprovement_jsx("span", {
  className: "badge-text"
}, "Reading & Writing"))), ScoreImprovement_jsx("li", {
  className: "point-custom-114 style-blue-lightdark"
}, ScoreImprovement_jsx("span", {
  className: "badge-circle"
}, math, " ", ScoreImprovement_jsx("span", {
  className: "badge-text"
}, "Math"))))))))), ScoreImprovement_jsx("div", {
  className: "col s12 xl6"
}, ScoreImprovement_jsx("div", {
  className: "card-main-full card"
}, ScoreImprovement_jsx("div", {
  className: "card-content"
}, ScoreImprovement_jsx("ul", {
  className: "vertical-graphs-container"
}, ScoreImprovement_jsx("li", {
  className: "vertical-graph-block"
}, ScoreImprovement_jsx("div", {
  className: "vertical-graph-frame"
}, ScoreImprovement_jsx("span", {
  className: "vertical-graph"
}, ScoreImprovement_jsx("span", {
  className: "graph-value"
}, noGain, "%"), ScoreImprovement_jsx("span", {
  className: "vertical-graph-box red darken-1",
  style: {
    height: `${noGain}%`
  }
})), ScoreImprovement_jsx("span", {
  className: "graph-legend"
}, "no gain"))), ScoreImprovement_jsx("li", {
  className: "vertical-graph-block"
}, ScoreImprovement_jsx("div", {
  className: "vertical-graph-frame"
}, ScoreImprovement_jsx("span", {
  className: "vertical-graph"
}, ScoreImprovement_jsx("span", {
  className: "graph-value"
}, from0To50, "%"), ScoreImprovement_jsx("span", {
  className: "vertical-graph-box pink darken-3",
  style: {
    height: `${from0To50}%`
  }
})), ScoreImprovement_jsx("span", {
  className: "graph-legend"
}, "0 to 50 ", ScoreImprovement_jsx("br", null), "points"))), ScoreImprovement_jsx("li", {
  className: "vertical-graph-block"
}, ScoreImprovement_jsx("div", {
  className: "vertical-graph-frame"
}, ScoreImprovement_jsx("span", {
  className: "vertical-graph"
}, ScoreImprovement_jsx("span", {
  className: "graph-value"
}, from50To99, "%"), ScoreImprovement_jsx("span", {
  className: "vertical-graph-box purple accent-4",
  style: {
    height: `${from50To99}%`
  }
})), ScoreImprovement_jsx("span", {
  className: "graph-legend"
}, "50 to 99 ", ScoreImprovement_jsx("br", null), "points"))), ScoreImprovement_jsx("li", {
  className: "vertical-graph-block"
}, ScoreImprovement_jsx("div", {
  className: "vertical-graph-frame"
}, ScoreImprovement_jsx("span", {
  className: "vertical-graph"
}, ScoreImprovement_jsx("span", {
  className: "graph-value"
}, from100To149, "%"), ScoreImprovement_jsx("span", {
  className: "vertical-graph-box purple darken-3",
  style: {
    height: `${from100To149}%`
  }
})), ScoreImprovement_jsx("span", {
  className: "graph-legend"
}, "100-149 ", ScoreImprovement_jsx("br", null), "points"))), ScoreImprovement_jsx("li", {
  className: "vertical-graph-block"
}, ScoreImprovement_jsx("div", {
  className: "vertical-graph-frame"
}, ScoreImprovement_jsx("span", {
  className: "vertical-graph"
}, ScoreImprovement_jsx("span", {
  className: "graph-value"
}, from150To199, "%"), ScoreImprovement_jsx("span", {
  className: "vertical-graph-box  deep-purple accent-4",
  style: {
    height: `${from150To199}%`
  }
})), ScoreImprovement_jsx("span", {
  className: "graph-legend"
}, "150-199 ", ScoreImprovement_jsx("br", null), "points"))), ScoreImprovement_jsx("li", {
  className: "vertical-graph-block"
}, ScoreImprovement_jsx("div", {
  className: "vertical-graph-frame"
}, ScoreImprovement_jsx("span", {
  className: "vertical-graph"
}, ScoreImprovement_jsx("span", {
  className: "graph-value"
}, from200Plus, "%"), ScoreImprovement_jsx("span", {
  className: "vertical-graph-box  indigo accent-4",
  style: {
    height: `${from200Plus}%`
  }
})), ScoreImprovement_jsx("span", {
  className: "graph-legend"
}, "200+ ", ScoreImprovement_jsx("br", null), "points")))))))));

/* harmony default export */ var components_ScoreImprovement = (ScoreImprovement);
// CONCATENATED MODULE: ./components/Classes/DetailSummaryPage/components/StudentsWhoHave/index.js
var StudentsWhoHave_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */


const StudentsWhoHave = ({
  state: {
    overdueCoursework,
    flaggedProblems,
    fewerThan2PracticeTests
  }
}) => {
  const {
    0: overdueSectionOpen,
    1: setOverdueSectionOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: flaggedSectionOpen,
    1: setFlaggedSectionOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: fewerThan2PracticeTestsOpen,
    1: setFewerThan2PracticeTestsOpen
  } = Object(external_react_["useState"])(false);
  return StudentsWhoHave_jsx("div", {
    className: "card-block"
  }, StudentsWhoHave_jsx("h2", null, "Student Who Have..."), StudentsWhoHave_jsx("div", {
    className: "row"
  }, StudentsWhoHave_jsx("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, StudentsWhoHave_jsx("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, StudentsWhoHave_jsx("li", {
    className: overdueSectionOpen ? "pink-darken-2 pink-text text-darken-2 active" : "pink-darken-2 pink-text text-darken-2"
  }, StudentsWhoHave_jsx("div", {
    onClick: () => setOverdueSectionOpen(!overdueSectionOpen),
    className: "card card-alert collapsible-header"
  }, StudentsWhoHave_jsx("span", {
    className: "icon-box pink darken-2"
  }, StudentsWhoHave_jsx("i", {
    className: "icon-exclamation-mark"
  })), StudentsWhoHave_jsx("div", {
    className: "alert-text"
  }, StudentsWhoHave_jsx("p", null, StudentsWhoHave_jsx("b", null, "Overdue Coursework")), StudentsWhoHave_jsx("div", {
    className: "value"
  }, StudentsWhoHave_jsx("b", {
    className: "text-large"
  }, overdueCoursework.length))), StudentsWhoHave_jsx("span", {
    className: "collapsible-opener"
  }, StudentsWhoHave_jsx("i", {
    className: "custom-icon-traingle-down"
  }))), StudentsWhoHave_jsx("div", {
    className: "card-content collapsible-body",
    style: {
      display: overdueSectionOpen ? 'block' : ''
    }
  }, StudentsWhoHave_jsx("table", {
    className: "card-detail-table"
  }, StudentsWhoHave_jsx("thead", null, StudentsWhoHave_jsx("tr", null, StudentsWhoHave_jsx("th", null, StudentsWhoHave_jsx("a", {
    href: "#"
  }, StudentsWhoHave_jsx("span", {
    className: "sort-holder"
  }, "Name ", StudentsWhoHave_jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), StudentsWhoHave_jsx("th", null, StudentsWhoHave_jsx("a", {
    href: "#"
  }, StudentsWhoHave_jsx("span", {
    className: "sort-holder"
  }, "Overdue ", StudentsWhoHave_jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), StudentsWhoHave_jsx("tbody", null, overdueCoursework.map(student => StudentsWhoHave_jsx("tr", {
    key: student.name
  }, StudentsWhoHave_jsx("td", null, student.name), StudentsWhoHave_jsx("td", null, student.overdueAssignments))))))))), StudentsWhoHave_jsx("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, StudentsWhoHave_jsx("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, StudentsWhoHave_jsx("li", {
    className: flaggedSectionOpen ? "pink-darken-3 pink-text text-darken-3 active" : "pink-darken-3 pink-text text-darken-3"
  }, StudentsWhoHave_jsx("div", {
    onClick: () => setFlaggedSectionOpen(!flaggedSectionOpen),
    className: "card card-alert collapsible-header"
  }, StudentsWhoHave_jsx("span", {
    className: "icon-box pink darken-3"
  }, StudentsWhoHave_jsx("i", {
    className: "icon-exclamation-mark"
  })), StudentsWhoHave_jsx("div", {
    className: "alert-text"
  }, StudentsWhoHave_jsx("p", null, StudentsWhoHave_jsx("b", null, "Flagged Problems")), StudentsWhoHave_jsx("div", {
    className: "value"
  }, StudentsWhoHave_jsx("b", {
    className: "text-large"
  }, flaggedProblems.length))), StudentsWhoHave_jsx("span", {
    className: "collapsible-opener"
  }, StudentsWhoHave_jsx("i", {
    className: "custom-icon-traingle-down"
  }))), StudentsWhoHave_jsx("div", {
    className: "card-content collapsible-body",
    style: {
      display: flaggedSectionOpen ? 'block' : ''
    }
  }, StudentsWhoHave_jsx("table", {
    className: "card-detail-table"
  }, StudentsWhoHave_jsx("thead", null, StudentsWhoHave_jsx("tr", null, StudentsWhoHave_jsx("th", null, StudentsWhoHave_jsx("a", {
    href: "#"
  }, StudentsWhoHave_jsx("span", {
    className: "sort-holder"
  }, "Name ", StudentsWhoHave_jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), StudentsWhoHave_jsx("th", null, StudentsWhoHave_jsx("a", {
    href: "#"
  }, StudentsWhoHave_jsx("span", {
    className: "sort-holder"
  }, "Flags", StudentsWhoHave_jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), StudentsWhoHave_jsx("tbody", null, flaggedProblems.map(student => StudentsWhoHave_jsx("tr", {
    key: student.name
  }, StudentsWhoHave_jsx("td", null, student.name), StudentsWhoHave_jsx("td", null, student.flaggedProblems))))))))), StudentsWhoHave_jsx("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, StudentsWhoHave_jsx("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, StudentsWhoHave_jsx("li", {
    className: fewerThan2PracticeTestsOpen ? "pink-darken-4 pink-text text-darken-4 active" : "pink-darken-4 pink-text text-darken-4"
  }, StudentsWhoHave_jsx("div", {
    onClick: () => setFewerThan2PracticeTestsOpen(!fewerThan2PracticeTestsOpen),
    className: "card card-alert collapsible-header"
  }, StudentsWhoHave_jsx("span", {
    className: "icon-box pink darken-4"
  }, StudentsWhoHave_jsx("i", {
    className: "icon-exclamation-mark"
  })), StudentsWhoHave_jsx("div", {
    className: "alert-text"
  }, StudentsWhoHave_jsx("p", null, StudentsWhoHave_jsx("b", null, "Fewer than 2  Practice Tests")), StudentsWhoHave_jsx("div", {
    className: "value"
  }, StudentsWhoHave_jsx("b", {
    className: "text-large"
  }, fewerThan2PracticeTests.length))), StudentsWhoHave_jsx("span", {
    className: "collapsible-opener"
  }, StudentsWhoHave_jsx("i", {
    className: "custom-icon-traingle-down"
  }))), StudentsWhoHave_jsx("div", {
    className: "card-content collapsible-body",
    style: {
      display: fewerThan2PracticeTestsOpen ? 'block' : ''
    }
  }, StudentsWhoHave_jsx("table", {
    className: "card-detail-table"
  }, StudentsWhoHave_jsx("thead", null, StudentsWhoHave_jsx("tr", null, StudentsWhoHave_jsx("th", null, StudentsWhoHave_jsx("a", {
    href: "#"
  }, StudentsWhoHave_jsx("span", {
    className: "sort-holder"
  }, "Name ", StudentsWhoHave_jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), StudentsWhoHave_jsx("th", null, StudentsWhoHave_jsx("a", {
    href: "#"
  }, StudentsWhoHave_jsx("span", {
    className: "sort-holder"
  }, "Tests", StudentsWhoHave_jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), StudentsWhoHave_jsx("tbody", null, fewerThan2PracticeTests.map(student => StudentsWhoHave_jsx("tr", {
    key: student.name
  }, StudentsWhoHave_jsx("td", null, student.name), StudentsWhoHave_jsx("td", null, student.fewerThan2PracticeTests)))))))))));
};

/* harmony default export */ var components_StudentsWhoHave = (StudentsWhoHave);
// CONCATENATED MODULE: ./components/Classes/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js
const getIndicatorStatus = activeSection => {
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
};
// CONCATENATED MODULE: ./components/Classes/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js

var StrengthsAndWeaknesses_jsx = external_react_default.a.createElement;



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
      }
    } = this.props;
    return StrengthsAndWeaknesses_jsx("div", {
      className: "card-block"
    }, StrengthsAndWeaknesses_jsx("h2", {
      className: "h1"
    }, "Strengths & Weaknesses"), StrengthsAndWeaknesses_jsx("div", {
      className: "card-main-full card"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "tabs-container"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "card-panel light-blue accent-2 white-text"
    }, StrengthsAndWeaknesses_jsx("ul", {
      className: "tabs row"
    }, StrengthsAndWeaknesses_jsx("li", {
      className: "tab col s4 l4",
      style: {
        margin: '0'
      }
    }, StrengthsAndWeaknesses_jsx("a", {
      href: "#",
      className: openSection === 'reading' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'reading')
    }, "Reading")), StrengthsAndWeaknesses_jsx("li", {
      className: "tab col s4 l4",
      style: {
        margin: '0'
      }
    }, StrengthsAndWeaknesses_jsx("a", {
      href: "#",
      className: openSection === 'writing' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'writing')
    }, "Writing")), StrengthsAndWeaknesses_jsx("li", {
      className: "tab col s4 l4",
      style: {
        margin: '0'
      }
    }, StrengthsAndWeaknesses_jsx("a", {
      href: "#",
      className: openSection === 'math' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'math')
    }, "Math")), StrengthsAndWeaknesses_jsx("li", {
      className: "indicator",
      style: getIndicatorStatus(openSection)
    }))), StrengthsAndWeaknesses_jsx("div", {
      className: "card-content tabs-content"
    }, StrengthsAndWeaknesses_jsx("div", {
      id: "tabs_tab01",
      className: openSection === 'reading' ? '' : 'tab-content'
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "row mb-0"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "col s12 l5 xl4 chart-column"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "chart-block chart-block-large"
    }, StrengthsAndWeaknesses_jsx("div", {
      className: "js-donut-chart js-donut-large",
      strokeWidth: "32",
      "data-source": "./inc/score-data-reading.json"
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
    }, StrengthsAndWeaknesses_jsx("h3", null, "Tab 03 content"), StrengthsAndWeaknesses_jsx("p", null, "Expedita quibusdam sed, temporibus quasi dolorem iure non inventore quaerat sit mollitia dolores minima illo perspiciatis omnis delectus, recusandae quos, incidunt ratione."), StrengthsAndWeaknesses_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, enim? Itaque reprehenderit, id eos quasi optio est. Soluta alias, minima consequuntur obcaecati odio maiores, molestiae, vel ipsum modi delectus enim!"))))));
  }

}

/* harmony default export */ var components_StrengthsAndWeaknesses = (StrengthsAndWeaknesses_StrengthsAndWeaknesses);
// CONCATENATED MODULE: ./components/Classes/DetailSummaryPage/index.js
var DetailSummaryPage_jsx = external_react_default.a.createElement;




 // eslint-disable-next-line react/prefer-stateless-function

class DetailSummaryPage_DetailSummaryPage extends external_react_default.a.Component {
  render() {
    const {
      currentClass: {
        classAverages,
        scoreImprovement,
        studentsWhoHave,
        strengthsAndWeaknesses
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
    }, DetailSummaryPage_jsx(components_ClassAverages, {
      state: classAverages
    }), DetailSummaryPage_jsx(components_ScoreImprovement, {
      state: scoreImprovement
    }), DetailSummaryPage_jsx(components_StudentsWhoHave, {
      state: studentsWhoHave
    }), DetailSummaryPage_jsx(components_StrengthsAndWeaknesses, {
      state: strengthsAndWeaknesses
    }))))));
  }

}

/* harmony default export */ var Classes_DetailSummaryPage = (DetailSummaryPage_DetailSummaryPage);
// EXTERNAL MODULE: ./utils/formatTimeEstimate.js
var formatTimeEstimate = __webpack_require__("+FjG");

// CONCATENATED MODULE: ./components/Classes/DetailWorksheetPage/utils/statusColorMap.js
const statusColorMap = {
  Assigned: 'grey darken-4',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple'
};
const chartColorMap = {
  Assigned: '#333',
  Accomplished: '#7327cc',
  Beginning: '#ed1c24',
  Exemplary: 'rgb(0, 100, 244)',
  Developing: '#c10078'
};
/* harmony default export */ var utils_statusColorMap = (statusColorMap);
// CONCATENATED MODULE: ./components/Classes/DetailWorksheetPage/components/FullView/index.js

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
// CONCATENATED MODULE: ./components/Classes/DetailWorksheetPage/components/ListView/components/TableHeader/index.js
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
// CONCATENATED MODULE: ./components/Classes/DetailWorksheetPage/components/ListView/index.js

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

// CONCATENATED MODULE: ./components/Classes/DetailWorksheetPage/components/FilterSection/index.js

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

/* harmony default export */ var DetailWorksheetPage_components_FilterSection = (components_FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Classes/DetailWorksheetPage/utils/sampleWorksheets.js
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
  totalVideoMinutesAllMissedProblems: '214'
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
  totalVideoMinutesAllMissedProblems: '214'
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
  totalVideoMinutesAllMissedProblems: '312'
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
  totalVideoMinutesAllMissedProblems: '401'
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
  totalVideoMinutesAllMissedProblems: '200'
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
  totalVideoMinutesAllMissedProblems: '305'
}]);
// EXTERNAL MODULE: ./components/utils/sortFunctions.js
var sortFunctions = __webpack_require__("PFiW");

// CONCATENATED MODULE: ./components/Classes/DetailWorksheetPage/index.js

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
      assignWorksheetDropdownOpen
    } = this.state;
    return DetailWorksheetPage_jsx(external_react_default.a.Fragment, null, DetailWorksheetPage_jsx("div", {
      className: "main-holder grey lighten-5 switcher-section"
    }, DetailWorksheetPage_jsx(DetailWorksheetPage_components_FilterSection, {
      currentView: currentView,
      onChangeView: this.onChangeView,
      onSetSort: this.onSetSort,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredTopicState: this.onSetFilteredTopicState,
      onUnsetFilteredTopicState: this.onUnsetFilteredTopicState
    }), this.renderWorksheetView()), DetailWorksheetPage_jsx("div", {
      className: "add-btn-block"
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
    }, "Create New")))));
  }

}

/* harmony default export */ var Classes_DetailWorksheetPage = (DetailWorksheetPage_DetailWorksheetPage);
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
var AssignLessonModal = __webpack_require__("wH9L");

// EXTERNAL MODULE: ./components/Dashboard/components/Modals/AssignWorksheetModal/index.js + 4 modules
var AssignWorksheetModal = __webpack_require__("fRFr");

// EXTERNAL MODULE: ./components/Dashboard/utils/dateAndCalendarUtils.js
var dateAndCalendarUtils = __webpack_require__("AZl1");

// CONCATENATED MODULE: ./components/Classes/index/selectors.js


const selectClassesDomain = state => state.classesReducer;

const makeSelectClassesPageState = () => Object(external_reselect_["createSelector"])(selectClassesDomain, substate => substate ? substate.toJS() : {});

const makeSelectAssignLessonsModalOpen = () => Object(external_reselect_["createSelector"])(makeSelectClassesPageState(), substate => substate.assignLessonsModalOpen);

const makeSelectAssignWorkSheetsModalOpen = () => Object(external_reselect_["createSelector"])(makeSelectClassesPageState(), substate => substate.assignWorkSheetsModalOpen);

const makeSelectCalendarRows = () => Object(external_reselect_["createSelector"])(makeSelectClassesPageState(), substate => substate.calendarRows);

/* harmony default export */ var selectors = (selectClassesDomain);

// EXTERNAL MODULE: ./components/Classes/index/constants.js
var constants = __webpack_require__("T4Bi");

// CONCATENATED MODULE: ./components/Classes/index/actions.js

function setAssignLessonsModalOpen(value) {
  return {
    type: constants["a" /* SET_ASSIGN_LESSONS_MODAL_OPEN */],
    value
  };
}
function setAssignWorksheetModalOpen(value) {
  return {
    type: constants["b" /* SET_ASSIGN_WORKSHEETS_MODAL_OPEN */],
    value
  };
}
function setCalendarRows(rows) {
  return {
    type: constants["c" /* SET_CALENDAR_ROWS */],
    rows
  };
}
// CONCATENATED MODULE: ./components/Classes/Calendar/index.js

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
    return Calendar_jsx(external_react_default.a.Fragment, null, assignLessonsModalOpen ? Calendar_jsx(AssignLessonModal["a" /* default */], {
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
    onSetAssignLessonsModalOpen: value => dispatch(setAssignLessonsModalOpen(value)),
    onSetAssignWorksheetModalOpen: value => dispatch(setAssignWorksheetModalOpen(value)),
    onSetCalendarRows: rows => dispatch(setCalendarRows(rows))
  };
}

const withConnect = Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ var Classes_Calendar = (Object(external_redux_["compose"])(withConnect)(Calendar_Calendar));
// CONCATENATED MODULE: ./components/Classes/utils/sampleSummaryClass.js
const sampleClass = {
  id: '1232',
  active: true,
  classAverages: {
    questionsAnswered: '721',
    flaggedProblems: '52.9',
    timeLoggedIn: '273',
    videoWatched: '443',
    notesTaken: '57',
    onTimePercentage: '75'
  },
  scoreImprovement: {
    points: '201',
    readingAndWriting: '82',
    math: '119',
    noGain: '32',
    from0To50: '19',
    from50To99: '60',
    from100To149: '77',
    from150To199: '62',
    from200Plus: '91'
  },
  studentsWhoHave: {
    overdueCoursework: [{
      name: 'Bob Smith',
      overdueAssignments: '13'
    }, {
      name: 'John Joe',
      overdueAssignments: '5'
    }, {
      name: 'Tim Bob',
      overdueAssignments: '11'
    }, {
      name: 'Chris Smith',
      overdueAssignments: '33'
    }, {
      name: 'Arnold Jackson',
      overdueAssignments: '7'
    }, {
      name: 'Alfred Fredson',
      overdueAssignments: '2'
    }, {
      name: 'Fred Hampton',
      overdueAssignments: '8'
    }, {
      name: 'Jeff Smith',
      overdueAssignments: '3'
    }],
    flaggedProblems: [{
      name: 'Tim Bob',
      flaggedProblems: '11'
    }, {
      name: 'Chris Smith',
      flaggedProblems: '33'
    }, {
      name: 'Arnold Jackson',
      flaggedProblems: '7'
    }, {
      name: 'Alfred Fredson',
      flaggedProblems: '2'
    }],
    fewerThan2PracticeTests: [{
      name: 'Alfred Fredson',
      fewerThan2PracticeTests: '2'
    }, {
      name: 'Fred Hampton',
      fewerThan2PracticeTests: '8'
    }, {
      name: 'Jeff Smith',
      fewerThan2PracticeTests: '3'
    }]
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
  }
};
/* harmony default export */ var sampleSummaryClass = (sampleClass);
// CONCATENATED MODULE: ./components/Classes/StatusPage/index.js


var StatusPage_jsx = external_react_default.a.createElement;













class StatusPage_StatusPage extends external_react_default.a.Component {
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
        return StatusPage_jsx(Classes_DetailSummaryPage, {
          currentClass: sampleSummaryClass
        });
      }

      if (active === "testSections") {
        return StatusPage_jsx(Classes_TestSectionsPage, null);
      }

      if (active === "worksheets") {
        return StatusPage_jsx(Classes_DetailWorksheetPage, null);
      }

      if (active == "calendar") {
        return StatusPage_jsx(Classes_Calendar, null);
      }

      return null;
    });

    this.state = {
      active: "summary"
    };
  }

  render() {
    const {
      active
    } = this.state;
    const {
      assignLessonsModalOpen,
      assignWorkSheetsModalOpen
    } = this.props;
    return StatusPage_jsx(external_react_sticky_["StickyContainer"], null, !assignLessonsModalOpen && !assignWorkSheetsModalOpen ? StatusPage_jsx(external_react_sticky_["Sticky"], null, ({
      style
    }) => StatusPage_jsx("div", {
      className: "title-row card-panel",
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1999
      })
    }, StatusPage_jsx("div", {
      className: "mobile-header"
    }, StatusPage_jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, StatusPage_jsx("i", {
      className: "material-icons"
    }, "menu"))), StatusPage_jsx("nav", {
      className: "breadcrumb-holder"
    }, StatusPage_jsx("div", {
      className: "nav-wrapper "
    }, StatusPage_jsx("a", {
      href: "#!",
      className: "breadcrumb"
    }, "< Classes"))), StatusPage_jsx("h2", {
      className: "h1 white-text"
    }, StatusPage_jsx("span", {
      className: "heading-holder"
    }, StatusPage_jsx("i", {
      className: "icon-members"
    }), StatusPage_jsx("span", {
      className: "heading-block"
    }, "Some Class in June"))), StatusPage_jsx(components_ClassNavBar, {
      onSetActivePage: this.onSetActivePage,
      active: active
    }))) : null, this.renderCurrentPage());
  }

}

const StatusPage_mapStateToProps = Object(external_reselect_["createStructuredSelector"])({
  assignLessonsModalOpen: makeSelectAssignLessonsModalOpen(),
  assignWorkSheetsModalOpen: makeSelectAssignWorkSheetsModalOpen()
});
const StatusPage_withConnect = Object(external_react_redux_["connect"])(StatusPage_mapStateToProps, null);
/* harmony default export */ var Classes_StatusPage = (Object(external_redux_["compose"])(StatusPage_withConnect)(StatusPage_StatusPage));
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/Portal/index.js
var Portal = __webpack_require__("2Iwh");

// EXTERNAL MODULE: ./components/ClickOffComponentWrapper/index.js
var ClickOffComponentWrapper = __webpack_require__("x4x+");

// EXTERNAL MODULE: ./components/utils/genderOptions.js
var genderOptions = __webpack_require__("QvYC");

// CONCATENATED MODULE: ./components/Classes/ListPage/components/SharedModalComponents/AccountInfo/index.js
var AccountInfo_jsx = external_react_default.a.createElement;





const AccountInfo = ({
  state: {
    firstName,
    lastName,
    email,
    gender
  },
  handleDetailsChange
}) => AccountInfo_jsx("div", {
  className: "card-block"
}, AccountInfo_jsx("h3", null, "Account Info"), AccountInfo_jsx("div", {
  className: "card-main card"
}, AccountInfo_jsx("div", {
  className: "card-content"
}, AccountInfo_jsx("div", {
  className: "row mb-0"
}, AccountInfo_jsx("div", {
  className: "input-field col s12"
}, AccountInfo_jsx("input", {
  type: "text",
  id: "first-name",
  name: "firstName",
  value: firstName,
  onChange: event => handleDetailsChange(event, 'firstName', 'accountInfo')
}), AccountInfo_jsx("label", {
  className: firstName.length ? 'label active' : 'label',
  htmlFor: "first-name"
}, "First Name*"))), AccountInfo_jsx("div", {
  className: "row mb-0"
}, AccountInfo_jsx("div", {
  className: "input-field col s12"
}, AccountInfo_jsx("input", {
  type: "text",
  id: "last-name",
  name: "lastName",
  value: lastName,
  onChange: event => handleDetailsChange(event, 'lastName', 'accountInfo')
}), AccountInfo_jsx("label", {
  className: lastName.length ? 'label active' : 'label',
  htmlFor: "last-name"
}, "Last Name*"))), AccountInfo_jsx("div", {
  className: "row mb-0"
}, AccountInfo_jsx("div", {
  className: "input-field col s12"
}, AccountInfo_jsx("input", {
  type: "text",
  id: "account_email_edit",
  name: "email",
  value: email,
  onChange: event => handleDetailsChange(event, 'email', 'accountInfo')
}), AccountInfo_jsx("label", {
  className: email.length ? 'label active' : 'label',
  htmlFor: "account_email_edit"
}, "Email Address*"))), AccountInfo_jsx("div", {
  className: "row mb-0"
}, AccountInfo_jsx("div", {
  className: ""
}, AccountInfo_jsx("div", {
  className: "input-field col s12 l7"
}, AccountInfo_jsx(Dropdown["a" /* default */], {
  value: Object(getValueFromState["a" /* default */])(gender, genderOptions["a" /* default */]),
  onChange: event => handleDetailsChange(event, 'gender', 'accountInfo'),
  options: genderOptions["a" /* default */],
  label: "Gender*",
  stateKey: "gender",
  dropdownKey: "gender"
})))))));

/* harmony default export */ var SharedModalComponents_AccountInfo = (AccountInfo);
// EXTERNAL MODULE: ./components/utils/stateOptions.js
var stateOptions = __webpack_require__("rKn1");

// CONCATENATED MODULE: ./components/Classes/ListPage/components/SharedModalComponents/ContactInfo/index.js
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
  className: "card-main card"
}, ContactInfo_jsx("div", {
  className: "card-content"
}, ContactInfo_jsx("div", {
  className: "row mb-0"
}, ContactInfo_jsx("div", {
  className: "input-field col s12"
}, ContactInfo_jsx("input", {
  type: "tel",
  id: "contact_phone_edit",
  name: "phone",
  value: phone,
  onChange: event => handleDetailsChange(event, 'phone', 'contactInfo')
}), ContactInfo_jsx("label", {
  className: phone.length ? 'label active' : 'label',
  htmlFor: "contact_phone_edit"
}, "Phone (optional)"))), ContactInfo_jsx("div", {
  className: "row mb-0"
}, ContactInfo_jsx("div", {
  className: "input-field col s12"
}, ContactInfo_jsx("input", {
  type: "text",
  id: "contact_address_edit",
  name: "streetAddress",
  value: streetAddress,
  onChange: event => handleDetailsChange(event, 'streetAddress', 'contactInfo')
}), ContactInfo_jsx("label", {
  className: streetAddress.length ? 'label active' : 'label',
  htmlFor: "contact_address_edit"
}, "Street Address (optional)"))), ContactInfo_jsx("div", {
  className: "row mb-0"
}, ContactInfo_jsx("div", {
  className: "input-field col s12"
}, ContactInfo_jsx("input", {
  type: "text",
  id: "contact_city_edit",
  name: "city",
  value: city,
  onChange: event => handleDetailsChange(event, 'city', 'contactInfo')
}), ContactInfo_jsx("label", {
  className: city.length ? 'label active' : 'label',
  htmlFor: "contact_city_edit"
}, "City (optional)"))), ContactInfo_jsx("div", {
  className: "row mb-0"
}, ContactInfo_jsx("div", {
  className: "col s12 m6 l5"
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
  className: "col s12 m6 l7"
}, ContactInfo_jsx("div", {
  className: "input-field"
}, ContactInfo_jsx("input", {
  type: "tel",
  id: "contact_zip_edit",
  name: "zip",
  value: zip,
  onChange: event => handleDetailsChange(event, 'zip', 'contactInfo')
}), ContactInfo_jsx("label", {
  className: zip.length ? 'label active' : 'label',
  htmlFor: "contact_zip_edit"
}, "Zip (optional)")))))));

/* harmony default export */ var SharedModalComponents_ContactInfo = (ContactInfo);
// EXTERNAL MODULE: ./components/Modal/index.js
var Modal = __webpack_require__("81xT");

// EXTERNAL MODULE: ./components/Location/components/NewLocationModal/index.js + 2 modules
var NewLocationModal = __webpack_require__("gBDQ");

// EXTERNAL MODULE: ./components/Location/components/LocationDetailsModal/index.js + 8 modules
var LocationDetailsModal = __webpack_require__("0sRR");

// CONCATENATED MODULE: ./components/Classes/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js
var LocationRow_jsx = external_react_default.a.createElement;


const LocationRow = ({
  location: {
    locationContactInfo: {
      locationName,
      locationNickname
    }
  },
  index,
  dropdownIndex,
  dropdownIsOpen,
  handleDropdownClick,
  onOpenEditLocationModal,
  onOpenDeleteModal
}) => LocationRow_jsx("div", {
  className: "card-main card-location card card-large"
}, LocationRow_jsx("div", {
  className: "card-panel card-panel-location",
  style: {
    backgroundColor: '#62b771',
    color: '#fff'
  }
}, LocationRow_jsx("div", {
  className: "card-panel-row row"
}, LocationRow_jsx("div", {
  className: "col s9"
}, LocationRow_jsx("h3", {
  className: "h4 truncate"
}, locationName), LocationRow_jsx("h4", {
  className: "sub-title"
}, locationNickname)), LocationRow_jsx("div", {
  className: "col s3"
}, LocationRow_jsx("div", {
  className: "row icons-row"
}, LocationRow_jsx("div", {
  className: "col"
}, LocationRow_jsx("span", {
  className: "block-icon"
}, LocationRow_jsx("i", {
  className: "icon-location"
}), LocationRow_jsx("span", {
  className: "text-icon"
}, "Location"))), LocationRow_jsx("div", {
  className: "dropdown-block col"
}, LocationRow_jsx("a", {
  href: "#",
  onClick: event => handleDropdownClick(event, index),
  className: "dropdown-trigger btn",
  "data-target": "dropdown105"
}, LocationRow_jsx("i", {
  className: "material-icons dots-icon"
}, "more_vert")), dropdownIsOpen && dropdownIndex === index ? LocationRow_jsx("ul", {
  id: "dropdown105",
  className: "dropdown-content dropdown-wide",
  style: {
    display: 'block',
    width: '103.991px',
    left: '116.974px',
    top: '7.99716px',
    height: '80.3409px',
    transformOrigin: '0px 0px 0px',
    opacity: '1',
    transform: 'scaleX(1) scaleY(1)'
  }
}, LocationRow_jsx("li", null, LocationRow_jsx("a", {
  href: "#",
  onClick: onOpenEditLocationModal,
  className: "modal-trigger link-block"
}, "Edit")), LocationRow_jsx("li", null, LocationRow_jsx("a", {
  href: "#"
}, "Clone")), LocationRow_jsx("li", null, LocationRow_jsx("a", {
  href: "#",
  onClick: onOpenDeleteModal
}, "Delete"))) : null))))));

/* harmony default export */ var components_LocationRow = (LocationRow);
// EXTERNAL MODULE: ./components/utils/fieldValidation.js
var fieldValidation = __webpack_require__("Bvo1");

// EXTERNAL MODULE: ./components/Location/utils/sampleLocationList.js
var sampleLocationList = __webpack_require__("Hl4h");

// CONCATENATED MODULE: ./components/Classes/ListPage/components/SharedModalComponents/Locations/index.js

var Locations_jsx = external_react_default.a.createElement;

/* eslint-disable array-callback-return */

/* eslint-disable react/no-array-index-key */









const idGenerator = () => Math.floor(Math.random() * 100 + 1);

const validationFieldMap = {
  locationName: 'Location Name',
  locationNickname: 'Location Nickname',
  locationEmail: 'Location Email',
  automatedEmailOrigin: 'Automated Email Origin',
  automatedEmailSalutation: 'Automated Email Salutation',
  locationUrl: 'Location Url',
  headerColor1: 'Header Color 1',
  headerColor2: 'Header Color 2',
  headerLogoBackgroundColor: 'Header Logo Background Color',
  headerLogoBackgroundAlpha: 'Header Logo Background Alpha',
  horizontalLogoVariation: 'Horizonal Logo Variation',
  squareLogoVariation: 'Square Logo Variation',
  backgroundImage: 'Background Image',
  backgroundBlur: 'Background Blur',
  backgroundOverlayAlpha: 'Background Overlay  Alpha'
}; // TODO: mock out update/delete action to backend
// TODO: Will this delete just remove the location from the owner or delete the location altogethe?

class Locations_Locations extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetLocationValidation", locationValidation => this.setState({
      locationValidation
    }));

    Object(defineProperty["a" /* default */])(this, "onSaveNewLocation", ({
      locationContactInfo,
      locationEmailSettings,
      locationBranding,
      owner
    }) => {
      this.onCloseNewLocationModal();
      const newLocation = {
        id: idGenerator(),
        owner,
        locationContactInfo,
        locationEmailSettings,
        locationBranding,
        locationBasicInfo: {
          activeStudents: 0,
          pastStudents: 0,
          unactivatedStudents: 0,
          averageImprovement: 0,
          averageInitialScore: 0,
          averageFinalScore: 0,
          studentsAchievingTargetScore: 0
        }
      };
      const locations = external_immutability_helper_default()(this.state.locations, {
        $push: [newLocation]
      });
      this.setState({
        locations
      });
      Object(fieldValidation["e" /* saveNewSuccess */])('location');
    });

    Object(defineProperty["a" /* default */])(this, "onSaveLocationChanges", ({
      id,
      locationContactInfo,
      locationEmailSettings,
      locationBranding
    }) => {
      const {
        locations: originalLocations
      } = this.state;
      const {
        onCloseDropdown
      } = this.props;
      const locationToUpdate = originalLocations.filter(location => location.id === id)[0];
      const updatedLocation = external_immutability_helper_default()(locationToUpdate, {
        locationContactInfo: {
          $set: locationContactInfo
        },
        locationEmailSettings: {
          $set: locationEmailSettings
        },
        locationBranding: {
          $set: locationBranding
        }
      });
      const updatedLocationIndex = originalLocations.indexOf(locationToUpdate);
      const locations = external_immutability_helper_default()(originalLocations, {
        $splice: [[updatedLocationIndex, 1, updatedLocation]]
      });
      Object(fieldValidation["c" /* saveChangesSuccess */])();
      this.setState({
        locations
      });
      onCloseDropdown();
      return this.onCloseEditLocationModal();
    });

    Object(defineProperty["a" /* default */])(this, "onConfirmDeleteLocation", () => {
      const {
        pendingLocationDelete,
        onCloseDeleteLocationModal
      } = this.props;
      this.onDeleteLocation(pendingLocationDelete);
      onCloseDeleteLocationModal();
    });

    Object(defineProperty["a" /* default */])(this, "onDeleteLocation", deletedLocation => {
      const updatedState = external_immutability_helper_default()(this.state, {
        locations: unfilteredLocations => unfilteredLocations.filter(location => location.id !== deletedLocation.id)
      });
      this.setState({
        locations: updatedState.locations
      });
      this.props.onCloseDropdown();
    });

    Object(defineProperty["a" /* default */])(this, "handleDropdownClick", (event, index) => {
      const {
        dropdownIsOpen,
        onCloseDropdown,
        onSetDropdown
      } = this.props;
      event.preventDefault();

      if (dropdownIsOpen) {
        return onCloseDropdown();
      }

      return onSetDropdown(index);
    });

    Object(defineProperty["a" /* default */])(this, "mapUserLocations", () => this.state.locations.map((location, index) => Locations_jsx(components_LocationRow, {
      key: index,
      index: index,
      location: location,
      dropdownIndex: this.props.dropdownIndex,
      dropdownIsOpen: this.props.dropdownIsOpen,
      handleDropdownClick: this.handleDropdownClick,
      onOpenEditLocationModal: () => this.props.onOpenEditLocationModal(location),
      onOpenDeleteModal: () => this.props.onOpenDeleteLocationModal(location)
    })));

    this.state = {
      locations: sampleLocationList["a" /* default */],
      dropdownIndex: null,
      pendingLocationDelete: {},
      locationValidation: {}
    };
  }

  render() {
    const {
      deleteLocationModalOpen,
      activeLocation,
      newLocationModalOpen,
      editLocationModalOpen,
      onOpenNewLocationModal,
      onCloseNewLocationModal,
      onCloseEditLocationModal,
      onCloseDeleteLocationModal
    } = this.props;
    return Locations_jsx(external_react_default.a.Fragment, null, Locations_jsx(Modal["a" /* default */], {
      open: deleteLocationModalOpen,
      onConfirm: this.onConfirmDeleteLocation,
      onClose: onCloseDeleteLocationModal,
      header: "Are You Sure?",
      body: "Deleting this location will be permanent"
    }), Locations_jsx(NewLocationModal["a" /* default */], {
      fromInstructorPage: true,
      open: newLocationModalOpen,
      onClose: onCloseNewLocationModal,
      onSaveNewLocation: this.onSaveNewLocation,
      onSaveLocationError: () => Object(fieldValidation["d" /* saveNewError */])(this.state.locationValidation, validationFieldMap),
      onSetLocationValidation: this.onSetLocationValidation
    }), Locations_jsx(LocationDetailsModal["a" /* default */], {
      location: activeLocation,
      open: editLocationModalOpen,
      onClose: onCloseEditLocationModal,
      onSaveLocationError: () => Object(fieldValidation["d" /* saveNewError */])(this.state.locationValidation, validationFieldMap),
      onSetLocationValidation: this.onSetLocationValidation,
      onSaveLocationChanges: this.onSaveLocationChanges
    }), Locations_jsx("div", {
      className: "card-block"
    }, Locations_jsx("h3", null, "Location(s)"), this.mapUserLocations(), Locations_jsx("div", {
      className: "add-box"
    }, Locations_jsx("div", {
      className: "add-box-holder"
    }, Locations_jsx("a", {
      href: "#",
      onClick: onOpenNewLocationModal,
      className: "btn-floating waves-effect waves-light green lighten-1"
    }, Locations_jsx("i", {
      className: "material-icons"
    }, "add"))))));
  }

}

/* harmony default export */ var SharedModalComponents_Locations = (Locations_Locations);
// CONCATENATED MODULE: ./components/Classes/ListPage/components/ClassDetailModal/index.js


var ClassDetailModal_jsx = external_react_default.a.createElement;









class ClassDetailModal_ClassDetailModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalClassRoom || nextProps.classroom.id !== this.state.originalClassRoom.id) {
        const {
          classroom: {
            id,
            basicInfo,
            accountInfo,
            contactInfo,
            locations,
            summary
          } = {}
        } = nextProps;
        const updatedClassRoom = {
          id,
          basicInfo,
          accountInfo,
          contactInfo,
          locations,
          summary
        };
        const {
          originalClassRoom: originalClassRoomState
        } = this.state;
        const originalClassRoom = external_immutability_helper_default()(originalClassRoomState, {
          $merge: nextProps.classroom
        });
        this.setState({
          originalClassRoom,
          updatedClassRoom
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section) => {
      const value = event.target ? event.target.value : event;
      const updatedClassRoom = external_immutability_helper_default()(this.state.updatedClassRoom, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState({
        updatedClassRoom
      });
    });

    Object(defineProperty["a" /* default */])(this, "initialClassRoomMount", () => this.state.originalClassRoom.id !== this.props.classroom.id);

    Object(defineProperty["a" /* default */])(this, "renderModalHeader", () => {
      const {
        classroom: {
          accountInfo: {
            lastName: initialLastName,
            firstName: initialFIrstName,
            email: initialEmail
          }
        }
      } = this.props;
      const {
        updatedClassRoom: {
          accountInfo: {
            lastName: updatedLastName,
            firstName: updatedFirstName,
            email: updatedEmail
          }
        }
      } = this.state;
      let lastName;
      let firstName;
      let email;

      if (this.initialClassRoomMount()) {
        lastName = initialLastName;
        firstName = initialFIrstName;
        email = initialEmail;
      } else {
        lastName = updatedLastName;
        firstName = updatedFirstName;
        email = updatedEmail;
      }

      return ClassDetailModal_jsx(external_react_default.a.Fragment, null, ClassDetailModal_jsx("h4", {
        className: "h3"
      }, lastName, ", ", firstName), ClassDetailModal_jsx("a", {
        href: `mailto:${email}`
      }, email));
    });

    Object(defineProperty["a" /* default */])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(defineProperty["a" /* default */])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        updatedClassRoom: {
          id,
          basicInfo,
          accountInfo,
          contactInfo,
          locations,
          summary
        }
      } = this.state;
      const {
        onSaveLocationError,
        onSaveClassChanges,
        onClose
      } = this.props; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
      // const valid = true;

      const valid = await Object(fieldValidation["b" /* nestedEditFieldValidation */])(this.state, this.state.updatedClassRoom, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveLocationError();
        console.warn('not valid');
      }

      const postBody = {
        id,
        basicInfo,
        accountInfo,
        contactInfo,
        locations,
        summary
      };
      onSaveClassChanges(postBody);
      onClose();
    });

    Object(defineProperty["a" /* default */])(this, "onCancelChanges", () => {
      const {
        onClose
      } = this.props;
      const {
        originalClassRoom
      } = this.state;
      this.setState({
        updatedClassRoom: originalClassRoom
      }, onClose());
    });

    this.state = {
      deleteLocationModalOpen: false,
      newLocationModalOpen: false,
      editLocationModalOpen: false,
      pendingLocationDelete: {},
      activeLocation: {},
      dropdownIsOpen: false,
      dropdownIndex: null,
      originalClassRoom: {
        summary: {
          amount_students: '',
          start_date: '',
          end_date: '',
          improvement: 0,
          coursework_assigned: 0,
          coursework_completed: 0,
          problems_flagged_review: 0,
          average_score: 0,
          achieved_target_score: 0,
          average_practice_tests_completed: 0,
          instruction: 0
        },
        accountInfo: {
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
        locations: []
      },
      updatedClassRoom: {
        summary: {
          amount_students: '',
          start_date: '',
          end_date: '',
          improvement: 0,
          coursework_assigned: 0,
          coursework_completed: 0,
          problems_flagged_review: 0,
          average_score: 0,
          achieved_target_score: 0,
          average_practice_tests_completed: 0,
          instruction: 0
        },
        accountInfo: {
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
        locations: []
      },
      validation: {
        accountInfo: {
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
      classroom: {
        id,
        basicInfo,
        accountInfo,
        contactInfo,
        locations,
        summary
      } = {}
    } = this.props;
    const updatedClassRoom = {
      id,
      basicInfo,
      accountInfo,
      contactInfo,
      locations,
      summary
    };
    const {
      originalClassRoom: originalClassRoomState
    } = this.state;
    const originalClassRoom = external_immutability_helper_default()(originalClassRoomState, {
      $merge: updatedClassRoom
    });
    this.setState({
      originalClassRoom,
      updatedClassRoom
    }); // eslint-disable-line
  } // This resets the component state to reflect the details of the next classroom the user clicks on


  render() {
    const {
      open,
      onOpenDeleteModal,
      onDeleteClass,
      deleteModalOpen,
      index
    } = this.props;
    const {
      dropdownIsOpen,
      dropdownIndex,
      activeLocation,
      deleteLocationModalOpen,
      pendingLocationDelete,
      newLocationModalOpen,
      editLocationModalOpen,
      updatedClassRoom: {
        accountInfo: updatedAccountInfo,
        contactInfo: updatedContactInfo,
        locations: updatedLocations
      }
    } = this.state;
    return ClassDetailModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "overlay"
    }, ClassDetailModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCancelChanges,
      nestedModals: deleteModalOpen || deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen
    }, ClassDetailModal_jsx("div", {
      id: "modal_user_edit",
      className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
    }, ClassDetailModal_jsx("div", {
      style: {
        backgroundColor: "#31837a",
        color: "#fff"
      },
      className: "jsx-2557376288" + " " + "owner-box card-panel card-panel-title"
    }, ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-panel-row row"
    }, ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s9"
    }, ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "user-block"
    }, ClassDetailModal_jsx("div", {
      style: {
        backgroundColor: "#0085ce",
        color: "#fff"
      },
      className: "jsx-2557376288" + " " + "user-circle"
    }, ClassDetailModal_jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "",
      className: "jsx-2557376288"
    })), ClassDetailModal_jsx("div", {
      style: {
        color: "#fff"
      },
      className: "jsx-2557376288" + " " + "user-text"
    }, this.renderModalHeader()))), ClassDetailModal_jsx("div", {
      style: {
        textAlign: "right"
      },
      className: "jsx-2557376288" + " " + "col"
    }, ClassDetailModal_jsx("span", {
      className: "jsx-2557376288" + " " + "block-icon"
    }, ClassDetailModal_jsx("i", {
      className: "jsx-2557376288" + " " + "icon-owner"
    }), ClassDetailModal_jsx("span", {
      className: "jsx-2557376288" + " " + "text-icon"
    }, "Owner"))))), ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-content"
    }, ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-body"
    }, ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "row mb-0"
    }, ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s12 l6"
    }, ClassDetailModal_jsx(SharedModalComponents_AccountInfo, {
      state: this.initialClassRoomMount() ? accountInfo : updatedAccountInfo,
      handleDetailsChange: this.handleDetailsChange
    }), ClassDetailModal_jsx(SharedModalComponents_ContactInfo, {
      state: this.initialClassRoomMount() ? contactInfo : updatedContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s12 l6"
    }, ClassDetailModal_jsx(SharedModalComponents_Locations, {
      state: this.initialClassRoomMount() ? locations : updatedLocations,
      handleDetailsChange: this.handleDetailsChange,
      dropdownIsOpen: dropdownIsOpen,
      dropdownIndex: dropdownIndex,
      activeLocation: activeLocation,
      deleteLocationModalOpen: deleteLocationModalOpen,
      pendingLocationDelete: pendingLocationDelete,
      newLocationModalOpen: newLocationModalOpen,
      editLocationModalOpen: editLocationModalOpen,
      onSetDropdown: this.onSetDropdown,
      onCloseDropdown: this.onCloseDropdown,
      onOpenNewLocationModal: this.onOpenNewLocationModal,
      onOpenEditLocationModal: this.onOpenEditLocationModal,
      onCloseNewLocationModal: this.onCloseNewLocationModal,
      onCloseEditLocationModal: this.onCloseEditLocationModal,
      onOpenDeleteLocationModal: this.onOpenDeleteLocationModal,
      onCloseDeleteLocationModal: this.onCloseDeleteLocationModal
    })))), ClassDetailModal_jsx("div", {
      className: "jsx-2557376288" + " " + "modal-footer"
    }, ClassDetailModal_jsx("a", {
      href: "#",
      onClick: () => onDeleteClass(index),
      className: "jsx-2557376288" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Delete"), ClassDetailModal_jsx("a", {
      href: "#",
      onClick: this.onCancelChanges,
      className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
    }, "Cancel"), ClassDetailModal_jsx("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2557376288" + " " + "btn"
    }, "Save"))))))), ClassDetailModal_jsx(style_default.a, {
      id: "2557376288"
    }, [".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-2557376288{margin:0;border-radius:6px;}", ".modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-2557376288{opacity:1;visibility:visible;}", ".modal-footer.jsx-2557376288{background-color:white;}"]));
  }

}

/* harmony default export */ var components_ClassDetailModal = (ClassDetailModal_ClassDetailModal);
// CONCATENATED MODULE: ./components/utils/RadialBar.js
const getRadius = (svgWidth, strokeWidth) => {
  const radius = svgWidth / 2 - strokeWidth / 2;
  return radius;
};
const getDashArray = (svgWidth, strokeWidth) => {
  const r = getRadius(svgWidth, strokeWidth);
  const dasharray = Math.PI * (r * 2);
  return dasharray;
};
const getDashoffset = (svgWidth, strokeWidth, maxValue, currentValue) => {
  const dasharray = getDashArray(svgWidth, strokeWidth);
  const dashoffset = dasharray * (1 - currentValue / maxValue);
  return dashoffset;
};
// CONCATENATED MODULE: ./components/common/RadialBar/index.js
var RadialBar_jsx = external_react_default.a.createElement;



class RadialBar_RadailBar extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      svgWidth,
      svgHeight,
      strokeWidth,
      maxValue,
      currentValue,
      strokeColor
    } = this.props;
    return RadialBar_jsx("svg", {
      width: svgWidth,
      height: svgHeight,
      viewBox: `0 0 ${svgWidth}${svgHeight}`
    }, RadialBar_jsx("circle", {
      cx: svgWidth / 2,
      cy: svgHeight / 2,
      r: getRadius(svgWidth, strokeWidth),
      fill: "transparent",
      stroke: "#e6e6e6",
      strokeWidth: strokeWidth
    }), RadialBar_jsx("circle", {
      cx: svgWidth / 2,
      cy: svgHeight / 2,
      r: getRadius(svgWidth, strokeWidth),
      fill: "transparent",
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      strokeDasharray: getDashArray(svgWidth, strokeWidth),
      strokeDashoffset: getDashoffset(svgWidth, strokeWidth, maxValue, currentValue)
    }));
  }

}

/* harmony default export */ var RadialBar = (RadialBar_RadailBar);
// CONCATENATED MODULE: ./components/Classes/ListPage/components/ClassCard/index.js

var ClassCard_jsx = external_react_default.a.createElement;




class ClassCard_ClassCard extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenClassDetailsModal", event => {
      event.preventDefault();
      this.props.onCloseDropdown();
      this.setState({
        classDetailsModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(this, "onCloseClassDetailsModal", () => this.setState({
      classDetailsModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onCloneClass", () => this.props.onCloneClass(this.props.classroom));

    Object(defineProperty["a" /* default */])(this, "onOpenDeleteModal", () => this.setState({
      deleteModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDeleteModal", () => this.setState({
      deleteModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onConfirmDeleteClass", () => {
      const {
        onDeleteClass,
        classroom,
        onCloseDropdown
      } = this.props;
      onDeleteClass(classroom);
      onCloseDropdown();
      this.onCloseDeleteModal();
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

    this.state = {
      classDetailsModalOpen: false,
      deleteModalOpen: false
    };
  }

  render() {
    const {
      dropdownIsOpen,
      dropdownIndex,
      index,
      classroom,
      onHandleClassCard,
      onCloneClass,
      onDeleteClass,
      onSaveClassChanges
    } = this.props;
    const {
      deleteModalOpen,
      classDetailsModalOpen
    } = this.state;
    const {
      summary: {
        amount_students,
        start_date,
        end_date,
        improvement,
        coursework_assigned,
        coursework_completed,
        problems_flagged_review,
        average_score,
        achieved_target_score,
        average_practice_tests_completed,
        instruction
      }
    } = classroom;
    return ClassCard_jsx(external_react_default.a.Fragment, null, ClassCard_jsx(components_ClassDetailModal, {
      index: index,
      classroom: classroom,
      open: classDetailsModalOpen,
      onClose: this.onCloseClassDetailsModal,
      onOpenDeleteModal: this.onOpenDeleteModal,
      deleteModalOpen: deleteModalOpen,
      onSaveClassChanges: onSaveClassChanges,
      onDeleteClass: onDeleteClass
    }), ClassCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, ClassCard_jsx("div", {
      className: "card-main card-class card card-large"
    }, ClassCard_jsx("div", {
      className: "owner-box card-panel",
      style: {
        backgroundColor: "#408e49",
        color: "#fff",
        cursor: "pointer"
      }
    }, ClassCard_jsx("div", {
      className: "card-panel-row row"
    }, ClassCard_jsx("div", {
      className: "col s9"
    }, ClassCard_jsx("div", {
      className: "user-block"
    }, ClassCard_jsx("div", {
      className: "user-circle",
      style: {
        backgroundColor: "#fff",
        color: "#408e49"
      }
    }, ClassCard_jsx("span", {
      className: "initials"
    }, amount_students), ClassCard_jsx("span", {
      className: "ititials-text"
    }, "students")), ClassCard_jsx("div", {
      className: "user-text",
      style: {
        color: "#fff"
      },
      onClick: () => onHandleClassCard(index)
    }, ClassCard_jsx("h4", {
      className: "h3"
    }, "Some Class in June"), ClassCard_jsx("time", {
      dateTime: "P120D"
    }, start_date, " - ", end_date)))), ClassCard_jsx("div", {
      className: "col s3 right-align"
    }, ClassCard_jsx("div", {
      className: "row icons-row"
    }, ClassCard_jsx("div", {
      className: "col right-align"
    }, ClassCard_jsx("span", {
      className: "block-icon"
    }, ClassCard_jsx("i", {
      className: "icon-members"
    }), ClassCard_jsx("span", {
      className: "text-icon"
    }, "Class"))), ClassCard_jsx("div", {
      className: "dropdown-block col"
    }, ClassCard_jsx("a", {
      className: "dropdown-trigger btn",
      href: "#",
      onClick: this.handleDropdownClick,
      "data-target": "dropdown01"
    }, ClassCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? ClassCard_jsx("ul", {
      id: "dropdown01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        width: '103.991px',
        left: '116.974px',
        top: '7.99716px',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, ClassCard_jsx("li", null, ClassCard_jsx("a", {
      href: "#modal_user_edit",
      onClick: this.onOpenClassDetailsModal,
      className: "modal-trigger link-block"
    }, "Edit")), ClassCard_jsx("li", null, ClassCard_jsx("a", {
      href: "#!",
      onClick: () => onCloneClass(index)
    }, "Clone")), ClassCard_jsx("li", null, ClassCard_jsx("a", {
      href: "#!"
    }, "Impersonate")), ClassCard_jsx("li", null, ClassCard_jsx("a", {
      href: "#!",
      onClick: () => onDeleteClass(index)
    }, "Delete"))) : null))))), ClassCard_jsx("div", {
      className: "card-content"
    }, ClassCard_jsx("div", {
      className: "row d-flex mb-0"
    }, ClassCard_jsx("div", {
      className: "col s12 m5"
    }, ClassCard_jsx("div", {
      className: "row mb-0"
    }, ClassCard_jsx("div", {
      className: "col s6 m12"
    }, ClassCard_jsx("ul", {
      className: "points-list-custom"
    }, ClassCard_jsx("li", {
      className: "style-aqua"
    }, ClassCard_jsx("span", {
      className: "badge-circle"
    }, "+", improvement, ClassCard_jsx("span", {
      className: "badge-text"
    }, "improvement"))))), ClassCard_jsx("div", {
      className: "col s6 m12"
    }, ClassCard_jsx("div", {
      className: "chart-block chart-block-test"
    }, ClassCard_jsx("span", {
      className: "value-max"
    }, "24"), ClassCard_jsx(RadialBar, {
      svgWidth: 104,
      svgHeight: 104,
      strokeWidth: 14,
      maxValue: 24,
      currentValue: instruction,
      strokeColor: "#55b24b"
    }), ClassCard_jsx("div", {
      className: "chart-text"
    }, ClassCard_jsx("span", {
      className: "title"
    }, "Instruction"), ClassCard_jsx("span", {
      className: "value"
    }, (instruction / 24 * 100).toFixed(1), "%"), ClassCard_jsx("span", {
      className: "description"
    }, "vs scheduled instruction")))))), ClassCard_jsx("div", {
      className: "col s12 m7"
    }, ClassCard_jsx("ul", {
      className: "points-list"
    }, ClassCard_jsx("li", {
      className: "style-purple-darken"
    }, ClassCard_jsx("span", {
      className: "badge-circle"
    }, coursework_assigned), ClassCard_jsx("span", {
      className: "point-text"
    }, "coursework assigned")), ClassCard_jsx("li", {
      className: "style-purple-lighten"
    }, ClassCard_jsx("span", {
      className: "badge-circle"
    }, coursework_completed, "%"), ClassCard_jsx("span", {
      className: "point-text"
    }, "coursework completed")), ClassCard_jsx("li", {
      className: "style-red-darken-3"
    }, ClassCard_jsx("span", {
      className: "badge-circle"
    }, problems_flagged_review), ClassCard_jsx("span", {
      className: "point-text"
    }, "problems \uFB02agged for review")), ClassCard_jsx("li", {
      className: "style-blue-light"
    }, ClassCard_jsx("span", {
      className: "badge-circle"
    }, average_score), ClassCard_jsx("span", {
      className: "point-text"
    }, "average score")), ClassCard_jsx("li", {
      className: "style-blue"
    }, ClassCard_jsx("span", {
      className: "badge-circle"
    }, achieved_target_score, "%"), ClassCard_jsx("span", {
      className: "point-text"
    }, "achieved target score")), ClassCard_jsx("li", {
      className: "style-orange-accent-4"
    }, ClassCard_jsx("span", {
      className: "badge-circle"
    }, average_practice_tests_completed), ClassCard_jsx("span", {
      className: "point-text"
    }, "average practice tests completed"))))), ClassCard_jsx("div", {
      className: "card-inner-row"
    }, ClassCard_jsx("div", {
      className: "row-holder"
    }, ClassCard_jsx("ul", {
      className: "category-list"
    }, ClassCard_jsx("li", {
      className: "category-box "
    }, ClassCard_jsx("span", {
      className: "category-badge badge-purple"
    }, "TW"), ClassCard_jsx("span", {
      className: "category-text"
    }, "Tutor Withalongername")))))))));
  }

}

/* harmony default export */ var components_ClassCard = (ClassCard_ClassCard);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./components/utils/locationOptions.js
var locationOptions = __webpack_require__("KnbY");

// EXTERNAL MODULE: ./components/utils/sortOptions.js
var utils_sortOptions = __webpack_require__("OI+E");

// CONCATENATED MODULE: ./components/Classes/ListPage/components/FilterSection/index.js

var ListPage_components_FilterSection_jsx = external_react_default.a.createElement;








class ListPage_components_FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

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

    Object(defineProperty["a" /* default */])(this, "onClearFilters", () => this.setState({
      activeFilters: []
    }));

    Object(defineProperty["a" /* default */])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    this.state = {
      open: false,
      name: '',
      activeFilters: [],
      location: "",
      sort: "lastNameDescending"
    };
  }

  render() {
    const {
      open,
      activeFilters,
      location,
      sort
    } = this.state;
    return ListPage_components_FilterSection_jsx("div", {
      className: "filter-form-holder"
    }, ListPage_components_FilterSection_jsx("ul", {
      className: "collapsible expandable"
    }, ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: "block"
      } : {
        display: "none"
      }
    }, ListPage_components_FilterSection_jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, ListPage_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "sessions_this_week",
      checked: activeFilters.indexOf("sessions_this_week") !== -1,
      onChange: () => this.onHandleFilterClick("sessions_this_week")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "sessions_this_week"
    }, "Sessions This Week")), ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "session_today",
      checked: activeFilters.indexOf("session_today") !== -1,
      onChange: () => this.onHandleFilterClick("session_today")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "session_today"
    }, "Session Today")), ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "sessions_no",
      checked: activeFilters.indexOf("sessions_no") !== -1,
      onChange: () => this.onHandleFilterClick("sessions_no")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "sessions_no"
    }, "No Sessions Scheduled"))), ListPage_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "gain_no",
      checked: activeFilters.indexOf("gain_no") !== -1,
      onChange: () => this.onHandleFilterClick("gain_no")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "gain_no"
    }, "No Gain")), ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "gain_0_49",
      checked: activeFilters.indexOf("gain_0_49") !== -1,
      onChange: () => this.onHandleFilterClick("gain_0_49")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "gain_0_49"
    }, "Gain of 0-49")), ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "gain_50_100",
      checked: activeFilters.indexOf("gain_50_100") !== -1,
      onChange: () => this.onHandleFilterClick("gain_50_100")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "gain_50_100"
    }, "Gain of 50-100")), ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "gain_100_199",
      checked: activeFilters.indexOf("gain_100_199") !== -1,
      onChange: () => this.onHandleFilterClick("gain_100_199")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "gain_100_199"
    }, "Gain of 100-199")), ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "gain_200",
      checked: activeFilters.indexOf("gain_200") !== -1,
      onChange: () => this.onHandleFilterClick("gain_200")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "gain_200"
    }, "Gain of 200+"))), ListPage_components_FilterSection_jsx("ul", {
      className: "filter-form_checkbox-list"
    }, ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "current",
      checked: activeFilters.indexOf("current") !== -1,
      onChange: () => this.onHandleFilterClick("current")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "current"
    }, "Current")), ListPage_components_FilterSection_jsx("li", null, ListPage_components_FilterSection_jsx("input", {
      type: "checkbox",
      id: "archived",
      checked: activeFilters.indexOf("archived") !== -1,
      onChange: () => this.onHandleFilterClick("archived")
    }), ListPage_components_FilterSection_jsx("label", {
      htmlFor: "archived"
    }, "Archived")))), ListPage_components_FilterSection_jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, ListPage_components_FilterSection_jsx("div", {
      className: "col s12 m3"
    }, ListPage_components_FilterSection_jsx("div", {
      className: "input-field"
    }, ListPage_components_FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(location, locationOptions["a" /* default */]),
      onChange: event => this.handleFilterChange(event, 'location'),
      options: locationOptions["a" /* default */],
      label: "Location",
      stateKey: "location",
      dropdownKey: "location"
    }))), ListPage_components_FilterSection_jsx("div", {
      className: "col s12 m3"
    }, ListPage_components_FilterSection_jsx("div", {
      className: "search-field input-field",
      style: {
        marginTop: "50px"
      }
    }, ListPage_components_FilterSection_jsx("input", {
      type: "search",
      id: "name_search",
      className: "input-control  validate"
    }), ListPage_components_FilterSection_jsx("button", {
      type: "submit",
      className: "search-button",
      onClick: this.submitNameFilter
    }, ListPage_components_FilterSection_jsx("i", {
      className: "icon-search"
    })), ListPage_components_FilterSection_jsx("label", {
      className: "label",
      htmlFor: "name_search"
    }, "Search"))))), ListPage_components_FilterSection_jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, ListPage_components_FilterSection_jsx("div", {
      className: "col s12 l4"
    }, ListPage_components_FilterSection_jsx("div", {
      className: "row mb-0"
    }, ListPage_components_FilterSection_jsx("div", {
      className: "col s12 xl7"
    }, ListPage_components_FilterSection_jsx("div", {
      className: "input-field"
    }, ListPage_components_FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, utils_sortOptions["a" /* default */]),
      onChange: event => this.handleFilterChange(event, 'sort'),
      options: utils_sortOptions["a" /* default */],
      label: "Sort",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), ListPage_components_FilterSection_jsx("div", {
      className: "col s12 l4 hide-on-med-and-down show-on-large"
    }, "\xA0"), ListPage_components_FilterSection_jsx("div", {
      className: "col s12 l4"
    }, ListPage_components_FilterSection_jsx("div", {
      className: "option-filters",
      style: {
        marginTop: "50px"
      }
    }, ListPage_components_FilterSection_jsx("div", {
      className: "option-item clear"
    }, ListPage_components_FilterSection_jsx("a", {
      href: "#",
      onClick: this.onClearFilters
    }, "Clear Filters")), ListPage_components_FilterSection_jsx("div", {
      className: "option-item"
    }, ListPage_components_FilterSection_jsx("span", {
      className: "collapsible-header",
      onClick: this.onToggleShowFilters
    }, ListPage_components_FilterSection_jsx("span", {
      className: "open-text"
    }, open ? "Hide Filters" : "Open Filters")))))))));
  }

}

ListPage_components_FilterSection_FilterSection.propTyes = {
  onSetSort: external_prop_types_default.a.func.isRequired,
  onSetFilteredState: external_prop_types_default.a.func.isRequired,
  onUnsetFilteredState: external_prop_types_default.a.func.isRequired,
  onSetFilteredLocationState: external_prop_types_default.a.func.isRequired,
  onUnsetFilteredLocationState: external_prop_types_default.a.func.isRequired
};
/* harmony default export */ var ListPage_components_FilterSection = (ListPage_components_FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Classes/SharedModalComponents/ClassInformation/index.js
var ClassInformation_jsx = external_react_default.a.createElement;


class ClassInformation_ClassInformation extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleDetailsChange,
      state: {
        className
      }
    } = this.props;
    return ClassInformation_jsx("div", {
      className: "card-block"
    }, ClassInformation_jsx("h3", null, "Class Information"), ClassInformation_jsx("div", {
      className: "card-main card"
    }, ClassInformation_jsx("div", {
      className: "card-content"
    }, ClassInformation_jsx("div", {
      className: "row mb-0"
    }, ClassInformation_jsx("div", {
      className: "input-field col s12"
    }, ClassInformation_jsx("input", {
      type: "text",
      id: "class_name",
      value: className,
      onChange: event => handleDetailsChange(event, 'className', 'classInfo')
    }), ClassInformation_jsx("label", {
      className: className.length ? 'label active' : 'label',
      htmlFor: "class_name"
    }, "Class Name"))))));
  }

}

/* harmony default export */ var SharedModalComponents_ClassInformation = (ClassInformation_ClassInformation);
// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("5Buo");

// CONCATENATED MODULE: ./components/Classes/SharedModalComponents/AccountSettings/index.js
var AccountSettings_jsx = external_react_default.a.createElement;




class AccountSettings_AccountSettings extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      state: {
        start_date,
        end_date,
        active,
        isExclude
      },
      handleDetailsChange
    } = this.props;
    return AccountSettings_jsx("div", {
      className: "card-block"
    }, AccountSettings_jsx("h3", null, "Account Settings"), AccountSettings_jsx("div", {
      className: "card-main card"
    }, AccountSettings_jsx("div", {
      className: "card-content"
    }, AccountSettings_jsx("div", {
      className: "row"
    }, AccountSettings_jsx("div", {
      className: "col s6"
    }, AccountSettings_jsx("div", {
      className: "datepicker-field input-field"
    }, AccountSettings_jsx("i", {
      className: "icon-calendar"
    }), AccountSettings_jsx(external_react_datepicker_default.a, {
      id: "course_start_date",
      selected: start_date,
      onChange: date => handleDetailsChange(date, 'start_date', 'accountInfo'),
      placeholderText: "Course Start Date"
    }))), AccountSettings_jsx("div", {
      className: "col s6"
    }, AccountSettings_jsx("div", {
      className: "datepicker-field input-field"
    }, AccountSettings_jsx("i", {
      className: "icon-calendar"
    }), AccountSettings_jsx(external_react_datepicker_default.a, {
      id: "course_end_date",
      selected: end_date,
      onChange: date => handleDetailsChange(date, 'end_date', 'accountInfo'),
      placeholderText: "Course End Date"
    })))), AccountSettings_jsx("div", {
      className: "row"
    }, AccountSettings_jsx("div", {
      className: "col s12"
    }, AccountSettings_jsx("div", {
      className: "check-holder"
    }, AccountSettings_jsx("p", null, AccountSettings_jsx("label", null, AccountSettings_jsx("input", {
      type: "checkbox",
      className: "filled-in",
      checked: active,
      onChange: event => handleDetailsChange(event, 'active', 'accountInfo', 'checkBox')
    }), AccountSettings_jsx("span", null, "Inactive"))), AccountSettings_jsx("span", {
      className: "card-note"
    }, "Select this option when you no longer want this student to appear on your list of current students. All student data is retained and, by default, included in instructor and global statistics.")))), AccountSettings_jsx("div", {
      className: "row"
    }, AccountSettings_jsx("div", {
      className: "col s12"
    }, AccountSettings_jsx("div", {
      className: "input-field"
    }, AccountSettings_jsx("select", {
      id: "default_session_duration"
    }, AccountSettings_jsx("option", null, "Use organization default"), AccountSettings_jsx("option", null, "Use organization default"), AccountSettings_jsx("option", null, "Use organization default")), AccountSettings_jsx("label", {
      className: "label",
      htmlFor: "default_session_duration"
    }, "Default Session Duration")))), AccountSettings_jsx("p", null, AccountSettings_jsx("label", {
      className: "label-wrap"
    }, AccountSettings_jsx("input", {
      type: "checkbox",
      className: "filled-in",
      checked: isExclude,
      onChange: event => handleDetailsChange(event, 'isExclude', 'accountInfo', 'checkBox')
    }), AccountSettings_jsx("span", null, "Exclude Class from Performance Statistics"))))));
  }

}

/* harmony default export */ var SharedModalComponents_AccountSettings = (AccountSettings_AccountSettings);
// EXTERNAL MODULE: ./components/Location/components/LocationCard/index.js
var LocationCard = __webpack_require__("2Gwb");

// CONCATENATED MODULE: ./components/Classes/SharedModalComponents/Locations/index.js

var SharedModalComponents_Locations_jsx = external_react_default.a.createElement;



class SharedModalComponents_Locations_Locations extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "mapLocations", () => {
      const {
        locations,
        onRemoveLocation
      } = this.props;
      return locations.map((location, index) => SharedModalComponents_Locations_jsx(LocationCard["a" /* default */], {
        key: index,
        index: index,
        location: location,
        onRemoveLocation: () => onRemoveLocation(index)
      }));
    });
  }

  render() {
    const {
      onOpenLocationModal
    } = this.props;
    return SharedModalComponents_Locations_jsx("div", {
      className: "card-block"
    }, SharedModalComponents_Locations_jsx("h3", null, "Class Location"), SharedModalComponents_Locations_jsx("div", {
      className: "card-main card card-instructor"
    }, SharedModalComponents_Locations_jsx("div", {
      className: "card-content"
    }, SharedModalComponents_Locations_jsx("div", {
      className: "text-block"
    }, SharedModalComponents_Locations_jsx("p", null, "Select the location/branch where this class will be located.")), SharedModalComponents_Locations_jsx("div", {
      className: "box-scrollable"
    }, SharedModalComponents_Locations_jsx("div", {
      className: "height-360 jcf-scrollable"
    }, SharedModalComponents_Locations_jsx("div", {
      className: "card-location-holder",
      style: {
        height: "320px",
        overflowY: "scroll"
      }
    }, this.mapLocations()))), SharedModalComponents_Locations_jsx("div", {
      className: "card-footer right-align"
    }, SharedModalComponents_Locations_jsx("a", {
      href: "#modal_Location1",
      className: "modal-trigger link-block",
      onClick: onOpenLocationModal
    }, "Add Location")))));
  }

}

/* harmony default export */ var Classes_SharedModalComponents_Locations = (SharedModalComponents_Locations_Locations);
// CONCATENATED MODULE: ./components/Classes/SharedModalComponents/Instructors/components/InstructorCard/index.js
var InstructorCard_jsx = external_react_default.a.createElement;


class InstructorCard_InstructorCard extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      instructor: {
        firstName,
        lastName,
        email
      },
      onRemoveInstructor
    } = this.props;
    return InstructorCard_jsx("div", {
      className: "owner-box card-panel card-panel-panel card-panel-large",
      style: {
        backgroundColor: "#31837a",
        color: "#fff"
      }
    }, InstructorCard_jsx("a", {
      href: "#",
      className: "close-link icon-close-thin",
      onClick: onRemoveInstructor
    }), InstructorCard_jsx("div", {
      className: "card-panel-row row"
    }, InstructorCard_jsx("div", {
      className: "col s10"
    }, InstructorCard_jsx("div", {
      className: "user-block"
    }, InstructorCard_jsx("div", {
      className: "user-circle",
      style: {
        backgroundColor: "#0085ce",
        color: "#fff"
      }
    }, InstructorCard_jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "image description"
    })), InstructorCard_jsx("div", {
      className: "user-text",
      style: {
        color: "#fff"
      }
    }, InstructorCard_jsx("h4", {
      className: "h3"
    }, firstName, ", ", lastName), InstructorCard_jsx("a", {
      href: "mailto:jen.ownerly@gmail.com"
    }, email)))), InstructorCard_jsx("div", {
      className: "col s2 right-align"
    }, InstructorCard_jsx("span", {
      className: "block-icon"
    }, InstructorCard_jsx("i", {
      className: "icon-user"
    }), InstructorCard_jsx("span", {
      className: "text-icon"
    }, "Instructor")))));
  }

}

/* harmony default export */ var components_InstructorCard = (InstructorCard_InstructorCard);
// CONCATENATED MODULE: ./components/Classes/SharedModalComponents/Instructors/index.js

var Instructors_jsx = external_react_default.a.createElement;



class Instructors_Instructors extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "mapInstructors", () => {
      const {
        instructors,
        onRemoveInstructor
      } = this.props;
      return instructors.map((instructor, index) => Instructors_jsx(components_InstructorCard, {
        key: index,
        index: index,
        instructor: instructor,
        onRemoveInstructor: () => onRemoveInstructor(index)
      }));
    });
  }

  render() {
    const {
      onOpenInstructorModal
    } = this.props;
    return Instructors_jsx("div", {
      className: "card-block"
    }, Instructors_jsx("h3", null, "Instructor(s)"), Instructors_jsx("div", {
      className: "card-main card card-instructor"
    }, Instructors_jsx("div", {
      className: "card-content"
    }, Instructors_jsx("div", {
      className: "text-block"
    }, Instructors_jsx("p", null, "Add one or more instructors to the list below. Each instructor can manage the coursework.")), Instructors_jsx("div", {
      className: "box-scrollable"
    }, Instructors_jsx("div", {
      className: "height-360 jcf-scrollable"
    }, Instructors_jsx("div", {
      className: "card-location-holder",
      style: {
        height: "320px",
        overflowY: "scroll"
      }
    }, this.mapInstructors()))), Instructors_jsx("div", {
      className: "card-footer right-align"
    }, Instructors_jsx("a", {
      href: "#modal_Instructor1",
      className: "modal-trigger link-block",
      onClick: onOpenInstructorModal
    }, "Add Instructor")))));
  }

}

/* harmony default export */ var SharedModalComponents_Instructors = (Instructors_Instructors);
// EXTERNAL MODULE: ./components/Location/components/LocationModal/index.js + 2 modules
var LocationModal = __webpack_require__("R12m");

// CONCATENATED MODULE: ./components/Classes/InstructorModal/components/InstructorToggleCard/index.js
var InstructorToggleCard_jsx = external_react_default.a.createElement;


class InstructorToggleCard_InstructorToggleCard extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      instructor,
      onToggleInstructorSelect
    } = this.props;
    return InstructorToggleCard_jsx("li", {
      onClick: () => onToggleInstructorSelect(instructor)
    }, InstructorToggleCard_jsx("input", {
      type: "checkbox"
    }), InstructorToggleCard_jsx("div", {
      className: "owner-box card-panel card-panel-panel card-panel-large",
      style: {
        backgroundColor: "#31837a",
        color: "#fff"
      }
    }, InstructorToggleCard_jsx("span", {
      className: "check-link icon-check"
    }), InstructorToggleCard_jsx("div", {
      className: "card-panel-row row"
    }, InstructorToggleCard_jsx("div", {
      className: "col s10"
    }, InstructorToggleCard_jsx("div", {
      className: "user-block"
    }, InstructorToggleCard_jsx("div", {
      className: "user-circle",
      style: {
        backgroundColor: "#0085ce",
        color: "#fff"
      }
    }, InstructorToggleCard_jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "image description"
    })), InstructorToggleCard_jsx("div", {
      className: "user-text",
      style: {
        color: "#fff"
      }
    }, InstructorToggleCard_jsx("h4", {
      className: "h3"
    }, instructor.firstName, ", ", instructor.lastName), InstructorToggleCard_jsx("a", {
      href: "mailto:jen.ownerly@gmail.com"
    }, instructor.email)))), InstructorToggleCard_jsx("div", {
      className: "col s2 right-align"
    }, InstructorToggleCard_jsx("span", {
      className: "block-icon"
    }, InstructorToggleCard_jsx("i", {
      className: "icon-user"
    }), InstructorToggleCard_jsx("span", {
      className: "text-icon"
    }, "Instructor"))))));
  }

}

/* harmony default export */ var components_InstructorToggleCard = (InstructorToggleCard_InstructorToggleCard);
// EXTERNAL MODULE: ./components/utils/sampleInstructors.js
var sampleInstructors = __webpack_require__("P/Kj");

// CONCATENATED MODULE: ./components/Classes/InstructorModal/index.js


var InstructorModal_jsx = external_react_default.a.createElement;







class InstructorModal_InstructorModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => this.setState({
      selectedInstructors: []
    }, this.props.onClose));

    Object(defineProperty["a" /* default */])(this, "onToggleInstructorSelect", instuctor => {
      const {
        selectedInstructors
      } = this.state;

      if (selectedInstructors.indexOf(instuctor) === -1) {
        this.setState({
          selectedInstructors: [...selectedInstructors, instuctor]
        });
      } else {
        const updatedInstructors = external_immutability_helper_default()(selectedInstructors, {
          $splice: [[selectedInstructors.indexOf(instuctor), 1]]
        });
        this.setState({
          selectedInstructors: updatedInstructors
        });
      }
    });

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

    Object(defineProperty["a" /* default */])(this, "mapInstructorToggleCard", () => {
      const {
        instructors
      } = this.state;
      return instructors.map((instructor, index) => InstructorModal_jsx(components_InstructorToggleCard, {
        key: index,
        index: index,
        instructor: instructor,
        onToggleInstructorSelect: this.onToggleInstructorSelect
      }));
    });

    this.state = {
      instructors: sampleInstructors["a" /* default */],
      selectedInstructors: []
    };
  }

  render() {
    const {
      open
    } = this.props;
    return InstructorModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "overlay"
    }, InstructorModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCloseModal
    }, InstructorModal_jsx("div", {
      id: "modal_Instructor1",
      className: "jsx-4069380559" + " " + "modal modal-custom modal-location"
    }, InstructorModal_jsx("form", {
      action: "#",
      className: "jsx-4069380559" + " " + "custom-form"
    }, InstructorModal_jsx("fieldset", {
      className: "jsx-4069380559"
    }, InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "card-modal card-main card"
    }, InstructorModal_jsx("div", {
      style: {
        backgroundColor: "#00456b",
        color: "#fff"
      },
      className: "jsx-4069380559" + " " + "owner-box card-panel card-panel-title"
    }, InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "card-panel-row row"
    }, InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "col"
    }, InstructorModal_jsx("h3", {
      className: "jsx-4069380559"
    }, "Select Instructor(s)")))), InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "card-content"
    }, InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "card-body"
    }, InstructorModal_jsx("span", {
      className: "jsx-4069380559" + " " + "hint"
    }, "Click to select or deselect."), InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "row-holder"
    }, InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "search-field input-field"
    }, InstructorModal_jsx("input", {
      type: "search",
      id: "insturtor_search_modal",
      placeholder: "Smith",
      className: "jsx-4069380559" + " " + "input-control  validate"
    }), InstructorModal_jsx("button", {
      type: "submit",
      className: "jsx-4069380559" + " " + "search-button"
    }, InstructorModal_jsx("i", {
      className: "jsx-4069380559" + " " + "icon-search"
    })), InstructorModal_jsx("label", {
      htmlFor: "insturtor_search_modal",
      className: "jsx-4069380559" + " " + "label"
    }, "Search")), InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "input-field"
    }, InstructorModal_jsx("select", {
      id: "location_search_modal",
      className: "jsx-4069380559"
    }, InstructorModal_jsx("option", {
      className: "jsx-4069380559"
    }, "Any"), InstructorModal_jsx("option", {
      className: "jsx-4069380559"
    }, "option"), InstructorModal_jsx("option", {
      className: "jsx-4069380559"
    }, "option")), InstructorModal_jsx("label", {
      htmlFor: "location_search_modal",
      className: "jsx-4069380559" + " " + "label"
    }, "Location"))), InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "box-scrollable"
    }, InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "height-40 jcf-scrollable"
    }, InstructorModal_jsx("div", {
      style: {
        height: "300px",
        overflowY: "scroll"
      },
      className: "jsx-4069380559" + " " + "card-location-holder"
    }, InstructorModal_jsx("ul", {
      className: "jsx-4069380559" + " " + "checkbox-list"
    }, this.mapInstructorToggleCard()))))), InstructorModal_jsx("div", {
      className: "jsx-4069380559" + " " + "modal-footer"
    }, InstructorModal_jsx("a", {
      href: "#!",
      className: "jsx-4069380559" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), InstructorModal_jsx("a", {
      href: "#",
      onClick: this.onSaveInstructorChanges,
      className: "jsx-4069380559" + " " + "btn"
    }, "Add"))))))))), InstructorModal_jsx(style_default.a, {
      id: "4069380559"
    }, ["h4.jsx-4069380559{font-size:2.28rem;line-height:110%;margin:1.52rem 0 0.912rem 0;margin-top:0;}", ".overlay.jsx-4069380559{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-4069380559{margin:0;border-radius:6px;}", "#modal_Location1.jsx-4069380559{border-radius:6px;}", ".modal.jsx-4069380559{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-4069380559{opacity:1;visibility:visible;}", ".modal-footer.jsx-4069380559{background-color:white;}"]));
  }

}

/* harmony default export */ var Classes_InstructorModal = (InstructorModal_InstructorModal);
// CONCATENATED MODULE: ./components/Classes/ClassModal/index.js


var ClassModal_jsx = external_react_default.a.createElement;










class ClassModal_ClassModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenLocationModal", event => {
      event.preventDefault();
      this.setState({
        locationModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(this, "onOpenInstructorModal", event => {
      event.preventDefault();
      this.setState({
        instructorModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(this, "onCloseLocationModal", () => this.setState({
      locationModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseInstructorModal", () => this.setState({
      instructorModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "arrayItemRemover", (array, value) => array.filter(item => item !== value));

    Object(defineProperty["a" /* default */])(this, "onRemoveLocation", index => {
      const {
        location: {
          locations
        }
      } = this.state.classroom;
      const newLocationsArray = this.arrayItemRemover(locations, locations[index]);
      const updatedClassRoom = external_immutability_helper_default()(this.state.classroom, {
        location: {
          $set: {
            locations: newLocationsArray
          }
        }
      });
      this.setState({
        classroom: updatedClassRoom
      });
    });

    Object(defineProperty["a" /* default */])(this, "onRemoveInstructor", index => {
      const {
        instructor: {
          instructors
        }
      } = this.state.classroom;
      const newInstructorsArray = this.arrayItemRemover(instructors, instructors[index]);
      const updatedClassRoom = external_immutability_helper_default()(this.state.classroom, {
        instructor: {
          $set: {
            instructors: newInstructorsArray
          }
        }
      });
      this.setState({
        classroom: updatedClassRoom
      });
    });

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
    });

    Object(defineProperty["a" /* default */])(this, "onSave", () => {
      const {
        onClose,
        onSave
      } = this.props;
      onClose();
      const classroom = this.state.classroom;
      onSave(classroom);
    });

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section, checkBox = false) => {
      if (checkBox) {
        const updatedClassRoom = external_immutability_helper_default()(this.state.classroom, {
          [section]: {
            $merge: {
              [name]: !this.state.classroom[section][name]
            }
          }
        });
        this.setState({
          classroom: updatedClassRoom
        });
      } else {
        const value = event.target ? event.target.value : event;
        const updatedClassRoom = external_immutability_helper_default()(this.state.classroom, {
          [section]: {
            $merge: {
              [name]: value
            }
          }
        });
        this.setState({
          classroom: updatedClassRoom
        });
      }
    });

    this.state = {
      classroom: {
        classInfo: {
          className: ""
        },
        accountInfo: {
          start_date: "",
          end_date: "",
          active: false,
          isExclude: false
        },
        location: {
          locations: []
        },
        instructor: {
          instructors: []
        }
      },
      locationModalOpen: false,
      instructorModalOpen: false,
      pendingLocationDelete: {}
    };
  }

  render() {
    const {
      open,
      onClose
    } = this.props;
    const {
      locationModalOpen,
      instructorModalOpen,
      classroom: {
        classInfo,
        accountInfo,
        location,
        instructor
      }
    } = this.state;
    return ClassModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && ClassModal_jsx(external_react_default.a.Fragment, null, ClassModal_jsx("div", {
      className: "jsx-1541319608" + " " + "overlay"
    }, ClassModal_jsx("div", {
      id: "modal_add_new_class",
      className: "jsx-1541319608" + " " + "modal modal-custom modal-460"
    }, ClassModal_jsx("form", {
      action: "#",
      className: "jsx-1541319608" + " " + "custom-form"
    }, ClassModal_jsx("fieldset", {
      className: "jsx-1541319608"
    }, ClassModal_jsx("div", {
      className: "jsx-1541319608" + " " + "card-modal card-main card"
    }, ClassModal_jsx("div", {
      style: {
        backgroundColor: "#408e49",
        color: "#fff"
      },
      className: "jsx-1541319608" + " " + "card-panel card-panel-title"
    }, ClassModal_jsx("div", {
      className: "jsx-1541319608" + " " + "card-panel-row row"
    }, ClassModal_jsx("div", {
      className: "jsx-1541319608" + " " + "col"
    }, ClassModal_jsx("h2", {
      className: "jsx-1541319608"
    }, ClassModal_jsx("span", {
      className: "jsx-1541319608" + " " + "heading-holder"
    }, ClassModal_jsx("i", {
      className: "jsx-1541319608" + " " + "icon-members"
    }), ClassModal_jsx("span", {
      className: "jsx-1541319608" + " " + "heading-block"
    }, " New Class ")))), ClassModal_jsx("div", {
      className: "jsx-1541319608" + " " + "col right-align"
    }, ClassModal_jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-1541319608" + " " + "panel-link close modal-close"
    }, ClassModal_jsx("i", {
      className: "jsx-1541319608" + " " + "icon-close-thin"
    }))))), ClassModal_jsx("div", {
      className: "jsx-1541319608" + " " + "card-content"
    }, ClassModal_jsx("div", {
      className: "jsx-1541319608" + " " + "card-body"
    }, ClassModal_jsx(SharedModalComponents_ClassInformation, {
      state: classInfo,
      handleDetailsChange: this.handleDetailsChange
    }), ClassModal_jsx(SharedModalComponents_AccountSettings, {
      state: accountInfo,
      handleDetailsChange: this.handleDetailsChange
    }), ClassModal_jsx(Classes_SharedModalComponents_Locations, {
      locations: location.locations,
      onOpenLocationModal: this.onOpenLocationModal,
      onRemoveLocation: this.onRemoveLocation,
      handleDetailsChange: this.handleDetailsChange
    }), ClassModal_jsx(SharedModalComponents_Instructors, {
      instructors: instructor.instructors,
      onOpenInstructorModal: this.onOpenInstructorModal,
      onRemoveInstructor: this.onRemoveInstructor
    })), ClassModal_jsx("div", {
      className: "jsx-1541319608" + " " + "modal-footer"
    }, ClassModal_jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-1541319608" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), ClassModal_jsx("a", {
      href: "#",
      onClick: this.onSave,
      className: "jsx-1541319608" + " " + "btn"
    }, "Create Class")))))))), ClassModal_jsx(LocationModal["a" /* default */], {
      open: locationModalOpen,
      onClose: this.onCloseLocationModal,
      handleLocationsChange: selectedLocations => this.handleDetailsChange(selectedLocations, 'locations', 'location')
    }), ClassModal_jsx(Classes_InstructorModal, {
      open: instructorModalOpen,
      onClose: this.onCloseInstructorModal,
      handleInstructorsChange: selectedInstructors => this.handleDetailsChange(selectedInstructors, 'instructors', 'instructor')
    })), ClassModal_jsx(style_default.a, {
      id: "1541319608"
    }, [".overlay.jsx-1541319608{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-1541319608{margin:0;border-radius:6px;}", "#modal_Location1.jsx-1541319608{border-radius:6px;}", ".modal.jsx-1541319608{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-1541319608{opacity:1;visibility:visible;}", ".modal-footer.jsx-1541319608{background-color:white;}"]));
  }

}

/* harmony default export */ var Classes_ClassModal = (ClassModal_ClassModal);
// CONCATENATED MODULE: ./components/Classes/ListPage/index.js

var ListPage_jsx = external_react_default.a.createElement;






class ListPage_ListPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetFilteredLocationState", filterLocation => this.setState({
      classesAreFiltered: true,
      filterLocation
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredLocationState", () => this.setState({
      filterLocation: ""
    }, this.checkForFilteredState));

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIsOpen: true,
      dropdownIndex
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false,
      dropdownIndex: null
    }));

    Object(defineProperty["a" /* default */])(this, "onCloneClass", index => {
      const {
        onCloneClass
      } = this.props;
      this.onCloseDropdown();
      onCloneClass(index);
    });

    Object(defineProperty["a" /* default */])(this, "onDeleteClass", index => {
      const {
        onDeleteClass
      } = this.props;
      this.onCloseDropdown();
      onDeleteClass(index);
    });

    Object(defineProperty["a" /* default */])(this, "checkForFilteredState", () => {
      const {
        filterName,
        filterLocation
      } = this.state;

      if (!filterName.length && !filterLocation.length) {
        this.setState({
          classesAreFiltered: false
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onOpenClassModal", event => {
      event.preventDefault();
      this.setState({
        classModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", filterName => this.setState({
      classesAreFiltered: true,
      filterName
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", () => this.setState({
      classesAreFiltered: false,
      filterName: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onFilterByName", () => {
      const {
        classes
      } = this.props;
      const {
        filterName
      } = this.state;
      return classes.reduce((finalArr, currentClass) => {
        const {
          accountInfo: {
            lastName,
            firstName
          }
        } = currentClass;
        const classString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

        if (classString.indexOf(filterName) !== -1 && finalArr.indexOf(currentClass) === -1) {
          finalArr.push(currentClass);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByLocation", (preFilteredClasses = []) => {
      const {
        classes: allClasses
      } = this.props;
      const {
        filterLocation
      } = this.state;
      let classes;

      if (preFilteredClasses.length) {
        classes = preFilteredClasses;
      } else {
        classes = allClasses;
      }

      return classes.reduce((finalArr, currentInstructor) => {
        const {
          contactInfo: {
            city
          }
        } = currentInstructor;

        if (city === filterLocation && finalArr.indexOf(currentInstructor) === -1) {
          finalArr.push(currentInstructor);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onSortClasses", classes => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'firstNameAscending':
          return classes.sort(sortFunctions["i" /* firstNameAscending */]);

        case 'firstNameDescending':
          return classes.sort(sortFunctions["j" /* firstNameDescending */]);

        case 'lastNameAscending':
          return classes.sort(sortFunctions["n" /* lastNameAscending */]);

        case 'lastNameDescending':
          return classes.sort(sortFunctions["o" /* lastNameDescending */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "getMappableClasses", () => {
      const {
        filterName,
        filterLocation,
        sort
      } = this.state;
      const {
        classes: allClasses
      } = this.props;
      let classes;

      if (filterName.length && !filterLocation.length) {
        classes = this.onFilterByName();
      } else if (!filterName.length && filterLocation.length) {
        classes = this.onFilterByLocation();
      } else if (filterName.length && filterLocation.length) {
        const filteredByName = this.onFilterByName();
        classes = this.onFilterByLocation(filteredByName);
      } else {
        classes = allClasses;
      }

      if (sort) {
        return this.onSortClasses(classes);
      }

      return classes;
    });

    Object(defineProperty["a" /* default */])(this, "onCloseClassModal", () => this.setState({
      classModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "mapClassCards", () => {
      const classes = this.getMappableClasses();
      return classes.map((item, index) => ListPage_jsx(components_ClassCard, {
        key: index,
        index: index,
        classroom: item,
        onSetDropdown: this.onSetDropdown,
        onCloseDropdown: this.onCloseDropdown,
        onCloneClass: () => this.onCloneClass(index),
        onDeleteClass: () => this.onDeleteClass(index),
        dropdownIsOpen: this.state.dropdownIsOpen,
        dropdownIndex: this.state.dropdownIndex,
        onHandleClassCard: () => this.props.onHandleClassCard(index),
        onSaveClassChanges: this.props.onSaveClassChanges
      }));
    });

    this.state = {
      classesAreFiltered: false,
      filterName: "",
      filterLocation: '',
      sort: '',
      dropdownIndex: null,
      dropdownIsOpen: false,
      classModalOpen: false
    };
  }

  render() {
    const {
      classModalOpen
    } = this.state;
    const {
      onSaveNewClass
    } = this.props;
    return ListPage_jsx("div", null, ListPage_jsx("div", {
      className: "title-row card-panel"
    }, ListPage_jsx("div", {
      className: "mobile-header"
    }, ListPage_jsx("a", {
      href: "#",
      "data-target": "slide-out",
      className: "sidenav-trigger"
    }, ListPage_jsx("i", {
      className: "material-icons"
    }, "menu"))), ListPage_jsx("nav", {
      className: "breadcrumb-holder"
    }, ListPage_jsx("div", {
      className: "nav-wrapper "
    }, ListPage_jsx("a", {
      href: "#!",
      className: "breadcrumb"
    }, "< Classes"))), ListPage_jsx("h2", {
      className: "h1 white-text"
    }, ListPage_jsx("span", {
      className: "heading-holder"
    }, ListPage_jsx("i", {
      className: "icon-members"
    }), ListPage_jsx("span", {
      className: "heading-block"
    }, "Classes")))), ListPage_jsx(ListPage_components_FilterSection, {
      onSetSort: this.onSetSort,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredLocationState: this.onSetFilteredLocationState,
      onUnsetFilteredLocationState: this.onUnsetFilteredLocationState
    }), ListPage_jsx("div", {
      className: "content-section"
    }, ListPage_jsx("div", {
      className: "container-md"
    }, ListPage_jsx("div", {
      className: "result-row center-align"
    }, ListPage_jsx("b", {
      className: "result"
    }, "- 23 matches -"))), ListPage_jsx("div", {
      className: "row d-flex-content card-width-366"
    }, this.mapClassCards())), ListPage_jsx("div", {
      className: "add-btn-block"
    }, ListPage_jsx("a", {
      href: "#modal_add_new_class",
      className: "modal-trigger waves-effect waves-teal btn add-btn",
      onClick: () => this.onOpenClassModal(event)
    }, ListPage_jsx("i", {
      className: "material-icons"
    }, "add"), " New Class")), ListPage_jsx(Classes_ClassModal, {
      open: classModalOpen,
      onClose: this.onCloseClassModal,
      onSave: onSaveNewClass
    }));
  }

}

/* harmony default export */ var Classes_ListPage = (ListPage_ListPage);
// CONCATENATED MODULE: ./components/Classes/utils/sampleClass.js
const sampleClass_sampleClass = [{
  id: "1",
  summary: {
    amount_students: 10,
    start_date: "6/1/19",
    end_date: "8/5/19",
    improvement: 123,
    coursework_assigned: 60,
    coursework_completed: 90,
    problems_flagged_review: 40,
    average_score: 1256,
    achieved_target_score: 85,
    average_practice_tests_completed: 1.8,
    instruction: 14
  },
  accountInfo: {
    lastName: 'manager',
    firstName: 'Company',
    email: 'test2@example.com',
    gender: 'M'
  },
  contactInfo: {
    phone: '1234567890',
    streetAddress: '1234 Test Road',
    city: 'Austin',
    state: 'TX',
    zip: '78751'
  }
}, {
  id: "2",
  summary: {
    amount_students: 10,
    start_date: "6/1/19",
    end_date: "8/5/19",
    improvement: 223,
    coursework_assigned: 60,
    coursework_completed: 90,
    problems_flagged_review: 40,
    average_score: 1256,
    achieved_target_score: 85,
    average_practice_tests_completed: 1.8,
    instruction: 20
  },
  accountInfo: {
    lastName: 'Admin',
    firstName: 'Company',
    email: 'test2@example.com',
    gender: 'M'
  },
  contactInfo: {
    phone: '1234567890',
    streetAddress: '1234 Test Road',
    city: 'Austin',
    state: 'TX',
    zip: '78751'
  }
}];
/* harmony default export */ var utils_sampleClass = (sampleClass_sampleClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./components/Classes/index/api.js

const API_URL = undefined;
const createNewClassRoomApi = classroom => fetch(`${API_URL}/api/commands/create-classroom`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: stringify_default()(classroom)
}).then(res => res.json()).catch(err => err);
/* harmony default export */ var api = (createNewClassRoomApi);
// CONCATENATED MODULE: ./pages/classes.js

var classes_jsx = external_react_default.a.createElement;








class classes_Classes extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onHandleClassCard", index => {
      const {
        classes
      } = this.state;
      this.setState({
        selectedClass: classes[index]
      });
    });

    Object(defineProperty["a" /* default */])(this, "onAddNewClass", newClass => {
      const {
        classes: prevClassState
      } = this.state;
      const formattedNewClass = {
        summary: {
          amount_students: 10,
          start_date: "6/1/19",
          end_date: "8/5/19",
          improvement: 123,
          coursework_assigned: 60,
          coursework_completed: 90,
          problems_flagged_review: 40,
          average_score: 1256,
          achieved_target_score: 85,
          average_practice_tests_completed: 1.8,
          instruction: 14
        },
        accountInfo: {
          lastName: 'Admin',
          firstName: 'Company',
          email: 'test2@example.com',
          gender: 'M'
        },
        contactInfo: {
          phone: '1234567890',
          streetAddress: '1234 Test Road',
          city: 'Austin',
          state: 'TX',
          zip: '78751'
        },
        classInfo: newClass.classInfo,
        location: newClass.location,
        instructor: newClass.instructor
      };
      const updatedClasses = external_immutability_helper_default()(prevClassState, {
        $push: [formattedNewClass]
      });
      this.setState({
        classes: updatedClasses
      });
      this.onCreateNewClassApi(newClass);
    });

    Object(defineProperty["a" /* default */])(this, "onCloneClass", index => {
      const {
        classes
      } = this.state;
      this.setState(prevState => {
        prevState.classes.push(classes[index]);
        return {
          classes: prevState.classes
        };
      });
    });

    Object(defineProperty["a" /* default */])(this, "arrayItemRemover", (array, value) => array.filter(classroom => classroom !== value));

    Object(defineProperty["a" /* default */])(this, "onDeleteClass", index => {
      const {
        classes
      } = this.state;
      const newClassesArray = this.arrayItemRemover(classes, classes[index]);
      this.setState({
        classes: newClassesArray
      });
    });

    Object(defineProperty["a" /* default */])(this, "onCreateNewClassApi", async classroom => {
      const newId = this.state.classes.length + 1;
      const {
        classInfo: {
          className
        },
        accountInfo: {
          start_date,
          end_date,
          isExclude
        },
        location: {
          locations
        },
        instructor: {
          instructors
        }
      } = classroom;
      const formattedClassRoom = {
        id: newId,
        name: className,
        start_date: external_moment_default()(start_date).format('YYYY-MM-DD'),
        end_date: external_moment_default()(end_date).format('YYYY-MM-DD'),
        duration: "string",
        exclude_from_statistics: isExclude,
        locations,
        instructors,
        students: ""
      };
      await api(formattedClassRoom);
    });

    Object(defineProperty["a" /* default */])(this, "onSaveClassChanges", updatedClasRoom => {
      const {
        classes: originalClasses
      } = this.state;
      const classToUpdate = originalClasses.filter(classroom => classroom.id === updatedClasRoom.id)[0];
      const updatedClassIndex = originalClasses.indexOf(classToUpdate);
      const classes = external_immutability_helper_default()(originalClasses, {
        $splice: [[updatedClassIndex, 1, updatedClasRoom]]
      }); // saveChangesSuccess();

      this.setState({
        classes
      });
    });

    this.state = {
      selectedClass: null,
      classes: utils_sampleClass
    };
  }

  render() {
    const {
      selectedClass
    } = this.state;
    return classes_jsx(external_react_default.a.Fragment, null, classes_jsx("main", {
      id: "main",
      role: "main"
    }, classes_jsx("div", {
      className: "main-holder grey lighten-5 switcher-section"
    }, !selectedClass && classes_jsx(Classes_ListPage, {
      classes: this.state.classes,
      onHandleClassCard: this.onHandleClassCard,
      onCloneClass: this.onCloneClass,
      onDeleteClass: this.onDeleteClass,
      onSaveNewClass: this.onAddNewClass,
      onSaveClassChanges: this.onSaveClassChanges
    }), selectedClass && classes_jsx(Classes_StatusPage, null))));
  }

}

/* harmony default export */ var pages_classes = __webpack_exports__["default"] = (classes_Classes);

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

/***/ "T4Bi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_ASSIGN_LESSONS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_ASSIGN_WORKSHEETS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_CALENDAR_ROWS; });
const SET_ASSIGN_LESSONS_MODAL_OPEN = 'SET_ASSIGN_LESSONS_MODAL_OPEN';
const SET_ASSIGN_WORKSHEETS_MODAL_OPEN = 'SET_ASSIGN_WORKSHEETS_MODAL_OPEN';
const SET_CALENDAR_ROWS = 'SET_CALENDAR_ROWS';

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

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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