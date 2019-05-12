import React from 'react';

class SixthRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: true,
    };
  }

  render() {
    return (
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
    );
  }
}

export default SixthRow;
