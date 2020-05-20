import {
  FETCH_STUDENTS,
  SET_STUDENTS,
  SEARCH_STUDENTS,
  DELETE_STUDENT,
  UPDATE_STUDENT_ADDRESS,
  UPDATE_STUDENT_CITY,
  UPDATE_STUDENT_EMAIL,
  UPDATE_STUDENT_FIRSTNAME,
  UPDATE_STUDENT_LASTNAME,
  UPDATE_STUDENT_PHONE,
  UPDATE_STUDENT_STATE,
  UPDATE_STUDENT_ZIP,
  SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN,
  SET_STUDENTS_CALENDAR_CALENDAR_ROWS,
  SET_IS_VISIBLE_TOP_BAR,
  SET_ACTIVE_TEST_SCORES,
  GET_TESTS,
  SET_STUDENT_COMPLETED_TESTS,
  SET_STUDENT_OVERDUE_TESTS,
  SET_STUDENT_ASSIGNED_TESTS,
  SET_STUDENT_TESTS,
  SET_STUDENT_SECTIONS,
  FETCH_STUDENT_TEST_SECTIONS,
  SET_ACTIVE_STUDENT_TEST_ID,
  FETCH_LESSON_LIST,
  FETCH_STUDENT_LESSON_LIST,
  CHECKED_LESSON,
  SELECT_ALL_LESSONS,
  UNSELECT_ALL_LESSONS,
  ADD_CHECKED_LESSON,
  REMOVE_CHECKED_LESSON,
  FETCH_UNITS,
  SET_UNIT_FILTER_OPTIONS,
  SET_ACTIVE_STUDENT_TOKEN,
  ASSIGN_STUDENT_LESSON,
  RESET_STUDENT_LESSONS,
  UNASSIGN_STUDENT_LESSON,
  RESCHEDULE_STUDENT_LESSONS,
  ADD_ALL_LESSONS,
  REMOVE_ALL_LESSONS,
  SET_ACTIVE_LESSON,
  SET_OPEN_ACTIVE_PAGE,
  UPDATE_STUDENT_ACTIVATION,
  FETCH_SUBJECTS,
  EXCUSE_STUDENT_LATENESS,
  FILTER_LESSONS,
  FLAG_STUDENT_LESSON_PROBLEM,
  SET_TESTS,
  SET_ACTIVE_STUDENT,
  ADD_LESSON_ANSWER,
  DELETE_STUDENT_TEST,
  UPDATE_TEST_FLAG,
  ASSIGN_NEW_TEST,
  ADD_NEW_TEST_TO_STUDENT_TESTS,
  ADD_STUDENT_ANSWER_TO_TEST,
} from "./constants";

export function fetchStudents() {
  return {
    type: FETCH_STUDENTS,
  };
}

export function fetchUnits() {
  return {
    type: FETCH_UNITS,
  };
}

export function fetchSubjects() {
  return {
    type: FETCH_SUBJECTS,
  };
}

export function setUnitFilterOptions(options) {
  return {
    type: SET_UNIT_FILTER_OPTIONS,
    options,
  };
}

export function searchStudents(filters) {
  return {
    type: SEARCH_STUDENTS,
    filters,
  };
}

export function fetchStudentTests(user) {
  return {
    type: GET_TESTS,
    user,
  };
}

export function fetchStudentTestSections(postBody) {
  return {
    type: FETCH_STUDENT_TEST_SECTIONS,
    postBody,
  };
}

export function setStudentSections(sections) {
  return {
    type: SET_STUDENT_SECTIONS,
    sections,
  };
}

export function setActiveStudentToken(token) {
  return {
    type: SET_ACTIVE_STUDENT_TOKEN,
    token,
  };
}

export function setActiveStudentTestId(studentTestId) {
  return {
    type: SET_ACTIVE_STUDENT_TEST_ID,
    studentTestId,
  };
}

export function setStudentTests(tests) {
  return {
    type: SET_STUDENT_TESTS,
    tests,
  };
}

export function setStudentCompletedTests(tests) {
  return {
    type: SET_STUDENT_COMPLETED_TESTS,
    tests,
  };
}
export function setStudentOverDueTests(tests) {
  return {
    type: SET_STUDENT_OVERDUE_TESTS,
    tests,
  };
}
export function setStudentAssignedTests(tests) {
  return {
    type: SET_STUDENT_ASSIGNED_TESTS,
    tests,
  };
}

export function setStudents(students) {
  return {
    type: SET_STUDENTS,
    students,
  };
}

export function deleteStudent(id) {
  return {
    type: DELETE_STUDENT,
    id,
  };
}

export function updateStudentAddress(address) {
  return {
    type: UPDATE_STUDENT_ADDRESS,
    address,
  };
}

export function updateStudentCity(city) {
  return {
    type: UPDATE_STUDENT_CITY,
    city,
  };
}

export function updateStudentEmail(email) {
  return {
    type: UPDATE_STUDENT_EMAIL,
    email,
  };
}

