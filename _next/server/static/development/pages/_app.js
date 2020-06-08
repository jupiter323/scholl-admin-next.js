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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: classApi, studentApi, instructorApi, userApi, locationsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classApi", function() { return classApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentApi", function() { return studentApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instructorApi", function() { return instructorApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userApi", function() { return userApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsApi", function() { return locationsApi; });
/* harmony import */ var _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Student/index/api */ "./components/Student/index/api.js");
/* harmony import */ var _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Classes/index/api */ "./components/Classes/index/api.js");
/* harmony import */ var _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Instructor/index/api */ "./components/Instructor/index/api.js");
/* harmony import */ var _components_User_index_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/User/index/api */ "./components/User/index/api.js");
/* harmony import */ var _components_Location_index_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Location/index/api */ "./components/Location/index/api.js");





const classApi = {
  createClassApi: _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_1__["createClassApi"],
  fetchClassesApi: _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_1__["fetchClassesApi"],
  updateClassNameApi: _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_1__["updateClassNameApi"],
  updateClassStartDateApi: _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_1__["updateClassStartDateApi"],
  updateClassEndDateApi: _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_1__["updateClassEndDateApi"],
  updateClassDurationApi: _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_1__["updateClassDurationApi"],
  updateClassExcludeFromStatisticsApi: _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_1__["updateClassExcludeFromStatisticsApi"]
};
const studentApi = {
  fetchStudentsApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchStudentsApi"],
  searchStudentsApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["searchStudentsApi"],
  deleteStudentApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["deleteStudentApi"],
  updateStudentAddressApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentAddressApi"],
  updateStudentCityApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentCityApi"],
  updateStudentEmailApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentEmailApi"],
  updateStudentFirstNameApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentFirstNameApi"],
  updateStudentLastNameApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentLastNameApi"],
  updateStudentPhoneApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentPhoneApi"],
  updateStudentStateApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentStateApi"],
  updateStudentZipApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentZipApi"],
  fetchTestsByStudentIdApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchTestsByStudentIdApi"],
  fetchStudentTestSectionsApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchStudentTestSectionsApi"],
  fetchLessonListApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchLessonListApi"],
  fetchUnitsApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchUnitsApi"],
  fetchStudentLessonListApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchStudentLessonListApi"],
  assignLessonToStudentApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["assignLessonToStudentApi"],
  resetStudentLessonsApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["resetStudentLessonsApi"],
  updateStudentActivationApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentActivationApi"],
  unAssignLessonFromStudentApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["unAssignLessonFromStudentApi"],
  rescheduleStudentLessonsApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["rescheduleStudentLessonsApi"],
  fetchSubjectsApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchSubjectsApi"],
  excuseStudentLessonLatenessApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["excuseStudentLessonLatenessApi"],
  filterLessonListApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["filterLessonListApi"],
  addStudentLessonProblemFlagApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["addStudentLessonProblemFlagApi"],
  addStudentLessonProblemAnswerApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["addStudentLessonProblemAnswerApi"],
  deleteStudentTestApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["deleteStudentTestApi"],
  fetchStudentTestSectionProblemsApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchStudentTestSectionProblemsApi"],
  updateStudentTestQuestionFlagStatusApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentTestQuestionFlagStatusApi"],
  rescoreStudentLessonApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["rescoreStudentLessonApi"],
  addStudentAnswerToTestApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["addStudentAnswerToTestApi"],
  updateStudentTestStatusApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["updateStudentTestStatusApi"],
  fetchStudentTestScoreApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["fetchStudentTestScoreApi"],
  addStudentTestQuestionFlagApi: _components_Student_index_api__WEBPACK_IMPORTED_MODULE_0__["addStudentTestQuestionFlagApi"]
};
const instructorApi = {
  createNewInstructorApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["createNewInstructorApi"],
  fetchInstructorsApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["fetchInstructorsApi"],
  searchInstructorsApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["searchInstructorsApi"],
  updateInstructorFirstNameApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["updateInstructorFirstNameApi"],
  updateInstructorLastNameApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["updateInstructorLastNameApi"],
  updateInstructorEmailApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["updateInstructorEmailApi"],
  updateInstructorStateApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["updateInstructorStateApi"],
  updateInstructorCityApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["updateInstructorCityApi"],
  updateInstructorZipApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["updateInstructorZipApi"],
  updateInstructorAddressApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["updateInstructorAddressApi"],
  addInstructorToLocationApi: _components_Instructor_index_api__WEBPACK_IMPORTED_MODULE_2__["addInstructorToLocationApi"]
};
const userApi = {
  fetchCurrentUserApi: _components_User_index_api__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUserApi"]
};
const locationsApi = {
  fetchAllLocationsApi: _components_Location_index_api__WEBPACK_IMPORTED_MODULE_4__["fetchAllLocationsApi"]
};

/***/ }),

/***/ "./components/Classes/index/actions.js":
/*!*********************************************!*\
  !*** ./components/Classes/index/actions.js ***!
  \*********************************************/
/*! exports provided: setAssignLessonsModalOpen, setAssignWorksheetModalOpen, setCalendarRows, createClass, fetchClasses, setClasses, updateClassName, updateClassStartDate, updateClassEndDate, updateClassDuration, updateClassExcludeFromStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAssignLessonsModalOpen", function() { return setAssignLessonsModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAssignWorksheetModalOpen", function() { return setAssignWorksheetModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCalendarRows", function() { return setCalendarRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClasses", function() { return fetchClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClasses", function() { return setClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassName", function() { return updateClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassStartDate", function() { return updateClassStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassEndDate", function() { return updateClassEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassDuration", function() { return updateClassDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassExcludeFromStatistics", function() { return updateClassExcludeFromStatistics; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/Classes/index/constants.js");

function setAssignLessonsModalOpen(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_ASSIGN_LESSONS_MODAL_OPEN"],
    value
  };
}
function setAssignWorksheetModalOpen(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_ASSIGN_WORKSHEETS_MODAL_OPEN"],
    value
  };
}
function setCalendarRows(rows) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_CALENDAR_ROWS"],
    rows
  };
}
function createClass(newClass) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["CREATE_CLASS"],
    newClass
  };
}
function fetchClasses() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLASSES"]
  };
}
function setClasses(classes) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_CLASSES"],
    classes
  };
}
function updateClassName(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CLASS_NAME"],
    value
  };
}
function updateClassStartDate(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CLASS_START_DATE"],
    value
  };
}
function updateClassEndDate(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CLASS_END_DATE"],
    value
  };
}
function updateClassDuration(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CLASS_DURATION"],
    value
  };
}
function updateClassExcludeFromStatistics(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_EXCLUDE_FROM_STATISTICS"],
    value
  };
}

/***/ }),

/***/ "./components/Classes/index/api.js":
/*!*****************************************!*\
  !*** ./components/Classes/index/api.js ***!
  \*****************************************/
/*! exports provided: fetchClassesApi, createClassApi, updateClassNameApi, updateClassStartDateApi, updateClassEndDateApi, updateClassDurationApi, updateClassExcludeFromStatisticsApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClassesApi", function() { return fetchClassesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClassApi", function() { return createClassApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassNameApi", function() { return updateClassNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassStartDateApi", function() { return updateClassStartDateApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassEndDateApi", function() { return updateClassEndDateApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassDurationApi", function() { return updateClassDurationApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClassExcludeFromStatisticsApi", function() { return updateClassExcludeFromStatisticsApi; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/AuthService */ "./utils/AuthService.js");

const API_URL = "http://18.236.213.121";

const fetchClassesApi = () => fetch(`${API_URL}/api/classes`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => {
  const classes = data.classes.map(item => ({
    id: item.id,
    summary: {
      amount_students: item.students.length,
      start_date: item.start_date,
      end_date: item.end_date,
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
      start_date: item.start_date,
      end_date: item.end_date,
      active: false,
      isExclude: item.exclude_from_statistics,
      duration: item.duration
    },
    classInfo: {
      className: item.name
    },
    location: {
      locations: item.locations
    },
    instructor: {
      instructors: item.instructors
    },
    student: {
      students: item.students
    }
  }));
  return classes;
}).catch(err => err);
const createClassApi = classroom => fetch(`${API_URL}/api/commands/create-classroom`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(classroom)
}).then(res => res.json()).catch(err => err);
const updateClassNameApi = body => fetch(`${API_URL}/api/commands/update-class-name`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateClassStartDateApi = body => fetch(`${API_URL}/api/commands/update-class-start-date`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateClassEndDateApi = body => fetch(`${API_URL}/api/commands/update-class-end-date`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateClassDurationApi = body => fetch(`${API_URL}/api/commands/update-class-duration`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateClassExcludeFromStatisticsApi = body => fetch(`${API_URL}/api/commands/update-class-exclude-from-statistics`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
/* harmony default export */ __webpack_exports__["default"] = (createClassApi);

/***/ }),

/***/ "./components/Classes/index/constants.js":
/*!***********************************************!*\
  !*** ./components/Classes/index/constants.js ***!
  \***********************************************/
/*! exports provided: SET_ASSIGN_LESSONS_MODAL_OPEN, SET_ASSIGN_WORKSHEETS_MODAL_OPEN, SET_CALENDAR_ROWS, CREATE_CLASS, FETCH_CLASSES, SET_CLASSES, UPDATE_CLASS_NAME, UPDATE_CLASS_START_DATE, UPDATE_CLASS_END_DATE, UPDATE_CLASS_DURATION, UPDATE_EXCLUDE_FROM_STATISTICS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ASSIGN_LESSONS_MODAL_OPEN", function() { return SET_ASSIGN_LESSONS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ASSIGN_WORKSHEETS_MODAL_OPEN", function() { return SET_ASSIGN_WORKSHEETS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CALENDAR_ROWS", function() { return SET_CALENDAR_ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CLASS", function() { return CREATE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLASSES", function() { return FETCH_CLASSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLASSES", function() { return SET_CLASSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CLASS_NAME", function() { return UPDATE_CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CLASS_START_DATE", function() { return UPDATE_CLASS_START_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CLASS_END_DATE", function() { return UPDATE_CLASS_END_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CLASS_DURATION", function() { return UPDATE_CLASS_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EXCLUDE_FROM_STATISTICS", function() { return UPDATE_EXCLUDE_FROM_STATISTICS; });
const SET_ASSIGN_LESSONS_MODAL_OPEN = 'SET_ASSIGN_LESSONS_MODAL_OPEN';
const SET_ASSIGN_WORKSHEETS_MODAL_OPEN = 'SET_ASSIGN_WORKSHEETS_MODAL_OPEN';
const SET_CALENDAR_ROWS = 'SET_CALENDAR_ROWS';
const CREATE_CLASS = 'CREATE_CLASS';
const FETCH_CLASSES = 'FETCH_CLASSES';
const SET_CLASSES = 'SET_CLASSES';
const UPDATE_CLASS_NAME = 'UPDATE_CLASS_NAME';
const UPDATE_CLASS_START_DATE = 'UPDATE_CLASS_START_DATE';
const UPDATE_CLASS_END_DATE = 'UPDATE_CLASS_END_DATE';
const UPDATE_CLASS_DURATION = 'UPDATE_CLASS_DURATION';
const UPDATE_EXCLUDE_FROM_STATISTICS = 'UPDATE_EXCLUDE_FROM_STATISTICS';

/***/ }),

/***/ "./components/Classes/index/reducers.js":
/*!**********************************************!*\
  !*** ./components/Classes/index/reducers.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/Classes/index/constants.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  classes: [],
  assignLessonsModalOpen: false,
  assignWorkSheetsModalOpen: false,
  calendarRows: []
});

function classesReducer(state = initialState, action) {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_ASSIGN_LESSONS_MODAL_OPEN"]:
      return state.set('assignLessonsModalOpen', action.value);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_ASSIGN_WORKSHEETS_MODAL_OPEN"]:
      return state.set('assignWorkSheetsModalOpen', action.value);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_CALENDAR_ROWS"]:
      return state.set('calendarRows', action.rows);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_CLASSES"]:
      return state.set('classes', action.classes);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (classesReducer);

/***/ }),

/***/ "./components/Core/SideNav.js":
/*!************************************!*\
  !*** ./components/Core/SideNav.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _User_index_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../User/index/selectors */ "./components/User/index/selectors.js");
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/AuthService */ "./utils/AuthService.js");
/* harmony import */ var _User_index_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../User/index/actions */ "./components/User/index/actions.js");
/* harmony import */ var _User_index_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../User/index/api */ "./components/User/index/api.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/components/Core/SideNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/img-redundant-alt */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */














if (false) {}

const menuItems = [{
  key: "dashboard",
  page: "dashboard"
}, {
  key: "students",
  page: "students"
}, {
  key: "instructors",
  page: "all-instructors"
}, {
  key: "classes",
  page: "classes"
}, {
  key: "locations",
  page: "all-locations"
}, {
  key: "worksheets",
  page: "worksheets"
}, {
  key: "course templates",
  page: "courseTemplates"
}, {
  key: "help",
  page: "help"
}];
const menuIconMap = {
  dashboard: "icon-speed",
  students: "icon-student",
  instructors: "icon-instructors",
  classes: "icon-members",
  locations: "icon-location",
  worksheets: "icon-sheets-w",
  "course templates": "icon-module",
  help: "icon-help"
};

