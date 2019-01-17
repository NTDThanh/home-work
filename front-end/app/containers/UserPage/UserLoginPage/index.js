/**
 *
 * UserLoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { Form, Icon, Input, Button, Row, Col, Card, Layout, Alert } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import * as C from './constants';
// import AppSession from '../../../utils/appSession';
// eslint-disable-next-line
import style from './styles.less';
import PageBase from '../../../components/PageBase';

const FormItem = Form.Item;
// use regex to handle when user input the charactor isn't latin's alphabet.
const REGEX_CHECK_ALPHA_NUMBERIC = /^[a-zA-Z\s.,0-9@#$%*():;""'/?!+=_-]{1,10000}$/;
class UserLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkValidateUserId: false,
      messageErrorUserId: '',
      checkValidatePassword: false,
      messageErrorPassword: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.clearMessegerError();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let checkValidateAllFeild = true;
        if (
          !values.userName ||
          (values.userName && values.userName.trim() === '')
        ) {
          this.setState({
            checkValidateUserId: true,
            messageErrorUserId: C.MESSAGE_NULL,
          });
          checkValidateAllFeild = false;
        } else if (
          values.userName &&
          !REGEX_CHECK_ALPHA_NUMBERIC.test(values.userName.trim())
        ) {
          this.setState({
            checkValidateUserId: true,
            messageErrorUserId: C.MESSAGE_NOT_LATIN,
          });
          checkValidateAllFeild = false;
        }

        if (!values.password || (values.password && values.password === '')) {
          this.setState({
            checkValidatePassword: true,
            messageErrorPassword: C.MESSAGE_NULL,
          });
          checkValidateAllFeild = false;
        } else if (
          values.password &&
          !REGEX_CHECK_ALPHA_NUMBERIC.test(values.password)
        ) {
          this.setState({
            checkValidatePassword: true,
            messageErrorPassword: C.MESSAGE_NOT_LATIN,
          });
          checkValidateAllFeild = false;
        }

        if (checkValidateAllFeild) {
          const requestApiBody = {
            userId: values.userName,
            password: values.password,
          };
          this.props.actions.handleCallApiLogin(
            requestApiBody,
            this.redirectAfterLogin,
          );
        }
      }
    });
  };

  redirectAfterLogin = () => {
    const currentPath = window.location.pathname;
    // only redirect to top when login page or notthing
    if (currentPath === '' || currentPath === '/' || currentPath === '/login') {
      this.props.history.push('/top');
    }
    this.props.reloadAppPage();
  };

  clearMessegerError = () => {
    this.props.actions.hideErrorMessage();
  };

  clearMessegerErrorUserId = () => {
    this.setState({ checkValidateUserId: false });
  };

  clearMessegerErrorPassword = () => {
    this.setState({ checkValidatePassword: false });
  };

  // #region Function.
  userNameFn = element =>
    this.props.form.getFieldDecorator('userName', {
      // rules: [
      //   {
      //     pattern: REGEX_CHECK_ALPHA_NUMBERIC,
      //     message: C.MESSAGE_NOT_LATIN,
      //   },
      // ],
    })(element);

  passwordFn = element =>
    this.props.form.getFieldDecorator('password', {})(element);

  rememberFn = element =>
    this.props.form.getFieldDecorator('remember', {
      valuePropName: 'checked',
      initialValue: true,
    })(element);
  // #endregion .

  showMessageError = (show, messageToShow) =>
    show && (
      <Alert
        message={
          messageToShow || 'ユーザーIDまたはパスワードは正しくありません。'
        }
        type="error"
        showIcon
      />
    );

  handleNotFound = apiResponse => {
    if (apiResponse.mainMessage) {
      this.props.actions.showErrorMessage(apiResponse.mainMessage);
    }
  };

  getAllMessage = messageFromApi => {
    if (messageFromApi && messageFromApi.status === 400) {
      if (messageFromApi.detailMessage && messageFromApi.detailMessage.userId)
        this.setState({
          checkValidateUserId: true,
          messageErrorUserId: messageFromApi.detailMessage.userId,
        });

      if (messageFromApi.detailMessage && messageFromApi.detailMessage.password)
        this.setState({
          checkValidatePassword: true,
          messageErrorPassword: messageFromApi.detailMessage.password,
        });
    }
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Row
          type="flex"
          justify="center"
          gutter={12}
          style={{ marginTop: 150, marginRight: 0, marginLeft: 0 }}
        >
          <Col>
            <Card style={{ marginBottom: 16, width: 350 }} bordered={false}>
              <Form
                onSubmit={this.handleSubmit}
                className="login-form"
                ref={f => {
                  this.form = f;
                }}
              >
                <Row>
                  <FormItem
                    validateStatus={
                      this.state.checkValidateUserId ? 'error' : ''
                    }
                    help={
                      this.state.checkValidateUserId
                        ? this.state.messageErrorUserId
                        : ''
                    }
                  >
                    {this.userNameFn(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />
                        }
                        placeholder="User name"
                        autoFocus
                        onFocus={this.clearMessegerErrorUserId}
                      />,
                    )}
                  </FormItem>
                  <FormItem
                    validateStatus={
                      this.state.checkValidatePassword ? 'error' : ''
                    }
                    help={
                      this.state.checkValidatePassword
                        ? this.state.messageErrorPassword
                        : ''
                    }
                  >
                    {this.passwordFn(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />
                        }
                        type="password"
                        placeholder="Password"
                        onFocus={this.clearMessegerErrorPassword}
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    {this.showMessageError(
                      this.props.userLoginPage.errorMessage.show,
                      this.props.userLoginPage.errorMessage.message,
                    )}
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Login
                    </Button>
                  </FormItem>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
        <PageBase
          handleNotFound={this.handleNotFound}
          getAllMessage={this.getAllMessage}
          apiResponse={this.props.userLoginPage.messageFromApi}
        />
      </Layout>
    );
  }
}

UserLoginPage.propTypes = {
  form: PropTypes.object,
  actions: PropTypes.object,
  reloadAppPage: PropTypes.func,
  history: PropTypes.object,
  userLoginPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userLoginPage: makeSelectUserLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const WrappedNormalLoginForm = Form.create()(UserLoginPage);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userLoginPage', reducer });
const withSaga = injectSaga({ key: 'userLoginPage', saga });

export default withRouter(
  compose(
    withReducer,
    withSaga,
    withConnect,
  )(WrappedNormalLoginForm),
);
