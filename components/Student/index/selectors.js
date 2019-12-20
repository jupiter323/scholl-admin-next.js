import { createSelector } from 'reselect';

const selectStudentsDomain = (state) => state.studentReducer;

const makeSelectStudentPageState = () => createSelector(
    selectStudentsDomain,
    (substate) => substate?substate.toJS():{}
);

const makeSelectAssignLessonsModalOpen = () => createSelector(
    makeSelectStudentPageState(),
    (substate) =>substate.assignLessonsModalOpen
);

const makeSelectAssignWorkSheetsModalOpen = () => createSelector(
    makeSelectStudentPageState(),
    (substate) => substate.assignWorkSheetsModalOpen
);

const makeSelectCalendarRows = () => createSelector(
    makeSelectStudentPageState(),
    (substate) => substate.calendarRows
)

export default selectStudentsDomain;
export {
    makeSelectStudentPageState,
    makeSelectAssignLessonsModalOpen,
    makeSelectAssignWorkSheetsModalOpen,
    makeSelectCalendarRows,
}