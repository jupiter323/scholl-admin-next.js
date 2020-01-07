import { take, call, put, all } from "redux-saga/effects";
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
import { CREATE_CLASS } from './components/Classes/index/constants';
import { FETCH_INSTRUCTORS, SEARCH_INSTRUCTORS } from './components/Instructor/index/constants';
import { setStudents } from "./components/Student/index/actions";
import { setInstructors } from './components/Instructor/index/actions';
import { studentApi, classApi, instructorApi } from "./api";
const { fetchStudentsApi, searchStudentsApi, createStudentApi, deleteStudentApi,  fetchStudentsApi,
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
  updateStudentZipApi, } = studentApi;
const { createClassApi } = classApi;
const { fetchInstructorsApi, searchInstructorsApi } = instructorApi;

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
        return console.warn(
          "Something went wrong in updateStudentFirstNameApi."
        );
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
        return console.warn(
          "Something went wrong in updateStudentLastNameApi."
        );
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
        return console.warn(
          "Something went wrong in updateStudentAddressApi."
        );
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
        return console.warn(
          "Something went wrong in updateStudentCityApi."
        );
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
        return console.warn(
          "Something went wrong in updateStudentEmailApi."
        );
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
        return console.warn(
          "Something went wrong in updateStudentPhoneApi."
        );
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
        return console.warn(
          "Something went wrong in updateStudentStateApi."
        );
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
        return console.warn(
          "Something went wrong in updateStudentZipApi."
        );
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateStudentZip saga", err);
    }
  }
}


export function* watchForCreateClass() {
  while (true) {
    const { newClass } = yield take(CREATE_CLASS);
    console.warn('saga yaaay!', newClass);
    yield call(createClass, newClass);
  }
}

export function* createClass(newClass) {
  try {
    const response = yield call(createClassApi, newClass);
    if (response.exception && response.exception.length) {
      console.warn('Error occurred in createClass saga', response);
    }
  } catch (err) {
    console.warn('Error occurred in createClass saga', err);
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
    const instructors = yield call(fetchInstructorsApi);
    if (instructors instanceof Array) {
      yield put(setInstructors(instructors));
    }
  } catch (err) {
    console.warn('Error occurred in fetchInstructors saga', err);
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
  ]);
}
