import { fromJS } from 'immutable';
import {
  SET_STUDENTS,
  SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_CALENDAR_ROWS,
  SET_IS_VISIBLE_TOP_BAR,
} from './constants';

const initialState = fromJS({
  students: [],
  assignLessonsModalOpen: false,
  assignWorkSheetsModalOpen: false,
  calendarRows: [],
  isVisibleTopBar: true,
});

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return state.set('students', action.students);
    case SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN:
      return state.set('assignLessonsModalOpen', action.value);
    case SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN:
      return state.set('assignWorkSheetsModalOpen', action.value);
    case SET_STUDENTS_CALENDAR_CALENDAR_ROWS:
      return state.set('calendarRows', action.rows);
    case SET_IS_VISIBLE_TOP_BAR:
      return state.set('isVisibleTopBar', action.value);

    default:
      return state;
  }
}

export default studentReducer;
