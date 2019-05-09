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

/* <!-- Modal structure assign Session --> */
// <div id="modal_assign_session" class="modal modal-custom modal-calendar">
// <form action="#" class="custom-form">
//   <fieldset>
//     <div class="card-modal card">
//       <div class="card-panel card-panel-title" style="background-color: #14b04b; color: #fff;">
//         <div class="card-panel-row row">
//           <div class="col">
//             <h2>
//               <span class="heading-holder">
//                 <i class="icon-clock2"></i>
//                 <span class="heading-block"> New Session</span>
//               </span>
//             </h2>
//           </div>
//           <div class="col right-align">
//             <a href="#!" class="panel-link close modal-close"><i class="icon-close-thin"></i></a>
//           </div>
//         </div>
//       </div>
//       <div class="card-content">
//         <div class="card-body">
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="datepicker-field input-field">
//                 <i class="icon-calendar"></i>
//                 <input type="text"  class="datepicker" id="date_new_session" />
//                 <label class="label" for="date_new_session">Date</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-clock2"></i>
//                 <input type="text" class="timepicker" id="start_time_new_section" />
//                 <label class="label" for="start_time_new_section">Start Time</label>
//               </div>
//             </div>
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-clock2"></i>
//                 <input type="text" class="timepicker" value="6/1/18" id="end_time_new_section" />
//                 <label class="label" for="end_time_new_section">End Time</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="input-field input-field-textarea">
//                 <textarea id="description_session" class="textarea-scroll" cols="40" rows="7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod soluta excepturi perferendis, ipsa officia maiores accusamus doloribus porro tempore veniam libero voluptatum sunt repellat facere at suscipit repudiandae accusantium quo.
//                 </textarea>
//                 <label class="label" for="description_session">Session Notes:</label>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal-footer modal-footer-width">
//           <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//           <a href="#" class="link-btn waves-effect waves-teal btn-flat">Add Session</a>
//         </div>
//       </div>
//     </div>
//   </fieldset>
// </form>
// </div>

  /* <!-- Modal structure Assign Lesson --> */
  // <div id="modal_assign_lesson" class="modal-page modal modal-custom">
  //   <form action="#">
  //     <fieldset>
  //       <div class="card-modal card-main card switcher-section grey lighten-3">
  //         <div class="header-row card-panel light-blue lighten-1 white-text">
  //           <div class="card-panel-row row">
  //             <div class="col s11">
  //               <div class="d-flex">
  //                 <div class="icon-col">
  //                   <i class="icon-books-l"></i>
  //                 </div>
  //                 <div class="card-panel-text">
  //                   <div class="text-large">Assign Lessons</div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div class="col s1 right-align">
  //               <div class="row icons-row"><a href="#" class="modal-close close"><i class="icon-close-thin"></i></a></div>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="filter-form-holder">
  //           <ul class="collapsible expandable">
  //             <li>
  //               <div class="collapsible-body">
  //                 <div class="filter-form_checkbox-list-holder justify-center">
  //                   <ul class="filter-form_checkbox-list">
  //                     <li>
  //                       <input type="checkbox" id="reading_lesson" />
  //                       <label for="reading_lesson">Reading</label>
  //                     </li>
  //                     <li>
  //                       <input type="checkbox" id="writing_lesson" />
  //                       <label for="writing_lesson">Writing</label>
  //                     </li>
  //                     <li>
  //                       <input type="checkbox" id="math_lesson" />
  //                       <label for="math_lesson">Math</label>
  //                     </li>
  //                   </ul>
  //                   <ul class="filter-form_checkbox-list">
  //                     <li>
  //                       <input type="checkbox" id="challenge_lesson" />
  //                       <label for="challenge_lesson">Challenge + Practice</label>
  //                     </li>
  //                     <li>
  //                       <input type="checkbox" id="homework_lesson" />
  //                       <label for="homework_lesson">Homework Drill</label>
  //                     </li>
  //                     <li>
  //                       <input type="checkbox" id="read_workbook_lesson" />
  //                       <label for="read_workbook_lesson">Reading from Workbook</label>
  //                     </li>
  //                   </ul>
  //                 </div>
  //                 <div class="d-flex row mb-0 justify-center">
  //                   <div class="col s12 m3">
  //                     <div class="search-field input-field">
  //                       <input type="search" id="search_lesson" class="input-control validate" placeholder="Speci" />
  //                       <button type="submit" class="search-button"><i class="icon-search"></i></button>
  //                       <label class="label" for="search_lesson">Search</label>
  //                     </div>
  //                   </div>
  //                   <div class="col s12 m3">
  //                     <div class="search-field input-field">
  //                       <input type="search" id="search_unit_lesson" class="input-control validate" placeholder="Math Unit #3" />
  //                       <button type="submit" class="search-button"><i class="icon-search"></i></button>
  //                       <label class="label" for="search_unit_lesson">Search</label>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div class="row mb-0 d-flex align-items-center">
  //                 <div class="col s12 l4">
  //                   <div class="row mb-0">
  //                     <div class="col s12 m6">
  //                       <div class="input-field">
  //                         <select id="sort_lesson">
  //                           <option>Page Number</option>
  //                           <option>Page Number</option>
  //                           <option>Page Number</option>
  //                         </select>
  //                         <label class="label" for="sort_lesson">Sort By</label>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div class="switcher-block col s12 l4">
  //                   <div class="view-switcher">
  //                     <ul class="switcher center-align">
  //                       <li class="active" data-view="view-full"><a href="#">Month View</a></li>
  //                       <li data-view="view-list"><a href="#">Day View</a></li>
  //                     </ul>
  //                   </div>
  //                 </div>
  //                 <div class="col s12 l4">
  //                   <div class="option-filters">
  //                     <div class="option-item clear"><a href="#">Clear Filters</a></div>
  //                     <div class="option-item">
  //                       <span class="collapsible-header"><span class="hide-text">Hide</span> <span class="open-text">Open</span> Filters</span>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </li>
  //           </ul>
  //         </div>
  //         <div class="card-content">
  //           <div class="card-body">
  //             <div class="result-row center-align">
  //               <b class="result"> - 23 results -</b>
  //             </div>
  //             <div class="checkboxes-section row d-flex-content card-width-322">
  //               {/* <!-- card User --> */}
  //               <div class="card-main-col col s12 m8 l7 xl5">
  //                 <div class="card-checkbox">
  //                   <input type="checkbox" />
  //                   <div class="checkbox-card card-main card-lesson-detail card-assigned card">
  //                     <div class="card-panel" style="background-color: #666; color: #fff;">
  //                       <div class="card-panel-row row">
  //                         <div class="icon-col col s2">
  //                           <span class="block-icon">
  //                             <i class="icon-books-l"></i>
  //                             <span class="text-icon">Lesson</span>
  //                           </span>
  //                         </div>
  //                         <div class="col s9">
  //                           <div class="card-panel-text">
  //                             <div class="text-small">Reading Unit #2</div>
  //                             <div class="text-large">Reading Charts and Graphs</div>
  //                             <div class="text-small">Subject: Reading</div>
  //                           </div>
  //                         </div>
  //                         <div class="align-top col s1 right-align">
  //                           <div class="row icons-row">
  //                             <div class="dropdown-block col">
  //                               {/* <!-- Dropdown Trigger --> */}
  //                               <a class='dropdown-trigger btn' href='#' data-target='dropdown_lesson_01'><i class="material-icons dots-icon">more_vert</i></a>
  //                               {/* <!-- Dropdown Structure --> */}
  //                               <ul id='dropdown_lesson_01' class='dropdown-content dropdown-wide'>
  //                                 <li>
  //                                   {/* <!-- Modal Trigger --> */}
  //                                   <a href="#" class="modal-trigger link-block">Edit</a>
  //                                 </li>
  //                                 <li><a href="#!">Clone</a></li>
  //                                 <li><a href="#!">Show Owner</a></li>
  //                                 <li><a href="#!">Delete</a></li>
  //                               </ul>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div class="card-content">
  //                       <div class="chart-container">
  //                         <div class="chart-holder">
  //                           <span class="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
  //                             {/* <!-- do not change path attribute "d" !!! --> */}
  //                             <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
  //                               <path fill="none" style="stroke-width:22;stroke:#d6d6d6;" d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
  //                               <path data-dinamic fill="none" style="stroke-width:22;stroke:#62b771;" d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
  //                             </svg>
  //                           </span>
  //                           <span class="chart-value" style="background-color: #4d4d4d;"></span>
  //                         </div>
  //                         <div class="chart-description">
  //                           <dl class="dl-horizontal">
  //                             <dt>Time Est:</dt>
  //                             <dd>14 min</dd>
  //                           </dl>
  //                           <dl class="dl-horizontal">
  //                             <dt>Problems:</dt>
  //                             <dd>16</dd>
  //                           </dl>
  //                         </div>
  //                       </div>
  //                       <div class="card-footer-row center-align">
  //                         <div class="card-footer-holder">
  //                           <p>p.128  (Challange + Practice)</p>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="add-btn-block">
  //         <a href="#" class="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected_lessons'><i class="material-icons">add</i> Assign Selected</a>
  //         <ul id='dropdown_assign_selected_lessons' class='dropdown-content'>
  //           <li><a href="#">For Today</a></li>
  //           <li><a href="#">For Tomorrow</a></li>
  //           <li><a href="#">For Next Session</a></li>
  //           <li><a href="#">For Date...</a></li>
  //         </ul>
  //       </div>
  //     </fieldset>
  //   </form>
  // </div>

