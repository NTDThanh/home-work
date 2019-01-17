import axios from 'axios';
import * as apiResult from './apiResult';
import * as apiUrl from './apiUrl';
import * as apiHeader from './headerList';

const { API_URL } = apiUrl;

export default class requestApi {
  // #region Api Login.
  static async callApiLogin(requestBody) {
    const requestPayload = {
      method: 'POST',
      headers: apiHeader.getHeaderLogin(),
      data: requestBody,
      url: `${API_URL}${apiUrl.SESSIONS_RESOURCE}`,
    };
    const respone = await axios(requestPayload).catch(error => {
      const convertApiResult = apiResult.getMessageResult(error.response);
      // For status code 4xx and 5xx
      throw convertApiResult;
    });
    return respone;
  }
  // #enderegion
}
