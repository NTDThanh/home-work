export function getCodes(master, codeType) {
  return master.code.filter(item => item.codeType === codeType);
}

export function getCode(master, codeType, codeValue) {
  return master.code.find(
    item =>
      item.codeType === codeType && `${item.codeValue}` === `${codeValue}`,
  ).codeName;
}
