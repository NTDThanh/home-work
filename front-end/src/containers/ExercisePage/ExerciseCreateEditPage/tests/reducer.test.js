import { fromJS } from 'immutable';
import exerciseCreateEditPageReducer from '../reducer';

describe('exerciseCreateEditPageReducer', () => {
  it('returns the initial state', () => {
    expect(exerciseCreateEditPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
