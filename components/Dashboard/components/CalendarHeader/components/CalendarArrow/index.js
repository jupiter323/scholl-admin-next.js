/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const CalendarArrow = ({ calendarMap, activeMonth, onClick, direction }) => (
  <div onClick={onClick} className={direction === "next" ? "slick-arrow slick-next" : "slick-arrow slick-prev"}>
    {direction === "next" ? calendarMap[activeMonth + 2] : calendarMap[activeMonth]}
  </div>
)

CalendarArrow.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string.isRequired,
  activeMonth: PropTypes.number.isRequired,
  calendarMap: PropTypes.object.isRequired,
};

export default CalendarArrow;