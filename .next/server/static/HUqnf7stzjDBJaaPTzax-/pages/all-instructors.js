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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jxiD");


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

/***/ "9Fm/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_INSTRUCTORS; });
const SET_INSTRUCTORS = 'SET_INSTRUCTORS';

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

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

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

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

/***/ "jxiD":
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

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__("MWqi");

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__("YckE");
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

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

// EXTERNAL MODULE: ./components/utils/getValueFromState.js
var getValueFromState = __webpack_require__("/NWr");

// EXTERNAL MODULE: ./components/utils/genderOptions.js
var genderOptions = __webpack_require__("QvYC");

// CONCATENATED MODULE: ./components/Instructor/ListPage/components/SharedModalComponents/AccountInfo/index.js
var __jsx = external_react_default.a.createElement;





const AccountInfo = ({
  state: {
    firstName,
    lastName,
    email,
    gender
  },
  handleDetailsChange
}) => __jsx("div", {
  className: "card-block"
}, __jsx("h3", null, "Account Info"), __jsx("div", {
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
  onChange: event => handleDetailsChange(event, 'firstName', 'accountInfo')
}), __jsx("label", {
  className: firstName.length ? 'label active' : 'label',
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
  onChange: event => handleDetailsChange(event, 'lastName', 'accountInfo')
}), __jsx("label", {
  className: lastName.length ? 'label active' : 'label',
  htmlFor: "last-name"
}, "Last Name*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "account_email_edit",
  name: "email",
  value: email,
  onChange: event => handleDetailsChange(event, 'email', 'accountInfo')
}), __jsx("label", {
  className: email.length ? 'label active' : 'label',
  htmlFor: "account_email_edit"
}, "Email Address*"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: ""
}, __jsx("div", {
  className: "input-field col s12 l7"
}, __jsx(Dropdown["a" /* default */], {
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

// CONCATENATED MODULE: ./components/Instructor/ListPage/components/SharedModalComponents/ContactInfo/index.js
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

// CONCATENATED MODULE: ./components/Instructor/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js
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

// CONCATENATED MODULE: ./components/Instructor/ListPage/components/SharedModalComponents/Locations/index.js

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
// CONCATENATED MODULE: ./components/Instructor/ListPage/components/InstructorDetailsModal/index.js


var InstructorDetailsModal_jsx = external_react_default.a.createElement;

/* eslint-disable no-unused-vars */









class InstructorDetailsModal_InstructorDetailsModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentWillReceiveProps", nextProps => {
      if (!this.state.originalInstructor || nextProps.instructor.id !== this.state.originalInstructor.id) {
        const {
          instructor: {
            id,
            basicInfo,
            accountInfo,
            contactInfo,
            locations
          } = {}
        } = nextProps;
        const updatedInstructor = {
          id,
          basicInfo,
          accountInfo,
          contactInfo,
          locations
        };
        const {
          originalInstructor: originalInstructorState
        } = this.state;
        const originalInstructor = external_immutability_helper_default()(originalInstructorState, {
          $merge: nextProps.instructor
        });
        this.setState({
          originalInstructor,
          updatedInstructor
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenDeleteLocationModal", pendingLocationDelete => this.setState({
      deleteLocationModalOpen: true,
      pendingLocationDelete
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDeleteLocationModal", () => this.setState({
      deleteLocationModalOpen: false,
      pendingLocationDelete: {}
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenNewLocationModal", () => this.setState({
      newLocationModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseNewLocationModal", () => this.setState({
      newLocationModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenEditLocationModal", activeLocation => this.setState({
      editLocationModalOpen: true,
      activeLocation
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseEditLocationModal", () => this.setState({
      editLocationModalOpen: false,
      dropdownIsOpen: false,
      activeLocation: {}
    }));

    Object(defineProperty["a" /* default */])(this, "onCancelChanges", () => {
      const {
        onClose
      } = this.props;
      const {
        updatedInstructor,
        originalInstructor
      } = this.state;
      this.setState({
        updatedInstructor: originalInstructor
      }, onClose());
    });

    Object(defineProperty["a" /* default */])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(defineProperty["a" /* default */])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        updatedInstructor: {
          id,
          basicInfo,
          accountInfo,
          contactInfo,
          locations
        }
      } = this.state;
      const {
        onSaveLocationError,
        onSaveInstructorChanges,
        onClose
      } = this.props; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
      // const valid = true;

      const valid = await Object(fieldValidation["b" /* nestedEditFieldValidation */])(this.state, this.state.updatedInstructor, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveLocationError();
        console.warn('not valid');
      }

      const postBody = {
        id,
        basicInfo,
        accountInfo,
        contactInfo,
        locations
      };
      onSaveInstructorChanges(postBody);
      console.warn('stubbed out save function');
      onClose();
    });

    Object(defineProperty["a" /* default */])(this, "initialInstructorMount", () => this.state.originalInstructor.id !== this.props.instructor.id);

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section) => {
      const {
        updatedInstructor: previousInstructorState
      } = this.state;
      const value = event.target ? event.target.value : event;
      const updatedInstructor = external_immutability_helper_default()(previousInstructorState, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState({
        updatedInstructor
      });
    });

    Object(defineProperty["a" /* default */])(this, "renderModalHeader", () => {
      const {
        instructor: {
          accountInfo: {
            lastName: initialLastName,
            firstName: initialFIrstName,
            email: initialEmail
          }
        }
      } = this.props;
      const {
        updatedInstructor: {
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

      if (this.initialInstructorMount()) {
        lastName = initialLastName;
        firstName = initialFIrstName;
        email = initialEmail;
      } else {
        lastName = updatedLastName;
        firstName = updatedFirstName;
        email = updatedEmail;
      }

      return InstructorDetailsModal_jsx(external_react_default.a.Fragment, null, InstructorDetailsModal_jsx("h4", {
        className: "h3"
      }, lastName, ", ", firstName), InstructorDetailsModal_jsx("a", {
        href: `mailto:${email}`
      }, email));
    });

    this.state = {
      deleteLocationModalOpen: false,
      newLocationModalOpen: false,
      editLocationModalOpen: false,
      pendingLocationDelete: {},
      activeLocation: {},
      dropdownIsOpen: false,
      dropdownIndex: null,
      originalInstructor: {
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
      updatedInstructor: {
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
      instructor: {
        id,
        basicInfo,
        accountInfo,
        contactInfo,
        locations
      } = {}
    } = this.props;
    const updatedInstructor = {
      id,
      basicInfo,
      accountInfo,
      contactInfo,
      locations
    };
    const {
      originalInstructor: originalInstructorState
    } = this.state;
    const originalInstructor = external_immutability_helper_default()(originalInstructorState, {
      $merge: updatedInstructor
    });
    this.setState({
      originalInstructor,
      updatedInstructor
    }); // eslint-disable-line
  } // This resets the component state to reflect the details of the next instructor the user clicks on


  render() {
    const {
      open,
      instructor: {
        accountInfo,
        contactInfo,
        locations
      },
      onOpenDeleteModal,
      deleteModalOpen
    } = this.props;
    const {
      dropdownIsOpen,
      dropdownIndex,
      activeLocation,
      deleteLocationModalOpen,
      pendingLocationDelete,
      newLocationModalOpen,
      editLocationModalOpen,
      updatedInstructor: {
        accountInfo: updatedAccountInfo,
        contactInfo: updatedContactInfo,
        locations: updatedLocations
      }
    } = this.state;
    return InstructorDetailsModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "overlay"
    }, InstructorDetailsModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCancelChanges,
      nestedModals: deleteModalOpen || deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen
    }, InstructorDetailsModal_jsx("div", {
      id: "modal_user_edit",
      className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
    }, InstructorDetailsModal_jsx("div", {
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      },
      className: "jsx-2557376288" + " " + "owner-box card-panel card-panel-title"
    }, InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-panel-row row"
    }, InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s9"
    }, InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "user-block"
    }, InstructorDetailsModal_jsx("div", {
      style: {
        backgroundColor: '#0085ce',
        color: '#fff'
      },
      className: "jsx-2557376288" + " " + "user-circle"
    }, InstructorDetailsModal_jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "",
      className: "jsx-2557376288"
    })), InstructorDetailsModal_jsx("div", {
      style: {
        color: '#fff'
      },
      className: "jsx-2557376288" + " " + "user-text"
    }, this.renderModalHeader()))), InstructorDetailsModal_jsx("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-2557376288" + " " + "col"
    }, InstructorDetailsModal_jsx("span", {
      className: "jsx-2557376288" + " " + "block-icon"
    }, InstructorDetailsModal_jsx("i", {
      className: "jsx-2557376288" + " " + "icon-owner"
    }), InstructorDetailsModal_jsx("span", {
      className: "jsx-2557376288" + " " + "text-icon"
    }, "Owner"))))), InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-content"
    }, InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-body"
    }, InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "row mb-0"
    }, InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s12 l6"
    }, InstructorDetailsModal_jsx(SharedModalComponents_AccountInfo, {
      state: this.initialInstructorMount() ? accountInfo : updatedAccountInfo,
      handleDetailsChange: this.handleDetailsChange
    }), InstructorDetailsModal_jsx(SharedModalComponents_ContactInfo, {
      state: this.initialInstructorMount() ? contactInfo : updatedContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s12 l6"
    }, InstructorDetailsModal_jsx(SharedModalComponents_Locations, {
      state: this.initialInstructorMount() ? locations : updatedLocations,
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
    })))), InstructorDetailsModal_jsx("div", {
      className: "jsx-2557376288" + " " + "modal-footer"
    }, InstructorDetailsModal_jsx("a", {
      href: "#",
      onClick: onOpenDeleteModal,
      className: "jsx-2557376288" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Delete"), InstructorDetailsModal_jsx("a", {
      href: "#",
      onClick: this.onCancelChanges,
      className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
    }, "Cancel"), InstructorDetailsModal_jsx("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2557376288" + " " + "btn"
    }, "Save"))))))), InstructorDetailsModal_jsx(style_default.a, {
      id: "2557376288"
    }, [".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-2557376288{margin:0;border-radius:6px;}", ".modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-2557376288{opacity:1;visibility:visible;}", ".modal-footer.jsx-2557376288{background-color:white;}"]));
  }

}

