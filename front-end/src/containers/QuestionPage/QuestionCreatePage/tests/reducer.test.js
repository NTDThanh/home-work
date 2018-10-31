import { fromJS } from 'immutable';
import questionCreatePageReducer from '../reducer';

describe('questionCreatePageReducer', () => {
  it('returns the initial state', () => {
    expect(questionCreatePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