class SideNav extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleLogout", () => {
      const {
        onSetUserIsLogged
      } = this.props;
      onSetUserIsLogged(false);
      Object(_User_index_api__WEBPACK_IMPORTED_MODULE_11__["LogoutApi"])();
      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push("/login");
    });
  }

  componentDidMount() {
    const isLogged = Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_9__["loggedIn"])();
    const {
      onSetUserIsLogged,
      onFetchCurrentUser,
      currentUser
    } = this.props;

    if (!currentUser && isLogged) {
      onFetchCurrentUser();
    }

    onSetUserIsLogged(isLogged);
    jquery__WEBPACK_IMPORTED_MODULE_12___default()(".sidenav").sidenav();
  }

  render() {
    const {
      isLogged,
      currentUser
    } = this.props;
    return __jsx("aside", {
      id: "slide-out",
      className: "sidenav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "sidenav-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("h1", {
      className: "white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("img", {
      src: "/static/images/logo.jpg",
      alt: "image description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    })), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, menuItems.map(menuItem => __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
      href: `/${menuItem.page}`,
      key: menuItem.key,
      activeClassName: "active",
      scroll: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("li", {
      key: menuItem.key,
      style: {
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("i", {
      className: menuIconMap[menuItem.key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), menuItem.key.charAt(0).toUpperCase() + menuItem.key.slice(1)))))), __jsx("div", {
      className: "log-block white-text",
      style: {
        cursor: "hand"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("div", {
      className: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: this.handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("div", {
      className: "block white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, isLogged ? "Log Out" : "")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("div", {
      className: "block white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, isLogged && currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : "Loading...")))))));
  }

}

SideNav.propTypes = {
  isLogged: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onSetUserIsLogged: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    onSetUserIsLogged: value => dispatch(Object(_User_index_actions__WEBPACK_IMPORTED_MODULE_10__["setUserIsLogged"])(value)),
    onFetchCurrentUser: () => dispatch(Object(_User_index_actions__WEBPACK_IMPORTED_MODULE_10__["getCurrentUser"])())
  };
}

const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_5__["createStructuredSelector"])({
  isLogged: Object(_User_index_selectors__WEBPACK_IMPORTED_MODULE_8__["makeSelectUserIsLogged"])(),
  currentUser: Object(_User_index_selectors__WEBPACK_IMPORTED_MODULE_8__["makeSelectCurrentUser"])()
});
const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps, null, {
  pure: false
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(withConnect)(SideNav));

/***/ }),

/***/ "./components/Core/_blank.css":
/*!************************************!*\
  !*** ./components/Core/_blank.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Instructor/index/actions.js":
/*!************************************************!*\
  !*** ./components/Instructor/index/actions.js ***!
  \************************************************/
/*! exports provided: setInstructors, fetchInstructors, searchInstructors, createInstructor, updateInstructorFirstName, updateInstructorLastName, updateInstructorEmail, updateInstructorState, updateInstructorCity, updateInstructorZip, updateInstructorAddress, updateInstructorPhone, AddInstructorToLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInstructors", function() { return setInstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInstructors", function() { return fetchInstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInstructors", function() { return searchInstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstructor", function() { return createInstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorFirstName", function() { return updateInstructorFirstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorLastName", function() { return updateInstructorLastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorEmail", function() { return updateInstructorEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorState", function() { return updateInstructorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorCity", function() { return updateInstructorCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorZip", function() { return updateInstructorZip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorAddress", function() { return updateInstructorAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorPhone", function() { return updateInstructorPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInstructorToLocation", function() { return AddInstructorToLocation; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/Instructor/index/constants.js");

function setInstructors(instructors) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_INSTRUCTORS"],
    instructors
  };
}
function fetchInstructors() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_INSTRUCTORS"]
  };
}
function searchInstructors(filters) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SEARCH_INSTRUCTORS"],
    filters
  };
}
function createInstructor(instructor) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["CREATE_INSTRUCTOR"],
    instructor
  };
}
function updateInstructorFirstName(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INSTRUCTOR_FIRSTNAME"],
    value
  };
}
function updateInstructorLastName(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INSTRUCTOR_LASTNAME"],
    value
  };
}
function updateInstructorEmail(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INSTRUCTOR_EMAIL"],
    value
  };
}
function updateInstructorState(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INSTRUCTOR_STATE"],
    value
  };
}
function updateInstructorCity(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INSTRUCTOR_CITY"],
    value
  };
}
function updateInstructorZip(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INSTRUCTOR_ZIP"],
    value
  };
}
function updateInstructorAddress(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INSTRUCTOR_ADDRESS"],
    value
  };
}
function updateInstructorPhone(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INSTRUCTOR_PHONE"],
    value
  };
}
function AddInstructorToLocation(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_INSTRUCTOR_LOCATION"],
    value
  };
}

/***/ }),

/***/ "./components/Instructor/index/api.js":
/*!********************************************!*\
  !*** ./components/Instructor/index/api.js ***!
  \********************************************/
/*! exports provided: fetchInstructorsApi, createNewInstructorApi, updateInstructorFirstNameApi, updateInstructorLastNameApi, updateInstructorEmailApi, updateInstructorStateApi, updateInstructorCityApi, updateInstructorZipApi, updateInstructorAddressApi, updateInstructorPhoneApi, addInstructorToLocationApi, searchInstructorsApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInstructorsApi", function() { return fetchInstructorsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewInstructorApi", function() { return createNewInstructorApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorFirstNameApi", function() { return updateInstructorFirstNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorLastNameApi", function() { return updateInstructorLastNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorEmailApi", function() { return updateInstructorEmailApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorStateApi", function() { return updateInstructorStateApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorCityApi", function() { return updateInstructorCityApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorZipApi", function() { return updateInstructorZipApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorAddressApi", function() { return updateInstructorAddressApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInstructorPhoneApi", function() { return updateInstructorPhoneApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstructorToLocationApi", function() { return addInstructorToLocationApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInstructorsApi", function() { return searchInstructorsApi; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/AuthService */ "./utils/AuthService.js");


/* eslint-disable camelcase */
const API_URL = "http://18.236.213.121";

const fetchInstructorsApi = () => fetch(`${API_URL}/api/instructors`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => {
  const {
    instructors = []
  } = data;
  const formattedInstructors = instructors.reduce((finalArry, currentInstructor) => {
    const {
      id,
      first_name,
      last_name,
      email
    } = currentInstructor;
    const newInstructor = {
      id,
      accountInfo: {
        lastName: last_name,
        firstName: first_name,
        email
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
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(insturctor)
}).then(res => res.json()).catch(err => err);
const updateInstructorFirstNameApi = body => fetch(`${API_URL}/api/commands/update-instructors-first-name`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateInstructorLastNameApi = body => fetch(`${API_URL}/api/commands/update-instructors-last-name`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateInstructorEmailApi = body => fetch(`${API_URL}/api/commands/update-instructors-email`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateInstructorStateApi = body => fetch(`${API_URL}/api/commands/update-instructors-state`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateInstructorCityApi = body => fetch(`${API_URL}/api/commands/update-instructors-city`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateInstructorZipApi = body => fetch(`${API_URL}/api/commands/update-instructors-zip`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateInstructorAddressApi = body => fetch(`${API_URL}/api/commands/update-instructors-address`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateInstructorPhoneApi = body => fetch(`${API_URL}/api/commands/update-instructors-phone`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const addInstructorToLocationApi = body => fetch(`${API_URL}/api/commands/add-instructor-to-location`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const searchInstructorsApi = filters => {
  const queryString = `search=${filters.name}&location=${filters.location}`;
  return fetch(`${API_URL}/api/instructors?${queryString}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
    }
  }).then(res => res.json()).then(({
    data
  }) => {
    const {
      instructors = []
    } = data;
    const formattedInstructors = instructors.reduce((finalArry, currentInstructor) => {
      const {
        id,
        first_name,
        last_name,
        email
      } = currentInstructor;
      const newInstructor = {
        id,
        accountInfo: {
          lastName: last_name,
          firstName: first_name,
          email
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
    return formattedInstructors;
  }).catch(err => err);
};
/* harmony default export */ __webpack_exports__["default"] = ([createNewInstructorApi, fetchInstructorsApi, searchInstructorsApi, updateInstructorFirstNameApi, updateInstructorLastNameApi, updateInstructorEmailApi, updateInstructorStateApi, updateInstructorCityApi, updateInstructorZipApi, updateInstructorAddressApi, updateInstructorPhoneApi, addInstructorToLocationApi]);

/***/ }),

/***/ "./components/Instructor/index/constants.js":
/*!**************************************************!*\
  !*** ./components/Instructor/index/constants.js ***!
  \**************************************************/
/*! exports provided: SET_INSTRUCTORS, CREATE_INSTRUCTOR, FETCH_INSTRUCTORS, SEARCH_INSTRUCTORS, UPDATE_INSTRUCTOR_FIRSTNAME, UPDATE_INSTRUCTOR_LASTNAME, UPDATE_INSTRUCTOR_EMAIL, UPDATE_INSTRUCTOR_STATE, UPDATE_INSTRUCTOR_CITY, UPDATE_INSTRUCTOR_ZIP, UPDATE_INSTRUCTOR_ADDRESS, UPDATE_INSTRUCTOR_PHONE, ADD_INSTRUCTOR_LOCATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_INSTRUCTORS", function() { return SET_INSTRUCTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_INSTRUCTOR", function() { return CREATE_INSTRUCTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INSTRUCTORS", function() { return FETCH_INSTRUCTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_INSTRUCTORS", function() { return SEARCH_INSTRUCTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INSTRUCTOR_FIRSTNAME", function() { return UPDATE_INSTRUCTOR_FIRSTNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INSTRUCTOR_LASTNAME", function() { return UPDATE_INSTRUCTOR_LASTNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INSTRUCTOR_EMAIL", function() { return UPDATE_INSTRUCTOR_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INSTRUCTOR_STATE", function() { return UPDATE_INSTRUCTOR_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INSTRUCTOR_CITY", function() { return UPDATE_INSTRUCTOR_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INSTRUCTOR_ZIP", function() { return UPDATE_INSTRUCTOR_ZIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INSTRUCTOR_ADDRESS", function() { return UPDATE_INSTRUCTOR_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INSTRUCTOR_PHONE", function() { return UPDATE_INSTRUCTOR_PHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INSTRUCTOR_LOCATION", function() { return ADD_INSTRUCTOR_LOCATION; });
const SET_INSTRUCTORS = 'SET_INSTRUCTORS';
const CREATE_INSTRUCTOR = 'CREATE_INSTRUCTOR';
const FETCH_INSTRUCTORS = 'FETCH_INSTRUCTORS';
const SEARCH_INSTRUCTORS = 'SEARCH_INSTRUCTORS';
const UPDATE_INSTRUCTOR_FIRSTNAME = 'UPDATE_INSTRUCTOR_FIRSTNAME';
const UPDATE_INSTRUCTOR_LASTNAME = 'UPDATE_INSTRUCTOR_LASTNAME';
const UPDATE_INSTRUCTOR_EMAIL = 'UPDATE_INSTRUCTOR_EMAIL';
const UPDATE_INSTRUCTOR_STATE = 'UPDATE_INSTRUCTOR_STATE';
const UPDATE_INSTRUCTOR_CITY = 'UPDATE_INSTRUCTOR_CITY';
const UPDATE_INSTRUCTOR_ZIP = 'UPDATE_INSTRUCTOR_ZIP';
const UPDATE_INSTRUCTOR_ADDRESS = 'UPDATE_INSTRUCTOR_ADDRESS';
const UPDATE_INSTRUCTOR_PHONE = 'UPDATE_INSTRUCTOR_PHONE';
const ADD_INSTRUCTOR_LOCATION = 'ADD_INSTRUCTOR_LOCATION';

/***/ }),

/***/ "./components/Instructor/index/reducers.js":
/*!*************************************************!*\
  !*** ./components/Instructor/index/reducers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/Instructor/index/constants.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  instructors: []
});

function instructorReducer(state = initialState, action) {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_INSTRUCTORS"]:
      return state.set('instructors', action.instructors);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (instructorReducer);

/***/ }),

/***/ "./components/Location/index/api.js":
/*!******************************************!*\
  !*** ./components/Location/index/api.js ***!
  \******************************************/
/*! exports provided: fetchAllLocationsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllLocationsApi", function() { return fetchAllLocationsApi; });
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/AuthService */ "./utils/AuthService.js");
/* eslint-disable camelcase */

/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
const API_URL = "http://18.236.213.121";

const fetchAllLocationsApi = user_id => fetch(`${API_URL}/api/users/${user_id}/locations`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_0__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => data);

/***/ }),

/***/ "./components/Location/index/constants.js":
/*!************************************************!*\
  !*** ./components/Location/index/constants.js ***!
  \************************************************/
/*! exports provided: FETCH_ALL_LOCATIONS, SET_ALL_LOCATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_LOCATIONS", function() { return FETCH_ALL_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALL_LOCATIONS", function() { return SET_ALL_LOCATIONS; });
const FETCH_ALL_LOCATIONS = 'FETCH_ALL_LOCATIONS';
const SET_ALL_LOCATIONS = 'SET_ALL_LOCATIONS';

/***/ }),

/***/ "./components/Location/index/reducers.js":
/*!***********************************************!*\
  !*** ./components/Location/index/reducers.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/Location/index/constants.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  locations: null
});

function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_ALL_LOCATIONS"]:
      return state.set("locations", action.payload);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (locationsReducer);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/components/Meta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/static/favicon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/static/css/nprogress.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/css/materialize.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheer",
  href: "/static/css/lmdd.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/css/main.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Clear Choice Test Prep"));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Core_SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/SideNav */ "./components/Core/SideNav.js");
/* harmony import */ var _components_utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/utils/sampleInstructors */ "./components/utils/sampleInstructors.js");
var _jsxFileName = "/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/components/Page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import Main from './Core/Main';

const theme = {
  grey: '#707070',
  lightGrey: '#959595',
  blue: '#01579b',
  darkBlue: '#01579b'
};
const StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "x56gd0-0"
})([""]);
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "x56gd0-1"
})([""]); // eslint-disable-next-line react/prefer-stateless-function

class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(StyledPage, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("div", {
      className: "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_Core_SideNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: _components_utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_5__["default"][0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx(Inner, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, this.props.children)), __jsx("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      charSet: "UTF-8",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })));
  }

}

Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/Student/index/actions.js":
/*!*********************************************!*\
  !*** ./components/Student/index/actions.js ***!
  \*********************************************/
/*! exports provided: fetchStudents, fetchUnits, fetchSubjects, setUnitFilterOptions, searchStudents, fetchStudentTests, fetchStudentTestSections, setStudentSections, setActiveStudentToken, setActiveStudentTestId, setStudentTests, setStudentCompletedTests, setStudentOverDueTests, setStudentAssignedTests, setStudents, deleteStudent, updateStudentAddress, updateStudentCity, updateStudentEmail, updateStudentFirstName, updateStudentLastName, updateStudentPhone, updateStudentState, updateStudentZip, setAssignLessonsModalOpen, setAssignWorksheetModalOpen, setCalendarRows, setIsVisibleTopBar, setActiveTestScores, setEssayScore, getLessonList, getStudentLessonList, checkLesson, checkAllLessons, unCheckAllLessons, addCheckedLesson, removeCheckedLesson, assignLessonToStudent, resetStudentLessons, unAssignLessonToStudent, rescheduleStudentLessons, addAllLessons, removeAllLessons, setActiveLesson, setOpenActivePage, updateStudentActivation, excuseStudentLateness, filterLessons, flagStudentLessonProblem, setTests, setActiveStudent, answerStudentLessonProblem, deleteStudentTest, updateTestFlag, assignNewTest, addNewTestToStudentTests, addStudentAnswerToTest, updateTestStatus, updateFlagStatus, setFetchStudentTestsStatus, addFreeResponseAnswerToTest, sendErrorMessage, resetErrorMessage, getTestScores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudents", function() { return fetchStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUnits", function() { return fetchUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSubjects", function() { return fetchSubjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUnitFilterOptions", function() { return setUnitFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStudents", function() { return searchStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentTests", function() { return fetchStudentTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentTestSections", function() { return fetchStudentTestSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStudentSections", function() { return setStudentSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveStudentToken", function() { return setActiveStudentToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveStudentTestId", function() { return setActiveStudentTestId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStudentTests", function() { return setStudentTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStudentCompletedTests", function() { return setStudentCompletedTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStudentOverDueTests", function() { return setStudentOverDueTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStudentAssignedTests", function() { return setStudentAssignedTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStudents", function() { return setStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStudent", function() { return deleteStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentAddress", function() { return updateStudentAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentCity", function() { return updateStudentCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentEmail", function() { return updateStudentEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentFirstName", function() { return updateStudentFirstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentLastName", function() { return updateStudentLastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentPhone", function() { return updateStudentPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentState", function() { return updateStudentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentZip", function() { return updateStudentZip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAssignLessonsModalOpen", function() { return setAssignLessonsModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAssignWorksheetModalOpen", function() { return setAssignWorksheetModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCalendarRows", function() { return setCalendarRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsVisibleTopBar", function() { return setIsVisibleTopBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveTestScores", function() { return setActiveTestScores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEssayScore", function() { return setEssayScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLessonList", function() { return getLessonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudentLessonList", function() { return getStudentLessonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLesson", function() { return checkLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAllLessons", function() { return checkAllLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unCheckAllLessons", function() { return unCheckAllLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCheckedLesson", function() { return addCheckedLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCheckedLesson", function() { return removeCheckedLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignLessonToStudent", function() { return assignLessonToStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStudentLessons", function() { return resetStudentLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unAssignLessonToStudent", function() { return unAssignLessonToStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rescheduleStudentLessons", function() { return rescheduleStudentLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAllLessons", function() { return addAllLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllLessons", function() { return removeAllLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveLesson", function() { return setActiveLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenActivePage", function() { return setOpenActivePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentActivation", function() { return updateStudentActivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excuseStudentLateness", function() { return excuseStudentLateness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLessons", function() { return filterLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagStudentLessonProblem", function() { return flagStudentLessonProblem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTests", function() { return setTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveStudent", function() { return setActiveStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerStudentLessonProblem", function() { return answerStudentLessonProblem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStudentTest", function() { return deleteStudentTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTestFlag", function() { return updateTestFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignNewTest", function() { return assignNewTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewTestToStudentTests", function() { return addNewTestToStudentTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStudentAnswerToTest", function() { return addStudentAnswerToTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTestStatus", function() { return updateTestStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFlagStatus", function() { return updateFlagStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFetchStudentTestsStatus", function() { return setFetchStudentTestsStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFreeResponseAnswerToTest", function() { return addFreeResponseAnswerToTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendErrorMessage", function() { return sendErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetErrorMessage", function() { return resetErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTestScores", function() { return getTestScores; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/Student/index/constants.js");

function fetchStudents() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_STUDENTS"]
  };
}
function fetchUnits() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_UNITS"]
  };
}
function fetchSubjects() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUBJECTS"]
  };
}
function setUnitFilterOptions(options) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_UNIT_FILTER_OPTIONS"],
    options
  };
}
function searchStudents(filters) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SEARCH_STUDENTS"],
    filters
  };
}
function fetchStudentTests(user) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_TESTS"],
    user
  };
}
function fetchStudentTestSections(postBody) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_STUDENT_TEST_SECTIONS"],
    postBody
  };
}
function setStudentSections(sections) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENT_SECTIONS"],
    sections
  };
}
function setActiveStudentToken(token) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_STUDENT_TOKEN"],
    token
  };
}
function setActiveStudentTestId(studentTestId) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_STUDENT_TEST_ID"],
    studentTestId
  };
}
function setStudentTests(tests) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENT_TESTS"],
    tests
  };
}
function setStudentCompletedTests(tests) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENT_COMPLETED_TESTS"],
    tests
  };
}
function setStudentOverDueTests(tests) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENT_OVERDUE_TESTS"],
    tests
  };
}
function setStudentAssignedTests(tests) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENT_ASSIGNED_TESTS"],
    tests
  };
}
function setStudents(students) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENTS"],
    students
  };
}
function deleteStudent(id) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_STUDENT"],
    id
  };
}
function updateStudentAddress(address) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_ADDRESS"],
    address
  };
}
function updateStudentCity(city) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_CITY"],
    city
  };
}
function updateStudentEmail(email) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_EMAIL"],
    email
  };
}
function updateStudentFirstName(firstName) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_FIRSTNAME"],
    firstName
  };
}
function updateStudentLastName(lastName) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_LASTNAME"],
    lastName
  };
}
function updateStudentPhone(phone) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_PHONE"],
    phone
  };
}
function updateStudentState(state) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_STATE"],
    state
  };
}
function updateStudentZip(zip) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_ZIP"],
    zip
  };
}
function setAssignLessonsModalOpen(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN"],
    value
  };
}
function setAssignWorksheetModalOpen(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN"],
    value
  };
}
function setCalendarRows(rows) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_STUDENTS_CALENDAR_CALENDAR_ROWS"],
    rows
  };
}
function setIsVisibleTopBar(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_IS_VISIBLE_TOP_BAR"],
    value
  };
}
function setActiveTestScores(scores) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_TEST_SCORES"],
    scores
  };
}
function setEssayScore(score) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_ESSAY_SCORE"],
    score
  };
}
const getLessonList = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_LESSON_LIST"]
});
const getStudentLessonList = postBody => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_STUDENT_LESSON_LIST"],
  postBody
});
const checkLesson = id => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["CHECKED_LESSON"],
  id
});
const checkAllLessons = mappedLessons => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SELECT_ALL_LESSONS"],
  mappedLessons
});
const unCheckAllLessons = mappedLessons => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["UNSELECT_ALL_LESSONS"],
  mappedLessons
});
const addCheckedLesson = lessonId => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_CHECKED_LESSON"],
  lessonId
});
const removeCheckedLesson = lessonId => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_CHECKED_LESSON"],
  lessonId
});
const assignLessonToStudent = lesson => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ASSIGN_STUDENT_LESSON"],
  lesson
});
const resetStudentLessons = lessons => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["RESET_STUDENT_LESSONS"],
  lessons
});
const unAssignLessonToStudent = lesson => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["UNASSIGN_STUDENT_LESSON"],
  lesson
});
const rescheduleStudentLessons = studentLessonData => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["RESCHEDULE_STUDENT_LESSONS"],
  studentLessonData
});
const addAllLessons = mappedLessons => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_ALL_LESSONS"],
  mappedLessons
});
const removeAllLessons = mappedLessons => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ALL_LESSONS"],
  mappedLessons
});
const setActiveLesson = activeLesson => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_LESSON"],
  activeLesson
});
const setOpenActivePage = value => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_OPEN_ACTIVE_PAGE"],
  value
});
const updateStudentActivation = studentInfo => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDENT_ACTIVATION"],
  studentInfo
});
const excuseStudentLateness = lessons => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["EXCUSE_STUDENT_LATENESS"],
  lessons
});
const filterLessons = filters => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["FILTER_LESSONS"],
  filters
});
const flagStudentLessonProblem = lesson => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["FLAG_STUDENT_LESSON_PROBLEM"],
  lesson
});
const setTests = tests => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_TESTS"],
  tests
});
const setActiveStudent = student => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_STUDENT"],
  student
});
const answerStudentLessonProblem = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_LESSON_ANSWER"],
  payload
});
const deleteStudentTest = (studentTestId, studentId, testType) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_STUDENT_TEST"],
  studentTestId,
  studentId,
  testType
});
const updateTestFlag = (studentTestId, studentId) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TEST_FLAG"],
  studentTestId,
  studentId
});
const assignNewTest = newTest => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ASSIGN_NEW_TEST"],
  newTest
});
const addNewTestToStudentTests = newTest => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_NEW_TEST_TO_STUDENT_TESTS"],
  newTest
});
const addStudentAnswerToTest = (payload, sectionId) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_STUDENT_ANSWER_TO_TEST"],
  payload,
  sectionId
});
const updateTestStatus = (payload, currentStatus, studentId) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TEST_STATUS"],
  payload,
  currentStatus,
  studentId
});
const updateFlagStatus = (payload, status, question) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FLAG_STATUS"],
  payload,
  status,
  question
});
function setFetchStudentTestsStatus(status) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_STUDENT_TESTS_SUCCESSFUL"],
    status
  };
}
const addFreeResponseAnswerToTest = (payload, sectionId) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_FREE_RESPONSE_ANSWER_TO_TEST"],
  payload,
  sectionId
});
const sendErrorMessage = (propertyName, message) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SEND_ERROR_MESSAGE"],
  propertyName,
  message
});
const resetErrorMessage = propertyName => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["RESET_ERROR_MESSAGE"],
  propertyName
});
const getTestScores = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_TEST_SCORES"],
  payload
});

/***/ }),

/***/ "./components/Student/index/api.js":
/*!*****************************************!*\
  !*** ./components/Student/index/api.js ***!
  \*****************************************/
/*! exports provided: fetchStudentsApi, searchStudentsApi, createStudentApi, updateStudentActivationApi, updateStudentAddressApi, updateStudentCityApi, updateStudentEmailApi, updateStudentFirstNameApi, updateStudentLastNameApi, updateStudentPhoneApi, updateStudentStateApi, updateStudentZipApi, updateStudentTestDueDate, updateStudentTestAssignmentDate, deleteStudentApi, assignTestToStudentApi, fetchTestsByStudentIdApi, fetchTestByTestIdApi, fetchStudentTestSectionsApi, fetchStudentTestSectionProblemsApi, addStudentAnswerToTestApi, addStudentTestQuestionFlagApi, fetchStudentTestScoreApi, updateStudentTestQuestionFlagStatusApi, fetchLessonListApi, fetchUnitsApi, filterLessonListApi, fetchSubjectsApi, assignLessonToStudentApi, fetchStudentLessonListApi, resetStudentLessonsApi, unAssignLessonFromStudentApi, rescheduleStudentLessonsApi, fetchStudentLessonApi, fetchStudentLessonSectionApi, addStudentLessonProblemFlagApi, addVideoWatchedTime, fetchAllTestsApi, addStudentLessonProblemAnswerApi, updateStudentTestStatusApi, excuseStudentLessonLatenessApi, updateStudentTestSectionStatusApi, rescoreStudentLessonApi, deleteStudentTestApi, updateStudentEssayScoreApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentsApi", function() { return fetchStudentsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStudentsApi", function() { return searchStudentsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStudentApi", function() { return createStudentApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentActivationApi", function() { return updateStudentActivationApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentAddressApi", function() { return updateStudentAddressApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentCityApi", function() { return updateStudentCityApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentEmailApi", function() { return updateStudentEmailApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentFirstNameApi", function() { return updateStudentFirstNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentLastNameApi", function() { return updateStudentLastNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentPhoneApi", function() { return updateStudentPhoneApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentStateApi", function() { return updateStudentStateApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentZipApi", function() { return updateStudentZipApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentTestDueDate", function() { return updateStudentTestDueDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentTestAssignmentDate", function() { return updateStudentTestAssignmentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStudentApi", function() { return deleteStudentApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignTestToStudentApi", function() { return assignTestToStudentApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTestsByStudentIdApi", function() { return fetchTestsByStudentIdApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTestByTestIdApi", function() { return fetchTestByTestIdApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentTestSectionsApi", function() { return fetchStudentTestSectionsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentTestSectionProblemsApi", function() { return fetchStudentTestSectionProblemsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStudentAnswerToTestApi", function() { return addStudentAnswerToTestApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStudentTestQuestionFlagApi", function() { return addStudentTestQuestionFlagApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentTestScoreApi", function() { return fetchStudentTestScoreApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentTestQuestionFlagStatusApi", function() { return updateStudentTestQuestionFlagStatusApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLessonListApi", function() { return fetchLessonListApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUnitsApi", function() { return fetchUnitsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLessonListApi", function() { return filterLessonListApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSubjectsApi", function() { return fetchSubjectsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignLessonToStudentApi", function() { return assignLessonToStudentApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentLessonListApi", function() { return fetchStudentLessonListApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStudentLessonsApi", function() { return resetStudentLessonsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unAssignLessonFromStudentApi", function() { return unAssignLessonFromStudentApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rescheduleStudentLessonsApi", function() { return rescheduleStudentLessonsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentLessonApi", function() { return fetchStudentLessonApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentLessonSectionApi", function() { return fetchStudentLessonSectionApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStudentLessonProblemFlagApi", function() { return addStudentLessonProblemFlagApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVideoWatchedTime", function() { return addVideoWatchedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllTestsApi", function() { return fetchAllTestsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStudentLessonProblemAnswerApi", function() { return addStudentLessonProblemAnswerApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentTestStatusApi", function() { return updateStudentTestStatusApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excuseStudentLessonLatenessApi", function() { return excuseStudentLessonLatenessApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentTestSectionStatusApi", function() { return updateStudentTestSectionStatusApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rescoreStudentLessonApi", function() { return rescoreStudentLessonApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStudentTestApi", function() { return deleteStudentTestApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentEssayScoreApi", function() { return updateStudentEssayScoreApi; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/AuthService */ "./utils/AuthService.js");


/* eslint-disable camelcase */

/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
const API_URL = "http://18.236.213.121";

const fetchStudentsApi = () => fetch(`${API_URL}/api/students`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => {
  const formattedStudents = data.students.map(student => {
    const {
      user_address
    } = student;
    return {
      id: student.id,
      active: student.active,
      studentInformation: {
        firstName: student.first_name,
        lastName: student.last_name
      },
      contactInformation: {
        phone: user_address ? user_address.phone : "",
        addressLine1: user_address ? user_address.address : "",
        addressLine2: "",
        city: user_address ? user_address.city : "",
        state: user_address ? user_address.state : "",
        zipCode: user_address ? user_address.zip : ""
      },
      emailAddress: {
        email: student.email
      },
      location: {
        locations: student.user_locations
      },
      stats: student.stats,
      tutor: !student.hasOwnProperty("tutor") ? "" : student.tutor,
      testScores: {
        initialScore: !student.hasOwnProperty("testScores") ? "0" : student.testScores.initialScore,
        currentScore: !student.hasOwnProperty("testScores") ? "0" : student.testScores.currentScore
      },
      // courseContext: {
      //   targetScore: !student.hasOwnProperty("courseContext")
      //     ? "0"
      //     : student.courseContext.targetScore
      // }
      courseContext: {
        courseStartDateOption: "secondOption",
        courseStartDate: "",
        courseEndDateOption: "secondOption",
        courseEndDate: "",
        targetTestDate: "12/12/2019",
        targetScore: "1400",
        highSchool: "Everglades High",
        graduationYear: "2018"
      },
      courseProgress: {
        startDate: "6/03/18",
        testDate: "10/14/18",
        progress: "77",
        improvement: "82",
        lessons: "73",
        instruction: "68",
        practiceTests: "47"
      },
      overdueWork: {
        lessons: "12",
        worksheets: "3",
        quizzes: "1",
        practiceTests: "5"
      },
      summary: {
        questionsAnswered: "791",
        videoWatched: "416",
        notesTaken: "52",
        totalTimeLoggedIn: "220",
        lastLogIn: "3:12",
        loginTimeCode: "pm",
        onTimePercentage: "77"
      },
      testScores: {
        initialScore: "1040",
        currentScore: "1300",
        compositeScore: {
          reading: "83",
          writing: "31",
          math: "105",
          composite: "218"
        },
        subjectScores: {
          reading: "58",
          writing: "44",
          math: "91",
          composite: "195"
        }
      },
      strengthsAndWeaknesses: {
        reading: {
          correctAnswers: "32",
          totalAnswers: "52"
        },
        writing: {
          correctAnswers: "35",
          totalAnswers: "52"
        },
        math: {
          correctAnswers: "37",
          totalAnswers: "52"
        }
      }
    };
  });
  return formattedStudents;
});
const searchStudentsApi = filters => {
  let queryString = `search=${filters.name}&location=${filters.location}`;

  switch (filters.sort) {
    case "lastNameDescending":
      queryString += "sort_by_field=last_name";
      break;

    case "firstNameDescending":
      queryString += "sort_by_field=first_name";
      break;

    case "lastNameAscending":
      queryString += "sort_by_field=last_name&sort_by_asc=true";
      break;

    case "firstNameAscending":
      queryString += "sort_by_field=first_name&sort_by_asc=true";
      break;

    default:
      queryString += "";
  }

  return fetch(`${API_URL}/api/students?${queryString}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
    }
  }).then(res => res.json()).then(({
    data
  }) => {
    if (data.students.length < 1) {
      return [];
    }

    const formattedStudents = data.students.map(student => {
      const {
        user_address
      } = student;
      return {
        id: student.id,
        active: student.active,
        studentInformation: {
          firstName: student.first_name,
          lastName: student.last_name
        },
        contactInformation: {
          phone: user_address ? user_address.phone : "",
          addressLine1: user_address ? user_address.address : "",
          addressLine2: "",
          city: user_address ? user_address.city : "",
          state: user_address ? user_address.state : "",
          zipCode: user_address ? user_address.zip : ""
        },
        emailAddress: {
          email: student.email
        },
        location: {
          locations: student.user_locations
        },
        stats: student.stats,
        tutor: !student.hasOwnProperty("tutor") ? "" : student.tutor,
        testScores: {
          initialScore: !student.hasOwnProperty("testScores") ? "0" : student.testScores.initialScore,
          currentScore: !student.hasOwnProperty("testScores") ? "0" : student.testScores.currentScore
        },
        courseContext: {
          targetScore: !student.hasOwnProperty("courseContext") ? "0" : student.courseContext.targetScore
        }
      };
    });
    return formattedStudents;
  }).catch(err => err);
};
const createStudentApi = student => fetch(`${API_URL}/api/commands/create-student`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(student)
}).then(res => res.json()).then(result => result).catch(err => err);
const updateStudentActivationApi = body => fetch(`${API_URL}/api/commands/update-student-activation`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.status).catch(err => err);
const updateStudentAddressApi = body => fetch(`${API_URL}/api/commands/update-student-address`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentCityApi = body => fetch(`${API_URL}/api/commands/update-student-city`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentEmailApi = body => fetch(`${API_URL}/api/commands/update-student-email`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentFirstNameApi = body => fetch(`${API_URL}/api/commands/update-student-first-name`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentLastNameApi = body => fetch(`${API_URL}/api/commands/update-student-last-name`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentPhoneApi = body => fetch(`${API_URL}/api/commands/update-student-phone`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentStateApi = body => fetch(`${API_URL}/api/commands/update-student-state`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentZipApi = body => fetch(`${API_URL}/api/commands/update-student-zip`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentTestDueDate = body => fetch(`${API_URL}/api/commands/update-student-test-due-date`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).catch(err => err);
const updateStudentTestAssignmentDate = body => fetch(`${API_URL}/api/commands/update-student-test-assignment-date`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).catch(err => err);
const deleteStudentApi = id => fetch(`${API_URL}/api/commands/delete-student`, {
  method: "DELETE",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
    student_id: id
  })
}).then(res => res.json()).catch(err => err);
const assignTestToStudentApi = test => fetch(`${API_URL}/api/commands/assign-test-to-student`, {
  method: "POST",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(test)
}).then(res => res.json()).catch(err => err);
const fetchTestsByStudentIdApi = student_id => fetch(`${API_URL}/api/students/${student_id}/student_tests`, {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => ({
  data
})).catch(err => err);
const fetchTestByTestIdApi = (student_id, test_id) => {
  fetch(`${API_URL}/api/students/${student_id}/student_tests/${test_id}`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
    }
  }).then(res => res.json()).catch(err => err);
};
const fetchStudentTestSectionsApi = (student_id, student_test_id) => fetch(`${API_URL}/api/students/${student_id}/student_tests/${student_test_id}/sections`, {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => data.sections).catch(err => err);
const fetchStudentTestSectionProblemsApi = (student_id, student_test_id, section_id, student_token) => fetch(`${API_URL}/api/students/${student_id}/student_tests/${student_test_id}/sections/${section_id}/problems`, {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).catch(err => err);
const addStudentAnswerToTestApi = answer => fetch(`${API_URL}/api/commands/add-student-answer-to-test`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(answer)
}).then(res => res.json()).catch(err => err);
const addStudentTestQuestionFlagApi = (body, studentToken) => fetch(`${API_URL}/api/commands/add-student-test-question-flag`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const fetchStudentTestScoreApi = (student_id, student_test_id) => fetch(`${API_URL}/api/students/${student_id}/student_tests/${student_test_id}/score`, {
  headers: {
    Accept: "application/json",
    "Allow-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).catch(err => err);
const updateStudentTestQuestionFlagStatusApi = body => fetch(`${API_URL}/api/commands/update-student-test-question-flag-status`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const fetchLessonListApi = () => fetch(`${API_URL}/api/lessons`, {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => {
  const lessons = data.lessons;
  return lessons;
});
const fetchUnitsApi = () => fetch(`${API_URL}/api/units`, {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => {
  const {
    units = []
  } = data;
  const formattedUnits = units.reduce((finalArr, currentUnit) => {
    const {
      id,
      name,
      reference_id
    } = currentUnit;
    const newUnit = {
      label: name,
      value: id
    };
    finalArr.push(newUnit);
    return finalArr;
  }, []);
  return {
    formattedUnits
  };
}).catch(err => console.warn('err', err));
const filterLessonListApi = filters => {
  const {
    unitFilter,
    nameFilter
  } = filters;
  const unitString = unitFilter.length ? `unit_id=${unitFilter}&` : '';
  const searchString = nameFilter.length ? `search=${nameFilter.toLowerCase().replace(/\s/g, '+')}&` : '';
  const filterQuery = `${searchString}${unitString}`;
  return fetch(`${API_URL}/api/lessons?${filterQuery}`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
    }
  }).then(res => res.json()).then(({
    data
  }) => {
    const lessons = data.lessons;
    return lessons;
  }).catch(err => err);
};
const fetchSubjectsApi = () => fetch(`${API_URL}/api/subjects`, {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => data.subjects).catch(err => console.warn("err", err));
const assignLessonToStudentApi = lesson => {
  fetch(`${API_URL}/api/commands/assign-lesson-to-student`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(lesson)
  }).then(res => res.json()).catch(err => err);
};
const fetchStudentLessonListApi = (student, studentToken) => fetch(`${API_URL}/api/students/${student}/student_lessons`, {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(res => res).then(({
  data
}) => {
  const studentLessons = data;
  return studentLessons;
});
const resetStudentLessonsApi = lessons => {
  fetch(`${API_URL}/api/commands/reset-student-lessons`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(lessons)
  }).then(res => res.json()).catch(err => err);
};
const unAssignLessonFromStudentApi = lessons => {
  fetch(`${API_URL}/api/commands/unassign-lesson-from-student`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(lessons)
  }).then(res => res.json()).catch(err => err);
};
const rescheduleStudentLessonsApi = lesson => fetch(`${API_URL}/api/commands/reschedule-student-lessons`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(lesson)
}).then(res => res.json()).catch(err => err);
const fetchStudentLessonApi = (student_id, lesson_id) => fetch(`${API_URL}/api/students/${student_id}/student_lessons/${lesson_id}`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(res => res).then(({
  data
}) => data);
const fetchStudentLessonSectionApi = (student_id, lesson_id, section_id) => fetch(`${API_URL}/api/students/${student_id}/student_lessons/${lesson_id}/sections/${section_id}`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(res => res).then(({
  data
}) => data);
const addStudentLessonProblemFlagApi = body => fetch(`${API_URL}/api/commands/flag-student-lesson-problem`, {
  method: 'POST',
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const addVideoWatchedTime = body => fetch(`${API_URL}/api/commands/watch-student-lesson-problem-video`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const fetchAllTestsApi = () => fetch(`${API_URL}/api/tests`, {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => ({
  data
})).catch(err => err);
const addStudentLessonProblemAnswerApi = body => fetch(`${API_URL}/api/commands/add-student-lesson-problem-answer`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.status);
const updateStudentTestStatusApi = body => fetch(`${API_URL}/api/commands/update-student-test-status`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const excuseStudentLessonLatenessApi = body => fetch(`${API_URL}/api/commands/excuse-student-lesson-lateness`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const updateStudentTestSectionStatusApi = body => fetch(`${API_URL}/api/commands/update-student-test-section-status`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res.json()).catch(err => err);
const rescoreStudentLessonApi = body => fetch(`${API_URL}/api/commands/rescore-student-lesson`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res).catch(err => err);
const deleteStudentTestApi = body => fetch(`${API_URL}/api/commands/delete-student-test`, {
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
}).then(res => res).catch(err => err);
const updateStudentEssayScoreApi = scores => fetch(`${API_URL}/api/commands/update-student-test-essay-score`, {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(scores)
}).then(res => res).catch(err => err);

/***/ }),

/***/ "./components/Student/index/constants.js":
/*!***********************************************!*\
  !*** ./components/Student/index/constants.js ***!
  \***********************************************/
/*! exports provided: FETCH_STUDENTS, SEARCH_STUDENTS, SET_STUDENTS, DELETE_STUDENT, UPDATE_STUDENT_ADDRESS, UPDATE_STUDENT_CITY, UPDATE_STUDENT_EMAIL, UPDATE_STUDENT_FIRSTNAME, UPDATE_STUDENT_LASTNAME, UPDATE_STUDENT_PHONE, UPDATE_STUDENT_STATE, UPDATE_STUDENT_ZIP, SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN, SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN, SET_STUDENTS_CALENDAR_CALENDAR_ROWS, SET_IS_VISIBLE_TOP_BAR, SET_ACTIVE_TEST_SCORES, SET_ESSAY_SCORE, GET_TESTS, SET_STUDENT_TESTS, SET_STUDENT_COMPLETED_TESTS, SET_STUDENT_OVERDUE_TESTS, SET_STUDENT_ASSIGNED_TESTS, GET_TEST_SCORES, FETCH_STUDENT_TEST_SECTIONS, SET_STUDENT_SECTIONS, FETCH_LESSON_LIST, FETCH_LESSON_LIST_SUCCESS, FETCH_LESSON_LIST_FAIL, FETCH_STUDENT_LESSON_LIST, FETCH_STUDENT_LESSSON_LIST_SUCCESS, FETCH_STUDENT_LESSON_LIST_FAIL, MERGE_STUDENT_LESSON_LISTS, CHECKED_LESSON, SELECT_ALL_LESSONS, UNSELECT_ALL_LESSONS, ADD_CHECKED_LESSON, REMOVE_CHECKED_LESSON, ASSIGN_STUDENT_LESSON, ASSIGN_STUDENT_LESSON_SUCCESS, ASSIGN_STUDENT_LESSON_FAIL, FETCH_UNITS, SET_UNIT_FILTER_OPTIONS, SET_ACTIVE_STUDENT_TEST_ID, SET_ACTIVE_STUDENT_TOKEN, RESET_STUDENT_LESSONS, RESET_STUDENT_LESSONS_SUCCESS, RESET_STUDENT_LESSONS_FAIL, UNASSIGN_STUDENT_LESSON, UNASSIGN_STUDENT_LESSON_SUCCESS, UNASSIGN_STUDENT_LESSON_FAIL, RESCHEDULE_STUDENT_LESSONS, RESCHEDULE_STUDENT_LESSONS_SUCCESS, RESCHEDULE_STUDENT_LESSONS_FAIL, ADD_ALL_LESSONS, REMOVE_ALL_LESSONS, SET_ACTIVE_LESSON, SET_OPEN_ACTIVE_PAGE, UPDATE_STUDENT_ACTIVATION, UPDATE_STUDENT_ACTIVATION_SUCCESS, UPDATE_STUDENT_ACTIVATION_FAIL, FETCH_SUBJECTS, FETCH_SUBJECTS_SUCCESS, SET_OPEN_ANSWERSHEET_STATUS, FETCH_STUDENT_LESSON_LIST_DEBOUNCE, EXCUSE_STUDENT_LATENESS, SET_EXCUSE_STUDENT_LATENESS, FILTER_LESSONS, FLAG_STUDENT_LESSON_PROBLEM, SET_TESTS, SET_ACTIVE_STUDENT, SET_STUDENT_TEST_SECTION_PROBLEMS, ADD_LESSON_ANSWER, ADD_LESSON_ANSWER_SUCCESS, DELETE_STUDENT_TEST, GET_TESTS_DEBOUNCE, UPDATE_TEST_FLAG, REMOVE_TEST, ASSIGN_NEW_TEST, ADD_NEW_TEST_TO_STUDENT_TESTS, ADD_STUDENT_ANSWER_TO_TEST, UPDATE_STUDENT_TEST_ANSWER, UPDATE_TEST_STATUS, UPDATE_TEST_STATUS_SUCCESS, REMOVE_TEST_FROM_PREV_LIST, ADD_TEST_TO_COMPLETED, REMOVE_TEST_FROM_LIST, UPDATE_FLAG_STATUS, UPDATE_FLAG_STATUS_SUCCESS, FETCH_STUDENT_TESTS_SUCCESSFUL, ADD_FREE_RESPONSE_ANSWER_TO_TEST, SEND_ERROR_MESSAGE, RESET_ERROR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STUDENTS", function() { return FETCH_STUDENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_STUDENTS", function() { return SEARCH_STUDENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENTS", function() { return SET_STUDENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_STUDENT", function() { return DELETE_STUDENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_ADDRESS", function() { return UPDATE_STUDENT_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_CITY", function() { return UPDATE_STUDENT_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_EMAIL", function() { return UPDATE_STUDENT_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_FIRSTNAME", function() { return UPDATE_STUDENT_FIRSTNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_LASTNAME", function() { return UPDATE_STUDENT_LASTNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_PHONE", function() { return UPDATE_STUDENT_PHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_STATE", function() { return UPDATE_STUDENT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_ZIP", function() { return UPDATE_STUDENT_ZIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN", function() { return SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN", function() { return SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENTS_CALENDAR_CALENDAR_ROWS", function() { return SET_STUDENTS_CALENDAR_CALENDAR_ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_VISIBLE_TOP_BAR", function() { return SET_IS_VISIBLE_TOP_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_TEST_SCORES", function() { return SET_ACTIVE_TEST_SCORES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESSAY_SCORE", function() { return SET_ESSAY_SCORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TESTS", function() { return GET_TESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENT_TESTS", function() { return SET_STUDENT_TESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENT_COMPLETED_TESTS", function() { return SET_STUDENT_COMPLETED_TESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENT_OVERDUE_TESTS", function() { return SET_STUDENT_OVERDUE_TESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENT_ASSIGNED_TESTS", function() { return SET_STUDENT_ASSIGNED_TESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEST_SCORES", function() { return GET_TEST_SCORES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STUDENT_TEST_SECTIONS", function() { return FETCH_STUDENT_TEST_SECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENT_SECTIONS", function() { return SET_STUDENT_SECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LESSON_LIST", function() { return FETCH_LESSON_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LESSON_LIST_SUCCESS", function() { return FETCH_LESSON_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LESSON_LIST_FAIL", function() { return FETCH_LESSON_LIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STUDENT_LESSON_LIST", function() { return FETCH_STUDENT_LESSON_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STUDENT_LESSSON_LIST_SUCCESS", function() { return FETCH_STUDENT_LESSSON_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STUDENT_LESSON_LIST_FAIL", function() { return FETCH_STUDENT_LESSON_LIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MERGE_STUDENT_LESSON_LISTS", function() { return MERGE_STUDENT_LESSON_LISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKED_LESSON", function() { return CHECKED_LESSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ALL_LESSONS", function() { return SELECT_ALL_LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECT_ALL_LESSONS", function() { return UNSELECT_ALL_LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHECKED_LESSON", function() { return ADD_CHECKED_LESSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CHECKED_LESSON", function() { return REMOVE_CHECKED_LESSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSIGN_STUDENT_LESSON", function() { return ASSIGN_STUDENT_LESSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSIGN_STUDENT_LESSON_SUCCESS", function() { return ASSIGN_STUDENT_LESSON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSIGN_STUDENT_LESSON_FAIL", function() { return ASSIGN_STUDENT_LESSON_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_UNITS", function() { return FETCH_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNIT_FILTER_OPTIONS", function() { return SET_UNIT_FILTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_STUDENT_TEST_ID", function() { return SET_ACTIVE_STUDENT_TEST_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_STUDENT_TOKEN", function() { return SET_ACTIVE_STUDENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_STUDENT_LESSONS", function() { return RESET_STUDENT_LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_STUDENT_LESSONS_SUCCESS", function() { return RESET_STUDENT_LESSONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_STUDENT_LESSONS_FAIL", function() { return RESET_STUDENT_LESSONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNASSIGN_STUDENT_LESSON", function() { return UNASSIGN_STUDENT_LESSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNASSIGN_STUDENT_LESSON_SUCCESS", function() { return UNASSIGN_STUDENT_LESSON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNASSIGN_STUDENT_LESSON_FAIL", function() { return UNASSIGN_STUDENT_LESSON_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESCHEDULE_STUDENT_LESSONS", function() { return RESCHEDULE_STUDENT_LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESCHEDULE_STUDENT_LESSONS_SUCCESS", function() { return RESCHEDULE_STUDENT_LESSONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESCHEDULE_STUDENT_LESSONS_FAIL", function() { return RESCHEDULE_STUDENT_LESSONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ALL_LESSONS", function() { return ADD_ALL_LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_LESSONS", function() { return REMOVE_ALL_LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_LESSON", function() { return SET_ACTIVE_LESSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OPEN_ACTIVE_PAGE", function() { return SET_OPEN_ACTIVE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_ACTIVATION", function() { return UPDATE_STUDENT_ACTIVATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_ACTIVATION_SUCCESS", function() { return UPDATE_STUDENT_ACTIVATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_ACTIVATION_FAIL", function() { return UPDATE_STUDENT_ACTIVATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBJECTS", function() { return FETCH_SUBJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBJECTS_SUCCESS", function() { return FETCH_SUBJECTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OPEN_ANSWERSHEET_STATUS", function() { return SET_OPEN_ANSWERSHEET_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STUDENT_LESSON_LIST_DEBOUNCE", function() { return FETCH_STUDENT_LESSON_LIST_DEBOUNCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXCUSE_STUDENT_LATENESS", function() { return EXCUSE_STUDENT_LATENESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EXCUSE_STUDENT_LATENESS", function() { return SET_EXCUSE_STUDENT_LATENESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_LESSONS", function() { return FILTER_LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAG_STUDENT_LESSON_PROBLEM", function() { return FLAG_STUDENT_LESSON_PROBLEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TESTS", function() { return SET_TESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_STUDENT", function() { return SET_ACTIVE_STUDENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STUDENT_TEST_SECTION_PROBLEMS", function() { return SET_STUDENT_TEST_SECTION_PROBLEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LESSON_ANSWER", function() { return ADD_LESSON_ANSWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LESSON_ANSWER_SUCCESS", function() { return ADD_LESSON_ANSWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_STUDENT_TEST", function() { return DELETE_STUDENT_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TESTS_DEBOUNCE", function() { return GET_TESTS_DEBOUNCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TEST_FLAG", function() { return UPDATE_TEST_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TEST", function() { return REMOVE_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSIGN_NEW_TEST", function() { return ASSIGN_NEW_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_TEST_TO_STUDENT_TESTS", function() { return ADD_NEW_TEST_TO_STUDENT_TESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STUDENT_ANSWER_TO_TEST", function() { return ADD_STUDENT_ANSWER_TO_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STUDENT_TEST_ANSWER", function() { return UPDATE_STUDENT_TEST_ANSWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TEST_STATUS", function() { return UPDATE_TEST_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TEST_STATUS_SUCCESS", function() { return UPDATE_TEST_STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TEST_FROM_PREV_LIST", function() { return REMOVE_TEST_FROM_PREV_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TEST_TO_COMPLETED", function() { return ADD_TEST_TO_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TEST_FROM_LIST", function() { return REMOVE_TEST_FROM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FLAG_STATUS", function() { return UPDATE_FLAG_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FLAG_STATUS_SUCCESS", function() { return UPDATE_FLAG_STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STUDENT_TESTS_SUCCESSFUL", function() { return FETCH_STUDENT_TESTS_SUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FREE_RESPONSE_ANSWER_TO_TEST", function() { return ADD_FREE_RESPONSE_ANSWER_TO_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_ERROR_MESSAGE", function() { return SEND_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_ERROR_MESSAGE", function() { return RESET_ERROR_MESSAGE; });
const FETCH_STUDENTS = "FETCH_STUDENTS";
const SEARCH_STUDENTS = "SEARCH_STUDENTS";
const SET_STUDENTS = "SET_STUDENTS";
const DELETE_STUDENT = "DELETE_STUDENT";
const UPDATE_STUDENT_ADDRESS = "UPDATE_STUDENT_ADDRESS";
const UPDATE_STUDENT_CITY = "UPDATE_STUDENT_CITY";
const UPDATE_STUDENT_EMAIL = "UPDATE_STUDENT_EMAIL";
const UPDATE_STUDENT_FIRSTNAME = "UPDATE_STUDENT_FIRSTNAME";
const UPDATE_STUDENT_LASTNAME = "UPDATE_STUDENT_LASTNAME";
const UPDATE_STUDENT_PHONE = "UPDATE_STUDENT_PHONE";
const UPDATE_STUDENT_STATE = "UPDATE_STUDENT_STATE";
const UPDATE_STUDENT_ZIP = "UPDATE_STUDENT_ZIP";
const SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN = "SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN";
const SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN = "SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN";
const SET_STUDENTS_CALENDAR_CALENDAR_ROWS = "SET_STUDENTS_CALENDAR_CALENDAR_ROWS";
const SET_IS_VISIBLE_TOP_BAR = "SET_IS_VISIBLE_TOP_BAR";
const SET_ACTIVE_TEST_SCORES = "SET_ACTIVE_TEST_SCORES";
const SET_ESSAY_SCORE = "SET_ESSAY_SCORE";
const GET_TESTS = "GET_TESTS";
const SET_STUDENT_TESTS = "SET_STUDENT_TESTS";
const SET_STUDENT_COMPLETED_TESTS = "SET_STUDENT_COMPLETED_TESTS";
const SET_STUDENT_OVERDUE_TESTS = "SET_STUDENT_OVERDUE_TESTS";
const SET_STUDENT_ASSIGNED_TESTS = "SET_STUDENT_ASSIGNED_TESTS";
const GET_TEST_SCORES = "GET_TEST_SCORES";
const FETCH_STUDENT_TEST_SECTIONS = "FETCH_STUDENT_TEST_SECTIONS";
const SET_STUDENT_SECTIONS = "SET_STUDENT_SECTIONS";
const FETCH_LESSON_LIST = 'FETCH_LESSON_LIST';
const FETCH_LESSON_LIST_SUCCESS = 'FETCH_LESSON_LIST_SUCCESS';
const FETCH_LESSON_LIST_FAIL = 'FETCH_LESSON_LIST_FAIL';
const FETCH_STUDENT_LESSON_LIST = 'FETCH_STUDENT_LESSON_LIST';
const FETCH_STUDENT_LESSSON_LIST_SUCCESS = 'FETCH_STUDENT_LESSON_LIST_SUCCUSS';
const FETCH_STUDENT_LESSON_LIST_FAIL = 'FETCH_STUDENT_LESSON_LIST_FAIL';
const MERGE_STUDENT_LESSON_LISTS = 'MERGE_STUDENT_LESSON_LISTS';
const CHECKED_LESSON = 'CHECKED_LESSON';
const SELECT_ALL_LESSONS = 'SELECT_ALL_LESSONS';
const UNSELECT_ALL_LESSONS = 'UNSELECT_ALL_LESSONS';
const ADD_CHECKED_LESSON = 'ADD_CHECKED_LESSON';
const REMOVE_CHECKED_LESSON = 'REMOVE_CHECKED_LESSON';
const ASSIGN_STUDENT_LESSON = 'ASSIGN_STUDENT_LESSON';
const ASSIGN_STUDENT_LESSON_SUCCESS = 'ASSIGN_STUDENT_LESSON_SUCCESS';
const ASSIGN_STUDENT_LESSON_FAIL = 'ASSIGN_STUDENT_LESSON_FAIL';
const FETCH_UNITS = 'FETCH_UNITS';
const SET_UNIT_FILTER_OPTIONS = 'SET_UNIT_FILTER_OPTIONS';
const SET_ACTIVE_STUDENT_TEST_ID = 'SET_ACTIVE_STUDENT_TEST_ID';
const SET_ACTIVE_STUDENT_TOKEN = 'SET_ACTIVE_STUDENT_TOKEN';
const RESET_STUDENT_LESSONS = 'RESET_STUDENT_LESSONS';
const RESET_STUDENT_LESSONS_SUCCESS = 'RESET_STUDENT_LESSONS_SUCCESS';
const RESET_STUDENT_LESSONS_FAIL = 'RESET_STUDENT_LESSONS_FAIL';
const UNASSIGN_STUDENT_LESSON = 'UNASSIGN_STUDENT_LESSON';
const UNASSIGN_STUDENT_LESSON_SUCCESS = 'UNASSIGN_STUDENT_LESSON_SUCCESS';
const UNASSIGN_STUDENT_LESSON_FAIL = 'UNASSIGN_STUDENT_LESSON_FAIL';
const RESCHEDULE_STUDENT_LESSONS = 'RESCHEDULE_STUDENT_LESSONS';
const RESCHEDULE_STUDENT_LESSONS_SUCCESS = 'RESCHEDULE_STUDENT_LESSONS_SUCCESS';
const RESCHEDULE_STUDENT_LESSONS_FAIL = 'RESCHEDULE_STUDENT_LESSONS_FAIL';
const ADD_ALL_LESSONS = 'ADD_ALL_LESSONS';
const REMOVE_ALL_LESSONS = 'REMOVE_ALL_LESSONS';
const SET_ACTIVE_LESSON = 'SET_ACTIVE_LESSON';
const SET_OPEN_ACTIVE_PAGE = 'SET_OPEN_ACTIVE_PAGE';
const UPDATE_STUDENT_ACTIVATION = 'UPDATE_STUDENT_ACTIVATION';
const UPDATE_STUDENT_ACTIVATION_SUCCESS = 'UPDATE_STUDENT_ACTIVATION_SUCCESS';
const UPDATE_STUDENT_ACTIVATION_FAIL = 'UPDATE_STUDENT_ACTIVATION_FAIL';
const FETCH_SUBJECTS = 'FETCH_SUBJECTS';
const FETCH_SUBJECTS_SUCCESS = 'FETCH_SUBJECTS_SUCCESS';
const SET_OPEN_ANSWERSHEET_STATUS = 'SET_OPEN_ANSWERSHEET_STATUS';
const FETCH_STUDENT_LESSON_LIST_DEBOUNCE = 'FETCH_STUDENT_LESSON_LIST_DEBOUNCE';
const EXCUSE_STUDENT_LATENESS = 'EXCUSE_STUDENT_LATENESS';
const SET_EXCUSE_STUDENT_LATENESS = 'SET_EXCUSE_STUDENT_LATENESS';
const FILTER_LESSONS = 'FILTER_LESSONS';
const FLAG_STUDENT_LESSON_PROBLEM = 'FLAG_STUDENT_LESSON_PROBLEM';
const SET_TESTS = "SET_TESTS";
const SET_ACTIVE_STUDENT = 'SET_ACTIVE_STUDENT';
const SET_STUDENT_TEST_SECTION_PROBLEMS = 'SET_STUDENT_TEST_SECTION_PROBLEMS';
const ADD_LESSON_ANSWER = 'ADD_LESSON_ANSWER';
const ADD_LESSON_ANSWER_SUCCESS = 'ADD_LESSON_ANSWER_SUCCESS';
const DELETE_STUDENT_TEST = 'DELETE_STUDENT_TEST';
const GET_TESTS_DEBOUNCE = "GET_TESTS_DEBOUNCE";
const UPDATE_TEST_FLAG = 'UPDATE_TEST_FLAG';
const REMOVE_TEST = 'REMOVE_TEST';
const ASSIGN_NEW_TEST = 'ASSIGN_NEW_TEST';
const ADD_NEW_TEST_TO_STUDENT_TESTS = 'ADD_NEW_TEST_TO_STUDENT_TESTS';
const ADD_STUDENT_ANSWER_TO_TEST = "ADD_STUDENT_ANSWER_TO_TEST";
const UPDATE_STUDENT_TEST_ANSWER = 'UPDATE_STUDENT_TEST_ANSWER';
const UPDATE_TEST_STATUS = 'UPDATE_TEST_STATUS';
const UPDATE_TEST_STATUS_SUCCESS = 'UPDATE_TEST_STATUS_SUCCESS';
const REMOVE_TEST_FROM_PREV_LIST = 'REMOVE_TEST_FROM_PREV_LIST';
const ADD_TEST_TO_COMPLETED = 'ADD_TEST_TO_COMPLETED';
const REMOVE_TEST_FROM_LIST = 'REMOVE_TEST_FROM_LIST';
const UPDATE_FLAG_STATUS = 'UPDATE_FLAG_STATUS';
const UPDATE_FLAG_STATUS_SUCCESS = 'UPDATE_FLAG_STATUS_SUCCESS';
const FETCH_STUDENT_TESTS_SUCCESSFUL = 'FETCH_STUDENT_TESTS_SUCCESSFUL';
const ADD_FREE_RESPONSE_ANSWER_TO_TEST = 'ADD_FREE_RESPONSE_ANSWER_TO_TEST';
const SEND_ERROR_MESSAGE = 'SEND_ERROR_MESSAGE';
const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

/***/ }),

/***/ "./components/Student/index/reducers.js":
/*!**********************************************!*\
  !*** ./components/Student/index/reducers.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./components/Student/index/constants.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_8__["fromJS"])({
  students: [],
  assignLessonsModalOpen: false,
  assignWorkSheetsModalOpen: false,
  calendarRows: [],
  isVisibleTopBar: true,
  activeTestScores: null,
  overdueStudentTests: [],
  assignedStudentTests: [],
  completedStudentTests: [],
  sections: [],
  activeStudentTestId: '',
  lessonList: [],
  studentLessonList: [],
  unassignedLessonList: [],
  isLoading: false,
  error: null,
  unitFilterOptions: [],
  activeStudentToken: '',
  checkedLessons: [],
  activeLesson: null,
  openAnswerSheet: false,
  subjects: {},
  activeShowPage: '',
  tests: [],
  activeStudent: null,
  testSectionProblems: [],
  studentTests: [],
  studentTestsFetchedStatus: false,
  errorMessages: {
    testFlagMessage: "",
    answerTestProblemMessage: "",
    fetchSectionsMessage: "",
    fetchProblemsMessage: "",
    fetchScoresMsg: "",
    updateTestStatusMsg: "",
    fetchingStudentTestsMessage: ''
  }
});

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENTS"]:
      return state.set('students', action.students);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN"]:
      return state.set('assignLessonsModalOpen', action.value);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN"]:
      return state.set('assignWorkSheetsModalOpen', action.value);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENTS_CALENDAR_CALENDAR_ROWS"]:
      return state.set('calendarRows', action.rows);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_IS_VISIBLE_TOP_BAR"]:
      return state.set('isVisibleTopBar', action.value);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_ACTIVE_TEST_SCORES"]:
      return state.set('activeTestScores', action.scores);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_ESSAY_SCORE"]:
      return state.set('activeTestScores', _objectSpread({}, state.get('activeTestScores'), {
        essay: action.score
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENT_COMPLETED_TESTS"]:
      return state.set('completedStudentTests', action.tests);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENT_OVERDUE_TESTS"]:
      return state.set('overdueStudentTests', action.tests);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENT_ASSIGNED_TESTS"]:
      return state.set('assignedStudentTests', action.tests);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENT_TESTS"]:
      return state.set('studentTests', action.tests);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENT_SECTIONS"]:
      return state.set('sections', action.sections);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_ACTIVE_STUDENT_TEST_ID"]:
      return state.set('activeStudentTestId', action.studentTestId);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["FETCH_LESSON_LIST"]:
      return state.set('isLoading', true);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["FETCH_LESSON_LIST_SUCCESS"]:
      return state.set('unassignedLessonList', action.payload);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["FETCH_STUDENT_LESSSON_LIST_SUCCESS"]:
      return state.set('studentLessonList', action.payload);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_UNIT_FILTER_OPTIONS"]:
      return state.set('unitFilterOptions', action.options);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_ACTIVE_STUDENT_TOKEN"]:
      return state.set('activeStudentToken', action.token);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["CHECKED_LESSON"]:
      return state.set('lessonList', state.get('lessonList').map(lesson => {
        if (lesson.id !== action.id) {
          return lesson;
        }

        return _objectSpread({}, lesson, {
          selected: !lesson.selected
        });
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SELECT_ALL_LESSONS"]:
      return state.set('lessonList', state.get('lessonList').map(lesson => {
        if (action.mappedLessons.includes(lesson.id)) {
          return _objectSpread({}, lesson, {
            selected: true
          });
        }

        return lesson;
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["UNSELECT_ALL_LESSONS"]:
      return state.set('lessonList', state.get('lessonList').map(lesson => _objectSpread({}, lesson, {
        selected: false
      })));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["ADD_ALL_LESSONS"]:
      // Adds each lesson to the list of "checkedLessons"
      return state.set('checkedLessons', action.mappedLessons.map(lesson => {
        if (lesson.lesson_id) {
          return lesson.lesson_id;
        }

        return lesson.id;
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["REMOVE_ALL_LESSONS"]:
      return state.set('checkedLessons', []);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["ADD_CHECKED_LESSON"]:
      return state.set('checkedLessons', [...state.get('checkedLessons'), action.lessonId]);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["REMOVE_CHECKED_LESSON"]:
      return state.set('checkedLessons', state.get('checkedLessons').filter(lesson => lesson !== action.lessonId));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["MERGE_STUDENT_LESSON_LISTS"]:
      // const getStudentLessonList = (studentLessonList) => studentLessonList.map(lesson => {
      //   if (lesson.problems && lesson.problems.length > 0) {
      //     lesson = { ...lesson, type: 'drill', selected: false };
      //   } else if (lesson.sections) {
      //     lesson = { ...lesson, type: 'module', selected: false };
      //   } else if (lesson.problems && lesson.problems.length <= 0) {
      //     lesson = { ...lesson, type: 'reading', selected: false };
      //   }
      //   return lesson;
      // });
      return state.set('lessonList', [...state.get('studentLessonList'), ...state.get('unassignedLessonList')]);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_ACTIVE_LESSON"]:
      return state.set('activeLesson', action.activeLesson);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_OPEN_ANSWERSHEET_STATUS"]:
      return state.set('openAnswerSheet', action.value);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_OPEN_ACTIVE_PAGE"]:
      return state.set('activeShowPage', action.value);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["RESCHEDULE_STUDENT_LESSONS_SUCCESS"]:
      return state.set('lessonList', state.get('lessonList').map(lesson => {
        const {
          payload: {
            due_date,
            assignment_date
          }
        } = action;
        let updatedLesson = {};
        action.payload.student_lesson_ids.forEach(setLessons => {
          if (setLessons === lesson.id) {
            return updatedLesson = _objectSpread({}, lesson, {
              assignment_date,
              due_date
            });
          }

          if (!updatedLesson.id) return updatedLesson = lesson;
        });
        return updatedLesson;
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["UNASSIGN_STUDENT_LESSON_SUCCESS"]:
      return state.set('lessonList', state.get('lessonList').filter(lesson => !action.payload.includes(lesson.id)));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["RESET_STUDENT_LESSONS_SUCCESS"]:
      return state.set('lessonList', state.get('lessonList').map(lesson => {
        let updatedLesson = {};
        action.payload.forEach(sentLessonId => {
          if (sentLessonId === lesson.id) {
            let status = 'ASSIGNED';
            if (moment__WEBPACK_IMPORTED_MODULE_9___default()().isAfter(lesson.due_date)) status = 'OVERDUE';
            return updatedLesson = _objectSpread({}, lesson, {
              status,
              challenge_completed_at: null,
              practice_completed_at: null,
              completed_at: null,
              scoring: {}
            });
          }

          if (!updatedLesson.id) return updatedLesson = lesson;
        });
        return updatedLesson;
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["FETCH_SUBJECTS_SUCCESS"]:
      return state.set('subjects', action.payload);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_TESTS"]:
      return state.set('tests', action.tests);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_EXCUSE_STUDENT_LATENESS"]:
      return state.set('lessonList', state.get('lessonList').map(lesson => {
        if (action.payload.student_lesson_id === lesson.id) {
          return _objectSpread({}, lesson, {
            lateness_excused: action.payload.was_excused
          });
        }

        return lesson;
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_ACTIVE_STUDENT"]:
      return state.set('activeStudent', action.student);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SET_STUDENT_TEST_SECTION_PROBLEMS"]:
      return state.set('testSectionProblems', action.problems);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["REMOVE_TEST"]:
      return state.set(action.testType, state.get(action.testType).filter(test => test.student_test_id !== action.studentTestId));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["REMOVE_TEST_FROM_LIST"]:
      return state.set('studentTests', state.get('studentTests').filter(test => test.student_test_id !== action.studentTestId));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["ASSIGN_NEW_TEST"]:
      return state.set('assignedStudentTests', [...state.get('assignedStudentTests'), action.newTest]);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["ADD_NEW_TEST_TO_STUDENT_TESTS"]:
      return state.set('studentTests', [...state.get('studentTests'), action.newTest]);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["UPDATE_STUDENT_TEST_ANSWER"]:
      return state.set('sections', state.get('sections').map(section => {
        if (section.test_section_id === action.sectionId) {
          section.problems.problems.map(problem => {
            if (problem.id === action.payload.test_problem_id) {
              problem.student_answer = action.payload.answer;
              return problem;
            }
          });
        }

        return section;
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["UPDATE_TEST_STATUS_SUCCESS"]:
      return state.set('studentTests', state.get('studentTests').map(test => {
        if (test.student_test_id === action.payload.student_test_id) {
          return _objectSpread({}, test, {
            status: action.payload.status
          });
        }

        return test;
      }));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["REMOVE_TEST_FROM_PREV_LIST"]:
      return state.set(action.testList, state.get(action.testList).filter(test => test.student_test_id !== action.payload.student_test_id));

    case _constants__WEBPACK_IMPORTED_MODULE_10__["ADD_TEST_TO_COMPLETED"]:
      // Grabs the test info from original test list and adds a completion date & status
      return state.set('completedStudentTests', [...state.get('completedStudentTests'), _objectSpread({}, state.get(action.testList).filter(test => test.student_test_id === action.payload.student_test_id)[0], {
        completion_date: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default()(),
        status: action.payload.status
      })]);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["FETCH_STUDENT_TESTS_SUCCESSFUL"]:
      return state.set('studentTestsFetchedStatus', action.status);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["UPDATE_FLAG_STATUS_SUCCESS"]:
      const newSections = state.get('sections').map(section => {
        if (section.test_section_id === action.sectionId) {
          const updatedProblems = section.problems.problems.map(problem => {
            if (problem.id === action.question.id) {
              return action.question;
            }

            return problem;
          });

          const updatedSection = _objectSpread({}, section, {
            problems: _objectSpread({}, section.problems, {
              problems: updatedProblems
            })
          });

          return updatedSection;
        }

        return section;
      });
      return state.set('sections', newSections);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["SEND_ERROR_MESSAGE"]:
      const updatedErrorMessages = _objectSpread({}, state.get('errorMessages'), {
        [action.propertyName]: action.message
      });

      return state.set('errorMessages', updatedErrorMessages);

    case _constants__WEBPACK_IMPORTED_MODULE_10__["RESET_ERROR_MESSAGE"]:
      const resetErrorMessages = _objectSpread({}, state.get('errorMessages'), {
        [action.propertyName]: ""
      });

      return state.set('errorMessages', resetErrorMessages);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (studentReducer);

/***/ }),

/***/ "./components/User/index/actions.js":
/*!******************************************!*\
  !*** ./components/User/index/actions.js ***!
  \******************************************/
/*! exports provided: setUserIsLogged, getCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserIsLogged", function() { return setUserIsLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./components/User/index/constants.js");

function setUserIsLogged(value) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_USER_IS_LOGGED"],
    value
  };
}
function getCurrentUser() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_CURRENT_USER"]
  };
}

/***/ }),

/***/ "./components/User/index/api.js":
/*!**************************************!*\
  !*** ./components/User/index/api.js ***!
  \**************************************/
/*! exports provided: _checkStatus, oAuthTokenApi, fetchCurrentUserApi, LogoutApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_checkStatus", function() { return _checkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oAuthTokenApi", function() { return oAuthTokenApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUserApi", function() { return fetchCurrentUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutApi", function() { return LogoutApi; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/AuthService */ "./utils/AuthService.js");

const API_URL = "http://18.236.213.121";

const _checkStatus = response => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};
const oAuthTokenApi = data => fetch(`${API_URL}/api/login`, {
  method: 'POST',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
}).then(response => response.json()).then(data => data).catch(err => err);
const fetchCurrentUserApi = () => fetch(`${API_URL}/api/users`, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(res => res.json()).then(({
  data
}) => data).catch(err => err);
const LogoutApi = () => fetch(`${API_URL}/api/logout`, {
  method: 'POST',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Object(_utils_AuthService__WEBPACK_IMPORTED_MODULE_1__["getToken"])()}`
  }
}).then(_checkStatus).then(response => response.json()).then(data => data).catch(err => err);
/* harmony default export */ __webpack_exports__["default"] = ([oAuthTokenApi, fetchCurrentUserApi, LogoutApi]);

/***/ }),

/***/ "./components/User/index/constants.js":
/*!********************************************!*\
  !*** ./components/User/index/constants.js ***!
  \********************************************/
/*! exports provided: SET_USER_IS_LOGGED, SET_CURRENT_USER, FETCH_CURRENT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_IS_LOGGED", function() { return SET_USER_IS_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CURRENT_USER", function() { return FETCH_CURRENT_USER; });
const SET_USER_IS_LOGGED = 'SET_USER_IS_LOGGED';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

/***/ }),

/***/ "./components/User/index/reducers.js":
/*!*******************************************!*\
  !*** ./components/User/index/reducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./components/User/index/constants.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  isLogged: false,
  user: null
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_USER_IS_LOGGED"]:
      return state.set('isLogged', action.value);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_USER"]:
      return state.set('user', action.value);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./components/User/index/selectors.js":
/*!********************************************!*\
  !*** ./components/User/index/selectors.js ***!
  \********************************************/
/*! exports provided: default, makeSelectUserPageState, makeSelectUserIsLogged, makeSelectCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectUserPageState", function() { return makeSelectUserPageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectUserIsLogged", function() { return makeSelectUserIsLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectCurrentUser", function() { return makeSelectCurrentUser; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


const selectUserDomain = state => state.userReducer;

const makeSelectUserPageState = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserDomain, substate => substate ? substate.toJS() : {});

const makeSelectUserIsLogged = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(makeSelectUserPageState(), substate => substate.isLogged);

const makeSelectCurrentUser = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(makeSelectUserPageState(), substate => substate.user);

/* harmony default export */ __webpack_exports__["default"] = (selectUserDomain);


/***/ }),

/***/ "./components/utils/sampleInstructors.js":
/*!***********************************************!*\
  !*** ./components/utils/sampleInstructors.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const uuidv4 = __webpack_require__(/*! uuid/v4 */ "uuid/v4");

/* harmony default export */ __webpack_exports__["default"] = ([{
  id: uuidv4(),
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
  id: uuidv4(),
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
  id: uuidv4(),
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
  id: uuidv4(),
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
  id: uuidv4(),
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
  id: uuidv4(),
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

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
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
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

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = _router.default.router.pageLoader.prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    _router.default.prefetch(this.getHref());
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__NEXT_SPR ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

      if (true) {
        // mark it as prefetched for debugging in dev
        this.pageLoader.prefetched[route] = true;
        return;
      }

      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;

__webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _utils_with_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/with-redux-store */ "./utils/with-redux-store.js");
/* harmony import */ var _components_Core_blank_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Core/_blank.css */ "./components/Core/_blank.css");
/* harmony import */ var _components_Core_blank_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_Core_blank_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class ClearChoice extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: reduxStore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_with_redux_store__WEBPACK_IMPORTED_MODULE_6__["default"])(ClearChoice));

/***/ }),

/***/ "./reducers.js":
/*!*********************!*\
  !*** ./reducers.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Instructor_index_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Instructor/index/reducers */ "./components/Instructor/index/reducers.js");
/* harmony import */ var _components_Student_index_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Student/index/reducers */ "./components/Student/index/reducers.js");
/* harmony import */ var _components_Classes_index_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Classes/index/reducers */ "./components/Classes/index/reducers.js");
/* harmony import */ var _components_User_index_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/User/index/reducers */ "./components/User/index/reducers.js");
/* harmony import */ var _components_Location_index_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Location/index/reducers */ "./components/Location/index/reducers.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  instructorReducer: _components_Instructor_index_reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  studentReducer: _components_Student_index_reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  classesReducer: _components_Classes_index_reducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  userReducer: _components_User_index_reducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  locationsReducer: _components_Location_index_reducers__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./sagas.js":
/*!******************!*\
  !*** ./sagas.js ***!
  \******************/
/*! exports provided: watchForFetchStudents, fetchStudents, watchForFetchUnitFilterOptions, fetchUnits, watchForFetchStudentTestSections, fetchStudentTestSections, watchForFetchStudentTests, fetchStudentTests, watchForSearchStudents, searchStudents, watchForDeleteStudent, watchForUpdateStudentFirstName, watchForUpdateStudentLastName, watchForUpdateStudentAddress, watchForUpdateStudentCity, watchForUpdateStudentEmail, watchForUpdateStudentPhone, watchForUpdateStudentState, watchForUpdateStudentZip, watchForUpdateInstructorFirstName, watchForUpdateInstructorLastName, watchForUpdateInstructorEmail, watchForUpdateInstructorState, watchForUpdateInstructorCity, watchForUpdateInstructorZip, watchForUpdateInstructorAddress, watchForUpdateInstructorPhone, watchForCreateInstructor, watchForFetchInstructors, fetchInstructors, watchForSearchInstructors, searchInstructors, watchForCreateClass, createClass, watchForFetchClasses, fetchClasses, watchForUpdateClassName, watchForUpdateClassStartDate, watchForUpdateClassEndDate, watchForUpdateClassDuration, watchForUpdateClassExcludeFromStatistics, watchForFetchCurrentUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForFetchStudents", function() { return watchForFetchStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudents", function() { return fetchStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForFetchUnitFilterOptions", function() { return watchForFetchUnitFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUnits", function() { return fetchUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForFetchStudentTestSections", function() { return watchForFetchStudentTestSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentTestSections", function() { return fetchStudentTestSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForFetchStudentTests", function() { return watchForFetchStudentTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStudentTests", function() { return fetchStudentTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForSearchStudents", function() { return watchForSearchStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStudents", function() { return searchStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForDeleteStudent", function() { return watchForDeleteStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateStudentFirstName", function() { return watchForUpdateStudentFirstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateStudentLastName", function() { return watchForUpdateStudentLastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateStudentAddress", function() { return watchForUpdateStudentAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateStudentCity", function() { return watchForUpdateStudentCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateStudentEmail", function() { return watchForUpdateStudentEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateStudentPhone", function() { return watchForUpdateStudentPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateStudentState", function() { return watchForUpdateStudentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateStudentZip", function() { return watchForUpdateStudentZip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateInstructorFirstName", function() { return watchForUpdateInstructorFirstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateInstructorLastName", function() { return watchForUpdateInstructorLastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateInstructorEmail", function() { return watchForUpdateInstructorEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateInstructorState", function() { return watchForUpdateInstructorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateInstructorCity", function() { return watchForUpdateInstructorCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateInstructorZip", function() { return watchForUpdateInstructorZip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateInstructorAddress", function() { return watchForUpdateInstructorAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateInstructorPhone", function() { return watchForUpdateInstructorPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForCreateInstructor", function() { return watchForCreateInstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForFetchInstructors", function() { return watchForFetchInstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInstructors", function() { return fetchInstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForSearchInstructors", function() { return watchForSearchInstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInstructors", function() { return searchInstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForCreateClass", function() { return watchForCreateClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForFetchClasses", function() { return watchForFetchClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClasses", function() { return fetchClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateClassName", function() { return watchForUpdateClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateClassStartDate", function() { return watchForUpdateClassStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateClassEndDate", function() { return watchForUpdateClassEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateClassDuration", function() { return watchForUpdateClassDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForUpdateClassExcludeFromStatistics", function() { return watchForUpdateClassExcludeFromStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchForFetchCurrentUser", function() { return watchForFetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultSaga; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Student/index/constants */ "./components/Student/index/constants.js");
/* harmony import */ var _components_Classes_index_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Classes/index/constants */ "./components/Classes/index/constants.js");
/* harmony import */ var _components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Instructor/index/constants */ "./components/Instructor/index/constants.js");
/* harmony import */ var _components_User_index_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/User/index/constants */ "./components/User/index/constants.js");
/* harmony import */ var _components_Location_index_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Location/index/constants */ "./components/Location/index/constants.js");
/* harmony import */ var _components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Student/index/actions */ "./components/Student/index/actions.js");
/* harmony import */ var _components_Instructor_index_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Instructor/index/actions */ "./components/Instructor/index/actions.js");
/* harmony import */ var _components_Classes_index_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Classes/index/actions */ "./components/Classes/index/actions.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./api */ "./api.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











const {
  fetchStudentsApi,
  searchStudentsApi,
  deleteStudentApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
  fetchTestsByStudentIdApi,
  fetchStudentTestSectionsApi,
  fetchLessonListApi,
  fetchUnitsApi,
  fetchStudentLessonListApi,
  assignLessonToStudentApi,
  resetStudentLessonsApi,
  updateStudentActivationApi,
  unAssignLessonFromStudentApi,
  rescheduleStudentLessonsApi,
  fetchSubjectsApi,
  excuseStudentLessonLatenessApi,
  filterLessonListApi,
  addStudentLessonProblemFlagApi,
  addStudentLessonProblemAnswerApi,
  rescoreStudentLessonApi,
  deleteStudentTestApi,
  fetchStudentTestSectionProblemsApi,
  updateStudentTestQuestionFlagStatusApi,
  addStudentAnswerToTestApi,
  updateStudentTestStatusApi,
  fetchStudentTestScoreApi,
  addStudentTestQuestionFlagApi
} = _api__WEBPACK_IMPORTED_MODULE_17__["studentApi"];
const {
  fetchClassesApi,
  createClassApi,
  updateClassNameApi,
  updateClassStartDateApi,
  updateClassEndDateApi,
  updateClassDurationApi,
  updateClassExcludeFromStatisticsApi
} = _api__WEBPACK_IMPORTED_MODULE_17__["classApi"];
const {
  fetchInstructorsApi,
  searchInstructorsApi,
  updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  updateInstructorPhoneApi,
  createNewInstructorApi
} = _api__WEBPACK_IMPORTED_MODULE_17__["instructorApi"];
const {
  fetchCurrentUserApi
} = _api__WEBPACK_IMPORTED_MODULE_17__["userApi"];
const {
  fetchAllLocationsApi
} = _api__WEBPACK_IMPORTED_MODULE_17__["locationsApi"]; // Error Message Constants

const fetchSectionsMessage = 'fetchSectionsMessage';
const fetchProblemsMessage = 'fetchProblemsMessage';
const testFlagMessage = 'testFlagMessage';
const answerTestProblemMessage = 'answerTestProblemMessage';
const fetchingStudentTestsMessage = 'fetchingStudentTestsMessage';
/** ******************************************    STUDENTS    ******************************************* */

function* watchForFetchStudents() {
  while (true) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_STUDENTS"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudents);
  }
}
function* fetchStudents() {
  try {
    const students = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentsApi);

    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default()(students) || students instanceof Array) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setStudents"])(students));
    }
  } catch (err) {
    console.warn("Error occurred in the fetchStudents saga", err);
  }
}
function* watchForFetchUnitFilterOptions() {
  while (true) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_UNITS"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchUnits);
  }
}
function* fetchUnits() {
  try {
    const {
      formattedUnits
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchUnitsApi);

    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default()(formattedUnits) || formattedUnits instanceof Array) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setUnitFilterOptions"])(formattedUnits));
    }
  } catch (err) {
    console.warn("Error occured in the fetchUnits saga", err);
  }
}
function* watchForFetchStudentTestSections() {
  while (true) {
    const payload = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_STUDENT_TEST_SECTIONS"]);
    const {
      postBody: {
        id,
        student_test_id
      }
    } = payload;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentTestSections, id, student_test_id);
  }
}
function* fetchStudentTestSections(id, studentTestId) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["SET_STUDENT_SECTIONS"],
      sections: []
    });
    const testSections = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentTestSectionsApi, id, studentTestId);

    if (testSections && testSections.message) {
      return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(fetchSectionsMessage, `Error: Something went wrong retrieving sections and problems for this test. You may still view and score essays or try again later.`));
    }

    let count = 0;

    while (count < testSections.length) {
      const problems = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentTestSectionProblemsApi, id, studentTestId, testSections[count].id);

      if (problems && problems.message) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(fetchProblemsMessage, `Error: Couldn't retrieve one or more sections with problems for this test. Those sections will not be shown. Please try again later.`));
      }

      testSections[count].problems = problems.data;
      count++;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["resetErrorMessage"])(fetchSectionsMessage));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setStudentSections"])(testSections));
  } catch (err) {
    Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(fetchSectionsMessage, `Something went wrong retrieving sections for this test.`);
    console.warn("Error occurred in the fetchStudentTestSections saga", err);
  }
}
function* watchForFetchStudentTests() {
  while (true) {
    const {
      user
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["GET_TESTS"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentTests, user);
  }
}
function* fetchStudentTests(user) {
  try {
    const {
      data: formattedStudentTests
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchTestsByStudentIdApi, user.id);

    if (!formattedStudentTests) {
      return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(fetchingStudentTestsMessage, `Something went wrong when fetching for student tests: ${formattedStudentTests.message}`));
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["resetErrorMessage"])(fetchingStudentTestsMessage));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setStudentTests"])(formattedStudentTests));
    const sortedTests = {
      overdues: [],
      assigneds: [],
      completes: []
    }; // sort test into assisend, incompletes
    //* * using for development purposes pushing :STARTED to assigneds */

    yield formattedStudentTests.forEach(test => {
      if (test.status === "ASSIGNED" || test.status === 'STARTED') {
        if (test.due_status === 'OVERDUE') {
          sortedTests.overdues.push(test);
        } else {
          sortedTests.assigneds.push(test);
        }
      } else if (test.status === 'COMPLETED') {
        sortedTests.completes.push(test);
      }
    }); // Dispatch Action

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setStudentCompletedTests"])(sortedTests.completes));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setStudentOverDueTests"])(sortedTests.overdues));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setStudentAssignedTests"])(sortedTests.assigneds));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setFetchStudentTestsStatus"])(true));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(fetchingStudentTestsMessage, `Something went wrong when fetching for student tests: ${err}`));
    console.warn("Error occurred in the fetchStudentTests saga", err);
  }
}
function* watchForSearchStudents() {
  while (true) {
    const {
      filters
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["SEARCH_STUDENTS"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(searchStudents, filters);
  }
}
function* searchStudents(filters) {
  try {
    const students = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(searchStudentsApi, filters);

    if (students instanceof Array) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["setStudents"])(students));
    }
  } catch (err) {
    console.warn("Error occurred in searchStudents saga", err);
  }
}
function* watchForDeleteStudent() {
  while (true) {
    try {
      const {
        id
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["DELETE_STUDENT"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(deleteStudentApi, id);

      if (response && response.message) {
        return console.warn("Something went wrong with deleting a student.");
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudents);
    } catch (err) {
      console.warn("Error occured in watchForDeleteStudent", err);
    }
  }
}
function* watchForUpdateStudentFirstName() {
  while (true) {
    try {
      const {
        firstName
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_FIRSTNAME"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentFirstNameApi, firstName);

      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentFirstNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentFirstName saga", err);
    }
  }
}
function* watchForUpdateStudentLastName() {
  while (true) {
    try {
      const {
        lastName
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_LASTNAME"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentLastNameApi, lastName);

      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentLastNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentLastName saga", err);
    }
  }
}
function* watchForUpdateStudentAddress() {
  while (true) {
    try {
      const {
        address
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_ADDRESS"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentAddressApi, address);

      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentAddressApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentAddress saga", err);
    }
  }
}
function* watchForUpdateStudentCity() {
  while (true) {
    try {
      const {
        city
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_CITY"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentCityApi, city);

      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentCityApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentCity saga", err);
    }
  }
}
function* watchForUpdateStudentEmail() {
  while (true) {
    try {
      const {
        email
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_EMAIL"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentEmailApi, email);

      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentEmailApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentEmail saga", err);
    }
  }
}
function* watchForUpdateStudentPhone() {
  while (true) {
    try {
      const {
        phone
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_PHONE"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentPhoneApi, phone);

      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentPhoneApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentPhone saga", err);
    }
  }
}
function* watchForUpdateStudentState() {
  while (true) {
    try {
      const {
        state
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_STATE"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentStateApi, state);

      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentStateApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentState saga", err);
    }
  }
}
function* watchForUpdateStudentZip() {
  while (true) {
    try {
      const {
        zip
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_ZIP"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentZipApi, zip);

      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentZipApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentZip saga", err);
    }
  }
}
/** ******************************************    INSTRUCTORS    ******************************************* */

function* watchForUpdateInstructorFirstName() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["UPDATE_INSTRUCTOR_FIRSTNAME"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateInstructorFirstNameApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorFirstNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorFirstName saga", err);
    }
  }
}
function* watchForUpdateInstructorLastName() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["UPDATE_INSTRUCTOR_LASTNAME"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateInstructorLastNameApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorLastNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorLastName saga", err);
    }
  }
}
function* watchForUpdateInstructorEmail() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["UPDATE_INSTRUCTOR_EMAIL"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateInstructorEmailApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorEmailApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorEmail saga", err);
    }
  }
}
function* watchForUpdateInstructorState() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["UPDATE_INSTRUCTOR_STATE"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateInstructorStateApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorStateApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorState saga", err);
    }
  }
}
function* watchForUpdateInstructorCity() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["UPDATE_INSTRUCTOR_CITY"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateInstructorCityApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorCityApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorCity saga", err);
    }
  }
}
function* watchForUpdateInstructorZip() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["UPDATE_INSTRUCTOR_ZIP"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateInstructorZipApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorZipApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorZip saga", err);
    }
  }
}
function* watchForUpdateInstructorAddress() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["UPDATE_INSTRUCTOR_ADDRESS"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateInstructorAddressApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorAddressApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorAddress saga", err);
    }
  }
}
function* watchForUpdateInstructorPhone() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["UPDATE_INSTRUCTOR_PHONE"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateInstructorPhoneApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorPhoneApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorPhone saga", err);
    }
  }
}
function* watchForCreateInstructor() {
  while (true) {
    try {
      const {
        instructor
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["CREATE_INSTRUCTOR"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(createNewInstructorApi, instructor);

      if (response && response.message) {
        return console.warn("Something went wrong in createNewInstructorApi.");
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchInstructors);
    } catch (err) {
      console.warn("Error occured in watchForCreateInstructor saga", err);
    }
  }
}
function* watchForFetchInstructors() {
  while (true) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["FETCH_INSTRUCTORS"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchInstructors);
  }
}
function* fetchInstructors() {
  try {
    const {
      formattedInstructors
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchInstructorsApi);

    if (formattedInstructors instanceof Array) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Instructor_index_actions__WEBPACK_IMPORTED_MODULE_15__["setInstructors"])(formattedInstructors));
    }
  } catch (err) {
    console.warn("Error occurred in fetchInstructors saga", err);
  }
}
function* watchForSearchInstructors() {
  while (true) {
    const {
      filters
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Instructor_index_constants__WEBPACK_IMPORTED_MODULE_11__["SEARCH_INSTRUCTORS"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(searchInstructors, filters);
  }
}
function* searchInstructors(filters) {
  try {
    const instructors = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(searchInstructorsApi, filters);

    if (instructors instanceof Array) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Instructor_index_actions__WEBPACK_IMPORTED_MODULE_15__["setInstructors"])(instructors));
    }
  } catch (err) {
    console.warn("Error occurred in searchInstructors saga", err);
  }
}
/** ******************************************    CLASSES    ******************************************* */

