import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { calendarMap, currentMonthIndex } from '../../utils/dateAndCalendarUtils';

// eslint-disable-next-line react/prefer-stateless-function
class CalendarHeader extends React.Component {
  render() {
    const { activeMonth, onSetActiveMonth } = this.props;
    return (
      <div className="calendar-header" style={{ zIndex: '9' }}>
        <div className="calendar-view-switcher">
          <ul className="switcher">
            <li className="active col" data-view="view-month"><a href="#">Month View</a></li>
            <li className="col" data-view="view-day"><a href="#">Day View</a></li>
          </ul>
        </div>
        <div className="nav-slick-calendar" style={{ opacity: '1' }}>
          <Slider
          {
            ...{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: currentMonthIndex,
              onInit: () => onSetActiveMonth(currentMonthIndex),
              afterChange: onSetActiveMonth,
              nextArrow: <div>{calendarMap[activeMonth + 2]}</div>,
              prevArrow: <div>{calendarMap[activeMonth]}</div>,
            }
          }>
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
          </Slider>
        </div>
      </div>
    );
  }
}

CalendarHeader.propTypes = {
  activeMonth: PropTypes.number.isRequired,
  onSetActiveMonth: PropTypes.func.isRequired,
}

export default CalendarHeader;
