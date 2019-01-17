import { takeLatest, call, put } from 'redux-saga/effects';
import * as C from './constants';
import requestApi from '../../../../api/requestApi';
import AppSession from '../../../utils/appSession';

const appSession = new AppSession();
// Individual exports for testing
export function* userLoginPageSaga(action) {
  try {
    const response = yield call(
      requestApi.callApiLogin,
      action.payload.requestBody,
    );
    if (response.status === 200) {
      const {
        user: { userId, userRole, updateAt },
        token,
      } = response.data;
      const storeData = {
        userId,
        userRole,
        token,
        userUpdateAt: updateAt,
      };
      // save session
      appSession.storeSession(storeData);
      // redirect after login success
      action.payload.callback();
    } else {
      yield put({ type: C.LOGIN_FAIL, error: response });
    }
  } catch (error) {
    const networkError = {
      status: 504,
      mainMessage: C.API_MESSAGE_CODE.RequestTimeOut,
    };
    yield put({ type: C.LOGIN_FAIL, error: error || networkError });
  }
}

export default function* rootSaga() {
  yield [takeLatest(C.REQUEST_LOGIN, userLoginPageSaga)];
}
