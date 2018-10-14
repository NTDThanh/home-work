/*
 *
 * UserLoginPage actions
 *
 */

import { INPUT_CHANGE } from "./constants";

export function onChangeInput(inputName, inputValue) {
  return {
    type: INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}
