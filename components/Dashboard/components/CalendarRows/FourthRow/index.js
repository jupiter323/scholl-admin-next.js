import React from 'react';

class FourthRow extends React.Component {
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

    );
  }
}

export default FourthRow;
