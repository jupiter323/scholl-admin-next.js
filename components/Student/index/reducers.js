import { fromJS } from 'immutable';
import {
  SET_STUDENTS,
  SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_CALENDAR_ROWS,
} from './constants';

const initialState = fromJS({
  students: [],
  assignLessonsModalOpen:false,
  assignWorkSheetsModalOpen:false,
  calendarRows: [],
});

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return state.set('students', action.students);
    case SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN:
      return state.set('assignLessonsModalOpen',action.value);
    case SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN:
        return state.set('assignWorkSheetsModalOpen',action.value);
    case SET_STUDENTS_CALENDAR_CALENDAR_ROWS:
        return state.set('calendarRows',action.rows);
    default:
      return state;
  }
}

export default studentReducer;
