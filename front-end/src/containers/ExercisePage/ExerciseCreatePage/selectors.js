import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the exerciseCreatePage state domain
 */

const selectExerciseCreatePageDomain = state =>
  state.get('exerciseCreatePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ExerciseCreatePage
 */

const makeSelectExerciseCreatePage = () =>
  createSelector(selectExerciseCreatePageDomain, substate => substate.toJS());

export default makeSelectExerciseCreatePage;
export { selectExerciseCreatePageDomain };
