import { createSelector } from "reselect";

const selectStudentDomain = state => state.studentReducer;

const makeSelectStudentsPageState = () =>
  createSelector(selectStudentDomain, substate =>
    substate ? substate.toJS() : {}
  );

const makeSelectStudents = () =>
  createSelector(makeSelectStudentsPageState(), substate => substate.students);

export default selectStudentDomain;
export { makeSelectStudents };
