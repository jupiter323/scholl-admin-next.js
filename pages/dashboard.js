import React, { Component } from 'react';
import FilterSection from '../components/Dashboard/components/FilterSection';
import CalendarHeader from '../components/Dashboard/components/CalendarHeader';
import FirstRow from '../components/Dashboard/components/CalendarRows/FirstRow';
import SecondRow from '../components/Dashboard/components/CalendarRows/SecondRow';
import ThirdRow from '../components/Dashboard/components/CalendarRows/ThirdRow';
import FourthRow from '../components/Dashboard/components/CalendarRows/FourthRow';
import FifthRow from '../components/Dashboard/components/CalendarRows/FifthRow';
import SixthRow from '../components/Dashboard/components/CalendarRows/SixthRow';

// eslint-disable-next-line react/prefer-stateless-function
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignDropdownIsOpen: false,
      onToggleHandleFilteredItemsDropdown: false,
    };
  }

  onToggleAssignDropdown = () => this.setState(({ assignDropdownIsOpen }) => ({ assignDropdownIsOpen: !assignDropdownIsOpen }))
  onToggleHandleFilteredItemsDropdown = () => this.setState(({ onToggleHandleFilteredItemsDropdown }) => ({ onToggleHandleFilteredItemsDropdown: !onToggleHandleFilteredItemsDropdown }))

  render() {
    const { assignDropdownIsOpen, onToggleHandleFilteredItemsDropdown } = this.state;
    return (
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
                      <FirstRow />
                      <SecondRow />
                      <ThirdRow />
                      <FourthRow />
                      <FifthRow />
                      <SixthRow />
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
                  <li><a href="#modal_assign_session" className="modal-trigger">Session</a></li>
                  <li><a href="#modal_assign_lesson" className="modal-trigger">Lesson</a></li>
                  <li><a href="#modal_assign_worksheet" className="modal-trigger">Worksheet</a></li>
                  <li><a href="#modal_assign_test_section" className="modal-trigger">Test Section</a></li>
                  <li><a href="#modal_assign_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                  <li><a href="#modal_assign_target_test" className="modal-trigger">Target Test</a></li>
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
