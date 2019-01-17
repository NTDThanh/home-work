import React, { PureComponent } from 'react';
import Sider from 'antd/lib/layout/Sider';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import styles from '../styles.less'; // eslint-disable-line

class MainSider extends PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        width={250}
      >
        <div className="logo">
          <Icon type="picture" />
          <h3>ImgProcessingSystem</h3>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="dashboard" />
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="picture" />
            <Link to="/images/list">Images</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="video-camera" />
            <Link to="/videos">Videos</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <Link to="/users">User</Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="code" />
                <span>Demo</span>
              </span>
            }
          >
            <Menu.Item key="7">
              <Link to="/images/convert">Convert Image</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/videos/convert">Convert Video</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="5">
            <Icon type="setting" />
            <Link to="/setting">Setting</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default MainSider;
