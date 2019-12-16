import { take, call, put, all } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  SET_STUDENTS,
  ADD_STUDENT
} from "./components/Student/index/constants";
import {
  setStudents,
  addStudent
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
    const {students} = yield call(fetchStudentsApi)
    if (students instanceof Array) {
      yield put(setStudents(students));
    }
  } catch (err) {
    console.warn('Error occurred in the watchForFetchLessons saga', err);
  }
}


export default function* defaultSaga() {
  yield all([]);
}
