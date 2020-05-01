import { fromJS } from "immutable";
import moment from 'moment';
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
  SET_OPEN_ACTIVE_PAGE,
  RESET_STUDENT_LESSONS_SUCCESS,
  UNASSIGN_STUDENT_LESSON_SUCCESS,
  RESCHEDULE_STUDENT_LESSONS_SUCCESS,
  FETCH_SUBJECTS_SUCCESS,
  SET_OPEN_ANSWERSHEET_STATUS,
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
  unassignedLessonList: [],
  isLoading: false,
  error: null,
  unitFilterOptions: [],
  activeStudentToken: "",
  checkedLessons: [],
  activeLesson: null,
  openAnswerSheet: false,
  subjects: {},
  activeShowPage: "",
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
      return state.set("unassignedLessonList", action.payload);

    case FETCH_STUDENT_LESSSON_LIST_SUCCESS:
      return state.set("studentLessonList", action.payload);
    case SET_UNIT_FILTER_OPTIONS:
      return state.set("unitFilterOptions", action.options);
    case SET_ACTIVE_STUDENT_TOKEN:
      return state.set("activeStudentToken", action.token);

    case CHECKED_LESSON:
      return state.set(
        "lessonList",
        state.get("lessonList").map((lesson) => {
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
        action.mappedLessons.map((lesson) => ({
          ...lesson,
          selected: true,
        })),
      );

    case UNCHECK_ALL_LESSONS:
      // Sets each "selected" lesson property to false
      return state.set(
        "lessonList",
        state.get('lessonList').map((lesson) => ({
          ...lesson,
          selected: false,
        })),
      );

    case ADD_ALL_LESSONS:
      // Adds each lesson to the list of "checkedLessons"
      return state.set(
        "checkedLessons",
        action.mappedLessons.map((lesson) => {
          if (lesson.lesson_id) {
            return lesson.lesson_id;
          }
          return lesson.id;
        }),
      );

    case REMOVE_ALL_LESSONS:
      // Resets all the "checkedLessons" to a blank array
      return state.set("checkedLessons", []);

    case ADD_CHECKED_LESSON:
      return state.set("checkedLessons", [...state.get("checkedLessons"), action.lessonId]);

    case REMOVE_CHECKED_LESSON:
      return state.set(
        "checkedLessons",
        state.get("checkedLessons").filter((lesson) => lesson !== action.lessonId),
      );

    case MERGE_STUDENT_LESSON_LISTS:
      const getStudentLessonList = (studentLessonList) => studentLessonList.map(lesson => {
        if (lesson.problems && lesson.problems.length > 0) {
          lesson = { ...lesson, type: 'drill', selected: false };
        } else if (lesson.sections) {
          lesson = { ...lesson, type: 'module', selected: false };
        } else if (lesson.problems && lesson.problems.length <= 0) {
          lesson = { ...lesson, type: 'reading', selected: false };
        }
        return lesson;
      });
      return state.set("lessonList", [...getStudentLessonList(state.get('studentLessonList')), ...state.get("unassignedLessonList")]);

    case SET_ACTIVE_LESSON:
      return state.set('activeLesson', action.activeLesson);

    case SET_OPEN_ANSWERSHEET_STATUS:
      return state.set('openAnswerSheet', action.value);

    case SET_OPEN_ACTIVE_PAGE:
      return state.set('activeShowPage', action.value);

    case RESCHEDULE_STUDENT_LESSONS_SUCCESS:
      return state.set(
        "lessonList",
        state.get("lessonList").map((lesson) => {
          const {payload: {due_date, assignment_date}} = action;
          let updatedLesson = {};
          action.payload.student_lesson_ids.forEach((setLessons) => {
            if (setLessons === lesson.id) {
              return (updatedLesson = {
                ...lesson,
                assignment_date,
                due_date,
              });
            }
            if (!updatedLesson.id) return updatedLesson = lesson;
          });
          return updatedLesson;
        }),
      );

    case UNASSIGN_STUDENT_LESSON_SUCCESS:
      return state.set('lessonList', state.get('lessonList').filter(lesson => !action.payload.includes(lesson.id)));

    case RESET_STUDENT_LESSONS_SUCCESS:
      return state.set('lessonList', state.get('lessonList').map(lesson => {
        let updatedLesson = {};
        action.payload.forEach((sentLessonId) => {
          if (sentLessonId === lesson.id) {
            let status = 'ASSIGNED';
            if (moment().isAfter(lesson.due_date)) status = 'OVERDUE';
            if (moment().isBefore(lesson.assigned_date)) status = 'SCHEDULED';
            return (updatedLesson = {
              ...lesson,
              status,
              challenge_completed_at: null,
              practice_completed_at: null,
              completed_at: null,
              scoring: {},
            });
          }
          if (!updatedLesson.id) return updatedLesson = lesson;
        });
        return updatedLesson;
      }));

    case FETCH_SUBJECTS_SUCCESS:
      return state.set('subjects', action.payload);

    default:
      return state;
  }
}

export default studentReducer;