export function updateStudentFirstName(firstName) {
  return {
    type: UPDATE_STUDENT_FIRSTNAME,
    firstName,
  };
}

export function updateStudentLastName(lastName) {
  return {
    type: UPDATE_STUDENT_LASTNAME,
    lastName,
  };
}

export function updateStudentPhone(phone) {
  return {
    type: UPDATE_STUDENT_PHONE,
    phone,
  };
}

export function updateStudentState(state) {
  return {
    type: UPDATE_STUDENT_STATE,
    state,
  };
}

export function updateStudentZip(zip) {
  return {
    type: UPDATE_STUDENT_ZIP,
    zip,
  };
}

export function setAssignLessonsModalOpen(value) {
  return {
    type: SET_STUDENTS_CALENDAR_ASSIGN_LESSONS_MODAL_OPEN,
    value,
  };
}

export function setAssignWorksheetModalOpen(value) {
  return {
    type: SET_STUDENTS_CALENDAR_ASSIGN_WORKSHEETS_MODAL_OPEN,
    value,
  };
}

export function setCalendarRows(rows) {
  return {
    type: SET_STUDENTS_CALENDAR_CALENDAR_ROWS,
    rows,
  };
}

export function setIsVisibleTopBar(value) {
  return {
    type: SET_IS_VISIBLE_TOP_BAR,
    value,
  };
}

export function setActiveTestScores(scores) {
  return {
    type: SET_ACTIVE_TEST_SCORES,
    scores,
  };
}

export const getLessonList = () => ({
  type: FETCH_LESSON_LIST,
});

export const getStudentLessonList = (postBody) => ({
  type: FETCH_STUDENT_LESSON_LIST,
  postBody,
});

export const checkLesson = (id) => ({
  type: CHECKED_LESSON,
  id,
});
export const checkAllLessons = (mappedLessons) => ({
  type: SELECT_ALL_LESSONS,
  mappedLessons,
});

export const unCheckAllLessons = (mappedLessons) => ({
  type: UNSELECT_ALL_LESSONS,
  mappedLessons,
});

export const addCheckedLesson = (lessonId) => ({
  type: ADD_CHECKED_LESSON,
  lessonId,
});

export const removeCheckedLesson = (lessonId) => ({
  type: REMOVE_CHECKED_LESSON,
  lessonId,
});

export const assignLessonToStudent = (lesson) => ({
  type: ASSIGN_STUDENT_LESSON,
  lesson,
});

export const resetStudentLessons = (lessons) => ({
  type: RESET_STUDENT_LESSONS,
  lessons,
});

export const unAssignLessonToStudent = (lesson) => ({
  type: UNASSIGN_STUDENT_LESSON,
  lesson,
});

export const rescheduleStudentLessons = (studentLessonData) => ({
  type: RESCHEDULE_STUDENT_LESSONS,
  studentLessonData,
});
export const addAllLessons = (mappedLessons) => ({
  type: ADD_ALL_LESSONS,
  mappedLessons,
});

export const removeAllLessons = (mappedLessons) => ({
  type: REMOVE_ALL_LESSONS,
  mappedLessons,
});

export const setActiveLesson = (activeLesson) => ({
  type: SET_ACTIVE_LESSON,
  activeLesson,
});

export const setOpenActivePage = (value) => ({
  type: SET_OPEN_ACTIVE_PAGE,
  value,
});
export const updateStudentActivation = (studentInfo) => ({
  type: UPDATE_STUDENT_ACTIVATION,
  studentInfo,
});

export const excuseStudentLateness = (lessons) => ({
  type: EXCUSE_STUDENT_LATENESS,
  lessons,
});

export const filterLessons = (filters) => ({
  type: FILTER_LESSONS,
  filters,
});

export const flagStudentLessonProblem = (lesson) => ({
  type: FLAG_STUDENT_LESSON_PROBLEM,
  lesson,
});

export const setTests = (tests) => ({
  type: SET_TESTS,
  tests,
});


export const setActiveStudent = (student) => ({
  type: SET_ACTIVE_STUDENT,
  student,
});

export const answerStudentLessonProblem = (payload) => ({
  type: ADD_LESSON_ANSWER,
  payload,
});

export const deleteStudentTest = (studentTestId, studentId, testType) => ({
  type: DELETE_STUDENT_TEST,
  studentTestId,
  studentId,
  testType,
});

export const updateTestFlag = (studentTestId, studentId) => ({
  type: UPDATE_TEST_FLAG,
  studentTestId,
  studentId,
});

export const assignNewTest = (newTest) => ({
  type: ASSIGN_NEW_TEST,
  newTest,
});

export const addNewTestToStudentTests = (newTest) => ({
  type: ADD_NEW_TEST_TO_STUDENT_TESTS,
  newTest,
});

export const addStudentAnswerToTest = (payload, sectionId) => ({
  type: ADD_STUDENT_ANSWER_TO_TEST,
  payload,
  sectionId,
})