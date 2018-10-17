/**
 *
 * UserLoginPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose, bindActionCreators } from "redux";
import withStyles from "@material-ui/core/styles/withStyles";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import makeSelectUserLoginPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import * as actions from "./actions";
import * as C from "./constants";
import avatar from "assets/img/faces/student-avarta.png";
import CustomInput from "components/CustomInput/CustomInput.jsx";
// React animation
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const styles = {
  loginpagecontainer: {
    marginTop: 20,
    padding: 15
  }
};
/* eslint-disable react/prefer-stateless-function */
export class UserLoginPage extends React.PureComponent {
  handleLogin = () => {
    const loginInfo = {
      user: {
        account: this.props.userloginpage.account,
        password: this.props.userloginpage.password
      },
      redirectLink: "/dashboard"
    };
    this.props.actions.handleLogin(loginInfo);
  };

  handleRegister = () => {
    const loginInfo = {
      user: {
        userName: this.props.userloginpage.register.userName,
        email: this.props.userloginpage.register.userName,
        password: this.props.userloginpage.register.password,
        image: this.props.userloginpage.register.image
      },
      redirectLink: "/dashboard"
    };
    this.props.actions.handleLogin(loginInfo);
  };

  handleInputChange = e => {
    const { target } = e;
    const { value, name } = target;
    this.props.actions.onChangeInput(name, value);
  };

  handleRegisterInputChange = e => {
    const { target } = e;
    const { value, name } = target;
    const reducerPath = ["register", name];
    this.props.actions.onChangeRegisterInput(reducerPath, value);
  };

  handleRedirect = redirectLink => {
    this.props.history.push(redirectLink);
  };

  switchMode = () => {
    this.props.actions.switchMode(this.props.userloginpage.mode);
  };

  //[Todo] Case email correct but password is wrong, show button forget password
  render() {
    const { classes, profilePic = avatar, userloginpage } = this.props;
    return userloginpage.mode === C.LOGIN_MODE ? (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div className={classes.loginpagecontainer}>
          <Helmet>
            <title>Home work login</title>
            <meta name="description" content="Home work login, singin" />
          </Helmet>
          <GridContainer
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <GridItem xs={10} sm={10} md={4} lg={3} xl={3} justify="center">
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      src={profilePic}
                      alt={messages.profilePic.defaultMessage}
                    />
                  </a>
                </CardAvatar>
                <CardBody profile>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText={<FormattedMessage {...messages.accLabel} />}
                        id="acc"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          autoFocus: true,
                          onChange: this.handleInputChange,
                          name: "account",
                          value: userloginpage.account
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText={<FormattedMessage {...messages.passLabel} />}
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          onChange: this.handleInputChange,
                          name: "password",
                          value: userloginpage.password
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <Button color="primary" round onClick={this.handleLogin}>
                    Login
                  </Button>
                  <br />
                  or <br />
                  <Button
                    round
                    className={classes.button}
                    onClick={() => this.switchMode()}
                  >
                    Register
                  </Button>
                  <p className={classes.description}>
                    Học không biết chán, dạy người không biết mỏi. <br />
                    <b>Khổng Tử</b>
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </ReactCSSTransitionGroup>
    ) : (
      //REGISTER AREA
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div className={classes.loginpagecontainer}>
          <Helmet>
            <title>Home work register</title>
            <meta name="description" content="Home work register" />
          </Helmet>
          <GridContainer
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <GridItem xs={10} sm={10} md={4} lg={3} xl={3} justify="center">
              <Card profile>
                <CardAvatar profile isUpload />
                <CardBody profile>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText={
                          <FormattedMessage {...messages.userNameLabel} />
                        }
                        id="userName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          autoFocus: true,
                          onChange: this.handleRegisterInputChange,
                          name: "userName",
                          value: userloginpage.register.userName
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText={
                          <FormattedMessage {...messages.emailLabel} />
                        }
                        id="userEmail"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          onChange: this.handleRegisterInputChange,
                          name: "email",
                          value: userloginpage.register.email
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText={<FormattedMessage {...messages.passLabel} />}
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          onChange: this.handleRegisterInputChange,
                          name: "password",
                          value: userloginpage.register.password
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <Button color="primary" round onClick={this.handleRegister}>
                    Register
                  </Button>
                  <br />
                  or <br />
                  <Button
                    round
                    className={classes.button}
                    onClick={() => this.switchMode()}
                  >
                    Login
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

UserLoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  userloginpage: makeSelectUserLoginPage()
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withStyle = withStyles(styles);
const withReducer = injectReducer({ key: "userLoginPage", reducer });
const withSaga = injectSaga({ key: "userLoginPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle
)(UserLoginPage);
