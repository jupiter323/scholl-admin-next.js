import React from 'react';

class ThirdRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
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
    );
  }
}

export default ThirdRow;
