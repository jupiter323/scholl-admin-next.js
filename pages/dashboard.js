import React, { Component } from 'react';
import update from 'immutability-helper';

import FilterSection from '../components/Dashboard/components/FilterSection';
import CalendarHeader from '../components/Dashboard/components/CalendarHeader';

import AssignSessionModal from '../components/Dashboard/components/Modals/AssignSessionModal';
import AssignLessonModal from '../components/Dashboard/components/Modals/AssignLessonModal';
import AssignWorksheetModal from '../components/Dashboard/components/Modals/AssignWorksheetModal';
import AssignTestSectionModal from '../components/Dashboard/components/Modals/AssignTestSectionModal';
import AssignSimulatedSatModal from '../components/Dashboard/components/Modals/AssignSimulatedSatModal';
import AssignTargetTestModal from '../components/Dashboard/components/Modals/AssignTargetTestModal';

import CalendarRow from '../components/Dashboard/components/CalendarRow';

const row1 = [
  {
    date: '12/24/18',
    dayDate: 'Sun, Dec 24th',
    calDate: '24',
    activeDateKey: 'row-1-column-1',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '12/25/18',
    dayDate: 'Mon, Dec 25th',
    calDate: '25',
    activeDateKey: 'row-1-column-2',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '12/26/18',
    dayDate: 'Tue, Dec 26th',
    calDate: '26',
    activeDateKey: 'row-1-column-3',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '12/27/18',
    dayDate: 'Wed, Dec 27th',
    calDate: '27',
    activeDateKey: 'row-1-column-4',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '12/28/18',
    dayDate: 'Thu, Dec 28th',
    calDate: '28',
    activeDateKey: 'row-1-column-5',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/01/19',
    dayDate: 'Fri, Jan 1st',
    calDate: '1',
    activeDateKey: 'row-1-column-6',
    inMonth: true,
    sessions: [
      { title: 'Session 2' },
      { title: 'Session 3' },
    ],
    lessons: [
      { title: 'Reading Introduction', completed: true },
      { title: 'Active Reading', completed: false },
      { title: 'General Strategy (Reading)', completed: true },
      { title: 'Strategy Review (Reading)', completed: true },
      { title: 'Reading Vocabulary: Word Roots', completed: true },
    ],
    worksheets: [
      { title: 'Worksheet Triangles #1', completed: true },
      { title: 'Worksheet Triangles #2', completed: false },
      { title: 'Worksheet Triangles #3', completed: true },
    ],
    testSections: [
      { title: 'Test Section: Math (no calc) version 53-pre' },
      { title: 'Test Section: Math (calc) version 21-pre' },
    ],
    simulatedSat: [],
  },
  {
    date: '01/02/19',
    dayDate: 'Sat, Jan 2nd',
    calDate: '2',
    activeDateKey: 'row-1-column-7',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
];
// TODO: Make sure all rows match data structure of row2
const row2 = [
  {
    date: '01/03/19',
    dayDate: 'Sun, Jan 3rd',
    calDate: '3',
    activeDateKey: 'row-2-column-1',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/04/19',
    dayDate: 'Mon, Jan 4th',
    calDate: '4',
    activeDateKey: 'row-2-column-2',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/05/19',
    dayDate: 'Tue, Jan 5th',
    calDate: '5',
    activeDateKey: 'row-2-column-3',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/06/19',
    dayDate: 'Wed, Jan 6th',
    calDate: '6',
    activeDateKey: 'row-2-column-4',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/07/19',
    dayDate: 'Thu, Jan 7th',
    calDate: '7',
    activeDateKey: 'row-2-column-5',
    inMonth: true,
    sessions: [
      { title: 'Session 2' },
      { title: 'Session 3' },
    ],
    lessons: [
      { title: 'Reading Introduction', completed: true },
      { title: 'Active Reading', completed: false },
      { title: 'General Strategy (Reading)', completed: true },
      { title: 'Applying Active Reading', completed: false },
      { title: 'Strategy Review (Reading)', completed: true },
      { title: 'Reading Vocabulary: Word Roots', completed: true },
    ],
    worksheets: [
      { title: 'Worksheet Triangles #1', completed: true },
      { title: 'Worksheet Triangles #2', completed: false },
      { title: 'Worksheet Triangles #3', completed: true },
    ],
    testSections: [
      { title: 'Test Section: Math (no calc) version 53-pre' },
      { title: 'Test Section: Math (calc) version 21-pre' },
    ],
    simulatedSat: [],
  },
  {
    date: '01/08/19',
    dayDate: 'Fri, Jan 8th',
    calDate: '8',
    activeDateKey: 'row-2-column-6',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/09/19',
    dayDate: 'Sat, Jan 9th',
    calDate: '9',
    activeDateKey: 'row-2-column-7',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
];
const row3 = [
  {
    date: '01/10/19',
    dayDate: 'Sun, Jan 10th',
    calDate: '10',
    activeDateKey: 'row-3-column-1',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/11/19',
    dayDate: 'Mon, Jan 11th',
    calDate: '11',
    activeDateKey: 'row-3-column-2',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/12/19',
    dayDate: 'Tue, Jan 12th',
    calDate: '12',
    activeDateKey: 'row-3-column-3',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/13/19',
    dayDate: 'Wed, Jan 13th',
    calDate: '13',
    activeDateKey: 'row-3-column-4',
    inMonth: true,
    sessions: [
      { title: 'Session 2' },
      { title: 'Session 3' },
    ],
    lessons: [
      { title: 'Reading Introduction', completed: true },
      { title: 'Active Reading', completed: false },
      { title: 'General Strategy (Reading)', completed: true },
      { title: 'Applying Active Reading', completed: false },
      { title: 'Strategy Review (Reading)', completed: true },
      { title: 'Reading Vocabulary: Word Roots', completed: true },
    ],
    worksheets: [
      { title: 'Worksheet Triangles #1', completed: true },
      { title: 'Worksheet Triangles #3', completed: true },
    ],
    testSections: [
      { title: 'Test Section: Math (no calc) version 53-pre' },
      { title: 'Test Section: Math (calc) version 21-pre' },
    ],
    simulatedSat: [],
  },
  {
    date: '01/14/19',
    dayDate: 'Thu, Jan 14th',
    calDate: '14',
    activeDateKey: 'row-3-column-5',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/15/19',
    dayDate: 'Fri, Jan 15th',
    calDate: '15',
    activeDateKey: 'row-3-column-6',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/16/19',
    dayDate: 'Sat, Jan 16th',
    calDate: '16',
    activeDateKey: 'row-3-column-7',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
];
const row4 = [
  {
    date: '01/17/19',
    dayDate: 'Sun, Jan 17',
    calDate: '17',
    activeDateKey: 'row-4-column-1',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/18/19',
    dayDate: 'Mon, Jan 18',
    calDate: '18',
    activeDateKey: 'row-4-column-2',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/19/19',
    dayDate: 'Tue, Jan 19',
    calDate: '19',
    activeDateKey: 'row-4-column-3',
    inMonth: true,
    sessions: [
      { title: 'Session 2' },
      { title: 'Session 3' },
    ],
    lessons: [
      { title: 'Reading Introduction', completed: true },
      { title: 'Active Reading', completed: false },
      { title: 'General Strategy (Reading)', completed: true },
      { title: 'Applying Active Reading', completed: false },
      { title: 'Strategy Review (Reading)', completed: true },
      { title: 'Reading Vocabulary: Word Roots', completed: true },
    ],
    worksheets: [
      { title: 'Worksheet Triangles #1', completed: true },
      { title: 'Worksheet Triangles #2', completed: false },
      { title: 'Worksheet Triangles #3', completed: true },
    ],
    testSections: [
      { title: 'Test Section: Math (no calc) version 53-pre' },
      { title: 'Test Section: Math (calc) version 21-pre' },
    ],
    simulatedSat: [],
  },
  {
    date: '01/20/19',
    dayDate: 'Wed, Jan 20',
    calDate: '20',
    activeDateKey: 'row-4-column-4',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/21/19',
    dayDate: 'Thu, Jan 21',
    calDate: '21',
    activeDateKey: 'row-4-column-5',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/22/19',
    dayDate: 'Fri, Jan 22',
    calDate: '22',
    activeDateKey: 'row-4-column-6',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/23/19',
    dayDate: 'Sat, Jan 23',
    calDate: '23',
    activeDateKey: 'row-4-column-7',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
];
const row5 = [
  {
    date: '01/24/19',
    dayDate: 'Sun, Jan 24th',
    calDate: '24',
    activeDateKey: 'row-5-column-1',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/25/19',
    dayDate: 'Mon, Jan 25th',
    calDate: '25',
    activeDateKey: 'row-5-column-2',
    inMonth: true,
    sessions: [
      { title: 'Session 2' },
      { title: 'Session 3' },
    ],
    lessons: [
      { title: 'Reading Introduction', completed: true },
      { title: 'Active Reading', completed: false },
      { title: 'Strategy Review (Reading)', completed: true },
      { title: 'Reading Vocabulary: Word Roots', completed: true },
    ],
    worksheets: [
      { title: 'Worksheet Triangles #1', completed: true },
      { title: 'Worksheet Triangles #2', completed: false },
      { title: 'Worksheet Triangles #3', completed: true },
    ],
    testSections: [
      { title: 'Test Section: Math (no calc) version 53-pre' },
      { title: 'Test Section: Math (calc) version 21-pre' },
    ],
    simulatedSat: [],
  },
  {
    date: '01/26/19',
    dayDate: 'Tue, Jan 26th',
    calDate: '26',
    activeDateKey: 'row-5-column-3',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/27/19',
    dayDate: 'Wed, Jan 27th',
    calDate: '27',
    activeDateKey: 'row-5-column-4',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/28/19',
    dayDate: 'Thu, Jan 28th',
    calDate: '28',
    activeDateKey: 'row-5-column-5',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/29/19',
    dayDate: 'Fri, Jan 29th',
    calDate: '29',
    activeDateKey: 'row-5-column-6',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '01/30/19',
    dayDate: 'Sat, Jan 30th',
    calDate: '30',
    activeDateKey: 'row-5-column-7',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
];
const row6 = [
  {
    date: '01/31/19',
    dayDate: 'Sun, Jan 31st',
    calDate: '31',
    activeDateKey: 'row-6-column-1',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '02/01/19',
    dayDate: 'Mon, Feb 1st',
    calDate: '1',
    activeDateKey: 'row-6-column-2',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '02/02/19',
    dayDate: 'Tue, Feb 2nd',
    calDate: '2',
    activeDateKey: 'row-6-column-3',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '02/03/19',
    dayDate: 'Wed, Feb 3rd',
    calDate: '3',
    activeDateKey: 'row-6-column-4',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '02/04/19',
    dayDate: 'Thu, Feb 4th',
    calDate: '4',
    activeDateKey: 'row-6-column-5',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '02/05/19',
    dayDate: 'Fri, Feb 5th',
    calDate: '5',
    activeDateKey: 'row-6-column-6',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
  {
    date: '02/06/19',
    dayDate: 'Sat, Feb 6th',
    calDate: '6',
    activeDateKey: 'row-6-column-7',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
    simulatedSat: [],
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      rows: [...row1, ...row2, ...row3, ...row4, ...row5, ...row6],
      activeDate: null,
      activeColumn: null,
      expandedColumn: 3,
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
    };
  }

  // onSetActiveDate = (incomingDate) => this.setState(({ activeDate }) => ({ activeDate: activeDate === null ? incomingDate : null }))
  onSetActiveDate = (incomingDate) => {
    this.setState({ activeDate: incomingDate, activeColumn: incomingDate[13] })
  }

  // TODO: Handle attaching assignments to non-sample rows
  onAssignSession = (session) => {
    const { rows } = this.state;
    const updatedDate = rows.filter(row => row.date === session.date)[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.sessions.push(session);
    const updatedRows = update(rows, {
      $splice: [[ updatedDateIndex, 1, updatedDate ]],
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignSessionModal();
  }

  onAssignLessons = (lessons, date) => {
    const { rows } = this.state;
    const updatedDate = rows.filter(row => row.date === date)[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.lessons.push(...lessons);
    const updatedRows = update(rows, {
      $splice: [[ updatedDateIndex, 1, updatedDate ]],
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignLessonsModal();
  }

  onAssignWorksheets = (worksheets, date) => {
    const { rows } = this.state;
    const updatedDate = rows.filter(row => row.date === date)[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.worksheets.push(...worksheets);
    const updatedRows = update(rows, {
      $splice: [[ updatedDateIndex, 1, updatedDate ]],
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignWorksheetsModal();
    console.warn('stubbed out assign worksheets func', worksheets, date);
  }

  onAssignTestSection = (testSection) => {
    const { rows } = this.state;
    const updatedDate = rows.filter(row => row.date === testSection.assignDate)[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.testSections.push(testSection);
    const updatedRows = update(rows, {
      $splice: [[ updatedDateIndex, 1, updatedDate ]],
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignTestSectionModal();
  }

  onAssignSimulatedSat = (simulatedSat) => {
    const { rows } = this.state;
    const updatedDate = rows.filter(row => row.date === simulatedSat.assignDate)[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.simulatedSat.push(simulatedSat);
    const updatedRows = update(rows, {
      $splice: [[ updatedDateIndex, 1, updatedDate ]],
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignSimulatedSatModal();
  }

  onAssignTargetTest = (targetTestDate) => {
    console.warn('pending decision of what test date assign ui looks like', targetTestDate);
  }

  onToggleAssignSessionModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignSessionModalOpen }) => ({ assignSessionModalOpen: !assignSessionModalOpen, modalDate, assignDropdownIsOpen: false }))
  }

  onToggleAssignLessonsModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignLessonsModalOpen }) => ({ assignLessonsModalOpen: !assignLessonsModalOpen, modalDate, assignDropdownIsOpen: false }))
  }

  onToggleAssignWorksheetsModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignWorksheetsModalOpen }) => ({ assignWorksheetsModalOpen: !assignWorksheetsModalOpen, modalDate, assignDropdownIsOpen: false }))
  }

  onToggleAssignTestSectionModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignTestSectionModalOpen }) => ({ assignTestSectionModalOpen: !assignTestSectionModalOpen, modalDate, assignDropdownIsOpen: false }))
  }

  onToggleAssignSimulatedSatModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignSimulatedSatModalOpen }) => ({ assignSimulatedSatModalOpen: !assignSimulatedSatModalOpen, modalDate, assignDropdownIsOpen: false }))
  }

  onToggleAssignTargetTestModal = (event = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignTargetTestDateModalOpen }) => ({ assignTargetTestDateModalOpen: !assignTargetTestDateModalOpen, assignDropdownIsOpen: false }))
  }

  onToggleAddDropdown = () => this.setState(({ addDropdownOpen }) => ({ addDropdownOpen: !addDropdownOpen, deleteDropdownOpen: false }))
  onToggleDeleteDropdown = () => this.setState(({ deleteDropdownOpen }) => ({ deleteDropdownOpen: !deleteDropdownOpen, addDropdownOpen: false }))

  onToggleAssignDropdown = () => this.setState(({ assignDropdownIsOpen }) => ({ assignDropdownIsOpen: !assignDropdownIsOpen }))
  onToggleHandleFilteredItemsDropdown = () => this.setState(({ onToggleHandleFilteredItemsDropdown }) => ({ onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown }))

  mapRows = () => {
    const { rows, activeDate, activeColumn, addDropdownOpen, deleteDropdownOpen } = this.state;
    let startIndex = -7;
    let endIndex = 0;
    const rowArray = [];
    for (let i = 0; i < 6; i++) {
      startIndex += 7;
      endIndex += 7;
      rowArray.push(
        <CalendarRow
          rows={rows.slice(startIndex, endIndex)}
          activeDate={activeDate}
          activeColumn={activeColumn}
          addDropdownOpen={addDropdownOpen}
          deleteDropdownOpen={deleteDropdownOpen}
          onSetActiveDate={this.onSetActiveDate}
          onToggleAddDropdown={this.onToggleAddDropdown}
          onToggleDeleteDropdown={this.onToggleDeleteDropdown}
          onToggleAssignLessonsModal={this.onToggleAssignLessonsModal}
          onToggleAssignSessionModal={this.onToggleAssignSessionModal}
          onToggleAssignTestSectionModal={this.onToggleAssignTestSectionModal}
          onToggleAssignSimulatedSatModal={this.onToggleAssignSimulatedSatModal}
        />
      )
    }
    return rowArray;
  }

  render() {
    const { assignSessionModalOpen, assignLessonsModalOpen, assignWorksheetsModalOpen,
      assignTestSectionModalOpen, assignSimulatedSatModalOpen, assignTargetTestDateModalOpen,
      modalDate, assignDropdownIsOpen, onToggleHandleFilteredItemsDropdown, filters,
    } = this.state;
    return (
      <React.Fragment>
        <AssignSessionModal
          modalDate={modalDate}
          open={assignSessionModalOpen}
          onClose={this.onToggleAssignSessionModal}
          onAssignSession={this.onAssignSession}
        />
        <AssignLessonModal
          modalDate={modalDate}
          open={assignLessonsModalOpen}
          onClose={this.onToggleAssignLessonsModal}
          onAssignLessons={this.onAssignLessons}
        />
        <AssignWorksheetModal
          modalDate={modalDate}
          open={assignWorksheetsModalOpen}
          onClose={this.onToggleAssignWorksheetsModal}
          onAssignWorksheets={this.onAssignWorksheets}
        />
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
        <main id="main" role="main">
          <div className="main-holder grey lighten-3">
            <div className="title-row card-panel">
              <div className="mobile-header">
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </div>
              <nav className="breadcrumb-holder">
                <div className="nav-wrapper ">
                  <a href="#" className="breadcrumb">&lt; Classes</a>
                </div>
              </nav>
              <h2 className="h1 white-text">
                <span className="heading-holder">
                  <i className="icon-members"></i>
                  <span className="heading-block">Some Class in June</span>
                </span>
              </h2>
              {/* <!-- navigation additional --> */}
              <nav className="nav-additional">
                <ul className="menu-additional">
                  <li><a href="#">Summary</a></li>
                  <li><a className="active" href="#">Calendar</a></li>
                  <li><a href="#">Lessons</a></li>
                  <li><a href="#">Tests</a></li>
                  <li><a href="#">Account</a></li>
                </ul>
              </nav>
              <div className="activate-block">
                <a href="#" className="waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"><b className="btn-text visible-lg">Account Activated</b> <i className="icon-unlock"></i></a>
                <a href="#" className="waves-effect btn btn-orange btn-account_inactive dropdown-trigger" data-target="dropdown_activate"><b className="btn-text visible-lg">Activate Account</b> <i className="icon-key"></i></a>
                {/* <!-- Dropdown Activate Structure --> */}
                <div id='dropdown_activate' className='dropdown-content'>
                  <div className="card-panel">
                    <div className="title-block">
                      <div className="h3">Ready to begin your course?</div>
                      <div className="subtitle">Please enter a valid license code below.</div>
                    </div>
                    <form action="#" className="activate-form">
                      <fieldset>
                        <div className="input-field">
                          <input type="text" value="4BF86266-A2A4-C9FB-387D07ABB5471305" id="license_code" />
                          <label className="label" htmlFor="license_code">License Code</label>
                        </div>
                        <div className="btn-holder center-align">
                          <button className="btn btn-blue" type="submit">Activate </button>
                        </div>
                      </fieldset>
                    </form>
                    <div className="text-block center-align">
                      <p>If you need license codes, you can get them here: <a href="#" className="waves-effect waves-light btn-small btn-blue">Purchase Licenses</a></p>
                    </div>
                    <div className="text-block">
                      <p>*Note: </p>
                      <p>We oﬀer discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FilterSection filters={filters} />
            <div className="calendar-section view-month">
              <div className="calendar-slider">
                <CalendarHeader />
                <div id="calendar" className="main-slick-calendar cal-context" style={{ width: '100%' }}>
                  {/* <!-- calendar month slide January--> */}
                  <div className="slide">
                    <table className="calendar-table cal-month-box">
                      <thead>
                        <tr className="month-title">
                          <td colSpan="7"><div className="cal-month-day">January</div></td>
                        </tr>
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
                        {this.mapRows()}
                      </tbody>
                    </table>
                  </div>
                  {/* <!-- calendar month slide February --> */}
                  <div className="slide"></div>
                  {/* <!-- calendar month slide March --> */}
                  <div className="slide"></div>
                </div>
                <div className="add-btn-block">
                  <a
                    href="#"
                    data-target='dropdown_assign'
                    onClick={this.onToggleAssignDropdown}
                    className="dropdown-trigger waves-effect waves-teal btn add-btn"
                  >
                    Assign...
                  </a>
                  <ul id='dropdown_assign' className='dropdown-content' style={{ display: assignDropdownIsOpen ? 'block' : 'none', opacity: assignDropdownIsOpen ? '100' : '0' }}>
                    <li><a href="#" onClick={this.onToggleAssignSessionModal} className="modal-trigger">Session</a></li>
                    <li><a href="#" onClick={this.onToggleAssignLessonsModal} className="modal-trigger">Lesson</a></li>
                    <li><a href="#" onClick={this.onToggleAssignWorksheetsModal} className="modal-trigger">Worksheet</a></li>
                    <li><a href="#" onClick={this.onToggleAssignTestSectionModal} className="modal-trigger">Test Section</a></li>
                    <li><a href="#" onClick={this.onToggleAssignSimulatedSatModal} className="modal-trigger">Simulated SAT</a></li>
                    <li><a href="#" onClick={this.onToggleAssignTargetTestModal} className="modal-trigger">Target Test</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li className="dropdown-footer"><a href="#modal_apply_course_template" className="modal-trigger">Apply Course Template</a></li>
                  </ul>
                </div>
                <div className="add-btn-block btn-block-right">
                  <a
                    href="#"
                    data-target='dropdown_other'
                    onClick={this.onToggleHandleFilteredItemsDropdown}
                    className="dropdown-trigger waves-effect waves-teal btn add-btn-circle"
                  >
                    <i className="icon-dots"></i>
                  </a>
                  <ul id='dropdown_other' className='dropdown-content' style={{ display: onToggleHandleFilteredItemsDropdown ? 'block' : 'none', opacity: onToggleHandleFilteredItemsDropdown ? '100' : '0' }}>
                    <li className="dropdown-header">
                      <b>With Filtered Items... </b>
                      <b className="small">(items currently visible on calendar)</b>
                    </li>
                    <li className="divider"></li>
                    <li><a href="#modal_save_course_template" className="modal-trigger">Save Course as Template</a></li>
                    <li><a href="#!">Reset All</a></li>
                    <li><a href="#!">Delete All</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Dashboard;



/* <!-- Modal structure view Lesson --> */
// <div id="modal_view_lesson" className="modal modal-custom"></div>

/* <!-- Modal structure view Session --> */
// <div id="modal_view_session" className="modal modal-custom"></div>

/* <!-- Modal structure view Practice Test --> */
// <div id="modal_view_practice_test" className="modal modal-custom"></div>

/* <!-- Modal structure view Worksheet --> */
// <div id="modal_view_worksheet" className="modal modal-custom"></div>
