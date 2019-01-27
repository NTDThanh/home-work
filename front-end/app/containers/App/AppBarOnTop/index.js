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
import { Layout, Menu, Breadcrumb, Icon, Button, Row } from 'antd';
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
          <div className="logo-custom">
            <Button
              className="button-outline-logo-image"
              onClick={this.toggleCollapsed}
            >
              <img className="logo-image" src={logo} alt="logo" />
            </Button>
          </div>
          <Row className="header-controls">
            <SearchWithCategory />
          </Row>
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
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