/* <!-- Modal structure Assign Worksheet --> */
// <div id="modal_assign_worksheet" class="modal-page modal modal-custom">
// <form action="#">
//   <fieldset>
//     <div class="card-modal card-main card switcher-section grey lighten-3">
//       <div class="header-row card-panel light-blue lighten-1 white-text">
//         <div class="card-panel-row row">
//           <div class="col s11">
//             <div class="d-flex">
//               <div class="icon-col">
//                 <i class="icon-sheets-w"></i>
//               </div>
//               <div class="card-panel-text">
//                 <div class="text-large">Assign Worksheets</div>
//               </div>
//             </div>
//           </div>
//           <div class="col s1 right-align">
//             <div class="row icons-row"><a href="#" class="modal-close close"><i class="icon-close-thin"></i></a></div>
//           </div>
//         </div>
//       </div>
//       <div class="filter-form-holder">
//         <ul class="collapsible expandable">
//           <li>
//             <div class="collapsible-body">
//               <div class="filter-form_checkbox-list-holder justify-center">
//                 <ul class="filter-form_checkbox-list">
//                   <li>
//                     <input type="checkbox" id="reading_worksheet" />
//                     <label for="reading_worksheet">Reading</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="writing_worksheet" />
//                     <label for="writing_worksheet">Writing</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="math_worksheet" />
//                     <label for="math_worksheet">Math</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="mixed_worksheet_01" />
//                     <label for="mixed_worksheet_01">Mixed</label>
//                   </li>
//                 </ul>
//                 <ul class="filter-form_checkbox-list">
//                   <li>
//                     <input type="checkbox" id="sat_worksheet" />
//                     <label for="sat_worksheet">SAT Practice</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="skill_worksheet" />
//                     <label for="skill_worksheet">Skill Builders</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="mixed_worksheet_02" />
//                     <label for="mixed_worksheet_02">Mixed</label>
//                   </li>
//                 </ul>
//                 <ul class="filter-form_checkbox-list">
//                   <li>
//                     <input type="checkbox" id="built_in_worksheet" />
//                     <label for="built_in_worksheet">Built-In</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="user_created_worksheet" />
//                     <label for="user_created_worksheet">User Created</label>
//                   </li>
//                 </ul>
//                 <ul class="filter-form_checkbox-list">
//                   <li>
//                     <input type="checkbox" id="easy_worksheet" />
//                     <label for="easy_worksheet">Easy</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="medium_worksheet" />
//                     <label for="medium_worksheet">Medium</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="diﬃcult_worksheet" />
//                     <label for="diﬃcult_worksheet">Diﬃcult</label>
//                   </li>
//                   <li>
//                     <input type="checkbox" id="mixed_worksheet_03" />
//                     <label for="mixed_worksheet_03">Mixed</label>
//                   </li>
//                 </ul>
//               </div>
//               <div class="d-flex row mb-0 justify-center">
//                 <div class="col s12 m3">
//                   <div class="search-field input-field">
//                     <input type="search" id="search_worksheet" class="input-control validate" placeholder="Speci" />
//                     <button type="submit" class="search-button"><i class="icon-search"></i></button>
//                     <label class="label" for="search_worksheet">Search</label>
//                   </div>
//                 </div>
//                 <div class="col s12 m3">
//                   <div class="search-field input-field">
//                     <input type="search" id="search_unit_worksheet" class="input-control validate" placeholder="Math Unit #3" />
//                     <button type="submit" class="search-button"><i class="icon-search"></i></button>
//                     <label class="label" for="search_unit_worksheet">Search</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="row mb-0 d-flex align-items-center">
//               <div class="col s12 l4">
//                 <div class="row mb-0">
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <select id="sort_worksheet">
//                         <option>Page Number</option>
//                         <option>Page Number</option>
//                         <option>Page Number</option>
//                       </select>
//                       <label class="label" for="sort_worksheet">Sort By</label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="switcher-block col s12 l4">
//                 <div class="view-switcher">
//                   <ul class="switcher center-align">
//                     <li class="active" data-view="view-full"><a href="#">Month View</a></li>
//                     <li data-view="view-list"><a href="#">Day View</a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div class="col s12 l4">
//                 <div class="option-filters">
//                   <div class="option-item clear"><a href="#">Clear Filters</a></div>
//                   <div class="option-item">
//                     <span class="collapsible-header"><span class="hide-text">Hide</span> <span class="open-text">Open</span> Filters</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div class="card-content">
//         <div class="card-body">
//           <div class="result-row center-align">
//             <b class="result"> - 23 results -</b>
//           </div>
//           <div class="checkboxes-section row d-flex-content card-width-322">
//             {/* <!-- card --> */}
//             <div class="card-main-col col s12 m8 l7 xl5">
//               <div class="card-checkbox">
//                 <input type="checkbox" />
//                 <div class="checkbox-card card-main card-lesson-detail card-assigned card">
//                   <div class="card-panel" style="background-color: #666; color: #fff;">
//                     <div class="card-panel-row row">
//                       <div class="icon-col col s2">
//                         <span class="block-icon">
//                           <i class="icon-sheets-w"></i>
//                         </span>
//                       </div>
//                       <div class="col s9">
//                         <div class="card-panel-text">
//                           <div class="text-small">Worksheet (Math)</div>
//                           <div class="text-large">Triangle Practice </div>
//                         </div>
//                       </div>
//                       <div class="align-top col s1 right-align">
//                         <div class="row icons-row">
//                           <div class="dropdown-block col">
//                             {/* <!-- Dropdown Trigger --> */}
//                             <a class='dropdown-trigger btn' href='#' data-target='dropdown_worksheet_01'><i class="material-icons dots-icon">more_vert</i></a>
//                             {/* <!-- Dropdown Structure --> */}
//                             <ul id='dropdown_worksheet_01' class='dropdown-content dropdown-wide'>
//                               <li>
//                                 {/* <!-- Modal Trigger --> */}
//                                 <a href="#" class="modal-trigger link-block">Edit</a>
//                               </li>
//                               <li><a href="#!">Clone</a></li>
//                               <li><a href="#!">Show Owner</a></li>
//                               <li><a href="#!">Delete</a></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="card-top-block">
//                       <div class="d-flex row mb-0">
//                         <div class="left-col col s6">
//                           <dl class="dl-horizontal">
//                             <dt>Problem Type:</dt>
//                             <dd>SAT Practice</dd>
//                           </dl>
//                         </div>
//                         <div class="right-col col s6 right-align">
//                           <dl class="dl-horizontal">
//                             <dt>Diﬃculty:</dt>
//                             <dd>Beginner</dd>
//                           </dl>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="card-content">
//                     <div class="chart-container">
//                       <div class="chart-holder">
//                         <span class="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
//                           {/* <!-- do not change path attribute "d" !!! --> */}
//                           <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
//                             <path fill="none" style="stroke-width:22;stroke:#eaeaea;" d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
//                             <path data-dinamic fill="none" style="stroke-width:22;stroke:#31837a;" d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
//                           </svg>
//                         </span>
//                         <span class="chart-value" style="background-color: #4d4d4d;"></span>
//                       </div>
//                       <div class="chart-description">
//                         <dl class="dl-horizontal">
//                           <dt>Time Est:</dt>
//                           <dd>14 min</dd>
//                         </dl>
//                         <dl class="dl-horizontal">
//                           <dt>Problems:</dt>
//                           <dd>16</dd>
//                         </dl>
//                       </div>
//                     </div>
//                     <div class="card-text">
//                       <dl class="dl-horizontal">
//                         <dt>Worksheet Source:</dt>
//                         <dd>User Created</dd>
//                       </dl>
//                     </div>
//                     <div class="card-inner-row">
//                       <div class="row-holder">
//                         <ul class="classification-list">
//                           <li class="class-box">Right Trianges</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- card --> */}
//             <div class="card-main-col col s12 m8 l7 xl5">
//               <div class="card-checkbox">
//                 <input type="checkbox" />
//                 <div class="checkbox-card card-main card-lesson-detail card-assigned card">
//                   <div class="card-panel" style="background-color: #666; color: #fff;">
//                     <div class="card-panel-row row">
//                       <div class="icon-col col s2">
//                         <span class="block-icon">
//                           <i class="icon-sheets-w"></i>
//                         </span>
//                       </div>
//                       <div class="col s9">
//                         <div class="card-panel-text">
//                           <div class="text-small">Worksheet (Math)</div>
//                           <div class="text-large">Triangle Practice </div>
//                         </div>
//                       </div>
//                       <div class="align-top col s1 right-align">
//                         <div class="row icons-row">
//                           <div class="dropdown-block col">
//                             {/* <!-- Dropdown Trigger --> */}
//                             <a class='dropdown-trigger btn' href='#' data-target='dropdown_worksheet_02'><i class="material-icons dots-icon">more_vert</i></a>
//                             {/* <!-- Dropdown Structure --> */}
//                             <ul id='dropdown_worksheet_02' class='dropdown-content dropdown-wide'>
//                               <li>
//                                 {/* <!-- Modal Trigger --> */}
//                                 <a href="#" class="modal-trigger link-block">Edit</a>
//                               </li>
//                               <li><a href="#!">Clone</a></li>
//                               <li><a href="#!">Show Owner</a></li>
//                               <li><a href="#!">Delete</a></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="card-top-block">
//                       <div class="d-flex row mb-0">
//                         <div class="left-col col s6">
//                           <dl class="dl-horizontal">
//                             <dt>Problem Type:</dt>
//                             <dd>SAT Practice</dd>
//                           </dl>
//                         </div>
//                         <div class="right-col col s6 right-align">
//                           <dl class="dl-horizontal">
//                             <dt>Diﬃculty:</dt>
//                             <dd>Beginner</dd>
//                           </dl>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="card-content">
//                     <div class="chart-container">
//                       <div class="chart-holder">
//                         <span class="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
//                           {/* <!-- do not change path attribute "d" !!! --> */}
//                           <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
//                             <path fill="none" style="stroke-width:22;stroke:#eaeaea;" d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
//                             <path data-dinamic fill="none" style="stroke-width:22;stroke:#31837a;" d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
//                           </svg>
//                         </span>
//                         <span class="chart-value" style="background-color: #4d4d4d;"></span>
//                       </div>
//                       <div class="chart-description">
//                         <dl class="dl-horizontal">
//                           <dt>Time Est:</dt>
//                           <dd>14 min</dd>
//                         </dl>
//                         <dl class="dl-horizontal">
//                           <dt>Problems:</dt>
//                           <dd>16</dd>
//                         </dl>
//                       </div>
//                     </div>
//                     <div class="card-text">
//                       <dl class="dl-horizontal">
//                         <dt>Worksheet Source:</dt>
//                         <dd>Build-In</dd>
//                       </dl>
//                     </div>
//                     <div class="card-inner-row">
//                       <div class="row-holder">
//                         <ul class="classification-list">
//                           <li class="class-box">Right Trianges</li>
//                           <li class="class-box">Some Topic</li>
//                           <li class="class-box">Right Trianges</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- card --> */}
//             <div class="card-main-col col s12 m8 l7 xl5">
//               <div class="card-checkbox">
//                 <input type="checkbox" />
//                 <div class="checkbox-card card-main card-lesson-detail card-assigned card">
//                   <div class="card-panel" style="background-color: #666; color: #fff;">
//                     <div class="card-panel-row row">
//                       <div class="icon-col col s2">
//                         <span class="block-icon">
//                           <i class="icon-sheets-w"></i>
//                         </span>
//                       </div>
//                       <div class="col s9">
//                         <div class="card-panel-text">
//                           <div class="text-small">Worksheet (Math)</div>
//                           <div class="text-large">Triangle Practice </div>
//                         </div>
//                       </div>
//                       <div class="align-top col s1 right-align">
//                         <div class="row icons-row">
//                           <div class="dropdown-block col">
//                             {/* <!-- Dropdown Trigger --> */}
//                             <a class='dropdown-trigger btn' href='#' data-target='dropdown_worksheet_03'><i class="material-icons dots-icon">more_vert</i></a>
//                             {/* <!-- Dropdown Structure --> */}
//                             <ul id='dropdown_worksheet_03' class='dropdown-content dropdown-wide'>
//                               <li>
//                                 {/* <!-- Modal Trigger --> */}
//                                 <a href="#" class="modal-trigger link-block">Edit</a>
//                               </li>
//                               <li><a href="#!">Clone</a></li>
//                               <li><a href="#!">Show Owner</a></li>
//                               <li><a href="#!">Delete</a></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="card-top-block">
//                       <div class="d-flex row mb-0">
//                         <div class="left-col col s6">
//                           <dl class="dl-horizontal">
//                             <dt>Problem Type:</dt>
//                             <dd>SAT Practice</dd>
//                           </dl>
//                         </div>
//                         <div class="right-col col s6 right-align">
//                           <dl class="dl-horizontal">
//                             <dt>Diﬃculty:</dt>
//                             <dd>Beginner</dd>
//                           </dl>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="card-content">
//                     <div class="chart-container">
//                       <div class="chart-holder">
//                         <span class="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
//                           {/* <!-- do not change path attribute "d" !!! --> */}
//                           <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
//                             <path fill="none" style="stroke-width:22;stroke:#eaeaea;" d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
//                             <path data-dinamic fill="none" style="stroke-width:22;stroke:#31837a;" d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
//                           </svg>
//                         </span>
//                         <span class="chart-value" style="background-color: #4d4d4d;"></span>
//                       </div>
//                       <div class="chart-description">
//                         <dl class="dl-horizontal">
//                           <dt>Time Est:</dt>
//                           <dd>14 min</dd>
//                         </dl>
//                         <dl class="dl-horizontal">
//                           <dt>Problems:</dt>
//                           <dd>16</dd>
//                         </dl>
//                       </div>
//                     </div>
//                     <div class="card-text">
//                       <dl class="dl-horizontal">
//                         <dt>Worksheet Source:</dt>
//                         <dd>Build-In</dd>
//                       </dl>
//                     </div>
//                     <div class="card-inner-row">
//                       <div class="row-holder">
//                         <ul class="classification-list">
//                           <li class="empty-box">no classiﬁcation</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- card --> */}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="add-btn-block">
//       <a href="#" class="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected'><i class="material-icons">add</i> Assign Selected</a>
//       <ul id='dropdown_assign_selected' class='dropdown-content'>
//         <li><a href="#">For Today</a></li>
//         <li><a href="#">For Tomorrow</a></li>
//         <li><a href="#">For Next Session</a></li>
//         <li><a href="#">For Date...</a></li>
//       </ul>
//     </div>
//   </fieldset>
// </form>
// </div>

