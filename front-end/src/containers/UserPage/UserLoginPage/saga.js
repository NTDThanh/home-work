import { takeLatest, call, put } from "redux-saga/effects";
import request from "../../../api/requestApi";
import * as C from "../UserLoginPage/constants";
import AppSession from "../../../utils/appSession";

const appSession = new AppSession();
// Individual exports for testing
export function* fetchUserLogin(action) {
  try {
    const apiReponse = yield call(request.fetchUserLogin, action.payload.user);
    const { apiResult, data } = apiReponse;
    const { user, usergroup } = data;
    if (apiResult.isSuccess()) {
      appSession.loginSuccess(user, usergroup);
      //[Todo] Refactor it Redirect to dashboard
      window.location.reload();
      yield put({
        type: C.LOGIN_REQUEST_SUCCESS,
        payload: { redirectLink: action.payload.redirectLink }
      });
    } else {
      yield put({ type: C.LOGIN_REQUEST_FAIL, message: apiReponse.message });
    }
  } catch (e) {
    yield put({ type: C.LOGIN_REQUEST_FAIL, message: e.message });
  }
}

export default function* rootSaga() {
  yield [takeLatest(C.LOGIN_REQUEST, fetchUserLogin)];
}
