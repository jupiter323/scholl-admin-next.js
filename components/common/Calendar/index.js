import React, { Component } from "react";
import PropTypes from 'prop-types';
import update from "immutability-helper";
import { DragDropContext } from "react-beautiful-dnd";
import { StickyContainer } from "react-sticky";
import FilterSection from "../../Dashboard/components/FilterSection";
import CalendarHeader from "../../Dashboard/components/CalendarHeader";
import CalendarRow from "../../Dashboard/components/CalendarRow";

import AssignSessionModal from "../../Dashboard/components/Modals/AssignSessionModal";

import AssignTestSectionModal from "../../Dashboard/components/Modals/AssignTestSectionModal";
import AssignSimulatedSatModal from "../../Dashboard/components/Modals/AssignSimulatedSATModal";
import AssignTargetTestModal from "../../Dashboard/components/Modals/AssignTargetTestModal";

import {
  currentYear,
  getFirstDay,
  getDaysInActiveMonth,
  getDaysInPreviousMonth,
  getDayDate,
  getNextMonthAsCurrentMonth
} from "../../Dashboard/utils/dateAndCalendarUtils";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMonth: "",
      filters: [],
      eventFilters: [],
      rows: [],
      activeDate: null,
      activeColumn: null,
      addDropdownOpen: false,
      deleteDropdownOpen: false,
      assignDropdownIsOpen: false,
      onToggleHandleFilteredItemsDropdown: false,
      assignSessionModalOpen: false,
      assignLessonsModalOpen: false,
      assignWorksheetsModalOpen: false,
      assignTestSectionModalOpen: false,
      assignSimulatedSatModalOpen: false,
      assignTargetTestDateModalOpen: false,
      modalDate: null,
      accountActivated: false,
      activationDropdownOpen: false,
      licenseCode: ""
    };
  }

  // This is called onMount in CalendarHeader component to set the current month calendar rows, and every time the month changes afterward
  // IMPORTANT: activeMonthIndex is zero-based, meaning January is 0, February is 1, etc.
  onSetActiveMonth = activeMonthIndex => {
    // daysInPreviousMonth is used to handle cases where the calendar for the month starts with dates from the preceding month
    // firstDay indicates the day the first day of the month falls on in a zero-based index manner, meaning Sunday is 0, Monday is 1, etc
    const daysInPreviousMonth = getDaysInPreviousMonth(activeMonthIndex);
    const daysInActiveMonth = getDaysInActiveMonth(activeMonthIndex);
    const firstDay = getFirstDay(activeMonthIndex);
    const rows = [];

    // We increment calDate and change inMonth in the case where dates from the next month appear in row 1 or row 6
    // Since activeMonthIndex is zero-based, currentMonth adds 1 so the cells are accurate as actual calendar dates
    // getNextMonthAsCurrentMonth is used to derive the current month to ensure it matches the format of incoming dates - 01/15/19 vs 1/15/19, otherwise new events wouldn't find the date to be assigned to
    let inMonth = true;
    let calDate = 1;
    let currentMonth = getNextMonthAsCurrentMonth(activeMonthIndex);
    if (firstDay !== 0) {
      currentMonth =
        currentMonth > 9 ? (currentMonth -= 1) : `0${currentMonth - 1}`;
      calDate = daysInPreviousMonth - firstDay + 1;
      inMonth = false;
    }
    // First for loop handles the 6 calendar rows, second for loop handles the 7 days of the week
    for (let i = 0; i < 6; i++) {
      const rowArr = [];
      for (let j = 0; j < 7; j++) {
        const date = `${currentMonth}/${
          calDate > 9 ? calDate : `0${calDate}`
        }/${currentYear}`;
        const dayDate = getDayDate(date);
        const activeDateKey = `row-${i + 1}-column-${j + 1}`;
        // This if statement handles the easiest calendar month scenario, where the 1st of the month falls on a Sunday
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
          };
          // This if statement handles the case where the date spills over into the next month
          if (calDate === daysInActiveMonth) {
            calDate = 1;
            currentMonth =
              activeMonthIndex > 9
                ? activeMonthIndex + 2
                : `0${activeMonthIndex + 2}`;
            inMonth = false;
          } else {
            calDate += 1;
          }
          rowArr.push(dateCell);
        }
        // This else statement handles the more likely scenario, where the first row contains several days from the preceding month
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
          };
          // This if statement handles the case where the date spills over into the next month
          if (inMonth === false && calDate === daysInPreviousMonth) {
            calDate = 1;
            currentMonth = getNextMonthAsCurrentMonth(activeMonthIndex);
            inMonth = true;
          } else if (inMonth === true && calDate === daysInActiveMonth) {
            currentMonth =
              activeMonthIndex > 9
                ? activeMonthIndex + 2
                : `0${activeMonthIndex + 2}`;
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
    this.setState({ activeMonth: activeMonthIndex, rows });
  };

  onSetActiveDate = incomingDate => {
    this.setState({ activeDate: incomingDate, activeColumn: incomingDate[13] });
  };

  onAssignSession = session => {
    const { rows } = this.state;
    const updatedDate = rows.filter(row => row.date === session.date)[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.sessions.push(session);
    const updatedRows = update(rows, {
      $splice: [[updatedDateIndex, 1, updatedDate]]
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignSessionModal();
  };


  // onAssignWorksheets = (worksheets, date) => {
  //   const { rows } = this.state;
  //   const updatedDate = rows.filter(row => row.date === date)[0];
  //   const updatedDateIndex = rows.indexOf(updatedDate);
  //   updatedDate.worksheets.push(...worksheets);
  //   const updatedRows = update(rows, {
  //     $splice: [[updatedDateIndex, 1, updatedDate]]
  //   });
  //   this.setState({ rows: updatedRows });
  //   this.onToggleAssignWorksheetsModal();
  // };

  onAssignTestSection = testSection => {
    const { rows } = this.state;
    const updatedDate = rows.filter(
      row => row.date === testSection.assignDate
    )[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.testSections.push(testSection);
    const updatedRows = update(rows, {
      $splice: [[updatedDateIndex, 1, updatedDate]]
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignTestSectionModal();
  };

  onAssignSimulatedSat = simulatedSat => {
    const { rows } = this.state;
    const updatedDate = rows.filter(
      row => row.date === simulatedSat.assignDate
    )[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.simulatedSat.push(simulatedSat);
    const updatedRows = update(rows, {
      $splice: [[updatedDateIndex, 1, updatedDate]]
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignSimulatedSatModal();
  };

  onAssignTargetTest = targetTestDate => {
    throw `pending decision of what test date assign ui looks like${targetTestDate.toString()}`;
    // console.warn(, targetTestDate);
  };

  onToggleAssignSessionModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignSessionModalOpen }) => ({
      assignSessionModalOpen: !assignSessionModalOpen,
      modalDate,
      assignDropdownIsOpen: false
    }));
  };

  // onToggleAssignWorksheetsModal = (event = null, modalDate = null) => {
  //   if (event) {
  //     event.preventDefault();
  //   }
  //   this.setState(({ assignWorksheetsModalOpen }) => ({
  //     assignWorksheetsModalOpen: !assignWorksheetsModalOpen,
  //     modalDate,
  //     assignDropdownIsOpen: false
  //   }));
  // };

  onToggleAssignTestSectionModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignTestSectionModalOpen }) => ({
      assignTestSectionModalOpen: !assignTestSectionModalOpen,
      modalDate,
      assignDropdownIsOpen: false
    }));
  };

  onToggleAssignSimulatedSatModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignSimulatedSatModalOpen }) => ({
      assignSimulatedSatModalOpen: !assignSimulatedSatModalOpen,
      modalDate,
      assignDropdownIsOpen: false
    }));
  };

  onToggleAssignTargetTestModal = (event = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignTargetTestDateModalOpen }) => ({
      assignTargetTestDateModalOpen: !assignTargetTestDateModalOpen,
      assignDropdownIsOpen: false
    }));
  };

  onToggleAddDropdown = () =>
    this.setState(({ addDropdownOpen }) => ({
      addDropdownOpen: !addDropdownOpen,
      deleteDropdownOpen: false
    }));
  onToggleDeleteDropdown = () =>
    this.setState(({ deleteDropdownOpen }) => ({
      deleteDropdownOpen: !deleteDropdownOpen,
      addDropdownOpen: false
    }));

  onToggleAssignDropdown = () =>
    this.setState(({ assignDropdownIsOpen }) => ({
      assignDropdownIsOpen: !assignDropdownIsOpen
    }));
  onToggleHandleFilteredItemsDropdown = () =>
    this.setState(({ onToggleHandleFilteredItemsDropdown }) => ({
      onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown
    }));

  onClearFilters = () => this.setState({ filters: [], eventFilters: [] });

  onHandleDetailsChange = (name, event) =>
    this.setState({ [name]: event.target.value });

  onDragEnd = result => {
    const { rows } = this.state;
    const { source, destination, draggableId } = result;
    // The following draggable vars are pulled from the dragged item to identify the event type (lesson, worksheet, etc), date, and index in that date's array of that type of event
    const draggableKeys = draggableId.split("-");
    const draggableType = draggableKeys[0];
    const draggableIndex = draggableKeys[2];

    // If the event isn't switching dates, we return out of the function early and do nothing
    if (!destination || source.droppableId === destination.droppableId) {
      return;
    }

    // The follwing sourceDate and destinationDate vars are used to find the dates being modified and their index in the month of calendar dates
    const sourceDateKey = source.droppableId.split("-")[1];
    const destinationDateKey = destination.droppableId.split("-")[1];

    const sourceDate = rows.filter(row => row.date === sourceDateKey)[0];
    const destinationDate = rows.filter(
      row => row.date === destinationDateKey
    )[0];

    const sourceDateIndex = rows.indexOf(sourceDate);
    const destinationDateIndex = rows.indexOf(destinationDate);

    // Here we target the event being moved, alter its date to that of the destintion, splice it from the source and push it to the destination
    // Finally, we perform two splice operations to replace the old source and destination dates with their updated equivalents
    const movedEvent = sourceDate[draggableType][draggableIndex];
    movedEvent.date = destinationDate.date;
    sourceDate[draggableType].splice(draggableIndex, 1);
    destinationDate[draggableType].push(movedEvent);
    const updatedRows = update(rows, {
      $splice: [+
        [sourceDateIndex, 1, sourceDate],
        [destinationDateIndex, 1, destinationDate]
      ]
    });
    this.setState({ rows: updatedRows });
  };

  handleFilterClick = (filter, eventFilter = false) => {
    // TODO: Only the following filters are active: sessions, lessons, worksheets, test sections, simulated sats, target tests
    // The other filters dont seem to have corresponding data in this page
    const { filters: allFilters, eventFilters } = this.state;
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
      updatedFilters = update(filters, {
        $push: [filter]
      });
    } else {
      const filterIndex = filters.indexOf(filter);
      updatedFilters = update(filters, {
        $splice: [[filterIndex, 1]]
      });
    }
    this.setState({ [filterName]: updatedFilters });
  };

  mapRows = () => {
    const {
      rows,
      filters,
      eventFilters,
      activeDate,
      activeColumn,
      addDropdownOpen,
      deleteDropdownOpen
    } = this.state;
    let startIndex = -7;
    let endIndex = 0;
    const rowArray = [];
    for (let i = 0; i < 6; i++) {
      startIndex += 7;
      endIndex += 7;
      rowArray.push(
        <CalendarRow
          key={i}
          rows={rows.slice(startIndex, endIndex)}
          filters={filters}
          eventFilters={eventFilters}
          activeDate={activeDate}
          activeColumn={activeColumn}
          addDropdownOpen={addDropdownOpen}
          deleteDropdownOpen={deleteDropdownOpen}
          onSetActiveDate={this.onSetActiveDate}
          onToggleAddDropdown={this.onToggleAddDropdown}
          onToggleDeleteDropdown={this.onToggleDeleteDropdown}
          onToggleAssignLessonsModal={this.props.onToggleAssignLessonsModal}
          onToggleAssignSessionModal={this.onToggleAssignSessionModal}
          onToggleAssignWorksheetsModal={this.onToggleAssignWorksheetsModal}
          onToggleAssignTestSectionModal={this.onToggleAssignTestSectionModal}
          onToggleAssignSimulatedSatModal={this.onToggleAssignSimulatedSatModal}
        />
      );
    }
    return rowArray;
  };

  render() {
    const {
      assignSessionModalOpen,
      assignWorksheetsModalOpen,
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
      onToggleAssignLessonsModal,
      onToggleAssignWorksheetsModal,
    } = this.props;
    return (
      <React.Fragment>
        <AssignSessionModal
          modalDate={modalDate}
          open={assignSessionModalOpen}
          onClose={this.onToggleAssignSessionModal}
          onAssignSession={this.onAssignSession}
        />
        {/* <AssignWorksheetModal
          modalDate={modalDate}
          open={assignWorksheetsModalOpen}
          onClose={this.onToggleAssignWorksheetsModal}
          onAssignWorksheets={this.onAssignWorksheets}
        /> */}
        <AssignTestSectionModal
          modalDate={modalDate}
          open={assignTestSectionModalOpen}
          onClose={this.onToggleAssignTestSectionModal}
          onAssignTestSection={this.onAssignTestSection}
        />
        <AssignSimulatedSatModal
          modalDate={modalDate}
          open={assignSimulatedSatModalOpen}
          onClose={this.onToggleAssignSimulatedSatModal}
          onAssignSimulatedSat={this.onAssignSimulatedSat}
        />
        <AssignTargetTestModal
          open={assignTargetTestDateModalOpen}
          onClose={this.onToggleAssignTargetTestModal}
          onAssignTargetTest={this.onAssignTargetTest}
        />
        <StickyContainer>
          <FilterSection
            filters={filters}
            eventFilters={eventFilters}
            onClearFilters={this.onClearFilters}
            handleFilterClick={this.handleFilterClick}
          />
          <div className="calendar-section view-month">
            <div className="calendar-slider">
              <CalendarHeader
                activeMonth={Number(activeMonth)}
                onSetActiveMonth={this.onSetActiveMonth}
              />
              <div
                id="calendar"
                className="main-slick-calendar cal-context"
                style={{ width: "100%" }}
              >
                <div className="slide">
                  <table className="calendar-table cal-month-box">
                    <thead>
                      <tr className="calendar-head-row">
                        <th>Su</th>
                        <th>M</th>
                        <th>Tu</th>
                        <th>W</th>
                        <th>Th</th>
                        <th>F</th>
                        <th>Sa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <DragDropContext onDragEnd={this.onDragEnd}>
                        {this.mapRows()}
                      </DragDropContext>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="add-btn-block">
                <a
                  href="#"
                  data-target="dropdown_assign"
                  onClick={this.onToggleAssignDropdown}
                  className="dropdown-trigger waves-effect waves-teal btn add-btn"
                >
                  Assign...
                </a>
                <ul
                  id="dropdown_assign"
                  className="dropdown-content"
                  style={{
                    display: assignDropdownIsOpen ? "block" : "none",
                    opacity: assignDropdownIsOpen ? "100" : "0"
                  }}
                >
                  <li>
                    <a
                      href="#"
                      onClick={this.onToggleAssignSessionModal}
                      className="modal-trigger"
                    >
                      Session
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={onToggleAssignLessonsModal}
                      className="modal-trigger"
                    >
                      Lesson
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={onToggleAssignWorksheetsModal}
                      className="modal-trigger"
                    >
                      Worksheet
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={this.onToggleAssignTestSectionModal}
                      className="modal-trigger"
                    >
                      Test Section
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={this.onToggleAssignSimulatedSatModal}
                      className="modal-trigger"
                    >
                      Simulated SAT
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={this.onToggleAssignTargetTestModal}
                      className="modal-trigger"
                    >
                      Target Test
                    </a>
                  </li>
                  <li className="divider" tabIndex="-1"></li>
                  <li className="dropdown-footer">
                    <a href="#" className="modal-trigger">
                      Apply Course Template
                    </a>
                  </li>
                </ul>
              </div>
              <div className="add-btn-block btn-block-right">
                <a
                  href="#"
                  data-target="dropdown_other"
                  onClick={this.onToggleHandleFilteredItemsDropdown}
                  className="dropdown-trigger waves-effect waves-teal btn add-btn-circle"
                >
                  <i className="icon-dots"></i>
                </a>
                <ul
                  id="dropdown_other"
                  className="dropdown-content"
                  style={{
                    display: onToggleHandleFilteredItemsDropdown
                      ? "block"
                      : "none",
                    opacity: onToggleHandleFilteredItemsDropdown ? "100" : "0"
                  }}
                >
                  <li className="dropdown-header">
                    <b>With Filtered Items... </b>
                    <b className="small">
                      (items currently visible on calendar)
                    </b>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#" className="modal-trigger">
                      Save Course as Template
                    </a>
                  </li>
                  <li>
                    <a href="#">Reset All</a>
                  </li>
                  <li>
                    <a href="#">Delete All</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </StickyContainer>
      </React.Fragment>
    );
  }
}

Calendar.propTypes = {
  onToggleAssignLessonsModal:PropTypes.func.isRequired,
  onToggleAssignWorksheetsModal:PropTypes.func.isRequired,
}

export default Calendar;