/* harmony default export */ var components_InstructorDetailsModal = (InstructorDetailsModal_InstructorDetailsModal);
// CONCATENATED MODULE: ./components/Instructor/ListPage/components/InstructorCard/index.js

var InstructorCard_jsx = external_react_default.a.createElement;





const data = (value, total) => ({
  datasets: [{
    data: [value, total - value],
    backgroundColor: ['#62b771', '#eaeaea']
  }]
});

class InstructorCard_InstructorCard extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onOpenInstructorDetailsModal", () => {
      this.props.onCloseDropdown();
      this.setState({
        instructorDetailsModalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(this, "onCloseInstructorDetailsModal", () => this.setState({
      instructorDetailsModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onCloneInstructor", () => this.props.onCloneInstructor(this.props.instructor));

    Object(defineProperty["a" /* default */])(this, "onOpenDeleteModal", () => this.setState({
      deleteModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDeleteModal", () => this.setState({
      deleteModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onConfirmDeleteInstructor", () => {
      const {
        onDeleteInstructor,
        instructor,
        onCloseDropdown
      } = this.props;
      onDeleteInstructor(instructor);
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
      instructorDetailsModalOpen: false,
      deleteModalOpen: false
    };
  }

  render() {
    const {
      deleteModalOpen,
      instructorDetailsModalOpen
    } = this.state;
    const {
      dropdownIsOpen,
      dropdownIndex,
      index,
      instructor,
      onSaveInstructorChanges
    } = this.props;
    const {
      accountInfo: {
        lastName,
        firstName,
        email
      } = {},
      basicInfo: {
        activeStudents,
        pastStudents,
        unactivatedStudents,
        averageImprovement,
        averageInitialScore,
        averageFinalScore,
        studentsAchievingTargetScore
      } = {}
    } = instructor;
    return InstructorCard_jsx(external_react_default.a.Fragment, null, InstructorCard_jsx(components_InstructorDetailsModal, {
      instructor: instructor,
      open: instructorDetailsModalOpen,
      onClose: this.onCloseInstructorDetailsModal,
      onSaveInstructorChanges: onSaveInstructorChanges,
      onOpenDeleteModal: this.onOpenDeleteModal,
      deleteModalOpen: deleteModalOpen
    }), InstructorCard_jsx(Modal["a" /* default */], {
      open: deleteModalOpen,
      onConfirm: this.onConfirmDeleteInstructor,
      onClose: this.onCloseDeleteModal,
      header: "Are You Sure?",
      body: "Deleting this instructor will be permanent"
    }), InstructorCard_jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, InstructorCard_jsx("div", {
      className: "card-main card-location card card-large"
    }, InstructorCard_jsx("div", {
      className: "owner-box card-panel",
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      }
    }, InstructorCard_jsx("div", {
      className: "card-panel-row row"
    }, InstructorCard_jsx("div", {
      className: "col s9"
    }, InstructorCard_jsx("div", {
      className: "user-block"
    }, InstructorCard_jsx("div", {
      className: "user-circle",
      style: {
        backgroundColor: '#18b5e9',
        color: '#fff'
      }
    }, InstructorCard_jsx("span", {
      className: "initials"
    }, "NT")), InstructorCard_jsx("div", {
      className: "user-text",
      style: {
        color: '#fff'
      }
    }, InstructorCard_jsx("h4", {
      className: "h3"
    }, lastName, ", ", firstName), InstructorCard_jsx("a", {
      href: `mailto:${email}`
    }, email)))), InstructorCard_jsx("div", {
      className: "col s3 right-align"
    }, InstructorCard_jsx("div", {
      className: "row icons-row"
    }, InstructorCard_jsx("div", {
      className: "col right-align"
    }, InstructorCard_jsx("span", {
      className: "block-icon"
    }, InstructorCard_jsx("i", {
      className: "icon-user"
    }), InstructorCard_jsx("span", {
      className: "text-icon"
    }, "Instructor"))), InstructorCard_jsx("div", {
      className: "dropdown-block col"
    }, InstructorCard_jsx("a", {
      href: "#",
      onClick: this.handleDropdownClick,
      className: "dropdown-trigger btn",
      "data-target": "dropdown05"
    }, InstructorCard_jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? InstructorCard_jsx("ul", {
      id: "dropdown05",
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
    }, InstructorCard_jsx("li", null, InstructorCard_jsx("a", {
      href: "#",
      onClick: this.onOpenInstructorDetailsModal,
      className: "modal-trigger link-block"
    }, "Edit")), InstructorCard_jsx("li", null, InstructorCard_jsx("a", {
      href: "#",
      onClick: this.onCloneInstructor
    }, "Clone")), InstructorCard_jsx("li", null, InstructorCard_jsx("a", {
      href: "#!"
    }, "Impersonate")), InstructorCard_jsx("li", null, InstructorCard_jsx("a", {
      href: "#",
      onClick: this.onOpenDeleteModal
    }, "Delete"))) : null))))), InstructorCard_jsx("div", {
      className: "card-content"
    }, InstructorCard_jsx("div", {
      className: "row d-flex align-items-center mb-0"
    }, InstructorCard_jsx("div", {
      className: "col s12 m5"
    }, InstructorCard_jsx("div", {
      className: "chart-container"
    }, InstructorCard_jsx("div", {
      className: "chart-holder"
    }, InstructorCard_jsx(external_react_chartjs_2_["Doughnut"], {
      data: () => data(activeStudents, activeStudents - 10),
      height: 110,
      width: 110,
      options: {
        circumference: 1.45 * Math.PI,
        rotation: -3.85,
        cutoutPercentage: 55,
        tooltips: false
      }
    }), InstructorCard_jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#31837a',
        marginBottom: '-15px'
      }
    }, Math.floor(studentsAchievingTargetScore / activeStudents * 100), "%")), InstructorCard_jsx("div", {
      className: "chart-description",
      style: {
        color: '#31837a',
        marginTop: '45px'
      }
    }, "Students Who Achieved Target Score"))), InstructorCard_jsx("div", {
      className: "col s12 m7"
    }, InstructorCard_jsx("ul", {
      className: "points-list"
    }, InstructorCard_jsx("li", {
      className: "style-red-darken"
    }, InstructorCard_jsx("span", {
      className: "badge-circle"
    }, activeStudents), InstructorCard_jsx("span", {
      className: "point-text"
    }, "active students")), InstructorCard_jsx("li", {
      className: "style-pink-darken"
    }, InstructorCard_jsx("span", {
      className: "badge-circle"
    }, pastStudents), InstructorCard_jsx("span", {
      className: "point-text"
    }, "past students")), InstructorCard_jsx("li", null, InstructorCard_jsx("span", {
      className: "badge-circle"
    }, unactivatedStudents), InstructorCard_jsx("span", {
      className: "point-text"
    }, "unactivated students")), InstructorCard_jsx("li", {
      className: "style-blue-light"
    }, InstructorCard_jsx("span", {
      className: "badge-circle"
    }, "+", averageImprovement), InstructorCard_jsx("span", {
      className: "point-text"
    }, "average improvement")), InstructorCard_jsx("li", {
      className: "style-blue"
    }, InstructorCard_jsx("span", {
      className: "badge-circle"
    }, averageInitialScore), InstructorCard_jsx("span", {
      className: "point-text"
    }, "average initial score")), InstructorCard_jsx("li", {
      className: "style-blue-dark"
    }, InstructorCard_jsx("span", {
      className: "badge-circle"
    }, averageFinalScore), InstructorCard_jsx("span", {
      className: "point-text"
    }, "average final score"))))), InstructorCard_jsx("div", {
      className: "card-footer"
    }, InstructorCard_jsx("div", {
      className: "meta-info"
    }, InstructorCard_jsx("p", {
      className: "truncate"
    }, "First Location,  Second Location, Possible Additional Truncated More Locatioa...")))))));
  }

}

/* harmony default export */ var components_InstructorCard = (InstructorCard_InstructorCard);
// EXTERNAL MODULE: ./components/utils/locationOptions.js
var locationOptions = __webpack_require__("KnbY");

// EXTERNAL MODULE: ./components/utils/sortOptions.js
var sortOptions = __webpack_require__("OI+E");

// CONCATENATED MODULE: ./components/Instructor/ListPage/components/FilterSection/index.js

var FilterSection_jsx = external_react_default.a.createElement;







class FilterSection_FilterSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);

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

    this.state = {
      name: '',
      location: {},
      sort: {}
    };
  } // This function does two things - first, it changes the filter state regardless of the field it's coming from
  // If either location or sort filters are changed, we dispatch the appropriate action in ListPage to ensure the rendered instructors are filtered/sorted appropriately
  // eslint-disable-next-line consistent-return


  render() {
    // eslint-disable-next-line no-unused-vars
    const {
      name,
      location,
      sort
    } = this.state;
    return FilterSection_jsx("div", {
      className: "filter-inputs-holder"
    }, FilterSection_jsx("div", {
      className: "row mb-0"
    }, FilterSection_jsx("div", {
      className: "col s12 m4 l3"
    }, FilterSection_jsx("div", {
      className: "search-field input-field"
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
      onClick: this.submitNameFilter
    }, FilterSection_jsx("i", {
      className: "icon-search"
    })), FilterSection_jsx("label", {
      className: name.length ? 'label active' : 'label',
      htmlFor: "name_search"
    }, "Search"))), FilterSection_jsx("div", {
      className: "col s12 m4 l3"
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
      className: "col s12 m4 l3"
    }, FilterSection_jsx("div", {
      className: "input-field"
    }, FilterSection_jsx(Dropdown["a" /* default */], {
      value: Object(getValueFromState["a" /* default */])(sort, sortOptions["a" /* default */]),
      onChange: event => this.handleFilterChange(event, 'sort'),
      options: sortOptions["a" /* default */],
      label: "Sort",
      stateKey: "sort",
      dropdownKey: "sort"
    })))));
  }

}

