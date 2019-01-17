import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import AppSession from '../../utils/appSession';
import * as globalConst from '../../constants';

const menuAdminList = [
  {
    name: 'トップ',
    link: '/top',
    iconText: 'dashboard',
    key: 'top',
  },
  {
    name: '画像',
    link: '/images/list',
    iconText: 'picture',
    key: 'images',
  },
  {
    name: '動画',
    link: '/videos',
    iconText: 'video-camera',
    key: 'videos',
  },
  {
    name: '設定',
    link: '/setting',
    iconText: 'setting',
    key: 'setting',
  },
  {
    name: '管理者画面',
    link: '/dashboard',
    iconText: 'user',
    key: 'dashboard',
  },
];

const menuUserList = [
  {
    name: 'トップ',
    link: '/top',
    iconText: 'dashboard',
    key: 'top',
  },
  {
    name: '画像',
    link: '/images/list',
    iconText: 'picture',
    key: 'images',
  },
  {
    name: '動画',
    link: '/videos',
    iconText: 'video-camera',
    key: 'videos',
  },
  {
    name: '設定',
    link: '/setting',
    iconText: 'setting',
    key: 'setting',
  },
];

const appsession = new AppSession();
class TabMenu extends React.Component {
  state = {
    current: 'top',
  };

  componentDidMount = () => {
    if (window.location.pathname.split('/')[1] !== '')
      this.setState({
        current: window.location.pathname.split('/')[1],
      });
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
    this.props.reloadAppPage();
  };

  getMenuByUserRole = () => {
    if (appsession.getUserRole() === globalConst.USER_ROLE.admin) {
      return menuAdminList;
    }

    if (appsession.getUserRole() === globalConst.USER_ROLE.user) {
      return menuUserList;
    }

    return [];
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {this.getMenuByUserRole().map(item => (
          <Menu.Item className="main-menu-item" key={item.key}>
            <Link className="main-menu-link" to={item.link}>
              <Icon className="main-menu-icon" type={item.iconText} />
              {item.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
TabMenu.propTypes = {
  // menuItems: PropTypes.array,
  reloadAppPage: PropTypes.func,
};

export default TabMenu;
