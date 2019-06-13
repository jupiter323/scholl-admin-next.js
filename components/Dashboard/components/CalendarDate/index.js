/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import { getCalendarCellClassName, getCalendarDayClassName } from '../../utils/dateAndCalendarUtils';

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'inherit',
});

// eslint-disable-next-line react/prefer-stateless-function
class CalendarDate extends React.Component {
  render() {
    const { date, dayDate, calDate, inMonth, hasEvents, isActiveDate, inActiveColumn, addDropdownOpen,
      onSetActiveDate, shouldMapLessons, shouldMapSessions, deleteDropdownOpen, onToggleAddDropdown,
      shouldMapWorksheets, shouldMapTestSections, onToggleDeleteDropdown, shouldMapSimulatedSats,
      activeDateKey, mapDateSessions, mapDateLessons, mapDateWorksheets, mapTestSections, mapSimulatedSats,
      toggleAssignSessionModal, toggleAssignLessonsModal, toggleAssignWorksheetsModal,
      toggleAssignTestSectionModal, toggleAssignSimulatedSatModal,
      sessions, lessons, worksheets, testSections, simulatedSat,
     } = this.props;
    return (
      <React.Fragment>
        <Choose>
          <When condition={!inMonth}>
            <td className="cal-cell1 cal-cell cal-day-outmonth" key={dayDate}>
              <div className={getCalendarDayClassName(date, inMonth, activeDateKey)}>
                <span className="day-date">{dayDate}</span>
                <span className="cal-date">{calDate}</span>
              </div>
            </td>
          </When>
          <Otherwise>
            <td key={activeDateKey} className={getCalendarCellClassName(hasEvents, inActiveColumn)} onClick={() => onSetActiveDate(activeDateKey)}>
              <Droppable droppableId={`droppable-${date}`}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    <div className={getCalendarDayClassName(date, inMonth, activeDateKey)}>
                      <span className="day-date">{dayDate}</span>
                      <span className="cal-date">{calDate}</span>
                      <ul className="day-collapsible collapsible">
                        <li className={isActiveDate ? 'collapsible-holder active' : 'collapsible-holder'} style={{ transform: 'none' }}>
                          <div className="collapsible-header" style={{ display: inActiveColumn && isActiveDate ? 'none' : 'block'}}>
                            <span className="fake-close"><span className="icon-close-thin"></span></span>
                            <If condition={hasEvents}>
                              <ul className="events-list events-list-short">
                                <If condition={shouldMapSessions}>
                                  <li className="event-frame event-title">
                                    <span className="event-title-box">Session {sessions.length}</span>
                                  </li>
                                </If>
                                <If condition={shouldMapLessons}>
                                  <li className="event-frame">
                                    <span className="event event-lesson-box"> {lessons.length} <span className="event-text">Lesson{lessons.length > 1 && 's'}</span></span>
                                  </li>
                                </If>
                                <If condition={shouldMapWorksheets}>
                                  <li className="event-frame">
                                    <span className="event event-worksheet-box">{worksheets.length} <span className="event-text">Worksheet{worksheets.length > 1 && 's'}</span></span>
                                  </li>
                                </If>
                                <If condition={shouldMapTestSections}>
                                  <li className="event-frame">
                                    <span className="event event-test-box">{testSections.length} <span className="event-text">Test Section{testSections.length > 1 && 's'}</span></span>
                                  </li>
                                </If>
                                <If condition={shouldMapSimulatedSats}>
                                  <li className="event-frame">
                                    <span className="event event-sat-box">{simulatedSat.length} <span className="event-text">Simulated SAT</span></span>
                                  </li>
                                </If>
                              </ul>
                            </If>
                          </div>
                          <div className="collapsible-body" style={{ opacity: inActiveColumn && isActiveDate ? '1' : '0', visibility: inActiveColumn ? 'visible' : 'hidden' }}>
                            <If condition={hasEvents}>
                              <ul className="events-list">
                                {mapDateSessions(shouldMapSessions, sessions)}
                                {mapDateLessons(shouldMapLessons, lessons)}
                                {mapDateWorksheets(shouldMapWorksheets, worksheets)}
                                {mapTestSections(shouldMapTestSections, testSections)}
                                {mapSimulatedSats(shouldMapSimulatedSats, simulatedSat)}
                              </ul>
                            </If>
                            <div className="day-footer">
                              <ul className="links-list">
                                <li>
                                  <a
                                    href="#"
                                    data-target='dropdown_day_240119_add'
                                    onClick={onToggleAddDropdown}
                                    className="link-add dropdown-trigger waves-effect waves-teal"
                                  >
                                    Add
                                  </a>
                                  <ul
                                    id='dropdown_day_240119_add'
                                    className='dropdown-content'
                                    style={{ display: addDropdownOpen ? 'block' : 'none', opacity: addDropdownOpen ? '100' : '0' }}
                                  >
                                    <li><a href="#" onClick={(event) => toggleAssignSessionModal(event, date)} className="modal-trigger">Session</a></li>
                                    <li><a href="#" onClick={(event) => toggleAssignLessonsModal(event, date)} className="modal-trigger">Lesson</a></li>
                                    <li><a href="#" onClick={(event) => toggleAssignWorksheetsModal(event, date)} className="modal-trigger">Worksheet</a></li>
                                    <li><a href="#" onClick={(event) => toggleAssignTestSectionModal(event, date)} className="modal-trigger">Test Section</a></li>
                                    <li><a href="#" onClick={(event) => toggleAssignSimulatedSatModal(event, date)} className="modal-trigger">Simulated SAT</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-target='dropdown_day_240119_delete'
                                    onClick={onToggleDeleteDropdown}
                                    className="link-delete dropdown-trigger waves-effect waves-teal"
                                  >
                                    Delete
                                  </a>
                                  <ul
                                    id='dropdown_day_240119_delete'
                                    className='dropdown-content'
                                    style={{ display: deleteDropdownOpen ? 'block' : 'none', opacity: deleteDropdownOpen ? '100' : '0' }}
                                  >
                                    <li><a href="#modal_edit_delete_section" className="modal-trigger">Session</a></li>
                                    <li><a href="#modal_edit_delete_lesson" className="modal-trigger">Lesson</a></li>
                                    <li><a href="#modal_edit_delete_worksheet" className="modal-trigger">Worksheet</a></li>
                                    <li><a href="#modal_edit_delete_test_section" className="modal-trigger">Test Section</a></li>
                                    <li><a href="#!" className="disabled">Simulated SAT</a></li>
                                    <li><a href="#!" className="disabled">Target Test</a></li>
                                    <li><a href="#!">All</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          </li>
                        </ul>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </td>
          </Otherwise>
        </Choose>
      </React.Fragment>
    )
  }
};

