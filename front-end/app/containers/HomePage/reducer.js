/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';

export const initialState = fromJS({
  listExcercises: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case C.DEFAULT_ACTION:
      return state;
    case C.GET_EXCERCSICE_SUCCSESS:
      return state.set('listExcercises', action.payload);
    default:
      return state;
  }
}

export default homePageReducer;
