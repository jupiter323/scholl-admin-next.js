import { take, call, put, all } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  CREATE_STUDENT,
  DELETE_STUDENT,
  SEARCH_STUDENTS,
} from "./components/Student/index/constants";
import { CREATE_CLASS } from './components/Classes/index/constants';
import { FETCH_INSTRUCTORS, SEARCH_INSTRUCTORS, UPDATE_INSTRUCTOR_FIRSTNAME,
  CREATE_INSTRUCTOR,
  UPDATE_INSTRUCTOR_LASTNAME,
  UPDATE_INSTRUCTOR_EMAIL,
  UPDATE_INSTRUCTOR_STATE,
  UPDATE_INSTRUCTOR_CITY,
  UPDATE_INSTRUCTOR_ZIP,
  UPDATE_INSTRUCTOR_ADDRESS,
  UPDATE_INSTRUCTOR_PHONE,
  ADD_INSTRUCTOR_LOCATION } from './components/Instructor/index/constants';
import { setStudents } from "./components/Student/index/actions";
import { setInstructors } from './components/Instructor/index/actions';
import { studentApi, classApi, instructorApi } from "./api";
const { fetchStudentsApi, searchStudentsApi, createStudentApi, deleteStudentApi } = studentApi;
const { createClassApi } = classApi;
const { fetchInstructorsApi, searchInstructorsApi, updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  updateInstructorPhoneApi,
  addInstructorToLocationApi,
  createNewInstructorApi,
} = instructorApi;

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
    if (students instanceof Array) {
      yield put(setStudents(students));
    }
  } catch (err) {
    console.warn('Error occurred in fetchingStudents saga', err);
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
/** ******************************************    INSTRUCTORS    ******************************************* */
export function* watchForUpdateInstructorFirstName() {
  while (true) {
    try {
      const { value } = yield take(UPDATE_INSTRUCTOR_FIRSTNAME);
      const response = yield call(updateInstructorFirstNameApi, value);
      if (response && response.message) {
        return console.warn(
          "Something went wrong in updateInstructorFirstNameApi."
        );
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
        return console.warn(
          "Something went wrong in updateInstructorLastNameApi."
        );
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
        return console.warn(
          "Something went wrong in updateInstructorEmailApi."
        );
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
        return console.warn(
          "Something went wrong in updateInstructorStateApi."
        );
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
        return console.warn(
          "Something went wrong in updateInstructorCityApi."
        );
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
        return console.warn(
          "Something went wrong in updateInstructorZipApi."
        );
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
        return console.warn(
          "Something went wrong in updateInstructorAddressApi."
        );
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
        return console.warn(
          "Something went wrong in updateInstructorPhoneApi."
        );
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
      console.log(instructor);
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
  ]);
}
