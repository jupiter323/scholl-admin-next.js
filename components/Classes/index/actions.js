import {
  SET_ASSIGN_LESSONS_MODAL_OPEN,
  SET_ASSIGN_WORKSHEETS_MODAL_OPEN,
  SET_CALENDAR_ROWS,
  CREATE_CLASS,
  FETCH_CLASSES,
  SET_CLASSES,
  UPDATE_CLASS_NAME,
  UPDATE_CLASS_START_DATE,
  UPDATE_CLASS_END_DATE,
  UPDATE_CLASS_DURATION,
  UPDATE_EXCLUDE_FROM_STATISTICS,
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

export function updateClassName(value) {
  return {
    type: UPDATE_CLASS_NAME,
    value,
  };
}

export function updateClassStartDate(value) {
  return {
    type: UPDATE_CLASS_START_DATE,
    value,
  };
}

export function updateClassEndDate(value) {
  return {
    type: UPDATE_CLASS_END_DATE,
    value,
  };
}

export function updateClassDuration(value) {
  return {
    type: UPDATE_CLASS_DURATION,
    value,
  };
}

export function updateClassExcludeFromStatistics(value) {
  return {
    type: UPDATE_EXCLUDE_FROM_STATISTICS,
    value,
  };
}
