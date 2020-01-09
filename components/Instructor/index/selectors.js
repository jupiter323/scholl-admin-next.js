import { createSelector } from 'reselect';

const selectInstructorDomain = (state) => state.instructorReducer;

const makeSelectInstructorPageState = () => createSelector(
    selectInstructorDomain,
    (substate) => substate?substate.toJS():{}
);

const makeSelectInstructors = () => createSelector(
    makeSelectInstructorPageState(),
    (substate) => substate.instructors
);

export default selectInstructorDomain;
export {
    makeSelectInstructorPageState,
    makeSelectInstructors,
}