import _ from 'lodash';

export function firstOrDefault(array, predicate) {
  if (
    _.isEmpty(array) ||
    _.isNull(array) ||
    _.isUndefined(array) ||
    !_.isArray(array)
  ) {
    return null;
  }

  const filterResult = _.filter(array, i => predicate(i));

  if (filterResult.length === 0) {
    return null;
  }
  return filterResult[0];
}
