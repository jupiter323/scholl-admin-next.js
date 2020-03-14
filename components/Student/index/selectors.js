import { createSelector } from "reselect";

const selectStudentsDomain = state => state.studentReducer;

const makeSelectStudentPageState = () =>
  createSelector(selectStudentsDomain, substate => (substate ? substate.toJS() : {}));

const makeSelectStudents = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.students);

const makeSelectAssignLessonsModalOpen = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.assignLessonsModalOpen);

const makeSelectAssignWorkSheetsModalOpen = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.assignWorkSheetsModalOpen);

const makeSelectCalendarRows = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.calendarRows);

const makeSelectIsVisibleTopBar = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.isVisibleTopBar);

const makeSelectActiveTestScores = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.activeTestScores);

const makeSelectOverDueStudentTests = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.overdueStudentTests);
const makeSelectCompletedStudentTests = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.completedStudentTests);
const makeSelectAssignedStudentTests = () =>
  createSelector(makeSelectStudentPageState(), substate => substate.assignedStudentTests);

const makeSelectStudentTests = () => createSelector(makeSelectStudentPageState(),substate => substate.studentTests);

export default selectStudentsDomain;
export {
  makeSelectStudentPageState,
  makeSelectAssignLessonsModalOpen,
  makeSelectAssignWorkSheetsModalOpen,
  makeSelectCalendarRows,
  makeSelectStudents,
  makeSelectIsVisibleTopBar,
  makeSelectActiveTestScores,
  makeSelectOverDueStudentTests,
  makeSelectCompletedStudentTests,
  makeSelectAssignedStudentTests,
  makeSelectStudentTests
};
