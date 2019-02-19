/*
 *
 * HomePage actions
 *
 */

import * as C from './constants';

export function defaultAction() {
  return {
    type: C.DEFAULT_ACTION,
  };
}

export function getListExcercise() {
  return {
    type: C.GET_EXCERCSICE,
  };
}