/* harmony default export */ var components_FilterSection = (FilterSection_FilterSection);
// CONCATENATED MODULE: ./components/Instructor/ListPage/components/NewInstructorModal/utils/initialState.js
/* harmony default export */ var initialState = ({
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
});
// CONCATENATED MODULE: ./components/Instructor/ListPage/components/NewInstructorModal/index.js


var NewInstructorModal_jsx = external_react_default.a.createElement;

/* eslint-disable no-unused-vars */










const NewInstructorModal_idGenerator = () => Math.floor(Math.random() * 100 + 1);

class NewInstructorModal_NewInstructorModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenDeleteLocationModal", pendingLocationDelete => this.setState({
      deleteLocationModalOpen: true,
      pendingLocationDelete
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDeleteLocationModal", () => this.setState({
      deleteLocationModalOpen: false,
      pendingLocationDelete: {}
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenNewLocationModal", () => this.setState({
      newLocationModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseNewLocationModal", () => this.setState({
      newLocationModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenEditLocationModal", activeLocation => this.setState({
      editLocationModalOpen: true,
      activeLocation
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseEditLocationModal", () => this.setState({
      editLocationModalOpen: false,
      dropdownIsOpen: false,
      activeLocation: {}
    }));

    Object(defineProperty["a" /* default */])(this, "onResetInstructor", () => this.setState(initialState));

    Object(defineProperty["a" /* default */])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetInstructor();
    });

    Object(defineProperty["a" /* default */])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(defineProperty["a" /* default */])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        accountInfo,
        contactInfo,
        locations
      } = this.state;
      const {
        onAddNewInstructor,
        onClose
      } = this.props; // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
      // const valid = true;

      const valid = await Object(fieldValidation["a" /* nestedCreateFieldValidation */])(this.state, this.onSetValidation, validation => console.warn('validation', validation));

      if (!valid) {
        // return onSaveLocationError();
        console.warn('not valid');
      }

      const id = NewInstructorModal_idGenerator();
      const postBody = {
        id,
        accountInfo,
        contactInfo,
        locations
      };
      onAddNewInstructor(postBody);
      console.warn('stubbed out save function');
      onClose();
    });

    Object(defineProperty["a" /* default */])(this, "handleDetailsChange", (event, name, section) => {
      const value = event.target ? event.target.value : event;
      const updatedState = external_immutability_helper_default()(this.state, {
        [section]: {
          $merge: {
            [name]: value
          }
        }
      });
      this.setState(updatedState);
    });

    Object(defineProperty["a" /* default */])(this, "renderModalHeader", () => {
      const {
        accountInfo: {
          lastName,
          firstName,
          email
        }
      } = this.state;
      return NewInstructorModal_jsx(external_react_default.a.Fragment, null, NewInstructorModal_jsx("h4", {
        className: "h3"
      }, lastName, ", ", firstName), NewInstructorModal_jsx("a", {
        href: `mailto:${email}`
      }, email));
    });

    this.state = {
      deleteLocationModalOpen: false,
      newLocationModalOpen: false,
      editLocationModalOpen: false,
      pendingLocationDelete: {},
      activeLocation: {},
      dropdownIsOpen: false,
      dropdownIndex: null,
      accountInfo: {
        firstName: '',
        lastName: '',
        email: '',
        gender: {}
      },
      contactInfo: {
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
      },
      locations: [],
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

  render() {
    const {
      open
    } = this.props;
    const {
      dropdownIsOpen,
      dropdownIndex,
      activeLocation,
      deleteLocationModalOpen,
      pendingLocationDelete,
      newLocationModalOpen,
      editLocationModalOpen,
      accountInfo,
      contactInfo,
      locations
    } = this.state;
    return NewInstructorModal_jsx(Portal["a" /* default */], {
      selector: "#modal"
    }, open && NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "overlay"
    }, NewInstructorModal_jsx(ClickOffComponentWrapper["a" /* default */], {
      onOuterClick: this.onCloseModal,
      nestedModals: deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen
    }, NewInstructorModal_jsx("div", {
      id: "modal_user_edit",
      className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
    }, NewInstructorModal_jsx("div", {
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      },
      className: "jsx-2557376288" + " " + "owner-box card-panel card-panel-title"
    }, NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-panel-row row"
    }, NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s9"
    }, NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "user-block"
    }, NewInstructorModal_jsx("div", {
      style: {
        backgroundColor: '#0085ce',
        color: '#fff'
      },
      className: "jsx-2557376288" + " " + "user-circle"
    }, NewInstructorModal_jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "",
      className: "jsx-2557376288"
    })), NewInstructorModal_jsx("div", {
      style: {
        color: '#fff'
      },
      className: "jsx-2557376288" + " " + "user-text"
    }, this.renderModalHeader()))), NewInstructorModal_jsx("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-2557376288" + " " + "col"
    }, NewInstructorModal_jsx("span", {
      className: "jsx-2557376288" + " " + "block-icon"
    }, NewInstructorModal_jsx("i", {
      className: "jsx-2557376288" + " " + "icon-owner"
    }), NewInstructorModal_jsx("span", {
      className: "jsx-2557376288" + " " + "text-icon"
    }, "Owner"))))), NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-content"
    }, NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "card-body"
    }, NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "row mb-0"
    }, NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s12 l6"
    }, NewInstructorModal_jsx(SharedModalComponents_AccountInfo, {
      state: accountInfo,
      handleDetailsChange: this.handleDetailsChange
    }), NewInstructorModal_jsx(SharedModalComponents_ContactInfo, {
      state: contactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "col s12 l6"
    }, NewInstructorModal_jsx(SharedModalComponents_Locations, {
      state: locations,
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
    })))), NewInstructorModal_jsx("div", {
      className: "jsx-2557376288" + " " + "modal-footer"
    }, NewInstructorModal_jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
    }, "Cancel"), NewInstructorModal_jsx("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2557376288" + " " + "btn"
    }, "Save"))))))), NewInstructorModal_jsx(style_default.a, {
      id: "2557376288"
    }, [".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}", ".card-modal.jsx-2557376288{margin:0;border-radius:6px;}", ".modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}", ".modal-custom.jsx-2557376288{opacity:1;visibility:visible;}", ".modal-footer.jsx-2557376288{background-color:white;}"]));
  }

}