/* <!-- Modal structure assign Test Section --> */
// <div id="modal_assign_test_section" class="modal modal-custom modal-calendar">
// <form action="#">
//   <fieldset>
//     <div class="card-modal card">
//       <div class="card-panel card-panel-title" style="background-color: #00638e; color: #fff;">
//         <div class="card-panel-row row">
//           <div class="col">
//             <h2 class="h3">
//               <span class="heading-holder">
//                 <i class="icon-assign-section"></i>
//                 <span class="heading-block"> Assign Test Section (as coursework)</span>
//               </span>
//             </h2>
//           </div>
//           <div class="col right-align">
//             <a href="#!" class="panel-link close modal-close"><i class="icon-close-thin"></i></a>
//           </div>
//         </div>
//       </div>
//       <div class="card-content">
//         <div class="card-body">
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="input-field">
//                 <select id="new_test_section_version">
//                   <option>SAT Practice Test #1</option>
//                   <option>SAT Practice Test #2</option>
//                   <option>SAT Practice Test #3</option>
//                 </select>
//                 <label class="label" for="new_test_section_version">Version</label>
//               </div>
//             </div>
//             <div class="col s12">
//               <div class="input-field">
//                 <select id="new_test_section">
//                   <option>Math (no calc)</option>
//                   <option>Option</option>
//                   <option>Option</option>
//                 </select>
//                 <label class="label" for="new_test_section">Section</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-calendar"></i>
//                 <input type="text"  class="datepicker" id="new_test_section_assign_date" />
//                 <label class="label" for="new_test_section_assign_date">Assign For</label>
//               </div>
//             </div>
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-clock2"></i>
//                 <input type="text" class="timepicker" id="new_test_section_assign_time" />
//                 <label class="label" for="new_test_section_assign_time">Time</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-calendar"></i>
//                 <input type="text"  class="datepicker" id="new_test_section_due_date" />
//                 <label class="label" for="new_test_section_due_date">Due (optional)</label>
//               </div>
//             </div>
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-clock2"></i>
//                 <input type="text" class="timepicker" id="new_test_section_due_time" />
//                 <label class="label" for="new_test_section_due_time">Time</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s12">
//               <p>
//                 <label>
//                   <input type="checkbox" class="filled-in" />
//                   <span>Timed</span>
//                 </label>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div class="modal-footer modal-footer-width">
//           <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//           <a href="#" class="link-btn waves-effect waves-teal btn-flat">Save</a>
//         </div>
//       </div>
//     </div>
//   </fieldset>
// </form>
// </div>

