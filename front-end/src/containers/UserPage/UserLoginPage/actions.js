/*
 *
 * UserLoginPage actions
 *
 */

import * as C from "./constants";

export function onChangeInput(inputName, inputValue) {
  return {
    type: C.INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}

export function handleLogin(loginInfo) {
  return {
    type: C.LOGIN_REQUEST,
    payload: loginInfo
  };
}
