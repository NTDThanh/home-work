/**
 *
 * ButtonWithLargeIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'antd';
// import styled from 'styled-components';

export class ButtonWithLargeIcon extends React.PureComponent {
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

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const buttonStyle = this.props.focus
      ? this.styles.buttonOnFocus
      : this.styles.button;

    const iconStyle = this.props.focus
      ? this.styles.iconOnFocus
      : this.styles.icon;

    return (
      <>
        <Button size="large" style={buttonStyle} onClick={this.onClick}>
          <Icon
            style={iconStyle}
            type={this.props.iconName || 'filter'}
            theme="filled"
            size="large"
          />
        </Button>
      </>
    );
  }
}

ButtonWithLargeIcon.propTypes = {
  iconName: PropTypes.string,
  onClick: PropTypes.func,
  focus: PropTypes.bool,
};

export default ButtonWithLargeIcon;
