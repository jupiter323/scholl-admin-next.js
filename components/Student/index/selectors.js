import { createSelector } from "reselect";

const selectStudentDomain = state => state.studentReducer;

const makeSelectStudents = () =>
  createSelector(selectStudentDomain, substate =>
    substate ? substate.toJS() : {}
  );

export default selectStudentDomain;
export {
    makeSelectStudents,
}