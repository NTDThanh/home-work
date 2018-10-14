import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userLoginPage state domain
 */

const selectUserLoginPageDomain = state =>
  state.get('userLoginPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserLoginPage
 */

const makeSelectUserLoginPage = () =>
  createSelector(selectUserLoginPageDomain, substate => substate.toJS());

export default makeSelectUserLoginPage;
export { selectUserLoginPageDomain };
