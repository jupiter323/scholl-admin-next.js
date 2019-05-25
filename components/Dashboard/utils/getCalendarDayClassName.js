import moment from 'moment';

const getCalendarDayClassName = (date, inMonth, activeDateKey) => {
  let className = 'cal-month-day ';
  if (activeDateKey.includes('column-7') || activeDateKey.includes('column-1')) {
    className += 'cal-day-weekend ';
  }
  if (date === moment().format('MM/DD/YY')) {
    className += 'cal-day-today ';
  }
  if (inMonth === true) {
    className += 'cal-day-inmonth ';
  } else if (inMonth === false) {
    className += 'cal-day-outmonth ';
  }
  return className;
}

export default getCalendarDayClassName;
