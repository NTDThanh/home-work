// TODO to settings
const API_URL = "http://5bc3609cce72500013c2a64f.mockapi.io";

// TODO to settings
const API_HEADERS = {
  "Content-type": "application/json"
};

const API_PATH = {
  fetchUserLogin: "/login"
};

// import request from 'request';
export default class requestApi {
  static async fetchUserLogin(payload) {
    try {
      const response = await fetch(`${API_URL}${API_PATH.fetchUserLogin}`, {
        method: "POST",
        headers: API_HEADERS,
        body: JSON.stringify({ payload })
      });
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
