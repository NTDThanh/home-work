/**
 *
 * UploadImageField
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class UploadImageField extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.headeSDr} />
      </div>
    );
  }
}

UploadImageField.propTypes = {};

export default UploadImageField;