/* <!-- Modal structure assign Simulated SAT --> */
// <div id="modal_assign_simulated_sat" class="modal modal-custom modal-calendar">
// <form action="#">
//   <fieldset>
//     <div class="card-modal card">
//       <div class="card-panel card-panel-title" style="background-color: #ec3330; color: #fff;">
//         <div class="card-panel-row row">
//           <div class="col">
//             <h2>
//               <span class="heading-holder">
//                 <i class="icon-circles"></i>
//                 <span class="heading-block"> New Scored SAT Test</span>
//               </span>
//             </h2>
//           </div>
//           <div class="col right-align">
//             <a href="#!" class="panel-link close modal-close"><i class="icon-close-thin"></i></a>
//           </div>
//         </div>
//       </div>
//       <div class="card-content">
//         <div class="card-body">
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="input-field">
//                 <select id="new_test_version">
//                   <option>SAT Practice Test #1</option>
//                   <option>SAT Practice Test #2</option>
//                   <option>SAT Practice Test #3</option>
//                 </select>
//                 <label class="label" for="new_test_version">Version</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-calendar"></i>
//                 <input type="text"  class="datepicker" id="new_test_assign_date" />
//                 <label class="label" for="new_test_assign_date">Assign For</label>
//               </div>
//             </div>
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-clock2"></i>
//                 <input type="text" class="timepicker" id="new_test_assign_time" />
//                 <label class="label" for="new_test_assign_time">Time</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-calendar"></i>
//                 <input type="text"  class="datepicker" id="new_test_due_date" />
//                 <label class="label" for="new_test_due_date">Due (optional)</label>
//               </div>
//             </div>
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-clock2"></i>
//                 <input type="text" class="timepicker" id="new_test_due_time" />
//                 <label class="label" for="new_test_due_time">Time</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s12">
//               <span class="card-subtitle">Sections:</span>
//               <div class="check-holder">
//                 <div class="row mb-0">
//                   <div class="col s6">
//                     <p>
//                       <label>
//                         <input type="checkbox" class="filled-in" />
//                         <span>Reading</span>
//                       </label>
//                     </p>
//                     <p>
//                       <label>
//                         <input type="checkbox" class="filled-in" />
//                         <span>Math (no calc)</span>
//                       </label>
//                     </p>
//                   </div>
//                   <div class="col s6">
//                     <p>
//                       <label>
//                         <input type="checkbox" class="filled-in" />
//                         <span>Writing</span>
//                       </label>
//                     </p>
//                     <p>
//                       <label>
//                         <input type="checkbox" class="filled-in" />
//                         <span>Math (calculator)</span>
//                       </label>
//                     </p>
//                   </div>
//                 </div>
//                 <span class="card-note">Note: scaled test scores may require combinations of sections</span>
//               </div>
//               <p>
//                 <label>
//                   <input type="checkbox" class="filled-in" />
//                   <span>Allow Student to Enter Answers</span>
//                 </label>
//               </p>
//               <p>
//                 <label>
//                   <input type="checkbox" class="filled-in" />
//                   <span>Include Score in Improvement Metrics</span>
//                 </label>
//               </p>
//               <p>
//                 <label>
//                   <input type="checkbox" class="filled-in" />
//                   <span>Timed</span>
//                 </label>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div class="modal-footer modal-footer-width">
//           <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//           <a href="#" class="link-btn waves-effect waves-teal btn-flat">Save</a>
//         </div>
//       </div>
//     </div>
//   </fieldset>
// </form>
// </div>

  /* <!-- Modal structure assign Target Test --> */
  // <div id="modal_assign_target_test" class="modal modal-custom modal-calendar">
  //   <form action="#">
  //     <fieldset>
  //       <div class="card-modal card">
  //         <div class="card-panel card-panel-title" style="background-color: #ec3330; color: #fff;">
  //           <div class="card-panel-row row">
  //             <div class="col">
  //               <h2>
  //                 <span class="heading-holder">
  //                   <i class="icon-cup"></i>
  //                   <span class="heading-block"> Set Target Test Date</span>
  //                 </span>
  //               </h2>
  //             </div>
  //             <div class="col right-align">
  //               <a href="#!" class="panel-link close modal-close"><i class="icon-close-thin"></i></a>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="card-content">
  //           <div class="card-body">
  //             <div class="modal-row row">
  //               <div class="col s12">
  //                 <div class="input-field">
  //                   <select id="new_target_test_date">
  //                     <option>October SAT (10/4/2018)</option>
  //                     <option>October SAT (10/4/2018)</option>
  //                     <option>October SAT (10/4/2018)</option>
  //                   </select>
  //                   <label class="label" for="new_target_test_date">Test Date</label>
  //                 </div>
  //                 {/* <!-- <div class="datepicker-field input-field"> */}
  //                   <i class="icon-calendar"></i>
  //                   <input type="text"  class="datepicker" id="new_test_due_date" />
  //                   <label class="label" for="new_test_due_date">Due (optional)</label>
  //                 </div> -->
  //               </div>
  //             </div>
  //             <div class="modal-row row">
  //               <div class="col s12">
  //                 <span class="note">Note:</span>
  //                 <p>If the student plans to take the SAT multiple times, you may schedule multiple “Target Test Dates.” Test score and improvement metrics will be based on the student’s score on the ﬁnal target test date.</p>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="modal-footer modal-footer-width">
  //             <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
  //             <a href="#" class="link-btn waves-effect waves-teal btn-flat">Set Target Test Date</a>
  //           </div>
  //         </div>
  //       </div>
  //     </fieldset>
  //   </form>
  // </div>

