import * as globalConst from '../constants';

class AppSession {
  /**
   * セッションを保存します。
   * @param {Map} storeData - セッション保存データ
   */
  storeSession(storeData) {
    const dateTime = new Date();
    const { userId, userRole, token, userUpdateAt } = storeData;
    localStorage.setItem('userId', userId);
    localStorage.setItem('authority', userRole);
    localStorage.setItem('userLastUpdate', userUpdateAt);
    localStorage.setItem('token', token);
    localStorage.setItem('loginTime', dateTime);
  }

  getUserRole() {
    const authValue = localStorage.getItem('authority');
    if (authValue) {
      // return NaN when can't parse, disable eslint old rule of es5
      return parseInt(authValue); // eslint-disable-line
    }
    return globalConst.USER_ROLE.unknow;
  }

  getUserToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  getLoginTime() {
    return localStorage.getItem('loginTime');
  }

  getUserUpdatedAt() {
    return localStorage.getItem('userLastUpdate');
  }

  checkUserLogin() {
    // user logged when have userId, userRole, token in localstorage
    return this.getUserId() && this.getUserRole() && this.getUserToken();
  }

  removeSession() {
    localStorage.removeItem('userId');
    localStorage.removeItem('authority');
    localStorage.removeItem('userLastUpdate');
    localStorage.removeItem('token');
    localStorage.removeItem('loginTime');
  }
}

export default AppSession;
