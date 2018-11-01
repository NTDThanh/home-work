import { AbstractApi } from '../api/api';

// TODO to settings
const API_URL = 'http://5bc3609cce72500013c2a64f.mockapi.io';

const api = new AbstractApi();
// TODO to settings
const API_HEADERS = {
  'Content-type': 'application/json',
};

const API_PATH = {
  fetchUserLogin: '/login',
  fetchUserLoginFail: '/login400',
  fetchImportQuestions: '/questioncollections',
};

export default class requestApi {
  static async fetchUserLogin(payload) {
    try {
      const response = await fetch(`${API_URL}${API_PATH.fetchUserLogin}`, {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify({ payload }),
      });
      const apiResult = await api.handleApiResult(response);
      let data = {};

      if (apiResult.isSuccess()) {
        data = await response.json();
      }
      return { apiResult, data };
    } catch (e) {
      // console.error(e);
      throw e;
    }
  }

  static async fetchCreateQuestions(payload) {
    try {
      console.time('testForEach');
      const response = await fetch(
        `${API_URL}${API_PATH.fetchImportQuestions}`,
        {
          method: 'POST',
          headers: API_HEADERS,
          body: JSON.stringify(payload),
        },
      );
      // console.log(response);
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (e) {
      // console.error(e);
      throw e;
    }
    finally(){}
  }
}
