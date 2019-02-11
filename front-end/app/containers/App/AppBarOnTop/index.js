/**
 *
 * AppBarOnTop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Button,
  Row,
  Badge,
  Input,
  Col,
  Avatar,
} from 'antd';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAppBarOnTop from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import saga from './saga';
import SearchWithCategory from '../../../components/SearhWithCategory';
import messages from './messages';
import logo from '../../../images/certificate-logo-124x124.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
/* eslint-disable react/prefer-stateless-function */
export class AppBarOnTop extends React.PureComponent {
  state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Header className="header">
          <Row className="header-controls">
            <Col span={2}>
              <Button
                className="button-outline-logo-image"
                onClick={this.toggleCollapsed}
              >
                <img className="logo-image" src={logo} alt="logo" />
              </Button>
            </Col>
            <Col span={17}>
              <SearchWithCategory />
            </Col>
            <Col span={5}>
              <div className="header-user-notification">
                <Button className="large-icon-border header-notification-button">
                  <Badge dot style={{ padding: 5 }}>
                    <Icon
                      type="bell"
                      theme="filled"
                      className="large-icon header-icon"
                    />
                  </Badge>
                </Button>
                <Button className="large-icon-border header-user-avatar">
                  <span className="header-user-name">Tạ Duy Thanh</span>
                  <Avatar icon="user" style={{ height: 30, width: 30 }} />
                </Button>
              </div>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider
            className="menu-sider"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              className="menu-left-side"
            >
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                background: '#F3F3F3',
                padding: '30px 30px 0px 35px',
                margin: 0,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

AppBarOnTop.propTypes = {};

const mapStateToProps = createStructuredSelector({
  appBarOnTop: makeSelectAppBarOnTop(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'appBarOnTop', reducer });
const withSaga = injectSaga({ key: 'appBarOnTop', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AppBarOnTop);
