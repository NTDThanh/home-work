import { defineMessages, FormattedMessage } from "react-intl";
import React from "react";

const messages = defineMessages({
  required: {
    id: "src.utils.validationMessages.required",
    defaultMessage: "Vui lòng nhập giá trị"
  },
  minLength: {
    id: "src.utils.validationMessages.minLength",
    defaultMessage: "Vui lòng nhập nhiều hơn ký tự"
  },
  maxLength: {
    id: "src.utils.validationMessages.maxLength",
    defaultMessage: "Vượt quá "
  },
  isNumeric: {
    id: "src.utils.validationMessages.isNumeric",
    defaultMessage: "Chỉ nhập được số từ 0-9"
  },
  isEmail: {
    id: "src.utils.validationMessages.isNumeric",
    defaultMessage: "Email không đúng định dạng"
  }
});

export const required = () => <FormattedMessage {...messages.required} />;
export const minLength = length => {
  const message = {
    ...messages.minLength,
    defaultMessage: messages.minLength.defaultMessage + length + " ký tự"
  };
  return <FormattedMessage {...message} />;
};
export const maxLength = length => {
  const message = {
    ...messages.maxLength,
    defaultMessage: messages.maxLength.defaultMessage + length + " ký tự"
  };
  return <FormattedMessage {...message} />;
};
export const isNumeric = () => <FormattedMessage {...messages.isNumeric} />;
export const isEmail = () => <FormattedMessage {...messages.isEmail} />;
