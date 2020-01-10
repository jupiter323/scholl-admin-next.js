import {
  SET_ASSIGN_LESSONS_MODAL_OPEN,
  SET_ASSIGN_WORKSHEETS_MODAL_OPEN,
  SET_CALENDAR_ROWS,
  CREATE_CLASS,
  UPDATE_CLASS_START_DATE,
  UPDATE_CLASS_END_DATE,
  UPDATE_EXCLUDE_FROM_STATISTICS,
  FETCH_CLASSES,
  SET_CLASSES,
} from './constants';


export function setAssignLessonsModalOpen(value) {
  return {
    type: SET_ASSIGN_LESSONS_MODAL_OPEN,
    value,
  };
}

export function setAssignWorksheetModalOpen(value) {
  return {
    type: SET_ASSIGN_WORKSHEETS_MODAL_OPEN,
    value,
  };
}

export function setCalendarRows(rows) {
  return {
    type: SET_CALENDAR_ROWS,
    rows,
  };
}

export function createClass(newClass) {
  return {
    type: CREATE_CLASS,
    newClass,
  };
}

export function updateClassStartDate(date) {
  return {
    type: UPDATE_CLASS_START_DATE,
    date,
  };
}

export function updateClassEndDate(date) {
  return {
    type: UPDATE_CLASS_END_DATE,
    date,
  };
}

export function updateClassExcludeFromStatistics(value) {
  return {
    type: UPDATE_EXCLUDE_FROM_STATISTICS,
    value,
  };
}

export function fetchClasses() {
  return {
    type: FETCH_CLASSES,
  };
}

export function setClasses(classes) {
  return {
    type: SET_CLASSES,
    classes,
  };
}
