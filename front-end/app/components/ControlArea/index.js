/**
 *
 * ControlArea/ To control user authentication
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import UserLoginPage from '../../containers/UserPage/UserLoginPage/Loadable';
import AppSession from '../../utils/appSession';
// import styled from 'styled-components';

const appSession = new AppSession();
/* eslint-disable react/prefer-stateless-function */
class ControlArea extends React.Component {
  content = this.props.children;

  componentWillUpdate() {
    if (!this.checkUserAuthentication()) {
      this.content = <UserLoginPage reloadAppPage={this.props.reloadAppPage} />;
    } else {
      this.content = this.props.children;
    }
  }

  checkUserAuthentication() {
    return appSession.checkUserLogin();
  }

  render() {
    return <React.Fragment>{this.content}</React.Fragment>;
  }
}

ControlArea.propTypes = {
  children: PropTypes.element.isRequired,
  reloadAppPage: PropTypes.func,
};

export default ControlArea;
