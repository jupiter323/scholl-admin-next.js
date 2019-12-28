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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Classes/Calendar/index.js":
/*!**********************************************!*\
  !*** ./components/Classes/Calendar/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-sticky */ "react-sticky");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Dashboard_components_FilterSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Dashboard/components/FilterSection */ "./components/Dashboard/components/FilterSection/index.js");
/* harmony import */ var _Dashboard_components_CalendarHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Dashboard/components/CalendarHeader */ "./components/Dashboard/components/CalendarHeader/index.js");
/* harmony import */ var _Dashboard_components_CalendarRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Dashboard/components/CalendarRow */ "./components/Dashboard/components/CalendarRow/index.js");
/* harmony import */ var _Dashboard_components_Modals_AssignSessionModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Dashboard/components/Modals/AssignSessionModal */ "./components/Dashboard/components/Modals/AssignSessionModal/index.js");
/* harmony import */ var _Dashboard_components_Modals_AssignTestSectionModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Dashboard/components/Modals/AssignTestSectionModal */ "./components/Dashboard/components/Modals/AssignTestSectionModal/index.js");
/* harmony import */ var _Dashboard_components_Modals_AssignSimulatedSATModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Dashboard/components/Modals/AssignSimulatedSATModal */ "./components/Dashboard/components/Modals/AssignSimulatedSATModal/index.js");
/* harmony import */ var _Dashboard_components_Modals_AssignTargetTestModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Dashboard/components/Modals/AssignTargetTestModal */ "./components/Dashboard/components/Modals/AssignTargetTestModal/index.js");
/* harmony import */ var _Dashboard_components_Modals_AssignLessonModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Dashboard/components/Modals/AssignLessonModal */ "./components/Dashboard/components/Modals/AssignLessonModal/index.js");
/* harmony import */ var _Dashboard_components_Modals_AssignWorksheetModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Dashboard/components/Modals/AssignWorksheetModal */ "./components/Dashboard/components/Modals/AssignWorksheetModal/index.js");
/* harmony import */ var _Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Dashboard/utils/dateAndCalendarUtils */ "./components/Dashboard/utils/dateAndCalendarUtils.js");
/* harmony import */ var _index_selectors__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../index/selectors */ "./components/Classes/index/selectors.js");
/* harmony import */ var _index_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../index/actions */ "./components/Classes/index/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





















class Calendar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetActiveMonth", activeMonthIndex => {
      // daysInPreviousMonth is used to handle cases where the calendar for the month starts with dates from the preceding month
      // firstDay indicates the day the first day of the month falls on in a zero-based index manner, meaning Sunday is 0, Monday is 1, etc
      const daysInPreviousMonth = Object(_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_18__["getDaysInPreviousMonth"])(activeMonthIndex);
      const daysInActiveMonth = Object(_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_18__["getDaysInActiveMonth"])(activeMonthIndex);
      const firstDay = Object(_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_18__["getFirstDay"])(activeMonthIndex);
      const rows = []; // We increment calDate and change inMonth in the case where dates from the next month appear in row 1 or row 6
      // Since activeMonthIndex is zero-based, currentMonth adds 1 so the cells are accurate as actual calendar dates
      // getNextMonthAsCurrentMonth is used to derive the current month to ensure it matches the format of incoming dates - 01/15/19 vs 1/15/19, otherwise new events wouldn't find the date to be assigned to

      let inMonth = true;
      let calDate = 1;
      let currentMonth = Object(_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_18__["getNextMonthAsCurrentMonth"])(activeMonthIndex);

      if (firstDay !== 0) {
        currentMonth = currentMonth > 9 ? currentMonth -= 1 : `0${currentMonth - 1}`;
        calDate = daysInPreviousMonth - firstDay + 1;
        inMonth = false;
      } // First for loop handles the 6 calendar rows, second for loop handles the 7 days of the week


      for (let i = 0; i < 6; i++) {
        const rowArr = [];

        for (let j = 0; j < 7; j++) {
          const date = `${currentMonth}/${calDate > 9 ? calDate : `0${calDate}`}/${_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_18__["currentYear"]}`;
          const dayDate = Object(_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_18__["getDayDate"])(date);
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
                currentMonth = Object(_Dashboard_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_18__["getNextMonthAsCurrentMonth"])(activeMonthIndex);
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetActiveDate", incomingDate => {
      this.setState({
        activeDate: incomingDate,
        activeColumn: incomingDate[13]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAssignSession", session => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === session.date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.sessions.push(session);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_6___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignSessionModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAssignLessons", (lessons, date) => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.lessons.push(...lessons);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_6___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignLessonsModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignLessonsModal", (event = null, modalDate = null) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAssignTestSection", testSection => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === testSection.assignDate)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.testSections.push(testSection);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_6___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignTestSectionModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAssignSimulatedSat", simulatedSat => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === simulatedSat.assignDate)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.simulatedSat.push(simulatedSat);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_6___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignSimulatedSatModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAssignTargetTest", targetTestDate => {
      throw `pending decision of what test date assign ui looks like${targetTestDate.toString()}`; // console.warn(, targetTestDate);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignSessionModal", (event = null, modalDate = null) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignTestSectionModal", (event = null, modalDate = null) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignSimulatedSatModal", (event = null, modalDate = null) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignTargetTestModal", (event = null) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAddDropdown", () => this.setState(({
      addDropdownOpen
    }) => ({
      addDropdownOpen: !addDropdownOpen,
      deleteDropdownOpen: false
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleDeleteDropdown", () => this.setState(({
      deleteDropdownOpen
    }) => ({
      deleteDropdownOpen: !deleteDropdownOpen,
      addDropdownOpen: false
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignDropdown", () => this.setState(({
      assignDropdownIsOpen
    }) => ({
      assignDropdownIsOpen: !assignDropdownIsOpen
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleHandleFilteredItemsDropdown", () => this.setState(({
      onToggleHandleFilteredItemsDropdown
    }) => ({
      onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClearFilters", () => this.setState({
      filters: [],
      eventFilters: []
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHandleDetailsChange", (name, event) => this.setState({
      [name]: event.target.value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDragEnd", result => {
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
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_6___default()(rows, {
        $splice: [+[sourceDateIndex, 1, sourceDate], [destinationDateIndex, 1, destinationDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterClick", (filter, eventFilter = false) => {
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
        updatedFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_6___default()(filters, {
          $push: [filter]
        });
      } else {
        const filterIndex = filters.indexOf(filter);
        updatedFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_6___default()(filters, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [filterName]: updatedFilters
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignWorksheetsModal", (event = null, modalDate = null) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAssignWorksheets", (worksheets, date) => {
      const {
        rows
      } = this.props;
      const updatedDate = rows.filter(row => row.date === date)[0];
      const updatedDateIndex = rows.indexOf(updatedDate);
      updatedDate.worksheets.push(...worksheets);
      const updatedRows = immutability_helper__WEBPACK_IMPORTED_MODULE_6___default()(rows, {
        $splice: [[updatedDateIndex, 1, updatedDate]]
      });
      const {
        onSetCalendarRows
      } = this.props;
      onSetCalendarRows(updatedRows);
      this.onToggleAssignWorksheetsModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapRows", () => {
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
        rowArray.push(__jsx(_Dashboard_components_CalendarRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, assignLessonsModalOpen ? __jsx(_Dashboard_components_Modals_AssignLessonModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
      modalDate: modalDate,
      open: assignLessonsModalOpen,
      onClose: this.onToggleAssignLessonsModal,
      onAssignLessons: this.onAssignLessons
    }) : assignWorkSheetsModalOpen ? __jsx(_Dashboard_components_Modals_AssignWorksheetModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
      modalDate: modalDate,
      open: assignWorkSheetsModalOpen,
      onClose: this.onToggleAssignWorksheetsModal,
      onAssignWorksheets: this.onAssignWorksheets
    }) : [__jsx(_Dashboard_components_Modals_AssignSessionModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      modalDate: modalDate,
      open: assignSessionModalOpen,
      onClose: this.onToggleAssignSessionModal,
      onAssignSession: this.onAssignSession,
      key: "0"
    }), __jsx(_Dashboard_components_Modals_AssignTestSectionModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
      modalDate: modalDate,
      open: assignTestSectionModalOpen,
      onClose: this.onToggleAssignTestSectionModal,
      onAssignTestSection: this.onAssignTestSection,
      key: "1"
    }), __jsx(_Dashboard_components_Modals_AssignSimulatedSATModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
      modalDate: modalDate,
      open: assignSimulatedSatModalOpen,
      onClose: this.onToggleAssignSimulatedSatModal,
      onAssignSimulatedSat: this.onAssignSimulatedSat,
      key: "2"
    }), __jsx(_Dashboard_components_Modals_AssignTargetTestModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      open: assignTargetTestDateModalOpen,
      onClose: this.onToggleAssignTargetTestModal,
      onAssignTargetTest: this.onAssignTargetTest,
      key: "3"
    }), __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_8__["StickyContainer"], {
      key: "4"
    }, __jsx(_Dashboard_components_FilterSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
      filters: filters,
      eventFilters: eventFilters,
      onClearFilters: this.onClearFilters,
      handleFilterClick: this.handleFilterClick
    }), __jsx("div", {
      className: "calendar-section view-month"
    }, __jsx("div", {
      className: "calendar-slider"
    }, __jsx(_Dashboard_components_CalendarHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      activeMonth: Number(activeMonth),
      onSetActiveMonth: this.onSetActiveMonth
    }), __jsx("div", {
      id: "calendar",
      className: "main-slick-calendar cal-context",
      style: {
        width: "100%"
      }
    }, __jsx("div", {
      className: "slide"
    }, __jsx("table", {
      className: "calendar-table cal-month-box"
    }, __jsx("thead", null, __jsx("tr", {
      className: "calendar-head-row"
    }, __jsx("th", null, "Su"), __jsx("th", null, "M"), __jsx("th", null, "Tu"), __jsx("th", null, "W"), __jsx("th", null, "Th"), __jsx("th", null, "F"), __jsx("th", null, "Sa"))), __jsx("tbody", null, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__["DragDropContext"], {
      onDragEnd: this.onDragEnd
    }, this.mapRows()))))), __jsx("div", {
      className: "add-btn-block"
    }, __jsx("a", {
      href: "#",
      "data-target": "dropdown_assign",
      onClick: this.onToggleAssignDropdown,
      className: "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, "Assign..."), __jsx("ul", {
      id: "dropdown_assign",
      className: "dropdown-content",
      style: {
        display: assignDropdownIsOpen ? "block" : "none",
        opacity: assignDropdownIsOpen ? "100" : "0"
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSessionModal,
      className: "modal-trigger"
    }, "Session")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignLessonsModal,
      className: "modal-trigger"
    }, "Lesson")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignWorksheetsModal,
      className: "modal-trigger"
    }, "Worksheet")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignTestSectionModal,
      className: "modal-trigger"
    }, "Test Section")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSimulatedSatModal,
      className: "modal-trigger"
    }, "Simulated SAT")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignTargetTestModal,
      className: "modal-trigger"
    }, "Target Test")), __jsx("li", {
      className: "divider",
      tabIndex: "-1"
    }), __jsx("li", {
      className: "dropdown-footer"
    }, __jsx("a", {
      href: "#",
      className: "modal-trigger"
    }, "Apply Course Template")))), __jsx("div", {
      className: "add-btn-block btn-block-right"
    }, __jsx("a", {
      href: "#",
      "data-target": "dropdown_other",
      onClick: this.onToggleHandleFilteredItemsDropdown,
      className: "dropdown-trigger waves-effect waves-teal btn add-btn-circle"
    }, __jsx("i", {
      className: "icon-dots"
    })), __jsx("ul", {
      id: "dropdown_other",
      className: "dropdown-content",
      style: {
        display: onToggleHandleFilteredItemsDropdown ? "block" : "none",
        opacity: onToggleHandleFilteredItemsDropdown ? "100" : "0"
      }
    }, __jsx("li", {
      className: "dropdown-header"
    }, __jsx("b", null, "With Filtered Items... "), __jsx("b", {
      className: "small"
    }, "(items currently visible on calendar)")), __jsx("li", {
      className: "divider"
    }), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "modal-trigger"
    }, "Save Course as Template")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Reset All")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Delete All")))))))]);
  }

}

Calendar.propTypes = {
  assignLessonsModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  assignWorkSheetsModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onSetAssignLessonsModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetAssignWorksheetModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetCalendarRows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  rows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createStructuredSelector"])({
  assignLessonsModalOpen: Object(_index_selectors__WEBPACK_IMPORTED_MODULE_19__["makeSelectAssignLessonsModalOpen"])(),
  assignWorkSheetsModalOpen: Object(_index_selectors__WEBPACK_IMPORTED_MODULE_19__["makeSelectAssignWorkSheetsModalOpen"])(),
  rows: Object(_index_selectors__WEBPACK_IMPORTED_MODULE_19__["makeSelectCalendarRows"])()
});

function mapDispatchToProps(dispatch) {
  return {
    onSetAssignLessonsModalOpen: value => dispatch(Object(_index_actions__WEBPACK_IMPORTED_MODULE_20__["setAssignLessonsModalOpen"])(value)),
    onSetAssignWorksheetModalOpen: value => dispatch(Object(_index_actions__WEBPACK_IMPORTED_MODULE_20__["setAssignWorksheetModalOpen"])(value)),
    onSetCalendarRows: rows => dispatch(Object(_index_actions__WEBPACK_IMPORTED_MODULE_20__["setCalendarRows"])(rows))
  };
}

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(withConnect)(Calendar));

/***/ }),

/***/ "./components/Classes/ClassModal/index.js":
/*!************************************************!*\
  !*** ./components/Classes/ClassModal/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _SharedModalComponents_ClassInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SharedModalComponents/ClassInformation */ "./components/Classes/SharedModalComponents/ClassInformation/index.js");
/* harmony import */ var _SharedModalComponents_AccountSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SharedModalComponents/AccountSettings */ "./components/Classes/SharedModalComponents/AccountSettings/index.js");
/* harmony import */ var _SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SharedModalComponents/Locations */ "./components/Classes/SharedModalComponents/Locations/index.js");
/* harmony import */ var _SharedModalComponents_Instructors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SharedModalComponents/Instructors */ "./components/Classes/SharedModalComponents/Instructors/index.js");
/* harmony import */ var _Location_components_LocationModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Location/components/LocationModal */ "./components/Location/components/LocationModal/index.js");
/* harmony import */ var _InstructorModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../InstructorModal */ "./components/Classes/InstructorModal/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











class ClassModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenLocationModal", event => {
      event.preventDefault();
      this.setState({
        locationModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenInstructorModal", event => {
      event.preventDefault();
      this.setState({
        instructorModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseLocationModal", () => this.setState({
      locationModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseInstructorModal", () => this.setState({
      instructorModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "arrayItemRemover", (array, value) => array.filter(item => item !== value));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onRemoveLocation", index => {
      const {
        location: {
          locations
        }
      } = this.state.classroom;
      const newLocationsArray = this.arrayItemRemover(locations, locations[index]);
      const updatedClassRoom = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(this.state.classroom, {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onRemoveInstructor", index => {
      const {
        instructor: {
          instructors
        }
      } = this.state.classroom;
      const newInstructorsArray = this.arrayItemRemover(instructors, instructors[index]);
      const updatedClassRoom = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(this.state.classroom, {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSave", () => {
      const {
        onClose,
        onSave
      } = this.props;
      onClose();
      const classroom = this.state.classroom;
      onSave(classroom);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name, section, checkBox = false) => {
      if (checkBox) {
        const updatedClassRoom = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(this.state.classroom, {
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
        const updatedClassRoom = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(this.state.classroom, {
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "jsx-1541319608" + " " + "overlay"
    }, __jsx("div", {
      id: "modal_add_new_class",
      className: "jsx-1541319608" + " " + "modal modal-custom modal-460"
    }, __jsx("form", {
      action: "#",
      className: "jsx-1541319608" + " " + "custom-form"
    }, __jsx("fieldset", {
      className: "jsx-1541319608"
    }, __jsx("div", {
      className: "jsx-1541319608" + " " + "card-modal card-main card"
    }, __jsx("div", {
      style: {
        backgroundColor: "#408e49",
        color: "#fff"
      },
      className: "jsx-1541319608" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-1541319608" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-1541319608" + " " + "col"
    }, __jsx("h2", {
      className: "jsx-1541319608"
    }, __jsx("span", {
      className: "jsx-1541319608" + " " + "heading-holder"
    }, __jsx("i", {
      className: "jsx-1541319608" + " " + "icon-members"
    }), __jsx("span", {
      className: "jsx-1541319608" + " " + "heading-block"
    }, " New Class ")))), __jsx("div", {
      className: "jsx-1541319608" + " " + "col right-align"
    }, __jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-1541319608" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-1541319608" + " " + "icon-close-thin"
    }))))), __jsx("div", {
      className: "jsx-1541319608" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-1541319608" + " " + "card-body"
    }, __jsx(_SharedModalComponents_ClassInformation__WEBPACK_IMPORTED_MODULE_6__["default"], {
      state: classInfo,
      handleDetailsChange: this.handleDetailsChange
    }), __jsx(_SharedModalComponents_AccountSettings__WEBPACK_IMPORTED_MODULE_7__["default"], {
      state: accountInfo,
      handleDetailsChange: this.handleDetailsChange
    }), __jsx(_SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_8__["default"], {
      locations: location.locations,
      onOpenLocationModal: this.onOpenLocationModal,
      onRemoveLocation: this.onRemoveLocation,
      handleDetailsChange: this.handleDetailsChange
    }), __jsx(_SharedModalComponents_Instructors__WEBPACK_IMPORTED_MODULE_9__["default"], {
      instructors: instructor.instructors,
      onOpenInstructorModal: this.onOpenInstructorModal,
      onRemoveInstructor: this.onRemoveInstructor
    })), __jsx("div", {
      className: "jsx-1541319608" + " " + "modal-footer"
    }, __jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-1541319608" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.onSave,
      className: "jsx-1541319608" + " " + "btn"
    }, "Create Class")))))))), __jsx(_Location_components_LocationModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: locationModalOpen,
      onClose: this.onCloseLocationModal,
      handleLocationsChange: selectedLocations => this.handleDetailsChange(selectedLocations, 'locations', 'location')
    }), __jsx(_InstructorModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      open: instructorModalOpen,
      onClose: this.onCloseInstructorModal,
      handleInstructorsChange: selectedInstructors => this.handleDetailsChange(selectedInstructors, 'instructors', 'instructor')
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1541319608"
    }, ".overlay.jsx-1541319608{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-1541319608{margin:0;border-radius:6px;}#modal_Location1.jsx-1541319608{border-radius:6px;}.modal.jsx-1541319608{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-1541319608{opacity:1;visibility:visible;}.modal-footer.jsx-1541319608{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0NsYXNzZXMvQ2xhc3NNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtTVcsQUFHOEIsQUFTTixBQUlTLEFBR0osQUFXSixBQUlhLFNBckJMLENBa0JDLElBWEksQ0FoQmEsR0FhdEMsS0FrQkEsSUFyQkEsRUFrQkEsUUFYb0IsV0FoQlosTUFDRSxDQWdCQSxPQWZDLENBZ0JDLFFBZkgsRUFnQkUsS0FmSSxJQWtCd0IsU0FqQnZDLHNHQWtCQSIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9DbGFzc2VzL0NsYXNzTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ2ltbXV0YWJpbGl0eS1oZWxwZXInO1xuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vLi4vUG9ydGFsXCI7XG5cbmltcG9ydCBDbGFzc0luZm8gZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0NsYXNzSW5mb3JtYXRpb24nO1xuaW1wb3J0IEFjY291bnRTZXR0aW5nIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9BY2NvdW50U2V0dGluZ3MnO1xuaW1wb3J0IExvY2F0aW9ucyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvTG9jYXRpb25zJztcbmltcG9ydCBJbnN0cnVjdG9ycyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvSW5zdHJ1Y3RvcnMnO1xuXG5cbmltcG9ydCBMb2NhdGlvbk1vZGFsIGZyb20gJy4uLy4uL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25Nb2RhbCc7XG5pbXBvcnQgSW5zdHJ1Y3Rvck1vZGFsIGZyb20gJy4uL0luc3RydWN0b3JNb2RhbCc7XG5cbmNsYXNzIENsYXNzTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xhc3Nyb29tOntcbiAgICAgICAgICBjbGFzc0luZm86e1xuICAgICAgICAgICAgY2xhc3NOYW1lOlwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY2NvdW50SW5mbzp7XG4gICAgICAgICAgICBzdGFydF9kYXRlOlwiXCIsXG4gICAgICAgICAgICBlbmRfZGF0ZTpcIlwiLFxuICAgICAgICAgICAgYWN0aXZlOmZhbHNlLFxuICAgICAgICAgICAgaXNFeGNsdWRlOmZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9jYXRpb246e1xuICAgICAgICAgICAgbG9jYXRpb25zOltdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5zdHJ1Y3Rvcjp7XG4gICAgICAgICAgICBpbnN0cnVjdG9yczpbXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbk1vZGFsT3BlbjpmYWxzZSxcbiAgICAgICAgaW5zdHJ1Y3Rvck1vZGFsT3BlbjpmYWxzZSxcbiAgICAgICAgcGVuZGluZ0xvY2F0aW9uRGVsZXRlOiB7fSxcbiAgICB9XG4gIH1cblxuICBvbk9wZW5Mb2NhdGlvbk1vZGFsID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2NhdGlvbk1vZGFsT3Blbjp0cnVlfSk7XG4gIH1cblxuICBvbk9wZW5JbnN0cnVjdG9yTW9kYWwgPSAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5zdHJ1Y3Rvck1vZGFsT3Blbjp0cnVlfSk7XG4gIH1cblxuICBvbkNsb3NlTG9jYXRpb25Nb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe2xvY2F0aW9uTW9kYWxPcGVuOmZhbHNlfSk7XG5cbiAgb25DbG9zZUluc3RydWN0b3JNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe2luc3RydWN0b3JNb2RhbE9wZW46ZmFsc2V9KTtcblxuICBhcnJheUl0ZW1SZW1vdmVyID0gKGFycmF5LCB2YWx1ZSkgPT4gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB2YWx1ZSlcblxuICBvblJlbW92ZUxvY2F0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3Qge2xvY2F0aW9uOiB7IGxvY2F0aW9ucyB9IH0gPSB0aGlzLnN0YXRlLmNsYXNzcm9vbTtcbiAgICBjb25zdCBuZXdMb2NhdGlvbnNBcnJheSA9IHRoaXMuYXJyYXlJdGVtUmVtb3Zlcihsb2NhdGlvbnMsIGxvY2F0aW9uc1tpbmRleF0pO1xuICAgIGNvbnN0IHVwZGF0ZWRDbGFzc1Jvb20gPSB1cGRhdGUodGhpcy5zdGF0ZS5jbGFzc3Jvb20sIHtcbiAgICAgIGxvY2F0aW9uOiB7ICRzZXQ6IHtsb2NhdGlvbnM6IG5ld0xvY2F0aW9uc0FycmF5fX0sXG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHtjbGFzc3Jvb206dXBkYXRlZENsYXNzUm9vbX0pO1xuICB9XG5cbiAgb25SZW1vdmVJbnN0cnVjdG9yID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgIHsgaW5zdHJ1Y3Rvcjp7aW5zdHJ1Y3RvcnN9fSA9IHRoaXMuc3RhdGUuY2xhc3Nyb29tO1xuICAgIGNvbnN0IG5ld0luc3RydWN0b3JzQXJyYXkgPSB0aGlzLmFycmF5SXRlbVJlbW92ZXIoaW5zdHJ1Y3RvcnMsaW5zdHJ1Y3RvcnNbaW5kZXhdKTtcbiAgICBjb25zdCB1cGRhdGVkQ2xhc3NSb29tID0gdXBkYXRlKHRoaXMuc3RhdGUuY2xhc3Nyb29tLHtcbiAgICAgIGluc3RydWN0b3I6eyRzZXQ6e2luc3RydWN0b3JzOm5ld0luc3RydWN0b3JzQXJyYXl9fSxcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtjbGFzc3Jvb206dXBkYXRlZENsYXNzUm9vbX0pO1xuICAgfVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICB9XG5cbiAgb25TYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DbG9zZSxvblNhdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIGNvbnN0IGNsYXNzcm9vbSA9IHRoaXMuc3RhdGUuY2xhc3Nyb29tO1xuICAgIG9uU2F2ZShjbGFzc3Jvb20pO1xuICB9XG5cblxuICAvLyBXZSBwdWxsIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgZmllbGQgdHlwZSB0aGVuIG1lcmdlIHRoYXQgdXBkYXRlZCBrZXkvdmFsdWUgcGFpciB3aXRoIHRoZSBsYXN0IHZlcnNpb24gb2YgY29tcG9uZW50IHN0YXRlXG4gIGhhbmRsZURldGFpbHNDaGFuZ2UgPSAoZXZlbnQsIG5hbWUsIHNlY3Rpb24sY2hlY2tCb3ggPSBmYWxzZSkgPT4ge1xuICAgIGlmKGNoZWNrQm94KXtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDbGFzc1Jvb20gPSB1cGRhdGUodGhpcy5zdGF0ZS5jbGFzc3Jvb20sIHtcbiAgICAgICAgW3NlY3Rpb25dOiB7ICRtZXJnZTogeyBbbmFtZV06ICF0aGlzLnN0YXRlLmNsYXNzcm9vbVtzZWN0aW9uXVtuYW1lXSB9IH0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NsYXNzcm9vbTp1cGRhdGVkQ2xhc3NSb29tfSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6IGV2ZW50O1xuICAgICAgY29uc3QgdXBkYXRlZENsYXNzUm9vbSA9IHVwZGF0ZSh0aGlzLnN0YXRlLmNsYXNzcm9vbSwge1xuICAgICAgICBbc2VjdGlvbl06IHsgJG1lcmdlOiB7IFtuYW1lXTogdmFsdWUgfSB9LFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjbGFzc3Jvb206dXBkYXRlZENsYXNzUm9vbX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4sb25DbG9zZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2F0aW9uTW9kYWxPcGVuLFxuICAgICAgaW5zdHJ1Y3Rvck1vZGFsT3BlbixcbiAgICAgIGNsYXNzcm9vbTp7XG4gICAgICAgIGNsYXNzSW5mbyxcbiAgICAgICAgYWNjb3VudEluZm8sXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBpbnN0cnVjdG9yLFxuICAgICAgfSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfYWRkX25ld19jbGFzc1wiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC00NjBcIiA+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cImN1c3RvbS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbCBjYXJkLXBhbmVsLXRpdGxlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM0MDhlNDlcIiwgY29sb3I6IFwiI2ZmZlwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1tZW1iZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ibG9ja1wiPiBOZXcgQ2xhc3MgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCByaWdodC1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cInBhbmVsLWxpbmsgY2xvc2UgbW9kYWwtY2xvc2VcIiBvbkNsaWNrID0ge29uQ2xvc2V9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2xvc2UtdGhpblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGFzc0luZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge2NsYXNzSW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURldGFpbHNDaGFuZ2UgPSB7dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHthY2NvdW50SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURldGFpbHNDaGFuZ2UgPSB7dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zID0ge2xvY2F0aW9uLmxvY2F0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkxvY2F0aW9uTW9kYWwgPSB7dGhpcy5vbk9wZW5Mb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVMb2NhdGlvbiA9IHt0aGlzLm9uUmVtb3ZlTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5zdHJ1Y3RvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0b3JzID0ge2luc3RydWN0b3IuaW5zdHJ1Y3RvcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5JbnN0cnVjdG9yTW9kYWwgPSB7dGhpcy5vbk9wZW5JbnN0cnVjdG9yTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZUluc3RydWN0b3IgPSB7dGhpcy5vblJlbW92ZUluc3RydWN0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IHBpbmstdGV4dCB0ZXh0LWRhcmtlbi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2sgPSB7dGhpcy5vblNhdmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExvY2F0aW9uTW9kYWxcbiAgICAgICAgICAgIG9wZW49e2xvY2F0aW9uTW9kYWxPcGVufVxuICAgICAgICAgICAgb25DbG9zZSA9IHt0aGlzLm9uQ2xvc2VMb2NhdGlvbk1vZGFsfVxuICAgICAgICAgICAgaGFuZGxlTG9jYXRpb25zQ2hhbmdlID17KHNlbGVjdGVkTG9jYXRpb25zKSA9PiB0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2Uoc2VsZWN0ZWRMb2NhdGlvbnMsICdsb2NhdGlvbnMnLCAnbG9jYXRpb24nKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEluc3RydWN0b3JNb2RhbFxuICAgICAgICAgIG9wZW4gPSB7aW5zdHJ1Y3Rvck1vZGFsT3Blbn1cbiAgICAgICAgICBvbkNsb3NlID0ge3RoaXMub25DbG9zZUluc3RydWN0b3JNb2RhbH1cbiAgICAgICAgICBoYW5kbGVJbnN0cnVjdG9yc0NoYW5nZSA9eyhzZWxlY3RlZEluc3RydWN0b3JzKSA9PiB0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2Uoc2VsZWN0ZWRJbnN0cnVjdG9ycywgJ2luc3RydWN0b3JzJywgJ2luc3RydWN0b3InKX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtb2RhbF9Mb2NhdGlvbjEge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkNsYXNzTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uU2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzTW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Classes/ClassModal/index.js */"));
  }

}

ClassModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassModal);

/***/ }),

/***/ "./components/Classes/DetailSummaryPage/components/ClassAverages/index.js":
/*!********************************************************************************!*\
  !*** ./components/Classes/DetailSummaryPage/components/ClassAverages/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./components/Classes/DetailSummaryPage/components/ClassAverages/utils/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ClassAverages = ({
  state: {
    questionsAnswered,
    flaggedProblems,
    timeLoggedIn,
    videoWatched,
    notesTaken,
    onTimePercentage
  }
}) => __jsx("div", {
  className: "card-block"
}, __jsx("h2", null, "Class Averages"), __jsx("ul", {
  className: "alerts-list list-three-columns"
}, __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box purple darken-3"
}, __jsx("i", {
  className: "icon-pencil2"
})), __jsx("div", {
  className: "alert-text purple-text text-darken-3"
}, __jsx("p", null, __jsx("b", null, "Questions Answered")), __jsx("div", {
  className: "value"
}, __jsx("b", {
  className: "text-large"
}, questionsAnswered)))), __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box icon-box pink darken-3"
}, __jsx("i", {
  className: "icon-flag"
})), __jsx("div", {
  className: "alert-text pink-text text-darken-3"
}, __jsx("p", null, __jsx("b", null, "Flagged Problems")), __jsx("div", {
  className: "value"
}, __jsx("b", {
  className: "text-large"
}, flaggedProblems)))), __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box icon-box green darken-3"
}, __jsx("i", {
  className: "icon-clock"
})), __jsx("div", {
  className: "alert-text green-text text-darken-3"
}, __jsx("p", null, __jsx("b", null, "Time Logged In")), __jsx("div", {
  className: "value"
}, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatTimeLoggedIn"])(timeLoggedIn)))), __jsx("li", {
  className: "card card-alert alert-blue-dark"
}, __jsx("span", {
  className: "icon-box cyan darken-2"
}, __jsx("i", {
  className: "icon-videocam"
})), __jsx("div", {
  className: "alert-text cyan-text text-darken-2"
}, __jsx("p", null, __jsx("b", null, "Video Watched")), __jsx("div", {
  className: "value"
}, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatVideoWatched"])(videoWatched)))), __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box orange darken-2"
}, __jsx("i", {
  className: "icon-note"
})), __jsx("div", {
  className: "alert-text orange-text text-darken-2"
}, __jsx("p", null, __jsx("b", null, "Notes Taken")), __jsx("div", {
  className: "value"
}, __jsx("b", {
  className: "text-large"
}, notesTaken)))), __jsx("li", {
  className: "card card-alert"
}, __jsx("span", {
  className: "icon-box red"
}, __jsx("i", {
  className: "icon-bell"
})), __jsx("div", {
  className: "alert-text red-text"
}, __jsx("p", null, __jsx("b", null, "On-Time Percentage")), __jsx("div", {
  className: "value"
}, __jsx("b", {
  className: "text-large"
}, onTimePercentage, "%"))))));

ClassAverages.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassAverages);

/***/ }),

/***/ "./components/Classes/DetailSummaryPage/components/ClassAverages/utils/index.js":
/*!**************************************************************************************!*\
  !*** ./components/Classes/DetailSummaryPage/components/ClassAverages/utils/index.js ***!
  \**************************************************************************************/
/*! exports provided: formatTimeLoggedIn, formatVideoWatched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeLoggedIn", function() { return formatTimeLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatVideoWatched", function() { return formatVideoWatched; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const formatTimeLoggedIn = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hours !== 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("b", {
    className: "text-large"
  }, hours), __jsx("span", {
    className: "text-small"
  }, "hrs ")), minutes !== 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("b", {
    className: "text-large"
  }, minutes), __jsx("span", {
    className: "text-small"
  }, "min")));
};
const formatVideoWatched = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hours !== 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("b", {
    className: "text-large"
  }, hours), __jsx("span", {
    className: "text-small"
  }, "hrs ")), minutes !== 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("b", {
    className: "text-large"
  }, minutes), __jsx("span", {
    className: "text-small"
  }, "min")));
};

/***/ }),

/***/ "./components/Classes/DetailSummaryPage/components/ScoreImprovement/index.js":
/*!***********************************************************************************!*\
  !*** ./components/Classes/DetailSummaryPage/components/ScoreImprovement/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



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
}) => __jsx("div", {
  className: "card-block"
}, __jsx("h2", null, "Score Improvement"), __jsx("div", {
  className: "two-columns-sameheight row mb-0"
}, __jsx("div", {
  className: "col s12 xl6"
}, __jsx("div", {
  className: "card-main-full card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("ul", {
  className: "points-list-custom"
}, __jsx("li", {
  className: "point-custom-xlarge style-aqua"
}, __jsx("span", {
  className: "badge-circle"
}, points, " ", __jsx("span", {
  className: "badge-text"
}, "points"))), __jsx("li", null, __jsx("ul", null, __jsx("li", {
  className: "point-custom-114 style-green-light"
}, __jsx("span", {
  className: "badge-circle"
}, "+", readingAndWriting, " ", __jsx("span", {
  className: "badge-text"
}, "Reading & Writing"))), __jsx("li", {
  className: "point-custom-114 style-blue-lightdark"
}, __jsx("span", {
  className: "badge-circle"
}, math, " ", __jsx("span", {
  className: "badge-text"
}, "Math"))))))))), __jsx("div", {
  className: "col s12 xl6"
}, __jsx("div", {
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
}, "200+ ", __jsx("br", null), "points")))))))));

ScoreImprovement.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ScoreImprovement);

/***/ }),

/***/ "./components/Classes/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js":
/*!*****************************************************************************************!*\
  !*** ./components/Classes/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./components/Classes/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class StrengthsAndWeaknesses extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetOpenSection", (event, openSection) => {
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
    return __jsx("div", {
      className: "card-block"
    }, __jsx("h2", {
      className: "h1"
    }, "Strengths & Weaknesses"), __jsx("div", {
      className: "card-main-full card"
    }, __jsx("div", {
      className: "tabs-container"
    }, __jsx("div", {
      className: "card-panel light-blue accent-2 white-text"
    }, __jsx("ul", {
      className: "tabs row"
    }, __jsx("li", {
      className: "tab col s4 l4",
      style: {
        margin: '0'
      }
    }, __jsx("a", {
      href: "#",
      className: openSection === 'reading' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'reading')
    }, "Reading")), __jsx("li", {
      className: "tab col s4 l4",
      style: {
        margin: '0'
      }
    }, __jsx("a", {
      href: "#",
      className: openSection === 'writing' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'writing')
    }, "Writing")), __jsx("li", {
      className: "tab col s4 l4",
      style: {
        margin: '0'
      }
    }, __jsx("a", {
      href: "#",
      className: openSection === 'math' ? 'active' : '',
      onClick: event => this.onSetOpenSection(event, 'math')
    }, "Math")), __jsx("li", {
      className: "indicator",
      style: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getIndicatorStatus"])(openSection)
    }))), __jsx("div", {
      className: "card-content tabs-content"
    }, __jsx("div", {
      id: "tabs_tab01",
      className: openSection === 'reading' ? '' : 'tab-content'
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 l5 xl4 chart-column"
    }, __jsx("div", {
      className: "chart-block chart-block-large"
    }, __jsx("div", {
      className: "js-donut-chart js-donut-large",
      strokeWidth: "32",
      "data-source": "./inc/score-data-reading.json"
    }), __jsx("div", {
      className: "chart-text"
    }, __jsx("span", {
      className: "title"
    }, "Reading"), __jsx("span", {
      className: "value"
    }, reading.correctAnswers), __jsx("span", {
      className: "description"
    }, "out of ", __jsx("b", null, reading.totalAnswers))))), __jsx("div", {
      className: "col s12 l7 xl8"
    }, __jsx("ul", {
      className: "collapsible expandable collapsible-explain"
    }, __jsx("li", null, __jsx("div", {
      className: "collapsible-header"
    }, __jsx("b", null, "Explain This Graph")), __jsx("div", {
      className: "collapsible-body"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col l6"
    }, __jsx("ul", {
      className: "legend-list"
    }, __jsx("li", null, __jsx("div", {
      className: "legend-frame"
    }, __jsx("span", {
      className: "box red darken-2"
    }), __jsx("strong", {
      className: "text h3"
    }, "Focus Here!")), __jsx("p", null, "Most people with your score would get these correct, but you got them wrong. Work on these and you can pick up some easy points!")), __jsx("li", null, __jsx("div", {
      className: "legend-frame"
    }, __jsx("span", {
      className: "box red lighten-5"
    }), __jsx("strong", {
      className: "text h3"
    }, "Tough Gains")), __jsx("p", null, "You missed these, but so did most others with a similar score. You\u2019ll likely \uFB01nd easier gains elsewhere.")))), __jsx("div", {
      className: "col l6"
    }, __jsx("ul", {
      className: "legend-list"
    }, __jsx("li", null, __jsx("div", {
      className: "legend-frame"
    }, __jsx("span", {
      className: "box light-green darken-2"
    }), __jsx("strong", {
      className: "text h3"
    }, "Well Done!")), __jsx("p", null, "You\u2019re overachiving in this category compared to other with your score. Keep up the good work!")), __jsx("li", null, __jsx("div", {
      className: "legend-frame"
    }, __jsx("span", {
      className: "box  light-green lighten-4"
    }), __jsx("strong", {
      className: "text h3"
    }, "Piece o\u2019 Cake")), __jsx("p", null, "You answered these correctly like others with a similar score.")))))))))), __jsx("div", {
      className: "graphs-section"
    }, __jsx("div", {
      className: "graphs-block"
    }, __jsx("div", {
      className: "graph-row graph-row-title"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("h3", {
      className: "graph-title"
    }, "Passage Type")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '100%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '80%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '80%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Science")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '85%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '100%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '70%'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Informational Graphic Passage")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '75%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '70%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '70%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "History/Social Science")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '85%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '5%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '15%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "US & World Literature")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '45%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '85%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '0'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Paired Passages")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '35%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '60%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '10%'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18")))), __jsx("div", {
      className: "graphs-block"
    }, __jsx("div", {
      className: "graph-row graph-row-title"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("h3", {
      className: "graph-title"
    }, "Question Type")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '85%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '12%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '95%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row-block"
    }, __jsx("div", {
      className: "graph-row graph-row-subtitle"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Citing Textual Evidence")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '55%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '70%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '12%'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row graph-row-inner"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Cite Text as Evidence")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '20%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '85%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '70%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row graph-row-inner"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Author\u2019s Intention and Method")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '55%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '7%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '15%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row graph-row-inner"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Support / Refute a Claim")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '47%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '12%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '0'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18")))), __jsx("div", {
      className: "graph-row-block"
    }, __jsx("div", {
      className: "graph-row graph-row-subtitle"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Reading Closely")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '12%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '55%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '10%'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row graph-row-inner"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Detail Question")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '100%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '8%'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '95%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '0'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))), __jsx("div", {
      className: "graph-row graph-row-inner"
    }, __jsx("div", {
      className: "graph-col text-column"
    }, __jsx("strong", {
      className: "graph-subtitle"
    }, "Support / Refute a Claim")), __jsx("div", {
      className: "graph-col graph-container"
    }, __jsx("div", {
      className: "graph-linear"
    }, __jsx("div", {
      className: "part-left"
    }, __jsx("div", {
      className: "part-green-light",
      style: {
        width: '75%'
      }
    }, __jsx("div", {
      className: "part-red",
      style: {
        width: '0'
      }
    }))), __jsx("div", {
      className: "part-right"
    }, __jsx("div", {
      className: "part-red-light",
      style: {
        width: '100%'
      }
    }, __jsx("div", {
      className: "part-green",
      style: {
        width: '70%'
      }
    }))))), __jsx("div", {
      className: "graph-col graph-info"
    }, __jsx("span", {
      className: "text-large"
    }, "12"), __jsx("span", {
      className: "text-small"
    }, "out of"), __jsx("span", {
      className: "text-large"
    }, "18"))))))), __jsx("div", {
      id: "tabs_tab02",
      className: openSection === 'writing' ? '' : 'tab-content'
    }, __jsx("h3", null, "Tab 02 content"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quasi inventore expedita maxime, vero magnam architecto eius laudantium corrupti! Ut fuga sit corrupti, vitae cum temporibus sed dolore labore! Fugit."), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorem nihil minus, quasi, dicta cupiditate aut magni ea veniam natus provident eveniet tempore iure minima placeat distinctio ducimus quo cum.")), __jsx("div", {
      id: "tabs_tab03",
      className: openSection === 'math' ? '' : 'tab-content'
    }, __jsx("h3", null, "Tab 03 content"), __jsx("p", null, "Expedita quibusdam sed, temporibus quasi dolorem iure non inventore quaerat sit mollitia dolores minima illo perspiciatis omnis delectus, recusandae quos, incidunt ratione."), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, enim? Itaque reprehenderit, id eos quasi optio est. Soluta alias, minima consequuntur obcaecati odio maiores, molestiae, vel ipsum modi delectus enim!"))))));
  }

}

StrengthsAndWeaknesses.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StrengthsAndWeaknesses);

/***/ }),

/***/ "./components/Classes/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js":
/*!***********************************************************************************************!*\
  !*** ./components/Classes/DetailSummaryPage/components/StrengthsAndWeaknesses/utils/index.js ***!
  \***********************************************************************************************/
/*! exports provided: getIndicatorStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndicatorStatus", function() { return getIndicatorStatus; });
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

/***/ }),

/***/ "./components/Classes/DetailSummaryPage/components/StudentsWhoHave/index.js":
/*!**********************************************************************************!*\
  !*** ./components/Classes/DetailSummaryPage/components/StudentsWhoHave/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: flaggedSectionOpen,
    1: setFlaggedSectionOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: fewerThan2PracticeTestsOpen,
    1: setFewerThan2PracticeTestsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    className: "card-block"
  }, __jsx("h2", null, "Student Who Have..."), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, __jsx("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, __jsx("li", {
    className: overdueSectionOpen ? "pink-darken-2 pink-text text-darken-2 active" : "pink-darken-2 pink-text text-darken-2"
  }, __jsx("div", {
    onClick: () => setOverdueSectionOpen(!overdueSectionOpen),
    className: "card card-alert collapsible-header"
  }, __jsx("span", {
    className: "icon-box pink darken-2"
  }, __jsx("i", {
    className: "icon-exclamation-mark"
  })), __jsx("div", {
    className: "alert-text"
  }, __jsx("p", null, __jsx("b", null, "Overdue Coursework")), __jsx("div", {
    className: "value"
  }, __jsx("b", {
    className: "text-large"
  }, overdueCoursework.length))), __jsx("span", {
    className: "collapsible-opener"
  }, __jsx("i", {
    className: "custom-icon-traingle-down"
  }))), __jsx("div", {
    className: "card-content collapsible-body",
    style: {
      display: overdueSectionOpen ? 'block' : ''
    }
  }, __jsx("table", {
    className: "card-detail-table"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "sort-holder"
  }, "Name ", __jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), __jsx("th", null, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "sort-holder"
  }, "Overdue ", __jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), __jsx("tbody", null, overdueCoursework.map(student => __jsx("tr", {
    key: student.name
  }, __jsx("td", null, student.name), __jsx("td", null, student.overdueAssignments))))))))), __jsx("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, __jsx("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, __jsx("li", {
    className: flaggedSectionOpen ? "pink-darken-3 pink-text text-darken-3 active" : "pink-darken-3 pink-text text-darken-3"
  }, __jsx("div", {
    onClick: () => setFlaggedSectionOpen(!flaggedSectionOpen),
    className: "card card-alert collapsible-header"
  }, __jsx("span", {
    className: "icon-box pink darken-3"
  }, __jsx("i", {
    className: "icon-exclamation-mark"
  })), __jsx("div", {
    className: "alert-text"
  }, __jsx("p", null, __jsx("b", null, "Flagged Problems")), __jsx("div", {
    className: "value"
  }, __jsx("b", {
    className: "text-large"
  }, flaggedProblems.length))), __jsx("span", {
    className: "collapsible-opener"
  }, __jsx("i", {
    className: "custom-icon-traingle-down"
  }))), __jsx("div", {
    className: "card-content collapsible-body",
    style: {
      display: flaggedSectionOpen ? 'block' : ''
    }
  }, __jsx("table", {
    className: "card-detail-table"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "sort-holder"
  }, "Name ", __jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), __jsx("th", null, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "sort-holder"
  }, "Flags", __jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), __jsx("tbody", null, flaggedProblems.map(student => __jsx("tr", {
    key: student.name
  }, __jsx("td", null, student.name), __jsx("td", null, student.flaggedProblems))))))))), __jsx("div", {
    className: "card-main-col col s12 m8 l7 xl4"
  }, __jsx("ul", {
    className: "card-detail card-main-full card collapsible expandable"
  }, __jsx("li", {
    className: fewerThan2PracticeTestsOpen ? "pink-darken-4 pink-text text-darken-4 active" : "pink-darken-4 pink-text text-darken-4"
  }, __jsx("div", {
    onClick: () => setFewerThan2PracticeTestsOpen(!fewerThan2PracticeTestsOpen),
    className: "card card-alert collapsible-header"
  }, __jsx("span", {
    className: "icon-box pink darken-4"
  }, __jsx("i", {
    className: "icon-exclamation-mark"
  })), __jsx("div", {
    className: "alert-text"
  }, __jsx("p", null, __jsx("b", null, "Fewer than 2  Practice Tests")), __jsx("div", {
    className: "value"
  }, __jsx("b", {
    className: "text-large"
  }, fewerThan2PracticeTests.length))), __jsx("span", {
    className: "collapsible-opener"
  }, __jsx("i", {
    className: "custom-icon-traingle-down"
  }))), __jsx("div", {
    className: "card-content collapsible-body",
    style: {
      display: fewerThan2PracticeTestsOpen ? 'block' : ''
    }
  }, __jsx("table", {
    className: "card-detail-table"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "sort-holder"
  }, "Name ", __jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))), __jsx("th", null, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "sort-holder"
  }, "Tests", __jsx("i", {
    className: "sort-icon custom-icon-traingle-down"
  })))))), __jsx("tbody", null, fewerThan2PracticeTests.map(student => __jsx("tr", {
    key: student.name
  }, __jsx("td", null, student.name), __jsx("td", null, student.fewerThan2PracticeTests)))))))))));
};

StudentsWhoHave.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StudentsWhoHave);

/***/ }),

/***/ "./components/Classes/DetailSummaryPage/index.js":
/*!*******************************************************!*\
  !*** ./components/Classes/DetailSummaryPage/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ClassAverages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ClassAverages */ "./components/Classes/DetailSummaryPage/components/ClassAverages/index.js");
/* harmony import */ var _components_ScoreImprovement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ScoreImprovement */ "./components/Classes/DetailSummaryPage/components/ScoreImprovement/index.js");
/* harmony import */ var _components_StudentsWhoHave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/StudentsWhoHave */ "./components/Classes/DetailSummaryPage/components/StudentsWhoHave/index.js");
/* harmony import */ var _components_StrengthsAndWeaknesses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/StrengthsAndWeaknesses */ "./components/Classes/DetailSummaryPage/components/StrengthsAndWeaknesses/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // eslint-disable-next-line react/prefer-stateless-function

class DetailSummaryPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      currentClass: {
        classAverages,
        scoreImprovement,
        studentsWhoHave,
        strengthsAndWeaknesses
      }
    } = this.props;
    return __jsx("div", {
      className: "content-section"
    }, __jsx("div", {
      className: "content-section-holder"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "cards-section"
    }, __jsx("div", {
      className: "dashboard-section"
    }, __jsx(_components_ClassAverages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      state: classAverages
    }), __jsx(_components_ScoreImprovement__WEBPACK_IMPORTED_MODULE_3__["default"], {
      state: scoreImprovement
    }), __jsx(_components_StudentsWhoHave__WEBPACK_IMPORTED_MODULE_4__["default"], {
      state: studentsWhoHave
    }), __jsx(_components_StrengthsAndWeaknesses__WEBPACK_IMPORTED_MODULE_5__["default"], {
      state: strengthsAndWeaknesses
    }))))));
  }

}

DetailSummaryPage.propTypes = {
  currentClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DetailSummaryPage);

/***/ }),

/***/ "./components/Classes/DetailWorksheetPage/components/FilterSection/index.js":
/*!**********************************************************************************!*\
  !*** ./components/Classes/DetailWorksheetPage/components/FilterSection/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_sampleTopics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/sampleTopics */ "./components/utils/sampleTopics.js");
/* harmony import */ var _utils_worksheetSortOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utils/worksheetSortOptions */ "./utils/worksheetSortOptions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/no-static-element-interactions */








class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClearFilters", () => this.setState({
      activeFilters: []
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterClick", filter => {
      const {
        activeFilters: currentActiveFilters
      } = this.state;
      let activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        const filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        activeFilters
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterChange", (event, name) => {
      const {
        onSetFilteredTopicState,
        onUnsetFilteredTopicState,
        onSetSort
      } = this.props;
      const value = event.target ? event.target.value : event;
      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(this.state, {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submitNameFilter", () => {
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
    return __jsx("div", {
      className: "filter-form-holder"
    }, __jsx("ul", {
      className: "collapsible expandable"
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
      checked: activeFilters.indexOf('reading') !== -1,
      onChange: () => this.handleFilterClick('reading')
    }), __jsx("label", {
      htmlFor: "reading"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "writing",
      checked: activeFilters.indexOf('writing') !== -1,
      onChange: () => this.handleFilterClick('writing')
    }), __jsx("label", {
      htmlFor: "writing"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "math",
      checked: activeFilters.indexOf('math') !== -1,
      onChange: () => this.handleFilterClick('math')
    }), __jsx("label", {
      htmlFor: "math"
    }, "Math"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "beginning",
      checked: activeFilters.indexOf('beginning') !== -1,
      onChange: () => this.handleFilterClick('beginning')
    }), __jsx("label", {
      htmlFor: "beginning"
    }, "Beginning")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "developing",
      checked: activeFilters.indexOf('developing') !== -1,
      onChange: () => this.handleFilterClick('developing')
    }), __jsx("label", {
      htmlFor: "developing"
    }, "Developing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "accomplished",
      checked: activeFilters.indexOf('accomplished') !== -1,
      onChange: () => this.handleFilterClick('accomplished')
    }), __jsx("label", {
      htmlFor: "accomplished"
    }, "Accomplished")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "exemplary",
      checked: activeFilters.indexOf('exemplary') !== -1,
      onChange: () => this.handleFilterClick('exemplary')
    }), __jsx("label", {
      htmlFor: "exemplary"
    }, "Exemplary"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "unassigned",
      checked: activeFilters.indexOf('unassigned') !== -1,
      onChange: () => this.handleFilterClick('unassigned')
    }), __jsx("label", {
      htmlFor: "unassigned"
    }, "Unassigned")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "complete",
      checked: activeFilters.indexOf('complete') !== -1,
      onChange: () => this.handleFilterClick('complete')
    }), __jsx("label", {
      htmlFor: "complete"
    }, "Complete")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "incomplete",
      checked: activeFilters.indexOf('incomplete') !== -1,
      onChange: () => this.handleFilterClick('incomplete')
    }), __jsx("label", {
      htmlFor: "incomplete"
    }, "Incomplete"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "hasReviewFlags",
      checked: activeFilters.indexOf('hasReviewFlags') !== -1,
      onChange: () => this.handleFilterClick('hasReviewFlags')
    }), __jsx("label", {
      htmlFor: "hasReviewFlags"
    }, "Has Review Flags"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueToday",
      checked: activeFilters.indexOf('dueToday') !== -1,
      onChange: () => this.handleFilterClick('dueToday')
    }), __jsx("label", {
      htmlFor: "dueToday"
    }, "Due Today")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueNextSession",
      checked: activeFilters.indexOf('dueNextSession') !== -1,
      onChange: () => this.handleFilterClick('dueNextSession')
    }), __jsx("label", {
      htmlFor: "dueNextSession"
    }, "Due By Next Session")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueThisWeek",
      checked: activeFilters.indexOf('dueThisWeek') !== -1,
      onChange: () => this.handleFilterClick('dueThisWeek')
    }), __jsx("label", {
      htmlFor: "dueThisWeek"
    }, "Due this Week")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "overdue",
      checked: activeFilters.indexOf('overdue') !== -1,
      onChange: () => this.handleFilterClick('overdue')
    }), __jsx("label", {
      htmlFor: "overdue"
    }, "Overdue"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "some-class",
      checked: activeFilters.indexOf('class') !== -1,
      onChange: () => this.handleFilterClick('class')
    }), __jsx("label", {
      htmlFor: "some-class"
    }, "Some Class")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "tutoring",
      checked: activeFilters.indexOf('tutoring') !== -1,
      onChange: () => this.handleFilterClick('tutoring')
    }), __jsx("label", {
      htmlFor: "tutoring"
    }, "Tutoring")))), __jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "name_search",
      value: worksheetName,
      className: "input-control validate",
      onChange: event => this.handleFilterChange(event, 'worksheetName')
    }), __jsx("button", {
      type: "submit",
      className: "search-button",
      onClick: this.submitNameFilter
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: worksheetName.length ? 'label active' : 'label',
      htmlFor: "name_search"
    }, "Search"))), __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__["default"])(topic, _utils_sampleTopics__WEBPACK_IMPORTED_MODULE_6__["default"]),
      onChange: event => this.handleFilterChange(event, 'topic'),
      options: _utils_sampleTopics__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: "Topic",
      stateKey: "topic",
      dropdownKey: "topic"
    }))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 xl7"
    }, __jsx("div", {
      className: "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__["default"])(sort, _utils_worksheetSortOptions__WEBPACK_IMPORTED_MODULE_7__["default"]),
      onChange: event => this.handleFilterChange(event, 'sort'),
      options: _utils_worksheetSortOptions__WEBPACK_IMPORTED_MODULE_7__["default"],
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
      "data-view": "view-full",
      className: currentView === 'full' ? 'active' : '',
      onClick: () => onChangeView('full')
    }, __jsx("a", {
      href: "#"
    }, "Full View")), __jsx("li", {
      "data-view": "view-list",
      className: currentView === 'list' ? 'active' : '',
      onClick: () => onChangeView('list')
    }, __jsx("a", {
      href: "#"
    }, "List View"))))), __jsx("div", {
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

FilterSection.propTypes = {
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onChangeView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredTopicState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredTopicState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Classes/DetailWorksheetPage/components/FullView/index.js":
/*!*****************************************************************************!*\
  !*** ./components/Classes/DetailWorksheetPage/components/FullView/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/formatTimeEstimate */ "./utils/formatTimeEstimate.js");
/* harmony import */ var _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/statusColorMap */ "./components/Classes/DetailWorksheetPage/utils/statusColorMap.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const data = (percentage, status) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [_utils_statusColorMap__WEBPACK_IMPORTED_MODULE_5__["chartColorMap"][status], '#eaeaea']
  }]
});

class FullView extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", (event, index) => {
      const {
        dropdownIsOpen
      } = this.state;
      event.preventDefault();

      if (dropdownIsOpen) {
        return this.onCloseDropdown();
      }

      return this.onSetDropdown(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapWorksheetCards", () => {
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
        return __jsx("div", {
          className: "card-main-col col s12 m8 l7 xl5",
          key: worksheet.id
        }, __jsx("div", {
          className: disabled ? 'card-main work-card card-disabled card' : 'card-main work-card card'
        }, __jsx("div", {
          className: "card-panel panel-border"
        }, __jsx("div", {
          className: "card-panel-row row"
        }, __jsx("div", {
          className: "icon-col col s2"
        }, __jsx("span", {
          className: "block-icon"
        }, __jsx("i", {
          className: "icon-sheets-w"
        }))), __jsx("div", {
          className: "col s8"
        }, __jsx("div", {
          className: "card-panel-text"
        }, __jsx("div", {
          className: "text-small truncate"
        }, "Worksheet (", subject, ")"), __jsx("div", {
          className: "text-large truncate"
        }, worksheetName))), __jsx("div", {
          className: "position-top right-align"
        }, __jsx("div", {
          className: "icons-row"
        }, flags.length > 0 && __jsx("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, __jsx("b", {
          className: "badge-text"
        }, flags.length), " ", __jsx("i", {
          className: "icon-flag"
        })), __jsx("div", {
          className: "dropdown-block col"
        }, __jsx("a", {
          href: "#",
          "data-target": "dropdown01",
          className: "dropdown-trigger btn",
          onClick: event => this.handleDropdownClick(event, index)
        }, __jsx("i", {
          className: "material-icons dots-icon"
        }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? __jsx("ul", {
          id: "dropdown01",
          className: "dropdown-content dropdown-wide",
          style: {
            display: 'block',
            opacity: '1',
            transform: 'scaleX(1) scaleY(1)'
          }
        }, __jsx("li", null, __jsx("a", {
          href: "#",
          className: "modal-trigger link-block",
          onClick: () => onToggleDetailModalOpen(index)
        }, "View Details")), __jsx("li", null, __jsx("a", {
          href: "#!"
        }, "Dismiss Flags")), __jsx("li", null, __jsx("a", {
          href: "#!"
        }, "Reset")), __jsx("li", null, __jsx("a", {
          href: "#!",
          className: "link-delete"
        }, "Delete"))) : null)))), __jsx("div", {
          className: "card-top-block"
        }, __jsx("div", {
          className: "d-flex row mb-0"
        }, __jsx("div", {
          className: "left-col col s7"
        }, __jsx("dl", {
          className: "dl-horizontal"
        }, __jsx("dt", null, "Problem Type:"), __jsx("dd", null, problemType))), __jsx("div", {
          className: "right-col col s5 right-align"
        }, __jsx("dl", {
          className: "dl-horizontal"
        }, __jsx("dt", null, "Di\uFB03culty:"), __jsx("dd", null, difficulty)))))), __jsx("div", {
          className: "card-content"
        }, __jsx("div", {
          className: "d-flex sameheight-all row mb-0"
        }, __jsx("div", {
          className: "col s6"
        }, __jsx("div", {
          className: "chart-container"
        }, __jsx("div", {
          className: "chart-holder"
        }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Doughnut"], {
          data: () => data(score, status),
          options: {
            circumference: 1 * Math.PI,
            rotation: 1 * Math.PI,
            cutoutPercentage: 60,
            tooltips: false
          }
        }), __jsx("span", {
          className: "chart-value",
          style: {
            backgroundColor: _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_5__["chartColorMap"][status]
          }
        }, __jsx("span", {
          "data-count-up": true,
          "data-start-val": "0",
          "data-end-val": "96",
          "data-duration": "1"
        }), __jsx("span", {
          className: "percentage"
        }, score && `${score}%`))), __jsx("div", {
          className: "chart-row"
        }, __jsx("div", {
          className: "chart-col chart-start"
        }, "\xA0"), __jsx("div", {
          className: "chart-col chart-end"
        }, __jsx("span", {
          className: "amount",
          style: {
            color: _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_5__["chartColorMap"][status]
          }
        }, problems))), __jsx("div", {
          className: "chart-description"
        }, __jsx("dl", {
          className: "dl-horizontal"
        }, __jsx("dt", null, "Time Est:"), __jsx("dd", null, Object(_utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_4__["default"])(timeEstimate))), __jsx("dl", {
          className: "dl-horizontal"
        }, __jsx("dt", null, "Problems:"), __jsx("dd", null, problems))))), __jsx("div", {
          className: "col s6 right-align justify-end"
        }, __jsx("div", {
          className: "chart-description"
        }, __jsx("dl", {
          className: "dl-horizontal"
        }, __jsx("dt", null, "Available:"), __jsx("dd", null, __jsx("time", {
          dateTime: availableDate
        }, availableDate))), __jsx("dl", {
          className: late ? 'dl-horizontal red-text text-darken-3' : 'dl-horizontal'
        }, disabled ? __jsx("dt", null, "No Due Date") : [__jsx("dt", {
          key: "0"
        }, "Due:"), __jsx("dd", {
          key: "1"
        }, __jsx("time", {
          dateTime: dueDate
        }, dueDate))])), __jsx("div", {
          className: "align-self-end"
        }, __jsx("span", {
          className: `badge badge-rounded-md ${_utils_statusColorMap__WEBPACK_IMPORTED_MODULE_5__["default"][status]} white-text`
        }, status)))), __jsx("div", {
          className: "card-text"
        }, __jsx("dl", {
          className: "dl-horizontal"
        }, __jsx("dt", null, "Worksheet Source:"), __jsx("dd", null, worksheetSource))), __jsx("div", {
          className: "card-inner-row"
        }, __jsx("div", {
          className: "row-holder"
        }, __jsx("ul", {
          className: "classification-list"
        }, classifications.map(classification => __jsx("li", {
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
    return __jsx("div", {
      className: "content-section"
    }, __jsx("div", {
      className: "result-row center-align"
    }, __jsx("b", {
      className: "result"
    }, " - ", worksheets.length, " results -")), __jsx("div", {
      className: "row d-flex-content card-width-272"
    }, this.mapWorksheetCards()));
  }

}

FullView.propTypes = {
  worksheets: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onToggleDetailModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FullView);

/***/ }),

/***/ "./components/Classes/DetailWorksheetPage/components/ListView/components/TableHeader/index.js":
/*!****************************************************************************************************!*\
  !*** ./components/Classes/DetailWorksheetPage/components/ListView/components/TableHeader/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TableHeader = () => __jsx("div", {
  className: "list-table-header"
}, __jsx("div", {
  className: "list-table-row"
}, __jsx("div", {
  className: "list-table-cell icon-cell"
}, "\xA0"), __jsx("div", {
  className: "list-table-cell name-cell"
}, __jsx("b", null, "Worksheet")), __jsx("div", {
  className: "list-table-cell graph-cell"
}, __jsx("b", null, "Score")), __jsx("div", {
  className: "list-table-cell description-cell"
}, __jsx("b", null, "Problems")), __jsx("div", {
  className: "list-table-cell time-cell"
}, __jsx("b", null, "Time Est")), __jsx("div", {
  className: "list-table-cell date-cell"
}, __jsx("b", null, "Assign")), __jsx("div", {
  className: "list-table-cell date-cell"
}, __jsx("b", null, "Due")), __jsx("div", {
  className: "list-table-cell completed-cell"
}, __jsx("b", null, "Completed")), __jsx("div", {
  className: "list-table-cell flags-cell"
}, __jsx("b", null, "Flags")), __jsx("div", {
  className: "list-table-cell status-cell"
}, __jsx("b", null, "Status")), __jsx("div", {
  className: "list-table-cell drop-cell"
}, "\xA0")));

/* harmony default export */ __webpack_exports__["default"] = (TableHeader);

/***/ }),

/***/ "./components/Classes/DetailWorksheetPage/components/ListView/index.js":
/*!*****************************************************************************!*\
  !*** ./components/Classes/DetailWorksheetPage/components/ListView/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TableHeader */ "./components/Classes/DetailWorksheetPage/components/ListView/components/TableHeader/index.js");
/* harmony import */ var _utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/formatTimeEstimate */ "./utils/formatTimeEstimate.js");
/* harmony import */ var _utils_statusColorMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/statusColorMap */ "./components/Classes/DetailWorksheetPage/utils/statusColorMap.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class ListView extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", (event, index) => {
      const {
        dropdownIsOpen
      } = this.state;
      event.preventDefault();

      if (dropdownIsOpen) {
        return this.onCloseDropdown();
      }

      return this.onSetDropdown(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapWorksheetRows", () => {
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
        return __jsx("div", {
          className: disabled ? 'card card-disabled list-table-row' : 'card list-table-row',
          key: worksheet.id
        }, __jsx("div", {
          className: "list-table-cell icon-cell"
        }, __jsx("span", {
          className: "block-icon"
        }, __jsx("i", {
          className: "icon-sheets-w"
        }))), __jsx("div", {
          className: "list-table-cell name-cell"
        }, __jsx("div", {
          className: "card-panel-text truncate"
        }, __jsx("div", {
          className: "text-large truncate"
        }, worksheetName))), __jsx("div", {
          className: "list-table-cell graph-cell"
        }, score && __jsx("span", {
          className: `chart-bar ${_utils_statusColorMap__WEBPACK_IMPORTED_MODULE_5__["default"][status]} white-text`
        }, score, "%")), __jsx("div", {
          className: "list-table-cell description-cell"
        }, problems), __jsx("div", {
          className: "list-table-cell time-cell"
        }, Object(_utils_formatTimeEstimate__WEBPACK_IMPORTED_MODULE_4__["default"])(timeEstimate)), __jsx("div", {
          className: "list-table-cell date-cell"
        }, __jsx("time", {
          dateTime: "2019-01-27"
        }, assignDate)), __jsx("div", {
          className: "list-table-cell date-cell"
        }, __jsx("time", {
          dateTime: "2019-01-27"
        }, dueDate)), __jsx("div", {
          className: "list-table-cell completed-cell"
        }, completed && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, completed, " of ", problems)), __jsx("div", {
          className: "list-table-cell flags-cell"
        }, flags.length > 0 && __jsx("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, __jsx("b", {
          className: "badge-text"
        }, flags.length), " ", __jsx("i", {
          className: "icon-flag"
        }))), __jsx("div", {
          className: "list-table-cell status-cell"
        }, __jsx("span", {
          className: `badge badge-rounded-md ${_utils_statusColorMap__WEBPACK_IMPORTED_MODULE_5__["default"][status]} white-text`
        }, status)), __jsx("div", {
          className: "list-table-cell drop-cell"
        }, __jsx("div", {
          className: "dropdown-block"
        }, __jsx("a", {
          href: "#",
          "data-target": "dropdown01",
          className: "dropdown-trigger btn",
          onClick: event => this.handleDropdownClick(event, index)
        }, __jsx("i", {
          className: "material-icons dots-icon"
        }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? __jsx("ul", {
          id: "dropdown01",
          className: "dropdown-content dropdown-wide",
          style: {
            display: 'block',
            opacity: '1',
            transform: 'scaleX(1) scaleY(1)'
          }
        }, __jsx("li", null, __jsx("a", {
          href: "#",
          className: "modal-trigger link-block",
          onClick: () => onToggleDetailModalOpen(index)
        }, "View Details")), __jsx("li", null, __jsx("a", {
          href: "#!"
        }, "Dismiss Flags")), __jsx("li", null, __jsx("a", {
          href: "#!"
        }, "Reset")), __jsx("li", null, __jsx("a", {
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "content-section"
    }, __jsx("div", {
      className: "container-md"
    }, __jsx("div", {
      className: "result-row center-align"
    }, __jsx("b", {
      className: "result"
    }, " - ", worksheets.length, " results -")), __jsx("div", {
      className: "list-view-section"
    }, __jsx("div", {
      className: "list-table"
    }, __jsx(_components_TableHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
      className: "list-table-body"
    }, this.mapWorksheetRows()))))));
  }

}

ListView.propTypes = {
  worksheets: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onToggleDetailModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ListView);

/***/ }),

/***/ "./components/Classes/DetailWorksheetPage/index.js":
/*!*********************************************************!*\
  !*** ./components/Classes/DetailWorksheetPage/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FullView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FullView */ "./components/Classes/DetailWorksheetPage/components/FullView/index.js");
/* harmony import */ var _components_ListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ListView */ "./components/Classes/DetailWorksheetPage/components/ListView/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Classes/DetailWorksheetPage/components/FilterSection/index.js");
/* harmony import */ var _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/sampleWorksheets */ "./components/Classes/DetailWorksheetPage/utils/sampleWorksheets.js");
/* harmony import */ var _utils_sortFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/sortFunctions */ "./components/utils/sortFunctions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class DetailWorksheetPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignWorksheetDropdown", event => {
      event.preventDefault();
      this.setState(({
        assignWorksheetDropdownOpen
      }) => ({
        assignWorksheetDropdownOpen: !assignWorksheetDropdownOpen
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleDetailModalOpen", worksheetIndex => this.setState(({
      detailModalOpen,
      worksheets
    }) => ({
      detailModalOpen: !detailModalOpen,
      activeWorksheet: worksheets[worksheetIndex]
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChangeView", view => this.setState({
      currentView: view
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredState", filterName => this.setState({
      worksheetsAreFiltered: true,
      filterName
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredState", () => this.setState({
      worksheetsAreFiltered: false,
      filterName: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredTopicState", filterTopic => this.setState({
      worksheetsAreFiltered: true,
      filterTopic
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredTopicState", () => this.setState({
      filterTopic: ''
    }, this.checkForFilteredState));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAssignWorksheet", assignType => {
      console.warn('Stubbed out assign worksheet click', assignType);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByName", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByTopic", (preFilteredWorksheets = []) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSortWorksheets", worksheets => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'dueDate':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_6__["dueDate"]);

        case 'assignDate':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_6__["assignDate"]);

        case 'problems':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_6__["problems"]);

        case 'completed':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_6__["completed"]);

        case 'flags':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_6__["flags"]);

        case 'score':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_6__["score"]);

        case 'timeEstimate':
          return worksheets.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_6__["timeEstimate"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getMappableWorksheets", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkForFilteredState", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderWorksheetView", () => {
      const {
        currentView
      } = this.state;

      switch (currentView) {
        case 'list':
          return __jsx(_components_ListView__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onToggleDetailModalOpen: this.onToggleDetailModalOpen,
            worksheets: this.getMappableWorksheets()
          });

        case 'full':
          return __jsx(_components_FullView__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      worksheets: _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_5__["default"],
      detailModalOpen: false,
      activeWorksheet: null
    };
  }

  render() {
    const {
      currentView,
      assignWorksheetDropdownOpen
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "main-holder grey lighten-5 switcher-section"
    }, __jsx(_components_FilterSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      currentView: currentView,
      onChangeView: this.onChangeView,
      onSetSort: this.onSetSort,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredTopicState: this.onSetFilteredTopicState,
      onUnsetFilteredTopicState: this.onUnsetFilteredTopicState
    }), this.renderWorksheetView()), __jsx("div", {
      className: "add-btn-block"
    }, __jsx("a", {
      href: "#",
      "data-target": "dropdown_assign_selected",
      onClick: this.onToggleAssignWorksheetDropdown,
      className: "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, __jsx("i", {
      className: "material-icons"
    }, "add"), " Assign Worksheet"), __jsx("ul", {
      id: "dropdown_assign_selected",
      className: "dropdown-content dropdown-small",
      style: {
        display: assignWorksheetDropdownOpen ? 'block' : '0',
        opacity: assignWorksheetDropdownOpen ? '1' : '0'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: () => this.onAssignWorksheet('fromSaved')
    }, "From Saved")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: () => this.onAssignWorksheet('createNew')
    }, "Create New")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DetailWorksheetPage);

/***/ }),

/***/ "./components/Classes/DetailWorksheetPage/utils/sampleWorksheets.js":
/*!**************************************************************************!*\
  !*** ./components/Classes/DetailWorksheetPage/utils/sampleWorksheets.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/Classes/DetailWorksheetPage/utils/statusColorMap.js":
/*!************************************************************************!*\
  !*** ./components/Classes/DetailWorksheetPage/utils/statusColorMap.js ***!
  \************************************************************************/
/*! exports provided: chartColorMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartColorMap", function() { return chartColorMap; });
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
/* harmony default export */ __webpack_exports__["default"] = (statusColorMap);

/***/ }),

/***/ "./components/Classes/InstructorModal/components/InstructorToggleCard/index.js":
/*!*************************************************************************************!*\
  !*** ./components/Classes/InstructorModal/components/InstructorToggleCard/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class InstructorToggleCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      instructor,
      onToggleInstructorSelect
    } = this.props;
    return __jsx("li", {
      onClick: () => onToggleInstructorSelect(instructor)
    }, __jsx("input", {
      type: "checkbox"
    }), __jsx("div", {
      className: "owner-box card-panel card-panel-panel card-panel-large",
      style: {
        backgroundColor: "#31837a",
        color: "#fff"
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
        backgroundColor: "#0085ce",
        color: "#fff"
      }
    }, __jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "image description"
    })), __jsx("div", {
      className: "user-text",
      style: {
        color: "#fff"
      }
    }, __jsx("h4", {
      className: "h3"
    }, instructor.firstName, ", ", instructor.lastName), __jsx("a", {
      href: "mailto:jen.ownerly@gmail.com"
    }, instructor.email)))), __jsx("div", {
      className: "col s2 right-align"
    }, __jsx("span", {
      className: "block-icon"
    }, __jsx("i", {
      className: "icon-user"
    }), __jsx("span", {
      className: "text-icon"
    }, "Instructor"))))));
  }

}

InstructorToggleCard.propTypes = {
  instructor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onToggleInstructorSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InstructorToggleCard);

/***/ }),

/***/ "./components/Classes/InstructorModal/index.js":
/*!*****************************************************!*\
  !*** ./components/Classes/InstructorModal/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _components_InstructorToggleCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/InstructorToggleCard */ "./components/Classes/InstructorModal/components/InstructorToggleCard/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/sampleInstructors */ "./components/utils/sampleInstructors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class InstructorModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => this.setState({
      selectedInstructors: []
    }, this.props.onClose));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleInstructorSelect", instuctor => {
      const {
        selectedInstructors
      } = this.state;

      if (selectedInstructors.indexOf(instuctor) === -1) {
        this.setState({
          selectedInstructors: [...selectedInstructors, instuctor]
        });
      } else {
        const updatedInstructors = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(selectedInstructors, {
          $splice: [[selectedInstructors.indexOf(instuctor), 1]]
        });
        this.setState({
          selectedInstructors: updatedInstructors
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSaveInstructorChanges", () => {
      const {
        selectedInstructors
      } = this.state;
      const {
        handleInstructorsChange
      } = this.props;
      handleInstructorsChange(selectedInstructors);
      this.onCloseModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapInstructorToggleCard", () => {
      const {
        instructors
      } = this.state;
      return instructors.map((instructor, index) => __jsx(_components_InstructorToggleCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: index,
        index: index,
        instructor: instructor,
        onToggleInstructorSelect: this.onToggleInstructorSelect
      }));
    });

    this.state = {
      instructors: _utils_sampleInstructors__WEBPACK_IMPORTED_MODULE_8__["default"],
      selectedInstructors: []
    };
  }

  render() {
    const {
      open
    } = this.props;
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-4069380559" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_Instructor1",
      className: "jsx-4069380559" + " " + "modal modal-custom modal-location"
    }, __jsx("form", {
      action: "#",
      className: "jsx-4069380559" + " " + "custom-form"
    }, __jsx("fieldset", {
      className: "jsx-4069380559"
    }, __jsx("div", {
      className: "jsx-4069380559" + " " + "card-modal card-main card"
    }, __jsx("div", {
      style: {
        backgroundColor: "#00456b",
        color: "#fff"
      },
      className: "jsx-4069380559" + " " + "owner-box card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-4069380559" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-4069380559" + " " + "col"
    }, __jsx("h3", {
      className: "jsx-4069380559"
    }, "Select Instructor(s)")))), __jsx("div", {
      className: "jsx-4069380559" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-4069380559" + " " + "card-body"
    }, __jsx("span", {
      className: "jsx-4069380559" + " " + "hint"
    }, "Click to select or deselect."), __jsx("div", {
      className: "jsx-4069380559" + " " + "row-holder"
    }, __jsx("div", {
      className: "jsx-4069380559" + " " + "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "insturtor_search_modal",
      placeholder: "Smith",
      className: "jsx-4069380559" + " " + "input-control  validate"
    }), __jsx("button", {
      type: "submit",
      className: "jsx-4069380559" + " " + "search-button"
    }, __jsx("i", {
      className: "jsx-4069380559" + " " + "icon-search"
    })), __jsx("label", {
      htmlFor: "insturtor_search_modal",
      className: "jsx-4069380559" + " " + "label"
    }, "Search")), __jsx("div", {
      className: "jsx-4069380559" + " " + "input-field"
    }, __jsx("select", {
      id: "location_search_modal",
      className: "jsx-4069380559"
    }, __jsx("option", {
      className: "jsx-4069380559"
    }, "Any"), __jsx("option", {
      className: "jsx-4069380559"
    }, "option"), __jsx("option", {
      className: "jsx-4069380559"
    }, "option")), __jsx("label", {
      htmlFor: "location_search_modal",
      className: "jsx-4069380559" + " " + "label"
    }, "Location"))), __jsx("div", {
      className: "jsx-4069380559" + " " + "box-scrollable"
    }, __jsx("div", {
      className: "jsx-4069380559" + " " + "height-40 jcf-scrollable"
    }, __jsx("div", {
      style: {
        height: "300px",
        overflowY: "scroll"
      },
      className: "jsx-4069380559" + " " + "card-location-holder"
    }, __jsx("ul", {
      className: "jsx-4069380559" + " " + "checkbox-list"
    }, this.mapInstructorToggleCard()))))), __jsx("div", {
      className: "jsx-4069380559" + " " + "modal-footer"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-4069380559" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.onSaveInstructorChanges,
      className: "jsx-4069380559" + " " + "btn"
    }, "Add"))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4069380559"
    }, "h4.jsx-4069380559{font-size:2.28rem;line-height:110%;margin:1.52rem 0 0.912rem 0;margin-top:0;}.overlay.jsx-4069380559{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-4069380559{margin:0;border-radius:6px;}#modal_Location1.jsx-4069380559{border-radius:6px;}.modal.jsx-4069380559{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-4069380559{opacity:1;visibility:visible;}.modal-footer.jsx-4069380559{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0NsYXNzZXMvSW5zdHJ1Y3Rvck1vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKVyxBQUdpQyxBQU1ILEFBU04sQUFJUyxBQUdKLEFBV0osQUFJYSxTQXJCTCxDQWtCQyxJQVhJLENBaEJhLEdBTm5CLEFBbUJuQixLQWtCQSxJQXJCQSxFQWtCQSxNQWpDOEIsRUFzQlYsV0FoQlosTUFDRSxDQWdCQSxPQWZDLENBUEksQUF1QkgsUUFmSCxFQWdCRSxHQXZCWCxFQVFlLElBa0J3QixTQWpCdkMsc0dBa0JBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0NsYXNzZXMvSW5zdHJ1Y3Rvck1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uLy4uL1BvcnRhbFwiO1xuaW1wb3J0IEluc3RydWN0b3JUb2dnbGVDYXJkIGZyb20gJy4vY29tcG9uZW50cy9JbnN0cnVjdG9yVG9nZ2xlQ2FyZCc7XG5cbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSBcIi4uLy4uL0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlclwiO1xuaW1wb3J0IHNhbXBsZUluc3RydWN0b3JzIGZyb20gJy4uLy4uL3V0aWxzL3NhbXBsZUluc3RydWN0b3JzJztcblxuXG5jbGFzcyBJbnN0cnVjdG9yTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpbnN0cnVjdG9yczpzYW1wbGVJbnN0cnVjdG9ycyxcbiAgICAgICAgc2VsZWN0ZWRJbnN0cnVjdG9yczpbXSxcbiAgICB9XG4gIH1cblxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEluc3RydWN0b3JzOiBbXSB9LCB0aGlzLnByb3BzLm9uQ2xvc2UpXG5cbiAgb25Ub2dnbGVJbnN0cnVjdG9yU2VsZWN0ID0gKGluc3R1Y3RvcikgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRJbnN0cnVjdG9ycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2VsZWN0ZWRJbnN0cnVjdG9ycy5pbmRleE9mKGluc3R1Y3RvcikgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJbnN0cnVjdG9yczogWy4uLnNlbGVjdGVkSW5zdHJ1Y3RvcnMsIGluc3R1Y3Rvcl0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRJbnN0cnVjdG9ycyA9IHVwZGF0ZShzZWxlY3RlZEluc3RydWN0b3JzLCB7XG4gICAgICAgICRzcGxpY2U6IFtbc2VsZWN0ZWRJbnN0cnVjdG9ycy5pbmRleE9mKGluc3R1Y3RvciksIDFdXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSW5zdHJ1Y3RvcnM6IHVwZGF0ZWRJbnN0cnVjdG9ycyB9KTtcbiAgICB9XG4gIH1cblxuICBvblNhdmVJbnN0cnVjdG9yQ2hhbmdlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkSW5zdHJ1Y3RvcnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBoYW5kbGVJbnN0cnVjdG9yc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBoYW5kbGVJbnN0cnVjdG9yc0NoYW5nZShzZWxlY3RlZEluc3RydWN0b3JzKTtcbiAgICB0aGlzLm9uQ2xvc2VNb2RhbCgpO1xuICB9XG5cblxuICBtYXBJbnN0cnVjdG9yVG9nZ2xlQ2FyZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaW5zdHJ1Y3RvcnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIGluc3RydWN0b3JzLm1hcCgoaW5zdHJ1Y3RvcixpbmRleCk9PihcbiAgICAgICAgPEluc3RydWN0b3JUb2dnbGVDYXJkXG4gICAgICAgICAgICBrZXkgPSB7IGluZGV4IH1cbiAgICAgICAgICAgIGluZGV4ID0ge2luZGV4fVxuICAgICAgICAgICAgaW5zdHJ1Y3RvciA9IHtpbnN0cnVjdG9yfVxuICAgICAgICAgICAgb25Ub2dnbGVJbnN0cnVjdG9yU2VsZWN0PXt0aGlzLm9uVG9nZ2xlSW5zdHJ1Y3RvclNlbGVjdH1cbiAgICAgICAgLz5cbiAgICApKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2sgPSB7dGhpcy5vbkNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cIm1vZGFsX0luc3RydWN0b3IxXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWxvY2F0aW9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cImN1c3RvbS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmQtbWFpbiBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvd25lci1ib3ggY2FyZC1wYW5lbCBjYXJkLXBhbmVsLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwNDU2YlwiLCBjb2xvcjogXCIjZmZmXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VsZWN0IEluc3RydWN0b3Iocyk8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHRvIHNlbGVjdCBvciBkZXNlbGVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImluc3R1cnRvcl9zZWFyY2hfbW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbCAgdmFsaWRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTbWl0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5zdHVydG9yX3NlYXJjaF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibG9jYXRpb25fc2VhcmNoX21vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFueTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5vcHRpb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+b3B0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibG9jYXRpb25fc2VhcmNoX21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1zY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVpZ2h0LTQwIGpjZi1zY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWxvY2F0aW9uLWhvbGRlclwiIHN0eWxlID17e2hlaWdodDpcIjMwMHB4XCIsb3ZlcmZsb3dZOlwic2Nyb2xsXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGVja2JveC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubWFwSW5zdHJ1Y3RvclRvZ2dsZUNhcmQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IHBpbmstdGV4dCB0ZXh0LWRhcmtlbi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMub25TYXZlSW5zdHJ1Y3RvckNoYW5nZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yOHJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMS41MnJlbSAwIDAuOTEycmVtIDA7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21vZGFsX0xvY2F0aW9uMSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgICAgICAgICAgIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuSW5zdHJ1Y3Rvck1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVJbnN0cnVjdG9yc0NoYW5nZTpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3Rvck1vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Classes/InstructorModal/index.js */"));
  }

}

InstructorModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  handleInstructorsChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InstructorModal);

/***/ }),

/***/ "./components/Classes/ListPage/components/ClassCard/index.js":
/*!*******************************************************************!*\
  !*** ./components/Classes/ListPage/components/ClassCard/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ClassDetailModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ClassDetailModal */ "./components/Classes/ListPage/components/ClassDetailModal/index.js");
/* harmony import */ var _common_RadialBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/RadialBar */ "./components/common/RadialBar/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class ClassCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenClassDetailsModal", event => {
      event.preventDefault();
      this.props.onCloseDropdown();
      this.setState({
        classDetailsModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseClassDetailsModal", () => this.setState({
      classDetailsModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloneClass", () => this.props.onCloneClass(this.props.classroom));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenDeleteModal", () => this.setState({
      deleteModalOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDeleteModal", () => this.setState({
      deleteModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onConfirmDeleteClass", () => {
      const {
        onDeleteClass,
        classroom,
        onCloseDropdown
      } = this.props;
      onDeleteClass(classroom);
      onCloseDropdown();
      this.onCloseDeleteModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", event => {
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_ClassDetailModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      index: index,
      classroom: classroom,
      open: classDetailsModalOpen,
      onClose: this.onCloseClassDetailsModal,
      onOpenDeleteModal: this.onOpenDeleteModal,
      deleteModalOpen: deleteModalOpen,
      onSaveClassChanges: onSaveClassChanges,
      onDeleteClass: onDeleteClass
    }), __jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, __jsx("div", {
      className: "card-main card-class card card-large"
    }, __jsx("div", {
      className: "owner-box card-panel",
      style: {
        backgroundColor: "#408e49",
        color: "#fff",
        cursor: "pointer"
      }
    }, __jsx("div", {
      className: "card-panel-row row"
    }, __jsx("div", {
      className: "col s9"
    }, __jsx("div", {
      className: "user-block"
    }, __jsx("div", {
      className: "user-circle",
      style: {
        backgroundColor: "#fff",
        color: "#408e49"
      }
    }, __jsx("span", {
      className: "initials"
    }, amount_students), __jsx("span", {
      className: "ititials-text"
    }, "students")), __jsx("div", {
      className: "user-text",
      style: {
        color: "#fff"
      },
      onClick: () => onHandleClassCard(index)
    }, __jsx("h4", {
      className: "h3"
    }, "Some Class in June"), __jsx("time", {
      dateTime: "P120D"
    }, start_date, " - ", end_date)))), __jsx("div", {
      className: "col s3 right-align"
    }, __jsx("div", {
      className: "row icons-row"
    }, __jsx("div", {
      className: "col right-align"
    }, __jsx("span", {
      className: "block-icon"
    }, __jsx("i", {
      className: "icon-members"
    }), __jsx("span", {
      className: "text-icon"
    }, "Class"))), __jsx("div", {
      className: "dropdown-block col"
    }, __jsx("a", {
      className: "dropdown-trigger btn",
      href: "#",
      onClick: this.handleDropdownClick,
      "data-target": "dropdown01"
    }, __jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? __jsx("ul", {
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
    }, __jsx("li", null, __jsx("a", {
      href: "#modal_user_edit",
      onClick: this.onOpenClassDetailsModal,
      className: "modal-trigger link-block"
    }, "Edit")), __jsx("li", null, __jsx("a", {
      href: "#!",
      onClick: () => onCloneClass(index)
    }, "Clone")), __jsx("li", null, __jsx("a", {
      href: "#!"
    }, "Impersonate")), __jsx("li", null, __jsx("a", {
      href: "#!",
      onClick: () => onDeleteClass(index)
    }, "Delete"))) : null))))), __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "row d-flex mb-0"
    }, __jsx("div", {
      className: "col s12 m5"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s6 m12"
    }, __jsx("ul", {
      className: "points-list-custom"
    }, __jsx("li", {
      className: "style-aqua"
    }, __jsx("span", {
      className: "badge-circle"
    }, "+", improvement, __jsx("span", {
      className: "badge-text"
    }, "improvement"))))), __jsx("div", {
      className: "col s6 m12"
    }, __jsx("div", {
      className: "chart-block chart-block-test"
    }, __jsx("span", {
      className: "value-max"
    }, "24"), __jsx(_common_RadialBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      svgWidth: 104,
      svgHeight: 104,
      strokeWidth: 14,
      maxValue: 24,
      currentValue: instruction,
      strokeColor: "#55b24b"
    }), __jsx("div", {
      className: "chart-text"
    }, __jsx("span", {
      className: "title"
    }, "Instruction"), __jsx("span", {
      className: "value"
    }, (instruction / 24 * 100).toFixed(1), "%"), __jsx("span", {
      className: "description"
    }, "vs scheduled instruction")))))), __jsx("div", {
      className: "col s12 m7"
    }, __jsx("ul", {
      className: "points-list"
    }, __jsx("li", {
      className: "style-purple-darken"
    }, __jsx("span", {
      className: "badge-circle"
    }, coursework_assigned), __jsx("span", {
      className: "point-text"
    }, "coursework assigned")), __jsx("li", {
      className: "style-purple-lighten"
    }, __jsx("span", {
      className: "badge-circle"
    }, coursework_completed, "%"), __jsx("span", {
      className: "point-text"
    }, "coursework completed")), __jsx("li", {
      className: "style-red-darken-3"
    }, __jsx("span", {
      className: "badge-circle"
    }, problems_flagged_review), __jsx("span", {
      className: "point-text"
    }, "problems \uFB02agged for review")), __jsx("li", {
      className: "style-blue-light"
    }, __jsx("span", {
      className: "badge-circle"
    }, average_score), __jsx("span", {
      className: "point-text"
    }, "average score")), __jsx("li", {
      className: "style-blue"
    }, __jsx("span", {
      className: "badge-circle"
    }, achieved_target_score, "%"), __jsx("span", {
      className: "point-text"
    }, "achieved target score")), __jsx("li", {
      className: "style-orange-accent-4"
    }, __jsx("span", {
      className: "badge-circle"
    }, average_practice_tests_completed), __jsx("span", {
      className: "point-text"
    }, "average practice tests completed"))))), __jsx("div", {
      className: "card-inner-row"
    }, __jsx("div", {
      className: "row-holder"
    }, __jsx("ul", {
      className: "category-list"
    }, __jsx("li", {
      className: "category-box "
    }, __jsx("span", {
      className: "category-badge badge-purple"
    }, "TW"), __jsx("span", {
      className: "category-text"
    }, "Tutor Withalongername")))))))));
  }

}

ClassCard.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  classroom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onHandleClassCard: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloneClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onDeleteClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSaveClassChanges: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassCard);

/***/ }),

/***/ "./components/Classes/ListPage/components/ClassDetailModal/index.js":
/*!**************************************************************************!*\
  !*** ./components/Classes/ListPage/components/ClassDetailModal/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SharedModalComponents/AccountInfo */ "./components/Classes/ListPage/components/SharedModalComponents/AccountInfo/index.js");
/* harmony import */ var _SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SharedModalComponents/ContactInfo */ "./components/Classes/ListPage/components/SharedModalComponents/ContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SharedModalComponents/Locations */ "./components/Classes/ListPage/components/SharedModalComponents/Locations/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










class ClassDetailModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentWillReceiveProps", nextProps => {
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
        const originalClassRoom = immutability_helper__WEBPACK_IMPORTED_MODULE_5___default()(originalClassRoomState, {
          $merge: nextProps.classroom
        });
        this.setState({
          originalClassRoom,
          updatedClassRoom
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name, section) => {
      const value = event.target ? event.target.value : event;
      const updatedClassRoom = immutability_helper__WEBPACK_IMPORTED_MODULE_5___default()(this.state.updatedClassRoom, {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialClassRoomMount", () => this.state.originalClassRoom.id !== this.props.classroom.id);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderModalHeader", () => {
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

      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h4", {
        className: "h3"
      }, lastName, ", ", firstName), __jsx("a", {
        href: `mailto:${email}`
      }, email));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", async event => {
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

      const valid = await Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_10__["nestedEditFieldValidation"])(this.state, this.state.updatedClassRoom, this.onSetValidation, validation => console.warn('validation', validation));

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCancelChanges", () => {
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
    const originalClassRoom = immutability_helper__WEBPACK_IMPORTED_MODULE_5___default()(originalClassRoomState, {
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-2557376288" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onOuterClick: this.onCancelChanges,
      nestedModals: deleteModalOpen || deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen
    }, __jsx("div", {
      id: "modal_user_edit",
      className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
    }, __jsx("div", {
      style: {
        backgroundColor: "#31837a",
        color: "#fff"
      },
      className: "jsx-2557376288" + " " + "owner-box card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "col s9"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "user-block"
    }, __jsx("div", {
      style: {
        backgroundColor: "#0085ce",
        color: "#fff"
      },
      className: "jsx-2557376288" + " " + "user-circle"
    }, __jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "",
      className: "jsx-2557376288"
    })), __jsx("div", {
      style: {
        color: "#fff"
      },
      className: "jsx-2557376288" + " " + "user-text"
    }, this.renderModalHeader()))), __jsx("div", {
      style: {
        textAlign: "right"
      },
      className: "jsx-2557376288" + " " + "col"
    }, __jsx("span", {
      className: "jsx-2557376288" + " " + "block-icon"
    }, __jsx("i", {
      className: "jsx-2557376288" + " " + "icon-owner"
    }), __jsx("span", {
      className: "jsx-2557376288" + " " + "text-icon"
    }, "Owner"))))), __jsx("div", {
      className: "jsx-2557376288" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "col s12 l6"
    }, __jsx(_SharedModalComponents_AccountInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      state: this.initialClassRoomMount() ? accountInfo : updatedAccountInfo,
      handleDetailsChange: this.handleDetailsChange
    }), __jsx(_SharedModalComponents_ContactInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: this.initialClassRoomMount() ? contactInfo : updatedContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), __jsx("div", {
      className: "jsx-2557376288" + " " + "col s12 l6"
    }, __jsx(_SharedModalComponents_Locations__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    })))), __jsx("div", {
      className: "jsx-2557376288" + " " + "modal-footer"
    }, __jsx("a", {
      href: "#",
      onClick: () => onDeleteClass(index),
      className: "jsx-2557376288" + " " + "waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Delete"), __jsx("a", {
      href: "#",
      onClick: this.onCancelChanges,
      className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2557376288" + " " + "btn"
    }, "Save"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2557376288"
    }, ".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-2557376288{margin:0;border-radius:6px;}.modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2557376288{opacity:1;visibility:visible;}.modal-footer.jsx-2557376288{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0NsYXNzZXMvTGlzdFBhZ2UvY29tcG9uZW50cy9DbGFzc0RldGFpbE1vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlTVyxBQUdnQyxBQVNOLEFBSUssQUFTSixBQUlhLFNBaEJMLENBYUMsSUFUSSxDQWJhLFFBMEJ0QyxJQWhCQSxFQWFBLFFBVG9CLFdBYlosTUFDRSxDQWFBLE9BWkMsQ0FhQyxRQVpILEVBYUUsS0FaSSxJQWEyRyxTQVoxSCxvR0FhQSIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9DbGFzc2VzL0xpc3RQYWdlL2NvbXBvbmVudHMvQ2xhc3NEZXRhaWxNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uLy4uLy4uLy4uL1BvcnRhbFwiO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IEFjY291bnRJbmZvIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9BY2NvdW50SW5mbyc7XG5pbXBvcnQgQ29udGFjdEluZm8gZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0NvbnRhY3RJbmZvJztcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9ucyc7XG5cbmltcG9ydCB7IG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuXG5cblxuY2xhc3MgQ2xhc3NEZXRhaWxNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkZWxldGVMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsXG4gICAgICBuZXdMb2NhdGlvbk1vZGFsT3BlbjogZmFsc2UsXG4gICAgICBlZGl0TG9jYXRpb25Nb2RhbE9wZW46IGZhbHNlLFxuICAgICAgcGVuZGluZ0xvY2F0aW9uRGVsZXRlOiB7fSxcbiAgICAgIGFjdGl2ZUxvY2F0aW9uOiB7fSxcbiAgICAgIGRyb3Bkb3duSXNPcGVuOiBmYWxzZSxcbiAgICAgIGRyb3Bkb3duSW5kZXg6IG51bGwsXG4gICAgICBvcmlnaW5hbENsYXNzUm9vbToge1xuICAgICAgICBzdW1tYXJ5OntcbiAgICAgICAgICBhbW91bnRfc3R1ZGVudHM6JycsXG4gICAgICAgICAgc3RhcnRfZGF0ZTonJyxcbiAgICAgICAgICBlbmRfZGF0ZTonJyxcbiAgICAgICAgICBpbXByb3ZlbWVudDowLFxuICAgICAgICAgIGNvdXJzZXdvcmtfYXNzaWduZWQ6MCxcbiAgICAgICAgICBjb3Vyc2V3b3JrX2NvbXBsZXRlZDowLFxuICAgICAgICAgIHByb2JsZW1zX2ZsYWdnZWRfcmV2aWV3OjAsXG4gICAgICAgICAgYXZlcmFnZV9zY29yZTowLFxuICAgICAgICAgIGFjaGlldmVkX3RhcmdldF9zY29yZTowLFxuICAgICAgICAgIGF2ZXJhZ2VfcHJhY3RpY2VfdGVzdHNfY29tcGxldGVkOjAsXG4gICAgICAgICAgaW5zdHJ1Y3Rpb246MCxcbiAgICAgICAgfSxcbiAgICAgICAgYWNjb3VudEluZm86IHtcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdEluZm86IHtcbiAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgIHppcDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uczogW10sXG4gICAgICB9LFxuICAgICAgdXBkYXRlZENsYXNzUm9vbToge1xuICAgICAgICBzdW1tYXJ5OntcbiAgICAgICAgICBhbW91bnRfc3R1ZGVudHM6JycsXG4gICAgICAgICAgc3RhcnRfZGF0ZTonJyxcbiAgICAgICAgICBlbmRfZGF0ZTonJyxcbiAgICAgICAgICBpbXByb3ZlbWVudDowLFxuICAgICAgICAgIGNvdXJzZXdvcmtfYXNzaWduZWQ6MCxcbiAgICAgICAgICBjb3Vyc2V3b3JrX2NvbXBsZXRlZDowLFxuICAgICAgICAgIHByb2JsZW1zX2ZsYWdnZWRfcmV2aWV3OjAsXG4gICAgICAgICAgYXZlcmFnZV9zY29yZTowLFxuICAgICAgICAgIGFjaGlldmVkX3RhcmdldF9zY29yZTowLFxuICAgICAgICAgIGF2ZXJhZ2VfcHJhY3RpY2VfdGVzdHNfY29tcGxldGVkOjAsXG4gICAgICAgICAgaW5zdHJ1Y3Rpb246MCxcbiAgICAgICAgfSxcbiAgICAgICAgYWNjb3VudEluZm86IHtcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdEluZm86IHtcbiAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgIHppcDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uczogW10sXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBhY2NvdW50SW5mbzoge1xuICAgICAgICAgIGZpcnN0TmFtZTogdHJ1ZSxcbiAgICAgICAgICBsYXN0TmFtZTogdHJ1ZSxcbiAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICBnZW5kZXI6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY2xhc3Nyb29tOiB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zLHN1bW1hcnkgfSA9IHt9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVwZGF0ZWRDbGFzc1Jvb20gPSB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zLHN1bW1hcnkgfTtcbiAgICBjb25zdCB7IG9yaWdpbmFsQ2xhc3NSb29tOiBvcmlnaW5hbENsYXNzUm9vbVN0YXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG9yaWdpbmFsQ2xhc3NSb29tID0gdXBkYXRlKG9yaWdpbmFsQ2xhc3NSb29tU3RhdGUsIHskbWVyZ2U6IHVwZGF0ZWRDbGFzc1Jvb219KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3JpZ2luYWxDbGFzc1Jvb20sIHVwZGF0ZWRDbGFzc1Jvb20gfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuXG4gIC8vIFRoaXMgcmVzZXRzIHRoZSBjb21wb25lbnQgc3RhdGUgdG8gcmVmbGVjdCB0aGUgZGV0YWlscyBvZiB0aGUgbmV4dCBjbGFzc3Jvb20gdGhlIHVzZXIgY2xpY2tzIG9uXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKCghdGhpcy5zdGF0ZS5vcmlnaW5hbENsYXNzUm9vbSB8fCBuZXh0UHJvcHMuY2xhc3Nyb29tLmlkICE9PSB0aGlzLnN0YXRlLm9yaWdpbmFsQ2xhc3NSb29tLmlkKSkge1xuICAgICAgY29uc3QgeyBjbGFzc3Jvb206IHsgaWQsIGJhc2ljSW5mbywgYWNjb3VudEluZm8sIGNvbnRhY3RJbmZvLCBsb2NhdGlvbnMsc3VtbWFyeSB9ID0ge30gfSA9IG5leHRQcm9wcztcbiAgICAgIGNvbnN0IHVwZGF0ZWRDbGFzc1Jvb20gPSB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zLHN1bW1hcnkgfTtcbiAgICAgIGNvbnN0IHsgb3JpZ2luYWxDbGFzc1Jvb206IG9yaWdpbmFsQ2xhc3NSb29tU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBvcmlnaW5hbENsYXNzUm9vbSA9IHVwZGF0ZShvcmlnaW5hbENsYXNzUm9vbVN0YXRlLCB7XG4gICAgICAgICRtZXJnZTogbmV4dFByb3BzLmNsYXNzcm9vbSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yaWdpbmFsQ2xhc3NSb29tLCB1cGRhdGVkQ2xhc3NSb29tIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHB1bGwgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBmaWVsZCB0eXBlIHRoZW4gbWVyZ2UgdGhhdCB1cGRhdGVkIGtleS92YWx1ZSBwYWlyIHdpdGggdGhlIGxhc3QgdmVyc2lvbiBvZiBjb21wb25lbnQgc3RhdGVcbiAgaGFuZGxlRGV0YWlsc0NoYW5nZSA9IChldmVudCwgbmFtZSwgc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiBldmVudDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDbGFzc1Jvb20gPSB1cGRhdGUodGhpcy5zdGF0ZS51cGRhdGVkQ2xhc3NSb29tLCB7XG4gICAgICAgIFtzZWN0aW9uXTogeyAkbWVyZ2U6IHsgW25hbWVdOiB2YWx1ZSB9IH0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VwZGF0ZWRDbGFzc1Jvb219KTtcbiAgfVxuXG4gIGluaXRpYWxDbGFzc1Jvb21Nb3VudCA9ICgpID0+IHRoaXMuc3RhdGUub3JpZ2luYWxDbGFzc1Jvb20uaWQgIT09IHRoaXMucHJvcHMuY2xhc3Nyb29tLmlkO1xuXG4gIHJlbmRlck1vZGFsSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3Nyb29tOiB7IGFjY291bnRJbmZvOiB7IGxhc3ROYW1lOiBpbml0aWFsTGFzdE5hbWUsIGZpcnN0TmFtZTogaW5pdGlhbEZJcnN0TmFtZSwgZW1haWw6IGluaXRpYWxFbWFpbCB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1cGRhdGVkQ2xhc3NSb29tOiB7IGFjY291bnRJbmZvOiB7IGxhc3ROYW1lOiB1cGRhdGVkTGFzdE5hbWUsIGZpcnN0TmFtZTogdXBkYXRlZEZpcnN0TmFtZSwgZW1haWw6IHVwZGF0ZWRFbWFpbCB9IH0gfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGxhc3ROYW1lO1xuICAgIGxldCBmaXJzdE5hbWU7XG4gICAgbGV0IGVtYWlsO1xuICAgIGlmICh0aGlzLmluaXRpYWxDbGFzc1Jvb21Nb3VudCgpKSB7XG4gICAgICBsYXN0TmFtZSA9IGluaXRpYWxMYXN0TmFtZTtcbiAgICAgIGZpcnN0TmFtZSA9IGluaXRpYWxGSXJzdE5hbWU7XG4gICAgICBlbWFpbCA9IGluaXRpYWxFbWFpbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdE5hbWUgPSB1cGRhdGVkTGFzdE5hbWU7XG4gICAgICBmaXJzdE5hbWUgPSB1cGRhdGVkRmlyc3ROYW1lO1xuICAgICAgZW1haWwgPSB1cGRhdGVkRW1haWw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJoM1wiPntsYXN0TmFtZX0sIHtmaXJzdE5hbWV9PC9oND5cbiAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2VtYWlsfWB9PntlbWFpbH08L2E+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbnRvIG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZU5ld0xvY2F0aW9uIHBhc3NlZCBkb3duIGZyb20gdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB1cGRhdGVkQ2xhc3NSb29tOiB7IGlkLCBiYXNpY0luZm8sIGFjY291bnRJbmZvLCBjb250YWN0SW5mbywgbG9jYXRpb25zLHN1bW1hcnkgfSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9uU2F2ZUxvY2F0aW9uRXJyb3IsIG9uU2F2ZUNsYXNzQ2hhbmdlcywgb25DbG9zZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBOT1RFOiBTd2FwIG91dCB3aGF0IGluc3RhbmNlIG9mIHZhbGlkIGlzIGFjdGl2ZSBpZiB5b3Ugd2FudCB0byB0ZXN0IHNhdmluZyBhIG5ldyBsb2NhdGlvbiB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHZhbGlkYXRpb25cbiAgICAvLyBjb25zdCB2YWxpZCA9IHRydWU7XG4gICAgY29uc3QgdmFsaWQgPSBhd2FpdCBuZXN0ZWRFZGl0RmllbGRWYWxpZGF0aW9uKHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUudXBkYXRlZENsYXNzUm9vbSwgdGhpcy5vblNldFZhbGlkYXRpb24sICh2YWxpZGF0aW9uKSA9PiBjb25zb2xlLndhcm4oJ3ZhbGlkYXRpb24nLCB2YWxpZGF0aW9uKSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgLy8gcmV0dXJuIG9uU2F2ZUxvY2F0aW9uRXJyb3IoKTtcbiAgICAgIGNvbnNvbGUud2Fybignbm90IHZhbGlkJyk7XG4gICAgfVxuICAgIGNvbnN0IHBvc3RCb2R5ID0geyBpZCwgYmFzaWNJbmZvLCBhY2NvdW50SW5mbywgY29udGFjdEluZm8sIGxvY2F0aW9ucyxzdW1tYXJ5IH07XG4gICAgb25TYXZlQ2xhc3NDaGFuZ2VzKHBvc3RCb2R5KTtcbiAgICBvbkNsb3NlKCk7XG4gIH1cblxuICBvbkNhbmNlbENoYW5nZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3JpZ2luYWxDbGFzc1Jvb20gfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0ZWRDbGFzc1Jvb206IG9yaWdpbmFsQ2xhc3NSb29tIH0sIG9uQ2xvc2UoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuLG9uT3BlbkRlbGV0ZU1vZGFsLG9uRGVsZXRlQ2xhc3MsIGRlbGV0ZU1vZGFsT3BlbixpbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRyb3Bkb3duSXNPcGVuLCBkcm9wZG93bkluZGV4LCBhY3RpdmVMb2NhdGlvbiwgZGVsZXRlTG9jYXRpb25Nb2RhbE9wZW4sIHBlbmRpbmdMb2NhdGlvbkRlbGV0ZSwgbmV3TG9jYXRpb25Nb2RhbE9wZW4sIGVkaXRMb2NhdGlvbk1vZGFsT3BlbixcbiAgICAgIHVwZGF0ZWRDbGFzc1Jvb206IHthY2NvdW50SW5mbzogdXBkYXRlZEFjY291bnRJbmZvLCBjb250YWN0SW5mbzogdXBkYXRlZENvbnRhY3RJbmZvLCBsb2NhdGlvbnM6IHVwZGF0ZWRMb2NhdGlvbnN9LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxDbGlja09mZkNvbXBvbmVudFdyYXBwZXJcbiAgICAgICAgICAgICAgb25PdXRlckNsaWNrPXt0aGlzLm9uQ2FuY2VsQ2hhbmdlc31cbiAgICAgICAgICAgICAgbmVzdGVkTW9kYWxzPXsgZGVsZXRlTW9kYWxPcGVuIHx8IGRlbGV0ZUxvY2F0aW9uTW9kYWxPcGVuIHx8IGVkaXRMb2NhdGlvbk1vZGFsT3BlbiB8fCBuZXdMb2NhdGlvbk1vZGFsT3BlbiB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cIm1vZGFsX3VzZXJfZWRpdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWN1c3RvbS1sYXJnZSBtb2RhbC1ncmF5XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBncmV5IGxpZ2h0ZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvd25lci1ib3ggY2FyZC1wYW5lbCBjYXJkLXBhbmVsLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzMTgzN2FcIiwgY29sb3I6IFwiI2ZmZlwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwODVjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9pbWctb3duZXIwMS5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRleHRcIiBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTW9kYWxIZWFkZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLW93bmVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWljb25cIj5Pd25lcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIGw2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXsgdGhpcy5pbml0aWFsQ2xhc3NSb29tTW91bnQoKT8gYWNjb3VudEluZm86IHVwZGF0ZWRBY2NvdW50SW5mbyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxDbGFzc1Jvb21Nb3VudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29udGFjdEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1cGRhdGVkQ29udGFjdEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXsgdGhpcy5pbml0aWFsQ2xhc3NSb29tTW91bnQoKT8gbG9jYXRpb25zIDogdXBkYXRlZExvY2F0aW9ucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSXNPcGVuPXtkcm9wZG93bklzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkluZGV4PXtkcm9wZG93bkluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxvY2F0aW9uPXthY3RpdmVMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVMb2NhdGlvbk1vZGFsT3Blbj17ZGVsZXRlTG9jYXRpb25Nb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0xvY2F0aW9uRGVsZXRlPXtwZW5kaW5nTG9jYXRpb25EZWxldGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TG9jYXRpb25Nb2RhbE9wZW49e25ld0xvY2F0aW9uTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRMb2NhdGlvbk1vZGFsT3Blbj17ZWRpdExvY2F0aW9uTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0RHJvcGRvd249e3RoaXMub25TZXREcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlRHJvcGRvd249e3RoaXMub25DbG9zZURyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbk5ld0xvY2F0aW9uTW9kYWw9e3RoaXMub25PcGVuTmV3TG9jYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5FZGl0TG9jYXRpb25Nb2RhbD17IHRoaXMub25PcGVuRWRpdExvY2F0aW9uTW9kYWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VOZXdMb2NhdGlvbk1vZGFsPXsgdGhpcy5vbkNsb3NlTmV3TG9jYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlRWRpdExvY2F0aW9uTW9kYWw9eyB0aGlzLm9uQ2xvc2VFZGl0TG9jYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5EZWxldGVMb2NhdGlvbk1vZGFsPXsgdGhpcy5vbk9wZW5EZWxldGVMb2NhdGlvbk1vZGFsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlRGVsZXRlTG9jYXRpb25Nb2RhbD17IHRoaXMub25DbG9zZURlbGV0ZUxvY2F0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlQ2xhc3MoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNhbmNlbENoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBncmV5LXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5vblN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jYXJkLW1vZGFsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkNsYXNzRGV0YWlsTW9kYWwucHJvcFR5cGVzID0ge1xuICBpbmRleDpQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRlbGV0ZU1vZGFsT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25PcGVuRGVsZXRlTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzcm9vbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblNhdmVDbGFzc0NoYW5nZXM6UHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzRGV0YWlsTW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Classes/ListPage/components/ClassDetailModal/index.js */"));
  }

}

ClassDetailModal.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  deleteModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onOpenDeleteModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  classroom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  onSaveClassChanges: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassDetailModal);

/***/ }),

/***/ "./components/Classes/ListPage/components/FilterSection/index.js":
/*!***********************************************************************!*\
  !*** ./components/Classes/ListPage/components/FilterSection/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_locationOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/locationOptions */ "./components/utils/locationOptions.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/sortOptions */ "./components/utils/sortOptions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHandleFilterClick", filter => {
      const {
        activeFilters: currentActiveFilters
      } = this.state;
      let activeFilters;

      if (currentActiveFilters.indexOf(filter) === -1) {
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(currentActiveFilters, {
          $push: [filter]
        });
      } else {
        const filterIndex = currentActiveFilters.indexOf(filter);
        activeFilters = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(currentActiveFilters, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        activeFilters
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterChange", (event, name) => {
      const {
        onSetFilteredLocationState,
        onUnsetFilteredLocationState,
        onSetSort
      } = this.props;
      const value = event.target ? event.target.value : event;
      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(this.state, {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submitNameFilter", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClearFilters", () => this.setState({
      activeFilters: []
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleShowFilters", () => this.setState(({
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
    return __jsx("div", {
      className: "filter-form-holder"
    }, __jsx("ul", {
      className: "collapsible expandable"
    }, __jsx("li", null, __jsx("div", {
      className: "collapsible-body",
      style: open ? {
        display: "block"
      } : {
        display: "none"
      }
    }, __jsx("div", {
      className: "filter-form_checkbox-list-holder justify-center"
    }, __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "sessions_this_week",
      checked: activeFilters.indexOf("sessions_this_week") !== -1,
      onChange: () => this.onHandleFilterClick("sessions_this_week")
    }), __jsx("label", {
      htmlFor: "sessions_this_week"
    }, "Sessions This Week")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "session_today",
      checked: activeFilters.indexOf("session_today") !== -1,
      onChange: () => this.onHandleFilterClick("session_today")
    }), __jsx("label", {
      htmlFor: "session_today"
    }, "Session Today")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "sessions_no",
      checked: activeFilters.indexOf("sessions_no") !== -1,
      onChange: () => this.onHandleFilterClick("sessions_no")
    }), __jsx("label", {
      htmlFor: "sessions_no"
    }, "No Sessions Scheduled"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "gain_no",
      checked: activeFilters.indexOf("gain_no") !== -1,
      onChange: () => this.onHandleFilterClick("gain_no")
    }), __jsx("label", {
      htmlFor: "gain_no"
    }, "No Gain")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "gain_0_49",
      checked: activeFilters.indexOf("gain_0_49") !== -1,
      onChange: () => this.onHandleFilterClick("gain_0_49")
    }), __jsx("label", {
      htmlFor: "gain_0_49"
    }, "Gain of 0-49")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "gain_50_100",
      checked: activeFilters.indexOf("gain_50_100") !== -1,
      onChange: () => this.onHandleFilterClick("gain_50_100")
    }), __jsx("label", {
      htmlFor: "gain_50_100"
    }, "Gain of 50-100")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "gain_100_199",
      checked: activeFilters.indexOf("gain_100_199") !== -1,
      onChange: () => this.onHandleFilterClick("gain_100_199")
    }), __jsx("label", {
      htmlFor: "gain_100_199"
    }, "Gain of 100-199")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "gain_200",
      checked: activeFilters.indexOf("gain_200") !== -1,
      onChange: () => this.onHandleFilterClick("gain_200")
    }), __jsx("label", {
      htmlFor: "gain_200"
    }, "Gain of 200+"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "current",
      checked: activeFilters.indexOf("current") !== -1,
      onChange: () => this.onHandleFilterClick("current")
    }), __jsx("label", {
      htmlFor: "current"
    }, "Current")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "archived",
      checked: activeFilters.indexOf("archived") !== -1,
      onChange: () => this.onHandleFilterClick("archived")
    }), __jsx("label", {
      htmlFor: "archived"
    }, "Archived")))), __jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__["default"])(location, _utils_locationOptions__WEBPACK_IMPORTED_MODULE_6__["default"]),
      onChange: event => this.handleFilterChange(event, 'location'),
      options: _utils_locationOptions__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: "Location",
      stateKey: "location",
      dropdownKey: "location"
    }))), __jsx("div", {
      className: "col s12 m3"
    }, __jsx("div", {
      className: "search-field input-field",
      style: {
        marginTop: "50px"
      }
    }, __jsx("input", {
      type: "search",
      id: "name_search",
      className: "input-control  validate"
    }), __jsx("button", {
      type: "submit",
      className: "search-button",
      onClick: this.submitNameFilter
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: "label",
      htmlFor: "name_search"
    }, "Search"))))), __jsx("div", {
      className: "row mb-0 d-flex align-items-center"
    }, __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "col s12 xl7"
    }, __jsx("div", {
      className: "input-field"
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_5__["default"])(sort, _utils_sortOptions__WEBPACK_IMPORTED_MODULE_7__["default"]),
      onChange: event => this.handleFilterChange(event, 'sort'),
      options: _utils_sortOptions__WEBPACK_IMPORTED_MODULE_7__["default"],
      label: "Sort",
      stateKey: "sort",
      dropdownKey: "sort"
    }))))), __jsx("div", {
      className: "col s12 l4 hide-on-med-and-down show-on-large"
    }, "\xA0"), __jsx("div", {
      className: "col s12 l4"
    }, __jsx("div", {
      className: "option-filters",
      style: {
        marginTop: "50px"
      }
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
    }, open ? "Hide Filters" : "Open Filters")))))))));
  }

}

FilterSection.propTyes = {
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredLocationState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredLocationState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Classes/ListPage/components/SharedModalComponents/AccountInfo/index.js":
/*!*******************************************************************************************!*\
  !*** ./components/Classes/ListPage/components/SharedModalComponents/AccountInfo/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/genderOptions */ "./components/utils/genderOptions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






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
}, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
  value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(gender, _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
  onChange: event => handleDetailsChange(event, 'gender', 'accountInfo'),
  options: _utils_genderOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
  label: "Gender*",
  stateKey: "gender",
  dropdownKey: "gender"
})))))));

AccountInfo.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AccountInfo);

/***/ }),

/***/ "./components/Classes/ListPage/components/SharedModalComponents/ContactInfo/index.js":
/*!*******************************************************************************************!*\
  !*** ./components/Classes/ListPage/components/SharedModalComponents/ContactInfo/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/stateOptions */ "./components/utils/stateOptions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ContactInfo = ({
  state: {
    phone,
    streetAddress,
    city,
    state,
    zip
  },
  handleDetailsChange
}) => __jsx("div", {
  className: "card-block"
}, __jsx("h3", null, "Contact Info"), __jsx("div", {
  className: "card-main card"
}, __jsx("div", {
  className: "card-content"
}, __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "tel",
  id: "contact_phone_edit",
  name: "phone",
  value: phone,
  onChange: event => handleDetailsChange(event, 'phone', 'contactInfo')
}), __jsx("label", {
  className: phone.length ? 'label active' : 'label',
  htmlFor: "contact_phone_edit"
}, "Phone (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "contact_address_edit",
  name: "streetAddress",
  value: streetAddress,
  onChange: event => handleDetailsChange(event, 'streetAddress', 'contactInfo')
}), __jsx("label", {
  className: streetAddress.length ? 'label active' : 'label',
  htmlFor: "contact_address_edit"
}, "Street Address (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "input-field col s12"
}, __jsx("input", {
  type: "text",
  id: "contact_city_edit",
  name: "city",
  value: city,
  onChange: event => handleDetailsChange(event, 'city', 'contactInfo')
}), __jsx("label", {
  className: city.length ? 'label active' : 'label',
  htmlFor: "contact_city_edit"
}, "City (optional)"))), __jsx("div", {
  className: "row mb-0"
}, __jsx("div", {
  className: "col s12 m6 l5"
}, __jsx("div", {
  className: "input-field"
}, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
  value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(state, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
  onChange: event => handleDetailsChange(event, 'state', 'contactInfo'),
  options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
  label: "State (optional)",
  stateKey: "state",
  dropdownKey: "state"
}))), __jsx("div", {
  className: "col s12 m6 l7"
}, __jsx("div", {
  className: "input-field"
}, __jsx("input", {
  type: "tel",
  id: "contact_zip_edit",
  name: "zip",
  value: zip,
  onChange: event => handleDetailsChange(event, 'zip', 'contactInfo')
}), __jsx("label", {
  className: zip.length ? 'label active' : 'label',
  htmlFor: "contact_zip_edit"
}, "Zip (optional)")))))));

ContactInfo.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ContactInfo);

/***/ }),

/***/ "./components/Classes/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js":
/*!****************************************************************************************************************!*\
  !*** ./components/Classes/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



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
}) => __jsx("div", {
  className: "card-main card-location card card-large"
}, __jsx("div", {
  className: "card-panel card-panel-location",
  style: {
    backgroundColor: '#62b771',
    color: '#fff'
  }
}, __jsx("div", {
  className: "card-panel-row row"
}, __jsx("div", {
  className: "col s9"
}, __jsx("h3", {
  className: "h4 truncate"
}, locationName), __jsx("h4", {
  className: "sub-title"
}, locationNickname)), __jsx("div", {
  className: "col s3"
}, __jsx("div", {
  className: "row icons-row"
}, __jsx("div", {
  className: "col"
}, __jsx("span", {
  className: "block-icon"
}, __jsx("i", {
  className: "icon-location"
}), __jsx("span", {
  className: "text-icon"
}, "Location"))), __jsx("div", {
  className: "dropdown-block col"
}, __jsx("a", {
  href: "#",
  onClick: event => handleDropdownClick(event, index),
  className: "dropdown-trigger btn",
  "data-target": "dropdown105"
}, __jsx("i", {
  className: "material-icons dots-icon"
}, "more_vert")), dropdownIsOpen && dropdownIndex === index ? __jsx("ul", {
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
}, __jsx("li", null, __jsx("a", {
  href: "#",
  onClick: onOpenEditLocationModal,
  className: "modal-trigger link-block"
}, "Edit")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Clone")), __jsx("li", null, __jsx("a", {
  href: "#",
  onClick: onOpenDeleteModal
}, "Delete"))) : null))))));

LocationRow.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  handleDropdownClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenDeleteModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenEditLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationRow);

/***/ }),

/***/ "./components/Classes/ListPage/components/SharedModalComponents/Locations/index.js":
/*!*****************************************************************************************!*\
  !*** ./components/Classes/ListPage/components/SharedModalComponents/Locations/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../Modal */ "./components/Modal/index.js");
/* harmony import */ var _Location_components_NewLocationModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../Location/components/NewLocationModal */ "./components/Location/components/NewLocationModal/index.js");
/* harmony import */ var _Location_components_LocationDetailsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Location/components/LocationDetailsModal */ "./components/Location/components/LocationDetailsModal/index.js");
/* harmony import */ var _components_LocationRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/LocationRow */ "./components/Classes/ListPage/components/SharedModalComponents/Locations/components/LocationRow/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");
/* harmony import */ var _Location_utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../Location/utils/sampleLocationList */ "./components/Location/utils/sampleLocationList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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

class Locations extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetLocationValidation", locationValidation => this.setState({
      locationValidation
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSaveNewLocation", ({
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
      const locations = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(this.state.locations, {
        $push: [newLocation]
      });
      this.setState({
        locations
      });
      Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__["saveNewSuccess"])('location');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSaveLocationChanges", ({
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
      const updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(locationToUpdate, {
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
      const locations = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(originalLocations, {
        $splice: [[updatedLocationIndex, 1, updatedLocation]]
      });
      Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__["saveChangesSuccess"])();
      this.setState({
        locations
      });
      onCloseDropdown();
      return this.onCloseEditLocationModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onConfirmDeleteLocation", () => {
      const {
        pendingLocationDelete,
        onCloseDeleteLocationModal
      } = this.props;
      this.onDeleteLocation(pendingLocationDelete);
      onCloseDeleteLocationModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDeleteLocation", deletedLocation => {
      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(this.state, {
        locations: unfilteredLocations => unfilteredLocations.filter(location => location.id !== deletedLocation.id)
      });
      this.setState({
        locations: updatedState.locations
      });
      this.props.onCloseDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", (event, index) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapUserLocations", () => this.state.locations.map((location, index) => __jsx(_components_LocationRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      locations: _Location_utils_sampleLocationList__WEBPACK_IMPORTED_MODULE_9__["default"],
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      open: deleteLocationModalOpen,
      onConfirm: this.onConfirmDeleteLocation,
      onClose: onCloseDeleteLocationModal,
      header: "Are You Sure?",
      body: "Deleting this location will be permanent"
    }), __jsx(_Location_components_NewLocationModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      fromInstructorPage: true,
      open: newLocationModalOpen,
      onClose: onCloseNewLocationModal,
      onSaveNewLocation: this.onSaveNewLocation,
      onSaveLocationError: () => Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__["saveNewError"])(this.state.locationValidation, validationFieldMap),
      onSetLocationValidation: this.onSetLocationValidation
    }), __jsx(_Location_components_LocationDetailsModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      location: activeLocation,
      open: editLocationModalOpen,
      onClose: onCloseEditLocationModal,
      onSaveLocationError: () => Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_8__["saveNewError"])(this.state.locationValidation, validationFieldMap),
      onSetLocationValidation: this.onSetLocationValidation,
      onSaveLocationChanges: this.onSaveLocationChanges
    }), __jsx("div", {
      className: "card-block"
    }, __jsx("h3", null, "Location(s)"), this.mapUserLocations(), __jsx("div", {
      className: "add-box"
    }, __jsx("div", {
      className: "add-box-holder"
    }, __jsx("a", {
      href: "#",
      onClick: onOpenNewLocationModal,
      className: "btn-floating waves-effect waves-light green lighten-1"
    }, __jsx("i", {
      className: "material-icons"
    }, "add"))))));
  }

}

Locations.propTypes = {
  activeLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  newLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  editLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  pendingLocationDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  deleteLocationModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onOpenNewLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseNewLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onOpenEditLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseEditLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onOpenDeleteLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseDeleteLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Locations);

/***/ }),

/***/ "./components/Classes/ListPage/index.js":
/*!**********************************************!*\
  !*** ./components/Classes/ListPage/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ClassCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ClassCard */ "./components/Classes/ListPage/components/ClassCard/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Classes/ListPage/components/FilterSection/index.js");
/* harmony import */ var _utils_sortFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/sortFunctions */ "./components/utils/sortFunctions.js");
/* harmony import */ var _ClassModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ClassModal */ "./components/Classes/ClassModal/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class ListPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredLocationState", filterLocation => this.setState({
      classesAreFiltered: true,
      filterLocation
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredLocationState", () => this.setState({
      filterLocation: ""
    }, this.checkForFilteredState));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIsOpen: true,
      dropdownIndex
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false,
      dropdownIndex: null
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloneClass", index => {
      const {
        onCloneClass
      } = this.props;
      this.onCloseDropdown();
      onCloneClass(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDeleteClass", index => {
      const {
        onDeleteClass
      } = this.props;
      this.onCloseDropdown();
      onDeleteClass(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkForFilteredState", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenClassModal", event => {
      event.preventDefault();
      this.setState({
        classModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredState", filterName => this.setState({
      classesAreFiltered: true,
      filterName
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredState", () => this.setState({
      classesAreFiltered: false,
      filterName: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByName", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByLocation", (preFilteredClasses = []) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSortClasses", classes => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'firstNameAscending':
          return classes.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_5__["firstNameAscending"]);

        case 'firstNameDescending':
          return classes.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_5__["firstNameDescending"]);

        case 'lastNameAscending':
          return classes.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_5__["lastNameAscending"]);

        case 'lastNameDescending':
          return classes.sort(_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_5__["lastNameDescending"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getMappableClasses", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseClassModal", () => this.setState({
      classModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapClassCards", () => {
      const classes = this.getMappableClasses();
      return classes.map((item, index) => __jsx(_components_ClassCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    return __jsx("div", null, __jsx("div", {
      className: "title-row card-panel"
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
    }, "< Classes"))), __jsx("h2", {
      className: "h1 white-text"
    }, __jsx("span", {
      className: "heading-holder"
    }, __jsx("i", {
      className: "icon-members"
    }), __jsx("span", {
      className: "heading-block"
    }, "Classes")))), __jsx(_components_FilterSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSetSort: this.onSetSort,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState,
      onSetFilteredLocationState: this.onSetFilteredLocationState,
      onUnsetFilteredLocationState: this.onUnsetFilteredLocationState
    }), __jsx("div", {
      className: "content-section"
    }, __jsx("div", {
      className: "container-md"
    }, __jsx("div", {
      className: "result-row center-align"
    }, __jsx("b", {
      className: "result"
    }, "- 23 matches -"))), __jsx("div", {
      className: "row d-flex-content card-width-366"
    }, this.mapClassCards())), __jsx("div", {
      className: "add-btn-block"
    }, __jsx("a", {
      href: "#modal_add_new_class",
      className: "modal-trigger waves-effect waves-teal btn add-btn",
      onClick: () => this.onOpenClassModal(event)
    }, __jsx("i", {
      className: "material-icons"
    }, "add"), " New Class")), __jsx(_ClassModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      open: classModalOpen,
      onClose: this.onCloseClassModal,
      onSave: onSaveNewClass
    }));
  }

}

ListPage.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onHandleClassCard: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloneClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onDeleteClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSaveNewClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSaveClassChanges: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ListPage);

/***/ }),

/***/ "./components/Classes/SharedModalComponents/AccountSettings/index.js":
/*!***************************************************************************!*\
  !*** ./components/Classes/SharedModalComponents/AccountSettings/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class AccountSettings extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    return __jsx("div", {
      className: "card-block"
    }, __jsx("h3", null, "Account Settings"), __jsx("div", {
      className: "card-main card"
    }, __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col s6"
    }, __jsx("div", {
      className: "datepicker-field input-field"
    }, __jsx("i", {
      className: "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "course_start_date",
      selected: start_date,
      onChange: date => handleDetailsChange(date, 'start_date', 'accountInfo'),
      placeholderText: "Course Start Date"
    }))), __jsx("div", {
      className: "col s6"
    }, __jsx("div", {
      className: "datepicker-field input-field"
    }, __jsx("i", {
      className: "icon-calendar"
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "course_end_date",
      selected: end_date,
      onChange: date => handleDetailsChange(date, 'end_date', 'accountInfo'),
      placeholderText: "Course End Date"
    })))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col s12"
    }, __jsx("div", {
      className: "check-holder"
    }, __jsx("p", null, __jsx("label", null, __jsx("input", {
      type: "checkbox",
      className: "filled-in",
      checked: active,
      onChange: event => handleDetailsChange(event, 'active', 'accountInfo', 'checkBox')
    }), __jsx("span", null, "Inactive"))), __jsx("span", {
      className: "card-note"
    }, "Select this option when you no longer want this student to appear on your list of current students. All student data is retained and, by default, included in instructor and global statistics.")))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col s12"
    }, __jsx("div", {
      className: "input-field"
    }, __jsx("select", {
      id: "default_session_duration"
    }, __jsx("option", null, "Use organization default"), __jsx("option", null, "Use organization default"), __jsx("option", null, "Use organization default")), __jsx("label", {
      className: "label",
      htmlFor: "default_session_duration"
    }, "Default Session Duration")))), __jsx("p", null, __jsx("label", {
      className: "label-wrap"
    }, __jsx("input", {
      type: "checkbox",
      className: "filled-in",
      checked: isExclude,
      onChange: event => handleDetailsChange(event, 'isExclude', 'accountInfo', 'checkBox')
    }), __jsx("span", null, "Exclude Class from Performance Statistics"))))));
  }

}

AccountSettings.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AccountSettings);

/***/ }),

/***/ "./components/Classes/SharedModalComponents/ClassInformation/index.js":
/*!****************************************************************************!*\
  !*** ./components/Classes/SharedModalComponents/ClassInformation/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class ClassInformation extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    return __jsx("div", {
      className: "card-block"
    }, __jsx("h3", null, "Class Information"), __jsx("div", {
      className: "card-main card"
    }, __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "row mb-0"
    }, __jsx("div", {
      className: "input-field col s12"
    }, __jsx("input", {
      type: "text",
      id: "class_name",
      value: className,
      onChange: event => handleDetailsChange(event, 'className', 'classInfo')
    }), __jsx("label", {
      className: className.length ? 'label active' : 'label',
      htmlFor: "class_name"
    }, "Class Name"))))));
  }

}

ClassInformation.propTypes = {
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassInformation);

/***/ }),

/***/ "./components/Classes/SharedModalComponents/Instructors/components/InstructorCard/index.js":
/*!*************************************************************************************************!*\
  !*** ./components/Classes/SharedModalComponents/Instructors/components/InstructorCard/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class InstructorCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    return __jsx("div", {
      className: "owner-box card-panel card-panel-panel card-panel-large",
      style: {
        backgroundColor: "#31837a",
        color: "#fff"
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
        backgroundColor: "#0085ce",
        color: "#fff"
      }
    }, __jsx("img", {
      src: "./static/images/img-owner01.jpg",
      alt: "image description"
    })), __jsx("div", {
      className: "user-text",
      style: {
        color: "#fff"
      }
    }, __jsx("h4", {
      className: "h3"
    }, firstName, ", ", lastName), __jsx("a", {
      href: "mailto:jen.ownerly@gmail.com"
    }, email)))), __jsx("div", {
      className: "col s2 right-align"
    }, __jsx("span", {
      className: "block-icon"
    }, __jsx("i", {
      className: "icon-user"
    }), __jsx("span", {
      className: "text-icon"
    }, "Instructor")))));
  }

}

InstructorCard.propTypes = {
  instructor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onRemoveInstructor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InstructorCard);

/***/ }),

/***/ "./components/Classes/SharedModalComponents/Instructors/index.js":
/*!***********************************************************************!*\
  !*** ./components/Classes/SharedModalComponents/Instructors/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_InstructorCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InstructorCard */ "./components/Classes/SharedModalComponents/Instructors/components/InstructorCard/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Instructors extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapInstructors", () => {
      const {
        instructors,
        onRemoveInstructor
      } = this.props;
      return instructors.map((instructor, index) => __jsx(_components_InstructorCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    return __jsx("div", {
      className: "card-block"
    }, __jsx("h3", null, "Instructor(s)"), __jsx("div", {
      className: "card-main card card-instructor"
    }, __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "text-block"
    }, __jsx("p", null, "Add one or more instructors to the list below. Each instructor can manage the coursework.")), __jsx("div", {
      className: "box-scrollable"
    }, __jsx("div", {
      className: "height-360 jcf-scrollable"
    }, __jsx("div", {
      className: "card-location-holder",
      style: {
        height: "320px",
        overflowY: "scroll"
      }
    }, this.mapInstructors()))), __jsx("div", {
      className: "card-footer right-align"
    }, __jsx("a", {
      href: "#modal_Instructor1",
      className: "modal-trigger link-block",
      onClick: onOpenInstructorModal
    }, "Add Instructor")))));
  }

}

Instructors.propTypes = {
  onOpenInstructorModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  instructors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onRemoveInstructor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Instructors);

/***/ }),

/***/ "./components/Classes/SharedModalComponents/Locations/index.js":
/*!*********************************************************************!*\
  !*** ./components/Classes/SharedModalComponents/Locations/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Location_components_LocationCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Location/components/LocationCard */ "./components/Location/components/LocationCard/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Locations extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapLocations", () => {
      const {
        locations,
        onRemoveLocation
      } = this.props;
      return locations.map((location, index) => __jsx(_Location_components_LocationCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    return __jsx("div", {
      className: "card-block"
    }, __jsx("h3", null, "Class Location"), __jsx("div", {
      className: "card-main card card-instructor"
    }, __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "text-block"
    }, __jsx("p", null, "Select the location/branch where this class will be located.")), __jsx("div", {
      className: "box-scrollable"
    }, __jsx("div", {
      className: "height-360 jcf-scrollable"
    }, __jsx("div", {
      className: "card-location-holder",
      style: {
        height: "320px",
        overflowY: "scroll"
      }
    }, this.mapLocations()))), __jsx("div", {
      className: "card-footer right-align"
    }, __jsx("a", {
      href: "#modal_Location1",
      className: "modal-trigger link-block",
      onClick: onOpenLocationModal
    }, "Add Location")))));
  }

}

Locations.propTypes = {
  locations: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onOpenLocationModal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onRemoveLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Locations);

/***/ }),

/***/ "./components/Classes/StatusPage/index.js":
/*!************************************************!*\
  !*** ./components/Classes/StatusPage/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-sticky */ "react-sticky");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ClassNavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ClassNavBar */ "./components/Classes/components/ClassNavBar/index.js");
/* harmony import */ var _TestSectionsPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TestSectionsPage */ "./components/Classes/TestSectionsPage/index.js");
/* harmony import */ var _DetailSummaryPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DetailSummaryPage */ "./components/Classes/DetailSummaryPage/index.js");
/* harmony import */ var _DetailWorksheetPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DetailWorksheetPage */ "./components/Classes/DetailWorksheetPage/index.js");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Calendar */ "./components/Classes/Calendar/index.js");
/* harmony import */ var _utils_sampleSummaryClass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/sampleSummaryClass */ "./components/Classes/utils/sampleSummaryClass.js");
/* harmony import */ var _index_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../index/selectors */ "./components/Classes/index/selectors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














class StatusPage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onSetActivePage", active => this.setState({
      active
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "renderCurrentPage", () => {
      const {
        active
      } = this.state;

      if (active === "summary") {
        return __jsx(_DetailSummaryPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
          currentClass: _utils_sampleSummaryClass__WEBPACK_IMPORTED_MODULE_13__["default"]
        });
      }

      if (active === "testSections") {
        return __jsx(_TestSectionsPage__WEBPACK_IMPORTED_MODULE_9__["default"], null);
      }

      if (active === "worksheets") {
        return __jsx(_DetailWorksheetPage__WEBPACK_IMPORTED_MODULE_11__["default"], null);
      }

      if (active == "calendar") {
        return __jsx(_Calendar__WEBPACK_IMPORTED_MODULE_12__["default"], null);
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
    return __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_7__["StickyContainer"], null, !assignLessonsModalOpen && !assignWorkSheetsModalOpen ? __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_7__["Sticky"], null, ({
      style
    }) => __jsx("div", {
      className: "title-row card-panel",
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
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
    }, "menu"))), __jsx("nav", {
      className: "breadcrumb-holder"
    }, __jsx("div", {
      className: "nav-wrapper "
    }, __jsx("a", {
      href: "#!",
      className: "breadcrumb"
    }, "< Classes"))), __jsx("h2", {
      className: "h1 white-text"
    }, __jsx("span", {
      className: "heading-holder"
    }, __jsx("i", {
      className: "icon-members"
    }), __jsx("span", {
      className: "heading-block"
    }, "Some Class in June"))), __jsx(_components_ClassNavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onSetActivePage: this.onSetActivePage,
      active: active
    }))) : null, this.renderCurrentPage());
  }

}

StatusPage.propTypes = {
  assignLessonsModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  assignWorkSheetsModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_6__["createStructuredSelector"])({
  assignLessonsModalOpen: Object(_index_selectors__WEBPACK_IMPORTED_MODULE_14__["makeSelectAssignLessonsModalOpen"])(),
  assignWorkSheetsModalOpen: Object(_index_selectors__WEBPACK_IMPORTED_MODULE_14__["makeSelectAssignWorkSheetsModalOpen"])()
});
const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, null);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(withConnect)(StatusPage));

/***/ }),

/***/ "./components/Classes/TestSectionsPage/components/FilterSection/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Classes/TestSectionsPage/components/FilterSection/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/sortOptions */ "./components/Classes/utils/sortOptions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */






class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClearFilters", () => this.setState({
      testVersionFilter: ''
    }, this.props.onClearFilters));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSearchChange", ({
      target
    }) => this.setState({
      testVersionFilter: target.value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submitSearchFilter", () => {
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
      name: "reading",
      checked: subjectFilters.indexOf('reading') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "reading"
    }, "Reading")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "writing",
      name: "writing",
      checked: subjectFilters.indexOf('writing') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "writing"
    }, "Writing")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "math",
      name: "math",
      checked: subjectFilters.indexOf('math') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('subject', target.name)
    }), __jsx("label", {
      htmlFor: "math"
    }, "Math"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "future",
      name: "future",
      checked: availableDateFilters.indexOf('future') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), __jsx("label", {
      htmlFor: "future"
    }, "Future")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "available",
      name: "available",
      checked: availableDateFilters.indexOf('available') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), __jsx("label", {
      htmlFor: "available"
    }, "Available")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "complete",
      name: "complete",
      checked: availableDateFilters.indexOf('complete') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('availableDate', target.name)
    }), __jsx("label", {
      htmlFor: "complete"
    }, "Complete"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "hasReviewFlags",
      name: "hasReviewFlags",
      checked: flagFilter,
      onChange: ({
        target
      }) => handleFilterClick('hasFlags', target.name)
    }), __jsx("label", {
      htmlFor: "hasReviewFlags"
    }, "Has Review Flags"))), __jsx("ul", {
      className: "filter-form_checkbox-list"
    }, __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueToday",
      name: "dueToday",
      checked: dueDateFilters.indexOf('dueToday') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), __jsx("label", {
      htmlFor: "dueToday"
    }, "Due Today")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueNextSession",
      name: "dueNextSession",
      checked: dueDateFilters.indexOf('dueNextSession') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), __jsx("label", {
      htmlFor: "dueNextSession"
    }, "Due By Next Session")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "dueThisWeek",
      name: "dueThisWeek",
      checked: dueDateFilters.indexOf('dueThisWeek') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), __jsx("label", {
      htmlFor: "dueThisWeek"
    }, "Due this Week")), __jsx("li", null, __jsx("input", {
      type: "checkbox",
      id: "overdue",
      name: "overdue",
      checked: dueDateFilters.indexOf('overdue') !== -1,
      onChange: ({
        target
      }) => handleFilterClick('dueDate', target.name)
    }), __jsx("label", {
      htmlFor: "overdue"
    }, "Overdue")))), __jsx("div", {
      className: "d-flex row mb-0 justify-center"
    }, __jsx("div", {
      className: "col s12 m4"
    }, __jsx("div", {
      className: "search-field input-field"
    }, __jsx("input", {
      type: "search",
      id: "test_version_search",
      className: "input-control validate",
      value: testVersionFilter,
      onChange: this.handleSearchChange
    }), __jsx("button", {
      type: "submit",
      onClick: this.submitSearchFilter,
      className: "search-button"
    }, __jsx("i", {
      className: "icon-search"
    })), __jsx("label", {
      className: "label",
      htmlFor: "test_version_search"
    }, "Test Version"))))), __jsx("div", {
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
        marginBottom: '10px',
        marginTop: '0'
      }
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__["default"])(sort, _utils_sortOptions__WEBPACK_IMPORTED_MODULE_5__["default"]),
      onChange: onSetSort,
      options: _utils_sortOptions__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: "Sort By",
      stateKey: "sort",
      dropdownKey: "sort"
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

FilterSection.propTypes = {
  sort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  flagFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onClearFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  dueDateFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  subjectFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  handleFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  availableDateFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Classes/TestSectionsPage/components/TestSectionCard/index.js":
/*!*********************************************************************************!*\
  !*** ./components/Classes/TestSectionsPage/components/TestSectionCard/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/testSectionCardUtils */ "./components/Classes/utils/testSectionCardUtils.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class TestSectionCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "viewTestSectionDetails", () => console.warn('Pending implementation of view test section details functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dismissFlags", () => console.warn('Pending implementation of dismiss flags functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resetTestSection", () => console.warn('Pending implementation of reset test section functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteTestSection", () => console.warn('Pending implementation of delete test section functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", event => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderFlags", () => {
      const {
        testSection: {
          flags
        }
      } = this.props;

      if (flags.length) {
        return __jsx("span", {
          className: "badge-rounded-xs badge red darken-2 white-text"
        }, __jsx("b", {
          className: "badge-text"
        }, flags.length), " ", __jsx("i", {
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
    return __jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, __jsx("div", {
      className: disabled ? 'card-main test-card card-disabled card' : 'card-main test-card card'
    }, __jsx("div", {
      className: "card-panel panel-border"
    }, __jsx("div", {
      className: "card-panel-row row"
    }, __jsx("div", {
      className: "icon-col col s2"
    }, __jsx("span", {
      className: "block-icon"
    }, __jsx("i", {
      className: "icon-assign-section"
    }), __jsx("span", {
      className: "text-icon"
    }, "Assigned ", __jsx("br", null), "Test Section"))), __jsx("div", {
      className: "col s8"
    }, __jsx("div", {
      className: "card-panel-text"
    }, __jsx("div", {
      className: "text-large truncate"
    }, _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_4__["subjectMap"][subject], " Section"), __jsx("div", {
      className: "text-small truncate"
    }, "Version: ", version))), __jsx("div", {
      className: "position-top right-align"
    }, __jsx("div", {
      className: "icons-row"
    }, this.renderFlags(), __jsx("div", {
      className: "dropdown-block col"
    }, __jsx("a", {
      href: "#",
      "data-target": "dropdown01",
      className: "dropdown-trigger btn",
      onClick: this.handleDropdownClick
    }, __jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? __jsx("ul", {
      id: "dropdown01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.viewTestSectionDetails,
      className: "modal-trigger link-block"
    }, "View Details")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.dismissFlags
    }, "Dismiss Flags")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.resetTestSection
    }, "Reset")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.deleteTestSection,
      className: "link-delete"
    }, "Delete"))) : null))))), __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "d-flex sameheight-all row mb-0"
    }, __jsx("div", {
      className: "col s6"
    }, __jsx("div", {
      className: "chart-container"
    }, __jsx("div", {
      className: "chart-holder"
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Doughnut"], {
      data: () => Object(_utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_4__["data"])(percentageComplete, status),
      options: {
        circumference: 1 * Math.PI,
        rotation: 1 * Math.PI,
        cutoutPercentage: 60,
        tooltips: false
      }
    }), __jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_4__["graphColorMap"][status]
      }
    }, __jsx("span", {
      "data-count-up": true,
      "data-start-val": "0",
      "data-end-val": "96",
      "data-duration": "1"
    }), __jsx("span", {
      className: "percentage"
    }, percentageComplete, "%"))), __jsx("div", {
      className: "chart-row"
    }, __jsx("div", {
      className: "chart-col chart-start"
    }, "\xA0"), __jsx("div", {
      className: "chart-col chart-end"
    }, __jsx("span", {
      className: "amount",
      style: {
        color: _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_4__["graphColorMap"][status]
      }
    }, problems))), __jsx("div", {
      className: "chart-description"
    }, __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Time Est:"), __jsx("dd", null, timeEstimate, " min")), __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Problems:"), __jsx("dd", null, problems))))), __jsx("div", {
      className: "col s6 right-align justify-end"
    }, __jsx("div", {
      className: "chart-description"
    }, __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Available:"), __jsx("dd", null, __jsx("time", {
      dateTime: "2018-12-15"
    }, availableDate))), __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Due:"), __jsx("dd", null, __jsx("time", {
      dateTime: "2018-12-15"
    }, dueDate)))), __jsx("div", {
      className: "align-self-end"
    }, __jsx("span", {
      className: _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_4__["testSectionCardColorMap"][status]
    }, status)))))));
  }

}

TestSectionCard.propTypes = {
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  testSection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TestSectionCard);

/***/ }),

/***/ "./components/Classes/TestSectionsPage/index.js":
/*!******************************************************!*\
  !*** ./components/Classes/TestSectionsPage/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Classes/TestSectionsPage/components/FilterSection/index.js");
/* harmony import */ var _components_TestSectionCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TestSectionCard */ "./components/Classes/TestSectionsPage/components/TestSectionCard/index.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/sortOptions */ "./components/Classes/utils/sortOptions.js");
/* harmony import */ var _utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/testSectionCardUtils */ "./components/Classes/utils/testSectionCardUtils.js");
/* harmony import */ var _utils_sampleTestSections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/sampleTestSections */ "./components/Classes/utils/sampleTestSections.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class TestSectionsPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClearFilters", () => this.setState({
      sort: '',
      testVersionFilter: '',
      subjectFilters: [],
      flagFilter: false,
      availableDateFilters: [],
      dueDateFilters: []
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredState", value => this.setState({
      testVersionFilter: value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredState", () => this.setState({
      testVersionFilter: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSortTestSections", testSections => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'flags':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__["flagsSort"]);

        case 'dueDate':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__["dueDateSort"]);

        case 'availableDate':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__["availableDateSort"]);

        case 'status':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__["statusSort"]);

        case 'problems':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__["problemSort"]);

        case 'timeEstimate':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__["timeEstimateSort"]);

        case 'subject':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__["subjectSort"]);

        case 'percentageComplete':
          return testSections.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_6__["percentageCompleteSort"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByTestVersion", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByDate", (incomingSections, dateType) => {
      const {
        dueDateFilters,
        availableDateFilters
      } = this.state;
      let dateFilters;
      let testSections = incomingSections;
      const currentDate = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MM/DD/YY');
      const currentDateIndex = new Date().getDay();
      const endOfWeekIndex = 6 - currentDateIndex;
      const endOfWeekDate = moment__WEBPACK_IMPORTED_MODULE_3___default()().add(endOfWeekIndex, 'days').format('MM/DD/YY');

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterTestSections", () => {
      const {
        subjectFilters,
        dueDateFilters,
        availableDateFilters,
        flagFilter,
        testSections: allTestSections
      } = this.state;
      let testSections = allTestSections;

      if (subjectFilters.length) {
        testSections = testSections.filter(testSection => subjectFilters.indexOf(_utils_testSectionCardUtils__WEBPACK_IMPORTED_MODULE_7__["testSectionSubjectMap"][testSection.subject]) !== -1);
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getMappableTestSections", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterClick", (filterType, filter) => {
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
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        const filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [modifiedFilterName]: modifiedFilterUpdatedState
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapTestSections", () => this.getMappableTestSections().map((testSection, index) => __jsx(_components_TestSectionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      testSections: _utils_sampleTestSections__WEBPACK_IMPORTED_MODULE_8__["default"]
    };
  }

  render() {
    const {
      testSections
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_FilterSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }), __jsx("div", {
      className: "content-section"
    }, __jsx("div", {
      className: "result-row center-align"
    }, __jsx("b", {
      className: "result"
    }, " - ", testSections.length, " results -")), __jsx("div", {
      className: "row d-flex-content card-width-272"
    }, this.mapTestSections())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TestSectionsPage);

/***/ }),

/***/ "./components/Classes/components/ClassNavBar/index.js":
/*!************************************************************!*\
  !*** ./components/Classes/components/ClassNavBar/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



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

ClassNavBar.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onSetActivePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClassNavBar);

/***/ }),

/***/ "./components/Classes/index/actions.js":
/*!*********************************************!*\
  !*** ./components/Classes/index/actions.js ***!
  \*********************************************/
/*! exports provided: setAssignLessonsModalOpen, setAssignWorksheetModalOpen, setCalendarRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAssignLessonsModalOpen", function() { return setAssignLessonsModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAssignWorksheetModalOpen", function() { return setAssignWorksheetModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCalendarRows", function() { return setCalendarRows; });
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

/***/ }),

/***/ "./components/Classes/index/api.js":
/*!*****************************************!*\
  !*** ./components/Classes/index/api.js ***!
  \*****************************************/
/*! exports provided: createNewClassRoomApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewClassRoomApi", function() { return createNewClassRoomApi; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = undefined;
const createNewClassRoomApi = classroom => fetch(`${API_URL}/api/commands/create-classroom`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(classroom)
}).then(res => res.json()).catch(err => err);
/* harmony default export */ __webpack_exports__["default"] = (createNewClassRoomApi);

/***/ }),

/***/ "./components/Classes/index/constants.js":
/*!***********************************************!*\
  !*** ./components/Classes/index/constants.js ***!
  \***********************************************/
/*! exports provided: SET_ASSIGN_LESSONS_MODAL_OPEN, SET_ASSIGN_WORKSHEETS_MODAL_OPEN, SET_CALENDAR_ROWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ASSIGN_LESSONS_MODAL_OPEN", function() { return SET_ASSIGN_LESSONS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ASSIGN_WORKSHEETS_MODAL_OPEN", function() { return SET_ASSIGN_WORKSHEETS_MODAL_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CALENDAR_ROWS", function() { return SET_CALENDAR_ROWS; });
const SET_ASSIGN_LESSONS_MODAL_OPEN = 'SET_ASSIGN_LESSONS_MODAL_OPEN';
const SET_ASSIGN_WORKSHEETS_MODAL_OPEN = 'SET_ASSIGN_WORKSHEETS_MODAL_OPEN';
const SET_CALENDAR_ROWS = 'SET_CALENDAR_ROWS';

/***/ }),

/***/ "./components/Classes/index/selectors.js":
/*!***********************************************!*\
  !*** ./components/Classes/index/selectors.js ***!
  \***********************************************/
/*! exports provided: default, makeSelectClassesPageState, makeSelectAssignLessonsModalOpen, makeSelectAssignWorkSheetsModalOpen, makeSelectCalendarRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectClassesPageState", function() { return makeSelectClassesPageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectAssignLessonsModalOpen", function() { return makeSelectAssignLessonsModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectAssignWorkSheetsModalOpen", function() { return makeSelectAssignWorkSheetsModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectCalendarRows", function() { return makeSelectCalendarRows; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


const selectClassesDomain = state => state.classesReducer;

const makeSelectClassesPageState = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectClassesDomain, substate => substate ? substate.toJS() : {});

const makeSelectAssignLessonsModalOpen = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(makeSelectClassesPageState(), substate => substate.assignLessonsModalOpen);

const makeSelectAssignWorkSheetsModalOpen = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(makeSelectClassesPageState(), substate => substate.assignWorkSheetsModalOpen);

const makeSelectCalendarRows = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(makeSelectClassesPageState(), substate => substate.calendarRows);

/* harmony default export */ __webpack_exports__["default"] = (selectClassesDomain);


/***/ }),

/***/ "./components/Classes/utils/sampleClass.js":
/*!*************************************************!*\
  !*** ./components/Classes/utils/sampleClass.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sampleClass = [{
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
/* harmony default export */ __webpack_exports__["default"] = (sampleClass);

/***/ }),

/***/ "./components/Classes/utils/sampleSummaryClass.js":
/*!********************************************************!*\
  !*** ./components/Classes/utils/sampleSummaryClass.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (sampleClass);

/***/ }),

/***/ "./components/Classes/utils/sampleTestSections.js":
/*!********************************************************!*\
  !*** ./components/Classes/utils/sampleTestSections.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/Classes/utils/sortOptions.js":
/*!*************************************************!*\
  !*** ./components/Classes/utils/sortOptions.js ***!
  \*************************************************/
/*! exports provided: availableDateSort, dueDateSort, statusSort, flagsSort, problemSort, timeEstimateSort, subjectSort, percentageCompleteSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableDateSort", function() { return availableDateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dueDateSort", function() { return dueDateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusSort", function() { return statusSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagsSort", function() { return flagsSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemSort", function() { return problemSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEstimateSort", function() { return timeEstimateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectSort", function() { return subjectSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageCompleteSort", function() { return percentageCompleteSort; });
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
/* harmony default export */ __webpack_exports__["default"] = (sortByOptions);

/***/ }),

/***/ "./components/Classes/utils/testSectionCardUtils.js":
/*!**********************************************************!*\
  !*** ./components/Classes/utils/testSectionCardUtils.js ***!
  \**********************************************************/
/*! exports provided: data, subjectMap, testSectionCardColorMap, graphColorMap, testSectionSubjectMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectMap", function() { return subjectMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSectionCardColorMap", function() { return testSectionCardColorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphColorMap", function() { return graphColorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSectionSubjectMap", function() { return testSectionSubjectMap; });
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

/***/ }),

/***/ "./components/ClickOffComponentWrapper/index.js":
/*!******************************************************!*\
  !*** ./components/ClickOffComponentWrapper/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClickOffComponentWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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
ClickOffComponentWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onOuterClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nestedModals: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./components/Dashboard/components/CalendarDate/index.js":
/*!***************************************************************!*\
  !*** ./components/Dashboard/components/CalendarDate/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dateAndCalendarUtils */ "./components/Dashboard/utils/dateAndCalendarUtils.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */





const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'inherit'
}); // eslint-disable-next-line react/prefer-stateless-function


class CalendarDate extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !inMonth ? __jsx("td", {
      className: "cal-cell1 cal-cell cal-day-outmonth",
      key: dayDate
    }, __jsx("div", {
      className: Object(_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_3__["getCalendarDayClassName"])(date, inMonth, activeDateKey)
    }, __jsx("span", {
      className: "day-date"
    }, dayDate), __jsx("span", {
      className: "cal-date"
    }, calDate))) : __jsx("td", {
      key: activeDateKey,
      className: Object(_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_3__["getCalendarCellClassName"])(hasEvents, inActiveColumn),
      onClick: () => onSetActiveDate(activeDateKey)
    }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["Droppable"], {
      droppableId: `droppable-${date}`
    }, (provided, snapshot) => __jsx("div", {
      ref: provided.innerRef,
      style: getListStyle(snapshot.isDraggingOver)
    }, __jsx("div", {
      className: Object(_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_3__["getCalendarDayClassName"])(date, inMonth, activeDateKey)
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
CalendarDate.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  inMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  dayDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  calDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  hasEvents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  lessons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  sessions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  worksheets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  testSections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  simulatedSat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  isActiveDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  inActiveColumn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  activeDateKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  addDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onSetActiveDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  mapDateLessons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  mapDateSessions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  mapTestSections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  mapSimulatedSats: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  mapDateWorksheets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onToggleAddDropdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleDeleteDropdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleAssignSessionModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleAssignLessonsModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleAssignWorksheetsModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleAssignTestSectionModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleAssignSimulatedSatModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  shouldMapLessons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  shouldMapSessions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  shouldMapWorksheets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  shouldMapTestSections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  shouldMapSimulatedSats: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarDate);

/***/ }),

/***/ "./components/Dashboard/components/CalendarHeader/components/CalendarArrow/index.js":
/*!******************************************************************************************!*\
  !*** ./components/Dashboard/components/CalendarHeader/components/CalendarArrow/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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

CalendarArrow.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  activeMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  calendarMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarArrow);

/***/ }),

/***/ "./components/Dashboard/components/CalendarHeader/index.js":
/*!*****************************************************************!*\
  !*** ./components/Dashboard/components/CalendarHeader/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CalendarArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CalendarArrow */ "./components/Dashboard/components/CalendarHeader/components/CalendarArrow/index.js");
/* harmony import */ var _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dateAndCalendarUtils */ "./components/Dashboard/utils/dateAndCalendarUtils.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // eslint-disable-next-line react/prefer-stateless-function

class CalendarHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      activeMonth,
      onSetActiveMonth
    } = this.props;
    return __jsx("div", {
      className: "calendar-header",
      style: {
        zIndex: '9'
      }
    }, __jsx("div", {
      className: "calendar-view-switcher"
    }, __jsx("ul", {
      className: "switcher"
    }, __jsx("li", {
      className: "active col",
      "data-view": "view-month"
    }, __jsx("a", {
      href: "#"
    }, "Month View")), __jsx("li", {
      className: "col",
      "data-view": "view-day"
    }, __jsx("a", {
      href: "#"
    }, "Day View")))), __jsx("div", {
      className: "nav-slick-calendar",
      style: {
        opacity: '1'
      }
    }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_4__["currentMonthIndex"],
      onInit: () => onSetActiveMonth(_utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_4__["currentMonthIndex"]),
      afterChange: onSetActiveMonth,
      nextArrow: __jsx(_components_CalendarArrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        direction: "next",
        calendarMap: _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_4__["calendarMap"],
        activeMonth: activeMonth
      }),
      prevArrow: __jsx(_components_CalendarArrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        direction: "previous",
        calendarMap: _utils_dateAndCalendarUtils__WEBPACK_IMPORTED_MODULE_4__["calendarMap"],
        activeMonth: activeMonth
      })
    }, __jsx("div", {
      className: "slide"
    }, "January"), __jsx("div", {
      className: "slide"
    }, "February"), __jsx("div", {
      className: "slide"
    }, "March"), __jsx("div", {
      className: "slide"
    }, "April"), __jsx("div", {
      className: "slide"
    }, "May"), __jsx("div", {
      className: "slide"
    }, "June"), __jsx("div", {
      className: "slide"
    }, "July"), __jsx("div", {
      className: "slide"
    }, "August"), __jsx("div", {
      className: "slide"
    }, "September"), __jsx("div", {
      className: "slide"
    }, "October"), __jsx("div", {
      className: "slide"
    }, "November"), __jsx("div", {
      className: "slide"
    }, "December"))));
  }

}

CalendarHeader.propTypes = {
  activeMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onSetActiveMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarHeader);

/***/ }),

/***/ "./components/Dashboard/components/CalendarRow/index.js":
/*!**************************************************************!*\
  !*** ./components/Dashboard/components/CalendarRow/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CalendarDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CalendarDate */ "./components/Dashboard/components/CalendarDate/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable react/no-array-index-key */





class CalendarRow extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toggleAssignSessionModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignSessionModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignSessionModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toggleAssignLessonsModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignLessonsModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignLessonsModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toggleAssignWorksheetsModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignWorksheetsModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignWorksheetsModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toggleAssignTestSectionModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignTestSectionModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignTestSectionModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toggleAssignSimulatedSatModal", (event, date) => {
      event.preventDefault();
      const {
        onToggleAssignSimulatedSatModal,
        onToggleAddDropdown
      } = this.props;
      onToggleAssignSimulatedSatModal(event, date);
      onToggleAddDropdown();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "mapDateSessions", (shouldMapSessions, sessions) => {
      if (shouldMapSessions) {
        return sessions.map((session, index) => __jsx("li", {
          className: "event-frame",
          key: index
        }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
          key: index,
          index: index,
          draggableId: `sessions-${session.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), __jsx("span", {
          className: "event-title-box"
        }, session.title)))));
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "mapDateLessons", (shouldMapLessons, lessons) => {
      if (shouldMapLessons) {
        return lessons.map((lesson, index) => __jsx("li", {
          className: "event-frame",
          key: index
        }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
          key: index,
          index: index,
          draggableId: `lessons-${lesson.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, lesson.completed && __jsx("span", {
          className: "event-check lesson-check"
        }, __jsx("i", {
          className: "icon-check02"
        })), __jsx("span", {
          className: "event event-lesson-box"
        }, lesson.title))))));
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "mapDateWorksheets", (shouldMapWorksheets, worksheets) => {
      if (shouldMapWorksheets) {
        return worksheets.map((worksheet, index) => __jsx("li", {
          className: "event-frame",
          key: index
        }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
          key: index,
          index: index,
          draggableId: `worksheets-${worksheet.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, worksheet.completed && __jsx("span", {
          className: "event-check worksheet-check"
        }, __jsx("i", {
          className: "icon-check02"
        })), __jsx("span", {
          className: "event event-worksheet-box"
        }, worksheet.title))))));
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "mapTestSections", (shouldMapTestSections, testSections) => {
      if (shouldMapTestSections) {
        return testSections.map((testSection, index) => __jsx("li", {
          className: "event-frame",
          key: index
        }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
          key: index,
          index: index,
          draggableId: `testSections-${testSection.date}-${index}`,
          style: {
            userSelect: 'none'
          }
        }, provided => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), __jsx("span", {
          className: "event event-test-box"
        }, "Test Section: ", testSection.version)))));
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "mapSimulatedSats", (shouldMapSimulatedSats, simulatedSat) => {
      if (shouldMapSimulatedSats) {
        return simulatedSat.map((sat, index) => __jsx("li", {
          className: "event-frame",
          key: index
        }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
          key: index,
          index: index,
          draggableId: `simulatedSat-${sat.date}-${index}`
        }, provided => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.dragHandleProps, provided.dragHandleProps), __jsx("span", {
          className: "event event-sat-box"
        }, sat.version)))));
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "mapRowDates", () => this.props.rows && this.props.rows.map(rowDate => {
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
      return __jsx(_CalendarDate__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    return __jsx("tr", {
      className: "cal-row-fluid"
    }, this.mapRowDates());
  }

}

CalendarRow.propTypes = {
  activeDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  activeColumn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  eventFilters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  onSetActiveDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  addDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  deleteDropdownOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onToggleAddDropdown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onToggleDeleteDropdown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onToggleAssignSessionModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onToggleAssignLessonsModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onToggleAssignWorksheetsModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onToggleAssignTestSectionModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onToggleAssignSimulatedSatModal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarRow);

/***/ }),

/***/ "./components/Dashboard/components/FilterSection/index.js":
/*!****************************************************************!*\
  !*** ./components/Dashboard/components/FilterSection/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */



class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleShowFilters", () => this.setState(({
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

FilterSection.propTypes = {
  filters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  eventFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onClearFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js":
/*!****************************************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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

class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClearFilters", () => this.setState({
      titleFilter: '',
      unitFilter: ''
    }, this.props.onClearFilters));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSearchChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submitSearchFilter", searchType => {
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
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__["default"])(sort, sortByOptions),
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

FilterSection.propTypes = {
  sort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  typeFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onClearFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  subjectFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  handleFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js":
/*!*************************************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class LessonCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", event => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editLesson", () => console.warn('Pending implementation of edit modal/functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cloneLesson", () => console.warn('Pending implementation of clone lesson functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showOwner", () => console.warn('Pending implementation of show owner functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteLesson", () => console.warn('Pending implementation of delete lesson functionality'));
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
    return __jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, __jsx("div", {
      className: "card-checkbox"
    }, __jsx("input", {
      type: "checkbox",
      checked: selectedLessons.indexOf(lesson) !== -1,
      onChange: () => handleLessonClick(lesson)
    }), __jsx("div", {
      className: "checkbox-card card-main card-lesson-detail card-assigned card"
    }, __jsx("div", {
      className: "card-panel",
      style: {
        backgroundColor: '#666',
        color: '#fff'
      }
    }, __jsx("div", {
      className: "card-panel-row row"
    }, __jsx("div", {
      className: "icon-col col s2"
    }, __jsx("span", {
      className: "block-icon"
    }, __jsx("i", {
      className: "icon-books-l"
    }), __jsx("span", {
      className: "text-icon"
    }, "Lesson"))), __jsx("div", {
      className: "col s9"
    }, __jsx("div", {
      className: "card-panel-text"
    }, __jsx("div", {
      className: "text-small"
    }, unit), __jsx("div", {
      className: "text-large"
    }, title), __jsx("div", {
      className: "text-small"
    }, "Subject: ", subject))), __jsx("div", {
      className: "align-top col s1 right-align"
    }, __jsx("div", {
      className: "row icons-row"
    }, __jsx("div", {
      className: "dropdown-block col"
    }, __jsx("a", {
      href: "#",
      className: "dropdown-trigger btn",
      "data-target": "dropdown_lesson_01",
      onClick: this.handleDropdownClick
    }, __jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? __jsx("ul", {
      id: "dropdown_lesson_01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.editLesson,
      className: "modal-trigger link-block"
    }, "Edit")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.cloneLesson
    }, "Clone")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.showOwner
    }, "Show Owner")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.deleteLesson
    }, "Delete"))) : null))))), __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "chart-container"
    }, __jsx("div", {
      className: "chart-holder"
    }, __jsx("span", {
      className: "svg-curved-bar",
      "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
      "data-duration": "1"
    }, __jsx("svg", {
      width: "110px",
      height: "110px",
      viewBox: " 0 0 110 110"
    }, __jsx("path", {
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#d6d6d6'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
    }), __jsx("path", {
      "data-dinamic": true,
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#62b771'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
    }))), __jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#4d4d4d'
      }
    })), __jsx("div", {
      className: "chart-description"
    }, __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Time Est:"), __jsx("dd", null, timeEstimate, " min")), __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Problems:"), __jsx("dd", null, problems)))), __jsx("div", {
      className: "card-footer-row center-align"
    }, __jsx("div", {
      className: "card-footer-holder"
    }, __jsx("p", null, "p.", pageNumber, "  (", type, ")")))))));
  }

}

;
LessonCard.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  lesson: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  selectedLessons: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  handleLessonClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LessonCard);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignLessonModal/index.js":
/*!***************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignLessonModal/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Dashboard/components/Modals/AssignLessonModal/components/FilterSection/index.js");
/* harmony import */ var _components_LessonCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/LessonCard */ "./components/Dashboard/components/Modals/AssignLessonModal/components/LessonCard/index.js");
/* harmony import */ var _utils_sampleLessons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/sampleLessons */ "./components/Dashboard/utils/sampleLessons.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/sortOptions */ "./components/Dashboard/utils/sortOptions.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const lessonTypeMap = {
  'Challenge + Practice': 'challenge',
  'Homework Drill': 'homework',
  'Reading from Workbook': 'readingFromWorkbook'
};

class AssignLessonModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignSelectedDropdown", () => this.setState(({
      assignSelectedDropdownOpen
    }) => ({
      assignSelectedDropdownOpen: !assignSelectedDropdownOpen
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onResetModal", () => this.setState({
      subjectFilters: [],
      typeFilters: [],
      sort: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredState", (titleFilter, value) => this.setState({
      [titleFilter]: value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredState", titleFilter => this.setState({
      [titleFilter]: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSortLessons", lessons => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'pageNumber':
          return lessons.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__["pageNumberSort"]);

        case 'problems':
          return lessons.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__["problemSort"]);

        case 'timeEstimate':
          return lessons.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__["timeEstimateSort"]);

        case 'subject':
          return lessons.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__["subjectSort"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByTitle", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByUnit", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterLessons", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getMappableLessons", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterClick", (filterType, filter) => {
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
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        const filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [modifiedFilterName]: modifiedFilterUpdatedState
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleLessonClick", lesson => {
      const {
        selectedLessons
      } = this.state;
      let modifiedLessons;

      if (selectedLessons.indexOf(lesson) === -1) {
        modifiedLessons = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(selectedLessons, {
          $push: [lesson]
        });
      } else {
        const lessonIndex = selectedLessons.indexOf(lesson);
        modifiedLessons = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(selectedLessons, {
          $splice: [[lessonIndex, 1]]
        });
      }

      this.setState({
        selectedLessons: modifiedLessons
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "assignLessons", date => {
      const {
        onAssignLessons
      } = this.props;
      const {
        selectedLessons
      } = this.state;
      let assignDate;

      switch (date) {
        case 'today':
          assignDate = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = moment__WEBPACK_IMPORTED_MODULE_5___default()().add(1, 'days').format('MM/DD/YY');
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapLessons", () => this.getMappableLessons().map((lesson, index) => __jsx(_components_LessonCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lessons: _utils_sampleLessons__WEBPACK_IMPORTED_MODULE_8__["default"],
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
    return __jsx("div", {
      className: "jsx-4152893512"
    }, open && __jsx("div", {
      className: "jsx-4152893512" + " " + "wrapper"
    }, __jsx("div", {
      style: {
        minWidth: "100%"
      },
      className: "jsx-4152893512" + " " + "card-modal card-main card switcher-section grey lighten-3"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "header-row card-panel light-blue lighten-1 white-text"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "col s11"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "d-flex"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "icon-col"
    }, __jsx("i", {
      className: "jsx-4152893512" + " " + "icon-books-l"
    })), __jsx("div", {
      className: "jsx-4152893512" + " " + "card-panel-text"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "text-large"
    }, "Assign Lessons")))), __jsx("div", {
      className: "jsx-4152893512" + " " + "col s1 right-align"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "row icons-row"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-4152893512" + " " + "modal-close close"
    }, __jsx("i", {
      className: "jsx-4152893512" + " " + "icon-close-thin"
    })))))), __jsx(_components_FilterSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sort: sort,
      typeFilters: typeFilters,
      subjectFilters: subjectFilters,
      onSetSort: this.onSetSort,
      onClearFilters: this.onResetModal,
      handleFilterClick: this.handleFilterClick,
      onSetFilteredState: this.onSetFilteredState,
      onUnsetFilteredState: this.onUnsetFilteredState
    }), __jsx("div", {
      className: "jsx-4152893512" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-4152893512" + " " + "result-row center-align"
    }, __jsx("b", {
      className: "jsx-4152893512" + " " + "result"
    }, " - ", this.getMappableLessons().length, " results -")), __jsx("div", {
      className: "jsx-4152893512" + " " + "checkboxes-section row d-flex-content card-width-322"
    }, this.mapLessons())))), __jsx("div", {
      className: "jsx-4152893512" + " " + "add-btn-block"
    }, __jsx("a", {
      href: "#",
      onClick: this.onToggleAssignSelectedDropdown,
      "data-target": "dropdown_assign_selected_lessons",
      className: "jsx-4152893512" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, __jsx("i", {
      className: "jsx-4152893512" + " " + "material-icons"
    }, "add"), " Assign Selected"), __jsx("ul", {
      id: "dropdown_assign_selected_lessons",
      style: {
        display: assignSelectedDropdownOpen ? 'block' : '0',
        opacity: assignSelectedDropdownOpen ? '1' : '0'
      },
      className: "jsx-4152893512" + " " + 'dropdown-content'
    }, __jsx("li", {
      className: "jsx-4152893512"
    }, __jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('today'),
      className: "jsx-4152893512"
    }, "For Today")), __jsx("li", {
      className: "jsx-4152893512"
    }, __jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('tomorrow'),
      className: "jsx-4152893512"
    }, "For Tomorrow")), __jsx("li", {
      className: "jsx-4152893512"
    }, __jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('nextSession'),
      className: "jsx-4152893512"
    }, "For Next Session")), __jsx("li", {
      className: "jsx-4152893512"
    }, __jsx("a", {
      href: "#",
      onClick: () => this.assignLessons('customDate'),
      className: "jsx-4152893512"
    }, "For Date..."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4152893512"
    }, ".card-modal.jsx-4152893512{margin:0;border-radius:6px;}.modal-custom.jsx-4152893512{opacity:1;visibility:visible;}.modal-footer.jsx-4152893512{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25MZXNzb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrUlcsQUFHd0IsQUFJQyxBQUlhLFNBUEwsQ0FJQyxhQUlyQixJQVBBLEVBSUEiLCJmaWxlIjoiL1ZvbHVtZXMvSEREL1NpdGVzL2NsZWFyY2hvaWNldGVzdHByZXAvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvRGFzaGJvYXJkL2NvbXBvbmVudHMvTW9kYWxzL0Fzc2lnbkxlc3Nvbk1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ2ltbXV0YWJpbGl0eS1oZWxwZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgRmlsdGVyU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyU2VjdGlvbic7XG5pbXBvcnQgTGVzc29uQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvTGVzc29uQ2FyZCc7XG5pbXBvcnQgc2FtcGxlTGVzc29ucyBmcm9tICcuLi8uLi8uLi91dGlscy9zYW1wbGVMZXNzb25zJztcbmltcG9ydCB7IHBhZ2VOdW1iZXJTb3J0LCBwcm9ibGVtU29ydCwgdGltZUVzdGltYXRlU29ydCwgc3ViamVjdFNvcnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zb3J0T3B0aW9ucyc7XG5cbmNvbnN0IGxlc3NvblR5cGVNYXAgPSB7XG4gICdDaGFsbGVuZ2UgKyBQcmFjdGljZSc6ICdjaGFsbGVuZ2UnLFxuICAnSG9tZXdvcmsgRHJpbGwnOiAnaG9tZXdvcmsnLFxuICAnUmVhZGluZyBmcm9tIFdvcmtib29rJzogJ3JlYWRpbmdGcm9tV29ya2Jvb2snLFxufTtcblxuY2xhc3MgQXNzaWduTGVzc29uTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29ydDogJycsXG4gICAgICB1bml0RmlsdGVyOiAnJyxcbiAgICAgIHRpdGxlRmlsdGVyOiAnJyxcbiAgICAgIHR5cGVGaWx0ZXJzOiBbXSxcbiAgICAgIHN1YmplY3RGaWx0ZXJzOiBbXSxcbiAgICAgIHNlbGVjdGVkTGVzc29uczogW10sXG4gICAgICBsZXNzb25zOiBzYW1wbGVMZXNzb25zLFxuICAgICAgZHJvcGRvd25JbmRleDogbnVsbCxcbiAgICAgIGRyb3Bkb3duSXNPcGVuOiBmYWxzZSxcbiAgICAgIGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb25Ub2dnbGVBc3NpZ25TZWxlY3RlZERyb3Bkb3duID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSgoeyBhc3NpZ25TZWxlY3RlZERyb3Bkb3duT3BlbiB9KSA9PiAoeyBhc3NpZ25TZWxlY3RlZERyb3Bkb3duT3BlbjogIWFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuIH0pKVxuXG4gIG9uU2V0RHJvcGRvd24gPSAoZHJvcGRvd25JbmRleCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duSW5kZXgsIGRyb3Bkb3duSXNPcGVuOiB0cnVlIH0pO1xuICBvbkNsb3NlRHJvcGRvd24gPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25Jc09wZW46IGZhbHNlIH0pO1xuXG4gIG9uUmVzZXRNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzdWJqZWN0RmlsdGVyczogW10sIHR5cGVGaWx0ZXJzOiBbXSwgc29ydDogJycgfSlcbiAgb25TZXRTb3J0ID0gKHNvcnQpID0+IHRoaXMuc2V0U3RhdGUoeyBzb3J0IH0pXG5cbiAgb25TZXRGaWx0ZXJlZFN0YXRlID0gKHRpdGxlRmlsdGVyLCB2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFt0aXRsZUZpbHRlcl06IHZhbHVlIH0pXG4gIG9uVW5zZXRGaWx0ZXJlZFN0YXRlID0gKHRpdGxlRmlsdGVyKSA9PiB0aGlzLnNldFN0YXRlKHsgW3RpdGxlRmlsdGVyXTogJycgfSlcblxuICBvbkNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2xvc2UoKTtcbiAgICB0aGlzLm9uUmVzZXRNb2RhbCgpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIG9uU29ydExlc3NvbnMgPSAobGVzc29ucykgPT4ge1xuICAgIGNvbnN0IHsgc29ydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBzd2l0Y2ggKHNvcnQpIHtcbiAgICAgIGNhc2UgJ3BhZ2VOdW1iZXInOlxuICAgICAgICByZXR1cm4gbGVzc29ucy5zb3J0KHBhZ2VOdW1iZXJTb3J0KTtcbiAgICAgIGNhc2UgJ3Byb2JsZW1zJzpcbiAgICAgICAgcmV0dXJuIGxlc3NvbnMuc29ydChwcm9ibGVtU29ydCk7XG4gICAgICBjYXNlICd0aW1lRXN0aW1hdGUnOlxuICAgICAgICByZXR1cm4gbGVzc29ucy5zb3J0KHRpbWVFc3RpbWF0ZVNvcnQpO1xuICAgICAgY2FzZSAnc3ViamVjdCc6XG4gICAgICAgIHJldHVybiBsZXNzb25zLnNvcnQoc3ViamVjdFNvcnQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25GaWx0ZXJCeVRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbGVzc29ucywgdGl0bGVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIGxlc3NvbnMucmVkdWNlKChmaW5hbEFyciwgY3VycmVudExlc3NvbikgPT4ge1xuICAgICAgY29uc3QgeyB0aXRsZSB9ID0gY3VycmVudExlc3NvbjtcbiAgICAgIGNvbnN0IGxlc3NvblN0cmluZyA9IHRpdGxlLnJlcGxhY2UoL1xccy9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGxlc3NvblN0cmluZy5pbmRleE9mKHRpdGxlRmlsdGVyKSAhPT0gLTEgJiYgZmluYWxBcnIuaW5kZXhPZihjdXJyZW50TGVzc29uKSA9PT0gLTEpIHtcbiAgICAgICAgZmluYWxBcnIucHVzaChjdXJyZW50TGVzc29uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5hbEFycjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBvbkZpbHRlckJ5VW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxlc3NvbnMsIHVuaXRGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIGxlc3NvbnMucmVkdWNlKChmaW5hbEFyciwgY3VycmVudExlc3NvbikgPT4ge1xuICAgICAgY29uc3QgeyB1bml0IH0gPSBjdXJyZW50TGVzc29uO1xuICAgICAgY29uc3QgbGVzc29uU3RyaW5nID0gdW5pdC5yZXBsYWNlKC9cXHMvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChsZXNzb25TdHJpbmcuaW5kZXhPZih1bml0RmlsdGVyKSAhPT0gLTEgJiYgZmluYWxBcnIuaW5kZXhPZihjdXJyZW50TGVzc29uKSA9PT0gLTEpIHtcbiAgICAgICAgZmluYWxBcnIucHVzaChjdXJyZW50TGVzc29uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5hbEFycjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBvbkZpbHRlckxlc3NvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzdWJqZWN0RmlsdGVycywgdHlwZUZpbHRlcnMsIGxlc3NvbnM6IGFsbExlc3NvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGxlc3NvbnMgPSBhbGxMZXNzb25zO1xuICAgIGlmIChzdWJqZWN0RmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIGxlc3NvbnMgPSBsZXNzb25zLmZpbHRlcihsZXNzb24gPT4gc3ViamVjdEZpbHRlcnMuaW5kZXhPZihsZXNzb24uc3ViamVjdCkgIT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHR5cGVGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgbGVzc29ucyA9IGxlc3NvbnMuZmlsdGVyKGxlc3NvbiA9PiB0eXBlRmlsdGVycy5pbmRleE9mKGxlc3NvblR5cGVNYXBbbGVzc29uLnR5cGVdKSAhPT0gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gbGVzc29ucztcbiAgfVxuXG4gIGdldE1hcHBhYmxlTGVzc29ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN1YmplY3RGaWx0ZXJzLCB0eXBlRmlsdGVycywgc29ydCwgdW5pdEZpbHRlciwgdGl0bGVGaWx0ZXIsIGxlc3NvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG1hcHBhYmxlTGVzc29ucyA9IGxlc3NvbnM7XG4gICAgaWYgKHRpdGxlRmlsdGVyLmxlbmd0aCkge1xuICAgICAgbWFwcGFibGVMZXNzb25zID0gdGhpcy5vbkZpbHRlckJ5VGl0bGUoKTtcbiAgICB9XG4gICAgaWYgKHVuaXRGaWx0ZXIubGVuZ3RoKSB7XG4gICAgICBtYXBwYWJsZUxlc3NvbnMgPSB0aGlzLm9uRmlsdGVyQnlVbml0KCk7XG4gICAgfVxuICAgIGlmIChzdWJqZWN0RmlsdGVycy5sZW5ndGggfHwgdHlwZUZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICBtYXBwYWJsZUxlc3NvbnMgPSB0aGlzLm9uRmlsdGVyTGVzc29ucygpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcmV0dXJuIHRoaXMub25Tb3J0TGVzc29ucyhtYXBwYWJsZUxlc3NvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwcGFibGVMZXNzb25zO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2xpY2sgPSAoZmlsdGVyVHlwZSwgZmlsdGVyKSA9PiB7XG4gICAgY29uc3QgeyBzdWJqZWN0RmlsdGVyczogY3VycmVudFN1YmplY3RGaWx0ZXJzLCB0eXBlRmlsdGVyczogY3VycmVudFR5cGVGaWx0ZXJzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZTtcbiAgICBsZXQgbW9kaWZpZWRGaWx0ZXJOYW1lO1xuICAgIGxldCBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZTtcbiAgICBzd2l0Y2ggKGZpbHRlclR5cGUpIHtcbiAgICAgIGNhc2UgJ3N1YmplY3QnOlxuICAgICAgICBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdWJqZWN0RmlsdGVycztcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJOYW1lID0gJ3N1YmplY3RGaWx0ZXJzJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJDdXJyZW50U3RhdGUgPSBjdXJyZW50VHlwZUZpbHRlcnM7XG4gICAgICAgIG1vZGlmaWVkRmlsdGVyTmFtZSA9ICd0eXBlRmlsdGVycyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZS5pbmRleE9mKGZpbHRlcikgPT09IC0xKSB7XG4gICAgICBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZShtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSwge1xuICAgICAgICAkcHVzaDogW2ZpbHRlcl0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVySW5kZXggPSBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZS5pbmRleE9mKGZpbHRlcik7XG4gICAgICBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZShtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSwge1xuICAgICAgICAkc3BsaWNlOiBbWyBmaWx0ZXJJbmRleCwgMSBdXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgW21vZGlmaWVkRmlsdGVyTmFtZV06IG1vZGlmaWVkRmlsdGVyVXBkYXRlZFN0YXRlIH0pO1xuICB9XG5cbiAgaGFuZGxlTGVzc29uQ2xpY2sgPSAobGVzc29uKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZExlc3NvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG1vZGlmaWVkTGVzc29ucztcbiAgICBpZiAoc2VsZWN0ZWRMZXNzb25zLmluZGV4T2YobGVzc29uKSA9PT0gLTEpIHtcbiAgICAgIG1vZGlmaWVkTGVzc29ucyA9IHVwZGF0ZShzZWxlY3RlZExlc3NvbnMsIHtcbiAgICAgICAgJHB1c2g6IFtsZXNzb25dLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlc3NvbkluZGV4ID0gc2VsZWN0ZWRMZXNzb25zLmluZGV4T2YobGVzc29uKTtcbiAgICAgIG1vZGlmaWVkTGVzc29ucyA9IHVwZGF0ZShzZWxlY3RlZExlc3NvbnMsIHtcbiAgICAgICAgJHNwbGljZTogW1sgbGVzc29uSW5kZXgsIDEgXV0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTGVzc29uczogbW9kaWZpZWRMZXNzb25zIH0pO1xuICB9XG5cbiAgYXNzaWduTGVzc29ucyA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgeyBvbkFzc2lnbkxlc3NvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZExlc3NvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGFzc2lnbkRhdGU7XG4gICAgc3dpdGNoIChkYXRlKSB7XG4gICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgIGFzc2lnbkRhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9tb3Jyb3cnOlxuICAgICAgICBhc3NpZ25EYXRlID0gbW9tZW50KCkuYWRkKDEsICdkYXlzJykuZm9ybWF0KCdNTS9ERC9ZWScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25leHRTZXNzaW9uJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b21EYXRlJzpcbiAgICAgICAgYXNzaWduRGF0ZSA9ICcwMS8wNS8xOSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMub25Ub2dnbGVBc3NpZ25TZWxlY3RlZERyb3Bkb3duKCk7XG4gICAgdGhpcy5vblJlc2V0TW9kYWwoKTtcbiAgICBvbkFzc2lnbkxlc3NvbnMoc2VsZWN0ZWRMZXNzb25zLCBhc3NpZ25EYXRlKTtcbiAgfVxuXG4gIG1hcExlc3NvbnMgPSAoKSA9PiB0aGlzLmdldE1hcHBhYmxlTGVzc29ucygpLm1hcCgobGVzc29uLCBpbmRleCkgPT4gKFxuICAgIDxMZXNzb25DYXJkXG4gICAgICBsZXNzb249e2xlc3Nvbn1cbiAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgIGtleT17bGVzc29uLmlkfVxuICAgICAgb25TZXREcm9wZG93bj17dGhpcy5vblNldERyb3Bkb3dufVxuICAgICAgb25DbG9zZURyb3Bkb3duPXt0aGlzLm9uQ2xvc2VEcm9wZG93bn1cbiAgICAgIGRyb3Bkb3duSW5kZXg9e3RoaXMuc3RhdGUuZHJvcGRvd25JbmRleH1cbiAgICAgIGRyb3Bkb3duSXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duSXNPcGVufVxuICAgICAgaGFuZGxlTGVzc29uQ2xpY2s9e3RoaXMuaGFuZGxlTGVzc29uQ2xpY2t9XG4gICAgICBzZWxlY3RlZExlc3NvbnM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRMZXNzb25zfVxuICAgIC8+XG4gICkpXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuLCBzdWJqZWN0RmlsdGVycywgdHlwZUZpbHRlcnMsIHNvcnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmQtbWFpbiBjYXJkIHN3aXRjaGVyLXNlY3Rpb24gZ3JleSBsaWdodGVuLTNcIiBzdHlsZSA9IHt7bWluV2lkdGg6XCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yb3cgY2FyZC1wYW5lbCBsaWdodC1ibHVlIGxpZ2h0ZW4tMSB3aGl0ZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJvb2tzLWxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sYXJnZVwiPkFzc2lnbiBMZXNzb25zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxIHJpZ2h0LWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaWNvbnMtcm93XCI+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPVwibW9kYWwtY2xvc2UgY2xvc2VcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlLXRoaW5cIj48L2k+PC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxGaWx0ZXJTZWN0aW9uXG4gICAgICAgICAgICAgICAgICBzb3J0PXtzb3J0fVxuICAgICAgICAgICAgICAgICAgdHlwZUZpbHRlcnM9e3R5cGVGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgc3ViamVjdEZpbHRlcnM9e3N1YmplY3RGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgb25TZXRTb3J0PXt0aGlzLm9uU2V0U29ydH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xlYXJGaWx0ZXJzPXt0aGlzLm9uUmVzZXRNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlckNsaWNrPXt0aGlzLmhhbmRsZUZpbHRlckNsaWNrfVxuICAgICAgICAgICAgICAgICAgb25TZXRGaWx0ZXJlZFN0YXRlPXt0aGlzLm9uU2V0RmlsdGVyZWRTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uVW5zZXRGaWx0ZXJlZFN0YXRlPXt0aGlzLm9uVW5zZXRGaWx0ZXJlZFN0YXRlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXJvdyBjZW50ZXItYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJyZXN1bHRcIj4gLSB7dGhpcy5nZXRNYXBwYWJsZUxlc3NvbnMoKS5sZW5ndGh9IHJlc3VsdHMgLTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3hlcy1zZWN0aW9uIHJvdyBkLWZsZXgtY29udGVudCBjYXJkLXdpZHRoLTMyMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm1hcExlc3NvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQXNzaWduU2VsZWN0ZWREcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PSdkcm9wZG93bl9hc3NpZ25fc2VsZWN0ZWRfbGVzc29ucydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXIgd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuIGFkZC1idG5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9pPiBBc3NpZ24gU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Ryb3Bkb3duLWNvbnRlbnQnXG4gICAgICAgICAgICAgICAgICBpZD0nZHJvcGRvd25fYXNzaWduX3NlbGVjdGVkX2xlc3NvbnMnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBhc3NpZ25TZWxlY3RlZERyb3Bkb3duT3BlbiA/ICdibG9jaycgOiAnMCcsIG9wYWNpdHk6IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuID8gJzEnIDogJzAnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5hc3NpZ25MZXNzb25zKCd0b2RheScpfT5Gb3IgVG9kYXk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXNzaWduTGVzc29ucygndG9tb3Jyb3cnKX0+Rm9yIFRvbW9ycm93PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFzc2lnbkxlc3NvbnMoJ25leHRTZXNzaW9uJyl9PkZvciBOZXh0IFNlc3Npb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXNzaWduTGVzc29ucygnY3VzdG9tRGF0ZScpfT5Gb3IgRGF0ZS4uLjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXNzaWduTGVzc29uTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkFzc2lnbkxlc3NvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NpZ25MZXNzb25Nb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignLessonModal/index.js */"));
  }

}

AssignLessonModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onAssignLessons: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignLessonModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignSessionModal/index.js":
/*!****************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignSessionModal/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker-cssmodules.css */ "./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









class AssignSessionModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onResetModal", () => this.setState({
      date: '',
      startTime: '',
      endTime: '',
      notes: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "assignSession", () => {
      const {
        onAssignSession
      } = this.props;
      const {
        date: unformattedDate,
        startTime: unformattedStartTime,
        endTime: unformattedEndTime,
        notes
      } = this.state;
      const date = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedDate).format('MM/DD/YY');
      const startTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedStartTime).format('hh:mm');
      const endTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedEndTime).format('hh:mm');
      onAssignSession({
        date,
        startTime,
        endTime,
        notes,
        title: 'Session'
      });
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDatePickerChange", (field, value) => this.setState({
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-3300663016" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
    }, ".overlay.jsx-3300663016{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-3300663016{margin:0;border-radius:6px;}.modal.jsx-3300663016{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-3300663016{opacity:1;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25TZXNzaW9uTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEpXLEFBRzhCLEFBU04sQUFJSyxBQVNKLFNBWlEsQ0FhQyxJQVRJLENBYmEsWUFVdEMsRUFhQSxRQVRvQixXQWJaLE1BQ0UsQ0FhQSxPQVpDLENBYUMsUUFaSCxFQWFFLEtBWkksSUFhMkcsU0FaMUgsb0dBYUEiLCJmaWxlIjoiL1ZvbHVtZXMvSEREL1NpdGVzL2NsZWFyY2hvaWNldGVzdHByZXAvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvRGFzaGJvYXJkL2NvbXBvbmVudHMvTW9kYWxzL0Fzc2lnblNlc3Npb25Nb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci1jc3Ntb2R1bGVzLmNzcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuY2xhc3MgQXNzaWduU2Vzc2lvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGU6ICcnLFxuICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgIGVuZFRpbWU6ICcnLFxuICAgICAgbm90ZXM6ICcnLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7IG1vZGFsRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlN0YXRlLmRhdGUgPT09ICcnICYmIG1vZGFsRGF0ZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZTogbmV3IERhdGUobW9kYWxEYXRlKSB9KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0TW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0ZTogJycsIHN0YXJ0VGltZTogJycsIGVuZFRpbWU6ICcnLCBub3RlczogJycgfSlcblxuICBvbkNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2xvc2UoKTtcbiAgICB0aGlzLm9uUmVzZXRNb2RhbCgpO1xuICB9XG5cbiAgYXNzaWduU2Vzc2lvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQXNzaWduU2Vzc2lvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGU6IHVuZm9ybWF0dGVkRGF0ZSwgc3RhcnRUaW1lOiB1bmZvcm1hdHRlZFN0YXJ0VGltZSwgZW5kVGltZTogdW5mb3JtYXR0ZWRFbmRUaW1lLCBub3RlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KHVuZm9ybWF0dGVkRGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWScpO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG1vbWVudCh1bmZvcm1hdHRlZFN0YXJ0VGltZSkuZm9ybWF0KCdoaDptbScpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBtb21lbnQodW5mb3JtYXR0ZWRFbmRUaW1lKS5mb3JtYXQoJ2hoOm1tJyk7XG4gICAgb25Bc3NpZ25TZXNzaW9uKHsgZGF0ZSwgc3RhcnRUaW1lLCBlbmRUaW1lLCBub3RlcywgdGl0bGU6ICdTZXNzaW9uJyB9KTtcbiAgICB0aGlzLm9uUmVzZXRNb2RhbCgpO1xuICB9XG5cbiAgaGFuZGxlRGV0YWlsc0NoYW5nZSA9ICh7IHRhcmdldCB9KSA9PiB0aGlzLnNldFN0YXRlKHsgW3RhcmdldC5uYW1lXTogdGFyZ2V0LnZhbHVlIH0pXG5cbiAgaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRlLCBzdGFydFRpbWUsIGVuZFRpbWUsIG5vdGVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgb25PdXRlckNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9hc3NpZ25fc2Vzc2lvblwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1jYWxlbmRhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxNGIwNGInLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9jazJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ibG9ja1wiPiBOZXcgU2Vzc2lvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCByaWdodC1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwicGFuZWwtbGluayBjbG9zZSBtb2RhbC1jbG9zZVwiPjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2UtdGhpblwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU0vZGQveXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSgnZGF0ZScsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2RhdGUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJkYXRlXCI+RGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNsb2NrMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0VGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVJbnRlcnZhbHM9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImg6bW0gYWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNhcHRpb249XCJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydFRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdzdGFydFRpbWUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdGFydFRpbWUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJzdGFydFRpbWVcIj5TdGFydCBUaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2xvY2syXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kVGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVJbnRlcnZhbHM9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImg6bW0gYWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNhcHRpb249XCJUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW5kVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURhdGVQaWNrZXJDaGFuZ2UoJ2VuZFRpbWUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtlbmRUaW1lID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwiZW5kVGltZVwiPkVuZCBUaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGlucHV0LWZpZWxkLXRleHRhcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYS1zY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjQwXCIgcm93cz1cIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e25vdGVzID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwibm90ZXNcIj5TZXNzaW9uIE5vdGVzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciBtb2RhbC1mb290ZXItd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiPkNhbmNlbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuYXNzaWduU2Vzc2lvbn0gY2xhc3NOYW1lPVwibGluay1idG4gd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXRcIj5BZGQgU2Vzc2lvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5Bc3NpZ25TZXNzaW9uTW9kYWwucHJvcFR5cGVzID0ge1xuICBtb2RhbERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQXNzaWduU2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2lnblNlc3Npb25Nb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignSessionModal/index.js */"));
  }

}

AssignSessionModal.propTypes = {
  modalDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onAssignSession: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignSessionModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignSimulatedSATModal/index.js":
/*!*********************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignSimulatedSATModal/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker-cssmodules.css */ "./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");


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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onResetModal", () => this.setState({
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "assignSimulatedSat", () => {
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
      const assignDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(unformattedAssignDate).format('MM/DD/YY');
      const assignTime = moment__WEBPACK_IMPORTED_MODULE_5___default()(unformattedAssignTime).format('hh:mm');
      const dueDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(unformattedDueDate).format('MM/DD/YY');
      const dueTime = moment__WEBPACK_IMPORTED_MODULE_5___default()(unformattedDueTime).format('hh:mm');
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name = null) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSectionsChange", event => {
      const {
        sections
      } = this.state;

      if (sections.indexOf(event.target.name) === -1) {
        const updatedSections = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(sections, {
          $push: [event.target.name]
        });
        this.setState({
          sections: updatedSections
        });
      } else {
        const sectionIndex = sections.indexOf(event.target.name);
        const updatedSections = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(sections, {
          $splice: [[sectionIndex, 1]]
        });
        this.setState({
          sections: updatedSections
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDatePickerChange", (field, value) => this.setState({
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-482330571" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_12__["default"])(version, sampleVersions),
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
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    }, ".overlay.jsx-482330571{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-482330571{margin:0;border-radius:6px;}.modal.jsx-482330571{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-482330571{opacity:1;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25TaW11bGF0ZWRTQVRNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtVVMsQUFHNEIsQUFTTixBQUlLLEFBU0osU0FaUSxDQWFDLElBVEksQ0FiYSxZQVV0QyxFQWFBLFFBVG9CLFdBYlosTUFDRSxDQWFBLE9BWkMsQ0FhQyxRQVpILEVBYUUsS0FaSSxJQWEyRyxTQVoxSCxvR0FhQSIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9EYXNoYm9hcmQvY29tcG9uZW50cy9Nb2RhbHMvQXNzaWduU2ltdWxhdGVkU0FUTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnaW1tdXRhYmlsaXR5LWhlbHBlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci1jc3Ntb2R1bGVzLmNzcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi8uLi8uLi8uLi9Gb3JtQ29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgZ2V0VmFsdWVGcm9tU3RhdGUgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZ2V0VmFsdWVGcm9tU3RhdGUnO1xuXG5jb25zdCBzYW1wbGVWZXJzaW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAnU0FUIFByYWN0aWNlIFRlc3QgIzEnLFxuICAgIHZhbHVlOiAnU0FUIFByYWN0aWNlIFRlc3QgIzEnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTQVQgUHJhY3RpY2UgVGVzdCAjMicsXG4gICAgdmFsdWU6ICdTQVQgUHJhY3RpY2UgVGVzdCAjMicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1NBVCBQcmFjdGljZSBUZXN0ICMzJyxcbiAgICB2YWx1ZTogJ1NBVCBQcmFjdGljZSBUZXN0ICMzJyxcbiAgfSxcbl07XG5cbmNsYXNzIEFzc2lnblNpbXVsYXRlZFNhdE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZlcnNpb246ICcnLFxuICAgICAgYXNzaWduRGF0ZTogJycsXG4gICAgICBhc3NpZ25UaW1lOiAnJyxcbiAgICAgIGR1ZURhdGU6ICcnLFxuICAgICAgZHVlVGltZTogJycsXG4gICAgICBzZWN0aW9uczogW10sXG4gICAgICBhbGxvd1N0dWRlbnRUb0VudGVyQW5zd2VyczogZmFsc2UsXG4gICAgICBpbmNsdWRlU2NvcmVJbkltcHJvdmVtZW50TWV0cmljczogZmFsc2UsXG4gICAgICB0aW1lZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgbW9kYWxEYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwcmV2U3RhdGUuYXNzaWduRGF0ZSA9PT0gJycgJiYgbW9kYWxEYXRlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhc3NpZ25EYXRlOiBuZXcgRGF0ZShtb2RhbERhdGUpIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzZXRNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyB2ZXJzaW9uOiAnJywgYXNzaWduRGF0ZTogJycsIGFzc2lnblRpbWU6ICcnLCBkdWVEYXRlOiAnJywgZHVlVGltZTogJycsIHNlY3Rpb25zOiBbXSwgYWxsb3dTdHVkZW50VG9FbnRlckFuc3dlcnM6IGZhbHNlLCBpbmNsdWRlU2NvcmVJbkltcHJvdmVtZW50TWV0cmljczogZmFsc2UsIHRpbWVkOiBmYWxzZSB9KVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldE1vZGFsKCk7XG4gIH1cblxuICBhc3NpZ25TaW11bGF0ZWRTYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkFzc2lnblNpbXVsYXRlZFNhdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZlcnNpb24sIGFzc2lnbkRhdGU6IHVuZm9ybWF0dGVkQXNzaWduRGF0ZSwgYXNzaWduVGltZTogdW5mb3JtYXR0ZWRBc3NpZ25UaW1lLCBkdWVEYXRlOiB1bmZvcm1hdHRlZER1ZURhdGUsIGR1ZVRpbWU6IHVuZm9ybWF0dGVkRHVlVGltZSwgc2VjdGlvbnMsIGFsbG93U3R1ZGVudFRvRW50ZXJBbnN3ZXJzLCBpbmNsdWRlU2NvcmVJbkltcHJvdmVtZW50TWV0cmljcywgdGltZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYXNzaWduRGF0ZSA9IG1vbWVudCh1bmZvcm1hdHRlZEFzc2lnbkRhdGUpLmZvcm1hdCgnTU0vREQvWVknKTtcbiAgICBjb25zdCBhc3NpZ25UaW1lID0gbW9tZW50KHVuZm9ybWF0dGVkQXNzaWduVGltZSkuZm9ybWF0KCdoaDptbScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBtb21lbnQodW5mb3JtYXR0ZWREdWVEYXRlKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgY29uc3QgZHVlVGltZSA9IG1vbWVudCh1bmZvcm1hdHRlZER1ZVRpbWUpLmZvcm1hdCgnaGg6bW0nKTtcbiAgICBvbkFzc2lnblNpbXVsYXRlZFNhdCh7IHZlcnNpb24sIGFzc2lnbkRhdGUsIGFzc2lnblRpbWUsIGR1ZURhdGUsIGR1ZVRpbWUsIHNlY3Rpb25zLCBhbGxvd1N0dWRlbnRUb0VudGVyQW5zd2VycywgaW5jbHVkZVNjb3JlSW5JbXByb3ZlbWVudE1ldHJpY3MsIHRpbWVkIH0pO1xuICAgIHRoaXMub25SZXNldE1vZGFsKCk7XG4gIH1cblxuICBoYW5kbGVEZXRhaWxzQ2hhbmdlID0gKGV2ZW50LCBuYW1lID0gbnVsbCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94TmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgY29uc3QgcHJldlN0YXRlID0gdGhpcy5zdGF0ZVtjaGVja2JveE5hbWVdXG4gICAgICB0aGlzLnNldFN0YXRlKHsgW2NoZWNrYm94TmFtZV06ICFwcmV2U3RhdGUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IGV2ZW50IH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlY3Rpb25zQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2VjdGlvbnMuaW5kZXhPZihldmVudC50YXJnZXQubmFtZSkgPT09IC0xKSB7XG4gICAgICBjb25zdCB1cGRhdGVkU2VjdGlvbnMgPSB1cGRhdGUoc2VjdGlvbnMsIHtcbiAgICAgICAgJHB1c2g6IFsgZXZlbnQudGFyZ2V0Lm5hbWUgXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY3Rpb25zOiB1cGRhdGVkU2VjdGlvbnMgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlY3Rpb25JbmRleCA9IHNlY3Rpb25zLmluZGV4T2YoZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgICAgY29uc3QgdXBkYXRlZFNlY3Rpb25zID0gdXBkYXRlKHNlY3Rpb25zLCB7XG4gICAgICAgICRzcGxpY2U6IFtbIHNlY3Rpb25JbmRleCwgMSBdXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY3Rpb25zOiB1cGRhdGVkU2VjdGlvbnMgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2ZXJzaW9uLCBhc3NpZ25EYXRlLCBhc3NpZ25UaW1lLCBkdWVEYXRlLCBkdWVUaW1lLCBzZWN0aW9ucywgYWxsb3dTdHVkZW50VG9FbnRlckFuc3dlcnMsIGluY2x1ZGVTY29yZUluSW1wcm92ZW1lbnRNZXRyaWNzLCB0aW1lZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfYXNzaWduX3NpbXVsYXRlZF9zYXRcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1jdXN0b20gbW9kYWwtY2FsZW5kYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsIGNhcmQtcGFuZWwtdGl0bGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZWMzMzMwJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2lyY2xlc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWJsb2NrXCI+IE5ldyBTY29yZWQgU0FUIFRlc3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9IGNsYXNzTmFtZT1cInBhbmVsLWxpbmsgY2xvc2UgbW9kYWwtY2xvc2VcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlLXRoaW5cIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCcsIG1hcmdpblRvcDogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dldFZhbHVlRnJvbVN0YXRlKHZlcnNpb24sIHNhbXBsZVZlcnNpb25zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZShldmVudCwgJ3ZlcnNpb24nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NhbXBsZVZlcnNpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWZXJzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlS2V5PVwidmVyc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bktleT1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthc3NpZ25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL2RkL3l5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXNzaWduRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXNzaWduRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURhdGVQaWNrZXJDaGFuZ2UoJ2Fzc2lnbkRhdGUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXthc3NpZ25EYXRlID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwibmV3X3Rlc3Rfc2VjdGlvbl9hc3NpZ25fZGF0ZVwiPkFzc2lnbiBGb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLWZpZWxkIGlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9jazJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthc3NpZ25UaW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0T25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUludGVydmFscz17MTV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiaDptbSBhYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2FwdGlvbj1cIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhc3NpZ25UaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhc3NpZ25UaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSgnYXNzaWduVGltZScsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Fzc2lnblRpbWUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJhc3NpZ25UaW1lXCI+VGltZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZHVlRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTS9kZC95eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdkdWVEYXRlJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZHVlRGF0ZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImR1ZURhdGVcIj5EdWUgKG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNsb2NrMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2R1ZVRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXsxNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJoOm1tIGFhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPVwiVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1ZVRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZVRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdkdWVUaW1lJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZHVlVGltZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImR1ZVRpbWVcIj5UaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlXCI+U2VjdGlvbnM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsZWQtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiUmVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlY3Rpb25zLmluZGV4T2YoJ1JlYWRpbmcnKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlY3Rpb25zQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlYWRpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbGVkLWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIk1hdGggKG5vIGNhbGMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXRoTm9DYWxjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbnMuaW5kZXhPZignTWF0aCAobm8gY2FsYyknKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlY3Rpb25zQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1hdGggKG5vIGNhbGMpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGxlZC1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJXcml0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3cml0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbnMuaW5kZXhPZignV3JpdGluZycpICE9PSAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VjdGlvbnNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V3JpdGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsZWQtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTWF0aCAoY2FsY3VsYXRvcilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIk1hdGggKGNhbGN1bGF0b3IpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbnMuaW5kZXhPZignTWF0aCAoY2FsY3VsYXRvciknKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlY3Rpb25zQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1hdGggKGNhbGN1bGF0b3IpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtbm90ZVwiPk5vdGU6IHNjYWxlZCB0ZXN0IHNjb3JlcyBtYXkgcmVxdWlyZSBjb21iaW5hdGlvbnMgb2Ygc2VjdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbGVkLWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFsbG93U3R1ZGVudFRvRW50ZXJBbnN3ZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbGxvd1N0dWRlbnRUb0VudGVyQW5zd2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FsbG93U3R1ZGVudFRvRW50ZXJBbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFsbG93IFN0dWRlbnQgdG8gRW50ZXIgQW5zd2Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsZWQtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5jbHVkZVNjb3JlSW5JbXByb3ZlbWVudE1ldHJpY3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImluY2x1ZGVTY29yZUluSW1wcm92ZW1lbnRNZXRyaWNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aW5jbHVkZVNjb3JlSW5JbXByb3ZlbWVudE1ldHJpY3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW5jbHVkZSBTY29yZSBpbiBJbXByb3ZlbWVudCBNZXRyaWNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGxlZC1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aW1lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGltZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aW1lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UaW1lZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyIG1vZGFsLWZvb3Rlci13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9IGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0IHBpbmstdGV4dCB0ZXh0LWRhcmtlbi0xXCI+Q2FuY2VsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5hc3NpZ25TaW11bGF0ZWRTYXR9IGNsYXNzTmFtZT1cImxpbmstYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0bi1mbGF0XCI+U2F2ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuQXNzaWduU2ltdWxhdGVkU2F0TW9kYWwucHJvcFR5cGVzID0ge1xuICBtb2RhbERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQXNzaWduU2ltdWxhdGVkU2F0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzaWduU2ltdWxhdGVkU2F0TW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignSimulatedSATModal/index.js */"));
  }

}

AssignSimulatedSatModal.propTypes = {
  modalDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onAssignSimulatedSat: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignSimulatedSatModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignTargetTestModal/index.js":
/*!*******************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignTargetTestModal/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");


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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetTestDate", testDate => this.setState({
      testDate
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => this.setState({
      testDate: ''
    }, this.props.onClose));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "assignTargetTest", () => {
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-2310887436" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_7__["default"])(testDate, testDateOptions),
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
    }, ".overlay.jsx-2310887436{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-2310887436{margin:0;border-radius:6px;}.modal-custom.jsx-2310887436{opacity:1;visibility:visible;}.modal-footer.jsx-2310887436{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25UYXJnZXRUZXN0TW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dXLEFBRzhCLEFBU04sQUFJQyxBQUlhLFNBUEwsQ0FJQyxLQWJpQixRQWlCdEMsSUFQQSxFQUlBLG1CQWJRLE1BQ0UsUUFDQyxTQUNGLE9BQ00sYUFDZiIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9EYXNoYm9hcmQvY29tcG9uZW50cy9Nb2RhbHMvQXNzaWduVGFyZ2V0VGVzdE1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uLy4uLy4uLy4uL0Zvcm1Db21wb25lbnRzL0Ryb3Bkb3duJztcbmltcG9ydCBnZXRWYWx1ZUZyb21TdGF0ZSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9nZXRWYWx1ZUZyb21TdGF0ZSc7XG5cbmNvbnN0IHRlc3REYXRlT3B0aW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAnSmFudWFyeSBTQVQgKDAxLzE1LzIwMTkpJyxcbiAgICB2YWx1ZTogJzAxLzE1LzE5JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnSmFudWFyeSBTQVQgKDAxLzAyLzIwMTkpJyxcbiAgICB2YWx1ZTogJzAxLzAyLzE5JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnSmFudWFyeSBTQVQgKDAxLzIxLzIwMTkpJyxcbiAgICB2YWx1ZTogJzAxLzIxLzE5JyxcbiAgfSxcbl1cblxuY2xhc3MgQXNzaWduVGFyZ2V0VGVzdE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlc3REYXRlOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgb25TZXRUZXN0RGF0ZSA9ICh0ZXN0RGF0ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRlc3REYXRlIH0pXG5cbiAgb25DbG9zZU1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRlc3REYXRlOiAnJyB9LCB0aGlzLnByb3BzLm9uQ2xvc2UpXG5cbiAgYXNzaWduVGFyZ2V0VGVzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQXNzaWduVGFyZ2V0VGVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRlc3REYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIG9uQXNzaWduVGFyZ2V0VGVzdCh0ZXN0RGF0ZSk7XG4gICAgdGhpcy5vbkNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0ZXN0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfYXNzaWduX3RhcmdldF90ZXN0XCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWNhbGVuZGFyXCIgc3R5bGU9e3sgekluZGV4OiAnMTAwMycsIHRvcDogJzEwJScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbCBjYXJkLXBhbmVsLXRpdGxlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2VjMzMzMCcsIGNvbG9yOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWN1cFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWJsb2NrXCI+IFNldCBUYXJnZXQgVGVzdCBEYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHJpZ2h0LWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInBhbmVsLWxpbmsgY2xvc2UgbW9kYWwtY2xvc2VcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlLXRoaW5cIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCcsIG1hcmdpblRvcDogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dldFZhbHVlRnJvbVN0YXRlKHRlc3REYXRlLCB0ZXN0RGF0ZU9wdGlvbnMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRUZXN0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Rlc3REYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVzdCBEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlS2V5PVwidGVzdERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25LZXk9XCJ0ZXN0RGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RlXCI+Tm90ZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHRoZSBzdHVkZW50IHBsYW5zIHRvIHRha2UgdGhlIFNBVCBtdWx0aXBsZSB0aW1lcywgeW91IG1heSBzY2hlZHVsZSBtdWx0aXBsZSDigJxUYXJnZXQgVGVzdCBEYXRlcy7igJ0gVGVzdCBzY29yZSBhbmQgaW1wcm92ZW1lbnQgbWV0cmljcyB3aWxsIGJlIGJhc2VkIG9uIHRoZSBzdHVkZW504oCZcyBzY29yZSBvbiB0aGUg76yBbmFsIHRhcmdldCB0ZXN0IGRhdGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlciBtb2RhbC1mb290ZXItd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiPkNhbmNlbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuYXNzaWduVGFyZ2V0VGVzdH0gY2xhc3NOYW1lPVwibGluay1idG4gd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXRcIj5TZXQgVGFyZ2V0IFRlc3QgRGF0ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkFzc2lnblRhcmdldFRlc3RNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQXNzaWduVGFyZ2V0VGVzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2lnblRhcmdldFRlc3RNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignTargetTestModal/index.js */"));
  }

}

AssignTargetTestModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onAssignTargetTest: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignTargetTestModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignTestSectionModal/index.js":
/*!********************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignTestSectionModal/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker-cssmodules.css */ "./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_cssmodules_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");


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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onResetModal", () => this.setState({
      version: '',
      section: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      timed: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "assignTestSection", () => {
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
      const assignDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedAssignDate).format('MM/DD/YY');
      const assignTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedAssignTime).format('hh:mm');
      const dueDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedDueDate).format('MM/DD/YY');
      const dueTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(unformattedDueTime).format('hh:mm');
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name = null) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDatePickerChange", (field, value) => this.setState({
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-482330571" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__["default"])(version, sampleVersions),
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
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_11__["default"])(section, sampleSections),
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
    }, ".overlay.jsx-482330571{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-482330571{margin:0;border-radius:6px;}.modal.jsx-482330571{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-482330571{opacity:1;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25UZXN0U2VjdGlvbk1vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFQUyxBQUc0QixBQVNOLEFBSUssQUFTSixTQVpRLENBYUMsSUFUSSxDQWJhLFlBVXRDLEVBYUEsUUFUb0IsV0FiWixNQUNFLENBYUEsT0FaQyxDQWFDLFFBWkgsRUFhRSxLQVpJLElBYTJHLFNBWjFILG9HQWFBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25UZXN0U2VjdGlvbk1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci1jc3Ntb2R1bGVzLmNzcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi8uLi8uLi8uLi9Gb3JtQ29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgZ2V0VmFsdWVGcm9tU3RhdGUgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZ2V0VmFsdWVGcm9tU3RhdGUnO1xuXG5jb25zdCBzYW1wbGVWZXJzaW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAnU0FUIFByYWN0aWNlIFRlc3QgIzEnLFxuICAgIHZhbHVlOiAnU0FUIFByYWN0aWNlIFRlc3QgIzEnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTQVQgUHJhY3RpY2UgVGVzdCAjMicsXG4gICAgdmFsdWU6ICdTQVQgUHJhY3RpY2UgVGVzdCAjMicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1NBVCBQcmFjdGljZSBUZXN0ICMzJyxcbiAgICB2YWx1ZTogJ1NBVCBQcmFjdGljZSBUZXN0ICMzJyxcbiAgfSxcbl07XG5cbmNvbnN0IHNhbXBsZVNlY3Rpb25zID0gW1xuICB7XG4gICAgbGFiZWw6ICdNYXRoIChubyBjYWxjKScsXG4gICAgdmFsdWU6ICdNYXRoIChubyBjYWxjKScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1JlYWRpbmcnLFxuICAgIHZhbHVlOiAnUmVhZGluZycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1dyaXRpbmcnLFxuICAgIHZhbHVlOiAnV3JpdGluZycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ01hdGggKGNhbGN1bGF0b3IpJyxcbiAgICB2YWx1ZTogJ01hdGggKGNhbGN1bGF0b3IpJyxcbiAgfSxcbl07XG5cbmNsYXNzIEFzc2lnblRlc3RTZWN0aW9uTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmVyc2lvbjogJycsXG4gICAgICBzZWN0aW9uOiAnJyxcbiAgICAgIGFzc2lnbkRhdGU6ICcnLFxuICAgICAgYXNzaWduVGltZTogJycsXG4gICAgICBkdWVEYXRlOiAnJyxcbiAgICAgIGR1ZVRpbWU6ICcnLFxuICAgICAgdGltZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7IG1vZGFsRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlN0YXRlLmFzc2lnbkRhdGUgPT09ICcnICYmIG1vZGFsRGF0ZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXNzaWduRGF0ZTogbmV3IERhdGUobW9kYWxEYXRlKSB9KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0TW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgdmVyc2lvbjogJycsIHNlY3Rpb246ICcnLCBhc3NpZ25EYXRlOiAnJywgYXNzaWduVGltZTogJycsIGR1ZURhdGU6ICcnLCBkdWVUaW1lOiAnJywgdGltZWQ6IGZhbHNlIH0pXG5cbiAgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DbG9zZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNsb3NlKCk7XG4gICAgdGhpcy5vblJlc2V0TW9kYWwoKTtcbiAgfVxuXG4gIGFzc2lnblRlc3RTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25Bc3NpZ25UZXN0U2VjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZlcnNpb24sIHNlY3Rpb24sIGFzc2lnbkRhdGU6IHVuZm9ybWF0dGVkQXNzaWduRGF0ZSwgYXNzaWduVGltZTogdW5mb3JtYXR0ZWRBc3NpZ25UaW1lLCBkdWVEYXRlOiB1bmZvcm1hdHRlZER1ZURhdGUsIGR1ZVRpbWU6IHVuZm9ybWF0dGVkRHVlVGltZSwgdGltZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYXNzaWduRGF0ZSA9IG1vbWVudCh1bmZvcm1hdHRlZEFzc2lnbkRhdGUpLmZvcm1hdCgnTU0vREQvWVknKTtcbiAgICBjb25zdCBhc3NpZ25UaW1lID0gbW9tZW50KHVuZm9ybWF0dGVkQXNzaWduVGltZSkuZm9ybWF0KCdoaDptbScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBtb21lbnQodW5mb3JtYXR0ZWREdWVEYXRlKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgY29uc3QgZHVlVGltZSA9IG1vbWVudCh1bmZvcm1hdHRlZER1ZVRpbWUpLmZvcm1hdCgnaGg6bW0nKTtcbiAgICBvbkFzc2lnblRlc3RTZWN0aW9uKHsgdmVyc2lvbiwgc2VjdGlvbiwgYXNzaWduRGF0ZSwgYXNzaWduVGltZSwgZHVlRGF0ZSwgZHVlVGltZSwgdGltZWQgfSk7XG4gICAgdGhpcy5vblJlc2V0TW9kYWwoKTtcbiAgfVxuXG4gIGhhbmRsZURldGFpbHNDaGFuZ2UgPSAoZXZlbnQsIG5hbWUgPSBudWxsKSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoeyB0aW1lZCB9KSA9PiAoeyB0aW1lZDogIXRpbWVkIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogZXZlbnQgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2ZXJzaW9uLCBzZWN0aW9uLCBhc3NpZ25EYXRlLCBhc3NpZ25UaW1lLCBkdWVEYXRlLCBkdWVUaW1lLCB0aW1lZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfYXNzaWduX3Rlc3Rfc2VjdGlvblwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1jYWxlbmRhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMDYzOGUnLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFzc2lnbi1zZWN0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYmxvY2tcIj4gQXNzaWduIFRlc3QgU2VjdGlvbiAoYXMgY291cnNld29yayk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJwYW5lbC1saW5rIGNsb3NlIG1vZGFsLWNsb3NlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9zZS10aGluXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAnLCBtYXJnaW5Ub3A6ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZXRWYWx1ZUZyb21TdGF0ZSh2ZXJzaW9uLCBzYW1wbGVWZXJzaW9ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2UoZXZlbnQsICd2ZXJzaW9uJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtzYW1wbGVWZXJzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVmVyc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUtleT1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25LZXk9XCJ2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwJywgbWFyZ2luVG9wOiAnMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2V0VmFsdWVGcm9tU3RhdGUoc2VjdGlvbiwgc2FtcGxlU2VjdGlvbnMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlKGV2ZW50LCAnc2VjdGlvbicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2FtcGxlU2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVLZXk9XCJzZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duS2V5PVwic2VjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthc3NpZ25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL2RkL3l5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXNzaWduRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXNzaWduRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZURhdGVQaWNrZXJDaGFuZ2UoJ2Fzc2lnbkRhdGUnLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXthc3NpZ25EYXRlID8gJ2xhYmVsIGFjdGl2ZScgOiAnbGFiZWwnfSBodG1sRm9yPVwibmV3X3Rlc3Rfc2VjdGlvbl9hc3NpZ25fZGF0ZVwiPkFzc2lnbiBGb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLWZpZWxkIGlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9jazJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthc3NpZ25UaW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0T25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUludGVydmFscz17MTV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiaDptbSBhYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2FwdGlvbj1cIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhc3NpZ25UaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhc3NpZ25UaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlRGF0ZVBpY2tlckNoYW5nZSgnYXNzaWduVGltZScsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Fzc2lnblRpbWUgPyAnbGFiZWwgYWN0aXZlJyA6ICdsYWJlbCd9IGh0bWxGb3I9XCJhc3NpZ25UaW1lXCI+VGltZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZHVlRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTS9kZC95eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdkdWVEYXRlJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZHVlRGF0ZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImR1ZURhdGVcIj5EdWUgKG9wdGlvbmFsKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZmllbGQgaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNsb2NrMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2R1ZVRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXsxNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJoOm1tIGFhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPVwiVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1ZVRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZVRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVEYXRlUGlja2VyQ2hhbmdlKCdkdWVUaW1lJywgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZHVlVGltZSA/ICdsYWJlbCBhY3RpdmUnIDogJ2xhYmVsJ30gaHRtbEZvcj1cImR1ZVRpbWVcIj5UaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbGVkLWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpbWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aW1lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RpbWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRpbWVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXIgbW9kYWwtZm9vdGVyLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPVwibW9kYWwtY2xvc2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIj5DYW5jZWw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmFzc2lnblRlc3RTZWN0aW9ufSBjbGFzc05hbWU9XCJsaW5rLWJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdFwiPlNhdmU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTk5OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkFzc2lnblRlc3RTZWN0aW9uTW9kYWwucHJvcFR5cGVzID0ge1xuICBtb2RhbERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQXNzaWduVGVzdFNlY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NpZ25UZXN0U2VjdGlvbk1vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignTestSectionModal/index.js */"));
  }

}

AssignTestSectionModal.propTypes = {
  modalDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onAssignTestSection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignTestSectionModal);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js":
/*!*******************************************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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

class FilterSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleShowFilters", () => this.setState(({
      open
    }) => ({
      open: !open
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClearFilters", () => this.setState({
      titleFilter: '',
      unitFilter: ''
    }, this.props.onClearFilters));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSearchChange", ({
      target
    }) => this.setState({
      [target.name]: target.value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submitSearchFilter", searchType => {
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
    }, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_4__["default"])(sort, sortByOptions),
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

FilterSection.propTypes = {
  sort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onSetSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  typeFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onClearFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  sourceFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  subjectFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  difficultyFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  handleFilterClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onUnsetFilteredState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FilterSection);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js":
/*!*******************************************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class WorksheetCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDropdownClick", event => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editWorksheet", () => console.warn('Pending implementation of edit modal/functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cloneWorksheet", () => console.warn('Pending implementation of clone worksheet functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showOwner", () => console.warn('Pending implementation of show owner functionality'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteWorksheet", () => console.warn('Pending implementation of delete worksheet functionality'));
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
    return __jsx("div", {
      className: "card-main-col col s12 m8 l7 xl5"
    }, __jsx("div", {
      className: "card-checkbox"
    }, __jsx("input", {
      type: "checkbox",
      checked: selectedWorksheets.indexOf(worksheet) !== -1,
      onChange: () => handleWorksheetClick(worksheet)
    }), __jsx("div", {
      className: "checkbox-card card-main card-lesson-detail card-assigned card"
    }, __jsx("div", {
      className: "card-panel",
      style: {
        backgroundColor: '#666',
        color: '#fff'
      }
    }, __jsx("div", {
      className: "card-panel-row row"
    }, __jsx("div", {
      className: "icon-col col s2"
    }, __jsx("span", {
      className: "block-icon"
    }, __jsx("i", {
      className: "icon-sheets-w"
    }))), __jsx("div", {
      className: "col s9"
    }, __jsx("div", {
      className: "card-panel-text"
    }, __jsx("div", {
      className: "text-small"
    }, "Worksheet (", subject, ")"), __jsx("div", {
      className: "text-large"
    }, title))), __jsx("div", {
      className: "align-top col s1 right-align"
    }, __jsx("div", {
      className: "row icons-row"
    }, __jsx("div", {
      className: "dropdown-block col"
    }, __jsx("a", {
      href: "#",
      className: "dropdown-trigger btn",
      "data-target": "dropdown_worksheet_01",
      onClick: this.handleDropdownClick
    }, __jsx("i", {
      className: "material-icons dots-icon"
    }, "more_vert")), dropdownIsOpen && dropdownIndex === index ? __jsx("ul", {
      id: "dropdown_worksheet_01",
      className: "dropdown-content dropdown-wide",
      style: {
        display: 'block',
        transformOrigin: '0px 0px 0px',
        opacity: '1',
        transform: 'scaleX(1) scaleY(1)'
      }
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.editWorksheet,
      className: "modal-trigger link-block"
    }, "Edit")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.cloneWorksheet
    }, "Clone")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.showOwner
    }, "Show Owner")), __jsx("li", null, __jsx("a", {
      href: "#",
      onClick: this.deleteWorksheet
    }, "Delete"))) : null)))), __jsx("div", {
      className: "card-top-block"
    }, __jsx("div", {
      className: "d-flex row mb-0"
    }, __jsx("div", {
      className: "left-col col s6"
    }, __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Problem Type:"), __jsx("dd", null, type))), __jsx("div", {
      className: "right-col col s6 right-align"
    }, __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Di\uFB03culty:"), __jsx("dd", null, difficulty)))))), __jsx("div", {
      className: "card-content"
    }, __jsx("div", {
      className: "chart-container"
    }, __jsx("div", {
      className: "chart-holder"
    }, __jsx("span", {
      className: "svg-curved-bar",
      "data-values": "{\"from\": 0, \"to\": 100, \"current\": 0}",
      "data-duration": "1"
    }, __jsx("svg", {
      width: "110px",
      height: "110px",
      viewBox: " 0 0 110 110"
    }, __jsx("path", {
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#eaeaea'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"
    }), __jsx("path", {
      "data-dinamic": true,
      fill: "none",
      style: {
        strokeWidth: '22',
        stroke: '#31837a'
      },
      d: "M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"
    }))), __jsx("span", {
      className: "chart-value",
      style: {
        backgroundColor: '#4d4d4d'
      }
    })), __jsx("div", {
      className: "chart-description"
    }, __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Time Est:"), __jsx("dd", null, timeEstimate, " min")), __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Problems:"), __jsx("dd", null, problems)))), __jsx("div", {
      className: "card-text"
    }, __jsx("dl", {
      className: "dl-horizontal"
    }, __jsx("dt", null, "Worksheet Source:"), __jsx("dd", null, source))), __jsx("div", {
      className: "card-inner-row"
    }, __jsx("div", {
      className: "row-holder"
    }, __jsx("ul", {
      className: "classification-list"
    }, classifications.length ? classifications.map(classification => __jsx("li", {
      key: classification,
      className: "class-box"
    }, classification)) : __jsx("li", {
      className: "empty-box"
    }, "no classi\uFB01cation"))))))));
  }

}

WorksheetCard.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  dropdownIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  worksheet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onSetDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  dropdownIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  selectedWorksheets: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  handleWorksheetClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WorksheetCard);

/***/ }),

/***/ "./components/Dashboard/components/Modals/AssignWorksheetModal/index.js":
/*!******************************************************************************!*\
  !*** ./components/Dashboard/components/Modals/AssignWorksheetModal/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _components_FilterSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FilterSection */ "./components/Dashboard/components/Modals/AssignWorksheetModal/components/FilterSection/index.js");
/* harmony import */ var _components_WorksheetCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/WorksheetCard */ "./components/Dashboard/components/Modals/AssignWorksheetModal/components/WorksheetCard/index.js");
/* harmony import */ var _utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/sortOptions */ "./components/Dashboard/utils/sortOptions.js");
/* harmony import */ var _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/sampleWorksheets */ "./components/Dashboard/utils/sampleWorksheets.js");
/* harmony import */ var _utils_worksheetModalMaps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/worksheetModalMaps */ "./components/Dashboard/utils/worksheetModalMaps.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











class AssignWorksheetModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleAssignSelectedDropdown", () => this.setState(({
      assignSelectedDropdownOpen
    }) => ({
      assignSelectedDropdownOpen: !assignSelectedDropdownOpen
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetDropdown", dropdownIndex => this.setState({
      dropdownIndex,
      dropdownIsOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseDropdown", () => this.setState({
      dropdownIsOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onResetModal", () => this.setState({
      sourceFilters: [],
      difficultyFilters: [],
      subjectFilters: [],
      typeFilters: [],
      sort: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetSort", sort => this.setState({
      sort
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetFilteredState", (titleFilter, value) => this.setState({
      [titleFilter]: value
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUnsetFilteredState", titleFilter => this.setState({
      [titleFilter]: ''
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSortWorksheets", worksheets => {
      const {
        sort
      } = this.state;

      switch (sort) {
        case 'difficulty':
          return worksheets.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__["difficultySort"]);

        case 'problems':
          return worksheets.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__["problemSort"]);

        case 'timeEstimate':
          return worksheets.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__["timeEstimateSort"]);

        case 'subject':
          return worksheets.sort(_utils_sortOptions__WEBPACK_IMPORTED_MODULE_9__["subjectSort"]);

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByTitle", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterByUnit", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilterWorksheets", () => {
      const {
        subjectFilters,
        typeFilters,
        sourceFilters,
        difficultyFilters,
        worksheets: allWorksheets
      } = this.state;
      let worksheets = allWorksheets;

      if (subjectFilters.length) {
        worksheets = worksheets.filter(worksheet => subjectFilters.indexOf(_utils_worksheetModalMaps__WEBPACK_IMPORTED_MODULE_11__["worksheetSubjectMap"][worksheet.subject]) !== -1);
      }

      if (typeFilters.length) {
        worksheets = worksheets.filter(worksheet => typeFilters.indexOf(_utils_worksheetModalMaps__WEBPACK_IMPORTED_MODULE_11__["worksheetTypeMap"][worksheet.type]) !== -1);
      }

      if (sourceFilters.length) {
        worksheets = worksheets.filter(worksheet => sourceFilters.indexOf(_utils_worksheetModalMaps__WEBPACK_IMPORTED_MODULE_11__["worksheetSourceMap"][worksheet.source]) !== -1);
      }

      if (difficultyFilters.length) {
        worksheets = worksheets.filter(worksheet => difficultyFilters.indexOf(_utils_worksheetModalMaps__WEBPACK_IMPORTED_MODULE_11__["worksheetDifficultyMap"][worksheet.difficulty]) !== -1);
      }

      return worksheets;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getMappableWorksheets", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFilterClick", (filterType, filter) => {
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
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(modifiedFilterCurrentState, {
          $push: [filter]
        });
      } else {
        const filterIndex = modifiedFilterCurrentState.indexOf(filter);
        modifiedFilterUpdatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(modifiedFilterCurrentState, {
          $splice: [[filterIndex, 1]]
        });
      }

      this.setState({
        [modifiedFilterName]: modifiedFilterUpdatedState
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleWorksheetClick", worksheet => {
      const {
        selectedWorksheets
      } = this.state;
      let modifiedWorksheets;

      if (selectedWorksheets.indexOf(worksheet) === -1) {
        modifiedWorksheets = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(selectedWorksheets, {
          $push: [worksheet]
        });
      } else {
        const worksheetIndex = selectedWorksheets.indexOf(worksheet);
        modifiedWorksheets = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(selectedWorksheets, {
          $splice: [[worksheetIndex, 1]]
        });
      }

      this.setState({
        selectedWorksheets: modifiedWorksheets
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "assignWorksheets", date => {
      const {
        onAssignWorksheets
      } = this.props;
      const {
        selectedWorksheets
      } = this.state;
      let assignDate;

      switch (date) {
        case 'today':
          assignDate = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('MM/DD/YY');
          break;

        case 'tomorrow':
          assignDate = moment__WEBPACK_IMPORTED_MODULE_5___default()().add(1, 'days').format('MM/DD/YY');
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapWorksheets", () => this.getMappableWorksheets().map((worksheet, index) => __jsx(_components_WorksheetCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      worksheets: _utils_sampleWorksheets__WEBPACK_IMPORTED_MODULE_10__["default"],
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
    return __jsx("div", {
      className: "jsx-2666520574"
    }, open && __jsx("div", {
      className: "jsx-2666520574" + " " + "wrapper"
    }, __jsx("div", {
      style: {
        minWidth: "100%"
      },
      className: "jsx-2666520574" + " " + "card-modal card-main card switcher-section grey lighten-3"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "header-row card-panel light-blue lighten-1 white-text"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "col s11"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "d-flex"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "icon-col"
    }, __jsx("i", {
      className: "jsx-2666520574" + " " + "icon-sheets-w"
    })), __jsx("div", {
      className: "jsx-2666520574" + " " + "card-panel-text"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "text-large"
    }, "Assign Worksheets")))), __jsx("div", {
      className: "jsx-2666520574" + " " + "col s1 right-align"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "row icons-row"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-2666520574" + " " + "modal-close close"
    }, __jsx("i", {
      className: "jsx-2666520574" + " " + "icon-close-thin"
    })))))), __jsx(_components_FilterSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    }), __jsx("div", {
      className: "jsx-2666520574" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-2666520574" + " " + "result-row center-align"
    }, __jsx("b", {
      className: "jsx-2666520574" + " " + "result"
    }, " - ", this.getMappableWorksheets().length, " results -")), __jsx("div", {
      className: "jsx-2666520574" + " " + "checkboxes-section row d-flex-content card-width-322"
    }, this.mapWorksheets())))), __jsx("div", {
      className: "jsx-2666520574" + " " + "add-btn-block"
    }, __jsx("a", {
      href: "#",
      "data-target": "dropdown_assign_selected",
      onClick: this.onToggleAssignSelectedDropdown,
      className: "jsx-2666520574" + " " + "dropdown-trigger waves-effect waves-teal btn add-btn"
    }, __jsx("i", {
      className: "jsx-2666520574" + " " + "material-icons"
    }, "add"), " Assign Selected"), __jsx("ul", {
      id: "dropdown_assign_selected",
      style: {
        display: assignSelectedDropdownOpen ? 'block' : '0',
        opacity: assignSelectedDropdownOpen ? '1' : '0'
      },
      className: "jsx-2666520574" + " " + 'dropdown-content'
    }, __jsx("li", {
      className: "jsx-2666520574"
    }, __jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('today'),
      className: "jsx-2666520574"
    }, "For Today")), __jsx("li", {
      className: "jsx-2666520574"
    }, __jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('tomorrow'),
      className: "jsx-2666520574"
    }, "For Tomorrow")), __jsx("li", {
      className: "jsx-2666520574"
    }, __jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('nextSession'),
      className: "jsx-2666520574"
    }, "For Next Session")), __jsx("li", {
      className: "jsx-2666520574"
    }, __jsx("a", {
      href: "#",
      onClick: () => this.assignWorksheets('customDate'),
      className: "jsx-2666520574"
    }, "For Date..."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2666520574"
    }, ".card-modal.jsx-2666520574{margin:0;border-radius:6px;}.wrapper.jsx-2666520574{min-height:0px;}.modal-custom.jsx-2666520574{opacity:1;visibility:visible;}.modal-footer.jsx-2666520574{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25Xb3Jrc2hlZXRNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpU1csQUFHd0IsQUFJTSxBQUdMLEFBSWEsU0FWTCxDQU9DLEtBSHJCLFFBT0EsSUFWQSxFQU9BIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnRzL01vZGFscy9Bc3NpZ25Xb3Jrc2hlZXRNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi8uLi9Qb3J0YWwnO1xuXG5pbXBvcnQgRmlsdGVyU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyU2VjdGlvbic7XG5pbXBvcnQgV29ya3NoZWV0Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvV29ya3NoZWV0Q2FyZCc7XG5pbXBvcnQgeyBkaWZmaWN1bHR5U29ydCwgcHJvYmxlbVNvcnQsIHRpbWVFc3RpbWF0ZVNvcnQsIHN1YmplY3RTb3J0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc29ydE9wdGlvbnMnO1xuaW1wb3J0IHNhbXBsZVdvcmtzaGVldHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvc2FtcGxlV29ya3NoZWV0cyc7XG5pbXBvcnQgeyB3b3Jrc2hlZXRUeXBlTWFwLCB3b3Jrc2hlZXRTb3VyY2VNYXAsIHdvcmtzaGVldERpZmZpY3VsdHlNYXAsIHdvcmtzaGVldFN1YmplY3RNYXAgfSBmcm9tICcuLi8uLi8uLi91dGlscy93b3Jrc2hlZXRNb2RhbE1hcHMnO1xuXG5jbGFzcyBBc3NpZ25Xb3Jrc2hlZXRNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzb3J0OiAnJyxcbiAgICAgIHVuaXRGaWx0ZXI6ICcnLFxuICAgICAgdGl0bGVGaWx0ZXI6ICcnLFxuICAgICAgdHlwZUZpbHRlcnM6IFtdLFxuICAgICAgc291cmNlRmlsdGVyczogW10sXG4gICAgICBzdWJqZWN0RmlsdGVyczogW10sXG4gICAgICBzZWxlY3RlZFdvcmtzaGVldHM6IFtdLFxuICAgICAgZGlmZmljdWx0eUZpbHRlcnM6IFtdLFxuICAgICAgd29ya3NoZWV0czogc2FtcGxlV29ya3NoZWV0cyxcbiAgICAgIGRyb3Bkb3duSW5kZXg6IG51bGwsXG4gICAgICBkcm9wZG93bklzT3BlbjogZmFsc2UsXG4gICAgICBhc3NpZ25TZWxlY3RlZERyb3Bkb3duT3BlbjogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uVG9nZ2xlQXNzaWduU2VsZWN0ZWREcm9wZG93biA9ICgpID0+IHRoaXMuc2V0U3RhdGUoKHsgYXNzaWduU2VsZWN0ZWREcm9wZG93bk9wZW4gfSkgPT4gKHsgYXNzaWduU2VsZWN0ZWREcm9wZG93bk9wZW46ICFhc3NpZ25TZWxlY3RlZERyb3Bkb3duT3BlbiB9KSlcblxuICBvblNldERyb3Bkb3duID0gKGRyb3Bkb3duSW5kZXgpID0+IHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bkluZGV4LCBkcm9wZG93bklzT3BlbjogdHJ1ZSB9KTtcbiAgb25DbG9zZURyb3Bkb3duID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duSXNPcGVuOiBmYWxzZSB9KTtcblxuICBvblJlc2V0TW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc291cmNlRmlsdGVyczogW10sIGRpZmZpY3VsdHlGaWx0ZXJzOiBbXSwgc3ViamVjdEZpbHRlcnM6IFtdLCB0eXBlRmlsdGVyczogW10sIHNvcnQ6ICcnIH0pXG4gIG9uU2V0U29ydCA9IChzb3J0KSA9PiB0aGlzLnNldFN0YXRlKHsgc29ydCB9KVxuXG4gIG9uU2V0RmlsdGVyZWRTdGF0ZSA9ICh0aXRsZUZpbHRlciwgdmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbdGl0bGVGaWx0ZXJdOiB2YWx1ZSB9KVxuICBvblVuc2V0RmlsdGVyZWRTdGF0ZSA9ICh0aXRsZUZpbHRlcikgPT4gdGhpcy5zZXRTdGF0ZSh7IFt0aXRsZUZpbHRlcl06ICcnIH0pXG5cbiAgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DbG9zZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNsb3NlKCk7XG4gICAgdGhpcy5vblJlc2V0TW9kYWwoKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBvblNvcnRXb3Jrc2hlZXRzID0gKHdvcmtzaGVldHMpID0+IHtcbiAgICBjb25zdCB7IHNvcnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgc3dpdGNoIChzb3J0KSB7XG4gICAgICBjYXNlICdkaWZmaWN1bHR5JzpcbiAgICAgICAgcmV0dXJuIHdvcmtzaGVldHMuc29ydChkaWZmaWN1bHR5U29ydCk7XG4gICAgICBjYXNlICdwcm9ibGVtcyc6XG4gICAgICAgIHJldHVybiB3b3Jrc2hlZXRzLnNvcnQocHJvYmxlbVNvcnQpO1xuICAgICAgY2FzZSAndGltZUVzdGltYXRlJzpcbiAgICAgICAgcmV0dXJuIHdvcmtzaGVldHMuc29ydCh0aW1lRXN0aW1hdGVTb3J0KTtcbiAgICAgIGNhc2UgJ3N1YmplY3QnOlxuICAgICAgICByZXR1cm4gd29ya3NoZWV0cy5zb3J0KHN1YmplY3RTb3J0KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uRmlsdGVyQnlUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHdvcmtzaGVldHMsIHRpdGxlRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiB3b3Jrc2hlZXRzLnJlZHVjZSgoZmluYWxBcnIsIGN1cnJlbnRXb3Jrc2hlZXQpID0+IHtcbiAgICAgIGNvbnN0IHsgdGl0bGUgfSA9IGN1cnJlbnRXb3Jrc2hlZXQ7XG4gICAgICBjb25zdCB3b3Jrc2hlZXRTdHJpbmcgPSB0aXRsZS5yZXBsYWNlKC9cXHMvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh3b3Jrc2hlZXRTdHJpbmcuaW5kZXhPZih0aXRsZUZpbHRlcikgIT09IC0xICYmIGZpbmFsQXJyLmluZGV4T2YoY3VycmVudFdvcmtzaGVldCkgPT09IC0xKSB7XG4gICAgICAgIGZpbmFsQXJyLnB1c2goY3VycmVudFdvcmtzaGVldCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmluYWxBcnI7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgb25GaWx0ZXJCeVVuaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB3b3Jrc2hlZXRzLCB1bml0RmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiB3b3Jrc2hlZXRzLnJlZHVjZSgoZmluYWxBcnIsIGN1cnJlbnRXb3Jrc2hlZXQpID0+IHtcbiAgICAgIGNvbnN0IHsgdW5pdCB9ID0gY3VycmVudFdvcmtzaGVldDtcbiAgICAgIGNvbnN0IHdvcmtzaGVldFN0cmluZyA9IHVuaXQucmVwbGFjZSgvXFxzL2csIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAod29ya3NoZWV0U3RyaW5nLmluZGV4T2YodW5pdEZpbHRlcikgIT09IC0xICYmIGZpbmFsQXJyLmluZGV4T2YoY3VycmVudFdvcmtzaGVldCkgPT09IC0xKSB7XG4gICAgICAgIGZpbmFsQXJyLnB1c2goY3VycmVudFdvcmtzaGVldCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmluYWxBcnI7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgb25GaWx0ZXJXb3Jrc2hlZXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3ViamVjdEZpbHRlcnMsIHR5cGVGaWx0ZXJzLCBzb3VyY2VGaWx0ZXJzLCBkaWZmaWN1bHR5RmlsdGVycywgd29ya3NoZWV0czogYWxsV29ya3NoZWV0cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgd29ya3NoZWV0cyA9IGFsbFdvcmtzaGVldHM7XG4gICAgaWYgKHN1YmplY3RGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgd29ya3NoZWV0cyA9IHdvcmtzaGVldHMuZmlsdGVyKHdvcmtzaGVldCA9PiBzdWJqZWN0RmlsdGVycy5pbmRleE9mKHdvcmtzaGVldFN1YmplY3RNYXBbd29ya3NoZWV0LnN1YmplY3RdKSAhPT0gLTEpO1xuICAgIH1cbiAgICBpZiAodHlwZUZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICB3b3Jrc2hlZXRzID0gd29ya3NoZWV0cy5maWx0ZXIod29ya3NoZWV0ID0+IHR5cGVGaWx0ZXJzLmluZGV4T2Yod29ya3NoZWV0VHlwZU1hcFt3b3Jrc2hlZXQudHlwZV0pICE9PSAtMSk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgd29ya3NoZWV0cyA9IHdvcmtzaGVldHMuZmlsdGVyKHdvcmtzaGVldCA9PiBzb3VyY2VGaWx0ZXJzLmluZGV4T2Yod29ya3NoZWV0U291cmNlTWFwW3dvcmtzaGVldC5zb3VyY2VdKSAhPT0gLTEpO1xuICAgIH1cbiAgICBpZiAoZGlmZmljdWx0eUZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICB3b3Jrc2hlZXRzID0gd29ya3NoZWV0cy5maWx0ZXIod29ya3NoZWV0ID0+IGRpZmZpY3VsdHlGaWx0ZXJzLmluZGV4T2Yod29ya3NoZWV0RGlmZmljdWx0eU1hcFt3b3Jrc2hlZXQuZGlmZmljdWx0eV0pICE9PSAtMSk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jrc2hlZXRzO1xuICB9XG5cbiAgZ2V0TWFwcGFibGVXb3Jrc2hlZXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3ViamVjdEZpbHRlcnMsIHR5cGVGaWx0ZXJzLCBkaWZmaWN1bHR5RmlsdGVycywgc291cmNlRmlsdGVycywgc29ydCwgdW5pdEZpbHRlciwgdGl0bGVGaWx0ZXIsIHdvcmtzaGVldHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG1hcHBhYmxlV29ya3NoZWV0cyA9IHdvcmtzaGVldHM7XG4gICAgaWYgKHRpdGxlRmlsdGVyLmxlbmd0aCkge1xuICAgICAgbWFwcGFibGVXb3Jrc2hlZXRzID0gdGhpcy5vbkZpbHRlckJ5VGl0bGUoKTtcbiAgICB9XG4gICAgaWYgKHVuaXRGaWx0ZXIubGVuZ3RoKSB7XG4gICAgICBtYXBwYWJsZVdvcmtzaGVldHMgPSB0aGlzLm9uRmlsdGVyQnlVbml0KCk7XG4gICAgfVxuICAgIGlmIChzdWJqZWN0RmlsdGVycy5sZW5ndGggfHwgdHlwZUZpbHRlcnMubGVuZ3RoIHx8IGRpZmZpY3VsdHlGaWx0ZXJzLmxlbmd0aCB8fCBzb3VyY2VGaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgbWFwcGFibGVXb3Jrc2hlZXRzID0gdGhpcy5vbkZpbHRlcldvcmtzaGVldHMoKTtcbiAgICB9XG4gICAgaWYgKHNvcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uU29ydFdvcmtzaGVldHMobWFwcGFibGVXb3Jrc2hlZXRzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcHBhYmxlV29ya3NoZWV0cztcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNsaWNrID0gKGZpbHRlclR5cGUsIGZpbHRlcikgPT4ge1xuICAgIGNvbnN0IHsgc291cmNlRmlsdGVyczogY3VycmVudFNvdXJjZUZpbHRlcnMsIGRpZmZpY3VsdHlGaWx0ZXJzOiBjdXJyZW50RGlmZmljdWx0eUZpbHRlcnMsXG4gICAgICBzdWJqZWN0RmlsdGVyczogY3VycmVudFN1YmplY3RGaWx0ZXJzLCB0eXBlRmlsdGVyczogY3VycmVudFR5cGVGaWx0ZXJzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZTtcbiAgICBsZXQgbW9kaWZpZWRGaWx0ZXJOYW1lO1xuICAgIGxldCBtb2RpZmllZEZpbHRlclVwZGF0ZWRTdGF0ZTtcbiAgICBzd2l0Y2ggKGZpbHRlclR5cGUpIHtcbiAgICAgIGNhc2UgJ3N1YmplY3QnOlxuICAgICAgICBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdWJqZWN0RmlsdGVycztcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJOYW1lID0gJ3N1YmplY3RGaWx0ZXJzJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJDdXJyZW50U3RhdGUgPSBjdXJyZW50VHlwZUZpbHRlcnM7XG4gICAgICAgIG1vZGlmaWVkRmlsdGVyTmFtZSA9ICd0eXBlRmlsdGVycyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc291cmNlJzpcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJDdXJyZW50U3RhdGUgPSBjdXJyZW50U291cmNlRmlsdGVycztcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJOYW1lID0gJ3NvdXJjZUZpbHRlcnMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RpZmZpY3VsdHknOlxuICAgICAgICBtb2RpZmllZEZpbHRlckN1cnJlbnRTdGF0ZSA9IGN1cnJlbnREaWZmaWN1bHR5RmlsdGVycztcbiAgICAgICAgbW9kaWZpZWRGaWx0ZXJOYW1lID0gJ2RpZmZpY3VsdHlGaWx0ZXJzJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkRmlsdGVyQ3VycmVudFN0YXRlLmluZGV4T2YoZmlsdGVyKSA9PT0gLTEpIHtcbiAgICAgIG1vZGlmaWVkRmlsdGVyVXBkYXRlZFN0YXRlID0gdXBkYXRlKG1vZGlmaWVkRmlsdGVyQ3VycmVudFN0YXRlLCB7XG4gICAgICAgICRwdXNoOiBbZmlsdGVyXSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWx0ZXJJbmRleCA9IG1vZGlmaWVkRmlsdGVyQ3VycmVudFN0YXRlLmluZGV4T2YoZmlsdGVyKTtcbiAgICAgIG1vZGlmaWVkRmlsdGVyVXBkYXRlZFN0YXRlID0gdXBkYXRlKG1vZGlmaWVkRmlsdGVyQ3VycmVudFN0YXRlLCB7XG4gICAgICAgICRzcGxpY2U6IFtbIGZpbHRlckluZGV4LCAxIF1dLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBbbW9kaWZpZWRGaWx0ZXJOYW1lXTogbW9kaWZpZWRGaWx0ZXJVcGRhdGVkU3RhdGUgfSk7XG4gIH1cblxuICBoYW5kbGVXb3Jrc2hlZXRDbGljayA9ICh3b3Jrc2hlZXQpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkV29ya3NoZWV0cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgbW9kaWZpZWRXb3Jrc2hlZXRzO1xuICAgIGlmIChzZWxlY3RlZFdvcmtzaGVldHMuaW5kZXhPZih3b3Jrc2hlZXQpID09PSAtMSkge1xuICAgICAgbW9kaWZpZWRXb3Jrc2hlZXRzID0gdXBkYXRlKHNlbGVjdGVkV29ya3NoZWV0cywge1xuICAgICAgICAkcHVzaDogW3dvcmtzaGVldF0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd29ya3NoZWV0SW5kZXggPSBzZWxlY3RlZFdvcmtzaGVldHMuaW5kZXhPZih3b3Jrc2hlZXQpO1xuICAgICAgbW9kaWZpZWRXb3Jrc2hlZXRzID0gdXBkYXRlKHNlbGVjdGVkV29ya3NoZWV0cywge1xuICAgICAgICAkc3BsaWNlOiBbWyB3b3Jrc2hlZXRJbmRleCwgMSBdXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRXb3Jrc2hlZXRzOiBtb2RpZmllZFdvcmtzaGVldHMgfSk7XG4gIH1cblxuICBhc3NpZ25Xb3Jrc2hlZXRzID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCB7IG9uQXNzaWduV29ya3NoZWV0cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkV29ya3NoZWV0cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgYXNzaWduRGF0ZTtcbiAgICBzd2l0Y2ggKGRhdGUpIHtcbiAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgYXNzaWduRGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnTU0vREQvWVknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b21vcnJvdyc6XG4gICAgICAgIGFzc2lnbkRhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoJ01NL0REL1lZJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbmV4dFNlc3Npb24nOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1c3RvbURhdGUnOlxuICAgICAgICBhc3NpZ25EYXRlID0gJzAxLzA1LzE5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5vblRvZ2dsZUFzc2lnblNlbGVjdGVkRHJvcGRvd24oKTtcbiAgICBvbkFzc2lnbldvcmtzaGVldHMoc2VsZWN0ZWRXb3Jrc2hlZXRzLCBhc3NpZ25EYXRlKTtcbiAgfVxuXG4gIG1hcFdvcmtzaGVldHMgPSAoKSA9PiB0aGlzLmdldE1hcHBhYmxlV29ya3NoZWV0cygpLm1hcCgod29ya3NoZWV0LCBpbmRleCkgPT4gKFxuICAgIDxXb3Jrc2hlZXRDYXJkXG4gICAgICB3b3Jrc2hlZXQ9e3dvcmtzaGVldH1cbiAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgIGtleT17d29ya3NoZWV0LmlkfVxuICAgICAgb25TZXREcm9wZG93bj17dGhpcy5vblNldERyb3Bkb3dufVxuICAgICAgb25DbG9zZURyb3Bkb3duPXt0aGlzLm9uQ2xvc2VEcm9wZG93bn1cbiAgICAgIGRyb3Bkb3duSW5kZXg9e3RoaXMuc3RhdGUuZHJvcGRvd25JbmRleH1cbiAgICAgIGRyb3Bkb3duSXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duSXNPcGVufVxuICAgICAgaGFuZGxlV29ya3NoZWV0Q2xpY2s9e3RoaXMuaGFuZGxlV29ya3NoZWV0Q2xpY2t9XG4gICAgICBzZWxlY3RlZFdvcmtzaGVldHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRXb3Jrc2hlZXRzfVxuICAgIC8+XG4gICkpXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuLCB0eXBlRmlsdGVycywgc291cmNlRmlsdGVycywgc3ViamVjdEZpbHRlcnMsIGRpZmZpY3VsdHlGaWx0ZXJzLCBzb3J0IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBzd2l0Y2hlci1zZWN0aW9uIGdyZXkgbGlnaHRlbi0zXCIgc3R5bGUgPSB7e21pbldpZHRoOlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcm93IGNhcmQtcGFuZWwgbGlnaHQtYmx1ZSBsaWdodGVuLTEgd2hpdGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczExXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1zaGVldHMtd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxhcmdlXCI+QXNzaWduIFdvcmtzaGVldHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpY29ucy1yb3dcIj48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSBjbG9zZVwiPjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2UtdGhpblwiPjwvaT48L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEZpbHRlclNlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICAgICAgICB0eXBlRmlsdGVycz17dHlwZUZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBzb3VyY2VGaWx0ZXJzPXtzb3VyY2VGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgc3ViamVjdEZpbHRlcnM9e3N1YmplY3RGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgZGlmZmljdWx0eUZpbHRlcnM9e2RpZmZpY3VsdHlGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgb25TZXRTb3J0PXt0aGlzLm9uU2V0U29ydH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xlYXJGaWx0ZXJzPXt0aGlzLm9uUmVzZXRNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlckNsaWNrPXt0aGlzLmhhbmRsZUZpbHRlckNsaWNrfVxuICAgICAgICAgICAgICAgICAgb25TZXRGaWx0ZXJlZFN0YXRlPXt0aGlzLm9uU2V0RmlsdGVyZWRTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uVW5zZXRGaWx0ZXJlZFN0YXRlPXt0aGlzLm9uVW5zZXRGaWx0ZXJlZFN0YXRlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXJvdyBjZW50ZXItYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJyZXN1bHRcIj4gLSB7dGhpcy5nZXRNYXBwYWJsZVdvcmtzaGVldHMoKS5sZW5ndGh9IHJlc3VsdHMgLTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3hlcy1zZWN0aW9uIHJvdyBkLWZsZXgtY29udGVudCBjYXJkLXdpZHRoLTMyMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm1hcFdvcmtzaGVldHMoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD0nZHJvcGRvd25fYXNzaWduX3NlbGVjdGVkJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblRvZ2dsZUFzc2lnblNlbGVjdGVkRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyIHdhdmVzLWVmZmVjdCB3YXZlcy10ZWFsIGJ0biBhZGQtYnRuXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvaT4gQXNzaWduIFNlbGVjdGVkXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkcm9wZG93bi1jb250ZW50J1xuICAgICAgICAgICAgICAgICAgaWQ9J2Ryb3Bkb3duX2Fzc2lnbl9zZWxlY3RlZCdcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGFzc2lnblNlbGVjdGVkRHJvcGRvd25PcGVuID8gJ2Jsb2NrJyA6ICcwJywgb3BhY2l0eTogYXNzaWduU2VsZWN0ZWREcm9wZG93bk9wZW4gPyAnMScgOiAnMCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFzc2lnbldvcmtzaGVldHMoJ3RvZGF5Jyl9PkZvciBUb2RheTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5hc3NpZ25Xb3Jrc2hlZXRzKCd0b21vcnJvdycpfT5Gb3IgVG9tb3Jyb3c8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXNzaWduV29ya3NoZWV0cygnbmV4dFNlc3Npb24nKX0+Rm9yIE5leHQgU2Vzc2lvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5hc3NpZ25Xb3Jrc2hlZXRzKCdjdXN0b21EYXRlJyl9PkZvciBEYXRlLi4uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jYXJkLW1vZGFsIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1jdXN0b20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFzc2lnbldvcmtzaGVldE1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Bc3NpZ25Xb3Jrc2hlZXRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzaWduV29ya3NoZWV0TW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Dashboard/components/Modals/AssignWorksheetModal/index.js */"));
  }

}

AssignWorksheetModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onAssignWorksheets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AssignWorksheetModal);

/***/ }),

/***/ "./components/Dashboard/utils/dateAndCalendarUtils.js":
/*!************************************************************!*\
  !*** ./components/Dashboard/utils/dateAndCalendarUtils.js ***!
  \************************************************************/
/*! exports provided: getCalendarCellClassName, getCalendarDayClassName, calendarMap, currentMonthIndex, currentYear, getDayDate, getFirstDay, getDaysInActiveMonth, getDaysInPreviousMonth, getNextMonthAsCurrentMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarCellClassName", function() { return getCalendarCellClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarDayClassName", function() { return getCalendarDayClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarMap", function() { return calendarMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentMonthIndex", function() { return currentMonthIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentYear", function() { return currentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayDate", function() { return getDayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstDay", function() { return getFirstDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInActiveMonth", function() { return getDaysInActiveMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInPreviousMonth", function() { return getDaysInPreviousMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthAsCurrentMonth", function() { return getNextMonthAsCurrentMonth; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
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

/***/ "./components/Dashboard/utils/sampleLessons.js":
/*!*****************************************************!*\
  !*** ./components/Dashboard/utils/sampleLessons.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/Dashboard/utils/sampleWorksheets.js":
/*!********************************************************!*\
  !*** ./components/Dashboard/utils/sampleWorksheets.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/Dashboard/utils/sortOptions.js":
/*!***************************************************!*\
  !*** ./components/Dashboard/utils/sortOptions.js ***!
  \***************************************************/
/*! exports provided: difficultySort, pageNumberSort, problemSort, timeEstimateSort, subjectSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difficultySort", function() { return difficultySort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageNumberSort", function() { return pageNumberSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemSort", function() { return problemSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEstimateSort", function() { return timeEstimateSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectSort", function() { return subjectSort; });
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

/***/ "./components/Dashboard/utils/worksheetModalMaps.js":
/*!**********************************************************!*\
  !*** ./components/Dashboard/utils/worksheetModalMaps.js ***!
  \**********************************************************/
/*! exports provided: worksheetTypeMap, worksheetSourceMap, worksheetDifficultyMap, worksheetSubjectMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worksheetTypeMap", function() { return worksheetTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worksheetSourceMap", function() { return worksheetSourceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worksheetDifficultyMap", function() { return worksheetDifficultyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worksheetSubjectMap", function() { return worksheetSubjectMap; });
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

/***/ }),

/***/ "./components/FormComponents/Dropdown/index.js":
/*!*****************************************************!*\
  !*** ./components/FormComponents/Dropdown/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ControlComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ControlComponent */ "./components/FormComponents/Dropdown/styles/ControlComponent.js");
/* harmony import */ var _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/dropdownStyles */ "./components/FormComponents/Dropdown/styles/dropdownStyles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/FormComponents/Dropdown/styles/index.js");
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
}) => __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  className: className,
  valid: valid || !valid && value === {},
  padRight: padRight
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
  options: options,
  onChange: event => onChange(event.value, dropdownKey, stateKey),
  components: {
    Control: _styles_ControlComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  name: "categoryOptions",
  classNamePrefix: dropdownKey === 'difficulty' ? 'expanded-select' : 'select',
  placeholder: label,
  styles: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_4__["DropdownStyles"],
  isClearable: false,
  isSearchable: false,
  value: value,
  instanceId: "dropdown-select"
}));

Dropdown.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  padRight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  stateKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  dropdownKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./components/FormComponents/Dropdown/styles/ControlComponent.js":
/*!***********************************************************************!*\
  !*** ./components/FormComponents/Dropdown/styles/ControlComponent.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./components/FormComponents/Dropdown/styles/index.js");
/* harmony import */ var _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/dropdownStyles */ "./components/FormComponents/Dropdown/styles/dropdownStyles.js");
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
  return __jsx(___WEBPACK_IMPORTED_MODULE_3__["ControlWrapper"], {
    invalid: className,
    categoryCheck: categoryCheck
  }, __jsx("div", {
    style: _styles_dropdownStyles__WEBPACK_IMPORTED_MODULE_4__["DropdownStyles"]
  }, __jsx("p", null, categoryCheck ? 'Categories' : placeholder), __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__["components"].Control, props)));
};

ControlComponent.propTypes = {
  selectProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ControlComponent);

/***/ }),

/***/ "./components/FormComponents/Dropdown/styles/dropdownStyles.js":
/*!*********************************************************************!*\
  !*** ./components/FormComponents/Dropdown/styles/dropdownStyles.js ***!
  \*********************************************************************/
/*! exports provided: default, DropdownStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStyles", function() { return DropdownStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

// Keeping unused styling for now so I know what element they target
/* harmony default export */ __webpack_exports__["default"] = ({
  multiValueLabel: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
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
  menuList: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles),
  dropdownIndicator: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    display: 'none'
  }),
  multiValue: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    background: 'none'
  }),
  valueContainer: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles),
  input: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    paddingTop: '9px'
  }),
  groupHeading: styles => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles),
  control: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    boxShadow: 'none',
    borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important'
  })
});
const DropdownStyles = {
  container: (base, state) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
    opacity: state.isDisabled ? ".5" : "1",
    backgroundColor: "transparent",
    zIndex: "999"
  }),
  option: (styles, {
    isFocused
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
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
  }) => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
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

/***/ "./components/FormComponents/Dropdown/styles/index.js":
/*!************************************************************!*\
  !*** ./components/FormComponents/Dropdown/styles/index.js ***!
  \************************************************************/
/*! exports provided: ControlWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlWrapper", function() { return ControlWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
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
/* harmony default export */ __webpack_exports__["default"] = (DropdownWrapper);

/***/ }),

/***/ "./components/Location/components/LocationCard/index.js":
/*!**************************************************************!*\
  !*** ./components/Location/components/LocationCard/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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

LocationCard.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onRemoveLocation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationCard);

/***/ }),

/***/ "./components/Location/components/LocationDetailsModal/index.js":
/*!**********************************************************************!*\
  !*** ./components/Location/components/LocationDetailsModal/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _SharedModalComponents_OwnerSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SharedModalComponents/OwnerSection */ "./components/Location/components/SharedModalComponents/OwnerSection/index.js");
/* harmony import */ var _SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SharedModalComponents/LocationContactInfo */ "./components/Location/components/SharedModalComponents/LocationContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SharedModalComponents/LocationEmailSettings */ "./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js");
/* harmony import */ var _SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SharedModalComponents/LocationBranding */ "./components/Location/components/SharedModalComponents/LocationBranding/index.js");
/* harmony import */ var _NewLocationModal_utils_sampleOwners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NewLocationModal/utils/sampleOwners */ "./components/Location/components/NewLocationModal/utils/sampleOwners.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable array-callback-return */










 // TODO: Render only one instance of this modal

class LocationDetailsModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentWillReceiveProps", nextProps => {
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
        const originalLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(originalLocationState, {
          $merge: nextProps.location
        });
        this.setState({
          originalLocation,
          updatedLocation
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenUserListModal", () => this.setState({
      userListModalOpen: true,
      changeModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseUserListModal", () => this.setState({
      userListModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onOpenChangeModal", () => this.setState({
      changeModalOpen: true
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseChangeModal", () => this.setState({
      changeModalOpen: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", async event => {
      event.preventDefault();
      const {
        updatedLocation
      } = this.state;
      const {
        onSaveLocationChanges,
        onSaveLocationError,
        onClose
      } = this.props; // const valid = true;

      const valid = await Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_12__["nestedEditFieldValidation"])(this.state, this.state.updatedLocation, this.onSetValidation, this.props.onSetLocationValidation);

      if (!valid) {
        return onSaveLocationError();
      }

      onSaveLocationChanges(updatedLocation);
      return onClose();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialLocationMount", () => this.state.originalLocation.id !== this.props.location.id);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name, stateKey) => {
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
        updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(previousLocationState, {
          owner: {
            $set: event
          }
        });
      } else {
        updatedLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(previousLocationState, {
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
    const originalLocation = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(originalLocationState, {
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && __jsx("form", {
      className: "jsx-3756323712"
    }, __jsx("div", {
      className: "jsx-3756323712" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      nestedModals: userListModalOpen || changeModalOpen,
      onOuterClick: onClose
    }, __jsx("div", {
      id: "modal_location_create",
      className: "jsx-3756323712" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, __jsx("div", {
      className: "jsx-3756323712" + " " + "card-modal card-main card grey lighten-3"
    }, __jsx("div", {
      className: "jsx-3756323712" + " " + "card-panel card-panel-title green lighten-1 white-text"
    }, __jsx("div", {
      className: "jsx-3756323712" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-3756323712" + " " + "col"
    }, __jsx("h3", {
      className: "jsx-3756323712" + " " + "h2"
    }, __jsx("span", {
      className: "jsx-3756323712" + " " + "heading-holder"
    }, __jsx("span", {
      className: "jsx-3756323712" + " " + "heading-block"
    }, "Edit Location")))), __jsx("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-3756323712" + " " + "col"
    }, __jsx("span", {
      className: "jsx-3756323712" + " " + "block-icon"
    }, __jsx("i", {
      className: "jsx-3756323712" + " " + "icon-location"
    }), __jsx("span", {
      className: "jsx-3756323712" + " " + "text-icon"
    }, "Location"))))), __jsx("div", {
      className: "jsx-3756323712" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-3756323712" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-3756323712" + " " + "row mb-0"
    }, __jsx("div", {
      className: "jsx-3756323712" + " " + "col s12 l6"
    }, __jsx(_SharedModalComponents_OwnerSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
      owner: this.initialLocationMount() ? owner : updatedOwner,
      userList: _NewLocationModal_utils_sampleOwners__WEBPACK_IMPORTED_MODULE_11__["default"],
      handleDetailsChange: this.handleDetailsChange,
      userListModalOpen: userListModalOpen,
      changeModalOpen: changeModalOpen,
      onOpenUserListModal: this.onOpenUserListModal,
      onCloseUserListModal: this.onCloseUserListModal,
      onOpenChangeModal: this.onOpenChangeModal,
      onCloseChangeModal: this.onCloseChangeModal
    }), __jsx(_SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: this.initialLocationMount() ? locationContactInfo : updatedLocationContactInfo,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationContactInfoValidation,
      noColumn: true
    }), __jsx(_SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_9__["default"], {
      state: this.initialLocationMount() ? locationEmailSettings : updatedLocationEmailSettings,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationEmailSettingsValidation,
      noColumn: true
    })), __jsx(_SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_10__["default"], {
      state: this.initialLocationMount() ? locationBranding : updatedLocationBranding,
      handleDetailsChange: this.handleDetailsChange,
      validation: locationBrandingValidation
    }))), __jsx("div", {
      className: "jsx-3756323712" + " " + "modal-footer"
    }, __jsx("a", {
      href: "#!",
      onClick: onClose,
      className: "jsx-3756323712" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      style: {
        color: 'white'
      },
      onClick: this.onSubmit,
      className: "jsx-3756323712" + " " + "btn"
    }, "Save")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3756323712"
    }, "h4.jsx-3756323712{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-3756323712{font-size:16px;color:#343434;}p.passage.jsx-3756323712{font-size:14px;}a.jsx-3756323712{color:#343434;}.overlay.jsx-3756323712{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.modal.jsx-3756323712{display:block;background-color:transparent;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-footer.jsx-3756323712{background-color:white;}.modal-custom.jsx-3756323712{opacity:1;visibility:visible;}.modal-full-size.jsx-3756323712{z-index:999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25EZXRhaWxzTW9kYWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1JXLEFBR21DLEFBTUgsQUFJQSxBQUdELEFBR0MsQUFTRCxBQVNTLEFBR2IsQUFJRSxVQUhPLEVBSVIsRUE1QmIsQUFZK0IsQ0FuQmYsQUFJaEIsQUFNc0MsR0FoQm5CLEtBa0NuQixBQVFTLE1BbkNULEFBK0JBLENBS1EsS0ExQ3FCLENBMkNuQixPQWxCVSxDQW1CVCxJQTVCSCxLQTZCUixDQTVCVSxPQVNBLENBekJLLEFBaUJKLE9BU0MsRUFSSCxJQWpCVCxHQWtCZSxDQVFKLFNBQytHLEdBUjFILDBHQVNBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25EZXRhaWxzTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuXG5pbXBvcnQgT3duZXJTZWN0aW9uIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Pd25lclNlY3Rpb24nO1xuaW1wb3J0IExvY2F0aW9uQ29udGFjdEluZm8gZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9uQ29udGFjdEluZm8nO1xuaW1wb3J0IExvY2F0aW9uRW1haWxTZXR0aW5ncyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvTG9jYXRpb25FbWFpbFNldHRpbmdzJztcbmltcG9ydCBMb2NhdGlvbkJyYW5kaW5nIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbkJyYW5kaW5nJztcblxuaW1wb3J0IHNhbXBsZU93bmVycyBmcm9tICcuLi9OZXdMb2NhdGlvbk1vZGFsL3V0aWxzL3NhbXBsZU93bmVycyc7XG5pbXBvcnQgeyBuZXN0ZWRFZGl0RmllbGRWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmllbGRWYWxpZGF0aW9uJztcblxuLy8gVE9ETzogUmVuZGVyIG9ubHkgb25lIGluc3RhbmNlIG9mIHRoaXMgbW9kYWxcbmNsYXNzIExvY2F0aW9uRGV0YWlsc01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG93bmVyOiBudWxsLFxuICAgICAgdXNlckxpc3RNb2RhbE9wZW46IGZhbHNlLFxuICAgICAgY2hhbmdlTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIG9yaWdpbmFsTG9jYXRpb246IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBsb2NhdGlvbkNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgbG9jYXRpb25OYW1lOiAnJyxcbiAgICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiAnJyxcbiAgICAgICAgICBsb2NhdGlvbkVtYWlsOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblBob25lTnVtYmVyOiAnJyxcbiAgICAgICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblN0cmVldEFkZHJlc3M6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uQ2l0eTogJycsXG4gICAgICAgICAgbG9jYXRpb25TdGF0ZTogJycsXG4gICAgICAgICAgbG9jYXRpb25aaXA6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IHtcbiAgICAgICAgICBhdXRvbWF0ZWRFbWFpbE9yaWdpbjogJycsXG4gICAgICAgICAgYXV0b21hdGVkRW1haWxTYWx1dGF0aW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25CcmFuZGluZzoge1xuICAgICAgICAgIGxvY2F0aW9uVXJsOiAnJyxcbiAgICAgICAgICBoZWFkZXJDb2xvcjE6ICcnLFxuICAgICAgICAgIGhlYWRlckNvbG9yMjogJycsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRDb2xvcjogJycsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRBbHBoYTogJycsXG4gICAgICAgICAgaG9yaXpvbnRhbExvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICAgIHNxdWFyZUxvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJycsXG4gICAgICAgICAgYmFja2dyb3VuZEJsdXI6ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRPdmVybGF5QWxwaGE6ICcnLFxuICAgICAgICAgIHN0dWRlbnRXZWxjb21lVmlkZW86ICcnLFxuICAgICAgICAgIGluc3RydWN0b3JXZWxjb21lVmlkZW86ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZWRMb2NhdGlvbjoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGxvY2F0aW9uQ29udGFjdEluZm86IHtcbiAgICAgICAgICBsb2NhdGlvbk5hbWU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uTmlja25hbWU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uRW1haWw6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgIHdlYnNpdGU6ICcnLFxuICAgICAgICAgIGxvY2F0aW9uU3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgICAgbG9jYXRpb25DaXR5OiAnJyxcbiAgICAgICAgICBsb2NhdGlvblN0YXRlOiAnJyxcbiAgICAgICAgICBsb2NhdGlvblppcDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uRW1haWxTZXR0aW5nczoge1xuICAgICAgICAgIGF1dG9tYXRlZEVtYWlsT3JpZ2luOiAnJyxcbiAgICAgICAgICBhdXRvbWF0ZWRFbWFpbFNhbHV0YXRpb246ICcnLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgICAgbG9jYXRpb25Vcmw6ICcnLFxuICAgICAgICAgIGhlYWRlckNvbG9yMTogJycsXG4gICAgICAgICAgaGVhZGVyQ29sb3IyOiAnJyxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZEFscGhhOiAnJyxcbiAgICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgICAgc3F1YXJlTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQmx1cjogJycsXG4gICAgICAgICAgYmFja2dyb3VuZE92ZXJsYXlBbHBoYTogJycsXG4gICAgICAgICAgc3R1ZGVudFdlbGNvbWVWaWRlbzogJycsXG4gICAgICAgICAgaW5zdHJ1Y3RvcldlbGNvbWVWaWRlbzogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBsb2NhdGlvbkNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgbG9jYXRpb25OYW1lOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uTmlja25hbWU6IHRydWUsXG4gICAgICAgICAgbG9jYXRpb25FbWFpbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgICAgYXV0b21hdGVkRW1haWxPcmlnaW46IHRydWUsXG4gICAgICAgICAgYXV0b21hdGVkRW1haWxTYWx1dGF0aW9uOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgICAgbG9jYXRpb25Vcmw6IHRydWUsXG4gICAgICAgICAgaGVhZGVyQ29sb3IxOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckNvbG9yMjogdHJ1ZSxcbiAgICAgICAgICBoZWFkZXJMb2dvQmFja2dyb3VuZENvbG9yOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQWxwaGE6IHRydWUsXG4gICAgICAgICAgaG9yaXpvbnRhbExvZ29WYXJpYXRpb246IHRydWUsXG4gICAgICAgICAgc3F1YXJlTG9nb1ZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gICAgICAgICAgYmFja2dyb3VuZEJsdXI6IHRydWUsXG4gICAgICAgICAgYmFja2dyb3VuZE92ZXJsYXlBbHBoYTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbG9jYXRpb246IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHt9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVwZGF0ZWRMb2NhdGlvbiA9IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfTtcbiAgICBjb25zdCB7IG9yaWdpbmFsTG9jYXRpb246IG9yaWdpbmFsTG9jYXRpb25TdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBvcmlnaW5hbExvY2F0aW9uID0gdXBkYXRlKG9yaWdpbmFsTG9jYXRpb25TdGF0ZSwge1xuICAgICAgJG1lcmdlOiB1cGRhdGVkTG9jYXRpb24sXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9yaWdpbmFsTG9jYXRpb24sIHVwZGF0ZWRMb2NhdGlvbiB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgLy8gVE9ETzogVGhpcyBzZWVtcyB0byBiZSB3b3JraW5nIHdlbGwgLSBjb25maXJtIHRoYXQgb25seSBvbmUgaXNudGFuY2Ugb2YgdGhpcyBlZGl0IG1vZGFsIGlzIG9wZW5pbmcgb24gdGhlIHVzZXIgZWRpdCBwYWdlXG4gIC8vIFRoaXMgcmVzZXRzIHRoZSBjb21wb25lbnQgc3RhdGUgdG8gcmVmbGVjdCB0aGUgZGV0YWlscyBvZiB0aGUgbmV4dCB1c2VyIHRoZSB1c2VyIGNsaWNrcyBvblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIGlmICgoIXRoaXMuc3RhdGUub3JpZ2luYWxMb2NhdGlvbiB8fCBuZXh0UHJvcHMubG9jYXRpb24uaWQgIT09IHRoaXMuc3RhdGUub3JpZ2luYWxMb2NhdGlvbi5pZCkpIHtcbiAgICAgIGNvbnN0IHsgbG9jYXRpb246IHsgb3duZXIsIGlkLCBsb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHt9IH0gPSBuZXh0UHJvcHM7XG4gICAgICBjb25zdCB1cGRhdGVkTG9jYXRpb24gPSB7IG93bmVyLCBpZCwgbG9jYXRpb25Db250YWN0SW5mbywgbG9jYXRpb25FbWFpbFNldHRpbmdzLCBsb2NhdGlvbkJyYW5kaW5nIH07XG4gICAgICBjb25zdCB7IG9yaWdpbmFsTG9jYXRpb246IG9yaWdpbmFsTG9jYXRpb25TdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTG9jYXRpb24gPSB1cGRhdGUob3JpZ2luYWxMb2NhdGlvblN0YXRlLCB7XG4gICAgICAgICRtZXJnZTogbmV4dFByb3BzLmxvY2F0aW9uLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JpZ2luYWxMb2NhdGlvbiwgdXBkYXRlZExvY2F0aW9uIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVzZXJMaXN0TW9kYWwgaXMgdXNlZCB0byBhc3NpZ24gYW5kIHJlYXNzaWduIHVzZXJzIHRvIGEgbmV3IGxvY2F0aW9uXG4gIG9uT3BlblVzZXJMaXN0TW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlckxpc3RNb2RhbE9wZW46IHRydWUsIGNoYW5nZU1vZGFsT3BlbjogZmFsc2UgfSk7XG4gIG9uQ2xvc2VVc2VyTGlzdE1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJMaXN0TW9kYWxPcGVuOiBmYWxzZSB9KTtcblxuICAvLyBDaGFuZ2VNb2RhbCBwb3BzIHVwIHdoZW4gdXNlciBjbGlja3Mgb24gc2V0IG93bmVyIGFuZCBhc2tzIGZvciBjb25maXJtYXRpb24gdGhhdCB0aGV5IHdpc2ggdG8gYXNzaWduIGEgbmV3IG93bmVyIHRvIHRoZSBuZXcgbG9jYXRpb25cbiAgb25PcGVuQ2hhbmdlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2hhbmdlTW9kYWxPcGVuOiB0cnVlIH0pO1xuICBvbkNsb3NlQ2hhbmdlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2hhbmdlTW9kYWxPcGVuOiBmYWxzZSB9KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbnRvIG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZUxvY2F0aW9uQ2hhbmdlcyBwYXNzZWQgZG93biBmcm9tIHRoZSBjb250YWluZXIgbGV2ZWxcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgdXBkYXRlZExvY2F0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTG9jYXRpb25DaGFuZ2VzLCBvblNhdmVMb2NhdGlvbkVycm9yLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNvbnN0IHZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZCA9IGF3YWl0IG5lc3RlZEVkaXRGaWVsZFZhbGlkYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZS51cGRhdGVkTG9jYXRpb24sIHRoaXMub25TZXRWYWxpZGF0aW9uLCB0aGlzLnByb3BzLm9uU2V0TG9jYXRpb25WYWxpZGF0aW9uKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgIH1cbiAgICBvblNhdmVMb2NhdGlvbkNoYW5nZXModXBkYXRlZExvY2F0aW9uKTtcbiAgICByZXR1cm4gb25DbG9zZSgpO1xuICB9XG5cbiAgaW5pdGlhbExvY2F0aW9uTW91bnQgPSAoKSA9PiB0aGlzLnN0YXRlLm9yaWdpbmFsTG9jYXRpb24uaWQgIT09IHRoaXMucHJvcHMubG9jYXRpb24uaWQ7XG5cbiAgLy8gV2UgcHVsbCB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGZpZWxkIHR5cGUgdGhlbiBtZXJnZSB0aGF0IHVwZGF0ZWQga2V5L3ZhbHVlIHBhaXIgd2l0aCB0aGUgbGFzdCB2ZXJzaW9uIG9mIGNvbXBvbmVudCBzdGF0ZVxuICBoYW5kbGVEZXRhaWxzQ2hhbmdlID0gKGV2ZW50LCBuYW1lLCBzdGF0ZUtleSkgPT4ge1xuICAgIGNvbnN0IHsgdXBkYXRlZExvY2F0aW9uOiBwcmV2aW91c0xvY2F0aW9uU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChldmVudC5oZXgpIHtcbiAgICAgIHZhbHVlID0gZXZlbnQuaGV4O1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0KSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudDtcbiAgICB9XG4gICAgbGV0IHVwZGF0ZWRMb2NhdGlvbjtcbiAgICBpZiAobmFtZSA9PT0gJ293bmVyJykge1xuICAgICAgdXBkYXRlZExvY2F0aW9uID0gdXBkYXRlKHByZXZpb3VzTG9jYXRpb25TdGF0ZSwge1xuICAgICAgICBvd25lcjoge1xuICAgICAgICAgICRzZXQ6IGV2ZW50LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZWRMb2NhdGlvbiA9IHVwZGF0ZShwcmV2aW91c0xvY2F0aW9uU3RhdGUsIHtcbiAgICAgICAgW3N0YXRlS2V5XToge1xuICAgICAgICAgICRtZXJnZTogeyBbbmFtZV06IHZhbHVlIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0ZWRMb2NhdGlvbiB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4sIG9uQ2xvc2UsIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3duZXIsIGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uRW1haWxTZXR0aW5ncywgbG9jYXRpb25CcmFuZGluZyB9ID0gbG9jYXRpb247XG4gICAgY29uc3Qge1xuICAgICAgdXBkYXRlZExvY2F0aW9uOiB7IG93bmVyOiB1cGRhdGVkT3duZXIsIGxvY2F0aW9uQ29udGFjdEluZm86IHVwZGF0ZWRMb2NhdGlvbkNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IHVwZGF0ZWRMb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQnJhbmRpbmc6IHVwZGF0ZWRMb2NhdGlvbkJyYW5kaW5nIH0sXG4gICAgICB2YWxpZGF0aW9uOiB7IGxvY2F0aW9uQ29udGFjdEluZm86IGxvY2F0aW9uQ29udGFjdEluZm9WYWxpZGF0aW9uLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3M6IGxvY2F0aW9uRW1haWxTZXR0aW5nc1ZhbGlkYXRpb24sIGxvY2F0aW9uQnJhbmRpbmc6IGxvY2F0aW9uQnJhbmRpbmdWYWxpZGF0aW9uIH0sXG4gICAgICB1c2VyTGlzdE1vZGFsT3BlbiwgY2hhbmdlTW9kYWxPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XG4gICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG5lc3RlZE1vZGFscz17dXNlckxpc3RNb2RhbE9wZW4gfHwgY2hhbmdlTW9kYWxPcGVufSBvbk91dGVyQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9sb2NhdGlvbl9jcmVhdGVcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1jdXN0b20gbW9kYWwtY3VzdG9tLWxhcmdlIG1vZGFsLWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZCBncmV5IGxpZ2h0ZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZSBncmVlbiBsaWdodGVuLTEgd2hpdGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbC1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ibG9ja1wiPkVkaXQgTG9jYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9jYXRpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pY29uXCI+TG9jYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3duZXJTZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcj17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gb3duZXIgOiB1cGRhdGVkT3duZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdD17c2FtcGxlT3duZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RNb2RhbE9wZW49e3VzZXJMaXN0TW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9kYWxPcGVuPXtjaGFuZ2VNb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Vc2VyTGlzdE1vZGFsPXt0aGlzLm9uT3BlblVzZXJMaXN0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlVXNlckxpc3RNb2RhbD17dGhpcy5vbkNsb3NlVXNlckxpc3RNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkNoYW5nZU1vZGFsPXt0aGlzLm9uT3BlbkNoYW5nZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZUNoYW5nZU1vZGFsPXt0aGlzLm9uQ2xvc2VDaGFuZ2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkNvbnRhY3RJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gbG9jYXRpb25Db250YWN0SW5mbyA6IHVwZGF0ZWRMb2NhdGlvbkNvbnRhY3RJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbj17bG9jYXRpb25Db250YWN0SW5mb1ZhbGlkYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRW1haWxTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuaW5pdGlhbExvY2F0aW9uTW91bnQoKSA/IGxvY2F0aW9uRW1haWxTZXR0aW5ncyA6IHVwZGF0ZWRMb2NhdGlvbkVtYWlsU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPXtsb2NhdGlvbkVtYWlsU2V0dGluZ3NWYWxpZGF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Db2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uQnJhbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5pbml0aWFsTG9jYXRpb25Nb3VudCgpID8gbG9jYXRpb25CcmFuZGluZyA6IHVwZGF0ZWRMb2NhdGlvbkJyYW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURldGFpbHNDaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPXtsb2NhdGlvbkJyYW5kaW5nVmFsaWRhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gb25DbGljaz17dGhpcy5vblN1Ym1pdH0+U2F2ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjI4cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMS41MnJlbSAwIC45MTJyZW0gMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0MzQzNDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwLnBhc3NhZ2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0MzQzNDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1mdWxsLXNpemUge1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkxvY2F0aW9uRGV0YWlsc01vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TZXRMb2NhdGlvblZhbGlkYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkRldGFpbHNNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/LocationDetailsModal/index.js */"));
  }

}

LocationDetailsModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onSetLocationValidation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationDetailsModal);

/***/ }),

/***/ "./components/Location/components/LocationModal/components/LocationToggleCard/index.js":
/*!*********************************************************************************************!*\
  !*** ./components/Location/components/LocationModal/components/LocationToggleCard/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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

LocationToggleCard.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onToggleLocationSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationToggleCard);

/***/ }),

/***/ "./components/Location/components/LocationModal/index.js":
/*!***************************************************************!*\
  !*** ./components/Location/components/LocationModal/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _components_LocationToggleCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/LocationToggleCard */ "./components/Location/components/LocationModal/components/LocationToggleCard/index.js");
/* harmony import */ var _utils_sampleLocations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/sampleLocations */ "./components/utils/sampleLocations.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class LocationModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => this.setState({
      selectedLocations: []
    }, this.props.onClose));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onToggleLocationSelect", location => {
      const {
        selectedLocations
      } = this.state;

      if (selectedLocations.indexOf(location) === -1) {
        this.setState({
          selectedLocations: [...selectedLocations, location]
        });
      } else {
        const updatedLocations = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(selectedLocations, {
          $splice: [[selectedLocations.indexOf(location), 1]]
        });
        this.setState({
          selectedLocations: updatedLocations
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSaveLocationChanges", () => {
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
      locations: _utils_sampleLocations__WEBPACK_IMPORTED_MODULE_8__["default"],
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-3776783325" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_Location1",
      className: "jsx-3776783325" + " " + "modal modal-custom modal-location"
    }, __jsx("div", {
      className: "jsx-3776783325" + " " + "card-modal card"
    }, __jsx("div", {
      style: {
        backgroundColor: '#00456b',
        color: '#fff'
      },
      className: "jsx-3776783325" + " " + "owner-box card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-3776783325" + " " + "card-panel-row row"
    }, __jsx("div", {
      className: "jsx-3776783325" + " " + "col"
    }, __jsx("h3", {
      className: "jsx-3776783325"
    }, "Select Locations(s)")))), __jsx("div", {
      className: "jsx-3776783325" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-3776783325" + " " + "card-body"
    }, __jsx("span", {
      className: "jsx-3776783325" + " " + "hint"
    }, "Click to select or deselect."), __jsx("div", {
      className: "jsx-3776783325" + " " + "box-scrollable"
    }, __jsx("div", {
      className: "jsx-3776783325" + " " + "height-40 jcf-scrollable"
    }, __jsx("div", {
      style: {
        height: '100%',
        overflowY: 'scroll'
      },
      className: "jsx-3776783325" + " " + "card-location-holder"
    }, __jsx("ul", {
      className: "jsx-3776783325" + " " + "checkbox-list"
    }, locations.map(location => __jsx(_components_LocationToggleCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: location.locationName,
      location: location,
      onToggleLocationSelect: this.onToggleLocationSelect
    }))))))), __jsx("div", {
      className: "jsx-3776783325" + " " + "modal-footer"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-3776783325" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.onSaveLocationChanges,
      className: "jsx-3776783325" + " " + "btn"
    }, "Add"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3776783325"
    }, "h4.jsx-3776783325{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}.overlay.jsx-3776783325{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-3776783325{margin:0;border-radius:6px;}#modal_Location1.jsx-3776783325{border-radius:6px;}.modal.jsx-3776783325{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-3776783325{opacity:1;visibility:visible;}.modal-footer.jsx-3776783325{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTG9jYXRpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR1csQUFHbUMsQUFNSCxBQVNOLEFBSVMsQUFHSixBQVNKLEFBSWEsU0FuQkwsQ0FnQkMsSUFUSSxDQWhCYSxHQU5uQixBQW1CbkIsS0FnQkEsSUFuQkEsRUFnQkEsTUEvQjZCLEVBc0JULFdBaEJaLE1BQ0UsQ0FnQkEsT0F0QkssQUFPSixDQWdCQyxRQWZILEVBZ0JFLEVBdkJYLEdBUWUsSUFnQjJHLFNBZjFILG9HQWdCQSIsImZpbGUiOiIvVm9sdW1lcy9IREQvU2l0ZXMvY2xlYXJjaG9pY2V0ZXN0cHJlcC9jbGVhci1jaG9pY2UtYWRtaW4vY29tcG9uZW50cy9Mb2NhdGlvbi9jb21wb25lbnRzL0xvY2F0aW9uTW9kYWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnaW1tdXRhYmlsaXR5LWhlbHBlcic7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcbmltcG9ydCBMb2NhdGlvblRvZ2dsZUNhcmQgZnJvbSAnLi9jb21wb25lbnRzL0xvY2F0aW9uVG9nZ2xlQ2FyZCc7XG5cbmltcG9ydCBzYW1wbGVMb2NhdGlvbnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvc2FtcGxlTG9jYXRpb25zJztcblxuY2xhc3MgTG9jYXRpb25Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGxvY2F0aW9uczogc2FtcGxlTG9jYXRpb25zLFxuICAgICAgc2VsZWN0ZWRMb2NhdGlvbnM6IFtdLFxuICAgIH07XG4gIH1cblxuICBvbkNsb3NlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRMb2NhdGlvbnM6IFtdIH0sIHRoaXMucHJvcHMub25DbG9zZSlcblxuICBvblRvZ2dsZUxvY2F0aW9uU2VsZWN0ID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZExvY2F0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2VsZWN0ZWRMb2NhdGlvbnMuaW5kZXhPZihsb2NhdGlvbikgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRMb2NhdGlvbnM6IFsuLi5zZWxlY3RlZExvY2F0aW9ucywgbG9jYXRpb25dIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1cGRhdGVkTG9jYXRpb25zID0gdXBkYXRlKHNlbGVjdGVkTG9jYXRpb25zLCB7XG4gICAgICAgICRzcGxpY2U6IFtbc2VsZWN0ZWRMb2NhdGlvbnMuaW5kZXhPZihsb2NhdGlvbiksIDFdXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTG9jYXRpb25zOiB1cGRhdGVkTG9jYXRpb25zIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2F2ZUxvY2F0aW9uQ2hhbmdlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkTG9jYXRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaGFuZGxlTG9jYXRpb25zQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGhhbmRsZUxvY2F0aW9uc0NoYW5nZShzZWxlY3RlZExvY2F0aW9ucyk7XG4gICAgdGhpcy5vbkNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsb2NhdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX0xvY2F0aW9uMVwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWN1c3RvbSBtb2RhbC1sb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVyLWJveCBjYXJkLXBhbmVsIGNhcmQtcGFuZWwtdGl0bGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA0NTZiJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNlbGVjdCBMb2NhdGlvbnMocyk8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaW50XCI+Q2xpY2sgdG8gc2VsZWN0IG9yIGRlc2VsZWN0Ljwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1zY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlaWdodC00MCBqY2Ytc2Nyb2xsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbG9jYXRpb24taG9sZGVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKGxvY2F0aW9uID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uVG9nZ2xlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bG9jYXRpb24ubG9jYXRpb25OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUxvY2F0aW9uU2VsZWN0PXt0aGlzLm9uVG9nZ2xlTG9jYXRpb25TZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNhdmVMb2NhdGlvbkNoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMjhyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxLjUycmVtIDAgLjkxMnJlbSAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE5OTk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNhcmQtbW9kYWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgI21vZGFsX0xvY2F0aW9uMSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtY3VzdG9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbkxvY2F0aW9uTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVMb2NhdGlvbnNDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbk1vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/LocationModal/index.js */"));
  }

}

LocationModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  handleLocationsChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationModal);

/***/ }),

/***/ "./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js":
/*!**********************************************************************************************!*\
  !*** ./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/stateOptions */ "./components/utils/stateOptions.js");
/* harmony import */ var _utils_genderOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/genderOptions */ "./components/utils/genderOptions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







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
}, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
  value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(gender, _utils_genderOptions__WEBPACK_IMPORTED_MODULE_5__["default"]),
  onChange: event => handleDetailsChange(event, 'gender', 'ownerContactInfo'),
  options: _utils_genderOptions__WEBPACK_IMPORTED_MODULE_5__["default"],
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
}, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
  value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(state, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
  onChange: event => handleDetailsChange(event, 'state', 'ownerContactInfo'),
  options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
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

OwnerContactInfo.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OwnerContactInfo);

/***/ }),

/***/ "./components/Location/components/NewLocationModal/index.js":
/*!******************************************************************!*\
  !*** ./components/Location/components/NewLocationModal/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _components_OwnerContactInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/OwnerContactInfo */ "./components/Location/components/NewLocationModal/components/OwnerContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SharedModalComponents/LocationContactInfo */ "./components/Location/components/SharedModalComponents/LocationContactInfo/index.js");
/* harmony import */ var _SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SharedModalComponents/LocationEmailSettings */ "./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js");
/* harmony import */ var _SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SharedModalComponents/LocationBranding */ "./components/Location/components/SharedModalComponents/LocationBranding/index.js");
/* harmony import */ var _utils_fieldValidation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/fieldValidation */ "./components/utils/fieldValidation.js");
/* harmony import */ var _utils_initialState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/initialState */ "./components/Location/utils/initialState.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable no-unused-vars */












class NewLocationModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetValidation", (validation, cb) => this.setState({
      validation
    }, cb));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", async event => {
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

      const valid = await Object(_utils_fieldValidation__WEBPACK_IMPORTED_MODULE_11__["nestedCreateFieldValidation"])(this.state, this.onSetValidation, validation => console.warn('validation', validation));

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onResetLocation", () => this.setState(_utils_initialState__WEBPACK_IMPORTED_MODULE_12__["default"]));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      onClose();
      this.onResetLocation();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDetailsChange", (event, name, section) => {
      let value;

      if (event.hex) {
        value = event.hex;
      } else {
        value = event.target ? event.target.value : event;
      }

      const updatedState = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(this.state, {
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
    return __jsx(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-2557376288" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_user_create",
      className: "jsx-2557376288" + " " + "modal modal-custom modal-custom-large modal-gray"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "card-modal card-main card grey lighten-3"
    }, __jsx("div", {
      style: {
        backgroundColor: '#31837a',
        color: '#fff'
      },
      className: "jsx-2557376288" + " " + "card-panel card-panel-title"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "card-panel-row row"
    }, __jsx("div", {
      style: {
        display: 'block'
      },
      className: "jsx-2557376288" + " " + "col"
    }, __jsx("h3", {
      className: "jsx-2557376288" + " " + "h2"
    }, __jsx("span", {
      className: "jsx-2557376288" + " " + "heading-holder"
    }, __jsx("span", {
      className: "jsx-2557376288" + " " + "heading-block"
    }, "Create New Owner")))), __jsx("div", {
      className: "jsx-2557376288" + " " + "col"
    }, __jsx("span", {
      className: "jsx-2557376288" + " " + "block-icon"
    }, __jsx("i", {
      className: "jsx-2557376288" + " " + "icon-owner"
    }), __jsx("span", {
      className: "jsx-2557376288" + " " + "text-icon"
    }, "Owner"))))), __jsx("div", {
      className: "jsx-2557376288" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "card-body"
    }, __jsx("div", {
      className: "jsx-2557376288" + " " + "row mb-0"
    }, __jsx(_components_OwnerContactInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      state: ownerContactInfo,
      handleDetailsChange: this.handleDetailsChange
    }), __jsx(_SharedModalComponents_LocationContactInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: locationContactInfo,
      handleDetailsChange: this.handleDetailsChange
    })), __jsx("div", {
      className: "jsx-2557376288" + " " + "row mb-0"
    }, __jsx(_SharedModalComponents_LocationEmailSettings__WEBPACK_IMPORTED_MODULE_9__["default"], {
      state: locationEmailSettings,
      handleDetailsChange: this.handleDetailsChange
    }), __jsx(_SharedModalComponents_LocationBranding__WEBPACK_IMPORTED_MODULE_10__["default"], {
      state: locationBranding,
      handleDetailsChange: this.handleDetailsChange
    }))), __jsx("div", {
      className: "jsx-2557376288" + " " + "modal-footer"
    }, __jsx("a", {
      href: "#!",
      onClick: this.onCloseModal,
      className: "jsx-2557376288" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.onSubmit,
      className: "jsx-2557376288" + " " + "btn"
    }, "Save"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2557376288"
    }, ".overlay.jsx-2557376288{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.card-modal.jsx-2557376288{margin:0;border-radius:6px;}.modal.jsx-2557376288{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-custom.jsx-2557376288{opacity:1;visibility:visible;}.modal-footer.jsx-2557376288{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvTmV3TG9jYXRpb25Nb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTlcsQUFHZ0MsQUFTTixBQUlLLEFBU0osQUFJYSxTQWhCTCxDQWFDLElBVEksQ0FiYSxRQTBCdEMsSUFoQkEsRUFhQSxRQVRvQixXQWJaLE1BQ0UsQ0FhQSxPQVpDLENBYUMsUUFaSCxFQWFFLEtBWkksSUFhMkcsU0FaMUgsb0dBYUEiLCJmaWxlIjoiL1ZvbHVtZXMvSEREL1NpdGVzL2NsZWFyY2hvaWNldGVzdHByZXAvY2xlYXItY2hvaWNlLWFkbWluL2NvbXBvbmVudHMvTG9jYXRpb24vY29tcG9uZW50cy9OZXdMb2NhdGlvbk1vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJztcblxuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi8uLi9Qb3J0YWwnO1xuaW1wb3J0IENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBmcm9tICcuLi8uLi8uLi9DbGlja09mZkNvbXBvbmVudFdyYXBwZXInO1xuXG5pbXBvcnQgT3duZXJDb250YWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvT3duZXJDb250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25Db250YWN0SW5mbyBmcm9tICcuLi9TaGFyZWRNb2RhbENvbXBvbmVudHMvTG9jYXRpb25Db250YWN0SW5mbyc7XG5pbXBvcnQgTG9jYXRpb25FbWFpbFNldHRpbmdzIGZyb20gJy4uL1NoYXJlZE1vZGFsQ29tcG9uZW50cy9Mb2NhdGlvbkVtYWlsU2V0dGluZ3MnO1xuaW1wb3J0IExvY2F0aW9uQnJhbmRpbmcgZnJvbSAnLi4vU2hhcmVkTW9kYWxDb21wb25lbnRzL0xvY2F0aW9uQnJhbmRpbmcnO1xuXG5pbXBvcnQgeyBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9maWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuLi8uLi91dGlscy9pbml0aWFsU3RhdGUnO1xuXG5jbGFzcyBOZXdMb2NhdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG93bmVyQ29udGFjdEluZm86IHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIHppcDogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgIGF1dG9tYXRlZEVtYWlsT3JpZ2luQWRkcmVzczogJycsXG4gICAgICAgIGF1dG9tYXRlZEVtYWlsU2FsdXRhdGlvbjogJycsXG4gICAgICB9LFxuICAgICAgbG9jYXRpb25Db250YWN0SW5mbzoge1xuICAgICAgICBsb2NhdGlvbk5hbWU6ICcnLFxuICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiAnJyxcbiAgICAgICAgbG9jYXRpb25FbWFpbDogJycsXG4gICAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgICAgbG9jYXRpb25TdHJlZXRBZGRyZXNzOiAnJyxcbiAgICAgICAgbG9jYXRpb25DaXR5OiAnJyxcbiAgICAgICAgbG9jYXRpb25TdGF0ZTogJycsXG4gICAgICAgIGxvY2F0aW9uWmlwOiAnJyxcbiAgICAgIH0sXG4gICAgICBsb2NhdGlvbkJyYW5kaW5nOiB7XG4gICAgICAgIGxvY2F0aW9uVXJsOiAnJyxcbiAgICAgICAgaGVhZGVyQ29sb3IxOiAnJyxcbiAgICAgICAgaGVhZGVyQ29sb3IyOiAnJyxcbiAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRDb2xvcjogJycsXG4gICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQWxwaGE6ICcnLFxuICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogJycsXG4gICAgICAgIHNxdWFyZUxvZ29WYXJpYXRpb246ICcnLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxuICAgICAgICBiYWNrZ3JvdW5kQmx1cjogJycsXG4gICAgICAgIGJhY2tncm91bmRPdmVybGF5QWxwaGE6ICcnLFxuICAgICAgICBzdHVkZW50V2VsY29tZVZpZGVvOiAnJyxcbiAgICAgICAgaW5zdHJ1Y3RvcldlbGNvbWVWaWRlbzogJycsXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBvd25lckNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgZmlyc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGxhc3ROYW1lOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgIGdlbmRlcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25FbWFpbFNldHRpbmdzOiB7XG4gICAgICAgICAgYXV0b21hdGVkRW1haWxPcmlnaW5BZGRyZXNzOiB0cnVlLFxuICAgICAgICAgIGF1dG9tYXRlZEVtYWlsU2FsdXRhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25Db250YWN0SW5mbzoge1xuICAgICAgICAgIGxvY2F0aW9uTmFtZTogdHJ1ZSxcbiAgICAgICAgICBsb2NhdGlvbk5pY2tuYW1lOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uRW1haWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uQnJhbmRpbmc6IHtcbiAgICAgICAgICBsb2NhdGlvblVybDogdHJ1ZSxcbiAgICAgICAgICBoZWFkZXJDb2xvcjE6IHRydWUsXG4gICAgICAgICAgaGVhZGVyQ29sb3IyOiB0cnVlLFxuICAgICAgICAgIGhlYWRlckxvZ29CYWNrZ3JvdW5kQ29sb3I6IHRydWUsXG4gICAgICAgICAgaGVhZGVyTG9nb0JhY2tncm91bmRBbHBoYTogdHJ1ZSxcbiAgICAgICAgICBob3Jpem9udGFsTG9nb1ZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBzcXVhcmVMb2dvVmFyaWF0aW9uOiB0cnVlLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQmx1cjogdHJ1ZSxcbiAgICAgICAgICBiYWNrZ3JvdW5kT3ZlcmxheUFscGhhOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgaW50byBuZXN0ZWRDcmVhdGVGaWVsZFZhbGlkYXRpb24sIGl0IHRha2VzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24gY2hlY2sgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgLy8gVGhlIHVwZGF0ZWQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgaXMgc2V0IGFuZCB0aGVuIHRoZSBjYWxsYmFjayBpcyBkaXNwYXRjaGVkIC0gaW4gdGhpcyBjYXNlLCB0aGUgY2FsbGJhY2sgaGFuZGxlcyB0aGUgdG9hc3Qgd2FybmluZyBhdCB0aGUgY29udGFpbmVyIGxldmVsXG4gIG9uU2V0VmFsaWRhdGlvbiA9ICh2YWxpZGF0aW9uLCBjYikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSwgY2IpO1xuXG4gIC8vIElmIGFsbCB0aGUgZmllbGRzIGFyZSB2YWxpZCwgd2UgY29uc3RydWN0IGEgcG9zdCBib2R5IGFuZCBjYWxsIG9uU2F2ZU5ld0xvY2F0aW9uIHBhc3NlZCBkb3duIGZyb20gdGhlIGNvbnRhaW5lciBsZXZlbFxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBvd25lciwgbG9jYXRpb25Db250YWN0SW5mbywgbG9jYXRpb25FbWFpbFNldHRpbmdzLCBsb2NhdGlvbkJyYW5kaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25TYXZlTmV3TG9jYXRpb24sIG9uU2F2ZUxvY2F0aW9uRXJyb3IsIG9uQWRkTmV3TG9jYXRpb24sIGZyb21JbnN0cnVjdG9yUGFnZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIE5PVEU6IFN3YXAgb3V0IHdoYXQgaW5zdGFuY2Ugb2YgdmFsaWQgaXMgYWN0aXZlIGlmIHlvdSB3YW50IHRvIHRlc3Qgc2F2aW5nIGEgbmV3IGxvY2F0aW9uIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgdmFsaWRhdGlvblxuICAgIC8vIGNvbnN0IHZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZCA9IGF3YWl0IG5lc3RlZENyZWF0ZUZpZWxkVmFsaWRhdGlvbih0aGlzLnN0YXRlLCB0aGlzLm9uU2V0VmFsaWRhdGlvbiwgKHZhbGlkYXRpb24pID0+IGNvbnNvbGUud2FybigndmFsaWRhdGlvbicsIHZhbGlkYXRpb24pKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyByZXR1cm4gb25TYXZlTG9jYXRpb25FcnJvcigpO1xuICAgICAgY29uc29sZS53YXJuKCdub3QgdmFsaWQnKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdEJvZHkgPSB7IGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uRW1haWxTZXR0aW5ncywgbG9jYXRpb25CcmFuZGluZywgb3duZXIgfTtcbiAgICBpZiAoZnJvbUluc3RydWN0b3JQYWdlKSB7XG4gICAgICBvblNhdmVOZXdMb2NhdGlvbihwb3N0Qm9keSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQWRkTmV3TG9jYXRpb24ocG9zdEJvZHkpO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oJ3N0dWJiZWQgb3V0IHNhdmUgZnVuY3Rpb24nKTtcbiAgICB0aGlzLm9uQ2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgb25SZXNldExvY2F0aW9uID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DbG9zZSgpO1xuICAgIHRoaXMub25SZXNldExvY2F0aW9uKCk7XG4gIH1cblxuICAvLyBXZSBwdWxsIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgZmllbGQgdHlwZSB0aGVuIG1lcmdlIHRoYXQgdXBkYXRlZCBrZXkvdmFsdWUgcGFpciB3aXRoIHRoZSBsYXN0IHZlcnNpb24gb2YgY29tcG9uZW50IHN0YXRlXG4gIGhhbmRsZURldGFpbHNDaGFuZ2UgPSAoZXZlbnQsIG5hbWUsIHNlY3Rpb24pID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGV2ZW50LmhleCkge1xuICAgICAgdmFsdWUgPSBldmVudC5oZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogZXZlbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZSh0aGlzLnN0YXRlLCB7XG4gICAgICBbc2VjdGlvbl06IHsgJG1lcmdlOiB7IFtuYW1lXTogdmFsdWUgfSB9LFxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlZFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBvd25lckNvbnRhY3RJbmZvLCBsb2NhdGlvbkVtYWlsU2V0dGluZ3MsIGxvY2F0aW9uQ29udGFjdEluZm8sIGxvY2F0aW9uQnJhbmRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3VzZXJfY3JlYXRlXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLWN1c3RvbS1sYXJnZSBtb2RhbC1ncmF5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1vZGFsIGNhcmQtbWFpbiBjYXJkIGdyZXkgbGlnaHRlbi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgY2FyZC1wYW5lbC10aXRsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMzMTgzN2EnLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwtcm93IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYmxvY2tcIj5DcmVhdGUgTmV3IE93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tb3duZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWNvblwiPk93bmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8T3duZXJDb250YWN0SW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17b3duZXJDb250YWN0SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkNvbnRhY3RJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtsb2NhdGlvbkNvbnRhY3RJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVtYWlsU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2xvY2F0aW9uRW1haWxTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGV0YWlsc0NoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkJyYW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtsb2NhdGlvbkJyYW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgcGluay10ZXh0IHRleHQtZGFya2VuLTFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NsaWNrT2ZmQ29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2FyZC1tb2RhbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5OZXdMb2NhdGlvbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0xvY2F0aW9uTW9kYWw7XG4iXX0= */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/NewLocationModal/index.js */"));
  }

}

NewLocationModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NewLocationModal);

/***/ }),

/***/ "./components/Location/components/NewLocationModal/utils/sampleOwners.js":
/*!*******************************************************************************!*\
  !*** ./components/Location/components/NewLocationModal/utils/sampleOwners.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (sampleOwners);

/***/ }),

/***/ "./components/Location/components/SelectedUserRow/index.js":
/*!*****************************************************************!*\
  !*** ./components/Location/components/SelectedUserRow/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getUserInitials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/getUserInitials */ "./components/utils/getUserInitials.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Location/components/SelectedUserRow/styles/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SelectedUserRow = ({
  user,
  onOpenChangeModal
}) => __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
  onClick: onOpenChangeModal,
  className: "owner-box card-panel"
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
}, Object(_utils_getUserInitials__WEBPACK_IMPORTED_MODULE_2__["getTutorInitials"])(user))), __jsx("div", {
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

SelectedUserRow.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onOpenChangeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SelectedUserRow);

/***/ }),

/***/ "./components/Location/components/SelectedUserRow/styles/index.js":
/*!************************************************************************!*\
  !*** ./components/Location/components/SelectedUserRow/styles/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SelectedUserRowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SelectedUserRowWrapper",
  componentId: "sc-12bjge9-0"
})(["background-color:#31837a;color:#fff;.user-circle{background-color:#31837a;color:#fff;}:hover{cursor:pointer;background-color:#24645c!important;.user-circle{background-color:#24645c!important;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (SelectedUserRowWrapper);

/***/ }),

/***/ "./components/Location/components/SharedModalComponents/LocationBranding/index.js":
/*!****************************************************************************************!*\
  !*** ./components/Location/components/SharedModalComponents/LocationBranding/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable react/jsx-indent */





class LocationBranding extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetColorPicker", colorPickerField => this.setState({
      colorPickerOpen: true,
      colorPickerField
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseColorPicker", () => this.setState({
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
    }, "Header Color 1*"), colorPickerOpen && colorPickerField === 'headerColor1' ? __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onOuterClick: this.onCloseColorPicker
    }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_3__["ChromePicker"], {
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
    }, "Header Color 2*"), colorPickerOpen && colorPickerField === 'headerColor2' ? __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onOuterClick: this.onCloseColorPicker
    }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_3__["ChromePicker"], {
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
    }, "Header Logo Background Color*"), colorPickerOpen && colorPickerField === 'headerLogoBackgroundColor' ? __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onOuterClick: this.onCloseColorPicker
    }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_3__["ChromePicker"], {
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

LocationBranding.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationBranding);

/***/ }),

/***/ "./components/Location/components/SharedModalComponents/LocationContactInfo/index.js":
/*!*******************************************************************************************!*\
  !*** ./components/Location/components/SharedModalComponents/LocationContactInfo/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../FormComponents/Dropdown */ "./components/FormComponents/Dropdown/index.js");
/* harmony import */ var _utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/getValueFromState */ "./components/utils/getValueFromState.js");
/* harmony import */ var _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/stateOptions */ "./components/utils/stateOptions.js");
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
}, __jsx(_FormComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
  value: Object(_utils_getValueFromState__WEBPACK_IMPORTED_MODULE_3__["default"])(locationState, _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
  onChange: event => handleDetailsChange(event, 'locationState', 'locationContactInfo'),
  options: _utils_stateOptions__WEBPACK_IMPORTED_MODULE_4__["default"],
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

LocationContactInfo.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationContactInfo);

/***/ }),

/***/ "./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js":
/*!*********************************************************************************************!*\
  !*** ./components/Location/components/SharedModalComponents/LocationEmailSettings/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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

LocationEmailSettings.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LocationEmailSettings);

/***/ }),

/***/ "./components/Location/components/SharedModalComponents/OwnerSection/index.js":
/*!************************************************************************************!*\
  !*** ./components/Location/components/SharedModalComponents/OwnerSection/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Modal */ "./components/Modal/index.js");
/* harmony import */ var _UserListModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserListModal */ "./components/Location/components/UserListModal/index.js");
/* harmony import */ var _SelectedUserRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SelectedUserRow */ "./components/Location/components/SelectedUserRow/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






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
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
  open: changeModalOpen,
  onClose: onCloseChangeModal,
  onConfirm: onOpenUserListModal,
  header: "Are You Sure?",
  body: "Do you want to change the owner for this location?"
}), __jsx(_UserListModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
  open: userListModalOpen,
  onClose: onCloseUserListModal,
  userList: userList,
  onSubmit: handleDetailsChange
}), __jsx("div", {
  className: "card-block"
}, __jsx("h3", null, "Owner"), owner ? __jsx(_SelectedUserRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
  user: owner,
  onOpenChangeModal: onOpenChangeModal
}) : __jsx("div", {
  className: "add-box"
}, __jsx("div", {
  className: "add-box-holder"
}, __jsx("a", {
  href: "#",
  onClick: onOpenUserListModal,
  className: "btn-floating waves-effect waves-light green lighten-1"
}, __jsx("i", {
  className: "material-icons"
}, "add"))))));

OwnerSection.propTypes = {
  owner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  userList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  changeModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  userListModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  handleDetailsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenChangeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onCloseChangeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onOpenUserListModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onCloseUserListModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OwnerSection);

/***/ }),

/***/ "./components/Location/components/UserListModal/index.js":
/*!***************************************************************!*\
  !*** ./components/Location/components/UserListModal/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");
/* harmony import */ var _UserRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UserRow */ "./components/Location/components/UserRow/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable react/no-array-index-key */






class UserListModal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSelectUser", selectedUser => this.setState({
      selectedUser
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSetUser", () => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloseModal", () => {
      const {
        onClose
      } = this.props;
      this.setState({
        selectedUser: null
      }, onClose);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mapUsers", () => this.props.userList.map((user, index) => __jsx(_UserRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Portal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selector: "#modal"
    }, open && __jsx("div", {
      className: "jsx-318393204" + " " + "overlay"
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onOuterClick: this.onCloseModal
    }, __jsx("div", {
      id: "modal_Practice1",
      className: "jsx-318393204" + " " + "modal modal-custom modal-practice"
    }, __jsx("div", {
      className: "jsx-318393204" + " " + "card-modal card-course card-main card"
    }, __jsx("div", {
      className: "jsx-318393204" + " " + "card-panel green lighten-1 white-text"
    }, __jsx("div", {
      className: "jsx-318393204" + " " + "card-panel-row row"
    }, __jsx("div", {
      style: {
        flex: '1 0 83.333333%'
      },
      className: "jsx-318393204" + " " + "col"
    }, __jsx("h1", {
      className: "jsx-318393204" + " " + "h1"
    }, "Assign Owner")), __jsx("div", {
      style: {
        textAlign: 'right'
      },
      className: "jsx-318393204" + " " + "col"
    }, __jsx("a", {
      href: "#!",
      className: "jsx-318393204" + " " + "panel-link close modal-close"
    }, __jsx("i", {
      className: "jsx-318393204" + " " + "icon-close"
    }))))), __jsx("div", {
      className: "jsx-318393204" + " " + "card-content"
    }, __jsx("div", {
      className: "jsx-318393204" + " " + "card-body"
    }, this.mapUsers()), __jsx("div", {
      className: "jsx-318393204" + " " + "modal-footer"
    }, __jsx("div", {
      className: "jsx-318393204" + " " + "row"
    }, __jsx("div", {
      className: "jsx-318393204" + " " + "col s6"
    }, __jsx("div", {
      className: "jsx-318393204" + " " + "meta-info"
    })), __jsx("div", {
      className: "jsx-318393204" + " " + "col s6 right-align"
    }, __jsx("a", {
      href: "#",
      onClick: this.onCloseModal,
      className: "jsx-318393204" + " " + "modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
    }, "Cancel"), __jsx("a", {
      href: "#",
      onClick: this.onSetUser,
      style: {
        color: 'white'
      },
      className: "jsx-318393204" + " " + "btn"
    }, "Save"))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "318393204"
    }, "h4.jsx-318393204{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-318393204{font-size:16px;color:#343434;}p.passage.jsx-318393204{font-size:14px;}a.jsx-318393204{color:#343434;}.overlay.jsx-318393204{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:1999;}.modal.jsx-318393204{display:block;background-color:transparent;position:absolute;top:10%;right:10%;left:10%;}.modal-custom.jsx-318393204{opacity:1;visibility:visible;}.modal-footer.jsx-318393204{background-color:white;}.modal-full-size.jsx-318393204{z-index:1999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvVXNlckxpc3RNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR2EsQUFHNkIsQUFNSCxBQUlBLEFBR0QsQUFHQyxBQVNELEFBUUosQUFJYSxBQUdWLFVBTk0sR0FPUixDQTNCYixBQVkrQixDQW5CZixBQUloQixBQU1zQyxHQWhCbkIsS0FxQ25CLENBSVMsS0FsQ1QsQUEyQkEsRUFRUSxJQXpDcUIsRUEwQ25CLE1BakJVLEVBa0JULEdBM0JILE1BQ0UsQUEyQlYsT0FsQlUsQ0F6QkssQUFpQkosT0FTQyxFQVJILElBakJULEdBa0JlLENBUUosU0FDWCxHQVJBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL0xvY2F0aW9uL2NvbXBvbmVudHMvVXNlckxpc3RNb2RhbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vLi4vLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vLi4vLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuaW1wb3J0IFVzZXJSb3cgZnJvbSAnLi4vVXNlclJvdyc7XG5cbmNsYXNzIFVzZXJMaXN0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRVc2VyOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBvblNlbGVjdFVzZXIgPSAoc2VsZWN0ZWRVc2VyKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRVc2VyIH0pO1xuXG4gIG9uU2V0VXNlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkVXNlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9uU3VibWl0LCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU3VibWl0KHNlbGVjdGVkVXNlciwgJ293bmVyJywgbnVsbCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcjogbnVsbCB9LCBvbkNsb3NlKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVXNlcjogbnVsbCB9LCBvbkNsb3NlKTtcbiAgfVxuXG4gIG1hcFVzZXJzID0gKCkgPT4gdGhpcy5wcm9wcy51c2VyTGlzdC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgPFVzZXJSb3dcbiAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgb25TZWxlY3RVc2VyPXsoKSA9PiB0aGlzLm9uU2VsZWN0VXNlcih1c2VyKX1cbiAgICAgIHNlbGVjdGVkVXNlcj17dGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJ9XG4gICAgLz5cbiAgKSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgPENsaWNrT2ZmQ29tcG9uZW50V3JhcHBlciBvbk91dGVyQ2xpY2s9e3RoaXMub25DbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfUHJhY3RpY2UxXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtY3VzdG9tIG1vZGFsLXByYWN0aWNlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbW9kYWwgY2FyZC1jb3Vyc2UgY2FyZC1tYWluIGNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsIGdyZWVuIGxpZ2h0ZW4tMSB3aGl0ZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgZmxleDogJzEgMCA4My4zMzMzMzMlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+QXNzaWduIE93bmVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cInBhbmVsLWxpbmsgY2xvc2UgbW9kYWwtY2xvc2VcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubWFwVXNlcnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtdGVhbCBidG4tZmxhdCBwaW5rLXRleHQgdGV4dC1kYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2V0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4yOHJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICBtYXJnaW46IDEuNTJyZW0gMCAuOTEycmVtIDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgIH1cbiAgICAgICAgcC5wYXNzYWdlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE5OTk7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsLWN1c3RvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5tb2RhbC1mdWxsLXNpemUge1xuICAgICAgICAgIHotaW5kZXg6IDE5OTk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cblVzZXJMaXN0TW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXNlckxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3RNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Location/components/UserListModal/index.js */")));
  }

}

UserListModal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  userList: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserListModal);

/***/ }),

/***/ "./components/Location/components/UserRow/index.js":
/*!*********************************************************!*\
  !*** ./components/Location/components/UserRow/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getUserInitials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/getUserInitials */ "./components/utils/getUserInitials.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Location/components/UserRow/styles/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const UserRow = ({
  user,
  onSelectUser,
  selectedUser
}) => __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
}, Object(_utils_getUserInitials__WEBPACK_IMPORTED_MODULE_2__["getTutorInitials"])(user))), __jsx("div", {
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

UserRow.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectedUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onSelectUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserRow);

/***/ }),

/***/ "./components/Location/components/UserRow/styles/index.js":
/*!****************************************************************!*\
  !*** ./components/Location/components/UserRow/styles/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const UserRowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
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
/* harmony default export */ __webpack_exports__["default"] = (UserRowWrapper);

/***/ }),

/***/ "./components/Location/utils/initialState.js":
/*!***************************************************!*\
  !*** ./components/Location/utils/initialState.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (initialState);

/***/ }),

/***/ "./components/Location/utils/sampleLocationList.js":
/*!*********************************************************!*\
  !*** ./components/Location/utils/sampleLocationList.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: Modal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Portal */ "./components/Portal/index.js");
/* harmony import */ var _ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ClickOffComponentWrapper */ "./components/ClickOffComponentWrapper/index.js");

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
    return __jsx("div", null, __jsx(_Portal__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    }, __jsx(_ClickOffComponentWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }, "h4.jsx-3014652839{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0;margin-top:0;}p.jsx-3014652839{font-size:16px;color:#343434;}p.passage.jsx-3014652839{font-size:14px;}a.jsx-3014652839{color:#343434;}.overlay.jsx-3014652839{position:fixed!important;background-color:rgba(0,0,0,0.7)!important;top:0!important;right:0!important;bottom:0!important;left:0!important;z-index:9999!important;}.modal.jsx-3014652839{display:block;background-color:white;position:absolute;top:10%;right:10%;left:10%;box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);}.modal-footer.jsx-3014652839{background-color:white;}.modal-full-size.jsx-3014652839{z-index:1999;width:100%;left:0;top:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGYSxBQUdtQyxBQU1ILEFBSUEsQUFHRCxBQUdXLEFBU1gsQUFTUyxBQUdWLGFBQ0YsQ0F4QmIsQUFZeUIsQ0FuQlQsQUFJaEIsR0FWbUIsS0FrQ25CLENBSVMsQ0F0QnVDLElBVGhELEVBZ0NRLElBdENxQixFQXlCVCxBQWNWLFFBQ0MsU0FDWCxDQWZVLE9BekJLLENBMEJILEtBWE0sS0FZUCxFQTFCWCxPQTJCMEgsRUFadEcsa0JBQ0MsbUJBQ0YsaUJBQ00sdUJBQ3pCLDhCQVNBIiwiZmlsZSI6Ii9Wb2x1bWVzL0hERC9TaXRlcy9jbGVhcmNob2ljZXRlc3RwcmVwL2NsZWFyLWNob2ljZS1hZG1pbi9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vUG9ydGFsJztcbmltcG9ydCBDbGlja09mZkNvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi4vQ2xpY2tPZmZDb21wb25lbnRXcmFwcGVyJztcblxuZXhwb3J0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuLCBvbkNsb3NlLCBvbkNvbmZpcm0sIGhlYWRlciwgYm9keSwgZnVsbFNjcmVlbiwgcHJvYmxlbSwgcGFzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxuICAgICAgICAgIDxDaG9vc2U+XG4gICAgICAgICAgICA8V2hlbiBjb25kaXRpb249e2Z1bGxTY3JlZW59PlxuICAgICAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mdWxsLXNpemUgbW9kYWwgbW9kYWwtY3VzdG9tIG9wZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tb2RhbCBjYXJkLW1haW4gY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhc3NhZ2VcIj57cHJvYmxlbSA/IHByb2JsZW0ucHJvYmxlbVRleHQgOiBwYXNzYWdlLnBhc3NhZ2VUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXNzYWdlXCI+e2JvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiIyFcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2UgY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9zZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWZpZWxkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD5Qcm9ibGVtOjwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD57cHJvYmxlbSA/IHByb2JsZW0uaWQgOiBwYXNzYWdlLmlkfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+UGFzc2FnZTo8L2R0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e3Byb2JsZW0gPyBwcm9ibGVtLnBhc3MgOiBwYXNzYWdlLmlkfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1maWVsZCBpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXBhdGgtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZmlsZS1wYXRoXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlZpZGVvOiAgc29tZV92aWRlby5tcGdcIiByZWFkT25seT1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYmx1ZS10ZXh0IHRleHQtZGFya2VuLTNcIj5XYXRjaDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLXRlYWwgYnRuLWZsYXQgYmx1ZS10ZXh0IHRleHQtZGFya2VuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VcGxvYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1doZW4+XG4gICAgICAgICAgICA8T3RoZXJ3aXNlPlxuICAgICAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICA8Q2xpY2tPZmZDb21wb25lbnRXcmFwcGVyIG9uT3V0ZXJDbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aGVhZGVyfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy1ncmVlbiBidG4tZmxhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtZ3JlZW4gYnRuLWZsYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DbGlja09mZkNvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L090aGVyd2lzZT5cbiAgICAgICAgICA8L0Nob29zZT5cbiAgICAgICAgICB7IC8qIElubGluZSBzdHlsaW5nIGlzIHJlcXVpcmVkIGZvciB0aGUgTW9kYWwgY29tcG9uZW50IGR1ZSB0byB0aGUgUG9ydGFsICovIH1cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yOHJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEuNTJyZW0gMCAuOTEycmVtIDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcC5wYXNzYWdlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3R0b206IDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTkhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubW9kYWwtZnVsbC1zaXplIHtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZnVsbFNjcmVlbjogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJvYmxlbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFzc2FnZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19 */\n/*@ sourceURL=/Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/components/Modal/index.js */")));
  }

}
Modal.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  fullScreen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  problem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  passage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/Portal/index.js":
/*!************************************!*\
  !*** ./components/Portal/index.js ***!
  \************************************/
/*! exports provided: Portal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



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
Portal.propTypes = {
  selector: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./components/common/RadialBar/index.js":
/*!**********************************************!*\
  !*** ./components/common/RadialBar/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_RadialBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/RadialBar */ "./components/utils/RadialBar.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class RadailBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    return __jsx("svg", {
      width: svgWidth,
      height: svgHeight,
      viewBox: `0 0 ${svgWidth}${svgHeight}`
    }, __jsx("circle", {
      cx: svgWidth / 2,
      cy: svgHeight / 2,
      r: Object(_utils_RadialBar__WEBPACK_IMPORTED_MODULE_2__["getRadius"])(svgWidth, strokeWidth),
      fill: "transparent",
      stroke: "#e6e6e6",
      strokeWidth: strokeWidth
    }), __jsx("circle", {
      cx: svgWidth / 2,
      cy: svgHeight / 2,
      r: Object(_utils_RadialBar__WEBPACK_IMPORTED_MODULE_2__["getRadius"])(svgWidth, strokeWidth),
      fill: "transparent",
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      strokeDasharray: Object(_utils_RadialBar__WEBPACK_IMPORTED_MODULE_2__["getDashArray"])(svgWidth, strokeWidth),
      strokeDashoffset: Object(_utils_RadialBar__WEBPACK_IMPORTED_MODULE_2__["getDashoffset"])(svgWidth, strokeWidth, maxValue, currentValue)
    }));
  }

}

RadailBar.propTypes = {
  svgWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  svgHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  maxValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  strokeColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RadailBar);

/***/ }),

/***/ "./components/utils/RadialBar.js":
/*!***************************************!*\
  !*** ./components/utils/RadialBar.js ***!
  \***************************************/
/*! exports provided: getRadius, getDashArray, getDashoffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRadius", function() { return getRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashArray", function() { return getDashArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashoffset", function() { return getDashoffset; });
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

/***/ }),

/***/ "./components/utils/fieldValidation.js":
/*!*********************************************!*\
  !*** ./components/utils/fieldValidation.js ***!
  \*********************************************/
/*! exports provided: nestedEditFieldValidation, shallowEditFieldValidation, nestedCreateFieldValidation, shallowCreateFieldValidation, parseInvalidFieldsToString, shallowParseInvalidFieldsToString, saveNewSuccess, saveChangesSuccess, saveNewError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedEditFieldValidation", function() { return nestedEditFieldValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEditFieldValidation", function() { return shallowEditFieldValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedCreateFieldValidation", function() { return nestedCreateFieldValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCreateFieldValidation", function() { return shallowCreateFieldValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseInvalidFieldsToString", function() { return parseInvalidFieldsToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowParseInvalidFieldsToString", function() { return shallowParseInvalidFieldsToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveNewSuccess", function() { return saveNewSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveChangesSuccess", function() { return saveChangesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveNewError", function() { return saveNewError; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
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

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

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

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

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

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

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

  const initialValidation = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, validation);

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

/***/ "./components/utils/genderOptions.js":
/*!*******************************************!*\
  !*** ./components/utils/genderOptions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const genderOptions = [{
  label: 'Male',
  value: 'Male'
}, {
  label: 'Female',
  value: 'Female'
}];
/* harmony default export */ __webpack_exports__["default"] = (genderOptions);

/***/ }),

/***/ "./components/utils/getUserInitials.js":
/*!*********************************************!*\
  !*** ./components/utils/getUserInitials.js ***!
  \*********************************************/
/*! exports provided: getUserInitials, getTutorInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInitials", function() { return getUserInitials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTutorInitials", function() { return getTutorInitials; });
const getUserInitials = user => `${user.accountInfo.firstName[0]}${user.accountInfo.lastName[0]}`;
const getTutorInitials = user => `${user.firstName[0]}${user.lastName[0]}`;

/***/ }),

/***/ "./components/utils/getValueFromState.js":
/*!***********************************************!*\
  !*** ./components/utils/getValueFromState.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (getValueFromState);

/***/ }),

/***/ "./components/utils/locationOptions.js":
/*!*********************************************!*\
  !*** ./components/utils/locationOptions.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ "./components/utils/sampleInstructors.js":
/*!***********************************************!*\
  !*** ./components/utils/sampleInstructors.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ "./components/utils/sampleLocations.js":
/*!*********************************************!*\
  !*** ./components/utils/sampleLocations.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ }),

/***/ "./components/utils/sampleTopics.js":
/*!******************************************!*\
  !*** ./components/utils/sampleTopics.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ "./components/utils/sortFunctions.js":
/*!*******************************************!*\
  !*** ./components/utils/sortFunctions.js ***!
  \*******************************************/
/*! exports provided: firstNameAscending, firstNameDescending, lastNameAscending, lastNameDescending, dueDate, assignDate, problems, completed, flags, score, timeEstimate, timeEstimateAscending, subjectAscending, subjectDescending, passageAscending, passageDescending, statusDescending, statusAscending, flagsDescending, flagsAscending, availableDateDescending, availableDateAscending, lessonNameAscending, lessonNameDescending, dueDateAscending, completionDateAscending, completionDateDescending, lessonTypeAscending, lessonTypeDescending, totalProblemsAscending, totalProblemsDescending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstNameAscending", function() { return firstNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstNameDescending", function() { return firstNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastNameAscending", function() { return lastNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastNameDescending", function() { return lastNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dueDate", function() { return dueDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignDate", function() { return assignDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problems", function() { return problems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completed", function() { return completed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flags", function() { return flags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "score", function() { return score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEstimate", function() { return timeEstimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEstimateAscending", function() { return timeEstimateAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectAscending", function() { return subjectAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectDescending", function() { return subjectDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passageAscending", function() { return passageAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passageDescending", function() { return passageDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDescending", function() { return statusDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusAscending", function() { return statusAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagsDescending", function() { return flagsDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagsAscending", function() { return flagsAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableDateDescending", function() { return availableDateDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableDateAscending", function() { return availableDateAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonNameAscending", function() { return lessonNameAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonNameDescending", function() { return lessonNameDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dueDateAscending", function() { return dueDateAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completionDateAscending", function() { return completionDateAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completionDateDescending", function() { return completionDateDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonTypeAscending", function() { return lessonTypeAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonTypeDescending", function() { return lessonTypeDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalProblemsAscending", function() { return totalProblemsAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalProblemsDescending", function() { return totalProblemsDescending; });
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

/***/ "./components/utils/sortOptions.js":
/*!*****************************************!*\
  !*** ./components/utils/sortOptions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ "./components/utils/stateOptions.js":
/*!******************************************!*\
  !*** ./components/utils/stateOptions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (stateOptions);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker-cssmodules.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/classes.js":
/*!**************************!*\
  !*** ./pages/classes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Classes_StatusPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Classes/StatusPage */ "./components/Classes/StatusPage/index.js");
/* harmony import */ var _components_Classes_ListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Classes/ListPage */ "./components/Classes/ListPage/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Classes_utils_sampleClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Classes/utils/sampleClass */ "./components/Classes/utils/sampleClass.js");
/* harmony import */ var _components_Classes_index_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Classes/index/api */ "./components/Classes/index/api.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class Classes extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHandleClassCard", index => {
      const {
        classes
      } = this.state;
      this.setState({
        selectedClass: classes[index]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAddNewClass", newClass => {
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
      const updatedClasses = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(prevClassState, {
        $push: [formattedNewClass]
      });
      this.setState({
        classes: updatedClasses
      });
      this.onCreateNewClassApi(newClass);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCloneClass", index => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "arrayItemRemover", (array, value) => array.filter(classroom => classroom !== value));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDeleteClass", index => {
      const {
        classes
      } = this.state;
      const newClassesArray = this.arrayItemRemover(classes, classes[index]);
      this.setState({
        classes: newClassesArray
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCreateNewClassApi", async classroom => {
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
        start_date: moment__WEBPACK_IMPORTED_MODULE_5___default()(start_date).format('YYYY-MM-DD'),
        end_date: moment__WEBPACK_IMPORTED_MODULE_5___default()(end_date).format('YYYY-MM-DD'),
        duration: "string",
        exclude_from_statistics: isExclude,
        locations,
        instructors,
        students: ""
      };
      await Object(_components_Classes_index_api__WEBPACK_IMPORTED_MODULE_7__["default"])(formattedClassRoom);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSaveClassChanges", updatedClasRoom => {
      const {
        classes: originalClasses
      } = this.state;
      const classToUpdate = originalClasses.filter(classroom => classroom.id === updatedClasRoom.id)[0];
      const updatedClassIndex = originalClasses.indexOf(classToUpdate);
      const classes = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(originalClasses, {
        $splice: [[updatedClassIndex, 1, updatedClasRoom]]
      }); // saveChangesSuccess();

      this.setState({
        classes
      });
    });

    this.state = {
      selectedClass: null,
      classes: _components_Classes_utils_sampleClass__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
  }

  render() {
    const {
      selectedClass
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("main", {
      id: "main",
      role: "main"
    }, __jsx("div", {
      className: "main-holder grey lighten-5 switcher-section"
    }, !selectedClass && __jsx(_components_Classes_ListPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      classes: this.state.classes,
      onHandleClassCard: this.onHandleClassCard,
      onCloneClass: this.onCloneClass,
      onDeleteClass: this.onDeleteClass,
      onSaveNewClass: this.onAddNewClass,
      onSaveClassChanges: this.onSaveClassChanges
    }), selectedClass && __jsx(_components_Classes_StatusPage__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Classes);

/***/ }),

/***/ "./utils/formatTimeEstimate.js":
/*!*************************************!*\
  !*** ./utils/formatTimeEstimate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formatTimeEstimate = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  const hourString = hours !== 0 ? `${hours} hrs` : '';
  const minuteString = minutes !== 0 ? `${minutes} mins` : '';
  return `${hourString} ${minuteString}`;
};

/* harmony default export */ __webpack_exports__["default"] = (formatTimeEstimate);

/***/ }),

/***/ "./utils/worksheetSortOptions.js":
/*!***************************************!*\
  !*** ./utils/worksheetSortOptions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
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

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/classes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HDD/Sites/clearchoicetestprep/clear-choice-admin/pages/classes.js */"./pages/classes.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "immutability-helper":
/*!**************************************!*\
  !*** external "immutability-helper" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-sticky":
/*!*******************************!*\
  !*** external "react-sticky" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=classes.js.map