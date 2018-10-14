import { fromJS } from 'immutable';
import userLoginPageReducer from '../reducer';

describe('userLoginPageReducer', () => {
  it('returns the initial state', () => {
    expect(userLoginPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