function* watchForCreateClass() {
  while (true) {
    const {
      newClass
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Classes_index_constants__WEBPACK_IMPORTED_MODULE_10__["CREATE_CLASS"]);
    console.warn("saga yaaay!", newClass);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(createClass, newClass);
  }
}
function* createClass(newClass) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(createClassApi, newClass);

    if (response.exception && response.exception.length) {
      console.warn("Error occurred in createClass saga", response);
    }
  } catch (err) {
    console.warn("Error occurred in createClass saga", err);
  }
}
function* watchForFetchClasses() {
  while (true) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Classes_index_constants__WEBPACK_IMPORTED_MODULE_10__["FETCH_CLASSES"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchClasses);
  }
}
function* fetchClasses() {
  try {
    const classes = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchClassesApi);

    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default()(classes) || classes instanceof Array) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Classes_index_actions__WEBPACK_IMPORTED_MODULE_16__["setClasses"])(classes));
    }
  } catch (err) {
    console.warn("Error occurred in the fetchClasses saga", err);
  }
}
function* watchForUpdateClassName() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Classes_index_constants__WEBPACK_IMPORTED_MODULE_10__["UPDATE_CLASS_NAME"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateClassNameApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateClassNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassName saga", err);
    }
  }
}
function* watchForUpdateClassStartDate() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Classes_index_constants__WEBPACK_IMPORTED_MODULE_10__["UPDATE_CLASS_START_DATE"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateClassStartDateApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateClassStartDateApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassStartDate saga", err);
    }
  }
}
function* watchForUpdateClassEndDate() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Classes_index_constants__WEBPACK_IMPORTED_MODULE_10__["UPDATE_CLASS_END_DATE"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateClassEndDateApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateClassEndDateApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassEndDate saga", err);
    }
  }
}
function* watchForUpdateClassDuration() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Classes_index_constants__WEBPACK_IMPORTED_MODULE_10__["UPDATE_CLASS_DURATION"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateClassDurationApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateClassDurationApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassDuration saga", err);
    }
  }
}
function* watchForUpdateClassExcludeFromStatistics() {
  while (true) {
    try {
      const {
        value
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Classes_index_constants__WEBPACK_IMPORTED_MODULE_10__["UPDATE_EXCLUDE_FROM_STATISTICS"]);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateClassExcludeFromStatisticsApi, value);

      if (response && response.message) {
        return console.warn("Something went wrong in updateClassExcludeFromStatisticsApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassExcludeFromStatistics saga", err);
    }
  }
}
/** ******************************************    LESSONS    ******************************************* */

