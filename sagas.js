import { take, call, put, all, takeEvery, debounce, delay } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  DELETE_STUDENT,
  UPDATE_STUDENT_ADDRESS,
  UPDATE_STUDENT_CITY,
  UPDATE_STUDENT_EMAIL,
  UPDATE_STUDENT_FIRSTNAME,
  UPDATE_STUDENT_LASTNAME,
  UPDATE_STUDENT_PHONE,
  UPDATE_STUDENT_STATE,
  UPDATE_STUDENT_ZIP,
  SEARCH_STUDENTS,
  GET_TESTS,
  FETCH_STUDENT_TEST_SECTIONS,
  FETCH_LESSON_LIST,
  FETCH_LESSON_LIST_SUCCESS,
  FETCH_LESSON_LIST_FAIL,
  FETCH_UNITS,
  FETCH_STUDENT_LESSON_LIST,
  FETCH_STUDENT_LESSON_LIST_FAIL,
  FETCH_STUDENT_LESSSON_LIST_SUCCESS,
  ASSIGN_STUDENT_LESSON,
  ASSIGN_STUDENT_LESSON_FAIL,
  RESET_STUDENT_LESSONS,
  RESET_STUDENT_LESSONS_SUCCESS,
  RESET_STUDENT_LESSONS_FAIL,
  UNASSIGN_STUDENT_LESSON,
  UNASSIGN_STUDENT_LESSON_SUCCESS,
  UNASSIGN_STUDENT_LESSON_FAIL,
  RESCHEDULE_STUDENT_LESSONS,
  RESCHEDULE_STUDENT_LESSONS_SUCCESS,
  RESCHEDULE_STUDENT_LESSONS_FAIL,
  MERGE_STUDENT_LESSON_LISTS,
  UPDATE_STUDENT_ACTIVATION,
  UPDATE_STUDENT_ACTIVATION_SUCCESS,
  UPDATE_STUDENT_ACTIVATION_FAIL,
  FETCH_SUBJECTS,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_STUDENT_LESSON_LIST_DEBOUNCE,
  EXCUSE_STUDENT_LATENESS,
  FILTER_LESSONS,
  FLAG_STUDENT_LESSON_PROBLEM,
  SET_EXCUSE_STUDENT_LATENESS,
  ADD_LESSON_ANSWER,
  ADD_LESSON_ANSWER_SUCCESS,
  DELETE_STUDENT_TEST,
  UPDATE_TEST_FLAG,
  REMOVE_TEST,
  ADD_STUDENT_ANSWER_TO_TEST,
  UPDATE_STUDENT_TEST_ANSWER,
  UPDATE_TEST_STATUS,
  UPDATE_TEST_STATUS_SUCCESS,
  ADD_TEST_TO_COMPLETED,
  REMOVE_TEST_FROM_PREV_LIST,
  REMOVE_TEST_FROM_LIST,
  SET_ACTIVE_TEST_SCORES,
  UPDATE_FLAG_STATUS,
  UPDATE_FLAG_STATUS_SUCCESS,
  SET_STUDENT_SECTIONS,
  ADD_FREE_RESPONSE_ANSWER_TO_TEST,
  GET_TEST_SCORES,
  FETCH_LESSON_SECTIONS,
  SET_LESSON_PROBLEMS,
  SET_LESSON_ANSWER,
  ADD_LESSON_ANSWER_DEBOUNCE,
  UPDATE_LESSON_STATUS,
  UPDATE_LESSON_STATUS_SUCCESS,
  COMPLETE_LESSON_SECTION,
  SUBMIT_LESSON_PROBLEMS,
  FETCH_LESSON_DETAILS,
  SET_ACTIVE_LESSON,
  COMPLETE_SECTION_SUCCESS,
  FLAG_STUDENT_LESSON_SUCCESS,
  MARK_ALL_LESSON_FLAGS_REVIEWED,
} from "./components/Student/index/constants";
import {
  CREATE_CLASS,
  FETCH_CLASSES,
  UPDATE_CLASS_NAME,
  UPDATE_CLASS_START_DATE,
  UPDATE_CLASS_END_DATE,
  UPDATE_CLASS_DURATION,
  UPDATE_EXCLUDE_FROM_STATISTICS,

} from "./components/Classes/index/constants";
import {
  FETCH_INSTRUCTORS,
  SEARCH_INSTRUCTORS,
  UPDATE_INSTRUCTOR_FIRSTNAME,
  CREATE_INSTRUCTOR,
  UPDATE_INSTRUCTOR_LASTNAME,
  UPDATE_INSTRUCTOR_EMAIL,
  UPDATE_INSTRUCTOR_STATE,
  UPDATE_INSTRUCTOR_CITY,
  UPDATE_INSTRUCTOR_ZIP,
  UPDATE_INSTRUCTOR_ADDRESS,
  UPDATE_INSTRUCTOR_PHONE,
} from "./components/Instructor/index/constants";
import {
  SET_CURRENT_USER,
  FETCH_CURRENT_USER,
} from './components/User/index/constants';

import {
  FETCH_ALL_LOCATIONS,
  SET_ALL_LOCATIONS,
} from './components/Location/index/constants';

import {
  setStudents,
  setStudentTests,
  setStudentCompletedTests,
  setStudentOverDueTests,
  setStudentAssignedTests,
  setStudentSections,
  setUnitFilterOptions,
  setFetchStudentTestsStatus,
  sendErrorMessage,
  resetErrorMessage,
  flagStudentLessonProblem,
} from "./components/Student/index/actions";
import { setInstructors } from "./components/Instructor/index/actions";
import { setClasses } from "./components/Classes/index/actions";


import { studentApi, classApi, instructorApi, lessonApi, userApi, locationsApi } from "./api";

