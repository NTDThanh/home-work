import { defineMessages, FormattedMessage } from 'react-intl';
import React from 'react';

const messages = defineMessages({
  required: {
    id: 'app.utils.validationMessages.required',
    defaultMessage: '値を入力してください。',
  },
  minLength: {
    id: 'app.utils.validationMessages.minLength',
    defaultMessage: '文字以上で入力してください。',
  },
  maxLength: {
    id: 'app.utils.validationMessages.maxLength',
    defaultMessage: '文字以下で入力してください。',
  },
  isNumeric: {
    id: 'app.utils.validationMessages.isNumeric',
    defaultMessage:
      '許可されていない文字が使用されています。[0-9]を使用してください',
  },
});

export const required = () => <FormattedMessage {...messages.required} />;
export const minLength = length => {
  const message = {
    ...messages.minLength,
    defaultMessage: length + messages.minLength.defaultMessage,
  };
  return <FormattedMessage {...message} />;
};
export const maxLength = length => {
  const message = {
    ...messages.maxLength,
    defaultMessage: length + messages.maxLength.defaultMessage,
  };
  return <FormattedMessage {...message} />;
};
export const isNumeric = () => <FormattedMessage {...messages.isNumeric} />;
