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