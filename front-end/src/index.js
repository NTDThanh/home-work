import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import UserLoginPage from "containers/UserPage/UserLoginPage/Loadable";
import AppSession from "../src/utils/appSession";
import "assets/css/material-dashboard-react.css?v=1.5.0";
import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();
const initialState = {};
const store = configureStore(initialState, hist);
const appSession = new AppSession();
// [Todo] check login method
// const isLogin = appSession.checkLogin();
const isLogin = true;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {isLogin ? (
          indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })
        ) : (
          <Route path={"/"} component={UserLoginPage} />
        )}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
