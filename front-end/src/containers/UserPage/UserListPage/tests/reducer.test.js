import { fromJS } from 'immutable';
import userListPageReducer from '../reducer';

describe('userListPageReducer', () => {
  it('returns the initial state', () => {
    expect(userListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
