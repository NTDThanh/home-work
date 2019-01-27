import { fromJS } from 'immutable';
import appBarOnTopReducer from '../reducer';

describe('appBarOnTopReducer', () => {
  it('returns the initial state', () => {
    expect(appBarOnTopReducer(undefined, {})).toEqual(fromJS({}));
  });
});
