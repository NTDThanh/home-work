/**
 *
 * AuthorityControl
 * To check if permissions are available or not
 */

import React from 'react';
import PropTypes from 'prop-types';
import AppSession from '../../utils/appSession';
// import styled from 'styled-components';

const appSession = new AppSession();

/* eslint-disable react/prefer-stateless-function */
class AuthorityControl extends React.Component {
  content = this.props.children;

  componentWillUpdate() {
    if (!this.checkUserAuthority(this.props.userRole)) {
      this.content = null;
    }
  }

  checkUserAuthority = userRole => appSession.getUserRole() === userRole;

  render() {
    return <React.Fragment>{this.content}</React.Fragment>;
  }
}

AuthorityControl.propTypes = {
  children: PropTypes.isRequired,
  userRole: PropTypes.number,
};

export default AuthorityControl;