/* harmony default export */ var components_NewInstructorModal = (NewInstructorModal_NewInstructorModal);
// EXTERNAL MODULE: ./components/utils/sortFunctions.js
var sortFunctions = __webpack_require__("PFiW");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./components/Instructor/index/api.js

const API_URL = undefined;
const fetchInstructorsApi = () => fetch(`${API_URL}/api/instructors`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
}).then(res => res.json()).then(({
  data
}) => {
  const {
    students = []
  } = data;
  const formattedInstructors = students.reduce((finalArry, currentInstructor) => {
    const {
      id,
      first_name,
      last_name,
      email,
      sex,
      type,
      password,
      created_at,
      updated_at,
      user_address
    } = currentInstructor;
    const newInstructor = {
      id,
      accountInfo: {
        lastName: last_name,
        firstName: first_name,
        email,
        gender: sex
      },
      contactInfo: {
        phone: "1234567890",
        streetAddress: "1234 Test Road",
        city: "Austin",
        state: "TX",
        zip: "78751"
      },
      basicInfo: {
        activeStudents: 15,
        pastStudents: 24,
        unactivatedStudents: 29,
        averageImprovement: 185,
        averageInitialScore: 1037,
        averageFinalScore: 1218,
        studentsAchievingTargetScore: 12
      }
    };
    finalArry.push(newInstructor);
    return finalArry;
  }, []);
  return {
    formattedInstructors
  };
}).catch(err => err);
const createNewInstructorApi = insturctor => fetch(`${API_URL}/api/commands/create-instructor`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: stringify_default()(insturctor)
}).then(res => res.json()).catch(err => err);
/* harmony default export */ var api = ([createNewInstructorApi, fetchInstructorsApi]);
// EXTERNAL MODULE: ./components/Instructor/index/constants.js
var constants = __webpack_require__("9Fm/");

