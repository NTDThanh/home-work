/*
 * StandardTable Messages
 *
 * This contains all the text for the StandardTable component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.StandardTable';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the StandardTable component!',
  },
  selected: {
    id: `${scope}.selected`,
    defaultMessage: '選択した',
  },
});
