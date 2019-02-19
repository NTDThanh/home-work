// Todo setting
export const LOADBALANCER_DOMAIN_TEST = 'http://192.168.16.87:8011/api';
export const LOADBALANCER_DOMAIN_STAGING = 'http://192.168.16.87:8011/api';
export const LOADBALANCER_DOMAIN_PRODUCTION = 'http://192.168.16.87:8011/api';
export const LOADBALANCER_DOMAIN_DEV = 'http://192.168.16.87:8011/api';

export const API_URL_TEST = 'http://192.168.16.87:8006/api';
export const API_URL_DEV = 'http://localhost:6058/api';
export const API_URL_STAGING = 'http://192.168.16.87:8006/api';
export const API_URL_PRODUCTION = 'http://192.168.16.87:8006/api';

export const USERS_RESOURCE = '/users';

export const SERVER_RESOURCE = '/servers';

export const SESSIONS_RESOURCE = '/sessions';

export const CHANGE_PASSWORD_RESOUCE = '/changepassword';

export const EXERCISES_RESOUCE = '/exercises';

export function getApiUrlByEnvironment() {
  const env = process.env.NODE_ENV || 'development';

  switch (env) {
    case 'development':
      return API_URL_DEV;
    case 'test':
      return API_URL_TEST;
    case 'staging':
      return API_URL_STAGING;
    case 'production':
      return API_URL_PRODUCTION;
    default:
      return API_URL_DEV;
  }
}

export function getApiLoadBalancerUrlByEnvironment() {
  const env = process.env.NODE_ENV || 'development';

  switch (env) {
    case 'development':
      return LOADBALANCER_DOMAIN_DEV;
    case 'test':
      return LOADBALANCER_DOMAIN_TEST;
    case 'staging':
      return LOADBALANCER_DOMAIN_STAGING;
    case 'production':
      return LOADBALANCER_DOMAIN_PRODUCTION;
    default:
      return LOADBALANCER_DOMAIN_DEV;
  }
}
