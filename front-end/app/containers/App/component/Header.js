import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import {
  Layout,
  message,
  Avatar,
  Row,
  Col,
  Menu,
  Icon,
  Dropdown,
  Button,
} from 'antd';
import { withRouter } from 'react-router-dom';
import { PAGE_TITLE } from '../constants';
// import AppSession from '../../../utils/appSession';
import ChangePassword from './ChangePassword';
// import requestApi from '../../../../api/requestApi';
import PageBase from '../../../components/PageBase';
// eslint-disable-next-line
import style from './componentStyle.less';
import Search from 'antd/lib/input/Search';

const { Header } = Layout;

// const appSession = new AppSession();
class TopHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      messageFromApi: {
        status: 0,
        detailMessage: [],
        mainMessage: '',
      },
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCallApiSuccess = () => {
    message.success('パスワードが変更されました。', 5);
    this.handleCancel();
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  menu = (
    <Menu onClick={() => {}}>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <Header className="page-header">
        <Row className="page-header-row-content">
          <Col sm={6}>
            <h4 className="page-title">{PAGE_TITLE}</h4>
          </Col>
          <Col sm={17}>
            <Dropdown overlay={this.menu}>
              <Button size="large">
                Category <Icon type="down" />
              </Button>
            </Dropdown>
            <Search
              placeholder="What do you want to test ?"
              onSearch={value => console.log(value)}
              className="header-search"
              size="large"
            />
          </Col>
          <Col sm={1}>
            <Avatar className="header-avatar" size={48} icon="user" />
          </Col>
        </Row>
      </Header>
    );
  }
}

TopHeader.propTypes = {};

export default withRouter(TopHeader);
