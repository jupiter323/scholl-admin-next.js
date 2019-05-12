/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const sampleConfig = [
  {
    dayDate: 'Mon, Jan 17',
    calDate: '17',
    activeDateKey: 'row-4-column-1',
    inMonth: true,
  },
  {
    dayDate: 'Tue, Jan 18',
    calDate: '18',
    activeDateKey: 'row-4-column-2',
    inMonth: true,
  },
  {
    dayDate: 'Wed, Jan 19',
    calDate: '19',
    activeDateKey: 'row-4-column-3',
    inMonth: true,
  },
  {
    dayDate: 'Thu, Jan 20',
    calDate: '20',
    activeDateKey: 'row-4-column-4',
    inMonth: true,
  },
  {
    dayDate: 'Fri, Jan 21',
    calDate: '21',
    activeDateKey: 'row-4-column-5',
    inMonth: true,
  },
  {
    dayDate: 'Sat, Jan 22',
    calDate: '22',
    activeDateKey: 'row-4-column-6',
    inMonth: true,
  },
  {
    dayDate: 'Sun, Jan 23',
    calDate: '23',
    activeDateKey: 'row-4-column-7',
    inMonth: true,
  },
];

class FourthRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      rowDates: sampleConfig,
    };
  }

  mapRowDates = () => this.state.rowDates.map(rowDate => {
    const { activeDate, addDropdownOpen, deleteDropdownOpen, onSetActiveDate, onToggleAddDropdown, onToggleDeleteDropdown } = this.props;
    const { dayDate, calDate, activeDateKey, inMonth } = rowDate;
    if (!inMonth) {
      return (
        <td className="cal-cell1 cal-cell cal-day-outmonth">
          <div className="cal-month-day">
            <span className="day-date">{dayDate}</span>
            <span className="cal-date">{calDate}</span>
          </div>
        </td>
      )
    }
    return (
      <td key={activeDateKey} className="cal-cell1 cal-cell day-no-events" onClick={() => onSetActiveDate(activeDateKey)}>
        <div className="cal-month-day cal-day-inmonth cal-day-weekend">
          <span className="day-date">{dayDate}</span>
          <span className="cal-date">{calDate}</span>
          {/* <!-- day open collapsible --> */}
          <ul className="day-collapsible collapsible">
            <li className={activeDate === activeDateKey ? 'collapsible-holder active' : 'collapsible-holder'} style={{ transform: 'none' }}>
              <div className="collapsible-header">
                <span className="fake-close"><span className="icon-close-thin"></span></span>
                {/* <!-- events list short --> */}
              </div>
              <div className="collapsible-body">
                {/* <!-- events list full --> */}
                <div className="day-footer">
                  <ul className="links-list">
                    <li>
                      <a
                        href="#"
                        data-target='dropdown_day_240119_add'
                        onClick={onToggleAddDropdown}
                        className="link-add dropdown-trigger waves-effect waves-teal"
                      >
                        Add
                      </a>
                      <ul
                        id='dropdown_day_240119_add'
                        className='dropdown-content'
                        style={{ display: addDropdownOpen ? 'block' : 'none', opacity: addDropdownOpen ? '100' : '0' }}
                      >
                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-target='dropdown_day_240119_delete'
                        onClick={onToggleDeleteDropdown}
                        className="link-delete dropdown-trigger waves-effect waves-teal"
                      >
                        Delete
                      </a>
                      <ul
                        id='dropdown_day_240119_delete'
                        className='dropdown-content'
                        style={{ display: deleteDropdownOpen ? 'block' : 'none', opacity: deleteDropdownOpen ? '100' : '0' }}
                      >
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
    )
  })

  render() {
    return (
      <tr className="cal-row-fluid">
        {this.mapRowDates()}
      </tr>

    );
  }
}

FourthRow.propTypes = {
  activeDate: PropTypes.string,
  onSetActiveDate: PropTypes.func.isRequired,
  addDropdownOpen: PropTypes.bool.isRequired,
  deleteDropdownOpen: PropTypes.bool.isRequired,
  onToggleAddDropdown: PropTypes.func.isRequired,
  onToggleDeleteDropdown: PropTypes.func.isRequired,
}

export default FourthRow;