function* watchForFetchLesson() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_LESSON_LIST"], handleFetchLesson);
}

function* handleFetchLesson() {
  try {
    const lessons = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchLessonListApi);

    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default()(lessons) || lessons instanceof Array) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
        type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_LESSON_LIST_SUCCESS"],
        payload: lessons.map(lesson => _objectSpread({}, lesson, {
          selected: false,
          status: 'NOTASSIGNED'
        }))
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
        type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["MERGE_STUDENT_LESSON_LISTS"]
      });
    }
  } catch (error) {
    console.warn("Error occurred in the handleFetchLesson saga", error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_LESSON_LIST_FAIL"],
      payload: error
    });
  }
}

function* watchForFetchStudentLesson() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_STUDENT_LESSON_LIST"], handleFetchStudentLessonList);
}

function* watchForFetchStudentLessonDebounce() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["debounce"])(1000, _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_STUDENT_LESSON_LIST_DEBOUNCE"], handleFetchStudentLessonList);
}

function* handleFetchStudentLessonList(action) {
  try {
    const studentLessonList = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentLessonListApi, action.postBody.id, action.postBody.studentToken);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_STUDENT_LESSSON_LIST_SUCCESS"],
      payload: studentLessonList.map(lesson => _objectSpread({}, lesson, {
        selected: false
      }))
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["MERGE_STUDENT_LESSON_LISTS"]
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchStudentLesson saga", error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_STUDENT_LESSON_LIST_FAIL"]
    });
  }
}

