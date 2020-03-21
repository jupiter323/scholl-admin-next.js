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
  SET_STUDENT_SECTIONS,
  SET_ACTIVE_STUDENT_TEST_ID,
  FETCH_LESSON_LIST,
  FETCH_LESSON_LIST_SUCCESS,
  FETCH_LESSON_LIST_FAIL,
  CHECKED_LESSON,
  CHECK_ALL_LESSONS,
  SET_UNIT_FILTER_OPTIONS,
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
  sections: [],
  activeStudentTestId: "",
  lessonList: [],
  isLoading: false,
  error: null,
  unitFilterOptions:[],
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
    case SET_ACTIVE_STUDENT_TEST_ID:
      return state.set("activeStudentTestId", action.studentTestId);
    case FETCH_LESSON_LIST:
      return state.set("isLoading", true);

    case FETCH_LESSON_LIST_SUCCESS:
      return state.set("lessonList", action.payload);
    case SET_UNIT_FILTER_OPTIONS:
      return state.set('unitFilterOptions',action.options)
    // return {
    //   ...state,
    //   isLoading: false,
    //   lessonList: action.payload,
    // };

    // case FETCH_LESSON_LIST_FAIL:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload,
    //   };
    case CHECKED_LESSON:
      return state.set(
        "lessonList",
        state.get('lessonList').map((lesson, index) => {
          if (index !== action.index) {
            return lesson;
          }
          return {
            ...lesson,
            selected: !lesson.selected
          };
        })
      );
    

    case CHECK_ALL_LESSONS:
      return state.set(
        "lessonList",
        state.get('lessonList').map((lesson) => ({
          ...lesson,
          selected: !action.checked,
        }))

      )
    
    default:
      return state;
  }
}

export default studentReducer;
