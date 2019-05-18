import React, { Component } from 'react';
import update from 'immutability-helper';

import FilterSection from '../components/Dashboard/components/FilterSection';
import CalendarHeader from '../components/Dashboard/components/CalendarHeader';
import AssignSessionModal from '../components/Dashboard/components/Modals/AssignSessionModal';

import FirstRow from '../components/Dashboard/components/CalendarRows/FirstRow';
import SecondRow from '../components/Dashboard/components/CalendarRows/SecondRow';
import ThirdRow from '../components/Dashboard/components/CalendarRows/ThirdRow';
import FourthRow from '../components/Dashboard/components/CalendarRows/FourthRow';
import FifthRow from '../components/Dashboard/components/CalendarRows/FifthRow';
import SixthRow from '../components/Dashboard/components/CalendarRows/SixthRow';

// TODO: bring all the rows into this component, spread them into container-level rows state, take index-based approach to split them into row-based arrays
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
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [...row2],
      activeDate: null,
      activeColumn: null,
      expandedColumn: 3,
      addDropdownOpen: false,
      deleteDropdownOpen: false,
      assignDropdownIsOpen: false,
      onToggleHandleFilteredItemsDropdown: false,
      assignSessionModalOpen: false,
      modalDate: null,
    };
  }

  // onSetActiveDate = (incomingDate) => this.setState(({ activeDate }) => ({ activeDate: activeDate === null ? incomingDate : null }))
  onSetActiveDate = (incomingDate) => {
    this.setState({ activeDate: incomingDate, activeColumn: incomingDate[13] })
  }

  // TODO: Attach this event to the calendar date
  onSaveNewSession = (session) => {
    const { rows } = this.state;
    const updatedDate = rows.filter(row => row.date === session.date)[0];
    updatedDate.sessions.push(session);
    const updatedDateIndex = rows.indexOf(updatedDate);
    const updatedRows = update(rows, {
      $splice: [[ updatedDateIndex, 1, updatedDate ]],
    })
    this.setState({ rows: updatedRows });
    this.onToggleNewSessionModal();
  }

  onToggleNewSessionModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignSessionModalOpen }) => ({ assignSessionModalOpen: !assignSessionModalOpen, modalDate, assignDropdownIsOpen: false }))
}

  onToggleAddDropdown = () => this.setState(({ addDropdownOpen }) => ({ addDropdownOpen: !addDropdownOpen, deleteDropdownOpen: false }))
  onToggleDeleteDropdown = () => this.setState(({ deleteDropdownOpen }) => ({ deleteDropdownOpen: !deleteDropdownOpen, addDropdownOpen: false }))

  onToggleAssignDropdown = () => this.setState(({ assignDropdownIsOpen }) => ({ assignDropdownIsOpen: !assignDropdownIsOpen }))
  onToggleHandleFilteredItemsDropdown = () => this.setState(({ onToggleHandleFilteredItemsDropdown }) => ({ onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown }))

  render() {
    const { assignSessionModalOpen, modalDate,
      activeDate, activeColumn, addDropdownOpen, deleteDropdownOpen, assignDropdownIsOpen, onToggleHandleFilteredItemsDropdown,
    } = this.state;
    return (
      <React.Fragment>
        <AssignSessionModal
          modalDate={modalDate}
          open={assignSessionModalOpen}
          onClose={this.onToggleNewSessionModal}
          onSaveNewSession={this.onSaveNewSession}
        />
        <main id="main" role="main">
          <div className="main-holder grey lighten-3">
            <div className="title-row card-panel">
              <div className="mobile-header">
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </div>
              <nav className="breadcrumb-holder">
                <div className="nav-wrapper ">
                  <a href="#!" className="breadcrumb">&lt; Classes</a>
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
            <FilterSection />
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
                        <FirstRow
                          activeDate={activeDate}
                          activeColumn={activeColumn}
                          addDropdownOpen={addDropdownOpen}
                          deleteDropdownOpen={deleteDropdownOpen}
                          onSetActiveDate={this.onSetActiveDate}
                          onToggleAddDropdown={this.onToggleAddDropdown}
                          onToggleDeleteDropdown={this.onToggleDeleteDropdown}
                          onToggleNewSessionModal={this.onToggleNewSessionModal}
                        />
                        <SecondRow
                          rows={row2}
                          activeDate={activeDate}
                          activeColumn={activeColumn}
                          addDropdownOpen={addDropdownOpen}
                          deleteDropdownOpen={deleteDropdownOpen}
                          onSetActiveDate={this.onSetActiveDate}
                          onToggleAddDropdown={this.onToggleAddDropdown}
                          onToggleDeleteDropdown={this.onToggleDeleteDropdown}
                          onToggleNewSessionModal={this.onToggleNewSessionModal}
                        />
                        <ThirdRow
                          activeDate={activeDate}
                          activeColumn={activeColumn}
                          addDropdownOpen={addDropdownOpen}
                          deleteDropdownOpen={deleteDropdownOpen}
                          onSetActiveDate={this.onSetActiveDate}
                          onToggleAddDropdown={this.onToggleAddDropdown}
                          onToggleDeleteDropdown={this.onToggleDeleteDropdown}
                          onToggleNewSessionModal={this.onToggleNewSessionModal}
                        />
                        <FourthRow
                          activeDate={activeDate}
                          activeColumn={activeColumn}
                          addDropdownOpen={addDropdownOpen}
                          deleteDropdownOpen={deleteDropdownOpen}
                          onSetActiveDate={this.onSetActiveDate}
                          onToggleAddDropdown={this.onToggleAddDropdown}
                          onToggleDeleteDropdown={this.onToggleDeleteDropdown}
                          onToggleNewSessionModal={this.onToggleNewSessionModal}
                        />
                        <FifthRow
                          activeDate={activeDate}
                          activeColumn={activeColumn}
                          addDropdownOpen={addDropdownOpen}
                          deleteDropdownOpen={deleteDropdownOpen}
                          onSetActiveDate={this.onSetActiveDate}
                          onToggleAddDropdown={this.onToggleAddDropdown}
                          onToggleDeleteDropdown={this.onToggleDeleteDropdown}
                          onToggleNewSessionModal={this.onToggleNewSessionModal}
                        />
                        <SixthRow
                          activeDate={activeDate}
                          activeColumn={activeColumn}
                          addDropdownOpen={addDropdownOpen}
                          deleteDropdownOpen={deleteDropdownOpen}
                          onSetActiveDate={this.onSetActiveDate}
                          onToggleAddDropdown={this.onToggleAddDropdown}
                          onToggleDeleteDropdown={this.onToggleDeleteDropdown}
                          onToggleNewSessionModal={this.onToggleNewSessionModal}
                        />
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
                    <li><a href="#" onClick={this.onToggleNewSessionModal} className="modal-trigger">Session</a></li>
                    <li><a href="#" className="modal-trigger">Lesson</a></li>
                    <li><a href="#" className="modal-trigger">Worksheet</a></li>
                    <li><a href="#" className="modal-trigger">Test Section</a></li>
                    <li><a href="#" className="modal-trigger">Simulated SAT</a></li>
                    <li><a href="#" className="modal-trigger">Target Test</a></li>
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
