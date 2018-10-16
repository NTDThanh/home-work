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

export function onChangeRegisterInput(inputName, inputValue) {
  return {
    type: C.INPUT_REGISTER_CHANGE,
    payload: { inputName, inputValue }
  };
}

export function handleLogin(loginInfo) {
  return {
    type: C.LOGIN_REQUEST,
    payload: loginInfo
  };
}

export function switchMode(currentMode) {
  let mode;
  if (currentMode === C.LOGIN_MODE) {
    mode = C.REGISTER_MODE;
  } else {
    mode = C.LOGIN_MODE;
  }
  return {
    type: C.SWITCH_MODE,
    payload: { mode }
  };
}

export function startLoading() {
  return {
    type: C.START_LOADING,
    payload: { loading: true }
  };
}

export function endLoading() {
  return {
    type: C.END_LOADING,
    payload: { loading: false }
  };
}