const {
  fetchStudentsApi,
  searchStudentsApi,
  deleteStudentApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
  fetchTestsByStudentIdApi,
  fetchStudentTestSectionsApi,
  fetchLessonListApi,
  fetchUnitsApi,
  fetchStudentLessonListApi,
  assignLessonToStudentApi,
  resetStudentLessonsApi,
  updateStudentActivationApi,
  unAssignLessonFromStudentApi,
  rescheduleStudentLessonsApi,
  fetchSubjectsApi,
  excuseStudentLessonLatenessApi,
  filterLessonListApi,
  addStudentLessonProblemFlagApi,
  addStudentLessonProblemAnswerApi,
  rescoreStudentLessonApi,
  deleteStudentTestApi,
  fetchStudentTestSectionProblemsApi,
  updateStudentTestQuestionFlagStatusApi,
  addStudentAnswerToTestApi,
  updateStudentTestStatusApi,
  fetchStudentTestScoreApi,
  addStudentTestQuestionFlagApi,
  fetchStudentLessonSectionApi,
  fetchStudentLessonApi,
  updateStudentLessonStatusApi,
  completeStudentLessonSectionApi,
} = studentApi;
const {
  fetchClassesApi,
  createClassApi,
  updateClassNameApi,
  updateClassStartDateApi,
  updateClassEndDateApi,
  updateClassDurationApi,
  updateClassExcludeFromStatisticsApi,
} = classApi;
const {
  fetchInstructorsApi,
  searchInstructorsApi,
  updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  updateInstructorPhoneApi,
  createNewInstructorApi,
} = instructorApi;
const { fetchCurrentUserApi } = userApi;

const { fetchAllLocationsApi } = locationsApi;
// Error Message Constants
const fetchSectionsMessage = 'fetchSectionsMessage';
const fetchProblemsMessage = 'fetchProblemsMessage';
const testFlagMessage = 'testFlagMessage';
const answerTestProblemMessage = 'answerTestProblemMessage';
const fetchingStudentTestsMessage = 'fetchingStudentTestsMessage';
/** ******************************************    STUDENTS    ******************************************* */
export function* watchForFetchStudents() {
  while (true) {
    yield take(FETCH_STUDENTS);
    yield call(fetchStudents);
  }
}

export function* fetchStudents() {
  try {
    const students = yield call(fetchStudentsApi);
    if (Array.isArray(students) || students instanceof Array) {
      yield put(setStudents(students));
    }
  } catch (err) {
    console.warn("Error occurred in the fetchStudents saga", err);
  }
}

export function* watchForFetchUnitFilterOptions() {
  while (true) {
    yield take(FETCH_UNITS);
    yield call(fetchUnits);
  }
}

export function* fetchUnits() {
  try {
    const { formattedUnits } = yield call(fetchUnitsApi);
    if (Array.isArray(formattedUnits) || formattedUnits instanceof Array) {
      yield put(setUnitFilterOptions(formattedUnits));
    }
  } catch (err) {
    console.warn("Error occured in the fetchUnits saga", err);
  }
}

export function* watchForFetchStudentTestSections() {
  while (true) {
    const payload = yield take(FETCH_STUDENT_TEST_SECTIONS);
    const { postBody: { id, student_test_id } } = payload;
    yield call(fetchStudentTestSections, id, student_test_id);
  }
}

export function* fetchStudentTestSections(id, studentTestId) {
  try {
    yield put({
      type: SET_STUDENT_SECTIONS,
      sections: [],
    });
    const testSections = yield call(fetchStudentTestSectionsApi, id, studentTestId);
    if (testSections && testSections.message) {
      return yield put(sendErrorMessage(fetchSectionsMessage, `Error: Something went wrong retrieving sections and problems for this test. You may still view and score essays or try again later.`));
    }
    let count = 0;
    while (count < testSections.length) {
      const problems = yield call(fetchStudentTestSectionProblemsApi, id, studentTestId, testSections[count].id);
      if (problems && problems.message) {
        yield put(sendErrorMessage(fetchProblemsMessage, `Error: Couldn't retrieve one or more sections with problems for this test. Those sections will not be shown. Please try again later.`));
      }
      testSections[count].problems = problems.data;
      count++;
    }
    yield put(resetErrorMessage(fetchSectionsMessage));
    yield put(setStudentSections(testSections));
  } catch (err) {
    sendErrorMessage(fetchSectionsMessage, `Something went wrong retrieving sections for this test.`);
    console.warn("Error occurred in the fetchStudentTestSections saga", err);
  }
}

export function* watchForFetchStudentTests() {
  while (true) {
    const { user } = yield take(GET_TESTS);
    yield call(fetchStudentTests, user);
  }
}

export function* fetchStudentTests(user) {
  try {
    const { data: formattedStudentTests } = yield call(fetchTestsByStudentIdApi, user.id);
    if (!formattedStudentTests) {
      return yield put(sendErrorMessage(fetchingStudentTestsMessage, `Something went wrong when fetching for student tests: ${formattedStudentTests.message}`));
    }
    yield put(resetErrorMessage(fetchingStudentTestsMessage));
    yield put(setStudentTests(formattedStudentTests));
    const sortedTests = {
      overdues: [],
      assigneds: [],
      completes: [],
    };
    // sort test into assisend, incompletes
    //* * using for development purposes pushing :STARTED to assigneds */
    yield formattedStudentTests.forEach(test => {
      if (test.status === "ASSIGNED" || test.status === 'STARTED') {
        if (test.due_status === 'OVERDUE') {
          sortedTests.overdues.push(test);
        } else {
          sortedTests.assigneds.push(test);
        }
      } else if (test.status === 'COMPLETED') {
        sortedTests.completes.push(test);
      }
    });
    // Dispatch Action
    yield put(setStudentCompletedTests(sortedTests.completes));
    yield put(setStudentOverDueTests(sortedTests.overdues));
    yield put(setStudentAssignedTests(sortedTests.assigneds));
    yield put(setFetchStudentTestsStatus(true));
  } catch (err) {
    yield put(sendErrorMessage(fetchingStudentTestsMessage, `Something went wrong when fetching for student tests: ${err}`));
    console.warn("Error occurred in the fetchStudentTests saga", err);
  }
}

