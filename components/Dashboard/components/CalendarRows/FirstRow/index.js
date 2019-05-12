import React from 'react';

class FirstRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
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
    );
  }
}

export default FirstRow;