function* watchForAssignLesson() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["ASSIGN_STUDENT_LESSON"], handleAssignLesson);
}

function* handleAssignLesson(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(assignLessonToStudentApi, action.lesson);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_STUDENT_LESSON_LIST_DEBOUNCE"],
      postBody: {
        id: action.lesson.student_id
      }
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchLesson saga", error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["ASSIGN_STUDENT_LESSON_FAIL"],
      payload: error
    });
  }
}

function* watchForResetLesson() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["RESET_STUDENT_LESSONS"], handleResetLessons);
}

function* handleResetLessons(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(resetStudentLessonsApi, {
      student_lesson_ids: action.lessons
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["RESET_STUDENT_LESSONS_SUCCESS"],
      payload: action.lessons
    });
  } catch (error) {
    console.warn("Error occurred in the handleResetLessons saga", error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["RESET_STUDENT_LESSONS_FAIL"],
      payload: error
    });
  }
}

function* watchForUpdateStudentActivation() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_ACTIVATION"], handleUpdateStudentActivation);
}

function* handleUpdateStudentActivation(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentActivationApi, action.studentInfo);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_ACTIVATION_SUCCESS"]
    });
  } catch (error) {
    console.warn("Error occurred in the handleUpdateStudentActivation saga", error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_ACTIVATION_FAIL"],
      payload: error
    });
  }
}