export function* watchForSearchStudents() {
  while (true) {
    const { filters } = yield take(SEARCH_STUDENTS);
    yield call(searchStudents, filters);
  }
}

export function* searchStudents(filters) {
  try {
    const students = yield call(searchStudentsApi, filters);
    if (students instanceof Array) {
      yield put(setStudents(students));
    }
  } catch (err) {
    console.warn("Error occurred in searchStudents saga", err);
  }
}

export function* watchForDeleteStudent() {
  while (true) {
    try {
      const { id } = yield take(DELETE_STUDENT);
      const response = yield call(deleteStudentApi, id);
      if (response && response.message) {
        return console.warn("Something went wrong with deleting a student.");
      }
      yield call(fetchStudents);
    } catch (err) {
      console.warn("Error occured in watchForDeleteStudent", err);
    }
  }
}

export function* watchForUpdateStudentFirstName() {
  while (true) {
    try {
      const { firstName } = yield take(UPDATE_STUDENT_FIRSTNAME);
      const response = yield call(updateStudentFirstNameApi, firstName);
      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentFirstNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentFirstName saga", err);
    }
  }
}

export function* watchForUpdateStudentLastName() {
  while (true) {
    try {
      const { lastName } = yield take(UPDATE_STUDENT_LASTNAME);
      const response = yield call(updateStudentLastNameApi, lastName);
      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentLastNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentLastName saga", err);
    }
  }
}

export function* watchForUpdateStudentAddress() {
  while (true) {
    try {
      const { address } = yield take(UPDATE_STUDENT_ADDRESS);
      const response = yield call(updateStudentAddressApi, address);
      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentAddressApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentAddress saga", err);
    }
  }
}

export function* watchForUpdateStudentCity() {
  while (true) {
    try {
      const { city } = yield take(UPDATE_STUDENT_CITY);
      const response = yield call(updateStudentCityApi, city);
      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentCityApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentCity saga", err);
    }
  }
}

export function* watchForUpdateStudentEmail() {
  while (true) {
    try {
      const { email } = yield take(UPDATE_STUDENT_EMAIL);
      const response = yield call(updateStudentEmailApi, email);
      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentEmailApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentEmail saga", err);
    }
  }
}

export function* watchForUpdateStudentPhone() {
  while (true) {
    try {
      const { phone } = yield take(UPDATE_STUDENT_PHONE);
      const response = yield call(updateStudentPhoneApi, phone);
      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentPhoneApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentPhone saga", err);
    }
  }
}

export function* watchForUpdateStudentState() {
  while (true) {
    try {
      const { state } = yield take(UPDATE_STUDENT_STATE);
      const response = yield call(updateStudentStateApi, state);
      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentStateApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentState saga", err);
    }
  }
}

export function* watchForUpdateStudentZip() {
  while (true) {
    try {
      const { zip } = yield take(UPDATE_STUDENT_ZIP);
      const response = yield call(updateStudentZipApi, zip);
      if (response && response.message) {
        return console.warn("Something went wrong in updateStudentZipApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentZip saga", err);
    }
  }
}

/** ******************************************    INSTRUCTORS    ******************************************* */
export function* watchForUpdateInstructorFirstName() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_FIRSTNAME);
      const response = yield call(updateInstructorFirstNameApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorFirstNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorFirstName saga", err);
    }
  }
}

export function* watchForUpdateInstructorLastName() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_LASTNAME);
      const response = yield call(updateInstructorLastNameApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorLastNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorLastName saga", err);
    }
  }
}

export function* watchForUpdateInstructorEmail() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_EMAIL);
      const response = yield call(updateInstructorEmailApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorEmailApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorEmail saga", err);
    }
  }
}

export function* watchForUpdateInstructorState() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_STATE);
      const response = yield call(updateInstructorStateApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorStateApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorState saga", err);
    }
  }
}

export function* watchForUpdateInstructorCity() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_CITY);
      const response = yield call(updateInstructorCityApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorCityApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorCity saga", err);
    }
  }
}

export function* watchForUpdateInstructorZip() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_ZIP);
      const response = yield call(updateInstructorZipApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorZipApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorZip saga", err);
    }
  }
}

export function* watchForUpdateInstructorAddress() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_ADDRESS);
      const response = yield call(updateInstructorAddressApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorAddressApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorAddress saga", err);
    }
  }
}

export function* watchForUpdateInstructorPhone() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_PHONE);
      const response = yield call(updateInstructorPhoneApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateInstructorPhoneApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorPhone saga", err);
    }
  }
}

export function* watchForCreateInstructor() {
  while (true) {
    try {
      const { instructor } = yield take(CREATE_INSTRUCTOR);
      const response = yield call(createNewInstructorApi, instructor);
      if (response && response.message) {
        return console.warn("Something went wrong in createNewInstructorApi.");
      }
      yield call(fetchInstructors);
    } catch (err) {
      console.warn("Error occured in watchForCreateInstructor saga", err);
    }
  }
}

export function* watchForFetchInstructors() {
  while (true) {
    yield take(FETCH_INSTRUCTORS);
    yield call(fetchInstructors);
  }
}

export function* fetchInstructors() {
  try {
    const { formattedInstructors } = yield call(fetchInstructorsApi);
    if (formattedInstructors instanceof Array) {
      yield put(setInstructors(formattedInstructors));
    }
  } catch (err) {
    console.warn("Error occurred in fetchInstructors saga", err);
  }
}

export function* watchForSearchInstructors() {
  while (true) {
    const { filters } = yield take(SEARCH_INSTRUCTORS);
    yield call(searchInstructors, filters);
  }
}

