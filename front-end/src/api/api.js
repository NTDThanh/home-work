export class AbstractApi {
  static STATUS_CODE_OK = "OK";
  static STATUS_CODE_ERR_LOGIN = "LoginError";
  static STATUS_CODE_ERR_AUTH = "Authority";
  static STATUS_CODE_NOT_FOUND = "NotFound";
  static STATUS_CODE_ERR_PARAM = "ParamError";
  static STATUS_CODE_SYS_ERROR = "SysError";
  static STATUS_CODE_ERR_OTHER = "OtherError";
  /**
   * Construct an API call HTTP header.
   * @param {Object} session - Ultil-AppSession
   * @param {String} contentType - Content-Type埋め込み文字列
   */
  createHeader(session, contentType) {
    const tenantId = session.getTenantId();
    const accessToken = session.getAccessToken();
    const language = session.getLanguage();
    const timezone = session.getTimezone();
    if (contentType) {
      return {
        Accept: "application/json",
        "Content-Type": contentType,
        TenantId: tenantId,
        AccessToken: accessToken,
        "Accept-Language": language,
        Timezone: timezone
      };
    }
    return {
      Accept: "application/json",
      TenantId: tenantId,
      AccessToken: accessToken,
      "Accept-Language": language,
      Timezone: timezone
    };
  }

  /**
   * APIにリクエストを行います。
   * @param {String} url - リクエスト先URL
   * @param {Map} requestInit - リクエストデータ
   */
  async requestApi(url, requestInit) {
    try {
      const response = await fetch(url, requestInit);
      let result = false;
      if (response.ok) {
        result = true;
      }
      return {
        result,
        status: response.status,
        response
      };
    } catch (e) {
      throw e;
    }
  }

  /**
   * handle api result and not change mainMessage
   * @param {Response} result - HTTPレスポンス
   */
  async handleApiResult(result) {
    const apiResult = new ApiResult();
    const resultStatus = result.status;
    apiResult.setStatus(resultStatus);
    switch (resultStatus) {
      // ログイン有効期限切れ
      case 401:
        apiResult.addMainMessage(AbstractApi.STATUS_CODE_ERR_LOGIN);
        break;
      // APIアクセス権なし
      case 403:
        apiResult.addMainMessage(AbstractApi.STATUS_CODE_ERR_AUTH);
        break;
      // データなし
      case 404:
        apiResult.addMainMessage(AbstractApi.STATUS_CODE_NOT_FOUND);
        break;
      case 500:
        apiResult.addMainMessage(AbstractApi.STATUS_CODE_SYS_ERROR);
        break;
      // 入力エラー
      case 400:
        var res = await result.response.json();
        apiResult.addMainMessage(res.mainMessage[0]);
        try {
          const detailMessages = {};
          const jsonKeys = Object.keys(res.detail);
          for (let i = 0; i < jsonKeys.length; i += 1) {
            // [Todo] define structure message from API and destructure in FE
            const key = jsonKeys[i];
            detailMessages[key] = res.detail[key];
          }
          apiResult.detailMessages = detailMessages;
          break;
        } catch (e) {
          apiResult.detailMessages = {};
        }
      default:
        if (resultStatus >= 200 && resultStatus < 300) {
          // エラーなし
          apiResult.addMainMessage(AbstractApi.STATUS_CODE_OK);
        } else {
          // その他エラー
          apiResult.addMainMessage(AbstractApi.STATUS_CODE_ERR_OTHER);
        }
        break;
    }
    return apiResult;
  }

  /**
   * 詳細エラーメッセージ一覧を生成するデフォルトハンドラを取得します。
   */
  getDefaultDetailHandler() {
    const detailMessageHandler = async res => {
      const json = await res.response.json();
      const detailMessages = {};
      const jsonKeys = Object.keys(json.detail);
      for (let i = 0; i < jsonKeys.length; i += 1) {
        // メッセージは先勝ちで取得している
        const key = jsonKeys[i];
        detailMessages[key] = json.detail[key];
      }
      return detailMessages;
    };
    return detailMessageHandler;
  }
}

export class ApiResult {
  constructor() {
    this.status = 200;
    this.mainMessages = [];
    this.detailMessages = {};
  }
  isSuccess() {
    return this.status >= 200 && this.status < 300;
  }
  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }
  addMainMessage(message) {
    this.mainMessages.push(message);
  }
  getMainMessageFirst() {
    return this.mainMessages[0];
  }
  getMainMessages() {
    return this.mainMessages;
  }
  addDetailMessage(key, message) {
    let messages = this.detailMessages[key];
    if (!messages) {
      messages = [];
    }
    messages.push(message);
    this.detailMessages[key] = messages;
  }
  getDetailMessages() {
    return this.detailMessages;
  }
}
