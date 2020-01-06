import {
  SET_ASSIGN_LESSONS_MODAL_OPEN,
  SET_ASSIGN_WORKSHEETS_MODAL_OPEN,
  SET_CALENDAR_ROWS,
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