export function* searchInstructors(filters) {
  try {
    const instructors = yield call(searchInstructorsApi, filters);
    if (instructors instanceof Array) {
      yield put(setInstructors(instructors));
    }
  } catch (err) {
    console.warn("Error occurred in searchInstructors saga", err);
  }
}

/** ******************************************    CLASSES    ******************************************* */
export function* watchForCreateClass() {
  while (true) {
    const { newClass } = yield take(CREATE_CLASS);
    console.warn("saga yaaay!", newClass);
    yield call(createClass, newClass);
  }
}

export function* createClass(newClass) {
  try {
    const response = yield call(createClassApi, newClass);
    if (response.exception && response.exception.length) {
      console.warn("Error occurred in createClass saga", response);
    }
  } catch (err) {
    console.warn("Error occurred in createClass saga", err);
  }
}

export function* watchForFetchClasses() {
  while (true) {
    yield take(FETCH_CLASSES);
    yield call(fetchClasses);
  }
}

export function* fetchClasses() {
  try {
    const classes = yield call(fetchClassesApi);
    if (Array.isArray(classes) || classes instanceof Array) {
      yield put(setClasses(classes));
    }
  } catch (err) {
    console.warn("Error occurred in the fetchClasses saga", err);
  }
}

export function* watchForUpdateClassName() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_CLASS_NAME);
      const response = yield call(updateClassNameApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateClassNameApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassName saga", err);
    }
  }
}

export function* watchForUpdateClassStartDate() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_CLASS_START_DATE);
      const response = yield call(updateClassStartDateApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateClassStartDateApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassStartDate saga", err);
    }
  }
}
export function* watchForUpdateClassEndDate() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_CLASS_END_DATE);
      const response = yield call(updateClassEndDateApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateClassEndDateApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassEndDate saga", err);
    }
  }
}

export function* watchForUpdateClassDuration() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_CLASS_DURATION);
      const response = yield call(updateClassDurationApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateClassDurationApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassDuration saga", err);
    }
  }
}

export function* watchForUpdateClassExcludeFromStatistics() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_EXCLUDE_FROM_STATISTICS);
      const response = yield call(updateClassExcludeFromStatisticsApi, value);
      if (response && response.message) {
        return console.warn("Something went wrong in updateClassExcludeFromStatisticsApi.");
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateClassExcludeFromStatistics saga", err);
    }
  }
}

/** ******************************************    LESSONS    ******************************************* */
function* watchForFetchLesson() {
  yield takeEvery(FETCH_LESSON_LIST, handleFetchLesson);
}

function* handleFetchLesson() {
  try {
    const lessons = yield call(fetchLessonListApi);
    if (Array.isArray(lessons) || lessons instanceof Array) {
      yield put({
        type: FETCH_LESSON_LIST_SUCCESS,
        payload: lessons.map(lesson => ({
          ...lesson,
          selected: false,
          status: 'NOTASSIGNED',
        })),
      });
      yield put({
        type: MERGE_STUDENT_LESSON_LISTS,
      });
    }
  } catch (error) {
    console.warn("Error occurred in the handleFetchLesson saga", error);
    yield put({
      type: FETCH_LESSON_LIST_FAIL,
      payload: error,
    });
  }
}


function* watchForFetchStudentLesson() {
  yield takeEvery(FETCH_STUDENT_LESSON_LIST, handleFetchStudentLessonList);
}

function* watchForFetchStudentLessonDebounce() {
  yield debounce(1000, FETCH_STUDENT_LESSON_LIST_DEBOUNCE, handleFetchStudentLessonList);
}

