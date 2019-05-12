import React from 'react';

class SecondRow extends React.Component {
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
    )
  }
}

export default SecondRow;