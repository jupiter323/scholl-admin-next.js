import moment from 'moment';

export const getCalendarCellClassName = (hasEvents, inActiveColumn) => {
  let classNames = 'cal-cell1 cal-cell ';
  if (!hasEvents) {
    classNames += 'day-no-events ';
  } else {
    classNames += 'day-has-events ';
  }
  if (inActiveColumn) {
    classNames += 'active-cell';
  }
  return classNames;
}

export const getCalendarDayClassName = (date, inMonth, activeDateKey) => {
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

export const calendarMap = {
  '0': 'December',
  '1': 'January',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
  '13': 'January',
};

export const currentMonthIndex = Number(moment().format('M')) - 1;
export const currentYear = new Date().getFullYear().toString().substr(-2);

export const getDayDate = (date) => moment(date).format('ddd, MMM Do');
export const getFirstDay = (activeMonthIndex) => new Date(2019, activeMonthIndex).getDay();
export const getDaysInActiveMonth = (activeMonthIndex) => 32 - new Date(2019, activeMonthIndex, 32).getDate();
export const getDaysInPreviousMonth = (activeMonthIndex) => 32 - new Date(2019, activeMonthIndex - 1, 32).getDate();
export const getNextMonthAsCurrentMonth = (activeMonthIndex) => activeMonthIndex > 9 ? activeMonthIndex + 1 : `0${activeMonthIndex + 1}`;