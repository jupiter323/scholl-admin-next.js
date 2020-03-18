/* eslint-disable no-console*/
import { take, call, put, all, takeEvery } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  CREATE_STUDENT,
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
  // eslint-disable-next-line
  ADD_INSTRUCTOR_LOCATION,
} from "./components/Instructor/index/constants";
import {
  FETCH_LESSON_LIST,
  FETCH_LESSON_LIST_SUCCESS,
  FETCH_LESSON_LIST_FAIL,
} from "./components/Student/DetailLessonList/index/constants";
import { setStudents } from "./components/Student/index/actions";
import { setInstructors } from "./components/Instructor/index/actions";
import { setClasses } from "./components/Classes/index/actions";
import { studentApi, classApi, instructorApi, lessonApi } from "./api";
const {
  fetchStudentsApi,
  searchStudentsApi,
  createStudentApi,
  deleteStudentApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
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
  // eslint-disable-next-line
  addInstructorToLocationApi,
  createNewInstructorApi,
} = instructorApi;

const { fetchLessonListApi } = lessonApi;

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

export function* watchForCreateStudent() {
  while (true) {
    try {
      const { student } = yield take(CREATE_STUDENT);
      const response = yield call(createStudentApi, student);
      if (response && response.message) {
        return console.warn("Something went wrong with adding a new student!");
      }
      yield call(fetchStudents);
    } catch (err) {
      console.warn("Error occurred in watchForAddStudent", err);
    }
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
    yield put({
      type: FETCH_LESSON_LIST_SUCCESS,
      payload: lessons.map(lesson => ({
        ...lesson,
        selected: false,
      })),
    });
  } catch (error) {
    console.warn("Error occurred in the handleFetchLesson saga", error);
    yield put({
      type: FETCH_LESSON_LIST_FAIL,
      payload: error,
    });
  }
}

export default function* defaultSaga() {
  yield all([
    watchForFetchStudents(),
    watchForSearchStudents(),
    watchForCreateStudent(),
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
  ]);
}
