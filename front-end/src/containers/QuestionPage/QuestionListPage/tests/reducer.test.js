import { fromJS } from 'immutable';
import questionListPageReducer from '../reducer';

describe('questionListPageReducer', () => {
  it('returns the initial state', () => {
    expect(questionListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
