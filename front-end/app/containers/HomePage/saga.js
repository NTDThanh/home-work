import { call, takeLatest, put } from 'redux-saga/effects';
import * as C from './constants';
import requestApi from '../../../api/requestApi';

function* getExcercsice() {
  try {
    const response = yield call(requestApi.getExercises);
    if (response.status === 200) {
      yield put({ type: C.GET_EXCERCSICE_SUCCSESS, payload: response.data });
    }
  } catch (error) {
    yield put({ type: C.GET_EXCERCSICE_FAIL, error });
  }
}

export default function* rootSaga() {
  yield [takeLatest(C.GET_EXCERCSICE, getExcercsice)];
}
