import { take, call, put, all } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  CREATE_STUDENT,
  DELETE_STUDENT,
} from "./components/Student/index/constants";
import {
  setStudents,
  createStudent,
} from "./components/Student/index/actions";
import { studentApi } from "./api";
const {fetchStudentsApi, createStudentApi, deleteStudentApi} = studentApi;

/** ******************************************    STUDENTS    ******************************************* */
export function* watchForFetchStudents() {
  while (true) {
    yield take(FETCH_STUDENTS);
    yield call(fetchStudents)
  }
}

export function* fetchStudents() {
  try {
    const students = yield call(fetchStudentsApi);
    if (students instanceof Array) {
      yield put(setStudents(students));
    }
  } catch (err) {
    console.warn('Error occurred when fetching students', err);
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

export default function* defaultSaga() {
  yield all([
    watchForFetchStudents(),
    watchForCreateStudent(),
    watchForDeleteStudent(),
  ]);
}
