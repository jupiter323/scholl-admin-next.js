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
  FETCH_STUDENT_LESSSON_LIST_SUCCESS,
  FETCH_STUDENT_LESSONL_LIST_FAIL,
  CHECKED_LESSON,
  CHECK_ALL_LESSONS,
  UNCHECK_ALL_LESSONS,
  ADD_CHECKED_LESSON,
  REMOVE_CHECKED_LESSON,
  SET_UNIT_FILTER_OPTIONS,
  SET_ACTIVE_STUDENT_TOKEN,
  MERGE_STUDENT_LESSON_LISTS,
  ADD_ALL_LESSONS,
  REMOVE_ALL_LESSONS,
  SET_ACTIVE_LESSON,
  SET_OPEN_ANSWERSHEET_STATUS
} from "./constants";

const initialState = fromJS({
  students: [],
  assignLessonsModalOpen: false,
  assignWorkSheetsModalOpen: false,
  calendarRows: [],
  isVisibleTopBar: true,
  activeTestScores: null,
  overdueStudentTests: [],
  assignedStudentTests: [],
  completedStudentTests: [],
  studentTests: [],
  sections: [],
  activeStudentTestId: "",
  lessonList: [],
  studentLessonList: [],
  isLoading: false,
  error: null,
  unitFilterOptions: [],
  activeStudentToken: "",
  checkedLessons: [],
  activeLesson:null,
  openAnswerSheet:false,
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

    case FETCH_STUDENT_LESSSON_LIST_SUCCESS:
      return state.set("studentLessonList", action.payload);
    case SET_UNIT_FILTER_OPTIONS:
      return state.set("unitFilterOptions", action.options);
    case SET_ACTIVE_STUDENT_TOKEN:
      return state.set("activeStudentToken", action.token);

    case CHECKED_LESSON:
      return state.set(
        "lessonList",
        state.get("lessonList").map(lesson => {
          if (lesson.id !== action.id) {
            return lesson;
          }
          return {
            ...lesson,
            selected: !lesson.selected,
          };
        }),
      );

    case CHECK_ALL_LESSONS:
      // Sets each "selected" lesson property to true
      return state.set(
        "lessonList",
        action.mappedLessons.map(lesson => ({
          ...lesson,
          selected: !action.checked,
        })),
      );

    case UNCHECK_ALL_LESSONS:
      // Sets each "selected" lesson property to false
      return state.set(
        "lessonList",
        action.mappedLessons.map(lesson => ({
          ...lesson,
          selected: false,
        })),
      );

    case ADD_ALL_LESSONS:
      // Adds each lesson to the list of "checkedLessons"
      return state.set(
        "checkedLessons",
        action.mappedLessons.map(lesson => {
          if (lesson.lesson_id) {
            return lesson.lesson_id;
          }
          return lesson.id;
        }),
      );

    case REMOVE_ALL_LESSONS:
      // Resets all the "checkedLessons" to a blank array
      return state.set('checkedLessons', []);

    case ADD_CHECKED_LESSON:
      return state.set("checkedLessons", [...state.get("checkedLessons"), action.lessonId]);

    case REMOVE_CHECKED_LESSON:
      return state.set(
        "checkedLessons",
        state.get("checkedLessons").filter(lesson => lesson !== action.lessonId),
      );

    case MERGE_STUDENT_LESSON_LISTS:
      return state.set('lessonList', [...action.payload, ...state.get('lessonList')]);
    case SET_ACTIVE_LESSON:
      return state.set('activeLesson',action.activeLesson)
      case SET_OPEN_ANSWERSHEET_STATUS:
        return state.set('openAnswerSheet',action.value)
    default:
      return state;
  }
}

export default studentReducer;
