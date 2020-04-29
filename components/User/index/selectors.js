import { createSelector } from 'reselect';

const selectUserDomain = (state) => state.userReducer;

const makeSelectUserPageState = () => createSelector(
  selectUserDomain,
  (substate) => substate ? substate.toJS() : {},
);

const makeSelectUserIsLogged = () => createSelector(
  makeSelectUserPageState(),
  (substate) => substate.isLogged,
);

const makeSelectCurrentUser = () => createSelector(
  makeSelectUserPageState(),
  (substate) => substate.user,
);

export default selectUserDomain;
export {
  makeSelectUserPageState,
  makeSelectUserIsLogged,
  makeSelectCurrentUser,
};
