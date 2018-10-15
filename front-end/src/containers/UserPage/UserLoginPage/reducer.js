/*
 *
 * UserLoginPage reducer
 *
 */

import { fromJS } from "immutable";
import * as C from "./constants";

export const initialState = fromJS({
  account: "",
  password: "",
  loginSuccess: false,
  redirectLink: ""
});

function userLoginPageReducer(state = initialState, action) {
  switch (action.type) {
    case C.INPUT_CHANGE:
      return state.set(action.payload.inputName, action.payload.inputValue);
    case C.LOGIN_REQUEST_SUCCESS:
    debugger
      return state
        .set("loginSuccess", true)
        .set("redirectLink", action.payload.redirectLink);
    case C.LOGIN_REQUEST_FAIL:
      return state;
    default:
      return state;
  }
}

export default userLoginPageReducer;
