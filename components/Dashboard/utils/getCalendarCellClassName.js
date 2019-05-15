const getCalendarCellClassName = (hasEvents, inActiveColumn) => {
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

export default getCalendarCellClassName;
