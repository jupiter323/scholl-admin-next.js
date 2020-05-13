import {
  fetchStudentsApi,
  searchStudentsApi,
  createStudentApi,
  deleteStudentApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
  fetchTestsByStudentIdApi,
  fetchStudentTestSectionsApi,
  fetchLessonListApi,
  fetchUnitsApi,
  fetchStudentLessonListApi,
  assignLessonToStudentApi,
  resetStudentLessonsApi,
  updateStudentActivationApi,
  unAssignLessonFromStudentApi,
  rescheduleStudentLessonsApi,
  fetchSubjectsApi,
  excuseStudentLessonLatenessApi,
  filterLessonListApi,
  addStudentLessonProblemFlagApi,
  addStudentLessonProblemAnswerApi,
} from "./components/Student/index/api";

import {
  createClassApi,
  fetchClassesApi,
  updateClassNameApi,
  updateClassStartDateApi,
  updateClassEndDateApi,
  updateClassDurationApi,
  updateClassExcludeFromStatisticsApi,
} from './components/Classes/index/api';

import {
  fetchInstructorsApi, searchInstructorsApi, updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  addInstructorToLocationApi,
  createNewInstructorApi,
} from './components/Instructor/index/api';

import {
  fetchCurrentUserApi,
} from './components/User/index/api';

import {
  fetchAllLocationsApi,
} from './components/Location/index/api';

export const classApi = {
  createClassApi,
  fetchClassesApi,
  updateClassNameApi,
  updateClassStartDateApi,
  updateClassEndDateApi,
  updateClassDurationApi,
  updateClassExcludeFromStatisticsApi,
};

export const studentApi = {
  fetchStudentsApi,
  searchStudentsApi,
  createStudentApi,
  deleteStudentApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
  fetchTestsByStudentIdApi,
  fetchStudentTestSectionsApi,
  fetchLessonListApi,
  fetchUnitsApi,
  fetchStudentLessonListApi,
  assignLessonToStudentApi,
  resetStudentLessonsApi,
  updateStudentActivationApi,
  unAssignLessonFromStudentApi,
  rescheduleStudentLessonsApi,
  fetchSubjectsApi,
  excuseStudentLessonLatenessApi,
  filterLessonListApi,
  addStudentLessonProblemFlagApi,
  addStudentLessonProblemAnswerApi,
};

export const instructorApi = {
  createNewInstructorApi,
  fetchInstructorsApi,
  searchInstructorsApi,
  updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  addInstructorToLocationApi,
};

export const userApi = {
  fetchCurrentUserApi,
};


export const locationsApi = {
  fetchAllLocationsApi,
}