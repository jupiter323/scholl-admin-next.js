import {
  fetchStudentsApi,
  addNewStudentApi,
  deleteStudentApi,
} from "./components/Student/index/api";

import {
  updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  addInstructorToLocationApi,
} from './components/Instructor/index/api';

export const studentApi = {
  fetchStudentsApi,
  addNewStudentApi,
  deleteStudentApi,
};

export const instructorApi = {
  updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  addInstructorToLocationApi,
}