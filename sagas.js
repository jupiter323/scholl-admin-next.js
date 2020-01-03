import { take, call, put, all } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  SET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
} from "./components/Student/index/constants";
import {
  fetchStudents,
  setStudents,
  addStudent,
} from "./components/Student/index/actions";
import {
  UPDATE_INSTRUCTOR_FIRSTNAME,
    UPDATE_INSTRUCTOR_LASTNAME,
    UPDATE_INSTRUCTOR_EMAIL,
    UPDATE_INSTRUCTOR_STATE,
    UPDATE_INSTRUCTOR_CITY,
    UPDATE_INSTRUCTOR_ZIP,
    UPDATE_INSTRUCTOR_ADDRESS,
    UPDATE_INSTRUCTOR_PHONE,
    ADD_INSTRUCTOR_LOCATION,
} from './components/Instructor/index/constants';
import { studentApi, instructorApi } from "./api";
const {fetchStudentsApi, addNewStudentApi} = studentApi;
const {updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  updateInstructorPhoneApi,
  addInstructorToLocationApi} = instructorApi;

/** ******************************************    STUDENTS    ******************************************* */
export function* watchForFetchStudents() {
  while (true) {
    yield take(FETCH_STUDENTS);
    yield call(fetchStudents);
  }
}

export function* watchForAddStudent() {
  while (true) {
    try {
      const { student } = yield take(ADD_STUDENT);
      const response = yield call(addNewStudentApi, student);
      if (response && response.message) {
        return console.warn("Something went wrong with adding a new student!");
      }
      yield call(fetchStudents);
    } catch (err) {
      console.warn("Error occurred in watchForAddStudent", err);
    }
  }
}
const {deleteStudentApi} = studentApi;

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
      const {value} = yield take(UPDATE_INSTRUCTOR_FIRSTNAME);
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
      const {value} = yield take(UPDATE_INSTRUCTOR_LASTNAME);
      console.log(value);
      const response = yield call(updateInstructorLastNameApi, value);
      console.log(response);
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
      const {value} = yield take(UPDATE_INSTRUCTOR_EMAIL);
      console.log(value);
      const response = yield call(updateInstructorEmailApi, value);
      console.log(response);
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
      const {value} = yield take(UPDATE_INSTRUCTOR_STATE);
      console.log(value);
      const response = yield call(updateInstructorStateApi, value);
      console.log(response);
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
      const {value} = yield take(UPDATE_INSTRUCTOR_CITY);
      console.log(value);
      const response = yield call(updateInstructorCityApi, value);
      console.log(response);
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
      const {value} = yield take(UPDATE_INSTRUCTOR_ZIP);
      console.log(value);
      const response = yield call(updateInstructorZipApi, value);
      console.log(response);
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
      const {value} = yield take(UPDATE_INSTRUCTOR_ADDRESS);
      console.log(value);
      const response = yield call(updateInstructorAddressApi, value);
      console.log(response);
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
      const {value} = yield take(UPDATE_INSTRUCTOR_PHONE);
      console.log(value);
      const response = yield call(updateInstructorPhoneApi, value);
      console.log(response);
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

export default function* defaultSaga() {
  yield all([
    watchForFetchStudents(),
    watchForAddStudent(),
    watchForDeleteStudent(),
    watchForUpdateInstructorFirstName(),
    watchForUpdateInstructorLastName(),
    watchForUpdateInstructorEmail(),
    watchForUpdateInstructorState(),
    watchForUpdateInstructorCity(),
    watchForUpdateInstructorZip(),
    watchForUpdateInstructorAddress(),
    watchForUpdateInstructorPhone(),
  ]);
}
