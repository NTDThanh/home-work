import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the questionCreatePage state domain
 */

const selectQuestionCreatePageDomain = state =>
  state.get('questionCreatePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by QuestionCreatePage
 */

const makeSelectQuestionCreatePage = () =>
  createSelector(selectQuestionCreatePageDomain, substate => substate.toJS());

export default makeSelectQuestionCreatePage;
export { selectQuestionCreatePageDomain };
