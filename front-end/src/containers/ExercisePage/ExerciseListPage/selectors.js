import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the exerciseListPage state domain
 */

const selectExerciseListPageDomain = state =>
  state.get("exerciseListPage", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ExerciseListPage
 */

const makeSelectExerciseListPage = () =>
  createSelector(selectExerciseListPageDomain, substate => substate.toJS());

export default makeSelectExerciseListPage;
export { selectExerciseListPageDomain };
