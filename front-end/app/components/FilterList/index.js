/**
 *
 * FilterList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Tabs, Button, Icon, Layout } from 'antd';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import ButtonWithLargeIcon from '../ButtonWithLargeIcon';

const { TabPane } = Tabs;

/* eslint-disable react/prefer-stateless-function */
class FilterList extends React.PureComponent {
  state = {
    focus: false,
    showDropdown: false,
  };

  styles = {
    button: {
      height: 50,
      width: 50,
      borderRadius: 6,
      borderColor: '#ECEBF3',
      padding: '0 13px',
    },
    buttonOnFocus: {
      height: 50,
      width: 50,
      borderRadius: 6,
      backgroundColor: '#FCE6DD',
      borderColor: '#FF70A8',
      padding: '0 13px',
    },
    icon: { color: '#000000', opacity: 0.3, fontSize: 22 },
    iconOnFocus: { color: '#FF6EA6', opacity: 1, fontSize: 22 },
  };

  handleFocus = () => {
    this.setState({ focus: true });
  };

  handleBlur = () => {
    this.setState({ focus: false });
    this.toggleDropdown();
  };

  toggleDropdown = () => {
    const { showDropdown } = this.state;
    this.setState({ showDropdown: !showDropdown });
  };

  handleButtonClick = () => {
    this.toggleDropdown();
  };

  render() {
    const menu = (
      <Layout style={{ width: 500, backgroundColor: 'white' }}>
        <Tabs tabPosition="top">
          <TabPane tab="Tab 1" key="1">
            {' '}
            <Menu>
              <Menu.Item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.alipay.com/"
                >
                  1st menu item
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.taobao.com/"
                >
                  2nd menu item
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.tmall.com/"
                >
                  3rd menu item
                </a>
              </Menu.Item>
            </Menu>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </Layout>
    );

    const buttonStyle = this.state.focus
      ? this.styles.buttonOnFocus
      : this.styles.button;

    const iconStyle = this.state.focus
      ? this.styles.iconOnFocus
      : this.styles.icon;

    return (
      <>
        {this.props.dropdown && (
          <Dropdown
            // onBlur={this.handleBlur}
            overlay={menu}
            placement="bottomRight"
            visible={this.state.showDropdown}
          >
            <Button
              size="large"
              style={buttonStyle}
              onFocus={this.handleFocus}
              onClick={this.handleButtonClick}
            >
              <Icon
                style={iconStyle}
                type="filter"
                theme="filled"
                size="large"
              />
            </Button>
          </Dropdown>
        )}
      </>
    );
  }
}

FilterList.propTypes = {
  dropdown: PropTypes.bool,
};

export default FilterList;
