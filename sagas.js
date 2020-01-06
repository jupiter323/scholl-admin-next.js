import { take, call, put, all } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  SET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT_ADDRESS,
  UPDATE_STUDENT_CITY,
  UPDATE_STUDENT_EMAIL,
  UPDATE_STUDENT_FIRSTNAME,
  UPDATE_STUDENT_LASTNAME,
  UPDATE_STUDENT_PHONE,
  UPDATE_STUDENT_STATE,
  UPDATE_STUDENT_ZIP,
} from "./components/Student/index/constants";
import {
  fetchStudents,
  setStudents,
  addStudent,
} from "./components/Student/index/actions";
import { studentApi } from "./api";
const {
  fetchStudentsApi,
  addNewStudentApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
} = studentApi;

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

export function* watchForUpdateStudentFirstName() {
  while (true) {
    try {
      const {firstName} = yield take(UPDATE_STUDENT_FIRSTNAME);
      const response = yield call(updateStudentFirstNameApi, firstName);
      console.log(response);
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
      const {lastName} = yield take(UPDATE_STUDENT_LASTNAME);
      const response = yield call(updateStudentLastNameApi, lastName);
      console.log(response);
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
      const {address} = yield take(UPDATE_STUDENT_ADDRESS);
      const response = yield call(updateStudentAddressApi, address);
      console.log(response);
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
      const {city} = yield take(UPDATE_STUDENT_CITY);
      const response = yield call(updateStudentCityApi, city);
      console.log(response);
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
      const {email} = yield take(UPDATE_STUDENT_EMAIL);
      const response = yield call(updateStudentEmailApi, email);
      console.log(response);
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
      const {phone} = yield take(UPDATE_STUDENT_PHONE);
      const response = yield call(updateStudentPhoneApi, phone);
      console.log(response);
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
      const {state} = yield take(UPDATE_STUDENT_STATE);
      const response = yield call(updateStudentStateApi, state);
      console.log(response);
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
      const {zip} = yield take(UPDATE_STUDENT_ZIP);
      const response = yield call(updateStudentZipApi, zip);
      console.log(response);
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


export default function* defaultSaga() {
  yield all([
    watchForFetchStudents(),
    watchForAddStudent(),
    watchForDeleteStudent(),
    watchForUpdateStudentFirstName(),
    watchForUpdateStudentLastName(),
    watchForUpdateStudentAddress(),
    watchForUpdateStudentCity(),
    watchForUpdateStudentEmail(),
    watchForUpdateStudentPhone(),
    watchForUpdateStudentState(),
    watchForUpdateStudentZip(),
  ]);
}
