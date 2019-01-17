/*
 *
 * UserLoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';

export const initialState = fromJS({
  messageFromApi: {
    status: 0,
    detailMessage: [],
    mainMessage: '',
  },
  loginSuccess: false,
  errorMessage: {
    show: false,
    message: '',
  },
});

function userLoginPageReducer(state = initialState, action) {
  switch (action.type) {
    case C.DEFAULT_ACTION:
      return state;
    case C.LOGIN_SUCCESS:
      return state.set('loginSuccess', true);
    case C.CHANGE_INPUT:
      return state.setIn(action.payload.path, action.payload.value);
    case C.LOGIN_FAIL:
      return state.set('messageFromApi', action.error);
    case C.SHOW_ERROR_MESSAGE:
      return state
        .setIn(['errorMessage', 'show'], true)
        .setIn(['errorMessage', 'message'], action.payload);
    case C.HIDE_ERROR_MESSAGE:
      return state
        .setIn(['errorMessage', 'show'], false)
        .setIn(['errorMessage', 'message'], '');
    default:
      return state;
  }
}

export default userLoginPageReducer;
