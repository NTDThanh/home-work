/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from "immutable";

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  TAB_CHANGE,
  SET_TABS,
  LOAD_CODE_MASTER_SUCCESS
} from "./constants";

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false
  },
  tabs: [
    {
      label: "DefaultTab1",
      path: "/1",
      active: true
    },
    {
      label: "DefaultTab2",
      path: "/2",
      active: true
    }
  ],
  codeMaster: []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set("loading", true)
        .set("error", false)
        .setIn(["userData", "repositories"], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(["userData", "repositories"], action.repos)
        .set("loading", false)
        .set("currentUser", action.username);
    case LOAD_CODE_MASTER_SUCCESS:
      return state.set("codeMaster", fromJS(action.codeMaster));
    case LOAD_REPOS_ERROR:
      return state.set("error", action.error).set("loading", false);
    case TAB_CHANGE:
      return state.set("tab", action.tab);
    case SET_TABS:
      return state.set("tabs", action.tabs);
    default:
      return state;
  }
}

export default appReducer;