// CONCATENATED MODULE: ./components/Instructor/index/actions.js

function setInstructors(instructors) {
  return {
    type: constants["a" /* SET_INSTRUCTORS */],
    instructors
  };
}
// CONCATENATED MODULE: ./components/Instructor/index/selectors.js


const selectInstructorDomain = state => state.instructorReducer;

const makeSelectInstructorPageState = () => Object(external_reselect_["createSelector"])(selectInstructorDomain, substate => substate ? substate.toJS() : {});

const makeSelectInstructors = () => Object(external_reselect_["createSelector"])(makeSelectInstructorPageState(), substate => substate.instructors);

/* harmony default export */ var selectors = (selectInstructorDomain);

// CONCATENATED MODULE: ./components/Instructor/ListPage/index.js


var ListPage_jsx = external_react_default.a.createElement;








 // import { saveNewSuccess as savePracticeTestSuccess, saveChangesSuccess, saveNewError as savePracticeTestError } from '../../utils/fieldValidation';






class ListPage_InstructorListPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "componentDidMount", async () => {
      const {
        onSetInstructors,
        instructors
      } = this.props;

      if (instructors.length === 0) {
        const {
          formattedInstructors: instructors
        } = await fetchInstructorsApi();
        this.setState({
          instructors
        });
        onSetInstructors(instructors);
      }
    });

    Object(defineProperty["a" /* default */])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIsOpen: true,
      dropdownIndex
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false,
      dropdownIndex: null
    }));

    Object(defineProperty["a" /* default */])(this, "onOpenInstructorModal", () => this.setState({
      instructorModalOpen: true
    }));

    Object(defineProperty["a" /* default */])(this, "onCloseInstructorModal", () => this.setState({
      instructorModalOpen: false
    }));

    Object(defineProperty["a" /* default */])(this, "onAddNewInstructor", newInstructor => {
      this.onCreateNewInstructorApi(newInstructor);
      const {
        instructors,
        onSetInstructors
      } = this.props;
      const tempBasicInfo = {
        activeStudents: 15,
        pastStudents: 24,
        unactivatedStudents: 29,
        averageImprovement: 185,
        averageInitialScore: 1037,
        averageFinalScore: 1218,
        studentsAchievingTargetScore: 12
      };
      const formattedNewInstructor = external_immutability_helper_default()(newInstructor, {
        basicInfo: {
          $set: tempBasicInfo
        }
      });
      const updatedInstructors = external_immutability_helper_default()(instructors, {
        $push: [formattedNewInstructor]
      });
      onSetInstructors(updatedInstructors);
    });

    Object(defineProperty["a" /* default */])(this, "onDeleteInstructor", deletedInstructor => {
      const updatedProps = external_immutability_helper_default()(this.props, {
        instructors: unfilteredInstructors => unfilteredInstructors.filter(instructor => instructor.id !== deletedInstructor.id)
      });
      const {
        onSetInstructors
      } = this.props;
      onSetInstructors(updatedProps.instructors);
    });

    Object(defineProperty["a" /* default */])(this, "onCloneInstructor", instructor => {
      const cloneIndex = this.props.instructors.indexOf(instructor);
      const newId = this.props.instructors.length + 1;
      const updatedInstructor = external_immutability_helper_default()(instructor, {
        id: {
          $set: newId
        }
      });
      const instructors = external_immutability_helper_default()(this.props.instructors, {
        $splice: [[cloneIndex, 0, updatedInstructor]]
      });
      this.onCloseDropdown();
      const {
        onSetInstructors
      } = this.props;
      onSetInstructors(instructors);
      this.onCreateNewInstructorApi(instructor);
    });

    Object(defineProperty["a" /* default */])(this, "onCreateNewInstructorApi", async instructor => {
      const newId = this.props.instructors.length + 1;
      const {
        accountInfo: {
          firstName,
          lastName,
          email,
          gender
        },
        contactInfo: {
          state,
          phone,
          streetAddress,
          city,
          zip
        }
      } = instructor;
      const formattedBody = {
        id: newId,
        first_name: firstName,
        last_name: lastName,
        email,
        gender,
        state,
        locations: [],
        phone,
        address: streetAddress,
        city,
        zip
      };
      await createNewInstructorApi(formattedBody);
    });

    Object(defineProperty["a" /* default */])(this, "onSaveInstructorChanges", updatedInstructor => {
      const {
        instructors: originalInstructors,
        onSetInstructors
      } = this.props;
      const instructorToUpdate = originalInstructors.filter(instructor => instructor.id === updatedInstructor.id)[0];
      const updatedInstructorIndex = originalInstructors.indexOf(instructorToUpdate);
      const instructors = external_immutability_helper_default()(originalInstructors, {
        $splice: [[updatedInstructorIndex, 1, updatedInstructor]]
      }); // saveChangesSuccess();
      // this.setState({ instructors });

      onSetInstructors(instructors);
    });

    Object(defineProperty["a" /* default */])(this, "onSetFilteredState", filterName => this.setState({
      instructorsAreFiltered: true,
      filterName
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredState", () => this.setState({
      instructorsAreFiltered: false,
      filterName: ''
    }));

    Object(defineProperty["a" /* default */])(this, "onSetFilteredLocationState", filterLocation => this.setState({
      instructorsAreFiltered: true,
      filterLocation
    }));

    Object(defineProperty["a" /* default */])(this, "onUnsetFilteredLocationState", () => this.setState({
      filterLocation: ''
    }, this.checkForFilteredState));

    Object(defineProperty["a" /* default */])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(defineProperty["a" /* default */])(this, "onFilterByName", () => {
      const {
        instructors
      } = this.props;
      const {
        filterName
      } = this.state;
      return instructors.reduce((finalArr, currentInstructor) => {
        const {
          accountInfo: {
            lastName,
            firstName
          }
        } = currentInstructor;
        const instructorString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;

        if (instructorString.indexOf(filterName) !== -1 && finalArr.indexOf(currentInstructor) === -1) {
          finalArr.push(currentInstructor);
        }

        return finalArr;
      }, []);
    });

    Object(defineProperty["a" /* default */])(this, "onFilterByLocation", (preFilteredInstructors = []) => {
      const {
        instructors: allInstructors
      } = this.props;
      const {
        filterLocation
      } = this.state;
      let instructors;

      if (preFilteredInstructors.length) {
        instructors = preFilteredInstructors;
      } else {
        instructors = allInstructors;
      }

      return instructors.reduce((finalArr, currentInstructor) => {
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

    Object(defineProperty["a" /* default */])(this, "onSortInstructors", instructors => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'firstNameAscending':
          return instructors.sort(sortFunctions["i" /* firstNameAscending */]);

        case 'firstNameDescending':
          return instructors.sort(sortFunctions["j" /* firstNameDescending */]);

        case 'lastNameAscending':
          return instructors.sort(sortFunctions["n" /* lastNameAscending */]);

        case 'lastNameDescending':
          return instructors.sort(sortFunctions["o" /* lastNameDescending */]);

        default:
          break;
      }
    });

    Object(defineProperty["a" /* default */])(this, "getMappableInstructors", () => {
      const {
        filterName,
        filterLocation,
        sort
      } = this.state;
      const {
        instructors: allInstructors
      } = this.props;
      let instructors;

      if (filterName.length && !filterLocation.length) {
        instructors = this.onFilterByName();
      } else if (!filterName.length && filterLocation.length) {
        instructors = this.onFilterByLocation();
      } else if (filterName.length && filterLocation.length) {
        const filteredByName = this.onFilterByName();
        instructors = this.onFilterByLocation(filteredByName);
      } else {
        instructors = allInstructors;
      }

      if (sort) {
        return this.onSortInstructors(instructors);
      }

      return instructors || [];
    });

    Object(defineProperty["a" /* default */])(this, "checkForFilteredState", () => {
      const {
        filterName,
        filterLocation
      } = this.state;

      if (!filterName.length && !filterLocation.length) {
        this.setState({
          instructorsAreFiltered: false
        });
      }
    });

    Object(defineProperty["a" /* default */])(this, "mapInstructors", () => {
      const instructors = this.getMappableInstructors();
      return instructors.map((instructor, index) => ListPage_jsx(components_InstructorCard, {
        index: index,
        key: instructor.id,
        instructor: instructor,
        dropdownIsOpen: this.state.dropdownIsOpen,
        onSetDropdown: this.onSetDropdown,
        onCloseDropdown: this.onCloseDropdown,
        dropdownIndex: this.state.dropdownIndex,
        onDeleteInstructor: this.onDeleteInstructor,
        onCloneInstructor: this.onCloneInstructor,
        onSaveInstructorChanges: this.onSaveInstructorChanges
      }));
    });

    this.state = {
      instructorModalOpen: false,
      dropdownIndex: null,
      dropdownIsOpen: false,
      instructorsAreFiltered: false,
      filterName: '',
      filterLocation: '',
      sort: ''
    };
  }

  render() {
    const {
      instructorModalOpen
    } = this.state;
    return ListPage_jsx(external_react_default.a.Fragment, null, ListPage_jsx(components_NewInstructorModal, {
      open: instructorModalOpen,
      onClose: this.onCloseInstructorModal,
      onAddNewInstructor: this.onAddNewInstructor
    }), ListPage_jsx("div", {
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
      className: "icon-instructors"
    }), ListPage_jsx("span", {
      className: "heading-block"
    }, "Instructors"))))), ListPage_jsx(components_FilterSection, {
      onSetSort: this.onSetSort,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredLocationState: this.onSetFilteredLocationState,
      onUnsetFilteredLocationState: this.onUnsetFilteredLocationState
    }), ListPage_jsx("div", {
      className: "content-section"
    }, ListPage_jsx("div", {
      className: "row d-flex-content"
    }, this.mapInstructors())))), ListPage_jsx("a", {
      href: "#",
      onClick: this.onOpenInstructorModal,
      className: "waves-effect waves-teal btn add-btn"
    }, ListPage_jsx("i", {
      className: "material-icons"
    }, "add"), "New Instructor"));
  }

}

