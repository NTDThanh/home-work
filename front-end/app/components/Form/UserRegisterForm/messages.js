/*
 * UserRegisterForm Messages
 *
 * This contains all the text for the UserRegisterForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.UserRegisterForm';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the UserRegisterForm component!',
  },

  buttonCreate: {
    id: `${scope}.buttonCreate`,
    defaultMessage: 'Add',
  },
});
