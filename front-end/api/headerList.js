import AppSession from '../app/utils/appSession';

const appSession = new AppSession();
const AUTHEN_SCHEMA = 'Bearer';

export function getDefaultHeader() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `${AUTHEN_SCHEMA} ${appSession.getUserToken()}`,
  };
}

export function getHeaderLogin() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}
