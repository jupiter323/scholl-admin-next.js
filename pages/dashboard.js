import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Dashboard extends Component {
  render() {
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
        <div className="calendar-filter filter-form-holder">
          <ul className="collapsible expandable">
            <li>
              <div className="collapsible-body">
                <div className="filter-form_checkbox-list-holder justify-center">
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="className" />
                      <label htmlFor="className">Some Class Name</label>
                    </li>
                    <li>
                      <input type="checkbox" id="tutoring" />
                      <label htmlFor="tutoring">Tutoring</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="sessions" />
                      <label htmlFor="sessions">Sessions</label>
                    </li>
                    <li>
                      <input type="checkbox" id="lessons" />
                      <label htmlFor="lessons">Lessons</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="worksheets" />
                      <label htmlFor="worksheets">Worksheets</label>
                    </li>
                    <li>
                      <input type="checkbox" id="testSections" />
                      <label htmlFor="testSections">Test Sections</label>
                    </li>
                    <li>
                      <input type="checkbox" id="simulatedSATs" />
                      <label htmlFor="simulatedSATs">Simulated SATs</label>
                    </li>
                    <li>
                      <input type="checkbox" id="targetTests" />
                      <label htmlFor="targetTests">Target Tests</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="dueToday" />
                      <label htmlFor="dueToday">Due Today</label>
                    </li>
                    <li>
                      <input type="checkbox" id="dueNextSession" />
                      <label htmlFor="dueNextSession">Due By Next Session</label>
                    </li>
                    <li>
                      <input type="checkbox" id="dueThisWeek" />
                      <label htmlFor="dueThisWeek">Due this Week</label>
                    </li>
                    <li>
                      <input type="checkbox" id="overdue" />
                      <label htmlFor="overdue">Overdue</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="complete" />
                      <label htmlFor="complete">Complete</label>
                    </li>
                    <li>
                      <input type="checkbox" id="incomplete" />
                      <label htmlFor="incomplete">Incomplete</label>
                    </li>
                    <li>
                      <input type="checkbox" id="future" />
                      <label htmlFor="future">Future</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="reading" />
                      <label htmlFor="reading">Reading</label>
                    </li>
                    <li>
                      <input type="checkbox" id="writing" />
                      <label htmlFor="writing">Writing</label>
                    </li>
                    <li>
                      <input type="checkbox" id="math" />
                      <label htmlFor="math">Math</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="beginning" />
                      <label htmlFor="beginning">Beginning</label>
                    </li>
                    <li>
                      <input type="checkbox" id="developing" />
                      <label htmlFor="developing">Developing</label>
                    </li>
                    <li>
                      <input type="checkbox" id="accomplished" />
                      <label htmlFor="accomplished">Accomplished</label>
                    </li>
                    <li>
                      <input type="checkbox" id="exemplary" />
                      <label htmlFor="exemplary">Exemplary</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="hasReviewFlags" />
                      <label htmlFor="hasReviewFlags">Has Review Flags</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mb-0 d-flex align-items-flex-end">
                <div className="col s12 l8"></div>
                <div className="col s12 l4">
                  <div className="option-filters">
                    <div className="option-item clear"><a href="#">Clear Filters</a></div>
                    <div className="option-item">
                      <span className="collapsible-header"><span className="hide-text">Hide</span> <span className="open-text">Open</span> Filters</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="calendar-section view-month">
          <div className="calendar-slider">
            <div className="calendar-header">
              <div className="calendar-view-switcher">
                <ul className="switcher">
                  <li className="active col" data-view="view-month"><a href="#">Month View</a></li>
                  <li className="col" data-view="view-day"><a href="#">Day View</a></li>
                </ul>
              </div>
              <div className="nav-slick-calendar">
                <div className="slide">January</div>
                <div className="slide">February</div>
                <div className="slide">March</div>
                <div className="slide">April</div>
                <div className="slide">May</div>
                <div className="slide">June</div>
                <div className="slide">July</div>
                <div className="slide">August</div>
                <div className="slide">September</div>
                <div className="slide">October</div>
                <div className="slide">November</div>
                <div className="slide">December</div>
              </div>
            </div>
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
                    {/* <!-- calendar row --> */}
                    <tr className="cal-row-fluid">
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day cal-day-weekend cal-month-first-row">
                          <span className="day-date">Mon, Dec 24th</span>
                          <span className="cal-date">24</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day cal-month-first-row">
                          <span className="day-date">Mon, Dec 25th</span>
                          <span className="cal-date">25</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day cal-month-first-row">
                          <span className="day-date">Mon, Dec 26th</span>
                          <span className="cal-date">26</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day cal-month-first-row">
                          <span className="day-date">Mon, Dec 27th</span>
                          <span className="cal-date">27</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day cal-month-first-row">
                          <span className="day-date">Mon, Dec 28th</span>
                          <span className="cal-date">28</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 1st</span>
                          <span className="cal-date">1</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_010119_add'>Add</a>
                                      <ul id='dropdown_day_010119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_010119_delete'>Delete</a>
                                      <ul id='dropdown_day_010119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 2nd</span>
                          <span className="cal-date">2</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_020119_add'>Add</a>
                                      <ul id='dropdown_day_020119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_020119_delete'>Delete</a>
                                      <ul id='dropdown_day_020119_delete' className='dropdown-content'>
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
                      </td>
                    </tr>
                    {/* <!-- calendar row --> */}
                    <tr className="cal-row-fluid">
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 3rd</span>
                          <span className="cal-date">3</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_030119_add'>Add</a>
                                      <ul id='dropdown_day_030119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_030119_delete'>Delete</a>
                                      <ul id='dropdown_day_030119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 4th</span>
                          <span className="cal-date">4</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_040119_add'>Add</a>
                                      <ul id='dropdown_day_040119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_040119_delete'>Delete</a>
                                      <ul id='dropdown_day_040119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-has-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 5th</span>
                          <span className="cal-date">5</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}
                                <ul className="events-list events-list-short">
                                  <li className="event-frame event-title">
                                    <span className="event-title-box">Session 2</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-lesson-box"> 6 <span className="event-text">lessons</span></span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-worksheet-box">2 <span className="event-text">Worksheets</span></span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-test-box">1 <span className="event-text">Test Section</span></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}
                                <ul className="events-list">
                                  <li className="event-frame">
                                    <span className="event-title-box">Session 2</span>
                                  </li>
                                  {/* <!-- lessons list --> */}
                                  <li className="event-frame">
                                    <span className="event-check lesson-check"><i className="icon-check02"></i></span>
                                    <span className="event event-lesson-box">Reading Introduction</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-lesson-box">Active Reading</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event-check lesson-check"><i className="icon-check02"></i></span>
                                    <span className="event event-lesson-box">General Strategy (Reading)</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event-check lesson-check"><i className="icon-check02"></i></span>
                                    <span className="event event-lesson-box">Applying Active Reading</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event-check lesson-check"><i className="icon-check02"></i></span>
                                    <span className="event event-lesson-box">Strategy Review (Reading)</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event-check lesson-check"><i className="icon-check02"></i></span>
                                    <span className="event event-lesson-box">Reading Vocabulary: Word Roots</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-lesson-box">Adjectives vs. Adverbsa</span>
                                  </li>
                                  {/* <!-- worksheets list --> */}
                                  <li className="event-frame">
                                    <span className="event event-worksheet-box"> Worksheet: Triangles #1</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event-check worksheet-check"><i className="icon-check02"></i></span>
                                    <span className="event event-worksheet-box">Worksheet: Triangles #2</span>
                                  </li>
                                  {/* <!-- test list --> */}
                                  <li className="event-frame">
                                    <span className="event event-test-box">Test Section: Math (no calc) version 53-pre</span>
                                  </li>
                                </ul>
                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_050119_add'>Add</a>
                                      <ul id='dropdown_day_050119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_050119_delete'>Delete</a>
                                      <ul id='dropdown_day_050119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 6th</span>
                          <span className="cal-date">6</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_060119_add'>Add</a>
                                      <ul id='dropdown_day_060119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_060119_delete'>Delete</a>
                                      <ul id='dropdown_day_060119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-has-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 7th</span>
                          <span className="cal-date">7</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}
                                <ul className="events-list events-list-short">
                                  <li className="event-frame event-title">
                                    <span className="event-title-box">Session 2</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-lesson-box">2 <span className="event-text">lessons</span></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}
                                <ul className="events-list">
                                  <li className="event-frame">
                                    <span className="event-title-box">Session 2</span>
                                  </li>
                                  {/* <!-- lessons list --> */}
                                  <li className="event-frame">
                                    <span className="event event-lesson-box">Reading Introduction</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-lesson-box">Active Reading</span>
                                  </li>
                                </ul>
                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_070119_add'>Add</a>
                                      <ul id='dropdown_day_070119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_070119_delete'>Delete</a>
                                      <ul id='dropdown_day_070119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-today">
                          <span className="day-date">Mon, Jan 8th</span>
                          <span className="cal-date">8</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_080119_add'>Add</a>
                                      <ul id='dropdown_day_080119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_080119_delete'>Delete</a>
                                      <ul id='dropdown_day_080119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 9th</span>
                          <span className="cal-date">9</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_090119_add'>Add</a>
                                      <ul id='dropdown_day_090119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_090119_delete'>Delete</a>
                                      <ul id='dropdown_day_090119_delete' className='dropdown-content'>
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
                      </td>
                    </tr>
                    {/* <!-- calendar row --> */}
                    <tr className="cal-row-fluid">
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 10th</span>
                          <span className="cal-date">10</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_100119_add'>Add</a>
                                      <ul id='dropdown_day_100119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_100119_delete'>Delete</a>
                                      <ul id='dropdown_day_100119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-has-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 11th</span>
                          <span className="cal-date">11</span>
                          {/* <!-- events list short --> */}
                          <ul className="events-list events-list-short">
                            <li className="event-frame">
                              <span className="event event-sat-box">1 <span className="event-text">Simulated SAT</span></span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 12th</span>
                          <span className="cal-date">12</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_120119_add'>Add</a>
                                      <ul id='dropdown_day_120119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_120119_delete'>Delete</a>
                                      <ul id='dropdown_day_120119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-has-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 13th</span>
                          <span className="cal-date">13</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}
                                <ul className="events-list events-list-short">
                                  <li className="event-frame event-title">
                                    <span className="event-title-box">Session 2</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-lesson-box">4 <span className="event-text">lessons</span></span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-worksheet-box">2 <span className="event-text">Worksheet</span></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}
                                <ul className="events-list">
                                  <li className="event-frame">
                                    <span className="event-title-box">Session 2</span>
                                  </li>
                                  {/* <!-- lessons list --> */}
                                  <li className="event-frame">
                                    <span className="event event-lesson-box">Applying Active Reading</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event event-lesson-box">Strategy Review (Reading)</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event-check lesson-check"><i className="icon-check02"></i></span>
                                    <span className="event event-lesson-box">Reading Vocabulary: Word Roots</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event-check lesson-check"><i className="icon-check02"></i></span>
                                    <span className="event event-lesson-box">Adjectives vs. Adverbsa</span>
                                  </li>
                                  {/* <!-- worksheet list --> */}
                                  <li className="event-frame">
                                    <span className="event-check worksheet-check"><i className="icon-check02"></i></span>
                                    <span className="event event-worksheet-box">Worksheet: Triangles #1</span>
                                  </li>
                                  <li className="event-frame">
                                    <span className="event-check worksheet-check"><i className="icon-check02"></i></span>
                                    <span className="event event-worksheet-box">Worksheet: Triangles #2</span>
                                  </li>
                                </ul>
                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_130119_add'>Add</a>
                                      <ul id='dropdown_day_130119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_130119_delete'>Delete</a>
                                      <ul id='dropdown_day_130119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 14th</span>
                          <span className="cal-date">14</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_140119_add'>Add</a>
                                      <ul id='dropdown_day_140119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_140119_delete'>Delete</a>
                                      <ul id='dropdown_day_140119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 15th</span>
                          <span className="cal-date">15</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_150119_add'>Add</a>
                                      <ul id='dropdown_day_150119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_150119_delete'>Delete</a>
                                      <ul id='dropdown_day_150119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 16th</span>
                          <span className="cal-date">16</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_160119_add'>Add</a>
                                      <ul id='dropdown_day_160119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_160119_delete'>Delete</a>
                                      <ul id='dropdown_day_160119_delete' className='dropdown-content'>
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
                      </td>
                    </tr>
                    {/* <!-- calendar row --> */}
                    <tr className="cal-row-fluid">
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 17th</span>
                          <span className="cal-date">17</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_170119_add'>Add</a>
                                      <ul id='dropdown_day_170119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_170119_delete'>Delete</a>
                                      <ul id='dropdown_day_170119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 18th</span>
                          <span className="cal-date">18</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_180119_add'>Add</a>
                                      <ul id='dropdown_day_180119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_180119_delete'>Delete</a>
                                      <ul id='dropdown_day_180119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 19th</span>
                          <span className="cal-date">19</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_190119_add'>Add</a>
                                      <ul id='dropdown_day_190119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_190119_delete'>Delete</a>
                                      <ul id='dropdown_day_190119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 20th</span>
                          <span className="cal-date">20</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_200119_add'>Add</a>
                                      <ul id='dropdown_day_200119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_200119_delete'>Delete</a>
                                      <ul id='dropdown_day_200119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 21st</span>
                          <span className="cal-date">21</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_210119_add'>Add</a>
                                      <ul id='dropdown_day_210119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_210119_delete'>Delete</a>
                                      <ul id='dropdown_day_210119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 22nd</span>
                          <span className="cal-date">22</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_220119_add'>Add</a>
                                      <ul id='dropdown_day_220119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_220119_delete'>Delete</a>
                                      <ul id='dropdown_day_220119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 13rd</span>
                          <span className="cal-date">23</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_230119_add'>Add</a>
                                      <ul id='dropdown_day_230119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_230119_delete'>Delete</a>
                                      <ul id='dropdown_day_230119_delete' className='dropdown-content'>
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
                      </td>
                    </tr>
                    {/* <!-- calendar row --> */}
                    <tr className="cal-row-fluid">
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 24th</span>
                          <span className="cal-date">24</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_240119_add'>Add</a>
                                      <ul id='dropdown_day_240119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_240119_delete'>Delete</a>
                                      <ul id='dropdown_day_240119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 25th</span>
                          <span className="cal-date">25</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_250119_add'>Add</a>
                                      <ul id='dropdown_day_250119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_250119_delete'>Delete</a>
                                      <ul id='dropdown_day_250119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 26th</span>
                          <span className="cal-date">26</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_260119_add'>Add</a>
                                      <ul id='dropdown_day_260119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_260119_delete'>Delete</a>
                                      <ul id='dropdown_day_260119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 27th</span>
                          <span className="cal-date">27</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_270119_add'>Add</a>
                                      <ul id='dropdown_day_270119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_270119_delete'>Delete</a>
                                      <ul id='dropdown_day_270119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 28th</span>
                          <span className="cal-date">28</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_280119_add'>Add</a>
                                      <ul id='dropdown_day_280119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_280119_delete'>Delete</a>
                                      <ul id='dropdown_day_280119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth">
                          <span className="day-date">Mon, Jan 29th</span>
                          <span className="cal-date">29</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_290119_add'>Add</a>
                                      <ul id='dropdown_day_290119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_290119_delete'>Delete</a>
                                      <ul id='dropdown_day_290119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 30th</span>
                          <span className="cal-date">30</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_300119_add'>Add</a>
                                      <ul id='dropdown_day_300119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_300119_delete'>Delete</a>
                                      <ul id='dropdown_day_300119_delete' className='dropdown-content'>
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
                      </td>
                    </tr>
                    {/* <!-- calendar row --> */}
                    <tr className="cal-row-fluid">
                      <td className="cal-cell1 cal-cell day-no-events">
                        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
                          <span className="day-date">Mon, Jan 31st</span>
                          <span className="cal-date">31</span>
                          {/* <!-- day open collapsible --> */}
                          <ul className="day-collapsible collapsible">
                            <li className="collapsible-holder">
                              <div className="collapsible-header">
                                <span className="fake-close"><span className="icon-close-thin"></span></span>
                                {/* <!-- events list short --> */}

                              </div>
                              <div className="collapsible-body">
                                {/* <!-- events list full --> */}

                                <div className="day-footer">
                                  <ul className="links-list">
                                    <li>
                                      <a href="#" className="link-add dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_310119_add'>Add</a>
                                      <ul id='dropdown_day_310119_add' className='dropdown-content'>
                                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#" className="link-delete dropdown-trigger waves-effect waves-teal" data-target='dropdown_day_310119_delete'>Delete</a>
                                      <ul id='dropdown_day_310119_delete' className='dropdown-content'>
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
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day">
                          <span className="day-date">Mon, Feb 1st</span>
                          <span className="cal-date">1</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day">
                          <span className="day-date">Mon, Feb 2nd</span>
                          <span className="cal-date">2</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day">
                          <span className="day-date">Mon, Feb 3rd</span>
                          <span className="cal-date">3</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day">
                          <span className="day-date">Mon, Feb 4th</span>
                          <span className="cal-date">4</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day">
                          <span className="day-date">Mon, Feb 5th</span>
                          <span className="cal-date">5</span>
                        </div>
                      </td>
                      <td className="cal-cell1 cal-cell cal-day-outmonth">
                        <div className="cal-month-day cal-day-weekend">
                          <span className="day-date">Mon, Feb 6th</span>
                          <span className="cal-date">6</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- calendar month slide February --> */}
              <div className="slide"></div>
              {/* <!-- calendar month slide March --> */}
              <div className="slide"></div>
            </div>
            <div className="add-btn-block">
              <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign'>Assign...</a>
              <ul id='dropdown_assign' className='dropdown-content'>
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
              <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn-circle" data-target='dropdown_other'><i className="icon-dots"></i></a>
              <ul id='dropdown_other' className='dropdown-content'>
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
