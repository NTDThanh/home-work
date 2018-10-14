/**
 *
 * UserCreateEditPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserCreateEditPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class UserCreateEditPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>UserCreateEditPage</title>
          <meta name="description" content="Description of UserCreateEditPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

UserCreateEditPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  usercreateeditpage: makeSelectUserCreateEditPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'userCreateEditPage', reducer });
const withSaga = injectSaga({ key: 'userCreateEditPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(UserCreateEditPage);
