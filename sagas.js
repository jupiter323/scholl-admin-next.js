import { take, call, put, all } from "redux-saga/effects";
import {
  FETCH_STUDENTS,
  SET_STUDENTS,
  ADD_STUDENT
} from "./components/Student/index/constants";
import {
  fetchStudents,
  setStudents,
  addStudent
} from "./components/Student/index/actions";
import { studentApi } from "./api";

export default function* defaultSaga() {
  yield all([]);
}
