webpackHotUpdate("static/development/pages/students.js",{

/***/ "./components/Student/utils/sampleStudentList.js":
false,

/***/ "./pages/students.js":
/*!***************************!*\
  !*** ./pages/students.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Student_components_StudentCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Student/components/StudentCard */ "./components/Student/components/StudentCard/index.js");
/* harmony import */ var _components_Student_ListPage_Components_FilterSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Student/ListPage/Components/FilterSection */ "./components/Student/ListPage/Components/FilterSection/index.js");
/* harmony import */ var _components_Student_components_StudentModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Student/components/StudentModal */ "./components/Student/components/StudentModal/index.js");
/* harmony import */ var _components_Student_IndividualStudentPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Student/IndividualStudentPage */ "./components/Student/IndividualStudentPage/index.js");
/* harmony import */ var _components_Location_components_LocationModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Location/components/LocationModal */ "./components/Location/components/LocationModal/index.js");















var Students =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Students, _Component);

  function Students(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Students);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Students).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenStudentModal", function () {
      return _this.setState({
        studentModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseStudentModal", function () {
      return _this.setState({
        studentModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenLocationModal", function () {
      return _this.setState({
        locationModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseLocationModal", function () {
      return _this.setState({
        locationModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredState", function (filterName) {
      return _this.setState({
        filterName: filterName
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        filterName: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredLocationState", function (location) {
      return _this.setState({
        location: location
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredLocationState", function () {
      return _this.setState({
        location: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSaveNewStudent", function () {
      // eslint-disable-next-line no-console
      console.warn('do something with the new student info');

      _this.onCloseStudentModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDeleteNewStudent", function () {
      var previousStudentState = _this.state.newStudent;
      var newStudent = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(previousStudentState, {
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

      _this.setState({
        newStudent: newStudent
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onRemoveLocation", function (index) {
      var previousStudentState = _this.state.newStudent;
      var locations = _this.state.newStudent.location.locations;

      var newLocationsArray = _this.arrayItemRemover(locations, locations[index]);

      var newStudent = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(previousStudentState, {
        location: {
          $set: {
            locations: newLocationsArray
          }
        }
      });

      _this.setState({
        newStudent: newStudent
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByName", function () {
      var _this$state = _this.state,
          students = _this$state.students,
          filterName = _this$state.filterName;
      return students.reduce(function (finalArr, currentStudent) {
        var lastName = currentStudent.lastName,
            firstName = currentStudent.firstName;
        var studentString = "".concat(firstName.toLowerCase()).concat(lastName.toLowerCase());

        if (studentString.indexOf(filterName) !== -1 && finalArr.indexOf(currentStudent) === -1) {
          finalArr.push(currentStudent);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onHandleStudentCard", function (index) {
      var students = _this.state.students;

      _this.setState({
        selectedStudent: students[index]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onRedirectToStudentPage", function (event) {
      event.preventDefault();

      _this.setState({
        selectedStudent: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDeleteStudent", function (index) {
      var students = _this.state.students;

      var newStudentArray = _this.arrayItemRemover(students, students[index]);

      _this.setState({
        students: newStudentArray
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloneStudent", function (index) {
      var students = _this.state.students;

      _this.setState(function (prevState) {
        prevState.students.push(students[index]);
        return {
          students: prevState.students
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event, name, section) {
      var previousStudentState = _this.state.newStudent;
      var value = event.target ? event.target.value : event;
      var updatedStudent = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(previousStudentState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, section, {
        $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value)
      }));

      _this.setState({
        newStudent: updatedStudent
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "arrayItemRemover", function (array, value) {
      return array.filter(function (student) {
        return student !== value;
      });
    });

    _this.state = {
      selectedStudent: null,
      students: sampleStudentList,
      studentModalOpen: false,
      locationModalOpen: false,
      sort: "",
      filterName: "",
      newStudent: {
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
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Students, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          studentModalOpen = _this$state2.studentModalOpen,
          students = _this$state2.students,
          selectedStudent = _this$state2.selectedStudent;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, !selectedStudent && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title-row card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "menu"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "h1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-student"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-block"
      }, "Students")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_ListPage_Components_FilterSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onSetSort: this.onSetSort,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState,
        onSetFilteredLocationState: this.onSetFilteredLocationState,
        onUnsetFilteredLocationState: this.onUnsetFilteredLocationState,
        handleFilterClick: this.handleFilterClick,
        onFilterByName: this.onFilterByName
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex-content"
      }, students.map(function (student, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_components_StudentCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          student: student,
          index: index,
          id: student.id,
          key: student.id,
          onHandleStudentCard: function onHandleStudentCard() {
            return _this2.onHandleStudentCard(index);
          },
          onDeleteStudent: function onDeleteStudent() {
            return _this2.onDeleteStudent(index);
          },
          onCloneStudent: function onCloneStudent() {
            return _this2.onCloneStudent(index, student.id);
          }
        });
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn add-btn modal-trigger",
        onClick: this.onOpenStudentModal
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Student"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_components_StudentModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        open: studentModalOpen,
        onClose: this.onCloseStudentModal,
        handleChange: this.handleChange,
        state: this.state.newStudent,
        onSave: this.onSaveNewStudent,
        onOpenLocationModal: this.onOpenLocationModal,
        onRemoveLocation: this.onRemoveLocation,
        onDeleteNewStudent: this.onDeleteNewStudent
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Location_components_LocationModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        open: this.state.locationModalOpen,
        onClose: this.onCloseLocationModal,
        handleLocationsChange: function handleLocationsChange(selectedLocations) {
          return _this2.handleChange(selectedLocations, 'locations', 'location');
        }
      })), selectedStudent && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_IndividualStudentPage__WEBPACK_IMPORTED_MODULE_12__["default"], {
        student: selectedStudent,
        onRedirectToStudentPage: this.onRedirectToStudentPage
      })));
    }
  }]);

  return Students;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Students);

/***/ })

})
//# sourceMappingURL=students.js.1ef8c73e887dd2b94cf3.hot-update.js.map