import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the appBarOnTop state domain
 */

const selectAppBarOnTopDomain = state => state.get('appBarOnTop', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppBarOnTop
 */

const makeSelectAppBarOnTop = () =>
  createSelector(selectAppBarOnTopDomain, substate => substate.toJS());

export default makeSelectAppBarOnTop;
export { selectAppBarOnTopDomain };
