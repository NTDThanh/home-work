import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the exerciseDetailPage state domain
 */

const selectExerciseDetailPageDomain = state =>
  state.get('exerciseDetailPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ExerciseDetailPage
 */

const makeSelectExerciseDetailPage = () =>
  createSelector(selectExerciseDetailPageDomain, substate => substate.toJS());

export default makeSelectExerciseDetailPage;
export { selectExerciseDetailPageDomain };
