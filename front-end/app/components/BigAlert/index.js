/**
 *
 * BigAlert
 *
 */

import React from 'react';
import { Layout, Button } from 'antd';
import PropTypes from 'prop-types';
import IconCricle from '../Icon/Circle';
import * as styleUtil from '../../utils/styleUtil';

function BigAlert(props) {
  const { grandients, iconGrandients } = props;
  const styles = {
    content: {
      padding: '30px 50px 30px 20px',
      minHeight: 110,
      backgroundImage: `linear-gradient(${grandients.linear ||
        'to bottom right'},${grandients.colorStop1 ||
        '#FF418C'} , ${grandients.colorStop2 || '#F1892C'})`,
      display: 'block',
      borderRadius: 4,
      boxShadow: `0px 6px 20px ${styleUtil.hexToRGBOrRGBA(
        grandients.shadowColor,
        0.18,
      ) || '#cccccc'}`,
    },
    icon: {
      float: 'left',
    },
    text: {
      float: 'left',
      margin: '0px 0px 0px 14px',
    },
    header: {
      fontSize: 20,
      lineHeight: '27px',
      color: 'white',
    },
    subHeader: {
      fontSize: 13,
      lineHeight: '17px',
      color: 'white',
    },
    button: {
      float: 'right',
      minWidth: 220,
      height: 50,
      fontSize: 18,
      fontWeight: 700,
    },
  };
  return (
    <React.Fragment>
      <Layout style={styles.content}>
        <div style={styles.icon}>
          <IconCricle
            iconName={props.iconName || 'start'}
            grandients={iconGrandients}
          />
        </div>
        <div style={styles.text}>
          <h4 style={styles.header}>{props.header}</h4>
          <h6 style={styles.subHeader}>{props.subHeader}</h6>
        </div>
        <Button
          size="large"
          style={styles.button}
          onClick={() => {
            if (props.handleClick) {
              props.handleClick();
            }
          }}
        >
          {props.buttonText}
        </Button>
      </Layout>
    </React.Fragment>
  );
}

BigAlert.propTypes = {
  iconName: PropTypes.string,
  iconGrandients: PropTypes.object,
  grandients: PropTypes.object,
  header: PropTypes.element,
  subHeader: PropTypes.element,
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
};

export default BigAlert;
