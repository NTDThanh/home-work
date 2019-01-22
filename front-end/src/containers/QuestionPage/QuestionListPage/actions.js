/*
 *
 * QuestionListPage actions
 *
 */

import * as C from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function importQuestion(quesitonList) {
  return {
    type: C.IMPORT_QUESTIONS,
    payload: quesitonList,
  }
};
