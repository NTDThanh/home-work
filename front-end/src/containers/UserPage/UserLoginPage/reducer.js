/*
 *
 * UserLoginPage reducer
 *
 */

import { fromJS } from "immutable";
import * as C from "./constants";

export const initialState = fromJS({
  account: "",
  accountErrorTexts: [],
  accountError: false,
  password: "",
  passwordErrorTexts: [],
  passwordError: false,
  loginSuccess: false,
  redirectLink: "",
  mode: C.REGISTER_MODE,
  register: {
    userName: "",
    email: "",
    password: "",
    image: ""
  }
});

function userLoginPageReducer(state = initialState, action) {
  switch (action.type) {
    case C.INPUT_CHANGE:
      return state.set(action.payload.inputName, action.payload.inputValue);
    case C.INPUT_REGISTER_CHANGE:
      return state.setIn(action.payload.inputName, action.payload.inputValue);
    case C.LOGIN_REQUEST_SUCCESS:
      return state
        .set("loginSuccess", true)
        .set("redirectLink", action.payload.redirectLink);
    case C.SWITCH_MODE:
      return state.set("mode", action.payload.mode);
    default:
      return state;
  }
}

export default userLoginPageReducer;