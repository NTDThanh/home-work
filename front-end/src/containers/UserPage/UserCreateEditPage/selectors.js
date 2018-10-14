import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userCreateEditPage state domain
 */

const selectUserCreateEditPageDomain = state =>
  state.get('userCreateEditPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserCreateEditPage
 */

const makeSelectUserCreateEditPage = () =>
  createSelector(selectUserCreateEditPageDomain, substate => substate.toJS());

export default makeSelectUserCreateEditPage;
export { selectUserCreateEditPageDomain };
