import { take, call, put, all } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  ADD_STUDENT,
} from "./components/Student/index/constants";
import {
  setStudents,
} from "./components/Student/index/actions";
import { studentApi } from "./api";
const {fetchStudentsApi, addNewStudentApi} = studentApi;

/********************************************    STUDENTS    ********************************************/
export function* watchForFetchStudents() {
  while (true) {
    yield take(FETCH_STUDENTS);
    yield call(fetchStudents);
  }
}

export function* fetchStudents() {
  try {
    const students = yield call(fetchStudentsApi)
    if (students instanceof Array) {
      yield put(setStudents(students));
    }
  } catch (err) {
    console.warn('Error occurred in the watchForFetchLessons saga', err);
  }
}

export function* watchForAddNewStudent() {
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

export default function* defaultSaga() {
  yield all([
    watchForFetchStudents(),
    watchForAddStudent(),
  ]);
}