function* watchForUnAssignLesson() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UNASSIGN_STUDENT_LESSON"], handleUnAssignLesson);
}

function* handleUnAssignLesson(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(unAssignLessonFromStudentApi, {
      student_lesson_ids: action.lesson
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UNASSIGN_STUDENT_LESSON_SUCCESS"],
      payload: action.lesson
    });
  } catch (error) {
    console.warn("Error occurred in the handleUnAssignLesson saga", error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UNASSIGN_STUDENT_LESSON_FAIL"],
      payload: error
    });
  }
}

function* watchForRescheduleStudentLessons() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["RESCHEDULE_STUDENT_LESSONS"], handleRescheduleStudentLessons);
}

function* handleRescheduleStudentLessons(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(rescheduleStudentLessonsApi, action.studentLessonData);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["RESCHEDULE_STUDENT_LESSONS_SUCCESS"],
      payload: action.studentLessonData
    });
  } catch (error) {
    console.warn("Error occurred in the handleRescheduleStudentLessons saga", error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["RESCHEDULE_STUDENT_LESSONS_FAIL"],
      payload: error
    });
  }
}

function* watchForFetchSubjects() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_SUBJECTS"], handleFetchSubjects);
}

function* handleFetchSubjects() {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchSubjectsApi);
    const newSubjectObject = {};
    response.forEach(subject => {
      newSubjectObject[subject.id] = subject.name;
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_SUBJECTS_SUCCESS"],
      payload: newSubjectObject
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchSubjects saga", error);
  }
}