/* <!-- Modal structure Edit / Delete Session --> */
// <div id="modal_edit_delete_section" class="modal modal-custom modal-calendar">
// <form action="#" class="custom-form">
//   <fieldset>
//     <div class="card-modal card">
//       <div class="card-panel card-panel-title" style="background-color: #14b04b; color: #fff;">
//         <div class="card-panel-row row">
//           <div class="col">
//             <h2>
//               <span class="heading-holder">
//                 <i class="icon-clock2"></i>
//                 <span class="heading-block"> Session 6 of 12</span>
//               </span>
//             </h2>
//           </div>
//           <div class="col right-align">
//             <a href="#!" class="panel-link close modal-close"><i class="icon-close-thin"></i></a>
//           </div>
//         </div>
//       </div>
//       <div class="card-content">
//         <div class="card-body">
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="datepicker-field input-field">
//                 <i class="icon-calendar"></i>
//                 <input type="text"  class="datepicker" id="date_new_session_edit" />
//                 <label class="label" for="date_new_session_edit">Date</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-clock2"></i>
//                 <input type="text" class="timepicker" id="start_time_new_section_edit" />
//                 <label class="label" for="start_time_new_section_edit">Start Time</label>
//               </div>
//             </div>
//             <div class="col s6">
//               <div class="datepicker-field input-field">
//                 <i class="icon-clock2"></i>
//                 <input type="text" class="timepicker" value="6/1/18" id="end_time_new_section_edit" />
//                 <label class="label" for="end_time_new_section_edit">End Time</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="input-field input-field-textarea">
//                 <textarea id="description_session_edit" class="textarea-scroll" cols="40" rows="7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod soluta excepturi perferendis, ipsa officia maiores accusamus doloribus porro tempore veniam libero voluptatum sunt repellat facere at suscipit repudiandae accusantium quo.
//                 </textarea>
//                 <label class="label" for="description_session_edit">Session Notes:</label>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal-footer modal-footer-width">
//           <a href="#!" class="left waves-effect waves-teal btn-flat pink-text text-darken-1">Delete</a>
//           <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//           <a href="#" class="link-btn waves-effect waves-teal btn-flat">Add Session</a>
//         </div>
//       </div>
//     </div>
//   </fieldset>
// </form>
// </div>

