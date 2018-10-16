import { AbstractApi } from "../api/api";

// TODO to settings
const API_URL = "http://5bc3609cce72500013c2a64f.mockapi.io";

const api = new AbstractApi();
// TODO to settings
const API_HEADERS = {
  "Content-type": "application/json"
};

const API_PATH = {
  fetchUserLogin: "/login",
  fetchUserLoginFail: "/login400"
};

export default class requestApi {
  static async fetchUserLogin(payload) {
    try {
      const response = await fetch(`${API_URL}${API_PATH.fetchUserLogin}`, {
        method: "POST",
        headers: API_HEADERS,
        body: JSON.stringify({ payload })
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

  static async fetchEquipmentSearch(payload) {
    try {
      // console.log('fetchEquipmentSearch');
      const response = await fetch(
        `${API_URL}${API_PATH.fetchEquipmentSearch}`,
        {
          method: "POST",
          headers: API_HEADERS,
          body: JSON.stringify(payload)
        }
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
  }

  static async fetchEquipmentDetails(equipmentNo) {
    try {
      const body = {
        equipmentNo: {
          value: equipmentNo
        }
      };
      const response = await fetch(
        `${API_URL}${API_PATH.fetchEquipmentDetails}`,
        {
          method: "POST",
          headers: API_HEADERS,
          body: JSON.stringify(body)
        }
      );

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (e) {
      throw e;
    }
  }
  static async registerOrUpdateEquipment(equipmentInfo) {
    try {
      const body = equipmentInfo;
      const response = await fetch(
        `${API_URL}${API_PATH.registerOrUpdateEquipment}`,
        {
          method: "POST",
          headers: API_HEADERS,
          body: JSON.stringify(body)
        }
      );

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (e) {
      throw e;
    }
  }
}
