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
import { studentApi } from "./api";
const {fetchStudentsApi, addNewStudentApi} = studentApi;

/** ******************************************    STUDENTS    ********************************************/
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

export default function* defaultSaga() {
  yield all([
    watchForFetchStudents(),
    watchForAddStudent(),
    watchForDeleteStudent(),
  ]);
}
