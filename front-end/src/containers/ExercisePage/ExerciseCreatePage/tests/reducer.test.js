import { fromJS } from 'immutable';
import exerciseCreatePageReducer from '../reducer';

describe('exerciseCreatePageReducer', () => {
  it('returns the initial state', () => {
    expect(exerciseCreatePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
