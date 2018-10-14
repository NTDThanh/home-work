/*
 *
 * UserLoginPage reducer
 *
 */

import { fromJS } from "immutable";
import { INPUT_CHANGE } from "./constants";

export const initialState = fromJS({
  acc: "",
  pass: ""
});

function userLoginPageReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return state.set(action.payload.inputName, action.payload.inputValue);
    default:
      return state;
  }
}

export default userLoginPageReducer;
