import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the exerciseCreateEditPage state domain
 */

const selectExerciseCreateEditPageDomain = state =>
  state.get('exerciseCreateEditPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ExerciseCreateEditPage
 */

const makeSelectExerciseCreateEditPage = () =>
  createSelector(selectExerciseCreateEditPageDomain, substate => substate.toJS());

export default makeSelectExerciseCreateEditPage;
export { selectExerciseCreateEditPageDomain };
