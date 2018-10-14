/**
 *
 * UserListPage
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
import makeSelectUserListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class UserListPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>UserListPage</title>
          <meta name="description" content="Description of UserListPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

UserListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userlistpage: makeSelectUserListPage(),
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

const withReducer = injectReducer({ key: 'userListPage', reducer });
const withSaga = injectSaga({ key: 'userListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(UserListPage);
