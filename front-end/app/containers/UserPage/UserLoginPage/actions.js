/*
 *
 * UserLoginPage actions
 *
 */

import * as C from './constants';

export function defaultAction() {
  return {
    type: C.DEFAULT_ACTION,
  };
}

export function handleCallApiLogin(requestBody, callback) {
  return {
    type: C.REQUEST_LOGIN,
    payload: { requestBody, callback },
  };
}

export function showErrorMessage(errorMessage) {
  return {
    type: C.SHOW_ERROR_MESSAGE,
    payload: errorMessage,
  };
}

export function hideErrorMessage() {
  return {
    type: C.HIDE_ERROR_MESSAGE,
  };
}
