import { createSelector } from "reselect";

const selectLocationsDomain = state => state.locationsReducer;

const makeSelectLocationsPageState = () =>
  createSelector(selectLocationsDomain, substate => (substate ? substate.toJS() : {}));

const makeSelectLocations = () =>
  createSelector(makeSelectLocationsPageState(), substate => substate.locations);

export default selectLocationsDomain;
export {
  makeSelectLocationsPageState,
  makeSelectLocations,
};
