/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import CalendarDate from '../CalendarDate';

class CalendarRow extends React.Component {
  toggleAssignSessionModal = (event, date) => {
    event.preventDefault();
    const { onToggleAssignSessionModal, onToggleAddDropdown } = this.props;
    onToggleAssignSessionModal(event, date);
    onToggleAddDropdown();
  }

  toggleAssignLessonsModal = (event, date) => {
    event.preventDefault();
    const { onToggleAssignLessonsModal, onToggleAddDropdown } = this.props;
    onToggleAssignLessonsModal(event, date);
    onToggleAddDropdown();
  }

  toggleAssignWorksheetsModal = (event, date) => {
    event.preventDefault();
    const { onToggleAssignWorksheetsModal, onToggleAddDropdown } = this.props;
    onToggleAssignWorksheetsModal(event, date);
    onToggleAddDropdown();
  }

  toggleAssignTestSectionModal = (event, date) => {
    event.preventDefault();
    const { onToggleAssignTestSectionModal, onToggleAddDropdown } = this.props;
    onToggleAssignTestSectionModal(event, date);
    onToggleAddDropdown();
  }

  toggleAssignSimulatedSatModal = (event, date) => {
    event.preventDefault();
    const { onToggleAssignSimulatedSatModal, onToggleAddDropdown } = this.props;
    onToggleAssignSimulatedSatModal(event, date);
    onToggleAddDropdown();
  }

  mapDateSessions = (shouldMapSessions, sessions) => {
    if (shouldMapSessions) {
      return sessions.map((session, index) => (
        <li className="event-frame" key={index}>
          <Draggable
            key={index}
            index={index}
            draggableId={`sessions-${session.date}-${index}`}
            style={{ userSelect: 'none' }}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <span className="event-title-box">{session.title}</span>
              </div>
            )}
          </Draggable>
        </li>
      ));
    }
    return null;
  }

  mapDateLessons = (shouldMapLessons, lessons) => {
    if (shouldMapLessons) {
      return lessons.map((lesson, index) => (
        <li className="event-frame" key={index}>
          <Draggable
            key={index}
            index={index}
            draggableId={`lessons-${lesson.date}-${index}`}
            style={{ userSelect: 'none' }}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <React.Fragment>
                  {lesson.completed && <span className="event-check lesson-check"><i className="icon-check02"></i></span>}
                  <span className="event event-lesson-box">{lesson.title}</span>
                </React.Fragment>
              </div>
            )}
          </Draggable>
        </li>
      ));
    }
    return null;
  }

  mapDateWorksheets = (shouldMapWorksheets, worksheets) => {
    if (shouldMapWorksheets) {
      return worksheets.map((worksheet, index) => (
        <li className="event-frame" key={index}>
          <Draggable
            key={index}
            index={index}
            draggableId={`worksheets-${worksheet.date}-${index}`}
            style={{ userSelect: 'none' }}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <React.Fragment>
                  {worksheet.completed && <span className="event-check worksheet-check"><i className="icon-check02"></i></span>}
                  <span className="event event-worksheet-box">{worksheet.title}</span>
                </React.Fragment>
              </div>
            )}
          </Draggable>
        </li>
      ));
    }
    return null;
  }

  mapTestSections = (shouldMapTestSections, testSections) => {
    if (shouldMapTestSections) {
      return testSections.map((testSection, index) => (
        <li className="event-frame" key={index}>
          <Draggable
            key={index}
            index={index}
            draggableId={`testSections-${testSection.date}-${index}`}
            style={{ userSelect: 'none' }}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <span className="event event-test-box">Test Section: {testSection.version}</span>
              </div>
            )}
          </Draggable>
        </li>
      ));
    }
    return null;
  }

  mapSimulatedSats = (shouldMapSimulatedSats, simulatedSat) => {
    if (shouldMapSimulatedSats) {
      return simulatedSat.map((sat, index) => (
        <li className="event-frame" key={index}>
          <Draggable
            key={index}
            index={index}
            draggableId={`simulatedSat-${sat.date}-${index}`}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.dragHandleProps}
              >
                <span className="event event-sat-box">{sat.version}</span>
              </div>
            )}
          </Draggable>
        </li>
      ));
    }
    return null;
  }

  mapRowDates = () => this.props.rows && this.props.rows.map(rowDate => {
    const { eventFilters, activeDate, addDropdownOpen, deleteDropdownOpen, onSetActiveDate, onToggleAddDropdown, onToggleDeleteDropdown, activeColumn } = this.props;
    const { date, dayDate, calDate, activeDateKey, inMonth, sessions = [], lessons = [], worksheets = [], testSections = [], simulatedSat = [] } = rowDate;
    const hasEvents = sessions.length > 0 || lessons.length > 0 || worksheets.length > 0 || testSections.length > 0 || simulatedSat.length > 0;
    const inActiveColumn = activeDateKey && activeDateKey[13] === activeColumn;
    const isActiveDate = activeDate === activeDateKey;
    const hasEventFilters = eventFilters.length > 0;

    const shouldMapSessions = (!hasEventFilters && sessions.length) || (sessions.length > 0 && hasEventFilters && eventFilters.indexOf('sessions') !== -1);
    const shouldMapLessons = (!hasEventFilters && lessons.length) || (lessons.length > 0 && hasEventFilters && eventFilters.indexOf('lessons') !== -1);
    const shouldMapWorksheets = (!hasEventFilters && worksheets.length) || (worksheets.length > 0 && hasEventFilters && eventFilters.indexOf('worksheets') !== -1);
    const shouldMapTestSections = (!hasEventFilters && testSections.length) || (testSections.length > 0 && hasEventFilters && eventFilters.indexOf('testSections') !== -1);
    const shouldMapSimulatedSats = (!hasEventFilters && simulatedSat.length) || (simulatedSat.length > 0 && hasEventFilters && eventFilters.indexOf('simulatedSats') !== -1);
    return (
      <CalendarDate
        sessions={sessions}
        lessons={lessons}
        worksheets={worksheets}
        testSections={testSections}
        simulatedSat={simulatedSat}
        key={date}
        date={date}
        dayDate={dayDate}
        calDate={calDate}
        inMonth={inMonth}
        hasEvents={hasEvents}
        isActiveDate={isActiveDate}
        activeDateKey={activeDateKey}
        inActiveColumn={inActiveColumn}
        addDropdownOpen={addDropdownOpen}
        onSetActiveDate={onSetActiveDate}
        shouldMapLessons={shouldMapLessons}
        shouldMapSessions={shouldMapSessions}
        deleteDropdownOpen={deleteDropdownOpen}
        onToggleAddDropdown={onToggleAddDropdown}
        shouldMapWorksheets={shouldMapWorksheets}
        shouldMapTestSections={shouldMapTestSections}
        onToggleDeleteDropdown={onToggleDeleteDropdown}
        shouldMapSimulatedSats={shouldMapSimulatedSats}
        mapDateSessions={this.mapDateSessions}
        mapDateLessons={this.mapDateLessons}
        mapDateWorksheets={this.mapDateWorksheets}
        mapTestSections={this.mapTestSections}
        mapSimulatedSats={this.mapSimulatedSats}
        toggleAssignSessionModal={this.toggleAssignSessionModal}
        toggleAssignLessonsModal={this.toggleAssignLessonsModal}
        toggleAssignWorksheetsModal={this.toggleAssignWorksheetsModal}
        toggleAssignTestSectionModal={this.toggleAssignTestSectionModal}
        toggleAssignSimulatedSatModal={this.toggleAssignSimulatedSatModal}
      />
    );
  }
)

  render() {
    return (
      <tr className="cal-row-fluid">
        {this.mapRowDates()}
      </tr>
    )
  }
}

