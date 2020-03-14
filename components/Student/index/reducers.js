import { fromJS } from "immutable";
import {
  SET_STUDENTS,
  SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_CALENDAR_ROWS,
  SET_IS_VISIBLE_TOP_BAR,
  SET_ACTIVE_TEST_SCORES,
  SET_STUDENT_COMPLETED_TESTS,
  SET_STUDENT_OVERDUE_TESTS,
  SET_STUDENT_ASSIGNED_TESTS,
  SET_STUDENT_TESTS,
  SET_STUDENT_SECTIONS
} from "./constants";

const initialState = fromJS({
  students: [],
  assignLessonsModalOpen: false,
  assignWorkSheetsModalOpen: false,
  calendarRows: [],
  isVisibleTopBar: true,
  activeTestScores: [],
  overdueStudentTests: [],
  assignedStudentTests: [],
  completedStudentTests: [],
  studentTests: [],
  sections: []
});

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return state.set("students", action.students);
    case SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN:
      return state.set("assignLessonsModalOpen", action.value);
    case SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN:
      return state.set("assignWorkSheetsModalOpen", action.value);
    case SET_STUDENTS_CALENDAR_CALENDAR_ROWS:
      return state.set("calendarRows", action.rows);
    case SET_IS_VISIBLE_TOP_BAR:
      return state.set("isVisibleTopBar", action.value);
    case SET_ACTIVE_TEST_SCORES:
      return state.set("activeTestScores", action.scores);
    case SET_STUDENT_COMPLETED_TESTS:
      return state.set("completedStudentTests", action.tests);
    case SET_STUDENT_OVERDUE_TESTS:
      return state.set("overdueStudentTests", action.tests);
    case SET_STUDENT_ASSIGNED_TESTS:
      return state.set("assignedStudentTests", action.tests);
    case SET_STUDENT_TESTS:
      return state.set("studentTests", action.tests);
    case SET_STUDENT_SECTIONS:
      return state.set("sections", action.sections);
    default:
      return state;
  }
}

export default studentReducer;
