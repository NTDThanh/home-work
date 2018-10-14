import { fromJS } from 'immutable';
import userCreateEditPageReducer from '../reducer';

describe('userCreateEditPageReducer', () => {
  it('returns the initial state', () => {
    expect(userCreateEditPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