const mapStateToProps = Object(external_reselect_["createStructuredSelector"])({
  instructors: makeSelectInstructors()
});

function mapDispatchToProps(dispatch) {
  return {
    onSetInstructors: instructors => dispatch(setInstructors(instructors))
  };
}

const withConnect = Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ var ListPage = (Object(external_redux_["compose"])(withConnect)(ListPage_InstructorListPage));
// CONCATENATED MODULE: ./pages/all-instructors.js
var all_instructors_jsx = external_react_default.a.createElement;

 // eslint-disable-next-line react/prefer-stateless-function

class all_instructors_InstructorList extends external_react_default.a.Component {
  render() {
    return all_instructors_jsx("main", {
      id: "main",
      role: "main"
    }, all_instructors_jsx("div", {
      className: "main-holder grey lighten-3"
    }, all_instructors_jsx(ListPage, null)));
  }

}

/* harmony default export */ var all_instructors = __webpack_exports__["default"] = (all_instructors_InstructorList); // TODO: Figure out what we're going to do with this code
// {/* <!-- Modal structure CREATE --> */}
// <div id="modal_user_create" class="modal modal-custom modal-custom-large modal-gray">
// <div class="card-modal card-main card grey lighten-3">
//   <div class="card-panel card-panel-title" style={{ backgroundColor: '#31837a', color: '#fff' }}>
//     <div class="card-panel-row row">
//       <div class="col">
//         <h3 class="h2">
//           <span class="heading-holder">
//             <span class="heading-block">Create New Owner</span>
//           </span>
//         </h3>
//       </div>
//       <div class="col">
//         <span class="block-icon">
//           <i class="icon-owner"></i>
//           <span class="text-icon">Owner</span>
//         </span>
//       </div>
//     </div>
//   </div>
//   <div class="card-content">
//     <div class="card-body">
//       <div class="row mb-0">
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Owner Contact Info</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="first_name_create" />
//                     <label class="label" for="first_name_create">First Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="last_name_create" />
//                     <label class="label" for="last_name_create">Last Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_email_create" />
//                     <label class="label" for="contact_email_create">Email Address*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12 l7">
//                     <select id="state_edit">
//                       <option>Other</option>
//                       <option>Other</option>
//                       <option>Other</option>
//                     </select>
//                     <label class="label" for="state_edit">Gender*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="tel" id="contact_phone_create" />
//                     <label class="label" for="contact_phone_create">Phone (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_address_create" />
//                     <label class="label" for="contact_address_create">Street Address (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_city_create" />
//                     <label class="label" for="contact_city_create">City (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="col s12 m6 l5">
//                     <div class="input-field">
//                       <select id="contact_state_create">
//                         <option>State (optional)</option>
//                         <option>State</option>
//                         <option>State</option>
//                       </select>
//                       <label class="label" for="contact_state_create">Test</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6 l7">
//                     <div class="input-field">
//                       <input type="tel" id="zip_create" />
//                       <label class="label" for="zip_create">Zip (optional)</label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Contact Info</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_name_create" value="Tutor Doctor" />
//                     <label class="label" for="location_name_create">Location Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_nickname_create" value="Tutor Doctor - Newport Beach, CA" />
//                     <label class="label" for="location_nickname_create">Location Nickname*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_email_create" value="info@clearchoiceprep.com" />
//                     <label class="label" for="location_email_create">Location Email*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="tel" id="location_phone_create" />
//                     <label class="label" for="location_phone_create">Location Phone Number (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="url" id="location_website_create" />
//                     <label class="label" for="location_website_create">Website (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_address_create" />
//                     <label class="label" for="location_address_create">Street Address (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_city_create" />
//                     <label class="label" for="location_city_create">City (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="col s12 m6 l5">
//                     <div class="input-field">
//                       <select id="location_state_create">
//                         <option>State (optional)</option>
//                         <option>State</option>
//                         <option>State</option>
//                       </select>
//                       <label class="label" for="location_state_create">Test</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6 l7">
//                     <div class="input-field">
//                       <input type="tel" id="location_zip_create" />
//                       <label class="label" for="location_zip_create">Zip (optional)</label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="row mb-0">
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Email Settings</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="auto_email_create" value="Clear Choice Prep <messages@clearchoiceprep.com>" />
//                     <label class="label" for="auto_email_create">Automated Emails Come From (email)*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <textarea id="email_salutation_create" class="materialize-textarea">All the best,The Clear Choice Team</textarea>
//                     <label class="label" for="email_salutation_create">Automated Email Salutation*</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Branding</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_url_create" value="newport-beach.tutordoctor.mysatcourse.com" />
//                     <label class="label" for="location_url_create">Location Url*</label>
//                   </div>
//                 </div>
//                 {/* <!-- colorpicker row --> */}
//                 <div class="row mb-0">
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_color_1_create" readonly />
//                     <label class="label" for="header_color_1_create">Header Color 1*</label>
//                   </div>
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_color_2_create" readonly />
//                     <label class="label" for="header_color_2_create">Header Color 2*</label>
//                   </div>
//                 </div>
//                 {/* <!-- colorpicker row --> */}
//                 <div class="row mb-0">
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_logo_bgcolor_create" readonly />
//                     <label class="label" for="header_logo_bgcolor_create">Header Logo Background Color*</label>
//                   </div>
//                   <div class="input-field col s12 m6">
//                     <input type="text" value="100%" id="header_logo_bg_alpha_create" />
//                     <label class="label" for="header_logo_bg_alpha_create">Header Logo Background Alpha*</label>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="horiz_logo.png" id="horizontal_logo_create" />
//                       <label class="label" for="horizontal_logo_create">Horizontal Logo Variation*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="square_logo.jpg" id="square_logo_create" />
//                       <label class="label" for="square_logo_create">Square Logo Variation*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="background.jpg" id="background_image_create" />
//                       <label class="label" for="background_image_create">Background Image*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- twocolumns row background here --> */}
//                 <div class="row mb-0">
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <input type="text" value="24" id="background_blur_create" />
//                       <label class="label" for="background_blur_create">Background Blur*</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <input type="text" value="70%" id="background_overlay_alpha_create" />
//                       <label class="label" for="background_blur_create">Background Overlay Alpha*</label>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="student_welcome_video.mp4" id="student_video_create" />
//                       <label class="label" for="student_video_create">Student Welcome Video (optional)</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" id="instructor_video_create" />
//                       <label class="label" for="instructor_video_create">Instructor Welcome Video (optional)</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer">
//       <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//       <a href="#" class="btn">Save</a>
//     </div>
//   </div>
// </div>
// </div>
// {/* <!-- Modal structure filters users --> */}
// <div id="modalFiltersUsers" class="modal-filter modal modal-custom">
// <div class="card-modal card-main card">
//   <div class="card-panel">
//     <div class="card-panel-row row">
//       <div class="col">
//         <h3>
//           <i class="icon-filter"></i>
//           <span class="heading-block"> Filter Users</span>
//         </h3>
//       </div>
//     </div>
//   </div>
//   <div class="card-content">
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="search-field input-field">
//           <input type="search" class="input-control validate" id="owned_user_filter" />
//           <label class="label" for="owned_user_filter">Owned by</label>
//           <button type="submit" class="search-button"><i class="icon-search"></i></button>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="search-field input-field">
//           <input type="search" class="input-control validate" value="Tutor Doctor - Newport Beach, CA" id="location_user_filter" />
//           <label class="label" for="location_user_filter">Location</label>
//           <button type="submit" class="search-button"><i class="icon-search"></i></button>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="input-field">
//           <select id="role_user">
//             <option>Owner</option>
//             <option>Instructor</option>
//             <option>Student</option>
//           </select>
//           <label class="label" for="role_user">Role</label>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12 l8">
//         <div class="modal-filter-row row">
//           <div class="col s6">
//             <div class="datepicker-field input-field">
//               <i class="icon-calendar-dark"></i>
//               <input type="text"  class="datepicker" id="date_created_after" />
//               <label class="label" for="date_created_after">Created After</label>
//             </div>
//           </div>
//           <div class="col s6">
//             <div class="datepicker-field input-field">
//               <i class="icon-calendar-dark"></i>
//               <input type="text" class="datepicker" id="date_created_before" />
//               <label class="label" for="date_created_before">Created Before</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer">
//       <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//       <a href="#!" class="waves-effect waves-teal btn-flat blue-text text-darken-4">Clear Filter</a>
//       <a href="#" class="btn blue darken-5">Apply Filter</a>
//     </div>
//   </div>
// </div>
// </div>

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