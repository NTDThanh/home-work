import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the questionListPage state domain
 */

const selectQuestionListPageDomain = state =>
  state.get('questionListPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by QuestionListPage
 */

const makeSelectQuestionListPage = () =>
  createSelector(selectQuestionListPageDomain, substate => substate.toJS());

export default makeSelectQuestionListPage;
export { selectQuestionListPageDomain };