function* handleFetchStudentLessonList(action) {
  try {
    const studentLessonList = yield call(fetchStudentLessonListApi, action.postBody.id, action.postBody.studentToken);
    yield put({
      type: FETCH_STUDENT_LESSSON_LIST_SUCCESS,
      payload: studentLessonList.map(lesson => ({ ...lesson, selected: false })),
    });
    yield put({
      type: MERGE_STUDENT_LESSON_LISTS,
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchStudentLesson saga", error);
    yield put({
      type: FETCH_STUDENT_LESSON_LIST_FAIL,
    });
  }
}

function* watchForAssignLesson() {
  yield takeEvery(ASSIGN_STUDENT_LESSON, handleAssignLesson);
}

function* handleAssignLesson(action) {
  try {
    yield call(assignLessonToStudentApi, action.lesson);
    yield put({ type: FETCH_STUDENT_LESSON_LIST_DEBOUNCE, postBody: { id: action.lesson.student_id } });
  } catch (error) {
    console.warn("Error occurred in the handleFetchLesson saga", error);
    yield put({
      type: ASSIGN_STUDENT_LESSON_FAIL,
      payload: error,
    });
  }
}

function* watchForResetLesson() {
  yield takeEvery(RESET_STUDENT_LESSONS, handleResetLessons);
}

function* handleResetLessons(action) {
  try {
    yield call(resetStudentLessonsApi, { student_lesson_ids: action.lessons });
    yield put({ type: RESET_STUDENT_LESSONS_SUCCESS, payload: action.lessons });
  } catch (error) {
    console.warn("Error occurred in the handleResetLessons saga", error);
    yield put({
      type: RESET_STUDENT_LESSONS_FAIL,
      payload: error,
    });
  }
}

function* watchForUpdateStudentActivation() {
  yield takeEvery(UPDATE_STUDENT_ACTIVATION, handleUpdateStudentActivation);
}

function* handleUpdateStudentActivation(action) {
  try {
    yield call(updateStudentActivationApi, action.studentInfo);
    yield put({ type: UPDATE_STUDENT_ACTIVATION_SUCCESS });
  } catch (error) {
    console.warn("Error occurred in the handleUpdateStudentActivation saga", error);
    yield put({
      type: UPDATE_STUDENT_ACTIVATION_FAIL,
      payload: error,
    });
  }
}

function* watchForUnAssignLesson() {
  yield takeEvery(UNASSIGN_STUDENT_LESSON, handleUnAssignLesson);
}

function* handleUnAssignLesson(action) {
  try {
    yield call(unAssignLessonFromStudentApi, { student_lesson_ids: action.lesson });
    yield put({ type: UNASSIGN_STUDENT_LESSON_SUCCESS, payload: action.lesson });
  } catch (error) {
    console.warn("Error occurred in the handleUnAssignLesson saga", error);
    yield put({
      type: UNASSIGN_STUDENT_LESSON_FAIL,
      payload: error,
    });
  }
}

function* watchForRescheduleStudentLessons() {
  yield takeEvery(RESCHEDULE_STUDENT_LESSONS, handleRescheduleStudentLessons);
}

function* handleRescheduleStudentLessons(action) {
  try {
    yield call(rescheduleStudentLessonsApi, action.studentLessonData);
    yield put({
      type: RESCHEDULE_STUDENT_LESSONS_SUCCESS,
      payload: action.studentLessonData,
    });
  } catch (error) {
    console.warn("Error occurred in the handleRescheduleStudentLessons saga", error);
    yield put({
      type: RESCHEDULE_STUDENT_LESSONS_FAIL,
      payload: error,
    });
  }
}

function* watchForFetchSubjects() {
  yield takeEvery(FETCH_SUBJECTS, handleFetchSubjects);
}

function* handleFetchSubjects() {
  try {
    const response = yield call(fetchSubjectsApi);
    const newSubjectObject = {};
    response.forEach(subject => {
      newSubjectObject[subject.id] = subject.name;
    });
    yield put({
      type: FETCH_SUBJECTS_SUCCESS,
      payload: newSubjectObject,
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchSubjects saga", error);
  }
}

export function* watchForFetchCurrentUser() {
  while (true) {
    yield take(FETCH_CURRENT_USER);
    yield call(handleFetchCurrentUser);
  }
}
function* handleFetchCurrentUser() {
  try {
    const response = yield call(fetchCurrentUserApi);
    if (response) {
      yield put({
        type: SET_CURRENT_USER,
        value: response,
      });
    }
  } catch (error) {
    console.warn("Error occurred in the handleFetchCurrentUser saga", error);
  }
}

function* watchForExcuseStudentLateness() {
  yield takeEvery(EXCUSE_STUDENT_LATENESS, handleExcuseStudentLateness);
}

function* handleExcuseStudentLateness(action) {
  try {
    yield call(excuseStudentLessonLatenessApi, action.lessons);
    yield put({
      type: SET_EXCUSE_STUDENT_LATENESS,
      payload: action.lessons,
    });
  } catch (error) {
    console.warn("Error occurred in the handleExcuseStudentLateness saga", error);
  }
}

function* watchForFilterLessons() {
  yield debounce(200, FILTER_LESSONS, handleFilterLessons);
}

function* handleFilterLessons(action) {
  try {
    const lessons = yield call(filterLessonListApi, action.filters);
    if (lessons && lessons instanceof Array) {
      yield put({
        type: FETCH_LESSON_LIST_SUCCESS,
        payload: lessons.map(lesson => ({
          ...lesson,
          selected: false,
          status: 'NOTASSIGNED',
        })),
      });
      yield put({
        type: MERGE_STUDENT_LESSON_LISTS,
      });
    }
  } catch (error) {
    console.warn("Error occurred in the handleFilterLessons saga", error);
  }
}

function* watchForFlagStudentLessonProblem() {
  yield takeEvery(FLAG_STUDENT_LESSON_PROBLEM, handleFlagStudentLessonProblem);
}

function* handleFlagStudentLessonProblem(action) {
  try {
    const response = yield call(addStudentLessonProblemFlagApi, action.postBody);
    if (response && !response.ok) {
      return response.json().then(res => console.warn("Error occurred in the handleFlagStudentLessonProblem saga", res.message));
    }
    if (!action.isFromAllFlags) {
      yield put({
        type: FLAG_STUDENT_LESSON_SUCCESS,
        status: action.postBody.flag_status,
        problemId: action.postBody.problem_id,
        studentLessonId: action.postBody.student_lesson_id,
      });
    }
  } catch (error) {
    console.warn("Error occurred in the handleFlagStudentLessonProblem saga", error);
  }
}


function* watchForFetchAllLocations() {
  const value = yield take(FETCH_ALL_LOCATIONS);
  yield call(handleFetchAllLocations, value.user_id);
}


function* handleFetchAllLocations(id) {
  try {
    const locations = yield call(fetchAllLocationsApi, id);
    yield put({
      type: SET_ALL_LOCATIONS,
      payload: locations,
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchAllLocations saga", error);
  }
}

function* watchForAnswerStudentLessonProblem() {
  yield takeEvery(ADD_LESSON_ANSWER, handleAnswerStudentLessonProblem);
}

function* watchForAnswerStudentLessonProblemDebounce() {
  yield debounce(500, ADD_LESSON_ANSWER_DEBOUNCE, handleAnswerStudentLessonProblem);
}

function* handleAnswerStudentLessonProblem(action) {
  try {
    const response = yield call(addStudentLessonProblemAnswerApi, action.postBody);
    if (response && !response.ok) {
      if (!response.ok) {
        response.json().then(res => console.warn("Error occurred in the handleAnswerStudentLessonProblem saga", res.message));
      }
    }
    let propertyName;
    let answer;
    if (action.format === "multiple") {
      propertyName = "answer_id";
      answer = action.postBody.answer_id;
    } else {
      propertyName = "answer_text";
      answer = action.postBody.answer_text;
    }
    yield put({
      type: SET_LESSON_ANSWER,
      problem_id: action.postBody.problem_id,
      answer,
      problemType: action.problemType,
      propertyName,
    });
  } catch (error) {
    console.warn("Error occurred in the handleAnswerStudentLessonProblem saga", error);
  }
}

function* watchForDeleteStudentTest() {
  yield takeEvery(DELETE_STUDENT_TEST, handleDeleteStudentTest);
}

function* handleDeleteStudentTest(action) {
  try {
    const payload = { student_test_id: action.studentTestId };
    const response = yield call(deleteStudentTestApi, payload);
    if (response && response.message) {
      return console.warn("Error occurred in the handleDeleteStudentTest saga", error);
    }
    yield put({
      type: REMOVE_TEST,
      testType: action.testType,
      studentTestId: action.studentTestId,
    });
    yield put({
      type: REMOVE_TEST_FROM_LIST,
      studentTestId: action.studentTestId,
    });
  } catch (error) {
    console.warn("Error occurred in the handleDeleteStudentTest saga", error);
  }
}

function* watchForMarkAllTestFlagsReviewed() {
  yield takeEvery(UPDATE_TEST_FLAG, handleMarkAllFlagsReviewed);
}

function* handleMarkAllFlagsReviewed(action) {
  try {
    const sections = yield call(fetchStudentTestSectionsApi, action.studentId, action.studentTestId);

    const reviewedTestIds = [];
    let count = 0;
    while (count < sections.length) {
      const { data: problems } = yield call(fetchStudentTestSectionProblemsApi, action.studentId, action.studentTestId, sections[count].id);

      const problemAmount = problems.problems.length;
      let problemCount = 0;
      while (problemCount < problemAmount) {
        const flagData = problems.problems[problemCount].flag;
        if (flagData.id && flagData.status === 'FLAGGED') {
          const payload = { status: 'REVIEWED', flag_id: flagData.id, student_test_id: action.studentTestId };

          yield call(updateStudentTestQuestionFlagStatusApi, payload);
          reviewedTestIds.push(action.studentTestId);
        }
        problemCount++;
      }
      count++;
    }
    // Dispatch to update redux store
  } catch (error) {
    console.warn("Error occurred in the handleUpdateFlagStatus saga", error);
  }
}

function* watchForAddStudentAnswerToTest() {
  yield takeEvery(ADD_STUDENT_ANSWER_TO_TEST, handleAddStudentAnswerToTest);
}

function* watchForAddStudentAnswerToTestDebounce() {
  yield debounce(500, ADD_FREE_RESPONSE_ANSWER_TO_TEST, handleAddStudentAnswerToTest);
}

function* handleAddStudentAnswerToTest(action) {
  try {
    const response = yield call(addStudentAnswerToTestApi, action.payload);
    if (response && response.message) {
      yield put(sendErrorMessage(answerTestProblemMessage, `Something went wrong adding an answer to this problem. Your answer will not be recorded. Please try again later.`));
      yield put(resetErrorMessage(answerTestProblemMessage));
      return console.warn("Error occurred in the handleAddStudentAnswerToTest saga", response.message);
    }
    yield put({
      type: UPDATE_STUDENT_TEST_ANSWER,
      sectionId: action.sectionId,
      payload: action.payload,
    });
    yield put(resetErrorMessage(answerTestProblemMessage));
  } catch (error) {
    yield put(sendErrorMessage(answerTestProblemMessage, `Something went wrong adding an answer to this problem. Please try again.`));
    console.warn("Error occurred in the handleAddStudentAnswerToTest saga", error);
  }
}

function* watchForUpdateTestStatus() {
  yield takeEvery(UPDATE_TEST_STATUS, handleUpdateTestStatus);
}

function* handleUpdateTestStatus(action) {
  try {
    const response = yield call(updateStudentTestStatusApi, action.payload);
    if (response && response.message && action.payload.status === "COMPLETED") {
      console.warn("Error occurred in the handleUpdateTestStatus saga", response.message);
      return yield put(sendErrorMessage("updateTestStatusMsg", `Something went wrong updating this test to ${action.payload.status}. Please try opening and resubmitting this test later.`));
    }
    yield put({
      type: UPDATE_TEST_STATUS_SUCCESS,
      payload: action.payload,
    });

    if (action.payload.status === "COMPLETED") {
      yield put({
        type: ADD_TEST_TO_COMPLETED,
        payload: action.payload,
        testList: action.currentStatus,
      });
      yield put({
        type: REMOVE_TEST_FROM_PREV_LIST,
        payload: action.payload,
        testList: action.currentStatus,
      });

      yield delay(1500);

      const response = yield call(fetchStudentTestScoreApi, action.studentId, action.payload.student_test_id);
      if (response && response.message) {
        console.warn(`Error occurred in the handleFetchActiveTestScores saga: ${response.message}`);
        return yield put(sendErrorMessage("fetchScoresMsg", "Something went wrong fetching scores for this test. Please try opening this test from the completed test section to view scores."));
      }
      if (!response.data.essay) {
        response.data.essay = { analysis: "", reading: "", writing: "" };
      }
      yield put({
        type: SET_ACTIVE_TEST_SCORES,
        scores: { ...response.data, student_test_id: action.payload.student_test_id },
      });
      yield put(resetErrorMessage("fetchScoresMsg"));
      yield put(resetErrorMessage("updateTestStatusMsg"));
    }
  } catch (error) {
    console.warn("Error occurred in the handleUpdateTestStatus saga", error);
  }
}

function* watchForUpdateTestFlagStatus() {
  yield takeEvery(UPDATE_FLAG_STATUS, handleUpdateTestFlagStatus);
}

function* handleUpdateTestFlagStatus(action) {
  try {
    if (action.status === "FLAGGED" && !action.payload.flag_id) {
      const response = yield call(addStudentTestQuestionFlagApi, action.payload);
      if (response && response.message) {
        return yield put(sendErrorMessage(testFlagMessage, `Something went wrong adding a flag to this problem: ${response.message}`));
      }
      action.question.flag.id = response.data.id;
    } else {
      const response = yield call(updateStudentTestQuestionFlagStatusApi, action.payload);
      if (response && response.message) {
        return yield put(sendErrorMessage(testFlagMessage, `Something went wrong updating the flag status of this problem: ${response.message}`));
      }
    }
    yield put(resetErrorMessage(testFlagMessage));
    yield put({
      type: UPDATE_FLAG_STATUS_SUCCESS,
      sectionId: action.question.test_section_id,
      question: action.question,
      status: action.status,
    });
  } catch (error) {
    yield put(sendErrorMessage(testFlagMessage, `Something went wrong updating the flag status of this problem: ${error}`));
    console.warn("Error occurred in the handleUpdateTestFlagStatus saga", error);
  }
}

function* watchForFetchActiveTestScores() {
  yield takeEvery(GET_TEST_SCORES, handleFetchActiveTestScores);
}

function* handleFetchActiveTestScores(action) {
  try {
    const response = yield call(fetchStudentTestScoreApi, action.payload.studentId, action.payload.student_test_id);
    if (response && response.message) {
      console.warn(`Error occurred in the handleFetchActiveTestScores saga: ${response.message}`);
      return yield put(sendErrorMessage("fetchScoresMsg", "Something went wrong fetching scores."));
    }
    yield put(resetErrorMessage("fetchScoresMsg"));
    if (!response.data.essay) {
      response.data.essay = { analysis: "", reading: "", writing: "" };
    }
    yield put({
      type: SET_ACTIVE_TEST_SCORES,
      scores: { ...response.data, student_test_id: action.payload.student_test_id },
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchActiveTestScores saga", error);
    return yield put(sendErrorMessage("fetchScoresMsg", "Something went wrong fetching scores."));
  }
}

function* watchForFetchLessonDetails() {
  yield takeEvery(FETCH_LESSON_DETAILS, handleFetchLessonDetails);
}

function* handleFetchLessonDetails(action) {
  try {
    if (action.afterCompleted) {
      yield delay(500);
    }
    const response = yield call(fetchStudentLessonApi, action.postBody.student_id, action.postBody.lesson_id);
    if (response && response.message) {
      return console.warn("Error occurred in the handleFetchLessonDetails saga", response.message);
    }

    yield put({
      type: SET_ACTIVE_LESSON,
      activeLesson: response.data,
    });

    const label = response.data.type.label;
    if (label === "Drill" || label === 'Reading') {
      if (response.data.status === "ASSIGNED") {
        yield put({
          type: UPDATE_LESSON_STATUS,
          postBody: {
            student_lesson_id: response.data.id,
            status: "STARTED",
          },
        });
      }
    } else if (label === "Module") {
      for (const section of action.sections) {
        yield put({
          type: FETCH_LESSON_SECTIONS,
          postBody: {
            student_id: action.postBody.student_id,
            lesson_id: action.postBody.lesson_id,
            section_id: section.id,
          },
        });
      }
    }
  } catch (error) {
    return console.warn("Error occurred in the handleFetchLessonDetails saga", error);
  }
}

function* watchForFetchLessonProblems() {
  yield takeEvery(FETCH_LESSON_SECTIONS, handleFetchLessonProblems);
}

function* handleFetchLessonProblems(action) {
  try {
    const { postBody: { student_id, lesson_id, section_id } } = action;
    const response = yield call(fetchStudentLessonSectionApi, student_id, lesson_id, section_id);
    if (response && response.message) {
      return console.warn("Error occurred in the handleFetchLessonProblems saga", response.message);
    }
    const sectionType = response.data.name;
    const problems = response.data.lesson_problems;
    yield put({
      type: SET_LESSON_PROBLEMS,
      sectionType,
      problems,
    });
  } catch (error) {
    return console.warn("Error occurred in the handleFetchLessonProblems saga", error);
  }
}

function* watchForUpdateStudentLessonStatus() {
  yield takeEvery(UPDATE_LESSON_STATUS, handleUpdateLessonStatus);
}

function* handleUpdateLessonStatus(action) {
  try {
    const response = yield call(updateStudentLessonStatusApi, action.postBody);
    if (response && !response.ok) {
      response.json().then(res => console.warn("Error occurred in the handleUpdateLessonStatus saga", res.message));
    }
    if (action.postBody.status === "COMPLETED") {
      return yield put({
        type: FETCH_LESSON_DETAILS,
        postBody: {
          student_id: action.student_id,
          lesson_id: action.postBody.student_lesson_id,
          section_id: action.section_id,
        },
        afterCompleted: true,
      });
    }
    return yield put({
      type: UPDATE_LESSON_STATUS_SUCCESS,
      status: action.postBody.status,
    });
  } catch (error) {
    return console.warn("Error occurred in the handleUpdateLessonStatus saga", error);
  }
}

function* watchForCompleteStudentLessonSection() {
  yield takeEvery(COMPLETE_LESSON_SECTION, handleCompleteLessonSection);
}

function* handleCompleteLessonSection(action) {
  try {
    const response = yield call(completeStudentLessonSectionApi, action.postBody);
    if (response && !response.ok) {
      yield put(sendErrorMessage("completeSectionMsg", "Something went wrong completing this section. Please try again."));
      return response.json().then(res => console.warn("Error occurred in the handleCompleteLessonSection saga", res.message));
    }

    yield put(resetErrorMessage("completeSectionMsg"));
    const actionData = {
      postBody: {
        student_id: action.student_id,
        lesson_id: action.postBody.student_lesson_id,
        section_id: action.sections[1].id,
      },
      sections: action.sections,
      afterCompleted: true,
    };
    if (action.lessonType === 'challenge') {
      yield put({
        type: COMPLETE_SECTION_SUCCESS,
      });
      yield put({
        type: FETCH_LESSON_SECTIONS,
        ...actionData,
      });
    } else if (action.lessonType === 'practice') {
      yield put({
        type: FETCH_LESSON_DETAILS,
        ...actionData,
      });
    }
  } catch (error) {
    return console.warn("Error occurred in the handleCompleteLessonSection saga", error);
  }
}

function* watchForSubmitLessonProblems() {
  yield takeEvery(SUBMIT_LESSON_PROBLEMS, handleSubmitLessonProblems);
}

function* handleSubmitLessonProblems(action) {
  try {
    const { lessonType } = action;
    if (lessonType === 'drill' || lessonType === 'reading') {
      yield put({
        type: UPDATE_LESSON_STATUS,
        postBody: action.postBody,
        student_id: action.student_id,
      });
    } else if (lessonType === 'challenge' || lessonType === 'practice') {
      const sectionIndex = lessonType === 'challenge' ? 0 : 1;
      const postBody = {
        student_lesson_id: action.postBody.student_lesson_id,
        lesson_section_id: action.postBody.sections[sectionIndex].id,
      };
      yield put({
        type: COMPLETE_LESSON_SECTION,
        postBody,
        student_id: action.student_id,
        lessonType,
        sections: action.postBody.sections,
      });
    }
  } catch (error) {
    return console.warn("Error occurred in the handleSubmitLessonProblems saga", error);
  }
}

function* watchForMarkAllLessonFlagsReviewed() {
  yield takeEvery(MARK_ALL_LESSON_FLAGS_REVIEWED, handleMarkAllLessonFlagsReviewed);
}

function* handleMarkAllLessonFlagsReviewed(action) {
  try {
    const { studentLessonIds, studentLessons, user } = action;
    if (studentLessonIds && studentLessonIds.length > 0) {
      for (const lesson of studentLessons) {
        if (studentLessonIds.includes(lesson.id)) {
          if (lesson.problems && lesson.problems.length > 0) {
            for (const problem of lesson.problems) {
              if (problem.flag_status === "FLAGGED") {
                const payload = {
                  student_lesson_id: lesson.id,
                  problem_id: problem.problem.id,
                  flag_status: "REVIEWED",
                };
                yield put(flagStudentLessonProblem(payload, true));
              }
            }
          } else if (lesson.sections && lesson.sections.length > 0) {
            const section1 = yield call(
              fetchStudentLessonSectionApi,
              user.id,
              lesson.id,
              lesson.sections[0].id,
            );
            const section2 = yield call(
              fetchStudentLessonSectionApi,
              user.id,
              lesson.id,
              lesson.sections[1].id,
            );
            const sectionsArr = [section1, section2];
            for (const section of sectionsArr) {
              for (const problem of section.data.lesson_problems) {
                if (problem.flag_status === "FLAGGED") {
                  const payload = {
                    student_lesson_id: lesson.id,
                    problem_id: problem.problem.id,
                    flag_status: "REVIEWED",
                  };
                  yield put(flagStudentLessonProblem(payload, true));
                }
              }
            }
          }
        }
      }
    }
    yield put({
      type: "UPDATE_STUDENT_LESSONS_HERE",
    });
  } catch (error) {
    return console.warn("Error occurred in the handleMarkAllLessonFlagsReviewed saga", error);
  }
}

export default function* defaultSaga() {
  yield all([
    watchForFetchStudents(),
    watchForFetchStudentTests(),
    watchForFetchStudentTestSections(),
    watchForSearchStudents(),
    watchForDeleteStudent(),
    watchForUpdateStudentFirstName(),
    watchForUpdateStudentLastName(),
    watchForUpdateStudentAddress(),
    watchForUpdateStudentCity(),
    watchForUpdateStudentEmail(),
    watchForUpdateStudentPhone(),
    watchForUpdateStudentState(),
    watchForUpdateStudentZip(),
    watchForCreateClass(),
    watchForFetchInstructors(),
    watchForSearchInstructors(),
    watchForUpdateInstructorFirstName(),
    watchForUpdateInstructorLastName(),
    watchForUpdateInstructorEmail(),
    watchForUpdateInstructorState(),
    watchForUpdateInstructorCity(),
    watchForUpdateInstructorZip(),
    watchForUpdateInstructorAddress(),
    watchForUpdateInstructorPhone(),
    watchForCreateInstructor(),
    watchForFetchClasses(),
    watchForUpdateClassStartDate(),
    watchForUpdateClassEndDate(),
    watchForUpdateClassExcludeFromStatistics(),
    watchForUpdateClassName(),
    watchForUpdateClassDuration(),
    watchForFetchLesson(),
    watchForFetchUnitFilterOptions(),
    watchForFetchStudentLesson(),
    watchForAssignLesson(),
    watchForResetLesson(),
    watchForUpdateStudentActivation(),
    watchForUnAssignLesson(),
    watchForRescheduleStudentLessons(),
    watchForFetchSubjects(),
    watchForFetchCurrentUser(),
    watchForFetchStudentLessonDebounce(),
    watchForExcuseStudentLateness(),
    watchForFilterLessons(),
    watchForFlagStudentLessonProblem(),
    watchForFetchAllLocations(),
    watchForAnswerStudentLessonProblem(),
    watchForDeleteStudentTest(),
    watchForMarkAllTestFlagsReviewed(),
    watchForAddStudentAnswerToTest(),
    watchForUpdateTestStatus(),
    watchForAddStudentAnswerToTestDebounce(),
    watchForUpdateTestFlagStatus(),
    watchForFetchActiveTestScores(),
    watchForFetchLessonProblems(),
    watchForAnswerStudentLessonProblemDebounce(),
    watchForUpdateStudentLessonStatus(),
    watchForCompleteStudentLessonSection(),
    watchForSubmitLessonProblems(),
    watchForFetchLessonDetails(),
    watchForMarkAllLessonFlagsReviewed(),
  ]);
}