function* watchForFetchCurrentUser() {
  while (true) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_User_index_constants__WEBPACK_IMPORTED_MODULE_12__["FETCH_CURRENT_USER"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(handleFetchCurrentUser);
  }
}

function* handleFetchCurrentUser() {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchCurrentUserApi);

    if (response) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
        type: _components_User_index_constants__WEBPACK_IMPORTED_MODULE_12__["SET_CURRENT_USER"],
        value: response
      });
    }
  } catch (error) {
    console.warn("Error occurred in the handleFetchCurrentUser saga", error);
  }
}

function* watchForExcuseStudentLateness() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["EXCUSE_STUDENT_LATENESS"], handleExcuseStudentLateness);
}

function* handleExcuseStudentLateness(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(excuseStudentLessonLatenessApi, action.lessons);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["SET_EXCUSE_STUDENT_LATENESS"],
      payload: action.lessons
    });
  } catch (error) {
    console.warn("Error occurred in the handleExcuseStudentLateness saga", error);
  }
}

function* watchForFilterLessons() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["debounce"])(200, _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FILTER_LESSONS"], handleFilterLessons);
}

function* handleFilterLessons(action) {
  try {
    const lessons = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(filterLessonListApi, action.filters);

    if (lessons && lessons instanceof Array) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
        type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FETCH_LESSON_LIST_SUCCESS"],
        payload: lessons.map(lesson => _objectSpread({}, lesson, {
          selected: false,
          status: 'NOTASSIGNED'
        }))
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
        type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["MERGE_STUDENT_LESSON_LISTS"]
      });
    }
  } catch (error) {
    console.warn("Error occurred in the handleFilterLessons saga", error);
  }
}

