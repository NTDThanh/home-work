import { fromJS } from 'immutable';
import exerciseDetailPageReducer from '../reducer';

describe('exerciseDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(exerciseDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
