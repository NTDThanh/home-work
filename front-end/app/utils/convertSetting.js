import * as C from '../constants';

export function getImageSettingToView(imageDetail) {
  const settings = [];

  if (imageDetail == null) return settings;

  // get format
  const formatItem = this.getSettingItem(imageDetail.format, C.IMAGE_FORMAT);
  settings.push({ value: formatItem.value, label: 'Format' });

  // get compress
  settings.push({ value: imageDetail.value, label: 'Compress' });

  // get watermark
  settings.push({ value: imageDetail.watermark, label: 'Watermark' });

  // get clipping
  const clippingItem = this.getSettingItem(
    imageDetail.clipping,
    C.IMAGE_CLIPPING,
  );
  settings.push({ value: clippingItem.value, label: 'Clipping' });

  // get makeup
  settings.push({ value: imageDetail.makeup, label: 'Makeup' });

  // get paint
  settings.push({ value: imageDetail.paint, label: 'Paint' });

  return settings;
}

export function getSettingItem(value, array) {
  const itemSearch = array.filter(item => item.value == value); // eslint-disable-line
  if (!itemSearch[0]) return itemSearch;
  return { value, label: '' };
}
