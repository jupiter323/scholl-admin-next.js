import { fromJS } from 'immutable';
import moment from 'moment';
import {
  SET_STUDENTS,
  SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_CALENDAR_ROWS,
  SET_IS_VISIBLE_TOP_BAR,
  SET_ACTIVE_TEST_SCORES,
  SET_ESSAY_SCORE,
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
  SELECT_ALL_LESSONS,
  UNSELECT_ALL_LESSONS,
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
  SET_TESTS,
  SET_EXCUSE_STUDENT_LATENESS,
  SET_ACTIVE_STUDENT,
  SET_STUDENT_TEST_SECTION_PROBLEMS,
  REMOVE_TEST,
  ASSIGN_NEW_TEST,
  ADD_NEW_TEST_TO_STUDENT_TESTS,
  UPDATE_STUDENT_TEST_ANSWER,
  UPDATE_TEST_STATUS_SUCCESS,
  REMOVE_TEST_FROM_PREV_LIST,
  ADD_TEST_TO_COMPLETED,
  REMOVE_TEST_FROM_LIST,
  UPDATE_FLAG_STATUS_SUCCESS,
  FETCH_STUDENT_TESTS_SUCCESSFUL,
  SEND_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE,
  SET_LESSON_PROBLEMS,
  SET_LESSON_ANSWER,
  UPDATE_LESSON_STATUS_SUCCESS,
  COMPLETE_SECTION_SUCCESS,
  UPDATE_TEST_FLAG_COUNT,
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
  sections: [],
  activeStudentTestId: '',
  lessonList: [],
  studentLessonList: [],
  unassignedLessonList: [],
  isLoading: false,
  error: null,
  unitFilterOptions: [],
  activeStudentToken: '',
  checkedLessons: [],
  activeLesson: null,
  openAnswerSheet: false,
  subjects: {},
  activeShowPage: '',
  tests: [],
  activeStudent: null,
  testSectionProblems: [],
  studentTests: [],
  studentTestsFetchedStatus: false,
  errorMessages: {
    testFlagMessage: "",
    answerTestProblemMessage: "",
    fetchSectionsMessage: "",
    fetchProblemsMessage: "",
    fetchScoresMsg: "",
    updateTestStatusMsg: "",
    fetchingStudentTestsMessage: "",
    updateTestSectionsMessage: "",
    updateTestDueDateMessage: "",
    updateTestAssignmentDateMessage: "",
    completeSectionMsg: "",
  },
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
    case SET_ACTIVE_TEST_SCORES:
      return state.set('activeTestScores', action.scores);
    case SET_ESSAY_SCORE:
      return state.set('activeTestScores', { ...state.get('activeTestScores'), essay: action.score });
    case SET_STUDENT_COMPLETED_TESTS:
      return state.set('completedStudentTests', action.tests);
    case SET_STUDENT_OVERDUE_TESTS:
      return state.set('overdueStudentTests', action.tests);
    case SET_STUDENT_ASSIGNED_TESTS:
      return state.set('assignedStudentTests', action.tests);
    case SET_STUDENT_TESTS:
      return state.set('studentTests', action.tests);
    case SET_STUDENT_SECTIONS:
      return state.set('sections', action.sections);
    case SET_ACTIVE_STUDENT_TEST_ID:
      return state.set('activeStudentTestId', action.studentTestId);
    case FETCH_LESSON_LIST:
      return state.set('isLoading', true);

    case FETCH_LESSON_LIST_SUCCESS:
      return state.set('unassignedLessonList', action.payload);

    case FETCH_STUDENT_LESSSON_LIST_SUCCESS:
      return state.set('studentLessonList', action.payload);
    case SET_UNIT_FILTER_OPTIONS:
      return state.set('unitFilterOptions', action.options);
    case SET_ACTIVE_STUDENT_TOKEN:
      return state.set('activeStudentToken', action.token);

    case CHECKED_LESSON:
      return state.set(
        'lessonList',
        state.get('lessonList').map(lesson => {
          if (lesson.id !== action.id) {
            return lesson;
          }
          return {
            ...lesson,
            selected: !lesson.selected,
          };
        }),
      );

    case SELECT_ALL_LESSONS:
      return state.set(
        'lessonList',
        state.get('lessonList').map(lesson => {
          if (action.mappedLessons.includes(lesson.id)) {
            return { ...lesson, selected: true };
          }
          return lesson;
        }),
      );

    case UNSELECT_ALL_LESSONS:
      return state.set(
        'lessonList',
        state.get('lessonList').map(lesson => ({
          ...lesson,
          selected: false,
        })),
      );

    case ADD_ALL_LESSONS:
      // Adds each lesson to the list of "checkedLessons"
      return state.set(
        'checkedLessons',
        action.mappedLessons.map(lesson => {
          if (lesson.lesson_id) {
            return lesson.lesson_id;
          }
          return lesson.id;
        }),
      );

    case REMOVE_ALL_LESSONS:
      return state.set('checkedLessons', []);

    case ADD_CHECKED_LESSON:
      return state.set('checkedLessons', [...state.get('checkedLessons'), action.lessonId]);

    case REMOVE_CHECKED_LESSON:
      return state.set(
        'checkedLessons',
        state.get('checkedLessons').filter(lesson => lesson !== action.lessonId),
      );

    case MERGE_STUDENT_LESSON_LISTS:
      return state.set('lessonList', [
        ...state.get('studentLessonList'),
        ...state.get('unassignedLessonList'),
      ]);

    case SET_ACTIVE_LESSON:
      Object.assign(action.activeLesson, { challengeProblems: [], practiceProblems: [] });
      if (action.activeLesson.type.label === "Drill") {
        action.activeLesson.drillProblems = action.activeLesson.problems;
        delete action.activeLesson.problems;
      } else {
        action.activeLesson.drillProblems = [];
      }
      return state.set('activeLesson', action.activeLesson);

    case SET_OPEN_ANSWERSHEET_STATUS:
      return state.set('openAnswerSheet', action.value);

    case SET_OPEN_ACTIVE_PAGE:
      return state.set('activeShowPage', action.value);

    case RESCHEDULE_STUDENT_LESSONS_SUCCESS:
      return state.set(
        'lessonList',
        state.get('lessonList').map(lesson => {
          const { payload: { due_date, assignment_date } } = action;
          let updatedLesson = {};
          action.payload.student_lesson_ids.forEach(setLessons => {
            if (setLessons === lesson.id) {
              return (updatedLesson = {
                ...lesson,
                assignment_date,
                due_date,
              });
            }
            if (!updatedLesson.id) return (updatedLesson = lesson);
          });
          return updatedLesson;
        }),
      );

    case UNASSIGN_STUDENT_LESSON_SUCCESS:
      return state.set(
        'lessonList',
        state.get('lessonList').filter(lesson => !action.payload.includes(lesson.id)),
      );

    case RESET_STUDENT_LESSONS_SUCCESS:
      return state.set(
        'lessonList',
        state.get('lessonList').map(lesson => {
          let updatedLesson = {};
          action.payload.forEach(sentLessonId => {
            if (sentLessonId === lesson.id) {
              let status = 'ASSIGNED';
              if (moment().isAfter(lesson.due_date)) status = 'OVERDUE';
              return (updatedLesson = {
                ...lesson,
                status,
                challenge_completed_at: null,
                practice_completed_at: null,
                completed_at: null,
                scoring: {},
              });
            }
            if (!updatedLesson.id) return (updatedLesson = lesson);
          });
          return updatedLesson;
        }),
      );

    case FETCH_SUBJECTS_SUCCESS:
      return state.set('subjects', action.payload);

    case SET_TESTS:
      return state.set('tests', action.tests);
    case SET_EXCUSE_STUDENT_LATENESS:
      return state.set(
        'lessonList',
        state.get('lessonList').map(lesson => {
          if (action.payload.student_lesson_id === lesson.id) { return { ...lesson, lateness_excused: action.payload.was_excused }; }
          return lesson;
        }),
      );

    case SET_ACTIVE_STUDENT:
      return state.set('activeStudent', action.student);

    case SET_STUDENT_TEST_SECTION_PROBLEMS:
      return state.set('testSectionProblems', action.problems);

    case REMOVE_TEST:
      return state.set(
        action.testType,
        state.get(action.testType).filter(test => test.student_test_id !== action.studentTestId),
      );

    case REMOVE_TEST_FROM_LIST:
      return state.set(
        'studentTests',
        state.get('studentTests').filter(test => test.student_test_id !== action.studentTestId),
      );

    case ASSIGN_NEW_TEST:
      return state.set('assignedStudentTests', [
        ...state.get('assignedStudentTests'),
        action.newTest,
      ]);

    case ADD_NEW_TEST_TO_STUDENT_TESTS:
      return state.set('studentTests', [...state.get('studentTests'), action.newTest]);

    case UPDATE_STUDENT_TEST_ANSWER:
      return state.set(
        'sections',
        state.get('sections').map(section => {
          if (section.test_section_id === action.sectionId) {
            section.problems.problems.map(problem => {
              if (problem.id === action.payload.test_problem_id) {
                problem.student_answer = action.payload.answer;
                return problem;
              }
            });
          }
          return section;
        }),
      );

    case UPDATE_TEST_STATUS_SUCCESS:
      return state.set(
        'studentTests',
        state.get('studentTests').map(test => {
          if (test.student_test_id === action.payload.student_test_id) {
            return { ...test, status: action.payload.status };
          }
          return test;
        }),
      );

    case REMOVE_TEST_FROM_PREV_LIST:
      return state.set(
        action.testList,
        state
          .get(action.testList)
          .filter(test => test.student_test_id !== action.payload.student_test_id),
      );

    case ADD_TEST_TO_COMPLETED:
      // Grabs the test info from original test list and adds a completion date & status
      return state.set('completedStudentTests', [...state.get('completedStudentTests'), { ...state.get(action.testList).filter(test => test.student_test_id === action.payload.student_test_id)[0], completion_date: Date.now(), status: action.payload.status }]);

    case FETCH_STUDENT_TESTS_SUCCESSFUL:
      return state.set('studentTestsFetchedStatus', action.status);

    case UPDATE_FLAG_STATUS_SUCCESS:
      const newSections = state.get('sections').map(section => {
        if (section.test_section_id === action.sectionId) {
          const updatedProblems = section.problems.problems.map(problem => {
            if (problem.id === action.question.id) {
              return action.question;
            }
            return problem;
          });
          const updatedSection = { ...section, problems: { ...section.problems, problems: updatedProblems } };
          return updatedSection;
        }
        return section;
      });
      return state.set('sections', newSections);

    case SEND_ERROR_MESSAGE:
      const updatedErrorMessages = { ...state.get('errorMessages'), [action.propertyName]: action.message };
      return state.set('errorMessages', updatedErrorMessages);

    case RESET_ERROR_MESSAGE:
      const resetErrorMessages = { ...state.get('errorMessages'), [action.propertyName]: "" };
      return state.set('errorMessages', resetErrorMessages);

    case SET_LESSON_PROBLEMS: {
      const activeLesson = state.get('activeLesson');
      activeLesson[`${action.sectionType}Problems`] = action.problems;
      return state.set('activeLesson', { ...activeLesson });
    }
    case SET_LESSON_ANSWER: {
      const activeLesson = state.get('activeLesson');
      const newQuestions = activeLesson[action.problemType].map(question => {
        if (question.problem.id === action.problem_id) {
          question[action.propertyName] = action.answer;
          return question;
        }
        return question;
      });
      activeLesson[action.problemType] = newQuestions;
      return state.set('activeLesson', { ...activeLesson });
    }
    case UPDATE_LESSON_STATUS_SUCCESS: {
      const activeLesson = state.get('activeLesson');
      activeLesson.status = action.status;
      return state.set('activeLesson', { ...activeLesson });
    }
    case COMPLETE_SECTION_SUCCESS: {
      const activeLesson = state.get('activeLesson');
      activeLesson.sections[0].status = 'COMPLETED';
      return state.set('activeLesson', { ...activeLesson });
    }
    case UPDATE_TEST_FLAG_COUNT:
      const studentTestList = state.get('studentTests');
      const matchingTest = studentTestList.filter(test => test.student_test_id === action.student_test_id)[0];
      let newList = [];
      let listName = "";
      const updateTestCardList = (listName) => {
        const cardList = state.get(listName);
        return cardList.map(test => {
          if (test.student_test_id === action.student_test_id) {
            (action.flagCount === 0 ?
              test.problem_flag_count = action.flagCount
              : test.problem_flag_count += action.flagDiff);
          }
          return test;
        });
      };
      if (matchingTest) {
        if (matchingTest.status === "COMPLETED") {
          newList = updateTestCardList("completedStudentTests");
          listName = "completedStudentTests";
        } else if (matchingTest.status !== "COMPLETED" && matchingTest.due_status === "OVERDUE") {
          newList = updateTestCardList("overdueStudentTests");
          listName = "overdueStudentTests";
        } else {
          newList = updateTestCardList("assignedStudentTests");
          listName = "assignedStudentTests";
        }
      }
      return state.set(listName, [...newList]);


    default:
      return state;
  }
}

export default studentReducer;