/* <!-- Modal structure Apply a Course Template --> */
// <div id="modal_apply_course_template" class="modal modal-custom modal-calendar modal-course_template">
// <form action="#">
//   <fieldset>
//     <div class="card-modal card">
//       <div class="card-panel card-panel-title" style="background-color: #661f77; color: #fff;">
//         <div class="card-panel-row row">
//           <div class="col">
//             <h2>
//               <span class="heading-holder">
//                 <i class="icon-module"></i>
//                 <span class="heading-block"> Apply a Course Template</span>
//               </span>
//             </h2>
//           </div>
//           <div class="col right-align">
//             <a href="#!" class="panel-link close modal-close"><i class="icon-close-thin"></i></a>
//           </div>
//         </div>
//       </div>
//       <div class="card-content">
//         <div class="card-body">
//           {/* <!-- To make the STEP active, class .STEP-ACTIVE should be added to the <LI>element. --> */}
//           {/* <!-- To make the STEP completed, class .STEP-COMPLETED should be added to the <LI>element. --> */}
//           <ol class="steps-list">
//             {/* <!-- step 01 --> */}
//             <li class="step-01 step-completed">
//               <div class="modal-row row">
//                 <div class="col s12">
//                   <span class="step-title"><span class="title-holder">Choose a Template</span> <a href="#" class="link-edit completed-visible"><i class="icon-pencil2"></i></a></span>
//                 </div>
//               </div>
//               <div class="step-holder active-visible">
//                 <div class="modal-row row">
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <select id="template_source">
//                         <option>Built-In Templates</option>
//                         <option>Option</option>
//                         <option>Option</option>
//                       </select>
//                       <label class="label" for="template_source">Template Source</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <select id="template">
//                         <option>Source 01</option>
//                         <option>Source 02</option>
//                         <option>Source 03</option>
//                       </select>
//                       <label class="label" for="template">Template</label>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="modal-row row">
//                   <div class="col s12 l6">
//                     <div class="card-block">
//                       <div class="list-block">
//                         <span class="card-subtitle">Description:</span>
//                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
//                       </div>
//                       <div class="list-block">
//                         <span class="card-subtitle">Instructions:</span>
//                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
//                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="col s12 l6">
//                     <div class="row mb-0">
//                       <div class="col s4">
//                         <ul class="points-list list-one-col badge-circle-78">
//                           <li class="style-purple-dark">
//                             <span class="badge-circle">24</span>
//                             <span class="point-text">Sessions</span>
//                           </li>
//                           <li class="style-pink">
//                             <span class="badge-circle">62 <span class="badge-text">hrs</span></span>
//                             <span class="point-text">Estimated Total Course Work</span>
//                           </li>
//                         </ul>
//                       </div>
//                       <div class="col s8">
//                         <div class="chart-block chart-block-170">
//                           <div class="js-donut-chart" data-stroke-width="50" data-source='./inc/score-data-multiline.json'></div>
//                           <div class="chart-text">
//                             <span class="value">120</span>
//                             <span class="description">Lessons</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="btn-holder">
//                   <a href="#" class="btn-large waves-effect waves-light bg-blue">Continue</a>
//                   <a href="#" class="waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//                 </div>
//               </div>
//             </li>
//             {/* <!-- step 02 --> */}
//             <li class="step-02 step-completed">
//               <div class="modal-row row">
//                 <div class="col s12">
//                   <span class="step-title"><span class="title-holder">Set Course Options</span> <a href="#" class="link-edit completed-visible"><i class="icon-pencil2"></i></a></span>
//                 </div>
//               </div>
//               <div class="step-holder active-visible">
//                 <div class="modal-row row">
//                   <div class="col s12">
//                     <div class="list-block">
//                       <p>Complete this form to initialize a course template. Once the template has been applied, you can make changes to the student's schedule at any time using the course planner.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="card-block">
//                   <div class="modal-row row">
//                     <div class="col s12 m7">
//                       <div class="modal-row row">
//                         <div class="col m7 l8">
//                           <div class="row">
//                             <div class="col s12 l10">
//                               <div class="datepicker-field input-field">
//                                 <i class="icon-calendar"></i>
//                                 <input type="text"  class="datepicker" id="first_session_date" />
//                                 <label class="label" for="first_session_date">First Session Date</label>
//                               </div>
//                             </div>
//                           </div>
//                           <div class="row">
//                             <div class="col s12 l10">
//                               <div class="datepicker-field input-field">
//                                 <i class="icon-clock2"></i>
//                                 <input type="text" class="timepicker" id="default_session_time" />
//                                 <label class="label" for="default_session_time">Default Session Time</label>
//                               </div>
//                             </div>
//                           </div>
//                           <div class="row">
//                             <div class="col s11 l10">
//                               <div class="input-field">
//                                 <select id="default_session_duration">
//                                   <option>Built-In Templates</option>
//                                   <option>Option</option>
//                                   <option>Option</option>
//                                 </select>
//                                 <label class="label" for="default_session_duration">Default Session Duration</label>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col m5 l4">
//                           <p>Session Days</p>
//                           <div class="checkboxes-block">
//                             <p>
//                               <label>
//                                 <input type="checkbox" class="filled-in" />
//                                 <span>Sunday</span>
//                               </label>
//                             </p>
//                             <p>
//                               <label>
//                                 <input type="checkbox" class="filled-in" />
//                                 <span>Monday</span>
//                               </label>
//                             </p>
//                             <p>
//                               <label>
//                                 <input type="checkbox" class="filled-in" />
//                                 <span>Tuesday</span>
//                               </label>
//                             </p>
//                             <p>
//                               <label>
//                                 <input type="checkbox" class="filled-in" />
//                                 <span>Wednesday</span>
//                               </label>
//                             </p>
//                             <p>
//                               <label>
//                                 <input type="checkbox" class="filled-in" />
//                                 <span>Thursday</span>
//                               </label>
//                             </p>
//                             <p>
//                               <label>
//                                 <input type="checkbox" class="filled-in" />
//                                 <span>Friday</span>
//                               </label>
//                             </p>
//                             <p>
//                               <label>
//                                 <input type="checkbox" class="filled-in" />
//                                 <span>Saturday</span>
//                               </label>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="col s12 m5">
//                       <p>
//                         <label>
//                           <input type="checkbox" class="filled-in" />
//                           <span>Set Due Dates</span>
//                         </label>
//                       </p>
//                       <div class="list-block">
//                         <p>Due dates are required for additional options including student and parent reminders and “on time” percentage tracking.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="btn-holder">
//                   <a href="#" class="btn-large waves-effect waves-light bg-blue">Continue</a>
//                   <a href="#" class="waves-effect waves-teal btn-flat pink-text text-darken-1">Back</a>
//                 </div>
//               </div>
//             </li>
//             {/* <!-- step 03 --> */}
//             <li class="step-03 step-active">
//               <div class="modal-row row">
//                 <div class="col s12">
//                   <span class="step-title"><span class="title-holder">Adjust Session Schedule</span> <a href="#" class="link-edit completed-visible"><i class="icon-pencil2"></i></a></span>
//                 </div>
//               </div>
//               <div class="step-holder active-visible">
//                 <div class="card-block">
//                   <div class="modal-row row">
//                     <div class="col s12 m6">
//                       <div class="list-block">
//                         <p>You can adjust the session dates on the calendar below. Hold down the "ctrl" button on your keyboard ("command" for Mac) and click on calendar days to add or remove sessions. The total number of session days must remain the same as the number of sessions in the template you selected.</p>
//                       </div>
//                       <ul class="points-list list-one-col badge-circle-98">
//                         <li class="style-green-dark">
//                           <span class="badge-circle"><span>24 </span> <span class="of">of 24</span></span>
//                           <span class="point-text">Sessions <br>scheduled</span>
//                         </li>
//                       </ul>
//                     </div>
//                     <div class="col s12 m6">
//                       <div class="inline-datepicker-holder">
//                         <input type="hidden" class="inline-datepicker" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="btn-holder">
//                   <a href="#" class="btn-large waves-effect waves-light bg-blue">Continue</a>
//                   <a href="#" class="waves-effect waves-teal btn-flat pink-text text-darken-1">Back</a>
//                 </div>
//               </div>
//             </li>
//             {/* <!-- step 04 --> */}
//             <li class="step-04">
//               <div class="modal-row row">
//                 <div class="col s12">
//                   <span class="step-title"><span class="title-holder">Schedule Tests</span> <a href="#" class="link-edit completed-visible"><i class="icon-pencil2"></i></a></span>
//                 </div>
//               </div>
//               <div class="step-holder active-visible">
//                 <div class="card-block">
//                   <div class="modal-row row">
//                     <div class="col s12 m6">
//                       <div class="list-block">
//                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos-trud exerci tation ullamcorper suscipit lobortis nisl.</p>
//                       </div>
//                       <ul class="points-list list-one-col badge-circle-98">
//                         <li class="style-pink">
//                           <span class="badge-circle"><span>3</span></span>
//                           <span class="point-text">practice tests <br>scheduled</span>
//                         </li>
//                       </ul>
//                       <div class="row">
//                         <div class="col s11 l10">
//                           <div class="input-field">
//                             <select id="target_test_date">
//                               <option>October 2018 SAT (10/7/2018)</option>
//                               <option>Option</option>
//                               <option>Option</option>
//                             </select>
//                             <label class="label" for="target_test_date">Target Test Date</label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="col s12 m6">
//                       <div class="datepicker-container">
//                         <div class="inline-datepicker-holder">
//                           <input type="hidden" class="inline-datepicker" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="btn-holder">
//                   <a href="#" class="btn-large waves-effect waves-light bg-blue">Apply Template</a>
//                   <a href="#" class="waves-effect waves-teal btn-flat pink-text text-darken-1">Back</a>
//                 </div>
//               </div>
//             </li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   </fieldset>
// </form>
// </div>

