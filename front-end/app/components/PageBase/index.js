/**
 *
 * PageBase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import { message } from 'antd';
// import messages from './messages';
import * as globalConstant from '../../constants';

const NOTIFY_DURATION = 5;
/* eslint-disable react/prefer-stateless-function */
class PageBase extends React.PureComponent {
  // Show notify by http status code
  handleApiResult = apiResponse => {
    if (!apiResponse.status) return;

    // internal server error
    if (apiResponse.status >= 500 && apiResponse.status <= 600) {
      message.warning(
        apiResponse.mainMessage ||
          globalConstant.API_MESSAGE_CODE.InternalServer,
        NOTIFY_DURATION,
        this.props.clearApiErrorAfterShow,
      );
    }

    // Unauthorized
    if (apiResponse.status === 401) {
      this.handleUnauthorizedCode(apiResponse);
    }

    if (apiResponse.status === 404) {
      this.handleNotFound(apiResponse);
    }

    if (apiResponse.status === 400) {
      this.handleBadRequest(apiResponse);
    }
  };

  handleUnauthorizedCode = apiResponse => {
    message.warning(
      apiResponse.mainMessage || globalConstant.API_MESSAGE_CODE.Unauthorized,
      NOTIFY_DURATION,
      this.props.clearApiErrorAfterShow,
      // To do  call back when unauthorized
    );
  };

  handleNotFound = apiResponse => {
    if (this.props.handleNotFound) {
      this.props.handleNotFound(apiResponse);
    }
  };

  handleBadRequest = apiResponse => {
    if (this.props.handleBadRequest) {
      this.props.handleBadRequest(apiResponse);
    }
  };

  componentDidUpdate() {
    this.handleApiResult(this.props.apiResponse);
    if (this.props.getAllMessage)
      this.props.getAllMessage(this.props.apiResponse);
  }

  render() {
    return <div>{/* To do common UI */}</div>;
  }
}

PageBase.propTypes = {
  apiResponse: PropTypes.object,
  clearApiErrorAfterShow: PropTypes.func,
  handleNotFound: PropTypes.func,
  handleBadRequest: PropTypes.func,
  getAllMessage: PropTypes.func,
};

export default PageBase;
