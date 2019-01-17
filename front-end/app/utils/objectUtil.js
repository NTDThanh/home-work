import _ from 'lodash';

export function checkAllValue(obj) {
  let result = true;
  _.each(obj, (value, key) => {// eslint-disable-line
    if (!value) {
      result = false;
    }
  });
  return result;
}
