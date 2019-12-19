import { createSelector } from 'reselect';

const selectClassesDomain = (state) => state.classesReducer;

const makeSelectClassesPageState = () => createSelector(
    selectClassesDomain,
    (substate) => substate?substate.toJS():{}
);

const makeSelectAssignLessonsModalOpen = () => createSelector(
    makeSelectClassesPageState(),
    (substate) =>substate.assignLessonsModalOpen
);

const makeSelectAssignWorkSheetsModalOpen = () => createSelector(
    makeSelectClassesPageState(),
    (substate) => substate.assignWorkSheetsModalOpen
)

export default selectClassesDomain;
export {
    makeSelectClassesPageState,
    makeSelectAssignLessonsModalOpen,
    makeSelectAssignWorkSheetsModalOpen,
}