CalendarRow.propTypes = {
  activeDate: PropTypes.string,
  activeColumn: PropTypes.string,
  rows: PropTypes.array.isRequired,
  eventFilters: PropTypes.array.isRequired,
  onSetActiveDate: PropTypes.func.isRequired,
  addDropdownOpen: PropTypes.bool.isRequired,
  deleteDropdownOpen: PropTypes.bool.isRequired,
  onToggleAddDropdown: PropTypes.func.isRequired,
  onToggleDeleteDropdown: PropTypes.func.isRequired,
  onToggleAssignSessionModal: PropTypes.func.isRequired,
  onToggleAssignLessonsModal: PropTypes.func.isRequired,
  onToggleAssignWorksheetsModal: PropTypes.func.isRequired,
  onToggleAssignTestSectionModal: PropTypes.func.isRequired,
  onToggleAssignSimulatedSatModal: PropTypes.func.isRequired,
}

export default CalendarRow;


    // if (!inMonth) {
    //   return (
    //     <td className="cal-cell1 cal-cell cal-day-outmonth" key={dayDate}>
    //       <div className={getCalendarDayClassName(date, inMonth, activeDateKey)}>
    //         <span className="day-date">{dayDate}</span>
    //         <span className="cal-date">{calDate}</span>
    //       </div>
    //     </td>
    //   )
    // }
    // return (
    //   <td key={activeDateKey} className={getCalendarCellClassName(hasEvents, inActiveColumn)} onClick={() => onSetActiveDate(activeDateKey)}>
    //     <div className={getCalendarDayClassName(date, inMonth, activeDateKey)}>
    //       <span className="day-date">{dayDate}</span>
    //       <span className="cal-date">{calDate}</span>
    //       <ul className="day-collapsible collapsible">
    //         <li className={isActiveDate ? 'collapsible-holder active' : 'collapsible-holder'} style={{ transform: 'none' }}>
    //           <div className="collapsible-header" style={{ display: inActiveColumn && isActiveDate ? 'none' : 'block'}}>
    //             <span className="fake-close"><span className="icon-close-thin"></span></span>
    //             <If condition={hasEvents}>
    //               <ul className="events-list events-list-short">
    //                 <If condition={shouldMapSessions}>
    //                   <li className="event-frame event-title">
    //                     <span className="event-title-box">Session {sessions.length}</span>
    //                   </li>
    //                 </If>
    //                 <If condition={shouldMapLessons}>
    //                   <li className="event-frame">
    //                     <span className="event event-lesson-box"> {lessons.length} <span className="event-text">Lesson{lessons.length > 1 && 's'}</span></span>
    //                   </li>
    //                 </If>
    //                 <If condition={shouldMapWorksheets}>
    //                   <li className="event-frame">
    //                     <span className="event event-worksheet-box">{worksheets.length} <span className="event-text">Worksheet{worksheets.length > 1 && 's'}</span></span>
    //                   </li>
    //                 </If>
    //                 <If condition={shouldMapTestSections}>
    //                   <li className="event-frame">
    //                     <span className="event event-test-box">{testSections.length} <span className="event-text">Test Section{testSections.length > 1 && 's'}</span></span>
    //                   </li>
    //                 </If>
    //                 <If condition={shouldMapSimulatedSats}>
    //                   <li className="event-frame">
    //                     <span className="event event-sat-box">{simulatedSat.length} <span className="event-text">Simulated SAT</span></span>
    //                   </li>
    //                 </If>
    //               </ul>
    //             </If>
    //           </div>
    //           <div className="collapsible-body" style={{ opacity: inActiveColumn && isActiveDate ? '1' : '0', visibility: inActiveColumn ? 'visible' : 'hidden' }}>
    //             <If condition={hasEvents}>
    //               <ul className="events-list">
    //                 {shouldMapSessions && sessions.map((session, index) => (
    //                   <li className="event-frame" key={index}>
    //                     <span className="event-title-box">{session.title}</span>
    //                   </li>
    //                 ))}
    //                 {this.mapDateLessons(shouldMapLessons, lessons)}
    //                 {this.mapDateWorksheets(shouldMapWorksheets, worksheets)}
    //                 {this.mapTestSections(shouldMapTestSections, testSections)}
    //                 {this.mapSimulatedSats(shouldMapSimulatedSats, simulatedSat)}
    //               </ul>
    //             </If>
    //             <div className="day-footer">
    //               <ul className="links-list">
    //                 <li>
    //                   <a
    //                     href="#"
    //                     data-target='dropdown_day_240119_add'
    //                     onClick={onToggleAddDropdown}
    //                     className="link-add dropdown-trigger waves-effect waves-teal"
    //                   >
    //                     Add
    //                   </a>
    //                   <ul
    //                     id='dropdown_day_240119_add'
    //                     className='dropdown-content'
    //                     style={{ display: addDropdownOpen ? 'block' : 'none', opacity: addDropdownOpen ? '100' : '0' }}
    //                   >
    //                     <li><a href="#" onClick={(event) => this.toggleAssignSessionModal(event, date)} className="modal-trigger">Session</a></li>
    //                     <li><a href="#" onClick={(event) => this.toggleAssignLessonsModal(event, date)} className="modal-trigger">Lesson</a></li>
    //                     <li><a href="#" onClick={(event) => this.toggleAssignWorksheetsModal(event, date)} className="modal-trigger">Worksheet</a></li>
    //                     <li><a href="#" onClick={(event) => this.toggleAssignTestSectionModal(event, date)} className="modal-trigger">Test Section</a></li>
    //                     <li><a href="#" onClick={(event) => this.toggleAssignSimulatedSatModal(event, date)} className="modal-trigger">Simulated SAT</a></li>
    //                   </ul>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="#"
    //                     data-target='dropdown_day_240119_delete'
    //                     onClick={onToggleDeleteDropdown}
    //                     className="link-delete dropdown-trigger waves-effect waves-teal"
    //                   >
    //                     Delete
    //                   </a>
    //                   <ul
    //                     id='dropdown_day_240119_delete'
    //                     className='dropdown-content'
    //                     style={{ display: deleteDropdownOpen ? 'block' : 'none', opacity: deleteDropdownOpen ? '100' : '0' }}
    //                   >
    //                     <li><a href="#modal_edit_delete_section" className="modal-trigger">Session</a></li>
    //                     <li><a href="#modal_edit_delete_lesson" className="modal-trigger">Lesson</a></li>
    //                     <li><a href="#modal_edit_delete_worksheet" className="modal-trigger">Worksheet</a></li>
    //                     <li><a href="#modal_edit_delete_test_section" className="modal-trigger">Test Section</a></li>
    //                     <li><a href="#!" className="disabled">Simulated SAT</a></li>
    //                     <li><a href="#!" className="disabled">Target Test</a></li>
    //                     <li><a href="#!">All</a></li>
    //                   </ul>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </td>
    // )