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
      const body = yield take(UPDATE_INSTRUCTOR_FIRSTNAME);
      const response = yield call(updateInstructorFirstNameApi, body);
      if (response && response.message) {
        return console.warn(
          "Something went wrong when updating instructor first name api."
        );
      }
    } catch (err) {
      console.warn("Error occured in watchForUpdateInstructorFirstName saga", err);
    }
  }
}

export default function* defaultSaga() {
  yield all([
    watchForFetchStudents(),
    watchForAddStudent(),
    watchForDeleteStudent(),
    watchForUpdateInstructorFirstName(),
  ]);
}