function* watchForFlagStudentLessonProblem() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["FLAG_STUDENT_LESSON_PROBLEM"], handleFlagStudentLessonProblem);
}

function* handleFlagStudentLessonProblem(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(addStudentLessonProblemFlagApi, action.lesson);
  } catch (error) {
    console.warn("Error occurred in the handleFlagStudentLessonProblem saga", error);
  }
}

function* watchForFetchAllLocations() {
  const value = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["take"])(_components_Location_index_constants__WEBPACK_IMPORTED_MODULE_13__["FETCH_ALL_LOCATIONS"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(handleFetchAllLocations, value.user_id);
}

function* handleFetchAllLocations(id) {
  try {
    const locations = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchAllLocationsApi, id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Location_index_constants__WEBPACK_IMPORTED_MODULE_13__["SET_ALL_LOCATIONS"],
      payload: locations
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchAllLocations saga", error);
  }
}

function* watchForAnswerStudentLessonProblem() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["ADD_LESSON_ANSWER"], handleAnswerStudentLessonProblem);
}

function* handleAnswerStudentLessonProblem(action) {
  try {// @TODO will come back to this after fix/edit-answer-bubbles-rescoring gets merged
    // const addAnswerResponse = yield call(addStudentLessonProblemAnswerApi);
    // const rescoreLessonResponse = yield call(rescoreStudentLessonApi)
    // yield put({
    //   type: ADD_LESSON_ANSWER,
    //   payload: locations,
    // });
  } catch (error) {
    console.warn("Error occurred in the handleAnswerStudentLessonProblem saga", error);
  }
}

function* watchForDeleteStudentTest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["DELETE_STUDENT_TEST"], handleDeleteStudentTest);
}

function* handleDeleteStudentTest(action) {
  try {
    const payload = {
      student_test_id: action.studentTestId
    };
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(deleteStudentTestApi, payload);

    if (response && response.message) {
      return console.warn("Error occurred in the handleDeleteStudentTest saga", error);
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["REMOVE_TEST"],
      testType: action.testType,
      studentTestId: action.studentTestId
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["REMOVE_TEST_FROM_LIST"],
      studentTestId: action.studentTestId
    });
  } catch (error) {
    console.warn("Error occurred in the handleDeleteStudentTest saga", error);
  }
}

function* watchForMarkAllTestFlagsReviewed() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_TEST_FLAG"], handleMarkAllFlagsReviewed);
}

function* handleMarkAllFlagsReviewed(action) {
  try {
    const sections = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentTestSectionsApi, action.studentId, action.studentTestId);
    const reviewedTestIds = [];
    let count = 0;

    while (count < sections.length) {
      const {
        data: problems
      } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentTestSectionProblemsApi, action.studentId, action.studentTestId, sections[count].id);
      const problemAmount = problems.problems.length;
      let problemCount = 0;

      while (problemCount < problemAmount) {
        const flagData = problems.problems[problemCount].flag;

        if (flagData.id && flagData.status === 'FLAGGED') {
          const payload = {
            status: 'REVIEWED',
            flag_id: flagData.id,
            student_test_id: action.studentTestId
          };
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentTestQuestionFlagStatusApi, payload);
          reviewedTestIds.push(action.studentTestId);
        }

        problemCount++;
      }

      count++;
    } // Dispatch to update redux store

  } catch (error) {
    console.warn("Error occurred in the handleUpdateFlagStatus saga", error);
  }
}

function* watchForAddStudentAnswerToTest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["ADD_STUDENT_ANSWER_TO_TEST"], handleAddStudentAnswerToTest);
}

function* watchForAddStudentAnswerToTestDebounce() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["debounce"])(500, _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["ADD_FREE_RESPONSE_ANSWER_TO_TEST"], handleAddStudentAnswerToTest);
}

function* handleAddStudentAnswerToTest(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(addStudentAnswerToTestApi, action.payload);

    if (response && response.message) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(answerTestProblemMessage, `Something went wrong adding an answer to this problem. Your answer will not be recorded. Please try again later.`));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["resetErrorMessage"])(answerTestProblemMessage));
      return console.warn("Error occurred in the handleAddStudentAnswerToTest saga", response.message);
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_STUDENT_TEST_ANSWER"],
      sectionId: action.sectionId,
      payload: action.payload
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["resetErrorMessage"])(answerTestProblemMessage));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(answerTestProblemMessage, `Something went wrong adding an answer to this problem. Please try again.`));
    console.warn("Error occurred in the handleAddStudentAnswerToTest saga", error);
  }
}

function* watchForUpdateTestStatus() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_TEST_STATUS"], handleUpdateTestStatus);
}

function* handleUpdateTestStatus(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentTestStatusApi, action.payload);

    if (response && response.message && action.payload.status === "COMPLETED") {
      console.warn("Error occurred in the handleUpdateTestStatus saga", response.message);
      return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])("updateTestStatusMsg", `Something went wrong updating this test to ${action.payload.status}. Please try opening and resubmitting this test later.`));
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_TEST_STATUS_SUCCESS"],
      payload: action.payload
    });

    if (action.payload.status === "COMPLETED") {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
        type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["ADD_TEST_TO_COMPLETED"],
        payload: action.payload,
        testList: action.currentStatus
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
        type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["REMOVE_TEST_FROM_PREV_LIST"],
        payload: action.payload,
        testList: action.currentStatus
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["delay"])(1500);
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentTestScoreApi, action.studentId, action.payload.student_test_id);

      if (response && response.message) {
        console.warn(`Error occurred in the handleFetchActiveTestScores saga: ${response.message}`);
        return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])("fetchScoresMsg", "Something went wrong fetching scores for this test. Please try opening this test from the completed test section to view scores."));
      }

      if (!response.data.essay) {
        response.data.essay = {
          analysis: "",
          reading: "",
          writing: ""
        };
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
        type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["SET_ACTIVE_TEST_SCORES"],
        scores: _objectSpread({}, response.data, {
          student_test_id: action.payload.student_test_id
        })
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["resetErrorMessage"])("fetchScoresMsg"));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["resetErrorMessage"])("updateTestStatusMsg"));
    }
  } catch (error) {
    console.warn("Error occurred in the handleUpdateTestStatus saga", error);
  }
}

function* watchForUpdateTestFlagStatus() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_FLAG_STATUS"], handleUpdateTestFlagStatus);
}

function* handleUpdateTestFlagStatus(action) {
  try {
    if (action.status === "FLAGGED" && !action.payload.flag_id) {
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(addStudentTestQuestionFlagApi, action.payload);

      if (response && response.message) {
        return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(testFlagMessage, `Something went wrong adding a flag to this problem: ${response.message}`));
      }

      action.question.flag.id = response.data.id;
    } else {
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(updateStudentTestQuestionFlagStatusApi, action.payload);

      if (response && response.message) {
        return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(testFlagMessage, `Something went wrong updating the flag status of this problem: ${response.message}`));
      }
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["resetErrorMessage"])(testFlagMessage));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["UPDATE_FLAG_STATUS_SUCCESS"],
      sectionId: action.question.test_section_id,
      question: action.question,
      status: action.status
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])(testFlagMessage, `Something went wrong updating the flag status of this problem: ${error}`));
    console.warn("Error occurred in the handleUpdateTestFlagStatus saga", error);
  }
}

function* watchForFetchActiveTestScores() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeEvery"])(_components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["GET_TEST_SCORES"], handleFetchActiveTestScores);
}

function* handleFetchActiveTestScores(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(fetchStudentTestScoreApi, action.payload.studentId, action.payload.student_test_id);

    if (response && response.message) {
      console.warn(`Error occurred in the handleFetchActiveTestScores saga: ${response.message}`);
      return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])("fetchScoresMsg", "Something went wrong fetching scores."));
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["resetErrorMessage"])("fetchScoresMsg"));

    if (!response.data.essay) {
      response.data.essay = {
        analysis: "",
        reading: "",
        writing: ""
      };
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
      type: _components_Student_index_constants__WEBPACK_IMPORTED_MODULE_9__["SET_ACTIVE_TEST_SCORES"],
      scores: _objectSpread({}, response.data, {
        student_test_id: action.payload.student_test_id
      })
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchActiveTestScores saga", error);
    return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])(Object(_components_Student_index_actions__WEBPACK_IMPORTED_MODULE_14__["sendErrorMessage"])("fetchScoresMsg", "Something went wrong fetching scores."));
  }
}

function* defaultSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["all"])([watchForFetchStudents(), watchForFetchStudentTests(), watchForFetchStudentTestSections(), watchForSearchStudents(), watchForDeleteStudent(), watchForUpdateStudentFirstName(), watchForUpdateStudentLastName(), watchForUpdateStudentAddress(), watchForUpdateStudentCity(), watchForUpdateStudentEmail(), watchForUpdateStudentPhone(), watchForUpdateStudentState(), watchForUpdateStudentZip(), watchForCreateClass(), watchForFetchInstructors(), watchForSearchInstructors(), watchForUpdateInstructorFirstName(), watchForUpdateInstructorLastName(), watchForUpdateInstructorEmail(), watchForUpdateInstructorState(), watchForUpdateInstructorCity(), watchForUpdateInstructorZip(), watchForUpdateInstructorAddress(), watchForUpdateInstructorPhone(), watchForCreateInstructor(), watchForFetchClasses(), watchForUpdateClassStartDate(), watchForUpdateClassEndDate(), watchForUpdateClassExcludeFromStatistics(), watchForUpdateClassName(), watchForUpdateClassDuration(), watchForFetchLesson(), watchForFetchUnitFilterOptions(), watchForFetchStudentLesson(), watchForAssignLesson(), watchForResetLesson(), watchForUpdateStudentActivation(), watchForUnAssignLesson(), watchForRescheduleStudentLessons(), watchForFetchSubjects(), watchForFetchCurrentUser(), watchForFetchStudentLessonDebounce(), watchForExcuseStudentLateness(), watchForFilterLessons(), watchForFlagStudentLessonProblem(), watchForFetchAllLocations(), watchForAnswerStudentLessonProblem(), watchForDeleteStudentTest(), watchForMarkAllTestFlagsReviewed(), watchForAddStudentAnswerToTest(), watchForUpdateTestStatus(), watchForAddStudentAnswerToTestDebounce(), watchForUpdateTestFlagStatus(), watchForFetchActiveTestScores()]);
}

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./reducers.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./sagas.js");





const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
function initializeStore() {
  return store;
}

/***/ }),

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/utils/ActiveLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  let className = child.props.className || "";

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className}${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./utils/AuthService.js":
/*!******************************!*\
  !*** ./utils/AuthService.js ***!
  \******************************/
/*! exports provided: logIn, loggedIn, setToken, getToken, logout, isTokenExpired, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedIn", function() { return loggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTokenExpired", function() { return isTokenExpired; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_User_index_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/User/index/api */ "./components/User/index/api.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



const logIn = async postBody => {
  const data = await Object(_components_User_index_api__WEBPACK_IMPORTED_MODULE_1__["oAuthTokenApi"])(postBody);
  return data;
};
const loggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = getToken();
  return !!token && !isTokenExpired(token); // handwaiving here
};
const setToken = (token, expires_at) => {
  // Saves user token to sessionStorage
  localStorage.setItem('token', token);
  localStorage.setItem('expires_at', expires_at);
};
const getToken = () => {
  // Retrieves the user token from sessionStorage
  if (false) {}
};
const logout = () => {
  // Clear user token from sessionStorage
  localStorage.removeItem('token');
  localStorage.removeItem('expires_at');
};
const isTokenExpired = token => {
  try {
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);

    if (decoded.exp < _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() / 1000) {
      // Checking if token is expired.
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([loggedIn, setToken, getToken, logout]);

/***/ }),

/***/ "./utils/with-redux-store.js":
/*!***********************************!*\
  !*** ./utils/with-redux-store.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./store.js");








var _jsxFileName = "/Users/wolf/Documents/clearchoice/admin/feature-view-updated-course/clear-choice-admin/utils/with-redux-store.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/* eslint-disable */


const isServer = true;
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_9__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_9__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (App => class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_8___default.a.Component {
  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

    appContext.ctx.reduxStore = reduxStore;
    let appProps = {};

    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps(appContext);
    }

    return _objectSpread({}, appProps, {
      initialReduxState: reduxStore.getState()
    });
  }

  constructor(props) {
    super(props);
    this.reduxStore = getOrCreateStore(props.initialReduxState);
  }

  render() {
    return __jsx(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
      reduxStore: this.reduxStore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }));
  }

});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map