/* <!-- Modal structure Save course as template --> */
// <div id="modal_save_course_template" class="modal modal-custom modal-calendar modal-save_template">
// <form action="#">
//   <fieldset>
//     <div class="card-modal card">
//       <div class="card-panel card-panel-title" style="background-color: #661f77; color: #fff;">
//         <div class="card-panel-row row">
//           <div class="col">
//             <h2>
//               <span class="heading-holder">
//                 <i class="icon-module"></i>
//                 <span class="heading-block"> Save Course as Template</span>
//               </span>
//             </h2>
//           </div>
//           <div class="col right-align">
//             <a href="#!" class="panel-link close modal-close"><i class="icon-close-thin"></i></a>
//           </div>
//         </div>
//       </div>
//       <div class="card-content">
//         <div class="card-body">
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="input-field">
//                 <input type="text" value="The Name of Some Template" readonly />
//                 <label class="label">Course Template Name*</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="input-field input-field-textarea">
//                 <textarea class="materialize-textarea" cols="40" rows="4" readonly>An optional description of the template so that the user can remember what’s included in the course template.</textarea>
//                 <label class="label">Description</label>
//               </div>
//             </div>
//           </div>
//           <div class="modal-row row">
//             <div class="col s12">
//               <div class="input-field input-field-textarea">
//                 <textarea class="materialize-textarea" cols="40" rows="4" readonly>Optional instructions so the user can remember how to use the template.</textarea>
//                 <label class="label">Instructions</label>
//               </div>
//             </div>
//           </div>
//           <div class="d-flex modal-row row align-items-center justify-center">
//             <div class="col">
//               <ul class="points-list list-two-cols badge-circle-78">
//                 <li class="style-purple-dark">
//                   <span class="badge-circle">24</span>
//                   <span class="point-text">Sessions</span>
//                 </li>
//                 <li class="style-pink">
//                   <span class="badge-circle">62 <span class="badge-text">hrs</span></span>
//                   <span class="point-text">Estimated Total Course Work</span>
//                 </li>
//               </ul>
//             </div>
//             <div class="col">
//               <div class="chart-block chart-block-140">
//                 <div class="js-donut-chart" data-stroke-width="42" data-source='./inc/score-data-multiline.json'></div>
//                 <div class="chart-text" style="color: #3d8946;">
//                   <span class="value">120</span>
//                   <span class="description">Lessons</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal-footer modal-footer-width">
//           <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//           <a href="#" class="link-btn waves-effect waves-teal btn-flat">Save Template</a>
//         </div>
//       </div>
//     </div>
//   </fieldset>
// </form>
// </div>