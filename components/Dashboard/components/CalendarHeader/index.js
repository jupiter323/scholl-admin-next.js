import React from 'react';
// import PropTypes from 'prop-types';

class CalendarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: true,
    };
  }

  render() {
    return (
      <div className="calendar-header" style={{ zIndex: '9' }}>
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
    );
  }
}

export default CalendarHeader;
