import { takeLatest, call, put } from "redux-saga/effects";
import request from "../../../api/requestApi";
import * as C from "../UserLoginPage/constants";
import { loginSuccess } from "../../../utils/user";

// Individual exports for testing
export function* fetchUserLogin(action) {
  try {
    const apiReponse = yield call(request.fetchUserLogin, action.payload.user);
    if (apiReponse.status === 200) {
      const { user, usergroup } = apiReponse;
      loginSuccess(user, usergroup);
      // Redirect to dashboard
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
