import {
  fetchStudentsApi,
  searchStudentsApi,
  createStudentApi,
  deleteStudentApi,
} from "./components/Student/index/api";

import { createClassApi } from './components/Classes/index/api';

export const classApi = {
  createClassApi,
};

export const studentApi = {
  fetchStudentsApi,
  searchStudentsApi,
  createStudentApi,
  deleteStudentApi,
};
