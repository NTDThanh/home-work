import { fromJS } from 'immutable';
import exerciseListPageReducer from '../reducer';

describe('exerciseListPageReducer', () => {
  it('returns the initial state', () => {
    expect(exerciseListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
