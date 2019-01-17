import * as globalConstants from '../app/constants';

export function getMessageResult(apiResponse) {
  const networkError = {
    status: 504,
    mainMessage: globalConstants.API_MESSAGE_CODE.RequestTimeOut,
  };

  if (!apiResponse) return networkError;

  const messageResult = {
    status: apiResponse.status,
    mainMessage: apiResponse.data.mainMessage,
    detailMessage: apiResponse.data.detailMessage,
  };

  return messageResult;
}
