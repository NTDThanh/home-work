export const IMAGE_FORMAT = [
  { value: 1, label: 'jpge' },
  { value: 2, label: 'png' },
  { value: 3, label: 'gif' },
];

export const IMAGE_CLIPPING = [
  { value: 1, label: 'Square' },
  { value: 2, label: 'Rounded Rectangle' },
  { value: 3, label: 'Round shape' },
];

export const VIDEO_FORMAT = [
  { value: 1, label: 'mp4' },
  { value: 2, label: 'mpeg' },
  { value: 3, label: '3pg' },
  { value: 4, label: 'FFmpeg' },
];

export const VIDEO_CODEC = [
  { value: 1, label: 'h264' },
  { value: 2, label: 'mpeg4p2' },
  { value: 3, label: 'h265(HEVC)' },
];

export const AUDIO_CODEC = [
  { value: 1, label: 'mp3' },
  { value: 2, label: 'aac' },
  { value: 3, label: 'ac3(HEVC)' },
];

export const SETTING_NOT_SET = 'off';

export const TASK_STATUS = [
  { value: 0, label: 'Fail' },
  { value: 1, label: 'Waitting' },
  { value: 2, label: 'Running' },
  { value: 3, label: 'Done' },
  { value: 4, label: 'Received' },
];

// For map status with badge ui by status value
export const TASK_STATUS_BADGE = [
  'error',
  'default',
  'warning',
  'processing',
  'success',
];

export function getLabelByValue(value, array) {
  // eslint-disable-next-line
  const itemSearch = array.filter(item => item.value == value);
  if (itemSearch[0]) return itemSearch[0].label;
  return null;
}

export function getValueByLabel(label, array) {
  // eslint-disable-next-line
  const itemSearch = array.filter(item => item.label == label);
  if (itemSearch[0]) return itemSearch[0].value;
  return null;
}

// Todo translate to JP
export const API_MESSAGE_CODE = {
  // 500
  InternalServerError: 'System error please try again or contact to admin!',
  Unauthorized: 'Access is denied due to invalid credentials',
  NotFound: 'Resource not found',
  BadRequest: 'Input invalid',
  RequestTimeOut: 'Request time out',
};

export const USER_ROLE = {
  admin: 1,
  user: 2,
  unknow: 0,
};
