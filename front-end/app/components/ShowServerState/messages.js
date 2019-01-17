/*
 * ShowServerState Messages
 *
 * This contains all the text for the ShowServerState component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ShowServerState';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ShowServerState component!',
  },

  serverLabelState: {
    id: `${scope}.serverLabelState`,
    defaultMessage: '稼働状況',
  },

  abnormal: {
    id: `${scope}.abnormal`,
    defaultMessage: '異常',
  },

  normal: {
    id: `${scope}.normal`,
    defaultMessage: '正常',
  },

  maintanceMode: {
    id: `${scope}.maintance`,
    defaultMessage: 'メンテナンス中',
  },
});
