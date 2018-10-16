class AppSession {
  loginSuccess(user, userGroup) {
    // setter
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userGroup", JSON.stringify(userGroup));
    localStorage.setItem("authenticated", true);
    localStorage.setItem("authenticationCode", user.authenticationCode);
  }

  checkLogin() {
    // setter
    const authenticated = localStorage.getItem("authenticated");
    const authenticationCode = localStorage.getItem("authenticationCode");
    if (authenticated && authenticated === "true" && authenticationCode) {
      return true;
    }
    return false;
  }

  logOut() {
    // setter
    localStorage.setItem("user", "");
    localStorage.setItem("userGroup", "");
    localStorage.setItem("authenticated", false);
    localStorage.setItem("authenticationcode", undefined);
  }
}

export default AppSession;
