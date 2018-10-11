import { find, isNull, isUndefined } from 'lodash';
import moment from 'moment';

export function isNullOrUndefined(value) {
  return isNull(value) || isUndefined(value);
}

export function compareByString(value1, value2) {
  if (isNullOrUndefined(value1) || isNullOrUndefined(value2)) {
    return false;
  }

  return value1.toString() === value2.toString();
}

export function getValue(
  collection,
  value,
  keyPropertyName,
  valuePropertyName,
) {
  const findResult = find(collection, item =>
    compareByString(item[keyPropertyName], value),
  );

  if (findResult) {
    return findResult[valuePropertyName];
  }

  return '';
}

export function extractDateTime(dateTime) {
  let date = '';
  let hour = '';
  let minute = '';
  let second = '';

  if (dateTime) {
    const parsedDate = moment(dateTime, 'YYYY/MM/DD HH:mm:ss');
    if (parsedDate.isValid()) {
      date = parsedDate.format('YYYY/MM/DD');
      hour = parsedDate.format('hh');
      minute = parsedDate.format('mm');
      second = parsedDate.format('ss');
    }
  }

  return {
    date,
    hour,
    minute,
    second,
  };
}

export function formatDateTime(dateTime) {
  if (dateTime) {
    const parsedDate = moment(dateTime, 'YYYY/MM/DD HH:mm:ss');
    if (parsedDate.isValid()) {
      return parsedDate.format('YYYY-MM-DD HH:mm:ss');
    }
  }

  return '';
}