CalendarDate.propTypes = {
  date: PropTypes.string.isRequired,
  inMonth: PropTypes.bool.isRequired,
  dayDate: PropTypes.string.isRequired,
  calDate: PropTypes.number.isRequired,
  hasEvents: PropTypes.bool.isRequired,
  lessons: PropTypes.array.isRequired,
  sessions: PropTypes.array.isRequired,
  worksheets: PropTypes.array.isRequired,
  testSections: PropTypes.array.isRequired,
  simulatedSat: PropTypes.array.isRequired,
  isActiveDate: PropTypes.bool.isRequired,
  inActiveColumn: PropTypes.bool.isRequired,
  activeDateKey: PropTypes.string.isRequired,
  addDropdownOpen: PropTypes.bool.isRequired,
  onSetActiveDate: PropTypes.func.isRequired,
  mapDateLessons: PropTypes.func.isRequired,
  mapDateSessions: PropTypes.func.isRequired,
  mapTestSections: PropTypes.func.isRequired,
  mapSimulatedSats: PropTypes.func.isRequired,
  mapDateWorksheets: PropTypes.func.isRequired,
  deleteDropdownOpen: PropTypes.bool.isRequired,
  onToggleAddDropdown: PropTypes.func.isRequired,
  onToggleDeleteDropdown: PropTypes.func.isRequired,
  toggleAssignSessionModal: PropTypes.func.isRequired,
  toggleAssignLessonsModal: PropTypes.func.isRequired,
  toggleAssignWorksheetsModal: PropTypes.func.isRequired,
  toggleAssignTestSectionModal: PropTypes.func.isRequired,
  toggleAssignSimulatedSatModal: PropTypes.func.isRequired,
  shouldMapLessons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  shouldMapSessions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  shouldMapWorksheets: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  shouldMapTestSections: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  shouldMapSimulatedSats: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
}

export default CalendarDate;
